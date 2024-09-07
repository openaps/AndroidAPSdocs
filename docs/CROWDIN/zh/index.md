# 歡迎來到 AAPS 文件

![image](./images/basic-outline-of-AAPS.png)

Android APS (**AAPS**) 是一款為胰島素依賴型糖尿病患者設計的開源應用程式。 這是一個人工胰臟系統 (APS)，可以在 Android 智慧型手機上運行。 **AAPS** 使用 openAPS 軟體演算法，旨在模擬胰臟的功能：透過自動注射胰島素來保持血糖水平在健康範圍內。 要使用 **AAPS**，你需要 **三個** 相容的設備：一部 Android 手機、一個已通過 FDA/CE 認證的胰島素幫浦，以及一個持續血糖監測儀 (CGM)。

本文件將解釋如何設置和使用 **AAPS**。 你可以透過左側的選單（以及便捷的 "**搜索文件**" 功能）或使用本頁底部的 [索引](Index-of-the-AAPS-Documentation.md) 來瀏覽 **AAPS** 文件。

## AAPS 文件概述（“文件”）

第二部分）“入門”，[介紹](introduction.md) 解釋了人工胰臟系統 (APS) 的一般概念。 它概述了循環技術的背景，為什麼 **AAPS** 被開發，並將 **AAPS** 與其他系統進行比較，還討論了安全性問題。 它提供了如何與你的臨床團隊討論 **AAPS** 的建議，解釋了為什麼你需要自行構建 **AAPS** 應用程式而不是直接下載，並概述了 **AAPS** 系統的典型連接性。 它還討論了可訪問性，以及誰有可能從 **AAPS** 中受益。

[為 AAPS 做準備](preparing.md) 提供了有關安全考慮的更多詳細信息，以及與 **AAPS** 兼容的手機、CGM（持續血糖監測儀）和胰島素幫浦。 它概述了你將經歷的過程，並提供了大約的時間表，讓你能夠全面使用 **AAPS**。 本節將讓你在技術上為快速有效地組裝你的 **AAPS** 設備做好準備。 子部分 [CGM 配置](Configuration/BG-Source.md) 解釋了如何優化 CGM 設置以及最佳的平滑選項。

現在你已對過程有了堅實的理解，可以開始組裝你的 **AAPS** 循環系統。 它還涵蓋了使用設置嚮導設置 **AAPS** 應用程式，將其與 CGM 應用程式連結，無論是實際還是虛擬的胰島素幫浦，以及將 **AAPS** 與報告伺服器連結。 第三部分 **設置 AAPS** 包含分步指南。 它涵蓋了選擇和 [設置你的報告伺服器](setting-up-the-reporting-server.md)（Nightscout 或 Tidepool），以便你可以檢視和分享你的數據，準備電腦以構建 AAPS 應用程式，構建 AAPS 應用程式並將其轉移到手機上。 接下來會逐步引導你安全且精心校準的過程，確保你（或你的孩子）熟悉並能自信地操作所有不同層次的功能和選單配置，然後再進入下一階段，通常稱為下一個“目標”，直到你擁有足夠的經驗以開始使用應用程式中更高級的選項。 這些目標被特別設計為逐步解鎖更多 **AAPS** 的可能性，並從開放循環轉為閉環。

遠端控制功能的可能性範圍很廣，無論是遠端發送指令，還是僅僅是追蹤 **AAPS** 的數據。 這對於希望為未成年人使用 **AAPS** 的照護者來說非常實用，也適用於糖尿病患者，他們希望更方便地監測血糖（和其他指標），而不僅僅是在手機上（例如手錶、汽車等），或者希望他人也能監控數據。 第四部分）[遠端 AAPS 功能](remote-control.md) 突顯了 **AAPS** 的一個真正強項。 此部分還提供了使用 Android Auto 在汽車中查看血糖水平的指導。

第五部分）**AAPS 的日常生活** 涵蓋了 **AAPS** 的關鍵功能，幫助你使用（並自定義）**AAPS**。 包括理解各個屏幕、碳水化合物計算、靈敏度、配置切換、臨時目標、延展碳水化合物（或 eCarbs）、自動化和 DynamicISF。 此外，還涵蓋了如何處理不同類型的餐食、更換套管和感測器、手機更新、日光節約時間更改、[與 AAPS 一起旅行](Usage/Timezone-traveling.md) 和運動等常見問題與解答。 Common questions and answers are located within the troubleshooting section.


第六部分）**AAPS 的維護** 涵蓋了如何匯出和備份你的設置（這非常重要，以防你的手機遺失或損壞），提供了最新版本的說明，並詳細說明了如何更新 **AAPS**。 你可以預期每年會有一個新版本和 2-3 次強制更新。 你需要進行這些更新，與所有軟體一樣，更新後會修復一些小問題，並對 **AAPS** 進行改進。 有一個專門的“更新”疑難排解部分，解答常見問題。

