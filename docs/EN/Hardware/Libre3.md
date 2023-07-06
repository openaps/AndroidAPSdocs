# **Freestyle Libre 3**

Freestyle Libre 3 (FSL3) requires a unique setup to receive BG values in to AAPS. The below is one method for achieving this using the separate app Juggluco. This method uses Juggluco to receive raw, 1-minute interval data from the sensor which is then passed to xDrip+ to be smoothed into 5-minute interval data to be passed to AAPS. While it is possible to pass data directly from Juggluco to AAPS at 1-minute intervals, this would likely result in noisy data and additional battery drain.

New sensors can be started either with the Libre 3 App or directly in Juggluco. The guide below indicates the process for starting a sensor with the Libre 3 app and then transferring to Juggluco. For more information on directly starting a sensor without the Libre 3 app please refer to the “original instructions” under “further help” below. 

Juggluco can also pass data to LibreView for sharing with health care providers when the sensor is started with the Libre 3 app.

Within xDrip+ the sensor can be calibrated in the range of -40 mg/dl to +20 mg/dl (-2.2 mmol/l to +1.1 mmol/l) to compensate for differences between a manual meter reading and the sensor readings.


### 
**Step 1: Install & Start a sensor with Libre 3 app on your phone**



1. If not already, from the Google Play Store download and install the “Libre 3” app.
2. Login in to Libreview or create a new account and write down your credentials for use in a future step.
3. Follow the instructions in the app to start the sensor
4. Wait the 1 hour warm up period and ensure the sensor is receiving values
5. Force close the Libre 3 app (typically Settings > Apps > Libre 3 > Force Stop)

### 
**Step 2: Install & set up Juggluco on your phone**

1. On your phone, download and install the Juggluco app ([link](https://www.juggluco.nl/Juggluco/download.html)) most modern phones will use the most recent version of the “Arm64 only ” link
2. When prompted, allow Juggluco to find, locate, and connect nearby devices and allow notifications
3. If a request to deactivate battery optimization appears, tap "Allow" to ensure the app runs in the background.
4. After the introduction screen, open the Juggluco menu by clicking on the empty space in the upper left hand corner of the screen.

![menu location](https://github.com/openaps/AndroidAPSdocs/assets/13263947/a8378ec5-050a-44ac-b0e2-e84989691050)


5. Select "Settings" from the menu.
6. Select the checkbox for “Patched Libre Broadcast”
7. Select the checkbox for “com.eveningoutpost.dexdrip” and click “Save”
8. Select the checkbox for “Libreview”
9. Enter the Libreview login credentials you wrote down in step 1.2 above and click “Get Account ID” 
10. Wait for a multi-digit number to appear below the "Resend data" button, indicating a successful connection with Libreview. 
11. Select the checkbox for “Send to Libreview” if you want to have your data uploaded to Libreview (not required)
12. Click “Ok”
13. Click “Save”
14. With the Juggluco app open, scan your active sensor with your phone's NFC reader. Readings should appear shortly (note the Libre 3 does not support receiving readings via NFC so readings will only become available once the bluetooth connection is established)

### 
**Step 3: Set up xDrip+**

1. Download and install one of the latest nightly builds of xDrip+ app from [here](https://github.com/NightscoutFoundation/xDrip/releases). See general settings needed for xDrip [here](https://androidaps.readthedocs.io/en/latest/Configuration/xdrip.html).
2. Navigate to Settings > Hardware Data Source >  select "Libre (patched app)" as the data source.
3. Go to Settings > Inter-app settings > Broadcast locally and turn it **on**.
4. Go to Settings > Inter-app settings > Accept Glucose and turn it **off**.
5. Go to Settings > Inter-app settings > Identify Receiver and set it to "info.nightscout.androidaps".

### 
**Step 4: Start sensor within xDrip**

1. In xDrip+, start the sensor by selecting "Start Sensor" from the main menu on the left and "not today". No physical interaction with the sensor is required at this stage.
2. Wait for at least 15-20 minutes for the data to appear in xDrip+.

### 
**Step 5: Configure AAPS**

1. In AAPS go to Config Builder > BG Source and check "xDrip+"

**Subsequent sensor changes**

1. Open Libre 3 app and follow in app instructions to start a new sensor
2. Wait the 1 hour warm up period and ensure the sensor is receiving values
3. Force close the Libre 3 app (typically Settings > Apps > Libre 3 > Force Stop)
4. Open Juggluco and note the serial number of the existing sensor
   
![serial number](https://github.com/openaps/AndroidAPSdocs/assets/13263947/a159dd53-9f7c-4277-9d4b-bcf175dadd38)

5. With Juggluco open scan your active sensor with your phone's NFC reader. Readings should appear shortly (note the Libre 3 does not support receiving readings via NFC so readings will only become available once the bluetooth connection is established)
6. When you are ready to deactivate the old sensor<sup>1</sup>, open the Juggluco menu by clicking anywhere in the empty space in the upper left hand corner of the screen.
7. Select Sensor
8. Select the old sensor from the drop down menu by selecting the serial number you documented in step 4

![terminate sensor](https://github.com/openaps/AndroidAPSdocs/assets/13263947/80a8918e-aa4a-42bb-9ef9-1e062e1d650f)

9. Select Terminate<sup>2</sup>

<sup>1</sup>When two sensors are active Juggluco will send the most recent value from either sensor to xDrip+. If the sensors are not calibrated and reading BG similarly, this may result in jumpy BG values being reported to xDrip+. 

<sup>2</sup>If you terminate the wrong sensor, you can reactivate it starting at step 5 above.


### 
**Troubleshooting**


#### 
**Check that the following settings are properly set**



* NFC enabled / BT enabled
* Storage and location permission enabled
* Location service enabled (both in system settings and app permissions)
* Automatic time and time zone setting

#### 
**Troubleshooting Juggluco no readings**

* Check if the Libre 3 app is stopped.
* Rescan the Libre 3 sensor within the Juggluco app
* Make sure the sensor has been activated with the current Libreview account
* Check if a sensor number is visible in Juggluco (menu > Sensor)
* The sensor is usually connected to the smartphone via bluetooth within 3 minutes, but it may also take longer.
* If the Bluetooth connection cannot be established, try restarting the smartphone.
* Make sure the Libre 3 sensor is not connected to any other device.
* If necessary, in xDrip+ enter "BgReading:d,xdrip libre_receiver:v" under Less Common Settings->Extra Logging Settings->Extra tags for logging. This will log additional error messages for troubleshooting.

#### 
**Troubleshooting Blood sugar readings not uploading to Libreview**

* Check your internet connection
* Make sure Juggluco is receiving blood sugar readings
* Ensure the "Send to Libreview" checkbox is checked within Juggluco->Settings->Libreview

#### 
**Further help**


Original instructions: [jkaltes website](http://jkaltes.byethost16.com/Juggluco/libre3/)

Additional Github repo: [Github link](https://github.com/maheini/FreeStyle-Libre-3-patch)
