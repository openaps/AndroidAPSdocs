# שאלות נפוצות של לופרים

How to add questions to the FAQ: Follow the these [instructions](../SupportingAaps/HowToEditTheDocs.md)

## General

### Can I just download the AAPS installation file?

לא. למעשה לא קיים קובץ התקנה (apk) להורדה עבור AndroidAPS, You have to [build](../SettingUpAaps/BuildingAaps.md) it yourself. להלן הסיבה לכך:

היישום AndroidAPS שולט למעשה במשאבה וקובע את מתן האינסולין. בהתאם לרגולציה הקיימת באירופה, כל מערכת שמסווגת IIa או IIb היא מערכת רפואית שדורשת אישור של הרגולטור (סימון CE) ומחייבת שורה של מחקרים ואישורים. הפצה של מערכת שאינה מאושרת ע"י הרגולטור אינה חוקית. רגולציה דומה קיימת גם באיזורים אחרים בעולם.

הדרישות הרגולטוריות אינן מוגבלות למכירה (בתמורה תשלום) והיא חלה על כל סוג של הפצה (גם אם נעשית בחינם). בניה של מכשיר רפואי לשימוש עצמי היא ההחרגה היחידה שמאפשרת הימנעות מהדרישות הרגולטוריות.

זו הסיבה שקובץ התקנה apk אינו זמין להורדה.

(FAQ-how-to-begin)=

### How to begin?

ראשית כל, יש להצטייד ב**ציוד המתאים ללופ**:

