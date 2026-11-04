# 欢迎使用 AAPS 说明文档

![image](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class:注意：

4.0.0版本已于2026年十月31日发布。 Check the [Release Notes](#latestrelease) to see what's new and follow the instructions in the [update manual](./Maintenance/UpdateToNewVersion.md) to update.

```

Android APS (**AAPS**) 是一个开放源码的安卓应用程序，适用于糖尿病依赖型（I型）糖尿病患者。这是一款可以在安卓智能手机上运行的人工胰腺控制软件（APS）。其主要功能是通过运用OpenAPS算法来模拟正常的胰腺功能：通过自动胰岛素输注（Automated Insulin Dosing，AID）将血糖水平保持在正常限度内。 **AAPS**的使用需要 **三台**兼容设备：: **（1）**一部安卓手机， **（2）**一个连续血糖监测仪（CGM）以及 **（3）**一款经FDA/CE认证的胰岛素泵。您还可以添加 **（4）** 云服务，用于远程控制 **AAPS**,共享数据,存储数据以及**（5）** 智能手表。

本文档会告诉您如何设置和使用 **AAPS**。浏览 **AAPS** 文档您可以通过左侧的菜单（以及便捷的“ **搜索文档**”功能）或本页[底部](#index-aaps-documentation-index)的索引来进行。

## AAPS 文档概述(“说明书”)

**第1节）“入门”**， [简介](Getting-Started/Introduction.md) 部分对人工胰腺系统（APS）的设计初衷作了详细说明。概述了闭环的背景， **AAPS** 的开发初衷，并把 **AAPS** 与其他类似系统进行了比较，对一些使用安全问题做了声明。该章节提供了与医疗团队沟通 **AAPS**使用的建议。解释了为什么您需要自己去构建（build，将软件源代码转换为可以安装和运行的应用程序的过程） **AAPS** 应用，而非直接下载安装，并说明了**AAPS**系统的典型设备连接方式。同时涵盖无障碍使用设计及**AAPS**适用人群说明。

[​​AAPS准备工作](./Getting-Started/PreparingForAaps.md)章节详细介绍了更多关于安全考量，以及与**AAPS**兼容的手机、动态血糖仪（CGM，Continuous Glucose Monitors）和胰岛素泵。这部分内容概述了您将经历的流程，并提供了实现 **AAPS** 全部功能的大致时间表。（安全起见，有些功能是需要您完成一些学习和使用的小任务之后才会开放，比如闭环功能）本节帮助您在技术上做好准备，以便尽可能快速高效地搭建**AAPS**系统。[兼容的 CGM](./Getting-Started/CompatiblesCgms.md)小节介绍了如何优化您的 CGM 设置以及哪些平滑选项效果最佳。

现在，您已充分了解整个流程，可以开始构建您的**AAPS**闭环系统了。

第2节）“**构建应用**”该章节解释了为什么你需要自己动手创建**AAPS**应用，而不是直接下载，然后一步步指导你如何使用(浏览器、Android Studio或命令行)来[创建应用](./SettingUpAaps/BuildingAaps.md)，并将其传输到手机上进行安装。首先是一个可选步骤，你可以设置一个[专用的Google账户](./UsefulLinks/DedicatedGoogleAccountForAaps.md)来存放你的构建和备份。该小结还解释了谷歌从2026年九月起推出的一项[Android开发者验证](#android-developer-verification)变更，这将影响自行构建应用的安装方式。

第3节）“**设置报告服务器**” 该章节介绍了如何选择和[设置您的报告服务器](./SettingUpAaps/SettingUpTheReportingServer.md)（Nightscout 或 Tidepool），便于您查看和共享数据。

第4节）**“[配置AAPS](./SettingUpAaps/SetupWizard.md)”**该章节介绍了如何使用设置向导安装**AAPS**应用程序，将其与您的CGM应用程序以及真实或虚拟的胰岛素泵进行连接，并将** AAPS **关联到您的报告服务器。随后，您将通过一个安全、循序渐进的步骤流程，了解**AAPS**所能做的全部事情。这将确保你或你的孩子在进入下一阶段（或下一个“目标”）之前，能够完全熟悉并掌握各个不同层级和菜单配置。直到您积累到足够的经验才能开始使用应用中更高级的功能。这些目标（Objectives）都经过专门的设计，将循序渐进地解锁**AAPS**更多可能性，最终实现从开环模式向闭环模式的过渡。

第5节）**“[AAPS的日常生活](./DailyLifeWithAaps/AapsScreens.md)”** 该章节介绍了**AAPS**的关键功能，帮助您使用（并自定义）**AAPS**。包含理解各个界面、活性碳水、灵敏度、动态ISF、配置文件切换、临时目标、扩展碳水（ eCarbs）、自动化设置，以及在历史浏览器和统计中[查看您的数据](./Maintenance/Reviewing.md)。同时还涉及许多常见话题，例如如何管理不同类型的食物、管路和传感器更换、智能手机更新、夏令时调整、使用[AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md)旅行以及运动的相关问题。常见问答详见故障排查章节。

第6节）**“[远程 AAPS 功能](./RemoteFeatures/RemoteControl.md)”** 这是 **AAPS** 最有优势的功能。用户可通过多种方式远程发送指令或仅查看**AAPS**数据。该功能不仅适用于想用 **AAPS**管控孩子血糖的家长，也适用于希望通过（手表、车载设备_等_）更方便地监测血糖（及其他指标）的成年糖尿病患者，也可以支持重要亲友共同查看数据。这一节还提供了Android Auto的使用指南，实现车载血糖监测。

第7节）**“[Wear OS 智能手表](./WearOS/BuildingAapsWearOS.md)”** 该章节介绍了如何构建AAPS **Wear OS**应用及具体使用步骤，手表可搭配 **AAPS **专用表盘或自定义表盘，既可作为手机端 AAPS 的远程控制器，也可仅作为数据显示端使用。


第8节）**“[AAPS的维护](./Maintenance/ExportImportSettings.md)”**该章节介绍了如何导出和备份您的设置（这在您丢失或损坏手机时非常重要），提供了最新版本的发布说明和**AAPS**更新的详细步骤，解释了当某个版本到期时会发生什么情况。预计每年发布一个新版本并推送 2–3 次强制更新。跟其他所有软件一样，您需要及时更新**AAPS**以修复BUG并优化AAPS功能。本节设有“更新”问题排查专区，解答常见疑问。

第9节）**“[帮助& 故障排查](GettingHelp/WhereCanIGetHelp.md)”**该章节介绍了如何获取**AAPS**帮助以及常见问题的排除。当遇到问题时，请优先查阅本文档：[故障排除](GettingHelp/GeneralTroubleshooting.md)中心按主题整理了大部分常见问题的解决方案，[FAQ](UsefulLinks/FAQ.md)页面收录了高频疑问解答。该指南能帮助您快速联系社区成员，解答疑问并规避常见问题。尽管很多人已经顺利用上了**AAPS**，但遇到疑难时仍需寻求帮助。得益于庞大的用户群，问题提出以后通常几个小时内就能收到回复。不要因为觉着自己的问题太低级就不好意思开口求助，没有不能问的问题。无论使用者经验水平如何，我们都鼓励积极提问以确保安全使用。本节还包含了 **AAPS** 和 **AAPSClient**（其配套数据查看应用）常见故障的排查方案，并说明当**AAPS**系统出现技术故障时，如何向开发者发送**AAPS**数据（日志文件）进行分析。

第**10**节）**“[AAPS 高级功能选项](./AdvancedOptions/FullClosedLoop.md)”**该章节介绍了**AAPS**从混合闭环（_进餐等场景需手动推注_）过渡到全自动闭环（无需手动推注）的方法、[参数配置文件调整](./GettingHelp/ProfileTuning.md)和如何使用Autotune、发模式和工程模式。对绝大多数用户来说，**AAPS**的主版本（"Master"版）即可满足需求，但总会有些大牛，即便已经用的很好了，还想着继续折腾更深入的功能，这一节的内容主要是给他们看的。

第**11节）“[如何支持AAPS](SupportingAaps/HowCanIHelp.md)”**该章节介绍了如何为本项目提供支持。您可通过捐款、捐赠设备或贡献专业知识助力项目发展。也可自行提出或修改文档内容、协助[文档翻译](SupportingAaps/Translations.md)，并通过Open Humans项目共享个人数据。

**第12节) 资料**包含了很多文档，有的内容面向[临床医生](UsefulLinks/ClinicianGuideToAaps.md)等对**AAPS**之类的开源人工胰腺技术感兴趣的人，有的内容面向希望和医生交流相关信息的病人。这一节还有更多关于糖尿病和闭环的参考资料。本章节还包含了[术语表](./UsefulLinks/Glossary.md)，汇总 **AAPS **文档内所有缩写（简称）。举例来说，想知道ISF或TT代表什么意思就去这里找。


 ### 想要开始使用 **AAPS**? 请参阅[引言](Getting-Started/Introduction.md)部分进一步了解**AAPS**。

```{admonition} SAFETY NOTICE
:class: 安全提示
**AAPS**的安全性依赖于你的硬件装备（手机、泵、动态）的安全性能。请务必使用经FDA/CE认证且功能完整的胰岛素泵及动态血糖仪（CGM）。禁止使用损坏、改装或自制的胰岛素泵或动态血糖仪。泵和动态一定要使用原装或者厂商认证的耗材（助针器、管路和储药器）。非官方测试或改装配件可能导致数据误差及胰岛素输注错误，从而对使用者构成重大风险。 

请勿在使用SGLT-2抑制剂（格列净类药物）期间使用**AAPS**。此类药物会降低血糖水平。由于胰岛素输注量减少或血糖水平降低，可能增加糖尿病酮症酸中毒（DKA）或低血糖的风险。 
```

```{admonition} Disclaimer
:class: note
本文所述所有信息及代码仅供教育参考之用。使用 [Nightscout](https://nightscout.github.io/)及**AAPS**需自行承担风险，相关内容不可作为医疗决策依据。 Nightscout目前未针对HIPAA隐私合规性进行特别设计。 
- 文中来自 github.com 的代码未经正式授权也没有任何官方支持。更多细节请查阅本代码仓库的许可协议（LICENSE）。
- 所有产品、公司名称、商标、服务标识、注册商标和注册服务标志归其所有者所有。使用他们仅是作为信息传递目的，不暗示任何关联或官方认可。

AAPS 与以下公司无关联，也未得到其认可与授权：: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/), [Medtronic](https://www.medtronic.com/), [Diaconn](https://www.diaconn.com/en/index.html), [EOFlow](http://www.eoflow.com/), [MicroTech Medical (Equil)](https://www.microtechmd.com/), [Medtrum](https://www.medtrum.com/), [Senseonics (Eversense)](https://www.senseonics.com/), [i-SENS (CareSens)](https://i-sens.com/), [POCTech](https://poctechcorp.com/en/), [Ottai](https://ottai.com/) or [Syai](https://www.syai.com/)。

```

(index-aaps-documentation-index)=

## AAPS文档索引

```{toctree}
:caption: 文档使用手册
:titlesonly:

更改语言和版本 <./NavigateDoc/ChangeLanguageVersion.md>
检索文档内容
 <./NavigateDoc/SearchDoc.md>
文档更新 <./Maintenance/DocumentationUpdate.md>
```
```{toctree}
:caption: 1) 入门指南

AAPS简介 <./Getting-Started/Introduction.md>
前期准备工作 <./Getting-Started/PreparingForAaps.md>
组件概览 <./Getting-Started/ComponentOverview.md>
- 兼容的胰岛素泵 <./Getting-Started/CompatiblePumps.md>
- 兼容的CGMs <./Getting-Started/CompatiblesCgms.md>
- 兼容的手机  <./Getting-Started/Phones.md>
- 兼容的智能手表  <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 2) 构建AAPS APP

设置AAPS专用谷歌账户（可选）<./UsefulLinks/DedicatedGoogleAccountForAaps.md>
构建AAPS <./SettingUpAaps/BuildingAaps.md>
- 浏览器构建 <./SettingUpAaps/BrowserBuild.md>
- Android Studio构建 <./SettingUpAaps/ComputerBuild.md>
- CLI 命令行构建 <./SettingUpAaps/CLIBuild.md>
传输和安装AAPS <./SettingUpAaps/TransferringAndInstallingAaps.md>
```
```{toctree}
:caption: 3) 设置报告服务器

