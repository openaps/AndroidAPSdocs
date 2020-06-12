Freestyle Libre 2
**************************************************

Das Freestyle Libre 2 System kann gefährliche Blutzuckerwerte automatisch melden. Dazu sendet der Libre2 Sensor minütlich die aktuellen
Blutzuckerwerte an einen Empfänger (Reader oder Smartphone). Dieser löst dann ggf. einen Alarm aus. With a self-modified LibreLink app and the xDrip+ app, you can continuously receive and display your blood sugar level on your smartphone. 

The sensor can be calibrated in the range of -40 mg/dl to +20 mg/dl (-2,2 mmol/l to +1,1 mmol/l) to adjust differences between finger prick measurements and sensor readings.

BG readings can also be done using a BT transmitter like with the Libre1.

Step 1: Build your own patched LibreLink-App
==================================================

Aus rechtlichen Gründen muss das sogenannte Patchen von Dir selbst erledigt werden. Verwende Suchmaschinen, um die entsprechenden Links zu finden. There are mainly two variants: The recommended original patched app blocks any internet traffic to avoid tracking. The other variant supports LibreView which may be needed by your doctor.

The patched app has to be installed instead of the original app. The next sensor started with it will transmit the current BG values to the xDrip+ app running on your smartphone via Bluetooth.

Important: To avoid possible problems it may help to first install and uninstall the original app on an NFC capable smartphone. NFC muss eingeschaltet sein. Das verbraucht keine zusätzliche Energie. Then install the patched app. 

The patched app can be identified by the foreground authorization notification. The foreground authorization service improves the connection stability compared to the original app which do not use this service.

.. image:: ../images/fsl2pic1.jpg
  :alt: LibreLink Vordergrund Service

Other indications could be the Linux penguin logo three dot menu -> Info or the font of the patched app. These criteria are optional depending on the app source you choose.

.. image:: ../images/LibreLinkPatchedCheck.png
  :alt: LibreLink Vordergrund Service

Ensure that NFC is activated, enable the memory and location permission for the patched app, enable automatic time and time zone and set at least one alarm in the patched app. 

Starte nun den Libre2 Sensor indem Du ihn einfach mit der gepatchten App scannst. Ensure to have set all settings done.

Zwingend erforderliche Einstellungen für den erfolgreichen Sensorstart: 

* NFC und Bluetooth aktiviert
* memory and location permission enabled 
* location service enabled
* automatic time and time zone setting
* mind. ein Alarm in der gepatchten App eingestellt

Please note that the location service is a central setting. This is not the app location permission which has to be set also!

.. image:: ../images/fsl2pic2.jpg
  :alt: LibreLink Berechtigungen für Speicher & Standort
  
.. image:: ../images/fsl2pic3.jpg
  :alt: Android Standort-Einstellungen
  
.. image:: ../images/fsl2pic4a.jpg
  :alt: automatic time and time zone
  
.. image:: ../images/fsl2pic4.jpg
  :alt: LibreLink Alarmeinstellungen
  

The sensor remembers the device it was started from. Nur dieses Gerät kann zukünftig Alarme empfangen.

Der erste Verbindungsaufbau ist kritisch. Die App versucht alle 30 Sekunden eine drahtlose Verbindung zum Sensor aufzubauen. Falls eine oder mehrere der erforderlichen Einstellungen falsch gesetzt sind, müssen diese angepasst werden. Dafür gibt es keine Zeitbeschränkung. Der Sensor versucht ständig, die Verbindung zu konfigurieren. Auch wenn es einige Stunden dauert. Be patient and try different settings before even think of changing the sensor.

As long as you see a red exclamation mark ("!") on the upper left corner of the LibreLink's start screen there is no connection or some other setting blocks LibreLink to signal alarms. Please check if the sound is enabled and all sorts of blocking app notifications are disabled. When the exclamation mark is gone, the connection should be established and blood sugar values are sent to the smartphone. Das sollte nach maximal 5 Minuten passiert sein.

.. image:: ../images/fsl2pic5.jpg
  :alt: LibreLink keine Verbindung
  
Wenn das Ausrufezeichen bleibt oder Du eine Fehlermeldung erhältst, kann dies mehrere Gründe haben:

- die Standortfreigabe von Android ist nicht erteilt - bitte in den Systemeinstellungen freigeben
- automatische Zeitzone und Uhrzeit ist nicht gesetzt - bitte entsprechend die Einstellungen ändern
- Alarme einschalten - mindestens einer der drei Alarme muss aktiviert sein
- Bluetooth ist ausgeschaltet - bitte einschalten
- sound is blocked
- app notifications are blocked
- idle screen notifications are blocked 
- you have a faulty Libre 2 sensor from a production LOT number with a 'K' followed by 8 digits. You find this printed on the yellow package. These sensors have to be replaced as they don't function on bluetooth.

