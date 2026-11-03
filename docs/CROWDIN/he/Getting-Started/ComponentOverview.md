# Component Overview

**AAPS** הוא לא רק אפליקציה (שבונים בעצמכם); הוא אחד מכמה רכיבים של מערכת הלולאה הסגורה שלכם. לפני שבוחרים רכיבים, כדאי לקרוא את התיעוד של כל רכיב.

![Components overview](../images/modules.png)

```{admonition} IMPORTANT SAFETY NOTICE
:class: important

The foundation of **AAPS** safety features discussed in this documentation is built on the safety features of the hardware used to build your system. For closing an automated insulin dosing loop, it is critically important that you only use an insulin pump and CGM that are tested, fully functioning and approved by the official instances of your country. שינויים בחומרה או בתוכנה ברכיבים אלה עלולים לגרום למינון בלתי צפוי של אינסולין, ולגרום לסיכון משמעותי למשתמש. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, **do not use** these for creating an **AAPS** system.

Additionally, it is equally important to only use original supplies such as inserters, cannulas and insulin containers approved by the manufacturer for use with your pump or CGM. Using untested or modified supplies can cause CGM inaccuracy and insulin dosing errors. Insulin is highly dangerous when misdosed - please do not play with your life by hacking with your supplies.

Last but not least, you must not take SGLT-2 inhibitors (gliflozins) as they incalculably lower blood sugar levels. השילוב עם מערכת שמפחיתה קצבים בזאליים כדי להעלות את רמת הסוכר מסוכן במיוחד, מכיוון שבגלל הגליפלוזין עלייה זו ברמת הסוכר עלולה לא להתרחש, ועלול להיווצר מצב מסוכן של חוסר באינסולין. [More information here](#PreparingForAaps-no-sglt-2-inhibitors).
```

## Necessary Modules

### Good individual dosage algorithm for your diabetes therapy

זה לא משהו שיוצרים או קונים, אבל זה כנראה ה"רכיב" שהכי ממעיטים בחשיבותו - והוא חיוני. כשנותנים לאלגוריתם לעזור בניהול הסוכרת, הוא צריך לדעת את ההגדרות הנכונות, כדי שלא יעשה טעויות חמורות. Even if you are still missing other modules, you can already verify and adapt your **Profile** in collaboration with your diabetes team.

The **Profile** includes:

- BR (קצבים בזאליים): מספק אינסולין רקע;
- ISF (insulin sensitivity factor): how much your blood glucose level will be reduced by 1 unit of insulin;
- CR (יחס פחמימות): כמה גרם פחמימות מכוסים על ידי יחידת אינסולין אחת.

Most loopers use circadian BR, ISF and CR, which adapt hormonal insulin sensitivity during the day.

בנוסף ל**פרופיל**, יש להגדיר גם את ה**אינסולין** ב-**ניהול ← הגדרות אינסולין**, כולל ה-DIA שלו (משך פעולת האינסולין) - ראו [הגדרות אינסולין](#Config-Builder-insulin-dia).

מידע נוסף על ה**פרופיל** [בדף המיוחד לנושא](../SettingUpAaps/YourAapsProfile.md).

### Phone

ראו את הדף המיוחד [טלפונים](../Getting-Started/Phones.md).

### Insulin pump

ראו את הדף המיוחד [משאבות תואמות](../Getting-Started/CompatiblePumps.md).

**יתרונות וחסרונות של כמה דגמי משאבות**

ה-Combo, ה-Insight וה-Medtronic הישנות הן משאבות אמינות, ומתאימות ללולאה. היתרון של ה-Combo הוא שאפשר לבחור מבין סוגים רבים יותר של סטים לאינפוזיה, כי יש לה חיבור Luer-Lock סטנדרטי. והסוללה שלה רגילה: אפשר לקנות אותה בכל תחנת דלק או בכל חנות נוחות שפתוחה 24 שעות, ואם ממש צריך, אפשר "לשאול" אותה מהשלט של הטלוויזיה בחדר המלון ;-).

אבל היתרונות של DanaR/RS ו-Dana-i לעומת ה-Combo כמשאבה המועדפת הם:

