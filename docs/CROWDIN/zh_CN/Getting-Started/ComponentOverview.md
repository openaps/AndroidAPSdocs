# 组件概述

**AAPS**不仅仅是一个（自建）应用程序，它只是您闭环系统中的多个模块之一。 在决定使用哪些组件之前，最好先查看一下组件的文档。

![Components overview](../images/modules.png)

```{admonition} IMPORTANT SAFETY NOTICE
:class:重要

本文档中讨论的**AAPS**安全功能的基础建立在用于构建您系统的硬件的安全功能之上。 为了实现自动化胰岛素给药闭环，至关重要的是，您必须仅使用经过测试、功能完备且获得您所在国家官方机构批准的胰岛素泵和持续葡萄糖监测系统（CGM）。 对这些组件进行硬件或软件修改可能会导致胰岛素给药量出现意外，从而给用户带来重大风险。 如果您发现或得到的是损坏的、经过修改的或自制的胰岛素泵或持续葡萄糖监测接收器，**请不要使用**这些设备来创建**AAPS**系统。

此外，只使用原装耗材也同样重要，例如经胰岛素泵和动态血糖仪厂商认证过的助针器、留置针和储药器等。 使用未经测试的或修改过的耗材可能导致动态血糖仪失准和胰岛素计量错误。 剂量不当的胰岛素非常危险，破解设备/擅自改造耗材是拿你的生命开玩笑，别这么干。

最后但同样重要的是，您绝对不能服用SGLT-2抑制剂（格列净类药物），因为它们会不可预测地降低血糖水平。 当与降低基础率以增加血糖的系统结合使用时，SGLT-2抑制剂尤其危险，因为格列净类药物可能导致血糖无法升高，从而引发危险的胰岛素缺乏状态。 [More information here](#PreparingForAaps-no-sglt-2-inhibitors).
```

## Necessary Modules

### Good individual dosage algorithm for your diabetes therapy

Even though this is not something to create or buy, this is the 'module' which is probably underestimated the most but essential. When you let an algorithm help manage your diabetes, it needs to know the right settings to not make severe mistakes. Even if you are still missing other modules, you can already verify and adapt your **Profile** in collaboration with your diabetes team.

The **Profile** includes:

- BR (Basal rates): provides background insulin;
- ISF (insulin sensitivity factor): how much your blood glucose level will be reduced by 1 unit of insulin;
- CR (carb ratio): how many grams of carbohydrate are covered by one unit of insulin;
- DIA (duration of insulin action).

Most loopers use circadian BR, ISF and CR, which adapt hormonal insulin sensitivity during the day.

More information about your **Profile** [on the dedicated page](../SettingUpAaps/YourAapsProfile.md).

### Phone

See the dedicated page [Phones](../Getting-Started/Phones.md).

### Insulin pump

See the dedicated page [Compatible Pumps](../Getting-Started/CompatiblePumps.md).

**Advantages and disadvantages of some pump models**

The Combo, the Insight and the older Medtronic are solid pumps, and loopable. The Combo has the advantage of many more infusion set types to choose from as it has a standard Luer-Lock. And the battery is a default one you can buy at any gas station, 24-hour convenience store and if you really need one, you can steal/borrow it from the remote control in the hotel room ;-).

The advantages of the DanaR/RS and Dana-i vs. the Combo as the pump of choice however are:

- The Dana pumps connect to almost any phone with Android >= 5.1 without the need to flash lineage. If your phone breaks you usually can find easily any phone that works with the Dana pumps as quick replacement... not so easy with the Combo. (This might change in the future when Android 8.1 gets more popular)
- Initial pairing is simpler with the Dana-i/RS. But you usually only do this once so it only impacts if you want to test a new feature with different pumps.
- So far the Combo works with screen parsing. In general that works great but it is slow. For looping this does not matter much as everything works in the background. Still there is much more time you need to be connected so more time when the BT connection might break, which isn't so easy if you walk away from your phone whilst bolusing & cooking.
- The Combo vibrates on the end of TBRs, the DanaR vibrates (or beeps) on SMB. At nighttime, you are likely to be using TBRs more than SMB.  The Dana-i/RS is configurable so that it does neither beep nor vibrate.
- Reading the history on the Dana-i/RS in a few seconds with carbs makes it possible to switch phones easily while offline and continue looping as soon a soon as some CGM values are in.
- All pumps **AAPS** can talk with are waterproof on delivery. Only the Dana pumps are also "waterproof by warranty" due to the sealed battery compartment and reservoir filling system.

### 血糖数据源

See the dedicated page [Compatible CGMs](../Getting-Started/CompatiblesCgms.md).

### **AAPS**-.apk file

The main component of the system. In order to install the app, you have to build the apk-file yourself first. Instructions are [here](../SettingUpAaps/BuildingAaps.md).

### Reporting server

A reporting server displays your glucose and treatment data, and creates reports for detailed analysis. There are currently two reporting servers available for use with AAPS : [Nightscout](#SettingUpTheReportingServer-nightscout) and [Tidepool](#SettingUpTheReportingServer-tidepool). They both provide ways to visualize your diabetes data over time, provide statistics about the **time in range** (TIR) and other measures.

The Reporting server is independent of the other modules. If you don’t want to use a reporting server, you should know that it is not mandatory for running **AAPS** in the long term. But you still need to set up one as it will be required to fulfill [**Objective 1**](#objectives-objective1).

Additional information on how to set up your reporting server can be found [here](../SettingUpAaps/SettingUpTheReportingServer.md).

## Optional Modules

### Smartwatch

You can choose any smartwatch with Android WearOS 1.x up to 4.x. **Beware, WearOS 5.x is not compatible!**

Users are creating a [list of tested phones and watches](#Phones-list-of-tested-phones). There are different watchfaces for use with **AAPS**, which you can find [here](../WearOS/WearOsSmartwatch.md).

### xDrip+

Even if you don't need to have the [xDrip+ App](https://xdrip.readthedocs.io/en/latest/) as **BG Source**, you can still use it for _i.e._ alarms or a different blood glucose display. You can have as many alarms as you want, specify the time when the alarm should be active, if it can override silent mode, etc. Some xDrip+ information can be found [here](../CompatibleCgms/xDrip.md). Please be aware that the documentations to this app are not always up to date as its progress is quite fast.

## What to do while waiting for modules

It sometimes takes a while to get all the modules for closing the loop. But no worries, there are a lot of things you can do while waiting. It is **necessary** to check and (where appropriate) adapt basal rates (BR), insulin-carbratio (IC), insulin-sensitivity-factors (ISF) etc. And maybe open loop can be a good way to test the system and get familiar with **AAPS**. Using this mode, **AAPS** gives treatment recommendations you can manually execute.

You can keep on reading through the docs here, get in touch with other loopers online or offline, [read](../UsefulLinks/BackgroundReading.md) documentations or what other loopers write (even if you have to be careful, not everything is correct or good for you to reproduce).

**Done?** If you have your **AAPS** components all together (congrats!) or at least enough to start in open loop mode, you should first read through the [Objective description](../SettingUpAaps/CompletingTheObjectives.md) before each new Objective and setup up your hardware.
