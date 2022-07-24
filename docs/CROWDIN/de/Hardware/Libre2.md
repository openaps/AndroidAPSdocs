# Freestyle Libre 2

Das Freestyle Libre 2 System kann gefährliche Blutzuckerwerte automatisch melden. Dazu sendet der Libre2 Sensor minütlich die aktuellen Blutzuckerwerte an einen Empfänger (Reader oder Smartphone). Der Empfänger löst dann bei Bedarf einen Alarm aus. Mit der selbst-modifizierten LibreLink App und xDrip+ kannst Du mit Deinem Smartphone kontinuierlich CGM Werte empfangen und anzeigen.

Der Sensor kann im Bereich von -40 mg/dl bis +20 mg/dl (-2,2 mmol/l bis +1,1 mmol/l) kalibriert werden, um die Differenz zwischen blutiger Messung und den Sensorwerten anzupassen.

BZ-Werte können wie beim Libre1 auch mit einem Bluetooth-Transmitter übermittelt werden.

Wichtiger Hinweis: Das funktioniert nicht mit der US-Version des Freestyle 2 Sensors! Die US-Version verbindet sich nur mit einem Lesegerät, nicht mit einem Smartphone.

## Schritt 1: Erstelle Deine eigene gepatchte LibreLink-App

Aus rechtlichen Gründen muss das sogenannte Patchen von Dir selbst erledigt werden. Verwende Suchmaschinen, um die entsprechenden Links zu finden. There are mainly two variants: The recommended original patched app blocks any internet traffic to avoid tracking. Die andere Variante unterstützt LibreView, das möglicherweise von Deinem Arzt benötigt wird.

Die gepatchte App muss anstelle der ursprünglichen App installiert werden. Der nächste Sensor wird die aktuellen BG-Werte an die xDrip+ App übermitteln, die über Bluetooth auf Deinem Smartphone läuft.

Wichtig: Um mögliche Probleme zu vermeiden, kann es hilfreich sein, zuerst die original LibreLink App auf einem Smartphone, das NFC beherrscht, zu installieren und dann wieder zu deinstallieren. NFC muss eingeschaltet sein. Das verbraucht keine zusätzliche Energie. Erst dann die gepatchte App installieren.

Die gepatchte App kann durch die Vordergrund-Autorisierung Benachrichtigung identifiziert werden. The foreground authorization service improves the connection stability compared to the original app which do not use this service.

![LibreLink Foreground Service](../images/Libre2_ForegroundServiceNotification.png)

Other indications could be the Linux penguin logo three dot menu -> Info or the font of the patched app. Diese Kriterien sind optional und abhängig von der gewünschten App-Quelle.

![LibreLink Font Check](../images/LibreLinkPatchedCheck.png)

Stelle sicher, dass NFC aktiviert ist, erlaube den Zugriff auf Speicher und Standort für die gepatchte App, aktiviere die automatische Zeiteinstellung und den automatischen Zeitzonenwechsel und stelle mindestens einen Alarm in der gepatchten App ein.

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

Der Sensor merkt sich das Gerät, mit dem er gestartet wurde. Nur dieses Gerät kann zukünftig Alarme empfangen.

Der erste Verbindungsaufbau ist kritisch. Die LibreLink App versucht alle 30 Sekunden eine drahtlose Verbindung zum Sensor aufzubauen. Falls eine oder mehrere der erforderlichen Einstellungen falsch gesetzt sind, müssen diese angepasst werden. Dafür gibt es keine Zeitbeschränkung. Der Sensor versucht ständig, die Verbindung aufzubauen. Auch wenn es einige Stunden dauert. Sei geduldig und probiere verschiedene Einstellungen, bevor Du auch nur daran denkst, den Sensor zu wechseln.

