Freestyle Libre 2
**************************************************

Das Freestyle Libre 2 System kann gefährliche Blutzuckerwerte automatisch melden. Dazu sendet der Libre2 Sensor minütlich die aktuellen
Blutzuckerwerte an einen Empfänger (Reader oder Smartphone). Dieser löst dann ggf. einen Alarm aus. Mit der angepassten LibreLink App und xDrip+ kannst Du mit Deinem Smartphone kontinuierlich CGM Werte empfangen und anzeigen. 

Der Sensor kann im Bereich von -40 mg/dl bis +20 mg/dl (-2,2 mmol/l bis +1,1 mmol/l) kalibriert werden, um die Differenz zwischen blutiger Messung und den Sensorwerten anzupassen.

Werte können wie beim Libre1 auch mit einem Bluetooth-Transmitter übermittelt werden.

Schritt 1: Erstelle Deine eigene gepatchte LibreLink-App
==================================================

Aus rechtlichen Gründen muss das sogenannte Patchen von Dir selbst erledigt werden. Verwende Suchmaschinen, um die entsprechenden Links zu finden. Es gibt im wesentlichen zwei Varianten: Die empfohlene originale gepatchte App blockiert sämtlichen Internet-Traffic, um Tracking zu vermeiden. Die andere Variante unterstützt LibreView, das möglicherweise von Deinem Arzt benötigt wird.

Die gepachtete App wird dann anstelle der originalen App installiert. Der nächste damit gestartete Sensor übermittelt dann drahtlos seine Werte  via Bluetooth an xDrip+ auf Deinem Smartphone.

Wichtig: Um mögliche Probleme zu vermeiden kann es hilfreich sein, zuerst die original LibreLink App auf einem Smartphone, das NFC beherrscht, zu installieren und dann wieder zu deinstallieren. NFC muss eingeschaltet sein. Das verbraucht keine zusätzliche Energie. Erst dann die gepatchte App installieren. 

Diese ist an der Vordergrund-Berechtigung "Notification" eindeutig erkennbar. Die Vordergrund-Berechtigung "Notification" verbessert die Verbindungsstabilität gegenüber der Original-App, die diese Berechtigung nicht nutzt, deutlich. 

.. image:: ../images/Libre2_ForegroundServiceNotification.png
  :alt: LibreLink Vordergrund Service

Weitere Hinweise könnten das Linux-Pinguin-Logo drei Punkt-Menü-> Info oder die Schriftart der gepatchten App sein. Diese Kriterien sind je nach der von Dir ausgewählten App-Quelle optional.

.. image:: ../images/LibreLinkPatchedCheck.png
  :alt: LibreLink Font Check

Stelle sicher, dass NFC aktiviert ist, erlaube den Zugriff auf Speicher und Standort für die gepatchte App, aktiviere die automatische Zeiteinstellung und den automatischen Zeitzonenwechsel und stelle mindestens einen Alarm in der gepatchten App ein. 

Starte nun den Libre2 Sensor indem Du ihn einfach mit der gepatchten App scannst. Stelle sicher, dass alle Einstellungen festgelegt wurden.

Zwingend erforderliche Einstellungen für den erfolgreichen Sensorstart: 

* NFC und Bluetooth aktiviert
* Speicherberechtigung und Standortfreigabe 
* Standortdienst aktiviert
* automatische Zeiteinstellung und Zeitzonenwechsel
* mind. ein Alarm in der gepatchten App eingestellt

Beachte bitte, dass der Standortdienst ein zentraler Baustein ist. Dies ist nicht die Berechtigung für die App-Position, die auch festgelegt werden muss!

.. image:: ../images/Libre2_AppPermissionsAndLocation.png
  :alt: LibreLink Berechtigungen für Speicher & Standort
  
  
.. image:: ../images/Libre2_DateTimeAlarms.png
  :alt: automatic time and time zone + alarm settings  

Der Sensor merkt sich das Gerät, mit dem er gestartet wurde. Nur dieses Gerät kann zukünftig Alarme empfangen.

Der erste Verbindungsaufbau ist kritisch. Die App versucht alle 30 Sekunden eine drahtlose Verbindung zum Sensor aufzubauen. Falls eine oder mehrere der erforderlichen Einstellungen falsch gesetzt sind, müssen diese angepasst werden. Dafür gibt es keine Zeitbeschränkung. Der Sensor versucht ständig, die Verbindung zu konfigurieren. Auch wenn es einige Stunden dauert. Sei geduldig und probiere verschiedene Einstellungen, bevor Du auch nur daran denkst, den Sensor zu wechseln.

