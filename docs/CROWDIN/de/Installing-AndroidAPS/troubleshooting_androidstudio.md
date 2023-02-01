(troubleshooting-android-studio)=
# Fehlerbehebung für Android Studio

(lost-keystore)=
## Verlorener Keystore
If you use the same keystore when updating AndroidAPS you do not have to uninstall the previous version on your smartphone. That's why it is recommended to store the keystore in a save place.

If you try to install the apk, signed with a different keystore than before, you will get an error message that the installation failed!

In case you cannot find your old keystore or its password anymore, proceed as follows:

1. [Export settings](../Usage/ExportImportSettings.md#export-settings) on your phone.
2. Kopiere die Datei mit den Einstellungen von deinem Smartphone auf ein externes Gerät (d.h. dein Computer, externe Festplatte) oder lade sie in deinen Cloudspeicher hoch.
4. Erstelle ein signiertes Apk für die neue Version, wie es im [Update Guide](../Installing-AndroidAPS/Update-to-new-version) beschrieben ist und übertrage es auf dein Smartphone.
5. Deinstallieren die Vorgängerversion von AAPS auf Deinem Smartphone.
6. Installiere die neue AAPS-Version auf Deinem Smartphone.
7. [Import settings](../Usage/ExportImportSettings.md#import-settings) to restore your objectives and configuration.
8. Prüfe deine Einstellungen und deaktiviere den Energiesparmodus.

   Falls du die Einstellungen nicht findest, kopiere sie von deinem externen Speicher auf dein Smartphone.
8. Loope weiter!

## Gradle Sync schlägt fehl
Gradle Sync can fail to various reasons. Wen you get a message saying that gradle sync failed, open the "Build" tab (1) at the bottom of Android Studio and check what error message (2) is displayed.

  ![Gradle Failed](../images/studioTroubleshooting/07_GradleSyncFailed2.png)

These are the usual gradle sync failures:
* [Uncommitted changes](#uncommitted-changes)
* [No cached version of ... available](#could-not-resolve-no-cached-version)
* [Android Gradle requires Java 11 to run](#android-gradle-plugin-requires-java-11-to-run)

*Important*: After you have followed the instructions for your specific problem, you need to trigger the [gradle sync](#gradle-resync) again.

### Uncommitted changes

If you receive a failure message like

![Gradle Uncommited Changes](../images/studioTroubleshooting/02_GradleUncommitedChanges.png)

#### Schritt 1 - Überprüfe deine Git Installation
  * Öffne den Terminal Reiter (1) im unteren Bereich von Android Studio und kopiere den folgenden Text, oder tippe ihn ins Terminal ein.
    ```
    git --version
    ```

    ![Gradle Git Version](../images/studioTroubleshooting/03_GitVersion.png)

    Hinweis: Es ist ein Leerzeichen und zwei Bindestriche zwischen git und version!

  * Im Terminal sollte ein Hinweis erscheinen, der übermittelt welche git Version installiert ist (siehe Screenshot oberhalb). In diesem Fall gehe zu [Schritt 2](#step-2-check-for-uncommitted-changes).

  * Falls du einen Hinweis wie diesen bekommst
    ```
    Git: command not found
    ```
    ist deine git Installation fehlerhaft.

  * [Prüfe die git Installation](../Installing-AndroidAPS/git-install.md#check-git-settings-in-android-studio)

  * Falls du mit Windows arbeitest und Git erst kurz zuvor installiert wurde, solltest du deinen Computer neu starten, um Git nach der Installation global verfügbar zu machen

  * Falls Git installiert ist, du deinen Computer neu gestartet hast (wenn du Windows benutzt), und Git immer noch nicht gefunden werden kann:

  * Suche auf deinem Computer nach einer Datei "git.exe".

    Notiere dir den Pfad, wo diese Datei auf dem Computer liegt.

  * Gehe zu den Umgebungsvariablen auf Windows, wähle die Variable "PATH" und klicke bearbeiten. Füge den zuvor notierten Pfad deiner Git Installation hinzu.

  * Speichern und schließen.

  * Starte Android Studio neu.

#### Schritt 2: Prüfe, ob es uncommitted changes gibt.

  * In Android Studio: öffne den "Commit" Tab (1) auf der linken Seite. ![Commit Tab: Uncommitted changes](../images/studioTroubleshooting/04_CommitTabWithChanges.png)
  * Dort siehst du entweder "Default changeset" (2) oder "Unversioned files" (3):

    * Bei "Default changeset", hast du wahrscheinlich Gradle upgedatet oder aus Versehen etwas an einer Datei geändert.

    * Mache einen Rechtsklick auf "Default Changeset" und wähle "Rollback"

      ![Commit Tab: Rollback changes](../images/studioTroubleshooting/05_CommitTabRollback.png)

    * Diese Dateien werden erneut vom Git Server gezogen. Falls keine weiteren Änderungen im Commit Tab zu sehen sind, gehe zu [Schritt 3](#step-3-resync-gradle-again).

  * Falls du "Unversioned Files" sehen kannst, hast du wahrscheinlich Dateien im Sourcecode Projekt abgelegt, die dort nicht hingehören (z.B: deine keystore Datei).

    * Benutze deinen Datei Explorer und verschiebe die Datei an einen Ort, außerhalb des Source Code Projekts.

    * Gehe zurück zu Android Studio und klicke den Refresh Button (4) im Commit Tab, um sicherzustellen, dass die Datei nicht mehr im AndroidAPS Projekt liegt.

      Falls keine weiteren Änderungen im Commit Tab zu sehen sind, gehe zu [Schritt 3](#step-3-resync-gradle-again).


#### Schritt 3: Resync Gradle (erneut)

Follow the instructions at [Gradle Resync](#gradle-resync).

### Das Android Gradle Plugin benötigt Java 11

  You might experience this error message:

  ![Das Android Gradle Plugin benötigt Java 11](../images/studioTroubleshooting/11_GradleJDK.png)

  Click on "Gradle Settings" (1) to go to open the gradle settings.

  If you don't have the link to the "Gradle Settings", open the Gradle settings manually by selecting the Gradle Tab on the right border (1), select the tools icon (2) and there the item 'Gradle Settings' (3).

  ![Gradle Settings](../images/studioTroubleshooting/09_GradleSettings.png)

  When you have opened the Gradle settings dialog, open the options (1) at "Gradle JDK" and selected the "Embedded JDK version" (2).

  ![Gradle Settings](../images/studioTroubleshooting/12_GradleSettingsJDK.png)

  Press "OK" to save and close the settings dialog.

  *Important*: If you don't see the setting "Gradle JDK", you might have not updated Android Studio. Make sure you are using Android Studio 2021.1.1 Bumblebee) or newer.

  Jetzt ist es notwendig einen [Gradle Resync](#gradle-resync) auszulösen

### Could not resolve/No cached version

  You might get this error message:

    ![Could not resolve... No cached version](../images/studioTroubleshooting/08_NoCachedVersion.png)

  * Öffne den Gradle Tab auf der rechten Seite (1).

    Stelle sicher, dass der Button der bei (2) zu sehen ist, *NICHT* selektiert ist.

    ![Gradle Offline Mode](../images/studioTroubleshooting/10_GradleOfflineMode.png)

  * Jetzt ist es notwendig einen [Gradle Resync](#gradle-resync) auszulösen

(unable-to-start-daemon-process)=
### Unable to start daemon process

  If you see an error message like the one below you probably use a Windows 10 32-bit system. This is not supported by Android Studio 3.5.1 and above and unfortunately nothing the AAPS developer can do about.

  If you are using Windows 10 you must use a 64-bit operating system.

  There are a lot of manuals on the internet how to determine wether you have a 32-bit or 64-bit OS - i.e. [this one](https://www.howtogeek.com/howto/21726/how-do-i-know-if-im-running-32-bit-or-64-bit-windows-answers/).

  ![Screenshot Unable to start daemon process](../images/AndroidStudioWin10_32bitError.png)

### Gradle Resync

  If you can still see the message that the gradle sync failed, now select the Link "Try again". ![Gradle Sync Failed Mode](../images/studioTroubleshooting/01_GradleSyncFailed.png)


  If you don't see the a message anymore, you can still trigger this manually:

  * Öffne den Gradle Tab (1) am rechten Rand von Android Studio.

    ![Gradle Reload](../images/studioTroubleshooting/06_GradleResyncManually.png)

  * Rechtsklick auf AndroidAPS (2)

  * Klicke auf "Reload Gradle Project" (3)

## Generate Signed APK generated successfully with 0 build variants

When you generate the signed apk, you might get the notification that generation was successfully but are told that 0 build variants where generated:

![APK generated with 0 build variants](../images/studioTroubleshooting/14_BuildWith0Variants.png)

This is a false warning. Check the directory your selected as "Destination folder" for generation (step [Generate Signed APK](../Installing-AndroidAPS/Building-APK.md#generate-signed-apk)) and you will find the generated apk there!


## App was created with compiler/kotlin warnings

If your build completed successfully but you get compiler or kotlin warnings (indicated by a yellow or blue exclamation mark) then you can just ignore these warnings.

 ![Gradle finished with warnings](../images/studioTroubleshooting/13_BuildWithWarnings.png)

Your app was build successfully and can be transferred to phone!


## Key was created with errors

When creating a new keystore for building the signed APK, on Windows the following error message might appear

![Key was created with errors](../images/AndroidStudio35SigningKeys.png)

This seems to be a bug with Android Studio 3.5.1 and its shipped Java environment in Windows. The key is created correctly but a recommendation is falsely displayed as an error. This can currently be ignored.


## No CGM data is received by AndroidAPS

* Falls Du gepatchte Dexcom G6-App verwendest: Diese App ist veraltet. Use the [BYODA](../Hardware/DexcomG6.md#if-using-g6-with-build-your-own-dexcom-app) app instead.

* In case you are using xDrip+: Identify receiver as described on [xDrip+ settings page](../Configuration/xdrip.md#identify-receiver).


## App not installed

![phone app note installed](../images/Update_AppNotInstalled.png)

* Stelle sicher, dass Du die “app-full-release.apk” auf Dein Smartphone übertragen hast.
* Falls "App not installed" auf dem Smartphone angezeigt wird, gehe wie folgt vor:

1. [Exportiere die Einstellungen](../Usage/ExportImportSettings) (in der AAPS Version, die bereits auf Deinem Smartphone installiert ist)
2. Deinstalliere AAPS auf Deinem Smartphone.
3. Aktiviere den Flugmodus & schalte Bluetooth aus.
4. Installiere die neue Version ("app-full-release.apk").
5. [Importiere die Einstellungen](../Usage/ExportImportSettings)
6. Aktiviere Bluetooth wieder und schalte den Flugmodus aus.

## App installiert, aber weiter die alte Version auf dem Smartphone

If you built the app successfully, transferred it to your phone and installed it successfully but the version number stays the same then you might have missed to [update your local copy](../Installing-AndroidAPS/Update-to-new-version.md#update-your-local-copy)

## Keiner der oben genannten Löungsvorschläge funktioniert

If non of the above tips helped you might consider building the app from scratch:

1. [Exportiere die Einstellungen](../Usage/ExportImportSettings) (in der AAPS Version, die bereits auf Deinem Smartphone installiert ist)

2. Halte Dein key Passwort und Dein key store Passwort bereit. Falls du Passwörter vergessen hast, kannst du versuchen sie in Projekt Dateien wiederzufinden [wie hier beschrieben](https://youtu.be/nS3wxnLgZOo).

    Oder verwende einfach einen neuen keystore.

3. Build app from scratch as described [here](../Installing-AndroidAPS/Building-APK.md#download-androidaps-code).

4. Nachdem Du die APK erfolgreich erstellt hast, kannst Du die App auf Deinem Smartphone deinstallieren. Übertrage dann die neue APK auf Dein Smartphone und installiere diese.
5. [Importiere Einstellungen](../Usage/ExportImportSettings) erneut, um deine Zielsetzungen und Einstellungen wiederherzustellen.
6. Überprüfe deine Einstellungen und deaktiviere den Energiesparmodus erneut.

## Worst case scenario

In case even building the app from scratch does not solve your problem you might want to try to uninstall Android Studio completely. Some Users reported that this solved their problem.

**Make sure to uninstall all files associated with Android Studio.** If you do not completely remove Android Studio with all hidden files, uninstalling may cause new problems instead of solving your existing one(s). Manuals for complete uninstall can be found online i.e.

[https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10](https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10).

Install Android Studio from scratch as described [here](../Installing-AndroidAPS/Building-APK.md#install-android-studio).
