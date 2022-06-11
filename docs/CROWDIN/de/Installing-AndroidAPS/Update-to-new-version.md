# Update auf eine neue Version oder branch

## Kein Download möglich - APK muss selbst erstellt werden

**Aufgrund der gesetzlichen Regelungen für Medizinprodukte ist AndroidAPS nicht als Download verfügbar. Du kannst die App legal für Dich selbst erstellen, darfst aber keine Kopie an andere weitergeben! Weitere Informationen findest Du auf der [FAQ Seite](../Getting-Started/FAQ.md).**

## Wichtige Hinweise

* Wenn eine neue Version erscheint, führe bitte so bald als möglich ein Update durch. Ein [Hinweis auf dem AndroidAPS Startbildschirm](../Installing-AndroidAPS/Releasenotes#release-notes) informiert über die neue Version.
* Ab Version 2.7 wurde der Speicherort des Repositories auf <https://github.com/nightscout/AndroidAPS> geändert. Wenn Du Dich mit git nicht auskennst, ist es am einfachsten, wenn Du das vorhandene AndroidAPS-Verzeichnis entfernst und die [App-Erstellung von vorne](../Installing-AndroidAPS/Building-APK.md) beginnst.
* Nutze bitte **[Android Studio Version 2020.3.1 (Arctic Fox)](https://developer.android.com/studio/)** oder neuer, um die APK-Datei zu erstellen.
* [Windows 10 32-bit Systeme](../Installing-AndroidAPS/troubleshooting_androidstudio#unable-to-start-daemon-process) werden bei Android Studio 2020.3.1 nicht unterstützt.
* Lies die [Release Notes](../Installing-AndroidAPS/Releasenotes) für die aktuelle Version

## Übersicht zum Aktualisieren Deiner AndroidAPS-Version

1. [Exportiere Deine Einstellungen](../Usage/ExportImportSettings#exportiere-die-einstellungen) von der "alten" AAPS Version auf Deinem Smartphone. Vielleicht brauchst Du sie nicht, aber sicher ist sicher.
2. Führe ein [Update Deiner lokalen Kopie](../Installing-AndroidAPS/Update-to-new-version#update-your-local-copy) des AndroidAPS Sourcecodes durch (Git->Fetch und Git -> Pull).
3. [Erstelle signierte APK](../Installing-AndroidAPS/Update-to-new-version#build-the-signed-apk)
4. [Übertrage die erstellte APK-Datei](../Installing-AndroidAPS/Building-APK#transfer-apk-to-smartphone) auf Dein Smartphone und installiere sie.
5. [Prüfe die Version](#aaps-version-auf-dem-smartphone-uberprufen) in AndroidAPS
6. Stelle abhängig von Deiner [BZ-Quelle](../Configuration/BG-Source.rst) sicher, dass Du ['identify receiver'](../Configuration/xdrip#identify-receiver) in xDrip+ gesetzt hast oder verwende die ['Build your own Dexcom App'](../Hardware/DexcomG6#if-using-g6-with-build-your-own-dexcom-app).

Für den Fall, dass Probleme auftreten, findest Du Lösungsansätze auf der separaten Seite für [Fehlerbehebung von Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio).

## 1. Exportiere Deine Einstellungen

Die Anleitung findest Du auf der Seite [Einstellungen exportieren & importieren](../Usage/ExportImportSettings#exportiere-die-einstellungen) falls Du Dir nicht mehr sicher bist, wie dies genau funktioniert.

## 2. Führe ein Update deiner lokalen Version durch

Ab Version 2.7 wurde der Speicherort des Repositories auf <https://github.com/nightscout/AndroidAPS> geändert. Wenn Du Dich mit git nicht auskennst, ist es am einfachsten, wenn Du das vorhandene AndroidAPS-Verzeichnis entfernst und die [App-Erstellung von vorne](../Installing-AndroidAPS/Building-APK.md) beginnst.

Wenn Du die URL bereits geändert hast oder von Version 2.8.x updatest, folge diesen Schritten:

* Öffne Dein existierendes AndroidAPS Projekt mit Android Studio. Möglicherweise musst Du Dein Projekt wählen. Doppelklicke auf das AndroidAPS Projekt.
    
    ![Android Studio - Projekt auswählen](../images/update/01_ProjectSelection.png)

* Wähle in der Menüleiste von Android Studio Git -> Fetch.
    
    ![Android Studio Menü - Git - Fetch](../images/update/02_GitFetch.png)

* Unten rechts wird Dir eine Meldung angezeigt, sobald der Fetch erfolgreich durchgeführt wurde.
    
    ![Android Studio Menü - Git - Fetch erfolgreich](../images/update/03_GitFetchSuccessful.png)

* Wähle nun in der Menüleiste Git -> Pull.
    
    ![Android Studio Menü - Git - Pull](../images/update/04_GitPull.png)

* Lasse alle Optionen wie sie sind (Original/Master) und wähle Pull.
    
    ![Android Studio - Git - Pull-Dialog](../images/update/05_GitPullOptions.png)

* Warte ab, während der Download läuft. Du siehst dazu einen Hinweis in der Fußzeile. Eine Erfolgsmeldung wird angezeigt, so bald erfolgreich heruntergeladen wurde. Hinweis: Die Zahl der Dateien, die aktualisiert wurden, kann variieren! Dies ist kein Hinweis auf einen Download-Fehler.
    
    ![Android Studio - Pull erfolgreich](../images/update/06_GitPullSuccess.png)

* Gradle Sync wird ein paar Sekunden benötigen, um einige Abhängigkeiten herunterzuladen. Warte, bis es fertig ist.
    
    ![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

## 3. Erstelle die signierte APK

Your sourcecode is now the current released version. Es ist an der Zeit, die signierte apk wie im [Build signed apk Abschnitt](../Installing-AndroidAPS/Building-APK#generate-signed-apk) beschrieben.

## 4. Übertrage die APK-Datei

Du musst die APK-Datei auf Dein Smartphone übertragen, um sie dort installieren zu können.

See the instructions for [Transfer APK to smartphone](../Installing-AndroidAPS/Building-APK#transfer-apk-to-smartphone)

## 5. Install apk

Auf dem Smartphone musst Du die Installation aus unbekannten Quellen zulassen. Anleitungen dazu findest Du im Internet (z.B. [hier](https://mobilsicher.de/ratgeber/apps-aus-apk-datei-installieren-mit-android-8) oder [hier](https://www.tutonaut.de/anleitung-android-apps-unbekannten-quellen-installieren/)).

## 6. AAPS-Version auf dem Smartphone überprüfen

After you installed the new apk, you can check the AAPS version on your phone by clicking the three dots menu on the top right and then About. You should see the current version.

![Installierte AAPS Version](../images/Update_VersionCheck282.png)

# Problembehandlung

If anything goes wrong, don't panic.

Take a breath!

Wirf dann einen Blick auf die Lösungsansätze der separaten Seite zur [Fehlerbehebung für Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio). In den meisten Fällen dürfte Dein Problem und eine Lösung dort zu finden sein.