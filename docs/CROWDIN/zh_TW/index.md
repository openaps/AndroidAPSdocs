# 歡迎來到 AAPS 文件指南

![圖像](./images/basic-outline-of-AAPS.png)

Android APS (**AAPS**) 是一款開源應用程式，專為胰島素依賴型的糖尿病患者所設計。 這是一個人工胰臟系統 (APS)，可以在 Android 智慧型手機上運作。 **AAPS**使用開源的 openAPS 軟體演算法，主要在模擬真實胰臟的功能：透過自動調控胰島素劑量來保持血糖水平在健康範圍內。 要使用**AAPS**，你需要**三種**相容設備：一台Android手機、一個經 FDA/CE 認證的胰島素幫浦，以及一個連續血糖監測儀（CGM）。

本文件將詳細說明如何設置和使用**AAPS**。 你可以透過左側的選單（以及“**搜尋文件**”功能）或使用頁面底部的[索引](#aaps-documentation-index)瀏覽**AAPS**文件。

## AAPS 文件總覽("簡稱本文件")

第二章節）“入門”，[介紹](Getting-Started/Introduction.md) 解釋了人工胰臟系統 (APS) 的一般概念。 本文件概述了循環系統的背景，為何開發**AAPS** ，並比較了**AAPS** 與其他系統，同時也討論了安全性問題。 他提供了如何與你的醫療團隊討論 **AAPS**的建議，解釋了為什麼你需要自行建置**AAPS** 應用程式，而不是直接下載，並概述了典型的**AAPS** 系統連接性。 他還討論了無障礙設計，並指出誰最有可能從**AAPS** 中受益。

[Preparing for AAPS](./Getting-Started/PreparingForAaps.md) gives more detail about safety considerations, and the phones, CGMs (Continuous Glucose Monitors) and insulin pumps which are compatible with **AAPS**. 他描述了你將經歷的過程，並提供了獲得完整**AAPS** 功能的大致時間表。 本節將幫助在技術上作好準備，會以最快、最有效率的方式設置你的**AAPS** 。 The subsection [CGM Configuration](./Getting-Started/CompatiblesCgms.md) explains how to optimse CGM setup and what smoothing options are best.

現在你已經對過程有了深入的了解，可以開始建置你的**AAPS** 循環系統了。 本章節 **三) 設置 AAPS** 包含逐步指導來進行此操作。 It covers choosing and [setting up your reporting server](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout or Tidepool) so you can review and share your data, getting your computer ready for building the AAPS app, building the AAPS app and transferring the AAPS app to your phone. 他還涵蓋了使用設置嚮導來設定 **AAPS** 應用程式，與你的 CGM 應用程式連結，並與實體或虛擬胰島素幫浦連結，以及將 **AAPS** 連結到你的報告伺服器。 你將透過一個安全且經過精心設計的逐步流程，慢慢了解**AAPS**所提供的全部功能。此流程主要在確保你或你的孩子能夠充分熟悉，並能操作所有不同的層級和選單配置，然後再進入下一階段，通常稱為下一個「目標」，直到你累積足夠的經驗，再開始使用應用程式內更進階的選項。 這些目標被特別設計為逐步解鎖更多 **AAPS** 的可能性，並從開環轉為閉環。

第四章節）[遠端 AAPS 功能](remote-control.md) 突顯了 **AAPS** 的一個真正強項。 這對於希望遠端發送指令給予，或者只是追踪來自 **AAPS** 的資料來說非常實用。 這對於希望為未成年人使用 **AAPS** 的照護者，以及患有糖尿病的成人同樣實用。成人可以更方便地監控血糖（以及其他指標），不僅限於手機上（例如手錶、車內等），也可以讓重要他人一同監控資料。 本節還提供了使用 Android Auto 的指導，讓你能夠在車內查看血糖水平。

第五章節）**AAPS 的日常生活** 涵蓋了 **AAPS** 的關鍵功能，幫助你使用（並自定義）**AAPS**。 包括暸解各個畫面、碳水化合物計算、敏感度、設定檔切換、臨時目標、延展碳水化合物（或 eCarbs）、自動化和 動態ISF。 此外，還涵蓋了如何處理不同類型的餐食、更換套管和傳感器、手機更新、夏令時間更改、[與 AAPS 一起旅行](Usage/Timezone-traveling.md) 和運動等常見問題與解答。 常見問題和答案位於問題排除部分。


第六章節）**AAPS 的維護** 涵蓋了如何匯出和備份你的設置（這非常重要，以防你的手機遺失或損壞），提供了最新版本的說明，並詳細說明了如何更新 **AAPS**。 你可以預期每年會有一個新版本和 2-3 次強制更新。 你需要像其他軟體一樣進行這些更新，以解決小錯誤並改進**AAPS** 。 有一個專門的“更新”問題排除部分，解答常見問題。

