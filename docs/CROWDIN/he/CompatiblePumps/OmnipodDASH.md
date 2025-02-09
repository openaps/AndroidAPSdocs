- - -
orphan: true
- - -

# Omnipod DASH

These instructions are for configuring the **Omnipod DASH** generation pump **(NOT Omnipod Eros)**, available as part of **AAPS** version 3.0.

## מפרט Omnipod DASH

These are the specifications of the **Omnipod DASH** ('DASH') and what differentiates it from the **Omnipod EROS** ('EROS'):

* פודי DASH ניתנים לזיהוי באמצעות מכסה מחט כחול (ל-EROS יש מכסה מחט שקוף). The pods are otherwise identical in terms of physical dimensions.
*  DASH does not require a BLE link/bridge device (NO RileyLink, OrangeLink, or EmaLink needed).
* The DASH's bluetooth connection is used only when needed, and connects to send command and disconnects right after!
* No more "no connection to link device / pod" errors with DASH.
* **AAPS** will wait for pod's accessibility to send commands.
* On pod activation, **AAPS** will find and connect to a new DASH pod.
* Expected range: 5-10 meters (YMMV).

WARNING: There are currently reported Bluetooth connection issues with the following combination of **AAPS** / DASH / Android 15. **AAPS** should not be used in combination with Android 15 and DASH unless the user has checked the following [**List**](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true) and verified that their phone is not a known reported issue. **AAPS** is currently working to resolve this issue.

## דרישות חומרה ותוכנה

* DASH is identified by blue needle cap.

![Omnipod Pod](../images/DASH_images/Omnipod_Pod.png)

* **Compatible Android phone** with a BLE Bluetooth connection  
  Be aware that **AAPS** Omnipod Dash driver connects with the DASH via Bluetooth every time it sends a command, and it disconnects right after. The Bluetooth connection can be disturbed by other bluetooth devices linked to the phone that is running **AAPS**, like earbuds etc... (which might cause, in rare occasions, connection issue or pod errors/loss on activation or afterwards in some phone models), or be disturbed by it.
   -  **Version 3.0 or newer of AAPS built and installed** using the [**Build APK**](../SettingUpAaps/BuildingAaps.md) instructions.
* [**חיישן סוכר רציף (CGM)**](../Getting-Started/CompatiblesCgms.md)

The instructions below explain how to activate a new pod session. Wait to close to expiry of a current pod session before trying to connect **AAPS** with a new pod. Once a pod is is cancelled it cannot reused and the disconnection will be final.

## לפני שמתחילים

**SAFETY FIRST** - you should not try to connect **AAPS** to a pod for the first time without having access to extra pods, insulin, and phone devices are a must have.

**Your Omnipod Dash PDM will become redundant after the AAPS Dash driver activates your pod.** Previously a user may have operated a PDM to send commands to your DASH. A DASH will only faciiliate a single device to send commands to communicate with it. המכשיר שמפעיל את הפוד הוא המכשיר היחיד שמורשה לתקשר איתו מאותה נקודה ואילך. This means that once you activate a DASH with your Android phone through the **AAPS**, **you will no longer be able to use your PDM with that pod**. The **AAPS** Dash driver in your Android phone is now your acting PDM.

*זה לא אומר שצריך לזרוק את ה-PDM, מומלץ לשמור אותו בסביבה כגיבוי למקרי חירום, למשל כאשר הטלפון הולך לאיבוד או AAPS אינו פועל כהלכה.*

**הפוד לא יפסיק לספק אינסולין אם הוא מאבד חיבור ל-AndroidAPS**. Default basal rates are programmed on the pod on activation as defined in the current active **Profile**. As long as **AAPS** is operational it will send basal rate commands that run for a maximum of 120 minutes. כאשר מסיבה כלשהי הפוד אינו מקבל פקודות חדשות (למשל בגלל שהתקשורת אבדה עקב מרחק גדול מהטלפון) הפוד יחזור אוטומטית למינוני הבזאלי המוגדרים כברירת מחדל.

**AAPS Profile does not support a 30 minute basal rate time frame** If you are new to **AAPS** and are setting up your basal rate **Profile** for the first time, please be aware that basal rates starting on a half-hour basis are not supported, and programmes on an hourly basis. For example, if you have a basal rate of 1.1 units which starts at 09:30 and has a duration of 2 hours ending at 11:30, it is not possible replicate this im **AAPS**. יהיה עליכם לעדכן את המינון של 1.1 יחידות לטווח זמן של 09:00-11:00 או 10:00-12:00. Even though the DASH hardware itself supports the 30 minute basal rate **Profile** increments, **AAPS** does support this feature.

**0U/h profile basal rates are NOT supported in AAPS** While the DASH does support a zero basal rate, since **AAPS** uses multiples of the user's **Profile** basal rate to determine automated treatment; it cannot function with a zero basal rate. A temporary zero basal rate can be achieved through the "Disconnect pump" function or through a combination of Disable Loop/Temp Basal Rate or Suspend Loop/Temp Basal Rate. The lowest basal rate allowed in **AAPS** is 0.05U/h.

