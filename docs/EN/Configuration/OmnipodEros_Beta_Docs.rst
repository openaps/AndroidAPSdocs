These instructions are for configuring the Omnipod Eros generation pump
(**NOT Omnipod Dash**). The Omnipod driver is available as part of
AndroidAPS (AAPS) as of version 2.8.

***This software is part of a DIY artificial pancreas solution and is
not a product but requires YOU to read, learn, and understand the
system, including how to use it. You alone are responsible for what you
do with it.***

Hardware and Software Requirements
==================================

-  **Pod Communication Device:** a 433MHz RileyLink from
       `*getrileylink.org* <https://getrileylink.org/product/rileylink433>`__,
       which is the bridge to communicate with Eros generation pods

   -  Other hardware options are available.

      -  *RileyLink with modified Balun Antenna* - Untested

      -  `**Emalink** <https://github.com/sks01/EmaLink>`__ - Untested

      -  `**LoopLink** <https://jameswedding.substack.com/>`__ -
             Untested

-  **Mobile Phone Device:** Supported `*Omnipod driver Android
       phone* <https://docs.google.com/spreadsheets/d/1eNtXAWwrdVtDvsvXaR_72wgT9ICjZPNEBq8DbitCv_4/edit#gid=0>`__
       with a version of AAPS 2.8 and related `*components
       setup* <https://androidaps.readthedocs.io/en/latest/EN/index.html#component-setup>`__

-  **Insulin Delivery Device:** a fresh Omnipod (Eros generation - NOT
       DASH) pod

These instructions will assume that you are starting a new pod session;
if this is not the case, please be patient and attempt to begin this
process on your next pod change.

Before You Begin
================

**SAFETY FIRST** - do not attempt this process in an environment where
you cannot recover from an error (extra pods, insulin, charged
RileyLink, and phone devices are must-haves).

**Your Omnipod PDM will no longer work after the AAPS Omnipod driver
activates your pod**. Previously you used your Omnipod PDM to send
commands to your Omnipod Eros pod. An Omnipod Eros pod only allows a
single device to send communication to it. The device that successfully
activates the pod is the only device allowed to communicate with it from
that point forward. This means that once you activate an Omnipod Eros
pod with your RileyLink through the AAPS Omnipod driver, **you will no
longer be able to use your PDM with your pod**. The AAPS Omnipod driver
with the RileyLink is now your acting PDM. *This does NOT mean you
should throw away your PDM, it is recommended to keep it around as a
backup, and for emergencies with AAPS is not working correctly.*

**You can configure multiple RileyLinks, but only one selected RileyLink
at a time can communicate with a pod.** The AAPS Omnipod driver supports
the ability to add multiple RileyLinks in the RileyLink configuration,
however, only one RileyLink at a time can be selected to be used for
sending and receiving communication.

**Your pod will not shut off when the RileyLink is out of range.** When
your RileyLink is out of range or the signal is blocked from
communicating with the active pod, your pod will continue to deliver
basal insulin. Upon activating a pod, the basal profile defined in AAPS
will be programmed into the new pod. Should you lose contact with the
pod, it will revert to this basal profile. You will not be able to issue
new commands until the RileyLink comes back in range and re-establishes
the connection.

Enabling the Omnipod Driver in AAPS
===================================

You can enable the Omnipod driver in AAPS in **two ways**:

1. Via the **AAPS Setup Wizard (2)** located at the top right-hand
       corner **three-dot menu** |image0| **(1)** and proceeding through
       the wizard menus until you arrive at the **Pump** screen. Then
       select the **Omnipod radio button (3)** and select **Pump Setup
       (4)** to open the Omnipod Settings screen.

       .. image:: ../images/omnipod/Enable_Omnipod_Driver_1.png
    |image1|\ |image2|

**OR**

1. Via the top-left hand corner **hamburger menu** |image3|\ under
       **Config Builder (1)** ➜\ **Pump**\ ➜\ **Omnipod** by selecting
       the **radio button (2)** titled **Omnipod**. Selecting the
       **checkbox (4)** next to the **Settings Gear** |image4| **(3)**
       will display the Omnipod menu as a tab in the AAPS interface
       titled **POD**. This is referred to in this documentation as the
       **Omnipod (POD)** tab.

    **NOTE:** A faster way to access the **Omnipod settings** can be
    found below in the `***Omnipod Settings
    section*** <#omnipod-settings>`__ of this document.

    |image5| |image6|

Verification of Omnipod Driver Selection
----------------------------------------

To verify that you have enabled the Omnipod driver in AAPS **swipe to
the left** from the **Overview** tab, where you will now see an
**Omnipod** or **POD** tab.

|image7|

Omnipod Configuration
======================

Please **swipe left** to the **Omnipod (POD)** tab where you will be
able to manage all pod and RileyLink functions (some of these functions
are not enabled or visible without an active pod session):

    |image8| Refresh Pod connectivity and status

    |image9| Pod Management (Activate, Deactivate, Play test beep,
    RileyLink Stats and Pod history)

RileyLink Setup
---------------

*Note: A good visual indicator that the RileyLink is not connected is
that the Insulin and Calculator buttons on the HOME tab will be missing.
This will also occur for about the first 30 seconds after AAPS starts,
as it is actively connecting to the RileyLink.*

1. Ensure that your RileyLink is fully charged and powered on.

2. After selecting the Omnipod driver, next you will identify and select
       your RileyLink from **Config Builder (1)**
       ➜\ **Pump**\ ➜\ **Omnipod**\ ➜\ **Gear Icon (Settings)**
       |image10|\ **(2)** ➜\ **RileyLink Configuration (3)** by pressing
       the **Scan (4)** button and **selecting your RileyLink (5)** .

    Ensure your RileyLink battery is charged and it is `*positioned in
    close proximity* <#optimal-omnipod-and-rileylink-positioning>`__
    (~50 cm away or less) to your phone for AAPS to identify it by its
    MAC address. Once selected, you can proceed to activate your first
    pod session. Use the back button on your phone to return to the main
    AAPS interface.

    |image11| |image12|\ |image13| |image14|

1. Verify that in the **Omnipod (POD)** tab that the **RileyLink Status
       (1)** appears as **Connected.** The **Pod status (2)** field
       should show **No active Pod**; if not, please attempt the
       previous step or exit AAPS to see if this refreshes the
       connection.

    |image15|

Activating a Pod
----------------

