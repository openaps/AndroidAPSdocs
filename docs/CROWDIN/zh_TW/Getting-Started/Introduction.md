# APS 和 AAPS 的介紹

```{contents} In this page
:backlinks: entry
:depth: 2
```

## 什麼是“人工胰臟系統”(Artificial Pancreas System)？

人的胰臟除了調節血糖外，還有許多功能。而**” 人工胰臟系統” (APS)** 通常指的是一個能自動將血糖維持在健康範圍內的系統。

最基本的方式就是透過偵測而來的**血糖值**資料進行**計算**，然後將預測的適當劑量**胰島素**注入體內。這個系統每隔幾分鐘會重複進行一次計算，全天候24/7運作。他會使用**警報**和**通知**來告知使用者是否需要介入或注意。 This system is typically made up of a **glucose sensor**, an **insulin pump** and a **controller** which runs the calculations. In **AAPS** and other open-source systems the controller is an app on a phone. In most commercial systems it is software built into the pump itself, with a phone app used mainly for display and control.

For background on how closed-loop systems developed and how they work, this 2022 review article is a good starting point. Bear in mind it predates most of the systems available today, so it is not a guide to what is currently on the market:

![前言](../images/FRONTIERS_Logo_Grey_RGB.png) [Closed-Loop Insulin Delivery Systems: Past, Present, and Future Directions](https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2022.919942/full) (Templer, _Frontiers in Endocrinology_, 2022).

So-called “dual-hormone” systems infuse glucagon alongside insulin, with the aim of preventing severe hypos and allowing even tighter blood glucose control. A first system of this kind has been approved in Europe, but it is supplied only through studies and projects, and others are still in development. None is on general sale yet.

