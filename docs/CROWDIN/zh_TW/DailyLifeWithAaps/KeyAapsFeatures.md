# OpenAPS 功能

(Open-APS-features-autosens)=

## 自動敏感度調整 (Autosens)

* 自動敏感度調整 (Autosens) 是一種演算法，會分析血糖偏差（正向/負向/中性）。
* 他會根據這些偏差，試圖找出你對胰島素的敏感度或抗性。
* 在 **OpenAPS** 中的 oref 實作，基於過去 24 小時和 8 小時的資料運作。 他會使用其中較敏感的資料來進行調整。
* 在 AAPS 2.7 版本之前，用戶需要手動選擇 8 或 24 小時的資料。
* 從 AAPS 2.7 開始，Autosens 會自動在 24 小時和 8 小時的時間窗口中切換來計算敏感度。 他會選擇較敏感的那個時間窗口。 
* 如果用戶曾經使用過 oref1，他們可能會注意到系統對變化的反應可能不如預期動態，這是由於 24 小時或 8 小時敏感度的不同。
* 更換套管或更改設定檔時，會將 Autosens 比例重置回 100%（設定檔持續時間切換不會重置 Autosens）。
* Autosens 會調整你的基礎胰島素和胰島素敏感因子（ISF），模仿設定檔切換的效果。
* 如果在長時間內持續攝取碳水化合物，Autosens 在此期間的效果會較差，因為碳水化合物不會計入血糖變化的計算中。

(Open-APS-features-super-micro-bolus-smb)=

## 超微量注射 (Super Micro Bolus, SMB)

SMB 是 "超微量注射" 的縮寫，是 2018 年 Oref1 演算法內最新的 OpenAPS 功能。 與 AMA 不同，SMB 不使用臨時基礎率來控制血糖水平，而是主要使用 **超微量注射**。 在 AMA 會以臨時基礎率注射 1.0 IU 胰島素的情況下，SMB 會在 **每 5 分鐘的間隔內**分步進行多次超微量注射，例如 0.4 IU、0.3 IU、0.2 IU 和 0.1 IU。 同時（為了安全），實際基礎率會在一段時間內設為 0 IU/h，以防止過量注射（稱為 **“零臨時基礎率”**）。 這使得系統能夠比 AMA 增加臨時基礎率更快地調整血糖。

由於 SMB 的功能，對於僅含「慢速」碳水化合物的餐食，告知系統預定的碳水化合物數量即可，剩下的交由 AAPS 處理。 然而，這可能會導致餐後血糖高峰，因為無法提前注射。 或者你可以提前進行 **起始注射**，預注射只覆蓋一部分碳水化合物（例如估計量的 2/3），剩下的讓 SMB 來補充。

SMB 功能包含一些安全機制：

1. 單次 SMB 注射劑量的最大值只能是以下最小值：
    
    * 基於目前基礎率（由 Autosens 調整）的數值，對應於 "限制 SMB 的最大臨時基礎率分鐘數" 中設定的持續時間，例如接下來 30 分鐘的基礎量，或
    * 目前所需胰島素量的一半，或
    * 設定中的最大可用胰島素 (maxIOB) 剩餘部分。

2. 你可能經常會注意到低臨時基礎率（稱為 “低臨時基礎率”）或設為 0 U/h 的臨時基礎率（稱為 “零臨時基礎率”）。 這是為了安全設計的，如果設定檔正確，這不會產生任何負面影響。 IOB 曲線比臨時基礎率的走向更有意義。

3. 額外的計算可以預測血糖的變化趨勢，例如透過 UAM（未公告的餐食）。 即使用戶沒有手動輸入碳水化合物，UAM 也可以自動偵測到由於餐食、腎上腺素或其他影響而導致的血糖水平顯著增加，並嘗試使用 SMB 進行調整。 為了安全起見，這也能反向運作，如果血糖意外快速下降，系統可以提前停止 SMB。 這就是為什麼 UAM 應該在 SMB 中始終處於啟用狀態的原因。

