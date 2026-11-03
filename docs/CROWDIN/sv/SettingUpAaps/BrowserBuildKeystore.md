(aaps-ci-preparation)=

# Bygge i webbläsaren – Steg 2: Skapa din keystore för signering

```{note}
Detta är **steg 2** av [Bygge i webbläsaren](BrowserBuild.md). Gör först [Steg 1 – Skapa din GitHub-fork](BrowserBuildFork.md).
```

AAPS måste signeras med privata nycklar som sparas i en **Java KeyStore (JKS)**. Detta är det viktigaste valet i hela processen, eftersom det avgör om du senare kan **uppgradera** AAPS utan att installera om.

```{note}
I nästa steg sparar du privat information (din keystore och senare din åtkomst till Google Drive) i GitHub som **hemligheter** (secrets). En hemlighet är helt enkelt ett krypterat värde som bara ditt eget bygge kan läsa – ingen annan kan se den, inte ens personer som tittar på din fork. Det är detta som gör att ditt bygge förblir ditt.
```

## Välj hur du gör med din keystore

Läs båda alternativen och välj det som passar din situation.

### Alternativ 1 – Skapa en ny keystore (nya användare)

Välj detta om **något** av följande stämmer:

- Det är **första gången** du bygger AAPS.
- Du har ingen keystore från ett tidigare bygge i Android Studio (på dator).
- Du har glömt lösenordet eller aliaset för din keystore.

```{warning}
När du bygger AAPS med **alternativ 1** skapas en helt ny keystore, så **du kan inte uppgradera din befintliga AAPS** direkt. För att byta till det nya bygget måste du exportera dina inställningar, avinstallera den gamla AAPS, installera den nya och sedan importera dina inställningar igen. Följ stegen i [Installera om AAPS med en ny keystore](#reinstall-aaps).
```

**→ [Fortsätt med Alternativ 1 – Skapa en ny keystore](BrowserBuildO1.md)**

### Alternativ 2 – Ladda upp din befintliga keystore (befintliga / tidigare användare)

Välj detta om du **redan har** den `.jks`-keystore som du använde i ett tidigare bygge av AAPS på dator i Android Studio, **och** du vet dess lösenord och alias (oftast `key0`).

Då kan din nuvarande AAPS-installation fortfarande uppgraderas: framtida uppdateringar använder samma keystore.

**→ [Fortsätt med Alternativ 2 – Ladda upp din befintliga keystore](BrowserBuildO2.md)**

----

```{note}
På nästa sida väljer du din enhet (dator eller iPhone). Sidan för varje enhet visar sedan steg för steg hur du laddar ned och öppnar förberedelsefilen på rätt sätt för den enheten, och hur du skapar din keystore. Den färdiga AAPS-appen sparas i din Google Drive.
```

**Nästa: välj [Alternativ 1](BrowserBuildO1.md) eller [Alternativ 2](BrowserBuildO2.md) ovan och följ sedan sidan för din enhet.**

----

(ci-keystore-export)=

## Exportera din keystore (valfritt)

Använd den här metoden om du vill exportera din sparade keystore.

Detta skript exporterar informationen om din tidigare konfigurerade keystore (från alternativ 1 eller alternativ 2) som en lösenordsskyddad ZIP-fil till mappen `/AAPS/KeyStore` i din Google Drive.

```{warning}
Innan du använder den här exportmetoden måste inställningarna för din keystore och Google Drive vara klara.
```

### Steg:

1. **Lägg till en hemlighet för ZIP-lösenordet:**
   - Gå till **Settings** (inställningar) → **Secrets and variables** (hemligheter och variabler) → **Actions** i ditt repo
   - Klicka på **New repository secret** (ny hemlighet för repot)
   - Skriv i fältet **Name** (namn): `ZIP_PASSWORD`
   - Skriv ditt eget lösenord för ZIP-krypteringen i fältet **Secret** (hemlighet)
   - Använd bara engelska bokstäver (a–z) och siffror i lösenordet (inga specialtecken)
   - Klicka på **Add secret** (lägg till hemlighet)

   ![aaps_ci_zip_password.png](../images/Building-the-App/CI/aaps_ci_zip_password.png)

2. **Kör exportarbetsflödet:**
   - Gå till fliken **Actions** i ditt repo
   - Välj **CI Keystore Export**
   - Klicka på **Run workflow** (kör arbetsflödet)
   - Den exporterade ZIP-filen med din keystore sparas i din Google Drive

   ![aaps_ci_keystore_export.png](../images/Building-the-App/CI/aaps_ci_keystore_export.png)

   ![aaps_ci_keystore_export_run.png](../images/Building-the-App/CI/aaps_ci_keystore_export_run.png)

```{toctree}
:hidden:

Alternativ 1 – Skapa en ny keystore <BrowserBuildO1.md>
Alternativ 2 – Ladda upp din befintliga keystore <BrowserBuildO2.md>
```
