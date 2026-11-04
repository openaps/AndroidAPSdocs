# Dexcom G6 und ONE

## Grundsätzliches vorab

-   Beachte die allgemeinen Empfehlungen zur CGM Hygiene und zum Setzen des Sensors, die Du [hier](../CompatibleCgms/GeneralCGMRecommendation.md) findest.

## Allgemeine Hinweise zum Loopen mit G6 und ONE

- Die aktuellen Transmitter heißen 'Firefly'. Sensoren können nur durch das Entfernen des Transmitters neu gestartet werden. Der Transmitter selber kann nicht zurückgesetzt werden und er erzeugt auch keine eigenen Rohdaten.

- Wenn Du einen Sensor neu startest, bereite Dich auf eine Kalibrierung vor und habe ein Auge auf mögliche Abweichungen.

- Das sogenannte "Pre-soaking" (Sensor früher ohne Transmitter setzen, damit er sich an die Gewebsflüssigkeit "gewöhnt") des G6/ONE mit Werkskalibrierung führt wahrscheinlich zu Abweichungen in den Glukosewerten. Falls Du mit "pre-soaking" arbeitest, wirst Du wahrscheinlich besser Ergebnisse erzielen, wenn Du den Sensor kalibrierst.

Mehr dazu findest Du in dem, von Tim Street auf der Seite [www.diabettech.com](https://www.diabettech.com) veröffentlichten, [Artikel](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/).

## Wenn Du G6 oder ONE mit xDrip nutzt

- Falls noch nicht geschehen, lade [xDrip](https://github.com/NightscoutFoundation/xDrip) herunter und passe die Einstellungen nach der Seite [xDrip-Einstellungen](../CompatibleCgms/xDrip.md) an.
- Wähle xDrip unter [**Konfiguration → BZ-Quelle**](#Config-Builder-bg-source).
- Der Dexcom G6- und ONE-Transmitter können gleichzeitig mit einem Dexcom-Empfänger (oder alternativ mit der t:slim-Pumpe) und einer App auf dem Smartphone verbunden werden.
- Wenn Du xDrip als Empfänger verwendest, deinstalliere zuerst die Dexcom-App. **Du kannst xDrip und die Dexcom-App nicht gleichzeitig mit dem Transmitter verbinden!**
- Falls Du Clarity brauchst und gleichzeitig die xDrip-Alarme nutzen möchtest, verwende [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (nur G6) mit lokalem Broadcast an xDrip.
- Du kannst xDrip auch als Companion-App (Begleit-App) zur offiziellen Dexcom-App nutzen, dabei können die Glukosewerte aber verzögert ankommen.
- Mit aktuellen Transmittern verwendet xDrip immer den [nativen Algorithmus](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) des Transmitters; es gibt keinen Grund, ihn zu deaktivieren. [Vorbeugende Neustarts](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) funktionieren nur bei alten Transmittern (Firmware 1.6.5.25 oder älter), bei denen sie nötig sind, damit der Sensor nicht nach 10 Tagen stoppt; neuere (Firefly-)Transmitter ignorieren sie. Lies [Restart a sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html), bevor Du einen Neustart versuchst.
- Alles, was den Sensor und den Transmitter selbst betrifft, ist auf der [xDrip-Dexcom-Seite](https://navid200.github.io/xDrip/docs/Dexcom_page.html) beschrieben.

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## G6 mit Build Your Own Dexcom App

```{admonition} Old app version
:class: warning
Dexcom BYODA ist mittlerweile eine sehr alte App-Version und kann nicht mehr aktualisiert werden.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) unterstützt sowohl den lokalen Broadcast zu AAPS als auch parallel zu xDrip

-   Mit dieser App kannst du den Dexcom G6 mit jedem Android Smartphone verwenden.
-   Solltest Du bisher die originale Dexcom App oder die gepatchte Dexcom App genutzt haben, dann installiere diese (**Stoppe nicht** den aktiven Sensor)
-   Installiere die heruntergeladene APK
-   Sensorcode und Seriennummer des Senders in der gepatchten App eingeben.
-   Gehe in den Einstellungen des Smartphone zu Apps > Dexcom G6 > Berechtigungen > Weitere Berechtigungen und drücke 'Zugriff Dexcom App'.
-   Nach kurzer Zeit sollte BYODA das Signal des Transmitters empfangen.

### Einstellungen in AAPS

-   Wähle **BYODA** unter [**Konfiguration → BZ-Quelle**](#Config-Builder-bg-source).

-   Falls Du keine Werte erhältst, wähle eine andere Datenquelle und danach wieder **BYODA**, um die Abfrage der Berechtigungen für die Verbindung zwischen AAPS und dem BYODA-Broadcast erneut auszulösen.

### Einstellungen für xDrip

-   Wähle '640G/Eversense' als Datenquelle.
-   Führe in xDrip den Befehl „Sensor starten“ aus, damit Werte empfangen werden. Dies hat keinen Einfluss auf den laufenden Sensor.


(DexcomG6-troubleshooting-g6)=
## Fehlerbehebung G6 und ONE

### Dexcom G6/ONE-spezifische Fehlerbehebung

-   Scrolle herunter bis zur **Fehlerbehebung** [hier](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Allgemeine Fehlerbehebung

Allgemeine Tipps zur Problembehebung für CGMs findest Du [hier](#general-cgm-troubleshooting).

### Neuer Transmitter bei laufendem Sensor

Falls Du einen Transmitter bei einer laufenden Sensorsitzung wechseln musst, kannst Du versuchen, den Transmitter zu tauschen, ohne die Transmitterhalterung zu beschädigen. Ein Video dazu findest Du [hier](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Wenn Du Dich stattdessen für [diese Lösung](https://youtu.be/tx-kTsrkNUM) entscheidest, musst Du sehr vorsichtig mit dem Teststreifen sein, um die [Sensorkontakte nicht zu beschädigen](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html).
