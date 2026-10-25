(aaps-builder-setup)=

# AAPS Builder – Einrichtungsseite

Erstelle Deine eigene **AAPS**-App in GitHub. Keine Programme installieren, kein Terminal. Beim ersten Mal dauert es etwa 10 Minuten, danach startest Du jeden Build selbst.

Jeder Schritt wird unter [Browser-Build mit dem AAPS Builder](#aaps-builder) ausführlicher und mit Screenshots erklärt. Lass diese Seite in einem anderen Tab geöffnet.

Die Schaltflächen unten öffnen GitHub in einem neuen Chrome-Tab. Um zu dieser Seite zurückzukehren, tippe auf die Tab-Schaltfläche neben der Adressleiste von Chrome (das Quadrat mit einer Zahl) und wähle diese Seite.

(aaps-builder-setup-step1)=

## Schritt 1 – Dein privates Build-Repository anlegen

Damit wird ein leeres privates Repository in Deinem GitHub-Konto angelegt. Nur Du kannst es und die damit erstellten Apps sehen. Du musst AndroidAPS **nicht** forken: Der AAPS-Quellcode wird bei jedem Build aus dem offiziellen AndroidAPS-Repository heruntergeladen.

<label class="aapsb-label" for="aapsb-user">Dein GitHub-Benutzername</label>
<input class="aapsb-input" type="text" id="aapsb-user" autocomplete="username" spellcheck="false" placeholder="my-github-name" />
<span class="aapsb-msg" id="aapsb-userMsg"></span>

Melde Dich zuerst in diesem Browser bei github.com an (noch kein Konto? Leg kostenlos eins an). Komm dann hierher zurück. Gib Deinen Benutzernamen ein (er steht in Deinem GitHub-Profil), nicht Deine E-Mail-Adresse: Die Seite fragt bei GitHub nach, ob es diesen Benutzernamen gibt.

<label class="aapsb-label" for="aapsb-repo">Name Deines Repositorys</label>
<input class="aapsb-input" type="text" id="aapsb-repo" spellcheck="false" placeholder="my-aaps" />

Übernimm den Vorschlag. Hast Du Dein Repository schon unter einem anderen Namen angelegt? Dann gib hier genau diesen Namen ein.

Dein Repository: <code class="aapsb-repoUrl"></code>

Hast Du schon selbst ein leeres privates Repository angelegt? Dann tippe nicht auf die Schaltfläche unten, sondern gib oben seinen genauen Namen ein und mach mit [Schritt 2](#aaps-builder-setup-step2) weiter.

<a class="aapsb-btn" id="aapsb-createRepo" target="_blank" rel="noopener">Mein privates Repository anlegen</a>

Auf der GitHub-Seite, die sich öffnet, ist der Name schon eingetragen und **Private** ausgewählt. Ändere nichts und füge keine README oder andere Dateien hinzu.

1. Klicke auf die grüne Schaltfläche **Create repository**.
2. Komm für Schritt 2 auf diese Seite zurück.

(aaps-builder-setup-step2)=

## Schritt 2 – Build-Workflow hinzufügen

Der Build-Workflow ist die Datei, die GitHub sagt, wie AAPS erstellt wird. Sie stammt aus der AAPS-Dokumentation: <a id="aapsb-viewWorkflow" href="../_static/aaps-builder/aaps-builder-build.yml" target="_blank" rel="noopener">Workflow ansehen</a>.

1. <a class="aapsb-btn" id="aapsb-addWorkflow" target="_blank" rel="noopener">Workflow zu meinem Repository hinzufügen</a> <span class="aapsb-msg" id="aapsb-workflowMsg"></span>

   Öffnet: <code class="aapsb-repoUrl"></code>, neue Datei `.github/workflows/build.yml`, bereits ausgefüllt.
2. Prüfe, dass oben der Dateiname `.github/workflows/build.yml` steht. Ändere den Text nicht.
3. Klicke auf **Commit changes…** und im Fenster, das sich öffnet, noch einmal auf **Commit changes“**.

```{admonition} Updating the workflow, or the text area is empty?
:class: dropdown

1. <button class="aapsb-btn aapsb-secondary" type="button" id="aapsb-copyWorkflow">Copy workflow</button> <span class="aapsb-msg" id="aapsb-copyWorkflowMsg"></span>
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openWorkflowFile" target="_blank" rel="noopener">Meine Workflow-Datei öffnen</a>

   Um den Workflow stattdessen zum ersten Mal hinzuzufügen, nutze die Schaltfläche oben.
3. Ersetze den gesamten Text durch den kopierten Workflow (auf dem Smartphone lange drücken) und klicke dann zweimal auf **Commit changes…**.
```

(aaps-builder-setup-step3)=

## Schritt 3 – Dein Signaturschlüssel

Die App muss mit Deinem eigenen Schlüssel signiert werden. Nutze immer denselben Schlüssel, sonst musst Du AAPS für ein Update deinstallieren (und verlierst seine Einstellungen). Wähle einen der beiden Tabs.

`````{tab-set}

````{tab-item} Ich habe schon einen Keystore
Zum Beispiel aus Android Studio (.jks).

<label class="aapsb-label" for="aapsb-ksFile">Keystore file</label>
<input type="file" id="aapsb-ksFile" accept=".jks,.keystore,.p12,.pfx,application/octet-stream">

<label class="aapsb-label" for="aapsb-ksPass">Keystore password</label>
<input class="aapsb-input" type="password" id="aapsb-ksPass" autocomplete="off">

<label class="aapsb-label" for="aapsb-ksAlias">Key alias</label>
<select class="aapsb-input" id="aapsb-ksAliasSel" hidden></select>
<input class="aapsb-input" type="text" id="aapsb-ksAlias" autocomplete="off" spellcheck="false" placeholder="key0">

<label class="aapsb-check"><input type="checkbox" id="aapsb-samePass" checked> Key password is the same as the keystore password</label>

<div id="aapsb-keyPassWrap" hidden>

<label class="aapsb-label" for="aapsb-keyPass">Key password</label>
<input class="aapsb-input" type="password" id="aapsb-keyPass" autocomplete="off">

</div>

<button class="aapsb-btn" type="button" id="aapsb-haveGo">Check and continue</button> <span class="aapsb-msg" id="aapsb-haveMsg"></span>
````

````{tab-item} Create a new key
First time building AAPS? A new key is created here in your browser. Nothing is sent anywhere.

<label class="aapsb-label" for="aapsb-newPass">Choose a password (at least 8 characters, no accented letters)</label>
<input class="aapsb-input" type="password" id="aapsb-newPass" autocomplete="new-password">

<label class="aapsb-label" for="aapsb-newPass2">Repeat the password</label>
<input class="aapsb-input" type="password" id="aapsb-newPass2" autocomplete="new-password">

<button class="aapsb-btn" type="button" id="aapsb-newGo">Create key</button> <span class="aapsb-msg" id="aapsb-newMsg"></span>

<div class="aapsb-box" id="aapsb-backupBox" hidden>

**Save a backup of your key!**

Download the file. Keep these three together, somewhere safe off your phone (e.g. your own cloud storage):

- the file `aaps-keystore.jks`
- your password
- the alias of the key: **`key0`**

You will need all three if you ever build AAPS another way, e.g. with Android Studio.

<button class="aapsb-btn" type="button" id="aapsb-downloadKs">Download backup (aaps-keystore.jks)</button>

</div>
````

`````
(aaps-builder-setup-step4)=
## Schritt 4 – Den Schlüssel an Dein Repository übergeben
<span id="aapsb-s4wait">Schließe zuerst Schritt 3 ab.</span>

<div id="aapsb-s4ready" hidden>
  1. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets" target="_blank" rel="noopener">Open the secrets page</a> Opens: <code class="aapsb-repoUrl"></code> Getting "Page not found" (404)? Prüfe zuerst, ob Du in diesem Browser bei github.com angemeldet bist: Bei privaten Repositorys zeigt GitHub 404 an, wenn Du nicht angemeldet bist. Andernfalls passen Benutzername oder Repository-Name aus Schritt 1 nicht zu Deinem Repository. Prüfe sie auf github.com und gib sie in Schritt 1 richtig ein. 2. Tippe auf "Copy name", dann füge ihn in das kleine "Name"-Feld ein: `KEYSTORE_SET` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="name">Copy Namer</button> 3. Tippe auf "Copy secret" und füge dann den langen Code in das große "Secret"-Feld ein: <code id="aapsb-secretPreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="secret">Copy secret</button> <span class="aapsb-msg" id="aapsb-copyMsg"></span> Das Secret ist ein sehr langer Code (tausende Buchstaben), und NICHT das Wort KEYSTORE_SET. Kopiere und füge zuerst den Namen ein, dann den langen Code. 4. Tippe auf „Add secret“. Fertig, das musst Du nie wieder machen.
</div>
(aaps-builder-setup-step5)=
## Schritt 5 – App erstellen

1. <a class="aapsb-btn" id="aapsb-openActions" target="_blank" rel="noopener">Build-Seite öffnen</a>

   Öffnet: <code class="aapsb-repoUrl"></code>

   Du bekommst „Page not found“ (404)? Prüfe zuerst, ob Du in diesem Browser bei github.com angemeldet bist: Bei privaten Repositorys zeigt GitHub 404 an, wenn Du nicht angemeldet bist. Andernfalls passen Benutzername oder Repository-Name aus Schritt 1 nicht zu Deinem Repository. Prüfe sie auf github.com und gib sie in Schritt 1 richtig ein. Stattdessen hat sich die GitHub-App geöffnet? Tippe auf „RUN WORKFLOW“, prüfe Version und Variante und tippe noch einmal auf „RUN WORKFLOW“. Zeigt die App weiterhin „Nothing to see here“, zieh die Liste nach unten, um Deinen Build zu sehen.
2. Falls Du gefragt wirst, klicke auf die grüne Schaltfläche, um Workflows zu aktivieren.
3. Klicke auf „Run workflow“ und dann auf die grüne Schaltfläche „Run workflow“. „latest“ erstellt die neueste AAPS-Version.
4. Warte etwa 15–30 Minuten. Ein grünes Häkchen bedeutet, dass der Build fertig ist.
Du möchtest eine E-Mail, wenn der Build fertig ist? GitHub schickt Dir nur dann eine E-Mail, wenn ein Build fehlschlägt. Damit Du auch bei Erfolg eine bekommst: Öffne auf github.com Dein Profilbild → Settings → Notifications → System → Actions und entferne das Häkchen bei „Only notify for failed workflows“.

```{admonition} No "Build AAPS" / "Run workflow" button?
:class: warning

1. Open Öffne Dein Repository und prüfe, ob die Datei `.github/workflows/build.yml` vorhanden ist. Fehlt sie oder hat sie einen anderen Namen, wiederhole [Schritt 2](#aaps-builder-setup-step2).
2. Öffne den Tab „Actions“. Steht dort, dass Workflows deaktiviert sind, klicke auf die grüne Schaltfläche, um sie zu aktivieren. Klicke dann in der Liste auf „Build AAPS“.
```

(aaps-builder-setup-step6)=

## Schritt 6 – Auf dem Smartphone installieren

```{admonition} Before every update: back up your settings!
:class: warning

1. In AAPS: Wartung → Einstellungen exportieren. (Das solltest Du ohnehin regelmäßig tun, z. B. nach einer Profiländerung oder einmal im Monat.)
2. Kopiere die exportierte Datei WEG vom Smartphone, z. B. auf Google Drive oder Dropbox. Eine Sicherung, die nur auf dem Smartphone liegt, ist zusammen mit dem Smartphone verloren.
3. Bewahre dort auch die APK-Dateien und mehrere ältere Exporte auf. So kannst Du jederzeit zurück.

[Einstellungen exportieren](#ExportImportSettings-Settings-Export) · [AAPS-FAQ: Sicherungen organisieren](#FAQ-organize-backups)
```

1. Öffne diese Seite auf Deinem Smartphone im Webbrowser (Chrome). Falls Du gefragt wirst, logge Dich in github.com ein.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openRuns" target="_blank" rel="noopener">Meine Builds öffnen</a>

   Stattdessen hat sich die GitHub-App geöffnet? Sie kann keine Builds herunterladen. Öffne in der App den neuesten Build und tippe auf „Artifacts ↗“. Oder tippe auf das Teilen-Symbol und wähle Chrome (bzw. „Link kopieren“ und füge den Link in die Adressleiste von Chrome ein). Mach dann in Chrome weiter.

   Du bekommst „Page not found“ (404)? Prüfe zuerst, ob Du in diesem Browser bei github.com angemeldet bist: Bei privaten Repositorys zeigt GitHub 404 an, wenn Du nicht angemeldet bist. Andernfalls passen Benutzername oder Repository-Name aus Schritt 1 nicht zu Deinem Repository. Prüfe sie auf github.com und gib sie in Schritt 1 richtig ein.

   Damit GitHub-Links nicht mehr in der App geöffnet werden: Android-Einstellungen → Apps → GitHub → Standardmäßig öffnen → „Unterstützte Links öffnen“ ausschalten.
3. Tippe auf den neuesten Build mit grünem Häkchen ✅.
4. Scolle nach unten zur Build-Zusammenfassung und tippe auf den großen Link „📱 Download AAPS …" (oder scrolle weiter nach unten zu „Artifacts“ und tippe auf aaps-….apk). Scrolle mit dem Finger auf dem Text, nicht auf dem Diagramm der Build-Schritte.
5. Wenn der Download fertig ist, tippe auf die Datei und wähle „Installieren“. Falls Du gefragt wirst, erlauben Sie die Installation von Apps von dieser Quelle.
6. aaps-wear-….apk ist für eine Smartwatch. Nutzt Du keine, überspringe diese Datei.

Die APK erscheint nicht unter „Code“ in Deinem Repository, sondern nur auf der Build-Seite. Sie wird 14 Tage lang aufbewahrt.

Neue AAPS-Version? Sichere Deine Einstellungen und erstelle sie dann mit [Schritt 5](#aaps-builder-setup-step5). Dein Repository erstellt nie etwas von selbst.

(aaps-builder-setup-step7)=

## Schritt 7 – Optional: App in Google Drive speichern

Du möchtest, dass die APK in Deinem Google Drive erscheint und dort dauerhaft bleibt? Dann füge ein weiteres Secret hinzu.

1. Besorge Dir einen GDRIVE_OAUTH2-Wert, wie in der AAPS-Dokumentation erklärt (dafür nutzt Du die offizielle AAPS-Vorbereitungsseite am Computer): [Builds in Google Drive speichern](#aaps-builder-google-drive).
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets2" target="_blank" rel="noopener">Secrets-Seite öffnen</a>

   Öffnet: <code class="aapsb-repoUrl"></code>

   Du bekommst „Page not found“ (404)? Prüfe zuerst, ob Du in diesem Browser bei github.com angemeldet bist: Bei privaten Repositorys zeigt GitHub 404 an, wenn Du nicht angemeldet bist. Andernfalls passen Benutzername oder Repository-Name aus Schritt 1 nicht zu Deinem Repository. Prüfe sie auf github.com und gib sie in Schritt 1 richtig ein.
3. Tippe auf Namen kopieren und füge ihn in das kleine Feld „Name“ ein: `GDRIVE_OAUTH2` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="gdrive">Namen kopieren</button>
4. Füge Deinen GDRIVE_OAUTH2-Wert in das große Feld „Secret“ ein und tippe dann auf „Add secret“.

Beim nächsten Build werden die APKs zusätzlich in Google Drive im Ordner AAPS/&lt;version&gt; gespeichert.

Wenn Du 6 Monate lang nichts erstellst oder Dein Google-Passwort änderst, entzieht Google den Zugriff. Der Build meldet das dann. Wiederhole in dem Fall diesen Schritt.

----

Alles auf dieser Seite läuft in Deinem Browser. Dein Schlüssel und Deine Passwörter werden nirgendwohin gesendet, außer dorthin, wo Du sie selbst einfügst. Nur Dein GitHub-Benutzername geht an GitHub, um zu prüfen, ob es ihn gibt. Seite und Workflow sind Teil der AAPS-Dokumentation und basieren auf AAPS Builder (AGPL-3.0).

<div id="aapsb-msgs" hidden>

- <span data-aapsb-msg="copied">Long code copied: paste it in the big "Secret" box, then tap "Add secret".</span>
- <span data-aapsb-msg="copiedName">Name copied: paste it in the small "Name" field.</span>
- <span data-aapsb-msg="userOk">✓ GitHub user found.</span>
- <span data-aapsb-msg="userBad">✗ No GitHub user with this name. Use your username (shown in your GitHub profile), not your e-mail.</span>
- <span data-aapsb-msg="copiedShort">Copied ✓</span>
- <span data-aapsb-msg="needUser">Enter your GitHub username in step 1 first.</span>
- <span data-aapsb-msg="workflowCopied">Workflow copied (version {v}). Füge in GitHub ein.</span>
- <span data-aapsb-msg="workflowReady">Workflow version {v} is ready.</span>
- <span data-aapsb-msg="workflowErr">Could not read the workflow file. Reload this page and try again.</span>
- <span data-aapsb-msg="errPipe">Passwords and alias cannot contain the character |</span>
- <span data-aapsb-msg="errNoFile">Choose your keystore file.</span>
- <span data-aapsb-msg="errEmpty">Fill in password and alias.</span>
- <span data-aapsb-msg="errPass">Wrong keystore password.</span>
- <span data-aapsb-msg="errKeyPass">Wrong key password.</span>
- <span data-aapsb-msg="errAlias">Alias not found in the keystore. Available: {aliases}</span>
- <span data-aapsb-msg="errFormat">This does not look like a keystore file.</span>
- <span data-aapsb-msg="okHave">Keystore OK! Continue with step 4.</span>
- <span data-aapsb-msg="okHaveUnchecked">Keystore read. Das Passwort wird beim Erstellen überprüft. Continue with step 4.</span>
- <span data-aapsb-msg="errShort">The password must be at least 8 characters.</span>
- <span data-aapsb-msg="errAscii">Use only a–z, A–Z, 0–9 and symbols such as ! ? # – no spaces, no accented letters and not |</span>
- <span data-aapsb-msg="errMatch">The passwords do not match.</span>
- <span data-aapsb-msg="working">Creating key…</span>
- <span data-aapsb-msg="okNew">Key created. Lade die Sicherung unten herunter und fahre mit Schritt 4 fort.</span>

</div>

<style>
  .rst-content .aapsb-label { display: block; font-weight: 700; margin: 14px 0 4px; }
  .rst-content .aapsb-input { display: block; width: 100%; max-width: 480px; padding: 8px 10px; font: inherit; border: 1px solid #ccc; border-radius: 4px; }
  .rst-content .aapsb-check { display: flex; gap: 8px; align-items: center; margin-top: 10px; }
  .rst-content .aapsb-btn, .rst-content a.aapsb-btn:visited {
    display: inline-block; margin: 4px 0; padding: 8px 16px; border-radius: 4px; border: 1px solid #2980b9; cursor: pointer;
    background: #2980b9; color: #fff; font: inherit; font-weight: 700; text-decoration: none;
  }
  .rst-content .aapsb-btn:hover { background: #1f6391; color: #fff; }
  .rst-content .aapsb-btn.aapsb-secondary, .rst-content a.aapsb-btn.aapsb-secondary:visited { background: transparent; color: #2980b9; }
  .rst-content .aapsb-btn.aapsb-secondary:hover { background: #e7f2fa; }
  .rst-content .aapsb-btn:disabled { opacity: .45; cursor: not-allowed; }
  .rst-content .aapsb-msg { display: inline-block; margin-left: 6px; }
  .rst-content .aapsb-msg.ok { color: #1a7f37; } .rst-content .aapsb-msg.err { color: #cf222e; } .rst-content .aapsb-msg.warn { color: #9a6700; }
  .rst-content .aapsb-box { background: #e7f2fa; border-radius: 4px; padding: 12px 14px; margin: 12px 0; }
  .rst-content section.aapsb-done > h2::after { content: " ✓"; color: #1a7f37; }
  .rst-content [hidden] { display: none !important; }
</style>

<script src="../_static/aaps-builder/aaps-builder.forge.min.js"></script>
<script>
// AAPS Builder setup page logic. Walks the user through creating an empty private GitHub
// repository, adding the build workflow (_static/aaps-builder/aaps-builder-build.yml), and
// creating the KEYSTORE_SET secret. The repository then builds AAPS from the official source,
// github.com/nightscout/AndroidAPS, with GitHub Actions.
//
// The keystore and passwords never leave this browser. The only requests are reading the workflow
// file and asking GitHub's public API whether the typed username exists (only the name is sent).
// The page's Content-Security-Policy (set in docs/shared.conf.py) allows only the AAPS
// documentation site itself and https://api.github.com.
//
// Based on AAPS Builder by the AAPS Builder authors (github.com/dio99/aaps-builder), GNU Affero
// General Public License v3.0 (AGPL-3.0). Modified for the AAPS documentation: no template
// repository, workflow and page maintained in github.com/openaps/AndroidAPSdocs, texts in the
// page so they can be translated.
// Vendor library: _static/aaps-builder/aaps-builder.forge.min.js = node-forge 1.3.1
// (BSD-3-Clause or GPL-2.0), https://github.com/digitalbazaar/forge. Pinned: it is the
// unmodified dist/forge.min.js of the npm package node-forge@1.3.1, checked against the npm
// registry integrity hash. SHA-256 (verify after any change, update only after review):
// dc67fd132427ad96c9666c844b39565413c40ddb1f2d063c53512fbf6d387dfd
(() => {
  const REPO_NAME = 'my-aaps';
  const WORKFLOW_PATH = '.github/workflows/build.yml';       // where it goes in the user's repository

  const $ = id => document.getElementById('aapsb-' + id);
  // The texts are in the page (hidden list above), so they are translated with it.
  const M = {};
  document.querySelectorAll('[data-aapsb-msg]').forEach(el => { M[el.dataset.aapsbMsg] = el.textContent.trim(); });
  const t = (key, vars = {}) => M[key].replace(/\{(\w+)\}/g, (all, k) => k in vars ? vars[k] : all);
  const store = {
    get: k => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch {} }
  };
  const done = step => { const el = document.getElementById('aaps-builder-setup-step' + step); if (el) el.closest('section').classList.add('aapsb-done'); };

  // ---------- step 1: links ----------
  const userInput = $('user');
  userInput.value = store.get('ghUser') || '';
  const user = () => userInput.value.trim().replace(/^@/, '');
  const repoInput = $('repo');
  repoInput.value = store.get('ghRepo') || REPO_NAME;
  const repo = () => repoInput.value.trim() || REPO_NAME;

  // Step 2: GitHub's new-file page, prefilled with the file name and the workflow text (value=).
  // The workflow is short (it calls the reviewed build steps in the AAPS documentation repository).
  let workflowText = null;
  const newFilePath = () => '/new/main?filename=' + encodeURIComponent(WORKFLOW_PATH) +
    (workflowText ? '&value=' + encodeURIComponent(workflowText) : '');

  const LINKS = [
    ['addWorkflow', newFilePath],
    ['openWorkflowFile', '/edit/main/' + WORKFLOW_PATH],
    ['openSecrets', '/settings/secrets/actions/new'],
    ['openSecrets2', '/settings/secrets/actions/new'],
    ['openActions', '/actions/workflows/build.yml'],
    ['openRuns', '/actions/workflows/build.yml']
  ];

  function updateLinks() {
    const u = user();
    store.set('ghUser', u);
    store.set('ghRepo', repo());
    // github.com/new with documented prefill parameters: an EMPTY private repository, no template.
    const p = new URLSearchParams({ owner: '@me', name: repo(), visibility: 'private' });
    $('createRepo').href = 'https://github.com/new?' + p;
    document.querySelectorAll('.aapsb-repoUrl').forEach(el => { el.textContent = `github.com/${u || '…'}/${repo()}`; });
    const base = `https://github.com/${encodeURIComponent(u)}/${encodeURIComponent(repo())}`;
    for (const [id, path] of LINKS) $(id).href = u ? base + (typeof path === 'function' ? path() : path) : '#aaps-builder-setup-step1';
  }
  userInput.addEventListener('input', updateLinks);
  // Check that the username exists (GitHub's public API, sends only the name)
  let userTimer;
  async function checkUser() {
    const u = user();
    if (!u) { $('userMsg').textContent = ''; return; }
    try {
      const r = await fetch(`https://api.github.com/users/${encodeURIComponent(u)}`);
      if (u !== user()) return;
      if (r.status === 200) msg('userMsg', t('userOk'), 'ok');
      else if (r.status === 404) msg('userMsg', t('userBad'), 'err');
      else $('userMsg').textContent = '';
    } catch { $('userMsg').textContent = ''; }
  }
  userInput.addEventListener('input', () => { clearTimeout(userTimer); userTimer = setTimeout(checkUser, 600); });
  repoInput.addEventListener('input', updateLinks);
  for (const [id] of LINKS) {
    $(id).addEventListener('click', e => { if (!user()) { e.preventDefault(); userInput.focus(); alert(t('needUser')); } });
  }

  // ---------- helpers ----------
  const utf8 = s => new TextEncoder().encode(s);
  function bytesToB64(bytes) {
    let s = '';
    for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    return btoa(s);
  }
  const binStrToBytes = s => Uint8Array.from(s, c => c.charCodeAt(0));
  const sha1 = async (...parts) => {
    const all = new Uint8Array(parts.reduce((n, p) => n + p.length, 0));
    let o = 0; for (const p of parts) { all.set(p, o); o += p.length; }
    return new Uint8Array(await crypto.subtle.digest('SHA-1', all));
  };
  const eq = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);
  // JKS uses the password as UTF-16BE bytes
  const utf16be = s => { const b = new Uint8Array(s.length * 2); for (let i = 0; i < s.length; i++) { b[2*i] = s.charCodeAt(i) >> 8; b[2*i+1] = s.charCodeAt(i) & 255; } return b; };

  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); }
    catch {
      const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta);
      ta.select(); document.execCommand('copy'); ta.remove();
    }
  }
  function msg(id, text, cls) { const el = $(id); el.className = 'aapsb-msg ' + cls; el.textContent = text; }

  // ---------- step 2: build workflow (read from the AAPS documentation site only) ----------
  const WORKFLOW_URL = $('viewWorkflow').href;               // _static/aaps-builder/aaps-builder-build.yml
  async function loadWorkflow() {
    const r = await fetch(WORKFLOW_URL, { cache: 'no-store' });
    if (!r.ok) throw new Error(r.status);
    const text = (await r.text()).replace(/\r\n/g, '\n');
    const v = (text.match(/^# AAPS Builder build workflow, version (\S+)/m) || [])[1];
    if (!v) throw new Error('not the workflow');
    return { text, v };
  }
  loadWorkflow().then(({ text, v }) => {
    workflowText = text;
    msg('workflowMsg', t('workflowReady', { v }), 'ok');
    updateLinks();
  }).catch(e => { console.error(e); msg('workflowMsg', t('workflowErr'), 'err'); });
  $('addWorkflow').addEventListener('click', e => {
    if (!workflowText) { e.preventDefault(); msg('workflowMsg', t('workflowErr'), 'err'); return; }
    if (user()) done(2);
  });
  $('copyWorkflow').addEventListener('click', async () => {
    try {
      const { text, v } = await loadWorkflow();
      await copyText(text);
      msg('copyWorkflowMsg', t('workflowCopied', { v }), 'ok');
    } catch (e) {
      console.error(e);
      msg('copyWorkflowMsg', t('workflowErr'), 'err');
    }
  });

  let secretValue = null;
  function setSecret(ksBytes, storePass, alias, keyPass) {
    const raw = [bytesToB64(ksBytes), storePass, alias, keyPass].join('|');
    secretValue = bytesToB64(utf8(raw));
    $('secretPreview').textContent = secretValue.slice(0, 16) + '…';
    done(3);
    $('s4wait').hidden = true;
    $('s4ready').hidden = false;
  }

  // ---------- step 3a: existing keystore ----------
  function parseJks(bytes) {
    const v = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    if (v.getUint32(0) !== 0xFEEDFEED) return null;
    let o = 12; const n = v.getUint32(8); const entries = [];
    const readUtf = () => { const len = v.getUint16(o); o += 2; const s = new TextDecoder().decode(bytes.subarray(o, o + len)); o += len; return s; };
    const skipCert = () => { if (v.getUint32(4) === 2) readUtf(); const len = v.getUint32(o); o += 4 + len; };
    for (let i = 0; i < n; i++) {
      const tag = v.getUint32(o); o += 4;
      const alias = readUtf(); o += 8;
      if (tag === 1) {
        const len = v.getUint32(o); o += 4;
        const key = bytes.subarray(o, o + len); o += len;
        const chain = v.getUint32(o); o += 4;
        for (let c = 0; c < chain; c++) skipCert();
        entries.push({ alias, key });
      } else { skipCert(); }
    }
    return { entries, body: bytes.subarray(0, o), digest: bytes.subarray(o, o + 20) };
  }

  // Sun JKS KeyProtector: verify key password without fully decrypting
  async function jksKeyPassOk(encKeyInfo, pass) {
    // EncryptedPrivateKeyInfo: SEQ { AlgId, OCTET STRING data }
    const asn = forge.asn1.fromDer(forge.util.createBuffer(String.fromCharCode.apply(null, encKeyInfo)));
    const data = binStrToBytes(asn.value[1].value);
    const salt = data.subarray(0, 20), enc = data.subarray(20, data.length - 20), check = data.subarray(data.length - 20);
    const pw = utf16be(pass);
    const plain = new Uint8Array(enc.length);
    let d = salt;
    for (let off = 0; off < enc.length; off += 20) {
      d = await sha1(pw, d);
      for (let j = 0; j < 20 && off + j < enc.length; j++) plain[off + j] = enc[off + j] ^ d[j];
    }
    return eq(await sha1(pw, plain), check);
  }

  let haveBytes = null, haveKind = null, haveJks = null;
  $('ksFile').addEventListener('change', async () => {
    const f = $('ksFile').files[0]; $('haveMsg').textContent = '';
    if (!f) return;
    haveBytes = new Uint8Array(await f.arrayBuffer());
    haveJks = null; haveKind = null;
    try { haveJks = parseJks(haveBytes); } catch { haveJks = null; }
    if (haveJks) {
      haveKind = 'jks';
      const sel = $('ksAliasSel');
      sel.innerHTML = '';
      haveJks.entries.forEach(e => sel.add(new Option(e.alias, e.alias)));
      if (haveJks.entries.length > 0) {
        sel.hidden = false; $('ksAlias').hidden = true; $('ksAlias').value = haveJks.entries[0].alias;
        sel.onchange = () => { $('ksAlias').value = sel.value; };
      }
    } else if (haveBytes[0] === 0x30) {
      haveKind = 'p12';
      $('ksAliasSel').hidden = true; $('ksAlias').hidden = false;
    } else {
      msg('haveMsg', t('errFormat'), 'err');
    }
  });
  $('samePass').addEventListener('change', () => { $('keyPassWrap').hidden = $('samePass').checked; });

  $('haveGo').addEventListener('click', async () => {
    const pass = $('ksPass').value, alias = $('ksAlias').value.trim();
    const keyPass = $('samePass').checked ? pass : $('keyPass').value;
    if (!haveBytes) return msg('haveMsg', t('errNoFile'), 'err');
    if (!haveKind) return msg('haveMsg', t('errFormat'), 'err');
    if (!pass || !alias || !keyPass) return msg('haveMsg', t('errEmpty'), 'err');
    if ([pass, alias, keyPass].some(s => s.includes('|'))) return msg('haveMsg', t('errPipe'), 'err');

    try {
      if (haveKind === 'jks') {
        const d = await sha1(utf16be(pass), utf8('Mighty Aphrodite'), haveJks.body);
        if (!eq(d, haveJks.digest)) return msg('haveMsg', t('errPass'), 'err');
        const entry = haveJks.entries.find(e => e.alias.toLowerCase() === alias.toLowerCase());
        if (!entry) return msg('haveMsg', t('errAlias', { aliases: haveJks.entries.map(e => e.alias).join(', ') }), 'err');
        if (!(await jksKeyPassOk(entry.key, keyPass))) return msg('haveMsg', t('errKeyPass'), 'err');
        setSecret(haveBytes, pass, entry.alias, keyPass);
        return msg('haveMsg', t('okHave'), 'ok');
      }
      // PKCS12
      let p12;
      try {
        const asn = forge.asn1.fromDer(forge.util.createBuffer(String.fromCharCode.apply(null, haveBytes)));
        p12 = forge.pkcs12.pkcs12FromAsn1(asn, pass);
      } catch (e) {
        if (/password|MAC/i.test(String(e && e.message))) return msg('haveMsg', t('errPass'), 'err');
        // Could not parse locally; let the build validate it
        setSecret(haveBytes, pass, alias, keyPass);
        return msg('haveMsg', t('okHaveUnchecked'), 'warn');
      }
      const names = [...new Set(p12.safeContents.flatMap(sc => sc.safeBags.flatMap(b => (b.attributes.friendlyName || []))))];
      if (names.length && !names.some(n => n.toLowerCase() === alias.toLowerCase())) {
        return msg('haveMsg', t('errAlias', { aliases: names.join(', ') }), 'err');
      }
      setSecret(haveBytes, pass, alias, keyPass);
      msg('haveMsg', t('okHave'), 'ok');
    } catch (e) {
      console.error(e);
      setSecret(haveBytes, pass, alias, keyPass);
      msg('haveMsg', t('okHaveUnchecked'), 'warn');
    }
  });

  // ---------- step 3b: new keystore ----------
  // Use the browser's cryptographic RNG for everything forge needs (salts, IVs, serial)
  forge.random.getBytesSync = n => String.fromCharCode.apply(null, crypto.getRandomValues(new Uint8Array(n)));
  forge.random.getBytes = (n, cb) => cb ? cb(null, forge.random.getBytesSync(n)) : forge.random.getBytesSync(n);
  let newKsBytes = null;
  $('newGo').addEventListener('click', async () => {
    const p1 = $('newPass').value, p2 = $('newPass2').value;
    if (p1.length < 8) return msg('newMsg', t('errShort'), 'err');
    if (p1 !== p2) return msg('newMsg', t('errMatch'), 'err');
    if (!/^[\x21-\x7e]+$/.test(p1) || p1.includes('|')) return msg('newMsg', t('errAscii'), 'err');
    $('newGo').disabled = true;
    msg('newMsg', t('working'), '');
    try {
      const kp = await crypto.subtle.generateKey(
        { name: 'RSASSA-PKCS1-v1_5', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' },
        true, ['sign', 'verify']);
      const pkcs8 = new Uint8Array(await crypto.subtle.exportKey('pkcs8', kp.privateKey));
      const key = forge.pki.privateKeyFromAsn1(forge.asn1.fromDer(forge.util.createBuffer(String.fromCharCode.apply(null, pkcs8))));
      const cert = forge.pki.createCertificate();
      cert.publicKey = forge.pki.setRsaPublicKey(key.n, key.e);
      cert.serialNumber = '01' + forge.util.bytesToHex(forge.random.getBytesSync(8));
      cert.validity.notBefore = new Date();
      cert.validity.notAfter = new Date(); cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + 50);
      const subject = [{ name: 'commonName', value: 'AAPS' }];
      cert.setSubject(subject); cert.setIssuer(subject);
      cert.sign(key, forge.md.sha256.create());
      const asn = forge.pkcs12.toPkcs12Asn1(key, [cert], p1, { algorithm: '3des', friendlyName: 'key0', generateLocalKeyId: true });
      newKsBytes = binStrToBytes(forge.asn1.toDer(asn).getBytes());
      setSecret(newKsBytes, p1, 'key0', p1);
      $('backupBox').hidden = false;
      msg('newMsg', t('okNew'), 'ok');
    } catch (e) {
      console.error(e);
      msg('newMsg', String(e), 'err');
      $('newGo').disabled = false;
    }
  });
  $('downloadKs').addEventListener('click', () => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([newKsBytes], { type: 'application/octet-stream' }));
    a.download = 'aaps-keystore.jks';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });

  // ---------- step 4 / 7: copy secret names and value ----------
  document.querySelectorAll('[data-aapsb-copy]').forEach(b => b.addEventListener('click', async () => {
    const fixed = { name: 'KEYSTORE_SET', gdrive: 'GDRIVE_OAUTH2' };
    await copyText(fixed[b.dataset.aapsbCopy] ?? secretValue);
    if (b.dataset.aapsbCopy === 'secret') msg('copyMsg', t('copied'), 'ok');
    if (b.dataset.aapsbCopy === 'name') msg('copyMsg', t('copiedName'), 'ok');
    const label = b.textContent;
    b.textContent = t('copiedShort');
    setTimeout(() => { b.textContent = label; }, 2000);
  }));

  updateLinks();
  checkUser();
})();
</script>
