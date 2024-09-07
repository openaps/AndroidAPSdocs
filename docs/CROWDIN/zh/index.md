# Welcome to the AAPS documentation

![image](./images/basic-outline-of-AAPS.png)

Android APS (**AAPS**) is an open source app for people living with insulin-dependent diabetes. It is an artificial pancreas system (APS) which runs on Android smartphones. **AAPS** uses an openAPS software algorithm and aims to do what a real pancreas does: keep blood sugar levels within healthy limits by using automated insulin dosing. To use **AAPS** you need **three** compatible devices: an Android phone, a FDA/CE approved insulin pump, and a continuous glucose meter (CGM).

This documentation explains how to setup and use **AAPS**. You can navigate through the **AAPS** documentation either through the menu on the left (and the handy "**Search docs**" function), or by using the [index](Index-of-the-AAPS-Documentation.md) at the bottom of this page.

## AAPS 文件總覽("簡稱本文件")

第二章節）“入門”，[介紹](introduction.md) 解釋了人工胰臟系統 (APS) 的一般概念。 It outlines the background of looping in general, why **AAPS** was developed, compares **AAPS** to other systems, and addresses safety. It gives suggestions about how to talk to your clinical team about **AAPS**, explains why you need to build the **AAPS** app yourself rather than just downloading it, and gives an overview of the typical connectivity of an **AAPS** system. It also addresses accessibility, and who is likely to benefit from **AAPS**.

[Preparing for AAPS](preparing.md) gives more detail about safety considerations, and the phones, CGMs (Continuous Glucose Monitors) and insulin pumps which are compatible with **AAPS**. It gives an overview of the process you will go through, and provides an approximate timeline for gaining full functionality of **AAPS**. This section gets you technically prepared to assemble your **AAPS** setup as quickly and efficiently as possible. The subsection [CGM Configuration](Configuration/BG-Source.md) explains how to optimse CGM setup and what smoothing options are best.

Now that you have a solid understanding of the process, you can start assembling your **AAPS** loop. 本章節 **三) 設置 AAPS** 包含逐步指導來進行此操作。 它涵蓋了選擇和 [設置你的報告伺服器](setting-up-the-reporting-server.md)（Nightscout 或 Tidepool），以便你可以檢視和分享你的資料，準備電腦來構建 AAPS 應用程式，構建 AAPS 應用程式並便其傳輸到你的手機。 它還涵蓋了使用設置嚮導來設定 **AAPS** 應用程式，將其與你的 CGM 應用程式連結，並與實體或虛擬胰島素幫浦連結，以及將 **AAPS** 連結到你的報告伺服器。 接下來，你將通過一個安全且經過精心校準的分步過程，逐漸熟悉並全面使用 **AAPS** 的功能。該過程旨在確保你/你的孩子對各種層級和選單配置充分了解並感到舒適，然後再進入下一階段，通常稱為下一個"目標"，直到你擁有足夠的經驗以開始使用應用程式中更高級的選項。 這些目標被特別設計為逐步解鎖更多 **AAPS** 的可能性，並從開環轉為閉環。

第四章節）[遠端 AAPS 功能](remote-control.md) 突顯了 **AAPS** 的一個真正強項。 這對於希望遠端發送命令給予，或者只是追踪來自 **AAPS** 的資料來說非常實用。 這對於希望為未成年人使用 **AAPS** 的照護者，以及患有糖尿病的成人同樣實用。成人可以更方便地監控血糖（以及其他指標），不僅限於手機上（例如手錶、車內等），也可以讓重要他人一同監控資料。 本節還提供了使用 Android Auto 的指導，讓你能夠在車內查看血糖水平。

第五章節）**AAPS 的日常生活** 涵蓋了 **AAPS** 的關鍵功能，幫助你使用（並自定義）**AAPS**。 包括理解各個畫面、碳水化合物計算、靈敏度、配置切換、臨時目標、延展碳水化合物（或 eCarbs）、自動化和 動態ISF。 此外，還涵蓋了如何處理不同類型的餐食、更換套管和傳感器、手機更新、日光節約時間更改、[與 AAPS 一起旅行](Usage/Timezone-traveling.md) 和運動等常見問題與解答。 常見問題和答案位於疑難排除部分。


第六章節）**AAPS 的維護** 涵蓋了如何匯出和備份你的設置（這非常重要，以防你的手機遺失或損壞），提供了最新版本的說明，並詳細說明了如何更新 **AAPS**。 You can expect that there will be one new version and 2-3 required updates per year. You are required to do these updates as with all software, as any minor bugs are ironed out, and improvements to **AAPS** are made. There is a dedicated "updating" troubleshooting section with the common queries.

