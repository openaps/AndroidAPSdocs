# Работа AAPS с помощью смартчасов на базе Wear OS

(Смарт-часы-аапс-смарт-часы)=

## Циферблаты AAPS

Есть несколько циферблатов, в которых показывается средняя дельта ГК, активный инсулин IOB, действующий временный базал и профили базы и график мониторинга.

Убедитесь, что уведомления AAPS не заблокированы на часах. Подтверждение действия (например, болюс, временные цели) происходит через уведомления, которые нужно смахнуть в сторону и нажать на галочку.

Чтобы быстрее попасть в меню AAPS, сделайте двойное нажатие на ГК. При двойном нажатии на кривую ГК можно изменить масштаб времени графика..

## Доступные циферблаты

![Доступные циферблаты](../images/Watchface_Types.png)

(Смарт-часы-на-версии-AAPS-2-8)=

### Новые циферблаты начиная с AAPS v.2.8

![Цифровой стиль](../images/Watchface_DigitalStyle.png)

* Цвет, линии и круг настраиваются через меню - шестеренку в меню выбора циферблата.

## Циферблат AAPSv2 - условные обозначения

![Условные обозначения циферблатов AndroidAPSv2](../images/Watchface_Legend.png)

A - время с момента последнего запуска цикла

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
* выбрать значок AAPS в меню приложений для часов
* нажмите на осложнение для AAPS (если настроено для меню)

## Параметры (в часах Wear)

Чтобы получить доступ к настройкам циферблатов, войдите в главное меню AAPS, сдвиньте экран вверх и выберите "Настройки".

Заполненная звездочка соответствует включенному состоянию (**Вкл.**), а незаполненная указывает, что настройка отключена (**Выкл**):

![Параметры вкл./выкл](../images/Watchface_Settings_On_Off.png)

### Сопутствующие параметры AAPS

* ** Вибрировать при болюсе ** (по умолчанию ` Вкл`):
* ** Единицы для принятия действий ** (по умолчанию ` мг/дл `): если ** Вкл** то на основе ` мг/дл `, если ** Выкл ** то на основе ` ммоль/л `. Используется при установке временной цели ТТ с часов.

(Watchfaces-watchface-settings)=

### Параметры циферблатов

