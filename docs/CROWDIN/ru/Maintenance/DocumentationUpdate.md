- - -
tocdepth: 1
- - -

# Обновления и изменения в документации

## October 2026

- [Сборка через браузер с AAPS Builder](#aaps-builder): версия 8 рабочего процесса сборки, теперь ее поддерживают разработчики AAPS в репозитории [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder). Настройка стала на один шаг короче: [шаг 1](#aaps-builder-step1) на [странице настройки](#aaps-builder-setup) создает ваш приватный репозиторий как копию этого репозитория, в которой рабочий процесс сборки уже есть, поэтому добавлять рабочий процесс больше не нужно. Теперь шаги сборки обновляются за вас: при каждой сборке ваш репозиторий запускает версию, выпущенную разработчиками AAPS, без каких-либо изменений с вашей стороны (и по-прежнему без автоматической сборки). Сама сборка не меняется, и ваш существующий репозиторий продолжает работать. Чтобы получать эти автоматические обновления, один раз замените ваш `.github/workflows/build.yml`, как описано в разделе [Обновление AAPS](#aaps-builder-updates). Ваш секрет `KEYSTORE_SET` остается без изменений. Необязательный [шаг с Google Диском](#aaps-builder-google-drive) теперь выполняется прямо на странице настройки, на телефоне или компьютере: подготовительный файл не нужен @psonnera
- [Смарт-часы и AAPS](#watches-external-companion-apps): раздел **Samsung Tizen** стал разделом **Внешние приложения-компаньоны** и перечисляет приложения, которые читают трансляцию (broadcast) **AAPS** (WatchDrip+, GlucoDataHandler, G-Watch). [WatchDrip+](#watches-xiaomi-amazfit) 0.5 и новее подключается напрямую к **AAPS** без xDrip+: добавлены шаги настройки, кратко они также описаны в разделах [Конфигурация](#external-companion-apps), [Wear OS](../WearOS/WearOsSmartwatch.md) и [Удаленный мониторинг](../RemoteFeatures/RemoteMonitoring.md). Часы Bluejay: GTS снята с производства, обновлена текущая модель @psonnera
- [Сборка через браузер с AAPS Builder](#aaps-builder): версия 6 рабочего процесса (workflow) сборки. Шаги сборки теперь используют точные, проверенные версии инструментов GitHub и машины сборки, а сборка понятно сообщает, если в секрет `KEYSTORE_SET` вставлен неверный текст. [Страница настройки](#aaps-builder-setup) теперь входит в документацию и переведена, проверяет ваше имя пользователя GitHub и содержит более понятную помощь по секрету, ошибке «Page not found» (404) и приложению GitHub. Если в вашем `.github/workflows/build.yml` указана версия 5 или ниже, замените его, как описано в разделе [Обновление AAPS](#aaps-builder-updates) @psonnera
- [Веб-установщик AAPS](#web-installer): теперь это страница документации, переведенная, как и остальные. Старый адрес по-прежнему работает @psonnera
- [Сборка через браузер с AAPS Builder](#aaps-builder): версия 3 рабочего процесса сборки добавляет вариант `aapsclient3Release` (**AAPSClient3**, AAPS 4.0 и новее). Чтобы собрать его, замените ваш `.github/workflows/build.yml`, как описано в разделе [Обновление AAPS](#aaps-builder-updates) @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md): удалено пропатченное приложение Dexcom G7 (DiaKEM), которое больше не работает для новых установок @psonnera
- [Сборка через браузер с AAPS Builder](#aaps-builder): версия 2 рабочего процесса сборки. Автоматические еженедельные сборки удалены (нет расписания, нет переменных `AUTO_BUILD` / `AUTO_VARIANT`, нет тегов `built/…`): каждую сборку запускаете вы сами, с выбранной вами версией и вариантом, а рабочий процесс имеет доступ к вашему репозиторию только на чтение. Если в вашем `.github/workflows/build.yml` указана версия 1, замените его, как описано в разделе [Обновление AAPS](#aaps-builder-updates). Добавлены снимки экрана для каждого шага @psonnera
- [Сборка через браузер с AAPS Builder](#aaps-builder): рабочий процесс сборки теперь входит в эту документацию. Нет репозитория-шаблона: вы создаете пустой приватный репозиторий и добавляете рабочий процесс со страницы настройки (новый шаг 2). Рабочий процесс больше не проверяет обновления во внешнем репозитории. Если вы создали свой репозиторий из прежнего шаблона, замените `.github/workflows/build.yml` рабочим процессом со страницы настройки, как описано в разделе [Обновление AAPS](#aaps-builder-updates) @psonnera
- Новая страница [Сборка через браузер с AAPS Builder](#aaps-builder): сборка AAPS с телефона Android через страницу настройки, размещенную на этом сайте, с автоматическими еженедельными сборками и без подготовительного файла. Она заменяет инструкции для Android в сборке через браузер (страницы File Manager Plus удалены). AAPS Builder создал @dio99, документация – @psonnera

## August 2026

- [Перенос и установка AAPS на смартфон](../SettingUpAaps/TransferringAndInstallingAaps.md): страница *Проверка разработчиков Android* объединена с руководством по установке, добавлены [веб-установщик](#android-developer-verification-web) (установка APK прямо из браузера, без проверки) и беспроводной ADB @psonnera

## Июль 2026

- [Введение](../Getting-Started/Introduction.md): проверка точности раздела об APS. Исправлены название и ссылка цитаты из Frontiers, она теперь подана как справочная информация, а не как обзор текущего рынка; обновлены утверждения о двухгормональных системах и об автономном замкнутом цикле; уточнено, что контроллер – не всегда приложение на телефоне; удалены коммерческие торговые марки и числа пользователей без источников; исправлено OS-AID на *Open-Source Automated Insulin Delivery* @psonnera
- [Глоссарий](../UsefulLinks/Glossary.md): добавлены статьи **AID**, **FCL**, **HCL** и **OS-AID**, на них есть ссылки из **APS** и **Closed Loop** @psonnera
- Новая страница [Проверка разработчиков Android](#android-developer-verification): как будущее требование Google о проверке повлияет на установку самостоятельно собранных приложений, с бесплатными способами установки (ADB, расширенный процесс, аккаунт с ограниченным распространением) @psonnera

## June 2026

- [Сборка через браузер](#browser-build): перестроена в многостраничный процесс, где сначала принимается решение (Fork → хранилище ключей Вариант 1/Вариант 2 с отдельной страницей для каждого устройства → Google Диск → Сборка → Устранение неполадок); удалены вложенные вкладки, а установка File Manager Plus стала заметным отдельным шагом @psonnera
- [Введение](../Getting-Started/Introduction.md): термин *DIY* заменен на *OS-AID* (Open-Source Automated Insulin Delivery), добавлены Trio и Stelo, обновлена таблица совместимости помп и CGM @tmhastings

## March 2026

- [Добавлен вариант сборки из командной строки](../SettingUpAaps/CLIBuild.md) @je-l
- *Сборка на компьютере* переименована в *Сборку в Android Studio*. Имена файлов в адресах (URL) сохранены.

## January 2025

- Выпуск [3.4](#version3400) и сводное обновление документации (Мастер установки, версии для сборки на компьютере, Конфигуратор)
- Обновлен список CGM. Удалены Dexcom G5, Tomato, Glimp.
- [Интерфейс смены места установки](#Aapsscreens-site-rotation)
- [Режим работы](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## December 2025

- [Настройка профиля](../GettingHelp/ProfileTuning.md) от @robrub

## October 2025

- DiaKEM: новые установки не работают после обновления серверов @psonnera
- Удалено пропатченное приложение Libre 2 (устарело): не работает с новыми сенсорами @psonnera
- Переработана страница Omnipod DASH @XiTatiON

## August 2025

- Обновлены версии и требования к Android Studio
- Добавлен выпуск [3.3.2.1](#version3321), удалены упоминания Android 16 (исправлено)
- Добавлена [Сборка через браузер](#browser-build) @Angus

## May 2025

- Добавлена [страница обновления до 3.2.0.4](#update-aaps-3204) @psonnera

## January 2025

- Мастер быстрых настроек: [функция долгого нажатия](#Preferences-quick-wizard) @emilise
- Страница [Динамический ISF](../DailyLifeWithAaps/DynamicISF.md) переписана @emilise

## December 2024

- Документация [версии 3.3](#version3300) @emilise

## Ноябрь 2024

- Обновлена страница [Ваш профиль AAPS](../SettingUpAaps/YourAapsProfile.md) @emilise
- Перестроено содержание раздела [Смарт-часы Wear OS](../WearOS/BuildingAapsWearOS.md) @psonnera

## October 2024

- Обновлено несколько страниц:
  - [Сколько времени это займет](#preparing-how-long-will-it-take), [Обзор компонентов](../Getting-Started/ComponentOverview.md), [Прохождение целей](../SettingUpAaps/CompletingTheObjectives.md), [Ваш профиль AAPS](../SettingUpAaps/YourAapsProfile.md), [Конфигурация (Конфигуратор)](../SettingUpAaps/ConfigBuilder.md) & [Настройки](../SettingUpAaps/Preferences.md), [Экраны AAPS](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [Подсчет активных углеводов COB](../DailyLifeWithAaps/CobCalculation.md), [Динамический ISF](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Инструкция по сборке для Android Studio Ladybug](../SettingUpAaps/BuildingAaps.md) @tanja
- Техническая работа (процесс публикации документации, организация файлов...) @psonnera & @emilise

***

Нет истории изменений с марта 2022 по сентябрь 2024

При переработке для версии 3.2 часть устаревшей информации была удалена. Ее можно найти в документации предыдущей версии:

Документация AAPS 3.1 доступна [здесь](https://androidaps.readthedocs.io/en/3.1/index.html).

***

```{dropdown} Older updates (2019 to 2022)
**Февраль 2022**

- [Знак предупреждения о качестве ГК](#aaps-screens-bg-warning-sign) @tanja
- [Обновление для помп Medtronic](../CompatiblePumps/MedtronicPump.md) @dottedfingertips
- [Необходимые проверки после обновления до AAPS 3.0](Update3_0.md) @tanja
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) @Freloner @robertrub @vanelsberg
- Обновление документации для AAPS 3.0 (частично) @xJoe
- [Wear OS для AAPS 3.0](../WearOS/WearOsSmartwatch.md) @peterleimbach

**Январь 2022**

- [Устранение неполадок Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md) – обновление @tanja

**Декабрь 2021**

- [Сборка APK](../SettingUpAaps/BuildingAaps.md) – обновление для Android Studio Arctic Fox | 2020.3.1 @tanja
- Добавлена информация о [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) @MilosKozak

**Ноябрь 2021**

- Лучшие практики калибровки сенсора Libre 2
- [ISF](../UsefulLinks/FAQ.md): новое описание влияния
- Обновление [устранения неполадок Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- Удалено пропатченное приложение [Dexcom](../CompatibleCgms/DexcomG6.md), так как оно устарело

**Октябрь 2021**

- [Примечания к изменениям в версиях](ReleaseNotes.md) AAPS 3.0 beta

**Сентябрь 2021**

- Рекомендуемые характеристики компьютера, чтобы [собрать приложение AAPS](#Building-APK-recommended-specification-of-computer-for-building-apk-file)

**Июнь 2021**

- [Установка циферблата вручную (sideload)](../WearOS/WearOsSmartwatch.md)

**Апрель 2021**

- Список [устройств связи](#CompatiblePumps-additional-communication-device) для помп Omnipod и Medtronic
- Прогнозы AAPS в [Nightscout](#Nightscout-manual-nightscout-setup)

**Март 2021**

- Общение разработчиков перенесено из gitter в [discord](https://discord.gg/4fQUWHZ4Mw)

**Февраль 2021**

- Новая панель навигации и [переключение языка](../NavigateDoc/ChangeLanguageVersion.md)

**Январь 2021**

- [Вкладка «Действия»](#screens-action-tab) – больше подробностей на странице «Экраны AAPS»
- Dexcom G6 с [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)
- [Уровень заряда батареи](#screens-sensor-level-battery) смарт-ридера Libre
- [Цели](#objectives-objective3) – новые вопросы
- Другие [новые функции AAPS 2.8.0](#Releasenotes-version-2-8-0)

**Декабрь 2020**

- [Libre 2](../CompatibleCgms/Libre2.md) – пропатченное приложение не работает с сенсорами из США
- [Жестко заданные ограничения OpenAPS](#Open-APS-features-overview-of-hard-coded-limits)
- Sony Smartwatch 3: ручная установка сервисов Google Play

**Октябрь 2020**

- Accu-Chek Combo – обновление [настройки времени при переходе на летнее время](#time-adjustment-daylight-savings-time-dst)
- Accu-Chek Insight – возможность [загружать абсолютные значения](#Accu-Chek-Insight-Pump-settings-in-aaps)
- Журналы – больше подробностей о [расположении папки](../GettingHelp/AccessingLogFiles.md)
- Omnipod Eros – обновление статуса
- [SMS команды – синхронизация времени](../RemoteFeatures/SMSCommands.md)

**Сентябрь 2020**

- Большое обновление для новой версии AAPS 2.7
- Подробности смотрите в [примечаниях к изменениям в версиях](#Releasenotes-version-2-7-0)

**Июнь 2020**

- Libre 2 – больше подробностей о пропатченном приложении Libre Link & использовании Bluetooth-трансмиттеров
- [Смена часового пояса в поездках](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) с Libre 2

**Май 2020**

- [Пролонгированный болюс только для помп Dana и Insight](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Insight: отключение вибрации](#Accu-Chek-Insight-Pump-vibration) (только прошивка 3.x)
- [Минимальное изменение запроса](#Preferences-minimal-request-change), чтобы уменьшить число уведомлений в режиме открытого цикла
- Пропатченное приложение Libre Link – проверьте, правильно ли оно пропатчено
- [Линии прогноза](#aaps-screens-prediction-lines) – больше подробностей

**Апрель 2020**

- Ввод инсулина задним числом (например, введенного шприцем)
- Поддержка Android 6 будет прекращена в следующей версии master

**Март 2020**

- [Сборка apk в Android Studio 3.6.1](../SettingUpAaps/BuildingAaps.md)
- [DanaRS с прошивкой v3](../CompatiblePumps/DanaRS-Insulin-Pump.md) **пока нельзя использовать с AAPS!**
- [Пролонгированный болюс и переход в открытый цикл](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Обновление apk в Android Studio 3.6.1](../Maintenance/UpdateToNewVersion.md)

**Февраль 2020**

- Предостережения по автоматизации
- [Autosens](#Open-APS-features-autosens) – краткое объяснение
- Альтернативы порталу терапии
- Функция [пролонгированного болюса](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) – замкнутый цикл будет отключен
- Новый [модуль «Локальный профиль»](../SettingUpAaps/ConfigBuilder.md)
- Пример настройки – обновление для Dexcom G6
- [Версия 2.6.0](#Releasenotes-version-2-6-0) – важные новые функции
- [Дополнения для Wear](../WearOS/WearOsSmartwatch.md)

**Январь 2020**

- [Ручная коррекция углеводов](#screens-bolus-carbs) при ошибочном вводе углеводов
- [Размер изображений](../SupportingAaps/HowToEditTheDocs.md) при редактировании документации

**Декабрь 2019**

- [Android Auto](../RemoteFeatures/AndroidAuto.md) – настройка со снимками экрана
- [Accu-Chek Insight & Autotune](#Accu-Chek-Insight-Pump-settings-in-aaps) – обходной путь для использования
- [Glimp](#Config-Builder-bg-source) – поддерживается версия 4.15.57 и новее
- [Циферблаты](../WearOS/WearOsSmartwatch.md) – большое обновление, намного больше подробностей
- [Дополнения циферблата](#Watchfaces-complications) – используйте любимый циферблат с данными AAPS

**Ноябрь 2019**

- [Автоматизация – отключается при отключении цикла](../DailyLifeWithAaps/Automations.md)
- [Dexcom G6: обновление о замене трансмиттера](#xdrip-replace-transmitter)
- [Пролонгированный болюс – почему он не работает в замкнутом цикле](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Часто задаваемые вопросы – спорт](#FAQ-sports)
- [Главный экран – линии на графике](#aaps-screens-main-graph)
- [Insight – отключение абсолютных значений в клиенте NS](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Помпа Medtronic – возможные двойные записи](../CompatiblePumps/MedtronicPump.md)
- [Новое руководство по Freestyle Libre 2](../CompatibleCgms/Libre2.md)
- [Переключение профиля с процентом – пример](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
- [Обновление SMS команд](../RemoteFeatures/SMSCommands.md)
- [Устранение неполадок Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- [Устранение неполадок – собрание ссылок](../GettingHelp/GeneralTroubleshooting.md)
- Обновление – краткий обзор для опытных пользователей
- Документация – обновление разделов о [редактировании](#edit-the-docs-code-syntax) и [переводе](#translations-translation-of-the-documentation).

**Октябрь 2019**

- Обновления [версии AAPS 2.5](#Releasenotes-version-2-5-0) (особенно на [странице обновления](../Maintenance/UpdateToNewVersion.md))
- [Accu-Chek Insight – параметры журнала](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Подсчет COB на отдельной странице](../DailyLifeWithAaps/CobCalculation.md)
- [COB – обнаружение неверного значения COB](#CobCalculation-detection-of-wrong-cob-values)
- [Устранение неполадок, специфичных для Dexcom G6](#DexcomG6-troubleshooting-g6)
- [Обновление целей для версии 2.5](../SettingUpAaps/CompletingTheObjectives.md)
- [Обновление настроек](../SettingUpAaps/Preferences.md)
- [Ингибиторы SGLT-2 – не используйте с замкнутым циклом](#PreparingForAaps-no-sglt-2-inhibitors)
- [Устранение неполадок SMS команд](#SMSCommands-troubleshooting)
- [xDrip – обновление о замене трансмиттера G6](#xdrip-replace-transmitter)

**Сентябрь 2019**

- [Автоматизация](../DailyLifeWithAaps/Automations.md)
- [Калькулятор болюса](#AapsScreens-wrong-cob-detection) – медленное усвоение углеводов
- [Безопасность Nightscout](#Nightscout-security-considerations)
- [Сдвиг времени профиля](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) (больше подробностей)
- [Удаленный мониторинг](../RemoteFeatures/RemoteMonitoring.md)
- [Что такое система замкнутого цикла?](#Introduction-what-does-hybrid-closed-loop-mean)

**Август 2019**

- Регион пропатченного приложения Dexcom G6
- [Новый трансмиттер Dexcom G6](#xdrip-connect-g6-transmitter-for-the-first-time) («firefly» / 8G...)
- Что мне нужно? - новая структура & дополнительная информация
- Новая структура
```
