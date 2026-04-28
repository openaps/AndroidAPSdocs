#!/usr/bin/env python3
"""Local docs validation helper for AndroidAPS documentation.

Checks:
1) Broken anchors and reference calls.
2) Broken links (local links by default, optional remote links).
3) Missing pictures.
4) Remote pictures (availability).
5) Unused pictures.
"""

from __future__ import annotations

import argparse
import concurrent.futures
import re
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable
from urllib.parse import unquote, urlsplit
from urllib.request import Request, urlopen


IMAGE_EXTENSIONS = {
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".svg",
    ".webp",
    ".bmp",
    ".ico",
    ".avif",
}

IGNORED_DIR_NAMES = {
    ".git",
    ".venv",
    "venv",
    "__pycache__",
    "_build",
}

MARKDOWN_LINK_RE = re.compile(r"(?<!!)\[[^\]]*\]\(([^)]+)\)")
MARKDOWN_IMAGE_RE = re.compile(r"!\[[^\]]*\]\(([^)]+)\)")
MARKDOWN_REF_DEF_RE = re.compile(r"^\s*\[([^\]]+)\]:\s*(\S+)")
MARKDOWN_REF_USE_RE = re.compile(r"(?<!!)\[[^\]]+\]\[([^\]]+)\]")
MARKDOWN_IMAGE_REF_USE_RE = re.compile(r"!\[[^\]]*\]\[([^\]]+)\]")
HEADING_RE = re.compile(r"^\s{0,3}(#{1,6})\s+(.*)$")
EXPLICIT_ANCHOR_RE = re.compile(r"\{#([A-Za-z0-9_.:-]+)\}")
MYST_TARGET_RE = re.compile(r"^\s*\(([A-Za-z0-9_.:-]+)\)=\s*$")
HTML_SRC_RE = re.compile(r"<img\s+[^>]*src\s*=\s*[\"']([^\"']+)[\"']", re.IGNORECASE)
HTML_HREF_RE = re.compile(r"<a\s+[^>]*href\s*=\s*[\"']([^\"']+)[\"']", re.IGNORECASE)
INLINE_CODE_RE = re.compile(r"`[^`]*`")
DOCS_HOSTS = {"androidaps.readthedocs.io", "wiki.aaps.app"}


@dataclass
class LinkOccurrence:
    source_file: Path
    line_number: int
    raw_target: str


GITHUB_ASSETS_PREFIX = "https://github.com/user-attachments/assets/"


@dataclass
class ValidationResult:
    broken_anchors_and_calls: list[str]
    disallowed_header_doc_links: list[str]
    broken_links: list[str]
    missing_pictures: list[str]
    remote_picture_errors: list[str]
    remote_picture_warnings: list[str]
    remote_pictures_seen: list[str]
    unused_pictures: list[str]

    def has_failures(self, fail_on_unused: bool) -> bool:
        if (
            self.broken_anchors_and_calls
            or self.disallowed_header_doc_links
            or self.broken_links
            or self.missing_pictures
            or self.remote_picture_errors
        ):
            return True
        return bool(fail_on_unused and self.unused_pictures)


def slugify_heading(text: str) -> str:
    text = re.sub(r"\{#([A-Za-z0-9_.:-]+)\}", "", text)
    text = re.sub(r"`([^`]*)`", r"\1", text)
    text = re.sub(r"\[[^\]]*\]\(([^)]*)\)", "", text)
    text = text.strip().lower()
    text = re.sub(r"[^a-z0-9\s\-_]", "", text)
    text = re.sub(r"[\s_]+", "-", text)
    text = re.sub(r"-+", "-", text)
    return text.strip("-")


def is_remote_url(url: str) -> bool:
    scheme = urlsplit(url).scheme.lower()
    return scheme in {"http", "https"}


def is_skippable_url(url: str) -> bool:
    scheme = urlsplit(url).scheme.lower()
    return scheme in {"mailto", "tel", "javascript", "data", "ftp"}


def clean_link_target(raw_target: str) -> str:
    target = raw_target.strip()
    if target.startswith("<") and target.endswith(">"):
        target = target[1:-1]
    if " " in target:
        target = target.split(" ", 1)[0]
    return target


def collect_markdown_files(lang_dir: Path) -> list[Path]:
    files: list[Path] = []
    for file_path in lang_dir.rglob("*.md"):
        if any(part in IGNORED_DIR_NAMES for part in file_path.parts):
            continue
        files.append(file_path)
    return sorted(files)