**第七章節）[獲得協助](Where-To-Go-For-Help/Connect-with-other-users.md) **應該可以幫助你找到獲取 **AAPS** 一般幫助的最佳途徑。 這非常重要，讓你能夠快速與其他用戶取得聯繫，澄清問題並解決常見的困難。 很多人已成功使用 **AAPS**，但每個人都有自己無法獨立解決的問題。 由於用戶眾多，問題的回應時間通常非常快，通常僅需幾個小時。 不要擔心尋求幫助，更不用擔心愚蠢的問題！ 我們鼓勵任何新手/老手用戶提出他們認為有必要的所有問題，以幫助他們安全啟動並運作。 本節還包含 **AAPS** 和 **AAPSClient**（追蹤應用程式）的一般問題排除指南，如果你認為 **AAPS** 出現技術問題需要處理，本節也說明了如何將你的 **AAPS** 資料（日誌文件）發送給開發者進行調查，。

第八章節）有用的 **AAPS** 連線，供快速參考。 這包括[詞彙表](Getting-Started/Glossary.md)，他列出了**AAPS** 中使用的首字母縮寫或短名稱。 這是查找 ISF 或 TT 等術語的地方。 此部分還包含實用的螢幕截圖和其他資料的連線。

第九章節）涵蓋了高級AAPS選項，例如如何從使用AAPS進展到混合閉環（為餐飲等進行注射）到完全閉環（不進行手動注射），並詳細介紹了開發和工程模式。 大多數使用者只需使用主要或"Master" **AAPS**版本即可正常操作，無須查看這些選項；本節給那些已經控制良好並希望進一步改善其設置的使用者。

第十章節）[如何支援 AAPS](make-a-PR.md) 提供了關於如何支援此項目的資訊。 你可以捐錢、設備或專業知識。 你可以建議/自行更改文檔，幫助 [翻譯文檔](translations.md)，並透過 Open Humans 項目提供你的資料。

第 11 章節）包含保存或其他文件，包括一個針對已表達對開放原始碼人工胰臟技術（如 **AAPS**）感興趣的 [臨床醫師](Resources/clinician-guide-to-AndroidAPS.md) ，或對想與臨床醫生分享此類訊息的患者，該主題也在介紹中說明。 第 12 節）包含更多糖尿病和循環的參考資料和資源。


 ### 有興趣開始使用 **AAPS** 嗎？ 在 [介紹](Getting-Started/Introduction.md) 中閱讀更多關於 **AAPS** 的資訊。

```{admonition} SAFETY NOTICE
:class: danger
**AAPS** 的安全性依賴於你硬體（電話、幫浦、CGM）的安全功能。 請只使用經過 FDA/CE 認證的全功能胰島素幫浦和 CGM。 不使用故障、改裝或自行組裝的胰島素幫浦或 CGM 接收器。 僅使用由製造商批准並與幫浦和 CGM 搭配使用的原裝耗材（如注射器、套管和胰島素儲存罐）。 使用未經測試或修改的耗材可能會導致資料不準確和胰島素注射錯誤，從而對使用者造成重大風險。 

如果你正在服用 SGLT-2 抑制劑（gliflozins），請勿使用 **AAPS**，因為這會降低血糖水平。 由於胰島素供應減少，會增加罹患糖尿病酮酸中毒（DKA）的風險，而血糖下降則會提高低血糖的風險。 
```

```{admonition} Disclaimer
:class: note

- 此處描述的所有信息和代碼僅供參考和教育目的使用。 使用 [Nightscout](https://nightscout.github.io/) 和 **AAPS** 需自行承擔風險，並且不應使用該信息或代碼來做出醫療決策。 Nightscout目前不符合HIPAA的隱私規定。 
- 從 github.com 使用的代碼不提供任何保證或正式支援。 請檢視此儲存庫的許可證( LICENSE) 以暸解詳細資訊。
- 所有產品和公司名稱、商標、服務標記、註冊商標和註冊服務標記均為其各自持有者的財產。 他們的使用僅供資訊用途，沒有任何關聯或背書。

**AAPS** 與以下組織無任何關聯，也不受其支持：[SOOIL](http://www.sooil.com/eng/)、[Dexcom](https://www.dexcom.com/)、[Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/)、[Insulet](https://www.insulet.com/) 或 [Medtronic](https://www.medtronic.com/).

```

(AAPS-Documentation-Index)=

## AAPS文件索引

```{toctree}
:caption: 1) Change language

Change language <./ChangeLanguage/ChangeLanguage.md>
```
```{toctree}
:caption: 2) Getting started

Introduction to AAPS <./Getting-Started/Introduction.md>
Preparing for AAPS <./Getting-Started/PreparingForAaps.md>
Compatible pumps <./Getting-Started/CompatiblePumps.md>
Compatible CGMs <./Getting-Started/CompatiblesCgms.md>
Compatible phones  <./Getting-Started/Phones.md>
```

