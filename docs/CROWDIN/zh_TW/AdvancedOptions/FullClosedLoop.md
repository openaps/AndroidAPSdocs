# 全自動循環（Full Closed Loop）


The main attraction of Full Closed Looping **FCL** is that it has the potential to mimic an artificial pancreas and make daily management easier without having the need to bolus for meals.

Whilst **hybrid closed loop** ('HCL') is algorithm based, it still requires the user to manually deliver boluses prior to meals. As a result, the loop may go into a temporary shut-off (temporary zero basal) to prevent over delivery of insulin.

In **FCL** mealsize-related bolus are no longer required: leave it to the algorithm!  **AAPS** may allow without the user giving any bolus, and without making carb inputs, in a mode called ‘un-announced meals’ **(‘UAM’)**. **UAM** allows **AAPS** to better tolerate incorrect carb inputs by being more aggressive.

### 應該期待什麼？

There are many published studies on the favourable results **FCL** can achieve. For further reading refer to the following:

1) ![NationalLibraryOfMedicine](../images/Logo_of_U.S._National_Library_of_Medicine.png) ![PubMed](../images/US-NLM-PubMed-Logo.png) 美國國家醫學圖書館，PubMed [首例使用開源自動胰島素遞送 AndroidAPS 在全自動循環場景：Pancreas4ALL 隨機試點研究](https://pubmed.ncbi.nlm.nih.gov/36826996/)；

2) ![NationalLibraryOfMedicine](../images/Logo_of_U.S._National_Library_of_Medicine.png) 臨床試驗註冊 ClinicalTrials.gov 美國國家醫學圖書館，臨床試驗 [Pancreas4ALL（ASAP）自動胰島素遞送閉環系統的可行性和安全性研究](https://www.clinicaltrials.gov/study/NCT04835350?term=Feasibility%20and%20Safety%20Study%20of%20the%20Automated%20Insulin%20Delivery%20Closed%20Loop%20System%20Pancreas4ALL%20(ASAP)&rank=1)

Success for **FCL** requires the user to:

- check whether they met the **FCL** requisites;
- set up **Automations** that are tailored for  their daily management’s needs; and
- fine tune and adjust the **AAPS** settings (notably **Automations**).


### General considerations why (not to) move from HCL to FCL

**FCL** is not for everyone:

- Some **FCL** users achieve TIR (70-180) around 90% and HbA1c under 6%, however other users prefer tighter control. Notably, minimising values over 140 mg/dl at diets with rapid carbs probably requires pre-bolusing.
- **AAPS** tuning can be challenging. It is not for those users who feel overwhelmed AAPS.  You will need to dedicate a few weeks in order to adjust and fine tune your **FCL**. Investing such time can yield better results and **BG** control.
- Meal management may become easier, however exercise can still be challenging in **FCL**. Most of us like to limit sports snacks in an attempt to control body weight.
- Difficulties still remain to establish a **FCL** for kids (discussed below).


### 良好調整的混合自動循環

It is advisable to first establish a well-tuned **HC**L before considering the transition to **FCL**.  Success with **FCL** requires a highly personalised individualised tuning of the user’s setting so that **AAPS** can give insulin to closely mimic YOUR successful hybrid closed loop mode.

**FCL** requires the user to set up and tune their **Automations**. However the user must have a confident understanding of their insulin management needs before embarking on **FCL**. Errors can be masked with counter-errors. This can create an unstable **FCL** system, and make it hard to later correct. You should expect to reach a comparable %TIR with your FCL as you see today in your **HCL**.

**FCL is a DIY set up of Automations determined by the user by analysing their data from both their successful HCL and  initial FCL experience when tuning your settings.**

### 快速胰島素（Lyumjev, Fiasp）

**FCL** requires fast insulin.  This is so that at the start of meal-related **BG** rise, **FCL** is able to keep **BG** in range (by common definition, under 180 mg/dl (10 mmol/l)).

一項模型研究（詳情請參閱 LINK FullLoop V2/March2023；第 2.2 節）可以從定量角度顯示出*更快的胰島素*

來源：

![IEEE 控制系統雜誌](../images/IEEE_Control_Systems_Society_Logo_RGB.jpg) ![ResearchGate](../images/researchgate-logo-white.svg)



IEEE 控制系統雜誌，ResearchGate [人工胰臟與餐點控制：1型糖尿病餐後血糖調節概述](https://www.researchgate.net/publication/322866519_The_Artificial_Pancreas_and_Meal_Control_An_Overview_of_Postprandial_Glucose_Regulation_in_Type_1_Diabetes);

- will result in significantly lower *BG** peaks than slower insulins;
- tolerate a couple of minutes delayed first meal bolus while not incurring unacceptable height of peaks; and
- minimise the effect on **BG** peak from different carb loads (meal sizes).

**FCL** is unlikely to be effective with insulin other than Lyumjev or Fiasp, unless the user is on a very moderate to low carb diet.

However, Fiasp or Lyumjev can result in frequent pump occlusions, even after optimising things like needle length. It is important to have an eye on the cannula or pod time. Many users find 48 hours to be the efficacy insulin limit before resulting in cannula/pod failure.

### Prerequisites

**BG** values and stable bluetooth connectivity are required to ensure **AAPS** can optimally perform without losing valuable time. **FCL** requires a 24/7 technically stable system:

- your **CGM’s performance. Your CGM should not produce jumpy **BG** values that could be misinterpreted by **FCL** as a sign of a starting meal. Similarly, **CGM** calibrations can produce jumpy results.
- how and where any **CGM** smoothing is done, and what this might imply for your tuning. Notably how delta is defined, and AAPS recognising this as being sign of a starting meal.
- bluetooth stability for the pump and CGM  pump;
- avoiding (or at least early recognition of) pump occlusion;
- data flow and your phone's apps used and difference between days of sensor usage;
- keeping all **AAPS** components well charged and in spare parts close proximity; and
- actioning cannula (or pod) changes always early enough to lower the risk of occlusion;

The above will vary depending on your **AAPS** component system and your lifestyle.

### 進餐相關的限制

- Setting up a **FCL** may be easier for people whose diets do not consist of food components with a rapid high effect on **BG**, and meal patterns that do not wildly vary day-to-day. This does not necessarily mean low carb.

- Fat or protein rich diets, or slow digestion/gastroparesis, make things easier rather than harder for **FCL**  because late carbs nicely cover for inevitable “tails” of late action from bolus needed around peak time.

#### Glycemic index and effect on blood glucose

The challenge for the **UAM** mode rises with rising 'Effect on Blood Glucose ('EBG')

- Start moderate/low, and tune your **Profile's** settings. Only then, "test" meals with high **EBG**.
- Consider a < 50% initial bolus if consuming very high **EBG**.

1) **No EBG**: e.g. fresh meat, fish, eggs, bacon, oils, cheese. 2) **Low EBG**: e.g. fresh vegetables and berries, mushrooms, nuts, milk, yoghurt, cottage cheese. 3) **Moderate EBG**: e.g. whole grain bread/noodles, potatoes, wild rice, oats, dried fruits. 4) **High EBG**:e.g. wheat breads, baguette, toast, waffles, cookies, mash potatoes, noodles, rice. 5) **Very High EBG**: e.g. sugar, sweet drinks, fruit juices, cornflakes, candy, sweets, potato chips, salty pretzel sticks.

