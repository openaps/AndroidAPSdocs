# How to use Autotune plugin

Autotune插件是OpenAPS自动调节算法在AAPS中的具体实现。 It analyzes your recent AAPS history to suggest adjustments to your basal rates, ISF and carb ratio.

Autotune Plugin is available in AAPS releases since [3.4](#version3400) but is hidden by default.

(autotune-how-autotune-calculates-adjustments)=
## How Autotune calculates adjustments

Autotune looks back over your recent AAPS history — CGM readings, boluses, carbs and temporary basal rates — and works out where your **Profile** (basal rates, ISF, carb ratio) doesn't quite match what actually happened to your BG.

For each 5-minute data point, it compares your **actual BG change** to the change your Profile predicted, and sorts the resulting deviation into one of three buckets:

* deviations that happened with no carbs on board and no insulin activity (used to tune **basal rates**, hour by hour),
* deviations that happened after a bolus/correction with no carbs (used to tune **ISF**), or
* deviations that happened while carbs were absorbing (used to tune **carb ratio**).

It then looks at the pattern of deviations in each bucket (using percentiles rather than a simple average, so a few noisy data points don't skew the result) and proposes a new value for that hour/parameter.

To keep any single run from overcorrecting, each Autotune run only ever moves a value a fraction of the way towards what the data suggests: up to 10% for ISF and carb ratio, and up to 20% for each basal segment. Overall drift is further capped by the **Max autosens ratio** / **Min autosens ratio** settings (see [Other settings](#autotune-other-settings) below) — the same bounds that limit Autosens. This is why Autotune is meant to be run repeatedly (day after day, or nightly) rather than trusted after a single run: results should converge gradually, and a big jump on one run is a sign to double check your data (missed carbs, a bad sensor day, _etc._) rather than to trust it blindly.

Autotune can be run three ways: manually as a one-off from within the plugin (as described below), automatically every night via an [automation rule](#autotune-run-autotune-with-an-automation-rule), or — outside of AAPS entirely — as a standalone command-line tool against exported data, which is how some community guides describe using it without a phone actively running AAPS.

*For the underlying oref0 algorithm in full mathematical detail, see [OpenAPS's Autotune documentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html).*

## Show the Autotune plugin

Create an empty file named `enable_autotune` in the `extra` subfolder of your phone [AAPS directory](#preferences-maintenance-settings).

***NOTE: Ensure you check in the AAPS settings where your AAPS Directory is, and that you placed the file in the correct one. Several users have put the file into the wrong folder.***

![Enable Autotune](../images/Autotune/Autotune_0.png)

Restart **AAPS**. Then open the **menu** (☰), select **Configuration**, then the **General** category, and tick **Autotune**. The card then shows **Settings** and **Open plugin**:

![Autotune ticked in Configuration > General](../images/v4/Configuration/configuration_general_autotune.png)

## Autotune用户界面

Tap **Open plugin** on the **Autotune** card to open the Autotune screen:

![Autotune screen with the profile, the number of days of data and a warning about the selected profile](../images/Autotune/Autotune_1b.png)

- 您可在配置文件下拉菜单中选择需要调整的输入配置文件（默认已选中当前生效的配置文件）。
  - Note: each time you select a new profile, previous results will be removed and the **Number of days of data** will be set to its default value
- Then **Number of days of data** (called **Tune days** in older versions) is to select the number of days used in calculation to tune your profile. 该参数取值范围为1至30天（最小值1天，最大值30天）。为确保获得准确、平滑的迭代计算结果，该数值不宜过小（建议每次计算至少使用7天以上数据）。
  - Note: each time you change the **Number of days of data**, previous results will be removed
- "最近执行"是一个可恢复您最后一次有效计算结果的链接功能。若当日未启动Autotune功能，或因前述计算参数调整导致历史结果被清除，您可通过"最近执行"功能恢复最近一次成功运行的参数与结果。
- 警告信息将显示所选配置文件的相关参数（例如：当存在多个胰岛素敏感系数（ISF）或多个胰岛素碳水化合物比值（IC）时）。
  - 注意：Autotune算法计算时仅支持单一胰岛素碳水化合物比值（IC）与单一胰岛素敏感系数（ISF）参数。当前尚无支持昼夜节律性胰岛素碳水化合物比值（circadian IC）或昼夜节律性胰岛素敏感系数（circadian ISF）调节的Autotune算法。若您的输入配置文件包含多组参数值，系统将在警告区域显示用于配置文件调优的基准平均值。
- Check Input Profile button open the Profile Viewer to allow you a quick verification of your profile (Units, IC, ISF, basal and target)
  - 注意：Autotune算法仅对以下参数进行优化调节：单一数值的胰岛素碳水化合物比值（IC），单一数值的胰岛素敏感系数（ISF），具有昼夜节律变化的基础率（basal）。 Units and target will remain unchanged in output profile.

- "Run Autotune" will launch Autotune calculation with selected profile and the selected number of days of data
  - 注意：Autotune算法计算过程可能耗时较长。启动计算后，您可切换至其他界面（如主界面等），稍后返回Autotune插件查看计算结果。

  ![Autotune Run start ](../images/Autotune/Autotune_2b.png)

- 运行过程中，系统将在下方实时显示中间计算结果。

  - 注意：运行期间所有设置将被锁定，您将无法再修改已选输入配置文件或调节天数参数。若需使用其他参数启动新计算任务，您必须等待当前计算流程完成。

  ![Autotune during run ](../images/Autotune/Autotune_3b.png)

- 当Autotune算法计算完成后，界面将显示优化后的配置文件（Tuned profile）和底部四个功能按钮。

  ![Autotune Result ](../images/Autotune/Autotune_4b.png)

- 必须始终对比输入配置文件（"Profile"列）、优化输出配置文件（"Tuned"列）和各参数值的变化百分比（"%"列）。

- 对于基础率（basal rates）参数，系统还会显示"数据缺失天数"统计值。当Autotune算法在特定时段（如餐后碳水化合物吸收期）缺乏足够被标记为"基础率（Basal）"的数据时，系统将记录为数据缺失天数（missing days），此类情况将影响该时段基础率的优化计算。该数值应尽可能保持最低，特别是在基础率调节至关重要的时段（如夜间或傍晚后期）。

- 点击"对比配置文件"按钮将打开配置文件对比视图。输入配置文件以蓝色标识，优化输出配置文件（标为"Tuned"）则以红色显示。

  - 注意：下例所示输入配置文件中的胰岛素碳水化合物比值（IC）与胰岛素敏感系数（ISF）均呈现昼夜节律变化，但经计算输出的优化配置文件将生成单一参数值。 If it's important for you to get a circadian output profile see [Circadian IC or ISF profile](#autotune-circadian-ic-or-isf-profile) below.

  ![Autotune Compare profiles ](../images/Autotune/Autotune_5.png)

- 若优化结果可信（输入与输出配置文件间变化百分比偏低），您可依次点击"激活配置文件"按钮，再点击"确认"完成参数生效验证。

  - Activate Tuned profile will automatically create a new profile "Tuned" in your profile list (**Manage → Profile**).
  - If you already have a profile named "Tuned" in **Manage → Profile**, then this profile will be updated with calculated Autotune profile before the activation

  ![Autotune Activate profile ](../images/Autotune/Autotune_6.png)

- 若认为优化配置文件（Tuned profile）需进一步调整（例如某些参数变化幅度过大），您可点击"复制至本地配置文件"按钮进行手动修正。

  - A new profile with the prefix "Tuned" and the date and time of the run will be created in **Manage → Profile**

  ![Autotune Copy to local profile ](../images/Autotune/Autotune_7.png)

- You can then edit the Tuned profile: open **Manage** > **Profile**, swipe to the card named "Tuned" with the date and time of the run, and tap the **Edit** (pencil) button

  - the values in the profile will be rounded in the user interface to your pump capabilities

  ![Autotune local profile update ](../images/Autotune/Autotune_8.png)

- 若需将Autotune优化结果替换当前输入配置文件，请点击"更新输入配置文件"按钮，在弹出窗口中点击"确认"完成验证

  - Note: if you click on "Activate profile" after "Update input profile", then you will activate your updated profile and not the default "Tuned" profile.

  ![Autotune Update input profile ](../images/Autotune/Autotune_9.png)

- 若您已更新输入配置文件，原"更新输入配置文件"按钮将替换为"恢复输入配置文件"按钮（参见下方截图说明）。 You can that way immediately see if your current input profile in **Manage → Profile** already includes the result of last run or not. You also have the possibility to recover your input profile without autotune result with this button

  ![Autotune Update input profile ](../images/Autotune/Autotune_10.png)



## Autotune设置

(autotune-plugin-settings)=

### Autotune插件设置

  ![Autotune settings in AAPS 4](../images/preferences/settings_autotune.png)

```{admonition} Only DEV
:class: note
The **Auto switch profile** feature is only available in Dev/Engineering mode.
```

- **Auto switch profile** (default Off): see [Run Autotune with an automation rule](#autotune-run-autotune-with-an-automation-rule) below. 若将此设置切换为"开启"状态，系统将自动使用优化配置文件（Tuned profile）更新输入配置文件，并自动激活更新后的配置。
  - **警告：在随后数日内，您必须对未经修改即更新激活的优化配置文件（Tuned profile）进行持续验证，确保其确实能提升闭环系统运行效果。**

- **Categorize UAM as basal** (default Off): This setting is for the users using AndroidAPS without any carbs entered (Full UAM). 当设置为"关闭"时，系统将禁止将未标记餐食（UAM）归类为基础率。
  - 注意：若系统在一天内检测到至少1小时的碳水化合物吸收活动，则无论当前设置为"开启"或"关闭"，所有标记为"未标记餐食（UAM）"的数据都将被归类为基础率。
- **Default tune days** (default 5): You can define the default value with this setting. Each time you select a new profile in the Autotune plugin, the **Number of days of data** will be replaced by this default value
- **Use circadian IC/ISF** (default Off): see [Circadian IC or ISF profile](#autotune-circadian-ic-or-isf-profile) below.

(autotune-other-settings)=
### 其他设置

- Autotune算法还将通过最大自动灵敏度比率（Max autosens ratio）和最小自动灵敏度比率（Min autosens ratio）限制调整幅度。 You can see and adjust these values in [**Settings** > **Absorption settings** > **Advanced Settings**](../SettingUpAaps/Preferences.md) (**Autosens max** and **Autosens min**).

  ![Autosens max and Autosens min in the advanced absorption settings](../images/preferences/settings_absorption_advanced.png)



## 高级功能

(autotune-circadian-ic-or-isf-profile)=

### 昼夜节律IC或ISF配置文件

- If you have important variation of IC and/or you ISF in your profile, and you fully trust in your circadian time and variation, then you can enable **Use circadian IC/ISF** (called "Apply average result in circadian IC/ISF" in older versions)

  - 请注意：Autotune计算将始终基于单一参数值执行，且该算法不会对昼夜节律波动进行优化调整。本设置仅对您昼夜节律参数中的胰岛素碳水化合物比值（IC）和/或胰岛素敏感系数（ISF）应用计算得出的平均波动值。

- 请参见下方截图对比：左侧-禁用"平均波动应用"功能的优化配置文件（Tuned profile），右侧-启用"平均波动应用"功能的优化配置文件。

  ![Autotune default screen ](../images/Autotune/Autotune_13.png)



### 按周指定日期调校

- If you tap the **eye** icon on the right of the **Number of days of data** field, you will see the day selection. 您可指定每周参与Autotune计算的特定日期（如下图所示示例：已排除周六周日的"工作日"模式将不纳入计算范围）。
  - If the number of days included in Autotune calculation is lower than the **Number of days of data**, then you will see how many days will be included on the right of the days selector (10 days in the example below)
  - This setting gives good results only if the number of remaining days is not too small (for example if you Tune a specific profile for week end days with only Sunday and Saturday selected, you should set **Number of days of data** to at least 21 or 28 to have 6 or 8 days included in Autotune calculation)

  ![Autotune default screen ](../images/Autotune/Autotune_14b.png)

- During Autotune calculation, you can see the progress of the calculations ("Partial result day 1 / 4 tuned" in the example below, with Saturday and Sunday excluded)

  ![Autotune default screen ](../images/Autotune/Autotune_15b.png)



(autotune-run-autotune-with-an-automation-rule)=

## 通过自动化规则运行Autotune

```{admonition} Only DEV
:class: note
The **Auto switch profile** feature is only available in Dev/Engineering mode.
```

首要步骤是为Autotune自动化规则定义正确触发器：

注：有关如何设置自动化规则的更多信息，请参见[此处](../DailyLifeWithAaps/Automations.md)。

- 您应选择"循环时间触发器"：每日仅运行一次Autotune，该算法设计为每日执行（每次运行将自动顺延一天，且配置文件修改幅度应保持最小）。

  ![Autotune default screen ](../images/Autotune/Autotune_16.png)

- 建议初期在日间运行Autotune以便实时核查优化结果。若需夜间运行Autotune，请将触发器时间设置为凌晨4点或更晚，以确保将当日数据纳入下次Autotune计算范围。

  ![Autotune default screen ](../images/Autotune/Autotune_17.png)

- Then you can select the **Autotune profile** action (in the **Loop & insulin** group)

  ![Autotune default screen ](../images/Autotune/Autotune_18.png)

- You can then adjust the parameters of the action for your run. In a new action, **Select profile to tune** shows the first profile of your local profile list, the **Tune days** field is empty and all days are selected. Choose the profile to tune and enter the number of **Tune days** (1 to 30).

  ![Autotune default screen ](../images/Autotune/Autotune_19b.png)

- After a few days, if you fully trust Autotune results and percentage of modification is low, you can modify [Autotune settings](#autotune-plugin-settings) "**Auto switch profile**" to enabled to automatically update and activate profile tuned after calculation.

注意：如需按周自动调校特定日期配置文件（例如分别为"周末"和"工作日"创建独立配置），请为每个配置文件创建独立规则，在触发器和Autotune动作中保持日期选择一致，将"调校天数"设为足够大的值（确保包含6-8个有效数据日），触发器时间必须设置在凌晨4点之后，等等……

- See below an example of rule that runs every working day (Monday to Friday) at 04:00 and tunes the profile "Normal" with 14 **Tune days**, working days only (so only 10 days are included in the Autotune calculation).

  ![Autotune default screen ](../images/Autotune/Autotune_20b.png)



## 提示和技巧

Autotune算法依赖数据库中的历史数据进行计算，因此若您在新手机上刚安装AAPS系统，需等待数日积累足够天数的数据后，方可启动Autotune获取有效调校结果。

Autotune仅作为辅助工具，使用者需定期核验计算生成的配置文件是否符合临床预期。若存在任何疑问，请修改Autotune设置（如调整计算天数等参数），或者将计算结果复制至本地配置文件，或者使用前手动调整配置文件参数。

务必手动运行Autotune多日以验证结果可靠性后，方可应用调校方案。​ 仅当您完全信任Autotune计算结果，且新旧配置文件间差异微小时，方可启用自动化功能（此前绝对不可启用）。​

- Autotune的适配性因人而异——**若对计算结果存疑，请停止使用**​

It's also important to analyze Autotune results to understand (or try to understand) why Autotune proposes these modifications

- 您的配置文件可能出现整体强度调整（例如：基础率总量提升伴随胰岛素敏感系数(ISF)与碳水化合物系数(IC)数值下降的情况）。该调整可能伴随连续数日的自动灵敏度校正值高于100%（需更积极干预）或低于100%（敏感性提升）的情况。
- Sometimes Autotune proposes a different balance between basal rates and IC/ISF (for ex lower basal and more aggressive IC/ISF)

我们建议在以下情况下禁用Autotune功能：

- 未完整记录碳水化合物摄入量
  - If you don't enter carbs correction for hypoglycemia, Autotune will see an unexpected increase of your BG value and will increase your basal rates 4 hours earlier, it could be the opposite of what you need to avoid hypo, especially if it's in the middle of the night. That's why it's important to enter all carbs, especially correction for hypo.
- You have a lot of periods with UAM detected during the day.
  - Do you have entered all your carbs and correctly estimated your Carbs?
  - 所有未标记餐食(UAM)时段（除非全天未摄入碳水且已禁用"UAM归为基础率"功能）都将被归类为基础率，这可能导致基础率被过度提升（远超实际需求）。​

- 碳水化合物吸收速率过缓：若大部分吸收过程依赖min_5m_carbimpact参数计算（可通过COB曲线顶端的橙色小圆点识别此类时段），可能导致COB计算错误并引发连锁性结果偏差。​
  - 运动期间生理敏感性增强：运动时胰岛素敏感性普遍提升且血糖波动趋缓，故运动中和运动后出现碳水化合物缓释时段属常见生理现象。​ 但若频繁出现非预期的碳水化合物缓释现象，则可能需要提高配置文件中的碳水化合物系数(IC)值，或者适当下调min_5m_carbimpact参数阈值。​
- You have "very bad days", for example stuck several hours in hyperglycemia with a huge amount of insulin to be able to go down within the range, or after a sensor change you have long periods of wrong BG values. If during the past weeks you only have one or 2 "bad days", you can disable manually these days in autotune calculation to exclude them from calculation, and again **check carefully if you can trust the results**
- 若参数修改幅度超出合理阈值
  - 建议增加计算天数以获得更平稳的调校结果
