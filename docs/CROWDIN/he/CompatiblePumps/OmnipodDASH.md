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

**Your Omnipod Dash PDM will become redundant after the AAPS Dash driver activates your pod.** Previously a user may have operated a PDM to send commands to your DASH. A DASH will only faciiliate a single device to send commands to communicate with it. The device that successfully activates the pod is the only device allowed to communicate with it from that point forward. This means that once you activate a DASH with your Android phone through the **AAPS**, **you will no longer be able to use your PDM with that pod**. The **AAPS** Dash driver in your Android phone is now your acting PDM.

*This does NOT mean you should throw away your PDM, it is recommended to keep it around as a backup and for emergencies, for instance when your phone gets lost or AAPS is not working correctly.*

**Your pod will not stop delivering insulin when it is not connected to AAPS**. Default basal rates are programmed on the pod on activation as defined in the current active **Profile**. As long as **AAPS** is operational it will send basal rate commands that run for a maximum of 120 minutes. When for some reason the pod does not receive any new commands (for instance because communication was lost due to Pod - phone distance) the pod will automatically fall back to default basal rates.

**AAPS Profile does not support a 30 minute basal rate time frame** If you are new to **AAPS** and are setting up your basal rate **Profile** for the first time, please be aware that basal rates starting on a half-hour basis are not supported, and programmes on an hourly basis. For example, if you have a basal rate of 1.1 units which starts at 09:30 and has a duration of 2 hours ending at 11:30, it is not possible replicate this im **AAPS**. You will need to change this 1.1 unit basal rate to a time range of either 9:00-11:00 or 10:00-12:00. Even though the DASH hardware itself supports the 30 minute basal rate **Profile** increments, **AAPS** does support this feature.

**0U/h profile basal rates are NOT supported in AAPS** While the DASH does support a zero basal rate, since **AAPS** uses multiples of the user's **Profile** basal rate to determine automated treatment; it cannot function with a zero basal rate. A temporary zero basal rate can be achieved through the "Disconnect pump" function or through a combination of Disable Loop/Temp Basal Rate or Suspend Loop/Temp Basal Rate. The lowest basal rate allowed in **AAPS** is 0.05U/h.

## Selecting Dash in AAPS

There are **two ways**:

### אפשרות 1: התקנות חדשות

When installing **AAPS** for the first time, the **Setup Wizard** will guide new users through key features and installation requirements for **AAPS**. Select “DASH” when you reach Pump selection.

![Enable_Dash_1](../images/DASH_images/Enable_Dash/Enable_Dash_1.png)

When in doubt you can also select “Virtual Pump” and select “DASH” later, after setting up **AAPS** (see option 2).

### אפשרות 2: בונה התצורה

On an existing installation you can select the **DASH** pump from the Config builder:

On the top-left hand corner **hamburger menu** select **Config Builder (1)**\ ➜\ **Pump**\ ➜\ **Dash**\ ➜\ **Settings Gear (3)** by selecting the **radio button (2)** titled **Dash**.

Selecting the **checkbox (4)** next to the **Settings Gear (3)** will allow the DASH menu to be displayed as a tab in the **AAPS** interface titled **DASH**. Checking this box will facilitate your access to the DASH commands when using **AAPS**.