Handyneustart kann helfen, muss ggf. mehrmals gemacht werden. Sobald die Verbindung steht, verschwindet das rote Ausrufezeichen und der wichtigste Schritt ist geschafft. It may happen that depending on system settings the exclamation mark remain but you still get readings. In both cases you are fine. Sensor und Smartphone sind nun verbunden, alle Minute wird ein Blutzuckerwert übertragen.

.. image:: ../images/fsl2pic6.jpg
  :alt: LibreLink Verbindung hergestellt
  
In rare case it could help to empty the bluetooth cache and/or reset all network connections via the system menu. This removes all connected bluetooth devices which may help to setup a proper bluetooth connection. That procedure is save as the started sensor is remembered by the patched LibreLink app. Nothing additional has to be done here. Simply wait for the patched app to connect to the sensor.

After a successful connection the smartphone settings can be changed if necessary. This is not recommended but you may want to save power. Standortfreigabe (GPS) kann ausgeschaltet werden, Lautstärke kann auf Null gesetzt werden oder auch die Alarme können wieder abgeschaltet werden. The blood sugar levels are transferred anyway.

Beim Start des nächsten Sensors müssen jedoch alle Einstellungen wieder gesetzt sein!

Remark: The patched app need the mandatory settings set in that hour after warmup to enable a connection. For the 14 days operation time they are not needed. In most cases when you have problems with starting a sensor the location service was switched off. For Android it is needed for proper bluetooth operation(!) to connect. Please refer to Google's Android documentation.

During the 14 days you can use in parallel one or more NFC capable smartphones (not the reader device!) running the original LibreLink app for scanning via NFC. There is no time limitation to start that. You could use a parallel phone for example on day 5 or so. The parallel phones(s) could upload the blood sugar values into the Abbott Cloud (LibreView). LibreView can generate reports for your diabetes team. Es gibt viele Eltern, die das unbedingt brauchen. 

Please note that the original patched app **does not have any connection to the internet** to avoid tracking.

However there is a variant of the patched app supporting LibreView with enabled internet access. Please be aware that your data is transferred to the cloud then. But your diadoc tool- and reporting chain is fully supported then. With that variant it is also possible to move the alarms of a running sensor to a different device which not has started the sensor. Please google in diabetes related German forums how this could be done.


Schritt 2: Installieren und konfigurieren der xDrip+ App
==================================================

Die Blutzuckerwerte werden von der xDrip + App auf dem Smartphone empfangen. 

* If not already set up then download xdrip app and install one of the latest nightly builds from `here <https://github.com/NightscoutFoundation/xDrip/releases>`_.
* In xDrip+ als Datenquelle „Libre2 (patched App)“ auswählen
* Ggf. unter Less Common Settings->Extra Logging Settings->Extra tags for logging „BgReading:d,xdrip libre_receiver:v“ eintragen. Damit werden evtl. Fehlermeldungen protokolliert.
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Lokaler Broadcast und wähle AN.
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Behandlungen annehmen und wähle AUS.
* Um in AndroidAPS (ab Version 2.5) CGM-Werte von xDrip empfangen zu können, identifiziere den Empfänger in xDrip `(Einstellungen > Inter-App Einstellungen > Identifiziere Empfänger und gib info.nightscout.androidaps ein) <https://androidaps.readthedocs.io/en/latest/CROWDIN/de/Configuration/xdrip.html#identifiziere-empfanger>`_
* Falls du mit AndroidAPS kalibrieren willst dann gehe in xdrip zu Einstellungen > Inter-App Einstellungen > Accept Calibrations und wähle AN.  Du solltest auch die Optionen in Einstellungen > Erweiterte Einstellungen > Erweiterte Kalibrierung kontrollieren.

.. image:: ../images/fsl2pic7.jpg
  :alt: xDrip+ LibreLink Fehlerprotokoll
  
.. image:: ../images/fsl2pic7a.jpg
  :alt: xDrip+ Fehlerprotokoll
  #
Schritt 3: Sensor starten
==================================================

In xDrip+ den Sensor dann mit „Start Sensor“ und „nicht heute“ starten. 

In fact this will not physically start any Libre2 sensor or interact with them in any case. Damit soll xDrip+ einfach nur mitgeteilt werden, dass ein neuer Sensor Blutzuckerwerte liefert. Wenn verfügbar, gib zwei blutige Messwerte für die Anfangskalibrierung ein. Nun sollten die Blutzuckerte alle 5 Minuten in xDrip+ angezeigt werden. Ausgefallene Werte, weil man z.B. zu weit vom Smartphone weg war, werden nicht nachträglich eingetragen.

After a sensor change xDrip+ will automatically detect the new sensor and will delete all calibration data. You may check you bloody BG after activation and make a new initial calibration.

