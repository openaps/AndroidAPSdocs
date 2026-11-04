- - -
tocdepth: 1
- - -

# Uppdateringar och ändringar i dokumentationen

## Oktober 2026

- [Bygge i webbläsaren med AAPS Builder](#aaps-builder): version 8 av byggarbetsflödet, som nu underhålls av AAPS-utvecklarna i repot [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder). Inställningen har ett steg mindre: [steg 1](#aaps-builder-step1) på [inställningssidan](#aaps-builder-setup) skapar ditt privata repo som en kopia av det repot, med byggarbetsflödet redan på plats. Du behöver alltså inte längre lägga till något arbetsflöde. Från och med nu uppdateras byggstegen åt dig: ditt repo kör den version som AAPS-utvecklarna har släppt vid varje bygge, utan att du behöver ändra något (och fortfarande inget automatiskt bygge). Själva bygget ändras inte, och ditt befintliga repo fortsätter att fungera. För att få dessa automatiska uppdateringar, ersätt din `.github/workflows/build.yml` en gång enligt [Uppdatera AAPS](#aaps-builder-updates). Din hemlighet `KEYSTORE_SET` förblir som den är. Det valfria [steget Google Drive](#aaps-builder-google-drive) fungerar nu direkt på inställningssidan, på en telefon eller en dator: ingen förberedelsefil behövs @psonnera
- [Smartklockor och AAPS](#watches-external-companion-apps): avsnittet **Samsung Tizen** heter nu **Externa hjälpappar** och listar apparna som läser sändningen från **AAPS** (WatchDrip+, GlucoDataHandler, G-Watch). [WatchDrip+](#watches-xiaomi-amazfit) 0.5 och senare ansluter direkt till **AAPS** utan xDrip+: steg för inställning tillagda, också sammanfattade i [Konfiguration](#external-companion-apps), [Wear OS](../WearOS/WearOsSmartwatch.md) och [Fjärrövervakning](../RemoteFeatures/RemoteMonitoring.md). Bluejay-klockor: GTS har slutat tillverkas, nuvarande modell uppdaterad @psonnera
- [Bygge i webbläsaren med AAPS Builder](#aaps-builder): version 6 av byggarbetsflödet. Byggstegen använder nu exakta, granskade versioner av GitHubs verktyg och byggmaskin. Bygget förklarar också tydligt när fel text har klistrats in i hemligheten `KEYSTORE_SET`. [Inställningssidan](#aaps-builder-setup) är nu en del av dokumentationen och översatt. Den kontrollerar ditt användarnamn på GitHub och har tydligare hjälp om hemligheten, "Page not found" (404) och GitHub-appen. Om det står version 5 eller tidigare i din `.github/workflows/build.yml`, ersätt den enligt [Uppdatera AAPS](#aaps-builder-updates) @psonnera
- [AAPS webbinstallerare](#web-installer): nu en sida i dokumentationen, översatt som de andra. Den gamla adressen fungerar fortfarande @psonnera
- [Bygge i webbläsaren med AAPS Builder](#aaps-builder): version 3 av byggarbetsflödet lägger till varianten `aapsclient3Release` (**AAPSClient3**, AAPS 4.0 och senare). För att bygga den, ersätt din `.github/workflows/build.yml` enligt [Uppdatera AAPS](#aaps-builder-updates) @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md): tagit bort den patchade Dexcom G7-appen (DiaKEM), som inte längre fungerar för nya installationer @psonnera
- [Bygge i webbläsaren med AAPS Builder](#aaps-builder): version 2 av byggarbetsflödet. Automatiska veckobyggen är borttagna (inget schema, inga variabler `AUTO_BUILD` / `AUTO_VARIANT`, inga taggar `built/…`): du startar varje bygge själv, med den version och variant du väljer, och arbetsflödet har bara läsbehörighet till ditt repo. Om det står version 1 i din `.github/workflows/build.yml`, ersätt den enligt [Uppdatera AAPS](#aaps-builder-updates). Skärmbilder tillagda för varje steg @psonnera
- [Bygge i webbläsaren med AAPS Builder](#aaps-builder): byggarbetsflödet är nu en del av denna dokumentation. Inget mallrepo: du skapar ett tomt privat repo och lägger till arbetsflödet från inställningssidan (nytt steg 2). Arbetsflödet letar inte längre efter uppdateringar i ett externt repo. Om du skapade ditt repo från den tidigare mallen, ersätt `.github/workflows/build.yml` med arbetsflödet från inställningssidan enligt [Uppdatera AAPS](#aaps-builder-updates) @psonnera
- Ny sida [Bygge i webbläsaren med AAPS Builder](#aaps-builder): bygg AAPS från en Android-telefon med en inställningssida på denna webbplats, med automatiska veckobyggen och utan förberedelsefil. Den ersätter Android-instruktionerna för bygge i webbläsaren (sidorna om File Manager Plus borttagna). AAPS Builder skapat av @dio99, dokumentation av @psonnera

## Augusti 2026

- [Överföra och installera AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md): sidan *verifiering av Android-utvecklare* är nu en del av installationsguiden. Lagt till [webbinstalleraren](#android-developer-verification-web) (installera APK-filen direkt från webbläsaren, undantagen från verifiering) och trådlös ADB @psonnera

## Juli 2026

- [Introduktion](../Getting-Started/Introduction.md): granskning av korrektheten i avsnittet om APS. Rättat titel och länk för källan från Frontiers och beskrivit den som bakgrund i stället för en aktuell guide till marknaden. Uppdaterat påståendena om dubbelhormonsystem och helt sluten loop, förtydligat att styrenheten inte alltid är en app i telefonen, tagit bort kommersiella varumärken och antal användare utan källa, och rättat OS-AID till *Open-Source Automated Insulin Delivery* @psonnera
- [Ordlista](../UsefulLinks/Glossary.md): lagt till posterna **AID**, **FCL**, **HCL** och **OS-AID**, med länkar från **APS** och **Closed Loop** @psonnera
- Ny sida [verifiering av Android-utvecklare](#android-developer-verification): hur Googles kommande krav på verifiering påverkar installationen av appar som du byggt själv, med gratis sätt att installera (ADB, avancerat flöde, konto för begränsad distribution) @psonnera

## Juni 2026

- [Bygge i webbläsaren](#browser-build): omstrukturerat till ett flöde på flera sidor där du först fattar beslut (Fork → keystore Alternativ 1/Alternativ 2 med en egen sida per enhet → Google Drive → Bygge → Felsökning). Kapslade flikar borttagna och installationen av File Manager Plus är nu ett tydligt steg @psonnera
- [Introduktion](../Getting-Started/Introduction.md): terminologin ändrad från *DIY* till *OS-AID* (Open-Source Automated Insulin Delivery), lagt till Trio och Stelo, uppdaterat tabellen över kompatibla pumpar/CGM @tmhastings

## Mars 2026

- [Lagt till bygge från kommandoraden (CLI)](../SettingUpAaps/CLIBuild.md) @je-l
- Bytt namn från *Bygge på dator* till *Bygge med Android Studio*. Behåller filnamnen i URL:er.

## Januari 2025

- Version [3.4](#version3400) och samlad uppdatering av dokumentationen (guide, versioner för bygge på dator, Konfiguration)
- Uppdaterad lista över CGM. Dexcom G5, Tomato och Glimp borttagna.
- [Gränssnitt för platsrotation](#Aapsscreens-site-rotation)
- [Körläge](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## December 2025

- [Finjustering av profilen](../GettingHelp/ProfileTuning.md) av @robrub

## Oktober 2025

- DiaKEM: nya installationer fungerar inte efter uppgradering av servrarna @psonnera
- Tagit bort patchad app för Libre 2 (föråldrad): den fungerar inte med nya sensorer @psonnera
- Gjort om sidan om Omnipod DASH @XiTatiON

## Augusti 2025

- Uppdaterade versioner och krav för Android Studio
- Lagt till versionen [3.3.2.1](#version3321), tagit bort hänvisningar till Android 16 (åtgärdat)
- Lagt till [Bygge i webbläsaren](#browser-build) @Angus

## Maj 2025

- Lagt till [sida om uppgradering till 3.2.0.4](#update-aaps-3204) @psonnera

## Januari 2025

- [Funktion för långt tryck](#Preferences-quick-wizard) på snabbknappar @emilise
- Sidan [DynamicISF](../DailyLifeWithAaps/DynamicISF.md) har skrivits om @emilise

## December 2024

- Dokumentation av [version 3.3](#version3300) @emilise

## November 2024

- Uppdatering av [Din AAPS-profil](../SettingUpAaps/YourAapsProfile.md) @emilise
- Omorganisation av innehållet om [Wear OS-smartklockor](../WearOS/BuildingAapsWearOS.md) @psonnera

## Oktober 2024

- Uppdatering av flera sidor:
  - [Hur lång tid tar det](#preparing-how-long-will-it-take), [Översikt över komponenterna](../Getting-Started/ComponentOverview.md), [Slutföra målen](../SettingUpAaps/CompletingTheObjectives.md), [Din AAPS-profil](../SettingUpAaps/YourAapsProfile.md), [Konfiguration](../SettingUpAaps/ConfigBuilder.md) och [Inställningar](../SettingUpAaps/Preferences.md), [AAPS-skärmar](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [Beräkning av COB](../DailyLifeWithAaps/CobCalculation.md), [Dynamisk ISF](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Instruktioner för att bygga med Android Studio Ladybug](../SettingUpAaps/BuildingAaps.md) @tanja
- Tekniskt arbete (process för att publicera dokumentationen, organisation av filer...) @psonnera och @emilise

***

Historik saknas från mars 2022 till september 2024

När version 3.2 gjordes om togs en del föråldrad information bort. Du hittar den i den tidigare versionen av dokumentationen:

Dokumentationen för AAPS 3.1 finns [här](https://androidaps.readthedocs.io/en/3.1/index.html).

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
