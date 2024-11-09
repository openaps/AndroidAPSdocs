# OpenAPS 功能

(Open-APS-features-autosens)=

## 自動敏感度調整 (Autosens)

- Autosens is an algorithm which looks at blood glucose deviations (positive/negative/neutral).
- 他會根據這些偏差，試圖找出你對胰島素的敏感度或抗性。
- 在 **OpenAPS** 中的 oref 實作，基於過去 24 小時和 8 小時的資料運作。 他會使用其中較敏感的資料來進行調整。
- In versions prior to **AAPS 2.7**, the user had to choose between 8 or 24 hours manually.
- From **AAPS 2.7** on Autosens in **AAPS** will switch between a 24 and 8 hours window for calculating sensitivity. It will pick whichever one is more sensitive. 
- 如果用戶曾經使用過 oref1，他們可能會注意到系統對變化的反應可能不如預期動態，這是由於 24 小時或 8 小時敏感度的不同。
- 更換套管或更改設定檔時，會將 Autosens 比例重置回 100%（設定檔持續時間切換不會重置 Autosens）。
- Autosens 會調整你的基礎胰島素和胰島素敏感因子（ISF），模仿設定檔切換的效果。
- If continuously eating carbs over an extended period, Autosens will be less effective during that period as carbs are excluded from **BG** delta calculations.

(Open-APS-features-super-micro-bolus-smb)=

## 超微量注射 (Super Micro Bolus, SMB)

**SMB**, the shortform of **Super micro bolus**, is an OpenAPS feature introduced from 2018 onwards, within the Oref1 algorithm. In contrast to **AMA**, **SMB** does not use temporary basal rates to control glucose levels, but mainly **small super micro boluses**. In situations where **AMA** would add 1.0 IU insulin using a temporary basal rate, **SMB** delivers several super micro boluses in small steps at **5 minute intervals**, e.g. 0.4 IU, 0.3 IU, 0.2 IU and 0.1 IU. 同時（為了安全），實際基礎率會在一段時間內設為 0 IU/h，以防止過量注射（稱為 **“零臨時基礎率”**）。 This allows the system to adjust the blood glucose faster than with the temporary basal rate increase in **AMA**.

Thanks to SMB, it may be sufficient for meals containing only "slow" carbs to inform the system of the planned amount of carbohydrate and leave the rest to **AAPS**. 然而，這可能會導致餐後血糖高峰，因為無法提前注射。 Or you can give, if necessary with pre-bolusing, a **start bolus**, which **only partly** covers the carbohydrates (e.g. 2/3 of the estimated amount) and let **SMB** deliver the rest of the insulin.

![SMBs on main graph](../images/SMBs.png)

