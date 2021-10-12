# שאלות נפוצות של לופרים

איך להוסיף שאלה: פעלו בהתאם ל[הוראות](../make-a-PR.md)

# כללי

## האם ניתן פשוט להוריד ולהתקין את קובץ ההתקנה של AndroidAPS?

לא. למעשה לא קיים קובץ התקנה (apk) להורדה עבור AndroidAPS, עליכם [לבנות](../Installing-AndroidAPS/Building-APK.md) את הקובץ בעצמכם. הנה הסיבה לכך:

היישום AndroidAPS שולט למעשה במשאבה וקובע את מתן האינסולין. בהתאם לרגולציה הקיימת, באירופה, כל מערכת שמסווגת IIa או IIb היא מערכת רפואית שדורשת אישור של הרגולטור (סימון CE) ושמחייבת שורה של מחקרים ואישורים. הפצה של מערכת שאינה מאושרת ע"י הרגולטור אינה חוקית. רגולציה דומה קיימת גם באיזורים אחרים בעולם.

הדרישות הרגולטוריות אינן מוגבלות למכירה (בתמורה תשלום) והיא חלה על כל סוג של הפצה (גם אם נעשית בחינם). בניה של מכשיר רפואי לשימוש עצמי הוא החריג היחיד שמאפשר להימנע מהדרישות הרגולטוריות.

זו הסיבה שקובץ התקנה apk אינו זמין להורדה.

## איך להתחיל?

ראשית כל, יש להצטייד ב**ציוד\חומרה הנדרשים**:

