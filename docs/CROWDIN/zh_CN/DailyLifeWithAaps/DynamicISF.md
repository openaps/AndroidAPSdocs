(Open-APS-features-DynamicISF)=
# 动态胰岛素敏感系数（DynamicISF）
**动态胰岛素敏感因子（ISF）**功能于**AAPS**3.2版本中推出，并要求在启用**动态ISF**之前完成Objective 11。 在配置构建器中选择**动态ISF** > **AAPS**以激活。 该功能仅推荐给那些已经熟练掌握**AAPS**控制和监测的高级用户。

为了有效使用**动态ISF**，**AAPS'**数据库需要至少五（5）天的用户**AAPS**数据。

**动态ISF**根据用户的以下情况动态调整用户的胰岛素敏感系数（**ISF**）：

- 每日胰岛素总剂量（TDD）；
- 当前和预测的血糖值。

**动态ISF**使用Chris Wilson的模型来确定**ISF**，而不是用户静态**配置文件**中设置的**ISF**值。

**动态ISF**的公式为：ISF = 1800 / (TDD * Ln ((血糖 / 胰岛素除数) +1 ))

SMB/AMA——示例显示了用户**配置文件**中由用户设置的静态**ISF**，并由SMB和AMA使用。

![Static ISF](../images/DynISF1.png)

动态ISF - 用户**ISF**根据**动态ISF**的判定而发生变化的一个示例。

![Dyn ISF](../images/DynISF2.png)

实施中使用了上述公式来计算当前**ISF**，并在oref1预测中用于**IOB**（活性胰岛素）、**ZT**（零临时胰岛素）和**UAM**（未宣布餐时）的计算。 它不适用于**COB**的计算。  进一步的讨论可以在这里找到：https://www.youtube.com/watch?v=oL49FhOts3c

## 总日剂量（TDD）
TDD将使用以下值的组合：
1.  7天平均**TDD**；
2.  前一天的**TDD**；
3.  过去八小时胰岛素使用量的加权平均值，并推算出24小时的值。

上述公式中使用的**TDD**是上述三个值各占三分之一的加权值。

## 胰岛素除数
The insulin divisor depends on the peak of the insulin used and is inversely proportional to the peak time. For Lyumjev this value is 75, for Fiasp, 65 and regular rapid insulin, 55.

## Dynamic ISF Adjustment Factor
The Adjustment Factor allows the user to specify a value between 1% and 300%. This acts as a multiplier on the **TDD** value and results in the **ISF** values becoming *smaller* (i.e. more insulin required to move glucose levels a small amount) as the value is increased above 100% and *larger* (i.e. less insulin required to move glucose levels a small amount) as the value is decreased below 100%.

The Adjustment Factor can be located in ‘Preferences’ > **AAPS**:

![Factor ISF](../images/DynISF3.png)


## Future ISF

Future **ISF** is used in the dosing decisions that oref1 makes.  Future **ISF** uses the same **TDD** value as generated above, taking the Adjustment Factor (discussed above) into account. It then uses different glucose values dependent on the case:

* If levels are flat, within +/- 3 mg/dl, and predicted **BG** is above target, a combination of 50% minimum predicted **BG** and 50% current **BG** is used.

* If eventual **BG** is above target and glucose levels are increasing, or eventual **BG** is above current **BG**, current **BG** is used.

Otherwise, minimum predicted **BG** is used.

## Enable TDD based sensitivity ratio for basal and glucose target modification

This setting replaces Autosens, and uses the last 24h **TDD**/7D **TDD** as the basis for increasing and decreasing basal rate, in the same way that standard Autosens does. This calculated value is also used to adjust target, if the options to adjust target with sensitivity are enabled. Unlike Autosens, this option does not adjust **ISF** values.

## CAUTION - Automations or Profile Percentage Increase
**Automations** should always be used with care. This is particularly so with **Dynamic ISF**.

If **Dynamic ISF** is in operation, users should reconsider enabling any temporary **Profile** increase as an **Automation** rule or similarly activating a **Profile Percentage** which may create **Dynamic ISF** to be overly aggressive in correction bolusing and could cause hypoglycemia.
