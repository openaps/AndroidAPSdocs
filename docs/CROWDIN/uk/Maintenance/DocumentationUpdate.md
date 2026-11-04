- - -
tocdepth: 1
- - -

# Оновлення та зміни документації

## Жовтень 2026

- [Browser build with AAPS Builder](#aaps-builder): build workflow version 8, now maintained by the AAPS developers in the [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) repository. Setting up is one step shorter: [step 1](#aaps-builder-step1) of the [setup page](#aaps-builder-setup) creates your private repository as a copy of that repository, with the build workflow already in it, so there is no workflow to add any more. From now on the build steps are updated for you: your repository runs the version released by the AAPS developers at every build, without any change on your side (and still no automatic build). The build itself does not change, and your existing repository keeps working. To get these automatic updates, replace your `.github/workflows/build.yml` once as explained in [Updating AAPS](#aaps-builder-updates). Your `KEYSTORE_SET` secret stays as it is. The optional [Google Drive step](#aaps-builder-google-drive) now works on the setup page itself, on a phone or a computer: no preparation file needed @psonnera
- [Розумні годинники та AAPS](#watches-external-companion-apps): розділ **Samsung Tizen** став розділом **Зовнішні супутні застосунки** і містить перелік застосунків, які читають трансляцію **AAPS** (WatchDrip+, GlucoDataHandler, G-Watch). [WatchDrip+](#watches-xiaomi-amazfit) 0.5 і новіші підключаються до **AAPS** напряму, без xDrip+: додано кроки налаштування, їх коротко описано також у [Конфігурація](#external-companion-apps), [Wear OS](../WearOS/WearOsSmartwatch.md) і [Віддалений моніторинг](../RemoteFeatures/RemoteMonitoring.md). Годинники Bluejay: GTS знято з виробництва, оновлено поточну модель @psonnera
- [Збірка в браузері з AAPS Builder](#aaps-builder): версія 6 робочого процесу збірки. Кроки збірки тепер використовують точні, перевірені версії інструментів GitHub і машини для збірки, а збірка чітко пояснює, якщо в секрет `KEYSTORE_SET` вставлено неправильний текст. [Сторінка налаштування](#aaps-builder-setup) тепер є частиною документації та перекладена. Вона перевіряє ваше ім’я користувача GitHub і має зрозумілішу допомогу щодо секрету, помилки «Page not found» (404) та застосунку GitHub. Якщо у вашому `.github/workflows/build.yml` вказано версію 5 або старішу, замініть його, як описано в розділі [Оновлення AAPS](#aaps-builder-updates) @psonnera
- [Вебінсталятор AAPS](#web-installer): тепер це сторінка документації, яку перекладають, як і інші. Стара адреса все ще працює @psonnera
- [Збірка в браузері з AAPS Builder](#aaps-builder): версія 3 робочого процесу збірки додає варіант `aapsclient3Release` (**AAPSClient3**, AAPS 4.0 і новіші). Щоб зібрати його, замініть ваш `.github/workflows/build.yml`, як описано в розділі [Оновлення AAPS](#aaps-builder-updates) @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md): видалено пропатчений застосунок Dexcom G7 (DiaKEM), який більше не працює для нових встановлень @psonnera
- [Збірка в браузері з AAPS Builder](#aaps-builder): версія 2 робочого процесу збірки. Автоматичні щотижневі збірки видалено (немає розкладу, немає змінних `AUTO_BUILD` / `AUTO_VARIANT`, немає тегів `built/…`): кожну збірку запускаєте ви, з версією та варіантом, які ви вибрали, а робочий процес має лише доступ на читання до вашого репозиторію. Якщо у вашому `.github/workflows/build.yml` вказано версію 1, замініть його, як описано в розділі [Оновлення AAPS](#aaps-builder-updates). Додано знімки екрана для кожного кроку @psonnera
- [Збірка в браузері з AAPS Builder](#aaps-builder): робочий процес збірки тепер є частиною цієї документації. Більше немає репозиторію-шаблону: ви створюєте порожній приватний репозиторій і додаєте робочий процес зі сторінки налаштування (новий крок 2). Робочий процес більше не перевіряє оновлення в сторонньому репозиторії. Якщо ви створили репозиторій з попереднього шаблону, замініть `.github/workflows/build.yml` робочим процесом зі сторінки налаштування, як описано в розділі [Оновлення AAPS](#aaps-builder-updates) @psonnera
- Нова сторінка [Збірка в браузері з AAPS Builder](#aaps-builder): збирайте AAPS з телефону Android за допомогою сторінки налаштування на цьому сайті, з автоматичними щотижневими збірками і без файлу підготовки. Вона замінює інструкції для Android у збірці в браузері (сторінки File Manager Plus видалено). AAPS Builder створив @dio99, документацію — @psonnera

## Серпень 2026

- [Перенесення та встановлення AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md): сторінку *Перевірка розробників Android* об’єднано з інструкцією зі встановлення, додано [вебінсталятор](#android-developer-verification-web) (встановлення APK прямо з браузера, без перевірки) і бездротовий ADB @psonnera

## Липень 2026

- [Вступ](../Getting-Started/Introduction.md): перевірка точності розділу про APS. Виправлено назву та посилання цитати Frontiers, її подано як довідкову інформацію, а не як актуальний огляд ринку; оновлено твердження про двогормональні системи та повністю закриту петлю; уточнено, що контролер — не завжди застосунок на телефоні; видалено комерційні назви брендів і кількість користувачів без джерел; виправлено OS-AID на *Open-Source Automated Insulin Delivery* @psonnera
- [Глосарій](../UsefulLinks/Glossary.md): додано записи **AID**, **FCL**, **HCL** і **OS-AID** з перехресними посиланнями із записів **APS** і **Closed Loop** (закрита петля) @psonnera
- Нова сторінка [Перевірка розробників Android](#android-developer-verification): як майбутня вимога Google щодо перевірки вплине на встановлення самостійно зібраних застосунків, і безкоштовні способи встановлення (ADB, розширений процес, обліковий запис для обмеженого поширення) @psonnera

## Червень 2026

- [Збірка в браузері](#browser-build): перебудовано в багатосторінковий процес, який починається з вибору (Fork → keystore, варіант 1 / варіант 2 з окремою сторінкою для кожного пристрою → Google Drive → збірка → усунення проблем); прибрано вкладені вкладки, а встановлення File Manager Plus зроблено помітним кроком @psonnera
- [Вступ](../Getting-Started/Introduction.md): термін *DIY* замінено на *OS-AID* (Open-Source Automated Insulin Delivery), додано Trio і Stelo, оновлено таблицю сумісності помп і CGM @tmhastings

## Березень 2026

- [Додано варіант збірки через командний рядок (CLI)](../SettingUpAaps/CLIBuild.md) @je-l
- *Computer Build* (збірка на комп’ютері) перейменовано на *Android Studio Build* (збірка в Android Studio). Збережено назви файлів для URL-адрес.

## Січень 2025

- [3.4](#version3400) release and documentation update roll-up (Wizard, Computer build versions, Config Builder)
- Оновлення списку CGM. Dexcom G5, Tomato, Glimp видалено.
- [Інтерфейс чергування місць введення](#Aapsscreens-site-rotation)
- [Робочий режим](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## Грудень 2025

- [Налаштування профілю](../GettingHelp/ProfileTuning.md) від @robrub

## Жовтень 2025

- DiaKEM: нові встановлення не працюють після оновлення серверів @psonnera
- Видалено пропатчений застосунок Libre 2 (застарів): він не працює з новими сенсорами @psonnera
- Reworked Omnipod DASH page @XiTatiON

## Серпень 2025

- Оновлено версії та вимоги до Android Studio
- Додано випуск [3.3.2.1](#version3321), видалено згадки про Android 16 (виправлено)
- Додано сторінку [Збірка в браузері](#browser-build) @Angus

## Травень 2025

- Додано [сторінку оновлення до 3.2.0.4](#update-aaps-3204) @psonnera

## Січень 2025

- [Функція довгого натискання](#Preferences-quick-wizard) для Швидкого майстра @emilise
- Сторінку [DynamicISF](../DailyLifeWithAaps/DynamicISF.md) переписано @emilise

## Грудень 2024

- Документація [версії 3.3](#version3300) @emilise

## Листопад 2024

- Оновлення сторінки [Ваш профіль AAPS](../SettingUpAaps/YourAapsProfile.md) @emilise
- Реорганізація вмісту про [розумні годинники Wear OS](../WearOS/BuildingAapsWearOS.md) @psonnera

## Жовтень 2024

- Оновлення кількох сторінок:
  - [Скільки часу це займе](#preparing-how-long-will-it-take), [Огляд компонентів](../Getting-Started/ComponentOverview.md), [Виконання завдань](../SettingUpAaps/CompletingTheObjectives.md), [Ваш профіль AAPS](../SettingUpAaps/YourAapsProfile.md), [Конфігурація](../SettingUpAaps/ConfigBuilder.md) і [Налаштування](../SettingUpAaps/Preferences.md), [Екрани AAPS](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [Розрахунок COB](../DailyLifeWithAaps/CobCalculation.md), [Dynamic ISF](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Інструкції зі збірки для Android Studio Ladybug](../SettingUpAaps/BuildingAaps.md) @tanja
- Технічна робота (процес розгортання документації, організація файлів...) @psonnera і @emilise

***

Немає історії з березня 2022 до вересня 2024

Під час переробки для версії 3.2 деяку застарілу інформацію видалено. Ви можете знайти її в попередній версії документації:

Документація AAPS 3.1 доступна [тут](https://androidaps.readthedocs.io/en/3.1/index.html).

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
