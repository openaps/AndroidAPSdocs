# APS 和 AAPS 的介紹

## 什麼是“人工胰臟系統”?

人類的胰臟除了調節血糖外，還有許多其他功能。 然而，**” 人工胰臟系統” (APS)** 通常指的是一個能自動將血糖維持在健康範圍內的系統。

最基本的方式是透過檢測**血糖值**，使用這些數據進行**計算**，然後將預測的適當量的**胰島素**注入體內。 這個系統每隔幾分鐘會重複進行一次計算，全天候24/7運作。 它使用**警報**和**通知**來告知使用者是否需要介入或注意。 這個系統通常由一個**血糖傳感器**、一個**胰島素幫浦**以及手機上的一個**應用程式**組成。

你可以在這篇2022年的回顧文章中閱讀更多關於目前使用及開發中的各種人工胰臟系統：

![Frontiers](./images/FRONTIERS_Logo_Grey_RGB.png) [閉環技術的未來方向](https://www.frontiersin.org/articles/10.3389/fendo.2022.919942/full#:~:text=Fully%20closed%2Dloop%20systems%2C%20unlike,user%20input%20for%20mealtime%20boluses)

在不久的將來，一些所謂的“雙激素”系統還將能夠同時注射胰高血糖素與胰島素，目的是預防嚴重的低血糖，並實現更嚴密的血糖控制。

人工胰臟被認為是[“糖尿病的自動駕駛”](https://www.artificialpancreasbook.com/)。 那是什麼意思？

在飛機上，自動駕駛並不完全取代人類飛行員的工作，飛行員無法在整個飛行過程中睡覺。 自動駕駛輔助飛行員的工作。 它減輕了飛行員需要持續監控飛機的負擔，讓飛行員可以不時地進行更廣泛的監控。 自動駕駛從各種感測器接收訊號，計算機會與飛行員的指示一起評估這些訊號，然後進行必要的調整，並向飛行員發出任何問題的警告。 飛行員不再需要不斷做出決策。

![image](./images/autopilot.png)

## 什麼是混合閉環系統？

對於1型糖尿病患者來說，最好的解決方案可能是“功能性治療”（可能是植入免疫系統無法攻擊的胰臟細胞）。 在我們等待這個解決方案的同時，一個“完全閉環”的人工胰臟系統可能是目前最接近的理想方案。 這是一種不需要任何使用者輸入（例如為進餐注射胰島素或通知運動）的技術系統，並能夠很好地調節血糖水平。 目前，尚無“完全”閉環系統廣泛上市，所有的系統都需要一些使用者輸入。 目前可用的系統稱為“混合”閉環系統，因為它們結合了自動技術與使用者輸入。

## 為什麼循環控制系統會開始發展？

為1型糖尿病患者開發商業技術的進度非常緩慢。 在2013年，1型糖尿病社群發起了#WeAreNotWaiting運動。 他們使用現有的認證技術（胰島素幫浦和感測器）自行開發系統，以改善血糖控制、安全性和生活品質。 這些系統被稱為DIY（自製）系統，因為它們並未經過正式的健康機構（如FDA、NHS等）的認證。 目前有四個主要的DIY系統可用：[OpenAPS](https://openaps.org/what-is-openaps/)、**AAPS**、[Loop](https://loopkit.github.io/loopdocs/#what-is-loop)和[iAPS](https://github.com/Artificial-Pancreas/iAPS?fbclid=IwAR2fA9Y9YqYzpKSrtEsotfXl5b67UclDkKgyrv52tQLzYbOoBeNGRmjlJJI)。

理解DIY循環控制系統基本原理的絕佳方式是閱讀Dana Lewis的書《自動化胰島素輸送》。 你可以在[這裡](https://www.artificialpancreasbook.com/)免費獲取該書的電子版（或購買該書的實體書）。 如果你想了解更多關於[OpenAPS](https://openaps.org/what-is-openaps/)，**AAPS**就是從該系統發展而來的，[OpenAPS](https://openaps.org/what-is-openaps/)網站是一個很好的資訊來源。

目前已經有幾個商業混合閉環系統問世，其中最新的是 [CamAPS FX](https://camdiab.com/)（英國和歐盟）和 [Omnipod 5](https://www.omnipod.com/en-gb/what-is-omnipod/omnipod-5)（美國和歐盟）. 這些系統與DIY系統非常不同，主要是因為它們都包含一個“學習算法”，該算法根據你過去幾天的胰島素需求調整胰島素的輸送量。 許多DIY社群的成員已經嘗試過這些商業系統，並將它們與自己的DIY系統進行了比較。 You can find out more about how the different systems compare by asking on the dedicated Facebook groups for these systems, on the [AAPS Facebook group](https://www.facebook.com/groups/AndroidAPSUsers/) or on [Discord](https://discord.com/invite/4fQUWHZ4Mw).

## 什麼是Android APS (AAPS)?

![image](./images/basic-outline-of-AAPS.png)

**圖1**。 Android APS (人工胰臟系統，AAPS) 的基本概述。

Android APS（**AAPS**）是一個混合閉環系統，或稱人工胰臟系統（APS）。 它使用 [OpenAPS](https://openaps.org/) 社群所開發的演算法（即一套規則）來進行胰島素劑量計算，這些演算法是由#WeAreNotWaiting的1型糖尿病社群所開發。

由於OpenAPS只相容於某些較舊的胰島素幫浦，**AAPS**（可以搭配更多類型的胰島素幫浦使用）於2016年由Milos Kozak為其家族中的一位1型糖尿病患者開發。 自那時以來，**AAPS**一直由一群志願電腦開發者和對1型糖尿病有關聯的愛好者持續發展和改進。 Today, **AAPS** is used by approximately 10,000 people. 它是一個高度可自訂且多功能的系統，並且由於它是開源的，因此也可以很容易地與許多其他開源的糖尿病軟體和平台兼容。 當前**AAPS**系統的基本組成部分如上圖**圖1**所示。



## AAPS 的基本組成部分是什麼？

AAPS 的“核心”是一個你自己構建的**應用程式**。 這裡有詳細的步驟說明。 然後你可以將** AAPS** 應用程式安裝在[相容](https://docs.google.com/spreadsheets/d/1zO-Vf3wv0jji5Gflk6pe48oi348ApF5RvMcI6NG5TnY/edit?pli=1#gid=2097219952)的** Android 智慧型手機** (**1**) 上。 一些用戶更喜歡將環路運行在與主手機分開的手機上。 因此，您不必在日常生活中使用 Android 手機，只需用於運行您的 AAPS 環路即可。

**安卓智能手機**也需要安裝另一個應用程式，以及 **AAPS**。 這是一個修改過的 Dexcom 應用程式，稱為自建 Dexcom 應用程式[**BYODA**](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0) 或 [**Xdrip+**](https://xdrip.readthedocs.io/en/latest/install/usethedoc/)。 這個附加應用程序通過藍牙從傳感器(**2**) 接收葡萄糖資料，然後將資料內部發送到手機上的 **AAPS 應用程序**。

**AAPS 應用程式**使用來自 OpenAPS 的決策過程（**演算法**）。 初學者開始使用基本的 **oref0** 演算法，但隨著您在AAPS上的目標進度，可以切換到使用較新的 **oref1** 演算法。 你使用哪個演算法（oref0或oref1），取決於哪個最適合您的特定情況。  在兩種情況下，演算法考慮多個因素，每次從感測器傳入新讀數時進行快速計算。 演算法然後通過藍牙將指令發送到胰島素幫浦（**3**），指示其提供多少胰島素。 所有訊息可以通過手機數據或wifi發送到互聯網（**4**） 如果需要，這些資料也可以與追隨者分享，並且/或收集用於分析。

## AAPS系統的優勢是什麼？

**AAPS** 使用的 OpenAPS 算法在用戶未輸入的情况下控制血糖水平，根據定義的参數（重要的包括基礎速率、胰島素敏感因子、胰島素至碳水化合物比率、胰島素活性持續時間等），每 5分鐘對新的傳感器資料做出反應。 據報導，使用 AAPS 的一些優點包括廣泛的可調選項、自動化和增加患者/照護者對系統的透明度。 這可幫助更好地控制您(或您的扶養者) 的糖尿病，從而可能提高生活品質並增加內心的平靜。

### **特定優勢包括：**

#### 1) 內建安全
要了解名為oref0和oref1的演算法的安全功能，[請按這裡](https://openaps.org/reference-design/)。 用戶掌控自己的安全限制。

#### 1) **硬體彈性**

**AAPS** 與各種胰島素幫浦和傳感器配合使用。 舉例來說，如果你對 Dexcom 感應器貼片膠過敏，你可以考慮改用 Libre 傳感器。 隨著生活變化，提供靈活性。 您不必重新構建或重新安裝**AAPS**應用程式，在應用程式中勾選另一個選項以更改您的硬體即可。 AAPS 獨立於特定的幫驅動程式，還包含一個"虛擬幫浦"，因此用戶可以在使用之前進行安全實驗。

#### 2) **高度可定製化，具有廣泛的參數**

用戶可以輕鬆添加或移除模塊或功能，並且 **AAPS** 可以在開放和封閉環路模式下使用。 這裡有一些使用 **AAPS** 系統的可能性示例：

 a) 在進食前的30分鐘設定較低的葡萄糖目標；您可以將目標設定為低至72 mg/dL（4.0 mmol/L）。

 b) 如果您對胰島素有抗藥性，導致血糖偏高，**AAPS** 允許您設置一個 **自動化** 規則，當血糖升高至 8 mmol/L (144 mg/dL) 時啟動，切換到（例如）120% 的配置文件（與您正常 **個人設置** 相比，相當於基礎增加20%，並加強其他因素）。 自動化將根據您設定的時間持續生效。 此類自動化還可以設定為僅在特定星期幾、特定時間或甚至在特定位置啟動。

 c) 如果您的孩子突然在蹦床上玩耍，**AAPS** 允許您直接通過手機暫停胰島素輸送，並設定特定的時間段。

 d) 當您重新連接因游泳而斷開的幫浦時，**AAPS** 會根據當前血糖計算您在斷開連線期間遺漏的基礎胰島素，並小心地補充。 不需要的胰島素可以通過“取消”遺漏的基礎率來忽略。

 e) **AAPS** 提供設置不同情境下的不同設定檔的功能，並且能夠輕鬆切換。 例如，可以將更快速降低高血糖的功能（如超微量注射（**SMB**）、未預先宣布的餐前注射（**UAM**））設置為僅在白天啟用，以避免夜間低血糖的風險。

這些都是一些範例，完整的功能範圍提供了極大的靈活性來應對日常生活中的各種狀況，包括運動、疾病、荷爾蒙周期、_其它_等。 最後，這些彈性功能該怎麼用，全看使用者自己決定，因為沒有一套通用的自動化規則適合每個人。

#### 3) **遠端監控**
有多種可能的監控渠道（如 Sugarmate、Dexcom Follow、Xdrip+、Android Auto 、_其它_等），這對於父母/照護者以及需要自定義警報的成人（如睡覺/駕駛時）特別有用。 在某些應用（如 Xdrip+）中，您還可以完全關閉警報，這在您不想讓新傳感器進行循環時（如傳感器尚未完全穩定）很有用。

#### 4) **遠端控制**
**AAPS** 相對於商業系統的一個重大優勢是，關注者可以通過認證的簡訊（SMS）指令或應用程式（如 [Nightscout](https://nightscout.github.io/) 或 AAPSClient）向 **AAPS** 系統發送多種指令。 這被第1型糖尿病兒童的父母們廣泛使用，他們使用AAPS。 例如，在遊樂場時，您可以通過自己的手機為孩子的點心提前注射，而孩子則繼續玩耍。 系統可透過不同裝置（_如_ Fitbit）進行監控，發送基本指令（_如_ Samsung Galaxy watch 4），甚至可以使用高階智慧手錶(**5**（_如_ LEMFO LEM14）運行整個 AAPS 系統。 在這種情況下，您不需要使用手機運行AAPS。 隨著手錶的電池壽命提高和技術變得更加穩定，這最後一個選項可能會變得越來越具吸引力。

#### 5) **沒有商業限制，因為開放應用介面**
除了使用開源方法外，允許隨時查看**AAPS**的程式碼，提供開放編程界面的一般原則也讓其他開發人員有機會貢獻新想法。 **AAPS** 與 Nightscout 緊密整合。 這加快了發展，讓用戶可以添加功能，使得與糖尿病的生活更加方便。 這些整合的好例子包括[NightScout](https://nightscout.github.io/)，[Nightscout Reporter](https://nightscout-reporter.zreptil.de/)，[Xdrip+](https://xdrip.readthedocs.io/en/latest/install/usethedoc/)，[M5 stack](https://github.com/mlukasek/M5_NightscoutMon/wiki?fbclid=IwAR1pupoCy-2GuXLS7tIO8HRkOC_536YqSxTK7eF0UrKkM1PuucFYRyPFvd0)等等。 開源開發者與商業系統開發者之間的對話持續進行。 許多 DIY 創新逐漸被商業系統採用，儘管開發速度較慢，這在一定程度上是因為不同公司的系統（如幫浦、應用程式、傳感器等）之間的介面需要謹慎協商和授權。 這也可能減緩創新，這些創新對患者（或一小部分特定需求的患者）很方便，因為這些創新無法帶來顯著的利潤。

#### 6) **詳細應用程式介面**
透過 **AAPS**，您可以輕鬆追蹤幫浦胰島素水平、套管使用時間、傳感器時間、幫浦電池時間、體內胰島素量_等等_。 許多操作可以直接在 **AAPS** 應用中完成（如幫浦注射、幫浦斷開等），無需在幫浦本身上操作，這樣幫浦可以一直放在您的口袋或腰帶上。

#### 7) **取得方式的便利性與負擔能力**
**AAPS** gives people who currently can’t afford to self-fund, or don’t have funding/insurance, access to a world-class hybrid closed looping system which is conceptually years ahead, in terms of development, of the commercial systems. You currently need to have a Nightscout account to set up **AAPS**, although the Nightscout account is not required for day-to-day running of the **AAPS** loop. Many people continue to use Nightscout for collecting their data, and for remote control. Although **AAPS** itself is free, setting up Nightscout through one of the various platforms may incur a fee (€0 - €12), depending on what level of support you want (see comparison table) and whether you want to keep using Nightscout after setup or not. **AAPS** works with a wide range of affordable (starting from approx €150) Android phones. Different versions are available for specific locations and languages, and AAPS can also be used by people who are [blind](Safety-first-aaps-can-also-be-used-by-blind-people).

#### 8) **Support**
No automated insulin delivery system is perfect. Commercial and open-source systems share many common glitches in both communications and temporary hardware failure. There is support available from community of AAPS users on Facebook, Discord and Github who designed, developed and are currently using **AAPS**, all over the world. There are also Facebook support groups and help from clinic/commercial companies for the commercial APS systems -  it is worth speaking to the users, or former users of these systems to get feedback on the common glitches, the quality of the education programme and the level of ongoing support provided.

#### 9) **Predictability, transparency and safety**
**AAPS** is totally transparent, logical and predictable, which may make it easier to know when a setting is wrong, and to adjust it accordingly. You can see exactly what the system is doing, why it is doing it, and set its operational limits, which puts the control (and responsibility) in your hands. This can provide the user with confidence, and a sounder sleep.

#### 10) **Access to advanced features through development (dev) modes including full closed loop**
This **AAPS** documentation focuses on the mainstream **“master”** branch of **AAPS**. However, research and development is going on all the time. More experienced users may wish to explore the experimental features in the **development** branch. This includes integration of Dexcom G7, and automatically adjusting insulin delivery according to short-term sensitivity changes (DYNISF). The development innovations focus on strategies for full closed looping (not having to bolus for meals _etc._), and generally trying to make life with type 1 diabetes as convenient as possible.

#### 11) **Ability to contribute yourself to further improvements**
Type 1 diabetes can be highly frustrating and isolating. Having control over your own diabetes tech, with the possibility to “pay it forward” as soon as you are making progress by helping others on their journey can be really rewarding. You can educate yourself, discover the roadblocks and look for, and even contribute, to new developments and the documentation. There will be others in the community with the same quest that you can bounce ideas off and work with. This is the essence of #WeAreNotWaiting.

## How does AAPS compare to MDI and open looping?

Multiple daily injections (MDI, (a) in **Figure 2** below) usually involve giving an injection of a long-lasting insulin (_e.g._ Tresiba) once a day, with injections of faster-acting insulin (_e.g._ Novorapid, Fiasp) at mealtimes, or for corrections. Open pumping (b) involves using a pump to deliver basal at pre-programmed rates of rapid-acting insulin, and then boluses through the pump at mealtimes or for corrections. The basics of a looping system are that the looping app uses the sensor glucose data to instruct the pump to stop insulin delivery when it predicts you are heading for a low, and to give you extra insulin if your glucose levels are rising and predicted to go too high (c). Although this figure is oversimplified compared to real-life, it aims to demonstrate the key differences of the approaches. It is possible to achieve exceptionally good glucose control with any of these three approaches.

![21-06-23 AAPS glucose MDI etc](./images/basic-overview-mdi-open-and-closed-loop.png)


**Figure 2**. Basic overview of (a) MDI, (b) open-loop pumping and (c) hybrid closed loop pumping.

## How does AAPS compare to other looping systems?

As of June 25 2023, there are four major open source closed loop systems available: [OpenAPS](https://openaps.readthedocs.io/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) and [iAPS](https://github.com/Artificial-Pancreas/iAPS?fbclid=IwAR2fA9Y9YqYzpKSrtEsotfXl5b67UclDkKgyrv52tQLzYbOoBeNGRmjlJJI), (formerly FreeAPS X). The features of the different systems are shown in the table below:

The features of the different systems are shown in the table below:



| Devicestype | Name                                                          | [AAPS](https://wiki.aaps.app)            | [Loop](https://loopkit.github.io/loopdocs/) | [Open APS](https://openaps.readthedocs.io/en/latest/) | [iAPS](https://iaps.readthedocs.io/en/latest/) |
| ----------- | ------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------- |
| Phone       | Android                                                       | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)    | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)       |
| Phone       | iPhone                                                        | ![unavailable](./images/unavailable.png) | ![available](./images/available.png)        | ![unavailable](./images/unavailable.png)              | ![available](./images/available.png)           |
| Rig         | tiny computer (1)                                             | ![unavailable](./images/unavailable.png) | ![unavailable](./images/unavailable.png)    | ![available](./images/available.png)                  | ![unavailable](./images/unavailable.png)       |
| PUMP        | [Dana I](../Configuration/DanaRS-Insulin-Pump.md)             | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)    | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)       |
| PUMP        | [Dana RS](../Configuration/DanaRS-Insulin-Pump.md)            | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)    | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)       |
| PUMP        | [Dana R](../Configuration/DanaR-Insulin-Pump.md)              | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)    | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)       |
| PUMP        | [Omnipod (Dash)](../Configuration/OmnipodDASH.md) (2)         | ![available](./images/available.png)     | ![available](./images/available.png)        | ![unavailable](./images/unavailable.png)              | ![available](./images/available.png)           |
| PUMP        | [Omnipod (Eros)](../Configuration/OmnipodEros.md)             | ![available](./images/available.png)     | ![available](./images/available.png)        | ![unavailable](./images/unavailable.png)              | ![available](./images/available.png)           |
| PUMP        | [Diaconn G8](../Configuration/DiaconnG8.md)                   | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)    | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)       |
| PUMP        | [EOPatch 2](../Configuration/EOPatch2.md)                     | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)    | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)       |
| PUMP        | [Medtrum TouchCare Nano](../Configuration/MedtrumNano.md)     | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)    | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)       |
| PUMP        | [Medtrum TouchCare 300U](../Configuration/MedtrumNano.md)     | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)    | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)       |
| PUMP        | [Roche Combo](../Configuration/Accu-Chek-Combo-Pump.md)       | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)    | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)       |
| PUMP        | [Roche Insight](../Configuration/Accu-Chek-Insight-Pump.md)   | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)    | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)       |
| PUMP        | [Older Medtronic](../Configuration/MedtronicPump.md)          | ![available](./images/available.png)     | ![available](./images/available.png)        | ![available](./images/available.png)                  | ![available](./images/available.png)           |
| CGM         | [Dexcom G7](../Hardware/DexcomG7.md)                          | ![available](./images/available.png)     | ![available](./images/available.png)        | ![unavailable](./images/unavailable.png)              | ![available](./images/available.png)           |
| CGM         | [Dexcom One](../Hardware/DexcomG6.md)                         | ![available](./images/available.png)     | ![available](./images/available.png)        | ![unavailable](./images/unavailable.png)              | ![available](./images/available.png)           |
| CGM         | [Dexcom G6](../Hardware/DexcomG6.md)                          | ![available](./images/available.png)     | ![available](./images/available.png)        | ![available](./images/available.png)                  | ![available](./images/available.png)           |
| CGM         | [Dexcom G5](../Hardware/DexcomG5.md)                          | ![available](./images/available.png)     | ![available](./images/available.png)        | ![available](./images/available.png)                  | ![available](./images/available.png)           |
| CGM         | [Dexcom G4](../Hardware/DexcomG4.md)                          | ![available](./images/available.png)     | ![available](./images/available.png)        | ![available](./images/available.png)                  | ![available](./images/available.png)           |
| CGM         | [Libre 3](../Hardware/Libre3.md)                              | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)    | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)       |
| CGM         | [Libre 2](../Hardware/Libre2.md)                              | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)    | ![unavailable](./images/unavailable.png)              | ![available](./images/available.png)           |
| CGM         | [Libre 1](../Hardware/Libre1.md)                              | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)    | ![unavailable](./images/unavailable.png)              | ![available](./images/available.png)           |
| CGM         | [Eversense](../Hardware/Eversense.md)                         | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)    | ![unavailable](./images/unavailable.png)              | ![available](./images/available.png)           |
| CGM         | [MM640g/MM630g](../Hardware/MM640g.md)                        | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)    | ![unavailable](./images/unavailable.png)              | ![available](./images/available.png)           |
| CGM         | [PocTech](../Hardware/PocTech.md)                             | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)    | ![unavailable](./images/unavailable.png)              | ![available](./images/available.png)           |
| CGM         | [Nightscout as BG Source](../Hardware/CgmNightscoutUpload.md) | ![available](./images/available.png)     | ![available](./images/available.png)        | ![available](./images/available.png)                  | ![available](./images/available.png)           |

