# Component Overview

**AAPS** is not just a (self-built) application, it is but one of several modules of your closed loop system. Before deciding for components, it would be a good idea to have a look at the component documentation.

![Components overview](../images/modules.png)

```{admonition} IMPORTANT SAFETY NOTICE
:class: important

The foundation of **AAPS** safety features discussed in this documentation is built on the safety features of the hardware used to build your system. For closing an automated insulin dosing loop, it is critically important that you only use an insulin pump and CGM that are tested, fully functioning and approved by the official instances of your country. 이러한 구성요소에 대한 하드웨어 또는 소프트웨어의 변형은 예기치 않은 인슐린 투약을 야기하여 사용자에게 상당한 위험을 초래할 수 있습니다. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, **do not use** these for creating an **AAPS** system.

또한, 펌프 또는 CGM을 사용할 때에는 원래 공급되는 물품 즉 제조업자에 의해 승인된 삽입기, 캐뉼러 및 인슐린 용기만을 사용하는 것이 매우 중요합니다. 검증이 되지 않고 변형된 물품을 사용하는 경우에는 CGM의 부정확성과 인슐린의 투약 오류가 발생할 수 있습니다. 인슐린은 남용되면 매우 위험하니 물품들을 해킹하여 사용하는 것과 같이 본인의 목숨을 가지고 노는 행위와 같은 행동들은 삼가해주시기 바랍니다.

Last but not least, you must not take SGLT-2 inhibitors (gliflozins) as they incalculably lower blood sugar levels. 혈당을 올리기 위해 기저양(basal rate)을 낮추는 시스템과 병행하는 것은 글 리폴로 진으로 인해 매우 위헙합니다. 오히려 혈당이 오르지 않을 수 있으며 인슐린 부족의 위험한 상태까지 올 수 있습니다. [More information here](#PreparingForAaps-no-sglt-2-inhibitors).
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

- Initial pairing is simpler with the Dana-i/RS. But you usually only do this once so it only impacts if you want to test a new feature with different pumps.
- So far the Combo works with screen parsing. In general that works great but it is slow. For looping this does not matter much as everything works in the background. Still there is much more time you need to be connected so more time when the BT connection might break, which isn't so easy if you walk away from your phone whilst bolusing & cooking.
- The Combo vibrates on the end of TBRs, the DanaR vibrates (or beeps) on SMB. At nighttime, you are likely to be using TBRs more than SMB.  The Dana-i/RS is configurable so that it does neither beep nor vibrate.
- Reading the history on the Dana-i/RS in a few seconds with carbs makes it possible to switch phones easily while offline and continue looping as soon as some CGM values are in.
- All pumps **AAPS** can talk with are waterproof on delivery. Only the Dana pumps are also "waterproof by warranty" due to the sealed battery compartment and reservoir filling system.

### 혈당 출처

See the dedicated page [Compatible CGMs](../Getting-Started/CompatiblesCgms.md).

### **AAPS**-.apk file

The main component of the system. In order to install the app, you have to build the apk-file yourself first. Instructions are [here](../SettingUpAaps/BuildingAaps.md).

### Reporting server

A reporting server displays your glucose and treatment data, and creates reports for detailed analysis. There are currently two reporting servers available for use with AAPS : [Nightscout](#SettingUpTheReportingServer-nightscout) and [Tidepool](#SettingUpTheReportingServer-tidepool). They both provide ways to visualize your diabetes data over time, provide statistics about the **time in range** (TIR) and other measures.

The Reporting server is independent of the other modules. If you don’t want to use a reporting server, you should know that it is not mandatory for running **AAPS** in the long term. But you still need to set up one as it will be required to fulfill [**Objective 1**](#objectives-objective1).

Additional information on how to set up your reporting server can be found [here](../SettingUpAaps/SettingUpTheReportingServer.md).

## Optional Modules

### Smartwatch

You can choose any smartwatch with Android WearOS 2.x up to 4.x. **Beware, WearOS 5.x is not always compatible!**

Users are creating a [list of tested phones and watches](#Phones-list-of-tested-phones). There are different watchfaces for use with **AAPS**, which you can find [here](../WearOS/WearOsSmartwatch.md).

### xDrip+

Even if you don't need to have the xDrip+ App as **BG Source**, you can still use it for _i.e._ alarms or a different blood glucose display. You can have as many alarms as you want, specify the time when the alarm should be active, if it can override silent mode, etc. Some xDrip+ information can be found [here](../CompatibleCgms/xDrip.md). Please be aware that the documentations to this app are not always up to date as its progress is quite fast.

## What to do while waiting for modules

It sometimes takes a while to get all the modules for closing the loop. But no worries, there are a lot of things you can do while waiting. It is **necessary** to check and (where appropriate) adapt basal rates (BR), insulin-carbratio (IC), insulin-sensitivity-factors (ISF) etc. And maybe open loop can be a good way to test the system and get familiar with **AAPS**. Using this mode, **AAPS** gives treatment recommendations you can manually execute.

You can keep on reading through the docs here, get in touch with other loopers online or offline, [read](../UsefulLinks/BackgroundReading.md) documentations or what other loopers write (even if you have to be careful, not everything is correct or good for you to reproduce).

**Done?** If you have your **AAPS** components all together (congrats!) or at least enough to start in open loop mode, you should first read through the [Objective description](../SettingUpAaps/CompletingTheObjectives.md) before each new Objective and setup up your hardware.
