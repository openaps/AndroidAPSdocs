# 歡迎來到 AAPS 文件指南

![圖像](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

 2026 年 10 月 31 日：4.0.0 版已推出。請參閱 [版本公告](#latestrelease) 以瞭解最新變更，並依照 [更新手冊](./Maintenance/UpdateToNewVersion.md) 的指示進行更新。

```

Android APS (**AAPS**) 是一款開源應用程式，專為胰島素依賴型的糖尿病患者所設計。這是一個人工胰臟系統 (APS)，可以在 Android 智慧型手機上運作。 **AAPS**使用OpenAPS軟體算法，旨在執行真正胰臟的功能：通過自動化胰島素劑量控制血糖水平保持在健康範圍內。若要使用 **AAPS**，您需要三種相容裝置：**(1)** 一支 Android 手機、**(2)** 一台連續血糖監測器（CGM），以及 **(3)** 一台經 FDA／CE 核准的胰島素幫浦。您也可以加入 **(4)** 雲端服務，以遠端控制 **AAPS**、分享資料，並將資料儲存在報表伺服器上；此外，還可以加入 **(5)** 一支智慧型手錶。

本文件說明如何設定及使用 **AAPS**。您可以透過左側選單（以及方便實用的 **搜尋文件**功能）瀏覽 **AAPS** 文件，也可以使用本頁底部的[索引](#index-aaps-documentation-index)。

## AAPS 文件總覽("簡稱本文件")

第**1)**節入門部分，[介紹](Getting-Started/Introduction.md)解釋了人工胰臟系統（APS）設計的基本概念。本文件概述了循環系統的背景，為何開發**AAPS** ，並比較了**AAPS** 與其他系統，同時也討論了安全性問題。他提供了如何與你的醫療團隊討論 **AAPS**的建議，解釋了為什麼你需要自行建置**AAPS** 應用程式，而不是直接下載，並概述了典型的**AAPS** 系統連接性。他還討論了無障礙設計，並指出誰最有可能從**AAPS** 中受益。

[準備 AAPS](./Getting-Started/PreparingForAaps.md)章節提供了更多有關安全考量的詳細資訊，以及相容**AAPS**的手機、CGM（連續血糖監測儀）和胰島素幫浦的相關訊息。他描述了你將經歷的過程，並提供了獲得完整**AAPS** 功能的大致時間表。本節將幫助在技術上作好準備，會以最快、最有效率的方式設置你的**AAPS** 。子章節[CGM 設定](./Getting-Started/CompatiblesCgms.md)說明如何調整 CGM 設定，以及哪些平滑選項最適合您。

現在你已經對過程有了深入的了解，可以開始建置你的**AAPS** 循環系統了。

第 **2) 建置應用程式**節說明為什麼需要自行建置 **AAPS** 應用程式，而不是直接下載，並逐步引導您[建置應用程式](./SettingUpAaps/BuildingAaps.md)（可使用瀏覽器、Android Studio 或命令列），接著將應用程式傳送並安裝到手機上。本節從一個選擇性的步驟開始：設定[專用的 Google 帳號](./UsefulLinks/DedicatedGoogleAccountForAaps.md)，用來存放您建置的應用程式和備份。本節也會說明[Android 開發人員驗證](#android-developer-verification)。Google 將於 2026 年 9 月起推出這項變更，並影響自行建置的應用程式如何安裝。

第 **3) 設定報表伺服器**節會說明如何選擇並[設定報表伺服器](./SettingUpAaps/SettingUpTheReportingServer.md)（Nightscout 或 Tidepool），方便您查看及分享資料。

第 **4) [設定 AAPS](./SettingUpAaps/SetupWizard.md)**節會說明如何使用設定嚮導設定 **AAPS** 應用程式、將其連結至 CGM 應用程式及實體或虛擬胰島素幫浦，並將 **AAPS** 連結至報表伺服器。接著，您會透過安全且循序漸進的步驟，逐步認識 **AAPS** 的各項功能。這能確保您（或您的孩子）在進入下一個階段前，已充分熟悉各種層級和選單設定，並能自在地操作。下一個階段通常稱為下一個「目標」。您會依照這種方式逐步進行，直到累積足夠經驗，開始使用應用程式中較進階的選項。這些目標被特別設計為逐步解鎖更多 **AAPS** 的可能性，並從開環轉為閉環。

第 **5) [AAPS 的日常使用](./DailyLifeWithAaps/AapsScreens.md)**節介紹 **AAPS** 的重要功能，協助您使用（並自訂）**AAPS**。內容包括了解各個畫面、體內碳水化合物、敏感度、DynamicISF、設定檔切換、臨時目標、延長碳水化合物（或 eCarbs）、自動化，以及在歷史記錄瀏覽器和統計資料中[查看資料](./Maintenance/Reviewing.md)。本節也會介紹常見主題，例如如何管理不同類型的餐點、如何處理套管和感測器更換、智慧型手機更新、日光節約時間變更、[使用 AAPS 旅行](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md)，以及運動。常見問題和答案位於問題排除部分。

第**6)**節[遠端AAPS功能](./RemoteFeatures/RemoteControl.md)</strong>突顯了**AAPS**的實際優勢。這對於希望遠端發送指令給予，或者只是追踪來自 **AAPS** 的資料來說非常實用。這對於希望為未成年人使用 **AAPS** 的照護者，以及患有糖尿病的成人同樣實用。成人可以更方便地監控血糖（以及其他指標），不僅限於手機上（例如手錶、車內等），也可以讓重要他人一同監控資料。本節還提供了使用 Android Auto 的指導，讓你能夠在車內查看血糖數值。

第 **7) [Wear OS 智慧型手錶](./WearOS/BuildingAapsWearOS.md)**節介紹如何搭配專用 **AAPS** 錶盤或自訂錶盤，使用 Android **Wear OS** 智慧型手錶。手錶可作為手機的遠端控制器，也可以只用來顯示資訊。


第 **8) [維護 AAPS](./Maintenance/ExportImportSettings.md)**節說明如何匯出及備份設定（若手機遺失或損壞，這一點非常重要），提供最新版本資訊，詳細介紹如何更新 **AAPS**，並說明版本終止支援時會發生什麼情況。你可以預期每年會有一個新版本和 2-3 次強制更新。你需要像其他軟體一樣進行這些更新，以解決小錯誤並改進**AAPS** 。有一個專門的“更新”問題排除部分，解答常見問題。

第 **9) [協助與疑難排解](GettingHelp/WhereCanIGetHelp.md)**節會指引您前往最適合的地方，尋找 **AAPS** 一般問題的協助。遇到問題時，這裡是您最該前往的地方：[疑難排解](GettingHelp/GeneralTroubleshooting.md)中心依主題整理了常見問題的解決方法，而[常見問題](UsefulLinks/FAQ.md)則解答了經常有人提出的問題。這非常重要，讓你能夠快速與其他用戶取得聯繫，澄清問題並解決常見的困難。很多人已成功使用 **AAPS**，但每個人都有自己無法獨立解決的問題。由於用戶眾多，問題的回應時間通常非常快，通常僅需幾個小時。不要擔心尋求幫助，更不用擔心愚蠢的問題！我們鼓勵任何新手/老手用戶提出他們認為有必要的所有問題，以幫助他們安全啟動並運作。本節還包含 **AAPS** 和 **AAPSClient**（追蹤應用程式）的一般問題排除指南，如果你認為 **AAPS** 出現技術問題需要處理，本節也說明了如何將你的 **AAPS** 資料（日誌文件）發送給開發者進行調查，。

第 **10)** 節介紹 **[AAPS 進階選項](./AdvancedOptions/FullClosedLoop.md)**，例如如何從使用 **AAPS** 進行混合式閉環（用餐時注射 _等_）進階到全閉環（不需注射）、如何[調整設定檔](./GettingHelp/ProfileTuning.md)並使用 Autotune，以及開發和工程模式的相關資訊。大多數使用者只需使用主要或"Master" **AAPS**版本即可正常操作，無須查看這些選項；本節給那些已經控制良好並希望進一步改善其設置的使用者。

第 **11) [如何支援 AAPS](SupportingAaps/HowToEditTheDocs.md)**節提供相關資訊，讓您了解如何支援這個專案。你可以捐錢、設備或專業知識。你可以建議/自行更改文件，幫助 [翻譯文件](SupportingAaps/Translations)，並透過 Open Humans 項目提供你的資料。

第**12)**節資源，包含已存檔的或附加的文件，包括[對AAPS感興趣的臨床醫生](UsefulLinks/ClinicianGuideToAaps.md)的小節，或對那些希望與其臨床醫生分享此信息的患者，此主題也在介紹中提及。本節還包含更多糖尿病和閉環的參考資料和資源。本節包含[詞彙表](./UsefulLinks/Glossary.md)，列出 **AAPS** 文件中使用的縮寫（或簡稱）。這是查找 ISF 或 TT 等術語的地方。


 ### 有興趣開始使用 **AAPS** 嗎？在 [介紹](Getting-Started/Introduction.md) 中閱讀更多關於 **AAPS** 的資訊。

```{admonition} SAFETY NOTICE
:class: danger
**AAPS** 的安全性依賴於你硬體（電話、幫浦、CGM）的安全功能。請只使用經過 FDA/CE 認證的全功能胰島素幫浦和 CGM。不使用故障、改裝或自行組裝的胰島素幫浦或 CGM 接收器。僅使用由製造商批准並與幫浦和 CGM 搭配使用的原裝耗材（如注射器、套管和胰島素儲存罐）。使用未經測試或修改的耗材可能會導致資料不準確和胰島素注射錯誤，從而對使用者造成重大風險。 

如果你正在服用 SGLT-2 抑制劑（gliflozins），請勿使用 **AAPS**，因為這會降低血糖數值。胰島素輸送量減少會提高糖尿病酮酸中毒（DKA）的風險，而血糖降低則會提高低血糖的風險。 
```

```{admonition} Disclaimer
:class: note

- 此處描述的所有訊息和代碼僅供參考和教育目的使用。使用 [Nightscout](https://nightscout.github.io/) 和 **AAPS** 需自行承擔風險，並且不應使用該訊息或代碼來做出醫療決策。 Nightscout目前不符合HIPAA的隱私規定。 
- 從 github.com 使用的代碼不提供任何保證或正式支援。請檢視此儲存庫的許可證( LICENSE) 以暸解詳細資訊。
- 所有產品和公司名稱、商標、服務標記、註冊商標和註冊服務標記均為其各自持有者的財產。他們的使用僅供資訊用途，沒有任何關聯或背書。

**AAPS** 與以下公司或產品沒有任何關聯，也未獲得其認可：[SOOIL](http://www.sooil.com/eng/)、[Dexcom](https://www.dexcom.com/)、[Accu-Chek、Roche Diabetes Care](https://www.accu-chek.com/)、[Insulet](https://www.insulet.com/)、[Medtronic](https://www.medtronic.com/)、[Diaconn](https://www.diaconn.com/en/index.html)、[EOFlow](http://www.eoflow.com/)、[MicroTech Medical (Equil)](https://www.microtechmd.com/)、[Medtrum](https://www.medtrum.com/)、[Senseonics (Eversense)](https://www.senseonics.com/)、[i-SENS (CareSens)](https://i-sens.com/)、[POCTech](https://poctechcorp.com/en/)、[Ottai](https://ottai.com/) 或 [Syai](https://www.syai.com/)。

```

(index-aaps-documentation-index)=

## AAPS文件索引

```{toctree}
:caption: 使用本文件

變更語系和版本 <./NavigateDoc/ChangeLanguageVersion.md>
搜尋文件 <./NavigateDoc/SearchDoc.md>
文件更新 <./Maintenance/DocumentationUpdate.md>
```
```{toctree}
:caption: 1) 開始使用

AAPS 簡介 <./Getting-Started/Introduction.md>
使用 AAPS 前的準備 <./Getting-Started/PreparingForAaps.md>
元件總覽 <./Getting-Started/ComponentOverview.md>
- 相容的幫浦 <./Getting-Started/CompatiblePumps.md>
- 相容的 CGM <./Getting-Started/CompatiblesCgms.md>
- 相容的手機  <./Getting-Started/Phones.md>
- 相容的手錶  <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 2) 建置應用程式

AAPS 專用 Google 帳號（選用） <./UsefulLinks/DedicatedGoogleAccountForAaps.md>
建置 AAPS <./SettingUpAaps/BuildingAaps.md>
- 瀏覽器建置 <./SettingUpAaps/BrowserBuild.md>
- Android Studio 建置 <./SettingUpAaps/ComputerBuild.md>
- CLI 建置 <./SettingUpAaps/CLIBuild.md>
傳送並安裝 AAPS <./SettingUpAaps/TransferringAndInstallingAaps.md>
```
```{toctree}
:caption: 3) 設定報表伺服器

設定報表伺服器 <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
```
```{toctree}
:caption: 4) Configure AAPS

