(aaps-builder-setup)=

# Page de configuration AAPS Builder

Compilez votre propre application **AAPS** dans GitHub. Aucun programme à installer, pas de terminal. Environ 10 minutes la première fois, ensuite vous lancez vous-même chaque compilation.

Chaque étape est expliquée plus en détail, avec des captures d'écran, dans [Compilation dans le navigateur avec AAPS Builder](#aaps-builder). Gardez cette page ouverte dans un autre onglet.

Les boutons ci-dessous ouvrent GitHub dans un nouvel onglet Chrome. Pour revenir à cette page, appuyez sur le bouton des onglets à côté de la barre d'adresse de Chrome (le carré avec un nombre) et choisissez cette page.

(aaps-builder-setup-step1)=

## Étape 1 – Créer votre dépôt de compilation privé

This creates your own private copy of AAPS Builder in your GitHub account: a repository with the build workflow already in it. Vous seul pouvez le voir, ainsi que les applications qu'il compile. Vous n'avez **pas** besoin de faire un fork d'AndroidAPS : le code source d'AAPS est téléchargé depuis le dépôt officiel AndroidAPS à chaque compilation.

<label class="aapsb-label" for="aapsb-user">Your GitHub username</label>
<input class="aapsb-input" type="text" id="aapsb-user" autocomplete="username" spellcheck="false" placeholder="my-github-name" />
<span class="aapsb-msg" id="aapsb-userMsg"></span>

Connectez-vous d'abord à github.com dans ce navigateur (pas de compte ? créez-en un gratuitement). Revenez ensuite ici. Utilisez votre nom d'utilisateur (affiché dans votre profil GitHub), pas votre e-mail : la page demande à GitHub si ce nom d'utilisateur existe.

<label class="aapsb-label" for="aapsb-repo">Name of your repository</label>
<input class="aapsb-input" type="text" id="aapsb-repo" spellcheck="false" placeholder="my-aaps" />

Gardez le nom proposé. Vous avez déjà créé votre dépôt avec un autre nom ? Tapez ce nom exact ici.

```{note}
**Already have an AAPS Builder repository** (made with an earlier version of this page)? Do not create a new one: type its exact name here, skip the button below, and update its workflow once: see **Updating your copy** at the end of this step. Your secrets stay as they are.

If you want a new repository anyway, choose a name you don't have yet, for example `my-aaps-2`, and use the same keystore in step 2.

Do not type the name of your fork of AndroidAPS: a fork is public, and it already builds with its own **AAPS CI** workflow.
```

Your repository :<code class="aapsb-repoUrl"></code>

Check this name before you use the buttons below: the page remembers the name from your last visit.

<a class="aapsb-btn" id="aapsb-createRepo" target="_blank" rel="noopener">Create my private repository</a>

On the GitHub page that opens, everything is already filled in: the template `nightscout/aaps-builder`, your account as owner, the name of your repository, and **Private**. Do not change anything, and leave **Include all branches** unticked.

1. Cliquez sur le bouton vert **Create repository**.
2. GitHub shows your new repository with a folder `.github` and a file `README.md`: the build workflow is in it. Revenez à cette page pour l'étape 2.

```{admonition} Your new repository is empty (no files)?
:class: warning

It was not created from the template. Delete it (**Settings** → bottom of the page → **Delete this repository**), then tap **Create my private repository** again.
```

