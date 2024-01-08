# Dexcom G6

## Grundsätzliches vorab

-   Follow general CGM hygiene and setting sensor recommendation [here](../Hardware/GeneralCGMRecommendation.md).

## Allgemeine Hinweise zum Closed Loop mit dem Dexcom G6

Mache Dir die folgenden Punkte bewusst, um das System sicher zu nutzen:

-   If you are using a rebatteried or modded transmitter with xDrip+, the safest thing to do is **disable** preemptive restarts of the sensor that are anyway not needed for xDrip+.
-   Das sogenannte "Pre-soaking" (Sensor früher ohne Transmitter setzen, damit er sich an die Gewebsflüssigkeit "gewöhnt") mit Werkskalibrierung führt wahrscheinlich zu Abweichungen in den Glukosewerten. Falls Du mit "pre-soaking" arbeitest, wirst Du wahrscheinlich bessere Ergebnisse erzielen, wenn Du den Sensor kalibrierst.

To learn more about the details and reasons for these recommendations read the [complete article](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) published by Tim Street at [www.diabettech.com](https://www.diabettech.com).

## Dexcom G6 mit xDrip+

-   Der Dexcom G6-Transmitter kann gleichzeitig mit einem Dexcom-Empfänger (oder alternativ mit der t:slim-Pumpe) und einer App auf dem Handy verbunden werden.
-   Wenn Du xDrip+ zum Empfang der CGM-Daten verwendest, deinstalliere zuerst die Dexcom App. **You cannot connect xDrip+ and Dexcom app with the transmitter at the same time!**
-   If you need Clarity and want to profit from xDrip+ alarms use the [BYODA](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) with local broadcast to xDrip+.
-   If not already set up, download [xDrip+](https://github.com/NightscoutFoundation/xDrip) and follow the instructions on [xDrip+ settings page](../Configuration/xdrip.md).
-   Select xDrip+ in ConfigBuilder (setting in AAPS).
-   Adjust settings in xDrip+ according to [xDrip+ settings page](../Configuration/xdrip.md)
-   If AAPS does not receive BG values when phone is in airplane mode use 'Identify receiver' as describe on [xDrip+ settings page](../Configuration/xdrip.md).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## G6 mit Build Your Own Dexcom App

-   As of December 2020 [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0) (BYODA) also supports local broadcast to AAPS and/or xDrip+ (not for G5/ONE/G7 sensors!)
-   Mit dieser App kannst du den Dexcom G6 mit jedem Android Smartphone verwenden.
-   Uninstall the original Dexcom app or patched Dexcom app if you used one of those previously (**do not stop** the currently running sensor)
-   Installiere die heruntergeladene APK.
-   Sensorcode und Seriennummer des Senders in der gepatchten App eingeben.
-   In phone settings go to apps > Dexcom G6 > permissions > additional permissions and press 'Access Dexcom app'.
-   Innerhalb kurzer Zeit sollte BYODA das Transmitter-Signal aufnehmen.

### Settings for AAPS

-   Wähle 'gepatchte Dexcom App' im Konfigurationsgenerator.
-   If you don't receive any values select any other data source, then re-select 'Dexcom App (patched)' to trigger the demand for permissions to establish the connection between AAPS and BYODA-broadcast.

### Einstellungen für xDrip+

-   Wähle '640G/Eversense' als Datenquelle.
-   Command 'start sensor' must be performed in xDrip+ in order to receive values. This will not affect your current sensor controlled by Build Your Own Dexcom App.


(DexcomG6-troubleshooting-g6)=
## Problembehandlung G6

### Dexcom G6-spezifische Problembehandlung

-   Scroll down to **Troubleshooting** [here](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Allgemeine Problembehandlung

General Troubleshooting for CGMs can be found [here](./GeneralCGMRecommendation.md#troubleshooting).

### Neuer Transmitter bei laufendem Sensor

If you happen to change transmitter during a running sensor session you might try to remove the transmitter without damaging the sensor mount. A video can be found at <https://youtu.be/tx-kTsrkNUM> and [here](https://navid200.github.io/xDrip/docs/Remove-transmitter.html).