Solange du ein rotes Ausrufezeichen siehst ("!") an der linken oberen Ecke des Hyperlink-Startbildschirms gibt es keine Verbindung oder andere Einstellungen blockieren Alarme von LibreLink. Überprüfe, ob der Ton eingeschaltet ist und die Blockierung aller Arten von Benachrichtigungen von Apps deaktiviert sind. Erst wenn das Ausrufezeichen weg ist, steht die Verbindung und Blutzuckerwerte werden an das Smartphone gesendet. Das sollte nach maximal 5 Minuten passiert sein.

![LibreLink no connection](../images/Libre2_ExclamationMark.png)

Wenn das Ausrufezeichen bleibt oder Du eine Fehlermeldung erhältst, kann dies mehrere Gründe haben:

-   die Standortfreigabe von Android ist nicht erteilt - bitte in den Systemeinstellungen freigeben
-   automatische Zeitzone und Uhrzeit nicht gesetzt - bitte entsprechend die Einstellungen ändern
-   Aktiviere Alarme - mindestens einer der drei Alarme muss aktiviert sein in LibreLink
-   Bluetooth ist ausgeschaltet - bitte einschalten
-   Töne sind blockiert
-   App-Benachrichtigungen werden blockiert
-   Benachrichtigung inaktiver Bildschirm ist blockiert
-   Du hast einen fehlerhaften Libre 2 Sensor mit einer Produktions-LOT-Nummer, die mit einem 'K' beginnt und bei der dann 8 Ziffern folgen. Diese ist auf einer gelben Packungsbeilage aufgedruckt. Diese Sensoren müssen ausgetauscht werden, da sie nicht mit Bluetooth funktionieren.

Handyneustart kann helfen, muss ggf. mehrmals gemacht werden. Sobald die Verbindung steht, verschwindet das rote Ausrufezeichen und der wichtigste Schritt ist geschafft. Abhängig von den Systemeinstellungen kann es passieren, dass das Ausrufezeichen stehen bleibt, obwohl Du schon Werte erhältst. In beiden Fällen funktioniert es. Sensor und Smartphone sind nun verbunden, alle Minute wird ein Blutzuckerwert übertragen.

![LibreLink connection established](../images/Libre2_Connected.png)

In rare case it could help to empty the bluetooth cache and/or reset all network connections via the system menu. This removes all connected bluetooth devices which may help to setup a proper bluetooth connection. That procedure is save as the started sensor is remembered by the patched LibreLink app. Nothing additional has to be done here. Simply wait for the patched app to connect to the sensor.

After a successful connection the smartphone settings can be changed if necessary. Dies wird zwar nicht empfohlen, aber ggf. möchtest Du Akkuleistung sparen. Location service can be switched off, volume can be set to zero or alarms can be switched off again. The blood sugar levels are transferred anyway.

Beim Start des nächsten Sensors müssen jedoch alle Einstellungen wieder gesetzt sein!

Remark: The patched app needs the mandatory settings set in that hour after warmup to enable a connection. For the 14 days operation time they are not needed. In most cases when you have problems with starting a sensor the location service was switched off. For Android it is needed for proper bluetooth operation(!) to connect. Please refer to Google's Android documentation.

During the 14 days you can use in parallel one or more NFC capable smartphones (not the reader device!) running the original LibreLink app for scanning via NFC. Es gibt keine zeitliche Begrenzung, um damit zu beginnen. You could use a parallel phone for example on day 5 or so. The parallel phones(s) could upload the blood sugar values into the Abbott Cloud (LibreView). LibreView kann Berichte für Dein Diabetes-Team erzeugen. Es gibt viele Eltern, die das unbedingt brauchen.

Please note that the original patched app **does not have any connection to the internet** to avoid tracking.

However there is a variant of the patched app supporting LibreView with enabled internet access. Please be aware that your data is transferred to the cloud then. But your diadoc tool- and reporting chain is fully supported then. With that variant it is also possible to move the alarms of a running sensor to a different device which not has started the sensor. Please google in diabetes related German forums how this could be done.

