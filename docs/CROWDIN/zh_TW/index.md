# 歡迎來到 AAPS 文件指南

![圖像](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

 xx xxxx 202x : Version {{ aaps_version }}.x.x is out. 請參閱 [版本公告](#latestrelease) 以瞭解最新變更，並依照 [更新手冊](./Maintenance/UpdateToNewVersion.md) 的指示進行更新。

```

Android APS (**AAPS**) 是一款開源應用程式，專為胰島素依賴型的糖尿病患者所設計。這是一個人工胰臟系統 (APS)，可以在 Android 智慧型手機上運作。 **AAPS**使用OpenAPS軟體算法，旨在執行真正胰臟的功能：通過自動化胰島素劑量控制血糖水平保持在健康範圍內。 To use **AAPS** you need **three** compatible devices: **(1)** an Android phone, **(2)** a continuous glucose monitor (CGM), and **(3)** an FDA/CE approved insulin pump. You can also add **(4)** cloud services to remotely control **AAPS**, share your data, and store it on a reporting server, and **(5)** a smartwatch.

This documentation explains how to set up and use **AAPS**. You can navigate through the **AAPS** documentation either through the menu on the left (and the handy **Search docs** function), or by using the [index](#index-aaps-documentation-index) at the bottom of this page.

## AAPS 文件總覽("簡稱本文件")

Section **1) Getting Started**, the [Introduction](Getting-Started/Introduction.md) explains the general concept of what an artificial pancreas system (APS) is designed to do. 本文件概述了循環系統的背景，為何開發**AAPS** ，並比較了**AAPS** 與其他系統，同時也討論了安全性問題。他提供了如何與你的醫療團隊討論 **AAPS**的建議，解釋了為什麼你需要自行建置**AAPS** 應用程式，而不是直接下載，並概述了典型的**AAPS** 系統連接性。他還討論了無障礙設計，並指出誰最有可能從**AAPS** 中受益。

[準備 AAPS](./Getting-Started/PreparingForAaps.md)章節提供了更多有關安全考量的詳細資訊，以及相容**AAPS**的手機、CGM（連續血糖監測儀）和胰島素幫浦的相關訊息。他描述了你將經歷的過程，並提供了獲得完整**AAPS** 功能的大致時間表。本節將幫助在技術上作好準備，會以最快、最有效率的方式設置你的**AAPS** 。 The subsection [CGM Configuration](./Getting-Started/CompatiblesCgms.md) explains how to optimize your CGM setup and which smoothing options are best.

現在你已經對過程有了深入的了解，可以開始建置你的**AAPS** 循環系統了。

Section **2) Build the app** explains why you need to build the **AAPS** app yourself rather than just downloading it, and takes you step-by-step through [building it](./SettingUpAaps/BuildingAaps.md) (using a browser, Android Studio, or the command line) and then transferring and installing it on your phone. It starts with an optional step, setting up a [dedicated Google account](./UsefulLinks/DedicatedGoogleAccountForAaps.md) to hold your builds and backups. It also explains [Android developer verification](#android-developer-verification), a change Google is rolling out from September 2026 that affects how self-built apps are installed.

Section **3) Setting up the reporting server** covers choosing and [setting up your reporting server](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout or Tidepool) so you can review and share your data.

Section **4) [Configure AAPS](./SettingUpAaps/SetupWizard.md)** covers setting up the **AAPS** app using the setup Wizard, linking it with your CGM app and either a real or virtual insulin pump, as well as linking **AAPS** to your reporting server. You are then introduced to everything **AAPS** can do, through a safe, carefully paced, step-by-step process. This makes sure that you (or your child) are thoroughly familiar and comfortable navigating all the different levels and menu configurations before moving on to the next phase, commonly called the next "Objective". You keep progressing this way until you have enough experience to begin using the more advanced options in the app. 這些目標被特別設計為逐步解鎖更多 **AAPS** 的可能性，並從開環轉為閉環。

Section **5) [Daily life with AAPS](./DailyLifeWithAaps/AapsScreens.md)** covers key **AAPS** features, to help you use (and customize) **AAPS**. This includes understanding the screens, carbs-on-board, sensitivity, DynamicISF, profile switching, temp targets, extended carbs (or eCarbs), automations, and [reviewing your data](./Maintenance/Reviewing.md) in the history browser and statistics. It also covers frequent topics like how to manage different types of meals, how to deal with cannula and sensor changes, smartphone updates, daylight saving changes, [traveling with AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md), and sports. 常見問題和答案位於問題排除部分。

Section **6) [Remote AAPS features](./RemoteFeatures/RemoteControl.md)** highlights a real strength of **AAPS**. 這對於希望遠端發送指令給予，或者只是追踪來自 **AAPS** 的資料來說非常實用。這對於希望為未成年人使用 **AAPS** 的照護者，以及患有糖尿病的成人同樣實用。成人可以更方便地監控血糖（以及其他指標），不僅限於手機上（例如手錶、車內等），也可以讓重要他人一同監控資料。本節還提供了使用 Android Auto 的指導，讓你能夠在車內查看血糖數值。

Section **7) [Wear OS smartwatches](./WearOS/BuildingAapsWearOS.md)** gives information and procedures to use an Android **Wear OS** smartwatch with the dedicated **AAPS** watchfaces or custom watchfaces, either as a remote control of your phone or just a display indicator.


Section **8) [Maintenance of AAPS](./Maintenance/ExportImportSettings.md)** covers how to export and back up your settings (which is very important in case you lose/break your phone), gives the latest version notes, details how to update **AAPS** and explains what happens when a version reaches its end of life. 你可以預期每年會有一個新版本和 2-3 次強制更新。你需要像其他軟體一樣進行這些更新，以解決小錯誤並改進**AAPS** 。有一個專門的“更新”問題排除部分，解答常見問題。

Section **9) [Help & Troubleshooting](GettingHelp/WhereCanIGetHelp.md)** should help direct you to the best places to go to find general help with **AAPS**. It is the single place to go when something is not working: the [Troubleshooting](GettingHelp/GeneralTroubleshooting.md) hub collects, by topic, the solutions to the most common problems, and the [FAQ](UsefulLinks/FAQ.md) answers frequent questions. 這非常重要，讓你能夠快速與其他用戶取得聯繫，澄清問題並解決常見的困難。很多人已成功使用 **AAPS**，但每個人都有自己無法獨立解決的問題。由於用戶眾多，問題的回應時間通常非常快，通常僅需幾個小時。不要擔心尋求幫助，更不用擔心愚蠢的問題！我們鼓勵任何新手/老手用戶提出他們認為有必要的所有問題，以幫助他們安全啟動並運作。本節還包含 **AAPS** 和 **AAPSClient**（追蹤應用程式）的一般問題排除指南，如果你認為 **AAPS** 出現技術問題需要處理，本節也說明了如何將你的 **AAPS** 資料（日誌文件）發送給開發者進行調查，。

Section **10)** covers **[Advanced AAPS options](./AdvancedOptions/FullClosedLoop.md)** such as how to progress from using **AAPS** for hybrid-closed looping (bolusing for meals _etc._) to full closed looping (no bolusing), how to [tune your profile](./GettingHelp/ProfileTuning.md) and use Autotune, and details development and engineering modes. 大多數使用者只需使用主要或"Master" **AAPS**版本即可正常操作，無須查看這些選項；本節給那些已經控制良好並希望進一步改善其設置的使用者。

In section **11) [How to support AAPS](SupportingAaps/HowToEditTheDocs.md)** we provide information so that you can support this project. 你可以捐錢、設備或專業知識。你可以建議/自行更改文件，幫助 [翻譯文件](SupportingAaps/Translations)，並透過 Open Humans 項目提供你的資料。

Section **12) Resources**, contains archived or additional documentation, including a subsection for [clinicians](UsefulLinks/ClinicianGuideToAaps.md) who have expressed interest in open source artificial pancreas technology such as **AAPS**, or for patients who want to share such information with their clinicians, this topic is also addressed in the introduction. 本節還包含更多糖尿病和閉環的參考資料和資源。 It includes the [Glossary](./UsefulLinks/Glossary.md), a list of the acronyms (or short-term names) used throughout **AAPS**. 這是查找 ISF 或 TT 等術語的地方。


 ### 有興趣開始使用 **AAPS** 嗎？在 [介紹](Getting-Started/Introduction.md) 中閱讀更多關於 **AAPS** 的資訊。

```{admonition} SAFETY NOTICE
:class: danger
**AAPS** 的安全性依賴於你硬體（電話、幫浦、CGM）的安全功能。請只使用經過 FDA/CE 認證的全功能胰島素幫浦和 CGM。不使用故障、改裝或自行組裝的胰島素幫浦或 CGM 接收器。僅使用由製造商批准並與幫浦和 CGM 搭配使用的原裝耗材（如注射器、套管和胰島素儲存罐）。使用未經測試或修改的耗材可能會導致資料不準確和胰島素注射錯誤，從而對使用者造成重大風險。 

如果你正在服用 SGLT-2 抑制劑（gliflozins），請勿使用 **AAPS**，因為這會降低血糖數值。由於胰島素供應減少，會增加罹患糖尿病酮酸中毒（DKA）的風險，而血糖下降則會提高低血糖的風險。 
```

```{admonition} Disclaimer
:class: note

- 此處描述的所有訊息和代碼僅供參考和教育目的使用。使用 [Nightscout](https://nightscout.github.io/) 和 **AAPS** 需自行承擔風險，並且不應使用該訊息或代碼來做出醫療決策。 Nightscout目前不符合HIPAA的隱私規定。 
- 從 github.com 使用的代碼不提供任何保證或正式支援。請檢視此儲存庫的許可證( LICENSE) 以暸解詳細資訊。
- 所有產品和公司名稱、商標、服務標記、註冊商標和註冊服務標記均為其各自持有者的財產。他們的使用僅供資訊用途，沒有任何關聯或背書。

**AAPS** has no association with, and is not endorsed by: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/), [Medtronic](https://www.medtronic.com/), [Diaconn](https://www.diaconn.com/en/index.html), [EOFlow](http://www.eoflow.com/), [MicroTech Medical (Equil)](https://www.microtechmd.com/), [Medtrum](https://www.medtrum.com/), [Senseonics (Eversense)](https://www.senseonics.com/), [i-SENS (CareSens)](https://i-sens.com/), [POCTech](https://poctechcorp.com/en/), [Ottai](https://ottai.com/) or [Syai](https://www.syai.com/).

```

(index-aaps-documentation-index)=

## AAPS文件索引

```{toctree}
:caption: Using this documentation

Change language and version <./NavigateDoc/ChangeLanguageVersion.md>
Search the documentation <./NavigateDoc/SearchDoc.md>
Documentation updates <./Maintenance/DocumentationUpdate.md>
```
```{toctree}
:caption: 1) Getting started

Introduction to AAPS <./Getting-Started/Introduction.md>
Preparing for AAPS <./Getting-Started/PreparingForAaps.md>
Component Overview <./Getting-Started/ComponentOverview.md>
- Compatible pumps <./Getting-Started/CompatiblePumps.md>
- Compatible CGMs <./Getting-Started/CompatiblesCgms.md>
- Compatible phones  <./Getting-Started/Phones.md>
- Compatible watches  <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 2) Build the app

Dedicated Google account for AAPS (optional) <./UsefulLinks/DedicatedGoogleAccountForAaps.md>
Building AAPS <./SettingUpAaps/BuildingAaps.md>
- Browser Build <./SettingUpAaps/BrowserBuild.md>
- Android Studio Build <./SettingUpAaps/ComputerBuild.md>
- CLI Build <./SettingUpAaps/CLIBuild.md>
Transferring and Installing AAPS <./SettingUpAaps/TransferringAndInstallingAaps.md>
```
```{toctree}
:caption: 3) Setting up the reporting server

