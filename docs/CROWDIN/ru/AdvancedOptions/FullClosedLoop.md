# Автономный замкнутый контур


The main attraction of Full Closed Looping **FCL** is that it has the potential to mimic an artificial pancreas and make daily management easier without having the need to bolus for meals.

Whilst **hybrid closed loop** ('HCL') is algorithm based, it still requires the user to manually deliver boluses prior to meals. As a result, the loop may go into a temporary shut-off (temporary zero basal) to prevent over delivery of insulin.

In **FCL** mealsize-related bolus are no longer required: leave it to the algorithm!  **AAPS** may allow without the user giving any bolus, and without making carb inputs, in a mode called ‘un-announced meals’ **(‘UAM’)**. **UAM** allows **AAPS** to better tolerate incorrect carb inputs by being more aggressive.

## What to expect?

There are many published studies on the favourable results **FCL** can achieve. For further reading refer to the following:

1) ![NationalLibraryOfMedicine](../images/Logo_of_U.S._National_Library_of_Medicine.png) ![PubMed](../images/US-NLM-PubMed-Logo.png) National Library of Medicine, PubMed [First Use of Open-Source Automated Insulin Delivery AndroidAPS in Full Closed-Loop Scenario: Pancreas4ALL Randomized Pilot Study](https://pubmed.ncbi.nlm.nih.gov/36826996/);

2) ![NationalLibraryOfMedicine](../images/Logo_of_U.S._National_Library_of_Medicine.png) ClinicalTrials.gov National Library of Medicine, Clinical Trial [Feasibility and Safety Study of the Automated Insulin Delivery Closed Loop System Pancreas4ALL (ASAP)](https://www.clinicaltrials.gov/study/NCT04835350?term=Feasibility%20and%20Safety%20Study%20of%20the%20Automated%20Insulin%20Delivery%20Closed%20Loop%20System%20Pancreas4ALL%20(ASAP)&rank=1)

Success for **FCL** requires the user to:

- check whether they met the **FCL** requisites;
- set up **Automations** that are tailored for  their daily management’s needs; and
- fine tune and adjust the **AAPS** settings (notably **Automations**).


## General considerations why (not to) move from HCL to FCL

**FCL** is not for everyone:

- Some **FCL** users achieve TIR (70-180) around 90% and HbA1c under 6%, however other users prefer tighter control. Notably, minimising values over 140 mg/dl at diets with rapid carbs probably requires pre-bolusing.
- **AAPS** tuning can be challenging. It is not for those users who feel overwhelmed AAPS.  You will need to dedicate a few weeks in order to adjust and fine tune your **FCL**. Investing such time can yield better results and **BG** control.
- Meal management may become easier, however exercise can still be challenging in **FCL**. Most of us like to limit sports snacks in an attempt to control body weight.
- Difficulties still remain to establish a **FCL** for kids (discussed below).


## Well-tuned hybrid closed loop

It is advisable to first establish a well-tuned **HC**L before considering the transition to **FCL**.  Success with **FCL** requires a highly personalised individualised tuning of the user’s setting so that **AAPS** can give insulin to closely mimic YOUR successful hybrid closed loop mode.

**FCL** requires the user to set up and tune their **Automations**. However the user must have a confident understanding of their insulin management needs before embarking on **FCL**. Errors can be masked with counter-errors. This can create an unstable **FCL** system, and make it hard to later correct. You should expect to reach a comparable %TIR with your FCL as you see today in your **HCL**.

**FCL is a DIY set up of Automations determined by the user by analysing their data from both their successful HCL and  initial FCL experience when tuning your settings.**

## Fast insulin (Lyumjev, Fiasp)

**FCL** requires fast insulin.  This is so that at the start of meal-related **BG** rise, **FCL** is able to keep **BG** in range (by common definition, under 180 mg/dl (10 mmol/l)).

Моделирующее исследование (подробности см по ссылке Full Loop V2/Март 2023; там же раздел 2.2) показывает, что *инсулины короткого действия*

Источник:

![IEEEControlSystemsMagazine](../images/IEEE_Control_Systems_Society_Logo_RGB.jpg) ![ResearchGate](../images/researchgate-logo-white.svg)



EEE Control Systems Magazine, ResearchGate [The Artificial Pancreas and Meal Control: An Overview of Postprandial Glucose Regulation in Type 1 Diabetes](https://www.researchgate.net/publication/322866519_The_Artificial_Pancreas_and_Meal_Control_An_Overview_of_Postprandial_Glucose_Regulation_in_Type_1_Diabetes);

- will result in significantly lower *BG** peaks than slower insulins;
- tolerate a couple of minutes delayed first meal bolus while not incurring unacceptable height of peaks; and
- minimise the effect on **BG** peak from different carb loads (meal sizes).

**FCL** is unlikely to be effective with insulin other than Lyumjev or Fiasp, unless the user is on a very moderate to low carb diet.

However, Fiasp or Lyumjev can result in frequent pump occlusions, even after optimising things like needle length. It is important to have an eye on the cannula or pod time. Many users find 48 hours to be the efficacy insulin limit before resulting in cannula/pod failure.

## Prerequisites

**BG** values and stable bluetooth connectivity are required to ensure **AAPS** can optimally perform without losing valuable time. **FCL** requires a 24/7 technically stable system:

- your **CGM’s performance. Your CGM should not produce jumpy **BG** values that could be misinterpreted by **FCL** as a sign of a starting meal. Similarly, **CGM** calibrations can produce jumpy results.
- how and where any **CGM** smoothing is done, and what this might imply for your tuning. Notably how delta is defined, and AAPS recognising this as being sign of a starting meal.
- bluetooth stability for the pump and CGM  pump;
- avoiding (or at least early recognition of) pump occlusion;
- data flow and your phone's apps used and difference between days of sensor usage;
- keeping all **AAPS** components well charged and in spare parts close proximity; and
- actioning cannula (or pod) changes always early enough to lower the risk of occlusion;

The above will vary depending on your **AAPS** component system and your lifestyle.

## Meal-related limitations

- Setting up a **FCL** may be easier for people whose diets do not consist of food components with a rapid high effect on **BG**, and meal patterns that do not wildly vary day-to-day. This does not necessarily mean low carb.

- Fat or protein rich diets, or slow digestion/gastroparesis, make things easier rather than harder for **FCL**  because late carbs nicely cover for inevitable “tails” of late action from bolus needed around peak time.

### Glycemic index and effect on blood glucose

The challenge for the **UAM** mode rises with rising 'Effect on Blood Glucose ('EBG')

- Start moderate/low, and tune your **Profile's** settings. Only then, "test" meals with high **EBG**.
- Consider a < 50% initial bolus if consuming very high **EBG**.

1) **No EBG**: e.g. fresh meat, fish, eggs, bacon, oils, cheese. 2) **Low EBG**: e.g. fresh vegetables and berries, mushrooms, nuts, milk, yoghurt, cottage cheese. 3) **Moderate EBG**: e.g. whole grain bread/noodles, potatoes, wild rice, oats, dried fruits. 4) **High EBG**:e.g. wheat breads, baguette, toast, waffles, cookies, mash potatoes, noodles, rice. 5) **Very High EBG**: e.g. sugar, sweet drinks, fruit juices, cornflakes, candy, sweets, potato chips, salty pretzel sticks.