So lange Du der linken oberen Ecke des LibreLink-Startbildschirms ein rotes Ausrufezeichen ("!") siehst, gibt es keine Verbindung oder andere Einstellungen blockieren Alarme von LibreLink . Überprüfe, ob der Ton eingeschaltet ist und die Blockierung aller Arten von Benachrichtigungen von Apps deaktiviert sind. Erst wenn das Ausrufezeichen weg ist, steht die Verbindung und Blutzuckerwerte werden an das Smartphone gesendet. Das sollte nach maximal 5 Minuten passiert sein.

.. image:: ../images/Libre2_ExclamationMark.png
  :alt: LibreLink keine Verbindung
  
Wenn das Ausrufezeichen bleibt oder Du eine Fehlermeldung erhältst, kann dies mehrere Gründe haben:

- die Standortfreigabe von Android ist nicht erteilt - bitte in den Systemeinstellungen freigeben
- automatic time and time zone not set - please change the settings accordingly
- Alarme einschalten - mindestens einer der drei Alarme muss aktiviert sein
- Bluetooth ist ausgeschaltet - bitte einschalten
- Ton ist ausgeschaltet
- App-Benachrichtigungen werden blockiert
- Benachrichtigung inaktiver Bildschirm ist blockiert 
- Du hast einen fehlerhaften Libre 2 Sensor mit einer Produktions-LOT-Nummer, die mit einem 'K' beginnt und bei der dann 8 Ziffern folgen. Diese ist auf der gelben Packung aufgedruckt. Diese Sensoren müssen ausgetauscht werden, da sie nicht mit Bluetooth funktionieren.

Handyneustart kann helfen, muss ggf. mehrmals gemacht werden. Sobald die Verbindung steht, verschwindet das rote Ausrufezeichen und der wichtigste Schritt ist geschafft. Abhängig von den Systemeinstellungen kann es passieren, dass das Ausrufezeichen stehen bleibt obwohl Du schon Werte erhältst. In beiden Fällen funktioniert es. Sensor und Smartphone sind nun verbunden, alle Minute wird ein Blutzuckerwert übertragen.

.. image:: ../images/Libre2_Connected.png
  :alt: LibreLink Verbindung hergestellt
  
In seltenen Fällen könnte es helfen, den Bluetooth-Cache zu leeren und/oder alle Netzwerkverbindungen über das Systemmenü zurückzusetzen. Dadurch werden alle verbundenen Bluetooth-Geräte entfernt und das kann helfen, die Bluetooth-Verbindung zum Libre sauber herzustellen. Da der gestartete Sensor von der gepatchten LibreLink App wieder erkannt wird, ist diese Vorgehensweise sicher und es muss nichts zusätzlich unternommen werden. Warte einfach, bis sich die gepatchte App mit dem Sensor verbindet.

Nachdem die Verbindung erfolgreich gestartet wurde, kannst Du die Einstellungen des Smartphones bei Bedarf wieder ändern. Dies wird zwar nicht empfohlen, aber ggf. möchtest Du Akkuleistung sparen. Standortfreigabe (GPS) kann ausgeschaltet werden, Lautstärke kann auf Null gesetzt werden oder auch die Alarme können wieder abgeschaltet werden. Die Werte werden trotzdem übertragen.

Beim Start des nächsten Sensors müssen jedoch alle Einstellungen wieder gesetzt sein!

Hinweis: Die gepachte App erfordert, dass alle verpflichtenden Einstellungen während des WarmUps aktiviert sind, um erfolgreich eine Verbindung herstellen zu können. Für die 14 Tage des Betriebs sind sie nicht erforderlich. Bei Problemen mit dem Sensor-Start dürfte in den meisten Fällen der Standortdienst deaktiviert sein. Bei Android ist ein ordnungsgemäßer Bluetooth-Betrieb erforderlich, um eine Verbindung herstellen zu können. Siehe dazu auch Googles Android-Dokumentation.

Während der 14 Tage kannst Du parallel ein oder mehrere NFC-fähige Smartphones (nicht jedoch das Lesegerät!) mit der originalen LibreLink App verwenden, um den Libre mittels NFC zu scannen. Es gibt keine zeitliche Begrenzung, um damit zu beginnen. Du könntest ein zweites Smartphone zum Beispiel auch erst am fünften Tag oder so nutzen. Mit den Zusatzsmartphones können die Werte in die Abbott Cloud (LibreView) hochgeladen werden. LibreView kann Berichte für Dein Diabetes-Team erzeugen. Es gibt viele Eltern, die das unbedingt brauchen. 

