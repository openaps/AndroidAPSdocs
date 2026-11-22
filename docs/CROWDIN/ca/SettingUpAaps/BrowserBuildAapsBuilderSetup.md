(aaps-builder-setup)=

# Pàgina de configuració d'AAPS Builder

Compileu la vostra pròpia aplicació **AAPS** a GitHub. No cal instal·lar cap programa ni fer servir cap terminal. La primera vegada triga uns 10 minuts. Després, cada compilació la inicieu vosaltres.

Cada pas s'explica amb més detall, amb captures de pantalla, a [Compilació al navegador amb AAPS Builder](#aaps-builder). Mantingueu aquella pàgina oberta en una altra pestanya.

Els botons de sota obren GitHub en una pestanya nova de Chrome. Per tornar a aquesta pàgina, toqueu el botó de pestanyes al costat de la barra d'adreces de Chrome (el quadrat amb un número) i trieu aquesta pàgina.

(aaps-builder-setup-step1)=

## Pas 1 – Creeu el vostre repositori privat de compilació

Això crea la vostra pròpia còpia privada d'AAPS Builder al vostre compte de GitHub: un repositori que ja conté el workflow de compilació. Només vosaltres podeu veure'l, i també les aplicacions que compila. **No** cal fer un fork d'AndroidAPS: el codi font d'AAPS es descarrega del repositori oficial d'AndroidAPS a cada compilació.

<label class="aapsb-label" for="aapsb-user">El vostre nom d'usuari de GitHub</label>
<input class="aapsb-input" type="text" id="aapsb-user" autocomplete="username" spellcheck="false" placeholder="my-github-name" />
<span class="aapsb-msg" id="aapsb-userMsg"></span>

Primer inicieu la sessió a github.com en aquest navegador (no teniu compte? creeu-ne un de franc). Després torneu aquí. Feu servir el vostre nom d'usuari (es mostra al vostre perfil de GitHub), no el vostre correu electrònic: la pàgina pregunta a GitHub si aquest nom d'usuari existeix.

<label class="aapsb-label" for="aapsb-repo">Nom del vostre repositori</label>
<input class="aapsb-input" type="text" id="aapsb-repo" spellcheck="false" placeholder="my-aaps" />

Mantingueu el nom proposat. Ja heu creat el vostre repositori amb un altre nom? Escriviu aquí exactament aquell nom.

```{note}
**Ja teniu un repositori d'AAPS Builder** (fet amb una versió anterior d'aquesta pàgina)? No en creeu un de nou: escriviu-ne aquí el nom exacte, no feu servir el botó de sota i actualitzeu el seu workflow una vegada: vegeu **Actualitzar la vostra còpia** al final d'aquest pas. Els vostres secrets es queden com estan.

Si igualment voleu un repositori nou, trieu un nom que encara no tingueu, per exemple `my-aaps-2`, i feu servir el mateix magatzem de claus al pas 2.

No escriviu el nom del vostre fork d'AndroidAPS: un fork és públic i ja compila amb el seu propi workflow **AAPS CI**.
```

El vostre repositori:<code class="aapsb-repoUrl"></code>

Comproveu aquest nom abans de fer servir els botons de sota: la pàgina recorda el nom de la vostra última visita.

<a class="aapsb-btn" id="aapsb-createRepo" target="_blank" rel="noopener">Crear el meu repositori privat</a>

A la pàgina de GitHub que s'obre, tot ja està emplenat: la plantilla `nightscout/aaps-builder`, el vostre compte com a propietari, el nom del vostre repositori i **Private**. No canvieu res i deixeu **Include all branches** sense marcar.

1. Feu clic al botó verd **Create repository**.
2. GitHub mostra el vostre repositori nou amb una carpeta `.github` i un fitxer `README.md`: el workflow de compilació hi és. Torneu a aquesta pàgina per al pas 2.

```{admonition} Your new repository is empty (no files)?
:class: warning

No s'ha creat a partir de la plantilla. Elimineu-lo (**Settings** → part de baix de la pàgina → **Delete this repository**) i després toqueu de nou **Crear el meu repositori privat**.
```

