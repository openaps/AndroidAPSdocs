# 組件總覽

**AAPS** is not just a (self-built) application; it is one of several modules of your closed loop system. Before deciding on components, it is a good idea to look at the component documentation.

![組件總覽](../images/modules.png)

```{admonition} IMPORTANT SAFETY NOTICE
:class: important

本文件中討論的 **AAPS** 安全功能的基礎，是建立在構建你系統所使用硬體的安全功能之上。對於關閉自動胰島素給藥循環，僅使用經過測試、完全正常運作並由你國家的官方機構批准的胰島素幫浦和 CGM 是至關重要的。對這些組件進行硬體或軟體修改可能會導致胰島素劑量異常，對使用者造成重大風險。如果你找到或獲得破損、修改或自製的胰島素幫浦或 CGM 接收器，**請勿使用**這些來建立 **AAPS** 系統。

此外，僅使用製造商批准的原裝耗材，例如插入器、套管和胰島素容器，也同樣重要。使用未經測試或修改的耗材可能會導致 CGM 不準確和胰島素劑量錯誤。胰島素在劑量錯誤時極具危險 - 請勿透過修改耗材來冒生命危險。

最後但同樣重要的是，你必須避免服用 SGLT-2 抑制劑（gliflozins），因為它們會不計其數地降低血糖值。這種藥物與一個降低基礎速率以增加血糖的系統結合使用時尤其危險，因為由於格列佛新的影響，血糖可能不會上升，可能導致缺乏胰島素的危險情況發生。[這裡有更多資訊](#PreparingForAaps-no-sglt-2-inhibitors)。
```

## 必要模組

### 適合你的糖尿病治療的個性化劑量演算法

Even though this is not something to create or buy, it is probably the most underestimated 'module' — but it is essential. When you let an algorithm help manage your diabetes, it needs to know the right settings so it does not make severe mistakes. 即使你仍在缺少其他模組，你也可以在你的糖尿病團隊的協助下驗證和調整你的 **設定檔**。

該 **設定檔** 包含：

- BR（基礎率）：提供背景胰島素；
- ISF（胰島素敏感性因子）：一單位胰島素可以降低你的血糖值的幅度；
- CR (carb ratio): how many grams of carbohydrate are covered by one unit of insulin.

大多數使用閉環系統的人會使用日夜節律的 BR、ISF 和 CR，這些數值會根據一天中激素影響調整胰島素敏感性。

Alongside your **Profile**, you also need to configure your **insulin** in **Manage → Insulin settings**, including its DIA (duration of insulin action) — see [Insulin settings](#Config-Builder-insulin-dia).

More information about your **Profile** [on the dedicated page](../SettingUpAaps/YourAapsProfile.md).

### 手機

See the dedicated page [Phones](../Getting-Started/Phones.md).

### 胰島素幫浦

See the dedicated page [Compatible Pumps](../Getting-Started/CompatiblePumps.md).

**Advantages and disadvantages of some pump models**

The Combo, the Insight and the older Medtronic are solid pumps, and loopable. The Combo has the advantage of many more infusion set types to choose from as it has a standard Luer-Lock. And the battery is a default one you can buy at any gas station, 24-hour convenience store and if you really need one, you can steal/borrow it from the remote control in the hotel room ;-).

The advantages of the DanaR/RS and Dana-i vs. the Combo as the pump of choice however are:

- Dana-i/RS 的初始配對比較簡單。但通常這只需要做一次，所以他僅在你想使用不同幫浦測試新功能時才有影響。
- 目前，Combo 使用螢幕解析進行工作。總的來說，這效果不錯，但速度較慢。對於閉環系統來說，這並不太重要，因為所有操作都在背景中進行。不過，你需要連線的時間仍然相對較長，因此在進行注射和烹飪時，藍牙連線可能會斷開，這並不容易。
- Combo 在暫時性基礎率（TBR）結束時會震動，DanaR 在 SMB 時會震動（或發出嗶聲）。在夜間，你可能會比小量注射（SMB）使用更多的臨時基礎率（TBR）。  Dana-i/RS 可配置為不會發出嗶聲或震動。
- 使用Dana-i/RS在幾秒鐘內讀取碳水化合物歷史，讓你可以在離線時輕鬆切換手機，並在某些CGM值出現後立即開始循環。
- 所有與 **AAPS** 相容的幫浦在交貨時都是防水的。只有 Dana 幫浦因其密封的電池艙和儲液槽填充系統在保固範圍內也具備防水性能。

### 血糖來源

See the dedicated page [Compatible CGMs](../Getting-Started/CompatiblesCgms.md).

### **AAPS**-.apk 檔案

The main component of the system. In order to install the app, you have to build the apk-file yourself first. Instructions are [here](../SettingUpAaps/BuildingAaps.md).

### 報告伺服器

A reporting server displays your glucose and treatment data, and creates reports for detailed analysis. There are currently two reporting servers available for use with AAPS: [Nightscout](#SettingUpTheReportingServer-nightscout) and [Tidepool](#SettingUpTheReportingServer-tidepool). They both provide ways to visualize your diabetes data over time, provide statistics about the **time in range** (TIR) and other measures.

The Reporting server is independent of the other modules. If you don’t want to use a reporting server, you should know that it is not mandatory for running **AAPS** in the long term. But you still need to set one up, as it is required to fulfill [**Objective 1**](#objectives-objective1).

Additional information on how to set up your reporting server can be found [here](../SettingUpAaps/SettingUpTheReportingServer.md).

## 可選模組

### 智慧型手錶

You can choose any smartwatch running **Wear OS 3** or newer. See [Watches](../Getting-Started/Watches.md) for details.

Users are creating a [list of tested phones and watches](#Phones-list-of-tested-phones). There are different watchfaces for use with **AAPS**, which you can find [here](../WearOS/WearOsSmartwatch.md).

### xDrip

Even if you don't need the xDrip app as your **BG Source**, you can still use it, for example for alarms or a different blood glucose display. You can have as many alarms as you want, specify the time when an alarm should be active, choose whether it can override silent mode, etc. Some xDrip information can be found [here](../CompatibleCgms/xDrip.md). Please be aware that the documentation for this app is not always up to date, as it changes quickly.

## 等待模組期間該做什麼

It sometimes takes a while to get all the modules for closing the loop. But no worries, there are a lot of things you can do while waiting. It is **necessary** to check and (where appropriate) adapt basal rates (BR), insulin-carbratio (IC), insulin-sensitivity-factors (ISF) etc. And maybe open loop can be a good way to test the system and get familiar with **AAPS**. Using this mode, **AAPS** gives treatment recommendations you can manually execute.

You can keep on reading through the docs here, get in touch with other loopers online or offline, [read](../UsefulLinks/BackgroundReading.md) documentations or what other loopers write (even if you have to be careful, not everything is correct or good for you to reproduce).

**Done?** If you have your **AAPS** components all together (congrats!) or at least enough to start in open loop mode, you should first read through the [Objective description](../SettingUpAaps/CompletingTheObjectives.md) before each new Objective, and set up your hardware.