第七部分）[獲取幫助](Where-To-Go-For-Help/Connect-with-other-users.html) 應該可以幫助你找到獲取 **AAPS** 一般幫助的最佳途徑。 這非常重要，讓你能夠快速與其他用戶取得聯繫，澄清問題並解決常見的困難。 很多人已成功使用 **AAPS**，但每個人都有自己無法單獨解決的問題。 由於用戶眾多，問題的回應時間通常非常快，通常僅需幾個小時。 Don’t worry about asking for help, there is no such thing as a dumb question! We encourage users of any/all levels of experience to ask as many questions as they feel is necessary to help get them up and running safely. 本節還包含 **AAPS** 和 **AAPSClient**（跟隨應用程式）的一般故障排除指南，並說明了如何將你的 **AAPS** 數據（日誌文件）發送給開發者進行調查，如果你認為 **AAPS** 出現技術問題需要處理。

第八部分）有用的 **AAPS** 鏈接，供快速參考。 這包括 [詞彙表](Getting-Started/Glossary.md)，它列出了 **AAPS** 中使用的縮寫詞（或簡稱）。 這是查找 ISF 或 TT 等術語的地方。 此部分還包含實用的螢幕截圖和其他數據的鏈接。

Section 9) covers **Advanced AAPS options** such as how to progress from using **AAPS** for hybrid-closed looping (bolusing for meals _etc._) to full closed looping (no bolusing), and details development and engineering modes. Most users get on just fine with the main or "Master" **AAPS** version without looking into these options, this section is for users who already have good control and are looking to further improve their setup.

第十部分）[如何支援 AAPS](make-a-PR.md) 提供了關於如何支援此項目的資訊。 你可以捐贈金錢、設備或專業知識。 你可以建議/自行更改文檔，幫助 [翻譯文檔](translations.md)，並通過 Open Humans 項目提供你的數據。

Section 11 contains archived or additional documentation, including a subsection for [clinicians](Resources/clinician-guide-to-AAPS.md) who have expressed interest in open source artificial pancreas technology such as **AAPS**, or for patients who want to share such information with their clinicians, this topic is also addressed in the introduction. More diabetes and looping references and resources are contained in Section 12.


 大多數用戶使用主要或“主”版本的 **AAPS** 就能應付自如，無需涉足這些選項，此部分針對那些已經很好地控制病情並希望進一步改善設置的用戶。 第九部分涵蓋了 **AAPS** 的高級選項，例如如何從使用 **AAPS** 進行混合閉環（為餐食進行注射等）過渡到完全閉環（無需注射），並詳細介紹了開發和工程模式。

:::{admonition} SAFETY NOTICE
:class: danger The safety of **AAPS** relies on the safety features of your hardware (phone, pump, CGM). Only use a fully functioning FDA/CE approved insulin pump and CGM. Do not use broken, modified or self-built insulin pumps or CGM receivers. Only use original consumable supplies (inserters, cannulas and insulin reservoirs) approved by the manufacturer for use with your pump and CGM. Using untested or modified supplies can cause inaccuracy and insulin dosing errors, resulting in significant risk to the user.

Do not use **AAPS** if you take SGLT-2 inhibitors (gliflozins), as they lower blood sugar levels. You increase the risk diabetic ketoacidosis (DKA) due to reduced insulin delivery and hypoglycemia due to lowered blood sugar levels.
:::

:::{admonition} Disclaimer
:class: note