_Table notes:_
1. A **rig** is a small computer which you carry around with you, without a monitor. One supported device type is Intel Edison + Explorer Board and the other Raspberry Pi + Explorer HAT or Adafruit RFM69HCW Bonnet. The first APS were based on this setup, as mobile phones were not capable of running the required algorithms. Use of these systems has declined, as the setup on mobile phones has become easier, and phones have a display included. Intel has also stopped selling the Intel Edison. The excellent OpenAPS algorithms **oref0** and **oref1** are now incorporated in AAPS and iAPS.
2. Omnipod Dash is the successor of Omnipod Eros. It supports bluetooth communication and does not need a rig gateway to communicate between the Omnipod and mobile phone. If you have a choice, we recommend use of the Dash instead of Eros.


An international peer-reviewed consensus statement containing practical guidance on open source looping was written by and for health-care professionals, and published in a leading medical journal in 2022: [_Lancet Diabetes Endocrinol_, 2022; 10: 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_). It is well worth a read (including for your diabetes clinic) and summarises the main technical differences between the different open-source hybrid closed loop systems.

It is hard to get a “feel” for any system without using it, or talking to others who are using it, so do reach out to others on Facebook/Discord and ask. Most people find that **AAPS** is incredibly sophisticated in comparison to other hybrid closed loop systems (particularly the commercial systems), with a huge number of potentially customisable settings and features,  discussed above. Some people can find this a little overwhelming in the beginning, but there is no rush to investigate all the possibilities at once, you can progress as slowly or as fast as you would like, and there is help available at every step of the way.


