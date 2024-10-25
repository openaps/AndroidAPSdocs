# 組件總覽

**AAPS** is not just a (self-built) application, it is but one of several modules of your closed loop system. Before deciding for components, it would be a good idea to have a look at the component documentation.

![組件總覽](../images/modules.png)

```{note}
**IMPORTANT SAFETY NOTICE**

The foundation of **AAPS** safety features discussed in this documentation is built on the safety features of the hardware used to build your system. For closing an automated insulin dosing loop, it is critically important that you only use an insulin pump and CGM that are tested, fully functioning and approved by the official instances of your country. 對這些組件進行硬體或軟體修改可能會導致胰島素劑量異常，對使用者造成重大風險。 If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, **do not use** these for creating an **AAPS** system.

此外，僅使用製造商批准的原裝耗材，例如插入器、套管和胰島素容器，也同樣重要。 使用未經測試或修改的耗材可能會導致 CGM 不準確和胰島素劑量錯誤。 胰島素在劑量錯誤時極具危險 - 請勿透過修改耗材來冒生命危險。

Last but not least, you must not take SGLT-2 inhibitors (gliflozins) as they incalculably lower blood sugar levels. 這種藥物與一個降低基礎速率以增加血糖的系統結合使用時尤其危險，因為由於格列佛新的影響，血糖可能不會上升，可能導致缺乏胰島素的危險情況發生。 [More information here](../Getting-Started/PreparingForAaps.md#no-sglt-2-inhibitors).
```

## 必要模組

### 適合你的糖尿病治療的個性化劑量演算法

雖然這不是可以製作或購買的東西，但這是最容易被低估但卻至關重要的「模組」。 當你讓一個演算法幫助管理你的糖尿病時，他需要正確的設定才能避免嚴重錯誤。 Even if you are still missing other modules, you can already verify and adapt your **Profile** in collaboration with your diabetes team.

The **Profile** includes:

- BR (Basal rates): provides background insulin;
- ISF (insulin sensitivity factor): how much your blood glucose level will be reduced by 1 unit of insulin;
- CR (carb ratio): how many grams of carbohydrate are covered by one unit of insulin;
- DIA (duration of insulin action).

大多數使用閉環系統的人會使用日夜節律的 BR、ISF 和 CR，這些數值會根據一天中激素影響調整胰島素敏感性。

More information about your **Profile** [on the dedicated page](../SettingUpAaps/YourAapsProfile.md).

### 手機

See the dedicated page [Phones](../Getting-Started/Phones.md).

### 胰島素幫浦

See the dedicated page [Compatible Pumps](../Getting-Started/CompatiblePumps.md).

**Advantages and disadvantages of some pump models**

The Combo, the Insight and the older Medtronic are solid pumps, and loopable. The Combo has the advantage of many more infusion set types to choose from as it has a standard Luer-Lock. And the battery is a default one you can buy at any gas station, 24-hour convenience store and if you really need one, you can steal/borrow it from the remote control in the hotel room ;-).

然而，DanaR/RS 和 Dana-i 相對於 Combo 作為首選幫浦的優勢在於：

- Dana 幫浦可以與幾乎任何運作 Android 5.1 或更高版本的手機連線，而無需刷入 Lineage。 如果你的手機壞了，通常可以輕鬆找到與 Dana 幫浦相容的手機作為快速替代品......這對於 Combo 來說並不容易。 （隨著 Android 8.1 越來越普及，這種情況可能會改變）
- Dana-i/RS 的初始配對比較簡單。 但通常這只需要做一次，所以他僅在你想使用不同幫浦測試新功能時才有影響。
- 目前，Combo 使用螢幕解析進行工作。 總的來說，這效果不錯，但速度較慢。 對於閉環系統來說，這並不太重要，因為所有操作都在背景中進行。 Still there is much more time you need to be connected so more time when the BT connection might break, which isn't so easy if you walk away from your phone whilst bolusing & cooking.
- Combo 在暫時性基礎率（TBR）結束時會震動，DanaR 在 SMB 時會震動（或發出嗶聲）。 At nighttime, you are likely to be using TBRs more than SMB.  The Dana-i/RS is configurable so that it does neither beep nor vibrate.
- 幾秒鐘內讀取 Dana-i/RS 的歷史紀錄及碳水化合物資料，使你可以在離線狀態下輕鬆切換手機，並在獲得一些 CGM 資料後立即繼續閉環操作。
- All pumps **AAPS** can talk with are waterproof on delivery. 只有 Dana 幫浦因其密封的電池艙和儲液槽填充系統在保固範圍內也具備防水性能。

