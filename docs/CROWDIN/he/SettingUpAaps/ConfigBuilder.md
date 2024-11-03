# בונה התצורה

בהתאם להגדרותיכם, תוכלו לפתוח את בונה התצורה דרך הלשונית בחלקו העליון של המסך או דרך תפריט ההמבורגר (≡).

![Open config builder](../images/ConfBuild_Open_AAPS30.png)

"בונה התצורה" הוא התפריט בו תוכלו להפעיל ולכבות את התכונות המודולריות. The boxes on the left-hand side (A) allow you to select which one to use, the boxes on the right-hand side (C) allow you to view these as a tab (E) in AAPS. במידה והתיבה בצד שמאל אינה מופעלת, ניתן להגיע לתכונה הרצויה דרך תפריט ההמבורגר (D) בצד העליון הימיני של המסך.

במקומות בהם ישנה אפשרות להגדרות נוספות בתוך המודול, ניתן ללחוץ על גלגל השיניים (B) על מנת להגיע להגדרות הספציפיות בתוך ההעדפות.

**First configuration:** Since AAPS 2.0 a Setup wizard guides you through the process of setting up AAPS. על מנת להיעזר בו, לחצו על תפריט 3 הנקודות (⋮) בצד השמאלי העליון של המסך (F), ובחרו ב'אשף ההתקנה'.

![Config Builder boxes and cog wheel](../images/ConfBuild_ConfigBuilder_AAPS30.png)

(Config-Builder-tab-or-hamburger-menu)=

## לשונית או תפריט המבורגר

באמצעות תיבת הסימון מתחת סמל העין תוכלו לבחור כיצד לפתוח את המסך של אותה תכונה.

![לשונית או תפריט המבורגר](../images/ConfBuild_TabOrHH_AAPS30.png)

(Config-Builder-profile)=

## Profile

* בחרו את סוג הפרופיל הבזאלי בו תרצו להשתמש. See [Profiles](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) page for more setup information.
* החל מ-AAPS 3.0, קיים רק פרופיל מקומי.

למרות זאת, ניתן לסנכרן פרופיל נייטסקאוט עם הפרופיל המקומי. לשם כך, חשוב לשכפל את כל מסד הנתונים, הכולל מספר פרופילים בעורך הפרופילים בנייטסקאוט. ראו את ההוראות מטה. זה יוכל להיות שימושי אם נוח לכם לעשות שינויים גדולים בפרופיל דרך ממשק של האתר, לדוגמה העתקת הגדרות מטבלת אקסל.

(Config-Builder-local-profile)=

### פרופיל מקומי

הפרופיל המקומי משתמש בפרופיל הבזאלי שהוזן ידנית לטלפון. עם בחירת הפרופיל, תופיע לשונית חדשה ב-AAPS, שם תוכלו לשנות את פרטי הפרופיל הנקראים מהמשאבה במידת הצורך. בפעם הבאה שתשנו פרופיל, הפרטים החדשים יישלחו למשאבה בפרופיל 1. הפרופיל הזה מומלץ מכיוון שאינו מסתמך על חיבור לאינטרנט.

Your local profiles are part of [exported settings](../Maintenance/ExportImportSettings.md). לכן, הכינו לעצמכם גיבוי במקום בטוח.

![Local Profile settings](../images/LocalProfile_Settings.png)

מקשים:

* פלוס ירוק: הוסף
* X אדום: מחק
* חץ כחול: שכפל

כשאתם מבצעים שינויים בפרופיל, וודאו כי הנכם עובדים על הפרופיל הנכון. לא תמיד הפרופיל הפעיל כרגע יופיע בלשונית הפרופילים. לדוגמא, אם ביצעתם החלפת פרופיל דרך במסך הבית, יתכן שהוא יהיה שונה מהפרופיל המופיע בלשונית הפרופיל המקומי, משום שאין קשר ביניהם.

#### החלפה לפרופיל משוכפל

