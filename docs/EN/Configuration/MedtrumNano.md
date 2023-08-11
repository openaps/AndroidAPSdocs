# Medtrum Nano

**Planned but not commited for AAPS 3.2 (next version)!**

## Pump capabilities with AAPS
* Automatic DST and timezone handling
* All loop functionality supported (Bolus + Temporary basal)
* Extended bolus not supported by AAPS driver

## Hardware and Software Requirements
* **Compatible Android phone** with a BLE Bluetooth connection 
    - See AAPS requirements (TODO Link)
* **Compatible Medtrum pumpbase and patches**
    - Currently Medtrum Nano pumpbase refs: **MD0201** and **MD8201** are supported. If you have an unsupported model and can donate the hardware or you can help with testing contact us at discord (TODO: Hyperlink) for support.

## Before you begin

**SAFETY FIRST** Do not attempt this process in an environment where you cannot recover from an error (extra pods, insulin, and phone devices are must-haves).

**The PDM and Medtrum App will not work with a patch that is activated by AAPS.**
Previously you used your PDM or Medtrum app to send commands to your pump. For security reasons you can only use the activated patch with the device you have activated it.

*This does NOT mean you should throw away your PDM, it is recommended to keep it around as a backup and for emergencies, for instance when your phone gets lost or AAPS is not working correctly.*

**Your pump will not stop delivering insulin when it is not connected to AAPS**
Default basal rates are programmed on the pump on activation as defined in the current active profile.
As long as AAPS is operational it will send basal rate commands that run for a maximum of 120 minutes. When for some reason the pod does not receive any new commands (for instance because communication was lost due to Pod - phone distance) the pump will automatically fall back to default basal rates.

**30 min Basal Rate Profiles are NOT supported in AAPS.**
**The AAPS Profile does not support a 30 minute basal rate time frame**
If you are new to AAPS and are setting up your basal rate profile for the first time, please be aware that basal rates starting on a half-hour basis are not supported, and you will need to adjust your basal rate profile to start on the hour. For example, if you have a basal rate of 1.1 units which starts at 09:30 and has a duration of 2 hours ending at 11:30, this will not work. You will need to change this 1.1 unit basal rate to a time range of either 9:00-11:00 or 10:00-12:00. Even though the Medtrum pump hardware itself supports the 30 min basal rate profile increments, AAPS is not able to take them into account with its algorithms currently.

**0U/h profile basal rates are NOT supported in AAPS**
While the Medtrum pump does support a zero basal rate, since AAPS uses multiples of the profile basal rate to determine automated treatment it cannot function with a zero basal rate. A temporary zero basal rate can be achieved through the "Disconnect pump" function or through a combination of Disable Loop/Temp Basal Rate or Suspend Loop/Temp Basal Rate. 

## Setup

CAUTION: When activating a patch with AAPS you **MUST** disable all other devices that can talk to the Medtrum pumpbase. e.g. active PDM and Medtrum app. And make sure you have your pumpbase and pumpbase SN ready for activation of a new patch.

### Step 1: Select Medtrum pump

#### Option 1: New installations

When you are installing AAPS for the first time, the **Setup Wizard** will guide you through installing AAPS. Select “Medtrum” when you reach Pump selection.

(TODO: Screenshot)

When in doubt you can also select “Virtual Pump” and select “Medtrum” later, after setting up AAPS (see option 2).

#### Option 2: The Config Builder

On an existing installation you can select the **Medtrum** pump from the Config builder:

On the top-left hand corner **hamburger menu** select **Config Builder (1)**\ ➜\ **Pump**\ ➜\ **Medtrum**\ ➜\ **Settings Gear (3)** by selecting the **Enable button (2)** titled **Medtrum**. 

Selecting the **checkbox (4)** next to the **Settings Gear (3)** will allow the Medtrum overview to be displayed as a tab in the AAPS interface titled **Medtrum**. Checking this box will facilitate your access to the Medtrum commands when using AAPS and is highly recommended.

### Step 2: Change settings

Enter the Medtrum settings by tapping the **Settings Gear (3)** 

TODO: Screenshot of settings

#### Serial Number:

Enter here the serial number of your pumpbase as noted on the pumpbase. Make sure the serial number is correct and there are no spaces added. (You can either use capital or lowercase). 

NOTE: This setting can only be changed when there is no patch active.

#### Patch Expiration

This settings changes the behavior of the patch. When enabled the patch will expire after 3 days, and give a warning if you have enabled the sound. After 3 days and 8 hours the patch will stop working.

If you have this disabled, the patch will not warn you and will continue working until the battery or reservoir runs out.

#### Alarm settings

This setting changes the way the pumpbase will alert you when there is a warning or error.

- Beep > The patch will beep on alarms and warnings
- Silent > The patch will not alert you on alarms and warnings

Note: In silent mode AAPS will still sound the alarm depending on your Phone's volume settings. And if you don't respond to the alarm the patch will eventually beep.

#### Hourly Maximum Insulin

This setting changes the maximum amount of insulin that can be delivered in one hour. The default is 25U. If this limit is exceeded the patch will suspend and give an alarm. The alarm can be reset by pressing the reset button on in the overview menu see TODO: Link to overview menu.

Set this to a sensible value for your needs. 

#### Daily Maximum Insulin

This setting changes the maximum amount of insulin that can be delivered in one day. The default is 80U. If this limit is exceeded the patch will suspend and give an alarm. The alarm can be reset by pressing the reset button on in the overview menu see TODO: Link to overview menu.

Set this to a sensible value for your needs.

### Step 3: Activate patch

**Before you continue:**
- Have your pumpbase and and patch ready.
- AAPS is properly setup and a profile is activated (TODO: Link to profile setup)
- Other devices that can talk to the pumpbase are disabled (PDM and Medtrum app)

#### Activate patch from the Medtrum overview

Go to the Medtrum TAB in the AAPS interface and select the **Change Patch** button.

### Deactivate patch

### Resume interrupted activation

## Overview

## Troubleshooting

### Activation interrupted

If the activation process is interrupted for example by and empty phone battery or phone crash. The activation process can be resumed by going to the change patch screen and follow the steps to resume the activation as outlined here: TODO

### Preventing patch faults

The patch can give a variety of errors. To prevent frequent errors:
- Make sure the pumpbase is properly seated in the patch and no gaps are visible.
- When filling the patch do not apply excessive force to the plunger. Do not try to fill the patch beyond the maximum that applies to your model.
## Where to get help

All of the development work for the Medtrum driver is done by the community on a **volunteer** basis; we ask that you to remember that fact and use the following guidelines before requesting assistance:

-  **Level 0:** Read the relevant section of this documentation to ensure you understand how the functionality with which you are experiencing difficulty is supposed to work.
-  **Level 1:** If you are still encountering problems that you are not able to resolve by using this document, then please go to the *#AAPS* channel on **Discord** by using [this invite link](https://discord.gg/4fQUWHZ4Mw).
-  **Level 2:** Search existing issues to see if your issue has already been reported at [Issues](https://github.com/nightscout/AAPS/issues)
if it exists, please confirm/comment/add information on your problem.
If not, please create a [new issue](https://github.com/nightscout/AndroidAPS/issues) and attach [your log files](../Usage/Accessing-logfiles.md).
-  **Be patient - most of the members of our community consist of good-natured volunteers, and solving issues often requires time and patience from both users and developers.**
