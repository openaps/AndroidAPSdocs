# Notwendige Überprüfungen nach einem Update von AAPS 2.7

- Der Programmcode wurde bei der Umstellung auf AAPS 2.7 deutlich verändert.
- Daher ist es wichtig, dass Du einige Änderungen vornimmst bzw. die Einstellungen nach der Aktualisierung überprüfst.
- In den [Release Notes](#Releasenotes-version-2-7-0) findest Du Details zu allen neuen und verbesserten Funktionen.

## Prüfe die BZ-Quelle

- Prüfe, ob Deine BZ-Quelle nach dem Update noch richtig eingestellt ist.
- Wenn Du z.B. [xDrip+](../CompatibleCgms/xDrip.md) nutzt, kann es passieren, dass die BZ-Quelle auf die gepatchte Dexcom App geändert wird.
- Öffne die [Konfiguration](#Config-Builder-bg-source) (Hamburger-Menü oben links)
- Scrolle nach unten zu "BZ-Quelle".
- Ändere bei Bedarf die BZ-Quelle.

![BZ-Quelle](../images/ConfBuild_BG.png)

## Prüfung abschließen

- AAPS 2.7 enthält ein neues Ziel 11 (in neueren Versionen dann in Ziel 10 umbenannt!) für [Automation](../DailyLifeWithAaps/Automations.md).
- Die Tests zu [Ziel 3 und 4](#objectives-objective3) müssen abgeschlossen, um Ziel 11 abschließen zu können.
- Falls Du beispielsweise den Test in [Ziel 3](#objectives-objective3) noch nicht abgeschlossen hast, musst Du das tun, bevor Du das Ziel 11 starten kannst.
- Andere, von Dir bereits abgeschlossene Objectives werden dadurch nicht verändert. Du behälst alle Objectives, die Du bereits abgeschlossen hast!

## Master-Passwort festlegen

- Da ab Version 2.7 die Einstellungen verschlüsselt sind, wird ein Passwort benötigt, um die [Einstellungen exportieren](ExportImportSettings.md) zu können.
- Öffne die Einstellungen (Drei-Punkte-Menü oben rechts)
- Klicke das Dreieck neben "Allgemein".
- Klicke auf "Master-Passwort".
- Gib ein Passwort ein, bestätige es und klicke auf OK.

![Master-Passwort festlegen](../images/MasterPW.png)

## Exportiere die Einstellungen

- AAPS 2.7 verwendet ein neues verschlüsseltes Backup-Format.
- Nach dem Update auf Version 2.7 musst Du [Deine Einstellungen exportieren](ExportImportSettings.md).
- Einstellungsdateien aus früheren Versionen können in AAPS 2.7 nur importiert werden. Der Export wird im neuen Format erfolgen.
- Speichere Deine exportierten Einstellungen nicht nur auf Deinem Smartphone, sondern auch an mindestens einem sicheren Ort (PC, Cloud-Speicher ...).
- Wenn Du die AAPS 2.7 APK mit dem gleichen Keystore wie in früheren Versionen erstellst, kannst Du die neue Version installieren, ohne die vorherige Version zu deinstallieren.
- Alle Einstellungen sowie abgeschlossenen Objectives (Ziele) bleiben so, wie sie in der Vorgängerversion waren.
- Falls Du Deinen Keystore verloren hast, erstelle die Version 2.7 mit einem neuen Keystore und importiere Deine Einstellungen aus der Vorgängerversion so wie es auf der Seite [Problembehebung](#troubleshooting_androidstudio-lost-keystore) beschrieben ist.

## Autosens (Hinweis - keine Maßnahmen erforderlich)

- Autosens wurde von einem statischen zu einem dynamischen Modell geändert. Dies entspricht auch dem Referenzdesign.
- Autosens wechselt nun zwischen einem 8-stündigen und 24-stündigen Zeitfenster für die Berechnung der Sensitivität. Dabei wird das empfindlichere Ergebnis verwendet.
- Wenn Du bisher oref1 genutzt hast, wirst Du wahrscheinlich bemerken, dass das System weniger dynamisch auf Veränderungen reagiert, da zwischen 8 und 24 Stunden gewechselt wird.

## Pumpen-Passwort für Dana RS setzen (wenn Dana RS verwendet wird)

- Das Pumpen-Passwort der [Dana RS](../CompatiblePumps/DanaRS-Insulin-Pump.md) wurde in früheren Versionen nicht geprüft.
- Öffne die Einstellungen (Drei-Punkte-Menü oben rechts)
- Scrolle nach unten und klicke das Dreieck neben "Dana RS".
- Klicke auf "Pumpen-Passwort (nur v1)".
- Gib das Passwort der Pumpe ein (das [Standard-Passwort](#DanaRS-Insulin-Pump-default-password) unterscheidet sich je nach Firmware-Version) und klicke auf OK.

![Dana RS Passwort setzen](../images/DanaRSPW.png)

Die Anleitung zum Ändern des Passworts der Dana RS findest Du auf der [DanaRS-Seite](#DanaRS-Insulin-Pump-change-password-on-pump).