Setting up the reporting server <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
```
```{toctree}
:caption: 4) Configure AAPS

Setup Wizard <./SettingUpAaps/SetupWizard.md>
Your AAPS Profile <./SettingUpAaps/YourAapsProfile.md>
Change AAPS configuration <./SettingUpAaps/ChangeAapsConfiguration.md>
- Configuration (Config Builder) <./SettingUpAaps/ConfigBuilder.md>
- Preferences <./SettingUpAaps/Preferences.md>
Completing the objectives <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 5) Daily Life with AAPS

AAPS Screens <./DailyLifeWithAaps/AapsScreens.md>
Key AAPS Features <./DailyLifeWithAaps/KeyAapsFeatures.md>
COB calculation <./DailyLifeWithAaps/CobCalculation.md>
Sensitivity detection <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
Dynamic ISF <./DailyLifeWithAaps/DynamicISF.md>
Profile Switch & Profile Percentage <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Temp-Targets <./DailyLifeWithAaps/TempTargets.md>
Extended carbs <./DailyLifeWithAaps/ExtendedCarbs.md>
QuickWizards <./DailyLifeWithAaps/QuickWizards.md>
Scenes <./DailyLifeWithAaps/Scenes.md>
Automations <./DailyLifeWithAaps/Automations.md>
QuickLaunch toolbar <./DailyLifeWithAaps/QuickLaunch.md>
Home screen widgets <./DailyLifeWithAaps/Widgets.md>
Food database <./DailyLifeWithAaps/Food.md>
Global search <./DailyLifeWithAaps/GlobalSearch.md>
Reviewing your data <./Maintenance/Reviewing.md>
AAPS for children <./DailyLifeWithAaps/AapsForChildren.md>
Pumps and cannulas <./DailyLifeWithAaps/PumpsAndCannulas.md>
Timezone traveling & Daylight Saving Time <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 6) Remote AAPS features