**你必須開始使用[目標 9](../SettingUpAaps/CompletingTheObjectives.md#objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)來使用 SMB。**

另見：[OpenAPS 的 oref1 SMB 文件](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) 和 [Tim 的 SMB 資訊](https://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/)。

(Open-APS-features-max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal)=

### 臨時基礎率的最大 U/h (OpenAPS "最大基礎率")

此安全設定決定了胰島素幫浦所能提供的最大臨時基礎率。 該數值應與幫浦及 AAPS 中的設定一致，並且至少是每日最高單次基礎率的三倍。

範例：

你的基礎設定檔中白天的最高基礎率為 1.00 U/h。 那麼建議的最大基礎率應至少為 3 U/h。

AAPS 根據在設定中選擇的年齡，將此數值限制為「硬限制」。

AAPS 對此數值的限制如下：

* 兒童：2
* 青少年：5
* 成人：10
* 胰島素抗性成人：12
* 孕婦：25

*請參閱 [硬性限制概述](#overview-of-hard-coded-limits)。*

(Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob)=

### OpenAPS 無法超過的最大 IOB 總量 (OpenAPS "最大 IOB")

此數值決定了 AAPS 在閉環模式下會保持的最大 IOB。 如果目前的 IOB（例如餐後注射）超過了設定值，循環將暫停胰島素注射，直到 IOB 降至設定的限制值以下。

使用 OpenAPS SMB 時，最大 IOB 的計算方式與 OpenAPS AMA 中有所不同。 在 AMA 中，最大 IOB 只是基礎 IOB 的安全參數，而在 SMB 模式下，他還包括了注射的 IOB。 一個好的起點是

    最大 IOB = 平均餐食注射量 + 每日最大基礎率的 3 倍
    

請謹慎並耐心地逐步更改設定。 每個人的情況都不同，這也可能取決於每日總劑量 (TDD) 的平均值。 出於安全原因，存在一個限制，這取決於病人的年齡。 最大IOB的「硬限制」比[AMA](#max-uh-a-temp-basal-can-be-set-to-openaps-max-basal)中的更高。

* 兒童：3
* 青少年：7
* 成人：12
* 胰島素抗性成人：25
* 孕婦：40

*請參閱 [硬性限制概述](#overview-of-hard-coded-limits)。*

另見 [OpenAPS 的 SMB 文件](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb)。

### 啟用 AMA Autosens

在這裡，您可以選擇是否要使用[敏感度檢測](../DailyLifeWithAaps/SensitivityDetectionAndCob.md)「自動調節」功能。

(Open-APS-features-enable-smb)=

### 啟用 SMB

啟用此選項以使用 SMB 功能。 如果停用，則不會執行 SMB 注射。

### 啟用具有高臨時目標的 SMB

如果啟用了此設定，當有高臨時目標（定義為超過 100 mg/dl 的任何目標）時，SMB 將允許，但不一定會啟用。 此選項主要在停用時禁止 SMB。 例如，如果此選項被停用，則可以透過設置超過 100 mg/dl 的臨時目標來停用 SMB。 此選項還會停用 SMB，不論其他任何條件是否嘗試啟用 SMB。

如果啟用了此設定，則只有在 "啟用臨時目標的 SMB" 也被啟用時，SMB 才會啟用。

(Open-APS-features-enable-smb-always)=

### 始終啟用 SMB

如果啟用了此設定，SMB 將始終啟用（無論 COB、臨時目標或注射量）。 如果啟用了此設定，下方的其他啟用設定將不再生效。 然而，如果「啟用具有高臨時目標的 SMB」被停用且設置了高臨時目標，SMB 將被停用。 為了安全起見，此選項僅適用於具有良好資料過濾系統的血糖來源。 目前，這僅適用於使用[「自訂您的 Dexcom 應用程式」](../CompatibleCgms/DexcomG6.md#if-using-g6-with-build-your-own-dexcom-app)或在 xDrip+ 中的「原生模式」的 Dexcom G5 或 G6。 如果血糖數值偏差過大，G5/G6 不會發送資料，並等待 5 分鐘後的下一個數值。

對於其他 CGM/FGM（如 Freestyle Libre），「始終啟用 SMB」將停用，直到 xDrip+ 具有更好的噪音濾波外掛。 你可以在 [這裡找到更多資訊](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md)。

### 啟用具有 COB 的 SMB

如果啟用了此設定，當 COB 大於 0 時，SMB 將啟用。

### 啟用具有臨時目標的 SMB

如果啟用了此設定，當設置任何臨時目標時（如即將用餐、運動、低血糖、自訂），SMB 將啟用。 如果啟用了此設定但「啟用具有高臨時目標的 SMB」被停用，當設置低臨時目標（低於 100mg/dl）時，SMB 會啟用，而當設置高臨時目標時，則會停用 SMB。

### 啟用碳水後的 SMB

如果啟用了此設定，在碳水化合物被記錄後的 6 小時內，SMB 會啟用，即使 COB 已降至 0。 為了安全起見，此選項僅適用於具有良好資料過濾系統的血糖來源。 目前，這僅適用於使用[「自訂您的 Dexcom 應用程式」](../CompatibleCgms/DexcomG6.md#if-using-g6-with-build-your-own-dexcom-app)或在 xDrip+ 中的「原生模式」的 Dexcom G5 或 G6。 如果血糖數值偏差過大，G5/G6 不會發送資料，並等待 5 分鐘後的下一個數值。

對於其他 CGM/FGM（如 Freestyle Libre），「啟用碳水後的 SMB」將停用，直到 xDrip+ 具有更好的噪音濾波外掛。 你可以在 [這裡找到更多資訊](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md)。

### SMB 執行的最小間隔時間（分鐘）

此功能限制了 SMB 的頻率。 此數值決定了 SMB 之間的最小間隔時間。 注意，每當收到新的血糖數值（通常為每 5 分鐘一次）時，循環便會執行一次。 減去 2 分鐘以給循環更多時間完成。 例如，如果希望 SMB 每次循環運作時都執行，將此數值設為 3 分鐘。

預設值：3 分鐘。

(Open-APS-features-max-minutes-of-basal-to-limit-smb-to)=

### 限制 SMB 的最大基礎率時間（分鐘）

這是一個重要的安全設定。 此數值決定了在 COB 覆蓋的情況下，SMB 可以根據設定的基礎胰島素在給定時間內注射多少。

將此數值設得較大可以使 SMB 更具侵略性。 建議以 30 分鐘的預設值開始。 有了經驗後，可以每次增加 15 分鐘，並觀察多次用餐後的效果。

建議不要將此數值設置為超過 90 分鐘，因為這可能會導致演算法無法應對基礎率為 0 U/h（零臨時基礎率）的血糖下降情況。 特別是在你還在測試新設定時，應設置警報，這樣可以在低血糖發生之前提前發出警告。

預設值：30 分鐘。

### 啟用 UAM

啟用此選項後，SMB 演算法可以識別未申報的餐食。 這對於你忘記告知 AAPS 碳水化合物的情況、錯估碳水化合物數量或高脂肪和蛋白質的餐食持續時間比預期長有幫助。 即使沒有輸入任何碳水化合物，UAM 也可以識別由碳水化合物、腎上腺素等引起的快速血糖上升，並試圖透過 SMB 進行調整。 這也可以反向運作：如果血糖快速下降，他可以提前停止 SMB。

**因此，當使用 SMB 時，UAM 應該始終啟用。**

### 敏感度提升目標

如果啟用了此選項，敏感度偵測（autosens）可以在偵測到胰島素敏感度增強（低於 100%）時提高目標值。 在這種情況下，目標值將根據偵測到的敏感度百分比提高。

### 抗性降低目標

如果啟用了此選項，敏感度偵測（autosens）可以在偵測到胰島素抗性增加（高於 100%）時降低目標值。 在這種情況下，目標值將根據偵測到的抗性百分比降低。

### 高臨時目標提升敏感度

如果啟用了此選項，當臨時目標高於 100 mg/dl 或 5.6 mmol/l 時，胰島素敏感度將會增加。 這意味著，胰島素敏感因子（ISF）會上升，而胰島素碳水化合物比（IC）和基礎率會下降。 當你設定高臨時目標時，這將有效地使 AAPS 變得不那麼積極。

### 低臨時目標降低敏感度

如果啟用了此選項，當臨時目標低於 100 mg/dl 或 5.6 mmol/l 時，胰島素敏感度將會下降。 這意味著，胰島素敏感因子（ISF）會下降，而胰島素碳水化合物比（IC）和基礎率會上升。 當你設定低臨時目標時，這將有效地使 AAPS 變得更具侵略性。

### 進階設定

**始終使用短期平均變化量代替簡單資料** 如果啟用了此功能，AAPS 將使用過去 15 分鐘內的短期平均變化量/血糖，這通常是過去三個數值的平均值。 這有助於 AAPS 在處理如 xDrip+ 和 Libre 這樣的干擾性資料來源時更加穩定。

**每日安全倍數上限** 這是一個重要的安全限制。 預設值為 3（通常不需要調整）。 這意味著 AAPS 永遠不允許設定的臨時基礎率超過使用者幫浦和/或設定檔中的最高基礎率的 3 倍。 範例：如果你的最高基礎率為 1.0 U/h，而每日安全倍數上限為 3，那麼 AAPS 可以設定的最大臨時基礎率為 3.0 U/h（= 3 x 1.0 U/h）。

預設值：3（除非你確實知道需要更改，否則不應更改此設定）。

**目前基礎率安全倍數** 這是另一個重要的安全限制。 預設值為 4（通常也不需要調整）。 這意味著 AAPS 永遠不允許設定的臨時基礎率超過使用者幫浦和/或設定檔中的目前基礎率的 4 倍。

預設值：4（除非你確實知道需要更改，否則不應更改此設定）。

* * *

(Open-APS-features-advanced-meal-assist-ama)=

## 進階餐食輔助 (AMA)

AMA 是 "進階餐食輔助" 的縮寫，是 2017 年 OpenAPS 的一項功能（oref0）。 OpenAPS 進階餐食輔助 (AMA) 允許系統在餐後注射後更快地提高臨時基礎率，前提是你可靠地輸入了碳水化合物。

你可以在 [OpenAPS 文件](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama) 中找到更多資訊。

(Open-APS-features-max-u-hr-a-temp-basal-can-be-set-to-openaps-max-basal)=

### 臨時基礎率的最大 U/h (OpenAPS "最大基礎率")

此安全設定有助於防止 AAPS 設定危險的高基礎率，並將臨時基礎率限制在 X U/h 以內。 建議將此設為合理的數值。 一個好的建議是將設定檔中的最高基礎率乘以 4，並至少乘以 3。 例如，如果設定檔中的最高基礎率是 1.0 U/h，你可以將其乘以 4，得到 4 U/h，並將該數值設為安全參數。

你無法選擇任何值：出於安全考量，該數值的「硬性限制」取決於病患年齡。 AMA 模式中的 maxIOB 限制低於 SMB 模式。 對於兒童，該值是最低的，而對於胰島素抗性成人，他是最大的。

AAPS 中的硬性參數如下：

* 兒童：2
* 青少年：5
* 成人：10
* 胰島素抗性成人：12
* 孕婦：25

*請參閱 [硬性限制概述](#overview-of-hard-coded-limits)。*

### OpenAPS 可注射的最大基礎 IOB [U]（OpenAPS "最大 IOB"）

此參數限制了 AAPS 在基礎 IOB 高於設定值時的最大注射量。 如果 IOB 高於該數值，則停止注射基礎胰島素，直到 IOB 降至限制值以下。

預設值為 2，但你應該慢慢提升此參數，看看他對你的影響，以及哪個數值最適合你。 每個人都不同，這也可能取決於每日總劑量 (TDD) 的平均值。 為了安全起見，最大 IOB 存在一個限制，該限制依病患年齡而定。 AMA 模式中的 maxIOB 限制低於 SMB 模式。

* 兒童：3
* 青少年：5
* 成人：7
* 胰島素抗性成人：12
* 孕婦：25

*請參閱 [硬性限制概述](#overview-of-hard-coded-limits)。*

### 啟用 AMA Autosens

在此你可以選擇是否使用 [敏感度偵測](../DailyLifeWithAaps/SensitivityDetectionAndCob.md) Autosens。

### Autosens 也調整臨時目標

如果啟用了此選項，autosens 可以調整臨時目標（除了基礎率和 ISF）。 這使 AAPS 運作得更具侵略性或不那麼積極。 這樣可以更快地達到實際目標。

### 進階設定

**始終使用短期平均變化量代替簡單資料** 如果啟用了此功能，AAPS 將使用過去 15 分鐘內的短期平均變化量/血糖，這通常是過去三個數值的平均值。 這有助於 AAPS 在處理如 xDrip+ 和 Libre 這樣的干擾性資料來源時更加穩定。

**每日安全倍數上限** 這是一個重要的安全限制。 預設值為 3（通常不需要調整）。 這意味著 AAPS 永遠不允許設定的臨時基礎率超過使用者幫浦中最高每小時基礎率的 3 倍。 範例：如果你的最高基礎率為 1.0 U/h，而每日安全倍數上限為 3，那麼 AAPS 可以設定的最大臨時基礎率為 3.0 U/h（= 3 x 1.0 U/h）。

預設值：3（除非你真的需要更改且知道自己在做什麼，否則不應更改此設定）。

**目前基礎率安全倍數** 這是另一個重要的安全限制。 預設值為 4（通常也不需要調整）。 這意味著 AAPS 永遠不允許設定的臨時基礎率超過使用者幫浦中目前基礎率的 4 倍。

預設值：4（除非你真的需要更改且知道自己在做什麼，否則不應更改此設定）。

**注射休眠 DIA 除數** 「注射休眠」功能在餐後注射胰島素後啟用。 AAPS 在餐後的 DIA 期間內，不會設定低的臨時基礎率，DIA 會除以「注射休眠」參數。 預設值為 2。 這意味著如果 DIA 為 5 小時，「注射休眠」將持續 5 小時：2 = 2.5 小時。

預設值：2

* * *

(Open-APS-features-overview-of-hard-coded-limits)=

## 硬性限制總覽

<table border="1">
  
<thead>
  <tr>
    <th width="200"></th>
    <th width="75">兒童</th>
    <th width="75">青少年</th>
    <th width="75">成人</th>
    <th width="75">胰島素抗性成人</th>
    <th width="75">孕婦</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>最大注射量 (MAXBOLUS)</td>
    <td>5.0</td>
    <td>10.0</td>
    <td>17.0</td>
    <td>25.0</td>
    <td>60.0</td>
  </tr>
  <tr>
    <td>最小作用時間 (MINDIA)</td>
    <td>5.0</td>
    <td>5.0</td>
    <td>5.0</td>
    <td>5.0</td>
    <td>5.0</td>
  </tr>
  <tr>
    <td>最大作用時間 (MAXDIA)</td>
    <td>9.0</td>
    <td>9.0</td>
    <td>9.0</td>
    <td>9.0</td>
    <td>10.0</td>
  </tr>
  <tr>
    <td>最小碳水比 (MINIC)</td>
    <td>2.0</td>
    <td>2.0</td>
    <td>2.0</td>
    <td>2.0</td>
    <td>0.3</td>
  </tr>
  <tr>
    <td>最大碳水比 (MAXIC)</td>
    <td>100.0</td>
    <td>100.0</td>
    <td>100.0</td>
    <td>100.0</td>
    <td>100.0</td>
  </tr>
  <tr>
    <td>最大 IOB (MAXIOB_AMA)</td>
    <td>3.0</td>
    <td>5.0</td>
    <td>7.0</td>
    <td>12.0</td>
    <td>25.0</td>
  </tr>
  <tr>
    <td>最大 IOB (MAXIOB_SMB)</td>
    <td>7.0</td>
    <td>13.0</td>
    <td>22.0</td>
    <td>30.0</td>
    <td>70.0</td>
  </tr>
  <tr>
    <td>最大基礎率 (MAXBASAL)</td>
    <td>2.0</td>
    <td>5.0</td>
    <td>10.0</td>
    <td>12.0</td>
    <td>25.0</td>
  </tr>
</tbody>
</table>