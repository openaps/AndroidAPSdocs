- - -
tocdepth: 1
- - -

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

- Versjon [3.4](#version3400) og samlet oppdatering av dokumentasjonen (Boluskalkulator, versjoner for datamaskinbygg, Konfigurasjon)
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

```{dropdown} Older updates (2019 to 2022)
**February 2022**

- [BG quality warning sign](#aaps-screens-bg-warning-sign) @tanja
- [Medtronic pump update](../CompatiblePumps/MedtronicPump.md) @dottedfingertips
- [Necessary checks after update to AAPS 3.0](Update3_0.md) @tanja
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) @Freloner @robertrub @vanelsberg
- Update docs for AAPS 3.0 (partly) @xJoe
- [Wear OS for AAPS 3.0](../WearOS/WearOsSmartwatch.md) @peterleimbach

**January 2022**

- [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md) - update @tanja

**December 2021**

- [Building the APK](../SettingUpAaps/BuildingAaps.md) - update Android Studio Arctic Fox | 2020.3.1 @tanja
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) information added @MilosKozak

**November 2021**

- Best practices for calibrating a Libre 2 sensor
- [ISF](../UsefulLinks/FAQ.md) reformulation of impact
- Update [troubleshooting Android studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- Removed patched [Dexcom](../CompatibleCgms/DexcomG6.md) app as it is obsolete

**October 2021**

- [Release notes](ReleaseNotes.md) AAPS 3.0 beta

**September 2021**

- Recommended computer specification to [build AAPS app](#Building-APK-recommended-specification-of-computer-for-building-apk-file)

**June 2021**

- [Watchface sideload](../WearOS/WearOsSmartwatch.md)

**April 2021**

- List of [communication devices](#CompatiblePumps-additional-communication-device) for Omnipod and Medtronic pumps
- AAPS predictions in [Nightscout](#Nightscout-manual-nightscout-setup)

**March 2021**

- Dev communication moved from gitter to [discord](https://discord.gg/4fQUWHZ4Mw)

**February 2021**

- New navigation bar and [language switch](../NavigateDoc/ChangeLanguageVersion.md)

**January 2021**

- [Action tab](#screens-action-tab) - more details on page 'AAPS screens'
- Dexcom G6 with [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)
- Libre smart reader [battery level](#screens-sensor-level-battery)
- [Objectives](#objectives-objective3) - new questions
- Other [new AAPS 2.8.0 functions](#Releasenotes-version-2-8-0)

**December 2020**

- [Libre 2](../CompatibleCgms/Libre2.md) - patched app does not work with US sensors
- [OpenAPS hard-coded limits](#Open-APS-features-overview-of-hard-coded-limits)
- Sony Smartwatch 3 Manual Installation of Google Play Service

**October 2020**

- Accu-Chek Combo - update [time adjustment daylight savings time](#time-adjustment-daylight-savings-time-dst)
- Accu-Chek Insight - Option to [upload absolute values](#Accu-Chek-Insight-Pump-settings-in-aaps)
- Logs - more details about [folder location](../GettingHelp/AccessingLogFiles.md)
- Omnipod Eros - status update
- [SMS commands - time sync](../RemoteFeatures/SMSCommands.md)

**September 2020**

- Major update for new AAPS version 2.7
- For details see the [release notes](#Releasenotes-version-2-7-0)

**June 2020**

- Libre 2 - more details patched Libre Link app & use of Bluetooth transmitters
- [Time zone traveling](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) with Libre 2

**May 2020**

- [Extended bolus only for Dana + Insight pumps](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Insight deactivate vibration](#Accu-Chek-Insight-Pump-vibration) (firmware 3.x only)
- [Minimal request rate](#Preferences-minimal-request-change) to reduce number of notifications in open loop mode
- Patched Libre Link app - check if correctly patched
- [Prediction lines](#aaps-screens-prediction-lines) - more details

**April 2020**

- Backdate insulin (i.e. given by syringe)
- Android 6 support will be discontinued in next master version

**March 2020**

- [Build apk with Android Studio 3.6.1](../SettingUpAaps/BuildingAaps.md)
- [DanaRS with firmware v3](../CompatiblePumps/DanaRS-Insulin-Pump.md) **cannot currently be used with AAPS!**
- [Extended bolus and switch to open loop](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Update apk with Android Studio 3.6.1](../Maintenance/UpdateToNewVersion.md)

**February 2020**

- Automation caveats
- [Autosens](#Open-APS-features-autosens) - short explanation
- Careportal alternatives
- [Extended bolus](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) feature - closed loop will be disabled
- New [Local Profile plugin](../SettingUpAaps/ConfigBuilder.md)
- Sample Setup - update Dexcom G6
- [Version 2.6.0](#Releasenotes-version-2-6-0) - major new features
- [Wear complications](../WearOS/WearOsSmartwatch.md)

**January 2020**

- [Manual carb correction](#screens-bolus-carbs) for faulty carb entries
- [Image size](../SupportingAaps/HowToEditTheDocs.md) when editing docs

**December 2019**

- [Android Auto](../RemoteFeatures/AndroidAuto.md) - setup with screenshots
- [Accu-Chek Insight & Autotune](#Accu-Chek-Insight-Pump-settings-in-aaps) - workaround for usage
- [Glimp](#Config-Builder-bg-source) - version 4.15.57 and newer supported
- [Watchfaces](../WearOS/WearOsSmartwatch.md) - major update, way more details
- [Watchface complications](#Watchfaces-complications) - use your favorite watchface with AAPS data

**November 2019**

- [Automation - deactivate when disabling loop](../DailyLifeWithAaps/Automations.md)
- [Dexcom G6 replace transmitter update](#xdrip-replace-transmitter)
- [Extended bolus - why they do not work in a loop context](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [FAQ - sports](#FAQ-sports)
- [Homescreen - lines on graph](#aaps-screens-main-graph)
- [Insight - Disable absolute values in NS Client](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Medtronic pump - possible double entries](../CompatiblePumps/MedtronicPump.md)
- [New Freestyle Libre 2 tutorial](../CompatibleCgms/Libre2.md)
- [Profile switch with percentage - example](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
- [SMS commands update](../RemoteFeatures/SMSCommands.md)
- [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- [Troubleshooting - link collection](../GettingHelp/GeneralTroubleshooting.md)
- Update - quick walk-through for experienced users
- Docs - update [edit](#edit-the-docs-code-syntax) and [translation](#translations-translation-of-the-documentation).

**October 2019**

- [AAPS version 2.5](#Releasenotes-version-2-5-0) updates (especially on [update page](../Maintenance/UpdateToNewVersion.md))
- [Accu-Chek Insight - log options](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [COB calculation on separate page](../DailyLifeWithAaps/CobCalculation.md)
- [COB - wrong COB value detection](#CobCalculation-detection-of-wrong-cob-values)
- [Dexcom G6 specific troubleshooting](#DexcomG6-troubleshooting-g6)
- [Objectives update version 2.5](../SettingUpAaps/CompletingTheObjectives.md)
- [Preferences update](../SettingUpAaps/Preferences.md)
- [SGLT-2 inhibitors - do not use when looping](#PreparingForAaps-no-sglt-2-inhibitors)
- [SMS Commands Troubleshooting](#SMSCommands-troubleshooting)
- [xDrip - update G6 transmitter replacement](#xdrip-replace-transmitter)

**September 2019**

- [Automate](../DailyLifeWithAaps/Automations.md)
- [Bolus calculator](#AapsScreens-wrong-cob-detection) - slow carb absorption
- [Nightscout security](#Nightscout-security-considerations)
- [Profile timeshift](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) (more details)
- [Remote monitoring](../RemoteFeatures/RemoteMonitoring.md)
- [What is a closed loop system?](#Introduction-what-does-hybrid-closed-loop-mean)

**August 2019**

- Dexcom G6 patched app region
- [Dexcom G6 new transmitter](#xdrip-connect-g6-transmitter-for-the-first-time) ("firefly" / 8G...)
- What do I need? - new structure & additional information
- New structure
```
