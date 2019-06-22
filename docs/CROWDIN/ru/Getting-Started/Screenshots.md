# Снимки экрана

## Главный экран

![Главный экран V2.1](../images/Screenshot_Home_screen_V2_1.png)

Это первый экран, который вы увидите, когда откроете AndroidAPS, и он содержит большую часть повседной информации.

**Секция A:** позволяет перейти между различными модулями AndroidAPS, свайп влево или вправо.

**Секция B:** Позволяет изменить статус цикла (открытый цикл, замкнутый цикл, цикл приостановлен и т. д.), увидеть текущий профиль, увидеть текущий уровень глюкозы крови и установить временную цель. Долгое нажатие на любую из кнопок позволит изменить настройки. Например, удерживая темно-синюю целевую панель в верхнем правом углу ("5.5" на снимке экрана), можно задать временные цели.

**Секция C:** Последние данные ГК вашего мониторинга, как давно они были получены, изменения за последние 15 и 40 минут, ваша текущая скорость базала - включая любую временную (TBR), заданную системой, ваш активный инсулин и активные углеводы.

Дополнительные [индикаторы состояния](../Configuration/Preferences.md) (КАН| ИНС | РЕЗ | СЕН | БАТ) дают визуальное предупреждения о низком уровне резервуара, заряда батареи а также пропущенное время замены катетера.

Значение активного инсулина Iob будет нулевым при подаче только стандартного базального и когда нет остатков от предыдущих болюсов. Цифры в скобках показывают, сколько инсулина остается от предыдущих болюсов, и сколько - от временных базалов TBR, запрограммированных ААPS. Второй компонент может быть отрицательным, если перед этим были периоды подачи уменьшенной базы.

**Секция D:** Нажмите на стрелку справа экрана в секции D, чтобы выбрать, какую информацию отображать на диаграммах ниже.

**Секция E:** Это график, показывающий глюкозу крови (ГК), считанный мониторингом (CGM) он также показывает уведомления сайта Nightscout, такие как калибровки глюкометром и введенные углеводы. Длительное нажатие на графике изменит шкалу времени. Можно выбрать 6, 8, 12, 18 или 24 часа.

Продолженные линии показывают тенденции ГК - если вы это выбрали в настройках. 

    * Оранжевая линия: COB (цвет обычно используется для углеводов и активных углеводов COB)
    * Темно-синяя линия: IOB (цвет используется как правило для представления инсулина и активного инсулина IOB)
    * Светлая синяя линия: нулевая временная база
    * Темно-желтая линия: непредусмотренный прием пищи UAM
    

Эти линии отражают различные прогнозы, основанные на текущих усваиваемых углеводах (COB); инсулине (IOB); показывая, сколько времени понадобится ГК, чтобы понизиться до/выше заданного уровня, если не принимать во внимание отклонения и активировать нулевую временную базу, а также распознавание непредусмотренного питания, не введенного в систему пользователем (UAM).

Сплошная синяя линия показывает подачу базала помпой. Синяя точечная линия показывает какой была бы скорость подачи базала если бы не было временных корректировок базы TBR, а сплошная синяя линия показывает фактически поданный инсулин с течением времени.

**Секция F:** также настраивается с использованием опций в разделе D. В этом примере показан IOB (активный инсулин) - если бы не было временных базалов TBR и остатков болюсов он был бы равен нулю, чувствительности и отклонению. СЕРЫЕ столбцы показывают отклонение из-за углеводов, ЗЕЛЕНЫЕ - что ГК выше, чем ожидал алгоритм, и КРАСНЫЕ - что он ниже.

**Секция G:** позволяет управлять болюсом (обычно кнопкой Калькулятора болюса) и добавить калибровку CGM.

## Калькулятор

![Калькулятор](../images/Screenshot_Bolus_calculator.png)

Когда необходимо дать болюс на еду, он обычно подается отсюда.

**Секция A:** - место, куда вы вводите информацию о желательном болюсе. Поле BG обычно уже заполнено данными с CGM. Если CGM не работает, то поле будет пустым. В поле УГЛЕВОДЫ вы добавляете рассчитанное вами количества углеводов - или эквивалента - на которые хотите дать болюс. Поле CORR/ИСПРАВ применимо если вы по какой-то причине хотите изменить конечную дозу, а поле CARB TIME нужно для предварительного болюса, чтобы сказать системе, что будет задержка приема углеводов и болюс будет отложен. Вы можете добавить отрицательное число в это поле, если даете болюс на прошлые углеводы.

SUPER BOLUS - это когда базальный инсулин следующих двух часов добавляется к подаваемому болюсу, а на следующие два часа подается нулевой временный базал TBR, чтобы поглотить лишний инсулин. Идея заключается в том, чтобы доставить инсулин по возможности раньше и, желательно, сократить пики.

**Секция B:** показывает рассчитываемый болюс. Если количество активного инсулина превышает рассчитанный болюс, то оно просто покажет количество углеводов, которые еще требуются.

