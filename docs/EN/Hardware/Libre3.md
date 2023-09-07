# Freestyle Libre 3

The Freestyle Libre 3 system can automatically report dangerous blood glucose levels. The Libre3 sensor sends the current blood glucose value to a receiver (reader or smartphone) every minute. The receiver triggers an alarm if needed. With the Juggluco app, the blood glucose value can be used for external services such as AndroidAPS or xDrip.

The sensor can be calibrated in the range of -40 mg/dl to +20 mg/dl (-2,2 mmol/l to +1,1 mmol/l) to adjust differences between finger prick measurements and sensor readings.

If the sensor has been started with a Libreview account logged in, it is also possible to switch between Juggluco and the Libre 3 app as receiver.

### Current limitations

- If you have a rooted system and want to use the Libre 3 app, you need to hide it. You can find instructions here: [Link](https://www.reddit.com/r/Freestylelibre/comments/s22vlr/comment/hw2p4th/?utm_source=share\&utm_medium=web2x\&context=3).
  (To find out if the smartphone is rooted, there are several apps, one of them is e.g. https://root-checker.org/).


## Step 1: Setup Juggluco

Download and install the Juggluco app from [here](https://www.juggluco.nl/Juggluco/download.html).

Now let's open the app. You will be greeted with this screen below. Just click on the "Without Sensor" button.

![Juggluco welcome screen](../images/libre3/step\_8.jpg)

After that we get a short introduction text. Click on "OK".

![Juggluco installation screen](../images/libre3/step\_9.jpg)

Ok, let's set up Juggluco! The app itself doesn't have the best interface, but it is very useful. To open the settings, click anywhere on the screen in the top left corner. Now you should see the following menu. Select "Settings."

![Juggluco settings menu](../images/libre3/step\_10.jpg)

In the settings you can configure the data connection to xDrip. Click on "Patched Libre Broadcast" and press "OK".

![Juggluco settings](../images/libre3/step\_11.jpg)

Well done!

Necessary settings for a successful sensor start:

- NFC enabled / BT enabled
- Memory and location permission enabled
- location service enabled
- automatic time and time zone setting

Please note that location service is a central setting. It is not the location authorization of the app, which must also be set!

Now start the Libre3 sensor with the Juggluco app by simply scanning the sensor. Make sure that all settings are correct.

## Step 2 (optional): Setup Libreview

You can use a sensor that was already used with the original Libre3 app if you use the same LibreView account name. Press "Start new sensor" and scan the sensor. If you want to return to the Juggluco app, stop the Libre3 app and scan the sensor with the Juggluco app open.

You can also, for example, share your data with your doctor or print the reports from Libreview before your visit. The graphs and blood glucose reports in Libreview are usually better than those from xDrip or Juggluco.

1. navigate to settings in Juggluco
2. choose "Liebreview
![Liebreview](../images/libre3/step\_12.jpg)
 
3. enter the data of your Libreview account (if you don't have one yet, create one in advance)
4. done!

## Step 3 (optional): Setup xDrip

The blood glucose values are received by the xDrip+ app on the smartphone.

- If not already set up, download the xDrip+ app and install one of the latest nightly builds from [here](https://github.com/NightscoutFoundation/xDrip/releases).
- In xDrip+ select "Libre2 (patched app)" as data source.
- Disable battery optimization and allow background activity for the xDrip+ app.
- If necessary, enter "BgReading:d,xdrip libre_receiver:v" under Less Common Settings->Extra Logging Settings->Extra tags for logging. This will log additional error messages for troubleshooting.
- In xDrip+ go to Settings -> Interapp Compatibility -> Transfer data locally and select ON.
- In xDrip+, go to Settings -> Interapp Compatibility -> Accept Treatments and select OFF.
- To allow AAPS to receive blood glucose values (from version 2.5.x) from xDrip+, please enable Settings -> Interapp Settings -> Identify Receiver "info.nightscout.androidaps".
- If you want to use AndroidAPS for calibration, go to Settings -> Interapp compatibility -> Accept calibrations in xDrip+ and select ON. It's also best to check the options under Settings -> Less General Settings -> Check Advanced Calibration Settings.

## Step 4 (optional): Start sensor within xDrip

In xDrip+ start the sensor with "Start Sensor" and "not today". It is not necessary to hold the mobile phone onto the sensor. In fact "Start Sensor" will not physically start any Libre 3 sensor or interact with them in any case. This is simply to indicate xDrip+ that a new sensor is delivering blood sugar levels. If available, enter two bloody measured values for the initial calibration. Now the blood glucose values should be displayed in xDrip+ every 5 minutes. Skipped values, e.g. because you were too far away from your phone, will not be backfilled.

Wait at least 15-20 minutes if there is still no data.

After a sensor change xDrip+ will automatically detect the new sensor and will delete all calibration data. You may check you bloody BG after activation and make a new initial calibration.

## Step 5 (for looping only): Configure AndroidAPS

- In AndroidAPS go to Config Builder -> BG Source and check "xDrip+"
- If AndroidAPS does not receive BG values when phone is in airplane mode, use "Identify receiver"

As of now, when using Libre 3 as a BG source, the "Always enable SMB" and "Enable SMB by Carbs" options cannot be enabled in the SMB algorithm. The BG values from Libre 3 are not smooth enough to use safely.

## Switch sensor between Libre 3 and Juggluco app

If the sensor has been started with a Libreview account logged in, it is also possible to switch between Juggluco and the Libre 3 app as receiver. This requires the following steps:

1. Install the Libre 3 app from Google Playstore
2. Set up the Libre 3 app with the Libreview account with which the sensor was activated.
3. Force stop the Juggluco app in the Android settings.
4. In the Libre 3 menu, click "Start Sensor", select "Yes", "Next" and scan your sensor.
5. After some minutes, the BG-Values should be visible within Libre 3 App.

In order to switch from the Libre 3 app to Juggluco, you need to force-stop Libre 3 app via Android settings and proceed with Step 1 & 2.

## Experiences and Troubleshooting

### Troubleshooting Libre3 -> Juggluco Connection

- Make sure you are using a current version of the Juggluco app
- Check your settings according to this guide
- You may sometimes have to force stop the Libre 3 app and Juggluco and restart it.
- Disable Bluetooth and enable it again
- Wait some time or try to close Juggluco
- Older versions of Juggluco (below 2.9.6) do not send subsequent data from the Libre3 sensor to connected devices (e.g. Juggluco on WearOS). You may need to click "Resend data" in the patched Libre3 app (Juggluco menu).

### Further help

Original instructions: [jkaltes website](https://www.juggluco.nl/Juggluco/libre3/)

Additional Github repo: [Github link](https://github.com/maheini/FreeStyle-Libre-3-patch)
