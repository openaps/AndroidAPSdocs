# AAPS erstellen

## Kein Download möglich - APK muss selbst erstellt werden

**Die AAPS-App (eine apk-Datei) ist aufgrund der Vorschriften rund um medizinische Geräte nicht zum Download verfügbar. Es ist zulässig, die App für den eigenen Gebrauch zu erstellen, aber du darfst keine Kopie an andere weitergeben!**

Zu den Details schaue bitte auf die [FAQ-Seite](../UsefulLinks/FAQ.md).

---

Die AAPS-App kann auf drei Wegen erstellt werden:

### Mit einem Browser erstellen (empfohlen)

You can build the app with your smartphone using GitHub Actions. From an Android phone, the [AAPS Builder](#aaps-builder) setup page walks you through it, and you start each build yourself. From a computer or an iPhone, you can also build with a fork and save the app in your Google Drive.

**[Nutze diese Anleitung.](./BrowserBuild.md)**

----

### Mit Android Studio erstellen

Du kannst die App mit Deinem Computer und dem „Android Studio“ erstellen. Früher war dies die einzige Build-Option. Heute wird Android Studio hauptsächlich von Entwicklern, die Code-Änderungen machen möchten, verwendet.

**[Nutze diese Anleitung.](./ComputerBuild.md)**

----

### Mit der Kommandozeile erstellen

Diese Option ist für diejenigen gedacht, die AAPS ohne Android Studio zu installieren über die lokale Kommandozeile erstellen wollen.

**[Nutze diese Anleitung.](./CLIBuild.md)**

----

(building-aaps-troubleshooting)=
## If the build fails

Each build method has its own troubleshooting section:

* **AAPS Builder**: [AAPS Builder troubleshooting](#aaps-builder-troubleshooting)
* **Browser build** from a computer or an iPhone: [Browser build troubleshooting](#aaps-ci-troubleshooting)
* **Android Studio**: [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)

Lost your keystore or its password? See [Reinstalling AAPS with a new keystore](#reinstall-aaps).

If the app is built but does not install on your phone, see [Transferring and installing AAPS](TransferringAndInstallingAaps.md).

If your problem is not listed, see [Where can I get help](../GettingHelp/WhereCanIGetHelp.md).
