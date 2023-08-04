# Sample setup: Samsung S7, Dana RS, Dexcom G6 and Sony Smartwatch

![Configuração de Exemplo](../images/SampleSetup.png)

## Descrição

In this setup, the Samsung Galaxy S7 smartphone is used as control center of the loop. The slightly modified Dexcom App reads glucose values from the Dexcom G6 CGM. AndroidAPS is used to control the Dana RS insulin pump from Korean manufacturer SOOIL via bluetooth. Further devices are not required.

As the Dexcom App only offers limited alarm options the open source app xDrip+ is used to define not only high and low alarms but also additional alarms according to individual requirements.

Optionally an Android wear smartwatch can be used (in this sample setup the Sony Smartwatch 3 (SWR50)) to display glucose and AndroidAPS values on your wrist. The watch can even be used to control AndroidAPS (i.e. discreetly set a meal bolus).

The system works offline. This means there is no need for a data connection from the smartphone to the Internet for operation.

Nevertheless, the data is automatically uploaded to Nightscout "in the cloud" when a data connection is established. By doing so you can provide comprehensive reports for the doctor's visit or share the current values with family members at any time. It is also possible to send data to Nightscout only when using a (predefined) Wi-Fi connection in order to profit from the different Nightscout reports.

## Required components

1. Samsung Galaxy S7
    
    * Alternatives: see [list of tested phones and watches](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) for AndroidAPS

