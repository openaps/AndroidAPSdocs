# Preferencias

- **Open preferences** by clicking the three-dot menu on the top right side of the home screen.

  ```{image} ../images/Pref2020_Open2.png
  :alt: Open preferences
  ```

- You can jump directly to preferences for a certain tab (i.e. pump tab) by opening this tab and clicking Plugin preferences.

  ```{image} ../images/Pref2020_OpenPlugin2.png
  :alt: Open plugin preferences
  ```

- **Sub-menus** can be opened by clicking the triangle below the sub-menu title.

  ```{image} ../images/Pref2020_Submenu2.png
  :alt: Open submenu
  ```

- With the **filter** on top of the preferences screen you can quickly access certain preferences. Just start typing part of the text you are looking for.

  ```{image} ../images/Pref2021_Filter.png
  :alt: Preferences filter
  ```

```{contents}
:backlinks: entry
:depth: 2
```

(Preferences-general)=
## General

**Units**

- Set units to mmol/l or mg/dl depending on your preferences.

**Language**

- New option to use phone's default language (recommended).

- In case you want AAPS in a different language than your standard phone language you can choose from a broad variety.

- If you use different languages you might sometimes see a language mix. This is due to an android issue that overriding the default android language sometimes doesn't work.

  ```{image} ../images/Pref2020_General.png
  :alt: Preferences > General
  ```

**Patient name**

- Can be used if you have to differentiate between multiple setups (i.e. two T1D kids in your family).

(Preferences-protection)=
### Protección

(Preferences-master-password)=
#### Contraseña maestra

- Necessary to be able to [export settings](../Usage/ExportImportSettings.md) as they are encrypted as of version 2.7. **Biometric protection may not work on OnePlus phones. This is a known issue of OnePlus on some phones.**

- Open Preferences (three-dot menu on top right of home screen)

- Click triangle below "General"

- Click "Master-Password"

- Enter password, confirm password and click ok.

  ```{image} ../images/MasterPW.png
  :alt: Set master password
  ```

#### Protección de ajustes

- Protect your settings with a password or phone's biometric authentication (i.e. [child is using AAPS](../Children/Children.md)).

- Custom password should be used if you want to use master password just for securing [exported settings](../Usage/ExportImportSettings.md).

- If you are using a custom password click on line "Settings password" to set password as described [above](Preferences-master-password).

  ```{image} ../images/Pref2020_Protection.png
  :alt: Protection
  ```

#### Protección de aplicación

- If app is protected you must enter password or use phone's biometric authentication to open AAPS.
- App will shut down immediately if wrong password is entered - but still run in the background if it was previously opened successfully.

#### Protección de bolo

- Bolus protection might be useful if AAPS is used by a small child and you [bolus via SMS](../Children/SMS-Commands.md).

- In the example below you see the prompt for biometric protection. If biometric authentication does not work, click in the space above the white prompt and enter master password.

  ```{image} ../images/Pref2020_PW.png
  :alt: Prompt biometric protection
  ```

(Preferences-skin)=
#### Tema

- You can choose from four types of skins:

  ```{image} ../images/Pref2021_SkinWExample.png
  :alt: Select skin + examples
  ```

- 'Low resolution skin' comes with shorter label and age/level removed to have more available space on very low resolution screen.

- Difference of other skins depend of phone's display orientation.

##### Portrait orientation

- **Original Skin** and **Buttons are always displayed on bottom of screen** are identical
- **Large Display** has an increased size of all graphs compared to other skins

##### Landscape orientation

- Using **Original Skin** and **Large Display**, you have to scroll down to see buttons at the bottom of the screen

- **Large Display** has an increased size of all graphs compared to other skins

  ```{image} ../images/Screenshots_Skins.png
  :alt: Skins depending on phone's display orientation
  ```

(Preferences-overview)=
## Inicio

- In overview section you can define preferences for home screen.

  ```{image} ../images/Pref2020_OverviewII.png
  :alt: Preferences > Overview
  ```

### Mantener pantalla activa

- Useful while giving a presentation.
- It will consume a lot of energy, so it is wise to have your phone plugged into a charger.

(Preferences-buttons)=
### Botones

- Define which buttons are visible on the bottom of your home screen.

- With the increment figure you can define amount for the three buttons in carb and insulin dialogue for easy entry.

  ```{image} ../images/Pref2020_OV_Buttons.png
  :alt: Preferences > Buttons
  ```

