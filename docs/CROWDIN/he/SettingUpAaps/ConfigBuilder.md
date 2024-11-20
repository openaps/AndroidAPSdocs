# בונה התצורה

Depending on your settings you can open Config Builder through a tab at the top of **AAPS**' screen or through the hamburger menu.

![Open config builder](../images/ConfBuild_Open_AAPS30.png)

The **Config Builder** is the tab where you turn the modular features on and off. In the picture below, the boxes on the left-hand side (A) allow you to select which modules you want activated, the boxes on the right-hand side (C) allow you to view these as a tab (E) in **AAPS**. In case the right box is not activated, you can reach the function by using the hamburger menu (D) on the top left of the screen. See [Tab or hamburger menu](#tab-or-hamburger-menu) below.

When there are additional settings available within the module, you can click on the cog wheel (B) which will take you to the specific settings within preferences.

![Config Builder boxes and cog wheel](../images/ConfBuild_ConfigBuilder_AAPS30.png)

(Config-Builder-tab-or-hamburger-menu)=

## לשונית או תפריט המבורגר

באמצעות תיבת הסימון מתחת סמל העין תוכלו לבחור כיצד לפתוח את המסך של אותה תכונה.

![לשונית או תפריט המבורגר](../images/ConfBuild_TabOrHH_AAPS30.png)

```{contents}
:backlinks: entry
:depth: 2
```

## Profile

This module can not be disabled as it is a core part of **AAPS**.

* See [Your AAPS Profile](../SettingUpAaps/YourAapsProfile.md) for a basic understanding of what goes inside your **Profile**.
* See [AAPS Screens > Profile](#aaps-screens-profile) for more information about managing your **Profiles**.

(Config-Builder-insulin)=

## אינסולין

![Insulin type](../images/ConfBuild_Insulin_AAPS30.png)

Select the type of insulin you are using.

More information to understand the Insulin Profile as shown in **AAPS** [here](#AapsScreens-insulin-profile).

### הבדלים בסוגי אינסולין שונים

* לאפשרויות 'Oref אינסולין מהיר', 'Oref אינסולין אולטרה מהיר', 'Oref שיא חופשי' ו-'Lyumjev' צורת עקום פעולה אקספוננציאלי.
* באינסולין מסוג Rapid-Acting, Ultra-Rapid, ו-Lyumjev, ה-DIA הוא הנתון היחיד שתוכלו להגדיר בעצמכם. משך הזמן עד השיא הינו קבוע. 
* שיא חופשי מאפשר לכם להגדיר הן את ה-DIA והן את משך הזמן עד השיא, ומומלץ לשימוש רק על ידי משתמשים מתקדמים המבינים את משמעות ההשלכות של ההגדרות הללו. 
* The [insulin curve graph](#AapsScreens-insulin-profile) helps you to understand the different curves.

#### Oref אינסולין מהיר

![Insulin type Rapid-Acting Oref](../images/ConfBuild_Insulin_RAO.png)

* לשימוש עם Humalog, Novolog ,Novorapid
* DIA =לפחות 5 שעות
* שיא = 75 דקות לאחר ההזרקה (קבוע, לא ניתן לשינוי)

#### Oref אינסולין אולטרה מהיר

![Insulin type Ultra-Rapid Oref](../images/ConfBuild_Insulin_URO.png)

* מומלץ עבור Fiasp
* DIA =לפחות 5 שעות
* שיא = 55 דקות לאחר ההזרקה (קבוע, לא ניתן לשינוי)

(Config-Builder-lyumjev)=

#### Lyumjev

![Insulin type Lyumjev](../images/ConfBuild_Insulin_L.png)

* פרופיל אינסולין במיוחד ל-Lyumjev
* DIA =לפחות 5 שעות
* שיא = 45 דקות לאחר ההזרקה (קבוע, לא ניתן לשינוי)

#### Oref שיא חופשי

![Insulin type Free Peak Oref](../images/ConfBuild_Insulin_FPO.png)

* בפרופיל זה תוכלו להגדיר לבד את שיא פעילות האינסולין. לשם כך לחצו על גלגל השיניים כדי להיכנס להגדרות המתקדמות.
* משך הפעילות DIA מוגדר אוטומטית כ-5 שעות אם לא הוגדר גבוה יותר בפרופיל.
* פרופיל זה מומלץ למי שמשתמש באינסולין שאינו נתמך בלופ או שמשתמש בערבוב של סוגי אינסולין.

(Config-Builder-bg-source)=

## מקור ערכי הסוכר

Select the blood glucose source you are using. See [BG Source](../Getting-Started/CompatiblesCgms.md) page for more setup information.

![Config Builder BG source](../images/ConfBuild_BG.png)

* [xDrip+](../CompatibleCgms/xDrip.md)
* [NSClient BG](../CompatibleCgms/CgmNightscoutUpload.md) - only if you know what you are doing, see [BG Source](../Getting-Started/CompatiblesCgms.md).
* [Minimed 640G](../CompatibleCgms/MM640g.md)
* [Glimp](#libre1-using-glimp) - only version 4.15.57 and newer are supported
* [Build Your Own Dexcom App (BYODA)](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app).
* [Poctech](../CompatibleCgms/PocTech.md)
* [Tomato App](#libre1-using-tomato) for MiaoMiao device
* [Glunovo App](https://infinovo.com/) לשימוש עם חיישן Glunovo
* הפקת נתוני גלוקוז אקראיים (מצב הדגמה בלבד)

## Smoothing

![Smoothing](../images/ConfBuild_Smoothing.png)

See [Smoothing blood glucose data](../CompatibleCgms/SmoothingBloodGlucoseData.md).

(Config-Builder-pump)=

## Pump

בחרו את המשאבה בה אתם משתמשים. See [Compatible pumps](../Getting-Started/CompatiblePumps.md) page for more setup information.

![Config Builder Pump selection](../images/ConfBuild_Pump_AAPS32.png)

* [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)
* Dana R של השוק הפנים קוראני
* Dana Rv2 (Dana R עם שדרוג גרסת קושחה לא רשמי)
* [Dana-i / RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)
* [Accu Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)
* Accu Chek Combo 
  * [Driver using Ruffy](../CompatiblePumps/Accu-Chek-Combo-Pump.md) (requires ruffy installation)
  * [Driver with no additional requirement](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md), added in [AAPS v.3.2](#version3200)
* Omnipod for [Omnipod Eros](../CompatiblePumps/OmnipodEros.md)
* Dash for [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md)
* [Medtronic](../CompatiblePumps/MedtronicPump.md)
* [Diaconn G8](../CompatiblePumps/DiaconnG8.md)
* [EOPatch2](../CompatiblePumps/EOPatch2.md)
* [Medtrum](../CompatiblePumps/MedtrumNano.md)
* Virtual pump: open loop - **AAPS** suggestions only 
  * as you make you first steps with **AAPS**, during the first [objectives](../SettingUpAaps/CompletingTheObjectives.md)
  * for pump which doesn't have any driver yet

## זיהוי רגישות

בחרו את סוג זיהוי הרגישות. For more details of different designs please [read on here](../DailyLifeWithAaps/SensitivityDetectionAndCob.md). פונקציה זו תנתח את המידע ההיסטורי בשעת מעשה ותבצע התאמות במידה ותזהה כי הנכם מגיבים לאינסולין ברגישות יתר מהרגיל (או להיפך, אינכם מגיבים מספיק). מידע נוסף על אלגוריתם הרגישות ניתן למצוא ב[מסמכי OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

You can view your sensitivity on the homescreen in an [additional graph](#AapsScreens-section-g-additional-graphs). תוכלו לראות את רמת הרגישות שלכם בעמוד הבית, על ידי בחירה ברגישות ומעקב אחרי העקום הלבן בגרף. Note, you need to be in [Objective 8](#objectives-objective8) in order to let Sensitivity Detection/[Autosens](#Open-APS-features-autosens) automatically adjust the amount of insulin delivered. עד שתגיעו לשלב זה במשימות, אחוזי ה-Autosens והעקום הלבן בגרף מוצגים כמידע בלבד.

### הגדרות ספיגה

If you use Oref1 with **SMB** you must change **min_5m_carbimpact** to 8. The value is only used during gaps in **CGM** readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause **AAPS** to decay COB. At times when [carb absorption](../DailyLifeWithAaps/CobCalculation.md) can't be dynamically worked out based on your blood's reactions it inserts a default decay to your carbs. למעשה, זהו אמצעי אל כשל.

(Config-Builder-aps)=

## APS

בחר את אלגוריתם ה-APS הרצוי להתאמות טיפוליות. ניתן לצפות בפרטי הפעילות של האלגוריתם הנבחר בלשונית ה-OpenASP(OAPS).

* OpenAPS AMA 
  * Advanced Meal Assist: older algorithm not recommended anymore.
  * In simple terms, the benefits are after you give yourself a meal bolus, the system can high-temp more quickly IF you enter carbs reliably.
* [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb) 
  * Super Micro Bolus: most recent algorithm recommended for all users.
  * In contrast to AMA, SMB does not use temporary basal rates to control glucose levels, but mainly small **Super Micro Boluses**.
  * Note : It is recommended to use this algorithm from the beginning, even though you will not actually get SMBs delivered until [Objective 9](#objectives-objective9).

If switching from AMA to SMB algorithm, *min_5m_carbimpact* must be changed manually to **8** (default value for SMB) in [Preferences > Sensitivity detection > Sensitivity Oref1 settings](../SettingUpAaps/Preferences.md).

## לולאה

This module should not be disabled as it is a core part of **AAPS**.

## Constraints

### Objectives

**AAPS** has a learning program (a series of objectives) that you have to fulfill step by step. היא תדריך אותכם בבטחה במהלך הקמת הלולאה הסגורה. היא מבטיחה שאתם תגדירו הכל כראוי ושאתם מבינים מה היא עושה. זוהי הדרך היחידה שלכם לבטוח בפעילותה.

See [Objectives](../SettingUpAaps/CompletingTheObjectives.md) page for more information.

## Synchronization

In this section, you can choose if/where you want **AAPS** to send your data to.

### NSClient or NSClientV3

Can be used as a [reporting server](../SettingUpAaps/SettingUpTheReportingServer.md) and/or for [remote monitoring](../RemoteFeatures/RemoteMonitoring.md), [remote control](../RemoteFeatures/RemoteControl.md).

See [Synchronization with the reporting server](#SetupWizard-synchronization-with-the-reporting-server-and-more) to help you choose between NSClient (v1) and NSClientV3.

### Tidepool

Can be used as a [reporting server](../SettingUpAaps/SettingUpTheReportingServer.md).

See [Tidepool](../SettingUpAaps/Tidepool.md).

### xDrip

Used to **send** data such as treatments to xDrip+.

### Open Humans

See [Open Humans](../SupportingAaps/OpenHumans.md).

### Wear

Monitor and control **AAPS** using your Android WearOS watch (see [page Watchfaces](../WearOS/WearOsSmartwatch.md)).

### Samsung Tizen

Broadcast data to Samsung's G-Watch Wear App (Tizen OS).

### Garmin

Connection to Garmin device (Fenix, Edge...)

## טיפולים

בלשונית טיפולים, תוכלו לראות את הטיפולים שהועלו לנייטסקאוט. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the [carbs button on the home screen](#screens-bolus-carbs).

## General

### סקירה כללית

This is the [main screen](#AapsScreens-the-homescreen) of **AAPS** and can not be disabled.

#### הצגת שדות הערות בתיבות דו-שיח של טיפול

בחרו אם ברצונכם לכתוב בשדה הערות בעת הזנת טיפולים.

#### אורות חיווי

Choose if you want to have [status lights](#Preferences-status-lights) on overview for cannula age, insulin age, sensor age, battery age, reservoir level or battery level. כאשר מגיעה רמת האזהרה, צבע נורית המצב יעבור לצהוב. גיל קריטי יוצג באדום.

#### הגדרות מתקדמות

**ספק את חלק זה מתוצאת אשף הבולוס[%]**: בעת שימוש ב-SMB, אנשים רבים אינם מזריקים את כל האינסולין הדרוש בבת אחת, אלא רק חלק ממנו (למשל 75%) ונותנים ל-SMB עם UAM (זיהוי ארוחות לא מוכרזות) לעשות את השאר. In this setting, you can choose a default value for the percentage the bolus wizard should calculate with. If this setting is 75 % and you had to bolus 10u, the bolus wizard will propose a meal bolus of only 7.5 units.

**Enable super bolus functionality in wizard** (It is different from *super micro bolus*!): Use with caution and do not enable until you learn what it really does. בעיקרון, המינון הבזאלי לשעתיים הקרובות מתווסף לבולוס ומופעל מינון בזאלי זמני 0 למשך שעתיים. **AAPS looping functions will be disabled - so use with care! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](#Open-APS-features-max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

(Config-Builder-actions)=

### פעולות

A tab offering multiple buttons to take [actions](#screens-action-tab) in **AAPS**.

### אוטומציה

A tab for managing your [Automations](../DailyLifeWithAaps/Automations.md), starting at [Objective 10](#objectives-objective10).

(Config-Builder-sms-communicator)=

### תקשורת SMS

Allows remote caregivers to control some **AAPS** features via SMS, see [SMS Commands](../RemoteFeatures/SMSCommands.md) for more setup information.

### מזון

Displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the **AAPS** calculator. (View only)

(Config-Builder-wear)=

### Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../WearOS/WearOsSmartwatch.md)). Use settings (cog wheel) to define which variables should be considered when calculating bolus given though your watch (i.e. 15min trend, COB...).

אם אתם רוצים להזריק בולוס וכו' מהשעון, עליכם להפעיל את "שליטה משעון" בתוך "הגדרות Wear" בבונה התצורה.

![Wear settings](../images/ConfBuild_Wear.png)

Through Wear tab or hamburger menu (top left of screen, if tab is not displayed) you can

* לשלוח מחדש את כל הנתונים. שימושי אם השעון לא היה מחובר במשך זמן מה ואתם רוצים לעדכן את המידע שבשעון.
* לפתוח את ההגדרות בשעון ישירות מהטלפון שלך.

### תחזוקה

Access this tab to export / import settings.

### בונה התצורה

This current tab.