# Функции OpenAPS

(Open-APS-features-autosens)=

## Autosens

* Autosens-это алгоритм, который отслеживает отклонения ГК (позитивное/отрицательное/нейтральное).
* Он пытается определить, насколько вы чувствительны/резистентны на основании этих отклонений.
* Реализация oref в ** OpenAPS ** выполняется на основе комбинации данных за 24 и 8 часов. Он использует тот, который является более чувствительным.
* В версиях до AAPS 2.7 пользователю приходилось выбирать между 8 или 24 часами вручную.
* Начиная с AAPS 2.7 Autosens сам будет переключаться между 24 и 8 часами для вычисления чувствительности. Он выберет более чувствительный вариант. 
* Если пользователи перешли с oref1, они, вероятно, заметят, что система может быть менее динамичной из-за различий в 24 или 8 часах чувствительности.
* Замена канюли или изменение профиля сбросит Autosens назад на 100% (переключение профиля по процентам с установкой продолжительности не сбрасывает Autosens).
* Autosens настраивает базал и ISF ( примерно так же как изменение профиля в процентах).
* Если постоянно есть углеводы в течение длительного периода, не внося данные в систему, autosens будет менее эффективен в этот период, так как углеводы исключены из расчетов дельты ГК.

(Open-APS-features-super-micro-bolus-smb)=

## Супер микроболюс (SMB)

SMB, the shortform of 'super micro bolus', is the latest OpenAPS feature (from 2018) within the Oref1 algorithm. In contrast to AMA, SMB does not use temporary basal rates to control glucose levels, but mainly **small super microboluses**. In situations where AMA would add 1.0 IU insulin using a temporary basal rate, SMB delivers several super microboluses in small steps at **5 minute intervals**, e.g. 0.4 IU, 0.3 IU, 0.2 IU and 0.1 IU. At the same time (for safety reasons) the actual basal rate is set to 0 IU/h for a certain period to prevent overdose (**'zero-temping'**). This allows the system adjust the blood glucose faster than with the temporary basal rate increase in AMA.

Благодаря микроболюсам SMB для блюд, содержащих только "медленные" углеводы, достаточно сообщить системе о запланированном количестве углеводов, в остальном положившись на AAPS. Однако это может дать более высокие постпрандиальные (после приема пищи) пики, поскольку преболюс не вводился. Или, если нужен пре-болюс, можно ввести ** стартовый болюс**, который ** только частично** покрывает углеводы (например, 2/3 от расчетного количества), а остальное введут микроболюсы SMB.

Функция SMB содержит некоторые механизмы безопасности:

1. Самой большой однократной дозой SMB может быть только наименьшее значение от:
    
    * значения, соответствующего текущей базальной скорости (с поправками autosens) на длительность, установленную в "Максимуме минут базала, которыми ограничивается SMB", например, количество базального инсулина за следующие 30 минут, или
    * половина требуемого в данный момент количества инсулина, или
    * оставшаяся часть maxIOB в настройках.

2. Возможно, вы обратите внимание на частые низкие временные базалы (называемые "low temp") или временные базалы по 0 ед/ч (называемые "zero temp"). Это происходит по соображениям безопасности и не имеет отрицательных последствий, если профиль установлен правильно. Кривая активного инсулина более значима, чем линия временного базала.

3. Дополнительные расчеты для прогнозирования гликемии, (например, для непредвиденного приема прищи UAM). Даже без ручного ввода количества углеводов, UAM может автоматически определить значительное увеличение уровней ГК вследствие приема пищи, повышения адреналина или других факторов и попытаться компенсировать повышение при помощи SMB. Для безопасности, эта функция работает и в обратном направлении и может остановить подачу супер микроболюса при неожиданном понижении ГК. Поэтому функция UAM всегда должна быть активирована в алгоритме SMB.

**Для микроболюсов SMB необходимо запустить [ цель 9 ](Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb).**