Before you can activate a pod please ensure you have properly configured
and connected your RileyLink connection in the Omnipod settings

*REMINDER: Pod communication occurs at limited ranges for both pod
activation and deactivation due to security safety measures. During
these procedures, make sure that your pod is `*within close
proximity* <#optimal-omnipod-and-rileylink-positioning>`__ (~50 cm away
or less) to the RileyLink.*

1. Navigate to the **Omnipod (POD)** tab and click on the **POD MGMT
       (1)** button, and then click on **Activate Pod (2)**.

    |image16| |image17|

1. The **Fill Pod** screen is displayed. Fill a new pod with at least 85
       units of insulin and listen for two beeps indicating that the pod
       is ready to be primed.

    |image18|

    Ensure the new pod and RileyLink are within close proximity of each
    other (~50cm or less) and click the **Next** button.

1. On the **Initialize Pod** screen, the pod will begin priming (you
       will hear a click followed by a series of ticking sounds as the
       pod primes itself). If RileyLink is out of range of the pod being
       activated, you will receive an error message **No response from
       Pod**. If this occurs, `*move the RileyLink
       closer* <#optimal-omnipod-and-rileylink-positioning>`__ (~50 cm
       away or less) to but not on top of the Pod and click the **Retry
       (1)** button.

    |image19| |image20|

1. Upon successful priming a green checkmark will be shown and the
       **Next** button will become enabled. Click on the **Next** button
       to complete the pod priming initialization and display the
       **Attach Pod** screen.

    |image21|

1. Next, prepare the infusion site of the new pod. Remove the pod's
       plastic needle cap and white paper backing from the adhesive and
       apply the pod to your usually selected site on your body. When
       finished, click on the **Next** button.

    |image22|

1. The **Attach Pod** dialog box will now appear. ***ONLY click on the
       OK button if you are ready to deploy the cannula***.

    |image23|

1. After pressing **OK**, it may take some time before the Omnipod
       responds and inserts the cannula (1-2 minutes maximum), so be
       patient.

    If RileyLink is out of range of the pod being activated, you will
    receive an error message **No response from Pod**. If this occurs,
    move the RileyLink closer (~50 cm away or less) to but not on top of
    the Pod and click the **Retry** button.

    If the RileyLink is out of Bluetooth range or does not have an
    active connection to the phone, you will receive an error message
    **No response from RileyLink**. If this occurs, move the RileyLink
    closer to the phone and click the **Retry** button.

    *NOTE: Before the cannula is inserted, it is good practice to pinch
    the skin near the cannula insertion point. This ensures a smooth
    insertion of the needle and will decrease your chances of developing
    occlusions.*

    |image24|

    |image25| |image26|

1. A green checkmark appears, and the **Next** button becomes enabled
       upon successful cannula insertion. Click on the **Next** button.

    |image27|

1. The **Pod activated** screen is displayed. Click on the green
       **Finished** button. Congratulations! You have now started a new
       active pod session. |image28|

2. The **Pod management** menu screen should now display with the
       **Activate Pod (1)** button *disabled* and the **Deactivate Pod
       (2)** button *enabled*. This is because a pod is now active and
       you cannot activate an additional pod without deactivating the
       currently active pod first.

    Click on the back button on your phone to return to the **Omnipod
    (POD)** tab screen which will now display Pod information for your
    active pod session, including current basal rate, pod reservoir
    level, insulin delivered, pod errors and alerts.

    For more details on the information displayed go to the `*Omnipod
    (POD) Tab* <#omnipod-pod-tab>`__ section of this document.

    |image29| |image30|

Deactivating a Pod
------------------

Under normal circumstances, the life of a pod should run for three days
(72 hours) and an additional 8 hours after the pod expiration warning
for a total of 80 hours of pod usage.

*REMINDER: Pod communication occurs at limited ranges for both pod
activation and deactivation due to security safety measures. During
these procedures make sure that your pod is `*within close
proximity* <#optimal-omnipod-and-rileylink-positioning>`__ (~50cm or
less) to the RileyLink.*

To deactivate a pod (either from expiration or from a pod failure):

1. Go to the **Omnipod (POD)** tab, click on the **POD MGMT (1)**
       button, on the **Pod management** screen click on the
       **Deactivate Pod (2)** button.

    |image31| |image32|

1. On the **Deactivate Pod** screen, first, make sure the RileyLink is
       in close proximity (~50 cm away or less) to the pod but not on
       top of the pod, then click on the **Next** button to begin the
       process of deactivating the pod.

    |image33|

1. The **Deactivating Pod** screen will appear, and you will receive a
       confirmation beep from the pod that deactivation was successful.

    |image34|

a. **IF deactivation fails** and you do not receive a confirmation beep,
       you may receive a **No response from RileyLink** or **No response
       from Pod message**. Please click on the **Retry (1)** button to
       attempt deactivation again. If deactivation continues to fail,
       please click on the **Discard Pod (2)** button to discard the
       Pod. You may now remove your pod as the active session has been
       deactivated. If your Pod has a screaming alarm, you may need to
       manually silence it (using a pin or a paperclip) as the **Discard
       Pod (2)** button will not silence it.

    |image35| |image36|

1. A green checkmark will appear upon successful deactivation. Click on
       the **Next** button to display the pod deactivated screen. You
       may now remove your pod as the active session has been
       deactivated.

    |image37|

1. Click on the green |image38|\ button to return to the **Pod
       management** screen.

    |image39|

1. You are now returned to the **Pod management** menu press the back
       button on your phone to return to the **Omnipod (POD)** tab.
       Verify that the **RileyLink Status:** field reports **Connected**
       and the **Pod status:** field displays a **No active Pod**
       message.

    |image40| |image41|

Suspending and Resuming Insulin Delivery
----------------------------------------

The process below will show you how to suspend and resume insulin pump
delivery.

*NOTE - if you do not see a SUSPEND button* |image42|\ *, then it has
not been enabled to display in the Omnipod (POD) tab. Enable the* **Show
Suspend Delivery button in Omnipod tab** *setting in the `*Omnipod
settings* <#omnipod-settings>`__ under **Other**.*

Suspending Insulin Delivery
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Use this command to put the active pod into a suspended state. In this
suspended state, the pod will no longer deliver any insulin. This
command mimics the suspend function that the original Omnipod PDM issues
to an active pod.