**Секция C:** показывает различные элементы, которые были использованы для подсчета болюса. Можно отменить выбор тех, которые вы не хотите включить, но обычно это не требуется.

<b>Комбинации активных углеводов COB и активного инсулина IOB и что они означают</b>

<ul>
    <li>If you tick COB and IOB unabsorbed carbs that are not already covered with insulin + all insulin that has been delivered as TBR or SMB will be taken into account</li>
    <li>If you tick COB without IOB you run the risk of too much insulin as AAPS is not accounting for what’s already given. </li>
    <li>If you tick IOB without COB, AAPS takes account of already delivered insulin but won’t cover that off against any carbs still to be absorbed. This leads to a 'missing carbs' notice.
</ul>

If you bolus for additional food shortly after a meal bolus (i.e. additional desert) it can be helpful to untick all boxes. This way just the new carbs are being added as the main meal won't necessarily be absorbed so IOB won't match COB accurately shortly after a meal bolus.

## Insulin Profile

![Insulin Profile](../images/Screenshot_insulin_profile.png)

This shows the activity profile of the insulin you have chosen. The PURPLE line shows how much insulin remains after it has been injected as it decays with time and the BLUE line shows how active it is.

You will normally be using one of the Oref profiles - and the important thing to note is that the decay has a long tail. If you have been used to manual pumping you have probably been used to assuming that insulin decays over about 3.5 hours. However, when you are looping the long tail matters as the calculations are far more precise and these small amounts add up when they are subjected to the recursive calculations in the AndroidAPS algorithm.

For a more detailed discussion of the different types of insulin, their activity profiles and why all this matters you can read an article here on [Understanding the New IOB Curves Based on Exponential Activity Curves](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

And you can read an excellent blog article about it here: [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

And more at: [Exponential Insulin Curves + Fiasp](http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Pump Status

![Pump Status](../images/Screenshot_pump_Combo.png)

Here we see the status of the insulin pump - in this case an Accu-Chek Combo. The information displayed is self explanatory. A long press on the HISTORY button will read the data from your pump history, including your basal profile. But remember only one basal profile is supported on the Combo pump.

## Care Portal

![Care Portal](../images/Screenshot_care_portal.png)

This replicates the functions you will find on your Nightscout screen under the "+" symbol which allows you to add notes to your records. Functions such as recording when you change a pump site, or insulin cartridge should be self explanatory. BUT this section does not issue any commands to your pump. So if you add a bolus using this screen it simply makes a note of this on your Nightscout record, the pump won't be instructed to deliver a bolus.

## Loop, MA, AMA, SMB

You don't normally need to worry about these, they show the results of the OpenAPS algorithm which runs each time the system gets a fresh reading from the CGM. These are discussed elsewhere.

## Профиль

![Профиль](../images/Screenshot_profile.png)

AndroidAPS can run using a number of different profile configuratons. Typically - as shown here - the Nightscout profile has been downloaded via the built in Nighscout client and is displayed here in read-only form. If you wanted to make any changes you would do this from your Nightscout user interface and then do a "Switch Profile" on your AndroidAPS rig to refresh the download. Data such as the basal profile would then be automatically copied over to your pump.

**DIA:** stands for Duration of Insulin Action and it is discussed above in the section on insulin profiles.

**IC:** is Insulin to Carb ratio. This profile has a number of different values set for different times of day.

**ISF:** is Insulin Sensitivity Factor - the amount by which one unit of insulin will reduce your blood glucose assuming that nothing else changes.

**Basal:** is the basal profile programmed into your pump.

**Target:** is the blood glucose level that you want the rig to be aiming for all the time. You can set different levels for differenttimes of day if you wish, and you can even set an upper and lower range so that the rig will only start to make changes when the predicted blood glucose value falls outside, but if you do that then the rig will respond more slowly and you are unlikely to achieve such stable blood sugars.

## Treatment, xDrip, NSClient

These are simply logs of treatments (boluses and carbs), xDrip messages and messages sent to Nightscout via the built-in Nightscout client. You don't normally need to worry about any of these unless there is a problem.

## Config Builder

![Конфигуратор](../images/Screenshot_config_builder.png)

This is where you will set up the configuraton of your AndroidAPS rig. This screenshot shows a pretty typical rig using a Combo pump, a Dexcom G5 CGM sensor being managed via xDrip+ and running with NovoRapid insulin on an Oref profile and connected to a Nightscout cloud based server.

The tick box on the right determines if that particular module will be displayed in the top menu bar (see section A at Homescreen) and the small gear wheel symbol allows access to the setting for that module, if there are any.

## Settings and Preferences

At the top right of the navigation bar you will find three small vertical dots. Pressing on these takes you to the app's preferences and settings, and enables you to export your settings if ever you need to transfer to a different rig. These are discussed elsewhere in the wiki.