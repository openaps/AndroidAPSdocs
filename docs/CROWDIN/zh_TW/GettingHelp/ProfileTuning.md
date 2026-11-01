# 調整 AAPS 的設定檔

```{admonition} This is NOT a medical advice
:class: warning
請與你的醫療團隊合作，獲得糖尿病管理方面的支援與建議。</br>
僅在你已[正確設定你的 **設定檔**](https://androidaps.readthedocs.io/en/latest/SettingUpAaps/YourAapsProfile.md)，並遵循所有 **AAPS** 的目標之後，才使用本指南。
```

本指南說明在指定 __設定檔__下，OpenAPS 演算法結果的判讀方式，並提供相關資訊，說明觀察到特定情況或模式時，可以調整 **AAPS** 中的哪些數值。以下關於基礎率測試的建議，可能與您的照護團隊提供的建議不同。

使用**循環**可能會讓基礎率測試更容易；如果您的__設定檔__中的基礎率過高，也可能大幅降低低血糖風險。

## 變更設定檔的設定：如何進行

1. 請先閱讀並理解下列__AAPS__ 建議的設定與說明。如果不遵循這項建議，調整過程可能會變得困難，也比較不容易取得調整良好的__設定檔__。
2. 請在**數天的時間**內，仔細觀察並比較你的__血糖__與__IOB__ 的變化。
3. 請留意 **AAPS** 是否幾乎每天都在相近的時間出現相同模式。
4. 持續數天進行這件事很重要。只用單日觀察到的資料來決定如何調整__設定檔__，通常會得到不佳的結果。
5. 當你觀察到可重複的模式後，例如在下午 1 點出現__血糖__飆升，或__IOB__ 為負，再開始對你的__設定檔__做小幅調整。
6. 一次只更動一項設定很重要。例如：將下午 1 點左右的基礎率提高 10%。
7. 每次更動之後，請在接下來幾天監測對你的__血糖__與__IOB__ 的影響。
8. 重複此流程：觀察、判斷，如有需要再微調。

不要急，慢慢來！

## 微調基礎率時的建議設定與說明

