(Releasenotes-release-notes)=
# Примечания к изменениям в версиях

Следуйте инструкциям [ в руководстве по обновлению](../Installing-AndroidAPS/Update-to-new-version.md). На ее страницах решаются наиболее распространенные проблемы связанные с обновлениями.

Как только будет доступно новое обновление вы получите следующую информацию:

```{image} ../images/AAPS_LoopDisable90days.png
:alt: Информация об обновлении
```

У вас есть 60 дней для обновления. Если вы не обновитесь в течение 60 дней AAPS войдет в режим LGS (приостановка на низких ГК - см. [глоссарий](../Getting-Started/Glossary.md)), [цель 6](../Usage/Objectives.html).

Если вы не обновитесь еще 30 дней (90 дней с новой даты выпуска) AAPS переключится в режим открытого цикла.

Имейте в виду, что это изменение не предназначено для того, чтобы действовать вам на нервы, а существует по соображениям безопасности. Новые версии AndroidAPS не только обеспечивают новые возможности, но и содержат исправления безопасности. Поэтому необходимо, чтобы каждый пользователь обновлял приложение как можно чаще.. К сожалению, все еще поступают сообщения об ошибках из очень старых версий, поэтому это попытка повысить безопасность каждого пользователя и всего сообщества. Благодарим за понимание!

```{admonition} First version of AAPS
:class: примечание

Первая тестовая версия была запущена в 2015 году. В 2016 году была выпущена первая версия.

Хронология этих выпусков пока не доступна, но так как эти вопросы часто задаются пользователями, мы фиксируем здесь ход событий.

```

## Версия Android и версия AAPS

Если смартфон имеет версию Android до Android 9, AAPS 3.. 0 и выше, будут недостуgys так как AAPS требует Android 9 и выше.

Чтобы пользователи более старой версии Android могли применять старые версии AAPS для них была изменена только проверка версий. Никаких других улучшений не включено.

### Android 9 и выше

- Пользуйтесь новейшей версией AAPS
- Скачайте код AAPS с <https://github.com/nightscout/AndroidAPS>

### Android 8

- Используйте AAPS версию **2.8.2.1**
- Скачайте код AAPS с <https://github.com/nightscout/AndroidAPS> ветка 2.8.2.1

### Android 7

- Используйте AAPS версию **2.6.2**
- Скачайте код AAPS с <https://github.com/nightscout/AndroidAPS> ветка 2.6.2

## Версия WearOS

- AAPS 3.2 требует не ниже WearOS API уровня 28 (Android 9)

## Версия 3.2.0.0, посвященная @Philoul

Дата выпуска: 23-10-2023

### Важные Примечания

- Требуется NS 15
- При подключении к NS через модуль v3 с помощью NS UI (кнопки плюс) и других приложений, использующих v1 APS, терапия не отправляется на AAPS. Это будет исправлено в будущем релизе NS. Всегда пользуйтесь одной и той же версией (v1 или v3) в AAPS и AAPSClient до тех пор, пока NS не полностью не переключится на v3. То же самое верно и для самого AAPS и AAPSClient.
- Веб-сокеты в модуле v3 работают аналогично v1. Без веб-сокетов AAPS по графику загружает данные из NS, что снижает энергопотребление т. к. NS не подключен постоянно. С другой стороны это означает задержки в обмене данными. Прежде чем пользоваться, читайте [здесь](Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS)важные комментарии разработчиков!
- Если вы используете xdrip в качестве источника ГК, из-за внутренних изменений после обновления следует выбрать его снова
- Для прохождения первой цели в качестве замены Nightscout может использоваться Tidepool
- Если вы отправляете на xDrip+ необходимо настроить модуль синхронизации xDrip. Для получения ГК от AAPS в xDrip необходимо выбрать источник "xDrip+ Sync Follower"
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
- fixed tons of issues from 3.1 version
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

