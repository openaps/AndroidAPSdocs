# 歡迎來到 AAPS 文件指南

![圖像](./images/basic-outline-of-AAPS.png)

Android APS (**AAPS**) 是一款為胰島素依賴型糖尿病患者設計的開源應用程式。 這是一個人工胰臟系統 (APS)，可以在 Android 智慧型手機上運作。 **AAPS**使用開源的 openAPS 軟體演算法，旨在模擬真實胰臟的功能：透過自動調控胰島素劑量來保持血糖水平在健康範圍內。 要使用**AAPS**，你需要**三種**相容設備：一台Android手機、一個經 FDA/CE 認證的胰島素幫浦，以及一個連續血糖監測儀（CGM）。

本文件將詳細說明如何設置和使用**AAPS**。 你可以透過左側的選單（以及方便的“**搜尋文件**”功能）或使用頁面底部的[索引](Index-of-the-AAPS-Documentation.md)瀏覽**AAPS**文件。

## AAPS 文件總覽("簡稱本文件")

第二章節）“入門”，[介紹](introduction.md) 解釋了人工胰臟系統 (APS) 的一般概念。 本文件概述了循環系統的背景，為何開發**AAPS** ，並比較了**AAPS** 與其他系統，同時也討論了安全性問題。 它提供了如何與你的醫療團隊討論 **AAPS**的建議，解釋了為什麼你需要自行建置**AAPS** 應用程式，而不是直接下載，並概述了典型的**AAPS** 系統連接性。 它還討論了無障礙設計，並指出誰最有可能從**AAPS** 中受益。

[準備](preparing.md)提供了更多有關安全考量的詳細資訊，以及與<0>AAPS</0> 相容的手機、CGM（連續血糖監測儀）和胰島素幫浦的相關訊息。 它概述了你將經歷的過程，並提供了獲得完整**AAPS** 功能的大致時間表。 本節將幫助你以最快且最有效率的方式準備技術上設置你的**AAPS** 。 [CGM 配置](Configuration/BG-Source.md)子章節解釋了如何優化CGM設置及最佳的平滑選項。

現在你已經對過程有了深入的了解，可以開始構建你的**AAPS** 循環系統了。 本章節 **三) 設置 AAPS** 包含逐步指導來進行此操作。 它涵蓋了選擇和 [設置你的報告伺服器](setting-up-the-reporting-server.md)（Nightscout 或 Tidepool），以便你可以檢視和分享你的資料，準備電腦來構建 AAPS 應用程式，構建 AAPS 應用程式並便其傳輸到你的手機。 它還涵蓋了使用設置嚮導來設定 **AAPS** 應用程式，將其與你的 CGM 應用程式連結，並與實體或虛擬胰島素幫浦連結，以及將 **AAPS** 連結到你的報告伺服器。 接下來，你將透過一個安全且經過精心校準的分步過程，逐漸熟悉並全面使用 **AAPS** 的功能。該過程旨在確保你/你的孩子對各種層級和選單配置充分了解並感到舒適，然後再進入下一階段，通常稱為下一個"目標"，直到你擁有足夠的經驗以開始使用應用程式中更高級的選項。 這些目標被特別設計為逐步解鎖更多 **AAPS** 的可能性，並從開環轉為閉環。

第四章節）[遠端 AAPS 功能](remote-control.md) 突顯了 **AAPS** 的一個真正強項。 這對於希望遠端發送指令給予，或者只是追踪來自 **AAPS** 的資料來說非常實用。 這對於希望為未成年人使用 **AAPS** 的照護者，以及患有糖尿病的成人同樣實用。成人可以更方便地監控血糖（以及其他指標），不僅限於手機上（例如手錶、車內等），也可以讓重要他人一同監控資料。 本節還提供了使用 Android Auto 的指導，讓你能夠在車內查看血糖水平。

第五章節）**AAPS 的日常生活** 涵蓋了 **AAPS** 的關鍵功能，幫助你使用（並自定義）**AAPS**。 包括理解各個畫面、碳水化合物計算、靈敏度、配置切換、臨時目標、延展碳水化合物（或 eCarbs）、自動化和 動態ISF。 此外，還涵蓋了如何處理不同類型的餐食、更換套管和傳感器、手機更新、夏令時間更改、[與 AAPS 一起旅行](Usage/Timezone-traveling.md) 和運動等常見問題與解答。 常見問題和答案位於疑難排除部分。


