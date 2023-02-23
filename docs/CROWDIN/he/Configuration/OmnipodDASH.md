# Omnipod DASH

הוראות אלה מיועדות להגדרת משאבת  **Omnipod DASH** ** החדשה (לא Omnipod Eros)**. מנהל ההתקן של Omnipod זמין כחלק מ-AndroidAPS החל מגרסה 3.0.

**** תוכנה זו היא חלק מפתרון לבלב מלאכותי DIY ואינו מוצר אך דורש ממכם לקרוא, ללמוד ולהבין את המערכת, כולל את אופן השימוש בה. האחריות על השימוש במערכת היא עליכם בלבד.**

## מפרט Omnipod DASH

זהו המפרט של **Omnipod DASH** ומה מבדיל אותה מ-**Omnipod EROS**:

* פודי DASH ניתנים לזיהוי באמצעות מכסה מחט כחול (ל-EROS יש מכסה מחט שקוף). מעבר לכך הפודים זהים בחינת הממדים הפיזיים
* אין צורך במכשיר גישור בין Omnipod לבלוטות' (אין צורך ב-RileyLink, OrangeLink או EmaLink).
* חיבור הבלוטות' נוצר רק בעת הצורך, הלופ מתחבר לפוד כדי לשלוח פקודה ומתנתק מיד לאחר מכן!
* לא עוד שגיאות "אין חיבור לריילינק \ פוד"
* AAPS ימתין לנגישות לפוד כדי לשלוח פקודות
* בהפעלת פוד, AAPS יחפש ויחבר פוד DASH חדש.
* טווח צפוי: 5-10 מטרים (בערך)

## דרישות חומרה ותוכנה

* **Omnipod DASH Pod** חדש (מזוהה באמצעות מכסה מחט כחול)

![Omnipod Pod](../images/DASH_images/Omnipod_Pod.png)

