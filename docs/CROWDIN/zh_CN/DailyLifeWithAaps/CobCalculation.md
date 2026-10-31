# 活性碳水（COB）计算

## AAPS如何计算COB值

当用户以饮食记录或碳水化合物校正方式输入碳水化合物时，**AAPS**将把该计算结果纳入当前活性碳水化合物（**COB**）。​ **AAPS**然后根据观察到的用户**BG**（血糖）值的偏差来计算用户碳水化合物的吸收情况。 The rate of absorption depends on the carb’s sensitivity factor (**CSF**). This is not a feature within the user’s **Profile** but is calculated by **AAPS** according to **ISF/I:C** setup, and is determined by how many mg/dL 1 g of carbs will raise the user’s **BG**.

## 碳水化合物敏感系数（Carb Sensitivity Factor，CSF）

**AAPS**采用的公式是：

- 吸收的碳水 = 血糖变化 * ic / isf。

对用户**配置文件**的影响包括：

- 增加<1>IC</strong>——通过增加每5分钟吸收的碳水化合物量来缩短总吸收时间；

- 增加<1>ISF</strong>——通过减少每5分钟吸收的碳水化合物量来延长总吸收时间；

- 改变<1>配置文件百分比</strong>——百分比的改变会同时增加/减少这两个值，这对碳水化合物吸收时间没有影响。

例如，如果用户的**配置文件**中的**ISF**是100，**I:C**是5，那么用户的碳水化合物敏感系数将是20。 For every 20 mg/dL the user’s **BG** goes up, 1 g of carbs will be calculated as absorbed by **AAPS**. 正的**IOB**也会影响**COB**的计算。 So, if **AAPS** predicts the user’s **BG** to go down by 20 mg/dL because of **IOB** and it instead stayed flat, **AAPS** would also calculate 1 g of carbs as absorbed.

根据用户在**AAPS**中选择的敏感性算法，碳水化合物也会通过以下描述的方法被吸收。

## 碳水化合物敏感性 - Oref1

指定时间后，未吸收的碳水化合物将被切断：

![Oref1](../images/cob_oref0_orange_II.png)

![COB graph with Oref1 cut-off](../images/cob_oref0_orange_I.png)

```{admonition} Older screenshot
:class: note
The screenshot above is from an earlier **AAPS** version — in **AAPS** 4 the graphs look slightly different, but the **COB** graph carries the same information.
```


## 碳水化合物敏感性 - 加权平均（WeightedAverage）

吸收计算使得在指定时间后COB = 0：

![AAPS, WeightedAverage](../images/cob_aaps2_orange_II.png)

如果采用最小碳水化合物吸收（min_5m_carbimpact）而非根据**血糖（BG）**偏差计算得出的值，那么在**活性碳水（COB）**图上会出现一个橙色的点。

(CobCalculation-detection-of-wrong-cob-values)=
## COB错值检测

如果算法检测到当前的**活性碳水（COB）**计算不正确，**AAPS**会在用户即将根据上一餐的**COB**进行大剂量注射时发出警告。在这种情况下，它将在使用校正注射向导后的确认屏幕上为用户提供额外的提示。

### AAPS如何检测错误的COB值

通常，__AAPS__通过**BG</0>偏差来检测碳水化合物的吸收情况。若用户已输入碳水化合物但**AAPS**无法通过**BG**偏差检测其预估吸收量，系统将采用[min_5m_carbimpact](#Preferences-min_5m_carbimpact)方法进行吸收量计算（即所谓的"回退机制"）。​ 由于这种方法只计算最小碳水化合物吸收量，而不考虑**BG**偏差，因此可能会导致错误的COB值。</p>

![关于错误的碳水化合物吸收量（COB）值的提示](../images/Calculator_SlowCarbAbsorption.png)

In the screenshot above, 66% of time the carb absorption was calculated by the min_5m_carbimpact instead of the value detected from deviations. 这表明用户实际的**活性碳水**可能比算法计算的要少。

### 如何应对此警告

- 考虑取消注射——按“取消”而不是“确定”。
- 使用胰岛素向导重新计算即将摄入餐食，保持**COB**处于未勾选状态。​
- 如果您需要补针，请手动输入。
- 注意避免过量注射或重复输注！


### 为什么算法不能正确检测COB？

这可能是因为：
- 用户可能在输入时高估了碳水化合物量。
- 上一餐后进行了活动/锻炼。
- 碳水系数需要调整了
- min_5m_carbimpact的值设置错误（建议使用SMB时为8，使用AMA时为3）。


## 手动校正输入的碳水化合物

If carbs are over or underestimated this can be corrected through the **Treatments history** screen as described [here](#screens-bolus-carbs).


## 碳水修正 - 如何删除治疗中的碳水化合物条目


The **Treatments history** screen can be used to correct a faulty carb entry by deleting it. 这可能是因为用户高估或低估了碳水化合物的摄入量：

![Deleting a carb entry from Treatments history](../images/e123d85d-907e-4545-bf1b-09fee4d42555.png)

1. Check and remember actual **COB** and **IOB** on the **AAPS** main screen.
2. Open **Treatments history** (drawer menu → *Treatments history*), tab **Carbs and bolus**. Depending on the pump, the carbs might show together with insulin in one line or as a separate entry (e.g. with Dana RS).
3. **Long-press** the faulty carb entry — the list switches to **selection mode** with a checkbox on every line, and the entry is ticked (marked **1** above). Tick any further entries you want to remove as well.
4. Tap the **🗑 Delete** icon in the top bar (marked **2**) and confirm — the confirmation dialog lists exactly what will be removed.
5. Make sure carbs are removed successfully by checking **COB** on the **AAPS** main screen again.
6. Do the same for **IOB** if there is just one line including carbs and insulin.
7. 如果碳水化合物没有按预期移除，并且如本节所述添加了额外的碳水化合物，那么活性碳水（**COB**）的输入将会过高，这可能导致**AAPS**输送过多的胰岛素。
8. Enter the correct carbs amount through the **Carbs** dialog (**Treatments** → **Carbs**) and set the correct event time.
9. If there was just one line including carbs and insulin the user should also re-add the amount of insulin. Make sure to set the correct event time and check **IOB** on the main screen after confirming the new entry.

