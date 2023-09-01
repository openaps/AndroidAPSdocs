# Medtrum Nano

These instructions are for configuring the Medtrum Nano insulin pump. **The Medtrum driver is planned but not commited for AAPS 3.2 (next version)!**

This software is part of a DIY artificial pancreas solution and is not a product but requires YOU to read, learn, and understand the system, including how to use it. You alone are responsible for what you do with it.

## Pump capabilities with AAPS
* All loop functionality supported (SMB, TBR etc)
* Automatic DST and timezone handling
* Extended bolus not supported by AAPS driver

## Hardware and Software Requirements
* **Compatible Medtrum pump base and reservoir patches**
    - Currently supported is Medtrum Nano with pump base refs: **MD0201** and **MD8201**. If you have an unsupported model and are willing to donate hardware or assist with testing, please contact us via discord [**here**](https://discordapp.com/channels/629952586895851530/1076120802476441641).
* **Compatible Android phone** with a BLE Bluetooth connection 
    - See AAPS requirements (TODO Link)
* [**Continuous Glucose Monitor (CGM)**](https://androidaps.readthedocs.io/en/latest/Configuration/BG-Source.html)

## Before you begin

**SAFETY FIRST** Do not attempt this process in an environment where you cannot recover from an error (extra pods, insulin, and phone devices are must-haves). 

**The PDM and Medtrum App will not work with a patch that is activated by AAPS.**
Previously you may have used your PDM or Medtrum app to send commands to your pump. For security reasons you can only use the activated patch with the device or app that was used to activate it.

*This does NOT mean that you should throw away your PDM. It is recommended to keep it somewhere safe as a backup in case of emergencies, for instance if your phone gets lost or AAPS is not working correctly.*

**Your pump will not stop delivering insulin when it is not connected to AAPS**
Default basal rates are programmed on the pump during activation as defined in the current active profile.
As long as AAPS is operational, it will send basal rate commands that run for a maximum of 120 minutes. If for some reason the pod does not receive any new commands (for instance because communication was lost due to pump - phone distance) the pump will automatically fall back to default basal rates.

**30 min Basal Rate Profiles are NOT supported in AAPS.**
**The AAPS Profile does not support a 30 minute basal rate time frame**
If you are new to AAPS and are setting up your basal rate profile for the first time, please be aware that basal rates starting on a half-hour basis are not supported, and you will need to adjust your basal rate profile to start on the hour. For example, if you have a basal rate of 1.1 units which starts at 09:30 and has a duration of 2 hours ending at 11:30, this will not work. You will need to change this 1.1 unit basal rate to a time range of either 9:00-11:00 or 10:00-12:00. Even though the Medtrum pump hardware itself supports the 30 min basal rate profile increments, AAPS is not able to take them into account with its algorithms currently.

**0U/h profile basal rates are NOT supported in AAPS**
While the Medtrum pump does support a zero basal rate, AAPS uses multiples of the profile basal rate to determine automated treatment and therefore cannot function with a zero basal rate. A temporary zero basal rate can be achieved through the "Disconnect pump" function or through a combination of Disable Loop/Temp Basal Rate or Suspend Loop/Temp Basal Rate. 

## Setup

CAUTION: When activating a patch with AAPS you **MUST** disable all other devices that can talk to the Medtrum pump base. e.g. active PDM and Medtrum app. Make sure you have your pump base and pump base SN ready for activation of a new patch.

### Step 1: Select Medtrum pump

#### Option 1: New installations

If you are installing AAPS for the first time, the **Setup Wizard** will guide you through installing AAPS. Select “Medtrum” when you reach Pump selection.

(TODO: Screenshot)

If in doubt you can also select “Virtual Pump” and select “Medtrum” later, after setting up AAPS (see option 2).

#### Option 2: The Config Builder

On an existing installation you can select the **Medtrum** pump from the Config builder:

On the top-left hand corner **hamburger menu** select **Config Builder (1)**\ ➜\ **Pump**\ ➜\ **Medtrum**\ ➜\ **Settings Gear (3)** by selecting the **Enable button (2)** titled **Medtrum**. 

Selecting the **checkbox (4)** next to the **Settings Gear (3)** will allow the Medtrum overview to be displayed as a tab in the AAPS interface titled **Medtrum**. Checking this box will facilitate your access to the Medtrum commands when using AAPS and is highly recommended.

### Step 2: Change settings

Enter the Medtrum settings by tapping the **Settings Gear (3)** 

TODO: Screenshot of settings

#### Serial Number:

Enter the serial number of your pump base here as noted on the pump base. Make sure the serial number is correct and there are no spaces added (You can either use capital or lowercase). 

NOTE: This setting can only be changed when there is no patch active.

#### Patch Expiration

This setting changes the behavior of the patch. When enabled the patch will expire after 3 days and give an audible warning if you have sound enabled. After 3 days and 8 hours the patch will stop working.

If this setting is disabled, the patch will not warn you and will continue running until the patch battery or reservoir runs out.

#### Alarm settings

This setting changes the way that the pump will alert you when there is a warning or error.

- Beep > The patch will beep on alarms and warnings
- Silent > The patch will not alert you on alarms and warnings

Note: In silent mode AAPS will still sound the alarm depending on your phone's volume settings. If you do not respond to the alarm, the patch will eventually beep.

#### Hourly Maximum Insulin

This setting changes the maximum amount of insulin that can be delivered in one hour. The default is 25U. If this limit is exceeded the patch will suspend and give an alarm. The alarm can be reset by pressing the reset button on in the overview menu see TODO: Link to overview menu.

Set this to a sensible value for your insulin requirements. 

#### Daily Maximum Insulin

This setting changes the maximum amount of insulin that can be delivered in one day. The default is 80U. If this limit is exceeded the patch will suspend and give an alarm. The alarm can be reset by pressing the reset button on in the overview menu see TODO: Link to overview menu.

Set this to a sensible value for your insulin requirements.

### Step 3: Activate patch

**Before you continue:**
- Have your Medtrum Nano pump base and and reservoir patch ready.
- Make sure that AAPS is properly set up and a [profile is activated](https://androidaps.readthedocs.io/en/latest/Configuration/Config-Builder.html#config-builder-profile).
- Other devices that can talk to the Medtrum pump are disabled (PDM and Medtrum app)

#### Activate patch from the Medtrum overview Tab

Navigate to the Medtrum TAB in the AAPS interface and press the **Change Patch** button. (TODO: Screenshot)

If a patch is already active, you will be prompted to deactive this patch first - See Deactivate patch below.

Follow the prompts to fill and activate a new patch. Please note - it is important to only connect the pump base to the reservoir patch at the step when you are prompted to do so. **You must only put the pump on your body and insert the cannula when prompted to during the activation process (after priming is complete).**

1. (TODO: Activation Steps with Screenshots)

### Deactivate patch

To deactive a currently active patch, go to the Medtrum TAB in the AAPS interface and press the **Change Patch** button.

You will be asked to confirm that you wish to deactive the current patch. **Please note that this action is not reversable.** When deactivation is completed, you can press **Next** to continue the process to activate a new patch. If you are not ready to activate a new patch, press **Cancel** to return to the main screen.

If Android APS in unable to deactivate the patch (For instance because the pump base has already been removed from the reservoir patch), you may press **Discard** to forget the current patch session and make it possible to activate a new patch.

### Resume interrupted activation

## Overview

## Troubleshooting

### Activation interrupted

If the activation process is interrupted for example by and empty phone battery or phone crash. The activation process can be resumed by going to the change patch screen and follow the steps to resume the activation as outlined here: TODO

### Preventing patch faults

The patch can give a variety of errors. To prevent frequent errors:
- Make sure the pump base is properly seated in the patch and no gaps are visible.
- When filling the patch do not apply excessive force to the plunger. Do not try to fill the patch beyond the maximum that applies to your model.

## Where to get help

All of the development work for the Medtrum driver is done by the community on a **volunteer** basis; we ask that you to remember that fact and use the following guidelines before requesting assistance:

-  **Level 0:** Read the relevant section of this documentation to ensure you understand how the functionality with which you are experiencing difficulty is supposed to work.
-  **Level 1:** If you are still encountering problems that you are not able to resolve by using this document, then please go to the *#AAPS* channel on **Discord** by using [this invite link](https://discord.gg/4fQUWHZ4Mw).
-  **Level 2:** Search existing issues to see if your issue has already been reported at [Issues](https://github.com/nightscout/AAPS/issues)
if it exists, please confirm/comment/add information on your problem.
If not, please create a [new issue](https://github.com/nightscout/AndroidAPS/issues) and attach [your log files](../Usage/Accessing-logfiles.md).
-  **Be patient - most of the members of our community consist of good-natured volunteers, and solving issues often requires time and patience from both users and developers.**
