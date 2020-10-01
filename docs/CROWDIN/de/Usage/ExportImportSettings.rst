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

Verschlüsseltes Backup-Format
==================================================
Die Sicherung der Einstellungen wird mit einem Master-Passwort verschlüsselt, das in den `Einstellungen <../Configuration/Preferences.html#master-passwort>`_ festgelegt wird.


Exportiere die Einstellungen
==================================================
* Hamburger Menü (drei Striche oben links am Bildschirm)
* Wartung
* Einstellungen exportieren

.. image:: ../images/AAPS_ExportSettings1.png
  :alt: AndroidAPS Export der Einstellungen 1

* Datum und Zeit des Exports werden automatisch an den Dateinamen angehängt und zusammen mit dem Pfad angezeigt.
* Klicke auf "OK'.
* Gib das `Master-Passwort <../Configuration/Preferences.html#master-passwort>`_ ein und klicke 'OK'.
* Der erfolgreiche Export wird am unteren Rand des Bildschirms angezeigt.

.. image:: ../images/AAPS_ExportSettings2.png
  :alt: AndroidAPS Export der Einstellungen 2
  
Importiere die Einstellungen
==================================================
* Hamburger Menü (drei Striche oben links am Bildschirm)
* Wartung
* Einstellungen importieren

.. image:: ../images/AAPS_ImportSettings1.png
  :alt: AndroidAPS Import der Einstellungen 1

* Alle Dateien im Verzeichnis AAPS/preferences/ auf Deinem Smartphone werden in der Liste angezeigt.
* Datei auswählen.
* Bestätige den Import durch Klick auf 'OK'.
* Gib das `Master-Passwort <../Configuration/Preferences.html#master-passwort>`_ ein und klicke 'OK'.

.. image:: ../images/AAPS_ImportSettings2.png
  :alt: AndroidAPS Import der Einstellungen 2

* Details zu der gewählten Datei werden angezeigt.
* Letzte Option zum Abbrechen des Imports.
* Klicke auf 'Importieren'.
* Bestätige die Meldung durch Klick auf 'OK'.
* AAPS wird neu gestartet, um importierte Einstellungen zu aktivieren.

Note for Dana RS users
------------------------------------------------------------
* Da die Verbindungseinstellungen zusammen mit den anderen Einstellungen in AAPS importiert werden, "kennt" AAPS deine Pumpe bereits und startet daher keinen Bluetooth-Scan. 
* Please pair new phone and pump manually.

Import settings from previous versions (before AAPS 2.7)
------------------------------------------------------------
* The "old" settings file must be in root folder of your smartphone (/storage/emulated/0).
* Do not put the "old" file in the same folder as the new exported settings (AAPS/preferences).
* You will find the "old" file on the bottom of the list in the import dialogue.

Einstellungs-Datei übertragen
==================================================
* Der beste Weg, um Einstellungs-Datei auf ein neues Telefon zu übertragen, ist über ein USB-Kabel oder einen Cloud-Service (z.B. Google Drive).
* Anleitungen dazu findest Du im Netz, z.B. `Android-Hilfe <https://support.google.com/android/answer/9064445?hl=de>`_.
* Wenn Probleme mit der übertragenen Datei auftreten, versuche eine andere Methode, um die Datei zu übertragen.
