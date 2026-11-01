# Update auf eine neue Version oder einen Branch

## Kein Download möglich - APK muss selbst erstellt werden

Aufgrund der gesetzlichen Regelungen für Medizinprodukte ist **AAPS** nicht als Download verfügbar. Es ist zulässig, die App für den eigenen Gebrauch zu erstellen, aber du darfst keine Kopie an andere weitergeben! Zu den Details schaue bitte auf die [FAQ-Seite](../UsefulLinks/FAQ.md).

## Wichtige Hinweise

- Aktualisiere so bald wie möglich auf die neueste **AAPS**-Version, nachdem sie verfügbar ist.
- Sobald eine neue Version verfügbar ist, wird Dir in der **AAPS**-App ein Hinweis darüber angezeigt.
- Wenn eine neue Version verfügbar ist, wird darüber auch auf Facebook informiert.
- Nach der Veröffentlichung lies bitte die [Versionshinweise](ReleaseNotes.md) (Release Notes) genau durch, und kläre mögliche Fragen in der Community auf Facebook oder Discord, bevor Du mit dem Update weiter machst.
- Aktualisieren von **AAPS** 3.x? Read [What changed in AAPS v4](V4Changes.md) first: it lists the features that moved, were renamed or were removed.
- Do not forget to [export your settings](ExportImportSettings.md). When you import them again after the update, you choose whether the pump settings are replaced too.

## AAPS mit Browser-Build aktualisieren

Du hast Deine AAPS-App bereits im Browser erstellt? Folge der Anleitung für die Methode, die Du genutzt hast:

- **AAPS Builder**: you build from the **Build AAPS** page of your private repository (usually named `my-aaps`) and download the app from GitHub. Follow [Updating AAPS with AAPS Builder](#aaps-builder-updates). Es gibt keinen Fork, der synchronisiert werden muss.
- **Fork and preparation file**: you run the **AAPS-CI** workflow in your own copy (fork) of AndroidAPS, a repository named `AndroidAPS` in your GitHub account, and the app lands in your Google Drive. Follow [Update with a browser (fork)](./UpdateBrowserBuild.md).

## AAPS mit Android Studio aktualisieren

Nutze [diese Anleitung](./UpdateComputerBuild.md).

## AAPS über die Befehlszeile aktualisieren

Durchlaufe die [gleichen Schritte](../SettingUpAaps/CLIBuild.md) wie Du es zuvor für das Erstellen AAPS getan hast, aber „pulle“ neue Änderungen über Git.

(Update-to-new-version-check-aaps-version-on-phone)=

## Nach dem Update

These steps are the same for every build method. Schaue in den [Release Notes](../Maintenance/ReleaseNotes.md) nach, ob es nach dem Update besondere Dinge zu beachten gibt.

Nach der Installation der neuen APK:

- Du kannst die **AAPS**-Version auf Deinem Smartphone prüfen, indem Du oben links das **Menü** (☰) öffnest und dann **Über** wählst (siehe Screenshot unten). Die aktuelle **AAPS**-Version wird angezeigt
- prüfe, ob die Einstellungen importiert wurden, und
- kontrolliere Deine **AAPS**-Einstellungen unter **Einstellungen** und stelle sicher, dass sie noch stimmen.

![About dialog with the AAPS version installed](../images/about_dialog_version.png)