## Does AAPS use artificial intelligence or any learning algorithm?

The current master version of **AAPS** (3.1.0.3) does not have any machine learning algorithms, multiple-parameter insulin response models, or artificial intelligence. As such, the system is open and transparent in how it works, and has the ability to be understood not just by experts, but also by clinicians and patients. It also means that if you have a sharply varying schedule (maybe switching from a stressful week at work to a relaxing holiday) and are likely to need a significantly different amount of insulin, you can immediately switch **AAPS** to run a weaker/stronger customised profile. A ‘learning system’ will do this adjustment for you automatically, but is likely to take longer to adjust the insulin delivery.

## Which system is right for me or my dependant?

Practically, your choice of system is often restricted by which pump you already have, or can obtain from your medical provider, and your choice of phone (Apple or Android). If you don’t yet have a pump you have the biggest choice of systems. Technology is continually evolving, pumps are being discontinued and new pumps and sensors are being released. Most open-source systems work with the main sensors (Libre and Dexcom) or are quickly adapted to work with new sensors a year or so after they are released (with a bit of time delay for safety and stability testing).

Most **AAPS** users report more time in range, HbA1c reductions, as well as quality of life improvements from having a system that can auto-adjust basal rates overnight during sleep, and this is true for most hybrid closed loop systems. Some people have a preference for a very simple system which is not very customisable (which means you may prefer a commercial system), and others find this lack of control very frustrating (you may prefer an open-source system). If you (or your dependant) are newly diagnosed, a common route is to get used to using MDI plus a glucose sensor first, then progress to a pump which has the potential for looping, then progress to **AAPS**, but some people (especially small kids) may go straight to a pump.

