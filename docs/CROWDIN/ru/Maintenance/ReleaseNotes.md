(Releasenotes-release-notes)=
# Примечания к изменениям в версиях

Please follow the instructions in the [update manual](UpdateToNewVersion). На ее страницах решаются наиболее распространенные проблемы связанные с обновлениями.

Как только будет доступно новое обновление вы получите следующую информацию:

![Update info](../images/AAPS_LoopLGS60days.png)



У вас есть 60 дней для обновления. If you do not update within these 60 days AAPS will fall back to LGS (low glucose suspend - see [glossary](../UsefulLinks/Glossary.md)) as in [objective 6](#objectives-objective6).

Если вы не обновитесь еще 30 дней (90 дней с новой даты выпуска) AAPS переключится в режим открытого цикла.

![Update info](../images/AAPS_LoopDisable90days.png)

Имейте в виду, что это изменение не предназначено для того, чтобы действовать вам на нервы, а существует по соображениям безопасности. Новые версии AndroidAPS не только обеспечивают новые возможности, но и содержат исправления безопасности. Поэтому необходимо, чтобы каждый пользователь обновлял приложение как можно чаще.. К сожалению, все еще поступают сообщения об ошибках из очень старых версий, поэтому это попытка повысить безопасность каждого пользователя и всего сообщества. Благодарим за понимание!

```{admonition} First version of AAPS
:class: примечание

Первая тестовая версия была запущена в 2015 году. В 2016 году была выпущена первая версия.

Хронология этих выпусков пока не доступна, но так как эти вопросы часто задаются пользователями, мы фиксируем здесь ход событий.

```
![AAPS 1.0](../images/update/AAPS1.0.png)

(maintenance-android-version-aaps-version)=

## Версия Android и версия AAPS

Если смартфон имеет версию Android до Android 9, AAPS 3.. 0 и выше, будут недостуgys так как AAPS требует Android 9 и выше.

Чтобы пользователи более старой версии Android могли применять старые версии AAPS для них была изменена только проверка версий. Никаких других улучшений не включено.

### Android 11 and up

- Пользуйтесь новейшей версией AAPS
- Скачайте код AAPS с <https://github.com/nightscout/AndroidAPS>

### Android 9,10

- Use AAPS version **3.2.0.4**
- Download AAPS Code from <https://github.com/nightscout/AndroidAPS> branch 3.2.0.4

### Android 8

- Используйте AAPS версию **2.8.2.1**
- Скачайте код AAPS с <https://github.com/nightscout/AndroidAPS> ветка 2.8.2.1

### Android 7

- Используйте AAPS версию **2.6.2**
- Скачайте код AAPS с <https://github.com/nightscout/AndroidAPS> ветка 2.6.2

## Версия WearOS

- AAPS requires at least WearOS API level 28 (Android 9)

```{tip}
WearOS 5, API level 34 (Android 14) has [limitations](#BuildingAapsWearOs-WearOS5).
```

(version3300)=
## Version 3.3.0.0

Version 3.3 is close ! Use the version switcher at the bottom right of your screen to see what's new.

![Открыть меню языка](../images/documentation_language_menu.png)

(version3200)=
## Версия 3.2.0.0, посвященная @Philoul

Дата выпуска: 23-10-2023

### Важные Примечания

- Требуется NS 15
- При подключении к NS через модуль v3 с помощью NS UI (кнопки плюс) и других приложений, использующих v1 APS, терапия не отправляется на AAPS. Это будет исправлено в будущем релизе NS. Всегда пользуйтесь одной и той же версией (v1 или v3) в AAPS и AAPSClient до тех пор, пока NS не полностью не переключится на v3. То же самое верно и для самого AAPS и AAPSClient.
- Веб-сокеты в модуле v3 работают аналогично v1. Без веб-сокетов AAPS по графику загружает данные из NS, что снижает энергопотребление т. к. NS не подключен постоянно. С другой стороны это означает задержки в обмене данными. Please read [here](#Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS) the important comments from the dev team before you use it!
- Если вы используете xdrip в качестве источника ГК, из-за внутренних изменений после обновления следует выбрать его снова
- Для прохождения первой цели в качестве замены Nightscout может использоваться Tidepool
- Если вы отправляете на xDrip+ необходимо настроить модуль синхронизации xDrip. Для получения показаний ГК от AAPS в xDrip, необходимо выбрать "xDrip+ Sync Follower" в качестве источника
- Если вы хотите переключиться на ComboV2, следует деинсталлировать Ruffy и заново подключить помпу к AAPS
- Для использования модуля DynISF необходимо запустить Цель 11 (все предыдущие должны быть завершены, чтобы разрешить запуск 11)


### Изменения

- EOPatch2 / GlucomenDay - драйверы помп @jungsomyeonggithub @MilosKozak
- Драйвер помпы ComboV2 (нет необходимости в Ruffy) @dv1
- Драйвер Medtrum Nano @jbr7rr
- * Поддержка корейской Dana-i @MilosKozak
- Поддержка мониторинга Glunovo @christinadamianou
- Поддержка G7 @MilosKozak @rICTx-T1D @khskekec
- Модуль NSClient v3 @MilosKozak
- Поддержка Tidepool @MilosKozak
- Модуль для сглаживания @MilosKozak, @justmara, экспоненциальное сглаживание @nichi (Tsunami), Среднее сглаживание @jbr7rr
- Модуль DynamicISF @Chris Wilson, @tim2000s
- Циферблат для Garmin & Поддержка сердцебиения @buessow
- Новый логотип @thiagomsoares
- Новый циферблат @Philoul
- Исправлены тонны глюков версии 3.1
- больше мест для добавления заметок @Сергей Зорченко
- Коррекция интерфейса @MilosKozak @osodebailar @Andries-Smit @yodax @Philoul @dv1 @paravoid
- новые SMS команды LOOP LGS/CLOSED @pzadroga
- переводы для wear @Andries-Smit
- связь с xdrip перенесена в отдельный модуль @MilosKozak
- внутренние изменения: обновленные версии библиотек, перенос rx3, новая структура модулей @MilosKozak
- Исправления в драйвере Diaconn @miyeongkim
- больше вариантов обслуживания базы данных @MilosKozak
- AAPSClient предоставляет информацию о подключении основного телефона к эликтричеству @MilosKozak
- Изменение в Калькуляторе болюса. Если ГК не доступна, процент игнорируется (используется 100%)
- миграция на систему сборки Kts @MilosKozak
- улучшена интеграция в CI @MilosKozak @buessow
- чистка тестирования @ryanhaining @MilosKozak
- новые 110k+ строк кода, изменены 240k строк, 6884 измененных файлов

(важные-комментарии-об-использовании-v3-против-v1-API-для-Nightscout-с-AAPS)=
### Важные комментарии об использовании API v3 по сравнению с v1 для Nightscout с AAPS

v1 - это старый протокол обмена данными между сайтом NS и сервером NS. Он имеет много ограничений
- v1 отправляет данные только за 2 дня
- v1 отправляет данные за 2 дня при каждом присоединении
- использование веб-сокетов является обязательным = постоянная связь, больше потребление батареи
- во время частых отключений соединение с NS приостанавливается на 15 минут для предотвращения большого расходования данных

v3 - новый протокол. Более безопасный и эффективный
- при использовании токенов можно лучше определить права доступа
- протокол эффективней с обеих сторон (AAPS & NS)
- Он может читать до 3 месяцев данных NS
- есть выбор использовать или не использовать веб-сокеты на всех устройствах (использовать означает более быстрые обновления, не использовать означает меньший расход питания, но медленнее обновляется. минуты)
- NSClient не приостанавливается при отключении

ОГРАНИЧЕНИЯ
- с AAPS 3.2 должен использоваться NS 15
- v3 не видит обновления, созданные протоколом v1 (вероятно, это будет исправлено в будущих версиях NS)
- наоборот, из-за старого неэффективного метода отслеживания изменений v1 видит изменения, внесенные v3
- помните, NS внутри себя все еще использует версию v1, поэтому, если у вас v3, то пока что невозможно вводить данные через веб-интерфейс NS. если требуется ввести данные удаленно пользуйтесь AAPSClient и SMS,

РЕКОМЕНДУЕМЫЕ НАСТРОЙКИ
- ввиду вышеизложенного следует выбрать только один метод и использовать его на всех устройствах (все действующие загрузчики в момент написания используют v1). Если вы решите перейти на v3, выберите v3 в AAPS и на всех AAPSClient
- v3 предпочтительнее из-за большей эффективности
- использование или неиспользование веб-сокетов с v3 зависит от ваших предпочтений
- настоятельно рекомендуется позволить AAPS собирать все данные и затем загружать в Nightscout в качестве единого загрузчика. Все остальные устройства/приложения должны читать только из NS. Тем самым вы предотвратите конфликты и ошибки синхронизации. Это также касается и передачи данных ГК в NS с помощью Dexcom Share и т. д

## Версия 3.1.0

Дата выпуска: 19-07-2022

(Releasenotes-important-hints-3-1-0)=
### Важные Примечания

- после обновления удалите приложение Wear и установите новую версию
- Пользователи Omnipod: обновитесь при смене pod !!!

### Изменения

- исправлены неполадки версии 3.0
- исправлено зависание приложения @MilosKozak
- исправлен драйвер DASH @avereha
- исправлены драйверы Dana @MilosKozak
- значительное улучшен интерфейс, очистка и объединение, переход на material desighn, стили, белые темы, новые иконки. @Andries-Smit @MilosKozak @osodebailar @Philoul
- виджет @MilosKozak
- Поддержка мониторинга Aidex CGM @andyrozman @markvader (только Pumpcontrol)
- Watch [Wear OS tiles](#WearOsSmartwatch-wear-os-tiles), translations @Andries-Smit
- Код Wear переделан. Обратной совместимости больше нет @MilosKozak
- улучшения A11y @Andries-Smit
- новый параметр защиты PIN @Andries-Smit
- масштабирование графика из меню @MilosKozak
- больше статистики @MilosKozak
- Модуль шприц-ручек удален в пользу виртуальной помпы
- новое действие автоматизации: Остановка обработки (по правилам)

## Версия 3.0.0

Дата выпуска: 31-01-2022

(Releasenotes-important-hints-3-0-0)=
### Важные Примечания

- **Минимальная версия Android теперь 9.0.**
- **Данные не переносятся в новую базу данных.** Не жалуйтесь, это практически невозможно. Таким образом после обновления данные IOB, COB, терапии и т. д. You have to create new [profile switch](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) and start with zero IOB and COB. Планируйте обновление тщательно!!! Лучшая ситуация - без активного инсулина и углеводов
- Используйте одну версию AAPS и NSClient

**Make sure to check and adjust settings after updating to 3.0 as described** [here](../Maintenance/Update3_0.md).

### Этапы подготовки

**Не менее чем за два дня до обновления:**

- отключите Dexcom bridge в Nightscout
- если вы используете G5/G6 и xDrip в качестве коллектора, вам необходимо обновить xDrip до версии, новее чем 14 января 2022
- если вы используете G5/G6 рекомендуется переход на самостоятельно собранное приложение BYODA, так как рекомендуется чтобы коллектор использовал обратное сглаживание (вы по-прежнему можете использовать xDrip для других целей, xDrip может получать данные от BYODA)

### Изменения

- изменено 100k строк, 105k новых строк кода

- [Omnipod DASH support](../CompatiblePumps/OmnipodDASH.md) @AdrianLxM @avereha @bartsopers @vanelsberg

- [Dana-i support](../CompatiblePumps/DanaRS-Insulin-Pump.md) @MilosKozak

- [Поддержка DiaconnG8](../CompatiblePumps/DiaconnG8.md)

- Поддержка Glunovo

- Внутренняя база данных обновлена до Room @MilosKozak @Tebbe @AdrianLxm @Philoul @andyrozman

- Часть кода переписана на Kotlin @MilosKozak

- Новый интерфейс для драйверов помп

- NSClient переписан для лучшей синхронизации и более детальной настройки @MilosKozak

  - Удаление записи из NS не допускается (аннулирование только через NSClient)
  - Модификация записи из NS не допускается
  - Доступны настройки синхронизации без перехода в инженерный режим (для родителей)
  - Возможность повторной синхронизации данных

- Изменение поведения смены профиля. Теперь имеется различие между Переключением Профилей *(чего хочет пользователь)* и Изменением Профиля *(когда изменение инициируется помпой)* @MilosKozak @Tebbe

- Можно начать выполнение временной цели при создании переключателя профиля @MilosKozak

- NSProfile отсутствует, остался только локальный профиль. Local profile can be [synced to NS](#Update3_0-nightscout-profile-cannot-be-pushed). @MilosKozak.

- Forgotten [master password reset procedure](#Update3_0-reset-master-password) @MilosKozak

- Отслеживание действий пользователя @Philoul

- Новый триггер автоматизации - значение временной цели - TempTargetValue @Philoul

- Новая автоматизация на портале терапии @Philoul

- Напоминание о дополнительном болюсе в диалоге об углеводах @Philoul

- Улучшение калькулятора болюса

- Улучшения пользовательского интерфейса @MilosKozak

- Новые пользовательские кнопки для автоматизации @MilosKozak

- Новый макет автоматизации @MilosKozak

- Браузер истории обновлён и исправлен @MilosKozak

- Цель 9 удалена @MilosKozak

- Исправлена ошибка, связанная с нестабильными данными CGM @MilosKozak

- Улучшение связи с DanaR и DanaRS @MilosKozak

- Интеграция с CircleCI @MilosKozak

- Изменение местоположения файлов:

  - /AAPS/extra (инженерный режим)
  - /AAPS/logs /AAPS/exports
  - /AAPS/preferences

## Версия 2.8.2

Дата выпуска: 23-01-2021

- Please see also [important hints for version 2.8.1.1](#version-2811) below.

### Изменения

- Улучшения стабильности
- больше подстроек для Android 8+
- улучшенные иконки
- улучшения для смарт-часов
- Исправления для NSClient
- Помощник болюса теперь работает с Pumpcontrol и NSClient

## Версия 2.8.1.1

Дата выпуска: 12-01-2021

(important-hints-2-8-1-1)=
### Важные Примечания

- Параметр **NS_UPLOAD_ONLY** (только загрузка в NS) был принудительно включен для всех пользователей 2.8.1.
- Если вы используете NSClient для ввода временных целей TT, углеводов или переключения профиля, вы должны отключить это в AAPS, но **только в том случае, если синхронизация работает хорошо** (т. е. вы не видите нежелательных изменений данных, таких как спонтанная модификация ТТ, ТБР и т. д.).
- ВНИМАНИЕ: НЕ делайте это, если есть какие-либо другие приложения обработки (например, трансляция и загрузка/синхронизация xDrip...).
- NS_UPLOAD_ONLY может быть выключен только в инженерном режиме.

### Основные изменения

- улучшения и исправления RileyLink, помпы Omnipod и подачи инсулина шприц-ручками
- принудительный режим загрузки в NS NS_UPLOAD_ONLY
- исправления SMB и приложения Dexcom
- Исправления циферблатов смарт-часов
- улучшена отчетность о сбоях
- понижена версия системы автоматической сборки gradle для разрешения прямой установки приложения на смарт-часы
- Исправления автоматизации
- Улучшение работы драйвера помпы Dana RS
- исправлен ряд сбоев
- Исправления и улучшения интерфейса
- новые переводы

(Releasenotes-version-2-8-0)=
## Версия 2.8.0

Дата выпуска: 01-01-2021

### Важные Примечания

- **Минимальная версия теперь Android 8.0.** Для более старых версий Android, все еще можно использовать 2.6.1.4 в старом репозитории.
- [Objectives have changed.](#objectives-objective3) **Finish not completed objectives before update.**
- Репозиторий все еще на <https://github.com/nightscout/AndroidAPS> . If you are not familiar with git the easiest way for update is remove directory with AAPS and do a [new clone](../SettingUpAaps/BuildingAaps.md).
- Используйте [](https://developer.android.com/studio/) Android Studio версии 4.1.1 или новее для построения apk.

### Новые возможности

- [Omnipod Eros support](../CompatiblePumps/OmnipodEros.md) @bartsopers @andyrozman @ktomy @samspycher @TeleRiddler @vanelsberg @eurenda and special thanks to @ps2 @itsmojo, everybody else involved in the Loop driver for Omnipod and @jlucasvt from GetRileyLink.org
- [bolus advisor](#Preferences-quick-wizard) & [eating reminder](#AapsScreens-section-j) @MilosKozak
- New watchface @rICTx-T1D
- Улучшение связи с Dana RS @MilosKozak
- Удален алгоритм "Неизмененные значения CGM " в SMB для оригинального приложения Dexcom
- New [Low Ressolution Skin](#Preferences-skin)
- New ["Pregnant" patient type](#Open-APS-features-overview-of-hard-coded-limits) @Brian Quinion
- Новый макет вкладки NSClient @MilosKozak
- Передача данных об инсулине, чувствительности и настройках отображения непосредственно с приложения AAPS @MilosKozak
- [Preferences filter](../SettingUpAaps/Preferences.md) @Brian Quinion
- Новые иконки помп @Rig22 @@teleriddler @osodebailar
- New [insulin type Lyumjev](#Config-Builder-lyumjev)
- Улучшения Помощника настройки @MilosKozak
- Улучшения безопасности @dlvoy
- Различные улучшения и исправления @AdrianLxM @Philoul @swissalpine @MilosKozak @Brian Quinion

(Releasenotes-version-2-7-0)=
## Версия 2.7.0

Дата выпуска: 24-09-2020

**Make sure to check and adjust settings after updating to 2.7 as described** [here](../Maintenance/Update2_7.md).

You need at least start [objective 11 (in later versions objective 10!)](#objectives-objective10) in order to continue using [Automation feature](../DailyLifeWithAaps/Automations.md) (all previous objectives must be completed otherwise starting Objective 11 is not possible). If for example you did not finish the exam in [objective 3](#objectives-objective3) yet, you will have to complete the exam before you can start [objective 11](#objectives-objective11). Это не повлияет на другие цели, которые вы уже выполнили. У вас сохранятся все завершенные цели!

### Новые возможности

- внутреннее использование зависимостей инъекций, библиотеки обновлений, код переписан на kotlin @MilosKozak @AdrianLxM
- применение модулей для помп Dana @MilosKozak
- [new layout, layout selection](../DailyLifeWithAaps/AapsScreens.md) @MilosKozak
- new [status lights layout](#Preferences-status-lights) @MilosKozak
- [multiple graphs support](#AapsScreens-activate-optional-information) @MilosKozak
- [Profile helper](../SettingUpAaps/YourAapsProfile.md) @MilosKozak
- visualization of [dynamic target adjustment](#AapsScreens-visualization-of-dynamic-target-adjustment) @Tornado-Tim
- new [preferences layout](../SettingUpAaps/Preferences.md) @MilosKozak
- Обновление алгоритма микроболюсов SMB @Tornado-Tim
- [Low glucose suspend mode](#Preferences-aps-mode) @Tornado-Tim
- [carbs required notifications](#key-aaps-features-minimal-carbs-required-for-suggestion) @twain47 @Tornado-Tim
- удален портал терапии Careportal (перемещен в Действия) @MilosKozak
- [new encrypted backup format](ExportImportSettings.md) @dlvoy
- [new SMS TOTP authentication](../RemoteFeatures/SMSCommands.md) @dlvoy
- [new SMS PUMP CONNECT, DISCONNECT](#SMSCommands-commands) commands @Lexsus
- улучшена поддержка микро базалов на помпах Dana @Mackwe
- небольшие исправления для помпы Insight @TebbeUbben @MilosKozak
- ["Default language" option](#Preferences-general) @MilosKozak
- векторные иконки @Philoul
- [set neutral temps for MDT pump](#MedtronicPump-configuration-of-the-pump) @Tornado-Tim
- Улучшения в журнале @MilosKozak
- удалён алгоритм OpenAPS MA @Tornado-Tim
- Удалена чувствительность Oref0 @Tornado-Tim
- [Biometric or password protection](#Preferences-protection) for settings, bolus @MilosKozak
- [new automation trigger](../DailyLifeWithAaps/Automations.md) @PoweRGbg
- [Open Humans uploader](../SupportingAaps/OpenHumans.md) @TebbeUbben @AdrianLxM
- Новая документация @Achim

(Releasenotes-version-2-6-1-4)=
## Версия 2.6.1.4

Дата выпуска: 04-05-2020

Используйте [](https://developer.android.com/studio/) Android Studio версии 3.6.1 или новее для построения apk.

### Новые возможности

- Insight: Выключение вибрации при болюсах на версии прошивки 3-вторая попытка
- В остальном эквивалентна 2.6.1.3. Обновление не является обязательным.

## Версия 2.6.1.3

Дата выпуска: 03-05-2020

Используйте [](https://developer.android.com/studio/) Android Studio версии 3.6.1 или новее для построения apk.

### Новые возможности

- Insight: Выключение вибрации при болюсах на версии прошивки 3
- В остальном эквивалентна 2.6.1.2. Обновление не является обязательным.

## Версия 2.6.1.2

Дата выпуска: 19-04-2020

Используйте [](https://developer.android.com/studio/) Android Studio версии 3.6.1 или новее для построения apk.

### Новые возможности

- Исправлен сбой в службе Insight
- В остальном эквивалентна 2.6.1.1. Если эта ошибка не влияет на вас, обновление не требуется.

## Версия 2.6.1.1

Дата выпуска: 06-04-2020

Используйте [](https://developer.android.com/studio/) Android Studio версии 3.6.1 или новее для построения apk.

### Новые возможности

- Исправлена ошибка команды SMS CARBS при использовании помпы Combo
- В остальном эквивалентна 2.6.1. Если эта ошибка не влияет на вас, обновление не требуется.

## Версия 2.6.1

Дата выпуска: 21-03-2020

Используйте [](https://developer.android.com/studio/) Android Studio версии 3.6.1 или новее для построения apk.

### Новые возможности

- Возможность вводить только `https://` в настройках NSClient
- Fixed [BGI](../UsefulLinks/Glossary.md) displaying bug on watches
- Исправлены мелкие ошибки интерфейса
- Исправлены сбои Insight
- Исправлены углеводы в будущем с помпой Combo
- Fixed LocalProfile -> NS sync
- Улучшения оповещений Insight
- Улучшено обнаружение болюсов в истории помпы
- Исправлены параметры соединения NSClient (wifi, зарядка)
- Исправлена отправка калибровок в xDrip

(Releasenotes-version-2-6-0)=
## Версия 2.6.0

Дата выпуска: 29-02-2020

Используйте [](https://developer.android.com/studio/) Android Studio версии 3.6.1 или новее для построения apk.

### Новые возможности

- Небольшие изменения дизайна (стартовая страница...)

- Careportal tab / menu removed

- New Local Profile plugin

  - Локальный профиль может иметь более 1 профиля
  - Профили можно копировать и редактировать
  - Возможность загружать профили на NS
  - Старые переключатели профиля можно клонировать на новый в LocalProfile (применяется сдвиг по времени и процент)
  - Вертикальный рандомайзер для целей

- SimpleProfile удален

- [Extended bolus](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) feature - closed loop will be disabled

- Плагин MDT: Исправлена ошибка с дублирующимися записями

- Единицы не указаны в профиле, но это глобальные параметры

- Добавлены новые параметры для мастера установки

- Измененный пользовательский интерфейс и внутренние улучшения

- [Усложнения для циферблатов Wear](../WearOS/WearOsSmartwatch.md)

- New [SMS commands](../RemoteFeatures/SMSCommands.md) BOLUS-MEAL, SMS, CARBS, TARGET, HELP

- Исправлена поддержка языков

- Objectives: [Allow to go back](#CompletingTheObjectives-go-back-in-objectives), Time fetching dialog

- Automation: [allow sorting](#Automations-the-order-of-the-automations-in-the-list-matters)

- Автоматизация: исправляется ошибка, когда автоматизация выполнялась с отключенным циклом

- Новая строка состояния для Combo

- Улучшенное состояние ГК

- Исправлена синхронизация врем целей с NS

- Новая статистика

- Разрешен пролонгированный болюс в режиме открытого цикла

- Поддержка оповещений Android 10

- Тонны новых переводов

## Версия 2.5.1

Дата выпуска: 31-10-2019

Please note the [important notes](#Releasenotes-version-2-5-0) and [limitations](#Releasenotes-is-this-update-for-me-currently-is-not-supported) listed for [version 2.5.0](#Releasenotes-version-2-5-0). \* Исправлена ошибка в сетевом состоянии, которые приводят к ошибкам (не критично, но будет тратить много энергии на пересчет). \* Новая иерархия версий, позволяющая выполнять незначительные обновления без уведомлений об обновлении.

(Releasenotes-version-2-5-0)=
## Версия 2.5.0

Дата выпуска: 26-10-2019

(Releasenotes-important-notes-2-5-0)=

### Важные Примечания

- Please use [Android Studio Version 3.5.1](https://developer.android.com/studio/) or newer to [build the apk](../SettingUpAaps/BuildingAaps.md) or [update](UpdateToNewVersion).
- If you are using xDrip [identify receiver](#xdrip-identify-receiver) must be set.
- Если вы используете Dexcom G6 с модифицированным приложением Dexcom, вам понадобится версия из папки [2.4](https://github.com/dexcomapp/dexcomapp/tree/master/2.4).
- Поддержка Glimp версии 4.15.57 и новее.

(Releasenotes-is-this-update-for-me-currently-is-not-supported)=
### Это обновление для меня? В настоящее время НЕ поддерживается

- Android 5 и ниже
- Poctech
- 600SeriesUploader
- Модифицированное приложение Dexcom из каталога 2.3

### Новые возможности

- Внутреннее изменение targetSDK на 28 (Android 9), поддержка jetpack
- Поддержка RxJava2, Okhttp3, Retrofit
- Old [Medtronic pumps](../CompatiblePumps/MedtronicPump.md) support (RileyLink need)
- New [Automation plugin](../DailyLifeWithAaps/Automations.md)
- Allow to [bolus only part](#Preferences-advanced-settings-overview) from bolus wizard calculation
- Рендеринг активности инсулина
- Корректировка прогнозов IOB с помощью результата autosense
- Новая поддержка модифицированных приложений Dexcom ([ папка 2.4 ](https://github.com/dexcomapp/dexcomapp/tree/master/2.4))
- Верификатор подписи
- Возможность обойти цели пользователям OpenAPS
- New [objectives](../SettingUpAaps/CompletingTheObjectives.md) - exam, application handling (If you started at least objective "Starting on an open loop" in previous versions exam is optional.)
- Исправлена ошибка в драйверах Dana*, где сообщалось о ложной разнице во времени
- Fixed bug in [SMS communicator](../RemoteFeatures/SMSCommands.md)

## Версия 2.3

Дата выпуска: 25-04-2019

### Новые возможности

- Важное решение безопасности для Insight (действительно важно, если вы используете Insight!)
- Исправлен браузер истории
- Исправление расчетов дельты
- Обновление переводов
- Проверка GIT и предостережение об обновлении gradle
- Больше автоматического тестирования
- Исправление потенциального сбоя в службе AlarmSound (спасибо @lee-b !)
- Исправлена передача данных ГК (теперь работает независимо от разрешения SMS!)
- Новый модуль проверки версий

## Версия 2.2.2

Дата выпуска: 07-04-2019

### Новые возможности

- Исправление Autosens: деактивировать значение временная цель ТТ повышает/понижает целевое значение
- Новые переводы
- Исправления драйверов Insight
- Исправление расширения SMS

## Версия 2.2

Дата выпуска: 29-03-2019

### Новые возможности

- [Исправление перехода на летнее время](#time-adjustment-daylight-savings-time-dst)
- Обновление Wear
- [SMS plugin](../RemoteFeatures/SMSCommands.md) update
- Возможность возврата к предыдущим целям.
- Остановка цикла, если память телефона заполнена

## Версия 2.1

Дата выпуска: 03-03-2019

### Новые возможности

- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md) support (by Tebbe Ubben and JamOrHam)
- Индикаторы состояния на главном экране (Nico Schmitz)
- Помощник перехода на летнее время (Румен Георгиев)
- Исправлеие обработки названий профилей, поступивших от NS (Johannes Mockenhaupt)
- Исправление блокировки интерфейса (Johannes Mockenhaupt)
- Поддержка обновленного приложения G5 (Tebbe Ubben и Milos Kozak)
- Поддержка G6, Poctech, Tomato, Eversense (Tebbe Ubben и Milos Kozak)
- Исправлено отключение SMB в настройках (Johannes Mockenhaupt)

### Misc

- Если вы задавали собственное значение `smbmaxminutes` нужно заново его настроить

## Версия 2.0

Дата выпуска: 03-11-2018

### Новые возможности

- поддержка oref1/SMB ([документация oref1](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)). Обязательно прочтите документацию, чтобы знать, чего ожидать от SMB, как он себя поведет, чего может достичь и как добиться его ровной работы.
- [\_Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump.md) pump support
- Мастер установки: направляет вас через процесс настройки AndroidAPS

(Releasenotes-settings-to-adjust-when-switching-from-ama-to-smb)=
### Настройки при переключении с AMA на SMB

- Для включения SMB необходимо начать выполнение цели 10 (вкладка SMB обычно показывает какие применяются ограничения)

- maxIOB теперь включает весь IOB, а не только добавленный базал. То есть, если дан болюс 8 ед. на еду a максимальный IOB ограничен 7 ед., то SMB не будет подан до тех пор, пока активный инсулин IOB не опустится ниже 7 ед.

- при переходе с AMA на SMB минимальное действие углеводов min_5m_carbimpact по умолчанию изменилось с 3 до 8. Если вы переходите с AMA к SMB, то вам нужно изменить его вручную

- Обратите внимание при создании приложения AndroidAPS 2.0: Выборочная Конфигурация не поддерживается текущей версией плагина Android Gradle! Если сборка выполнена с ошибкой, относящейся к "выборочной конфигурации", можно сделать следующее:

  - Откройте окно настроек, нажав Файл> Настройки (на Mac, Android Studio > Настройки).
  - В левой панели нажмите Сборка, Выполнение, Развертывание > Компилятор.
  - Снимите флажок с ячейки "выборочная конфигурация".
  - Нажмите Применить или OK.

(Releasenotes-overview-tab)=
### Вкладка обзора

- Верхняя полоса дает доступ к приостановке/отключению цикла, просмотру/настройке профиля и запуску/остановке временных целей (TT). Временные цели TT используют настройки по умолчанию. Новая опция Гипо TT является высокой временной целью TT для предотвращения слишком агрессивной реакции на корректирующие углеводы.
- Кнопки лечения: старая кнопка все еще доступна, но скрыта по умолчанию. Видимость кнопок теперь может быть сконфигурирована. New insulin button, new carbs button (including [eCarbs/extended carbs](../DailyLifeWithAaps/ExtendedCarbs.md))
- [Цветные линии прогноза](#aaps-screens-prediction-lines)
- Опция отображения поля заметок об инсулине/углеводах/калькуляторе/первичном заполнении которые передаются в NS
- Обновленное диалоговое окно «первичное/заполнение» позволяет заполнять инфузионный набор и вносить данные об изменении места установки и замене картриджа

### Часы

- Отдельный вариант сборки изъят, теперь включен в регулярную полную сборку. Чтобы иметь управления болюсами с часов, включите этот параметр на телефоне
- Мастер теперь запрашивает только углеводы (и процент, если он включен в настройках часов). То, какие параметры входят в расчет можно задать в настройках телефона
- диалоги подтверждения и информирования теперь работают и на wear 2.0
- Добавлена запись меню eCarbs

### Новые расширения

- Приложение PocTech в качестве источника данных ГК
- Измененное приложение Dexcom как источник ГК
- плагин чувствительности oref1

### Misc

- Приложение теперь использует меню для отображения расширений; плагины, выбранные как видимые в конфигураторе, показаны как вкладки сверху (избранное)
- Переработан конфигуратор и вкладки целей, добавлены описания
- Новый значок приложения
- Много улучшений и исправлений
- Независимые от Nightscout оповещения о недоступности помпы, (например, батарея помпы села) и пропущенных данных ГК (см. *Локальные оповещения* в настройках)
- Возможность держать экран включенным
- Опция отображения уведомлений как уведомление Android
- Расширенная фильтрация (позволяющая всегда включать SMB и на 6час. после еды) поддерживаемая модифицированным приложением Dexcom или xDrip в нативном режиме G5 в качестве источника ГК.