def collect_anchors_by_file(markdown_files: Iterable[Path]) -> dict[Path, set[str]]:
    anchors_by_file: dict[Path, set[str]] = {}
    explicit_anchors_by_file: dict[Path, set[str]] = {}
    heading_anchors_by_file: dict[Path, set[str]] = {}
    for file_path in markdown_files:
        anchors: set[str] = set()
        explicit_anchors: set[str] = set()
        heading_anchors: set[str] = set()
        text = file_path.read_text(encoding="utf-8", errors="ignore")
        for line in text.splitlines():
            myst_target_match = MYST_TARGET_RE.match(line)
            if myst_target_match:
                anchor = myst_target_match.group(1).lower()
                anchors.add(anchor)
                explicit_anchors.add(anchor)

            heading_match = HEADING_RE.match(line)
            if heading_match:
                heading_text = heading_match.group(2).strip().rstrip("#").strip()
                explicit_anchor = EXPLICIT_ANCHOR_RE.search(heading_text)
                if explicit_anchor:
                    anchor = explicit_anchor.group(1).lower()
                    anchors.add(anchor)
                    explicit_anchors.add(anchor)
                slug = slugify_heading(heading_text)
                if slug:
                    anchors.add(slug)
                    heading_anchors.add(slug)

            for explicit_anchor in EXPLICIT_ANCHOR_RE.findall(line):
                anchor = explicit_anchor.lower()
                anchors.add(anchor)
                explicit_anchors.add(anchor)

        resolved_file = file_path.resolve()
        anchors_by_file[resolved_file] = anchors
        explicit_anchors_by_file[resolved_file] = explicit_anchors
        heading_anchors_by_file[resolved_file] = heading_anchors
    return anchors_by_file, explicit_anchors_by_file, heading_anchors_by_file


def resolve_target_markdown_file(source_file: Path, lang_dir: Path, target: str) -> Path | None:
    parsed = urlsplit(target)
    path = unquote(parsed.path)

    if parsed.scheme in {"http", "https"}:
        host = parsed.netloc.lower()
        if host not in DOCS_HOSTS:
            return None

        parts = [part for part in path.strip("/").split("/") if part]
        if len(parts) >= 3 and parts[0] in {"en", "de", "fr", "cs", "es", "it", "pl", "tr", "ru", "zh", "latest"}:
            if parts[1] == "latest" or parts[1].replace(".", "").isdigit():
                parts = parts[2:]

        if not parts:
            return None

        if parts[-1].endswith(".html"):
            parts[-1] = parts[-1][:-5] + ".md"
            candidate = (lang_dir / Path(*parts)).resolve()
            if candidate.exists():
                return candidate
        return None

    local_candidate = resolve_local_target(source_file, lang_dir, target)
    if local_candidate.suffix.lower() == ".md" and local_candidate.exists():
        return local_candidate.resolve()
    if local_candidate.suffix.lower() == ".html":
        md_candidate = local_candidate.with_suffix(".md")
        if md_candidate.exists():
            return md_candidate.resolve()
    if local_candidate.suffix == "":
        md_candidate = local_candidate.with_suffix(".md")
        if md_candidate.exists():
            return md_candidate.resolve()
        index_candidate = local_candidate / "index.md"
        if index_candidate.exists():
            return index_candidate.resolve()
    return None


