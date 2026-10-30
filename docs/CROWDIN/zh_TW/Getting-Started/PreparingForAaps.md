# 準備開始使用 AAPS

歡迎。 This documentation aims to guide users who are preparing to set up and start using the Android Artificial Pancreas System (**AAPS**).

## 如何在文件中找到所需訊息

可以在[這裡](../index.md)找到文件結構的**索引**和說明，你也可以點擊文件左上角的**AAPS**圖示進行查看。在那裡，你會找到不同文件部分的總覽和目的。你也可以使用此頁面左側的標題來瀏覽文件。最後，文件**AAPS**圖示下方有一個方便的搜索功能。

我們主要在讓用戶輕鬆了解**AAPS**的功能和限制。花時間閱讀文件後發現你的胰島素幫浦或 CGM 不相容，或者**AAPS**無法提供你期望的功能，這可能會令人失望。

文件中與**AAPS**使用體驗相關的許多細節在你實際使用**AAPS**時會更有意義。就像只閱讀規則很難學習一項運動一樣，安全操作**AAPS**的基礎規則學習與開始使用**AAPS**後的應用相結合，才能有效掌握。

(preparing-safety-first)=

## 安全第一
“能力越大，責任越大……”

### 技術安全
**AAPS**具有一套廣泛的安全功能。這些功能會透過逐步完成一系列[目標](../SettingUpAaps/CompletingTheObjectives.md)，包括測試特定參數並回答選擇題，逐步解除限制。當成功完成目標後，**AAPS**的功能會逐步解鎖。此過程允許用戶在從開環模式到閉環模式的過程中安全過渡，同時學習**AAPS**的不同功能。

[目標](../SettingUpAaps/CompletingTheObjectives.md)設計主要在為用戶提供最好的**AAPS**入門體驗，考慮到了**AAPS**開發者觀察到的新用戶典型錯誤和趨勢。初學者因為經驗不足或過於急切開始使用**AAPS**而犯錯，或忽略了關鍵點。 The [Objectives](../SettingUpAaps/CompletingTheObjectives.md) aim to minimize these issues.

### 醫療安全
```{admonition} Avoid permanent and painful damage to your eyes and nerves
:class: danger
對於血糖控制迅速改善與 HbA1c 降低，建議要謹慎。 
```

一個重要的安全考量是，對於長期血糖升高的人來說，**HbA1c 的快速降低和血糖控制的改善可能會導致永久性損害**。 Many people with diabetes are unaware of this, and not all clinicians make their patients aware of this issue.

這種損害可能包括**視力喪失和永久性神經病變（疼痛）**。可以通過更慢地降低平均血糖水平來避免此損害發生。如果你目前的 HbA1c 升高並打算使用**AAPS**（或任何其他閉環系統），_請_在開始之前與你的醫療團隊討論這一潛在風險，並與他們協商逐步降低安全血糖目標的時間表。 You can easily set higher glucose targets in **AAPS** initially (currently, the highest target you can select is 11.1 mmol/L but you can also maintain a purposefully weak profile if needed), and then reduce the target as the months pass.

#### 我可以多快降低 HbA1c 而不會冒永久性損害的風險？

