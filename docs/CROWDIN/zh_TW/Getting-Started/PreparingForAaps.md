# 準備開始使用 AAPS

歡迎。本文件旨在引導使用者設定並開始使用 Android 人工胰臟系統（**AAPS**）。

## 如何在文件中找到所需訊息

可以在[這裡](../index.md)找到文件結構的**索引**和說明，你也可以點擊文件左上角的**AAPS**圖示進行查看。在那裡，你會找到不同文件部分的總覽和目的。你也可以使用此頁面左側的標題來瀏覽文件。最後，文件**AAPS**圖示下方有一個方便的搜索功能。

我們主要在讓用戶輕鬆了解**AAPS**的功能和限制。花時間閱讀文件後發現你的胰島素幫浦或 CGM 不相容，或者**AAPS**無法提供你期望的功能，這可能會令人失望。

文件中與**AAPS**使用體驗相關的許多細節在你實際使用**AAPS**時會更有意義。就像只閱讀規則很難學習一項運動一樣，安全操作**AAPS**的基礎規則學習與開始使用**AAPS**後的應用相結合，才能有效掌握。

(preparing-safety-first)=

## 安全第一
“能力越大，責任越大……”

### 技術安全
**AAPS**具有一套廣泛的安全功能。這些功能會透過逐步完成一系列[目標](../SettingUpAaps/CompletingTheObjectives.md)，包括測試特定參數並回答選擇題，逐步解除限制。當成功完成目標後，**AAPS**的功能會逐步解鎖。此過程允許用戶在從開環模式到閉環模式的過程中安全過渡，同時學習**AAPS**的不同功能。

[目標](../SettingUpAaps/CompletingTheObjectives.md)設計主要在為用戶提供最好的**AAPS**入門體驗，考慮到了**AAPS**開發者觀察到的新用戶典型錯誤和趨勢。初學者因為經驗不足或過於急切開始使用**AAPS**而犯錯，或忽略了關鍵點。[目標](../SettingUpAaps/CompletingTheObjectives.md)旨在盡量減少這些問題。

### 醫療安全
```{admonition} Avoid permanent and painful damage to your eyes and nerves
:class: danger
對於血糖控制迅速改善與 HbA1c 降低，建議要謹慎。 
```

一個重要的安全考量是，對於長期血糖升高的人來說，**HbA1c 的快速降低和血糖控制的改善可能會導致永久性損害**。許多糖尿病患者並不知道這一點，而且並非所有臨床醫師都會提醒患者注意這個問題。

這種損害可能包括**視力喪失和永久性神經病變（疼痛）**。可以通過更慢地降低平均血糖水平來避免此損害發生。如果你目前的 HbA1c 升高並打算使用**AAPS**（或任何其他閉環系統），_請_在開始之前與你的醫療團隊討論這一潛在風險，並與他們協商逐步降低安全血糖目標的時間表。你可以在**AAPS**中設置較高的血糖目標（目前，你可以選擇的最高目標是 11.1 mmol/L，你也可以維持一個相對較弱的設定），隨著時間的推移逐漸降低目標。

#### 我可以多快降低 HbA1c 而不會冒永久性損害的風險？

