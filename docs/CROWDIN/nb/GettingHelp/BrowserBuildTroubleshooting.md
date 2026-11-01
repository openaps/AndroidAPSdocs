(aaps-ci-troubleshooting)=

# Nettleserbygg: feilsøking

```{note}
Denne siden samler feilsøkingstips for [Nettleserbygg](../SettingUpAaps/BrowserBuild.md).

Bruker du **AAPS Builder**? Start med det egne [feilsøkingsavsnittet](#aaps-builder-troubleshooting) for den. Avsnittene om Google Drive nedenfor gjelder også for den.
```

## Feilsøking av AAPS-CI

(aaps-ci-read-the-logs)=
### Først: finn ut hva som gikk galt

Når et bygg mislykkes, beholder GitHub en logg over hvert steg. Loggen forteller deg hvilket steg som mislyktes, og hvorfor. Les den før du prøver noe annet: feilmeldingen er det du skal lete etter på denne siden, og det de som hjelper deg, vil spørre om.

1. I GitHub-kopien din av AndroidAPS åpner du **Actions**. Et mislykket bygg har et rødt kryss. Trykk på navnet.

   ![Mislykket kjøring i Actions-listen](../images/Building-the-App/CI/aaps_ci_logs_1_runs.png)

2. Sammendraget av kjøringen viser **Failure**, og under det jobben som mislyktes (**Build AAPS**, med et rødt kryss).

   ![Sammendrag av kjøringen](../images/Building-the-App/CI/aaps_ci_logs_2_summary.png)

3. Bla ned til **Annotations** og trykk på den røde linjen **Build AAPS**.

   ![Annotations](../images/Building-the-App/CI/aaps_ci_logs_3_annotations.png)

4. Jobben åpnes. Steg med en grå hake gikk bra. Steget med det røde krysset er det som mislyktes: GitHub åpner det for deg. Stegene etter det ble hoppet over (grå sirkel).

   ![Stegene i jobben](../images/Building-the-App/CI/aaps_ci_logs_4_job.png)

