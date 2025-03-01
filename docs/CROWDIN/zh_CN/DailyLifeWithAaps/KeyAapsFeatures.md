# Key AAPS features

(Open-APS-features-autosens)=

## Autosens

- Autosens是一种算法，它观察血糖偏差（正/负/中性）。
- 它将尝试根据这些偏差来确定你对胰岛素的敏感或抵抗程度。
- **OpenAPS**中的oref实现基于24小时和8小时的数据组合。 它使用其中更敏感的一个。
- 在AAPS 2.7之前的版本中，用户需要手动选择8小时或24小时。
- 从**AAPS 2.7**开始，Autosens将在**AAPS**中在24小时和8小时窗口之间切换以计算敏感性。 它将选择更敏感的那个。 
- 如果用户来自oref1，他们可能会注意到系统可能对变化不太敏感，因为敏感性可能在24小时或8小时之间变化。
- 更换管路或更改配置文件会将Autosens比率重置为100%（具有持续时间的百分比配置文件切换不会重置autosens）。
- Autosens会调整你的基础率和ISF（即：模拟配置文件切换的作用）。
- 如果在长时间内持续摄入碳水化合物，Autosens在这段时间内将不太有效，因为碳水化合物被排除在BG增量计算之外。

(Open-APS-features-super-micro-bolus-smb)=

## 超级微型大剂量（SMB）

**SMB**是**Super Micro Bolus（超级微型大剂量）**的简称，是自2018年起在Oref1算法中引入的OpenAPS功能。 与**AMA**相比，**SMB**不使用临时基础率来控制血糖水平，而主要使用**微小剂量输注**。 在**AMA**会使用临时基础率增加1.0 IU胰岛素的情况下，**SMB**则以小步骤在**5分钟间隔**内分几次进行超微量输注，例如0.4 IU、0.3 IU、0.2 IU和0.1 IU。 同时（出于安全原因），实际基础率会在一定时间内被设置为0 IU/h，以防止过量注射（**“零临时基础率”**）。 This allows the system to adjust the blood glucose faster than with the temporary basal rate increase in **AMA**.

得益于SMB，对于仅含有“慢速”碳水化合物的餐食，可能只需告知系统计划摄入的碳水化合物量，其余部分交给**AAPS**处理即可。 然而，这可能会导致餐后（用餐后）血糖峰值更高，因为无法进行餐前输注。 或者，如果必要的话，你可以进行餐前输注，给予一个**起始输注量**，这个输注量**仅部分**覆盖碳水化合物（例如，估计量的2/3），并让**SMB**输注剩余的胰岛素。

![主图上的SMB](../images/SMBs.png)

