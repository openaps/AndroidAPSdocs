# COB 計算

## AAPS 如何計算 COB 值？

當輸入碳水化合物作為餐食或修正的一部分時，AAPS 會將其加入到當前的碳水化合物儲存（COB）中。 接著 AAPS 根據觀察到的血糖值偏差來吸收（移除）碳水化合物。 吸收的速率取決於碳水化合物敏感性因子（CSF）。 這不是配置檔的數值，而是根據 ISF/IC 計算出來，表示 1 克碳水化合物會讓你的血糖上升多少 mg/dl。

公式為：`absorbed_carbs = deviation * ic / isf` 這代表：
* 增加 IC 將增加每 5 分鐘吸收的碳水化合物量，從而縮短吸收的總時間
* 增加 ISF 將減少每 5 分鐘吸收的碳水化合物量，從而延長吸收的總時間
* 更改配置檔的百分比會同時影響這兩個值，但不會影響碳水化合物的吸收時間

例如，如果你的配置檔 ISF 為 100，IC 為 5，那麼你的 CSF 為 20。 每當你的血糖上升 20 mg/dl，AAPS 將吸收 1 克的碳水化合物。 正的 IOB 也會影響此計算。 因此，如果 AAPS 預期因為 IOB 你的血糖應該下降 20 mg/dl，但實際上保持不變，它也會吸收 1 克碳水化合物。

碳水化合物的吸收也會根據以下描述的方法和所使用的敏感度演算法來進行。

### Oref1

未吸收的碳水化合物在指定時間後將被切斷

![Oref1](../images/cob_oref0_orange_II.png)

### AAPS, WeightedAverage

吸收的計算結果是 COB 在指定時間後等於 0

![AAPS, WeightedAverage](../images/cob_aaps2_orange_II.png)

如果使用最小碳水化合物吸收量（min_5m_carbimpact）而不是從血糖偏差計算的數值，COB 圖表上將出現一個橙色點。

(COB-calculation-detection-of-wrong-cob-values)=

## 偵測錯誤的 COB 值

當你準備注射胰島素並且 AAPS 演算法認為當前的 COB 計算可能有誤時，AAPS 會提醒你先前餐食的 COB 還在。 在這種情況下，它會在使用胰島素注射精靈後，在確認畫面上給出額外提示。

### AAPS 如何偵測錯誤的 COB 值？

通常，AAPS 透過血糖偏差來偵測碳水化合物的吸收。 如果你輸入了碳水化合物，但 AAPS 無法透過血糖偏差觀察到它們的吸收，它將使用 [min_5m_carbimpact](../Configuration/Config-Builder.md?highlight=min_5m_carbimpact#absorption-settings) 方法來計算吸收（即所謂的「後備」方法）。 由於此方法僅計算最小碳水化合物吸收量，而不考慮血糖偏差，這可能會導致錯誤的 COB 值。

![錯誤 COB 值的提示](../images/Calculator_SlowCarbAbsorption.png)

在上述截圖中，有 41% 的時間，碳水化合物的吸收是根據 min_5m_carbimpact 方法數學計算的，而不是來自偏差檢測的數值。  這意味著你可能擁有的碳水化合物比演算法計算的還要少。

### 如何處理這個警告？

- 考慮取消治療——按「取消」而不是「確定」。
- 使用胰島素注射精靈再次計算你即將用餐的餐食，但不勾選 COB。
- 如果你確定需要進行修正注射，請手動輸入。
- 無論如何，務必小心不要注射過量！

### 為什麼演算法無法正確偵測 COB？

- 也許你在輸入碳水化合物時高估了數量。
- 先前餐食後的活動/運動
- I:C 需要調整
- min_5m_carbimpact 的數值錯誤（建議 SMB 使用 8，AMA 使用 3）

## 手動修正輸入的碳水化合物

如果你高估或低估了碳水化合物，你可以透過「治療」標籤和「操作」標籤/選單來進行修正，如[此處](Screenshots-carb-correction)所述。
