Dexcom G6
**************************************************
Grundsätzliches vorab
==================================================

* Beachte die allgemeinen Empfehlungen zur CGM Hygiene und zum Setzen des Sensors, die Du `hier <../Hardware/GeneralCGMRecommendation.html>`_ findest.
* Für G6 Transmitter, die nach Herbst / Ende 2018 produziert wurden, musst Du eine der letzten `nightly built xDrip+ versions <https://github.com/NightscoutFoundation/xDrip/releases>`_ verwenden. Diese Transmitter haben eine neue Firmware und die letzte stabile Version von xDrip+ vom 10.01.2019 kann mit diesen noch nicht korrekt umgehen.
* If you have the possibility to get a Dexcom receiver from your health insurance it is worth getting it. Even if you do not use it every day you can exclusively refer to what the receiver said when you need to file a complaint. Parallel use is possible as transmitters can send to the receiver, plus to one more device at the same time.

Allgemeine Hinweise zum Closed Loop mit dem Dexcom G6
==================================================

Die Nutzung des G6 kann vielleicht etwas komplexer sein, als zunächst vermutet. Mache Dir die folgenden Punkte bewusst, um das System sicher zu nutzen: 

* Wenn Du mit nativen Daten und dem Kalibrierungscode in xDrip+ oder Spike arbeitest, ist es am sichersten, auf den "preemptive" Neustart des Sensors zu verzichten.
* Falls Du den "preemptive restart" verwendest, stelle sicher, dass dieser zu einer Tageszeit erfolgt, zu der Du die Änderungen verfolgen und ggf. durch eine Kalibrierung eingreifen kannst. 
* Falls Du Sensoren verlängerst, verzichte aus Sicherheitsgründen entweder auf die Werkskalibrierung an Tag 11 und 12 oder stelle sicher, dass Du die Abweichungen im Auge hast und evtl. durch Kalibrierung korrigieren kannst.
* Das sogenannte "Pre-soaking" (Sensor früher ohne Transmitter setzen, damit er sich an die Gewebsflüssigkeit "gewöhnt") mit Werkskalibrierung führt wahrscheinlich zu Abweichungen in den Glukosewerten. Falls Du mit "pre-soaking" arbeitest, wirst Du wahrscheinlich besser Ergebnisse erzielen, wenn Du den Sensor kalibrierst.
* Wenn Du nicht auf die Abweichungen, die stattfinden können, achten willst, wäre es evtl. besser bei der Verlängerung auf die Werkskalibrierung zu verzichten und das System wie den G5 (mit "Pflichtkalibrierung") zu nutzen.

Mehr zu den Details und Gründen für diese Empfehlungen findest Du im `kompletten Artikel (englisch) <http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/>`_ von Tim Street auf seiner Seite `www.diabettech.com <http://www.diabettech.com>`_.

Dexcom G6 mit xDrip+
==================================================
* Der Dexcom G6-Transmitter kann gleichzeitig mit einem Dexcom-Empfänger (oder alternativ mit der t:slim-Pumpe) und einer App auf dem Handy verbunden werden.
* Wenn Du xDrip+ zum Empfang der CGM-Daten verwendest, deinstalliere zuerst die Dexcom App. **Du kannst xDrip+ und die Dexcom App nicht gleichzeitig mit dem Transmitter verbinden!**
* Falls Du Clarity benötigst und trotzdem von den xDrip+ Alarmen profitieren willst, musst Du die <a href="../Hardware/DexcomG6#g6-mit-der-gepatchten-dexcom-app">gepatchte Dexcom App</a> mit lokaler Datenübertragung zu xDrip+ verwenden.
* If not already set up then download `xdrip <https://github.com/NightscoutFoundation/xDrip>`_ and follow instructions on Nightscout (`G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>`_).
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > xdrip.
* Passe die Einstellungen von xDrip+ entsprechend den Angaben auf der `Seite xDrip+ Einstellungen  <../Configuration/xdrip.html>`_ an.
* Falls AAPS im Flugmodus keine BZ-Werte von xdrip+ bekommt, nutze `Identify receiver` wie auf der Seite `xDrip+ Einstellungen <../Configuration/xdrip.html>`_ beschrieben.

G6 mit der gepatchten Dexcom App
==================================================
* Lade die APK von `https://github.com/dexcomapp/dexcomapp <https://github.com/dexcomapp/dexcomapp>`_ herunter und wähle die Version, die Du benötigst (mg/dl oder mmol/l Version, G6).

   * Ordner 2.4 für alle Nutzer der aktuellen Version. Ordner 2.3 nur für die Nutzer der veralteten AAPS-Version 2.3.
   *  Öffne https://play.google.com/store/search?q=dexcom%20g6 auf Deinem Computer. Die Region wird in der URL angezeigt.
   
   .. image:: ../images/DexcomG6regionURL.PNG
     :alt: Region in der Dexcom G6 URL

* Stoppe den Sensor und deinstalliere die originale Dexcom App, falls du das noch nicht gemacht hast.
* Installiere die heruntergeladene apk
* Starte den Sensor
* Wähle gepatchte Dexcom App im Konfigurations-Generator (Konfiguration in AndroidAPS).
* xDrip+ Alarme kannst Du über den lokalen Broadcast nutzen: In xDrip > Hamburger Menü > Einstellungen > Datenquelle > 640G / EverSense.
* Der lokale Broadcast funktioniert nicht direkt von der gepatchten Dexcom App zu xDrip+. Der Broadcast muss über AAPS laufen.

Problembehandlung G6
==================================================
Dexcom G6-spezifische Problembehandlung
--------------------------------------------------
* Transmitter, deren Seriennummer mit 80 oder 81 beginnt benötigen mind. die letzte Masterversion vom Mai 2019 oder einen neueren nightly build.
* Transmitter, deren Seriennummer mit 8G beginnt benötigen mind. die nightly build vom 25. Juli 2019 oder ein neueres nightly build.
* xDrip+ und Dexcom App können nicht gleichzeitig mit dem Transmitter verbunden werden.
* Warte mindestens 15 Minuten zwischen dem Stoppen und Starten des Sensors.
* Datiere die Einsetzzeit nicht zurück. Beantworte daher die Frage, ob Du den Sensor heute eingesetzt hast, immer mit Ja.
* Beim Starten eines Sensors darf "restart sensors" nicht aktiviert sein.
* Starte den neuen Sensor NICHT bevor eine der folgenden Informationen auf der  Classic Status Page -> G5/G6 status -> PhoneServiceState angezeigt wird:

  * Transmitter Seriennummer beginnt mit 80 oder 81: "Got data hh:mm" (z.B. "Got data 19:04")
  * Transmitter Seriennummer beginnt mit 8G oder 8H: "Got glucose hh:mm" (z.B. "Got glucose 19:04") oder "Got no raw hh:mm" (z.B.  "Got now raw 19:04")

.. image:: ../images/xDrip_Dexcom_PhoneServiceState.png
  :alt: xDrip+ PhoneServiceState

General troubleshooting
--------------------------------------------------
General Troubleshooting for CGMs can be found `here <./GeneralCGMRecommendation.html#Troubleshooting>`_.

Neuer Transmitter bei laufendem Sensor
--------------------------------------------------
Falls Du einen Transmitter bei einer laufenden Sensorsitzung wechseln musst, kannst Du versuchen, den Transmitter zu tauschen, ohne die Transmitterhalterung zu beschädigen. Ein Video findest Du unter `https://youtu.be/AAhBVsc6NZo <https://youtu.be/AAhBVsc6NZo>`_.


