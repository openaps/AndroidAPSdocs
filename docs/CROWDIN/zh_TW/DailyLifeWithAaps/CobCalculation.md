# COB 計算

## AAPS 如何計算 COB 值？

當使用者在用餐項目或碳水化合物校正中輸入碳水化合物時，**AAPS** 會將此計算添加到目前的碳水化合物儲量中 (**COB**)。 **AAPS** 接著會根據的使用者**血糖**變化，計算出使用者的碳水化合物吸收。吸收的速度取決於碳水化合物的敏感性因子 (**’CSF**”)。 This is not a feature within the user’s **Profile** but is calculated by **AAPS** according to **ISF/I:C** setup, and is determined by how many mg/dL 1 g of carbs will raise the user’s **BG**.

## 碳水化合物敏感性因子

**AAPS** 採用的公式為：

- absorbed_carbs = deviation * ic / isf.

使用者的**設定檔**帶來的影響是：

- _增加_ **IC** —透過增加「每5分鐘碳水化合物的吸收」，來縮短總吸收時間；

- _增加_ **ISF** —透過減少「每5分鐘吸收的碳水化合物」，來延長總吸收時間；以及

- _更改_ **設定檔百分比** —將會同時增加/減少IC、ISF這兩個值，所以對碳水化合物吸收時間沒有影響。

例如，如果使用者**設定檔**的**ISF** 是100，**I:C** 是5，則使用者的碳水化合物敏感性因子將為20。 For every 20 mg/dL the user’s **BG** goes up, 1 g of carbs will be calculated as absorbed by **AAPS**. 正向的**IOB** 也會影響**COB** 的計算。 So, if **AAPS** predicts the user’s **BG** to go down by 20 mg/dL because of **IOB** and it instead stayed flat, **AAPS** would also calculate 1 g of carbs as absorbed.

碳水化合物也將通過下述方法進行吸收，具體方式取決於使用者的**AAPS** 中選擇的敏感性演算法。

## 碳水化合物敏感因子 - Oref1

未吸收的碳水化合物將在指定時間後將被切斷:

![Oref1](../images/cob_oref0_orange_II.png)

![COB graph with Oref1 cut-off](../images/cob_oref0_orange_I.png)

```{admonition} Older screenshot
:class: note
The screenshot above is from an earlier **AAPS** version — in **AAPS** 4 the graphs look slightly different, but the **COB** graph carries the same information.
```


## 碳水化合物敏感因子 - 加權平均

在指定時間後 COB 將被歸 0：

![AAPS, 加權平均](../images/cob_aaps2_orange_II.png)

如果使用最小碳水化合物吸收值（min_5m_carbimpact）而不是從**血糖**變化計算出的值，**COB** 圖上將出現一個橙色圓點。

(CobCalculation-detection-of-wrong-cob-values)=
## 偵測錯誤的 COB 值

假如演算法偵測到目前的 **COB** 計算不正確，**AAPS**  會在使用者準備進行注射時發出警告，這裡的 **COB** 是指之前吃東西輸入的碳水。在這種情況下，系統會在使用者使用注射嚮導後，於確認畫面上出現額外的提示

### AAPS 如何偵測錯誤的 COB 值？

通常 __AAPS__ 會透過 **血糖** 變化來偵測碳水化合物的吸收狀況。如果用戶輸入了碳水化合物，但**AAPS**無法通過**BG**偏差檢測其預估吸收，則將使用[min_5m_carbimpact](#Preferences-min_5m_carbimpact) 方法來計算吸收（所謂的「後備」）。但因為這個方法只會計算最低的碳水化合物吸收量，而不考慮 **血糖** 的變化，所以也可能會導致 COB 數值不正確。

![錯誤 COB 值的提示](../images/Calculator_SlowCarbAbsorption.png)

In the screenshot above, 66% of time the carb absorption was calculated by the min_5m_carbimpact instead of the value detected from deviations. 這表示使用者實際上的 **COB** ，可能比演算法計算出來的還要少。

### 如何處理這個警告？

- 考慮取消這次治療—按「取消」而不是「確認」。
- 用注射嚮導重新計算你即將吃的餐點，並且不要勾選 **COB**。
- 如果需要修正注射，請手動輸入劑量。
- 小心不要打太多，或者胰島素累積過多！


### 為什麼演算法無法正確偵測 COB？

可能的原因如下：
- 使用者在輸入碳水化合物時，可能預估量過高，或輸入了碳水化合物，但剩下過多餐點沒有吃完。
- 先前餐點後的活動/運動.
- I:C 需要調整.
- min_5m_carbimpact 的數值不正確（建議使用 SMB 時是 8，使用 AMA 時是3）。


## 手動修正輸入的碳水化合物

If carbs are over or underestimated this can be corrected through the **Treatments history** screen as described [here](#screens-bolus-carbs).


## 碳水化合物更正—如何從「治療」中刪除碳水化合物的項目


The **Treatments history** screen can be used to correct a faulty carb entry by deleting it. 這可能是因為使用者在輸入碳水化合物時，預估過高或過低導致。

![Deleting a carb entry from Treatments history](../images/e123d85d-907e-4545-bf1b-09fee4d42555.png)

1. Check and remember actual **COB** and **IOB** on the **AAPS** main screen.
2. Open **Treatments history** (drawer menu → *Treatments history*), tab **Carbs and bolus**. Depending on the pump, the carbs might show together with insulin in one line or as a separate entry (i.e. with Dana RS).
3. **Long-press** the faulty carb entry — the list switches to **selection mode** with a checkbox on every line, and the entry is ticked (marked **1** above). Tick any further entries you want to remove as well.
4. Tap the **🗑 Delete** icon in the top bar (marked **2**) and confirm — the confirmation dialog lists exactly what will be removed.
5. Make sure carbs are removed successfully by checking **COB** on the **AAPS** main screen again.
6. Do the same for **IOB** if there is just one line including carbs and insulin.
7. 如果碳水化合物未按預期移除，並且如本節所講的，增加了額外的碳水化合物，**COB** 項目會過高，這可能導致 **AAPS** 輸入過量的胰島素。
8. Enter the correct carbs amount through the **Carbs** dialog (**Treatments** → **Carbs**) and set the correct event time.
9. If there was just one line including carbs and insulin the user should also re-add the amount of insulin. Make sure to set the correct event time and check **IOB** on the main screen after confirming the new entry.

