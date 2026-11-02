- - -
tocdepth: 1
- - -

# Aktualizácie a zmeny dokumentácie

## Október 2026

- [Browser build with AAPS Builder](#aaps-builder): build workflow version 8, now maintained by the AAPS developers in the [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) repository. Setting up is one step shorter: [step 1](#aaps-builder-step1) of the [setup page](#aaps-builder-setup) creates your private repository as a copy of that repository, with the build workflow already in it, so there is no workflow to add any more. From now on the build steps are updated for you: your repository runs the version released by the AAPS developers at every build, without any change on your side (and still no automatic build). The build itself does not change, and your existing repository keeps working. To get these automatic updates, replace your `.github/workflows/build.yml` once as explained in [Updating AAPS](#aaps-builder-updates). Your `KEYSTORE_SET` secret stays as it is. The optional [Google Drive step](#aaps-builder-google-drive) now works on the setup page itself, on a phone or a computer: no preparation file needed @psonnera
- [Inteligentné hodinky a AAPS](#watches-external-companion-apps): časť **Samsung Tizen** sa mení na **Externé sprievodné (Companion) aplikácie** a uvádza aplikácie, ktoré čítajú vysielanie **AAPS** (WatchDrip+, GlucoDataHandler, G-Watch). [WatchDrip+](#watches-xiaomi-amazfit) 0.5 a novší sa pripája priamo k **AAPS** bez xDrip+: pridané kroky nastavenia, v skratke aj v častiach [Konfigurácia](#external-companion-apps), [Wear OS](../WearOS/WearOsSmartwatch.md) a [Vzdialené sledovanie](../RemoteFeatures/RemoteMonitoring.md). Hodinky Bluejay: GTS sa už nevyrába, aktuálny model aktualizovaný @psonnera
- [Zostavenie v prehliadači pomocou AAPS Builder](#aaps-builder): workflow zostavenia verzie 6. Kroky zostavenia teraz používajú presné, skontrolované verzie nástrojov GitHubu a zostavovacieho stroja. Zostavenie tiež jasne vysvetlí, keď bol do secretu `KEYSTORE_SET` vložený nesprávny text. [Stránka nastavenia](#aaps-builder-setup) je teraz súčasťou dokumentácie a je preložená. Kontroluje vaše používateľské meno na GitHube a má jasnejšiu pomoc pre secret, „Page not found“ (404) a aplikáciu GitHub. Ak je vo vašom súbore `.github/workflows/build.yml` uvedená verzia 5 alebo staršia, nahraďte ho podľa postupu v časti [Aktualizácia AAPS](#aaps-builder-updates) @psonnera
- [Webový inštalátor AAPS](#web-installer): teraz je to stránka dokumentácie a prekladá sa ako ostatné. Stará adresa stále funguje @psonnera
- [Zostavenie v prehliadači pomocou AAPS Builder](#aaps-builder): workflow zostavenia verzie 3 pridáva variant `aapsclient3Release` (**AAPSClient3**, AAPS 4.0 a novší). Ak ho chcete zostaviť, nahraďte svoj súbor `.github/workflows/build.yml` podľa postupu v časti [Aktualizácia AAPS](#aaps-builder-updates) @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md): odstránená upravená aplikácia Dexcom G7 (DiaKEM), ktorá už pri nových inštaláciách nefunguje @psonnera
- [Zostavenie v prehliadači pomocou AAPS Builder](#aaps-builder): workflow zostavenia verzie 2. Automatické týždenné zostavenia sú odstránené (žiadny časový plán, žiadne premenné `AUTO_BUILD` / `AUTO_VARIANT`, žiadne tagy `built/…`): každé zostavenie spúšťate vy, s verziou a variantom, ktoré si vyberiete, a workflow má k vášmu repozitáru prístup iba na čítanie. Ak je vo vašom súbore `.github/workflows/build.yml` uvedená verzia 1, nahraďte ho podľa postupu v časti [Aktualizácia AAPS](#aaps-builder-updates). Pridané snímky obrazovky ku každému kroku @psonnera
- [Zostavenie v prehliadači pomocou AAPS Builder](#aaps-builder): workflow zostavenia je teraz súčasťou tejto dokumentácie. Bez šablónového repozitára: vytvoríte prázdny súkromný repozitár a pridáte doň workflow zo stránky nastavenia (nový krok 2). Workflow už nekontroluje aktualizácie v externom repozitári. Ak ste svoj repozitár vytvorili zo staršej šablóny, nahraďte `.github/workflows/build.yml` workflowom zo stránky nastavenia podľa postupu v časti [Aktualizácia AAPS](#aaps-builder-updates) @psonnera
- Nová stránka [Zostavenie v prehliadači pomocou AAPS Builder](#aaps-builder): zostavenie AAPS z telefónu s Androidom pomocou stránky nastavenia na tomto webe, s automatickými týždennými zostaveniami a bez prípravného súboru. Nahrádza návod pre Android v zostavení v prehliadači (stránky o File Manager Plus boli odstránené). AAPS Builder vytvoril @dio99, dokumentácia @psonnera

## August 2026

- [Prenos a inštalácia AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md): stránka *Overovanie vývojárov pre Android* bola zlúčená do návodu na inštaláciu, pridaný [webový inštalátor](#android-developer-verification-web) (inštalácia APK priamo z prehliadača, bez overovania) a bezdrôtové ADB @psonnera

## Júl 2026

- [Úvod](../Getting-Started/Introduction.md): kontrola presnosti časti o APS. Opravený názov a odkaz citácie Frontiers, citácia je teraz uvedená ako východisko, nie ako aktuálny prehľad trhu. Aktualizované tvrdenia o dvojhormonálnych systémoch a plne uzavretom okruhu, objasnené, že riadiaca jednotka nie je vždy aplikácia v telefóne, odstránené komerčné názvy značiek a počty používateľov bez zdroja a OS-AID opravené na *Open-Source Automated Insulin Delivery* @psonnera
- [Slovník](../UsefulLinks/Glossary.md): pridané heslá **AID**, **FCL**, **HCL** a **OS-AID** s krížovými odkazmi z hesiel **APS** a **Uzavretý okruh** @psonnera
- Nová stránka [Overovanie vývojárov pre Android](#android-developer-verification): dopad pripravovanej požiadavky Google na overovanie pri inštalácii vlastnoručne zostavených aplikácií, s bezplatnými spôsobmi inštalácie (ADB, rozšírený postup, účet s obmedzenou distribúciou) @psonnera

## Jún 2026

- [Zostavenie v prehliadači](#browser-build): prepracované na postup na viacerých stránkach, ktorý začína rozhodnutím (Fork → úložisko kľúčov Možnosť 1/Možnosť 2 so samostatnou stránkou pre každé zariadenie → Disk Google → Zostavenie → Riešenie problémov); odstránené vnorené karty a inštalácia File Manager Plus je teraz výrazný samostatný krok @psonnera
- [Úvod](../Getting-Started/Introduction.md): terminológia zmenená z *DIY* na *OS-AID* (Open-Source Automated Insulin Delivery), pridané Trio a Stelo, aktualizovaná tabuľka kompatibility púmp a CGM @tmhastings

## Marec 2026

- [Pridaná možnosť zostavenia z príkazového riadku](../SettingUpAaps/CLIBuild.md) @je-l
- Premenovanie *Zostavenie v počítači* na *Zostavenie v Android Studiu*. Zachované názvy súborov v adresách URL.

## Január 2025

- [3.4](#version3400) release and documentation update roll-up (Wizard, Computer build versions, Config Builder)
- Aktualizácia zoznamu CGM. Dexcom G5, Tomato a Glimp boli odstránené.
- [Rozhranie Striedania miest](#Aapsscreens-site-rotation)
- [Režim prevádzky](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## December 2025

- [Ladenie profilu](../GettingHelp/ProfileTuning.md) od @robrub

## Október 2025

- DiaKEM: nové inštalácie po aktualizácii serverov nefungujú @psonnera
- Odstránená upravená aplikácia pre Libre 2 (zastaraná): nefunguje s novými senzormi @psonnera
- Reworked Omnipod DASH page @XiTatiON

## August 2025

- Aktualizované verzie a požiadavky na Android Studio
- Pridané vydanie [3.3.2.1](#version3321), odstránené zmienky o Androide 16 (opravené)
- Pridané [Zostavenie v prehliadači](#browser-build) @Angus

## Máj 2025

- Pridaná [stránka o aktualizácii na 3.2.0.4](#update-aaps-3204) @psonnera

## Január 2025

- [Funkcia dlhého stlačenia](#Preferences-quick-wizard) v Rýchlom sprievodcovi @emilise
- Stránka [Dynamická ISF](../DailyLifeWithAaps/DynamicISF.md) bola prepísaná @emilise

## December 2024

- Dokumentácia [verzie 3.3](#version3300) @emilise

## November 2024

- Aktualizácia stránky [Váš profil AAPS](../SettingUpAaps/YourAapsProfile.md) @emilise
- Reorganization of [Wear OS Smartwatches](../WearOS/BuildingAapsWearOS.md) content @psonnera

## Október 2024

- Aktualizácia viacerých stránok:
  - [How long will it take](#preparing-how-long-will-it-take), [Component Overview](../Getting-Started/ComponentOverview.md), [Completing the objectives](../SettingUpAaps/CompletingTheObjectives.md), [Your AAPS Profile](../SettingUpAaps/YourAapsProfile.md), [Config Builder](../SettingUpAaps/ConfigBuilder.md) & [Preferences](../SettingUpAaps/Preferences.md), [AAPS screens](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [Výpočet COB](../DailyLifeWithAaps/CobCalculation.md), [Dynamická ISF](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Návod na zostavenie pre Android Studio Ladybug](../SettingUpAaps/BuildingAaps.md) @tanja
- Technical work (deployment process for the documentation, files organization...) @psonnera & @emilise

***

Chýba história od marca 2022 do septembra 2024

Pri prepracovaní pre verziu 3.2 boli odstránené niektoré zastarané informácie. Nájdete ich v predchádzajúcej verzii dokumentácie:

Dokumentácia AAPS 3.1 je dostupná [tu](https://androidaps.readthedocs.io/en/3.1/index.html).

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
