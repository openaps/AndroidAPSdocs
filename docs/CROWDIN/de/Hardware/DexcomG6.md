# Dexcom G6

## Grundsätzliches vorab

-   Beachte die allgemeinen Empfehlungen zur CGM Hygiene und zum Setzen des Sensors, die Du [hier](../Hardware/GeneralCGMRecommendation.md) findest.
-   Nutze für G6 Transmitter, die nach Mitte / Ende 2018 hergestellt wurden,  eine der aktuellen [latest nightly built xDrip+ Versionen](https://github.com/NightscoutFoundation/xDrip/releases). Diese Transmitter haben eine neue Firmware und die letzte stabile Version von xDrip+ vom 10.01.2019 kann mit diesen noch nicht korrekt umgehen.

## Allgemeine Hinweise zum Closed Loop mit dem Dexcom G6

Die Nutzung des G6 kann vielleicht etwas komplexer sein, als zunächst vermutet. Mache Dir die folgenden Punkte bewusst, um das System sicher zu nutzen:

-   Wenn Du mit nativen Daten und dem Kalibrierungscode in xDrip+ oder Spike arbeitest, ist es am sichersten, auf den "preemptive" Neustart des Sensors zu verzichten.
-   Falls Du den "preemptive restart" verwendest, stelle sicher, dass dieser zu einer Tageszeit erfolgt, zu der Du die Änderungen verfolgen und ggf. durch eine Kalibrierung eingreifen kannst.
-   Falls Du Sensoren verlängerst, verzichte aus Sicherheitsgründen entweder auf die Werkskalibrierung an Tag 11 und 12 oder stelle sicher, dass Du die Abweichungen im Auge hast und evtl. durch Kalibrierung korrigieren kannst.
-   Das sogenannte "Pre-soaking" (Sensor früher ohne Transmitter setzen, damit er sich an die Gewebsflüssigkeit "gewöhnt") mit Werkskalibrierung führt wahrscheinlich zu Abweichungen in den Glukosewerten. Falls Du mit "pre-soaking" arbeitest, wirst Du wahrscheinlich bessere Ergebnisse erzielen, wenn Du den Sensor kalibrierst.
-   Wenn Du nicht auf die Abweichungen, die stattfinden können, achten willst, wäre es evtl. besser bei der Verlängerung auf die Werkskalibrierung zu verzichten und das System wie den G5 (mit "Pflichtkalibrierung") zu nutzen.

Mehr zu den Details und Gründen für diese Empfehlungen findest Du im [kompletten Artikel](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) (englisch) von Tim Street auf seiner Seite [www.diabettech.com](https://www.diabettech.com).

## Dexcom G6 mit xDrip+

-   Der Dexcom G6-Transmitter kann gleichzeitig mit einem Dexcom-Empfänger (oder alternativ mit der t:slim-Pumpe) und einer App auf dem Handy verbunden werden.
-   Wenn Du xDrip+ zum Empfang der CGM-Daten verwendest, deinstalliere zuerst die Dexcom App. **Du kannst xDrip+ und die Dexcom App nicht gleichzeitig mit dem Transmitter verbinden!**
-   Falls Du Clarity benötigst und trotzdem von den xDrip+ Alarmen profitieren willst, musst Du die [BYODA](../Hardware/DexcomG6.md#if-using-g6-with-build-your-own-dexcom-app) mit lokaler Datenübertragung zu xDrip+ verwenden.
-   Falls Du xDrip noch nicht eingerichtet hast, dann lade es Dir herunter [xdrip](https://github.com/NightscoutFoundation/xDrip) und richte es entsprechend der Dokumentation unter[G5](../Configuration/xdrip.md)  ein.
-   Wähle in AndroidAPS > Konfiguration > BZ-Quelle > xDrip+.
-   Passe die Einstellungen xDrip+ entsprechend den Erläuterungen auf der [Seite xDrip+ Einstellungen](../Configuration/xdrip.md) an.
-   Falls AAPS im Flugmodus keine BZ-Werte von xdrip+ bekommt, nutze "Identify receiver" wie auf der [Seite xDrip+ Einstellungen](../Configuration/xdrip.md) beschrieben.

(if-using-g6-with-build-your-own-dexcom-app)=
## G6 mit Build Your Own Dexcom App

-   Seit Dezember 2020 unterstützt die [BYODA - "Erstelle deine eigene Dexcom App"](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0) auch die lokale Datenweitergabe an AAPS und/oder xDrip+ (nicht für G5 Sensoren!).
-   Mit dieser App kannst du den Dexcom G6 mit jedem Android Smartphone verwenden.
-   Deinstalliere die ursprüngliche Dexcom-App oder die gepatchte Dexcom-App, wenn du diese zuvor verwendet hast.
-   Installiere die heruntergeladene APK.
-   Sensorcode und Seriennummer des Senders in der gepatchten App eingeben.
-   In phone settings go to apps > Dexcom G6 > permissions > additional permissions and press 'Access Dexcom app'.
-   Innerhalb kurzer Zeit sollte BYODA das Transmitter-Signal aufnehmen. (Falls nicht, musst du den Sensor stoppen und einen neuen Sensor starten.)

### Einstellungen für AndroidAPS

-   Wähle 'gepatchte Dexcom App' im Konfigurationsgenerator.
-   Falls AAPS keine Werte erhält, wechsle auf eine andere BZ-Quelle und dann wieder zurück zur 'gepatchte Dexcom App', um die Abfrage für die Genehmigung des Datenaustauschs zwischen AAPS und BYODA aufzurufen.

### Einstellungen für xDrip+

-   Wähle '640G/Eversense' als Datenquelle.
-   Führe den Befehl 'Sensor starten' in xDrip+ aus, damit Werte empfangen werden. Dies hat keinen Einfluss auf den laufenden Sensor, der ggf. von der BYODA App kontroliert wird.

## Problembehandlung G6

### Dexcom G6-spezifische Problembehandlung

-   Transmitter, deren Seriennummer mit 80 oder 81 beginnen, benötigen mindestens die letzte stabile xDrip+ Version ab Mai 2019 oder einen neueren Nightly-Build.
-   Transmitter, deren Seriennummer mit 8G beginnt, benötigen mind. die Nightly Build vom 25. Juli 2019 oder ein neueres Nightly Build.
-   xDrip+ und Dexcom App können nicht gleichzeitig mit dem Transmitter verbunden werden.
-   Warte mindestens 15 Min. zwischen dem Stop und dem Start eines Sensors.
-   Datiere die Setzzeit nicht zurück. Beantworte daher die Frage, ob Du den Sensor heute eingesetzt hast, immer mit Ja.
-   Beim Starten eines Sensors darf "restart sensors" nicht aktiviert sein.
-   Neuen Sensor nicht starten, bevor die folgenden Informationen in der klassische Statusseite angezeigt werden -> G5/G6 Status -> TelefonServiceZustand:
    -   Transmitter Seriennummer beginnt mit 80 oder 81: "Got data hh:mm" (z.B. "Got data 19:04")
    -   Transmitter Seriennummer beginnt mit 8G oder 8H: "Got glucose hh:mm" (z.B. "Got glucose 19:04") oder "Got no raw hh:mm" (z.B. "Got now raw 19:04")

![xDrip+ PhoneServiceState](../images/xDrip_Dexcom_PhoneServiceState.png)

### Allgemeine Problembehandlung

Allgemeine Vorschläge für die Problemlösung bei CGMs findest Du [hier](./GeneralCGMRecommendation.html#troubleshooting).

### Neuer Transmitter bei laufendem Sensor

Falls Du einen Transmitter bei einer laufenden Sensorsitzung wechseln musst, kannst Du versuchen, den Transmitter zu tauschen, ohne die Transmitterhalterung zu beschädigen. Eine Videoanleitung findest Du unter <https://youtu.be/tx-kTsrkNUM>.