2. [DanaRS](http://www.sooil.com/eng/product/)
    
    * Alternatives: 
    * [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
    * [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
    * [DanaR](../Configuration/DanaR-Insulin-Pump.md)
    * [Some old Medtronic pumps (additionally needed: RileyLink/Gnarl hardware, Android Phone with bluetooth low energy / BLE-chipset)](../Configuration/MedtronicPump.md)
    * Other pumps might be available in the future, see [future possible pump drivers](Future-possible-Pump-Drivers.md) for details.

3. [Dexcom G6](https://dexcom.com)
    
    * Alternatives: see list of possible [BG sources](../Configuration/BG-Source.md)

4. Optional: Sony Smartwatch 3 (SWR50)
    
    * Alternatives: All [watches with Google Wear OS](https://wearos.google.com/intl/de_de/#find-your-watch) should work fine, for details see [list of tested phones and watches](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) for AndroidAPS (OS must be Android Wear)

## Configuração do Nightscout

See detailed [Nightscout setup](../Installing-AndroidAPS/Nightscout.md)

## Computer setup

To be able to create an Android app from the freely available AAPS open source code you need Android Studio on your computer or notebook (Windows, Mac, Linux). A detailed instruction can be found at [building the APK](../Installing-AndroidAPS/Building-APK.md).

Please be patient when installing Android Studio as the software downloads a lot of additional data once installed on your computer.

## Smartphone setup

![Smartphone](../images/SampleSetupSmartphone.png)

### Check smartphone firmware

* Menu > Settings > Phone info > Software info: At least "Android-Version 8.0" (successfully tested up to Android version 8.0.0 Oreo - Samsung Experience Version 9.0) 
* For firmware update: menu > Preferences > software update

### Allow installation from unknown sources

Menu > Settings > Device security > Unknown sources > slider to right side (= active)

For security reasons this setting should be set back to inactive once the installation of all apps described here has been completed.

### Activar bluetooth

1. Menu > Settings > Connections > Bluetooth > slider to right side (= active)
2. Menu > Settings > Connections > Location > slider to right side (= active)

Location services ("GPS") must be activated in order for Bluetooth to work properly.

### Install Dexcom App (modified version)

![Dexcom App patched](../images/SampleSetupDexApp.png)

The original Dexcom app from the Google Play Store will not work because it does not broadcast the values to other apps. Therefore, a version slightly modified by the community is required. Only this modified Dexcom app can communicate with AAPS. Additionally the modified Dexcom App can be used with all Android smartphones not only the ones in [Dexcom's compatibility list](https://www.dexcom.com/dexcom-international-compatibility).

To do this perform the following steps on your smartphone:

1. If the original Dexcom app is already installed: 
    * Stop sensor
    * Uninstall app via Menu > Settings > Apps > Dexcom G6 Mobile > Uninstall
2. Download and install the [BYODA Dexcom ap](../Hardware/DexcomG6.md#if-using-g6-with-build-your-own-dexcom-app)
3. Start modified Dexcom G6 app, activate/calibrate the sensor according to the given instructions and wait until the warm-up phase is finished.
4. Once the modified Dexcom app shows actual glucose value, setup the warnings (hamburger menu on top left side of the screen) as follows: 
    * Urgent low `55mg/dl` / `3.1mmol/l` (cannot be disabled)
    * Low `OFF`
    * High `OFF`
    * Rise rate `OFF`
    * Fall rate `OFF`
    * Signal loss `OFF`

## Install AndroidAPS

1. Follow the instructions to [build the APK](../Installing-AndroidAPS/Building-APK.md#generate-signed-apk)
2. [Transfer](../Installing-AndroidAPS/Building-APK.md#transfer-apk-to-smartphone) the generated APK to your phone
3. [Configure AndroidAPS](../Configuration/Config-Builder.md) according to your needs using the setup assistant or manually
4. In this sample setup we used (among others)

* BG source: `Dexcom G6 App (patched)` -- click cock-wheel and activate `Upload BG data to NS` and `Send BG data to xDrip+` (see [BG source](../Configuration/BG-Source.md))

![G5 Settings](../images/SampleSetupG5Settings.png)

* NS Client activated (see [Nightscout setup](../Installing-AndroidAPS/Nightscout.md))

## Install xDrip+

xDrip+ is another mature open source app that offers countless possibilities. In this setup, contrary to what the developers first wrote the app for, xDrip+ is not used to collect glucose data from the Dexcom G6, but only to output alarms and to display the current glucose value including the curve on the Android home screen in the widget. With xDrip+ the alarms can be set much more individually than with the Dexcom software, AAPS or Nightscout (no limitation in the selection of sounds, different alarms depending on day/night time etc.).

1. Download the latest stable APK version of xDrip+ with your smartphone <https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk> - not the version from the Google Play Store!
2. Install xDrip+ by selecting the downloaded APK file.
3. Start xDrip+ and make the following settings (hamburger menu at top left) 
    * Settings > Alarms and Alerts > Glucose Level Alert List > Create Alerts (high and low) according to your needs.
    * The existing alarms can be changed with a long press on the alarm.
    * Settings > Alarms and Alerts > Calibration Alerts: disabled (reminded via the modified Dexcom app)
    * Settings > Hardware Data Source > 640G/EverSense
    * Settings > Inter-app settings > Accept Calibrations > `ON`
    * Menu > Start sensor (is only "pro forma" and has nothing to do with the running G6 sensor. This is necessary otherwise an error message will appear regularly.) 

For more information about xDrip+, see here [BG source page](../Configuration/BG-Source.md).

### Example of an alarm setup

The "Urgent low alarm" (below 55 mg/dl resp. 3,1 mmol) is a standard alarm from the modified Dexcom app that cannot be disabled.

![xDrip alarms](../images/SampleSetupxDripWarning.png)

Tip for meetings / church visits / cinema etc..:

If "Do not disturb" mode is activated in the Samsung Galaxy S7 (Menu > Settings > Sounds and vibration > Do not disturb: slider to right side (= active)), the phone only vibrates during urgent low alarm and does not issue an acoustic warning. For the other alarms set up via xDrip+ you can select whether the silent mode should be ignored (acoustic sound played) or not.

## Disable power saving option

On your Samsung Galaxy S7 go to Menu > Settings > Device Maintenance > Battery > Unmonitored Apps > + Add apps: Select the apps AndroidAPS, Dexcom G6 Mobile, xDrip+ and Android Wear (if smartwatch is used) one after the other

## Optional: Setup Sony Smartwatch 3 (SWR50)

With an Android Wear smartwatch life with diabetes can be made even more inconspicuous. The watch can be used to display the current glucose level, the status of the loop etc. on the wrist. The watch can even be used to control AndroidAPS (i.e. discreetly set a meal bolus). To do this, double tap the CGM value of the AAPSv2 watchface. The SWR50 usually runs for a full day until the battery needs to be recharged (same charger as the Samsung Galaxy S7: microUSB).

![Smartwatch](../images/SampleSetupSmartwatch.png)

Details about the information displayed on the watchface can be found [here](../Configuration/Watchfaces.md).

* Install the app "Android Wear" on your smartphone via the Google Play Store and connect the smartwatch according to the instructions there.
* In AAPS choose hamburger menu (top left corner) > Config Builder > General (at the bottom of the list) > Wear > activate on left side, click cock wheel > Wear settings and activate `Controls from Watch`
* On your smartwatch: Long press display to change watchface and select `AAPSv2`
* If necessary restart both devices once.

## Configurações da bomba

see [Dana RS pump](../Configuration/DanaRS-Insulin-Pump.md)