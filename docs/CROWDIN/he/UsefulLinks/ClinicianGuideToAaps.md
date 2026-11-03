# For Clinicians – A General Introduction and Guide to AAPS

```{note}
דף זה הוא מבוא כללי לצוותים רפואיים. הדף נבדק לאחרונה ביוני 2026. AAPS מתפתח כל הזמן, ולכן לפרטים המדויקים והעדכניים ביותר יש לעיין תמיד ב[תיעוד הראשי של AAPS](../index.md).
```

This page is intended for clinicians who have expressed interest in open source artificial pancreas technology such as AAPS, or for patients who want to share such information with their clinicians.

This guide has some high-level information about DIY closed looping and specifically how AAPS works. For more details on all of these topics, please view the [comprehensive AAPS documentation online](../index.md). If you have questions, please ask your patient for more details, or always feel free to reach out to the community with question. (למי שאינו משתמש ברשתות חברתיות (למשל [Twitter](https://twitter.com/kozakmilos) או Facebook), אפשר לשלוח דוא"ל אל developers@aaps.app). [You can also find some of the latest studies & outcomes related data here](https://openaps.org/outcomes/).

## The steps for building a DIY Closed Loop:

To start using AAPS, the following steps should be taken:

* Find a [compatible pump](../Getting-Started/CompatiblePumps.md), a [compatible Android device](../Getting-Started/Phones.md), and a [compatible CGM source](../Getting-Started/CompatiblesCgms.md).
* [Download the AAPS source code and build the software](../SettingUpAaps/BuildingAaps.md).
* [Configure the software to talk to their diabetes devices and specify settings and safety preferences](../SettingUpAaps/SetupWizard.md).

## How A DIY Closed Loop Works

Without a closed loop system, a person with diabetes gathers data from their pump and CGM, decides what to do, and takes action.

במתן אינסולין אוטומטי, המערכת עושה את אותו הדבר: היא אוספת נתונים מהמשאבה, מה־CGM ומכל מקום אחר שבו נרשם מידע (כגון Nightscout), משתמשת במידע לביצוע חישובים ולהחלטה כמה אינסולין נוסף או פחות נדרש (מעל או מתחת לקצב הבזאלי הבסיסי), ומשתמשת בבזאלי זמני לביצוע ההתאמות הנדרשות כדי לשמור על ערכי הסוכר בטווח היעד או להביא אותם אליו בסופו של דבר.

אם המכשיר שמפעיל את AAPS מתקלקל או יוצא מטווח המשאבה, לאחר סיום הבזאלי הזמני האחרון המשאבה חוזרת לפעול כמשאבה רגילה עם הקצבים הבזאליים שתוכנתו מראש.

## How data is gathered:

ב־AAPS, מכשיר Android מפעיל אפליקציה מיוחדת לביצוע החישובים, והמכשיר מתקשר באמצעות Bluetooth עם משאבה נתמכת. AAPS יכול לתקשר עם מכשירים אחרים ועם הענן דרך Wi-Fi או נתונים סלולריים, כדי לאסוף מידע נוסף ולדווח למטופל, למטפלים ולבני המשפחה מה הוא עושה ולמה.

The Android device needs to:

* communicate with the pump and read history - how much insulin has been delivered
* communicate with the CGM (either directly, or via the cloud) - to see what BGs are/have been doing

לאחר שהמכשיר אסף את הנתונים, האלגוריתם פועל ומקבל החלטות על סמך ההגדרות (ISF, יחס פחמימות, DIA, יעד וכו'). If required, it then issues commands to the pump to modify insulin delivery rate.

הוא אוסף גם מידע על בולוסים, צריכת פחמימות והתאמות של יעדים זמניים מהמשאבה או מ־Nightscout, כדי להשתמש בו בחישוב קצב מתן האינסולין.

## How does it know what to do?

The open source software is designed to make it easy for the device to do the work people used to do (in manual mode) to calculate how insulin delivery should be adjusted. תחילה הוא אוסף נתונים מכל המכשירים התומכים ומהענן, מכין את הנתונים ומבצע חישובים, מנבא כיצד צפויות להשתנות רמות הסוכר בשעות הקרובות בתרחישים שונים, ומחשב את ההתאמות הדרושות לשמירה על הסוכר בטווח היעד או להחזרתו אליו. Next it sends any necessary adjustments to the pump. לאחר מכן הוא קורא את הנתונים בחזרה, וחוזר על התהליך שוב ושוב.

As the most important input parameter is the blood glucose level coming from the CGM, it is important to have high-quality CGM data.

AAPS is designed to transparently track all input data it gathers, the resulting recommendation, and any action taken. It is therefore easy to answer the question at any time, “why is it doing X?” by reviewing the logs.

## Examples of AAPS algorithm decision making:

AAPS uses the same core algorithm and feature set as OpenAPS. The algorithm makes multiple predictions (based on settings, and the situation) representing different scenarios of what might happen in the future. In Nightscout, these are displayed as “purple lines”. AAPS uses different colors to separate these [prediction lines](#aaps-screens-prediction-lines). In the logs, it will describe which of these predictions and which time frame is driving the necessary actions.

### Here are examples of the purple prediction lines, and how they might differ:

![Purple prediction line examples](../images/Prediction_lines.jpg)

(clinicianguide-dosing-scenarios)=

### Here are examples of different time frames that influence the needed adjustments to insulin delivery:

### Scenario 1 - Zero Temp for safety

In this example, BG is rising in the near-term time frame; however, it is predicted to be low over a longer time frame. למעשה, הוא צפוי לרדת מתחת ליעד *וגם* מתחת לסף הבטיחות. מטעמי בטיחות וכדי למנוע את הערך הנמוך, AAPS יגדיר בזאלי זמני אפס (קצב בזאלי זמני של 0%) עד ש־eventualBG (בכל טווח זמן) יהיה מעל הסף.

![Dosing scenario 1](../images/Dosing_scenario_1.jpg)

### Scenario 2 - Zero temp for safety

בדוגמה זו, הסוכר בדם צפוי לרדת לרמה נמוכה בטווח הזמן הקרוב, אך צפוי בסופו של דבר להיות מעל היעד. However, because the near-term low is actually below the safety threshold, AAPS will issue a zero temp, until there is no longer any point of the prediction line that is below threshold.

![Dosing scenario 2](../images/Dosing_scenario_2.jpg)

### Scenario 3 - More insulin needed

בדוגמה זו, תחזית לטווח הזמן הקרוב מראה ירידה מתחת ליעד. However, it is not predicted to be below the safety threshold. ערך הסוכר הסופי הצפוי הוא מעל היעד. לכן AAPS יימנע מהוספת אינסולין שיתרום לרמת סוכר נמוכה בטווח הזמן הקרוב (כלומר, אינסולין שתוספתו תוריד את התחזית מתחת לסף). לאחר מכן, הוא יבחן הוספת אינסולין כדי להוריד את הרמה הנמוכה ביותר של הסוכר הסופי הצפוי אל היעד, ברגע שבטוח לעשות זאת. *(בהתאם להגדרות ולכמות ולעיתוי האינסולין הדרוש, אינסולין זה עשוי להינתן באמצעות בזאלי זמני או SMB (סופר מיקרו בולוסים)).*

![Dosing scenario 3](../images/Dosing_scenario_3.jpg)

### Scenario 4 - Low temping for safety

בדוגמה זו, AAPS מזהה שהסוכר בדם מזנק הרבה מעל היעד. However, due to the timing of insulin, there is already enough insulin in the body to bring BG into range eventually. למעשה, הסוכר בדם צפוי בסופו של דבר להיות מתחת ליעד. Therefore, AAPS will not provide extra insulin so it will not contribute to a longer-timeframe low. אף שהסוכר בדם גבוה/עולה, סביר שיוגדר כאן קצב בזאלי זמני נמוך.

![Dosing scenario 4](../images/Dosing_scenario_4.jpg)

## Optimizing settings and making changes

As a clinician who may not have experience with AAPS or DIY closed loops, you may find it challenging to help your patient optimize their settings or make changes to improve their outcomes. We have multiple tools and [guides](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/optimize-your-settings.html) in the community that help patients make small, tested adjustments to improve their settings.

The most important thing for patients to do is make one change at a time, and observe the impact for 2-3 days before choosing to change or modify another setting (unless it’s obviously a bad change that makes things worse, in which case they should revert immediately to the previous setting). The human tendency is to turn all the knobs and change everything at once; but if someone does so, then they may end up with further sub-optimal settings for the future, and find it hard to get back to a known good state.

אחד הכלים החזקים ביותר לשינוי הגדרות הוא כלי חישוב אוטומטי לקצבים הבזאליים, ל־ISF וליחס הפחמימות. תהליך זה נקרא “[Autotune](#autotune-how-autotune-calculates-adjustments)”. הוא מיועד לאפשר לנתונים להנחות אתכם או את המטופלים בביצוע שינויים הדרגתיים בהגדרות. It is best practice in the community to run (or review) Autotune reports first, prior to attempting to make manual adjustments to settings. Autotune מובנה ב־AAPS כתוסף (**הגדרות תצורה** ← **כללי** ← **כוונון אוטומטי**); ראו [Autotune](../AdvancedOptions/Autotune.md). אפשר להפעיל אותו לפי דרישה או באופן אוטומטי. As these parameters are a prerequisite both for standard pump insulin delivery and for closed loop insulin delivery, discussion of the autotune results and adjustment of these parameters would be the natural link to the clinician.

Additionally, human behavior (learned from manual diabetes mode) often influences outcomes, even with a DIY closed loop. לדוגמה, אם הסוכר בדם צפוי לרדת ו־AAPS מפחית את האינסולין כבר בזמן הירידה, ייתכן שתידרש רק כמות קטנה של פחמימות (למשל 3-4 גרם פחמימות) כדי להעלות את הסוכר בדם מ־70 mg/dL (3.9 mmol/L). However, in many cases, someone may choose to treat with many more carbs (e.g. sticking to the 15 rule), which will cause a resulting faster spike both from the extra glucose and because insulin had been reduced in the timeframe leading up to the low.

## OpenAPS

**מדריך זה עובד מתוך [המדריך לצוותים רפואיים ל־OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/clinician-guide-to-OpenAPS.html).** OpenAPS היא מערכת שפותחה להפעלה על מחשב נייד קטן (המכונה בדרך כלל "rig"). AAPS uses many of the techniques implemented in OpenAPS, and shares much of the logic and algorithms, which is why this guide is very similar to the original guide. Much of the information about OpenAPS can be easily adapted to AAPS, with the main difference being the hardware platform where each piece of software is run.

## Summary

This is meant to be a high-level overview of how AAPS works. For more details, ask your patient, reach out to the community, or read the full AAPS documentation available online.

Additional recommended reading:

* The [full AAPS documentation](../index.md)
* The [OpenAPS Reference Design](https://OpenAPS.org/reference-design/), which explains how OpenAPS is designed for safety: https://openaps.org/reference-design/
* The [full OpenAPS documentation](https://openaps.readthedocs.io/en/latest/index.html) 
  * ראו [איך AAPS הופך את התחזיות להחלטת מינון](#aaps-screens-how-predictions-become-a-dosing-decision) בתיעוד זה, או את [התיעוד של determine-basal ב־OpenAPS](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html#understanding-the-determine-basal-logic) לכל הפרטים הטכניים של האלגוריתם