![Glycemic index and effect on blood glucose](../images/fullClosedLoop01.png)

The most difficult meals for **FCL** are those foods exclusively very high and high **EBG** components (see red in the picture): Not only does **BG** shoot up rapidly, but also there is little fat/protein/fibre component to balance the inevitable “tail” of insulin activity that would come with attempts to control the high glucose earlier on.

Erratic consumption of snacks and sweet drinks that are loaded with fast absorbing carbs is problematic for **FCL**.


## Preparing for activity/sports

When exercising or being active, with a pump or hybrid closed loop it is recommended that the user reduces **IOB** prior to exercise.

With **FCL**, the algorithm is tuned to detect **UAM** and automatically deliver insulin to counter **BG** rises.  A high **Temp Target** and lower **Profile Percentage** (effective already around meal start) should be set well in advance of any activity.

Unusual or erratic exercise activity levels present difficulties for **FCL**. Planning ahead is required for exercise (especially if you want to reduce the need for rescue carbs/snacks during sports low). After an active day it is recommended that a lower  **Percentage Profile** is set for overnight after the evening meal is fully digested: set in **Automations** an elevated (>100 mg/dl) **BG**  target, with “no **SMBs** at elevated target” selected in **AAPS*** preferences.

## Hurdles for kids

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

Иначе, все усилия по настройке параметров не приведут ни к чему!


