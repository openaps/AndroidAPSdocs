# Key AAPS features

(Open-APS-features-autosens)=

## Autosens

- Autosens is an algorithm which looks at blood glucose deviations (positive/negative/neutral).
- Он пытается определить, насколько вы чувствительны/резистентны на основании этих отклонений.
- Реализация oref в ** OpenAPS ** выполняется на основе комбинации данных за 24 и 8 часов. Он использует тот, который является более чувствительным.
- In versions prior to **AAPS 2.7**, the user had to choose between 8 or 24 hours manually.
- From **AAPS 2.7** on Autosens in **AAPS** will switch between a 24 and 8 hours window for calculating sensitivity. It will pick whichever one is more sensitive. 
- Если пользователи перешли с oref1, они, вероятно, заметят, что система может быть менее динамичной из-за различий в 24 или 8 часах чувствительности.
- Замена канюли или изменение профиля сбросит Autosens назад на 100% (переключение профиля по процентам с установкой продолжительности не сбрасывает Autosens).
- Autosens настраивает базал и ISF ( примерно так же как изменение профиля в процентах).
- If continuously eating carbs over an extended period, Autosens will be less effective during that period as carbs are excluded from **BG** delta calculations.

(Open-APS-features-super-micro-bolus-smb)=

## Супер микроболюс (SMB)

**SMB**, the shortform of **Super micro bolus**, is an OpenAPS feature introduced from 2018 onwards, within the Oref1 algorithm. In contrast to **AMA**, **SMB** does not use temporary basal rates to control glucose levels, but mainly **small super micro boluses**. In situations where **AMA** would add 1.0 IU insulin using a temporary basal rate, **SMB** delivers several super micro boluses in small steps at **5 minute intervals**, e.g. 0.4 IU, 0.3 IU, 0.2 IU and 0.1 IU. В то же самое время (по соображениям безопасности) фактический базал устанавливается на 0 ед/ч на определенный период, чтобы предотвратить передозировку (т.н. **"нулевой базал"**). This allows the system to adjust the blood glucose faster than with the temporary basal rate increase in **AMA**.

Thanks to SMB, it may be sufficient for meals containing only "slow" carbs to inform the system of the planned amount of carbohydrate and leave the rest to **AAPS**. Однако это может дать более высокие постпрандиальные (после приема пищи) пики, поскольку преболюс не вводился. Or you can give, if necessary with pre-bolusing, a **start bolus**, which **only partly** covers the carbohydrates (e.g. 2/3 of the estimated amount) and let **SMB** deliver the rest of the insulin.

![SMBs on main graph](../images/SMBs.png)

