# תכונות OpenAPS

(Open-APS-features-autosens)=

## Autosens (זיהוי רגישות)

- Autosens is an algorithm which looks at blood glucose deviations (positive/negative/neutral).
- Autosens ינסה להעריך את הרגישות\תנגודת על סמך סטיות אלו.
- אלגוריתם oref ב-**OpenAPS** פועל באמצעות התחשבות בנתונים מ-24 ו-8 השעות האחרונות. הוא יבחר בנתון בו הרגישות גדולה יותר מבין חלונות הזמן הללו.
- In versions prior to **AAPS 2.7**, the user had to choose between 8 or 24 hours manually.
- From **AAPS 2.7** on Autosens in **AAPS** will switch between a 24 and 8 hours window for calculating sensitivity. It will pick whichever one is more sensitive. 
- אם משתמשים הגיעו מ-oref1, הם כנראה ישימו לב שהמערכת עשויה להיות פחות דינמית לשינויים, בגלל המשתנה של 24 או 8 שעות של רגישות.
- החלפת צינורית או שינוי פרופיל יאפס את יחס ה-Autosens בחזרה ל-100% (החלפת פרופיל באחוזים עם משך זמן לא יאפס את Autosens).
- Autosens מתאים את המינון הבזאלי ואת יחס התיקון-ISF (כלומר: מחקה את מה שעושה שינוי פרופיל).
- If continuously eating carbs over an extended period, Autosens will be less effective during that period as carbs are excluded from **BG** delta calculations.

(Open-APS-features-super-micro-bolus-smb)=

## סופר מיקרו בולוס (SMB)

**SMB**, the shortform of **Super micro bolus**, is an OpenAPS feature introduced from 2018 onwards, within the Oref1 algorithm. In contrast to **AMA**, **SMB** does not use temporary basal rates to control glucose levels, but mainly **small super micro boluses**. In situations where **AMA** would add 1.0 IU insulin using a temporary basal rate, **SMB** delivers several super micro boluses in small steps at **5 minute intervals**, e.g. 0.4 IU, 0.3 IU, 0.2 IU and 0.1 IU. במקביל (מטעמי בטיחות) המינון הבזאלי מוגדר ל-0 יח'\שעה לתקופה מסוימת כדי למנוע מנת יתר (**'zero-temping'**). This allows the system to adjust the blood glucose faster than with the temporary basal rate increase in **AMA**.

Thanks to SMB, it may be sufficient for meals containing only "slow" carbs to inform the system of the planned amount of carbohydrate and leave the rest to **AAPS**. עם זאת, זה עלול להוביל לשיאים גבוהים יותר לאחר הארוחה מכיוון שלא ניתן בולוס מראש. Or you can give, if necessary with pre-bolusing, a **start bolus**, which **only partly** covers the carbohydrates (e.g. 2/3 of the estimated amount) and let **SMB** deliver the rest of the insulin.

![SMBs on main graph](../images/SMBs.png)