一項針對 76 名患者的回顧性[研究](https://pubmed.ncbi.nlm.nih.gov/1464975/)報告稱，如果 HbA1c 在 6 個月內下降 1%、2% 或 3%，視網膜病變進展的風險分別增加 1.6 倍、2.4 倍和 3.8 倍。他們建議**"在任何 6 個月內 HbA1c 的降低幅度應限制在 2% 以內，以防止視網膜病變的進展...在開始血糖控制時，降低過快可能會導致視網膜病變進展的嚴重或暫時性惡化。" **

N.B. If you use different HbA1c units (mmol/mol rather than %), click [here](https://www.diabetes.co.uk/hba1c-units-converter.html) for an HbA1c calculator tool.

在另一項針對 954 名患者的回顧性[評估](https://academic.oup.com/brain/article/138/1/43/337923)中，研究人員指出：

**"HbA1c 在 3 個月內降低 2–3% 時，治療誘發糖尿病神經病變的絕對風險為 20%；而 HbA1c 在 3 個月內降低超過 4% 時，絕對風險超過 80%。"**

針對這項研究的一篇[評論](https://academic.oup.com/brain/article/138/1/2/340563)同意為了避免併發症，**目標應是在 3 個月內將 HbA1c 降低不超過 2%**。你可以在[這裡](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6587545/pdf/DOM-21-454.pdf)和[這裡](https://www.mdpi.com/1999-4923/15/7/1791)閱讀其他相關評論。

It is generally recognized that _newly_ diagnosed type 1 diabetics (who often have very high HbA1c at diagnosis, before starting insulin therapy) appear to be able to rapidly reduce their HbA1c immediately after diagnosis without encountering these risks to the same extent, because they have not had elevated blood glucose levels for such a sustained period. 然而，這仍然是一個需要與你的臨床醫生討論的考慮因素。

(PreparingForAaps-no-sglt-2-inhibitors)=
### 禁止使用 SGLT-2 抑制劑

```{admonition} NO SGLT-2 inhibitors
:class: danger
SGLT-2 抑制劑，也稱為 gliflozins，抑制腎臟對葡萄糖的再吸收。 Gliflozins 會無法預測地降低血糖數值，因此在使用類似 AAPS 的閉環系統時，絕對不能服用這類藥物！這會導致酮酸中毒和/或低血糖的重大風險！該藥物與降低基礎率以提高血糖數值的系統結合使用尤其危險。 

In a nutshell:
- **Example 1: risk of Hypo**
>During lunch, you use **AAPS** to bolus based on consuming 45 g of glucose. The problem is that, unbeknownst to AAPS, the inhibitors cause the body to eliminate some of the carbs. This leaves your body with too much insulin compared to the absorbed carbs, resulting in hypoglycemia.

- **Example 2: risk of Ketoacidosis**
>The inhibitors eliminate some of the carbs in the background, causing a reduction in your BG. **AAPS** will automatically instruct the pump to decrease insulin intake, including basal. Over time this can result in your BG remaining below target value, to the point where the body does not have enough background insulin to absorb any carbs, resulting in ketoacidosis. Ordinarily, ketoacidosis develops in T1D patients because their pump fails, which would trigger alerts on their phone and be noticeable due to a high BG value. However, the danger with gliflozins is that there would be no AAPS alerts, as the pump remains operational and the BG potentially remains within target.

常見的 SGLT-2 抑制劑品牌名稱包括：Invokana、Farxiga、Jardiance、Glyxambi、Synjardy、Steglatro 和 Xigduo XR 等。
```


### 使用 AAPS 循環的關鍵原則

在使用**AAPS**之前，必須了解循環的關鍵原則和概念。這需要你投入個人時間來閱讀**AAPS**文件，並完成目標，這些目標主要在為安全和有效使用**AAPS**提供堅實的基礎。 **AAPS**文件的內容量可能一開始會讓人感到不知所措，但請保持耐心並相信過程 - 使用正確的方法，你會逐漸掌握的！

進度的速度取決於個人，但完成所有目標通常需要 6 - 9 週的時間。 Many people start to build, install and set up **AAPS** well in advance of starting to use it. 為了幫助這一過程，系統提供了“虛擬幫浦”，可以在完成早期目標時使用，這樣你可以熟悉**AAPS**，而不需要實際使用他來輸送胰島素。 A detailed breakdown of the timeline is given below, be aware that by objective 7 of **AAPS** you are closed looping, the later objectives add in additional features like **SMB** and **automations** which are useful to some users, but not essential to the core function of **AAPS**.

成功使用**AAPS**需要積極的態度，願意反思血糖資料，並靈活調整**AAPS**以改善你的結果。就像僅透過閱讀規則來學習運動幾乎是不可能的，同樣的道理也適用於**AAPS**。

#### 為設定和運作所有功能可能出現的延誤和小問題做好準備

在**AAPS**的初步階段，你可能會遇到將循環的所有組件（以及潛在的追蹤者）有效通訊以及微調設置的困難。有些問題只有在日常生活中使用**AAPS**時才能解決，但在 Facebook 群組和 Discord 上有大量幫助可供使用。請相應地進行計劃，並選擇“適當的”時間，例如週末的安靜早晨（即不要在深夜或感到疲倦時，也不要在重要會議或旅行之前）進行問題排除和解決問題。

#### 技術相容性

**AAPS**僅與某些類型的胰島素幫浦、CGM 和手機相容，有些技術在某些國家/地區可能無法使用。為避免任何失望或沮喪，請閱讀[CGM](../Getting-Started/CompatiblesCgms.md)、[幫浦](../Getting-Started/CompatiblePumps.md)和[手機](../Getting-Started/Phones.md)部分。

#### 應用程序建置時間和進入完整閉環的進度

建置**AAPS**應用程序的時間取決於你的專業知識和技術能力。通常對於沒有經驗的用戶，建置**AAPS**可能需要半天到一天的時間（有社區的幫助）。隨著你變得更加有經驗，更新版**AAPS**的建置過程會顯著加快。

Several parts of this documentation are dedicated to helping you through the build process:

- [Building AAPS](../SettingUpAaps/BuildingAaps.md) takes you step-by-step through building the app and installing it on your phone;

- the [FAQ](../UsefulLinks/FAQ.md) answers common questions and explains the errors most likely to occur; and

- the [Troubleshooting](../GettingHelp/GeneralTroubleshooting.md) hub collects solutions to the most frequent problems, organised by topic.

How long it takes to get to closed looping depends on the individual; an approximate timeline for reaching full looping with **AAPS** is given [below](#preparing-how-long-will-it-take).


#### Keystore 和配置設置匯出文件

“Keystore”（.jks 文件）是一個加密的文件，特定於你自己的**AAPS**副本。你的 Android 手機使用他來確保沒有人可以在沒有 keystore 的情況下升級你的副本。簡單來說，作為**AAPS**建置的一部分，你應該：

1.  Save your keystore file (.jks file used to sign your app) in a safe place;

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





#### [去哪裡尋求幫助](../UsefulLinks/BackgroundReading.md)？

本節主要在為新用戶提供資源連結，以便獲得幫助，包括由新手和有經驗的用戶組成的社區支援，這些用戶可以幫助解答問題並解決使用 AAPS 時常見的問題。

#### [臨床醫師專區](../UsefulLinks/ClinicianGuideToAaps.md)

這是一個[專為臨床醫師設計的部分](../UsefulLinks/ClinicianGuideToAaps.md)，適合希望了解 AAPS 和開源人工胰腺技術更多信息。在簡介中還提供了[如何與你的臨床團隊討論 AAPS](#introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team)的指南。

## 我們要建置和安裝什麼？

此圖表提供了**AAPS**系統的主要組件（硬體和軟體）的總覽：

![準備總覽](../images/preparing_images/AAPS_preparing_overview_01.png)


除了三個基本硬體組件（手機、胰島素幫浦、血糖傳感器）之外，我們還需要：1) **AAPS**應用程式 2) 報告伺服器3) 持續血糖監測儀（CGM）應用程式

### 1) Android 手機應用程式：**AAPS**

**AAPS** is an app that runs on Android smartphones & devices. 你將依照逐步指南，從 GitHub 下載 **AAPS** 的原始碼，並在你的電腦上安裝必要的程式（如 Android Studio、GitHub Desktop），自行建置屬於自己的 **AAPS** 應用程式（apk 檔）。然後，你將透過電子郵件、USB 線等方式將**AAPS**應用程式傳輸到你的智慧型手機並安裝。

### 2) A reporting server: Nightscout (Tidepool*)

In order to fully take advantage of **AAPS**, you need to set up a Nightscout server. 你可以[自己動手](https://nightscout.github.io/nightscout/new_user/#free-diy)，或者支付小額費用讓[代理的Nightscout服務](https://nightscout.github.io/#nightscout-as-a-service)為你設置。 Nightscout 用於收集**AAPS**隨時間推移的資料，並能夠生成詳細的報告，以關聯 CGM 和胰島素模式。照護者還可以使用 Nightscout 遠端與**AAPS**應用程式通訊，以監控其孩子的糖尿病管理。這些遠端通訊功能包括即時監控血糖和胰島素數值、遠端注射胰島素（透過發送訊息）以及餐點通知。 Attempting to analyze your diabetes performance by looking at CGM data separately from the pump data is like driving a car where the driver is blind and the passenger describes the scene. Tidepool is also available as an alternative to Nightscout.

### 3) CGM 傳感器應用程式

根據你的血糖傳感器/CGM，你將需要一個相容的應用程式來接收血糖資料並將其發送到**AAPS**。以下展示了不同的選項，更多訊息請參閱[相容的 CGM 部分](../Getting-Started/CompatiblesCgms.md)：

![dexcom_options](../images/preparing_images/AAPS_connectivity_Dex_02.png) ![libre_options](../images/preparing_images/AAPSconnectivity_libre.png) ![eversense_options](../images/preparing_images/AAPS_connectivity_eversense.png)

### AAPS 系統的維護

**Nightscout**和**AAPS**必須大約每年更新一次，隨著改進版本的發佈。在某些情況下，更新可以延後，但在其他情況下，更新被強烈建議或視為安全的重要措施。這些更新的通知將在 Facebook 群組和 Discord 伺服器上發佈。發佈說明將明確說明具體情況。在更新時，可能會有許多人與你提出類似問題，你將獲得支援來進行更新。

(preparing-how-long-will-it-take)=
## 設置所有內容需要多長時間？

如前所述，使用**AAPS**更像是一段旅程，需要你投入個人時間。這不是一次性的設置。關於建立建置**AAPS**、安裝和配置**AAPS**和**CGM**軟體，到從開放循環進入混合閉環循環的過程，大約需要 4 到 6 個月。因此建議你優先建立 **AAPS** 應用程式並儘快完成早期目標，即使你仍然在使用其他胰島素輸送系統（你可以使用虛擬幫浦到達目標 5）。

部分目標需要一定的天數以確保你暸解新功能。 It is not possible to bypass this waiting time; these minimum waiting times have been set for your own safety.

以下是大致的時間表：

| 任務                                            |      大致時間      |
| --------------------------------------------- |:--------------:|
| 初步閱讀文件                                        |     1-2 天      |
| Configuring GitHub to allow the browser build |   1-4 hours    |
| 設置報告伺服器                                       |      1 小時      |
| Installing a CGM app (xDrip, BYODA, …)        |      1 小時      |
| Configuring CGM → xDrip → APPS initially      |      1 小時      |
| 初步配置 AAPS → 幫浦                                |      1 小時      |
| 初步配置 AAPS → Nightscout/Tidepool（僅限報告）         |      1 小時      |
| 可選：配置 Nightscout ↔ **AAPS** 及 NSFollowers     |      1 小時      |
| 目標 1：設置可視化和監控                                 |      1 小時      |
| 目標 2：學習如何控制 AAPS                              |      2 小時      |
| 目標 3：證明你的知識                                   |    最多 14 天     |
| 目標 4：開始使用開環                                   |     最少 7 天     |
| 目標 5：暸解你的開環                                   |      7 天       |
| 目標 6：開始閉環（LGS - 低血糖暫停）                        | 最少 5 天，最多 14 天 |
| 目標 7：調整閉環                                     | 最少 1 天，最多 7 天  |
| 目標 8：調整基礎率和比例，啟用 Autosens                     | 最少 7 天，最多 14 天 |
| 目標 9：啟用超微量注射 (SMB)                            |    最少 28 天     |
| 目標 10：自動化                                     |    最少 28 天     |

當你開始使用**AAPS**，你仍然需要定期調整設定，以持續改善你的糖尿病管理。

## 需求

### 醫療考量

除了 [安全部分](#preparing-safety-first) 中的醫療警告外，根據你在幫浦中使用的胰島素類型，還有不同的參數需要考量。

#### 胰島素選擇

**AAPS** 的計算是基於 100U/ml 的胰島素濃度（與幫浦的標準一致）。 You configure your insulin in **Manage → Insulin settings**: set its **Peak** and **DIA**, or use **Load peak from** to fill in the standard peak time of one of the presets:

- **Novorapid** (also for Humalog and NovoLog)
- **Fiasp**
- **Lyumjev**

Advanced users can enter any peak time (35 to 120 minutes) directly, for example for a mixture of insulins. See [Insulin settings](#Config-Builder-insulin).


### 技術性

本文件主要在將技術專業知識的需求降到最低。 To build the **AAPS** app, you have several options — see [Building AAPS](../SettingUpAaps/BuildingAaps.md) for an overview:

- **Browser build** (recommended): build the app directly from your smartphone using GitHub Actions, with no computer or Android Studio required. With [AAPS Builder](../SettingUpAaps/BrowserBuildAapsBuilder.md) you only need a GitHub account: you download the app directly from GitHub. The fork method also needs a Google account to store the app in your Google Drive.
- **Android Studio build**: build the app on your computer using Android Studio. This is mostly used by developers who intend to make code changes.
- **Command-line build**: for users who prefer to build locally without installing Android Studio.

Beyond building the app, you also need to set up a reporting server, configure several Android phone apps and develop expertise in diabetes management. This can be achieved by moving step-by-step, being patient, and with help from the **AAPS** community. If you are already able to navigate the internet and manage your own Gmail emails, building **AAPS** is a feasible task. 只需花點時間。

### 智慧型手機

#### AAPS 與 Android 版本

The current version of **AAPS** (4.0) requires an Android smartphone with Google **Android 12.0 or above**. 如果你正在考慮購買新手機（截至 2026 年 1 月），建議優先選擇 Android 16。<br/> 基於安全因素，強烈建議使用者保持他們的 **AAPS** 建置為最新版本。然而，對於無法使用 Android 12.0 或更新版本的使用者，早期版本的 **AAPS** 仍然可與舊版 Android 相容，詳情請見： [版本說明](#maintenance-android-version-aaps-version)。

#### 智慧型手機型號選擇
你選購的具體型號取決於所需的功能。你可以在 [手機頁面](../Getting-Started/Phones.md) 上找到推薦與用戶對於可用設置的反饋。

我們鼓勵用戶保持手機 Android 版本的最新狀態，包括安全參數。然而，如果你是 **AAPS** 的新手，或者不是技術專家，你可能希望等到其他人確認更新是安全的後再進行更新，這可以透過我們的各大論壇確認。

```{admonition} Delaying Samsung phone updates
:class: warning
Samsung has an unfortunate track record of forcing updates on their phones, which can cause Bluetooth connectivity issues. To disable these forced updates, you need to switch the phone to "developer mode":

1. Go to **Settings** > **About phone** > **Software information**, then tap **Build number** until it confirms you have unlocked developer mode.
2. Go back to the main **Settings** menu, where you should see a new **Developer options** menu item.
3. Open **Developer options**, scroll to find **Auto system update**, and turn it off.
```

```{admonition} Google Play Protect potential issue
:class: warning
每個早晨都有幾份報告指出 **AAPS** 被 Google Play Protect 任意關閉。 If this happens, you will have to go to the Google Play options and disable **Google Play Protect**. Not all phone models or all Android versions are affected.
```

```{admonition} Android developer verification
:class: note
From September 2026, Google is gradually introducing [Android developer verification](#android-developer-verification), which changes how a self-built app is installed on the phone. Building **AAPS** is not affected, and free installation methods remain available — see the linked page for details.
```