**NOTE:** A faster way to access the [**Dash settings**](#omnipod-dash-settings) can be found below in the DASH settings section of this document.

![Enable_Dash_3](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)

### אימות בחירת מנהל התקן Omnipod

To verify that you have selected the DASH in **AAPS**, if you have checked the box (4), **swipe to the left** from the **Overview** tab, where you will now see a **DASH** tab on **AAPS**. If this box is left unchecked, you’ll find the DASH tab in the hamburger menu upper left.

![Enable_Dash_4](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)

## תצורת Dash

Please **swipe left** to the **DASH** tab where you will be able to manage all pod functions (some of these functions are not enabled or visible without an active pod session):

![Refresh_LOGO](../images/DASH_images/Refresh_LOGO.png) 'Refresh' pod connectivity and status, be able to silence pod alarms when the pod beeps

![POD_MGMT_LOGO](../images/DASH_images/POD_MGMT_LOGO.png) 'Pod Management' (Activate, Deactivate, Play test beep, and Pod history)

(omnipod-dash-activate-pod)=

### Activate Pod

1. נווטו אל הלשונית **DASH** ולחצו על הלחצן **ניהול פוד (1)**, ולאחר מכן לחצו על **הפעל פוד (2)**.

![Activate_Pod_1](../images/DASH_images/Activate_Pod/Activate_Pod_1.png)

​    ![Activate_Pod_2](../images/DASH_images/Activate_Pod/Activate_Pod_2.png)

2. מסך **מילוי פוד** מוצג. מלאו פוד חדש עם לפחות 80 יחידות אינסולין והקשיבו לשני צפצופים המעידים על כך שהפוד מוכן להדבקה. בעת חישוב הכמות הכוללת של האינסולין הדרוש למשך 3 ימים, קחו בחשבון כי הפעלת הפוד תשתמש ב-3 עד 10 יחידות.

![Activate_Pod_3](../images/DASH_images/Activate_Pod/Activate_Pod_3.png)    ![Activate_Pod_4](../images/DASH_images/Activate_Pod/Activate_Pod_4.jpg)

Ensure that the new pod and the phone running **AAPS** are within close proximity of each other and click the **Next** button.

**NOTE**: if the  error message below pops up _'Could not find an available pod for activation'_ (this can happen), do not panic. Click on the **Retry** button. In most situations activation will continue successfully.

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

    For more details on the information displayed go to the [**DASH Tab**](#omnipod-dash-tab) section of this document.

![Activate_Pod_14](../images/DASH_images/Activate_Pod/Activate_Pod_14.png)

​    ![Activate_Pod_15](../images/DASH_images/Activate_Pod/Activate_Pod_15.jpg)

It is good practice to export settings AFTER activating the pod. Export settings should be done at each pod change and once a month, copy the exported file to your internet drive. see [**Export settings Doc**](../Maintenance/ExportImportSettings.md).


(omnipod-dash-deactivate-pod)=

### Deactivate Pod

Under normal circumstances, the expected lifetime of a pod is three days (72 hours) and an additional 8 hours after the pod expiration warning for a total of 80 hours of pod usage.

To deactivate a pod (either from expiration or from a pod failure):

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

(omnipod-dash-resuming-insulin-delivery)=

### חידוש הזרקת האינסולין

**Note**: During **Profile Switches**, DASH must suspend delivery before setting the new basal **Profile** as delivery can be suspended. Read [**Delivery suspended**](#omnipod-dash-delivery-suspended) in the troubleshooting section for more details.

Use this command to instruct the active, currently suspended pod to resume insulin delivery. After the command is successfully processed, insulin will resume normal delivery using the current basal rate based on the current time from the active basal **Profile**. The pod will again accept commands for bolus, **TBR**, and **SMB**.

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

2. נווטו לכרטיסייה **DASH** ולחצו על **השתקת התראות (2)**. **AAPS** sends the command to the pod to deactivate the pod expiration warning beeps and updates the **Pod status (1)** field with **ACKNOWLEDGE ALERTS**.

![ACK_alerts_2](../images/DASH_images/ACK_Alerts/ACK_ALERTS_2.png)

3. לאחר **השבתה מוצלחת** של ההתראות, **שני צפצופים** יישמעו על ידי הפוד הפעיל ותיבת דו-שיח תציג את ההודעה **הפעלת ההתראות הושתקה**. לחצו על **אישור** כדי לאשר ולבטל את תיבת הדו-שיח.


![ACK_alerts_3](../images/DASH_images/ACK_Alerts/ACK_ALERTS_3.png)

4. נווטו ללשונית **DASH**. תחת **התראות פוד פעילות**, הודעת האזהרה אינה מוצגת עוד והפוד כבר לא יוציא צפצופי אזהרת תפוגה.

(omnipod-dash-view-pod-history)=

### הצגת היסטוריית הפוד

This section explains how to review your active pod history and filter by different action categories. The pod history tool allows you to view the actions and results committed to your currently active pod during its three days (72 - 80 hours) life.

This feature is helpful in verifying boluses, TBRs and basal commands that were sent to the pod. The remaining categories are useful for troubleshooting issues and determining the order of events that occurred leading up to a failure.

*NOTE:* **Only the last command can be uncertain**. New commands *will not be sent* until the **last 'uncertain' command becomes 'confirmed' or 'denied'**. The way to 'fix' uncertain commands is to **'refresh pod status'**.

1. נווטו ללשונית **DASH** ולחצו על **ניהול הפוד (1)** ולאחר מכן בחרו **היסטוריית פוד (2)** כדי לפתוח את מסך היסטוריית הפוד.

![Pod_history_1](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)



 ![Pod_history_2](../images/DASH_images/Pod_History/Pod_history_2.jpg)



2. במסך **היסטוריית הפוד**, קטגוריית ברירת המחדל של **הכל (1)** מוצגת ומציגה את **התאריך והשעה (2)** של כל **פעולות (3)** הפוד ו**תוצאות (4)** בסדר כרונולוגי הפוך. Use your phone’s **back button 2 times** to return to the **DASH** tab in the main **AAPS** interface.


![Pod_history_3](../images/DASH_images/Pod_History/Pod_history_3.jpg) ![Pod_history_4](../images/DASH_images/Pod_History/Pod_history_4.jpg)

(omnipod-dash-tab)=

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
* **שגיאות:** מציג את השגיאה האחרונה. Review the [Pod history](#omnipod-dash-view-pod-history) and log files for past errors and more detailed information.
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

Below is the meaning of the icons on the **Pod Management** menu accessed by pressing **POD MGMT (1)** button from the **DASH** tab.

![DASH_Tab_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)

 ![DASH_Tab_3](../images/DASH_images/DASH_Tab/DASH_Tab_3.png)

* 2 - [**Activate Pod**](#omnipod-dash-activate-pod) : Primes and activates a new pod.
* 3 - [**Deactivate Pod**](#omnipod-dash-deactivate-pod) : Deactivates the currently active pod.
* 4 - **Play Test Beep** : Plays a single test beep on the pod when pressed.
* 5 - [**Pod history**](#omnipod-dash-view-pod-history) : Displays the active pod activity history.

(omnipod-dash-settings)=

## הגדרות Dash

The Dash driver settings are configurable from the top-left hand corner **hamburger menu** under **Config Builder (1)**\ ➜\ **Pump**\ ➜\ **Dash**\ ➜\ **Settings Gear (3)** by selecting the **radio button (2)** titled **Dash**. Selecting the **checkbox (4)** next to the **Settings Gear (3)** will allow the Dash menu to be displayed as a tab in the **AAPS** interface titled **DASH**.

![Dash_settings_1](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)



**NOTE:** A faster way to access the **Dash settings** is by accessing the **3 dot menu (1)** in the upper right hand corner of the **DASH** tab and selecting **Dash preferences (2)** from the dropdown menu.

![Dash_settings_3](../images/DASH_images/Dash_settings/Dash_settings_3.png)

The settings groups are listed below; you can enable or disable via a toggle switch for most entries described below:

*NOTE: An asterisk (\*) denotes the default setting is enabled.*

### צפצופי אישור

![Dash_settings_4](../images/DASH_images/Dash_settings/Dash_settings_4.jpg)

Provides confirmation beeps from the pod for bolus, basal, SMB, and TBR delivery and changes.

* **צפצופי בולוס מופעלים:** הפעלה או השבתת צפצופי אישור כאשר מוזרק בולוס.
* **צפצופי בזאלי מופעלים:** הפעלת או השבתת צפצופי אישור כאשר נקבע מינון בזאלי חדש, המינון הבזאלי הפעיל מבוטל או המינון הבזאלי הנוכחי משתנה.
* **צפצופי SMB מופעלים:** הפעלת או השבתת צפצופי אישור כאשר מוזרק SMB.
* **צפצופי בזאלי זמני מופעלים:** הפעלת או השבתת צפצופי אישור כאשר בזאלי זמני מופעל או מבוטל.

### התראות

![Dash_settings_5](../images/DASH_images/Dash_settings/Dash_settings_5.jpg)

Provides **AAPS** alerts for pod expiration, shutdown, low reservoir based on the defined threshold units.

*Note an AAPS notification will ALWAYS be issued for any alert after the initial communication with the pod since the alert was triggered. Dismissing the notification will NOT dismiss the alert UNLESS automatically acknowledge Pod alerts is enabled. To MANUALLY dismiss the alert you must visit the **DASH** tab and press the **Silence ALERTS button**.*

* **תזכורת לתפוגה מופעלת:** הפעילו או השביתו תזכורת לתפוגת הפוד שתופעל כאשר יגיע מספר השעות שהגדרתם לפני ההשבתה.
* **שעות לפני כיבוי:** מגדיר את מספר השעות לפני כיבוי הפוד הפעיל, שלאחר מכן תופעל תזכורת לתפוגה.
* **התראת מכל נמוך מופעלת:** הפעלה או השבתה של התראה על יתרת יחידות אינסולין נמוכה מסף מוגדר.
* **מספר יחידות:** מספר היחידות בהן מופעלת התראת המכל הנמוך.

### הודעות

![Dash_settings_6](../images/DASH_images/Dash_settings/Dash_settings_6.jpg)

The Notification section allows the user to so select their preferred notifications and audible phone alerts when it is uncertain if TBR, SMB, or bolus, and delivery suspended events were successful.

*NOTE: These are notifications only, no audible beep alerts are made.*

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

**Insulin Level**

Insulin level displayed is the amount reported by DASH. However, the pod only reports the actual insulin reservoir level when it is below 50 units. Until then “Above 50 units” will be displayed. The amount reported is not exact: when the pod reports ‘empty’ in most cases the reservoir will still have some additional units of insulin left. The DASH overview tab will display as described the below:

  * **Above 50 Units** - The pod reports more than 50 units currently in the reservoir.
  * **מתחת ל-50 יחידות** - כמות האינסולין שנותרה במכל כפי שדווח על ידי הפוד.

Additional note:
  * **SMS** - מחזירה ערך או 50+U בתגובות של SMS
  * **נייטסקאוט** - העלאת ערך של 50 כאשר מעל 50 יחידות לנייטסקאוט (גרסה 14.07 ומעלה).  גרסאות חדשות יותר ידווחו על ערך של 50+ כאשר מעל 50 יחידות.

## Troubleshooting

(omnipod-dash-delivery-suspended)=

### הפסקת הזרקה

  * אין יותר כפתור של הפסקת הזרקה. If you want to "suspend" the pod, you can set a zero **TBR** for x minutes.
  * During **Profile Switches**, DASH must suspend delivery before setting the new basal **Profile**. אם התקשורת נכשלת בין שתי הפקודות, אז ניתן להשהות את ההזרקה. כשזה קורה:
     - לא יהיה מתן אינסולין, כולל בזאלי, SMB, בולוס ידני וכו'.
     - ייתכן שתהיה הודעה על כך שאחת הפקודות אינה מאושרת: זה תלוי במועד התרחשות הכשל.
     - **AAPS** will try to set the new basal profile every 15 minutes.
     - **AAPS** will show a notification informing that the delivery is suspended every 15 minutes, if the delivery is still suspended (resume delivery failed).
     - The [**Resume delivery**](#omnipod-dash-resuming-insulin-delivery) button will be active if the user chooses to resume delivery manually.
     - If **AAPS** fails to resume delivery on its own (this happens if the pod is unreachable, sound is muted, etc), the pod will start beeping 4 times every minute for 3 minutes, then repeated every 15 minutes if delivery is still suspended for more than 20 minutes.
  * עבור פקודות לא ודאיות, "רענון סטטוס הפוד" אמור לאשר\לדחות אותן.

**Note:** When you hear beeps from the pod, do not assume that delivery will continue without checking the phone, delivery might stay suspended, **so you need to check !**

### שגיאות בפוד

Pods fail occasionally due to a variety of issues, including hardware issues with the Pod itself. It is best practice not to call these into Insulet, since AAPS is not an approved use case. A list of fault codes can be [**found here**](https://github.com/openaps/openomni/wiki/Fault-event-codes) to help determine the cause.

### מניעת שגיאה 49 - כישלונות פוד

This failure is related to an incorrect pod state for a command or an error during an insulin delivery command. This is when the driver and Pod disagree on the actual state. The Pod (out of a built-in safety measure) then reacts with an unrecoverable error code 49 (0x31) ending up with what is know as a “screamer”: the long irritating beep that can only be stopped by punching a hole at the appropriate location at the back of the Pod. The exact origin of a “49 pod failure” often is hard to trace. In situations that are suspected for this failure to occur (for instance on application crashes, running a development version or re-installation).

### התראות המשאבה אינה נגישה

When no communication can be established with the pod for a preconfigured time a “Pump unreachable” alert will be raised. Pump unreachable alerts can be configured by going to the top right-hand side three-dot menu, selecting **Preferences**\ ➜\ **Local Alerts**\ ➜\ **Pump unreachable threshold [min]**. Recommended value is alerting after **120** minutes.

### ייצוא הגדרות

Exporting **AAPS** settings enables you to restore all your settings, and maybe more importantly, all your Objectives. You may need to restore settings to the “last known working situation” or after uninstalling/reinstalling **AAPS** or in case of phone loss, reinstalling on the new phone.

Note: The active pod information is included in the exported settings. If you import an "old" exported file, your actual pod will "die". There is no other alternative. In some cases (like a _programmed_ phone change), you may need to use the exported file to restore **AAPS'** settings **while keeping the current active Pod**. In this case it is important to only use the recently exported settings file containing the pod currently active.

**It is good practice to do an export immediately after activating a pod**. This way you will always be able to restore the current active pod in case of a problem. For instance when moving to another backup phone.

Regularly copy your exported settings to a safe place (as a cloud drive) that can be accessible by any phone when needed (e.g. in case of a phone loss or factory reset of the actual phone).

### יבוא הגדרות

**WARNING** Please note that importing settings will possibly import an outdated Pod status. As a result, there is a risk of losing the active Pod! (see **Exporting Settings**). It is better to only try it when no other options are available.

When importing settings with an active Pod, make sure the export was done with the currently active pod.

**Importing while on an active Pod:** (you risk losing the Pod!)

1. ודאו שאתם מייבאים הגדרות שיוצאו לאחרונה עם הפוד הפעיל כעת.
2. ייבאו את ההגדרות.
3. בדיקת על ההגדרות.

**Importing (no active Pod session)**

1. ייבוא כל קובץ מיוצא עדכני אמור לעבוד (ראה למעלה)
2. ייבאו את ההגדרות.
3. בדיקת על ההגדרות.
4. You may need to **Deactivate** the "non existing" pod if the imported settings included any active pod data.

### ייבוא הגדרות המכילות מצב פוד מפוד לא פעיל

When importing settings containing data for a Pod that is no longer active, AAPS will try to connect with it, which will obviously fail. You can not activate a new Pod in this situation.

To remove the old pod session “try” to de-activate the Pod. The de-activation will fail. Select “Retry”. After the second or third retry you will get the option to remove the pod. Once the old pod is removed you will be able to activate a new pod.

### התקנה מחדש של AndroidAPS

When uninstalling**AAPS** you will lose all your settings, objectives and the current Pod session. To restore them make sure you have a recent exported settings file available!

When on an active Pod, make sure that you have an export for the current pod session or you will lose the currently active pod when importing older settings.

1. ייצאו את ההגדרות שלך ושמרו עותק במקום בטוח.
2. Uninstall **AAPS** and restart your phone.
3. Install the new version of **AAPS**.
4. ייבאו את ההגדרות.
5. Verify all preferences (optionally import settings again).
6. Activate a new pod.
7. לבסוף: ייצאו קובץ הגדרות.

### עדכון AndroidAPS לגרסה חדשה יותר

In most cases there is no need to uninstall. You can do an “in-place” install by starting the installation for the new version. This is also possible when on an active Pod  session.

1. ייבאו את ההגדרות.
2. Install the new **AAPS** version.
3. ודאו שההתקנה הצליחה
4. RESUME the Pod or activate a new pod.
5. לבסוף: ייצאו קובץ הגדרות.

### התראות פוד

Please note that the Omnipod Dash driver presents a variety of unique alerts on the **Overview tab**, most of them are informational and can be dismissed while some provide the user with an action to take to resolve the cause of the triggered alert. A summary of the main alerts that you may encounter is listed below:

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