## Schritt 2: Installieren und konfigurieren der xDrip+ App

Die Blutzuckerwerte werden von der xDrip + App auf dem Smartphone empfangen.

-   If not already set up then download xDrip+ app and install one of the latest nightly builds from [here](https://github.com/NightscoutFoundation/xDrip/releases).
-   In xDrip+ als Datenquelle „Libre2 (patched App)“ auswählen
-   If necessary, enter "BgReading:d,xdrip libre_receiver:v" under Less Common Settings->Extra Logging Settings->Extra tags for logging. Damit werden evtl. Fehlermeldungen protokolliert.
-   In xDrip+ gehe zu Einstellungen > Inter-App Einstellungen > Lokaler Broadcast und wähle AN.
-   In xDrip+ gehe zu Einstellungen > Inter-App Einstellungen > Behandlungen annehmen und wähle AUS.
-   to enable AAPS to receive blood sugar levels (version 2.5.x and later) from xDrip+ please set [Settings > Interapp Settings > Identify Receiver "info.nightscout.androidaps"](../Configuration/xdrip#identify-receiver)
-   Falls du mit AndroidAPS kalibrieren willst, dann gehe in xDrip+ zu Einstellungen > Inter-App Einstellungen > Accept Calibrations und wähle AN. Du solltest auch die Optionen in Einstellungen > Erweiterte Einstellungen > Erweiterte Kalibrierung kontrollieren.

![xDrip+ LibreLink logging](../images/Libre2_Tags.png)

## Schritt 3: Sensor starten

In xDrip+ den Sensor dann mit „Start Sensor“ und „nicht heute“ starten.

In fact this will not physically start any Libre2 sensor or interact with them in any case. This is simply to indicate xDrip+ that a new sensor is delivering blood sugar levels. If available, enter two bloody measured values for the initial calibration. Now the blood glucose values should be displayed in xDrip+ every 5 minutes. Skipped values, e.g. because you were too far away from your phone, will not be backfilled.

After a sensor change xDrip+ will automatically detect the new sensor and will delete all calibration data. You may check you bloody BG after activation and make a new initial calibration.

## Schritt 4: AndroidAPS konfigurieren

-   In AndroidAPS go to Config Builder > BG Source and check 'xDrip+'
-   If AndroidAPS does not receive BG values when phone is in airplane mode, use 'Identify receiver' as describe on [xDrip+ settings page](../Configuration/xdrip#identify-receiver).

Until now, using Libre 2 as BG source you cannot activate ‘Enable SMB always’ and ‘Enable SMB after carbs’ within SMB algorithm. The BG values of Libre 2 are not smooth enough to use it safely. See [Smoothing blood glucose data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) for more details.

## Erfahrungen und Troubleshooting

### Verbindung

Die Verbindungsqualität ist außerordentlich gut. With the exception of Huawei mobile phones, all current smartphones seem to work well. The reconnect rate in case of connection loss is phenomenal. The connection can break off if the mobile phone is in the pocket opposite the sensor or if you are outdoors. When I am gardening, I use to wear my phone on the sensor side of my body. In rooms, where Bluetooth spreads over reflections, no problems should occur. If you have connectivity problems please test another phone. It may also help to set the sensor with the internal BT antenna pointing down. Der Schlitz auf dem Applikator muss beim Setzen des Sensors nach unten zeigen.

### Glättung der Werte & Rohdaten

Technisch wird alle Minute der aktuelle Blutzucker-Wert an xDrip+ übertragen. Daraus wird mit einem weighted average Filter über die letzten 25 Minuten ein geglätteter Wert errechnet,  um damit bei Bedarf loopen zu können. Die Kurven sehen glatt aus und die Loopergebnisse sind prima. Die Rohwerte, die den Alarmen zugrunde liegen, schwanken ein wenig mehr, entsprechen aber den Werten, die auch der Reader anzeigt. Man kann zusätzlich die Rohwerte im xDrip+ Graph anzeigen lassen, um bei schnellen Veränderungen rechtzeitig reagieren zu können. Dazu bitte Less Common Settings->Advanced Settings for Libre2->show Raw values anschalten". Dann werden zusätzlich Rohwerte als kleine weiße Punkte angezeigt und zusätzliche Sensorinformationen sind im Systemmenü verfügbar.

Die Rohwerte sind sehr hilfreich, wenn sich der Blutzuckerwert schnell ändert. Auch wenn die einzelnen Punkte viel mehr springen, wirst Du die Tendenz deutlich besser erkennen als bei der geglätteten Linie und kannst so bessere Therapieentscheidungen treffen.

![xDrip+ advanced settings Libre 2 & raw values](../images/Libre2_RawValues.png)

### Sensorlaufzeit

Die Sensorlaufzeit ist fix 14 Tage. Die 12 extra Stunden des Libre1 existieren nicht mehr. xDrip+ shows additional sensor information after enabling Advanced Settings for Libre2 \> "show Sensors Infos" in the system menu like the starting time. Die verbleibende Zeit des Sensors ist auch in der gepatchten LibreLink-App zu sehen. Entweder im Hauptbildschirm als verbleibende Tage Anzeige oder als Startzeit des Sensors im Drei-Punkt-Menü>Hilfe->Event Log unter "Neuer Sensor gefunden".

![Libre 2 start time](../images/Libre2_Starttime.png)

### Neuer Sensor

Ein Sensortausch erfolgt danach dann immer on-the-fly: Neuen Sensor kurz vor Aktivierung setzen. Sobald xDrip+ keine Daten mehr vom alten Sensor erhält, starte den neuen Sensor mit der gepatchten App. Nach einer Stunde sollten neue Werte automatisch in xDrip+ erscheinen.

Wenn nicht, dann die Smartphone-Einstellungen prüfen und vorgehen wie beim ersten Start. Es gibt keine zeitliche Einschränkung. Versuche, die richtigen Einstellungen herauszufinden. Es ist nicht erforderlich, den Sensor sofort zu ersetzen, bevor Du verschiedene Kombinationen ausprobiert hast. Die Sensoren sind robust und versuchen permanent, eine Verbindung herzustellen. Lasse Dir Zeit. In den meisten Fällen hast Du eine Einstellung verändert, die nun zu Problemen führt.

Nach erfolgreicher Verbindung musst Du in xDrip "Sensor Stop" und "Delete calibration only" wählen. Dadurch erkennt xDrip+, dass die Werte von einem neuen Sensor kommen und die alten Kalibrationen nicht mehr verwendet werden dürfen und daher gelöscht werden müssen. Dabei findet keine Kommunikation mit dem Libre2 Sensor statt. Du musst den Sensor in xDrip nicht starten+.

![xDrip+ missing data when changing Libre 2 sensor](../images/Libre2_GapNewSensor.png)

### Kalibrierung

Der Sensor kann im Bereich von -40 mg/dl bis +20 mg/dl (-2,2 mmol/l bis +1,1 mmol/l) kalibriert werden. Die Steigung lässt sich nicht ändern, da der Libre2 deutlich genauer ist als der Libre1. Prüfe zeitnah nach dem Setzen eines neuen Sensors mit einer blutigen Messung. Es ist bekannt, dass es deutliche Abweichungen zu den blutigen Messungen geben kann. Zur Sicherheit sollte alle 24 - 48 Stunden kalibriert werden. Die Werte sind bis zum Sensorende genau und „leiern“ nicht aus wie beim Libre1.  Sind die Sensorwerte allerdings völlig daneben, dann wird sich das nicht ändern. Der Sensor sollte dann umgehend getauscht werden.

### Plausibilitätsprüfungen

Die Libre2 Sensoren enthalten Plausibilitätsprüfungen, um schlechte Sensorwerte zu erkennen. Sobald sich der Sensor am Arm bewegt oder leicht angehoben wird, können die Werte anfangen zu schwanken. Der Libre2 Sensor schaltet sich dann aus Sicherheitsgründen ab. Leider erfolgen beim Scannen mit der App weitere Prüfungen. Die App kann ebenfalls den Sensor deaktivieren, was zu einem frühen Ausfall führen kann, obwohl der Sensor in Ordnung ist. Derzeit ist der interne Test zu streng. Ich verzichte mittlerweile vollständig auf das Scannen und habe seitdem keinen Ausfall mehr gehabt.

### Reisen über Zeitzonen hinweg

In anderen [Zeitzonen](../Usage/Timezone-traveling.md) gibt es zwei Strategien zum Loopen:

Entweder

1.  die Smartphone-Zeit unverändert lassen und das Basal-Profil verschieben (Smartphone im Flugmodus) oder
2.  lösche den Pumpenverlauf und ändere die Smartphone-Zeit auf lokale Zeit.

Methode 1. ist prima, solange man vor Ort keinen neuen Libre2 Sensor setzen muss. Im Zweifel Methode 2 wählen, insbesondere wenn die Reise länger dauert. Setzt man einen neuen Sensor muss leider die automatische Zeitzone gesetzt sein, also Methode 1. Methode 1 gestört würde. Bitte prüfen bevor man unterwegs ist, sonst kann man schnell Probleme bekommen.

### Erfahrungen

Insgesamt eines der kleinsten CGM System am Markt. Klein, kein Transmitter notwendig und sehr genaue Werte ohne Schwankungen. After approx. 12 hours running-in phase with deviations of up to 30 mg/dl (1,7 mmol/l)the deviations are typical smaller than 10 mg/dl (0,6 mmol/l). Best results at the rear orbital arm, other setting points with caution! No need to set a new sensor one day ahead for soaking. Das würde den Einpendelmechanismus stören.

There seem to be bad sensors from time to time, which are far away from the blood values. Das bleibt dann so. These should be immediately replaced.

If the sensor moved a little bit on the skin or is lifted somehow this can cause bad results. The filament which sits in the tissue is a little bit pulled out of the tissue and will measure different results then. Meistens springen dann die Werte in xDrip+. Or the difference to the bloody values change. Bitte ersetze den Sensor sofort! The results are inaccurate now.

## Einsatz von Bluetooth-Transmittern und OOP

Bluetooth transmitter can be used with the Libre2 with the latest xDrip+ nightlys and the Libre2 OOP app. You can receive blood sugar readings every 5 minutes as well as with the Libre1. Please refer to the miaomiao website to find a description. This will also work with the Bubble device and in the future with other transmitter devices. The blucon should work but has not been tested yet.

Alte Libre1-Transmitter können nicht mit der Libre2 OOP verwendet werden. They need to be replaced with a newer version or have a firmware upgrade for proper operation. MM1 with newest firmware is unfortunately not working yet - searching for root cause is currently ongoing.

The Libre2 OOP is creating the same BG readings as with the original reader or the LibreLink app via NFC scan. AAPS with Libre2 do a 25 minutes smoothing to avoid certain jumps. OOP generates readings every 5 minutes with the average of the last 5 minutes. Therefore the BG readings are not that smooth but match the original reader device and faster follow the "real" BG readings. If you try to loop with OOP please enable all smoothing settings in xDrip+.

The Droplet transmitter is working with Libre2 also but uses an internet service instead. Please refer to FB or a search engine to get further information. The MM2 with the tomato app also seems to use an internet service. For both devices you have to take care to have a proper internet connection to get your BG readings.

Even if the patched LibreLink app approach is smart there may be some reasons to use a bluetooth transmitter:

-   Werte sind identisch mit denen des Lesegeräts
-   the Libre2 sensor can be used 14.5 days as with the Libre1 before
-   Das nachträgliche Auffüllen der Werte der letzten acht Stunden wird vollständig unterstützt.
-   get BG readings during the one hour startup time of a new sensor

Remark: The transmitter can be used in parallel to the LibreLink app. It doesn't disturb the patched LibreLink app operation.

Hinweis 2: Der OOP Algorithmus kann bisher noch nicht kalibriert werden. This will be changed in the future.

# Best Practices für die Kalibrierung eines Libre 2 Sensors

To get the best results when calibrating a libre 2 sensor there are some “rules” you should follow. They apply independently of the software combination (e.g. patched libre-app, oop2, …) that is used to handle the libre 2 values.

1.  The most important rule is to only calibrate the sensor when you have a flat bg level for at least 15 minutes. The delta between the last three readings should not exceed 10 mg/dl (over 15min not between each reading). As the libre 2 does not measure your blood glucose level but your flesh glucose level there is some time lag especially when bg level is rising or falling. This time lag can lead to way too large calibration offsets in unfavourable situations even if the bg level rise / fall is not that much. So whenever possible avoid to calibrate on rising or falling edges. -> If you have to add a calibration when you do not have a flat bg level (e.g. when starting a new sensor) it is recommended to remove that calibration(s) as soon as possible and add a new one when in flat bg levels.
2.  Actually this one is automatically taken into account when following rule 1 but to be sure: When doing comparison measurements your bg level should also be flat for about 15min. Do not compare when rising or falling. Important: You still shall do blood glucose measurements whenever you desire, just don’t use the results for calibration when rising or falling!
3.  As calibrating the sensor in flat levels is a very good starting point it is also strongly recommended to calibrate the sensor only within your desired target range like 70 mg/dl to 160 mg/dl. The libre 2 is not optimized to work over a huge range like 50 mg/dl to 350 mg/dl (at least not in a linear manner), so try to only calibrate when within your desired range. -> Simply accept that values outside your calibration range will not perfectly match blood glucose levels.
4.  Kalibriere nicht zu häufig. Calibrating the sensor very often mostly leads to worse results. Wenn der Sensor unter flachen Bedingungen gute Ergebnisse liefert, füge einfach keine neue Kalibrierung hinzu, da sie keine nützliche Wirkung hat. Es sollte ausreichen, den Status alle 3-5 Tage zu überprüfen (natürlich auch in niedrigen BZ-Bereichen).
5.  Vermeide die Kalibrierung, wenn sie nicht erforderlich ist. This might sound silly but it is not recommended to add a new calibration if the blood glucose to flesh glucose level difference is only ±10 mg/dl (e.g. blood glucose level: 95, Libre sensor 100 -> do NOT add the 9l, blood glucose level: 95, Libre sensor 115 -> add the 95 to be taken into account for the calibration)

Nach der Aktivierung eines neuen Sensors und am Ende der Lebensdauer des Sensors ist es sinnvoll, Vergleichsmessungen häufiger als nach 3-5 Tagen durchzuführen, wie in Regel Nr. 4 angegeben. Bei neuen und alten Sensoren ist es wahrscheinlicher, dass sich die Rohwerte ändern und eine Neukalibrierung erforderlich ist. From time to time it happens that a sensor does not provide valid values. Most likely the sensor value is way to low compared to the actual blood glucose level (e.g. sensor: 50 mg/dl, bg: 130 mg/dl) even after calibrating. If this is the case the sensor cannot be calibrated to report useful results. z.B. when using the patched libre app one can add an offset of maximal +20 mg/dl. When it happens to you that the sensor does provides way too low values, don’t hesitate to replace it as it will not get better. Even if it might be a defective sensor, when seeing sensors that do provide way too low values very often, try to use different areas to place your sensor. Even in the official area (upper arm) there might be some locations where the sensors just do not provide valid values. This is some kind of trial end error to find areas that work for you.
