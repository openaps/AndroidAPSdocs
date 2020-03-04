# Конфигуратор

В зависимости от настроек, конфигуратор можно открыть с помощью вкладки в верхней части экрана или через сэндвич-меню.

![Открыть компоновщик конфигурации](../images/ConfBuild_Open.png)

Конфигуратор (Конф) - это вкладка, на которой можно подключать и отключать модули программы. Ячейки с левой стороны (A) позволяют выбрать, какими модулями программы вы будете пользоваться, ячейки справа (C) позволяют представить эти модули в виде вкладок (E) в AndroidAPS. Если правая ячейка не активирована, доступ к функциям можно получить из выпадающего меню (D) в левом верхнем углу экрана.

Там, где в пределах модуля доступны дополнительные параметры, можно нажать на шестеренку (B), которая их откроет.

**Первая конфигурация:** Начиная с версии 2.0 AAPS процесс настройки AndroidAPS контролируется Мастером установки. Для его запуска нажмите на меню под тремя точками в правом верхнем углу экрана меню (F) и выберите «Мастер установки».

![Опции конфигуратора и шестеренка настроек](../images/ConfBuild_ConfigBuilder.png)

## Вкладка или сэндвич-меню

С помощью переключателя под значком глаза вы можете решить, как открыть соответствующий раздел программы.

![Вкладка или сэндвич-меню](../images/ConfBuild_TabOrHH.png)

## Профиль

Выберите нужный базальной профиль См. страницу [Профили](../Usage/Profiles.md) для дополнительной информации.

### Локальный профиль (рекомендуется)

Локальный профиль использует базальной профиль, введенный вручную в телефоне. Как только он выбран, появляется новая вкладка, где можно при необходимости изменить данные профиля, считываемые с помпы. При следующем переключении профиля они записываются на помпу в профиль 1. Мы рекомендуем этот профиль, поскольку он не зависит от интернет-соединения.

Ваши локальные профили являются частью [экспортируемых настроек](../Usage/ExportImportSettings.rst). Поэтому убедитесь, что у вас есть резервная копия в безопасном месте.

![Параметры локального профиля](../images/LocalProfile_Settings.png)

Кнопки:

* зеленый плюс: добавить
* красный крестик: удалить
* синяя стрелка: дублировать

#### Переключение профиля и клонирование

Вы можете легко создать новый локальный профиль с помощью переключения профиля. В этом случае сдвиг по времени и процент будет применяться к новому локальному профилю.

1. Перейдите на вкладку терапии.
2. Выберите Переключатель профилей.
3. Нажмите Кнопку "Клонировать".
4. Вы можете редактировать новый локальный профиль через вкладку локальный профиль (ЛП) или через сэндвич-меню.

![Переключение профиля и клонирование](../images/LocalProfile_ClonePS.png)

Если вы хотите переключаться с профиля Nightscout на локальный профиль просто сделайте переключение профиля в профиле NS и клонируйте его, как описано выше.

#### Загрузить локальные профили в Nightscout

Локальные профили также могут быть загружены на Nightscout. Параметры можно найти в параметрах клиента NS.

![Загрузить локальный профиль в НС](../images/LocalProfile_UploadNS2.png)

Преимущества:

* не требуется подключение к интернету для изменения настроек профиля
* изменения профиля могут быть сделаны непосредственно на телефоне
* новый профиль можно создать при помощи переключателя профиля
* локальные профили можно загрузить в Nightscout

Недостатки:

* отсутствуют

### Профиль Nightscout (NS)