(Preferences-quick-wizard)=
### Asistente Rápido

- If you have a frequent snack or meal, you can use the quick wizard button to easily enter amount of carbs and set calculation basics.

- In setup you define during which time period the button will be visible on your home screen - just one button per period.

- If you click the quick wizard button AAPS will calculate and propose a bolus for those carbs based on your current ratios (considering blood glucose value or insulin on board if set up).

- The proposal has to be confirmed before insulin is delivered.

  ```{image} ../images/Pref2020_OV_QuickWizard.png
  :alt: Preferences > Quick Wizard Button
  ```

(Preferences-default-temp-targets)=
### Default temp targets

- [Temp targets (TT)](../Usage/temptarget.md) allow you to define change your blood glucose target for a certain time period.

- With setting of default TT you can easily change your target for activity, eating soon etc.

- Press long on your target in the top right corner on the home screen or use the shortcuts in the orange “Carbs” button at the bottom.

  ```{image} ../images/Pref2020_OV_DefaultTT.png
  :alt: Preferences > Default temp targets
  ```

### Llenar/Rellenar cantidad de insulina estándar

- If you want to fill tube or prime cannula through AAPS you can do this through [actions tab](Screenshots-action-tab).
- Pre-set values can be defined in this dialogue.

(Preferences-range-for-visualization)=
### Range for visualization

- Define which part of the graph on the home screen shall be you target range and be filled with green background.

  ```{image} ../images/Pref2020_OV_Range2.png
  :alt: Preferences > Range for visualization
  ```

### Título corto en pestaña

- See more tab titles on screen.

- For example the 'OpenAPS AMA' tab becomes 'OAPS', 'OBJECTIVES' becomes 'OBJ' etc.

  ```{image} ../images/Pref2020_OV_Tabs.png
  :alt: Preferences > Tabs
  ```

### Show notes field in treatments dialogs

- Gives you the option to add short text notes to your treatments (bolus wizard, carbs, insulin...)

  ```{image} ../images/Pref2020_OV_Notes.png
  :alt: Preferences > Notes in treatment dialogs
  ```

(Preferences-status-lights)=
### Luces de estado

- Las luces de estado muestran una advertencia visual para:

  - Edad del sensor
  - Sensor battery level for certain smart readers (see [screenshots page](Screenshots-sensor-level-battery) for details).
  - Edad de la insulina (días de uso del reservorio, si se utiliza)
  - Nivel del reservorio/cartucho (unidades)
  - Edad de la cánula
  - Pump battery age
  - Pump battery level (%)

- Cuando se supera el umbral de advertencia, los valores se muestran en amarillo.

- Cuando se supera el umbral crítico, los valores se muestran en rojo.

- In versions prior to AAPS 2.7 settings for status lights had to be made in Nightscout settings.

  ```{image} ../images/Pref2020_OV_StatusLights2.png
  :alt: Preferences > Status Lights
  ```

(Preferences-advanced-settings-overview)=
### Advanced Settings (Overview)

```{image} ../images/Pref2021_OV_Adv.png
:alt: Preferences > Status Lights
```

#### Deliver this part of bolus wizard result

- General setting to deliver only part of bolus wizard result.
- Only the set percentage (must be between 10 and 100) of the calculated bolus is delivered when using bolus wizard.
- The percentage is shown in bolus wizard.

#### Bolus advisor

- If you run [Bolus wizard](Screenshots-bolus-wizard) and your glucose value is above 10 mmol (180 mg/dl) a correction bolus will be offered.

- If correction bolus is accepted **no carbs** will be recorded.

- An alarm will be started when glucose value is in good level to start eating.

- You have to enter [Bolus wizard](Screenshots-bolus-wizard) again and enter the amount of carbs you want to eat.

  ```{image} ../images/Home2021_BolusWizard_CorrectionOffer.png
  :alt: Bolus advisor message
  ```

(Preferences-superbolus)=
#### Superbolo

- Option to enable superbolus in bolus wizard.
- [Superbolus](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/) is a concept to "borrow" some insulin from basal rate in the next two hours to prevent spikes.

## Treatment safety

### Patient type

- Safety limits are set based on the age you select in this setting.
- If you start hitting these hard limits (like max bolus) it's time to move one step up.
- It's a bad idea to select higher than real age because it can lead to overdosing by entering the wrong value in insulin dialog (by skipping the decimal dot, for example).
- If you want to know the actual numbers for these hard-coded safety limits, scroll to the algorithm feature you are using on [this page](../Usage/Open-APS-features.md).

