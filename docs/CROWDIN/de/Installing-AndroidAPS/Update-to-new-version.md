# Update auf eine neue Version oder branch

## Kein Download möglich - APK muss selbst erstellt werden

**Aufgrund der gesetzlichen Regelungen für Medizinprodukte ist AndroidAPS nicht als Download verfügbar. Du kannst die App legal für Dich selbst erstellen, darfst aber keine Kopie an andere weitergeben! Weitere Informationen findest Du auf der [FAQ Seite](../Getting-Started/FAQ.md).**

## Wichtige Hinweise

* Wenn eine neue Version erscheint, führe bitte so bald als möglich ein Update durch. You will receive an [information on the AndroidAPS home screen](../Installing-AndroidAPS/Releasenotes.md#release-notes) about the new version.
* Ab Version 2.7 wurde der Speicherort des Repositories auf <https://github.com/nightscout/AndroidAPS> geändert. Wenn Du Dich mit git nicht auskennst, ist es am einfachsten, wenn Du das vorhandene AndroidAPS-Verzeichnis entfernst und die [App-Erstellung von vorne](../Installing-AndroidAPS/Building-APK.md) beginnst.
* Nutze bitte **[Android Studio Version 2020.3.1 (Arctic Fox)](https://developer.android.com/studio/)** oder neuer, um die APK-Datei zu erstellen.
* [Windows 10 32-bit systems](../Installing-AndroidAPS/troubleshooting_androidstudio.md#unable-to-start-daemon-process) are not supported by Android Studio 2020.3.1.
* Lies die [Release Notes](../Installing-AndroidAPS/Releasenotes) für die aktuelle Version

## Übersicht zum Aktualisieren Deiner AndroidAPS-Version

1. [Export your settings](../Usage/ExportImportSettings.md#export-settings) from the existing AAPS version on your phone. Vielleicht brauchst Du sie nicht, aber sicher ist sicher.
2. [Update local copy](../Installing-AndroidAPS/Update-to-new-version.md#update-your-local-copy) of the AndroidAPS sourcecode (Git->Fetch and Git -> Pull)
3. [Erstelle signierte APK](../Installing-AndroidAPS/Update-to-new-version.md#build-the-signed-apk)
4. [Transfer the built apk](../Installing-AndroidAPS/Building-APK.md#transfer-apk-to-smartphone) to your phone and install it
5. [Prüfe die Version](#aaps-version-auf-dem-smartphone-uberprufen) in AndroidAPS
6. Depending on your [BG source](../Configuration/BG-Source.md) make sure to [identify receiver](../Configuration/xdrip.md#identify-receiver) in xDrip or use the ['Build your own Dexcom App'](../Hardware/DexcomG6.md#if-using-g6-with-build-your-own-dexcom-app).

Für den Fall, dass Probleme auftreten, findest Du Lösungsansätze auf der separaten Seite für [Fehlerbehebung von Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio).

## 1. Exportiere Deine Einstellungen

See the [Export & import settings](../Usage/ExportImportSettings.md#export-settings) page if you don't remember how to do this.

(update-your-local-copy)=

## 2. Führe ein Update deiner lokalen Version durch

Ab Version 2.7 wurde der Speicherort des Repositories auf <https://github.com/nightscout/AndroidAPS> geändert. If you are not familiar with git the easiest way for update is remove directory with AndroidAPS on your disk and follow the instructions to do a [New clone](../Installing-AndroidAPS/Building-APK.md).

If you have already changed the URL or update from version 2.8.x, follow these steps:

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

(build-the-signed-apk)=

## 3. Erstelle die signierte APK

Your sourcecode is now the current released version. It's time to build the signed apk from it as described in the [build signed apk section](../Installing-AndroidAPS/Building-APK.md#generate-signed-apk).

## 4. Übertrage die APK-Datei

You need to transfer the apk to your phone so you can install it.

See the instructions for [Transfer APK to smartphone](../Installing-AndroidAPS/Building-APK.md#transfer-apk-to-smartphone)

## 5. APK installieren

Auf dem Smartphone musst Du die Installation aus unbekannten Quellen zulassen. Anleitungen dazu findest Du im Internet (z.B. hier</0a> oder [hier](https://www.androidcentral.com/unknown-sources)). Note: If you completed the build with the same existing key store in Android Studio, then you do not need to remove the existing app on your phone. When you install the apk, follow the prompts to install updates. For other scenarios such as establishing a new key store in Android Studio for your signed apk, you will need to delete the old app before installing the apk.</p> 

## 6. AAPS-Version auf dem Smartphone überprüfen

After you installed the new apk, you can check the AAPS version on your phone by clicking the three dots menu on the top right and then About. You should see the current version.

![AAPS version installed](../images/Update_VersionCheck282.png)

# Problembehandlung

If anything goes wrong, don't panic.

Take a breath!

Then see the separate page [troubleshooting Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio) if your problem is already documented!