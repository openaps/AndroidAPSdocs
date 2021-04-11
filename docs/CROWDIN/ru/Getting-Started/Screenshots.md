# Экраны AndroidAPS

## Главный экран

![Главный экран V2.7](../images/Home2020_Homescreen.png)

Это первый экран, который вы увидите, когда откроете AndroidAPS, и он содержит большую часть повседной информации.

### Раздел А - Вкладки

* Переход между различными модулями AndroidAPS.
* Также можно переходить между экранами свайпом влево или вправо.
* Отображаемые вкладки можно выбрать в [Конфигураторе](../Configuration/Config-Builder#tab-or-hamburger-menu).

### Раздел B - Профиль & Цель

#### Текущий профиль

![Оставшееся время замененного профиля](../images/Home2020_ProfileSwitch.png)

* Текущий профиль отображается на левой панели.
* Короткое нажатие открывает подробности о текущем профиле
* Долгое нажатие позволяет [переключаться между разными профилями](../Usage/Profiles#profile-switch).
* Если профиль был изменен на время - в скобках отображается оставшееся время его активности в минутах.

#### Целевое значение ГК

![Оставшаяся продолжительность временной цели](../images/Home2020_TT.png)

* Текущее целевое значение глюкозы крови (ГК) отображается на правой панели.
* Короткое нажатие позволяет установить [временную цель](../Usage/temptarget.md).
* Если установлена временная цель - панель будет желтой, а в скобках отображается оставшееся время ее активности в минутах.

#### Визуализация динамического изменения цели

![Визуализация динамического изменения цели](../images/Home2020_DynamicTargetAdjustment.png)

* AAPS может динамически изменять установленную цель основываясь на чувствительности если используется алгоритм СМБ (SMB).
* Активируйте один или оба [варианта](../Configuration/Preferences#openaps-smb-settings): 
   * "чувствительность повышает цель" и/или 
   * "сопротивляемость понижает цель" 
* Если AAPS обнаружит повышенную сопротивляемость или чувствительность - цель будет изменена. 
* При таком изменении панель будет зеленой.

### Раздел C - ГК & статус петли

#### Текущий уровень глюкозы крови

* Последнее значение ГК, переданное вашим НМГ, отображается в левой части экрана.
* Цвет показаний ГК соответствует настроенному [даипазону](../Configuration/Preferences#range-for-visualization): 
   * зеленый = в заданном диапазоне
   * красный = ниже заданного диапазона
   * желтый = выше заданного диапазона
* Сероватый блок в центре экрана отображает изменение текущего уровня ГК относительно предыдущего чтения, и изменение за последние 15 и 40 минут.

#### Статус цикла

![Статус цикла](../images/Home2020_LoopStatus.png)

* Новые иконки отображают статус цикла:
   
   * зеленый круг = активна замкнутая петля
   * зеленый круг с пунктирной линией =[приостановка помпы на низкой ГК (LGS)](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend)
   * красный круг = цикл деактивирован (постоянно отключен)
   * желтый круг = цикл приостановлен (временно приостановлен, но базальный инсулин будет подаваться) - оставшееся время паузы отображается под иконкой
   * серый круг = помпа отключена (временно отключена любая подача инсулина) - оставшееся время остановки отображается под иконкой
   * оранжевый круг = запущен суперболюс - оставшееся время отображаешься под иконкой
   * синий круг с пунктирной линией = активна открытая петля

* Короткое или длинное нажатие на иконку откроет диалоговое окно для переключения между режимами петли (Закрытая, Предотвращение низкой ГК, Открытая или Отключена), для отключения / возобновления цикла или отключения / подключения помпы обратно.
   
   * Если диалоговое окно было вызвано которким нажатием - после смены режима появится запрос на подтверждение. Если долгим нажатием - смена режима применится сразу.
   
   ![Меню состояния цикла](../images/Home2020_Loop_Dialog.png)

### Раздел D - IOB, COD, BR и AS

![Секция D](../images/Home2020_TBR.png)

* Иконка шприца: инсулин "на борту" (IOB) - количество активного инсулина в теле
   
   * Значение активного инсулина IOB будет равно нулю, если активна только база текущего профиля и нет остаточного инсулина от предыдущих болюсов. 
   * IOB может быть отрицательным если был период с пониженным относительно текущего профиля базалом.
   * Нажмите на иконку (только короткое нажатие), чтобы увидеть как IOB распределяется между базой и болюсом.

* Иконка колоска: [углеводы "на борту"](../Usage/COB-calculation.rst) - количество еще не усвоенных углеводов из тех, чтоб были введены ранее. Иконка мерцает, если необходимо съесть дополнительные углеводы.

* Иконка с фиолетовой линией: базальная скорость - иконка изменяется в соответствии с текущими настройками ВБС (прямая линия при базе 100%) 
   * Нажмите на иконку (только короткое нажате), чтобы увидеть подробности текущего ВБС (текущий базал, значение ВБС, время начала, остаток/общая продолжительность в минутах)
* Иконка со стрелочками вверх и вниз: отображает текущий статус Автосенса (AS, Autosens) (включен или отключен) и его значение

#### Требуются углеводы

![Требуются углеводы](../images/Home2020_CarbsRequired.png)

* Требование углеводов появляется, когда расчеты определяют их недостаток.
* Это происходит, когда алгоритм Oref думает: "Я не спасу тебя отключением всего инсулина и тебе необходимы углеводы, чтобы не загиповать". 
* Уведомления об углеводах значительно сложнее, чем калькулятор болюса. Вы можете увидеть требование углеводов даже когда калькулятор болюса не показывает нехватку углеводов.
* При желании уведомления об углеводах могут быть переданы в Nightscout. В этом случае сработают стандартные настройки оповещения NS. 

### Раздел E- Индикаторы состояния

![Секция E](../images/Home2020_StatusLights.png)

* Индикаторы состояния сообщают о 
   * Времени работы катетера помпы
   * Времени работы инсулина в резервуаре помпы
   * Уровень заполнения резервуара (единицы)
   * Времени работы сенсора мониторинга ГК
   * Время работы и уровень батареи (%)
* Если превышено пороговое предупреждение, значения будут показаны желтым.
* Если превышено критическое пороговое значение, значения будут показаны красным цветом.
* Настройки могут быть сделаны в [параметрах](../Configuration/Preferences#status-lights).

### Раздел F - Основной график

![Секция F](../images/Home2020_MainGraph.png)

* График показывает уровень глюкозы в крови (ГК) считываемый с вашего мониторинга глюкозы (CGM). 
* Здесь показаны заметки, введенные на вкладке действия, такие как калибровка с глюкометра и записи углеводов, а также переключения профиля. 
* Длительное нажатие на графике изменит масштаб времени. Можно выбрать 6, 8, 12, 18 или 24 часа.
* Зеленая область отражает ваш целевой диапазон. Его можно настроить в [настройках](../Configuration/Preferences#range-for-visualization).
* Голубые треугольники показывают [микроболюсы SMB](../Usage/Open-APS-features#super-micro-bolus-smb) - если они активированы в [настройках](../Configuration/Preferences#openaps-smb-settings).
* Дополнительная информация:
   
   * Прогнозирование
   * Базал
   * Активность-кривая действия инсулина

#### Активация необязательной информации

* Щелкните по треугольнику в правой части основного графика, чтобы выбрать, какая информация будет показана на главной диаграмме.
* Для главного графика доступны три варианта выше строки "\---\---- График 1 \---\----".
   
   ![Настройка главного графика](../images/Home2020_MainGraphSetting.png)

#### Линии прогнозирования

* ** Оранжевая ** линия: [активные углеводы COB ](../Usage/COB-calculation.rst) (цвет используется обычно для представления активных углеводов COB и углеводов)
   
   Линия предсказания показывает, где будет ГК (а не сами активные углеводы COB) на основе текущих настроек помпы с учетом того, что отклонения вследствие усвоения углеводов останутся постоянными. Эта линия появляется только при известном наличии активных углеводов COB.

* **Темно-синяя ** линия: активный инсулин IOB (цвет обычно используется для отображения активного инсулина IOB и инсулина)
   
   Линия предсказания показывает, что будет происходить только под воздействием инсулина. Например, если вы ввели инсулин, а потом не ели никаких углеводы.

* ** Голубая ** линия: нулевой временный базал (предсказанная ГК, если будет установлена временная базальная скорость в 0%)
   
   В строке прогноза показано, как изменится линия траектории активного инсулина IOB, если помпа прекратит подачу инсулина (0% TBR).

* ** Темно-желтая ** линия: [ непредвиденный прием пищи UAM ](../Configuration/Sensitivity-detection-and-COB#sensitivity-oref1)
   
   Незапланированный прием пищи - обнаружение значительного повышения уровня глюкозы, как следствие приема пищи, выброса адреналина или других факторов. Линия предсказания аналогична оранжевой линии активных углеводов COB, но предполагает, что отклонения будут понижаться с постоянной скоростью (за счет продления текущей скорости сокращения).

Обычно реальная кривая глюкозы заканчивается в середине этих линий, или близка к той, которая ближе всего описывает вашу ситуацию.

#### Базал

* **Сплошная синяя** линия показывает базальную скорость помпы и отражает фактическую подачу инсулина с течением времени.
* **пунктирная синяя** линия - это средняя скорость базы, если не было временных настроек базальной скорости (TBR).
* При стандартной базальной скорости область под кривой показывается в темно-синем цвете.
* Когда базовая скорость временно корректируется (увеличивается или уменьшается), область под кривой отображается в светло-синем цвете.

#### Нагрузка

* **тонкая желтая** линия отображает активность инсулина. 
* Она основана на ожидаемом падении ГК из-за действия инсулина в системе, если не присутствуют другие факторы (например, углеводы).

### Раздел G - дополнительные графики

* Можно активировать до четырех дополнительных графиков ниже главного графика.
* Чтобы открыть настройки для дополнительных графиков, щелкните по треугольнику справа от [главного](../Getting-Started/Screenshots#section-f-main-graph) и прокрутите вниз.

![Дополнительные параметры графика](../images/Home2020_AdditionalGraphSetting.png)

* Для добавления дополнительного графика установите флажок с левой стороны его названия (например, \---\---- Граф 1 \---\----).

#### Абсолютный инсулин

* Активный инсулин, включая болюсный **и базальный**.

#### Активный инсулин (IOB)

* Показывает инсулин, который вы имеете на борту (= активный инсулин в вашем теле). Он включает инсулин болюсов и временного базала (**, но исключает базальную скорость, установленную в вашем профиле**).
* Если бы не было [микроболюсов SMB](../Usage/Open-APS-features#super-micro-bolus-smb), болюсов, и временных базалов, TBR во время действия инсулина DIA, он равнялся бы нулю.
* Активный инсулин IOB может быть отрицательным, если у не осталось ни болюсов, ни нулевого/низкого временного базала в течение более длительного времени чем DIA.
* Спад действия инсулина зависит от [DIA и настроек профиля инсулина](../Configuration/Config-Builder#local-profile-recommended). 

#### Активные углеводы COB

* Показывает активные углеводы в организме (= еще не усвоенные углеводы в вашем теле). 
* Спад зависит от отклонений, замеченных алгоритмом. 
* Если он обнаружит более высокое поглощение углеводов, чем ожидалось, будет подан инсулин, и это увеличит количество активного инсулина IOB (более или менее, в зависимости от ваших настроек безопасности). 

#### Отклонение

* ** СЕРЫЕ ** столбцы показывают отклонение, вызванное углеводами. 
* ** ЗЕЛЕНЫЕ ** столбцы показывают, что ГК превышает уровень, ожидаемый алгоритмом. Зеленые столбцы используются для увеличения сопротивления в [Autosens](../Usage/Open-APS-features#autosens).
* ** КРАСНЫЕ ** столбцы показывают, что ГК ниже величины, ожидаемой алгоритмом. Красные столбцы используются для увеличения сопротивления в [Autosens](../Usage/Open-APS-features#autosens).
* ** ЖЕЛТЫЕ ** столбцы показывают отклонение, вызванное непредвиденным приемом пищи UAM.
* **ЧЕРНЫЕ** столбцы показывают небольшие отклонения, не принятые во внимание при расчете чувствительности

#### Чувствительность

* Показывает чувствительность, обнаруженную алгоритмом [Autosens](../Usage/Open-APS-features#autosens). 
* Чувствительность - это расчет чувствительности к инсулину в результате нагрузки, гормонов и т.д.

#### Нагрузка

* Показывает активность инсулина, рассчитанную на основе профиля инсулина (не производная от активного инсулина). 
* Значение выше ближе к пику времени действия инсулина.
* Это значит, что при снижении IOB величина будет отрицательной. 

#### Линия отклонения

* Внутреннее значение, используемое в алгоритме.

### Раздел H-Кнопки

![Кнопки главного экрана](../images/Home2020_Buttons.png)

* Кнопки инсулина, углеводов и калькулятора-'всегда активны'. 
* Другие кнопки должны быть настроены в [настройках ](../Configuration/Preferences#buttons).

#### Инсулин

![Кнопка инсулина](../images/Home2020_ButtonInsulin.png)

* Дать определенное количество инсулина без использования [калькулятора болюса ](#bolus-wizard).
* Отметив флажок, можно автоматически активировать временную цель[ожидаемый прием пищи](../Configuration/Preferences#default-temp-targets).
* Если вы не хотите подавать болюс с помпы, а только отметить количество инсулина (например, поданного шприц-ручкой) активируйте соответствующий флажок.

#### Углеводы

![Кнопка углеводов](../images/Home2020_ButtonCarbs.png)

* Записать углеводы без подачи болюса.
* [Заранее настроенные временные цели ](../Configuration/Preferences#default-temp-targets) можно активировать отметив соответствующий флажок.
* Смещение времени: Когда вы будете употреблять/употребили в пищу углеводы (в минутах).
* Продолжительность: Для ["пролонгированных углеводов"](../Usage/Extended-Carbs.rst)
* Можно использовать кнопки для быстрого увеличения количества углеводов.
* Примечания будут загружены в Nightscout-в зависимости от настроек [клиента NS](../Configuration/Preferences#nsclient).

#### Калькулятор

* Смотрите раздел мастер болюса Bolus Wizard [ниже](#bolus-wizard)

#### Калибровки

* Отправляет калибровку в xDrip + или открывает диалог калибровки Dexcom.
* Необходимо активировать в настройках [](../Configuration/Preferences#buttons).

#### CGM/НМГ

* Открывает xDrip +.
* Кнопка Назад возвращает в AAPS.
* Необходимо активировать в настройках [](../Configuration/Preferences#buttons).

#### Мастер быстрых настроек

* Легко вводите количество углеводов и задайте основы расчетов.
* Настройки могут быть сделаны в [параметрах](../Configuration/Preferences#quick-wizard).

## Мастер Болюса

![Мастер Болюса](../images/Home2020_BolusWizard_v2.png)

Когда необходимо дать болюс на еду, он обычно подается отсюда.

### Раздел I

* Поле ГК обычно уже заполнено данными с мониторинга. Если мониторинг не работает, то поле будет пустым. 
* В поле УГЛЕВОДЫ вы добавляете рассчитанное вами количества углеводов - или эквивалента - на которые хотите дать болюс. 
* Поле CORR-для корректировки - если вы по какой-либо причине хотите изменить конечную дозу.
* Поле CARB TIME предназначено для предварительной подачи болюса, так что вы можете сообщить системе о задержке в приеме углеводов. Вы можете добавить отрицательное число в это поле, если даете болюс на прошлые углеводы.

#### Напоминание о приеме пищи

* For carbs in the future the alarm checkbox can be selected (and is by default when a time in the future is entered) so that you can be reminded at a time in the future of when to eat the carbs you have input into AndroidAPS
   
   ![Мастер болюса с напоминанием о питании](../images/Home2021_BolusWizard_EatingReminder.png)

### Раздел J

* SUPER BOLUS - это когда базальный инсулин следующих двух часов добавляется к подаваемому болюсу, а на следующие два часа подается нулевой временный базал TBR, чтобы поглотить лишний инсулин. The option only shows when "Enable [superbolus](../Configuration/Preferences#superbolus) in wizard" is set in the [preferences overview](../Configuration/Preferences#overview).
* Идея заключается в том, чтобы доставить инсулин по возможности раньше и, желательно, сократить пики.
* For details visit [diabetesnet.com](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/).

### Раздел K

* Показывает рассчитываемый болюс. 
* Если количество активного инсулина превышает рассчитанный болюс, то оно просто покажет количество углеводов, которые еще требуются.
* Примечания будут загружены в Nightscout-в зависимости от настроек [клиента NS](../Configuration/Preferences#nsclient).

### Раздел L

* Details of wizard's bolus calculation.
* You can deselect any that you do not want to include but you normally wouldn't want to.
* For safety reasons the **TT box must be ticked manually** if you want the bolus wizard to calculate based on an existing temporary target.

#### Комбинации активных углеводов COB и активного инсулина IOB и что они означают

* For safety reasons IOB boxed cannot be unticked when COB box is ticked as you might run the risk of too much insulin as AAPS is not accounting for what’s already given.
* If you tick COB and IOB unabsorbed carbs that are not already covered with insulin + all insulin that has been delivered as TBR or SMB will be taken into account.
* If you tick IOB without COB, AAPS takes account of already delivered insulin but won’t cover that off against any carbs still to be absorbed. This leads to a 'missing carbs' notice.
* If you bolus for **additional food** shortly after a meal bolus (i.e. additional desert) it can be helpful to **untick all boxes**. This way just the new carbs are being added as the main meal won't necessarily be absorbed so IOB won't match COB accurately shortly after a meal bolus.

#### Неверное обнаружение активных углеводов COB

![Медленное усваивание углеводов](../images/Calculator_SlowCarbAbsorbtion.png)

* If you see the warning above after using bolus wizard, AndroidAPS has detected that the calculated COB value maybe wrong. 
* So, if you want to bolus again after a previous meal with COB you should be aware of overdosing! 
* For details see the hints on [COB calculation page](../Usage/COB-calculation#detection-of-wrong-cob-values).

## Вкладка "Действия"

![Вкладка "Действия"](../images/Home2021_Action.png)

### Действия-раздел M

* Button [profile switch](../Usage/Profiles#profile-switch) as an alternative to pressing the [current profile](../Getting-Started/Screenshots#section-b-profile-target) on homescreen.
* Button [temporary target](../Usage/temptarget#temp-targets) as an alternative to pressing the [current target](../Getting-Started/Screenshots#section-b-profile-target) on homescreen.
* Button to start or cancel a temporary basal rate. Please note that the button changes from “TEMPBASAL” to “CANCEL x%” when a temporary basal rate is set.
* Even though [extended boluses](../Usage/Extended-Carbs#extended boluses) do not really work in a closed loop environment some people were asking for an option to use extended bolus anyway.
   
   * This option is only available for Dana RS and Insight pumps. 
   * Closed loop will automatically be stopped and switched to open loop mode for the time running extended bolus.
   * Make sure to read the [details](../Usage/Extended-Carbs#extended boluses) before using this option.

### Портал терапии-раздел N

* Displays information on
   
   * sensor age & level (battery percentage)
   * insulin age & level (units)
   * canula age
   * pump battery age & level (percentage

* Less information will be shown if [low resolution skin](../Configuration/Preferences#skin) is used.

#### Sensor level (battery)

* Needs xDrip+ nightly build Dec. 10, 2020 or newer.
* Works for CGM with additional transmitter such as MiaoMiao 2. (Technically sensor has to send cat level information to xDrip+.)
* Thresholds can be set in [preferences](../Configuration/Preferences#status-lights).
* If sensor level is the same as phone battery level you xDrip+ version is probably too old and needs an update.
   
   ![Уровни датчиков равны уровню батареи телефона](../images/Home2021_ActionSensorBat.png)

### Careportal - section O

* BG check, prime/fill, sensor insert and pump battery change are the base for the data displayed in [section N](#careportal-section-n).
* Prime/Fill allows you to record pump site and insulin cartridge change.
* Section O reflects the Nightscout careportal. So exercise, announcement and question are special forms of notes.

### Tools - section P

#### History Browser

* Allows you to ride back in AAPS hsitory.

#### TDD/общая суточная доза

* Total daily dose = bolus + basal per day
* Some doctors use - especially for new pumpers - a basal-bolus-ratio of 50:50. 
* Therefore ratio is calculated as TDD / 2 * TBB (Total base basal = sum of basal rate within 24 hours). 
* Others prefer range of 32% to 37% of TDD for TBB. 
* Like most of these rules-of-thumb it is of limited real validity. Note: Your diabetes may vary!

![Браузер журнала + TDD](../images/Home2021_Action_HB_TDD.png)

## Профиль Инсулина

![Профиль Инсулина](../images/Screenshot_insulin_profile.png)

* This shows the activity profile of the insulin you have chosen in [config builder](../Configuration/Config-Builder#insulin). 
* The PURPLE line shows how much insulin remains after it has been injected as it decays with time and the BLUE line shows how active it is.
* The important thing to note is that the decay has a long tail. 
* If you have been used to manual pumping you have probably been used to assuming that insulin decays over about 3.5 hours. 
* However, when you are looping the long tail matters as the calculations are far more precise and these small amounts add up when they are subjected to the recursive calculations in the AndroidAPS algorithm.

For a more detailed discussion of the different types of insulin, their activity profiles and why all this matters you can read an article here on [Understanding the New IOB Curves Based on Exponential Activity Curves](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

And you can read an excellent blog article about it here: [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

And even more at: [Exponential Insulin Curves + Fiasp](https://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Статус помпы

![Статус помпы](../images/Screenshot_PumpStatus.png)

* Different information on pump status. Displayed information depends on your pump model.
* See [pumps page](../Hardware/pumps.rst) for details.

## Портал терапии

Careportal replicated the functions you will find on your Nightscout screen under the “+” symbol which allows you to add notes to your records.

### Review carb calculation

![Обзор расчёта углеводов на вкладке терапии](../images/Screenshots_TreatCalc.png)

* If you have used the [Bolus Wizard](../Getting-Started/Screenshots#bolus-wizard) to calculate insulin dosage you can review this calculation later on treatments tab.
* Just press the green Calc link. (Depending on pump used insulin and carbs can also be shown in one single line in treatments.)

### Carb correction

![Терапия в 1 или 2 линии](../images/Treatment_1or2_lines.png)

На вкладке Лечение можно исправить ошибочные записи углеводов (если вы переоцениваете или недооценили углеводы).

1. Проверьте и запомните фактические активные углеводы COB и активный инсулин IOB на главном экране.
2. В зависимости от помпы углеводы на вкладке терапии могут быть показаны одной линией с инсулином или в виде отдельной записи (например, для Dana RS).
3. Удалите запись с неверным количеством углеводов.
4. Убедитесь, что углеводы удалены успешно, повторно проверив активные углеводы COB на главном экране.
5. Сделайте то же для активного инсулина IOB, если на вкладке терапии только одна линия для углеводов и инсулина.
   
   -> Если углеводы не удаляются должным образом, а вы добавили дополнительные углеводы, как описано здесь (6.), активных углеводов COB окажется слишком много, и это может привести к передозировке инсулина.

6. Введите правильное количество углеводов при помощи кнопки углеводов на главном экране и убедитесь, что точное время события также введено.

7. Если на вкладке терапии только одна линия для углеводов и инсулина, следует также добавить и запись о количестве инсулина. Убедитесь в том, чтобы установить правильное время событие и проверить активный инсулин IOB на главном экране после подтверждения новой записи.

## Loop, AMA / SMB

* These tabs show details about the algorithm's calculations and why AAPS acts the way it does.
* Calculations are each time the system gets a fresh reading from the CGM.
* For more details see [APS section on config builder page](../Configuration/Config-Builder#aps).

## Профиль

![Профиль](../images/Screenshots_Profile.png)

* Profile contains information on your individual diabetes settings:
   
   * DIA (Duration of Insulin Action)
   * IC or I:C: Insulin to Carb ratio
   * ISF: Insulin Sensitivity Factor
   * Basal rate
   * Target: Blood glucose level that you want AAPS to be aiming for

* You can either use a [local profile](../Configuration/Config-Builder#local-profile-recommended) that can be edited on your smartphone or a [Nightscout profile](../Configuration/Config-Builder#ns-profile) which must be edited on your NS page and transferred to your phone afterwards. For details see the corresponding sections on the [config builder page](../Configuration/Config-Builder.md).

## Терапия

History of the following treatments:

* Bolus & carbs -> option to [remove entries](../Getting-Started/Screenshots#carb-correction) to correct history
* [Пролонгированный болюс](../Usage/Extended-Carbs#extended-bolus)
* Temporary basal rate
* [Temporary target](../Usage/temptarget.md)
* [Profile switch/смена профиля](../Usage/Profiles.md)
* [Портал терапии](../Usage/CPbefore26#careportal-discontinued) -примечания, введенные через вкладку действий и примечания в диалогах

## Источник ГК -xDrip, приложение Dexcom (модифицированное)...

![Вкладка Источник BG-здесь xDrip](../images/Screenshots_BGSource.png)

* В зависимости от параметров источника ГК эта вкладка называется по-разному.
* Показывает хронологию показаний CGM и предлагает возможность удаления показаний при сбое (например, при компрессии сенсора).

## клиент NS

![клиент NS](../images/Screenshots_NSClient.png)

* Показывает состояние соединения с сайтом Nightscout.
* Настройки могут быть сделаны в [параметрах](../Configuration/Preferences#nsclient). Вы можете открыть соответствующий раздел, щелкнув по значку шестеренки в верхней правой части экрана.
* Для устранения неполадок смотрите эту [страницу](../Usage/Troubleshooting-NSClient.md).