It is important to note that the **AAPS** user needs to be proactive to troubleshoot and fix problems themselves, with help from the community. This is a very different mindset to that when using a commercial system. With **AAPS** a user has more control, but also the responsibility, and needs to be comfortable with that.

## Is it safe to use open-source systems like AAPS?

### Safety of the AAPS system
A more accurate question is probably “is it safe **compared** with my current insulin delivery system?” since no method of insulin delivery is without risk. There are many checks and balances in place with **AAPS**. A recent [paper](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375) looked at the use of **AAPS** in a computer simulated set-up, which was an effective way to unobjectively trial how safe and effective the system is. More generally, it is estimated that over 10,000 individuals worldwide are using open-source automated-insulin delivery systems, and uptake continues to increase globally.

Any device that uses radio communications could be hacked, and this is true for a non-looping insulin pump as well. Currently, we are not aware of anyone attempting to harm individuals by hacking their diabetes-related medical equipment. However, there are multiple ways to protect against such risks:

1.  In the pump settings, limit both the max bolus allowed and max temporary basal settings to amounts that you believe are safest. These are hard limits that we do not believe any malicious hacker could circumvent.

2.  Set your CGM alarms enabled for both highs and lows.

3.  Monitor your insulin delivery online. Nightscout users can set additional alarms to alert for a wide variety of conditions, including conditions that are much more likely to occur than a malicious attack. In addition to highs and lows, Nightscout can display diagnostic data useful for verifying that the pump is operating as desired, including current IOB, pump temporary basal history, pump bolus history. It can also be configured to proactively alert users to undesirable conditions, such as predicted highs and lows, low insulin reservoir, and low pump battery.