ניתן בקלות ליצור פרופיל מקומי חדש מהפרופיל המוחלף\זמני. במקרה זה שינוי היסט הזמן והאחוזים יוחלו על הפרופיל המקומי החדש.

1. לחצו על תפריט 3 נקודות (⋮) בפינה שמאלית עליונה.
2. בחרו "טיפולים".
3. לחצו על סמל הכוכב כדי להיכנס לעמוד החלפות הפרופיל.
4. בחרו את הפרופיל הרצוי ולחצו על "שכפול".
5. ניתן לערוך את הפרופיל המקומי החדש בלשונית "פרופיל מקומי" או דרך תפריט ההמבורגר.

![החלפה לפרופיל משוכפל](../images/LocalProfile_ClonePS_AAPS30.png)

(Config-Builder-upload-local-profiles-to-nightscout)=

#### העלאת פרופילים מקומיים לנייטסקאוט

ניתן גם להעלות את הפרופילים המקומיים לנייטסקאוט. The settings can be found in [NSClient preferences](#Preferences-nsclient).

![Upload local profile to NS](../images/LocalProfile_UploadNS_AASP30.png)

#### Change profile in Nightscout profile editor

You can synchronize changes to the profile in the Nightscout profile editor to local profiles. The settings can be found in [NSClient preferences](#Preferences-nsclient).

זה הכרחי לשכפל את כלל מסד הנתונים הפעיל ולא רק פרופיל אחד עם החץ הכחול! התאריך העדכני נרשם עם מסד הנתונים החדש וניתן להפעילו בלשונית "פרופיל מקומי".

![Clone database records](../images/Nightscout_Profile_Editor.PNG)

### עוזר הפרופילים

עוזר הפרופילים מציע שתי פונקציות:

1. הרכבת פרופיל עבור ילדים
2. השוואת פרופילים או החלפות פרופילים כדי לשכפל פרופיל חדש

Details are explained on the separate [profile helper page](../SettingUpAaps/ProfileHelper.md).

(Config-Builder-insulin)=

## אינסולין

![Insulin type](../images/ConfBuild_Insulin_AAPS30.png)

* בחרו את סוג האינסולין שלכם ואת עקומת פעילותו.
* לאפשרויות 'Oref אינסולין מהיר', 'Oref אינסולין אולטרה מהיר', 'Oref שיא חופשי' ו-'Lyumjev' צורת עקום פעולה אקספוננציאלי. ניתן למצוא מידע נוסף ב[מסמכי OpenAPS](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves). 
* העקומות תהיינה שונות, בהתאם ל-DIA ומשך הזמן עד השיא.
    
    * קו סגול מראה כמה **אינסולין נותר** לאחר שהוזרק, כאשר הוא נחלש ככל שעובר הזמן.
    * קו כחול מראה עד כמה האינסולין **פעיל**.

### DIA - משך פעילות אינסולין

* ה-DIA (משך זמן פעילות האינסולין) משתנה מאדם לאדם. משום כך, עליכם לבדוק את הנתון הזה באופן אישי. 
* אבל ה-DIA תמיד חייב להיות לפחות 5 שעות.
* אצל אנשים רבים המשתמשים באינסולין מהיר במיוחד, כמו Fiasp, כמעט ואי אפשר לזהות השפעה כלשהי לאחר שעברו 3-4 שעות, גם אם בעיקרון עדיין נותרו 0.0xx יחידות. הכמות שנותרה בכל זאת עשויה להיות מורגשת בזמן פעילות גופנית, למשל. Therefore, AAPS uses minimum 5h as DIA.
* You can read more about that in the Insulin Profile section of [this](#AapsScreens-insulin-profile) page.

### הבדלים בסוגי אינסולין שונים

* באינסולין מסוג Rapid-Acting, Ultra-Rapid, ו-Lyumjev, ה-DIA הוא הנתון היחיד שתוכלו להגדיר בעצמכם. משך הזמן עד השיא הינו קבוע. 
* שיא חופשי מאפשר לכם להגדיר הן את ה-DIA והן את משך הזמן עד השיא, ומומלץ לשימוש רק על ידי משתמשים מתקדמים המבינים את משמעות ההשלכות של ההגדרות הללו. 
* The [insulin curve graph](#AapsScreens-insulin-profile) helps you to understand the different curves.
* ניתן לצפות בו על ידי סימון "V" במשבצת כדי שיופיע כלשונית, או לחילופין למצוא אותו בתוך תפריט ההמבורגר.

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

Select the blood glucose source you are using - see [BG Source](../Getting-Started/CompatiblesCgms.md) page for more setup information.

![Config Builder BG source](../images/ConfBuild_BG.png)

* [בנה אפליקציית Dexcom בעצמך (BYODA)](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0).
* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* [Minimed 640G](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de) - נתמך החל מגרסה 4.15.57
* [Poctech](https://www.poctechcorp.com/en/contents/268/5682.html)
* [יישום Tomato](http://tomato.cool/) למכשירי MiaoMiao
* [Glunovo App](https://infinovo.com/) לשימוש עם חיישן Glunovo
* נתוני סוכר מ-NSClient - לא מומלץ כי במקרה זה תפקוד הלולאה תלוי בחיבור רצוף לאינטרנט. נתוני סוכר יתקבלו רק אם יש חיבור לאתר הנייטסקאוט דרך האינטרנט. עדיף להשתמש בשידור מקומי ממקורות הנתונים האחרים.
* הפקת נתוני גלוקוז אקראיים (מצב הדגמה בלבד)

(Config-Builder-pump)=

## Pump

בחרו את המשאבה בה אתם משתמשים.

![Config Builder Pump selection](../images/ConfBuild_Pump_AAPS30.png)

* [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)
* Dana R של השוק הפנים קוראני
* Dana Rv2 (Dana R עם שדרוג גרסת קושחה לא רשמי)
* [Dana-i / RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)
    
    * עבור משאבות Dana, במקרה הצורך, הפעילו את האפשרות BT Watchdog שבהעדפות, תחת הכותרת 'משאבה'. אפשרות זו מכבה את הבלוטות' של הטלפון לשניה אחת אם לא נוצר קשר אל המשאבה. זה יכול לעזור בטלפונים מסויימים שיש להם נטייה לניתוקים של בלוטות'.
    * [Password for Dana RS pump](../CompatiblePumps/DanaRS-Insulin-Pump.md) must be entered correctly. הסיסמה לא נבדקה בגרסאות קודמות.

* [Accu Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)

* [Accu Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump.md) (requires ruffy installation)
* [Omnipod Eros](../CompatiblePumps/OmnipodEros.md)
* [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md)
* [Medtronic](../CompatiblePumps/MedtronicPump.md)
* [Diaconn G8](../CompatiblePumps/DiaconnG8.md)
* MDI (קבלת המלצות מ-AAPS לטיפול של הזרקות ידניות ללא משאבה)
* משאבה וירטואלית (לולאה פתוחה לשימוש עם משאבות שעוד לא או שאינן מתחברות ל-AAPS - קבלת המלצות בלבד)

## זיהוי רגישות

בחרו את סוג זיהוי הרגישות. For more details of different designs please [read on here](../DailyLifeWithAaps/SensitivityDetectionAndCob.md). פונקציה זו תנתח את המידע ההיסטורי בשעת מעשה ותבצע התאמות במידה ותזהה כי הנכם מגיבים לאינסולין ברגישות יתר מהרגיל (או להיפך, אינכם מגיבים מספיק). מידע נוסף על אלגוריתם הרגישות ניתן למצוא ב[מסמכי OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

תוכלו לראות את רמת הרגישות שלכם בעמוד הבית, על ידי בחירה ברגישות ומעקב אחרי העקום הלבן בגרף. Note, you need to be in [Objective 8](#objectives-objective8) in order to let Sensitivity Detection/[Autosens](#Open-APS-features-autosens) automatically adjust the amount of insulin delivered. עד שתגיעו לשלב זה במשימות, אחוזי ה-Autosens והעקום הלבן בגרף מוצגים כמידע בלבד.

(Config-Builder-absorption-settings)=

### הגדרות ספיגה

אם אתם משתמשים ב-Oref1 עם SMB, חובה לשנות את **min_5m_carbimpact** ל-8. ערך זה יימצא בשימוש רק בזמן שיש הפסקה בקבלת נתוני סוכר מהחיישן או כשפעילות גופנית "מנצלת" את כל העלייה בסוכר שבה AAPS משתמש כדי לחשב דעיכת פחמימות פעילות. At times when [carb absorption](../DailyLifeWithAaps/CobCalculation.md) can't be dynamically worked out based on your bloods reactions it inserts a default decay to your carbs. למעשה, זהו אמצעי אל כשל.

(Config-Builder-aps)=

## APS

בחר את אלגוריתם ה-APS הרצוי להתאמות טיפוליות. ניתן לצפות בפרטי הפעילות של האלגוריתם הנבחר בלשונית ה-OpenASP(OAPS).

* OpenAPS AMA ("עוזר ארוחות מתקדם", אלגוריתם מ-2017) במילים פשוטות, לאחר הזרקת בולוס ארוחה, האלגוריתם יכול לתקן מהר עם בזאלי זמני גבוה אם הזנתם את כמות הפחמימות במדוייק.
* [OpenAPS SMB](../DailyLifeWithAaps/KeyAapsFeatures.md) (super micro bolus, most recent algorithm for advanced users) Note you need to be in [Objective 9](#objectives-objective9) in order to use OpenAPS SMB and min_5m_carbimpact must be set to 8 in Config builder > Sensitivity detection > Sensitivity Oref1 settings.

## לולאה

* עברו בין לולאה פתוחה, לולאה סגורה, והשעייה בזמן היפו (LGS).

![Config builder - loop mode](../images/ConfigBuilder_LoopLGS.png)

(Config-Builder-open-loop)=

### לולאה פתוחה

* AAPS מנתח באופן רציף את כל הנתונים הזמינים (IOB - אינסולין פעיל בגוף, COB - פחמימות פעילות, BG - רמת הסוכר...) ומציע הצעות להתאמת הטיפול במידת הצורך. 
* ההצעות לא תבוצענה באופן אוטומטי (כמו שיקרה בלולאה הסגורה). יש לבצע אותם ידנית במשאבה, או באמצעות המקש המתאים אם הנכם משתמשים במשאבה מתאימה (Dana R/RS, Omnipod או AccuChek Combo). 
* This option is for getting to know how AAPS works or if you are using an unsupported pump.

(Config-Builder-closed-loop)=

### לולאה סגורה

* AAPS מנתח ללא הרף את כל הנתונים הזמינים (IOB - אינסולין פעיל בגוף, COB - פחמימות פעילות, BG - רמת הסוכר...) ומתאים אוטומטית את הטיפול במידת הצורך (ללא צורך בהתערבות המשתמש) על מנת להגיע לערך או טווח המטרה שנקבע (על ידי מתן בולוס, שינוי בזאלי זמני, השהיית מתן האינסולין למניעת היפו, וכדו'). 
* הלולאה הסגורה פועלת במסגרת אינספור מגבלות בטיחות, אותן תוכלו להגדיר באופן אישי.
* Closed Loop is only possible if you are in [Objective 6](#objectives-objective6) or higher and use a supported pump.
* שימו לב: במצב לולאה סגורה מומלץ להגדיר מטרה יחידה במקום טווח מטרה (לדוגמא, 100 mg/dl במקום 90-125 mg/dl).

### השהייה בזמן רמת גלוקוז נמוכה (LGS)

* maxIOB (מקסימום אינסולין פעיל בגוף) מוגדר כאפס
* המשמעות היא שבמידה ורמת הסוכר בדם צונחת, המערכת תוכל להוריד את המינון הבזאלי.
* אולם אם רמת הסוכר עולה, לא יתבצע תיקון אוטומטי. המינונים הבזאליים יוותרו כפי שהגדרתם בפרופיל שנבחר.
* רק במידה וה-IOB הבזאלי הוא שלילי (עקב השהייה קודמת), יינתן אינסולין נוסף לרמת גלוקוז נמוכה.

### מינימום בקשה לשינוי

* בזמן השימוש בלולאה פתוחה, תקבלו התראות בכל פעם שה-AAPS ימליץ על התאמת בזאל זמנית. 
* על מנת להפחית את מספר ההתראות אתם יכולים לבחור טווח מטרה רחב יותר לסוכר או להגדיל את אחוז השינוי המינימלי להתראה.
* זוהי ההגדרה של השינוי היחסי הדרוש כדי להפעיל התראה על המלצה על שינוי.

## משימות (הלומדה)

AAPS has a learning program (objectives) that you have to fulfill step by step. היא תדריך אותכם בבטחה במהלך הקמת הלולאה הסגורה. היא מבטיחה שאתם תגדירו הכל כראוי ושאתם מבינים מה היא עושה. זוהי הדרך היחידה שלכם לבטוח בפעילותה.

You should [export your settings](../Maintenance/ExportImportSettings.md) (including progress of the objectives) on a regularly basis. במקרה בו תחליפו את הטלפון (בגלל קניית חדש, נזק וכו') תוכלו לייבא את ההגדרות.

See [Objectives](../SettingUpAaps/CompletingTheObjectives.md) page for more information.

## טיפולים

בלשונית טיפולים, תוכלו לראות את הטיפולים שהועלו לנייטסקאוט. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the [carbs button on the home screen](#screens-bolus-carbs).

## General

### סקירה כללית

Displays the current state of your loop and buttons for most common actions (see [section The Homescreen](../DailyLifeWithAaps/AapsScreens.md) for details). ניתן לגשת להגדרות על ידי לחיצה על גלגל השיניים.

#### השאר את המסך דולק

האפשרות 'שמור מסך מופעל' תאלץ את אנדרואיד להשאיר את המסך דולק כל הזמן. זה שימושי להדגמות וכו'. אבל הוא צורך הרבה סוללה. לכן, מומלץ לחבר את הסמארטפון למטען.

#### מקשים

הגדירו אילו כפתורים מוצגים במסך הראשי.

* טיפולים
* מחשבון
* אינסולין
* פחמימות
* סנסור (פותח את xDrip או את מקור נתוני הסוכר)
* כיול

בנוסף, ניתן להגדיר קיצורי דרך לתוספות אינסולין ופחמימות ולהחליט אם יש להציג את שדה ההערות בדיאלוגים של הטיפולים.

#### הגדרות אשף מהיר

אפשר ליצור כפתור לארוחה סטנדרטית מסוימת (פחמימות ושיטת חישוב לבולוס) שיוצג במסך הבית. השתמשו בכפתור זה לארוחות סטנדרטיות הנאכלות בתדירות גבוהה. אם צוינו זמנים שונים לארוחות השונות תמיד יהיה לכם כפתור הארוחה הסטנדרטי המתאים במסך הבית, בהתאם לשעה ביום.

הערה: הכפתור לא יהיה גלוי אם הוא מחוץ לטווח הזמן שצוין או אם יש כרגע מספיק אינסולין פעיל כדי לכסות את הפחמימות המוגדרות בלחצן אשף מהיר.

![QuickWizard button](../images/ConfBuild_QuickWizard.png)

#### ברירות מחדל ערכי מטרה

בחרו ערכי מטרה זמניים (משך וערך מטרה). ברירות המחדל הן:

* אוכלים בקרוב: מטרה 72 mg/dl למשך 45 דקות
* פעילות: מטרה 140 mg/dl למשך 90 דקות
* היפו: מטרה 125 mg/dl למשך 45 דקות

#### מילוי\תיחול כמויות סטנדרטיות של אינסולין

בחרו את כמויות ברירת המחדל של שלושת הכפתורים בדיאלוג מילוי\תיחול, בהתאם לאורך הקנולה שלכם.

#### טווח הצגה

Choose the high and low marks for the BG-graph on AAPS overview and smart watch. אפשרות זו היא רק להצגה נוחה, אין זה טווח המטרה עצמו. דוגמה: 70-180 מ"ג/ד"ל

#### קצר את כותרות הלשוניות

Choose whether the tab titles in AAPS are long (e.g. ACTIONS, LOCAL PROFILE, AUTOMATION) or short (e.g. ACT, LP, AUTO)

#### הצגת שדות הערות בתיבות דו-שיח של טיפול

בחרו אם ברצונכם לכתוב בשדה הערות בעת הזנת טיפולים.

#### אורות חיווי

Choose if you want to have [status lights](#Preferences-status-lights) on overview for cannula age, insulin age, sensor age, battery age, reservoir level or battery level. כאשר מגיעה רמת האזהרה, צבע נורית המצב יעבור לצהוב. גיל קריטי יוצג באדום.

#### הגדרות מתקדמות

**ספק את חלק זה מתוצאת אשף הבולוס[%]**: בעת שימוש ב-SMB, אנשים רבים אינם מזריקים את כל האינסולין הדרוש בבת אחת, אלא רק חלק ממנו (למשל 75%) ונותנים ל-SMB עם UAM (זיהוי ארוחות לא מוכרזות) לעשות את השאר. In this setting, you can choose a default value for the percentage the bolus wizard should calculate with. If this setting is 75 % and you had to bolus 10u, the bolus wizard will propose a meal bolus of only 7.5 units.

**Enable super bolus functionality in wizard** (It is different from *super micro bolus*!): Use with caution and do not enable until you learn what it really does. בעיקרון, המינון הבזאלי לשעתיים הקרובות מתווסף לבולוס ומופעל מינון בזאלי זמני 0 למשך שעתיים. **AAPS looping functions will be disabled - so use with care! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](#Open-APS-features-max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

(Config-Builder-actions)=

### פעולות

* לחצנים לגישה מהירה לפונקציות שימושיות.
* See [AAPS screenshots](#screens-action-tab) for details.

### אוטומציה

User defined automation tasks ('if-then-else'). Please [read on here](../DailyLifeWithAaps/Automations.md).

(Config-Builder-sms-communicator)=

### תקשורת SMS

Allows remote caregivers to control some AAPS features via SMS, see [SMS Commands](../RemoteFeatures/SMSCommands.md) for more setup information.

### מזון

Displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the AAPS calculator. (View only)

(Config-Builder-wear)=

### Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../UsefulLinks/WearOsSmartwatch.md)). Use settings (cog wheel) to define which variables should be considered when calculating bolus given though your watch (i.e. 15min trend, COB...).

אם אתם רוצים להזריק בולוס וכו' מהשעון, עליכם להפעיל את "שליטה משעון" בתוך "הגדרות Wear" בבונה התצורה.

![Wear settings](../images/ConfBuild_Wear.png)

Through Wear tab or hamburger menu (top left of screen, if tab is not displayed) you can

* לשלוח מחדש את כל הנתונים. שימושי אם השעון לא היה מחובר במשך זמן מה ואתם רוצים לעדכן את המידע שבשעון.
* לפתוח את ההגדרות בשעון ישירות מהטלפון שלך.

### שורת מצב xDrip (שעון)

Display loop information on your xDrip+ watchface (if you are not using AAPS/[AAPSv2 watchface](../UsefulLinks/WearOsSmartwatch.md)

### NSClient

* Setup sync of your AAPS data with Nightscout.
* Settings in [preferences](#Preferences-nsclient) can be opened by clicking the cog wheel.

### תחזוקה

Email and number of logs to be send. Normally no change necessary.

### בונה התצורה

Use tab for config builder instead of hamburger menu.