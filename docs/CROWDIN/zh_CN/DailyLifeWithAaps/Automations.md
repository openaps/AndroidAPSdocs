# 自动操作

```{contents} In this page
:backlinks: entry
:depth: 2
```

## 什么是自动化（Automation）？

"**Automation**" is a feature which can automate tasks in AAPS.

Automation performs specific actions based on one or more conditions or triggers. 触发条件可包含血糖水平异常（偏高或偏低）、体内存在设定阈值的活性胰岛素（IOB）等非规律性事件； Automations can also handle recurring events, such as meals or exercise at certain times of day, or when the user is within a specific distance of a GPS location or a Wi-Fi SSID area. 该功能还支持按计划周期或每次Pod更换时自动执行AAPS设置备份。

Automation rules are created and modified from the **Automation** screen (**Manage → Automation**). 每条规则由两个核心要素构成：

- 一个或多个启动动作的条件或"触发器"。

    例如：特定时间安排、系统事件或参数数值变化

- 需执行的一个或多个操作。

    Such as an alarm or setting a profile percentage or exporting the AAPS settings on Pod change.


有多种自动化选项可供选择，建议用户在AAPS应用的自动化部分中详细研究这些选项。 You can also search the AAPS user groups on [**Facebook**](https://www.facebook.com/groups/AndroidAPSUsers) and [**Discord**](https://discord.gg/4fQUWHZ4Mw) for Automation examples from other users.

## 自动操作如何帮助我们

1. **Automate recurring tasks:** Automatically executing programmed actions without user interaction.

1. **减少决策疲劳**：**自动操作**的主要好处是减轻用户需要手动干预**AAPS**的负担。研究估计，患有1型糖尿病的人平均每天需要做出额外的180个决策。**自动化**可以减轻心理负担，让用户能够将精力投入到生活的其他方面。

1. **可能改善血糖控制**：例如，**自动操作**可以确保在需要时始终设置**临时目标**，即使在忙碌或健忘的情况下也是如此。例如，如果一个患有糖尿病的孩子在学校每周二上午10点和周四下午2点有体育活动，并且需要在活动前30分钟设置高血糖临时目标（TT），那么可以通过自动操作来实现。

1. **Enabling AAPS to be highly customized** to be more or less aggressive in specific situations, according to a user's preference. 例如，如果在半夜出现负**IOB**，表明当前**配置文件**可能过强，可以触发一段时间内的临时降低**配置文件**百分比。

下面的例子说明了如何通过**自动化**来省略某些步骤。

用户每天早上6点锻炼：他需要在锻炼前，即早上5点，手动在AAPS中设置“TT-活动”。

![Manual actions without automation](../images/Automations/automation_concept_manual.png)

用户设置了一个**自动操作**，在早上5点触发“TT-活动”，以确保他们的**血糖**和**IOB**在准备6点锻炼时处于最佳状态：

![Actions done by an automation](../images/Automations/automation_concept_automated.png)

## 开始使用自动操作前的关键考虑

1. 启用特定自动化功能前，建议确保已通过**AAPS**实现稳定的控制**血糖**。自动化功能不应作为基础率、**ISF**或**CR**参数设置欠佳的补偿手段（详见下文论述）。避免设置自动化**配置文件切换**来补偿由于食物等原因导致的**血糖**升高，这些情况最好通过其他策略（如SMBs等）来处理。

1. 与所有技术一样，**持续葡萄糖监测系统（CGMs）**、**胰岛素泵**和手机都有可能出现故障：技术问题或传感器错误可能会中断**自动化操作**，这时可能需要进行手动干预。

1. **Requirements for Automations are likely to change as routines change**. 在工作/学校/假期之间切换时，请在日历中设置提醒，以审查当前活跃的**自动操作**（它们很容易激活和停用）。 For example, if you go on holiday, and no longer need an Automation set up for school sports or daily exercise, or need to adjust the timings.

1. **自动操作**可能会相互冲突，因此最好在安全环境中仔细审查任何新的**自动操作**设置，并了解为什么**自动操作**可能未按预期触发。

1. 如果使用Autosens功能，请尽量使用**临时目标（Temp Targets）**而不是**配置切换（Profile Switches）**。**临时目标**不会将Autosens重置为0，而配置切换会重置Autosens。

1. 大多数**自动操作**应仅设置**有限的时间段**，之后**AAPS**可以重新评估并根据需要重复自动操作（如果条件仍然满足）。 For example, "start temp target of 7.0 mmol/L for 30 min" or "start **Profile** 110% for 10 min" _and_ "start temp target of 5.0 mmol/L for 10 min". 使用**自动操作**创建永久更改（例如，更改为更强的配置文件百分比）可能会导致低血糖。

## 我什么时候可以开始使用自动操作？

可以在**目标10**中开始使用**自动操作**。

## 自动操作在AAPS中的位置

Open **Manage** in the bottom navigation of the main screen and select **Automation**.

## 如何设置自动操作？

To set up an **Automation**, press the **+** button on the Automation screen to create a ‘rule’:

![创建自动操作](../images/Automations/automation_create.png)

* give your ‘rule’ a title (Task name);
* press "**EDIT**" under **Condition**. On the **Condition** screen, choose how the triggers are combined (**And**, **Or**, **Exclusive or**) and press "**Add trigger**":

![自动操作条件](../images/Automations/automation_trigger_editor.png)

* add at least one trigger:

![Automation triggers](../images/Automations/automation_triggers.png)

* press "**ADD**" under **Action** and select one action:

![Automation actions](../images/Automations/automation_actions.png)

* save the rule with the **Save** button, and make sure the checkbox left of the rule name is ‘ticked’ to activate the **Automation**:

![Automation activated](../images/Automations/automation_rule_activated.png)

要停用**自动操作**规则，请取消勾选规则名称左侧的框。 The example below shows an **Automation** as either activated (‘ticked') or deactivated (‘unticked’):

![Automation rules switched on and off](../images/Automations/automation_rule_activated_deactivated.png)


在设置**自动化**时，您可以首先通过激活“操作”下的“通知”选项来测试它。这会触发**AAPS**首先显示通知，而不是实际自动化操作。当您确认通知已在正确的时间/条件下触发后，可以更新**自动化**规则，将“通知”替换为“操作”。

![Alert actions](../images/Automations/automation_alert_actions.png)

```{admonition} Important note
:class: note
**自动操作**在闭环禁用时仍然有效！
```


## When rules are checked

**AAPS** checks all **Automation** rules each time a new glucose reading has been processed, so rules are evaluated at the pace of your CGM, also while the phone screen is off. Rules are also checked when the phone starts charging, when the network or location changes, and when a Bluetooth device connects. Only one check runs at a time, so a rule whose actions take a while (for example a pump command) cannot be executed twice.

## 安全限制

对**自动操作**设置了安全限制：

* A **Temp Target** set by an **Automation** has to be between 72 and 180 mg/dL (or 4 and 10 mmol/L).
* The **Profile Percentage** has to be between 50% and 130%.
* There is a 5 minute time limit between executions of **Automation** (and first execution).

## 正确使用负值

```{admonition} Warning
:class: warning
在选择**自动操作**中的负值时请小心。
```

在选择“条件”中的负值（如“小于”）时需要谨慎。例如：

![Comparison operators](../images/Automations/automation_comparison_operators.png)

**Example 1:** Creating a Condition **"is lesser than"** "-0.1mmol/L" (or "-2mg/dL") will:

当任何**严格小于**-0.1（-2）的数字时触发**自动操作**。这包括-0.2、-0.3、-0.4（-4、-6、-8）等数字。请记住，-0.1（-2）本身**不**包括在此条件中。 (The condition "is equal or lesser than -0.1mmol/L (-2 mg/dL)" _would_ include -0.1 mmol/L or -2 mg/dL).

**Example 2:** Creating a Condition "is greater than" -0.1mmol/L (-2mg/dL) will:

Trigger an **Automation** for any number which is **greater than** -0.1mmol/L (-2mg/dL). This includes numbers like 0, 0.2, 0.4mmol/L, (0, 4, 8mg/dL) and any other positive number.

在选择这些条件和值时，必须仔细考虑**自动操作**的确切意图。

(automations-automation-triggers)=
## 自动化触发器

![自动化触发器](../images/Automations/automation_triggers.png)

Scroll down to see the rest of the list:

![Automation Triggers, continued](../images/Automations/automation_trigger_picker_2.png)

系统提供多种「触发器」类型供用户自定义选择。触发器即自动化执行所需满足的必要条件。以下列表并不详尽：

**触发类型**：链接条件

**选项：**

可以使用多个条件链接
* “和”
* “或”
* “异或”（即如果仅当且仅当一个条件适用时，才会执行操作）

**触发类型：**即时触发与周期性触发

**选项：**

* 时间 = 单次事件时间
* 循环时间 = 循环发生的事件（例如，每周一次，每个工作日等）

**触发类型：** 位置

**选项：**

* in [Settings > Automation](#preferences-maintenance-settings), the user can select their required location service.

**触发类型：** 定位服务

**选项：**

* 使用被动位置：**AAPS**仅在其他应用请求位置时获取位置。
* 使用网络位置：你的Wi-Fi位置。
* 使用GPS位置（注意！这可能会导致电池过度消耗！）

**触发类型：**​​ 泵体与传感器数据

* 管路使用时长触发器​：适用于所有胰岛素泵型号
* 胰岛素使用时长触发器​：仅限兼容泵型可用
* 电池使用时长触发器​：仅限兼容泵型可用
* 传感器使用时长触发器​：全平台支持
* Pod激活触发器​：贴敷式胰岛素泵专用

对所有时长类触发器来说，不要使用等值比较，由于系统原因很可能无法有效激活，需配置两个触发器构建一个阈值范围（如：导管使用≥72小时且≤96小时）。

* 储药器液位触发器​：全泵型兼容，"NOT_AVAILABLE"比较运算符无效（**AAPS**系统持续更新液位数据）
* 泵体电池电量触发器​：仅限兼容泵型可用，"NOT_AVAILABLE"比较运算符无效（**AAPS**系统持续记录电量值）。

(automations-automation-action)=
## 操作

![Automation Actions](../images/Automations/automation_actions.png)

Scroll down to see the rest of the list:

![Automation Actions, continued](../images/Automations/automation_action_picker_2.png)

**操作**：启动**临时目标**

**选项：**

* **BG** must be between 72 mg/dL and 180 mg/dL (4 mmol/L and 10 mmol/L)
* **TT** works only if there is no previous Temp Target — **AAPS** adds this automatically as a "**Preconditions: Temp target not exists**" line to the rule

**操作**：停用**临时目标**

**选项：**

无

**操作**：**配置文件百分比（Profile Percentage）**

**选项：**

* **Profile** must be between 50% and 130%
* 仅当之前的百分比为100%时才有效

**Actions:** **Change smoothing** (in the **Loop & insulin** group)

**选项：**

* select the [smoothing method](../CompatibleCgms/SmoothingBloodGlucoseData.md) to switch to. The list is the same as under **Configuration** > **Smoothing**, and the action does exactly what a change there does: the new method is saved, synced to paired clients, and the BG data is smoothed again right away.
* runs only if that smoothing method is not already active — **AAPS** adds this automatically as a "**Preconditions: Smoothing … is not active**" line to the rule. Once the selected smoothing is active, the rule is skipped silently.
* Example: a new sensor is often noisy during its first day. Two rules with the **Sensor age** trigger give stronger filtering while the sensor settles, and lag-free smoothing after that:
  * **Sensor age** less than 24 h: **Change smoothing** to **Unscented Kalman Filter**
  * **Sensor age** more than 24 h: **Change smoothing** to **Average smoothing**

**Actions:** **Note** (in the **Alerts** group of the list)

**选项：**

* select the event to record: **Note**, **Exercise**, **Question**, **Announcement** or **Pump Site Change**, and an optional note. The name of the action changes to the event you select.
* **Duration**: used for **Note**, **Exercise** and **Pump Site Change**. **Question** and **Announcement** have no duration: they record your current BG instead.
* **Pump Site Change** resets the cannula age, as if you had recorded a site change by hand. Example: some pumps (like the Combo) record a reservoir change by themselves, but not the site change. If you always change both together, a rule with **Insulin age** less than 1 hour and **Cannula age** more than 24 hours can record the site change for you.

![The events of the Note action](../images/Automations/automation_action_careportal_events.png) ![The Note action set to Pump Site Change](../images/Automations/automation_action_careportal_site_change.png)

**Actions:** **Send SMS to all numbers** (in the **Alerts** group)

**选项：**

* enter the text of the message. It is sent to all the phone numbers allowed in the [SMS Communicator](../RemoteFeatures/SMSCommands.md) settings. The SMS Communicator plugin must be enabled.

**Actions:** **Change profile to** (in the **Profile** group)

**选项：**

* select the **Profile** to activate. It is activated at 100%, without timeshift. If this profile is already active, the action does nothing.

**Actions:** **Enable/disable SMB** (in the **Loop & insulin** group)

**选项：**

* choose **On** or **Off**. This changes the **Enable SMB** setting of OpenAPS SMB, exactly as if you had changed it in **Settings**, and stays until you or another rule change it back.

**Actions:** **Run Autotune** (in the **Loop & insulin** group)

**选项：**

* select the profile to tune and the number of days: see [Run Autotune with an automation rule](#autotune-run-autotune-with-an-automation-rule).

**Actions:** **Stop processing** (in the **Loop & insulin** group)

**选项：**

* none. While the conditions of a rule with this action are true, **AAPS** does not check the rules below it in the list. As soon as its conditions are false again, the rules below are checked as usual. Add it to a rule that must take priority over the rules below it (see [the order of the Automations](#Automations-the-order-of-the-automations-in-the-list-matters)).

**Actions:** **Run scene**, **Enable scene**, **Disable scene** (in the **Scenes** group)

**选项：**

* select the [scene](Scenes.md) to run, enable or disable.

添加“操作”后，必须点击并调整默认值以更改为所需的数字。

![Temp target action values](../images/Automations/automation_action_temp_target_values.png)

(Automations-the-order-of-the-automations-in-the-list-matters)=
## **自动操作**列表中的顺序很重要
 **AAPS**将按照偏好顺序自动执行创建的规则，从**自动操作**列表的顶部开始。 For example, if the ‘Low’ **Automation** is the most important **Automation**, above all other rules, then this **Automation** should appear at the top of the user’s **Automation** list as demonstrated below:


![List of automation rules](../images/Automations/automation_rule_list.png)

To reprioritize the **Automation** rules, touch and hold the **=** handle on the right side of the rule. Reorder the **Automations** by moving the rules up or down.

![Reorder automation rules](../images/Automations/automation_rule_reorder.png)

## 如何删除自动操作规则

要删除一个**自动化**规则，请点击垃圾桶图标。

![Delete automation rules](../images/Automations/automation_rule_delete.png)

## 自动化示例

以下是**自动操作**的示例。 Further discussion on **Automations** and how users have individualised their **Automation** can be found in Facebook discussions groups or on Discord. 下面的示例不应在用户未充分理解**自动操作**将如何工作的情况下复制。

(automations-low-glucose-temp-target)=
### 低血糖临时目标

This **Automation** triggers an automatic **Temp Target** when **BG** falls below a certain threshold — here, when glucose is lesser than 70 mg/dL, a target of 110 mg/dL is started for 30 minutes:

![Example: low glucose rule](../images/Automations/automation_example_low_glucose_rule.png)

### 午餐时间临时目标（带“位置”）

![Example: lunch rule](../images/Automations/automation_example_lunch_rule.png)

此**自动操作**为在工作日中午左右吃午餐的用户创建，但仅在用户位于设定“位置”时才触发。  So if the user is not at work one day, this **Automation** will not activate.

This **Automation** will set a low **Temp Target** (Eating Soon) at 13:00 to drive BG to 90 mg/dL (or 5 mmol/L) in preparation for lunch.

The ‘Trigger’ location has a name, a position (tap **Pick from map**, or use your current location) and a radius in metres, and fires when you are inside (or outside) the area:

![Example: lunch rule with location condition](../images/Automations/automation_example_lunch_location_condition.png)

由于“和”连接，**自动操作**仅在“选定时间”且用户在选定位置时才发生。

The **Automation** will not be triggered on any other time at this location or at this time outside the 50-metre radius around the chosen position.

### Wi-Fi SSID Location Automation

Using a Wi-Fi SSID is a good option to trigger an **Automation** while within range of a specific Wi-Fi network (compared with GPS): it is fairly precise, uses less battery, and works in enclosed spaces where GPS and other location services might not be available.

Here is another example of setting up a **Temp Target** for work days only before breakfast (1).


The **Automation** will trigger at 05:30am only on Monday-Friday (2)  
and while being connected to a home Wi-Fi network (3).


It will then set a **Temp Target** of 75 mg/dL for 30 minutes (4). One of the advantages of including the location is that it will not trigger if the user is traveling on vacation, for instance.

![Wi-Fi rule: task name (1), weekday time condition (2) and Wi-Fi SSID condition (3)](../images/Automations/automation_example_wifi_rule.png)

Scroll down to see the action: a **Temp Target** of 75 mg/dL for 30 minutes (4).

![Wi-Fi rule action: Start temp target of 75 mg/dL for 30 minutes (4)](../images/Automations/automation_example_wifi_action.png)

以下是详细**自动操作**触发器的截图：

1) Under the main “AND” (both conditions need to be met to trigger) 1) Recurring time = M,T,W,T,F At 5:30am  
1) Wi-Fi SSID = My_Home_WiFi_Name

![Example: WiFi condition](../images/Automations/automation_example_wifi_condition.png)

(automating-preference-settings-export)=

## 自动化参数设置导出

### 无人值守导出模式：定时导出​（每日执行）

自动化触发配置截图说明​：

条件1：周期性时间 = 周一、周二、周三、周四、周五 上午8:00 操作1：设置导出（"治疗记录文本"输入"每日"）

![预定导出](../images/Automations/automation_settings_export_daily.png)

注：所有导出操作均记录于Careportal模块

### 无人值守导出模式：Pod激活触发导出​（仅限贴敷式胰岛素泵）

自动化触发配置截图说明​：

条件1：Pod激活事件 操作1：设置导出（"治疗记录文本"输入"Pod激活：设置导出"）

![Pod激活时导出](../images/Automations/automation_settings_export_pod_activation.png)

注：导出操作将被记录在Careportal系统。重要提示：如果您之前未执行过手动设置导出，自动化功能将**完全**不会触发。 See [Settings → Maintenance](#preferences-maintenance-settings) for proper activation of unattended settings export.


## 自动化的日志

**AAPS** shows a log of the most recent **Automation** events at the bottom of the **Automation** screen, below the rules. Use it to verify that your rules triggered when you expected them to.

In the example below, the **Low glucose temp target** rule (1) (see [Low Glucose Temp Target](#automations-low-glucose-temp-target) above) is enabled. The log (2) shows that at 03:09 PM, glucose fell below 70 mg/dL and the rule triggered:
* the action was "Start temp target: 110mg/dL@30 min": a **Temp Target** of 110 mg/dL for 30 minutes;
* **OK** at the end means that the action was carried out successfully.

![Automation screen: an enabled rule (1) and its log entry (2)](../images/Automations/automation_example_log.png)

(automations-troubleshooting)=

## 故障排除

* 问题：__我的自动化没有由AAPS触发？__

Check that the box left of the **Automation** name is ‘ticked’ to ensure the rule is activated:

![Automation rules switched on and off](../images/Automations/automation_rule_activated_deactivated.png)

* 问题：__我的自动化触发顺序不正确。__

Check your rule prioritization order as discussed above here.

* Problem: __A condition shows "Unknown trigger … - never true".__

The rule contains a trigger that this version of **AAPS** cannot read, for example after you went back to an older version or imported settings from a newer one. Such a trigger is never true, so the rule does not run. It is kept unchanged, so a newer version can still use it. Edit the rule and replace the trigger, or update **AAPS**.

## 自动化的替代方案

对于高级用户，还有其他方法可以使用IFTTT或第三方Android应用（如Automate）来自动化任务。 
