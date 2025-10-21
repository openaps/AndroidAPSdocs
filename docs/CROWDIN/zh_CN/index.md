# 欢迎使用 AAPS 说明文档

![image](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

14/08/2025 : Version 3.3.2.1 is out. Check the [Release Notes](#latestrelease) to see what's new and get update instructions.

```

Android APS (**AAPS**) 是一个开放源码的安卓应用程序，适用于糖尿病依赖型（I型）糖尿病患者。 是一款可以在安卓智能手机上运行的人工胰腺控制软件。 其主要功能是通过运用OpenAPS算法来模拟正常的胰腺功能：通过自动胰岛素输注（Automated Insulin Dosing，AID）将血糖水平保持在正常限度内。 使用**AAPS**要用到**3种**设备：**(1)**一部安卓手机，**(2)**动态血糖仪（CGM），**(3)**经过FDA/CE认证的胰岛素泵。 另外，如果你希望远程控制AAPS、远程存储查看相关数据，你还需要**(4)**相应的云服务器，以及**(5)**一块智能手表。

本文档解释了如何设置和使用 **AAPS**。 您可以通过左侧的菜单浏览 **AAPS** 文档(以及方便的"**搜索文档**"功能)， 或者使用此页面底部的 [索引](#index-aaps-documentation-index)进行导航。

## AAPS 文档概述(“说明书”)

**第2节“入门”**， [简介](Getting-Started/Introduction.md) 部分对人工胰腺系统（APS）的设计初衷作了详细说明。 概述了闭环的背景， **AAPS** 的开发初衷，并把 **AAPS** 与其他类似系统进行了比较，对一些使用安全问题做了声明。 该章节提供了与医疗团队沟通 **AAPS**使用的建议。解释了为什么您需要自己去构建（build，将软件源代码转换为可以安装和运行的应用程序的过程） **AAPS** 应用，而非直接下载安装，并说明了**AAPS**系统的典型设备连接方式。 同时涵盖无障碍使用设计及**AAPS**适用人群说明。

[​​AAPS准备工作](./Getting-Started/PreparingForAaps.md)章节详细介绍了更多关于安全考量，以及与**AAPS**兼容的手机、动态血糖仪（CGM，Continuous Glucose Monitors）和胰岛素泵。 这部分内容概述了您将经历的流程，并提供了实现 **AAPS** 全部功能的大致时间表。（安全起见，有些功能是需要您完成一些学习和使用的小任务之后才会开放，比如闭环功能） 本节帮助您在技术上做好准备，以便尽可能快速高效地搭建**AAPS**系统。 [动态血糖仪（CGM）配置](./Getting-Started/CompatiblesCgms.md)这一小节解释了如何优化动态血糖仪（CGM）设置，以及数据平滑选项的最优配置方法。

现在，您已充分了解整个流程，可以开始组建您的**AAPS**闭环系统了。

第3节**设置AAPS** 包含具体的分步操作说明。 It covers choosing and [setting up your reporting server](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout or Tidepool) so you can review and share your data, getting ready for building the AAPS app, building the AAPS app and transferring the AAPS app to your phone. 同时指导您通过“设置向导”来完成 **AAPS** 应用的初始化配置，将其与动态血糖仪（CGM）应用及真实/虚拟胰岛素泵进行联动，并将 **AAPS** 连接到您的远程数据服务器。 接下来，您将通过一个安全审慎的分阶段训练流程，一步一步地掌握**AAPS**的全部功能，该流程旨在确保您/您的孩子能完全熟悉并熟练操作所有不同层级的功能和菜单设置，然后才进入下一阶段（AAPS界面上称之为"目标（Objectives）"）。 这些目标（Objectives）都经过专门的设计，将循序渐进地解锁**AAPS**更多可能性，最终实现从开环模式向闭环模式的过渡。

第4节**AAPS的日常** 涵盖 **AAPS** 的关键功能，帮助您使用（和自定义）**AAPS**。 内容包括理解操作界面、活性碳水（COB，carbs-on-board）、敏感度、配置文件（profile）切换、临时目标（TT，temp targets）、扩展碳水（extended carbs，eCarbs）、自动化规则（automations）和动态ISF（DynamicISF）。 同时涉及常见主题，例如如何管理不同类型的餐食、处理管路（cannula）与探头（sensor）更换、智能手机更新、夏令时调整、[使用AAPS旅行](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md)及运动场景。 常见问答详见故障排查章节。

**第5节[远程 AAPS 功能](./RemoteFeatures/RemoteControl.md)** 强调了 **AAPS** 的真正优势。 用户可通过多种方式远程发送指令或单纯查看**AAPS**数据， 该功能既适用于想用 **AAPS**孩子血糖的家长，也便于成年糖尿病患者通过智能手表、车载设备_等_多端便捷监测血糖及其他指标，同时支持重要亲友共同查看数据。 这一节还提供了Android Auto的使用指南，实现车载血糖监测。

**第6节 Wear OS的智能手表** 讲的是如何搭配**Android Wear OS**系统的智能手表，来使用**AAPS**专属表盘或自定义表盘，既可以作为手机远程控制器，也可以作为显示终端。


第7节 **AAPS的维护** 讲述了如何导出和备份您的设置（手机丢失或损坏时不至于抓瞎），提供了最新版本说明及**AAPS**更新操作指南 。 预计每年发布1个新版本及2-3次强制更新， 跟其他所有软件一样，您需要及时更新**AAPS**以修复潜在问题并优化系统性能。 本节设有“更新”问题排查专区，解答常见疑问。

第8节** [获取帮助指南](GettingHelp/WhereCanIGetHelp.md)**将引导您快速找到**AAPS**的技术支持资源。 该指南能帮助您快速联系社区成员，解答疑问并规避常见问题。 尽管很多人已经顺利用上了**AAPS**，但遇到疑难时仍需寻求帮助。 得益于庞大的用户群，问题提出以后通常几个小时内就能收到回复。 不要因为觉着自己的问题太低级就不好意思开口求助，没有不能问的问题。 无论使用者经验水平如何，我们都鼓励积极提问以确保安全使用。 本节包括 **AAPS** 和 **AAPSClient**（其配套数据查看应用）常见故障的排查方案，并说明当**AAPS**系统出现技术故障时，如何向开发者发送**AAPS**数据（日志文件）进行分析。

**第9节**涵盖了**高级AAPS选项**的内容，比如如何从使用**AAPS**进行混合闭环（需手动注射餐时大剂量_等_）进阶至全闭环模式（无需手动注射大剂量），以及开发和工程模式的细节。 对绝大多数用户来说，**AAPS**的主版本（"Master"版）即可满足需求，但总会有些大牛，即便已经用的很好了，还想着继续折腾更深入的功能，这一节的内容主要是给他们看的。

在**第10节[如何支持AAPS](SupportingAaps/HowToEditTheDocs.md)**，我们提供了一些有用的信息，以便您能为这个项目提供一些支持。 您可通过捐款、捐赠设备或贡献专业知识助力项目发展。 也可自行提出或修改文档内容、协助[文档翻译](SupportingAaps/Translations)，并通过Open Humans项目共享个人数据。

**第11节 资料**包含了很多文档，有的内容面向对**AAPS**之类的开源人工胰腺技术感兴趣的[临床医生](UsefulLinks/ClinicianGuideToAaps.md)，有的内容面向希望和医生交流相关信息的病人。 这一节还有更多关于糖尿病和闭环的参考资料。 包括[术语表](./UsefulLinks/Glossary.md)，也就是**AAPS** 中使用的缩写(或简称)清单。 举例来说，想知道ISF或TT代表什么意思就去这里找。


 ### 想要开始使用 **AAPS**? 请参阅[引言](Getting-Started/Introduction.md)部分进一步了解**AAPS**。

```{admonition} SAFETY NOTICE
:class: danger
**AAPS**的安全性依赖于你的硬件装备（手机、泵、动态）的安全性能。 请务必使用经FDA/CE认证且功能完整的胰岛素泵及动态血糖仪（CGM）。 禁止使用损坏、改装或自制的胰岛素泵或动态血糖仪。 泵和动态一定要使用原装或者厂商认证的耗材（助针器、管路和储药器）。 非官方测试或改装配件可能导致数据误差及胰岛素输注错误，从而对使用者构成重大风险。 

请勿在使用SGLT-2抑制剂（格列净类药物）期间使用**AAPS**。 此类药物会降低血糖水平。由于胰岛素输注量减少及血糖水平降低，可能增加糖尿病酮症酸中毒（DKA）及低血糖风险。 
```

```{admonition} Disclaimer
:class: note
本文所述所有信息及代码仅供教育参考之用。 使用 [Nightscout](https://nightscout.github.io/)及**AAPS**需自行承担风险，相关内容不可作为医疗决策依据。 Nightscout目前未针对HIPAA隐私合规性进行特别设计。 
- 文中来自 github.com 的代码未经正式授权也没有任何官方支持。 更多细节请查阅本代码仓库的许可协议（LICENSE）。
- 所有产品、公司名称、商标、服务标识、注册商标和注册服务标志归其所有者所有。 使用他们仅是作为信息传递目的，不暗示任何关联或官方认可。

请注意 - 本项目与以下机构或个人没有任何关系，亦未获得其认可：[SOOIL-秀逸](http://www.sooil.com/eng/), [Dexcom-德康](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care-罗氏](https://www.accu-chek.com/)，[Insulet](https://www.insulet.com/)以及 [Medtronic-美敦力](https://www.medtronic.com/)。

```

(index-aaps-documentation-index)=

## AAPS文档索引

```{toctree}
:caption: 1) 切换语言

切换语言 <./NavigateDoc/ChangeLanguage.md>
切换版本 <./NavigateDoc/ChangeVersion.md>
```
```{toctree}
:caption: 2) 入门

AAPS简介 <./Getting-Started/Introduction.md>
准备使用AAPS <./Getting-Started/PreparingForAaps.md>
设备概览 <./Getting-Started/ComponentOverview.md>
- 兼容的胰岛素泵 <./Getting-Started/CompatiblePumps.md>
- 兼容的动态（CGM） <./Getting-Started/CompatiblesCgms.md>
- 兼容的手机  <./Getting-Started/Phones.md>
- 兼容的手表  <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 3) Setting up AAPS

Setting up the reporting server <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
Building AAPS <./SettingUpAaps/BuildingAaps.md>
- Browser Build <./SettingUpAaps/BrowserBuild.md>
- Computer Build <./SettingUpAaps/ComputerBuild.md>
Transferring and Installing AAPS <./SettingUpAaps/TransferringAndInstallingAaps.md>
Setup Wizard <./SettingUpAaps/SetupWizard.md>
Your AAPS Profile <./SettingUpAaps/YourAapsProfile.md>
Change AAPS configuration <./SettingUpAaps/ChangeAapsConfiguration.md>
- Config Builder <./SettingUpAaps/ConfigBuilder.md>
- Preferences <./SettingUpAaps/Preferences.md>
Completing the objectives <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 4) AAPS的日常

