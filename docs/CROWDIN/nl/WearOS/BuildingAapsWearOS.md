# De Wear AAPS-app bouwen

De **AAPS**-app voor een Wear OS-smartwatch (de **Wear-apk**, `aaps-wear-….apk`) is een apart installatiebestand, los van de **AAPS**-app voor de telefoon. Je hebt ze allebei nodig: de telefoon-app voert de loop uit, de horloge-app toont de gegevens ervan en kan er commando's naar sturen. De horloge-app wordt vanaf de telefoon geïnstalleerd, zie [AAPS instellen op je Wear OS-horloge](WearOsSmartwatch.md).

De twee apps werken alleen samen als ze bij elkaar passen:

- **Dezelfde AAPS-versie** op de telefoon en op het horloge.
- **Dezelfde keystore** om beide apps te ondertekenen.

De eenvoudigste manier om dit zeker te weten is om beide apps **tegelijk** te bouwen, in dezelfde build. Bij het bouwen in de browser gebeurt dit vanzelf: elke build maakt de telefoon-apk en de Wear-apk samen. Met Android Studio of de opdrachtregel bouw je de Wear-apk als tweede stap, direct na de telefoon-apk.

```{note}
Gebruik je **AAPS** al op je telefoon, maar heb je geen Wear-apk uit dezelfde build? Bouw dan beide apps opnieuw, met dezelfde keystore, en installeer ook de telefoon-app opnieuw. Een Wear-apk die maanden later gebouwd is, of met een andere versie van Android Studio, werkt waarschijnlijk niet samen met de telefoon-app.
```

## Ondersteunde Wear OS-versies

**AAPS** werkt op horloges met **Wear OS 3.0, 3.2 of 3.5** (Android 11, API-level 30) **of nieuwer** (Wear OS 4, 5 en 6). Horloges met Wear OS 2 worden niet ondersteund.

```{warning}
AAPS-watchfaces zijn beschikbaar voor Wear OS-smartwatches met API-level 30 tot 33 (Wear OS 3.0, 3.2, 3.5 en 4).<br>
Nieuwere Wear OS-versies maken de AAPS-watchfaces steeds meer kapot — zie [Wijzigingen aan watchfaces in Wear OS](#wearos-watchface-changes) en de [beperkingen van Wear OS 5](#BuildingAapsWearOs-WearOS5).
```

(building-aaps-wear-os-method)=

## De Wear-apk krijgen met jouw manier van bouwen

Volg het deel voor de manier waarop je [AAPS bouwt](../SettingUpAaps/BuildingAaps.md).

(building-aaps-wear-os-browser)=

### Bouwen in de browser (aanbevolen)

**Je hoeft niets extra te doen.** Elke build in de browser maakt twee bestanden uit dezelfde broncode en met dezelfde keystore:

- `aaps-….apk`: de telefoon-app.
- `aaps-wear-….apk`: de horloge-app.

De Wear-apk volgt de [variant](#browserbuild-variant) die je voor de build gekozen hebt: `fullRelease` geeft de app **AAPS Wear**, `aapsclientRelease` de app **AAPSClient Wear**, `pumpcontrolRelease` de app **PumpControl Wear**. Elke Wear-app praat alleen met de telefoon-app die erbij hoort.

Waar vind je de Wear-apk:

- **AAPS Builder**: scrol op de buildpagina omlaag naar **Artifacts** en download `aaps-wear-….apk` naast de telefoon-app, zoals getoond in [Stap 6 – De app op je telefoon installeren](#aaps-builder-step6). Download hem op de telefoon waarop **AAPS** draait als je de horloge-app vanaf de telefoon installeert (Wear Installer 2 of Easy Fire Tools), of op je computer als je ADB gebruikt.

  ![Artifacts met de apps voor telefoon en horloge](../images/Building-the-App/CI/AapsBuilder52_Artifacts.png)

- **Fork met Google Drive**: open je Google Drive, map `AAPS`, en dan de map van de versie die je gebouwd hebt. Daarin staan de telefoon-apk en de Wear-apk, zie [Stap 4 – De APK bouwen](#github-build-apk).

  ![Locatie in Google Drive](../images/update/CI/GitHubActions5.png)

Bewaar de Wear-apk samen met de telefoon-apk in je back-ups. Met **AAPS Builder** blijven de bestanden maar 14 dagen op de buildpagina staan.

Volgende stap: installeer de Wear-apk op het horloge, zie [AAPS instellen op je Wear OS-horloge](WearOsSmartwatch.md).

(building-aaps-wear-os-android-studio)=

### Android Studio

De Wear-apk wordt net zo gebouwd als de telefoon-apk, als tweede ondertekende build. Doe dit direct na de telefoon-apk, met dezelfde versie van Android Studio en dezelfde keystore.

- Volg de instructies voor [Bouwen met Android Studio](../SettingUpAaps/ComputerBuild.md).
- Als je bij de [moduleselectie](#Building-APK-wearapk) in "De ondertekende AAPS-apk bouwen" komt, kies dan **`AndroidAPS.wear`**.

![Wear-module](../images/Building-the-App/wear_build1.png)

Kies "**fullRelease**" om het **AAPS** Wear-apk-bestand te maken.

![Wear-module](../images/Building-the-App/wear_build2.png)

Als je wilt, kun je in plaats daarvan **“pumpcontrolRelease”** bouwen uit het keuzemenu. Daarmee kun je de pomp alleen op afstand bedienen, maar zonder te loopen.

Volgende stap: installeer de Wear-apk op het horloge, zie [AAPS instellen op je Wear OS-horloge](WearOsSmartwatch.md).

(building-aaps-wear-os-troubleshooting)=

#### Probleemoplossing bij het bouwen met Android Studio

Tijdens het bouwen van de volledige **AAPS**-app (en eigenlijk elke ondertekende app) maakt Android Studio een .json-bestand in dezelfde map. Dit geeft dan fouten met [niet-gecommitte wijzigingen](#troubleshooting_androidstudio-uncommitted-changes) als je de volgende ondertekende app probeert te bouwen, zoals de **AAPS** Wear-app. De snelste oplossing is om naar de map te gaan waarin de volledige AAPS-app gebouwd is. Je map ziet er waarschijnlijk ongeveer zo uit:

`C:\Users\Your Name\AndroidStudioProjects\AndroidAPS\app\aapsclient\release.`

Verwijder het overbodige .json-bestand, of verplaats het uit de map. Probeer daarna de **AAPS** Wear-app opnieuw te bouwen. Werkt dat niet, dan helpt de uitgebreidere [handleiding voor probleemoplossing](../GettingHelp/TroubleshootingAndroidStudio.md) je om het bestand te vinden dat het probleem veroorzaakt. Dat kan ook je keystore-bestand zijn.

(building-aaps-wear-os-cli)=

### Opdrachtregel

Volg de [Bouwinstructies voor de opdrachtregel](../SettingUpAaps/CLIBuild.md) en herhaal de stappen voor compileren en ondertekenen voor de module `wear`, met dezelfde keystore:

```sh
./gradlew :wear:assembleFullRelease
```

De niet-ondertekende Wear-apk wordt opgeslagen in `wear/build/outputs/apk/full/release/`. Onderteken hem met `apksigner`, precies zoals de telefoon-apk, en installeer hem daarna op het horloge, zie [AAPS instellen op je Wear OS-horloge](WearOsSmartwatch.md).