def parse_markdown_links(markdown_file: Path) -> tuple[list[LinkOccurrence], list[LinkOccurrence], set[str], set[str]]:
    links: list[LinkOccurrence] = []
    images: list[LinkOccurrence] = []
    reference_defs: set[str] = set()
    reference_uses: set[str] = set()

    lines = markdown_file.read_text(encoding="utf-8", errors="ignore").splitlines()
    in_fenced_code_block = False
    in_myst_directive_fence = False
    fence_marker = ""

    for line_number, line in enumerate(lines, start=1):
        stripped = line.strip()

        if in_myst_directive_fence:
            if stripped == "```":
                in_myst_directive_fence = False
                continue

        if stripped.startswith("```{") and not in_fenced_code_block:
            in_myst_directive_fence = True
            continue

        # Handle fenced code blocks while keeping MyST directive fences parseable.
        if stripped.startswith("```") or stripped.startswith("~~~"):
            marker = "```" if stripped.startswith("```") else "~~~"

            if in_fenced_code_block and marker == fence_marker:
                in_fenced_code_block = False
                fence_marker = ""
                continue

            if not in_fenced_code_block:
                # MyST directive fences like ```{admonition} can contain valid links/images.
                # Single-line fenced blocks (```code```) should not alter parser state.
                if stripped.count(marker) >= 2:
                    continue
                in_fenced_code_block = True
                fence_marker = marker
                continue

        if in_fenced_code_block:
            continue

        sanitized_line = INLINE_CODE_RE.sub("", line)

        for ref_def in MARKDOWN_REF_DEF_RE.finditer(sanitized_line):
            reference_defs.add(ref_def.group(1).strip().lower())

        for ref_use in MARKDOWN_REF_USE_RE.finditer(sanitized_line):
            label = ref_use.group(1).strip().lower()
            if label:
                reference_uses.add(label)

        for image_ref_use in MARKDOWN_IMAGE_REF_USE_RE.finditer(sanitized_line):
            label = image_ref_use.group(1).strip().lower()
            if label:
                reference_uses.add(label)

        for match in MARKDOWN_IMAGE_RE.finditer(sanitized_line):
            images.append(LinkOccurrence(markdown_file, line_number, clean_link_target(match.group(1))))

        for match in MARKDOWN_LINK_RE.finditer(sanitized_line):
            links.append(LinkOccurrence(markdown_file, line_number, clean_link_target(match.group(1))))

        for match in HTML_SRC_RE.finditer(sanitized_line):
            images.append(LinkOccurrence(markdown_file, line_number, clean_link_target(match.group(1))))

        for match in HTML_HREF_RE.finditer(sanitized_line):
            links.append(LinkOccurrence(markdown_file, line_number, clean_link_target(match.group(1))))

    return links, images, reference_defs, reference_uses


def resolve_local_target(source_file: Path, lang_dir: Path, target: str) -> Path:
    decoded = unquote(urlsplit(target).path)
    if decoded.startswith("/"):
        candidate = (lang_dir / decoded.lstrip("/")).resolve()
    else:
        candidate = (source_file.parent / decoded).resolve()
    return candidate


def target_exists(candidate: Path) -> bool:
    if candidate.exists():
        return True

    if candidate.suffix == "":
        md_candidate = candidate.with_suffix(".md")
        if md_candidate.exists():
            return True
        index_candidate = candidate / "index.md"
        if index_candidate.exists():
            return True
    return False


def is_image_target(target: str, resolved_path: Path | None = None) -> bool:
    target_path = urlsplit(target).path.lower()
    if any(target_path.endswith(ext) for ext in IMAGE_EXTENSIONS):
        return True
    if resolved_path is not None and resolved_path.suffix.lower() in IMAGE_EXTENSIONS:
        return True
    return False


def check_remote_url(url: str, timeout_seconds: int) -> tuple[bool, str]:
    try:
        req = Request(url, headers={"User-Agent": "AndroidAPSdocs-local-check/1.0"}, method="HEAD")
        with urlopen(req, timeout=timeout_seconds) as response:
            status = getattr(response, "status", 200)
            if 200 <= status < 400:
                return True, f"HTTP {status}"

        req = Request(url, headers={"User-Agent": "AndroidAPSdocs-local-check/1.0"}, method="GET")
        with urlopen(req, timeout=timeout_seconds) as response:
            status = getattr(response, "status", 200)
            if 200 <= status < 400:
                return True, f"HTTP {status}"
            return False, f"HTTP {status}"
    except Exception as exc:  # noqa: BLE001
        return False, str(exc)


def format_issue(path: Path, line: int, message: str) -> str:
    return f"{path.as_posix()}:{line}: {message}"