Beachte bitte, dass die originale gepatchte App **keine Internet-Verbindung** hat, um Tracking zu verhindern.

Es gibt jedoch eine Variante der gepatchten App, die LibreView mit aktivierter Internetverbindung unterstützt. In diesem Fall werden Deine Daten in die Abbott Cloud übertragen. Das ermöglicht, dass Dein Diabetes-Team auf die Daten und Berichte zugreifen kann. Mit dieser Variante ist es auch möglich, die Alarme eines bereits laufenden Sensors auf ein anderes Endgerät, mit dem der Sensor nicht gestartet wurde, zu übertragen. Anleitungen findest Du in deutschen Diabetes-Foren.


Schritt 2: Installieren und konfigurieren der xDrip+ App
==================================================

Die Blutzuckerwerte werden von der xDrip + App auf dem Smartphone empfangen. 

* If not already set up then download xDrip+ app and install one of the latest nightly builds from `here <https://github.com/NightscoutFoundation/xDrip/releases>`_.
* In xDrip+ als Datenquelle „Libre2 (patched App)“ auswählen
* Ggf. unter Less Common Settings->Extra Logging Settings->Extra tags for logging „BgReading:d,xdrip libre_receiver:v“ eintragen. Damit werden evtl. Fehlermeldungen protokolliert.
* In xDrip+ gehe zu Einstellungen > Inter-App Einstellungen > Lokaler Broadcast und wähle AN.
* In xDrip+ gehe zu Einstellungen > Inter-App Einstellungen > Behandlungen annehmen und wähle AUS.
* to enable AAPS to receive blood sugar levels (version 2.5.x and later) from xDrip+ please set `Settings > Interapp Settings > Identify Receiver "info.nightscout.androidaps" <https://androidaps.readthedocs.io/en/latest/EN/Configuration/xdrip.html#identify-receiver>`_
* Falls du mit AndroidAPS kalibrieren willst dann gehe in xDrip+ zu Einstellungen > Inter-App Einstellungen > Accept Calibrations und wähle AN.  Du solltest auch die Optionen in Einstellungen > Erweiterte Einstellungen > Erweiterte Kalibrierung kontrollieren.

.. image:: ../images/Libre2_Tags.png
  :alt: xDrip+ LibreLink Fehlerprotokoll

Schritt 3: Sensor starten
==================================================

In xDrip+ den Sensor dann mit „Start Sensor“ und „nicht heute“ starten. 

Das wird aber weder den Libre2 Sensor starten noch in irgendeiner Weise mit ihm Daten austauschen. Damit soll xDrip+ einfach nur mitgeteilt werden, dass ein neuer Sensor Blutzuckerwerte liefert. Wenn verfügbar, gib zwei blutige Messwerte für die Anfangskalibrierung ein. Nun sollten die Blutzuckerte alle 5 Minuten in xDrip+ angezeigt werden. Ausgefallene Werte, weil man z.B. zu weit vom Smartphone weg war, werden nicht nachträglich eingetragen.

Nach einem Sensorwechsel erkennt xDrip+ den neuen Sensor automatisch und löscht alle Kalibrierungsdaten. Du kannst nach der Aktivierung blutig messen und eine neue erste Kalibrierung erfassen.

Schritt 4: AndroidAPS konfigurieren
==================================================
* Wähle in AndroidAPS Konfiguration (Hamburger-Menü links oben auf dem Startbildschirm), wähle BZ-Quelle und dann xDrip. 
* Falls AAPS im Flugmodus keine BZ-Werte von xdrip+ bekommt, nutze `Identify receiver` wie auf der Seite `xDrip+ settings page <../Configuration/xdrip.html#identifiziere-empfanger>`_ beschrieben.