Профиль NS использует профили, которые вы сохранили на сайте Nightscout (https://[адрес вашего сайта]/profile). Можно использовать [Переключатель профиля](../Usage/Profiles.md) для изменения активного профиля, это записывает профиль в помпу на случай неполадок с AndroidAPS. Это позволяет вам легко создавать несколько профилей в Nightscout (например.. работа, дом, спорт, отдых и т. п.). Вскоре после нажатия кнопки «Сохранить» они будут переданы в AAPS если ваш смартфон подключен к интернету. Даже без подключения к Интернету или без подключения к Nightscout профили Nightscout доступны в AAPS после синхронизации.

Проделайте ** переключение профиля** для активации профиля из Nightscout. Нажмите и удерживайте поле текущего профиля в верхнем углу (серое поле между светло синим полем «Открытый/замкнутый цикл» и темно синим полем области целевых значений) > переключатель профиля > выберите профиль > ОК. AAPS также прописывает выбранный профиль в помпу после изменения профиля, так что он доступен и продолжает выполняться без AAPS в чрезвычайных ситуациях.

Преимущества:

* множественные профили
* легко редактировать с помощью ПК или планшета

Недостатки:

* невозможность локальных изменений в настройках профиля
* профиль не может быть изменен непосредственно на телефоне

## Инсулин

Выберите кривую, соответствующую типу вашего инсулина. Варианты 'Быстродействующий Oref', Сверхбыстрый Oref' и 'Безпиковый Oref' имеют вид экспоненты. Более подробно см. в [Документах OpenAPS](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves), кривые различаются на основе длительности действия инсулина DIA и времени пика.

Длительность работы инсулина не одинакова для всех. Поэтому ее следует проверить самостоятельно. Но она всегда должна быть минимум 5 часов. Более подробную информацию можно прочитать в разделе "Профиль инсулина" на [ этой ](../Getting-Started/Screenshots#insulin-profile) странице.

Для быстродействующих и сверхбыстрых инсулинов, длительность действия инсулина DIA является единственной переменной, которую можно настроить самостоятельно, время пика фиксированное. Безпиковый позволяет настроить как DIA, так и время пика, эта опция для опытных пользователей, которые знают последствия таких параметров.

[Диаграмма работы инсулина](../Getting-Started/Screenshots#insulin-profile) поможет понять различные кривые. Его можно увидеть на вкладке, если отметить галочкой в конфигураторе или выбрать из выпадающего меню слева.

### быстро действующий Oref

* рекомендуется для Humalog, Novolog и Novorapid
* DIA (длительность действия инсулина) = по крайней мере 5.0 часов
* Макс. пик = 75 мин после инъекции (фиксированный, не регулируется)

### Сверхбыстрый Oref

* рекомендуется для FIASP
* DIA (длительность действия инсулина) = по крайней мере 5.0 часов
* Макс. пик = 55 мин после инъекции (фиксированный, не регулируется)

Для многих людей действие FIASP практически незаметно спустя 3-4 часа, даже если тогда, как правило, остается 0.0xx ед. Это остаточное количество может быть ощутимо во время занятий спортом, например. Поэтому AndroidAPS использует как минимум 5 часов в качестве DIA.

![Ультра-быстрый Oref в конфигураторе](../images/ConfBuild_UltraRapidOref.png)

### Безпиковый Oref

На профиле «Безпиковый 0ref» можно самостоятельно ввести пиковое время. Если в профиле не определено более высокое значение, DIA автоматически устанавливается на 5 часов.

Этот инсулиновый профиль рекомендуется если используется неподдерживаемый тип инсулина или смесь различных инсулинов.

## Источник данных гликемии

Выберите источник данных ГК - см. страничку [Источник ГК](BG-Source.rst) для получения дополнительной информации по настройкам.

* [xDrip +](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* СК с клиента Nightscout
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [ Glimp ](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de)-поддерживается только версия 4.15.57 и более поздние
* Модифицированное приложение [Dexcom](https://github.com/dexcomapp/dexcomapp/) - выберите «Отправлять данные ГК на xDrip +», если хотите пользоваться оповещениями от xDrip +.
    
    ![Источник ГК в конфигураторе](../images/ConfBuild_BGSource.png)

* [Poctech](http://www.poctechcorp.com/en/contents/268/5682.html)

## Помпа

Выберите помпу, которой пользуетесь.

* [Dana R](DanaR-Insulin-Pump.md)
* DanaR Корея (DanaR для корейского рынка)
* DanaRv2 (DanaR с обновленной прошивкой)
* [Dana RS](DanaRS-Insulin-Pump.md)
* [Accu-Chek Combo](Accu-Chek-Combo-Pump.md) (требует установки утилиты ruffy)
* MDI инъекции инсулина шприцем/шприц-ручкой (на основе предложений от AAPS по ведению терапии)
* Виртуальная помпа (открытый цикл для помпы, не имеющей драйверов - только предложения)

Для помпы Dana перейдите в **Дополнительные параметры**, и если необходимо, активируйте BT watchdog. Он отключает bluetooth на одну секунду, если подключение к помпе невозможно. Это помогает на некоторых телефонах, где зависает bluetooth.

## Определение чувствительности

Выберите тип анализа чувствительности. Алгоритм будет анализировать историю данных и вносить коррективы, если признает, что вы реагируете более чутко (или, наоборот, более резистентно) на инсулин, чем обычно. Подробнее об алгоритме чувствительность Oref0 можно прочитать в [документации OpenAPS](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode).

Вы можете вывести график чувствительности на экран, отметив галочкой соответствующий пункт из выпадающего меню графиков. Он изображается в виде белой линии. Обратите внимание, что для использования Определителя чувствительности [Autosens](../Usage/Open-APS-features.html#autosens) необходимо достигнуть [ Цель 8 ](../Usage/Objectives#objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens).

### Настройки усваиваемости

Если вы применяете Oref1 с микроболюсами SMB необходимо установить **min_5m_действия углеводов** на 8. Это значение используется только во время пробелов в мониторинге или когда физическая нагрузка "съедает" весь подъем гликемии, которая в ином случае заставила бы алгоритм AAPS противодействовать углеводам COB организма. В те времена когда поглощение углеводов не может быть рассчитано динамически на основе реакции вашей крови, он применяет эту скорость распада по умолчанию. Этот параметр не приводит к отказам.

## Система ИПЖ

Выберите нужный алгоритм APS для ведения терапии. Подробности выбранного алгоритма можно просмотреть на вкладке OpenAPS(OAPS).

* Помощник болюса OpenAPS MA (по состоянию алгоритма на 2016г.)
* Помощник болюса OpenAPS AMA (расширенный помощник болюса, состояние алгоритма на 2017г.).  
    Подробнее об OpenAPS AMA в [документации OpenAPS](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). Говоря просто, его преимущество в том, что после болюса на еду система быстрее определит верхнюю временную цель если углеводы введены верно.  
    Обратите внимание, что для пользования алгоритмом Расширенный калькулятор болюса AMA следует пройти [Цель 9](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama).
* [OpenAPS SMB](../Usage/Open-APS-features.md) (супер микро болюс, новый алгоритм для опытных пользователей)   
    ; обратите внимание, работа OpenAPS SMB требует достижения [цели 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb), а в конфигураторе минимальное 5-мин действие углеводов должно быть установлено на 8: конфигуратор> чувствительность >параметр чувствительности Oref1.

## Замкнутый цикл

Определите, хотите ли вы разрешить автоматический контроль AAPS.

### Открытый цикл

AAPS continuously evaluates all available data (IOB, COB, BG...) and makes treatment suggestions on how to adjust your therapy if necessary. The suggestions will not be executed automatically (as in closed loop) have to be entered manually into the pump or by using a button in case you are using a compatible pump (Dana R/RS or Accu Chek Combo). This option is for getting to know how AndroidAPS works or if you are using an unsupported pump.

### Closed Loop/Замкнутый цикл (петля, контур)

AAPS continuously evaluates all available data (IOB, COB, BG...) and automatically adjusts the treatment if necessary (i.e. without further intervention by you) to reach the set target range or value (bolus delivery, temporary basal rate, insulin switch-off to avoid hypo etc.). The Closed Loop works within numerous safety limits, which you can be set individually. Closed Loop is only possible if you are in [Objective 6](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend) or higher and use a supported pump.

## Цели (обучающая программа)

AndroidAPS has a number of objectives that you have to fulfill step by step. This should guide you safely through setting up a closed loop system. It guarantees that you have set everything up correctly and understand what the system does exactly. This is the only way you can trust the system.

You should [export your settings](../Usage/ExportImportSettings.rst) (including progress of the objectives) on a regularly basis. In case you have to replace your smartphone later (new purchase, display damage etc.) you can simply import those settings.

See [Objectives](../Usage/Objectives.rst) page for more information.

## Терапия

If you view the Treatments (Treat) tab, you can see the treatments that have been uploaded to nightscout. Если вы хотите редактировать или удалить запись (например, съели меньше углеводов, чем ожидали) выберите «Удалить» и введите новое значение (измените время, в случае необходимости) через [ кнопку углеводы на главном экране](../Getting-Started/Screenshots.md#carb-correction).

## Общие настройки

### Общие замечания

Displays the current state of your loop and buttons for most common actions (see [section The Homescreen](../Getting-Started/Screenshots.md) for details). Settings can be accessed by clicking the cog wheel.

#### Keep screen on

Option 'Keep screen on' will force Android to keep the screen on at all times. This is useful for presentations etc. But it consumes a lot of battery power. Therefore, it is recommended to connect the smartphone to a charger cable.

#### Buttons

Define which Buttons are shown on the home screen.

* Терапия
* Калькулятор
* Инсулин
* Carbs
* CGM (opens xDrip+)
* Calibration

Furthermore, you can set shortcuts for insulin and carb increments and decide whether the notes field should be shown in treatment dialogues.

#### QuickWizard settings

Create a button for a certain standard meal (carbs and calculation method for the bolus) which will be displayed on the home screen. Use for standard meals frequently eaten. If different times are specified for the different meals you will always have the appropriate standard meal button on the home screen, depending on the time of day.

Note: Button will not be visible if outside the specified time range or if you have enough IOB to cover the carbs defined in the QuickWizard button.

![QuickWizard button](../images/ConfBuild_QuickWizard.png)

#### Advanced settings

Enable super bolus functionality in wizard. Use with caution and do not enable until you learn what it really does. Basically, the basal for the next two hours is added to the bolus and a two hour zero-temp activated. **AAPS looping functions will be disabled - so use with care! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### Действия

Some buttons to quickly access common features:

* Profiles Switch (see [Profiles page](../Usage/Profiles.md) for more setup information)
* Temporary targets
* Set / cancel temp. скорость базала
* Extended bolus (DanaR/RS or Combo pump only)
* Запись любых конкретных шагов терапии
    
    * Проверка ГК
    * Прайм/заполнение - запись о смене катетера и заполнение инфузионного набора (если не сделано на помпе)
    * Установка сенсора мониторинга глюкозы
    * Замена батареи помпы
    * Note
    * Exercise
* Показать текущие сроки валидности сенсора, инсулина, катетера и батареи помпы
* History browser
* TDD (Total daily dose = bolus + basal per day)

Some doctors use - especially for new pumpers - a basal-bolus-ratio of 50:50. Therefore ratio is calculated as TDD / 2 * TBB (Total base basal = sum of basal rate within 24 hours). Others prefer range of 32% to 37% of TDD for TBB. Like most of these rules-of-thumb it is of limited real validity. Note: Your diabetes may vary!

![Actions tab](../images/ConfBuild_ConfBuild_Actions_b.png)

### СМС-коммуникатор

Allows remote caregivers to control some AndroidAPS features via SMS, see [SMS Commands](../Children/SMS-Commands.rst) for more setup information.

### Food

Displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the AndroidAPS calculator. (View only)

### Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../Configuration/Watchfaces.md)). Use settings (cog wheel) to define which variables should be considered when calculating bolus given though your watch (i.e. 15min trend, COB...).

Если вы хотите подавать болюс и т. д. с часов, тогда в настройках часов Wear следует включить «Управление с часов».

![Wear settings](../images/ConfBuild_Wear.png)

Through Wear tab or hamburger menu (top left of screen, if tab is not displayed) you can

* Resend all data. Might be helpful if watch was not connected for some time and you want to push the information to the watch.
* Open settings on your watch directly from your phone.

### xDrip Statusline (watch)

Display loop information on your xDrip+ watchface (if you are not using AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md)

### Ongoing Notification

Displays a summary of current BG, delta, active TBR%, active basal u/h and profile, IOB and split into bolus IOB and basal IOB on the phones's dropdown screen and phone's lock screen.

![AAPS widget](../images/ConfBuild_Widget.png)

### Клиент Nightscout

Setup sync of your AndroidAPS data with Nightscout.

If **Log app start to NS** is activated each AndroidAPS will be visible in Nightscout. Might be useful to detect problems with the app (i.e. battery optimization not disabled for AAPS) but can flood the Nightscout graph with entries.

#### Alarm options

Activate/deactivate AndroidAPS alarms

![Alarm options](../images/ConfBuild_NSClient_Alarms.png)

#### Connection settings

Offline looping, disable roaming...

If you want to use only a specific WiFi network you can enter its **WiFi SSID **. Several SSIDs can be separated by semicolon. To delete all SSIDs enter a blank space in the field.

![Nightscout connection settings](../images/ConfBuild_ConnectionSettings.png)

#### Advanced settings

* Auto backfill missing BGs from Nightscout
* Create announcement from errors Create Nightscout announcement for error dialogs and local alerts (also viewable in careportal in treatments section)
* Enable local broadcast to other apps like xDrip+
* NS upload only (sync disabled)
* No upload to NS
* Always use basal absolute values -> Must be activated if you want to use [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) properly.

![Nightscout advanced settings](../images/ConfBuild_NSClient_Advanced.png)

### Тех. обслуживание

Email and number of logs to be send. Normally no change necessary.

### Конфигуратор

Use tab for config builder instead of hamburger menu.