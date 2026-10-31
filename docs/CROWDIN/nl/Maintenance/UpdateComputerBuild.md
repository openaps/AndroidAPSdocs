# Bijwerken met Android Studio

## Zelf bouwen, in plaats van downloaden

**AAPS** kun je niet downloaden, vanwege de regels voor medische hulpmiddelen. Je mag de app legaal bouwen voor eigen gebruik, maar je mag geen kopie aan anderen geven! Zie de [FAQ-pagina](../UsefulLinks/FAQ.md) voor meer informatie.

```{note}
Wil je **AAPS** op een nieuwe computer bouwen? Kopieer dan je back-up van het keystore-bestand naar de nieuwe computer. Volg daarna de [procedure om **AAPS** voor het eerst te bouwen](../SettingUpAaps/BuildingAaps.md) in plaats van deze handleiding. Het enige verschil: in plaats van een nieuwe keystore te maken, kun je de keystore kiezen die je naar de nieuwe computer hebt gekopieerd.
```

## Overzicht: bijwerken naar een nieuwe versie van AAPS met Android Studio

```{contents} Steps for updating to a new version of AAPS
:depth: 1
:local: true
```

Heb je problemen? Zie dan de aparte pagina [Problemen met Android Studio oplossen](../GettingHelp/TroubleshootingAndroidStudio.md).

### Exporteer je instellingen

Exporteer je instellingen uit de **AAPS**-versie die nu op je telefoon staat. Misschien heb je ze niet nodig, maar het is beter om het zeker te doen.

Weet je niet meer hoe dit moet? Kijk dan op de pagina [Back-ups maken en terugzetten](ExportImportSettings.md).

### Controleer je versie van Android Studio

De laagste versie die je nodig hebt, staat in de [bouwinstructies](#Building-APK-recommended-specification-of-computer-for-building-apk-file). Is je versie ouder? [Werk Android Studio dan eerst bij](#Building-APK-install-android-studio)!

(Update-to-new-version-update-your-local-copy)=
### Werk je lokale kopie bij

* Open je bestaande AAPS-project in Android Studio. Misschien moet je je project kiezen. Klik (dubbel) op het AAPS-project.

  ![Android Studio - project kiezen (Select Project)](../images/update/01_ProjectSelection.png)

* Kies in de menubalk van Android Studio Git -> Fetch

   ![Android Studio-menu - Git - Fetch](../images/update/02_GitFetch.png)

* Rechtsonder zie je een melding dat Fetch gelukt is.

   ![Android Studio-menu - Git - Fetch gelukt](../images/update/03_GitFetchSuccessful.png)

* Kies nu in de menubalk Git -> Pull

   ![Android Studio-menu - Git - Pull](../images/update/04_GitPull.png)

* Laat alle opties zoals ze zijn (origin/master) en kies Pull

   ![Android Studio - Git - Pull-venster](../images/update/05_GitPullOptions.png)

* Wacht tot het downloaden klaar is. Je ziet de voortgang als informatie in de balk onderaan. Als het klaar is, zie je een melding dat het gelukt is.

  ```{note}
  Welke bestanden bijgewerkt zijn, kan verschillen! Dit betekent niet dat er een probleem is.
  ```

   ![Android Studio - Pull gelukt](../images/update/06_GitPullSuccess.png)

* Gradle Sync gaat nu een aantal dependencies (benodigde onderdelen) downloaden. Wacht tot dit klaar is.

  ![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

### Controleer de JVM-versie

Deze controle is vooral nodig als je op dezelfde computer al eerder een versie van **AAPS** hebt gebouwd.

Kijk in de [bouwinstructies](#Building-APK-recommended-specification-of-computer-for-building-apk-file) welke JVM-versie nodig is voor de **AAPS**-versie die je nu bouwt. Volg daarna de stappen bij [Incompatible Gradle JVM](#incompatible-gradle-jvm) om zeker te zijn dat je nu de juiste versie gebruikt.

(Update-to-new-version-build-the-signed-apk)=
### Bouw de ondertekende APK

Je broncode is nu de huidige uitgebrachte versie, en alle voorwaarden zijn gecontroleerd. Nu kun je de ondertekende apk bouwen zoals beschreven in de sectie [ondertekende apk bouwen](#Building-APK-generate-signed-apk).

(Update-to-new-version-transfer-and-install)=

### Zet de apk over en installeer hem
Je moet de apk naar je telefoon overzetten om hem te kunnen installeren.

```{note}
Heb je in Android Studio gebouwd met dezelfde bestaande keystore? Dan hoef je de bestaande app op je telefoon niet te verwijderen. Volg bij het installeren van de apk de meldingen om de update te installeren.
In andere gevallen, bijvoorbeeld als je in Android Studio een nieuwe keystore hebt gemaakt voor je ondertekende apk, moet je de oude app verwijderen voordat je de apk installeert. **Exporteer zeker eerst je instellingen!**
```

Zie de instructies voor [AAPS overzetten en installeren](../SettingUpAaps/TransferringAndInstallingAaps.md). Waar Google de [verificatie van Android-ontwikkelaars](#android-developer-verification) verplicht (vanaf september 2026, afhankelijk van je land), installeer je met [ADB](#android-developer-verification-adb) in plaats van op het APK-bestand te tikken.

Ga [hier](#Update-to-new-version-check-aaps-version-on-phone) verder.

(update-computer-build-troubleshooting)=

## Probleemoplossing

Gaat er iets mis? Geen paniek.

Haal even diep adem!

Kijk daarna op de aparte pagina [Problemen met Android Studio oplossen](../GettingHelp/TroubleshootingAndroidStudio.md) of je probleem daar al beschreven is!

Heb je meer hulp nodig? Vraag het dan aan andere **AAPS**-gebruikers op [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) of [Discord](https://discord.gg/4fQUWHZ4Mw).