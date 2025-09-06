# Dexcom G6 und ONE

## Grundsätzliches vorab

-   Beachte die allgemeinen Empfehlungen zur CGM Hygiene und zum Setzen des Sensors, die Du [hier](../CompatibleCgms/GeneralCGMRecommendation.md) findest.

## Allgemeine Hinweise zum Loopen mit G6 und ONE

- Die aktuellen Transmitter heißen 'Firefly'. Sensoren können nur durch das Entfernen des Transmitters neu gestartet werden. Der Transmitter selber kann nicht zurückgesetzt werden und er erzeugt auch keine eigenen Rohdaten.

- Wenn Du einen Sensor neu startest, bereite Dich auf eine Kalibrierung vor und habe ein Auge auf mögliche Abweichungen.

- Das sogenannte "Pre-soaking" (Sensor früher ohne Transmitter setzen, damit er sich an die Gewebsflüssigkeit "gewöhnt") des G6/ONE mit Werkskalibrierung führt wahrscheinlich zu Abweichungen in den Glukosewerten. Falls Du mit "pre-soaking" arbeitest, wirst Du wahrscheinlich besser Ergebnisse erzielen, wenn Du den Sensor kalibrierst.

Mehr dazu findest Du in dem, von Tim Street auf der Seite [www.diabettech.com](https://www.diabettech.com) veröffentlichten, [Artikel](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/).

## Wenn der G6 oder ONE mit xDrip+ verwendet werden

- Nutzt Du einen aktuellen (Firefly)-Transmitter, wird "preemptive restarts" **ignoriert**.
- Nutzt Du einen modifizierten Transmitter, werden 'preemptive restarts' **nicht benötigt**.
-   Nutzt Du einen 'rebatteried' Transmitter, ist es am sichersten [preemptive restarts](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) zu **deaktivieren**. In diesem Setup ist es jedoch notwendig den G6 im 'non-[native mode](https://navid200.github.io/xDrip/docs/Native-Algorithm.html)' zu nutzen, da er sonst nach 10 Tagen endet. Der non-native mode ist allerdings grundsätzlich nicht zu empfehlen, da er die werkseitige Kalibrierung deaktiviert und verrauschte Werte nicht herausfiltert.
-   Der Dexcom G6- und ONE-Transmitter können gleichzeitig mit einem Dexcom-Empfänger (oder alternativ mit der t:slim-Pumpe) und einer App auf dem Smartphone verbunden werden.
-   Wenn Du xDrip+ zum Empfang der CGM-Daten verwendest, deinstalliere zuerst die Dexcom App. **Du kannst xDrip+ und die Dexcom App nicht gleichzeitig mit dem Transmitter verbinden!**
-   Falls Du Clarity benötigst und gleichzeitig die xDrip+ Alarme nutzen willst, verwende [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (nur G6) mit dem lokalen Broadcast zu xDrip+.
-   Du kannst xDrip+ als "Companion App" (Begleiter-App) zur offziellen Dexcom-App nutzen, solltest Dir aber bewusst sein, dass die Glukosewerte eventuell verzögert übermittelt werden.
-   Wenn es nicht bereits installiert ist, dann lade [xDrip+ ](https://github.com/NightscoutFoundation/xDrip) herunter und folge den Anweisungen in den [xDrip+ Einstellungen](../CompatibleCgms/xDrip.md).
-   Wähle xDrip+ in der [KONFIGURATION, BZ-Quelle](#Config-Builder-bg-source) aus.

- Passe die Einstellungen xDrip+ entsprechend den Erläuterungen auf der Seite[xDrip+ Einstellungen](../CompatibleCgms/xDrip.md) an

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

-   Wähle 'Dexcom App (patched)' in der [KONFIGURATION, BZ-Quelle](#Config-Builder-bg-source) aus.

-   Falls AAPS keine Werte erhält, wechsle auf eine andere BZ-Quelle und dann wieder zurück zur 'gepatchte Dexcom App', um die Abfrage für die Genehmigung des Datenaustauschs zwischen AAPS und BYODA erneut auszulösen.

### Einstellungen für xDrip+

-   Wähle '640G/Eversense' als Datenquelle.
-   Führe den Befehl 'Sensor starten' in xDrip+ aus, damit Werte empfangen werden. Dies hat keinen Einfluss auf den laufenden Sensor.


(DexcomG6-troubleshooting-g6)=
## Problembehandlung G6 und ONE

### Dexcom G6/ONE-spezifische Problembehandlung

-   Scrolle herunter bis zur **Problembehandlung** [hier](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Allgemeine Problembehandlung

Allgemeine Tipps zur Problembehebung für CGMs findest Du [hier](#general-cgm-troubleshooting).

### Neuer Transmitter bei laufendem Sensor

Falls Du einen Transmitter bei einer laufenden Sensorsitzung wechseln musst, kannst Du versuchen, den Transmitter zu tauschen, ohne die Transmitterhalterung zu beschädigen. Ein Video dazu findest Du [hier](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Wenn Du Dich stattdessen für [diese Lösung](https://youtu.be/tx-kTsrkNUM) entscheidest, musst Du sehr vorsichtig mit dem Teststreifen sein, um die [Sensorkontakte nicht zu beschädigen](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html).
