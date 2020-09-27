Notwendige Überprüfungen nach Aktualisierung auf AndroidAPS 2.7
***********************************************************

* Der Programmcode wurde bei der Umstellung auf AAPS 2.7 deutlich verändert. 
* Daher ist es wichtig, dass Du einige Änderungen vornimmst oder Einstellungen nach der Aktualisierung überprüfst.
* In den `Release Notes <../Installing-AndroidAPS/Releasenotes.html#version-270>`_ findest Du Details zu allen neuen und verbesserten Funktionen.

Prüfe die BZ-Quelle
-----------------------------------------------------------
* Prüfe, ob Deine BZ-Quelle nach dem Update noch richtig eingestellt ist.
* Wenn Du z.B. `xDrip+ <../Configuration/xdrip.html>`_ nutzt, kann es passieren, dass die BZ-Quelle auf die gepatchte Dexcom App geändert wird.
* Öffne den `Konfigurations-Generator <../Configuration/Config-Builder.htmll#bz-quelle>`_ (Hamburger Menü oben links)
* Scrolle nach unten zu "BZ-Quelle".
* Ändere bei Bedarf die BZ-Quelle.

.. image:: ../images/ConfBuild_BG.png
  :alt: BZ-Quelle

Prüfung abschließen
-----------------------------------------------------------
* AAPS 2.7 hat ein neues Objective 11 für `Automatisierung <../Usage/Automation.html>`_ bekommen.
* Du musst die Prüfung erfolgreich beenden (`Objectives 3 und 4 <../Usage/Objectives.html#ziel-3-belege-dein-wissen>`_), um `Objective 11 <../Usage/Objectives.html#objective-11-automation>`_ starten zu können.
* If for example you did not finish the exam in `objective 3 <../Usage/Objectives.html#objective-3-proof-your-knowledge>`_ yet, you will have to complete the exam before you can start `objective 11 <../Usage/Automation.html>`_. 
* This will not effect other objectives you have already finished. Du behälst alle Objectives, die Du bereits abgeschlossen hast!

Master-Passwort festlegen
-----------------------------------------------------------
* Die `exportierten Einstellungen <../Usage/ExportImportSettings.html>`_ sind ab Version 2.7 verschlüsselt.
* Öffne die Einstellungen (Drei-Punkte-Menü oben rechts)
* Klicke das Dreieck neben "Allgemein".
* Klicke auf "Master-Passwort".
* Gib ein Passwort ein, bestätige es und klicke auf OK.

.. image:: ../images/MasterPW.png
  :alt: Master-Password festlegen
  
Exportiere die Einstellungen
-----------------------------------------------------------
* AAPS 2.7 verwendet ein neues verschlüsseltes Backup-Format. 
* Du musst daher nach dem Update auf Version 2.7 `Deine Einstellungen exportieren <../Usage/ExportImportSettings.html>`_.
* Einstellungen aus früheren Versionen **können nicht** mit AAPS 2.7 und höher verwendet werden.
* Speichere Deine exportierten Einstellungen nicht nur auf Deinem Smartphone, sondern auch an mindestens einem sicheren Ort (PC, Cloud-Speicher ...).
* If you build AAPS 2.7 apk with the same keystore than in previous versions you can install new version without deleting the previous version. 
* All settings as well as finished objectives will remain as they were in the previous version.
* In case you have lost your keystore build version 2.7 with new keystore and import settings from previous version as described in the `troubleshooting section <../Installing-AndroidAPS/troubleshooting_androidstudio.html#lost-keystore>`_.

Autosens (Hinweis - keine Maßnahmen erforderlich)
-----------------------------------------------------------
* Autosens wurde von einem statischen zu einem dynamischen Modell geändert. Dies entspricht auch dem Referenzdesign.
* Autosens wechselt nun zwischen einem 8-stündigen und 24-stündigen Zeitfenster für die Berechnung der Sensitivität. Dabei wird das empfindlichere Ergebnis verwendet. 
* Wenn Du bisher oref1 genutzt hast, wirst Du wahrscheinlich bemerken, dass das System weniger dynamisch auf Veränderungen reagiert, da zwischen 8 und 24 Stunden gewechselt wird.

Pumpen-Passwort für Dana RS setzen (wenn Dana RS verwendet wird)
-----------------------------------------------------------
* Das Pumpen-Passwort der `Dana RS <../Configuration/DanaRS-Insulin-Pump.html>`_ wurde in früheren Versionen nicht geprüft.
* Öffne die Einstellungen (Drei-Punkte-Menü oben rechts)
* Scrolle nach unten und klicke das Dreieck neben "Dana RS".
* Klicke auf "Pumpen-Passwort (nur v1)".
* Gib das Pumpen-Passwort ein (Standardpasswort ist 1234) und klicke auf OK.

.. image:: ../images/DanaRSPW.png
  :alt: Dana RS Passwort setzen
  
So änderst Du das Passwort auf der Dana RS:

* Auf der Pumpe Taste OK drücken.
* Im Hauptmenü "EINSTELLUNGEN" wählen. (Dazu nach rechts scrollen indem Du mehrfach den Pfeiltaste drückst.)
* Wähle im Untermenü "ANWENDER MENÜ".
* Scrolle mit der Pfeiltaste nach unten zu "11. Passwort".
* Gib das alte Passwort ein (Standard ist 1234).
* Neues Passwort eingeben. (Ändere die Ziffern mit den + & - Buttons und nutze den Pfeilbutton, um nach rechts zu gehen.)
* Bestätige mit der OK-Taste.
* Speichere durch erneutes Drücken der OK-Taste.
* Scrolle nach unten zu "14. EXIT" und drücke die OK-Taste.
