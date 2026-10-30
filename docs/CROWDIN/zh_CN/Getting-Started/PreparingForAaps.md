# 准备开始使用AAPS

欢迎使用本文档。 This documentation aims to guide users who are preparing to set up and start using the Android Artificial Pancreas System (**AAPS**).

## 在文档中查找信息

您可以在[此处](../index.md)找到文档的**索引**和结构说明，也可以通过点击文档左上角**AAPS**图标来访问。该索引页面提供各版块功能的概览，您还可以使用本页左侧的标题来浏览文档。最后，在**AAPS**符号的正下方，有一个实用的搜索功能。

我们的目标是让您能够轻松了解**AAPS**的功能和局限性。在投入时间阅读文档后发现，您可能没有兼容的胰岛素泵或连续血糖监测（CGM）设备，或者**AAPS**提供的功能与您的期望不同，这可能会让您感到失望。

在实时使用**AAPS**时，**AAPS**文档中的许多与体验相关的细节会更有意义。就像仅仅通过阅读规则很难学会一项运动一样，学习如何安全操作**AAPS**的基础规则，并在开始使用**AAPS**时学习如何最好地应用这些规则，需要两者的结合。

(preparing-safety-first)=

## 安全第一
“能力越大，责任越大…”

### 技术安全
**AAPS**拥有一系列广泛的安全特性。这些限制条件是通过分阶段完成一系列的[目标](../SettingUpAaps/CompletingTheObjectives.md)逐步解除的，这些目标涉及测试特定参数和回答选择题。随着**AAPS**的各个目标成功完成，其功能也会逐步解锁。这个过程允许用户分阶段从开环安全过渡到闭环，同时学习**AAPS**的不同功能。

[目标](../SettingUpAaps/CompletingTheObjectives.md)旨在为用户提供最佳的**AAPS**入门体验，在设计时考虑了**AAPS**开发者观察到的新用户常见的错误和普遍趋势。错误可能会发生，因为初学者缺乏经验且过于急切地想要开始使用**AAPS**, 或者忽略了关键点。 The [Objectives](../SettingUpAaps/CompletingTheObjectives.md) aim to minimize these issues.

### 医疗安全
```{admonition} Avoid permanent and painful damage to your eyes and nerves
:class:危险
关于血糖控制的迅速改善和糖化血红蛋白（HbA1c）水平的降低，建议谨慎行事 
```

一个重要的安全考虑是，**对于那些血糖水平已经升高了一段时间的人来说，糖化血红蛋白（HbA1c）的快速降低和血糖控制的改善可能会造成永久性损害**。 Many people with diabetes are unaware of this, and not all clinicians make their patients aware of this issue.

这种损害可能包括**视力丧失和永久性神经病变（疼痛）**。通过更缓慢地降低平均血糖水平，可以避免这种损害发生。如果您目前的 HbA1c 偏高，并准备改用 **AAPS**（或任何其他闭环系统），_请_在开始之前与您的临床团队讨论这一潜在风险，并与他们商定一个时间计划。 You can easily set higher glucose targets in **AAPS** initially (currently, the highest target you can select is 11.1 mmol/L but you can also maintain a purposefully weak profile if needed), and then reduce the target as the months pass.

#### 在不造成永久性损害的情况下，能多快降低我的糖化血红蛋白（HbA1c）水平？

