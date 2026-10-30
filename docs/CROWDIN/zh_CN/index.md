# 欢迎使用 AAPS 说明文档

![image](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

 xx xxxx 202x : Version {{ aaps_version }}.x.x is out. Check the [Release Notes](#latestrelease) to see what's new and follow the instructions in the [update manual](./Maintenance/UpdateToNewVersion.md) to update.

```

Android APS (**AAPS**) 是一个开放源码的安卓应用程序，适用于糖尿病依赖型（I型）糖尿病患者。是一款可以在安卓智能手机上运行的人工胰腺控制软件。其主要功能是通过运用OpenAPS算法来模拟正常的胰腺功能：通过自动胰岛素输注（Automated Insulin Dosing，AID）将血糖水平保持在正常限度内。 To use **AAPS** you need **three** compatible devices: **(1)** an Android phone, **(2)** a continuous glucose monitor (CGM), and **(3)** an FDA/CE approved insulin pump. You can also add **(4)** cloud services to remotely control **AAPS**, share your data, and store it on a reporting server, and **(5)** a smartwatch.

This documentation explains how to set up and use **AAPS**. You can navigate through the **AAPS** documentation either through the menu on the left (and the handy **Search docs** function), or by using the [index](#index-aaps-documentation-index) at the bottom of this page.

## AAPS 文档概述(“说明书”)

Section **1) Getting Started**, the [Introduction](Getting-Started/Introduction.md) explains the general concept of what an artificial pancreas system (APS) is designed to do. 概述了闭环的背景， **AAPS** 的开发初衷，并把 **AAPS** 与其他类似系统进行了比较，对一些使用安全问题做了声明。该章节提供了与医疗团队沟通 **AAPS**使用的建议。解释了为什么您需要自己去构建（build，将软件源代码转换为可以安装和运行的应用程序的过程） **AAPS** 应用，而非直接下载安装，并说明了**AAPS**系统的典型设备连接方式。同时涵盖无障碍使用设计及**AAPS**适用人群说明。

[​​AAPS准备工作](./Getting-Started/PreparingForAaps.md)章节详细介绍了更多关于安全考量，以及与**AAPS**兼容的手机、动态血糖仪（CGM，Continuous Glucose Monitors）和胰岛素泵。这部分内容概述了您将经历的流程，并提供了实现 **AAPS** 全部功能的大致时间表。（安全起见，有些功能是需要您完成一些学习和使用的小任务之后才会开放，比如闭环功能）本节帮助您在技术上做好准备，以便尽可能快速高效地搭建**AAPS**系统。 The subsection [CGM Configuration](./Getting-Started/CompatiblesCgms.md) explains how to optimize your CGM setup and which smoothing options are best.

现在，您已充分了解整个流程，可以开始组建您的**AAPS**闭环系统了。

Section **2) Build the app** explains why you need to build the **AAPS** app yourself rather than just downloading it, and takes you step-by-step through [building it](./SettingUpAaps/BuildingAaps.md) (using a browser, Android Studio, or the command line) and then transferring and installing it on your phone. It starts with an optional step, setting up a [dedicated Google account](./UsefulLinks/DedicatedGoogleAccountForAaps.md) to hold your builds and backups. It also explains [Android developer verification](#android-developer-verification), a change Google is rolling out from September 2026 that affects how self-built apps are installed.

Section **3) Setting up the reporting server** covers choosing and [setting up your reporting server](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout or Tidepool) so you can review and share your data.

Section **4) [Configure AAPS](./SettingUpAaps/SetupWizard.md)** covers setting up the **AAPS** app using the setup Wizard, linking it with your CGM app and either a real or virtual insulin pump, as well as linking **AAPS** to your reporting server. You are then introduced to everything **AAPS** can do, through a safe, carefully paced, step-by-step process. This makes sure that you (or your child) are thoroughly familiar and comfortable navigating all the different levels and menu configurations before moving on to the next phase, commonly called the next "Objective". You keep progressing this way until you have enough experience to begin using the more advanced options in the app. 这些目标（Objectives）都经过专门的设计，将循序渐进地解锁**AAPS**更多可能性，最终实现从开环模式向闭环模式的过渡。

Section **5) [Daily life with AAPS](./DailyLifeWithAaps/AapsScreens.md)** covers key **AAPS** features, to help you use (and customize) **AAPS**. This includes understanding the screens, carbs-on-board, sensitivity, DynamicISF, profile switching, temp targets, extended carbs (or eCarbs), automations, and [reviewing your data](./Maintenance/Reviewing.md) in the history browser and statistics. It also covers frequent topics like how to manage different types of meals, how to deal with cannula and sensor changes, smartphone updates, daylight saving changes, [traveling with AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md), and sports. 常见问答详见故障排查章节。

Section **6) [Remote AAPS features](./RemoteFeatures/RemoteControl.md)** highlights a real strength of **AAPS**. 用户可通过多种方式远程发送指令或单纯查看**AAPS**数据，该功能既适用于想用 **AAPS**孩子血糖的家长，也便于成年糖尿病患者通过智能手表、车载设备_等_多端便捷监测血糖及其他指标，同时支持重要亲友共同查看数据。这一节还提供了Android Auto的使用指南，实现车载血糖监测。

Section **7) [Wear OS smartwatches](./WearOS/BuildingAapsWearOS.md)** gives information and procedures to use an Android **Wear OS** smartwatch with the dedicated **AAPS** watchfaces or custom watchfaces, either as a remote control of your phone or just a display indicator.


Section **8) [Maintenance of AAPS](./Maintenance/ExportImportSettings.md)** covers how to export and back up your settings (which is very important in case you lose/break your phone), gives the latest version notes, details how to update **AAPS** and explains what happens when a version reaches its end of life. 预计每年发布1个新版本及2-3次强制更新，跟其他所有软件一样，您需要及时更新**AAPS**以修复潜在问题并优化系统性能。本节设有“更新”问题排查专区，解答常见疑问。

Section **9) [Help & Troubleshooting](GettingHelp/WhereCanIGetHelp.md)** should help direct you to the best places to go to find general help with **AAPS**. It is the single place to go when something is not working: the [Troubleshooting](GettingHelp/GeneralTroubleshooting.md) hub collects, by topic, the solutions to the most common problems, and the [FAQ](UsefulLinks/FAQ.md) answers frequent questions. 该指南能帮助您快速联系社区成员，解答疑问并规避常见问题。尽管很多人已经顺利用上了**AAPS**，但遇到疑难时仍需寻求帮助。得益于庞大的用户群，问题提出以后通常几个小时内就能收到回复。不要因为觉着自己的问题太低级就不好意思开口求助，没有不能问的问题。无论使用者经验水平如何，我们都鼓励积极提问以确保安全使用。本节包括 **AAPS** 和 **AAPSClient**（其配套数据查看应用）常见故障的排查方案，并说明当**AAPS**系统出现技术故障时，如何向开发者发送**AAPS**数据（日志文件）进行分析。

Section **10)** covers **[Advanced AAPS options](./AdvancedOptions/FullClosedLoop.md)** such as how to progress from using **AAPS** for hybrid-closed looping (bolusing for meals _etc._) to full closed looping (no bolusing), how to [tune your profile](./GettingHelp/ProfileTuning.md) and use Autotune, and details development and engineering modes. 对绝大多数用户来说，**AAPS**的主版本（"Master"版）即可满足需求，但总会有些大牛，即便已经用的很好了，还想着继续折腾更深入的功能，这一节的内容主要是给他们看的。

In section **11) [How to support AAPS](SupportingAaps/HowToEditTheDocs.md)** we provide information so that you can support this project. 您可通过捐款、捐赠设备或贡献专业知识助力项目发展。也可自行提出或修改文档内容、协助[文档翻译](SupportingAaps/Translations)，并通过Open Humans项目共享个人数据。

Section **12) Resources**, contains archived or additional documentation, including a subsection for [clinicians](UsefulLinks/ClinicianGuideToAaps.md) who have expressed interest in open source artificial pancreas technology such as **AAPS**, or for patients who want to share such information with their clinicians, this topic is also addressed in the introduction. 这一节还有更多关于糖尿病和闭环的参考资料。 It includes the [Glossary](./UsefulLinks/Glossary.md), a list of the acronyms (or short-term names) used throughout **AAPS**. 举例来说，想知道ISF或TT代表什么意思就去这里找。


 ### 想要开始使用 **AAPS**? 请参阅[引言](Getting-Started/Introduction.md)部分进一步了解**AAPS**。

```{admonition} SAFETY NOTICE
:class: danger
**AAPS**的安全性依赖于你的硬件装备（手机、泵、动态）的安全性能。请务必使用经FDA/CE认证且功能完整的胰岛素泵及动态血糖仪（CGM）。禁止使用损坏、改装或自制的胰岛素泵或动态血糖仪。泵和动态一定要使用原装或者厂商认证的耗材（助针器、管路和储药器）。非官方测试或改装配件可能导致数据误差及胰岛素输注错误，从而对使用者构成重大风险。 

请勿在使用SGLT-2抑制剂（格列净类药物）期间使用**AAPS**。此类药物会降低血糖水平。由于胰岛素输注量减少及血糖水平降低，可能增加糖尿病酮症酸中毒（DKA）及低血糖风险。 
```

```{admonition} Disclaimer
:class: note
本文所述所有信息及代码仅供教育参考之用。使用 [Nightscout](https://nightscout.github.io/)及**AAPS**需自行承担风险，相关内容不可作为医疗决策依据。 Nightscout目前未针对HIPAA隐私合规性进行特别设计。 
- 文中来自 github.com 的代码未经正式授权也没有任何官方支持。更多细节请查阅本代码仓库的许可协议（LICENSE）。
- 所有产品、公司名称、商标、服务标识、注册商标和注册服务标志归其所有者所有。使用他们仅是作为信息传递目的，不暗示任何关联或官方认可。

**AAPS** has no association with, and is not endorsed by: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/), [Medtronic](https://www.medtronic.com/), [Diaconn](https://www.diaconn.com/en/index.html), [EOFlow](http://www.eoflow.com/), [MicroTech Medical (Equil)](https://www.microtechmd.com/), [Medtrum](https://www.medtrum.com/), [Senseonics (Eversense)](https://www.senseonics.com/), [i-SENS (CareSens)](https://i-sens.com/), [POCTech](https://poctechcorp.com/en/), [Ottai](https://ottai.com/) or [Syai](https://www.syai.com/).

```

(index-aaps-documentation-index)=

## AAPS文档索引

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