![Glycemic index and effect on blood glucose](../images/fullClosedLoop01.png)

The most difficult meals for **FCL** are those foods exclusively very high and high **EBG** components (see red in the picture): Not only does **BG** shoot up rapidly, but also there is little fat/protein/fibre component to balance the inevitable “tail” of insulin activity that would come with attempts to control the high glucose earlier on.

Erratic consumption of snacks and sweet drinks that are loaded with fast absorbing carbs is problematic for **FCL**.


#### 運動/活動準備

When exercising or being active, with a pump or hybrid closed loop it is recommended that the user reduces **IOB** prior to exercise.

With **FCL**, the algorithm is tuned to detect **UAM** and automatically deliver insulin to counter **BG** rises.  A high **Temp Target** and lower **Profile Percentage** (effective already around meal start) should be set well in advance of any activity.

Unusual or erratic exercise activity levels present difficulties for **FCL**. Planning ahead is required for exercise (especially if you want to reduce the need for rescue carbs/snacks during sports low). After an active day it is recommended that a lower  **Percentage Profile** is set for overnight after the evening meal is fully digested: set in **Automations** an elevated (>100 mg/dl) **BG**  target, with “no **SMBs** at elevated target” selected in **AAPS*** preferences.

#### 兒童的挑戰

**FCL** can present extra challenges for children and these include:

- Lyumjev or Fiasp may not available or well tolerated.
- Hourly basal rate may very low, providing a poor basis for big **SMBs**.
- Diet may be rich in sweet components. With the typical low blood volume of a small body, strong tendency towards very high **BG** spikes.
- Growth hormones and going through marked changes of insulin sensitivity makes it difficult to keep the **FCL** accurately tuned.


## Enabling boosted SMBs: safety

In **HCL** safety restrictions are implemented regarding bolus sizes that can be automatically given by the loop.

**FCL** loopers no longer need to give a sizable bolus around meal start. The impact of this means that restrictions in size limits for **SMBs** must be widened to make the loop capable of delivering large enough **SMBs**.

If you are operating with **AAPS** in the Master release, it is suggested **AAPS**' Preferences are set up with the maximum allowed **SMB** size so that **FCL** can give (maxUAMSMBBasalMinutes=120, i.e. 2 hours worth of basal at that daytime).

If your basal rate is very low, the resulting **SMB** limits might be too low to allow sufficient control to tackle postprandial **BG** rises. One possible solution is to avoid diets that cause strong **BG** spikes and later switches to a **AAPS** dev variant that offers a new parameter in **SMB** delivery settings: smb_max_range_extension. This will expand the standard maximum of 2 hours worth of basal by a factor of >1. (Additionally, the default 50% **SMB** delivery ratio might be elevated in dev. variants).

**Follow the instructions to enable AAPS to mimic your bolussing via a couple of SMBs**.

Check the **SMB** tab periodicallu to see whether your **SMBs** are allowed to be sufficient enough to deliver the required insulin needed for the loop around meal starts.

如果不是，你的調整努力有時可能會毫無成果！


```{admonition} Boosting **ISF** can become dangerous
:class: danger

Carefully observe/analyse the **SMB** sizes shortly after your meal commences. 逐步調整，並且一次不要更改超過 1 或 2 個參數。

Your **AAPS'** setting must be sufficiently set up to cope with your (!) variety of meals.
```

## 餐點偵測/自動化升強

For successful **FCL**, **ISF** is the key tuning parameter. When utilising **AAPS** Master + **Automations**, a **> 100% profile change must automatically be triggered upon meal recognition** (via glucose deltas), and provide the sharpened **ISF**.

**AAPS** Master allows up to 130% temporary **Profile** in **HCL** p mode. Boosting the **ISF** is done in 3 steps:

- Step 1 -  review the **ISF** applicable for this meal time hour within the **Profile**, and see whether e.g. Autosens suggest a modification that takes care of the current (last few hours’) insulin sensitivity status of the body..
- Step 2 - apply a factor (1/Profile%, as set in **Automation**) to boost **ISF**.
- Step 3 - check that the suggested **ISF** falls within set safety limits.

### FCL's Automation templates

Boxes to tick at the top. You have the option:

- In your **Automation** list, you can tick the check-mark (to the left of each field) OFF => This de-activates that **Automation**. For instance you can do this for all breakfast related **FCL** **Automations** to go to **HCL** for breakfast(s).

- For each **Automation** rule you can tick the box for User action => then the defined Actions will not automatically be executed when Conditions apply. Rather, the **AAPS** main screen will alert you whenever your **FCL** would automatically give a **SMB**. You have the opportunity then to say ‘yes’ or ‘no’. This is extremely useful in your tuning phase.

This feature can be useful for certain situations like “foot to floor” syndrome whher there is a sudden rise in **BG** when getting up in the morning, but the user wants to prevent a fully automatic “breakfast started” response.

