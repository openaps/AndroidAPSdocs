# שאלות נפוצות של לופרים

איך להוסיף שאלה: פעלו בהתאם ל[הוראות](../make-a-PR.md)

# כללי

## האם ניתן פשוט להוריד ולהתקין את קובץ ההתקנה של AndroidAPS?

לא. למעשה לא קיים קובץ התקנה (apk) להורדה עבור AndroidAPS, עליכם [לבנות](../Installing-AndroidAPS/Building-APK.md) את הקובץ בעצמכם. להלן הסיבה לכך:

היישום AndroidAPS שולט למעשה במשאבה וקובע את מתן האינסולין. בהתאם לרגולציה הקיימת באירופה, כל מערכת שמסווגת IIa או IIb היא מערכת רפואית שדורשת אישור של הרגולטור (סימון CE) ומחייבת שורה של מחקרים ואישורים. הפצה של מערכת שאינה מאושרת ע"י הרגולטור אינה חוקית. רגולציה דומה קיימת גם באיזורים אחרים בעולם.

הדרישות הרגולטוריות אינן מוגבלות למכירה (בתמורה תשלום) והיא חלה על כל סוג של הפצה (גם אם נעשית בחינם). בניה של מכשיר רפואי לשימוש עצמי היא ההחרגה היחידה שמאפשרת הימנעות מהדרישות הרגולטוריות.

זו הסיבה שקובץ התקנה apk אינו זמין להורדה.

(FAQ-how-to-begin)=

## איך להתחיל?

ראשית כל, יש להצטייד ב**ציוד המתאים ללופ**:

- [משאבת אינסולין הנתמכת על ידי המערכת](./Pump-Choices.md), 
- מכשיר [טלפון אנדרואיד](Phones.md) (מכשירי אפל iOS אינם נתמכים ע"י AndroidAPS ומומלץ לבדוק את השימוש ב-[iOS Loop](https://loopkit.github.io/loopdocs/) לשימוש באייפון)
- מד סוכר רציף (CGM) [הנתמך ע"י המערכת](../Configuration/BG-Source.md). 

שנית, יש **להגדיר את ההגדרות בהתאם לחומרה שבידכם**. ניתן לראות [דוגמאות להגדרות חומרה, צעד אחר צעד](Sample-Setup.md).

שלישית, יש להגדיר את **ההגדרות לרכיבי התוכנה**: AndroidAPS ומקור נתוני הסוכר מהחיישן.

רביעית, יש ללמוד ולהבין את **עקרונות השימוש ב-OpenAPS כדי לקבוע את הערכים המתאימים הטיפול**. העקרונות הבסיסיות של טיפול נכון באמצעות לולאה סגורה הן דיוק בהגדרת יחס האינסולין\פחמימה והתוכנית הבזאלית. כל ההמלצות הטיפוליות מניחות שהתוכנית הבזאלית נכונה ושינויים ברמת הסוכר הם תוצאה של גורמים אחרים, שמחייבים תיקון והתאמה (פעילות גופנית, לחץ וכיו"ב.). על התיקונים וההתאמות המבוצעים ע"י הלולאה הסגורה חלות מגבלות וכללים לשמירה על בטיחות הטיפול (למשל מקסימום אינסולין בזאלי זמני ב[הגדרות OpenAPS](https://openaps.org/reference-design/)), כך שלא יעשה שימוש בבולוס על מנת לתקן תכנון בזאלי שגוי או שאינו מתאים. אם לדוגמה, המערכת קובעת בזאלי זמני נמוך מהתוכנית לקראת ארוחה באופן תדיר, יתכן שיש צורך לשנותה ולהתאים את התוכנית הבזאלית. ניתן להשתמש בפונקציית [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) לקבלת ניתוח והמלצה על שינויים בתוכנית הבזאלית, ביחס התיקון וביחס אינסולין\פחמימה בהתאם לנתונים שנאספו על ידי המערכת. לחילופין, ניתן לבדוק, לנתח ולהתאים את התוכנית הבזאלית [בצורה הרגילה](https://integrateddiabetes.com/basal-testing/).

## מהן אפשרויות הלופינג (Looping) עומדות לרשותי?

### הגנה באמצעות סיסמה

על מנת למנוע אפשרות לשינוי ההעדפות ביתר קלות, ניתן להגן על תפריט ההעדפות באמצעות סיסמה, על ידי בחירת "סיסמה להעדפות" בתפריט ההעדפות והזנה של סיסמה לבחירתכם. בכניסה הבאה לתפריט ההעדפות, תידרשו סיסמא להמשך. להסרת ההגנה בסיסמה מאוחר יותר, ניתן להכנס לתפריט "סיסמה להעדפות" ולמחוק את הטקסט משדה הסיסמה.

### שעוני Android Wear

אם בכוונתכם להשתמש באפליקציית Android Wear לביצוע בולוס או שינויים בהגדרות, יש לוודא שהתראות מ-AndroidAPS אינן חסומות. אישור פעולות (למשל קביעת הגדרות או מתן בולוס) מבוצע באמצעות התראות.

(FAQ-disconnect-pump)=

### ניתוק משאבה

אם אתם מורידים את המשאבה לצורך מקלחת, רחצה, שחייה, ספורט או פעילויות אחרות, עליכם ליידע את AndroidAPS על כך ולעצור את מתן האינסולין כדי לשמור על אינסולין פעיל (IOB) תקין.

ניתן לעשות זאת ע"י לחיצה על סמל סטטוס הלופ ב[מסך הבית של AndroidAPS](Screenshots-loop-status).

### המלצות אינן מבוססות על קריאת סוכר יחידה מתוך חיישן הסוכר

לצורך שמירה על בטיחותכם, ההמלצות לטיפול אינן מבוססות על קריאת חיישן בודדת אלא על ממוצע שינויים של מספר מדידות. לפיכך, במקרה שיאבדו מספר קריאות סוכר ברצף, ייתכן ויעבור זמן מה לאחר חידוש הקשר עד ש-AndroidAPS יוכל להסתמך על הקריאות ולחזור להפעיל את הלולאה שוב.

### קריאה נוספת

קיימים מספר בלוגים בהם ניתן למצוא טיפים טובים לעזרה בהבנת המערכת ומצבי הלופ השונים:

- [שיפור הגדרות ה-looping](https://seemycgm.com/2017/10/29/fine-tuning-settings/) באתר See my CGM
- [מדוע DIA משמעותי](https://seemycgm.com/2017/08/09/why-dia-matters/) באתר See my CGM
- [צמצום קפיצת רמת הסוכר בארוחות](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) באתר DIYPS#
- [הורמונים ו-Autosens](https://seemycgm.com/2017/06/06/hormones-2/) באתר See my CGM

## איזה ציוד חירום מומלץ לשאת איתי?

ראשית, עליכם להצטייד בציוד החירום הרגיל, שכל סוכרתי שעושה שימוש במשאבת אינסולין ו-CGM נוהג לקחת איתו. בנוסף, כמשתמשי לופ העושים שימוש ב-AndroidAPS, מומלץ בחום להקפיד להצטייד או להחזיק בקרבת מקום את הפריטים הבאים:

- מטענים וסוללות חלופיות לטעינת הטלפון, השעון החכם, מכשיר הגישור ריילילינק וכו'
- סוללות למשאבה
- קובץ התקנה [APK](../Installing-AndroidAPS/Building-APK.md) עדכני ו[קובץ גיבוי הגדרות](../Usage/ExportImportSettings.md) של AndroidAPS ושל אפליקציות נוספות בהם אתם משתמשים (לדוגמה xDrip+, BYODA).

## כיצד להדביק היטב את החיישן?

ניתן להדביק את החיישן עם תוספת של סרט הדבקה. ישנן מספר מדבקות עם חירורים המיועדות לחיישנים נפוצים הניתנות לרכישה באינטרנט (חפשו בגוגל, אמזון ו-Ebay). לופרים רבים משתמשים בטייפ של קיבוע אינפוזיות (Tegaderm, Opsite), קינזיו-טייפ (Kinesiotape) או rocktape- מוצרים שניתן למצוא בכל בית מרקחת במחירים זולים יחסית.

ניתן לקבע את החיישן. ישנם גם צמידי זרוע שמחזיקים את החיישן על העור (חפשו בגוגל, אמזון ו-Ebay).

# הגדרות AAPS

The following list aims to help you optimize settings. It may be best to start at the top and work to the bottom. Aim to get one setting right before changing another. Work in small steps rather than making large changes at once. You can use [Autotune](https://autotuneweb.azurewebsites.net/) to guide your thinking, although it should not be followed blindly: it may not work well for you or in all circumstances. Note that settings interact with one another - you can have 'wrong' settings that work well together in some circumstances (e.g. if a too-high basal happens to be at the same time as a too-high CR) but do not in others. This means that you need to consider all the settings and check they work together in a variety of circumstances.

## משך פעילות האינסולין (DIA) (שעות)

### תיאור ובדיקה

The length of time that insulin decays to zero.

This is quite often set too short. Most people will want at least 5 hours, potentially 6 or 7.

(FAQ-impact)=

### השפעה

Too short DIA can lead to low BGs. And vice-versa.

If DIA is too short, AAPS thinks too early that your previous bolus is all consumed, and, at still elevated glucose, will give you more. (Actually, it does not wait that long, but predicts what would happen, and keeps adding insulin). This essentially creates ‘insulin stacking’ that AAPS is unaware of.

Example of a too-short DIA is a high BG followed by AAPS over-correcting and giving a low BG.

## תוכנית המינונים הבזאליים (יחידות\שעה)

### תיאור ובדיקה

The amount of insulin in a given hour time block to maintain BG at a stable level.

Test your basal rates by suspending loop, fasting, waiting for say 5 hours after food, and seeing how BG changes. Repeat a few times.

If BG is dropping, basal rate is too high. And vice-versa.

### השפעה

Too high basal rate can lead to low BGs. And vice-versa.

AAPS ‘baselines’ against the default basal rate. If basal rate is too high, a ‘zero temp’ will count as a bigger negative IOB than it should. This will lead to AAPS giving more subsequent corrections than it should to bring IOB ultimately to zero.

So, a basal rate too high will create low BGs both with the default rate, but also some hours hence as AAPS corrects to target.

Conversely a basal rate too low can lead to high BGs, and a failure to bring levels down to target.

## רגישות או יחס התיקון (ISF) (mg/dl/U)

### תיאור ובדיקה

The drop in BG expected from dosing 1U of insulin.

Assuming correct basal, you can test this by suspending loop, checking IOB is zero, and taking a few glucose tablets to get to a stable ‘high’ level.

Then take an estimated amount of insulin (as per current 1/ISF) to get to your target BG.

Be careful as this is quite often set too low. Too low means 1 U will drop BG faster than expected.

### השפעה

**Lower ISF** (i.e. 40 instead of 50) meaning insulin drops your BG less per unit. This leads to a more aggressive / stronger correction from the loop with **more insulin**. If the ISF is too low, this can lead to low BGs.

**Higher ISF** (i.e. 45 instead of 35) meaning insulin drops your BG more per unit. This leads to a less aggressive / weaker correction from the loop with **less insulin**. If the ISF is too high, this can lead to high BGs.

**Example:**

- ערך הסוכר הוא 190 mg/dl וערך המטרה הוא 100 mg/dl. 
- דרוש תיקון של ההפרש 90 (=190-100).
- ISF = 30 -> 90 / 30 = 3U
- ISF = 45 -> 90 / 45 = 2U

An ISF that is too low (not uncommon) can result in ‘over corrections’, because AAPS thinks it needs more insulin to correct a high BG than it actually does. This can lead to ‘roller coaster’ BGs (esp. when fasting). In this circumstance you need to increase your ISF. This will mean AAPS gives smaller correction doses, and this will avoid over-correcting a high BG resulting in a low BG.

Conversely, an ISF set too high can result in under-corrections, meaning your BG remains above target – particularly noticeable overnight.

## יחס אינסולין לפחמימות (IC) (gr/U)

### תיאור ובדיקה

The grams of carbohydrate for each unit of insulin.

Some people also use I:C as abbreviation instead of IC or talk about carb ratio (CR).

Assuming correct basal, you can test by checking IOB is zero and that you are in-range, eating exactly known carbs, and take an estimated amount of insulin based on current insulin to carb ratio. Best is to eat food your normally eat at that time of day and count its carbs precisely.

> **הערות:**
> 
> במספר מדינות אירופאיות, השתמשו "ביחידות לחם" כדי לחשב את מינון האינסולין לארוחות. בהתחלה ערך יחידת לחם היתה 12 גרם פחמימות, מאוחר יותר הוחלט לשנות את ערכה ל-10 גרם.
> 
> במודל חישוב זה, כמות הפחמימות היה זה שקבוע וכמות האינסולין היתה משתנה. ("כמה אינסולין דרוש לכיסוי יחידת לחם אחת?")
> 
> בשימוש ב-IC, כמות האינסולין היא שקבועה וכמות הפחמימות משתנה. ("כמה גרם פחמימה מכוסים ע"י יחידת אינסולין אחד?")
> 
> לדוגמה:
> 
> כשיחס יחידת הלחם (יחידת לחם=12 גרם) הוא 2.4 יח' אינסולין\יח' לחם -> דרושים 2.4 יחידות אינסולין לכיסוי יחידת לחם.
> 
> יחס הפחמימות המקביל: 12 גרם\2.4 יח' = 5 גרם\יח' -> 5 גרם פחמימות מכוסים ע"י יחידת אינסולין אחת.
> 
> יחס לחם 2.4 יח'\12 גר' ===> יחס פחמימות = 12 גרם\2.4 יח'=5 גרם\יח'
> 
> ניתן למצוא טבלאות מעבר בין המערכות [כאן](https://www.mylife-diabetescare.com/files/media/03_Documents/11_Software/FAS/SOF_FAS_App_KI-Verha%CC%88ltnis_MSTR-DE-AT-CH.pdf).

### השפעה

**Lower IC** = less food per unit, i.e. you are getting more insulin for a fixed amount of carbs. Can also be called ‘more aggressive’.

**Higher IC** = more food per unit, i.e. you are getting less insulin for a fixed amount of carbs. Can also be called ‘less aggressive’.

If after meal has digested and IOB has returned to zero, your BG remains higher than before food, chances are IC is too large. Conversely if your BG is lower than before food, IC is too small.

# אלגוריתם APS (מערכת לבלב מלאכותי)

## מדוע רשום "dia:3" בלשונית "OPENAPS AMA" למרות שה-DIA שבפרופיל שונה?

![AMA 3h](../images/Screenshot_AMA3h.png)

In AMA, DIA actually doesn't mean the 'duration of insulin acting'. It is a parameter, which used to be connected to the DIA. Now, it means, 'in which time should the correction be finished'. It has nothing to do with the calculation of the IOB. In OpenAPS SMB, there is no need for this parameter any longer.

## פרופיל

### למה להשתמש במשך פעילות אינסולין של 5 שעות במקום 2-3 שעות?

שאלה זו מוסברת היטב [במאמר זה](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/). אל תשכחו ללחוץ על `הפעל פרופיל` אחרי ביצוע שינוי ב-DIA.

### מה גורם ללופ להוריד את רמת הסוכר עד להיפוגליקמיה ללא פחמימות פעילות?

לפני הכל, בדקו את המינונים הבזאליים ובצעו מבחן מינונים בזאליים בצום. אם מצאתם שהמינון הבזאלי תקין, התנהגות זו תיגרם בגלל ISF נמוך מדי. ערך ISF נמוך טיפוסי נראה כך:

![ISF too low](../images/isf.jpg)

### מה גורם לעליות גדולות אחרי ארוחות עם לולאה סגורה?

לפני הכל, בדקו את המינונים הבזאליים ובצעו מבחן מינונים בזאליים בצום. אם מצאתם שהם נכונים והסוכר נופל אל המטרה לאחר ספיגה מלאה של הפחמימות, נסו להפעיל מטרה זמנית 'אוכלים בקרוב' ב-AndroidAPS זמן מסויים לפני הארוחה או שתתייעצו עם האנדוקרינולוג שלכם על בולוס קדם-ארוחה מתאים. אם הסוכר גבוה מדי לאחר ארוחה ועדיין גבוה לאחר ספיגה מלאה, חשבו על להוריד את יחס הפחמימות, בייעוץ עם אנדוקרינולוג. אם הסוכר גבוה בזמן שיש עדיין פחמימות פעילות ונמוך אחרי סיום ספיגת הפחמימות, חשבו על להעלות את ה-IC ולבצע בולוס קדם-ארוחה בייעוץ עם אנדוקרינולוג.

# הגדרות אחרות

## הגדרות Nightscout

### בלשונית NSClient רשום 'not allowed' ונתונים לא נשלחים ל-Nightscout. מה אפשר לעשות?

בלשונית NSClient בדקו את 'הגדרות חיבור'. יכול להיות שאתם כרגע משתמשים ברשת אלחוטית שלא מאפשרת פעילות או שהפעלתם 'במצב טעינה בלבד' וכבל הטעינה לא מחובר.

## הגדרות חיישנים

### Why does AAPS say 'BG source doesn't support advanced filtering'?

If you do use another CGM/FGM than Dexcom G5 or G6 in xDrip native mode, you'll get this alert in AAPS OpenAPS-tab. See [Smoothing blood glucose data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) for more details.

## משאבה

### היכן למקם את המשאבה?

There are innumerable possibilities to place the pump. It does not matter if you are looping or not.

### סוללות

Looping can reduce the pump battery faster than normal use because the system interacts through bluetooth far more than a manual user does. It is best to change battery at 25% as communication becomes challenging then. You can set warning alarms for pump battery by using the PUMP_WARN_BATT_P variable in your Nightscout site. Tricks to increase battery life include:

- הפחיתו את משך זמן התצוגה של מסך המשאבה (ההגדרה בגוף המשאבה)
- הפחיתו את משך זמן תאורת המסך של המשאבה (ההגדרה בגוף המשאבה)
- הגדירו שהתראות תהינה צפצופים במקום רטט (ההגדרה בגוף המשאבה)
- only press the buttons on the pump to reload, use AAPS to view all history, battery level and reservoir volume.
- AAPS app may often be closed to save energy or free RAM on some phones. When AAPS is reinitialized at each startup it establishes a Bluetooth connection to the pump, and re-reads the current basal rate and bolus history. פעולה זו צורכת סוללה. אם זה קורה, גשו לתפריט העדפות > NSClient > אפשרו את 'רשום הפעלת AAPS ב-Nightscout'. Nightscout will receive an event at every restart of AAPS, which makes it easy to track the issue. To reduce this happening, whitelist AAPS app in the phone battery settings to stop the app power monitor closing it down.
    
    לדוגמה, לצורך ביטול מיטוב הסוללה במכשיר סמסונג המריץ אנדרואיד 11:
    
    - גשו להגדרות > יישומים > גללו ובחרו את AndroidAPS > סוללה > טיוב סוללה > בחרו בתפריט ''הכל' 
    - גללו עד למציאת AndroidAPS
    - כבו את המתג שבשורה הזו
    - בנוסף, גשו להגדרות > יישומים > תפריט (⁝) > גישה מיוחדת > טיוב סוללה
    - בחרו בתפריט ב-'כולם', גללו עד למציאת AndroidAPS וודאו שהמתג שלו אינו פעיל.

- נקו את מגעי הסוללה עם מטלית עם אלכוהול כדי לוודא שלא נשארו שאריות שומן וכו'.

- עבור משאבות [ Dana R / RS](../Configuration/DanaRS-Insulin-Pump.md) הליך ההפעלה שואב זרם גבוה דרך הסוללה כדי לשבור במכוון את סרט הפסיבציה (מונע אובדן אנרגיה בזמן האחסון), אך לא תמיד פועל לשבירתו ב -100%. הוציאו והחזירו את הסוללה 2-3 פעמים עד להופעת 100% על המסך, או, לפני הכנסתה, געו בשני מסופי הסוללה בעזרת מפתח לזמן קצר מאוד, כדי לגרום לקצר רגעי.
- see also more tips for [particular types of battery](Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)

### החלפת מכלים וצינוריות

The change of cartridge cannot be done via AAPS but must be carried out as before directly via the pump.

- Long press on "Open Loop"/"Closed Loop" on the Home tab of AAPS and select 'Suspend Loop for 1h'
- Now nnect the pump and change the reservoir as per pump instructions.
- בצעו גם תיחול (Prime) של הצינורית ישירות במשאבה (במשאבות תומכות). In this case use [PRIME/FILL button](CPbefore26-pump) in the actions tab just to record the change.
- לאחר החיבור מחדש של המשאבה, הפעילו את הלולאה מחדש על ידי לחיצה על צלמית הלולאה ובחירת חיבור מחדש.

The change of a cannula however does not use the "prime infusion set" function of the pump, but fills the infusion set and/or cannula using a bolus which does not appear in the bolus history. This means it does not interrupt a currently running temporary basal rate. On the Actions (Act) tab, use the [PRIME/FILL button](CPbefore26-pump) to set the amount of insulin needed to fill the infusion set and start the priming. If the amount is not enough, repeat filling. You can set default amount buttons in the Preferences > Other > Fill/Prime standard insulin amounts. See the instruction booklet in your cannula box for how many units should be primed depending on needle length and tubing length.

## טפט

תוכלו למצוא את הטפט של AAPS למכשירכם [בעמוד הטלפונים](Phones-phone-background).

## שימוש יום-יומי

### היגיינה

#### מה עושים כשרוצים להתקלח?

ניתן להסיר את המשאבה בזמן מקלחת וטבילה באמבט (לא רלוונטי למשתמשי אומניפוד). במשך פרק הזמן הקצר הזה אולי לא תזדקקו לכך, אך עליכם להודיע ל-AAPS שהתנתקתם כדי שחישובי IOB יהיו נכונים. ראו [הסבר מעלה](FAQ-disconnect-pump).

### בעבודה

Depending on your job, you may choose to use different treatment factors on workdays. As a looper you should consider a [profile switch](../Usage/Profiles.md) for your typical working day. For example, you may switch to a profile higher than 100% if you have a less demanding job (e.g. sitting at a desk), or less than 100% if you are active and on your feet all day. You could also consider a high or low temporary target or a [time shift of your profile](Profiles-time-shift) when working much earlier or later than regular, of if you work different shifts. You can also create a second profile (e.g. 'home' and 'workday') and do a daily profile switch to the profile you actually need.

## פעילויות פנאי

(FAQ-sports)=

### ספורט

You have to rework your old sports habits from pre-loop times. If you simply consume one or more sports carbs as before, the closed loop system will recognize them and correct them accordingly.

So, you would have more carbohydrates on board, but at the same time the loop would counteract and release insulin.

When looping you should try these steps:

- בצעו [החלפת פרופיל](../Usage/Profiles.md) < 100%.
- Set an [activity temp target](temptarget-activity-temp-target) above your standard target.
- If you are using SMB make sure ["Enable SMB with high temp targets"](Open-APS-features-enable-smb-with-high-temp-targets) and ["Enable SMB always"](Open-APS-features#enable-smb-always) are disabled.

Pre- and post-processing of these settings is important. Make the changes in time before sport and consider the effect of muscle filling.

If you do sports regularly at the same time (i.e. sports class in your gym) you can consider using [automation](../Usage/Automation.md) for profile switch and TT. Location based automation might also be an idea but makes preprocessing more difficult.

The percentage of the profile switch, the value for your activity temp target and best time for the changes are individual. Start on the safe side if you are looking for the right value for you (start with lower percentage and higher TT).

### יחסי מין

ניתן להסיר את המשאבה כדי להרגיש יותר חופשיים אך עליכם להודיע ל-AAPS על כך "כניתוק" כדי שלא יחולו טעויות בחישובי האינסולין הפעיל. ראו [הסבר מעלה](FAQ-disconnect-pump).

### שתיה חריפה

שתיית אלכוהול עשויה להיות מסוכנת בשימוש בלולאה סגורה כיוון שהאלגוריתם לא יכול לחזות נכונה את השפעת האלכוהול על הסוכר בדם. נסו את השיטות הבאות כדי להבין איזו מהן עדיפה לכם:

- השביתו את הלופ הסגור וטפלו בסוכרת בלעדיו או
- הגדירו ערכי מטרה גבוהים, כבו את UMA כדי למנוע מהלופ להעלות את האינסולין הפעיל עקב ארוחה או
- הפעילו פרופיל זמני של פחות מ-100% 

כשאתם שותים אלכוהול, עליכם לשים עין על נתוני הסוכר כדי להמנע מהיפוגליקמיה כתוצאה מאכילת פחמימות.

### שינה

#### איך ניתן להשתמש בלופ בלילה בלי להיחשף לקרינה סלולרית או WiFi?

משתמשים רבים מפעילים את מצב המטוס של מכשירם בלילה. אם ברצונכם להשתמש בלופ בשעות השינה, עקבו אחר ההוראות מטה (חשוב שמקור הסוכר יהיה מקומי כמו xDrip או BYODA ולא נייטסקאוט כמקור הנתונים):

1. הפעילו מצב טיסה במכשירכם.
2. המתינו להפעלת מצב טיסה.
3. הפעילו בלוטות'.

You are not receiving calls now, nor are you connected to the internet. But the loop is still running.

Some people have discovered problems with local broadcast (AAPS not receiving BG values from xDrip+) when phone is in airplane mode. Go to Settings > Inter-app settings > Identify receiver and enter `info.nightscout.androidaps`.

![xDrip+ Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

### נסיעות

#### כיצד להתמודד עם שינויי אזורי זמן?

With Dana R and Dana R Korean you don't have to do anything. For other pumps see [time zone travelling](../Usage/Timezone-traveling.md) page for more details.

## נושאים רפואיים

### אשפוזים

אם ברצונכם לשתף מידע על AAPS ועל לופים עם הרופאים שלכם, תוכלו להדפיס את [המדריך ל-AndroidAPS עבור קלינאים](../Resources/clinician-guide-to-AndroidAPS.md).

### פגישה עם אנדוקרינולוג

#### דיווח

ניתן להציג לרופא את הדוחות של Nightscout בכתובת https://YOUR-NS-SITE.com/report או להשתמש ב-[Nightscout Reporter](https://nightscout-reporter.zreptil.de/).

# שאלות נפוצות שנשאלו ב-Discord

## הבעיה שלי לא כלולה כאן.

[מידע לקבלת עזרה.](Connect-with-other-users-i-m-getting-stuck-what-do-i-do-who-can-i-ask)

## הבעיה שלי לא מופיעה כאן אבל מצאתי פתרון

[מידע לקבלת עזרה.](Connect-with-other-users-i-m-getting-stuck-what-do-i-do-who-can-i-ask)

**הזכירו לנו להוסיף את הפתרון שלכם לרשימה זו!**

## AAPS עוצר כל יום בערך באותה שעה.

Stop Google Play Protect. Check for "cleaning" apps (ie CCleaner etc) and uninstall them. AAPS / 3 dots menu / About / follow the link "Keep app running in the background" to stop all battery optimizations.

## איך לארגן את הגיבויים שלי?

Export settings very regularly: after each pod change, after modifying your profile, when you have validated an objective, if you change your pump… Even if nothing changes, export once a month. Keep several old export files.

Copy on an internet drive (Dropbox, Google etc) : all the apks you used to install apps on your phone (AAPS, xDrip, BYODA, Patched LibreLink…) as well as the exported setting files from all your apps.

## יש לי בעיות ושגיאות בבניית האפליקציה.

Please

- check [Troubleshooting Android Studio](troubleshooting_androidstudio-troubleshooting-android-studio) for typical errors and
- הטיפים שב[מדריך הבניה שלב אחר שלב](https://docs.google.com/document/d/1oc7aG0qrIMvK57unMqPEOoLt-J8UT1mxTKdTAxm8-po).

## אני תקוע\ה במשימה וצריכ\ה עזרה.

Screen capture the question and answers. Post-it on the Discord AAPS channel. Don't forget to tell which options you choose (or not) and why. You'll get hints and help but you'll need to find the answers.

## כיצד לאפס את הסיסמה ב-AAPS v2.8.x?

Open the hamburger menu, start the Configuration wizard and enter new password when asked. You can quit the wizard after the password phase.

## כיצד לאפס את הסיסמה ב-AAPS v3.x?

You find the documentation [here](update3_0-reset-master-password).

## מכשיר הקישור\משאבה\פוד שלי לא מגיב (RileyLink/OrangeLink/EmaLink...)

With some phones, there are Bluetooth disconnects from the Links (RL/OL/EmaL...).

Some also have non responsive Links (AAPS says that they are connected but the Links can't reach or command the pump.)

The easiest way to get all these parts working together is : 1/ Delete Link from AAPS 2/ Power off Link 3/ AAPS 3 dot menu, quit AAPS 4/ Long press AAPS icon, Android menu, info on app AAPS, Force stop AAPS and then Delete cache memory (Do not delete main memory !) 4bis/ Rarely some phones may need a reboot here. You can try without reboot. 5/Power on Link 6/Start AAPS 7/Pod tab, 3 dot menu, search and connect Link

## שגיאת בבנייה: שם הקובץ ארוך מדי

While trying to build I get an error stating the file name is too long. Possible solutions: Move your sources to a directory closer to the root directory of your drive (e.g. "c:\src\AndroidAPS-EROS").

From Android Studio: Make sure "Gradle" is done syncing and indexing after opening the project and pulling from GitHub. Execute a Build->Clean Project before doing a Rebuild Project. Execute File->Invalidate Caches and Restart Android Studio.

## התראה: פועל בגרסת הפיתוח. לולאה סגורה מושבתת

AndroidAPS אינו פועל ב"מצב מפתחים". AAPS מציג את ההודעה הבאה: "מריץ את גרסת הפיתוח. לולאה סגורה מושבתת".

ודאו ש-AndroidAPS פועל ב"מצב מפתחים": מקמו קובץ בשם "engineering_mode" בנתיב "AAPS/extra". כל קובץ יצליח כל עוד הוא נקרא כראוי. הקפידו להפעיל מחדש את AndroidAPS כדי שימצא את הקובץ ויעבור ל"מצב מפתחים".

רמז: צרו עותק של קובץ יומן קיים ושנו את שמו ל-"engineering_mode" (שים לב: אין סיומת לשם הקובץ! ושיש רק קו תחתון אחד בשם).

## איפה אפשר למצוא קבצי הגדרות?

Settings files will be stored on your phone's internal storage in the directory "/AAPS/preferences". WARNING: Make sure not to lose your password as without it you will not be able to import an encrypted settings file!

## כיצד להגדיר חיסכון בסוללה?

Properly configuring Power Management is important to prevent your Phone's OS to suspend AAPS and related app's and services when your phone is not being used. As a result AAPS can not do its work and/or Bluetooth connections for sensor and Rileylink (RL) may be shut down causing "pump disconnected" alerts and communication errors. On the phone, go to settings->Apps and disable battery savings for: AAPS xDrip or BYODA/Dexcom app The Bluetooth system app (you may need to select for viewing system apps first) Alternatively, fully disable all battery savings on the phone. As a result your battery may drain faster but it is a good way to find out if battery savings is causing your problem. The way battery savings is implemented greatly depends on the phone's brand, model and/or OS version. Because of this it is almost impossible to give instructions to properly set battery savings for your setup. Experiment on what settings work best for you. For additional information, see also Don't kill my app

## התראות המשאבה אינה זמינה מופיעות מספר פעמים ביום או בלילה.

Your phone may be suspending AAPS services or even Bluetooth causing it to loose connection to RL (see battery savings) Consider configuring unreachable alerts to 120 minutes by going to the top right-hand side three-dot menu, selecting Preferences->Local Alerts->Pump unreachable threshold [min].

## היכן אוכל למחוק טיפולים ב-AAPS v3?

3 dots menu, select treatements, then 3 dots menu again and you have different options available.

## הגדרה ושימוש באפליקציית NSClient מרחוק

AAPS can be monitored and controlled remotely via the NSClient app and optionally via the associated Wear app running on Android Wear watches. Note that the NSClient (remote) app is distinct from the NSClient configuration in AAPS, and the NSClient (remote) Wear app is distinct from the AAPS Wear app--for clarity the remote apps will be referred to as 'NSClient remote' and 'NSClient remote Wear' apps.

To enable NSClient remote functionality you must: 1) Install the NSClient remote app (the version should match the version of AAPS being used) 2) Run the NSClient remote app and proceed through the configuration wizard to grant required permissions and configure access to your Nightscout site. 3) At this point you may want to disable some of the Alarm options, and/or advanced settings which log the start of the NSClient remote app to your Nightscout site. Once this is done, NSClient remote will download Profile data from your Nightscout site, the 'Overview' tab will display CGM data and some AAPS data, but but may not display graph data, and will indicate that a profile isn't yet set. 4) To activate the profile:

- אפשרו סנכרון פרופיל מרחוק ב-AAPS > מסך NSClient > תפריט 3 נקודות או גלגל שיניים > העדפות NSClient > סינכרון 
- הפעילו את הפרופיל בעוקב NSClient > פרופיל לאחר שתעשו כך, הפרופיל יוגדר, ועוקב NSClient אמור להציג את כל הנתונים מ-AAPS. רמז: אם הגרף עדיין חסר, נסו לשנות את הגדרות הגרף כדי לאלץ עדכון. (5) כדי לאפשר שליטה מרחוק על ידי NSClient, הפעילו באופן סלקטיבי את האפשרויות של AAPS (שינויי פרופיל, ערכי מטרה זמניים, פחמימות וכו') שבהם תרצו להיות מסוגלים לשלוט מרחוק דרך AAPS > מסך NSClient > תפריט 3 נקודות או גלגל שיניים > העדפות NSClient > סינכרון. לאחר ביצוע שינויים אלה, תוכלו לשלוט מרחוק ב-AAPS באמצעות אתר Nightscout או אפליקציית NSClient.

If you'd like to monitor/control AAPS via the NSClient remote Wear App, you'll need both NSClient remote and the associated Wear app to be installed. To compile the NSClient remote Wear app, follow the standard instructions for installing/configuring the AAPS wear app, except when compiling it, choose the NSClient variant.

## יש לי משולש אדום \ AAPS לא מאפשר לולאה סגורה \ לולאות נשארות בהשהייה עקב סוכר נמוך \ יש לי משולש צהוב

The red and yellow triangles are a security feature in AAPS v3.

Red triangle means that you have duplicate BGs and AAPS can't calculate precisely the deltas. You can't close the loop. You need to delete one BG of each duplicated value in order to clear the red triangle. Go to BYODA or xDRIP tab, long press one line you want to delete, check one of each lines that are doubled (or via 3 dots menu and Delete, depending on your AAPS version). You may need to reset the AAPS databases if there are too many double BGs. In this case, you'll also loose stats, IOB, COB, selected profile.

Possible origin of the problem: xDrip and/or NS backfilling BGs.

The yellow triangle means unstable delay between each BG reading. You don't receive BGs every 5 min regularly or missing BGs. It is often a Libre problem. It also happens when you change G6 transmitter. If the yellow triangle is related to the G6 tansmitter change, it will go away by itself after several hours (around 24h). In case of Libre, the yellow triangle will stay. The loop can be closed and works correctly.

## האם אפשר להעביר פוד Dash פעיל למכשיר אחר?

This is possible. Note that as moving is "unsupported" and "untested" there is some risk involved. Best to try the procedure when your Pod is about to expire so when things go wrong not much is lost.

Critical is that pump "state" (which includes it's MAC address) in AAPS and DASH match on reconnecting

## נוהל הביצוע:

1) Suspend the DASH pump. This makes sure there are no running or queued commands active when DASH loses connection 2) Put the phone into airplane mode to disable BT (as well as WiFi and Mobile data). This way it is guaranteed AAPS and DASH can not communicate. 3) Export settings (which includes the DASH state) 4) Copy the settings file just exported from the phone (as it is in airplane mode and we do not want to change that, easiest way is using USB cable) 5) Copy the settings file to the alternate phone. 6) Import settings on the alternate phones AAPS. 7) Check the DASH tab to verify it is seeing the Pod. 8) Un-suspend the Pod. 9) Check the DASH tab and confirm it is communicating with the Pod (use the refresh button)

Congratulations: you did it!

*Wait!* You still have the main phone thinking it can reconnect to the same DASH:

1) On the main phone choose "deactivate". This is safe because the phone has no way of communicating with DASH to actually deactivated the Pod (it is still in airplane mode) 2) Deactivation will result in a communications error - this is expected. 3) Just hit "retry" a couple of times until AAPS offers the option to "Discard" the Pod.

When Discarded, verify AAPS is reporting "No Active Pod". You can now safely disable airplane mode again.

## כיצד לייבא הגדרות מגרסאות קודמות של AAPS ל-AAPS v3?

ניתן לייבא רק הגדרות (ב-AAPS v3) שיוצאו באמצעות AAPS v2.8x או v3.x. אם השתמשתם בגרסה ישנה מ-v2.8x או שאתם צריכים להשתמש בייצוא הגדרות ישנות יותר מ-v2.8x, עליכם להתקין תחילה את AAPS v2.8. ייבאו את ההגדרות הישנות יותר של v2.x ב-v2.8. לאחר בדיקה שהכל תקין, תוכלו לייצא הגדרות מגרסה 2.8. התקינו את AAPS v3 וייבאו הגדרות v2.8 ב-v3.

אם אתם משתמשים באותו מפתח לבניית אפליקציות v2.8 ו-v3, אפילו לא תצטרכו לייבא הגדרות. תוכלו להתקין בדריסה את גרסה 3 על גרסה 2.8.

נוספו מספר משימות חדשות. תצטרכו להשלים אותן.