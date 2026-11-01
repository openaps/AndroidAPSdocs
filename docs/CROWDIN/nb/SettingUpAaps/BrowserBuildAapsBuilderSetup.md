(aaps-builder-setup)=

# Oppsettsiden for AAPS Builder

Bygg din egen **AAPS**-app i GitHub. Ingen programmer å installere, ingen terminal. Tar omtrent 10 minutter første gang, deretter starter du hvert bygg selv.

Hvert steg er forklart mer i detalj, med skjermbilder, i [Nettleserbygg med AAPS Builder](#aaps-builder). Hold den siden åpen i en annen fane.

Knappene nedenfor åpner GitHub i en ny Chrome-fane. For å komme tilbake til denne siden trykker du på faneknappen ved siden av adressefeltet i Chrome (firkanten med et tall) og velger denne siden.

(aaps-builder-setup-step1)=

## Steg 1 – Opprett ditt private byggerepository

Dette oppretter din egen private kopi av AAPS Builder i GitHub-kontoen din: et repository med byggearbeidsflyten allerede på plass. Bare du kan se det og appene det bygger. Du trenger **ikke** å forke AndroidAPS: AAPS-kildekoden lastes ned fra det offisielle AndroidAPS-repositoryet ved hvert bygg.

<label class="aapsb-label" for="aapsb-user">Brukernavnet ditt på GitHub</label>
<input class="aapsb-input" type="text" id="aapsb-user" autocomplete="username" spellcheck="false" placeholder="my-github-name" />
<span class="aapsb-msg" id="aapsb-userMsg"></span>

Logg først inn på github.com i denne nettleseren (ingen konto? opprett en gratis). Kom så tilbake hit. Bruk brukernavnet ditt (vist i GitHub-profilen din), ikke e-postadressen din: siden spør GitHub om dette brukernavnet finnes.

<label class="aapsb-label" for="aapsb-repo">Navnet på repositoryet ditt</label>
<input class="aapsb-input" type="text" id="aapsb-repo" spellcheck="false" placeholder="my-aaps" />

Behold forslaget. Har du allerede opprettet repositoryet ditt med et annet navn? Skriv inn akkurat det navnet her.

```{note}
**Har du allerede et AAPS Builder-repository** (laget med en tidligere versjon av denne siden)? Ikke opprett et nytt: skriv inn det nøyaktige navnet her, hopp over knappen nedenfor, og oppdater arbeidsflyten i det én gang: se **Oppdatere kopien din** på slutten av dette steget. Hemmelighetene dine blir som de er.

Hvis du likevel vil ha et nytt repository, velger du et navn du ikke har fra før, for eksempel `my-aaps-2`, og bruker den samme keystore-filen i steg 2.

Ikke skriv inn navnet på forken din av AndroidAPS: en fork er offentlig, og den bygger allerede med sin egen **AAPS CI**-arbeidsflyt.
```

Repositoryet ditt:<code class="aapsb-repoUrl"></code>

Kontroller dette navnet før du bruker knappene nedenfor: siden husker navnet fra forrige besøk.

<a class="aapsb-btn" id="aapsb-createRepo" target="_blank" rel="noopener">Opprett mitt private repository</a>

På GitHub-siden som åpnes, er alt allerede fylt ut: malen `nightscout/aaps-builder`, kontoen din som eier, navnet på repositoryet ditt, og **Private**. Ikke endre noe, og la **Include all branches** være uten hake.

1. Klikk på den grønne knappen **Create repository**.
2. GitHub viser det nye repositoryet ditt med en mappe `.github` og en fil `README.md`: byggearbeidsflyten ligger i den. Kom tilbake til denne siden for steg 2.

```{admonition} Your new repository is empty (no files)?
:class: warning

Det ble ikke opprettet fra malen. Slett det (**Settings** → nederst på siden → **Delete this repository**), og trykk så på **Opprett mitt private repository** igjen.
```

```{admonition} Updating your copy (existing AAPS Builder repository)
:class: dropdown

Byggestegene oppdateres for deg: ved hvert bygg kjører repositoryet ditt versjonen som AAPS-utviklerne har gitt ut i nightscout/aaps-builder, og ingenting i repositoryet ditt endres. Du bytter bare ut arbeidsflytfilen din når [Oppdateringer og endringer i dokumentasjonen](../Maintenance/DocumentationUpdate.md) sier fra om det (for eksempel for en ny byggevariant), eller én gang hvis repositoryet ditt ble laget med en tidligere versjon av denne siden eller fra den gamle malen. Hemmeligheten `KEYSTORE_SET` blir som den er.

1. <a class="aapsb-btn aapsb-secondary" href="https://github.com/nightscout/aaps-builder/blob/main/.github/workflows/build.yml" target="_blank" rel="noopener">Åpne den nyeste arbeidsflyten</a>

   På en datamaskin klikker du på **kopieringsikonet** («Copy raw file») øverst til høyre i filen. På en telefon åpner du i stedet <a href="https://raw.githubusercontent.com/nightscout/aaps-builder/main/.github/workflows/build.yml" target="_blank" rel="noopener">ren tekst-versjonen</a>, trykker og holder på teksten → **Merk alt** → **Kopier**.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openWorkflowFile" target="_blank" rel="noopener">Åpne arbeidsflytfilen min</a>

   Åpner `.github/workflows/build.yml` i <code class="aapsb-repoUrl"></code> for redigering.
3. Erstatt hele teksten med den kopierte arbeidsflyten (på en telefon: trykk og hold → **Merk alt** → **Lim inn**), og klikk så på **Commit changes…** to ganger. Den første linjen i filen viser versjonen av den.
```

(aaps-builder-setup-step2)=

## Steg 2 – Signeringsnøkkelen din

Appen må signeres med din egen nøkkel. Bruk alltid den samme nøkkelen, ellers må du avinstallere AAPS (og miste innstillingene) for å oppdatere. Velg én av de to fanene.

`````{tab-set}

````{tab-item} Jeg har allerede en keystore-fil
For eksempel fra Android Studio (.jks).

<label class="aapsb-label" for="aapsb-ksFile">Keystore-fil</label>
<input type="file" id="aapsb-ksFile" accept=".jks,.keystore,.p12,.pfx,application/octet-stream">

<label class="aapsb-label" for="aapsb-ksPass">Keystore-passord</label>
<input class="aapsb-input" type="password" id="aapsb-ksPass" autocomplete="off">

<label class="aapsb-label" for="aapsb-ksAlias">Nøkkelalias</label>
<select class="aapsb-input" id="aapsb-ksAliasSel" hidden></select>
<input class="aapsb-input" type="text" id="aapsb-ksAlias" autocomplete="off" spellcheck="false" placeholder="key0">

<label class="aapsb-check"><input type="checkbox" id="aapsb-samePass" checked> Nøkkelpassordet er det samme som keystore-passordet</label>

<div id="aapsb-keyPassWrap" hidden>

<label class="aapsb-label" for="aapsb-keyPass">Nøkkelpassord</label>
<input class="aapsb-input" type="password" id="aapsb-keyPass" autocomplete="off">

</div>

<button class="aapsb-btn" type="button" id="aapsb-haveGo">Kontroller og fortsett</button> <span class="aapsb-msg" id="aapsb-haveMsg"></span>
````

````{tab-item} Opprett en ny nøkkel
Bygger du AAPS for første gang? En ny nøkkel opprettes her i nettleseren din. Ingenting sendes noe sted.

<label class="aapsb-label" for="aapsb-newPass">Velg et passord (minst 8 tegn, ingen bokstaver med aksent eller æ, ø, å)</label>
<input class="aapsb-input" type="password" id="aapsb-newPass" autocomplete="new-password">

<label class="aapsb-label" for="aapsb-newPass2">Gjenta passordet</label>
<input class="aapsb-input" type="password" id="aapsb-newPass2" autocomplete="new-password">

<button class="aapsb-btn" type="button" id="aapsb-newGo">Opprett nøkkel</button> <span class="aapsb-msg" id="aapsb-newMsg"></span>

<div class="aapsb-box" id="aapsb-backupBox" hidden>

**Lagre en sikkerhetskopi av nøkkelen din!**

Last ned filen. Oppbevar disse tre sammen, på et trygt sted bort fra telefonen (f.eks. din egen skylagring):

- filen `aaps-keystore.jks`
- passordet ditt
- aliaset til nøkkelen: **`key0`**

Du trenger alle tre hvis du noen gang bygger AAPS på en annen måte, f.eks. med Android Studio.

<button class="aapsb-btn" type="button" id="aapsb-downloadKs">Last ned sikkerhetskopi (aaps-keystore.jks)</button>

</div>
````

`````
(aaps-builder-setup-step3)=
## Steg 3 – Gi nøkkelen til repositoryet ditt
<span id="aapsb-s3wait">Fullfør steg 2 først.</span>

<div id="aapsb-s3ready" hidden>
  1. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets" target="_blank" rel="noopener">Åpne siden for hemmeligheter</a> Åpner: <code class="aapsb-repoUrl"></code> Får du «Page not found» (404)? Kontroller først at du er logget inn på github.com i denne nettleseren: GitHub viser 404 for private repositoryer når du ikke er logget inn. Ellers stemmer ikke brukernavnet eller navnet på repositoryet i steg 1 med repositoryet ditt: kontroller dem på github.com og skriv dem inn i steg 1. 2. Trykk på «Kopier navn», og lim det inn i det lille feltet «Name»: `KEYSTORE_SET` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="name">Kopier navn</button> 3. Trykk på «Kopier hemmelighet», og lim den lange koden inn i den store boksen «Secret»: <code id="aapsb-secretPreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="secret">Kopier hemmelighet</button> <span class="aapsb-msg" id="aapsb-copyMsg"></span> Hemmeligheten er en svært lang kode (tusenvis av tegn), IKKE ordet KEYSTORE_SET. Kopier og lim inn navnet først, deretter den lange koden. 4. Trykk på «Add secret». Ferdig, du trenger aldri å gjøre dette igjen.
</div>
(aaps-builder-setup-step4)=
## Steg 4 – Bygg appen

1. <a class="aapsb-btn" id="aapsb-openActions" target="_blank" rel="noopener">Åpne byggesiden</a>

   Åpner: <code class="aapsb-repoUrl"></code>

   Får du «Page not found» (404)? Kontroller først at du er logget inn på github.com i denne nettleseren: GitHub viser 404 for private repositoryer når du ikke er logget inn. Ellers stemmer ikke brukernavnet eller navnet på repositoryet i steg 1 med repositoryet ditt: kontroller dem på github.com og skriv dem inn i steg 1. Åpnet GitHub-appen seg i stedet? Trykk på «RUN WORKFLOW», kontroller versjonen og varianten, og trykk på «RUN WORKFLOW» igjen. Hvis appen fortsatt viser «Nothing to see here», drar du listen nedover for å se bygget ditt.
2. Hvis du blir spurt, klikker du på den grønne knappen for å aktivere arbeidsflyter.
Listen over arbeidsflyter viser to oppføringer: bruk «Build AAPS». Ignorer «AAPS Builder»: den inneholder byggestegene og har ingen «Run workflow»-knapp.
3. Klikk på «Run workflow», og deretter på den grønne knappen «Run workflow». «latest» bygger den nyeste AAPS-versjonen. ***tips:*** *du kan bygge en annen versjon ved å skrive inn navnet på [taggen](https://github.com/nightscout/AndroidAPS/tags) i stedet for «latest»*
4. Vent omtrent 15–30 minutter. En grønn hake betyr at det er ferdig.
Vil du ha en e-post når bygget er ferdig? GitHub sender deg bare e-post når et bygg mislykkes. For også å få en når det lykkes: på github.com åpner du profilbildet ditt → Settings → Notifications → System → Actions, og fjerner haken ved «Only notify for failed workflows».

```{admonition} No "Build AAPS" / "Run workflow" button?
:class: warning

1. Åpne repositoryet ditt og kontroller at det har en mappe `.github` med filen `workflows/build.yml`. Hvis repositoryet er tomt, ble det ikke opprettet fra malen: slett det (**Settings** → nederst på siden → **Delete this repository**) og gjør [steg 1](#aaps-builder-setup-step1) på nytt med knappen.
2. Åpne fanen Actions. Hvis det står at arbeidsflyter er deaktivert, klikker du på den grønne knappen for å aktivere dem. Klikk deretter på «Build AAPS» i listen.
```

(aaps-builder-setup-step5)=

## Steg 5 – Installer på telefonen

```{admonition} Before every update: back up your settings!
:class: warning

1. I AAPS: Vedlikehold → Eksporter innstillinger. (Gjør dette jevnlig uansett, f.eks. etter en profilendring eller én gang i måneden.)
2. Kopier den eksporterte filen BORT fra telefonen, f.eks. til Google Drive eller Dropbox. En sikkerhetskopi som bare ligger på telefonen, går tapt sammen med telefonen.
3. Oppbevar APK-filene og flere eldre eksporter der også. Da kan du alltid gå tilbake.

[Slik eksporterer du innstillinger](#ExportImportSettings-Settings-Export) · [AAPS FAQ: slik organiserer du sikkerhetskopier](#FAQ-organize-backups)
```

1. Åpne denne siden på telefonen, i nettleseren (Chrome). Logg inn på github.com hvis du blir bedt om det.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openRuns" target="_blank" rel="noopener">Åpne byggene mine</a>

   Åpnet GitHub-appen seg i stedet? Den kan ikke laste ned bygg. I appen åpner du det nyeste bygget og trykker på «Artifacts ↗», eller trykker på delingsikonet og velger Chrome (eller «Kopier link», og limer så lenken inn i adressefeltet i Chrome). Fortsett i Chrome.

   Får du «Page not found» (404)? Kontroller først at du er logget inn på github.com i denne nettleseren: GitHub viser 404 for private repositoryer når du ikke er logget inn. Ellers stemmer ikke brukernavnet eller navnet på repositoryet i steg 1 med repositoryet ditt: kontroller dem på github.com og skriv dem inn i steg 1.

   For å hindre at GitHub-lenker åpnes i appen: Android-Innstillinger → Apper → GitHub → Åpne som standard → slå av «Åpne støttede linker».
3. Trykk på det nyeste bygget med grønn hake ✅.
4. Bla ned til byggesammendraget og trykk på den store lenken «📱 Download AAPS …» (eller bla lenger ned til «Artifacts» og trykk på aaps-….apk). Bla med fingeren på teksten, ikke på diagrammet over byggestegene.
5. Når nedlastingen er ferdig, trykker du på filen og velger Installer. Hvis du blir spurt, tillat installering av apper fra denne kilden.
6. aaps-wear-….apk er for en smartklokke. Hopp over den hvis du ikke bruker en.

APK-filen vises ikke under «Code» i repositoryet ditt, bare på byggesiden. Den ligger der i 14 dager.

Ny AAPS-versjon? Sikkerhetskopier innstillingene dine, og bygg den så med [steg 4](#aaps-builder-setup-step4). Repositoryet ditt bygger aldri noe av seg selv.

(aaps-builder-setup-step6)=

## Steg 6 – Valgfritt: få appen i Google Drive

Vil du at APK-filen skal dukke opp i Google Drive (og ligge der for alltid)? Legg til én hemmelighet til, GDRIVE_OAUTH2. Denne siden henter den fra Google for deg. AAPS kan da bare se og endre filene den selv lager i Google Drive, ingenting annet.

1. <a class="aapsb-btn" id="aapsb-googleAuth" target="_blank" rel="noopener">Koble til Google Drive</a>

   Google åpnes i en ny fane. Velg Google-kontoen din og gi AAPS lov til å se og endre sine egne filer. Hvis Google sier at appen ikke er verifisert, trykker du på «Avansert» og deretter på «Gå til …».
2. Da viser den nye fanen en feil som **«Får ikke tilgang til dette nettstedet»** eller **«127.0.0.1 avviste tilkoblingen»**. **Dette er som forventet.** Svaret fra Google ligger i adressen til den fanen.

   Trykk på adressefeltet i den fanen, merk hele adressen og kopier den. Den begynner med `http://127.0.0.1:47913/`. Kom tilbake til denne siden innen noen få minutter: svaret er bare gyldig en kort stund.
3. <label class="aapsb-label" for="aapsb-googleUrl">Lim inn den kopierte adressen her</label> <input class="aapsb-input" type="url" id="aapsb-googleUrl" autocomplete="off" spellcheck="false" placeholder="http://127.0.0.1:47913/aaps-builder?…" /> <button class="aapsb-btn" type="button" id="aapsb-googleGo">Hent GDRIVE_OAUTH2</button> <span class="aapsb-msg" id="aapsb-googleMsg"></span>

<div id="aapsb-gdriveReady" hidden>

4. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets2" target="_blank" rel="noopener">Åpne siden for hemmeligheter</a>

   Åpner: <code class="aapsb-repoUrl"></code>

   Får du «Page not found» (404)? Kontroller først at du er logget inn på github.com i denne nettleseren: GitHub viser 404 for private repositoryer når du ikke er logget inn. Ellers stemmer ikke brukernavnet eller navnet på repositoryet i steg 1 med repositoryet ditt: kontroller dem på github.com og skriv dem inn i steg 1.
5. Trykk på «Kopier navn», og lim det inn i det lille feltet «Name»: `GDRIVE_OAUTH2` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="gdrive">Kopier navn</button>
6. Trykk på «Kopier hemmelighet», og lim koden inn i den store boksen «Secret»: <code id="aapsb-gdrivePreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="gdriveValue">Kopier hemmelighet</button> <span class="aapsb-msg" id="aapsb-gdriveCopyMsg"></span>
7. Trykk på «Add secret».

</div>

```{admonition} Already have a GDRIVE_OAUTH2 value?
:class: dropdown

En verdi fra AAPS-forberedelsessiden til det andre nettleserbygget fungerer også: åpne siden for hemmeligheter, legg til navnet `GDRIVE_OAUTH2` og lim inn verdien din. Se [Lagre byggene i Google Drive](#aaps-builder-google-drive).
```

Fra neste bygg lagres APK-filene også i Google Drive, i mappen AAPS/&lt;versjon&gt;.

Hvis du ikke bygger på 6 måneder, eller endrer Google-passordet ditt, stopper Google tilgangen. Bygget sier da fra om det: gjør dette steget på nytt.

----

Alt på denne siden kjører i nettleseren din. Nøkkelen og passordene dine sendes aldri noe sted, bortsett fra dit du selv limer dem inn. Bare GitHub-brukernavnet ditt sendes til GitHub, for å kontrollere at det finnes. I steg 6 sendes Google-svaret bare til Google, for å hente GDRIVE_OAUTH2. Byggearbeidsflyten vedlikeholdes av AAPS-utviklerne i [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder), basert på AAPS Builder (AGPL-3.0).

<div id="aapsb-msgs" hidden>

- <span data-aapsb-msg="copied">Lang kode kopiert: lim den inn i den store boksen «Secret», og trykk så på «Add secret».</span>
- <span data-aapsb-msg="copiedName">Navn kopiert: lim det inn i det lille feltet «Name».</span>
- <span data-aapsb-msg="userOk">✓ GitHub-bruker funnet.</span>
- <span data-aapsb-msg="userBad">✗ Ingen GitHub-bruker med dette navnet. Bruk brukernavnet ditt (vist i GitHub-profilen din), ikke e-postadressen din.</span>
- <span data-aapsb-msg="copiedShort">Kopiert ✓</span>
- <span data-aapsb-msg="needUser">Skriv inn GitHub-brukernavnet ditt i steg 1 først.</span>
- <span data-aapsb-msg="errPipe">Passord og alias kan ikke inneholde tegnet |</span>
- <span data-aapsb-msg="errNoFile">Velg keystore-filen din.</span>
- <span data-aapsb-msg="errEmpty">Fyll inn passord og alias.</span>
- <span data-aapsb-msg="errPass">Feil keystore-passord.</span>
- <span data-aapsb-msg="errKeyPass">Feil nøkkelpassord.</span>
- <span data-aapsb-msg="errAlias">Aliaset ble ikke funnet i keystore-filen. Tilgjengelig: {aliases}</span>
- <span data-aapsb-msg="errFormat">Dette ser ikke ut som en keystore-fil.</span>
- <span data-aapsb-msg="okHave">Keystore OK! Fortsett med steg 3.</span>
- <span data-aapsb-msg="okHaveUnchecked">Keystore-fil lest. Passordet blir kontrollert når du bygger. Fortsett med steg 3.</span>
- <span data-aapsb-msg="errShort">Passordet må ha minst 8 tegn.</span>
- <span data-aapsb-msg="errAscii">Bruk bare a–z, A–Z, 0–9 og symboler som ! ? # – ingen mellomrom, ingen bokstaver med aksent eller æ, ø, å, og ikke |</span>
- <span data-aapsb-msg="errMatch">Passordene er ikke like.</span>
- <span data-aapsb-msg="working">Oppretter nøkkel…</span>
- <span data-aapsb-msg="okNew">Nøkkel opprettet. Last ned sikkerhetskopien nedenfor, og fortsett så med steg 3.</span>
- <span data-aapsb-msg="gNoUrl">Lim inn hele adressen til Google-fanen først.</span>
- <span data-aapsb-msg="gNoCode">Denne adressen har ikke noe svar fra Google. Kopier hele adressen til fanen som viser feilen, den begynner med http://127.0.0.1:47913/</span>
- <span data-aapsb-msg="gDenied">Google-tilgang ble ikke gitt. Trykk på «Koble til Google Drive» igjen og gi tilgang.</span>
- <span data-aapsb-msg="gOldUrl">Denne adressen hører til et eldre forsøk. Trykk på «Koble til Google Drive» igjen og bruk den nye adressen.</span>
- <span data-aapsb-msg="gWorking">Spør Google…</span>
- <span data-aapsb-msg="gFailed">Google godtok det ikke ({error}). Svaret er bare gyldig i noen få minutter og bare én gang: trykk på «Koble til Google Drive» igjen.</span>
- <span data-aapsb-msg="gNoRefresh">Google sendte ingen langvarig tilgang. Trykk på «Koble til Google Drive» igjen.</span>
- <span data-aapsb-msg="gOk">GDRIVE_OAUTH2 er klar. Legg den til som en hemmelighet nedenfor.</span>
- <span data-aapsb-msg="gCopied">Kode kopiert: lim den inn i den store boksen «Secret», og trykk så på «Add secret».</span>

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