1. Go to the **Omnipod (POD)** tab and click on the **SUSPEND (1)**
       button |image43|. The suspend command is sent from the RileyLink
       to the active pod and the **SUSPEND (3)** button will become
       greyed out. The **Pod status (2)** will display **SUSPEND
       DELIVERY**.

    |image44| |image45|

1. When the suspend command is successfully confirmed by the RileyLink a
       confirmation dialog will display the message **All insulin
       delivery has been suspended**. Click **OK** to confirm and
       proceed.

    |image46|

1. Your active pod has now suspended all insulin delivery. The **Omnipod
       (POD)** tab will update the **Pod status (1)** to **Suspended**.
       The **SUSPEND** button |image47| will change to a new **Resume
       Delivery (2)** button |image48|

    |image49|

Resuming Insulin Delivery
~~~~~~~~~~~~~~~~~~~~~~~~~

Use this command to instruct the active, currently suspended pod to
resume insulin delivery. After the command is successfully processed,
insulin will resume normal delivery using the current basal rate based
on the current time from the active basal profile. The pod will again
accept commands for bolus, TBR, and SMB.

1. Go to the **Omnipod (POD)** tab and ensure the **Pod status (1)**
       field displays **Suspended**, then press the **Resume Delivery
       (2)** button |image50| to start the process to instruct the
       current pod to resume normal insulin delivery. A message **RESUME
       DELIVERY** will display in the **Pod status (3)** field,
       signifying the RileyLink is actively sending the command to the
       suspended pod.

    |image51| |image52|

1. When the Resume delivery command is successfully confirmed by the
       RileyLink a confirmation dialog will display the message
       **Insulin delivery has been resumed**. Click **OK** to confirm
       and proceed.

    |image53|

1. The **Omnipod (POD)** tab will update the **Pod status (1)** field to
       display **RUNNING,** and the **Resume Delivery** button |image54|
       will now display the **SUSPEND (2)** button |image55|.

    |image56|

Acknowledging Pod Alerts
------------------------

*NOTE - if you do not see an ACK ALERTS button* |image57|\ *, it is
because it is conditionally displayed on the Omnipod (POD) tab ONLY when
the pod expiration or low reservoir alert has been triggered.*

The process below will show you how to acknowledge and dismiss pod beeps
that occur when the active pod time reaches the warning time limit
before the pod expiration of 72 hours (3 days). This warning time limit
is defined in the **Hours before shutdown** Omnipod alerts setting. The
maximum life of a pod is 80 hours (3 days 8 hours), however Insulet
recommends not exceeding the 72 hour (3 days) limit.

*NOTE - If you have enabled the **Automatically acknowledge Pod alerts**
setting in Omnipod Alerts, this alert will be handled automatically
after the first occurrence and you will NOT need to manually dismiss the
alert.*

1. When the defined **Hours before shutdown** warning time limit is
       reached, the pod will issue warning beeps to inform you that it
       is approaching its expiration time and a pod change will soon be
       required. You can verify this on the **Omnipod (POD)** tab, the
       **Pod expires: (1)** field will show the exact time the pod will
       expire (72 hours after activation) and the text will turn **red**
       after this time has passed, under the **Active Pod alerts (2)**
       field where the status message **Pod will expire soon** is
       displayed. This trigger will display the **ACK ALERTS (3)**
       button |image58|. A **system notification (4)** will also inform
       you of the upcoming pod expiration

    |image59| |image60|

1. Go to the **Omnipod (POD)** tab and press the **ACK ALERTS** **(2)**
       button |image61| (acknowledge alerts). The RileyLink sends the
       command to the pod to deactivate the pod expiration warning beeps
       and updates the **Pod status (1)** field with **ACKNOWLEDGE
       ALERTS**.

    |image62|

1. Upon **successful deactivation** of the alerts, **2 beeps** will be
       issued by the active pod and a confirmation dialog will display
       the message **Activate alerts have been acknowledged**. Click the
       **OK** button to confirm and dismiss the dialog.

    |image63|

a. If the RileyLink is out of range of the pod while the acknowledge
       alerts command is being processed a warning message will display
       2 options. **Mute (1)** will silence this current warning. **OK
       (2)** will confirm this warning and allow the user to try to
       acknowledge alerts again.

    |image64|

1. Go to the **Omnipod (POD)** tab, under the **Active Pod alerts**
       field, the warning message is no longer displayed and the active
       pod will no longer issue pod expiration warning beeps.

View Pod History
----------------

This section shows you how to review your active pod history and filter
by different action categories. The pod history tool allows you to view
the actions and results committed to your currently active pod during
its three day (72 - 80 hours) life.

This feature is useful for verifying boluses, TBRs, basal changes that
were given but you may be unsure if they completed. The remaining
categories are useful in general for troubleshooting issues and
determining the order of events that occurred leading up to a failure.

1. Go to the **Omnipod (POD**) tab and press the **POD MGMT (1)** button
       to access the **Pod management** menu and then press the **Pod
       history (2)** button to access the pod history screen.

    |image65| |image66|

1. On the **Pod history** screen, the default category of **All (1)** is
       displayed showing the **Date and Time (2)** of all pod **Actions
       (3)** and **Results (4)** in reverse chronological order. Use
       your phone’s **back button 2 times** to return to the **Omnipod
       (POD)** tab in the main AAPS interface.

    |image67| |image68|

View RileyLink Settings and History
-----------------------------------

This section shows you how to review the settings of your active pod and
RileyLink along with the communication history of each. This feature,
once accessed, is split into two sections: **Settings** and **History**.

The primary use of this feature is when your RileyLink is out of the
Bluetooth range of your phone after a period of time and the **RileyLink
status** reports **RileyLink unreachable**. The **refresh** button
|image69| will manually attempt to re-establish Bluetooth communication
with the currently configured RileyLink in the Omnipod settings.

Manually Re-establish RileyLink Bluetooth Communication
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. From the **Omnipod (POD)** tab when the **RileyLink Status: (1)**
       reports **RileyLink unreachable** press the **POD MGMT (2)**
       button to navigate to the **Pod Management** menu. On the **Pod
       Management** menu you will see a notification appear actively
       searching for a RileyLink connection, press the **RileyLink stats
       (3)** button to access the **RileyLink settings** screen.

    |image70| |image71|