AAPS 界面 <./DailyLifeWithAaps/AapsScreens.md>
AAPS关键功能 <./DailyLifeWithAaps/KeyAapsFeatures.md>
COB的计算 <./DailyLifeWithAaps/CobCalculation.md>
敏感性检测 <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
配置文件切换 & 配置文件百分比 <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
临时目标（Temp-Targets） <./DailyLifeWithAaps/TempTargets.md>
扩展碳水（Extended carbs） <./DailyLifeWithAaps/ExtendedCarbs.md>
自动化规则（Automations） <./DailyLifeWithAaps/Automations.md>
动态胰岛素敏感系数（Dynamic ISF） <./DailyLifeWithAaps/DynamicISF.md>
将AAPS用于儿童 <./DailyLifeWithAaps/AapsForChildren.md>
泵与管路（cannulas） <./DailyLifeWithAaps/PumpsAndCannulas.md>
跨时区旅行 & 夏令时 <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 5) 远程 AAPS 功能

远程监控 <./RemoteFeatures/RemoteMonitoring.md>
远程控制 <./RemoteFeatures/RemoteControl.md>
手机短信命令 <./RemoteFeatures/SMSCommands.md>
仅跟踪模式 <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>

```
```{toctree}
:caption: 6) Wear OS 智能手表

