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

Если вы вносите изменения в профиль, убедитесь, что редактируете правильный профиль. На вкладке профиля не всегда отображается фактически используемый профиль, например, если вы переключили профиль, используя вкладку профиля на домашней странице, то он может отличаться от профиля, который показан на вкладке, так как между ними нет синхронизации.

#### Переключение профиля и клонирование

Вы можете легко создать новый локальный профиль с помощью переключения профиля. В этом случае сдвиг по времени и процент будет применяться к новому локальному профилю.

1. Перейдите на вкладку терапии.
2. Выберите Переключатель профилей.
3. Нажмите Кнопку "Клонировать".
4. Вы можете редактировать новый локальный профиль через вкладку локальный профиль (ЛП) или через сэндвич-меню.

![Переключение профиля и клонирование](../images/LocalProfile_ClonePS.png)

Если вы хотите переключаться с профиля Nightscout на локальный профиль просто сделайте переключение профиля в профиле NS и клонируйте его, как описано выше.

#### Загрузить локальные профили в Nightscout

Локальные профили также могут быть загружены на Nightscout. The settings can be found in [NSClient preferences](../Configuration/Preferences#nsclient).

![Загрузить локальный профиль в НС](../images/LocalProfile_UploadNS2.png)

Преимущества:

* не требуется подключение к интернету для изменения настроек профиля
* изменения профиля могут быть сделаны непосредственно на телефоне
* новый профиль можно создать при помощи переключателя профиля
* локальные профили можно загрузить в Nightscout

Недостатки:

* отсутствуют

### Помощник профиля

Помощник профиля предлагает две функции:

1. Найти профиль для детей
2. Сравнить два профиля или переключателя профиля, чтобы клонировать новый профиль

Подробности разъясняются на отдельной [странице помощника профиля](../Configuration/profilehelper.rst).

### профиль NS

Профиль NS использует профили, которые вы сохранили на сайте Nightscout (https://[адрес вашего сайта]/profile). Можно использовать [Переключатель профиля](../Usage/Profiles.md) для изменения активного профиля, это действие запишет профиль в помпу на случай неполадок с AndroidAPS. Это позволяет вам легко создавать несколько профилей в Nightscout (например работа, дом, спорт, отдых и т. п.). Вскоре после нажатия кнопки «Сохранить» они будут переданы в AAPS если ваш смартфон подключен к интернету. Даже без подключения к Интернету или без подключения к Nightscout профили Nightscout доступны в AAPS после синхронизации.

Выберите действие [Смена профиля ](../Getting-Started/Screenshots.md#current-profile), чтобы активировать профиль из Nightscout. При этом AAPS запишет выбранный профиль в помпу, так что выбранный профиль будет действовать даже в случае недоступности AAPS.

Преимущества:

* множественные профили
* легко редактировать с помощью ПК или планшета

Недостатки:

* невозможность локальных изменений в настройках профиля
* профиль не может быть изменен непосредственно на телефоне

## Инсулин

![Insulin type](../images/ConfBuild_Insulin.png)

* Выберите кривую, соответствующую типу вашего инсулина.
* Варианты 'Быстро действующий Oref', Сверхбыстрый Oref' и 'Безпиковый Oref' имеют вид экспоненты. Подробная информация приведена в [документации по OpenAPS](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves). 
* Кривые зависят от DIA и времени до пика.
    
    * ФИОЛЕТОВАЯ кривая показывает, сколько **инсулина осталось** после введения - его количество снижается с течением времени.
    * Синяя линия показывает ** активность инсулина**.

### DIA (время действия инсулина)

* Длительность работы инсулина не одинакова для всех. Вот почему вы должны проверить ее на себе. 
* Но она всегда должна быть минимум 5 часов.
* Многие люди, использующие ультра-короткие инсулины вроде Fiasp, отмечают что его действие спустя 3-4 часа практически незаметно, даже если остается еще порядка 0.0xx единиц. Однако, это остаточное количество инсулина может быть ощутимо, например, во время занятий спортом. Поэтому в AndroidAPS время действия инсулина DIA указывается минимум 5 часов.
* Более подробную информацию можно прочитать в разделе "Профиль инсулина" на [ этой ](../Getting-Started/Screenshots#insulin-profile) странице. 

### Различия типов инсулина

* Для 'Коротких', 'Ультракоротких' и 'Lyumjev' инсулинов время действия DIA - единственный параметр, который можно изменить, время пика фиксировано. 
* Безпиковый позволяет настроить как DIA, так и время пика, эта опция для опытных пользователей, которые знают последствия таких параметров. 
* [Диаграмма профиля инсулина](../Getting-Started/Screenshots#insulin-profile) поможет понять различия. 
* Эту диаграмму можно вывести на отдельной вкладке, включив соответствующий флажок в конфигураторе, ее также можно найти в выпадающем сэндвич-меню.

#### Быстро действующий Oref

* рекомендуется для Humalog, Novolog и Novorapid
* DIA (длительность действия инсулина) = по крайней мере 5.0 часов
* Макс. пик = 75 мин после инъекции (фиксированный, не регулируется)

#### Сверхбыстрый Oref

* Рекомендуется для FIASP
* DIA (длительность действия инсулина) = по крайней мере 5.0 часов
* Макс. пик = 55 мин после инъекции (фиксированный, не регулируется)

#### Lyumjev

* Специальный профиль для инсулина Lyumjev
* DIA (длительность действия инсулина) = по крайней мере 5.0 часов
* Макс. пик = 45 мин после инъекции (фиксированный, не регулируется)

#### Безпиковый Oref

* Для профиля 'Безпиковый 0ref' можно самостоятельно ввести время пика.
* Если в профиле не определено более высокое значение, DIA автоматически устанавливается на 5 часов.
* Этот профиль рекомендуется если используется неподдерживаемый тип инсулина или смесь различных инсулинов.

## Источник данных гликемии

Выберите источник данных ГК - см. страничку [Источник ГК](BG-Source.rst) для получения дополнительной информации по настройкам.

* [xDrip +](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* ГК с клиента Nightscout
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [ Glimp ](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de)-поддерживается только версия 4.15.57 и более поздние
* Модифицированное приложение [Dexcom](https://github.com/dexcomapp/dexcomapp/) - выберите «Отправлять данные ГК на xDrip +», если хотите пользоваться оповещениями от xDrip +.
    
    ![Config Builder BG source](../images/ConfBuild_BGSource.png)

* [Poctech](https://www.poctechcorp.com/en/contents/268/5682.html)

* [ПриложениеTomato](http://tomato.cool/) для устройства MiaoMiao
* Генерировать случайные данные ГК (только демо-режим)

## Помпа

Выберите помпу, которой пользуетесь.

* [Dana R](DanaR-Insulin-Pump.md)
* DanaR Корея (DanaR для корейского рынка)
* Dana Rv2 (помпа DanaR с неофициальным обновлением прошивки)
* [Dana RS](DanaRS-Insulin-Pump.md)
* [Accu Chek Insight](Accu-Chek-Insight-Pump.md)
* [Accu Chek Combo](Accu-Chek-Combo-Pump.md) (требуется установка утилиты ruffy для сопряжения с помпой)
* [Medtronic](MedtronicPump.md)
* MDI инъекции инсулина шприцем/шприц-ручкой (на основе предложений от AAPS по ведению терапии)
* Виртуальная помпа (открытый цикл для помпы, не имеющей драйверов - только предложения)

Для помпы Dana перейдите в **Дополнительные параметры**, и если необходимо, активируйте BT watchdog. Он отключает bluetooth на одну секунду, если подключение к помпе невозможно. Это помогает на некоторых телефонах, где зависает bluetooth.

[Пароль для помпы Dana RS](../Configuration/DanaRS-Insulin-Pump.md) должен быть введен правильно. Пароль не проверялся в предыдущих версиях.

## Определение чувствительности

Выберите тип анализа чувствительности. Для получения более подробной информации о различных типах [читайте здесь](../Configuration/Sensitivity-detection-and-COB.md). Алгоритм будет анализировать историю данных и вносить коррективы, если признает, что вы реагируете более чутко (или, наоборот, более резистентно) на инсулин, чем обычно. Подробнее об алгоритме чувствительности можно прочитать в [документации OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

Вы можете вывести график чувствительности на экран, отметив галочкой соответствующий пункт из выпадающего меню графиков. Он изображается в виде белой линии. Обратите внимание, что для использования Определителя чувствительности [Autosens](../Usage/Open-APS-features#autosens) необходимо пройти [ Цель 8 ](../Usage/Objectives#objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens). До достижения этой цели процент / линия Autosens на диаграмме отображается только для информации.

### Настройки усваиваемости

Если вы применяете Oref1 с микроболюсами SMB необходимо установить **min_5m_действия углеводов** на 8. Это значение используется только во время пробелов в мониторинге или когда физическая нагрузка "съедает" весь подъем гликемии, которая в ином случае заставила бы алгоритм AAPS компенсировать углеводы COB организма. В случаях, когда [поглощение углеводов](../Usage/COB-calculation.rst) не может быть рассчитано динамически на основе реакции вашей крови, он применяет скорость усвоения по умолчанию. Этот параметр не приводит к отказам.

## Система ИПЖ

Выберите нужный алгоритм APS для ведения терапии. Подробности выбранного алгоритма можно просмотреть на вкладке OpenAPS(OAPS).

* Помощник болюса OpenAPS AMA (расширенный помощник болюса, состояние алгоритма на 2017г.) Подробнее об OpenAPS AMA в [документации OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). Говоря просто, преимущества этого алгоритма в более эффективной постановке временного базала ПРИ УСЛОВИИ правильного введения углеводов.
* [Супер микро болюс OpenAPS](../Usage/Open-APS-features.md) (самый новый алгоритм для опытных пользователей). Для того, чтобы использовать этот алгоритм, вы должны начать [Цель 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb), а параметр min_5m_carbimpact должен быть равен 8 (см. настройки в Конфигуратор > определение чувствительности > Чувствительность Oref1).

## Замкнутый цикл

* Переключение между Открытым циклом, Закрытым циклом и Приостановкой помпы на низкой ГК.

![Config builder - loop mode](../images/ConfigBuilder_LoopLGS.png)

### Открытый цикл

* AAPS постоянно оценивает все доступные данные (активный инсулин IOB, активные углеводы COB, сахар крови и т. п.) и при необходимости делает предложения о корректировке терапии. 
* Предложения не будут выполняться автоматически (как при замкнутом цикле) а должны вводиться вручную прямо в помпу или с помощью команды (при пользовании совместимыми помпами Dana R/RS или Accu Chek Combo). 
* Этот параметр предназначен для знакомства с работой AndroidAPS или для неподдерживаемых помп.

### Closed Loop/Замкнутый цикл (петля, контур)

* AAPS постоянно оценивает доступные данные (активный инсулин IOB, активные углеводы COB, сахар крови и т. п.) и при необходимости автоматически корректирует лечение (без вашего дальнейшего вмешательства) для достижения целевого диапазона или величины (подача болюса, временная базальная скорость, отключение подачи инсулина во избежание гипогликемии и т.д.). 
* Замкнутый цикл работает в рамках многочисленных ограничений безопасности, каждое из которых можно задать по отдельности.
* Замкнутый цикл можно инициировать только по достижении [цели 6](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend) или далее с применением поддерживаемой помпы.
* Обратите внимание: в режиме Замкнутого цикла рекомендуется использовать строгое значение целевой ГК вместо диапазона значений (например, 5,5 ммоль/л или 100 мг/дл вместо 5,0 - 7,0 ммоль/л или 90 - 125 мг/дл).

### Приостановка помпы на низкой ГК

* maxIOB установлен в 0
* Это означает, что если глюкоза крови падает система уменьшит базу.
* Если значение глюкозы крови растет - автоматической коррекции не будет. База останется на том же уровне, что записан в выбранном Профиле.
* Только если базовый IOB отрицательный (от предыдущего отключения при низкой ГК) будет подан дополнительный инсулин для снижения ГК.

### Минимальный запрос на изменения

* При открытогм цикле вы будете получать уведомления каждый раз, когда AAPS рекомендует скорректировать базальную скорость. 
* Чтобы уменьшить число уведомлений, можно либо использовать более широкий диапазон целевой ГК, либо увеличить процент минимального запроса на изменения.
* Он определяет относительное изменение, необходимое для активации уведомления.

## Цели (обучающая программа)

AndroidAPS содержит обучающую программу с рядом задач (целей), которые вы должны выполнить шаг за шагом. Подобная организация алгоритма безопасно проведет вас к созданию замкнутой системы. Она гарантирует, что вы все правильно наладили и понимаете, что именно делает система. Это единственный способ понять, что вы можете доверять системе.

Следует [экспортировать настройки](../Usage/ExportImportSettings.rst) (в том числе ход прохождения целей) на регулярной основе. В дальнейшем, если вам потребуется заменить смартфон (новая покупка, повреждение и т. д.) вы можете просто импортировать эти параметры.

См. страницу [Цели](../Usage/Objectives.rst) для дополнительной информации.

## Терапия

If you view the Treatments (Treat) tab, you can see the treatments that have been uploaded to nightscout. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the [carbs button on the home screen](../Getting-Started/Screenshots#carb-correction).

## Общие настройки

### Общие замечания

Displays the current state of your loop and buttons for most common actions (see [section The Homescreen](../Getting-Started/Screenshots.md) for details). Settings can be accessed by clicking the cog wheel.

#### Не отключать экран

Option 'Keep screen on' will force Android to keep the screen on at all times. This is useful for presentations etc. But it consumes a lot of battery power. Therefore, it is recommended to connect the smartphone to a charger cable.

#### Кнопки

Define which Buttons are shown on the home screen.

* Терапия
* Калькулятор
* Инсулин
* Углеводы
* CGM (opens xDrip+)
* Калибровка

Furthermore, you can set shortcuts for insulin and carb increments and decide whether the notes field should be shown in treatment dialogues.

#### QuickWizard settings

Create a button for a certain standard meal (carbs and calculation method for the bolus) which will be displayed on the home screen. Use for standard meals frequently eaten. If different times are specified for the different meals you will always have the appropriate standard meal button on the home screen, depending on the time of day.

Note: Button will not be visible if outside the specified time range or if you have enough IOB to cover the carbs defined in the QuickWizard button.

![QuickWizard button](../images/ConfBuild_QuickWizard.png)

#### Default Temp-Targets

Choose default temp-targets (duration and target). Preset values are:

* eating soon: target 72 mg/dl / 4.0 mmol/l, duration 45 min
* activity: target 140 mg/dl / 7.8 mmol/l, duration 90 min
* hypo: target 125 mg/dl / 6.9 mmol/l, duration 45 min

#### Fill/Prime standard insulin amounts

Choose the default amounts of the three buttons in fill/prime dialogue, depending on the length of your catheter.

#### Range of visualization

Choose the high and low marks for the BG-graph on AndroidAPS overview and smart watch. It is only the visualization, not the target range for your BG. Example: 70 - 180 mg/dl or 3.9 - 10 mmol/l

#### Shorten tab titles

Choose wether the tab titles in AndroidAPS are long (e.g. ACTIONS, LOCAL PROFILE, AUTOMATION) or short (e.g. ACT, LP, AUTO)

#### Show notes field in treatment dialogs

Choose if you want to have a notes field when entering treatments or not.

#### Индикаторы состояния

Choose if you want to have [status lights](../Configuration/Preferences#status-lights) on overview for canula age, insulin age, sensor age, battery age, reservoir level or battery level. When warning level is reached, the color of the status light will switch to yellow. Critical age will show up in red.

#### Advanced settings

**Deliver this part of bolus wizard result**: When using SMB, many people do not meal-bolus 100% of needed insulin, but only a part of it (e.g. 75 %) and let the SMB with UAM (unattended meal detection) do the rest. In this setting, you can choose a default value for the percenteage the bolus wizard should calculate with. If this setting is 75 % and you had to bolus 10u, the bolus wizard will propose a meal bolus of only 7.5 units.

**Enable super bolus functionality in wizard** (It is different from *super micro bolus*!): Use with caution and do not enable until you learn what it really does. Basically, the basal for the next two hours is added to the bolus and a two hour zero-temp activated. **AAPS looping functions will be disabled - so use with care! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### Действия

* Some buttons to quickly access common features.
* See [AAPS screenshots](../Getting-Started/Screenshots#action-tab) for details.

### Автоматизация

User defined automation tasks ('if-then-else'). Please [read on here](../Usage/Automation.rst).

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

### NSClient

* Setup sync of your AndroidAPS data with Nightscout.
* Settings in [preferences](../Configuration/Preferences#nsclient) can be opened by clicking the cog wheel.

### Maintenance

Email and number of logs to be send. Normally no change necessary.

### Конфигуратор

Use tab for config builder instead of hamburger menu.