```{admonition} Updating your copy (existing AAPS Builder repository)
:class: dropdown

The build steps are updated for you: at every build, your repository runs the version released by the AAPS developers in nightscout/aaps-builder, and nothing in your repository changes. You only replace your workflow file when [Docs updates & changes](../Maintenance/DocumentationUpdate.md) announces it (for example for a new build variant), or once if your repository was made with an earlier version of this page or from the old template. Your `KEYSTORE_SET` secret stays as it is.

1. <a class="aapsb-btn aapsb-secondary" href="https://github.com/nightscout/aaps-builder/blob/main/.github/workflows/build.yml" target="_blank" rel="noopener">Open the newest workflow</a>

   On a computer, click the **copy icon** ("Copy raw file") at the top right of the file. On a phone, open the <a href="https://raw.githubusercontent.com/nightscout/aaps-builder/main/.github/workflows/build.yml" target="_blank" rel="noopener">plain-text version</a> instead, press and hold the text → **Select all** → **Copy**.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openWorkflowFile" target="_blank" rel="noopener">Open my workflow file</a>

   Opens `.github/workflows/build.yml` in <code class="aapsb-repoUrl"></code> for editing.
3. Replace the whole text with the copied workflow (on a phone: press and hold → **Select all** → **Paste**), then click **Commit changes…** twice. The first line of the file shows its version.
```

(aaps-builder-setup-step2)=

## Step 2 – Your signing key

L'application doit être signée avec votre propre clé. Utilisez toujours la même clé, sinon vous devez désinstaller AAPS (et perdre ses paramètres) pour faire une mise à jour. Choisissez l'un des deux onglets.

`````{tab-set}

````{tab-item} I already have a keystore
Par exemple depuis Android Studio (.jks).

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
Vous compilez AAPS pour la première fois ? Une nouvelle clé est créée ici, dans votre navigateur. Rien n'est envoyé nulle part.

<label class="aapsb-label" for="aapsb-newPass">Choose a password (at least 8 characters, no accented letters)</label>
<input class="aapsb-input" type="password" id="aapsb-newPass" autocomplete="new-password">

<label class="aapsb-label" for="aapsb-newPass2">Repeat the password</label>
<input class="aapsb-input" type="password" id="aapsb-newPass2" autocomplete="new-password">

<button class="aapsb-btn" type="button" id="aapsb-newGo">Create key</button> <span class="aapsb-msg" id="aapsb-newMsg"></span>

<div class="aapsb-box" id="aapsb-backupBox" hidden>

**Enregistrez une sauvegarde de votre clé !**

Téléchargez le fichier. Gardez ces trois éléments ensemble, dans un endroit sûr en dehors de votre téléphone (par ex. votre propre stockage en ligne) :

- le fichier `aaps-keystore.jks`
- votre mot de passe
- l'alias de la clé : **`key0`**

Vous aurez besoin des trois si un jour vous compilez AAPS d'une autre façon, par ex. avec Android Studio.

<button class="aapsb-btn" type="button" id="aapsb-downloadKs">Download backup (aaps-keystore.jks)</button>

</div>
````

`````
(aaps-builder-setup-step3)=
## Step 3 – Give the key to your repository
<span id="aapsb-s3wait">Finish step 2 first.</span>

<div id="aapsb-s3ready" hidden>
  1. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets" target="_blank" rel="noopener">Open the secrets page</a> Ouvre : <code class="aapsb-repoUrl"></code> Vous obtenez « Page not found » (404) ? Vérifiez d'abord que vous êtes connecté à github.com dans ce navigateur : GitHub affiche 404 pour les dépôts privés quand vous n'êtes pas connecté. Sinon, votre nom d'utilisateur ou le nom du dépôt de l'étape 1 ne correspond pas à votre dépôt : vérifiez-les sur github.com et tapez-les à l'étape 1. 2. Appuyez sur « Copy name », puis collez-le dans le petit champ « Name » : `KEYSTORE_SET` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="name">Copy name</button> 3. Appuyez sur « Copy secret », puis collez le long code dans la grande zone « Secret » : <code id="aapsb-secretPreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="secret">Copy secret</button> <span class="aapsb-msg" id="aapsb-copyMsg"></span> Le secret est un code très long (des milliers de caractères), PAS le mot KEYSTORE_SET. Copiez et collez d'abord le nom, puis le long code. 4. Appuyez sur « Add secret ». C'est fait, vous n'aurez plus jamais à le refaire.
</div>
(aaps-builder-setup-step4)=
## Step 4 – Build the app