适用于Wear OS的AAPS <./WearOS/BuildingAapsWearOS.md>
使用智能手表 <./WearOS/WearOsSmartwatch.md>
远程控制 <./RemoteFeatures/RemoteControlWearOS.md>
自定义表盘参数 <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
自定义表盘交换网站 <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 7) Maintenance of AAPS

Export/Import Settings <./Maintenance/ExportImportSettings.md>
Reviewing your data <./Maintenance/Reviewing.md>
AAPS Release Notes <./Maintenance/ReleaseNotes.md>
Documentation updates <./Maintenance/DocumentationUpdate.md>
Updating to a new version of AAPS <./Maintenance/UpdateToNewVersion.md>
- Browser Update <./Maintenance/UpdateBrowserBuild.md>
- Computer Update <./Maintenance/UpdateComputerBuild.md>

```

```{toctree}
:caption: 8) 寻求帮助

去哪里寻找帮助 <./GettingHelp/WhereCanIGetHelp.md>
常见故障排查 <./GettingHelp/GeneralTroubleshooting.md>
Android Studio故障排查 <./GettingHelp/TroubleshootingAndroidStudio.md>
获取日志 <./GettingHelp/AccessingLogFiles.md>
```

```{toctree}
:caption: 9) 高级AAPS选项

全闭环（Full Closed Loop） <./AdvancedOptions/FullClosedLoop.md>
开发分支（Dev branch） <./AdvancedOptions/DevBranch.md>
自动调校（Autotune） <./AdvancedOptions/Autotune.md>

```
```{toctree}
:caption: 10) 如何支持 AAPS

如何提供帮助 <./SupportingAaps/HowCanIHelp.md>
编辑文档 <./SupportingAaps/HowToEditTheDocs.md>
参与应用和文档的翻译 <./SupportingAaps/Translations.md>
翻译声明 <./SupportingAaps/StateOfTranslations.md>
Open Humans项目上传 <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 11) 资料

术语表 <./UsefulLinks/Glossary.md>
FAQ <./UsefulLinks/FAQ.md>
常用糖尿病和闭环资料 <./UsefulLinks/BackgroundReading.md>
为AAPS建立专用Google账户 (可选)<./UsefulLinks/DedicatedGoogleAccountForAaps.md>
临床医生参考 (已过期) <./UsefulLinks/ClinicianGuideToAaps.md>
```