```{admonition} GitHub says "my-aaps already exists in this account"?
:class: tip

Ja teniu el vostre repositori: tanqueu la pestanya de GitHub i continueu amb aquesta pàgina. Si la vostra clau ja hi és, continueu amb el [pas 4](#aaps-builder-setup-step4). Vegeu la [resolució de problemes](#aaps-builder-ts-repo-exists).
```

<div class="admonition dropdown">
<p class="admonition-title">Updating your copy (existing AAPS Builder repository)</p>

The build steps are updated for you: at every build, your repository runs the version released by the AAPS developers in nightscout/aaps-builder, and nothing in your repository changes. You only replace your workflow file when [Docs updates & changes](../Maintenance/DocumentationUpdate.md) announces it (for example for a new build variant), or once if your repository was made with an earlier version of this page or from the old template. El vostre secret `KEYSTORE_SET` es queda tal com és.

1. <a class="aapsb-btn aapsb-secondary" href="https://github.com/nightscout/aaps-builder/blob/main/.github/workflows/build.yml" target="_blank" rel="noopener">Open the newest workflow</a>

   On a computer, click the **copy icon** ("Copy raw file") at the top right of the file. On a phone, open the <a href="https://raw.githubusercontent.com/nightscout/aaps-builder/main/.github/workflows/build.yml" target="_blank" rel="noopener">plain-text version</a> instead, press and hold the text → **Select all** → **Copy**.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openWorkflowFile" target="_blank" rel="noopener">Open my workflow file</a>

   Opens `.github/workflows/build.yml` in <code class="aapsb-repoUrl"></code>. Toqueu el menú **⋯** a dalt a la dreta del fitxer i després **Edit file… In place** (en un ordinador, feu clic al llapis).
3. Substituïu tot el text pel workflow copiat (en un telèfon: mantingueu premut → **Select all** → **Paste**) i després feu clic dues vegades a **Commit changes…**. La primera línia del fitxer mostra la seva versió.

</div>

(aaps-builder-setup-step2)=

## Pas 2 – La vostra clau de signatura

L'aplicació s'ha de signar amb la vostra pròpia clau. Feu servir sempre la mateixa clau. Si no, per actualitzar haureu de desinstal·lar AAPS (i perdreu la seva configuració). Trieu una de les dues pestanyes.

`````{tab-set}

````{tab-item} Ja tinc un magatzem de claus
Per exemple, d'Android Studio (.jks).

<label class="aapsb-label" for="aapsb-ksFile">Fitxer del magatzem de claus</label>
<input type="file" id="aapsb-ksFile" accept=".jks,.keystore,.p12,.pfx,application/octet-stream">

<label class="aapsb-label" for="aapsb-ksPass">Contrasenya del magatzem de claus</label>
<input class="aapsb-input" type="password" id="aapsb-ksPass" autocomplete="off">

<label class="aapsb-label" for="aapsb-ksAlias">Àlies de la clau</label>
<select class="aapsb-input" id="aapsb-ksAliasSel" hidden></select>
<input class="aapsb-input" type="text" id="aapsb-ksAlias" autocomplete="off" spellcheck="false" placeholder="key0">

<label class="aapsb-check"><input type="checkbox" id="aapsb-samePass" checked> La contrasenya de la clau és la mateixa que la del magatzem de claus</label>

<div id="aapsb-keyPassWrap" hidden>

<label class="aapsb-label" for="aapsb-keyPass">Contrasenya de la clau</label>
<input class="aapsb-input" type="password" id="aapsb-keyPass" autocomplete="off">

</div>

<button class="aapsb-btn" type="button" id="aapsb-haveGo">Comprovar i continuar</button> <span class="aapsb-msg" id="aapsb-haveMsg"></span>
````

````{tab-item} Crear una clau nova
És la primera vegada que compileu AAPS? Aquí, al vostre navegador, es crea una clau nova. No s'envia res enlloc.

<label class="aapsb-label" for="aapsb-newPass">Trieu una contrasenya (com a mínim 8 caràcters, sense lletres accentuades)</label>
<input class="aapsb-input" type="password" id="aapsb-newPass" autocomplete="new-password">

<label class="aapsb-label" for="aapsb-newPass2">Repetiu la contrasenya</label>
<input class="aapsb-input" type="password" id="aapsb-newPass2" autocomplete="new-password">

<button class="aapsb-btn" type="button" id="aapsb-newGo">Crear clau</button> <span class="aapsb-msg" id="aapsb-newMsg"></span>

<div class="aapsb-box" id="aapsb-backupBox" hidden>

**Deseu una còpia de seguretat de la vostra clau!**

Descarregueu el fitxer. Guardeu aquestes tres coses juntes, en un lloc segur fora del telèfon (p. ex. al vostre propi emmagatzematge al núvol):

- el fitxer `aaps-keystore.jks`
- la vostra contrasenya
- l'àlies de la clau: **`key0`**

Les necessitareu totes tres si algun dia compileu AAPS d'una altra manera, p. ex. amb Android Studio.

<button class="aapsb-btn" type="button" id="aapsb-downloadKs">Descarregar còpia de seguretat (aaps-keystore.jks)</button>

</div>
````

`````
(aaps-builder-setup-step3)=
## Pas 3 – Doneu la clau al vostre repositori
<span id="aapsb-s3wait">Primer acabeu el pas 2.</span>

