# Основной функционал AAPS

(Open-APS-features-autosens)=

## Autosens

- Autosens-это алгоритм, который отслеживает отклонения ГК (позитивное/отрицательное/нейтральное).
- На основе этих отклонений он определяет чувствительность/резистентность пользователя.
- Реализация алгоритма oref в ** OpenAPS ** выполняется на основе комбинации данных за 24 и 8 часов. Алгоритм применяет наиболее чувствительный из них.
- В версиях до **AAPS 2.7** пользователю приходилось выбирать между 8 или 24 часами вручную.
- В версиях **AAPS** новее 2.7 Autosens для вычисления чувствительности автоматически переключается между 24 и 8 часами. Он выберет более чувствительный вариант. 
- Если пользователи перешли с алгоритма oref1, они, вероятно, заметят, что система менее динамично реагирует на изменения из-за различий в чувствительности за 24 или 8 часов.
- Замена канюли или изменение профиля сбросит Autosens назад на 100% (переключение профиля по процентам с установкой продолжительности не сбрасывает Autosens).
- Autosens настраивает базал и ISF ( примерно так же как изменение профиля в процентах).
- Если пользователь потребляет углеводы, не внося данные в систему в течение длительного периода, autosens будет менее эффективен в этот период, так как углеводы исключены из расчетов изменяемого диапазона **ГК**.

(Open-APS-features-super-micro-bolus-smb)=

## Супер микроболюс (SMB)

**SMB**, сокращение от **Super micro bolus**— это функция OpenAPS, вошедшая в алгоритм Oref1 с 2018 года. В отличие от помощника болюса **AMA**, для контроля уровня глюкозы алгоритм **SMB** использует небольшие **микроболюсы**, а не временную базальную скорость. Там, где алгоритм мастера болюса **AMA** добавит 1,0 ед. инсулина при помощи временной базальной скорости, **SMB** подает несколько супер микроболюсов маленькими шажками с **пятиминутным** интервалом, например 0,4; 0,3; 0,2; и 0,1 ед. Одновременно (по соображениям безопасности и чтобы предотвратить передозировку), на определенный период фактический базал устанавливается на 0 ед/ч, (т. н. **"нулевой базал"**). Это позволяет системе регулировать гликемию быстрее, чем временным повышением скорости базала в **AMA**.

Благодаря микроболюсам SMB при компенсации блюд, содержащих только "медленные" углеводы, системе достаточно сообщить только о запланированном количестве углеводов, в остальном положившись на **AAPS**. Однако это может дать более высокие постпрандиальные (после приема пищи) пики, поскольку преболюс не вводился. Или, при необходимости, можно предварительно ввести **преболюс**, который ** только частично** покрывает углеводы (например, 2/3 от предполагаемого количества), и позволить алгоритму **SMB** ввести оставшуюся часть инсулина.

![SMBs on main graph](../images/SMBs.png)

