# AAPS erstellen

## Kein Download möglich - APK muss selbst erstellt werden

**Die AAPS-App (eine apk-Datei) ist aufgrund der Vorschriften rund um medizinische Geräte nicht zum Download verfügbar. Es ist zulässig, die App für den eigenen Gebrauch zu erstellen, aber du darfst keine Kopie an andere weitergeben!**

Zu den Details schaue bitte auf die [FAQ-Seite](../UsefulLinks/FAQ.md).

---

Die AAPS-App kann auf drei Wegen erstellt werden:

### Mit einem Browser erstellen (empfohlen)

Du kannst die App in einem Webbrowser mit GitHub Actions erstellen. Auf einem Android-Smartphone führt Dich die Einrichtungsseite von [AAPS Builder](#aaps-builder) durch die Schritte, und Du startest jeden Build selbst. Auf einem Computer oder einem iPhone kannst Du auch mit einem Fork erstellen und die App in Deinem Google Drive speichern.

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
## Wenn der Build fehlschlägt

Jede Build-Methode hat einen eigenen Abschnitt zur Fehlerbehebung:

* **AAPS Builder**: [Fehlerbehebung bei AAPS Builder](#aaps-builder-troubleshooting)
* **Browser-Build** von einem Computer oder einem iPhone: [Fehlerbehebung beim Browser-Build](#aaps-ci-troubleshooting)
* **Android Studio**: [Fehlerbehebung bei Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)

Keystore oder sein Passwort verloren? Siehe [AAPS mit einem neuen Keystore neu installieren](#reinstall-aaps).

Wird die App erstellt, aber nicht auf Deinem Smartphone installiert, siehe [AAPS auf Dein Smartphone übertragen und installieren](TransferringAndInstallingAaps.md).

Ist Dein Problem nicht aufgeführt, siehe [Wo bekomme ich Hilfe?](../GettingHelp/WhereCanIGetHelp.md).