<div id="aapsb-s3ready" hidden>
  1. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets" target="_blank" rel="noopener">Obrir la pàgina de secrets</a> S'obre: <code class="aapsb-repoUrl"></code> Rebeu «Page not found» (404)? Primer comproveu que heu iniciat la sessió a github.com en aquest navegador: GitHub mostra 404 per als repositoris privats quan no heu iniciat la sessió. Si no és això, el nom d'usuari o el nom del repositori del pas 1 no coincideixen amb el vostre repositori: comproveu-los a github.com i escriviu-los al pas 1. 2. Toqueu «Copiar nom» i enganxeu-lo al camp petit «Name»: `KEYSTORE_SET` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="name">Copiar nom</button> 3. Toqueu «Copiar secret» i enganxeu el codi llarg a la casella gran «Secret»: <code id="aapsb-secretPreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="secret">Copiar secret</button> <span class="aapsb-msg" id="aapsb-copyMsg"></span> El secret és un codi molt llarg (milers de caràcters), NO la paraula KEYSTORE_SET. Copieu i enganxeu primer el nom i després el codi llarg. 4. Toqueu «Add secret». Fet. No ho haureu de tornar a fer mai més.
</div>
(aaps-builder-setup-step4)=
## Pas 4 – Compileu l'aplicació

1. <a class="aapsb-btn" id="aapsb-openActions" target="_blank" rel="noopener">Obrir la pàgina de compilació</a>

   S'obre: <code class="aapsb-repoUrl"></code>

   Rebeu «Page not found» (404)? Primer comproveu que heu iniciat la sessió a github.com en aquest navegador: GitHub mostra 404 per als repositoris privats quan no heu iniciat la sessió. Si no és això, el nom d'usuari o el nom del repositori del pas 1 no coincideixen amb el vostre repositori: comproveu-los a github.com i escriviu-los al pas 1. S'ha obert l'aplicació de GitHub? Toqueu «RUN WORKFLOW», comproveu la versió i la variant, i toqueu «RUN WORKFLOW» una altra vegada. Si l'aplicació encara mostra «Nothing to see here», estireu la llista cap avall per veure la vostra compilació.
2. Si us ho demana, feu clic al botó verd per activar els workflows.
La llista de workflows mostra dues entrades: feu servir «Build AAPS». No feu cas de «AAPS Builder»: conté els passos de compilació i no té cap botó «Run workflow».
3. Feu clic a «Run workflow» i després al botó verd «Run workflow». «latest» compila la versió més nova d'AAPS. ***consell:*** *podeu compilar una altra versió si escriviu el nom de la seva [etiqueta (tag)](https://github.com/nightscout/AndroidAPS/tags) en lloc de «latest»*
4. Espereu uns 15–30 minuts. Una marca verda vol dir que ja ha acabat.
Voleu rebre un correu electrònic quan acabi la compilació? GitHub només us envia un correu quan una compilació falla. Per rebre'n també un quan acaba bé: a github.com, obriu la vostra foto de perfil → Settings → Notifications → System → Actions, i desmarqueu «Only notify for failed workflows».

