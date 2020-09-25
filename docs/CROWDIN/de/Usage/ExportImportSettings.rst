Einstellungen exportieren & importieren
**************************************************

Wann sollte man die Einstellungen exportieren?
==================================================
Sei bereit für das Unvorhergesehene. Vielleicht änderst Du versehentlich wichtige Einstellungen und hast Schwierigkeiten, die Änderungen rückgängig zu machen. Dein Smartphone könnte defekt oder gestohlen werden. Um einfach auf den Stand zurückkehren zu können, an dem Du warst, sollten die Einstellungen regelmäßig exportiert werden.

Die Empfehlung ist, den Export nach einer Änderung der Einstellungen oder dem Abschluss eines Ziels (Objective) durchzuführen. 

Die exportierten Einstellungen sollten in einen Cloud-Speicher oder auf Deinen Computer kopiert werden. Dann ist Du für den Verlust oder die Beschädigung Deines AAPS-Smartphones vorbereitet und musst nicht wieder bei Null anfangen.

Auf einem Windows 10 PC sieht es in etwa so aus:
  
.. image:: ../images/AAPS_ExImportSettingsWin.png
  :alt: AndroidAPS Preferences Datei - Smartphone mit PC verbunden

Exportierte Einstellungen
==================================================
Neben anderen werden folgende Einstellungen exportiert:

* `Automation <../Usage/Automation.html>`_ Regeln
* Einstellungen des `Konfigurations-Generators <../Configuration/Config-Builder.html>`_
* Einstellungen der `lokalen Profile <../Configuration/Config-Builder.html#lokales-profil-empfohlen>`_
* Status der `Ziele (Objectives) <../Usage/Objectives.html>`_ inkl. `Ergebnisse der Multiple-Choice-Fragen <../Usage/Objectives.html#ziel-3-belege-dein-wissen>`_
* `Einstellungen im 3-Punkte-Menü <../Configuration/Preferences.html>`_ inkl. `NS Client Einstellungen <../Configuration/Preferences.html#nightscout-client>`_

Encrypted backup format
==================================================
Settings backup is encrypted by a master password that can be set in `Preferences <../Configuration/Preferences.html#master-password>`_ .


Exportiere die Einstellungen
==================================================
* Hamburger Menü (drei Striche oben links am Bildschirm)
* Wartung
* Einstellungen exportieren

.. image:: ../images/AAPS_ExportSettings1.png
  :alt: AndroidAPS export settings 1

* Date and time of export will be added to the file name automatically and displayed together with the path.
* Click 'OK'.
* Enter `master password <../Configuration/Preferences.html#master-password>`_ and click 'OK'.
* Successful export will be prompted at bottom of the screen.

.. image:: ../images/AAPS_ExportSettings2.png
  :alt: AndroidAPS export settings 2
  
Importiere die Einstellungen
==================================================
* Hamburger Menü (drei Striche oben links am Bildschirm)
* Wartung
* Einstellungen importieren

.. image:: ../images/AAPS_ImportSettings1.png
  :alt: AndroidAPS import settings 1

* All files from folder AAPS/preferences/ on your phone will be shown in the list.
* Select file.
* Confirm import by clicking 'OK'.
* Enter `master password <../Configuration/Preferences.html#master-password>`_ and click 'OK'.

.. image:: ../images/AAPS_ImportSettings2.png
  :alt: AndroidAPS import settings 2

* Details on the preference file will be shown.
* Last option to cancel import.
* Click 'Import'.
* Confirm message by clicking 'OK'.
* AAPS will be restarted in order to activate imported preferences.

* **Hinweis für Dana RS Nutzer:**

  * Da die Verbindungseinstellungen zusammen mit den anderen Einstellungen in AAPS importiert werden, "kennt" AAPS deine Pumpe bereits und startet daher keinen Bluetooth-Scan. Bitte stelle die Bluetooth-Verbindung zwischen Smartphone und Pumpe manuell her.
  
Transfer settings file
==================================================
* Best way to transfer settings file to a new phone is via USB cable or cloud service (i.e. Google Drive).
* Manuals can be found on the web, i.e. `Android help pages <https://support.google.com/android/answer/9064445?hl=en>`_.
* If you experience problems with the transferred file try another way to transfer file.