人工胰臟被認為是[“糖尿病的自動駕駛”](https://www.artificialpancreasbook.com/)。那是什麼意思？

在飛機上，自動駕駛並不完全取代人類飛行員的工作，飛行員無法在整個飛行過程中睡覺。自動駕駛輔助飛行員的工作。 It relieves them of the burden of constantly having to manage the aircraft, allowing the pilot to concentrate on wider monitoring. The autopilot receives signals from various sensors, a computer evaluates the data together with the pilot’s specifications and then makes the necessary adjustments, alerting the pilot to any concerns. The pilot no longer has to worry about continually making decisions and this analogy can be applied to **AAPS**.

![圖片](../images/autopilot.png)

(Introduction-what-does-hybrid-closed-loop-mean)=
## 什麼是混合閉環系統？

對於1型糖尿病患者來說，最好的解決方案可能是“功能性治療”（可能是植入免疫系統無法攻擊的胰臟細胞）。 While the type 1 diabetic (T1D) community waits for that, a “full closed loop” artificial pancreas is probably the next best thing. 這是一種不需要任何使用者輸入（例如為進餐注射胰島素或通知運動）的技術系統，並能夠很好地調節血糖數值。 Nearly every system in everyday use is a “hybrid” closed loop, because it uses a combination of automated technology and user input. The first full closed loop systems were approved in Europe in 2026, but none is widely available yet.

## 為什麼循環控制系統會開始發展？

為1型糖尿病患者開發商業技術的進度非常緩慢。在2013年，1型糖尿病社群發起了#WeAreNotWaiting運動。他們使用現有的認證技術（胰島素幫浦和傳感器）自行開發系統，以改善血糖控制、安全性和生活品質。 These are known as OS-AID (Open-Source Automated Insulin Delivery) systems (formerly DIY systems), because they are not formally approved by health bodies (FDA, NHS etc). There are four main OS-AID systems available: [OpenAPS](https://openaps.org/what-is-openaps/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) and [Trio](https://triodocs.org).

A great way to understand the fundamentals of OS-AID looping is to read Dana Lewis’s book “Automated Insulin Delivery”. 你可以在[這裡](https://www.artificialpancreasbook.com/)免費獲取該書的電子版（或購買該書的實體書）。如果你想了解更多關於[OpenAPS](https://openaps.org/what-is-openaps/)，**AAPS**就是從該系統發展而來的，[OpenAPS](https://openaps.org/what-is-openaps/)網站是一個很好的資訊來源。

Several commercial hybrid closed loop systems have also been launched. These are very different to OS-AID systems, mainly because many of them include a “learning algorithm” which adjusts how much insulin is delivered according to your insulin needs from previous days. Many people in the OS-AID community have already tried out commercial systems and compared them with their OS-AID system. You can find out more about how the different systems compare by asking on the dedicated Facebook groups for those systems, on the [AAPS Facebook group](https://www.facebook.com/groups/AndroidAPSUsers/) or on [Discord](https://discord.com/invite/4fQUWHZ4Mw).

## 什麼是Android APS (AAPS)?

![圖片](../images/basic-outline-of-AAPS.png)

**圖1**。 Android APS (人工胰臟系統，AAPS) 的基本架構。

Android APS（**AAPS**）是一個混合閉環系統，或稱人工胰臟系統（APS）。 It makes its insulin dosing calculations using established [OpenAPS](https://openaps.org/) algorithms (a set of rules) developed by the #WeAreNotWaiting T1D community.

Since OpenAPS is only compatible with certain older insulin pumps, **AAPS** (which can be used with a wider range of insulin pumps) was first developed in 2016 for a family member with type 1 diabetes. 自那時以來，**AAPS**一直由一群志願電腦開發者和對1型糖尿病有關聯的愛好者持續發展和改進。 Today, **AAPS** is used by many thousands of people worldwide. 這是一個高度可自訂且多功能的系統，因為它是開源的，也與許多其他開源糖尿病軟體和平台相容。目前**AAPS**系統的基本組成部分如上圖**圖1**所示。



## AAPS 的基本組成部分是什麼？

AAPS 的“核心”是一個你自己建置的**應用程式**。這裡有詳細的步驟說明。然後你可以將**AAPS** 應用程式安裝在[相容](../Getting-Started/Phones.md)的**Android 智慧型手機** (**1**) 上。很多人喜歡將他們的 AAPS 循環放在另一隻獨立的手機上，而不是主要的手機因此，你不必在日常生活中使用 Android 手機，只需用於運作你的 AAPS 循環即可。

**安卓智慧型手機**也需要安裝另一個應用程式，以及 **AAPS**。 This [additional app](../Getting-Started/CompatiblesCgms.md) receives glucose data from a sensor (**2**) by Bluetooth, and then sends the data internally on the phone to the **AAPS app**.

**AAPS 應用程式**使用來自 OpenAPS 的決策過程（**演算法**）。初學者開始使用基本的 **oref0** 演算法，但隨著你在AAPS上的目標進度，可以切換到使用較新的 **oref1** 演算法。你使用哪個演算法（oref0或oref1），取決於哪個最適合你的特定情況。在兩種情況下，演算法考慮多個因素，每次從傳感器傳入新讀取值時進行快速計算。 The algorithm then sends instructions to the insulin pump (**3**) on how much insulin to deliver by Bluetooth. All the information can be sent by mobile data or Wi-Fi to the internet (**4**). 如果需要，這些資料也可以與追蹤者分享，並且/或收集用於分析。 Optionally, you can also pair a [smartwatch](../Getting-Started/Watches.md) (**5**) with the phone to see your data at a glance and, with some watches, send basic commands to **AAPS**.

## AAPS系統的優勢是什麼？

**AAPS** 使用的 OpenAPS 算法在用戶未輸入的情况下控制血糖數值，根據定義的参數（重要的包括基礎速率、胰島素敏感因子、胰島素至碳水化合物比率、胰島素活性持續時間等），每 5分鐘對新的傳感器資料做出反應。

Some of the reported advantages of using **AAPS** are extensive fine-tunable options, **Automations** and increased transparency of the system for the patient/caregiver. This can result in better control over your diabetes (or that of someone you are caring for), which in turn may give improved quality of life and increased peace of mind.

投入你的時間，**AAPS**潛在可以帶來以下好處：

- 緩解管理1型糖尿病的壓力和負擔；

- 減少來自1型糖尿病的大量瑣碎決策；

- 基於實時資料提供個性化和動態的胰島素劑量，減少低血糖治療的需要並降低高血糖發作；

- 增加對胰島素管理的了解以及更好地微調設置的信心；

- 能夠建立與你的生活方式相符的自動設置（**自動化**）；

- 改善睡眠品質並整體減少夜間干預的頻率；

- 為1型糖尿病患者的看護者提供遠端監控和胰島素輸送管理；以及

- 透過使用由**AAPS** 控制的Android手機來簡化所有可攜帶的糖尿病設備（如連續血糖監測儀接收器和胰島素控制設備）。


最終，**AAPS** 能夠幫助個人更好地管理糖尿病，從而達到穩定的血糖數值並改善長期健康結果。

### 特定優勢包括：

#### 1) 內建安全
要了解名為oref0和oref1的演算法的安全功能，[請按這裡](https://openaps.org/reference-design/)。用戶掌控自己的安全限制。

#### 2) Hardware flexibility

**AAPS** works with a wide range of insulin pumps and sensors and offers flexibility as life changes. 舉例來說，如果你對 Dexcom 傳感器貼片膠過敏，你可以考慮改用 Libre 傳感器。 Users don't have to rebuild or reinstall the **AAPS** app, just select a different pump or BG source in **Configuration** to change your hardware. **AAPS** is independent of particular pump drivers and also contains a "virtual pump" so users can safely experiment before using it on themselves.

#### 3) Highly customisable, with wide parameters

用戶可以輕鬆添加或移除模組或功能，並且 **AAPS** 可以在開放和封閉環路模式下使用。這裡有一些使用 **AAPS** 系統的可能性示例：

 a) The ability to set a lower **BG** target 30 min before eating; you can set the target as low as 72 mg/dL (4.0 mmol/L).

 b) 如果你對胰島素有抗藥性，導致血糖偏高，**AAPS** 允許你設置一個 **自動化** 規則，當血糖升高至 8 mmol/L (144 mg/dL) 時啟動，切換到（例如）120% 的配置文件（與你正常 **設定檔** 相比，相當於基礎增加20%，並加強其他因素）。自動化將根據你設定的時間持續生效。此類自動化還可以設定為僅在特定星期幾、特定時間或甚至在特定位置啟動。

 c) 如果你的孩子突然在蹦床上玩耍，**AAPS** 允許你直接透過手機暫停胰島素輸送，並設定特定的時間段。

 d) 當你因游泳而中斷幫浦再次重新連線時，**AAPS** 會根據目前血糖計算你在中斷連線期間缺少的基礎胰島素，並且小心地補充。不需要的胰島素可以透過“取消”缺少的基礎率來忽略。

 e) **AAPS** 提供設置不同情境下的不同設定檔的功能，並且能夠輕鬆切換。例如，可以更快速降低高血糖的功能（如超微量注射（**SMB**）、未預先宣布的餐前注射（**UAM**））設置為僅在白天啟用，以避免夜間低血糖的風險。

這些都是一些範例，完整的功能範圍提供了極大的靈活性來應對日常生活中的各種狀況，包括運動、疾病、荷爾蒙周期、_其他_等。最後，這些彈性功能該怎麼用，全看使用者自己決定，因為沒有一套通用的自動化規則適合每個人。

#### 4) Remote monitoring
There are multiple possible monitoring channels (Sugarmate, Dexcom Follow, xDrip, Android Auto _etc._) which are useful for parents/carers and adults in certain scenarios (sleeping/driving) who need customisable alerts. In some apps (xDrip) you can also turn alarms off totally, which is great if you have a new sensor “soaking” or settling down that you don’t want to loop with yet.

