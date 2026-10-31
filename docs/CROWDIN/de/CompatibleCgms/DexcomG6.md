# Dexcom G6 und ONE

## Grundsätzliches vorab

-   Beachte die allgemeinen Empfehlungen zur CGM Hygiene und zum Setzen des Sensors, die Du [hier](../CompatibleCgms/GeneralCGMRecommendation.md) findest.

## Allgemeine Hinweise zum Loopen mit G6 und ONE

- Die aktuellen Transmitter heißen 'Firefly'. Sensoren können nur durch das Entfernen des Transmitters neu gestartet werden. Der Transmitter selber kann nicht zurückgesetzt werden und er erzeugt auch keine eigenen Rohdaten.

- Wenn Du einen Sensor neu startest, bereite Dich auf eine Kalibrierung vor und habe ein Auge auf mögliche Abweichungen.

- Das sogenannte "Pre-soaking" (Sensor früher ohne Transmitter setzen, damit er sich an die Gewebsflüssigkeit "gewöhnt") des G6/ONE mit Werkskalibrierung führt wahrscheinlich zu Abweichungen in den Glukosewerten. Falls Du mit "pre-soaking" arbeitest, wirst Du wahrscheinlich besser Ergebnisse erzielen, wenn Du den Sensor kalibrierst.

Mehr dazu findest Du in dem, von Tim Street auf der Seite [www.diabettech.com](https://www.diabettech.com) veröffentlichten, [Artikel](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/).

## If using G6 or ONE with xDrip

- If not already set up, download [xDrip](https://github.com/NightscoutFoundation/xDrip) and adjust its settings following the [xDrip settings page](../CompatibleCgms/xDrip.md).
- Select xDrip in [**Configuration → BG Source**](#Config-Builder-bg-source).
- Der Dexcom G6- und ONE-Transmitter können gleichzeitig mit einem Dexcom-Empfänger (oder alternativ mit der t:slim-Pumpe) und einer App auf dem Smartphone verbunden werden.
- When using xDrip as receiver uninstall the Dexcom app first. **You cannot connect xDrip and Dexcom app with the transmitter at the same time!**
- If you need Clarity and want to profit from xDrip alarms use the [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (only G6) with local broadcast to xDrip.
- You can also use xDrip as a companion app of the official Dexcom app, but you might experience delays in BG readings.
- xDrip always uses the transmitter's [native algorithm](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) with current transmitters; there is no reason to disable it. [Preemptive restarts](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) only function on old transmitters (firmware 1.6.5.25 or earlier), where they are needed to prevent the sensor stopping after 10 days; recent (Firefly) transmitters ignore them. See [Restart a sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html) before attempting any restart.
- Everything related to the sensor and transmitter themselves is documented on the [xDrip Dexcom page](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## G6 mit Build Your Own Dexcom App

```{admonition} Old app version
:class: warning
Dexcom BYODA ist mittlerweile eine sehr alte App-Version und kann nicht mehr aktualisiert werden.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) supports local broadcast to AAPS and/or xDrip

-   Mit dieser App kannst du den Dexcom G6 mit jedem Android Smartphone verwenden.
-   Solltest Du bisher die originale Dexcom App oder die gepatchte Dexcom App genutzt haben, dann installiere diese (**Stoppe nicht** den aktiven Sensor)
-   Installiere die heruntergeladene APK
-   Sensorcode und Seriennummer des Senders in der gepatchten App eingeben.
-   Gehe in den Einstellungen des Smartphone zu Apps > Dexcom G6 > Berechtigungen > Weitere Berechtigungen und drücke 'Zugriff Dexcom App'.
-   Innerhalb kurzer Zeit sollte BYODA das Transmitter-Signal aufnehmen.

### Einstellungen in AAPS

-   Select **BYODA** in [**Configuration → BG Source**](#Config-Builder-bg-source).

-   If you don't receive any values select any other data source, then re-select **BYODA** to trigger the demand for permissions to establish the connection between AAPS and BYODA-broadcast.

### Settings for xDrip

-   Wähle '640G/Eversense' als Datenquelle.
-   Command 'start sensor' must be performed in xDrip in order to receive values. Dies hat keinen Einfluss auf den laufenden Sensor.


(DexcomG6-troubleshooting-g6)=
## Problembehandlung G6 und ONE

### Dexcom G6/ONE-spezifische Problembehandlung

-   Scrolle herunter bis zur **Problembehandlung** [hier](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Allgemeine Problembehandlung

Allgemeine Tipps zur Problembehebung für CGMs findest Du [hier](#general-cgm-troubleshooting).

### Neuer Transmitter bei laufendem Sensor

Falls Du einen Transmitter bei einer laufenden Sensorsitzung wechseln musst, kannst Du versuchen, den Transmitter zu tauschen, ohne die Transmitterhalterung zu beschädigen. Ein Video dazu findest Du [hier](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Wenn Du Dich stattdessen für [diese Lösung](https://youtu.be/tx-kTsrkNUM) entscheidest, musst Du sehr vorsichtig mit dem Teststreifen sein, um die [Sensorkontakte nicht zu beschädigen](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html).
