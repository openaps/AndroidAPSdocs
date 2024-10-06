# COB 計算

## AAPS 如何計算 COB 值？

當使用者在用餐項目或碳水化合物校正中輸入碳水化合物時，**AAPS** 會將此計算添加到目前的碳水化合物儲量中 (**COB**)。 **AAPS** 接著會根據的使用者**血糖**變化，計算出使用者的碳水化合物吸收。 吸收的速度取決於碳水化合物的敏感性因子 (**’CSF**”)。 這不是使用者**設定檔**中的功能，而是由**AAPS** 根據**ISF/I:C** 的設置來計算，根據1克碳水化合物會使使用者**血糖** 上升多少mg/dl來決定。

## 碳水化合物敏感性因子

**AAPS** 採用的公式為：

- absorbed_carbs = deviation * ic / isf.

使用者的**設定檔**帶來的影響是：

- _增加_ **IC** —透過增加「每5分鐘碳水化合物的吸收」，來縮短總吸收時間；

- _增加_ **ISF** —透過減少「每5分鐘吸收的碳水化合物」，來延長總吸收時間；以及

- _更改_ **設定檔百分比** —將會同時增加/減少IC、ISF這兩個值，所以對碳水化合物吸收時間沒有影響。

例如，如果使用者**設定檔**的**ISF** 是100，**I:C** 是5，則使用者的碳水化合物敏感性因子將為20。 當使用者的**血糖** 上升20 mg/dl，**AAPS** 就會計算出1克碳水化合物被吸收。 正向的**IOB** 也會影響**COB** 的計算。 因此，若**AAPS** 預測使用者的**血糖** 會因**IOB** 而下降20 mg/dl，但實際上保持不變，**AAPS** 也會計算出1克碳水化合物已被吸收。

碳水化合物也將通過下述方法進行吸收，具體方式取決於使用者的**AAPS** 中選擇的敏感性演算法。

## 碳水化合物敏感性 - Oref1

Unabsorbed carbs are cut off after specified time:

![Oref1](../images/cob_oref0_orange_II.png)![Screenshot 2024-10-05 161009](https://github.com/user-attachments/assets/e4eb93b2-bc93-462d-b4d6-854bb9264953)


## 碳水化合物敏感性 - 加權平均

Absorption is calculated to have COB = 0 after specified time:

![AAPS, WeightedAverage](../images/cob_aaps2_orange_II.png)

If minimal carbs absorption (min_5m_carbimpact) is used instead of value calculated from **BG** deviations, an orange dot appears on the **COB** graph.


## 偵測錯誤的 COB 值

**AAPS**  will warn the user if they are about to bolus with **COB** from a previous meal if the algorithm detects current **COB** calculation as incorrect. In this case it will give the user an additional hint on the confirmation screen after usage of bolus wizard.

### AAPS 如何偵測錯誤的 COB 值？

Ordinarily __AAPS__ detects carb absorption through **BG** deviations. Incase the user has entered carbs but **AAPS** cannot detect their estimated absorption through **BG** deviations, it will use the [min_5m_carbimpact](../Configuration/Config-Builder.md?highlight=min_5m_carbimpact#absorption-settings) method to calculate the absorption instead (so called ‘fallback’). As this method calculates only the minimal carb absorption without considering **BG** deviations, it might lead to incorrect COB values.

![錯誤 COB 值的提示](../images/Calculator_SlowCarbAbsorption.png)

In the screenshot above, 41% of time the carb absorption was calculated by the min_5m_carbimpact instead of the value detected from deviations. This indicates that the user may have had less **COB** than calculated by the algorithm.

### 如何處理這個警告？

- Consider cancelling the treatment - press ‘Cancel’ instead of OK.
- Calculate your upcoming meal again with bolus wizard leaving **COB** unticked.
- If you need a correction bolus, enter it manually.
- Be careful not to overdose or insulin stacking!


### 為什麼演算法無法正確偵測 COB？

This could be because:
- Potentially the user overestimated carbs when entering them.
- Activity / exercise after your previous meal.
- I:C needs adjustment.
- Value for min_5m_carbimpact is wrong (recommended is 8 with SMB, 3 with AMA).


## 手動修正輸入的碳水化合物

If carbs are over or underestimated carbs this can be corrected through the Treatments tab and actions tab / menu as described [here](Screenshots-carb-correction).


## Carb correction - how to delete a Carb entry from Treatments


The ‘Treatments’ tab can be used to correct a faulty carb entry by deleting the entry in Treatments. This may be because the user over or underestimated the carb entry:

![COB_Screenshot 2024-10-05 170124](https://github.com/user-attachments/assets/e123d85d-907e-4545-bf1b-09fee4d42555)

1. Check and remember actual **COB** and **IOB** on the **AAPS'** homescreen.
2. Depending on the pump, the carbs in the Treatments tab might show together with insulin in one line or as a separate entry (i.e. with Dana RS).
3. Remove the entry by firstly 'ticking' the waste bin on the top right corner (see above photo, step 1). Then 'tick' the faulty carb amount (see above photo, step 2). Then 'tick' the ‘waste bin’ on the top right corner (step 1 again).
4. Make sure carbs are removed successfully by checking **COB** on **AAPS’** homescreen again.
5. Do the same for **IOB** if there is just one line in the Treatment tab including carbs and insulin.
6. If carbs are not removed as intended and additional carbs are added as explained in this section, the **COB** entry will be too high and this could lead to **AAPS** delivering too much insulin.
7. Enter correct carbs amount through carbs button on **AAPS’** homescreen and set the correct event time.
8. If there is just one line in Treatment tab including carbs and insulin the user should add also the amount of insulin. Make sure to set the correct event time and check **IOB** on homescreen after confirming the new entry.

