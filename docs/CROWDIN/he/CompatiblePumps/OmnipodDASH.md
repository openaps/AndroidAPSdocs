# Omnipod DASH

These instructions are for configuring the **Omnipod DASH** generation pump **(NOT Omnipod Eros)**, available in **AAPS** from version 3.0.

## מפרט Omnipod DASH

These are the specifications of the **Omnipod DASH** ('DASH') and what differentiates it from the **Omnipod EROS** ('EROS'):

- The DASH pods are identified by a **blue needle cap** (EROS has a clear needle cap). The pods are otherwise identical in terms of physical dimensions.
- DASH does not require a BLE link/bridge device (NO RileyLink, OrangeLink, or EmaLink needed).
- The DASH's Bluetooth connection is used only when sending a command (e.g a Bolus), and disconnects right after issuing the command.
- No more "no connection to link device / pod" errors with DASH.
- **AAPS** will wait for pod's accessibility to send commands.
- On pod activation, **AAPS** will find and connect to a new DASH pod.
- Expected range from phone: 5-10 meters (YMMV).

(omnipod-dash-constraints)=

## Omnipod DASH known AAPS constraints/issues
- Android 16 requires **AAPS** version 3.3.2.1 or later.
- General advice is to run **AAPS** on Android 14 or 16. Android 15 has many reported [issues](https://github.com/nightscout/AndroidAPS/issues/3471) from the community. However, if you do run on Android 15 you will likely need to enable Bluetooth Bonding to successfully activate and use Pods, see [General Troubleshooting](../GettingHelp/GeneralTroubleshooting.md) for more info on the Bonding settings.
- Too frequent basal updates may cause basal insulin delivery [problems](https://github.com/nightscout/AndroidAPS/issues/4158) with Omnipod Dash. When using **SMB**, limit the interval to 5 minutes minimum to avoid this issue.
- Dash only supports basal rate in 0.05 U/h steps. If you try to set basal with 0.01 steps in your **AAPS profile**, AAPS will not give a warning even though the pod will round up the rate into 0.05 steps. If you view POD MGMT/Pod History it will display that 0.05 basal was set. This also means the lowest basal rate allowed by the DASH in **AAPS** is 0.05U/h.
- The activation status of a Pod is stored in the settings file, if you export a settings file with an active pod. Then change to a new pod, then restore the settings from your previous export you will have now restored the old pod activation and removed the new pod activation. This is why we recommend to export settings after each pod activation to allow a restore of that pods activation state if something happens to your rig.
- When setting a new basal profile, DASH will suspend delivery before setting the new basal **Profile**. If there is a communication interruption or error, the basal profile won't automatically re-start. See section [Resuming Insulin Delivery](#omnipod-dash-resuming-insulin-delivery) for details.
- If alerts are configured, and the pod is about to expire, the pod will keep beeping until alerts are silenced, see [Silencing Pod Alerts](#omnipod-dash-silencing-pod-alerts) for details.
- There are a number of known issues with Bluetooth which can cause pod activation problems. See [Bluetooth Troubleshooting](../GettingHelp/BluetoothTroubleshooting.md) for the known issue and solutions to these problems.

(hardware-software-requirements)=

(omnipod-dash-hardware-software-requirements)=
## דרישות חומרה ותוכנה

- Omnipod DASH is identified by the blue needle cap.

![Omnipod Pod](../images/DASH_images/Omnipod_Pod.png)

- **A Compatible Android phone** with a Bluetooth Low Energy (BLE) (see [Phones](../Getting-Started/Phones.md) for more info), additionally the following information will help guide you on other key considerations around successfully activating and using the DASH on a compatible phone:
    -  The **AAPS** Omnipod Dash driver connects with the DASH Pod using Bluetooth.  
      **AAPS** will automatically establish a new Bluetooth connection to the Pod every time it needs to send a command (e.g a Bolus), after sending the command the Bluetooth connection is immediately disconnected.
       - **הערות:**
         - The Bluetooth connection can be interrupted/disturbed by other Bluetooth devices linked to the phone that is running **AAPS**, like earbuds etc... Devices like this can cause connection errors or pod activation issues on some models of phones. It's a good idea to review the [tested hardware setups](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true) list for known working configurations before committing to a new rig built around Omnipod DASH.
         - There are a number of known issues with Bluetooth which can cause pod activation problems (See [Troubleshooting](#troubleshooting) for advice on other Bluetooth issues) specifically the [Bluetooth related issues](#omnipod-dash-bluetooth-related-issues) section.
    - For **Android 15** or below: You **MUST** use **Version 3.0 or newer of AAPS** using the [**Build APK**](../SettingUpAaps/BuildingAaps.md) instructions, however it's advisable to run the latest released version.
    - For **Android 16**: you **MUST** use **Version 3.3.2.1 or newer of AAPS** using the [**Build APK**](../SettingUpAaps/BuildingAaps.md) instructions, due to Android 16 changing how its Bluetooth works. Any version earlier than 3.3.2.1 will likely cause pod failures and/or activation [issues](https://github.com/nightscout/AndroidAPS/issues/3471).
- A supported [**Continuous Glucose Monitor (CGM)**](../Getting-Started/CompatiblesCgms.md)

The instructions below explain how to activate a new pod session using **AAPS**. You should wait for your current Pod to be close expiry, as you will need to activate a new Pod with **AAPS**. Once a pod is de-activated it cannot be reused/re-activated, the de-activation is final.

## לפני שמתחילים

Ensure you have read and understand this whole guide, have read and understand the **Before You Begin** section, as well as  **[Omnipod and AAPS Constraints and Issues](#omnipod-dash-constraints)** to avoid running into a known problem.

#### **SAFETY FIRST** - You **SHOULD NOT** try to connect **AAPS** to a pod for the first time without having access to all of the following:
1. Extra pods (3 or more spare)
2. Spare Insulin and MDI equipment
3. A working Omnipod PDM (In case **AAPS** fails)
4. Supported Phones are a must! (See [Hardware/Software Requirements](#hardware-software-requirements))
5. Correct version of AAPS built and installed

#### **Your Omnipod Dash PDM will become redundant after the AAPS Dash driver activates your pod.**
- Before using **AAPS** you or your care giver would have had to manage the Pod using the Omnipod PDM (or in some regions a Phone app) to send commands to your DASH (e.g a Bolus).
- The DASH can only facilitate a single Bluetooth device (e.g PDM or Phone) connection to manage and send commands.
- The device that successfully activates the pod is the only device allowed to communicate with that Pod from that point forward. This means that once you activate a DASH with your Android phone using **AAPS**, **you will no longer be able to use your PDM with that pod!** For the time that Pod is active the **AAPS** Dash driver running on your Android phone is now the new PDM for your pod.
- **DO NOT Throw away your PDM!** It is recommended to keep it around as a backup and for emergencies, for instance when your phone gets lost or **AAPS** is not working correctly.

#### Your pod **WILL NOT** stop delivering insulin when it is not connected to AAPS.
Default basal rates are programmed on the pod on activation as defined in the current active [**Profile**](../SettingUpAaps/YourAapsProfile.md).  
As long as **AAPS** is operational it will send basal rate adjustment commands that run for a maximum of 120 minutes.  
When for some reason the pod does not receive any new commands (for instance because communication was lost due to Pod ➜ phone distance) the pod will automatically fall back to default basal rates as defined in your [**Profile**](../SettingUpAaps/YourAapsProfile.md).

#### **AAPS Profile(s) do not support 30 minute basal rate time frames**
If you are new to **AAPS** and are setting up your basal rate [**Profile**](../SettingUpAaps/YourAapsProfile.md) for the first time, please be aware that basal rates starting on a half-hour basis are not supported. For example, on your Omnipod PDM, if you have a basal rate of 1.1 units which starts at 09:30 and has a duration of 2 hours ending at 11:30, it is not possible replicate this exact basil **Profile** in **AAPS**.  
You will need to change this 1.1 unit basal rate to a time range of either 9:00-11:00 or 10:00-12:00. Even though the DASH hardware itself supports the 30 minute basal rate **Profile** increments, **AAPS** does NOT support this feature.

#### **0U/h Profile basal rates are NOT supported in AAPS**
While the DASH does support a zero basal rate, **AAPS** uses multiples of the user's **Profile** basal rate to determine automated treatment; it cannot function with a zero basal rate.  
Instead a temporary zero basal rate can be achieved through the "Disconnect pump" function, or through a combination of Disable Loop/Temp Basal Rate or Suspend Loop/Temp Basal Rate.  
**NOTE:** The lowest basal rate allowed by the DASH in **AAPS** is 0.05U/h.

## Selecting Dash in AAPS

There are **two** available options to configure Omnipod in **AAPS**:

### אפשרות 1: התקנות חדשות

When installing **AAPS** for the first time, the **Setup Wizard** will guide new users through key features and installation requirements for **AAPS**.  
Select “DASH” when you reach Pump selection.

![Enable_Dash_1](../images/DASH_images/Enable_Dash/Enable_Dash_1.png)

When in doubt you can also select “Virtual Pump” and select “DASH” later, after setting up **AAPS** (See Option 2).

(omnipod-dash-option-2-config-builder)=
### אפשרות 2: בונה התצורה

On an existing installation you can select the **DASH** pump from the Config builder:

On the top-left hand corner **hamburger menu** select **Config Builder (1)** ➜ **Pump** ➜ **Dash** ➜ **Settings Gear (3)** by selecting the **radio button (2)** titled **Dash**.

Selecting the **checkbox (4)** next to the **Settings Gear (3)** will allow the DASH menu to be displayed as a tab in the **AAPS** interface titled **DASH**. Checking this box will facilitate your access to the DASH commands when using **AAPS**.

**NOTE:** A faster way to access the [**Dash settings**](#omnipod-dash-settings) can be found below in the DASH settings section of this document.

![Enable_Dash_3](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)

### אימות בחירת מנהל התקן Omnipod

To verify that you have selected the DASH in **AAPS**, if you have **checked the box (4)**, **swipe to the left** from the **Overview** tab, where you will now see a **DASH** tab on **AAPS**. If this box is left unchecked, you’ll find the DASH tab in the hamburger menu upper left.

![Enable_Dash_4](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)

## תצורת Dash

**Swipe left** to the [**DASH tab**](#omnipod-dash-tab) where you will be able to manage all pod functions (some of these functions are not enabled or visible without an active pod session):

![Refresh_LOGO](../images/DASH_images/Refresh_LOGO.png) 'Refresh' pod connectivity and status, be able to silence pod alarms when the pod beeps

![POD_MGMT_LOGO](../images/DASH_images/POD_MGMT_LOGO.png)   'Pod Management' (Activate, Deactivate, Play test beep, and Pod history)

(omnipod-dash-activate-pod)=

### Activate Pod

1. נווטו אל הלשונית **DASH** ולחצו על הלחצן **ניהול פוד (1)**, ולאחר מכן לחצו על **הפעל פוד (2)**.

   ![Activate_Pod_1](../images/DASH_images/Activate_Pod/Activate_Pod_1.png)

   ![Activate_Pod_2](../images/DASH_images/Activate_Pod/Activate_Pod_2.png)

2. מסך **מילוי פוד** מוצג. Fill a new pod with **at least 80 units** of insulin and listen for two beeps indicating that the pod is ready to be primed.

   ***NOTE:** When calculating the total amount of insulin you need for 3 days, please take into account that priming the pod will use about 3-10 units.*

   ![Activate_Pod_3](../images/DASH_images/Activate_Pod/Activate_Pod_3.png)

   ![Activate_Pod_4](../images/DASH_images/Activate_Pod/Activate_Pod_4.jpg)

   Ensure that the new pod and the phone running **AAPS** are within close proximity of each other and click the **Next** button.

   ***NOTE**: if the  error message below pops up _'Could not find an available pod for activation'_ (this can happen), do not panic. Click on the **Retry** button. In most situations activation will continue successfully.*

   ![Activate_Pod_3](../images/DASH_images/Activate_pod_error.png)

3. On the **Initialize Pod** screen, the pod will begin priming (you will hear a click followed by a series of ticking sounds as the pod primes itself).  
   A green checkmark will be shown upon successful priming, and the **Next** button will become enabled. לחצו על **הבא** כדי להשלים את תיחול התרמיל ולהציג את מסך **הצמד פוד**.

   ![Activate_Pod_5](../images/DASH_images/Activate_Pod/Activate_Pod_5.jpg)    ![Activate_Pod_6](../images/DASH_images/Activate_Pod/Activate_Pod_6.jpg)

4. Next, prepare the infusion site ready to receive the new pod. Wash hands to avoid any risk of infection. Clean the infusion site by either using soap and water or an alcohol wipe to disinfect and let the skin air dry completely before proceeding.   
   If you get skin irritation from the adhesive consider using a Barrier Wipe or Barrier Spray.

   Remove the pod's blue plastic needle cap. If you see something that sticks out of the pod or it looks unusual, **STOP** the process and start with a new pod. If everything looks **OK**, proceed to take off the white paper backing from the adhesive and stick the pod to the selected site on your body.

   לסיום, לחצו על **הבא**.

   ![Activate_Pod_8](../images/DASH_images/Activate_Pod/Activate_Pod_8.jpg)

6. תיבת הדו-שיח **הצמד פוד** תופיע כעת. **click on the OK button ONLY if you are ready to deploy the cannula!**

   ![Activate_Pod_9](../images/DASH_images/Activate_Pod/Activate_Pod_9.jpg)

7. After pressing **OK**, it may take some time before the DASH responds and inserts the cannula (1-2 minutes maximum). **Be patient!**

   ***NOTE:** Before the cannula is inserted, it is good practice to pinch the skin near the cannula insertion point. זה מבטיח החדרה חלקה של המחט ומפחית את הסיכויים לפתח חסימות.*

   ![Activate_Pod_10](../images/DASH_images/Activate_Pod/Activate_Pod_10.png)    ![Activate_Pod_11](../images/DASH_images/Activate_Pod/Activate_Pod_11.jpg)

8. A green checkmark is shown on the screen, and the **Next** button becomes available to select upon successful cannula insertion.   
   Click on the **Next** button.

   ![Activate_Pod_12](../images/DASH_images/Activate_Pod/Activate_Pod_12.jpg)

1. מסך **הפוד הופעל** מוצג.

   לחצו על **סיום**.

   מזל טוב! You have now started a new pod session.

   ![Activate_Pod_13](../images/DASH_images/Activate_Pod/Activate_Pod_13.jpg)

2. במסך התפריט **ניהול פוד** הכפתור  **הפעל פוד (1)** אמור להיות *מושבת* והכפתור **כבה פוד (2)** אמור להיות *מאופשר*. הסיבה לכך היא שהפוד פעיל כעת ולא ניתן להפעיל פוד נוסף מבלי להשבית את הפוד הנוכחי.

    לחצו על כפתור החזרה בטלפון כדי לחזור ללשונית **DASH** שתציג כעת מידע על הפוד הנוכחי, כולל המינון הבזאלי הנוכחי, רמת מכל האינסולין, אינסולין שהוזרק, שגיאות של הפוד והתראות.

    ***NOTE:** For more details on the information displayed go to the [**DASH Tab**](#omnipod-dash-tab) section of this document.*

   ![Activate_Pod_14](../images/DASH_images/Activate_Pod/Activate_Pod_14.png)

   ![Activate_Pod_15](../images/DASH_images/Activate_Pod/Activate_Pod_15.jpg)

   ***NOTE:** It is good practice to export settings AFTER activating the pod. Settings should be exported after each pod change and once a month, ensure you copy the exported settings file to a cloud storage location (e.g. Google Drive) or somewhere off your phone in case you loose your phone (see [**Export settings**](../Maintenance/ExportImportSettings.md)).*


(omnipod-dash-deactivate-pod)=

### Deactivate Pod

Under normal circumstances, the expected lifetime of a pod is three days (72 hours) and an additional 8 hours after the pod expiration warning for a total of 80 hours of total pod usage.

To deactivate a pod (either from expiration or from a pod failure):

1. Go to the **DASH** tab, click on the **POD MGMT (1)** button, on the **Pod Management** screen click on the **Deactivate Pod (2)** button.

   ![Deactivate_Pod_1](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)

   ![Deactivate_Pod_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_2.png)

2. במסך **כבה פוד**, לחצו על **הבא** כדי להתחיל בתהליך של השבתת הפוד.

   אתם תשמעו צפצוף אישור מהפוד שהכיבוי הצליח.

   ![Deactivate_Pod_3](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_3.jpg)

   ![Deactivate_Pod_4](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_4.jpg)

3. A green checkmark will be displayed upon successful deactivation. לחצו על **הבא** כדי לעבור אל המסך "הפוד הושבת".

   כעת תוכלו להסיר את הפוד כיוון שפעילותו הושבתה.

   ![Deactivate_Pod_5](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_5.jpg)

4. לחצו על הכפתור הירוק כדי לחזור למסך **ניהול הפוד**.

   ![Deactivate_Pod_6](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_6.jpg)

5. בתפריט **ניהול פוד**; לחצו כפתור 'הקודם' של הטלפון כדי לחזור ללשונית **DASH**.

   ודאו שהשדה **סטטוס הפוד:** מציג הודעת **אין פוד פעיל**.

   ![Deactivate_Pod_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_2.png)

   ![Deactivate_Pod_8](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)


(omnipod-dash-resuming-insulin-delivery)=

### חידוש הזרקת האינסולין

**NOTE**: During **Profile Switches**, like when using the PDM, AAPS must suspend delivery on the Pod before setting the new basal **Profile**. If communication fails between the suspend and resume commands, then delivery can stay suspended, Read [**Delivery suspended**](#omnipod-dash-delivery-suspended) in the troubleshooting section for more details.

When insulin delivery is suspended you will need to issue a command to instruct the active, currently suspended pod to resume insulin delivery. After the command is successfully processed, insulin will resume normal delivery using the current basal rate based on the current time from the active basal **Profile**. The pod will again accept commands for bolus, **TBR**, and **SMB**.

1. נווטו אל הלשונית **DASH** וודאו שהשדה **סטטוס הפוד (1)** מציג את **מופסק**, לאחר מכן הקישו על **חידוש הזרקה (2)** כדי להתחיל בתהליך הוראה לפוד הנוכחי לחדש את הזרקת האינסולין. ההודעה **חידוש הזרקה** תוצג בשדה **סטטוס הפוד (3)**.

   ![Resume_1](../images/DASH_images/Resume/Resume_1.jpg)   ![Resume_2](../images/DASH_images/Resume/Resume_2.jpg)

2. כאשר הפקודה 'חידוש הזרקה' מצליחה, תיבת דו-שיח לאישור תציג את ההודעה **מתן האינסולין חודש**. לחצו על **אישור** כדי להמשיך.

   ![Resume_3](../images/DASH_images/Resume/Resume_3.png)

3. הלשונית **DASH** תעדכן את השדה **סטטוס הפוד (1)** ויוצג **פועל,** והלחצן **חידוש הזרקה** לא יוצג יותר

   ![Resume_4](../images/DASH_images/Resume/Resume_4.jpg)

(omnipod-dash-silencing-pod-alerts)=

### השתקת התראות פוד

The process below will show you how to acknowledge and dismiss pod beeps when the active pod time reaches the warning time limit before the pod expiration of 72 hours (3 days). This warning time limit is defined in the **Hours before shutdown** Dash alerts setting. The maximum life of a pod is 80 hours (3 days 8 hours), however Insulet recommends not exceeding the 72 hours (3 days) limit.

***NOTE**: The **SILENCE ALERTS (3)** button is only available on the **DASH** tab when the pod expiration or low reservoir alert has been triggered. If the **SILENCE ALERTS** button is not visible and you hear beep sounds from the pod, try to 'Refresh pod status'.*

1. When the defined **Hours before shutdown** warning time limit is reached, the pod will issue warning beeps to inform you that it is approaching its expiration time and a pod change will be required soon.  
   You can verify this on the **DASH** tab, the **Pod expires: (1)** field will show the exact time the pod will expire (72 hours after activation), and the text will turn **red** after this time has passed.  
   Under the **Active Pod alerts (2)** field the status message **Pod will expire soon** is displayed. כעת יופעל הלחצן **השתקת התראות (3)**.

   ![ACK_alerts_1](../images/DASH_images/ACK_Alerts/ACK_ALERTS_1.png)

2. Go to the **DASH** tab and press the **SILENCE ALERTS (2)** button. **AAPS** sends the command to the pod to deactivate the pod expiration warning beeps and updates the **Pod status (1)** field with **ACKNOWLEDGE ALERTS**.

   ![ACK_alerts_2](../images/DASH_images/ACK_Alerts/ACK_ALERTS_2.png)

3. לאחר **השבתה מוצלחת** של ההתראות, **שני צפצופים** יישמעו על ידי הפוד הפעיל ותיבת דו-שיח תציג את ההודעה **הפעלת ההתראות הושתקה**. לחצו על **אישור** כדי לאשר ולבטל את תיבת הדו-שיח.

   ![ACK_alerts_3](../images/DASH_images/ACK_Alerts/ACK_ALERTS_3.png)

4. נווטו ללשונית **DASH**. תחת **התראות פוד פעילות**, הודעת האזהרה אינה מוצגת עוד והפוד כבר לא יוציא צפצופי אזהרת תפוגה.

(omnipod-dash-view-pod-history)=

### הצגת היסטוריית הפוד

This section explains how to review your active pod history and filter by different action categories. The pod history tool allows you to view the actions and results committed to your currently active pod during its three days (72 - 80 hours) life.

This feature is helpful in verifying boluses, TBRs and basal commands that were sent to the pod. The remaining categories are useful for troubleshooting issues and determining the order of events that occurred leading up to a failure.

***NOTE:** **Only the last command can be uncertain**. New commands *will not be sent* until the **last 'uncertain' command becomes 'confirmed' or 'denied'**. The way to 'fix' uncertain commands is to **'refresh pod status'**.*

1. נווטו ללשונית **DASH** ולחצו על **ניהול הפוד (1)** ולאחר מכן בחרו **היסטוריית פוד (2)** כדי לפתוח את מסך היסטוריית הפוד.

   ![Pod_history_1](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)  
   ![Pod_history_2](../images/DASH_images/Pod_History/Pod_history_2.jpg)

2. במסך **היסטוריית הפוד**, קטגוריית ברירת המחדל של **הכל (1)** מוצגת ומציגה את **התאריך והשעה (2)** של כל **פעולות (3)** הפוד ו**תוצאות (4)** בסדר כרונולוגי הפוך. Use your phone’s **back button 2 times** to return to the **DASH** tab in the main **AAPS** interface.

   ![Pod_history_3](../images/DASH_images/Pod_History/Pod_history_3.jpg) ![Pod_history_4](../images/DASH_images/Pod_History/Pod_history_4.jpg)

(omnipod-dash-tab)=

## לשונית DASH

Below is an explanation of the layout and meaning of the icons and status fields on the **DASH** tab in the main AAPS interface.

***NOTE:** If any message in the **DASH** tab status fields report (uncertain), then you will need to press the Refresh button to clear it and refresh the pod status.*

![DASH_Tab_1](../images/DASH_images/DASH_Tab/DASH_Tab_1.png)

### שדות



- **כתובת בלוטות':** מציג את כתובת הבלוטות' הנוכחית של הפוד המחובר.

- **Bluetooth Status:**  Displays the current connection status.

- **מספר רצף:** מציג את מספר הרצף של הפוד הפעיל.

- **גרסת קושחה:** מציג את גרסת הקושחה החיבור הפעיל.

- **השעה בפוד:** מציג את השעה הנוכחית בפוד.

- **סטטוס הפוד:** מציג את מצב הפוד.

- **חיבור אחרון:** מציג את מועד התקשורת האחרון עם הפוד.

  - *לפני כמה רגעים* - לפני פחות מ-20 שניות.

  - *לפני פחות מדקה* - יותר מעשרים שניות אך פחות מ-60 שניות.

  - *לפני דקה אחת* - יותר מ-60 שניות אך פחות מ-120 שניות (2 דקות)

  - *לפני XX דקות* - לפני יותר משתי דקות ככתוב בערך XX

- **בולוס אחרון:** מציג את המינון של הבולוס האחרון שהפוד הזריק ולפני כמה זמן, בסוגריים.

- **בזאלי בסיסי:** מציג את המינון הבזאלי המתוכנת עבור השעה הנוכחית בפרופיל הבזאלי.

- **מינון בזאלי זמני:** מציג את המינון הבזאלי הזמני הפועל כעת בפורמט הבא:
  - יחידות\שעה @ מועד תחילת בזאלי זמני (משך הבזאלי הזמני)

  - Example:* 0.00U/h @18:25 ( 90/120 minutes)

- **מכל:** מציג מעל 50+U כאשר נותרו יותר מ -50 יחידות במכל. כשיש פחות מ-50 יחידות, יתרתן מוצגת במדוייק.

- **סה"כ שהוזרק:** מציג את המספר הכולל של יחידות האינסולין שהוזרקו. זה כולל אינסולין המשמש להפעלה ולתיחול.

- **שגיאות:** מציג את השגיאה האחרונה. Review the [Pod history](#omnipod-dash-view-pod-history) and log files for past errors and more detailed information.

- **התראות פוד פעילות:** שדה השמור להתראות הפועלות כרגע על הפוד הפעיל.



### מקשים

![Refresh_Icon](../images/DASH_images/Refresh_LOGO.png) Sends a refresh command to the active pod to update communication.

  - *השתמשו כדי לרענן את מצב הפוד ולבטל סטטוסים המכילים את הטקסט "(לא ודאי)".*

  - *See the [Troubleshooting](#omnipod-dash-troubleshooting) section below for additional information.*

![POD_MGMT_Icon](../images/DASH_images/POD_MGMT_LOGO.png)   Navigates to the Pod management menu.

![ack_alert_logo](../images/DASH_images/ack_alert_logo.png) When pressed this will disable the pod alerts beeps and notifications (expiry, low reservoir..).

  - *הלחצן מוצג רק לאחר אזהרת התפוגה של הפוד.*
  -  *לאחר קבלת ההתראה, אייקון זה יפסיק להופיע.*

![RESUME_Icon](../images/DASH_images/DASH_tab_icons/RESUME_Icon.png)    Resumes the currently suspended insulin delivery in the active pod.



### תפריט ניהול הפוד

Below is describes the purpose of each icon on the **Pod Management** menu, accessed by pressing **POD MGMT (1)** button from the **DASH** tab.

![DASH_Tab_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)

![DASH_Tab_3](../images/DASH_images/DASH_Tab/DASH_Tab_3.png)

**The table below describes each button and it's function:**

| Button | Function                                                                                      |
| ------ | --------------------------------------------------------------------------------------------- |
| 1      | Access the Pod Mgmt settings                                                                  |
| 2      | [**Activate Pod**](#omnipod-dash-activate-pod): Primes and activates a new pod.               |
| 3      | [**Deactivate Pod**](#omnipod-dash-deactivate-pod): Deactivates the currently active pod.     |
| 4      | **Play Test Beep** : Plays a single test beep on the pod when pressed.                        |
| 5      | [**Pod history**](#omnipod-dash-view-pod-history) : Displays the active pod activity history. |


(omnipod-dash-settings)=

## הגדרות Dash

The Dash driver settings are configurable from the top-left hand corner **hamburger menu** under **Config Builder (1)** ➜ **Pump**  **Dash** ➜ **Settings Gear (3)** by selecting the **radio button (2)** titled **Dash**. Selecting the **checkbox (4)** next to the **Settings Gear (3)** will allow the Dash menu to be displayed as a tab in the **AAPS** interface titled **DASH**.

![Dash_settings_1](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)

***NOTE:** A faster way to access the **Dash settings** is by accessing the **3 dot menu (1)** in the upper right hand corner of the **DASH** tab and selecting **Dash preferences (2)** from the dropdown menu.*

![Dash_settings_3](../images/DASH_images/Dash_settings/Dash_settings_3.png)

The settings groups are listed below; you can enable or disable via a toggle switch for most entries described below:

***NOTE:** An asterisk (\*) denotes the default setting is enabled.*

### צפצופי אישור

![Dash_settings_4](../images/DASH_images/Dash_settings/Dash_settings_4.jpg)

Provides confirmation beeps from the pod for bolus, basal, SMB, and TBR delivery and changes.

**Bolus beeps enabled:**    Enable or disable confirmation beeps when a bolus is delivered.

**Basal beeps enabled:**    Enable or disable confirmation beeps when a new basal rate is set, active basal rate is canceled or current basal rate is changed.

**SMB beeps enabled:**  Enable or disable confirmation beeps when a SMB is delivered.

**TBR beeps enabled:**  Enable or disable confirmation beeps when a TBR is set or canceled.



### התראות

![Dash_settings_5](../images/DASH_images/Dash_settings/Dash_settings_5.jpg)

Provides **AAPS** alerts for pod expiration, shutdown, low reservoir based on the defined threshold units.

***NOTE:** an AAPS notification will ALWAYS be issued for any alert after the initial communication with the pod since the alert was triggered. Dismissing the notification will NOT dismiss the alert UNLESS automatically acknowledge Pod alerts is enabled. To MANUALLY dismiss the alert you must visit the **DASH** tab and press the **Silence ALERTS button**.*

**Expiration reminder enabled:**    Enable or disable the pod expiration reminder set to trigger when the defined number of hours before shutdown is reached.

**Hours before shutdown:**  Defines the number hours before the active pod shutdown occurs, which will then trigger the expiration reminder alert.

**Low reservoir alert enabled:**    Enable or disable an alert when the pod's remaining units low reservoir limit is reached as defined in the Number of units field.

**Number of units:**    The number of units at which to trigger the pod low reservoir alert.



### הודעות

![Dash_settings_6](../images/DASH_images/Dash_settings/Dash_settings_6.jpg)

The Notification section allows the user to select their preferred notifications and audible phone alerts when AAPS is uncertain about the status of TBR, SMB, or bolus, and when delivery suspended events were successful.

***NOTE:** These are notifications only, no audible beep alerts are made.*

**Sound for uncertain TBR notifications enabled:**  Enable or disable this setting to trigger an audible alert and visual notification when **AAPS** is uncertain if a TBR was successfully set.

**Sound for uncertain SMB notifications enabled:**  Enable or disable this setting to trigger an audible alert and visual notification when **AAPS** is uncertain if an SMB was successfully delivered.

**Sound for uncertain bolus notifications enabled:**    Enable or disable this setting to trigger an audible alert and visual notification when **AAPS** is uncertain if a bolus was successfully delivered.

**Sound when delivery suspended notifications enabled:**    Enable or disable this setting to trigger an audible alert and visual notification when suspend delivery was successfully delivered.

## לשונית פעולות (ACT)

This tab is well documented in the main **AAPS** documentation but there are a few items on this tab that are specific to how the DASH differs from tube based pumps, especially after the processes of applying a new pod.

1. Go to the **Actions (ACT)** tab in the main **AAPS** interface.

2. Under the **Careportal (1)** section the **Insulin** and **Cannula** fields will have their **age reset** to 0 days and 0 hours **after each pod change**. זה נעשה בגלל האופן שבו משאבת אומניפוד בנויה ופועלת. מכיוון שהפוד מחדיר את הצינורית ישירות לעור באתר הדבקתו, אין שימוש בצינור מסורתי במשאבות אומניפוד. *לכן לאחר החלפת פוד, הגיל של כל אחד מהערכים הללו יתאפס אוטומטית.* **גיל סוללת המשאבה** אינו מדווח מכיוון שהסוללה בפוד תמיד תהיה יותר מאורך חיי הפוד (80 שעות לכל היותר). **סוללת המשאבה** ו**יתרת האינסולין** נמצאים בעצמם בתוך כל פוד.

   ![ACT_1](../images/DASH_images/Actions_Tab/ACT_1.png)

### כמות במכל

**Insulin Level**

Insulin level displayed is the amount reported by DASH. However, the pod only reports the actual insulin reservoir level when it is below 50 units. Until then “Above 50 units” will be displayed. The amount reported is not exact: when the pod reports ‘empty’ in most cases the reservoir will still have some additional units of insulin left.

The DASH overview tab will display as described the below:

  * **Above 50 Units** - The pod reports more than 50 units currently in the reservoir.
  * **מתחת ל-50 יחידות** - כמות האינסולין שנותרה במכל כפי שדווח על ידי הפוד.

Additional note:
  * **SMS** - מחזירה ערך או 50+U בתגובות של SMS
  * **נייטסקאוט** - העלאת ערך של 50 כאשר מעל 50 יחידות לנייטסקאוט (גרסה 14.07 ומעלה).  גרסאות חדשות יותר ידווחו על ערך של 50+ כאשר מעל 50 יחידות.

(omnipod-dash-troubleshooting)=

## Troubleshooting

(omnipod-dash-delivery-suspended)=

This section covers common known issues and solutions for Omnipod DASH use with AAPS. There is also [General Troubleshooting](../GettingHelp/GeneralTroubleshooting.md) section in the documentation that should be reviewed as it covers relevant topics for some Pod issues too.

---

(omnipod-dash-bluetooth-related-issues)=

## **Bluetooth related issues**

For known issues with Bluetooth connections, dropouts of pump/pods, or activation and connection issues [Bluetooth Troubleshooting](../GettingHelp/BluetoothTroubleshooting.md)

---
### הפסקת הזרקה

  - אין יותר כפתור של הפסקת הזרקה. If you want to "suspend" the pod, you can set a zero **TBR** for x minutes.
  - During **Profile Switches**, DASH must suspend delivery before setting the new basal **Profile**. אם התקשורת נכשלת בין שתי הפקודות, אז ניתן להשהות את ההזרקה. כשזה קורה:
     - לא יהיה מתן אינסולין, כולל בזאלי, SMB, בולוס ידני וכו'.
     - ייתכן שתהיה הודעה על כך שאחת הפקודות אינה מאושרת: זה תלוי במועד התרחשות הכשל.
     - **AAPS** will try to set the new basal profile every 15 minutes.
     - **AAPS** will show a notification informing that the delivery is suspended every 15 minutes, if the delivery is still suspended (resume delivery failed).
     - The [**Resume delivery**](#omnipod-dash-resuming-insulin-delivery) button will be active if the user chooses to resume delivery manually.
     - If **AAPS** fails to resume delivery on its own (this happens if the pod is unreachable, sound is muted, etc), the pod will start beeping 4 times every minute for 3 minutes, then repeated every 15 minutes if delivery is still suspended for more than 20 minutes.
  - עבור פקודות לא ודאיות, "רענון סטטוס הפוד" אמור לאשר\לדחות אותן.

*****NOTE:** When you hear beeps from the pod, do not assume that delivery will continue without checking the phone, delivery might stay suspended, ***so you need to check !******

---
### שגיאות בפוד

- Pods fail occasionally due to a variety of issues, including hardware issues with the Pod itself.
- It is best practice not to raise support / replacement cases with Insulet, since AAPS is not an approved method of using the Pods.
- A list of fault codes can be [**found here**](https://github.com/openaps/openomni/wiki/Fault-event-codes) to help determine the cause.

---
### מניעת שגיאה 49 - כישלונות פוד

This failure is related to an incorrect pod state for a command or an error during an insulin delivery command. This is when the driver and Pod disagree on the actual state. The Pod (out of a built-in safety measure) then reacts with an unrecoverable error code 49 (0x31) ending up with what is know as a “screamer”: the long irritating beep that can only be stopped by punching a hole at the appropriate location at the back of the Pod. The exact origin of a “49 pod failure” often is hard to trace. In situations that are suspected for this failure to occur (for instance on application crashes, running a development version or re-installation).

---

### התראות המשאבה אינה נגישה

When no communication can be established with the pod for a pre-configured time a “Pump unreachable” alert will be raised. Pump unreachable alerts can be configured by going to the top right-hand side three-dot menu, selecting **Preferences** ➜ **Local Alerts** ➜ **Pump unreachable threshold [min]**. Recommended value is alerting after **120** minutes.

---
### ייצוא הגדרות

Exporting **AAPS** settings enables you to restore all your settings, and maybe more importantly, all your Objectives. You may need to restore settings to the “last known working situation” or after uninstalling/reinstalling **AAPS** or in case of phone loss, reinstalling on the new phone.

***NOTE:** The active pod information is included in the exported settings. If you import an "old" exported file, your actual pod will "die". There is no other alternative. In some cases (like a _programmed_ phone change), you may need to use the exported file to restore **AAPS'** settings **while keeping the current active Pod**. In this case it is important to only use the recently exported settings file containing the pod currently active.*

**It is good practice to do an export immediately after activating a pod**. This way you will always be able to restore the current active pod in case of a problem. For instance when moving to another backup phone.

Regularly (after each export preferably) copy your exported settings to a safe place (a cloud drive e.g. Google Drive) that is accessible by any phone when needed. This allows you to restore to a phone from anywhere in case of a phone loss or factory reset of your phone while you are not at home.

---
### יבוא הגדרות

**WARNING**: Please note that importing settings will possibly import an outdated Pod status (depending when you made the last export/backup).  
As a result, there is a **risk of losing the active Pod!** (see **Exporting Settings**).
1. Only try an import when no other options are available.
2. When importing settings with an active Pod, make sure the export was done with the currently active pod.

**Importing while on an active Pod:** (you risk losing the Pod!)

1. **Make sure you are importing settings that were recently exported with the currently active Pod!**
2. ייבאו את ההגדרות.
3. בדיקת על ההגדרות.

**Importing (no active Pod session)**

1. ייבוא כל קובץ מיוצא עדכני אמור לעבוד (ראה למעלה)
2. ייבאו את ההגדרות.
3. בדיקת על ההגדרות.
4. You may need to **Deactivate** the "non existing" pod if the imported settings included any active pod data.

---
### ייבוא הגדרות המכילות מצב פוד מפוד לא פעיל

When importing settings containing data for a Pod that is no longer active, AAPS will try to connect with it, which will obviously fail. You can not activate a new Pod in this situation.

To remove the old pod session:
1. “try” to de-activate the Pod. The de-activation will likely fail.
2. Select “Retry”.
3. After the second or third retry you will get the option to remove the pod.
4. Once the old pod is removed you will be able to activate a new pod.

---
### התקנה מחדש של AndroidAPS

When uninstalling **AAPS** you will lose all your settings, objectives and the current Pod session. **To restore them make sure you have a recent exported settings file available!**

When on an active Pod, make sure that you have an export for the current pod session or you will lose the currently active pod when importing older settings.

1. Export your settings and store a copy in a safe place (e.g Google Drive).
2. Uninstall **AAPS** and restart your phone.
3. Install the new version of **AAPS**.
4. ייבאו את ההגדרות.
5. Verify all preferences (optionally import settings again).
6. Activate a new pod.
7. לבסוף: ייצאו קובץ הגדרות.

---
### עדכון AndroidAPS לגרסה חדשה יותר

In most cases there is no need to uninstall. You can do an “in-place” install by starting the installation for the new version. This is also possible when on an active Pod session.

1. ייבאו את ההגדרות.
2. Install the new **AAPS** version.
3. ודאו שההתקנה הצליחה
4. RESUME the Pod or activate a new pod.
5. לבסוף: ייצאו קובץ הגדרות.

---
### התראות פוד

The Omnipod Dash driver presents a variety of unique alerts on the **Overview tab**, most of them are informational and can be dismissed while some provide the user with an action requiring their input to resolve the cause of the triggered alert.

A summary of the main alerts that you may encounter is listed below:

- No active Pod session detected. ניתן לבטל התראה זו זמנית על ידי לחיצה על **השתקה** אך היא תמשיך לפעול כל עוד לא הופעל פוד חדש. Once activated this alert is automatically silenced.
- Pod suspended Informational alert that pod has been suspended.
- Setting basal **Profile** failed : Delivery might be suspended! נא לרענן ידנית את סטטוס הפוד בלשונית Omnipod ולחדש את ההזרקה במידת הצורך. Informational alert that the Pod basal **Profile** setting has failed, and you will need to hit *Refresh* on the Omnipod tab.
- Unable to verify whether **SMB** bolus succeeded. אם אתם בטוחים שהבולוס לא הצליח, עליכם למחוק את ערך SMB באופן ידני מטיפולים. Alert that the **SMB** bolus command success could not be verified, you will need to verify the *Last bolus* field on the DASH tab to see if **SMB** bolus succeeded and if not remove the entry from the Treatments tab.
- לא בטוח אם "בולוס/בזאלי זמני/SMB" הושלם, אנא ודאו ידנית אם הוא הצליח.

(omnipod-dash-where-to-get-help-for-dash)=

## Where to get help for DASH

All of the development work for the DASH is done by the community on a **volunteer** basis; please keep this in mind and use the following guidelines before requesting assistance:

-  **רמה 0** קראו את הסעיף הרלוונטי בתיעוד זה כדי להבטיח שאתם מבינים כיצד להשתמש במה שאתם מתקשים איתו.
-  **רמה 1:** אם אתם עדיין נתקלים בבעיות שאתם לא מצליחים לפתור באמצעות מסמך זה, אנא עברו לערוץ *#androidaps* ב-**Discord** באמצעות [קישור ההזמנה](https://discord.gg/4fQUWHZ4Mw). There are also numerous Facebook and other groups you can ask in too (see [**Getting Help**](../GettingHelp/WhereCanIGetHelp.md))
-  **Level 2:** Search existing issues to see if your issue has already been reported at [Issues](https://github.com/nightscout/AndroidAPS/issues) if it exists, please confirm/comment/add information on your problem. If not, please create a [new issue](https://github.com/nightscout/AndroidAPS/issues) and attach [your log files](../GettingHelp/AccessingLogFiles.md).
-  **היו סבלניים - רוב חברי הקהילה שלנו מורכבים ממתנדבים בעלי אופי טוב, ופתרון בעיות דורש לעתים קרובות זמן וסבלנות מצד המשתמשים והמפתחים כאחד.**

When requesting help come prepared with the following information to help those in the community with your specific questions and problems:
- Android phone make and model
- Android OS version (e.g 15 or 16)
  - Did you recently upgrade your Android OS version?
- The version of **AAPS** you are running
- Plain english description of the problem you are facing considering some of the following things
   - Was it working before now?
   - When did it work or not work?
   - Did you make any changes to configuration or profile settings?
   - Did you pair a new bluetooth device?
   - Did you upgrade or install a new app?
   - How long was it working before it stopped working?