```{admonition} Boosting **ISF** can become dangerous
:class: danger

Carefully observe/analyse the **SMB** sizes shortly after your meal commences. Настраивайте пошагово и никогда не меняйте более 1 или 2 параметров одновременно.

Your **AAPS'** setting must be sufficiently set up to cope with your (!) variety of meals.
```

## Meal detection/your Automations for boosting

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

### Automated big SMBs at bg rise

The key to successful **FCL** **at the beginning of BG increases from meals, very large automatic SMBS must be given by the loop as quickly as possible** “to catch up” with the required **IOB** needed (compare with your typical administered bolus for similar meal in h**HCL**!)

To achieve this, data from your **HCL** should be analysed to determine which **deltas** might be not meal –related and those delta which might be.

- As you can define the **Automation** within a pre-defined time-window, you need only to analyse there.
- If you do very different kinds of meals (e.g. a rather high carb breakfast, but low carb lunch) you can choose to do two different (sets of) **Automations** for each of the time slots.
- Если в ночное время у вас случаются скачки ГК из-за сдавливания сенсора во сне, исключите ночное время из настроек автоматизации
- Обычно достаточно пользоваться изменениями / дельтой последних 5 минут.
- Но можете использовать одно из усредненных изменений /приращений. By comparing the deltas in the conditions of your **Automations** you could even define actions of different aggressiveness depending on whether the **BG** rises in an accelerated way or not.

> ( delta – short avg delta )>n   is a term that could be used for acceleration detection , to trigger first **SMB** at earliest sign of rising **BG**. -                                                                             
> Caution: not possible to use with poor or highly smoothened **CGM-values!

A **CGM** with patchy data puts the user in a bad spot because, to be on the safe side,  you need to „sandbag“ your definition which delta is surely a sign of a started meal. This means:

- **FCL** loses additional time, resulting in higher **BG** peaks and lower %**TIR**;
- you cannot use an earlier or smaller delta which could trigger, also without a meal, the **SMBs** that are supposed to make up for a user bolus in **FCL**.