第六章節）**AAPS 的維護** 涵蓋了如何匯出和備份你的設置（這非常重要，以防你的手機遺失或損壞），提供了最新版本的說明，並詳細說明了如何更新 **AAPS**。 你可以預期每年會有一個新版本和 2-3 次強制更新。 你需要像其他軟體一樣進行這些更新，以解決小錯誤並改進**AAPS** 。 有一個專門的“更新”疑難排解部分，解答常見問題。

第七章節）[獲取幫助](Where-To-Go-For-Help/Connect-with-other-users.html) 應該可以幫助你找到獲取 **AAPS** 一般幫助的最佳途徑。 這非常重要，讓你能夠快速與其他用戶取得聯繫，澄清問題並解決常見的困難。 很多人已成功使用 **AAPS**，但每個人都有自己無法獨立解決的問題。 由於用戶眾多，問題的回應時間通常非常快，通常僅需幾個小時。 不要擔心尋求幫助，更不用擔心愚蠢的問題！ 我們鼓勵任何新手/老手用戶提出他們認為有必要的所有問題，以幫助他們安全啟動並運作。 本節還包含 **AAPS** 和 **AAPSClient**（追蹤應用程式）的一般故障排除指南，並說明了如何將你的 **AAPS** 資料（日誌文件）發送給開發者進行調查，如果你認為 **AAPS** 出現技術問題需要處理。

第八章節）有用的 **AAPS** 連線，供快速參考。 這包括[詞彙表](Getting-Started/Glossary.md)，它列出了**AAPS** 中使用的首字母縮寫或短名稱。 這是查找 ISF 或 TT 等術語的地方。 此部分還包含實用的螢幕截圖和其他資料的連線。

第九章節）涵蓋了高級AAPS選項，例如如何從使用AAPS進展到混合閉環（為餐飲等進行注射）到完全閉環（不進行手動注射），並詳細介紹了開發和工程模式。 大多數使用者只需使用主要或"Master" **AAPS**版本即可正常操作，無須查看這些選項；本節給那些已經控制良好並希望進一步改善其設置的使用者。

第十章節）[如何支援 AAPS](make-a-PR.md) 提供了關於如何支援此項目的資訊。 你可以捐贈金錢、設備或專業知識。 你可以建議/自行更改文檔，幫助 [翻譯文檔](translations.md)，並透過 Open Humans 項目提供你的資料。

第 11 節）包含保存的或其他文檔，包括一個針對已表達對開放原始碼人工胰腺技術（如 **AAPS**）感興趣的 [臨床醫師](Resources/clinician-guide-to-AAPS.md) 的子部分，或對想與臨床醫生分享此類信息的患者，該主題也在介紹中處理。 第 12 節）包含更多糖尿病和循環的參考資料和資源。


 ### 有興趣開始使用 **AAPS** 嗎？ 在 [介紹](introduction.md) 中閱讀更多關於 **AAPS** 的資訊。

```{admonition} SAFETY NOTICE
:class: danger
**AAPS** 的安全性依賴於您硬體（電話、幫浦、CGM）的安全功能。 請只使用經過 FDA/CE 認證的全功能胰島素幫浦和 CGM。 不使用故障、改裝或自行組裝的胰島素幫浦或 CGM 接收器。 僅使用由製造商批准並與幫浦和 CGM 搭配使用的原裝耗材（如注射器、套管和胰島素儲存罐）。 使用未經測試或修改的耗材可能會導致資料不準確和胰島素注射錯誤，從而對使用者造成重大風險。 

如果您正在服用 SGLT-2 抑制劑（gliflozins），請勿使用 **AAPS**，因為這會降低血糖水平。 由於胰島素供應減少，會增加罹患糖尿病酮酸中毒（DKA）的風險，而血糖下降則會提高低血糖的風險。 
```

