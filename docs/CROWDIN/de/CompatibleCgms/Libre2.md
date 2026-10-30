# Freestyle Libre 2 und 2+

Der Freestyle Libre 2 Sensor ist mittlerweile (auch mit der offiziellen App) ein echtes CGM. Dennoch kann LibreLink auch weiterhin keine Daten an AAPS senden. Es gibt aber verschiedene Lösungen für den Einsatz mit AAPS.

## 1. Verwende einen Bluetooth-Transmitter und OOP

Bluetooth-Transmitter können mit dem Libre 2 (EU) oder 2+ (EU) und einer Out of Process Algorithmus-App verwendet werden. Glukosewerte können - wie beim [Libre 1](./Libre1.md) - alle 5 Minuten empfangen werden.

Check the bridge and app you want to use are compatible with your sensor and xDrip.

Der Libre 2 OOP (Details findest Du [hier](#Libre2_OOP2)) erzeugt die gleichen Glukose-Messwerte wie das originale Lesegerät. AAPS glättet Libre2 Daten über 10-25 Minuten, um Sprünge zu vermeiden. Mehr Details findest Du im Abschnitt [Glättung der Werte & Rohdaten](#libre2-value-smoothing-raw-values).  OOP übergibt alle fünf Minuten einen Wert. Dieser entspricht dem Durchschnitt der letzten fünf Minuten. Daher sind die BZ-Werte nicht so glatt, stimmen aber mit dem Lesegerät überein und folgen den "echten" BZ-Entwicklungen schneller. If you try to loop with OOP please enable all smoothing settings in xDrip.

Es psricht viel dafür einen Bluetooth-Transmitter zu nutzen:

-   Du kannst verschiedene OOP2-Kalibrierungsstrategien wählen (1): den Wert "No calibration", oder kalibriere den Sensor wie einen Libre 1 mit "Calibrate based on raw" oder kalibriere den Wert mit "Calibrate based on glucose".  
  Stelle sicher, dass OOP1 deaktiviert ist (2).

    → Hamburger Menü → Einstellungen → Erweiterte Einstellungen → Andere verschiedene Einstellungen

![OOP2 Calibration](../images/Libre2_OOP2Calibration.png)

-   Wie auch schon der Libre 1 zuvor, kann auch der Libre 2 14,5 Tage genutzt werden
-   Das nachträgliche Auffüllen der Werte (backfilling) der letzten acht Stunden wird vollständig unterstützt

Bemerkung: Der Transmitter kann parallel zur LibreLink-App verwendet werden.

### Starte den Sensor

- → Hamburger-Menü (1) → Sensor starten (2) → Sensor starten (3) → Antwort "Nicht heute" (4).

![xDrip Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)

Damit wird der Libre2 Sensor nicht gestartet und wird auch kein Datenaustausch möglich. This is simply to indicate xDrip that a new sensor is delivering blood sugar levels. Wenn verfügbar, gib zwei blutige Messwerte für die Anfangskalibrierung ein. Now the blood glucose values should be displayed in xDrip every 5 minutes. Übersprungene Werte, weil Du zum Beispiel zu weit von Deinem Telefon entfernt warst, werden nicht nachgefüllt.

After a sensor change xDrip will automatically detect the new sensor and will delete all calibration data. Du kannst nach der Aktivierung blutig messen und eine neue erste Kalibrierung hinzufügen.

### AAPS konfigurieren (nur für's Loopen)

-   In **AAPS**, open the **menu** (☰) in the top-left corner, go to **Configuration** > **BG Source** and select **xDrip+**

![Configuration > BG Source with xDrip+ BG selected](../images/v4/Configuration/configuration_bg_source.png)

-   If AAPS does not receive BG values when phone is in airplane mode, use 'Identify receiver' as describe on [xDrip settings page](#xdrip-identify-receiver).

## 2. Use xDrip direct connection

```{admonition} Libre 2 EU only
:class: warning
xDrip doesn't support direct connection to Libre 2 US and AUS.
Nur Libre 2 und 2+ **EU** Modelle.
```

- Follow [these instructions](./Libre2MinimalL00per.md) to setup xDrip as the original documentation links to an obsolete OOP2  version.
- Follow setup instructions on [xDrip settings page](../CompatibleCgms/xDrip.md).

-   Select xDrip+ in [Configuration > BG Source](#Config-Builder-bg-source).

(libre2-value-smoothing-raw-values)=

### Glättung der Werte & Rohdaten

Technically, the current blood sugar value is transmitted to xDrip every minute. Daraus wird standardmäßig mit einem gewichteten Mittel über die letzten 25 Minuten ein geglätteter Wert errechnet. Du kannst die Zeitspanne im NFC-Scan-Funktionen-Menü ändern.

→ Hamburger-Menü → Einstellungen → NFC-Scan-Funktionen → Libre3-Daten glätten, wenn Methode xxx verwendet wird

![xDrip advanced settings Libre 2 & raw values](../images/xDrip_Libre3_Smooth.png)

Dies ist zwingend erforderlich um damit zu loopen. Die Kurven sehen glatt aus und die Loopergebnisse sind prima. Die Rohwerte, die den Alarmen zugrunde liegen, schwanken ein wenig mehr, entsprechen aber den Werten, die auch der Reader anzeigt. In addition, the raw values can be displayed in the xDrip graph in order to be able to react in time to rapid changes. Dazu bitte Less Common Settings->Advanced Settings for Libre2->show Raw values anschalten". Dann werden zusätzlich Rohwerte als kleine weiße Punkte angezeigt und zusätzliche Sensorinformationen sind im Systemmenü verfügbar.

Die Rohwerte sind sehr hilfreich, wenn sich der Blutzuckerwert schnell ändert. Auch wenn die einzelnen Punkte viel mehr springen, wirst Du die Tendenz deutlich besser erkennen als bei der geglätteten Linie und kannst so bessere Therapieentscheidungen treffen.

→ Hamburger-Menü → Einstellungen → Erweiterte Einstellungen → Erweiterte Einstellungen für Libre 2

![xDrip advanced settings Libre 2 & raw values](../images/Libre2_RawValues.png)



#### Kalibrierung

You can calibrate the Libre2 **with an offset of -40 mg/dL to +20 mg/dL \[-2,2 mmol/L to +1,1 mmol/L\]** (intercept). Die Neigung (slope) kann nicht geändert. Bitte überprüfe die Werte mit einem Fingerpiks nach dem Setzen eines neuen Sensors. Bitte berücksichtige, dass die Werte in den ersten 12 Stunden nach dem Setzen möglicherweise noch nicht genau sind. Da es große Unterschiede bei den blutigen Messungen geben kann, prüfe den Wert alle 24 Stunden und kalibriere bei Bedarf. Wenn der Sensor nach ein paar Tagen völlig daneben liegt, sollte er ersetzt werden.

## 3. Diabox nutzen

- Installiere [Diabox](https://www.bubblesmartreader.com/_files/ugd/6afd37_f183eabd4fbd44fcac4b1926a79b094f.pdf). In den Einstellungen, Integration, aktiviere die Datenfreigabe für andere Apps.

![Diabox](../images/Diabox.png)

- Select xDrip+ in [Configuration > BG Source](#Config-Builder-bg-source).

## 4. Juggluco nutzen

Schaue [hier](./Juggluco.md) nach.
