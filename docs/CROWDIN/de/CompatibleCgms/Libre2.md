- - -
orphan: true
- - -

# Freestyle Libre 2 and 2+

Der Freestyle Libre 2 Sensor ist mittlerweile (auch mit der offiziellen App) ein echtes CGM. Dennoch kann LibreLink auch weiterhin keine Daten an AAPS senden. Es gibt aber verschiedene Lösungen für den Einsatz mit AAPS.

## 1. Verwende einen Bluetooth-Transmitter und OOP

Bluetooth transmitters can be used with the Libre 2 (EU) or 2+ (EU) and an [out of process algorithm](https://drive.google.com/file/d/1f1VHW2I8w7Xe3kSQqdaY3kihPLs47ILS/view) app. You can receive blood sugar readings every 5 minutes like with the [Libre 1](./Libre1.md).

Prüfe im Vorfeld, ob der Bluetooth-Transmitter und die notwendige App, sowohl mit Deinem Sensor als auch mit xDrip+ kompatibel ist (ältere und auch aktuelle Blucons sind nicht kompatibel, Miaomiao 1 benötigt Firmwareversion 39 und Miaomiao 2 Firmwareversion 7).

Die Libre2 OOP gibt die gleichen BZ-Messwerte aus wie das Lesegerät oder die LibreLink-App über einen NFC-Scan. AAPS glättet Libre2 Daten über 10-25 Minuten, um Sprünge zu vermeiden. See below [Value smoothing & raw values](#libre2-value-smoothing-raw-values).  OOP übergibt alle fünf Minuten einen Wert. Dieser entspricht dem Durchschnitt der letzten fünf Minuten. Daher sind die BZ-Werte nicht so glatt, stimmen aber mit dem Lesegerät überein und folgen den "echten" BZ-Entwicklungen schneller. Wenn Du mit OOP loppen möchtest, aktiviere alle Glättungseinstellungen in xDrip+.

Es psricht viel dafür einen Bluetooth-Transmitter zu nutzen:

-   Du kannst verschiedene OOP2-Kalibrierungsstrategien wählen (1): den Wert "No calibration", oder kalibriere den Sensor wie einen Libre 1 mit "Calibrate based on raw" oder kalibriere den Wert mit "Calibrate based on glucose".  
  Stelle sicher, dass OOP1 deaktiviert ist (2).

    → Hamburger Menü → Einstellungen → Erweiterte Einstellungen → Andere verschiedene Einstellungen

![OOP2 Calibration](../images/Libre2_OOP2Calibration.png)

-   Wie auch schon der Libre 1 zuvor, kann auch der Libre 2 14,5 Tage genutzt werden
-   Das nachträgliche Auffüllen der Werte (backfilling) der letzten acht Stunden wird vollständig unterstützt

Bemerkung: Der Transmitter kann parallel zur LibreLink-App verwendet werden.

## 2. Nutzen der Direktverbindung zu xDrip+

```{admonition} Libre 2 EU only
:class: warning
xDrip+ doesn't support direct connection to Libre 2 US and AUS.
Only Libre 2 and 2+ **EU** models.
```

- [Diese Anleitung](https://www.minimallooper.com/post/how-to-setup-freestyle-libre-2-and-oop2-to-use-a-native-bluetooth-connection-in-xdrip) beschreibt, wie Du xDrip+ konfigurierst. Wichtig ist, dass Du die [neueste OOP2-Version](https://drive.google.com/file/d/1f1VHW2I8w7Xe3kSQqdaY3kihPLs47ILS/view) herunterlädst und nutzt, da die in der Dokumentation referenzierte Version veraltete ist.
- Follow setup instructions on [xDrip+ settings page](../CompatibleCgms/xDrip.md).

-   Select xDrip+ in in [ConfigBuilder, BG Source](#Config-Builder-bg-source).

## 3. Diabox nutzen

- Install [Diabox](https://www.bubblesmartreader.com/_files/ugd/6afd37_f183eabd4fbd44fcac4b1926a79b094f.pdf). In Settings, Integration, enable Share data with other apps.

![Diabox](../images/Diabox.png)

- Select xDrip+ in in [ConfigBuilder, BG Source](#Config-Builder-bg-source).

## 4. Juggluco nutzen

- Lade die Juggluco-App [hier](https://www.juggluco.nl/Juggluco/download.html) herunter und installiere sie.
- Folge [dieser](https://www.juggluco.nl/Juggluco/index.html) Anleitung
- In Settings, enable xDrip+ broadcast (which doesn't send data to xDrip+ but to AAPS).

![Juggluco broadcast to AAPS](../images/Juggluco_AAPS.png)

- Select xDrip+ in in [ConfigBuilder, BG Source](#Config-Builder-bg-source).

```{admonition} Use with xDrip+
:class: note
You can set Juggluco to broadcast to xDrip+ with Patched Libre Broadcast (you should disable xDrip+ broadcast), in order to calibrate (see here) and avoid 1 minute readings to be sent to AAPS.  
![Juggluco broadcast to xDrip+](../images/Juggluco_xDrip.png)  
You will then need to set xDrip+ data source to Libre 2 Patched App to receive data from Juggluco.  
```

(libre2-patched-librelink-app-with-xdrip)=
## 5. Use the patched LibreLink app with xDrip+

```{admonition} Libre 2 EU only
:class: warning
The patched app is an old version (22/4/2019) and might not be compatible with recent Android releases.  
```

### Step 1: Build the patched app

For legal reasons, "patching" has to be done by yourself. Verwende Suchmaschinen, um die entsprechenden Links zu finden. There are two variants: The recommended original patched app blocks any internet traffic to avoid tracking. The other variant supports LibreView.

Die gepatchte App muss anstelle der ursprünglichen App installiert werden. Der nächste Sensor wird die aktuellen BG-Werte an die xDrip+ App übermitteln, die über Bluetooth auf Deinem Smartphone läuft.

Wichtig: Um mögliche Probleme zu vermeiden, kann es hilfreich sein, zuerst die original LibreLink App auf einem Smartphone, das NFC beherrscht, zu installieren und dann wieder zu deinstallieren. NFC muss eingeschaltet sein. Das verbraucht keine zusätzliche Energie. Erst dann die gepatchte App installieren.

Die gepatchte App kann durch die Vordergrund-Autorisierung Benachrichtigung identifiziert werden. The foreground authorization service improves the connection stability compared to the original app which does not use this service.

![LibreLink Foreground Service](../images/Libre2_ForegroundServiceNotification.png)

Other indications could be the Linux penguin logo in the three dot menu -> Info or the font of the patched app (2) different from the original app (1). Diese Kriterien sind optional und abhängig von der gewünschten App-Quelle.

![LibreLink Font Check](../images/LibreLinkPatchedCheck.png)

Stelle sicher, dass NFC aktiviert ist, erlaube den Zugriff auf Speicher und Standort für die gepatchte App, aktiviere die automatische Zeiteinstellung und den automatischen Zeitzonenwechsel und stelle mindestens einen Alarm in der gepatchten App ein.

### Step 2: Start the sensor with the patched app

Starte nun den Libre2 Sensor, in dem Du ihn einfach mit der gepatchten App scannst. Stelle sicher, dass alle Einstellungen festgelegt wurden.

Zwingend erforderliche Einstellungen für den erfolgreichen Sensorstart:

-   NFC und Bluetooth aktiviert
-   Speicherberechtigung und Standortfreigabe
-   Standortdienst aktiviert
-   automatische Zeiteinstellung und Zeitzonenwechsel
-   mind. ein Alarm in der gepatchten App eingestellt

Beachte bitte, dass der Standortdienst ein zentraler Baustein ist. Dies ist nicht die Berechtigung zum Standort der App, die ebenfalls gesetzt werden muss!

![LibreLink permissions memory & location](../images/Libre2_AppPermissionsAndLocation.png)

![automatic time and time zone + alarm settings](../images/Libre2_DateTimeAlarms.png)

Once the sensor started with the patched app, you won't be able to connect it to another app/phone. If you uninstall the patched app, you will lose alarms and continuous BG readings.

Der erste Verbindungsaufbau ist wichtig. Die LibreLink App versucht alle 30 Sekunden eine drahtlose Verbindung zum Sensor aufzubauen. Falls eine oder mehrere der erforderlichen Einstellungen falsch gesetzt sind, müssen diese angepasst werden. Dafür gibt es keine Zeitbeschränkung. Der Sensor versucht ständig, die Verbindung aufzubauen. Auch falls es einige Stunden dauert. Be patient and try different settings before even thinking of changing the sensor.

Solange du ein rotes Ausrufezeichen siehst ("!") on the upper left corner of the LibreLink start screen there is no connection or some other setting blocks LibreLink to signal alarms. Überprüfe, ob der Ton eingeschaltet ist und die Blockierung aller Arten von Benachrichtigungen von Apps deaktiviert sind. Erst wenn das Ausrufezeichen weg ist, steht die Verbindung und Blutzuckerwerte werden an das Smartphone gesendet. Das sollte nach maximal 5 Minuten passiert sein.

![LibreLink no connection](../images/Libre2_ExclamationMark.png)

Wenn das Ausrufezeichen bleibt oder Du eine Fehlermeldung erhältst, kann dies mehrere Gründe haben:

-   Android location service is not granted - please enable it in system settings
-   automatic time and time zone not set - please change settings accordingly
-   Alarme einschalten - mindestens einer der drei Alarme muss aktiviert sein
-   Bluetooth ist ausgeschaltet - bitte einschalten
-   Töne sind blockiert
-   App-Benachrichtigungen werden blockiert
-   Benachrichtigung inaktiver Bildschirm ist blockiert

Ein Handyneustart kann helfen, muss ggf. mehrmals gemacht werden. Sobald die Verbindung steht, verschwindet das rote Ausrufezeichen und der wichtigste Schritt ist geschafft. Abhängig von den Systemeinstellungen kann es passieren, dass das Ausrufezeichen stehen bleibt, obwohl Du schon Werte erhältst. In beiden Fällen funktioniert es. Sensor und Smartphone sind nun verbunden, alle Minute wird ein Blutzuckerwert übertragen.

![LibreLink Verbindung hergestellt](../images/Libre2_Connected.png)

In seltenen Fällen kann es helfen den Bluetooth-Cache zu leeren und/oder alle Netzwerkverbindungen über das Systemmenü zurückzusetzen. Dadurch werden alle verbundenen Bluetooth-Geräte entfernt und dies kann helfen die Bluetooth-Verbindung zum Libre sauber herzustellen. That procedure is safe as the started sensor is remembered by the patched LibreLink app. Hier muss nichts mehr zusätzlich getan werden. Warte bis sich die gepatchte App mit dem Sensor verbindet.

Nachdem die Verbindung erfolgreich gestartet wurde, kannst Du die Einstellungen des Smartphones bei Bedarf wieder ändern. Dies wird zwar nicht empfohlen, aber ggf. möchtest Du Akkuleistung sparen. Standortfreigabe (GPS) kann ausgeschaltet werden, Lautstärke kann auf Null gesetzt werden oder auch die Alarme können wieder abgeschaltet werden. Die Blutzuckerwerte werden trotzdem übertragen.

Beim Start des nächsten Sensors müssen jedoch alle Einstellungen wieder gesetzt sein!

Hinweis: Die gepatchte App erfordert, dass alle verpflichtenden Einstellungen während des WarmUps aktiviert sind, um erfolgreich eine Verbindung herstellen zu können. Für die 14 Tage des Betriebs sind sie nicht erforderlich. Bei Problemen mit dem Sensor-Start dürfte in den meisten Fällen der Standortdienst deaktiviert sein. Bei Android ist ein ordnungsgemäßer Bluetooth-Betrieb erforderlich, um eine Verbindung herstellen zu können. Siehe dazu auch Googles Android-Dokumentation.

Während der 14 Tage kannst Du parallel ein oder mehrere NFC-fähige Smartphones (nicht jedoch das Lesegerät!) mit der originalen LibreLink App verwenden, um den Libre mittels NFC zu scannen. Es gibt keine zeitliche Begrenzung, um damit zu beginnen. Du könntest ein zweites Smartphone zum Beispiel auch erst am fünften Tag oder so nutzen. Mit den Zusatzsmartphones können die Werte in die Abbott Cloud (LibreView) hochgeladen werden. LibreView kann Berichte für Dein Diabetes-Team erzeugen.

Beachte bitte, dass die originale gepatchte App **keine Internet-Verbindung** hat, um Tracking zu verhindern.

Es gibt jedoch eine Variante der gepatchten App, die LibreView mit aktivierter Internetverbindung unterstützt. In diesem Fall werden Deine Daten in die Abbott Cloud übertragen. But your endo team reporting is fully supported then. Mit dieser Variante ist es auch möglich, die Alarme eines bereits laufenden Sensors auf ein anderes Endgerät, mit dem der Sensor nicht gestartet wurde, zu übertragen. Anleitungen findest Du in deutschen Diabetes-Foren.

### Schritt 3: Installieren und konfigurieren der xDrip+ App

Die Blutzuckerwerte werden von der xDrip + App auf dem Smartphone empfangen.

-   You can safely download the [latest APK (stable)](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk) unless you need recent features, in which case you should use the latest [Nightly Snapshot](https://github.com/NightscoutFoundation/xDrip/releases).
-   Set xDrip+ with the [patched app data source](#xdrip-libre2-patched-app).
-   Follow setup instructions on [xDrip+ settings page](../CompatibleCgms/xDrip.md).

### Schritt 4: Sensor starten

- → Hamburger Menu (1) → Start sensor (2) → Start sensor (3) → Answer "Not Today" (4).

![xDrip+ Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)

This will not physically start any Libre2 sensor or interact with them in any case. Damit soll xDrip+ einfach nur mitgeteilt werden, dass ein neuer Sensor Blutzuckerwerte liefert. Wenn verfügbar, gib zwei blutige Messwerte für die Anfangskalibrierung ein. Nun sollten die Blutzuckerwerte alle 5 Minuten in xDrip+ angezeigt werden. Übersprungene Werte, weil Du zum Beispiel zu weit von Deinem Telefon entfernt warst, werden nicht nachgefüllt.

Nach einem Sensorwechsel erkennt xDrip+ den neuen Sensor automatisch und löscht alle Kalibrierungsdaten. You may check you blood glucose after activation and make a new initial calibration.

### Schritt 5: AAPS konfigurieren

-   Öffne in AAPS die KONFIGURATION > BZ-Quelle und aktiviere "xDrip+ BZ".

![xDrip+ BG Source](../images/ConfBuild_BG_xDrip.png)

-   If AAPS does not receive BG values when phone is in airplane mode, use 'Identify receiver' as describe on [xDrip+ settings page](#xdrip-identify-receiver).

Wenn Du den Libre 2 als BZ-Quelle nutzt, stehen die Funktionen 'Enable SMB always' und 'Enable SMB after carbs' mit dem SMB Algorithmus nicht zur Verfügung. Die BZ-Werte des Libre 2 sind für einen sicheren Einsatz dieser Funktionen nicht glatt genug. See [Smoothing blood glucose data](../CompatibleCgms/SmoothingBloodGlucoseData.md) for more details.

(Libre2-experiences-and-troubleshooting)=
### Erfahrungen und Troubleshooting

#### Verbindung

The connectivity is good with most phones, with the exception of Huawei mobile phones. Die Verbindung kann durchaus einmal abreißen, wenn sich der Sensor auf der einen Körperseite, das Handy auf der anderen in der Hosentasche befindet oder wenn man im Freien unterwegs ist. Wear your phone on the sensor side of your body. In Räumen, wo sich Bluetooth über Reflektionen ausbreitet, sollten keine Probleme auftreten. Bei Verbindungsproblemen bitte ein anderes Telefon testen. Es kann auch helfen, den Sensor so zu setzen, dass die interne Bluetooth-Antenne nach unten zeigt. Der Schlitz auf dem Applikator muss beim Setzen des Sensors nach unten zeigen.

(libre2-value-smoothing-raw-values)=
#### Glättung der Werte & Rohdaten

Technisch wird alle Minute der aktuelle Blutzucker-Wert an xDrip+ übertragen. A weighted average filter calculates a smoothed value over the last 25 minutes by default. You can change the period in the NFC Scan features menu.

→ Hamburger menu → Settings → NFC Scan features → Smooth libre 3 data when using xxx method

![xDrip+ advanced settings Libre 2 & Rohdaten](../images/xDrip_Libre3_Smooth.png)

Dies ist zwingend erforderlich um damit zu loopen. Die Kurven sehen glatt aus und die Loopergebnisse sind prima. Die Rohwerte, die den Alarmen zugrunde liegen, schwanken ein wenig mehr, entsprechen aber den Werten, die auch der Reader anzeigt. Man kann zusätzlich die Rohwerte im xDrip+ Graph anzeigen lassen, um bei schnellen Veränderungen rechtzeitig reagieren zu können. Dazu bitte Less Common Settings->Advanced Settings for Libre2->show Raw values anschalten". Dann werden zusätzlich Rohwerte als kleine weiße Punkte angezeigt und zusätzliche Sensorinformationen sind im Systemmenü verfügbar.

Die Rohwerte sind sehr hilfreich, wenn sich der Blutzuckerwert schnell ändert. Auch wenn die einzelnen Punkte viel mehr springen, wirst Du die Tendenz deutlich besser erkennen als bei der geglätteten Linie und kannst so bessere Therapieentscheidungen treffen.

→ Hamburger menu → Settings → Less common settings → Advanced settings for Libre 2

![xDrip+ advanced settings Libre 2 & Rohdaten](../images/Libre2_RawValues.png)

#### Sensorlaufzeit

Die Sensorlaufzeit ist fix 14 Tage. Die 12 extra Stunden des Libre1 existieren nicht mehr. xDrip+ shows additional sensor information after enabling Advanced Settings for Libre2 → "show Sensors Infos" in the system menu like the starting time. Die verbleibende Zeit des Sensors ist auch in der gepatchten LibreLink-App zu sehen. Either in the main screen as remaining days display or as the sensor start time in the three-point menu → Help → Event log under "New sensor found".

![Libre 2 Startzeit](../images/Libre2_Starttime.png)

#### Neuer Sensor

Ein Sensortausch erfolgt danach dann immer on-the-fly: Neuen Sensor kurz vor Aktivierung setzen. Sobald xDrip+ keine Daten mehr vom alten Sensor erhält, starte den neuen Sensor mit der gepatchten App. Nach einer Stunde sollten neue Werte automatisch in xDrip+ erscheinen.

Wenn nicht, dann die Smartphone-Einstellungen prüfen und vorgehen wie beim ersten Start. Es gibt keine zeitliche Einschränkung. Versuche, die richtigen Einstellungen herauszufinden. Es ist nicht erforderlich, den Sensor sofort zu ersetzen, bevor Du verschiedene Kombinationen ausprobiert hast. Die Sensoren sind robust und versuchen permanent, eine Verbindung herzustellen. Lasse Dir Zeit. In den meisten Fällen hast Du eine Einstellung verändert, die nun zu Problemen führt.

Nach erfolgreicher Verbindung musst Du in xDrip "Sensor Stop" und "Delete calibration only" wählen. Dadurch erkennt xDrip+, dass die Werte von einem neuen Sensor kommen und die alten Kalibrationen nicht mehr verwendet werden dürfen und daher gelöscht werden müssen. Dabei findet keine Kommunikation mit dem Libre2 Sensor statt. Du musst den Sensor in xDrip nicht starten+.

![xDrip+ fehlende Daten beim Libre 2 Sensorwechsel](../images/Libre2_GapNewSensor.png)

#### Kalibrierung

You can calibrate the Libre2 **with an offset of -40 mg/dl to +20 mg/dL \[-2,2 mmol/l to +1,1 mmol/l\]** (intercept). The slope isn't changeable. Please check by fingerpricking after setting a new sensor, keeping in mind it might not be accurate in the first 12 hours after insertion. Since there can be large differences to the blood measurements, verify every 24 hours and calibrate if necessary. If the sensor is completely off after a few days, it should then be replaced.

### Plausibilitätsprüfungen

Die Libre2 Sensoren enthalten Plausibilitätsprüfungen, um schlechte Sensorwerte zu erkennen. Sobald sich der Sensor am Arm bewegt oder leicht angehoben wird, können die Werte anfangen zu schwanken. Der Libre2 Sensor schaltet sich dann aus Sicherheitsgründen ab. Leider erfolgen beim Scannen mit der App weitere Prüfungen. Die App kann ebenfalls den Sensor deaktivieren, was zu einem frühen Ausfall führen kann, obwohl der Sensor in Ordnung ist. Derzeit ist der interne Test zu streng. Avoid scanning the sensor with another phone to reduce the risk of unexpected sensor shutdown.

(Libre2-best-practices-for-calibrating-a-libre-2-sensor)=
# Best practices for calibrating a Libre 2 sensor

Um die besten Ergebnisse bei der Kalibrierung des Libre 2 zu erzielen, gibt es einige „Regeln“, denen Du folgen solltest. Sie gelten unabhängig von der Kombination von Software (z.B. gepatchte Libre-app, oop2, …), die verwendet wird, um die Libre 2 Werte zu handhaben.

1.  Die wichtigste Regel ist es, den Sensor nur zu kalibrieren, wenn Du für mindestens 15 Minuten einen flachen BZ-Verlauf hast. Das Delta zwischen den letzten drei Messungen sollte 10 mg/dl nicht überschreiten (nicht mehr als 15 Minuten zwischen jeder Messung). Da der Libre 2 nicht den Blutzuckerspiegel im Blut, sondern den Blutzuckerspiegel im Gewebe misst, gibt es eine gewisse Zeitverzögerung, insbesondere wenn der Blutzuckerspiegel steigt oder fällt. Diese Zeitverzögerung kann in ungünstigen Situationen zu viel zu großen Kalibrierungsabweichungen führen, selbst wenn der Anstieg/Abfall des Blutzuckers nicht so stark ist. Vermeide daher nach Möglichkeit eine Kalibrierung in steigenden oder fallenden Momenten. -> Wenn Du eine Kalibrierung hinzufügen musst, während der Blutzucker nicht stabil ist (z. beim Starten eines neuen Sensors), wird empfohlen, diese Kalibration(en) so schnell wie möglich zu entfernen und eine neue hinzuzufügen, wenn der Blutzucker wieder stabiler ist.
2.  Eigentlich wird dies automatisch berücksichtigt, wenn Du Regel 1 befolgst, aber um auf Nummer sicher zu gehen: Wenn Du Vergleichsmessungen durchführst, sollte Dein Blutzuckerspiegel auch für etwa 15 Minuten flach sein. Vergleiche nicht, wenn der Wert steigt oder fällt. Vergleichen Sie nicht, wenn der Blutzucker steigt oder fällt. Wichtig: Du sollst weiterhin Blutzuckermessungen durchführen, wann immer Du möchtest. Verwende die Ergebnisse jedoch nicht zur Kalibrierung, wenn sie steigen oder fallen!
3.  Da die Kalibrierung des Sensors in flachen Bereichen ein sehr guter Ausgangspunkt ist, wird auch dringend empfohlen, den Sensor nur in dem von Dir gewünschten Zielbereich zu kalibrieren, z. B. 70 mg/dl bis 160 mg/dl. Der Libre 2 ist nicht dafür optimiert, über einen großen Bereich wie 50 mg/dl bis 350 mg/dl zu arbeiten (zumindest nicht auf geradlinige Weise). Versuche also nur innerhalb des gewünschten Bereichs zu kalibrieren. -> Akzeptiere einfach, dass die Werte außerhalb deines Kalibrierungsbereichs nicht perfekt mit den Blutzuckerwerten übereinstimmen werden.
4.  Kalibriere nicht zu häufig. Eine sehr häufige Kalibrierung des Sensors führt meist zu schlechteren Ergebnissen. Wenn der Sensor unter flachen Bedingungen gute Ergebnisse liefert, füge einfach keine neue Kalibrierung hinzu, da sie keine nützliche Wirkung hat. Es sollte ausreichen, den Status alle 3-5 Tage zu überprüfen (natürlich auch in niedrigen BZ-Bereichen).
5.  Vermeide die Kalibrierung, wenn sie nicht erforderlich ist. This might sound silly but it is not recommended to add a new calibration if the blood glucose to flesh glucose level difference is only ±10 mg/dl (e.g. blood glucose level: 95, Libre sensor 100 -> do NOT add the 95, blood glucose level: 95, Libre sensor 115 -> add the 95 to be taken into account for the calibration)

Nach der Aktivierung eines neuen Sensors und am Ende der Lebensdauer des Sensors ist es sinnvoll, Vergleichsmessungen häufiger als nach 3-5 Tagen durchzuführen, wie in Regel Nr. 4 angegeben. Bei neuen und alten Sensoren ist es wahrscheinlicher, dass sich die Rohwerte ändern und eine Neukalibrierung erforderlich ist. Von Zeit zu Zeit kommt es vor, dass ein Sensor keine gültigen Werte liefert. Wahrscheinlich ist der Sensorwert im Vergleich zum aktuellen Blutzuckerspiegel (z. B. Sensor: 50 mg/dl, BG: 130 mg/dl) viel zu niedrig auch nach der Kalibrierung. Wenn dies der Fall ist, kann der Sensor nicht kalibriert werden, um brauchbare Ergebnisse zu liefern. z.B. bei Verwendung der gepatchten Libre-App kann man einen Korrekturwert von maximal +20 mg/dl hinzufügen. Wenn es Dir passiert, dass der Sensor viel zu niedrige Werte liefert, zögere nicht, ihn auszutauschen, da er nicht besser werden wird. Auch wenn es sich um einen defekten Sensor handeln könnte, solltest Du bei Sensoren, die sehr oft viel zu niedrige Werte liefern, versuchen, verschiedene Stellen für die Platzierung des Sensors verwenden. Selbst im offiziellen Bereich (Oberarm) kann es einige Stellen geben, an denen die Sensoren einfach keine gültigen Werte liefern. Hier musst Du schlichtweg verschiedene Bereiche ausprobieren, bis es wie gewünscht funktioniert.
