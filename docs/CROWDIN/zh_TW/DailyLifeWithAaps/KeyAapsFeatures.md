# AAPS 的主要功能

(Open-APS-features-autosens)=

## 自動敏感度調整 (Autosens)

- Autosens 是一種算法，可以觀察血糖的偏差（正/負/中性）。
- 他會根據這些偏差，試圖找出你對胰島素的敏感度或抗性。
- 在 **OpenAPS** 中的 oref 實作，基於過去 24 小時和 8 小時的資料運作。 他會使用其中較敏感的資料來進行調整。
- 在**AAPS 2.7**之前的版本中，用戶必須手動選擇 8 或 24 小時。
- 從**AAPS 2.7**開始，Autosens 在**AAPS**中將在 24 小時和 8 小時窗口之間切換以計算敏感度。 它將選擇較為敏感的那一種。 
- 如果用戶曾經使用過 oref1，他們可能會注意到系統對變化的反應可能不如預期動態，這是由於 24 小時或 8 小時敏感度的不同。
- 更換套管或更改設定檔時，會將 Autosens 比例重置回 100%（設定檔持續時間切換不會重置 Autosens）。
- Autosens 會調整你的基礎胰島素和胰島素敏感因子（ISF），模仿設定檔切換的效果。
- 如果在一段延長的時間內不斷攝取碳水化合物，Autosens 在該期間的效果會較差，因為碳水化合物不包括在**BG**變化量的計算中。

(Open-APS-features-super-micro-bolus-smb)=

## 超微量注射 (Super Micro Bolus, SMB)

**SMB**，**超微量注射**的簡稱，是自 2018 年起於 Oref1 算法中引入的 OpenAPS 功能。 與**AMA**不同，**SMB**並不使用臨時基礎率來控制葡萄糖水平，而主要使用**小型超微量注射**。 在**AMA**會使用臨時基礎率添加 1.0 IU 胰島素的情況下，**SMB**則會以**5 分鐘的間隔**在小步驟中提供多次超微量注射，例如 0.4 IU、0.3 IU、0.2 IU 和 0.1 IU。 同時（為了安全），實際基礎率會在一段時間內設為 0 IU/h，以防止過量注射（稱為 **“零臨時基礎率”**）。 這使得系統能夠比**AMA**中的臨時基礎率增加更快速地調整血糖。

感謝 SMB，對於僅含“緩慢”碳水化合物的餐點，可能只需通知系統計畫中的碳水化合物量，並將其餘的留給**AAPS**。 然而，這可能會導致餐後血糖高峰，因為無法提前注射。 或者如果有必要的話，你可以進行預先注射，給予**開始注射**，此注射**僅部分**覆蓋碳水化合物（例如預估量的 2/3），並讓**SMB**提供其餘的胰島素。

![SMBs 在主圖中顯示](../images/SMBs.png)