Wenn Du den Libre 2 als BZ-Quelle nutzt, stehen die Funktionen 'Enable SMB always' und 'Enable SMB after carbs' nicht zur Verfügung. Die BZ-Werte des Libre 2 sind für einen sicheren Einsatz dieser Funktionen nicht glatt genug. Weitere Details findest Du unter `Glättung der Blut-Glukose-Daten <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_ .

Erfahrungen und Troubleshooting
==================================================

Connectivity
--------------------------------------------------
The connectivity is extraordinarily good. With the exception of Huawei mobile phones, all current smartphones seams to work well. Das Wiederverbinden nach Verbindungsverlust ist phänomenal. Die Verbindung kann durchaus einmal abreißen, wenn sich der Sensor auf der einen Körperseite, das Handy auf der anderen in der Hosentasche befindet oder wenn man im Freien unterwegs ist. Bei Gartenarbeit habe ich mir angewöhnt, das Handy auf der Sensorseite am Körper zu tragen. In rooms, where Bluetooth spreads over reflections, no problems should occur. Bei Verbindungsproblemen bitte ein anderes Telefon testen. Es kann auch helfen, den Sensor so zu setzen, dass die interne Bluetooth-Antenne nach unten zeigt. Der Schlitz auf dem Applikator muss beim Setzen des Sensors nach unten zeigen.

Value smoothing & raw values
--------------------------------------------------
Technisch wird alle Minute der aktuelle Blutzucker-Wert an xDrip+ übertragen. Daraus wird mit einem weighted average Filter über die letzten 25 Minuten ein geglätteter Wert errechnet,  um damit bei Bedarf loopen zu können. Die Kurven sehen glatt aus und die Loopergebnisse sind prima. Die Rohwerte, die den Alarmen zugrunde liegen, schwanken ein wenig mehr, entsprechen aber den Werten, die auch der Reader anzeigt. Man kann zusätzlich die Rohwerte im xDrip+ Graph anzeigen lassen, um bei schnellen Veränderungen rechtzeitig reagieren zu können. Dazu bitte Less Common Settings->Advanced Settings for Libre2->show Raw values anschalten". Dann werden zusätzlich Rohwerte als kleine weiße Punkte angezeigt und zusätzliche Sensorinformationen sind im Systemmenü verfügbar.

Die Rohwerte sind sehr hilfreich, wenn sich der Blutzuckerwert schnell ändert. Auch wenn die einzelnen Punkte viel mehr springen, wirst Du die Tendenz deutlich besser erkennen als bei der geglätteten Linie und kannst so bessere Therapieentscheidungen treffen.

.. image:: ../images/Libre2_RawValues.png
  :alt: xDrip+ advanced settings Libre 2 & raw values

Sensor runtime
--------------------------------------------------
Die Sensorlaufzeit ist fix 14 Tage. Die 12 extra Stunden des Libre1 existieren nicht mehr. Aktiviert man unter Advanced settings for Libre2->show Sensor wird im Systemstatus die Sensor Startzeit sowie weitere Infos angezeigt. Die Restzeitlaufzeit des Sensors ist ebenfalls in der gepatchten LibreLink App zu sehen. Entweder im Hauptbildschirm als Resttagesanzeige oder als Startzeit im Dreipunktmenü->Hilfe->Ereignisprotokoll unter „Neuer Sensor gefunden“.

.. image:: ../images/Libre2_Starttime.png
  :alt: Libre 2 Startzeit

New sensor
--------------------------------------------------
Ein Sensortausch erfolgt danach dann immer on-the-fly: Neuen Sensor kurz vor Aktivieren setzen. Sobald xDrip+ keine Daten mehr vom alten Sensor empfängt den neuen Sensor
mit der gepatchten App starten. Nach einer Stunde sollten automatisch neue Werte in xDrip+ erscheinen.  

Wenn nicht, dann die Smartphone-Einstellungen prüfen und vorgehen wie beim ersten Start. Es gibt keine zeitliche Einschränkung. Try to find the correct settings. Es ist nicht erforderlich, den Sensor sofort zu ersetzen, bevor Du verschiedene Kombinationen ausprobiert hast. Die Sensoren sind robust und versuchen permanent, eine Verbindung herzustellen. Lasse Dir Zeit. In den meisten Fällen hast Du eine Einstellung verändert, die nun zu Problemen führt. 

Nach erfolgreicher Verbindung musst Du in xDrip "Sensor Stop" und "Delete calibration only" wählen. Dadurch erkennt xDrip+, dass die Werte von einem neuen Sensor kommen und die alten Kalibrationen nicht mehr verwendet werden dürfen und daher gelöscht werden müssen. Dabei findet keine Kommunikation mit dem Libre2 Sensor statt. You do not need to start the sensor in xDrip+.

.. image:: ../images/Libre2_GapNewSensor.png
  :alt: xDrip+ Fehlende Daten beim Libre 2 Sensorwechsel

Kalibrierung
--------------------------------------------------
Der Sensor kann im Bereich von -40 mg/dl bis +20 mg/dl (-2,2 mmol/l bis +1,1 mmol/l) kalibriert werden. Die Steigung lässt sich nicht ändern, da der Libre2 deutlich genauer ist als der Libre1. Prüfe zeitnah nach dem Setzen eines neuen Sensors mit einer blutigen Messung. Es ist bekannt, dass es deutliche Abweichungen zu den blutigen Messungen geben kann. Zur Sicherheit sollte alle 24 - 48 Stunden kalibriert werden. Die Werte sind bis zum Sensorende genau und „leiern“ nicht aus wie beim Libre1.  Ist der Sensor allerdings völlig daneben, dann wird sich das nicht ändern. Der Sensor sollte dann umgehend getauscht werden.

Plausibility checks
--------------------------------------------------
Die Libre2 Sensoren enthalten Plausibilitätsprüfungen, um schlechte Sensorwerte zu erkennen. Sobald sich der Sensor am Arm bewegt oder leicht angehoben wird, können die Werte anfangen zu schwanken. Der Libre2 Sensor schaltet sich dann aus Sicherheitsgründen ab. Leider erfolgen beim Scannen mit der App weitere Prüfungen. Die App kann ebenfalls den Sensor deaktivieren, was zu einem frühen Ausfall führen kann, obwohl der Sensor in Ordnung ist. Derzeit ist der interne Test zu streng. Ich verzichte mittlerweile vollständig auf das Scannen und habe seitdem keinen Ausfall mehr gehabt.

Time zone travelling
--------------------------------------------------
In other `time zones <../Usage/Timezone-traveling.html>`_ there are two strategies for looping: 

Either 

1. Entweder die Zeit des Smartphones unverändert lassen und das Basalprofil
zeitverschieben (Smartphone im Flugmodus) oder 
2. die Pumpenhistorie löschen und die Zeit des Smartphones auf die lokale Zeit umstellen. 

Methode 1. ist prima, solange man vor Ort keinen neuen Libre2 Sensor setzen muss. Im Zweifel Methode 2 wählen, insbesondere wenn die Reise länger dauert. Setzt man einen neuen Sensor muss leider die automatische Zeitzone gesetzt sein, wodurch  Methode 1 gestört würde. Bitte vorher prüfen, wenn man erst woanders ist, kann man sonst schnell in Probleme laufen.

Experiences
--------------------------------------------------
Insgesamt eines der kleinsten CGM System am Markt. Klein, kein Transmitter notwendig und (bei mir) sehr genaue Werte ohne Schwankungen. Nach rd. 12 Stunden Einlaufphase mit Abweichungen von bis zu 30 mg/dl (1,7 mmol/l) sind die Abweichungen bei mir kleiner als 10 md/dl (0,6 mmol/l). Beste Ergebnisse am hinteren Oberarm, andere Setzstellen mit Vorsicht! Den Sensor einen Tag vorher zu setzen ist hier unnötig. Das würde den Einpendelmechanismus stören.

Es scheint ab und an schlechte Sensoren zu geben, die weit neben den Blutwerten liegen. Das bleibt dann so. Diese sollten umgehend reklamiert und getauscht werden.

Falls der Sensor auf der Haut ein wenig bewegt oder irgendwie angehoben wird, kann dies zu fehlerhaften Ergebnissen führen. Das Filament, das im Gewebe sitzt, wurde in diesem Fall ein wenig aus dem Gewebe gezogen und liefert deshalb falsche Messergebnisse. Meistens springen dann die Werte in xDrip+. Oder es kommt zu Abweichungen zu blutig gemessenen Werten. Bitte ersetze den Sensor sofort! Die Ergebnisse sind ab diesem Zeitpunkt ungenau.

Schritt 5: Einsatz von Bluetooth-Transmittern und OOP
==================================================

Neben der gepatchten App können derzeit der Droplet oder (bald verfügbar) der neue OOP Algorithmus unter xDrip+ eingesetzt werden. Bisher funktionieren der MM2 und blucon NICHT.

Bluetooth-Transmitter können mit dem Libre2 mit den neuesten xDrip + nightlys verwendet werden. Auf der miaomiao Webseite findest Du eine Beschreibung dazu. Diese funktioniert auch mit den Bubble und künftig evtl. erhältlichen anderen Transmittern.

Der Droplet-Transmitter funktioniert mit dem Libre2, benötigt aber eine Internetverbindung. Weitere Informationen findest Du bei Facebook oder über eine Suchmaschine Deiner Wahl.

Auch wenn der Ansatz der gepatchten LibreLink App sehr smart ist, kann es Gründe geben, statt dessen einen Bluetooth-Transmitter zu nutzen:

* the BG readings are identical to the reader results
* the Libre2 sensor can be used 14.5 days as with the Libre1 before 
* 8 hours Backfilling is fully supported.
* get BG readings during the 1 hour startup time of a new sensor

Hinweis: Der Transmitter kann auch parallel zur gepatchten LibreLink App verwendet werden. Er stört deren Betrieb nicht.