1. On the **RileyLink Settings (1)** screen under the **RileyLink (2)**
       section you can confirm both the Bluetooth connection status and
       error in the **Connection Status and Error: (3)** fields. A
       *Bluetooth Error* and *RileyLink unreachable* status should be
       shown. Start the manual Bluetooth reconnection by pressing the
       **refresh** |image72| **(4)** button in the lower right corner.

    |image73|

a. If the RileyLink is unresponsive or out of range of the phone while
       the Bluetooth refresh command is being processed a warning
       message will display 2 options.

   i.  **Mute (1)** will silence this current warning.

   ii. **OK (2)** will confirm this warning and allow the user to try to
           re-establish the Bluetooth connection again.

b. If the Bluetooth connection does not re-establish, try manually
       turning off and then back on the Bluetooth function on your
       phone.

    |image74|

1. After a successful RileyLink Bluetooth reconnection the **Connection
       Status: (1)** field should report **RileyLink ready**.
       Congratulations, you have now reconnected your configured
       RileyLink to AAPS!

    |image75|

RileyLink and Active Pod Settings
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This screen will provide information, status, and settings configuration
information for both the currently configured RileyLink and the
currently active Omnipod Eros pod. It will also allow you to manually
refresh the RileyLink Bluetooth connection.

1. Go to the **Omnipod (POD**) tab and press the **POD MGMT (1)** button
       to access the **Pod management** menu, then press the **RileyLink
       stats (2)** button to view your currently configured **RileyLink
       (3)** and active pod **Device (4)** settings.

    |image76| |image77|

    |image78|

    *RileyLink (2) fields*

-  **Configured Address:** MAC address of the selected RileyLink defined
       in the Omnipod Settings.

-  **Connected Device:** Model of the Omnipod pod currently
       communicating with the RileyLink (currently only eros pods work
       with the RileyLink)

-  **Connection Status**: The current status of the Bluetooth connection
       between the RileyLink and the phone running AAPS.

-  **Connection Error:** If there is an error with the RileyLink
       Bluetooth connection details will be displayed here.

-  **RL Firmware:** Current firmware version installed on the actively
       connected RileyLink.

    *Device (2) fields - Active Pod*

-  **Device Type:** The type of device communicating with the RileyLink
       (Omnipod pod pump)

-  **Device Model:** The model of the active device connected to the
       RileyLink (the current model name of the Omnipod pod, which is
       Eros)

-  **Pump Serial Number:** Serial number of the currently activated pod

-  **Pump Frequency:** Communication radio frequency the RileyLink has
       tuned to enable communication between itself and the pod.

-  **Last used frequency:** Last known radio frequency the pod used to
       communicate with the RileyLink.

-  **Last device contact:** Date and time of the last contact the pod
       made with the RileyLink.

    |image79| - **Refresh button** to manually refresh RileyLink
    Bluetooth communication with the phone.

RileyLink and Active Pod History
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This screen provides information in reverse chronological order of each
state or action that either the RileyLink or currently connected pod is
in or has taken. The entire history is only available for the currently
active pod, after a pod change this history will be erased and only
events from the newly activated pod will be recorded and shown.

1. Go to the **Omnipod (POD**) tab and press the **POD MGMT (1)** button
       to access the **Pod management** menu, then press the **RileyLink
       stats (2)** button to view the **Settings** and **History**
       screen. Click on the **HISTORY (3)** text to display the entire
       history of the RileyLink and currently active pod session.

    |image80| |image81|

    |image82|

    *Fields*

-  **Date & Time**: In reverse chronological order the timestamp of each
       event.

-  **Device:** The device to which the current action or state is
       referring.

-  **State or Action:** The current state or action performed by the
       device.

Omnipod (POD) Tab
=================

Below is an explanation of the layout and meaning of the icons and
status fields on the **Omnipod (POD)** tab in the main AAPS interface.

*NOTE: If any message in the Omnipod (POD) tab status fields report
(uncertain) then you will need to press the Refresh button to clear it
and refresh the pod status.*

|image83|

*Fields*

-  **RileyLink Status:** Displays the current connection status of the
       RileyLink

   -  *RileyLink Unreachabl*\ e - RileyLink is either not within
          Bluetooth range of the phone, powered off or has a failure
          preventing Bluetooth communication.

   -  *RileyLink Ready* - RileyLink is powered on and actively
          initializing the Bluetooth connection

   -  *Connected* - RileyLink is powered on, connected and actively able
          to communicate via Bluetooth.

-  **Pod address:** Displays the current address in which the active pod
       is referenced

-  **LOT:** Displays the LOT number of the active pod

-  **TID:** Displays the serial number of the pod.

-  **Firmware Version:** Displays the firmware version of the active
       pod.

-  **Time on Pod:** Displays the current time on the active pod.

-  **Pod expires:** Displays the date and time when the active pod will
       expire.

-  **Pod status:** Displays the status of the active pod.

-  **Last connection:** Displays the last time communication with the
       active pod was achieved.

   -  *Moments ago* - less than 20 seconds ago.

   -  *Less than a minute ago* - more than 20 seconds but less than 60
          seconds ago.

   -  *1 minute ago* - more than 60 seconds but less than 120 seconds (2
          min)

   -  *XX minutes ago* - more than 2 minutes ago as defined by the value
          of XX

-  **Last bolus:** Displays the dosage of the last bolus sent to the
       active pod and how long ago it was issued in parenthesis.

-  **Base Basal rate:** Displays the basal rate programmed for the
       current time from the basal rate profile.

-  **Temp basal rate:** Displays the currently running Temporary Basal
       Rate in the following format

   -  Units / hour @ time TBR was issued (minutes run / total minutes
          TBR will be run)

   -  *Example:* 0.00U/h @18:25 ( 90/120 minutes)

-  **Reservoir:** Displays over 50 U left when more than 50 units are
       left in the reservoir. Below this value the exact units are
       displayed in yellow text.

-  **Total delivered:** Displays the total number of units of insulin
       delivered from the reservoir. *Note this is an approximation as
       priming and filling the pod is not an exact process.*

-  **Errors:** Displays the last error encountered. Review the `*Pod
       history* <#view-pod-history>`__, `*RileyLink
       history* <#rileylink-and-active-pod-history>`__ and log files for
       past errors and more detailed information.

-  **Active pod alerts:** Reserved for currently running alerts on the
       active pod. Normally used when pod expiration is past 72 hours
       and native pod beep alerts are running.

*Icons*

    |image84|

    **REFRESH:** Sends a refresh command to the active pod to update
    communication and status.

