# Экраны AndroidAPS

## Главный экран

![Главный экран V2.5](../images/Screenshot_Home_screen_V2_5_1.png)

Это первый экран, который вы увидите, когда откроете AndroidAPS, и он содержит большую часть повседной информации.

### Секция A

* осуществляйте навигацию между модулями AndroidAPS свайпом влево или вправо

### Секция B

* изменить состояние цикла (открытый цикл, замкнутый цикл, приостановка цикла и т. д.)
* посмотреть текущий профиль и выполнить [переключение профиля](../Usage/Profiles.md)
* посмотреть текущий целевой уровень глюкозы в крови и установить [временные цели](../Usage/temptarget.md).

Нажмите и удерживайте любую из кнопок для изменения настройки. Например, удерживая темно-синюю целевую панель в верхнем правом углу ("100" на снимке экрана), можно задать временные цели.

### Секция С

* самые свежие данные ГК с мониторинга
* как давно они сняты
* изменения за последние 15 и 40 минут
* текущая скорость базала включая любой временный базал TBR заданный системой
* активный инсулин (IOB)
* активные углеводы COB - углеводы в процессе компенсации

Дополнительные [индикаторы состояния](../Configuration/Preferences#overview) (КАН| ИНС | РЕЗ | СЕН | БАТ) дают визуальное предупреждения о низком уровне резервуара, заряда батареи а также пропущенное время замены катетера.

Значение активного инсулина Iob будет нулевым при подаче только стандартного базального и когда нет остатков от предыдущих болюсов. Цифры в скобках показывают, сколько инсулина остается от предыдущих болюсов, и сколько - от временных базалов TBR, запрограммированных ААPS. Второй компонент может быть отрицательным, если перед этим были периоды подачи уменьшенной базы.

### Секция D

Нажмите на стрелку справа экрана в секции D, чтобы выбрать, какую информацию отображать на диаграммах ниже.

### Секция E

Это график, показывающий глюкозу крови (ГК), считанный мониторингом (CGM) он также показывает уведомления сайта Nightscout, такие как калибровки глюкометром и введенные углеводы.

Длительное нажатие на графике изменит шкалу времени. Можно выбрать 6, 8, 12, 18 или 24 часа.

Продолженные линии показывают тенденции ГК - если это выбрано в настройках.

* ** Оранжевая ** линия: [активные углеводы COB ](../Usage/COB-calculation.rst) (цвет используется обычно для представления активных углеводов COB и углеводов)
* **Темно-синяя ** линия: активный инсулин IOB (цвет обычно используется для отображения активного инсулина IOB и инсулина)
* ** Голубая ** линия: нулевой временный базал (предсказанная ГК, если будет установлена временная базальная скорость в 0%)
* ** Темно-желтая ** линия: [ непредвиденный прием пищи UAM ](../Configuration/Sensitivity-detection-and-COB#sensitivity-oref1)

Эти линии отражают различные прогнозы, основанные на текущих усваиваемых углеводах (COB); инсулине (IOB); показывая, сколько времени понадобится ГК, чтобы понизиться до/выше заданного уровня, если не принимать во внимание отклонения и активировать нулевую временную базу, а также распознавание непредусмотренного питания, не введенного в систему пользователем (UAM).

Сплошная **синяя** линия показывает подачу базала помпой. Синяя точечная линия показывает какой была бы скорость подачи базала если бы не было временных корректировок базы TBR, а сплошная синяя линия показывает фактически поданный инсулин с течением времени.

В **тонкая желтая** линия отображает время действия инсулина. Она основана на ожидаемом падении ГК из-за действия инсулина в системе, если не присутствуют другие факторы (например, углеводы).

### Секция F

Эта секция также настраивается с использованием опций в разделе D.

* ** Активный Инсулин ** (синяя диаграмма): Он показывает инсулин, который действует в организме. Если нет временных базалов TBR, микроболюсов SMB и оставшихся болюсов, то это значение равно нулю. Всасывание зависит от продолжительности действия инсулина и настроек его профиля. 
* ** Активные Углеводы ** (оранжевый график): показывает углеводы, которые усваиваются организмом. Всасывание зависит от отклонений, замеченных алгоритмом. Если он обнаружит более высокое поглощение углеводов, чем ожидалось, будет подан инсулин, и это увеличит количество активного инсулина IOB (более или менее, в зависимости от ваших настроек безопасности). 
* **Отклонение**: 
   * ** СЕРЫЕ ** столбцы показывают отклонение, вызванное углеводами. 
   * ** ЗЕЛЕНЫЕ ** столбцы показывают, что ГК превышает уровень, ожидаемый алгоритмом. 
   * ** КРАСНЫЕ ** столбцы показывают, что ГК ниже величины, ожидаемой алгоритмом.
* **Sensitivity** (white line): It shows the sensitivity that [Autosens](../Usage/Open-APS-features#autosens) has detected. Чувствительность - это расчет чувствительности к инсулину в результате нагрузки, гормонов и т.д.
* **активность** (желтая линия): показывает активность инсулина, рассчитанную на основе профиля инсулина (не производная от активного инсулина). Значение выше ближе к пику времени действия. Это будет означать, что при снижении IOB величина будет отрицательной. 

### Секция G

Позволяет подавать болюс (обычно это делается кнопкой Калькулятора болюса) и добавлять калибровку после замера глюкометром. Also a Quick Wizard button would be displayed here if configured in [Config Builder](../Configuration/Config-Builder#quickwizard-settings).

## Калькулятор

![Калькулятор](../images/Screenshot_Bolus_calculator.png)

Когда необходимо дать болюс на еду, он обычно подается отсюда.

### Секция A

место, куда вы вводите информацию о желательном болюсе. Поле ГК обычно уже заполнено данными с мониторинга. Если мониторинг не работает, то поле будет пустым. В поле УГЛЕВОДЫ вы добавляете рассчитанное вами количества углеводов - или эквивалента - на которые хотите дать болюс. Поле CORR/ИСПРАВ нужно, если вы по какой-то причине хотите изменить конечную дозу, а поле CARB TIME нужно для предварительного болюса, чтобы сказать системе, что будет задержка приема углеводов. Вы можете добавить отрицательное число в это поле, если даете болюс на прошлые углеводы.

SUPER BOLUS - это когда базальный инсулин следующих двух часов добавляется к подаваемому болюсу, а на следующие два часа подается нулевой временный базал TBR, чтобы поглотить лишний инсулин. Идея заключается в том, чтобы доставить инсулин по возможности раньше и, желательно, сократить пики.

### Секция B

показывает рассчитываемый болюс. Если количество активного инсулина превышает рассчитанный болюс, то оно просто покажет количество углеводов, которые еще требуются.

### Секция С

показывает различные элементы, которые были использованы для подсчета болюса. Можно отменить выбор тех, которые вы не хотите включить, но обычно это не требуется.

### Комбинации активных углеводов COB и активного инсулина IOB и что они означают

<ul>
    <li>Если вы отметите галочками COB и IOB, то будут учтены неусвоенные углеводы которые не покрыты инсулином + все инсулины, которые были введены в качестве временного базала или супермикроболюса СМБ</li>
    <li>Если вы отметите галочками COB без IOB, то рискуете получить слишком много инсулина поскольку AAPS не примет в расчет то, что уже доставлено. </li>
    <li>Если вы нажимаете IOB без COB, AAPS принимает в расчет уже поданный инсулин, но не углеводы, которые предстоит усвоить. Это приводит к уведомлению о "недостатке углеводов".
</ul>

Если вы даете болюс на дополнительную еду вскоре после болюса на прием пищи (напр. дополнительный десерт) полезно снять все галочки. Таким образом, добавляются только новые углеводы а поскольку основная еда не еще не усвоена, то IOB не будет точно соответствовать углеводам COB вскоре после болюса на еду.

### Неверное обнаружение активных углеводов COB

![Медленное усваивание углеводов](../images/Calculator_SlowCarbAbsorbtion.png)

Если вы видите вышеприведенное предупреждение после использования болюс-мастера, это означает, что AndroidAPS обнаружил, что рассчетное значение активных углеводов COB может быть неправильным. So, if you want to bolus again after a previous meal with COB you should be aware of overdosing! Подробнее см. подсказки на [странице расчета активных углеводов СOB](../Usage/COB-calculation#detection-of-wrong-cob-values).

## Профиль Инсулина

![Профиль Инсулина](../images/Screenshot_insulin_profile.png)

Показывает профиль активности выбранного вами инсулина. ФИОЛЕТОВАЯ линия показывает, сколько инсулина остается после ввода по мере рассасывания, а СИНЯЯ линия показывает его активность.

Обычно мы пользуемся одним из профилей Oref - и важно отметить, что рассасывание имеет длинный след. Если вы раньше управляли помпой вручную, то, вероятно, привыкли полагать, что инсулин рассасывается примерно за 3,5 часов. Однако, при включении цикла длинный след имеет большее значение поскольку расчеты здесь более точные и даже небольшие величины суммируются в рекурсивных вычислениях в алгоритме AndroidAPS.

Более подробное обсуждение различных типов инсулина, их профилей активности и почему это важно, см. здесь [Понимание новых кривых IOB на основе экспоненциальных кривых активности](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

Отличная статья об этом: [Почему мы регулярно ошибались в определении длительности действия инсулина (DIA) и почему это имеет значение…](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

Еще на эту тему: [Экспоненциальные кривые инсулина + Fiasp](http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Статус помпы

![Статус помпы](../images/Screenshot_pump_Combo.png)

Здесь мы видим статус инсулиновой помпы - в нашем случае Акку-Чек Комбо. The information displayed is self-explanatory. Длительное нажатие на кнопку HISTORY/ИСТОРИЯ считывает данные из логов помпы, в том числе и ваш базальный профиль. Но помните, на помпе Combo поддерживается только один базальный профиль.

## Портал лечения/назначений

Careportal replicated the functions you will find on your Nightscout screen under the “+” symbol which allows you to add notes to your records.

### Carb correction

Treatment tab can be used to correct faulty carb entries (i.e. you over- or underestimated carbs).

1. Check and remember actual COB and IOB on homescreen.
2. Depending on pump in treatment tab carbs might be shown together with insulin in one line or as a separate entry (i.e. with Dana RS).
   
   ![Treatment in 1 or 2 lines](../images/Treatment_1or2_lines.png)

3. Remove the entry with the faulty carb amount.

4. Make sure carbs are removed successfully by checking COB on homescreen again.
5. Do the same for IOB if there is just one line in treatment tab including carbs and insulin.
   
   -> If carbs are not removed as intended and you add additional carbs as explained here (6.), COB will be too high and that might lead to too high insulin delivery.

6. Enter correct carb amount through carbs button on homescreen and make sure to set the correct event time.

7. If there is just one line in treatment tab including carbs and insulin you have to add also the amount of insulin. Make sure to set the correct event time and check IOB on homescreen after confirming the new entry.

## Состояние цикла/Loop, МА, АМА, SMB

You don't normally need to worry about these, they show the results of the OpenAPS algorithm which runs each time the system gets a fresh reading from the CGM. These are discussed elsewhere.

## Профиль

![Профиль](../images/Screenshot_profile.png)

AndroidAPS can run using a number of different profile configurations. Typically - as shown here - the Nightscout profile has been downloaded via the built in Nightscout client and is displayed here in read-only form. If you wanted to make any changes you would do this from your Nightscout user interface and then do a [Profile Switch](../Usage/Profiles.md) in AndroidAPS to activate the changes. Data such as the basal profile would then be automatically copied over to your pump.

**DIA:** stands for Duration of Insulin Action and it is discussed above in the section on insulin profiles.

**IC:** is Insulin to Carb ratio. This profile has a number of different values set for different times of day.

**ISF:** is Insulin Sensitivity Factor - the amount by which one unit of insulin will reduce your blood glucose assuming that nothing else changes.

**Basal:** is the basal profile programmed into your pump.

**Target:** is the blood glucose level that you want the rig to be aiming for all the time. You can set different levels for different times of day if you wish, and you can even set an upper and lower range so that the rig will only start to make changes when the predicted blood glucose value falls outside, but if you do that then the rig will respond more slowly and you are unlikely to achieve such stable blood sugars.

## Лечение/назначения, xDrip, NSClient

These are simply logs of treatments (boluses and carbs), xDrip messages and messages sent to Nightscout via the built-in Nightscout client. You don't normally need to worry about any of these unless there is a problem.

## Конфигуратор

![Конфигуратор](../images/Screenshot_config_builder.png)

This is where you will set up the configuration of your AndroidAPS rig. This screenshot shows a pretty typical rig using a Combo pump, a Dexcom G5 CGM sensor being managed via xDrip+ and running with NovoRapid insulin on an Oref profile and connected to a Nightscout cloud based server.

The tick box on the right determines if that particular module will be displayed in the top menu bar (see section A at Homescreen) and the small gear wheel symbol allows access to the setting for that module, if there are any.

## Параметры и настройки

At the top right of the navigation bar you will find three small vertical dots. Pressing on these takes you to the app's preferences, history browser, setup wizard, about the app information and the exit button that will close AAPS.