#### 5) Remote control
A significant advantage of **AAPS** over commercial systems is that it is possible for followers, using authenticated text (SMS) commands or a paired **AAPSClient** app to send a wide range of commands back to the **AAPS** system. This feature is used extensively by parents of kids with type 1 diabetes who use **AAPS**.

The remote control features can be very useful: for example, in the playground, if you want to pre-bolus for a snack from your own phone, and your child is busy playing. It is also possible to monitor the system from a smartwatch (_e.g._ Garmin) or send basic commands from it (_e.g._ a Wear OS watch such as the Samsung Galaxy Watch).

#### 6) No commercial constraints, due to open application interfaces
除了使用開源方法外，允許隨時查看**AAPS**的程式碼，提供開放的程式介面這一做法，也讓其他開發者有機會貢獻新想法。 **AAPS** 與 Nightscout 緊密整合。這加快了發展，讓用戶可以添加功能，使得與糖尿病的生活更加方便。 Good examples for such integrations are [Nightscout](https://nightscout.github.io/), [Nightscout Reporter](https://nightscout-reporter.zreptil.de/), xDrip, [M5 stack](https://github.com/mlukasek/M5_NightscoutMon/wiki) etc. 開源開發者與商業系統開發者之間的對話持續進行。 Many of the OS-AID innovations are gradually adopted by commercial systems, where developments are understandably slower, partly because interfaces between systems from different companies (pumps, apps, sensors _etc_) need to be carefully negotiated and licenced. 這也可能減緩創新，這些創新對患者（或一小部分特定需求的患者）很方便，因為這些創新無法帶來顯著的利潤。

#### 7) Detailed app interface
透過 **AAPS**，你可以輕鬆追蹤幫浦胰島素數值、套管使用時間、傳感器時間、幫浦電池時間、活性胰島素量_等等_。 Many actions can be done through the **AAPS** app (priming the pump, disconnecting the pump _etc_.), instead of on the pump itself, which means the pump can stay in your pocket or belt (or that of someone you are caring for).

#### 8) Accessibility and affordability
**AAPS** gives people who currently can’t afford to self-fund, or don’t have funding/insurance, access to a hybrid closed looping system which is conceptually years ahead, in terms of development, of the commercial systems. You currently need a reporting server (Nightscout or Tidepool) to set up **AAPS**, although it is not required for day-to-day running of the **AAPS** loop. Many people continue to use Nightscout for collecting their data, and for remote monitoring. 雖然**AAPS**本身是免費的，但透過不同的平台設置Nightscout可能會產生費用（新台幣$0 -$425），這取決於你需要的支援程度以及你是否要在設置後繼續使用Nightscout（請參閱比較表）。 **AAPS**與各種價格合理的(*起價約150歐元*) [Android手機](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true)相容。不同版本適用於特定地區和語系，AAPS還可以供[視障人士](#accessibility-for-users-aaps-who-are-partially-or-completely-blind)使用。

#### 9) Support
沒有任何自動胰島素輸送系統是完美的。市售和開源系統在通訊和臨時硬體故障方面存在許多共同的問題。 AAPS 的用戶社群遍佈全球，他們在 Facebook、Discord 和 GitHub 上提供支援，這些用戶不僅設計和開發了 **AAPS**，同時也正在使用他。市售APS系統還有Facebook支援群組，並可以從診所或商業公司獲得幫助——值得與這些系統的用戶或前用戶交流，了解常見問題、教育計劃的品質以及提供的持續支援。

#### 10) Predictability, transparency and safety
**AAPS** is transparent, logical and predictable, which may make it easier to know when a setting is wrong, and to adjust it accordingly. 你可以完全看到系統在做什麼、為什麼這樣做，以及設置其運作限制，這使得控制權（和責任）掌握在你手中。這可以讓用戶感到更有信心，並能擁有更好的睡眠品質。

#### 11) Access to advanced features through development (dev) modes including full closed loop
這份**AAPS** 文件主要集中於**“master”**分支的主流版本。然而，研究和開發始終在進行中。更有經驗的用戶可能希望探索**開發**分支中的實驗性功能。開發創新主要集中於全閉環的策略（不必為用餐注射_其他_等胰島素），並一般地努力使1型糖尿病患者的生活變得更方便。

#### 12) Ability to contribute yourself to further improvements
第1型糖尿病可能會讓人感到非常沮喪和孤立。掌控自己的糖尿病技術，並且在取得進展後幫助他人，這可以帶來極大的成就感。你可以自我學習，發現障礙，尋求解決方案，甚至為新的開發和文件貢獻力量。社群中有與你有相同目標的人可以與你交換想法並合作。這就是 #WeAreNotWaiting 的核心精神。

## AAPS 與 MDI 和開環系統相比如何？

每日多次注射 （a）（MDI，見下方**圖2**）通常包括每天注射一次長效胰島素（例如Tresiba），並在用餐時間或進行矯正時注射快速作用的胰島素（例如Novorapid、Fiasp）。 開環幫浦（b）是指使用幫浦以預先設定的速率持續注入速效胰島素作為基礎速率，並在用餐時間或進行修正時透過幫浦進行追加劑量。閉環系統（c）的基本原理是，應用程式使用傳感器的血糖資料來指導幫浦，在預測低血糖時停止胰島素輸送，並在血糖上升且預測過高時提供額外的胰島素。雖然這個圖表與現實生活相比有所簡化，但他主要在展示這些方法的關鍵區別。使用這三種方法中的任何一種都可以實現出色的血糖控制。

![21-06-23 AAPS 血糖 MDI 等等](../images/basic-overview-mdi-open-and-closed-loop.png)


**圖2**。簡單總覽了（a）MDI，（b）開環幫浦和（c）混合閉環幫浦。

## AAPS與其他閉環系統相比如何？

截至 2023 年 6 月 25 日，目前有四個主要的開源閉環系統可用：[OpenAPS](https://openaps.readthedocs.io/)、**AAPS**、[Loop](https://loopkit.github.io/loopdocs/#what-is-loop) 和 [Trio](https://triodocs.org)（先前稱為 FreeAPS X）。下表顯示了不同系統的特性：


| Device type | 名稱                                                               | [AAPS](https://wiki.aaps.app)     | [循環](https://loopkit.github.io/loopdocs/) | [Open APS](https://openaps.readthedocs.io/en/latest/) | [Trio](https://triodocs.org)      |
| ----------- | ---------------------------------------------------------------- | --------------------------------- | ----------------------------------------- | ----------------------------------------------------- | --------------------------------- |
| 手機          | Android                                                          | ![可用](../images/available.png)    | ![不可用](../images/unavailable.png)         | ![不可用](../images/unavailable.png)                     | ![不可用](../images/unavailable.png) |
| 手機          | iPhone                                                           | ![不可用](../images/unavailable.png) | ![可用](../images/available.png)            | ![不可用](../images/unavailable.png)                     | ![可用](../images/available.png)    |
| 設備          | 微型電腦 (1)                                                         | ![不可用](../images/unavailable.png) | ![不可用](../images/unavailable.png)         | ![可用](../images/available.png)                        | ![不可用](../images/unavailable.png) |
| 幫浦          | [Dana I](../CompatiblePumps/DanaRS-Insulin-Pump.md)              | ![可用](../images/available.png)    | ![可用](../images/available.png)            | ![不可用](../images/unavailable.png)                     | ![可用](../images/available.png)    |
| 幫浦          | [Dana RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)             | ![可用](../images/available.png)    | ![可用](../images/available.png)            | ![不可用](../images/unavailable.png)                     | ![可用](../images/available.png)    |
| 幫浦          | [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)               | ![可用](../images/available.png)    | ![不可用](../images/unavailable.png)         | ![不可用](../images/unavailable.png)                     | ![不可用](../images/unavailable.png) |
| 幫浦          | [Omnipod (Dash)](../CompatiblePumps/OmnipodDASH.md)              | ![可用](../images/available.png)    | ![可用](../images/available.png)            | ![不可用](../images/unavailable.png)                     | ![可用](../images/available.png)    |
| 幫浦          | [Omnipod (Eros)](../CompatiblePumps/OmnipodEros.md)              | ![可用](../images/available.png)    | ![可用](../images/available.png)            | ![不可用](../images/unavailable.png)                     | ![可用](../images/available.png)    |
| 幫浦          | [Diaconn G8](../CompatiblePumps/DiaconnG8.md)                    | ![可用](../images/available.png)    | ![不可用](../images/unavailable.png)         | ![不可用](../images/unavailable.png)                     | ![不可用](../images/unavailable.png) |
| 幫浦          | [EOPatch 2](../CompatiblePumps/EOPatch2.md)                      | ![可用](../images/available.png)    | ![不可用](../images/unavailable.png)         | ![不可用](../images/unavailable.png)                     | ![不可用](../images/unavailable.png) |
| 幫浦          | [Medtrum TouchCare Nano 200U](../CompatiblePumps/MedtrumNano.md) | ![可用](../images/available.png)    | ![可用](../images/available.png)            | ![不可用](../images/unavailable.png)                     | ![可用](../images/available.png)    |
| 幫浦          | [Medtrum TouchCare 300U](../CompatiblePumps/MedtrumNano.md)      | ![可用](../images/available.png)    | ![可用](../images/available.png)            | ![不可用](../images/unavailable.png)                     | ![可用](../images/available.png)    |
| 幫浦          | [Roche Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)     | ![可用](../images/available.png)    | ![不可用](../images/unavailable.png)         | ![不可用](../images/unavailable.png)                     | ![不可用](../images/unavailable.png) |
| 幫浦          | [Roche Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)    | ![可用](../images/available.png)    | ![不可用](../images/unavailable.png)         | ![不可用](../images/unavailable.png)                     | ![不可用](../images/unavailable.png) |
| 幫浦          | [舊款美敦力](../CompatiblePumps/MedtronicPump.md)                     | ![可用](../images/available.png)    | ![可用](../images/available.png)            | ![可用](../images/available.png)                        | ![可用](../images/available.png)    |
| 幫浦          | [Equil 5.3](../CompatiblePumps/Equil5.3.md)                      | ![可用](../images/available.png)    | ![不可用](../images/unavailable.png)         | ![不可用](../images/unavailable.png)                     | ![不可用](../images/unavailable.png) |
| 幫浦          | [CareLevo](../CompatiblePumps/CareLevo.md)                       | ![可用](../images/available.png)    | ![不可用](../images/unavailable.png)         | ![不可用](../images/unavailable.png)                     | ![不可用](../images/unavailable.png) |
| CGM         | [Dexcom G7/One+/Stelo](../CompatibleCgms/DexcomG7.md)            | ![可用](../images/available.png)    | ![可用](../images/available.png)            | ![不可用](../images/unavailable.png)                     | ![可用](../images/available.png)    |
| CGM         | [Dexcom One](../CompatibleCgms/DexcomG6.md)                      | ![可用](../images/available.png)    | ![可用](../images/available.png)            | ![不可用](../images/unavailable.png)                     | ![可用](../images/available.png)    |
| CGM         | [Dexcom G6](../CompatibleCgms/DexcomG6.md)                       | ![可用](../images/available.png)    | ![可用](../images/available.png)            | ![可用](../images/available.png)                        | ![可用](../images/available.png)    |
| CGM         | [Libre 3/3+](../CompatibleCgms/Libre3.md)                        | ![可用](../images/available.png)    | ![可用](../images/available.png)            | ![不可用](../images/unavailable.png)                     | ![可用](../images/available.png)    |
| CGM         | [Libre 2/2+](../CompatibleCgms/Libre2.md)                        | ![可用](../images/available.png)    | ![可用](../images/available.png)            | ![不可用](../images/unavailable.png)                     | ![可用](../images/available.png)    |
| CGM         | [Libre 1](../CompatibleCgms/Libre1.md)                           | ![可用](../images/available.png)    | ![可用](../images/available.png)            | ![不可用](../images/unavailable.png)                     | ![可用](../images/available.png)    |
| CGM         | [Eversense](../CompatibleCgms/Eversense.md)                      | ![可用](../images/available.png)    | ![可用](../images/available.png)            | ![不可用](../images/unavailable.png)                     | ![可用](../images/available.png)    |
| CGM         | [MM640g/MM630g](../CompatibleCgms/MM640g.md)                     | ![可用](../images/available.png)    | ![不可用](../images/unavailable.png)         | ![不可用](../images/unavailable.png)                     | ![不可用](../images/unavailable.png) |
| CGM         | [PocTech](../CompatibleCgms/PocTech.md)                          | ![可用](../images/available.png)    | ![不可用](../images/unavailable.png)         | ![不可用](../images/unavailable.png)                     | ![不可用](../images/unavailable.png) |
| CGM         | [歐態（Ottai）](../CompatibleCgms/OttaiM8.md)                        | ![可用](../images/available.png)    | ![不可用](../images/unavailable.png)         | ![不可用](../images/unavailable.png)                     | ![不可用](../images/unavailable.png) |
| CGM         | [Syai Tag](../CompatibleCgms/SyaiTagX1.md)                       | ![可用](../images/available.png)    | ![不可用](../images/unavailable.png)         | ![不可用](../images/unavailable.png)                     | ![不可用](../images/unavailable.png) |
| CGM         | [Nightscout 作為血糖來源](../CompatibleCgms/CgmNightscoutUpload.md)    | ![可用](../images/available.png)    | ![可用](../images/available.png)            | ![可用](../images/available.png)                        | ![可用](../images/available.png)    |

_表格說明：_
1. 一個 **設備** 是一個隨身攜帶的小型電腦，沒有顯示螢幕。支援的設備類型包括Intel Edison + Explorer Board，另一種是Raspberry Pi + Explorer HAT或Adafruit RFM69HCW Bonnet。 The first APS systems were based on this setup, as mobile phones were not capable of running the required algorithms. 隨著手機設置變得更簡單，並且手機內建顯示螢幕，這些系統的使用已經減少。 Intel也已經停止銷售Intel Edison。優秀的 OpenAPS 演算法 **oref0** 與 **oref1** 現已整合進 AAPS 與 Trio。


2022年發表了一篇由醫療專業人士撰寫的國際同行評審共識聲明，其中包含了關於開源閉環系統的實用指南，發表於一家領先的醫學期刊：[_Lancet Diabetes Endocrinol_, 2022; 10: 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_)。 It is well worth a read (including for your diabetes clinic) and summarizes the main technical differences between the different open-source hybrid closed loop systems.

很難在沒有實際使用系統或與其他使用者交流的情況下對任何系統有真實的感受，因此，建議你可以透過 Facebook 或 Discord 等平台與其他使用者聯繫並詢問他們的經驗。 Most people find that **AAPS** is incredibly sophisticated in comparison to other hybrid closed loop systems (particularly the commercial systems), with a huge number of potentially customizable settings and features, discussed above. Some people can find this a little overwhelming at the beginning, but there is no rush to investigate all the possibilities at once. You can progress as slowly or as fast as you would like, and there is help available at every step of the way.


## AAPS是否使用人工智慧或任何學習演算法？

The current version of **AAPS** (4.0) does not have any machine learning algorithms, multiple-parameter insulin response models, or artificial intelligence. 因此，該系統是開放且透明的，操作方式可以被非專家以及臨床醫生和患者暸解。 It also means that if you have a sharply varying schedule (maybe switching from a stressful week at work to a relaxing holiday) and are likely to need a significantly different amount of insulin, you can immediately switch **AAPS** to run a weaker/stronger customized profile. ‘學習系統’會自動為你進行這種調整，但可能需要更長的時間來調整胰島素的輸送。

(which-system-is-right-for-me-or-my-dependent)=
## Which system is right for me or someone I am caring for?

實際上，你的系統選擇通常受限於你已有的幫浦，或你能從醫療提供者那裡獲得的幫浦，以及你選擇的手機（Apple或Android）。如果你還沒有幫浦，你有最大的系統選擇權利。技術不斷進步，幫浦被逐漸淘汰，並且有新的幫浦和傳感器推出。大多數開源系統可與主要的傳感器（Libre和Dexcom）配合使用，或在傳感器推出約一年後迅速適應新傳感器（經過一段時間的安全性和穩定性測試）。

大多數**AAPS**用戶報告在使用系統後有更多的時間保持在正常範圍內，HbA1c下降，以及夜間系統自動調整基礎率時，睡眠品質提高，這在大多數混合閉環系統中也是如此。 Some people have a preference for a very simple system which is not very customizable (which means you may prefer a commercial system), and others find this lack of control very frustrating (you may prefer an open-source system). If you (or someone you are caring for) are newly diagnosed, a common route is to get used to using MDI plus a glucose sensor first, then progress to a pump which has the potential for looping, then progress to **AAPS**, but some people (especially small kids) may go straight to a pump.

值得注意的是，**AAPS**用戶需要主動解決問題，並在社群的幫助下自行修復問題。這與使用市售系統的心態完全不同。使用**AAPS**的用戶擁有更多的控制權，但也需要承擔更多的責任，並且需要對此感到舒適。

## 使用像AAPS這樣的開源系統是否安全？

### AAPS系統的安全性
一個更正確的問法可能是「與我目前的胰島素輸送系統相比，他是否安全」，因為任何胰島素輸送方法都不是完全無風險的。 **AAPS**系統中有許多檢查和平衡機制。 A recent [paper](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375) looked at the use of **AAPS** in a computer-simulated setup, which was an effective way to objectively trial how safe and effective the system is. More generally, many thousands of individuals worldwide are using open-source automated-insulin delivery systems, and uptake continues to increase globally.

任何使用無線通訊的設備都有可能被駭客入侵，這對非閉環的胰島素幫浦也是如此。目前，我們尚未聽說有人試圖透過駭入糖尿病相關的醫療設備來傷害他人。然而，有多種方法可以防範此類風險：

1.  在幫浦設置中，將最大注射量和臨時基礎率限制在你認為最安全的範圍內。這些都是我們認為任何惡意駭客都無法繞過的硬限制。

2.  設置你的CGM警報，針對高低血糖啟用警報功能。

3.  線上監控你的胰島素輸送。 Nightscout用戶可以設置額外的警報，針對多種情況發出警示，這些情況比惡意攻擊更有可能發生。除了高低血糖警報之外，Nightscout還可以顯示診斷資料，用來確認幫浦是否按照預期運作，包括目前的IOB、幫浦臨時基礎率歷史、幫浦注射歷史等。他還可以被配置為主動警告用戶不希望發生的情況，例如預測的高低血糖、胰島素儲量不足以及幫浦電池電量低。

如果有人對你的胰島素幫浦發動惡意攻擊，這些策略將大大減少風險。每位潛在的**AAPS** 用戶都需要權衡使用**AAPS**所涉及的風險，與使用其他系統的風險進行比較。

#### 關於過快改善血糖控制的安全考量

迅速降低HbA1c並改善血糖控制聽起來很吸引人。然而，透過開始任何閉環系統過快降低平均血糖數值可能會導致永久損害，包括眼睛損傷，以及不可逆的疼痛性神經病變。只要緩慢降低血糖數值，就可以避免這些損害。若你目前的 HbA1c 偏高，且正要改用 AAPS（或任何其他封閉式循環系統），請在開始前與你的醫療團隊討論這項潛在風險，並與他們協議一個時間規劃。關於如何安全地降低你的血糖值的更多一般性資訊（包含醫學文獻連結），請參閱安全性章節的 [此處](#preparing-safety-first)。

#### 關於設備、耗材和其他藥物的醫療安全

使用經過測試、功能完善的FDA或CE認證的胰島素幫浦和CGM來建立人工胰臟閉環系統。對這些組件進行硬體或軟體修改可能會導致胰島素劑量異常，對使用者造成重大風險。如果你發現損壞、改裝或自製的胰島素幫浦或CGM接收器，請不要拿來建立AAPS系統。

請使用幫浦和CGM製造商批准的原裝耗材，如插入器、導管和胰島素容器。使用未經測試或修改的耗材可能會導致 CGM 不準確和胰島素劑量錯誤。胰島素劑量錯誤非常危險——請不要拿自己的生命開玩笑，隨便修改耗材。

在使用 **AAPS**時，請不要服用SGLT-2抑制劑（格列酮類藥物），因為他們會無法預測地降低血糖數值。將這種效果與降低基礎率以增加血糖的系統結合使用是危險的，詳細訊息可參閱主安全部分[這裡](#preparing-safety-first)。

(introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team)=
## 我該如何與我的臨床團隊討論AAPS？

建議用戶與其臨床醫生討論使用**AAPS** 的想法。 Please do not be afraid to have an honest conversation with your diabetes team if you intend to use **AAPS** (or any other OS-AID loop, for that matter). 患者與醫生之間的透明度和信任非常重要。

### 建議的方法：
與你的臨床醫生開始對話，了解他們對糖尿病技術（如CGM、幫浦、混合閉環系統和市售閉環系統）的熟悉程度和態度。你的臨床醫生/內分泌專家應該了解基本技術，並願意與你討論其地區內市售閉環產品的最新進展。

#### 當地先例

Obtain your clinicians/endocrinologists’ views on OS-AID loop _vs_ commercial looping, and gauge their knowledge in this area. Are they familiar with **AAPS** and can they share with you any helpful experience of working with patients with OS-AID looping?

Ask if your team has any patients under their care who already use OS-AID looping. 由於患者隱私，醫生無法在未經個人同意的情況下將其他患者的資料告訴你。 However, if you want to, you **can** ask them to pass **your** contact details to an existing OS-AID looping patient if there is one the clinician feels you might "click” with, suggesting that you would be happy for the patient to contact you to discuss OS-AID looping. 臨床醫生並非有義務這樣做，但有些醫生樂意這麼做，因為他們意識到點對點支援在1型糖尿病管理中的重要性。 You may also find it useful to meet local friendly OS-AID loopers. 當然，這完全取決於你自己，也不是必須的。

#### 國內和國際先例

如果你覺得你的醫療團隊不支援你使用**AAPS** ，以下討論點可能會有幫助：

a) **AAPS** 系統是由患者及其看護者設計的。他的設計最終是為了安全，同時也借鑒了深入的患者經驗。 There are many thousands of **AAPS** users worldwide. There is therefore likely to be other patients using OS-AID looping in your clinic's patient population (whether they know about it or not).

b) Recent peer-reviewed published guidance in the internationally leading medical journal [The Lancet](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/pdf/nihms-1765784.pdf)_(1)_ has confirmed that OS-AID loops are **safe** and **effective at improving diabetic control**, including time in range. There are regular articles in leading journals like [Nature](https://doi.org/10.1038/d41586-023-02648-9)_(3)_ which highlight the progress of the OS-AID looping community.

c) 使用 **AAPS** 需 _一步步_ 的使用，從“開環”幫浦開始，經過低血糖暫停功能，再進入混合“閉環”模式，這一過程需要完成一些目標。因此有一個結構化的計劃，要求用戶在每個階段展示一定的能力，並微調他們的基礎設置（基礎率、ISF和ICR），然後才能關閉閉環。

d) Technical support is available to you from the OS-AID community through GitHub, Discord and Facebook closed groups.

e) 在診所會議中，你將能提供**CGM和胰島素閉環/幫浦資訊**的綜合報告（透過Nightscout或Tidepool），無論是列印出來還是顯示在螢幕上（如果你攜帶筆記型電腦或平板電腦）。 CGM和胰島素資料的整合將更有效地利用臨床醫生的時間來審查你的報告，並有助於他們在評估你的進展時進行討論。

f) 如果你的醫療團隊仍然強烈反對，請將本文中提到的參考文章的列印件交給你的臨床醫生，並將網頁連結提供給 **AAPS**臨床醫生部分：[臨床醫生 – **AAPS**的一般介紹和指南](../UsefulLinks/ClinicianGuideToAaps.md)

#### Support for OS-AID looping by other clinicians

發表於[Lancet Diabetes Endocrinology](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/) (_1_) [由Kings’和Guy’s以及St Thomas’ NHS Foundation Trust共同領導，並由倫敦King’s榮譽高級講師兼顧問糖尿病專家Sufyan Hussain博士共同領導] 的文章提供了：

a) **Assurance** for professionals that OS-AID artificial pancreas systems/ open source as a “safe and effective treatment” option for type 1 diabetes and provides guidance on recommendations, discussions, supports, documentation;

