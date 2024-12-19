# 活性碳水（COB）计算

## AAPS如何计算COB值

当用户作为餐食记录或碳水化合物校正的一部分输入碳水化合物时，**AAPS**会将此输入添加到当前的活性碳水（**COB**）中。 **AAPS**然后根据观察到的用户**BG**（血糖）值的偏差来计算用户碳水化合物的吸收情况。 吸收速率取决于碳水化合物的敏感系数（**CSF**）。 这不是用户**配置文件**中的一个功能，而是由**AAPS**根据设置的**ISF/I:C**来计算得出的，并由1克碳水化合物会使用户的**BG**上升多少毫克/分升来决定。

## 碳水化合物敏感系数（Carb Sensitivity Factor，CSF）

**AAPS**采用的公式是：

- 吸收的碳水 = 血糖变化 * ic / isf。

对用户**配置文件**的影响包括：

- 增加<1>IC</strong>——通过增加每5分钟吸收的碳水化合物量来缩短总吸收时间；

- 增加<1>ISF</strong>——通过减少每5分钟吸收的碳水化合物量来延长总吸收时间；

- 改变<1>配置文件百分比</strong>——百分比的改变会同时增加/减少这两个值，这对碳水化合物吸收时间没有影响。

例如，如果用户的**配置文件**中的**ISF**是100，**I:C**是5，那么用户的碳水化合物敏感系数将是20。 每当用户的**BG**上升20毫克/分升时，**AAPS**就会计算出有1克碳水化合物被吸收。 正的**IOB**也会影响**COB**的计算。 因此，如果**AAPS**预测用户的**BG**会因为**IOB**而下降20毫克/分升，但实际上却保持不变，**AAPS**也会计算出有1克碳水化合物被吸收。

根据用户在**AAPS**中选择的敏感性算法，碳水化合物也会通过以下描述的方法被吸收。

## 碳水化合物敏感性 - Oref1

指定时间后，未吸收的碳水化合物将被切断：

![Oref1](../images/cob_oref0_orange_II.png)

![Screenshot 2024-10-05 161009](../images/cob_oref0_orange_I.png)


## 碳水化合物敏感性 - 加权平均（WeightedAverage）

吸收计算使得在指定时间后COB = 0：

![AAPS, WheitedAverage](../images/cob_aaps2_orange_II.png)

If minimal carbs absorption (min_5m_carbimpact) is used instead of value calculated from **BG** deviations, an orange dot appears on the **COB** graph.

(CobCalculation-detection-of-wrong-cob-values)=
## Detection of wrong COB values

**AAPS**  will warn the user if they are about to bolus with **COB** from a previous meal if the algorithm detects current **COB** calculation as incorrect. In this case it will give the user an additional hint on the confirmation screen after usage of bolus wizard.

### How does AAPS detect wrong COB values?

Ordinarily __AAPS__ detects carb absorption through **BG** deviations. Incase the user has entered carbs but **AAPS** cannot detect their estimated absorption through **BG** deviations, it will use the [min_5m_carbimpact](#Preferences-min_5m_carbimpact) method to calculate the absorption instead (so called ‘fallback’). As this method calculates only the minimal carb absorption without considering **BG** deviations, it might lead to incorrect COB values.

![Hint on wrong COB value](../images/Calculator_SlowCarbAbsorption.png)

In the screenshot above, 41% of time the carb absorption was calculated by the min_5m_carbimpact instead of the value detected from deviations. This indicates that the user may have had less **COB** than calculated by the algorithm.

### How to deal with this warning?

- Consider cancelling the treatment - press ‘Cancel’ instead of OK.
- Calculate your upcoming meal again with bolus wizard leaving **COB** unticked.
- If you need a correction bolus, enter it manually.
- Be careful not to overdose or insulin stacking!


### Why does the algorithm not detect COB correctly?

This could be because:
- Potentially the user overestimated carbs when entering them.
- Activity / exercise after your previous meal.
- I:C needs adjustment.
- Value for min_5m_carbimpact is wrong (recommended is 8 with SMB, 3 with AMA).


## Manual correction of carbs entered

If carbs are over or underestimated carbs this can be corrected through the Treatments tab and actions tab / menu as described [here](#screens-bolus-carbs).


## Carb correction - how to delete a Carb entry from Treatments


The ‘Treatments’ tab can be used to correct a faulty carb entry by deleting the entry in Treatments. This may be because the user over or underestimated the carb entry:

![COB_Screenshot 2024-10-05 170124](../images/e123d85d-907e-4545-bf1b-09fee4d42555.png)

1. Check and remember actual **COB** and **IOB** on the **AAPS'** homescreen.
2. Depending on the pump, the carbs in the Treatments tab might show together with insulin in one line or as a separate entry (i.e. with Dana RS).
3. Remove the entry by firstly 'ticking' the waste bin on the top right corner (see above photo, step 1). Then 'tick' the faulty carb amount (see above photo, step 2). Then 'tick' the ‘waste bin’ on the top right corner (step 1 again).
4. Make sure carbs are removed successfully by checking **COB** on **AAPS’** homescreen again.
5. Do the same for **IOB** if there is just one line in the Treatment tab including carbs and insulin.
6. If carbs are not removed as intended and additional carbs are added as explained in this section, the **COB** entry will be too high and this could lead to **AAPS** delivering too much insulin.
7. Enter correct carbs amount through carbs button on **AAPS’** homescreen and set the correct event time.
8. If there is just one line in Treatment tab including carbs and insulin the user should add also the amount of insulin. Make sure to set the correct event time and check **IOB** on homescreen after confirming the new entry.

