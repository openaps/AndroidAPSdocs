# Update auf eine neue Version oder branch

## Kein Download möglich - APK muss selbst erstellt werden

**Aufgrund der gesetzlichen Regelungen für Medizinprodukte ist AndroidAPS nicht als Download verfügbar. Du kannst die App legal für Dich selbst erstellen, darfst aber keine Kopie an andere weitergeben! Weitere Informationen findest Du auf der [FAQ Seite](../Getting-Started/FAQ.md).**

## Wichtige Hinweise

* Wenn eine neue Version erscheint, führe bitte so bald als möglich ein Update durch. Ein [Hinweis auf dem AndroidAPS Startbildschirm](../Installing-AndroidAPS/Releasenotes.html#release-notes) informiert über die neue Version.
* Ab Version 2.3 muss für das Update git genutzt werden. Ein Update mittels ZIP-File ist nicht mehr möglich.
* Nutze bitte [Android Studio Version 3.6.1](https://developer.android.com/studio/) oder neuer, um die APK-Datei zu erstellen.
* [Windows 10 32-bit Systeme](../Installing-AndroidAPS/troubleshooting_androidstudio#unable-to-start-daemon-process) werden bei Android Studio 3.6.1 nicht unterstützt.
* Wenn Du xDrip verdwendet, stelle sicher, dass [identifiziere Empfänger](../Configuration/xdrip#identifiziere-empfanger) gesetzt ist.
* Wenn Du den Dexcom G6 mit der [gepatchted Dexcom app](../Hardware/DexcomG6#if-using-g6-with-patched-dexcom-app) verwendest, dann musst Du die Version aus dem [2.4 Verzeichnis](https://github.com/dexcomapp/dexcomapp/tree/master/2.4) installiert haben.

## Kurzanleitung für erfahrene Anwender

Bitte überspringe diesen Absatz, wenn Du zum ersten Mal aktualisierst. Die Kurzanleitung ist für erfahrene Anwender. Dein nächster Schritt ist, [git zu installieren](../Installing-AndroidAPS/git-install.rst) wenn das Programm bisher nicht auf Deinem Computer installiert ist.

Wenn Du AAPS bereits in früheren Versionen aktualisiert hast und einen Windows-PC verwendest, kannst Du in vier einfachen Schritten aktualisieren:

1. [Exportiere Deine Einstellungen](../Usage/ExportImportSettings#exportieren-der-einstellungen) von der "alten" AAPS Version auf Deinem Smartphone, um auf der sicheren Seite zu sein.
2. [Aktualisiere Deine lokale Kopie](../Installing-AndroidAPS/Update-to-new-version#update-your-local-copy) (VCS->Git->Pull)
3. [Erstelle die signierte APK-Datei](../Installing-AndroidAPS/Update-to-new-version#generate-signed-apk) (Generate signed APK - Wähle dabei 'app' statt 'wear' im Dialogfeld!)
4. Je nach [BZ-Quelle](../Configuration/BG-Source.rst) stelle sicher, dass [identifiziere Empfänger](../Configuration/xdrip#identifiziere-empfanger) in xDrip gesetzt ist or verwende die gepatchte Dexcom App aus dem [2.4 Ordner](https://github.com/dexcomapp/dexcomapp/tree/master/2.4).

## Installiere git (falls du es noch nicht hast)

Die Schritt-für-Schritt-Anleitung findest Du auf der Seite zur [git Installation](../Installing-AndroidAPS/git-install.rst).

## Führe ein Update deiner lokalen Version durch

* Klicke: VCS -> Git -> Pull
    
    ![Android Studio - GIT - Pull](../images/AndroidStudio361_Update01.png)

* Klicke auf Pull (keine Änderungen im Dialogfeld erforderlich)
    
    ![Android Studio - GIT - Pull 2](../images/AndroidStudio361_Update02.png)

* Wait while download is in progress.
    
    ![Android Studio - Pull in progress](../images/AndroidStudio361_Update03.png)

* When done Android Studio will inform you that "all files are up-to-date".
    
    ![All files up to date](../images/AndroidStudio361_Update04.png)

## Signierte APK erstellen (Generate signed APK)

<!--- Text is maintained in page building-apk.md --->

* Click "Build" in the menu bar and select "Generate Signed Bundle / APK...".

![Build apk](../images/AndroidStudio361_27.png)

* Select "APK" (1.) instead of "Android App Bundle" and click "Next" (2.).

![APK instead of bundle](../images/AndroidStudio361_28.png)

* Make sure that module is set to "app".
* Select your key store path by clicking on "Choose existing...".
* Enter your passwords for key store and key.
* If the box to remember passwords is checked you don't have to enter them. In case the box was not checked during last build and you cannot remember the passwords refer to the [troubleshooting section](../Installing-AndroidAPS/troubleshooting_androidstudio#lost-keystore).
* Click "Next".

![Key store](../images/AndroidStudio361_Update05.png)

* Select build variant "fullRelease" (1.). 
* Check boxes V1 and V2 for signature versions (2.).
* Click "Finish". (3.)

![Finish build](../images/AndroidStudio361_32.png)

* Android Studio will display the information "APK(s) generated successfully..." after build is finished.
* In case build was not successful refer to the [troubleshooting section](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).
* Easiest way to find the apk is to click on "Event log".

![Build successfully - event log](../images/AndroidStudio361_33.png)

* In the event log section click "locate".

![Event log - locate apk](../images/AndroidStudio361_34.png)

* app-full-release.apk is the file you are looking for.

![File location apk](../images/AndroidStudio361_35.png)

## Übertrage die APK-Datei auf das Smartphone

Easiest way to transfer app-full-release.apk to your phone is via [USB cable or Google Drive](https://support.google.com/android/answer/9064445?hl=en). Please note that transfer by mail might cause difficulties and is not the preferred way.

On your phone you have to allow installation from unknown sources. Manuals how to do this can be found on the internet (i.e. [here](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) or [here](https://www.androidcentral.com/unknown-sources)).

## AAPS-Version auf dem Smartphone überprüfen

You can check the AAPS version on your phone by clicking the three dots menu on the top right and then about.

![AAPS version installed](../images/Update_VersionCheck.png)

## Problembehandlung

Siehe die separate Seite zur [Problembehandlung bei Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).