b) 認識到開源自動胰島素輸送（AID）系統可以增加血糖範圍內的時間（TIR），同時減少血糖濃度的波動以及各年齡段、性別和社群中的低血糖和高血糖事件的發生次數；

c) **建議**醫護人員應該**支援**選擇使用開源AID系統來管理其糖尿病的1型糖尿病患者或他們的照護者；

d) 建議醫護人員應努力了解可能對患者有益的所有治療選擇，包括可用的開源AID系統。如果醫護人員沒有資源來自我教育，或者有法律或監管方面的擔憂，他們應考慮**與其他醫護人員合作或組隊**，以便提供幫助；

e) 強調所有CGM用戶應該隨時擁有**即時且開放的健康資料讀取權限**

f) 強調這些開源系統沒有經過與市售醫療技術相同的監管評估，且沒有商業技術支援。然而，**廣泛的社群支援**可用；

g) 建議更新監管和法律框架，以確保針對這類開源系統的倫理和有效治療有明確規範。

另一篇發表於[Medical Law International2021年](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf) (_4_) 的文章也強調了英國普通醫務委員會的‘同意指導’，該指導強調醫生與患者共同決策的重要性。 The doctor should explain the potential benefits, risks, burdens and side-effects on OS-AID APS and may recommend a particular option without pressuring the patient.

