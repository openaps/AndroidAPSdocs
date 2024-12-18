# OpenAPS功能

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

![SMBs on main graph](../images/SMBs.png)

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

### 启用Autosens

[Autosens](#autosens)观察血糖偏差（正/负/中性）。 它将尝试根据这些偏差来确定你对胰岛素的敏感或抵抗程度，并根据这些偏差调整基础率和ISF。

### 启用超微大剂量（SMB）

启用此功能以使用SMB功能。 如果禁用此功能，将不会给予任何**SMB**。

(Open-APS-features-enable-smb-with-high-temp-targets)=

### 启用具有高临时目标的 SMB

如果启用了此设置，即使用户选择了高**临时目标**（定义为高于100mg/dL或5.6mmol/l，无论**配置文件**目标如何），也会给予**SMB**。 此选项旨在通过禁用设置来禁用SMB。 例如，如果禁用了此选项，则通过将**临时目标**设置为高于100mg/dL或5.6mmol/l可以禁用**SMB**。 无论其他什么条件试图启用SMB，此选项都将禁用**SMB**。

如果启用了此设置，则仅当也启用了**启用带有临时目标的SMB**时，SMB才会在高临时目标下启用。

(Open-APS-features-enable-smb-always)=

### 始终启用 SMB

如果启用了此设置，那么SMB将始终启用（与COB、临时目标或餐时胰岛素无关）。 如果启用了此设置，那么下面其他的启用设置将无效。 然而，如果禁用了**启用高临时目标的SMB**，并且设置了一个高临时目标，那么SMB将被禁用。

出于安全原因，此选项仅适用于具有良好噪声数据过滤系统的血糖数据来源。

- 目前，仅当使用[构建你自己的Dexcom应用程序](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)或xDrip+中的“[原生模式](#smoothing-xdrip-dexcom-g6)”时，此选项才适用于Dexcom G5或G6。 如果BG值的偏差太大，G5/G6将不会发送它，并等待5分钟后的下一个值。
- 对于其他CGM/FGM（如Freestyle Libre），在出现更好的噪声平滑插件之前，**SMB始终**处于禁用状态。 
- 你可以在[这里](../CompatibleCgms/SmoothingBloodGlucoseData.md)找到更多信息。

### 启用带活性碳水化合物(COB)的SMB

如果启用了此设置，当COB大于0时，SMB将被启用。

### 启用带有临时目标的SMB

如果启用了此设置，那么当设置了任何临时目标（如即将进食、活动、低血糖、自定义）时，SMB将被启用。 如果启用了此设置但禁用了**启用具有高临时目标的SMB**，则在设置低临时目标（低于100mg/dL或5.6mmol/l）时SMB将启用，但在设置高临时目标时将禁用。

### 在输入碳水化合物后启用SMB

如果启用了此设置，则在宣布碳水化合物后的6小时内，SMB将启用，即使COB已达到0。

出于安全原因，此选项仅适用于具有良好噪声数据过滤系统的血糖数据来源。

- 目前，仅当使用[构建你自己的Dexcom应用程序](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)或xDrip+中的“[原生模式](#smoothing-xdrip-dexcom-g6)”时，此选项才适用于Dexcom G5或G6。 如果BG值的偏差太大，G5/G6将不会发送它，并等待5分钟后的下一个值。
- 对于其他CGM/FGM（如Freestyle Libre），在出现更好的噪声平滑插件之前，**SMB始终**处于禁用状态。
- 你可以在[这里](../CompatibleCgms/SmoothingBloodGlucoseData.md)找到更多信息。

### 以分钟为单位设置SMB的频率是多少

此功能限制了SMB的频率。 这个值决定了SMB之间的最小时间间隔。 请注意，每当收到血糖值时（通常为每5分钟一次），闭环系统就会运行一次。 减去2分钟，以便为闭环系统完成操作提供额外时间。 例如，如果您希望每次闭环运行时都发送SMB，请将此设置为3分钟。

默认值：3分钟。

(Open-APS-features-max-minutes-of-basal-to-limit-smb-to)=

### 限制SMB可调整的最大基础率分钟数

这是一个重要的安全设置。 此值决定了在给定时间内，当被COB覆盖时，基于基础胰岛素的量，可以给予多少SMB。

将此值设置得更大可以使SMB更加激进。 您应该从默认值30分钟开始。 在积累了一些经验后，以15分钟为增量增加该值，并观察多餐后的效果。

建议不要将此值设置为高于90分钟，因为这可能导致算法无法在基础胰岛素为0U/h（'零临时'）的情况下适应血糖下降。 您还应该设置警报，尤其是在您仍在测试新设置时，这将能在低血糖发生前很久就提醒您。

默认值：30分钟。

### 启用 UAM

启用此选项后，SMB算法可以识别未提前通知的进餐。 如果您忘记告诉**AAPS**您的碳水化合物摄入量，或者错误地估计了碳水化合物摄入量，导致输入的碳水化合物量不准确，或者如果一顿含有大量脂肪和蛋白质的餐食持续时间比预期更长，那么此功能将非常有用。 在没有任何碳水化合物输入的情况下，UAM可以识别由碳水化合物、肾上腺素等引起的血糖快速升高，并尝试通过SMBs进行调整。 这同样适用于相反的情况：如果血糖快速下降，它可以更早地停止SMBs。

**因此，在使用SMB时应当始终激活UAM。**

### 敏感时提高目标

如果启用了此选项，当检测到敏感性（低于100%）时，灵敏度检测（autosens）可以提高目标。 在这种情况下，你的目标将根据检测到的敏感性的百分比提高。

如果由于灵敏度检测而修改了目标，它将在你的主屏幕上以绿色背景显示。

![Target modified by autosens](../images/Home2020_DynamicTargetAdjustment.png)

### 抗药时降低目标

如果启用了此选项，当检测到抗药性（高于100%）时，灵敏度检测（autosens）可以降低目标。 在这种情况下，你的目标将根据检测到的抗药性的百分比降低。

### 高临时目标提高敏感性

如果您启用了此选项，那么在设置临时目标高于100 mg/dl（或5.6 mmol/l）时，胰岛素敏感性将会增加。 这意味着，ISF将会上升，而IC和基础率将会减少。 这将有效地使**AAPS**在您设置高临时目标时变得不那么激进。

### 低临时目标降低敏感性

如果您启用了此选项，那么在设置临时目标低于100 mg/dl（或5.6 mmol/l）时，胰岛素敏感性将会降低。 这意味着，ISF将会下降，而IC和基础率将会增加。 这将有效地使**AAPS**在您设置低临时目标时变得更加积极。

(key-aaps-features-minimal-carbs-required-for-suggestion)=

### 建议所需的最小碳水化合物量

这是显示碳水化合物建议警报所需的最小碳水化合物克数。 Eating of additional carbs will be suggested when the reference design detects that it requires carbs. In this case you will receive a notification which can be snoozed for 5, 15 or 30 minutes.

如果需要，可以将碳水通知推送到Nightscout，在这种情况下，将显示并广播公告。

In any case, the required carbs will be displayed in the COB section on your home screen.

![Display carbs required on home screen](../images/Pref2020_CarbsRequired.png)

### Advanced Settings

You can read more here : [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Always use short average delta instead of simple data** If you enable this feature, **AAPS** uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps **AAPS** to be steadier with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump and/or profile. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then **AAPS** can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump and/or profile.

Default value: 4 (shouldn’t be changed unless you really need to and know what you are doing)

* * *

(Open-APS-features-advanced-meal-assist-ama)=

## Advanced Meal Assist (AMA)

AMA, the short form of "advanced meal assist" is an OpenAPS feature from 2017 (oref0). OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus if you enter carbs reliably.

You can find more information in the [OpenAPS documentation](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### Max U/hr a Temp Basal can be set to (OpenAPS "max-basal")

This safety setting helps **AAPS** from ever being capable of giving a dangerously high basal rate and limits the temp basal rate to x U/h. 建议将其设置为合理的值。 A good recommendation is to take the highest basal rate in your profile and multiply it by 4 and at least 3. For example, if the highest basal rate in your profile is 1.0 U/h you could multiply that by 4 to get a value of 4 U/h and set the 4 as your safety parameter.

You cannot choose any value: For safety reason, there is a 'hard limit', which depends on the patient age. The 'hard limit' for maxIOB is lower in AMA than in SMB. For children, the value is the lowest while for insulin resistant adults, it is the biggest.

The hardcoded parameters in **AAPS** are:

- 儿童：2
- 青少年：5
- 成人：10
- Insulin resistant adult: 12
- 孕妇：25

*另请参见[硬编码限制概述](#overview-of-hard-coded-limits)。*

### Maximum basal IOB OpenAPS can deliver \[U\] (OpenAPS "max-iob")

This parameter limits the maximum of basal IOB where **AAPS** still works. If the IOB is higher, it stops giving additional basal insulin until the basal IOB is under the limit.

The default value is 2, but you should rise this parameter slowly to see how much it affects you and which value fits best. It is different for anyone and also depends on the average total daily dose (TDD). For safety reason, there is a limit, which depends on the patient age . The 'hard limit' for maxIOB is lower in AMA than in SMB.

- 儿童：3
- 青少年：5
- Adult: 7
- Insulin resistant adult: 12
- 孕妇：25

*另请参见[硬编码限制概述](#overview-of-hard-coded-limits)。*

### Enable AMA Autosens

Here, you can choose, if you want to use the [sensitivity detection](../DailyLifeWithAaps/SensitivityDetectionAndCob.md) autosens or not.

### Autosens adjust temp targets too

If you have this option enabled, autosens can adjust targets (next to basal and ISF), too. This lets **AAPS** work more 'aggressive' or not. The actual target might be reached faster with this.

### Advanced Settings

- Normally you do not have to change the settings in this dialogue!
- If you want to change them anyway make sure to read about details in [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#) and to understand what you are doing.

**Always use short average delta instead of simple data** If you enable this feature, **AAPS** uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps **AAPS** to work more steady with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then **AAPS** can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump.

Default value: 4 (shouldn’t be changed unless you really need to and know what you are doing)

**Bolus snooze dia divisor** The feature “bolus snooze” works after a meal bolus. **AAPS** doesn’t set low temporary basal rates after a meal in the period of the DIA divided by the “bolus snooze”-parameter. The default value is 2. That means with a DIA of 5h, the “bolus snooze” would be 5h : 2 = 2.5h long.

Default value: 2

* * *

(Open-APS-features-overview-of-hard-coded-limits)=

## Overview of hard-coded limits

|            | Child | Teenager | 成人    | 胰岛素抵抗成人 | Pregnant |
| ---------- | ----- | -------- | ----- | ------- | -------- |
| MAXBOLUS   | 5,0   | 10,0     | 17,0  | 25,0    | 60,0     |
| MINDIA     | 5,0   | 5,0      | 5,0   | 5,0     | 5,0      |
| MAXDIA     | 9,0   | 9,0      | 9,0   | 9,0     | 10,0     |
| MINIC      | 2,0   | 2,0      | 2,0   | 2,0     | 0,3      |
| MAXIC      | 100,0 | 100,0    | 100,0 | 100,0   | 100,0    |
| MAXIOB_AMA | 3,0   | 5,0      | 7,0   | 12,0    | 25,0     |
| MAXIOB_SMB | 7,0   | 13,0     | 22,0  | 30,0    | 70,0     |
| MAXBASAL   | 2,0   | 5,0      | 10,0  | 12,0    | 25,0     |