设置报告服务器 <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
```
```{toctree}
:caption: 4) 配置AAPS

设置向导 <./SettingUpAaps/SetupWizard.md>
AAPS个人资料 <./SettingUpAaps/YourAapsProfile.md>
更改 AAPS 配置 <./SettingUpAaps/ChangeAapsConfiguration.md>
- 配置（配置构建器） <./SettingUpAaps/ConfigBuilder.md>
- 设置 <./SettingUpAaps/Preferences.md>
完成目标 <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 5) AAPS 的日常使用

AAPS 界面 <./DailyLifeWithAaps/AapsScreens.md>
AAPS 主要功能 <./DailyLifeWithAaps/KeyAapsFeatures.md>
活性碳水计算 <./DailyLifeWithAaps/CobCalculation.md>
灵敏度检测 <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
动态ISF <./DailyLifeWithAaps/DynamicISF.md>
配置文件切换 & 配置文件百分比 <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
临时目标 <./DailyLifeWithAaps/TempTargets.md>
扩展碳水 <./DailyLifeWithAaps/ExtendedCarbs.md>
快速助手 <./DailyLifeWithAaps/QuickWizards.md>
场景 <./DailyLifeWithAaps/Scenes.md>
自动操作 <./DailyLifeWithAaps/Automations.md>
快速启动工具栏 <./DailyLifeWithAaps/QuickLaunch.md>
屏幕部件 <./DailyLifeWithAaps/Widgets.md>
食物数据库 <./DailyLifeWithAaps/Food.md>
全局搜索 <./DailyLifeWithAaps/GlobalSearch.md>
信息回顾 <./Maintenance/Reviewing.md>
AAPS在儿童中的应用 <./DailyLifeWithAaps/AapsForChildren.md>
胰岛素泵与管路 <./DailyLifeWithAaps/PumpsAndCannulas.md>
时区变更 & 夏令时 <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 6) AAPS 远程功能