SMBs are shown on the main graph with blue triangles. Tap on the triangle to see how much insulin was delivered, or use the [Treatments tab](#aaps-screens-treatments).

**SMB's** features contain some safety mechanisms:

1. **Largest single SMB dose**  
    The largest single SMB dose can only be the smallest value of:
    
    - ערך המתאים למינון הבזאלי הנוכחי (כפי שמתכוונן על ידי Autosens) למשך הזמן שנקבע ב"דקות בסיס מקסימליות להגבלת SMB", למשל מינון בזאלי למשך 30 הדקות הבאות, או
    - מחצית מכמות האינסולין הנדרשת ברגע זה, או
    - החלק הנותר של ערך אינסולין הפעיל המרבי בהגדרות.

2. **Low temp basal rates**  
    Low temporary basal rates (called 'low temps') or temporary basal rates at 0 U/h (called 'zero-temps') are activated more in **SMB**. This is by design for safety reasons and has no negative effects if the **Profile** is set correctly. On the main graph, the IOB curve (yellow thin line) is more meaningful than the course of the temporary basal rates.

3. **Un-Announced Meals**  
    Additional calculations to predict the course of glucose, e.g. by **UAM** (un-announced meals). Even without manual carbohydrate input from the user, **UAM** can automatically detect a significant increase in glucose levels due to meals, adrenaline or other influences and try to adjust this with **SMB**. ליתר בטחון זה עובד גם הפוך ויכול לעצור את ה-SMB מוקדם יותר אם מתרחשת ירידה מהירה באופן בלתי צפוי בסוכר שבדם. זו הסיבה לכך שעל UAM להיות תמיד מופעל עם SMB.

**You must have started [objective 9](#objectives-objective9) to use SMB.**

See also :

- [OpenAPS documentation for SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb).
- [OpenAPS documentation for oref1 SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)
- [Tim's info on SMB](https://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/).

The settings for OpenAPS SMB are described below.

(Open-APS-features-max-u-h-a-temp-basal-can-be-set-to)=

### Max U/h a temp basal can be set to

הגדרת בטיחות זו קובעת את המינון הבזאלי הזמני המרבי שמשאבת האינסולין יכולה לספק. It is also known as **max-basal**.

The value is measured in units per hour (U/h). מומלץ להגדיר ערך סביר. A good recommendation for setting this parameter is:

    max-basal = highest basal rate x 4
    

For example, if the highest basal rate in your profile was 0.5 U/h you could multiply that by 4 to get a value of 2 U/h.

**AAPS** limits this value as a 'hard limit' according to [Preferences > Treatments safety > Patient Type](#preferences-patient-type). The hard limits are as follows:

- ילד\ה: 2
- מתבגר\ת: 5
- מבוגר\ת: 10
- מבוגר\ת עם תנגודת אינסולין גבוהה: 12
- הריון: 25

*See also [overview of hard-coded limits](#overview-of-hard-coded-limits).*

(Open-APS-features-maximum-total-iob-openaps-cant-go-over)=

### Maximum total IOB OpenAPS can’t go over

This value determines the maximum **Insulin on Board** (basal and bolus IOB) that **AAPS** will remain under while running in closed loop mode. It is also known as **maxIOB**.

אם ה-IOB הנוכחי (למשל לאחר בולוס ארוחה) הוא מעל הערך maxIOB המוגדר, הלופ יפסיק את מתן האינסולין עד שהאינסולין הפעיל יירד אל מתחת לערך ה-IOB המקסימלי.

A good start for setting this parameter is:

    אינסולין פעיל מרבי = בולוס ארוחה ממוצע + מינון בזאלי מקסימלי 3X
    

Be careful and patient when adjusting your **max-IOB**. ה-Max-IOB שונה עבור כל אחד ותלוי גם במינון היומי הממוצע (TDD).

**AAPS** limits this value as a 'hard limit' according to [Preferences > Treatments safety > Patient Type](#preferences-patient-type). The hard limits are as follows:

- ילד\ה: 3
- מתבגר\ת: 7
- מבוגר\ת: 12
- מבוגר\ת עם תנגודת אינסולין גבוהה: 25
- הריון: 40

*See also [overview of hard-coded limits](#overview-of-hard-coded-limits).*

Note : When using **SMB**, the **max-IOB** is calculated differently than in AMA. In **AMA**, maxIOB is a safety-parameter for basal **IOB**, while in SMB-mode, it also includes bolus IOB.

ראו גם [תיעוד OpenAPS בנושא SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb).

### Enable Autosens

[Autosens](#autosens) looks at blood glucose deviations (positive/negative/neutral). It will try and figure out how sensitive/resistant you are based on these deviations and adjust basal rate and ISF based on these deviations.

### אפשר SMB

אפשרו הגדרה זו כדי להשמש ב-SMB. If disabled, no **SMBs** will be given.

(Open-APS-features-enable-smb-with-high-temp-targets)=

### הפעלת SMB עם ערכי מטרה גבוהים

If this setting is enabled, **SMBs** will still be delivered even if the user has selected a high **Temp Target** (defined as anything above 100mg/dL or 5.6mmol/l, regardless of **Profile** target). אפשרות זו נועדה להשבתת SMB כאשר היא מושבתת. For example, if this option is disabled, **SMBs** can be disabled by setting a **Temp Target** above 100mg/dL or 5.6mmol/l. This option will also disable **SMBs** regardless of what other condition is trying to enable SMB.

If this setting is enabled, **SMB** will only be enabled with a high temp target if **Enable SMB with temp targets** is also enabled.

(Open-APS-features-enable-smb-always)=

### הפעלת SMB תמיד

If this setting is enabled, SMB is enabled always enabled(independent of COB, temp targets or boluses). בהפעלת הגדרה זו, שאר הגדרות ההפעלה שלהלן לא ישפיעו. However, if **Enable SMB with high temp targets** is disabled and a high temp target is set, SMBs will be disabled.

מטעמי בטיחות, אפשרות זו מיועדת רק למקורות נתוני סוכר עם סינון איכותי לנתונים רועשים.

- Currently, it is only available with a Dexcom G5 or G6, if using the [Build your own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) or “[native mode](#smoothing-xdrip-dexcom-g6)” in xDrip+. If a BG value has too large of a deviation, the G5/G6 doesn’t send it and waits for the next value 5 minutes later.
- For other CGM/FGM like Freestyle Libre, **SMB always** is deactivated until there is a better noise smoothing plugin. 
- You can find more [here](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### הפעלת SMB עם פחמ' פעילות

אם הגדרה זו מופעלת, SMB מופעל כאשר ערך הפחמימות הפעילות גדול מ-0.

### הפעלת SMB עם ערכי מטרה זמניים

אם הגדרה זו מופעלת, SMB מופעל כאשר מוגדר ערך מטרה זמני כלשהו (אכילה בקרוב, פעילות, היפו, מותאם אישית). If this setting is enabled but **Enable SMB with high temp targets** is disabled, SMB will be enabled when a low temp target is set (below 100mg/dL or 5.6mmol/l) but disabled when a high temp target is set.

### הפעלת SMB אחרי פחמימות

אם מופעל, SMB יישאר פעיל במשך 6 שעות לאחר שהוכרזו פחמימות, אפילו אם הפחמימות הפעילות ירדו ל-0.

מטעמי בטיחות, אפשרות זו מיועדת רק למקורות נתוני סוכר עם סינון איכותי לנתונים רועשים.

- Currently, it is only available with a Dexcom G5 or G6, if using the [Build your own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) or “[native mode](#smoothing-xdrip-dexcom-g6)” in xDrip+. If a BG value has too large of a deviation, the G5/G6 doesn’t send it and waits for the next value 5 minutes later.
- For other CGM/FGM like Freestyle Libre, **SMB always** is deactivated until there is a better noise smoothing plugin.
- You can find more [here](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### תדירות מתן SMB (דקות)

אפשרות זו מגבילה את תדירות ה-SMB. ערך זה קובע את הזמן המינימלי בין SMB. שימו לב שהחישוב של הלולאה קורה בכל פעם שמתקבל ערך סוכר (בדרך כלל כל 5 דקות). יש להחסיר 2 דקות כדי לתת ללולאה זמן נוסף להשלמה. E.g. if you want SMB to be given every loop run, set this to 3 minutes.

ערך ברירת המחדל: 3 דקות.

(Open-APS-features-max-minutes-of-basal-to-limit-smb-to)=

### מקסימום הדקות של בזאלי אליו SMB מוגבל

זוהי מגבלה בטיחותית חשובה. ערך זה קובע כמה SMB ניתן לתת בהתבסס על כמות האינסולין הבזאלי בזמן נתון, כאשר הוא מכוסה על ידי פחמימות פעילות.

Making this value larger allows the SMB to be more aggressive. You should start with the default value of 30 minutes. After some experience, increase the value in 15 minutes increments and observe the effects over multiple meals.

It is recommended not to set the value higher than 90 minutes, as this would lead to a point where the algorithm might not be able to accommodate a decreasing BG with 0 U/h basal ('zero-temp'). You should also set alarms, especially if you are still testing new settings, which will warn you well before a hypo.

ערך ברירת המחדל: 30 דקות.

### הפעלת UAM

עם אפשרות זו מופעלת, אלגוריתם ה-SMB יכול לזהות ארוחות לא מוצהרות. This is helpful if you forget to tell **AAPS** about your carbs or estimate your carbs wrong and the amount of entered carbs is wrong or if a meal with lots of fat and protein has a longer duration than expected. Without any carb entry, UAM can recognize fast glucose increase caused by carbs, adrenaline, etc., and tries to adjust it with SMBs. זה עובד גם במקרה ההפוך: אם יש ירידה מהירה בסוכר, UAM יכול לעצור SMB מוקדם.

**לכן, UAM תמיד צריך להיות מופעל בעת שימוש ב-SMB.**

### רגישות מעלה את ערך המטרה

If this option is enabled, the sensitivity detection (autosens) can raise the target when sensitivity is detected (below 100%). In this case your target will be raised by the percentage of the detected sensitivity.

If the target is modified due to sensitivity detection, it will be displayed with a green background on your home screen.

![Target modified by autosens](../images/Home2020_DynamicTargetAdjustment.png)

### תנגודת מורידה את ערך המטרה

If this option is enabled, the sensitivity detection (autosens) can lower the target when resistance is detected (above 100%). In this case your target will be lowered by the percentage of the detected resistance.

### ערך מטרה זמני גבוה מעלה את הרגישות

אם אפשרות זו מופעלת, הרגישות לאינסולין תוגבר כל עוד יש ערך מטרה זמני מעל 100 mg/dl. המשמעות היא שהרגישות-ISF תעלה בעוד שיחס הפחמימות-IC והמינון הבזאלי ירדו. This will effectively make **AAPS** less aggressive when you set a high temp target.

### ערך מטרה זמני נמוך מוריד את הרגישות

אם אפשרות זו מופעלת, הרגישות לאינסולין תפחת כשערך מטרה זמני מעל 100 mg/dl. המשמעות היא שהרגישות-ISF תפחת בעוד שיחס הפחמימות-IC והמינון הבזאלי יעלו. This will effectively make **AAPS** more aggressive when you set a low temp target.

(key-aaps-features-minimal-carbs-required-for-suggestion)=

### Minimal carbs required for suggestion

Minimum grams of carbs to display a carbs suggestion alert. Eating of additional carbs will be suggested when the reference design detects that it requires carbs. In this case you will receive a notification which can be snoozed for 5, 15 or 30 minutes.

הודעות של דרישה לפחמימות יכולות להישלח ל-Nightscout אם תרצו, ובמקרה זה תוצג ותשודר הודעה.

In any case, the required carbs will be displayed in the COB section on your home screen.

![Display carbs required on home screen](../images/Pref2020_CarbsRequired.png)

### הגדרות מתקדמות

You can read more here : [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Always use short average delta instead of simple data** If you enable this feature, **AAPS** uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps **AAPS** to be steadier with noisy data sources like xDrip+ and Libre.

**מכפלת בטיחות בזאלי יומי מרבי/0> היא מגבלת בטיחות חשובה. הגדרת ברירת המחדל (שלא סביר שתצטרכו לשנות) היא 3. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump and/or profile. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then **AAPS** can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).</p> 

ערך ברירת המחדל: 3 (לא צריך לשנות אלא אם כן אתם באמת צריכים ויודעים מה אתם עושים)

**מכפלת בטיחות בזאלי נוכחי/0> היא מגבלת בטיחות חשובה. הגדרת ברירת המחדל (שלא סביר שתצטרכו לשנות) היא 4. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump and/or profile.</p> 

ערך ברירת המחדל: 4 (לא צריך לשנות אלא אם כן אתם באמת צריכים ויודעים מה אתם עושים)

* * *

(Open-APS-features-advanced-meal-assist-ama)=

## סיוע ארוחה מתקדם (AMA)

AMA - "סיוע ארוחה מתקדם" היא תכונת OpenAPS משנת 2017 (oref0). המערכת יכולה להפעיל מינון בזאלי זמני גבוה מהר לאחר בולוס ארוחה אם מזינים פחמימות בצורה אמינה.

תוכלו למצוא מידע נוסף ב[תיעוד OpenAPS](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### ניתן להגדיר יח'\שעה מקסימלי של בזאלי זמני (OpenAPS max-basal)

This safety setting helps **AAPS** from ever being capable of giving a dangerously high basal rate and limits the temp basal rate to x U/h. מומלץ להגדיר ערך סביר. ההמלצה היא לבחור את המינון הבזאלי הגבוה ביותר שיש בפרופיל בשעה כלשהי ביממה ולהכפיל אותו ב-4 ולכל הפחות ב-3. כך שלדוגמה, אם המינון הבזאלי הגבוה ביותר בפרופיל שלך הוא 1.0 יח'\שעה, אפשר להכפילו ב-4 כדי לקבל ערך של 4 יח'\שעה ולהגדיר את המכפלה כ-4.

You cannot choose any value: For safety reason, there is a 'hard limit', which depends on the patient age. 'המגבלה הקשיחה' של maxIOB נמוכה יותר ב-AMA מאשר ב-SMB. עבור ילדים, הערך הוא הנמוך ביותר ואילו עבור מבוגרים עם תנגודת גבוהה לאינסולין, הוא הגדול ביותר.

The hardcoded parameters in **AAPS** are:

- ילד\ה: 2
- מתבגר\ת: 5
- מבוגר\ת: 10
- מבוגר\ת עם תנגודת אינסולין גבוהה: 12
- הריון: 25

*See also [overview of hard-coded limits](#overview-of-hard-coded-limits).*

### מינון אינסולין פעיל מרבי ממנו OpenAPS לא יחרוג (maxIOB)

This parameter limits the maximum of basal IOB where **AAPS** still works. אם האינסולין הפעיל גבוה יותר, הלופ מפסיק להזריק אינסולין בזאלי נוסף עד שהאינסולין הפעיל נמצא מתחת למגבלה.

The default value is 2, but you should rise this parameter slowly to see how much it affects you and which value fits best. ה-Max-IOB שונה עבור כל אחד ותלוי גם במינון היומי הממוצע (TDD). מטעמי בטיחות, קיימת מגבלה שתלויה בקטגוריית גיל המטופל. 'המגבלה הקשיחה' של maxIOB נמוכה יותר ב-AMA מאשר ב-SMB.

- ילד\ה: 3
- מתבגר\ת: 5
- מבוגר\ת: 7
- מבוגר\ת עם תנגודת אינסולין גבוהה: 12
- הריון: 25

*See also [overview of hard-coded limits](#overview-of-hard-coded-limits).*

### הפעלת חישוב רגישות אוטומטי (Autosens)

Here, you can choose, if you want to use the [sensitivity detection](../DailyLifeWithAaps/SensitivityDetectionAndCob.md) autosens or not.

### וויסות ערכי מטרה ע"י Autosens

אם אפשרות זו מופעלת, autosens יכול להתאים גם ערכי מטרה (לצד הבזאלי וה-ISF). This lets **AAPS** work more 'aggressive' or not. ערך המטרה האמיתי עשוי להיות מושג מהר יותר תוך שימוש ב-Autosens.

### הגדרות מתקדמות

- Normally you do not have to change the settings in this dialogue!
- If you want to change them anyway make sure to read about details in [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#) and to understand what you are doing.

**Always use short average delta instead of simple data** If you enable this feature, **AAPS** uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps **AAPS** to work more steady with noisy data sources like xDrip+ and Libre.

**מכפלת בטיחות בזאלי יומי מרבי/0> היא מגבלת בטיחות חשובה. הגדרת ברירת המחדל (שלא סביר שתצטרכו לשנות) היא 3. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then **AAPS** can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).</p> 

ערך ברירת המחדל: 3 (לא צריך לשנות אלא אם כן אתם באמת צריכים ויודעים מה אתם עושים)

**מכפלת בטיחות בזאלי נוכחי/0> היא מגבלת בטיחות חשובה. הגדרת ברירת המחדל (שלא סביר שתצטרכו לשנות) היא 4. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump.</p> 

ערך ברירת המחדל: 4 (לא צריך לשנות אלא אם כן אתם באמת צריכים ויודעים מה אתם עושים)

**נמנום בולוס** התכונה "נמנום בולוס" פועלת לאחר בולוס ארוחה. **AAPS** doesn’t set low temporary basal rates after a meal in the period of the DIA divided by the “bolus snooze”-parameter. ערך ברירת המחדל הוא 2. כלומר עם DIA של 5 שעות, "נודניק הבולוס" יהיה באורך של 2.5 שעות (=5/2).

ערך ברירת מחדל: 2

* * *

(Open-APS-features-overview-of-hard-coded-limits)=

## סקירה כללית של מגבלות קשיחות

|                             | ילד\ה | מתבגר\ת | מבוגר\ת | מבוגר\ת עם תנגודת אינסולין גבוהה | הריון |
| --------------------------- | ------ | -------- | -------- | --------------------------------- | ----- |
| בולוס מקס'                  | 5.0    | 10.0     | 17.0     | 25.0                              | 60.0  |
| משך פעילות אינסולין מינימלי | 5.0    | 5.0      | 5.0      | 5.0                               | 5.0   |
| משך פעילות אינסולין מקסימלי | 9.0    | 9.0      | 9.0      | 9.0                               | 10.0  |
| יחס פחמ' מינימלי            | 2.0    | 2.0      | 2.0      | 2.0                               | 0.3   |
| יחס פחמ' מקסימלי            | 100.0  | 100.0    | 100.0    | 100.0                             | 100.0 |
| אינסולין פעיל מקסימלי-AMA   | 3.0    | 5.0      | 7.0      | 12.0                              | 25.0  |
| אינסולין פעיל מקסימלי-SMB   | 7.0    | 13.0     | 22.0     | 30.0                              | 70.0  |
| בזאלי מקסימלי               | 2.0    | 5.0      | 10.0     | 12.0                              | 25.0  |