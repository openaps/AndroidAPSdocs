# AAPS web installer — build folder

This folder builds the **vendor bundle** for the AAPS web installer page:

- Page (readable HTML): `docs/EN/_html/install-aaps.html`
- Application logic (readable JS): `docs/EN/_html/install-aaps.app.js`
- Vendor bundle (minified, built here): `docs/EN/_html/install-aaps.bundle.js`

The page installs an APK onto an Android phone over USB from the browser
(WebUSB + the ADB protocol), which is exempt from Google's Android developer
verification. It is served by ReadTheDocs at the site root
(`https://androidaps.readthedocs.io/en/latest/install-aaps.html`) via
`html_extra_path = ["_html"]` in `docs/EN/conf.py` — Sphinx copies the files
verbatim, no build happens on ReadTheDocs.

## What is in the bundle

Only the MIT-licensed [Tango (ya-webadb)](https://github.com/yume-chan/ya-webadb)
libraries, re-exported by `src/vendor.js` (the only bundle input) and
tree-shaken/minified by esbuild. Versions are **pinned exactly** in
`package.json` / `package-lock.json` — keep all `@yume-chan/*` packages on the
same release line when upgrading. If esbuild finds license banners it emits them next to the bundle as
`install-aaps.bundle.js.LEGAL.txt` (none are emitted with the current versions).

The bundle is **checked into git** on purpose: the page has full ADB control of
a user's phone, so its code must be pinned and reviewable in the repository
rather than loaded from a CDN at runtime. The page's Content-Security-Policy
(`default-src 'none'`) blocks all network requests.

## Current bundle checksum

```
SHA-256(install-aaps.bundle.js) = 029b36943ac58f962d42a02427d0fd711a5127863708a79e08dd630db5db02fd
```

Verify with `sha256sum docs/EN/_html/install-aaps.bundle.js` (or
`certutil -hashfile ... SHA256` on Windows). The build is reproducible, so
rebuilding from the committed `package-lock.json` must produce this exact
hash. **Update this line on every rebuild**, in the same commit as the bundle.

## Rebuilding (rarely needed)

Requires Node.js 18+ (https://nodejs.org). Then:

```
cd installer
npm ci
npm run build
```

`npm ci` installs the exact pinned versions from `package-lock.json`, with
integrity hashes checked by npm. The `.npmrc` in this folder sets
`ignore-scripts=true`, so no package can run install-time scripts on your
machine (esbuild's binary comes as an optional dependency and needs none);
`npm run build` itself still runs. The build is reproducible: the same lock
file and esbuild version produce a byte-identical bundle. Commit the rebuilt
bundle together with the lock file, and update the checksum above.

## Upgrading dependencies safely

This bundle talks ADB to the phone of an insulin-dependent user, so the
moment of upgrading is the supply-chain exposure window. Policy:

- **Do not upgrade routinely.** There is no reason to bump versions unless a
  browser or the ADB protocol breaks something.
- When upgrading: wait a week or two after the release, check the
  [upstream repository](https://github.com/yume-chan/ya-webadb) for signs of
  maintainer-account trouble, and verify the packages' **npm provenance
  attestation** (shown on each package's npmjs.com page, or via
  `npm audit signatures`) linking the tarball to a public GitHub build.
- Keep all `@yume-chan/*` packages on the same release line.
- Re-test against a real phone (see Testing below) before committing, and
  update the checksum above in the same commit.

## Testing

1. Serve the page locally (localhost is a secure context, so WebUSB works):

   ```
   cd docs/EN/_html
   python -m http.server 8000
   ```

   Open `http://localhost:8000/install-aaps.html` in Chrome or Edge.

2. With a real phone (USB debugging enabled, Android Studio closed):
   - Connect → accept "Allow USB debugging?" on the phone → install a
     self-built AAPS APK **over an existing installation** and check that its
     settings survive (this is the `adb install -r` behavior).
   - Reconnect: no new authorization prompt should appear (the key pair is
     persisted in the browser's IndexedDB).
   - Negative tests: cancel the device picker; decline the phone dialog;
     try while `adb start-server` is running (must show the "another program
     is using the phone" message); select a non-APK file; unplug mid-install;
     open the page in Firefox (must show the unsupported-browser message).

3. Run the docs checks as usual (`python utils/qualitycheck.py` and the pinned
   Sphinx build) — the `_html` files are copied, not parsed, but the docs pages
   linking here are checked.