1. <a class="aapsb-btn" id="aapsb-openActions" target="_blank" rel="noopener">Open the build page</a>

   Ouvre : <code class="aapsb-repoUrl"></code>

   Vous obtenez « Page not found » (404) ? Vérifiez d'abord que vous êtes connecté à github.com dans ce navigateur : GitHub affiche 404 pour les dépôts privés quand vous n'êtes pas connecté. Sinon, votre nom d'utilisateur ou le nom du dépôt de l'étape 1 ne correspond pas à votre dépôt : vérifiez-les sur github.com et tapez-les à l'étape 1. C'est l'application GitHub qui s'est ouverte ? Appuyez sur « RUN WORKFLOW », vérifiez la version et la variante, puis appuyez de nouveau sur « RUN WORKFLOW ». Si l'application affiche toujours « Nothing to see here », tirez la liste vers le bas pour voir votre compilation.
2. If asked, click the green button to enable workflows.
The list of workflows shows two entries: use "Build AAPS". Ignore "AAPS Builder": it holds the build steps and has no "Run workflow" button.
3. Cliquez sur « Run workflow », puis sur le bouton vert « Run workflow ». « latest » compile la version la plus récente d'AAPS. ***astuce :*** *vous pouvez compiler une autre version en tapant le nom de son [tag](https://github.com/nightscout/AndroidAPS/tags) à la place de « latest »*
4. Attendez environ 15–30 minutes. Une coche verte veut dire que c'est terminé.
Vous voulez un e-mail quand la compilation est terminée ? GitHub vous envoie un e-mail seulement quand une compilation échoue. Pour en recevoir un aussi en cas de réussite : sur github.com, ouvrez votre photo de profil → Settings → Notifications → System → Actions, et décochez « Only notify for failed workflows ».

```{admonition} No "Build AAPS" / "Run workflow" button?
:class: warning

1. Open your repository and check that it has a folder `.github` with the file `workflows/build.yml`. If the repository is empty, it was not created from the template: delete it (**Settings** → bottom of the page → **Delete this repository**) and do [step 1](#aaps-builder-setup-step1) again with the button.
2. Ouvrez l'onglet Actions. S'il est indiqué que les workflows sont désactivés, cliquez sur le bouton vert pour les activer. Cliquez ensuite sur « Build AAPS » dans la liste.
```

(aaps-builder-setup-step5)=

## Step 5 – Install on your phone

```{admonition} Before every update: back up your settings!
:class: warning

1. Dans AAPS : Maintenance → Exporter les paramètres. (Faites-le régulièrement de toute façon, par ex. après un changement de profil ou une fois par mois.)
2. Copiez le fichier exporté EN DEHORS du téléphone, par ex. dans Google Drive ou Dropbox. Une sauvegarde qui existe seulement sur le téléphone est perdue avec le téléphone.
3. Gardez-y aussi les fichiers APK et plusieurs anciens exports. Ainsi, vous pouvez toujours revenir en arrière.

[Comment exporter les paramètres](#ExportImportSettings-Settings-Export) · [FAQ AAPS : comment organiser les sauvegardes](#FAQ-organize-backups)
```

1. Ouvrez cette page sur votre téléphone, dans le navigateur web (Chrome). Connectez-vous à github.com si c'est demandé.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openRuns" target="_blank" rel="noopener">Open my builds</a>

   C'est l'application GitHub qui s'est ouverte ? Elle ne peut pas télécharger les compilations. Dans l'application, ouvrez la compilation la plus récente et appuyez sur « Artifacts ↗ », ou appuyez sur l'icône de partage et choisissez Chrome (ou « Copy link », puis collez le lien dans la barre d'adresse de Chrome). Continuez dans Chrome.

   Vous obtenez « Page not found » (404) ? Vérifiez d'abord que vous êtes connecté à github.com dans ce navigateur : GitHub affiche 404 pour les dépôts privés quand vous n'êtes pas connecté. Sinon, votre nom d'utilisateur ou le nom du dépôt de l'étape 1 ne correspond pas à votre dépôt : vérifiez-les sur github.com et tapez-les à l'étape 1.

   Pour que les liens GitHub ne s'ouvrent plus dans l'application : Paramètres Android → Applications → GitHub → Ouvrir par défaut → désactivez « Ouvrir les liens compatibles ».