- A [supported insulin pump](../Getting-Started/CompatiblePumps.md), 
- an [Android smartphone](../Getting-Started/Phones.md) (Apple iOS is not supported by AAPS - you can check [iOS Loop](https://loopkit.github.io/loopdocs/)) and
- a [continuous glucose monitoring system](../Getting-Started/CompatiblesCgms.md). 

Secondly, you have to **setup your software components**: [AAPS](../SettingUpAaps/BuildingAaps.md), [CGM/FGM source](../Getting-Started/CompatiblesCgms.md) and a [reporting server](../SettingUpAaps/SettingUpTheReportingServer.md).

Thirdly, you have to learn and **understand the OpenAPS reference design to check your treatment factors**. The founding principle of closed looping is that your [basal rate and carb ratio](../SettingUpAaps/YourAapsProfile.md) are accurate. כל ההמלצות הטיפוליות מניחות שהתוכנית הבזאלית נכונה ושינויים ברמת הסוכר הם תוצאה של גורמים אחרים, שמחייבים תיקון והתאמה (פעילות גופנית, לחץ וכיו"ב.). על התיקונים וההתאמות המבוצעים ע"י הלולאה הסגורה חלות מגבלות וכללים לשמירה על בטיחות הטיפול (למשל מקסימום אינסולין בזאלי זמני ב[הגדרות OpenAPS](https://openaps.org/reference-design/)), כך שלא יעשה שימוש בבולוס על מנת לתקן תכנון בזאלי שגוי או שאינו מתאים. אם לדוגמה, המערכת קובעת בזאלי זמני נמוך מהתוכנית לקראת ארוחה באופן תדיר, יתכן שיש צורך לשנותה ולהתאים את התוכנית הבזאלית. You can use [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) to consider a large pool of data to suggest whether and how basals and/or ISF need to be adjusted, and also whether carb ratio needs to be changed. Or you can test and set your basal the [old-fashioned way](https://integrateddiabetes.com/basal-testing/).

### What practicalities of looping do I have?

#### Password protection

על מנת למנוע אפשרות לשינוי ההעדפות ביתר קלות, ניתן להגן על תפריט ההעדפות באמצעות סיסמה, על ידי בחירת "סיסמה להעדפות" בתפריט ההעדפות והזנה של סיסמה לבחירתכם. בכניסה הבאה לתפריט ההעדפות, תידרשו סיסמא להמשך. להסרת ההגנה בסיסמה מאוחר יותר, ניתן להכנס לתפריט "סיסמה להעדפות" ולמחוק את הטקסט משדה הסיסמה.

#### Android Wear Smartwatches

אם בכוונתכם להשתמש באפליקציית Android Wear לביצוע בולוס או שינויים בהגדרות, יש לוודא שהתראות מ-AndroidAPS אינן חסומות. אישור פעולות (למשל קביעת הגדרות או מתן בולוס) מבוצע באמצעות התראות.

(FAQ-disconnect-pump)=

#### Disconnect pump

אם אתם מורידים את המשאבה לצורך מקלחת, רחצה, שחייה, ספורט או פעילויות אחרות, עליכם ליידע את AndroidAPS על כך ולעצור את מתן האינסולין כדי לשמור על אינסולין פעיל (IOB) תקין.

The pump can be disconnected using the Loop Status icon on the [AAPS Home Screen](#AapsScreens-loop-status).

#### Recommendations not only based on one single CGM reading

לצורך שמירה על בטיחותכם, ההמלצות לטיפול אינן מבוססות על קריאת חיישן בודדת אלא על ממוצע שינויים של מספר מדידות. לפיכך, במקרה שיאבדו מספר קריאות סוכר ברצף, ייתכן ויעבור זמן מה לאחר חידוש הקשר עד ש-AndroidAPS יוכל להסתמך על הקריאות ולחזור להפעיל את הלולאה שוב.

#### Further readings

קיימים מספר בלוגים בהם ניתן למצוא טיפים טובים לעזרה בהבנת המערכת ומצבי הלופ השונים:

- [שיפור הגדרות ה-looping](https://seemycgm.com/2017/10/29/fine-tuning-settings/) באתר See my CGM
- [מדוע DIA משמעותי](https://seemycgm.com/2017/08/09/why-dia-matters/) באתר See my CGM
- [צמצום קפיצת רמת הסוכר בארוחות](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) באתר DIYPS#
- [הורמונים ו-Autosens](https://seemycgm.com/2017/06/06/hormones-2/) באתר See my CGM

### What emergency equipment is recommended to take with me?

ראשית, עליכם להצטייד בציוד החירום הרגיל, שכל סוכרתי שעושה שימוש במשאבת אינסולין ו-CGM נוהג לקחת איתו. בנוסף, כמשתמשי לופ העושים שימוש ב-AndroidAPS, מומלץ בחום להקפיד להצטייד או להחזיק בקרבת מקום את הפריטים הבאים:

- מטענים וסוללות חלופיות לטעינת הטלפון, השעון החכם, מכשיר הגישור ריילילינק וכו'
- סוללות למשאבה
- Current [apk](../SettingUpAaps/BuildingAaps.md) and [preferences files](../Maintenance/ExportImportSettings.md) for AAPS and any other apps you use (e.g. xDrip+, BYO Dexcom) both locally and in the cloud (Dropbox, Google Drive).

### How can I safely and securely attach the CGM/FGM?

ניתן להדביק את החיישן עם תוספת של סרט הדבקה. ישנן מספר מדבקות עם חירורים המיועדות לחיישנים נפוצים הניתנות לרכישה באינטרנט (חפשו בגוגל, אמזון ו-Ebay). לופרים רבים משתמשים בטייפ של קיבוע אינפוזיות (Tegaderm, Opsite), קינזיו-טייפ (Kinesiotape) או rocktape- מוצרים שניתן למצוא בכל בית מרקחת במחירים זולים יחסית.

ניתן לקבע את החיישן. ישנם גם צמידי זרוע שמחזיקים את החיישן על העור (חפשו בגוגל, אמזון ו-Ebay).

## APS algorithm

### Why does it show "dia:3" in the "OPENAPS AMA"-tab even though I have a different DIA in my profile?

![AMA 3h](../images/Screenshot_AMA3h.png)

ב-AMA, המושג DIA לא באמת מייצג "משך פעילות אינסולין". זהו פרמטר שהיה קשור למשך הפעילות אך כיום משמעותו היא "הזמן שבו התיקון הנוכחי צפוי להסתיים". אין לכך קשר לחישוב האינסולין הפעיל. ב-OpenAPS SMB אין צורך בפרמטר זה כלל.

## Other settings

### Nightscout settings

#### AAPSClient says 'not allowed' and does not upload data. What can I do?

In AAPSClient check 'Connection settings'. יכול להיות שאתם כרגע משתמשים ברשת אלחוטית שלא מאפשרת פעילות או שהפעלתם 'במצב טעינה בלבד' וכבל הטעינה לא מחובר.

### CGM settings

#### Why does AAPS say 'BG source doesn't support advanced filtering'?

אם אתם משתמשים בחיישן שאינו דקסקום G5 או G6 עם xDrip במצב נטיבי, התראה זו תופיע בלשונית OpenAPS. See [Smoothing blood glucose data](../CompatibleCgms/SmoothingBloodGlucoseData.md) for more details.

### Pump

#### Where to place the pump?

יש מגוון רחב של מקומות למיקום המשאבה על הגוף. אין זה משנה אם אתם משתמשים בלופ או לא.

#### Batteries

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

- for [Dana R/RS pumps](../CompatiblePumps/DanaRS-Insulin-Pump.md) the startup procedure draws a high current across the battery to purposefully break the passivation film (prevents loss of energy whilst in storage) but it doesn't always work to break it 100%. הוציאו והחזירו את הסוללה 2-3 פעמים עד להופעת 100% על המסך, או, לפני הכנסתה, געו בשני מסופי הסוללה בעזרת מפתח לזמן קצר מאוד, כדי לגרום לקצר רגעי.
- see also more tips for [particular types of battery](#Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)

#### Changing reservoirs and cannulas

לא ניתן לבצע את החלפת המכל באמצעות AndroidAPS. יש לבצע אותה כבעבר, ישירות בגוף המשאבה.

- לחצו לחיצה ארוכה על צלמית "לולאה פתוחה"/"לולאה סגורה" בלשונית דף הבית של AndroidAPS ובחרו 'השהה לולאה למשך שעה'
- נתקו את המשאבה, החליפו את המכל בהתאם להוראות ההפעלה של המשאבה.
- בצעו גם תיחול (Prime) של הצינורית ישירות במשאבה (במשאבות תומכות). In this case use [PRIME/FILL button](#screens-action-tab) in the actions tab just to record the change.
- לאחר החיבור מחדש של המשאבה, הפעילו את הלולאה מחדש על ידי לחיצה על צלמית הלולאה ובחירת חיבור מחדש.

כפתור החלפת הצינורית לא משתמש בפונקציית התיחול של המשאבה אלא ממלא את הצינורית ואת הקנולה ע"י ביצוע בולוס שאינו נרשם בהיסטוריית הטיפולים. אין השפעה על הבזאלי הזמני הנוכחי. On the Actions (Act) tab, use the [PRIME/FILL button](#screens-action-tab) to set the amount of insulin needed to fill the infusion set and start the priming. אם הכמות לא הספיקה, חזרו את המילוי. ניתן להגדיר לחצנים עם כמויות ברירת מחדל בתפריט העדפות > סקירה כללית > מילוי\תיחול כמויות סטנדרטיות של אינסולין. עיינו בחוברת ההוראות שבקופסת הקנולות כדי לברר כמה יחידות דרושות לתיחול, בהתאם לאורך המחט ואורך הצינורות.

### Wallpaper

You can find the AAPS wallpaper for your phone on the [phones page](#Phones-phone-wallpaper).

### Daily usage

#### Hygiene

##### What to do when taking a shower or bath?

ניתן להסיר את המשאבה בזמן מקלחת וטבילה באמבט (לא רלוונטי למשתמשי אומניפוד). במשך פרק הזמן הקצר הזה אולי לא תזדקקו לכך, אך עליכם להודיע ל-AAPS שהתנתקתם כדי שחישובי IOB יהיו נכונים. See [description above](#FAQ-disconnect-pump).

#### Work

בהתאם לסוג עבודתכם, ייתכן שתשתמשו בהגדרות טיפול שונות בימי עבודה לעומת ימי חופש. As a looper you should consider a [profile switch](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) for your typical working day. לדוגמה, ניתן לעבור לפרופיל גבוה מ-100% אם יש עבודה פחות תובענית (למשל ישיבה ליד שולחן), או פחות מ-100% אם אתם פעילים ועומדים על הרגליים כל היום. You could also consider a high or low temporary target or a [time shift of your profile](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) when working much earlier or later than regular, of if you work different shifts. אפשר גם ליצור פרופיל נוסף (לדוגמה "בית", "יום עבודה") ולבצע החלפת פרופיל לפי הצורך.

### Leisure activities

(FAQ-sports)=

#### Sports

עליכם לתכנן מחדש את הרגלי הספורט שלכם מהימים שלפני הלופ. אם התרגלתם לאכול פחמימות לפני האימון, הלולאה הסגורה תזהה זאת ותתקן בהתאם.

לכן, בגופכם יהיו יותר פחמימות אבל במקביל, הלופ יפעל כנגד הפחמימות עם הזרקת אינסולין.

בעת שימוש בלופ, נסו את הפעולות הבאות:

- Make a [profile switch](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) < 100%.
- Set an [activity temp target](#TempTargets-activity-temp-target) above your standard target.
- If you are using SMB make sure ["Enable SMB with high temp targets"](#Open-APS-features-enable-smb-with-high-temp-targets) and ["Enable SMB always"](#Open-APS-features-enable-smb-always) are disabled.

ביצוע הפעולות לפני וביטולן אחרי הפעילות הגופנית חשובים מאוד. בצעו את השינויים זמן מה לפני הפעילות הגופנית וקחו בחשבון את השפעת ניפוח השרירים.

If you do sports regularly at the same time (i.e. sports class in your gym) you can consider using [automation](../DailyLifeWithAaps/Automations.md) for profile switch and TT. גם אוטומציות תלויות מיקום (לפי GPS) יכולות להיות שימושיות אך הסתמכות עליהן תקשה על ביצוע השינויים מספיק זמן לפני האימון.

אחוז הפרופיל הזמני והערך המטרה הזמני המתאימים לכם הם אישיים לכם. ליתר בטיחות, התחילו מלהשתמש באחוזים מעט יותר נמוכים מהרגיל ומערכי מטרה גבוהים, המשיכו לשפר את הערכים באימונים הבאים עד שתדעו מהם הערכים המתאימים לכם.

#### Sex

ניתן להסיר את המשאבה כדי להרגיש יותר חופשיים אך עליכם להודיע ל-AAPS על כך "כניתוק" כדי שלא יחולו טעויות בחישובי האינסולין הפעיל. See [description above](#FAQ-disconnect-pump).

#### Drinking alcohol

שתיית אלכוהול עשויה להיות מסוכנת בשימוש בלולאה סגורה כיוון שהאלגוריתם לא יכול לחזות נכונה את השפעת האלכוהול על הסוכר בדם. נסו את השיטות הבאות כדי להבין איזו מהן עדיפה לכם:

- השביתו את הלופ הסגור וטפלו בסוכרת בלעדיו או
- הגדירו ערכי מטרה גבוהים, כבו את UMA כדי למנוע מהלופ להעלות את האינסולין הפעיל עקב ארוחה או
- הפעילו פרופיל זמני של פחות מ-100% 

כשאתם שותים אלכוהול, עליכם לשים עין על נתוני הסוכר כדי להמנע מהיפוגליקמיה כתוצאה מאכילת פחמימות.

#### Sleeping

##### How can I loop during the night without mobile and WIFI radiation?

משתמשים רבים מפעילים את מצב המטוס של מכשירם בלילה. If you want the loop to support you when you are sleeping, proceed as follows (this will only work with a local BG-source such as xDrip+ or ['Build your own Dexcom App'](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app), it will NOT work if you get the BG-readings via Nightscout):

1. הפעילו מצב טיסה במכשירכם.
2. המתינו להפעלת מצב טיסה.
3. הפעילו בלוטות'.

כעת לא תקבלו שיחות והאתם מנותקים מהאינטרנט. אך הלופ פועל בכל זאת.

משתמשים מסויימים חווים בעיות עם השידור המקומי (AAPS לא מקבל נתוני סוכר מ-xDrip) בזמן שהם במצב טיסה. ב-xDrip, גשו להגדרות > הגדרות לשיתוף פעולה בין אפליקציות > זיהוי מקלט > רשמו `info.nightscout.androidaps` באותיות קטנות בלבד.

![xDrip+ Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

#### Travelling

##### How to deal with time zone changes?

אם אתם משתמשים במשאבות Dana R או Dana R מהשוק הקוריאני, אתם לא צריכים לעשות דבר. For other pumps see [time zone travelling](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) page for more details.

### Medical topics

#### Hospitalization

If you want to share some information about AAPS and DIY looping with your clinicians, you can print out the [guide to AAPS for clinicians](../UsefulLinks/ClinicianGuideToAaps.md).

#### Medical appointment with your endocrinologist

##### Reporting

ניתן להציג לרופא את הדוחות של Nightscout בכתובת https://YOUR-NS-SITE.com/report או להשתמש ב-[Nightscout Reporter](https://nightscout-reporter.zreptil.de/).

## Frequent questions on Discord and their answers...

### My problem is not listed here.

[מידע לקבלת עזרה.](../GettingHelp/WhereCanIGetHelp.md)

### My problem is not listed here but I found the solution

[מידע לקבלת עזרה.](../GettingHelp/WhereCanIGetHelp.md)

**הזכירו לנו להוסיף את הפתרון שלכם לרשימה זו!**

### AAPS stops everyday around the same time.

עצרו את Google Play Protect. בדקו אם יש אפליקציות "ניקיון" (לדוגמה CCleaner וכו') והסירו אותן. AAPS > תפריט 3 נקודות > אודות > עקבו אחר ההוראות שבקישור "איך לא להשבית את האפליקציה שלי?" כדי לעצור את כל אופטימיזציות הסוללה.

### How to organize my backups ?

ייצוא הגדרות בקביעות: לאחר כל החלפת פוד, לאחר שינוי בפרופיל שלכם, לאחר סיום משימה, אם משנים את סוג המשאבה... גם אם שום דבר לא שונה, ייצאו פעם בחודש. שמרו כמה קבצי ייצוא ישנים.

העתיקו לכונן אינטרנט (Dropbox, Google וכו'): כל קבצי ה-APK שבהם השתמשתם כדי להתקין אפליקציות בטלפון (AAPS, xDrip, BYODA, Patched LibreLink...) כמו גם את קבצי ההגדרות המיוצאים מכל האפליקציות.

### I have problems, errors building the app.

Please

- check [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio) for typical errors and
- הטיפים שב[מדריך הבניה, שלב אחר שלב](https://docs.google.com/document/d/1oc7aG0qrIMvK57unMqPEOoLt-J8UT1mxTKdTAxm8-po).

### I'm stuck on an objective and need help.

צלמו את המסך עם השאלה והתשובות. פרסמו בערוץ ה-AAPS ב-Discord. אל תשכחו לספר באילו אפשרויות אתם בוחרים (או לא) ומדוע. אתם תקבלו רמזים ועזרה אבל תצטרכו להגיע לתשובה בעצמכם.

### How to reset the password in AAPS v2.8.x ?

פתחו את תפריט ההמבורגר, הפעילו את אשף התצורה והזינו סיסמה חדשה כשתתבקשו. ניתן לצאת מהאשף לאחר שלב בחירת הסיסמה.

### How to reset the password in AAPS v3.x

You find the documentation [here](#Update3_0-reset-master-password).

### My link/pump/pod is unresponsive (RL/OL/EmaLink…)

בטלפונים מסוימים, יש ניתוק בלוטות' ממכשירי הקישור (RL/AOL/Email...).

לחלקם יש גם קישורים שאינם מגיבים (AAPS אומר שהם מחוברים אבל מכשירי הקישור לא יכולים להגיע למשאבה או לפקד עליה)

הדרך הקלה ביותר לגרום לכל החלקים הללו לעבוד יחד היא: (1) מחקו את מכשיר הקישור מ-AAPS. (2) כיבוי מכשיר הקישור. (3) תפריט 3 נקודות > יציאה. (4) לחיצה ארוכה על סמל AAPS, תפריט אנדרואיד, מידע על אפליקציית AAPS, עצירת AAPS בכוח ולאחר מכן מחקו זיכרון מטמון (אל תמחקו את הזיכרון הראשי!) לעיתים נדירות טלפונים מסוימים עשויים להזדקק לאתחול בנקודה זו. אפשר לנסות בלי לאתחל. (5) הפעלת מכשיר הקישור (6) הפעלת AAPS (7) לשונית הפוד > תפריט 3 נקודות > חיפוש וחיבור מכשיר הקישור

### Build error: file name too long

בזמן ניסיון לבנות אני מקבל\ת שגיאה המציינת ששם הקובץ ארוך מדי. פתרונות אפשריים: העבירו את המקורות שלכם לספריה קרובה יותר לספריית הבסיס של הכונן שלך (למשל "c:\src\AndroidAPS-EROS").

מאנדרואיד סטודיו: ודאו שהסנכרון והאינדקס של "Gradle" בוצע לאחר פתיחת הפרוייקט והעתקה מ-GitHub. בצעו Build->Clean Project לפני ביצוע פרויקט בנייה מחדש. הפעילו File->Invalidate Caches והפעילו מחדש את Android Studio.

### Alert: Running dev version. Closed loop is disabled

AndroidAPS אינו פועל ב"מצב מפתחים". AAPS מציג את ההודעה הבאה: "מריץ את גרסת הפיתוח. לולאה סגורה מושבתת".

ודאו ש-AndroidAPS פועל ב"מצב מפתחים": מקמו קובץ בשם "engineering_mode" בנתיב "AAPS/extra". כל קובץ יצליח כל עוד הוא נקרא כראוי. הקפידו להפעיל מחדש את AndroidAPS כדי שימצא את הקובץ ויעבור ל"מצב מפתחים".

רמז: צרו עותק של קובץ יומן קיים ושנו את שמו ל-"engineering_mode" (שים לב: אין סיומת לשם הקובץ! ושיש רק קו תחתון אחד בשם).

### Where can I find settings files?

קבצי ההגדרות יאוחסנו באחסון הפנימי של הטלפון בספרייה "/AAPS/preferences". אזהרה: הקפידו לא לאבד את הסיסמה שלכם כי בלעדיה לא תוכלו לייבא קובץ הגדרות כי הוא מוצפן!

### How to configure battery savings?

הגדרה נכונה של ניהול צריכת החשמל חשובה כדי למנוע ממערכת ההפעלה של הטלפון לעצור את AndroidAPS ואת האפליקציות והשירותים האחרים הקשורים ללופ כאשר הטלפון אינו בשימוש. כתוצאה מכך AAPS לא יכול לעשות את עבודתו ו\או חיבורי בלוטות' לחיישן ולריילילינק Rileylink עלולים להיסגר ולגרום להתראות "המשאבה מנותקת" ולשגיאות תקשורת. בטלפון, עברו אל הגדרות -> אפליקציות והשביתו את החיסכון בסוללה עבור: AndroidAPS, xDrip או BYODA/Dexcom אפליקציית מערכת הבלוטות' (ייתכן שתצטרכו לבחור לאפשר תחילה לצפייה באפליקציות מערכת) לחלופין, השביתו לחלוטין את כל החיסכון בסוללה בטלפון. כתוצאה מכך הסוללה עשויה להתרוקן מהר יותר, אבל זו דרך טובה לגלות אם חיסכון בסוללה גורם לבעיה. האופן שבו חיסכון בסוללה מיושם תלוי מאוד במותג, דגם ו\או גרסת מערכת ההפעלה של הטלפון. כתוצאה מכך כמעט בלתי אפשרי לתת הוראות להגדרה נכונה של חיסכון בסוללה עבור המערכת הספציפית שלכם. נסו וגלו אילו הגדרות עובדות הכי טוב עבורכם. למידע נוסף, ראו גם "איך לא להשבית את האפליקציה שלי?"

### Pump unreachable alerts several times a day or at night.

ייתכן שהטלפון שלך עוצר את שירותי AAPS או אפילו בלוטות' מה שגורם לו להתנתק מהריילילינק (ראו חיסכון בסוללה) שקלו להגדיר התראות על אי השגה ל-120 דקות על ידי מעבר לתפריט שלוש הנקודות בצד שמאל למעלה, בחירה בהעדפות->התראות מקומיות-> סף משאבה בלתי נגישה [min].

### Where can I delete treatments in AAPS v3 ?

תפריט 3 נקודות, בחרו טיפולים ואז שוב תפריט 3 נקודות שם יש אפשרויות זמינות שונות.

### Configuring and Using the AAPSClient remote app

AAPS can be monitored and controlled remotely via the AAPSClient app and optionally via the associated Wear app running on Android Wear watches. Note that the AAPSClient (remote) app is distinct from the NSClient configuration in AAPS, and the AAPSClient (remote) Wear app is distinct from the AAPS Wear app--for clarity the remote apps will be referred to as 'AAPSClient remote' and 'AAPS remote Wear' apps.

To enable AAPSClient remote functionality you must: 1) Install the AAPSClient remote app (the version should match the version of AAPS being used) 2) Run the AAPSClient remote app and proceed through the configuration wizard to grant required permissions and configure access to your Nightscout site. 3) At this point you may want to disable some of the Alarm options, and/or advanced settings which log the start of the AAPSClient remote app to your Nightscout site. Once this is done, AAPSClient remote will download Profile data from your Nightscout site, the 'Overview' tab will display CGM data and some AAPS data, but but may not display graph data, and will indicate that a profile isn't yet set. (4) כדי להפעיל את הפרופיל:

- אפשרו סנכרון פרופיל מרחוק ב-AAPS > מסך NSClient > תפריט 3 נקודות או גלגל שיניים > העדפות NSClient > סינכרון 
- Activate the profile in NSClient remote > Profile After doing so, the profile will be set, and AAPSClient remote should display all data from AAPS. רמז: אם הגרף עדיין חסר, נסו לשנות את הגדרות הגרף כדי לאלץ עדכון. 5) To enable remote control by the AAPSClient, selectively enable the aspects of AAPS (Profile changes, Temp Targets, Carbs, etc.) that you would like to be able to control remotely via AAPS > NSClient > Options . Once these changes are made, you'll be able to remotely control AAPS via either Nightscout or AAPSClient remote.

If you'd like to monitor/control AAPS via the AAPSClient remote Wear App, you'll need both AAPSClient remote and the associated Wear app to be installed. To compile the AAPSClient remote Wear app, follow the standard instructions for installing/configuring the AAPS wear app, except when compiling it, choose the AAPSClient variant.

### I have a red triangle / AAPS won't enable closed loop / Loops stays in LGS / I have a yellow triangle

המשולשים האדומים והצהובים הם תכונת אבטחה ב-AAPS v3.

משולש אדום אומר שיש כפילות נתוני סוכר ו-AAPS לא יכול לחשב במדויק את ההפרשים. עקב כך אי אפשר לסגור את הלולאה. עליכם למחוק את כל הנתונים הכפולים כדי להעלים את המשולש האדום. עברו ללשונית BYODA או xDrip, לחצו לחיצה ארוכה על שורה אחת שברצונך למחוק, סמנו כל שורה שהוכפלה (או דרך תפריט 3 נקודות ומחיקה, בהתאם לגרסת ה-AAPS). ייתכן שיהיה עליכם לאפס את מסדי הנתונים של AAPS אם יש יותר מדי ערכי סוכר כפולים. במקרה זה, תאבדו גם נתונים סטטיסטיים, פחמימות פעילות, אינסולין פעיל ופרופיל הנבחר.

מקור אפשרי לבעיה: הופעלה הורדת נתוני סוכר מ-NS בהגדרות AAPS או ב-xDrip.

המשולש הצהוב פירושו הפרש זמנים לא קבוע בין כל קריאת סוכר. כלומר לא מקבלים נתוני סוכר כל 5 דקות באופן קבוע או שנתונים חסרים. לעתים קרובות זו בעיה של Libre. זה קורה גם כאשר מחליפים משדר G6. אם המשולש הצהוב קשור להחלפת משדר G6, הוא ייעלם מעצמו לאחר מספר שעות (כ-24 שעות). במקרה של Libre, המשולש הצהוב יישאר. הלולאה ניתנת לסגירה ופועלת כהלכה.

### Can I move an active DASH Pod to other hardware?

זה אפשרי. יש לשים לב שמכיוון שמעבר הוא "לא נתמך" ו"לא נבדק", קיים סיכון מסוים. עדיף לנסות את ההליך כאשר הפוד עומד לפוג, כך שכשדברים משתבשים, לא הרבה ילך לאיבוד.

זה קריטי ש"מצב" הפוד (הכוללת את כתובת ה-MAC שלו) ב-AAPS ו-DASH יהיו תואמים בחיבור מחדש

### Procedure I follow in this:

1) השעו (Suspend) את פוד ה-DASH. זה מוודא שאין פקודות פועלות או בתור כאשר DASH מאבד את החיבור 2) הכניסו את הטלפון למצב טיסה כדי להשבית את הבלוטות' (כמו גם WiFi ונתונים ניידים). כך מבטיחים ש-AAPS ו-DASH לא יכולים לתקשר. 3) ייצאו ההגדרות בתפריט התחזוקה (הכוללות את מצב DASH) 4) העתיקו את קובץ ההגדרות שיצא זה עתה מהטלפון (מכיוון שהוא כבר במצב טיסה ואנחנו לא רוצים לשנות זאת, הדרך הקלה ביותר היא באמצעות כבל USB) 5) העבירו את קובץ ההגדרות אל הטלפון החלופי. 6) ייבאו את הגדרות ב-AAPS שבטלפון החלופי. 7) בדקו בלשונית DASH שהוא מזהה את הפוד. 8) בטלו את השעיית הפוד. 9) בדקו בלשונית DASH ש-AAPS מתקשר עם הפוד (לחצו על לחצן הרענון)

ברכות! הצלחתם!

*רגע!* עדיין יש לכם את הטלפון הראשון והוא חושב שהוא יכול להתחבר מחדש לאותו DASH:

1) בטלפון הראשי בחרו "כבה פוד". זה בטוח מכיוון שלטלפון אין דרך לתקשר עם DASH כדי לבטל את הפוד בפועל (כי הוא עדיין במצב טיסה) 2) השבתה תגרום לשגיאת תקשורת - זה צפוי. 3) פשוט לחצו על "נסה שוב" כמה פעמים עד ש-AAPS יציע את האפשרות "להיפטר" מהפוד.

לאחר ש-"נפטרים" מהפוד, ודאו ש-AAPS מדווח "אין פוד פעיל". כעת תוכלו להשבית בבטחה שוב את מצב המטוס.

### How do I import settings from earlier versions of AAPS into AAPS v3 ?

ניתן לייבא רק הגדרות (ב-AAPS v3) שיוצאו באמצעות AAPS v2.8x או v3.x. אם השתמשתם בגרסה ישנה מ-v2.8x או שאתם צריכים להשתמש בייצוא הגדרות ישנות יותר מ-v2.8x, עליכם להתקין תחילה את AAPS v2.8. ייבאו את ההגדרות הישנות יותר של v2.x ב-v2.8. לאחר בדיקה שהכל תקין, תוכלו לייצא הגדרות מגרסה 2.8. התקינו את AAPS v3 וייבאו הגדרות v2.8 ב-v3.

אם אתם משתמשים באותו מפתח לבניית אפליקציות v2.8 ו-v3, אפילו לא תצטרכו לייבא הגדרות. תוכלו להתקין בדריסה את גרסה 3 על גרסה 2.8.

נוספו מספר משימות חדשות. תצטרכו להשלים אותן.