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

* Оранжевая линия: активные углеводы COB (цвет обычно используется для отображения активных углеводов COB и углеводов)
* Темно-синяя линия: активный инсулин IOB (цвет обычно используется для отображения активного инсулина IOB и инсулина)
* Голубая линия: нулевой временный базал
* Темно-желтая линия: незапланированный прием пищи UAM

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

### Комбинации активных углеводов COB и активного инсулина IOB и что они означают

<ul>
    <li>Если отметить галочками COB и IOB, то будут учтены неусвоенные углеводы которые еще не покрыты инсулином + все инсулины, которые были введены в качестве временного базала или супермикроболюса СМБ</li>
    <li>Если отметить галочками COB без IOB, то возникает риск получить слишком много инсулина поскольку AAPS не примет в расчет то, что уже подано. </li>
    <li>Если нажать IOB без COB, AAPS примет в расчет уже поданный инсулин, но не инсулин на углеводы, которые еще предстоит усвоить. Это приведет к уведомлению о "нехватке углеводов".
</ul>

Если вы даете болюс на дополнительную еду вскоре после болюса на прием пищи (напр. дополнительный десерт) полезно снять все галочки. Таким образом, добавляются только новые углеводы а поскольку основная еда не еще не усвоена, то IOB не будет точно соответствовать углеводам COB вскоре после болюса на еду.

### Медленное усваивание углеводов

Начиная с версии 2.4, AAPS предупреждает, обнаружено ли замедленное поглощение углеводов. После применения калькулятора на экране подтверждения появляется дополнительный текст. Риск заключается в переоценке активных углеводов COB и подаче чрезмерного количества инсулина.

![Медленное усваивание углеводов](../images/Calculator_SlowCarbAbsorbtion.png)

В этом примере 41% времени использовалось значение [min_5m_carbimpact](..//Configuration/Config-Builder.html?highlight=min_5m_carbimpact#absorption-settings) вместо значения, рассчитанного из отклонений.

Здесь имеет смысл нажать "Отмена" и провести новый расчет с неотмеченными активными углеводами COB. Если из ручного расчета вы видите необходимость в корректирующем болюсе, внесите его вручную. Но следите за тем, чтобы не было передозировки!

## Профиль Инсулина

![Профиль Инсулина](../images/Screenshot_insulin_profile.png)

Здесь показывается профиль активности выбранного вами инсулина. ФИОЛЕТОВАЯ линия показывает, сколько инсулина остается после ввода по мере рассасывания, а СИНЯЯ линия показывает его активность.

Обычно мы пользуемся одним из профилей Oref - и важно отметить, что рассасывание имеет длительный след. Если вы раньше управляли помпой вручную, то, вероятно, привыкли полагать, что инсулин рассасывается примерно за 3,5 часа. Однако, при работе цикла ИПЖ долгий след имеет большее значение поскольку расчеты здесь более точные и даже небольшие величины суммируются в рекурсивных вычислениях в алгоритме AndroidAPS.

Более подробное обсуждение различных типов инсулина, их профилей активности и почему это важно, см. здесь [Понимание новых кривых IOB на основе экспоненциальных кривых активности](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

Отличная статья об этом: [Почему мы регулярно ошибались в определении длительности действия инсулина (DIA) и почему это имеет значение…](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

Еще на эту тему: [Экспоненциальные кривые инсулина + Fiasp](http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Статус помпы

![Статус помпы](../images/Screenshot_pump_Combo.png)

Here we see the status of the insulin pump - in this case an Accu-Chek Combo. The information displayed is self explanatory. A long press on the HISTORY button will read the data from your pump history, including your basal profile. But remember only one basal profile is supported on the Combo pump.

## Портал лечения/назначений

![Портал лечения/назначений](../images/Screenshot_care_portal.png)

This replicates the functions you will find on your Nightscout screen under the "+" symbol which allows you to add notes to your records. Functions such as recording when you change a pump site, or insulin cartridge should be self explanatory. BUT this section does not issue any commands to your pump. So if you add a bolus using this screen it simply makes a note of this on your Nightscout record, the pump won't be instructed to deliver a bolus.

## Состояние цикла/Loop, МА, АМА, SMB

You don't normally need to worry about these, they show the results of the OpenAPS algorithm which runs each time the system gets a fresh reading from the CGM. These are discussed elsewhere.

## Профиль

![Профиль](../images/Screenshot_profile.png)

AndroidAPS can run using a number of different profile configuratons. Typically - as shown here - the Nightscout profile has been downloaded via the built in Nighscout client and is displayed here in read-only form. If you wanted to make any changes you would do this from your Nightscout user interface and then do a "Switch Profile" on your AndroidAPS rig to refresh the download. Data such as the basal profile would then be automatically copied over to your pump.

**DIA:** stands for Duration of Insulin Action and it is discussed above in the section on insulin profiles.

**IC:** is Insulin to Carb ratio. This profile has a number of different values set for different times of day.

**ISF:** is Insulin Sensitivity Factor - the amount by which one unit of insulin will reduce your blood glucose assuming that nothing else changes.

**Basal:** is the basal profile programmed into your pump.

**Target:** is the blood glucose level that you want the rig to be aiming for all the time. You can set different levels for differenttimes of day if you wish, and you can even set an upper and lower range so that the rig will only start to make changes when the predicted blood glucose value falls outside, but if you do that then the rig will respond more slowly and you are unlikely to achieve such stable blood sugars.

## Лечение/назначения, xDrip, NSClient

These are simply logs of treatments (boluses and carbs), xDrip messages and messages sent to Nightscout via the built-in Nightscout client. You don't normally need to worry about any of these unless there is a problem.

## Конфигуратор

![Конфигуратор](../images/Screenshot_config_builder.png)

This is where you will set up the configuraton of your AndroidAPS rig. This screenshot shows a pretty typical rig using a Combo pump, a Dexcom G5 CGM sensor being managed via xDrip+ and running with NovoRapid insulin on an Oref profile and connected to a Nightscout cloud based server.

The tick box on the right determines if that particular module will be displayed in the top menu bar (see section A at Homescreen) and the small gear wheel symbol allows access to the setting for that module, if there are any.

## Параметры и настройки

At the top right of the navigation bar you will find three small vertical dots. Pressing on these takes you to the app's preferences, history browser, setup wizard, about the app information and the exit button that will close AAPS.