If a malicious attack was made on your insulin pump, these strategies would significantly mitigate the risk. Every potential **AAPS** user needs to weigh the risks associated with using **AAPS**, versus the risks of using a different system.

#### Safety considerations around improving blood glucose control too fast

A rapid reduction in HbA1c and improved blood glucose control sounds appealing. However, reducing average blood glucose levels _too fast_ by starting any closed loop system can cause permanent damage, including to the eyes, and painful neuropathy that never goes away. This damage can be avoided simply by reducing levels more slowly. If you currently have an elevated HbA1c and are moving to AAPS (or any other closed loop system), please discuss this potential risk with your clinical team before starting, and agree a timeplan with them. More general information on how to reduce your glucose levels safely, including links to medical literature is given in the [safety section [here](preparing-safety-first).

#### Medical safety around devices, consumable supplies and other medications

Use a tested, fully functioning FDA or CE approved insulin pump and CGM for an artificial pancreas loop. Hardware or software modifications to these components can cause unexpected insulin dosing, causing significant risk to the user. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, do not use these for creating an AAPS system.

Use original supplies such as inserters, cannulas and insulin containers approved by the manufacturer of your pump and CGM. Using untested or modified supplies can cause CGM inaccuracy and insulin dosing errors. Insulin is highly dangerous when misdosed - please do not play with your life by hacking your supplies.

Do not take SGLT-2 inhibitors (gliflozins) when using **AAPS** as they incalculably lower blood sugar levels. Combining this effect with a system that lowers basal rates in order to increase BG is dangerous, there is more detail about this in the main [safety section](preparing-safety-first).

(introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team)=
## How can I approach discussing AAPS with my clinical team?

Users are encouraged to speak with their clinicians about their intention to use **AAPS**. Please do not be afraid to have an honest conversation with your diabetes team if you intend to use **AAPS** (or any other DIY loop, for that matter). Transparency and trust between patient and doctor is paramount.

### Suggested approach:
Start a conversation with your clinician to determine their familiarity and attitude towards diabetic technology such as CGMs,  pumps, hybrid loops and commercial looping. Your clinician/endocrinologist should be aware of the basic technology and be willing to discuss with you recent advancements with commercial loop products available within their regions.

#### Local precedent

Obtain your clinicians/endocrinologists’ views on DIY loop _vs_ commercial looping, and gauge their knowledge in this area. Are they familiar with **AAPS** and can they share with you any helpful experience of working with patients with DIY looping?

Ask if your team has any patients under their care who already use DIY looping. Due to patient confidentiality, doctors cannot pass other patient’s details to you without obtaining the individual’s consent. However, if you want to, you **can** ask them to pass **your** contact details to an existing DIY looping patient if there is one the clinician feels you might "click” with, suggesting that you would be happy for the patient to contact you to discuss DIY looping. Clinicians are not obliged to do this, but some are happy to, since they realise the importance of peer-to-peer support in type 1 diabetes management. You may also find it useful to meet local friendly DIY loopers. This is of course up to you, and not entirely necessary.

#### National and International Precedent

If you feel unsupported by your team to loop with **AAPS**, the following discussion points may help:

a) The **AAPS** system has been designed BY patients and their caregivers. It has been designed ultimately for safety, but also drawing on in-depth patient experience. There are currently around **10,000** AAPS users worldwide. There is therefore likely to be other patients using DIY looping in your clinic's patient population (whether they know about it or not).

