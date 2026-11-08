(aaps-ci-troubleshooting)=

# Bouwen in de browser: probleemoplossing

```{note}
This page collects troubleshooting tips for the [Browser build](../SettingUpAaps/BrowserBuild.md).
```

(aaps-builder-troubleshooting)=

## AAPS Builder

### Step 1: the repository

(aaps-builder-ts-repo-exists)=

#### "my-aaps already exists in this account"

![Repository already exists](../images/Building-the-App/CI/AapsBuilder70_RepoExists.png)

You already have this repository, for example from an earlier attempt. Close the GitHub tab, keep that name in step 1 of the setup page and go on. If you already did steps 2 and 3 for it, your key is still in it: continue with [step 4](#aaps-builder-step4). If it was made with an earlier version of the setup page, update its workflow once as explained in [Updating AAPS](#aaps-builder-updates). You prefer a fresh start? Type another name, for example `my-aaps-2`, and use the same keystore in step 2.

(aaps-builder-ts-user-not-found)=

#### "No GitHub user with this name"

![No GitHub user](../images/Building-the-App/CI/AapsBuilder80_UserNotFound.png)

- **"No GitHub user with this name"** in stap 1: typ je GitHub-gebruikersnaam zoals die in je GitHub-profiel staat, niet je e-mailadres.
- **No "Build AAPS" or "Run workflow" button, or the repository is empty**: the repository was not created from the template. Delete it (**Settings** → bottom of the page → **Delete this repository**) and do [step 1](#aaps-builder-step1) again with the **Create my private repository** button.

### Step 3: the secret

(aaps-builder-ts-404)=

#### "Page not found" (404)

![GitHub 404](../images/Building-the-App/CI/AapsBuilder79_404.png)

- **"Page not found" (404) als de instellingspagina GitHub opent**: log in op github.com in dezelfde browser (GitHub toont 404 voor privé-repository's als je niet bent ingelogd). Als je wel bent ingelogd, dan komt de gebruikersnaam of de naam van de repository in stap 1 van de instellingspagina niet overeen met je repository. Typ de precieze namen.

### Step 4: the build

(aaps-builder-ts-workflow-not-found)=

#### "This workflow does not exist"

![This workflow does not exist](../images/Building-the-App/CI/AapsBuilder71_WorkflowNotFound.png)

Right after the repository is created, GitHub may not have read its workflow file yet: **Build AAPS** is missing from the **Actions** tab, and there is no **Run workflow** button. Any small change to the file makes GitHub read it:

1. In your repository, open **Code**, then the folder `.github`, then `workflows`, then the file `build.yml`.
2. Tap the **⋯** menu at the top right of the file, then **Edit file… In place** (on a computer, click the pencil).

   ![File menu](../images/Building-the-App/CI/AapsBuilder72_FileMenu.png)

3. Tap at the very end of the text and add an empty line (Enter). Tap **Commit changes…** at the top.

   ![Editor](../images/Building-the-App/CI/AapsBuilder73_Editor.png)

4. Tap **Commit changes** again.

   ![Commit changes](../images/Building-the-App/CI/AapsBuilder74_CommitDialog.png)

5. Open the **Actions** tab again: **Build AAPS** is now in the list of workflows (on a phone, the list opens with the icon at the left of **All workflows**). Tap it, then **Run workflow**.

   ![List of workflows](../images/Building-the-App/CI/AapsBuilder75_WorkflowsSidebar.png)

(aaps-builder-ts-build-failed)=

#### The build failed (red cross)

1. On the setup page, tap **Open my builds** and tap the build with the red cross.

   ![Failed build](../images/Building-the-App/CI/AapsBuilder76_RunsList.png)

2. The page of the build shows **Failure**, and which part failed: **AAPS / Check** (the repository, the secret, the version or the variant: nothing was built) or **AAPS / Build AAPS**.

   ![Build page: Failure](../images/Building-the-App/CI/AapsBuilder77_RunFailed.png)

3. Scroll down to **Annotations**, with your finger on the text, not on the diagram. The red lines explain the problem: tap **Show more** to read the whole message, then find it below.

   ![Annotations](../images/Building-the-App/CI/AapsBuilder78_Annotations.png)

- **"Secret KEYSTORE_SET is missing"**: do step 3 of the setup page.
- **De build stopt met "This repository is PUBLIC"**: open in je repository **Settings** → **General** → **Danger Zone** → **Change visibility** → **Private** en bouw opnieuw.
- **"Version … does not exist"**: only released versions of **AAPS** can be built, the ones on the [tags page](https://github.com/nightscout/AndroidAPS/tags) of nightscout/AndroidAPS, such as `3.3.2.0`. A branch name such as `dev` doesn't work. Use `latest`, or type a tag exactly as listed.
- **"Variant … is not supported"**: your workflow file is an older version. Replace it as explained in [Updating AAPS](#aaps-builder-updates).
- **"The secret is too short"**, **"The secret is not a valid code"** of **"The secret does not contain a keystore"**: er is verkeerde tekst in het secret geplakt, vaak het woord `KEYSTORE_SET` zelf, of maar een deel van de code. In your repository, open **Settings** → **Secrets and variables** → **Actions**, edit `KEYSTORE_SET` and paste the long code from **Copy secret** again (redo step 2 of the setup page first if you closed it).
- **"Keystore, password or alias is wrong"**: check your keystore's password and alias, then redo steps 2 and 3 of the setup page.
- **"Google Drive access has expired or was revoked"**: redo [step 6](#aaps-builder-google-drive) and update the `GDRIVE_OAUTH2` secret.
- **"Process completed with exit code 1" and a red line with only a link to `services.gradle.org`**, after less than a minute: the build could not download Gradle, a tool it needs to build the app. The Gradle website was not responding. Your repository and your settings are fine. Wait half an hour, then [run the build again](#aaps-ci-rerun).
- **Another error**: [read the build log](#aaps-ci-read-the-logs), then [run the build again](#aaps-ci-rerun). If it fails again the same way, ask for help with the name of the failed step and the error lines. Deel nooit de inhoud van je secrets.

### Step 5: the app

- **Geen link Download, of de GitHub-app ging open**: de GitHub-app kan geen builds downloaden. Open the build in Chrome as explained in [step 5](#aaps-builder-step5). Zo zorg je dat GitHub-links niet meer in de app openen: Android **Instellingen** → **Apps** → **GitHub** → **Standaard openen** → zet **Ondersteunde links openen** uit.

## AAPS-CI probleemoplossing

(aaps-ci-read-the-logs)=
### Eerst: zoek uit wat er mis ging

Als een build mislukt, bewaart GitHub een log van elke stap. In de log staat welke stap is mislukt en waarom. Lees die eerst, voordat je iets anders probeert: de foutmelding is waar je op deze pagina naar zoekt, en waar helpers om zullen vragen.

1. Open **Actions** in je GitHub-kopie van AndroidAPS. Een mislukte build heeft een rood kruis. Tik op de naam ervan.

   ![Mislukte run in de lijst Actions](../images/Building-the-App/CI/aaps_ci_logs_1_runs.png)

2. De samenvatting van de run toont **Failure** (mislukt) en daaronder de job die is mislukt (**Build AAPS**, met een rood kruis).

   ![Samenvatting van de run](../images/Building-the-App/CI/aaps_ci_logs_2_summary.png)

3. Scroll omlaag naar **Annotations** en tik op de rode regel **Build AAPS**.

   ![Annotations](../images/Building-the-App/CI/aaps_ci_logs_3_annotations.png)

4. De job gaat open. Stappen met een grijs vinkje zijn gelukt. De stap met het rode kruis is de stap die mislukt is: GitHub opent die voor je. De stappen daarna zijn overgeslagen (grijs rondje).

   ![Stappen van de job](../images/Building-the-App/CI/aaps_ci_logs_4_job.png)

5. Lees de regels net boven `Error: Process completed with exit code 1.`: daar wordt het probleem uitgelegd. In dit voorbeeld is de stap **Retrieving Google Drive access token** mislukt met `invalid_grant` en `Token has been expired or revoked.`, zie [Google refresh token verlopen](#aaps-ci-google-token-expired).

   ![Fout in de log](../images/Building-the-App/CI/aaps_ci_logs_5_error.png)

```{tip}
Hulp vragen? Deel de naam van de mislukte stap en de foutregels (een screenshot zoals hierboven is prima). Deel nooit de inhoud van je secrets.
```

(aaps-ci-update-secret)=
#### Een secret bijwerken

Veel oplossingen betekenen dat je de waarde van een secret vervangt. Ga in je GitHub-kopie van AndroidAPS naar **Settings** → **Secrets and variables** → **Actions** en tik op het potlood naast het secret.

![Lijst met secrets](../images/Building-the-App/CI/aaps_ci_secret_update_1.png)

Typ of plak de nieuwe waarde en tik op **Update secret**. GitHub laat de oude waarde nooit zien: het veld is altijd leeg.

![Update secret](../images/Building-the-App/CI/aaps_ci_secret_update_2.png)

(aaps-ci-rerun)=
#### De build opnieuw starten na een oplossing

Als je de oorzaak hebt opgelost, hoef je niet helemaal opnieuw te beginnen: open de mislukte run, tik op **...** (rechtsboven) en daarna op **Re-run failed jobs**.

![Menu Re-run](../images/Building-the-App/CI/aaps_ci_rerun_1.png)

Tik op **Re-run jobs**. Je kunt ook zoals gewoonlijk een nieuwe build starten met **Run workflow**.

![Venster Re-run](../images/Building-the-App/CI/aaps_ci_rerun_2.png)

(aaps-ci-preparation-web)=
### Webpagina aaps-ci-preparation
  - De voorbereidingspagina wordt getoond door een tijdelijke lokale server (bijvoorbeeld Simple Web Server op een computer). Die server ontvangt ook het refresh token van Google.
  - Zie je het scherm hieronder, dan is de lokale server gestopt of niet bereikbaar.
  - Sluit de voorbereidingspagina, controleer of de lokale server draait, open aaps-ci-preparation.html opnieuw op dezelfde manier als in Stap 2 en doe de rest van de stappen. Dit is vooral nodig bij het maken van de eerste verbinding met Google tijdens het instellen.

  ![aaps_ci_html_not_found](../images/Building-the-App/CI/aaps_ci_html_not_found.png)

(aaps-ci-google-token-expired)=
### Google refresh token verlopen
  - Google OAuth2 refresh tokens verlopen als ze 6 maanden niet worden gebruikt. Ze kunnen ook in andere gevallen ongeldig worden (bijv. als je het wachtwoord van je Google-account hebt gewijzigd, of de toegang zelf hebt ingetrokken). Meer informatie vind je in de [documentatie van Google OAuth2](https://developers.google.com/identity/protocols/oauth2).
  - In de [build-log](#aaps-ci-read-the-logs) mislukt de stap **Retrieving Google Drive access token** met `invalid_grant` en `Token has been expired or revoked.`:

  ![aaps_ci_token_expired](../images/Building-the-App/CI/aaps_ci_token_expired.png)

  - Als je build mislukt door een verlopen of ingetrokken Google refresh token, moet je de stappen van [Google Drive Auth](#aaps-ci-google-drive-auth) opnieuw doen om een nieuw `GDRIVE_OAUTH2`-token te krijgen. Daarna [werk je het secret bij](#aaps-ci-update-secret) in je GitHub-repository en [start je de build opnieuw](#aaps-ci-rerun).
  - Als de autorisatie weer mislukt, of Google niet meer om je toestemming vraagt, verwijder dan eerst de bestaande toegang van AAPS uit je Google-account, zie [hieronder](#aaps-ci-google-remove-access).

(aaps-ci-google-remove-access)=
### Toegang van AAPS uit je Google-account verwijderen en de autorisatie opnieuw starten
  - Als de autorisatie van Google Drive steeds mislukt, of als je helemaal opnieuw wilt beginnen, verwijder dan eerst de toegang die je eerder aan AAPS hebt gegeven en doe daarna de autorisatie opnieuw.
  - Open op je telefoon [https://myaccount.google.com](https://myaccount.google.com), tik op **Security** (Beveiliging), scroll omlaag naar **Your connections to third-party apps & services** (je verbindingen met apps en services van derden) en open de lijst met gekoppelde apps. Je kunt ook direct naar [https://myaccount.google.com/connections](https://myaccount.google.com/connections) gaan.
  - Tik op **AAPS** in de lijst.

  ![aaps_ci_google_access_1](../images/Building-the-App/CI/aaps_ci_google_access_1.png)

  - De pagina toont de toegang die je aan AAPS hebt gegeven (de Google Drive-bestanden die met de app worden gebruikt). Tik op **Delete all** (alles verwijderen) om de verbinding te verwijderen, of tik op **See details** (details bekijken) om deze eerst te bekijken.

  ![aaps_ci_google_access_2](../images/Building-the-App/CI/aaps_ci_google_access_2.png)

  - Tik op de detailpagina op **Remove all access** (alle toegang verwijderen).

  ![aaps_ci_google_access_3](../images/Building-the-App/CI/aaps_ci_google_access_3.png)

  - Tik op **Confirm** (bevestigen).

  ![aaps_ci_google_access_4](../images/Building-the-App/CI/aaps_ci_google_access_4_confirm.png)

  - Google bevestigt dat AAPS geen toegang meer heeft. AAPS staat niet meer in de lijst met gekoppelde apps.

  ![aaps_ci_google_access_5](../images/Building-the-App/CI/aaps_ci_google_access_5_removed.png)

  - Start nu de autorisatie helemaal opnieuw: sluit **zowel** de voorbereidingspagina als de bestandsbeheer-app, open aaps-ci-preparation.html opnieuw vanuit bestandsbeheer en doe de stappen van [Google Drive Auth](#aaps-ci-google-drive-auth) opnieuw. Google vraagt je opnieuw om toegang te geven, en de pagina geeft je een nieuw `GDRIVE_OAUTH2`-token.
  - [Werk het secret `GDRIVE_OAUTH2` bij](#aaps-ci-update-secret) in je GitHub-repository met het nieuwe token en [start de build opnieuw](#aaps-ci-rerun).

(aaps-ci-disable-software)=
### Disable Software That May Interfere With OAuth Verification
  - Disable any VPN or security app (firewall, antimalware,...) on the phone before trying to get the OAuth key.

(aaps-ci-actions-permission)=
### Instellingen voor GitHub Actions-rechten controleren
  - Zorg dat het beleid van GitHub Actions op “Allow all actions and reusable workflows” staat (Settings → Actions → General). Als je het wijzigt, tik dan op **Save** onder de opties.

  ![aaps_ci_actions_permission](../images/Building-the-App/CI/aaps-ci-actions-permission.png)

`actions/checkout@v4` and `actions/setup-java@v4` are not allowed to be used in `xxxxx/AndroidAPS`. Actions in this workflow must be: within a repository owned by `xxxxx`

(aaps-ci-workflow-permissions)=
### Instellingen voor GitHub-workflowrechten controleren
  - Als de build meteen mislukt met een foutmelding "Invalid workflow file", zoals de melding hieronder, dan zijn de standaard workflowrechten van je repository te streng:

```
Invalid workflow file
The workflow is not valid. .github/workflows/aaps-ci.yml (Line: 361, Col: 3):
Error calling workflow 'xxxxx/AndroidAPS/.github/workflows/cleanup-workflow-runs.yml@...'.
The nested job 'cleanup' is requesting 'actions: write', but is only allowed 'actions: none'.
```

  - Zorg dat Workflow permissions op “Read and write permissions” staat (Settings → Actions → General → Workflow permissions). Sla het daarna op en start de build-workflow opnieuw.

  ![aaps_ci_workflow_permissions](../images/Building-the-App/CI/aaps-ci-workflow-permissions.jpg)

(aaps-ci-password-special-characters)=
### Build mislukt bij het controleren van het keystore-wachtwoord
  - In de [build-log](#aaps-ci-read-the-logs) mislukt de stap **Validating keystore, alias and password** met `Either KEYSTORE_BASE64, KEYSTORE_PASSWORD, KEY_PASSWORD, or KEY_ALIAS is incorrect`, gevolgd door `Keystore was tampered with, or password was incorrect`. De build stopt daar: de keystore en de wachtwoorden worden gecontroleerd voordat AAPS wordt gebouwd.

  ![Verkeerd keystore-wachtwoord in de build-log](../images/Building-the-App/CI/aaps_ci_password_wrong.png)

  - De build-workflow laat elk teken van je wachtwoorden ongewijzigd. Vul `KEYSTORE_PASSWORD` en `KEY_PASSWORD` precies zo in als ze zijn, zonder een backslash of een ander escape-teken toe te voegen. Als je backslashes hebt toegevoegd, [werk dan de secrets bij](#aaps-ci-update-secret) met het wachtwoord precies zoals het is. Het voorbeeld hieronder is fout: het wachtwoord is `Example2026`, de backslash is toegevoegd.

  ![Wachtwoord ingevuld met een toegevoegde backslash](../images/Building-the-App/CI/aaps_ci_password_escaped.png)

  - Mislukt de build nog steeds bij het ondertekenen van de APK, terwijl je wachtwoord goed is, en bevat het wachtwoord `$`, een backtick, `"` of `\`? Dan is het workflowbestand in je fork ouder dan september 2026 en behandelt het deze tekens nog als speciale tekens. [Synchroniseer je fork](#Update-to-new-version-update-your-repo) met de nieuwste dev en start daarna de build-workflow opnieuw.
  - De verticale streep `|` is een speciaal geval. De voorbereidingspagina van [Optie 1](#aaps-ci-option1) zet de keystore, wachtwoorden en alias samen in één secret `KEYSTORE_SET`, gescheiden door `|`. De workflow splitst het weer op dat teken. Het wachtwoord dat de voorbereidingspagina maakt, bevat alleen letters en cijfers. Met Optie 1 kan dit dus niet gebeuren. Het kan alleen gebeuren als je zelf een secret `KEYSTORE_SET` hebt gemaakt met een wachtwoord dat `|` bevat. Verwijder in dat geval `KEYSTORE_SET` en vul in plaats daarvan de losse secrets van [Optie 2](#aaps-ci-option2) in.