5. Les linjene rett over `Error: Process completed with exit code 1.`: de forklarer problemet. I dette eksempelet mislyktes steget **Retrieving Google Drive access token** med `invalid_grant` og `Token has been expired or revoked.`, se [Google refresh token er utløpt](#aaps-ci-google-token-expired).

   ![Feil i loggen](../images/Building-the-App/CI/aaps_ci_logs_5_error.png)

```{tip}
Skal du be om hjelp? Del navnet på steget som mislyktes, og feillinjene (et skjermbilde som det ovenfor er greit). Del aldri innholdet i hemmelighetene dine.
```

(aaps-ci-update-secret)=
#### Oppdatere en hemmelighet

Mange løsninger går ut på å bytte ut verdien til en hemmelighet. I GitHub-kopien din av AndroidAPS går du til **Settings** → **Secrets and variables** → **Actions** og trykker på blyanten ved siden av hemmeligheten.

![Listen over hemmeligheter](../images/Building-the-App/CI/aaps_ci_secret_update_1.png)

Skriv inn eller lim inn den nye verdien, og trykk på **Update secret**. GitHub viser aldri den gamle verdien: feltet er alltid tomt.

![Update secret](../images/Building-the-App/CI/aaps_ci_secret_update_2.png)

(aaps-ci-rerun)=
#### Kjør bygget på nytt etter en rettelse

Når du har rettet årsaken, trenger du ikke starte fra begynnelsen: åpne den mislykkede kjøringen, trykk på **...** (øverst til høyre), og deretter på **Re-run failed jobs**.

![Re-run-menyen](../images/Building-the-App/CI/aaps_ci_rerun_1.png)

Trykk på **Re-run jobs**. Du kan også starte et nytt bygg fra **Run workflow** som vanlig.

![Re-run-dialogen](../images/Building-the-App/CI/aaps_ci_rerun_2.png)

(aaps-ci-preparation-web)=
### Nettsiden aaps-ci-preparation
  - Forberedelsessiden vises av en midlertidig lokal server (for eksempel Simple Web Server på en datamaskin), som også tar imot Google refresh token.
  - Hvis du ser skjermbildet nedenfor, har den lokale serveren stoppet, eller den kan ikke nås.
  - Lukk forberedelsessiden, kontroller at den lokale serveren kjører, åpne så aaps-ci-preparation.html på nytt på samme måte som i steg 2, og fullfør de gjenstående stegene. Dette trengs særlig når du oppretter den første Google-tilkoblingen under oppsettet.

  ![aaps_ci_html_not_found](../images/Building-the-App/CI/aaps_ci_html_not_found.png)

(aaps-ci-google-token-expired)=
### Google refresh token er utløpt
  - Et Google OAuth2 refresh token (oppdateringstoken) utløper hvis det ikke brukes på 6 måneder, og kan også bli ugyldig av andre grunner (for eksempel hvis du har endret passordet til Google-kontoen din, eller fjernet tilgangen manuelt). Flere detaljer finner du i [Google OAuth2-dokumentasjonen](https://developers.google.com/identity/protocols/oauth2).
  - I [byggeloggen](#aaps-ci-read-the-logs) mislykkes steget **Retrieving Google Drive access token** med `invalid_grant` og `Token has been expired or revoked.`:

  ![aaps_ci_token_expired](../images/Building-the-App/CI/aaps_ci_token_expired.png)

  - Hvis bygget mislykkes fordi Google refresh token er utløpt eller trukket tilbake, må du gjøre stegene under [Google Drive Auth](#aaps-ci-google-drive-auth) på nytt for å få et nytt `GDRIVE_OAUTH2`-token, [oppdatere hemmeligheten](#aaps-ci-update-secret) i GitHub-repositoryet ditt, og deretter [kjøre bygget på nytt](#aaps-ci-rerun).
  - Hvis autorisasjonen mislykkes igjen, eller Google ikke lenger ber om samtykket ditt, fjerner du først den eksisterende AAPS-tilgangen fra Google-kontoen din, se [nedenfor](#aaps-ci-google-remove-access).

(aaps-ci-google-remove-access)=
### Fjern AAPS-tilgangen fra Google-kontoen din og start autorisasjonen på nytt
  - Hvis Google Drive-autorisasjonen fortsetter å mislykkes, eller du vil starte helt på nytt, fjerner du først tilgangen du tidligere ga til AAPS, og gjør deretter autorisasjonen på nytt.
  - På telefonen åpner du [https://myaccount.google.com](https://myaccount.google.com), trykker på **Security** (Sikkerhet), blar ned til **Your connections to third-party apps & services** (Dine tilkoblinger til tredjepartsapper og -tjenester) og åpner listen over tilkoblede apper. Du kan også gå rett til [https://myaccount.google.com/connections](https://myaccount.google.com/connections).
  - Trykk på **AAPS** i listen.

  ![aaps_ci_google_access_1](../images/Building-the-App/CI/aaps_ci_google_access_1.png)

  - Siden viser tilgangen du ga til AAPS (Google Drive-filene som brukes med appen). Trykk på **Delete all** (Slett alle) for å fjerne tilkoblingen, eller trykk på **See details** (Se detaljer) for å se gjennom den først.

  ![aaps_ci_google_access_2](../images/Building-the-App/CI/aaps_ci_google_access_2.png)

  - På detaljsiden trykker du på **Remove all access** (Fjern all tilgang).

  ![aaps_ci_google_access_3](../images/Building-the-App/CI/aaps_ci_google_access_3.png)

  - Trykk på **Confirm** (Bekreft).

  ![aaps_ci_google_access_4](../images/Building-the-App/CI/aaps_ci_google_access_4_confirm.png)

  - Google bekrefter at AAPS ikke lenger har tilgang. AAPS vises ikke lenger i listen over tilkoblede apper.

  ![aaps_ci_google_access_5](../images/Building-the-App/CI/aaps_ci_google_access_5_removed.png)

  - Start nå autorisasjonen på nytt fra bunnen av: lukk **både** forberedelsessiden og filbehandler-appen, åpne aaps-ci-preparation.html på nytt fra filbehandleren, og gjør stegene under [Google Drive Auth](#aaps-ci-google-drive-auth) på nytt. Google ber deg gi tilgang på nytt, og siden gir deg et nytt `GDRIVE_OAUTH2`-token.
  - [Oppdater hemmeligheten `GDRIVE_OAUTH2`](#aaps-ci-update-secret) i GitHub-repositoryet ditt med det nye tokenet, og [kjør deretter bygget på nytt](#aaps-ci-rerun).

(aaps-ci-disable-software)=
### Slå av programvare som kan forstyrre OAUTH-verifiseringen
  - Slå av alle VPN- og sikkerhetsapper (brannmur, antivirus …) på telefonen før du prøver å hente OAUTH-nøkkelen.

(aaps-ci-actions-permission)=
### Kontroller tillatelsesinnstillingene for GitHub Actions
  - Pass på at reglene for GitHub Actions er satt til «Allow all actions and reusable workflows» (Settings → Actions → General). Hvis du endrer det, trykker du på **Save** under alternativene.

  ![aaps_ci_actions_permission](../images/Building-the-App/CI/aaps-ci-actions-permission.png)

`actions/checkout@v4` and `actions/setup-java@v4` are not allowed to be used in `xxxxx/AndroidAPS`. Actions in this workflow must be: within a repository owned by `xxxxx`

(aaps-ci-workflow-permissions)=
### Kontroller tillatelsesinnstillingene for GitHub-arbeidsflyter
  - Hvis bygget mislykkes med en gang med en feil av typen «Invalid workflow file» (ugyldig arbeidsflytfil) som ligner på den nedenfor, er standardtillatelsene for arbeidsflyter i repositoryet ditt for strenge:

```
Invalid workflow file
The workflow is not valid. .github/workflows/aaps-ci.yml (Line: 361, Col: 3):
Error calling workflow 'xxxxx/AndroidAPS/.github/workflows/cleanup-workflow-runs.yml@...'.
The nested job 'cleanup' is requesting 'actions: write', but is only allowed 'actions: none'.
```

  - Pass på at Workflow permissions er satt til «Read and write permissions» (Settings → Actions → General → Workflow permissions). Lagre, og kjør deretter byggearbeidsflyten på nytt.

  ![aaps_ci_workflow_permissions](../images/Building-the-App/CI/aaps-ci-workflow-permissions.jpg)

(aaps-ci-password-special-characters)=
### Bygget mislykkes ved kontroll av keystore-passordet
  - I [byggeloggen](#aaps-ci-read-the-logs) mislykkes steget **Validating keystore, alias and password** med `Either KEYSTORE_BASE64, KEYSTORE_PASSWORD, KEY_PASSWORD, or KEY_ALIAS is incorrect`, etterfulgt av `Keystore was tampered with, or password was incorrect`. Bygget stopper der: keystore-filen og passordene kontrolleres før AAPS bygges.

  ![Feil keystore-passord i byggeloggen](../images/Building-the-App/CI/aaps_ci_password_wrong.png)

  - Byggearbeidsflyten beholder hvert tegn i passordene dine uendret. Skriv inn `KEYSTORE_PASSWORD` og `KEY_PASSWORD` nøyaktig som de er, uten å legge til en omvendt skråstrek eller noe annet escape-tegn. Hvis du har lagt til omvendte skråstreker, [oppdaterer du hemmelighetene](#aaps-ci-update-secret) med passordet nøyaktig som det er. Eksempelet nedenfor er feil: passordet er `Example2026`, den omvendte skråstreken er lagt til.

  ![Passord skrevet inn med en ekstra omvendt skråstrek](../images/Building-the-App/CI/aaps_ci_password_escaped.png)

  - Hvis bygget fortsatt mislykkes ved signering av APK-filen selv om passordet ditt er riktig, og passordet inneholder `$`, et backtick-tegn, `"` eller `\`, er arbeidsflytfilen i forken din eldre enn september 2026 og tolker fortsatt disse tegnene. [Synkroniser forken din](#Update-to-new-version-update-your-repo) med nyeste dev, og kjør deretter byggearbeidsflyten på nytt.
  - Den loddrette streken `|` er et spesialtilfelle. Forberedelsessiden i [alternativ 1](#aaps-ci-option1) slår sammen keystore-filen, passordene og aliaset til én hemmelighet, `KEYSTORE_SET`, med `|` som skilletegn, og arbeidsflyten deler den opp ved det tegnet. Passordet som forberedelsessiden lager, inneholder bare bokstaver og sifre, så dette kan ikke skje med alternativ 1. Det kan bare skje hvis du selv har satt sammen en `KEYSTORE_SET`-hemmelighet fra et passord som inneholder `|`. I så fall sletter du `KEYSTORE_SET` og legger inn de separate hemmelighetene fra [alternativ 2](#aaps-ci-option2) i stedet.
