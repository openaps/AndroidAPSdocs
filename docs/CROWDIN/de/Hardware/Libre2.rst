Freestyle Libre 2
**********************

Das Freestyle Libre 2 System kann gefährliche Blutzuckerwerte automatisch melden. Dazu sendet der Libre2 Sensor minütlich die aktuellen
Blutzuckerwerte an einen Empfänger (Reader oder Smartphone). Dieser löst dann ggf. einen Alarm aus. Modifiziert man die LibreLink App, dann kann man die Blutzuckerwerte kontinuierlich auf dem Smartphone empfangen. Da diese direkt per Bluetooth an Dein Telefon geschickt werden, musst Du keinen Bluetooth-Adapter wie MiaoMiao mehr kaufen. 

Schritt 1: Erstelle Deine eigene gepatchtete Librelink-App
==============

Das sogenannte Patchen muss aus rechtlichen Gründen selbst erfolgen nach einer von zwei Anleitungen:

https://github.com/user987654321resu/Libre2-patched-App

https://github.com/TinoKossmann/LibreLink-xDrip-Patch

Die gepachtete App wird dann anstelle der originalen App installiert. Der nächste damit gestartete Sensor übermittelt dann drahtlos seine Werte an das Smartphone.

Wichtig: Erst die originale App auf einem NFC-fähigen Smartphone installieren und wieder deinstallieren. NFC muss eingeschaltet sein. Das verbraucht keine zusätzliche Energie. Dann die gepatchte App installieren. Diese ist an der Vordergrund-Berechtigung "Notification" eindeutig erkennbar. 

.. image:: ../images/fsl2pic1.jpg
  :alt: LibreLink Vordergrund Service

Dies sorgt für eine deutliche Verbesserung der Verbindungsstabilität verglichen zu originalen App. Nun die Berechtigungen für Speicher und Standort setzen, automatische Zeit und Zeitzone aktivieren und danach in der LibreLink app die Alarme einstellen. Jetzt den Libre2 Sensor mit der gepatchen App starten. Folge den Anweisungen. Der Sensor merkt sich das Gerät, mit dem er gestartet wurde. Nur dieses Gerät kann zukünftig Alarme empfangen.

.. image:: ../images/fsl2pic2.jpg
  :alt: LibreLink Berechtigungen für Speicher & Standort
  
.. image:: ../images/fsl2pic3.jpg
  :alt: Android Standort-Einstellungen
  
.. image:: ../images/fsl2pic4.jpg
  :alt: LibreLink Alarmeinstellungen
  
Parallel kann ein weiteres NFC-fähiges Smartphone mit der originalen LibreLink App zum Scannen verwendet werden. Der Reader kann NICHT mehr verwendet werden, er läßt sich nicht parallel aufschalten! Mit dem Zweithandy kann man parallel scannen und die Werte in die Abbott Cloud (LibreView) hochladen lassen, um diese dann dem DiaDoc zeigen zu können. LibreView kann Berichte für DiaDoc erstellen. Es gibt viele Eltern, die das unbedingt brauchen. Die gepatchte App hat keinerlei Verbindung zum Internet, um nicht als solche erkannt zu werden.

Der erste Verbindungsaufbau ist kritisch. Die App versucht alle 30 Sekunden eine drahtlose Verbindung zum Sensor aufzubauen. Alle Einstellungen müssen zwingend gesetzt sein: 

* NFC aktiviert
* Speicherberechtigung und Standortfreigabe 
* Standortdienst aktiviert
* Uhrzeit und Datum automatisch beziehen 
* mindestens ein Alarm. 

Im Startbildschirm der gepatchten App ist links oben erst ein rotes Ausrufezeichen ("!") zu sehen. Erst wenn das Ausrufezeichen weg ist, steht die Verbindung und Blutzuckerwerte werden an das Smartphone gesendet. Das sollte nach maximal 5 Minuten passiert sein.

.. image:: ../images/fsl2pic5.jpg
  :alt: LibreLink keine Verbindung
  
Bleibt das Ausrufezeichen stehen, kann das mehrere Gründe haben:

- die Standortfreigabe von Android ist nicht erteilt - bitte in den Systemeinstellungen freigeben
- automatische Zeitzone und Uhrzeit ist nicht gesetzt - bitte entsprechend die Einstellungen ändern
- Alarme einschalten - mindestens einer der drei Alarme muss aktiviert sein
- Bluetooth ist ausgeschaltet - bitte einschalten

Handyneustart kann helfen, muss ggf. mehrmals gemacht werden. Sobald die Verbindung steht, verschwindet das rote Ausrufezeichen und der wichtigste Schritt ist geschafft. Sensor und Smartphone sind nun verbunden, alle Minute wird ein Blutzuckerwert übertragen.

.. image:: ../images/fsl2pic6.jpg
  :alt: LibreLink Verbindung hergestellt
  