Кроме того, первые подъемы после еды характеризуются **низким уровнем активного инсулина IOB**. С учетом этого, Автоматизация(#1) для ужина может выглядеть следующим образом:

![скачок 8mg 130% ioby4](../images/fullClosedLoop02.png)

Автоматизация #1

If Conditions apply, **AAPS** would give 1 or 2 **SMBs** in the next 12 minutes, using a boosted **ISF** according to the set elevated **Profile Percentage** (in the example, a 30% boost of insulinReq). As long as these Conditions apply, the **Automation**  rule extends by another 12 minutes. A low carb meal might have slower **BG** rise characteristics. Для такой пищи полезна еще одна Автоматизация (#2), которая срабатывает при более низкой дельте и дает более слабую подачу инсулина.

![>=скачок 5mg 115%, iob<5.5](../images/fullClosedLoop03.png)

The same **Automation** probably will kick in also in higher carb meals, once the steep rise as defined in Automation#1 is over.

You need to “stage” these two (+ maybe a third) **Automations** to fit with what you see in your meal (variety) => Setting appropriate jump sizes, **iob** criteria, and amplifications will be an iterative tuning process.  Кроме того, если в Условия добавить соответствующие временные интервалы, вы сможете легко создавать различные автоматизации для разных приемов пищи (завтрак, обед, ужин).

Note that, still in the rise phase (!), the "overflow" of **iob** must be blocked so that the late effects of the **insulin** (the "**tail**" after 3-5 hours) will not exceed the braking capacity of the loop through zero-temping (“taking away” basal, to reduce hypo risk).

При большом приёме пищи **иногда наблюдается вторичное увеличение уровня глюкозы**. К этому времени, обычно, уровень активного инсулина немного падает, и более агрессивная Автоматизация снова вступает в силу. (Убедитесь, что критерий активного инсулина в Автоматизации #2 не слишком низок, чтобы это смогло произойти).

Soon after a few initial **SMBs** are given comes a **balanced phase** where moderate delivery of insulin should cover the additional carbs absorbed. (Except in low carb meals, where the loop might see too weak of a**BG** rise, and go into zero-temping right away already now).

The **AAPS** main screen (where you see cob=0 in **UAM** full loop) might in this phase ask for more carbs required. In **UAM** mode that simply means, you could make a very rough plausibility check: Is that amount of carbs likely in your body, un-absorbed from your meal just about an hour ago (about which you gave your loop no info)?


### iob threshold

Often, **Automations** #1 and/or #2 make iob rise to heights that typically are enough for **your** meals. For personalised tuning, look in your **HCL** data at the max iob values that occur with well-managed meals (often: your meal bolus), and above which magnitude a hypo (or requirement for extra carbs) occurred at the end.

Разумные **ограничения активного инсулина IOB**, при которых следует снизить агрессивность цикла, могут не совпадать для разных видов пищи. But especially in the first hour after the start of a meal, which is very crucial in the **UAM** mode. It will defer to for each user. For some users just about 30g/hour get absorbed, and to define a meaningful **iob** independent of the exact meal can be possible.

For exceptional meals, or to lower it if sports follow, the **iob** threshold can rapidly be set differently in your **Automation**.

Automation(#3),”iobTH reached => **SMBs** off”, is defined to end (or pause, until another wave of carb-related rise hits) the aggressive **SMB** boosting.

![iob >5.5...111 TT = SMBs off 16m](../images/fullClosedLoop04.png)

Автоматизация #3

It tells the loop that above your set **iob threshold** it's better not to use any more **SMBs**

- The given example does that by setting TT=111 (which is kind of arbitrary; pick a number>100 that you easy recognise as your automated **SMB** shut-off)
- In **AAPS' Preferences/ SMB** Settings generally do not allow **SMB** at elevated target).                                                                                                                   
  The insulin required will then have to be delivered with much more caution through the bottleneck of **TBRs**

**Внимание: Автоматизация #3 работает только при отсутствии временной цели TT.** Поэтому, если ранее устанавливалась "Временная цель TT Ожидаемый прием пищи", она должна быть завершена к этому времени, обычно спустя 30-40 минут после начала еды.

One way to do this is to set up an **Automation** Condition that ends an eventually running EatingSoonTT under the Condition **iob**>65% * iobTH.
> Ways to work with EatingSoonTT Some loopers set (by pressing the TT button, or automated via a lowered **Profile** **BG** target if eating time slots are fairly fixed) an EatingSoonTT roughly an hour or more before meal start, just to guarantee a low starting **BG** and slightly increased  **iob**. But, assuming the **FCL** is always en route towards target, this might not yield much and you may prefere to define an **Automation** that sets an EatingSoonTT at recognition of meal start (glucose delta, or acceleration = delta > avg delta). A low **TT** is important in this stage because any **SMB** is calculated by your loop using (predicted glucose minus TT)/sens, so a small TT makes the resulting insulinReq bigger.

After the first boosted **SMB**s were given, your set iobTH and *Automation** #3 should strike a good balance of limiting the glucose peak, but also not leading to a hypo after the meal.

If your breakfast substantially deviates in carb content from your average dinner, you may benefit from defining **Automations** that apply in the respective times of day, and have different **iobTH** (possibly also different deltas, and different **Percentage Profile** set). Both, you with defining your meal spectrum and settings (notably, **iobTH**), and the loop managing the unfolding **BG** curve, must accept certain peak heights for reducing hypo danger towards the end of the **DIAs** from **SMBs**.

### Stagnation at high bg values

In case, after a “rich” meal, a long-lasting stagnation with **high BG** value is seen, **Automation** #6 (below, left),"post-meal High”, helps deal with fatty acid resistance: After multi-course meals, large greasy pizza, raclette evening, the glucose curve can form two humps or, very often, an elongated high plateau.

![iob >5.5...111 TT = SMBs off 16m](../images/fullClosedLoop05.png)

Автоматизация #4

![iob >5.5...111 TT = SMBs off 16m](../images/fullClosedLoop06.png)

Автоматизация #5

Автоматизация #4, "Высокая ГК после еды", подходит и для гибридного цикла.

Кроме того, Автоматизация #5, “Stop post-meal High”, применяется для снижения агрессивности подачи инсулина как только начинает падать уровень глюкозы. (Однако часто алгоритм всё равно ограничивает количество инсулина для предотвращения гипогликемии, поскольку прогнозируемый уровень глюкозы уже снижается).

## Hypo prevention

The core problem is that the **UAM** **FCL** (without carb inputs) can have **no idea how many g of carbs are still available** for absorption, and might use up that “tail” insulin, without you going into a hypo from it.

Using boosted **SMBs**, the **FCL** “caught up” with what we formerly did with a meal bolus. Но **в конце периода активности инсулина, на первое место выходит профилактика гипогликемии**.

In preparation for **FCL**, the user must take a closer look at the **time course of iob** for typical meals, and judge **when it becomes too much, and how you can catch that by tuning your Automations**. That is possible because we have several adjusting screws. It can be a challenge to get this right

Как правило, не имеет смысла оптимизировать настройки для одного вида питания. Как только появятся хорошие настройки для любимого обеда, следует проверить, как они работают с другими продуктами, а где потребуются «компромиссы».

Чтобы предотвратить гипогликемию в послеобеденные 3 – 5 часов, уменьшите агрессивность алгоритма и не допускайте избытка активного инсулина. Конкретные способы:

- Become milder and milder with the **ISF** already during the glucose rise, as in Automation examples #1 and #2 given.
- Define the iob threshold, from which **AAPS** is made significantly more cautious (Automation #3, above). Note this **iob** can be exceeded, by the last **SMB** before it went into effect; and then further by TBRs if the loop sees insulinReq Carbs getting absorbed will provide a counter-movement towards lower iob.
- The iob threshold could be differentiated according to meals: By cloning the automations, you could easily differentiate for breakfast, lunch, and dinner time slots (or even for geo-locations, like company cafeteria, or at mother-in-law etc)
> You could differentiate within these time slots even further by setting different TTs for low carb vs. fast carb, etc., and thus be able to “code for” different meal classes that may occur at this time of day, and call them up with **Automations** specially tuned for them. This is probably not necessary, unless your diet habits do vary a lot.

Before a special meal challenge, you can raise your **iob** threshold, or make another change in any of your Automations within under 5 seconds, right from your AAPS main screen (burger top left; or **Automations** tab, depending how you configured your **AAPS**).

Опасность гипогликемии через несколько часов после еды, по существу, зависит от того, будет ли **оставшийся инсулин** **расходоваться на покрытие «пролонгированных углеводов»** (излишних/замедленных углеводов/белков/жиров/клетчатки).

Со временем вы изучите закономерности, настроите свою Автоматизацию – возможно, даже немного скорректируете свои привычки в еде, чтобы, например, просто получать удовольствие от случайного (!) перекуса, который поможет поддерживать хороший **баланс между активностью инсулина и усвоением углеводов**.

### Order of programmed Automations

Problems can arise with overlapping definitions in **Automations**. Example: The problem is that delta >8 is also delta >5, i.e. there may be two competing **Automations** What does the loop do then? It always decides according to the sequence in which your **Automations** appear when looking into the burger menu / AdAPS main screen.  Пример: Правило дельта > +8 должно быть первым в списке (и если все правила активны, запускать самый сильный ответ); потом алгоритм проверяет значение дельты >5 (соответственно более мягкий ответ). Если отсортировать список наоборот, правило дельта>8 никогда не вступит в силу, поскольку правило дельта>5 уже применяется первым.
> Tip for Automations: Order changes are very easy to make. Press on a list entry in **AAPS/Automations** and the user rearrange the **Automations** in question to another position.

Можно очень быстро подстраиваться к любым условия или действиям, прямо на экране AndroidAPS; например, если вы отправляетесь на праздничный ужин. (Но не забудьте вернуть очерёдность списка в нормальное состояние на следующий день).

## Устранение неполадок

### How to get back into Hybrid Closed Loop

You can un-click the top boxes in the **Automations** related to your **FCL**, and go back to bolusing for meals and make carb inputs again. You may have to go to **AAPS** Preferences/Overview/Buttons and get your Buttons “Insulin, Calculator…” back for your **AAPS** main screen. Be aware that now it is again up to you to bolus for meals.

It may be wise to do **FCL** only for meals (time slots) where **Automations** are fully defined and clicked on, and un-click only those for the other meal times when you like to do **HCL** (or have none defined yet, in your transition period).

For instance, it is perfectly possible, without any extra steps after **Automations** for dinner time slots are defined, to do **FCL** only for dinners, while breakfast and lunch are done in a **HCL** as you are used to.



### Are the pre-conditions for FCL still given?

- Is the basic **Profile** still correct?
- Has the **CGM** quality deteriorated
- Refer to pre-requisites (above).

### Glucose goes too high

- Момент приёма пищи не распознается вовремя
    - Проверьте стабильность Bluetooth-соединений
    - Check whether you could set smaller deltas to trigger first **SMB**
    - Экспериментируйте с аперитивом, супом за несколько минут до начала еды
- Слишком малые дозы микроболюсов SMB
    - Check order of **Automations** (e.g.: big delta before small delta)
    - Check (real-time) in **SMB** tab whether hourly profile basal and set minutes (max 120) limit allowed SMB size
    - Check (real-time) in**SMB** tab whether %profile must  be set bigger
- Если все настройки достигли лимитов, возможно, вам придется жить с временным высоким или применить диету.
> Если вы готовы использовать AAPS версии для разработчиков, вы можете использовать ту, которая позволяет увеличить размер SMB. Некоторые пользователи также прибегают к небольшим преболюсам в своих "самодостаточных системах замкнутого цикла". However, this interferes with how glucose curve and hence detection of rises and triggered **SMBs** behave, and is therefore not easy to implement with convincing overall benefit.
- Важным наблюдением со стороны группы испытуемых было то, какую тенденцию ваши кривые глюкозы и активного инсулина (IOB) имеют к моменту приема пищи, это оказывает существенное влияние на пики от приёма углеводов: Снижение уровня (напр. настройка "Включить временную цель TT Ожидаемый прием пищи") позволяет увеличить содержание активного инсулина IOB и удерживать пики в более низких пределах.

### Glucose goes too low

- Некорректно определяется время начала приёма пищи
    - Check whether you could set bigger deltas to trigger first **SMB**
    - Отметьте галочкой «Действия пользователя» в соответствующей Автоматизации, чтобы в дальнейшем иметь возможность на месте решить, остановить ли выполнение Автоматизации, если приёма пищи на самом деле не было
    - To prevent snacks from triggering **SMBs** as for a meal, set a TT>100 when snacking (as you would do in sports and for anti-hypo snacks, anyways)
- SMB вводят слишком много инсулина
    - Check (real-time) in **SMB** tab whether **SMB** range extension must be set smaller
    - Check (real-time) in **SMB**tab whether **Percentage Profile** must  be set smaller
    - Коэффициент SMB вероятно должен быть меньше, чем установлен. Note in this case, it works across the board for all **SMBs** (all time slots),
- Проблемы с инсулиновым «хвостом» после еды
    - Возможно, потребуется перекус (из-за прогноза гипогликемии) или прием таблеток декстрозы (если вы уже в зоне гипогликемии). Но обратите внимание, что углеводы, которые может запрашивать алгоритм, скорее всего, сильно преувеличены, поскольку петля не имеет информации о потреблении углеводов (в то время как вы можете предположить, сколько ещё не было усвоено, включая жиры и белки).
    - A valuable information would be whether the problem originates mostly in the bg rise phase already. В этом случае поможет установка более низкое порога активного инсулина iobTH.
    - Если потребность в дополнительных углеводах возникает слишком часто, запишите, сколько граммов потребовалось (не считая того, что вы в итоге переборщили и вам снова потребовался дополнительный инсулин).  Then use your profile IC value to estimate how much insulin less the **SMB** should have delivered, and go with this info into your tuning (regarding the **Percentage Profile** in **Automations**, or maybe also your set iobTH). This may relate to the**SMBs** given when glucose was high, or also extending regarding also the **SMBs** during the **BG** rise.
    - It could well be that you simply have to accept higher **BG** peaks for not going low. Или поменяйте диету, чтобы в ней было меньше углеводов и больше белка и жиров.


### More info

Make sure you stay in touch with other **FCL** users.

Обсуждение самодостаточного замкнутого цикла с помощью настроек Автоматизации:

- На английском:   [Discord Channel](https://discord.gg/ChXj8BaKwA)

- На немецком:  [German Looper Community](https://de.loopercommunity.org/t/ueber-die-kategorie-full-loop/10107)