b) Recent peer-reviewed published guidance in the internationally leading medical journal [The Lancet](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/pdf/nihms-1765784.pdf)_(1)_ has confirmed that DIY loops are **safe** and **effective at improving diabetic control**, including time in range. There are regular articles in leading journals like [Nature](https://doi.org/10.1038/d41586-023-02648-9)_(3)_ which highlight the progress of the DIY looping commmunity.

c) Starting with **AAPS** involves a _gradual_ migration from “open” loop pumping, through low-glucose suspend, through to hybrid “closed” looping, by completing a number of objectives. There is therefore a structured programme, requiring the user to demonstrate a level of competence at each stage and fine-tuning their basic settings (basal, ISF and ICR) before they can close the loop.

d) Technical support is available to you from the DIY community through Github, Discord and Facebook closed groups.

e) You will be able to provide **both CGM and insulin looping/pumping information** as combined reports at clinic meetings (through Nightscout or Tidepool), either printed out or on-screen (if you bring a laptop/tablet). The streamlining of both CGM and insulin data will allow more effective use of your clinician’s time to review your reports and aid their discussions in assessing your progress.

f) If there is still strong objection from your team, hand your clinician printouts of the reference articles linked here in the text, and give them the link to the **AAPS** clinicians section: [For Clinicians – A General Introduction and Guide to **AAPS**](Resources/clinician-guide-to-AndroidAPS.md)