* **טלפון Android תואם** עם חיבור בלוטות' (BLE)
   -  לא כל דגמי הטלפון וגרסאות האנדרואיד מובטחות לעבוד כהלכה. יש לבדוק את [**הטלפונים שנבדקו עם DASH**](https://docs.google.com/spreadsheets/d/1zO-Vf3wv0jji5Gflk6pe48oi348ApF5RvMcI6NG5TnY) או פשוט נסו עם הטלפון שלכם וספרו לנו את התוצאה (הפניה לטלפון ואזור גיאוגרפי, גרסת אנדרואיד, עבד / עם קשיים / לא עבד).
   - **הערה חשובה: היו מספר מקרים של איבודי חיבור קבועים שאינם ניתנים לשחזור בעת שימוש בפודים ישנים יותר עם גירסת קושחה 3X.XX  היזהרו בעת שימוש בפודים הישנים האלה עם AndroidAPS, במיוחד עם התקני בלוטות' מחוברים אחרים!**  
     שימו לב שמנהל ההתקן של AAPS עם Omnipod Dash מתחבר לפוד באמצעות בלוטות' בכל פעם שהוא שולח פקודה ואז מתנתק מיד לאחר מכן. חיבורי הבלוטות' עלולים להיות מופרעים על ידי מכשירים אחרים המקושרים לטלפון המפעיל את AAPS כגון אוזניות וכו'... (מה שעלול לגרום, במקרים נדירים, לבעיית חיבור או לשגיאות\אובדן פוד בהפעלה או לאחר מכן בחלק מדגמי הטלפון).
   -  **Version 3.0 or newer of AndroidAPS built and installed** using the [**Build APK**](../Installing-AndroidAPS/Building-APK.md) instructions.
* [**חיישן סוכר רציף (CGM)**](https://androidaps.readthedocs.io/en/latest/Configuration/BG-Source.html)

הוראות אלה מניחות כי אתם מתחילים שימוש בפוד חדש; אם זה לא כך, אנא התאזרו בסבלנות ונסו להתחיל בתהליך זה לקראת החלפת הפוד הבא.

## לפני שמתחילים

**בטיחות קודמת לכול** - אל תנסו לבצע את תהליך זה בסביבה שבה לא תוכלו להתאושש משגיאה (פודים נוספים, אינסולין ומכשיר הטלפון הם חובה).

**ה-Omnipod Dash PDM (השלט המקורי) לא יעבוד עוד לאחר שמנהל ההתקן של AAPS ל-Dash יפעיל את הפוד.** בעבר השתמשתם ב-Dash PDM כדי לשלוח פקודות לפוד. פוד מסוגל לקבל פקודות רק ממכשיר אחד. המכשיר שמפעיל את הפוד הוא המכשיר היחיד שמורשה לתקשר איתו מאותה נקודה ואילך. משמעות הדבר היא שברגע שיופעל פוד עם טלפון האנדרואיד דרך מנהל התקן ה-Dash, **לא ניתן יהיה להשתמש ב-PDM עם הפוד הזה**. מנהל ההתקן של AAPS ל-Dash בטלפון האנדרואיד הוא עכשיו ה-PDM בפועל.

*זה לא אומר שצריך לזרוק את ה-PDM, מומלץ לשמור אותו בסביבה כגיבוי למקרי חירום, למשל כאשר הטלפון הולך לאיבוד או AAPS אינו פועל כהלכה.*

**הפוד לא יפסיק לספק אינסולין אם הוא מאבד חיבור ל-AndroidAPS**. מינוני הבזאלי המוגדרים כברירת מחדל מתוכנתים על הפוד בזמן הפעלתו כפי שהוגדר בפרופיל הפעיל הנוכחי. כל עוד AndroidAPS פעיל הוא ישלח פקודות של מינונים בזאליים זמניים שיפעלו לכל היותר 120 דקות. כאשר מסיבה כלשהי הפוד אינו מקבל פקודות חדשות (למשל בגלל שהתקשורת אבדה עקב מרחק גדול מהטלפון) הפוד יחזור אוטומטית למינוני הבזאלי המוגדרים כברירת מחדל.

**פרופילי בזאלי המתחילים בשעות לא עגולות אינם נתמכים ב-AndroidAPS.** **פרופיל ברירת המחדל ב-AndroidAPS אינו תומך במסגרת זמן של מינון בזאלי של 30 דקות** אם אתם חדשים ב-AndroidAPS ואתם מגדירים את הפרופיל הבזאלי הבסיסי שלך בפעם הראשונה, חשוב לשים לב שמינונים שמתחילים בשעה לא עגולה אינם נתמכים, ותצטרכו להתאים את פרופיל הבזאלי שלך כך שמינון יתחיל בשעה עגולה. לדוגמה, אם יש מינון בזאלי של למשל 1.1 יחידות שמתחיל בשעה 09:30 ויש לו משך של שעתיים ומסתיים בשעה 11:30, זה לא יעבוד. יהיה עליכם לעדכן את המינון של 1.1 יחידות לטווח זמן של 09:00-11:00 או 10:00-12:00. למרות שהחומרה של Omnipod Dash עצמה תומכת במרווחי פרופיל המינון הבזאלי של 30 דקות, AndroidAPS לא מסוגל לקחת אותם בחשבון עם האלגוריתמים שלה כרגע.

## הפעלת מנהל התקן ה-Dash ב-AAPS

אפשר לאפשר את מנהל ההתקן של Dash בשני **אופנים**:

### אפשרות 1: התקנות חדשות

כשמתקינים AndroidAPS לראשונה, **אשף ההתקנה** ילווה אתכם לאורך ההתקנה וההגדרה. בחרו "DASH" כשתגיעו לחלק של בחירת המשאבה.

![Enable_Dash_1](../images/DASH_images/Enable_Dash/Enable_Dash_1.png)

אם אתם לא בטוחים במעשיכם, בחרו "משאבה וירטואלית" ותוכלו לבחור ב-"DASH" מאוחר יותר, לאחר שהגדרתם את AndroidAPS (ראו אפשרות 2).

### אפשרות 2: בונה התצורה

בהתקנה קיימת, תוכלו לבחור במשאבת **DASH** בבונה התצורה:

בפינה הימנית-עליונה **בתפריט ההמבורגר (☰)** בחרו **בונה התצורה (1)** ← **משאבה** ← **Dash** ← **בחירת הכפתור העגול ("כפתור רדיו") (2) ← גלגל שיניים (3)**.

בסימון **V (4)** בתיבה ליד **גלגל השיניים (3)** אתם תאפשרו לתפריט Dash להופיע כלשונית בממשק AAPS תחת השם **DASH**. סימון ה-V יקל על הגישה אל הפקודות של DASH בעת השימוש ב-AAPS.

**NOTE:** A faster way to access the [**Dash settings**](DanaRS-Insulin-Pump-dash-settings) can be found below in the Dash settings section of this document.

![Enable_Dash_3](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)

### אימות בחירת מנהל התקן Omnipod

כדי לוודא שהפעלת את מנהל ההתקן של Dash ב-AAPS, אם סימנתם את התיבה (4), **החליקו ימינה** מהלשונית **סקירה כללית**, שם תראו כעת לשונית **DASH**. אם לא סימנתם את התיבה, תמצאו את הלשונית DASH בתפריט ההמבורגר מימין למעלה.

![Enable_Dash_4](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)

## תצורת Dash

אנא **החלקו שמאלה** ללשונית **DASH** בה תוכלו לנהל את כל פונקציות הפוד (חלק מהפונקציות הללו אינן מופעלות או גלויות ללא פוד פעיל):

![Refresh_LOGO](../images/DASH_images/Refresh_LOGO.png) רעננו את הקישור והסטטוס של הפוד, תוכלו להשתיק אזעקות פוד כאשר הוא מצפצף

![POD_MGMT_LOGO](../images/DASH_images/POD_MGMT_LOGO.png) ניהול פוד (הפעלה, השבתה, השמעת צפצוף בדיקה והיסטוריית פוד)

(OmnipodDASH-activate-pod)=

### Activate Pod

1. נווטו אל הלשונית **DASH** ולחצו על הלחצן **ניהול פוד (1)**, ולאחר מכן לחצו על **הפעל פוד (2)**.

![Activate_Pod_1](../images/DASH_images/Activate_Pod/Activate_Pod_1.png)    ![Activate_Pod_2](../images/DASH_images/Activate_Pod/Activate_Pod_2.png)

2. מסך **מילוי פוד** מוצג. מלאו פוד חדש עם לפחות 80 יחידות אינסולין והקשיבו לשני צפצופים המעידים על כך שהפוד מוכן להדבקה. בעת חישוב הכמות הכוללת של האינסולין הדרוש למשך 3 ימים, קחו בחשבון כי הפעלת הפוד תשתמש ב-3 עד 10 יחידות.

![Activate_Pod_3](../images/DASH_images/Activate_Pod/Activate_Pod_3.png)    ![Activate_Pod_4](../images/DASH_images/Activate_Pod/Activate_Pod_4.jpg)

Ensure that the new pod and the phone running AAPS are within close proximity of each other and click the **Next** button.

**NOTE**: Just in case you get the below error message (this can happen), do not panic. Click on the **Retry** button. In most situations activation will continue successfully.

![Activate_Pod_3](../images/DASH_images/Activate_pod_error.png)

3. במסך **אתחול פוד**, הפוד יתחיל להתכונן להדבקה (אתם תשמעו קליק ואחריו סדרה של צלילי תקתוק).  סימן ירוק יוצג לאחר תיחול מוצלח, והלחצן **הבא** יהפוך לזמין. לחצו על **הבא** כדי להשלים את תיחול התרמיל ולהציג את מסך **הצמד פוד**.

![Activate_Pod_5](../images/DASH_images/Activate_Pod/Activate_Pod_5.jpg)    ![Activate_Pod_6](../images/DASH_images/Activate_Pod/Activate_Pod_6.jpg)

4. לאחר מכן, הכינו את אתר ההדבקה של הפוד החדש. הסירו את מכסה המחט של הפוד. אם אתם רואים משהו שבולט מהפוד, בטלו את התהליך והתחילו מההתחלה עם פוד חדש. אם הכל נראה תקין, הסירו את כיסוי הנייר הלבן מהדבק והניחו את הפוד על המקום הנבחר על גופכם. לסיום, לחצו על **הבא**.

![Activate_Pod_8](../images/DASH_images/Activate_Pod/Activate_Pod_8.jpg)

5. תיבת הדו-שיח **הצמד פוד** תופיע כעת. **לחצו על אישור רק אם אתם מוכנים להחדרת הצינורית**.

![Activate_Pod_9](../images/DASH_images/Activate_Pod/Activate_Pod_9.jpg)

6. לאחר לחיצה על **אישור**, ייתכן שיחלוף זמן מה עד שהאומניפוד יגיב ויחדיר את הקנולה (עד 1-2 דקות), אנא שמרו על סבלנות.

 *הערה: לפני החדרת הקנולה, מומלץ לצבוט את העור בסביבת נקודת ההחדרה. זה מבטיח החדרה חלקה של המחט ומפחית את הסיכויים לפתח חסימות.*

![Activate_Pod_10](../images/DASH_images/Activate_Pod/Activate_Pod_10.png)    ![Activate_Pod_11](../images/DASH_images/Activate_Pod/Activate_Pod_11.jpg)

7. יופיע V ירוק, ולחצן **הבא** יופעל לאחר החדרת מוצלחת של הקנולה. לחצו על **הבא**.

![Activate_Pod_12](../images/DASH_images/Activate_Pod/Activate_Pod_12.jpg)

9. מסך **הפוד הופעל** מוצג. לחצו על **סיום**. מזל טוב! הפעלתם את הפוד.

![Activate_Pod_13](../images/DASH_images/Activate_Pod/Activate_Pod_13.jpg)

10. במסך התפריט **ניהול פוד** הכפתור  **הפעל פוד (1)** אמור להיות *מושבת* והכפתור **כבה פוד (2)** אמור להיות *מאופשר*. הסיבה לכך היא שהפוד פעיל כעת ולא ניתן להפעיל פוד נוסף מבלי להשבית את הפוד הנוכחי.

    לחצו על כפתור החזרה בטלפון כדי לחזור ללשונית **DASH** שתציג כעת מידע על הפוד הנוכחי, כולל המינון הבזאלי הנוכחי, רמת מכל האינסולין, אינסולין שהוזרק, שגיאות של הפוד והתראות.

    For more details on the information displayed go to the [**DASH Tab**](OmnipodDASH-dash-tab) section of this document.

![Activate_Pod_14](../images/DASH_images/Activate_Pod/Activate_Pod_14.png)    ![Activate_Pod_15](../images/DASH_images/Activate_Pod/Activate_Pod_15.jpg)

It is good practice to export settings AFTER activating the pod. Do this at each pod change and once a month, copy the exported file to your internet drive. see [**Export settings Doc**](https://androidaps.readthedocs.io/en/latest/Usage/ExportImportSettings.html?highlight=exporting#export-import-settings).


(OmnipodDASH-deactivate-pod)=

### Deactivate Pod

Under normal circumstances, the expected lifetime of a pod is three days (72 hours) and an additional 8 hours after the pod expiration warning for a total of 80 hours of pod usage.

To deactivate a pod (either from expiration or from a pod failure):

1. נווטו ללשונית **DASH** ולחצו על **ניהול הפוד (1)** ולאחר מכן בחרו **ניהול פוד** ואז **כבה פוד**.

![Deactivate_Pod_1](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)    ![Deactivate_Pod_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_2.png)

2. במסך **כבה פוד**, לחצו על **הבא** כדי להתחיל בתהליך של השבתת הפוד. אתם תשמעו צפצוף אישור מהפוד שהכיבוי הצליח.

![Deactivate_Pod_3](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_3.jpg) ![Deactivate_Pod_4](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_4.jpg)

3. סימון ירוק יופיע לאחר השבתה מוצלחת. לחצו על **הבא** כדי לעבור אל המסך "הפוד הושבת". כעת תוכלו להסיר את הפוד כיוון שפעילותו הושבתה.

![Deactivate_Pod_5](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_5.jpg)

4. לחצו על הכפתור הירוק כדי לחזור למסך **ניהול הפוד**.

![Deactivate_Pod_6](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_6.jpg)

5. בתפריט **ניהול פוד**; לחצו כפתור 'הקודם' של הטלפון כדי לחזור ללשונית **DASH**. ודאו שהשדה **סטטוס הפוד:** מציג הודעת **אין פוד פעיל**.

![Deactivate_Pod_7](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_7.png) ![Deactivate_Pod_8](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_8.jpg)

(OmnipodDASH-resuming-insulin-delivery)=

### חידוש הזרקת האינסולין

**Note**: During profile switches, dash must suspend delivery before setting the new basal profile. If communication fails between the two commands, then delivery can be suspended. Read [**Delivery suspended**](OmnipodDASH) in the troubleshooting section for more details.

Use this command to instruct the active, currently suspended pod to resume insulin delivery. After the command is successfully processed, insulin will resume normal delivery using the current basal rate based on the current time from the active basal profile. The pod will again accept commands for bolus, TBR, and SMB.

1. נווטו אל הלשונית **DASH** וודאו שהשדה **סטטוס הפוד (1)** מציג את **מופסק**, לאחר מכן הקישו על **חידוש הזרקה (2)** כדי להתחיל בתהליך הוראה לפוד הנוכחי לחדש את הזרקת האינסולין. ההודעה **חידוש הזרקה** תוצג בשדה **סטטוס הפוד (3)**.

![Resume_1](../images/DASH_images/Resume/Resume_1.jpg)   ![Resume_2](../images/DASH_images/Resume/Resume_2.jpg)

2. כאשר הפקודה 'חידוש הזרקה' מצליחה, תיבת דו-שיח לאישור תציג את ההודעה **מתן האינסולין חודש**. לחצו על **אישור** כדי להמשיך.

![Resume_3](../images/DASH_images/Resume/Resume_3.png)

3. הלשונית **DASH** תעדכן את השדה **סטטוס הפוד (1)** ויוצג **פועל,** והלחצן **חידוש הזרקה** לא יוצג יותר

![Resume_4](../images/DASH_images/Resume/Resume_4.jpg)

### השתקת התראות פוד

*NOTE - The SILENCE ALERTS button is only available on the **DASH** tab when the pod expiration or low reservoir alert has been triggered. If the SILENCE ALERTS button is not visible and you hear beep sounds from the pod, try to 'Refresh pod status'.*

The process below will show you how to acknowledge and dismiss pod beeps when the active pod time reaches the warning time limit before the pod expiration of 72 hours (3 days). This warning time limit is defined in the **Hours before shutdown** Dash alerts setting. The maximum life of a pod is 80 hours (3 days 8 hours), however Insulet recommends not exceeding the 72 hours (3 days) limit.

1. כאשר הפוד יגיע לזמן האזהרה **שעות לפני כיבוי**, הוא יצפצף צפצוף אזהרה כדי להודיע שהוא מתקרב לזמן התפוגה שלו ובקרוב תידרש החלפת פוד. אפשר לאמת זאת בלשונית **DASH**, השדה **תפוגת הפוד: (1)** יציג את השעה המדויקת בה הפוד יפוג (72 שעות לאחר ההפעלה) והטקסט יצבע ב**אדום** לאחר שהזמן הזה יעבור. בשדה **התראות פוד פעילות (2)** מוצגת הודעת המצב **תוקף הפוד יפוג בקרוב**. כעת יופעל הלחצן **השתקת התראות (3)**.

![ACK_alerts_1](../images/DASH_images/ACK_Alerts/ACK_ALERTS_1.png)

2. נווטו לכרטיסייה **DASH** ולחצו על **השתקת התראות (2)**. AAPS ישלח את הפקודה לפוד כדי לבטל את צפצופי אזהרת התפוגה והשדה **סטטוס הפוד (1)** יעודכן ל**אישור התראות**.

![ACK_alerts_2](../images/DASH_images/ACK_Alerts/ACK_ALERTS_2.png)

3. לאחר **השבתה מוצלחת** של ההתראות, **שני צפצופים** יישמעו על ידי הפוד הפעיל ותיבת דו-שיח תציג את ההודעה **הפעלת ההתראות הושתקה**. לחצו על **אישור** כדי לאשר ולבטל את תיבת הדו-שיח.


![ACK_alerts_3](../images/DASH_images/ACK_Alerts/ACK_ALERTS_3.png)

4. נווטו ללשונית **DASH**. תחת **התראות פוד פעילות**, הודעת האזהרה אינה מוצגת עוד והפוד כבר לא יוציא צפצופי אזהרת תפוגה.

(OmnipodDASH-view-pod-history)=

### הצגת היסטוריית הפוד

This section shows you how to review your active pod history and filter by different action categories. The pod history tool allows you to view the actions and results committed to your currently active pod during its three days (72 - 80 hours) life.

This feature is helpful in verifying boluses, TBRs and basal commands that were sent to the pod. The remaining categories are useful for troubleshooting issues and determining the order of events that occurred leading up to a failure.

*NOTE:* **Only the last command can be uncertain**. New commands *will not be sent* until the **last 'uncertain' command becomes 'confirmed' or 'denied'**. The way to 'fix' uncertain commands is to **'refresh pod status'**.

1. נווטו ללשונית **DASH** ולחצו על **ניהול הפוד (1)** ולאחר מכן בחרו **היסטוריית פוד (2)** כדי לפתוח את מסך היסטוריית הפוד.

![Pod_history_1](../images/DASH_images/Pod_History/Pod_history_1.jpg) ![Pod_history_2](../images/DASH_images/Pod_History/Pod_history_2.jpg)

2. במסך **היסטוריית הפוד**, קטגוריית ברירת המחדל של **הכל (1)** מוצגת ומציגה את **התאריך והשעה (2)** של כל **פעולות (3)** הפוד ו**תוצאות (4)** בסדר כרונולוגי הפוך. השתמשו ב**לחצן 'הקודם' של הטלפון פעמיים** כדי לחזור ללשונית **DASH** בממשק הראשי של AAPS.


![Pod_history_3](../images/DASH_images/Pod_History/Pod_history_3.jpg) ![Pod_history_4](../images/DASH_images/Pod_History/Pod_history_4.jpg)

(OmnipodDASH-dash-tab)=

## לשונית DASH

Below is an explanation of the layout and meaning of the icons and status fields on the **DASH** tab in the main AAPS interface.

*NOTE: If any message in the **DASH** tab status fields report (uncertain), then you will need to press the Refresh button to clear it and refresh the pod status.*

![DASH_Tab_1](../images/DASH_images/DASH_Tab/DASH_Tab_1.png)

### שדות

* **כתובת בלוטות':** מציג את כתובת הבלוטות' הנוכחית של הפוד המחובר.
* **סטטוס בלוטות':** מציג את מצב החיבור הנוכחי.
* **מספר רצף:** מציג את מספר הרצף של הפוד הפעיל.
* **גרסת קושחה:** מציג את גרסת הקושחה החיבור הפעיל.
* **השעה בפוד:** מציג את השעה הנוכחית בפוד.
* **תפוגת הפוד:** מציג את התאריך והשעה שבהם יפוג הפוד.
* **סטטוס הפוד:** מציג את מצב הפוד.
* **חיבור אחרון:** מציג את מועד התקשורת האחרון עם הפוד.

   - *לפני כמה רגעים* - לפני פחות מ-20 שניות.
   - *לפני פחות מדקה* - יותר מעשרים שניות אך פחות מ-60 שניות.
   - *לפני דקה אחת* - יותר מ-60 שניות אך פחות מ-120 שניות (2 דקות)
   - *לפני XX דקות* - לפני יותר משתי דקות ככתוב בערך XX

* **בולוס אחרון:** מציג את המינון של הבולוס האחרון שהפוד הזריק ולפני כמה זמן, בסוגריים.
* **בזאלי בסיסי:** מציג את המינון הבזאלי המתוכנת עבור השעה הנוכחית בפרופיל הבזאלי.
* **מינון בזאלי זמני:** מציג את המינון הבזאלי הזמני הפועל כעת בפורמט הבא:

   - יחידות\שעה @ מועד תחילת בזאלי זמני (משך הבזאלי הזמני)
   - *לדוגמה:* 0.00 יח'\שעה @ 18:25 (90/120 דקות)

* **מכל:** מציג מעל 50+U כאשר נותרו יותר מ -50 יחידות במכל. כשיש פחות מ-50 יחידות, יתרתן מוצגת במדוייק.
* **סה"כ שהוזרק:** מציג את המספר הכולל של יחידות האינסולין שהוזרקו. זה כולל אינסולין המשמש להפעלה ולתיחול.
* **שגיאות:** מציג את השגיאה האחרונה. Review the [Pod history](OmnipodDASH-view-pod-history) and log files for past errors and more detailed information.
*  **התראות פוד פעילות:** שדה השמור להתראות הפועלות כרגע על הפוד הפעיל.

### מקשים


![Refresh_Icon](../images/DASH_images/Refresh_LOGO.png) : Sends a refresh command to the active pod to update communication.

   * השתמשו כדי לרענן את מצב הפוד ולבטל סטטוסים המכילים את הטקסט "(לא ודאי)".
   * לקריאה נוספת ראו את הפרק פתרון בעיות מטה.

![POD_MGMT_Icon](../images/DASH_images/POD_MGMT_LOGO.png) : Navigates to the Pod management menu.

![ack_alert_logo](../images/DASH_images/ack_alert_logo.png) : When pressed this will disable the pod alerts beeps and notifications (expiry, low reservoir..).

   * הלחצן מוצג רק לאחר אזהרת התפוגה של הפוד.
   * לאחר קבלת ההתראה, אייקון זה יפסיק להופיע.

![RESUME_Icon](../images/DASH_images/DASH_tab_icons/RESUME_Icon.png) : Resumes the currently suspended insulin delivery in the active pod.

### תפריט ניהול הפוד

Below is the meaning of the icons on the **Pod Management** menu accessed by pressing **POD MGMT (0)** button from the **DASH** tab. ![DASH_Tab_2](../images/DASH_images/DASH_Tab/DASH_Tab_2.png) ![DASH_Tab_3](../images/DASH_images/DASH_Tab/DASH_Tab_3.png)

* 1 - [**Activate Pod**](OmnipodDASH-activate-pod) : Primes and activates a new pod.
* 2 - [**Deactivate Pod**](OmnipodDASH-deactivate-pod) : Deactivates the currently active pod.
* 3 - **השמע צפצוף ניסיון** : בלחיצה כאן מושמע צפצוף ניסיון בודד בפוד.
* 4 - [**Pod history**](OmnipodDASH-view-pod-history) : Displays the active pod activity history.

(DanaRS-Insulin-Pump-dash-settings)=

## הגדרות Dash

The Dash driver settings are configurable from the top-left hand corner **hamburger menu** under **Config Builder (1)**\ ➜\ **Pump**\ ➜\ **Dash**\ ➜\ **Settings Gear (3)** by selecting the **radio button (2)** titled **Dash**. בסימון **V (4)** בתיבה ליד **גלגל השיניים (3)** אתם תאפשרו לתפריט Dash להופיע כלשונית בממשק AAPS תחת השם **DASH**.

![Dash_settings_1](../images/DASH_images/Dash_settings/Dash_settings_1.png) ![Dash_settings_2](../images/DASH_images/Dash_settings/Dash_settings_2.png)

**NOTE:** A faster way to access the **Dash settings** is by accessing the **3 dot menu (1)** in the upper right hand corner of the **DASH** tab and selecting **Dash preferences (2)** from the dropdown menu.

![Dash_settings_3](../images/DASH_images/Dash_settings/Dash_settings_3.png)

The settings groups are listed below; you can enable or disable via a toggle switch for most entries described below:

![Dash_settings_4](../images/DASH_images/Dash_settings/Dash_settings_4.jpg)

*NOTE: An asterisk (\*) denotes the default setting is enabled.*

### צפצופי אישור

Provides confirmation beeps from the pod for bolus, basal, SMB, and TBR delivery and changes.

* **צפצופי בולוס מופעלים:** הפעלה או השבתת צפצופי אישור כאשר מוזרק בולוס.
* **צפצופי בזאלי מופעלים:** הפעלת או השבתת צפצופי אישור כאשר נקבע מינון בזאלי חדש, המינון הבזאלי הפעיל מבוטל או המינון הבזאלי הנוכחי משתנה.
* **צפצופי SMB מופעלים:** הפעלת או השבתת צפצופי אישור כאשר מוזרק SMB.
* **צפצופי בזאלי זמני מופעלים:** הפעלת או השבתת צפצופי אישור כאשר בזאלי זמני מופעל או מבוטל.

### התראות

Provides AAPS alerts for pod expiration, shutdown, low reservoir based on the defined threshold units.

*Note an AAPS notification will ALWAYS be issued for any alert after the initial communication with the pod since the alert was triggered. Dismissing the notification will NOT dismiss the alert UNLESS automatically acknowledge Pod alerts is enabled. To MANUALLY dismiss the alert you must visit the **DASH** tab and press the **Silence ALERTS button**.*

* **תזכורת לתפוגה מופעלת:** הפעילו או השביתו תזכורת לתפוגת הפוד שתופעל כאשר יגיע מספר השעות שהגדרתם לפני ההשבתה.
* **שעות לפני כיבוי:** מגדיר את מספר השעות לפני כיבוי הפוד הפעיל, שלאחר מכן תופעל תזכורת לתפוגה.
* **התראת מכל נמוך מופעלת:** הפעלה או השבתה של התראה על יתרת יחידות אינסולין נמוכה מסף מוגדר.
* **מספר יחידות:** מספר היחידות בהן מופעלת התראת המכל הנמוך.

### הודעות

Provides AAPS notifications and audible phone alerts when it is uncertain if TBR, SMB, or bolus, and delivery suspended events were successful.

*NOTE: These are notifications only, no audible beep alerts are made.*

* **התראת צליל של בזאלי זמני לא ברור מאופשרת:** הפעילו או השביתו הגדרה זו כדי להפעיל התראה קולית והתראה חזותית כאשר AAPS לא בטוח אם מינון בזאלי זמני הוגדר בהצלחה.
* **התראת צליל של SMB לא ברור מאופשרת:** הפעילו או השבחתו הגדרה זו כדי להפעיל התראה קולית והתראה חזותית כאשר AAPS אינו בטוח אם SMB הוזרק בהצלחה.
* **התראת צליל של בולוס לא ברור מאופשרת:** הפעילו או השביתו הגדרה זו כדי להפעיל התראה קולית והתראה חזותית כאשר AAPS אינו בטוח אם בולוס הוזרק בהצלחה.
* **השמע כשהתראת הפסקת ההזרקה מאופשרת:** הפעילו או השביתו הגדרה זו כדי להפעיל התראה קולית והתראה חזותית כאשר AAPS מעביר בהצלחה פקודת הפסקת הזרקה.

## לשונית פעולות (ACT)

This tab is well documented in the main AAPS documentation but there are a few items on this tab that are specific to how the Omnipod Dash pod differs from tube based pumps, especially after the processes of applying a new pod.

1. עברו ללשונית **פעולות (ACT)** מהמסך הראשי של AAPS.

2. תחת השורה **פורטל הטיפולים (1)**, השדות **אינסולין** ו**צינורית** ** יאופסו** ל-0 ימים ו-0 שעות **לאחר כל החלפת פוד**. זה נעשה בגלל האופן שבו משאבת אומניפוד בנויה ופועלת. מכיוון שהפוד מחדיר את הצינורית ישירות לעור באתר הדבקתו, אין שימוש בצינור מסורתי במשאבות אומניפוד. *לכן לאחר החלפת פוד, הגיל של כל אחד מהערכים הללו יתאפס אוטומטית.* **גיל סוללת המשאבה** אינו מדווח מכיוון שהסוללה בפוד תמיד תהיה יותר מאורך חיי הפוד (80 שעות לכל היותר). **סוללת המשאבה** ו**יתרת האינסולין** נמצאים בעצמם בתוך כל פוד.

![ACT_1](../images/DASH_images/Actions_Tab/ACT_1.png)

### כמות במכל

**Insulin Level**

Insulin level displayed is the amount reported by Omnipod DASH. However, the pod only reports the actual insulin reservoir level when it is below 50 units. Until then “Above 50 units” will be displayed. The amount reported is not exact: when the pod reports ‘empty’ in most cases the reservoir will still have some additional units of insulin left. The omnipod DASH overview tab will display as described the below:

  * **מעל 50 יחידות** - הפוד מדווח על יותר מ-50 יחידות שנמצאות כעת במכל.
  * **מתחת ל-50 יחידות** - כמות האינסולין שנותרה במכל כפי שדווח על ידי הפוד.

Additional note:
  * **SMS** - מחזירה ערך או 50+U בתגובות של SMS
  * **נייטסקאוט** - העלאת ערך של 50 כאשר מעל 50 יחידות לנייטסקאוט (גרסה 14.07 ומעלה).  גרסאות חדשות יותר ידווחו על ערך של 50+ כאשר מעל 50 יחידות.

## פתרון בעיות

(OmnipodDASH-delivery-suspended)=

### הפסקת הזרקה

  * אין יותר כפתור של הפסקת הזרקה. אם ברצונכם "להשהות" את הפוד, אפשר להגדיר מינון בזאלי זמני 0% למשך x דקות.
  * במהלך החלפת פרופיל, Dash חייב להשעות את ההזרקה לפני הגדרת הפרופיל הבזאלי החדש. אם התקשורת נכשלת בין שתי הפקודות, אז ניתן להשהות את ההזרקה. כשזה קורה:
     - לא יהיה מתן אינסולין, כולל בזאלי, SMB, בולוס ידני וכו'.
     - ייתכן שתהיה הודעה על כך שאחת הפקודות אינה מאושרת: זה תלוי במועד התרחשות הכשל.
     - AAPS ינסה להגדיר את הפרופיל הבזאלי החדש כל 15 דקות.
     - AAPS יציג הודעה המודיעה שההזרקה הופסקה כל 15 דקות, אם ההזרקה עדיין מופסקת (חידוש ההזרקה נכשל).
     - The [**Resume delivery**](OmnipodDASH-resuming-insulin-delivery) button will be active if the user chooses to resume delivery manually.
     - אם AAPS לא מצליח לחדש את ההזרקה בעצמו (זה קורה אם הפוד אינו נגיש, הצליל מושתק וכו'), הפוד יתחיל לצפצף 4 פעמים בכל דקה למשך 3 דקות ולאחר מכן יחזור על עצמו כל 15 דקות אם ההזרקה עדיין מופסקת למשך יותר מ-20 דקות.
  * עבור פקודות לא ודאיות, "רענון סטטוס הפוד" אמור לאשר\לדחות אותן.

**Note:** When you hear beeps from the pod, do not assume that delivery will continue without checking the phone, delivery might stay suspended, **so you need to check !**

### שגיאות בפוד

Pods fail occasionally due to a variety of issues, including hardware issues with the Pod itself. It is best practice not to call these into Insulet, since AAPS is not an approved use case. A list of fault codes can be [**found here**](https://github.com/openaps/openomni/wiki/Fault-event-codes) to help determine the cause.

### מניעת שגיאה 49 - כישלונות פוד

This failure is related to an incorrect pod state for a command or an error during an insulin delivery command. This is when the driver and Pod disagree on the actual state. The Pod (out of a build-in safety measure) then reacts with an unrecoverable error code 49 (0x31) ending up with what is know as a “screamer”: the long irritating beep that can only be stopped by punching a hole at the appropriate location at the back of the Pod. The exact origin of a “49 pod failure” often is hard to trace. In situations that are suspected for this failure to occur (for instance on application crashes, running a development version or re-installation).

### התראות המשאבה אינה נגישה

When no communication can be established with the pod for a preconfigured time a “Pump unreachable” alert will be raised. Pump unreachable alerts can be configured by going to the top right-hand side three-dot menu, selecting **Preferences**\ ➜\ **Local Alerts**\ ➜\ **Pump unreachable threshold [min]**. Recommended value is alerting after **120** minutes.

### ייצוא הגדרות

Exporting AndroidAPS settings enables you to restore all your settings, and maybe more importantly, all your Objectives. You may need to restore settings to the “last known working situation” or after uninstalling/reinstalling AndroidAPS or in case of phone loss, reinstalling on the new phone.

Note: The active pod information is included in the exported settings. If you import an "old" exported file, your actual pod will "die". There is no other alternative. In some cases (like a _programmed_ phone change), you may need to use the exported file to restore AndroisAPS settings **while keeping the current active Pod**. In this case it is important to only use the recently exported settings file containing the pod currently active.

**It is good practice to do an export immediately after activating a pod**. This way you will always be able to restore the current active Pod in case of a problem. For instance when moving to another backup phone.

Regularly copy your exported settings to a safe place (as a cloud drive) that can be accessible by any phone when needed (e.g. in case of a phone loss or factory reset of the actual phone).

### יבוא הגדרות

**WARNING** Please note that importing settings will possibly import an outdated Pod status. As a result, there is a risk of losing the active Pod! (see **Exporting Settings**). It is better to only try it when no other options are available.

When importing settings with an active Pod, make sure the export was done with the currently active pod.

**Importing while on an active Pod:** (you risk losing the Pod!)

1. ודאו שאתם מייבאים הגדרות שיוצאו לאחרונה עם הפוד הפעיל כעת.
2. ייבוא הגדרות
3. בדיקת על ההגדרות

**Importing (no active Pod session)**

1. ייבוא כל קובץ מיוצא עדכני אמור לעבוד (ראה למעלה)
2. ייבאו את ההגדרות.
3. בדיקת על ההגדרות.
4. ייתכן שיהיה עליכם **לבטל** את הפוד "הלא קיים" אם הגדרות הייבוא כוללות נתוני פוד פעילים כלשהם.

### ייבוא הגדרות המכילות מצב פוד מפוד לא פעיל

When importing settings containing data for a Pod that is no longer active, AndroidAPS will try to connect with it, which will obviously fail. You can not activate a new Pod in this situation.

To remove the old Pod session “try” to de-activate the Pod. The de-activation will fail. Select “Retry”. After the second or third retry you will get the option to remove the pod. Once the old pod is removed you will be able to activate a new Pod.

### התקנה מחדש של AndroidAPS

When uninstalling AndroidAPS you will lose all your settings, objectives and the current Pod session. To restore them make sure you have a recent exported settings file available!

When on an active Pod, make also sure that you have an export for the current Pod session or you will lose the currently active Pod when importing older settings.

1. ייצאו את ההגדרות שלך ושמרו עותק במקום בטוח.
2. הסירו את התקנת AndroidAPS והפעילו מחדש את הטלפון.
3. התקינו גרסה חדשה של AndroidAPS.
4. ייבוא הגדרות
5. וודאו את כל ההעדפות (אפשר לייבא שוב הגדרות)
6. הפעילו פוד חדש
7. לבסוף: ייצאו קובץ הגדרות

### עדכון AndroidAPS לגרסה חדשה יותר

In most cases there is no need to uninstall. You can do an “in-place” install by starting the installation for the new version. This is also possible when on an active Pod  session.

1. ייבאו את ההגדרות.
2. התקינו את גרסת AndroidAPS החדשה.
3. ודאו שההתקנה הצליחה
4. המשיכו את השימוש בפוד הקיים או הפעילו פוד חדש.
5. לבסוף: ייצאו קובץ הגדרות.

### התראות פוד

Please note that the Omnipod Dash driver presents a variety of unique alerts on the **Overview tab**, most of them are informational and can be dismissed while some provide the user with an action to take to resolve the cause of the triggered alert. A summary of the main alerts that you may encounter is listed below:

* אין פוד פעיל לא נמצא פוד פעיל. ניתן לבטל התראה זו זמנית על ידי לחיצה על **השתקה** אך היא תמשיך לפעול כל עוד לא הופעל פוד חדש. לאחר הפעלת פוד, ההתראה הזו מושתקת אוטומטית.
* התראה אינפורמטיבית כי פוד הושהה.
* הגדרת הפרופיל הבזאלי נכשלה: ההזרקה עלולה להפסק! נא לרענן ידנית את סטטוס הפוד בלשונית Omnipod ולחדש את ההזרקה במידת הצורך. התראה אינפורמטיבית על כך שהגדרת הפרופיל הבזאלי של פוד נכשלה, ויהיה עליכם ללחוץ על *רענן* בלשונית DASH.
* לא ניתן לאמת אם בולוס SMB הצליח. אם אתם בטוחים שהבולוס לא הצליח, עליכם למחוק את ערך SMB באופן ידני מטיפולים. התראה כי לא ניתן לאמת את הצלחת בולוס ה-SMB, יהיה עליכם לאמת את השדה *בולוס אחרון* בלשונית DASH כדי לראות האם ה-SMB הצליח ואם לא, להסיר את הערך מהלשונית טיפולים.
* לא בטוח אם "בולוס/בזאלי זמני/SMB" הושלם, אנא ודאו ידנית אם הוא הצליח.

## היכן ניתן לקבל עזרה בשימוש במנהל התקן DASH

All of the development work for the Omnipod DASH driver is done by the community on a **volunteer** basis; we ask that you to remember that fact and use the following guidelines before requesting assistance:

-  **רמה 0** קראו את הסעיף הרלוונטי בתיעוד זה כדי להבטיח שאתם מבינים כיצד להשתמש במה שאתם מתקשים איתו.
-  **רמה 1:** אם אתם עדיין נתקלים בבעיות שאתם לא מצליחים לפתור באמצעות מסמך זה, אנא עברו לערוץ *#androidaps* ב-**Discord** באמצעות [קישור ההזמנה](https://discord.gg/4fQUWHZ4Mw).
-  **רמה 2:** חפשו בעיות קיימות כדי לראות אם הבעיה שלכם כבר דווחה ב-[בעיות](https://github.com/nightscout/AndroidAPS/issues) אם היא קיימת, אנא אשרו/הגיבו/הוסיפו מידע על הבעיה שלכם. אם לא, צרו [בעיה חדשה](https://github.com/nightscout/AndroidAPS/issues) וצרפו את [קובצי היומן (Log) שלכם](../Usage/Accessing-logfiles.md).
-  **היו סבלניים - רוב חברי הקהילה שלנו מורכבים ממתנדבים בעלי אופי טוב, ופתרון בעיות דורש לעתים קרובות זמן וסבלנות מצד המשתמשים והמפתחים כאחד.**