Setup Wizard <./SettingUpAaps/SetupWizard.md>
Your AAPS Profile <./SettingUpAaps/YourAapsProfile.md>
Change AAPS configuration <./SettingUpAaps/ChangeAapsConfiguration.md>
- Configuration (Config Builder) <./SettingUpAaps/ConfigBuilder.md>
- Settings <./SettingUpAaps/Preferences.md>
Completing the objectives <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 5) AAPS 的日常使用

AAPS 畫面 <./DailyLifeWithAaps/AapsScreens.md>
AAPS 重要功能 <./DailyLifeWithAaps/KeyAapsFeatures.md>
COB 計算 <./DailyLifeWithAaps/CobCalculation.md>
敏感度偵測 <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
Dynamic ISF <./DailyLifeWithAaps/DynamicISF.md>
設定檔切換與設定檔百分比 <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
臨時目標 <./DailyLifeWithAaps/TempTargets.md>
延長碳水化合物 <./DailyLifeWithAaps/ExtendedCarbs.md>
QuickWizards <./DailyLifeWithAaps/QuickWizards.md>
場景 <./DailyLifeWithAaps/Scenes.md>
自動化 <./DailyLifeWithAaps/Automations.md>
快速啟動工具列 <./DailyLifeWithAaps/QuickLaunch.md>
主畫面小工具 <./DailyLifeWithAaps/Widgets.md>
食物資料庫 <./DailyLifeWithAaps/Food.md>
全域搜尋 <./DailyLifeWithAaps/GlobalSearch.md>
查看資料 <./Maintenance/Reviewing.md>
兒童使用 AAPS <./DailyLifeWithAaps/AapsForChildren.md>
幫浦與套管 <./DailyLifeWithAaps/PumpsAndCannulas.md>
時區旅行與日光節約時間 <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 6) AAPS 遠端功能

