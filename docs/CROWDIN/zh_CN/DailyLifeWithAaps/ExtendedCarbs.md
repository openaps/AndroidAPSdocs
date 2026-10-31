(Extended-Carbs-extended-carbs-ecarbs)=
# 扩展碳水化合物 / "eCarbs"

## 什么是eCarbs以及它们何时有用？

在常规泵治疗中，扩展大剂量是一个很好的方式来处理富含脂肪或其他缓慢吸收的餐食，这些食物会使血糖升高的时间长于胰岛素的作用时间。然而，在闭环环境中，扩展输注并没有太多意义（并且存在技术难题），因为它们基本上是一个固定的、较高的临时基础率，这与闭环如何工作（即动态调整基础率）相悖。详情请参阅下文关于[扩展输注](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment)的部分。

尽管如此，处理这类餐食的需求仍然存在。 Which is why AAPS supports so called extended carbs or eCarbs.

eCarbs are carbs that are split up over several hours. 对于标准餐食，如果碳水化合物多于脂肪/蛋白质，通常只需提前输入碳水化合物（并根据需要减少初始输注量）就足以防止胰岛素过早输注。但对于吸收较慢的餐食，如果一开始就输入全部碳水化合物会导致SMB产生过多的IOB，此时可以使用eCarbs来更准确地模拟碳水化合物（以及为其他广义上的营养素输入的任何碳水化合物等价物）的吸收过程及其对血糖的影响。有了这些信息，闭环可以逐渐地给予SMBs来处理这些碳水化合物，这可以看作是一个动态的扩展输注（在没有SMBs的情况下也可以使用，但效果可能较差）。

**Note:** eCarbs aren't limited to fatty / protein heavy meals: they can also be used to help in any situation where there are influences that increase the blood sugar, e.g. other medication like corticosteroids.

## 使用eCarbs的机制

To enter eCarbs, open the **Carbs** dialog (**Treatments** → **Carbs**), enter the total carbs, set a **Duration**, and optionally shift the start with **Carb time** (*numbers below are just examples, you will need to try your own values to arrive at satisfactory glucose response for your use-cases*):

![输入碳水化合物](../images/eCarbs_Dialog.png)

The eCarbs on the main screen: the number in brackets in the **COB** field shows the carbs still to come, and the **COB** graph shows each future eCarbs entry as an orange marker. If you don't see a **COB** graph, add one with **Add graph** below the graphs (see [AAPS screens](../DailyLifeWithAaps/AapsScreens.md)).

![eCarbs in the COB field and on the COB graph](../images/eCarbs_Graph.png)

(AapsScreens-carbs-type)=
## Carbs type in the Bolus wizard: bread, cake or pizza