Remote monitoring <./RemoteFeatures/RemoteMonitoring.md>
Following Only <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>
Remote control <./RemoteFeatures/RemoteControl.md>
The AAPSClient app <./RemoteFeatures/AapsClient.md>
Master ↔ Client control <./RemoteFeatures/ClientMasterControl.md>
SMS Commands <./RemoteFeatures/SMSCommands.md>

```
```{toctree}
:caption: 7) Wear OS Smartwatches

AAPS for Wear OS <./WearOS/BuildingAapsWearOS.md>
Use the smartwatch <./WearOS/WearOsSmartwatch.md>
Remote control <./RemoteFeatures/RemoteControlWearOS.md>
Custom watchfaces reference <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Exchange site custom watchfaces <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 8) Maintenance of AAPS

Export/Import Settings <./Maintenance/ExportImportSettings.md>
AAPS Release Notes <./Maintenance/ReleaseNotes.md>
What changed in AAPS v4 <./Maintenance/V4Changes.md>
Updating to a new version of AAPS <./Maintenance/UpdateToNewVersion.md>
- Browser Update (fork) <./Maintenance/UpdateBrowserBuild.md>
- Android Studio Update <./Maintenance/UpdateComputerBuild.md>
End of life <./Maintenance/EndOfLife.md>

