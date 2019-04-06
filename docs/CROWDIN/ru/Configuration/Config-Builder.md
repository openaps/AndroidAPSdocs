# Config Builder

Конфигуратор (Конф) - это вкладка, на которой можно подключать и отключать модули программы. Ячейки с левой стороны (A) позволяют выбрать, какими модулями программы вы будете пользоваться, ячейки справа (C) позволяют представить эти модули в виде вкладок (E) в AndroidAPS. Если правая ячейка не активирована, вы можете получить доступ к функции из выпадающего меню (D) в левом верхнем углу экрана.

Там, где в пределах модуля доступны дополнительные параметры, можно нажать на шестеренку (B), которая направит вас на параметры настройки.

**Первая конфигурация:** Начиная с версии 2.0 AAPS процесс создания AndroidAPS контролируется Мастером установки. Для его запуска нажмите на меню под тремя точками в правом верхнем углу экрана меню (F) и выберите «Мастер установки».

![Config Builder boxes and cog wheel](../images/ConfBuild_ConfigBuilder.png)

## Профиль

Выберите базальной профиль, который хотите использовать. См. страницу [Профили](../Usage/Profiles.md) для дополнительной информации по установке.

### Профиль Nightscout (NS)

Профиль NS использует профили, которые вы сохранили на вашем сайте Nightscout (https://[yournightscoutsiteaddress]/profile). Вы можете пользоваться [Переключателем профиля](../Usage/Profiles.md) для изменения активного профиля, это действие перепишет профиль помпы в случае отказа AndroidAPS. Это позволяет вам легко создавать несколько профилей в Nightscout (то есть.. работа, дом, спорт, отдых и т. п.). Вскоре после нажатия кнопки «Сохранить» они будут переданы в AAPS если ваш смартфон подключен к интернету. Даже без подключения к Интернету или без подключения к Nightscout профили Nightscout доступны в AAPS после синхронизации.

Проделайте ** переключение профиля** для активации профиля из Nightscout. Нажмите и удерживайте поле текущего профиля в верхнем углу (серое поле между светло синим полем «Открытый/замкнутый цикл» и темно синим полем области целевых значений) > переключатель профиля > выберите профиль > ОК. AAPS также прописывает выбранный профиль в помпу после изменения профиля, так что он доступен и продолжает выполняться без AAPS в чрезвычайных ситуациях.

### Простой профиль

Простой профиль в одном блоке времени с длительностью действия инсулина DIA, соотношением инсулин/углеводы IC, чувствительностью к инсулину ISF, скоростью подачи базала и целевым диапазоном (напр. никаких изменений базала в течение суток). Скорее всего будет использоваться для тестирования если только ваши коэффициенты не одни и те же в течение суток. После выбора «Простого профиля», в AAPS появится новая вкладка, куда можно ввести данные профиля.

### Локальный профиль (рекомендуется)

Локальный профиль использует базальной профиль, введенный вручную в телефоне. Как только он выбран, появляется новая вкладка, можно при необходимости изменить данные профиля, считываемые с помпы. Во время следующего подключения к профилю они будут записаны в профиль 1 на помпе. Этот профиль рекомендуется поскольку он не зависит от интернет-соединения.

## Insulin

Выберите кривую, соответствующую типу вашего инсулина. Варианты 'Быстродействующий Oref', Сверхбыстрый Oref' и 'Безпиковый Oref' имеют вид экспоненты. Более подробно см. в [Документах OpenAPS](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves), кривые различаются на основе длительности действия инсулина DIA и времени пика. Длительность действия инсулина DIA всегда должна быть не менее 5 часов, подробнее в разделе Профиль инсулина [на этой странице](../Getting-Started/Screenshots.md). Для быстродействующих и сверхбыстрых инсулинов, длительность действия инсулина DIA является единственной переменной, которую можно настроить самостоятельно, время пика фиксированное. Безпиковый позволяет настроить как DIA, так и время пика, эта опция для опытных пользователей, которые знают последствия таких параметров. График инсулина позволяет понять поведение других кривых. Его можно увидеть на вкладке, если отметить галочкой в конфигураторе или выбрать из выпадающего меню слева.

### Быстродействующий Oref

* рекомендуется для Humalog, Novolog и Novorapid
* DIA (длительность действия инсулина) = по крайней мере 5.0 часов
* Макс. пик = 75 минут после инъекции

### Сверхбыстрый Oref

* рекомендуется для FIASP
* DIA (длительность действия инсулина) = по крайней мере 5.0 часов
* Макс. пик = 55 минут после инъекции

Для многих людей действие FIASP практически незаметно спустя 3-4 часа, даже если тогда, как правило, остается 0.0xx ед. Это остаточное количество может быть ощутимо во время занятий спортом, например. Поэтому AndroidAPS использует как минимум 5 часов в качестве DIA.

![Config Builder Ultra-Rapid Oref](../images/ConfBuild_UltraRapidOref.png)

### Безпиковый Oref

На профиле «Безпиковый 0ref» можно самостоятельно ввести пиковое время. Если в профиле не определено более высокое значение, DIA автоматически устанавливается на 5 часов.

Этот инсулиновый профиль рекомендуется если используется неподдерживаемый тип инсулина или смесь различных инсулинов.

## Источник данных гликемии

Выберите источник данных ГК - см. страничку [Источник ГК](BG-Source.md) для получения дополнительной информации по настройкам.

* [xDrip +](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* СК с клиента Nightscout
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de)
* Модифицированное приложение [Dexcom G5](https://github.com/dexcomapp/dexcomapp/) - выберите «Отправить данные ГК на xDrip +», если хотите получать оповещения от xDrip +. ![Config Builder BG source](../images/ConfBuild_BGSource.png)
* [Poctech](http://www.poctechcorp.com/en/contents/268/5682.html)

## Помпа

Выберите помпу, которой пользуетесь.

* [DanaR](DanaR-Insulin-Pump.md)
* DanaR Корея (DanaR для корейского рынка)
* DanaRv2 (DanaR с обновленной прошивкой)
* [DanaRS](DanaRS-Insulin-Pump.md)
* [Accu-Chek Combo](Accu-Chek-Combo-Pump.md) (требует установки утилиты ruffy)
* Инъекции инсулина шприцем/шприц-ручкой (на основе предложений от AAPS по ведению терапии)
* Виртуальная помпа (открытый цикл для помпы, не имеющей драйверов - только предложения)

Для активации сторожа BT пользуйтесь **Дополнительными параметрами**. Он отключает bluetooth на одну секунду, если подключение к помпе невозможно. Это помогает на некоторых телефонах, где зависает bluetooth.

## Определение чувствительности

Выберите тип анализа чувствительности. Алгоритм будет анализировать историю данных и вносить коррективы, если признает, что вы реагируете более чутко (или, наоборот, более стабильно) на инсулин, чем обычно. Подробнее об алгоритме чувствительность Oref0 можно прочитать в [документации OpenAPS](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode).

Вы можете вывести график чувствительности на экран, отметив галочкой соответствующий пункт из выпадающего меню графиков. Он изображается в виде белой линии. Для применения авточувствительности вы должны находиться на шестом этапе [целей](../Usage/Objectives).

### Настройки усваиваемости

Если вы применяете Oref1 с микроболюсами SMB необходимо установить **min_5m_действия углеводов** на 8. Это значение используется только во время пробелов в мониторинге или когда физическая нагрузка "съедает" весь подъем гликемии, которая в ином случае заставила бы алгоритм AAPS противодействовать углеводам COB организма. В те времена когда поглощение углеводов не может быть рассчитано динамически на основе реакции вашей крови, он применяет эту скорость распада по умолчанию. Этот параметр принципиально не может приводить к отказам.

## Система APS

Выберите нужный алгоритм APS для ведения терапии. You can view the active detail of the chosen algorithm in the OpenAPS(OAPS) tab.

* OpenAPS MA (meal assist, state of the algorithm in 2016)
* OpenAPS AMA (advanced meal assist, state of the algorithm in 2016)  
    More detail about OpenAPS AMA can be found in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). In simple terms the benefits are after you give yourself a meal bolus the system can high-temp more quickly IF you enter carbs reliably.  
    Note you need to be in [Objective 7](../Usage/Objectives.md) in order to use OpenAPS AMA.
* [OpenAPS SMB](../Usage/Open-APS-features.md) (super micro bolus, most recent algorithm for advanced users)  
    Note you need to be in [Objective 8](../Usage/Objectives.md) in order to use OpenAPS SMB and min_5m_carbimpact must be set to 8 in Config builder > Sensitivity detection > Sensitivity Oref1 settings.

## Loop

Define whether you want to allow AAPS automatic controls or not.

### Open Loop

AAPS continuously evaluates all available data (IOB, COB, BG...) and makes treatment suggestions on how to adjust your therapy if necessary. The suggestions will not be executed automatically (as in closed loop) have to be entered manually into the pump or by using a button in case you are using a compatible pump (Dana R/RS or Accu Chek Combo). This option is for getting to know how AndroidAPS works or if you are using an unsupported pump.

### Closed Loop

AAPS continuously evaluates all available data (IOB, COB, BG...) and automatically adjusts the treatment if necessary (i.e. without further intervention by you) to reach the set target range or value (bolus delivery, temporary basal rate, insulin switch-off to avoid hypoversion, etc.). The Closed Loop works within numerous safety limits, which you can be set individually. Closed Loop is only possible if you are in [Objective 4](../Usage/Objectives.md) or higher and use a supported pump.

## Objectives (learning program)

AndroidAPS has a number of objectives that you have to fulfill step by step. This should guide you safely through setting up a closed loop system. It guarantees that you have set everything up correctly and understand what the system does exactly. This is the only way you can trust the system.

You should export your settings (including progress of the objectives) on a regulary basis. In case you have to replace your smartphone later (new purchase, display damage etc.) you can simply import those settings.

See [Objectives](../Usage/Objectives.md) page for more information.

## Treatments

If you view the Treatments (Treat) tab, you can see the treatments that have been uploaded to nightscout. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the Careportal (CP) tab.

## General

### Overview

Displays the current state of your loop and buttons for most common actions (see [section The Homescreen](../Getting-Started/Screenshots.md) for details). Settings can be accessed by clicking the cog wheel.

#### Keep screen on

Option 'Keep screen on' will force Android to keep the screen on at all times. This is useful for presentations etc. But it consumes a lot of battery power. Therefore it is recommended to connect the smartphone to a charger cable.

#### Buttons

Define which Buttons are shown on the home screen.

* Treatments
* Calculator
* Insulin
* Carbs
* CGM (opens xDrip+)
* Calibration

Furthermore you can set shortcuts for insulin and carb increments and decide wether the notes field should be shown in treatment dialogues.

#### QuickWizard settings

Create a button for a certain standard meal (carbs and calculation method for the bolus) which will be displayed on the home screen. Use for standard meals frequently eaten. If different times are specified for the different meals you will always have the appropriate standard meal button on the home screen, depending on the time of day.

Note: Button will not be visible if outside the specified time range or if you have enough IOB to cover the carbs defined in the QuickWizard button.

![QuickWizard button](../images/ConfBuild_QuickWizard.png)

#### Advanced settings

Enable super bolus functionality in wizard. Use with caution and do not enable until you learn what it really does. Basically the basal for the next two hours is added to the bolus and a two hour zero-temp activated. Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### Actions

Some buttons to quickly access common features:

* Profiles Switch (see [Profiles page](../Usage/Profiles.md) for more setup information)
* Temporary targets
* Set / cancel temp. basal rate
* Extended bolus (DanaR/RS or Combo pump only)
* Prime / fill (DanaR/RS or Combo pump only)
* History browser
* TDD (Total daily dose = bolus + basal per day)

Some doctors use - especially for new pumpers - a basal-bolus-ratio of 50:50. Therefore ratio is calculated as TDD / 2 * TBB (Total base basal = sum of basal rate within 24 hours). Others prefer range of 32% to 37% of TDD for TBB. Like most of these rules-of-thumb it is of limited real validity. Note: Your diabetes may vary!

![Actions tab](../images/ConfBuild_ConfBuild_Actions.png)

### Careportal

Allows you to record any specific care entries and view the current sensor, insulin, canula and pump battery ages in the Careportal (CP) tab.

Note: **No insulin** will be given if entered via careportal (i.e. meal bolus, correction bolus...)

Carbs entered in the careportal (i.e. correction carbs) will be used for COB calculation.

![Careportal tab](../images/ConfBuild_CarePortal.png)

### SMS Communicator

Allows remote caregivers to control some AndroidAPS features via SMS, see [SMS Commands](../Usage/SMS-Commands.md) for more setup information.

### Food

Displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the AndroidAPS calculator. (View only)

### Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../Configuration/Watchfaces.md)). Use settings (cog wheel) to define which variables should be considered when calculating bolus given though your watch (i.e. 15min trend, COB...).

If you want to bolus etc from the watch then within "Wear settings" you need to enable "Controls from Watch".

![Wear settings](../images/ConfBuild_Wear.png)

Through Wear tab or hamburger menu (top left of screen, if tab is not displayed) you can

* Resend all data. Might be helpful if watch was not connected for some time and you want to push the information to the watch.
* Open settings on your watch directly from your phone.

### xDrip Statusline (watch)

Display loop information on your xDrip+ watchface (if you are not using AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md)

### Ongoing Notification

Displays a summary of current BG, delta, active TBR%, active basal u/hr and profile, IOB and split into bolus IOB and basal IOB on the phones dropdown screen and phonelock screen.

![AAPS widget](../images/ConfBuild_Widget.png)

### NS Client

Setup sync of your AndroidAPS data with Nightscout.

If **Log app start to NS** is activated each AndroidAPS will be visible in Nightscout. Might be useful to detect problems with the app (i.e. battery optimisation not disabled for AAPS) but can flood the Nightscout graph with entries.

#### Alarm options

Activate/deactivate AndroidAPS alarms

![Alarm options](../images/ConfBuild_NSClient_Alarms.png)

#### Connection settings

Offline looping, disable roaming...

If you want to use only a specific WiFi network you can enter its **WiFi SSID **. Several SSIDs can be separated by semicolon. To delete all SSIDs enter a blank space in the field.

![Nightscout connection settings](../images/ConfBuild_ConnectionSettings.png)

#### Advanced settings

* Auto backfill missing BGs from Nightscout
* Create announcement from errors Create Nightscout announcement fro error dialogs and local alerts (also viewable in careportal in treatments section)
* Enable local broadcast to other apps like xDrip+
* NS upload only (sync disabled)
* No upload to NS
* Always use basal absolute values -> Must be activated if you want to use [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) properly.

![Nightscout advanced settings](../images/ConfBuild_NSClient_Advanced.png)

### Maintenance

Email and number of logs to be send. Normally no change neccessary.

### Config Builder

Use tab for config builder instead of hambuger menu.