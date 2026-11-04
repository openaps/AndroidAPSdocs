# **Freestyle Libre 3** e 3+

Freestyle Libre 3 (FSL3) requires a unique setup to receive BG values in to AAPS. There are two possible ways of getting Freestyle Libre 3 (FSL3) values to AAPS.

![FL3](../images/d912c1d3-06d2-4b58-ad7c-025ca1980fae.jpeg)

I metodi qui sotto usano l'app separata Juggluco. It uses Juggluco to receive raw, 1-minute interval data from the sensor which is then passed to xDrip or AAPS. New sensors can be started either with the Libre 3 App or directly in Juggluco. La guida qui sotto descrive come avviare un sensore con l'app Juggluco. If the sensor has been started with a Libreview account logged in, it is also possible to switch between Juggluco and the Libre 3 app as receiver.

Juggluco can also pass data to LibreView for sharing with health care providers when the sensor is started with the Libre 3 app.

Within xDrip the sensor can be calibrated in the range of -40 mg/dL to +20 mg/dL (-2.2 mmol/L to +1.1 mmol/L) to compensate for differences between a manual meter reading and the sensor readings.

## Method 1: use 1-minute readings directly
**AAPS** is tailored for 5-minute readings. Therefore processing 1-minute values has occasional limitations.

Vedi [qui](#juggluco-to-aaps).


## Method 2: convert 1-minute readings into 5-minute values via xDrip
This method uses Juggluco to receive raw, 1-minute interval data from the sensor which is then passed to xDrip to be smoothed into 5-minute interval data to be passed to AAPS.

### Step 1: Setup Juggluco
Scarica e installa l'app Juggluco da [qui](https://www.juggluco.nl/Juggluco/download.html). Segui le istruzioni [qui](https://www.juggluco.nl/Juggluco/libre3/)

Make sure you send the glucose values to xDrip: In Juggluco's settings you can configure Juggluco to send its glucose value to other apps. Juggluco può inviare tre tipi di broadcast: il **Patched Libre broadcast** era usato in origine dall'app Librelink modificata e si può usare per inviare i valori di glicemia a xDrip.

### Step 2: Setup xDrip

The blood glucose values are received by the xDrip app on the smartphone.

- If not already set up then download [xDrip](https://github.com/NightscoutFoundation/xDrip) and follow the instructions on [xDrip settings page](../CompatibleCgms/xDrip.md).
- In xDrip select "Libre2 (patched app)" as data source.
- If necessary, enter "BgReading:d,xdrip libre_receiver:v" under Less Common Settings → Extra Logging Settings → Extra tags for logging. This will log additional error messages for troubleshooting.

![xDrip LibreLink logging](../images/Libre2_Tags.png)

- Technically, the current blood sugar value is transmitted to xDrip every minute. A weighted average filter calculates a smoothed value over the last 25 minutes by default. Puoi cambiare il periodo nel menu NFC Scan features.

  → Hamburger menu → Settings → NFC Scan features → Smooth libre 3 data when using xxx method

  ![xDrip advanced settings Libre 2 & raw values](../images/xDrip_Libre3_Smooth.png)



### Step 3: Start sensor within xDrip

In xDrip avvia il sensore con "Start Sensor" e "not today". It is not necessary to hold the mobile phone onto the sensor. In fact "Start Sensor" will not physically start any Libre 3 sensor or interact with them in any case. This is simply to indicate xDrip that a new sensor is delivering blood sugar levels. If available, enter two blood-measured values for the initial calibration. Now the blood glucose values should be displayed in xDrip every 5 minutes. Skipped values, e.g. because you were too far away from your phone, will not be backfilled.

Wait at least 15-20 minutes if there is still no data.

After a sensor change xDrip will automatically detect the new sensor and will delete all calibration data. You may check your blood glucose after activation and make a new initial calibration.

### Step 4: Configure AAPS

- Vedi [qui](#juggluco-to-xdrip) e poi torna qui.

- If **AAPS** does not receive BG values when phone is in airplane mode, use "Identify receiver"
- Disattiva lo smoothing (lo fa già xDrip)

## Cambi sensore successivi

1. Apri Juggluco e annota il numero di serie del sensore attuale

![Numero di serie del Libre](../images/libre3/step_13.jpg)

2. Now simply scan your new sensor with your phone’s NFC reader. Juggluco will display a notice if the process had been started successfully.
3. When you are ready to deactivate the old sensor, then open the Juggluco menu by clicking anywhere in the empty space in the upper left hand corner of the screen.
4. Seleziona il sensore scaduto e tocca "Terminate"

![Terminate sensor](../images/libre3/step_14.jpg)

Nota: quando due sensori sono attivi, Juggluco invia a xDrip il valore più recente di uno dei due sensori. Se i sensori non sono calibrati per leggere la glicemia in modo simile, a xDrip possono arrivare valori della glicemia che saltano. If you terminate the wrong sensor, you can reactivate it by simply scanning the sensor.

## Switch sensor between Libre 3 and Juggluco app

If the sensor has been started with a Libreview account logged in, it is also possible to switch between Juggluco and the Libre 3 app as receiver. This requires the following steps:

1. Installa l'app Libre 3 dal Google Play Store
2. Set up the Libre 3 app with the Libreview account with which the sensor was activated.
3. Forza l'arresto dell'app Juggluco nelle impostazioni di Android.
4. Nel menu di Libre 3 tocca "Start Sensor", seleziona "Yes", "Next" e scansiona il sensore.
5. After some minutes, the BG-Values should be visible within Libre 3 App.

In order to switch from the Libre 3 app to Juggluco, you need to force-stop Libre 3 app via Android settings and proceed with Step 1 & 2.

(libre3-experiences-and-troubleshooting)=
## Experiences and Troubleshooting

### Troubleshooting Libre3 -> Juggluco Connection

- Make sure you are using a current version of the Juggluco app
- Check your settings according to this guide
- You may sometimes have to force stop the Libre 3 app and Juggluco and restart it.
- Disattiva il Bluetooth e riattivalo
- Wait some time or try to close Juggluco
- Older versions of Juggluco (below 2.9.6) do not send subsequent data from the Libre3 sensor to connected devices (e.g. Juggluco on WearOS). You may need to click "Resend data" in the patched Libre3 app (Juggluco menu).

### Further help

Original instructions: [jkaltes website](https://www.juggluco.nl/Juggluco/libre3/)

Repository GitHub aggiuntivo: [link GitHub](https://github.com/maheini/FreeStyle-Libre-3-patch)