RECOMMENDED SETTING
- ввиду вышеизложенного следует выбрать только один метод и использовать его на всех устройствах (все действующие загрузчики в момент написания используют v1). Если вы решите перейти на v3, выберите v3 в AAPS и на всех AAPSClient
- v3 предпочтительнее из-за большей эффективности
- использование или неиспользование веб-сокетов с v3 зависит от ваших предпочтений
- it HIGHLY recommended to let AAPS gather all data and then upload it to NS as a single uploader. Все остальные устройства/приложения должны читать только из NS. Тем самым вы предотвратите конфликты и ошибки синхронизации. This is valid for getting BG data to NS using Dexcom Share connector etc. too

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
- widget @MilosKozak
- Поддержка мониторинга Aidex CGM @andyrozman @markvader (только Pumpcontrol)
- `Плитки Wear OS<../Configuration/Configuration/Watchfaces.mdl#wear-os-tiles>`, переводы @Andries-Smit
- Код Wear переделан. Обратной совместимости больше нет @MilosKozak
- улучшения A11y @Andries-Smit
- новый параметр защиты PIN @Andries-Smit
- масштабирование графика из меню @MilosKozak
- больше статистики @MilosKozak
- Модуль шприц-ручек удален в пользу виртуальной помпы
- новое действие автоматизации: Остановка обработки (по правилам)

## Version 3.0.0

Дата выпуска: 31-01-2022

(Releasenotes-important-hints-3-0-0)=
### Важные Примечания

- **Minimum Android version is 9.0 now.**
- **Данные не переносятся в новую базу данных.** Не жалуйтесь, это практически невозможно. Thus after update IOB, COB, treatments etc. will be cleared. Следует создать новый [профиль](../Usage/Profiles.md) и начать с нулевыми IOB и COB. Планируйте обновление тщательно!!! Лучшая ситуация - без активного инсулина и углеводов
- Используйте одну версию AAPS и NSClient

**Проверьте настройки после обновления до 3.0, как описано** [здесь](../Installing-AndroidAPS/update3_0.md).

### Этапы подготовки

**Не менее чем за два дня до обновления:**

- отключите Dexcom bridge в Nightscout
- если вы используете G5/G6 и xDrip в качестве коллектора, вам необходимо обновить xDrip до версии, новее чем 14 января 2022
- если вы используете G5/G6 рекомендуется переход на самостоятельно собранное приложение BYODA, так как рекомендуется чтобы коллектор использовал обратное сглаживание (вы по-прежнему можете использовать xDrip для других целей, xDrip может получать данные от BYODA)

### Изменения

- изменено 100k строк, 105k новых строк кода

- [поддержка Omnipod Dash](../Configuration/OmnipodDASH.md) @Freloner @ robertrub @vanelsberg

- [поддержка Dana-i](../Configuration/DanaRS-Insulin-Pump.md) @MilosKozak

- [Поддержка DiaconnG8](../Configuration/DiaconnG8.md)

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

- NSProfile отсутствует, остался только локальный профиль. Локальный профиль может быть [синхронизирован с NS](update3_0-nightscout-profile-cannot-be-pushed). @MilosKozak.

- [процедура сброса забытого пароля](update3_0-reset-master-password) @MilosKozak

- Отслеживание действий пользователя @Philoul

- Новый триггер автоматизации - значение временной цели - TempTargetValue @Philoul

- Новая автоматизация на портале терапии @Philoul

- Напоминание о дополнительном болюсе в диалоге об углеводах @Philoul

- Улучшение калькулятора болюса

- UI improvements @MilosKozak

- New user buttons for automations @MilosKozak

- New automation layout @MilosKozak

- History browser updated and fixed @MilosKozak

- Objective9 removed @MilosKozak

- Fixed bug associated to unstable CGM data @MilosKozak

- DanaR and DanaRS communication improvement @MilosKozak

- CircleCI integration @MilosKozak

- Изменение местоположения файлов:

  - /AAPS/extra (инженерный режим)
  - /AAPS/logs /AAPS/exports
  - /AAPS/preferences

## Версия 2.8.2

Дата выпуска: 23-01-2021

- См. также [важные подсказки для версии 2.8.1.1](Releasenotes-important-hints-2-8-1-1) ниже.

### Изменения

- stability improvements
- *больше подстроек для Android 8+
- improved icons
- watch improvements
- NSClient fixes
- *Помощник болюса теперь работает с Pumpcontrol и NSClient

