
Einstellungen exportieren & importieren
**************************************************
Wann sollte man die Einstellungen exportieren?
==================================================
Sei bereit für das Unvorhergesehene. Vielleicht änderst Du versehentlich wichtige Einstellungen und hast Schwierigkeiten, die Änderungen rückgängig zu machen. Dein Smartphone könnte defekt oder gestohlen werden. Um einfach auf den Stand zurückkehren zu können, an dem Du warst, sollten die Einstellungen regelmäßig exportiert werden.

Die Empfehlung ist, den Export nach einer Änderung der Einstellungen oder dem Abschluss eines Ziels (Objective) durchzuführen. 

Die exportierten Einstellungen sollten in einen Cloud-Speicher oder auf Deinen Computer kopiert werden. Dann ist Du für den Verlust oder die Beschädigung Deines AAPS-Smartphones vorbereitet und musst nicht wieder bei Null anfangen.

Auf einem Windows 10 PC sieht es in etwa so aus:
  
  .. image:: ../images/SmartphoneRootLevelWin10.png
    :alt: AndroidAPS Preferences Datei - Smartphone mit PC verbunden

Exported information
==================================================
Among others the following information is part of the settings export:

* `Automation <../Usage/Automation.html>`_ events
* `Config builder <../Configuration/Config-Builder.html>`_ settings
* `Local profile <../Configuration/Config-Builder.html#local-profile-recommended>`_ settings
* `Objectives <../Usage/Objectives.html>`_ status incl. `exam results <../Usage/Objectives.html#objective-3-proof-your-knowledge>`_
* `Preferences <../Configuration/Preferences.html>`_ incl. `NS Client settings <../Configuration/Preferences.html#ns-client>`_




Exportieren der Einstellungen
==================================================
* **Exportiere die Einstellungen** auf Deinem alten Smartphone

  * Hamburger Menü (drei Striche oben links am Bildschirm)
  * Wartung
  * Einstellungen exportieren
  Der Speicherort der Datei wird angezeigt.
    
.. image:: ../images/AAPS_ExportSettings.png
  :alt: AndroidAPS export settings
       
* **Übertrage** die exportierten Einstellungen vom alten auf das neue Smartphone

  Die exportierte Datei heißt "AndroidAPSPreferences" und sollte im root-Ordner auf der Hauptebene Deines Smartphones (wie C: auf Deinem Computer) zu finden sein.
  
* **Installiere AndroidAPS** auf dem neuen Smartphone.
* **Importiere die Einstellungen** auf Deinem neuen Smartphone

  * Hamburger Menü (drei Striche oben links am Bildschirm)
  * Wartung
  * Einstellungen importieren

* **Hinweis für Dana RS Nutzer:**

  * Da die Verbindungseinstellungen zusammen mit den anderen Einstellungen in AAPS importiert werden, "kennt" AAPS deine Pumpe bereits und startet daher keinen Bluetooth-Scan. Bitte stelle die Bluetooth-Verbindung zwischen Smartphone und Pumpe manuell her.