* משאבת אינסולין [הנתמכת על ידי המערכת](./Pump-Choices.md) 
* מכשיר [טלפון אנדרואיד](Phones.md) (מכשירי אפל iOS אינם נתמכים ע"י AndroidAPS ומומלץ לבדוק את השימוש ב-[iOS Loop](https://loopkit.github.io/loopdocs/) לשימוש באייפון) 
* מד סוכר רציף (CGM) [הנתמך ע"י המערכת](../Configuration/BG-Source.rst) 

שנית, יש לקבוע את **ההגדרות (setup) לחומרה**. ניתן לראות [דוגמאות להגדרות חומרה, צעד אחר צעד](Sample-Setup.md).

שלישית, יש לקבוע את **ההגדרות לרכיבי התוכנה**: AndroidAPS ומקור נתוני הסוכר מהחיישן.

רביעית, יש ללמוד ולהבין את **עקרונות ה-OpenAPS ולקבוע את מקדמי הטיפול**. עקרונות הבסיס של טיפול נכון באמצעות לולאה סגורה הם דיוק בהגדרת יחס האינסולין\פחמימה והתוכנית הבזאלית. כל ההמלצות הטיפוליות מניחות שהתוכנית הבזאלית נכונה ושינויים ברמת הסוכר הם תוצאה של גורמים אחרים, שמחייבים תיקון והתאמה (פעילות גופנית, לחץ וכיו"ב.). התיקונים וההתאמות המבוצעים ע"י הלולאה הסגורה מוגבלים בחוקים וכללים לשמירה על הבטיחות (למשל מקסימום אינסולין בזאלי זמני ב[הגדרות OpenAPS](https://openaps.org/reference-design/)), כך שלא יעשה שימוש בבולוס על מנת לתקן תכנון בזאלי שגוי או שאינו מתאים. אם, לצורך ההדגמה, המערכת קובעת בזאלי זמני נמוך מהתוכנית לקראת ארוחה באופן תדיר, יתכן שיש צורך לשנות ולהתאים את התוכנית הבזאלית. ניתן להשתמש בפונקציית [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) לקבלת ניתוח והמלצה על שינויים בתוכנית הבזאלית, ביחס התיקון וביחס אינסולין\פחמימה בהתאם לנתונים שנאספו על ידי המערכת. לחילופין, ניתן לבדוק, לנתח ולהתאים את התוכנית הבזאלית [בצורה הרגילה](https://integrateddiabetes.com/basal-testing/).

## מהן אפשרויות הלופינג (Looping) עומדות לרשותי?

### הגנה באמצעות סיסמה

על מנת למנוע אפשרות לשינוי ההעדפות ביתר קלות, ניתן להגן על תפריט ההעדפות באמצעות סיסמה, על ידי בחירת "סיסמה להעדפות" בתפריט ההעדפות והזנה של סיסמה לבחירתכם. בכניסה הבאה לתפריט ההעדפות, תידרש סיסמא להמשך. להסרת ההגנה בסיסמה מאוחר יותר, ניתן להכנס לתפריט "סיסמה להעדפות" ולמחוק את הטקסט משדה הסיסמא.

### שעוני Android Wear

אם בכוונתכם להשתמש באפליקציית Android Wear לביצוע בולוס או שינויים בהגדרות, יש לוודא שהתראות אינן חסומות ב-AndroidAPS. מאחר ואישור פעולות (למשל קביעת הגדרות או מתן בולוס) ממומש באמצעות התראות.

### ניתוק משאבה

למקרה שתרצו להסיר את המשאבה מהגוף לצורך מקלחת\שחיה\ספורט וכו'. עליכם להודיע ל-AndroidAPS שאינסולין לא יוזרק ע"מ לשמור שלא תחול טעות בכמות האינסולין הפעיל בגוף.

* לחצו לחיצה ארוכה על כפתור הלופ (צלמית עגולה, ירוקה או כחולה) בראש מסך הבית. 
* בחרו **'ניתוק משאבה למשך XY דקות'**
* פעולה זו תקבע בזאלי 0 למשך הזמן שנקבע.
* המשך המינימלי של ניתוק תלוי במשך המינימלי של המינון הבזאלי הזמני שהמשאבה מאפשרת. לכן, אם ברצונכם לנתק את המשאבה לזמן קצר יותר, עליכם לבחור את המשך הקצר ביותר שהמשאבה שלכם יכולה לקבל ולחבר מחדש באופן ידני כמתואר מטה.
* כפתור "לולאה סגורה" (או "לולאה פתוחה") יהפוך לאפור ויציג את זמן הניתוק הנותר.
* AAPS יחבר את המשאבה מחדש לאחר הזמן הנבחר באופן אוטומטי והלולאה הסגורה תתחיל לעבוד שוב.
    
    ![Disconnect pump](../images/PumpDisconnect.png)

* אם המשך שבחרתם היה ארוך מדי, ניתן לחבר מחדש ידנית מבלי להמתין.

* לחצו לחיצה ארוכה על הצלמית העגולה האפורה.
* בחרו 'חיבור משאבה מחדש'
    
    ![Reconnect pump](../images/PumpReconnect.png)

### המלצות אינן מבוססות על קריאת סוכר יחידה מתוך חיישן הסוכר

לצורך שמירה על ביטחונך, ההמלצות לטיפול אינן מבוססות על קריאת חיישן בודדת אלא על ממוצע שינוי של מספר מדידות. לפיכך, במקרה שיאבדו מספר קריאות סוכר ברצף, ייתכן ויעבור זמן מה לאחר חידוש הקשר עד ש-AndroidAPS יוכל להסתמך על הקריאות ולחזור להפעיל את הלולאה שוב.

### קריאה נוספת

קיימים מספר בלוגים בהם ניתן למצוא טיפים טובים לעזרה בהבנת המערכת ומצבי הלופ השונים:

* [שיפור הגדרות ה-looping](https://seemycgm.com/2017/10/29/fine-tuning-settings/) באתר See my CGM
* [מדוע DIA משמעותי](https://seemycgm.com/2017/08/09/why-dia-matters/) באתר See my CGM
* [צמצום קפיצת רמת הסוכר בארוחות](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) באתר DIYPS#
* [הורמונים ו-Autosens](https://seemycgm.com/2017/06/06/hormones-2/) באתר See my CGM

## איזה ציוד חירום מומלץ לשאת איתי?

ראשית דבר, עליך להצטייד בציוד החירום הרגיל, שכל סוכרתי שעושה שימוש במשאבת אינסולין ו-CGM נוהג לקחת איתו. בנוסף, כמשתמשי לופ העושים שימוש ב-AndroidAPS, מומלץ בחום להקפיד להצטייד או להחזיק בקרבת מקום את הפריטים הבאים:

* סוללות מתאימות לשימוש או לטעינה של הטלפון הנייד, השעון החכם ומתאם הבלוטות' במידה ויש
* גיבוי באפליקציית ענן (Dropbox, Google Drive...) של כל האפליקציות שמשמשות אותך: אפליקציית AndroidAPS (קובץ APK) עדכנית וסיסמאות, קובץ הגדרות AndroidAPS, קובץ הגדרות xDrip, אפליקציית Patched Dexcom וכו'
* סוללות למשאבה

## כיצד להבטיח חיבור טוב של CGM/FGM לגוף?

הדבקה: ניתן להצמיד את הסנסור לגוף באמצעות מדבקות או מוצרים שונים שמותאמים במיוחד למטרה זו (חפשו באמזון, eBay וכו'). לופרים רבים משתמשים בטייפ של קיבוע אינפוזיות (Tegaderm, Opsite), קינזיו-טייפ (kinesiotape) או רוקטייפ - מוצרים שניתן למצוא בכל בית מרקחת במחירים זולים יחסית.

קיבוע: קיימים פתרונות קיבוע לסנסור CGM/FGM המותקן בזרוע, כגון רצועת גומי מותאמת (חפשו ב-google או eBay).

# הגדרות AndroidAPS

הרשימה הבאה מסכמת את שלבי האופטימיזציה של הפרופיל שלכם. מומלץ לבצע את התהליך לפי הסדר הרשום מטה. חשוב לסיים לקבוע כל הגדרה לפני שמתקדמים להגדרה הבאה. יש לבצע שינויים קטנים בהדרגה ולהמנע משינויים גדולים בכל פעם. ניתן להשתמש ב-[Autotune](https://autotuneweb.azurewebsites.net/) כאמצעי להנחייה בקביעת ההגדרות אך חשוב לבחון כל מקרה לגופו ולא לאמץ את ההמלצות באופן אוטומטי. יתכן שלא בכל המקרים ההמלצות יתאימו לך. ההגדרות יכולות להשפיע אחת על השניה - יתכן מצב שמספר הגדרות שמוגדרות בצורה שגויה מפצות אחת על השניה ומביאות לתוצאה חיובית (למשל בזאלי גבוה מדי יחד עם יחס אינסולין\פחמימה (IC) גבוה מדי) ויתכן מצב שההשפעה ההדדית של הגדרות תהיה שלילית. לפיכך, תמיד חשוב לשים לב לכל ההגדרות ולוודא שהן תקינות ושביחד הן נותנות תוצאה טובה במצבים שונים.

## משך פעילות האינסולין (DIA) (שעות)

### תיאור ובדיקה

משך הזמן שלוקח לאינסולין שהוזרק לדעוך עד 0.

במקרים רבים המשך מוגדר קצר מדי. אצל רוב האנשים ההגדרה המתאימה היא 5 שעות, ובחלק מהמקרים גם 6 או 7.

### השפעה

הגדרת ערך DIA נמוך מדי עשויה להביא לרמת סוכר נמוכה ולהיפך.

אם משך פעילות האינסולין קצר מדי, AAPS יחשב בטעות שהבולוס הקודם דעך לחלוטין ואז בזמן שהסוכר עדיין גבוה יזריק עוד. (למעשה, הוא לא ימתין שהאינסולין הפעיל יגיע לאפס ויתחיל לתת עוד אינסולין כשההשפעה על הסוכר לא תיראה מספקת). כתוצאה מכך, נוצרת הערמה של הזרקות, אליהן AAPS לא מודע.

כאשר DIA קצר מדי, הסוכר גבוה ולאחר מכן AAPS יתקן ויוריד ביתר עד להיפוגליקמיה.

## תוכנית המינונים הבזאליים (יחידות\שעה)

### תיאור ובדיקה

מינון האינסולין שמוזרק בשעה נתונה לצורך שמירה על יציבות של רמת הסוכר בדם.

בדקו את התאמת המינונים שלכם ע"י השבתת הלופ, צום, צפייה בסוכר במשך כ-5 שעות אחרי ארוחה כדי לראות את השינויים בסוכר. חזרו על תהליך זה מספר פעמים.

אם רמת הסוכר יורדת, המינון הבזאלי גבוה מדי. ולהיפך.

### השפעה

הגדרת מינונים בזאליים גבוהים מדי עלולה להביא לערכי סוכר נמוכים (היפוגליקמיה). ולהיפך.

חישובי AAPS מסתמכים על המינונים המוגדרים בתוכנית הבזאלית. אם המינונים הבזאליים גבוהים מדי, השהייה זמנית של הבזאלי (zero temp) תוצג כאינסולין פעיל (IOB) שלילי גבוה ממה שניתן היה לצפות, מה שגורם לכך ש-AAPS ייתן יותר תיקונים מהדרוש כדי להביא את האינסולין הפעיל חזרה ל-0.

מינון בזאלי גבוה מדי יגרום לסוכר נמוך גם בעת כשהוא מנסה לתקן את הסוכר וגם כשהוא לא מנסה.

מצד שני, מינון נמוך מדי יביא לעליה בסוכר ולכשלון בלהוריד את הסוכר אל ערך המטרה.

## רגישות או יחס התיקון (ISF) (mg/dl/U)

### תיאור ובדיקה

המדד שמתאר כמה סוכר (mg/dl) צפוי לרדת כתוצאה מהזרקת יחידת אינסולין אחת.

בהנחה שהמינון הבזאלי נכון, תוכלו לבדוק את מדד זה ע"י השבתת הלופ, ווידוא שאין אינסולין פעיל, אכילת מספר טבליות גלוקוז לקבלת סוכר גבוה ויציב.

לאחר מכן בצעו בולוס ע"פ ה-ISF המוגדר בפרופיל ועקבו אחר הירידה בסוכר.

היזהרו מהיפוגליקמיה כי במקרים רבים ערך ה-ISF מוגדר נמוך מהדרוש. משמעות ערך ISF נמוך היא שיחידת אינסולין תוריד את הסוכר מהר מהצפוי.

### השפעה

**ISF נמוך** (לדוגמה 40 במקום 50) = תיקון חזק יותר שגורם לירידה גדולה יותר של סוכר עבור כל יחידת אינסולין. ערך נמוך מדי יביא להיפוגלקמיות.

**ISF גבוה** (לדוגמה 45 במקום 35) = תיקון חלש יותר שגורם לירידה קטנה יותר של סוכר עבור כל יחידת אינסולין. ערך גבוה מדי יביא לסוכר גבוה, להיפרגלקמיות.

**לדוגמה:**

* ערך הסוכר הוא 190 mg/dl וערך המטרה הוא 100 mg/dl. 
* דרוש תיקון של ההפרש 90 (=190-100).
* ISF = 30 -> 90 / 30 = 3U
* ISF = 45 -> 90 / 45 = 2U

אם ISF נמוך מדי (מצב נפוץ) ייגרמו תיקונים ביתר, היות ו-AAPS חושב שהוא צריך יותר אינסולין מהדרוש לצורך תיקון של סוכר גבוה. מצב זה גורם ל"רכבת הרים" של ערכי הסוכר (במיוחד בזמן צום). במצב כזה, עליכם להעלות את ערך ה-ISF. זה יגרום לכך ש-AAPS יבצע תיקונים עדינים יותר וימנעו תיקונים ביתר של סוכר גבוה שמובילים לסוכר נמוך.

מצד שני, ערך ISF גבוה מדי מביא לתיקנים בחוסר שמובילים לכך שהסוכר נשאר מעל ערך המטרה - זה בולט במיוחד בלילה.

## יחס אינסולין לפחמימות (IC) (gr/U)

### תיאור ובדיקה

המדד שמתאר את כמות הפחמימות שמכסה יחידת אינסולין.

למדד זה יש מספר שמות נוספים: CR ו-I:C.

בהנחה שהמינון הבזאלי נכון, תוכלו לנסות את ה-IC ע"י ווידוא שהאינסולין הפעיל הוא 0 ובזמן שאתם עם סוכר בטווח תקין, לאכול כמות ידוע ומדוייקת של פחמימות ואז להזריק בולוס ע"פ ה-IC הנוכחי המוגדר בפרופיל. מומלץ לאכול את מה שבדרך כלל אתם אוכלים בשעה כזו ביממה ולספור את הפחמימות במדוייק.

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

# APS algorithm

## Why does it show "dia:3" in the "OPENAPS AMA"-tab even though I have a different DIA in my profile?

![AMA 3h](../images/Screenshot_AMA3h.png)

In AMA, DIA actually doesn't mean the 'duration of insulin acting'. It is a parameter, which used to be connected to the DIA. Now, it means, 'in which time should the correction be finished'. It has nothing to do with the calculation of the IOB. In OpenAPS SMB, there is no need for this parameter any longer.

## Profile

### Why using min. 5h DIA (insulin end time) instead of 2-3h?

Well explained in [this article](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/). Don't forget to `ACTIVATE PROFILE` after changing your DIA.

### What causes the loop to frequently lower my BG to hypoglycemic values without COB?

First of all, check your basal rate and make a no-carb basal rate test. If it is correct, this behavior is typically caused by a too low ISF. A too low ISF looks typically like this:

![ISF too low](../images/isf.jpg)

### What causes high postprandial peaks in closed loop?

First of all, check your basal rate and make a no-carb basal rate test. If it is correct and your BG is falling to your target after carbs are fully absorbed, try to set an 'eating soon' temp target in AndroidAPS some time before the meal or think about an appropriate prebolus time with your endocrinologist. If your BG is too high after the meal and still too high after carbs are fully absorbed, think about decreasing your IC with your endocrinologist. If your BG is too high while COB and too low after carbs are fully absorbed, think about increasing your IC and an appropriate prebolus time with your endocrinologist.

# Other settings

## Nightscout settings

### AndroidAPS NSClient says 'not allowed' and does not upload data. What can I do?

In NSClient check 'Connection settings'. Maybe you actually are not in an allowed WLAN or you have activated 'Only if charging' and your charging cable is not attached.

## CGM settings

### Why does AndroidAPS say 'BG source doesn't support advanced filtering'?

If you do use another CGM/FGM than Dexcom G5 or G6 in xDrip native mode, you'll get this alert in AndroidAPS OpenAPS-tab. See [Smoothing blood glucose data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) for more details.

## Pump

### Where to place the pump?

There are innumerable possibilities to place the pump. It does not matter if you are looping or not.

### Batteries

Looping can reduce the pump battery faster than normal use because the system interacts through bluetooth far more than a manual user does. It is best to change battery at 25% as communication becomes challenging then. You can set warning alarms for pump battery by using the PUMP_WARN_BATT_P variable in your Nightscout site. Tricks to increase battery life include:

* reduce the length of time the LCD stays on (within pump settings menu)
* reduce the length of time the backlight stays on (within pump settings menu)
* select notification settings to a beep rather than vibrate (within pump settings menu)
* only press the buttons on the pump to reload, use AndroidAPS to view all history, battery level and reservoir volume.
* AndroidAPS app may often be closed to save energy or free RAM on some phones. When AndroidAPS is reinitialized at each startup it establishes a Bluetooth connection to the pump, and re-reads the current basal rate and bolus history. This consumes battery. To see if this is happening, go to Preferences > NSClient and enable 'Log app start to NS'. Nightscout will receive an event at every restart of AndroidAPS, which makes it easy to track the issue. To reduce this happening, whitelist AndroidAPS app in the phone battery settings to stop the app power monitor closing it down.
    
    For example, to whitelist on a Samsung phone running Android Pie:
    
    * Go to Settings -> Device Care -> Battery 
    * Scroll until you find AndroidAPS and select it 
    * De-select "Put app to sleep"
    * ALSO go to Settings -> Apps -> (Three circle symbol in the top-right of the screen) select "special access" -> Optimize battery usage
    * Scroll to AndroidAPS and make sure it is de-selected.

* clean battery terminals with alcohol wipe to ensure no manufacturing wax/grease remains.

* for [Dana R/RS pumps](../Configuration/DanaRS-Insulin-Pump.md) the startup procedure draws a high current across the battery to purposefully break the passivation film (prevents loss of energy whilst in storage) but it doesn't always work to break it 100%. Either remove and reinsert battery 2-3 times until it does show 100% on screen, or use battery key to briefly short circuit battery before insertion by applying to both terminals for a split second.
* see also more tips for [particular types of battery](../Usage/Accu-Chek-Combo-Tips-for-Basic-usage#battery-type-and-causes-of-short-battery-life)

### Changing reservoirs and cannulas

The change of cartridge cannot be done via AndroidAPS but must be carried out as before directly via the pump.

* Long press on "Open Loop"/"Closed Loop" on the Home tab of AndroidAPS and select 'Suspend Loop for 1h'
* Now disconnect the pump and change the reservoir as per pump instructions.
* Also priming and filling tube and cannula can be done directly on the pump. In this case use [PRIME/FILL button](../Usage/CPbefore26#pump) in the actions tab just to record the change.
* Once reconnected to the pump continue the loop by long pressing on 'Suspended (X m)'.

The change of a cannula however does not use the "prime infusion set" function of the pump, but fills the infusion set and/or cannula using a bolus which does not appear in the bolus history. This means it does not interrupt a currently running temporary basal rate. On the Actions (Act) tab, use the [PRIME/FILL button](../Usage/CPbefore26#pump) to set the amount of insulin needed to fill the infusion set and start the priming. If the amount is not enough, repeat filling. You can set default amount buttons in the Preferences > Other > Fill/Prime standard insulin amounts. See the instruction booklet in your cannula box for how many units should be primed depending on needle length and tubing length.

## Wallpaper

You can find the AndroidAPS wallpaper for your phone on the [phones page](../Getting-Started/Phones#phone-background).

## Daily usage

### Hygiene

#### What to do when taking a shower or bath?

You can remove the pump while taking a shower or bath. For this short period of time you'll usually won't need it. But you should tell it to AAPS so that the IOB calculations are right.

See [description above](../Getting-Started/FAQ#disconnect-pump).

### Work

Depending on the kind of your job, maybe you use different treatment factors on workdays. As a looper you should think of a [profile switch](../Usage/Profiles.md) for your estimated working day (e.g. more than 100% for 8h when sitting around or less than 100% when you are active), a high or low temporary target or a [time shift of your profile](../Usage/Profiles#time-shift) when standing up much earlier or later than regular. If you are using [Nightscout profiles](../Configuration/Config-Builder#ns-profile), you can also create a second profile (e.g. 'home' and 'workday') and do a daily profile switch to the profile you actually need.

## Leisure activities

### Sports

You have to rework your old sports habits from pre-loop times. If you simply consume one or more sports carbs as before, the closed loop system will recognize them and correct them accordingly.

So, you would have more carbohydrates on board, but at the same time the loop would counteract and release insulin.

When looping you should try these steps:

* Make a [profile switch](../Usage/Profiles.md) < 100%.
* Set an [activity temp target](../Usage/temptarget#activity-temp-target) above your standard target.
* If you are using SMB make sure ["Enable SMB with high temp targets"](../Usage/Open-APS-features#enable-smb-with-high-temp-targets) and ["Enable SMB always"](../Usage/Open-APS-features#enable-smb-always) are disabled.

Pre- and post-processing of these settings is important. Make the changes in time before sport and consider the effect of muscle filling.

If you do sports regularly at the same time (i.e. sports class in your gym) you can consider using [automation](../Usage/Automation.rst) for profile switch and TT. Location based automation might also be an idea but makes preprocessing more difficult.

The percentage of the profile switch, the value for your activity temp target and best time for the changes are individual. Start on the safe side if you are looking for the right value for you (start with lower percentage and higher TT).

### Sex

You can remove the pump to be 'free', but you should tell it to AAPS so that the IOB calculations are right.

See [description above](../Getting-Started/FAQ#disconnect-pump).

### Drinking alcohol

Drinking alcohol is risky in closed loop mode as the algorithm cannot predict the alcohol influenced BG correctly. You have to check out your own method for treating this using the following functions in AndroidAPS:

* Deactivating closed loop mode and treating the diabetes manually or
* setting high temp targets and deactivating UAM to avoid the loop increasing IOB due to an unattended meal or
* do a profile switch to noticeably less than 100% 

When drinking alcohol, you always have to have an eye on your CGM to manually avoid a hypoglycemia by eating carbs.

### Sleeping

#### How can I loop during the night without mobile and WIFI radiation?

Many users turn the phone into airplane mode at night. If you want the loop to support you when you are sleeping, proceed as follows (this will only work with a local BG-source such as xDrip+ or patched Dexcom app, it will NOT work if you get the BG-readings via Nightscout):

1. Turn on airplane mode in your mobile.
2. Wait until the airplane mode is active.
3. Turn on Bluetooth.

You are not receiving calls now, nor are you connected to the internet. But the loop is still running.

Some people have discovered problems with local broadcast (AAPS not receiving BG values from xDrip+) when phone is in airplane mode. Go to Settings > Inter-app settings > Identify receiver and enter `info.nightscout.androidaps`.

![xDrip+ Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

### Travelling

#### How to deal with time zone changes?

With Dana R and Dana R Korean you don't have to do anything. For other pumps see [time zone travelling](../Usage/Timezone-traveling.md) page for more details.

## Medical topics

### Hospitalization

If you want to share some information about AndroidAPS and DIY looping with your clinicians, you can print out the [guide to AndroidAPS for clinicians](../Resources/clinician-guide-to-AndroidAPS.md).

### Medical appointment with your endocrinologist

#### Reporting

You can either show your Nightscout reports (https://YOUR-NS-SITE.com/report) or check [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).