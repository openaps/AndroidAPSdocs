# Update auf eine neue Version oder einen Branch

## Kein Download möglich - APK muss selbst erstellt werden

Aufgrund der gesetzlichen Regelungen für Medizinprodukte ist **AAPS** nicht als Download verfügbar. Es ist zulässig, die App für den eigenen Gebrauch zu erstellen, aber du darfst keine Kopie an andere weitergeben! Zu den Details schaue bitte auf die [FAQ-Seite](../UsefulLinks/FAQ.md).

## Wichtige Hinweise

- Aktualisiere so bald wie möglich auf die neueste **AAPS**-Version, nachdem sie verfügbar ist.
- Sobald eine neue Version verfügbar ist, wird Dir in der **AAPS**-App ein Hinweis darüber angezeigt.
- Wenn eine neue Version verfügbar ist, wird darüber auch auf Facebook informiert.
- Nach der Veröffentlichung lies bitte die [Versionshinweise](ReleaseNotes.md) (Release Notes) genau durch, und kläre mögliche Fragen in der Community auf Facebook oder Discord, bevor Du mit dem Update weiter machst.
- Vergiss nicht Deine **AAPS**-Einstellungen zu exportieren.

## AAPS mit Browser-Build aktualisieren

Du hast Deine AAPS-App bereits im Browser erstellt? Folge der Anleitung für die Methode, die Du genutzt hast:

- **AAPS Builder** (Dein privates Repository, meist `my-aaps`) genannt: [Aktualisieren mit dem AAPS Builder](#aaps-builder-updates). Es gibt keinen Fork, der synchronisiert werden muss.
- **Fork und Vorbereitungsdatei** (Deine eigene Kopie von AndroidAPS): [Browser-Update (Fork)](./UpdateBrowserBuild.md).

## AAPS mit Android Studio aktualisieren

Nutze [diese Anleitung](./UpdateComputerBuild.md).

## AAPS über die Befehlszeile aktualisieren

Durchlaufe die [gleichen Schritte](../SettingUpAaps/CLIBuild.md) wie Du es zuvor für das Erstellen AAPS getan hast, aber „pulle“ neue Änderungen über Git.

(Update-to-new-version-check-aaps-version-on-phone)=

### AAPS-Version auf dem Smartphone überprüfen

Schaue in den [Release Notes](../Maintenance/ReleaseNotes.md) nach, ob es nach dem Update besondere Dinge zu beachten gibt.

Nach der Installation der neuen APK:

- you can check the **AAPS'** version on your phone by opening the **menu** (☰) on the top left and then **About** (as per the screenshot below). Die aktuelle **AAPS**-Version wird angezeigt
- ensure import settings have been actioned; and
- please check your **AAPS'** settings under **Settings** and ensure these remain accurate.

![About dialog with the AAPS version installed](../images/about_dialog_version.png)