See also: [OpenAPS documentation for oref1 SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) and [Tim's info on SMB](https://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/).

(Open-APS-features-max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal)=

### Максимальное значение ед/ч, на которое можно установить временный базал ("max-basal" OpenAPS)

This safety setting determines the maximum temporary basal rate the insulin pump may deliver. The value should be the same in the pump and in AAPS and should be at least 3 times the highest single basal rate set.

Пример:

Your basal profile’s highest basal rate during the day is 1.00 U/h. Then a max-basal value of at least 3 U/h is recommended.

AAPS limits the value as a 'hard limit' according to the patients age you have selected under settings.

AAPS limits the value as follows:

* Ребенок: 2
* Подросток: 5
* Взрослый: 10
* Инсулинорезистентный взрослый: 12
* Беременная: 25

*See also [overview of hard-coded limits](Open-APS-features-overview-of-hard-coded-limits).*

(Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob)=

### Максимальное общее количество активного инсулина IOB, которое не может превысить OpenAPS (OpenAPS "max-iob")

Эта величина определяет максимальное значение активного инсулина IOB, при котором AAPS будет оставаться в режиме замкнутого цикла. If the current IOB (e.g. after a meal bolus) is above the defined value, the loop stops dosing insulin until the IOB limit is below the given value.

Using the OpenAPS SMB, max-IOB is calculated differently than in OpenAPS AMA. In AMA, maxIOB was just a safety-parameter for basal IOB, while in SMB-mode, it also includes bolus IOB. A good start is

    maxIOB = средний болюс на еду + троекратный макс. базал
    

Be careful and patient and only change the settings step by step. Эта величина для каждого своя, а также зависит от средней общей суточной дозы (TDD). For safety reason, there is a limit, which depends on the patient age . The 'hard limit' for maxIOB is higher than in [AMA](Open-APS-features-max-u-hr-a-temp-basal-can-be-set-to-openaps-max-basal).

* Ребенок: 3
* Подросток: 7
* Взрослый: 12
* Инсулинорезистентный взрослый: 25
* Беременная: 40

*See also [overview of hard-coded limits](Open-APS-features-overview-of-hard-coded-limits).*

See also [OpenAPS documentation for SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb).

### Включить autosense помощника болюса AMA

Here, you can choose if you want to use the [sensitivity detection](../Configuration/Sensitivity-detection-and-COB.md) 'autosens' or not.

(Open-APS-features-enable-smb)=

### Включить супер микро болюс SMB

Включите, чтобы использовать функционал SMB. Если отключено, то SMB не вводятся.

### Enable SMB with high temp targets

Если включен этот параметр, SMB будут разрешены, но не обязательно включены, когда действует высокая временная цель (что-либо выше 100 мг/дл независимо от цели профиля). Эта опция нужна для отключения микроболюсов SMB, когда параметр отключен. Например, если эта опция отключена, микроболюсы можно отключить, установив временную цель выше 100mg/dl. Эта опция также отключает SMB независимо от того, какое другое условие пытается включить микроболюс.

Если этот параметр включен, SMB будут включены только с высокой временной целью, если при этом также включены SMB с временными целями.

(Open-APS-features-enable-smb-always)=

### Enable SMB always

Если включена эта настройка, микроболюсы SMB работают всегда (независимо от активных углеводов COB, временных целей или болюсов). If this setting is enabled, the rest of the enable settings below will have no effect. Однако, если отключена настройка «Включить SMB с высокими временными целями» и задается высокая временная цель, SMB будут отключены. По соображениям безопасности, эта опция возможна только для источников ГК с хорошей системой фильтрации зашумленных данных. Currently it is only an available option with a Dexcom G5 or G6, if using the ['Build your own Dexcom App'](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) or “native mode” in xDrip+. Если значение ГК имеет слишком большое отклонение, G5/G6 не отправляет его и ожидает следующего значения через 5 минут.

Для других систем мониторинга, таких как Freestyle Libre, функция ‘всегда включать SMB’ будет оставаться неактивной пока в xDrip+ не появится более адекватное расширение для сглаживания данных. Подробнее [здесь](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### Enable SMB with COB

Если этот параметр включен, SMB включаются при активных углеводах COB больше 0.

### Enable SMB with temp targets

Если включена эта настройка, то SMB включаются при наличии любой временной цели (ожидаемый прием пищи, нагрузка, гипо, пользовательский). Если эта настройка включена, но отключено "Включить SMB с высокими временными целями", SMB будут включаться при низком значении цели (менее 100мг/дл), но отключены, если установлена высокая временная цель.

### Активировать супер микро болюс SMB после углеводов

Если это включено, то микроболюсы SMB работают в течение 6 часов после внесения углеводов, даже если значение COB достигло 0. For safety reasons, this option is only available for BG sources with a nice filtering system for noisy data. Currently it is only an available option with a Dexcom G5 or G6 if using the ['Build your own Dexcom App'](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) or “native mode” in xDrip+. Если значение ГК имеет слишком большое отклонение, G5/G6 не отправляет его и ожидает следующего значения через 5 минут.

For other CGM/FGM like Freestyle Libre, 'Enable SMB after carbs' is deactivated until xDrip+ has a better noise smoothing plugin. You can find [more information here](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

(Open-APS-features-max-minutes-of-basal-to-limit-smb-to)=

### Верхний лимит минут базала при SMB

This is an important safety setting. This value determines how much SMB can be given based on the amount of basal insulin in a given time, when it is covered by COBs.

Увеличение этого значения позволяет микроболюсам SMB вести себя более агрессивно. Начать следует со значения по умолчанию в 30 минут. После некоторого опыта, увеличивайте это значение приращениями по 15 минут и наблюдайте за эффектом при многократном приеме пищи.

Рекомендуется не устанавливать это значение выше 90 минут, так как существует вероятность достижения точки, после которой алгоритм не сможет контролировать снижающуюся гликемию при нулевом временном базале 0 ед/ч ('zero-temp'). Следует также установить оповещения о низкой ГК, особенно если вы только тестируете новые настройки.

Default value: 30 min.

### Включить непредвиденный прием пищи UAM

With this option enabled, the SMB algorithm can recognize unannounced meals. Это полезно, если вы забыли сообщить алгоритму AAPS о съеденных углеводах или неверно оценили их количество или съеденное богато жирами и белками и действует дольше чем ожидалось. Без ввода углеводов алгоритм UAM может распознать быстрое увеличение глюкозы, вызванное углеводами, адреналином и т. д., и попытается компенсировать его при помощи микроболюсов SMB. И наоборот: если гликемия падает быстро, то настройка поможет остановить SMB раньше времени.

**Therefore, UAM should always be activated when using SMB.**

### Высокая врем. цель temptarget повышает чувствительность

Если эта опция включена, то чувствительность инсулина будет увеличена при временной цели более 100 мг/дл или 5.6 ммол/л. This means, the ISF will rise while IC and basal will decrease. Это сделает поведение алгоритма AAPS менее агрессивным, когда вы устанавливаете высокую временную цель.

### Низкая временная цель temptarget снижает чувствительность

If you have this option enabled, the insulin sensitivity will be decreased while having a temporary target lower than 100 mg/dl or 5.6 mmol/l. This means, the ISF will decrease while IC and basal will rise. This will effectively make AAPS more aggressive when you set a low temp target.

### Дополнительные настройки

**Always use short average delta instead of simple data** If you enable this feature, AAPS uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps AAPS to be steadier with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that AAPS will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump and/or profile. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then AAPS can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that AAPS will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump and/or profile.

Default value: 4 (shouldn’t be changed unless you really need to and know what you are doing)

* * *

(Open-APS-features-advanced-meal-assist-ama)=

## Расширенный мастер болюса (AMA)

AMA, the short form of "advanced meal assist" is an OpenAPS feature from 2017 (oref0). OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus if you enter carbs reliably.

You can find more information in the [OpenAPS documentation](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

(Open-APS-features-max-u-hr-a-temp-basal-can-be-set-to-openaps-max-basal)=

### Максимальное значение ед/ч, на которое можно установить временный базал ("max-basal" OpenAPS)

This safety setting helps AAPS from ever being capable of giving a dangerously high basal rate and limits the temp basal rate to x U/h. It is advised to set this to something sensible. A good recommendation is to take the highest basal rate in your profile and multiply it by 4 and at least 3. For example, if the highest basal rate in your profile is 1.0 U/h you could multiply that by 4 to get a value of 4 U/h and set the 4 as your safety parameter.

You cannot chose any value: For safety reason, there is a 'hard limit', which depends on the patient age. The 'hard limit' for maxIOB is lower in AMA than in SMB. For children, the value is the lowest while for insulin resistant adults, it is the biggest.

The hardcoded parameters in AAPS are:

* Ребенок: 2
* Подросток: 5
* Взрослый: 10
* Инсулинорезистентный взрослый: 12
* Беременная: 25

*See also [overview of hard-coded limits](Open-APS-features-overview-of-hard-coded-limits).*

### Максимальное общее количество активного инсулина IOB (ед.), которое не может превысить OpenAPS ("max-iob" в OpenAPS)

This parameter limits the maximum of basal IOB where AAPS still works. If the IOB is higher, it stops giving additional basal insulin until the basal IOB is under the limit.

The default value is 2, but you should be rise this parameter slowly to see how much it affects you and which value fits best. It is different for anyone and also depends on the average total daily dose (TDD). For safety reason, there is a limit, which depends on the patient age . The 'hard limit' for maxIOB is lower in AMA than in SMB.

* Ребенок: 3
* Подросток: 5
* Взрослый: 7
* Инсулинорезистентный взрослый: 12
* Беременная: 25

*See also [overview of hard-coded limits](Open-APS-features-overview-of-hard-coded-limits).*

### Включить autosense помощника болюса AMA

Here, you can chose, if you want to use the [sensitivity detection](../Configuration/Sensitivity-detection-and-COB.md) autosens or not.

### Autosense также подстраивает цели

If you have this option enabled, autosens can adjust targets (next to basal and ISF), too. This lets AAPS work more 'aggressive' or not. The actual target might be reached faster with this.

### Дополнительные настройки

**Always use short average delta instead of simple data** If you enable this feature, AAPS uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps AAPS to work more steady with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that AAPS will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then AAPS can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know, what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that AAPS will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump.

Default value: 4 (shouldn’t be changed unless you really need to and know, what you are doing)

**Bolus snooze dia divisor** The feature “bolus snooze” works after a meal bolus. AAPS doesn’t set low temporary basal rates after a meal in the period of the DIA divided by the “bolus snooze”-parameter. The default value is 2. That means with a DIA of 5h, the “bolus snooze” would be 5h : 2 = 2.5h long.

Default value: 2

* * *

(Open-APS-features-overview-of-hard-coded-limits)=

## Overview of hard-coded limits

<table border="1">
  
<thead>
  <tr>
    <th width="200"></th>
    <th width="75">ребенок</th>
    <th width="75">Подросток</th>
    <th width="75">взрослый</th>
    <th width="75">Инсулинорезистентный взрослый</th>
    <th width="75">Беременная</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>MAXBOLUS</td>
    <td>5,0</td>
    <td>10,0</td>
    <td>17 0</td>
    <td>25 0</td>
    <td>60 0</td>
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
    <td>9,0</td>
    <td>9,0</td>
    <td>9,0</td>
    <td>9,0</td>
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
    <td>5,0</td>
    <td>7,0</td>
    <td>12 0</td>
    <td>25 0</td>
  </tr>
  <tr>
    <td>MAXIOB_SMB</td>
    <td>7,0</td>
    <td>13,0</td>
    <td>22,0</td>
    <td>30,0</td>
    <td>70,0</td>
  </tr>
  <tr>
    <td>MAXBASAL</td>
    <td>2,0</td>
    <td>5,0</td>
    <td>10,0</td>
    <td>12 0</td>
    <td>25 0</td>
  </tr>
</tbody>
</table>