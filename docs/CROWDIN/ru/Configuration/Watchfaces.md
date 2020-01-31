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

![Input design options](../images/Watchface_InputDesign.png)

### Специфические параметры циферблатов

#### Циферблат Стимпанк

* **Зернистость** (по умолчанию `Средняя`)

![Steampunk_gauge](../images/Watchface_Steampunk_Gauge.png)

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

## Усложнения (дополнительные функции)

* Усложнение *-это термин из традиционной часовой механики, который описывает дополнения основного циферблата в виде еще одного окошка ( с датой, днем недели, фазой луны и т. д.). Операционная система Wear OS 2.0 позволяет употребить эту метафору для описания дополнительных функций, выводимых на экран вроде погоды, уведомлений, счетчиков фитнеса а также добавлять их в любые циферблаты, поддерживающие усложнения.

Приложение AndroidAPS Wear поддерживает усложнения начиная с версии ` 2.6 ` и позволяет использовать любые сторонние циферблаты, поддерживающие усложнения, для отображение данных AAPS (ГК с трендом, IOB, COB и т. д.).

Кроме того, усложнения служат ** ярлыками ** для функций AAPS. Нажав на них вы можете открывать меню и диалогоовые окна, связанные с AAPS (в зависимости от типа усложнения и конфигурации).

![Complications_On_Watchfaces](../images/Watchface_Complications_On_Watchfaces.png)

### Типы усложнений (дополнительных функций)

Приложение AAPS Wear обеспечивает только необработанные данные в соответствии с заданными форматами. Решение о том, где и как отображать усложнения, включая их макет, границу, цвет и шрифт, зависит от авторов стороннего циферблата. Из многих доступных типов усложнений Wear AAPS использует:

* ` SHORT TEXT `-Содержит две строки текста, по 7 символов каждый, иногда именуется значением и меткой. Обычно отображаетя внутри круга или небольшой таблетки - один под другим, или сбоку друг от друга. Это очень ограниченное размерами усложнение. AAPS пытается удалить ненужные символы чтобы уместить информацию: округляет значения, удаляет начальные и хвостовые нули из значений и т. д.
* `ДЛИННЫЙ ТЕКСТ` - содержит две строки текста, около 20 знаков в каждой. Обычно выводится внутри прямоугольника или длинной таблетки-один ниже другого. Он используется для более детальной информации в виде текста.
* `ВРЕМЯ В ЦЕЛЕВОМ ДИАПАЗОНЕ`-используется для значений из предопределенного диапазона, например, в процентах. Он содержит иконку, ярлык и обычно отображается в виде круга с достигнутыми значениями.
* ` КРУПНОЕ ИЗОБРАЖЕНИЕ`-пользовательское фоновое изображение, которое можно использовать (при поддержке циферблатом) в качестве фона.

### Настройка усложнений (дополнительных функций)

Чтобы добавить дополнительные функции на циферблат, настройте его долгим нажатием на значок шестеренки внизу. В зависимости от конфигурации нажмите на соответствующее место на экране или войдите в меню настройки циферблата для настройки усложнений. Усложнения AAPS сгруппированы в меню AAPS.

При настройке усложнений на циферблате, Wear OS показывает и фильтрует список усложнений, которые могут быть помещены в выбранное место на экране. Если в списке не удается найти конкретные усложнения, то, вероятно, это связано с отсутствием достаточного места.

### Усложнения, предоставляемые AAPS

AndroidAPS обеспечивает следующие усложнения:

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