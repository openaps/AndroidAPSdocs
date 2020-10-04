Notwendige Überprüfungen nach Aktualisierung auf AndroidAPS 2.7
***********************************************************

* Der Programmcode wurde bei der Umstellung auf AAPS 2.7 deutlich verändert. 
* Daher ist es wichtig, dass Du einige Änderungen vornimmst oder Einstellungen nach der Aktualisierung überprüfst.
* In den `Release Notes <../Installing-AndroidAPS/Releasenotes.html#version-2-7-0>`_ findest Du Details zu allen neuen und verbesserten Funktionen.

Prüfe die BZ-Quelle
-----------------------------------------------------------
* Prüfe, ob Deine BZ-Quelle nach dem Update noch richtig eingestellt ist.
* Wenn Du z.B. `xDrip+ <../Configuration/xdrip.html>`_ nutzt, kann es passieren, dass die BZ-Quelle auf die gepatchte Dexcom App geändert wird.
* Öffne den `Konfigurations-Generator <../Configuration/Config-Builder.html#bz-quelle>`_ (Hamburger Menü oben links)
* Scrolle nach unten zu "BZ-Quelle".
* Ändere bei Bedarf die BZ-Quelle.

.. image:: ../images/ConfBuild_BG.png
  :alt: BZ-Quelle

Prüfung abschließen
-----------------------------------------------------------
* AAPS 2.7 hat ein neues Objective 11 für `Automatisierung <../Usage/Automation.html>`_ bekommen.
* Du musst die Prüfung erfolgreich beenden (`Objectives 3 und 4 <../Usage/Objectives.html#ziel-3-belege-dein-wissen>`_), um `Objective 11 <../Usage/Objectives.html#ziel-11-automatisierung>`_ starten zu können.
* Wenn Du z.B. bisher den Test in `Objective 3 <../Usage/Objectives.html#ziel-3-belege-dein-wissen>`_ noch nicht beendet hast, musst Du diesen erst abschließen, bevor Du `Objective 11 <../Usage/Objectives.html#ziel-11-automatisierung> starten kannst.`_. 
* Andere, von Dir bereits abgeschlossene Objectives werden dadurch nicht verändert. Du behälst alle Objectives, die Du bereits abgeschlossen hast!

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
* Einstellungsdateien aus früheren Versionen können in AAPS 2.7 nur importiert werden. Der Export wird im neuen Format erfolgen.
* Speichere Deine exportierten Einstellungen nicht nur auf Deinem Smartphone, sondern auch an mindestens einem sicheren Ort (PC, Cloud-Speicher ...).
* Wenn Du die AAPS 2.7 APK mit dem gleichen keystore wie in früheren Versionen erstellst, kannst Du die neue Version installieren, ohne die vorherige Version zu deinstallieren. 
* Alle Einstellungen sowie abgeschlossenen Objectives (Ziele) bleiben so, wie sie in der Vorgängerversion waren.
* Falls Du Deinen keystore verloren hast, erstelle die Version 2.7 mit einem neuen keystore und importiere Deine Einstellungen von der Vorgängerversion wie auf der Seite `Problembehebung <../Installing-AndroidAPS/troubleshooting_androidstudio.html#verlorener-keystore>`_ beschrieben.

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
