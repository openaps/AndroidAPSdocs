# Dexcom G7, ONE+ und Stelo


## Grundlegendes im Voraus

Es ist wichtig zu wissen, dass die Systeme G7, ONE+ und Stelo im Gegensatz zum G6 die Werte nicht glätten, weder in der App noch im Empfänger. Mehr Details dazu findest Du [hier](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

```{admonition} Smoothing method 
Im Abschnitt [Glättung der Blut-Glukose-Daten](../CompatibleCgms/SmoothingBloodGlucoseData.md) findest Du Vorschläge für den Dexcom G7/ONE+/Stelo
```

## 1. xDrip (direkte Verbindung zum G7, ONE+ oder Stelo)

- xDrip verbindet sich selbst mit dem Sensor: Deinstalliere die Dexcom-App, denn nur eine App kann sich mit dem Sensor verbinden. Wenn Du die Dexcom-App behalten willst, nutze stattdessen die [xDrip Companion App](#DexcomG7-xdrip-companion-app).
- Folge der Anleitung hier: [xDrip G7, ONE+ und Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7.html). Du brauchst eine aktuelle xDrip-Version – die Mindestversion steht auf der verlinkten Seite.
- Select xDrip in [**Configuration → BG Source**](#Config-Builder-bg-source).

- Adjust the xDrip settings according to the explanations on the xDrip settings page [xDrip settings](../CompatibleCgms/xDrip.md).

## 2. Build Your Own Dexcom App (nur G7)

```{admonition} Old app version
:class: warning
Dexcom BYODA ist mittlerweile eine sehr alte App-Version und kann nicht mehr aktualisiert werden. Not available for ONE+ or Stelo.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) unterstützt die lokale Übertragung (Broadcast) an AAPS

-   Mit dieser App kannst Du den Dexcom G7 mit jedem Android Smartphone verwenden.
-   Deinstalliere die originale Dexcom-App
-   Installiere die heruntergeladene APK
-   Gib den Sensorcode (Kopplungscode) in der gepatchten App ein
-   BYODA sollte nach kurzer Zeit das Sensorsignal empfangen.

(DexcomG7-xdrip-companion-app)=

## 3. xDrip Companion App (G7, ONE+ und Stelo)

The official Dexcom app stays connected to the sensor. xDrip reads the glucose values from the notifications of the Dexcom app and sends them to **AAPS**.

```{admonition} Not a trusted data source
:class: note
**AAPS** does not consider xDrip in Companion App mode a [trusted BG data source](#GettingStarted-TrustedBGSource): SMBs are not allowed all the time.
```

### Read the Dexcom app notifications

- Keep the Dexcom app installed and connected to the sensor. Its notifications must stay visible: do not silence or hide them.
- Download and install [xDrip](https://github.com/NightscoutFoundation/xDrip). Use the same glucose units in xDrip as in the Dexcom app.
- In xDrip, go to **Settings** > **Hardware Data Source** and select **Companion App**.

  ![xDrip Hardware Data Source: Companion App](../images/xDrip_Companion_DataSource.png)

- xDrip asks for permission to read notifications. Tap **OK**, then select **xDrip** in the list and turn on **Allow notification access**.

  ![Notification access list](../images/xDrip_Companion_NotificationAccess1.png)

- If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because xDrip was not installed from the Play Store:

  ![Notification access controlled by restricted setting](../images/xDrip_Companion_Restricted.png)

  Open the xDrip app info (long press the xDrip icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. Then go back to the notification access screen and allow it.

  ![App info: Allow restricted settings](../images/xDrip_Companion_AllowRestricted.png)

  ![Notification access allowed for xDrip](../images/xDrip_Companion_NotificationAccess2.png)

- Readings appear in xDrip when the Dexcom app shows a new value. If nothing appears, you may need to start a sensor in xDrip: this has no effect on the real sensor. Stelo gives a reading every 15 minutes in this mode.

### Companion Bluetooth (G7)

When the Dexcom app is connected to a G7 sensor, xDrip can also listen to the readings the sensor sends to the Dexcom app over Bluetooth. xDrip does not pair with the sensor and you do not need to enter the sensor code: the Dexcom app stays in control.

With **Companion Bluetooth**, xDrip gets the exact time and trend of each reading from the sensor, instead of the time the notification appeared, and fills gaps when the phone was out of range (backfill).

- In xDrip, go to **Settings** > **Less common settings** > **Bluetooth Settings** and enable **Companion Bluetooth**.

  ![xDrip Bluetooth Settings: Companion Bluetooth](../images/xDrip_Companion_Bluetooth.png)

- This does not work on all phones and Android versions. Disable it if you see problems.
- If an old Dexcom sensor is still in the phone's Bluetooth list, xDrip might listen to the wrong one: in Android **Settings** > **Connected devices**, forget sensors you no longer use.
- Companion Bluetooth is made for the G7. With ONE+ and Stelo, rely on notifications.

### Konfiguration in AAPS

- Select xDrip in [**Configuration → BG Source**](#Config-Builder-bg-source).
- Adjust the xDrip settings according to the explanations on the xDrip settings page [xDrip settings](../CompatibleCgms/xDrip.md).

## 4. Juggluco (G7 and ONE+)

Version 9.0+ ist erforderlich

- Deaktiviere die App, die zuvor mit dem Sensor verbunden war: Deinstalliere die App oder nutze „Stopp erzwingen“ Deaktiviere in den App-Einstellungen die Berechtigung „Geräte in der Nähe“. Schränke den Akkuverbrauch der App ein.

- Entkoppele den Sensor in den Bluetooth-Einstellungen: In den Android-Einstellungen findest Du den Sensor in den gekoppelten Geräten und wähle „Entkoppeln“ aus. Dexcom G7 Sensornamen beginnen mit DXCM.

- Vermeide Beeinträchtigungen durch andere Sensoren: Halte alte Dexcom-Sensoren aus dem Bluetooth-Bereich fern.

- Verbinde den G7-Sensor mit Juggluco: Öffne Juggluco → Linkes Menü → Photo. Scanne die Datenmatrix auf Sensorapplikator des G7. Gib Juggluco bis zu 5 Minuten Zeit den Sensor zu finden.

- Koppelungs-Voraussetzungen: Zulassen, dass sich der Sensor mit Juggluco koppelt. Stelle sicher, dass der Bildschirm während des Koppelns nicht gesperrt ist. Wenn die Verbindung fehlschlägt, warte 5 Minuten, bevor Du es erneut versuchst.

- Ausnahme: Wear OS Smartwatches können sich auch ohne ein explizites „zulassen“ koppeln.