```{toctree}
:caption: 3) Setting up AAPS

Setting up the reporting server <./SettingUpAaps/SettingUpTheReportingServer.md>
Building AAPS <./SettingUpAaps/BuildingAaps.md>
Transferring and Installing AAPS <./SettingUpAaps/TransferringAndInstallingAaps.md>
Setup Wizard<./SettingUpAaps/SetupWizard.md>
Change AAPS configuration <./SettingUpAaps/ChangeAapsConfiguration.md>
- Config Builder <./SettingUpAaps/ConfigBuilder.md>
- Preferences <./SettingUpAaps/Preferences.md>
Completing the objectives <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 4) 遠端 AAPS 功能

遠端控制 <remote-control.md>
僅查看 <following-only.md>
Android Auto <./Usage/Android-auto.md>

```

```{toctree}
:caption: 5) APPS的日常使用

AAPS螢幕 <./Getting-Started/Screenshots.md>
AAPS的主要功能 <./Usage/Open-APS-features.md>
COB 計算 <./Usage/COB-calculation.md>
敏感度偵測 <./Configuration/Sensitivity-detection-and-COB.md>
設定檔切換 <./Usage/Profiles.md>
臨時目標 <./Usage/temptarget.md>
延長碳水化合物 <./Usage/Extended-Carbs.md>
自動化 <./Usage/Automation.md>
動態 ISF <./Usage/DynamicISF.md>
餐點管理
幫浦和針管 <./5-DailyLifewithAAPS/DailyLife-PUMPS.md>
傳感器
手機
夏令時間變更
與AAPS旅行
跨時區與幫浦旅行 <./Usage/Timezone-traveling.md>

```

```{toctree}
:caption: 6) 維護 AAPS

備份你的設置
匯出/匯入設置 <./Usage/ExportImportSettings.md>
檢視你的資料
版本發行說明 <./Installing-AndroidAPS/Releasenotes.md>
升級至 AAPS 的新版本 <./Installing-AndroidAPS/Update-to-new-version.md>


```

```{toctree}
:caption: 7) 獲得幫助

在哪裡可以得到有關 AAPS 的幫助 <./Where-To-Go-For-Help/Connect-with-other-users.md>
常見問題排除 <./Usage/troubleshooting.md>
問題排除 AAPSClient <./Usage/Troubleshooting-NSClient.md>
如何報告錯誤/請求功能
存取日誌檔案 <./Usage/Accessing-logfiles.md>
幫助! 我的AAPS手機損壞/被偷/丟失
```

```{toctree}
:caption: 8) Useful AAPS Links

Glossary <./Getting-Started/Glossary.md>
AAPS Screens <./Getting-Started/Screenshots.md>
Your AAPS profile 
Accu-Chek Combo tips for basic usage <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>
Operation of Wear AAPS on a Smartwatch <./Configuration/Watchfaces.md>
How to customise your AAPS watchface <./Usage/Custom_Watchface_Reference.md>
xDrip Settings <./CompatibleCgms/xDrip.md>
Autotune <./Usage/autotune.md>

```

```{toctree}
:caption: 9) Advanced AAPS options

全閉環 <./Usage/FullClosedLoop.md>
開發分支 <./Installing-AndroidAPS/Dev_branch.md>
xDrip工程模式 <./Usage/Enabling-Engineering-Mode-in-xDrip.md>

```
```{toctree}
:caption: 10) 如何支援AAPS

如何幫助<./Getting-Started/How-can-I-help.md>

如何編輯文檔<./make-a-PR.md>

如何翻譯應用程式和文檔<./translations.md>

翻譯狀態<./Administration/stateTranslations.md>

文檔更新和變更<./Getting-Started/WikiUpdate.md>

Open Humans 上傳程式<./Configuration/OpenHumans.md>

```

```{toctree}
:caption: 11) Additional/archive documentation

Dedicated Google account for AAPS (optional)<./SettingUpAaps/DedicatedGoogleAccountForAaps.md>

Careportal (discontinued) <./Usage/CPbefore26.md>

For Clinicians (outdated) <./Resources/clinician-guide-to-AndroidAPS.md>

Automation with 3rd party apps <./Usage/automationwithapp.md>

Checks after update to AAPS 3.0<./Installing-AndroidAPS/update3_0.md>

Checks after update to AAPS 2.7 <./Installing-AndroidAPS/update2_7.md>

```

```{toctree}
:caption: 12) 參考資料

一般糖尿病和循環資源 <./Where-To-Go-For-Help/Background-reading.md>
AAPS 相關的科學期刊文章
```

```{toctree}
:caption: 13) 沙箱

沙箱 <./Sandbox/sandbox1.md>
Crowdin 測試 <./Sandbox/crowdintest.md>
圖像縮放 <./Sandbox/imagescaling.md>

```
