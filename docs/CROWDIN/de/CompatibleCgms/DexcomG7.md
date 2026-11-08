# Dexcom G7, ONE+ und Stelo


## Grundlegendes im Voraus

Es ist wichtig zu wissen, dass die Systeme G7, ONE+ und Stelo im Gegensatz zum G6 die Werte nicht glätten, weder in der App noch im Empfänger. Mehr Details dazu findest Du [hier](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

```{admonition} Smoothing method 
Im Abschnitt [Glättung der Glukosewerte](../CompatibleCgms/SmoothingBloodGlucoseData.md) findest Du Vorschläge für den Dexcom G7/ONE+/Stelo
```

## 1. xDrip (direkte Verbindung zum G7, ONE+ oder Stelo)

- xDrip verbindet sich selbst mit dem Sensor: Deinstalliere die Dexcom-App, denn nur eine App kann sich mit dem Sensor verbinden. Wenn Du die Dexcom-App behalten willst, nutze stattdessen die [xDrip Companion App](#DexcomG7-xdrip-companion-app).
- Folge der Anleitung hier: [xDrip G7, ONE+ und Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7.html). Du brauchst eine aktuelle xDrip-Version – die Mindestversion steht auf der verlinkten Seite.
- Wähle xDrip unter [**Konfiguration → BZ-Quelle**](#Config-Builder-bg-source).

- Passe die Einstellungen von xDrip so an, wie es auf der Seite [xDrip-Einstellungen](../CompatibleCgms/xDrip.md) erklärt ist.

## 2. Build Your Own Dexcom App (nur G7)

```{admonition} Old app version
:class: warning
Dexcom BYODA ist mittlerweile eine sehr alte App-Version und kann nicht mehr aktualisiert werden. Für ONE+ und Stelo nicht verfügbar.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) unterstützt die lokale Übertragung (Broadcast) an AAPS

-   Mit dieser App kannst Du den Dexcom G7 mit jedem Android Smartphone verwenden.
-   Deinstalliere die originale Dexcom-App
-   Installiere die heruntergeladene APK
-   Gib den Sensorcode (Kopplungscode) in der gepatchten App ein
-   BYODA sollte nach kurzer Zeit das Sensorsignal empfangen.

(DexcomG7-xdrip-companion-app)=

## 3. xDrip Companion App (G7, ONE+ und Stelo)

Die offizielle Dexcom-App bleibt mit dem Sensor verbunden. xDrip liest die Glukosewerte aus den Benachrichtigungen der Dexcom-App und sendet sie an **AAPS**.

```{admonition} Not a trusted data source
:class: note
**AAPS** does not consider xDrip in Companion App mode a [trusted BG data source](#GettingStarted-TrustedBGSource): SMBs are not allowed all the time.

To read the Dexcom app notifications without xDrip, as a trusted data source, use the [Notification Reader](#DexcomG7-notification-reader).
```

### Benachrichtigungen der Dexcom-App auslesen

- Lass die Dexcom-App installiert und mit dem Sensor verbunden. Ihre Benachrichtigungen müssen sichtbar bleiben: Schalte sie nicht stumm und blende sie nicht aus.
- Lade [xDrip](https://github.com/NightscoutFoundation/xDrip) herunter und installiere es. Verwende in xDrip dieselbe Glukose-Einheit wie in der Dexcom-App.
- Gehe in xDrip zu **Einstellungen** > **Datenquelle** und wähle **Companion App**.

  ![xDrip Hardware Data Source: Companion App](../images/xDrip_Companion_DataSource.png)

- xDrip fragt nach der Berechtigung, Benachrichtigungen zu lesen. Tippe auf **OK**, wähle dann **xDrip** in der Liste aus und schalte **Zugriff auf Benachrichtigungen zulassen** ein.

  ![Notification access list](../images/xDrip_Companion_NotificationAccess1.png)

- Ist **Zugriff auf Benachrichtigungen zulassen** ausgegraut (*Durch eingeschränkte Einstellung festgelegt*), blockiert Android das, weil xDrip nicht aus dem Play Store installiert wurde:

  ![Notification access controlled by restricted setting](../images/xDrip_Companion_Restricted.png)

  Öffne die App-Info von xDrip (lange auf das xDrip-Symbol drücken > **App-Info**), tippe oben rechts auf das Menü mit den drei Punkten und wähle **Eingeschränkte Einstellungen zulassen**. Gehe dann zurück zum Bildschirm für den Zugriff auf Benachrichtigungen und erlaube ihn.

  ![App info: Allow restricted settings](../images/xDrip_Companion_AllowRestricted.png)

  ![Notification access allowed for xDrip](../images/xDrip_Companion_NotificationAccess2.png)

- Werte erscheinen in xDrip, sobald die Dexcom-App einen neuen Wert anzeigt. Erscheint nichts, musst Du in xDrip eventuell einen Sensor starten: Das hat keine Auswirkung auf den echten Sensor. Stelo liefert in diesem Modus alle 15 Minuten einen Wert.

### Companion Bluetooth (G7)

Ist die Dexcom-App mit einem G7-Sensor verbunden, kann xDrip außerdem die Werte mithören, die der Sensor per Bluetooth an die Dexcom-App sendet. xDrip koppelt sich dabei nicht mit dem Sensor, und Du musst keinen Sensorcode eingeben: Die Dexcom-App behält die Kontrolle.

Mit **Companion Bluetooth** bekommt xDrip vom Sensor die genaue Zeit und den Trend jedes Werts statt der Zeit, zu der die Benachrichtigung erschien, und füllt Lücken auf, wenn das Smartphone außer Reichweite war (Backfill).

- Gehe in xDrip zu **Einstellungen** > **Erweiterte Einstellungen** > **Bluetootheinstellungen** und schalte **Companion Bluetooth** ein.

  ![xDrip Bluetooth Settings: Companion Bluetooth](../images/xDrip_Companion_Bluetooth.png)

- Das funktioniert nicht auf allen Smartphones und Android-Versionen. Schalte es aus, wenn Du Probleme bemerkst.
- Ist noch ein alter Dexcom-Sensor in der Bluetooth-Liste des Smartphones, hört xDrip möglicherweise den falschen ab: Entferne in den Android-**Einstellungen** > **Verbundene Geräte** die Sensoren, die Du nicht mehr verwendest.
- Companion Bluetooth ist für den G7 gedacht. Beim ONE+ und Stelo verlass Dich auf die Benachrichtigungen.

### Konfiguration in AAPS

- Wähle xDrip unter [**Konfiguration → BZ-Quelle**](#Config-Builder-bg-source).
- Passe die Einstellungen von xDrip so an, wie es auf der Seite [xDrip-Einstellungen](../CompatibleCgms/xDrip.md) erklärt ist.

## 4. Juggluco (G7 und ONE+)

Version 9.0+ ist erforderlich

- Deaktiviere die App, die zuvor mit dem Sensor verbunden war: Deinstalliere die App oder nutze „Stopp erzwingen“ Deaktiviere in den App-Einstellungen die Berechtigung „Geräte in der Nähe“. Schränke den Akkuverbrauch der App ein.

- Entkoppele den Sensor in den Bluetooth-Einstellungen: In den Android-Einstellungen findest Du den Sensor in den gekoppelten Geräten und wähle „Entkoppeln“ aus. Dexcom G7 Sensornamen beginnen mit DXCM.

- Vermeide Beeinträchtigungen durch andere Sensoren: Halte alte Dexcom-Sensoren aus dem Bluetooth-Bereich fern.

- Verbinde den G7-Sensor mit Juggluco: Öffne Juggluco → Linkes Menü → Photo. Scanne die Datenmatrix auf Sensorapplikator des G7. Gib Juggluco bis zu 5 Minuten Zeit den Sensor zu finden.

- Koppelungs-Voraussetzungen: Zulassen, dass sich der Sensor mit Juggluco koppelt. Stelle sicher, dass der Bildschirm während des Koppelns nicht gesperrt ist. Wenn die Verbindung fehlschlägt, warte 5 Minuten, bevor Du es erneut versuchst.

- Ausnahme: Wear OS Smartwatches können sich auch ohne ein explizites „zulassen“ koppeln.

(DexcomG7-notification-reader)=

## 5. Notification Reader (G7, ONE+ and Stelo)

Die offizielle Dexcom-App bleibt mit dem Sensor verbunden. **AAPS** reads the glucose value directly from the notification of the Dexcom app, without any other app in between.

```{admonition} Trusted data source
:class: note
Readings from the Dexcom G7, ONE+ and Stelo apps are a [trusted BG data source](#GettingStarted-TrustedBGSource): SMBs can be allowed all the time.
```

Compared to the other methods on this page, the Notification Reader has limits:

- **No trend arrow** and **no backfill**: readings missed while the phone was off or out of range are lost.
- Each reading gets the time the notification appeared, not the exact time of the sensor reading.
- Only values between 40 and 405 mg/dL (2.2 and 22.5 mmol/L) are read. "LOW" and "HIGH" are not read.
- Stelo gives a reading every 15 minutes.

### Set up the Dexcom app

- Lass die Dexcom-App installiert und mit dem Sensor verbunden.
- Make sure the Dexcom app shows the current glucose value in its notification. Ihre Benachrichtigungen müssen sichtbar bleiben: Schalte sie nicht stumm und blende sie nicht aus.
- Use the same glucose units (mg/dL or mmol/L) in the Dexcom app as in **AAPS**. Otherwise **AAPS** cannot read the value.

### Konfiguration in AAPS

- Select **Notification Reader** in [**Configuration → BG Source**](#Config-Builder-bg-source) and confirm the switch.

  ![BG Source: Notification Reader selected](../images/NotificationReader_BgSource.png)

- Back on the main screen, **AAPS** shows **Permissions Required**. Next to **Notification Access**, tap **Grant**.

  ![Permissions Required: Notification Access](../images/NotificationReader_Permissions.png)

- Android opens its notification access list (its name depends on your Android version, for example *Notification read, reply & control*). Select **AAPS**, turn on **Allow notification access** and confirm with **Allow**.

  ![Android asks to allow notification access for AAPS](../images/NotificationReader_AllowDialog.png)

  Android warns that **AAPS** could read all your notifications. **AAPS** only reads the notifications of supported CGM apps and ignores all others.

  ![Notification access allowed for AAPS](../images/NotificationReader_AccessOn.png)

- If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because **AAPS** was not installed from the Play Store. Open the **AAPS** app info (long press the **AAPS** icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. Gehe dann zurück zum Bildschirm für den Zugriff auf Benachrichtigungen und erlaube ihn.
- Readings appear in **AAPS** when the Dexcom app shows a new value.

```{warning}
If the Dexcom app notification shows more than one glucose number, or none, **AAPS** skips that notification.
```
