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
- Du kannst xDrip auch als Companion-App (Begleit-App) zur offiziellen Dexcom-App nutzen, dabei können die Glukosewerte aber verzögert ankommen. Um die Benachrichtigungen der Dexcom-App ohne xDrip als vertrauenswürdige Datenquelle zu lesen, nutze den [Benachrichtigungsleser](#DexcomG6-notification-reader).
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

(DexcomG6-notification-reader)=
## Wenn Du G6 oder ONE mit dem Benachrichtigungsleser nutzt

Die offizielle Dexcom-App für G6 oder ONE bleibt mit dem Transmitter verbunden. **AAPS** liest den Glukosewert direkt aus der Benachrichtigung der Dexcom-App, ohne eine weitere App dazwischen.

```{admonition} Trusted data source
:class: note
Werte aus den Apps für Dexcom G6 und ONE sind eine [vertrauenswürdige BZ-Datenquelle](#GettingStarted-TrustedBGSource): SMBs können durchgehend erlaubt werden.
```

Im Vergleich zu BYODA oder xDrip hat der Benachrichtigungsleser Einschränkungen:

- **Kein Trendpfeil** und **kein Backfill**: Werte, die verpasst werden, während das Smartphone aus oder außer Reichweite ist, gehen verloren.
- Jeder Wert erhält den Zeitpunkt, zu dem die Benachrichtigung erschienen ist, nicht den genauen Zeitpunkt der Sensormessung.
- Es werden nur Werte zwischen 40 und 405 mg/dl (2,2 und 22,5 mmol/l) gelesen. „LOW“ und „HIGH“ werden nicht gelesen.

### Dexcom-App einrichten

-   Lass die Dexcom-App installiert und mit dem Transmitter verbunden.
-   Achte darauf, dass die Dexcom-App den aktuellen Glukosewert in ihrer Benachrichtigung anzeigt. Ihre Benachrichtigungen müssen sichtbar bleiben: Schalte sie nicht stumm und blende sie nicht aus.
-   Verwende in der Dexcom-App dieselbe Glukoseeinheit (mg/dl oder mmol/l) wie in **AAPS**. Sonst kann **AAPS** den Wert nicht lesen.

### Konfiguration in AAPS

-   Wähle **Benachrichtigungsleser** unter [**Konfiguration → BZ-Quelle**](#Config-Builder-bg-source) und bestätige den Wechsel.

    ![BG Source: Notification Reader selected](../images/NotificationReader_BgSource.png)

-   Zurück auf dem Startbildschirm zeigt **AAPS** **Berechtigungen erforderlich** an. Tippe neben **Zugriff auf Benachrichtigungen** auf **Berechtigung erteilen**.

    ![Permissions Required: Notification Access](../images/NotificationReader_Permissions.png)

-   Android öffnet seine Liste für den Zugriff auf Benachrichtigungen (ihr Name hängt von Deiner Android-Version ab, z. B. *Benachrichtigungen lesen, beantworten und steuern*). Wähle **AAPS**, aktiviere **Zugriff auf Benachrichtigungen zulassen** und bestätige mit **Zulassen**.

    ![Android asks to allow notification access for AAPS](../images/NotificationReader_AllowDialog.png)

    Android warnt, dass **AAPS** alle Deine Benachrichtigungen lesen könnte. **AAPS** liest nur die Benachrichtigungen unterstützter CGM-Apps und ignoriert alle anderen.

    ![Notification access allowed for AAPS](../images/NotificationReader_AccessOn.png)

-   Ist **Zugriff auf Benachrichtigungen zulassen** ausgegraut (*Durch eingeschränkte Einstellung festgelegt*), blockiert Android das, weil **AAPS** nicht aus dem Play Store installiert wurde. Öffne die App-Info von **AAPS** (lange auf das **AAPS**-Symbol drücken > **App-Info**), tippe oben rechts auf das Menü mit den drei Punkten und wähle **Eingeschränkte Einstellungen zulassen**. Gehe dann zurück zum Bildschirm für den Zugriff auf Benachrichtigungen und erlaube ihn.
-   Werte erscheinen in **AAPS**, sobald die Dexcom-App einen neuen Wert anzeigt.

```{warning}
If the Dexcom app notification shows more than one glucose number, or none, **AAPS** skips that notification.
```


(DexcomG6-troubleshooting-g6)=
## Fehlerbehebung G6 und ONE

### Dexcom G6/ONE-spezifische Fehlerbehebung

-   Scrolle herunter bis zur **Fehlerbehebung** [hier](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Allgemeine Fehlerbehebung

Allgemeine Tipps zur Problembehebung für CGMs findest Du [hier](#general-cgm-troubleshooting).

### Neuer Transmitter bei laufendem Sensor

Falls Du einen Transmitter bei einer laufenden Sensorsitzung wechseln musst, kannst Du versuchen, den Transmitter zu tauschen, ohne die Transmitterhalterung zu beschädigen. Ein Video dazu findest Du [hier](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Wenn Du Dich stattdessen für [diese Lösung](https://youtu.be/tx-kTsrkNUM) entscheidest, musst Du sehr vorsichtig mit dem Teststreifen sein, um die [Sensorkontakte nicht zu beschädigen](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html).
