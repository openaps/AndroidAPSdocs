"""Copy the AAPS Builder setup page into the docs, hardened.

Usage (from the repository root, Python 3.9+, standard library only):

    python aaps-builder/sync.py <upstream-commit-sha>

Downloads index.html at that commit from github.com/dio99/aaps-builder and
forge.min.js from cdnjs, checks forge against the pinned checksum, applies the
local changes listed in aaps-builder/README.md and writes the three files to
docs/EN/_html/. Prints the SHA-256 of every file for the README.
"""
import hashlib
import re
import sys
import urllib.request
from pathlib import Path

UPSTREAM = "dio99/aaps-builder"
FORGE_VERSION = "1.3.1"
FORGE_SHA256 = "dc67fd132427ad96c9666c844b39565413c40ddb1f2d063c53512fbf6d387dfd"

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "docs" / "EN" / "_html"

CSP_AND_NOTICE = """<meta http-equiv="Content-Security-Policy"
      content="default-src 'none'; script-src 'self'; style-src 'unsafe-inline'; img-src 'self' data:; base-uri 'none'; form-action 'none'">
<meta name="robots" content="noindex">
<!--
  AAPS Builder setup page. Creates the KEYSTORE_SET secret for a private GitHub
  repository made from the aaps-builder template, which builds AAPS with
  GitHub Actions.

  Copyright (C) the AAPS Builder authors, https://github.com/{upstream}
  Licensed under the GNU Affero General Public License v3.0 (AGPL-3.0).

  MODIFIED COPY of index.html at upstream commit {sha}. Changes, made by
  aaps-builder/sync.py in https://github.com/openaps/AndroidAPSdocs:
  forge is served locally, the inline script moved to aaps-builder.app.js,
  this Content-Security-Policy and notice added, and the links to the AAPS
  documentation made relative. Full list: aaps-builder/README.md.

  This page makes NO network requests (enforced by the Content-Security-Policy
  above): the keystore and passwords never leave this browser.

  Application logic: aaps-builder.app.js (readable, unminified).
  Vendor library:    aaps-builder.forge.min.js = node-forge {forge} (BSD-3-Clause
                     or GPL-2.0), https://github.com/digitalbazaar/forge
-->
<script src="aaps-builder.forge.min.js"></script>"""

APP_HEADER = """// AAPS Builder setup page logic. Copyright (C) the AAPS Builder authors,
// https://github.com/{upstream}, licensed under AGPL-3.0.
// Moved unchanged out of index.html (upstream commit {sha}) so the page can
// run under a script-src 'self' Content-Security-Policy.
"""

# Docs links: relative, so they follow the version/language being read.
LINKS = {
    "https://androidaps.readthedocs.io/en/latest/Maintenance/ExportImportSettings.html":
        "Maintenance/ExportImportSettings.html",
    "https://androidaps.readthedocs.io/en/latest/UsefulLinks/FAQ.html#how-to-organize-my-backups":
        "UsefulLinks/FAQ.html#how-to-organize-my-backups",
    "https://androidaps.readthedocs.io/en/latest/SettingUpAaps/BrowserBuild.html":
        "SettingUpAaps/BrowserBuildAapsBuilder.html#aaps-builder-google-drive",
}


def fetch(url: str) -> bytes:
    with urllib.request.urlopen(url, timeout=60) as r:
        return r.read()


def main(sha: str) -> None:
    if not re.fullmatch(r"[0-9a-f]{40}", sha):
        sys.exit("Give the full 40-character upstream commit SHA.")

    page = fetch(f"https://raw.githubusercontent.com/{UPSTREAM}/{sha}/index.html").decode("utf-8")
    forge = fetch(f"https://cdnjs.cloudflare.com/ajax/libs/forge/{FORGE_VERSION}/forge.min.js")
    if hashlib.sha256(forge).hexdigest() != FORGE_SHA256:
        sys.exit("forge.min.js does not match the pinned checksum: stop and investigate.")
    print("upstream index.html", hashlib.sha256(page.encode("utf-8")).hexdigest())

    # 1. forge from cdnjs -> local file, plus CSP and notice
    cdn = re.search(r'<script src="https://cdnjs\.cloudflare\.com/ajax/libs/forge/([0-9.]+)/forge\.min\.js"[^>]*></script>', page)
    if not cdn:
        sys.exit("forge <script> tag not found: upstream changed, update this script.")
    if cdn.group(1) != FORGE_VERSION:
        sys.exit(f"Upstream now uses forge {cdn.group(1)}: update FORGE_VERSION and FORGE_SHA256 after checking it.")
    page = page.replace(cdn.group(0), CSP_AND_NOTICE.format(upstream=UPSTREAM, sha=sha, forge=FORGE_VERSION))

    # 2. inline script -> aaps-builder.app.js
    inline = re.findall(r"<script>\n(.*?)</script>", page, flags=re.S)
    if len(inline) != 1:
        sys.exit(f"Expected exactly one inline <script>, found {len(inline)}: update this script.")
    page = page.replace(f"<script>\n{inline[0]}</script>", '<script src="aaps-builder.app.js"></script>')
    app = APP_HEADER.format(upstream=UPSTREAM, sha=sha) + inline[0]

    # 3. relative docs links
    for old, new in LINKS.items():
        if page.count(old) != 1:
            sys.exit(f"Link not found exactly once: {old}")
        page = page.replace(old, new)
    if "androidaps.readthedocs.io" in page + app:
        sys.exit("New absolute docs link upstream: add it to LINKS.")

    # Anything the CSP would block must not slip through.
    if re.search(r"\son[a-z]+\s*=", page, flags=re.I) or "<script>" in page:
        sys.exit("Inline script or event handler in the page: the CSP would block it.")

    files = {
        "aaps-builder.html": page.encode("utf-8"),
        "aaps-builder.app.js": app.encode("utf-8"),
        "aaps-builder.forge.min.js": forge,
    }
    for name, data in files.items():
        (OUT / name).write_bytes(data)
    print("\nSHA-256 for aaps-builder/README.md:")
    for name, data in files.items():
        print(f"SHA-256({name}) = {hashlib.sha256(data).hexdigest()}")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(sys.argv[1])