### Max allowed bolus \[U\]

- Defines maximum amount of bolus insulin that AAPS is allowed to deliver at once.
- This setting exists as a safety limit to prevent the delivery of a massive bolus due to accidental input or user error.
- It is recommended to set this to a sensible amount that corresponds roughly to the maximum amount of bolus insulin that you are ever likely to need for a meal or correction dose.
- This restriction is also applied to the results of the bolus calculator.

### Max allowed carbs \[g\]

- Defines the maximum amount of carbs that AAPS bolus calculator is allowed to dose for.
- This setting exists as a safety limit to prevent the delivery of a massive bolus due to accidental input or user error.
- It is recommended to set this to a sensible amount that corresponds roughly to the maximum amount of carbs that you are ever likely to need for a meal.

## Loop

(Preferences-aps-mode)=
### APS mode

- Toggle between open and closed looping as well as low glucose suspend (LGS)
- **Open looping** means TBR suggestions are made based on your data and appear as a notification. After manual confirmation, the command to dose insulin will be transferred to pump. Only if you use virtual pump you have to enter it manually.
- **Closed looping** means TBR suggestions are automatically sent to your pump without confirmation or input from you.
- **Low glucose suspend** is similar to closed looping, but overrides the maxIOB setting to zero. This means that if blood glucose is dropping it can reduce the basal rate, but if blood glucose is rising then it will only increase the basal rate if the basal IOB is negative (e.g. from a previous Low Glucose Suspend).

(Preferences-minimal-request-change)=
### Minimal request change \[%\]

- When using open loop you will receive notifications every time AAPS recommends to adjust basal rate.
- To reduce number of notifications you can either use a wider BG target range or increase percentage of the minimal request rate.
- This defines the relative change required to trigger a notification.

(Preferences-advanced-meal-assist-ama-or-super-micro-bolus-smb)=
## Advanced Meal Assist (AMA) or Super Micro Bolus (SMB)

Depending on your settings in [config builder](../Configuration/Config-Builder.md) you can choose between two algorithms:

- [Advanced meal assist (OpenAPS AMA)](Open-APS-features-advanced-meal-assist-ama) - state of the algorithm in 2017
- [Super Micro Bolus (OpenAPS SMB)](Open-APS-features-super-micro-bolus-smb) - most recent algorithm for advanced users

### OpenAPS AMA settings

