# Notwendige Überprüfungen nach einem Update von AndroidAPS 2.6

- Der Programmcode wurde bei der Umstellung auf AAPS 2.7 deutlich verändert.
- Daher ist es wichtig, dass Du einige Änderungen vornimmst bzw. die Einstellungen nach der Aktualisierung überprüfst.
- Please see [release notes](Releasenotes-version-2-7-0) for details on new and extended features.

## Prüfe die BZ-Quelle

- Prüfe, ob Deine BZ-Quelle nach dem Update noch richtig eingestellt ist.
- Wenn Du z.B. [xDrip+](../Configuration/xdrip.md) nutzt, kann es passieren, dass die BZ-Quelle auf die gepatchte Dexcom App geändert wird.
- Open [Config builder](Config-Builder-bg-source) (hamburger menu on top left side of home screen)
- Scrolle nach unten zu "BZ-Quelle".
- Ändere bei Bedarf die BZ-Quelle.

```{image} ../images/ConfBuild_BG.png
:alt: BZ-Quelle
```

## Prüfung abschließen

- AAPS 2.7 enthält neues Ziel 11 (in späteren auf Ziel 10!) für [Automation](../Usage/Automation.md).
- You have to finish exam ([objective 3 and 4](Objectives-objective-3-prove-your-knowledge)) in order to complete [objective 11](Objectives-objective-10-automation).
- If for example you did not finish the exam in [objective 3](../Usage/Objectives-objective-3-prove-your-knowledge) yet, you will have to complete the exam before you can start [objective 11](Objectives-objective-10-automation).
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
- In case you have lost your keystore build version 2.7 with new keystore and import settings from previous version as described in the [troubleshooting section](troubleshooting_androidstudio-lost-keystore).

## Autosens (Hinweis - keine Maßnahmen erforderlich)

- Autosens wurde von einem statischen zu einem dynamischen Modell geändert. Dies entspricht auch dem Referenzdesign.
- Autosens wechselt nun zwischen einem 8-stündigen und 24-stündigen Zeitfenster für die Berechnung der Sensitivität. Dabei wird das empfindlichere Ergebnis verwendet.
- Wenn Du bisher oref1 genutzt hast, wirst Du wahrscheinlich bemerken, dass das System weniger dynamisch auf Veränderungen reagiert, da zwischen 8 und 24 Stunden gewechselt wird.

## Pumpen-Passwort für Dana RS setzen (wenn Dana RS verwendet wird)

- Das Pumpen-Passwort der [Dana RS](../Configuration/DanaRS-Insulin-Pump.md) wurde in früheren Versionen nicht geprüft.
- Öffne die Einstellungen (Drei-Punkte-Menü oben rechts)
- Scrolle nach unten und klicke das Dreieck neben "Dana RS".
- Klicke auf "Pumpen-Passwort (nur v1)".
- Enter pump password ([Default password](DanaRS-Insulin-Pump-default-password) is different depending on firmware version) and click OK.

```{image} ../images/DanaRSPW.png
:alt: Dana RS Passwort setzen
```

To change password on Dana RS follow instructions on [DanaRS page](DanaRS-Insulin-Pump-change-password-on-pump).