SMBs 以藍色三角形的形式顯示在主圖中。 點擊三角形可以查看注射的胰島素量，或使用 [治療選單](#aaps-screens-treatments)。

**SMB 的** 功能包含一些安全機制：

1. **單次最大的 SMB 劑量**  
    單次最大的 SMB 劑量只能是以下最小值：
    
    - 基於目前基礎率（由 Autosens 調整）的數值，對應於 "限制 SMB 的最大臨時基礎率分鐘數" 中設定的持續時間，例如接下來 30 分鐘的基礎量，或
    - 目前所需胰島素量的一半，或
    - 設定中的最大可用胰島素 (maxIOB) 剩餘部分。

2. **低溫基礎速率**  
    低臨時基礎速率（稱為「低溫」）或臨時基礎速率為 0 U/h（稱為「零溫」）在 **SMB** 中會更常被啟動。 這是出於安全理由的設計，若 **設定檔** 正確設定，則沒有任何負面影響。 在主圖上，IOB 曲線（黃色細線）比臨時基礎速率的變化更有意義。

3. **未通報的餐點**  
    額外計算以預測血糖的變化，例如透過 **UAM**（未通報的餐點）。 即使用戶未手動輸入碳水化合物，**UAM** 也能自動檢測因餐點、腎上腺素或其他影響導致的血糖水平顯著上升，並嘗試透過 **SMB** 進行調整。 為了安全起見，這也能反向運作，如果血糖意外快速下降，系統可以提前停止 SMB。 這就是為什麼 UAM 應該在 SMB 中始終處於啟用狀態的原因。

**你必須開始使用[目標 9](#objectives-objective9)來使用 SMB。**

另請參見：

- [OpenAPS 關於 SMB 的文件](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb)。
- [OpenAPS oref1 SMB 的文件](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)
- [Tim 關於 SMB 的資訊](https://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/)。

OpenAPS SMB 的設定如下。

(Open-APS-features-max-u-h-a-temp-basal-can-be-set-to)=

### 臨時基礎可以設置的最大 U/h

此安全設定決定了胰島素幫浦所能提供的最大臨時基礎率。 這也被稱為 **最大基礎**。

該值以每小時單位（U/h）測量。 建議將此設為合理的數值。 設置此參數的良好建議為：

    最大基礎 = 最高基礎速率 x 4
    

例如，如果你的最高基礎率為0.5 U/h，你可以將其乘以4得到2 U/h的值。

**AAPS** 將此值限制為根據 [偏好設定 > 治療安全 > 患者類型](#preferences-patient-type) 的「硬限制」。 硬限制如下：

- 兒童：2
- 青少年：5
- 成人：10
- 胰島素抗性成人：12
- 孕婦：25

*請參閱 [硬性限制概述](#overview-of-hard-coded-limits)。*

(Open-APS-features-maximum-total-iob-openaps-cant-go-over)=

### 最大總 IOB 的 OpenAPS 不能超過

此值決定了在閉環模式運行時 **AAPS** 所維持的最大 **在體胰島素**（基礎和注射 IOB）。 這也被稱為 **最大 IOB**。

如果目前的 IOB（例如餐後注射）超過了設定值，循環將暫停胰島素注射，直到 IOB 降至設定的限制值以下。

設置此參數的良好開始是：

    最大 IOB = 平均餐食注射量 + 每日最大基礎率的 3 倍
    

在調整你的 **最大 IOB** 時要小心並保持耐心。 每個人的情況都不同，這也可能取決於每日總劑量 (TDD) 的平均值。

**AAPS** 將此值限制為根據 [偏好設定 > 治療安全 > 患者類型](#preferences-patient-type) 的「硬限制」。 硬限制如下：

- 兒童：3
- 青少年：7
- 成人：12
- 胰島素抗性成人：25
- 孕婦：40

*請參閱 [硬性限制概述](#overview-of-hard-coded-limits)。*

注意：在使用 **SMB** 時，**最大 IOB** 的計算方式與 AMA 不同。 在 **AMA** 中，最大 IOB 是基礎 **IOB** 的安全參數，而在 SMB 模式中，還包括注射 IOB。

另見 [OpenAPS 的 SMB 文件](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb)。

### 啟用動態靈敏度

這是[動態 ISF](../DailyLifeWithAaps/DynamicISF.md) 功能。 當啟用時，將提供新的設定。 設定說明請參見[動態 ISF](#dyn-isf-preferences)頁面。

#### 高臨時目標提升敏感度

如果啟用了此選項，當臨時目標高於 100 mg/dl 或 5.6 mmol/l 時，胰島素敏感度將會增加。 這意味著，胰島素敏感因子（ISF）會上升，而胰島素碳水化合物比（IC）和基礎率會下降。 這將使得 **AAPS** 在你設置高臨時目標時變得不那麼積極。

#### 低臨時目標降低敏感度

如果啟用了此選項，當臨時目標低於 100 mg/dl 或 5.6 mmol/l 時，胰島素敏感度將會下降。 這意味著，胰島素敏感因子（ISF）會下降，而胰島素碳水化合物比（IC）和基礎率會上升。 這將使得 **AAPS** 在你設置低臨時目標時變得更加積極。

### 啟用自動敏感度調整功能

這是[自動敏感度調整](#autosens)功能。 在使用動態 ISF 時，不能使用自動敏感度調整，因為這是兩種不同的算法，會影響相同的變數（敏感度）。

Autosens 會根據血糖偏差（正/負/中性）進行調整。 他會根據這些偏差計算出你對胰島素的敏感度或抗性，並根據偏差調整基礎速率和胰島素敏感指數（ISF）。

當啟用時，將提供新的設定。

### 敏感度提升目標

如果啟用了此選項，敏感度偵測（autosens）可以在偵測到胰島素敏感度增強（低於 100%）時提高目標值。 在這種情況下，目標值將根據偵測到的敏感度百分比提高。

如果因為敏感度檢測而修改目標，則會在你的主螢幕上以綠色背景顯示。

![Autosens 修改目標](../images/Home2020_DynamicTargetAdjustment.png)

當“啟用動態敏感度”或“啟用自動敏感度調整功能”中的一個被啟用時，此設定可用。

### 抗性降低目標

如果啟用了此選項，敏感度偵測（autosens）可以在偵測到胰島素抗性增加（高於 100%）時降低目標值。 在這種情況下，目標值將根據偵測到的抗性百分比降低。

當“啟用動態敏感度”或“啟用自動敏感度調整功能”中的一個被啟用時，此設定可用。

### 啟用 SMB

啟用此選項以使用 SMB 功能。 如果停用，將不會給予任何 **SMB**。

當啟用時，將提供新的設定。

(Open-APS-features-enable-smb-with-high-temp-targets)=

#### 啟用具有高臨時目標的 SMB

如果此設定啟用，即使用戶選擇高 **臨時目標**（定義為任何高於 100mg/dL 或 5.6mmol/l 的值，與 **設定檔** 的目標無關），**SMB** 仍然會被給予。 此選項主要在停用時禁止 SMB。 例如，如果這個選項停用，可以透過將臨時目標設置在 100mg/dL 或 5.6mmol/l 以上來停用 **SMB**。 此選項也將停用 **SMB**，無論其他條件如何嘗試啟用 SMB。

如果此設定啟用，只有當 **啟用臨時目標的 SMB** 也啟用時，**SMB** 才會在高臨時目標下啟用。

(Open-APS-features-enable-smb-always)=

#### 始終啟用 SMB

如果此設定啟用，SMB 將始終啟用（獨立於 COB、臨時目標或注射）。 如果啟用了此設定，下方的其他啟用設定將不再生效。 但是，如果 **啟用高臨時目標的 SMB** 被停用且設置了高臨時目標，則 **SMB** 將被停用。

This setting is only available if **AAPS** detects that you are using a [reliable BG source](#GettingStarted-TrustedBGSource), with advanced filtering. 由於在傳感器故障的情況下舊的血糖資料可能會無限重複，因此 FreeStyle Libre 1 不被視為可靠來源。

Noisy data could cause **AAPS** to believe BG is rising really fast, resulting in the administration of unnecessary SMBs. For more information about noise and data smoothing, see [here](../CompatibleCgms/SmoothingBloodGlucoseData.md).

#### 啟用具有 COB 的 SMB

If this setting is enabled, SMB is enabled when the COB is greater than 0.

This setting is not visible if "Enable SMB always" is switched on.

#### 啟用具有臨時目標的 SMB

If this setting is enabled, SMB is enabled when there is any temp target set (eating soon, activity, hypo, custom). If this setting is enabled but **Enable SMB with high temp targets** is disabled, SMB will be enabled when a low temp target is set (below 100mg/dL or 5.6mmol/l) but disabled when a high temp target is set.

This setting is not visible if "Enable SMB always" is switched on.

#### 啟用碳水後的 SMB

If enabled, SMB is enabled for 6h after carbohydrates are announced, even if COB has reached 0.

For safety reasons, this setting is only available if **AAPS** detects that you are using a reliable BG source. It is not visible if "Enable SMB always" is switched on.

This setting is only available if **AAPS** detects that you are using a [reliable BG source,](#GettingStarted-TrustedBGSource) with advanced filtering. 由於在傳感器故障的情況下舊的血糖資料可能會無限重複，因此 FreeStyle Libre 1 不被視為可靠來源。

Noisy data could cause **AAPS** to believe BG is rising really fast, resulting in the administration of unnecessary SMBs. For more information about noise and data smoothing, see [here](../CompatibleCgms/SmoothingBloodGlucoseData.md).  
This setting is not visible if "Enable SMB always" is switched on.

#### SMB 執行的最小間隔時間（分鐘）

This feature limits the frequency of SMBs. This value determines the minimum time between SMBs. Note that the loop runs every time a glucose value comes in (generally 5 minutes). Subtract 2 minute to give loop additional time to complete. E.g. if you want SMB to be given every loop run, set this to 3 minutes.

Default value: 3 min.

(Open-APS-features-max-minutes-of-basal-to-limit-smb-to)=

#### 限制 SMB 的最大基礎率時間（分鐘）

This is an important safety setting. This value determines how much SMB can be given based on the amount of basal insulin in a given time, when it is covered by COBs.

Making this value larger allows the SMB to be more aggressive. You should start with the default value of 30 minutes. After some experience, increase the value in 15 minutes increments and observe the effects over multiple meals.

It is recommended not to set the value higher than 90 minutes, as this would lead to a point where the algorithm might not be able to accommodate a decreasing BG with 0 U/h basal ('zero-temp'). You should also set alarms, especially if you are still testing new settings, which will warn you well before a hypo.

Default value: 30 min.

#### 限制UAM SMB的最大基礎分鐘數

This setting allows to adjust the strength of SMB during UAM, when there are no more carbs.

Default value : the same as **Max minutes of basal to limit SMB to**.

This setting is only visible if "Enable SMB" and "Enable UAM " are switched on.

### 啟用 UAM

With this option enabled, the SMB algorithm can recognize unannounced meals. This is helpful if you forget to tell **AAPS** about your carbs or estimate your carbs wrong and the amount of entered carbs is wrong or if a meal with lots of fat and protein has a longer duration than expected. Without any carb entry, UAM can recognize fast glucose increase caused by carbs, adrenaline, etc., and tries to adjust it with SMBs. This also works the opposite way: if there is a fast glucose decrease, it can stop SMBs earlier.

**Therefore, UAM should always be activated when using SMB.**

(key-aaps-features-minimal-carbs-required-for-suggestion)=

### 建議所需的最少碳水化合物

Minimum grams of carbs to display a carbs suggestion alert. Eating of additional carbs will be suggested when the reference design detects that it requires carbs. In this case you will receive a notification which can be snoozed for 5, 15 or 30 minutes.

如果有需要，碳水化合物需求通知可以推送到 Nightscout，屆時會顯示並廣播公告。

In any case, the required carbs will be displayed in the COB section on your home screen.

![Display carbs required on home screen](../images/Pref2020_CarbsRequired.png)

### 進階設定

You can read more here : [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Always use short average delta instead of simple data** If you enable this feature, **AAPS** uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps **AAPS** to be steadier with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump and/or profile. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then **AAPS** can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump and/or profile.

Default value: 4 (shouldn’t be changed unless you really need to and know what you are doing)

* * *

(Open-APS-features-advanced-meal-assist-ama)=

## 進階餐食輔助 (AMA)

AMA, the short form of "advanced meal assist" is an OpenAPS feature from 2017 (oref0). OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus if you enter carbs reliably.

You can find more information in the [OpenAPS documentation](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### 臨時基礎率的最大 U/h (OpenAPS "最大基礎率")

This safety setting helps **AAPS** from ever being capable of giving a dangerously high basal rate and limits the temp basal rate to x U/h. 建議將此設為合理的數值。 A good recommendation is to take the highest basal rate in your profile and multiply it by 4 and at least 3. For example, if the highest basal rate in your profile is 1.0 U/h you could multiply that by 4 to get a value of 4 U/h and set the 4 as your safety parameter.

You cannot choose any value: For safety reason, there is a 'hard limit', which depends on the patient age. The 'hard limit' for maxIOB is lower in AMA than in SMB. For children, the value is the lowest while for insulin resistant adults, it is the biggest.

The hardcoded parameters in **AAPS** are:

- 兒童：2
- 青少年：5
- 成人：10
- 胰島素抗性成人：12
- 孕婦：25

*請參閱 [硬性限制概述](#overview-of-hard-coded-limits)。*

### OpenAPS 可注射的最大基礎 IOB [U]（OpenAPS "最大 IOB"）

This parameter limits the maximum of basal IOB where **AAPS** still works. If the IOB is higher, it stops giving additional basal insulin until the basal IOB is under the limit.

The default value is 2, but you should rise this parameter slowly to see how much it affects you and which value fits best. It is different for anyone and also depends on the average total daily dose (TDD). For safety reason, there is a limit, which depends on the patient age . The 'hard limit' for maxIOB is lower in AMA than in SMB.

- 兒童：3
- 青少年：5
- 成人：7
- 胰島素抗性成人：12
- 孕婦：25

*請參閱 [硬性限制概述](#overview-of-hard-coded-limits)。*

### 啟用 AMA Autosens

Here, you can choose, if you want to use the [sensitivity detection](../DailyLifeWithAaps/SensitivityDetectionAndCob.md) autosens or not.

### Autosens 也調整臨時目標

If you have this option enabled, autosens can adjust targets (next to basal and ISF), too. This lets **AAPS** work more 'aggressive' or not. The actual target might be reached faster with this.

### 進階設定

- 通常你無需更改此對話框中的設定！
- 如果你仍然想要更改，請務必閱讀[OpenAPS 文件](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#)，並了解你在做什麼。

**Always use short average delta instead of simple data** If you enable this feature, **AAPS** uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps **AAPS** to work more steady with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then **AAPS** can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump.

Default value: 4 (shouldn’t be changed unless you really need to and know what you are doing)

**Bolus snooze dia divisor** The feature “bolus snooze” works after a meal bolus. **AAPS** doesn’t set low temporary basal rates after a meal in the period of the DIA divided by the “bolus snooze”-parameter. The default value is 2. That means with a DIA of 5h, the “bolus snooze” would be 5h : 2 = 2.5h long.

Default value: 2

* * *

(Open-APS-features-overview-of-hard-coded-limits)=

## 硬性限制總覽

|                     | 兒童    | 青少年   | 成人    | 胰島素抗性成人 | 孕婦    |
| ------------------- | ----- | ----- | ----- | ------- | ----- |
| 最大注射量 (MAXBOLUS)    | 5.0   | 10.0  | 17.0  | 25.0    | 60.0  |
| 最小作用時間 (MINDIA)     | 5.0   | 5.0   | 5.0   | 5.0     | 5.0   |
| 最大作用時間 (MAXDIA)     | 9.0   | 9.0   | 9.0   | 9.0     | 10.0  |
| 最小碳水比 (MINIC)       | 2.0   | 2.0   | 2.0   | 2.0     | 0.3   |
| 最大碳水比 (MAXIC)       | 100.0 | 100.0 | 100.0 | 100.0   | 100.0 |
| 最大 IOB (MAXIOB_AMA) | 3.0   | 5.0   | 7.0   | 12.0    | 25.0  |
| 最大 IOB (MAXIOB_SMB) | 7.0   | 13.0  | 22.0  | 30.0    | 70.0  |
| 最大基礎率 (MAXBASAL)    | 2.0   | 5.0   | 10.0  | 12.0    | 25.0  |