* ** Показать дату ** (значение по умолчанию `Выкл `): примечание: дата доступна не на всех циферблатах
* ** Показывать активный инсулин IOB ** (значение по умолчанию ` Вкл`): показывать или не показывать значение IOB (детализация задается в параметрах Wear в AAPS)
* ** Показать активные углеводы COB ** (по умолчанию ` Вкл `): Показывать или не показывать значение COB
* ** Показать дельту ** (по умолчанию ` Вкл `): Показывать или не показывать изменение ГК за последние 5 минут
* ** Показывать среднюю дельту ** (по умолчанию ` Вкл `): Показывать или не показывать среднее изменение ГК за последние 15 минут
* ** Показывать заряд батареи телефона ** (по умолчанию ` Вкл `): Батарея телефона в%. Красная, если ниже 30%.
* ** Показать батарею платформы ** (по умолчанию ` Выкл`): Батарея платформы - это интегральная величина заряда батареи телефона, помпы и трансмиттера (как правило, наименьшее из трех значений)
* ** Показать базальную скорость ** (по умолчанию ` Вкл `): показывать на экране или нет текущую скорость базала (в ед/ч или в%, если TBR)
* ** Показать состояние цикла ** (по умолчанию ` Вкл`): показывает время в мин после недавней работы цикла (стрелки вокруг значения покраснеют, если выше 15 ').
* **Показать ГК** (по умолчанию `Вкл`): показывать или не показывать последнее значение ГК
* **Показать стрелку тренда** (по умолчанию `Вкл`): показывать или не показывать стрелку тренда ГК
* ** Показать Истекшее время ** (по умолчанию ` Вкл `): показать, сколько минут прошло с момента последнего поступления данных.
* **Темный фон ** (по умолчанию `Вкл`): Можно переключиться с темного фона на светлый фон (за исключением циферблатов Cockpit и Steampunk)
* ** Выделять базал ** (по умолчанию ` Выкл `): Улучшить видимость скорости базала и временных базалов
* **Разделитель в цвет** (по умолчанию `Выкл`): для циферблатов AAPS, AAPSv2 и AAPS(Крупный), показывать контрастный фон разделителя (**Выкл.**) или разделитель совпадает с цветом фона (**Вкл.**)
* ** Охват времени графика ** (по умолчанию ` 3 часа `): в подменю можно выбрать максимальное время от 1 часа до 5 часов.

### Настройка интерфейса пользователя

* **Дизайн ввода**: этим параметром вы можете выбрать положение кнопок "+" и "-" при вводе команд для AAPS (TT, Insulin, Carbs...)

![Варианты дизайна ввода](../images/Watchface_InputDesign.png)

### Специфические параметры циферблатов

#### Циферблат Стимпанк

* **Зернистость** (по умолчанию `Средняя`)

![Манометры_Стимпанк](../images/Watchface_Steampunk_Gauge.png)

#### Круглый циферблат

* ** Крупные цифры ** (по умолчанию ` Выкл.`): Увеличить размер текста для улучшения видимости
* ** Кольца хронологии ** (значение по умолчанию ` Выкл.`): Графическое представление хронологии ГК серыми кольцами в зеленом кольце часа
* ** Кольца хронологии неярко ** (значение по умолчанию ` Вкл.`): Графическое представление хронологии ГК более темными серыми кольцами в зеленом кольце часа
* ** Анимация ** (по умолчанию ` Вкл. `): Во включенном состоянии, при поддержке циферблатом и не в режиме энергосбережения, анимация циферблата

### Настройки команд

* ** Помощник в меню ** (по умолчанию ` Вкл. `): Разрешить интерфейс помощника в главном меню для ввода углеводов и подачи болюса с циферблата часов
* ** Первичное заполнение ** (по умолчанию ` Выкл. `): Разрешить действие Prime/Fill с часов
* ** Единичная цель ** (по умолчанию ` Вкл `):
  
  * ` Вкл. `: задается одно значение для временной цели TT
  * ` Выкл. `: задается низкое и высокое значение временной цели TT

* **Процент мастера** (по умолчанию `Выкл.`): разрешить коррекцию болюса с мастера (значение вводится в процентах до уведомления подтверждения)

(Watchfaces-complications)=

## Усложнения (дополнительные функции)

* Усложнение *-это термин из традиционной часовой механики, который описывает дополнения основного циферблата в виде еще одного окошка ( с датой, днем недели, фазой луны и т. д.). Операционная система Wear OS 2.0 позволяет употребить эту метафору для описания дополнительных функций, выводимых на экран вроде погоды, уведомлений, счетчиков фитнеса а также добавлять их в любые циферблаты, поддерживающие усложнения.

AAPS Wear OS app supports complications since build `2.6`, and allow any third party watchface that supports complications to be configured to display AAPS related data (BG with the trend, IOB, COB, etc.).

Кроме того, усложнения служат ** ярлыками ** для функций AAPS. Нажав на них вы можете открывать меню и диалогоовые окна, связанные с AAPS (в зависимости от типа усложнения и конфигурации).

![Усложнения_на_Циферблатах](../images/Watchface_Complications_On_Watchfaces.png)

### Типы усложнений (дополнительных функций)

Приложение AAPS Wear обеспечивает только необработанные данные в соответствии с заданными форматами. Решение о том, где и как отображать усложнения, включая их макет, границу, цвет и шрифт, зависит от авторов стороннего циферблата. Из многих доступных типов усложнений Wear AAPS использует:

* ` КРАТКИЙ ТЕКСТ`-Содержит две строки текста, по 7 символов каждый, иногда именуется значением и меткой. Обычно отображаетя внутри круга или небольшой таблетки - один под другим, или сбоку друг от друга. Это очень ограниченное размерами усложнение. AAPS пытается удалить ненужные символы чтобы уместить информацию: округляет значения, удаляет начальные и хвостовые нули из значений и т. д.
* `ДЛИННЫЙ ТЕКСТ` - содержит две строки текста, около 20 знаков в каждой. Обычно выводится внутри прямоугольника или длинной таблетки-один ниже другого. Он используется для более детальной информации в виде текста.
* `ВРЕМЯ В ЦЕЛЕВОМ ДИАПАЗОНЕ`-используется для значений из предопределенного диапазона, например, в процентах. Он содержит иконку, ярлык и обычно отображается в виде круга с достигнутыми значениями.
* ` КРУПНОЕ ИЗОБРАЖЕНИЕ`-пользовательское фоновое изображение, которое можно использовать (при поддержке циферблатом) в качестве фона.

### Настройка усложнений (дополнительных функций)

Чтобы добавить дополнительные функции на циферблат, настройте его долгим нажатием на значок шестеренки внизу. В зависимости от конфигурации нажмите на соответствующее место на экране или войдите в меню настройки циферблата для настройки усложнений. Усложнения AAPS сгруппированы в меню AAPS.

При настройке усложнений на циферблате, Wear OS показывает и фильтрует список усложнений, которые могут быть помещены в выбранное место на экране. Если в списке не удается найти конкретные усложнения, то, вероятно, это связано с отсутствием достаточного места.

### Усложнения, предоставляемые AAPS

AAPS provides following complications:

![AAPS_Список_усложнений](../images/Watchface_Complications_List.png)

* ** BR, CoB & IoB ** (` КРАТКИЙ ТЕКСТ `, открывается через * Меню *): Отображает * Скорость базального инсулина* на первой строке, * Активные углеводы* и * Активный инсулин * на второй.
* ** Глюкоза крови ** (` КРАТКИЙ ТЕКСТ`, открывает * Меню *): Отображает * Кровь глюкозы * и * trend * стрелка на первой строке и * возраст измерений * и * дельта * на второй строке.
* **Акт Угл CoB & Акт инс IoB ** (` КРАТКИЙ ТЕКСТ `, открывается через * Меню *): Отображает * Активные углеводы COB * на первой строке и *Активный инсулин* на второй.
* **Акт Угл CoB Подробно ** (` КРАТКИЙ ТЕКСТ `, открывается через * Мастер *): Отображает актуальные * Активные углеводы COB * на первой строке и планируемые (e-Углеводы) на второй.
* ** Значок CoB ** (`КРАТКИЙ ТЕКСТ`, открывает * Wizard *): Отображает значение *Активные углеводы* со статичной иконкой.
* **Подробно** (` ПОЛНЫЙ ТЕКСТ `, открывает * Меню *): Содержит большую часть данных одновременно: * Глюкозу крови * и * тренд *, * дельту ГК* и * время от измерения * в первой строке. На второй строке * Активные углеводы *, *Активный инсулин * and * Базальную скорость *.
* ** Полный статус (перевернут) ** (`ДЛИННЫЙ ТЕКСТ `, открывается через * Меню *): те же данные, что и для стандартного * Полного состояние *, но текст перевернут. Может быть использован в циферблатах, которые игнорируют одну из двух строк `ДЛИННОГО ТЕКСТА`
* ** IOB Подробно ** (` КРАТКИЙ ТЕКСТ `, открывается через *Болюс*): Отображает суммарный * Активный инсулин IOB * на первой строке и разделение * IOB * на * Болюсный* и * Базальный* на второй.
* ** Значок IoB ** (`КРАТКИЙ ТЕКСТ`, открывается через * Болюс *): Отображает величину *Активных углеводов IOB* со статичной иконкой.
* ** Загрузчик/батарея телефона ** (`ДИАПАЗОН ВЕЛИЧИН `, открывает * Состояние *): Показывает процент батареи с телефона с AAPS (загрузчика). Выводится в виде процентной шкалы с значком батареи, отражающий сообщаемые значения. Он обновляется не в режиме реального времени, а наряду с изменением других важных данных AAPS (обычно: каждые ~ 5 минут с новым значением * гликемии *).

Кроме того, существуют три усложнения типа ` КРУПНОЕ ИЗОБРАЖЕНИЕ `: ** Темные обои **, ** Серые обои ** и ** Светлые обои**, являющиеся статическим фоном.

### Параметры, связанные с усложнениями

* **Действия при шлепке по значку усложнений** (по умолчанию ` Default `): определяет, какой диалог открывается при нажатии на усложнение: 
  * * По умолчанию*: действия, связанные с типом усложнения * (см. список выше) *
  * * Меню *: главное меню AAPS
  * *мастер*: болюс мастер - калькулятор болюса
  * * Болюс *: прямой ввод величины болюса
  * * eCarb *: диалоговое окно конфигурации eCarb
  * * Состояние *: подменю состояния
  * * Отсутствует *: Отключает действие по шлепку для усложнений AAPS
* **Unicode в усложнениях** (по умолчанию - `Вкл`): в положении `Вкл`, будут использоваться символы Unicode для таких величин как `Δ` суммарное изменение `⁞` вертикальный точечный разделитель или `⎍` символ базальной скорости. Отрисовка их зависит от шрифта, который специфичен для каждого циферблата. Эта опция позволяет при необходимости отключать символы Unicode (` Выкл `)- если шрифт, используемый циферблатом, их не поддерживает-чтобы избежать ошибок графики.

## Wear OS Tiles

Wear OS Tiles provide easy access to users' information and actions to get things done. The tiles are only available on Android smartwatches running on Wear Os version 2.0 and higher.

Tiles allow you to quickly access actions on the AAPS application without going through the watch face menu. The tiles are optional and can be added and configured by the user.

The tiles are used "next to" any watch face. To access a tile, when enabled, swipe right to left on your watch face to show them.

Please note; that the tiles do not hold the actual state of the AAPS phone app and will only make a request, which has to be confirmed on the watch before it is applied.

## How to add Tiles

Before using the tiles, you have to switch on "Control from Watch" in the "Wear OS" settings of Android APS.

![Wear phone preferences enabled](../images/wear_phone_preferences.jpg)

Depending on your Wear OS version, brand and smartphone there are two ways of enabling the tiles:

1. On your watch, from your watch face; - Swipe right to left till you reach the "+ Add tiles" - Select one of the tiles.
2. On your phone open the companion app for your watch. - For Samsung open "Galaxy Wearable", or for other brands "Wear OS" 
  * In the click on the section "Tiles", followed by "+ Add" button
  * Find the AAPS tile you like to add by selecting it. ![Wear phone add tile](../images/wear_companion_app_add_tile.png) The order of the tiles can be changed by dragging and dropping

The content of the tiles can be customized by long-pressing a tile and clicking the "Edit" or "gear icon" button.

### APS(Actions) Tile

The action tile can hold 1 to 4 user-defined action buttons. To configure, long-press the tile, which will show the configuration options. Similar actions are also available through the standard watch menu.

Actions supported in the Action tile can request the AAPS phone app for:

* **Calc**; do a bolus calculation, based on carb input and optional a percentage [1]
* **Insulin**; request insulin delivery by entering the unit of insulin
* **Treatment**; request both insulin delivery and add carbs
* **Carbs**; add (extended) carbs
* **TempT**; set a custom temporary target and duration

![Wear action tile, sample calculator](../images/wear_actions.png)

[1] Via, the Wear OS menu, set the "Calculator Percentage" option to "ON" to show the percentage input in the bolus calculator. The default percentage is based on the phone settings in the"Overview" section ["Deliver this part of the bolus wizard result %"](Config-Builder.html#advanced-settings) When the user does not provide a percentage, the default value from the phone is used. Configure the other parameters for the bolus calculator in the phone app via "Preferences" "Wizard Settings".

### AAPS(Temp Target) Tile

The Temp Target Tile can request a temporary target based on AAPS phone presets. Configure preset time and targets through the phone app setting by going to "Preferences", "Overview", ["Default Temp-Targets"](Config-Builder.html#default-temp-targets) and set the duration and targets for each preset. Configure the visible actions on the tile through the tile settings. Long press the tile to show the configuration options and select 1 to 4 options:

* **Activity**; for sport
* **Hypo**; to raise the target during hypo treatment
* **Eating soon**; to lower the target to raise the insulin on board
* **Manual**; set a custom temporary target and duration
* **Cancel**; to stop the current temporary target

![Wear actions tile edit](../images/wear_tile_tempt_edit.png)

### AAPS(QuickWizard)Tile

The QuickWizard tile can hold 1 to 4 quick wizard action buttons, defined with the phone app[2]. See [QuickWizard](Config-Builder.html#quickwizard-settings). You can set standard meals (carbs and calculation method for the bolus) to be displayed on the tile depending on the time of the day. Ideal for the most common meals/snacks you eat during the day. You can specify if the quick wizard buttons will show on the phone, watch, or both. Please note that the phone can show only one quick wizard button at a time. The quick wizard setup also can specify a custom percentage of the insulin for the bolus. The custom percentage enables you to vary, for example, snack at 120%, slow absorbing breakfast 80% and hypo treatment sugar snack at 0%

![Wear actions tile and phone configuration](../images/quickwizard_watch_phone.png)

[2] Wear OS limits tiles update frequency to only once every 30 seconds. When you notice that the changes on your phone are not reflected on the tile, consider; waiting 30 seconds, using the "Resend all data" button from the Wear OS section of AAPS, or removing the tile and adding it again. To change the order of the QuickWizard buttons dragging an item up or down.

## Always on

Long battery life for Android Wear OS smartwatches is a challenge. Some smartwatches get as much as 30 hours before recharging. The display should be switched off for optimal power saving when not in use. Most watches support the “Always on” display.

Since AAPS version 3, we can use a “Simplify UI” during always-on-mode. This UI only contains the blood glucose, direction, and time. This UI is power-optimized with less frequent updates, showing less information and lightening fewer pixels to save power on OLED displays.

The simplified UI mode is available for the watch-faces: AAPS, AAPS V2, Home Big, Digital Style, Steampunk, and Cockpit. The simplified UI is optional and is configured through the watch face settings. (log press the watch face and click “edit” or the gear icon) Select the configuration “Simplify UI" and set it to “Always on” or “Always on and charging”.

### Night-time mode

While charging, it would be helpful if the display could stay “always-on” and show your blood glucose during the night. However, the standard watch-faces are too bright and have too much information, and the details are hard to read with sleepy eyes. Therefore, we added an option for the watch-face to simplify the UI only during charging when set in the configuration.

The simplified UI mode is available for the watch-faces: AAPS, AAPS V2, Home Big, Digital Style, Steampunk, and Cockpit. The simplified UI is optional and is configured through the watch face settings. (log press the watch face and click “edit” or the gear icon) Select the configuration “Simplify UI" and set it to “During charging” or “Always on and charging”

The Android developer options enable your watch to stay awake during charging. To make the developer options available, see the [official documentation](https://developer.android.com/training/wearables/get-started/debugging). Set the “Stay awake when charging” to “on” in the developer options”.

Note: not all displays can handle always-on very well. It can cause screen burn-in, especially on the older OLED displays. The watches will generally dim the display to prevent burn-in; please check your owner’s manual, the manufacturing, or the internet for advice.

![Watchface Nightstand](../images/Watchface_nightstand.jpg)

![Simplified UI](../images/Watchface_simplified_ui.png)

## Snooze Alert shortcut

Можно создать ярлык, чтобы отложить оповещения от AAPS. Отключение звука через часы - удобный и быстрый способ без необходимости обращения к телефону. Обратите внимание; все еще нужно проверить оповещение на телефоне, чтобы выполнить соответствующие действия, но это можно сделать позже. Если в часвх есть две кнопки, одну из них можно привязать к утилите `Убрать оповещения AAPS`.

Чтобы привязать кнопку на Samsung Watch 4 перейдите в `Настройки > Дополнительные возможности > Настройка кнопок > Двойное нажатие > Отложить оповещения AAPS`

### Snooze xDrip

When you use xDrip and have xDrip installed on the watch, the 'AAPS Snooze Alert' shortcut will also Snooze any xDrip alarm.

## Советы по производительности и автономности батареи

Часы на операционной системе Wear OS очень ограничены в расходе батареи. Размер их корпуса ограничивает емкость встроенной батареи. Даже с последними достижениями в аппаратном и программном обеспечении часов Wear OS по-прежнему требуется ежедневная подзарядка.

Если аккумулятор работает меньше светового дня (от рассвета до заката), то рассмотрите несколько советов по увеличению работоспособности устройства.

Основными зонами, расходующими заряд батари, являются:

* Активный дисплей с подсветкой на (для светодиодов) или в режиме полной интенсивности (для OLED)
* Визуализации на экране
* Радио связь по Bluetooth

Поскольку мы не можем жертвовать связью (нам нужны свежие данные) большинство оптимизаций можно выполнить только за счет * дисплея *:

* Штатные циферблаты, как правило, лучше оптимизированы, чем пользовательские, загруженные из google play.
* Лучше использовать циферблаты, которые ограничивают объем выводимой информации в неактивном/затемненном режиме.
* Всегда будьте начеку при параллельном использовании других уложнений, таких как сторонние виджеты погоды, или других - при использовании данных из внешних источников.
* Начинайте с более простых циферблатов. Добавляйте по одному усложнению и наблюдайте, как они влияют на работу батареи.
* Для AAPS попробуйте использовать ** Темную ** тему и [** Сопутствующий разделитель**](Watchfaces-watchface-settings). На устройствах OLED это ограничит количество подсвечиваемых пикселей и ограничит расход энергии.
* Проверьте, что лучше для ваших часов: штатные циферблаты AAPS или другие циферблаты с усложнениями AAPS.
* Понаблюдайте несколько дней, на различных профилях активности. Большинство часов активируют дисплей при просмотре, движении или других активаторах, связанных с использованием.
* Проверьте общие параметры системы, влияющие на производительность: уведомления, тайм-аут подсветки экрана/активного вывода, активизации GPS.
* Проверьте [ список проверенных телефонов и часов ](Phones-list-of-tested-phones) и [ спросите пользователей ](../Where-To-Go-For-Help/Connect-with-other-users.md) об опыте использования батареи.
* ** Мы не можем гарантировать, что данные, отображаемые на циферблате или усложнении, будут актуальны **. В конечном итоге, решать, когда обновлять циферблат или усложнение, зависит от Wear OS. Даже если приложение AAPS запрашивает обновление, система может решить отложить или игнорировать обновления для экономии батареи. При сомнениях и низком заряде батареи на часах - всегда сверяйтесь с основным приложением AAPS на телефоне.

(Watchfaces-troubleshooting-the-wear-app)=

## Устранение неполадок в приложении Wear:

* Иногда помогает повторная синхронизация приложений с часами, поскольку этот процесс иногда затягивается: Android Wear > значок шестеренки > наименование часов > повторная синхронизация часов.
* Включите отладку ADB в настройках разработчика (инженерное меню на часах), подключите часы через USB к компьютеру и запустите приложение Wear в Android Studio.
* Если в усложнении не происходит обновление данных, то сначала проверьте, работает ли циферблат AAPS вообще.

# Garmin

Therer are a couple of watch faces for Garmin that integrate with xDrip or Nightscout on the [Garmin ConnectIQ store](https://apps.garmin.com/en-US/search?keyword=glucose&device=&deviceLimit=&appType=&sort=&start=0&count=30). AAPS Glucose Watch integrates directly with AAPS. It shows loop status data (insulin on board, temporary basal) in addition to glucose readings and sends heart rate readings to AAPS. It's not available in the ConnectIQ store yet, since the necessary AAPS plugin is only available from AAPS 3.2. Please contact robert.b on [discord](https://discord.com/invite/4fQUWHZ4Mw) if you want to try it.

![Снимок экрана](../images/Garmin_WF.png) ![Снимок экрана](../images/Garmin_WF-annotated.png)