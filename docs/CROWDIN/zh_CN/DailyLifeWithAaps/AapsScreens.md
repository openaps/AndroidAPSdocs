# AAPS界面

```{contents}
:backlinks: entry
:depth: 2
```

(AapsScreens-the-homescreen)=

## 主界面

![Homescreen V2.7](../images/Home2020_Homescreen.png)

这是你打开**AAPS**后首先看到的界面，它包含了你日常所需的大部分信息。

### A部分 - 标签

* 在不同的**AAPS**模块之间导航。
* 你也可以通过左右滑动来切换屏幕。
* 显示的标签可以在[配置构建器](#Config-Builder-tab-or-hamburger-menu)中选择。

### B部分 - 配置文件&目标

#### 当前配置文件

左侧栏显示当前配置文件。

短按配置文件栏以查看配置文件详细信息。 长按配置文件栏以[切换不同的配置文件](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)。

![Profile switch remaining duration](../images/Home2020_ProfileSwitch.png)

1. 使用标准配置文件激活时的常规显示。
2. 配置切换，剩余时长为59分钟。
3. 配置切换，特定百分比为120%。
4. 配置切换，特定百分比为80%，剩余时长为59分钟。
5. 配置切换，时间偏移为-1小时。
6. 配置切换，特定百分比为120%，时间偏移为1小时，剩余时长为59分钟。

#### 血糖控制目标值

![Temp target remaining duration](../images/Home2020_TT.png)

右侧栏显示当前的血糖目标水平。

短按目标栏以设置**[临时目标](../DailyLifeWithAaps/TempTargets.md)**。

如果设置了临时目标，栏位将变为黄色，括号内显示剩余时间（分钟）。

(AapsScreens-visualization-of-dynamic-target-adjustment)=

#### 动态目标调整的可视化

![Visualization of dynamic target adjustment](../images/Home2020_DynamicTargetAdjustment.png)

当使用[SMB算法](#Config-Builder-aps)和[Autosens](#Open-APS-features-autosens)功能时，**AAPS**可以根据敏感性动态调整目标。

在[偏好设置>OpenAPS SMB设置](#Preferences-openaps-smb-settings)中启用以下选项之一或全部：

* “敏感时提高目标”和/或 
* “抵抗时降低目标” 

如果**AAPS**检测到抗药或敏感，目标将从配置中设置的值更改。 当更改目标血糖时，背景将变为绿色。

(AapsScreens-section-c-bg-loop-status)=

### C部分 - 血糖与闭环状态

#### 当前血糖

左侧显示来自CGM的最新血糖读数。

BG值的颜色反映其状态与预定义[范围](#Preferences-range-for-visualization)的关系：

* 绿色 = 在范围内
* 红色 = 低于范围
* 黄色 = 高于范围 

中间的灰色块显示自上次读数以来的分钟数以及过去15和40分钟内的变化。

(AapsScreens-loop-status)=

#### 闭环状态

![闭环状态](../images/Home2020_LoopStatus.png)

右侧图标显示闭环状态：

1. 绿色圆圈 = 闭环运行
2. 绿色圆圈带虚线 = [低血糖暂停（LGS）](#objectives-objective6)
3. 红色圆圈 = 闭环禁用（永久不工作）
4. 黄色圆圈 = 闭环暂停（暂时停止，但会给予基础胰岛素）- 下方显示剩余时间
5. 灰色圆圈 = 泵断开（暂时无胰岛素剂量）- 下方显示剩余时间
6. 橙色圆圈 = 超级大剂量运行- 下方显示剩余时间
7. 带虚线的蓝色圆圈 = 开环

短按或长按图标以打开闭环对话框，切换闭环模式（关闭、低血糖暂停、开环或禁用）、暂停/重新启用闭环或断开/重新连接泵。

* 如果在闭环对话框中短按，选择后需要进行验证。
    
    ![Loop status menu](../images/Home2020_Loop_Dialog.png)

(aaps-screens-bg-warning-sign)=

#### 血糖警告标志

如果由于任何原因，**AAPS**接收到的血糖读数有问题，你将在主屏幕上的BG数字下方收到警告信号。

##### 红色警告标志：重复BG数据

红色警告标志表示你需要立即采取行动：你正在接收**重复的BG数据**，这会阻止闭环正常工作。 因此，你的闭环将被禁用，直到问题解决。

    {admonition} 你的闭环未运行
    :class: note
    你的闭环未运行，直到你解决此问题！

![Red BG warning](../images/bg_warn_red.png)

你需要找出为什么会收到重复的BG：

* 你的Nightscout站点是否启用了Dexcom桥接？ 通过访问你的Nightscout实例的管理面板，编辑“enable”变量并删除“bridge”部分来禁用桥接。 （对于Heroku，[详细信息可在此处找到](https://nightscout.github.io/troubleshoot/troublehoot/#heroku-settings)。）
* 是否有多个源将你的BG上传到Nightscout？ 如果你使用BYODA应用，请在**AAPS**中启用上传，但不要在xDrip+中启用。
* 是否有关注者可能收到你的BG但又将其再次上传到你的Nightscout站点？
* 最后的手段：在**AAPS**中，转到[偏好设置>NSClient](#Preferences-nsclient)，选择同步设置并禁用“从NS接受CGM数据”选项。

要立即移除警告并让闭环再次运行，你需要手动从Dexcom/xDrip+标签中删除一些条目。

但是，如果有很多重复项，可能更容易：

* [备份你的设置](../Maintenance/ExportImportSettings.md)，
* 在维护菜单中重置你的数据库，
* 再次[导入你的设置](../Maintenance/ExportImportSettings.md)。

##### 黄色警告标志

黄色警告信号表示你的BG以不规则的时间间隔到达，或者缺少一些BG。 按压标志时，消息显示“使用重新计算的数据”。

![Yellow BG warning](../images/bg_warn_yellow.png)

通常你不需要采取任何行动。 闭环系统将继续工作！

传感器更换会中断血糖数据的持续流动，因此传感器更换后出现黄色警告标志是正常的，无需担心。

对于Libre用户的特别说明：

* 每几个小时，Libre会滑动一两分钟，这意味着你永远不会得到完美的规则BG间隔。
* 此外，跳动的读数也会中断连续流动。
* 因此，Libre用户的黄色警告标志将“始终开启”。

*注意*： **AAPS**计算会考虑最多30小时的数据。 因此，即使你解决了原始问题，黄色三角形也可能在最后一次出现不规则间隔后约30小时才会消失。

### D部分 - IOB, COB, BR和AS

![Section D](../images/Home2020_TBR.png)

**注射器**：活性胰岛素（IOB）- 你体内剩余的活性胰岛素量

1. 如果只有标准基础量在运行且没有来自先前大剂量的剩余胰岛素，则体内活性胰岛素数字将为零。
    
    * 如果最近有一段时间基础量减少，IOB可能为负数。
    * 按压图标以查看大剂量和基础胰岛素的分配。

2. **谷物**：[体内活性碳水（COB）](../DailyLifeWithAaps/CobCalculation.md)- 你之前摄入的尚未吸收的碳水。如果需要碳水，图标将脉冲为红色（见[下方](#aaps-screens-carbs-required)）。

3. **紫色线条**：当前基础率。 图标会发生变化，以反映基础率（100%时是直线）的临时变化 
    * 按压图标以查看基础基础率和任何临时基础率（包括剩余时长）的详细信息。
4. **上下箭头**：指示[Autosens](#Open-APS-features-autosens)状态（启用或禁用），下方显示值。

(aaps-screens-carbs-required)=

#### 需要碳水

![需要碳水](../images/Home2020_CarbsRequired.png)

当参考设计检测到需要碳水时，会给出碳水建议。

这是当oref算法认为它不能通过零临时基础率来拯救你，你需要碳水来修复时。

碳水通知比大剂量计算器的通知更复杂。 你可能会在看到大剂量计算器没有显示缺少碳水时看到碳水建议。

如果需要，可以将碳水通知推送到Nightscout，在这种情况下，将显示并广播公告。

### E部分 - 状态指示灯

![Section E](../images/Home2020_StatusLights.png)

状态指示灯为以下情况提供视觉警告：

* 管路使用时间
* 胰岛素使用时间（储液器使用天数）
* 储液器药量（单位）
* 探头使用时间
* 电池使用时间和电量（%）

如果超过阈值警告，值将以黄色显示。

如果超过临界阈值，值将以红色显示。

设置可以在[偏好设置>概览>状态指示灯](#Preferences-status-lights)中更改。

根据你使用的泵，你可能不会看到所有这些图标。

(aaps-screens-main-graph)=

### F部分 - 主图

![Section F](../images/Home2020_MainGraph.png)

该图表显示从动态（CGM）读取的血糖（BG）。

在操作标签中输入的备注，如指尖校准和碳水条目，以及配置文件切换，都显示在这里。

长按图表以更改时间刻度。 您可以选择6小时、12小时、18小时或24小时。

绿色区域反映你的目标范围。

蓝色三角形显示[SMB](#Open-APS-features-super-micro-bolus-smb)- 如果在[偏好设置>OpenAPS SMB](#Preferences-openaps-smb-settings)中启用。

(AapsScreens-activate-optional-information)=

#### 激活可选信息

在主图上，你可以打开以下可选信息：

* 预测
* 基础率
* 活动-胰岛素活动曲线

要显示此信息，请点击主图表右侧的三角形。 对于主图表，只有“\---\---- Graph 1 \---\----”上方的三个选项可用。

![Main graph setting](../images/Home2020_MainGraphSetting.png)

(aaps-screens-prediction-lines)=

#### 预测线

* **橙色**线：[COB](CobCalculation)（颜色通常用于表示COB和碳水）
    
    此预测线显示基于当前**配置文件**设置，假设由于碳水吸收的偏差保持恒定，你的BG（而不是COB本身！）将走向何处。 此线仅在已知COB时出现。

* **深蓝色**线：IOB（颜色通常用于表示IOB和胰岛素）
    
    这条预测线显示了仅在胰岛素影响下会发生的情况。 例如，如果你注入了一些胰岛素但没有摄入任何碳水化合物。

* **浅蓝色**线：零临时基础率（如果设置临时基础率为0%，则预测的BG）
    
    此预测线显示如果泵停止所有胰岛素输送（0% TBR），BG轨迹线将如何变化。
    
    *当使用[SMB](#Config-Builder-aps)算法时，此线才会出现。*

* **深黄色**线：[未宣布的餐食（UAM，un-announced meals）](#SensitivityDetectionAndCob-sensitivity-oref1)
    
    未宣布的用餐意味着检测到由于用餐、肾上腺素或其他影响导致的血糖水平显著升高。 预测线类似于**橙色的COB线**，但它假设偏差将以恒定速率逐渐减小（通过延长当前的降低速率）。
    
    *当使用[SMB](#Config-Builder-aps)算法时，此线才会出现。*

* **深橙色**线：aCOB（加速碳水吸收）
    
    与COB相似，但假设静态的10 mg/dL/5m（-0.555 mmol/l/5m）碳水吸收率。 已弃用且用途有限。
    
    *当使用较旧的[AMA](#Config-Builder-aps)算法时，此线才会出现。*

通常，你的实际血糖曲线会落在这些线的中间，或接近与你的情况最接近的假设线。

#### 基础率

**蓝色实线**表示泵的基础输送，并反映实际输注随时间的变化。

**蓝色虚线**表示如果没有临时基础率调整（TBRs），基础率将是什么。

当给予标准基础率时，曲线下方的区域以深蓝色显示。 当基础率临时调整（增加或减少）时，曲线下方的区域以浅蓝色显示。

#### 活动

**细黄线**显示胰岛素的活动。

它基于如果没有其他因素（如碳水）存在，你体内的胰岛素预期会使BG下降的程度。

(AapsScreens-section-g-additional-graphs)=

### G部分 - 附加图表

您可以在主图表下方激活最多四个附加图表。

要打开附加图表的设置，请点击[主图表](#section-f---main-graph)右侧的三角形并向下滚动。

![Additional graph settings](../images/Home2020_AdditionalGraphSetting.png)

要添加另一个图表，请在其名称（即\---\---- 图1 \---\----）右侧的框中打勾。

大多数用户发现以下附加图表配置足够：

* 图1：IOB、COB、灵敏度
* 图2：偏差和BGI。

#### 胰岛素绝对值

包括大剂量**和基础量**的活性胰岛素。

#### 活性胰岛素

显示您体内已有的胰岛素（= 您体内活跃的胰岛素）。 它包括来自追加量（bolus）和临时基础量（basal）的胰岛素（**但不包括在您的个人档案中设置的基础率**）。

如果在胰岛素作用时间（DIA）内没有[SMBs](#Open-APS-features-super-micro-bolus-smb)、没有追加量（boluses）也没有临时基础率（TBR），那么这个值就会是零。

如果长时间没有大剂量且零/低临时基础量，IOB可能为负数。

衰减取决于你的[DIA和胰岛素配置文件设置](../SettingUpAaps/YourAapsProfile.md)。

#### 活性碳水化合物

显示你体内的碳水（= 体内尚未衰减的碳水）。

衰减取决于[算法检测到的偏差](../DailyLifeWithAaps/CobCalculation.md)。

如果它检测到比预期更高的碳水吸收率，将给予胰岛素，这将增加IOB（或多或少，取决于你的安全设置）。

#### 灵敏度

显示[Autosens](#Open-APS-features-autosens)检测到的灵敏度。

灵敏度计算的是运动、激素等导致的胰岛素敏感性。

请注意，您需要在[目标8](#objectives-objective8)中才能允许灵敏度检测/[Autosens](#Open-APS-features-autosens)自动调整胰岛素的输送量。 在达到该目标之前，图表中的线条仅用于显示信息。

#### 心率

使用[Garmin智能手表](#Watchfaces-garmin)时，此数据可能可用。

#### 偏差

* **灰色**条显示由于碳水引起的偏差。 
* **绿色**条显示BG高于算法预期。 绿色条用于在[Autosens](#Open-APS-features-autosens)中增加抗药性。
* **红色**条显示BG低于算法预期。 红色条用于在[Autosens](#Open-APS-features-autosens)中增加敏感性。
* **黄色**条显示由于UAM引起的偏差。
* **黑色**条显示未考虑用于敏感性的小偏差。

#### 血糖影响

此线显示仅基于胰岛素活动，BG“应该”上升或下降的程度。

![Homescreen buttons](../images/Screenshots_DEV_BGI.png)

将BGI线和偏差条一起显示是一个好主意。 它们共享相同的比例尺，但与其他可选数据不同，因此最好将它们显示在不同的图表上，如上图所示。 比较BGI线和偏差条是了解**BG**如何波动的另一种方法。 在这里，在标记为**1**的时间点，偏差条大于BGI线，表明BG正在上升。 稍后，在标记为**2**的小时内，BGI和DEV几乎一致，表明BG稳定。

### H部分 - 按钮

![Homescreen buttons](../images/Home2020_Buttons.png)

胰岛素、碳水和计算器按钮几乎总是可见。 如果与泵的连接丢失，胰岛素按钮将不可见。

其他按钮可以在[偏好设置>概览>按钮](#Preferences-buttons)中设置。

关于使用胰岛素、碳水和计算器按钮：如果在[偏好设置>概览](#Preferences-show-notes-field-in-treatments-dialogs)中启用，**备注**字段允许你输入将显示在主图上的文本，并可能根据NS客户端的设置上传到Nightscout。

#### 胰岛素

![Insulin button](../images/Home2020_ButtonInsulin.png)

在不使用[大剂量计算器](#bolus-wizard)的情况下给予一定量的胰岛素。

通过选中**即将进食临时目标**框，你可以自动启动你的[即将进食临时目标](#TempTargets-eating-soon-temp-target)。

如果你不想通过泵给予大剂量但想记录胰岛素量（即使用笔给予的胰岛素），请选中相应的框。 选中此框后，你将获得一个附加字段“时间偏移”，你可以使用它来记录过去给予的胰岛素注射。

您可以使用按钮快速增加胰岛素的量。 增量值可以在[首选项 > 概述 > 按钮](#Preferences-buttons)中更改。

#### 碳水化合物

![Carbs button](../images/Home2020_ButtonCarbs.png)

要记录碳水而不给予大剂量。

可以直接通过选中框来设置某些[预设临时目标](#TempTargets-hypo-temp-target)。

**时间偏移**：你曾在/你将在何时吃碳水（以分钟为单位）。

**持续时间**：用于[“扩展碳水”](ExtendedCarbs)的时间。

你可以使用按钮快速增加碳水量。 增量值可以在[首选项 > 概述 > 按钮](#Preferences-buttons)中更改。

#### 计算器

参见大剂量向导[下方部分](#bolus-wizard)。

#### 校准

向xDrip+发送校准或打开Dexcom校准对话框。

必须在[偏好设置>概览>按钮](#Preferences-buttons)中激活。

#### CGM

打开xDrip+。

返回按钮返回**AAPS**。

必须在[偏好设置>概览>按钮](#Preferences-buttons)中激活。

#### 快速向导

轻松输入碳水量并设置计算基础。

详细信息在[偏好设置>概览>快速向导设置](#Preferences-quick-wizard)中设置。

## 大剂量向导

![Bolus wizard](../images/Home2020_BolusWizard_v2.png)

当你想要给一个餐时大剂量（bolus）时，通常会在这里进行。

### I部分

显示计算后的大剂量。

如果活性胰岛素量超过了计算后的大剂量，那么它将仅显示仍需的碳水化合物量。

(AapsScreens-section-j)=

### J部分

BG字段通常已经填充了来自您的动态（CGM）的最新读数。 如果您没有正在工作的动态（CGM），则该字段将为空。

在**碳水化合物**字段中，您添加您想要为之注射大剂量的碳水化合物（或等效物）的估计量。

**校正**字段用于因某种原因需要修改最终剂量时使用。

**碳水时间**字段用于预先注射大剂量，这样您可以告诉系统，在预期摄入碳水化合物之前会有一段时间的延迟。 如果您是为了之前摄入的碳水化合物而注射大剂量，您可以在此字段中输入负数。

**饮食提醒**：对于未来的碳水化合物摄入，可以选择闹钟复选框（默认情况下，当输入未来时间时会自动选中），以便在指定时间提醒您何时摄入已输入到**AAPS**中的碳水化合物。

![BolusWizard with Eating Reminder](../images/Home2021_BolusWizard_EatingReminder.png)

### K部分

**配置文件**允许您选择不同于当前配置文件的另一个配置文件，以便计算所需的胰岛素量。 此配置文件选择仅适用于当前的大剂量注射，并不是更改配置文件。

**超级大剂量**是指将接下来两小时的基础胰岛素添加到即时大剂量中，并在接下来的两小时内发出零临时基础率（TBR），以收回额外的胰岛素。 该选项仅在[首选项 > 概述 > 高级设置](#Preferences-advanced-settings-overview)中设置了“在向导中启用超级大剂量”时才会显示。 这种做法的目的是更早地输送胰岛素，从而有望减少血糖峰值。

有关详细信息，请访问[diabetesnet.com](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/)。

### L部分

向导中大剂量计算的详细信息。

您可以取消选择任何您不想包含的项目，但通常您不会这样做。

出于安全原因，如果您希望大剂量向导基于现有的临时目标进行计算，则**必须手动勾选TT框**。

#### COB和IOB的组合及其含义

* 出于安全原因，当选中COB框时，IOB框无法取消选中，因为如果您这样做，可能会因为**AAPS**未考虑已给予的胰岛素而面临胰岛素过量的风险。
* 如果你同时勾选了COB和IOB，那么未吸收且尚未用胰岛素覆盖的碳水化合物+所有作为TBR或SMB输注的胰岛素都将被考虑在内。
* 如果你只勾选了IOB而没有勾选COB，**AAPS**会考虑已经输注的胰岛素，但不会将其与任何仍待吸收的碳水化合物相抵消。 这会导致出现“缺少碳水化合物”的通知。
* If you bolus for **additional food** shortly after a meal bolus (i.e. additional desert) it can be helpful to **untick all boxes**. This way just the new carbs are being added as the main meal won't necessarily be absorbed so IOB won't match COB accurately shortly after a meal bolus.

![BolusWizard with Details](../images/Home2021_BolusWizard_Details.png)

The box near the eye allows you to choose between the detailed view, with the numbers entering the calculation for each item, or the simple view with icons. Pressing on an icon will enable / disable this entry from the calculation.

(AapsScreens-wrong-cob-detection)=

#### Wrong COB detection

![Slow carb absorption](../images/Calculator_SlowCarbAbsorption.png)

If you see the warning above after using bolus wizard, **AAPS** has detected that the calculated COB value may be wrong. So, if you want to bolus again after a previous meal with COB, you should be aware of overdosing!

For details, see the hints on [COB calculation page](#CobCalculation-detection-of-wrong-cob-values).

(screens-action-tab)=

## Action tab

![Actions tab](../images/Home2021_Action.png)

### Actions - section M

Button **[Profile switch](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)** as an alternative to pressing the [current profile](#section-b---profile--target) on homescreen.

Button **[Temporary target](../DailyLifeWithAaps/TempTargets.md)** as an alternative to pressing the [current target](#section-b---profile--target) on homescreen.

Button to start or cancel a temporary basal rate. Please note that the button changes from “TEMPBASAL” to “CANCEL x%” when a temporary basal rate is set.

Even though [extended boluses](#Extended-Carbs-extended-bolus-and-why-they-wont-work-in-closed-loop-environment) do not really work in a closed loop environment some people were asking for an option to use extended bolus anyway.

* This option is only available for Dana RS and Insight pumps. 
    * Closed loop will automatically be stopped and switched to open loop mode for the time running extended bolus.
    * Make sure to read the [details](../DailyLifeWithAaps/ExtendedCarbs.md) before using this option.

### Careportal - section N

Displays information on:

* sensor age & level (battery percentage)
* insulin age & level (units)
* cannula age
* pump battery age & level (percentage

Less information will be shown if **low resolution skin** is used ([Preferences > General > Skin](#Preferences-skin)).

(screens-sensor-level-battery)=

#### Sensor level (battery)

Works for CGM with an additional transmitter such as MiaoMiao 2. (Technically sensor has to send cat level information to xDrip+.)

Thresholds can be set in [Preferences > Overview > Status lights](#Preferences-status-lights).

### Careportal - section O

BG check, prime/fill, sensor insert and pump battery change are the base for the data displayed in [section N](#careportal---section-n).

Prime/Fill allows you to record pump site and insulin cartridge change.

Section O reflects the Nightscout careportal. So exercise, announcement and question are special forms of notes.

### Tools - section P

#### History Browser

Allows you to ride back in **AAPS** [history](../Maintenance/Reviewing.md).

#### TDD

Total daily dose = bolus + basal per day

Some doctors use - especially for new pumpers - a basal-bolus-ratio of 50:50.

Therefore, ratio is calculated as TDD / 2 * TBB (Total base basal = sum of basal rate within 24 hours).

Others prefer range of 32% to 37% of TDD for TBB.

Like most of these rules-of-thumb it is of limited real validity. Note: Your diabetes may vary!

(AapsScreens-insulin-profile)=

## Insulin Profile

![Insulin Profile](../images/Screenshot_insulin_profile.png)

This shows the activity profile of the insulin you have chosen in [config builder](#Config-Builder-insulin). The curves will vary based on the [DIA](#your-aaps-profile-duration-of-insulin-action) and the time to peak.

The **purple** line shows how much insulin remains after it has been injected as it decays with time and the **blue** line shows how active it is.

See [Your AAPS Profile > Duration of insulin action](#your-aaps-profile-duration-of-insulin-action) to learn more about what it is and how to set it.

## Pump Status

![Pump Status](../images/Screenshot_PumpStatus.png)

* Different information on pump status. Displayed information depends on your pump model.
* See [pumps page](../Getting-Started/CompatiblePumps.md) for details.

## Loop, AMA / SMB

These tabs show details about the algorithm's calculations and why **AAPS** acts the way it does.

Calculations are run each time the system gets a fresh reading from the CGM.

For more details see [APS section on config builder page](#Config-Builder-aps).

(aaps-screens-profile)=

## 配置文件

![配置文件](../images/Screenshots_Profile.png)

Profile contains information on your individual diabetes settings, see the detailed **[Profile](../SettingUpAaps/YourAapsProfile.md)** page for more information.

## 自动操作

See the dedicated page [here](../DailyLifeWithAaps/Automations.md).

## NSClient

![NSClient](../images/Screenshots_NSClient.png)

This page displays the status of the connection with your Nightscout site.

Settings can be changed in [Preferences > NS Client](#Preferences-nsclient).

For troubleshooting see this [page](../GettingHelp/TroubleshootingNsClient.md).

## BG Source - xDrip+, BYODA...

![BG Source tab - here Nightscout](../images/Screenshots_BGSource.png)

Depending on your BG source settings, this tab is named differently.

Shows history of CGM readings and offers option to remove reading in case of failure (i.e. compression low) or duplicate readings.

(aaps-screens-treatments)=

## 治疗动作（Treatments）

This view can be accessed by pressing the 3 dots on the right of the menu, then Treatments. It is not possible to show it in the main menu through the Config Builder. In this view, you can view and alter the history of the following treatments:

* Bolus & carbs
* [扩展大剂量(方波)](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
* Temporary basal rate
* [Temporary target](../DailyLifeWithAaps/TempTargets.md)
* [Profile switch](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
* Careportal: notes entered through action tab and notes in dialogues
* User entry: other notes that are not sent to Nightscout

In the last column, the data source for each line is displayed in blue. It can be :

* NS for Nightscout : the data comes from or has been recorded to Nightscout
* PH for Pump History : the data has been processed by the pump

(screens-bolus-carbs)=

### Bolus & carbs

![Carbs & bolus](../images/TreatmentsView1.png)

On this tab you can view the bolus and carbs log. Each bolus (line **1** and **4**) shows the remaining associated IOB next to the insulin amount. The origin of the bolus can be either :

* Meal (manually entered though the Insulin, Quick Wizard or Bolus Wizard buttons)
* SMB, when using the SMB Functionality

The carbs (line **2**) are only stored in Nightscout. If you have used the [Bolus Wizard](#bolus-wizard) to calculate insulin dosage, you can press the “Calc” text (line **3**) to show the details of how the bolus was calculated.

Depending on the pump used, insulin and carbs can be shown in one single line, or will result in multiple lines: one for the calculation detail, one for the carbs, one for the bolus itself.

The treatment tab can be used to correct faulty carb entries (*i.e.* you over- or underestimated carbs). Note that it is not possible to edit an existing entry, you need to follow the following process:

1. Check and remember actual COB and IOB on homescreen.
2. Depending on pump in treatment tab carbs might be shown together with insulin in one line or as a separate entry (i.e. with Dana RS).
3. Remove the entry with the faulty carb amount. (Latest versions have trashcan icon in treatments screen. Press the trashcan icon, select the lines to remove, and then press the trashcan icon again to finalize.)
4. Make sure carbs are removed successfully by checking COB on homescreen again.
5. Do the same for IOB if there is just one line in treatment tab including carbs and insulin.
    
    → If carbs are not removed as intended, and you add additional carbs as explained here (6.), COB will be too high and that might lead to too high insulin delivery.

6. Enter correct carb amount through carbs button on homescreen and make sure to set the correct event time.

7. If there is just one line in treatment tab including carbs and insulin you have to add also the amount of insulin. Make sure to set the correct event time and check IOB on homescreen after confirming the new entry.

### Temp Basal

![Temp Basal](../images/TreatmentsView2.png)

The **temp basals** applied by the loop are shown here. When there is still an impact on the IOB for an entry, the information is shown in green. It can be:

* Positive IOB if the temp basal was higher than the one set in the Profile (line **2**)
* Negative IOB for a zero-temp or if the temp basal was lower than the one set in the Profile (line **1**)

Deleting the entries only affects your reports in Nightscout and will probably tamper your real IOB - it is not recommended.

On the left of a line, a red S means “Suspend” : it happens when basal is not currently delivered. This is a normal situation when in the process of changing a pod, for example.

### Temporary target

![Temporary target](../images/TreatmentsView3.png)

The history of temporary targets can be seen here.

### Profile Switch

![Profile Switch](../images/TreatmentsView4.png)

The history of profile switches can be seen here. You may see multiple entries each time you switch profile : line **1**, stored in Nightscout but not in Pump History, corresponds to the request of a profile switch made by the user. Line **2**, stored both in NS and PH, correspond to the actual switch.

Deleting the entries only affects your reports in Nightscout and will never actually change the current profile.

You can use the **Clone** button shown on line **1** to make a copy of a **Profile Switch**. See [Your AAPS Profile > Manage your profiles](#your-aaps-profile-clone-profile-switch) for more information.

### Care portal

![Care portal](../images/TreatmentsView5.png)

This tab shows all notes and alerts recorded in Nightscout.

## History Browser

This view can be accessed by pressing the 3 dots on the right of the menu, then History. It is not possible to put in the main menu through the Config Builder. It can also be accessed through a button at the bottom of the [Action tab](#action-tab).

Allows you to ride back in **AAPS** history. See the dedicated page [Reviewing your data > History Browser](../Maintenance/Reviewing.md).

## Statistics

This view can be accessed by pressing the 3 dots on the right of the menu, then Statistics. It is not possible to put in the main menu through the Config Builder.

Gives you statistics about your Time In Range and Total Daily Dose. See the dedicated page [Reviewing your data > Statistics](#reviewing-statistics).

(aaps-screens-profile-helper)=

## 配置文件助手

This view can be accessed by pressing the 3 dots on the right of the menu, then Profile Helper. It is not possible to put in the main menu through the Config Builder. The Profile Helper can help you:

* [为孩子从头开始构建配置文件](#your-aaps-profile-profile-from-scratch-for-a-kid)
* [比较两个配置文件](#your-aaps-profile-compare-profiles)