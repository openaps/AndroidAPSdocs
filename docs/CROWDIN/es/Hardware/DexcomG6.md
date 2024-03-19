# Dexcom G6

## Lo básico primero

-   Follow general CGM hygiene and setting sensor recommendation [here](../Hardware/GeneralCGMRecommendation.md).

## Consejos generales para el bucle con G6

- Recent transmitters are called Firefly. Sensors cannot be restarted without removing the transmitter, which itself cannot be reset, they also do not generate raw data.

- If you are restarting sensors, ensure you are ready to calibrate and keep an eye on variation.

- La preabsorción del G6 con calibración de fábrica es probable que dé variaciones en los resultados. Si haces preconfiguración, entonces para obtener los mejores resultados, probablemente necesitarás calibrar el sensor.

Read more in the [article](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) published by Tim Street at [www.diabettech.com](https://www.diabettech.com).

## Si se utiliza G6 con xdrip+

- If you are using a recent (Firefly) transmitter, preemptive restarts are **ignored**.
- If you are using a modded transmitter you do **not need** to use preemptive restarts.
-   If you are using an old rebatteried transmitter, the safest thing to do is **disable** [preemptive restarts](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html). Though, in this case you will have to use the G6 in non-[native mode](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) (which is unadvisable as it disables factory calibration and doesn't filter noisy readings), or else the sensor will stop after 10 days.
-   El transmisor Dexcom G6 puede conectarse simultáneamente al receptor Dexcom (o alternativamente a la bomba t:slim) y a una aplicación en tu teléfono.
-   When using xDrip+ as receiver uninstall the Dexcom app first. **You cannot connect xDrip+ and Dexcom app with the transmitter at the same time!**
-   If you need Clarity and want to profit from xDrip+ alarms use the [BYODA](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) with local broadcast to xDrip+. You can also use xDrip+ as a companion app of the official Dexcom app, but you might experience delays in BG readings.
-   If not already set up, download [xDrip+](https://github.com/NightscoutFoundation/xDrip) and follow the instructions on [xDrip+ settings page](../Configuration/xdrip.md).
-   Select xDrip+ in in [ConfigBuilder, BG Source](../Configuration/Config-Builder.md#bg-source).

- Adjust settings in xDrip+ according to [xDrip+ settings page](../Configuration/xdrip.md)

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## If using G6 with Build Your Own Dexcom App

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) supports local broadcast to AAPS and/or xDrip+ (not for G5/ONE/G7 sensors!)

![BYODA broadcast options](../images/BYODA.png)

-   This app lets you use your Dexcom G6 with any Android smartphone.
-   Uninstall the original Dexcom app or patched Dexcom app if you used one of those previously (**do not stop** the currently running sensor)
-   Install the downloaded apk
-   Enter sensor code and transmitter serial no. in patched app.
-   In phone settings go to apps > Dexcom G6 > permissions > additional permissions and press 'Access Dexcom app'.
-   After short time BYODA should pick-up transmitter signal.

### Settings for AAPS

-   Select 'Dexcom App (patched)' in in [ConfigBuilder, BG Source](../Configuration/Config-Builder.md#bg-source).

-   If you don't receive any values select any other data source, then re-select 'Dexcom App (patched)' to trigger the demand for permissions to establish the connection between AAPS and BYODA-broadcast.

### Settings for xDrip+

-   Select '640G/Eversense' as data source.
-   Command 'start sensor' must be performed in xDrip+ in order to receive values. This will not affect your current sensor controlled by Build Your Own Dexcom App.


(DexcomG6-troubleshooting-g6)=
## Resolución de problemas G6

### Resolución de problemas específica de Dexcom G6

-   Scroll down to **Troubleshooting** [here](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### General troubleshooting

General Troubleshooting for CGMs can be found [here](./GeneralCGMRecommendation.md#troubleshooting).

### Nuevo transmisor con sensor en ejecución

If you happen to change transmitter during a running sensor session you might try to remove the transmitter without damaging the sensor mount. A video can be found [here](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). If you opt for [this solution](https://youtu.be/tx-kTsrkNUM) instead, you must be careful to avoid [damaging sensor contacts](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html) with the strip.