### 血糖來源

See the dedicated page [Compatible CGMs](../Getting-Started/CompatiblesCgms.md).

### **AAPS**-.apk file

The main component of the system. In order to install the app, you have to build the apk-file yourself first. Instructions are [here](../SettingUpAaps/BuildingAaps.md).

### Reporting server

A reporting server displays your glucose and treatment data, and creates reports for detailed analysis. There are currently two reporting servers available for use with AAPS : [Nightscout](../SettingUpAaps/SettingUpTheReportingServer.md#nightscout) and [Tidepool](../SettingUpAaps/SettingUpTheReportingServer.md#tidepool). They both provide ways to visualize your diabetes data over time, provide statistics about the **time in range** (TIR) and other measures.

The Reporting server is independent of the other modules. If you don’t want to use a reporting server, you should know that it is not mandatory for running **AAPS** in the long term. But you still need to set up one as it will be required to fulfill [**Objective 1**](../SettingUpAaps/CompletingTheObjectives.md#objective-1-setting-up-visualization-and-monitoring-analyzing-basals-and-ratios).

Additional information on how to set up your reporting server can be found [here](../SettingUpAaps/SettingUpTheReportingServer.md).

## 可選模組

### 智慧型手錶

You can choose any smartwatch with Android WearOS 1.x up to 4.x. **Beware, WearOS 5.x is not compatible!**

The Sony Smartwatch 3 (SWR50) is commonly used amongst loopers as it is the only watch that can get readings from Dexcom G6/G5 when phone is out of range. 某些其他手錶也可以透過修補來作為獨立接收器使用（更多詳情請參閱[這份文檔](https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5)）。

用戶正在建立一個[已測試的手機和手錶清單](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing)。 There are different watchfaces for use with **AAPS**, which you can find [here](../UsefulLinks/WearOsSmartwatch.md).

如果要記錄不在電子表格中的手機或手錶，請填寫這個[表單](https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform)。

Any problems with the spreadsheet please email [hardware@androidaps.org](mailto:hardware@androidaps.org), any donations of phone/watch models that still need testing please email [donations@androidaps.org](mailto:donations@androidaps.org).

### xDrip+

Even if you don't need to have the [xDrip+ App](https://xdrip.readthedocs.io/en/latest/) as **BG Source**, you can still use it for _i.e._ alarms or a different blood glucose display. You can have as many alarms as you want, specify the time when the alarm should be active, if it can override silent mode, etc. 有關一些 xDrip+ 資訊，請參閱[這裡](../CompatibleCgms/xDrip.md)。 請注意，這款應用程式的文檔並非總是最新的，因為其進展相當快速。

## 等待模組期間該做什麼

It sometimes takes a while to get all the modules for closing the loop. 但不用擔心，還有很多事情可以在等待期間進行。 It is **necessary** to check and (where appropriate) adapt basal rates (BR), insulin-carbratio (IC), insulin-sensitivity-factors (ISF) etc. And maybe open loop can be a good way to test the system and get familiar with **AAPS**. Using this mode, **AAPS** gives treatment recommendations you can manually execute.

你可以繼續閱讀這裡的文檔，與其他閉環系統用戶線上或離線交流，或[閱讀](../Where-To-Go-For-Help/Background-reading.md)文檔或其他用戶撰寫的內容（即使需要小心，不是所有內容都正確或適合你複製）。

**Done?** If you have your **AAPS** components all together (congrats!) or at least enough to start in open loop mode, you should first read through the [Objective description](../SettingUpAaps/CompletingTheObjectives.md) before each new Objective and setup up your hardware.
