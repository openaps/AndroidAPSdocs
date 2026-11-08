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
- You can also use xDrip as a companion app of the official Dexcom app, but you might experience delays in BG readings. To read the Dexcom app notifications without xDrip, as a trusted data source, use the [Notification Reader](#DexcomG6-notification-reader).
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
## If using G6 or ONE with the Notification Reader

The official Dexcom G6 or ONE app stays connected to the transmitter. **AAPS** reads the glucose value directly from the notification of the Dexcom app, without any other app in between.

```{admonition} Trusted data source
:class: note
Readings from the Dexcom G6 and ONE apps are a [trusted BG data source](#GettingStarted-TrustedBGSource): SMBs can be allowed all the time.
```

Compared to BYODA or xDrip, the Notification Reader has limits:

- **No trend arrow** and **no backfill**: readings missed while the phone was off or out of range are lost.
- Each reading gets the time the notification appeared, not the exact time of the sensor reading.
- Only values between 40 and 405 mg/dL (2.2 and 22.5 mmol/L) are read. "LOW" and "HIGH" are not read.

### Set up the Dexcom app

-   Keep the Dexcom app installed and connected to the transmitter.
-   Make sure the Dexcom app shows the current glucose value in its notification. Ihre Benachrichtigungen müssen sichtbar bleiben: Schalte sie nicht stumm und blende sie nicht aus.
-   Use the same glucose units (mg/dL or mmol/L) in the Dexcom app as in **AAPS**. Otherwise **AAPS** cannot read the value.

### Konfiguration in AAPS

-   Select **Notification Reader** in [**Configuration → BG Source**](#Config-Builder-bg-source) and confirm the switch.

    ![BG Source: Notification Reader selected](../images/NotificationReader_BgSource.png)

-   Back on the main screen, **AAPS** shows **Permissions Required**. Next to **Notification Access**, tap **Grant**.

    ![Permissions Required: Notification Access](../images/NotificationReader_Permissions.png)

-   Android opens its notification access list (its name depends on your Android version, for example *Notification read, reply & control*). Select **AAPS**, turn on **Allow notification access** and confirm with **Allow**.

    ![Android asks to allow notification access for AAPS](../images/NotificationReader_AllowDialog.png)

    Android warns that **AAPS** could read all your notifications. **AAPS** only reads the notifications of supported CGM apps and ignores all others.

    ![Notification access allowed for AAPS](../images/NotificationReader_AccessOn.png)

-   If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because **AAPS** was not installed from the Play Store. Open the **AAPS** app info (long press the **AAPS** icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. Gehe dann zurück zum Bildschirm für den Zugriff auf Benachrichtigungen und erlaube ihn.
-   Readings appear in **AAPS** when the Dexcom app shows a new value.

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
