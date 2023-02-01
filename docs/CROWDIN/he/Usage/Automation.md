# אוטומציה

## מהי אוטומציה

עבור אותם אירועים תכופים, ייתכן שתצטרכו תמיד לשנות את אותן הגדרות. על מנת למנוע את התעסוקה העודפת, אפשר פשוט לנסות להפוך את האירוע לאוטומטי אם אתם יכולים לאפיין אותו מספיק טוב ולתת לו להתרחש באופן אוטומטי.

I.e. אם רמת הסוכר נמוכה, אפשר להחליט להעלות את ערך המטרה זמנית באופן אוטומטי. אפשרות נוספת היא להגדיר שאם אתם במכון כושר, יוגדר ערך המטרה גבוה.

Before using Automation, you should be confident with manual [temp targets](./temptarget.html) or profile switches.

ודאו שאתם באמת מבינים כיצד אוטומציה פועלת לפני הגדרת התנאי הפשוט הראשון שלכם. **Instead of action, let AAPS first display only a notification.** When you are sure automation is triggered at the right time, replace notification by real action.

```{image} ../images/Automation_ConditionAction_RC3.png
:alt: Automation condition + action
```

## הוראות שימוש

כדי להגדיר אוטומציה, מתחילים מלתת לה שם, לבחור לפחות תנאי אחד ופעולה אחת.

(important-note)=
### הערה חשובה

**Automation is still active when you disable loop!**

אז הקפידו במידת הצורך לבטל את כללי האוטומציה במהלך מקרים אלה. ניתן לעשות זאת על ידי ביטול סימון התיבה שלצד השם של האוטומציה.

```{image} ../images/Automation_ActivateDeactivate.png
:alt: Activate and deactivaten automation rule
```

### היכן למצוא את הגדרת האוטומציות

Depending on your [settings in config builder](../Configuration/Config-Builder.md#tab-or-hamburger-menu) you will either find [Automation](../Configuration/Config-Builder#automation) in hamburger menu or as a tab.

### כללי

ישנן מגבלות:

- The glucose value has to be between 72 and 270 mg/dl or 4 and 15 mmol/l.
- The profile percentage has to be between 70 % and 130%.
- There is a 5 min. time limit between executions (and first execution).

**Please be careful:**

- **less than -2 means: -3 and lower (-4,-10, etc)**
- **more than -2 means: -1 and higher (-1, 0, +10, etc)**

### תנאי

ניתן לבחור בין מספר תנאים. להלן הסברים על מספר סוגי תנאים אבל רובם צריכים להיות קלים להבנה ולא הכל מתואר כאן:

- connect conditions: you can have several conditions and can link them with

  - "And"
  - "Or"
  - "Exclusive or" (which means that if one - and only one of the - conditions applies, the action(s) will happen)

- Time vs. recurring time

  - time =  single time event
  - recurring time = something that happens regularly (i.e. once a week, every working day etc.)

- location: in the config builder (Automation), you can select which location service you want to use:

  - Use passive location: AAPS only takes locations when other apps are requesting it
  - Use network location: Location of your Wifi
  - Use GPS location (Attention! עלול לגרום לניצול מוגבר של הסוללה!)

### פעולות

אפשר לבחור פעולה אחת או יותר:

- start temp target

  - must be between 72 mg/dl and 270 mg/dl (4 mmol/l and 15 mmol/l)
  - works only if there is no previous temp target

- stop temp target

- notification

- profile percentage

  - must be between 70% and 130%
  - works only if the previous percentage is 100%

After adding your action, **don't forget to change the default values** to what you need by clicking in the default values.

```{image} ../images/Automation_Default_V2_5.png
:alt: Automation default vs. set values
```

(sort-automation-rules)=
### מיון כללי אוטומציה

כדי למיין את כללי האוטומציה לחצו כפתור המיון והחזיקו את כפתור ארבע השורות בצד שמאל של המסך וגררו למעלה או למטה.

```{image} ../images/Automation_Sort.png
:alt: Sort automation rules
```

### מחיקת כללי אוטומציה

על מנת למחוק כללי אוטומציה לחצו על סמל הפח.

```{image} ../images/Automation_Delete.png
:alt: Delete automation rule
```

(good-practice-caveats)=
## Good practice & caveats

- When you start using automation or create a new rule, first add a notification only until you are sure the rule is working well.

- Watch the rule results.

- Don't try to make conditions too easy (i.e.: IF bg > 80 mg/dl AND bg \< 180 mg/dl)

  **Doubly important if action is a profile switch!**

- Try to use Temp Targets instead of Profile Switches. Temp Targets do not reset [Autosens](../Usage/Open-APS-features.md#autosens) back to 0.

- Make sure Profile switches are made sparingly and preferably at a last resort.

  - Profile switching renders [Autosens](../Usage/Open-APS-features.md#autosens) useless for a min of 6 hours.

- Profile switching will not reset the profile back to your base profile

  - You have to make another rule to set this back or do it manually!
  - Increased risk of hypoglycemia if profile switch does not expire or reset back to base profile.

## דוגמאות

אלו הן רק דוגמאות, לא עצות. אל תעתיקו אותן מבלי להיות מודעים למה שאתם עושים או למה אתה צריכים אותן.

- Switching profiles for your daily activities (like school, gym, weekend, workday...) using geolocation, wifi, time etc.
- Setting temp target for activities based on time, location, connection to a bluetooth device...
- Setting eating soon temp targets based on time, location...

### ערך מטרה זמני בתגובה לרמת סוכר נמוכה

```{image} ../images/Automation2.png
:alt: אוטומציה2
```

זה נעשה כדי להפעיל ערך מטרה זמני היפו באופן אוטומטי כאשר ערך הגלוקוז נמוך.

### ערך מטרה זמני לקראת ארוחת צהריים

```{image} ../images/Automation3.png
:alt: אוטומציה3
```

דוגמה זו נוצרה על ידי מישהו שאוכל ארוחת צהריים בעבודה באותה שעה בכל יום במהלך ימי עבודה. אם משתמש זה נמצא בשעה מסוימת במיקום ארוחת הצהריים שלו, האוטומציה תגדיר ערך מטרה זמני נמוך (אוכל בקרוב) בזמן ההמתנה לארוחת הצהריים. בגלל השימוש בשער הלוגי "וגם", הפעולה יוצאת לפועל רק בזמן הנבחר כשהמשתמש נמצא במיקום הנבחר. הפעולה לא מופעלת בזמנים אחרים במקום הזה או אם המשתמש נשאר בבית בזמן הזה.

### שימוש שגוי באוטומציות

יש להיזהר משימוש שגוי באוטומציות. שימוש שגוי עלול להוביל לקשיים ואף לסכנה לבריאותכם. להלן דוגמאות לשימוש לא נכון:

- Trying to override algorithm at all instead of help only (i.e. by changing profile instead of tunning basal, IC etc.)
- Setting profile to compensate food
- Setting profile without duration
- Creating one way rules (i.e. do something but don't undo it by another rule)
- Creating long term rules

## אלטרנטיבות

למשתמשים מתקדמים, ישנן אפשרויות אחרות לבצע אוטומציה של משימות באמצעות IFTTT או אפליקציית אנדרואיד צד שלישי בשם Automate. Some examples can be found [here](./automationwithapp.html).