## Selecting Dash in AAPS

There are **two ways**:

### אפשרות 1: התקנות חדשות

When installing **AAPS** for the first time, the **Setup Wizard** will guide new users through key features and installation requirements for **AAPS**. בחרו "DASH" כשתגיעו לחלק של בחירת המשאבה.

![Enable_Dash_1](../images/DASH_images/Enable_Dash/Enable_Dash_1.png)

When in doubt you can also select “Virtual Pump” and select “DASH” later, after setting up **AAPS** (see option 2).

### אפשרות 2: בונה התצורה

בהתקנה קיימת, תוכלו לבחור במשאבת **DASH** בבונה התצורה:

בפינה הימנית-עליונה **בתפריט ההמבורגר (☰)** בחרו **בונה התצורה (1)** ← **משאבה** ← **Dash** ← **בחירת הכפתור העגול ("כפתור רדיו") (2) ← גלגל שיניים (3)**.

Selecting the **checkbox (4)** next to the **Settings Gear (3)** will allow the DASH menu to be displayed as a tab in the **AAPS** interface titled **DASH**. Checking this box will facilitate your access to the DASH commands when using **AAPS**.

**NOTE:** A faster way to access the [**Dash settings**](#dash-settings) can be found below in the DASH settings section of this document.

![Enable_Dash_3](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)

### אימות בחירת מנהל התקן Omnipod

To verify that you have selected the DASH in **AAPS**, if you have checked the box (4), **swipe to the left** from the **Overview** tab, where you will now see a **DASH** tab on **AAPS**. If this box is left unchecked, you’ll find the DASH tab in the hamburger menu upper left.

![Enable_Dash_4](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)

## תצורת Dash

אנא **החליקו שמאלה** ללשונית **DASH** בה תוכלו לנהל את כל פונקציות הפוד (חלק מהפונקציות הללו אינן מופעלות או גלויות ללא פוד פעיל):

![Refresh_LOGO](../images/DASH_images/Refresh_LOGO.png) 'Refresh' pod connectivity and status, be able to silence pod alarms when the pod beeps

![POD_MGMT_LOGO](../images/DASH_images/POD_MGMT_LOGO.png) 'Pod Management' (Activate, Deactivate, Play test beep, and Pod history)


### Activate Pod

1. נווטו אל הלשונית **DASH** ולחצו על הלחצן **ניהול פוד (1)**, ולאחר מכן לחצו על **הפעל פוד (2)**.

![Activate_Pod_1](../images/DASH_images/Activate_Pod/Activate_Pod_1.png)

​    ![Activate_Pod_2](../images/DASH_images/Activate_Pod/Activate_Pod_2.png)

2. מסך **מילוי פוד** מוצג. מלאו פוד חדש עם לפחות 80 יחידות אינסולין והקשיבו לשני צפצופים המעידים על כך שהפוד מוכן להדבקה. בעת חישוב הכמות הכוללת של האינסולין הדרוש למשך 3 ימים, קחו בחשבון כי הפעלת הפוד תשתמש ב-3 עד 10 יחידות.

![Activate_Pod_3](../images/DASH_images/Activate_Pod/Activate_Pod_3.png)    ![Activate_Pod_4](../images/DASH_images/Activate_Pod/Activate_Pod_4.jpg)

Ensure that the new pod and the phone running **AAPS** are within close proximity of each other and click the **Next** button.

**NOTE**: if the  error message below pops up _'Could not find an available pod for activation'_ (this can happen), do not panic. לחצו על **נסה שוב**. ברוב המצבים ההפעלה תימשך בהצלחה.

![Activate_Pod_3](../images/DASH_images/Activate_pod_error.png)

3. במסך **אתחול פוד**, הפוד יתחיל להתכונן להדבקה (אתם תשמעו קליק ואחריו סדרה של צלילי תקתוק).  סימן ירוק יוצג לאחר תיחול מוצלח, והלחצן **הבא** יהפוך לזמין. לחצו על **הבא** כדי להשלים את תיחול התרמיל ולהציג את מסך **הצמד פוד**.

![Activate_Pod_5](../images/DASH_images/Activate_Pod/Activate_Pod_5.jpg)    ![Activate_Pod_6](../images/DASH_images/Activate_Pod/Activate_Pod_6.jpg)

4. Next, prepare the infusion site ready to receive the new pod. Wash hands to avoid any risk of infection. Clean the infusion site by either using soap and water or an alcohol wipe to disinfect and let the skin air dry completely before proceeding. Remove the pod's blue plastic needle cap. If you see something that sticks out of the pod or unusual, cancel the process and start with a new pod. If everything looks OK, proceed to take off the white paper backing from the adhesive and apply the pod to the selected site on your body. לסיום, לחצו על **הבא**.

![Activate_Pod_8](../images/DASH_images/Activate_Pod/Activate_Pod_8.jpg)

5. תיבת הדו-שיח **הצמד פוד** תופיע כעת. **לחצו על אישור רק אם אתם מוכנים להחדרת הצינורית**.

![Activate_Pod_9](../images/DASH_images/Activate_Pod/Activate_Pod_9.jpg)

6. After pressing **OK**, it may take some time before the DASH responds and inserts the cannula (1-2 minutes maximum). Be patient.

 *הערה: לפני החדרת הקנולה, מומלץ לצבוט את העור בסביבת נקודת ההחדרה. זה מבטיח החדרה חלקה של המחט ומפחית את הסיכויים לפתח חסימות.*

![Activate_Pod_10](../images/DASH_images/Activate_Pod/Activate_Pod_10.png)    ![Activate_Pod_11](../images/DASH_images/Activate_Pod/Activate_Pod_11.jpg)

7. יופיע V ירוק, ולחצן **הבא** יופעל לאחר החדרת מוצלחת של הקנולה. לחצו על **הבא**.

![Activate_Pod_12](../images/DASH_images/Activate_Pod/Activate_Pod_12.jpg)

9. מסך **הפוד הופעל** מוצג. לחצו על **סיום**. מזל טוב! You have now started a new pod session.

![Activate_Pod_13](../images/DASH_images/Activate_Pod/Activate_Pod_13.jpg)

10. במסך התפריט **ניהול פוד** הכפתור  **הפעל פוד (1)** אמור להיות *מושבת* והכפתור **כבה פוד (2)** אמור להיות *מאופשר*. הסיבה לכך היא שהפוד פעיל כעת ולא ניתן להפעיל פוד נוסף מבלי להשבית את הפוד הנוכחי.

    לחצו על כפתור החזרה בטלפון כדי לחזור ללשונית **DASH** שתציג כעת מידע על הפוד הנוכחי, כולל המינון הבזאלי הנוכחי, רמת מכל האינסולין, אינסולין שהוזרק, שגיאות של הפוד והתראות.

    For more details on the information displayed go to the [**DASH Tab**](#dash-tab) section of this document.

![Activate_Pod_14](../images/DASH_images/Activate_Pod/Activate_Pod_14.png)

​    ![Activate_Pod_15](../images/DASH_images/Activate_Pod/Activate_Pod_15.jpg)

מומלץ לייצא הגדרות לאחר הפעלת הפוד. Export settings should be done at each pod change and once a month, copy the exported file to your internet drive. see [**Export settings Doc**](../Maintenance/ExportImportSettings.md).


(OmnipodDASH-deactivate-pod)=

### Deactivate Pod

בנסיבות רגילות, פוד אמור לפעול שלושה ימים (72 שעות) ועוד 8 שעות לאחר אזהרת תפוגתו, סך הכל 80 שעות שימוש בפוד.

כיצד להשבית את הפוד (מתוקף התפוגה או בעקבות כשל של הפוד):

1. נווטו ללשונית **DASH** ולחצו על **ניהול הפוד (1)** ולאחר מכן בחרו **ניהול פוד** ואז **כבה פוד**.

![Deactivate_Pod_1](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)

​    ![Deactivate_Pod_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_2.png)

2. במסך **כבה פוד**, לחצו על **הבא** כדי להתחיל בתהליך של השבתת הפוד. אתם תשמעו צפצוף אישור מהפוד שהכיבוי הצליח.

![Deactivate_Pod_3](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_3.jpg)

 ![Deactivate_Pod_4](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_4.jpg)


3. סימון ירוק יופיע לאחר השבתה מוצלחת. לחצו על **הבא** כדי לעבור אל המסך "הפוד הושבת". כעת תוכלו להסיר את הפוד כיוון שפעילותו הושבתה.

![Deactivate_Pod_5](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_5.jpg)

4. לחצו על הכפתור הירוק כדי לחזור למסך **ניהול הפוד**.

![Deactivate_Pod_6](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_6.jpg)

5. בתפריט **ניהול פוד**; לחצו כפתור 'הקודם' של הטלפון כדי לחזור ללשונית **DASH**. ודאו שהשדה **סטטוס הפוד:** מציג הודעת **אין פוד פעיל**.

![Deactivate_Pod_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_2.png)

 ![Deactivate_Pod_8](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)

### חידוש הזרקת האינסולין

**Note**: During **Profile Switches**, DASH must suspend delivery before setting the new basal **Profile** as delivery can be suspended. Read [**Delivery suspended**](#delivery-suspended) in the troubleshooting section for more details.

השתמשו בפקודה זו כדי להנחות את הפוד הפעיל כעת לחדש את אספקת האינסולין. After the command is successfully processed, insulin will resume normal delivery using the current basal rate based on the current time from the active basal **Profile**. The pod will again accept commands for bolus, **TBR**, and **SMB**.

1. נווטו אל הלשונית **DASH** וודאו שהשדה **סטטוס הפוד (1)** מציג את **מופסק**, לאחר מכן הקישו על **חידוש הזרקה (2)** כדי להתחיל בתהליך הוראה לפוד הנוכחי לחדש את הזרקת האינסולין. ההודעה **חידוש הזרקה** תוצג בשדה **סטטוס הפוד (3)**.

![Resume_1](../images/DASH_images/Resume/Resume_1.jpg)   ![Resume_2](../images/DASH_images/Resume/Resume_2.jpg)

2. כאשר הפקודה 'חידוש הזרקה' מצליחה, תיבת דו-שיח לאישור תציג את ההודעה **מתן האינסולין חודש**. לחצו על **אישור** כדי להמשיך.

![Resume_3](../images/DASH_images/Resume/Resume_3.png)

3. הלשונית **DASH** תעדכן את השדה **סטטוס הפוד (1)** ויוצג **פועל,** והלחצן **חידוש הזרקה** לא יוצג יותר

![Resume_4](../images/DASH_images/Resume/Resume_4.jpg)

### השתקת התראות פוד

*הערה - הלחצן 'השתקה' זמין רק בלשונית **DASH** כאשר הופעלה התראה על תפוגת הפוד או התראת מכל נמוך. אם לחצן השתקת ההתראות לא גלוי ואתם שומעים צפצוף מהפוד, נסו ללחוץ על 'רענן סטטוס הפוד'.*

התהליך שלהלן יראה כיצד לאשר ולבטל צפצופים של הפוד המתרחשים כאשר זמן פעולת הפוד מתקרב למגבלת הזמן של הפוד של 72 שעות (3 ימים). מגבלת זמן אזהרה זו מוגדרת ב**שעות לפני כיבוי** שבהגדרת התראות ה-Dash. אורך החיים המרבי של פוד הוא 80 שעות (3 ימים ו-8 שעות), אולם היצרן ממליץ שלא לחרוג מ-72 השעות (3 ימים).

1. כאשר הפוד יגיע לזמן האזהרה **שעות לפני כיבוי**, הוא יצפצף צפצוף אזהרה כדי להודיע שהוא מתקרב לזמן התפוגה שלו ובקרוב תידרש החלפת פוד. אפשר לאמת זאת בלשונית **DASH**, השדה **תפוגת הפוד: (1)** יציג את השעה המדויקת בה הפוד יפוג (72 שעות לאחר ההפעלה) והטקסט יצבע ב**אדום** לאחר שהזמן הזה יעבור. בשדה **התראות פוד פעילות (2)** מוצגת הודעת המצב **תוקף הפוד יפוג בקרוב**. כעת יופעל הלחצן **השתקת התראות (3)**.

![ACK_alerts_1](../images/DASH_images/ACK_Alerts/ACK_ALERTS_1.png)

2. נווטו לכרטיסייה **DASH** ולחצו על **השתקת התראות (2)**. **AAPS** sends the command to the pod to deactivate the pod expiration warning beeps and updates the **Pod status (1)** field with **ACKNOWLEDGE ALERTS**.

![ACK_alerts_2](../images/DASH_images/ACK_Alerts/ACK_ALERTS_2.png)

3. לאחר **השבתה מוצלחת** של ההתראות, **שני צפצופים** יישמעו על ידי הפוד הפעיל ותיבת דו-שיח תציג את ההודעה **הפעלת ההתראות הושתקה**. לחצו על **אישור** כדי לאשר ולבטל את תיבת הדו-שיח.


![ACK_alerts_3](../images/DASH_images/ACK_Alerts/ACK_ALERTS_3.png)

4. נווטו ללשונית **DASH**. תחת **התראות פוד פעילות**, הודעת האזהרה אינה מוצגת עוד והפוד כבר לא יוציא צפצופי אזהרת תפוגה.

(OmnipodDASH-view-pod-history)=

### הצגת היסטוריית הפוד

This section explains how to review your active pod history and filter by different action categories. כלי היסטוריית הפוד מאפשר לצפות בפעולות והתוצאותיהן שנעשו בעת השימוש בפוד במהלך השימוש בו (72 - 80 שעות).

תכונה זו מועילה לאימות בולוסים, בזאלים זמניים ופקודות בזאליות שנשלחו לפוד. הקטגוריות הנותרות שימושיות באופן כללי לפתרון בעיות וקביעת סדר האירועים שהתרחשו עד לכשל.

*הערה:* **רק הפקודה האחרונה יכולה להיות לא ודאית**. פקודות חדשות *לא יישלחו* עד שהפקודה "הלא ודאית" האחרונה תהפוך ל'אושרה' או 'נדחתה'</strong>. הדרך 'לתקן' פקודות לא ודאיות היא **'רענון סטטוס הפוד'**.

1. נווטו ללשונית **DASH** ולחצו על **ניהול הפוד (1)** ולאחר מכן בחרו **היסטוריית פוד (2)** כדי לפתוח את מסך היסטוריית הפוד.

![Pod_history_1](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)



 ![Pod_history_2](../images/DASH_images/Pod_History/Pod_history_2.jpg)



2. במסך **היסטוריית הפוד**, קטגוריית ברירת המחדל של **הכל (1)** מוצגת ומציגה את **התאריך והשעה (2)** של כל **פעולות (3)** הפוד ו**תוצאות (4)** בסדר כרונולוגי הפוך. Use your phone’s **back button 2 times** to return to the **DASH** tab in the main **AAPS** interface.


![Pod_history_3](../images/DASH_images/Pod_History/Pod_history_3.jpg) ![Pod_history_4](../images/DASH_images/Pod_History/Pod_history_4.jpg)

(OmnipodDASH-dash-tab)=

## לשונית DASH

להלן הסבר על מבנה ומשמעות הסמלים ושדות הסטטוס בלשונית **DASH** בממשק הראשי של AAPS.

*הערה: אם הודעה כלשהי בשדות הסטטוס מדווחת "(לא בטוח)", יהיה עליכם ללחוץ על כפתור הרענון כדי לרענן את מצב הפוד.*

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
* **שגיאות:** מציג את השגיאה האחרונה. Review the [Pod history](#view-pod-history) and log files for past errors and more detailed information.
*  **התראות פוד פעילות:** שדה השמור להתראות הפועלות כרגע על הפוד הפעיל.

### מקשים


![Refresh_Icon](../images/DASH_images/Refresh_LOGO.png) : שולח פקודת רענון לפוד לעדכון התקשורת.

   * השתמשו כדי לרענן את מצב הפוד ולבטל סטטוסים המכילים את הטקסט "(לא ודאי)".
   * לקריאה נוספת ראו את הפרק פתרון בעיות מטה.

![POD_MGMT_Icon](../images/DASH_images/POD_MGMT_LOGO.png) : מנווט אל תפריט ניהול הפוד.

![ack_alert_logo](../images/DASH_images/ack_alert_logo.png) : לחיצה תשבית את הצפצופים והתראות של הפוד (תפוגה, מכל מרוקן...).

   * הלחצן מוצג רק לאחר אזהרת התפוגה של הפוד.
   * לאחר קבלת ההתראה, אייקון זה יפסיק להופיע.

![RESUME_Icon](../images/DASH_images/DASH_tab_icons/RESUME_Icon.png) : מחדש את הזרקת האינסולין שהושהתה בפוד הנוכחי.

### תפריט ניהול הפוד

Below is the meaning of the icons on the **Pod Management** menu accessed by pressing **POD MGMT (1)** button from the **DASH** tab.

![DASH_Tab_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)

 ![DASH_Tab_3](../images/DASH_images/DASH_Tab/DASH_Tab_3.png)

* 2 - [**Activate Pod**](#activate-pod) : Primes and activates a new pod.
* 3 - [**Deactivate Pod**](#deactivate-pod) : Deactivates the currently active pod.
* 4 - **Play Test Beep** : Plays a single test beep on the pod when pressed.
* 5 - [**Pod history**](#view-pod-history) : Displays the active pod activity history.

(DanaRS-Insulin-Pump-dash-settings)=

## הגדרות Dash

בפינה הימנית-עליונה **בתפריט ההמבורגר (☰)** בחרו **בונה התצורה (1)** ← **משאבה** ← **Dash** ← **בחירת הכפתור העגול ("כפתור רדיו") (2) ← גלגל שיניים (3)**. Selecting the **checkbox (4)** next to the **Settings Gear (3)** will allow the Dash menu to be displayed as a tab in the **AAPS** interface titled **DASH**.

![Dash_settings_1](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)



**הערה:** דרך מהירה יותר לגשת ל**הגדרות Dash** היא על ידי פתיחת**תפריט 3 הנקודות (⋮) (1)** בפינה הימנית העליונה של הלשונית **DASH** ובחירה ב**העדפות Dash (2)** מהתפריט שנפתח.

![Dash_settings_3](../images/DASH_images/Dash_settings/Dash_settings_3.png)

להלן קבוצות ההגדרות; תוכלו להפעילן או להשביתן באמצעות מתגים שיש לרוב ההגדרות המתוארות להלן:

*הערה: כוכבית (*) מציינת את ברירת המחדל של הגדרה מופעלת.*

### צפצופי אישור

![Dash_settings_4](../images/DASH_images/Dash_settings/Dash_settings_4.jpg)

מספק צפצופי אישור מהפוד על ביצוע בולוס, שינויים במינון הבזאלי, בזאלי זמני, SMB ושינויים אחרים.

* **צפצופי בולוס מופעלים:** הפעלה או השבתת צפצופי אישור כאשר מוזרק בולוס.
* **צפצופי בזאלי מופעלים:** הפעלת או השבתת צפצופי אישור כאשר נקבע מינון בזאלי חדש, המינון הבזאלי הפעיל מבוטל או המינון הבזאלי הנוכחי משתנה.
* **צפצופי SMB מופעלים:** הפעלת או השבתת צפצופי אישור כאשר מוזרק SMB.
* **צפצופי בזאלי זמני מופעלים:** הפעלת או השבתת צפצופי אישור כאשר בזאלי זמני מופעל או מבוטל.

### התראות

![Dash_settings_5](../images/DASH_images/Dash_settings/Dash_settings_5.jpg)

Provides **AAPS** alerts for pod expiration, shutdown, low reservoir based on the defined threshold units.

*שימו לב כי הודעת AAPS תינתן תמיד לכל התראה לאחר התקשורת הראשונית עם הפוד מאז הופעלה ההתראה. דחיית ההודעה לא תבטל את ההתראה, אלא אם כן מופעל אישור התראות פוד אוטומטי. כדי לבטל את ההתראה באופן ידני, יש לבקר בלשונית **DASH** וללחוץ על **השתקת התראות**.*

* **תזכורת לתפוגה מופעלת:** הפעילו או השביתו תזכורת לתפוגת הפוד שתופעל כאשר יגיע מספר השעות שהגדרתם לפני ההשבתה.
* **שעות לפני כיבוי:** מגדיר את מספר השעות לפני כיבוי הפוד הפעיל, שלאחר מכן תופעל תזכורת לתפוגה.
* **התראת מכל נמוך מופעלת:** הפעלה או השבתה של התראה על יתרת יחידות אינסולין נמוכה מסף מוגדר.
* **מספר יחידות:** מספר היחידות בהן מופעלת התראת המכל הנמוך.

### הודעות

![Dash_settings_6](../images/DASH_images/Dash_settings/Dash_settings_6.jpg)

The Notification section allows the user to so select their preferred notifications and audible phone alerts when it is uncertain if TBR, SMB, or bolus, and delivery suspended events were successful.

*הערה: אלה הן התראות בלבד, לא מתבצעות התראות מסוג צפצופים.*

* **Sound for uncertain TBR notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when **AAPS** is uncertain if a TBR was successfully set.
* **Sound for uncertain SMB notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when **AAPS**is uncertain if an SMB was successfully delivered.
* **Sound for uncertain bolus notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when **AAPS**is uncertain if a bolus was successfully delivered.
* **השמע כשהתראת הפסקת ההזרקה מאופשרת:** הפעילו או השביתו הגדרה זו כדי להפעיל התראה קולית והתראה חזותית כאשר AAPS מעביר בהצלחה פקודת הפסקת הזרקה.

## לשונית פעולות (ACT)

This tab is well documented in the main**AAPS**documentation but there are a few items on this tab that are specific to how the DASH differs from tube based pumps, especially after the processes of applying a new pod.

1. Go to the **Actions (ACT)** tab in the main **AAPS**interface.

2. Under the **Careportal (1)** section the **Insulin** and **Cannula** fields will have their **age reset** to 0 days and 0 hours **after each pod change**. זה נעשה בגלל האופן שבו משאבת אומניפוד בנויה ופועלת. מכיוון שהפוד מחדיר את הצינורית ישירות לעור באתר הדבקתו, אין שימוש בצינור מסורתי במשאבות אומניפוד. *לכן לאחר החלפת פוד, הגיל של כל אחד מהערכים הללו יתאפס אוטומטית.* **גיל סוללת המשאבה** אינו מדווח מכיוון שהסוללה בפוד תמיד תהיה יותר מאורך חיי הפוד (80 שעות לכל היותר). **סוללת המשאבה** ו**יתרת האינסולין** נמצאים בעצמם בתוך כל פוד.

![ACT_1](../images/DASH_images/Actions_Tab/ACT_1.png)

### כמות במכל

**יתרת אינסולין**

Insulin level displayed is the amount reported by DASH. עם זאת, הוא מדווח רק על יתרת אינסולין מדוייקת רק כאשר היא מתחת ל-50 יחידות. עד אז יוצג "מעל 50 יחידות". הכמות המדווחת אינה מדויקת: כאשר הפוד מדווח על 'ריק' ברוב המקרים עדיין יישארו מספר יחידות אינסולין נוספות. The DASH overview tab will display as described the below:

  * **Above 50 Units** - The pod reports more than 50 units currently in the reservoir.
  * **מתחת ל-50 יחידות** - כמות האינסולין שנותרה במכל כפי שדווח על ידי הפוד.

הערות נוספות:
  * **SMS** - מחזירה ערך או 50+U בתגובות של SMS
  * **נייטסקאוט** - העלאת ערך של 50 כאשר מעל 50 יחידות לנייטסקאוט (גרסה 14.07 ומעלה).  גרסאות חדשות יותר ידווחו על ערך של 50+ כאשר מעל 50 יחידות.

## Troubleshooting

### הפסקת הזרקה

  * אין יותר כפתור של הפסקת הזרקה. If you want to "suspend" the pod, you can set a zero **TBR** for x minutes.
  * During **Profile Switches**, DASH must suspend delivery before setting the new basal **Profile**. אם התקשורת נכשלת בין שתי הפקודות, אז ניתן להשהות את ההזרקה. כשזה קורה:
     - לא יהיה מתן אינסולין, כולל בזאלי, SMB, בולוס ידני וכו'.
     - ייתכן שתהיה הודעה על כך שאחת הפקודות אינה מאושרת: זה תלוי במועד התרחשות הכשל.
     - **AAPS** will try to set the new basal profile every 15 minutes.
     - **AAPS** will show a notification informing that the delivery is suspended every 15 minutes, if the delivery is still suspended (resume delivery failed).
     - The [**Resume delivery**](#resuming-insulin-delivery) button will be active if the user chooses to resume delivery manually.
     - If **AAPS** fails to resume delivery on its own (this happens if the pod is unreachable, sound is muted, etc), the pod will start beeping 4 times every minute for 3 minutes, then repeated every 15 minutes if delivery is still suspended for more than 20 minutes.
  * עבור פקודות לא ודאיות, "רענון סטטוס הפוד" אמור לאשר\לדחות אותן.

**הערה:** כאשר שומעים צפצופים מהפוד, אל תניחו שההזרקה תימשך מבלי לבדוק את הטלפון, ההזרקה עלולה להישאר מופסקת **ולכן עליכם לוודא!**

### שגיאות בפוד

פודים נכשלים מדי פעם בשל מגוון בעיות, כולל בעיות חומרה של הפוד עצמו. הנוהג הטוב ביותר הוא לא להודיע אותם למשווק המשאבה, מכיוון ש- AAPS אינו מקרה שימוש מאושר. ניתן [**למצוא כאן**](https://github.com/openaps/openomni/wiki/Fault-event-codes) רשימה של קודי תקלות כדי לסייע בקביעת הסיבה.

### מניעת שגיאה 49 - כישלונות פוד

כשל זה קשור למצב פוד שגוי עבור פקודה או שגיאה במהלך פקודת אספקת אינסולין. זה קורה כאשר מנהל ההתקן והפוד אינם מסכימים על המצב בפועל. הפוד (כאמצעי בטיחות מובנה) מגיב עם קוד שגיאה 49 סופני (0x31) והפוד, בסופו של דבר, הופך למה שמכונה פוד "צרחן": צפצוף ארוך ומרגיז שניתן לעצור רק על ידי ניקוב חור במיקום מתאים בחלק האחורי של הפוד. לעתים קרובות קשה לברר את המקור המדויק של "כשל פוד 49". מצבים שיש חשד לכישלון זה (למשל בקריסות אפליקציה, הפעלת גרסת פיתוח או התקנה מחדש).

### התראות המשאבה אינה נגישה

כאשר לא ניתן ליצור תקשורת עם הפוד למשך זמן מוגדר מראש תוצג התראה "משאבה בלתי ניתנת להשגה". ניתן להגדיר התראות על שלא ניתן להגיע למשאבה על ידי מעבר לתפריט שלוש הנקודות בצד שמאל למעלה, בחירה ב**העדפות** ← **התראות מקומיות** ← ** סף משאבה בלתי נגישה [min]**. הערך המומלץ הוא התראה לאחר **120** דקות.

### ייצוא הגדרות

Exporting **AAPS** settings enables you to restore all your settings, and maybe more importantly, all your Objectives. You may need to restore settings to the “last known working situation” or after uninstalling/reinstalling **AAPS** or in case of phone loss, reinstalling on the new phone.

הערה: מידע הפוד הפעיל כלול בהגדרות המיוצאות. אם אתה תייבאו קובץ מיוצא "ישן", הפוד הנוכחי "ימות". אין אלטרנטיבה אחרת. In some cases (like a _programmed_ phone change), you may need to use the exported file to restore **AAPS'** settings **while keeping the current active Pod**. במקרה זה חשוב להשתמש רק בקובץ ההגדרות שיוצא לאחרונה המכיל את הפוד הפעיל כעת.

**מומלץ לבצע ייצוא מיד לאחר הפעלת פוד**. This way you will always be able to restore the current active pod in case of a problem. למשל במקרה של מעבר לטלפון רזרבי.

העתיקו באופן קבוע את ההגדרות המיוצאות למקום בטוח (לדוגמה לכונן ענן) שניתן לגשת אליו בכל טלפון בעת הצורך (למשל במקרה של אובדן טלפון או איפוס להגדרות היצרן של הטלפון).

### יבוא הגדרות

**אזהרה** שימו לב שייבוא הגדרות עלול לייבא סטטוס פוד מיושן. כתוצאה מכך, קיים סיכון לאיבוד הפוד הפעיל! (ראו **ייצוא הגדרות**). עדיף לנסות זאת רק כאשר אין אפשרויות אחרות זמינות.

בעת ייבוא הגדרות עם פוד פעיל, ודאו שהייצוא בוצע עם הפוד הפעיל הנוכחי.

**ייבוא תוך כדי פוד פעיל:** (אתם מסתכנים באיבוד הפוד!)

1. ודאו שאתם מייבאים הגדרות שיוצאו לאחרונה עם הפוד הפעיל כעת.
2. ייבאו את ההגדרות.
3. בדיקת על ההגדרות.

**ייבוא (ללא פוד פעיל)**

1. ייבוא כל קובץ מיוצא עדכני אמור לעבוד (ראה למעלה)
2. ייבאו את ההגדרות.
3. בדיקת על ההגדרות.
4. ייתכן שיהיה עליכם **לבטל** את הפוד "הלא קיים" אם הגדרות הייבוא כוללות נתוני פוד פעילים כלשהם.

### ייבוא הגדרות המכילות מצב פוד מפוד לא פעיל

בעת ייבוא הגדרות המכילות נתונים עבור פוד שכבר אינו פעיל, AndroidAPS ינסה להתחבר אליו, מה שכמובן ייכשל. אין באפשרותכם להפעיל פוד חדש במצב זה.

To remove the old pod session “try” to de-activate the Pod. הכיבוי ייכשל. בחרו "נסה שוב". לאחר הניסיון השני או השלישי תקבלו את האפשרות להסיר את הפוד. Once the old pod is removed you will be able to activate a new pod.

### התקנה מחדש של AndroidAPS

When uninstalling**AAPS** you will lose all your settings, objectives and the current Pod session. ע"מ לשחזר אותם ודאו שיש לכם קובץ הגדרות שיוצא לאחרונה זמין!

When on an active Pod, make sure that you have an export for the current pod session or you will lose the currently active pod when importing older settings.

1. ייצאו את ההגדרות שלך ושמרו עותק במקום בטוח.
2. Uninstall **AAPS** and restart your phone.
3. Install the new version of **AAPS**.
4. ייבאו את ההגדרות.
5. Verify all preferences (optionally import settings again).
6. Activate a new pod.
7. לבסוף: ייצאו קובץ הגדרות.

### עדכון AndroidAPS לגרסה חדשה יותר

ברוב המקרים אין צורך להסיר את ההתקנה. ניתן לבצע התקנה "דורסת" על ידי התחלת ההתקנה של הגרסה החדשה. זה אפשרי גם עם פוד פעיל.

1. ייבאו את ההגדרות.
2. Install the new **AAPS** version.
3. ודאו שההתקנה הצליחה
4. RESUME the Pod or activate a new pod.
5. לבסוף: ייצאו קובץ הגדרות.

### התראות פוד

לידיעתכם, מנהל ההתקן של Dash מציג מגוון התראות ייחודיות בלשונית **סקירה כללית**, רובן אינפורמטיביות וניתנות לביטול בעוד שחלקן מספקות למשתמש פעולה לבצע על מנת לפתור את הסיבה להתראה המופעלת. להלן סיכום של ההתראות העיקריות בהן אתם עשויים להיתקל:

* No active Pod session detected. ניתן לבטל התראה זו זמנית על ידי לחיצה על **השתקה** אך היא תמשיך לפעול כל עוד לא הופעל פוד חדש. Once activated this alert is automatically silenced.
* Pod suspended Informational alert that pod has been suspended.
* Setting basal **Profile** failed : Delivery might be suspended! נא לרענן ידנית את סטטוס הפוד בלשונית Omnipod ולחדש את ההזרקה במידת הצורך. Informational alert that the Pod basal **Profile** setting has failed, and you will need to hit *Refresh* on the Omnipod tab.
* Unable to verify whether **SMB** bolus succeeded. אם אתם בטוחים שהבולוס לא הצליח, עליכם למחוק את ערך SMB באופן ידני מטיפולים. Alert that the **SMB** bolus command success could not be verified, you will need to verify the *Last bolus* field on the DASH tab to see if **SMB** bolus succeeded and if not remove the entry from the Treatments tab.
* לא בטוח אם "בולוס/בזאלי זמני/SMB" הושלם, אנא ודאו ידנית אם הוא הצליח.

## Where to get help for DASH

All of the development work for the DASH is done by the community on a **volunteer** basis; please keep this in mind and use the following guidelines before requesting assistance:

-  **רמה 0** קראו את הסעיף הרלוונטי בתיעוד זה כדי להבטיח שאתם מבינים כיצד להשתמש במה שאתם מתקשים איתו.
-  **רמה 1:** אם אתם עדיין נתקלים בבעיות שאתם לא מצליחים לפתור באמצעות מסמך זה, אנא עברו לערוץ *#androidaps* ב-**Discord** באמצעות [קישור ההזמנה](https://discord.gg/4fQUWHZ4Mw).
-  **Level 2:** Search existing issues to see if your issue has already been reported at [Issues](https://github.com/nightscout/AndroidAPS/issues) if it exists, please confirm/comment/add information on your problem. If not, please create a [new issue](https://github.com/nightscout/AndroidAPS/issues) and attach [your log files](../GettingHelp/AccessingLogFiles.md).
-  **היו סבלניים - רוב חברי הקהילה שלנו מורכבים ממתנדבים בעלי אופי טוב, ופתרון בעיות דורש לעתים קרובות זמן וסבלנות מצד המשתמשים והמפתחים כאחד.**