def run_validation(
    lang_dir: Path,
    check_remote_links: bool,
    timeout_seconds: int,
    workers: int,
) -> ValidationResult:
    markdown_files = collect_markdown_files(lang_dir)
    anchors_by_file, explicit_anchors_by_file, heading_anchors_by_file = collect_anchors_by_file(markdown_files)

    broken_anchors_and_calls: list[str] = []
    disallowed_header_doc_links: list[str] = []
    broken_links: list[str] = []
    missing_pictures: list[str] = []
    remote_picture_errors: list[str] = []
    remote_picture_warnings: list[str] = []
    remote_pictures_seen: set[str] = set()

    all_used_local_pictures: set[Path] = set()
    reference_defs_by_file: dict[Path, set[str]] = {}
    reference_uses_by_file: dict[Path, set[str]] = {}

    remote_non_image_links: set[str] = set()

    for markdown_file in markdown_files:
        links, images, reference_defs, reference_uses = parse_markdown_links(markdown_file)
        reference_defs_by_file[markdown_file] = reference_defs
        reference_uses_by_file[markdown_file] = reference_uses

        for occurrence in links:
            target = occurrence.raw_target
            if not target or is_skippable_url(target):
                continue

            if target.startswith("#"):
                # Same-page links are accepted as valid in this docs project.
                continue

            if target.startswith("../_static/"):
                # Static assets are served by Sphinx and are not validated here.
                continue

            if is_remote_url(target):
                if check_remote_links:
                    remote_non_image_links.add(target)
                continue

            parsed = urlsplit(target)
            fragment = parsed.fragment.lower() if parsed.fragment else ""

            if fragment:
                target_markdown = resolve_target_markdown_file(occurrence.source_file, lang_dir, target)
                if target_markdown is not None and target_markdown.resolve() != occurrence.source_file.resolve():
                    heading_anchors = heading_anchors_by_file.get(target_markdown.resolve(), set())
                    explicit_anchors = explicit_anchors_by_file.get(target_markdown.resolve(), set())
                    if fragment in heading_anchors and fragment not in explicit_anchors:
                        disallowed_header_doc_links.append(
                            format_issue(
                                occurrence.source_file,
                                occurrence.line_number,
                                (
                                    f"Disallowed docs header link '{target}'. "
                                    "Use an explicit anchor label (e.g. '(my-anchor)=') in the target page."
                                ),
                            )
                        )

            resolved = resolve_local_target(occurrence.source_file, lang_dir, target)

            if not target_exists(resolved):
                broken_links.append(
                    format_issue(
                        occurrence.source_file,
                        occurrence.line_number,
                        f"Broken local link '{target}'.",
                    )
                )
                continue

            resolved_link_target = resolved
            if not resolved_link_target.exists() and resolved_link_target.suffix == "":
                for ext in sorted(IMAGE_EXTENSIONS):
                    candidate = resolved_link_target.with_suffix(ext)
                    if candidate.exists():
                        resolved_link_target = candidate
                        break

            if resolved_link_target.exists() and is_image_target(target, resolved_link_target):
                all_used_local_pictures.add(resolved_link_target.resolve())
                # No anchor checks for direct image file links.
                continue

            if fragment:
                target_file = resolved
                if not target_file.exists() and target_file.suffix == "":
                    if target_file.with_suffix(".md").exists():
                        target_file = target_file.with_suffix(".md")
                    elif (target_file / "index.md").exists():
                        target_file = target_file / "index.md"

                if target_file.resolve() == occurrence.source_file.resolve():
                    # Same-page links are accepted as valid in this docs project.
                    continue

                if target_file.suffix.lower() == ".md":
                    anchors = anchors_by_file.get(target_file.resolve(), set())
                    if fragment not in anchors:
                        broken_anchors_and_calls.append(
                            format_issue(
                                occurrence.source_file,
                                occurrence.line_number,
                                f"Broken anchor '#{fragment}' in '{target}'.",
                            )
                        )

        for occurrence in images:
            target = occurrence.raw_target
            if not target or is_skippable_url(target):
                continue

            if is_remote_url(target):
                if is_image_target(target):
                    remote_pictures_seen.add(target)
                else:
                    broken_links.append(
                        format_issue(
                            occurrence.source_file,
                            occurrence.line_number,
                            f"Image reference points to non-image remote URL '{target}'.",
                        )
                    )
                continue

            resolved = resolve_local_target(occurrence.source_file, lang_dir, target)
            if not target_exists(resolved):
                missing_pictures.append(
                    format_issue(
                        occurrence.source_file,
                        occurrence.line_number,
                        f"Missing image '{target}'.",
                    )
                )
                continue

            resolved_final = resolved
            if not resolved_final.exists() and resolved_final.suffix == "":
                for ext in sorted(IMAGE_EXTENSIONS):
                    candidate = resolved_final.with_suffix(ext)
                    if candidate.exists():
                        resolved_final = candidate
                        break

            if resolved_final.exists() and is_image_target(target, resolved_final):
                all_used_local_pictures.add(resolved_final.resolve())

    for markdown_file, defs in reference_defs_by_file.items():
        for used in reference_uses_by_file.get(markdown_file, set()):
            if used not in defs:
                broken_anchors_and_calls.append(
                    format_issue(markdown_file, 1, f"Undefined markdown reference call '[...][{used}]'.")
                )

    if remote_pictures_seen:
        with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as executor:
            future_map = {
                executor.submit(check_remote_url, url, timeout_seconds): url for url in sorted(remote_pictures_seen)
            }
            for future in concurrent.futures.as_completed(future_map):
                url = future_map[future]
                ok, status = future.result()
                if not ok:
                    if url.startswith(GITHUB_ASSETS_PREFIX):
                        remote_picture_errors.append(f"{url} -> {status}")
                    else:
                        remote_picture_warnings.append(f"{url} -> {status}")

    if check_remote_links and remote_non_image_links:
        with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as executor:
            future_map = {
                executor.submit(check_remote_url, url, timeout_seconds): url
                for url in sorted(remote_non_image_links)
            }
            for future in concurrent.futures.as_completed(future_map):
                url = future_map[future]
                ok, status = future.result()
                if not ok:
                    broken_links.append(f"{url} -> {status}")

    image_files_on_disk = {
        p.resolve()
        for p in lang_dir.rglob("*")
        if p.is_file()
        and p.suffix.lower() in IMAGE_EXTENSIONS
        and not any(part in IGNORED_DIR_NAMES for part in p.parts)
    }
    unused_pictures = sorted(
        p.as_posix()
        for p in image_files_on_disk
        if p not in all_used_local_pictures
    )

    return ValidationResult(
        broken_anchors_and_calls=sorted(broken_anchors_and_calls),
        disallowed_header_doc_links=sorted(disallowed_header_doc_links),
        broken_links=sorted(broken_links),
        missing_pictures=sorted(missing_pictures),
        remote_picture_errors=sorted(remote_picture_errors),
        remote_picture_warnings=sorted(remote_picture_warnings),
        remote_pictures_seen=sorted(remote_pictures_seen),
        unused_pictures=unused_pictures,
    )