SMBs are shown on the main graph with blue triangles. Tap on the triangle to see how much insulin was delivered, or use the [Treatments tab](#aaps-screens-treatments).

**SMB's** features contain some safety mechanisms:

1. **Largest single SMB dose**  
    The largest single SMB dose can only be the smallest value of:
    
    - значения, соответствующего текущей базальной скорости (с поправками autosens) на длительность, установленную в "Максимуме минут базала, которыми ограничивается SMB", например, количество базального инсулина за следующие 30 минут, или
    - половина требуемого в данный момент количества инсулина, или
    - оставшаяся часть maxIOB в настройках.

2. **Low temp basal rates**  
    Low temporary basal rates (called 'low temps') or temporary basal rates at 0 U/h (called 'zero-temps') are activated more in **SMB**. This is by design for safety reasons and has no negative effects if the **Profile** is set correctly. On the main graph, the IOB curve (yellow thin line) is more meaningful than the course of the temporary basal rates.

3. **Un-Announced Meals**  
    Additional calculations to predict the course of glucose, e.g. by **UAM** (un-announced meals). Even without manual carbohydrate input from the user, **UAM** can automatically detect a significant increase in glucose levels due to meals, adrenaline or other influences and try to adjust this with **SMB**. Для безопасности, эта функция работает и в обратном направлении и может остановить подачу супер микроболюса при неожиданном понижении ГК. Поэтому функция UAM всегда должна быть активирована в алгоритме SMB.

**You must have started [objective 9](#objectives-objective9) to use SMB.**

See also :

- [OpenAPS documentation for SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb).
- [OpenAPS documentation for oref1 SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)
- [Tim's info on SMB](https://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/).

The settings for OpenAPS SMB are described below.

(Open-APS-features-max-u-h-a-temp-basal-can-be-set-to)=

### Max U/h a temp basal can be set to

Эта настройка безопасности определяет максимальную скорость временного базала помпы. It is also known as **max-basal**.

Значение задается в единицах в час (ед./ч). Рекомендуется установить какое-то разумное значение. A good recommendation for setting this parameter is:

    max-basal = highest basal rate x 4
    

Например, если максимальная скорость базала в вашем профиле была 0,5 ед./ч, то, умножив ее на 4, вы получите значение 2 ед./ч.

**AAPS** limits this value as a 'hard limit' according to [Preferences > Treatments safety > Patient Type](#preferences-patient-type). The hard limits are as follows:

- Ребенок: 2
- Подросток: 5
- Взрослый: 10
- Инсулинорезистентный взрослый: 12
- Беременная: 25

*See also [overview of hard-coded limits](#Open-APS-features-overview-of-hard-coded-limits).*

(Open-APS-features-maximum-total-iob-openaps-cant-go-over)=

### Maximum total IOB OpenAPS can’t go over

This value determines the maximum **Insulin on Board** (basal and bolus IOB) that **AAPS** will remain under while running in closed loop mode. It is also known as **maxIOB**.

Если текущий активный инсулин IOB (например, после болюса на еду) превышает определенную величину, то алгоритм останавливает подачу инсулина до тех пор, пока предел IOB не будет ниже заданного значения.

A good start for setting this parameter is:

    maxIOB = средний болюс на еду + троекратный макс. базал
    

Be careful and patient when adjusting your **max-IOB**. Эта величина для каждого своя, а также зависит от средней общей суточной дозы (TDD).

**AAPS** limits this value as a 'hard limit' according to [Preferences > Treatments safety > Patient Type](#preferences-patient-type). The hard limits are as follows:

- Ребенок: 3
- Подросток: 7
- Взрослый: 12
- Инсулинорезистентный взрослый: 25
- Беременная: 40

*See also [overview of hard-coded limits](#Open-APS-features-overview-of-hard-coded-limits).*

Note : When using **SMB**, the **max-IOB** is calculated differently than in AMA. In **AMA**, maxIOB is a safety-parameter for basal **IOB**, while in SMB-mode, it also includes bolus IOB.

См. также [документацию OpenAPS по SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb).

### Enable dynamic sensitivity

This is the [DynamicISF](../DailyLifeWithAaps/DynamicISF.md) feature. When enabled, new settings become available. Settings are explained on the [DynamicISF](#dyn-isf-preferences) page.

#### Высокая врем. цель temptarget повышает чувствительность

Если эта опция включена, то чувствительность инсулина будет увеличена при временной цели более 100 мг/дл или 5.6 ммол/л. Это означает, что чувствительность к инсулину ISF возрастет, в то время как углеводный коэффициент IC и базал уменьшатся. This will effectively make **AAPS** less aggressive when you set a high temp target.

#### Низкая временная цель temptarget снижает чувствительность

Если эта опция включена, то параметр чувствительность инсулина будет снижен при временной цели ниже 100 мг/дл или 5.6 ммол/л. Это означает, что чувствительность к инсулину ISF снизится, в то время как IC и базал увеличатся. This will effectively make **AAPS** more aggressive when you set a low temp target.

### Enable Autosens feature

This is the [Autosens](#Open-APS-features-autosens) feature. When using DynamicISF, Autosens can not be used, since they are two different algorithms altering the same variable (sensitivity).

Autosens looks at blood glucose deviations (positive/negative/neutral). На основе отклонений он пытается выяснить, насколько вы чувствительны/резистентны к инсулину и корректирует базальную скорость и коэффициент чувствительности к инсулину ISF.

When enabled, new settings become available.

### Sensitivity raises target

If this option is enabled, the sensitivity detection (autosens) can raise the target when sensitivity is detected (below 100%). In this case your target will be raised by the percentage of the detected sensitivity.

If the target is modified due to sensitivity detection, it will be displayed with a green background on your home screen.

![Target modified by autosens](../images/Home2020_DynamicTargetAdjustment.png)

This setting is available when one of "Enable dynamic sensitivity" or "Enable Autosens feature" are enabled.

### Resistance lowers target

If this option is enabled, the sensitivity detection (autosens) can lower the target when resistance is detected (above 100%). In this case your target will be lowered by the percentage of the detected resistance.

This setting is available when one of "Enable dynamic sensitivity" or "Enable Autosens feature" are enabled.

### Включить супер микро болюс SMB

Включите, чтобы использовать функционал SMB. If disabled, no **SMBs** will be given.

When enabled, new settings become available.

(Open-APS-features-enable-smb-with-high-temp-targets)=

#### Включить супер микро болюс SMB с высокими значениями временных целей

If this setting is enabled, **SMBs** will still be delivered even if the user has selected a high **Temp Target** (defined as anything above 100mg/dL or 5.6mmol/l, regardless of **Profile** target). Эта опция нужна для отключения микроболюсов SMB, когда параметр отключен. For example, if this option is disabled, **SMBs** can be disabled by setting a **Temp Target** above 100mg/dL or 5.6mmol/l. This option will also disable **SMBs** regardless of what other condition is trying to enable SMB.

If this setting is enabled, **SMB** will only be enabled with a high temp target if **Enable SMB with temp targets** is also enabled.

(Open-APS-функции-включать-микроболюсы-всегда)=

#### Всегда включать супер микро болюс SMB

If this setting is enabled, SMB is enabled always enabled(independent of COB, temp targets or boluses). Если этот параметр включен, остальные параметры включения не будут иметь эффекта. However, if **Enable SMB with high temp targets** is disabled and a high temp target is set, SMBs will be disabled.

This setting is only available if **AAPS** detects that you are using a [reliable BG source](#GettingStarted-TrustedBGSource), with advanced filtering. FreeStyle Libre 1 is not considered a reliable source due to the risk of infinitely repeating old BG data in case of sensor failure.

Noisy data could cause **AAPS** to believe BG is rising really fast, resulting in the administration of unnecessary SMBs. For more information about noise and data smoothing, see [here](../CompatibleCgms/SmoothingBloodGlucoseData.md).

#### Включать супер микро болюсы при активных углеводах COB

If this setting is enabled, SMB is enabled when the COB is greater than 0.

This setting is not visible if "Enable SMB always" is switched on.

#### Включать супер микро болюс SMB с временными целями

If this setting is enabled, SMB is enabled when there is any temp target set (eating soon, activity, hypo, custom). If this setting is enabled but **Enable SMB with high temp targets** is disabled, SMB will be enabled when a low temp target is set (below 100mg/dL or 5.6mmol/l) but disabled when a high temp target is set.

This setting is not visible if "Enable SMB always" is switched on.

#### Активировать супер микро болюс SMB после углеводов

If enabled, SMB is enabled for 6h after carbohydrates are announced, even if COB has reached 0.

For safety reasons, this setting is only available if **AAPS** detects that you are using a reliable BG source. It is not visible if "Enable SMB always" is switched on.

This setting is only available if **AAPS** detects that you are using a [reliable BG source,](#GettingStarted-TrustedBGSource) with advanced filtering. FreeStyle Libre 1 is not considered a reliable source due to the risk of infinitely repeating old BG data in case of sensor failure.

Noisy data could cause **AAPS** to believe BG is rising really fast, resulting in the administration of unnecessary SMBs. For more information about noise and data smoothing, see [here](../CompatibleCgms/SmoothingBloodGlucoseData.md).  
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

*See also [overview of hard-coded limits](#Open-APS-features-overview-of-hard-coded-limits).*

### Максимальное общее количество активного инсулина IOB (ед.), которое не может превысить OpenAPS ("max-iob" в OpenAPS)

This parameter limits the maximum of basal IOB where **AAPS** still works. If the IOB is higher, it stops giving additional basal insulin until the basal IOB is under the limit.

The default value is 2, but you should rise this parameter slowly to see how much it affects you and which value fits best. It is different for anyone and also depends on the average total daily dose (TDD). For safety reason, there is a limit, which depends on the patient age . The 'hard limit' for maxIOB is lower in AMA than in SMB.

- Ребенок: 3
- Подросток: 5
- Взрослый: 7
- Инсулинорезистентный взрослый: 12
- Беременная: 25

*See also [overview of hard-coded limits](#Open-APS-features-overview-of-hard-coded-limits).*

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