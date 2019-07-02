# xDrip+ settings

If not already set up then download [xDrip+](https://github.com/NightscoutFoundation/xDrip)

For G6 transmitters manufactured after fall/end of 2018 please make sure to use one of the [latest nightly build xDrip+ versions](https://github.com/NightscoutFoundation/xDrip/releases). Those transmitters have a new firmware and latest stable version of xDrip+ (2019/01/10) cannot deal with it.

**At the moment there are some problems with nightly builds after 2019/05/21 asking for G6 calibration.**

## Basic settings for all CGM & FGM systems

* Make sure to set Base URL correctly including **S** at the end of http**s**:// (not http://)
   
   i.e. https://API_SECRET@your-app-name.herokuapp.com/api/v1/
   
   -> Hamburger Menu (top left of homescreen) -> Settings-> Cloud Upload-> Nightscout Sync (REST-API) -> Base URL

* Deactivate `Automatic Calibration` If the checkbox for `Automatic Calibration` is checked, activate `Download data` once, then remove the checkbox for `Automatic Calibration` and deactivate `Download data` again, otherwise the treatments (insulin & carbs) will be added twice to Nightscout.

* Tap `Extra Options`
* Deactivate `Upload treatments` and `Back-fill data`
* Option `Alert on failures` should also be deactivated. Otherwise you will get an alarm every 5 minutes in case wifi/mobile network is too bad or the server is not available.
   
   ![xDrip+ Basic Settings 1](../images/xDrip_Basic1.png)
   
   ![xDrip+ Basic Settings 2](../images/xDrip_Basic2.png)

* **InterApp-Settings** (Broadcast) If you are going to use AndroidAPS and the data should be forwarded to i.e. AndroidAPS you have to activate broadcasting in xDrip+ in Inter-App settings.

* In order for the values to be equal, you should activate `Send the displayed glucose value`.
* If you have also activated `Accept treatments` and broadcasting in AndroidAPS, then xDrip+ will receive insulin, carbs and basal rate information from AndroidAPS and can estimate the hypo prediction etc. more accurately.
   
   ![xDrip+ Basic Settings 3](../images/xDrip_Basic3.png)

## xDrip+ & Dexcom G6

### Dexcom specific settings

* Open G5/G6 Debug Settings -> Hamburger Menu (top left of homescreen) -> Settings -> G5/G6 Debug Settings ![Open xDrip+ Settings](../images/xDrip_Dexcom_SettingsCall.png)

* Enable the following settings
   
   * `Use the OB1 Collector`
   * `Native Algorithm` (important if you want to use SMB)
   * `G6 support`
   * `Allow OB1 unbonding`
   * `Allow OB1 initiate bonding`
* All other options should be disabled
* Adjust battery warning level to 280 (bottom of G5/G6 Debug Settings)
   
   ![xDrip+ G5/G6 Debug Settings](../images/xDrip_Dexcom_DebugSettings.png)

### Preemptive restarts not recommended

The automatic extension of Dexcom sensors (`preemtive restarts`) is not recommended as this might lead to “jumps” in BG values on day 9 after restart.

![xDrip+ Jump after Preemptive Restart](../images/xDrip_Dexcom_PreemptiveJump.png)

Oczywiste jest, że korzystanie z G6 jest być może nieco bardziej skomplikowane niż wygląda to na początku. Aby bezpiecznie z niego korzystać, należy pamiętać o kilku punktach:

* If you are using the native data with the calibration code in xDrip+ or Spike, the safest thing to do is not allow preemptive restarts of the sensor.
* Jeśli musisz użyć ponownego uruchomienia, upewnij się, że wykonasz kalibrację o tej porze dnia, w której możesz obserwować zmianę i skalibrować, jeśli to konieczne. 
* Jeśli ponownie uruchamiasz sensor, zrób to bez kalibracji fabrycznej, aby uzyskać najbezpieczniejsze wyniki w dniach 11 i 12, lub upewnij się, że jesteś gotowy do kalibracji i kontroluj zmiany.
* Tak zwane „wstępne namaczanie” (sensor zamocowany wcześniej bez nadajnika, dzięki czemu „przyzwyczaja się” do płynu tkankowego) z kalibracją fabryczną może prowadzić do odchyleń w poziomach glukozy. Jeśli pracujesz z namaczaniem wstępnym, aby uzyskać najlepsze wyniki, prawdopodobnie będziesz musiał skalibrować sensor.
* Jeśli nie chcesz zwracać uwagi na odchylenia, które mogą mieć miejsce, może być lepiej wrócić do ustawień bez kalibracji fabrycznej i korzystać z systemu tak jak z G5 (z „obowiązkową kalibracją”).

Aby dowiedzieć się więcej o szczegółach i powodach tych zaleceń, przeczytaj [ kompletny artykuł ](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) opublikowany przez Tima Street na stronie [ www.diabettech.com ](http://www.diabettech.com).

### Connect G6 transmitter for the first time

**For second and following transmitters see [Extend transmitter life](../Configuration/xdrip#extend-transmitter-life) below.**

* For G6 transmitters manufactured after fall/end of 2018 please make sure to use one of the [latest nightly build xDrip+ versions](https://github.com/NightscoutFoundation/xDrip/releases). Those transmitters have a new firmware and latest stable version of xDrip+ (2019/01/10) cannot deal with it.
* Turn original Dexcom receiver off (if used).
* Long press the red xDrip+ blood drop icon on the main screen to enable the `Source Wizard Button`.
* Use the Source Wizard Button which ensures default settings including OB1 & Native Mode 
   * This guides you through the initial set up.
   * you will need your transmitter serial number if this is the first time you've used it.

* Put in serial number of new transmitter (on the transmitter packaging or on the back of the transmitter
   
   ![xDrip+ Dexcom Transmitter Serial No](../images/xDrip_Dexcom_TransmitterSN.png)

* Insert new sensor (only if replacing)

* Put transmitter into sensor
* Start sensor (only if replacing) -> Near the bottom of the screen `Warm Up x,x hours left` must be displayed after a few minutes. -> If there is no time specification after a few minutes stop and restart the sensor.
* Restart collector (system status - if not replacing sensor}
* Do not turn original Dexcom receiver (if used) back on before xDrip+ shows first readings.
* Long press the red xDrip+ blood drop icon on the main screen to disable the `Source Wizard Button`.
   
   ![xDrip+ Dexcom Transmitter 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom Transmitter 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom Transmitter 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom Transmitter 4](../images/xDrip_Dexcom_Transmitter04.png)

### Transmitter battery status

* Battery status can be controlled in system status (Hamburger menu top left on homescreen)
* Swipe left once to see second screen. ![xDrip+ First Transmitter 4](../images/xDrip_Dexcom_Battery.png)

* The exact values when the transmitter “dies” due to empty battery are not known. The following information was posted online after the transmitter “died”: Transmitter days: 151 Voltage A: 297 Voltage B: 260 Resistance: 2391

### Extend transmitter life

* Running sensor session will be stopped when extending transmitter life. So extend before sensor change or be aware that there will be a new 2 h warm-up phase.
* Switch to the `engineering mode`: 
   * tap on the character on the right of the xDrip+ start screen that represents a syringe
   * then tap on the microphone icon in the lower right corner
   * In the text box that opens type "enable engineering mode" 
   * click "Done"
   * If Google Speak engine is enabled, you can also speak the voice command: "enable engineering mode". 
* Go to the G5 debug settings and check `OB1 collector`.
* Use the voice command: “hard reset transmitter”
* The voice command will be executed with the next data receipt of the transmitter
* Look at the system status (Hamburger menu -> system status) and see what happens
* If you see a message "Phone Service State: Hard Reset maybe failed" on second system status screen just start the sensor and this message should go away. 
* Transmitter days will be set to 0 after successful extension and start of sensor.

### Replace transmitter

For G6 transmitters manufactured after fall/end of 2018 please make sure to use one of the [latest nightly build xDrip+ versions](https://github.com/NightscoutFoundation/xDrip/releases). Those transmitters have a new firmware and latest stable version of xDrip+ (2019/01/10) cannot deal with it.

* Turn original Dexcom receiver off (if used).
* Stop sensor (only if replacing sensor)
   
   Ensure it really is stopped:
   
   On the second "G5/G6 Status" screen look at `Queue Items` about half way down - It may say something like `(1) Stop Sensor`
   
   Wait until this goes - usually within a few minutes.
   
   -> To remove transmitter without stopping sensor see this video <https://youtu.be/AAhBVsc6NZo>.
   
   ![xDrip+ Stop Dexcom Sensor 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Stop Dexcom Sensor 2](../images/xDrip_Dexcom_StopSensor2.png)

* Forget device (in system status)
   
   ![xDrip+ Forget Device](../images/xDrip_Dexcom_ForgetDevice.png)

* Forget device in smartphone’s BT settings (Will be shown as DexcomXX whereas XX are the last two digits of the transmitter serial no.)

* Remove transmitter (and sensor if replacing sensor)
* Long press the red xDrip+ blood drop icon on the main screen to enable the `Source Wizard Button`.
* Use the Source Wizard Button which ensures default settings including OB1 & Native Mode 
   * This guides you through the initial set up.
   * You will need your transmitter serial number if this is the first time you've used it.
* Put in serial number of new transmitter.
* Insert new sensor (only if replacing).
* Put transmitter into sensor
* Start sensor (only if replacing)
   
   **It is recommended to wait approx. 15 minutes between stopping and starting the new sensor (until `Sensor Status: Stopped` is shown on second system status screen).**

* Restart collector (system status - if not replacing sensor}

* Do not turn original Dexcom receiver (if used) back on before xDrip+ shows first readings.
* Long press the red xDrip+ blood drop icon on the main screen to disable the `Source Wizard Button`.
   
   ![xDrip+ Dexcom Transmitter 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom Transmitter 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom Transmitter 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom Transmitter 4](../images/xDrip_Dexcom_Transmitter04.png)

### New Sensor

* Turn original Dexcom receiver off (if used).
* Stop sensor if necessary
   
   Ensure it really is stopped:
   
   On the second "G5/G6 Status" screen look at `Queue Items` about half way down - It may say something like `(1) Stop Sensor`
   
   Wait until this goes - usually within a few minutes.
   
   ![xDrip+ Stop Dexcom Sensor 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Stop Dexcom Sensor 2](../images/xDrip_Dexcom_StopSensor2.png)

* Clean contacts (transmitter backside) with alcohol and let air-dry.

* In case you use this function disable `Restart Sensor` and `Preemptive restarts` (Hamburger menu -> Settings -> G5/G6 Debug Settings). If you miss this step and have these functions enabled the new sensor will not start properly.
   
   ![xDrip+ Preemptive Restart](../images/xDrip_Dexcom_Restart.png)

* Start Sensor
   
   **It is recommended to wait approx. 15 minutes between stopping and starting the new sensor (until `Sensor Status: Stopped` is shown on second system status screen).**

* Set time inserted
   
   * To use G6 Native mode you must wait for the 2 hour warm up (i.e insertion time is now).
   * If you are using the xDrip+ algorithm then you can set a time more than 2 hours ago to avoid warm up. Readings may be very erratic. Therefore this is not recommended.
* Enter Sensor code (on the peel-off foil of the sensor) 
   * Keep code for further reference (i.e. new start after transmitter had to be removed)
   * Code can also be found in [xDrip+ logs](../Configuration/xdrip#retrieve-sensor-code): Click 3-dots-menu on xDrip+ homescreen and choose `View Event Logs`.
* No calibration is needed if you use G6 in "native mode". xDrip+ will show readings automatically after 2 hour warm-up.
* Do not turn original Dexcom Receiver (if used) back on before xDrip+ shows first readings.
   
   ![xDrip+ Start Dexcom Sensor 1](../images/xDrip_Dexcom_SensorStart01.png)
   
   ![xDrip+ Start Dexcom Sensor 2](../images/xDrip_Dexcom_SensorStart02.png)

### Retrieve sensor code

* In latest nightly builds the sensor code is shown in system status (Hamburger menu top left on homescreen).
* Swipe left once to see second screen.
   
   ![xDrip+ Retrieve Dexcom Sensor Code2](../images/xDrip_Dexcom_SensorCode2.png)

* Dexcom sensor code can also be found in xDrip+ logs.

* Tap 3 dot menu (top right side on homescreen)
* Select `View Event Logs` and search for "code"
   
   ![xDrip+ Retrieve Dexcom Sensor Code](../images/xDrip_Dexcom_SensorCode.png)

## xDrip+ & Freestyle Libre

### Libre specific settings

* Open Bluetooth Settings -> Hamburger Menu (top left of homescreen) -> Settings -> scroll down -> Less common settings -> Bluetooth Settings
   
   ![xDrip+ Libre Bluetooth Settings 1](../images/xDrip_Libre_BTSettings1.png)

* Enable the following settings
   
   * `Turn Bluetooth on` 
   * `Use scanning`
   * `Always discover services`

* All other options should be disabled
   
   ![xDrip+ Libre Bluetooth Settings 2](../images/xDrip_Libre_BTSettings2.png)

### Connect Libre Transmitter & start sensor

![xDrip+ Start Libre Transmitter & Sensor 1](../images/xDrip_Libre_Transmitter01.png)

![xDrip+ Start Libre Transmitter & Sensor 2](../images/xDrip_Libre_Transmitter02.png)

![xDrip+ Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)