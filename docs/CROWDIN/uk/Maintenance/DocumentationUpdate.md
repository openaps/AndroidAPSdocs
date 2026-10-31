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

- [3.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.4.0.0) release and documentation update roll-up (Wizard, Computer build versions, Config Builder)
- Оновлення списку CGM. Dexcom G5, Tomato, Glimp видалено.
- [Інтерфейс чергування місць введення](#Aapsscreens-site-rotation)
- [Робочий режим](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## Грудень 2025

- [Налаштування профілю](../GettingHelp/ProfileTuning.md) від @robrub

## Жовтень 2025

- DiaKEM: нові встановлення не працюють після оновлення серверів @psonnera
- Видалено пропатчений застосунок Libre 2 (застарів): він не працює з новими сенсорами @psonnera
- Перероблено сторінку Omnipod Dash @XiTatiON

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

## Лютий 2022

- [Знак попередження про якість ГК](#aaps-screens-bg-warning-sign) @tanja
- [Оновлення щодо помп Medtronic](../CompatiblePumps/MedtronicPump.md) @dottedfingertips
- [Необхідні перевірки після оновлення до AAPS 3.0](Update3_0.md) @tanja
- [Omnipod Dash](../CompatiblePumps/OmnipodDASH.md) @Freloner @robertrub @vanelsberg
- Оновлення документації для AAPS 3.0 (частково) @xJoe
- [Wear OS для AAPS 3.0](../WearOS/WearOsSmartwatch.md) @peterleimbach

## Січень 2022

- [Усунення проблем з Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md) — оновлення @tanja

## Грудень 2021

- [Збірка APK](../SettingUpAaps/BuildingAaps.md) — оновлення для Android Studio Arctic Fox | 2020.3.1 @tanja
- Додано інформацію про [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) @MilosKozak

## Листопад 2021

- Найкращі практики калібрування сенсора Libre 2
- [ISF](../UsefulLinks/FAQ.md) — нове формулювання впливу
- Оновлення сторінки [Усунення проблем з Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- Видалено пропатчений застосунок [Dexcom](../CompatibleCgms/DexcomG6.md), бо він застарів

## Жовтень 2021

- [Примітки до випуску](ReleaseNotes.md) AAPS 3.0 beta

## Вересень 2021

- Рекомендовані характеристики комп’ютера, щоб [зібрати застосунок AAPS](#Building-APK-recommended-specification-of-computer-for-building-apk-file)

## Червень 2021

- [Ручне встановлення циферблата (sideload)](../WearOS/WearOsSmartwatch.md)

## Квітень 2021

- Список [пристроїв зв’язку](#CompatiblePumps-additional-communication-device) для помп Omnipod і Medtronic
- Прогнози AAPS у [Nightscout](#Nightscout-manual-nightscout-setup)

## Березень 2021

- Спілкування розробників перенесено з gitter у [discord](https://discord.gg/4fQUWHZ4Mw)

## Лютий 2021

- Нова панель навігації та [перемикач мови](../NavigateDoc/ChangeLanguageVersion.md)

## Січень 2021

- [Вкладка «Дії»](#screens-action-tab) — більше деталей на сторінці «Екрани AAPS»
- Dexcom G6 з [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)
- [Рівень заряду батареї](#screens-sensor-level-battery) смарт-рідера Libre
- [Завдання](#objectives-objective3) — нові питання
- Other [new AAPS 2.8.0 functions](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.0)

## Грудень 2020

- [Libre 2](../CompatibleCgms/Libre2.md) — пропатчений застосунок не працює з сенсорами для США
- [Жорсткі ліміти OpenAPS](#Open-APS-features-overview-of-hard-coded-limits)
- Sony Smartwatch 3: ручне встановлення Google Play Service

## Жовтень 2020

- Accu-Chek Combo — оновлення щодо [переведення годинника на літній/зимовий час](#time-adjustment-daylight-savings-time-dst)
- Accu-Chek Insight — можливість [вивантажувати абсолютні значення](#Accu-Chek-Insight-Pump-settings-in-aaps)
- Журнали — більше деталей про [розташування папки](../GettingHelp/AccessingLogFiles.md)
- Omnipod Eros — оновлення статусу
- [SMS-команди — синхронізація часу](../RemoteFeatures/SMSCommands.md)

## Вересень 2020

- Велике оновлення для нової версії AAPS 2.7
- For details see the [release notes](https://github.com/nightscout/AndroidAPS/releases/tag/2.7.0)

## Червень 2020

- Libre 2 — більше деталей про пропатчений застосунок Libre Link і використання Bluetooth-трансмітерів
- [Подорожі через часові пояси](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) з Libre 2

## Травень 2020

- [Подовжений болюс лише для помп Dana та Insight](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Вимкнення вібрації Insight](#Accu-Chek-Insight-Pump-vibration) (лише прошивка 3.x)
- [Мінімальна частота запитів](#Preferences-minimal-request-change), щоб зменшити кількість сповіщень у режимі відкритої петлі
- Пропатчений застосунок Libre Link — як перевірити, чи його правильно пропатчено
- [Лінії прогнозу](#aaps-screens-prediction-lines) — більше деталей

## Квітень 2020

- Запис інсуліну заднім числом (наприклад, введеного шприцом)
- Підтримку Android 6 буде припинено в наступній версії гілки master

## Березень 2020

- [Збірка apk в Android Studio 3.6.1](../SettingUpAaps/BuildingAaps.md)
- [DanaRS з прошивкою v3](../CompatiblePumps/DanaRS-Insulin-Pump.md) **наразі не можна використовувати з AAPS!**
- [Подовжений болюс і перемикання на відкриту петлю](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Оновлення apk в Android Studio 3.6.1](../Maintenance/UpdateToNewVersion.md)

## Лютий 2020

- Застереження щодо автоматизації
- [Autosens](#Open-APS-features-autosens) — коротке пояснення
- Альтернативи Careportal
- Функція [Подовжений болюс](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) — закриту петлю буде вимкнено
- Новий [плагін локального профілю](../SettingUpAaps/ConfigBuilder.md)
- Приклад налаштування — оновлення Dexcom G6
- [Version 2.6.0](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-260) - major new features
- [Віджети циферблата Wear](../WearOS/WearOsSmartwatch.md)

## Січень 2020

- [Ручне виправлення вуглеводів](#screens-bolus-carbs) для помилкових записів вуглеводів
- [Розмір зображень](../SupportingAaps/HowToEditTheDocs.md) під час редагування документації

## Грудень 2019

- [Android auto](../RemoteFeatures/AndroidAuto.md) — налаштування зі знімками екрана
- [Accu-Chek Insight і Autotune](#Accu-Chek-Insight-Pump-settings-in-aaps) — обхідний шлях для використання
- [Glimp](#Config-Builder-bg-source) — підтримуються версії 4.15.57 і новіші
- [Циферблати](../WearOS/WearOsSmartwatch.md) — велике оновлення, набагато більше деталей
- [Віджети циферблата](#Watchfaces-complications) — використовуйте улюблений циферблат з даними AAPS

## Листопад 2019

- [Автоматизація — деактивація під час вимкнення петлі](../DailyLifeWithAaps/Automations.md)
- [Dexcom G6 — оновлення щодо заміни трансмітера](#xdrip-replace-transmitter)
- [Подовжений болюс — чому він не працює в режимі петлі](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [FAQ — спорт](#FAQ-sports)
- [Головний екран — лінії на графіку](#aaps-screens-main-graph)
- [Insight — вимкнення абсолютних значень у NS Client](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Помпа Medtronic — можливі подвійні записи](../CompatiblePumps/MedtronicPump.md)
- [Нова інструкція для Freestyle Libre 2](../CompatibleCgms/Libre2.md)
- [Перемикання профілю з відсотком — приклад](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
- [Оновлення SMS-команд](../RemoteFeatures/SMSCommands.md)
- [Усунення проблем з Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- [Усунення несправностей — збірка посилань](../GettingHelp/GeneralTroubleshooting.md)
- Оновлення — короткий огляд для досвідчених користувачів
- Документація — оновлення розділів про [редагування](#edit-the-docs-code-syntax) та [переклад](#translations-translation-of-the-documentation).

## Жовтень 2019

- [AAPS version 2.5](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-250) updates (especially on [update page](../Maintenance/UpdateToNewVersion.md))
- [AccuChek Insight — параметри журналу](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Розрахунок COB на окремій сторінці](../DailyLifeWithAaps/CobCalculation.md)
- [COB — виявлення неправильного значення COB](#CobCalculation-detection-of-wrong-cob-values)
- [Усунення проблем, специфічних для Dexcom G6](#DexcomG6-troubleshooting-g6)
- [Оновлення Завдань для версії 2.5](../SettingUpAaps/CompletingTheObjectives.md)
- [Оновлення налаштувань](../SettingUpAaps/Preferences.md)
- [Інгібітори SGLT-2 — не використовуйте їх з петлею](#PreparingForAaps-no-sglt-2-inhibitors)
- [Усунення проблем з SMS-командами](#SMSCommands-troubleshooting)
- [xDrip — оновлення щодо заміни трансмітера G6](#xdrip-replace-transmitter)

## Вересень 2019

- [Автоматизація](../DailyLifeWithAaps/Automations.md)
- [Калькулятор болюсу](#AapsScreens-wrong-cob-detection) — повільне засвоєння вуглеводів
- [Безпека Nightscout](#Nightscout-security-considerations)
- [Зсув часу профілю](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) (більше деталей)
- [Віддалений моніторинг](../RemoteFeatures/RemoteMonitoring.md)
- [Що таке система закритої петлі?](#Introduction-what-does-hybrid-closed-loop-mean)

## Серпень 2019

- Регіон пропатченого застосунку Dexcom G6
- [Новий трансмітер Dexcom G6](#xdrip-connect-g6-transmitter-for-the-first-time) («firefly» / 8G...)
- Що мені потрібно? - нова структура та додаткова інформація
- Нова структура
