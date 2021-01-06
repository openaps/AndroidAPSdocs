# Функции OpenAPS

## Autosens

* Autosens-это алгоритм, который смотрит на отклонения глюкозы в крови (позитивное/отрицательное/нейтральное).
* Он попытается определить, насколько вы чувствительны/резистентны на основании этих отклонений.
* Реализация oref в ** OpenAPS ** выполняется на основе комбинации данных за 24 и 8 часов. Он использует тот, который является более чувствительным.
* In versions prior to AAPS 2.7 user had to choose between 8 or 24 hours manually.
* From AAPS 2.7 on Autosens in AAPS will switch between a 24 and 8 hours window for calculating sensitivity. It will pick which ever one is more sensitive. 
* If users have come from oref1 they will probably notice the system may be less dynamic to changes, due to the varying of either 24 or 8 hours of sensitivity.
* Changing a cannula or changing a profile will reset Autosens ratio back to 0%.
* Autosens adjusts your basal, I:C and ISF for you (i.e.: mimicking what a Profile shift does).
* If continuously eating carbs over an extended period, autosens will be less effective during that period as carbs are excluded from BG delta calculations.

## Супер микроболюс (SMB)

SMB, сокращение от 'супер микро болюс', является новой функцией OpenAPS (с 2018 года) в рамках алгоритма версии Oref1. В отличие от расширенного мастера болюса AMA, SMB не использует временные базалы для контроля уровнея ГК, вместо них применяются **микроболюсы**. Там, где алгоритм мастера болюса AMA добавит 1,0 ед. инсулина при помощью временной базальной скорости, SMB обеспечивает несколько супер микроболюсов маленькими шажками с **пятиминутным** интервалом, например 0,4 ; 0,3 ; 0,2 ; и 0,1 ед. В то же самое время (по соображениям безопасности) фактический базал устанавливается на 0 ед/ч на определенный период, чтобы предотвратить передозировку (т.н. **"нулевой базал"**). Это позволяет системе регулировать глюкозу крови быстрее, чем с временным повышением скорости базала в AMA.

Благодаря SMB, при употреблении низкоуглеводных блюд, достаточно информировать систему о запланированном приеме какого-то количества углеводов и позволить AAPS позаботиться об остальном. Однако такие действия могут привести к более высоким постпрандиальным пикам, потому что преболюсы в таком варианте невозможны. Или если хотите сделать преболюс, **дайте болюс**, который **только частично** покрывает углеводы (например, 2/3 из оцениваемого количества) и позвольте SMB выполнить остальное.

Функция СМБ содержит некоторые механизмы безопасности:

1. Самой большой однократной дозой SMB может быть только наименьшее значение от:
    
    * значения, соответствующего текущей базальной скорости (с поправками autosens) на длительность, установленную в "Максимуме минут базала, которыми ограничивается SMB", например, количество базального инсулина за следующие 30 минут, или
    * половина требуемого в данный момент количества инсулина, или
    * оставшаяся часть maxIOB в настройках.

2. Возможно, вы обратите внимание на частые низкие временные базалы (называемые "low temp") или временные базалы по 0 ед/ч (называемые "zero temp"). Это происходит по соображениям безопасности и не имеет отрицательных последствий, если профиль установлен правильно. Кривая активного инсулина более значима, чем линия временного базала.

3. Дополнительные расчеты для прогнозирования гликемии, (например, для непредвиденного приема прищи UAM). Даже без ручного ввода количества углеводов, UAM может автоматически определить значительное увеличение уровней ГК вследствие приема пищи, повышения адреналина или других факторов и попытаться компенсировать повышение при помощи SMB. Для безопасности, эта функция работает и в обратном направлении и может остановить подачу супер микроболюса при неожиданном понижении ГК. Поэтому функция UAM всегда должна быть активирована в алгоритме SMB.

**Для использования SMB необходимо запустить [ цель 10 ](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb).**

