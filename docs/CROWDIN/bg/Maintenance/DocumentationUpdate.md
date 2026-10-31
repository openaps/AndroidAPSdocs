# Актуализации и промени в документацията

## Октомври 2026 г.

- [Browser build with AAPS Builder](#aaps-builder): build workflow version 8, now maintained by the AAPS developers in the [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) repository. Setting up is one step shorter: [step 1](#aaps-builder-step1) of the [setup page](#aaps-builder-setup) creates your private repository as a copy of that repository, with the build workflow already in it, so there is no workflow to add any more. From now on the build steps are updated for you: your repository runs the version released by the AAPS developers at every build, without any change on your side (and still no automatic build). The build itself does not change, and your existing repository keeps working. To get these automatic updates, replace your `.github/workflows/build.yml` once as explained in [Updating AAPS](#aaps-builder-updates). Your `KEYSTORE_SET` secret stays as it is. The optional [Google Drive step](#aaps-builder-google-drive) now works on the setup page itself, on a phone or a computer: no preparation file needed @psonnera
- [Смарт часовници и AAPS](#watches-external-companion-apps): разделът **Samsung Tizen** става **Външни приложения за проследяване** и изброява приложенията, които четат излъчването на **AAPS** (WatchDrip+, GlucoDataHandler, G-Watch). [WatchDrip+](#watches-xiaomi-amazfit) 0.5 и по-новите версии се свързват директно с **AAPS** без xDrip+: добавени са стъпки за настройка, обобщени и в [Конфигурация](#external-companion-apps), [Wear OS](../WearOS/WearOsSmartwatch.md) и [Дистанционно наблюдение](../RemoteFeatures/RemoteMonitoring.md). Часовници Bluejay: GTS е спрян от производство, актуализиран е текущият модел @psonnera
- [Компилиране в браузъра с AAPS Builder](#aaps-builder): работен процес за компилиране (build workflow) версия 6. Стъпките на компилирането вече използват точни, проверени версии на инструментите и машината за компилиране на GitHub, а компилацията ясно обяснява, когато в секрета `KEYSTORE_SET` е поставен грешен текст. [Страницата за настройка](#aaps-builder-setup) вече е част от документацията и е преведена, проверява потребителското ви име в GitHub и има по-ясна помощ за секрета, за „Page not found“ (404) и за приложението GitHub. Ако във вашия `.github/workflows/build.yml` пише версия 5 или по-стара, заменете го, както е обяснено в [Актуализиране на AAPS](#aaps-builder-updates) @psonnera
- [Уеб инсталатор на AAPS](#web-installer): вече е страница от документацията, преведена като другите. Старият адрес продължава да работи @psonnera
- [Компилиране в браузъра с AAPS Builder](#aaps-builder): работен процес за компилиране версия 3 добавя варианта `aapsclient3Release` (**AAPSClient3**, AAPS 4.0 и по-нови). За да го компилирате, заменете своя `.github/workflows/build.yml`, както е обяснено в [Актуализиране на AAPS](#aaps-builder-updates) @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md): премахнато е модифицираното приложение Dexcom G7 (DiaKEM), което вече не работи при нови инсталации @psonnera
- [Компилиране в браузъра с AAPS Builder](#aaps-builder): работен процес за компилиране версия 2. Автоматичните седмични компилации са премахнати (няма график, няма променливи `AUTO_BUILD` / `AUTO_VARIANT`, няма тагове `built/…`): всяка компилация се стартира от вас, с версията и варианта, които изберете, а работният процес има само права за четене на вашето хранилище. Ако във вашия `.github/workflows/build.yml` пише версия 1, заменете го, както е обяснено в [Актуализиране на AAPS](#aaps-builder-updates). Добавени са екранни снимки за всяка стъпка @psonnera
- [Компилиране в браузъра с AAPS Builder](#aaps-builder): работният процес за компилиране вече е част от тази документация. Няма хранилище шаблон: създавате празно частно хранилище и добавяте работния процес от страницата за настройка (нова стъпка 2). Работният процес вече не проверява външно хранилище за актуализации. Ако сте създали хранилището си от по-ранния шаблон, заменете `.github/workflows/build.yml` с работния процес от страницата за настройка, както е обяснено в [Актуализиране на AAPS](#aaps-builder-updates) @psonnera
- Нова страница [Компилиране в браузъра с AAPS Builder](#aaps-builder): компилиране на AAPS от телефон с Android със страница за настройка, която се хоства на този сайт, с автоматични седмични компилации и без подготвителен файл. Тя заменя указанията за Android при компилирането в браузъра (страниците за File Manager Plus са премахнати). AAPS Builder е създаден от @dio99, документация от @psonnera

## Август 2026 г.

- [Прехвърляне и инсталиране на AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md): страницата *Проверка на разработчиците за Android* е обединена с ръководството за инсталиране, добавени са [уеб инсталаторът](#android-developer-verification-web) (инсталира APK директно от браузъра, без проверка) и безжичен ADB @psonnera

## Юли 2026 г.

- [Въведение в APS и AAPS](../Getting-Started/Introduction.md): проверка на точността на раздела за APS. Поправени са заглавието и връзката на цитата от Frontiers, той е представен като общ контекст, а не като актуален пазарен преглед, актуализирани са твърденията за двухормоналните системи и за напълно затворения кръг, пояснено е, че контролерът не винаги е приложение за телефон, премахнати са търговски марки и броеве на потребители без източник, а OS-AID е поправено на *Open-Source Automated Insulin Delivery* @psonnera
- [Речник](../UsefulLinks/Glossary.md): добавени са понятията **AID**, **FCL**, **HCL** и **OS-AID**, с връзки от **APS** и **Затворен кръг** @psonnera
- Нова страница [Проверка на разработчиците за Android](#android-developer-verification): как предстоящото изискване на Google за проверка влияе на инсталирането на приложения, компилирани от самия потребител, и безплатни начини за инсталиране (ADB, разширен процес, профил за ограничено разпространение) @psonnera

## Юни 2026 г.

- [Компилиране в браузъра](#browser-build): преструктурирано в поток от няколко страници, който започва с решението (Fork → хранилище за ключове Вариант 1/Вариант 2 с отделна страница за всяко устройство → Google Drive → компилиране → отстраняване на неизправности); премахнати са вложените раздели, а инсталирането на File Manager Plus е отделна, ясно видима стъпка @psonnera
- [Въведение в APS и AAPS](../Getting-Started/Introduction.md): терминът е сменен от *DIY* на *OS-AID* (автоматизирано подаване на инсулин с отворен код), добавени са Trio и Stelo, актуализирана е таблицата за съвместимост на помпи/CGM @tmhastings

## Март 2026 г.

- [Добавен е вариантът Компилиране от командния ред](../SettingUpAaps/CLIBuild.md) @je-l
- *Компилиране с компютър* е преименувано на *Компилиране с Android Studio*. Имената на файловете са запазени заради URL адресите.

## Януари 2025 г.

- [3.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.4.0.0) release and documentation update roll-up (Wizard, Computer build versions, Config Builder)
- Актуализация на списъка с CGM. Премахнати са Dexcom G5, Tomato и Glimp.
- [Интерфейс за смяна на мястото](#Aapsscreens-site-rotation)
- [Текущ режим](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## Декември 2025 г.

- [Настройване на профила в AAPS](../GettingHelp/ProfileTuning.md) от @robrub

## Октомври 2025 г.

- DiaKEM: новите инсталации не работят след надграждането на сървърите @psonnera
- Премахнато е модифицираното приложение за Libre 2 (остаряло): не работи с новите сензори @psonnera
- Преработена е страницата за Omnipod Dash @XiTatiON

## Август 2025 г.

- Актуализирани са версиите и изискванията за Android Studio
- Добавена е версия [3.3.2.1](#version3321), премахнати са споменаванията на Android 16 (поправено)
- Добавено е [Компилиране в браузъра](#browser-build) @Angus

## Май 2025 г.

- Добавена е [страница за надграждане до 3.2.0.4](#update-aaps-3204) @psonnera

## Януари 2025 г.

- [Функция при продължително натискане](#Preferences-quick-wizard) за бързите действия (Quick Wizard) @emilise
- Страницата [Динамично ISF](../DailyLifeWithAaps/DynamicISF.md) е написана наново @emilise

## Декември 2024 г.

- Документация за [версия 3.3](#version3300) @emilise

## Ноември 2024 г.

- Актуализация на [Вашият профил в AAPS](../SettingUpAaps/YourAapsProfile.md) @emilise
- Reorganization of [Wear OS Smartwatches](../WearOS/BuildingAapsWearOS.md) content @psonnera

## Октомври 2024 г.

- Актуализация на няколко страници:
  - [How long will it take](#preparing-how-long-will-it-take), [Component Overview](../Getting-Started/ComponentOverview.md), [Completing the objectives](../SettingUpAaps/CompletingTheObjectives.md), [Your AAPS Profile](../SettingUpAaps/YourAapsProfile.md), [Config Builder](../SettingUpAaps/ConfigBuilder.md) & [Preferences](../SettingUpAaps/Preferences.md), [AAPS screens](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [Калкулиране на COB](../DailyLifeWithAaps/CobCalculation.md), [Динамично ISF](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Указания за компилиране с Android Studio Ladybug](../SettingUpAaps/BuildingAaps.md) @tanja
- Technical work (deployment process for the documentation, files organization...) @psonnera & @emilise

***

Липсва историята от март 2022 г. до септември 2024 г.

При преработката за версия 3.2 част от остарялата информация беше премахната. Можете да я намерите в предишната версия на документацията:

Документацията за AAPS 3.1 е достъпна [тук](https://androidaps.readthedocs.io/en/3.1/index.html).

***

## Февруари 2022 г.

- [Предупредителен знак за качеството на КЗ](#aaps-screens-bg-warning-sign) @tanja
- [Актуализация за помпата Medtronic](../CompatiblePumps/MedtronicPump.md) @dottedfingertips
- [Задължителни проверки след актуализиране до AAPS 3.0](Update3_0.md) @tanja
- [Omnipod Dash](../CompatiblePumps/OmnipodDASH.md) @Freloner @robertrub @vanelsberg
- Актуализиране на документацията за AAPS 3.0 (частично) @xJoe
- [Wear OS за AAPS 3.0](../WearOS/WearOsSmartwatch.md) @peterleimbach

## Януари 2022 г.

- [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md) - update @tanja

## Декември 2021 г.

- [Компилиране на APK](../SettingUpAaps/BuildingAaps.md) – актуализация за Android Studio Arctic Fox | 2020.3.1 @tanja
- Добавена е информация за [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) @MilosKozak

## Ноември 2021 г.

- Добри практики за калибриране на сензор Libre 2
- [ISF](../UsefulLinks/FAQ.md) – ново описание на въздействието
- Update [troubleshooting Android studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- Премахнато е модифицираното приложение [Dexcom](../CompatibleCgms/DexcomG6.md), защото е остаряло

## Октомври 2021 г.

- [Бележки към версиите](ReleaseNotes.md) AAPS 3.0 beta

## Септември 2021 г.

- Препоръчителни характеристики на компютъра, за да [компилирате приложението AAPS](#Building-APK-recommended-specification-of-computer-for-building-apk-file)

## Юни 2021 г.

- [Ръчно инсталиране на циферблати (sideload)](../WearOS/WearOsSmartwatch.md)

## Април 2021 г.

- Списък с [комуникационни устройства](#CompatiblePumps-additional-communication-device) за помпите Omnipod и Medtronic
- Прогнози на AAPS в [Nightscout](#Nightscout-manual-nightscout-setup)

## Март 2021 г.

- Комуникацията между разработчиците е преместена от gitter в [Discord](https://discord.gg/4fQUWHZ4Mw)

## Февруари 2021 г.

- Нова лента за навигация и [смяна на езика](../NavigateDoc/ChangeLanguageVersion.md)

## Януари 2021 г.

- [Раздел „Действия“](#screens-action-tab) – повече подробности на страницата „Екраните на AAPS“
- Dexcom G6 с [Build Your Own Dexcom App (BYODA)](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)
- [Ниво на батерията](#screens-sensor-level-battery) на Libre smart reader
- [Цели](#objectives-objective3) – нови въпроси
- Other [new AAPS 2.8.0 functions](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.0)

## Декември 2020 г.

- [Libre 2](../CompatibleCgms/Libre2.md) – модифицираното приложение не работи със сензори от САЩ
- [Твърдо зададени ограничения на OpenAPS](#Open-APS-features-overview-of-hard-coded-limits)
- Sony Smartwatch 3 – ръчно инсталиране на Google Play Service

## Октомври 2020 г.

- Accu-Chek Combo – актуализация за [смяната на часа при лятно часово време](#time-adjustment-daylight-savings-time-dst)
- Accu-Chek Insight – опция за [качване на абсолютни стойности](#Accu-Chek-Insight-Pump-settings-in-aaps)
- Лог файлове – повече подробности за [местоположението на папката](../GettingHelp/AccessingLogFiles.md)
- Omnipod Eros – актуално състояние
- [SMS команди – синхронизация на времето](../RemoteFeatures/SMSCommands.md)

## Септември 2020 г.

- Голяма актуализация за новата версия 2.7 на AAPS
- For details see the [release notes](https://github.com/nightscout/AndroidAPS/releases/tag/2.7.0)

## Юни 2020 г.

- Libre 2 – повече подробности за модифицираното приложение Libre Link и за използването на Bluetooth трансмитери
- [Пътуване през часови зони](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) с Libre 2

## Май 2020 г.

- [Удължен болус само за помпите Dana и Insight](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Изключване на вибрацията на Insight](#Accu-Chek-Insight-Pump-vibration) (само за фърмуер 3.x)
- [Минимална промяна за заявка](#Preferences-minimal-request-change), за да се намалят известията в режим Отворен кръг
- Модифицирано приложение Libre Link – проверете дали е модифицирано правилно
- [Линии на прогнозата](#aaps-screens-prediction-lines) – повече подробности

## Април 2020 г.

- Въвеждане на инсулин със задна дата (напр. инжектиран със спринцовка)
- Поддръжката на Android 6 ще бъде прекратена в следващата версия от клона master

## Март 2020 г.

- [Компилиране на apk с Android Studio 3.6.1](../SettingUpAaps/BuildingAaps.md)
- [DanaRS с фърмуер v3](../CompatiblePumps/DanaRS-Insulin-Pump.md) **засега не може да се използва с AAPS!**
- [Удължен болус и превключване към отворен кръг](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Актуализиране на apk с Android Studio 3.6.1](../Maintenance/UpdateToNewVersion.md)

## Февруари 2020 г.

- Предупреждения за автоматизацията
- [Autosens](#Open-APS-features-autosens) – кратко обяснение
- Алтернативи на портала за лечения
- Функцията [Удължен болус](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) – затвореният кръг ще бъде изключен
- Нов [плъгин Local Profile](../SettingUpAaps/ConfigBuilder.md)
- Примерна конфигурация – актуализация за Dexcom G6
- [Version 2.6.0](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-260) - major new features
- [Усложнения (complications) за часовник](../WearOS/WearOsSmartwatch.md)

## Януари 2020 г.

- [Ръчна корекция на въглехидратите](#screens-bolus-carbs) при грешно въведени въглехидрати
- [Размер на изображенията](../SupportingAaps/HowToEditTheDocs.md) при редактиране на документацията

## Декември 2019 г.

- [Android Auto](../RemoteFeatures/AndroidAuto.md) – настройка с екранни снимки
- [Accu-Chek Insight и Autotune](#Accu-Chek-Insight-Pump-settings-in-aaps) – начин за използване
- [Glimp](#Config-Builder-bg-source) – поддържа се версия 4.15.57 и по-нова
- [Циферблати](../WearOS/WearOsSmartwatch.md) – голяма актуализация, много повече подробности
- [Усложнения за циферблата](#Watchfaces-complications) – използвайте любимия си циферблат с данни от AAPS

## Ноември 2019 г.

- [Автоматизация – деактивиране при изключване на кръга](../DailyLifeWithAaps/Automations.md)
- [Dexcom G6 – актуализация за смяна на трансмитера](#xdrip-replace-transmitter)
- [Удължен болус – защо не работи при затворен кръг](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Често задавани въпроси – спорт](#FAQ-sports)
- [Главен екран – линии на графиката](#aaps-screens-main-graph)
- [Insight – изключване на абсолютните стойности в NS Client](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Помпа Medtronic – възможни двойни записи](../CompatiblePumps/MedtronicPump.md)
- [Нови указания за Freestyle Libre 2](../CompatibleCgms/Libre2.md)
- [Смяна на профил с процент – пример](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
- [Актуализация на SMS командите](../RemoteFeatures/SMSCommands.md)
- [Отстраняване на неизправности в Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- [Отстраняване на неизправности – колекция от връзки](../GettingHelp/GeneralTroubleshooting.md)
- Актуализиране – кратко ръководство за опитни потребители
- Документация – актуализация за [редактирането](#edit-the-docs-code-syntax) и [превода](#translations-translation-of-the-documentation).

## Октомври 2019 г.

- [AAPS version 2.5](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-250) updates (especially on [update page](../Maintenance/UpdateToNewVersion.md))
- [AccuChek Insight – опции за лог файловете](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Изчисляването на COB е на отделна страница](../DailyLifeWithAaps/CobCalculation.md)
- [COB – откриване на грешна стойност на COB](#CobCalculation-detection-of-wrong-cob-values)
- [Отстраняване на неизправности, специфични за Dexcom G6](#DexcomG6-troubleshooting-g6)
- [Актуализация на целите за версия 2.5](../SettingUpAaps/CompletingTheObjectives.md)
- [Актуализация на опциите](../SettingUpAaps/Preferences.md)
- [SGLT-2 инхибитори – не ги използвайте при затворен кръг](#PreparingForAaps-no-sglt-2-inhibitors)
- [Отстраняване на неизправности със SMS командите](#SMSCommands-troubleshooting)
- [xDrip – актуализация за смяна на трансмитер G6](#xdrip-replace-transmitter)

## Септември 2019 г.

- [Автоматизиране](../DailyLifeWithAaps/Automations.md)
- [Болус калкулатор](#AapsScreens-wrong-cob-detection) – бавно усвояване на въглехидратите
- [Сигурност на Nightscout](#Nightscout-security-considerations)
- [Изместване на профила във времето](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) (повече подробности)
- [Дистанционно наблюдение](../RemoteFeatures/RemoteMonitoring.md)
- [Какво е система със затворен кръг?](#Introduction-what-does-hybrid-closed-loop-mean)

## Август 2019 г.

- Dexcom G6 – регион на модифицираното приложение
- [Нов трансмитер за Dexcom G6](#xdrip-connect-g6-transmitter-for-the-first-time) („firefly“ / 8G...)
- Какво ми трябва? - нова структура и допълнителна информация
- Нова структура
