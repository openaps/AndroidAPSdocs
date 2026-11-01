# Oppdateringer og endringer i dokumentasjonen

## Oktober 2026

- [Nettleserbygg med AAPS Builder](#aaps-builder): byggearbeidsflyt versjon 8, nå vedlikeholdt av AAPS-utviklerne i repositoryet [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder). Oppsettet er ett steg kortere: [steg 1](#aaps-builder-step1) på [oppsettsiden](#aaps-builder-setup) lager det private repositoryet ditt som en kopi av det repositoryet, med byggearbeidsflyten allerede på plass, så det er ingen arbeidsflyt å legge til lenger. Fra nå av oppdateres byggestegene for deg: repositoryet ditt kjører versjonen som AAPS-utviklerne har gitt ut, ved hvert bygg, uten at du trenger å endre noe (og fortsatt ingen automatiske bygg). Selve bygget endres ikke, og det repositoryet du har fra før, fortsetter å virke. For å få disse automatiske oppdateringene, bytt ut `.github/workflows/build.yml` i repositoryet ditt én gang som forklart i [Oppdatering av AAPS](#aaps-builder-updates). Hemmeligheten `KEYSTORE_SET` beholdes som den er. Det valgfrie [Google Drive-steget](#aaps-builder-google-drive) virker nå på selve oppsettsiden, på en telefon eller en datamaskin: ingen forberedelsesfil trengs @psonnera
- [Smartklokker og AAPS](#watches-external-companion-apps): avsnittet **Samsung Tizen** blir til **Eksterne hjelpeapper** og lister opp appene som leser kringkastingen fra **AAPS** (WatchDrip+, GlucoDataHandler, G-Watch). [WatchDrip+](#watches-xiaomi-amazfit) 0.5 og nyere kobler seg direkte til **AAPS** uten xDrip+: oppsettsteg lagt til, også oppsummert i [Konfigurasjon](#external-companion-apps), [Wear OS](../WearOS/WearOsSmartwatch.md) og [Fjernovervåking](../RemoteFeatures/RemoteMonitoring.md). Bluejay-klokker: GTS er utgått, gjeldende modell oppdatert @psonnera
- [Nettleserbygg med AAPS Builder](#aaps-builder): byggearbeidsflyt versjon 6. Byggestegene bruker nå nøyaktige, gjennomgåtte versjoner av GitHubs verktøy og byggemaskin, og bygget forklarer tydelig når feil tekst ble limt inn i hemmeligheten `KEYSTORE_SET`. [Oppsettsiden](#aaps-builder-setup) er nå en del av dokumentasjonen og oversatt, sjekker GitHub-brukernavnet ditt og har tydeligere hjelp for hemmeligheten, «Page not found» (404) og GitHub-appen. Hvis `.github/workflows/build.yml` i repositoryet ditt sier versjon 5 eller eldre, bytt den ut som forklart i [Oppdatering av AAPS](#aaps-builder-updates) @psonnera
- [AAPS web-installer](#web-installer): er nå en side i dokumentasjonen og oversettes som de andre. Den gamle adressen virker fortsatt @psonnera
- [Nettleserbygg med AAPS Builder](#aaps-builder): byggearbeidsflyt versjon 3 legger til varianten `aapsclient3Release` (**AAPSClient3**, AAPS 4.0 og nyere). For å bygge den, bytt ut `.github/workflows/build.yml` i repositoryet ditt som forklart i [Oppdatering av AAPS](#aaps-builder-updates) @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md): fjernet den modifiserte Dexcom G7-appen (DiaKEM), som ikke lenger virker for nye installasjoner @psonnera
- [Nettleserbygg med AAPS Builder](#aaps-builder): byggearbeidsflyt versjon 2. Automatiske ukentlige bygg er fjernet (ingen tidsplan, ingen variabler `AUTO_BUILD` / `AUTO_VARIANT`, ingen `built/…`-tagger): hvert bygg startes av deg, med den versjonen og varianten du velger, og arbeidsflyten har bare lesetilgang til repositoryet ditt. Hvis `.github/workflows/build.yml` i repositoryet ditt sier versjon 1, bytt den ut som forklart i [Oppdatering av AAPS](#aaps-builder-updates). Lagt til skjermbilder for hvert steg @psonnera
- [Nettleserbygg med AAPS Builder](#aaps-builder): byggearbeidsflyten er nå en del av denne dokumentasjonen. Ikke lenger noe mal-repository: du lager et tomt privat repository og legger til arbeidsflyten fra oppsettsiden (nytt steg 2). Arbeidsflyten sjekker ikke lenger et eksternt repository for oppdateringer. Hvis du laget repositoryet ditt fra den tidligere malen, bytt ut `.github/workflows/build.yml` med arbeidsflyten fra oppsettsiden som forklart i [Oppdatering av AAPS](#aaps-builder-updates) @psonnera
- Ny side [Nettleserbygg med AAPS Builder](#aaps-builder): bygg AAPS fra en Android-telefon med en oppsettside som ligger på dette nettstedet, med automatiske ukentlige bygg og uten forberedelsesfil. Den erstatter Android-instruksjonene for nettleserbygget (sidene om File Manager Plus er fjernet). AAPS Builder er laget av @dio99, dokumentasjon @psonnera

## August 2026

- [Overføre og installere AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md): siden *Android-utviklerverifisering* er slått sammen med installasjonsveiledningen, lagt til [web-installeren](#android-developer-verification-web) (installer APK-filen rett fra nettleseren, unntatt fra verifisering) og trådløs ADB @psonnera

## Juli 2026

- [Introduksjon](../Getting-Started/Introduction.md): gjennomgang av APS-avsnittet for å sikre at det er korrekt. Rettet tittelen og lenken til Frontiers-artikkelen, omtaler den nå som bakgrunn og ikke som en oppdatert markedsoversikt, oppdaterte avsnittene om tohormonsystemer og full lukket loop, presiserte at kontrolleren ikke alltid er en telefonapp, fjernet kommersielle merkenavn og brukertall uten kilde, og rettet OS-AID til *Open-Source Automated Insulin Delivery* @psonnera
- [Ordliste](../UsefulLinks/Glossary.md): lagt til oppføringene **AID**, **FCL**, **HCL** og **OS-AID**, med kryssreferanser fra **APS** og **Closed Loop** @psonnera
- Ny side [Android-utviklerverifisering](#android-developer-verification): hva Googles kommende krav om verifisering betyr for installasjon av apper du bygger selv, med gratis installasjonsmetoder (ADB, avansert flyt, konto for begrenset distribusjon) @psonnera

## Juni 2026

- [Nettleserbygg](#browser-build): omstrukturert til en flyt over flere sider der du først tar valgene (Fork → keystore-fil alternativ 1/alternativ 2 med en egen side per enhet → Google Drive → Bygg → Feilsøking); fjernet faner inni faner og gjorde installasjonen av File Manager Plus til et tydelig steg @psonnera
- [Introduksjon](../Getting-Started/Introduction.md): terminologien er byttet fra *DIY* til *OS-AID* (Open-Source Automated Insulin Delivery), lagt til Trio og Stelo, oppdatert tabellen over kompatible pumper/CGM-er @tmhastings

## Mars 2026

- [Lagt til alternativet kommandolinjebygg](../SettingUpAaps/CLIBuild.md) @je-l
- *Datamaskinbygg* har fått nytt navn: *Android Studio-bygg*. Filnavnene beholdes i nettadressene.

## Januar 2025

- Versjon [3.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.4.0.0) og samlet oppdatering av dokumentasjonen (Boluskalkulator, versjoner for datamaskinbygg, Konfigurasjon)
- Oppdatering av CGM-listen. Dexcom G5, Tomato og Glimp fjernet.
- [Brukergrensesnitt for rotasjon av sted](#Aapsscreens-site-rotation)
- [Kjøremodus](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## Desember 2025

- [Justering av AAPS-profilen](../GettingHelp/ProfileTuning.md) fra @robrub

## Oktober 2025

- DiaKEM: nye installasjoner virker ikke etter oppgraderingen av serverne @psonnera
- Fjernet den modifiserte Libre 2-appen (utdatert): den virker ikke med nye sensorer @psonnera
- Omarbeidet siden om Omnipod DASH @XiTatiON

## August 2025

- Oppdaterte versjoner og krav til Android Studio
- Lagt til versjon [3.3.2.1](#version3321), fjernet henvisninger til Android 16 (rettet)
- Lagt til [Nettleserbygg](#browser-build) @Angus

## Mai 2025

- Lagt til [siden om oppgradering til 3.2.0.4](#update-aaps-3204) @psonnera

## Januar 2025

- Hurtigknapp – [funksjonen trykk og hold](#Preferences-quick-wizard) @emilise
- Siden [Dynamisk ISF (DynISF)](../DailyLifeWithAaps/DynamicISF.md) er skrevet om @emilise

## Desember 2024

- Dokumentasjon av [versjon 3.3](#version3300) @emilise

## November 2024

- Oppdatering av [Din AAPS-profil](../SettingUpAaps/YourAapsProfile.md) @emilise
- Omorganisering av innholdet om [Wear OS-smartklokker](../WearOS/BuildingAapsWearOS.md) @psonnera

## Oktober 2024

- Oppdatering av flere sider:
  - [Hvor lang tid tar det](#preparing-how-long-will-it-take), [Oversikt over komponentene](../Getting-Started/ComponentOverview.md), [Opplæringsmålene](../SettingUpAaps/CompletingTheObjectives.md), [Din AAPS-profil](../SettingUpAaps/YourAapsProfile.md), [Konfigurasjon (Config Builder)](../SettingUpAaps/ConfigBuilder.md) & [Innstillinger](../SettingUpAaps/Preferences.md), [AAPS-skjermbilder](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [COB-beregning](../DailyLifeWithAaps/CobCalculation.md), [Dynamisk ISF (DynISF)](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Byggeinstruksjoner for Android Studio Ladybug](../SettingUpAaps/BuildingAaps.md) @tanja
- Teknisk arbeid (publiseringsprosessen for dokumentasjonen, organisering av filer ...) @psonnera & @emilise

***

Historikken fra mars 2022 til september 2024 mangler

Med omarbeidingen for 3.2 ble noe utdatert informasjon fjernet. Du finner den i den forrige versjonen av dokumentasjonen:

Dokumentasjonen for AAPS 3.1 er tilgjengelig [her](https://androidaps.readthedocs.io/en/3.1/index.html).

***

## Februar 2022

- [Varselsymbol for BS-kvalitet](#aaps-screens-bg-warning-sign) @tanja
- [Oppdatering for Medtronic-pumper](../CompatiblePumps/MedtronicPump.md) @dottedfingertips
- [Nødvendige kontroller etter oppdatering til AAPS 3.0](Update3_0.md) @tanja
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) @Freloner @robertrub @vanelsberg
- Oppdatering av dokumentasjonen for AAPS 3.0 (delvis) @xJoe
- [Wear OS for AAPS 3.0](../WearOS/WearOsSmartwatch.md) @peterleimbach

## Januar 2022

- [Feilsøking av Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md) – oppdatering @tanja

## Desember 2021

- [Bygge APK-filen](../SettingUpAaps/BuildingAaps.md) – oppdatering for Android Studio Arctic Fox | 2020.3.1 @tanja
- Informasjon om [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) lagt til @MilosKozak

## November 2021

- Beste praksis for kalibrering av en Libre 2-sensor
- [ISF](../UsefulLinks/FAQ.md) – ny formulering av virkningen
- Oppdatering av [Feilsøking av Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- Fjernet den modifiserte [Dexcom](../CompatibleCgms/DexcomG6.md)-appen, siden den er utdatert

## Oktober 2021

- [Versjonsnotater](ReleaseNotes.md) for AAPS 3.0 beta

## September 2021

- Anbefalt datamaskin for å [bygge AAPS-appen](#Building-APK-recommended-specification-of-computer-for-building-apk-file)

## Juni 2021

- [Installere urskiver fra en fil (sideload)](../WearOS/WearOsSmartwatch.md)

## April 2021

- Liste over [kommunikasjonsenheter](#CompatiblePumps-additional-communication-device) for Omnipod- og Medtronic-pumper
- AAPS-prediksjoner i [Nightscout](#Nightscout-manual-nightscout-setup)

## Mars 2021

- Kommunikasjonen mellom utviklerne er flyttet fra gitter til [discord](https://discord.gg/4fQUWHZ4Mw)

## Februar 2021

- Ny navigasjonslinje og [språkvelger](../NavigateDoc/ChangeLanguageVersion.md)

## Januar 2021

- [Handlinger-fanen](#screens-action-tab) – flere detaljer på siden «AAPS-skjermbilder»
- Dexcom G6 med [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)
- [Batterinivå](#screens-sensor-level-battery) for Libre smart reader
- [Opplæringsmål](#objectives-objective3) – nye spørsmål
- Andre [nye funksjoner i AAPS 2.8.0](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.0)

## Desember 2020

- [Libre 2](../CompatibleCgms/Libre2.md) – den modifiserte appen virker ikke med amerikanske sensorer
- [Faste grenser i OpenAPS](#Open-APS-features-overview-of-hard-coded-limits)
- Sony Smartwatch 3 – manuell installasjon av Google Play Service

## Oktober 2020

- Accu-Chek Combo – oppdatering om [tidsjustering ved sommertid](#time-adjustment-daylight-savings-time-dst)
- Accu-Chek Insight – valg for å [laste opp absolutte verdier](#Accu-Chek-Insight-Pump-settings-in-aaps)
- Logger – flere detaljer om [plasseringen av mappen](../GettingHelp/AccessingLogFiles.md)
- Omnipod Eros – statusoppdatering
- [SMS-kommandoer – tidssynkronisering](../RemoteFeatures/SMSCommands.md)

## September 2020

- Stor oppdatering for den nye AAPS-versjonen 2.7
- For detaljer, se [versjonsnotatene](https://github.com/nightscout/AndroidAPS/releases/tag/2.7.0)

## Juni 2020

- Libre 2 – flere detaljer om den modifiserte Libre Link-appen & bruk av Bluetooth-sendere
- [Reise mellom tidssoner](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) med Libre 2

## Mai 2020

- [Forlenget bolus bare for Dana- og Insight-pumper](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Insight – slå av vibrasjon](#Accu-Chek-Insight-Pump-vibration) (bare fastvare 3.x)
- [Minste endring for forespørsel](#Preferences-minimal-request-change) for å få færre varsler i åpen loop
- Modifisert Libre Link-app – sjekk at den er riktig modifisert
- [Prediksjonslinjer](#aaps-screens-prediction-lines) – flere detaljer

## April 2020

- Registrere insulin tilbake i tid (for eksempel gitt med sprøyte)
- Støtten for Android 6 fjernes i neste master-versjon

## Mars 2020

- [Bygge APK-filen med Android Studio 3.6.1](../SettingUpAaps/BuildingAaps.md)
- [DanaRS med fastvare v3](../CompatiblePumps/DanaRS-Insulin-Pump.md) **kan for tiden ikke brukes med AAPS!**
- [Forlenget bolus og bytte til åpen loop](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Oppdatere APK-filen med Android Studio 3.6.1](../Maintenance/UpdateToNewVersion.md)

## Februar 2020

- Forbehold for automasjon
- [Autosens](#Open-APS-features-autosens) – kort forklaring
- Alternativer til helseportalen
- Funksjonen [forlenget bolus](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) – lukket loop blir deaktivert
- Ny [plugin for lokal profil](../SettingUpAaps/ConfigBuilder.md)
- Eksempeloppsett – oppdatering for Dexcom G6
- [Versjon 2.6.0](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-260) – store nye funksjoner
- [Komplikasjoner på klokken](../WearOS/WearOsSmartwatch.md)

## Januar 2020

- [Manuell korrigering av karbohydrater](#screens-bolus-carbs) for feil karboregistreringer
- [Bildestørrelse](../SupportingAaps/HowToEditTheDocs.md) når du redigerer dokumentasjonen

## Desember 2019

- [Android Auto](../RemoteFeatures/AndroidAuto.md) – oppsett med skjermbilder
- [Accu-Chek Insight & Autotune](#Accu-Chek-Insight-Pump-settings-in-aaps) – løsning for å kunne bruke dem sammen
- [Glimp](#Config-Builder-bg-source) – versjon 4.15.57 og nyere støttes
- [Urskiver](../WearOS/WearOsSmartwatch.md) – stor oppdatering, mange flere detaljer
- [Komplikasjoner på urskiven](#Watchfaces-complications) – bruk favoritturskiven din med data fra AAPS

## November 2019

- [Automasjon – deaktiveres når loopen deaktiveres](../DailyLifeWithAaps/Automations.md)
- [Dexcom G6 – oppdatering om bytte av sender](#xdrip-replace-transmitter)
- [Forlenget bolus – hvorfor den ikke virker sammen med loopen](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [FAQ – sport](#FAQ-sports)
- [Hovedskjermen – linjer på grafen](#aaps-screens-main-graph)
- [Insight – deaktiver absolutte verdier i NS Client](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Medtronic-pumpe – mulige doble registreringer](../CompatiblePumps/MedtronicPump.md)
- [Ny veiledning for Freestyle Libre 2](../CompatibleCgms/Libre2.md)
- [Profilbytte med prosent – eksempel](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
- [Oppdatering av SMS-kommandoer](../RemoteFeatures/SMSCommands.md)
- [Feilsøking av Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- [Feilsøking – samling av lenker](../GettingHelp/GeneralTroubleshooting.md)
- Oppdatering – kort gjennomgang for erfarne brukere
- Dokumentasjonen – oppdatering om [redigering](#edit-the-docs-code-syntax) og [oversetting](#translations-translation-of-the-documentation).

## Oktober 2019

- Oppdateringer for [AAPS versjon 2.5](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-250) (særlig på [oppdateringssiden](../Maintenance/UpdateToNewVersion.md))
- [AccuChek Insight – loggvalg](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [COB-beregning på egen side](../DailyLifeWithAaps/CobCalculation.md)
- [COB – feil deteksjon av COB-verdi](#CobCalculation-detection-of-wrong-cob-values)
- [Feilsøking spesielt for Dexcom G6](#DexcomG6-troubleshooting-g6)
- [Opplæringsmål – oppdatering for versjon 2.5](../SettingUpAaps/CompletingTheObjectives.md)
- [Oppdatering av innstillinger](../SettingUpAaps/Preferences.md)
- [SGLT-2-hemmere – ikke bruk dem når du looper](#PreparingForAaps-no-sglt-2-inhibitors)
- [Feilsøking av SMS-kommandoer](#SMSCommands-troubleshooting)
- [xDrip – oppdatering om bytte av G6-sender](#xdrip-replace-transmitter)

## September 2019

- [Automatiser](../DailyLifeWithAaps/Automations.md)
- [Boluskalkulator](#AapsScreens-wrong-cob-detection) – langsomt karbohydratopptak
- [Sikkerhet i Nightscout](#Nightscout-security-considerations)
- [Tidsforskyving av profil](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) (flere detaljer)
- [Fjernovervåking](../RemoteFeatures/RemoteMonitoring.md)
- [Hva er et lukket loop-system?](#Introduction-what-does-hybrid-closed-loop-mean)

## August 2019

- Region for den modifiserte Dexcom G6-appen
- [Ny Dexcom G6-sender](#xdrip-connect-g6-transmitter-for-the-first-time) («firefly» / 8G...)
- Hva trenger jeg? – ny struktur & mer informasjon
- Ny struktur