Ultimately it is up to the patient to weigh up these factors, along with any non-clinical issues relevant to them and decide which treatment option, if any, to accept.

If a doctor discovers in a clinic that their patient is looping with an OS-AID system, they are not exempted from their obligations to monitor the patient, simply because they did not prescribe the particular piece of technology the patient is using; clinicians must continue to monitor patients.

醫生（至少在英國）並未被禁止處方未經許可的藥物，他們可以使用自己的臨床判斷。 They should therefore use their clinical judgement to decide if an OS-AID APS is suitable for a specific patient, and discuss what they consider to be the pros and cons with the patient.

#### 上文提到的文章，以及其他有用的連結和立場聲明如下所示：

1. 開源自動胰島素傳遞：國際共識聲明和健康護理專業人士的實用指南 [_Lancet Diabetes Endocrinol_, (2022) _10_, 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)
2. [基於開源Android人工胰臟的數位試驗：測試DIY系統安全性和有效性的新範式，2020年](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375)
3. DIY‘仿生胰臟’正在改變糖尿病護理——接下來會發生什麼？ [_Nature_ (2023), _620_, 940-941](https://doi.org/10.1038/d41586-023-02648-9)
4. 處方未經批准的醫療設備？ DIY人工胰臟系統案例 [_國際醫療法_, (2021), _21_, 42-68](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)
5. [柏林健康研究所立場聲明，2022年](https://www.bihealth.org/en/notices/do-it-yourself-solutions-for-people-with-diabetes-are-safe-and-recommended)
6. DIY自動胰島素輸送：醫護人員使用者指南（加拿大糖尿病協會立場和指南）[_糖尿病加拿大的立場和指南_, (2023)_47_, E8, 389-397](https://www.canadianjournalofdiabetes.com/article/S1499-2671(23)00138-7/fulltext)
7.  荷蘭（EN/NL）- 致醫護人員 - [如何幫助使用開源自動胰島素輸送系統的人](https://www.diabetotech.com/blog/how-to-help-people-on-open-source-automated-insulin-delivery-systems)
8. 首次使用開源自動胰島素傳遞 AndroidAPS 在全封閉循環情況下: Pancreas4ALL 隨機化試點研究 [_糖尿病科技. Ther._, 25, _5_, 2023](https://www.liebertpub.com/doi/pdf/10.1089/dia.2022.0562?casa_token=D13eFx5vCwwAAAAA:MYvO8hChbViXVJFgov1T11RXBPx2N_wOMThLHwl3TVUxbCuANegPrIFRC5R5VXx_S71FoQYW-qg)
9. 從傳感器輔助幫浦切換到AndroidAPS混合閉環的學齡前和學齡兒童的益處：回顧性分析 [_兒科. 糖尿病_ 2021, _22_, 594-604. 2021](https://onlinelibrary.wiley.com/doi/epdf/10.1111/pedi.13190)
10. OPEN專案的成果，這是一項歐盟資助的研究，主要在探索患者使用新型DIY人工胰臟技術的證據（https://www.open-diabetes.eu/publications）



## 為什麼我不能直接下載AAPS並立即使用？

**AAPS** 應用程式並未在Google Play上架，基於法律原因，你自必從原始碼開始建置。 **AAPS** 沒有醫療許可證，這代表他沒有獲得任何國家監管機構的批准。 **AAPS** 被認為是你在自己身上進行的醫學實驗，並且是由用戶自行承擔風險進行的。

設置系統需要耐心、決心和逐步發展的技術知識。所有訊息和支援都可以在這些文件中、線上或從已經完成的人那裡找到。 Many thousands of people have successfully built and are currently using **AAPS** worldwide.

**AAPS** 的開發者非常重視安全，並希望其他人能夠有良好的使用經驗。這就是為什麼每個用戶（或是看護者，如果用戶是兒童）都需要：

- 自己建置AAPS系統，並完成**目標** ，以便在他們“閉環”之前，擁有合理良好的個人化設定，並了解 **AAPS** 的基本運作原理；

- backs up their system by exporting and saving important files (like keystore and settings .json file) somewhere safe, so you can set up again quickly if needed;

- 隨著新版本的推出，及時更新到最新的主版本；並且

- 維護和監控系統，以確保其正常運作。

## AAPS系統的連線性如何？

**Figure 3 (below)** shows one example of the **AAPS** system for a user who does not require any followers interacting with the system. 還可以集成其他未顯示的開源軟體和平台。

![21-06-23 AAPS 連線性無追蹤者](../images/AAPS-connectivity-no-followers.png)


**Figure 4 (below)** shows the full potential of the **AAPS** system for a user who has followers and needs to monitor and adjust the system remotely (like a child with type 1 diabetes). 還可以集成其他未顯示的開源軟體和平台。

![21-06-23 AAPS 追蹤者系統總覽](../images/AAPS-overview-with-followers.png)

## AAPS 如何持續開發和改進？

大多數**AAPS** 用戶使用經過全面測試的主版本，該版本在發布給社群之前已進行錯誤和問題的測試。在幕後，開發者會嘗試新改進，並在“開發者”(**dev**) 版本的**AAPS** 中進行測試，與願意短期內進行錯誤更新的用戶社群進行測試。如果這些改進效果良好，則會發布為新的“master”版本**AAPS** 。任何新的主版本發布都會在Facebook群組中公告，以便主流**AAPS** 用戶閱讀並更新到新的主版本。

一些有經驗且自信的**AAPS** 用戶會使用開發者版本的**AAPS** 應用程式進行新技術的實驗，對於不那麼冒險的用戶來說，這些實驗非常有趣，可以閱讀但不必自己操作！人們通常會在Facebook群組中分享這些實驗。

你可以在這裡閱讀更多關於這些實驗和新技術討論的內容：

Tim Street [https://www.diabettech.com/](https://www.diabettech.com/)

David Burren [https://bionicwookie.com/](https://bionicwookie.com/)

## 誰可以從AAPS中受益？

| 用戶類型                                        |
| ------------------------------------------- |
| ✔️ 第1型糖尿病                                   |
| ✔️ 第1型糖尿病患者的看護者或父母                          |
| ✔️ 盲人第1型糖尿病患者                               |
| ✔️ *clinicians and healthcare professionals |

The above table assumes that the user has access to both a continuous glucose monitor and an insulin pump.

*透過資料共享平台（包括Nightscout），所有來自**AAPS** 的資料都可以提供給醫療專業人士，Nightscout提供CGM資料的紀錄和實時監控，胰島素輸送、碳水化合物輸入、預測和設置。 Nightscout 紀錄包含每日與每週報告，可透過更精確的血糖控制與任何行為面考量的資料，協助醫療專業人員與第 1 型糖尿病患者進行討論。

(accessibility-for-users-aaps-who-are-partially-or-completely-blind)=

### Accessibility for AAPS users who are partially or completely blind

#### AAPS的日常使用：
AAPS 可以由盲人使用。在Android設備上，操作系統有一個名為TalkBack的程式。這允許透過語音輸出來進行螢幕導覽，這是操作系統的一部分功能。使用TalkBack，你可以在不需要看到螢幕的情況下操作你的智慧型手機和AAPS。

#### 建置AAPS應用程式：
作為用戶，你將在Android Studio中建置AAPS應用程式。許多人會為此使用 Microsoft Windows，其中有與 TalkBack 類似的螢幕閱讀器。由於Android Studio是Java應用程式，因此必須在控制面板中啟用“Java Access Bridge”組件。否則，PC的螢幕閱讀器將無法在Android Studio中發聲。

如何操作取決於你的操作系統，以下提供了兩種方法：

1）在Windows開始選單中，輸入“控制面板”進行搜索，按Enter鍵打開。打開：“所有控制面板項目”。

打開“輕鬆存取中心”。

然後按Enter鍵打開“在無顯示器的情況下使用電腦”。

Under **Hear text read aloud**, select **turn on narrator** and **turn on audio display**, then click **apply**.

或：

2）按下Windows鍵並在搜索欄中輸入“控制面板”，然後按Enter鍵打開。打開：“所有控制面板項目”。

按下字母C以進入“輕鬆存取中心”，然後按Enter鍵打開。

接著按Enter鍵打開“在無螢幕的情況下使用電腦”。

在底部，你會找到“啟用Java Access Bridge”選項框，選擇他。

完成後，關閉窗口即可！螢幕閱讀器現在應該可以工作了。



有興趣了解如何開始設置AAPS嗎？請查看 [事前準備](../Getting-Started/PreparingForAaps.md)章節。