```

```{toctree}
:caption: 9) Help & Troubleshooting

Where can I get help with AAPS <./GettingHelp/WhereCanIGetHelp.md>
Troubleshooting (start here) <./GettingHelp/GeneralTroubleshooting.md>
- Bluetooth troubleshooting <./GettingHelp/BluetoothTroubleshooting.md>
- Troubleshooting NSClient <./GettingHelp/TroubleshootingNsClient.md>
- Troubleshooting Android Studio <./GettingHelp/TroubleshootingAndroidStudio.md>
- Browser build troubleshooting <./GettingHelp/BrowserBuildTroubleshooting.md>
- Reinstalling AAPS (new keystore) <./GettingHelp/ReinstallAaps.md>
- Accessing logfiles <./GettingHelp/AccessingLogFiles.md>
FAQ <./UsefulLinks/FAQ.md>
```

```{toctree}
:caption: 10) Advanced AAPS options

Full Closed Loop <./AdvancedOptions/FullClosedLoop.md>
Profile Tuning Guide <./GettingHelp/ProfileTuning.md>
Autotune <./AdvancedOptions/Autotune.md>
Insulin concentration <./AdvancedOptions/InsulinConcentration.md>
Dev branch <./AdvancedOptions/DevBranch.md>
Browser build: cherry-pick a commit <./AdvancedOptions/BrowserBuildCherryPick.md>

```
```{toctree}
:caption: 11) How to support AAPS

How to help <./SupportingAaps/HowCanIHelp.md>
Editing the docs <./SupportingAaps/HowToEditTheDocs.md>
Translating the app and docs <./SupportingAaps/Translations.md>
State of translations <./SupportingAaps/StateOfTranslations.md>
Open Humans Uploader <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 12) Resources

Glossary <./UsefulLinks/Glossary.md>
General diabetes and looping resources <./UsefulLinks/BackgroundReading.md>
For Clinicians <./UsefulLinks/ClinicianGuideToAaps.md>
```
