# Конфигуратор

Конфигуратор (Конф) - это вкладка, на которой можно подключать и отключать модули программы. Ячейки с левой стороны (A) позволяют выбрать, какими модулями программы вы будете пользоваться, ячейки справа (C) позволяют представить эти модули в виде вкладок (E) в AndroidAPS. Если правая ячейка не активирована, вы можете получить доступ к функции из выпадающего меню (D) в левом верхнем углу экрана.

Там, где в пределах модуля доступны дополнительные параметры, можно нажать на шестеренку (B), которая направит вас на параметры настройки.

**Первая конфигурация:** Начиная с версии 2.0 AAPS процесс создания AndroidAPS контролируется Мастером установки. Для его запуска нажмите на меню под тремя точками в правом верхнем углу экрана меню (F) и выберите «Мастер установки».

![Опции конфигуратора и шестеренка настроек](../images/ConfBuild_ConfigBuilder.png)

## Профиль

Выберите базальной профиль, который хотите использовать. См. страницу [Профили](../Usage/Profiles.md) для дополнительной информации по установке.

### Локальный профиль (рекомендуется)

Локальным профилем назван базальной профиль, введенный вручную в телефоне. При выборе локального профиля, появляется новая вкладка, на которой можно при необходимости изменить данные профиля, считываемые с помпы. Во время следующего подключения к профилю они будут записаны в профиль 1 на помпе. Мы рекомендуем этот профиль, поскольку он не зависит от интернет-соединения.

Его преимущество: не требуется подключение к Интернету для изменения настроек профиля

Недостаток: возможность применить только один профиль

### Профиль Nightscout (NS)