一項針對 76 位患者進行的回溯性[研究](https://pubmed.ncbi.nlm.nih.gov/1464975/)指出，如果 HbA1c 在 6 個月內分別下降 1%、2% 或 3%，視網膜病變惡化的風險會分別增加 1.6 倍、2.4 倍和 3.8 倍。他們建議**"在任何 6 個月內 HbA1c 的降低幅度應限制在 2% 以內，以防止視網膜病變的進展...在開始血糖控制時，降低過快可能會導致視網膜病變進展的嚴重或暫時性惡化。" **

N.B. 如果您使用的 HbA1c 單位是 mmol/mol，而非 %，請按[此處](https://www.diabetes.co.uk/hba1c-units-converter.html)使用 HbA1c 計算工具。

在另一項針對 954 名患者的回顧性[評估](https://academic.oup.com/brain/article/138/1/43/337923)中，研究人員指出：

**"HbA1c 在 3 個月內降低 2–3% 時，治療誘發糖尿病神經病變的絕對風險為 20%；而 HbA1c 在 3 個月內降低超過 4% 時，絕對風險超過 80%。"**

針對這項研究的一篇[評論](https://academic.oup.com/brain/article/138/1/2/340563)同意為了避免併發症，**目標應是在 3 個月內將 HbA1c 降低不超過 2%**。你可以在[這裡](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6587545/pdf/DOM-21-454.pdf)和[這裡](https://www.mdpi.com/1999-4923/15/7/1791)閱讀其他相關評論。

一般認為，_剛_確診的第一型糖尿病患者（他們在確診時、開始胰島素治療前，HbA1c 通常很高），確診後似乎能迅速降低 HbA1c，且較不會遭遇同等程度的風險，因為他們的血糖偏高並未持續太久。然而，這仍然是一個需要與你的臨床醫生討論的考慮因素。

(PreparingForAaps-no-sglt-2-inhibitors)=
### 禁止使用 SGLT-2 抑制劑

```{admonition} NO SGLT-2 inhibitors
:class: danger
SGLT-2 抑制劑，也稱為 gliflozins，抑制腎臟對葡萄糖的再吸收。 Gliflozins 會無法預測地降低血糖數值，因此在使用類似 AAPS 的閉環系統時，絕對不能服用這類藥物！這會導致酮酸中毒和/或低血糖的重大風險！該藥物與降低基礎率以提高血糖數值的系統結合使用尤其危險。 

In a nutshell:
- **Example 1: risk of Hypo**
>During lunch, you use **AAPS** to bolus based on consuming 45 g of carbs. 問題在於，AAPS 不知道這些抑制劑會使身體排除部分碳水化合物。如此一來，相較於身體吸收的碳水化合物，體內胰島素就會過多，導致低血糖。

- **範例 2：酮酸中毒風險**
>抑制劑在未察覺的情況下排除部分碳水化合物，導致血糖降低。 **AAPS** 會自動指示幫浦減少胰島素輸注量，包括基礎胰島素。長期下來，這可能導致血糖持續低於目標值，甚至使身體沒有足夠的背景胰島素來吸收任何碳水化合物，進而引發酮酸中毒。一般來說，T1D 患者發生酮酸中毒，是因為幫浦故障；這會觸發手機警示，而且血糖值偏高也會讓人察覺。然而，使用 gliflozins 的危險之處在於，幫浦仍正常運作，血糖也可能維持在目標範圍內，因此 **AAPS** 不會發出警示。

常見的 SGLT-2 抑制劑品牌名稱包括：Invokana、Farxiga、Jardiance、Glyxambi、Synjardy、Steglatro 和 Xigduo XR 等。
```


### 使用 AAPS 循環的關鍵原則

在使用**AAPS**之前，必須了解循環的關鍵原則和概念。這需要你投入個人時間來閱讀**AAPS**文件，並完成目標，這些目標主要在為安全和有效使用**AAPS**提供堅實的基礎。 **AAPS**文件的內容量可能一開始會讓人感到不知所措，但請保持耐心並相信過程 - 使用正確的方法，你會逐漸掌握的！

進度的速度取決於個人，但完成所有目標通常需要 6 - 9 週的時間。許多人會在開始使用 **AAPS** 之前，提早著手建置、安裝及設定。為了幫助這一過程，系統提供了“虛擬幫浦”，可以在完成早期目標時使用，這樣你可以熟悉**AAPS**，而不需要實際使用他來輸送胰島素。下方列出詳細的時程說明。請注意，完成 **AAPS** 目標 7 後，您就已進入閉環運作；後續目標會加入 **SMB** 和 **自動化功能** 等額外功能，這些功能對部分使用者很有幫助，但並非 **AAPS** 核心功能的必要項目。

成功使用**AAPS**需要積極的態度，願意反思血糖資料，並靈活調整**AAPS**以改善你的結果。就像僅透過閱讀規則來學習運動幾乎是不可能的，同樣的道理也適用於**AAPS**。

#### 為設定和運作所有功能可能出現的延誤和小問題做好準備

在**AAPS**的初步階段，你可能會遇到將循環的所有組件（以及潛在的追蹤者）有效通訊以及微調設置的困難。有些問題只有在日常生活中使用**AAPS**時才能解決，但在 Facebook 群組和 Discord 上有大量幫助可供使用。請相應地進行計劃，並選擇“適當的”時間，例如週末的安靜早晨（即不要在深夜或感到疲倦時，也不要在重要會議或旅行之前）進行問題排除和解決問題。

#### 技術相容性

**AAPS**僅與某些類型的胰島素幫浦、CGM 和手機相容，有些技術在某些國家/地區可能無法使用。為避免任何失望或沮喪，請閱讀[CGM](../Getting-Started/CompatiblesCgms.md)、[幫浦](../Getting-Started/CompatiblePumps.md)和[手機](../Getting-Started/Phones.md)部分。

#### 應用程序建置時間和進入完整閉環的進度

The time to build the **AAPS** app depends on your level of expertise and technical ability. 通常對於沒有經驗的用戶，建置**AAPS**可能需要半天到一天的時間（有社區的幫助）。隨著你變得更加有經驗，更新版**AAPS**的建置過程會顯著加快。

本文件有幾個部分會協助您完成建置流程：

- [建置 AAPS](../SettingUpAaps/BuildingAaps.md) 會逐步引導您建置應用程式並安裝到手機上；

- [常見問題](../UsefulLinks/FAQ.md)會回答常見問題，並說明最可能發生的錯誤；以及

- [疑難排解](../GettingHelp/GeneralTroubleshooting.md)專區依主題整理了最常見問題的解決方法。

每個人進入閉環運作所需的時間都不同；下方[列出](#preparing-how-long-will-it-take)使用 **AAPS** 達到完整閉環運作的大致時程。


#### Keystore 和配置設置匯出文件

“Keystore”（.jks 文件）是一個加密的文件，特定於你自己的**AAPS**副本。你的 Android 手機使用他來確保沒有人可以在沒有 keystore 的情況下升級你的副本。簡單來說，作為**AAPS**建置的一部分，你應該：

1.  請將您的金鑰儲存檔（用來簽署應用程式的 .jks 檔案）儲存在安全的地方；

2.  記下你的 keystore 文件密碼。

如何儲存金鑰庫取決於你的建置方法：

- **Android Studio（電腦）建置**：金鑰庫會在建置過程中建立——請參閱 [產生已簽署的 APK](#Building-APK-generate-signed-apk) 以了解儲存位置。
- **AAPS Builder**：保留在你建立金鑰時，設定頁面提供的備份檔 `aaps-keystore.jks`，以及其密碼與別名。如果你上傳了自己的金鑰庫，請妥善保留該檔案。
- **使用含 fork 的瀏覽器建置**：請使用專用的 [匯出金鑰庫](#ci-keystore-export) 工作流程，將副本下載到你的 Google Drive。

這將確保每次建立**AAPS**的更新版本時，你都可以使用相同的 keystore 文件。平均而言，每年需要更新**AAPS**兩次。

此外，**AAPS**還提供了[匯出所有配置設置](../Maintenance/ExportImportSettings.md)的功能。這確保你可以在更換手機、升級/重新安裝應用程序時安全恢復系統，並將干擾降至最低。 

#### 問題排除

如果你對任何問題感到不確定，請隨時聯繫**AAPS**社區——沒有什麼問題是愚蠢的！鼓勵具有不同經驗數值的所有用戶提出問題。由於**AAPS**用戶眾多，問題的回應時間通常很快。

##### [在 AAPS Facebook 社群上詢問](https://www.facebook.com/groups/AndroidAPSUsers/)

##### [在 AAPS Discord 頻道上詢問](https://discord.gg/4fQUWHZ4Mw)





#### [去哪裡尋求幫助](../GettingHelp/WhereCanIGetHelp.md)？

本節主要在為新用戶提供資源連結，以便獲得幫助，包括由新手和有經驗的用戶組成的社區支援，這些用戶可以幫助解答問題並解決使用 AAPS 時常見的問題。

#### [臨床醫師專區](../UsefulLinks/ClinicianGuideToAaps.md)

這是一個[專為臨床醫師設計的部分](../UsefulLinks/ClinicianGuideToAaps.md)，適合希望了解 AAPS 和開源人工胰腺技術更多信息。在簡介中還提供了[如何與你的臨床團隊討論 AAPS](#introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team)的指南。

## 我們要建置和安裝什麼？

此圖表提供了**AAPS**系統的主要組件（硬體和軟體）的總覽：

![準備總覽](../images/preparing_images/AAPS_preparing_overview_01.png)


除了三個基本硬體組件（手機、胰島素幫浦、血糖傳感器）之外，我們還需要：1) **AAPS**應用程式 2) 報告伺服器3) 持續血糖監測儀（CGM）應用程式

### 1) Android 手機應用程式：**AAPS**

**AAPS** 是一款在 Android 智慧型手機與裝置上執行的應用程式。你將依照逐步指南，從 GitHub 下載 **AAPS** 的原始碼，並在你的電腦上安裝必要的程式（如 Android Studio、GitHub Desktop），自行建置屬於自己的 **AAPS** 應用程式（apk 檔）。然後，你將透過電子郵件、USB 線等方式將**AAPS**應用程式傳輸到你的智慧型手機並安裝。

### 2) 報告伺服器：Nightscout（Tidepool*）

若要充分運用 **AAPS**，您需要設定 Nightscout 伺服器。你可以[自己動手](https://nightscout.github.io/nightscout/new_user/#free-diy)，或者支付小額費用讓[代理的Nightscout服務](https://nightscout.github.io/#nightscout-as-a-service)為你設置。 Nightscout 用於收集**AAPS**隨時間推移的資料，並能夠生成詳細的報告，以關聯 CGM 和胰島素模式。照護者還可以使用 Nightscout 遠端與**AAPS**應用程式通訊，以監控其孩子的糖尿病管理。這些遠端通訊功能包括即時監控血糖和胰島素數值、遠端注射胰島素（透過發送訊息）以及餐點通知。如果只看 CGM 資料，卻不查看幫浦資料來分析糖尿病管理情況，就像開車時駕駛看不見路況，只能由乘客描述眼前的景象。您也可以選擇使用 Tidepool 取代 Nightscout。

### 3) CGM 傳感器應用程式

根據你的血糖傳感器/CGM，你將需要一個相容的應用程式來接收血糖資料並將其發送到**AAPS**。以下展示了不同的選項，更多訊息請參閱[相容的 CGM 部分](../Getting-Started/CompatiblesCgms.md)：

![dexcom_options](../images/preparing_images/AAPS_connectivity_Dex_02.png) ![libre_options](../images/preparing_images/AAPSconnectivity_libre.png) ![eversense_options](../images/preparing_images/AAPS_connectivity_eversense.png)

### AAPS 系統的維護

**Nightscout**和**AAPS**必須大約每年更新一次，隨著改進版本的發佈。在某些情況下，更新可以延後，但在其他情況下，更新被強烈建議或視為安全的重要措施。這些更新的通知將在 Facebook 群組和 Discord 伺服器上發佈。發佈說明將明確說明具體情況。在更新時，可能會有許多人與你提出類似問題，你將獲得支援來進行更新。

(preparing-how-long-will-it-take)=
## 設置所有內容需要多長時間？

如前所述，使用**AAPS**更像是一段旅程，需要你投入個人時間。這不是一次性的設置。關於建立建置**AAPS**、安裝和配置**AAPS**和**CGM**軟體，到從開放循環進入混合閉環循環的過程，大約需要 4 到 6 個月。因此建議你優先建立 **AAPS** 應用程式並儘快完成早期目標，即使你仍然在使用其他胰島素輸送系統（你可以使用虛擬幫浦到達目標 5）。

部分目標需要一定的天數以確保你暸解新功能。無法跳過這段等待時間；設定這些最短等待時間是為了保障您的安全。

以下是大致的時間表：

| 任務                                         |      大致時間      |
| ------------------------------------------ |:--------------:|
| 初步閱讀文件                                     |     1-2 天      |
| 設定 GitHub 以允許透過瀏覽器建置                       |     1-4 小時     |
| 設置報告伺服器                                    |      1 小時      |
| 安裝 CGM 應用程式（xDrip、BYODA 等）                 |      1 小時      |
| 初步設定 CGM → xDrip → AAPS                    |      1 小時      |
| 初步配置 AAPS → 幫浦                             |      1 小時      |
| 初步配置 AAPS → Nightscout/Tidepool（僅限報告）      |      1 小時      |
| 選擇性：設定 Nightscout ↔ **AAPS** 與 NSFollowers |      1 小時      |
| 目標 1：設置可視化和監控                              |      1 小時      |
| 目標 2：學習如何控制 AAPS                           |      2 小時      |
| 目標 3：證明你的知識                                |    最多 14 天     |
| 目標 4：開始使用開環                                |     最少 7 天     |
| 目標 5：暸解你的開環                                |      7 天       |
| 目標 6：開始閉環（LGS - 低血糖暫停）                     | 最少 5 天，最多 14 天 |
| 目標 7：調整閉環                                  | 最少 1 天，最多 7 天  |
| 目標 8：調整基礎率和比例，啟用 Autosens                  | 最少 7 天，最多 14 天 |
| 目標 9：啟用超微量注射 (SMB)                         |    最少 28 天     |
| 目標 10：自動化                                  |    最少 28 天     |

當你開始使用**AAPS**，你仍然需要定期調整設定，以持續改善你的糖尿病管理。

## 需求

### 醫療考量

除了 [安全部分](#preparing-safety-first) 中的醫療警告外，根據你在幫浦中使用的胰島素類型，還有不同的參數需要考量。

#### 胰島素選擇

**AAPS** 的計算是基於 100U/ml 的胰島素濃度（與幫浦的標準一致）。請在**管理 → 胰島素設定**中設定胰島素：設定其**作用峰值**和**作用時間（DIA）**，或使用**從以下項目載入作用峰值**，填入其中一個預設選項的標準作用峰值時間：

- **Novorapid**（Humalog 和 NovoLog 也適用）
- **Fiasp**
- **Lyumjev**

進階使用者可以直接輸入任何作用峰值時間（35 到 120 分鐘），例如混合使用多種胰島素時。請參閱[胰島素設定](#Config-Builder-insulin)。


### 技術性

本文件主要在將技術專業知識的需求降到最低。建置 **AAPS** 應用程式有幾種方式，概覽請參閱[建置 AAPS](../SettingUpAaps/BuildingAaps.md)：

- **瀏覽器建置**（建議）：使用 GitHub Actions 直接透過智慧型手機建置應用程式，不需要電腦或 Android Studio。使用 [AAPS Builder](../SettingUpAaps/BrowserBuildAapsBuilder.md) 時，您只需要一個 GitHub 帳號，就能直接從 GitHub 下載應用程式。使用 fork 方式也需要 Google 帳號，才能將應用程式儲存在 Google 雲端硬碟。
- **Android Studio 建置**：使用 Android Studio 在電腦上建置應用程式。這種方式主要由打算修改程式碼的開發人員使用。
- **命令列建置**：適合偏好在本機建置、但不想安裝 Android Studio 的使用者。

除了建置應用程式，您還需要設定報告伺服器、設定數個 Android 手機應用程式，並培養糖尿病管理的相關知識。您可以按部就班、保持耐心，並尋求 **AAPS** 社群的協助來完成這些事。如果您已經會瀏覽網路，也能管理自己的 Gmail 電子郵件，那麼建置 **AAPS** 對您來說是做得到的。只需花點時間。

### 智慧型手機

#### AAPS 與 Android 版本

目前版本的 **AAPS**（4.0）需要使用 Google **Android 12.0 或更高版本** 的 Android 智慧型手機。如果你正在考慮購買新手機（截至 2026 年 1 月），建議優先選擇 Android 16。<br/> 基於安全因素，強烈建議使用者保持他們的 **AAPS** 建置為最新版本。然而，對於無法使用 Android 12.0 或更新版本的使用者，早期版本的 **AAPS** 仍然可與舊版 Android 相容，詳情請見： [版本說明](#maintenance-android-version-aaps-version)。

#### 智慧型手機型號選擇
你選購的具體型號取決於所需的功能。你可以在 [手機頁面](../Getting-Started/Phones.md) 上找到推薦與用戶對於可用設置的反饋。

我們鼓勵用戶保持手機 Android 版本的最新狀態，包括安全參數。然而，如果你是 **AAPS** 的新手，或者不是技術專家，你可能希望等到其他人確認更新是安全的後再進行更新，這可以透過我們的各大論壇確認。

```{admonition} Delaying Samsung phone updates
:class: warning
Samsung 過去常強制更新手機，可能導致藍牙連線問題。若要停用這些強制更新，您需要將手機切換至「開發人員模式」：

1. 前往 **設定** > **關於手機** > **軟體資訊**，然後持續點選 **版本號碼**，直到畫面確認您已解鎖開發人員模式。
2. 返回主要的 **設定** 選單，您應該會看到新增的 **開發人員選項**。
3. 開啟 **開發人員選項**，向下捲動找到 **自動系統更新**，然後將它關閉。
```

```{admonition} Google Play Protect potential issue
:class: warning
每個早晨都有幾份報告指出 **AAPS** 被 Google Play Protect 任意關閉。如果發生這種情況，您必須前往 Google Play 選項並停用 **Google Play Protect**。並非所有手機型號或 Android 版本都會受到影響。
```

```{admonition} Android developer verification
:class: note
自 2026 年 9 月起，Google 將逐步推出[Android 開發人員驗證](#android-developer-verification)，這會改變自行建置的應用程式在手機上的安裝方式。建置 **AAPS** 不受影響，而且仍有免費的安裝方式；詳情請參閱連結頁面。
```

