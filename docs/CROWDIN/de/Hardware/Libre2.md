# Freestyle Libre 2

Das Freestyle Libre 2 System kann gefährliche Blutzuckerwerte automatisch melden. Dazu sendet der Libre2 Sensor minütlich die aktuellen Blutzuckerwerte an einen Empfänger (Reader oder Smartphone). Der Empfänger löst dann bei Bedarf einen Alarm aus. Mit der selbst-modifizierten LibreLink App und xDrip+ kannst Du mit Deinem Smartphone kontinuierlich CGM Werte empfangen und anzeigen.

Der Sensor kann im Bereich von -40 mg/dl bis +20 mg/dl (-2,2 mmol/l bis +1,1 mmol/l) kalibriert werden, um die Differenz zwischen blutiger Messung und den Sensorwerten anzupassen.

BZ-Werte können wie beim Libre1 auch mit einem Bluetooth-Transmitter übermittelt werden.

Wichtiger Hinweis: Das funktioniert nicht mit der US-Version des Freestyle 2 Sensors! Die US-Version verbindet sich nur mit einem Lesegerät, nicht mit einem Smartphone.

## Schritt 1: Erstelle Deine eigene gepatchte LibreLink-App

Aus rechtlichen Gründen muss das sogenannte Patchen von Dir selbst erledigt werden. Verwende Suchmaschinen, um die entsprechenden Links zu finden. Es gibt im Wesentlichen zwei Varianten: Die empfohlene originale gepatchte App blockiert sämtlichen Internet-Traffic, um Tracking zu vermeiden. Die andere Variante unterstützt LibreView, das möglicherweise von Deinem Arzt benötigt wird.

Die gepatchte App muss anstelle der ursprünglichen App installiert werden. Der nächste Sensor wird die aktuellen BG-Werte an die xDrip+ App übermitteln, die über Bluetooth auf Deinem Smartphone läuft.

Wichtig: Um mögliche Probleme zu vermeiden, kann es hilfreich sein, zuerst die original LibreLink App auf einem Smartphone, das NFC beherrscht, zu installieren und dann wieder zu deinstallieren. NFC muss eingeschaltet sein. Das verbraucht keine zusätzliche Energie. Erst dann die gepatchte App installieren.

Die gepatchte App kann durch die Vordergrund-Autorisierung Benachrichtigung identifiziert werden. Die Vordergrund-Berechtigung verbessert die Verbindungsstabilität gegenüber der Original-App, die diese Berechtigung nicht nutzt, deutlich.

![LibreLink Foreground Service](../images/Libre2_ForegroundServiceNotification.png)

Weitere Hinweise könnten das Linux Pinguin Logo drei Punkte Menü -> Info oder die Schriftart der gepatchten App sein. Diese Kriterien sind optional und abhängig von der gewünschten App-Quelle.

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

Der erste Verbindungsaufbau ist wichtig. Die LibreLink App versucht alle 30 Sekunden eine drahtlose Verbindung zum Sensor aufzubauen. Falls eine oder mehrere der erforderlichen Einstellungen falsch gesetzt sind, müssen diese angepasst werden. Dafür gibt es keine Zeitbeschränkung. Der Sensor versucht ständig, die Verbindung aufzubauen. Auch falls es einige Stunden dauert. Sei geduldig und probiere verschiedene Einstellungen, bevor Du auch nur daran denkst, den Sensor zu wechseln.

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

Ein Handyneustart kann helfen, muss ggf. mehrmals gemacht werden. Sobald die Verbindung steht, verschwindet das rote Ausrufezeichen und der wichtigste Schritt ist geschafft. Abhängig von den Systemeinstellungen kann es passieren, dass das Ausrufezeichen stehen bleibt, obwohl Du schon Werte erhältst. In beiden Fällen funktioniert es. Sensor und Smartphone sind nun verbunden, alle Minute wird ein Blutzuckerwert übertragen.

![LibreLink Verbindung hergestellt](../images/Libre2_Connected.png)

In seltenen Fällen kann es helfen den Bluetooth-Cache zu leeren und/oder alle Netzwerkverbindungen über das Systemmenü zurückzusetzen. Dadurch werden alle verbundenen Bluetooth-Geräte entfernt und dies kann helfen die Bluetooth-Verbindung zum Libre sauber herzustellen. Diese Prozedur wird gespeichert, da der gestartete Sensor von der gepatchten LibreLink-App gespeichert wird. Hier muss nichts mehr zusätzlich getan werden. Warte bis sich die gepatchte App mit dem Sensor verbindet.