- All information and code described here is for informational and educational purposes only. Use [Nightscout](https://nightscout.github.io/) and **AAPS** at your own risk, and do not use the information or code to make medical decisions. Nightscout currently makes no attempt at HIPAA privacy compliance.
- Use of code from github.com is without warranty or formal support of any kind. Please review this repository's LICENSE for details.
- All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Their use is for information purposes and does not imply any affiliation with or endorsement by them.

**AAPS** has no association with, and is not endorsed by: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) or [Medtronic](https://www.medtronic.com/).

:::

(AAPS-Documentation-Index)=

## AAPS Documentation Index

```{toctree}
:caption: 1) Change language

Change language <./changelanguage.md>
```
```{toctree}
:caption: 2) Getting started

Introduction to AAPS <./introduction.md>
Preparing for AAPS <preparing.md>
Compatible pumps <./Getting-Started/Pump-Choices.md>
Compatible CGMs <./Configuration/BG-Source.md>
Compatible phones  <./Hardware/Phoneconfig.md>
```

```{toctree}
:caption: 3) Setting up AAPS

Setting up the reporting server <./Installing-AndroidAPS/setting-up-the-reporting-server.md>
Building AAPS <./Installing-AndroidAPS/building-AAPS.md>
Transferring and Installing AAPS <./Installing-AndroidAPS/Transferring-and-installing-AAPS.md>
Setup Wizard<./Installing-AndroidAPS/setup-wizard.md>
Change AAPS configuration <./Installing-AndroidAPS/change-configuration.md>
- Config Builder <./Configuration/Config-Builder.md>
- Preferences <./Configuration/Preferences.md>
Completing the objectives <./Usage/completing-the-objectives.md>
```

```{toctree}
:caption: 4) Remote AAPS features

Remote control <remote-control.md>
Following Only <following-only.md>
Android Auto <./Usage/Android-auto.md>

```

```{toctree}
:caption: 5) Daily Life with APPS

AAPS Screens <./Getting-Started/Screenshots.md>
Key AAPS Features <./Usage/Open-APS-features.md>
COB calculation <./Usage/COB-calculation.md>
Sensitivity detection <./Configuration/Sensitivity-detection-and-COB.md>
Profile switch <./Usage/Profiles.md>
Temp-targets <./Usage/temptarget.md>
Extended carbs <./Usage/Extended-Carbs.md>
Automations <./Usage/Automation.md>
Dynamic ISF <./Usage/DynamicISF.md>
Meal Management
Pumps and cannulas <./5-DailyLifewithAAPS/DailyLife-PUMPS.md>
Sensors
Phones
Daylight saving changes
Travelling with AAPS 
Crossing timezones with pumps <./Usage/Timezone-traveling.md>

```

```{toctree}
:caption: 6) Maintenance of AAPS

Backing up your settings
Export/Import Settings <./Usage/ExportImportSettings.md>
Reviewing your data
Version Release Notes <./Installing-AndroidAPS/Releasenotes.md>
Updating to a new version of AAPS <./Installing-AndroidAPS/Update-to-new-version.md>


```

```{toctree}
:caption: 7) Getting Help

Where can I get help with AAPS <./Where-To-Go-For-Help/Connect-with-other-users.md>
General Troubleshooting <./Usage/troubleshooting.md>
Troubleshooting AAPSClient <./Usage/Troubleshooting-NSClient.md>
How to report bugs/request features
Accessing logfiles <./Usage/Accessing-logfiles.md>
Help! My AAPS phone is broken/stolen/lost
```

```{toctree}
:caption: 8) Useful AAPS Links

Glossary <./Getting-Started/Glossary.md>
AAPS Screens <./Getting-Started/Screenshots.md>
Your AAPS profile 
Compatible pumps <./Getting-Started/Pump-Choices.md>
Accu-Chek Combo tips for basic usage <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>
Compatible CGMs <./Configuration/BG-Source.md>
Compatible phones  <./Hardware/Phoneconfig.md>
Operation of Wear AAPS on a Smartwatch <./Configuration/Watchfaces.md>
How to customise your AAPS watchface <./Usage/Custom_Watchface_Reference.md>
xDrip Settings <./Configuration/xdrip.md>
Autotune <./Usage/autotune.md>

```

```{toctree}
:caption: 9) Advanced AAPS options

Full Closed Loop <./Usage/FullClosedLoop.md>
Dev branch <./Installing-AndroidAPS/Dev_branch.md>
xDrip engineering mode <./Usage/Enabling-Engineering-Mode-in-xDrip.md>

```
```{toctree}
:caption: 10) How to support AAPS

How to help <./Getting-Started/How-can-I-help.md>

How to edit the docs <./make-a-PR.md>

How to translate the app and docs <./translations.md>

State of translations <./Administration/stateTranslations.md>

Docs updates & changes <./Getting-Started/WikiUpdate.md>

Open Humans Uploader <./Configuration/OpenHumans.md>

```

```{toctree}
:caption: 11) Additional/archive documentation

Dedicated Google account for AAPS (optional)<./Installing-AndroidAPS/Dedicated-Google-account-for-AAPS.md>

Careportal (discontinued) <./Usage/CPbefore26.md>

For Clinicians (outdated) <./Resources/clinician-guide-to-AndroidAPS.md>

Automation with 3rd party apps <./Usage/automationwithapp.md>

Checks after update to AAPS 3.0<./Installing-AndroidAPS/update3_0.md>

Checks after update to AAPS 2.7 <./Installing-AndroidAPS/update2_7.md>

```

```{toctree}
:caption: 12) References

General diabetes and looping resources <./Where-To-Go-For-Help/Background-reading.md>
Scientific AAPS journal articles
```

```{toctree}
:caption: 13) Sandbox

Sandbox <./Sandbox/sandbox1.md>
Crowdin Test <./Sandbox/crowdintest.md>
Image Scaling <./Sandbox/imagescaling.md>

```