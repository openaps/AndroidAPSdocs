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

Преимущества:

* не требуется подключение к интернету для изменения настроек профиля
* изменения профиля могут быть сделаны непосредственно на телефоне

Недостатки:

* только один профиль

### Профиль Nightscout (NS)

Профиль NS использует профили, которые вы сохранили на сайте Nightscout (https://[адрес вашего сайта]/profile). Вы можете воспользоваться [Переключателем профиля](../Usage/Profiles.md) для изменения активного профиля, это действие записывает данные профиля в помпу на случай отказа AndroidAPS. Это позволяет легко создавать несколько профилей в Nightscout (например.. работа, дом, спорт, отдых и т. п.). Вскоре после нажатия кнопки «Сохранить» они будут переданы в AAPS если ваш смартфон подключен к интернету. Даже без подключения к Интернету или без подключения к Nightscout профили Nightscout доступны в AAPS после синхронизации.

Выполните ** переключение профиля** для активации профиля из Nightscout. Нажмите и удерживайте поле текущего профиля в верхнем углу (серое поле между светло синим полем «Открытый/замкнутый цикл» и темно синим полем области целевых значений) > переключатель профиля > выбрать профиль > ОК. AAPS также прописывает выбранный профиль в помпу, так что он будет доступен и выполняться без AAPS при непредвиденных ситуациях.

Преимущества:

* множественные профили
* легко редактировать с помощью ПК или планшета

Недостатки:

* невозможность локальных изменений в настройках профиля
* профиль не может быть изменен непосредственно на телефоне

### Простой профиль

Простой профиль с одним блоком времени для продолжительности действия инсулина DIA, углеводного коэффициента IC, чувствительности к инсулину ISF, скорости базала и целевым диапазоном (напр. если скорость базала не изменяется в течение дня). Вероятнее всего, будет использоваться для тестирования, если только у вас не одни и те же коэффициенты 24 часа в сутки. После выбора «Простого профиля», в AAPS появится новая вкладка, куда можно ввести данные профиля.

## Инсулин

Выберите кривую, соответствующую типу вашего инсулина. Варианты 'Быстродействующий Oref', Сверхбыстрый Oref' и 'Безпиковый Oref' имеют вид экспоненты. Более подробно см. в [Документах OpenAPS](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves), кривые различаются на основе длительности действия инсулина DIA и времени пика.

Длительность работы инсулина не одинакова для всех. Вот почему вы должны проверить ее на себе. Но она всегда должна быть минимум 5 часов. Более подробную информацию можно прочитать в разделе "Профиль инсулина" на [ этой ](../Getting-Started/Screenshots#insulin-profile) странице.

Для быстродействующих и сверхбыстрых инсулинов, длительность действия инсулина DIA является единственной переменной, которую можно настроить самостоятельно, время пика фиксированное. Безпиковый позволяет настроить как DIA, так и время пика, эта опция для опытных пользователей, которые знают последствия таких параметров.

[Диаграмма работы инсулина](../Getting-Started/Screenshots#insulin-profile) поможет понять различные кривые. Его можно увидеть на вкладке, если отметить галочкой в конфигураторе или выбрать из выпадающего меню слева.

### Быстродействующий Oref

* рекомендуется для Humalog, Novolog и Novorapid
* DIA (длительность действия инсулина) = по крайней мере 5.0 часов
* Макс. пик = 75 мин после инъекции (фиксированный, не регулируется)

### Сверхбыстрый Oref

* рекомендуется для FIASP
* DIA (длительность действия инсулина) = по крайней мере 5.0 часов
* Макс. пик = 55 мин после инъекции (фиксированный, не регулируется)

Для многих людей действие FIASP практически незаметно спустя 3-4 часа, даже когда, как правило, остается 0.0xx ед. Это остаточное количество может быть ощутимо во время занятий спортом, например. Поэтому AndroidAPS использует как минимум 5 часов в качестве DIA.

![Ультра-быстрый Oref в конфигураторе](../images/ConfBuild_UltraRapidOref.png)

### Безпиковый Oref

На профиле «Безпиковый 0ref» можно самостоятельно ввести пиковое время. Если в профиле не определено более высокое значение, DIA автоматически устанавливается на 5 часов.

Этот инсулиновый профиль рекомендуется если используется неподдерживаемый тип инсулина или смесь различных инсулинов.

## Источник данных гликемии

Выберите источник данных ГК - см. страничку [Источник ГК](BG-Source.rst) для получения дополнительной информации по настройкам.

* [xDrip +](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* ГК с клиента Nightscout
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de)
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
* Виртуальная помпа (открытый цикл для помпы, не имеющей драйверов - только предложения по ведению терапии от AAPS)

Для активации сторожа BT пользуйтесь **Дополнительными параметрами**. Он отключает bluetooth на одну секунду, если подключение к помпе невозможно. Это помогает на некоторых телефонах, где зависает bluetooth.

## Определение чувствительности

Выберите тип анализа чувствительности. Алгоритм будет сразу же анализировать историю данных и вносить коррективы, если признает, что вы реагируете более чутко (или, наоборот, более резистентно) на инсулин, чем обычно. Подробнее об алгоритме чувствительность Oref0 можно прочитать в [документации OpenAPS](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode).

Вы можете вывести график чувствительности на экран, отметив галочкой соответствующий пункт из выпадающего меню графиков. Он изображается в виде белой линии. Обратите внимание, что для использования Определителя чувствительности Autosens необходимо достигнуть [ Цель 8 ](../Usage/Objectives#objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens).

### Настройки усваиваемости

Если вы применяете Oref1 с микроболюсами SMB необходимо установить **min_5m_действия углеводов** на 8. Это значение используется только во время пробелов в мониторинге или когда физическая нагрузка "съедает" весь подъем гликемии, которая в ином случае заставила бы алгоритм AAPS компенсировать активные углеводы COB. В те времена когда поглощение углеводов не может быть рассчитано динамически на основе реакции вашей крови, он по умолчанию применяет эту скорость компенсации. Этот параметр не приводит к отказам.

## Система ИПЖ

Выберите нужный алгоритм APS для ведения терапии. Подробности выбранного алгоритма можно просмотреть на вкладке OpenAPS(OAPS).

* Помощник болюса OpenAPS MA (по состоянию алгоритма на 2016г.)
* Помощник болюса OpenAPS AMA (расширенный помощник болюса, состояние алгоритма на 2016г.).  
    Подробнее об OpenAPS AMA в [документации OpenAPS](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). Говоря просто, его преимущество в том, что после болюса на еду система быстрее определит верхнюю временную цель если углеводы введены верно.  
    Обратите внимание, что для пользования алгоритмом Расширенный калькулятор болюса AMA следует пройти [Цель 9](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama).
* [OpenAPS SMB](../Usage/Open-APS-features.md) (супер микро болюс, новый алгоритм для опытных пользователей)   
    ; обратите внимание, работа OpenAPS SMB требует достижения [цели 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb), а в конфигураторе минимальное 5-мин действие углеводов должно быть установлено на 8: конфигуратор> чувствительность >параметр чувствительности Oref1.

## Замкнутый цикл

Определите, вы хотите разрешить автоматический контроль AAPS или нет.

### Открытый цикл

AAPS постоянно оценивает все доступные данные (активный инсулин IOB, активные углеводы COB, сахар крови и т. п.) и при необходимости делает предложения о корректировке терапии. Предложения не будут выполняться автоматически (как при замкнутом цикле) а должны вводиться вручную прямо в помпу или с помощью команды (при пользовании совместимыми помпами Dana R/RS или Accu Chek Combo). Этот параметр предназначен для знакомства с работой AndroidAPS или для неподдерживаемых помп.

### Замкнутый цикл

AAPS постоянно оценивает доступные данные (активный инсулин IOB, активные углеводы COB, сахар крови и т. п.) и при необходимости автоматически корректирует лечение (без вашего дальнейшего вмешательства) для достижения целевого диапазона или величины (подача болюса, временная базальная скорость, отключение подачи инсулина во избежание гипогликемии и т.д.). Замкнутый цикл работает в рамках многочисленных ограничений безопасности, каждое из которых можно задать по отдельности. Замкнутый цикл можно инициировать только по достижении [цели 6](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend) или далее с применением поддерживаемой помпы.

## Цели (обучающая программа)

AndroidAPS ставит перед вами ряд задач (целей), которые вы должны выполнить шаг за шагом. Подобная организация алгоритма безопасно проведет вас к созданию замкнутой системы. Она гарантирует, что вы все правильно наладили и понимаете, что именно делает система. Это единственный способ понять, что вы можете доверять системе.

Следует [экспортировать настройки](../Usage/ExportImportSettings.rst) (в том числе ход прохождения целей) на регулярной основе. В дальнейшем, если вам потребуется заменить смартфон (новая покупка, повреждение и т. д.) вы можете просто импортировать эти параметры.

См. страницу [Цели](../Usage/Objectives.rst) для дополнительной информации.

## Терапия

На вкладке лечения (назначения) отражены назначения, загруженные в nightscout. Если вы хотите редактировать или удалить запись (например, съели меньше углеводов, чем ожидали) выберите «Удалить» и введите новое значение (измените время, в случае необходимости) через вкладку Портал лечения/назначений (CP).

## Общие настройки

### Главный экран, Начало

Отображает текущее состояние цикла и кнопки для наиболее распространенных действий (см. [раздел Главный экран](../Getting-Started/Screenshots.md) для подробной информации). Доступ к параметрам - через значок шестеренки.

#### Не отключать экран

Параметр «не отключать экран» заставит Android держать экран включенным постоянно. Это полезно для презентаций и т. д. Но опция потребляет больше энергии аккумулятора. Поэтому рекомендуется подключить смартфон к кабелю зарядного устройства.

#### Кнопки

Определите, какие кнопки будут отображаться на домашнем экране.

* Терапия
* Калькулятор
* Инсулин
* Углеводы
* Мониторинг (открывает xDrip +)
* Калибровка

Furthermore, you can set shortcuts for insulin and carb increments and decide whether the notes field should be shown in treatment dialogues.

#### Быстрый болюс

Create a button for a certain standard meal (carbs and calculation method for the bolus) which will be displayed on the home screen. Use for standard meals frequently eaten. If different times are specified for the different meals you will always have the appropriate standard meal button on the home screen, depending on the time of day.

Note: Button will not be visible if outside the specified time range or if you have enough IOB to cover the carbs defined in the QuickWizard button.

![QuickWizard button](../images/ConfBuild_QuickWizard.png)

#### Расширенные настройки

Enable super bolus functionality in wizard. Use with caution and do not enable until you learn what it really does. Basically, the basal for the next two hours is added to the bolus and a two hour zero-temp activated. **AAPS looping functions will be disabled - so use with care! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### Действия

Some buttons to quickly access common features:

* Переключатель профилей (см. [страницу профилей](../Usage/Profiles.md) для дополнительной информации по настройке)
* Временные цели
* Задать / отменить врем. скорость базала
* Пролонгированный болюс (только для DanaR/RS или Combo)
* Первичное заполнение / заправка картриджа (только для DanaR/RS или Combo)
* Журнал
* TDD (Общая суточная доза = болюс + базал за день)

Some doctors use - especially for new pumpers - a basal-bolus-ratio of 50:50. Therefore ratio is calculated as TDD / 2 * TBB (Total base basal = sum of basal rate within 24 hours). Others prefer range of 32% to 37% of TDD for TBB. Like most of these rules-of-thumb it is of limited real validity. Note: Your diabetes may vary!

![Actions tab](../images/ConfBuild_ConfBuild_Actions.png)

### Портал назначений/терапии

Allows you to record any specific care entries and view the current sensor, insulin, canula and pump battery ages in the Careportal (CP) tab.

Note: **No insulin** will be given if entered via careportal (i.e. meal bolus, correction bolus...)

Carbs entered in the careportal (i.e. correction carbs) will be used for COB calculation.

![Careportal tab](../images/ConfBuild_CarePortal.png)

### SMS коммуникатор

Allows remote caregivers to control some AndroidAPS features via SMS, see [SMS Commands](../Children/SMS-Commands.rst) for more setup information.

### Еда

Displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the AndroidAPS calculator. (View only)

### Смарт-часы Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../Configuration/Watchfaces.md)). Use settings (cog wheel) to define which variables should be considered when calculating bolus given though your watch (i.e. 15min trend, COB...).

If you want to bolus etc. from the watch then within "Wear settings" you need to enable "Controls from Watch".

![Wear settings](../images/ConfBuild_Wear.png)

Through Wear tab or hamburger menu (top left of screen, if tab is not displayed) you can

* Повторить отправку всех данных. Может быть полезно, если некоторое время часы не были подключены и вы хотите передать на них данные.
* Открыть настройки на часах прямо с телефона.

### Cтрока состояния xDrip (часы)

Display loop information on your xDrip+ watchface (if you are not using AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md)

### Текущее состояние приложения

Displays a summary of current BG, delta, active TBR%, active basal u/h and profile, IOB and split into bolus IOB and basal IOB on the phones's dropdown screen and phone's lock screen.

![AAPS widget](../images/ConfBuild_Widget.png)

### Клиент Nightscout

Setup sync of your AndroidAPS data with Nightscout.

If **Log app start to NS** is activated each AndroidAPS will be visible in Nightscout. Might be useful to detect problems with the app (i.e. battery optimization not disabled for AAPS) but can flood the Nightscout graph with entries.

#### Опции оповещения

Activate/deactivate AndroidAPS alarms

![Опции оповещения](../images/ConfBuild_NSClient_Alarms.png)

#### Настройки подключения

Offline looping, disable roaming...

If you want to use only a specific WiFi network you can enter its **WiFi SSID **. Several SSIDs can be separated by semicolon. To delete all SSIDs enter a blank space in the field.

![Nightscout connection settings](../images/ConfBuild_ConnectionSettings.png)

#### Расширенные настройки

* Заполнять пропущенные значения ГК данными из Nightscout
* Создать оповещение из сообщения об ошибке Создать оповещение Nightscout из диалогов об ошибках и местных оповещений (также отображаются в careportal в разделе лечение/назначения)
* Активировать местную трансляцию на другие приложения (напр. xDrip+)
* Только отправлять на NS (Синхронизация отключена)
* Не отправлять в NS
* Всегда использовать абсолютные значения базала -> должно быть активировано, если вы хотите правильно применять [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html).

![Nightscout advanced settings](../images/ConfBuild_NSClient_Advanced.png)

### Тех. обслуживание

Email and number of logs to be send. Normally no change necessary.

### Конфигуратор

Use tab for config builder instead of hamburger menu.