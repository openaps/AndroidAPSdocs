(aaps-builder-setup)=

# Opsætningsside for AAPS Builder

Byg din egen **AAPS**-app i GitHub. Ingen programmer at installere, ingen terminal. Første gang tager det omkring 10 minutter. Derefter starter du selv hvert build.

Hvert trin er forklaret mere detaljeret, med skærmbilleder, i [Build i browseren med AAPS Builder](#aaps-builder). Hold den side åben i en anden fane.

Knapperne nedenfor åbner GitHub i en ny Chrome-fane. For at komme tilbage til denne side skal du trykke på faneknappen ved siden af Chromes adresselinje (firkanten med et tal) og vælge denne side.

(aaps-builder-setup-step1)=

## Trin 1 – Opret dit private build-repository

Det opretter din egen private kopi af AAPS Builder på din GitHub-konto: et repository, hvor build-workflowet allerede ligger. Kun du kan se det og de apps, det bygger. Du behøver **ikke** at forke AndroidAPS: AAPS-kildekoden downloades fra det officielle AndroidAPS-repository ved hvert build.

<label class="aapsb-label" for="aapsb-user">Dit GitHub-brugernavn</label>
<input class="aapsb-input" type="text" id="aapsb-user" autocomplete="username" spellcheck="false" placeholder="my-github-name" />
<span class="aapsb-msg" id="aapsb-userMsg"></span>

Log først ind på github.com i denne browser (har du ingen konto? opret en gratis). Kom så tilbage hertil. Brug dit brugernavn (vises i din GitHub-profil), ikke din e-mail: siden spørger GitHub, om dette brugernavn findes.

<label class="aapsb-label" for="aapsb-repo">Navn på dit repository</label>
<input class="aapsb-input" type="text" id="aapsb-repo" spellcheck="false" placeholder="my-aaps" />

Behold forslaget. Har du allerede oprettet dit repository med et andet navn? Skriv præcis det navn her.

```{note}
**Har du allerede et AAPS Builder-repository** (lavet med en tidligere version af denne side)? Opret ikke et nyt: skriv dets præcise navn her, spring knappen nedenfor over, og opdater dets workflow én gang: se **Opdatering af din kopi** sidst i dette trin. Dine secrets forbliver, som de er.

Hvis du alligevel vil have et nyt repository, så vælg et navn, du ikke har endnu, f.eks. `my-aaps-2`, og brug det samme keystore i trin 2.

Skriv ikke navnet på din fork af AndroidAPS: en fork er offentlig, og den bygger allerede med sit eget workflow **AAPS CI**.
```

Dit repository:<code class="aapsb-repoUrl"></code>

Kontroller dette navn, før du bruger knapperne nedenfor: siden husker navnet fra dit sidste besøg.

<a class="aapsb-btn" id="aapsb-createRepo" target="_blank" rel="noopener">Opret mit private repository</a>

På GitHub-siden, der åbner, er alt allerede udfyldt: skabelonen `nightscout/aaps-builder`, din konto som ejer, navnet på dit repository og **Private**. Ændr ikke noget, og lad **Include all branches** være uden flueben.

1. Klik på den grønne knap **Create repository**.
2. GitHub viser dit nye repository med en mappe `.github` og en fil `README.md`: build-workflowet ligger i den. Kom tilbage til denne side for at udføre trin 2.

```{admonition} Your new repository is empty (no files)?
:class: warning

Det blev ikke oprettet ud fra skabelonen. Slet det (**Settings** → nederst på siden → **Delete this repository**), og tryk så på **Opret mit private repository** igen.
```

```{admonition} GitHub says "my-aaps already exists in this account"?
:class: tip

Du har allerede dit repository: luk GitHub-fanen, og fortsæt med denne side. Hvis din nøgle allerede er i det, så fortsæt med [trin 4](#aaps-builder-setup-step4). Se [fejlfinding](#aaps-builder-ts-repo-exists).
```

<div class="admonition dropdown">
<p class="admonition-title">Updating your copy (existing AAPS Builder repository)</p>

The build steps are updated for you: at every build, your repository runs the version released by the AAPS developers in nightscout/aaps-builder, and nothing in your repository changes. You only replace your workflow file when [Docs updates & changes](../Maintenance/DocumentationUpdate.md) announces it (for example for a new build variant), or once if your repository was made with an earlier version of this page or from the old template. Din secret `KEYSTORE_SET` forbliver, som den er.

1. <a class="aapsb-btn aapsb-secondary" href="https://github.com/nightscout/aaps-builder/blob/main/.github/workflows/build.yml" target="_blank" rel="noopener">Open the newest workflow</a>

   On a computer, click the **copy icon** ("Copy raw file") at the top right of the file. On a phone, open the <a href="https://raw.githubusercontent.com/nightscout/aaps-builder/main/.github/workflows/build.yml" target="_blank" rel="noopener">plain-text version</a> instead, press and hold the text → **Select all** → **Copy**.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openWorkflowFile" target="_blank" rel="noopener">Open my workflow file</a>

   Opens `.github/workflows/build.yml` in <code class="aapsb-repoUrl"></code>. Tryk på menuen **⋯** øverst til højre i filen og derefter på **Edit file… In place** (på en computer klikker du på blyanten).
3. Erstat hele teksten med det kopierede workflow (på en telefon: tryk længe → **Select all** → **Paste**), og klik så to gange på **Commit changes…**. Filens første linje viser dens version.

</div>

(aaps-builder-setup-step2)=

## Trin 2 – Din signeringsnøgle

Appen skal signeres med din egen nøgle. Brug altid den samme nøgle. Ellers skal du afinstallere AAPS (og miste dens indstillinger) for at opdatere. Vælg en af de to faner.

`````{tab-set}

````{tab-item} Jeg har allerede et keystore
For eksempel fra Android Studio (.jks).

<label class="aapsb-label" for="aapsb-ksFile">Keystore-fil</label>
<input type="file" id="aapsb-ksFile" accept=".jks,.keystore,.p12,.pfx,application/octet-stream">

<label class="aapsb-label" for="aapsb-ksPass">Keystore-adgangskode</label>
<input class="aapsb-input" type="password" id="aapsb-ksPass" autocomplete="off">

<label class="aapsb-label" for="aapsb-ksAlias">Nøglealias</label>
<select class="aapsb-input" id="aapsb-ksAliasSel" hidden></select>
<input class="aapsb-input" type="text" id="aapsb-ksAlias" autocomplete="off" spellcheck="false" placeholder="key0">

<label class="aapsb-check"><input type="checkbox" id="aapsb-samePass" checked> Nøgleadgangskoden er den samme som keystore-adgangskoden</label>

<div id="aapsb-keyPassWrap" hidden>

<label class="aapsb-label" for="aapsb-keyPass">Nøgleadgangskode</label>
<input class="aapsb-input" type="password" id="aapsb-keyPass" autocomplete="off">

</div>

<button class="aapsb-btn" type="button" id="aapsb-haveGo">Kontroller og fortsæt</button> <span class="aapsb-msg" id="aapsb-haveMsg"></span>
````

````{tab-item} Opret en ny nøgle
Bygger du AAPS for første gang? En ny nøgle bliver oprettet her i din browser. Intet bliver sendt nogen steder hen.

<label class="aapsb-label" for="aapsb-newPass">Vælg en adgangskode (mindst 8 tegn, ingen bogstaver med accent)</label>
<input class="aapsb-input" type="password" id="aapsb-newPass" autocomplete="new-password">

<label class="aapsb-label" for="aapsb-newPass2">Gentag adgangskoden</label>
<input class="aapsb-input" type="password" id="aapsb-newPass2" autocomplete="new-password">

<button class="aapsb-btn" type="button" id="aapsb-newGo">Opret nøgle</button> <span class="aapsb-msg" id="aapsb-newMsg"></span>

<div class="aapsb-box" id="aapsb-backupBox" hidden>

**Gem en sikkerhedskopi af din nøgle!**

Download filen. Opbevar disse tre ting sammen et sikkert sted uden for din telefon (f.eks. i din egen skylagring):

- filen `aaps-keystore.jks`
- din adgangskode
- nøglens alias: **`key0`**

Du får brug for alle tre, hvis du en dag bygger AAPS på en anden måde, f.eks. med Android Studio.

<button class="aapsb-btn" type="button" id="aapsb-downloadKs">Download sikkerhedskopi (aaps-keystore.jks)</button>

</div>
````

`````
(aaps-builder-setup-step3)=
## Trin 3 – Giv nøglen til dit repository
<span id="aapsb-s3wait">Gør trin 2 færdigt først.</span>

<div id="aapsb-s3ready" hidden>
  1. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets" target="_blank" rel="noopener">Åbn siden med secrets</a> Åbner: <code class="aapsb-repoUrl"></code> Får du »Page not found« (404)? Kontroller først, at du er logget ind på github.com i denne browser: GitHub viser 404 for private repositories, når du ikke er logget ind. Ellers passer dit brugernavn eller navnet på dit repository i trin 1 ikke til dit repository: kontroller dem på github.com, og skriv dem i trin 1. 2. Tryk på »Kopier navn«, og indsæt det i det lille felt »Name«: `KEYSTORE_SET` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="name">Kopier navn</button> 3. Tryk på »Kopier secret«, og indsæt den lange kode i det store felt »Secret«: <code id="aapsb-secretPreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="secret">Kopier secret</button> <span class="aapsb-msg" id="aapsb-copyMsg"></span> Secret'en er en meget lang kode (tusindvis af tegn), IKKE ordet KEYSTORE_SET. Kopier og indsæt navnet først, derefter den lange kode. 4. Tryk på »Add secret«. Færdig. Det skal du aldrig gøre igen.
</div>
(aaps-builder-setup-step4)=
## Trin 4 – Byg appen

1. <a class="aapsb-btn" id="aapsb-openActions" target="_blank" rel="noopener">Åbn build-siden</a>

   Åbner: <code class="aapsb-repoUrl"></code>

   Får du »Page not found« (404)? Kontroller først, at du er logget ind på github.com i denne browser: GitHub viser 404 for private repositories, når du ikke er logget ind. Ellers passer dit brugernavn eller navnet på dit repository i trin 1 ikke til dit repository: kontroller dem på github.com, og skriv dem i trin 1. Åbnede GitHub-appen i stedet? Tryk på »RUN WORKFLOW«, kontroller version og variant, og tryk på »RUN WORKFLOW« igen. Hvis appen stadig viser »Nothing to see here«, så træk listen ned for at se dit build.
2. Hvis du bliver spurgt, så klik på den grønne knap for at aktivere workflows.
Listen over workflows viser to punkter: brug »Build AAPS«. Ignorer »AAPS Builder«: det indeholder byggetrinene og har ingen knap »Run workflow«.
3. Klik på »Run workflow« og derefter på den grønne knap »Run workflow«. »latest« bygger den nyeste AAPS-version. ***tip:*** *du kan bygge en anden version ved at skrive navnet på dens [tag](https://github.com/nightscout/AndroidAPS/tags) i stedet for »latest«*
4. Vent omkring 15–30 minutter. Et grønt flueben betyder, at det er færdigt.
Vil du have en e-mail, når buildet er færdigt? GitHub sender kun en e-mail, når et build fejler. Sådan får du også en, når det lykkes: på github.com åbner du dit profilbillede → Settings → Notifications → System → Actions og fjerner fluebenet ved »Only notify for failed workflows«.

```{admonition} No "Build AAPS" / "Run workflow" button?
:class: warning

1. Åbn dit repository, og kontroller, at det har en mappe `.github` med filen `workflows/build.yml`. Hvis repository'et er tomt, blev det ikke oprettet ud fra skabelonen: slet det (**Settings** → nederst på siden → **Delete this repository**), og gør [trin 1](#aaps-builder-setup-step1) igen med knappen.
2. Filen er der, men GitHub viser »This workflow does not exist«: se [fejlfinding](#aaps-builder-ts-workflow-not-found).
3. Åbn fanen Actions. Hvis der står, at workflows er deaktiveret, så klik på den grønne knap for at aktivere dem. Klik derefter på »Build AAPS« i listen.
```

(aaps-builder-setup-step5)=

## Trin 5 – Installer på din telefon

```{admonition} Before every update: back up your settings!
:class: warning

1. I AAPS: Vedligeholdelse → Eksporter indstillinger. (Gør det alligevel regelmæssigt, f.eks. efter en profilændring eller en gang om måneden.)
2. Kopier den eksporterede fil VÆK fra telefonen, f.eks. til Google Drive eller Dropbox. En sikkerhedskopi, der kun ligger på telefonen, går tabt sammen med telefonen.
3. Gem også APK-filerne og flere ældre eksporter der. Så kan du altid gå tilbage.

[Sådan eksporterer du indstillinger](#ExportImportSettings-Settings-Export) · [AAPS FAQ: sådan organiserer du sikkerhedskopier](#FAQ-organize-backups)
```

1. Åbn denne side på din telefon, i webbrowseren (Chrome). Log ind på github.com, hvis du bliver bedt om det.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openRuns" target="_blank" rel="noopener">Åbn mine builds</a>

   Åbnede GitHub-appen i stedet? Den kan ikke downloade builds. I appen åbner du det nyeste build og trykker på »Artifacts ↗«, eller du trykker på deleikonet og vælger Chrome (eller »Copy link«, og indsætter så linket i Chromes adresselinje). Fortsæt i Chrome.

   Får du »Page not found« (404)? Kontroller først, at du er logget ind på github.com i denne browser: GitHub viser 404 for private repositories, når du ikke er logget ind. Ellers passer dit brugernavn eller navnet på dit repository i trin 1 ikke til dit repository: kontroller dem på github.com, og skriv dem i trin 1.

   Sådan undgår du, at GitHub-links åbner i appen: Android-indstillinger → Apps → GitHub → Åbn som standard → slå »Åbn understøttede links« fra.
3. Tryk på det nyeste build med et grønt flueben ✅.
4. Rul ned til build-oversigten, og tryk på det store link »📱 Download AAPS …« (eller rul længere ned til »Artifacts«, og tryk på aaps-….apk). Rul med fingeren på teksten, ikke på diagrammet over byggetrinene.
5. Når downloaden er færdig, så tryk på filen og vælg Installer. Hvis du bliver spurgt, så tillad installation af apps fra denne kilde.
6. aaps-wear-….apk er til et smartur. Spring den over, hvis du ikke bruger et.

APK'en vises ikke under »Code« i dit repository, kun på build-siden. Den gemmes i 14 dage.

Ny AAPS-version? Sikkerhedskopier dine indstillinger, og byg den så med [trin 4](#aaps-builder-setup-step4). Dit repository bygger aldrig noget af sig selv.

(aaps-builder-setup-step6)=

## Trin 6 – Valgfrit: få appen i Google Drive

Vil du have APK'en i dit Google Drive (gemt for altid)? Tilføj én secret mere, GDRIVE_OAUTH2. Denne side henter den fra Google for dig. AAPS kan så kun se og ændre de filer, den selv opretter i dit Google Drive, intet andet.

1. <a class="aapsb-btn" id="aapsb-googleAuth" target="_blank" rel="noopener">Forbind Google Drive</a>

   Google åbner i en ny fane. Vælg din Google-konto, og tillad AAPS at se og ændre sine egne filer. Hvis Google siger, at appen ikke er bekræftet, så tryk på »Advanced« og derefter på »Go to …«.
2. Derefter viser den nye fane en fejl som **»This site can't be reached«** eller **»127.0.0.1 refused to connect«**. **Det er forventet.** Googles svar står i adressen på den fane.

   Tryk på adresselinjen i den fane og derefter på kopiikonet ved siden af adressen (på en computer: marker hele adressen, og kopier den). Den starter med `http://127.0.0.1:47913/`. Kom tilbage til denne side inden for få minutter: svaret er kun gyldigt i kort tid.
3. <label class="aapsb-label" for="aapsb-googleUrl">Indsæt den kopierede adresse her</label> <input class="aapsb-input" type="url" id="aapsb-googleUrl" autocomplete="off" spellcheck="false" placeholder="http://127.0.0.1:47913/aaps-builder?…" /> <button class="aapsb-btn" type="button" id="aapsb-googleGo">Hent GDRIVE_OAUTH2</button> <span class="aapsb-msg" id="aapsb-googleMsg"></span>

<div id="aapsb-gdriveReady" hidden>

4. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets2" target="_blank" rel="noopener">Åbn siden med secrets</a>

   Åbner: <code class="aapsb-repoUrl"></code>

   Får du »Page not found« (404)? Kontroller først, at du er logget ind på github.com i denne browser: GitHub viser 404 for private repositories, når du ikke er logget ind. Ellers passer dit brugernavn eller navnet på dit repository i trin 1 ikke til dit repository: kontroller dem på github.com, og skriv dem i trin 1.
5. Tryk på »Kopier navn«, og indsæt det i det lille felt »Name«: `GDRIVE_OAUTH2` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="gdrive">Kopier navn</button>
6. Tryk på »Kopier secret«, og indsæt koden i det store felt »Secret«: <code id="aapsb-gdrivePreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="gdriveValue">Kopier secret</button> <span class="aapsb-msg" id="aapsb-gdriveCopyMsg"></span>
7. Tryk på »Add secret«.

</div>

```{admonition} Already have a GDRIVE_OAUTH2 value?
:class: dropdown

En værdi fra AAPS-forberedelsessiden i den anden måde at bygge i browseren på virker også: åbn siden med secrets, tilføj navnet `GDRIVE_OAUTH2`, og indsæt din værdi. Se [Gem builds i Google Drive](#aaps-builder-google-drive).
```

Ved næste build gemmes APK'erne også i Google Drive i mappen AAPS/&lt;version&gt;.

Hvis du ikke bygger i 6 måneder, eller hvis du ændrer din Google-adgangskode, stopper Google adgangen. Buildet siger det så: gør dette trin igen.

----

Alt på denne side kører i din browser. Din nøgle og dine adgangskoder sendes aldrig nogen steder hen, undtagen hvor du selv indsætter dem. Kun dit GitHub-brugernavn sendes til GitHub for at kontrollere, at det findes. I trin 6 sendes Googles svar kun til Google for at hente GDRIVE_OAUTH2. Build-workflowet vedligeholdes af AAPS-udviklerne i [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder), baseret på AAPS Builder (AGPL-3.0).

<div id="aapsb-msgs" hidden>

- <span data-aapsb-msg="copied">Lang kode kopieret: indsæt den i det store felt »Secret«, og tryk så på »Add secret«.</span>
- <span data-aapsb-msg="copiedName">Navn kopieret: indsæt det i det lille felt »Name«.</span>
- <span data-aapsb-msg="userOk">✓ GitHub-bruger fundet.</span>
- <span data-aapsb-msg="userBad">✗ Der er ingen GitHub-bruger med dette navn. Brug dit brugernavn (vises i din GitHub-profil), ikke din e-mail.</span>
- <span data-aapsb-msg="copiedShort">Kopieret ✓</span>
- <span data-aapsb-msg="needUser">Skriv først dit GitHub-brugernavn i trin 1.</span>
- <span data-aapsb-msg="errPipe">Adgangskoder og alias må ikke indeholde tegnet |</span>
- <span data-aapsb-msg="errNoFile">Vælg din keystore-fil.</span>
- <span data-aapsb-msg="errEmpty">Udfyld adgangskode og alias.</span>
- <span data-aapsb-msg="errPass">Forkert keystore-adgangskode.</span>
- <span data-aapsb-msg="errKeyPass">Forkert nøgleadgangskode.</span>
- <span data-aapsb-msg="errAlias">Aliasset blev ikke fundet i keystoret. Tilgængelige: {aliases}</span>
- <span data-aapsb-msg="errFormat">Dette ligner ikke en keystore-fil.</span>
- <span data-aapsb-msg="okHave">Keystore OK! Fortsæt med trin 3.</span>
- <span data-aapsb-msg="okHaveUnchecked">Keystore læst. Adgangskoden bliver kontrolleret, når du bygger. Fortsæt med trin 3.</span>
- <span data-aapsb-msg="errShort">Adgangskoden skal være på mindst 8 tegn.</span>
- <span data-aapsb-msg="errAscii">Brug kun a–z, A–Z, 0–9 og symboler som ! ? # – ingen mellemrum, ingen bogstaver med accent og ikke |</span>
- <span data-aapsb-msg="errMatch">Adgangskoderne er ikke ens.</span>
- <span data-aapsb-msg="working">Opretter nøgle…</span>
- <span data-aapsb-msg="okNew">Nøgle oprettet. Download sikkerhedskopien nedenfor, og fortsæt så med trin 3.</span>
- <span data-aapsb-msg="gNoUrl">Indsæt først hele adressen fra Google-fanen.</span>
- <span data-aapsb-msg="gNoCode">Denne adresse indeholder intet svar fra Google. Kopier hele adressen på den fane, der viser fejlen, startende med http://127.0.0.1:47913/</span>
- <span data-aapsb-msg="gDenied">Adgang til Google blev ikke tilladt. Tryk på »Forbind Google Drive« igen, og tillad adgang.</span>
- <span data-aapsb-msg="gOldUrl">Denne adresse hører til et ældre forsøg. Tryk på »Forbind Google Drive« igen, og brug den nye adresse.</span>
- <span data-aapsb-msg="gWorking">Spørger Google…</span>
- <span data-aapsb-msg="gFailed">Google accepterede det ikke ({error}). Svaret er kun gyldigt i få minutter og kun én gang: tryk på »Forbind Google Drive« igen.</span>
- <span data-aapsb-msg="gNoRefresh">Google sendte ingen langvarig adgang. Tryk på »Forbind Google Drive« igen.</span>
- <span data-aapsb-msg="gOk">GDRIVE_OAUTH2 er klar. Tilføj den som en secret nedenfor.</span>
- <span data-aapsb-msg="gCopied">Kode kopieret: indsæt den i det store felt »Secret«, og tryk så på »Add secret«.</span>

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
