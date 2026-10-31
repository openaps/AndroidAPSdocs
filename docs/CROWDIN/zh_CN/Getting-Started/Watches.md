# 智能手表与AAPS

各种智能手表可用于显示**AAPS**中的一些信息或执行远程操作。

使用完整的Android手表（被视为小型[智能手机](./Phones.md)）可以实现智能手表直接控制**AAPS**（泵和传感器）。

一些智能手表可以允许您输入治疗信息或其他更多内容，但**AAPS**的管理仍然需要依靠手机本身。

智能手表在**AAPS**中的应用越来越广泛，无论是对于成人糖尿病患者还是对于儿童糖尿病患者的照料者/父母来说_都是如此_。

## 使用智能手表与**AAPS**结合的一般优势


智能手表-根据型号的不同-可以与**AAPS**以许多不同的方式结合使用。它们可以用来完全或部分控制**AAPS**，或者仅仅用来远程检查血糖水平、活性胰岛素量和其他参数。

在许多情况下，将智能手表与**AAPS**集成在一起都很有用，比如在开车或骑自行（摩托）车以及锻炼期间。 Some people feel that looking at a watch (in a meeting, party, dinner table etc.) is more discreet than looking at a phone. From a security perspective, a smartwatch can also be beneficial while on the move, enabling the user to keep their **AAPS** phone stored out of sight (like inside a bag), while still using the smartwatch for remote control.

## 对于使用**AAPS**的父母/照料者来说的具体优势

对于孩子来说——如果他们的**AAPS**手机在附近——照料者可以使用智能手表进行监测或修改，而无需使用**AAPS**手机。例如，如果**AAPS**手机被藏在泵带中，这一点就非常有用。

智能手表可以作为基于手机的远程控制选项或[仅用于数据跟踪模式](../RemoteFeatures/FollowingOnly.md)的_补充_，或者作为这些选项的_替代_。

此外，与依赖于移动网络或Wi-Fi连接的父母/照料者追踪手机不同，通过蓝牙连接的智能手表可以在偏远地区发挥作用，比如洞穴中、船上或半山腰。 If both devices (**AAPS** phone and smartwatch) are on the same Wi-Fi network, they can also use Wi-Fi.

## 不同类型的智能手表与AAPS交互模式

目前，智能手表与**AAPS**结合使用主要有五种方式。如下表所示： 