#### Support for DIY looping by other clinicians

The paper published in the [Lancet Diabetes Endocrinology](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_)[ (co led by Kings’ and Guy’s and St Thomas’ NHS Foundation Trust, and co lead by Dr Sufyan Hussain, a consultant diabetologist and honorary senior lecturer from King’s in London) provides:

a) **Assurance** for professionals that DIY artificial pancreas systems/ open source as a “safe and effective treatment” option for type 1 diabetes and provides guidance on recommendations, discussions, supports, documentation;

b) **Recognition** that open-source automated insulin delivery (“AID”) systems can increase time in range (TIR) while reducing variability in blood glucose concentrations and the amount of hypo and hyperglycaemic episodes in various age groups, genders and communities;

c) **Recommendation** that healthcare workers should **support** type 1 patients or their caregivers who choose to manage their diabetes with an open source AID system;

d) Recommendation that healthcare workers should attempt to learn about all treatment options that might benefit patients including available open-source AID systems.  If health care professionals do not have resources to educate themselves, or have legal or regulatory concerns, they should consider **cooperating, or teaming up with other healthcare professionals** who do;

e) Emphasis that all users of CGMs should have real-time and open-access to **their own health data** at all times

f) Emphasis that these open source systems have not undergone the same regulatory evaluations as commercially available medical technologies, and there is no commercial technical support. However, **extensive community support is available**; and

g) A recommendation that **regulation and legal frameworks** should be updated to ensure clarity on permitting ethical and effective treatment of such open source systems.

Another paper in [Medical Law International, 2021](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)(_4_) also highlights the UK General Medical Council’s ‘consent guidance’ places a strong emphasis on doctor and patients making decisions together. The doctor should explain the potential benefits, risks, burdens and side-effects on DIY APS and may recommend a particular option without pressuring the patient.

Ultimately it is up to the patient to weigh up these factors, along with any non-clinical issues relevant to them and decide which treatment option, if any, to accept.

If a doctor discovers in a clinic that their patient is looping with a DIY system, they are not exempted from their obligations to monitor the patient, simply because they did not prescribe the particular piece of technology the patient is using; clinicians must continue to monitor patients.

Doctors (at least in the UK) are not prohibited from prescribing unlicensed medicines and can use their clinical discretion. They should therefore use their clinical judgement to decide if a DIY APS is suitable for a specific patient, and discuss what they consider to be the pros and cons with the patient.

#### The articles referenced above, and other useful links and position statements are listed below:

1. Open-source automated insulin delivery: international consensus statement and practical guidance for health-care professionals [_Lancet Diabetes Endocrinol_, (2022) _10_, 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)
2. [In Silico Trials of an Open-Source Android-Based Artificial Pancreas: A New Paradigm to Test Safety and Efficacy of Do-It-Yourself Systems, 2020](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375)
3. A DIY ‘bionic pancreas’ is changing diabetes care — what's next? [_Nature_ (2023), _620_, 940-941](https://doi.org/10.1038/d41586-023-02648-9)
4. Prescribing unapproved medical devices? The case of DIY artificial pancreas systems [_Medical law international_, (2021), _21_, 42-68](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)
5. [Berlin Institute of Health position statement, 2022](https://www.bihealth.org/en/notices/do-it-yourself-solutions-for-people-with-diabetes-are-safe-and-recommended)
6. Do-It-Yourself Automated Insulin Delivery: A Health-care Practitioner User’s Guide (Diabetes Canada position and guide) [_Canadian Journal of Diabetes_, (2023)_47_, E8, 389-397](https://www.canadianjournalofdiabetes.com/article/S1499-2671(23)00138-7/fulltext)
7.  Netherlands (EN/NL) - for clinicians - [how to help people on open source automated insulin delivery systems](https://www.diabetotech.com/blog/how-to-help-people-on-open-source-automated-insulin-delivery-systems)
8. First Use of Open-Source Automated Insulin Delivery AndroidAPS in Full Closed-Loop Scenario: Pancreas4ALLRandomized Pilot Study [_Diabetes Technol. Ther._, 25, _5_, 2023](https://www.liebertpub.com/doi/pdf/10.1089/dia.2022.0562?casa_token=D13eFx5vCwwAAAAA:MYvO8hChbViXVJFgov1T11RXBPx2N_wOMThLHwl3TVUxbCuANegPrIFRC5R5VXx_S71FoQYW-qg)
9. Pre-school and school-aged children benefit from the switch from a sensor-augmented pump to an AndroidAPS hybrid closed loop: A retrospective analysis [_Pediatr. Diabetes_ 2021, _22_, 594-604. 2021](https://onlinelibrary.wiley.com/doi/epdf/10.1111/pedi.13190)
10. Outcomes of the OPEN project, an EU-funded project into the Outcomes of Patient’s Evidence with Novel, Do-it-Yourself Artificial Pancreas Technology (https://www.open-diabetes.eu/publications)



## Why can’t I just download AAPS and use it straight away?

The **AAPS** app is not provided in Google Play - you have to build it from source code by yourself for legal reasons. **AAPS** is unlicensed, meaning that it does not have approval by any regulatory body authority in any country. **AAPS** is deemed to be carrying out a medical experiment on yourself, and is carried out at the user’s own risk.

Setting up the system requires patience, determination and the gradual development of technical knowledge. All the information and support can be found in these documents, elsewhere online, or from others who have already done it. Over 10,000 people have successfully built and are currently using **AAPS** worldwide.

The developers of **AAPS** take safety incredibly seriously, and want others to have a good experience of using **AAPS**. That is why it is essential that every user (or carer, if the user is a child):

- builds the AAPS system themself and works through the **objectives** so that they have reasonably good personalised settings and understand the basics of how **AAPS** works by the time they “close the loop”;

- backs up their system by exporting and saving important files (like keystore and settings .json file) somewhere safe, so you can setup again quickly if needed;

- updates to newer master versions as and when they become available; and

- maintains and monitors the system to ensure it is working properly.

## What is the connectivity of the AAPS system?

**Figure 3 (below)** shows one example of the **AAPS** system for a user who do not require any followers interacting with the system. Additional open-source software and platforms which are not shown can also be integrated.

![21-06-23 AAPS connectivity no followers](./images/AAPS-connectivity-no-followers.png)


**Figure 4 (below)** shows the full potential of the **AAPS** system for a user who has followers and requires a monitor and send adjust the system remotely (like a child with type 1 diabetes). Additional open-source software and platforms which are not shown can also be integrated.

![21-06-23 AAPS overview with followers](./images/AAPS-overview-with-followers.png)

## How does AAPS get continually developed and improved?

Most **AAPS** users use the fully tested **master** version of AAPS, which has been tested for bugs and problems, before being released to the community. Behind the scenes, the developers try out new improvements, and test these out in “developer” (**dev**) versions of **AAPS** with a user community who are happy to do bug updates at short notice. If the improvements work well, they are then released as a new “master” version of **AAPS**. Any new master release is announced on the Facebook group, so that the mainstream **AAPS** users can read about and update to the new master version.

Some experienced and confident **AAPS** users conduct experiments with emerging technologies and with dev versions of the **AAPS** app, which can be interesting for the less adventurous users to read about, without having to do it themselves! People tend to share these experiments on the Facebook group too.

You can read more about some of these experiments and discussion on emerging tech here:

Tim Street [https://www.diabettech.com/](https://www.diabettech.com/)

David Burren [https://bionicwookie.com/](https://bionicwookie.com/)

## Who can benefit from AAPS?

| User Type                                   |
| ------------------------------------------- |
| ✔️ type 1 diabetic                          |
| ✔️ caregiver or parent of a type 1 diabetic |
| ✔️ blind users type 1 diabetic              |
| ✔️ *clincians and healthcare professionals  |

The above table assumes that the user has access to both continuous gluocse monitor and insulin pump.

*All data from **AAPS** can be made available to healthcare professionals via data sharing platforms, including Nightscout that provides logging and real time monitoring of CGM data, insulin delivery, carbohydrate entries, predictions and settings. Nightscout records include daily and weekly reports which can aid healthcare professionals' discussions with type 1 patients with more accurate data on glycemic control and any behavioural considerations.

### Accessibility for users AAPS who are partially or completely blind

#### Day to day AAPS use:
AAPS can be used by blind people. On Android devices, the operating system has a program called TalkBack. This allows screen orientation via voice output as part of the operating system. By using TalkBack you can operate both your smartphone and AAPS without needing to be able to see.

#### Building the AAPS app:
As a user you will build the AAPS app in Android Studio. Many people use Microsoft Windows for this purpose, where there is the Screenreader analogous to TalkBack. Since Android Studio is a Java application, the “Java Access Bridge” component must be enabled in the Control Panel. Otherwise, the screen reader of the PC will not speak in Android Studio.

How you do this depends on your operating system, two methods are outlined below:

1) In the Windows Start menu, enter “Control Panel” in the search field, open with Enter. It opens: “All Control Panel Items”.

Open the "Ease of Access Centre".

Then open “Use computer without a display” with Enter.

Under hear text read aloud select "turn on narrator" and "turn on audio display", and click "apply"

or:

2) Press Windows key and enter “Control Panel” in the search field, open with Enter. It opens: “All Control Panel Items”.

Press the letter C to get to “Center for Ease of Use”, open with Enter.

Then open “Use computer without a screen” with Enter.

There, at the bottom, you will find the checkbox “Enable Java Access Bridge”, select it.

Done, just close the window! The screen reader should work now.



## What benefits can I get from AAPS?

With investment of your time, **AAPS** can potentially lead to:

- alleviating the stress and burden of managing type 1 diabetes;

- reducing the multitude of mundane decisions that arise from type 1 diabetes;

- the provision of personalised and dynamic insulin dosing based on real-time data which can cut down the need for hypo treatments and reduce hyperglycemia episodes;

- an increased knowledge of insulin management and confidence to better fine tune your settings;

- the ability to create automatic settings (**automations**) that are tailored to fit in with your lifestyle;

- improved sleep quality and overall reduction in the frequency of nighttime interventions;

- remote monitoring and administration of insulin delivery for caregivers of type 1 diabetics; and

- streamlining of all your portable diabetic equipment (continuous glucose monitor receiver and insulin controlling devices) by using an Android phone controlled by **AAPS**.

Ultimately, **AAPS** can empower individuals to better manage their diabetes, resulting in stable blood sugars and improved long term health outcomes.

Interested in how to get started with setting up AAPS? Take a look at the [preparing](preparing.md) section.