远程监控 <./RemoteFeatures/RemoteMonitoring.md>
关注模式 <./RemoteFeatures/FollowingOnly.md>
车在模式 <./RemoteFeatures/AndroidAuto.md>
远程控制 <./RemoteFeatures/RemoteControl.md>
AAPSClient应用 <./RemoteFeatures/AapsClient.md>
主↔客户端控制 <./RemoteFeatures/ClientMasterControl.md>
短信指令 <./RemoteFeatures/SMSCommands.md>

```
```{toctree}
:caption: 7) Wear OS 智能手表

AAPS Wear OS 版本 <./WearOS/BuildingAapsWearOS.md>
智能手表使用<./WearOS/WearOsSmartwatch.md>
远程控制 <./RemoteFeatures/RemoteControlWearOS.md>
自定义表盘参考 <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
自定义表盘资源交换 <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 8) AAPS 维护

配置 导入 / 导出<./Maintenance/ExportImportSettings.md>
AAPS 版本更新日志<./Maintenance/ReleaseNotes.md>
AAPS v4 更新内容 <./Maintenance/V4Changes.md>
AAPS 版本升级 <./Maintenance/UpdateToNewVersion.md>
- 浏览器更新 (fork, AAPS-CI) <./Maintenance/UpdateBrowserBuild.md>
- Android Studio更新 <./Maintenance/UpdateComputerBuild.md>
End of life <./Maintenance/EndOfLife.md>

