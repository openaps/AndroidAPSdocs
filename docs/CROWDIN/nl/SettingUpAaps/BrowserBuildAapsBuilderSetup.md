(aaps-builder-setup)=

# AAPS Builder-instelpagina

Bouw je eigen **AAPS**-app in GitHub. Je hoeft geen programma's te installeren en geen terminal te gebruiken. De eerste keer duurt het ongeveer 10 minuten. Daarna start je elke build zelf.

Elke stap wordt uitgebreider uitgelegd, met schermafbeeldingen, in [Bouwen in de browser met AAPS Builder](#aaps-builder). Houd die pagina open in een ander tabblad.

De knoppen hieronder openen GitHub in een nieuw tabblad van Chrome. Om terug te komen naar deze pagina tik je op de tabbladknop naast de adresbalk van Chrome (het vierkantje met een getal) en kies je deze pagina.

(aaps-builder-setup-step1)=

## Stap 1 – Maak je privé build-repository

Dit maakt een lege privé-repository in je GitHub-account. Alleen jij kunt hem zien, en ook de apps die hij bouwt. Je hoeft AndroidAPS **niet** te forken: de broncode van AAPS wordt bij elke build gedownload uit de officiële AndroidAPS-repository.

<label class="aapsb-label" for="aapsb-user">Je GitHub-gebruikersnaam</label>
<input class="aapsb-input" type="text" id="aapsb-user" autocomplete="username" spellcheck="false" placeholder="my-github-name" />
<span class="aapsb-msg" id="aapsb-userMsg"></span>

Log eerst in op github.com in deze browser (nog geen account? maak er gratis een aan). Kom daarna hier terug. Gebruik je gebruikersnaam (te zien in je GitHub-profiel), niet je e-mailadres: de pagina vraagt aan GitHub of deze gebruikersnaam bestaat.

<label class="aapsb-label" for="aapsb-repo">Naam van je repository</label>
<input class="aapsb-input" type="text" id="aapsb-repo" spellcheck="false" placeholder="my-aaps" />

Houd de voorgestelde naam. Heb je je repository al met een andere naam gemaakt? Typ dan hier precies die naam.

Je repository:<code class="aapsb-repoUrl"></code>

Heb je zelf al een lege privé-repository gemaakt? Tik dan niet op de knop hieronder: typ hierboven precies de naam ervan en ga naar [stap 2](#aaps-builder-setup-step2).

<a class="aapsb-btn" id="aapsb-createRepo" target="_blank" rel="noopener">Mijn privé-repository maken</a>

Op de GitHub-pagina die opent, is de naam al ingevuld en is **Private** gekozen. Verander niets en voeg geen README of andere bestanden toe.

1. Klik op de groene knop **Create repository**.
2. Kom terug naar deze pagina voor stap 2.

(aaps-builder-setup-step2)=

## Stap 2 – De build workflow toevoegen

De build-workflow is het bestand dat GitHub vertelt hoe AAPS gebouwd moet worden. Het komt uit de AAPS-documentatie: <a id="aapsb-viewWorkflow" href="../_static/aaps-builder/aaps-builder-build.yml" target="_blank" rel="noopener">bekijk de workflow</a>.

1. <a class="aapsb-btn" id="aapsb-addWorkflow" target="_blank" rel="noopener">De workflow aan mijn repository toevoegen</a> <span class="aapsb-msg" id="aapsb-workflowMsg"></span>

   Opent: <code class="aapsb-repoUrl"></code>, nieuw bestand `.github/workflows/build.yml`, al ingevuld.
2. Controleer dat de bestandsnaam bovenaan `.github/workflows/build.yml` is. Verander de tekst niet.
3. Klik op **Commit changes…** en daarna nog een keer op **Commit changes** in het venster dat opent.

```{admonition} Updating the workflow, or the text area is empty?
:class: dropdown

1. <button class="aapsb-btn aapsb-secondary" type="button" id="aapsb-copyWorkflow">Workflow kopiëren</button> <span class="aapsb-msg" id="aapsb-copyWorkflowMsg"></span>
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openWorkflowFile" target="_blank" rel="noopener">Mijn workflowbestand openen</a>

   Wil je de workflow voor het eerst toevoegen? Gebruik dan de knop hierboven.
3. Vervang de hele tekst door de gekopieerde workflow (op een telefoon: lang indrukken) en klik daarna twee keer op **Commit changes…**.
```

(aaps-builder-setup-step3)=

## Stap 3 – Je ondertekeningssleutel

De app moet met je eigen sleutel ondertekend worden. Gebruik altijd dezelfde sleutel. Anders moet je AAPS verwijderen (en verlies je de instellingen) om bij te werken. Kies een van de twee tabbladen.

`````{tab-set}

````{tab-item} Ik heb al een keystore
Bijvoorbeeld uit Android Studio (.jks).

<label class="aapsb-label" for="aapsb-ksFile">Keystore-bestand</label>
<input type="file" id="aapsb-ksFile" accept=".jks,.keystore,.p12,.pfx,application/octet-stream">

<label class="aapsb-label" for="aapsb-ksPass">Keystore-wachtwoord</label>
<input class="aapsb-input" type="password" id="aapsb-ksPass" autocomplete="off">

<label class="aapsb-label" for="aapsb-ksAlias">Sleutelalias (key alias)</label>
<select class="aapsb-input" id="aapsb-ksAliasSel" hidden></select>
<input class="aapsb-input" type="text" id="aapsb-ksAlias" autocomplete="off" spellcheck="false" placeholder="key0">

<label class="aapsb-check"><input type="checkbox" id="aapsb-samePass" checked> Het sleutelwachtwoord is hetzelfde als het keystore-wachtwoord</label>

<div id="aapsb-keyPassWrap" hidden>

<label class="aapsb-label" for="aapsb-keyPass">Sleutelwachtwoord (key password)</label>
<input class="aapsb-input" type="password" id="aapsb-keyPass" autocomplete="off">

</div>

<button class="aapsb-btn" type="button" id="aapsb-haveGo">Controleren en doorgaan</button> <span class="aapsb-msg" id="aapsb-haveMsg"></span>
````

````{tab-item} Een nieuwe sleutel maken
Bouw je AAPS voor het eerst? Hier in je browser wordt een nieuwe sleutel gemaakt. Er wordt niets verstuurd.

<label class="aapsb-label" for="aapsb-newPass">Kies een wachtwoord (minstens 8 tekens, geen letters met accenten)</label>
<input class="aapsb-input" type="password" id="aapsb-newPass" autocomplete="new-password">

<label class="aapsb-label" for="aapsb-newPass2">Herhaal het wachtwoord</label>
<input class="aapsb-input" type="password" id="aapsb-newPass2" autocomplete="new-password">

<button class="aapsb-btn" type="button" id="aapsb-newGo">Sleutel maken</button> <span class="aapsb-msg" id="aapsb-newMsg"></span>

<div class="aapsb-box" id="aapsb-backupBox" hidden>

**Bewaar een back-up van je sleutel!**

Download het bestand. Bewaar deze drie samen op een veilige plek buiten je telefoon (bijv. je eigen cloudopslag):

- het bestand `aaps-keystore.jks`
- je wachtwoord
- de alias van de sleutel: **`key0`**

Je hebt ze alle drie nodig als je AAPS ooit op een andere manier bouwt, bijv. met Android Studio.

<button class="aapsb-btn" type="button" id="aapsb-downloadKs">Back-up downloaden (aaps-keystore.jks)</button>

</div>
````

`````
(aaps-builder-setup-step4)=
## Stap 4 – Geef de sleutel aan je repository
<span id="aapsb-s4wait">Rond eerst stap 3 af.</span>

<div id="aapsb-s4ready" hidden>
  1. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets" target="_blank" rel="noopener">De pagina met secrets openen</a> Opent: <code class="aapsb-repoUrl"></code> Krijg je "Page not found" (404)? Controleer eerst of je in deze browser bent ingelogd op github.com: GitHub toont 404 voor privé-repositories als je niet bent ingelogd. Anders past je gebruikersnaam of de naam van je repository in stap 1 niet bij je repository: controleer ze op github.com en typ ze in stap 1. 2. Tik op "Naam kopiëren" en plak het in het kleine veld "Name": `KEYSTORE_SET` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="name">Naam kopiëren</button> 3. Tik op "Secret kopiëren" en plak de lange code in het grote vak "Secret": <code id="aapsb-secretPreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="secret">Secret kopiëren</button> <span class="aapsb-msg" id="aapsb-copyMsg"></span> Het secret is een heel lange code (duizenden tekens), NIET het woord KEYSTORE_SET. Kopieer en plak eerst de naam, daarna de lange code. 4. Tik op "Add secret". Klaar, dit hoef je nooit meer te doen.
</div>
(aaps-builder-setup-step5)=
## Stap 5 – De app bouwen

1. <a class="aapsb-btn" id="aapsb-openActions" target="_blank" rel="noopener">De buildpagina openen</a>

   Opent: <code class="aapsb-repoUrl"></code>

   Krijg je "Page not found" (404)? Controleer eerst of je in deze browser bent ingelogd op github.com: GitHub toont 404 voor privé-repositories als je niet bent ingelogd. Anders past je gebruikersnaam of de naam van je repository in stap 1 niet bij je repository: controleer ze op github.com en typ ze in stap 1. Is in plaats daarvan de GitHub-app geopend? Tik op "RUN WORKFLOW", controleer de versie en de variant en tik nog een keer op "RUN WORKFLOW". Toont de app nog steeds "Nothing to see here"? Trek de lijst dan omlaag om je build te zien.
2. Als dat gevraagd wordt, klik je op de groene knop om workflows aan te zetten.
3. Klik op "Run workflow" en daarna op de groene knop "Run workflow". "latest" bouwt de nieuwste versie van AAPS. ***tip:*** *je kunt een andere versie bouwen door de naam van de [tag](https://github.com/nightscout/AndroidAPS/tags) te typen in plaats van "latest"*
4. Wacht ongeveer 15–30 minuten. Een groen vinkje betekent dat de build klaar is.
Wil je een e-mail krijgen als de build klaar is? GitHub stuurt je alleen een e-mail als een build mislukt. Om er ook een te krijgen als hij lukt: open op github.com je profielfoto → Settings → Notifications → System → Actions en zet het vinkje bij "Only notify for failed workflows" uit.

```{admonition} No "Build AAPS" / "Run workflow" button?
:class: warning

1. Open je repository en controleer of het bestand `.github/workflows/build.yml` er is. Als het ontbreekt of een andere naam heeft, doe dan [stap 2](#aaps-builder-setup-step2) opnieuw.
2. Open het tabblad Actions. Staat er dat workflows uitgeschakeld zijn? Klik dan op de groene knop om ze aan te zetten. Klik daarna in de lijst op "Build AAPS".
```

(aaps-builder-setup-step6)=

## Stap 6 – Installeren op je telefoon

```{admonition} Before every update: back up your settings!
:class: warning

1. In AAPS: Onderhoud → Exporteer instellingen. (Doe dit sowieso regelmatig, bijv. na een wijziging van je profiel of één keer per maand.)
2. Kopieer het geëxporteerde bestand NAAR BUITEN de telefoon, bijv. naar Google Drive of Dropbox. Een back-up die alleen op de telefoon staat, raak je samen met de telefoon kwijt.
3. Bewaar daar ook de APK-bestanden en een paar oudere exports. Dan kun je altijd terug.

[Instellingen exporteren](#ExportImportSettings-Settings-Export) · [AAPS FAQ: back-ups ordenen](#FAQ-organize-backups)
```

1. Open deze pagina op je telefoon, in de webbrowser (Chrome). Log in op github.com als daarom gevraagd wordt.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openRuns" target="_blank" rel="noopener">Mijn builds openen</a>

   Is in plaats daarvan de GitHub-app geopend? Die kan geen builds downloaden. Open in de app de nieuwste build en tik op "Artifacts ↗", of tik op het deelicoon en kies Chrome (of "Copy link" en plak de link daarna in de adresbalk van Chrome). Ga verder in Chrome.

   Krijg je "Page not found" (404)? Controleer eerst of je in deze browser bent ingelogd op github.com: GitHub toont 404 voor privé-repositories als je niet bent ingelogd. Anders past je gebruikersnaam of de naam van je repository in stap 1 niet bij je repository: controleer ze op github.com en typ ze in stap 1.

   Zo voorkom je dat GitHub-links in de app openen: Android-instellingen → Apps → GitHub → Standaard openen → zet "Ondersteunde links openen" uit.
3. Tik op de nieuwste build met een groen vinkje ✅.
4. Scrol omlaag naar de samenvatting van de build en tik op de grote link "📱 Download AAPS …" (of scrol verder omlaag naar "Artifacts" en tik op aaps-….apk). Scrol met je vinger op de tekst, niet op het schema met de buildstappen.
5. Als de download klaar is, tik je op het bestand en kies je Installeren. Als erom gevraagd wordt, sta dan het installeren van apps uit deze bron toe.
6. aaps-wear-….apk is voor een smartwatch. Sla het over als je er geen gebruikt.

De APK staat niet onder "Code" in je repository, alleen op de buildpagina. Hij wordt 14 dagen bewaard.

Nieuwe versie van AAPS? Maak een back-up van je instellingen en bouw hem daarna met [stap 5](#aaps-builder-setup-step5). Je repository bouwt nooit zelf iets.

(aaps-builder-setup-step7)=

## Stap 7 – Optioneel: de app in Google Drive krijgen

Wil je dat de APK in je Google Drive verschijnt (voor altijd bewaard)? Voeg nog één secret toe.

1. Haal een GDRIVE_OAUTH2-waarde op zoals uitgelegd in de AAPS-documentatie (dit gebruikt de officiële AAPS-voorbereidingspagina, op een computer): [De builds in Google Drive opslaan](#aaps-builder-google-drive).
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets2" target="_blank" rel="noopener">De pagina met secrets openen</a>

   Opent:<code class="aapsb-repoUrl"></code>

   Krijg je "Page not found" (404)? Controleer eerst of je in deze browser bent ingelogd op github.com: GitHub toont 404 voor privé-repositories als je niet bent ingelogd. Anders past je gebruikersnaam of de naam van je repository in stap 1 niet bij je repository: controleer ze op github.com en typ ze in stap 1.
3. Tik op "Naam kopiëren" en plak het in het kleine veld "Name": `GDRIVE_OAUTH2` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="gdrive">Naam kopiëren</button>
4. Plak je GDRIVE_OAUTH2-waarde in het grote vak "Secret" en tik daarna op "Add secret".

Bij de volgende build worden de APK's ook in Google Drive opgeslagen, in de map AAPS/&lt;version&gt;.

Als je 6 maanden niet bouwt of je Google-wachtwoord verandert, stopt Google de toegang. De build meldt dat dan: doe deze stap opnieuw.

----

Alles op deze pagina draait in je browser. Je sleutel en wachtwoorden worden nooit verstuurd, behalve naar de plek waar je ze zelf plakt. Alleen je GitHub-gebruikersnaam wordt naar GitHub gestuurd, om te controleren of die bestaat. De pagina en de workflow horen bij de AAPS-documentatie en zijn gebaseerd op AAPS Builder (AGPL-3.0).

<div id="aapsb-msgs" hidden>

- <span data-aapsb-msg="copied">Lange code gekopieerd: plak hem in het grote vak "Secret" en tik daarna op "Add secret".</span>
- <span data-aapsb-msg="copiedName">Naam gekopieerd: plak hem in het kleine veld "Name".</span>
- <span data-aapsb-msg="userOk">✓ GitHub-gebruiker gevonden.</span>
- <span data-aapsb-msg="userBad">✗ Geen GitHub-gebruiker met deze naam. Gebruik je gebruikersnaam (te zien in je GitHub-profiel), niet je e-mailadres.</span>
- <span data-aapsb-msg="copiedShort">Gekopieerd ✓</span>
- <span data-aapsb-msg="needUser">Vul eerst in stap 1 je GitHub-gebruikersnaam in.</span>
- <span data-aapsb-msg="workflowCopied">Workflow gekopieerd (versie {v}). Plak hem in GitHub.</span>
- <span data-aapsb-msg="workflowReady">Workflow versie {v} is klaar.</span>
- <span data-aapsb-msg="workflowErr">Het workflowbestand kon niet gelezen worden. Laad deze pagina opnieuw en probeer het nog een keer.</span>
- <span data-aapsb-msg="errPipe">Wachtwoorden en alias mogen het teken | niet bevatten</span>
- <span data-aapsb-msg="errNoFile">Kies je keystore-bestand.</span>
- <span data-aapsb-msg="errEmpty">Vul het wachtwoord en de alias in.</span>
- <span data-aapsb-msg="errPass">Verkeerd keystore-wachtwoord.</span>
- <span data-aapsb-msg="errKeyPass">Verkeerd sleutelwachtwoord.</span>
- <span data-aapsb-msg="errAlias">Alias niet gevonden in de keystore. Beschikbaar: {aliases}</span>
- <span data-aapsb-msg="errFormat">Dit lijkt geen keystore-bestand te zijn.</span>
- <span data-aapsb-msg="okHave">Keystore OK! Ga verder met stap 4.</span>
- <span data-aapsb-msg="okHaveUnchecked">Keystore gelezen. Het wachtwoord wordt gecontroleerd als je bouwt. Ga verder met stap 4.</span>
- <span data-aapsb-msg="errShort">Het wachtwoord moet minstens 8 tekens hebben.</span>
- <span data-aapsb-msg="errAscii">Gebruik alleen a–z, A–Z, 0–9 en tekens zoals ! ? # – geen spaties, geen letters met accenten en geen |</span>
- <span data-aapsb-msg="errMatch">De wachtwoorden zijn niet gelijk.</span>
- <span data-aapsb-msg="working">Sleutel wordt gemaakt…</span>
- <span data-aapsb-msg="okNew">Sleutel gemaakt. Download hieronder de back-up en ga daarna verder met stap 4.</span>

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
