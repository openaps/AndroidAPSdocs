- - -
tocdepth: 1
- - -

# Dokumentacijos atnaujinimai ir pakeitimai

## 2026 m. spalis

- [Kūrimas naršyklėje su AAPS Builder](#aaps-builder): kūrimo darbo eigos 8 versija, kurią dabar prižiūri AAPS kūrėjai saugykloje [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder). Sąranka trumpesnė vienu žingsniu: [sąrankos puslapio](#aaps-builder-setup) [1 žingsnis](#aaps-builder-step1) sukuria jūsų privačią saugyklą kaip tos saugyklos kopiją, kurioje jau yra kūrimo darbo eiga, todėl darbo eigos pridėti nebereikia. Nuo šiol kūrimo žingsniai atnaujinami už jus: kiekvieno kūrimo metu jūsų saugykla naudoja AAPS kūrėjų išleistą versiją, jums nieko keisti nereikia (ir automatinio kūrimo vis dar nėra). Pats kūrimas nesikeičia, o esama saugykla toliau veikia. Kad gautumėte šiuos automatinius atnaujinimus, vieną kartą pakeiskite savo `.github/workflows/build.yml`, kaip paaiškinta skyriuje [AAPS atnaujinimas](#aaps-builder-updates). Jūsų slaptoji reikšmė `KEYSTORE_SET` lieka tokia pati. Pasirenkamas [Google Drive žingsnis](#aaps-builder-google-drive) dabar veikia pačiame sąrankos puslapyje, telefone arba kompiuteryje: paruošimo failo nebereikia @psonnera
- [Išmanieji laikrodžiai ir AAPS](#watches-external-companion-apps): skyrius **Samsung Tizen** tapo skyriumi **Išorinės susietos programėlės**, jame išvardytos programėlės, kurios skaito **AAPS** transliaciją (WatchDrip+, GlucoDataHandler, G-Watch). [WatchDrip+](#watches-xiaomi-amazfit) 0.5 ir naujesnės versijos jungiasi tiesiai prie **AAPS** be xDrip+: pridėti sąrankos žingsniai, jie taip pat trumpai aprašyti puslapiuose [Konfigūracija](#external-companion-apps), [Wear OS](../WearOS/WearOsSmartwatch.md) ir [Nuotolinis stebėjimas](../RemoteFeatures/RemoteMonitoring.md). Bluejay laikrodžiai: GTS nebegaminamas, atnaujinta informacija apie dabartinį modelį @psonnera
- [Kūrimas naršyklėje su AAPS Builder](#aaps-builder): kūrimo darbo eigos (workflow) 6 versija. Kūrimo žingsniai dabar naudoja tikslias, patikrintas GitHub įrankių ir kūrimo mašinos versijas, o kūrimas aiškiai praneša, jei į slaptąją reikšmę `KEYSTORE_SET` įklijuotas neteisingas tekstas. [Sąrankos puslapis](#aaps-builder-setup) dabar yra dokumentacijos dalis ir yra išverstas, jis tikrina jūsų GitHub naudotojo vardą ir turi aiškesnę pagalbą apie slaptąją reikšmę (secret), „Page not found“ (404) ir GitHub programėlę. Jei jūsų `.github/workflows/build.yml` nurodyta 5 ar senesnė versija, pakeiskite jį, kaip paaiškinta skyriuje [AAPS atnaujinimas](#aaps-builder-updates) @psonnera
- [AAPS žiniatinklio diegimo programa](#web-installer): dabar tai dokumentacijos puslapis, verčiamas kaip ir kiti. Senas adresas vis dar veikia @psonnera
- [Kūrimas naršyklėje su AAPS Builder](#aaps-builder): kūrimo darbo eigos 3 versija prideda variantą `aapsclient3Release` (**AAPSClient3**, AAPS 4.0 ir naujesnė). Norėdami jį sukurti, pakeiskite savo `.github/workflows/build.yml`, kaip paaiškinta skyriuje [AAPS atnaujinimas](#aaps-builder-updates) @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md): pašalinta pataisyta Dexcom G7 programėlė (DiaKEM), kuri nebeveikia naujai įdiegus @psonnera
- [Kūrimas naršyklėje su AAPS Builder](#aaps-builder): kūrimo darbo eigos 2 versija. Automatiniai savaitiniai kūrimai pašalinti (nėra tvarkaraščio, nėra kintamųjų `AUTO_BUILD` / `AUTO_VARIANT`, nėra žymų `built/…`): kiekvieną kūrimą paleidžiate jūs, su jūsų pasirinkta versija ir variantu, o darbo eiga turi tik skaitymo prieigą prie jūsų saugyklos. Jei jūsų `.github/workflows/build.yml` nurodyta 1 versija, pakeiskite jį, kaip paaiškinta skyriuje [AAPS atnaujinimas](#aaps-builder-updates). Pridėtos kiekvieno žingsnio ekrano kopijos @psonnera
- [Kūrimas naršyklėje su AAPS Builder](#aaps-builder): kūrimo darbo eiga dabar yra šios dokumentacijos dalis. Nebėra šablono saugyklos: sukuriate tuščią privačią saugyklą ir pridedate darbo eigą iš sąrankos puslapio (naujas 2 žingsnis). Darbo eiga nebetikrina atnaujinimų išorinėje saugykloje. Jei saugyklą sukūrėte iš ankstesnio šablono, pakeiskite `.github/workflows/build.yml` darbo eiga iš sąrankos puslapio, kaip paaiškinta skyriuje [AAPS atnaujinimas](#aaps-builder-updates) @psonnera
- Naujas puslapis [Kūrimas naršyklėje su AAPS Builder](#aaps-builder): AAPS kūrimas iš Android telefono naudojant šioje svetainėje esantį sąrankos puslapį, su automatiniais savaitiniais kūrimais ir be paruošimo failo. Jis pakeičia kūrimo naršyklėje Android instrukcijas (File Manager Plus puslapiai pašalinti). AAPS Builder sukūrė @dio99, dokumentaciją – @psonnera

## August 2026

- [AAPS perkėlimas ir įdiegimas](../SettingUpAaps/TransferringAndInstallingAaps.md): puslapis *Android kūrėjų tapatybės patikrinimas* sujungtas su diegimo instrukcija, pridėta [žiniatinklio diegimo programa](#android-developer-verification-web) (APK įdiegiamas tiesiai iš naršyklės, be patikrinimo) ir belaidis ADB @psonnera

## 2026 m. liepa

- [Įvadas](../Getting-Started/Introduction.md): APS skyriaus tikslumo peržiūra. Ištaisytas Frontiers citatos pavadinimas ir nuoroda, ji pateikta kaip foninė informacija, o ne dabartinis rinkos vadovas, atnaujinti teiginiai apie dviejų hormonų sistemas ir visiškai uždarą ciklą, paaiškinta, kad valdymo įrenginys ne visada yra telefono programėlė, pašalinti komerciniai prekių ženklai ir nepagrįsti naudotojų skaičiai, OS-AID pataisytas į *Open-Source Automated Insulin Delivery* @psonnera
- [Terminų žodynas](../UsefulLinks/Glossary.md): pridėti įrašai **AID**, **FCL**, **HCL** ir **OS-AID**, su nuorodomis iš **APS** ir **Uždaras ciklas** @psonnera
- Naujas puslapis [Android kūrėjų tapatybės patikrinimas](#android-developer-verification): kaip būsimas Google patikrinimo reikalavimas paveiks pačių sukurtų programėlių diegimą, ir nemokami diegimo būdai (ADB, išplėstinė eiga, ribotos platinimo paskyra) @psonnera

## June 2026

- [Kūrimas naršyklėje](#browser-build): pertvarkyta į kelių puslapių eigą, kur pirmiausia priimamas sprendimas (Fork → raktų saugyklos 1 / 2 variantas su atskiru puslapiu kiekvienam įrenginiui → Google Drive → Kūrimas → Trikčių šalinimas); pašalinti įdėtiniai skirtukai, o File Manager Plus įdiegimas tapo aiškiai matomu žingsniu @psonnera
- [Įvadas](../Getting-Started/Introduction.md): terminas *DIY* pakeistas į *OS-AID* (atvirojo kodo automatinis insulino tiekimas), pridėti Trio ir Stelo, atnaujinta pompų / NGJ suderinamumo lentelė @tmhastings

## March 2026

- [Pridėtas kūrimo komandinėje eilutėje (CLI) būdas](../SettingUpAaps/CLIBuild.md) @je-l
- *Computer Build* pervadintas į *Android Studio Build*. URL adresuose išsaugomi failų pavadinimai.

## 2025 m. sausis

- [3.4](#version3400) release and documentation update roll-up (Wizard, Computer build versions, Config Builder)
- NGJ sąrašo atnaujinimas. Pašalinti Dexcom G5, Tomato, Glimp.
- [Infuzijos vietų rotacijos sąsaja](#Aapsscreens-site-rotation)
- [Veikimo režimas](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## 2025 m. gruodis

- [Profilio derinimas](../GettingHelp/ProfileTuning.md), autorius @robrub

## 2025 m. spalis

- DiaKEM: po serverių atnaujinimo nauji įdiegimai neveikia @psonnera
- Pašalinta pataisyta Libre 2 programėlė (pasenusi): ji neveikia su naujais jutikliais @psonnera
- Perdarytas Omnipod DASH puslapis @XiTatiON

## 2025 m. rugpjūtis

- Atnaujintos versijos ir Android Studio reikalavimai
- Pridėta [3.3.2.1](#version3321) versija, pašalintos nuorodos į Android 16 (ištaisyta)
- Pridėtas [kūrimas naršyklėje](#browser-build) @Angus

## May 2025

- Pridėtas [atnaujinimo į 3.2.0.4 puslapis](#update-aaps-3204) @psonnera

## 2025 m. sausis

- Greitojo vedlio [ilgo paspaudimo funkcija](#Preferences-quick-wizard) @emilise
- Puslapis [Dinaminis JIF](../DailyLifeWithAaps/DynamicISF.md) perrašytas @emilise

## 2024 m. gruodis

- [3.3 versijos](#version3300) dokumentacija @emilise

## 2024 m. lapkritis

- Atnaujintas puslapis [Jūsų AAPS profilis](../SettingUpAaps/YourAapsProfile.md) @emilise
- [Wear OS išmaniųjų laikrodžių](../WearOS/BuildingAapsWearOS.md) turinio pertvarkymas @psonnera

## 2024 m. spalis

- Atnaujinti keli puslapiai:
  - [Kiek laiko tai užtruks](#preparing-how-long-will-it-take), [Komponentų apžvalga](../Getting-Started/ComponentOverview.md), [Mokymo etapų atlikimas](../SettingUpAaps/CompletingTheObjectives.md), [Jūsų AAPS profilis](../SettingUpAaps/YourAapsProfile.md), [Konfigūracija](../SettingUpAaps/ConfigBuilder.md) ir [Nustatymai](../SettingUpAaps/Preferences.md), [AAPS ekranai](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [AAO apskaičiavimas](../DailyLifeWithAaps/CobCalculation.md), [Dinaminis JIF](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Kūrimo instrukcijos Android Studio Ladybug](../SettingUpAaps/BuildingAaps.md) @tanja
- Techniniai darbai (dokumentacijos diegimo procesas, failų tvarka...) @psonnera & @emilise

***

Trūksta istorijos nuo 2022 m. kovo iki 2024 m. rugsėjo

Atnaujinus į 3.2, pašalinta dalis pasenusios informacijos. Ją galite rasti ankstesnėje dokumentacijos versijoje:

AAPS 3.1 dokumentacija pasiekiama [čia](https://androidaps.readthedocs.io/en/3.1/index.html).

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