```

```{toctree}
:caption: 9) 帮助& 故障排查

AAPS 求助渠道<./GettingHelp/WhereCanIGetHelp.md>
故障排查（从这里开始）<./GettingHelp/GeneralTroubleshooting.md>
- 蓝牙故障排查 <./GettingHelp/BluetoothTroubleshooting.md>
- NSClient故障排查<./GettingHelp/TroubleshootingNsClient.md>
- Android Studio故障排查 <./GettingHelp/TroubleshootingAndroidStudio.md>
- 浏览器构建故障排查 <./GettingHelp/BrowserBuildTroubleshooting.md>
- 重新安装AAPS（新密钥） <./GettingHelp/ReinstallAaps.md>
- 访问日志文件 <./GettingHelp/AccessingLogFiles.md>
FAQ <./UsefulLinks/FAQ.md>
```

```{toctree}
:caption: 10) AAPS 高级选项

全闭环 <./AdvancedOptions/FullClosedLoop.md>
配置文件调校指南 <./GettingHelp/ProfileTuning.md>
Autotune <./AdvancedOptions/Autotune.md>
胰岛素浓度 <./AdvancedOptions/InsulinConcentration.md>
Dev分支 <./AdvancedOptions/DevBranch.md>
网页构建： cherry-pick版本 <./AdvancedOptions/BrowserBuildCherryPick.md>

```
```{toctree}
:caption: 11) 支持 AAPS 项目

如何帮助<./SupportingAaps/HowCanIHelp.md>
文档编辑 <./SupportingAaps/HowToEditTheDocs.md>
应用与文档翻译 <./SupportingAaps/Translations.md>
翻译状态 <./SupportingAaps/StateOfTranslations.md>
Open Humans 数据上传 <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 12) 资料

术语表 <./UsefulLinks/Glossary.md>
糖尿病与闭环资料 <./UsefulLinks/BackgroundReading.md>
临床医生参考 <./UsefulLinks/ClinicianGuideToAaps.md>
```