## Версия 2.8.1.1

Дата выпуска: 12-01-2021

(важные-подсказки-2-8-1-1)
### Важные Примечания

- Параметр **NS_UPLOAD_ONLY** (только загрузка в NS) был принудительно включен для всех пользователей 2.8.1.
- Если вы используете NSClient для ввода временных целей TT, углеводов или переключения профиля, вы должны отключить это в AAPS, но **только в том случае, если синхронизация работает хорошо** (т. е. вы не видите нежелательных изменений данных, таких как спонтанная модификация ТТ, ТБР и т. д.).
- ATTENTION: DO NOT do this if you have any other app handle treatments ( like xDrip broadcast/upload/sync...).
- NS_UPLOAD_ONLY can only be turned off if engineering mode is enabled.

### Основные изменения

- RileyLink, Omnipod and MDT pump improvements and fixes
- forced NS_UPLOAD_ONLY
- исправления SMB и приложения Dexcom
- watchface fixes
- crash reporting improved
- gradle reverted to allow direct watchface instalation
- automation fixes
- RS driver improvement
- various crashes fixed
- UI fixes and improvements
- new translations

(Releasenotes-version-2-8-0)=
## Версия 2.8.0

Дата выпуска: 01-01-2021

### Важные Примечания

- **Минимальная версия теперь Android 8.0.** Для более старых версий Android, все еще можно использовать 2.6.1.4 в старом репозитории.
- [Изменения в Целях](Objectives-objective-3-prove-your-knowledge) **Завершите незавершенные Цели перед обновлениями**
- Репозиторий все еще на <https://github.com/nightscout/AndroidAPS> . Если вы не знакомы с Git самый простой способ обновления- удалить каталог с AndroidAPS и [ клонировать заново](../Installing-AndroidAPS/Building-APK.md).
- Please use [Android Studio 4.1.1](https://developer.android.com/studio/) or newer to build the apk.

### Новые возможности

- [Omnipod Eros support](../Configuration/OmnipodEros.md) @bartsopers @andyrozman @ktomy @samspycher @TeleRiddler @vanelsberg @eurenda and special thanks to @ps2 @itsmojo, everybody else involved in the Loop driver for Omnipod and @jlucasvt from GetRileyLink.org
- [bolus advisor](Preferences-bolus-advisor) & [eating reminder](Screenshots-eating-reminder) @MilosKozak
- [New watchface](Watchfaces-new-watchface-as-of-AAPS-2-8) @rICTx-T1D
- Dana RS connection improvements @MilosKozak
- Removed "Unchanged CGM values" behavior in SMB for Dexcom native app
- New [Low Ressolution Skin](Preferences-skin)
- New ["Pregnant" patient type](Open-APS-features-overview-of-hard-coded-limits) @Brian Quinion
- New NSClient tablet layout @MilosKozak
- NSClient transfer insulin, senstivity and display settings directly from main AAPS @MilosKozak
- [Preferences filter](../Configuration/Preferences.md) @Brian Quinion
- New pump icons @Rig22 @@teleriddler @osodebailar
- New [insulin type Lyumjev](Config-Builder-lyumjev)
- SetupWizard improvements @MilosKozak
- Security improvements @dlvoy
- Various improvements and fixes @AdrianLxM @Philoul @swissalpine  @MilosKozak @Brian Quinion

(Releasenotes-version-2-7-0)=
## Версия 2.7.0

Дата выпуска: 24-09-2020

**Make sure to check and adjust settings after updating to 2.7 as described** [here](../Installing-AndroidAPS/update2_7.md).

You need at least start [objective 11 (in later versions objective 10!)](Objectives-objective-10-automation) in order to continue using [Automation feature](../Usage/Automation.md) (all previous objectives must be completed otherwise starting Objective 11 is not possible). If for example you did not finish the exam in [objective 3](Objectives-objective-3-prove-your-knowledge) yet, you will have to complete the exam before you can start [objective 11](Objectives-objective-10-automation). Это не повлияет на другие цели, которые вы уже выполнили. You will keep all finished objectives!

### Новые возможности

- internal use of dependency injection, updates libraries, code rewritten to kotlin @MilosKozak @AdrianLxM
- using modules for Dana pumps @MilosKozak
- [new layout, layout selection](../Getting-Started/Screenshots.md) @MilosKozak
- new [status lights layout](Preferences-status-lights) @MilosKozak
- [multiple graphs support](Screenshots-section-f-main-graph) @MilosKozak
- [Profile helper](../Configuration/profilehelper.md) @MilosKozak
- visualization of [dynamic target adjustment](Screenshots-visualization-of-dynamic-target-adjustment) @Tornado-Tim
- new [preferences layout](../Configuration/Preferences.md) @MilosKozak
- SMB algorithm update @Tornado-Tim
- [Low glucose suspend mode](Preferences-aps-mode) @Tornado-Tim
- [carbs required notifications](Preferences-carb-required-notification) @twain47 @Tornado-Tim
- removed Careportal (moved to Actions) @MilosKozak
- [new encrypted backup format](../Usage/ExportImportSettings.md) @dlvoy
- [new SMS TOTP authentication](../Children/SMS-Commands.md) @dlvoy
- [new SMS PUMP CONNECT, DISCONNECT](SMS-Commands-commands) commands @Lexsus
- better support for tiny basals on Dana pumps @Mackwe
- small Insight fixes @TebbeUbben @MilosKozak
- ["Default language" option](Preferences-general) @MilosKozak
- vector icons @Philoul
- [set neutral temps for MDT pump](MedtronicPump-configuration-of-the-pump) @Tornado-Tim
- History browser improvements @MilosKozak
- removed OpenAPS MA algorithm @Tornado-Tim
- removed Oref0 sensitivity @Tornado-Tim
- [Biometric or password protection](Preferences-protection) for settings, bolus @MilosKozak
- [new automation trigger](../Usage/Automation.md) @PoweRGbg
- [Open Humans uploader](../Configuration/OpenHumans.md) @TebbeUbben @AdrianLxM
- New documentation @Achim

(Releasenotes-version-2-6-1-4)=
## Версия 2.6.1.4

Дата выпуска: 04-05-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Новые возможности

- Insight: Disable vibration on bolus for firmware version 3 - second attempt
- Otherwise is equal to 2.6.1.3. Обновление не является обязательным.

## Версия 2.6.1.3

Дата выпуска: 03-05-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Новые возможности

- Insight: Disable vibration on bolus for firmware version 3
- Otherwise is equal to 2.6.1.2. Обновление не является обязательным.

## Версия 2.6.1.2

Дата выпуска: 19-04-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Новые возможности

- Fix crashing in Insight service
- Otherwise is equal to 2.6.1.1. Если эта ошибка не влияет на вас, обновление не требуется.

## Версия 2.6.1.1

Дата выпуска: 06-04-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Новые возможности

- Resolves SMS CARBS command issue while using Combo pump
- Otherwise is equal to 2.6.1. Если эта ошибка не влияет на вас, обновление не требуется.

## Версия 2.6.1

Дата выпуска: 21-03-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Новые возможности

- Allow to enter only `https://` in NSClient settings
- Fixed [BGI](../Getting-Started/Glossary.md) displaying bug on watches
- Fixed small UI bugs
- Fixed Insight crashes
- Fixed future carbs with Combo pump
- Fixed [LocalProfile -> NS sync](Config-Builder-upload-local-profiles-to-nightscout)
- Insight alerts improvements
- Improved detection of boluses from pump history
- Fixed NSClient connection settings (wifi, charging)
- Fixed sending of calibrations to xDrip

(Releasenotes-version-2-6-0)=
## Версия 2.6.0

Дата выпуска: 29-02-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Новые возможности

- Small design changes (startpage...)

- Careportal tab / menu removed - more details [here](../Usage/CPbefore26.md)

- Новый модуль (расширение/плагин) [ Локальный Профиль](Config-Builder-local-profile)

  - Local profile can hold more than 1 profile
  - Profiles can be cloned and edited
  - Ability of upload profiles to NS
  - Old profile switches can be cloned to new profile in LocalProfile (timeshift and percentage is applied)
  - Veritical NumberPicker for targets

- SimpleProfile is removed

- [Пролонгированный болюс](Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) - закрытый цикл будет отключен

- MDT plugin: Fixed bug with duplicated entries

- Units are not specified in profile but it's global setting

- Added new settings to startup wizard

- Different UI and internal improvements

- [Усложнения для циферблатов Wear](../Configuration/Watchfaces.md)

- New [SMS commands](../Children/SMS-Commands.md) BOLUS-MEAL, SMS, CARBS, TARGET, HELP

- Fixed language support

- Objectives: [Allow to go back](Objectives-go-back-in-objectives), Time fetching dialog

- Automation: [allow sorting](Automation-sort-automation-rules)

- Automation: fixed bug when automation was running with disabled loop

- New status line for Combo

- GlucoseStatus improvement

- Fixed TempTarget NS sync

- New statistics activity

- Allow Extended bolus in open loop mode

- Android 10 alarm support

- Tons on new translations

## Версия 2.5.1

Дата выпуска: 31-10-2019

Please note the [important notes](Releasenotes-important-notes-2-5-0) and [limitations](Releasenotes-is-this-update-for-me-currently-is-not-supported) listed for [version 2.5.0](Releasenotes-version-2-5-0). \* Fixed a bug in the network state receiver that lead to crashes with many (not critical but would waste a lot of energy re-calculating things). \* New versioning that will allow to do minor updates without triggering the update-notification.

(Releasenotes-version-2-5-0)=
## Версия 2.5.0

Дата выпуска: 26-10-2019

(Releasenotes-important-notes-2-5-0)=

### Важные Примечания

- Please use [Android Studio Version 3.5.1](https://developer.android.com/studio/) or newer to [build the apk](../Installing-AndroidAPS/Building-APK.md) or [update](../Installing-AndroidAPS/Update-to-new-version.html).
- If you are using xDrip [identify receiver](xdrip-identify-receiver) must be set.
- If you are using Dexcom G6 with the patched Dexcom app you will need the version from the [2.4 folder](https://github.com/dexcomapp/dexcomapp/tree/master/2.4).
- Glimp is supported from version 4.15.57 and newer.

(Releasenotes-is-this-update-for-me-currently-is-not-supported)=
### Это обновление для меня? В настоящее время НЕ поддерживается

- Android 5 and lower
- Poctech
- 600SeriesUploader
- Patched Dexcom from 2.3 directory

### Новые возможности

- Internal change of targetSDK to 28 (Android 9), jetpack support
- RxJava2, Okhttp3, Retrofit support
- Old [Medtronic pumps](../Configuration/MedtronicPump.md) support (RileyLink need)
- New [Automation plugin](../Usage/Automation.md)
- Allow to [bolus only part](Preferences-advanced-settings-overview) from bolus wizard calculation
- Rendering insulin activity
- Adjusting IOB predictions by autosens result
- New support for patched Dexcom apks ([2.4 folder](https://github.com/dexcomapp/dexcomapp/tree/master/2.4))
- Signature verifier
- Allow to bypass objectives for OpenAPS users
- New [objectives](../Usage/Objectives.md) - exam, application handling (If you started at least objective "Starting on an open loop" in previous versions exam is optional.)
- Fixed bug in Dana\* drivers where false time difference was reported
- Fixed bug in [SMS communicator](../Children/SMS-Commands.md)

## Версия 2.3

Дата выпуска: 25-04-2019

### Новые возможности

- Important safety fix for Insight (really important if you use Insight!)
- Fix History-Browser
- Fix delta calculations
- Language updates
- Check for GIT and warn on gradle upgrade
- More automatic testing
- Fixing potential crash in AlarmSound Service (thanks @lee-b !)
- Fix broadcast of BG data (works independently of SMS permission now!)
- New Version-Checker

## Версия 2.2.2

Дата выпуска: 07-04-2019

### Новые возможности

- Autosens fix: deactivate TT raises/lowers target
- New translations
- Insight driver fixes
- SMS plugin fix

## Версия 2.2

Дата выпуска: 29-03-2019

### Новые возможности

- [DST fix](Timezone-traveling-time-adjustment-daylight-savings-time-dst)
- Wear Update
- [SMS plugin](../Children/SMS-Commands.md) update
- Go back in objectives.
- Stop loop if phone disk is full

## Версия 2.1

Дата выпуска: 03-03-2019

### Новые возможности

- [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md) support (by Tebbe Ubben and JamOrHam)
- Status lights on main screen (Nico Schmitz)
- Daylight saving time helper (Roumen Georgiev)
- Fix processing profile names comming from NS (Johannes Mockenhaupt)
- Fix UI blocking (Johannes Mockenhaupt)
- Support for updated G5 app (Tebbe Ubben and Milos Kozak)
- G6, Poctech, Tomato, Eversense BG source support (Tebbe Ubben and Milos Kozak)
- Fixed disabling SMB from preferences (Johannes Mockenhaupt)

### Разное

- If you are using non default `smbmaxminutes` value you have to setup this value again

## Версия 2.0

Дата выпуска: 03-11-2018

### Новые возможности

- oref1/SMB support ([oref1 documentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)) Be sure to read the documentation to know what to expect of SMB, how it will behave, what it can achieve and how to use it so it can operate smoothly.
- [\_Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md) pump support
- Setup wizard: guides you through the process of setting up AAPS

(Releasenotes-settings-to-adjust-when-switching-from-ama-to-smb)=
### Настройки при переключении с AMA на SMB

- Objective 10 must be started for SMBs to be enabled (SMB tab generally shows what restrictions apply)

- maxIOB now includes \_all\_ IOB, not just added basal. То есть, если дан болюс 8 ед. на еду a максимальный IOB ограничен 7 ед., то SMB не будет подан до тех пор, пока активный инсулин IOB не опустится ниже 7 ед.

- min_5m_carbimpact default has changed from 3 to 8 going from AMA to SMB. Если вы переходите с AMA к SMB, то вам нужно изменить его вручную

- Note when building AAPS 2.0 apk: Configuration on demand is not supported by the current version of the Android Gradle plugin! Если сборка выполнена с ошибкой, относящейся к "выборочной конфигурации", можно сделать следующее:

  - Open the Preferences window by clicking File > Settings (on Mac, Android Studio > Preferences).
  - In the left pane, click Build, Execution, Deployment > Compiler.
  - Uncheck the Configure on demand checkbox.
  - Click Apply or OK.

(Releasenotes-overview-tab)=
### Вкладка обзора

- Top ribbon gives access to suspend/disable loop, view/adjust profile and to start/stop temporary targets (TTs). Временные цели TT используют настройки по умолчанию. Новая опция Гипо TT является высокой временной целью TT для предотвращения слишком агрессивной реакции на корректирующие углеводы.
- Treatment buttons: old treatment button still available, but hidden by default. Видимость кнопок теперь может быть сконфигурирована. New insulin button, new carbs button (including [eCarbs/extended carbs](../Usage/Extended-Carbs.md))
- [Colored prediction lines](../Getting-Started/Screenshots-prediction-lines)
- Option to show a notes field in insulin/carbs/calculator/prime+fill dialogs, which are uploaded to NS
- Updated prime/fill dialog allows priming and creating careportal entries for site change and cartridge change

### Часы

- Separate build variant dropped, included in regular full build now. Чтобы иметь управления болюсами с часов, включите этот параметр на телефоне
- Wizard now only asks for carbs (and percentage if enabled in watch settings). То, какие параметры входят в расчет можно задать в настройках телефона
- confirmations and info dialogs now work on wear 2.0 as well
- Added eCarbs menu entry

### Новые расширения

- PocTech app as BG source
- Dexcom patched app as BG source
- oref1 sensitivity plugin

### Разное

- App now uses drawer to show all plugins; plugins selected as visible in config builder are shown as tabs on top (favourites)
- Overhaul for config builder and objectives tabs, adding descriptions
- New app icon
- Lots of improvements and bugfixes
- Nightscout-independent alerts if pump is unreachable for a longer time (e.g. depleted pump battery) and missed BG readings (see *Local alerts* in settings)
- Option to keep screen on
- Option to show notification as Android notification
- Advanced filtering (allowing to always enable SMB and 6h after meals) supported with patched Dexcom app or xDrip with G5 native mode as BG source.