- 請在[啟用循環](#AapsScreens-loop-status)的情況下完成所有測試。
- **將<u>關閉</u>所有[自動化](../DailyLifeWithAaps/Automations.md)功能**
- **關閉<u></u> [DynISF](#Open-APS-features-DynamicISF)、[AutoISF](#Open-APS-features-auto-isf)、[AutoSens](#Open-APS-features-autosens)**，以避免它們嘗試調整你的設定檔。
- 測試期間請勿進行手動操作（手動注射、臨時目標等…）：讓系統僅使用**設定檔**中的設定。
- 就[額外圖表](#AapsScreens-section-g-additional-graphs)而言：在圖表 1 中，使用活性胰島素（IOB）、活性碳水化合物（COB）（以及敏感度變化）。在圖表 2 中，使用偏差與血糖影響。需要尋求建議時，截圖請一併包含上述圖表。
- COB=0[*](#profiletuning-cob-zero)

理想情況下，也應避免以下其他可能影響資料、導致結論不準確的因素：
- 不進行任何體能活動。
- 沒有壓力。
- 沒有生病。
- 沒有極端天氣（例如酷熱或嚴寒）。
- 幫浦或 CGM 的使用期間沒有發生故障。
- 沒有未回報的碳水化合物攝取量。

另請注意：
- 如果您的[基礎率設定檔](#your-aaps-profile-basal-rates)正確，當您在 COB=0[*](#profiletuning-cob-zero) 且 IOB=0 時處於目標範圍內，不論您的 **ISF** 為何，都會持續維持在目標範圍內（只有在血糖高於您的**血糖**目標時，才會使用 **ISF**）。
- 您需要查看實際的 **IOB**，也要查看 **IOB** 圖表，觀察過去幾個小時內 **IOB** 的變化情形。

(profiletuning-cob-zero)=

***COB = 0**

表示餐點已消化，體內已無碳水化合物。

**AAPS** 可能會顯示 [即使體內仍有碳水化合物，COB 也可能為 0](../DailyLifeWithAaps/CobCalculation.md)。

## [設定檔](../SettingUpAaps/YourAapsProfile.md)定義

過**強的設定檔**是由以下幾項因素造成：

- [ISF](#your-aaps-profile-insulin-sensitivity-factor) 數值太小.
- [基礎率](#your-aaps-profile-basal-rates)數值太大.
- [I:C](#your-aaps-profile-insulin-to-carbs-ratio) 數值太小.

## IOB 觀察

*注意：你也可以在 Nightscout 報表中使用 Loopalyzer 的 IOB 圖表，查看多天的 IOB。*

若經過數天後觀察到下列模式，請考慮以下調整:

### IOB 為正

- **設定檔**的基礎率可能不夠強（也可能是因未回報的用餐、生病、注射部位吸收不良等原因）。

![IOB 為正](../images/troubleshooting/profiletuning/PositiveInsulin.png)

### IOB 為負

- 預設基礎率過強.
- 可能是先前運動／體能活動的影響.

![IOB 為負](../images/troubleshooting/profiletuning/NegativeInsulin.png)

- 先前餐點：注射過多（導致非常長時間的 零臨時基礎率）

![IOB 為負](../images/troubleshooting/profiletuning/NegativeInsulin2.png)

## 血糖目標觀察

### 長時間偏高

- __ISF__ 的數值偏高，代表胰島素作用不夠強（計算出的胰島素劑量太低）

![長時間偏高](../images/troubleshooting/profiletuning/StuckHigh.png)

- __設定檔__中的基礎率可能不夠強（**SMB** 沒有足夠的「基礎胰島素存量」可供使用）
- 某項安全限制（[MaxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over)？）可能已啟動，正在限制胰島素注射。請在 **APS** 外掛畫面中確認（**組態設定 → APS → 開啟外掛**）；請參閱 [SMB](#Open-APS-features-super-micro-bolus-smb)。
- 技術問題：注射點吸收、輸注組等。

### 長時間偏低

- __ISF__ 過強，數值需要調高。
- __設定檔__ 的基礎率過強（若同時出現負 IOB）

### 雲霄飛車（忽高忽低）

- **ISF** 過強？請參閱你的 [AAPS 設定檔](#your-aaps-profile-insulin-sensitivity-factor)

![雲霄飛車](../images/troubleshooting/profiletuning/StrongISF.png)

## 餐後血糖觀察

### 快速上升且血糖變高

- 食物含有快速吸收的碳水化合物（例如果汁）。
- 請考慮提前注射，或再提早一點注射。
- 注射（I:C 或注射百分比）不夠強.

![上升過高](../images/troubleshooting/profiletuning/FastRise.png)

### 快速上升後血糖轉為偏低

- 請考慮提前注射；你的**設定檔**可能設定得太積極（對血糖上升的修正幅度過大）
- 注射過強.



## [如何計算你的 I:C](#your-aaps-profile-insulin-to-carbs-ratio)

1. 首先，你需要在 **設定檔** 中正確設定預設基礎率。
2. 從目標值開始，最好沒有負 IOB。
3. 在**管理 → 幫浦**（或幫浦記錄）中記下已注射的胰島素總量，並將其稱為起始胰島素量。非常精準地量測已知份量的碳水，並記錄開始時間與 Start IOB。接著，使用嚮導將碳水化合物和注射資訊輸入**AAPS**（使用目前設定的胰島素與碳水化合物比例）。別忘了把碳水吃掉 ;)
4. 幾個小時後，當 COB=0[*](#profiletuning-cob-zero) 且你回到目標值時，記錄結束時間，並記下 End IOB；像先前一樣檢查總注射胰島素，並將其稱為 End insulin。*注意：只要長於你的消化時間，時間範圍並不重要*
5. 從 Start 與 End 胰島素用量的差額中，再減去/加上 End IOB - Start IOB 的差異。接著，扣除根據**設定檔**設定計算出的基礎胰島素量。
6. 若 __血糖__ 在目標範圍內，你將得到用於「消化」碳水的總胰島素用量。計算你的 **I:C**。

### I:C 計算說明

- 在 **設定檔** 中設定正確的預設基礎率後，於任何時間範圍內，你應該能維持在目標值，且 IOB 接近 0。你只會得到 **設定檔** 的基礎率。
- 接著加入碳水與注射。等待身體消化完所有碳水並回到 **血糖** 目標。你的胰島素用量將是基礎量加上處理碳水所需的胰島素。你計算基礎所用的胰島素（依 **設定檔**），剩餘部分就是用來消化碳水的胰島素。
- 若時間範圍太短，將有碳水尚未消化，因此「碳水所需的胰島素」會不正確。
- 若時間範圍太長，不會有不良影響。你會用完所有碳水，並得到較多的基礎用量。最後，你會從總胰島素用量中扣除基礎量；時間範圍延長（基礎用量較多）不會影響結果。

本文最初由 @Robby（Discord）撰寫，分享調整**AAPS 設定檔**的技巧，並由社群審閱及編輯（感謝大家！）。