См. также: [документацию OpenAPS по SMB в oref1](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) и [информацию Tim'а по SMB](http://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/).

### Максимальное значение ед/ч, на которое можно установить временный базал ("max-basal" OpenAPS)

Эта настройка безопасности определяет максимальную скорость временного базала помпы. Значение должно быть одинаковым и в помпе и AAPS и должно быть не менее чем в 3 раза выше наивысшей базальной скорости.

Пример:

Пример: Самый высокий базал вашего профиля в течение дня составляет 1.00 ед/ч. В этом случае рекомендуется установить максимум не менее 3 ед/ч.

Но любую величину установить не получится. AAPS задает 'жесткий предел' значения в зависимости от возраста пациента, профиль которого выбран в настройках. Самое низкое значение для детей и самое высокое для инсулинорезистентных взрослых.

AndroidAPS ограничивает эту величину следующим образом:

* Ребенок: 2
* Teenager: 5
* Взрослый: 10
* Инсулинорезистентный взрослый: 12
* Pregnant: 25

*See also [overview of hard-coded limits](../Usage/Open-APS-features.html#overview-of-hard-coded-limits).*

### Максимальное общее количество активного инсулина IOB, которое не может превысить OpenAPS (OpenAPS "max-iob")

This value determines which maxIOB has to be considered by AAPS running in closed loop mode. If the current IOB (e.g. after a meal bolus) is above the defined value, the loop stops dosing insulin until the IOB limit is below the given value.

Using the OpenAPS SMB, max-IOB is calculated differently than in OpenAPS AMA. In AMA, maxIOB was just a safety-parameter for basal IOB, while in SMB-mode, it also includes bolus IOB. A good start is

    maxIOB = средний болюс на еду + троекратный макс. базал
    

Be careful and patient and only change the settings step by step. It is different for anyone and also depends on the average total daily dose (TDD). For safety reason, there is a limit, which depends on the patient age . The 'hard limit' for maxIOB is higher than in [AMA](../Usage/Open-APS-features.html#max-u-hr-a-temp-basal-can-be-set-to-openaps-max-basal).

* Ребенок: 3
* Teenager: 7
* Взрослый: 12
* Инсулинорезистентный взрослый: 25
* Pregnant: 40

*See also [overview of hard-coded limits](../Usage/Open-APS-features.html#overview-of-hard-coded-limits).*

See also [OpenAPS documentation for SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb).

### Включить autosense AMA

Here, you can choose if you want to use the [sensitivity detection](../Configuration/Sensitivity-detection-and-COB.md) 'autosense' or not.

### Включить супер микро болюс SMB

Here you can enable or completely disable SMB feature.

### Включить супер микро болюс при активных углеводах COB

SMB is working when there is COB active.

### Включить супер микро болюс SMB с временными целями

SMB is working when there is a low or high temporary target active (eating soon, activity, hypo, custom)

### Включить супер микро болюс SMB с высокими значениями временных целей

SMB is working when there is a high temporary target active (activity, hypo). This option can limit other SMB Settings, i.e. if ‘SMB with temp targets’ is enabled and ‘SMB with high temp targets’ is deactivated, SMB just works with low and not with high temp targets. It is the same for enabled SMB with COB: if 'SMB with high temp target' is deactivated, there is no SMB with high temp target even if COB is active.

### Всегда включать супер микро болюс SMB

SMB is working always (independent of COB, temp targets or boluses). По соображениям безопасности, эта опция возможна только для источников ГК с хорошей системой фильтрации зашумленых данных. Сейчас она работает только с Dexcom G5 и модифицированным приложением Dexcom (патч) или с «нативным режимом» в xDrip+. Если значение ГК имеет слишком большое отклонение, G5 не отправляет его и ожидает следующего значения через 5 минут.

For other CGM/FGM like Freestyle Libre, ‘SMB always’ is deactivated until xDrip+ has a better noise smoothing plugin. You can find more [here](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### Активировать супер микро болюс SMB после углеводов

SMB is working for 6h after carbohydrates , even if COB is at 0. По соображениям безопасности, эта опция возможна только для источников ГК с хорошей системой фильтрации зашумленых данных. Сейчас она работает только с Dexcom G5 и модифицированным приложением Dexcom (патч) или с «нативным режимом» в xDrip+. Если значение ГК имеет слишком большое отклонение, G5 не отправляет его и ожидает следующего значения через 5 минут.

For other CGM/FGM like Freestyle Libre, 'SMB always' is deactivated until xDrip+ has a better noise smoothing plugin. You can find [more information here](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### Верхний лимит минут базала при SMB

This is an important safety setting. This value determines how much SMB can be given based on the amount of basal insulin in a given time, when it is covered by COBs.

This makes the SMB more aggressive. For the beginning, you should start with the default value of 30 minutes. After some experience, you can increase the value with 15 minutes steps and watch how these changes are affecting.

It is recommended not to set the value higher than 90 minutes, as this would lead to a point where the algorithm might not be able to adjust a decreasing BG with 0 IE/h basal ('zero-temp'). You should also set alarms, especially if you are still testing new settings, which warns you before running into hypos.

Default value: 30 min.

### Включить непредвиденный прием пищи UAM

With this option enabled, the SMB algorithm can recognize unannounced meals. This is helpful, if you forget to tell AndroidAPS about your carbs or estimate your carbs wrong and the amount of entered carbs is wrong or if a meal with lots of fat and protein has a longer duration than expected. Without any carb entry, UAM can recognize fast glucose increasments caused by carbs, adrenaline, etc, and tries to adjust it with SMBs. This also works the opposite way: if there is a fast glucose decreasement, it can stop SMBs earlier.

**Therefore, UAM should always be activated when using SMB.**

### Высокая врем. цель temptarget повышает чувствительность

If you have this option enabled, the insulin sensitivity will be increased while having a temporary target over 100 mg/dl or 5.6 mmol/l. This means, the ISF will rise while IC and basal will decrease.

### Низкая временная цель temptarget снижает чувствительность

If you have this option enabled, the insulin sensitivity will be decreased while having a temporary target lower than 100 mg/dl or 5.6 mmol/l. This means, the ISF will decrease while IC and basal will rise.

### Дополнительные настройки

**Always use short average delta instead of simple data** If you enable this feature, AndroidAPS uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps AndroidAPS to work more steady with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then AndroidAPS can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know, what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump.

Default value: 4 (shouldn’t be changed unless you really need to and know, what you are doing)

* * *

## Расширенный мастер болюса (AMA)

AMA, the shortform of "advanced meal assist" is an OpenAPS feature from 2017 (oref0). OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus if you enter carbs reliably.

You can find more information in the [OpenAPS documentation](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### Максимальное значение ед/ч, на которое можно установить временный базал ("max-basal" OpenAPS)

This safety setting helps AndroidAPS from ever being capable of giving a dangerously high basal rate and limits the temp basal rate to x U/h. It is advised to set this to something sensible. A good recommendation is to take the highest basal rate in your profile and multiply it by 4 and at least 3. For example, if the highest basal rate in your profile is 1.0 U/h you could multiply that by 4 to get a value of 4 U/h and set the 4 as your safety parameter.

You cannot chose any value: For safety reason, there is a 'hard limit', which depends on the patient age. The 'hard limit' for maxIOB is lower in AMA than in SMB. For children, the value is the lowest while for insulin resistant adults, it is the biggest.

The hardcoded parameters in AndroidAPS are:

* Ребенок: 2
* Teenager: 5
* Взрослый: 10
* Инсулинорезистентный взрослый: 12
* Pregnant: 25

*See also [overview of hard-coded limits](../Usage/Open-APS-features.html#overview-of-hard-coded-limits).*

### Максимальное общее количество активного инсулина IOB (ед.), которое не может превысить OpenAPS ("max-iob" в OpenAPS)

This parameter limits the maximum of basal IOB where AndroidAPS still works. If the IOB is higher, it stops giving additional basal insulin until the basal IOB is under the limit.

The default value is 2, but you should be rise this parameter slowly to see how much it affects you and which value fits best. It is different for anyone and also depends on the average total daily dose (TDD). For safety reason, there is a limit, which depends on the patient age . The 'hard limit' for maxIOB is lower in AMA than in SMB.

* Ребенок: 3
* Teenager: 5
* Взрослый: 7
* Инсулинорезистентный взрослый: 12
* Pregnant: 25

*See also [overview of hard-coded limits](../Usage/Open-APS-features.html#overview-of-hard-coded-limits).*

### Включить autosense AMA

Here, you can chose, if you want to use the [sensitivity detection](../Configuration/Sensitivity-detection-and-COB.md) autosense or not.

### Autosense также подстраивает цели

If you have this option enabled, autosense can adjust targets (next to basal, ISF and IC), too. This lets AndroidAPS work more 'aggressive' or not. The actual target might be reached faster with this.

### Дополнительные настройки

**Always use short average delta instead of simple data** If you enable this feature, AndroidAPS uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps AndroidAPS to work more steady with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then AndroidAPS can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know, what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump.

Default value: 4 (shouldn’t be changed unless you really need to and know, what you are doing)

**Bolus snooze dia divisor** The feature “bolus snooze” works after a meal bolus. AAPS doesn’t set low temporary basal rates after a meal in the period of the DIA divided by the “bolus snooze”-parameter. The default value is 2. That means with a DIA of 5h, the “bolus snooze” would be 5h : 2 = 2.5h long.

Default value: 2

## Overview of hard-coded limits

<table border="1">
  
<thead>
  <tr>
    <th width="200"></th>
    <th width="75">Child</th>
    <th width="75">Teenager</th>
    <th width="75">Adult</th>
    <th width="75">Insulin resistant adult</th>
    <th width="75">Pregnant</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>MAXBOLUS</td>
    <td>5,0</td>
    <td>10,0</td>
    <td>17,0</td>
    <td>25,0</td>
    <td>60,0</td>
  </tr>
  <tr>
    <td>MINDIA</td>
    <td>5,0</td>
    <td>5,0</td>
    <td>5,0</td>
    <td>5,0</td>
    <td>5,0</td>
  </tr>
  <tr>
    <td>MAXDIA</td>
    <td>7,0</td>
    <td>7,0</td>
    <td>7,0</td>
    <td>7,0</td>
    <td>10,0</td>
  </tr>
  <tr>
    <td>MINIC</td>
    <td>2,0</td>
    <td>2,0</td>
    <td>2,0</td>
    <td>2,0</td>
    <td>0,3</td>
  </tr>
  <tr>
    <td>MAXIC</td>
    <td>100,0</td>
    <td>100,0</td>
    <td>100,0</td>
    <td>100,0</td>
    <td>100,0</td>
  </tr>
  <tr>
    <td>MAXIOB_AMA</td>
    <td>3,0</td>
    <td>3,5</td>
    <td>7,0</td>
    <td>12,0</td>
    <td>25,0</td>
  </tr>
  <tr>
    <td>MAXIOB_SMB</td>
    <td>3,0</td>
    <td>7,0</td>
    <td>12,0</td>
    <td>25,0</td>
    <td>45,0</td>
  </tr>
  <tr>
    <td>MAXBASAL</td>
    <td>2,0</td>
    <td>5,0</td>
    <td>10,0</td>
    <td>12,0</td>
    <td>25,0</td>
  </tr>
</tbody>
</table>