- Initial pairing is simpler with the Dana-i/RS. But you usually only do this once so it only impacts if you want to test a new feature with different pumps.
- So far the Combo works with screen parsing. In general that works great but it is slow. For looping this does not matter much as everything works in the background. עם זאת, נדרש זמן חיבור ארוך יותר, ולכן יש יותר זמן שבו חיבור ה-BT עלול להתנתק. זה לא נוח אם מתרחקים מהטלפון בזמן מתן בולוס ובישול.
- The Combo vibrates on the end of TBRs, the DanaR vibrates (or beeps) on SMB. At nighttime, you are likely to be using TBRs more than SMB.  The Dana-i/RS is configurable so that it does neither beep nor vibrate.
- Reading the history on the Dana-i/RS in a few seconds with carbs makes it possible to switch phones easily while offline and continue looping as soon as some CGM values are in.
- All pumps **AAPS** can talk with are waterproof on delivery. Only the Dana pumps are also "waterproof by warranty" due to the sealed battery compartment and reservoir filling system.

### מקור ערכי הסוכר

ראו את הדף המיוחד [מערכות CGM תואמות](../Getting-Started/CompatiblesCgms.md).

### **AAPS**-.apk file

הרכיב הראשי של המערכת. כדי להתקין את האפליקציה, צריך קודם לבנות את קובץ ה-apk בעצמכם. ההוראות נמצאות [כאן](../SettingUpAaps/BuildingAaps.md).

### Reporting server

שרת דיווח מציג את נתוני הסוכר והטיפולים שלכם, ויוצר דוחות לניתוח מפורט. כרגע יש שני שרתי דיווח שאפשר להשתמש בהם עם AAPS: [Nightscout](#SettingUpTheReportingServer-nightscout) ו-[Tidepool](#SettingUpTheReportingServer-tidepool). שניהם מאפשרים להציג את נתוני הסוכרת שלכם לאורך זמן, ונותנים סטטיסטיקות על **זמן בטווח** (TIR) ומדדים אחרים.

שרת הדיווח אינו תלוי ברכיבים האחרים. אם לא רוצים להשתמש בשרת דיווח, חשוב לדעת שהוא אינו חובה להפעלת **AAPS** לאורך זמן. אבל עדיין צריך להגדיר שרת כזה, כי הוא נדרש כדי להשלים את [**משימה 1**](#objectives-objective1).

מידע נוסף על הגדרת שרת הדיווח נמצא [כאן](../SettingUpAaps/SettingUpTheReportingServer.md).

## Optional Modules

### Smartwatch

אפשר לבחור כל שעון חכם עם **Wear OS 3** ומעלה. פרטים נוספים בדף [שעונים חכמים](../Getting-Started/Watches.md).

המשתמשים יוצרים [רשימה של טלפונים ושעונים שנבדקו](#Phones-list-of-tested-phones). יש פני שעון שונים לשימוש עם **AAPS**, ואפשר למצוא אותם [כאן](../WearOS/WearOsSmartwatch.md).

### xDrip

גם אם אין צורך באפליקציית xDrip כ**מקור ערכי הסוכר**, עדיין אפשר להשתמש בה, למשל להתראות או לתצוגה אחרת של רמת הסוכר. אפשר להגדיר כמה התראות שרוצים, לקבוע מתי כל התראה פעילה, לבחור אם היא יכולה לעקוף את מצב השקט, ועוד. מידע על xDrip נמצא [כאן](../CompatibleCgms/xDrip.md). שימו לב: התיעוד של האפליקציה הזו לא תמיד מעודכן, כי היא משתנה מהר.

## What to do while waiting for modules

לפעמים לוקח זמן להשיג את כל הרכיבים שנדרשים כדי לסגור את הלולאה. אבל אין מה לדאוג, יש הרבה דברים שאפשר לעשות בזמן ההמתנה. **חובה** לבדוק ולהתאים (לפי הצורך) את הקצבים הבזאליים (BR), יחס האינסולין לפחמימות (IC), גורמי הרגישות לאינסולין (ISF) וכו'. ואולי לולאה פתוחה היא דרך טובה לבדוק את המערכת ולהכיר את **AAPS**. במצב זה, **AAPS** נותן המלצות לטיפול, ואתם מבצעים אותן ידנית.

אפשר להמשיך לקרוא כאן את התיעוד, ליצור קשר עם משתמשי לולאה אחרים ברשת או מחוצה לה, [לקרוא](../UsefulLinks/BackgroundReading.md) מסמכים או את מה שמשתמשי לולאה אחרים כותבים (אבל צריך להיזהר: לא כל מה שכתוב נכון, ולא הכול מתאים לכם).

**סיימתם?** אם כל רכיבי ה-**AAPS** שלכם מוכנים (מזל טוב!), או לפחות מספיק רכיבים כדי להתחיל במצב לולאה פתוחה, קודם יש לקרוא את [תיאור המשימות](../SettingUpAaps/CompletingTheObjectives.md) לפני כל משימה חדשה, ולהגדיר את החומרה.