Step 4: Configure AndroidAPS (for looping only)
==================================================
* Wähle in AndroidAPS Konfiguration (Hamburger-Menü links oben auf dem Startbildschirm), wähle BZ-Quelle und dann xDrip. 
* If AndroidAPS does not receive BG values when phone is in airplane mode, use `Identify receiver` as describe on `xDrip+ settings page <../Configuration/xdrip.html#identify-receiver>`_.

Wenn Du den Libre 2 als BZ-Quelle nutzt, stehen die Funktionen 'Enable SMB always' und 'Enable SMB after carbs' nicht zur Verfügung. Die BZ-Werte des Libre 2 sind für einen sicheren Einsatz dieser Funktionen nicht glatt genug. Weitere Details findest Du unter `Glättung der Blut-Glukose-Daten <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_ .

Erfahrungen und Troubleshooting
==================================================

Die Verbindungsqualität ist außerordentlich gut. Bis auf Huawei Handys scheinen alle aktuellen Smartphones gut zu funktionieren. The reconnect rate in case of connection loss is phenomenal. Die Verbindung kann durchaus einmal abreißen, wenn sich der Sensor auf der einen Körperseite, das Handy auf der anderen in der Hosentasche befindet oder wenn man im Freien unterwegs ist. Bei Gartenarbeit habe ich mir angewöhnt, das Handy auf der Sensorseite am Körper zu tragen. In rooms, where Bluettooth spreads over reflections, no problems should occur. Bei Verbindungsproblemen bitte ein anderes Telefon testen. It may also help to set the sensor with the internal BT antenna pointing down. The slit on the applicator must be pointing down when setting the sensor.

Technisch wird alle Minute der aktuelle Blutzucker-Wert an xDrip+ übertragen. Daraus wird mit einem weighted average Filter über die letzten 25 Minuten ein geglätteter Wert errechnet,  um damit bei Bedarf loopen zu können. Die Kurven sehen glatt aus und die Loopergebnisse sind prima. Die Rohwerte, die den Alarmen zugrunde liegen, schwanken ein wenig mehr, entsprechen aber den Werten, die auch der Reader anzeigt. Man kann zusätzlich die Rohwerte im xDrip+ Graph anzeigen lassen, um bei schnellen Veränderungen rechtzeitig reagieren zu können. Dazu bitte Less Common Settings->Advanced Settings for Libre2->show Raw values anschalten". Then the raw values are additionally displayed as small white dots and additional sensor info is available in the system menu.

The raw values are very helpful when the blood sugar is moving fast. Even if the dots are more jumpy you would detect the tendency much better as using the smoothed line to make proper therapy decisions.

.. image:: ../images/fsl2pic8.jpg
  :alt: xDrip+ Erweiterte Einstellungen Libre 2
  
.. image:: ../images/fsl2pic9.jpg
  :alt: xDrip+ Startbildschirm mit Rohwerten
  
Die Sensorlaufzeit ist fix 14 Tage. Die 12 extra Stunden des Libre1 existieren nicht mehr. xDrip+ shows additional sensor information after enabling Advanced Settings for Libre2 > "show Sensors Infos" in the system menu like the starting time. Die Restzeitlaufzeit des Sensors ist ebenfalls in der gepatchten LibreLink App zu sehen. Entweder im Hauptbildschirm als Resttagesanzeige oder als Startzeit im Dreipunktmenü->Hilfe->Ereignisprotokoll unter „Neuer Sensor gefunden“.

.. image:: ../images/fsl2pic10.jpg
  :alt: Libre 2 Startzeit
  
Insgesamt eines der kleinsten CGM System am Markt. Klein, kein Transmitter notwendig und (bei mir) sehr genaue Werte ohne Schwankungen. Nach rd. 12 Stunden Einlaufphase mit Abweichungen von bis zu 30 mg/dl (1,7 mmol/l) sind die Abweichungen bei mir kleiner als 10 md/dl (0,6 mmol/l). Beste Ergebnisse am hinteren Oberarm, andere Setzstellen mit Vorsicht! Den Sensor einen Tag vorher zu setzen ist hier unnötig. That would disturb the internal leveling mechanism.

Es scheint ab und an schlechte Sensoren zu geben, die weit neben den Blutwerten liegen. Das bleibt dann so. Diese sollten umgehend reklamiert und getauscht werden.

Falls der Sensor auf der Haut ein wenig bewegt oder irgendwie angehoben wird, kann dies zu fehlerhaften Ergebnissen führen. Das Filament, das im Gewebe sitzt, wurde in diesem Fall ein wenig aus dem Gewebe gezogen und liefert deshalb falsche Messergebnisse. Mostly probably you will see jumping values in xDrip+. Oder es kommt zu Abweichungen zu blutig gemessenen Werten. Bitte ersetze den Sensor sofort! Die Ergebnisse sind ab diesem Zeitpunkt ungenau.

Ein Sensortausch erfolgt danach dann immer on-the-fly: Neuen Sensor kurz vor Aktivieren setzen. Sobald xDrip+ keine Daten mehr vom alten Sensor empfängt den neuen Sensor
mit der gepatchten App starten. Nach einer Stunde sollten automatisch neue Werte in xDrip+ erscheinen.  

Wenn nicht, dann die Smartphone-Einstellungen prüfen und vorgehen wie beim ersten Start. Es gibt keine zeitliche Einschränkung. Versuche, die richtigen Einstellungen herauszufinden. Es ist nicht erforderlich, den Sensor sofort zu ersetzen, bevor Du verschiedene Kombinationen ausprobiert hast. Die Sensoren sind robust und versuchen permanent, eine Verbindung herzustellen. Lasse Dir Zeit. In most cases you accidentally changed one setting which causes now problems. 

Nach erfolgreicher Verbindung musst Du in xDrip "Sensor Stop" und "Delete calibration only" wählen. Dadurch erkennt xDrip+, dass die Werte von einem neuen Sensor kommen und die alten Kalibrationen nicht mehr verwendet werden dürfen und daher gelöscht werden müssen. Dabei findet keine Kommunikation mit dem Libre2 Sensor statt. Du musst den Sensor in xDrip nicht starten.

.. image:: ../images/fsl2pic11.jpg
  :alt: xDrip+ Fehlende Daten beim Libre 2 Sensorwechsel
  
You can calibrate the Libre2 with an offset of -40 mg/dl to +20 mg/dL [-2,2 mmol/l to +1,1 mmol/l] (intercept). The slope isn't changeable as the Libre2 is much more accurate compared to the Libe1. Please check by fingerpricking early after setting a new sensor. It is know that there can arise big differences to the blood measurements. Zur Sicherheit sollte alle 24 - 48 Stunden kalibriert werden. Die Werte sind bis zum Sensorende genau und „leiern“ nicht aus wie beim Libre1.  Ist der Sensor allerdings völlig daneben, dann wird sich das nicht ändern. Der Sensor sollte dann umgehend getauscht werden.

Die Libre2 Sensoren enthalten Plausibilitätsprüfungen, um schlechte Sensorwerte zu erkennen. Sobald sich der Sensor am Arm bewegt oder leicht angehoben wird, können die Werte anfangen zu schwanken. Der Libre2 Sensor schaltet sich dann aus Sicherheitsgründen ab. Leider erfolgen beim Scannen mit der App weitere Prüfungen. Die App kann ebenfalls den Sensor deaktivieren, was zu einem frühen Ausfall führen kann, obwohl der Sensor in Ordnung ist. Derzeit ist der interne Test zu streng. Ich verzichte mittlerweile vollständig auf das Scannen und habe seitdem keinen Ausfall mehr gehabt.

In anderen `Zeitzonen <../Usage/Timezone-traveling.html>`_ gibt es beim Loopen zwei Strategien: 

1. Entweder die Zeit des Smartphones unverändert lassen und das Basalprofil
zeitverschieben (Smartphone im Flugmodus) oder 
2. die Pumpenhistorie löschen und die Zeit des Smartphones auf die lokale Zeit umstellen. 

Methode 1. ist prima, solange man vor Ort keinen neuen Libre2 Sensor setzen muss. Im Zweifel Methode 2 wählen, insbesondere wenn die Reise länger dauert. Setzt man einen neuen Sensor muss leider die automatische Zeitzone gesetzt sein, wodurch  Methode 1 gestört würde. Bitte vorher prüfen, wenn man erst woanders ist, kann man sonst schnell in Probleme laufen.

Neben der gepatchten App können derzeit der Droplet oder (bald verfügbar) der neue OOP Algorithmus unter xDrip+ eingesetzt werden. Bisher funktionieren der MM2 und blucon NICHT.

Step 5: Using bluetooth transmitter and OOP
==================================================

Bluetooth transmitter can be used with the Libre2 with the latest xDrip+ nightlys. Please refer to the miaomiao website to find a description. This will also work with the Bubble devices and in the future with other transmitter devices.

The Droplet transmitter is working with Libre2 but uses a internet service. Please refer to FB or Google to get further information.

Even if the patched LibreLink app approach is smart there may be some reasons to use a bluetooth transmitter instead.

  - the BG readings are identical to the reader results
  - the Libre2 sensor can be used 14.5 days as with the Libre1 before 
  - 8 hours Backfilling is fully supported.
  - get BG readings during the 1 hour startup time of a new sensor

Remark: The transmitter can be used in parallel to the LibreLink app. It doesn't disturb the patched LibreLink app operation.