-  Use to refresh the pod status and dismiss status fields that contain
       the text (uncertain). See the `**Troubleshooting
       section** <#troubleshooting>`__ below for additional information.

    |image85| **POD MGMT:** Navigates to the Pod management menu

    |image86|

    **ACK ALERTS:** Conditionally displayed when the active pod time is
    past 72 hours and native pod warning beeps are actively running.
    Allows the user to send a command to the pod to disable the active
    beeping for pod expiration. Once successfully dismissed this icon is
    no longer displayed.

    |image87|

    **SET TIME:** When pressed this will update the time on the pod with
    the current time on your phone.

    |image88| **SUSPEND:** Suspends the active pod

    |image89| **RESUME DELIVERY:** Resumes the currently suspended,
    active pod

Pod Management Menu
-------------------

Below is an explanation of the layout and meaning of the icons on the
**Pod Management** menu accessed from the **Omnipod (POD)** tab.

|image90|

    |image91| **Activate Pod** - primes and activates a new pod

|image92| **Deactivate Pod** - deactivates the currently active pod.

    *NOTES:*

-  *A partially paired pod ignores this command.*

-  *Use this command to deactivate a screaming pod (error 49). *

-  *If the button is disabled (greyed out) use the Discard Pod button.*

    |image93| **Play test beep** - plays a single test beep on the pod
    when pressed.

    |image94|

    **Discard pod** - deactivates and discards the pod state of an
    unresponsive pod when pressed.

    This button is only displayed when very specific cases are met
    because proper deactivation is no longer possible:

-  A **pod is not fully paired** and thus ignores deactivate commands.

-  A **pod is stuck** during the pairing process between steps

-  A **pod simply does not pair at all.**

    |image95| **Pod history** - displays the active pod activity history

    |image96|

    **RileyLink stats:** Navigates to the RileyLink Statistics screen
    displaying current settings and RileyLink Connection history

-  *Settings* - displays RileyLink and active pod settings information

-  *History* - displays RileyLink and Pod communication history

    |image97|

    **Reset RileyLink Config** - This button resets the currently
    connected RileyLink configuration. When communication is started,
    specific data is sent to and set in the RileyLink (memory registers
    are set, communication protocols are set, tuned radio frequency is
    set).

-  The primary usage of this feature is when the currently active
       RileyLink is not responding and communication is in a stuck
       state. If the RileyLink is turned off and then back on, the
       **Reset RileyLink Config** button needs to be pressed, so that it
       sets these communication parameters in the RileyLink
       configuration. If this is NOT done then AAPS will need to be
       restarted after the RileyLink is power cycled.

    |image98| **Read pulse log:** Sends the active pod pulse log to the
    clipboard

Omnipod Settings
================

The Omnipod driver settings are configurable from the top-left hand
corner **hamburger menu** |image99|\ under **Config
Builder**\ ➜\ **Pump**\ ➜\ **Omnipod**\ ➜\ **Settings Gear**
|image100|\ **(2)** by selecting the **radio button (1)** titled
**Omnipod**. Selecting the **checkbox (3)** next to the **Settings
Gear** |image101|\ **(2)** will allow the Omnipod menu to be displayed
as a tab in the AAPS interface titled **OMNIPOD** or **POD**. This is
referred to in this documentation as the **Omnipod (POD)** tab.

|image102|

**NOTE:** A faster way to access the **Omnipod settings** is by
accessing the **3 dot menu** |image103|\ **(1)** in the upper right hand
corner of the **Omnipod (POD)** tab and selecting **Plugin preferences
(2)** from the dropdown menu.

|image104|

The settings groups are listed below; you can enable or disable via a
toggle switch for most entries described below:

|image105|

*NOTE: An asterisk (\*) denotes the default for a setting is enabled.*

-  *RileyLink* - Allows for scanning of a RileyLink device. The Omnipod
       driver cannot select more than one RileyLink device at a time.

-  *Confirmation beeps* - provides confirmation beeps from the pod for
       bolus, basal, SMB, and TBR delivery and changes.

   -  **Bolus beeps enabled\*:** Enable or disable confirmation beeps
          when a bolus is delivered.

   -  **Basal beeps enabled\*:** Enable or disable confirmation beeps
          when a new basal rate is set, active basal rate is canceled or
          current basal rate is changed.

   -  **SMB beeps enabled\*:** Enable or disable confirmation beeps when
          a SMB is delivered.

   -  **TBR beeps enabled:** Enable or disable confirmation beeps when a
          TBR is set or canceled.

-  *Alerts* - provides AAPS alerts and Nightscout announcements for pod
       expiration, shutdown, low reservoir based on the defined
       threshold units.

    *Note an AAPS notification will ALWAYS be issued for any alert after
    the initial communication with the pod since the alert was
    triggered. Dismissing the notification will NOT dismiss the alert
    UNLESS automatically acknowledge Pod alerts is enabled. To MANUALLY
    dismiss the alert you must visit the Omnipod (POD) tab and press the
    ACK ALERTS button.*

-  **Expiration reminder enabled\*:** Enable or disable the pod
       expiration reminder set to trigger when the defined number of
       hours before shutdown is reached.

-  **Hours before shutdown:** Defines the number hours before the active
       pod shutdown occurs, which will then trigger the expiration
       reminder alert.

-  **Low reservoir alert enabled\*:** Enable or disable an alert when
       the pod's remaining units low reservoir limit is reached as
       defined in the Number of units field.

-  **Number of units:** The number of units at which to trigger the pod
       low reservoir alert.

-  **Automatically acknowledge Pod alerts:** When enabled a notification
       will still be issued however immediately after the first pod
       communication contact since the alert was issued it will now be
       automatically acknowledged and the alert will be dismissed.

-  *Notifications -* Provides AAPS notifications and audible phone
       alerts when it is uncertain if TBR, SMB, or bolus events were
       successful. *NOTE: These are notifications only, no audible beep
       alerts are made.*

   -  **Sound for uncertain TBR notifications enabled:** Enable or
          disable this setting to trigger an audible alert and visual
          notification when AAPs is uncertain if a TBR was successfully
          set.

   -  **Sound for uncertain SMB notifications enabled\*:** Enable or
          disable this setting to trigger an audible alert and visual
          notification when AAPS is uncertain if an SMB was successfully
          delivered.

   -  **Sound for uncertain bolus notifications enabled\*:** Enable or
          disable this setting to trigger an audible alert and visual
          notification when AAPS is uncertain if a bolus was
          successfully delivered.