SMB отображаются на главном графике синими треугольниками. Нажмите на треугольник, чтобы узнать, сколько инсулина было введено, или перейдите на вкладку [ Терапия ](#aaps-screens-treatments).

Алгоритм **SMB** имеет встроенные механизмы безопасности:

1. **Самая большая отдельная доза SMB**  
    самая большая разовая доза SMB имеет наименьшее значение из:
    
    - значения, соответствующего текущей базальной скорости (с поправками autosens) на длительность, установленную в "Максимуме минут базала, которыми ограничивается SMB", например, количество базального инсулина за следующие 30 минут, или
    - половина требуемого в данный момент количества инсулина, или
    - оставшаяся часть maxIOB в настройках.

2. **Низкая скорость временной базы**  
    Низкая скорость временного базала (называемая "низким временным базалом") или временная базальная скорость равная 0 Ед/ч (называемая "нулевым временным базалом") преимущественно активируются в режиме алгоритма **супермикроболюс SMB**. Это конструктивно сделано по соображениям безопасности и, если профиль **** установлен правильно, не имеет негативных последствий. На основном графике кривая активного инсулина IOB (желтая тонкая линия) имеет большее значение, чем динамика временных скоростей базала.

3. **Непредвиденный прием пищи**  
    Дополнительные расчеты для прогнозирования уровня ГК, например, по **UAM** (непредвиденные приемы пищи). Даже без ручного ввода углеводов пользователем **UAM** может автоматически обнаружить значительное повышение гликемии из-за приема пищи, выброса адреналина или других факторов и попытаться скорректировать это при помощи **микроболюсов SMB**. Для безопасности, эта функция работает и в обратном направлении и может остановить подачу супер микроболюса при неожиданном понижении ГК. Поэтому функция UAM должна всегда быть активирована в режиме алгоритма SMB.

**Для работы алгоритма должна быть начата [цель 9](#objectives-objective9).**

См. также:

- [Документация OpenAPS по SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb).
- [Документация OpenAPS по oref1 SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)
- [Информация Tim'а по SMB](https://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/).

Ниже описаны настройки алгоритма SMB из OpenAPS.

(Open-APS-features-max-u-h-a-temp-basal-can-be-set-to)=

### Максимальное значение ед./ч для скорости временного базала

Эта настройка безопасности определяет максимальную скорость временного базала помпы. Она также известна как **max-basal**.

Значение задается в единицах в час (ед./ч). Рекомендуется установить какое-то разумное значение. Рекомендуемое значение для этого параметра:

**MAX-BASAL = НАИВЫСШАЯ БАЗАЛЬНАЯ СКОРОСТЬ x 4**

Например, если максимальная скорость базала в профиле была 0,5 ед./ч, то, умножив ее на 4, получаем 2 ед./ч.

**AAPS** устанавливает это значение как 'жесткий предел' в соответствии с [Настройки> Безопасность терапии > Тип пациента](#preferences-patient-type). Ниже приводятся жесткие пределы:

- Ребенок: 2
- Подросток: 5
- Взрослый: 10
- Инсулинорезистентный взрослый: 12
- Беременная: 25

*См. также [обзор программно закодированных жестких пределов](#Open-APS-features-overview-of-hard-coded-limits).*

(Open-APS-features-maximum-total-iob-openaps-cant-go-over)=

### Предел суммарного активного инсулина IOB для OpenAPS

Это значение определяет максимальное количество **активного инсулина IOB (базального и болюсного), при котором **AAPS** будет работать в режиме замкнутого цикла. Оно также именуется **maxIOB**.</p> 

Если текущий активный инсулин IOB (например, после болюса на еду) превышает определенную величину, то алгоритм останавливает подачу инсулина до тех пор, пока предел IOB не будет ниже заданного значения.

Для начала рекомендуется задать эту величину как:

    maxIOB = средний болюс на еду + троекратный максимальный базал
    

Будьте внимательны и осторожны при настройке **max-IOB**. Эта величина для каждого своя, а также зависит от средней общей суточной дозы (TDD).

**AAPS** устанавливает это значение как 'жесткий предел' в соответствии с [Настройки> Безопасность терапии > Тип пациента](#preferences-patient-type). Ниже приводятся жесткие пределы:

- Ребенок: 3
- Подросток: 7
- Взрослый: 12
- Инсулинорезистентный взрослый: 25
- Беременная: 40

*См. также [обзор программно закодированных жестких пределов](#Open-APS-features-overview-of-hard-coded-limits).*

Примечание : При использовании **SMB** **max-IOB** рассчитывается иначе, чем алгоритмом помощника болюса AMA. В алгоритме помощника болюса **AMA** maxIOB является параметром безопасности для активного базального инсулина **IOB**, а в SMB-режиме, он, помимо этого, включает в себя активный болюсный инсулин.

См. также [документацию OpenAPS по SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb).

### Включить динамическую чувствительность

Эта функция называется [DynamicISF](../DailyLifeWithAaps/DynamicISF.md). При ее включении становятся доступными новые настройки. Эти настройки подробно описаны на странице [DynamicISF](#dyn-isf-preferences).

#### Высокая врем. цель temptarget повышает чувствительность

Если эта опция включена, то чувствительность к инсулину увеличивается при временной цели более 100 мг/дл или 5.6 ммол/л. Это означает, что чувствительность к инсулину ISF возрастет, в то время как IC и базал уменьшатся. Это сделает поведение алгоритма **AAPS** менее агрессивным, когда устанавливается высокая временная цель.

#### Низкая временная цель temptarget снижает чувствительность

Если эта опция включена, то параметр чувствительность к инсулину будет снижен при временной цели ниже 100 мг/дл или 5.6 ммол/л. Это означает, что чувствительность к инсулину ISF снизится, в то время как IC и базал увеличатся. При установке низкой временной цели это сделает поведение алгоритма **AAPS** более агрессивным.

### Включить функционал Autosens

Это функция [Autosens](#Open-APS-features-autosens). При работе алгоритма DynamicISF, функция Autosens не используется, поскольку это два разных алгоритма, изменяющих одну и ту же переменную (чувствительность).

Autosens отслеживает отклонения гликемии в крови (положительные / отрицательные / нейтральные). На основе отклонений он пытается выяснить, насколько вы чувствительны/резистентны к инсулину и корректирует базальную скорость и коэффициент чувствительности к инсулину ISF.

При ее включении становятся доступными новые настройки.

### Чувствительность поднимает цель

Если эта опция включена, функция определения чувствительности (autosens) может поднять цель при обнаружении чувствительности ниже 100%. В этом случае цель будет увеличена на процент обнаруженной чувствительности.

Если цель меняется из-за обнаружения чувствительности, она отображается на главном экране зеленым фоном.

![Target modified by autosens](../images/Home2020_DynamicTargetAdjustment.png)

Эта настройка доступна, если включена одна из опций "Включить динамическую чувствительность" или "Включить функцию Autosens".

### Резистентность понижает цель

Если включена эта опция, функция определения чувствительности (autosens) может снизить целевое значение при обнаружении резистентности (выше 100%). В этом случае цель будет снижена на процент обнаруженной резистентности.

Эта настройка доступна, если включена одна из опций "Включить динамическую чувствительность" или "Включить функцию Autosens".

### Включить супер микро болюс SMB

Включите, чтобы использовать функционал SMB. Если этот параметр отключен, то микроболюсы **SMBS** не подаются.

При ее включении становятся доступными новые настройки.

(Open-APS-features-enable-smb-with-high-temp-targets)=

#### Включить супер микро болюс SMB при высоких значениях временных целей

Если активирован этот параметр, микроболюсы **SMBS** будут вводиться, даже если пользователь выбрал высокую **Временную Цель** (то есть любую величину, больше 100 мг/дл или 5,6 ммоль/л, независимо от целевого значения **Профиля **). Эта опция нужна для отключения микроболюсов SMB, когда параметр отключен. Например, если эта опция отключена, то микроболюсы **SMBs** можно отключить, установив **Временную Цель** выше 100mg/dL или 5.6mmol/l. Эта опция также отключает **SMB** независимо от того, какое другое условие пытается включить микроболюс.

Если этот параметр включен, **SMB** будут активны только с высокой временной целью, если при этом также активирован **включать SMB с временными целями**.

(Open-APS-функции-включать-микроболюсы-всегда)=

#### Всегда включать супер микро болюс SMB

Если включена эта настройка, микроболюсы SMB работают всегда (независимо от активных углеводов COB, временных целей или болюсов). Если этот параметр включен, остальные параметры включения не будут иметь эффекта. Однако, если отключена настройка **Включить SMB с высокими временными целями** и задается высокая временная цель, SMB будут отключены.

Эта настройка доступна только в том случае, если **AAPS** определяет, что вы используете [ надежный источник ГК](#GettingStarted-TrustedBGSource) с хорошей фильтрацией. FreeStyle Libre 1 не считается надежным источником из-за риска бесконечно повторяющихся старых данных ГК в случае сбоя датчика.

Зашумленные данные могут привести к тому, что **AAPS** поверит, что ГК растет очень быстро, что в свою очередь приведет к подаче ненужных микроболюсов. Для получения дополнительной информации о шуме и сглаживании данных смотрите [ здесь](../CompatibleCgms/SmoothingBloodGlucoseData.md).

#### Включать супер микро болюсы при активных углеводах COB

Если этот параметр включен, SMB включаются при активных углеводах COB больше 0.

Этот параметр не отображается, если включена функция "Разрешить SMB всегда".

#### Включать супер микро болюс SMB с временными целями

Если включена эта настройка, то SMB включаются при наличии любой временной цели (ожидаемый прием пищи, нагрузка, гипо, пользовательский). Если этот параметр включен, но отключен параметр **Включить SMB при высокой ВЦ**, SMB будут включаться при низкой ВЦ (ниже 100 мг/дл или 5,6 ммоль/л), но будут отключены при высокой ВЦ..

Этот параметр не отображается, если включена функция "Разрешить SMB всегда".

#### Активировать супер микро болюс SMB после углеводов

Если включена эта настройка, то микроболюсы SMB работают в течение 6 часов после внесения углеводов, даже если значение COB достигло 0.

По соображениям безопасности эта настройка доступна только в том случае, если **AAPS** обнаруживает, что используется надежный источник ГК. Настройка не видна, если включена функция "Разрешить SMB всегда".

Эта настройка доступна только в том случае, если **AAPS** определяет, что вы используете [ надежный источник ГК](#GettingStarted-TrustedBGSource) с хорошей фильтрацией. FreeStyle Libre 1 не считается надежным источником из-за риска бесконечно повторяющихся старых данных ГК в случае сбоя датчика.

Зашумленные данные могут привести к тому, что **AAPS** поверит, что ГК растет очень быстро, что в свою очередь приведет к подаче ненужных микроболюсов. For more information about noise and data smoothing, see [here](../CompatibleCgms/SmoothingBloodGlucoseData.md).  
This setting is not visible if "Enable SMB always" is switched on.

#### How frequently SMBs will be given in min

This feature limits the frequency of SMBs. This value determines the minimum time between SMBs. Note that the loop runs every time a glucose value comes in (generally 5 minutes). Subtract 2 minute to give loop additional time to complete. E.g. if you want SMB to be given every loop run, set this to 3 minutes.

Default value: 3 min.

(Open-APS-features-max-minutes-of-basal-to-limit-smb-to)=

#### Верхний лимит минут базала при SMB

This is an important safety setting. This value determines how much SMB can be given based on the amount of basal insulin in a given time, when it is covered by COBs.

Making this value larger allows the SMB to be more aggressive. You should start with the default value of 30 minutes. After some experience, increase the value in 15 minutes increments and observe the effects over multiple meals.

It is recommended not to set the value higher than 90 minutes, as this would lead to a point where the algorithm might not be able to accommodate a decreasing BG with 0 U/h basal ('zero-temp'). You should also set alarms, especially if you are still testing new settings, which will warn you well before a hypo.

Default value: 30 min.

#### Max minutes of basal to limit SMB to for UAM

This setting allows to adjust the strength of SMB during UAM, when there are no more carbs.

Default value : the same as **Max minutes of basal to limit SMB to**.

This setting is only visible if "Enable SMB" and "Enable UAM " are switched on.

### Включить непредвиденный прием пищи UAM

With this option enabled, the SMB algorithm can recognize unannounced meals. This is helpful if you forget to tell **AAPS** about your carbs or estimate your carbs wrong and the amount of entered carbs is wrong or if a meal with lots of fat and protein has a longer duration than expected. Without any carb entry, UAM can recognize fast glucose increase caused by carbs, adrenaline, etc., and tries to adjust it with SMBs. This also works the opposite way: if there is a fast glucose decrease, it can stop SMBs earlier.

**Therefore, UAM should always be activated when using SMB.**

(key-aaps-features-minimal-carbs-required-for-suggestion)=

### Minimal carbs required for suggestion

Minimum grams of carbs to display a carbs suggestion alert. Eating of additional carbs will be suggested when the reference design detects that it requires carbs. In this case you will receive a notification which can be snoozed for 5, 15 or 30 minutes.

При желании уведомления об углеводах могут быть переданы в Nightscout. В этом случае сработают стандартные настройки оповещения NS. 

In any case, the required carbs will be displayed in the COB section on your home screen.

![Display carbs required on home screen](../images/Pref2020_CarbsRequired.png)

### Дополнительные настройки

You can read more here : [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Always use short average delta instead of simple data** If you enable this feature, **AAPS** uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps **AAPS** to be steadier with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump and/or profile. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then **AAPS** can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump and/or profile.

Default value: 4 (shouldn’t be changed unless you really need to and know what you are doing)

* * *

(Open-APS-features-advanced-meal-assist-ama)=

## Расширенный мастер болюса (AMA)

AMA, the short form of "advanced meal assist" is an OpenAPS feature from 2017 (oref0). OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus if you enter carbs reliably.

You can find more information in the [OpenAPS documentation](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### Максимальное значение ед/ч, на которое можно установить временный базал ("max-basal" OpenAPS)

This safety setting helps **AAPS** from ever being capable of giving a dangerously high basal rate and limits the temp basal rate to x U/h. Рекомендуется установить какое-то разумное значение. A good recommendation is to take the highest basal rate in your profile and multiply it by 4 and at least 3. For example, if the highest basal rate in your profile is 1.0 U/h you could multiply that by 4 to get a value of 4 U/h and set the 4 as your safety parameter.

You cannot choose any value: For safety reason, there is a 'hard limit', which depends on the patient age. The 'hard limit' for maxIOB is lower in AMA than in SMB. For children, the value is the lowest while for insulin resistant adults, it is the biggest.

The hardcoded parameters in **AAPS** are:

- Ребенок: 2
- Подросток: 5
- Взрослый: 10
- Инсулинорезистентный взрослый: 12
- Беременная: 25

*См. также [обзор программно закодированных жестких пределов](#Open-APS-features-overview-of-hard-coded-limits).*

### Максимальное общее количество активного инсулина IOB (ед.), которое не может превысить OpenAPS ("max-iob" в OpenAPS)

This parameter limits the maximum of basal IOB where **AAPS** still works. If the IOB is higher, it stops giving additional basal insulin until the basal IOB is under the limit.

The default value is 2, but you should rise this parameter slowly to see how much it affects you and which value fits best. It is different for anyone and also depends on the average total daily dose (TDD). For safety reason, there is a limit, which depends on the patient age . The 'hard limit' for maxIOB is lower in AMA than in SMB.

- Ребенок: 3
- Подросток: 5
- Взрослый: 7
- Инсулинорезистентный взрослый: 12
- Беременная: 25

*См. также [обзор программно закодированных жестких пределов](#Open-APS-features-overview-of-hard-coded-limits).*

### Включить autosense помощника болюса AMA

Here, you can choose, if you want to use the [sensitivity detection](../DailyLifeWithAaps/SensitivityDetectionAndCob.md) autosens or not.

### Autosense также подстраивает цели

If you have this option enabled, autosens can adjust targets (next to basal and ISF), too. This lets **AAPS** work more 'aggressive' or not. The actual target might be reached faster with this.

### Дополнительные настройки

- Обычно нет необходимости изменять настройки в этом диалоге!
- Если все же вы хотите изменить их, обязательно прочтите подробности в документации [OpenAPS](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#) для полного понимания ваших действий.

**Always use short average delta instead of simple data** If you enable this feature, **AAPS** uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps **AAPS** to work more steady with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then **AAPS** can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump.

Default value: 4 (shouldn’t be changed unless you really need to and know what you are doing)

**Bolus snooze dia divisor** The feature “bolus snooze” works after a meal bolus. **AAPS** doesn’t set low temporary basal rates after a meal in the period of the DIA divided by the “bolus snooze”-parameter. The default value is 2. That means with a DIA of 5h, the “bolus snooze” would be 5h : 2 = 2.5h long.

Default value: 2

* * *

(Open-APS-features-overview-of-hard-coded-limits)=

## Обзор жестких ограничений

|            | ребенок | Подросток | взрослый | Инсулинорезистентный взрослый | Беременная |
| ---------- | ------- | --------- | -------- | ----------------------------- | ---------- |
| MAXBOLUS   | 5       | 10        | 17       | 25                            | 60         |
| MINDIA     | 5       | 5         | 5        | 5                             | 5          |
| MAXDIA     | 9       | 9         | 9        | 9                             | 10         |
| MINIC      | 2       | 2         | 2        | 2                             | 0.3        |
| MAXIC      | 100     | 100       | 100      | 100                           | 100        |
| MAXIOB_AMA | 3       | 5         | 7        | 12                            | 25         |
| MAXIOB_SMB | 7       | 13        | 22       | 30                            | 70         |
| MAXBASAL   | 2       | 5         | 10       | 12                            | 25         |