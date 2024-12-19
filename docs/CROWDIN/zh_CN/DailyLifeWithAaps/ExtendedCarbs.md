(Extended-Carbs-extended-carbs-ecarbs)=
# 扩展碳水化合物 / "eCarbs"

## 什么是eCarbs以及它们何时有用？

在常规泵治疗中，扩展大剂量是一个很好的方式来处理富含脂肪或其他缓慢吸收的餐食，这些食物会使血糖升高的时间长于胰岛素的作用时间。 然而，在闭环环境中，扩展输注并没有太多意义（并且存在技术难题），因为它们基本上是一个固定的、较高的临时基础率，这与闭环如何工作（即动态调整基础率）相悖。 详情请参阅下文关于[扩展输注](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment)的部分。

尽管如此，处理这类餐食的需求仍然存在。 这就是为什么从版本2.0开始，AAPS支持所谓的扩展碳水化合物或eCarbs。

eCarbs是指分散在几个小时内的碳水化合物。 对于标准餐食，如果碳水化合物多于脂肪/蛋白质，通常只需提前输入碳水化合物（并根据需要减少初始输注量）就足以防止胰岛素过早输注。  但对于吸收较慢的餐食，如果一开始就输入全部碳水化合物会导致SMB产生过多的IOB，此时可以使用eCarbs来更准确地模拟碳水化合物（以及为其他广义上的营养素输入的任何碳水化合物等价物）的吸收过程及其对血糖的影响。 有了这些信息，闭环可以逐渐地给予SMBs来处理这些碳水化合物，这可以看作是一个动态的扩展输注（在没有SMBs的情况下也可以使用，但效果可能较差）。

**注意**：eCarbs不仅限于富含脂肪/蛋白质的餐食：它们还可以用于任何影响血糖升高的情况，例如服用皮质类固醇等其他药物。

## 使用eCarbs的机制

To enter eCarbs, set a duration in the *Carbs* dialog on the overview tab, the total carbs and optionally a time shift (*numbers below are just examples, you will need to try your own values to arrive at satisfactory glucose response for your use-cases*):

![Enter carbs](../images/eCarbs_Dialog.png)

The eCarbs on the overview tab, note the carbs in brackets at the COB field, which shows the carbs in the future:

![eCarbs in graph](../images/eCarbs_Graph.png)

______________________________________________________________________

A way to handle fat and protein with that feature is described here: [https://adriansloop.blogspot.com/2018/04/page-margin-0.html](https://adriansloop.blogspot.com/2018/04/page-margin-0.html)

______________________________________________________________________

## Recommended setup, example scenario, and important notes

The recommended setup is to use the OpenAPS SMB APS plugin, with SMBs enabled as well as the *Enable SMB with COB* preference being enabled.

A scenario e.g. for a Pizza might be to give a (partial) bolus up front via the *calculator* and then use the *carbs* button to enter the remaining carbs for a duration of 4-6 hours, starting after 1 or 2 hours.

**Important notes:** You'll need to try out and see which concrete values work for you of course. You might also carefully adjust the setting *max minutes of basal to limit SMB to* to make the algorithm more or less aggressive. With low carb, high fat/protein meals it may be enough to only use eCarbs without manual boluses (see the blog post above). When eCarbs are generated, a Careportal note is also created to document all inputs, to make it easier to iterate and improve inputs.

(Extended-Carbs-extended-bolus-and-why-they-wont-work-in-closed-loop-environment)=
## Extended bolus and why they won't work in closed-loop environment?

As mentioned above extended or multiwave boluses do not really work in a closed loop environment. [See below](#why-extended-boluses-wont-work-in-a-closed-loop-environment) for details

(Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)=
### Extended bolus and switch to open loop - Dana and Insight pump only

Some people were asking for an option to use extended bolus in AAPS anyway as they wanted to treat special foods the way they are used to.

That's why as of version 2.6 there is an option for an extended bolus for users of Dana and Insight pumps.

- 闭环将自动停止并切换到开环模式，以运行扩展大剂量。
- Bolus units, remaining and total time will be shown on homescreen.
- On Insight pump extended bolus is *not available* if [TBR emulation](#Accu-Chek-Insight-Pump-settings-in-aaps) is used.

![Extended bolus in AAPS 2.6](../images/ExtendedBolus2_6.png)

(Extended-Carbs-why-extended-boluses-won-t-work-in-a-closed-loop-environment)=
### Why extended boluses won't work in a closed loop environment

1. The loop determines that now 1.55U/h is to be delivered. Whether this is delivered as an extended bolus or TBR does not matter to the algorithm. In fact, some of the pumps use the extended bolus. What should happen then? Most pump drivers then stop the extended bolus -> You didn't even need to start it.

2. If you had the extended bolus as input, what should happen in the model?

   1. Should it be considered neutral together with the BR and looped on it? Then the loop should also be able to reduce the bolus if, for example, you get too low and all the "neutral" insulin is taken away?
   2. Should the extended bolus simply be added? So the loop should simply be allowed to continue? Even in the worst hypo? I don't think this is so good: A hypo is foreseen but it must not be prevented?

3. The IOB that the extended bolus builds up materializes after 5 minutes at the next run. Accordingly, the loop would give less basal. So not much changes... except that the possibility of hypo avoidance is taken.
