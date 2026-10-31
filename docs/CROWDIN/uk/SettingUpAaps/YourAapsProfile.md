# Ваш профіль AAPS

Your **AAPS Profile** is a set of four key parameters which define how **AAPS** should deliver insulin in response to your sensor glucose levels. Це основні параметри, на яких побудовано **AAPS**. Проходячи **Завдання**, ви відкриєте додаткові параметри, які можна змінювати (наприклад, налаштування SMB), але ці функції добре працюють, лише якщо ваш базовий **Профіль** правильний. **Профіль** містить:
* [glucose targets](#profile-glucose-targets),
* [basal rates](#your-aaps-profile-basal-rates) (BR),
* [insulin sensitivity factors](#your-aaps-profile-insulin-sensitivity-factor) (ISF) and
* [insulin-to-carb ratios](#your-aaps-profile-insulin-to-carbs-ratio) (IC or ICR).

```{admonition} Where did DIA go?
:class: note
The **duration of insulin action (DIA)** is no longer part of your **Profile**. It is set per insulin instead — see [Manage → Insulin settings](#Config-Builder-insulin-dia).
```

As part of **AAPS**’ management, users should continually assess and scrutinize the accuracy of their **Profile** settings. Рекомендуємо налаштовувати параметри в тому порядку, в якому їх тут подано. Спочатку добре налаштуйте один параметр, а потім змінюйте інший. Робіть невеликі кроки, а не великі зміни одразу. Не забувайте активувати новий профіль після кожної зміни. Regularly [back up your **Profile**](#YourAapsProfile_Profile-backup) settings by exporting your settings.

Налаштування вашого **Профілю** впливають одне на одне: можуть бути «неправильні» налаштування, які за одних обставин добре працюють разом, а за інших — ні. Наприклад, якщо завеликий базал збігається в часі із завеликим **CR**. This means that you need to consider the settings individually and check they work harmoniously together in a variety of circumstances.

Ви можете використовувати [Autotune](https://autotuneweb.azurewebsites.net/) як підказку, але не слід сліпо йому довіряти: він може погано працювати для вас або не за всіх обставин.

```{admonition} Your diabetes may vary
:class: note
**Profiles** vary significantly from person-to-person.

Для базальних швидкостей (BR), факторів чутливості до інсуліну (ISF) і вуглеводних коефіцієнтів (IC або ICR) абсолютні значення та тенденції потреби в інсуліні дуже різняться від людини до людини. Вони залежать від вашого організму, статі, віку, фізичної форми тощо, а також від короткочасних чинників, як-от хвороба чи недавнє фізичне навантаження. For more guidance on this, the book [“Bright Spots and Landmines”](https://diatribe.org/bright-spots-and-landmines/) by Adam Brown is an excellent book to read.

```

Чотири останні параметри (цілі глюкози, базальні швидкості, фактори чутливості до інсуліну і вуглеводні коефіцієнти) можна задати різними значеннями протягом 24 годин, за потреби — з погодинною зміною.

![Погодинна зміна базалу](../images/MaxDailyBasal2.png)

Screenshots from **AAPS** of an _example_ profile are shown below. Зверніть увагу: у цьому прикладі профілю нижче багато часових точок. Коли ви тільки починаєте працювати з **AAPS**, ваш профіль, найімовірніше, буде набагато простішим.

![Example active profile](../images/Profile-Example-Active.png)

(profile-glucose-targets)=
## Glucose targets

### Опис

Ваша **цільова ГК** — це основне значення, на якому ґрунтуються всі розрахунки **AAPS**. Вона відрізняється від цільового діапазону, в якому ви зазвичай намагаєтеся утримувати рівень глюкози крові. The target is used in **AAPS** calculations: if **AAPS** predicts that your **BG** will land outside the target range, then it will take action to take you back in said range.

The targets can be defined within those boundaries :

|          | _Low_ target           | _High_ target            |
| -------- | ---------------------- | ------------------------ |
| Мінімум  | 4.4 mmol/L or 80 mg/dL | 5 mmol/L or 90 mg/dL     |
| Максимум | 10 mmol/L or 180 mg/dL | 11.1 mmol/L or 200 mg/dL |

### Вплив

If the target in your **Profile** is very wide (say, 3 or more mmol/L [50 mg/dL or more] wide), you will often find little **AAPS** action. Так відбувається тому, що прогнозований рівень **ГК** буде десь у цьому широкому діапазоні, тож **AAPS**, найімовірніше, не змінюватиме тимчасовий базал.

### Як налаштувати

The **figure below** shows an example of how the target can be set in an **AAPS** profile.

![Ціль](../images/Profile_Target.png)

**BG** targets are set according to your personal preferences and requirements. Наприклад, якщо ви боїтеся гіпо вночі, можна встановити ціль трохи вище, 117 мг/дл (6,5 ммоль/л), з 21:00 до 7:00. If you want to make sure you have plenty of insulin on board (IOB) in the morning before bolusing for breakfast, you may set a lower target of 81 mg/dL (4.5 mmol/L) from 7 am - 8 am.

When In [Open Loop](#KeyAapsFeatures-OpenLoop), especially when progressing through [the first objectives](../SettingUpAaps/CompletingTheObjectives.md), using a wide range target can be a good option while you are learning how **AAPS** behaves and adjusting your **Profile**.<br/> When In [Closed Loop](#KeyAapsFeatures-ClosedLoop) (starting at **[Objective 6](#objectives-objective6)**), it is recommended to reduce the range until you have a single target for each time of the day (_Low_ target = _High_ target), to make sure that **AAPS** reacts promptly to **BG** fluctuations.

(your-aaps-profile-basal-rates)=

## Basal rates

### Опис

Your basal rate of insulin (Units/hour) provides background insulin, keeping your glucose levels stable in the absence of food or exercise.

The insulin pump delivers small amounts of rapid acting insulin every few minutes, to keep the liver from releasing too much glucose, and to move glucose into body cells. Basal insulin usually makes up between 40 - 50% of your total daily dose (TDD), depending on your diet, and typically follows a circadian rhythm, with one peak and one valley in insulin requirements over 24 hours. For more information, chapter 6 of [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) by Gary Scheiner is very useful.

Most type 1 diabetes educators (and people with type 1 diabetes!) agree that you should work on getting your basal rates correct, before attempting to optimize your ISF and ICR.

### Вплив

Accurate basal rates enable you to wake up in range, and to skip meals - or eat - earlier or later in the day, without going high or low.

Too high basal rate can lead to low BGs. І навпаки.

**AAPS** ‘baselines’ against the default basal rate. If basal rate is too high, a ‘zero temp’ will count as a bigger negative IOB than it should. This will lead to **AAPS** giving more subsequent corrections than it should to bring IOB ultimately to zero.

So, a basal rate too high will create low **BGs** both with the default rate, but also some hours hence as **AAPS** corrects to target.

Conversely, a basal rate too low can lead to high BGs, and a failure to bring levels down to target.

### Як налаштувати

The **figure below** shows an example of how the basal rates can be set in an **AAPS** profile.

![Basal rates](../images/Profile_BasalRates.png)

Setting your basal rates right is done by trial and error, and should be done in consultation with your diabetes team.

There are basal testing methods which usually entails observing your basal rates and insulin needs during an <u>intermittent</u> fasting over a 24-hour period. Although you need to test your basal rates for the whole day, it is not recommended to fast during 24h straight. This is because the body triggers mechanisms such as hormones to compensate. A recommended way is to fast over 3 different days for a period of 8 hours.

The recommended method is to suspend the loop (for safety you can set AAPS to [**LGS**](#KeyAapsFeatures-LGS) to avoid lows, as done for achieving [objective 6](#objectives-objective6)), which will revert to your default background basal rate. Observe how your **BG** changes: if it is dropping, basal rate is too high. And vice versa.<br/> An alternative method (may be more tricky) is to keep the loop running, and seeing how **IOB** changes. If **IOB** is negative, your basal rate is too high. І навпаки. Beware that this method relies on **ISF** to correct **BG**, and thus depends on other variables to be set reasonably well for it to be successful.<br/> Another way of adjusting your basal rates is to watch the loop action during the night, when all COB have decayed. This method is particularly useful for children, when fasting is difficult or insulin needs change often. [Dr Saleh Adi from Tidepool](https://www.youtube.com/watch?v=-fpWnGRhLSo) provides useful ways on how to analyze overnight BG lines in order to optimize your basal rates.

See [here](../GettingHelp/ProfileTuning.md) how to tweak your basal profile, analyzing patterns in closed loop.

When taking action on the result of your basal testing, changes in the **Profile** should be done 1 to 2 hours (depends on your insulin type) before the rise/drop. Repeat the test as necessary until you are comfortable with your **basal rates** settings.

(your-aaps-profile-basal-not-compatible)=
#### Message: "Basal rate is not compatible with the current pump"

Each pump has limits: a lowest and a highest basal rate it can deliver and, for some pumps (for example Dana, Accu-Chek Combo, Medtronic and Diaconn G8), basal rates that can only change on the full hour. **AAPS** checks your profile against the pump you use, **after** applying the percentage you choose.

If a basal rate is outside these limits, the **Activate** screen shows this message and the **Activate** button stays grey:

![Activate screen with the message "Basal rate is not compatible with the current pump"](../images/v4/Profiles/profile_activate_pump_incompatible.png)

For example, with a basal rate of 0.10 U/h in the night and a profile percentage of 35 %, **AAPS** would have to deliver 0.035 U/h. This is less than a Dana pump can deliver (0.04 U/h).

To solve it, either:

* choose another percentage: a **higher** one if a basal rate becomes too low, a **lower** one if a basal rate becomes too high, or
* [edit the profile](#your-aaps-profile-create-and-edit-profiles) and change the basal rate.

The profile editor only lets you start basal rates on a full hour. A basal rate starting at e.g. 06:30 can only come from an older profile, for example after you change to a pump that does not support it.

(your-aaps-profile-insulin-sensitivity-factor)=

## Insulin sensitivity factor (ISF)

### Опис

The insulin sensitivity factor (sometimes called correction factor) is a measure of how much your blood glucose level will be reduced by 1 unit of insulin.

**In mg/dL units:** If you have an **ISF** of 40, each unit of insulin will reduce your blood glucose by approx. 40 mg/dL (for example, your blood glucose will fall from 140 mg/dL to 100 mg/dL).

**In mmol/L units:** If you have an **ISF** of 1.5, each unit of insulin will reduce your blood glucose by approx. 1.5 mmol/L (for example from 8 mmol/L to 6.5 mmol/L).

From these examples you can see that the _smaller_ the **ISF** value, the less sensitive you are to insulin. So if you reduce your ISF from 40 to 35 (mg/dL) or 1.5 to 1.3 (mmol/L), this is often called strengthening your **ISF**. Conversely, increasing the **ISF** value from 40 to 45 (mg/dL) or 1.5 to 1.8 (mmol/L) is weakening your **ISF**.

### Вплив

A **lower / stronger ISF** (i.e. 40 instead of 50) means insulin drops your **BG** less per unit. This leads to a more aggressive / stronger correction from the loop with **more insulin**. If your **ISF** is too strong (small value), this can lead to low **BG**.

A **higher / weaker ISF** (i.e. 45 instead of 35) means insulin drops your **BG** more per unit. This leads to a less aggressive / weaker correction from the loop with **less insulin**. If your **ISF** is too weak (large value), this can lead to high **BG**.

**Приклад:**
* **BG** is 190 mg/dL (10.5 mmol/L) and target is 100 mg/dL (5.6 mmol/L).
* So, you want a correction of `190 - 100 = 90 mg/dL` or `10.5 - 5.6 = 4.9 mmol/L`
* If `ISF = 30` -> `90 / 30 = 3` or `ISF = 1.63` -> `4.9 / 1.63 = 3`: 3 units of insulin
* If `ISF = 45` -> `90 / 45 = 2` or `ISF = 2.45` -> `4.9 / 2.45 = 2`: 2 units of insulin

An **ISF** that is too low (and therefore more aggressive, not uncommon) can result in ‘over corrections’, because **AAPS** calculates that the user needs more insulin to correct a high **BG** than actually required. This can lead to ‘roller coaster’ BG levels (esp. when fasting), as shown on the image below. In this circumstance, the **ISF** value should be increased in order to make **AAPS** less aggressive. This will ensure **AAPS** delivers smaller correction doses, and avoid over-correcting a high **BG** resulting in a low **BG**.

![ISF too low](../images/isf.jpg)

Conversely, an **ISF** set too high can result in under-corrections, meaning your **BG** remains above target – particularly noticeable overnight.

### Як налаштувати

See the **figure below** for an example of how ISF values could be set in an **AAPS** profile.

![Profile ISF](../images/Profile_ISF.png)

A basic starting point for determining your daytime ISF is to base it on your total daily dose (TDD) using the 1,700 (94) rule. Докладніше про це в розділі 7 книги [«Think like a Pancreas»](https://amzn.eu/d/iVU0RGe) Гері Шайнера (Gary Scheiner).

| 1700 (if measuring in mg/dL) or 94 (mmol/L)/ TDD = approx ISF.<br/><br/>Example: TDD = 40 U<br/>Approx ISF (mg/dL) = 1700/40 = 43<br/>Approx ISF (mmol/L) = 94/40 = 2.4 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                                                 |

Assuming your basal levels are correct, you can test this by suspending the loop, checking **IOB** is zero, and taking a few glucose tablets to get to a stable ‘high’ level.

Then take an estimated amount of insulin (as per current 1/ISF) to get to your target BG.

Be careful as this is quite often set too low. Too low means 1 U will drop BG faster than expected.

(your-aaps-profile-insulin-to-carbs-ratio)=

## Insulin to Carb ratio (ICR)

### Опис

The **ICR** is a measure of how many grams of carbohydrate are covered by one unit of insulin.

Some people also use **I:C** as an abbreviation instead of **ICR**, or talk about carb ratio : **CR**.

For example, a 1-to-10 (1:10) insulin-to-carb ratio means that you take 1U of insulin for every 10 grams of carbs eaten. A meal of 25g carbs would need 2.5U of insulin.

If your **ICR** is weaker (higher value), perhaps 1:20, you would only need 0.5U of insulin to cover 10 g of carbs. A meal of 25g of carbs would need 25/20 = 1.25U of insulin.

It is common to have different **ICR** at different times of day due to hormone levels and physical activity. Many people find they have their lowest/strongest **ICR** around breakfast time because they tend to be more insulin resistant. So, for example, one adult user's **ICR** could be 1:8 for breakfast, 1:10 for lunch and 1:10 for dinner, but these patterns are not universal, and some people are more insulin resistant at dinner time, and require a stronger/smaller **ICR** then.

> **NOTE:**
> 
> In some European countries bread units were used for determination of how much insulin is needed for food. At the beginning 1 bread unit equal to 12g of carbs, later some changed to 10g of carbs.
> 
> In this model the amount of carbs was fixed and the amount of insulin was variable. ("How much insulin is needed to cover one bread unit?")
> 
> When using **ICR** the amount of insulin is fixed and the amount of carbs is variable. ("How many g of carbs can be covered by one unit of insulin?")
> 
> Приклад:
> 
> Bread unit factor (BU = 12g carbs): 2,4 U/BU -> You need 2,4 units of insulin when you eat one bread unit.
> 
> Corresponding **ICR**: 12g / 2,4 U = 5,0 g/U -> 5,0g carbs can be covered with one unit of insulin.
> 
> BU factor 2,4 U / 12g   ===>   IC = 12g / 2,4 U = 5,0 g/U
> 
> Conversion tables are available online i.e. [here](https://www.mylife-diabetescare.com/files/media/03_Documents/11_Software/FAS/SOF_FAS_App_KI-Verha%CC%88ltnis_MSTR-DE-AT-CH.pdf).

### Вплив

A **lower / stronger ICR** means less food per unit, i.e. you are getting more insulin for a fixed amount of carbs. Can also be called ‘more aggressive’. If your IC is too strong, you are getting too much insulin, this can lead to low **BGs**.

A **higher / weaker ICR** = more food per unit, i.e. you are getting less insulin for a fixed amount of carbs. Can also be called ‘less aggressive’. If your IC is too weak, you are getting less insulin than you need, this can lead to high **BGs**.

### Як налаштувати

The **figure below** shows an example of a user's **ICR** and how it can be set in an **AAPS Profile**. When entering these values, we enter the final part of the ratio, so an insulin-to-carb ratio of 1:3.5 is entered simply as “3.5”.

![Profile ICR](../images/Profile_ICR.png)

If after a meal has been digested and the **IOB** has returned to zero, your **BG** remains higher than before food, chances are your **ICR** is too weak (_i.e._ the number is too high and should be gradually lowered). Conversely, if your **BG** is lower than before food, **ICR** is too strong (_i.e._ the number is too small and should be gradually increased).

Assuming your basal rates are correct, you can test by checking if **IOB** is zero and that you are in-range, eating exactly known carbs, and take an estimated amount of insulin based on current insulin to carb ratio. Best is to eat food you normally eat at that time of day and count its carbs precisely.

## Common questions related to the Profile

```{contents} Common questions related to the Profile
:depth: 1
:local: true
```

### About the importance of getting your profile right

**Чому варто намагатися правильно налаштувати профіль? Хіба петля не може просто подбати про це сама?**

A hybrid closed loop _can_ attempt to make insulin delivery adjustments to minimize poor glycemic control that results from having incorrect **Profile** values. It can do this, for example, by withholding insulin delivery if you are going to hypo. However, you can achieve much better glycemic control if your **Profile** settings are already as close as possible to what your body needs. Це одна з причин, чому **AAPS** використовує поетапні завдання, щоб перейти від відкритої петлі до гібридної закритої петлі. Крім того, іноді вам доведеться розімкнути петлю (розігрів сенсора, збій сенсора _тощо_), часом посеред ночі, і для таких ситуацій ваші налаштування мають бути правильними.

If you are starting with **AAPS** after using a different open or closed-loop pumping system, you will already have a reasonable idea of what values to use for basal rates (**BR**), insulin sensitivity factors (**ISF**) and insulin-to-carb ratios (**ICR**).

Якщо ви переходите з ін'єкцій (MDI) на **AAPS**, спочатку варто прочитати, як переходити з MDI на помпу, і ретельно спланувати та зробити цей перехід разом з вашою діабетичною командою. Дуже корисні книги [«Pumping insulin»](https://amzn.eu/d/iaCsFa2) Джона Волша (John Walsh) і Рут Робертс (Ruth Roberts) та [«Think like a Pancreas»](https://amzn.eu/d/iVU0RGe) Гері Шайнера (Gary Scheiner).

### What causes high postprandial peaks in closed loop?
First of all, check your basal rate and make a no-carb basal rate test. If it is correct and your **BG** is falling to reach your target after carbs are fully absorbed, try to set an 'eating soon' temp target in **AAPS** some time before the meal or think about an appropriate pre-bolus time with your endocrinologist. <br/> If your **BG** is too high after the meal and still too high after carbs are fully absorbed, consider decreasing your **ICR** with your endocrinologist. If your **BG** is too high while **COB** and too low after carbs are fully absorbed, think about increasing your **ICR** and an appropriate pre-bolus time with your endocrinologist.

### I'm stuck high and the loop does not bring me down
The possible reasons for **AAPS** not giving enough insulin are:
* **ISF** is not strong enough
* Basal rate might not be strong enough
* A security setting might kick in, such as **maxIOB**. Or **SMB** is disabled at this time, depending on your settings.
* Automation has been set up and has overridden **AAPS**.

See also [Tweaking the AAPS Profile](../GettingHelp/ProfileTuning.md).

### I have negative IOB, is this an issue ?
Negative **IOB** means the amount of absolute insulin (basal + bolus) in your body is less than the basal. It will cause **AAPS** to send more insulin as soon as the **BG** starts to rise, because it considers that insulin is missing, which can result in low **BG** later.

Here are some reasons why you may have negative IOB, and what action to take:
* a too strong basal: tweak your **Profile**
* too much bolus at the previous meal: tweak your **Profile** or check if you are bolusing at the right time.
* DIA set too short on your insulin type, resulting in insulin stacking: tweak it in [Manage → Insulin settings](#Config-Builder-insulin-dia)
* physical activity: next time, consider using a lower [Profile percentage](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) during activity to account for increased sensitivity.

## Manage your Profiles

```{contents} Operations that you can perform on your **Profiles** in **AAPS**
:depth: 1
:local: true
```
(your-aaps-profile-create-and-edit-profiles)=
### Create and edit Profiles

In **AAPS** v4 your profiles live on the **Manage** screen (bottom navigation) → **Profile**, shown as a swipeable card carousel with an action bar (**➕ Add**, **✏️ Edit**, **⧉ Clone**, **🗑️ Delete**, **▶ Activate**). For managing and activating a profile, see [Managing and activating profiles](#ProfileSwitch-manage-v4). Coming from **AAPS** v3, where profiles had their own tab? See [What changed in AAPS v4](#v4changes-manage).

Tapping **✏️ Edit** opens the editor. Set the profile **name** and **units**, then fill in the four schedules using the tabs:

- **IC** — insulin-to-carb ratio (g/U)
- **ISF** — insulin sensitivity factor
- **BAS** — basal rates
- **TARG** — target range

![The profile editor — IC / ISF / BAS / TARG tabs](../images/setup-wizard/Wizard-Profile-IC.png)

Each schedule is a list of **time blocks**: add a block, set its start time and value, then **Save**.

If you make any changes to your **Profile**, make sure you are editing the correct **Profile**: the card of the profile in use is marked **ACTIVE**, but the card selected on screen may be another one.

(your-aaps-profile-profile-from-scratch-for-a-kid)=
### Build a Profile from scratch for a kid

The [Profile Helper](#aaps-screens-profile-helper) (menu ☰ → **Profile helper**) may help you to create a profile for a child (up to 18 years).

**Important note:**

**Profile helper is intended to support you finding the initial profile for your kid. Even though it is based on data sets of two different hospitals always discuss with your medical team before using a new profile!**

Profile helper offers data sets from two different hospitals for children to find initial profile for your kid up to 18 years.

![Profile Helper Kids 1](../images/ProfileHelperKids1.png)

1. Make sure you are on the **Profile 1** tab.
2. In **Profile type**, make sure you have "Default profile" selected.
3. Adjust Default profile (based on hospital data set) by entering kids age and either TDD Total **or** weight.
4. Change to the **Profile 2** tab.
5. Press **Profile type** and select "DPV Default profile".
6. Adjust DPV Default profile (based on another hospital data set) by entering kids age, TDD Total and percentage of basal. Note that the DPV data set provides **basal rates** only, so IC and ISF are shown as zero for this profile.
7. Open the **Comparation** tab. Comparison of the two adjusted profiles will be displayed (see screenshot below).
8. If you want to start tweaking your profile based on one of these suggestions, use the **Clone** button at the bottom of the comparison.

![Profile Helper Kids 2](../images/ProfileHelperKids2.png)

### Switch Profile

See [Profile switch & Profile Percentage](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md).

(your-aaps-profile-clone-profile-switch)=
### Clone a Profile switch to a new Profile

![Profile Switch](../images/TreatmentsView4.png)

The [Treatments history](#aaps-screens-treatments) shows all past **Profile Switches**. When going to the **Profile switch** tab, you can use a past **Profile Switch** as a base to create a new **Profile**. In this case, timeshift and percentage will be applied to the new local profile. Use the **Clone** button shown on line **2**.

You can now go to the [Profile screen](#your-aaps-profile-create-and-edit-profiles) (**Manage → Profile**) to edit the newly created Profile.

(YourAapsProfile_Profile-backup)=
### Резервна копія профілю

Being a core setting of your looping system, your **Profiles** are highly sensitive and something you really don't want to lose.

* Your **Profiles** are stored in the **AAPS** database.
* When **NSClientV3** is set up (see [Synchronization](#SetupWizard-synchronization-with-the-reporting-server-and-more)), your **Profiles** are also uploaded to Nightscout automatically.
* Вони також входять до [експортованих налаштувань](../Maintenance/ExportImportSettings.md). Тому зберігайте резервну копію в надійному місці.

### Редагування профілів з Nightscout

If enabled, **Profile** changes made directly in Nightscout can be received in **AAPS**. The setting is called "**Receive profile store from NS**" and is part of the **Nightscout data acceptance** options (accepting data from Nightscout is turned off by default, see the [Client control step of the Setup Wizard](../SettingUpAaps/SetupWizard.md)); you can find it quickly with the **search bar** on the main screen. While client control is on, the setting is hidden and **AAPS** takes no profile changes from Nightscout ([hardened mode](#client-master-control-hardened-mode)); edit the profile on a paired client instead, or load it once with **Full sync**.

This can be helpful when about to make major changes to a more extensive **Profile**. У вебінтерфейсі їх зручніше вводити, _наприклад_, щоб вручну скопіювати дані з електронної таблиці.

To do this, however, it is important to clone the whole **database record** consisting of several profiles in the Nightscout editor (blue arrow on the screenshot below). Нові записи бази даних тоді матимуть поточну дату. After saving, the changed/new **Profile** can be activated in **AAPS** with a regular [Profile switch](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md).

![Клонування записів бази даних](../images/Nightscout_Profile_Editor.PNG)

(your-aaps-profile-compare-profiles)=
### Compare two Profiles

You can also use the [Profile Helper](#aaps-screens-profile-helper) (menu ☰ → **Profile helper**) to compare two different profiles or profile switches (percentage of one of your profiles used in a [profile switch](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) before).

![Profile Helper 1](../images/ProfileHelper1.png)

1. Make sure you are on the **Profile 1** tab.
2. In **Profile type**, select "Available profile" to choose between all stored **Profiles**.
3. Choose the **Profile** you want to compare from.
4. Change to the **Profile 2** tab.
5. In **Profile type**, select "Profile switch" to choose in the history of all your **Profile Switches**.
6. Choose the **Profile Switch** you want to compare to.
7. Open the **Comparation** tab. Comparison of the two profiles will be displayed (see screenshot below).

![Profile Helper 2](../images/ProfileHelper2.png)