-  *Other* - provides advanced settings to assist debugging.

   -  **Show Suspend Delivery button in Omnipod tab:** Hide or display
          the suspend delivery button in the **Omnipod (POD)** tab.

   -  **Show Pulse log button in Pod Management menu:** Hide or display
          the pulse log button in the **Pod Management** menu.

   -  **Show RileyLink Stats button in Pod Management menu:** Hide or
          display the RileyLink Stats button in the **Pod Management**
          menu.

   -  **DST/Time zone detect on enabled\*:** allows for time zone
          changes to be automatically detected if the phone is used in
          an area where DST is observed.

Actions (ACT) Tab
=================

This tab is well documented in the main AAPS documentation but there are
a few items on this tab that are specific to how the Omnipod pod differs
from tube based pumps, especially after the processes of applying a new
pod.

1. Go to the **Actions (ACT)** tab in the main AAPS interface.

2. Under the **Careportal (1)** section the following 3 fields will have
       their **age reset** to 0 days and 0 hours **after each pod
       change**: **Insulin**, **Cannula** and **Pump battery**. This is
       done because of how the Omnipod pump is built and operates. The
       **pump battery** and **insulin reservoir** are self contained
       inside of each pod. Since the pod inserts the cannula directly
       into the skin at the site of the pod application, a traditional
       tube is not used in Omnipod pumps. *Therefore after a pod change
       the age of each of these values will automatically reset to
       zero.*

    |image106|

Troubleshooting
===============

-  **Pod Failures -** Pods fail occasionally due to a variety of issues,
       including hardware issues with the Pod itself. It is best
       practice not to call these into Insulet, since AAPS is not an
       approved use case. A list of fault codes can be found
       `*here* <https://github.com/openaps/openomni/wiki/Fault-event-codes>`__
       to help determine the cause.

-  **Preventing error 49 pod failures** - This failure is related to an
       incorrect pod state for a command or an error during an insulin
       delivery command. We recommend users to switch to the Nightscout
       client to *upload only (Disable sync)* under the ***Config
       Builder**\ ➜\ **General**\ ➜\ **NSClient**\ ➜\ **cog
       wheel**\ ➜\ **Advanced Settings*** to prevent possible failures.

-  **Pump Unreachable Alerts** - It is recommended that pump unreachable
       alerts be configured to **120 minutes** by going to the top
       right-hand side three-dot menu, selecting
       ***Preferences**\ ➜\ **Local Alerts**\ ➜\ **Pump unreachable
       threshold [min]*** and setting this to ***120***.

-  **Import Settings from previous AAPS** - Please note that importing
       settings has the possibility to import an outdated Pod status. As
       a result, you may lose an active Pod. It is therefore strongly
       recommended that you ***do not import settings while on an active
       Pod session***.

   1. Deactivate your pod session. Verify that you do not have an active
          pod session.

   2. Export your settings and store a copy in a safe place.

   3. Uninstall the previous version of AAPS and restart your phone.

   4. Install the new version of AAPS and verify that you do not have an
          active pod session.

   5. Import your settings and activate your new pod.

-  **Omnipod driver alerts** - please note that the Omnipod driver
       presents a variety of unique alerts on the **Overview tab**, most
       of them are informational and can be dismissed while some provide
       the user with an action to take to resolve the cause of the
       triggered alert. A summary of the main alerts that you may
       encounter is listed below:

   -  **No active Pod** - No active Pod session detected. This alert can
          temporarily be dismissed by pressing **SNOOZE** but it will
          keep triggering as long as a new pod has not been activated.
          Once activated this alert is automatically silenced.

   -  **Pod suspended** - Informational alert that Pod has been
          suspended.

   -  **Setting basal profile failed. Delivery might be suspended!
          Please manually refresh the Pod status from the Omnipod tab
          and resume delivery if needed..** *-* Informational alert that
          the Pod basal profile setting has failed, and you will need to
          hit *Refresh* on the Omnipod tab.

   -  **Unable to verify whether SMB bolus succeeded. If you are sure
          that the Bolus didn't succeed, you should manually delete the
          SMB entry from Treatments.** *-* Alert that the SMB bolus
          success could not be verified, you will need to verify the
          *Last bolus* field on the Omnipod tab to see if SMB bolus
          succeeded and if not remove the entry from the Treatments tab
          .

   -  **Uncertain if "task bolus/TBR/SMB" completed, please manually
          verify if it was successful. -** Due to the way that the
          RileyLink and Omnipod communicate, situations can occur where
          it is *uncertain* if a command was successfully processed. The
          need to inform the user of this uncertainty was necessary.

    Below are a few examples of when an uncertain notification can
    occur.

-  **Boluses** - Uncertain boluses cannot be automatically verified. The
       notification will remain until the next bolus but a manual pod
       refresh will clear the message. *By default alerts beeps are
       enabled for this notification type as the user will manually need
       to verify them.*

-  **TBRs, Pod Statuses, Profile Switches, Time Changes** - a manual pod
       refresh will clear the message. By default alert beeps are
       disabled for this notification type.

-  **Pod Time Deviation -** When the time on the pod and the time your
       phone deviates too much then it is difficult for AAPS loop to
       function and make accurate predictions and dosage
       recommendations. If the time deviation between the pod and the
       phone is more than 5 minutes then AAPS will report the pod is in
       a Suspended state under Pod status with a HANDLE TIME CHANGE
       message. An additional **Set Time** icon will appear at the
       bottom of the Omnipod (POD) tab. Clicking Set Time will
       synchronize the time on the pod with the time on the phone and
       then you can click the RESUME DELIVERY button to continue normal
       pod operations.

Best Practices
==============

Optimal Omnipod and RileyLink Positioning
-----------------------------------------

The antenna used on the RileyLink to communicate with an Omnipod pod is
a 433 MHz helical spiral antenna. Due to its construction properties it
radiates an omni directional signal like a three dimensional doughnut
with the z-axis representing the vertical standing antenna. This means
that there are optimal positions for the RileyLink to be placed,
especially during pod activation and deactivation routines.

|image107|

    *(Fig 1. Graphical plot of helical spiral antenna in an
    omnidirectional pattern*)

