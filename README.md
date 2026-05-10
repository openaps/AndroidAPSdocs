# AAPS docs

Documentation for [AAPS](https://github.com/nightscout/AndroidAPS) (Android Artificial Pancreas System).

To view documentation, visit <https://androidaps.readthedocs.io>.

## Docs Status

[![Deploy](https://github.com/openaps/AndroidAPSdocs/actions/workflows/deploy.yml/badge.svg)](https://github.com/openaps/AndroidAPSdocs/actions/workflows/deploy.yml) ![Deploy](https://readthedocs.org/projects/androidaps/badge/?version=latest)

### Build and Warnings

The current build logs of the documentation can be found in [Github Actions](https://github.com/openaps/AndroidAPSdocs/actions/workflows/deploy.yml).  

### Broken links

Detail of broken links in the doc can be found in the build logs. Select a build in Github Action "Deploy", then "Usage". Click on "build" and expand again the "Build line". Search for "WARNING".

## Building Documentation Locally

You can build the documentation locally on your computer to preview changes before committing them.

### Prerequisites

Ensure Python 3.8+ is installed on your system. Install the required dependencies from the root of the repository:

```console
pip install -r requirements.txt
```

### Building

Build the English documentation:

```console
cd docs/EN
sphinx-build -M html . _build
```

The built documentation will be in `docs/EN/_build/html/`. Open `index.html` in your browser to view it.

To build a different language (e.g., Czech):

```console
cd docs/CROWDIN/cs
sphinx-build -M html . _build
```

## Quality Check Utility

The `qualitycheck.py` script in the `utils/` folder validates the documentation for common issues like broken links, missing images, and orphaned files.

### Basic Usage

Check the English documentation:

```console
python utils/qualitycheck.py
```

Check a specific language (e.g., Czech):

```console
python utils/qualitycheck.py --lang cs
```

Check all languages (English + all CROWDIN translations):

```console
python utils/qualitycheck.py --lang all
```

### Available Options

- `--lang <code>` - Language selector (default: `EN`). Use CROWDIN language codes like `cs`, `de`, `fr`, or `all` for all languages.

- `--docs-root <path>` - Docs root folder (default: `docs`).

- `--check-remote-links` - Also validate non-image remote links (http/https). This enables checking that external links are accessible.

- `--fail-on-unused` - Fail (exit with non-zero code) if unused pictures are found. Useful for CI/CD pipelines.

- `--timeout <seconds>` - HTTP timeout in seconds for remote checks (default: 8). Increase if checking remote links on slow connections.

- `--workers <number>` - Number of parallel workers for remote checks (default: 12). Adjust based on your system resources.

### Checks Performed

The utility performs the following validations:

1. **Broken anchors and reference calls** - Detects invalid anchor links and references within the documentation.
2. **Broken local links** - Finds links to non-existent local files.
3. **Missing pictures** - Identifies image references that point to non-existent files.
4. **Remote pictures** - Validates that remote images are accessible (when `--check-remote-links` is used).
5. **Unused pictures** - Detects image files that are not referenced anywhere in the documentation.

### Examples

Validate English docs with all remote checks:

```console
python utils/qualitycheck.py --check-remote-links
```

Validate Czech docs and fail if unused images are found:

```console
python utils/qualitycheck.py --lang cs --fail-on-unused
```

Validate all languages with increased timeout and worker count:

```console
python utils/qualitycheck.py --lang all --check-remote-links --timeout 15 --workers 20
```