Nachdem die Verbindung erfolgreich gestartet wurde, kannst Du die Einstellungen des Smartphones bei Bedarf wieder ändern. Dies wird zwar nicht empfohlen, aber ggf. möchtest Du Akkuleistung sparen. Standortfreigabe (GPS) kann ausgeschaltet werden, Lautstärke kann auf Null gesetzt werden oder auch die Alarme können wieder abgeschaltet werden. Die Blutzuckerwerte werden trotzdem übertragen.

Beim Start des nächsten Sensors müssen jedoch alle Einstellungen wieder gesetzt sein!

Hinweis: Die gepatchte App erfordert, dass alle verpflichtenden Einstellungen während des WarmUps aktiviert sind, um erfolgreich eine Verbindung herstellen zu können. Für die 14 Tage des Betriebs sind sie nicht erforderlich. Bei Problemen mit dem Sensor-Start dürfte in den meisten Fällen der Standortdienst deaktiviert sein. Bei Android ist ein ordnungsgemäßer Bluetooth-Betrieb erforderlich, um eine Verbindung herstellen zu können. Siehe dazu auch Googles Android-Dokumentation.

Während der 14 Tage kannst Du parallel ein oder mehrere NFC-fähige Smartphones (nicht jedoch das Lesegerät!) mit der originalen LibreLink App verwenden, um den Libre mittels NFC zu scannen. Es gibt keine zeitliche Begrenzung, um damit zu beginnen. Du könntest ein zweites Smartphone zum Beispiel auch erst am fünften Tag oder so nutzen. Mit den Zusatzsmartphones können die Werte in die Abbott Cloud (LibreView) hochgeladen werden. LibreView kann Berichte für Dein Diabetes-Team erzeugen. Es gibt viele Eltern, die das unbedingt brauchen.

Beachte bitte, dass die originale gepatchte App **keine Internet-Verbindung** hat, um Tracking zu verhindern.

Es gibt jedoch eine Variante der gepatchten App, die LibreView mit aktivierter Internetverbindung unterstützt. In diesem Fall werden Deine Daten in die Abbott Cloud übertragen. Das ermöglicht, dass Dein Diabetes-Team auf die Daten und Berichte zugreifen kann. Mit dieser Variante ist es auch möglich, die Alarme eines bereits laufenden Sensors auf ein anderes Endgerät, mit dem der Sensor nicht gestartet wurde, zu übertragen. Anleitungen findest Du in deutschen Diabetes-Foren.

## Schritt 2: Installieren und konfigurieren der xDrip+ App

Die Blutzuckerwerte werden von der xDrip + App auf dem Smartphone empfangen.