The section below provides guidance how to bundle **Automation’s** Conditions and how to tackle situations in which the **AAPS** should increase (or decrease) insulin delivery. As **ISF** cannot directly be tuned, raising **Profile Percentage** over 100% will do the same for our purposes.

### 當血糖上升時自動執行大劑量的 SMB

The key to successful **FCL** **at the beginning of BG increases from meals, very large automatic SMBS must be given by the loop as quickly as possible** “to catch up” with the required **IOB** needed (compare with your typical administered bolus for similar meal in h**HCL**!)

To achieve this, data from your **HCL** should be analysed to determine which **deltas** might be not meal –related and those delta which might be.

- As you can define the **Automation** within a pre-defined time-window, you need only to analyse there.
- If you do very different kinds of meals (e.g. a rather high carb breakfast, but low carb lunch) you can choose to do two different (sets of) **Automations** for each of the time slots.
- 如果你在晚上看到偶爾因壓迫而產生的低血糖，請排除夜晚的自動化。
- 通常，使用過去 5 分鐘內的變化資料就足夠了。
- 但你也可以使用其中一個平均變化資料。 By comparing the deltas in the conditions of your **Automations** you could even define actions of different aggressiveness depending on whether the **BG** rises in an accelerated way or not.

> ( delta – short avg delta )>n   is a term that could be used for acceleration detection , to trigger first **SMB** at earliest sign of rising **BG**. -                                                                             
> Caution: not possible to use with poor or highly smoothened **CGM-values!

A **CGM** with patchy data puts the user in a bad spot because, to be on the safe side,  you need to „sandbag“ your definition which delta is surely a sign of a started meal. This means:

- **FCL** loses additional time, resulting in higher **BG** peaks and lower %**TIR**;
- you cannot use an earlier or smaller delta which could trigger, also without a meal, the **SMBs** that are supposed to make up for a user bolus in **FCL**.

