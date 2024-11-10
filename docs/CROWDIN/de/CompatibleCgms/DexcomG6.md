- - -
orphan: true
- - -

# Dexcom G6 und ONE

## Grundsätzliches vorab

-   Follow general CGM hygiene and setting sensor recommendation [here](../CompatibleCgms/GeneralCGMRecommendation.md).

## General hints for looping with G6 and ONE

- Die aktuellen Transmitter heißen 'Firefly'. Sensoren können nur durch das Entfernen des Transmitters neu gestartet werden. Der Transmitter selber kann nicht zurückgesetzt werden und er erzeugt auch keine eigenen Rohdaten.

- Wenn Du einen Sensor neu startest, bereite Dich auf eine Kalibrierung vor und habe ein Auge auf mögliche Abweichungen.

- Pre-soaking of the G6/ONE with factory calibration is likely to give variation in results. Falls Du mit "pre-soaking" arbeitest, wirst Du wahrscheinlich besser Ergebnisse erzielen, wenn Du den Sensor kalibrierst.

Mehr dazu findest Du in dem, von Tim Street auf der Seite [www.diabettech.com](https://www.diabettech.com) veröffentlichten, [Artikel](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/).

## If using G6 or ONE with xDrip+

- Nutzt Du einen aktuellen (Firefly)-Transmitter, wird "preemptive restarts" **ignoriert**.
- Nutzt Du einen modifizierten Transmitter, werden 'preemptive restarts' **nicht benötigt**.
-   Nutzt Du einen 'rebatteried' Transmitter, ist es am sichersten [preemptive restarts](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) zu **deaktivieren**. In diesem Setup ist es jedoch notwendig den G6 im 'non-[native mode](https://navid200.github.io/xDrip/docs/Native-Algorithm.html)' zu nutzen, da er sonst nach 10 Tagen endet. Der non-native mode ist allerdings grundsätzlich nicht zu empfehlen, da er die werkseitige Kalibrierung deaktiviert und verrauschte Werte nicht herausfiltert.
-   The Dexcom G6 and ONE transmitters can simultaneously be connected to the Dexcom receiver (or alternatively the t:slim pump) and one app on your phone.
-   Wenn Du xDrip+ zum Empfang der CGM-Daten verwendest, deinstalliere zuerst die Dexcom App. **Du kannst xDrip+ und die Dexcom App nicht gleichzeitig mit dem Transmitter verbinden!**
-   If you need Clarity and want to profit from xDrip+ alarms use the [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (only G6) with local broadcast to xDrip+.
-   You can also use xDrip+ as a companion app of the official Dexcom app, but you might experience delays in BG readings.
-   If not already set up, download [xDrip+](https://github.com/NightscoutFoundation/xDrip) and follow the instructions on [xDrip+ settings page](../CompatibleCgms/xDrip.md).
-   Select xDrip+ in in [ConfigBuilder, BG Source](#Config-Builder-bg-source).

- Adjust settings in xDrip+ according to [xDrip+ settings page](../CompatibleCgms/xDrip.md)

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## G6 mit Build Your Own Dexcom App

-   Die [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) unterstützt auch lokale Broadcasts an AAPS und/oder xDrip+ (gilt nicht für G5/ONE/G7 Sensoren!)

![BYODA broadcast options](../images/BYODA.png)

-   Mit dieser App kannst du den Dexcom G6 mit jedem Android Smartphone verwenden.
-   Solltest Du bisher die originale Dexcom App oder die gepatchte Dexcom App genutzt haben, dann installiere diese (**Stoppe nicht** den aktiven Sensor)
-   Installiere die heruntergeladene APK
-   Sensorcode und Seriennummer des Senders in der gepatchten App eingeben.
-   Gehe in den Einstellungen des Smartphone zu Apps > Dexcom G6 > Berechtigungen > Weitere Berechtigungen und drücke 'Zugriff Dexcom App'.
-   Innerhalb kurzer Zeit sollte BYODA das Transmitter-Signal aufnehmen.

### Einstellungen in AAPS

-   Select 'Dexcom App (patched)' in in [ConfigBuilder, BG Source](#Config-Builder-bg-source).

-   Falls AAPS keine Werte erhält, wechsle auf eine andere BZ-Quelle und dann wieder zurück zur 'gepatchte Dexcom App', um die Abfrage für die Genehmigung des Datenaustauschs zwischen AAPS und BYODA erneut auszulösen.

### Einstellungen für xDrip+

-   Wähle '640G/Eversense' als Datenquelle.
-   Führe den Befehl 'Sensor starten' in xDrip+ aus, damit Werte empfangen werden. Dies hat keinen Einfluss auf den laufenden Sensor.


(DexcomG6-troubleshooting-g6)=
## Troubleshooting G6 and ONE

### Dexcom G6/ONE specific troubleshooting

-   Scrolle herunter bis zur **Problembehandlung** [hier](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Allgemeine Problembehandlung

General Troubleshooting for CGMs can be found [here](#general-cgm-troubleshooting).

### Neuer Transmitter bei laufendem Sensor

Falls Du einen Transmitter bei einer laufenden Sensorsitzung wechseln musst, kannst Du versuchen, den Transmitter zu tauschen, ohne die Transmitterhalterung zu beschädigen. Ein Video dazu findest Du [hier](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Wenn Du Dich stattdessen für [diese Lösung](https://youtu.be/tx-kTsrkNUM) entscheidest, musst Du sehr vorsichtig mit dem Teststreifen sein, um die [Sensorkontakte nicht zu beschädigen](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html).
