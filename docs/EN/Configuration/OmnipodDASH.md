# Omnipod DASH

These instructions are for configuring the **Omnipod DASH** generation pump **(NOT Omnipod Eros)**. The Omnipod driver is available as part of AndroidAPS (AAPS) as of version 3.0.

**This software is part of a DIY artificial pancreas solution and is not a product but requires YOU to read, learn, and understand the system, including how to use it. You alone are responsible for what you do with it.**

# Omnipod DASH specifications

These are the specifications of the **Omnipod DASH** and what differentiates it from the **Omnipod EROS**:

* The DASH pods are identified by a blue needle cap (EROS has a clear needle cap). The pods are otherwise identical in terms of physical dimensions
* No need for a separate Omnipod to BLE link/bridge device (NO RileyLink, OrangeLink, or EmaLink needed).
* BT LE connection only when needed
* No more "no connection to link device/pod" errors
* AAPS will wait for pod accessibility to send commands
* On activation, AAPS will find and connect a new DASH pod.
* Expected range: 5-10 meters (YMMV)

# Hardware/Software Requirements

* A new **Omnipod DASH Pod** (Identified by blue needle cap)

![Omnipod Pod](https://github.com/Freloner/AndroidAPSdocs/blob/86d0eeb4b694f0267c533c1f1d72ac051435efa3/docs/images/DASH%20images/Omnipod_Pod.png)

* **Compatible Android phone** running **AT LEAST ANDROID 9** or newer version, with a BLE BlueTooth connection.  
   -  Not all phone hardware and Android versions are guaranteed to work.
Please check [**DASH Tested phones**](https://docs.google.com/spreadsheets/d/1zO-Vf3wv0jji5Gflk6pe48oi348ApF5RvMcI6NG5TnY) or just try with your phone and tell us the result (phone reference and geographical region, Android version, worked / some difficulties / did not work)
   -  **Version 3.0 or newer of AndroidAPS built and installed** using the [**Build APK**](https://androidaps.readthedocs.io/en/latest/Installing-AndroidAPS/Building-APK.html#) instructions.
* [**Continuous Glucose Monitor (CGM)**](https://androidaps.readthedocs.io/en/latest/Configuration/BG-Source.html)

These instructions will assume that you are starting a new pod session; if this is not the case, please be patient and begin this process on your following pod change.

# Before You Begin

**SAFETY FIRST** - do not attempt this process in an environment where you cannot recover from an error (extra pods, insulin, and phone devices are must-haves).

**Your Omnipod Dash PDM will no longer work after the AAPS Dash driver activates your pod.** Previously you used your Omnipod Dash PDM to send commands to your Omnipod Dash pod. An Omnipod Dash pod only allows a single device to send commands to communicate with it. The device that successfully activates the pod is the only device allowed to communicate with it from that point forward. This means that once you activate an Omnipod Dash pod with your Android phone through the AAPS Dash driver, **you will no longer be able to use your PDM with your pod**. The AAPS Dash driver in your Android phone is now your acting PDM.

*This does NOT mean you should throw away your PDM, it is recommended to keep it around as a backup and for emergencies, for instance when your phone gets lost or AAPS is not working correctly.*

**Your pod will not stop delivering insulin when it is not connected to AndroidAPS**.
Default basal rates are programmed on the pod on activation as defined in the currently active profile.
As long as AndroidAPS is operational it will send basal rate commands that run for a maximum of 120 minutes. When for some reason the pod does not receive any new commands (for instance because communication was lost) the pod will automatically fall back to default basal rates.

**30 min Basal Rate Profiles are NOT supported in AndroidAPS.**
**The AndroidAPS Profile does not support a 30 minute basal rate time frame**
If you are new to AndroidAPS and are setting up your basal rate profile for the first time, please be aware that basal rates starting on a half-hour basis are not supported, and you will need to adjust your basal rate profile to start on the hour. For example, if you have a basal rate of say 1.1 units which starts at 09:30 and has a duration of 2 hours ending at 11:30, this will not work. You will need to update this 1.1 unit basal rate to a time range of either 9:00-11:00 or 10:00-12:00. Even though the Omnipod Dash hardware itself supports the 30 min basal rate profile increments, AndroidAPS is not able to take them into account with its algorithms currently.

# Enabling the Dash Driver in AAPS

You can enable the Dash driver in AAPS in **two ways**:
 
## Option 1: New installations

When you are installing AndroidAPS for the first time, the **Setup Wizard** will guide you through installing AndroidAPS. Select “DASH” when you reach Pump selection.

![Enable_Dash_1](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Pump_setup.jpg.png)

When in doubt, you can also select “Virtual Pump” and select “DASH” later, after setting up AndroidAPS (see option 2).

## Option 2: The Config Builder

On an existing installation you can select the **DASH** pump from the Config builder:

On the top-left hand corner, **the hamburger menu**, select **Config Builder (1)**\ ➜\ **Pump**\ ➜\ **Dash**\ ➜\ **Settings Gear (3)** by selecting the **radio button (2)** titled **Dash**. 

Selecting the **checkbox (4)** next to the **Settings Gear (3)** will allow the Dash menu to be displayed as a tab in the AAPS interface titled **DASH**. Checking this box will facilitate your access to the DASH commands when using AAPS. 

**NOTE:** A faster way to access the [**Dash settings**](#dash-settings) can be found below in the Dash settings section of this document.

![Enable_Dash_2](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Enable%20Dash/Enable_Dash_2.png)    ![Enable_Dash_3](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Pump%20list.bak.jpg)
 
## Verification of Omnipod Driver Selection

To verify that you have enabled the Dash driver in AAPS, if you have checked box (4), **swipe to the left** from the **Overview** tab, where you will now see a **DASH** tab. If you have not checked the box, you’ll find the DASH tab in the hamburger menu upper left. 

![Enable_Dash_4](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Enable%20Dash/Enable_Dash_4.jpg)

# Dash Configuration

Please **swipe left** to the **DASH** tab where you will be able to manage all pod functions (some of these functions are not enabled or visible without an active pod session):

![Refresh_LOGO](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Refresh_LOGO.png) Refresh Pod connectivity and status, be able to silence pod alarms when the pod beeps

![POD_MGMT_LOGO](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/POD_MGMT_LOGO.png) Pod Management (Activate, Deactivate, Play test beep, and Pod history)

## Activate Pod

1. Navigate to the **DASH** tab, click on the **POD MGMT (1)** button and then click on **Activate Pod (2)**.

![Activate_Pod_1](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Activate%20Pod/Activate_Pod_1.png)    ![Activate_Pod_2](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Activate%20Pod/Activate_Pod_2.png)

2. The **Fill Pod** screen is displayed. Fill a new pod with at least 80 units of insulin and listen for two beeps indicating that the pod is ready to be primed. When calculating the total amount of insulin you need for 3 days, please take into account that priming the pod will use about 3-10 units.

![Activate_Pod_3](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Activate%20Pod/Activate_Pod_3.png)    ![Activate_Pod_4](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Activate%20Pod/Activate_Pod_4.jpg)

Make sure that the new pod and the phone running AAPS are within proximity of each other and click the **Next** button.

3. On the **Initialize Pod** screen, the pod will begin priming (you will hear a click followed by a series of ticking sounds as the pod primes itself).  A green checkmark will be shown upon successful priming, and the **Next** button will become enabled. Click on the **Next** button to complete the pod priming initialization and display the **Attach Pod** screen.

**NOTE**: Just in case you get an error message here (this can happen), do not panic. Click on the **Retry** button. In most situations, activation will continue successfully.

![Activate_Pod_5](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Activate%20Pod/Activate_Pod_5.jpg)    ![Activate_Pod_6](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Activate%20Pod/Activate_Pod_6.jpg)

4. Next, prepare the infusion site of the new pod. Remove the pod's plastic needle cap. If you see something that sticks out of the pod, cancel the process and start with a new pod. If everything looks OK, take off the white paper backing from the adhesive and apply the pod to the selected site on your body. When finished, click on the **Next** button.

![Activate_Pod_8](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Activate%20Pod/Activate_Pod_8.jpg)

5. The **Attach Pod** dialogue box will now appear. **Click on the OK button ONLY if you are ready to deploy the cannula**.

![Activate_Pod_9](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Activate%20Pod/Activate_Pod_9.jpg)

6. After pressing **OK**, it may take some time before the Dash pod responds and inserts the cannula (1-2 minutes maximum), so be patient.

 *NOTE: Before the cannula is inserted, it is good practice to pinch the skin near the cannula insertion point. This ensures a smooth insertion of the needle and will decrease your chances of developing occlusions.*

![Activate_Pod_10](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Activate%20Pod/Activate_Pod_10.png)    ![Activate_Pod_11](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Activate%20Pod/Activate_Pod_11.jpg)

7. A green checkmark appears, and the **Next** button becomes enabled upon successful cannula insertion. Click on the **Next** button.

![Activate_Pod_12](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Activate%20Pod/Activate_Pod_12.jpg)

9. The **Pod activated** screen is displayed. Click on the green **Finished** button. Congratulations! You have now started a new active pod session.

![Activate_Pod_13](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Activate%20Pod/Activate_Pod_13.jpg)

10. The **Pod management** menu screen should now display the **Activate Pod (1)** button *disabled* and the **Deactivate Pod (2)** button *enabled*. This is because a pod is now active and you cannot activate an additional pod without deactivating the currently active pod first.

    Click on the back button on your phone to return to the **DASH** tab screen which will now display Pod information for your active pod session, including current basal rate, pod reservoir level, insulin delivered, pod errors and alerts.

    For more details on the information displayed go to the [**DASH Tab**](#dash-tab) section of this document.

![Activate_Pod_14](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Activate%20Pod/Activate_Pod_14.png)    ![Activate_Pod_15](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Activate%20Pod/Activate_Pod_15.jpg)

It is good practice to export settings AFTER deactivating the old pod and BEFORE activating the new pod. Do this at each pod change and once a month, copy the exported file to your internet drive. see [**Export settings Doc**](https://androidaps.readthedocs.io/en/latest/Usage/ExportImportSettings.html?highlight=exporting#export-import-settings).

## Deactivate Pod

Under normal circumstances, the expected lifetime of a pod is three days (72 hours) and an additional 8 hours after the pod expiration warning for a total of 80 hours of pod usage.

To deactivate a pod (either from expiration or from a pod failure):

1. Go to the **DASH** tab, click on the **POD MGMT (1)** button, on the **Pod management** screen click on the **Deactivate Pod (2)** button.

![Deactivate_Pod_1](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Deactivate%20Pod/Deactivate_Pod_1.jpg)    ![Deactivate_Pod_2](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Deactivate%20Pod/Deactivate_Pod_2.png)

2. On the **Deactivate Pod** screen, click on the **Next** button to begin the process of deactivating the pod. You will receive a confirmation beep from the pod that deactivation was successful.

![Deactivate_Pod_3](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Deactivate%20Pod/Deactivate_Pod_3.jpg) ![Deactivate_Pod_4](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Deactivate%20Pod/Deactivate_Pod_4.jpg)

3. A green checkmark will appear upon successful deactivation. Click on the **Next** button to display the pod deactivated screen. You may now remove your pod as the active session has been deactivated.

![Deactivate_Pod_5](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Deactivate%20Pod/Deactivate_Pod_5.jpg)

4. Click on the green button to return to the **Pod Management** screen.

![Deactivate_Pod_6](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Deactivate%20Pod/Deactivate_Pod_6.jpg)

5. You are now returned to the **Pod Management** menu; press the back button on your phone to return to the **DASH** tab. Verify that the **Pod status:** field displays a **No active Pod** message.

![Deactivate_Pod_7](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Deactivate%20Pod/Deactivate_Pod_7.png) ![Deactivate_Pod_8](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Deactivate%20Pod/Deactivate_Pod_8.jpg)

## Resuming Insulin Delivery

**Note**: During profile switches, dash must suspend delivery before setting the new basal profile. If communication fails between the two commands, then delivery can be suspended. Read [**Delivery suspended**](#delivery-suspended) in the troubleshooting section for more details.

Use this command to instruct the active, currently suspended pod to resume insulin delivery. After the command is successfully processed, insulin will resume normal delivery using the current basal rate based on the current time from the active basal profile. The pod will again accept commands for bolus, TBR, and SMB.

1. Go to the **DASH** tab and ensure the **Pod status (1)** field displays **SUSPENDED**, then press the **RESUME DELIVERY (2)** button to start the process to instruct the current pod to resume normal insulin delivery. A message **RESUME DELIVERY** will display in the **Pod Status (3)** field.

![Resume_1](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Resume/Resume_1.jpg)   ![Resume_2](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Resume/Resume_2.jpg)

2. When the Resume delivery command is successfully confirmed a confirmation dialogue will display the message **Insulin delivery has been resumed**. Click **OK** to confirm and proceed.

![Resume_3](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Resume/Resume_3.png)

3. The **DASH** tab will update the **Pod status (1)** field to display **RUNNING,** and the **Resume Delivery** button will no longer be displayed

![Resume_4](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Resume/Resume_4.jpg)

## Silencing Pod Alerts

*NOTE - The 


S button is only available on the **DASH** tab when the pod expiration or low reservoir alert has been triggered. If the Silence ALERTS button is not visible and you hear beep sounds from the pod, try to 'Refresh pod status'.*

The process below will show you how to acknowledge and dismiss pod beeps when the active pod time reaches the warning time limit before the pod expiration of 72 hours (3 days). This warning time limit is defined in the **Hours before shutdown** Dash alerts setting. The maximum life of a pod is 80 hours (3 days 8 hours), however, Insulet recommends not exceeding the 72 hours (3 days) limit.

1. When the defined **Hours before shutdown** warning time limit is reached, the pod will issue warning beeps to inform you that it is approaching its expiration time and pod change will be required soon. You can verify this on the **DASH** tab, the **Pod expires: (1)** field will show the exact time the pod will expire (72 hours after activation), and the text will turn **red** after this time has passed. Under the **Active Pod alerts (2)** field the status message **Pod will expire soon** is displayed. This also will trigger displaying the **SILENCE ALERTS (3)** button.

![ACK_alerts_1](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/ACK%20Alerts/ACK_ALERTS_1.png)

2. Go to the **DASH** tab and press the **SILENCE ALERTS (2)** button. AAPS sends the command to the pod to deactivate the pod expiration warning beeps and updates the **Pod status (1)** field with **ACKNOWLEDGE ALERTS**.

![ACK_alerts_2](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/ACK%20Alerts/ACK_ALERTS_2.png)

3. Upon **successful deactivation** of the alerts, **2 beeps** will be issued by the active pod and a confirmation dialogue will display the message **Activate alerts have been Silenced**. Click the **OK** button to confirm and dismiss the dialogue.


![ACK_alerts_3](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/ACK%20Alerts/ACK_ALERTS_3.png)

4. Go to the **Omnipod (POD)** tab. Under the **Active Pod alerts** field, the warning message is no longer displayed, and the active pod will no longer issue pod expiration warning beeps.

## View Pod History

This section shows you how to review your active pod history and filter by different action categories. The pod history tool allows you to view the actions and results committed to your currently active pod during its three days (72 - 80 hours) life.

This feature helps verify boluses, TBRs and basal commands that were sent to the pod. The remaining categories are useful for troubleshooting issues and determining the order of events that occurred leading up to a failure.

*NOTE:* **Only the last command can be uncertain**. New commands *will not be sent* until the **last 'uncertain' command becomes 'confirmed' or 'denied'**. The way to 'fix' uncertain commands is to **'refresh pod status'**.

1. Go to the **DASH** tab and press the **POD MGMT (1)** button to access the **Pod Management** menu and then press the **Pod history (2)** button to access the pod history screen.

![Pod_history_1](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Pod%20History/Pod_history_1.jpg) ![Pod_history_2](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Pod%20History/Pod_history_2.jpg)

2. On the **Pod history** screen, the default category of **All (1)** is displayed, showing the **Date and Time (2)** of all pod **Actions (3)** and **Results (4)** in reverse chronological order. Use your phone’s **back button 2 times** to return to the **DASH** tab in the main AAPS interface.


![Pod_history_3](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Pod%20History/Pod_history_3.jpg) ![Pod_history_4](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Pod%20History/Pod_history_4.jpg)

# DASH Tab

Below is an explanation of the layout and meaning of the icons and status fields on the **DASH** tab in the main AAPS interface.

*NOTE: If any message in the **DASH** tab status fields reports (uncertain), then you will need to press the Refresh button to clear it and refresh the pod status.*

![DASH_Tab_1](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/DASH%20Tab/DASH_Tab_1.png)

## Fields

* **Bluetooth Address:** Displays the current BlueTooth  address of the connected Pod.
* **Bluetooth Status:** Displays the current connection status.
* **Sequence Number:** Displays the sequence number of the active POD.
* **Firmware Version:** Displays the firmware version for the active connection.
* **Time on Pod:** Displays the current time on the Pod.
* **Pod expires:** Displays the date and time when the Pod will expire.
* **Pod status:** Displays the Pod status.
* **Last connection:** Displays time of last communication with the Pod.

   - *Moments ago* - less than 20 seconds ago.
   - *Less than a minute ago* - more than 20 seconds but less than 60 seconds ago.
   - *1 minute ago* - more than 60 seconds but less than 120 seconds (2 min)
   - *XX minutes ago* - more than 2 minutes ago as defined by the value of XX

* **Last bolus:** Displays the dosage of the last bolus sent to the active pod and how long ago it was issued in parenthesis.
* **Base Basal rate:** Displays the basal rate programmed for the current time from the basal rate profile.
* **Temp basal rate:** Displays the currently running Temporary Basal Rate in the following format

   - {Units per hour} @{TBR start time}  ({minutes run}/{total minutes TBR will be run})
   - *Example:* 0.00U/h @18:25 ( 90/120 minutes)

* **Reservoir:** Displays over 50+U left when more than 50 units are left in the reservoir. Below this value, the exact units are displayed.
* **Total delivered:** Displays the total number of units of insulin delivered from the reservoir. This includes insulin used for activating and priming. 
* **Errors:** Displays the last error encountered. Review the [Pod history](#view-pod-history) and log files for past errors and more detailed information.
*  **Active pod alerts:** Reserved for currently running alerts on the active pod.

## Buttons


![Refresh_Icon](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Refresh_LOGO.png) : Sends a refresh command to the active pod to update communication.

   * Use to refresh the pod status and dismiss status fields that contain the text (uncertain).
   * See the Troubleshooting section below for additional information.
   
![POD_MGMT_Icon](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/POD_MGMT_LOGO.png) : Navigates to the Pod management menu.

![Silence_ALERTS_Icon](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Silent_alert%20.jpg) : When pressed this will disable the pod expiration beeps and notifications.

   * The button is displayed only when pod time is past the expiration warning time.
   * Upon successful dismissal, this icon will no longer appear.
   
![RESUME_Icon](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/DASH%20tab%20icons/RESUME_Icon.png) : Resumes the currently suspended insulin delivery in the active pod. 
     
## Pod Management Menu

Below is the meaning of the icons on the **Pod Management** menu accessed by pressing the **POD MGMT (0)** button from the **DASH** tab.
![DASH_Tab_2](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/DASH%20Tab/DASH_Tab_2.png) ![DASH_Tab_3](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/DASH%20Tab/DASH_Tab_3.png)

* 1 - [**Activate Pod**](#activate-pod): Primes and activates a new pod.
* 2 - [**Deactivate Pod**](#deactivate-pod): Deactivates the currently active pod.
* 3 - **Play Test Beep**: Plays a single test beep on the pod when pressed.
* 4 - [**Pod history**](#view-pod-history): Displays the active pod activity history.

# Dash Settings

The Dash driver settings are configurable from the top-left hand corner **hamburger menu** under **Config Builder (1)**\ ➜\ **Pump**\ ➜\ **Dash**\ ➜\ **Settings Gear (3)** by selecting the **radio button (2)** titled **Dash**. Selecting the **checkbox (4)** next to the **Settings Gear (3)** will allow the Dash menu to be displayed as a tab in the AAPS interface titled **DASH**.

![Dash_settings_1](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Dash%20settings/Dash_settings_1.png) ![Dash_settings_2](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Pump%20list.bak.jpg)

**NOTE:** A faster way to access the **Dash settings** is by accessing the **3 dot menu (1)** in the upper right-hand corner of the **DASH** tab and selecting **Dash preferences (2)** from the dropdown menu.

![Dash_settings_3](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Dash%20settings/Dash_settings_3.png)

The settings groups are listed below; you can enable or disable via a toggle switch for most entries described below:
 
![Dash_settings_4](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Dash%20settings/Dash_settings_4.jpg)
 
*NOTE: An asterisk (\*) denotes the default setting is enabled.*

## Confirmation beeps

Provides confirmation beeps from the pod for bolus, basal, SMB, and TBR delivery and changes.

* **Bolus beeps enabled:** Enable or disable confirmation beeps when a bolus is delivered.
* **Basal beeps enabled:** Enable or disable confirmation beeps when a new basal rate is set, active basal rate is cancelled or current basal rate is changed.
* **SMB beeps enabled:** Enable or disable confirmation beeps when an SMB is delivered.
* **TBR beeps enabled:** Enable or disable confirmation beeps when a TBR is set or cancelled.

## Alerts

Provides AAPS alerts for pod expiration, shutdown, low reservoir based on the defined threshold units.

*Note an AAPS notification will ALWAYS be issued for any alert after the initial communication with the pod since the alert was triggered. Dismissing the notification will NOT dismiss the alert UNLESS automatically acknowledge Pod alerts is enabled. To MANUALLY dismiss the alert you must visit the **DASH** tab and press the **Silence ALERTS button**.*
	
* **Expiration reminder enabled:** Enable or disable the pod expiration reminder set to trigger when the defined number of hours before shutdown is reached.
* **Hours before shutdown:** Defines the number of hours before the active pod shutdown occurs, which will then trigger the expiration reminder alert.
* **Low reservoir alert enabled:** Enable or disable an alert when the pod's remaining units low reservoir limit is reached as defined in the Number of units field.
* **Number of units:** The number of units at which to trigger the pod low reservoir alert.

## Notifications

Provides AAPS notifications and audible phone alerts when it is uncertain if TBR, SMB, or bolus, and delivery suspended events were successful. 

*NOTE: These are notifications only, no audible beep alerts are made.*

* **Sound for uncertain TBR notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when AAPs is uncertain if a TBR was successfully set.
* **Sound for uncertain SMB notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when AAPS is uncertain if an SMB was successfully delivered.
* **Sound for uncertain bolus notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when AAPS is uncertain if a bolus was successfully delivered.
* **Sound when delivery suspended notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when suspend delivery was successfully delivered.

## Other

* **\*DST/Time zone detect on enabled:** allows for time zone changes to be automatically detected if the phone is used in an area where DST is observed.

# Actions (ACT) Tab

This tab is well documented in the main AAPS documentation but there are a few items on this tab that are specific to how the Omnipod Dash pod differs from tube-based pumps, especially after the processes of applying a new pod.

1. Go to the **Actions (ACT)** tab in the main AAPS interface.

2. Under the **Careportal (1)** section the following 3 fields will have their **age reset** to 0 days and 0 hours **after each pod change**: **Insulin** and **Cannula**. This is done because of how the Omnipod pump is built and operates. The **pump battery** and **insulin reservoir** are self-contained inside of each pod. Since the pod inserts the cannula directly into the skin at the site of the pod application, a traditional tube is not used in Omnipod pumps. *Therefore after a pod change, the age of each of these values will automatically reset to zero.* **Pump battery age** is not reported as the battery in the pod will always be more than the life of the pod (maximum 80 hours).

![ACT_1](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Actions%20Tab/ACT_1.png)

## Level

**Insulin Level**

The insulin level displayed is the amount reported by Omnipod DASH. However, the pod only reports the actual insulin reservoir level when it is below 50 units. Until then “Above 50 units will be displayed”. The amount reported is not exact: when the pod reports ‘empty’ in most cases the reservoir will still have some additional units of insulin left.
The DASH overview tab will display as described below:

  * **Above 50 Units** - The Pod reports more than 50 units currently in the reservoir.
  * **Below 50 Units** - The amount of insulin remaining in the reservoir as reported by the Pod. 

Additional note:
  * **SMS** - Returns value or 50+U for SMS responses
  * **Nightscout** - Uploads value of 50 when over 50 units to Nightscout (version 14.07 and older).  Newer versions will report a value of 50+ when over 50 units.

# Troubleshooting

## Delivery suspended

  * There is no suspend button anymore.
  * During profile switches, the dash driver must suspend delivery before setting the new basal profile. If communication fails between the two commands, then delivery can be suspended. When this happens:
     - There will be no insulin delivery, which includes Basal, SMB, Manual bolus etc.
     - There might be a notification that one of the commands is unconfirmed: this depends on when the failure happened. 
     - AAPS will try to set the new basal profile every 15 minutes.
     - AAPS will show a notification informing that the delivery is suspended every 15min if the delivery is still suspended (resume delivery failed).
     - The [**Resume delivery**](#resume-delivery) button will be active if the user chooses to resume delivery manually.
     - If AAPS fail to resume delivery on its own (this happens if the Pod is unreachable, the sound is muted, etc), the pod will start beeping 4 times every minute for 3 minutes, then repeated every 15 minutes if delivery is still suspended for more than 20minutes.
  * For unconfirmed commands, "refresh pod status" should confirm/deny them.

**Note:** When you hear beeps from the pod, do not assume that delivery will continue without checking the phone, delivery might stay suspended, **so you need to check!**

## Pod Failures

Pods fail occasionally due to a variety of issues, including hardware issues with the Pod itself. It is best practice not to call these into Insulet since AAPS is not an approved use case. A list of fault codes can be [**found here**](https://github.com/openaps/openomni/wiki/Fault-event-codes) to help determine the cause.

## Double Bolus error

You will get the pop-up message **Bolus reported an error. Manually check real delivered amount** when you try issuing a bolus while there already is a bolus that is still being issued. You can either mute for 5 minutes, mute or press OK, wait untill the bolus that is being issued is finished and issue a new bolus.

![Bolus error](https://github.com/Freloner/AndroidAPSdocs/blob/3.0/docs/images/DASH%20images/Bolus_error.jpg)

## Preventing error 49 pod failures

This failure is related to an incorrect pod state for a command or an error during an insulin delivery command. This is when the driver and Pod disagree on the actual state. The Pod (out of a build-in safety measure) then reacts with an unrecoverable error code 49 (0x31) ending up with what is known as a “screamer”: the long irritating beep that can only be stopped by punching a hole at the appropriate location at the back of the Pod.
The exact origin of a “49 pod failure” often is hard to trace. In situations that are suspected for this failure to occur (for instance on application crashes, running a development version or re-installation).

## Pump Unreachable Alerts

When no communication can be established with the pod for a preconfigured time a “Pump unreachable” alert will be raised. Pump unreachable alerts can be configured by going to the top right-hand side three-dot menu, selecting **Preferences**\ ➜\ **Local Alerts**\ ➜\ **Pump unreachable threshold [min]**. The recommended value is alerting after **120** minutes.

## Export  Settings

Exporting AndroidAPS settings enables you to restore all your settings, and maybe more importantly, all your Objectives. The purpose may be to restore settings to “last known good” or after uninstalling/reinstalling AndroidAPS.

Note: In some cases, you may need to use the export to restore AndroisAPS settings **while keeping the current active Pod**. In this case, it is important to only import settings exported for the pod currently active.

**A good practice is to do an export immediately after activating a pod**. This way you will always be able to restore the current active Pod in case of problems. For instance when moving to another backup phone.

- Think about if you need to export with an active pod session.
- Regularly export your settings and store a copy in a safe place.

## Import Settings

Please note that importing settings can import an outdated Pod status. As a result, the outdated will result in losing the active Pod! (see **Exporting Settings**)

When importing settings with an active Pod, make sure the export was done on the same Pod that is currently active. 

**WARNING**
Importing settings while on an active Pod session may result in Pod failure or losing the current active Pod. So only try when no other options are available.

**Importing while on an active Pod:** (you risk losing the Pod!)

1. Make sure you are importing settings recently exported while on the current Pod.
2. Import your settings (must be exported for the current pod session)
3. Check all preferences

**Importing (no active Pod session)**

1. Importing any recent export should work (see above)
2. Import your settings.
3. Check all preferences

## Importing settings that contain Pod state from an inactive Pod

When importing settings that contain the session state for a Pod that is no longer active it will show up on the DASH tab. AndroidAPS will try to connect and will fail to do so. In this state, you can not activate a new Pod.

To remove the old Pod session “try” to de-activate the Pod. Initially, de-activation will fail. Select “Retry”. After the second or third retry, you will get the option to remove the pod. Once the old pod is removed you will be able to activate a new Pod.

## Reinstalling AndroidAPS

When uninstalling AndroidAPS you will lose all settings, objectives and possibly the current Pod session. To restore them make sure you have a recent settings file available!

When on an active Pod, also make sure you have an export for the current Pod session or you will lose the Pod currently active on importing settings.

1. Export your settings and store a copy in a safe place.
2. Uninstall AndroidAPS and restart your phone.
3. Install the new version of AndroidAPS.
4. Import your settings
5. Verify all preferences (optionally import settings again)
6. Activate a new Pod
7. When done: Export current settings

## Updating AndroidAPS to a newer version

In most cases, there is no need to uninstall. You can do an “in-place” install by starting the installation for the new version. This is also possible when on an active Pod  session.

1. Export your settings.
2. Install  the new AndroidAPS version.
3. Verify the installation was successful
4. RESUME the Pod or activate a new Pod.
5. When done: Export current settings.

## Omnipod driver alerts

Please note that the Omnipod Dash driver presents a variety of unique alerts on the **Overview tab**, most of them are informational and can be dismissed while some provide the user with an action to take to resolve the cause of the triggered alert. A summary of the main alerts that you may encounter is listed below:

### No active Pod

No active Pod session was detected. This alert can temporarily be dismissed by pressing **SNOOZE** but it will keep triggering as long as a new pod has not been activated. Once activated this alert is automatically silenced.

### Pod suspended

An informational alert that Pod has been suspended.

### Setting basal profile failed. Delivery might be suspended! Please manually refresh the Pod status from the Omnipod tab and resume delivery if needed.

An informational alert that the Pod basal profile setting has failed, and you will need to hit *Refresh* on the Omnipod tab.

### Unable to verify whether SMB bolus succeeded. If you are sure that the Bolus didn't succeed, you should manually delete the SMB entry from Treatments.

Alert that the SMB bolus success could not be verified, you will need to verify the *Last bolus* field on the DASH tab to see if SMB bolus succeeded and if not remove the entry from the Treatments tab.

### Uncertain if "task bolus/TBR/SMB" is completed, please manually verify if it was successful.

# Where to get help for Omnipod DASH driver

All of the development work for the Omnipod DASH driver is done by the community on a volunteer basis; we ask that you please be considerate and use the following guidelines when requesting assistance:

-  **Level 0:** Read the relevant section of this documentation to ensure you understand how the functionality with which you are experiencing difficulty is supposed to work.
-  **Level 1:** If you are still encountering problems that you are not able to resolve by using this document, then please go to the *#androidaps* channel on **Discord** by using [this invite link](https://discord.gg/4fQUWHZ4Mw).
-  **Level 2:** Search existing issues to see if it has already been reported at [Issues](https://github.com/nightscout/AndroidAPS/issues).
If it's the case, please confirm/comment/add information on your problem.
If not, please create a [new issue](https://github.com/nightscout/AndroidAPS/issues) and attach [your log files](../Usage/Accessing-logfiles.html).
-  **Be patient - most of the members of our community consist of good-natured volunteers, and solving issues often requires time and patience from both users and developers.**