SMB在主图表上以蓝色三角形显示。 点击三角形可以查看输注了多少胰岛素，或者使用[治疗选项卡](#aaps-screens-treatments)。

**SMB**的功能包含一些安全机制：

1. **最大单次SMB剂量**  
    最大的单次SMB剂量只能是以下值中的最小值：
    
    - 根据“限制SMB的最大基础分钟数”设置中设置的时间（例如，接下来30分钟的基础量），对应于当前基础率（由autosens调整）的值，或
    - 当前所需胰岛素量的一半，或
    - 设置中你的maxIOB值的剩余部分。

2. **低临时基础率**  
    在**SMB**中，低临时基础率（称为“低临时”）或0 U/h的临时基础率（称为“零临时”）被更频繁地激活。 这是出于安全考虑的设计，如果**配置文件**设置正确，则不会产生负面影响。 在主图表上，IOB曲线（黄色细线）比临时基础率的变化更有意义。

3. **未宣布的餐食**  
    通过额外的计算来预测血糖的变化趋势，例如使用**UAM**（未宣布的餐食）功能。 即使用户没有手动输入碳水化合物量，**UAM**也能自动检测到由于进餐、肾上腺素或其他因素导致的血糖显著升高，并尝试通过**SMB**进行调整。 为了安全起见，这也同样适用，如果血糖出现意外快速下降，它可以更早地停止SMB。 因此，在使用SMB时，UAM应该始终保持激活状态。

**您必须已经启动了[目标9](#objectives-objective9)才能使用SMB。**

另请参阅：

- [OpenAPS SMB文档](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb)。
- [OpenAPS的oref1 SMB文档](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)
- [Tim关于SMB的信息](https://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/)

OpenAPS SMB的设置如下所述。

(Open-APS-features-max-u-h-a-temp-basal-can-be-set-to)=

### 临时基础率可以设置的最大U/h

此安全设置确定胰岛素泵可以提供的最大临时基础率。 它也被称为**max-basal**。

该值以单位/小时（U/h）为单位。 建议将其设置为合理的值。 设置此参数的一个好建议是：

    max-basal = 最高基础率 x 4
    

例如，如果你的配置文件中的最高基础率是0.5 U/h，你可以将其乘以4得到2 U/h的值。

**AAPS**根据[首选项 > 治疗安全 > 患者类型](#preferences-patient-type)将此值限制为“硬限制”。 硬限制如下：

- 儿童：2
- 青少年：5
- 成人：10
- 胰岛素抵抗成人：12
- 孕妇：25

*另请参见[硬编码限制概述](#overview-of-hard-coded-limits)。*

(Open-APS-features-maximum-total-iob-openaps-cant-go-over)=

### OpenAPS不能超过的最大总IOB

这个值决定了在闭环模式下运行时，**AAPS**将保持在其之下的最大**IOB**（包括基础胰岛素和餐时胰岛素IOB）的量。 它也被称为**最大IOB**。

如果当前的IOB（例如，餐后给予餐时胰岛素后的IOB）超过了设定的值，那么闭环系统将停止给予胰岛素，直到IOB的值降低到设定的阈值以下。

设置这个参数的一个良好开端是：

    maxIOB = 平均餐时大剂量 + 日最大基础率*3
    

在调整您的**最大IOB**时，请保持小心和耐心。 它对于每个人来说都是不同的，并且还可能取决于平均每日总剂量（TDD）。

**AAPS**根据[首选项 > 治疗安全 > 患者类型](#preferences-patient-type)将此值限制为“硬限制”。 硬限制如下：

- 儿童：3
- 青少年：7
- 成人：12
- 胰岛素抵抗成人：25
- 孕妇：40

*另请参见[硬编码限制概述](#overview-of-hard-coded-limits)。*

注意：在使用**SMB**时，**max-IOB**的计算方式与AMA不同。 在**AMA**中，maxIOB是基础**IOB**的安全参数，而在SMB模式下，它还包括大剂量IOB。

另请参见[OpenAPS的SMB文档](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb)。

### Enable dynamic sensitivity

This is the [DynamicISF](../DailyLifeWithAaps/DynamicISF.md) feature. When enabled, new settings become available. Settings are explained on the [DynamicISF](#dyn-isf-preferences) page.

#### 高临时目标提高敏感性

如果您启用了此选项，那么在设置临时目标高于100 mg/dl（或5.6 mmol/l）时，胰岛素敏感性将会增加。 这意味着，ISF将会上升，而IC和基础率将会减少。 这将有效地使**AAPS**在您设置高临时目标时变得不那么激进。

#### 低临时目标降低敏感性

如果您启用了此选项，那么在设置临时目标低于100 mg/dl（或5.6 mmol/l）时，胰岛素敏感性将会降低。 这意味着，ISF将会下降，而IC和基础率将会增加。 这将有效地使**AAPS**在您设置低临时目标时变得更加积极。

### Enable Autosens feature

This is the [Autosens](#autosens) feature. When using DynamicISF, Autosens can not be used, since they are two different algorithms altering the same variable (sensitivity).

Autosens looks at blood glucose deviations (positive/negative/neutral). 它将尝试根据这些偏差来确定你对胰岛素的敏感或抵抗程度，并根据这些偏差调整基础率和ISF。

When enabled, new settings become available.

### 敏感时提高目标

如果启用了此选项，当检测到敏感性（低于100%）时，灵敏度检测（autosens）可以提高目标。 在这种情况下，你的目标将根据检测到的敏感性的百分比提高。

如果由于灵敏度检测而修改了目标，它将在你的主屏幕上以绿色背景显示。

![由Autosens修改的目标](../images/Home2020_DynamicTargetAdjustment.png)

This setting is available when one of "Enable dynamic sensitivity" or "Enable Autosens feature" are enabled.

### 抗药时降低目标

如果启用了此选项，当检测到抗药性（高于100%）时，灵敏度检测（autosens）可以降低目标。 在这种情况下，你的目标将根据检测到的抗药性的百分比降低。

This setting is available when one of "Enable dynamic sensitivity" or "Enable Autosens feature" are enabled.

### 启用超微大剂量（SMB）

启用此功能以使用SMB功能。 如果禁用此功能，将不会给予任何**SMB**。

When enabled, new settings become available.

(Open-APS-features-enable-smb-with-high-temp-targets)=

#### 启用具有高临时目标的 SMB

如果启用了此设置，即使用户选择了高**临时目标**（定义为高于100mg/dL或5.6mmol/l，无论**配置文件**目标如何），也会给予**SMB**。 此选项旨在通过禁用设置来禁用SMB。 例如，如果禁用了此选项，则通过将**临时目标**设置为高于100mg/dL或5.6mmol/l可以禁用**SMB**。 无论其他什么条件试图启用SMB，此选项都将禁用**SMB**。

如果启用了此设置，则仅当也启用了**启用带有临时目标的SMB**时，SMB才会在高临时目标下启用。

(Open-APS-features-enable-smb-always)=

#### 始终启用 SMB

如果启用了此设置，那么SMB将始终启用（与COB、临时目标或餐时胰岛素无关）。 如果启用了此设置，那么下面其他的启用设置将无效。 然而，如果禁用了**启用高临时目标的SMB**，并且设置了一个高临时目标，那么SMB将被禁用。

This setting is only available if **AAPS** detects that you are using a [reliable BG source](#GettingStarted-TrustedBGSource), with advanced filtering. FreeStyle Libre 1 is not considered a reliable source due to the risk of infinitely repeating old BG data in case of sensor failure.

Noisy data could cause **AAPS** to believe BG is rising really fast, resulting in the administration of unnecessary SMBs. For more information about noise and data smoothing, see [here](../CompatibleCgms/SmoothingBloodGlucoseData.md).

#### 启用带活性碳水化合物(COB)的SMB

If this setting is enabled, SMB is enabled when the COB is greater than 0.

This setting is not visible if "Enable SMB always" is switched on.

#### 启用带有临时目标的SMB

If this setting is enabled, SMB is enabled when there is any temp target set (eating soon, activity, hypo, custom). If this setting is enabled but **Enable SMB with high temp targets** is disabled, SMB will be enabled when a low temp target is set (below 100mg/dL or 5.6mmol/l) but disabled when a high temp target is set.

This setting is not visible if "Enable SMB always" is switched on.

#### 在输入碳水化合物后启用SMB

If enabled, SMB is enabled for 6h after carbohydrates are announced, even if COB has reached 0.

For safety reasons, this setting is only available if **AAPS** detects that you are using a reliable BG source. It is not visible if "Enable SMB always" is switched on.

This setting is only available if **AAPS** detects that you are using a [reliable BG source,](#GettingStarted-TrustedBGSource) with advanced filtering. FreeStyle Libre 1 is not considered a reliable source due to the risk of infinitely repeating old BG data in case of sensor failure.

Noisy data could cause **AAPS** to believe BG is rising really fast, resulting in the administration of unnecessary SMBs. For more information about noise and data smoothing, see [here](../CompatibleCgms/SmoothingBloodGlucoseData.md).  
This setting is not visible if "Enable SMB always" is switched on.

#### 以分钟为单位设置SMB的频率是多少

This feature limits the frequency of SMBs. This value determines the minimum time between SMBs. Note that the loop runs every time a glucose value comes in (generally 5 minutes). Subtract 2 minute to give loop additional time to complete. E.g. if you want SMB to be given every loop run, set this to 3 minutes.

Default value: 3 min.

(Open-APS-features-max-minutes-of-basal-to-limit-smb-to)=

#### 限制SMB可调整的最大基础率分钟数

This is an important safety setting. This value determines how much SMB can be given based on the amount of basal insulin in a given time, when it is covered by COBs.

Making this value larger allows the SMB to be more aggressive. You should start with the default value of 30 minutes. After some experience, increase the value in 15 minutes increments and observe the effects over multiple meals.

It is recommended not to set the value higher than 90 minutes, as this would lead to a point where the algorithm might not be able to accommodate a decreasing BG with 0 U/h basal ('zero-temp'). You should also set alarms, especially if you are still testing new settings, which will warn you well before a hypo.

Default value: 30 min.

#### Max minutes of basal to limit SMB to for UAM

This setting allows to adjust the strength of SMB during UAM, when there are no more carbs.

Default value : the same as **Max minutes of basal to limit SMB to**.

This setting is only visible if "Enable SMB" and "Enable UAM " are switched on.

### 启用 UAM

With this option enabled, the SMB algorithm can recognize unannounced meals. This is helpful if you forget to tell **AAPS** about your carbs or estimate your carbs wrong and the amount of entered carbs is wrong or if a meal with lots of fat and protein has a longer duration than expected. Without any carb entry, UAM can recognize fast glucose increase caused by carbs, adrenaline, etc., and tries to adjust it with SMBs. This also works the opposite way: if there is a fast glucose decrease, it can stop SMBs earlier.

**Therefore, UAM should always be activated when using SMB.**

(key-aaps-features-minimal-carbs-required-for-suggestion)=

### 建议所需的最小碳水化合物量

Minimum grams of carbs to display a carbs suggestion alert. Eating of additional carbs will be suggested when the reference design detects that it requires carbs. In this case you will receive a notification which can be snoozed for 5, 15 or 30 minutes.

如果需要，可以将碳水通知推送到Nightscout，在这种情况下，将显示并广播公告。

In any case, the required carbs will be displayed in the COB section on your home screen.

![Display carbs required on home screen](../images/Pref2020_CarbsRequired.png)

### 高级设置

You can read more here : [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Always use short average delta instead of simple data** If you enable this feature, **AAPS** uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps **AAPS** to be steadier with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump and/or profile. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then **AAPS** can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump and/or profile.

Default value: 4 (shouldn’t be changed unless you really need to and know what you are doing)

* * *

(Open-APS-features-advanced-meal-assist-ama)=

## 高级进餐助手（AMA）

AMA, the short form of "advanced meal assist" is an OpenAPS feature from 2017 (oref0). OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus if you enter carbs reliably.

You can find more information in the [OpenAPS documentation](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### 临时基础率可以设置的最大U/hr（OpenAPS 最大基础率）

This safety setting helps **AAPS** from ever being capable of giving a dangerously high basal rate and limits the temp basal rate to x U/h. 建议将其设置为合理的值。 A good recommendation is to take the highest basal rate in your profile and multiply it by 4 and at least 3. For example, if the highest basal rate in your profile is 1.0 U/h you could multiply that by 4 to get a value of 4 U/h and set the 4 as your safety parameter.

You cannot choose any value: For safety reason, there is a 'hard limit', which depends on the patient age. The 'hard limit' for maxIOB is lower in AMA than in SMB. For children, the value is the lowest while for insulin resistant adults, it is the biggest.

The hardcoded parameters in **AAPS** are:

- 儿童：2
- 青少年：5
- 成人：10
- 胰岛素抵抗成人：12
- 孕妇：25

*另请参见[硬编码限制概述](#overview-of-hard-coded-limits)。*

### OpenAPS可以提供的最大基础IOB [U]（OpenAPS“max-iob”）

This parameter limits the maximum of basal IOB where **AAPS** still works. If the IOB is higher, it stops giving additional basal insulin until the basal IOB is under the limit.

The default value is 2, but you should rise this parameter slowly to see how much it affects you and which value fits best. It is different for anyone and also depends on the average total daily dose (TDD). For safety reason, there is a limit, which depends on the patient age . The 'hard limit' for maxIOB is lower in AMA than in SMB.

- 儿童：3
- 青少年：5
- 成人：7
- 胰岛素抵抗成人：12
- 孕妇：25

*另请参见[硬编码限制概述](#overview-of-hard-coded-limits)。*

### 启用AMA Autosens

Here, you can choose, if you want to use the [sensitivity detection](../DailyLifeWithAaps/SensitivityDetectionAndCob.md) autosens or not.

### Autosens也调整临时目标

If you have this option enabled, autosens can adjust targets (next to basal and ISF), too. This lets **AAPS** work more 'aggressive' or not. The actual target might be reached faster with this.

### 高级设置

- 通常你不需要更改此对话框中的设置！
- 如果你无论如何都要更改它们，请确保阅读[OpenAPS文档](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#)中的详细信息，并了解你在做什么。

**Always use short average delta instead of simple data** If you enable this feature, **AAPS** uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps **AAPS** to work more steady with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then **AAPS** can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump.

Default value: 4 (shouldn’t be changed unless you really need to and know what you are doing)

**Bolus snooze dia divisor** The feature “bolus snooze” works after a meal bolus. **AAPS** doesn’t set low temporary basal rates after a meal in the period of the DIA divided by the “bolus snooze”-parameter. The default value is 2. That means with a DIA of 5h, the “bolus snooze” would be 5h : 2 = 2.5h long.

Default value: 2

* * *

(Open-APS-features-overview-of-hard-coded-limits)=

## 硬编码限制概述

|            | 儿童  | 青少年 | 成人  | 胰岛素抵抗的成人 | 孕妇  |
| ---------- | --- | --- | --- | -------- | --- |
| MAXBOLUS   | 5   | 10  | 17  | 25       | 60  |
| MINDIA     | 5   | 5   | 5   | 5        | 5   |
| MAXDIA     | 9   | 9   | 9   | 9        | 10  |
| MINIC      | 2   | 2   | 2   | 2        | 0.3 |
| MAXIC      | 100 | 100 | 100 | 100      | 100 |
| MAXIOB_AMA | 3   | 5   | 7   | 12       | 25  |
| MAXIOB_SMB | 7   | 13  | 22  | 30       | 70  |
| MAXBASAL   | 2   | 5   | 10  | 12       | 25  |