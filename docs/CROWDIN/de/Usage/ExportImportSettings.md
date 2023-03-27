# Einstellungen exportieren & importieren

## Wann sollte man die Einstellungen exportieren?

Sei bereit für das Unvorhergesehene. Vielleicht änderst Du versehentlich wichtige Einstellungen und hast Schwierigkeiten, die Änderungen rückgängig zu machen. Dein Smartphone könnte defekt oder gestohlen werden. Um einfach auf den Stand zurückkehren zu können, an dem Du warst, sollten die Einstellungen regelmäßig exportiert werden.

Die Empfehlung ist, den Export nach einer Änderung der Einstellungen oder dem Abschluss eines Ziels (Objective) durchzuführen.

Kopiere die exportierten Einstellungen auf Deinen Computer oder in einen Cloud-Speicher - sicherer ist es natürlich, wenn Du gleich zwei separate Speicherorte außerhalb Deines Smartphones nutzt. Dann ist Du für den Verlust oder die Beschädigung Deines AAPS-Smartphones vorbereitet und musst nicht wieder bei Null anfangen.

Auf einem Windows 10 PC sieht es in etwa so aus:

```{image} ../images/AAPS_ExImportSettingsWin.png
:alt: AndroidAPS Preferences Datei - Smartphone mit PC verbunden
```

## Exportierte Einstellungen

Neben anderen werden folgende Einstellungen exportiert:

- [Automation](../Usage/Automation.md) Ereignisse
- Einstellungen des [Konfigurations-Generators](../Configuration/Config-Builder.md)
- Einstellungen für das [lokale Profil](Config-Builder-local-profile)
- Übersicht über die [Ziele](../Usage/Objectives.md) (Objectives) und der [Testergebnisse](Objectives-objective-3-prove-your-knowledge)
- [Voreinstellungen](../Configuration/Preferences.md) inkl. der [NS Client Einstellungen](Preferences-nsclient)

## Verschlüsseltes Backup-Format

Das Backup ist durch ein Master-Passwort verschlüsselt. Das Master-Passwort kann in den [Einstellungen](Preferences-master-password) festgelegt werden.

(ExportImportSettings-export-settings)=
## Exportiere die Einstellungen

- Hamburger Menü (drei Striche oben links am Bildschirm)
- Wartung
- Exportiere die Einstellungen

```{image} ../images/AAPS_ExportSettings1.png
:alt: AndroidAPS Export der Einstellungen 1
```

- Datum und Zeit des Exports werden automatisch an den Dateinamen angehängt und zusammen mit dem Pfad angezeigt.
- Klicke auf "OK'.
- Gib' Dein [Master-Passwort](Preferences-master-password) ein und klicke auf 'OK'.
- Der erfolgreiche Export wird am unteren Rand des Bildschirms angezeigt.

```{image} ../images/AAPS_ExportSettings2.png
:alt: AndroidAPS Export der Einstellungen 2
```

(ExportImportSettings-import-settings)=
## Importiere die Einstellungen

**Importiere keine Einstelllungen während einer laufenden Pod Session** - vgl. Hinweise auf der [Omnipod Seite](OmnipodEros-import-settings-from-previous-aaps).

- Hamburger Menü (drei Striche oben links am Bildschirm)
- Wartung
- Importiere die Einstellungen

```{image} ../images/AAPS_ImportSettings1.png
:alt: AndroidAPS Import der Einstellungen 1
```

- Alle Dateien im Verzeichnis AAPS/preferences/ auf Deinem Smartphone werden in der Liste angezeigt.
- Datei auswählen.
- Bestätige den Import durch Klick auf 'OK'.
- Gib' Dein [Master-Passwort](Preferences-master-password) ein und klicke auf 'OK'.

```{image} ../images/AAPS_ImportSettings2.png
:alt: AndroidAPS Import der Einstellungen 2
```

- Details zu der gewählten Datei werden angezeigt.
- Letzte Option zum Abbrechen des Imports.
- Klicke auf 'Importieren'.
- Bestätige die Meldung durch Klick auf 'OK'.
- AAPS wird neu gestartet, um importierte Einstellungen zu aktivieren.

### Hinweis für Dana RS Nutzer

- Da die Verbindungseinstellungen zusammen mit den anderen Einstellungen in AAPS importiert werden, "kennt" AAPS deine Pumpe bereits und startet daher keinen Bluetooth-Scan.
- Bitte stelle die Bluetooth-Verbindung zwischen Smartphone und Pumpe manuell her.

### Einstellungen aus früheren Versionen importieren (vor AAPS 2.7)

- Die “alte” Datei mit den Einstellung (der Dateiname ist 'AndroidAPSPreferences' - ohne Dateiendung) muss sich im Stammordner (root folder) des Smartphones befinden (/storage/emulated/0).
- Lege die "alte" Datei nicht in den gleichen Ordner wie die neuen exportierten Einstellungen (AAPS/Einstellungen).
- Die "alte" Einstellungs-Datei findest Du am Ende der Liste im Import-Dialog.

## Einstellungs-Datei übertragen

- Der beste Weg, um Einstellungs-Datei auf ein neues Telefon zu übertragen, ist über ein USB-Kabel oder einen Cloud-Service (z.B. Google Drive).
- Anleitungen dazu findest Du im Netz, z.B. [Android-Hilfe](https://support.google.com/android/answer/9064445?hl=en).
- Wenn Probleme mit der übertragenen Datei auftreten, versuche eine andere Methode, um die Datei zu übertragen.