此外，餐後的最初血糖上升特點是**活性胰島素**較低。 考慮到這一點，針對晚餐的自動化(#1) 可能如下所示：

![8mg 上升 130% 胰島素，4 小時內完成](../images/fullClosedLoop02.png)

自動化 #1

If Conditions apply, **AAPS** would give 1 or 2 **SMBs** in the next 12 minutes, using a boosted **ISF** according to the set elevated **Profile Percentage** (in the example, a 30% boost of insulinReq). As long as these Conditions apply, the **Automation**  rule extends by another 12 minutes. A low carb meal might have slower **BG** rise characteristics. 他將受益於另一個自動化 (#2)，該自動化在更小的變化資料下啟動，並給予較弱的胰島素提升。

![>=5mg 上升 115% 胰島素，4 小時內完成<5.5](../images/fullClosedLoop03.png)

The same **Automation** probably will kick in also in higher carb meals, once the steep rise as defined in Automation#1 is over.

You need to “stage” these two (+ maybe a third) **Automations** to fit with what you see in your meal (variety) => Setting appropriate jump sizes, **iob** criteria, and amplifications will be an iterative tuning process.  此外，如果你在條件中包括適當的時間段，你可以輕鬆地為不同的日常餐點時間設置不同的自動化（早餐、午餐、晚餐）。

Note that, still in the rise phase (!), the "overflow" of **iob** must be blocked so that the late effects of the **insulin** (the "**tail**" after 3-5 hours) will not exceed the braking capacity of the loop through zero-temping (“taking away” basal, to reduce hypo risk).

對於大餐，有時會出現**第二次上升**。 到那時，活性胰島素通常已經下降了一些，更積極的自動化再次生效。 （檢查你的自動化 #2 中的活性胰島素條件，設定是否過低以至於這種情況不會發生）。

Soon after a few initial **SMBs** are given comes a **balanced phase** where moderate delivery of insulin should cover the additional carbs absorbed. (Except in low carb meals, where the loop might see too weak of a**BG** rise, and go into zero-temping right away already now).

The **AAPS** main screen (where you see cob=0 in **UAM** full loop) might in this phase ask for more carbs required. In **UAM** mode that simply means, you could make a very rough plausibility check: Is that amount of carbs likely in your body, un-absorbed from your meal just about an hour ago (about which you gave your loop no info)?


### 活性胰島素門檻值

Often, **Automations** #1 and/or #2 make iob rise to heights that typically are enough for **your** meals. For personalised tuning, look in your **HCL** data at the max iob values that occur with well-managed meals (often: your meal bolus), and above which magnitude a hypo (or requirement for extra carbs) occurred at the end.

合理的**活性胰島素門檻值**，應在循環系統降低積極性的時間點設定，不同餐點可能有所不同。 But especially in the first hour after the start of a meal, which is very crucial in the **UAM** mode. It will defer to for each user. For some users just about 30g/hour get absorbed, and to define a meaningful **iob** independent of the exact meal can be possible.

For exceptional meals, or to lower it if sports follow, the **iob** threshold can rapidly be set differently in your **Automation**.

Automation(#3),”iobTH reached => **SMBs** off”, is defined to end (or pause, until another wave of carb-related rise hits) the aggressive **SMB** boosting.

![活性胰島素 >5.5...111 TT = 關閉 SMB 16 分鐘](../images/fullClosedLoop04.png)

自動化 #3

It tells the loop that above your set **iob threshold** it's better not to use any more **SMBs**

- The given example does that by setting TT=111 (which is kind of arbitrary; pick a number>100 that you easy recognise as your automated **SMB** shut-off)
- In **AAPS' Preferences/ SMB** Settings generally do not allow **SMB** at elevated target).                                                                                                                   
  The insulin required will then have to be delivered with much more caution through the bottleneck of **TBRs**

**注意：自動化 #3 僅在沒有啟動 TT 時有效。** 因此，如果你使用了即將用餐 TT，必須在那段時間結束，通常應在餐後 30-40 分鐘結束。

One way to do this is to set up an **Automation** Condition that ends an eventually running EatingSoonTT under the Condition **iob**>65% * iobTH.
> Ways to work with EatingSoonTT Some loopers set (by pressing the TT button, or automated via a lowered **Profile** **BG** target if eating time slots are fairly fixed) an EatingSoonTT roughly an hour or more before meal start, just to guarantee a low starting **BG** and slightly increased  **iob**. But, assuming the **FCL** is always en route towards target, this might not yield much and you may prefere to define an **Automation** that sets an EatingSoonTT at recognition of meal start (glucose delta, or acceleration = delta > avg delta). A low **TT** is important in this stage because any **SMB** is calculated by your loop using (predicted glucose minus TT)/sens, so a small TT makes the resulting insulinReq bigger.

After the first boosted **SMB**s were given, your set iobTH and *Automation** #3 should strike a good balance of limiting the glucose peak, but also not leading to a hypo after the meal.

If your breakfast substantially deviates in carb content from your average dinner, you may benefit from defining **Automations** that apply in the respective times of day, and have different **iobTH** (possibly also different deltas, and different **Percentage Profile** set). Both, you with defining your meal spectrum and settings (notably, **iobTH**), and the loop managing the unfolding **BG** curve, must accept certain peak heights for reducing hypo danger towards the end of the **DIAs** from **SMBs**.

### 高血糖停滯

In case, after a “rich” meal, a long-lasting stagnation with **high BG** value is seen, **Automation** #6 (below, left),"post-meal High”, helps deal with fatty acid resistance: After multi-course meals, large greasy pizza, raclette evening, the glucose curve can form two humps or, very often, an elongated high plateau.

![活性胰島素 >5.5...111 TT = 關閉 SMB 16 分鐘](../images/fullClosedLoop05.png)

自動化 #4

![活性胰島素 >5.5...111 TT = 關閉 SMB 16 分鐘](../images/fullClosedLoop06.png)

自動化 #5

自動化 #4，「餐後高血糖」，也適用於混合閉環。

此外，還需要一個終止自動化 #5，「停止餐後高血糖」，以便當血糖開始下降時減少胰島素輸送的積極性。 （然而，通常循環系統為防止低血糖，已經會限制更多胰島素，因為預測的血糖已經偏低）。

### 防止低血糖

The core problem is that the **UAM** **FCL** (without carb inputs) can have **no idea how many g of carbs are still available** for absorption, and might use up that “tail” insulin, without you going into a hypo from it.

Using boosted **SMBs**, the **FCL** “caught up” with what we formerly did with a meal bolus. 但是，在**胰島素作用的「尾部」階段，防止低血糖可能成為一個嚴重的問題**。

In preparation for **FCL**, the user must take a closer look at the **time course of iob** for typical meals, and judge **when it becomes too much, and how you can catch that by tuning your Automations**. That is possible because we have several adjusting screws. It can be a challenge to get this right

通常來說，針對一種餐點不斷優化設定並沒有意義。 當你找到一個還不錯的設定，比如針對你常吃的一種午餐，試試看這個設定在其他午餐上效果如何，並想想你可以怎麼「調整」。

為了防止餐後 3-5 小時內發生低血糖，請在活性胰島素過多之前減少其積極性。 具體方法：

- Become milder and milder with the **ISF** already during the glucose rise, as in Automation examples #1 and #2 given.
- Define the iob threshold, from which **AAPS** is made significantly more cautious (Automation #3, above). Note this **iob** can be exceeded, by the last **SMB** before it went into effect; and then further by TBRs if the loop sees insulinReq Carbs getting absorbed will provide a counter-movement towards lower iob.
- The iob threshold could be differentiated according to meals: By cloning the automations, you could easily differentiate for breakfast, lunch, and dinner time slots (or even for geo-locations, like company cafeteria, or at mother-in-law etc)
> You could differentiate within these time slots even further by setting different TTs for low carb vs. fast carb, etc., and thus be able to “code for” different meal classes that may occur at this time of day, and call them up with **Automations** specially tuned for them. This is probably not necessary, unless your diet habits do vary a lot.

Before a special meal challenge, you can raise your **iob** threshold, or make another change in any of your Automations within under 5 seconds, right from your AAPS main screen (burger top left; or **Automations** tab, depending how you configured your **AAPS**).

餐後數小時內低血糖的風險主要取決於你的餐點組成是否導致**為應對大量碳水所產生的胰島素尾部**會被**「延長碳水」所消耗**（過量/延遲的碳水化合物吸收/蛋白質/脂肪/纖維）。

隨著時間的推移，你會學會辨識模式，調整你的自動化 —— 甚至可能稍微調整你的飲食習慣，例如享受偶爾的小點心，這可能有助於在整個餐點（消化、吸收）期間保持**胰島素活動與碳水化合物吸收的良好平衡**，從而使你的循環系統（以及你自己）的生活更輕鬆。

### 自動化程式的順序

Problems can arise with overlapping definitions in **Automations**. Example: The problem is that delta >8 is also delta >5, i.e. there may be two competing **Automations** What does the loop do then? It always decides according to the sequence in which your **Automations** appear when looking into the burger menu / AdAPS main screen.  範例：delta > +8 規則必須先執行（如果所有條件都適用，將啟動最強的升強）；然後檢查 delta >5（並做出較溫和的回應）。 如果順序相反，則 delta>8 規則永遠不會生效，因為 delta>5 已經適用，結果已定。
> Tip for Automations: Order changes are very easy to make. Press on a list entry in **AAPS/Automations** and the user rearrange the **Automations** in question to another position.

此外，隨時快速調整任何條件或動作也非常容易，直接在你的 AAPS 手機上進行，例如在參加特別的用餐活動時。 （但不要忘記在第二天將其恢復為正常狀態）。

## 問題排除

### 如何回到混合閉環模式

You can un-click the top boxes in the **Automations** related to your **FCL**, and go back to bolusing for meals and make carb inputs again. You may have to go to **AAPS** Preferences/Overview/Buttons and get your Buttons “Insulin, Calculator…” back for your **AAPS** main screen. Be aware that now it is again up to you to bolus for meals.

It may be wise to do **FCL** only for meals (time slots) where **Automations** are fully defined and clicked on, and un-click only those for the other meal times when you like to do **HCL** (or have none defined yet, in your transition period).

For instance, it is perfectly possible, without any extra steps after **Automations** for dinner time slots are defined, to do **FCL** only for dinners, while breakfast and lunch are done in a **HCL** as you are used to.



### 完全閉環的前提條件是否仍然成立？

- Is the basic **Profile** still correct?
- Has the **CGM** quality deteriorated
- Refer to pre-requisites (above).

### 血糖過高

- 餐點未能及時被識別
    - 檢查藍牙連線（不）穩定性
    - Check whether you could set smaller deltas to trigger first **SMB**
    - 在餐前幾分鐘內嘗試喝點開胃酒或湯。
- SMBs 劑量過小
    - Check order of **Automations** (e.g.: big delta before small delta)
    - Check (real-time) in **SMB** tab whether hourly profile basal and set minutes (max 120) limit allowed SMB size
    - Check (real-time) in**SMB** tab whether %profile must  be set bigger
- 如果你的所有設定都達到了極限，你可能需要接受暫時的高血糖，或調整飲食。
> 如果你準備使用 AAPS 開發版本，你也可以使用允許進一步擴展 SMB 劑量的版本。 有些使用者也會在他們的「完全閉環」中使用小劑量的預注射。 However, this interferes with how glucose curve and hence detection of rises and triggered **SMBs** behave, and is therefore not easy to implement with convincing overall benefit.
- 試點使用者的一個重要觀察結果是，你的血糖和活性胰島素曲線如何接近餐點開始的方式對於碳水化合物峰值有很大影響： 向下（例如接近設定的即將用餐 TT），建立一些活性胰島素，並朝強勁的正加速度曲線發展似乎對保持低峰值非常有幫助。

### 血糖過低

- 餐點被錯誤識別
    - Check whether you could set bigger deltas to trigger first **SMB**
    - 點選相關自動化中的「用戶操作」，這樣在未與餐點相關時，你可以隨時阻止該自動化的執行。
    - To prevent snacks from triggering **SMBs** as for a meal, set a TT>100 when snacking (as you would do in sports and for anti-hypo snacks, anyways)
- SMBs 總是輸送過多的胰島素。
    - Check (real-time) in **SMB** tab whether **SMB** range extension must be set smaller
    - Check (real-time) in **SMB**tab whether **Percentage Profile** must  be set smaller
    - SMB 輸送比例可能需要調小。 Note in this case, it works across the board for all **SMBs** (all time slots),
- 餐後胰島素「尾部」問題
    - 你可能需要吃零食（如果預測低血糖）或服用葡萄糖片（如果已經處於低血糖區域）。 但請注意，循環系統告訴你的所需碳水化合物量很可能被誇大，因為循環系統完全不知道你攝入了多少碳水化合物（而你可能能夠猜測還有多少碳水化合物，來自脂肪和蛋白質，仍在等待吸收）。
    - 一個有價值的信息是問題是否主要源於血糖上升階段。 此時，設定一個較低的活性胰島素門檻值可能是一個簡單的解決方案。
    - 如果經常需要額外的碳水化合物，記下所需的碳水化合物克數（不包括你最終攝入過多的部分，因為這需要額外的胰島素）。  Then use your profile IC value to estimate how much insulin less the **SMB** should have delivered, and go with this info into your tuning (regarding the **Percentage Profile** in **Automations**, or maybe also your set iobTH). This may relate to the**SMBs** given when glucose was high, or also extending regarding also the **SMBs** during the **BG** rise.
    - It could well be that you simply have to accept higher **BG** peaks for not going low. 或者，將飲食改為含較低碳水化合物和較高蛋白質及脂肪的食物。


### 更多資訊

Make sure you stay in touch with other **FCL** users.

討論完全閉環自動化：

- 英文: [Discord 頻道](https://discord.gg/ChXj8BaKwA)

- 德文:  [德國 Looper 社群](https://de.loopercommunity.org/t/ueber-die-kategorie-full-loop/10107)
