- - -
tocdepth: 1
- - -

# Mises à jour et modifications de la documentation

## Octobre 2026

- [Browser build with AAPS Builder](#aaps-builder): build workflow version 8, now maintained by the AAPS developers in the [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) repository. Setting up is one step shorter: [step 1](#aaps-builder-step1) of the [setup page](#aaps-builder-setup) creates your private repository as a copy of that repository, with the build workflow already in it, so there is no workflow to add any more. From now on the build steps are updated for you: your repository runs the version released by the AAPS developers at every build, without any change on your side (and still no automatic build). The build itself does not change, and your existing repository keeps working. To get these automatic updates, replace your `.github/workflows/build.yml` once as explained in [Updating AAPS](#aaps-builder-updates). Your `KEYSTORE_SET` secret stays as it is. The optional [Google Drive step](#aaps-builder-google-drive) now works on the setup page itself, on a phone or a computer: no preparation file needed @psonnera
- [Montres connectées et AAPS](#watches-external-companion-apps) : la section **Samsung Tizen** devient **Applications compagnon externes** et liste les applications qui lisent la diffusion (broadcast) d'**AAPS** (WatchDrip+, GlucoDataHandler, G-Watch). [WatchDrip+](#watches-xiaomi-amazfit) 0.5 et plus récent se connecte directement à **AAPS** sans xDrip+ : étapes de configuration ajoutées, aussi résumées dans [Configuration](#external-companion-apps), [Wear OS](../WearOS/WearOsSmartwatch.md) et [Surveillance à distance](../RemoteFeatures/RemoteMonitoring.md). Montres Bluejay : GTS arrêtée, modèle actuel mis à jour @psonnera
- [Compilation dans le navigateur avec AAPS Builder](#aaps-builder) : workflow de compilation version 6. Les étapes de compilation utilisent maintenant des versions exactes et vérifiées des outils GitHub et de la machine de compilation. La compilation explique aussi clairement quand un mauvais texte a été collé dans le secret `KEYSTORE_SET`. La [page de configuration](#aaps-builder-setup) fait maintenant partie de la documentation et est traduite. Elle vérifie votre nom d'utilisateur GitHub et donne une aide plus claire pour le secret, pour « Page not found » (404) et pour l'application GitHub. Si votre fichier `.github/workflows/build.yml` indique la version 5 ou antérieure, remplacez-le comme expliqué dans [Mise à jour d'AAPS](#aaps-builder-updates) @psonnera
- [Installateur web AAPS](#web-installer) : c'est maintenant une page de la documentation, traduite comme les autres. L'ancienne adresse fonctionne toujours @psonnera
- [Compilation dans le navigateur avec AAPS Builder](#aaps-builder) : la version 3 du workflow de compilation ajoute la variante `aapsclient3Release` (**AAPSClient3**, AAPS 4.0 et plus récent). Pour la compiler, remplacez votre fichier `.github/workflows/build.yml` comme expliqué dans [Mise à jour d'AAPS](#aaps-builder-updates) @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md) : suppression de l'application Dexcom G7 patchée (DiaKEM), qui ne fonctionne plus pour les nouvelles installations @psonnera
- [Compilation dans le navigateur avec AAPS Builder](#aaps-builder) : workflow de compilation version 2. Les compilations hebdomadaires automatiques sont supprimées (pas de planification, pas de variables `AUTO_BUILD` / `AUTO_VARIANT`, pas de tags `built/…`) : chaque compilation est lancée par vous, avec la version et la variante que vous choisissez, et le workflow a seulement un accès en lecture à votre dépôt. Si votre fichier `.github/workflows/build.yml` indique la version 1, remplacez-le comme expliqué dans [Mise à jour d'AAPS](#aaps-builder-updates). Ajout de captures d'écran pour chaque étape @psonnera
- [Compilation dans le navigateur avec AAPS Builder](#aaps-builder) : le workflow de compilation fait maintenant partie de cette documentation. Plus de dépôt modèle (template) : vous créez un dépôt privé vide et vous ajoutez le workflow depuis la page de configuration (nouvelle étape 2). Le workflow ne vérifie plus les mises à jour dans un dépôt externe. Si vous avez créé votre dépôt à partir de l'ancien modèle, remplacez `.github/workflows/build.yml` par le workflow de la page de configuration, comme expliqué dans [Mise à jour d'AAPS](#aaps-builder-updates) @psonnera
- Nouvelle page [Compilation dans le navigateur avec AAPS Builder](#aaps-builder) : compilez AAPS depuis un téléphone Android avec une page de configuration hébergée sur ce site, avec des compilations hebdomadaires automatiques et sans fichier de préparation. Elle remplace les instructions Android de la compilation dans le navigateur (pages File Manager Plus supprimées). AAPS Builder créé par @dio99, documentation par @psonnera

## Août 2026

- [Transfert et installation d'AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md) : la page *Vérification des développeurs Android* est intégrée au guide d'installation ; ajout de l'[installateur web](#android-developer-verification-web) (installe l'APK directement depuis le navigateur, sans vérification) et de l'ADB sans fil @psonnera

## Juillet 2026

- [Introduction](../Getting-Started/Introduction.md) : vérification de l'exactitude de la section APS. Correction du titre et du lien de la citation Frontiers, présentée maintenant comme un contexte et non comme un guide actuel du marché ; mise à jour des affirmations sur le bi-hormonal et la boucle fermée complète ; précision que le contrôleur n'est pas toujours une application de téléphone ; suppression des noms de marques commerciales et des nombres d'utilisateurs sans source ; et correction d'OS-AID en *Open-Source Automated Insulin Delivery* @psonnera
- [Glossaire](../UsefulLinks/Glossary.md) : ajout des entrées **AID**, **FCL**, **HCL** et **OS-AID**, avec des liens depuis **APS** et **Boucle fermée** @psonnera
- Nouvelle page [Vérification des développeurs Android](#android-developer-verification) : effet de la future exigence de vérification de Google sur l'installation des applications compilées soi-même, avec des méthodes d'installation gratuites (ADB, procédure avancée, compte de distribution limitée) @psonnera

## Juin 2026

- [Compilation dans le navigateur](#browser-build) : réorganisée en un parcours sur plusieurs pages qui commence par les choix à faire (Fork → keystore Option 1/Option 2 avec une page dédiée par appareil → Google Drive → Compilation → Dépannage) ; suppression des onglets imbriqués, et l'installation de File Manager Plus devient une étape bien visible @psonnera
- [Introduction](../Getting-Started/Introduction.md) : la terminologie passe de *DIY* à *OS-AID* (Open-Source Automated Insulin Delivery, administration automatisée d'insuline open source) ; ajout de Trio et Stelo ; mise à jour du tableau de compatibilité pompes/MGC @tmhastings

## Mars 2026

- [Ajout de l'option de compilation en ligne de commande (CLI)](../SettingUpAaps/CLIBuild.md) @je-l
- *Compilation sur ordinateur* renommée en *Compilation avec Android Studio*. Conservation des noms de fichiers dans les URL.

## Janvier 2025

- [3.4](#version3400) release and documentation update roll-up (Wizard, Computer build versions, Config Builder)
- Mise à jour de la liste des MGC. Dexcom G5, Tomato et Glimp supprimés.
- [Interface de rotation du site](#Aapsscreens-site-rotation)
- [Mode de fonctionnement](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## Décembre 2025

- [Ajuster le profil AAPS](../GettingHelp/ProfileTuning.md) par @robrub

## Octobre 2025

- DiaKEM : les nouvelles installations ne fonctionnent plus depuis la mise à jour des serveurs @psonnera
- Suppression de l'application Libre 2 patchée (obsolète) : elle ne fonctionne pas avec les nouveaux capteurs @psonnera
- Reworked Omnipod DASH page @XiTatiON

## Août 2025

- Mise à jour des versions et des prérequis d'Android Studio
- Ajout de la version [3.3.2.1](#version3321), suppression des références à Android 16 (corrigé)
- Ajout de la [Compilation dans le navigateur](#browser-build) @Angus

## Mai 2025

- Ajout de la [page de mise à jour vers 3.2.0.4](#update-aaps-3204) @psonnera

## Janvier 2025

- Assistant rapide : [fonction d'appui long](#Preferences-quick-wizard) @emilise
- Page [SI dynamique](../DailyLifeWithAaps/DynamicISF.md) réécrite @emilise

## Décembre 2024

- Documentation de la [version 3.3](#version3300) @emilise

## Novembre 2024

- Mise à jour de [Votre profil AAPS](../SettingUpAaps/YourAapsProfile.md) @emilise
- Réorganisation du contenu sur les [montres connectées Wear OS](../WearOS/BuildingAapsWearOS.md) @psonnera

## Octobre 2024

- Mise à jour de plusieurs pages :
  - [Combien de temps cela prendra-t-il](#preparing-how-long-will-it-take), [Vue d'ensemble des composants](../Getting-Started/ComponentOverview.md), [Compléter les objectifs](../SettingUpAaps/CompletingTheObjectives.md), [Votre profil AAPS](../SettingUpAaps/YourAapsProfile.md), [Configuration](../SettingUpAaps/ConfigBuilder.md) et [Préférences](../SettingUpAaps/Preferences.md), [Écrans AAPS](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [Calcul GA](../DailyLifeWithAaps/CobCalculation.md), [SI dynamique](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Instructions de compilation pour Android Studio Ladybug](../SettingUpAaps/BuildingAaps.md) @tanja
- Travail technique (processus de déploiement de la documentation, organisation des fichiers...) @psonnera et @emilise

***

Historique manquant de mars 2022 à septembre 2024

Avec la refonte de la 3.2, certaines informations obsolètes ont été supprimées. Vous pouvez les trouver dans la version précédente de la documentation :

La documentation d'AAPS 3.1 est disponible [ici](https://androidaps.readthedocs.io/en/3.1/index.html).

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
