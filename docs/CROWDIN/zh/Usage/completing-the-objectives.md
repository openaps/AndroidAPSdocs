# 完成目標

**AAPS** 有一系列的 **目標**，需要您完成才能從基本的開環進展到混合閉環並完全使用 **AAPS** 功能。 完成 **目標** 確保：

- 您已正確配置您的 **AAPS** 設定
- 您已了解 **AAPS** 的基本功能
- 您對系統的操作有基本的理解，因此能夠信任它。

```{admonition} Note
:class: note

在完成每個 **目標** 後，定期匯出您的 **AAPS** 設置！
```

我們強烈建議您在完成每個 **目標** 後[匯出設定](../Usage/ExportImportSettings.md)。 此匯出過程會建立一個 **設定** (.json) 檔案，您應該將它備份到一個或多個安全的地方（例如 Google Drive、硬碟、電子郵件附件等）。 這確保了您保留了目標進度，如果您不慎刪除了進度，只需匯入最近的設定檔即可重新載入。 如果您想更換 **AAPS** 的智慧型手機（例如升級、遺失或手機損壞等），備份設定檔也是必需的。

**設定檔** 不僅會儲存您的目標進度，還會儲存您自訂的 **AAPS** 設定，例如 **最大注射量** 等。

如果沒有備份的 **設定檔**，如果您的 **AAPS** 手機發生任何問題，您將需要重新從頭開始完成 **目標**。

整體來說，完成 **目標** 約需 6 週時間（參見[需要多久時間？](preparing-how-long-will-it-take?)）從在智慧型手機上配置 **AAPS** 到 "基本" 混合閉環（從目標 1 到目標 8），儘管您 _可以_ 使用 **虛擬幫浦** 完成 **目標 5**，並在此期間使用其他胰島素遞送方式，但因例如遺失手機而需要重新完成所有 **目標** 是您想避免的情況。 詳細步驟會說明從智慧型手機上設定 AAPS 到完成“基本”混合閉環模式（從目標 1 到目標 8）。雖然你_可以_用虛擬幫浦進行到目標 5（同時暫時用其他方法注射胰島素），但如果因為像手機遺失這種情況，導致要重新再做所有目標，你應該要避免這樣的事發生。

除了進展目標外，若您有需要，還可以移除進度並[回到先前的目標](Objectives-go-back-in-objectives)。

## 目標 1：設置可視化與監控，分析基礎率與比率

- **AAPS** 檢查您的基本技術設定是否運作。

若未運作，您需要重新配置，直到 **AAPS** 的基本技術設定正常運作。

- 在 [設定構建器](../Configuration/Config-Builder.md) 中選擇正確的 CGMS/FGMS。  更多資訊請參閱[血糖來源](../Configuration/BG-Source.md)。
- 在 [設定構建器](../Configuration/Config-Builder.md) 中選擇正確的幫浦，以確保幫浦能與 AAPS 溝通。 如果您使用的幫浦型號沒有 **AAPS** 的循環驅動程式，或者您想在使用其他系統進行胰島素遞送時完成早期目標，請選擇 **虛擬幫浦**。 更多資訊請參閱[胰島素幫浦](../Getting-Started/Pump-Choices.md)。
- 按照 [Nightscout](../Installing-AndroidAPS/Nightscout.md) 頁面中的指示，確保 **Nightscout** 能接收並顯示此資料。
- 請注意，**NSClient** 中的 URL 必須 **_不包含_ "/api/v1/"** 結尾 - 參見 [NSClient 偏好設定中的設定](Preferences-nsclient)。

請注意 - _您可能需要等待下一次感測器的血糖讀取值到來，**AAPS** 才能識別它。_

## 目標 2：學習如何控制 AAPS

- 在此 **目標** 中按要求在 **AAPS** 內執行多個操作。
- 點擊橘色文字 "尚未完成" 以查看待辦事項。
- 將提供鏈接以指導您，若您對某個操作不熟悉。

  ![目標 2 截圖](../images/Objective2_V2_5.png)