```{admonition} No "Build AAPS" / "Run workflow" button?
:class: warning

1. Obriu el vostre repositori i comproveu que té una carpeta `.github` amb el fitxer `workflows/build.yml`. Si el repositori és buit, no s'ha creat a partir de la plantilla: elimineu-lo (**Settings** → part de baix de la pàgina → **Delete this repository**) i torneu a fer el [pas 1](#aaps-builder-setup-step1) amb el botó.
2. El fitxer hi és, però GitHub mostra «This workflow does not exist»: vegeu [resolució de problemes](#aaps-builder-ts-workflow-not-found).
3. Obriu la pestanya Actions. Si diu que els workflows estan desactivats, feu clic al botó verd per activar-los. Després feu clic a «Build AAPS» a la llista.
```

(aaps-builder-setup-step5)=

## Pas 5 – Instal·lar al vostre telèfon

```{admonition} Before every update: back up your settings!
:class: warning

1. A AAPS: Manteniment → Exportar configuració. (Feu-ho de tota manera de forma regular, p. ex. després d'un canvi de perfil o una vegada al mes.)
2. Copieu el fitxer exportat FORA del telèfon, p. ex. a Google Drive o Dropbox. Una còpia de seguretat que només és al telèfon es perd juntament amb el telèfon.
3. Guardeu-hi també els fitxers APK i diverses exportacions més antigues. Així sempre podreu tornar enrere.

[Com exportar la configuració](#ExportImportSettings-Settings-Export) · [Preguntes freqüents d'AAPS: com organitzar les còpies de seguretat](#FAQ-organize-backups)
```

1. Obriu aquesta pàgina al telèfon, al navegador web (Chrome). Inicieu la sessió a github.com si us ho demana.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openRuns" target="_blank" rel="noopener">Obrir les meves compilacions</a>

   S'ha obert l'aplicació de GitHub? No pot descarregar compilacions. A l'aplicació, obriu la compilació més nova i toqueu «Artifacts ↗», o toqueu la icona de compartir i trieu Chrome (o «Copy link», i després enganxeu l'enllaç a la barra d'adreces de Chrome). Continueu a Chrome.

   Rebeu «Page not found» (404)? Primer comproveu que heu iniciat la sessió a github.com en aquest navegador: GitHub mostra 404 per als repositoris privats quan no heu iniciat la sessió. Si no és això, el nom d'usuari o el nom del repositori del pas 1 no coincideixen amb el vostre repositori: comproveu-los a github.com i escriviu-los al pas 1.

   Perquè els enllaços de GitHub no s'obrin a l'aplicació: Configuració d'Android → Aplicacions → GitHub → Obre de manera predeterminada → desactiveu «Obre els enllaços compatibles».
3. Toqueu la compilació més nova que tingui una marca verda ✅.
4. Baixeu fins al resum de la compilació i toqueu l'enllaç gran «📱 Download AAPS …» (o baixeu més avall fins a «Artifacts» i toqueu aaps-….apk). Desplaceu-vos amb el dit sobre el text, no sobre el diagrama dels passos de compilació.
5. Quan s'acabi la descàrrega, toqueu el fitxer i trieu Instal·lar. Si us ho demana, permeteu instal·lar aplicacions d'aquesta font.
6. aaps-wear-….apk és per a un rellotge intel·ligent. Si no en feu servir cap, no el descarregueu.

L'APK no es mostra a «Code» al vostre repositori, només a la pàgina de la compilació. Es guarda durant 14 dies.

Hi ha una nova versió d'AAPS? Feu una còpia de seguretat de la configuració i després compileu-la amb el [pas 4](#aaps-builder-setup-step4). El vostre repositori mai no compila res tot sol.