def print_section(title: str, values: list[str]) -> None:
    print(f"\n=== {title} ({len(values)}) ===")
    if not values:
        print("OK")
        return
    for value in values:
        print(value)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Validate AndroidAPS local docs for links/anchors/images."
    )
    parser.add_argument(
        "--lang",
        default="EN",
        help="Language folder under docs/ (default: EN).",
    )
    parser.add_argument(
        "--docs-root",
        default="docs",
        help="Docs root folder (default: docs).",
    )
    parser.add_argument(
        "--check-remote-links",
        action="store_true",
        help="Also validate non-image remote links (http/https).",
    )
    parser.add_argument(
        "--fail-on-unused",
        action="store_true",
        help="Fail if unused pictures are found.",
    )
    parser.add_argument(
        "--timeout",
        type=int,
        default=8,
        help="HTTP timeout in seconds for remote checks (default: 8).",
    )
    parser.add_argument(
        "--workers",
        type=int,
        default=12,
        help="Parallel workers for remote checks (default: 12).",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    repo_root = Path(__file__).resolve().parent.parent
    lang_dir = (repo_root / args.docs_root / args.lang).resolve()

    if not lang_dir.exists():
        print(f"Language directory not found: {lang_dir}", file=sys.stderr)
        return 2

    result = run_validation(
        lang_dir=lang_dir,
        check_remote_links=args.check_remote_links,
        timeout_seconds=args.timeout,
        workers=args.workers,
    )

    print_section("Broken anchors and calls", result.broken_anchors_and_calls)
    print_section("Disallowed header-based doc links", result.disallowed_header_doc_links)
    print_section("Broken links", result.broken_links)
    print_section("Missing pictures", result.missing_pictures)
    print_section("Remote pictures", result.remote_pictures_seen)
    print_section("Remote picture errors (failures)", result.remote_picture_errors)
    print_section("Remote picture warnings (non-failing)", result.remote_picture_warnings)
    print_section("Unused pictures", result.unused_pictures)

    if result.has_failures(args.fail_on_unused):
        print("\nValidation failed.")
        return 1

    print("\nValidation passed.")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