Nun können die Smartphone Einstellungen bei Bedarf wieder verändert werden, wenn man z.B. Strom sparen will. Standortfreigabe (GPS) kann ausgeschaltet werden, Lautstärke kann auf Null gesetzt werden oder auch die Alarme können wieder abgeschaltet werden. Die Werte werden trotzdem übertragen.

Beim Start des nächsten Sensors müssen jedoch alle Einstellungen wieder gesetzt sein!

Schritt 2: Installieren und konfigurieren der xDrip+ App
==============

Die Blutzuckerwerte werden von der xDrip + App auf dem Smartphone empfangen. 

* Falls noch nicht geschehen lade die xDrip App `hier <https://github.com/NightscoutFoundation/xDrip/releases>`_ herunter und installiere eine der neuesten nightly builts auf Deinem Smartphone.
* In xDrip+ als Datenquelle „Libre2 (patched App)“ auswählen. Ggf. unter Less Common Settings->Extra Logging Settings->Extra tags for logging „BgReading:d,xdrip libre_receiver:v“ eintragen. Damit werden evtl. Fehlermeldungen protokolliert.
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Lokaler Broadcast und wähle AN.
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Behandlungen annehmen und wähle AUS.
* Falls du mit AndroidAPS kalibrieren willst dann gehe in xdrip zu Einstellungen > Inter-App Einstellungen > Accept Calibrations und wähle AN.  Du solltest auch die Optionen in Einstellungen > Erweiterte Einstellungen > Erweiterte Kalibrierung kontrollieren.

.. image:: ../images/fsl2pic7.jpg
  :alt: xDrip+ LibreLink Fehlerprotokoll
  
.. image:: ../images/fsl2pic7a.jpg
  :alt: xDrip+ Fehlerprotokoll
  #
Schritt 3: Sensor starten
===============

In xDrip+ den Sensor dann mit „Start Sensor“ und „nicht heute“ starten. 

Wenn vorhanden zwei blutige Messwerte zur initialen Kalibrierung eingeben. Damit soll xDrip+ einfach nur mitgeteilt werden, dass ein neuer Sensor Blutzuckerwerte liefert. Wenn verfügbar, gib zwei blutige Messwerte für die Anfangskalibrierung ein. Nun sollten die Blutzuckerte alle 5 Minuten in xDrip+ angezeigt werden. Ausgefallene Werte, weil man z.B. zu weit vom Smartphone weg war, werden nicht nachträglich eingetragen.

Schritt 4: AndroidAPS konfigurieren
==============
* Wähle in AndroidAPS Konfiguration (Hamburger-Menü links oben auf dem Startbildschirm), wähle BZ-Quelle und dann xDrip. 
* Falls AAPS im Flugmodus keine BZ-Werte von xdrip+ bekommt, nutze `Identify receiver` wie auf der Seite `xDrip+ settings page <../Configuration/xdrip.html>`_ beschrieben.

