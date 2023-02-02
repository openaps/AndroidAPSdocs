# Freestyle Libre 3

Le système Freestyle Libre 3 peut automatiquement signaler des niveaux de glycémie dangereux. The Libre3 sensor sends the current blood glucose value to a receiver (reader or smartphone) every minute. Le récepteur déclenche une alarme si nécessaire. With the help of the Juggluco app, the sensor can be taken over after the start and connected to Xdrip+, AndroidAPS or Libreview. In this way, the blood sugar values can be transmitted directly. It is even possible to receive historical data from the sensor's memory (two hours of minutely glucose and two weeks of once per 5 minute historical data) to be sent to Juggluco.

The sensor can be calibrated in the range of -40 mg/dl to +20 mg/dl (-2.2 mmol/l to +1.1 mmol/l) to compensate for differences between the bloody reading and the sensor readings.

## Current restrictions

- If you have a rooted system, you have to hide it. You can find instructions here: [Link](https://www.reddit.com/r/Freestylelibre/comments/s22vlr/comment/hw2p4th/?utm_source=share&utm_medium=web2x&context=3).

  (There are several apps to find out if the smartphone is rooted, one of them is e.g. [Root Checker App](https://play.google.com/store/apps/details?id=com.joeykrim.rootcheck))

- The Juggluco app only supports English, Dutch and Italian languages.

### Step 1: Download and set up the Libre3 app

Install the Libre 3 app from the Playstore and open it. On the home screen, click Sign In. Registration with your Libreview account is mandatory - if you don't have one yet, you can create one.

```{image} ../images/libre3/1.jpg
:alt: Libre3 start screen
```

```{image} ../images/libre3/2.jpg
:alt: Libreview login
```

You must then accept Abbott's Terms of Service. The last one is optional and can also be rejected.

```{image} ../images/libre3/4.jpg
:alt: Libre 3 Term
```

```{image} ../images/libre3/5.jpg
:alt: Libre 3 Term
```

```{image} ../images/libre3/6.jpg
:alt: Libre 3 Term
```

Adjust the app step by step according to your needs. If you see this message about disabling battery optimization, tap "Allow".

```{image} ../images/libre3/10.jpg
:alt: Libre 3 battery optimization
```

After setting up the Libre 3 app, you can already activate your first sensor. To do this, scan the sensor as shown and wait for the sensor to warm up within the next 60 minutes.

```{image} ../images/libre3/12.jpg
:alt: Enable Libre 3 Sensor
```

### Step 2: Stop Libre 3 app

After the sensor has started successfully and the first sensor reading is visible, you can continue. Now open the settings and select the menu option for "Apps".

```{image} ../images/libre3/13.jpg
:alt: App settings
```

You then search for the Libre 3 app. Once you have found it, tap on it.

```{image} ../images/libre3/14.jpg
:alt: Libre 3 app settings
```

Now tap "Stop" or "Force stop". The exact button may vary depending on the Android version.

```{image} ../images/libre3/15.jpg
:alt: Exit Libre 3
```

If there is another request, you can confirm it with "OK".

```{image} ../images/libre3/16.jpg
:alt: Exit Libre 3
```

### Step 3: Install & set up Juggluco

Now download & install the Juggluco App from [here (link)](https://github.com/maheini/FreeStyle-Libre-3-patch/raw/main/Juggluco-solution/versions/latest/Juggluco.apk) or [here (mirror)](http://jkaltes.byethost16.com/Juggluco/download.html) (version 4.0.1 or higher). With the help of this app, the blood sugar readings can be sent directly to Xdrip and AndroidAPS. For this purpose, the active sensor (which is registered on Libreview) is used within Juggluco. This also explains why a Libreview account is mandatory.

After installing Juggluco, several messages may appear. Allow Juggluco to find, locate and connect nearby devices.

```{image} ../images/libre3/17.jpg
:alt: Allow Juggluco connections
```

A request to deactivate the battery optimization may appear as well. Tap "Allow". This is important to keep the app running in the background.

```{image} ../images/libre3/18.jpg
:alt: Disable Juggluco battery optimization
```

Tap OK when Juggluco is introduced.

```{image} ../images/libre3/19.jpg
:alt: Disable Juggluco battery optimization
```

Now you will see the Juggluco home screen. Click onto the empty space within the upper left half. You can see the approximate position here.

```{image} ../images/libre3/20.jpg
:alt: Open Juggluco Menu
```

This menu will open. Here you can select "Settings".

```{image} ../images/libre3/21.jpg
:alt: Juggluco Menu
```

This page will then show up. In the selection "1." you have two options:

1. "Send to xDrip" -> With this setting, the blood sugar readings are sent to xDrip. Select "Libre2 patched" or "Libre 2 (patched app)" as the recipient within xDrip.
2. "xDrip broadcast" -> With this setting, the minutely blood sugar reading are sent directly to AndroidAPS. The blood glucose source must be set to "xDrip+" within AndroidAPS.

To start the sensor, choose "2." the "Libreview" checkbox.

```{image} ../images/libre3/22.jpg
:alt: Juggluco Settings
```

In the next screen you have to enter your login data for Libreview. It must be the account with which the sensor was activated. Then click on "Get Account ID".

```{image} ../images/libre3/23.jpg
:alt: Connect Libreview
```

If everything went well, a multi-digit number should now be visible below the "Resend data" button. This process may take some time - if the number still doesn't appear, check your internet connection and try the previous steps again.

**Note:** If you want to upload blood sugar readings to Libreview, you can check the "Send to Libreview" checkbox.

```{image} ../images/libre3/24.jpg
:alt: Check Libreview
```

Now it's time to restart the sensor! Go back to the Juggluco home screen and scan your previously activated sensor. The sensor will start and may enter a 60 minute warm-up period again. After the 60 minutes, the readings should be visible on the Juggluco home screen.

```{image} ../images/libre3/25.jpg
:alt: Check Libreview
```

Done, that's it! If the readings are not visible, you can find more information in the "Experiences and troubleshooting" section.

### Step 4: Set up xDrip

Les glycémies sont reçues sur le smartphone par l'application xDrip+.

- If not already set up then download xDrip+ app and install one of the latest nightly builds from [here](https://github.com/NightscoutFoundation/xDrip/releases).
- In xDrip+ select "Libre2 patched" or "Libre 2 (patched app)" as data source
- disable battery optimization and allow background activity for xDrip+ app
- If necessary, enter "BgReading:d,xdrip libre_receiver:v" under Less Common Settings->Extra Logging Settings->Extra tags for logging. Cela permettra de consigner des messages d'erreur supplémentaires pour le dépannage.
- In xDrip+ go to Settings -> Interapp Compatibility -> Broadcast Data Locally and select ON.
- In xDrip+ go to Settings -> Interapp Compatibility -> Accept Treatments and select OFF.
- to enable AAPS to receive blood sugar levels (version 2.5.x and later) from xDrip+ please set Settings -> Interapp Settings -> Identify Receiver "info.nightscout.androidaps".
- If you want to be able to use AndroidAPS to calibrate then in xDrip+ go to Settings -> Interapp Compatibility -> Accept Calibrations and select ON. You may also want to review the options in Settings -> Less Common Settings -> Advanced Calibration Settings.

```{image} ../images/Libre2_Tags.png
:alt: xDrip+ journaux LibreLink
```

### Étape 5 : Démarrez le capteur dans xDrip

Dans xDrip+ démarrez le capteur avec "Start Sensor" et "not today". It is not necessary to hold the mobile phone onto the sensor. In fact "Start Sensor" will not physically start any Libre 3 sensor or interact with them in any case. Il s'agit simplement d'indiquer à xDrip+ qu'un nouveau capteur envoie des glycémies. Si possible, entrez deux valeurs de glycémie capillaire pour l'étalonnage initial. Maintenant, les glycémies doivent être affichées dans xDrip+ toutes les 5 minutes. Skipped values, e.g. because you were too far away from your phone, will not be backfilled.

Wait at least 15-20 minutes if there is still no data.

Après un changement de capteur, xDrip+ détectera automatiquement le nouveau capteur et supprimera toutes les données d'étalonnage. Vous pouvez vérifier la glycémie capillaire après l'activation et effectuer un nouvel étalonnage initial.

### Step 6: Configure AndroidAPS

- In AndroidAPS go to Config Builder -> BG Source and check "xDrip+"
- If AndroidAPS does not receive BG values when phone is in airplane mode, use "Identify receiver"

Until now, using Libre 3 as BG source you cannot activate 'Enable SMB always' and 'Enable SMB after carbs' within SMB algorithm. The BG values of Libre 3 are not smooth enough to use it safely.

### Switch back to the Libre app from Juggluco

It is possible to switch back from Juggluco to the Libre 3 app as receiver. The following steps are necessary:

1. Reinstall Libre 3 app (Or clear data in settings)
2. Set up the Libre 3 app with the Libreview account with which the sensor was activated.
3. Stop the Juggluco app in the settings, similar to the Libre 3 app in the instructions.
4. In the Libre 3 menu, click "Start Sensor", select "Yes", "Next" and scan your sensor.
5. The 60-minute warm-up phase should then begin. This is necessary after every change and cannot be skipped.

### Astuces et Dépannages

#### Necessary settings for a successful sensor start

- NFC activé / BT activé
- Storage and location permission enabled
- Location service enabled
- Automatic time and time zone setting

Veuillez noter que l'activation du service de localisation est primordial. It is not about the location permission of the app, which must be set as well!

#### Dépannage Libre3 sans lectures

- Android location service is not granted - please enable it in the system settings
- automatic time and time zone not set - please change the settings accordingly
- Bluetooth is switched off - please switch on¨
- Make sure the Libre 3 sensor is not connected to any other device.

#### Troubleshooting Juggluco no readings

- Check if the Libre 3 app is stopped.
- Rescan the Libre 3 sensor within the Juggluco app
- Make sure the sensor has been activated with the current Libreview account
- Check if a sensor number is visible in Juggluco
- The sensor is usually connected to the smartphone within 3 minutes, but it can also take longer.
- If the Bluetooth connection cannot be established, try restarting the smartphone.
- Make sure the Libre 3 sensor is not connected to any other device.

#### Troubleshooting Blood sugar readings not uploading to Libreview

- Check your internet connection
- Make sure Juggluco is receiving blood sugar readings
- Ensure the "Send to Libreview" checkbox is checked within Juggluco->Settings->Libreview

#### Aide supplémentaire

Original instructions: [jkaltes website](http://jkaltes.byethost16.com/Juggluco/libre3/)

Additional Github repo: [Github link](https://github.com/maheini/FreeStyle-Libre-3-patch)
