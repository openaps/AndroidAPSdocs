# 完成目標

**AAPS** 擁有一系列**目標**，必須完成以幫助使用者從基礎開放循環進展到混合封閉循環及完整的**AAPS** 功能。 完成**目標**旨在確保您擁有：

- 已正確配置好您的 **AAPS** 設定；
- 了解了 **AAPS** 的基本功能；以及
- 對於您的系統能做什麼有基本的理解，以幫助在使用 **AAPS** 時增強信心。

當首次安裝 **AAPS** 時，必須完成每個目標才能進入下一個目標。 隨著每個 **目標** 的進展，新功能將逐漸解鎖。

**目標 1 到 8** 將指引您從在智慧型手機上配置 **AAPS** 到「基本」的混合閉迴路運作。 這將需要大約 6 週的時間來完成。 您可以使用虛擬幫浦進行到 **目標 5** 的操作（並同時使用其他胰島素遞送方法）。 **目標 9 到 11** 的設計是為了測試更進階的 **AAPS** 功能，目的是為了更好地控制您的糖尿病，這將需要長達 3 個月的時間來完成，可能更久。 有關預估時間分配的進一步詳情，可以在這裡獲得：[需要多長時間？](../Getting-Started/PreparingForAaps.md#how-long-will-it-take-to-set-everything-up)

在進行 **目標** 的同時，如有需要，您也可以撤銷您的進度並[返回早期目標](#go-back-in-objectives)。

### 備份您的設定

```{admonition} Note
:class: note

建議在完成每個 **目標** 後匯出您的 **AAPS** 設定！
```

強烈建議您在完成每個目標後[匯出您的設定](../Maintenance/ExportImportSettings.md)，以避免在 **AAPS** 中遺失任何已取得的進度。 這個匯出過程會建立一個 **設定檔** (.json)，應將其備份到一個或多個安全的地方（例如 Google Drive、硬碟、電子郵件附件等）。 這確保了在 **AAPS** 中取得的任何進度得以保存。 如果您的手機遺失，或不小心刪除您的進度，該 json 檔案可以通過匯入最近的設定檔重新載入到 **AAPS** 中。 如果因任何原因需要新的 **AAPS** 智慧型手機（例如升級/遺失/損壞等），擁有備份 **設定檔** 也是必要的。

該 **設定檔** 不僅會保存您在 **目標** 中的進度，還會保存所有的 **AAPS** 設定，例如 **最大注射量** 等等。

如果您沒有備份您的設定，而任何情況導致您的 **AAPS** 智慧型手機發生意外，將需要從頭開始重新進行 **目標**。 持續進行 **目標** 需要時間，因為例如您遺失了智慧型手機而再次需要重新完成它們的情況是最好避免的。

## 目標 1：設置可視化和監控，分析基礎率和比例

**目標 1** 要求用戶在 **AAPS** 中設置他們的基本技術配置。 在完成此步驟之前無法取得進展。

- 在 [組態建置工具](../SettingUpAaps/ConfigBuilder.md#bg-source) 中選擇正確的 CGM/FGM。 有關更多信息，請參見[BG 來源](../Getting-Started/CompatiblesCgms.md)。
- 在 [組態建置工具](../SettingUpAaps/ConfigBuilder.md) 中選擇正確的幫浦，以確保您的幫浦能夠與 **AAPS** 通信。 如果您正在使用沒有 **AAPS** 驅動程序的幫浦型號，或希望在使用其他系統進行胰島素遞送的同時進行早期 **目標**，請選擇 **虛擬幫浦**。 有關更多信息，請參見[胰島素幫浦](../Getting-Started/CompatiblePumps.md)。
- 如果使用 Nightscout：
  - 請按照 [Nightscout](../SettingUpAaps/Nightscout.md) 頁面的說明，以確保 **Nightscout** 能夠接收並顯示 **AAPS** 的資料。
  - 請注意 **NSClient** 中的 URL 必須是 **_不帶_ "/api/v1/"** 的結尾 - 請參見 [偏好設定 > NSClient](../SettingUpAaps/Preferences.md#NSClient)。
- 如果使用 Tidepool：
  - 請按照 [Tidepool](../SettingUpAaps/Tidepool.md) 頁面的說明，以確保 **Tidepool** 能夠接收並顯示 **AAPS** 的資料。

請注意 - _你可能需要等待下一次感測器的血糖讀取值到來，**AAPS** 才能識別他。_

## 目標 2：學習如何控制 AAPS

**目標 2** 需要進行幾個「任務」，如下圖所示
點擊橙色文字「尚未完成」以訪問待辦事項。
將提供鏈接以指導你，若你對某個操作不熟悉。

![目標 2 截圖](../images/Objective2_V2_5.png)

完成 **目標 2** 的任務：

- 將您的 **個人設置** 設定為 90% 持續 10 分鐘。
  - _提示_：長按您的個人設置名稱在總覽畫面上。 更多信息請參見 [個人設置切換 & 個人設置百分比](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)。
  - _注意_：**AAPS** 不接受低於 0.05U/hr 的基礎率。 如果您的 **個人設置** 包含速率為 0.06U/hr 或更低，您需要在完成此任務之前建立一個基礎速率更高的臨時 **個人設置**。 完成此任務後，切換回您的正常 **個人設置**。
- 通過[中斷您的幫浦](../DailyLifeWithAaps/AapsScreens.md#section-c---bg--loop-status) 模擬「洗澡」，持續 1 小時。
  - _提示_：在總覽畫面上按下迴路圖示來打開迴路對話框。
- 通過重新連接您的幫浦結束「洗澡」。
  - _提示_：按下「已中斷連線」圖示來打開迴路對話框。
- 設置一個自定義的[**臨時目標**](../DailyLifeWithAaps/TempTargets.md)，持續 10 分鐘。
  - _提示_：按下總覽畫面上的目標條來打開臨時目標對話框。
- 在 [**組態建置工具**](../SettingUpAaps/ConfigBuilder.md) 中啟用 **Actions** 外掛，以使其出現在可滾動的工具列上方。
  - _提示_：前往 **組態建置工具** 並向下滾動至一般設定。
- 顯示 **Loop** 外掛的內容。
- [縮放血糖圖表](../DailyLifeWithAaps/AapsScreens.md#section-f---main-graph)，能夠查看更大或更小的時間範圍：在過去的數據中切換 6 小時、12 小時、18 小時和 24 小時。
  - _提示_：長按圖表或使用右上角的箭頭。

## 目標 3：證明你的知識

**目標 3** 要求使用者通過一個選擇題考試，旨在測試您的 **AAPS** 知識。

某些使用者發現 **目標 3** 是最難完成的目標。 請將 **AAPS** 文件與問題一同閱讀。 如果您在研究 **AAPS** 文件後仍然遇到困難，請在 [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) 或 [Discord](https://discord.gg/4fQUWHZ4Mw) 群組中尋找“目標 3”（因為您的問題可能之前已經被提出 - 且已由群組回答）。 這些群組可以提供友善的提示，或引導你閱讀 **AAPS** 文件的相關部分。

同時：

- 為了減少在開放循環中需作出通知/決策的次數（臨時基礎率），請在您的 **個人設置** 中設置較寬的目標範圍，例如 90 - 150 mg/dl 或 5.0 - 8.5 mmol/l。
- 你可能想在晚上設置更寬的上限，或者甚至停用開環模式。

要進行 **目標 3**，點擊橘色文字“**尚未完成**”來查看相關問題。 請仔細閱讀每個問題並選擇你的答案。

每個問題可能有多個正確答案！ 如果選擇了不正確的答案，該問題將被鎖定 1 小時，您才能再次回去回答問題。 當你再次嘗試回答時，請注意答案的順序可能已經改變，這是為了確保你仔細閱讀並真正暸解每個答案的正確性（或錯誤性）。

```{admonition} __What happens if new question(s) are added to an Objective when I update to a newer version of AAPS?__
:class: 注意
不時會有新的功能加入 **AAPS**，這可能需要新增問題到 **目標**，特別是 **目標 3**。因此，任何新增的 **目標 3** 的問題將被標記為「未完成」，因為 **AAPS** 會要求您執行這個操作。請不要擔心，因為每個 **目標** 是獨立的，只要其他 **目標** 保持完成，您將不會失去 **AAPS** 的現有功能。
```

## 目標 4：開始使用開環

**目標 4** 的目的是識別 **AAPS** 多頻繁地根據葡萄糖水平評估使用者的基礎率，並建議臨時基礎率的調整。 作為此 **目標** 的一部分，您將首次啟動開放循環，並接受 20 個提出的臨時基礎率變更，如有需要，手動應用這些變更在您的幫浦上。 您還將觀察到 [**臨時目標**](../DailyLifeWithAaps/TempTargets.md) 的影響。 如果您尚不熟悉在 **AAPS** 中設置臨時基礎率變更，請參閱 [**操作** 標籤](../DailyLifeWithAaps/AapsScreens.md#action-tab)。

完成此目標的最短時間為：**7 天**。 這是一個強制的等待時間。 即使所有基礎率變更均已執行，您也無法進入下一個 **目標**。

- 從 [偏好設定 > OpenAPS](../SettingUpAaps/Preferences.md#aps-mode) 選單中選擇開放循環，或通過按住 **總覽** 螢幕左上角的循環圖示。
- 在 7 天內手動執行至少 20 次臨時基礎率建議；將他們輸入到你的（實體）幫浦中，並在 AAPS 中確認你已接受他們。 確保這些基礎率調整在 **AAPS** 和 **Nightscout** 中出現。
- 在必要時使用 [**臨時目標**](../DailyLifeWithAaps/TempTargets.md)。 在治療低血糖後，使用預定的「低血糖臨時目標」以防止系統過度修正回升。

為了減少在開放循環中提出的基礎率變更次數，您仍然可以使用在 [**目標 3**](#objective-3-prove-your-knowledge) 中描述的提示。
另外，您可以更改推薦的基礎率變更的最小百分比。 數值越高，您會收到的變更通知就越少。

![開環模式的最小請求變更](../images/OpenLoop_MinimalRequestChange2.png)

```{admonition} Note
:class: 注意

您不需要執行每一個系統建議！
```

## 目標 5：暸解你的開環，包括其臨時基礎率建議

在 **目標 5** 中，你將開始了解如何得出臨時基礎率的建議。 這包括 [基礎邏輯的確定](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html)，通過觀察 [**AAPS 總覽**](../DailyLifeWithAaps/AapsScreens.md#prediction-lines)（或 Nightscout）中的預測線來分析影響，還有查看您 **OpenAPS** 標籤上顯示的詳細計算。

完成此目標的預估時間：**7 天**。

此 **目標** 要求您確定並設置「臨時基礎率最大 U/h 值」（max-basal），如 [OpenAPS 功能介紹](../DailyLifeWithAaps/KeyAapsFeatures.md#max-uh-a-temp-basal-can-be-set-to) 中所述。 此數值可以在 [偏好設定 > OpenAPS](../SettingUpAaps/Preferences.md#max-uh-a-temp-basal-can-be-set-to) 中設置。
如果您仍在使用虛擬幫浦，請確保此安全設置在 **AAPS** 和您的胰島素幫浦中均已設定。

您可能希望將您的 [**個人設置** BG 目標](../SettingUpAaps/YourAapsProfile.md#glucose-targets) 設定為高於平常，直到您對 **AAPS** 的計算和設置感到滿意。 您可能希望在您的 **個人設置** 中嘗試調整 **血糖目標** 至較緊湊的範圍（例如，1 或更少 mmol/l [20 mg/dl 或更少] 的範圍），並觀察所得到的行為。

![停止標誌](../images/sign_stop.png)

```{admonition} If you have been using a virtual pump, change to a real insulin pump now!
:class: 注意

如果您在使用虛擬幫浦開放循環，**在此停止**。僅在完成該 **目標** 後點擊驗證，當您已更改為使用「真實」幫浦且能提供胰島素時。

```

![空白](../images/blank.png)

## 目標 6：使用低血糖暫停功能開始閉環

![警告標誌](../images/sign_warning.png)

```{admonition} Closed loop will not correct high **BG** values in **Objective 6** as it is limited to **Low Glucose Suspend** only!
:class: Note
你仍然需要自行修正高血糖值（手動透過幫浦或注射筆進行修正）！
```

作為 **目標 6** 的一部分，您將關閉回路並啟動其 **低血糖暫停**（LGS）模式，同時 [最大 IOB](../DailyLifeWithAaps/KeyAapsFeatures.md#maximum-total-iob-openaps-cant-go-over-openaps-max-iob) 設置為零。 您必須保持 LGS 模式 5 天才能完成此 **目標**。 您應該利用這段時間檢查您的 **個人設置** 是否準確，並確保 LGS 事件不會過於頻繁地觸發。

完成此目標的最短時間為：**5 天**。 這是一個強制的等待時間。 在這段時間尚未結束之前，您無法進入下一個 **目標**。

在您關閉 **LGS** 模式的回路之前，確保您的當前 **個人設置**（基礎、ISF、IC）已經過良好的測試。 不正確的 **個人設置** 可能會使您進入低血糖情況，必須手動處理。 準確的 **個人設置** 將有助於減少在 5 天期間對低血糖治療的需求。

**如果您仍觀察到頻繁或嚴重的低血糖發作，請考慮調整您的 DIA、基礎、ISF 和碳水化合物比例。** 請參閱 [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) 或 [Discord](https://discord.gg/4fQUWHZ4Mw) 群組，這裡對此有許多討論。

在 **目標 6** 中，**AAPS** 將會把 maxIOB 設定覆蓋為零。 **此覆蓋會在移動到目標 7 時結束。**

這意味著在 **目標 6** 時，如果感測器的血糖水平下降，**AAPS** 將會為你降低基礎胰島素的輸送量。 但是，如果感測器的血糖水平上升，**AAPS** 只會在由於之前的 **LGS** 而使 **basal IOB** 為負值的情況下，將基礎率提高到超過你的 **個人設置** 值。 否則，**AAPS** 不會將基礎率提高到超過你目前個人資料的數值，即使血糖水平正在上升。 這個謹慎設置是為了避免在學習使用 **AAPS** 時出現低血糖情況。

**因此，在這個階段，你需要手動處理高血糖的胰島素注射修正。**

- 如果你的基礎 IOB 是負值（詳見下圖），則可以在 **目標 6** 中觸發臨時基礎率 (TBR) > 100%。

![負數 IOB 的範例](../images/Objective6_negIOB.png)

- 將你的目標範圍設置得比平常略高，以增加安全緩衝。
- 通過長按 OVERVIEW 螢幕右上角的 Loop 圖示並選擇 Loop - LGS 模式圖示來啟用“低血糖暫停”模式。
- 檢視啟動的臨時基礎率，觀察 「首頁總覽」螢幕上的藍綠色基礎文本或 「首頁總覽」圖表中的藍綠色基礎呈現。
- 在處理低血糖後，你可能會暫時經歷血糖反彈，但無法提高基礎率來應對反彈。

## 目標 7：調整閉環模式，將 maxIOB 提高至 0 以上並逐步降低血糖目標

要完成**目標 7**，您必須關閉循環並提高您的[maxIOB](../DailyLifeWithAaps/KeyAapsFeatures.md#maximum-total-iob-openaps-cant-go-over-openaps-max-iob)。 **maxIOB** 在 **目標 6** 中自動被設為零。 現在這個設定將被恢復。 **AAPS** 將開始使用你設定的 maxIOB 值來修正高血糖值。

完成此目標的最少時間：**1 天**。 這是一個強制的等待時間。 在此時段結束之前，無法進入下一個**目標**。

- 從 [偏好設定 > OpenAPS](../SettingUpAaps/Preferences.md) 中選擇 **閉環**，或透過長按 **總覽** 螢幕右上角的 Loop 圖示來選擇。 在 **閉環** 中持續 1 天。

- 慢慢提高“**最大總 IOB OpenAPS 不能超過**” （在 OpenAPS 中稱為 'max-iob'）的值，直到你找到最適合自己的設置。

對於這個設置，預設建議是“**平均餐前注射 + 3 倍最大日基礎**”，其中“最大日基礎”是在一天任何時間段的最大每小時值。

![每日最大基礎率](../images/MaxDailyBasal2.png)

這個建議應被視為起點。 如果你使用這個規則，但在血糖水平上升時發現 AAPS 投放過多胰島素，你可能需要：

- 降低“**最大總 IOB OpenAPS 不能超過**”的值；
- 查看你的 **個人設置** 設定，每次只做一次調整。

或者，如果你對胰島素非常抗拒，則需非常小心地提高 **maxIOB** 的值。

一旦你對 **maxIOB** 的值在你的循環模式下的適應度感到滿意，則可以將你的 **血糖目標** 降至你想要的水平。

## 目標 8：如有需要，調整基礎率和比例，然後啟用 Autosens

作為此 **目標** 的一部分，你將重新檢視你的 **個人設置** 的表現，並利用 [Autosens](../DailyLifeWithAaps/KeyAapsFeatures.md#autosens) 功能作為錯誤設定的指標。

完成此目標的最少時間：**7 天**。 這是一個強制的等待時間。 在此時段結束之前，無法進入下一個**目標**。

在 7 天內啟用 [Autosens](../DailyLifeWithAaps/KeyAapsFeatures.md)，並觀察 [**總覽** 的圖表白線](../DailyLifeWithAaps/AapsScreens.md#section-g---additional-graphs) 反映你因運動或激素等因素而上升或下降的胰島素敏感度。 留意 OpenAPS 報告標籤，它顯示 **AAPS** 根據需要調整敏感度、基礎率和目標。

此外，你可以使用 [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) 作為一次檢查，確保你的基礎率保持準確，或進行傳統的基礎測試。

## 目標 9：啟用白天使用的其他 oref1 功能，例如超微量注射 (SMB)

在 **目標 9** 中，你將處理並使用 **"超微量注射 (SMB)"** 作為一項核心功能。 在完成必讀材料後，你將對 SMB 的概念有良好的了解，知道這些如何運作，以及為什麼在給予 SMB 後基礎率會暫時設為零（零暫停）。

完成此目標的最少時間：**28 天**。 這是一個強制的等待時間。 在這段時間內你無法進入下一個目標。

- 要理解 **SMB** 以及 **零暫停** 的概念，查看[本文件的 SMB 區段](../DailyLifeWithAaps/KeyAapsFeatures.md#super-micro-bolus-smb) 和 [openAPS 文檔中的 oref1 覆蓋](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) 是必讀的。
- 完成後，你可以 [提高 maxIOB](../DailyLifeWithAaps/KeyAapsFeatures.md#maximum-total-iob-openaps-cant-go-over-openaps-max-iob) 以使 **SMB** 更有效率。 maxIOB 現在包括所有 **IOB**，不僅僅是累積的基礎。 這個門檻值會暫停 **SMB**，直到 IOB 降到這個值以下（例如 **maxIOB** 設為 7U，而給予了 8U 的注射來覆蓋一餐：除非 **IOB** 降到 7U 以下，否則 **SMB** 將被暫停且不會給予）。
  一個好的開始是設定 **maxIOB** = **平均餐前注射 + 3 倍最大日基礎**，其中“最大日基礎”是在一天任何時間段的最大每小時值。 請參考 [目標 7](#objective-7-tuning-the-closed-loop-raising-maxiob-above-0-and-gradually-lowering-bg-targets)。
- 評估你的碳水化合物吸收率，並考慮在 [偏好設定 > 吸收設定 > min_5m_carbimpact](../SettingUpAaps/Preferences.md#min_5m_carbimpact) 中更改“min_5m_carbimpact”參數，如果你發現它太慢或太快。

## 目標 10：自動化

**自動化** 在開始 **目標 10** 時變得可用。

完成此目標的最少時間：**28 天**。 這是一個強制的等待時間。 在這段時間內你無法進入下一個目標。

首先閱讀文檔頁面 [自動化](../DailyLifeWithAaps/Automations.md)。

設置最基本的自動化規則；例如在幾分鐘內觸發一個 Android 通知：

- 選擇通知頁籤
- 從右上角的 3 點選單中，選擇新增規則
- 給任務命名為 "我的第一個自動化通知"
- "編輯" "條件"
  - 點擊 "+" 圖示來新增第一個觸發條件
  - 選擇 "時間" 並按 "OK"，他將建立一個預設的條目，時間為今天的某時某分
  - 點擊分鐘部分來編輯時間，使其在幾分鐘內觸發。 然後點擊 OK 關閉
  - 點擊 "OK" 關閉觸發條件畫面
- "新增" 一個 "動作"
  - 選擇 "通知"，按 "OK"
  - 點擊“通知”以編輯消息，輸入類似“我的第一個自動化”的內容
- 等到時間觸發通知（根據你的手機，可能會有幾分鐘的延遲）

然後你可以嘗試設置一個更有用的 **自動化**。
文檔頁面提供了一些示例，你也可以在 [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) 群組中搜尋 “自動化” 截圖。 在 [Discord](https://discord.gg/4fQUWHZ4Mw) 社區中也有一個專門的頻道。

例如，如果你每天早上在上學/上班前的同一時間吃相同的早餐，你可以建立一個 **自動化**，例如“早餐前目標”，在早餐前 30 分鐘設置一個稍低的 **臨時目標**。 在這種情況下，你的條件可能會包括 "定期時間"，選擇一週中的特定日子（星期一、星期二、星期三、星期四、星期五）和特定時間（上午 06:30）。 該行動將包含“開始臨時目標”，搭配一個低於平常目標值的設定，並持續 30 分鐘。

## 目標 11：啟用白天使用的其他功能，例如動態敏感度外掛 (DynISF)。

完成這個 **目標** 的最少時間：**28 天**。 這是一個強制的等待時間。 在此時段結束之前，無法進入下一個**目標**。

- 確保 **SMB** 正常運行
- 在這裡閱讀關於 **動態 ISF** 的文檔 [這裡](../DailyLifeWithAaps/DynamicISF.md)
- 在 [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) 和 [Discord](https://discord.gg/4fQUWHZ4Mw) 群組搜尋有關 **動態 ISF** 的討論，了解其他用戶的經驗和建議。
- 啟用 **DynamicISF 外掛**，並確定適合你身體需求的校正值。 出於安全考量，建議初始值設置為低於 100%。

### 返回目標

如果你因某種原因想回到之前的 **目標**，可以通過點擊“清除完成”來做到這一點。

![返回目標](../images/Objective_ClearFinished.png)