一项包含76名患者的回顾性[研究](https://pubmed.ncbi.nlm.nih.gov/1464975/)报告指出，如果在6个月内糖化血红蛋白（HbA1C）分别下降1%、2%或3%，则视网膜病变进展的风险将分别增加1.6倍、2.4倍和3.8倍。他们建议，“在任何6个月期间，糖化血红蛋白（HbA1c）的降低幅度应限制在2%以内，以防止视网膜病变的进展......在血糖控制开始时降低过快可能导致视网膜病变的进展严重或暂时加剧。”

请注意 If you use different HbA1c units (mmol/mol rather than %), click [here](https://www.diabetes.co.uk/hba1c-units-converter.html) for an HbA1c calculator tool.

在另一项包含954名患者的回顾性[评估](https://academic.oup.com/brain/article/138/1/43/337923)中，研究人员注意到：

**“在3个月内，糖化血红蛋白（HbA1c）下降2–3%时，糖尿病患者发生治疗诱发性神经病变的绝对风险为20%；而HbA1c在3个月内下降超过>4%时，糖尿病患者发生治疗诱发性神经病变的绝对风险则超过80%。”**

关于这项工作的[评论](https://academic.oup.com/brain/article/138/1/2/340563)认为，为避免并发症，**目标应该是在3个月内将A1c降低<<2%。**您可以在[此处](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6587545/pdf/DOM-21-454.pdf)和[此处](https://www.mdpi.com/1999-4923/15/7/1791)阅读有关该主题的其他评论。

It is generally recognized that _newly_ diagnosed type 1 diabetics (who often have very high HbA1c at diagnosis, before starting insulin therapy) appear to be able to rapidly reduce their HbA1c immediately after diagnosis without encountering these risks to the same extent, because they have not had elevated blood glucose levels for such a sustained period. 然而，这仍然是一个需要你与临床医生讨论的问题。

(PreparingForAaps-no-sglt-2-inhibitors)=
### 不要使用SGLT-2抑制剂

```{admonition} NO SGLT-2 inhibitors
:class:危险
SGLT-2抑制剂，也称为格列净类药物，可抑制肾脏对葡萄糖的重吸收。格列净类药物（Gliflozins）能够极大地降低血糖水平，因此，在使用AAPS等闭环系统时，您绝对不能服用它们！这将存在发生酮症酸中毒和/或低血糖的重大风险！将这种药物与降低基础率以增加血糖（BG）的系统结合使用尤其危险。 

In a nutshell:
- **Example 1: risk of Hypo**
>During lunch, you use **AAPS** to bolus based on consuming 45 g of glucose. The problem is that, unbeknownst to AAPS, the inhibitors cause the body to eliminate some of the carbs. This leaves your body with too much insulin compared to the absorbed carbs, resulting in hypoglycemia.

- **Example 2: risk of Ketoacidosis**
>The inhibitors eliminate some of the carbs in the background, causing a reduction in your BG. **AAPS** will automatically instruct the pump to decrease insulin intake, including basal. Over time this can result in your BG remaining below target value, to the point where the body does not have enough background insulin to absorb any carbs, resulting in ketoacidosis. Ordinarily, ketoacidosis develops in T1D patients because their pump fails, which would trigger alerts on their phone and be noticeable due to a high BG value. However, the danger with gliflozins is that there would be no AAPS alerts, as the pump remains operational and the BG potentially remains within target.

SGLT-2抑制剂的常见商品名包括：Invokana、Farxiga、Jardiance、Glyxambi、Synjardy、Steglatro和Xigduo XR等，还有其他一些品牌。
```


### 使用AAPS进行闭环控制的关键原则

在使用**AAPS**之前，必须理解闭环控制的关键原则和理念。这需要通过投入个人的时间来阅读**AAPS**的文档，并完成旨在为您提供安全有效使用**AAPS**平台的目标来实现。 **AAPS**的文档量可能一开始看起来非常庞大，但请保持耐心并相信这个过程——采用正确的方法，你一定能掌握它！

进步的速度将因人而异，但要知道，完成所有目标通常需要6到9周的时间。 Many people start to build, install and set up **AAPS** well in advance of starting to use it. 为了辅助这一过程，该系统有一个“虚拟泵”，可以在完成早期目标时使用，这样你就可以在不实际使用它来输注胰岛素的情况下熟悉**AAPS**。 A detailed breakdown of the timeline is given below, be aware that by objective 7 of **AAPS** you are closed looping, the later objectives add in additional features like **SMB** and **automations** which are useful to some users, but not essential to the core function of **AAPS**.

成功使用**AAPS**需要采取积极主动的方法，愿意分析血糖数据，并根据需要灵活调整**AAPS**的设置，以改善你的健康状况。单靠阅读规则几乎不可能学会一项运动，**AAPS**也是如此。

#### 为设置和运行过程中的延迟和小问题做好准备。

在刚开始使用**AAPS**的初步阶段，你可能会遇到一些困难，比如闭环体系中的各个组件之间（以及可能的关注者之间）无法有效通信，以及在微调你的设置时遇到问题。有些问题只有在日常生活中使用**AAPS**时才能解决，但在Facebook小组和Discord上有大量的帮助资源可供利用。请相应地做好计划，并选择“合适”的时间，比如周末的一个安静的早晨（即不是深夜或你疲惫的时候，也不是在大型会议或旅行之前），来进行故障排除和解决问题。

#### 技术兼容性

**AAPS**仅与特定类型的胰岛素泵、连续血糖监测仪（CGM）和手机兼容，并且某些技术可能在不同国家无法使用。为了避免任何失望或沮丧，请仔细阅读关于[CGM](../Getting-Started/CompatiblesCgms.md)（连续血糖监测仪）、[胰岛素泵](../Getting-Started/CompatiblePumps.md)和[手机](../Getting-Started/Phones.md)的部分。

#### 应用程序构建时间以及进展到完全闭环

构建**AAPS**（AndroidAPS）应用程序的时间取决于你的专业水平和技术能力。对于没有经验的用户来说，构建**AAPS**通常需要半天到一天的时间（如果得到社区的帮助的话）。随着你经验的积累，构建新版本**AAPS**的过程将会显著加快。

Several parts of this documentation are dedicated to helping you through the build process:

- [Building AAPS](../SettingUpAaps/BuildingAaps.md) takes you step-by-step through building the app and installing it on your phone;

- the [FAQ](../UsefulLinks/FAQ.md) answers common questions and explains the errors most likely to occur; and

- the [Troubleshooting](../GettingHelp/GeneralTroubleshooting.md) hub collects solutions to the most frequent problems, organised by topic.

How long it takes to get to closed looping depends on the individual; an approximate timeline for reaching full looping with **AAPS** is given [below](#preparing-how-long-will-it-take).


#### 密钥库&和配置设置导出文件

一个“.jks文件”（密钥库）是一个密码加密的文件，它对你自己的**AAPS**副本是唯一的。你的Android手机使用它来确保没有其他人能够在没有密钥库的情况下升级你自己的AAPS副本。简而言之，作为**AAPS**构建的一部分，你应该：

1.  Save your keystore file (.jks file used to sign your app) in a safe place;

2.  记下你密钥库文件的密码。

How you save the keystore depends on your build method:

- **Android Studio (computer) build**: the keystore is created during the build — see [Generate signed APK](#Building-APK-generate-signed-apk) for instructions on where to save it.
- **AAPS Builder**: keep the backup file `aaps-keystore.jks` the setup page offered when you created your key, with its password and alias. If you uploaded your own keystore, keep that file.
- **Browser build with a fork**: use the dedicated [Export keystore](#ci-keystore-export) workflow to download a copy to your Google Drive.

这将确保你每次创建**AAPS**的更新版本时，都能使用完全相同的密钥库文件。平均每年需要进行2次**AAPS**更新。

此外，**AAPS**提供了[导出所有配置设置](../Maintenance/ExportImportSettings.md)的功能。这确保了你可以在更换手机、升级/重新安装应用程序时，以最小的干扰安全地恢复你的系统。 

#### 故障排除

如果你有任何不确定的地方，请随时联系AAPS社区——没有问题是愚蠢的！我们鼓励所有不同经验水平的用户提问。由于**AAPS**用户众多，通常问题的回复速度很快。

##### [在AAPS Facebook群组中提问。](https://www.facebook.com/groups/AndroidAPSUsers/)

##### [在AAPS Discord频道中提问。](https://discord.gg/4fQUWHZ4Mw)





#### [去哪里寻求帮助](../UsefulLinks/BackgroundReading.md)？

本节旨在为新用户提供资源链接，以便他们能够获得帮助，包括访问由新用户和经验丰富的用户组成的社区支持。这些用户可以帮助解答问题，并解决在使用AAPS时通常会遇到的陷阱或难题。

#### [临床医生部分](../UsefulLinks/ClinicianGuideToAaps.md)

此处为[专为临床医生设计的章节](../UsefulLinks/ClinicianGuideToAaps.md)，旨在帮助其深入了解AAPS（Android人工胰腺系统）及开源人工胰腺技术。在引言部分还提供了[如何与你的临床团队沟通](#introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team)的指导。

## 我们要构建和安装什么？

该图提供了**AAPS**系统的关键组件（包括硬件和软件）的概览：

![preparing_overview](../images/preparing_images/AAPS_preparing_overview_01.png)


除了三个基本的硬件组件（手机、泵、葡萄糖传感器）之外，我们还需要： 1) **AAPS**应用 2) 一个报告服务器以及 3)一个连续葡萄糖监测（CGM）应用

### 1)Android手机应用程序：**AAPS**

**AAPS** is an app that runs on Android smartphones & devices. 您将按照逐步指南自行构建**AAPS**应用程序（一个apk文件）。具体步骤包括：从GitHub下载**AAPS**源代码，在您的计算机上安装必要的程序（如Android Studio和GitHub Desktop），并构建您自己的**AAPS**应用程序副本。然后，您将通过电子邮件、USB线缆_等_方式将**AAPS**应用程序传输到您的智能手机上并进行安装。

### 2) A reporting server: Nightscout (Tidepool*)

In order to fully take advantage of **AAPS**, you need to set up a Nightscout server. 您可[自行操作](https://nightscout.github.io/nightscout/new_user/#free-diy)，或选择支付少量费用使用[托管式Nightscout服务](https://nightscout.github.io/#nightscout-as-a-service)代您完成配置。 Nightscout用于随时间收集来自**AAPS**的数据，并能够生成将连续葡萄糖监测（CGM）和胰岛素模式相关联的详细报告。护理人员也可以使用Nightscout与**AAPS**应用程序进行远程通信，以监督其孩子的糖尿病管理。这种远程通信功能包括实时监测血糖和胰岛素水平、远程注射胰岛素（通过短信）以及录入碳水。 Attempting to analyze your diabetes performance by looking at CGM data separately from the pump data is like driving a car where the driver is blind and the passenger describes the scene. Tidepool is also available as an alternative to Nightscout.

### 3）CGM传感器应用

根据你的葡萄糖传感器/连续葡萄糖监测（CGM）设备，你需要一个兼容的应用来接收血糖读数并将它们发送给**AAPS**。不同的选项如下所示，更多信息可以在[兼容的CGM部分](../Getting-Started/CompatiblesCgms.md)中找到：

![dexcom_options](../images/preparing_images/AAPS_connectivity_Dex_02.png) ![libre_options](../images/preparing_images/AAPSconnectivity_libre.png) ![eversense_options](../images/preparing_images/AAPS_connectivity_eversense.png)

### **AAPS**系统维护

**Nightscout**和**AAPS**都必须每年更新大约一次，因为会发布改进后的版本。在某些情况下，更新可以推迟进行；但在其他情况下，为了安全起见，强烈推荐或认为更新是必不可少的。关于这些更新的通知将在Facebook群组和Discord服务器上发布。发布说明将明确说明具体的情况。在更新期间，可能会有很多人问与您类似的问题，您将获得进行更新的支持。

(preparing-how-long-will-it-take)=
## 设置好一切需要多长时间？

如前所述，使用**AAPS**更像是一段需要投入个人时间的“旅程”。这不是一次性的设置。目前，构建**AAPS**、安装和配置**AAPS**和**CGM**软件，以及实现从开环到使用**AAPS**的混合闭环，总体估计大约需要4到6个月的时间。因此，建议您优先考虑尽快构建**AAPS**应用并尽早完成初期目标，即使您目前还在使用不同的胰岛素输注系统（在完成第五个目标之前，您可以使用虚拟泵）。

部分目标需要一定的天数来确保您能够理解并熟悉新功能。 It is not possible to bypass this waiting time; these minimum waiting times have been set for your own safety.

以下是一个大致的时间框架：

| 任务                                            |    预估时间    |
| --------------------------------------------- |:----------:|
| 初步阅读文档                                        |   1-2 天    |
| Configuring GitHub to allow the browser build | 1-4 hours  |
| 设置报告服务器                                       |    1 小时    |
| Installing a CGM app (xDrip, BYODA, …)        |    1 小时    |
| Configuring CGM → xDrip → APPS initially      |    1 小时    |
| 初步配置AAPS→泵                                    |    1 小时    |
| 配置AAPS→Nightscout/Tidepool（仅用于报告）             |    1 小时    |
| 可选：配置NightScout ↔**AAPS**&NSFollowers的互联。     |    1 小时    |
| 目标1：设置可视化和监控                                  |    1 小时    |
| 目标2：学习如何控制AAPS                                |    2 小时    |
| 目标3：证明您的知识                                    |   最多14天    |
| 目标4：开始开环操作                                    |    至少7天    |
| 目标5：理解您的开环操作                                  |    7 天     |
| 目标6：开始闭环操作（低血糖暂停）                             | 至少5天，最多14天 |
| 目标7：调整闭环设置                                    | 至少1天，最多7天  |
| 目标8：调整基础率和比例，启用Autosens（自动敏感度调节）              | 至少7天，最多14天 |
| 目标9：启用超级微小大剂量（SMB）                            |   最少28天    |
| 目标10：自动化                                      |   最少28天    |

一旦您全面使用**AAPS**系统，您仍然需要定期微调您的设置，以改善您的整体糖尿病管理。

## 要求

### 医疗考虑

除了[安全部分](#preparing-safety-first)中的医疗警告外，根据您在泵中使用的胰岛素类型，还会有不同的参数设置。

#### 胰岛素选择

**AAPS**（AndroidAPS）的计算是基于胰岛素浓度为100单位/毫升（与泵的标准相同）来进行的。 You configure your insulin in **Manage → Insulin settings**: set its **Peak** and **DIA**, or use **Load peak from** to fill in the standard peak time of one of the presets:

- **Novorapid** (also for Humalog and NovoLog)
- **Fiasp**
- **Lyumjev(超速效赖脯胰岛素)**

Advanced users can enter any peak time (35 to 120 minutes) directly, for example for a mixture of insulins. See [Insulin settings](#Config-Builder-insulin).


### 技术性

本文档旨在将所需的技术专业知识减少到绝对最低限度。 To build the **AAPS** app, you have several options — see [Building AAPS](../SettingUpAaps/BuildingAaps.md) for an overview:

- **Browser build** (recommended): build the app directly from your smartphone using GitHub Actions, with no computer or Android Studio required. With [AAPS Builder](../SettingUpAaps/BrowserBuildAapsBuilder.md) you only need a GitHub account: you download the app directly from GitHub. The fork method also needs a Google account to store the app in your Google Drive.
- **Android Studio build**: build the app on your computer using Android Studio. This is mostly used by developers who intend to make code changes.
- **Command-line build**: for users who prefer to build locally without installing Android Studio.

Beyond building the app, you also need to set up a reporting server, configure several Android phone apps and develop expertise in diabetes management. This can be achieved by moving step-by-step, being patient, and with help from the **AAPS** community. If you are already able to navigate the internet and manage your own Gmail emails, building **AAPS** is a feasible task. 慢慢来，不用着急。

### 智能手机

#### AAPS与Android版本

The current version of **AAPS** (4.0) requires an Android smartphone with Google **Android 12.0 or above**. 如果你正考虑购买一部新手机（截至 2026 年 1 月），建议首选 Android 16 系统。<br/>出于安全原因，强烈建议用户保持其 **AAPS** 构建版本处于最新状态。但是，对于无法使用Android 12.0或更高版本设备的用户，仍然可以使用与旧版Android兼容的**AAPS**早期版本，请参阅：[发行说明](#maintenance-android-version-aaps-version)。

#### 智能手机型号选择
您购买的具体型号取决于所需的功能。您可以在[手机页面](../Getting-Started/Phones.md)上找到关于工作配置的建议和用户反馈。

鼓励用户保持其手机Android版本的更新，包括安全参数方面。然而，如果您是**AAPS**的新用户或者不是技术专家，您可能想要在我们的各个论坛上等待其他人更新手机并确认安全后，再进行更新。

```{admonition} Delaying Samsung phone updates
:class: warning
Samsung has an unfortunate track record of forcing updates on their phones, which can cause Bluetooth connectivity issues. To disable these forced updates, you need to switch the phone to "developer mode":

1. Go to **Settings** > **About phone** > **Software information**, then tap **Build number** until it confirms you have unlocked developer mode.
2. Go back to the main **Settings** menu, where you should see a new **Developer options** menu item.
3. Open **Developer options**, scroll to find **Auto system update**, and turn it off.
```

```{admonition} Google Play Protect potential issue
:class:警告
有多份报告称，**AAPS**每天早上都会被Google Play Protect任意关闭。 If this happens, you will have to go to the Google Play options and disable **Google Play Protect**. Not all phone models or all Android versions are affected.
```

```{admonition} Android developer verification
:class: note
From September 2026, Google is gradually introducing [Android developer verification](#android-developer-verification), which changes how a self-built app is installed on the phone. Building **AAPS** is not affected, and free installation methods remain available — see the linked page for details.
```

