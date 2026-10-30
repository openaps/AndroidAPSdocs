# Mises à jour et modifications de la documentation

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

## March 2026

- [Add CLI Build option](../SettingUpAaps/CLIBuild.md) @je-l
- Rename *Computer Build* to *Android Studio Build*. Preserve file names for URLs.

## January 2025

- [3.4](#version3400) release and documentation update roll-up (Wizard, Computer build versions, Config Builder)
- CGM list update. Dexcom G5, Tomato, Glimp removed.
- [Site rotation UI](#Aapsscreens-site-rotation)
- [En cours de fonctionnement](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## December 2025

- [Profile tuning](../GettingHelp/ProfileTuning.md) from @robrub

## October 2025

- DiaKEM: new installs don't work after servers upgrade @psonnera
- Removed Libre 2 patched app (obsolete): doesn't work with new sensors @psonnera
- Reworked Omnipod Dash page @XiTatiON

## August 2025

- Updated versions and Android Studio prerequisites
- Added [3.3.2.1](#version3321) release, removed Android 16 references (fixed)
- Added [Browser Build](#browser-build) @Angus

## May 2025

- Added [3.2.0.4 upgrade page](#update-aaps-3204) @psonnera

## January 2025

- Quick wizard [long press feature](#Preferences-quick-wizard) @emilise
- [DynamicISF](../DailyLifeWithAaps/DynamicISF.md) page rewritten @emilise

## December 2024

- Documentation of [3.3 version](#version3300) @emilise

## November 2024

- Update of [Your AAPS Profile](../SettingUpAaps/YourAapsProfile.md) @emilise
- Reorganization of [Wear OS Smartwatches](../WearOS/BuildingAapsWearOS.md) content @psonnerat

## October 2024

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

## Février 2022

- [BG quality warning sign](#aaps-screens-bg-warning-sign) @tanja
- [Medtronic pump update](../CompatiblePumps/MedtronicPump.md) @dottedfingertips
- [Necessary checks after update to AAPS 3.0](Update3_0.md) @tanja
- [Omnipod Dash](../CompatiblePumps/OmnipodDASH.md) @Freloner @robertrub @vanelsberg
- Mise à jour des docs pour AAPS 3.0 (en partie) @xJoe
- [Wear OS for AAPS 3.0](../WearOS/WearOsSmartwatch.md) @peterleimbach

## Janvier 2022

- [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio) - update @tanja

## Décembre 2021

- [Building the APK](../SettingUpAaps/BuildingAaps.md) - update Android Studio Arctic Fox | 2020.3.1 @tanja
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) information added @MilosKozak

## Novembre 2021

- Best practices for calibrating a libre 2 sensor
- [ISF](../UsefulLinks/FAQ.md) reformulation of impact
- Update [troubleshooting Android studio](../GettingHelp/TroubleshootingAndroidStudio)
- Removed patched [Dexcom](../CompatibleCgms/DexcomG6.md) app as it is obsolete

## Octobre 2021

- [Release notes](ReleaseNotes.md) AAPS 3.0 beta

## Septembre 2021

- Recommended computer specification to [build AAPS app](#Building-APK-recommended-specification-of-computer-for-building-apk-file)

## Juin 2021

- [Watchface sideload](../WearOS/WearOsSmartwatch.md)

## Avril 2021

- List of [communication devices](#CompatiblePumps-additional-communication-device) for Omnipod and Medtronic pumps
- AAPS predictions in [Nightscout](#Nightscout-manual-nightscout-setup)

## Mars 2021

- La communication de développement a été déplacée de gitter vers [discord](https://discord.gg/4fQUWHZ4Mw)

## Février 2021

- New navigation bar and [language switch](../NavigateDoc/ChangeLanguageVersion.md)

## Janvier 2021

- [Action tab](#screens-action-tab) - more details on page 'AAPS screens'
- Dexcom G6 with [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)
- Libre smart reader [battery level](#screens-sensor-level-battery)
- [Objectives](#objectives-objective3) - new questions
- Other [new AAPS 2.8.0 functions](#Releasenotes-version-2-8-0)

## Décembre 2020

- [Libre 2](../CompatibleCgms/Libre2.md) - patched app does not work with US sensors
- [Limites OpenAPS codées en dur](#Open-APS-features-overview-of-hard-coded-limits)
- Sony Smartwatch 3 Manual Installation of Google Play Service

## Octobre 2020

- Accu-Chek Combo - update [time adjustment daylight savings time](#time-adjustment-daylight-savings-time-dst)
- Accu-Chek Insight - Option to [upload absolute values](#Accu-Chek-Insight-Pump-settings-in-aaps)
- Logs - more details about [folder location](../GettingHelp/AccessingLogFiles.md)
- Omnipod Eros - mise à jour des États
- [Commandes SMS - Synchronisation de l'heure](../RemoteFeatures/SMSCommands.md)

## Septembre 2020

- Mise à jour majeure pour la nouvelle version AAPS 2.7
- Pour plus de détails, voir les `notes de version`

## Juin 2020

- Libre 2 - more details patched Libre Link app & use of Bluetooth transmitters
- [Time zone traveling](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) with Libre 2

## Mai 2020

- [Bolus étendus uniquement pour les pompes Dana + Insight](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Insight deactivate vibration](#Accu-Chek-Insight-Pump-vibration) (firmware 3.x only)
- [Minimal request rate](#Preferences-minimal-request-change) to reduce number of notifications in open loop mode
- Patched Libre Link app - check if correctly patched
- [Prediction lines](#aaps-screens-prediction-lines) - more details

## Avril 2020

- Backdate insulin (i.e. given by syringe)
- La prise en charge Android 6 sera interrompue dans la prochaine version majeure

## Mars 2020

- [Générer l'apk avec Android Studio 3.6.1](../SettingUpAaps/BuildingAaps.md)
- [DanaRS with firmware v3](../CompatiblePumps/DanaRS-Insulin-Pump.md) **cannot currently be used with AAPS!**
- [Bolus étendus et passage à en boucle ouverte](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Mettre à jour l'apk avec Android Studio 3.6.1](../Maintenance/UpdateToNewVersion)

## Février 2020

- Avertissement pour l'automatisation
- [Autosens](#Open-APS-features-autosens) - short explanation
- Alternatives à Careportal
- [Extended bolus](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) feature - closed loop will be disabled
- New [Local Profile plugin](../SettingUpAaps/ConfigBuilder.md)
- Sample Setup - update Dexcom G6
- [Version 2.6.0](#Releasenotes-version-2-6-0) - major new features
- [Complications Montre](../WearOS/WearOsSmartwatch.md)

## Janvier 2020

- [Manual carb correction](#screens-bolus-carbs) for faulty carb entries
- [Image size](../SupportingAaps/HowToEditTheDocs.md) when editing docs

## Décembre 2019

- [Android auto](../RemoteFeatures/AndroidAuto.md) - setup with screenshots
- [Accu-Chek Insight & Autotune](#Accu-Chek-Insight-Pump-settings-in-aaps) - workaround for usage
- [Glimp](#Config-Builder-bg-source) - version 4.15.57 and newer supported
- [Watchfaces](../WearOS/WearOsSmartwatch.md) - major update, way more details
- [Watchface complications](#Watchfaces-complications) - use your favorite watchface with AAPS data

## Novembre 2019

- [Automatisation - Désactiver quand vous désactivez la boucle](../DailyLifeWithAaps/Automations.md)
- [Remplacement du transmetteur Dexcom G6](#xdrip-replace-transmitter)
- [Bolus étendu - pourquoi ils ne fonctionnent pas dans un contexte de boucle](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [FAQ - sports](#FAQ-sports)
- [Écran d'accueil - lignes sur le graphique](#aaps-screens-main-graph)
- [Insight - Désactiver les valeurs absolues dans NS Client](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Pompe Medtronic - doubles entrées possibles](../CompatiblePumps/MedtronicPump.md)
- [Nouveau tutoriel Freestyle Libre 2](../CompatibleCgms/Libre2.md)
- [Changement de profil avec pourcentage - example](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
- [Mise à jour commandes SMS](../RemoteFeatures/SMSCommands.md)
- [Dépannage d'Android Studio](../GettingHelp/TroubleshootingAndroidStudio)
- [Dépannage - collection de liens](../GettingHelp/GeneralTroubleshooting.md)
- Mise à jour - Accès rapide aux utilisateurs expérimentés
- Docs - update [edit](#edit-the-docs-code-syntax) and [translation](#translations-translation-of-the-documentation).

## Octobre 2019

- [AAPS version 2.5](#Releasenotes-version-2-5-0) updates (especially on [update page](../Maintenance/UpdateToNewVersion.md))
- [AccuChek Insight - options d'enregistrement](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Calcul des GA sur une page distincte](../DailyLifeWithAaps/CobCalculation.md)
- [GA - détection de valeur COB incorrecte](#CobCalculation-detection-of-wrong-cob-values)
- [Dépannages spécifiques à Dexcom G6](#DexcomG6-troubleshooting-g6)
- [Mise à jour des objectifs version 2.5](../SettingUpAaps/CompletingTheObjectives.md)
- [Mise à jour des préférences](../SettingUpAaps/Preferences.md)
- [Inhibiteurs SGLT-2 - ne pas utiliser lors de la boucle](#PreparingForAaps-no-sglt-2-inhibitors)
- [Dépannage des commandes SMS](#SMSCommands-troubleshooting)
- [xDrip - Mise à jour du remplacement de l'émetteur G6](#xdrip-replace-transmitter)

## Septembre 2019

- [Automate](../DailyLifeWithAaps/Automations.md)
- [Bolus calculator](#AapsScreens-wrong-cob-detection) - slow carb absorption
- [Sécurité Nightscout](#Nightscout-security-considerations)
- [Profile timeshift](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) (more details)
- [Surveillance à distance](../RemoteFeatures/RemoteMonitoring.md)
- [Qu'est-ce qu'un système à boucle fermée ?](#Introduction-what-does-hybrid-closed-loop-mean)

## Août 2019

- Région de l'application Dexcom G6 patchée
- [Dexcom G6 new transmitter](#xdrip-connect-g6-transmitter-for-the-first-time) ("firefly" / 8G...)
- What do I need? - new structure & additional information
- Nouvelle structure
