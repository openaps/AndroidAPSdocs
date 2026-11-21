- - -
tocdepth: 1
- - -

# Opdateringer og ændringer i dokumentationen

## Oktober 2026

- [Build i browseren med AAPS Builder](#aaps-builder): build-workflow version 8, som nu vedligeholdes af AAPS-udviklerne i repositoryet [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder). Opsætningen har nu et trin mindre: [trin 1](#aaps-builder-step1) på [opsætningssiden](#aaps-builder-setup) opretter dit private repository som en kopi af det repository, med build-workflowet allerede i det, så du ikke længere skal tilføje et workflow. Fra nu af bliver byggetrinene opdateret for dig: dit repository kører den version, som AAPS-udviklerne har udgivet, ved hvert build, uden at du skal ændre noget (og stadig uden automatisk build). Selve buildet ændrer sig ikke, og dit eksisterende repository virker stadig. For at få disse automatiske opdateringer skal du udskifte din `.github/workflows/build.yml` én gang som forklaret i [Opdatering af AAPS](#aaps-builder-updates). Din secret `KEYSTORE_SET` forbliver, som den er. Det valgfrie [trin med Google Drive](#aaps-builder-google-drive) virker nu direkte på opsætningssiden, på en telefon eller en computer: ingen forberedelsesfil er nødvendig @psonnera
- [Smarture og AAPS](#watches-external-companion-apps): afsnittet **Samsung Tizen** hedder nu **Eksterne companion-apps** og viser de apps, der læser **AAPS**-broadcast (WatchDrip+, GlucoDataHandler, G-Watch). [WatchDrip+](#watches-xiaomi-amazfit) 0.5 og nyere forbinder direkte til **AAPS** uden xDrip+: trin til opsætning er tilføjet og også opsummeret i [Konfiguration](#external-companion-apps), [Wear OS](../WearOS/WearOsSmartwatch.md) og [Fjernovervågning](../RemoteFeatures/RemoteMonitoring.md). Bluejay-ure: GTS er udgået, den aktuelle model er opdateret @psonnera
- [Build i browseren med AAPS Builder](#aaps-builder): build-workflow version 6. Byggetrinene bruger nu præcise, gennemgåede versioner af GitHubs værktøjer og byggemaskine, og buildet forklarer tydeligt, når der er indsat forkert tekst i secret'en `KEYSTORE_SET`. [Opsætningssiden](#aaps-builder-setup) er nu en del af dokumentationen og bliver oversat. Den kontrollerer dit GitHub-brugernavn og har tydeligere hjælp til secret'en, »Page not found« (404) og GitHub-appen. Hvis din `.github/workflows/build.yml` siger version 5 eller tidligere, så udskift den som forklaret i [Opdatering af AAPS](#aaps-builder-updates) @psonnera
- [Webinstallationsprogram til AAPS](#web-installer): nu en side i dokumentationen, som bliver oversat ligesom de andre. Den gamle adresse virker stadig @psonnera
- [Build i browseren med AAPS Builder](#aaps-builder): build-workflow version 3 tilføjer varianten `aapsclient3Release` (**AAPSClient3**, AAPS 4.0 og nyere). For at bygge den skal du udskifte din `.github/workflows/build.yml` som forklaret i [Opdatering af AAPS](#aaps-builder-updates) @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md): fjernet den patchede Dexcom G7-app (DiaKEM), som ikke længere virker ved nye installationer @psonnera
- [Build i browseren med AAPS Builder](#aaps-builder): build-workflow version 2. Automatiske ugentlige builds er fjernet (ingen tidsplan, ingen variabler `AUTO_BUILD` / `AUTO_VARIANT`, ingen tags `built/…`): du starter selv hvert build med den version og variant, du vælger, og workflowet har kun læseadgang til dit repository. Hvis din `.github/workflows/build.yml` siger version 1, så udskift den som forklaret i [Opdatering af AAPS](#aaps-builder-updates). Tilføjet skærmbilleder for hvert trin @psonnera
- [Build i browseren med AAPS Builder](#aaps-builder): build-workflowet er nu en del af denne dokumentation. Intet skabelon-repository: du opretter et tomt privat repository og tilføjer workflowet fra opsætningssiden (nyt trin 2). Workflowet kontrollerer ikke længere et eksternt repository for opdateringer. Hvis du oprettede dit repository fra den tidligere skabelon, så udskift `.github/workflows/build.yml` med workflowet fra opsætningssiden som forklaret i [Opdatering af AAPS](#aaps-builder-updates) @psonnera
- Ny side [Build i browseren med AAPS Builder](#aaps-builder): byg AAPS fra en Android-telefon med en opsætningsside, der ligger på dette websted, med automatiske ugentlige builds og uden forberedelsesfil. Den erstatter Android-vejledningen til build i browseren (siderne om File Manager Plus er fjernet). AAPS Builder er lavet af @dio99, dokumentation af @psonnera

## August 2026

- [Overførsel og installation af AAPS på din telefon](../SettingUpAaps/TransferringAndInstallingAaps.md): siden *Android-udviklerverificering* er flettet ind i installationsvejledningen. Tilføjet [webinstallationsprogrammet](#android-developer-verification-web) (installer APK'en direkte fra browseren, undtaget fra verifikation) og trådløs ADB @psonnera

## Juli 2026

- [Introduktion til APS og AAPS](../Getting-Started/Introduction.md): gennemgang af nøjagtigheden i afsnittet om APS. Rettet titel og link til Frontiers-citatet, beskrevet det som baggrund og ikke som en aktuel markedsguide, opdateret udsagnene om dobbelthormon-systemer og fuldt lukket loop, gjort tydeligt at styreenheden ikke altid er en telefonapp, fjernet kommercielle mærkenavne og brugertal uden kilde, og rettet OS-AID til *Open-Source Automated Insulin Delivery* @psonnera
- [Ordliste](../UsefulLinks/Glossary.md): tilføjet opslagene **AID**, **FCL**, **HCL** og **OS-AID**, med krydshenvisninger fra **APS** og **Lukket loop** @psonnera
- Ny side [Android-udviklerverificering](#android-developer-verification): hvad Googles kommende krav om verifikation betyder for installation af apps, du selv har bygget, med gratis måder at installere på (ADB, avanceret forløb, konto med begrænset distribution) @psonnera

## Juni 2026

- [Build i browseren](#browser-build): omstruktureret til et forløb over flere sider, hvor du først træffer dine valg (Fork → keystore Mulighed 1/Mulighed 2 med en egen side for hver enhed → Google Drive → Byg → Fejlfinding). Indlejrede faner er fjernet, og installation af File Manager Plus er nu et tydeligt trin @psonnera
- [Introduktion til APS og AAPS](../Getting-Started/Introduction.md): begrebet er skiftet fra *DIY* til *OS-AID* (Open-Source Automated Insulin Delivery), tilføjet Trio og Stelo, opdateret tabellen over kompatible pumper/CGM'er @tmhastings

## Marts 2026

- [Tilføjet mulighed for build via kommandolinjen](../SettingUpAaps/CLIBuild.md) @je-l
- *Computer Build* er omdøbt til *Android Studio Build*. Filnavne bevares, så URL'er virker.

## Januar 2025

- Udgivelse af [3.4](#version3400) og samlet opdatering af dokumentationen (opsætningsguide, versioner til build med Android Studio, Konfiguration)
- Opdatering af CGM-listen. Dexcom G5, Tomato og Glimp er fjernet.
- [Brugerflade til rotation af indstikssted](#Aapsscreens-site-rotation)
- [Loop-tilstand](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## December 2025

- [Justering af din AAPS-profil](../GettingHelp/ProfileTuning.md) fra @robrub

## Oktober 2025

- DiaKEM: nye installationer virker ikke efter opgradering af serverne @psonnera
- Fjernet den patchede Libre 2-app (forældet): den virker ikke med nye sensorer @psonnera
- Siden om Omnipod DASH er omarbejdet @XiTatiON

## August 2025

- Opdaterede versioner og forudsætninger for Android Studio
- Tilføjet udgivelsen [3.3.2.1](#version3321), fjernet henvisninger til Android 16 (rettet)
- Tilføjet [Build i browseren](#browser-build) @Angus

## Maj 2025

- Tilføjet [side om opdatering til 3.2.0.4](#update-aaps-3204) @psonnera

## Januar 2025

- Hurtigbolus: [funktion med langt tryk](#Preferences-quick-wizard) @emilise
- Siden om [Dynamisk ISF](../DailyLifeWithAaps/DynamicISF.md) er skrevet om @emilise

## December 2024

- Dokumentation af [version 3.3](#version3300) @emilise

## November 2024

- Opdatering af [Din AAPS-profil](../SettingUpAaps/YourAapsProfile.md) @emilise
- Omorganisering af indholdet om [Wear OS-smarture](../WearOS/BuildingAapsWearOS.md) @psonnera

## Oktober 2024

- Opdatering af flere sider:
  - [Hvor lang tid tager det](#preparing-how-long-will-it-take), [Oversigt over komponenter](../Getting-Started/ComponentOverview.md), [Gennemførelse af læringsmålene](../SettingUpAaps/CompletingTheObjectives.md), [Din AAPS-profil](../SettingUpAaps/YourAapsProfile.md), [Konfiguration (Config Builder)](../SettingUpAaps/ConfigBuilder.md) & [Indstillinger](../SettingUpAaps/Preferences.md), [AAPS-skærme](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [COB-beregning](../DailyLifeWithAaps/CobCalculation.md), [Dynamisk ISF](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Byggevejledning til Android Studio Ladybug](../SettingUpAaps/BuildingAaps.md) @tanja
- Teknisk arbejde (udrulning af dokumentationen, organisering af filer ...) @psonnera & @emilise

***

Historik mangler fra marts 2022 til september 2024

Med omarbejdningen til 3.2 blev noget forældet information fjernet. Du kan finde den i den tidligere version af dokumentationen:

Dokumentationen til AAPS 3.1 findes [her](https://androidaps.readthedocs.io/en/3.1/index.html).

***

```{dropdown} Older updates (2019 to 2022)
**Februar 2022**

- [Advarselstegn for BS-kvalitet](#aaps-screens-bg-warning-sign) @tanja
- [Opdatering om Medtronic-pumpe](../CompatiblePumps/MedtronicPump.md) @dottedfingertips
- [Nødvendige kontroller efter opdatering til AAPS 3.0](Update3_0.md) @tanja
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) @Freloner @robertrub @vanelsberg
- Dokumentationen opdateret til AAPS 3.0 (delvist) @xJoe
- [Wear OS til AAPS 3.0](../WearOS/WearOsSmartwatch.md) @peterleimbach

**Januar 2022**

- [Fejlfinding i Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md) - opdatering @tanja

**December 2021**

- [Byg APK'en](../SettingUpAaps/BuildingAaps.md) - opdatering til Android Studio Arctic Fox | 2020.3.1 @tanja
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) information tilføjet @MilosKozak

**November 2021**

- God praksis for kalibrering af en Libre 2-sensor
- [ISF](../UsefulLinks/FAQ.md) ny formulering af virkningen
- Opdatering af [Fejlfinding i Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- Den patchede [Dexcom](../CompatibleCgms/DexcomG6.md)-app er fjernet, da den er forældet

**Oktober 2021**

- [Udgivelsesnoter](ReleaseNotes.md) AAPS 3.0 beta

**September 2021**

- Anbefalet computerspecifikation til at [bygge AAPS-appen](#Building-APK-recommended-specification-of-computer-for-building-apk-file)

**Juni 2021**

- [Sideload af urskive](../WearOS/WearOsSmartwatch.md)

**April 2021**

- Liste over [kommunikationsenheder](#CompatiblePumps-additional-communication-device) til Omnipod- og Medtronic-pumper
- AAPS-forudsigelser i [Nightscout](#Nightscout-manual-nightscout-setup)

**Marts 2021**

- Kommunikation mellem udviklere er flyttet fra gitter til [discord](https://discord.gg/4fQUWHZ4Mw)

**Februar 2021**

- Ny navigationslinje og [skift af sprog](../NavigateDoc/ChangeLanguageVersion.md)

**Januar 2021**

- [Fanen Handlinger](#screens-action-tab) - flere detaljer på siden »AAPS-skærme«
- Dexcom G6 med [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)
- Libre smart reader [batteriniveau](#screens-sensor-level-battery)
- [Læringsmål](#objectives-objective3) - nye spørgsmål
- Andre [nye funktioner i AAPS 2.8.0](#Releasenotes-version-2-8-0)

**December 2020**

- [Libre 2](../CompatibleCgms/Libre2.md) - den patchede app virker ikke med amerikanske sensorer
- [Faste grænser i OpenAPS](#Open-APS-features-overview-of-hard-coded-limits)
- Sony Smartwatch 3: manuel installation af Google Play-tjenester

**Oktober 2020**

- Accu-Chek Combo - opdatering om [justering af tid ved sommertid](#time-adjustment-daylight-savings-time-dst)
- Accu-Chek Insight - mulighed for at [uploade absolutte værdier](#Accu-Chek-Insight-Pump-settings-in-aaps)
- Logfiler - flere detaljer om [mappens placering](../GettingHelp/AccessingLogFiles.md)
- Omnipod Eros - statusopdatering
- [SMS-kommandoer - synkronisering af tid](../RemoteFeatures/SMSCommands.md)

**September 2020**

- Stor opdatering til den nye AAPS-version 2.7
- Se [udgivelsesnoterne](#Releasenotes-version-2-7-0) for detaljer

**Juni 2020**

- Libre 2 - flere detaljer om den patchede Libre Link-app & brug af Bluetooth-sendere
- [Skift af tidszone](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) med Libre 2

**Maj 2020**

- [Forlænget bolus kun til Dana- og Insight-pumper](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Insight: slå vibration fra](#Accu-Chek-Insight-Pump-vibration) (kun firmware 3.x)
- [Minimal ændring af anmodning](#Preferences-minimal-request-change) for at få færre notifikationer i åbent loop
- Patchet Libre Link-app - kontroller, om den er patchet korrekt
- [Prognoselinjer](#aaps-screens-prediction-lines) - flere detaljer

**April 2020**

- Tilbagedater insulin (f.eks. givet med sprøjte)
- Support til Android 6 ophører i den næste master-version

**Marts 2020**

- [Byg APK med Android Studio 3.6.1](../SettingUpAaps/BuildingAaps.md)
- [DanaRS med firmware v3](../CompatiblePumps/DanaRS-Insulin-Pump.md) **kan i øjeblikket ikke bruges med AAPS!**
- [Forlænget bolus og skift til åbent loop](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Opdater APK med Android Studio 3.6.1](../Maintenance/UpdateToNewVersion.md)

**Februar 2020**

- Forbehold ved automatisering
- [Autosens](#Open-APS-features-autosens) - kort forklaring
- Alternativer til Careportal
- Funktionen [Forlænget bolus](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) - lukket loop bliver deaktiveret
- Nyt [plugin Lokal profil](../SettingUpAaps/ConfigBuilder.md)
- Eksempel på opsætning - opdatering om Dexcom G6
- [Version 2.6.0](#Releasenotes-version-2-6-0) - store nye funktioner
- [Wear-komplikationer](../WearOS/WearOsSmartwatch.md)

**Januar 2020**

- [Manuel korrektion af kulhydrater](#screens-bolus-carbs) ved forkerte kulhydratindtastninger
- [Billedstørrelse](../SupportingAaps/HowToEditTheDocs.md) ved redigering af dokumentationen

**December 2019**

- [Android Auto](../RemoteFeatures/AndroidAuto.md) - opsætning med skærmbilleder
- [Accu-Chek Insight & Autotune](#Accu-Chek-Insight-Pump-settings-in-aaps) - løsning til brug
- [Glimp](#Config-Builder-bg-source) - version 4.15.57 og nyere understøttes
- [Urskiver](../WearOS/WearOsSmartwatch.md) - stor opdatering, mange flere detaljer
- [Komplikationer på urskiven](#Watchfaces-complications) - brug din yndlingsurskive med AAPS-data

**November 2019**

- [Automatisering - deaktiveres, når loopet deaktiveres](../DailyLifeWithAaps/Automations.md)
- [Dexcom G6 - opdatering om udskiftning af sender](#xdrip-replace-transmitter)
- [Forlænget bolus - hvorfor det ikke virker sammen med loop](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [FAQ - sport](#FAQ-sports)
- [Hovedskærm - linjer på grafen](#aaps-screens-main-graph)
- [Insight - deaktiver absolutte værdier i NS Client](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Medtronic-pumpe - mulige dobbelte registreringer](../CompatiblePumps/MedtronicPump.md)
- [Ny vejledning til Freestyle Libre 2](../CompatibleCgms/Libre2.md)
- [Profilskift med procent - eksempel](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
- [Opdatering af SMS-kommandoer](../RemoteFeatures/SMSCommands.md)
- [Fejlfinding i Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- [Fejlfinding - samling af links](../GettingHelp/GeneralTroubleshooting.md)
- Opdatering - hurtig gennemgang for erfarne brugere
- Dokumentation - opdatering af [redigering](#edit-the-docs-code-syntax) og [oversættelse](#translations-translation-of-the-documentation).

**Oktober 2019**

- Opdateringer til [AAPS version 2.5](#Releasenotes-version-2-5-0) (især på [siden om opdatering](../Maintenance/UpdateToNewVersion.md))
- [Accu-Chek Insight - indstillinger for log](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [COB-beregning på en egen side](../DailyLifeWithAaps/CobCalculation.md)
- [COB - registrering af forkerte COB-værdier](#CobCalculation-detection-of-wrong-cob-values)
- [Fejlfinding specifikt for Dexcom G6](#DexcomG6-troubleshooting-g6)
- [Læringsmål - opdatering til version 2.5](../SettingUpAaps/CompletingTheObjectives.md)
- [Opdatering af indstillinger](../SettingUpAaps/Preferences.md)
- [SGLT-2-hæmmere - må ikke bruges med loop](#PreparingForAaps-no-sglt-2-inhibitors)
- [Fejlfinding af SMS-kommandoer](#SMSCommands-troubleshooting)
- [xDrip - opdatering om udskiftning af G6-sender](#xdrip-replace-transmitter)

**September 2019**

- [Automatisering](../DailyLifeWithAaps/Automations.md)
- [Bolusberegner](#AapsScreens-wrong-cob-detection) - langsom kulhydratabsorption
- [Sikkerhed i Nightscout](#Nightscout-security-considerations)
- [Tidsforskydning af profil](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) (flere detaljer)
- [Fjernovervågning](../RemoteFeatures/RemoteMonitoring.md)
- [Hvad er et lukket loop-system?](#Introduction-what-does-hybrid-closed-loop-mean)

**August 2019**

- Region for den patchede Dexcom G6-app
- [Ny Dexcom G6-sender](#xdrip-connect-g6-transmitter-for-the-first-time) (»firefly« / 8G...)
- Hvad har jeg brug for? - ny struktur & yderligere information
- Ny struktur
```
