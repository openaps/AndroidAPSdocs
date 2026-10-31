(aaps-builder-setup)=

# Page de configuration AAPS Builder

Compilez votre propre application **AAPS** dans GitHub. Aucun programme à installer, pas de terminal. Environ 10 minutes la première fois, ensuite vous lancez vous-même chaque compilation.

Chaque étape est expliquée plus en détail, avec des captures d'écran, dans [Compilation dans le navigateur avec AAPS Builder](#aaps-builder). Gardez cette page ouverte dans un autre onglet.

Les boutons ci-dessous ouvrent GitHub dans un nouvel onglet Chrome. Pour revenir à cette page, appuyez sur le bouton des onglets à côté de la barre d'adresse de Chrome (le carré avec un nombre) et choisissez cette page.

(aaps-builder-setup-step1)=

## Étape 1 – Créer votre dépôt de compilation privé

Cette étape crée un dépôt privé vide dans votre compte GitHub. Vous seul pouvez le voir, ainsi que les applications qu'il compile. Vous n'avez **pas** besoin de faire un fork d'AndroidAPS : le code source d'AAPS est téléchargé depuis le dépôt officiel AndroidAPS à chaque compilation.

<label class="aapsb-label" for="aapsb-user">Your GitHub username</label>
<input class="aapsb-input" type="text" id="aapsb-user" autocomplete="username" spellcheck="false" placeholder="my-github-name" />
<span class="aapsb-msg" id="aapsb-userMsg"></span>

Connectez-vous d'abord à github.com dans ce navigateur (pas de compte ? créez-en un gratuitement). Revenez ensuite ici. Utilisez votre nom d'utilisateur (affiché dans votre profil GitHub), pas votre e-mail : la page demande à GitHub si ce nom d'utilisateur existe.

<label class="aapsb-label" for="aapsb-repo">Name of your repository</label>
<input class="aapsb-input" type="text" id="aapsb-repo" spellcheck="false" placeholder="my-aaps" />

Gardez le nom proposé. Vous avez déjà créé votre dépôt avec un autre nom ? Tapez ce nom exact ici.

Your repository :<code class="aapsb-repoUrl"></code>

