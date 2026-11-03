# Freestyle Libre 2 und 2+

Der Freestyle Libre 2 Sensor ist mittlerweile (auch mit der offiziellen App) ein echtes CGM. Dennoch kann LibreLink auch weiterhin keine Daten an AAPS senden. Es gibt aber verschiedene Lösungen für den Einsatz mit AAPS.

## 1. Verwende einen Bluetooth-Transmitter und OOP

Bluetooth-Transmitter können mit dem Libre 2 (EU) oder 2+ (EU) und einer Out of Process Algorithmus-App verwendet werden. Glukosewerte können - wie beim [Libre 1](./Libre1.md) - alle 5 Minuten empfangen werden.

Prüfe, ob die Bridge und die App, die Du nutzen möchtest, mit Deinem Sensor und mit xDrip kompatibel sind.

Der Libre 2 OOP (Details findest Du [hier](#Libre2_OOP2)) erzeugt die gleichen Glukose-Messwerte wie das originale Lesegerät. AAPS glättet Libre2 Daten über 10-25 Minuten, um Sprünge zu vermeiden. Mehr Details findest Du im Abschnitt [Glättung der Werte & Rohdaten](#libre2-value-smoothing-raw-values).  OOP übergibt alle fünf Minuten einen Wert. Dieser entspricht dem Durchschnitt der letzten fünf Minuten. Daher sind die BZ-Werte nicht so glatt, stimmen aber mit dem Lesegerät überein und folgen den "echten" BZ-Entwicklungen schneller. Wenn Du mit OOP loppen möchtest, aktiviere alle Glättungseinstellungen in xDrip.

Es psricht viel dafür einen Bluetooth-Transmitter zu nutzen:

-   Du kannst verschiedene OOP2-Kalibrierungsstrategien wählen (1): Lesegerät-Werte mit „No calibration“, den Sensor wie einen Libre 1 mit „Calibrate based on raw“ kalibrieren oder die lesegerätähnlichen Werte mit „Calibrate based on glucose“ kalibrieren.  
  Stelle sicher, dass OOP1 deaktiviert bleibt (2).

    → Hamburger Menü → Einstellungen → Erweiterte Einstellungen → Andere verschiedene Einstellungen

![OOP2 Calibration](../images/Libre2_OOP2Calibration.png)

-   Wie auch schon der Libre 1 zuvor, kann auch der Libre 2 14,5 Tage genutzt werden
-   Das nachträgliche Auffüllen der Werte (backfilling) der letzten acht Stunden wird vollständig unterstützt

Bemerkung: Der Transmitter kann parallel zur LibreLink-App verwendet werden.

### Starte den Sensor

- → Hamburger-Menü (1) → Sensor starten (2) → Sensor starten (3) → Antwort "Nicht heute" (4).

![xDrip Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)

Damit wird der Libre2 Sensor nicht gestartet und wird auch kein Datenaustausch möglich. Damit wird xDrip lediglich mitgeteilt, dass ein neuer Sensor Glukosewerte liefert. Wenn möglich, gib für die Erstkalibrierung zwei blutig gemessene Werte ein. Jetzt sollten die Glukosewerte in xDrip alle 5 Minuten angezeigt werden. Übersprungene Werte, weil Du zum Beispiel zu weit von Deinem Telefon entfernt warst, werden nicht nachgefüllt.

Nach einem Sensorwechsel erkennt xDrip den neuen Sensor automatisch und löscht alle Kalibrierungsdaten. Du kannst nach der Aktivierung blutig messen und eine neue Erstkalibrierung durchführen.

### AAPS konfigurieren (nur für's Loopen)

-   Öffne in **AAPS** das **Menü** (☰) oben links, gehe zu **Konfiguration** > **BZ-Quelle** und wähle **xDrip+ BZ**

![Configuration > BG Source with xDrip+ BG selected](../images/v4/Configuration/configuration_bg_source.png)

-   Falls AAPS im Flugmodus keine Glukosewerte empfängt, nutze „Identifiziere Empfänger“ wie auf der Seite [xDrip-Einstellungen](#xdrip-identify-receiver) beschrieben.

## 2. Direktverbindung von xDrip nutzen

```{admonition} Libre 2 EU only
:class: warning
xDrip unterstützt keine Direktverbindung zum Libre 2 US und AUS.
Nur Libre 2 und 2+ **EU** Modelle.
```

- Folge [dieser Anleitung](./Libre2MinimalL00per.md), um xDrip einzurichten, da die Originaldokumentation auf eine veraltete OOP2-Version verweist.
- Folge den Anweisungen zum Einrichten auf der Seite [xDrip-Einstellungen](../CompatibleCgms/xDrip.md).

-   Wähle xDrip+ BZ unter [Konfiguration > BZ-Quelle](#Config-Builder-bg-source).

(libre2-value-smoothing-raw-values)=

### Glättung der Werte & Rohdaten

Technisch wird der aktuelle Glukosewert jede Minute an xDrip übertragen. Daraus wird standardmäßig mit einem gewichteten Mittel über die letzten 25 Minuten ein geglätteter Wert errechnet. Du kannst die Zeitspanne im NFC-Scan-Funktionen-Menü ändern.

→ Hamburger-Menü → Einstellungen → NFC-Scan-Funktionen → Libre3-Daten glätten, wenn Methode xxx verwendet wird

![xDrip advanced settings Libre 2 & raw values](../images/xDrip_Libre3_Smooth.png)

Dies ist zwingend erforderlich um damit zu loopen. Die Kurven sehen glatt aus und die Loopergebnisse sind prima. Die Rohwerte, die den Alarmen zugrunde liegen, schwanken ein wenig mehr, entsprechen aber den Werten, die auch der Reader anzeigt. Zusätzlich kannst Du die Rohwerte im xDrip-Graphen anzeigen lassen, um bei schnellen Veränderungen rechtzeitig reagieren zu können. Dazu bitte Less Common Settings->Advanced Settings for Libre2->show Raw values anschalten". Dann werden zusätzlich Rohwerte als kleine weiße Punkte angezeigt und zusätzliche Sensorinformationen sind im Systemmenü verfügbar.

Die Rohwerte sind sehr hilfreich, wenn sich der Blutzuckerwert schnell ändert. Auch wenn die einzelnen Punkte stärker springen, erkennst Du die Tendenz deutlich besser als mit der geglätteten Linie und kannst so passende Therapieentscheidungen treffen.

→ Hamburger-Menü → Einstellungen → Erweiterte Einstellungen → Erweiterte Einstellungen für Libre 2

![xDrip advanced settings Libre 2 & raw values](../images/Libre2_RawValues.png)



#### Kalibrierung

Du kannst den Libre2 **mit einem Offset von -40 mg/dl bis +20 mg/dl \[-2,2 mmol/l bis +1,1 mmol/l\]** kalibrieren (Achsenabschnitt). Die Neigung (slope) kann nicht geändert. Bitte überprüfe die Werte mit einem Fingerpiks nach dem Setzen eines neuen Sensors. Bitte berücksichtige, dass die Werte in den ersten 12 Stunden nach dem Setzen möglicherweise noch nicht genau sind. Da es große Unterschiede bei den blutigen Messungen geben kann, prüfe den Wert alle 24 Stunden und kalibriere bei Bedarf. Wenn der Sensor nach ein paar Tagen völlig daneben liegt, sollte er ersetzt werden.

## 3. Diabox nutzen

- Installiere [Diabox](https://www.bubblesmartreader.com/_files/ugd/6afd37_f183eabd4fbd44fcac4b1926a79b094f.pdf). In den Einstellungen, Integration, aktiviere die Datenfreigabe für andere Apps.

![Diabox](../images/Diabox.png)

- Wähle xDrip+ BZ unter [Konfiguration > BZ-Quelle](#Config-Builder-bg-source).

## 4. Juggluco nutzen

Schaue [hier](./Juggluco.md) nach.
