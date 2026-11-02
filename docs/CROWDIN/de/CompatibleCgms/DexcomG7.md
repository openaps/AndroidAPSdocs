# Dexcom G7, ONE+ und Stelo


## Grundlegendes im Voraus

Es ist wichtig zu wissen, dass die Systeme G7, ONE+ und Stelo im Gegensatz zum G6 die Werte nicht glätten, weder in der App noch im Empfänger. Mehr Details dazu findest Du [hier](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

```{admonition} Smoothing method 
Im Abschnitt [Glättung der Blut-Glukose-Daten](../CompatibleCgms/SmoothingBloodGlucoseData.md) findest Du Vorschläge für den Dexcom G7/ONE+/Stelo
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
**AAPS** betrachtet xDrip im Modus Companion App nicht als [vertrauenswürdige BZ-Quelle](#GettingStarted-TrustedBGSource): SMBs sind durchgehend erlaubt.
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
