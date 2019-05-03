# xDrip+ settings

If not already set up then download [xdrip](https://github.com/NightscoutFoundation/xDrip)

For G6 transmitters manufactured after fall/end of 2018 please make sure to use one of the [latest xDrip+ versions](https://github.com/NightscoutFoundation/xDrip/releases). Those transmitters have a new firmware and latest stable version of xDrip+ (2019/01/10) cannot deal with it.

## Basic settings for all CGM & FGM systems

* Make sure to set Base URL correctly including <font color="#FF0000"><b>S</font></b> at the end of http<b><font color="#FF0000">s</font></b>:// (not http://)
   i.e. https://API_SECRET@your-app-name.herokuapp.com/api/v1/
* Deactivate “Automatic Calibration”
   If the checkbox for "Automatic Calibration" is checked, activate "Download data" once, then remove the checkbox for "automatic calibration" and deactivate "Download data" again, otherwise the treatments (insulin & carbs) will be added twice to Nightscout.
* Tap "Extra Options"
* Deactivate "Upload treatments" and "Back-fill data"
* Option "Alert on failures" should also be deactivated. Otherwise you will get an alarm every 5 minutes in case wifi/mobile network is too bad or the server is not available.

   ![xDrip+ Basic Settings 1](../images/xDrip_Basic1.png)

   ![xDrip+ Basic Settings 2](../images/xDrip_Basic2.png)

* InterApp-Settings (Broadcast)
   If you are going to use a DIY closed loop system and the data should be forwarded to i.e. AndroidAPS you have to activate broadcasting in xDrip+ in Inter-App settings.
* In order for the values to be equal, you should activate "Send the displayed glucose value".
* If you have also activated "Accept treatments" and broadcasting in AAPS, then xDrip+ will receive insulin, carbs and basal rate information from your DIY closed loop system and can estimate the hypo prediction etc. more accurately.

   ![xDrip+ Basic Settings 3](../images/xDrip_Basic3.png)
   
## XDrip+ & Dexcom G6

### Dexcom specific settings

* Open G5/G6 Debug Settings 
   -> Hamburger Menu (top left of homescreen)
   -> Settings
   -> G5/G6 Debug Settings
   ![Open xDrip+ Settings](../images/xDrip_Dexcom_SettingsCall.png)
   
* Enable the following settings
   - Use the OB1 Collector
   - Native Algorithm (important if you want to use SMB)
   - G6 support
   - Allow OB1 unbonding
   - Allow OB1 initiate bonding
* All other options should be disabled
* Adjust battery warning level to 280 (bottom of G5/G6 Debug Settings)

   ![xDrip+ G5/G6 Debug Settings](../images/xDrip_Dexcom_DebugSettings.png)

### Preemptive restarts not recommended

The automatic extension of Dexcom sensors (“preemtive restarts”) is not recommended as this might lead to “jumps” in BG values on day 9 after restart.

   ![xDrip+ Jump after Preemptive Restart](../images/xDrip_Dexcom_PreemptiveJump.png)

What’s clear is that using the G6 is perhaps a little more complex than it as first suggests. To use it safely, there are a few points to be aware of: 

* If you are using the native data with the calibration code in xDrip or Spike, the safest thing to do is not allow preemptive restarts of the sensor.
* If you must use preemptive restarts, then make sure you insert at a time of day where you can observe the change and calibrate if necessary. 
* If you are restarting sensors, either do it without the factory calibration for safest results on days 11 and 12, or ensure you are ready to calibrate and keep an eye on variation.
* Pre-soaking of the G6 with factory calibration is likely to give variation in results. If you do pre-soak, then to get best results, you will probably need to calibrate the sensor.
* If you aren’t being observant about the changes that may be taking place, it may be better to revert to non-factory-calibrated mode and use the system like a G5.

To learn more about the details and reasons for these recommendations read the [complete article](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) published by Tim Street at [www.diabettech.com](http://www.diabettech.com).


### Connect G6 transmitter for the first time

<b>For second and following transmitters see 'Extend transmitter life' below.</b>

* For G6 transmitters manufactured after fall/end of 2018 please make sure to use one of the [latest xDrip+ versions](https://github.com/NightscoutFoundation/xDrip/releases). Those transmitters have a new firmware and latest stable version of xDrip+ (2019/01/10) cannot deal with it.
* Turn original Dexcom receiver off (if used).
* Long press the red xDrip+ blood drop icon on the main screen to enable the "Source Wizard Button".
* Use the Source Wizard Button which ensures default settings including OB1 & Native Mode
   - This guides you through the initial set up.
   - you will need your Transmitter serial number if this is the first time you've used it.
* Put in serial number of new transmitter
* Insert new sensor (only if replacing)
* Put transmitter into sensor
* Start sensor (only if replacing)
   -> Near the bottom of the screen “Warm Up x,x hours left” must be displayed after a few minutes.
   -> If there is no time specification stop and restart the sensor.
* Restart collector (system status - if not replacing sensor}
* Long press the red xDrip+ blood drop icon on the main screen to disable the "Source Wizard Button".

   ![xDrip+ Dexcom Transmitter 1](../images/xDrip_Dexcom_Transmitter01.png)

   ![xDrip+ Dexcom Transmitter 2](../images/xDrip_Dexcom_Transmitter02.png)

   ![xDrip+ Dexcom Transmitter 3](../images/xDrip_Dexcom_Transmitter03.png)

   ![xDrip+ Dexcom Transmitter 4](../images/xDrip_Dexcom_Transmitter04.png)


### Transmitter battery status

* Battery status can be controlled in system status (Hamburger Menu top left on homescreen)
* Swipe left once to see second screen.
   ![xDrip+ First Transmitter 4](../images/xDrip_Dexcom_Battery.png)
   
* The exact values when the transmitter “dies” due to empty battery are not known. The following information was posted online after the transmitter “died”:
	 Transmitter days: 151
	 Voltage A: 297
	 Voltage B: 260
	 Resistance: 2391


### Extend transmitter life
* Switch to the "engineering mode":
   - tap on the character on the right of the xDrip+ start screen that represents a syringe
   - then tap on the microphone icon in the lower right corner
   - In the text box that opens type "enable engineering mode" 
   - click "Done"
   - If Google Speak engine is enabled, you can also speak the voice command: "enable engineering mode". 
* Go to the G5 debug settings and check "OB1 collector".
* Use the voice command: “hard reset transmitter”
* The voice command will be executed with the next data receipt of the transmitter
* Look at the system status (Hamburger menu -> system status) and see what happens


### Replace transmitter

For G6 transmitters manufactured after fall/end of 2018 please make sure to use one of the [latest xDrip+ versions](https://github.com/NightscoutFoundation/xDrip/releases). Those transmitters have a new firmware and latest stable version of xDrip+ (2019/01/10) cannot deal with it.

* Turn original Dexcom receiver off (if used).
* Stop sensor (only if replacing sensor)
   Ensure it really is stopped:
   On the second "G5/G6 Status" screen look at "Queue Items" about half way down -
   It may say something like "(1) Stop Sensor"
   Wait until this goes - a few minutes in my experience.
   -> To remove transmitter without stopping sensor see this video [https://youtu.be/AAhBVsc6NZo](https://youtu.be/AAhBVsc6NZo).

   ![xDrip+ Stop Sensor](../images/xDrip_Dexcom_StopSensor.png)

* Forget device (in system status)

   ![xDrip+ Forget Device](../images/xDrip_Dexcom_ForgetDevice.png)

* Forget device in smartphone’s BT settings (Will be shown as DexcomXX whereas XX are the last two 
* Remove transmitter (and sensor if replacing sensor)
* Long press the red xDrip+ blood drop icon on the main screen to enable the "Source Wizard Button".
* Use the Source Wizard Button which ensures default settings including OB1 & Native Mode
   - This guides you through the initial set up.
   - You will need your Transmitter serial number if this is the first time you've used it.
* Put in serial number of new transmitter.
* Insert new sensor (only if replacing).
   -> It is recommended to wait approx. 15 minutes between stopping and starting the new sensor.
* Put transmitter into sensor
* Start sensor (only if replacing)
* Restart collector (system status - if not replacing sensor}
* Long press the red xDrip+ blood drop icon on the main screen to disable the "Source Wizard Button".

   ![xDrip+ Dexcom Transmitter 1](../images/xDrip_Dexcom_Transmitter01.png)

   ![xDrip+ Dexcom Transmitter 2](../images/xDrip_Dexcom_Transmitter02.png)

   ![xDrip+ Dexcom Transmitter 3](../images/xDrip_Dexcom_Transmitter03.png)

   ![xDrip+ Dexcom Transmitter 4](../images/xDrip_Dexcom_Transmitter04.png)


### New Sensor

* Turn original Dexcom receiver off (if used).
* Stop sensor if necessary
   Ensure it really is stopped:
   On the second "G5/G6 Status" screen look at "Queue Items" about half way down -
   It may say something like "(1) Stop Sensor"
   Wait until this goes - usually a few minutes

   ![xDrip+ Stop Dexcom Sensor](../images/xDrip_Dexcom_StopSensor.png)   

* Clean contacts (transmitter backside) with alcohol and let air-dry.
* In case you use this function disable “Restart Sensor” and “Preemptive restarts” (Hamburger Menu -> Settings -> G5/G6 Debug Settings). If you miss this step and have these functions enabled the new sensor will not start properly.

   ![xDrip+ Preemtpive Restart](../images/xDrip_Dexcom_Restart.png)

* Start Sensor 
   <b><font color="#FF0000">-> It is recommended to wait approx. 15 minutes between stopping and starting the new sensor.</b></font>
* Set time inserted
   - To use G6 Native mode you must wait for the 2 hour warm up (i.e insertion time is now).
   - If you are using the xDrip+ algorithm then you can set a time more than 2 hours ago to avoid warm up. Readings may be very erratic. Therefore this is not recommended.
* Enter Sensor code (on the peel-off foil of the sensor)
   - Keep code for further reference (i.e. new start after transmitter had to be removed)
   - Code can also be found in xDrip+ logs: Click 3-dots-menu on xDrip+ homescreen and choose "show logs".
* If you are using G6 "Native Mode" then you should not need a calibration & readings will start automatically.

   ![xDrip+ Start Dexcom Sensor 1](../images/xDrip_Dexcom_StartSensor01.png)

   ![xDrip+ Start Dexcom Sensor 2](../images/xDrip_Dexcom_StartSensor02.png)


### Retrieve sensor code

* Dexcom sensor code can be found in xDrip+ logs.
* Tap 3 dot menu (top right side on homescreen)
* Select ‘View Event Logs’ and search for ‘code’

   ![xDrip+ Retrieve Dexcom Sensor Code](../images/xDrip_Dexcom_SensorCode.png)


## xDrip+ & Freestyle Libre

### Libre specific settings

* Open Bluetooth Settings 
   -> Hamburger Menu (top left of homescreen)
   -> Settings
   -> scroll down
   -> Less common settings
   -> Bluetooth Settings
 
   ![xDrip+ Libre Bluetooth Settings 1](../images/xDrip_Libre_BTSettings1.png)

* Enable the following settings
   - Turn Bluetooth 
   - Use scanning
   - Always discover services
* All other options should be disabled

   ![xDrip+ Libre Bluetooth Settings 2](../images/xDrip_Libre_BTSettings2.png)


### Connect Libre Transmitter & start sensor

   ![xDrip+ Start Libre Transmitter & Sensor 1](../images/xDrip_Libre_Transmitter01.png)

   ![xDrip+ Start Libre Transmitter & Sensor 2](../images/xDrip_Libre_Transmitter02.png)

   ![xDrip+ Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)