```{admonition} Disclaimer
:class: note

- 此處描述的所有信息和代碼僅供參考和教育目的使用。 使用 [Nightscout](https://nightscout.github.io/) 和 **AAPS** 需自行承擔風險，並且不應使用該信息或代碼來做出醫療決策。 Nightscout目前不符合HIPAA的隱私規定。 
- 從 github.com 使用的代碼不提供任何保證或正式支援。 請檢視此儲存庫的許可證( LICENSE) 以暸解詳細資訊。
- 所有產品和公司名稱、商標、服務標記、註冊商標和註冊服務標記均為其各自持有者的財產。 它們的使用僅供資訊用途，沒有任何關聯或背書。

**AAPS** 與以下組織無任何關聯，也不受其支持：[SOOIL](http://www.sooil.com/eng/)、[Dexcom](https://www.dexcom.com/)、[Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/)、[Insulet](https://www.insulet.com/) 或 [Medtronic](https://www.medtronic.com/).

```

(AAPS-Documentation-Index)=

## AAPS文件索引

```{toctree}
:caption: 1) 切換語言

切換語言 <./changelanguage.md>
```
```{toctree}
:caption: 2) 開始使用

AAPS介紹 <./introduction.md>
準備AAPS <preparing.md>
相容幫浦浦  <./Getting-Started/Pump-Choices.md>
相容CGM <./Configuration/BG-Source.md>
相容手機  <./Hardware/Phoneconfig.md>
```

```{toctree}
:caption: 3) 設置AAPS

設置報告伺服器 <./Installing-AndroidAPS/setting-up-the-reporting-server.md>
構建 AAPS <./Installing-AndroidAPS/building-AAPS.md>
傳輸和安裝 AAPS <./Installing-AndroidAPS/Transferring-and-installing-AAPS.md>
設置嚮導 <./Installing-AndroidAPS/setup-wizard.md>
更改 AAPS 配置 <./Installing-AndroidAPS/change-configuration.md>
- 組態建置工具 <./Configuration/Config-Builder.md>
- 偏好設定 <./Configuration/Preferences.md>
完成目標 <./Usage/completing-the-objectives.md>
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
敏感度檢測 <./Configuration/Sensitivity-detection-and-COB.md>
配置切換 <./Usage/Profiles.md>
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

備份您的設置
匯出/匯入設置 <./Usage/ExportImportSettings.md>
檢視您的資料
版本發行說明 <./Installing-AndroidAPS/Releasenotes.md>
升級至 AAPS 的新版本 <./Installing-AndroidAPS/Update-to-new-version.md>


```

```{toctree}
:caption: 7) 獲得幫助

在哪裡可以得到有關 AAPS 的幫助 <./Where-To-Go-For-Help/Connect-with-other-users.md>
常見故障排除 <./Usage/troubleshooting.md>
故障排除 AAPSClient <./Usage/Troubleshooting-NSClient.md>
如何報告錯誤/請求功能
存取日誌檔案 <./Usage/Accessing-logfiles.md>
幫助! 我的AAPS手機損壞/被偷/丟失
```

```{toctree}
:標題: 8) 有用的AAPS連結

詞彙表  <./Getting-Started/Glossary.md>
AAPS螢幕  <./Getting-Started/Screenshots.md>
您的AAPS設定檔 
相容的幫浦 <./Getting-Started/Pump-Choices.md>
Accu-Chek Combo基本使用提示 <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>
相容的CGM <./Configuration/BG-Source.md>
相容的手機  <./Hardware/Phoneconfig.md>
在智慧型手錶上執行AAPS的操作 <./Configuration/Watchfaces.md>
如何自定義您的AAPS手錶錶面  <./Usage/Custom_Watchface_Reference.md>
xDrip設置 <./Configuration/xdrip.md>
自動調整 <./Usage/autotune.md>

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
:標題: 11) 附加/存檔文件

為 AAPS 的專用的 Google 帳戶 (可選)<./Installing-AndroidAPS/Dedicated-Google-account-for-AAPS.md>

Careportal (已停用) <./Usage/CPbefore26.md>

針對臨床醫師 (已過時) <./Resources/clinician-guide-to-AndroidAPS.md>

與第三方應用程式自動化 <./Usage/automationwithapp.md>

更新至 AAPS 3.0 後檢查<./Installing-AndroidAPS/update3_0.md>

更新至 AAPS 2.7 後檢查 <./Installing-AndroidAPS/update2_7.md>

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