遠端監控 <./RemoteFeatures/RemoteMonitoring.md>
僅追蹤 <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>
遠端控制 <./RemoteFeatures/RemoteControl.md>
AAPSClient 應用程式 <./RemoteFeatures/AapsClient.md>
主控端 ↔ 用戶端控制 <./RemoteFeatures/ClientMasterControl.md>
簡訊指令 <./RemoteFeatures/SMSCommands.md>

```
```{toctree}
:caption: 7) Wear OS 智慧型手錶

Wear OS 版 AAPS <./WearOS/BuildingAapsWearOS.md>
使用智慧型手錶 <./WearOS/WearOsSmartwatch.md>
遠端控制 <./RemoteFeatures/RemoteControlWearOS.md>
自訂錶盤參考資料 <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Exchange 網站上的自訂錶盤 <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 8) Maintenance of AAPS

Export/Import Settings <./Maintenance/ExportImportSettings.md>
AAPS Release Notes <./Maintenance/ReleaseNotes.md>
What changed in AAPS v4 <./Maintenance/V4Changes.md>
Updating to a new version of AAPS <./Maintenance/UpdateToNewVersion.md>
- Browser Update (fork, AAPS-CI) <./Maintenance/UpdateBrowserBuild.md>
- Android Studio Update <./Maintenance/UpdateComputerBuild.md>
End of life <./Maintenance/EndOfLife.md>