第七章節）[獲取幫助](Where-To-Go-For-Help/Connect-with-other-users.html) 應該可以幫助你找到獲取 **AAPS** 一般幫助的最佳途徑。 This is very important so that you can get in touch with others as quickly as possible, clarify questions and solve the usual pitfalls. 很多人已成功使用 **AAPS**，但每個人都有自己無法獨立解決的問題。 Due to the large number of users, the response times to questions are usually very quick, typically only a few hours. 不要擔心尋求幫助，更不用擔心愚蠢的問題！ 我們鼓勵任何新手/老手用戶提出他們認為有必要的所有問題，以幫助他們安全啟動並運行。 本節還包含 **AAPS** 和 **AAPSClient**（跟隨應用程式）的一般故障排除指南，並說明了如何將你的 **AAPS** 資料（日誌文件）發送給開發者進行調查，如果你認為 **AAPS** 出現技術問題需要處理。

第八章節）有用的 **AAPS** 連接，供快速參考。 This includes the  [Glossary](Getting-Started/Glossary.md), a list of the acronyms (or short-term names) used throughout **AAPS**. This is where to go to find out what the terms ISF or TT, stand for, for example. 此部分還包含實用的螢幕截圖和其他資料的連接。

第九章節）涵蓋了高級AAPS選項，例如如何從使用AAPS進展到混合閉環（為餐飲等進行注射）到完全閉環（不進行手動注射），並詳細介紹了開發和工程模式。 大多數使用者只需使用主要或"Master" **AAPS**版本即可正常操作，無須查看這些選項；本節給那些已經控制良好並希望進一步改善其設置的使用者。

第十章節）[如何支援 AAPS](make-a-PR.md) 提供了關於如何支援此項目的資訊。 You can donate money, equipment or expertise. 你可以建議/自行更改文檔，幫助 [翻譯文檔](translations.md)，並通過 Open Humans 項目提供你的資料。

第十一章節包含存檔或額外的文件，包括針對 [臨床醫生](Resources/clinician-guide-to-AAPS.md) 的子部分，這些臨床醫生對開源人工胰臟技術如 **AAPS** 表現出興趣，或是希望與臨床醫生分享此類資訊的患者，這個主題也在介紹部分有所提及。 更多關於糖尿病和循環的參考資料包含在第12章節中。


 ### 有興趣開始使用 **AAPS** 嗎？ 在 [介紹](introduction.md) 中閱讀更多關於 **AAPS** 的資訊。

:::{admonition} 安全通知
:class: 危險 **AAPS** 的安全取決於您的硬體設備（手機，幫浦，CGM）的安全功能。 請只使用經過 FDA/CE 認證的全功能胰島素幫浦和 CGM。 不使用故障、改裝或自行組裝的胰島素幫浦或 CGM 接收器。 僅使用由製造商批准並與幫浦和 CGM 搭配使用的原裝耗材（如注射器、套管和胰島素儲存罐）。 使用未經測試或修改的耗材可能會導致資料不準確和胰島素注射錯誤，從而對使用者造成重大風險。

如果您正在服用SGLT-2抑制劑（格列非嗎啶），請勿使用**AAPS**，因為它們會降低血糖水平。 由於胰島素的輸送減少，您增加了糖尿病酮酸中毒（DKA）的風險，由於血糖水平降低而導致低血糖。
:::

:::{admonition} 免責聲明
:class: 提示

- 這裡描述的所有資訊和代碼僅供資訊和教育目的。 請自行承擔使用 [Nightscout](https://nightscout.github.io/) 和 **AAPS** 的風險，請勿使用此信息或代碼做出醫療決定。 Nightscout目前不符合HIPAA的隱私規定。
- 使用來自github.com的程式碼不提供任何形式的保固或支援。 請檢視此儲存庫的許可證( LICENSE) 以暸解詳細資訊。
- 所有產品和公司名稱、商標、服務標誌、註冊商標和註冊服務標誌均屬其各自所有者。 它們的使用僅供資訊用途，沒有任何關聯或背書。

**AAPS** 與以下機構無關，並且未獲得認可： [SOOIL](http://www.sooil.com/eng/)，[Dexcom](https://www.dexcom.com/)，[Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/)，[Insulet](https://www.insulet.com/) 或[Medtronic](https://www.medtronic.com/)。

:::

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
相容泵浦 <./Getting-Started/Pump-Choices.md>
相容CGM <./Configuration/BG-Source.md>
相容手機 <./Hardware/Phoneconfig.md>
```

```{toctree}
:caption: 3) 設置AAPS

設置報告伺服器 <./Installing-AndroidAPS/setting-up-the-reporting-server.md>
構建 AAPS <./Installing-AndroidAPS/building-AAPS.md>
傳輸和安裝 AAPS <./Installing-AndroidAPS/Transferring-and-installing-AAPS.md>
設置嚮導 <./Installing-AndroidAPS/setup-wizard.md>
更改 AAPS 配置 <./Installing-AndroidAPS/change-configuration.md>
- 建構設定檔 <./Configuration/Config-Builder.md>
- 偏好設定 <./Configuration/Preferences.md>
完成目標 <./Usage/completing-the-objectives.md>
```

```{toctree}
:caption: 4) 遠程 AAPS 功能

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
跨時區與泵旅行 <./Usage/Timezone-traveling.md>

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
您的AAPS個人設置 
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