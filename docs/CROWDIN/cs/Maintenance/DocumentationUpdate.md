- - -
tocdepth: 1
- - -

# Aktualizace a změny dokumentace

## Říjen 2026

- [Browser build with AAPS Builder](#aaps-builder): build workflow version 8, now maintained by the AAPS developers in the [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) repository. Setting up is one step shorter: [step 1](#aaps-builder-step1) of the [setup page](#aaps-builder-setup) creates your private repository as a copy of that repository, with the build workflow already in it, so there is no workflow to add any more. From now on the build steps are updated for you: your repository runs the version released by the AAPS developers at every build, without any change on your side (and still no automatic build). The build itself does not change, and your existing repository keeps working. To get these automatic updates, replace your `.github/workflows/build.yml` once as explained in [Updating AAPS](#aaps-builder-updates). Your `KEYSTORE_SET` secret stays as it is. The optional [Google Drive step](#aaps-builder-google-drive) now works on the setup page itself, on a phone or a computer: no preparation file needed @psonnera
- [Chytré hodinky a AAPS](#watches-external-companion-apps): z části **Samsung Tizen** se stává část **Externí aplikace**. Uvádí aplikace, které čtou vysílání z **AAPS** (WatchDrip+, GlucoDataHandler, G-Watch). [WatchDrip+](#watches-xiaomi-amazfit) 0.5 a novější se připojuje přímo k **AAPS** bez xDrip+: přidány kroky nastavení, shrnuté také v částech [Konfigurace](#external-companion-apps), [Wear OS](../WearOS/WearOsSmartwatch.md) a [Vzdálený dohled](../RemoteFeatures/RemoteMonitoring.md). Hodinky Bluejay: GTS se už nevyrábí, aktualizován současný model @psonnera
- [Sestavení v prohlížeči s AAPS Builder](#aaps-builder): sestavovací workflow verze 6. Kroky sestavení nyní používají přesné, zkontrolované verze nástrojů GitHubu a sestavovacího počítače. Sestavení také jasně vysvětlí, když byl do secretu `KEYSTORE_SET` vložen nesprávný text. [Stránka nastavení](#aaps-builder-setup) je nyní součástí dokumentace a je přeložená. Kontroluje vaše uživatelské jméno na GitHubu a má jasnější nápovědu k secretu, k chybě „Page not found“ (404) a k aplikaci GitHub. Pokud váš soubor `.github/workflows/build.yml` uvádí verzi 5 nebo starší, nahraďte ho podle návodu v části [Aktualizace AAPS](#aaps-builder-updates) @psonnera
- [Webový instalátor AAPS](#web-installer): nyní je to stránka dokumentace, překládá se jako ostatní. Stará adresa stále funguje @psonnera
- [Sestavení v prohlížeči s AAPS Builder](#aaps-builder): sestavovací workflow verze 3 přidává variantu `aapsclient3Release` (**AAPSClient3**, AAPS 4.0 a novější). Pro její sestavení nahraďte svůj soubor `.github/workflows/build.yml` podle návodu v části [Aktualizace AAPS](#aaps-builder-updates) @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md): odstraněna upravená aplikace Dexcom G7 (DiaKEM), která už u nových instalací nefunguje @psonnera
- [Sestavení v prohlížeči s AAPS Builder](#aaps-builder): sestavovací workflow verze 2. Automatická týdenní sestavení jsou odstraněna (žádný rozvrh, žádné proměnné `AUTO_BUILD` / `AUTO_VARIANT`, žádné tagy `built/…`): každé sestavení spouštíte vy, s verzí a variantou, kterou si vyberete, a workflow má do vašeho repozitáře jen přístup pro čtení. Pokud váš soubor `.github/workflows/build.yml` uvádí verzi 1, nahraďte ho podle návodu v části [Aktualizace AAPS](#aaps-builder-updates). Přidány snímky obrazovky ke každému kroku @psonnera
- [Sestavení v prohlížeči s AAPS Builder](#aaps-builder): sestavovací workflow je nyní součástí této dokumentace. Žádný šablonový repozitář: vytvoříte prázdný soukromý repozitář a přidáte do něj workflow ze stránky nastavení (nový krok 2). Workflow už nekontroluje aktualizace v cizím repozitáři. Pokud jste svůj repozitář vytvořili z dřívější šablony, nahraďte soubor `.github/workflows/build.yml` workflow ze stránky nastavení podle návodu v části [Aktualizace AAPS](#aaps-builder-updates) @psonnera
- Nová stránka [Sestavení v prohlížeči s AAPS Builder](#aaps-builder): sestavení AAPS z telefonu s Androidem pomocí stránky nastavení na tomto webu, s automatickými týdenními sestaveními a bez přípravného souboru. Nahrazuje návod pro Android u sestavení v prohlížeči (stránky File Manager Plus odstraněny). AAPS Builder vytvořil @dio99, dokumentace @psonnera

## srpen 2026

- [Přenos a instalace AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md): stránka *Ověřování vývojářů Androidu* sloučena s návodem k instalaci, přidán [webový instalátor](#android-developer-verification-web) (instalace APK přímo z prohlížeče, bez nutnosti ověření) a bezdrátové ADB @psonnera

## Červenec 2026

- [Úvod](../Getting-Started/Introduction.md): kontrola přesnosti části o APS. Opraven název a odkaz citace z časopisu Frontiers, citace je nyní uvedena jako podklad, ne jako aktuální průvodce trhem. Aktualizovány údaje o dvouhormonální a plně uzavřené smyčce, upřesněno, že řídicí jednotka není vždy aplikace v telefonu, odstraněny obchodní názvy značek a počty uživatelů bez zdroje a opraveno OS-AID na *Open-Source Automated Insulin Delivery* @psonnera
- [Slovníček](../UsefulLinks/Glossary.md): přidány položky **AID**, **FCL**, **HCL** a **OS-AID**, s odkazy z **APS** a **Uzavřená smyčka** @psonnera
- Nová stránka [Ověřování vývojářů Androidu](#android-developer-verification): dopad připravovaného požadavku Googlu na ověření na instalaci vlastních sestavených aplikací, s bezplatnými způsoby instalace (ADB, rozšířený postup, účet s omezenou distribucí) @psonnera

## Červen 2026

- [Sestavení v prohlížeči](#browser-build): přestavěno na postup na více stránkách, který začíná rozhodnutím (Fork → úložiště klíčů Možnost 1/Možnost 2 s vlastní stránkou pro každé zařízení → Disk Google → Sestavení → Řešení problémů); odstraněny vnořené karty a instalace File Manager Plus je nyní výrazný krok @psonnera
- [Úvod](../Getting-Started/Introduction.md): terminologie změněna z *DIY* na *OS-AID* (Open-Source Automated Insulin Delivery), přidány Trio a Stelo, aktualizována tabulka kompatibility pump a CGM @tmhastings

## Březen 2026

- [Přidána možnost sestavení z příkazové řádky](../SettingUpAaps/CLIBuild.md) @je-l
- *Sestavení na počítači* přejmenováno na *Sestavení v Android Studiu*. Zachování názvů souborů v adresách URL.

## Leden 2025

- [3.4](#version3400) release and documentation update roll-up (Wizard, Computer build versions, Config Builder)
- Aktualizace seznamu CGM. Odstraněny Dexcom G5, Tomato a Glimp.
- [Rozhraní pro střídání míst vpichu](#Aapsscreens-site-rotation)
- [Režim smyčky](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## Prosinec 2025

- [Ladění profilu](../GettingHelp/ProfileTuning.md) od @robrub

## Říjen 2025

- DiaKEM: nové instalace po upgradu serverů nefungují @psonnera
- Odstraněna upravená aplikace pro Libre 2 (zastaralá): nefunguje s novými senzory @psonnera
- Reworked Omnipod DASH page @XiTatiON

## Srpen 2025

- Aktualizovány verze a požadavky na Android Studio
- Přidáno vydání [3.3.2.1](#version3321), odstraněny zmínky o Androidu 16 (opraveno)
- Přidáno [Sestavení v prohlížeči](#browser-build) @Angus

## Květen 2025

- Přidána [stránka o přechodu na 3.2.0.4](#update-aaps-3204) @psonnera

## Leden 2025

- Rychlý bolus – [funkce dlouhého stisknutí](#Preferences-quick-wizard) @emilise
- Stránka [Dynamická ISF](../DailyLifeWithAaps/DynamicISF.md) přepsána @emilise

## Prosinec 2024

- Dokumentace [verze 3.3](#version3300) @emilise

## Listopad 2024

- Aktualizace stránky [Váš profil AAPS](../SettingUpAaps/YourAapsProfile.md) @emilise
- Reorganization of [Wear OS Smartwatches](../WearOS/BuildingAapsWearOS.md) content @psonnera

## Říjen 2024

- Aktualizace několika stránek:
  - [How long will it take](#preparing-how-long-will-it-take), [Component Overview](../Getting-Started/ComponentOverview.md), [Completing the objectives](../SettingUpAaps/CompletingTheObjectives.md), [Your AAPS Profile](../SettingUpAaps/YourAapsProfile.md), [Config Builder](../SettingUpAaps/ConfigBuilder.md) & [Preferences](../SettingUpAaps/Preferences.md), [AAPS screens](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [Kalkulace COB](../DailyLifeWithAaps/CobCalculation.md), [Dynamická ISF](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Návod na sestavení pro Android Studio Ladybug](../SettingUpAaps/BuildingAaps.md) @tanja
- Technical work (deployment process for the documentation, files organization...) @psonnera & @emilise

***

Chybí historie od března 2022 do září 2024

Při přepracování pro verzi 3.2 byly odstraněny některé zastaralé informace. Najdete je v předchozí verzi dokumentace:

Dokumentace AAPS 3.1 je k dispozici [zde](https://androidaps.readthedocs.io/en/3.1/index.html).

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