NS Profile использует профили, которые вы сохранили на вашем сайте nightscout (https://[адресвашегосайта]/profile). Можно использовать [Переключатель профиля](../Usage/Profiles.md) для изменения активного профиля, это записывает профиль в помпу на случай неполадок с AndroidAPS. This allows you to easily create multiple profiles in Nightscout (i.e.. work, home, sports, holidays, etc.). Shortly after clicking on "Save" they will be transferred to AAPS if your smartphone is online. Even without an Internet connection or without a connection to Nightscout, the Nightscout profiles are available in AAPS once they have been synchronized.

Do a **profile switch** to activate a profile from Nightscout. Press and hold the current profile in the AAPS homescreen at the top (grey field between the light blue "Open/Closed Loop" field and the dark blue target area field) > Profile switch > Select profile > OK. AAPS also writes the selected profile into the pump after the profile change, so that it is available without AAPS in an emergency and continues to run.

Advantage: multiple profiles & easy to edit via PC or tablet

Disadvantage: no local changes to profile settings

### Simple profile

Simple profile with just one time block for DIA, IC, ISF, basal rate and target range (i.e. no basal rate changes during the day). More likely to be used for testing purposes unless you have the same factors over 24 hours. Once "Simple Profile" is selected, a new tab will appear in AAPS where you can enter the profile data.

## Инсулин

Select the type of insulin curve you are using. The options 'Rapid-Acting Oref', Ultra-Rapid Oref' and 'Free-Peak Oref' all have an exponential shape. More information is listed in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves), the curves will vary based on the DIA and the time to peak. The DIA should always be at least 5 hours, you can read more about that in the Insulin Profile section of [this](../Getting-Started/Screenshots.md) page. For Rapid-Acting and Ultra-Rapid, the DIA is the only variable you can adjust by yourself, the time to peak is fixed. Free-Peak allows you to adjust both the DIA and the time to peak, and must only be used by advanced users who know the effects of these settings. The insulin curve graph helps you to understand the different curves. You can view it by enabling the tickbox to show it as a tab, otherwise it will be in the hamburger menu.

### Быстродействующий Oref

* рекомендуется для Humalog, Novolog и Novorapid
* DIA (длительность действия инсулина) = по крайней мере 5.0 часов
* Макс. пик = 75 минут после инъекции

### Сверхбыстрый Oref

* рекомендуется для FIASP
* DIA (длительность действия инсулина) = по крайней мере 5.0 часов
* Макс. пик = 55 минут после инъекции

For a lot of people there is practically no noticeable effect of FIASP after 3-4 hours any more, even if 0.0xx units are available as a rule then. This residual amount can still be noticeable during sports, for example. Therefore AndroidAPS uses minimum 5h as DIA.

![Config Builder Ultra-Rapid Oref](../images/ConfBuild_UltraRapidOref.png)

### Безпиковый Oref

With the "Free Peak 0ref" profile you can individually enter the peak time. The DIA is automatically set to 5 hours if it is not specified higher in the profile.

This effect profile is recommended if an unbacked insulin or a mixture of different insulins is used.

## Источник данных гликемии

Select the blood glucose source you are using - see [BG Source](BG-Source.md) page for more setup information.

* [xDrip +](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* СК с клиента Nightscout
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de)
* Модифицированное приложение [Dexcom G5](https://github.com/dexcomapp/dexcomapp/) - выберите «Отправить данные ГК на xDrip +», если хотите получать оповещения от xDrip +. ![Источник ГК в конфигураторе](../images/ConfBuild_BGSource.png)
* [Poctech](http://www.poctechcorp.com/en/contents/268/5682.html)

## Помпа

Select the pump you are using.

* [DanaR](DanaR-Insulin-Pump.md)
* DanaR Корея (DanaR для корейского рынка)
* DanaRv2 (DanaR с обновленной прошивкой)
* [DanaRS](DanaRS-Insulin-Pump.md)
* [Accu-Chek Combo](Accu-Chek-Combo-Pump.md) (требует установки утилиты ruffy)
* Инъекции инсулина шприцем/шприц-ручкой (на основе предложений от AAPS по ведению терапии)
* Виртуальная помпа (открытый цикл для помпы, не имеющей драйверов - только предложения)

Use **Advanced settings** to activate BT watchdog if necessary. It switches off bluetooth for one second if no connection to the pump is pobbile. This may help on some phones where the bluetooth stack freezes.

## Определение чувствительности

Select the type of sensitivity detection. This will analyse historical data on the go and make adjustments if it recognizes that you are reacting more sensitively (or conversely, more resistant) to insulin than usual. Details about the Sensitivity Oref0 algorithm can be read in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode).

You can view your sensistivity on the homescreen by selecting SEN and watching the white line. Note, you need to be in [Objective 6](../Usage/Objectives) in order to use Sensitivity Detection/autosens.

### Настройки усваиваемости

If you use Oref1 with SMB you must change **min_5m_carbimpact** to 8. The value is only used during gaps in CGM readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause AAPS to decay COB. At times when carb absorption can't be dynamically worked out based on your bloods reactions it inserts a default decay to your carbs. Basically it is a failsafe.

## Система APS

Select the desired APS algorithm for therapy adjustments. You can view the active detail of the chosen algorithm in the OpenAPS(OAPS) tab.

* Помощник болюса OpenAPS MA (по состоянию алгоритма на 2016г.)
* Помощник болюса OpenAPS AMA (расширенный помощник болюса, состояние алгоритма на 2017г.).<0>. Говоря просто, после ввода углеводов, система быстрее определит верхнюю временную цель после болюса на еду.
* [OpenAPS SMB](../Usage/Open-APS-features.md) (супер микро болюс, новый алгоритм для опытных пользователей)   
    ; обратите внимание, работа OpenAPS SMB требует достижения [цели 8](../Usage/Objectives.md), а в конфигураторе минимальное 5-мин действие углеводов должно быть установлено как 8: конфигуратор> чувствительность >параметр чувствительности Oref1.

## Замкнутый цикл

Define whether you want to allow AAPS automatic controls or not.

### Открытый цикл

AAPS continuously evaluates all available data (IOB, COB, BG...) and makes treatment suggestions on how to adjust your therapy if necessary. The suggestions will not be executed automatically (as in closed loop) have to be entered manually into the pump or by using a button in case you are using a compatible pump (Dana R/RS or Accu Chek Combo). This option is for getting to know how AndroidAPS works or if you are using an unsupported pump.

### Замкнутый цикл

AAPS continuously evaluates all available data (IOB, COB, BG...) and automatically adjusts the treatment if necessary (i.e. without further intervention by you) to reach the set target range or value (bolus delivery, temporary basal rate, insulin switch-off to avoid hypoversion, etc.). The Closed Loop works within numerous safety limits, which you can be set individually. Closed Loop is only possible if you are in [Objective 4](../Usage/Objectives.md) or higher and use a supported pump.

## Цели (обучающая программа)

AndroidAPS has a number of objectives that you have to fulfill step by step. This should guide you safely through setting up a closed loop system. It guarantees that you have set everything up correctly and understand what the system does exactly. This is the only way you can trust the system.

You should export your settings (including progress of the objectives) on a regulary basis. In case you have to replace your smartphone later (new purchase, display damage etc.) you can simply import those settings.

See [Objectives](../Usage/Objectives.md) page for more information.

## Терапия

If you view the Treatments (Treat) tab, you can see the treatments that have been uploaded to nightscout. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the Careportal (CP) tab.

## Общее

### Обзор

Displays the current state of your loop and buttons for most common actions (see [section The Homescreen](../Getting-Started/Screenshots.md) for details). Settings can be accessed by clicking the cog wheel.

#### Не отключать экран

Option 'Keep screen on' will force Android to keep the screen on at all times. This is useful for presentations etc. But it consumes a lot of battery power. Therefore it is recommended to connect the smartphone to a charger cable.

#### Кнопки

Define which Buttons are shown on the home screen.

* Терапия
* Калькулятор
* Инсулин
* Углеводы
* CGM (открывает) xDrip +
* Калибровка

Furthermore you can set shortcuts for insulin and carb increments and decide wether the notes field should be shown in treatment dialogues.

#### Мастер быстрого болюса

Create a button for a certain standard meal (carbs and calculation method for the bolus) which will be displayed on the home screen. Use for standard meals frequently eaten. If different times are specified for the different meals you will always have the appropriate standard meal button on the home screen, depending on the time of day.

Note: Button will not be visible if outside the specified time range or if you have enough IOB to cover the carbs defined in the QuickWizard button.

![QuickWizard button](../images/ConfBuild_QuickWizard.png)

#### Расширенные настройки

Enable super bolus functionality in wizard. Use with caution and do not enable until you learn what it really does. Basically the basal for the next two hours is added to the bolus and a two hour zero-temp activated. **AAPS looping functions will be disabled - so use with care! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### Действия

Some buttons to quickly access common features:

* Переключатель профилей (см. [страницу профилей](../Usage/Profiles.md) для дополнительной информации по настройке)
* Временные целевые значения
* Задать / отменить врем. скорость базала
* Пролонгированный болюс (только для DanaR/RS или Combo)
* Первичное заполнение / заправка (только для DanaR/RS или Combo)
* История
* TDD (Общая суточная доза = болюс + базал за день)

Some doctors use - especially for new pumpers - a basal-bolus-ratio of 50:50. Therefore ratio is calculated as TDD / 2 * TBB (Total base basal = sum of basal rate within 24 hours). Others prefer range of 32% to 37% of TDD for TBB. Like most of these rules-of-thumb it is of limited real validity. Note: Your diabetes may vary!

![Actions tab](../images/ConfBuild_ConfBuild_Actions.png)

### Портал назначений/терапии

Allows you to record any specific care entries and view the current sensor, insulin, canula and pump battery ages in the Careportal (CP) tab.

Note: **No insulin** will be given if entered via careportal (i.e. meal bolus, correction bolus...)

Carbs entered in the careportal (i.e. correction carbs) will be used for COB calculation.

![Careportal tab](../images/ConfBuild_CarePortal.png)

### SMS коммуникатор

Allows remote caregivers to control some AndroidAPS features via SMS, see [SMS Commands](../Usage/SMS-Commands.md) for more setup information.

### Еда

Displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the AndroidAPS calculator. (View only)

### Смарт-часы Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../Configuration/Watchfaces.md)). Use settings (cog wheel) to define which variables should be considered when calculating bolus given though your watch (i.e. 15min trend, COB...).

Если вы хотите иметь возможность давать болюс с часов, тогда в настройках часов Wear следует включить «Управление с часов».

![Wear settings](../images/ConfBuild_Wear.png)

Through Wear tab or hamburger menu (top left of screen, if tab is not displayed) you can

* Повторить отправку всех данных. Может быть полезно, если некоторое время часы не были подключены и вы хотите передать на них данные.
* Открыть настройки на часах прямо с телефона.

### Cтрока состояния xDrip (часы)

Display loop information on your xDrip+ watchface (if you are not using AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md)

### Текущее состояние приложения

Displays a summary of current BG, delta, active TBR%, active basal u/hr and profile, IOB and split into bolus IOB and basal IOB on the phones dropdown screen and phonelock screen.

![AAPS widget](../images/ConfBuild_Widget.png)

### Клиент Nightscout

Setup sync of your AndroidAPS data with Nightscout.

If **Log app start to NS** is activated each AndroidAPS will be visible in Nightscout. Might be useful to detect problems with the app (i.e. battery optimisation not disabled for AAPS) but can flood the Nightscout graph with entries.

#### Опции оповещения

Activate/deactivate AndroidAPS alarms

![Опции оповещения](../images/ConfBuild_NSClient_Alarms.png)

#### Настройки подключения

Offline looping, disable roaming...

If you want to use only a specific WiFi network you can enter its **WiFi SSID **. Several SSIDs can be separated by semicolon. To delete all SSIDs enter a blank space in the field.

![Nightscout connection settings](../images/ConfBuild_ConnectionSettings.png)

#### Расширенные настройки

* Заполнять пропущенные данные данными из NS
* Создать оповещение из сообщения об ошибке Создать оповещение Nightscout из диалогов об ошибках и местных оповещений (также отображаются в careportal в разделе лечение/назначения)
* Активировать передачу на другие приложения (напр. xDrip+)
* Только отправлять на NS (Синхронизация отключена)
* Не отправлять в NS
* Всегда использовать абсолютные значения базала -> должно быть активировано, если вы хотите правильно применять [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html).

![Nightscout advanced settings](../images/ConfBuild_NSClient_Advanced.png)

### Тех. обслуживание

Email and number of logs to be send. Normally no change neccessary.

### Конфигуратор

Use tab for config builder instead of hambuger menu.