In the [Bolus wizard](#aaps-screens-bolus-wizard), three buttons below the **Carbs** field let you choose how fast your meal is absorbed. Pick one before you confirm. Depending on the type, **AAPS** takes a part of the carbs you typed as normal carbs, and adds [extended carbs ("eCarbs")](#Extended-Carbs-extended-carbs-ecarbs) later for slow, rich meals. Press the **(i)** icon next to the buttons to see the typical foods for the selected type and what it does to your carbs.

| Type                | Typical foods (as listed in the app)                                                                 | Carbs now, used for the bolus | eCarbs added                                         |
| ------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------- | ---------------------------------------------------- |
| **Bread** (default) | Bread, savory pastries, yogurt, fruit, potatoes, rice, oatmeal, vegetables                           | 100 %                         | 无                                                    |
| **Cake**            | Dumplings, pasta, Asian dishes rich in carbs and fats, sweet and yeast pastries, cereals, honey, jam | 90 %                          | 20 %, starting 60 minutes later, spread over 2 hours |
| **Pizza**           | Lasagna, pizza, hamburgers, fries, baked potatoes, chips                                             | 80 %                          | 35 %, starting 60 minutes later, spread over 3 hours |

**Example**: you type 100 g and choose **Pizza**. The bolus is calculated for 80 g, recorded now. 35 g of eCarbs start 1 hour later and are spread over 3 hours.

Good to know:
* This is not a simple split: with **Cake** and **Pizza**, the carbs recorded add up to **more than you typed** (110 % and 115 %). The extra is only in the eCarbs.
* The bolus only covers the carbs taken now. **AAPS** does not bolus up front for the eCarbs: the loop takes them into account once they start, like any other [eCarbs](#Extended-Carbs-extended-carbs-ecarbs).
* If you set a **Carb time**, the eCarbs start 60 minutes after that time.
* The confirmation dialog shows the eCarbs on their own line, _e.g._ "eCarbs 35g / 3h (+60min)".
* Grams are rounded down to whole numbers.
* The percentages, delays and durations are fixed; they can't be changed in the settings.
* The choice is not remembered: the wizard opens on **Bread** every time.

______________________________________________________________________

这里介绍了一种使用该功能处理脂肪和蛋白质的方法：[https://adriansloop.blogspot.com/2018/04/page-margin-0.html](https://adriansloop.blogspot.com/2018/04/page-margin-0.html)

______________________________________________________________________

## 推荐设置、示例场景和重要注意事项

推荐设置是使用OpenAPS SMB APS插件，启用SMBs以及*启用带有COB的SMB*偏好设置。

A scenario e.g. for a Pizza might be to give a (partial) bolus up front via the *Bolus wizard* and then use the *Carbs* dialog to enter the remaining carbs for a duration of 4-6 hours, starting after 1 or 2 hours.

For a quicker start, the *Bolus wizard* can add eCarbs for you: choose the [carbs type](#AapsScreens-carbs-type) **Cake** or **Pizza** below the **Carbs** field (see above). The amounts and timing are fixed, so use the *Carbs* dialog instead if you want other values.

**重要注意事项**：当然，您需要尝试并确定哪些具体值对您有效。您可能还需要仔细调整*“限制SMB的基础分钟数”*设置，以使算法更激进或更保守。对于低碳水化合物、高脂肪/蛋白质的餐食，可能只使用eCarbs而无需手动输注就足够了（请参阅上面的博客文章）。当生成eCarbs时，还会创建一个Careportal备注来记录所有输入，以便更容易地迭代和改进输入。

(extended-bolus-and-why-they-wont-work-in-closed-loop-environment)=
## 扩展大剂量及其在闭环环境中为何不起作用？

如上所述，扩展大剂量或多波大剂量在闭环环境中实际上并不起作用。 [See below](#why-extended-boluses-won-t-work-in-a-closed-loop-environment) for details

(Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)=
### 扩展大剂量并切换到开环——仅限Dana和Insight泵

有些人仍然希望在AAPS中使用扩展大剂量选项，以便按照他们习惯的方式处理特殊食物。

That's why **AAPS** offers an extended bolus for users of Dana and Insight pumps: open **Manage** and select **Extended Bolus**.

**AAPS** first warns you that the closed loop will be stopped while the extended bolus runs. Tap **OK** to continue:

![Warning: extended bolus stops closed loop mode](../images/extended_bolus_stops_loop.png)

Enter the **Insulin** amount and the **Duration**, then tap the confirm button at the bottom and **OK**:

![Extended bolus dialog with 2 U over 60 minutes](../images/extended_bolus_dialog.png)

On the Insight pump, the extended bolus is *not available* if [TBR emulation](#Accu-Chek-Insight-Pump-settings-in-aaps) is used.

While the extended bolus is running, the loop runs in **Open Loop** mode (the loop icon on the main screen changes), and closed loop is switched on again automatically when the extended bolus ends:

![Open Loop icon on the main screen while an extended bolus is running](../images/extended_bolus_main_screen.png)

The **Manage** menu shows a **Cancel** button with the rate and the elapsed / total time (for example **Cancel 2.00 U/h 1/60'**). Tap it to stop the extended bolus early:

![Cancel button of a running extended bolus in the Manage menu](../images/extended_bolus_running_manage.png)

(why-extended-boluses-won-t-work-in-a-closed-loop-environment)=
### 扩展大剂量在闭环环境中不起作用的原因

1. 闭环系统确定现在需要输注1.55U/h。无论这是以扩展大剂量还是TBR（临时基础率）的形式输注，对算法来说都没有区别。事实上，一些泵使用的是扩展大剂量。那么接下来应该发生什么？大多数泵驱动程序会停止扩展大剂量—>你甚至都不需要开始它。

2. 如果你将扩展大剂量作为输入，模型中应该发生什么？

   1. 它应该与基础率（BR）一起被视为中性并纳入循环中吗？那么，如果例如你的血糖降得太低，所有的“中性”胰岛素都被停止，闭环也应该能够减少注射量吗？
   2. 扩展大剂量应该简单地被加入吗？那么闭环就应该被允许继续吗？即使在最严重的低血糖情况下也是如此吗？我认为这不太好：预见到低血糖但却不能预防？

3. 扩展大剂量产生的活性胰岛素（IOB）在下次运行时会在5分钟后显现。因此，闭环会减少基础胰岛素的输注。所以变化不大……只是失去了避免低血糖的可能性。