SMBs are shown on the main graph with blue triangles. Tap on the triangle to see how much insulin was delivered, or use the [Treatments tab](#aaps-screens-treatments).

**SMB's** features contain some safety mechanisms:

1. **Largest single SMB dose**  
    The largest single SMB dose can only be the smallest value of:
    
    - 基於目前基礎率（由 Autosens 調整）的數值，對應於 "限制 SMB 的最大臨時基礎率分鐘數" 中設定的持續時間，例如接下來 30 分鐘的基礎量，或
    - 目前所需胰島素量的一半，或
    - 設定中的最大可用胰島素 (maxIOB) 剩餘部分。

2. **Low temp basal rates**  
    Low temporary basal rates (called 'low temps') or temporary basal rates at 0 U/h (called 'zero-temps') are activated more in **SMB**. This is by design for safety reasons and has no negative effects if the **Profile** is set correctly. On the main graph, the IOB curve (yellow thin line) is more meaningful than the course of the temporary basal rates.

3. **Un-Announced Meals**  
    Additional calculations to predict the course of glucose, e.g. by **UAM** (un-announced meals). Even without manual carbohydrate input from the user, **UAM** can automatically detect a significant increase in glucose levels due to meals, adrenaline or other influences and try to adjust this with **SMB**. 為了安全起見，這也能反向運作，如果血糖意外快速下降，系統可以提前停止 SMB。 這就是為什麼 UAM 應該在 SMB 中始終處於啟用狀態的原因。

**你必須開始使用[目標 9](#objectives-objective9)來使用 SMB。**

See also :

- [OpenAPS documentation for SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb).
- [OpenAPS documentation for oref1 SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)
- [Tim's info on SMB](https://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/).

The settings for OpenAPS SMB are described below.

(Open-APS-features-max-u-h-a-temp-basal-can-be-set-to)=

### Max U/h a temp basal can be set to

此安全設定決定了胰島素幫浦所能提供的最大臨時基礎率。 It is also known as **max-basal**.

該值以每小時單位（U/h）測量。 建議將此設為合理的數值。 A good recommendation for setting this parameter is:

    max-basal = highest basal rate x 4
    

例如，如果你的最高基礎率為0.5 U/h，你可以將其乘以4得到2 U/h的值。

**AAPS** limits this value as a 'hard limit' according to [Preferences > Treatments safety > Patient Type](#preferences-patient-type). The hard limits are as follows:

- 兒童：2
- 青少年：5
- 成人：10
- 胰島素抗性成人：12
- 孕婦：25

*請參閱 [硬性限制概述](#overview-of-hard-coded-limits)。*

(Open-APS-features-maximum-total-iob-openaps-cant-go-over)=

### Maximum total IOB OpenAPS can’t go over

This value determines the maximum **Insulin on Board** (basal and bolus IOB) that **AAPS** will remain under while running in closed loop mode. It is also known as **maxIOB**.

如果目前的 IOB（例如餐後注射）超過了設定值，循環將暫停胰島素注射，直到 IOB 降至設定的限制值以下。

A good start for setting this parameter is:

    最大 IOB = 平均餐食注射量 + 每日最大基礎率的 3 倍
    

Be careful and patient when adjusting your **max-IOB**. 每個人的情況都不同，這也可能取決於每日總劑量 (TDD) 的平均值。

**AAPS** limits this value as a 'hard limit' according to [Preferences > Treatments safety > Patient Type](#preferences-patient-type). The hard limits are as follows:

- 兒童：3
- 青少年：7
- 成人：12
- 胰島素抗性成人：25
- 孕婦：40

*請參閱 [硬性限制概述](#overview-of-hard-coded-limits)。*

Note : When using **SMB**, the **max-IOB** is calculated differently than in AMA. In **AMA**, maxIOB is a safety-parameter for basal **IOB**, while in SMB-mode, it also includes bolus IOB.

另見 [OpenAPS 的 SMB 文件](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb)。

### Enable Autosens

[Autosens](#autosens) looks at blood glucose deviations (positive/negative/neutral). 他會根據這些偏差計算出你對胰島素的敏感度或抗性，並根據偏差調整基礎速率和胰島素敏感指數（ISF）。

### 啟用 SMB

啟用此選項以使用 SMB 功能。 If disabled, no **SMBs** will be given.

(Open-APS-features-enable-smb-with-high-temp-targets)=

### 啟用具有高臨時目標的 SMB

If this setting is enabled, **SMBs** will still be delivered even if the user has selected a high **Temp Target** (defined as anything above 100mg/dL or 5.6mmol/l, regardless of **Profile** target). 此選項主要在停用時禁止 SMB。 For example, if this option is disabled, **SMBs** can be disabled by setting a **Temp Target** above 100mg/dL or 5.6mmol/l. This option will also disable **SMBs** regardless of what other condition is trying to enable SMB.

If this setting is enabled, **SMB** will only be enabled with a high temp target if **Enable SMB with temp targets** is also enabled.

(Open-APS-features-enable-smb-always)=

### 始終啟用 SMB

If this setting is enabled, SMB is enabled always enabled(independent of COB, temp targets or boluses). 如果啟用了此設定，下方的其他啟用設定將不再生效。 However, if **Enable SMB with high temp targets** is disabled and a high temp target is set, SMBs will be disabled.

為了安全起見，此選項僅適用於具有良好資料過濾系統的血糖來源。

- Currently, it is only available with a Dexcom G5 or G6, if using the [Build your own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) or “[native mode](#smoothing-xdrip-dexcom-g6)” in xDrip+. If a BG value has too large of a deviation, the G5/G6 doesn’t send it and waits for the next value 5 minutes later.
- For other CGM/FGM like Freestyle Libre, **SMB always** is deactivated until there is a better noise smoothing plugin. 
- 您可以在 [這裡](../CompatibleCgms/SmoothingBloodGlucoseData.md) 找到更多資訊。

### 啟用具有 COB 的 SMB

如果啟用了此設定，當 COB 大於 0 時，SMB 將啟用。

### 啟用具有臨時目標的 SMB

如果啟用了此設定，當設置任何臨時目標時（如即將用餐、運動、低血糖、自訂），SMB 將啟用。 If this setting is enabled but **Enable SMB with high temp targets** is disabled, SMB will be enabled when a low temp target is set (below 100mg/dL or 5.6mmol/l) but disabled when a high temp target is set.

### 啟用碳水後的 SMB

如果啟用了此設定，在碳水化合物被紀錄後的 6 小時內，SMB 會啟用，即使 COB 已降至 0。

為了安全起見，此選項僅適用於具有良好資料過濾系統的血糖來源。

- Currently, it is only available with a Dexcom G5 or G6, if using the [Build your own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) or “[native mode](#smoothing-xdrip-dexcom-g6)” in xDrip+. If a BG value has too large of a deviation, the G5/G6 doesn’t send it and waits for the next value 5 minutes later.
- For other CGM/FGM like Freestyle Libre, **SMB always** is deactivated until there is a better noise smoothing plugin.
- 您可以在 [這裡](../CompatibleCgms/SmoothingBloodGlucoseData.md) 找到更多資訊。

### SMB 執行的最小間隔時間（分鐘）

此功能限制了 SMB 的頻率。 此數值決定了 SMB 之間的最小間隔時間。 注意，每當收到新的血糖數值（通常為每 5 分鐘一次）時，循環便會執行一次。 減去 2 分鐘以給循環更多時間完成。 E.g. if you want SMB to be given every loop run, set this to 3 minutes.

預設值：3 分鐘。

(Open-APS-features-max-minutes-of-basal-to-limit-smb-to)=

### 限制 SMB 的最大基礎率時間（分鐘）

這是一個重要的安全設定。 此數值決定了在 COB 覆蓋的情況下，SMB 可以根據設定的基礎胰島素在給定時間內注射多少。

將此數值設得較大可以使 SMB 更具侵略性。 建議以 30 分鐘的預設值開始。 有了經驗後，可以每次增加 15 分鐘，並觀察多次用餐後的效果。

建議不要將此數值設置為超過 90 分鐘，因為這可能會導致演算法無法應對基礎率為 0 U/h（零臨時基礎率）的血糖下降情況。 特別是在你還在測試新設定時，應設置警報，這樣可以在低血糖發生之前提前發出警告。

預設值：30 分鐘。

### 啟用 UAM

啟用此選項後，SMB 演算法可以識別未申報的餐食。 This is helpful if you forget to tell **AAPS** about your carbs or estimate your carbs wrong and the amount of entered carbs is wrong or if a meal with lots of fat and protein has a longer duration than expected. Without any carb entry, UAM can recognize fast glucose increase caused by carbs, adrenaline, etc., and tries to adjust it with SMBs. 這也可以反向運作：如果血糖快速下降，他可以提前停止 SMB。

**因此，當使用 SMB 時，UAM 應該始終啟用。**

### 敏感度提升目標

如果啟用了此選項，敏感度偵測（autosens）可以在偵測到胰島素敏感度增強（低於 100%）時提高目標值。 在這種情況下，目標值將根據偵測到的敏感度百分比提高。

If the target is modified due to sensitivity detection, it will be displayed with a green background on your home screen.

![Autosens 修改目標](../images/Home2020_DynamicTargetAdjustment.png)

### 抗性降低目標

如果啟用了此選項，敏感度偵測（autosens）可以在偵測到胰島素抗性增加（高於 100%）時降低目標值。 在這種情況下，目標值將根據偵測到的抗性百分比降低。

### 高臨時目標提升敏感度

如果啟用了此選項，當臨時目標高於 100 mg/dl 或 5.6 mmol/l 時，胰島素敏感度將會增加。 這意味著，胰島素敏感因子（ISF）會上升，而胰島素碳水化合物比（IC）和基礎率會下降。 This will effectively make **AAPS** less aggressive when you set a high temp target.

### 低臨時目標降低敏感度

如果啟用了此選項，當臨時目標低於 100 mg/dl 或 5.6 mmol/l 時，胰島素敏感度將會下降。 這意味著，胰島素敏感因子（ISF）會下降，而胰島素碳水化合物比（IC）和基礎率會上升。 This will effectively make **AAPS** more aggressive when you set a low temp target.

(key-aaps-features-minimal-carbs-required-for-suggestion)=

### Minimal carbs required for suggestion

Minimum grams of carbs to display a carbs suggestion alert. 當系統偵測到需要碳水化合物時，會建議食用額外的碳水化合物。 在此情況下，你會收到一個可以延後 5、15 或 30 分鐘的通知。

如果有需要，碳水化合物需求通知可以推送到 Nightscout，屆時會顯示並廣播公告。

In any case, the required carbs will be displayed in the COB section on your home screen.

![在主畫面顯示所需的碳水化合物量](../images/Pref2020_CarbsRequired.png)

### 進階設定

You can read more here : [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Always use short average delta instead of simple data** If you enable this feature, **AAPS** uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps **AAPS** to be steadier with noisy data sources like xDrip+ and Libre.

**每日安全倍數上限** 這是一個重要的安全限制。 預設值為 3（通常不需要調整）。 This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump and/or profile. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then **AAPS** can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

預設值：3（除非你確實知道需要更改，否則不應更改此設定）。

**目前基礎率安全倍數** 這是另一個重要的安全限制。 預設值為 4（通常也不需要調整）。 This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump and/or profile.

預設值：4（除非你確實知道需要更改，否則不應更改此設定）。

* * *

(Open-APS-features-advanced-meal-assist-ama)=

## 進階餐食輔助 (AMA)

AMA 是 "進階餐食輔助" 的縮寫，是 2017 年 OpenAPS 的一項功能（oref0）。 OpenAPS 進階餐食輔助 (AMA) 允許系統在餐後注射後更快地提高臨時基礎率，前提是你可靠地輸入了碳水化合物。

你可以在 [OpenAPS 文件](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama) 中找到更多資訊。

### 臨時基礎率的最大 U/h (OpenAPS "最大基礎率")

This safety setting helps **AAPS** from ever being capable of giving a dangerously high basal rate and limits the temp basal rate to x U/h. 建議將此設為合理的數值。 一個好的建議是將設定檔中的最高基礎率乘以 4，並至少乘以 3。 例如，如果設定檔中的最高基礎率是 1.0 U/h，你可以將其乘以 4，得到 4 U/h，並將該數值設為安全參數。

You cannot choose any value: For safety reason, there is a 'hard limit', which depends on the patient age. AMA 模式中的 maxIOB 限制低於 SMB 模式。 對於兒童，該值是最低的，而對於胰島素抗性成人，他是最大的。

The hardcoded parameters in **AAPS** are:

- 兒童：2
- 青少年：5
- 成人：10
- 胰島素抗性成人：12
- 孕婦：25

*請參閱 [硬性限制概述](#overview-of-hard-coded-limits)。*

### OpenAPS 可注射的最大基礎 IOB [U]（OpenAPS "最大 IOB"）

This parameter limits the maximum of basal IOB where **AAPS** still works. 如果 IOB 高於該數值，則停止注射基礎胰島素，直到 IOB 降至限制值以下。

The default value is 2, but you should rise this parameter slowly to see how much it affects you and which value fits best. 每個人都不同，這也可能取決於每日總劑量 (TDD) 的平均值。 為了安全起見，最大 IOB 存在一個限制，該限制依病患年齡而定。 AMA 模式中的 maxIOB 限制低於 SMB 模式。

- 兒童：3
- 青少年：5
- 成人：7
- 胰島素抗性成人：12
- 孕婦：25

*請參閱 [硬性限制概述](#overview-of-hard-coded-limits)。*

### 啟用 AMA Autosens

Here, you can choose, if you want to use the [sensitivity detection](../DailyLifeWithAaps/SensitivityDetectionAndCob.md) autosens or not.

### Autosens 也調整臨時目標

如果啟用了此選項，autosens 可以調整臨時目標（除了基礎率和 ISF）。 This lets **AAPS** work more 'aggressive' or not. 這樣可以更快地達到實際目標。

### 進階設定

- 通常你無需更改此對話框中的設定！
- 如果你仍然想要更改，請務必閱讀[OpenAPS 文件](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#)，並了解你在做什麼。

**Always use short average delta instead of simple data** If you enable this feature, **AAPS** uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps **AAPS** to work more steady with noisy data sources like xDrip+ and Libre.

**每日安全倍數上限** 這是一個重要的安全限制。 預設值為 3（通常不需要調整）。 This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then **AAPS** can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

預設值：3（除非你確實知道需要更改，否則不應更改此設定）。

**目前基礎率安全倍數** 這是另一個重要的安全限制。 預設值為 4（通常也不需要調整）。 This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump.

預設值：4（除非你確實知道需要更改，否則不應更改此設定）。

**注射休眠 DIA 除數** 「注射休眠」功能在餐後注射胰島素後啟用。 **AAPS** doesn’t set low temporary basal rates after a meal in the period of the DIA divided by the “bolus snooze”-parameter. 預設值為 2。 這意味著如果 DIA 為 5 小時，「注射休眠」將持續 5 小時：2 = 2.5 小時。

預設值：2

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