Wenn Du den Libre 2 als BZ-Quelle nutzt, stehen die Funktionen 'Enable SMB always' und 'Enable SMB after carbs' nicht zur Verfügung. Die BZ-Werte des Libre 2 sind für einen sicheren Einsatz dieser Funktionen nicht glatt genug. Weitere Details findest Du unter `Glättung der Blut-Glukose-Daten <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_ .

Erfahrungen und Troubleshooting
===================

Die Verbindungsqualität ist außerordentlich gut. Bis auf Huawei Handys scheinen alle aktuellen Smartphones gut zu funktionieren. Das Wiederverbinden nach Verbindungsverlust ist phänomenal. Die Verbindung kann durchaus einmal abreißen, wenn sich der Sensor auf der einen Körperseite, das Handy auf der anderen in der Hosentasche befindet oder wenn man im Freien unterwegs ist. Bei Gartenarbeit habe ich mir angewöhnt, das Handy auf der Sensorseite am Körper zu tragen. In Räumen, wo sich Bluetooth über Reflektionen ausbreitet, sollten keine Probleme auftreten. Bei Verbindungsproblemen bitte ein anderes Telefon testen.

Technisch wird alle Minute der aktuelle Blutzucker-Wert an xDrip+ übertragen. Daraus wird mit einem weighted average Filter über die letzten 25 Minuten ein geglätteter Wert errechnet,  um damit bei Bedarf loopen zu können. Die Kurven sehen glatt aus und die Loopergebnisse sind prima. Die Rohwerte, die den Alarmen zugrunde liegen, schwanken ein wenig mehr, entsprechen aber den Werten, die auch der Reader anzeigt. Man kann zusätzlich die Rohwerte im xDrip+ Graph anzeigen lassen, um bei schnellen Veränderungen rechtzeitig reagieren zu können. Dazu bitte Less Common Settings->Advanced Settings for Libre2->show Raw values anschalten. Dann sind die Rohwerte als kleine weisse Punkte zusätzlich eingeblendet.

.. image:: ../images/fsl2pic8.jpg
  :alt: xDrip+ Erweiterte Einstellungen Libre 2
  
.. image:: ../images/fsl2pic9.jpg
  :alt: xDrip+ Startbildschirm mit Rohwerten
  
Die Sensorlaufzeit ist fix 14 Tage. Die 12 extra Stunden des Libre1 existieren nicht mehr. Aktiviert man unter Advanced settings for Libre2->show Sensor wird im Systemstatus die Sensor Startzeit sowie weitere Infos angezeigt. xDrip+ zeigt Batteriestärke des L2 Sensors nicht an. Die Restzeit ist ebenfalls in der gepatchten LibreLink App zu sehen. Entweder im Hauptbildschirm als Resttagesanzeige oder als Startzeit im Dreipunktmenü->Hilfe->Ereignisprotokoll unter „Neuer Sensor gefunden“.

.. image:: ../images/fsl2pic10.jpg
  :alt: Libre 2 Startzeit
  
Insgesamt eines der kleinsten CGM System am Markt. Klein, kein Transmitter notwendig und (bei mir) sehr genaue Werte ohne Schwankungen. Nach rd. 12 Stunden Einlaufphase mit Abweichungen von bis zu 30 mg/dL sind die Abweichungen bei mir kleiner als 10 md/dL. Beste Ergebnisse am hinteren Oberarm, andere Setzstellen mit Vorsicht! Den Sensor einen Tag vorher zu setzen ist hier unnötig. Das würde den Einpendelmechanismus stören.

Es scheint ab und an schlechte Sensoren zu geben, die weit neben den Blutwerten liegen. Das bleibt dann so. Diese sollten umgehend reklamiert und getauscht werden.

Verschobene Sensoren können schlechte Werte liefern. Das Filament, das im Gewebe sitzt, wurde in diesem Fall ein wenig bewegt und liefert deshalb falsche Messergebnisse. Meistens springen dann die Werte in xDrip+. Oder es kommt zu Abweichungen zu blutig gemessenen Werten. Bitte ersetze den Sensor sofort! Die Ergebnisse sind ab diesem Zeitpunkt ungenau.

Ein Sensortausch erfolgt danach dann immer on-the-fly: Neuen Sensor kurz vor Aktivieren setzen. Sobald xDrip+ keine Datem mehr vom alten Sensor empfängt den neuen Sensor
mit der gepatchten App starten. Nach einer Stunde sollten automatisch neue Werte in xDrip+ erscheinen.  Wenn nicht, dann die Smartphoneeinstellungen prüfen und vorgehen wie beim ersten Start. Bitte in xDrip+ den Sensor Stop und Sensor Start->nur Kalibrierung löschen anwählen. Keine Notwendigkeit, den Sensor in xDrip + später zu starten.

.. image:: ../images/fsl2pic11.jpg
  :alt: xDrip+ Fehlende Daten beim Libre 2 Sensorwechsel
  
Man kann den Libre2 kalibrieren, jedoch nur mit einen Offset von plus/minus 20 mg/dL (intercept), jedoch keine Steigung (slope). Zur Sicherheit sollte alle 24 - 48 Stunden kalibriert werden. Die Werte sind bis zum Sensorende genau und „leiern“ nicht aus wie beim Libre1.  Ist der Sensor allerdings völlig daneben, dann wird sich das nicht ändern. Der Sensor sollte dann umgehend getauscht werden.

Die Libre2 Sensoren enthalten Plausibilitätsprüfungen, um schlechte Sensorwerte zu erkennen. Sobald sich der Sensor am Arm bewegt oder leicht angehoben wird, können die Werte anfangen zu schwanken. Der Libre2 Sensor schaltet sich dann aus Sicherheitsgründen ab. Leider erfolgen beim Scannen mit der App weitere Prüfungen. Die App kann ebenfalls den Sensor deaktivieren, was zu einem frühen Ausfall führen kann, obwohl der Sensor in Ordnung ist. Derzeit ist der interne Test zu streng. Ich verzichte mittlerweile vollständig auf das Scannen und habe seitdem keinen Ausfall mehr gehabt.

In anderen  `Zeitzonen <../Usage/Timezone-traveling.html>`_gibt es beim Loopen zwei Strategien: 

1. Entweder die Smartphonezeit ungeändert lassen und das Basalprofil
zeitverschieben (Smartphone im Flugmodus) oder 
2. die Pumpenhistorie löschen und die Smartphonezeit auf die lokale Zeit umstellen. 

Methode 1. ist prima, solange man vor Ort keinen neuen Libre2 Sensor setzen muss. Im Zweifel Methode 2 wählen, insbesondere wenn die Reise länger dauert. Setzt man einen neuen Sensor muss leider die automatische Zeitzone gesetzt sein, damit würde Methode 1 gestört. würde Methode 1 gestört. Bitte vorher prüfen, wenn man erst woanders ist, kann man sonst schnell in Probleme laufen.

Neben der gepatchten App können derzeit der Droplet oder (bald verfügbar) der neue OOP Algorithmus unter xDrip+ eingesetzt werden. Bisher funktionieren der MM2 und blucon NICHT.
