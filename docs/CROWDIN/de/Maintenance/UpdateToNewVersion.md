# Update auf eine neue Version oder einen Branch

## Kein Download möglich - APK muss selbst erstellt werden

Aufgrund der gesetzlichen Regelungen für Medizinprodukte ist **AAPS** nicht als Download verfügbar. Es ist zulässig, die App für den eigenen Gebrauch zu erstellen, aber du darfst keine Kopie an andere weitergeben! Zu den Details schaue bitte auf die [FAQ-Seite](../UsefulLinks/FAQ.md).

## Wichtige Hinweise

- Aktualisiere so bald wie möglich auf die neueste **AAPS**-Version, nachdem sie verfügbar ist.
- Sobald eine neue Version verfügbar ist, wird Dir in der **AAPS**-App ein Hinweis darüber angezeigt.
- Wenn eine neue Version verfügbar ist, wird darüber auch auf Facebook informiert.
- Nach der Veröffentlichung lies bitte die [Versionshinweise](ReleaseNotes.md) (Release Notes) genau durch, und kläre mögliche Fragen in der Community auf Facebook oder Discord, bevor Du mit dem Update weiter machst.
- Aktualisieren von **AAPS** 3.x? Lies zuerst [Änderungen mit AAPS Version 4](V4Changes.md): Dort steht, welche Funktionen verschoben, umbenannt oder entfernt wurden.
- Vergiss nicht, [Deine Einstellungen zu exportieren](ExportImportSettings.md). Wenn Du sie nach dem Update wieder importierst, entscheidest Du, ob auch die Pumpeneinstellungen ersetzt werden.

## AAPS mit Browser-Build aktualisieren

Du hast Deine AAPS-App bereits im Browser erstellt? Folge der Anleitung für die Methode, die Du genutzt hast:

- **AAPS Builder**: Du erstellst die App auf der Seite **Build AAPS** Deines privaten Repositorys (meist `my-aaps` genannt) und lädst sie von GitHub herunter. Folge der Anleitung [AAPS mit dem AAPS Builder aktualisieren](#aaps-builder-updates). Es gibt keinen Fork, der synchronisiert werden muss.
- **Fork und Vorbereitungsdatei**: Du startest den Workflow **AAPS-CI** in Deiner eigenen Kopie (Fork) von AndroidAPS, einem Repository namens `AndroidAPS` in Deinem GitHub-Konto, und die App landet in Deinem Google Drive. Folge der Anleitung [Browser-Update (Fork)](./UpdateBrowserBuild.md).

## AAPS mit Android Studio aktualisieren

Nutze [diese Anleitung](./UpdateComputerBuild.md).

## AAPS über die Befehlszeile aktualisieren

Durchlaufe die [gleichen Schritte](../SettingUpAaps/CLIBuild.md) wie Du es zuvor für das Erstellen AAPS getan hast, aber „pulle“ neue Änderungen über Git.

(Update-to-new-version-check-aaps-version-on-phone)=

## Nach dem Update

Diese Schritte sind bei jeder Methode zum Erstellen gleich. Schaue in den [Release Notes](../Maintenance/ReleaseNotes.md) nach, ob es nach dem Update besondere Dinge zu beachten gibt.

Nach der Installation der neuen APK:

- Du kannst die **AAPS**-Version auf Deinem Smartphone prüfen, indem Du oben links das **Menü** (☰) öffnest und dann **Über** wählst (siehe Screenshot unten). Die aktuelle **AAPS**-Version wird angezeigt
- prüfe, ob die Einstellungen importiert wurden, und
- kontrolliere Deine **AAPS**-Einstellungen unter **Einstellungen** und stelle sicher, dass sie noch stimmen.

![About dialog with the AAPS version installed](../images/about_dialog_version.png)