3. Appuyez sur la compilation la plus récente avec une coche verte ✅.
4. Faites défiler jusqu'au résumé de la compilation et appuyez sur le grand lien « 📱 Download AAPS … » (ou faites défiler plus bas jusqu'à « Artifacts » et appuyez sur aaps-….apk). Faites défiler avec le doigt sur le texte, pas sur le schéma des étapes de compilation.
5. Quand le téléchargement est terminé, appuyez sur le fichier et choisissez Installer. Si c'est demandé, autorisez l'installation d'applications depuis cette source.
6. aaps-wear-….apk est pour une montre connectée. Ignorez-le si vous n'en utilisez pas.

L'APK n'apparaît pas sous « Code » dans votre dépôt, seulement sur la page de la compilation. Il est gardé 14 jours.

Nouvelle version d'AAPS ? Back up your settings, then build it with [step 4](#aaps-builder-setup-step4). Votre dépôt ne compile jamais rien tout seul.

(aaps-builder-setup-step6)=

## Step 6 – Optional: get the app in Google Drive

Vous voulez que l'APK apparaisse dans votre Google Drive (gardé pour toujours) ? Add one more secret, GDRIVE_OAUTH2. This page gets it from Google for you. AAPS can then only see and change the files it creates in your Google Drive, nothing else.

1. <a class="aapsb-btn" id="aapsb-googleAuth" target="_blank" rel="noopener">Connect Google Drive</a>

   Google opens in a new tab. Choose your Google account and allow AAPS to see and change its own files. If Google says the app is not verified, tap "Advanced", then "Go to …".
2. Then the new tab shows an error like **"This site can't be reached"** or **"127.0.0.1 refused to connect"**. **This is expected.** Google's answer is in the address of that tab.

   Tap the address bar of that tab, select all of the address and copy it. It starts with `http://127.0.0.1:47913/`. Come back to this page within a few minutes: the answer is only valid for a short time.
3. <label class="aapsb-label" for="aapsb-googleUrl">Paste the copied address here</label> <input class="aapsb-input" type="url" id="aapsb-googleUrl" autocomplete="off" spellcheck="false" placeholder="http://127.0.0.1:47913/aaps-builder?…" /> <button class="aapsb-btn" type="button" id="aapsb-googleGo">Get GDRIVE_OAUTH2</button> <span class="aapsb-msg" id="aapsb-googleMsg"></span>

<div id="aapsb-gdriveReady" hidden>

4. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets2" target="_blank" rel="noopener">Open the secrets page</a>

   Opens: <code class="aapsb-repoUrl"></code>

   Getting "Page not found" (404)? Vérifiez d'abord que vous êtes connecté à github.com dans ce navigateur : GitHub affiche 404 pour les dépôts privés quand vous n'êtes pas connecté. Sinon, votre nom d'utilisateur ou le nom du dépôt de l'étape 1 ne correspond pas à votre dépôt : vérifiez-les sur github.com et tapez-les à l'étape 1.
5. Tap "Copy name", then paste it into the small "Name" field: `GDRIVE_OAUTH2` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="gdrive">Copy name</button>
6. Tap "Copy secret", then paste the code into the big "Secret" box: <code id="aapsb-gdrivePreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="gdriveValue">Copy secret</button> <span class="aapsb-msg" id="aapsb-gdriveCopyMsg"></span>
7. Appuyez sur « Add secret ».

</div>

```{admonition} Already have a GDRIVE_OAUTH2 value?
:class: dropdown

A value from the AAPS preparation page of the other browser build works too: open the secrets page, add the name `GDRIVE_OAUTH2` and paste your value. See [Save the builds in Google Drive](#aaps-builder-google-drive).
```

À la prochaine compilation, les APK sont aussi enregistrés dans Google Drive, dans le dossier AAPS/&lt;version&gt;.