(aaps-builder-setup-step6)=

## Pas 6 – Opcional: tenir l'aplicació a Google Drive

Voleu que l'APK aparegui al vostre Google Drive (es guarda per sempre)? Afegiu un secret més, GDRIVE_OAUTH2. Aquesta pàgina l'obté de Google per a vosaltres. Aleshores AAPS només pot veure i canviar els fitxers que crea al vostre Google Drive, res més.

1. <a class="aapsb-btn" id="aapsb-googleAuth" target="_blank" rel="noopener">Connectar Google Drive</a>

   Google s'obre en una pestanya nova. Trieu el vostre compte de Google i permeteu que AAPS vegi i canviï els seus propis fitxers. Si Google diu que l'aplicació no està verificada, toqueu «Advanced» i després «Go to …».
2. Aleshores la pestanya nova mostra un error com **«This site can't be reached»** o **«127.0.0.1 refused to connect»**. **Això és normal.** La resposta de Google és a l'adreça d'aquella pestanya.

   Toqueu la barra d'adreces d'aquella pestanya i després la icona de copiar al costat de l'adreça (en un ordinador: seleccioneu tota l'adreça i copieu-la). Comença amb `http://127.0.0.1:47913/`. Torneu a aquesta pàgina en pocs minuts: la resposta només és vàlida durant poc temps.
3. <label class="aapsb-label" for="aapsb-googleUrl">Enganxeu aquí l'adreça copiada</label> <input class="aapsb-input" type="url" id="aapsb-googleUrl" autocomplete="off" spellcheck="false" placeholder="http://127.0.0.1:47913/aaps-builder?…" /> <button class="aapsb-btn" type="button" id="aapsb-googleGo">Obtenir GDRIVE_OAUTH2</button> <span class="aapsb-msg" id="aapsb-googleMsg"></span>

<div id="aapsb-gdriveReady" hidden>

4. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets2" target="_blank" rel="noopener">Obrir la pàgina de secrets</a>

   S'obre: <code class="aapsb-repoUrl"></code>

   Rebeu «Page not found» (404)? Primer comproveu que heu iniciat la sessió a github.com en aquest navegador: GitHub mostra 404 per als repositoris privats quan no heu iniciat la sessió. Si no és això, el nom d'usuari o el nom del repositori del pas 1 no coincideixen amb el vostre repositori: comproveu-los a github.com i escriviu-los al pas 1.
5. Toqueu «Copiar nom» i enganxeu-lo al camp petit «Name»: `GDRIVE_OAUTH2` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="gdrive">Copiar nom</button>
6. Toqueu «Copiar secret» i enganxeu el codi a la casella gran «Secret»: <code id="aapsb-gdrivePreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="gdriveValue">Copiar secret</button> <span class="aapsb-msg" id="aapsb-gdriveCopyMsg"></span>
7. Toqueu «Add secret».

</div>

```{admonition} Already have a GDRIVE_OAUTH2 value?
:class: dropdown

També funciona un valor de la pàgina de preparació d'AAPS de l'altra compilació al navegador: obriu la pàgina de secrets, afegiu el nom `GDRIVE_OAUTH2` i enganxeu-hi el vostre valor. Vegeu [Desar les compilacions a Google Drive](#aaps-builder-google-drive).
```

A la propera compilació, els APK també es desen a Google Drive, a la carpeta AAPS/&lt;version&gt;.

Si no compileu durant 6 mesos, o si canvieu la contrasenya de Google, Google atura l'accés. Aleshores la compilació us ho diu: torneu a fer aquest pas.

----

Tot el que hi ha en aquesta pàgina funciona al vostre navegador. La vostra clau i les contrasenyes no s'envien mai enlloc, excepte on les enganxeu vosaltres mateixos. Només el vostre nom d'usuari de GitHub s'envia a GitHub, per comprovar que existeix. Al pas 6, la resposta de Google només s'envia a Google, per obtenir GDRIVE_OAUTH2. El workflow de compilació el mantenen els desenvolupadors d'AAPS a [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder), basat en AAPS Builder (AGPL-3.0).

