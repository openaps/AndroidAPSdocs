(Sensitivity-detection-and-COB-sensitivity-detection)=

# 敏感度偵測

## 敏感度演算法

**AAPS** 目前提供 3 種敏感度偵測模型：

* 敏感度 AAPS
* 敏感度 加權平均
* 敏感度 Oref1

### 敏感度 AAPS

敏感度的計算方式與 Oref1 相同，但您可以指定要回溯查看的時間範圍。最短碳水化合物吸收時間會根據偏好設定中設定的碳水化合物最長吸收時間計算。

### 敏感度 加權平均

敏感度是以偏差值的加權平均計算。您可以指定要回溯查看的時間範圍。較新的偏差值權重較高。最短碳水化合物吸收時間會根據偏好設定中設定的碳水化合物最長吸收時間計算。此演算法能最快追蹤敏感度變化。

(SensitivityDetectionAndCob-sensitivity-oref1)=

### 敏感度 Oref1

敏感度會根據過去 8 小時的資料計算；如果距離上次更換部位未滿 8 小時，則從上次更換部位開始計算。若碳水化合物尚未吸收，超過偏好設定中指定的時間後就會從計算中扣除。只有 Oref1 算法支援未宣佈的餐食（UAM）。這表示偵測到 UAM 的時段不會納入敏感度計算。因此，如果您使用 SMB 搭配 UAM，必須選擇 Oref1 演算法才能正常運作。如需 UAM 的詳細資訊，請參閱 [超微量注射 (SMB)](#Open-APS-features-super-micro-bolus-smb) 章節。

建議使用 Oref1：它是唯一能偵測 UAM，並能搭配較新的演算法 [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb) 運作的選項。

## 同時進行碳水化合物處理

當多餐的影響時間重疊時，敏感度 AAPS 和 WeightedAverage 演算法與 Oref1 之間會有明顯差異。

* Oref1 假設同一時間只有一餐的碳水化合物正在衰減：第一餐完全衰減後，第二餐才開始衰減。
* 敏感度 AAPS 和 WeightedAverage 則會在您輸入碳水化合物後立即開始衰減。如果體內有多餐的碳水化合物，最低碳水化合物衰減量會依餐點大小和最長吸收時間調整。因此，與 Oref1 相比，最低吸收量會較高。