```

```{toctree}
:caption: 9) 協助與疑難排解

哪裡可以取得 AAPS 協助 <./GettingHelp/WhereCanIGetHelp.md>
疑難排解（從這裡開始） <./GettingHelp/GeneralTroubleshooting.md>
- 藍牙疑難排解 <./GettingHelp/BluetoothTroubleshooting.md>
- NSClient 疑難排解 <./GettingHelp/TroubleshootingNsClient.md>
- Android Studio 疑難排解 <./GettingHelp/TroubleshootingAndroidStudio.md>
- 瀏覽器建置疑難排解 <./GettingHelp/BrowserBuildTroubleshooting.md>
- 重新安裝 AAPS（使用新的金鑰庫） <./GettingHelp/ReinstallAaps.md>
- 查看記錄檔 <./GettingHelp/AccessingLogFiles.md>
常見問題 <./UsefulLinks/FAQ.md>
```

```{toctree}
:caption: 10) AAPS 進階選項

全閉環 <./AdvancedOptions/FullClosedLoop.md>
設定檔調整指南 <./GettingHelp/ProfileTuning.md>
Autotune <./AdvancedOptions/Autotune.md>
胰島素濃度 <./AdvancedOptions/InsulinConcentration.md>
開發分支 <./AdvancedOptions/DevBranch.md>
瀏覽器建置：挑選特定提交 <./AdvancedOptions/BrowserBuildCherryPick.md>

```
```{toctree}
:caption: 11) 如何支援 AAPS

如何協助 <./SupportingAaps/HowCanIHelp.md>
編輯文件 <./SupportingAaps/HowToEditTheDocs.md>
翻譯應用程式和文件 <./SupportingAaps/Translations.md>
翻譯狀態 <./SupportingAaps/StateOfTranslations.md>
Open Humans 上傳工具 <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 12) 資源

詞彙表 <./UsefulLinks/Glossary.md>
糖尿病與循環治療的一般參考資源 <./UsefulLinks/BackgroundReading.md>
提供臨床醫療人員 <./UsefulLinks/ClinicianGuideToAaps.md>
```
