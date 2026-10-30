# Docs updates & changes

## October 2026

- [Smartwatches and AAPS](#watches-external-companion-apps): the **Samsung Tizen** section becomes **External Companion Apps** and lists the apps that read the **AAPS** broadcast (WatchDrip+, GlucoDataHandler, G-Watch). [WatchDrip+](#watches-xiaomi-amazfit) 0.5 and later connect directly to **AAPS** without xDrip+: setup steps added, also summarized in [Configuration](#external-companion-apps), [Wear OS](../WearOS/WearOsSmartwatch.md) and [Remote monitoring](../RemoteFeatures/RemoteMonitoring.md). Bluejay watches: GTS discontinued, current model updated @psonnera
- [Browser build with AAPS Builder](#aaps-builder): build workflow version 6. The build steps now use exact, reviewed versions of GitHub's tools and build machine, and the build explains clearly when the wrong text was pasted into the `KEYSTORE_SET` secret. The [setup page](#aaps-builder-setup) is now part of the documentation and translated, checks your GitHub username, and has clearer help for the secret, "Page not found" (404) and the GitHub app. If your `.github/workflows/build.yml` says version 5 or earlier, replace it as explained in [Updating AAPS](#aaps-builder-updates) @psonnera
- [AAPS web installer](#web-installer): now a documentation page, translated like the others. The old address still works @psonnera
- [Browser build with AAPS Builder](#aaps-builder): build workflow version 3 adds the `aapsclient3Release` variant (**AAPSClient3**, AAPS 4.0 and later). To build it, replace your `.github/workflows/build.yml` as explained in [Updating AAPS](#aaps-builder-updates) @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md): removed the patched Dexcom G7 app (DiaKEM), which no longer works for new installs @psonnera
- [Browser build with AAPS Builder](#aaps-builder): build workflow version 2. Automatic weekly builds are removed (no schedule, no `AUTO_BUILD` / `AUTO_VARIANT` variables, no `built/…` tags): every build is started by you, with the version and variant you choose, and the workflow only has read access to your repository. If your `.github/workflows/build.yml` says version 1, replace it as explained in [Updating AAPS](#aaps-builder-updates). Added screenshots for every step @psonnera
- [Browser build with AAPS Builder](#aaps-builder): the build workflow is now part of this documentation. No template repository: you create an empty private repository and add the workflow from the setup page (new step 2). The workflow no longer checks an outside repository for updates. If you created your repository from the earlier template, replace `.github/workflows/build.yml` with the workflow from the setup page as explained in [Updating AAPS](#aaps-builder-updates) @psonnera
- New page [Browser build with AAPS Builder](#aaps-builder): build AAPS from an Android phone with a setup page hosted on this site, with automatic weekly builds and no preparation file. It replaces the Android instructions of the browser build (File Manager Plus pages removed). AAPS Builder created by @dio99, docs @psonnera

## August 2026

- [Transferring and Installing AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md): merged the *Android developer verification* page into the installation guide, added the [web installer](#android-developer-verification-web) (install the APK straight from the browser, exempt from verification) and wireless ADB @psonnera

## July 2026

- [Introduction](../Getting-Started/Introduction.md): accuracy review of the APS section. Corrected the Frontiers citation title and link, reframed it as background rather than a current market guide, updated the dual-hormone and full closed loop statements, clarified that the controller is not always a phone app, removed commercial brand names and unsourced user counts, and fixed OS-AID to *Open-Source Automated Insulin Delivery* @psonnera
- [Glossary](../UsefulLinks/Glossary.md): added **AID**, **FCL**, **HCL** and **OS-AID** entries, cross-linked from **APS** and **Closed Loop** @psonnera
- New page [Android developer verification](#android-developer-verification): impact of Google's upcoming verification requirement on installing self-built apps, with free installation methods (ADB, advanced flow, limited distribution account) @psonnera

## June 2026

- [Browser Build](#browser-build): restructured into a decision-first, multi-page flow (Fork → keystore Option 1/Option 2 with a dedicated page per device → Google Drive → Build → Troubleshooting); removed nested tabs and made installing File Manager Plus a prominent step @psonnera
- [Introduction](../Getting-Started/Introduction.md): terminology switched from *DIY* to *OS-AID* (Open-Source Automated Insulin Delivery), added Trio and Stelo, updated pump/CGM compatibility table @tmhastings

## Martie 2026

- [Add CLI Build option](../SettingUpAaps/CLIBuild.md) @je-l
- Rename *Computer Build* to *Android Studio Build*. Preserve file names for URLs.

## ianuarie 2025

- [3.4](#version3400) release and documentation update roll-up (Wizard, Computer build versions, Config Builder)
- CGM list update. Dexcom G5, Tomato, Glimp removed.
- [Site rotation UI](#Aapsscreens-site-rotation)
- [Mod de rulare](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## Decembrie 2025

- [Profile tuning](../GettingHelp/ProfileTuning.md) from @robrub

## Octombrie 2025

- DiaKEM: new installs don't work after servers upgrade @psonnera
- Removed Libre 2 patched app (obsolete): doesn't work with new sensors @psonnera
- Reworked Omnipod Dash page @XiTatiON

## August 2025

- Updated versions and Android Studio prerequisites
- Added [3.3.2.1](#version3321) release, removed Android 16 references (fixed)
- Added [Browser Build](#browser-build) @Angus

## Mai 2025

- Added [3.2.0.4 upgrade page](#update-aaps-3204) @psonnera

## ianuarie 2025

- Quick wizard [long press feature](#Preferences-quick-wizard) @emilise
- [DynamicISF](../DailyLifeWithAaps/DynamicISF.md) page rewritten @emilise

## Decembrie 2024

- Documentation of [3.3 version](#version3300) @emilise

## Noiembrie 2024

- Update of [Your AAPS Profile](../SettingUpAaps/YourAapsProfile.md) @emilise
- Reorganization of [Wear OS Smartwatches](../WearOS/BuildingAapsWearOS.md) content @psonnerat

## Octombrie 2024

- Update of several pages:
  - [How long will it take](#preparing-how-long-will-it-take), [Component Overview](../DailyLifeWithAaps/CobCalculation.md), [Completing the objectives](../SettingUpAaps/CompletingTheObjectives.md), [Your AAPS Profile](../SettingUpAaps/YourAapsProfile.md), [Config Builder](../SettingUpAaps/ConfigBuilder.md) & [Preferences](../SettingUpAaps/Preferences.md), [AAPS screens](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [COB Calculation](../DailyLifeWithAaps/CobCalculation.md), [Dynamic ISF](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Building instructions for Android Studio Ladybug](../SettingUpAaps/BuildingAaps.md) @tanja
- Technical work (deployment process for the documentation, files organization...) @psonnerat & @emilise

***

Missing history from March 2022 to September 2024

With 3.2 rework, some obsolete information was removed. You can find it in the previous documentation version:

AAPS 3.1 documentation is available [here](https://androidaps.readthedocs.io/en/3.1/index.html).

***

## Februarie 2022

- [BG quality warning sign](#aaps-screens-bg-warning-sign) @tanja
- [Medtronic pump update](../CompatiblePumps/MedtronicPump.md) @dottedfingertips
- [Necessary checks after update to AAPS 3.0](Update3_0.md) @tanja
- [Omnipod Dash](../CompatiblePumps/OmnipodDASH.md) @Freloner @robertrub @vanelsberg
- Update docs for AAPS 3.0 (partly) @xJoe
- [Wear OS for AAPS 3.0](../WearOS/WearOsSmartwatch.md) @peterleimbach

## Ianuarie 2022

- [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio) - update @tanja

## Decembrie 2021

- [Building the APK](../SettingUpAaps/BuildingAaps.md) - update Android Studio Arctic Fox | 2020.3.1 @tanja
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) information added @MilosKozak

## Noiembrie 2021

- Best practices for calibrating a libre 2 sensor
- [ISF](../UsefulLinks/FAQ.md) reformulation of impact
- Update [troubleshooting Android studio](../GettingHelp/TroubleshootingAndroidStudio)
- Removed patched [Dexcom](../CompatibleCgms/DexcomG6.md) app as it is obsolete

## Octombrie 2021

- [Release notes](ReleaseNotes.md) AAPS 3.0 beta

## Septembrie 2021

- Recommended computer specification to [build AAPS app](#Building-APK-recommended-specification-of-computer-for-building-apk-file)

## Iunie 2021

- [Watchface sideload](../WearOS/WearOsSmartwatch.md)

## Aprilie 2021

- List of [communication devices](#CompatiblePumps-additional-communication-device) for Omnipod and Medtronic pumps
- AAPS predictions in [Nightscout](#Nightscout-manual-nightscout-setup)

## Martie 2021

- Dev communication moved from gitter to [discord](https://discord.gg/4fQUWHZ4Mw)

## Februarie 2021

- New navigation bar and [language switch](../NavigateDoc/ChangeLanguageVersion.md)

## Ianuarie 2021

- [Action tab](#screens-action-tab) - more details on page 'AAPS screens'
- Dexcom G6 with [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)
- Libre smart reader [battery level](#screens-sensor-level-battery)
- [Objectives](#objectives-objective3) - new questions
- Other [new AAPS 2.8.0 functions](#Releasenotes-version-2-8-0)

## Decembrie 2020

- [Libre 2](../CompatibleCgms/Libre2.md) - patched app does not work with US sensors
- [OpenAPS hard-coded limits](#Open-APS-features-overview-of-hard-coded-limits)
- Sony Smartwatch 3 Manual Installation of Google Play Service

## Octombrie 2020

- Accu-Chek Combo - update [time adjustment daylight savings time](#time-adjustment-daylight-savings-time-dst)
- Accu-Chek Insight - Option to [upload absolute values](#Accu-Chek-Insight-Pump-settings-in-aaps)
- Logs - more details about [folder location](../GettingHelp/AccessingLogFiles.md)
- Omnipod Eros - status update
- [SMS commands - time sync](../RemoteFeatures/SMSCommands.md)

## Septembrie 2020

- Actualizare majoră pentru noua versiune AAPS 2.7
- For details see `release notes <Releasenotes-version-2-7-0>`

## Iunie 2020

- Libre 2 - more details patched Libre Link app & use of Bluetooth transmitters
- [Time zone traveling](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) with Libre 2

## Mai 2020

- [Extended bolus only for Dana + Insight pumps](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Insight deactivate vibration](#Accu-Chek-Insight-Pump-vibration) (firmware 3.x only)
- [Minimal request rate](#Preferences-minimal-request-change) to reduce number of notifications in open loop mode
- Patched Libre Link app - check if correctly patched
- [Prediction lines](#aaps-screens-prediction-lines) - more details

## Aprilie 2020

- Backdate insulin (i.e. given by syringe)
- Android 6 support will be discontinued in next master version

## Martie 2020

- [Build apk with Android Studio 3.6.1](../SettingUpAaps/BuildingAaps.md)
- [DanaRS with firmware v3](../CompatiblePumps/DanaRS-Insulin-Pump.md) **cannot currently be used with AAPS!**
- [Extended bolus and switch to open loop](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Update apk with Android Studio 3.6.1](../Maintenance/UpdateToNewVersion)

## Februarie 2020

- Automation caveats
- [Autosens](#Open-APS-features-autosens) - short explanation
- Careportal alternatives
- [Extended bolus](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) feature - closed loop will be disabled
- New [Local Profile plugin](../SettingUpAaps/ConfigBuilder.md)
- Sample Setup - update Dexcom G6
- [Version 2.6.0](#Releasenotes-version-2-6-0) - major new features
- [Wear complications](../WearOS/WearOsSmartwatch.md)

## Ianuarie 2020

- [Manual carb correction](#screens-bolus-carbs) for faulty carb entries
- [Image size](../SupportingAaps/HowToEditTheDocs.md) when editing docs

## Decembrie 2019

- [Android auto](../RemoteFeatures/AndroidAuto.md) - setup with screenshots
- [Accu-Chek Insight & Autotune](#Accu-Chek-Insight-Pump-settings-in-aaps) - workaround for usage
- [Glimp](#Config-Builder-bg-source) - version 4.15.57 and newer supported
- [Watchfaces](../WearOS/WearOsSmartwatch.md) - major update, way more details
- [Watchface complications](#Watchfaces-complications) - use your favorite watchface with AAPS data

## Noiembrie 2019

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
- [Depanare Android Studio](../GettingHelp/TroubleshootingAndroidStudio)
- [Troubleshooting - link collection](../GettingHelp/GeneralTroubleshooting.md)
- Update - quick walk-through for experienced users
- Docs - update [edit](#edit-the-docs-code-syntax) and [translation](#translations-translation-of-the-documentation).

## Octombrie 2019

- [AAPS version 2.5](#Releasenotes-version-2-5-0) updates (especially on [update page](../Maintenance/UpdateToNewVersion.md))
- [AccuChek Insight - log options](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [COB calculation on separate page](../DailyLifeWithAaps/CobCalculation.md)
- [COB - wrong COB value detection](#CobCalculation-detection-of-wrong-cob-values)
- [Depanarea specifică Dexcom G6](#DexcomG6-troubleshooting-g6)
- [Objectives update version 2.5](../SettingUpAaps/CompletingTheObjectives.md)
- [Preferences update](../SettingUpAaps/Preferences.md)
- [SGLT-2 inhibitors - do not use when looping](#PreparingForAaps-no-sglt-2-inhibitors)
- [SMS Commands Troubleshooting](#SMSCommands-troubleshooting)
- [xDrip - update G6 transmitter replacement](#xdrip-replace-transmitter)

## Septembrie 2019

- [Automate](../DailyLifeWithAaps/Automations.md)
- [Bolus calculator](#AapsScreens-wrong-cob-detection) - slow carb absorption
- [Nightscout security](#Nightscout-security-considerations)
- [Profile timeshift](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) (more details)
- [Monitorizarea la distanță](../RemoteFeatures/RemoteMonitoring.md)
- [Ce este un sistem de buclă închisă?](#Introduction-what-does-hybrid-closed-loop-mean)

## August 2019

- Dexcom G6 patched app region
- [Dexcom G6 new transmitter](#xdrip-connect-g6-transmitter-for-the-first-time) ("firefly" / 8G...)
- De ce am nevoie? - new structure & additional information
- Structură nouă
