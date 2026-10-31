# 组件概述

**AAPS** is not just a (self-built) application; it is one of several modules of your closed loop system. Before deciding on components, it is a good idea to look at the component documentation.

![组件概览](../images/modules.png)

```{admonition} IMPORTANT SAFETY NOTICE
:class:重要

本文档中讨论的**AAPS**安全功能的基础建立在用于构建您系统的硬件的安全功能之上。为了实现自动化胰岛素给药闭环，至关重要的是，您必须仅使用经过测试、功能完备且获得您所在国家官方机构批准的胰岛素泵和持续葡萄糖监测系统（CGM）。对这些组件进行硬件或软件修改可能会导致胰岛素给药量出现意外，从而给用户带来重大风险。如果您发现或得到的是损坏的、经过修改的或自制的胰岛素泵或持续葡萄糖监测接收器，**请不要使用**这些设备来创建**AAPS**系统。

此外，只使用原装耗材也同样重要，例如经胰岛素泵和动态血糖仪厂商认证过的助针器、留置针和储药器等。使用未经测试的或修改过的耗材可能导致动态血糖仪失准和胰岛素计量错误。剂量不当的胰岛素非常危险，破解设备/擅自改造耗材是拿你的生命开玩笑，别这么干。

最后但同样重要的是，您绝对不能服用SGLT-2抑制剂（格列净类药物），因为它们会不可预测地降低血糖水平。当与降低基础率以增加血糖的系统结合使用时，SGLT-2抑制剂尤其危险，因为格列净类药物可能导致血糖无法升高，从而引发危险的胰岛素缺乏状态。 [More information here](#PreparingForAaps-no-sglt-2-inhibitors).
```

## 必要模块

### 为您的糖尿病治疗确定一项优质的个体化用药算法。

Even though this is not something to create or buy, it is probably the most underestimated 'module' — but it is essential. When you let an algorithm help manage your diabetes, it needs to know the right settings so it does not make severe mistakes. 即使您仍然缺少其他模块，您也可以与您的糖尿病团队一起验证和调整您的**配置文件（Profile）**。

**配置文件（Profile）**通常包括：

- BR (基础率，Basal rates): 提供基础（背景）胰岛素;
- ISF（胰岛素敏感系数）：表示注射1单位胰岛素后，您的血糖水平将降低的幅度；
- CR (carb ratio): how many grams of carbohydrate are covered by one unit of insulin.

大多数闭环系统使用以24小时为周期的基础率（BR）、胰岛素敏感因子（ISF）和碳水化合物比率（CR），这些参数会根据一天中激素引起的胰岛素敏感性变化而进行调整。

Alongside your **Profile**, you also need to configure your **insulin** in **Manage → Insulin settings**, including its DIA (duration of insulin action) — see [Insulin settings](#Config-Builder-insulin-dia).

More information about your **Profile** [on the dedicated page](../SettingUpAaps/YourAapsProfile.md).

### 手机

See the dedicated page [Phones](../Getting-Started/Phones.md).

### 胰岛素泵

See the dedicated page [Compatible Pumps](../Getting-Started/CompatiblePumps.md).

**Advantages and disadvantages of some pump models**

The Combo, the Insight and the older Medtronic are solid pumps, and loopable. The Combo has the advantage of many more infusion set types to choose from as it has a standard Luer-Lock. And the battery is a default one you can buy at any gas station, 24-hour convenience store and if you really need one, you can steal/borrow it from the remote control in the hotel room ;-).

The advantages of the DanaR/RS and Dana-i vs. the Combo as the pump of choice however are:

- Dana-i/RS的初次配对更为简单。但您通常只需要做一次配对，所以它只会在您想用不同的泵测试新功能时产生影响。
- 到目前为止，Combo泵是通过屏幕解析来工作的。通常这种方法效果很好，但速度较慢。但对于闭环控制来说，这并不重要，因为所有工作都是在后台完成的。不过，您仍然需要更多的时间来保持连接，因此蓝牙连接断开的风险也更高，如果您在注射大剂量胰岛素的同时做饭并远离手机，这种情况就不太容易避免。
- Combo泵会在临时基础率（TBR）结束时震动，而DanaR泵会在进行超微大剂量（SMB）时震动（或发出蜂鸣声）。在夜间，您可能更频繁地使用临时基础率（TBR），而不是方波大剂量输注（SMB）。  Dana-i/RS泵可以进行配置，使其既不发出蜂鸣声也不震动。
- 通过快速读取Dana-i/RS胰岛素泵历史数据并输入碳水化合物信息，用户可在离线状态下实现跨设备无缝切换，并在获取动态血糖仪（CGM）数据后实时恢复闭环输注系统运作。
- 所有**AAPS**可以通信的泵在出厂时都具有防水功能。只有Dana泵还因其密封的电池舱和储液罐填充系统而享有“保修期内的防水”保障。

### 血糖数据源

See the dedicated page [Compatible CGMs](../Getting-Started/CompatiblesCgms.md).

### **AAPS**的-.apk文件

The main component of the system. In order to install the app, you have to build the apk-file yourself first. Instructions are [here](../SettingUpAaps/BuildingAaps.md).

### 报告服务器

A reporting server displays your glucose and treatment data, and creates reports for detailed analysis. There are currently two reporting servers available for use with AAPS: [Nightscout](#SettingUpTheReportingServer-nightscout) and [Tidepool](#SettingUpTheReportingServer-tidepool). They both provide ways to visualize your diabetes data over time, provide statistics about the **time in range** (TIR) and other measures.

The Reporting server is independent of the other modules. If you don’t want to use a reporting server, you should know that it is not mandatory for running **AAPS** in the long term. But you still need to set one up, as it is required to fulfill [**Objective 1**](#objectives-objective1).

Additional information on how to set up your reporting server can be found [here](../SettingUpAaps/SettingUpTheReportingServer.md).

## 可选模块

### 智能手表

You can choose any smartwatch running **Wear OS 3** or newer. See [Watches](../Getting-Started/Watches.md) for details.

Users are creating a [list of tested phones and watches](#Phones-list-of-tested-phones). There are different watchfaces for use with **AAPS**, which you can find [here](../WearOS/WearOsSmartwatch.md).

### xDrip

Even if you don't need the xDrip app as your **BG Source**, you can still use it, for example for alarms or a different blood glucose display. You can have as many alarms as you want, specify the time when an alarm should be active, choose whether it can override silent mode, etc. Some xDrip information can be found [here](../CompatibleCgms/xDrip.md). Please be aware that the documentation for this app is not always up to date, as it changes quickly.

## 在等待模块时该做什么

It sometimes takes a while to get all the modules for closing the loop. But no worries, there are a lot of things you can do while waiting. It is **necessary** to check and (where appropriate) adapt basal rates (BR), insulin-carbratio (IC), insulin-sensitivity-factors (ISF) etc. And maybe open loop can be a good way to test the system and get familiar with **AAPS**. Using this mode, **AAPS** gives treatment recommendations you can manually execute.

You can keep on reading through the docs here, get in touch with other loopers online or offline, [read](../UsefulLinks/BackgroundReading.md) documentations or what other loopers write (even if you have to be careful, not everything is correct or good for you to reproduce).

**Done?** If you have your **AAPS** components all together (congrats!) or at least enough to start in open loop mode, you should first read through the [Objective description](../SettingUpAaps/CompletingTheObjectives.md) before each new Objective, and set up your hardware.