- 完成 **目標 2** 的任務：
  - 將您的設定檔設為 90%，持續 10 分鐘（_提示_：在首頁總覽頁面長按設定檔名稱） (_注意_：AAPS 不接受低於 0.05U/hr 的基礎速率。 如果您的設定檔包含任何 0.06U/hr 或更低的速率，您需要建立一個具有更高基礎速率的新設定檔才能完成此任務。 完成此任務後切換回正常設定檔。）
  - 模擬 "洗澡" 並在 **AAPS** 中中斷幫浦連線 1 小時（_提示_：按首頁總覽頁面上的循環圖示以開啟循環對話框）
  - 完成 "洗澡" 並重新連線幫浦（_提示_：按 "中斷連線" 圖示以開啟循環對話框）
  - 建立一個自訂的臨時目標，持續 10 分鐘（_提示_：按首頁總覽頁面上的目標條以開啟臨時目標對話框）
  - 在 **設定構建器** 中啟用 **ACTIONS** 外掛，讓它出現在頂部可滾動的選單列上（_提示_：進入 **設定構建器**，向下滾動至「一般」）
  - 顯示循環外掛的內容
  - 縮放血糖圖表，以查看更大或更小的時間範圍：在 6 小時、12 小時、18 小時 24 小時之間切換過去的資料（_提示_：點擊圖表）

(Objectives-objective-3-prove-your-knowledge)=

## 目標 3：證明你的知識

- 透過一個測試您 **AAPS** 知識的多選題考試。

某些使用者發現 **目標 3** 是最難完成的目標。 請務必結合問題閱讀 **AAPS** 文件。 如果你在研究**AAPS**文件後仍然感到困惑，請在 [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) 群組中搜索 "Objective 3"（因為你的問題可能之前已被詢問並回答過）。 如果你仍然無法解決，請在 [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) 或 [Discord](https://discord.gg/4fQUWHZ4Mw) 群組中發文詢問。 這些群組可以提供友善的提示，或引導你閱讀 **AAPS** 文件的相關部分。

要進行 **Objective 3**，點擊橘色文字“**尚未完成**”來查看相關問題。 請仔細閱讀每個問題並選擇你的答案。

- 為了減少你在開環模式下需要做出的決策數量，設定一個較寬的目標範圍，例如 90 - 150 mg/dl 或 5.0 - 8.5 mmol/l。

- 你可能想在晚上設置更寬的上限，或者甚至停用開環模式。

每個問題可能有多個正確答案！ 如果選擇了錯誤的答案，該問題將被鎖定一段時間（60 分鐘），你將無法立即重新作答。 當你再次嘗試回答時，請注意答案的順序可能已經改變，這是為了確保你仔細閱讀並真正理解每個答案的正確性（或錯誤性）。

當 **AAPS** 第一次安裝時，你必須完成整個 **Objective 3** 才能進入 **Objective 4**。 每個目標必須按順序完成。 隨著目標的進展，新的功能將逐漸解鎖。

```{admonition} __What happens if new question(s) are added to an Objective when I update to a newer version of AAPS?__
:class: Note
不時會為 **AAPS** 添加新功能，可能需要在目標中新增問題，特別是目標 3。因此，任何新增到 **目標 3** 的問題將被標記為「未完成」，因為 **AAPS** 需要您執行此操作。不要擔心，因為每個 **目標** 是獨立的，您不會失去 **AAPS** 的現有功能，前提是其他目標仍然完成。
```

## 目標 4：開始使用開環

這個目標的目的是讓你了解 **AAPS** 如何評估基礎率對血糖水平的影響，並建議臨時調整基礎率。 在這個目標中，你將首次啟動開環，並手動在幫浦上執行 20 次建議的臨時基礎率調整。 此外，你將觀察臨時目標和預設臨時目標對於活動或低血糖治療的影響。 如果你還不熟悉如何在 **AAPS** 設置臨時基礎率變更，請參閱 [ACTIONS 頁籤](Screenshots#Screenshots-action-tab)。

完成此目標的預估時間：**7 天**。 這是一個強制的等待時間。 即使你已經執行了所有基礎率變更，你仍無法進入下一個目標。

- 從 "偏好設定" 選單或長按 OVERVIEW 螢幕左上角的 Loop 圖示來選擇開環模式。
- 透過 [偏好設定](../Configuration/Preferences.md) 設定來進行設置（向下滾動到 "Loop/APS 模式" 並選擇 "開環模式"）。
- 在 7 天內手動執行至少 20 次臨時基礎率建議；將它們輸入到你的（實體）幫浦中，並在 AAPS 中確認你已接受它們。 確保這些基礎率調整顯示在 AAPS 和 Nightscout 中。
- 如有需要，啟用 [臨時目標](../Usage/temptarget.md)。 在處理低血糖後，使用低血糖臨時目標來防止系統在反彈時過度修正。

### 減少通知數量

- 為了減少開環模式下建議的基礎率變更數量，設置較寬的目標範圍，例如 90-150 mg/dl 或 5.0-8.5 mmol/l。
- 你甚至可以考慮在晚上提高上限（或停用開環模式）。
- 你可以設置建議基礎率變更的最低百分比來調整觸發通知的數量。

  ![開環模式的最小請求變更](../images/OpenLoop_MinimalRequestChange2.png)

```{admonition} You don't need to action each and every system recommendation!
:class: 注意
```

(目標-Objective-5-理解你的開環模式及其臨時基礎率建議)=

## 目標 5：理解你的開環，包括其臨時基礎率建議

在 **Objective 5** 中，你將開始了解如何得出臨時基礎率的建議。 這包括 [基礎率邏輯的確定](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html)，透過觀察 [AAPS OVERVIEW 中的預測線](Screenshots-prediction-lines)/Nightscout 來分析影響，並檢視 OPENAPS 頁籤中的詳細計算。

完成此目標的預估時間：7 天。

此目標要求你確定並設置“最大 U/h 臨時基礎率”（max-basal）值，如 [OpenAPS 功能](Open-APS-features#Open-APS-features-max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal) 中所述。 這個值可以在 偏好設定 > OpenAPS 中設置。
確保在 **AAPS** 和你的胰島素幫浦中都設置了這個安全設定。

你可能希望將目標設置得比平常高，直到你對計算和設定感到滿意為止。

**AAPS** 允許：

- 低目標最小值為 4 mmol/l (72 mg/dl) 或最大值為 10 mmol/l (180 mg/dl)
- 高目標最小值為 5 mmol/l (90 mg/dl) 或最大值為 15 mmol/l (225 mg/dl)
- 臨時目標可設為單一數值，範圍為 4 mmol/l 到 15 mmol/l (72 mg/dl 到 225 mg/dl)

你的目標是核心值。 所有計算都基於此目標。 它不同於目標範圍，目標範圍是你通常希望血糖值保持在內的範圍。 如果你的目標範圍過寬（例如 3 mmol/l [50 mg/dl] 或更寬），你會發現 **AAPS** 幾乎不會採取行動。 這是因為傳感器預測血糖會落在這個寬範圍內，因此很少會建議臨時基礎率變更。

你可能需要嘗試將目標範圍調整得更緊（例如 1 mmol/l [20 mg/dl] 或更小），並觀察系統行為的變化。

你可以透過輸入不同的數值來調整圖表中的綠色區域（代表你的目標範圍），位置在 [偏好設定](../Configuration/Preferences.md) > Overview > 顯示範圍。

![停止標誌](../images/sign_stop.png)

```{admonition} If you have been using a virtual pump, change to a real insulin pump now!
:class: note

如果您正在使用虛擬幫浦開啟循環，請在此停下來。只有在您已經換到使用「真正的」實體幫浦後，才在這個目標結束時點擊驗證。
```

![空白](../images/blank.png)

(目標-Objective-6-啟動低血糖暫停模式閉環)=

## 目標 6：使用低血糖暫停功能開始閉環

![警告標誌](../images/sign_warning.png)

```{admonition} Closed loop will not correct high BG values in objective 6 as it is limited to low glucose suspend only!
:class: 注意
你仍然需要自行修正高血糖值（手動透過幫浦或注射筆進行修正）！
```

在 **Objective 6** 中，你將啟動閉環並啟用低血糖暫停 (LGS) 模式，並將 [max IOB](Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob) 設置為零。 你必須在 LGS 模式下停留 5 天才能完成此目標。 你應該利用這段時間檢查你的設定是否準確，並避免頻繁觸發 LGS 事件。

完成此目標的預估時間：5 天。

在閉環模式下進行低血糖暫停之前，請務必仔細測試你的個人資料設定（基礎率、ISF、IC）。 錯誤的個人資料設定可能會讓你陷入必須手動處理的低血糖情境。 準確的個人資料設定將有助於避免在 5 天期間需要進行低血糖治療。

**如果你仍然觀察到頻繁或嚴重的低血糖情況，請考慮微調 DIA、基礎率、ISF 和碳水化合物比率。**

在目標 6 中，**AAPS** 將自動將 maxIOB 設置為零。 **當進入目標 7 時，這個覆蓋設定將被恢復。**

這意味著當你處於目標 6 時，如果傳感器顯示血糖水平正在下降，**AAPS** 將為你減少基礎胰島素的輸送量。 如果血糖水平上升，只有當先前的低血糖暫停導致基礎 IOB 為負數時，**AAPS** 才會將基礎率提高到個人資料的數值以上。 否則，**AAPS** 不會將基礎率提高到超過你目前個人資料的數值，即使血糖水平正在上升。 這個謹慎設置是為了避免在學習使用 **AAPS** 時出現低血糖情況。

**因此，在這個階段，你需要手動處理高血糖的胰島素注射修正。**

- 如果你的基礎 IOB 是負數（如下圖所示），在目標 6 中可以觸發超過 100% 的臨時基礎率 (TBR)。

![負數 IOB 的範例](../images/Objective6_negIOB.png)

- 將你的目標範圍設置得比平常略高，以增加安全緩衝。
- 透過長按 OVERVIEW 螢幕右上角的 Loop 圖示，並選擇 Loop - LGS 模式圖示來啟用 '低血糖暫停' 模式。
- 檢視啟動的臨時基礎率，觀察 OVERVIEW 螢幕上的藍綠色基礎文本或 OVERVIEW 圖表中的藍綠色基礎呈現。
- 在處理低血糖後，你可能會暫時經歷血糖反彈，但無法提高基礎率來應對反彈。

(目標-Objective-7-調整閉環模式，將 maxIOB 提高至 0 以上並逐步降低血糖目標)=

## 目標 7：調整閉環模式，將 maxIOB 提高至 0 以上並逐步降低血糖目標

完成 **Objective 7** 的條件是你必須關閉閉環並提高 [maxIOB](Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob)。 在 **Objective 6** 中 maxIOB 被自動設置為零。 現在這個設定將被恢復。 **AAPS** 將開始使用你設定的 maxIOB 值來修正高血糖值。

完成此目標的預估時間：1 天。

- 透過 [偏好設定](../Configuration/Preferences.md) 或長按 OVERVIEW 螢幕右上角的 Loop 圖示，並在 1 天內選擇 '閉環模式'。

- 將 'OpenAPS 無法超過的最大總 IOB'（在 OpenAPS 中稱為 'max-iob'）提高至 0 以上。 預設建議為“平均餐後注射 + 每日最大基礎率的 3 倍”（適用於 SMB 演算法）或“每日最大基礎率的 3 倍”（適用於 AMA 演算法），但你應該逐步提高此值，直到你確定設定適合你（每日最大基礎率 = 一天內任何時間段的最大每小時值）。

這個建議應被視為起點。 如果你將其設置為 3 倍，並發現 AAPS 因血糖上升而給予過多的胰島素，那麼請降低“OpenAPS 無法超過的最大總 IOB”值。 或者，如果你對胰島素抵抗非常高，則謹慎地提高該值。

![每日最大基礎率](../images/MaxDailyBasal2.png)

- 一旦你對 IOB 與你的閉環模式的運作模式相符有信心後，將你的目標逐步降低至你理想的水準。

(目標-Objective-8-如果需要，調整基礎率和比例，然後啟用 autosens)=

## 目標 8：如有需要，調整基礎率與比率，然後啟用自動感應

在此目標中，你將重新檢視個人資料的表現，並使用 autosens 功能作為錯誤設定的指標。

完成此目標的預估時間：7 天。

- 你可以使用 [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) 來一次性檢查基礎率是否保持準確，或進行傳統的基礎率測試。
- 啟用 [autosens](../Usage/Open-APS-features.md) 為期 7 天，並觀察 OVERVIEW 圖表中的白線，該線顯示因運動或荷爾蒙等因素導致的胰島素敏感性上升或下降，並關注 OpenAPS 報告頁籤，該頁籤顯示 **AAPS** 根據情況調整基礎率和/或目標。

(目標-Objective-9-啟用白天使用的其他 oref1 功能，例如超微量注射 SMB)=

## 目標 9：啟用白天使用的其他 oref1 功能，例如超微量注射 (SMB)

在這個目標中，你將處理並使用“超微量注射 (SMB)”作為核心功能之一。 在完成必讀內容後，你將對 SMB 是什麼、如何運作、SMB 的合理起點以及為何在 SMB 後會暫時將基礎率設為零（即零基礎率）有深入的理解。 完成此目標的預估時間：28 天。

- [此文件中的 SMB 部分](Open-APS-features-super-micro-bolus-smb) 和 [openAPS 文件中的 oref1 涵蓋範圍](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) 是必讀內容，以了解 SMB 和零基礎率的概念。
- 一旦完成，你可以[提高 maxIOB](Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob) 以使 SMB 正常運作。 maxIOB 現在包括所有 IOB，不僅僅是累積的基礎率。 此閾值會暫停 SMB，直到 IOB 低於此值為止（例如，maxIOB 設為 7 U，並給予 8 U 的注射來覆蓋一餐：SMB 將暫停，並且不會再次啟用，除非 IOB 低於 7 U）。 一個好的起點是將 maxIOB 設為平均餐後注射 + 每日最大基礎率的 3 倍（每日最大基礎率 = 一天內任何時段的每小時最大值，參見[目標 7](Objectives-objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets) 作為參考）。
- 當你從 OpenAPS AMA 演算法切換到 OpenAPS SMB 時，將 "min_5m_carbimpact" 參數（偏好設定 > 吸收設定 > min_5m_carbimpact）更改為 8。 對於 AMA 演算法，預設值為 3。 在此處閱讀更多有關該設置的資訊：[這裡](../Configuration/Preferences.html#min-5m-carbimpact)

(目標-Objective-10-自動化設定)=

## 目標 10：自動化

你必須開始 **Objective 10** 才能使用自動化功能。

1. 首先閱讀文件頁面 [Automation](../Usage/Automation.md)。
2. 設定最基本的自動化規則；
   例如在幾分鐘後觸發 Android 通知：

- 選擇通知頁籤
- 從右上角的 3 點選單中，選擇新增規則
- 給任務命名為 "我的第一個自動化通知"
- "編輯" "條件"
  - 點擊 "+" 圖示來新增第一個觸發條件
  - 選擇 "時間" 並按 "OK"，它將建立一個預設的條目，時間為今天的某時某分
  - 點擊分鐘部分來編輯時間，使其在幾分鐘內觸發。 然後點擊 OK 關閉
  - 點擊 "OK" 關閉觸發條件畫面
- "新增" 一個 "動作"
  - 選擇 "通知"，按 "OK"
  - 點擊 "通知" 來編輯訊息（Msg），輸入類似 "我的第一個自動化" 的內容
- 等待時間觸發通知（請注意，根據你的手機不同，可能會延遲幾分鐘）

4. 嘗試設定更有用的自動化。

- 文檔頁面給出了一些例子，你可以在 [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) 群組中搜索 "自動化" 截圖。 由於大多數人每天早上上學/上班前會在同一時間吃相同的早餐，因此一個相當常見的使用情境是設定 "早餐前目標"，在早餐前 30 分鐘設定稍低的臨時目標。 在這種情況下，你的條件可能會包括 "定期時間"，選擇一週中的特定日子（星期一、星期二、星期三、星期四、星期五）和特定時間（上午 06:30）。 動作將包括 "開始臨時目標" 設定一個目標值和持續時間 30 分鐘。

## 目標 11：啟用白天使用的其他功能，例如動態敏感度外掛 (DynISF)。

- 確保 SMB 正常運作
- 閱讀有關動態 ISF 的文件[這裡](../Usage/DynamicISF.md)
- 在 Facebook 和 [Discord](https://discord.gg/4fQUWHZ4Mw) 群組中搜索與動態 ISF 相關的討論，並閱讀其他使用者的經驗和建議。
- 啟用 **DynamicISF 外掛**，並確定適合你身體需求的校正值。 出於安全考量，建議初始值設置為低於 100%。

(目標-回到先前的目標進度)=

## 返回目標

如果你想出於任何原因返回 **目標** 進度，你可以點擊 "清除已完成"。

![返回目標](../images/Objective_ClearFinished.png)

## Android APS 3.0 版本前的目標

當 **AAPS** 版本 3.0 發佈時，一個目標被移除了。  使用 Android APS 版本 2.8.2.1 且運作較舊 Android 軟體（_例如_ 版本 9 之前的版本）的用戶將使用較舊的目標設置，可以在[這裡](../Usage/Objectives_old.md)找到。
