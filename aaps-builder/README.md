# AAPS Builder setup page — vendored copy

The docs serve a copy of the **AAPS Builder** setup page:

- Page (readable HTML): `docs/EN/_html/aaps-builder.html`
- Application logic (readable JS): `docs/EN/_html/aaps-builder.app.js`
- Vendor library (minified): `docs/EN/_html/aaps-builder.forge.min.js`

The page creates the `KEYSTORE_SET` secret for a private GitHub repository made
from the aaps-builder template. That repository then builds AAPS from
nightscout/AndroidAPS with GitHub Actions. It is served by ReadTheDocs at the
site root (`https://androidaps.readthedocs.io/en/latest/aaps-builder.html`) via
`html_extra_path = ["_html"]` in `docs/EN/conf.py` — Sphinx copies the files
verbatim, no build step happens on ReadTheDocs.

User documentation: `docs/EN/SettingUpAaps/BrowserBuildAapsBuilder.md`
(label `aaps-builder`). It describes every step of the page and what the
template's build workflow does, so it must follow upstream changes.

## Upstream and licence

- Repository: https://github.com/dio99/aaps-builder
- Pinned commit: `1115eea6c10a28b91486ccdee85a37e26ef75f41` (builder `VERSION` 1)
- Upstream `index.html` SHA-256: `f5e26d4dd1e61d16745be482db7c09aa86083b781bf43a460a637b571912eaeb`
- Licence: **GNU AGPL-3.0** (upstream `LICENSE`, added in commit `e829936`),
  the same licence as this repository. The modified copy keeps the copyright
  and licence notice, states the changes and their source (the comment block
  in `aaps-builder.html` and the header of `aaps-builder.app.js`), and its
  complete source is this folder plus the readable files in `docs/EN/_html/`.

The GitHub template the page points users to stays `dio99/aaps-builder`
(the page's own fallback when it is not served from `*.github.io`). The build
workflow (`.github/workflows/build.yml`) is not copied: users get it from the
template.

## Local changes to the upstream page

The page handles the user's signing key, so its code is pinned and reviewable
in this repository rather than loaded from a CDN at runtime. `sync.py` applies
exactly these changes and nothing else:

1. The forge library is served locally (`aaps-builder.forge.min.js`) instead
   of from cdnjs. Its checksum is verified against the pinned value.
2. The inline `<script>` is moved unchanged to `aaps-builder.app.js`, with a
   four-line licence and provenance header.
3. A Content-Security-Policy (`default-src 'none'; script-src 'self'; ...`)
   blocks all network requests. Also added: `<meta name="robots" content="noindex">`
   and a licence, provenance and changes comment.
4. The three links to the AAPS documentation are made relative, so they
   follow the version and language being read. The Google Drive link points
   to the AAPS Builder docs page (`#aaps-builder-google-drive`) instead of the
   browser build overview.

## Checksums

```
SHA-256(aaps-builder.html)         = eeb82d72ebf0a31263aea5fb5a8a05bd803ebc2f68d5fa38ed9268a0a352a969
SHA-256(aaps-builder.app.js)       = f30227a89a3c39ce9bd62f8668b5c2c7efe186d7e91b41def3b826bcf0346bb9
SHA-256(aaps-builder.forge.min.js) = dc67fd132427ad96c9666c844b39565413c40ddb1f2d063c53512fbf6d387dfd
```

`aaps-builder.forge.min.js` is node-forge 1.3.1 (BSD-3-Clause or GPL-2.0,
https://github.com/digitalbazaar/forge). It is byte-identical to both
`https://cdnjs.cloudflare.com/ajax/libs/forge/1.3.1/forge.min.js` and the npm
package file `node-forge@1.3.1/dist/forge.min.js`.

Verify with `sha256sum docs/EN/_html/aaps-builder.*` (or
`certutil -hashfile <file> SHA256` on Windows). The sync is reproducible: the
same upstream commit gives byte-identical files. **Update these lines on every
resync**, in the same commit as the files.

## Resyncing with upstream

Requires Python 3.9+, standard library only.

1. **Review the upstream changes** since the pinned commit:
   `https://github.com/dio99/aaps-builder/compare/<pinned>...main`.
   Read every change to `index.html` (anything that sends data anywhere is a
   blocker) and to `.github/workflows/build.yml`.
2. **Sync**, from the repository root, with the full commit SHA:
   ```
   python aaps-builder/sync.py <commit-sha>
   ```
   The script stops with a message instead of guessing when upstream changed
   something it relies on: the forge version or checksum, the number of inline
   scripts, a docs link, or an inline event handler the CSP would block.
   Adapt the script, never hand-edit the generated files.
3. **Update this README**: pinned commit, upstream `index.html` checksum and
   the three checksums the script prints.
4. **Update the docs page** `docs/EN/SettingUpAaps/BrowserBuildAapsBuilder.md`
   if the steps, button labels, build time, artifact retention, variants,
   repository variables (`AUTO_BUILD`, `AUTO_VARIANT`) or error messages
   changed.
5. **Check**:
   - `python utils/qualitycheck.py`
   - a Sphinx build of `docs/EN` into a folder outside the repository
   - serve the build folder (`python -m http.server`), open `aaps-builder.html`:
     no errors in the browser console, EN/SV switch works, **Create a new key**
     with a test password unlocks step 3, and **Create my private repository**
     points to `github.com/new?template_owner=dio99&template_name=aaps-builder…&visibility=private`.