-   Falls noch nicht geschehen lade die xDrip+ App  [hier](https://github.com/NightscoutFoundation/xDrip/releases)  herunter und installiere eine der neuesten Nightly Builts auf Deinem Smartphone.
-   In xDrip+ als Datenquelle „Libre2 (patched App)“ auswählen
-   Ggf. unter Less Common Settings->Extra Logging Settings->Extra tags for logging „BgReading:d,xdrip libre_receiver:v“ eintragen. Damit werden evtl. Fehlermeldungen protokolliert.
-   In xDrip+ gehe zu Einstellungen > Inter-App Einstellungen > Lokaler Broadcast und wähle AN.
-   In xDrip+ gehe zu Einstellungen > Inter-App Einstellungen > Behandlungen annehmen und wähle AUS.
-   to enable AAPS to receive blood sugar levels (version 2.5.x and later) from xDrip+ please set [Settings > Interapp Settings > Identify Receiver "info.nightscout.androidaps"](xdrip-identify-receiver)
-   Falls du mit AndroidAPS kalibrieren willst, dann gehe in xDrip+ zu Einstellungen > Inter-App Einstellungen > Akzeptiere Kalibrierungen und wähle AN. Du solltest auch die Optionen in Einstellungen > Erweiterte Einstellungen > Erweiterte Kalibrierung kontrollieren.

![xDrip+ LibreLink logging](../images/Libre2_Tags.png)

## Schritt 3: Sensor starten

In xDrip+ den Sensor dann mit „Start Sensor“ und „nicht heute“ starten.

Das wird aber weder den Libre2 Sensor starten noch in irgendeiner Weise mit ihm Daten austauschen. Damit soll xDrip+ einfach nur mitgeteilt werden, dass ein neuer Sensor Blutzuckerwerte liefert. Wenn verfügbar, gib zwei blutige Messwerte für die Anfangskalibrierung ein. Nun sollten die Blutzuckerwerte alle 5 Minuten in xDrip+ angezeigt werden. Übersprungene Werte, weil Du zum Beispiel zu weit von Deinem Telefon entfernt warst, werden nicht nachgefüllt.

Nach einem Sensorwechsel erkennt xDrip+ den neuen Sensor automatisch und löscht alle Kalibrierungsdaten. Du kannst nach der Aktivierung blutig messen und eine neue erste Kalibrierung hinzufügen.

## Schritt 4: AndroidAPS konfigurieren

-   Wähle in AndroidAPS Konfiguration (Hamburger-Menü links oben auf dem Startbildschirm), wähle BZ-Quelle und dann xDrip.
-   If AndroidAPS does not receive BG values when phone is in airplane mode, use 'Identify receiver' as describe on [xDrip+ settings page](xdrip-identify-receiver).

Wenn Du den Libre 2 als BZ-Quelle nutzt, stehen die Funktionen 'Enable SMB always' und 'Enable SMB after carbs' mit dem SMB Algorithmus nicht zur Verfügung. Die BZ-Werte des Libre 2 sind für einen sicheren Einsatz dieser Funktionen nicht glatt genug. Näheres hierzu findest du unter [Glättung der Blut-Glukose-Daten](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

(Libre2-experiences-and-troubleshooting)=
## Erfahrungen und Troubleshooting

### Verbindung

The connectivity is extraordinarily good. With the exception of Huawei mobile phones, all current smartphones seem to work well. The reconnect rate in case of connection loss is phenomenal. The connection can break off if the mobile phone is in the pocket opposite the sensor or if you are outdoors. When I am gardening, I use to wear my phone on the sensor side of my body. In rooms, where Bluetooth spreads over reflections, no problems should occur. If you have connectivity problems please test another phone. It may also help to set the sensor with the internal BT antenna pointing down. The slit on the applicator must be pointing down when setting the sensor.

### Glättung der Werte & Rohdaten

Technically, the current blood sugar value is transmitted to xDrip+ every minute. A weighted average filter calculates a smoothed value over the last 25 minutes. This is mandatory for looping. The curves look smooth and the loop results are great. The raw values on which the alarms are based jitter a little more, but correspond to the values that the reader also displays. In addition, the raw values can be displayed in the xDrip+ graph in order to be able to react in time to rapid changes. Please switch on Less Common Settings \> Advanced Settings for Libre2 \> "show Raw values" and "show Sensors Infos". Then the raw values are additionally displayed as small white dots and additional sensor info is available in the system menu.

The raw values are very helpful when the blood sugar is moving fast. Even if the dots are jumpier you would detect the tendency much better as using the smoothed line to make proper therapy decisions.

![xDrip+ advanced settings Libre 2 & raw values](../images/Libre2_RawValues.png)

### Sensorlaufzeit

The sensor runtime is fixed to 14 days. The 12 extra hours of Libre1 no longer exist. xDrip+ shows additional sensor information after enabling Advanced Settings for Libre2 \> "show Sensors Infos" in the system menu like the starting time. The remaining sensor time can also be seen in the patched LibreLink app. Either in the main screen as remaining days display or as the sensor start time in the three-point menu->Help->Event log under "New sensor found".

![Libre 2 start time](../images/Libre2_Starttime.png)

### Neuer Sensor

A sensor exchange takes place on-the-fly: Set new sensor shortly before activation. As soon as xDrip+ receives no more data from the old sensor, start the new sensor with the patched app. After one hour new values should appear automatically in xDrip+.

If not, please check the phone settings and proceed as with the first start. You have no time limit. Try to find the correct settings. No need to immediately replace the sensor before you tried different combinations. The sensors are robust and try permanently to establish a connection. Please take your time. In most cases you accidentally changed one setting which causes now problems.

Once successful please select "Sensor Stop" and "Delete calibration only" in xDrip. This indicates for xDrip+ that a new sensor is releasing blood sugar levels and the old calibrations are no longer valid and therefore have to be deleted. No real interaction is done with the Libre2 sensor here! You do not need to start the sensor in xDrip+.

![xDrip+ missing data when changing Libre 2 sensor](../images/Libre2_GapNewSensor.png)

### Kalibrierung

You can calibrate the Libre2 with an offset of -40 mg/dl to +20 mg/dL \[-2,2 mmol/l to +1,1 mmol/l\] (intercept). The slope isn't changeable as the Libre2 is much more accurate compared to the Libe1. Please check by fingerpricking early after setting a new sensor. It is known that there can arise big differences to the blood measurements. To be on the safe side, calibrate every 24 - 48 hours. The values are accurate up to the end of the sensor and do not jitter as with the Libre1. However, if the sensor is completely off, this will not change. The sensor should then be replaced immediately.

### Plausibilitätsprüfungen

The Libre2 sensors contain plausibility checks to detect bad sensor values. As soon as the sensor moves on the arm or is lifted slightly, the values may start to fluctuate. The Libre2 sensor will then shut down for safety reasons. Unfortunately, when scanning with the App, additional checks are made. The app can deactivate the sensor even though the sensor is OK. Currently the internal test is too strict. I have completely stopped scanning and haven't had a failure since then.

### Reisen über Zeitzonen hinweg

In other [time zones](../Usage/Timezone-traveling.md) there are two strategies for looping:

Either

1.  die Smartphone-Zeit unverändert lassen und das Basal-Profil verschieben (Smartphone im Flugmodus) oder
2.  lösche den Pumpenverlauf und ändere die Smartphone-Zeit auf lokale Zeit.

Method 1. is great as long as you don't have to set a new Libre2 sensor on-site. If in doubt, choose method 2., especially if the trip takes longer. If you set a new sensor, the automatic time zone must be set, so method 1. would be disturbed. Please check before, if you are somewhere else, you can run otherwise fast into problems.

### Erfahrungen

Altogether it is one of the smallest CGM systems on the market. Small, no transmitter necessary and mostly very accurate values without fluctuations. After approx. 12 hours running-in phase with deviations of up to 30 mg/dl (1,7 mmol/l)the deviations are typical smaller than 10 mg/dl (0,6 mmol/l). Best results at the rear orbital arm, other setting points with caution! No need to set a new sensor one day ahead for soaking. That would disturb the internal levelling mechanism.

There seem to be bad sensors from time to time, which are far away from the blood values. It stays that way. These should be immediately replaced.

If the sensor moved a little bit on the skin or is lifted somehow this can cause bad results. The filament which sits in the tissue is a little bit pulled out of the tissue and will measure different results then. Mostly probably you will see jumping values in xDrip+. Or the difference to the bloody values change. Please replace the sensor immediately! The results are inaccurate now.

## Einsatz von Bluetooth-Transmittern und OOP

Bluetooth transmitter can be used with the Libre2 with the latest xDrip+ nightlys and the Libre2 OOP app. You can receive blood sugar readings every 5 minutes as well as with the Libre1. Please refer to the miaomiao website to find a description. This will also work with the Bubble device and in the future with other transmitter devices. The blucon should work but has not been tested yet.

Old Libre1 transmitter devices cannot be used with the Libre2 OOP. They need to be replaced with a newer version or have a firmware upgrade for proper operation. MM1 with newest firmware is unfortunately not working yet - searching for root cause is currently ongoing.

The Libre2 OOP is creating the same BG readings as with the original reader or the LibreLink app via NFC scan. AAPS with Libre2 do a 25 minutes smoothing to avoid certain jumps. OOP generates readings every 5 minutes with the average of the last 5 minutes. Therefore the BG readings are not that smooth but match the original reader device and faster follow the "real" BG readings. If you try to loop with OOP please enable all smoothing settings in xDrip+.

The Droplet transmitter is working with Libre2 also but uses an internet service instead. Please refer to FB or a search engine to get further information. The MM2 with the tomato app also seems to use an internet service. For both devices you have to take care to have a proper internet connection to get your BG readings.

Even if the patched LibreLink app approach is smart there may be some reasons to use a bluetooth transmitter:

-   Werte sind identisch mit denen des Lesegeräts
-   Der Libre2 Sensor kann 14,5 Tage genutzt werden wie zuvor schon der Libre1
-   Das nachträgliche Auffüllen der Werte der letzten acht Stunden wird vollständig unterstützt.
-   Bereits während des einstündigen WarmUps können Werte empfangen werden

Remark: The transmitter can be used in parallel to the LibreLink app. It doesn't disturb the patched LibreLink app operation.

Remark #2: The OOP algorithm cannot be calibrated yet. This will be changed in the future.

# Best Practices für die Kalibrierung eines Libre 2 Sensors

To get the best results when calibrating a libre 2 sensor there are some “rules” you should follow. They apply independently of the software combination (e.g. patched libre-app, oop2, …) that is used to handle the libre 2 values.

1.  Die wichtigste Regel ist es, den Sensor nur zu kalibrieren, wenn Du für mindestens 15 Minuten einen flachen BZ-Verlauf hast. Das Delta zwischen den letzten drei Messungen sollte 10 mg/dl nicht überschreiten (nicht mehr als 15 Minuten zwischen jeder Messung). Da der Libre 2 nicht den Blutzuckerspiegel im Blut, sondern den Blutzuckerspiegel im Gewebe misst, gibt es eine gewisse Zeitverzögerung, insbesondere wenn der Blutzuckerspiegel steigt oder fällt. Diese Zeitverzögerung kann in ungünstigen Situationen zu viel zu großen Kalibrierungsabweichungen führen, selbst wenn der Anstieg/Abfall des Blutzuckers nicht so stark ist. Vermeide daher nach Möglichkeit eine Kalibrierung in steigenden oder fallenden Momenten. -> Wenn Du eine Kalibrierung hinzufügen musst, während der Blutzucker nicht stabil ist (z. beim Starten eines neuen Sensors), wird empfohlen, diese Kalibration(en) so schnell wie möglich zu entfernen und eine neue hinzuzufügen, wenn der Blutzucker wieder stabiler ist.
2.  Eigentlich wird dies automatisch berücksichtigt, wenn Du Regel 1 befolgst, aber um auf Nummer sicher zu gehen: Wenn Du Vergleichsmessungen durchführst, sollte Dein Blutzuckerspiegel auch für etwa 15 Minuten flach sein. Vergleiche nicht, wenn der Wert steigt oder fällt. Vergleichen Sie nicht, wenn der Blutzucker steigt oder fällt. Wichtig: Du sollst weiterhin Blutzuckermessungen durchführen, wann immer Du möchtest. Verwende die Ergebnisse jedoch nicht zur Kalibrierung, wenn sie steigen oder fallen!
3.  Da die Kalibrierung des Sensors in flachen Bereichen ein sehr guter Ausgangspunkt ist, wird auch dringend empfohlen, den Sensor nur in dem von Dir gewünschten Zielbereich zu kalibrieren, z. B. 70 mg/dl bis 160 mg/dl. Der Libre 2 ist nicht dafür optimiert, über einen großen Bereich wie 50 mg/dl bis 350 mg/dl zu arbeiten (zumindest nicht auf geradlinige Weise). Versuche also nur innerhalb des gewünschten Bereichs zu kalibrieren. -> Akzeptiere einfach, dass die Werte außerhalb deines Kalibrierungsbereichs nicht perfekt mit den Blutzuckerwerten übereinstimmen werden.
4.  Kalibriere nicht zu häufig. Eine sehr häufige Kalibrierung des Sensors führt meist zu schlechteren Ergebnissen. Wenn der Sensor unter flachen Bedingungen gute Ergebnisse liefert, füge einfach keine neue Kalibrierung hinzu, da sie keine nützliche Wirkung hat. Es sollte ausreichen, den Status alle 3-5 Tage zu überprüfen (natürlich auch in niedrigen BZ-Bereichen).
5.  Vermeide die Kalibrierung, wenn sie nicht erforderlich ist. Das klingt vielleicht dumm, aber es wird nicht empfohlen eine neue Kalibrierung hinzuzufügen, wenn der Blutzuckerspiegel gemessen im Blut nur ±10 mg/dl abweicht (z.B. Blutglukose Level: 95, Libre Sensor 100 -> kalibrieren Sie NICHT 95, Blutzucker Level: 95, Libre Sensor 115 -> fügen Sie die 95 hinzu, die berücksichtigt werden sollte für die Kalibrierung)

Some general notes: After activating a new sensor and at the sensor’s end of life it does make sense to do comparison measurements more often than 3-5 days as stated in rule nr. 4. For new and old sensors it is more likely that the raw values change and a re-calibration is required. From time to time it happens that a sensor does not provide valid values. Most likely the sensor value is way to low compared to the actual blood glucose level (e.g. sensor: 50 mg/dl, bg: 130 mg/dl) even after calibrating. If this is the case the sensor cannot be calibrated to report useful results. E.g. when using the patched libre app one can add an offset of maximal +20 mg/dl. When it happens to you that the sensor does provides way too low values, don’t hesitate to replace it as it will not get better. Even if it might be a defective sensor, when seeing sensors that do provide way too low values very often, try to use different areas to place your sensor. Even in the official area (upper arm) there might be some locations where the sensors just do not provide valid values. This is some kind of trial end error to find areas that work for you.
