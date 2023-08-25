# Notwendige Überprüfungen nach einem Update von AndroidAPS 2.6

- Der Programmcode wurde bei der Umstellung auf AAPS 2.7 deutlich verändert.
- Daher ist es wichtig, dass Du einige Änderungen vornimmst bzw. die Einstellungen nach der Aktualisierung überprüfst.
- In den [Release Notes](Releasenotes-version-2-7-0) findest Du Details zu allen neuen und verbesserten Funktionen.

## Prüfe die BZ-Quelle

- Prüfe, ob Deine BZ-Quelle nach dem Update noch richtig eingestellt ist.
- Wenn Du z.B. [xDrip+](../Configuration/xdrip.md) nutzt, kann es passieren, dass die BZ-Quelle auf die gepatchte Dexcom App geändert wird.
- Öffne den [Konfigurations-Generator](Config-Builder-bg-source) (Hamburger Menü oben links)
- Scrolle nach unten zu "BZ-Quelle".
- Ändere bei Bedarf die BZ-Quelle.

```{image} ../images/ConfBuild_BG.png
:alt: BZ-Quelle
```

## Prüfung abschließen

- AAPS 2.7 enthält neues Ziel 11 (in späteren auf Ziel 10!) für [Automation](../Usage/Automation.md).
- Du musst zuerst die Tests in ([Ziel 3 und 4](Objectives-objective-3-prove-your-knowledge)) bestanden haben, um mit dem [Ziel 11](Objectives-objective-10-automation) starten zu können.
- Wenn Du z.B. bisher den Test in [Objective 3](../Usage/Objectives-objective-3-prove-your-knowledge) noch nicht beendet hast, musst Du diesen erst abschließen, bevor Du [objective 11](Objectives-objective-10-automation) starten kannst.
- Andere, von Dir bereits abgeschlossene Objectives werden dadurch nicht verändert. Du behälst alle Objectives, die Du bereits abgeschlossen hast!

## Master-Passwort festlegen

- Die [exportierten Einstellungen](../Usage/ExportImportSettings.md) sind ab Version 2.7 verschlüsselt.
- Öffne die Einstellungen (Drei-Punkte-Menü oben rechts)
- Klicke das Dreieck neben "Allgemein".
- Klicke auf "Master-Passwort".
- Gib ein Passwort ein, bestätige es und klicke auf OK.

```{image} ../images/MasterPW.png
:alt: Master-Password festlegen
```

## Exportiere die Einstellungen

- AAPS 2.7 verwendet ein neues verschlüsseltes Backup-Format.
- Du musst daher nach dem Update auf Version 2.7 [Deine Einstellungen exportieren](../Usage/ExportImportSettings.md).
- Einstellungsdateien aus früheren Versionen können in AAPS 2.7 nur importiert werden. Der Export wird im neuen Format erfolgen.
- Speichere Deine exportierten Einstellungen nicht nur auf Deinem Smartphone, sondern auch an mindestens einem sicheren Ort (PC, Cloud-Speicher ...).
- Wenn Du die AAPS 2.7 APK mit dem gleichen Keystore wie in früheren Versionen erstellst, kannst Du die neue Version installieren, ohne die vorherige Version zu deinstallieren.
- Alle Einstellungen sowie abgeschlossenen Objectives (Ziele) bleiben so, wie sie in der Vorgängerversion waren.
- Falls Du Deinen Keystore verloren hast, erstelle die Version 2.7 mit einem neuen keystore und importiere Deine Einstellungen von der Vorgängerversion wie auf der Seite [Problembehebung](troubleshooting_androidstudio-lost-keystore) beschrieben.

## Autosens (Hinweis - keine Maßnahmen erforderlich)

- Autosens wurde von einem statischen zu einem dynamischen Modell geändert. Dies entspricht auch dem Referenzdesign.
- Autosens wechselt nun zwischen einem 8-stündigen und 24-stündigen Zeitfenster für die Berechnung der Sensitivität. Dabei wird das empfindlichere Ergebnis verwendet.
- Wenn Du bisher oref1 genutzt hast, wirst Du wahrscheinlich bemerken, dass das System weniger dynamisch auf Veränderungen reagiert, da zwischen 8 und 24 Stunden gewechselt wird.

## Pumpen-Passwort für Dana RS setzen (wenn Dana RS verwendet wird)

- Das Pumpen-Passwort der [Dana RS](../Configuration/DanaRS-Insulin-Pump.md) wurde in früheren Versionen nicht geprüft.
- Öffne die Einstellungen (Drei-Punkte-Menü oben rechts)
- Scrolle nach unten und klicke das Dreieck neben "Dana RS".
- Klicke auf "Pumpen-Passwort (nur v1)".
- Gib das Passwort der Pumpe ein ([Standard-Passwort](DanaRS-Insulin-Pump-default-password) unterscheidet sich je nach Firmware Version) und klicke OK.

```{image} ../images/DanaRSPW.png
:alt: Dana RS Passwort setzen
```

Wie Du das Passwort Deiner Pumpe ändern kannst, ist auf der [DanaRS Seite](DanaRS-Insulin-Pump-change-password-on-pump) beschrieben.
