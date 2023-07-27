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

הרשימה הבאה מסכמת את שלבי האופטימיזציה של הפרופיל שלכם. מומלץ לבצע את התהליך לפי הסדר הרשום מטה. חשוב לסיים לקבוע כל הגדרה לפני שמתקדמים להגדרה הבאה. יש לבצע שינויים קטנים בהדרגה ולהמנע משינויים גדולים בכל פעם. ניתן להשתמש ב[Autotune](https://autotuneweb.azurewebsites.net/) כאמצעי להנחייה בקביעת ההגדרות אך חשוב לבחון כל מקרה לגופו ולא לאמץ את ההמלצות באופן אוטומטי. יתכן שלא בכל המקרים ההמלצות יתאימו לכם. ההגדרות יכולות להשפיע אחת על השניה - יתכן מצב שמספר הגדרות שמוגדרות בצורה שגויה מפצות אחת על השניה ומביאות לתוצאה חיובית (למשל בזאלי גבוה מדי יחד עם יחס אינסולין\פחמימה (IC) גבוה מדי) ויתכן מצב שההשפעה ההדדית של הגדרות תהיה שלילית. לכן, תמיד חשוב לשים לב לכל ההגדרות ולוודא שהן תקינות ושביחד הן נותנות תוצאה טובה במצבים שונים.

## משך פעילות האינסולין (DIA) (שעות)

### תיאור ובדיקה

משך הזמן שלוקח לאינסולין שהוזרק לדעוך עד 0.

במקרים רבים המשך מוגדר קצר מדי. אצל רוב האנשים ההגדרה המתאימה היא 5 שעות, ובחלק מהמקרים גם 6 ואף 7.

(FAQ-impact)=

### השפעה

הגדרת ערך DIA נמוך מדי עשויה להביא לרמת סוכר נמוכה ולהיפך.

אם משך פעילות האינסולין קצר מדי, AAPS יחשב בטעות שהבולוס הקודם דעך לחלוטין ואז בזמן שהסוכר עדיין גבוה, יזריק עוד. (למעשה, הוא לא ימתין שהאינסולין הפעיל יגיע לאפס ויתחיל לתת עוד אינסולין כשההשפעה על הסוכר לא תיראה מספקת). כתוצאה מכך, נוצרת הערמה של הזרקות, אליהן AAPS לא מודע.

כאשר DIA קצר מדי, הסוכר גבוה ולאחר מכן AAPS יתקן ויוריד ביתר עד להיפוגליקמיה.

## תוכנית המינונים הבזאליים (יחידות\שעה)

### תיאור ובדיקה

מינון האינסולין שמוזרק בשעה נתונה לצורך שמירה על יציבות של רמת הסוכר בדם.

בדקו את התאמת המינונים שלכם ע"י השבתת הלופ, צום, צפייה בסוכר במשך כ-5 שעות אחרי ארוחה כדי לראות את השינויים בסוכר. חזרו על תהליך זה מספר פעמים.

אם רמת הסוכר יורדת, המינון הבזאלי גבוה מדי. ולהיפך.

### השפעה

הגדרת מינונים בזאליים גבוהים מדי עלולה להביא לערכי סוכר נמוכים (היפוגליקמיה). ולהיפך.

חישובי AAPS מסתמכים על המינונים המוגדרים בתוכנית הבזאלית. אם המינונים הבזאליים גבוהים מדי, השהייה זמנית של הבזאלי (zero temp) תוצג כאינסולין פעיל (IOB) שלילי גבוה ממה שניתן היה לצפות, מה שגורם לכך ש-AAPS ייתן יותר תיקונים מהדרוש כדי להביא את האינסולין הפעיל חזרה ל-0.

מינון בזאלי גבוה מדי יגרום לסוכר נמוך גם עם מינון ברירת המחדל הבזאלי וגם שעות אחר כך כש-AAPS ינסה לתקן כדי להגיע לערך המטרה.

מצד שני, מינון נמוך מדי יביא לעליה בסוכר ולכשלון בלהוריד את הסוכר אל ערך המטרה.

## רגישות או יחס התיקון (ISF) (mg/dl/U)

### תיאור ובדיקה

המדד שמתאר כמה סוכר (mg/dl) צפוי לרדת כתוצאה מהזרקת יחידת אינסולין אחת.

בהנחה שהמינון הבזאלי נכון, תוכלו לבדוק את מדד זה ע"י השבתת הלופ, וידוא שאין אינסולין פעיל, אכילת מספר טבליות גלוקוז לקבלת סוכר גבוה ויציב.

לאחר מכן בצעו בולוס ע"פ ה-ISF המוגדר בפרופיל ועקבו אחר הירידה בסוכר.

היזהרו מהיפוגליקמיה כי במקרים רבים ערך ה-ISF מוגדר נמוך מהדרוש. משמעות ערך ISF נמוך היא שיחידת אינסולין תוריד את הסוכר מהר מהצפוי.

### השפעה

**ISF נמוך** (לדוגמה 40 במקום 50) משמע כל יחידת אינסולין מפחיתה פחות את הסוכר בדם. זה מוביל לתיקון אגרסיבי\חזק יותר ע"י הלולאה עם **יותר אינסולין**. ערך נמוך מדי יביא להיפוגלקמיות.

**ISF גבוה** (לדוגמה 45 במקום 35) משמע כל יחידת אינסולין מפחיתה יותר את הסוכר בדם. זה מוביל לתיקון עדין\חלש יותר ע"י הלולאה עם **פחות אינסולין**. ערך ISF גבוה מדי יביא לסוכר גבוה, להיפרגלקמיות.

**Example:**

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

בהנחה שהמינון הבזאלי נכון, תוכלו לנסות את ה-IC ע"י וידוא שהאינסולין הפעיל הוא 0 ובזמן שאתם עם סוכר בטווח תקין, לאכול כמות ידוע ומדוייקת של פחמימות ואז להזריק בולוס ע"פ ה-IC הנוכחי המוגדר בפרופיל. מומלץ לאכול את מה שבדרך כלל אתם אוכלים בשעה כזו ביממה ולספור את הפחמימות במדוייק.

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

לפני הכל, בדקו את המינונים הבזאליים ובצעו מבחן מינונים בזאליים בצום. אם מצאתם שהם נכונים והסוכר נופל אל המטרה לאחר ספיגה מלאה של הפחמימות, נסו להפעיל מטרה זמנית 'אוכלים בקרוב' ב-AndroidAPS זמן מסויים לפני הארוחה או שתתייעצו עם האנדוקרינולוג שלכם על בולוס קדם-ארוחה מתאים. אם הסוכר גבוה מדי לאחר ארוחה ועדיין גבוה לאחר ספיגה מלאה, חשבו על להוריד את יחס הפחמימות, בייעוץ עם אנדוקרינולוג. אם הסוכר גבוה בזמן שיש עדיין פחמימות פעילות ונמוך אחרי סיום ספיגת הפחמימות, חשבו על להעלות את ה-IC ולבצע בולוס קדם-ארוחה בייעוץ עם אנדוקרינולוג.

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
- לקריאה נוספת של טיפים נוספים [לסוגים מסוימים של סוללות](Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life).

### החלפת מכלים וצינוריות

לא ניתן לבצע את החלפת המכל באמצעות AndroidAPS. יש לבצע אותה כבעבר, ישירות בגוף המשאבה.

- לחצו לחיצה ארוכה על צלמית "לולאה פתוחה"/"לולאה סגורה" בלשונית דף הבית של AndroidAPS ובחרו 'השהה לולאה למשך שעה'
- נתקו את המשאבה, החליפו את המכל בהתאם להוראות ההפעלה של המשאבה.
- בצעו גם תיחול (Prime) של הצינורית ישירות במשאבה (במשאבות תומכות). במקרה כזה, לחצו גם על לחצן [תיחול\מילוי](CPbefore26-pump) בלשונית פעולות לצורך רישום התיחול.
- לאחר החיבור מחדש של המשאבה, הפעילו את הלולאה מחדש על ידי לחיצה על צלמית הלולאה ובחירת חיבור מחדש.

כפתור החלפת הצינורית לא משתמש בפונקציית התיחול של המשאבה אלא ממלא את הצינורית ואת הקנולה ע"י ביצוע בולוס שאינו נרשם בהיסטוריית הטיפולים. אין השפעה על הבזאלי הזמני הנוכחי. בלשונית פעולות, השתמשו בלחצן [תיחול\מילוי](CPbefore26-pump) כדי לקבוע את כמות האינסולין הדרושה לתיחול והתחילו את מילוי הצינורית. אם הכמות לא הספיקה, חזרו את המילוי. ניתן להגדיר לחצנים עם כמויות ברירת מחדל בתפריט העדפות > סקירה כללית > מילוי\תיחול כמויות סטנדרטיות של אינסולין. עיינו בחוברת ההוראות שבקופסת הקנולות כדי לברר כמה יחידות דרושות לתיחול, בהתאם לאורך המחט ואורך הצינורות.

## טפט

תוכלו למצוא את הטפט של AAPS למכשירכם [בעמוד הטלפונים](Phones-phone-background).

## שימוש יום-יומי

### היגיינה

#### מה עושים כשרוצים להתקלח?

ניתן להסיר את המשאבה בזמן מקלחת וטבילה באמבט (לא רלוונטי למשתמשי אומניפוד). במשך פרק הזמן הקצר הזה אולי לא תזדקקו לכך, אך עליכם להודיע ל-AAPS שהתנתקתם כדי שחישובי IOB יהיו נכונים. ראו [הסבר מעלה](FAQ-disconnect-pump).

### בעבודה

בהתאם לסוג עבודתכם, ייתכן שתשתמשו בהגדרות טיפול שונות בימי עבודה לעומת ימי חופש. כלופרים, מומלץ לכם לשקול לבצע [החלפת פרופיל](../Usage/Profiles.md) לימי עבודה טיפוסיים. לדוגמה, ניתן לעבור לפרופיל גבוה מ-100% אם יש עבודה פחות תובענית (למשל ישיבה ליד שולחן), או פחות מ-100% אם אתם פעילים ועומדים על הרגליים כל היום. יש לשקול גם ערך מטרה זמני גבוה או נמוך או [היסט זמן של הפרופיל](Profiles-time-shift) כאשר אתם עובדים מוקדם או מאוחר מהרגיל, או אם אתם עובדים במשמרות שונות. אפשר גם ליצור פרופיל נוסף (לדוגמה "בית", "יום עבודה") ולבצע החלפת פרופיל לפי הצורך.

## פעילויות פנאי

(FAQ-sports)=

### ספורט

עליכם לתכנן מחדש את הרגלי הספורט שלכם מהימים שלפני הלופ. אם התרגלתם לאכול פחמימות לפני האימון, הלולאה הסגורה תזהה זאת ותתקן בהתאם.

לכן, בגופכם יהיו יותר פחמימות אבל במקביל, הלופ יפעל כנגד הפחמימות עם הזרקת אינסולין.

בעת שימוש בלופ, נסו את הפעולות הבאות:

- בצעו [החלפת פרופיל](../Usage/Profiles.md) < 100%.
- הגדירו [ערך מטרה זמני](temptarget-activity-temp-target) גבוה מהרגיל.
- אם אתם משתמשים ב-SMB, וודאו שכיביתם את [הפעלת SMB עם ערכי מטרה גבוהים](Open-APS-features-enable-smb-with-high-temp-targets) ואת [הפעלת SMB תמיד](Open-APS-features#enable-smb-always).

ביצוע הפעולות לפני וביטולן אחרי הפעילות הגופנית חשובים מאוד. בצעו את השינויים זמן מה לפני הפעילות הגופנית וקחו בחשבון את השפעת ניפוח השרירים.

אם אתם מתאמנים בזמנים קבועים (לדוגמה שיעורי\חוגי ספורט), שקלו להשתמש [באוטומציה](../Usage/Automation.md) שתבצע שינויים בפרופיל ובערך המטרה בזמנים אלה אוטומטית. גם אוטומציות תלויות מיקום (לפי GPS) יכולות להיות שימושיות אך הסתמכות עליהן תקשה על ביצוע השינויים מספיק זמן לפני האימון.

אחוז הפרופיל הזמני והערך המטרה הזמני המתאימים לכם הם אישיים לכם. ליתר בטיחות, התחילו מלהשתמש באחוזים מעט יותר נמוכים מהרגיל ומערכי מטרה גבוהים, המשיכו לשפר את הערכים באימונים הבאים עד שתדעו מהם הערכים המתאימים לכם.

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

כעת לא תקבלו שיחות והאתם מנותקים מהאינטרנט. אך הלופ פועל בכל זאת.

משתמשים מסויימים חווים בעיות עם השידור המקומי (AAPS לא מקבל נתוני סוכר מ-xDrip) בזמן שהם במצב טיסה. ב-xDrip, גשו להגדרות > הגדרות לשיתוף פעולה בין אפליקציות > זיהוי מקלט > רשמו `info.nightscout.androidaps` באותיות קטנות בלבד.

![xDrip+ Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

### נסיעות

#### כיצד להתמודד עם שינויי אזורי זמן?

אם אתם משתמשים במשאבות Dana R או Dana R מהשוק הקוריאני, אתם לא צריכים לעשות דבר. אם אתם משתמשים במשאבות אחרות, ראו [אזורי זמן ונסיעות](../Usage/Timezone-traveling.md) לקבלת פרטים נוספים.

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

עצרו את Google Play Protect. בדקו אם יש אפליקציות "ניקיון" (לדוגמה CCleaner וכו') והסירו אותן. AAPS > תפריט 3 נקודות > אודות > עקבו אחר ההוראות שבקישור "איך לא להשבית את האפליקציה שלי?" כדי לעצור את כל אופטימיזציות הסוללה.

## איך לארגן את הגיבויים שלי?

ייצוא הגדרות בקביעות: לאחר כל החלפת פוד, לאחר שינוי בפרופיל שלכם, לאחר סיום משימה, אם משנים את סוג המשאבה... גם אם שום דבר לא שונה, ייצאו פעם בחודש. שמרו כמה קבצי ייצוא ישנים.

העתיקו לכונן אינטרנט (Dropbox, Google וכו'): כל קבצי ה-APK שבהם השתמשתם כדי להתקין אפליקציות בטלפון (AAPS, xDrip, BYODA, Patched LibreLink...) כמו גם את קבצי ההגדרות המיוצאים מכל האפליקציות.

## יש לי בעיות ושגיאות בבניית האפליקציה.

Please

- ראו [פתרון בעיות ב-Android Studio](troubleshooting_androidstudio-troubleshooting-android-studio) עבור שגיאות אופייניות
- הטיפים שב[מדריך הבניה, שלב אחר שלב](https://docs.google.com/document/d/1oc7aG0qrIMvK57unMqPEOoLt-J8UT1mxTKdTAxm8-po).

## אני תקוע\ה במשימה וצריכ\ה עזרה.

צלמו את המסך עם השאלה והתשובות. פרסמו בערוץ ה-AAPS ב-Discord. אל תשכחו לספר באילו אפשרויות אתם בוחרים (או לא) ומדוע. אתם תקבלו רמזים ועזרה אבל תצטרכו להגיע לתשובה בעצמכם.

## כיצד לאפס את הסיסמה ב-AAPS v2.8.x?

פתחו את תפריט ההמבורגר, הפעילו את אשף התצורה והזינו סיסמה חדשה כשתתבקשו. ניתן לצאת מהאשף לאחר שלב בחירת הסיסמה.

## כיצד לאפס את הסיסמה ב-AAPS v3.x?

הסבר לכך נמצא [כאן](update3_0-reset-master-password).

## מכשיר הקישור\משאבה\פוד שלי לא מגיב (RileyLink/OrangeLink/EmaLink...)

בטלפונים מסוימים, יש ניתוק בלוטות' ממכשירי הקישור (RL/AOL/Email...).

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

ייתכן שהטלפון שלך עוצר את שירותי AAPS או אפילו בלוטות' מה שגורם לו להתנתק מהריילילינק (ראו חיסכון בסוללה) שקלו להגדיר התראות על אי השגה ל-120 דקות על ידי מעבר לתפריט שלוש הנקודות בצד שמאל למעלה, בחירה בהעדפות->התראות מקומיות-> סף משאבה בלתי נגישה [min].

## היכן אוכל למחוק טיפולים ב-AAPS v3?

תפריט 3 נקודות, בחרו טיפולים ואז שוב תפריט 3 נקודות שם יש אפשרויות זמינות שונות.

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