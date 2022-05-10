# שאלות נפוצות של לופרים

איך להוסיף שאלה: פעלו בהתאם ל[הוראות](../make-a-PR.md)

# כללי

## האם ניתן פשוט להוריד ולהתקין את קובץ ההתקנה של AndroidAPS?

לא. למעשה לא קיים קובץ התקנה (apk) להורדה עבור AndroidAPS, עליכם [לבנות](../Installing-AndroidAPS/Building-APK.md) את הקובץ בעצמכם. הנה הסיבה לכך:

היישום AndroidAPS שולט למעשה במשאבה וקובע את מתן האינסולין. בהתאם לרגולציה הקיימת באירופה, כל מערכת שמסווגת IIa או IIb היא מערכת רפואית שדורשת אישור של הרגולטור (סימון CE) ומחייבת שורה של מחקרים ואישורים. הפצה של מערכת שאינה מאושרת ע"י הרגולטור אינה חוקית. רגולציה דומה קיימת גם באיזורים אחרים בעולם.

הדרישות הרגולטוריות אינן מוגבלות למכירה (בתמורה תשלום) והיא חלה על כל סוג של הפצה (גם אם נעשית בחינם). בניה של מכשיר רפואי לשימוש עצמי היא ההחרגה היחידה שמאפשרת הימנעות מהדרישות הרגולטוריות.

זו הסיבה שקובץ התקנה apk אינו זמין להורדה.

## איך להתחיל?

ראשית כל, יש להצטייד ב**ציוד\חומרה הנדרשים**:

- משאבת אינסולין [הנתמכת על ידי המערכת](./Pump-Choices.md) 
- מכשיר [טלפון אנדרואיד](Phones.md) (מכשירי אפל iOS אינם נתמכים ע"י AndroidAPS ומומלץ לבדוק את השימוש ב-[iOS Loop](https://loopkit.github.io/loopdocs/) לשימוש באייפון) 
- מד סוכר רציף (CGM) [הנתמך ע"י המערכת](../Configuration/BG-Source.rst) 

שנית, יש לקבוע את **ההגדרות (setup) לחומרה**. ניתן לראות [דוגמאות להגדרות חומרה, צעד אחר צעד](Sample-Setup.md).

שלישית, יש לקבוע את **ההגדרות לרכיבי התוכנה**: AndroidAPS ומקור נתוני הסוכר מהחיישן.

רביעית, יש ללמוד ולהבין את **עקרונות ה-OpenAPS ולקבוע את מקדמי הטיפול**. עקרונות הבסיס של טיפול נכון באמצעות לולאה סגורה הם דיוק בהגדרת יחס האינסולין\פחמימה והתוכנית הבזאלית. כל ההמלצות הטיפוליות מניחות שהתוכנית הבזאלית נכונה ושינויים ברמת הסוכר הם תוצאה של גורמים אחרים, שמחייבים תיקון והתאמה (פעילות גופנית, לחץ וכיו"ב.). התיקונים וההתאמות המבוצעים ע"י הלולאה הסגורה מוגבלים בחוקים וכללים לשמירה על הבטיחות (למשל מקסימום אינסולין בזאלי זמני ב[הגדרות OpenAPS](https://openaps.org/reference-design/)), כך שלא יעשה שימוש בבולוס על מנת לתקן תכנון בזאלי שגוי או שאינו מתאים. אם, לצורך ההדגמה, המערכת קובעת בזאלי זמני נמוך מהתוכנית לקראת ארוחה באופן תדיר, יתכן שיש צורך לשנות ולהתאים את התוכנית הבזאלית. ניתן להשתמש בפונקציית [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) לקבלת ניתוח והמלצה על שינויים בתוכנית הבזאלית, ביחס התיקון וביחס אינסולין\פחמימה בהתאם לנתונים שנאספו על ידי המערכת. לחילופין, ניתן לבדוק, לנתח ולהתאים את התוכנית הבזאלית [בצורה הרגילה](https://integrateddiabetes.com/basal-testing/).

## מהן אפשרויות הלופינג (Looping) עומדות לרשותי?

### הגנה באמצעות סיסמה

על מנת למנוע אפשרות לשינוי ההעדפות ביתר קלות, ניתן להגן על תפריט ההעדפות באמצעות סיסמה, על ידי בחירת "סיסמה להעדפות" בתפריט ההעדפות והזנה של סיסמה לבחירתכם. בכניסה הבאה לתפריט ההעדפות, תידרש סיסמא להמשך. להסרת ההגנה בסיסמה מאוחר יותר, ניתן להכנס לתפריט "סיסמה להעדפות" ולמחוק את הטקסט משדה הסיסמא.

### שעוני Android Wear

אם בכוונתכם להשתמש באפליקציית Android Wear לביצוע בולוס או שינויים בהגדרות, יש לוודא שהתראות אינן חסומות ב-AndroidAPS. מאחר ואישור פעולות (למשל קביעת הגדרות או מתן בולוס) ממומש באמצעות התראות.

### ניתוק משאבה

אם אתם מורידים את המשאבה לצורך מקלחת, רחצה, שחייה, ספורט או פעילויות אחרות, עליכם ליידע את AndroidAPS על כך ולעצור את מתן האינסולין כדי לשמור על אינסולין פעיל (IOB) תקין.

ניתן לעשות זאת ע"י לחיצה על סמל סטטוס הלופ ב[מסך הבית של AndroidAPS](./Screenshots.md#loop-status).

### המלצות אינן מבוססות על קריאת סוכר יחידה מתוך חיישן הסוכר

לצורך שמירה על ביטחונכם, ההמלצות לטיפול אינן מבוססות על קריאת CGM בודדת אלא על ממוצע שינויים של מספר מדידות. לפיכך, במקרה שיאבדו מספר קריאות סוכר ברצף, ייתכן ויעבור זמן מה לאחר חידוש הקשר עד ש-AndroidAPS יוכל להסתמך על הקריאות ולחזור להפעיל את הלולאה שוב.

### קריאה נוספת

קיימים מספר בלוגים בהם ניתן למצוא טיפים טובים לעזרה בהבנת המערכת ומצבי ה-looping השונים:

- [שיפור הגדרות ה-looping](https://seemycgm.com/2017/10/29/fine-tuning-settings/) באתר See my CGM
- [מדוע DIA משמעותי](https://seemycgm.com/2017/08/09/why-dia-matters/) באתר See my CGM
- [צמצום קפיצת רמת הסוכר בארוחות](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) באתר DIYPS#
- [הורמונים ו-Autosens](https://seemycgm.com/2017/06/06/hormones-2/) באתר See my CGM

## איזה ציוד חירום מומלץ לשאת איתי?

ראשית, עליכם להצטייד בציוד החירום הרגיל, שכל סוכרתי שעושה שימוש במשאבת אינסולין ו-CGM נוהג לקחת איתו. בנוסף, כמשתמשי לופ העושים שימוש ב-AndroidAPS, מומלץ בחום להקפיד להצטייד או להחזיק בקרבת מקום את הפריטים הבאים:

- מטענים וסוללות חלופיות לטעינת הטלפון, השעון החכם, מכשיר הגישור ריילילינק וכו'
- סוללות למשאבה
- קובץ התקנה [APK](../Installing-AndroidAPS/Building-APK.md) עדכני ו[קובץ גיבוי הגדרות](../Usage/ExportImportSettings.rst) של AndroidAPS ושל אפליקציות נוספות בהם אתם משתמשים (לדוגמה xDrip+, BYODA).

## כיצד להדביק היטב את החיישן?

ניתן להדביק את החיישן עם סרט הדבקה. ישנן מספר מדבקות עם חירורים המיועדות לחיישנים נפוצים הניתנות לרכישה באינטרנט (חפשו בגוגל, אמזון ו-Ebay). לופרים רבים משתמשים בטייפ של קיבוע אינפוזיות (Tegaderm, Opsite), קינזיו-טייפ (Kinesiotape) או רוקטייפ - מוצרים שניתן למצוא בכל בית מרקחת במחירים זולים יחסית.

ניתן לקבע את החיישן. ישנם גם צמידי זרוע שמחזיקים את החיישן על העור (חפשו בגוגל, אמזון ו-Ebay).

# הגדרות AndroidAPS

הרשימה הבאה מסכמת את שלבי האופטימיזציה של הפרופיל שלכם. מומלץ להתחיל ליישם מלמעלה ולהתקדם לתחתית הטבלה. חשוב לסיים לקבוע כל הגדרה לפני שמתקדמים להגדרה הבאה. יש לעבוד עם שינויים קטנים ולהמנע משינויים גדולים בכל פעם. ניתן להשתמש ב[Autotune](https://autotuneweb.azurewebsites.net/) כאמצעי להנחייה בקביעת ההגדרות אך חשוב לבחון כל מקרה לגופו ולא לאמץ את ההמלצות באופן אוטומטי. יתכן שלא בכל המקרים ההמלצות יתאימו לכם. ההגדרות יכולות להשפיע אחת על השניה - יתכן מצב שמספר הגדרות שמוגדרות בצורה שגויה מפצות אחת על השניה ומביאות לתוצאה חיובית (למשל בזאלי גבוה מדי יחד עם יחס אינסולין\פחמימה (IC) גבוה מדי) ויתכן מצב שההשפעה ההדדית של הגדרות תהיה שלילית. לפיכך, חשוב לשים לב תמיד לכל ההגדרות ולוודא שהן תקינות ושביחד נותנות תוצאה טובה במצבים שונים.

## משך פעילות האינסולין (DIA) (שעות)

### תיאור ובדיקה

משך הזמן שלוקח לאינסולין שהוזרק לדעוך עד 0.

במקרים רבים המשך מוגדר קצר מדי. אצל רוב האנשים ההגדרה המתאימה היא 5 שעות, ובחלק מהמקרים גם 6 או 7.

### השפעה

הגדרת ערך DIA נמוך מידי עשויה להביא לרמת סוכר נמוכה, ולהיפך.

אם משך פעילות האינסולין קצר מדי, AAPS יחשב בטעות שהבולוס הקודם דעך לחלוטין ואז בזמן שהסוכר עדיין גבוה יזריק עוד. (למעשה, הוא לא ימתין שהאינסולין הפעיל יגיע לאפס ויתחיל לתת עוד אינסולין כשההשפעה על הסוכר לא תיראה מספקת). כתוצאה מכך, נוצרת הערמה של הזרקות, אליהן AAPS לא מודע.

כאשר DIA קצר מדי, הסוכר גבוה ולאחר מכן AAPS יתקן ויוריד ביתר עד להיפוגליקמיה.

## תוכנית המינונים הבזאליים (יחידות\שעה)

### תיאור ובדיקה

מינון האינסולין שמוזרק בשעה נתונה לצורך שמירה על יציבות של רמת הסוכר בדם.

בדקו את התאמת המינונים שלכם ע"י השבתת הלופ, צום, צפייה בסוכר במשך כ-5 שעות אחרי ארוחה כדי לראות את השינויים בסוכר. חזרו על תהליך זה מספר פעמים.

אם רמת הסוכר יורדת, המינון הבזאלי גבוה מדי. ולהיפך.

### השפעה

קביעת בזאלי בערכים גבוהים מידי עלולה להביא לערכי סוכר נמוכים (היפו). ולהיפך.

חישובי AAPS מסתמכים על המינונים המוגדרים בתוכנית הבזאלית. אם התוכנית הבזאלית גבוהה מידי, השהייה זמנית של הבזאלי (zero temp) תוצג כאינסולין פעיל (IOB) שלילי גבוה ממה שניתן היה לצפות. מה שגורם לכך ש-AAPS ייתן יותר תיקונים מהדרוש כדי להביא את האינסולין הפעיל חזרה ל-0.

מינון בזאלי גבוה מדי יגרום לסוכר נמוך גם עם מינון ברירת המחדל הבזאלי וגם שעות אחר כך כש-AAPS ינסה לתקן כדי להגיע לערך המטרה.

מצד שני, מינון נמוך מדי יביא לעליה בסוכר ולכשלון בלהוריד את הסוכר אל ערך המטרה.

## רגישות או יחס התיקון (ISF) (mg/dl/U)

### תיאור ובדיקה

המדד שמתאר כמה סוכר (mg/dl) צפוי לרדת כתוצאה מהזרקת יחידת אינסולין אחת.

בהנחה שהמינון הבזאלי נכון, תוכלו לבדוק את מדד זה ע"י השבתת הלופ, ווידוא שאין אינסולין פעיל, אכילת מספר טבליות גלוקוז לקבלת סוכר גבוה ויציב.

לאחר מכן בצעו בולוס ע"פ ה-ISF המוגדר בפרופיל ועקבו אחר הירידה בסוכר.

היזהרו מהיפוגליקמיה כי במקרים רבים ערך ה-ISF מוגדר נמוך מהדרוש. משמעות ערך ISF נמוך היא שיחידת אינסולין תוריד את הסוכר מהר מהצפוי.

### השפעה

**ISF נמוך יותר** (לדוגמה 40 במקום 50) משמע כל יחידת אינסולין מפחיתה פחות את הסוכר בדם. זה מוביל לתיקון אגרסיבי\חזק יותר ע"י הלולאה עם **יותר אינסולין**. ערך נמוך מדי יביא להיפוגלקמיות.

**ISF גבוה יותר** (לדוגמה 45 במקום 35) משמע כל יחידת אינסולין מפחיתה יותר את הסוכר בדם. זה מוביל לתיקון עדין\חלש יותר ע"י הלולאה עם **פחות אינסולין**. ערך ISF גבוה מדי יביא לסוכר גבוה, להיפרגלקמיות.

**לדוגמה:**

- ערך הסוכר הוא 190 mg/dl וערך המטרה הוא 100 mg/dl. 
- דרוש תיקון של ההפרש 90 (=190-100).
- ISF = 30 -> 90 / 30 = 3U
- ISF = 45 -> 90 / 45 = 2U

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

**יחס IC נמוך** = פחות גרם על כל יחידה כלומר יותר אינסולין על מספר נתון של פחמימות. אפשר לקרוא לזה גם "יותר אגרסיבי".

**יחס IC גבוה** = יותר גרם על כל יחידה כלומר פחות אינסולין על מספר נתון של פחמימות. במילים אחרות "פחות אגרסיבי".

אם אחרי סיום עיכול ארוחה וגם האינסולין הפעיל ירד ל-0 אך הסוכר גבוה ממה שהיה לפני הארוחה, סביר להניח שה-IC גבוה מדי. ולהיפך, אם הסוכר נמוך ממה שהיה לפני הארוחה, ה-IC נמוך מדי.

# אלגוריתם APS (מערכת לבלב מלאכותי)

## מדוע רשום "dia:3" בלשונית "OPENAPS AMA" למרות שה-DIA שבפרופיל שונה?

![AMA 3h](../images/Screenshot_AMA3h.png)

ב-AMA, המושג DIA לא באמת מייצג "משך פעילות אינסולין". זהו פרמטר שהיה קשור למשך הפעילות אך כיום משמעותו היא "הזמן שבו התיקון הנוכחי צפוי להסתיים". אין לכך קשר לחישוב האינסולין הפעיל. ב-OpenAPS SMB אין צורך בפרמטר זה כלל.

## פרופיל

### למה להשתמש במשך פעילות אינסולין של 5 שעות במקום 2-3 שעות?

שאלה זו מוסברת היטב [במאמר זה](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/). אל תשכחו ללחוץ על `הפעל פרופיל` אחרי ביצוע שינוי ב-DIA.

### מה גורם ללופ להוריד את רמת הסוכר עד להיפוגליקמיה ללא פחמימות פעילות?

לפני הכל, בדקו את המינונים הבזאליים ובצעו מבחן מינונים בזאליים בצום. אם מצאתם שהמינון הבזאלי תקין, התנהגות זו תיגרם בגלל ISF נמוך מדי. ערך ISF נמוך טיפוסי נראה כך:

![ISF too low](../images/isf.jpg)

### מה גורם לעליות גדולות אחרי ארוחות עם לולאה סגורה?

לפני הכל, בדקו את המינונים הבזאליים ובצעו מבחן מינונים בזאליים בצום. אם מצאתם שהם נכונים והסוכר נופל אל המטרה לאחר ספיגה מלאה של הפחמימות, נסו להפעיל מטרה זמנית 'אוכלים בקרוב' ב-AndroidAPS זמן מסויים לפני הארוחה או שתתייעצו עם האנדוקרינולוג שלכם על בולוס קדם-ארוחה מתאים. אם הסוכר גבוה מדי לאחר ארוחה ועדיין גבוה לאחר ספיגה מלאה, חשבו על להוריד את יחס ה-IC בייעוץ עם אנדוקרינולוג. אם הסוכר גבוה בזמן שיש עדיין פחמימות פעילות ונמוך אחרי סיום ספיגת הפחמימות, חשבו על להעלות את ה-IC ולבצע בולוס קדם-ארוחה בייעוץ עם אנדוקרינולוג.

# הגדרות אחרות

## הגדרות Nightscout

### בלשונית NSClient רשום 'not allowed' ונתונים לא נשלחים ל-Nightscout. מה אפשר לעשות?

בלשונית NSClient בדקו את 'הגדרות חיבור'. יכול להיות שאתם כרגע משתמשים ברשת אלחוטית שלא מאפשרת פעילות או שהפעלתם 'במצב טעינה בלבד' וכבל הטעינה לא מחובר.

## הגדרות חיישנים

### למה AAPS רושם 'מקור ערכי הסוכר הפעיל אינו תומך בסינון נתונים מתקדם'?

אם אתם משתמשים בחיישן שאינו דקסקום G5 או G6 עם xDrip במצב נטיבי, התראה זו תופיע בלשונית OpenAPS. ראו [שיפור נתוני סוכר](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) לקבלת פרטים נוספים.

## משאבה

### היכן למקם את המשאבה?

יש מגוון רחב של מקומות למיקום המשאבה על הגוף. אין זה משנה אם אתם משתמשים בלופ או לא.

### סוללות

השימוש בלופ, הכולל תקשורת בלוטות' תכופה, מנצל יותר את הסוללה של המשאבה מאשר שימוש רגיל במשאבה. כדאי להחליף את הסוללה כאשר היא מגיע ל-25% קיבולת מכיוון שמנקודה זו התקשורת עלולה להיכשל. ניתן להגדיר התראת סוללה ע"י הגדרת המשתנה PUMP_WARN_BATT_P באתר ה-Nightscout שלכם. המלצות לחיסכון בסוללה:

- הפחיתו את משך זמן התצוגה של מסך המשאבה (ההגדרה בגוף המשאבה)
- הפחיתו את משך זמן תאורת המסך של המשאבה (ההגדרה בגוף המשאבה)
- הגדירו שהתראות תהינה צפצופים במקום רטט (ההגדרה בגוף המשאבה)
- לחצו על כפתורים במשאבה רק לצורך החלפת מכלי אינסולין וצפו בהיסטוריית המשאבה, רמת סוללה וכמות אינסולין נותרת רק מתוך AAPS.
- מכשירים מסויימים עלולים לסגור את AndroidAPS בניסיון לחסוך סוללה וזיכרון. כש-AndroidAPS מופעל מחדש, הוא יוצר קשר עם המשאבה דרך בלוטות' וקורא את היסטוריית המשאבה ואת המינון הבזאלי הנוכחי. פעולה זו צורכת סוללה. אם זה קורה, גשו לתפריט העדפות > NSClient > אפשרו את 'רשום הפעלת AAPS ב-Nightscout'. בכל פעם ש-AndroidAPS מופעל מחדש, יהיה רישום על כך ב-Nightscout וניתן יהיה לזהות האם הבעיה קיימת במכשירכם. על מנת לצמצם מקרי הפעלה מחדש של AAPS, הגדירו במכשירכם ש-AAPS (ושאר היישומים שקשורים ללופ) יהיו ללא מיטוב סוללה, כך מכשירכם לא ינסה לסגור את היישום כדי לחסוך סוללה.
    
    לדוגמה, לצורך ביטול מיטוב הסוללה במכשיר סמסונג המריץ אנדרואיד 11:
    
    - גשו להגדרות > יישומים > גללו ובחרו את AndroidAPS > סוללה > טיוב סוללה > בחרו בתפריט ''הכל' 
    - גללו עד למציאת AndroidAPS 
    - כבו את המתג שבשורה הזו
    - בנוסף, גשו להגדרות > יישומים > תפריט (⁝) > גישה מיוחדת > טיוב סוללה
    - בחרו בתפריט ב-'כולם', גללו עד למציאת AndroidAPS וודאו שהמתג שלו אינו פעיל.

- נקו את מגעי הסוללה עם מטלית עם אלכוהול כדי לוודא שלא נשארו שאריות שומן וכו'.

- עבור משאבות [ Dana R / RS](../Configuration/DanaRS-Insulin-Pump.md) הליך ההפעלה שואב זרם גבוה דרך הסוללה כדי לשבור במכוון את סרט הפסיבציה (מונע אובדן אנרגיה בזמן האחסון), אך לא תמיד פועל לשבירתו ב -100%. הוציאו והחזירו את הסוללה 2-3 פעמים עד להופעת 100% על המסך, או, לפני הכנסתה, געו בשני מסופי הסוללה בעזרת מפתח לזמן קצר מאוד, כדי לגרום לקצר רגעי.
- לקריאה נוספת של טיפים נוספים [לסוגים מסוימים של סוללות](../Usage/Accu-Chek-Combo-Tips-for-Basic-usage#battery-type-and-causes-of-short-battery-life).

### החלפת מכלים וצינוריות

לא ניתן לבצע את החלפת המכל באמצעות AndroidAPS. יש לבצע אותה כבעבר, ישירות בגוף המשאבה.

- לחצו לחיצה ארוכה על צלמית "לולאה פתוחה"/"לולאה סגורה" בלשונית דף הבית של AndroidAPS ובחרו 'השהה לולאה למשך שעה'
- נתקו את המשאבה, החליפו את המכל בהתאם להוראות ההפעלה של המשאבה.
- בצעו גם תיחול (Prime) של הצינורית ישירות במשאבה (במשאבות תומכות). במקרה כזה, לחצו גם על לחצן [תיחול\מילוי](../Usage/CPbefore26#pump) בלשונית פעולות לצורך רישום התיחול.
- לאחר החיבור מחדש של המשאבה, הפעילו את הלולאה מחדש על ידי לחיצה על צלמית הלולאה ובחירת חיבור מחדש.

כפתור החלפת הצינורית לא משתמש בפונקציית התיחול של המשאבה אלא ממלא את הצינורית ואת הקנולה ע"י ביצוע בולוס שאינו נרשם בהיסטוריית הטיפולים. אין השפעה על הבזאלי הזמני הנוכחי. בלשונית פעולות, השתמשו בלחצן [תיחול\מילוי](../Usage/CPbefore26#pump) כדי לקבוע את כמות האינסולין הדרושה לתיחול והתחילו את מילוי הצינורית. אם הכמות לא הספיקה, חזרו את המילוי. ניתן להגדיר לחצנים עם כמויות ברירת מחדל בתפריט העדפות > סקירה כללית > מילוי\תיחול כמויות סטנדרטיות של אינסולין. עיינו בחוברת ההוראות שבקופסת הקנולות כדי לברר כמה יחידות דרושות לתיחול, בהתאם לאורך המחט ואורך הצינורות.

## טפט

תוכלו למצוא את הטפט של AAPS למכשירכם [בעמוד הטלפונים](../Getting-Started/Phones#phone-background).

## שימוש יום-יומי

### היגיינה

#### מה עושים כשרוצים להתקלח?

ניתן להסיר את המשאבה בזמן מקלחת וטבילה באמבט (לא רלוונטי למשתמשי אומניפוד). במשך פרק הזמן הקצר הזה אולי לא תזדקקו לכך, אך עליכם להודיע ל-AAPS שהתנתקתם כדי שחישובי IOB יהיו נכונים. ראו [הסבר מעלה](../Getting-Started/FAQ#disconnect-pump).

### בעבודה

בהתאם לסוג עבודתכם, ייתכן שתשתמשו בהגדרות טיפול שונות בימי עבודה לעומת ימי חופש. כלופרים, מומלץ לכם לשקול לבצע [החלפת פרופיל](../Usage/Profiles.md) לימי עבודה טיפוסיים. לדוגמה, ניתן לעבור לפרופיל גבוה מ-100% אם יש עבודה פחות תובענית (למשל ישיבה ליד שולחן), או פחות מ-100% אם אתם פעילים ועומדים על הרגליים כל היום. יש לשקול גם ערך מטרה זמני גבוה או נמוך או [היסט זמן של הפרופיל](../Usage/Profiles#time-shift) כאשר אתם עובדים מוקדם או מאוחר מהרגיל, או אם אתם עובדים במשמרות שונות. אפשר גם ליצור פרופיל נוסף (לדוגמה "בית", "יום עבודה") ולבצע החלפת פרופיל לפי הצורך.

## פעילויות פנאי

### ספורט

עליכם לתכנן מחדש את הרגלי הספורט שלכם מהימים שלפני הלופ. אם התרגלתם לאכול פחמימות לפני האימון, הלולאה הסגורה תזהה זאת ותתקן בהתאם.

לכן, בגופכם יהיו יותר פחמימות אבל במקביל, הלופ יפעל כנגד הפחמימות עם הזרקת אינסולין.

בעת שימוש בלופ, נסו את הפעולות הבאות:

- בצעו [החלפת פרופיל](../Usage/Profiles.md) < 100%.
- הגדירו [ערך מטרה זמני](../Usage/temptarget#activity-temp-target) גבוה מהרגיל.
- אם אתם משתמשים ב-SMB, וודאו שכיביתם את [הפעלת SMB עם ערכי מטרה גבוהים](../Usage/Open-APS-features#enable-smb-with-high-temp-targets) ואת [הפעלת SMB תמיד](../Usage/Open-APS-features#enable-smb-always).

ביצוע הפעולות לפני וביטולן אחרי הפעילות הגופנית חשובים מאוד. בצעו את השינויים זמן מה לפני הפעילות הגופנית וקחו בחשבון את השפעת ניפוח השרירים.

אם אתם מתאמנים בזמנים קבועים (לדוגמה שיעורי\חוגי ספורט), שקלו להשתמש [באוטומציה](../Usage/Automation.rst) שתבצע שינויים בפרופיל ובערך המטרה בזמנים אלה אוטומטית. גם אוטומציות תלויות מיקום (לפי GPS) יכולות להיות שימושיות אך הסתמכות עליהן תקשה על ביצוע השינויים מספיק זמן לפני האימון.

אחוז הפרופיל הזמני והערך המטרה הזמני המתאימים לכם הם אישיים לכם. ליתר בטיחות, התחילו מלהשתמש באחוזים מעט יותר נמוכים מהרגיל ומערכי מטרה גבוהים, המשיכו לשפר את הערכים באימונים הבאים עד שתדעו מהם הערכים המתאימים לכם.

### יחסי מין

ניתן להסיר את המשאבה כדי להרגיש יותר חופשיים אך עליכם להודיע ל-AAPS על כך "כניתוק" כדי שלא יחולו טעויות בחישובי האינסולין הפעיל. ראו [הסבר מעלה](../Getting-Started/FAQ#disconnect-pump).

### שתיה חריפה

שתיית אלכוהול הינה עשויה להיות מסוכנת בשימוש בלולאה סגורה כיוון שהאלגוריתם לא יכול לחזות נכונה את השפעת האלכוהול על הסוכר בדם. נסו את השיטות הבאות כדי להבין איזו מהן עדיפה לכם:

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

כעת לא תקבלו שיחות והאתם מנותקים מהאינטרנט. אך הלופ פועל בכל זאת.

משתמשים מסויימים חווים בעיות עם השידור המקומי (AAPS לא מקבל נתוני סוכר מ-xDrip) בזמן שהם במצב טיסה. ב-xDrip, גשו להגדרות > הגדרות לשיתוף פעולה בין אפליקציות > זיהוי מקלט > רשמו `info.nightscout.androidaps` באותיות קטנות בלבד.

![xDrip+ Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

### נסיעות

#### כיצד להתמודד עם שינויי אזורי זמן?

אם אתם משתמשים במשאבות Dana R או Dana R מהשוק הקוראני, אתם לא צריכים לעשות דבר. אם אתם משתמשים במשאבות אחרות, ראו [אזורי זמן ונסיעות](../Usage/Timezone-traveling.md) לקבלת פרטים נוספים.

## נושאים רפואיים

### אשפוזים

אם ברצונכם לשתף מידע על הלופ ועל AAPS עם הרופאים שלכם, תוכלו להדפיס את [המדריך ל-AndroidAPS עבור קלינאים](../Resources/clinician-guide-to-AndroidAPS.md).

### פגישה עם אנדוקרינולוג

#### דיווח

ניתן להציג לרופא את הדוחות של Nightscout בכתובת https://YOUR-NS-SITE.com/report או להשתמש ב-[Nightscout Reporter](https://nightscout-reporter.zreptil.de/).

# Frequent questions on Discord and their answers...

## My problem is not listed here.

[Information to get help.](../Where-To-Go-For-Help/Connect-with-other-users#i-m-getting-stuck-what-do-i-do-who-can-i-ask)

## My problem is not listed here but I found the solution

[Information to get help.](../Where-To-Go-For-Help/Connect-with-other-users#i-m-getting-stuck-what-do-i-do-who-can-i-ask)

**Remind us to add your solution to this list!**

## AAPS stops everyday around the same time.

Stop Google Play Protect. Check for "cleaning" apps (ie CCleaner etc) and uninstall them. AAPS / 3 dots menu / About / follow the link "Keep app running in the background" to stop all battery optimizations.

## How to organize my backups ?

Export settings very regularly: after each pod change, after modifying your profile, when you have validated an objective, if you change your pump… Even if nothing changes, export once a month. Keep several old export files.

Copy on an internet drive (Dropbox, Google etc) : all the apks you used to install apps on your phone (AAPS, xDrip, BYODA, Patched LibreLink…) as well as the exported setting files from all your apps.

## I have problems, errors building the app.

Please

- check [Troubleshooting Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio#troubleshooting-android-studio) for typical errors and
- the tipps for with a [step by step walktrough](https://docs.google.com/document/d/1oc7aG0qrIMvK57unMqPEOoLt-J8UT1mxTKdTAxm8-po).

## I'm stuck on an objective and need help.

Screen capture the question and answers. Post-it on the Discord AAPS channel. Don't forget to tell which options you choose (or not) and why. You'll get hints and help but you'll need to find the answers.

## How to reset the password in AAPS v2.8.x ?

Open the hamburger menu, start the Configuration wizard and enter new password when asked. You can quit the wizard after the password phase.

## How to reset the password in AAPS v3.x

If you forgot your password: Close AAPS. Put an empty file named PasswordReset (without any extensions) in phone_main_memory/AAPS/extra directory. Restart AAPS. The new AAPS password is the serial number of your pump. The serial for the Omnipod DASH pod is 4241. You can change the password via 3 dots menu, configuration wizard, unlock parameters.

## My link/pump/pod is unresponsive (RL/OL/EmaLink…)

With some phones, there are Bluetooth disconnects from the Links (RL/OL/EmaL...).

Some also have non responsive Links (AAPS says that they are connected but the Links can't reach or command the pump.)

The easiest way to get all these parts working together is : 1/ Delete Link from AAPS 2/ Power off Link 3/ AAPS 3 dot menu, quit AAPS 4/ Long press AAPS icon, Android menu, info on app AAPS, Force stop AAPS and then Delete cache memory (Do not delete main memory !) 4bis/ Rarely some phones may need a reboot here. You can try without reboot. 5/Power on Link 6/Start AAPS 7/Pod tab, 3 dot menu, search and connect Link

## Build error: file name too long

While trying to build I get an error stating the file name is too long. Possible solutions: Move your sources to a directory closer to the root directory of your drive (e.g. "c:\src\AndroidAPS-EROS").

From Android Studio: Make sure "Gradle" is done syncing and indexing after opening the project and pulling from GitHub. Execute a Build->Clean Project before doing a Rebuild Project. Execute File->Invalidate Caches and Restart Android Studio.

## Alert: Running dev version. Closed loop is disabled

AndroidAPS is not running in "developer mode". AAPS shows the following message: "running dev version. Closed loop is disabled".

Make sure AndroidAPS is running in "developer mode": Place a file named "engineering_mode" at the location "AAPS/extra". Any file will do as long as it is properly named. Make sure to restart AndroidAPS for it to find the file and go into "developer mode".

Hint: Make a copy of an existing logfile and rename it to "engineering_mode" (note: no file extension!).

## Where can I find settings files?

Settings files will be stored on your phone's internal storage in the directory "/AAPS/preferences". WARNING: Make sure not to lose your password as without it you will not be able to import an encrypted settings file!

## How to configure battery savings?

Properly configuring Power Management is important to prevent your Phone's OS to suspend AndroidAPS and related app's and services when your phone is not being used. As a result AAPS can not do its work and/or Bluetooth connections for sensor and Rileylink (RL) may be shut down causing "pump disconnected" alerts and communication errors. On the phone, go to settings->Apps and disable battery savings for: AndroidAPS xDrip or BYODA/Dexcom app The Bluetooth system app (you may need to select for viewing system apps first) Alternatively, fully disable all battery savings on the phone. As a result your battery may drain faster but it is a good way to find out if battery savings is causing your problem. The way battery savings is implemented greatly depends on the phone's brand, model and/or OS version. Because of this it is almost impossible to give instructions to properly set battery savings for your setup. Experiment on what settings work best for you. For additional information, see also Don't kill my app

## Pump unreachable alerts several times a day or at night.

Your phone may be suspending AAPS services or even Bluetooth causing it to loose connection to RL (see battery savings) Consider configuring unreachable alerts to 120 minutes by going to the top right-hand side three-dot menu, selecting Preferences->Local Alerts->Pump unreachable threshold [min].

## Where can I delete treatments in AAPS v3 ?

3 dots menu, select treatements, then 3 dots menu again and you have different options available.

## Configuring and Using the NSClient remote app

AAPS can be monitored and controlled remotely via the NSClient app and optionally via the associated Wear app running on Android Wear watches. Note that the NSClient (remote) app is distinct from the NSClient configuration in AAPS, and the NSClient (remote) Wear app is distinct from the AAPS Wear app--for clarity the remote apps will be referred to as 'NSClient remote' and 'NSClient remote Wear' apps.

To enable NSClient remote functionality you must: 1) Install the NSClient remote app (the version should match the version of AAPS being used) 2) Run the NSClient remote app and proceed through the configuration wizard to grant required permissions and configure access to your Nightscout site. 3) At this point you may want to disable some of the Alarm options, and/or advanced settings which log the start of the NSClient remote app to your Nightscout site. Once this is done, NSClient remote will download Profile data from your Nightscout site, the 'Overview' tab will display CGM data and some AAPS data, but but may not display graph data, and will indicate that a profile isn't yet set. 4) To activate the profile:

- Enable remote profile synchronization in AAPS > NSClient > Options
- Activate the profile in NSClient remote > Profile After doing so, the profile will be set, and NSClient remote should display all data from AAPS. Hint: If the graph is still missing, try changing the graph settings to trigger an update. 5) To enable remote control by the AAPS NSClient, selectively enable the aspects of AAPS (Profile changes, Temp Targets, Carbs, etc.) that you would like to be able to control remotely via AAPS > NSClient > Options . Once these changes are made, you'll be able to remotely control AAPS via either Nightscout or NSClient remote.

If you'd like to monitor/control AAPS via the NSClient remote Wear App, you'll need both NSClient remote and the associated Wear app to be installed. To compile the NSClient remote Wear app, follow the standard instructions for installing/configuring the AAPS wear app, except when compiling it, choose the NSClient variant.

## I have a red triangle / AAPS won't enable closed loop / Loops stays in LGS / I have a yellow triangle

The red and yellow triangles are a security feature in AAPS v3.

Red triangle means that you have duplicate BGs and AAPS can't calculate precisely the deltas. You can't close the loop. You need to delete one BG of each duplicated value in order to clear the red triangle. Go to BYODA or xDRIP tab, long press one line you want to delete, check one of each lines that are doubled (or via 3 dots menu and Delete, depending on your AAPS version). You may need to reset the AAPS databases if there are too many double BGs. In this case, you'll also loose stats, IOB, COB, selected profile.

Possible origin of the problem: xDrip and/or NS backfilling BGs.

The yellow triangle means unstable delay between each BG reading. You don't receive BGs every 5 min regularly or missing BGs. It is often a Libre problem. It also happens when you change G6 transmitter. If the yellow triangle is related to the G6 tansmitter change, it will go away by itself after several hours. In case of Libre, the yellow triangle will stay. The loop can be closed and works correctly.