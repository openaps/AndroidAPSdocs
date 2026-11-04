(aaps-builder-setup)=

# Inställningssidan för AAPS Builder

Bygg din egen **AAPS**-app på GitHub. Inga program att installera, ingen terminal. Första gången tar det ungefär 10 minuter, sedan startar du varje bygge själv.

Varje steg förklaras mer utförligt, med skärmbilder, i [Bygge i webbläsaren med AAPS Builder](#aaps-builder). Ha den sidan öppen i en annan flik.

Knapparna nedan öppnar GitHub i en ny flik i Chrome. För att komma tillbaka till den här sidan, tryck på flikknappen bredvid adressfältet i Chrome (rutan med en siffra) och välj den här sidan.

(aaps-builder-setup-step1)=

## Steg 1 – Skapa ditt privata byggrepo

Detta skapar din egen privata kopia av AAPS Builder i ditt GitHub-konto: ett repo där byggarbetsflödet redan finns. Bara du kan se det och apparna som det bygger. Du behöver **inte** göra en fork av AndroidAPS: AAPS källkod laddas ned från det officiella AndroidAPS-repot vid varje bygge.

<label class="aapsb-label" for="aapsb-user">Your GitHub username (ditt användarnamn på GitHub)</label>
<input class="aapsb-input" type="text" id="aapsb-user" autocomplete="username" spellcheck="false" placeholder="my-github-name" />
<span class="aapsb-msg" id="aapsb-userMsg"></span>

Logga först in på github.com i den här webbläsaren (inget konto? Skapa ett gratis). Kom sedan tillbaka hit. Använd ditt användarnamn (det visas i din GitHub-profil), inte din e-postadress: sidan frågar GitHub om användarnamnet finns.

<label class="aapsb-label" for="aapsb-repo">Name of your repository (namnet på ditt repo)</label>
<input class="aapsb-input" type="text" id="aapsb-repo" spellcheck="false" placeholder="my-aaps" />

Behåll förslaget. Har du redan skapat ditt repo med ett annat namn? Skriv exakt det namnet här.

```{note}
**Har du redan ett repo för AAPS Builder** (skapat med en tidigare version av den här sidan)? Skapa inte ett nytt: skriv exakt dess namn här, hoppa över knappen nedan och uppdatera dess arbetsflöde en gång: se **Updating your copy** (uppdatera din kopia) i slutet av det här steget. Dina hemligheter förblir som de är.

Om du ändå vill ha ett nytt repo, välj ett namn som du inte redan har, till exempel `my-aaps-2`, och använd samma keystore i steg 2.

Skriv inte namnet på din fork av AndroidAPS: en fork är offentlig, och den bygger redan med sitt eget arbetsflöde **AAPS CI**.
```

Your repository: <code class="aapsb-repoUrl"></code>

Kontrollera det här namnet innan du använder knapparna nedan: sidan kommer ihåg namnet från ditt senaste besök.

<a class="aapsb-btn" id="aapsb-createRepo" target="_blank" rel="noopener">Create my private repository</a>

På GitHub-sidan som öppnas är allt redan ifyllt: mallen `nightscout/aaps-builder`, ditt konto som ägare, namnet på ditt repo och **Private** (privat). Ändra ingenting, och låt **Include all branches** (ta med alla grenar) vara avmarkerat.

1. Klicka på den gröna knappen **Create repository** (skapa repo).
2. GitHub visar ditt nya repo med mappen `.github` och filen `README.md`: byggarbetsflödet finns där. Kom tillbaka till den här sidan för steg 2.

```{admonition} Your new repository is empty (no files)?
:class: warning

Det skapades inte från mallen. Radera det (**Settings** → längst ned på sidan → **Delete this repository**) och tryck sedan på **Create my private repository** igen.
```

```{admonition} Updating your copy (existing AAPS Builder repository)
:class: dropdown

Byggstegen uppdateras åt dig: vid varje bygge kör ditt repo den version som AAPS-utvecklarna har släppt i nightscout/aaps-builder, och ingenting i ditt repo ändras. Du byter bara ut din arbetsflödesfil när [Uppdateringar och ändringar i dokumentationen](../Maintenance/DocumentationUpdate.md) säger det (till exempel för en ny byggvariant), eller en gång om ditt repo skapades med en tidigare version av den här sidan eller från den gamla mallen. Din hemlighet `KEYSTORE_SET` förblir som den är.

1. <a class="aapsb-btn aapsb-secondary" href="https://github.com/nightscout/aaps-builder/blob/main/.github/workflows/build.yml" target="_blank" rel="noopener">Open the newest workflow</a>

   På en dator klickar du på **kopieringsikonen** ("Copy raw file") uppe till höger i filen. På en telefon öppnar du i stället <a href="https://raw.githubusercontent.com/nightscout/aaps-builder/main/.github/workflows/build.yml" target="_blank" rel="noopener">versionen med ren text</a> och håller fingret på texten → **Markera alla** → **Kopiera**.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openWorkflowFile" target="_blank" rel="noopener">Open my workflow file</a>

   Öppnar `.github/workflows/build.yml` i <code class="aapsb-repoUrl"></code> för redigering.
3. Ersätt hela texten med det kopierade arbetsflödet (på en telefon: håll fingret på texten → **Markera alla** → **Klistra in**) och klicka sedan på **Commit changes…** två gånger. Filens första rad visar dess version.
```

(aaps-builder-setup-step2)=

## Steg 2 – Din signeringsnyckel

Appen måste signeras med din egen nyckel. Använd alltid samma nyckel, annars måste du avinstallera AAPS (och förlora dess inställningar) för att kunna uppdatera. Välj en av de två flikarna.

`````{tab-set}

````{tab-item} I already have a keystore
Till exempel från Android Studio (.jks).

<label class="aapsb-label" for="aapsb-ksFile">Keystore file (keystore-fil)</label>
<input type="file" id="aapsb-ksFile" accept=".jks,.keystore,.p12,.pfx,application/octet-stream">

<label class="aapsb-label" for="aapsb-ksPass">Keystore password (keystore-lösenord)</label>
<input class="aapsb-input" type="password" id="aapsb-ksPass" autocomplete="off">

<label class="aapsb-label" for="aapsb-ksAlias">Key alias (nyckelns alias)</label>
<select class="aapsb-input" id="aapsb-ksAliasSel" hidden></select>
<input class="aapsb-input" type="text" id="aapsb-ksAlias" autocomplete="off" spellcheck="false" placeholder="key0">

<label class="aapsb-check"><input type="checkbox" id="aapsb-samePass" checked> Key password is the same as the keystore password (nyckelns lösenord är samma som keystore-lösenordet)</label>

<div id="aapsb-keyPassWrap" hidden>

<label class="aapsb-label" for="aapsb-keyPass">Key password (nyckelns lösenord)</label>
<input class="aapsb-input" type="password" id="aapsb-keyPass" autocomplete="off">

</div>

<button class="aapsb-btn" type="button" id="aapsb-haveGo">Check and continue</button> <span class="aapsb-msg" id="aapsb-haveMsg"></span>
````

````{tab-item} Create a new key
Bygger du AAPS för första gången? En ny nyckel skapas här i din webbläsare. Ingenting skickas någonstans.

<label class="aapsb-label" for="aapsb-newPass">Choose a password (välj ett lösenord: minst 8 tecken, inte å, ä, ö eller andra bokstäver med accent)</label>
<input class="aapsb-input" type="password" id="aapsb-newPass" autocomplete="new-password">

<label class="aapsb-label" for="aapsb-newPass2">Repeat the password (upprepa lösenordet)</label>
<input class="aapsb-input" type="password" id="aapsb-newPass2" autocomplete="new-password">

<button class="aapsb-btn" type="button" id="aapsb-newGo">Create key</button> <span class="aapsb-msg" id="aapsb-newMsg"></span>

<div class="aapsb-box" id="aapsb-backupBox" hidden>

**Spara en säkerhetskopia av din nyckel!**

Ladda ned filen. Förvara de här tre sakerna tillsammans, på en säker plats utanför telefonen (till exempel din egen molnlagring):

- filen `aaps-keystore.jks`
- ditt lösenord
- nyckelns alias: **`key0`**

Du behöver alla tre om du någon gång bygger AAPS på ett annat sätt, till exempel med Android Studio.

<button class="aapsb-btn" type="button" id="aapsb-downloadKs">Download backup (aaps-keystore.jks)</button>

</div>
````

`````
(aaps-builder-setup-step3)=
## Steg 3 – Ge nyckeln till ditt repo
<span id="aapsb-s3wait">Gör först klart steg 2.</span>

<div id="aapsb-s3ready" hidden>
  1. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets" target="_blank" rel="noopener">Open the secrets page</a> Öppnar: <code class="aapsb-repoUrl"></code> Visar GitHub "Page not found" (404)? Kontrollera först att du är inloggad på github.com i den här webbläsaren: GitHub visar 404 för privata repon när du inte är inloggad. Annars stämmer inte ditt användarnamn eller namnet på repot i steg 1 med ditt repo: kontrollera dem på github.com och skriv in dem i steg 1. 2. Tryck på "Copy name" och klistra sedan in det i det lilla fältet "Name": `KEYSTORE_SET` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="name">Copy name</button> 3. Tryck på "Copy secret" och klistra sedan in den långa koden i den stora rutan "Secret": <code id="aapsb-secretPreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="secret">Copy secret</button> <span class="aapsb-msg" id="aapsb-copyMsg"></span> Hemligheten är en mycket lång kod (tusentals tecken), INTE ordet KEYSTORE_SET. Kopiera och klistra in namnet först, sedan den långa koden. 4. Tryck på "Add secret". Klart, du behöver aldrig göra detta igen.
</div>
(aaps-builder-setup-step4)=
## Steg 4 – Bygg appen

1. <a class="aapsb-btn" id="aapsb-openActions" target="_blank" rel="noopener">Open the build page</a>

   Öppnar: <code class="aapsb-repoUrl"></code>

   Visar GitHub "Page not found" (404)? Kontrollera först att du är inloggad på github.com i den här webbläsaren: GitHub visar 404 för privata repon när du inte är inloggad. Annars stämmer inte ditt användarnamn eller namnet på repot i steg 1 med ditt repo: kontrollera dem på github.com och skriv in dem i steg 1. Öppnades GitHub-appen i stället? Tryck på "RUN WORKFLOW", kontrollera version och variant och tryck på "RUN WORKFLOW" igen. Om appen fortfarande visar "Nothing to see here", dra ned listan för att se ditt bygge.
2. Om du blir tillfrågad, klicka på den gröna knappen för att aktivera arbetsflöden.
Listan med arbetsflöden (workflows) visar två poster: använd "Build AAPS". Bry dig inte om "AAPS Builder": den innehåller byggstegen och har ingen knapp "Run workflow".
3. Klicka på "Run workflow" och sedan på den gröna knappen "Run workflow". "latest" bygger den senaste AAPS-versionen. ***tips:*** *du kan bygga en annan version genom att skriva namnet på dess [tagg](https://github.com/nightscout/AndroidAPS/tags) i stället för "latest"*
4. Vänta ungefär 15–30 minuter. En grön bock betyder att bygget är klart.
Vill du få e-post när bygget är klart? GitHub skickar bara e-post när ett bygge misslyckas. För att också få e-post när det lyckas: öppna din profilbild på github.com → Settings → Notifications → System → Actions och avmarkera "Only notify for failed workflows" (meddela bara om misslyckade arbetsflöden).

```{admonition} No "Build AAPS" / "Run workflow" button?
:class: warning

1. Öppna ditt repo och kontrollera att det har mappen `.github` med filen `workflows/build.yml`. Om repot är tomt skapades det inte från mallen: radera det (**Settings** → längst ned på sidan → **Delete this repository**) och gör [steg 1](#aaps-builder-setup-step1) igen med knappen.
2. Öppna fliken Actions. Om det står att arbetsflöden är inaktiverade, klicka på den gröna knappen för att aktivera dem. Klicka sedan på "Build AAPS" i listan.
```

(aaps-builder-setup-step5)=

## Steg 5 – Installera på telefonen

```{admonition} Before every update: back up your settings!
:class: warning

1. I AAPS: Underhåll → Exportera inställningar. (Gör det ändå regelbundet, till exempel när du har ändrat profilen eller en gång i månaden.)
2. Kopiera den exporterade filen BORT från telefonen, till exempel till Google Drive eller Dropbox. En säkerhetskopia som bara finns på telefonen försvinner tillsammans med telefonen.
3. Spara också APK-filerna och flera äldre exporter där. Då kan du alltid gå tillbaka.

[Så exporterar du inställningar](#ExportImportSettings-Settings-Export) · [AAPS FAQ: så ordnar du dina säkerhetskopior](#FAQ-organize-backups)
```

1. Öppna den här sidan på telefonen, i webbläsaren (Chrome). Logga in på github.com om du blir ombedd.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openRuns" target="_blank" rel="noopener">Open my builds</a>

   Öppnades GitHub-appen i stället? Den kan inte ladda ned byggen. Öppna det senaste bygget i appen och tryck på "Artifacts ↗", eller tryck på delningsikonen och välj Chrome (eller "Copy link" och klistra sedan in länken i adressfältet i Chrome). Fortsätt i Chrome.

   Visar GitHub "Page not found" (404)? Kontrollera först att du är inloggad på github.com i den här webbläsaren: GitHub visar 404 för privata repon när du inte är inloggad. Annars stämmer inte ditt användarnamn eller namnet på repot i steg 1 med ditt repo: kontrollera dem på github.com och skriv in dem i steg 1.

   Så slutar GitHub-länkar att öppnas i appen: Android-inställningar → Appar → GitHub → Öppna som standard → stäng av "Öppna länkar som stöds".
3. Tryck på det senaste bygget med en grön bock ✅.
4. Scrolla ned till byggsammanfattningen och tryck på den stora länken "📱 Download AAPS …" (eller scrolla längre ned till "Artifacts" och tryck på aaps-….apk). Scrolla med fingret på texten, inte på diagrammet med byggstegen.
5. När nedladdningen är klar, tryck på filen och välj Installera. Om du blir tillfrågad, tillåt installation av appar från den här källan.
6. aaps-wear-….apk är appen för en smartklocka. Hoppa över den om du inte använder någon smartklocka.

APK-filen visas inte under "Code" i ditt repo, bara på byggsidan. Den sparas i 14 dagar.

Ny AAPS-version? Säkerhetskopiera dina inställningar och bygg den sedan med [steg 4](#aaps-builder-setup-step4). Ditt repo bygger aldrig något av sig självt.

(aaps-builder-setup-step6)=

## Steg 6 – Valfritt: få appen i Google Drive

Vill du att APK-filen ska finnas i din Google Drive (sparas för alltid)? Lägg till ytterligare en hemlighet, GDRIVE_OAUTH2. Den här sidan hämtar den från Google åt dig. AAPS kan då bara se och ändra de filer som det själv skapar i din Google Drive, inget annat.

1. <a class="aapsb-btn" id="aapsb-googleAuth" target="_blank" rel="noopener">Connect Google Drive</a>

   Google öppnas i en ny flik. Välj ditt Google-konto och låt AAPS se och ändra sina egna filer. Om Google säger att appen inte är verifierad, tryck på "Advanced" (avancerat) och sedan på "Go to …" (gå till …).
2. Sedan visar den nya fliken ett fel som **"This site can't be reached"** (webbplatsen kan inte nås) eller **"127.0.0.1 refused to connect"** (127.0.0.1 vägrade att ansluta). **Det här är normalt.** Googles svar finns i adressen till den fliken.

   Tryck på adressfältet i den fliken, markera hela adressen och kopiera den. Den börjar med `http://127.0.0.1:47913/`. Kom tillbaka till den här sidan inom några minuter: svaret gäller bara en kort stund.
3. <label class="aapsb-label" for="aapsb-googleUrl">Paste the copied address here (klistra in den kopierade adressen här)</label> <input class="aapsb-input" type="url" id="aapsb-googleUrl" autocomplete="off" spellcheck="false" placeholder="http://127.0.0.1:47913/aaps-builder?…" /> <button class="aapsb-btn" type="button" id="aapsb-googleGo">Get GDRIVE_OAUTH2</button> <span class="aapsb-msg" id="aapsb-googleMsg"></span>

<div id="aapsb-gdriveReady" hidden>

4. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets2" target="_blank" rel="noopener">Open the secrets page</a>

   Öppnar: <code class="aapsb-repoUrl"></code>

   Visar GitHub "Page not found" (404)? Kontrollera först att du är inloggad på github.com i den här webbläsaren: GitHub visar 404 för privata repon när du inte är inloggad. Annars stämmer inte ditt användarnamn eller namnet på repot i steg 1 med ditt repo: kontrollera dem på github.com och skriv in dem i steg 1.
5. Tryck på "Copy name" och klistra sedan in det i det lilla fältet "Name": `GDRIVE_OAUTH2` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="gdrive">Copy name</button>
6. Tryck på "Copy secret" och klistra sedan in koden i den stora rutan "Secret": <code id="aapsb-gdrivePreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="gdriveValue">Copy secret</button> <span class="aapsb-msg" id="aapsb-gdriveCopyMsg"></span>
7. Tryck på "Add secret".

</div>

```{admonition} Already have a GDRIVE_OAUTH2 value?
:class: dropdown

Ett värde från förberedelsesidan för AAPS i det andra bygget i webbläsaren fungerar också: öppna sidan med hemligheter, lägg till namnet `GDRIVE_OAUTH2` och klistra in ditt värde. Se [Spara byggena i Google Drive](#aaps-builder-google-drive).
```

Från och med nästa bygge sparas APK-filerna också i Google Drive, i mappen AAPS/&lt;version&gt;.

Om du inte bygger på 6 månader, eller om du byter ditt lösenord för Google, stänger Google av åtkomsten. Bygget säger då till: gör om det här steget.

----

Allt på den här sidan körs i din webbläsare. Din nyckel och dina lösenord skickas aldrig någonstans, förutom dit du själv klistrar in dem. Bara ditt användarnamn på GitHub skickas till GitHub, för att kontrollera att det finns. I steg 6 skickas Googles svar bara till Google, för att hämta GDRIVE_OAUTH2. Byggarbetsflödet underhålls av AAPS-utvecklarna i [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) och bygger på AAPS Builder (AGPL-3.0).

<div id="aapsb-msgs" hidden>

- <span data-aapsb-msg="copied">Den långa koden har kopierats: klistra in den i den stora rutan "Secret" och tryck sedan på "Add secret".</span>
- <span data-aapsb-msg="copiedName">Namnet har kopierats: klistra in det i det lilla fältet "Name".</span>
- <span data-aapsb-msg="userOk">✓ GitHub-användaren hittades.</span>
- <span data-aapsb-msg="userBad">✗ Det finns ingen GitHub-användare med det här namnet. Använd ditt användarnamn (det visas i din GitHub-profil), inte din e-postadress.</span>
- <span data-aapsb-msg="copiedShort">Kopierat ✓</span>
- <span data-aapsb-msg="needUser">Skriv först ditt användarnamn på GitHub i steg 1.</span>
- <span data-aapsb-msg="errPipe">Lösenord och alias får inte innehålla tecknet |</span>
- <span data-aapsb-msg="errNoFile">Välj din keystore-fil.</span>
- <span data-aapsb-msg="errEmpty">Fyll i lösenord och alias.</span>
- <span data-aapsb-msg="errPass">Fel keystore-lösenord.</span>
- <span data-aapsb-msg="errKeyPass">Fel lösenord för nyckeln.</span>
- <span data-aapsb-msg="errAlias">Aliaset finns inte i din keystore. Tillgängliga: {aliases}</span>
- <span data-aapsb-msg="errFormat">Det här ser inte ut som en keystore-fil.</span>
- <span data-aapsb-msg="okHave">Keystore OK! Fortsätt med steg 3.</span>
- <span data-aapsb-msg="okHaveUnchecked">Keystore inläst. Lösenordet kontrolleras när du bygger. Fortsätt med steg 3.</span>
- <span data-aapsb-msg="errShort">Lösenordet måste ha minst 8 tecken.</span>
- <span data-aapsb-msg="errAscii">Använd bara a–z, A–Z, 0–9 och symboler som ! ? # – inga mellanslag, inte å, ä, ö eller andra bokstäver med accent, och inte |</span>
- <span data-aapsb-msg="errMatch">Lösenorden stämmer inte överens.</span>
- <span data-aapsb-msg="working">Skapar nyckel…</span>
- <span data-aapsb-msg="okNew">Key created. Ladda ned säkerhetskopian nedan och fortsätt sedan med steg 3.</span>
- <span data-aapsb-msg="gNoUrl">Klistra först in hela adressen från fliken från Google.</span>
- <span data-aapsb-msg="gNoCode">Den här adressen innehåller inget svar från Google. Kopiera hela adressen till fliken som visar felet. Den börjar med http://127.0.0.1:47913/</span>
- <span data-aapsb-msg="gDenied">Åtkomst till Google tilläts inte. Tryck på "Connect Google Drive" igen och tillåt åtkomst.</span>
- <span data-aapsb-msg="gOldUrl">Den här adressen hör till ett tidigare försök. Tryck på "Connect Google Drive" igen och använd den nya adressen.</span>
- <span data-aapsb-msg="gWorking">Frågar Google…</span>
- <span data-aapsb-msg="gFailed">Google godkände det inte ({error}). Svaret gäller bara i några minuter och bara en gång: tryck på "Connect Google Drive" igen.</span>
- <span data-aapsb-msg="gNoRefresh">Google skickade ingen långvarig åtkomst. Tryck på "Connect Google Drive" igen.</span>
- <span data-aapsb-msg="gOk">GDRIVE_OAUTH2 är klar. Lägg till den som hemlighet nedan.</span>
- <span data-aapsb-msg="gCopied">Koden har kopierats: klistra in den i den stora rutan "Secret" och tryck sedan på "Add secret".</span>

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