Because of both safety and security concerns, pod *activation* and
*deactivation* has to be done at a range *closer (~50 cm away or less)*
than other operations such as giving a bolus, setting a TBR or simply
refreshing the pod status. Due to the nature of the signal transmission
from the RileyLink antenna it is NOT recommended to place the pod
directly on top of the RileyLink.

The image below shows the optimal way to position the RileyLink during
pod activation and deactivation procedures. The pod may activate in
other positions but you will have the most success using the position in
the image below.

*Note: If after optimally positioning the pod and RileyLink
communication fails, this may be due to a low battery which decreases
the transmission range of the RileyLink antenna. To avoid this issue
make sure the RileyLink is properly charged or connected directly to a
charging cable during this process.*

|image108|

Where to get help for Omnipod driver
====================================

All of the development work for the Omnipod driver is done by the
community on a volunteer basis; we ask that you please be considerate
and use the following guidelines when requesting assistance:

-  **Level 0:** Read the relevant section of this wiki to ensure you
       understand how the functionality with which you are experiencing
       difficulty is supposed to work.

-  **Level 1:** If you are still encountering problems that you are not
       able to resolve by using this wiki, then please go to the
       *#androidaps* channel on **Discord** by using `*this invite
       link* <https://discord.com/invite/NhEUtzr>`__.

-  **Level 2:** Search existing issues to see if your issue has already
       been reported; if not, please create a new
       `*issue* <https://github.com/nightscout/AndroidAPS/issues>`__ and
       attach your `*log
       files* <https://androidaps.readthedocs.io/en/latest/CROWDIN/sk/Usage/Accessing-logfiles.html>`__.

-  **Be patient - most of the members of our community consist of
       good-natured volunteers, and solving issues often requires time
       and patience from both users and developers.**

Latest development version
==========================

Instructions on the latest features are often discussed on the Discord
channel and documented on the `*project's
wiki* <https://github.com/AAPS-Omnipod/AndroidAPS/wiki>`__ page. Most
users should use the latest AAPS omnipod bundled driver (available as of
2.8) for the latest stable release of the omnipod driver.

If you are interested in development progress, please see the
*omnipod-eros-testers* channel on the WeAreNotWaiting **Discord
server**. This channel’s intended audience is *test users and
developers* to answer questions or discuss Omnipod driver beta and
development versions. Use the invite link below to join this channel:

-  `*Join the omnipod-eros-testing channel on
       Discord* <https://discord.gg/NhEUtzr>`__

.. |image0| image:: media/image50.png
   :width: 0.15300in
   :height: 0.17000in
.. |image1| image:: media/image3.png
   :width: 2.48000in
   :height: 4.27000in
.. |image2| image:: media/image72.png
   :width: 2.48000in
   :height: 4.27000in
.. |image3| image:: media/image10.png
   :width: 0.20000in
   :height: 0.17000in
.. |image4| image:: media/image56.png
   :width: 0.20000in
   :height: 0.16667in
.. |image5| image:: media/image76.png
   :width: 2.48000in
   :height: 4.27000in
.. |image6| image:: media/image27.png
   :width: 2.48000in
   :height: 4.27000in
.. |image7| image:: media/image86.png
   :width: 2.48000in
   :height: 4.27000in
.. |image8| image:: media/image95.png
   :width: 0.37083in
   :height: 0.45030in
.. |image9| image:: media/image66.png
   :width: 0.37000in
   :height: 0.45000in
.. |image10| image:: media/image56.png
   :width: 0.20000in
   :height: 0.16667in
.. |image11| image:: media/image63.png
   :width: 2.48000in
   :height: 4.26560in
.. |image12| image:: media/image59.png
   :width: 2.48000in
   :height: 4.23584in
.. |image13| image:: media/image81.png
   :width: 2.48000in
   :height: 4.24576in
.. |image14| image:: media/image57.png
   :width: 2.48000in
   :height: 4.24576in
.. |image15| image:: media/image85.png
   :width: 2.48000in
   :height: 4.26560in
.. |image16| image:: media/image40.png
   :width: 2.48000in
   :height: 4.24576in
.. |image17| image:: media/image91.png
   :width: 2.48000in
   :height: 4.26560in
.. |image18| image:: media/image22.png
   :width: 2.48000in
   :height: 4.25568in
.. |image19| image:: media/image19.png
   :width: 2.48438in
   :height: 4.27312in
.. |image20| image:: media/image53.png
   :width: 2.48000in
   :height: 4.25568in
.. |image21| image:: media/image49.png
   :width: 2.48000in
   :height: 4.25568in
.. |image22| image:: media/image68.png
   :width: 2.48000in
   :height: 4.26560in
.. |image23| image:: media/image74.png
   :width: 2.48000in
   :height: 4.23584in
.. |image24| image:: media/image18.png
   :width: 2.48438in
   :height: 4.25325in
.. |image25| image:: media/image9.png
   :width: 2.48000in
   :height: 4.25568in
.. |image26| image:: media/image60.png
   :width: 2.47232in
   :height: 4.26000in
.. |image27| image:: media/image51.png
   :width: 2.48000in
   :height: 4.24576in
.. |image28| image:: media/image36.png
   :width: 2.48000in
   :height: 4.25568in
.. |image29| image:: media/image89.png
   :width: 2.48000in
   :height: 4.27000in
.. |image30| image:: media/image78.png
   :width: 2.48924in
   :height: 4.27000in
.. |image31| image:: media/image88.png
   :width: 2.48000in
   :height: 4.24576in
.. |image32| image:: media/image31.png
   :width: 2.48000in
   :height: 4.25568in
.. |image33| image:: media/image37.png
   :width: 2.48000in
   :height: 4.25568in
.. |image34| image:: media/image23.png
   :width: 2.48000in
   :height: 4.23584in
.. |image35| image:: media/image12.png
   :width: 2.47917in
   :height: 4.25716in
.. |image36| image:: media/image15.png
   :width: 2.48000in
   :height: 4.24576in
.. |image37| image:: media/image48.png
   :width: 2.48000in
   :height: 4.25568in
.. |image38| image:: media/image20.png
   :width: 0.42429in
   :height: 0.18000in
.. |image39| image:: media/image90.png
   :width: 2.48000in
   :height: 4.23584in
.. |image40| image:: media/image80.png
   :width: 2.48000in
   :height: 4.24576in
.. |image41| image:: media/image26.png
   :width: 2.48000in
   :height: 4.25415in
