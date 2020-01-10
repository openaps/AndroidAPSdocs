# AAPS на смарт-часах с Wear OS

Приложение AndroidAPS можно установить в смарт-часах на ** Wear **. Версия на часах позволяет:

* **отображать данные на часах**: при помощи [пользовательских циферблатов](#aaps-watchfaces) или стандартных циферблатов с использованием [дополнений](#complications)
* **контролировать AAPS на телефоне**: чтобы подать болюс, установить временную цель и т. д. 

### Перед тем как купить часы...

* Некоторые * дополнения *, требуют Wear OS версии 2.0 или новее
* Google переименовал *Android Wear 1.x* в *Wear OS* начиная с версии 2.x, так что *Android Wear* может означать старую версию 1.x системы
* Если описание смарт-часов указывает только на совместимость с * Android * и * iOS *-то это не **означает**, что они работают в * Wear OS *, - это может быть другой тип ОС от производителя часов, ** который несовместим с wear AAPS! **
* Проверьте [ список проверенных телефонов и часов ](../Getting-Started/Phones#list-of-tested-phones) и [ спросите пользователей ](../Where-To-Go-For-Help/Connect-with-other-users.md) в случае сомнений

### Создание Wear-версии AAPS

Для Wear -версии AAPS при [ построении APK ](../Installing-AndroidAPS/Building-APK.md) необходимо выбрать вариант компоновки "fullRelease", (или "pumpRelease" для удаленного управления помпой без цикла).

Убедитесь, что и телефон, и Wear-версия AAPS подписаны одними ключами!

На часах должно быть установлено приложение Wear аналогично установке приложений на телефоне. Для этого на часах требуется включить * режим разработчика * и загрузить на них APK с: ` adb install web-full-release.apk `

При использовании AAPS в версии Wear всегда обновляйте его вместе с версией AAPS на телефоне.

### Настройка на телефоне

В конфигураторе AndroidAPS нужно [активировать Wear](../Configuration/Config-Builder#wear).

## Контроль AAPS с часов

AndroidAPS предусматривает возможность *управления* часами Android Wear. Если вы хотите подавать болюс и т. д. с часов, тогда в настройках часов Wear следует включить «Управление с часов».

Следующие функции могут быть запущены с часов:

* установить временные целевые значения СК
* подать болюс
* расписать eCarbs
* использовать калькулятор болюса (переменные могут быть определены в [настройках](../Configuration/Config-Builder#wear) на телефоне)
* проверить работу алгоритма цикла и помпы
* показать TDD (Общая суточная доза = болюс + базал в день)

## Циферблаты AAPS

Есть несколько циферблатов, в которых показывается средняя дельта СК, активный инсулин IOB, действующий временный базал и профили базы и график мониторинга.

Убедитесь, что уведомления от AndroidAPS не заблокированы на часах. Подтверждение действия (например, болюс, временные цели) происходит через уведомления, которые нужно смахнуть в сторону и нажать на галочку.

Чтобы быстрее попасть в меню AAPS, сделайте двойное нажатие на ГК. При двойном нажатии на кривую ГК можно изменить масштаб времени..

## Доступные циферблаты

![Available watchfaces](../images/Watchface_Types.png)

## Циферблат AAPSv2 - Legend

![Циферблат Легенда AndroidAPSv2](../images/Watchface_Legend.png)

О - время с запуска последнего цикла

B - данные ГК мониторинга

C - минуты с последнего получения данных ГК

D - изменение по сравнению с последним полученным значением ГК (в mmol или mg/dl)

E - среднее изменение данных ГК за последние 15 минут

F - состояние аккумулятора телефона

G - скорость подачи базала (в ед/ч во время стандартной подачи и в % при временном базале TBR)

H - BGI (взаимодействие с глюкозой крови) -> Степень, с которой ГК “должна” расти или падать, основываясь только на активности инсулина (без учета других факторов).

I - углеводы (активные углеводы | e-carb в будущем)

J - активный инсулин (от болюсов | от базала)

## Доступ к главному меню AAPS

Для доступа к главному меню AAPS можно использовать следующие опции:

* дважды нажмите на значение ГК
* выбрать значок AAPS в меню приложения часов
* нажмите AAPS (если сконфигурировано в меню)

## Параметры (в часах Wear)

Чтобы получить доступ к настройкам циферблатов, войдите в главное меню AAPS, сдвиньте экран вверх и выберите "Настройки".

Заполненная звездочка соответствует включенному состоянию (**Вкл.**), а незаполненная указывает, что настройка отключена (**Выкл**):

![Settings on/off](../images/Watchface_Settings_On_Off.png)

### Сопутствующие параметры AAPS

* ** Вибрировать при болюсе ** (по умолчанию ` Вкл`):
* ** Единицы для принятия действий ** (по умолчанию ` мг/дл `): если ** Вкл** то на основе ` мг/дл `, если ** Выкл ** то на основе ` ммоль/л `. Используется при установке временной цели ТТ с часов.

### Параметры циферблатов

* ** Показать дату ** (значение по умолчанию `Выкл `): примечание: дата доступна не на всех циферблатах
* ** Показывать активный инсулин IOB ** (значение по умолчанию ` Вкл`): (детализация задается в параметрах Wear в AAPS)
* ** Показать активные углеводы COB ** (по умолчанию ` Вкл `): Показывать или не показывать значение COB
* ** Показать дельту ** (по умолчанию ` Вкл `): Показывать или не показывать изменение ГК за последние 5 минут
* ** Показывать среднюю дельту ** (по умолчанию ` Вкл `): Показывать или не показывать среднее изменение ГК за последние 15 минут
* ** Показывать заряд батареи телефона ** (по умолчанию ` Вкл `): Батарея телефона в%. Красная, если ниже 30%.
* ** Показать батарею платформы ** (по умолчанию ` Выкл`): Батарея платформы - это интегральная величина заряда батареи телефона, помпы и трансмиттера (как правило, наименьшее из трех значений)
* ** Показать базальную скорость ** (по умолчанию ` Вкл `): показывать на экране или нет текущую скорость базала (в ед/ч или в%, если TBR)
* **Show Loop Status** (default `On`): show how many minutes since last loop run (arrows around value turn red if above 15').
* **Show BG** (default `On`): Display or not last BG value
* **Show Direction Arrow** (default `On`): Display or not BG trend arrow
* **Show Ago** (default `On`): show how many minutes since last reading.
* **Dark** (default `On`): You can switch from black background to white background (except for Cockpit and Steampunk watch face)
* **Highlight Basals** (default `Off`): Improve the visibility of basal rate and temp basals
* **Matching divider** (default `Off`): For AAPS, AAPSv2 and AAPS(Large) watchfaces, show contrast background for divider (**Off**) or match divider with the background color (**On**)
* **Chart Timeframe** (default `3 hours`): you can select in the sub menu the max time frame of your chart between 1 hour and 5 hours.

### User Interface setting

* **Input Design**: with this parameter, you can select the position of "+" and "-" buttons when you enter commands for AAPS (TT, Insulin, Carbs...)

![Input design options](../images/Watchface_InputDesign.png)

### Specific watchface parameters

#### Steampunk watchface

* **Delta Granularity** (default `Medium`)

![Steampunk_gauge](../images/Watchface_Steampunk_Gauge.png)

#### Circle WF

* **Big Numbers** (default `Off`): Increase text size to improve visibility
* **Ring History** (default `Off`): View graphically BG history with gray rings inside the hour's green ring
* **Light Ring History** (default `On`): Ring history more discreet with a darker gray
* **Animations** (default `On`): When enabled, on supported by watch and not in power saving low-res mode, watchface circle will be animated

### Commands settings

* **Wizard in Menu** (default `On`): Allow wizard interface in main menu to input Carbs and set Bolus from watch
* **Prime in Menu** (default `Off`): Allow Prime / Fill action from watch
* **Single Target** (default `On`):
  
  * `On`: you set a single value for TT
  * `Off`: you set Low target and high target for TT

* **Wizard Percentage** (default `Off`): Allow bolus correction from wizard (value entered in percentage before confirmation notification)

## Complications

*Complication* is a term from traditional watchmaking, where it describes addition to the main watchface - as another small window or sub-dial (with date, day of the week, moon phase, etc.). Wear OS 2.0 brings that metaphor to allow custom data providers, like weather, notifications, fitness counters and more - to be added to any watchfaces that support complications.

AndroidAPS Wear OS app supports complications since build `2.6`, and allow any third party watchface that supports complications to be configured to display AAPS related data (BG with the trend, IOB, COB, etc.).

Complications also serve as **shortcut** to AAPS functions. By tapping them you can open AAPS related menus and dialogs (depending on complication type and configuration).

![Complications_On_Watchfaces](../images/Watchface_Complications_On_Watchfaces.png)

### Complication Types

AAPS Wear OS app provides only raw data, according to predefined formats. It is up to third-party watchface to decide where and how to render complications, including its layout, border, color, and font. From many Wear OS complication types available, AAPS uses:

* `SHORT TEXT` - Contains two lines of text, 7 characters each, sometimes referred to as value and label. Usually rendered inside a circle or small pill - one below another, or side by side. It is a very space-limited complication. AAPS tries to remove unnecessary characters to fit-in: by rounding values, removing leading and trailing zeroes from values, etc.
* `LONG TEXT` - Contains two lines of text, about 20 characters each. Usually rendered inside a rectangle or long pill - one below another. It is used for more details and textual status.
* `RANGED VALUE` - Used for values from predefined range, like a percentage. It contains icon, label and is usually rendered as circle progress dial.
* `LARGE IMAGE` - Custom background image that can be used (when supported by watchface) as background.

### Complication Setup

To add complication to watchface, configure it by long press and clicking the gear icon below. Depending on how specific watchface configures them - either click on placeholders or enter the watchface setup menu for complications. AAPS complications are grouped under the AAPS menu entry.

When configuring complications on watchface, Wear OS will present and filter the list of complications that can be fit into selected complication place on watchface. If specific complications cannot be found on the list, it is probably due to its type that cannot be used for the given place.

### Complications provided by AAPS

AndroidAPS provides following complications:

![AAPS_Complications_List](../images/Watchface_Complications_List.png)

* **BR, CoB & IoB** (`SHORT TEXT`, opens *Menu*): Displays *Basal Rate* on the first line and *Carbs on Board* and *Insulin on Board* on the second line.
* **Blood Glucose** (`SHORT TEXT`, opens *Menu*): Displays *Blood Glucose* value and *trend* arrow on the first line and *measurement age* and *BG delta* on the second line.
* **CoB & IoB** (`SHORT TEXT`, opens *Menu*): Displays *Carbs on Board* on the first line and *Insulin on Board* on the second line.
* **CoB Detailed** (`SHORT TEXT`, opens *Wizard*): Displays current active *Carbs on Board* on the first line and planned (future, eCarbs) Carbs on the second line.
* **CoB Icon** (`SHORT TEXT`, opens *Wizard*): Displays *Carbs on Board* value with a static icon.
* **Full Status** (`LONG TEXT`, opens *Menu*): Shows most of the data at once: *Blood Glucose* value and *trend* arrow, *BG delta* and *measurement age* on the first line. On the second line *Carbs on Board*, *Insulin on Board* and *Basal Rate*.
* **Full Status (flipped)** (`LONG TEXT`, opens *Menu*): Same data as for standard *Full Status*, but lines are flipped. Can be used in watchfaces which ignores one of two lines in `LONG TEXT`
* **IoB Detailed** (`SHORT TEXT`, opens *Bolus*): Displays total *Insulin on Board* on the first line and split of *IoB* for *Bolus* and *Basal* part on the second line.
* **IoB Icon** (`SHORT TEXT`, opens *Bolus*): Displays *Insulin on Board* value with a static icon.
* **Uploader/Phone Battery** (`RANGED VALUE`, opens *Status*): Displays battery percentage of AAPS phone (uploader), as reported by AAPS. Displayed as percentage gauge with a battery icon that reflects reported value. It may be not updated in real-time, but when other important AAPS data changes (usually: every ~5 minutes with new *Blood Glucose* measurement).

Additionally, there are three complications of `LARGE IMAGE` kind: **Dark Wallpaper**, **Gray Wallpaper** and **Light Wallpaper**, displaying static AAPS wallpaper.

### Complication related settings

* **Действия при нажатии кнопки расширений** (default `Default`): Decides which dialog is opened when user taps complication: 
  * *Default*: action specific to complication type *(see list above)*
  * *Menu*: AAPS main menu
  * *Wizard*: bolus wizard - bolus calculator
  * *Bolus*: direct bolus value entry
  * *eCarb*: eCarb configuration dialog
  * *Status*: status sub-menu
  * *None*: Disables tap action on AAPS complications
* **Unicode in Complications** (default `On`): When `On`, the complication will use Unicode characters for symbols like `Δ` Delta, `⁞` vertical dot separator or `⎍` Basal Rate symbol. Rendering of them depends on the font, and that can be very watchface-specific. This option allows switching Unicode symbols `Off` when needed - if the font used by custom watchface does not support those symbols - to avoid graphical glitches.

## Performance and battery life tips

Wear OS watches are very power-constrained devices. The size of the watch case limits the capacity of the included battery. Even with recent advancements both on hardware and software side, Wear OS watches still require daily charging.

If an experienced battery span is shorter than a day (from dusk to dawn), here are some tips to troubleshoot the issues.

Main battery-demanding areas are:

* Active display with a backlight on (for LED) or in full intensity mode (for OLED)
* Rendering on screen
* Radio communication over Bluetooth

Since we cannot compromise on communication (we need up-to-date data) and want to have the most recent data rendered, most of the optimizations can be done in *display time* area:

* Stock watchfaces are usually better optimized than custom one, downloaded from the store.
* It is better to use watchfaces that limit the amount of rendered data in inactive / dimmed mode.
* Be aware when mixing other Complications, like third party weather widgets, or other - utilizing data from external sources.
* Start with simpler watchfaces. Add one complication at the time and observe how they affect battery life.
* Try to use **Dark** theme for AAPS watchfaces, and [**Matching divider**](#watchface-settings). On OLED devices it will limit the amount of pixels lit and limit burnout.
* Check what performs better on your watch: AAPS stock watchfaces or other watchfaces with AAPS Complications.
* Observe over a few days, with different activity profiles. Most watches activate the display on glancing, movement and other usage-related triggers.
* Check your global system settings that affect performance: notifications, backlight/active display timeout, when GPS is activated.
* Check [list of tested phones and watches](../Getting-Started/Phones#list-of-tested-phones) and [ask community](../Where-To-Go-For-Help/Connect-with-other-users.md) for other users experiences and reported battery lifetime.
* **We cannot guarantee that data displayed on watchface or complication is up-to-date**. In the end, it is up to Wear OS to decide when to update a watchface or a complication. Even when the AAPS app requests update, the System may decide to postpone or ignore updates to conserve battery. When in doubt and low on battery on watch - always double-check with main AAPS app on phone.

## Устранение неполадок в приложении Wear:

* На Android Wear 2.0 экран часов больше не устанавливается сам собой. Вам нужно зайти в playstore - циферблаты для часов (не путать с Play Market для телефона), и найти его в категории приложений установленных на вашем телефоне, откуда вы можете его активировать. Также включите автообновление. 
* Иногда помогает повторная синхронизация приложений с часами, поскольку этот процесс иногда затягивается: Android Wear > значок шестеренки > наименование часов > повторная синхронизация часов.
* Включите отладку ADB в настройках разработчика (на часах), подключите часы через USB к компьютеру и запустите приложение Wear в Android Studio.
* If Complications does not update data - check first if AAPS watchfaces work at all.

## Просмотр данных Nightscout

Если вы используете другую систему цикла (не AAPS) и хотите *просмотреть* детали работы контура на часах Android Wear, или хотите посмотреть работу контура вашего ребенка, то можете построить/загрузить только модуль NSClient APK. Для этого перейдите по ссылке [инструкции по созданию APK ](../Installing-AndroidAPS/Building-APK.md) выбрав вариант сборки "NSClientRelease". Есть несколько циферблатов, в которых показывается средняя дельта СК, активный инсулин IOB, действующий временный базал и профили базы и график мониторинга.

# Смарт-часы Pebble

Pebble users can use the [Urchin watchface](https://github.com/mddub/urchin-cgm) to *view* looping data (if uploaded to Nightscout), but you will not be able to interact with AndroidAPS through the watch. Вы можете выбрать данные для отображения, такие как активный инсулин IOB, активный врем. базал и прогнозы. Если вы работаете с открытым циклом, вы можете пользоваться алгоритмом [IFTTT](https://ifttt.com/) для создания апплета, который, получив уведомление от AndroidAPS, отправляет SMS или создает push-уведомление.