Vous avez déjà créé vous-même un dépôt privé vide ? N'appuyez pas sur le bouton ci-dessous : tapez son nom exact ci-dessus et passez à l'[étape 2](#aaps-builder-setup-step2).

<a class="aapsb-btn" id="aapsb-createRepo" target="_blank" rel="noopener">Create my private repository</a>

Sur la page GitHub qui s'ouvre, le nom est déjà rempli et **Private** est choisi. Ne changez rien, n'ajoutez pas de README ni d'autres fichiers.

1. Cliquez sur le bouton vert **Create repository**.
2. Revenez à cette page pour l'étape 2.

(aaps-builder-setup-step2)=

## Étape 2 – Ajouter le workflow de compilation

Le workflow de compilation est le fichier qui indique à GitHub comment compiler AAPS. Il vient de la documentation AAPS : <a id="aapsb-viewWorkflow" href="../_static/aaps-builder/aaps-builder-build.yml" target="_blank" rel="noopener">voir le workflow</a>.

1. <a class="aapsb-btn" id="aapsb-addWorkflow" target="_blank" rel="noopener">Add the workflow to my repository</a> <span class="aapsb-msg" id="aapsb-workflowMsg"></span>

   Ouvre : <code class="aapsb-repoUrl"></code>, nouveau fichier `.github/workflows/build.yml`, déjà rempli.
2. Vérifiez que le nom du fichier en haut est `.github/workflows/build.yml`. Ne changez pas le texte.
3. Cliquez sur **Commit changes…**, puis de nouveau sur **Commit changes** dans la fenêtre qui s'ouvre.

```{admonition} Updating the workflow, or the text area is empty?
:class: dropdown

1. <button class="aapsb-btn aapsb-secondary" type="button" id="aapsb-copyWorkflow">Copy workflow</button> <span class="aapsb-msg" id="aapsb-copyWorkflowMsg"></span>
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openWorkflowFile" target="_blank" rel="noopener">Open my workflow file</a>

   Pour ajouter le workflow pour la première fois, utilisez plutôt le bouton ci-dessus.
3. Remplacez tout le texte par le workflow copié (appui long sur un téléphone), puis cliquez deux fois sur **Commit changes…**.
```

(aaps-builder-setup-step3)=

## Étape 3 – Votre clé de signature

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
(aaps-builder-setup-step4)=
## Étape 4 – Donner la clé à votre dépôt
<span id="aapsb-s4wait">Terminez d'abord l'étape 3.</span>

<div id="aapsb-s4ready" hidden>
  1. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets" target="_blank" rel="noopener">Open the secrets page</a> Ouvre : <code class="aapsb-repoUrl"></code> Vous obtenez « Page not found » (404) ? Vérifiez d'abord que vous êtes connecté à github.com dans ce navigateur : GitHub affiche 404 pour les dépôts privés quand vous n'êtes pas connecté. Sinon, votre nom d'utilisateur ou le nom du dépôt de l'étape 1 ne correspond pas à votre dépôt : vérifiez-les sur github.com et tapez-les à l'étape 1. 2. Appuyez sur « Copy name », puis collez-le dans le petit champ « Name » : `KEYSTORE_SET` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="name">Copy name</button> 3. Appuyez sur « Copy secret », puis collez le long code dans la grande zone « Secret » : <code id="aapsb-secretPreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="secret">Copy secret</button> <span class="aapsb-msg" id="aapsb-copyMsg"></span> Le secret est un code très long (des milliers de caractères), PAS le mot KEYSTORE_SET. Copiez et collez d'abord le nom, puis le long code. 4. Appuyez sur « Add secret ». C'est fait, vous n'aurez plus jamais à le refaire.
</div>
(aaps-builder-setup-step5)=
## Étape 5 – Compiler l'application

1. <a class="aapsb-btn" id="aapsb-openActions" target="_blank" rel="noopener">Open the build page</a>

   Ouvre : <code class="aapsb-repoUrl"></code>

   Vous obtenez « Page not found » (404) ? Vérifiez d'abord que vous êtes connecté à github.com dans ce navigateur : GitHub affiche 404 pour les dépôts privés quand vous n'êtes pas connecté. Sinon, votre nom d'utilisateur ou le nom du dépôt de l'étape 1 ne correspond pas à votre dépôt : vérifiez-les sur github.com et tapez-les à l'étape 1. C'est l'application GitHub qui s'est ouverte ? Appuyez sur « RUN WORKFLOW », vérifiez la version et la variante, puis appuyez de nouveau sur « RUN WORKFLOW ». Si l'application affiche toujours « Nothing to see here », tirez la liste vers le bas pour voir votre compilation.
2. Si GitHub le demande, cliquez sur le bouton vert pour activer les workflows.
3. Cliquez sur « Run workflow », puis sur le bouton vert « Run workflow ». « latest » compile la version la plus récente d'AAPS. ***astuce :*** *vous pouvez compiler une autre version en tapant le nom de son [tag](https://github.com/nightscout/AndroidAPS/tags) à la place de « latest »*
4. Attendez environ 15–30 minutes. Une coche verte veut dire que c'est terminé.
Vous voulez un e-mail quand la compilation est terminée ? GitHub vous envoie un e-mail seulement quand une compilation échoue. Pour en recevoir un aussi en cas de réussite : sur github.com, ouvrez votre photo de profil → Settings → Notifications → System → Actions, et décochez « Only notify for failed workflows ».

```{admonition} No "Build AAPS" / "Run workflow" button?
:class: warning

1. Ouvrez votre dépôt et vérifiez que le fichier `.github/workflows/build.yml` est présent. S'il manque ou s'il a un autre nom, refaites l'[étape 2](#aaps-builder-setup-step2).
2. Ouvrez l'onglet Actions. S'il est indiqué que les workflows sont désactivés, cliquez sur le bouton vert pour les activer. Cliquez ensuite sur « Build AAPS » dans la liste.
```

(aaps-builder-setup-step6)=

## Étape 6 – Installer sur votre téléphone

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

Nouvelle version d'AAPS ? Sauvegardez vos paramètres, puis compilez-la avec l'[étape 5](#aaps-builder-setup-step5). Votre dépôt ne compile jamais rien tout seul.

(aaps-builder-setup-step7)=

## Étape 7 – Facultatif : recevoir l'application dans Google Drive

Vous voulez que l'APK apparaisse dans votre Google Drive (gardé pour toujours) ? Ajoutez un secret de plus.

1. Obtenez une valeur GDRIVE_OAUTH2 comme expliqué dans la documentation AAPS (avec la page de préparation officielle d'AAPS, sur un ordinateur) : [Enregistrer les compilations dans Google Drive](#aaps-builder-google-drive).
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets2" target="_blank" rel="noopener">Open the secrets page</a>

   Ouvre :<code class="aapsb-repoUrl"></code>

   Vous obtenez « Page not found » (404) ? Vérifiez d'abord que vous êtes connecté à github.com dans ce navigateur : GitHub affiche 404 pour les dépôts privés quand vous n'êtes pas connecté. Sinon, votre nom d'utilisateur ou le nom du dépôt de l'étape 1 ne correspond pas à votre dépôt : vérifiez-les sur github.com et tapez-les à l'étape 1.
3. Appuyez sur « Copy name », puis collez-le dans le petit champ « Name » : `GDRIVE_OAUTH2` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="gdrive">Copy name</button>
4. Collez votre valeur GDRIVE_OAUTH2 dans la grande zone « Secret », puis appuyez sur « Add secret ».

À la prochaine compilation, les APK sont aussi enregistrés dans Google Drive, dans le dossier AAPS/&lt;version&gt;.

Si vous ne compilez pas pendant 6 mois, ou si vous changez votre mot de passe Google, Google arrête l'accès. La compilation vous le dit alors : refaites cette étape.

----

Tout ce qui se trouve sur cette page fonctionne dans votre navigateur. Votre clé et vos mots de passe ne sont jamais envoyés nulle part, sauf là où vous les collez vous-même. Seul votre nom d'utilisateur GitHub est envoyé à GitHub, pour vérifier qu'il existe. La page et le workflow font partie de la documentation AAPS, basée sur AAPS Builder (AGPL-3.0).

<div id="aapsb-msgs" hidden>

- <span data-aapsb-msg="copied">Code long copié : collez-le dans la grande case « Secret », puis appuyez sur « Add secret ».</span>
- <span data-aapsb-msg="copiedName">Nom copié : collez-le dans le petit champ « Name ».</span>
- <span data-aapsb-msg="userOk">✓ Utilisateur GitHub trouvé.</span>
- <span data-aapsb-msg="userBad">✗ Aucun utilisateur GitHub avec ce nom. Utilisez votre nom d'utilisateur (affiché dans votre profil GitHub), pas votre adresse e-mail.</span>
- <span data-aapsb-msg="copiedShort">Copié ✓</span>
- <span data-aapsb-msg="needUser">Saisissez d'abord votre nom d'utilisateur GitHub à l'étape 1.</span>
- <span data-aapsb-msg="workflowCopied">Workflow copié (version {v}). Collez-le dans GitHub.</span>
- <span data-aapsb-msg="workflowReady">La version {v} du workflow est prête.</span>
- <span data-aapsb-msg="workflowErr">Impossible de lire le fichier du workflow. Rechargez cette page et réessayez.</span>
- <span data-aapsb-msg="errPipe">Les mots de passe et l'alias ne peuvent pas contenir le caractère |</span>
- <span data-aapsb-msg="errNoFile">Choisissez votre fichier keystore.</span>
- <span data-aapsb-msg="errEmpty">Saisissez le mot de passe et l'alias.</span>
- <span data-aapsb-msg="errPass">Mot de passe du keystore incorrect.</span>
- <span data-aapsb-msg="errKeyPass">Mot de passe de la clé incorrect.</span>
- <span data-aapsb-msg="errAlias">Alias introuvable dans le keystore. Disponibles : {aliases}</span>
- <span data-aapsb-msg="errFormat">Ce fichier ne ressemble pas à un keystore.</span>
- <span data-aapsb-msg="okHave">Keystore OK ! Continuez avec l'étape 4.</span>
- <span data-aapsb-msg="okHaveUnchecked">Keystore lu. Le mot de passe sera vérifié lors de la compilation. Continuez avec l'étape 4.</span>
- <span data-aapsb-msg="errShort">Le mot de passe doit contenir au moins 8 caractères.</span>
- <span data-aapsb-msg="errAscii">Utilisez seulement a–z, A–Z, 0–9 et des symboles comme ! ? # – pas d'espaces, pas de lettres accentuées et pas de |</span>
- <span data-aapsb-msg="errMatch">Les mots de passe ne correspondent pas.</span>
- <span data-aapsb-msg="working">Création de la clé…</span>
- <span data-aapsb-msg="okNew">Clé créée. Téléchargez la sauvegarde ci-dessous, puis continuez avec l'étape 4.</span>

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