- Allows the system to high-temp more quickly after a meal bolus IF you enter carbs reliably.
- More details about the settings and Autosens can be found in the [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

#### Max U/h para la basal temporal

- Exists as a safety limit to prevent AAPS from ever being capable of giving a dangerously high basal rate.
- The value is measured in units per hour (U/h).
- It is advised to set this to something sensible. A good recommendation is to take the **highest basal rate** in your profile and **multiply it by 4**.
- For example, if the highest basal rate in your profile was 0.5 U/h you could multiply that by 4 to get a value of 2 U/h.
- See also [detailed feature description](Open-APS-features-max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal).

#### Maximum basal IOB OpenAPS can deliver \[U\]

- Amount of additional basal insulin (in units) allowed to accumulate in your body, on top of your normal basal profile.
- Once this value is reached, AAPS will stop giving additional basal insulin until your basal Insulin on Board (IOB) has decayed to within this range again.
- This value **does not consider bolus IOB**, only basal.
- This value is calculated and monitored independently of your normal basal rate. Solo se considera la insulina basal adicional por encima de la tasa normal.

When you begin looping, **it is advised to set Max Basal IOB to 0** for a period of time, while you are getting used to the system. Esto evita que AAPS administre insulina basal adicional. Durante este tiempo, AAPS aún podrá limitar o cortar su insulina basal para ayudar a prevenir la hipoglucemia. Este es un paso importante para:

- Have a period of time to safely get used to the AAPS system and monitor how it works.
- Take the opportunity to perfect your basal profile and Insulin Sensitivity Factor (ISF).
- See how AAPS limits your basal insulin to prevent hypoglycaemia.

Cuando se sienta cómodo, puede permitir que el sistema comience a administrarle insulina basal adicional, aumentando el valor de IOB basal máxima. The recommended guideline for this is to take the **highest basal rate** in your profile and **multiply it by 3**. For example, if the highest basal rate in your profile was 0.5 U/h you could multiply that by 3 to get a value of 1.5 U/h.

- You can start conservatively with this value and increase it slowly over time.
- These are guidelines only; everyone's body is different. Puede encontrar que necesita más o menos de lo que se recomienda aquí, pero siempre comience de manera reservada y ajuste lentamente.

**Note: As a safety feature, Max Basal IOB is hard-limited to 7u.**

#### Autosens

- [Autosens](Open-APS-features-autosens) looks at blood glucose deviations (positive/negative/neutral).
- It will try and figure out how sensitive/resistant you are based on these deviations and adjust basal rate and ISF based on these deviations.
- If you select "Autosens adjust target, too" the algorithm will also modify your glucose target.

#### Advanced settings (OpenAPS AMA)

- Normally you do not have to change the settings in this dialogue!
- If you want to change them anyway make sure to read about details in [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#) and to understand what you are doing.

(Preferences-openaps-smb-settings)=
### OpenAPS SMB settings

- In contrast to AMA, [SMB](Open-APS-features-super-micro-bolus-smb) does not use temporary basal rates to control glucose levels, but mainly small super micro boluses.

- You must have started [objective 9](Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) to use SMB.

- The first three settings are explained [above](Preferences-max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal).

- Details on the different enable options are described in [OpenAPS feature section](Open-APS-features-enable-smb).

- *How frequently SMBs will be given in min* is a restriction for SMB to be delivered only every 4 min by default. This value prevents the system from issuing SMB too often (for example in case of a temp target being set). You should not change this setting unless you know exactly about consequences.

- If 'Sensitivity raises target' or 'Resistance lowers target' is enabled [Autosens](Open-APS-features-autosens) will modify your glucose target according to your blood glucose deviations.

- If target is modified it will be displayed with a green background on your home screen.

  ```{image} ../images/Home2020_DynamicTargetAdjustment.png
  :alt: Target modified by autosens
  ```

(Preferences-carb-required-notification)=
#### Carb required notification

- This feature is only available if SMB algorithm is selected.

- Eating of additional carbs will be suggested when the reference design detects that it requires carbs.

- In this case you will receive a notification which can be snoozed for 5, 15 or 30 minutes.

- Additionally the required carbs will be displayed in the COB section on your home screen.

- A threshold can be defined - minimum amount of carbs needed to trigger a notification.

- Las notificaciones de carbohidratos requeridos se pueden enviar a Nightscout si queremos, en cuyo caso se mostrará y se transmitirá.

  ```{image} ../images/Pref2020_CarbsRequired.png
  :alt: Display carbs required on home screen
  ```

#### Advanced settings (OpenAPS SMB)

- Normally you do not have to change the settings in this dialogue!
- If you want to change them anyway make sure to read about details in [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#) and to understand what you are doing.

## Ajustes absorción

```{image} ../images/Pref2020_Absorption.png
:alt: Absorption settings
```

### min_5m_carbimpact

- The algorithm uses BGI (blood glucose impact) to determine when carbs are absorbed.

- The value is only used during gaps in CGM readings or when physical activity “uses up” all the blood glucose rise that would otherwise cause AAPS to decay COB.

- At times when carb absorption can’t be dynamically worked out based on your blood's reactions it inserts a default decay to your carbs. Basically, it is a failsafe.

- To put it simply: The algorithm "knows" how your BGs *should* behave when affected by the current dose of insulin etc.

- Whenever there is a positive deviation from the expected behaviour, some carbs are absorbed/decayed. Big change=many carbs etc.

- The min_5m_carbimpact does define the default carb absorption impact per 5 minutes. For more details see [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html?highlight=carbimpact#min-5m-carbimpact).

- Standard value for AMA is 5, for SMB it's 8.

- The COB graph on the home screen indicates when min_5m_impact is being used by putting an orange circle at the top.

  ```{image} ../images/Pref2020_min_5m_carbimpact.png
  :alt: COB graph
  ```

### Maximum meal absorption time

- If you often eat high fat or protein meals you will need to increase your meal absorption time.

### Advanced settings - autosens ratio

- Define min. and max. [autosens](Open-APS-features-autosens) ratio.
- Normally standard values (max. 1.2 and min. 0.7) should not be changed.

## Configuración de la bomba

The options here will vary depending on which pump driver you have selected in [Config Builder](Config-Builder-pump).  Empareje y configure su bomba de según las instrucciones relacionadas con la misma:

- [DanaR Insulin Pump](../Configuration/DanaR-Insulin-Pump.md)
- [DanaRS Insulin Pump](../Configuration/DanaRS-Insulin-Pump.md)
- [Bomba de insulina Accu Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
- [Accu Chek Insight Pump](../Configuration/Accu-Chek-Insight-Pump.md)
- [Medtronic Pump](../Configuration/MedtronicPump.md)

Si usa AndroidAPS en lazo abierto, asegúrese de haber seleccionado bomba virtual en config builder.

(Preferences-nsclient)=
## NSClient

```{image} ../images/Pref2020_NSClient.png
:alt: NSClient
```

- Set your *Nightscout URL* (i.e. <https://yourwebsitename.herokuapp.com>) and the *API secret* (a 12 character password recorded in your Heroku variables).
- This enables data to be read and written between both the Nightscout website and AndroidAPS.
- Double check for typos here if you are stuck in Objective 1.
- **Make sure that the URL is WITHOUT /api/v1/ at the end.**
- *Log app start to NS* will record a note in your Nightscout careportal entries every time the app is started.  The app should not be needing to start more than once a day; more frequently than this suggests a problem (i.e. battery optimization not disabled for AAPS).
- If activated changes in [local profile](Config-Builder-local-profile) are uploaded to your Nightscout site.

### Ajustes conexión

```{image} ../images/ConfBuild_ConnectionSettings.png
:alt: NSClient connection settings
```

- Restrict Nightscout upload to Wi-Fi only or even to certain Wi-Fi SSIDs.
- If you want to use only a specific WiFi network you can enter its WiFi SSID.
- Multiple SSIDs can be separated by semicolon.
- To delete all SSIDs enter a blank space in the field.

### Opciones de alarma

- Alarm options allows you to select which default Nightscout alarms to use through the app.
- For the alarms to sound you need to set the Urgent High, High, Low and Urgent Low alarm values in your [Heroku variables](https://nightscout.github.io/nightscout/setup_variables/#alarms).
- They will only work whilst you have a connection to Nightscout and are intended for parent/carers.
- If you have the CGM source on your phone (i.e. xDrip+ or BYODA \[Build your own dexcom app\]) then use those alarms instead.

(Preferences-advanced-settings-nsclient)=
### Advanced settings (NSClient)

```{image} ../images/Pref2020_NSClientAdv.png
:alt: NS Client advanced settings
```

- Most options in advanced settings are self-explanatory.

- *Enable local broadcasts* will share your data to other apps on the phone such as xDrip+.

  - You need to [go through AAPS](Config-Builder-bg-source) and enable local broadcast in AAPS to use xDrip+ alarms.

- *Always use basal absolute values* must be activated if you want to use Autotune properly. See [OpenAPS documentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/understanding-autotune.html) for more details on Autotune.

## Comunicaciones SMS

- Options will only be displayed if SMS communicator is selected in [Config Builder](Config-Builder-sms-communicator).
- This setting allows remote control of the app by texting instructions to the patient's phone which the app will follow such as suspending loop, or bolusing.
- Further information is described in [SMS Commands](../Children/SMS-Commands.md).
- Additional safety is obtained through use of an authenticator app and additional PIN at token end.

## Automatización

Select which location service shall be used:

- Use passive location: AAPS only takes locations if other apps are requesting it
- Use network location: Location of your Wi-Fi
- Use GPS location (Attention! ¡ Puede provocar una descarga excesiva de la batería!)

## Alarma local

```{image} ../images/Pref2020_LocalAlerts.png
:alt: Local alerts
```

- Settings should be self-explanatory.

## Data choices

```{image} ../images/Pref2020_DataChoice.png
:alt: Data choices
```

- You can help develop AAPS further by sending crash reports to the developers.

## Maintenance settings

```{image} ../images/Pref2020_Maintenance.png
:alt: Maintenance settings
```

- Standard recipient of logs is <logs@androidaps.org>.
- If you select *Encrypt exported settings* these are encrypted with your [master password](Preferences-master-password). In this case master password has to be entered each time settings are exported or imported.

## Open Humans

- ¡Puedes ayudar a la comunidad donando tus datos a proyectos de investigación científicos! Details are described on the [Open Humans page](../Configuration/OpenHumans.md).

- In Preferences you can define when data shall be uploaded

  - only if connected to WiFi
  - only if charging
