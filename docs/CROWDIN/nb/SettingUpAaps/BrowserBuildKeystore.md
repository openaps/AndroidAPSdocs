(aaps-ci-preparation)=

# Nettleserbygg – Steg 2: Lag keystore-filen for signering

```{note}
Dette er **steg 2** av [Nettleserbygg](BrowserBuild.md). Fullfør først [Steg 1 – Lag din GitHub-fork](BrowserBuildFork.md).
```

AndroidAPS må signeres med private nøkler som lagres i en **Java KeyStore (JKS)**. Dette er det viktigste valget i hele prosessen, fordi det avgjør om du senere kan **oppgradere** AAPS uten å installere på nytt.

```{note}
I de neste stegene lagrer du privat informasjon (keystore-filen din, og senere Google Drive-tilgangen din) i GitHub som **secrets** (hemmeligheter). En secret er rett og slett en kryptert verdi som bare ditt eget bygg kan lese – ingen andre, ikke engang folk som ser på forken din, kan se den. Det er dette som gjør at bygget ditt forblir ditt.
```

## Velg keystore-strategi

Les begge alternativene og velg det som passer din situasjon.

### Alternativ 1 – Lag en ny keystore-fil (nye brukere)

Velg dette hvis **minst ett** av disse stemmer:

- Dette er **første gang** du bygger AAPS.
- Du har ingen keystore-fil fra et tidligere Android Studio-bygg (på datamaskin).
- Du har glemt passordet eller aliaset til keystore-filen din.

```{warning}
Når du bygger AAPS med **alternativ 1**, lages en helt ny keystore-fil, så du **kan ikke oppgradere din eksisterende AAPS** direkte. For å gå over til dette nye bygget må du eksportere innstillingene dine, avinstallere den gamle AAPS, installere den nye og importere innstillingene dine igjen. Følg stegene i [Installere AAPS på nytt med en ny keystore-fil](#reinstall-aaps).
```

**→ [Fortsett med alternativ 1 – Lag en ny keystore-fil](BrowserBuildO1.md)**

### Alternativ 2 – Last opp keystore-filen du har fra før (eksisterende / tidligere brukere)

Velg dette hvis du **allerede har** `.jks`-keystore-filen du brukte på et tidligere AAPS-bygg fra en datamaskin i Android Studio, **og** du kan passordet og aliaset (vanligvis `key0`).

Da kan din nåværende AAPS-installasjon fortsatt oppgraderes: framtidige oppdateringer bruker den samme keystore-filen.

**→ [Fortsett med alternativ 2 – Last opp keystore-filen du har fra før](BrowserBuildO2.md)**

----

```{note}
På neste side velger du enheten din (datamaskin eller iPhone). Hver enhetsside leder deg så gjennom hvordan du laster ned og åpner forberedelsesfilen på riktig måte for den enheten, og hvordan du lager keystore-filen din. Den ferdigbygde AAPS-appen lagres i din Google Drive.
```

**Neste: velg [alternativ 1](BrowserBuildO1.md) eller [alternativ 2](BrowserBuildO2.md) ovenfor, og følg deretter siden for din enhet.**

----

(ci-keystore-export)=

## Eksporter keystore-filen din (valgfritt)

Hvis du vil eksportere den lagrede keystore-filen din, bruker du denne metoden.

Dette skriptet eksporterer keystore-informasjonen du har satt opp tidligere (fra alternativ 1 eller alternativ 2) som en passordbeskyttet ZIP-fil til mappen `/AAPS/KeyStore` i din Google Drive.

```{warning}
Før du bruker denne eksportmetoden, må du sørge for at keystore-filen og Google Drive-innstillingene er ferdig satt opp.
```

### Steps:

1. **Legg til en secret med ZIP-passord:**
   - Gå til **Settings** → **Secrets and variables** → **Actions** i repositoryet ditt
   - Klikk **New repository secret**
   - I feltet **Name** skriver du: `ZIP_PASSWORD`
   - I feltet **Secret** skriver du ditt eget passord for ZIP-krypteringen
   - Bruk bare engelske bokstaver og tall i passordet (ingen spesialtegn)
   - Klikk **Add secret**

   ![aaps_ci_zip_password.png](../images/Building-the-App/CI/aaps_ci_zip_password.png)

2. **Kjør eksport-arbeidsflyten:**
   - Gå til fanen **Actions** i repositoryet ditt
   - Velg **CI KeyStore Export**
   - Klikk **Run workflow**
   - Den eksporterte keystore-ZIP-filen lagres i din Google Drive

   ![aaps_ci_keystore_export.png](../images/Building-the-App/CI/aaps_ci_keystore_export.png)

   ![aaps_ci_keystore_export_run.png](../images/Building-the-App/CI/aaps_ci_keystore_export_run.png)

```{toctree}
:hidden:

Alternativ 1 – Lag en ny keystore-fil <BrowserBuildO1.md>
Alternativ 2 – Last opp keystore-filen du har fra før <BrowserBuildO2.md>
```
