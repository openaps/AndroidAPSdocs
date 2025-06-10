# העדפות

- **Open preferences** by clicking the three-dot menu on the top right side of the home screen.

![Open preferences](../images/Pref2020_Open2.png)

- You can jump directly to preferences for a certain tab (i.e. pump tab) by opening this tab and clicking Plugin preferences.

![Open plugin preferences](../images/Pref2020_OpenPlugin2.png)

- **Sub-menus** can be opened by clicking the triangle below the sub-menu title.

![Open submenu](../images/Pref2020_Submenu2.png)

- With the **filter** on top of the preferences screen you can quickly access certain preferences. Just start typing part of the text you are looking for.

![Preferences filter](../images/Pref2021_Filter.png)

```{contents}
:backlinks: entry
:depth: 2
```

(Preferences-general)=
## General

![Preferences > General](../images/Pref2020_General.png)

**Units**

- Set units to mmol/l or mg/dl depending on your preferences.

**Language**

- New option to use phone's default language (recommended).

- In case you want **AAPS** in a different language than your standard phone language, you can choose from a broad variety.

- If you use different languages, you might sometimes see a language mix. This is due to an android issue where overriding the default android language sometimes doesn't work.
- Setting hidden in [simple mode](#preferences-simple-mode).

(preferences-simple-mode)= **Simple mode**

The **simple mode** is activated by default when you first install **AAPS**. In **simple mode**, a significant amount of settings is hidden and preferences are replaced by predefined values. [Additional graphs](#AapsScreens-section-g-additional-graphs) on the HomePage are also predefined for you. You should switch off Simple mode once you become familiar with **AAPS** user interface and settings.

**Patient name**

- Can be used if you have to differentiate between multiple setups (i.e. two T1D kids in your family).
- Displayed in the [Dual Watchface](../WearOS/WearOsSmartwatch.md).

(Preferences-skin)=
### Skin

Setting hidden in [simple mode](#preferences-simple-mode).

You can choose from four types of skins:

![Select skin](../images/Pref2021_SkinWExample.png)

'Low resolution skin' comes with shorter labels and age/level removed to have more available space on a very low resolution screen.

Difference between the other skins depends on the phone's display orientation:

#### Portrait orientation

- **Original Skin** and **Buttons are always displayed on bottom of screen** are identical
- **Large Display** has an increased height for all graphs compared to other skins

#### Landscape orientation

- Using **Original Skin** and **Large Display**, you have to scroll down to see buttons at the bottom of the screen

- **Large Display** has an increased height for all graphs compared to other skins

![Skins depending on phone's display orientation](../images/Screenshots_Skins.png)

(Preferences-protection)=
## Protection (הגנה בסיסמאות)

![Preferences > General - Protection](../images/Pref2020_General2.png)

(Preferences-master-password)=
### Master password

Mandatory to be able to [export settings](../Maintenance/ExportImportSettings.md) as they are encrypted from version 2.7.

**Biometric protection may not work on OnePlus phones. This is a known issue of OnePlus on some phones.**

![Set master password](../images/MasterPW.png)

### Settings protection

- Protect your settings with a password or phone's biometric authentication (i.e. [child is using **AAPS**](../RemoteFeatures/RemoteMonitoring.md)). If you enable this feature, you will be prompted for authentication each time you want to access any Preferences related view.

- Custom password should be used if you want to use master password just for securing [exported settings](../Maintenance/ExportImportSettings.md), and use a different one for editing the preferences.

- If you are using a custom password click on line "Settings password" to set password as described [above](#Preferences-master-password).

![Protection (הגנה בסיסמאות)](../images/Pref2020_Protection.png)

### Application protection

If the app is protected, you must enter the password or use the phone's biometric authentication to open **AAPS**.

**AAPS** will shut down immediately if a wrong password is entered - but will still run in background if it was previously opened successfully.

### Bolus protection

- Bolus protection might be useful if **AAPS** is used by a small child and you [bolus via SMS](../RemoteFeatures/SMSCommands.md).

- In the example below you see the prompt for biometric protection. If biometric authentication does not work, click in the space above the white prompt and enter thr master password.

![Prompt biometric protection](../images/Pref2020_PW.png)

### Password and PIN retention

Define how long (in seconds), the preferences or bolus functionalities remain unlocked after you successfully enter the password.

## סקירה כללית

In the **Overview** section, you can define the preferences for the home screen.

![Preferences > Overview](../images/Pref2020_OverviewII.png)

### Keep screen on

Option 'Keep screen on' will force Android to keep the screen on at all times. This is useful for presentations etc. But it consumes a lot of battery power. Therefore, it is recommended to connect the smartphone to a charger cable.

(Preferences-buttons)=
### מקשים

- Define which buttons are visible on the bottom of your home screen.
- Setting hidden in [simple mode](#preferences-simple-mode).

![Preferences > Buttons](../images/Pref2020_OV_Buttons.png)

- The **Increment** options allow you to define the amount for the three buttons in the carb and insulin dialogues, for easy entry.

![Preferences > Buttons > Insulin](../images/Pref2020_OV_Buttons2.png)

![Preferences > Buttons > Carbs](../images/Pref2020_OV_Buttons3.png)

(Preferences-quick-wizard)=
### אשף מהיר

Create customized buttons for certain standard meals or snacks which will be displayed on the home screen. Useful for standard meals frequently eaten.

For each button, you define the carbs and calculation method for the bolus. Then, you define during which time period the button will be visible on your home screen - just one button per period. The button will not be visible if outside the specified time range or if you have enough IOB to cover the carbs defined in the QuickWizard button. If different times are specified for the different meals you will always have the appropriate standard meal button on the home screen, depending on the time of day.

![Preferences > Quick Wizard Button Setup](../images/Pref2020_OV_QuickWizard.png)

If you click the quick wizard button **AAPS** will calculate and propose a bolus for those carbs based on your current ratios (considering blood glucose value or insulin on board if set up).

The proposal has to be confirmed before insulin is delivered.

![Preferences > Quick Wizard Button](../images/Pref2020_OV_QuickWizard2.png)

Only one QuickWizard button can show up at the same time. If you want to execute a different one : long press on the Quick Wizard button currently showing. It will take you to the list of all Quick Wizard options. To execute one, long press on it. You will have to confirm before execution.

(Preferences-default-temp-targets)=
### Default temp targets

Setting hidden in [simple mode](#preferences-simple-mode).

[Temporary targets (TT)](../DailyLifeWithAaps/TempTargets.md) allow you to change your blood glucose target for a certain time period. When setting a default TT, you can easily change your target for activity, eating soon etc.

Here you can change the target and the duration for each predefined TT. Preset values are:

* Eating soon: target 72 mg/dL / 4.0 mmol/l, duration 45 min
* Activity: target 140 mg/dL / 7.8 mmol/l, duration 90 min
* Hypo: target 125 mg/dL / 6.9 mmol/l, duration 45 min

![Preferences > Default temp targets](../images/Pref2020_OV_DefaultTT.png)

Learn how to [activate Temp Targets here](#TempTargets-where-can-i-select-a-temp-target).

### Fill/Prime standard insulin amounts

Setting hidden in [simple mode](#preferences-simple-mode).

If you want to fill the tube or prime cannula through **AAPS** you can do this through the [**Actions** tab](#screens-action-tab).

Pre-set values can be defined in this dialogue. Choose the default amounts of the three buttons in fill/prime dialogue, depending on the length of your catheter.

(Preferences-range-for-visualization)=
### Range for visualization

Choose the high and low marks for the BG-graph on **AAPS** overview and smartwatch. It is only the visualization, not the target range for your BG. Example: 70 - 180 mg/dl or 3.9 - 10 mmol/l

![Preferences > Range for visualization](../images/Pref2020_OV_Range2.png)

### Shorten tab titles

Setting hidden in [simple mode](#preferences-simple-mode).

Useful to see more tab titles on screen.

For example the 'OpenAPS AMA' tab becomes 'OAPS', 'OBJECTIVES' becomes 'OBJ' etc.

![Preferences > Tabs](../images/Pref2020_OV_Tabs.png)

(Preferences-show-notes-field-in-treatments-dialogs)=
### Show notes field in treatments dialogs

Setting hidden in [simple mode](#preferences-simple-mode).

Gives you the option to add short text notes to your treatments (bolus wizard, carbs, insulin...)

![Preferences > Notes in treatment dialogs](../images/Pref2020_OV_Notes.png)

(Preferences-status-lights)=
### אורות חיווי

Setting hidden in [simple mode](#preferences-simple-mode).

Status lights give a visual warning for:

- גיל חיישן
- Sensor battery level for certain smart readers (see [screenshots page](#screens-sensor-level-battery) for details).
- גיל אינסולין (משך השימוש במכל האינסולין הנוכחי)
- רמת המכל (יחידות)
- גיל הצינורית
- Pump battery age
- Pump battery level (%)

If the warning threshold is exceeded, values will be shown in yellow. If the critical threshold is exceeded, values will be shown in red.

The last option allows you to import those settings from Nightscout if defined there. See [Nightscout documentation](https://nightscout.github.io/nightscout/setup_variables/#age-pills) for more information.

![Preferences > Status Lights](../images/Pref2020_OV_StatusLights2.png)

(Preferences-deliver-this-part-of-bolus-wizard-result)=
### Deliver this part of bolus wizard result

Set the [default percentage](#AapsScreens-section-j) of the bolus calculated when using the bolus wizard.

Default is 100%: no correction. Even when setting a different value here, you can still change each time you use the bolus wizard. If this setting is 75 % and you had to bolus 10U, the bolus wizard will propose a meal bolus of only 7.5 units.

When using [SMB](#objectives-objective9), many people do not meal-bolus 100% of needed insulin, but only a part of it (e.g. 75 %) and let the SMB with UAM (Unattended Meal Detection) do the rest. Using a value lower than 100% here can be useful:
* for people with slow digestion: sending all the bolus upfront can cause hypo because the insulin action is faster than the digestion.
* to leave more room to **AAPS** to deal by itself with **BG rise**. In both cases, **AAPS** will compensate for the missing part of the bolus with SMBs, if/when deemed adequate.

### Enabled bolus advisor

Setting hidden in [simple mode](#preferences-simple-mode).

![Bolus Advisor](../images/BolusAdvisor.png)

When enabled, when you use the bolus wizard as you are in hyperglycemia, you will get a warning, prompting you if you wish to pe-bolus and eat later, when your **BG** gets back in range.

### Enabled bolus reminder

Setting hidden in [simple mode](#preferences-simple-mode).

% todo

(Preferences-advanced-settings-overview)=
### Advanced Settings (Overview)

![Preferences > Advanced Settings](../images/Pref2021_OV_Adv.png)

#### Superbolus

Setting hidden in [simple mode](#preferences-simple-mode).

Option to enable superbolus in bolus wizard.

[Superbolus](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/) is a concept to "borrow" some insulin from basal rate in the next two hours to prevent spikes. It is different from *super micro bolus*!

Use with caution and do not enable it until you learn what it really does. Basically, the basal for the next two hours is added to the bolus and a two hour zero-temp activated. **AAPS looping functions will be disabled - so use with care! If you use SMB **AAPS** looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](#Open-APS-features-max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

## בטיחות טיפולים

(preferences-patient-type)=
### Patient type

- Safety limits are set based on the age you select in this setting.
- If you start hitting these hard limits (like max bolus) it's time to move one step up.
- It's a bad idea to select higher than real age because it can lead to overdosing by entering the wrong value in the insulin dialog (by skipping the decimal dot, for example).
- If you want to know the actual numbers for these hard-coded safety limits, scroll to the algorithm feature you are using on [this page](../DailyLifeWithAaps/KeyAapsFeatures.md).

### Max allowed bolus

- Defines the maximum amount of bolus insulin, in insulin units, that **AAPS** is allowed to deliver at once.
- This setting exists as a safety limit to prevent the delivery of a massive bolus due to accidental input or user error.
- It is recommended to set this to a sensible amount that corresponds roughly to the maximum amount of bolus insulin that you are ever likely to need for a meal or correction dose.
- This restriction is also applied to the results of the bolus calculator.

### Max allowed carbs

- Defines the maximum amount of carbs, in grams, that **AAPS** bolus calculator is allowed to dose for.
- This setting exists as a safety limit to prevent the delivery of a massive bolus due to accidental input or user error.
- It is recommended to set this to a sensible amount that corresponds roughly to the maximum amount of carbs that you are ever likely to need for a meal.

## לולאה

(Preferences-aps-mode)=
### APS mode
Switch between Open Loop, Closed Loop and Low Glucose Suspend (LGS).

![Config builder - loop mode](../images/ConfigBuilder_LoopLGS.png)

(Preferences-pen-loop)=
#### Open Loop
**AAPS** continuously evaluates all available data (IOB, COB, BG...) and makes treatment suggestions (temporary basal rates) on how to adjust your therapy if necessary.

The suggestions will not be executed automatically (as in closed loop). The suggestions have to be enacted by the user manually into the pump (if using virtual pump) or by using a button if **AAPS** is connected to a real pump.

This option is for getting to know how **AAPS** works or if you are using an unsupported pump. You will be in Open Loop, no matter what choice you make here, until the end of **[Objective 5](#objectives-objective5)**.

(preferences-closed-loop)=
#### Closed Loop

**AAPS** continuously evaluates all available data (IOB, COB, BG...) and automatically adjusts the treatment if necessary (_i.e._ without further intervention by you) to reach the set [target range or value](#profile-glucose-targets) (bolus delivery, temporary basal rate, insulin switch-off to avoid hypo etc.).

The Closed Loop works within numerous safety limits, which can be set individually.

Closed Loop is only possible if you are in **[Objective 6](#objectives-objective6)** or higher and use a supported pump.

#### Low Glucose Suspend (LGS)

In this mode, [maxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over) is set to zero.

This means that if blood glucose is dropping, **AAPS** can reduce the basal for you. But if blood glucose is rising, no automatic correction will be made. Your basal rates will remain the same as defined in your current **Profile**. Only if IOB is negative (from a previous Low Glucose Suspend) additional insulin will be given to lower **BG**.

(Preferences-minimal-request-change)=
### Minimal request change

When using **Open loop**, you will receive notifications every time **AAPS** recommends adjusting the basal rate. To reduce the number of notifications you can either use a [wider bg target range](#profile-glucose-targets) or increase the percentage of the minimal request rate. זוהי ההגדרה של השינוי היחסי הדרוש כדי להפעיל התראה על המלצה על שינוי.

## Advanced Meal Assist (AMA) או סופר מיקרו בולוס (SMB)

Depending on your settings in [Config builder > APS](../SettingUpAaps/ConfigBuilder.md) you can choose between two algorithms:

- [Advanced meal assist (OpenAPS AMA)](#Open-APS-features-advanced-meal-assist-ama) - state of the algorithm in 2017
- [Super Micro Bolus (OpenAPS SMB)](#Open-APS-features-super-micro-bolus-smb) - most recent algorithm recommended for beginners

As of [**AAPS** version 3.3](#version3300), [Dynamic ISF](../DailyLifeWithAaps/DynamicISF.md) feature has been moved as part of OpenAPS SMB.

### OpenAPS AMA

All the settings for OpenAPS AMA are described in the dedicated section in [Key AAPS Features > Advanced Meal Assist (AMA)](#Open-APS-features-advanced-meal-assist-ama).

(Preferences-openaps-smb-settings)=
### OpenAPS SMB

All the settings for OpenAPS SMB are described in the dedicated section in [Key AAPS Features > Super Micro Bolus (SMB)](#Open-APS-features-super-micro-bolus-smb).

## הגדרות ספיגה

(Preferences-min_5m_carbimpact)=
### min_5m_carbimpact

Setting hidden in [simple mode](#preferences-simple-mode).

The algorithm uses BGI (blood glucose impact) to determine when [carbs are absorbed](../DailyLifeWithAaps/CobCalculation.md).

At times when carb absorption can’t be dynamically worked out based on your blood's reactions, **AAPS** inserts a default decay to your carbs. Basically, it is a failsafe. This value is only used during gaps in **CGM** readings or when physical activity “uses up” all the blood glucose rise that would otherwise cause **AAPS** to decay COB.

To put it simply: The algorithm "knows" how your BGs *should* behave when affected by the current dose of insulin etc. Whenever there is a positive deviation from the expected behaviour, some carbs are absorbed/decayed. שינוי גדול=הרבה פחמימות וכו'.

The min_5m_carbimpact does define the default carb absorption impact per 5 minutes. For more details see [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html?highlight=carbimpact#min-5m-carbimpact).

Standard value for AMA is 5, for SMB it's 8.

The COB graph on the home screen indicates when min_5m_impact is being used by putting an orange circle at the top.

![COB graph](../images/Pref2020_min_5m_carbimpact.png)

### Meal max absorption time

If you often eat high fat or protein meals you will need to increase your meal absorption time.

### Advanced settings - autosens ratio

![הגדרות ספיגה](../images/Pref2020_Absorption.png)

- Define min. and max. [autosens](#Open-APS-features-autosens) ratio.
- Normally standard values (max. 1.2 and min. 0.7) should not be changed.

## Pump

### BT Watchdog

Activate BT watchdog if necessary (e.g. for Dana pumps). It switches off bluetooth for one second if no connection to the pump is possible. This may help on some phones where the bluetooth stack freezes.

## הגדרות משאבה

The options here will vary depending on which pump driver you have selected in [Config Builder > Pump](#Config-Builder-pump).  Pair and set your pump up according to the [pump related instructions](../Getting-Started/CompatiblePumps.md).

## Tidepool

More information on the dedicated [Tidepool](../SettingUpAaps/Tidepool.md) page.

(Preferences-nsclient)=
## NSClient

![NSClient](../images/Pref2020_NSClient.png)

Original communication protocol, can be used with older Nightscout versions.

- Set your *Nightscout URL* (i.e. <https://yoursitename.yourplaform.dom>).
- **Make sure that the URL is WITHOUT /api/v1/ at the end.**
- The *[API secret](https://nightscout.github.io/nightscout/setup_variables/#api-secret-nightscout-password)* (a 12 character password recorded in your Nightscout variables).
- This enables data to be read and written between both the Nightscout website and **AAPS**.
- Double check for typos here if you are stuck in Objective 1.

## NSClientV3

![NSClientV3](../images/Pref2024_NSClientV3.png)

[New protocol introduced with AAPS 3.2.](#Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS) Safer and more efficient.

```{admonition} V3 data uploaders
:class: warning

When using NSClientV3, all uploaders must be using the API V3. Since most are not compatible yet, this means **you must let **AAPS** upload all data** (BG, treatments, ...) to Nightscout and disable all other uploaders if they're not V3 compliant.
```

- Set your *Nightscout URL* (i.e. <https://yoursitename.yourplaform.dom>).
- **Make sure that the URL is WITHOUT /api/v1/ at the end.**
- In Nightscout, create an *[Admin token](https://nightscout.github.io/nightscout/security/#create-a-token)* (requires [Nightscout 15](https://nightscout.github.io/update/update/) to use the V3 API) and enter it in the **NS access token** (not your API Secret!).
- This enables data to be read and written between both the Nightscout website and **AAPS**.
- Double check for typos here if you are stuck in Objective 1.
- Leave Connect to websockets enabled (recommended).

### Synchronization

Synchronization choices will depend on the way you will want to use **AAPS**.

You can select which data you want to [upload and download to or from Nightscout](#Nightscout-aaps-settings).

### Alarm options

![Alarm options](../images/Pref2024_NSClient_Alarms.png)

- Alarm options allows you to select which Nightscout alarms to use through the app. **AAPS** will alarm when a Nightscout alarm triggers.
- For the alarms to sound you need to set the Urgent High, High, Low and Urgent Low alarm values in your [Nightscout variables](https://nightscout.github.io/nightscout/setup_variables/#alarms).
- They will only work whilst you have a connection to Nightscout and are intended for parent/caregivers.
- If you have the **CGM** source on your phone (i.e. xDrip+ or BYODA) then use those alarms instead of Nightscout Alarms.
- Create notifications from Nightscout [announcements](https://nightscout.github.io/nightscout/discover/#announcement) will echo Nightscout announcements in the **AAPS** notifications bar.
- You can change stale data and urgent stale data alarms threshold when no data is received from Nightscout after a certain time.

### Connection settings

![NSClient connection settings](../images/ConfBuild_ConnectionSettings.png)

- Connection settings define when Nightscout connection will be enabled.
- Restrict Nightscout upload to Wi-Fi only or even to certain Wi-Fi SSIDs.
- If you want to use only a specific Wi-Fi network you can enter its Wi-Fi SSID.
- Multiple SSIDs can be separated by semicolon.
- To delete all SSIDs enter a blank space in the field.

(Preferences-advanced-settings-nsclient)=
### Advanced settings (NSClient)

![NS Client advanced settings](../images/Pref2024_NSClientAdv.png)

Options in advanced settings are self-explanatory.

## תקשורת SMS

More information on the dedicated [SMS Commands](../RemoteFeatures/SMSCommands.md) page.

## אוטומציה

Select which location service shall be used:

- Use passive location: **AAPS** only takes locations if other apps are requesting it
- Use network location: Location of your Wi-Fi
- Use GPS location (Attention! עלול לגרום לניצול מוגבר של הסוללה!)

## התראות מקומיות

![התראות מקומיות](../images/Pref2020_LocalAlerts.png)

Settings should be self-explanatory.

(preferences-maintenance-settings)=
## הגדרות תחזוקה

![הגדרות תחזוקה](../images/Pref2020_Maintenance.png)

**Email recipient**: Standard recipient of logs is <logs@aaps.app>.

**Data Choices**

![אפשרויות נתונים](../images/Pref2020_DataChoice.png)

You can help develop **AAPS** further by sending crash reports to the developers.

**Unattended Settings Export**<br/> By enabling this feature, you allow **AAPS** to execute settings exports without user intervention. For this the master password is securely stored on your phone (only) at the next manually export. The stored password will be used for up to 4 weeks. After 4 weeks you will be notified the password is about to expire. During a grace period of 1 week, the password can then be refreshed by manually exporting settings from the maintenance menu.

After the grace period of 1 week has passed the stored password expires and any automated settings export will abort while notifying the user, asking to reenter the password.  [(**Automated settings exports**)](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export)  will be logged to the AAPS 'Careportal' and 'User entry' lists under Treatments.

After enabling this option, make sure to perform a manual settings export, where you will be requested for your password, so that **AAPS** can store it.

(preferences-maintenance-logdirectory)= Maintenance settings also include the **AAPS** directory, which can be found directly under the Maintenance tab. This setting allows the user to choose a directory on their phone where **AAPS** will store preferences, logs, and other files.

![Pref2020_Maintenance_Directory.png](../images/Pref2020_Maintenance_Directory.png)

## Open Humans

You can help the community by donating your data to research projects! Details are described on the [Open Humans page](../SupportingAaps/OpenHumans.md).

In Preferences, you can define when data shall be uploaded
- only if connected to Wi-Fi
- only if charging
