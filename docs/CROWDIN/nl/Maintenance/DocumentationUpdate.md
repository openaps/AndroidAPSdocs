- - -
tocdepth: 1
- - -

# Updates & wijzigingen in de documentatie

## Oktober 2026

- [Browser build with AAPS Builder](#aaps-builder): build workflow version 8, now maintained by the AAPS developers in the [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) repository. Setting up is one step shorter: [step 1](#aaps-builder-step1) of the [setup page](#aaps-builder-setup) creates your private repository as a copy of that repository, with the build workflow already in it, so there is no workflow to add any more. From now on the build steps are updated for you: your repository runs the version released by the AAPS developers at every build, without any change on your side (and still no automatic build). The build itself does not change, and your existing repository keeps working. To get these automatic updates, replace your `.github/workflows/build.yml` once as explained in [Updating AAPS](#aaps-builder-updates). Your `KEYSTORE_SET` secret stays as it is. The optional [Google Drive step](#aaps-builder-google-drive) now works on the setup page itself, on a phone or a computer: no preparation file needed @psonnera
- [Smartwatches en AAPS](#watches-external-companion-apps): het onderdeel **Samsung Tizen** heet nu **External Companion Apps** (externe hulp-apps) en noemt de apps die de **AAPS**-broadcast lezen (WatchDrip+, GlucoDataHandler, G-Watch). [WatchDrip+](#watches-xiaomi-amazfit) 0.5 en later maakt direct verbinding met **AAPS** zonder xDrip+: stappen voor het instellen toegevoegd, ook kort beschreven bij [Configuratie](#external-companion-apps), [Wear OS](../WearOS/WearOsSmartwatch.md) en [Volgen op afstand](../RemoteFeatures/RemoteMonitoring.md). Bluejay-horloges: GTS niet meer leverbaar, huidig model bijgewerkt @psonnera
- [Bouwen in de browser met AAPS Builder](#aaps-builder): build-workflow versie 6. De bouwstappen gebruiken nu exacte, gecontroleerde versies van de tools en de build-machine van GitHub. De build legt duidelijk uit wanneer de verkeerde tekst in het secret `KEYSTORE_SET` is geplakt. De [instellingenpagina](#aaps-builder-setup) is nu deel van de documentatie en vertaald. Ze controleert je GitHub-gebruikersnaam en heeft duidelijkere hulp voor het secret, "Page not found" (404) en de GitHub-app. Staat er in je `.github/workflows/build.yml` versie 5 of ouder, vervang het bestand dan zoals uitgelegd in [AAPS bijwerken](#aaps-builder-updates) @psonnera
- [AAPS web installer](#web-installer): nu een pagina van de documentatie, vertaald zoals de andere. Het oude adres werkt nog steeds @psonnera
- [Bouwen in de browser met AAPS Builder](#aaps-builder): build-workflow versie 3 voegt de variant `aapsclient3Release` toe (**AAPSClient3**, AAPS 4.0 en later). Om die te bouwen, vervang je je `.github/workflows/build.yml` zoals uitgelegd in [AAPS bijwerken](#aaps-builder-updates) @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md): de gepatchte Dexcom G7-app (DiaKEM) verwijderd, want die werkt niet meer bij nieuwe installaties @psonnera
- [Bouwen in de browser met AAPS Builder](#aaps-builder): build-workflow versie 2. Automatische wekelijkse builds zijn verwijderd (geen schema, geen variabelen `AUTO_BUILD` / `AUTO_VARIANT`, geen tags `built/…`): je start elke build zelf, met de versie en variant die je kiest, en de workflow heeft alleen leesrechten op je repository. Staat er in je `.github/workflows/build.yml` versie 1, vervang het bestand dan zoals uitgelegd in [AAPS bijwerken](#aaps-builder-updates). Schermafbeeldingen toegevoegd voor elke stap @psonnera
- [Bouwen in de browser met AAPS Builder](#aaps-builder): de build-workflow is nu deel van deze documentatie. Geen template-repository meer: je maakt een lege privé-repository en voegt de workflow toe vanaf de instellingenpagina (nieuwe stap 2). De workflow controleert niet meer op updates in een externe repository. Heb je je repository gemaakt van de eerdere template? Vervang dan `.github/workflows/build.yml` door de workflow van de instellingenpagina, zoals uitgelegd in [AAPS bijwerken](#aaps-builder-updates) @psonnera
- Nieuwe pagina [Bouwen in de browser met AAPS Builder](#aaps-builder): bouw AAPS vanaf een Android-telefoon met een instellingenpagina op deze site, met automatische wekelijkse builds en zonder voorbereidingsbestand. Deze vervangt de Android-instructies van het bouwen in de browser (pagina's over File Manager Plus verwijderd). AAPS Builder gemaakt door @dio99, documentatie @psonnera

## Augustus 2026

- [AAPS overzetten en installeren](../SettingUpAaps/TransferringAndInstallingAaps.md): de pagina *Android developer verification* samengevoegd met de installatiehandleiding, de [web installer](#android-developer-verification-web) toegevoegd (installeer de APK direct vanuit de browser, vrijgesteld van verificatie) en draadloze ADB @psonnera

## Juli 2026

- [Introductie](../Getting-Started/Introduction.md): controle op juistheid van het onderdeel over APS. Titel en link van de Frontiers-bronvermelding gecorrigeerd, deze gebracht als achtergrond in plaats van als actuele marktgids, de uitspraken over dual-hormone en volledig gesloten loop bijgewerkt, verduidelijkt dat de controller niet altijd een telefoon-app is, commerciële merknamen en gebruikersaantallen zonder bron verwijderd, en OS-AID gecorrigeerd naar *Open-Source Automated Insulin Delivery* @psonnera
- [Veelgebruikte woordenlijst](../UsefulLinks/Glossary.md): items **AID**, **FCL**, **HCL** en **OS-AID** toegevoegd, met links vanuit **APS** en **Closed Loop** @psonnera
- Nieuwe pagina [Android developer verification](#android-developer-verification): gevolgen van de komende verificatie-eis van Google voor het installeren van zelfgebouwde apps, met gratis installatiemethodes (ADB, advanced flow, limited distribution account) @psonnera

## Juni 2026

- [Bouwen in de browser](#browser-build): opnieuw opgebouwd als stappen over meerdere pagina's, waarbij je eerst een keuze maakt (Fork → keystore optie 1/optie 2 met een eigen pagina per apparaat → Google Drive → Bouwen → Probleemoplossing). Geneste tabbladen verwijderd en het installeren van File Manager Plus is nu een duidelijke stap @psonnera
- [Introductie](../Getting-Started/Introduction.md): terminologie veranderd van *DIY* naar *OS-AID* (Open-Source Automated Insulin Delivery), Trio en Stelo toegevoegd, compatibiliteitstabel voor pompen/CGM's bijgewerkt @tmhastings

## Maart 2026

- [Optie om te bouwen via de opdrachtregel toegevoegd](../SettingUpAaps/CLIBuild.md) @je-l
- *Computer Build* hernoemd naar *Android Studio Build*. Bestandsnamen in URL's behouden.

## Januari 2025

- [3.4](#version3400) release and documentation update roll-up (Wizard, Computer build versions, Config Builder)
- Update van de CGM-lijst. Dexcom G5, Tomato en Glimp verwijderd.
- [Site rotatie (scherm)](#Aapsscreens-site-rotation)
- [Bedrijfsmodus](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## December 2025

- [Profiel afstellen](../GettingHelp/ProfileTuning.md) door @robrub

## Oktober 2025

- DiaKEM: nieuwe installaties werken niet meer na een upgrade van de servers @psonnera
- Gepatchte Libre 2-app verwijderd (verouderd): werkt niet met nieuwe sensoren @psonnera
- Reworked Omnipod DASH page @XiTatiON

## Augustus 2025

- Versies en vereisten voor Android Studio bijgewerkt
- Release [3.3.2.1](#version3321) toegevoegd, verwijzingen naar Android 16 verwijderd (opgelost)
- [Bouwen in de browser](#browser-build) toegevoegd @Angus

## Mei 2025

- [Pagina over bijwerken naar 3.2.0.4](#update-aaps-3204) toegevoegd @psonnera

## Januari 2025

- QuickWizard [functie lang indrukken](#Preferences-quick-wizard) @emilise
- Pagina [Dynamische ISF](../DailyLifeWithAaps/DynamicISF.md) opnieuw geschreven @emilise

## December 2024

- Documentatie van [versie 3.3](#version3300) @emilise

## November 2024

- Update van [Je AAPS-profiel](../SettingUpAaps/YourAapsProfile.md) @emilise
- Herindeling van de inhoud over [Wear OS-smartwatches](../WearOS/BuildingAapsWearOS.md) @psonnera

## Oktober 2024

- Update van meerdere pagina's:
  - [Hoe lang duurt het](#preparing-how-long-will-it-take), [Overzicht van de onderdelen](../Getting-Started/ComponentOverview.md), [De Doelen voltooien](../SettingUpAaps/CompletingTheObjectives.md), [Je AAPS-profiel](../SettingUpAaps/YourAapsProfile.md), [Configuratie](../SettingUpAaps/ConfigBuilder.md) & [Instellingen](../SettingUpAaps/Preferences.md), [AAPS-schermen](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [COB berekening](../DailyLifeWithAaps/CobCalculation.md), [Dynamische ISF](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Bouwinstructies voor Android Studio Ladybug](../SettingUpAaps/BuildingAaps.md) @tanja
- Technisch werk (publicatieproces van de documentatie, indeling van bestanden...) @psonnera & @emilise

***

Geschiedenis van maart 2022 tot september 2024 ontbreekt

Bij de herziening voor 3.2 is wat verouderde informatie verwijderd. Je vindt die in de vorige versie van de documentatie:

De documentatie van AAPS 3.1 staat [hier](https://androidaps.readthedocs.io/en/3.1/index.html).

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
