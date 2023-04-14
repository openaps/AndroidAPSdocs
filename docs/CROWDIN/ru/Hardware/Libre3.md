# Freestyle Libre 3

The Freestyle Libre 3 system can automatically report dangerous blood glucose levels. The Libre3 sensor sends the current blood glucose value to a receiver (reader or smartphone) every minute. При необходимости приемник инициирует оповещение. With the help of the Juggluco app ([Link](https://www.juggluco.nl/Juggluco/mgdL/index.html)), you can start the sensor directly and connect it to Xdrip+, AAPS or Libreview. In this way, the blood sugar minute values can be transmitted directly. It is even possible to receive historical data from the sensor's memory (two hours of minutely glucose and two weeks of once per 5 minute historical data) to be sent to Juggluco.

You don't need the Libre3 app anymore. you can use it side by side with Juggluco, be sure to force shut the Libre 3 app before you use Juggluco.

If you use Xdrip+, the sensor can also be calibrated in the range of -40 mg/dl to +20 mg/dl (-2.2 mmol/l to +1.1 mmol/l) to compensate for differences between the bloody reading and the sensor readings.


### Step 1: Install & set up Juggluco

Now download & install the Juggluco App from here ([link](https://www.juggluco.nl/Juggluco/download.html)). With the help of this app, the blood sugar readings can be sent directly to Xdrip and AAPS. For this purpose, the active sensor (which is registered on Libreview) is used within Juggluco. This also explains why a Libreview account is mandatory.

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
2. "xDrip broadcast" -> With this setting, the minutely blood sugar reading are sent directly to AAPS. The blood glucose source must be set to "xDrip+" within AAPS.

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

### Step 2: Set up xDrip

Значения гликемии передаются на смартфон приложением xDrip+.

- If not already set up then download xDrip+ app and install one of the latest nightly builds from [here](https://github.com/NightscoutFoundation/xDrip/releases).
- In xDrip+ select "Libre2 patched" or "Libre 2 (patched app)" as data source
- disable battery optimization and allow background activity for xDrip+ app
- If necessary, enter "BgReading:d,xdrip libre_receiver:v" under Less Common Settings->Extra Logging Settings->Extra tags for logging. Это позволит записывать сообщения об ошибках для устранения неисправностей.
- In xDrip+ go to Settings -> Interapp Compatibility -> Broadcast Data Locally and select ON.
- In xDrip+ go to Settings -> Interapp Compatibility -> Accept Treatments and select OFF.
- to enable AAPS to receive blood sugar levels (version 2.5.x and later) from xDrip+ please set Settings -> Interapp Settings -> Identify Receiver "info.nightscout.androidaps".
- If you want to be able to use AAPS to calibrate then in xDrip+ go to Settings -> Interapp Compatibility -> Accept Calibrations and select ON. You may also want to review the options in Settings -> Less Common Settings -> Advanced Calibration Settings.

```{image} ../images/Libre2_Tags.png
:alt: xDrip+ LibreLink журналы
```

### Step 3: Start sensor within xDrip

В xDrip+ запустите датчик с помощью "Start Sensor" и "not today". It is not necessary to hold the mobile phone onto the sensor. In fact "Start Sensor" will not physically start any Libre 3 sensor or interact with them in any case. Это просто для того, чтобы указать xDrip+, что новый сенсор начал передавать уровень ГК. Если доступно, введите два замера крови для начальной калибровки. Теперь значения глюкозы крови должны отображаться в xDrip+ каждые 5 минут. Skipped values, e.g. because you were too far away from your phone, will not be backfilled.

Wait at least 15-20 minutes if there is still no data.

После смены сенсора xDrip+ автоматически определит новый и удалит все данные калибровки. После активации измерьте ГК и сделайте первоначальную калибровку.

### Step 4: Configure AAPS

- In AAPS go to Config Builder -> BG Source and check "xDrip+"
- If AAPS does not receive BG values when phone is in airplane mode, use "Identify receiver"

Until now, using Libre 3 as BG source you cannot activate 'Enable SMB always' and 'Enable SMB after carbs' within SMB algorithm. The BG values of Libre 3 are not smooth enough to use it safely.

### Switch back to the Libre app from Juggluco

It is possible to switch back from Juggluco to the Libre 3 app as receiver. The following steps are necessary:

1. Reinstall Libre 3 app (Or clear data in settings)
2. Set up the Libre 3 app with the Libreview account with which the sensor was activated.
3. Stop the Juggluco app in the settings, similar to the Libre 3 app in the instructions.
4. In the Libre 3 menu, click "Start Sensor", select "Yes", "Next" and scan your sensor.
5. The 60-minute warm-up phase should then begin. This is necessary after every change and cannot be skipped.


### Missing FL3 values in Androidaps

Some Freestyle Libre 3 sensors send their minute glucose values not every minute (60s), but send them at slightly different times. (58s, 59s, or 61s, 62s). Juggluco gets the new glucose value directly from the sensor at whatever time they occure and broadcasts them. If you need Xdrip+ to calibrate or smooth the values and want them to be broadcasted to AAPS afterwards, there is a problem.

There is a sanity check in Xdrip+ that prevents broadcasting values that are below a certain threshold - in this case 60s.

This can lead to AndroidAPS not getting minute values from Xdrip!
```{image} https://camo.githubusercontent.com/72863950f3062716319362ba087877134d23fa9566c81e7ea6af266056dc5e1c/68747470733a2f2f696e73756c696e636c75622e64652f636f72652f696e6465782e7068703f6174746163686d656e742f32303136302d30356466383031392d343435642d343338652d383233362d3665396231633762333438622d6a7065672f
:alt: xDrip+ not broadcasting FL3 readings to AAPS.
```
To always get the values to AAPS, you have to use this Xdrip+ version: ([link](https://github.com/blaqone/xDrip))

(Libre3-experiences-and-troubleshooting)=
### Опыт и устранение неполадок

#### Necessary settings for a successful sensor start

- NFC enabled / BT enabled
- Storage and location permission enabled
- Location service enabled
- Automatic time and time zone setting

Обратите внимание, что служба определения расположения является центральным параметром. It is not about the location permission of the app, which must be set as well!


#### Troubleshooting Libre3 no readings

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

#### Further help

Original instructions: [jkaltes website](http://jkaltes.byethost16.com/Juggluco/libre3/)

Additional Github repo: [Github link](https://github.com/maheini/FreeStyle-Libre-3-patch)