| 手表设置   | 功能                                             | 要求                                                                                                                                                                                                                                                                                                                  |
| ------ | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 独立使用   | 无手机AAPS                                        | 全功能Android智能手表（请检查最低Android版本要求） 运行 **app-fullRelease** 应用程序                                                                                                                                                                                                                                                        |
| 完全远程控制 | 大多数AAPS功能                                      | Android **Wear OS**手表（请检查Android/API版本）<1>运行**wear-fullRelease**版本</br>                                                                                                                                                                                                                                             |
| 远程控制   | AAPSClient 功能                                  | Android **Wear OS** 手表（请检查Android/API版本）</br>运行**[wear-aapsclientRelease](https://github.com/nightscout/AndroidAPS/releases)**版本                                                                                                                                                                                    |
| 远程控制   | 部分AAPSClient功能                                 | Garmin watches</br>(older Samsung Tizen and Fitbit setups only, not recommended)</br>See below.                                                                                                                                                                                                                     |
| 显示     | Glucose, trend, IOB, COB, loop and pump status | Many smartwatches, through a companion app on the **AAPS** phone fed by the [External Companion Apps](#watches-external-companion-apps) broadcast: [WatchDrip+](https://bigdigital.home.blog/) (Xiaomi, Amazfit), [GlucoDataHandler](https://github.com/pachi81/GlucoDataHandler) (Wear OS), G-Watch</br>See below. |

## 在购买智能手表之前…

您购买的智能手表的具体型号取决于所需的功能。 You may find useful information on the [Phones page](#Phones-list-of-tested-phones), including a list of tested phones that also contains some smartwatches.

Popular watch brands include Samsung Galaxy, Garmin, Fossil and Mi band. 上表中总结的不同选项将在下文进行更详细的解释，以帮助您决定哪种智能手表适合您的情况。

如果您打算将智能手表与手机上的**AAPS**集成，以便与**AAPS**进行远程交互，您还需要考虑这两个设备是否兼容，特别是如果您的手机较旧或型号不常见时。

一般来说，如果您只想追踪血糖数值，而不与**AAPS**进行交互，那么您可以选择范围更广、价格更实惠且更简单的手表。

选择智能手表的最佳方式是在Discord或Facebook的**AAPS**群组中搜索“手表”相关的帖子。 Have a read of others' experiences, and post any specific questions if your query isn't answered by older posts.

## 全选Android

这听起来是一个很有吸引力的选择，对吧？然而，目前只有少数爱好者正在尝试在独立手表上使用**AAPS**。 There are a limited number of smartwatches with a reasonable interface which also work well with standalone use of **AAPS** and your CGM app. Popular models include the LEMFO LEM 15 Pro and 16. 您需要将**AAPS**“完整”版本的apk（通常安装在智能手机上的apk）而不是**AAPS**“穿戴”版本的apk加载到手表上。

虽然没有明确的规格可以帮助您了解一款手表是否适合独立使用**AAPS**，但以下参数将有所帮助：

1）Android 12或更高版本。 2）能够将手表表盘从“方形”模式切换出来，以使文字更大、更易阅读。 3）电池续航非常出色。 4）良好的蓝牙连接范围。

大多数关于独立**AAPS**手表的困扰都来自于与一个小屏幕的交互，以及当前的AAPS完整应用程序界面尚未为手表设计的事实。由于屏幕尺寸受限，您可能更喜欢使用手写笔在手表上编辑**AAPS**设置，并且某些AAPS按钮可能无法在手表屏幕上显示。

额外的挑战是很难获得足够的电池续航时间，并且拥有足够电池续航的手表通常体积庞大且厚重。用户报告说，他们在操作系统和省电设置上遇到了困难，很难在手表上启动传感器，蓝牙连接范围较差（无法同时与传感器和泵保持连接），并且防水性能也令人质疑。以下照片展示了相关示例。

![image](../images/6d787373-bc0c-404d-89aa-54d3127c4a6f.png)

如果您对设置独立手表感兴趣，请阅读**AAPS** Facebook群组（良好的搜索选项包括“独立”和“Lemfo”）以及Discord上的帖子和评论，以获取更多信息。

## Wear OS

**AAPS**代码中包含一个可安装在[**Wear OS**智能手表](https://wearos.google.com/#oem-carousel)上的应用程序扩展。

![Configuration > Communication with Wear enabled](../images/v4/Configuration/configuration_communication_wear.png)

请确认您的智能手表满足**AAPS**的[先决条件](#maintenance-android-version-aaps-version)。

### Wear OS_是_什么？

前三款智能手表选项都要求智能手表必须安装**Wear OS**。

**Wear OS**是运行在一些现代Android智能手表上的操作系统。如果智能手表的描述中仅表明其与Android和iOS_兼容_，这并不意味着它运行的是Wear OS。它可能是某种其他特定于供应商的操作系统，该操作系统与**AAPS**不兼容。 To support installation and use of any version of **AAPS** or **AAPSClient**, a smartwatch must be running **Wear OS 3.0, 3.2 or 3.5** (Android 11, API level 30) **or newer**. Each Wear OS release follows the Android version it is based on: **Wear OS 3** is Android 11 (API level 30), **Wear OS 4** is Android 13 (API level 33), **Wear OS 5** is Android 14 (API level 34) and **Wear OS 6** is Android 16 (API level 36). Watches on Wear OS 2 cannot run **AAPS**.

如果您在**Wear OS**手表上安装**AAPS**的wear.apk，则可以选择一系列不同的自定义**AAPS**表盘。或者，您可以使用标准的智能手机表盘，并在表盘上以称为“小工具”的小磁贴形式包含您的**AAPS**信息。除了时间之外，表盘上显示的任何功能都被称为“小工具（complication）”。

```{note}
Recent **Wear OS** changes progressively break the custom **AAPS** watchfaces (the higher the Wear OS version, the more severe), although **complications** keep working. Before buying or updating a watch, read [Wear OS watch face changes](#wearos-watchface-changes).
```


### 我的智能手表可能是什么样的？

在[将**AAPS**安装到您的手表上](../WearOS/WearOsSmartwatch.md)之后，您将能够自动从这些专为**AAPS**设计的表盘中选择您喜欢的表盘。在大多数手表上，您只需长按主屏幕，直到屏幕缩小，然后向右滑动以选择其他屏幕：

![image](../images/67fd75f3-721c-438d-be01-1a8e03532290.png)

这些是**AAPS**中嵌入的基本屏幕，还有[更多表盘](#WearOS_changing-to-AAPS-watchface)可供选择，您还可以使用[小工具](#Watchfaces-complications)。

### 我日常该如何操作Wear OS手表？

有关表盘以及日常使用的更多详细信息，包括如何制作（和分享）您自己的自定义表盘，可以在[在智能手表上操作Wear AAPS](../WearOS/WearOsSmartwatch.md)部分中找到。

(Watchfaces-tizen)= (watches-external-companion-apps)=

## External Companion Apps

**AAPS** can broadcast its status to other apps installed on the same phone: glucose and trend, IOB, COB, basal and temp basal, profile name, loop status, phone and pump battery, reservoir level and bolus progress. Several watch companion apps read this broadcast and display the data on watches that **AAPS** does not support directly. To send the data, enable **External Companion Apps** in **Configuration** > **Communication** (see [External Companion Apps](#external-companion-apps) on the Configuration page). The broadcast is sent with each new reading and cannot be requested: a refresh button in the companion app has no effect on **AAPS**.

![Configuration > Communication: the External Companion Apps card](../images/v4/Configuration/configuration_external_companion_apps.png)

Companion apps known to use this broadcast:

- [WatchDrip+](https://bigdigital.home.blog/) for Xiaomi and Amazfit watches, see [Xiaomi and Amazfit watches](#watches-xiaomi-amazfit) below.
- [GlucoDataHandler](https://github.com/pachi81/GlucoDataHandler) for Wear OS watches, as a complication or a widget. It is a useful fallback on Wear OS versions where the **AAPS** watchfaces are unreliable, see [Set up AAPS on your Wear OS watch](../WearOS/WearOsSmartwatch.md). Its companion app GlucoDataAuto shows the same data in a car with Android Auto.
- [G-Watch app](https://play.google.com/store/apps/details?id=sk.trupici.g_watch) for Samsung Tizen watches, and its later Wear OS port. In earlier **AAPS** versions the plugin was named **Samsung Tizen** after this app.

```{warning}
The **G-Watch app** and its **Wear OS** port are no longer maintained, and Samsung has moved its smartwatches from Tizen to Wear OS. G-Watch is only relevant for existing, older setups and is not recommended for a new installation. Check the dedicated [Facebook group](https://www.facebook.com/groups/gwatchapp) for the latest news.
```

(Watchfaces-garmin)=

## Garmin（佳明）

There are some watch faces for Garmin that integrate with [AAPS](https://apps.garmin.com/search?keywords=androidaps), on the Garmin ConnectIQ store.

![Configuration > Communication: the Garmin card](../images/v4/Configuration/configuration_garmin.png)

[AAPS Glucose Watch](https://apps.garmin.com/apps/3d163641-8b13-456e-84c3-470ecd781fb1)与**AAPS**实现了直接集成。它除了显示葡萄糖读数外，还显示闭环状态数据（如活性胰岛素和临时基础率），并将心率读数发送到**AAPS**。 It is available in the ConnectIQ store; enable the **Garmin** plugin in **Configuration → Communication**. ![AAPS Glucose Watch watchface with numbered fields](../images/Garmin_WF-annotated.png)

1. Highest and lowest glucose values on the graph
2. Glucose change per minute
3. Insulin on board (IOB)
4. Time since the last glucose reading (minutes:seconds)
5. Temporary basal rate, as a percentage of the profile basal rate
6. Glucose graph of the last 2 hours
7. 当前血糖值



## Fitbit

```{warning}
Google is moving Fitbit into Google Health and is removing third-party apps and watch faces from Fitbit watches in the EU. Fitbit watchfaces are therefore **no longer a recommended option**, and buying a Fitbit for use with **AAPS** is not recommended.
```

For existing Fitbit watches, the [Nightscout webpages](https://nightscout.github.io/nightscout/wearable/#fitbit) list some monitoring-only options, such as [Glance](https://glancewatchface.com/). These are third-party watchfaces too, so the same EU restriction applies.

## 仅跟踪（Following only）模式

这些智能手表将显示一些**AAPS**信息，有些则需要其他应用程序。

有各种各样价格实惠的智能手表仅能提供显示功能。如果您正在使用Nightscout，那么对所有选项的一个很好的概述是[在这里](https://nightscout.github.io/nightscout/wearable/#)

以下是**AAPS**用户中一些广受欢迎的仅跟踪（follow-only）手表选项：

(watches-xiaomi-amazfit)=
### 小米和Amazfit手表

**WatchDrip+** is a community-developed companion app that displays glucose and loop data on various smartwatch models, mostly Xiaomi (_e.g._ Mi Band) and Amazfit brands:

![image](../images/4dba454b-f808-4e9e-bfc6-aba698e006f8.png)

Since version 0.5, **WatchDrip+** reads its data directly from **AAPS**, without xDrip+ as a relay. On the **AAPS** phone:

1. Enable **External Companion Apps** in **Configuration** > **Communication**, see [above](#watches-external-companion-apps). It provides the current glucose, delta, trend arrow, IOB and pump status.
2. Enable the **xDrip** plugin in **Configuration** > **Communication** and turn on **Send status to xDrip+** in its settings. It provides the IOB/COB status line, and the glucose graph on the watch fills in after a few readings.
3. If xDrip+ is installed on the phone, disable its **Broadcast Service API** (xDrip+ > Settings > Inter-app settings) so that the watch does not receive the data twice. If xDrip+ was only relaying data to the watch, you can uninstall it.

The refresh button of WatchDrip+ has no effect with **AAPS**: the data arrives with each new reading.


You can read more about them, including how to set them up, on the [WatchDrip+ website](https://bigdigital.home.blog/). 这些手表的优点是体积小且相对实惠。它们是一种广受欢迎的选择，特别是适合孩子和手腕较小的人佩戴。

### Pebble watch

![image](../images/52032f3b-c871-4342-b8e7-659c285a39c8.png)

![image](../images/935d28bb-a909-4ca8-850d-6a765bd4fcde.png)


Pebble手表（[现已停产](https://en.wikipedia.org/wiki/Pebble_(watch))）在2013年至2016年期间公开销售，现在可能仍有二手产品可供购买。 Fitbit收购了Pebble。 Pebble用户可以使用Urchin表盘来查看Nightscout数据。显示的数据选项包括活性胰岛素（IOB）、当前活动的临时基础率和预测值。如果您在使用开环系统，您可以使用IFTTT创建一个小程序，该程序可以实现在收到来自**AAPS**的通知时，发送短信或Pushover通知。

### [Bluejay 手表](https://bluejay.website/)


![BlueJay U3 watch](../images/watches/bluejay_u3.png)


这些独特的技术设备能够**直接**从Dexcom发射器接收血糖数据。 It is not widely known that Dexcom G6/G7 transmitters actually broadcast the current glucose data on _two_ separate channels, a phone channel and a medical channel. The Bluejay watches can be set to receive glucose data on either channel, so if **AAPS** is using the phone channel, then the Bluejay watches can use the medical channel.

The key advantage is that the watch is independent of both the phone and the looping system. 例如，如果你在海滩或主题公园将泵与 **AAPS** 手机断开连接，且超出了手机的蓝牙覆盖范围，你仍然可以直接通过 Bluejay 手表获取 Dexcom 传感器的读数。

The original **Bluejay GTS** is discontinued and cannot read the Dexcom G7. The later models (U1, then the current **U3**, sold as early access at the time of writing) are full Android watches running xDrip, which collect from the Dexcom G6 and G7 directly. The vendor describes the watch as a research tool, not for medical use. Reported disadvantages are that it does not always pick up a reading every 5 minutes and that the battery needs frequent charging. Check the [Bluejay website](https://bluejay.website/) for the current model and availability.

### Apple watch

参见[手表上的Nightscout](https://nightscout.github.io/nightscout/wearable/#)

Apple Watch现在支持G7直接连接，并且可以同时与**AAPS**一起使用。

