# CareLevo

The CareLevo is a tubeless patch pump made by CareMedi. Each patch holds up to 300 U of insulin and is worn for up to 7 days (168 hours). It communicates with **AAPS** over your phone's Bluetooth, with no additional device.

```{admonition} New driver
:class: warning
The CareLevo driver is new in **AAPS**. Read this whole page before you activate your first patch, and keep the pump's own instructions for use at hand.
```

The smallest dose the patch can deliver is 0.05 U. Set your basal rates in the **Profile** to a minimum of 0.05 U/h in steps of 0.05 U/h, otherwise the insulin the **Profile** expects and the insulin the patch delivers differ slightly.

```{contents} Table of contents
:depth: 1
:local: true
```

## Pump capabilities with AAPS

* Communicates with **AAPS** over your phone's native Bluetooth, without an additional communication device.
* Bolus in steps of 0.05 U.
* Basal rates from 0.05 U/h to 15 U/h in steps of 0.05 U/h, with 30-minute basal segments.
* Temporary basal rates set as an absolute rate, up to 12 hours.
* Extended bolus up to 8 hours.
* DST and timezone changes must be handled manually. The patch notifies you when the time zone changes.

## Pump Setup

1. Open the **menu** (☰) in the top-left corner of the **AAPS** main screen and select **Configuration**.
1. Select **Carelevo** in the Pump section.
1. Press the Back key to return to the main screen.

## Settings

Open the pump screen with **Manage → Pump** (or **Configuration → Pump → Open plugin**).

Open the CareLevo preferences by pressing the **Settings** (gear) icon in the upper right corner. Three settings are available:

### Low Insulin Notification Setting

The patch notifies you when the insulin remaining in the reservoir reaches the chosen amount. It can be set from 20 U to 50 U in 5 U steps. The default is 30 U. Independently of this setting, the patch raises a critical alarm and stops delivering insulin when less than 10 U remain.

### Patch Usage Notification Setting

The patch notifies you when it has been worn for the chosen number of hours, so you can plan the change. It can be set from 24 to 167 hours. The default is 116 hours.

### Patch Info Alarm

When this is on, the patch beeps when a bolus, extended bolus or temporary basal starts and when it ends. The default is off.

## The pump screen

The pump screen shows the **Bluetooth status** (No Active Patch, Disconnected or Connected), the **Serial No.** of the patch, its **Activation Time** and **Expiration**, the current **Basal Rate** and **Temp basal rate**, the **Insulin Remaining** (remaining / filled), the **Patch Time Remaining** and the **Total insulin delivered**.

The buttons depend on the state of the patch:

* **Activate Patch**: starts the activation of a new patch, see below.
* **Insulin Guide**: shows the twelve steps for filling a patch with insulin.
* **Suspend Infusion** / **Resume Infusion**: pauses and restarts insulin delivery, see below.
* **Discard Patch**: stops the current patch so a new one can be activated.

## Activating a patch

Before you start, make sure a **Profile** is active in **AAPS** and that Bluetooth is on. The patch must be activated within a limited time once it is switched on; if the time runs out, the patch raises a **Patch Application Timeout** alarm and cannot be used.

Press **Activate Patch** on the pump screen and follow the steps. You can cancel at any time before the needle is inserted; what you have entered is discarded.

### Select the insulin

Confirm the insulin you use. The patch requires rapid-acting U-100 insulin.

### Fill the patch with insulin

Fill the patch with 50 to 300 U, considering how long you will wear it. Press **Insulin Guide** if you need the filling instructions. Then tap the fill amount and select the amount you filled; **AAPS** uses it to show the insulin remaining.

### Connect the patch

1. Take the patch out of its blister and remove the needle cap.
1. Press the power button of the patch for more than one second. After the beep, tap **Search Patch**.
1. When the patch found is the right one, tap **Confirm**. Tap **Rescan** if it is not.

### Safety check

Once the patch is connected, press **Safety Check**. The patch tests itself and primes. Check that a droplet of insulin has formed at the needle tip. If no droplet is visible, press **Retry**. When the check is complete, press **Next**.

### Site and patch attachment

1. Select the site where you will wear the patch.
1. Clean the site thoroughly with an alcohol swab.
1. Remove the backing tape and attach the patch to your skin with the marked dot facing upward.
1. Press **Next** once the patch is attached.

### Insert the needle

1. Turn the safety cap in the direction of the arrow and remove it.
1. Press the applicator push button all the way down and hold it for 10 seconds. A beep sounds when the needle is inserted.
1. Remove the applicator and press **Confirm Insertion**.

If the insertion fails, **AAPS** tells you how many attempts are left. When no attempt is left, the patch raises a **Needle Insertion Error** alarm and must be replaced.

Insulin delivery starts as soon as the insertion is confirmed.

## Suspending and resuming insulin delivery

Press **Suspend Infusion** on the pump screen and select how long delivery should pause: from 30 minutes to 4 hours in 30-minute steps. Delivery does not resume by itself: when the pause is over, the patch raises a **Start Insulin** alert. Press **Resume Infusion** on the pump screen, or **Start Insulin** on the alert, and confirm.

## Discarding a patch

Press **Discard Patch** on the pump screen and confirm. Insulin delivery stops and the patch can no longer be used. Remove the patch from your body and activate a new one.

When a critical alarm has stopped the patch, the alarm offers **Deactivate Patch** instead. Pressing it discards the patch the same way.

## Alarms and notifications

The patch reports three levels of events. All of them are shown as **AAPS** notifications.

### Critical alarms

Insulin delivery has stopped. Act now:

* **Low Insulin**: less than 10 U remain. Deactivate the patch and change it.
* **Patch Expired**: the patch reached the end of its life. Deactivate the patch and change it.
* **Low Battery**: discard the patch and change it.
* **High/Low Temperature**: move to a suitable temperature, between 40 ℉ and 99 ℉ (5 ℃ and 37 ℃).
* **Auto-Off**: the patch stopped because the Auto-Off alert was ignored. Press **Start Insulin** to restart basal delivery.
* **Patch Application Timeout**, **Self-Diagnosis Failed**, **Patch Error**, **Occlusion** and **Needle Insertion Error**: deactivate the patch and change it.

### Alerts

Insulin delivery continues, but something needs your attention:

* **Low Insulin**: the reservoir reached the amount set in **Low Insulin Notification Setting**. Prepare to change the patch.
* **Patch Will Expire Soon** and **Patch Operating Life Expired**: change the patch.
* **Low Battery**: prepare to change the patch.
* **High/Low Temperature**: delivery is paused until the patch is back between 40 ℉ and 99 ℉.
* **Auto-Off**: tap **OK**. If ignored, the alert escalates to a critical alarm and delivery stops.
* **Patch Activation Incomplete**: tap **OK** to complete the activation.
* **Start Insulin**: the pause you set has ended. Tap **Start Insulin** to resume delivery.
* **Turn Bluetooth On** and **BLE Not Connected**: the phone cannot reach the patch. Turn Bluetooth on or check the patch connection.

### Notices

For information only: **Low Insulin**, **Patch Usage Time Notification** (the time set in **Patch Usage Notification Setting** has passed), **Patch Check Notification**, **Time Zone Change** and **Check Blood Glucose** (a set time after a bolus).

The patch also reports when its own low glucose suspend (**LGS**) function starts or ends. **AAPS** does not use this function; the loop handles low glucose itself.

## Where to get help

Report problems with the CareLevo driver on the [AAPS GitHub issues page](https://github.com/nightscout/AndroidAPS/issues) or in the AAPS community channels, see [Where can I get help](../GettingHelp/WhereCanIGetHelp.md).
