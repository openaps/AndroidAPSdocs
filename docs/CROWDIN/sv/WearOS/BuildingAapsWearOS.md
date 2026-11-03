# Bygga Wear-appen för AAPS

**AAPS**-appen för en smartklocka med Wear OS (**Wear-apk:n**, `aaps-wear-….apk`) är en separat installationsfil, skild från **AAPS**-appen för telefonen. Du behöver båda: telefonappen kör loopen, klockappen visar dess data och kan skicka kommandon till den. Klockappen installeras från telefonen, se [Ställ in AAPS på din klocka med Wear OS](WearOsSmartwatch.md).

De två apparna fungerar bara tillsammans när de passar ihop:

- **Samma AAPS-version** på telefonen och på klockan.
- **Samma keystore** används för att signera båda apparna.

Det enklaste sättet att vara säker på detta är att bygga båda apparna **samtidigt**, i samma bygge. Bygget i webbläsaren gör detta åt dig: varje bygge skapar telefon-apk:n och Wear-apk:n tillsammans. Med Android Studio eller kommandoraden bygger du Wear-apk:n som ett andra steg direkt efter telefon-apk:n.

```{note}
Använder du redan **AAPS** på telefonen men har ingen Wear-apk från samma bygge? Bygg båda apparna igen med samma keystore, och installera om telefonappen också. En Wear-apk som byggs flera månader senare, eller med en annan version av Android Studio, fungerar troligen inte med telefonappen.
```

## Wear OS-versioner som stöds

**AAPS** fungerar på klockor med **Wear OS 3.0, 3.2 eller 3.5** (Android 11, API-nivå 30) **eller nyare** (Wear OS 4, 5 och 6). Klockor med Wear OS 2 stöds inte.

```{warning}
AAPS-urtavlor finns för smartklockor med Wear OS och API-nivå 30 till 33 (Wear OS 3.0, 3.2, 3.5 och 4).<br>
Nyare versioner av Wear OS gör att AAPS-urtavlorna fungerar allt sämre – se [Ändringar av urtavlor i Wear OS](#wearos-watchface-changes) och [begränsningarna i Wear OS 5](#BuildingAapsWearOs-WearOS5).
```

(building-aaps-wear-os-method)=

## Hämta Wear-apk:n med din byggmetod

Följ avsnittet för den metod du använder för att [bygga AAPS](../SettingUpAaps/BuildingAaps.md).

(building-aaps-wear-os-browser)=

### Bygge i webbläsaren (rekommenderas)

**Du behöver inte göra något extra.** Varje bygge i webbläsaren skapar två filer från samma källkod och med samma keystore:

- `aaps-….apk`: telefonappen.
- `aaps-wear-….apk`: klockappen.

Wear-apk:n följer den [variant](#browserbuild-variant) som du valde för bygget: `fullRelease` ger appen **AAPS Wear**, `aapsclientRelease` appen **AAPSClient Wear** och `pumpcontrolRelease` appen **PumpControl Wear**. Varje Wear-app kommunicerar bara med den telefonapp som hör till den.

Här hittar du Wear-apk:n:

- **AAPS Builder**: på byggsidan, scrolla ned till **Artifacts** (artefakter) och ladda ned `aaps-wear-….apk` bredvid telefonappen, som visas i [Steg 5 – Installera appen på telefonen](#aaps-builder-step5). Ladda ned den på telefonen som kör **AAPS** om du installerar klockappen från telefonen (Wear Installer 2 eller Easy Fire Tools), eller på din dator om du använder ADB.

  ![Artifacts med apparna för telefon och klocka](../images/Building-the-App/CI/AapsBuilder52_Artifacts.png)

- **Fork med Google Drive**: öppna din Google Drive, mappen `AAPS`, och sedan mappen för den version du byggde. Den innehåller telefon-apk:n och Wear-apk:n, se [Steg 4 – Bygg APK-filen](#github-build-apk).

  ![Plats i Google Drive](../images/update/CI/GitHubActions5.png)

Spara Wear-apk:n tillsammans med telefon-apk:n i dina säkerhetskopior. Med **AAPS Builder** finns filerna kvar på byggsidan i bara 14 dagar.

Nästa steg: installera Wear-apk:n på klockan, se [Ställ in AAPS på din klocka med Wear OS](WearOsSmartwatch.md).

(building-aaps-wear-os-android-studio)=

### Android Studio

Wear-apk:n byggs som telefon-apk:n, som ett andra signerat bygge. Gör det direkt efter telefon-apk:n, med samma version av Android Studio och samma keystore.

- Följ instruktionerna för [Bygge med Android Studio](../SettingUpAaps/ComputerBuild.md).
- När du kommer till [valet av modul](#Building-APK-wearapk) i ”Bygg den signerade AAPS-apk:n”, se till att välja **`AndroidAPS.wear`**.

![Wear-modul](../images/Building-the-App/wear_build1.png)

Välj ”**fullRelease**” för att skapa apk-filen för **AAPS** Wear.

![Wear-modul](../images/Building-the-App/wear_build2.png)

Om du vill kan du i stället bygga **”pumpcontrolRelease”** från rullgardinsmenyn. Då kan du bara fjärrstyra pumpen, utan loop.

Nästa steg: installera Wear-apk:n på klockan, se [Ställ in AAPS på din klocka med Wear OS](WearOsSmartwatch.md).

(building-aaps-wear-os-troubleshooting)=

#### Felsökning av bygget med Android Studio

När du bygger hela **AAPS**-appen (och faktiskt alla signerade appar) skapar Android Studio en .json-fil i samma mapp. Det ger sedan fel om [ändringar som inte är committade](#troubleshooting_androidstudio-uncommitted-changes) när du försöker bygga nästa signerade app, till exempel Wear-appen för **AAPS**. Det snabbaste sättet att lösa detta är att gå till mappen där hela AAPS-appen byggdes. Din mapp är troligen ungefär:

`C:\Users\Your Name\AndroidStudioProjects\AndroidAPS\app\full\release.`

Radera .json-filen som inte behövs, eller flytta den ut ur mappen. Försök sedan bygga Wear-appen för **AAPS** igen. Om det inte fungerar hjälper den mer detaljerade [felsökningsguiden](../GettingHelp/TroubleshootingAndroidStudio.md) dig att hitta exakt vilken fil som orsakar problemet. Det kan också vara din keystore-fil.

(building-aaps-wear-os-cli)=

### Kommandoraden

Följ [Bygginstruktioner för kommandoraden](../SettingUpAaps/CLIBuild.md) och upprepa stegen för kompilering och signering för modulen `wear`, med samma keystore:

```sh
./gradlew :wear:assembleFullRelease
```

Den osignerade Wear-apk:n sparas under `wear/build/outputs/apk/full/release/`. Signera den med `apksigner` precis som telefon-apk:n och installera den sedan på klockan, se [Ställ in AAPS på din klocka med Wear OS](WearOsSmartwatch.md).