Si vous ne compilez pas pendant 6 mois, ou si vous changez votre mot de passe Google, Google arrête l'accès. La compilation vous le dit alors : refaites cette étape.

----

Tout ce qui se trouve sur cette page fonctionne dans votre navigateur. Votre clé et vos mots de passe ne sont jamais envoyés nulle part, sauf là où vous les collez vous-même. Seul votre nom d'utilisateur GitHub est envoyé à GitHub, pour vérifier qu'il existe. In step 6, the Google answer is sent only to Google, to get GDRIVE_OAUTH2. The build workflow is maintained by the AAPS developers in [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder), based on AAPS Builder (AGPL-3.0).

<div id="aapsb-msgs" hidden>

- <span data-aapsb-msg="copied">Code long copié : collez-le dans la grande case « Secret », puis appuyez sur « Add secret ».</span>
- <span data-aapsb-msg="copiedName">Nom copié : collez-le dans le petit champ « Name ».</span>
- <span data-aapsb-msg="userOk">✓ Utilisateur GitHub trouvé.</span>
- <span data-aapsb-msg="userBad">✗ Aucun utilisateur GitHub avec ce nom. Use your username (shown in your GitHub profile), not your e-mail.</span>
- <span data-aapsb-msg="copiedShort">Copied ✓</span>
- <span data-aapsb-msg="needUser">Enter your GitHub username in step 1 first.</span>
- <span data-aapsb-msg="errPipe">Passwords and alias cannot contain the character |</span>
- <span data-aapsb-msg="errNoFile">Choose your keystore file.</span>
- <span data-aapsb-msg="errEmpty">Fill in password and alias.</span>
- <span data-aapsb-msg="errPass">Wrong keystore password.</span>
- <span data-aapsb-msg="errKeyPass">Wrong key password.</span>
- <span data-aapsb-msg="errAlias">Alias not found in the keystore. Disponibles : {aliases}</span>
- <span data-aapsb-msg="errFormat">Ce fichier ne ressemble pas à un keystore.</span>
- <span data-aapsb-msg="okHave">Keystore OK ! Continue with step 3.</span>
- <span data-aapsb-msg="okHaveUnchecked">Keystore read. Le mot de passe sera vérifié lors de la compilation. Continue with step 3.</span>
- <span data-aapsb-msg="errShort">The password must be at least 8 characters.</span>
- <span data-aapsb-msg="errAscii">Use only a–z, A–Z, 0–9 and symbols such as ! ? # – pas d'espaces, pas de lettres accentuées et pas de |</span>
- <span data-aapsb-msg="errMatch">Les mots de passe ne correspondent pas.</span>
- <span data-aapsb-msg="working">Création de la clé…</span>
- <span data-aapsb-msg="okNew">Clé créée. Download the backup below, then continue with step 3.</span>
- <span data-aapsb-msg="gNoUrl">Paste the whole address of the Google tab first.</span>
- <span data-aapsb-msg="gNoCode">This address has no answer from Google. Copy the whole address of the tab that shows the error, starting with http://127.0.0.1:47913/</span>
- <span data-aapsb-msg="gDenied">Google access was not allowed. Tap "Connect Google Drive" again and allow access.</span>
- <span data-aapsb-msg="gOldUrl">This address belongs to an older attempt. Tap "Connect Google Drive" again and use the new address.</span>
- <span data-aapsb-msg="gWorking">Asking Google…</span>
- <span data-aapsb-msg="gFailed">Google did not accept it ({error}). The answer is valid only for a few minutes and only once: tap "Connect Google Drive" again.</span>
- <span data-aapsb-msg="gNoRefresh">Google sent no long-term access. Tap "Connect Google Drive" again.</span>
- <span data-aapsb-msg="gOk">GDRIVE_OAUTH2 is ready. Add it as a secret below.</span>
- <span data-aapsb-msg="gCopied">Code copied: paste it in the big "Secret" box, then tap "Add secret".</span>

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
// AAPS Builder setup page logic. Walks the user through creating a private copy of the
// github.com/nightscout/aaps-builder template (the build workflow is in it) and creating the
// KEYSTORE_SET secret. The repository then builds AAPS from the official source,
// github.com/nightscout/AndroidAPS, with GitHub Actions.
//
// The keystore and passwords never leave this browser. The only requests are asking GitHub's
// public API whether the typed username exists (only the name is sent) and, in the optional
// Google Drive step, sending Google's one-time answer to Google's token endpoint. The page's
// Content-Security-Policy (set in docs/shared.conf.py) allows only the AAPS documentation site
// itself, https://api.github.com and https://oauth2.googleapis.com/token.
//
// Based on AAPS Builder by the AAPS Builder authors (github.com/dio99/aaps-builder), GNU Affero
// General Public License v3.0 (AGPL-3.0). Modified for the AAPS documentation: texts in the page
// so they can be translated, workflow maintained in github.com/nightscout/aaps-builder.
// Vendor library: _static/aaps-builder/aaps-builder.forge.min.js = node-forge 1.3.1
// (BSD-3-Clause or GPL-2.0), https://github.com/digitalbazaar/forge, the unmodified
// dist/forge.min.js of the npm package node-forge@1.3.1.
(() => {
  const TEMPLATE = { owner: 'nightscout', name: 'aaps-builder' };
  const REPO_NAME = 'my-aaps';
  const WORKFLOW_PATH = '.github/workflows/build.yml';       // where the template puts it

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

  const LINKS = [
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
    // GitHub's own "Use this template" page, with its documented prefill parameters: the copy is
    // private and contains the build workflow. owner=@me is the signed-in user.
    const p = new URLSearchParams({ template_owner: TEMPLATE.owner, template_name: TEMPLATE.name,
                                    owner: '@me', name: repo(), visibility: 'private' });
    $('createRepo').href = 'https://github.com/new?' + p;
    document.querySelectorAll('.aapsb-repoUrl').forEach(el => { el.textContent = `github.com/${u || '…'}/${repo()}`; });
    const base = `https://github.com/${encodeURIComponent(u)}/${encodeURIComponent(repo())}`;
    for (const [id, path] of LINKS) $(id).href = u ? base + path : '#aaps-builder-setup-step1';
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
  $('createRepo').addEventListener('click', () => done(1));

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

  let secretValue = null;
  function setSecret(ksBytes, storePass, alias, keyPass) {
    const raw = [bytesToB64(ksBytes), storePass, alias, keyPass].join('|');
    secretValue = bytesToB64(utf8(raw));
    $('secretPreview').textContent = secretValue.slice(0, 16) + '…';
    done(2);
    $('s3wait').hidden = true;
    $('s3ready').hidden = false;
  }

  // ---------- step 2a: existing keystore ----------
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

  // ---------- step 2b: new keystore ----------
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

  // ---------- step 6: Google Drive access (GDRIVE_OAUTH2) ----------
  // The same Google OAuth client, scope and PKCE flow as the AAPS preparation page
  // (github.com/nightscout/aaps-ci-preparation), so the build workflow reads the value the same
  // way: base64(client_id|refresh_token). Google sends the browser to a loopback address where
  // nothing listens: the tab shows an error, but its address holds the answer. The user copies that
  // address here, and this page sends the code to Google's token endpoint, and nowhere else.
  // The PKCE verifier stays in this tab, so the code is useless to anything else that sees it.
  const GOOGLE_CLIENT_ID = '705061051276-5ssikkg2ag39l7hj9t63saq549n3s2n5.apps.googleusercontent.com';
  const GOOGLE_REDIRECT = 'http://127.0.0.1:47913/aaps-builder';
  const session = {
    get: k => { try { return sessionStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { sessionStorage.setItem(k, v); } catch {} }
  };
  const randomHex = n => [...crypto.getRandomValues(new Uint8Array(n))].map(b => b.toString(16).padStart(2, '0')).join('');
  const b64url = bytes => bytesToB64(bytes).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

  // The link is ready before the tap, so the browser opens it as a normal link and does not
  // block it as a pop-up.
  async function setGoogleLink(verifier, state) {
    const challenge = b64url(new Uint8Array(await crypto.subtle.digest('SHA-256', utf8(verifier))));
    const p = new URLSearchParams({
      client_id: GOOGLE_CLIENT_ID, redirect_uri: GOOGLE_REDIRECT, response_type: 'code',
      scope: 'https://www.googleapis.com/auth/drive.file', access_type: 'offline',
      // consent: Google sends a refresh token only when the user is asked, also after an earlier grant
      prompt: 'consent', code_challenge_method: 'S256', code_challenge: challenge, state
    });
    $('googleAuth').href = 'https://accounts.google.com/o/oauth2/v2/auth?' + p;
  }
  // A new attempt: new verifier and state
  function newGoogleAttempt() {
    const verifier = randomHex(32), state = randomHex(16);
    session.set('gVerifier', verifier);
    session.set('gState', state);
    return setGoogleLink(verifier, state);
  }
  // Keep the attempt of this tab if the page is reloaded while the user is in the Google tab
  if (session.get('gVerifier') && session.get('gState')) setGoogleLink(session.get('gVerifier'), session.get('gState'));
  else newGoogleAttempt();

  let gdriveValue = null;
  $('googleGo').addEventListener('click', async () => {
    const text = $('googleUrl').value.trim();
    if (!text) return msg('googleMsg', t('gNoUrl'), 'err');
    let params;
    try { params = new URL(text).searchParams; } catch { return msg('googleMsg', t('gNoCode'), 'err'); }
    if (params.get('error')) return msg('googleMsg', t('gDenied'), 'err');
    const code = params.get('code');
    if (!code) return msg('googleMsg', t('gNoCode'), 'err');
    if (params.get('state') !== session.get('gState')) return msg('googleMsg', t('gOldUrl'), 'err');
    $('googleGo').disabled = true;
    msg('googleMsg', t('gWorking'), '');
    try {
      const r = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: GOOGLE_CLIENT_ID, code, code_verifier: session.get('gVerifier'),
          grant_type: 'authorization_code', redirect_uri: GOOGLE_REDIRECT
        })
      });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) {
        msg('googleMsg', t('gFailed', { error: data.error || r.status }), 'err');
        await newGoogleAttempt();
        return;
      }
      if (!data.refresh_token) { msg('googleMsg', t('gNoRefresh'), 'err'); await newGoogleAttempt(); return; }
      gdriveValue = bytesToB64(utf8(GOOGLE_CLIENT_ID + '|' + data.refresh_token));
      $('gdrivePreview').textContent = gdriveValue.slice(0, 16) + '…';
      $('gdriveReady').hidden = false;
      $('googleUrl').value = '';
      msg('googleMsg', t('gOk'), 'ok');
      done(6);
      await newGoogleAttempt();      // the code is used up; a new tap starts a new attempt
    } catch (e) {
      console.error(e);
      msg('googleMsg', t('gFailed', { error: String(e) }), 'err');
    } finally {
      $('googleGo').disabled = false;
    }
  });

  // ---------- step 3 / 6: copy secret names and values ----------
  document.querySelectorAll('[data-aapsb-copy]').forEach(b => b.addEventListener('click', async () => {
    const kind = b.dataset.aapsbCopy;
    const values = { name: 'KEYSTORE_SET', gdrive: 'GDRIVE_OAUTH2', secret: secretValue, gdriveValue };
    await copyText(values[kind]);
    if (kind === 'secret') msg('copyMsg', t('copied'), 'ok');
    if (kind === 'name') msg('copyMsg', t('copiedName'), 'ok');
    if (kind === 'gdriveValue') msg('gdriveCopyMsg', t('gCopied'), 'ok');
    const label = b.textContent;
    b.textContent = t('copiedShort');
    setTimeout(() => { b.textContent = label; }, 2000);
  }));

  updateLinks();
  checkUser();
})();
</script>