<div id="aapsb-msgs" hidden>

- <span data-aapsb-msg="copied">Codi llarg copiat: enganxeu-lo a la casella gran «Secret» i després toqueu «Add secret».</span>
- <span data-aapsb-msg="copiedName">Nom copiat: enganxeu-lo al camp petit «Name».</span>
- <span data-aapsb-msg="userOk">✓ Usuari de GitHub trobat.</span>
- <span data-aapsb-msg="userBad">✗ No hi ha cap usuari de GitHub amb aquest nom. Feu servir el vostre nom d'usuari (es mostra al vostre perfil de GitHub), no el vostre correu electrònic.</span>
- <span data-aapsb-msg="copiedShort">Copiat ✓</span>
- <span data-aapsb-msg="needUser">Primer escriviu el vostre nom d'usuari de GitHub al pas 1.</span>
- <span data-aapsb-msg="errPipe">Les contrasenyes i l'àlies no poden contenir el caràcter |</span>
- <span data-aapsb-msg="errNoFile">Trieu el vostre fitxer del magatzem de claus.</span>
- <span data-aapsb-msg="errEmpty">Ompliu la contrasenya i l'àlies.</span>
- <span data-aapsb-msg="errPass">Contrasenya del magatzem de claus incorrecta.</span>
- <span data-aapsb-msg="errKeyPass">Contrasenya de la clau incorrecta.</span>
- <span data-aapsb-msg="errAlias">No s'ha trobat l'àlies al magatzem de claus. Disponibles: {aliases}</span>
- <span data-aapsb-msg="errFormat">No sembla un fitxer de magatzem de claus.</span>
- <span data-aapsb-msg="okHave">Magatzem de claus correcte! Continueu amb el pas 3.</span>
- <span data-aapsb-msg="okHaveUnchecked">Magatzem de claus llegit. La contrasenya es comprovarà quan compileu. Continueu amb el pas 3.</span>
- <span data-aapsb-msg="errShort">La contrasenya ha de tenir com a mínim 8 caràcters.</span>
- <span data-aapsb-msg="errAscii">Feu servir només a–z, A–Z, 0–9 i símbols com ara ! ? # – sense espais, sense lletres accentuades i sense |</span>
- <span data-aapsb-msg="errMatch">Les contrasenyes no coincideixen.</span>
- <span data-aapsb-msg="working">S'està creant la clau…</span>
- <span data-aapsb-msg="okNew">Clau creada. Descarregueu la còpia de seguretat de sota i després continueu amb el pas 3.</span>
- <span data-aapsb-msg="gNoUrl">Primer enganxeu l'adreça sencera de la pestanya de Google.</span>
- <span data-aapsb-msg="gNoCode">Aquesta adreça no conté cap resposta de Google. Copieu l'adreça sencera de la pestanya que mostra l'error, que comença amb http://127.0.0.1:47913/</span>
- <span data-aapsb-msg="gDenied">No s'ha permès l'accés a Google. Toqueu «Connectar Google Drive» de nou i permeteu l'accés.</span>
- <span data-aapsb-msg="gOldUrl">Aquesta adreça és d'un intent anterior. Toqueu «Connectar Google Drive» de nou i feu servir l'adreça nova.</span>
- <span data-aapsb-msg="gWorking">S'està preguntant a Google…</span>
- <span data-aapsb-msg="gFailed">Google no ho ha acceptat ({error}). La resposta només és vàlida durant uns pocs minuts i una sola vegada: toqueu «Connectar Google Drive» de nou.</span>
- <span data-aapsb-msg="gNoRefresh">Google no ha enviat cap accés de llarga durada. Toqueu «Connectar Google Drive» de nou.</span>
- <span data-aapsb-msg="gOk">GDRIVE_OAUTH2 està a punt. Afegiu-lo com a secret a sota.</span>
- <span data-aapsb-msg="gCopied">Codi copiat: enganxeu-lo a la casella gran «Secret» i després toqueu «Add secret».</span>

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
    ['openWorkflowFile', '/blob/HEAD/' + WORKFLOW_PATH],
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
