# AAPS Builder — maintained in the AAPS documentation

AAPS Builder lets users build AAPS in their own private GitHub repository. All of
its code lives in this repository (openaps/AndroidAPSdocs) and is served by the
docs site via `html_extra_path = ["_html"]` in `docs/EN/conf.py` (Sphinx copies
the files verbatim, no build step on ReadTheDocs):

| File (in `docs/EN/_html/`) | What it is |
|---|---|
| `aaps-builder.html` | Setup page (readable HTML, English) |
| `aaps-builder.app.js` | Setup page logic (readable, unminified) |
| `aaps-builder.forge.min.js` | node-forge 1.3.1, vendored (keystore creation in the browser) |
| `aaps-builder-build.yml` | The build workflow users copy into `.github/workflows/build.yml` of their repository |

User documentation: `docs/EN/SettingUpAaps/BrowserBuildAapsBuilder.md` (label
`aaps-builder`). It describes every step of the setup page and what the
workflow does, so it must change together with these files.

## Trust boundary: approved sources only

The signing key ends up in the user's repository, next to the workflow, so
everything that can run there must come from an approved AAPS source:

- **Setup page**: every file comes from the docs site. The Content-Security-Policy
  is `default-src 'none'; script-src 'self'; connect-src 'self'; ...`: no CDN, no
  third-party request. The only request is reading `aaps-builder-build.yml` from
  the same site (step "Add the build workflow").
- **Repository creation**: an **empty** private repository (`github.com/new` with
  `name`, `visibility=private`, `owner=@me`). **No template repository** is used.
- **Workflow**: copied by the user from this repository. At run time it only
  - clones the AAPS source from `github.com/nightscout/AndroidAPS` (release tags),
  - uses GitHub's own actions `actions/setup-java@v5` and `actions/upload-artifact@v7`
    (tags, like nightscout's own `aaps-ci.yml`),
  - talks to `api.github.com` (read-only: its own repository's visibility check)
    and, only with the optional `GDRIVE_OAUTH2` secret, to Google
    (`oauth2.googleapis.com`, `www.googleapis.com`) — the same endpoints as
    nightscout's `aaps-ci.yml`.
  - The Gradle build downloads AAPS's own dependencies, exactly as every other
    AAPS build method.
- **No update channel**: the workflow does not check anything outside the user's
  repository for updates. Workflow changes are announced in the docs
  (Docs updates page and the AAPS Builder page); users replace the file
  themselves with the newer version from the setup page.
- **No automatic builds** (regulatory requirement): the only trigger is
  `workflow_dispatch`. Every build is started by the user, with the version and
  variant they choose. No `schedule`, no repository variables that change what
  is built, and the workflow token is read-only (`contents: read` everywhere):
  the build cannot write anything to the user's repository.

Review check before every change, in addition to the host list: the `on:`
block contains only `workflow_dispatch`, and no `permissions:` line says `write`.

Review check before every change:

```
grep -nE "uses:|https?://|curl|wget|git clone|ls-remote" docs/EN/_html/aaps-builder-build.yml
grep -noE "https?://[^\"' )]+" docs/EN/_html/aaps-builder.html docs/EN/_html/aaps-builder.app.js
```

Every host must be in the list above. `github.com/dio99/...` may appear only
in the attribution comments.

## Origin and licence

Based on **AAPS Builder** by the AAPS Builder authors,
https://github.com/dio99/aaps-builder, **GNU AGPL-3.0** (the same licence as this
repository). Imported once, after a full review, from upstream commit
`1115eea6c10a28b91486ccdee85a37e26ef75f41` (2026-10-08):

- upstream `index.html` SHA-256 `f5e26d4dd1e61d16745be482db7c09aa86083b781bf43a460a637b571912eaeb`
- upstream `.github/workflows/build.yml` SHA-256 `2d53ce9bc38c7c96578cb3e2b51c9ca76ef0a70064135c1e79fff1253b003b29`

Since then the files are maintained **here**. Nothing is fetched from the
upstream repository, neither by the page, the workflow, nor any script in this
repository. Upstream improvements may be adopted only by reading the upstream
diff, re-implementing the change here, and reviewing it against the trust
boundary above.

Changes made for the AAPS documentation (AGPL-3.0 section 5: modified version,
notices kept in the files):

1. No template repository: the user creates an empty private repository and
   adds the workflow from the docs (new step 2 on the setup page).
2. Workflow: removed the `builder-update` job (it read a version file from the
   upstream repository and asked users to copy a new workflow from there),
   removed the template check and the `BUILDER_REPO` / `BUILDER_VERSION`
   variables, English-only texts, error messages point to the docs page.
3. Setup page: English only (no language switch), seven steps, texts in the
   HTML, forge served locally, Content-Security-Policy, links to the docs
   relative so they follow the version and language being read, a scrolling
   hint for GitHub's mobile build page (swipe on the text, not on the job diagram).
4. Workflow version 2: removed the weekly `schedule` trigger, the `AUTO_BUILD`
   and `AUTO_VARIANT` repository variables, the quiet skipping of scheduled runs
   and the `built/<version>-<variant>` tags that remembered scheduled builds.
   Permissions reduced to `contents: read`.

## Checksums (of the committed files, LF line endings)

```
SHA-256(aaps-builder.html)         = 016a4d6231168e1ce69f15ec5558171371f8474510601feb4db7768aa579e9fa
SHA-256(aaps-builder.app.js)       = 000b7fbfc31e0c4ecdacafb4059e164f1ba33f41371de4ec832a720c4bb2a55f
SHA-256(aaps-builder-build.yml)    = 3d96ef0b329b4d08c20bea62c9b5a38d7920259628bddf5ed0d8b18226b1c83e
SHA-256(aaps-builder.forge.min.js) = dc67fd132427ad96c9666c844b39565413c40ddb1f2d063c53512fbf6d387dfd
```

`aaps-builder.forge.min.js` is node-forge 1.3.1 (BSD-3-Clause or GPL-2.0,
https://github.com/digitalbazaar/forge), byte-identical to the npm package file
`node-forge@1.3.1/dist/forge.min.js`.

On Windows with `core.autocrlf=true` the checked-out files have CRLF line
endings and a different hash. Check the committed content instead:
`git show HEAD:docs/EN/_html/aaps-builder.forge.min.js | sha256sum`.
**Update these lines in the same commit as any change to the files.**

## Changing the workflow

1. Edit `docs/EN/_html/aaps-builder-build.yml` and raise the version in its first
   line (`# AAPS Builder build workflow, version N`). The setup page shows this
   number when the user copies the workflow.
2. Run the review check above.
3. Update the docs page if steps, timings, artifacts, variants or error
   messages changed, and add an entry to
   `docs/EN/Maintenance/DocumentationUpdate.md` telling users to replace their
   workflow file.
4. Test with a private test repository: copy the workflow from a local build of
   the docs, run a build, check the summary and the artifacts.

## Testing the setup page

Build the docs, serve the output folder (`python -m http.server`), open
`aaps-builder.html`: no errors in the browser console, **Copy workflow** shows
the version, **Create a new key** with a test password unlocks step 4, and
**Create my private repository** points to
`github.com/new?owner=%40me&name=my-aaps&visibility=private` (no `template_` parameters).