.. |image42| image:: media/image44.png
   :width: 0.45000in
   :height: 0.45000in
.. |image43| image:: media/image44.png
   :width: 0.45000in
   :height: 0.45000in
.. |image44| image:: media/image94.png
   :width: 2.48000in
   :height: 4.25568in
.. |image45| image:: media/image2.png
   :width: 2.48000in
   :height: 4.25568in
.. |image46| image:: media/image70.png
   :width: 2.48000in
   :height: 4.25568in
.. |image47| image:: media/image44.png
   :width: 0.45000in
   :height: 0.45000in
.. |image48| image:: media/image14.png
   :width: 0.41327in
   :height: 0.45000in
.. |image49| image:: media/image61.png
   :width: 2.48000in
   :height: 4.25568in
.. |image50| image:: media/image14.png
   :width: 0.41327in
   :height: 0.45000in
.. |image51| image:: media/image73.png
   :width: 2.48000in
   :height: 4.25568in
.. |image52| image:: media/image84.png
   :width: 2.48000in
   :height: 4.24576in
.. |image53| image:: media/image35.png
   :width: 2.48000in
   :height: 4.23584in
.. |image54| image:: media/image14.png
   :width: 0.41327in
   :height: 0.45000in
.. |image55| image:: media/image44.png
   :width: 0.45000in
   :height: 0.45000in
.. |image56| image:: media/image29.png
   :width: 2.48000in
   :height: 4.25568in
.. |image57| image:: media/image52.png
   :width: 0.45000in
   :height: 0.45000in
.. |image58| image:: media/image52.png
   :width: 0.45000in
   :height: 0.45000in
.. |image59| image:: media/image82.png
   :width: 2.48000in
   :height: 4.24576in
.. |image60| image:: media/image67.png
   :width: 2.60417in
   :height: 4.62500in
.. |image61| image:: media/image52.png
   :width: 0.45000in
   :height: 0.45000in
.. |image62| image:: media/image62.png
   :width: 2.48000in
   :height: 4.24576in
.. |image63| image:: media/image16.png
   :width: 2.48000in
   :height: 4.25568in
.. |image64| image:: media/image6.png
   :width: 2.48000in
   :height: 4.26560in
.. |image65| image:: media/image45.png
   :width: 2.48000in
   :height: 4.27552in
.. |image66| image:: media/image32.png
   :width: 2.48000in
   :height: 4.26560in
.. |image67| image:: media/image33.png
   :width: 2.48000in
   :height: 4.26560in
.. |image68| image:: media/image1.png
   :width: 2.48000in
   :height: 4.25568in
.. |image69| image:: media/image34.png
   :width: 0.29602in
   :height: 0.29887in
.. |image70| image:: media/image4.png
   :width: 2.48000in
   :height: 4.24576in
.. |image71| image:: media/image7.png
   :width: 2.48000in
   :height: 4.25733in
.. |image72| image:: media/image34.png
   :width: 0.29602in
   :height: 0.29887in
.. |image73| image:: media/image46.png
   :width: 2.48000in
   :height: 4.25568in
.. |image74| image:: media/image43.png
   :width: 2.60417in
   :height: 4.47917in
.. |image75| image:: media/image42.png
   :width: 2.48000in
   :height: 4.24576in
.. |image76| image:: media/image93.png
   :width: 2.48000in
   :height: 4.27552in
.. |image77| image:: media/image64.png
   :width: 2.48000in
   :height: 4.27000in
.. |image78| image:: media/image77.png
   :width: 2.48000in
   :height: 4.25320in
.. |image79| image:: media/image34.png
   :width: 0.29602in
   :height: 0.29887in
.. |image80| image:: media/image13.png
   :width: 2.48000in
   :height: 4.27552in
.. |image81| image:: media/image5.png
   :width: 2.48000in
   :height: 4.27000in
.. |image82| image:: media/image17.png
   :width: 2.48000in
   :height: 4.26767in
.. |image83| image:: media/image79.png
   :width: 2.48000in
   :height: 4.25568in
.. |image84| image:: media/image28.png
   :width: 0.63650in
   :height: 0.71383in
.. |image85| image:: media/image25.png
   :width: 0.64000in
   :height: 0.71776in
.. |image86| image:: media/image87.png
   :width: 0.64000in
   :height: 0.71776in
.. |image87| image:: media/image58.png
   :width: 0.64000in
   :height: 0.71776in
.. |image88| image:: media/image47.png
   :width: 0.64000in
   :height: 0.71776in
.. |image89| image:: media/image8.png
   :width: 0.64000in
   :height: 0.71776in
.. |image90| image:: media/image41.png
   :width: 2.60417in
   :height: 4.47917in
.. |image91| image:: media/image39.png
   :width: 1.05000in
   :height: 0.54600in
.. |image92| image:: media/image11.png
   :width: 1.05000in
   :height: 0.53550in
.. |image93| image:: media/image30.png
   :width: 1.05000in
   :height: 0.53550in
.. |image94| image:: media/image55.png
   :width: 1.05000in
   :height: 0.54600in
.. |image95| image:: media/image69.png
   :width: 1.05000in
   :height: 0.53550in
.. |image96| image:: media/image21.png
   :width: 1.05000in
   :height: 0.52500in
.. |image97| image:: media/image38.png
   :width: 1.05000in
   :height: 0.54600in
.. |image98| image:: media/image75.png
   :width: 1.05000in
   :height: 0.54600in
.. |image99| image:: media/image10.png
   :width: 0.20000in
   :height: 0.17000in
.. |image100| image:: media/image56.png
   :width: 0.20000in
   :height: 0.16667in
.. |image101| image:: media/image56.png
   :width: 0.20000in
   :height: 0.16667in
.. |image102| image:: media/image71.png
   :width: 2.48000in
   :height: 4.23584in
.. |image103| image:: media/image50.png
   :width: 0.20838in
   :height: 0.23071in
.. |image104| image:: media/image24.png
   :width: 2.48000in
   :height: 4.27552in
.. |image105| image:: media/image65.png
   :width: 2.26000in
   :height: 7.37664in
.. |image106| image:: media/image54.png
   :width: 2.48000in
   :height: 5.97184in
.. |image107| image:: media/image83.png
   :width: 4.33000in
   :height: 3.12163in
.. |image108| image:: media/image92.png
   :width: 6.50000in
   :height: 3.65278in
