(troubleshooting_androidstudio-troubleshooting-android-studio)=
# Fehlerbehebung für Android Studio

(troubleshooting_androidstudio-lost-keystore)=
## Verlorener Keystore
Wenn Du beim Update von AAPS denselben "Keystore" verwendest, musst Du die Vorgängerversion von AAPS auf Deinem Smartphone nicht deinstallieren. Daher wird empfohlen, den Keystore an einem sicheren Platz zu speichern.

Wenn Du versuchst das apk zu installieren und es mit einem anderen keystore signiert wurde als zuvor, bekommst Du einen Fehler, dass die Installation fehlgeschlagen ist!

Falls Du deinen alten keystore oder das dazugehörige Passwort nicht mehr wiederfindest, kannst Du wie folgt vorgehen:

1. [Export settings](../Maintenance/ExportImportSettings.md) on your phone.
2. Kopiere die Datei mit den Einstellungen von deinem Smartphone auf ein externes Gerät (d.h. dein Computer, externe Festplatte) oder lade sie in deinen Cloudspeicher hoch.
4. Generate signed apk of new version as described on the [Update guide](../Maintenance/UpdateToNewVersion) and transfer it to your phone.
5. Deinstallieren die Vorgängerversion von AAPS auf Deinem Smartphone.
6. Installiere die neue AAPS-Version auf Deinem Smartphone.
7. [Import settings](#ExportImportSettings-restoring-from-your-backups-on-a-new-phone-or-fresh-installation-of-aaps) to restore your objectives and configuration.

   Falls du die Einstellungen nicht findest, kopiere sie von deinem externen Speicher auf dein Smartphone.

8. Prüfe deine Einstellungen und deaktiviere den Energiesparmodus.
9. Loope weiter!

## Gradle Sync schlägt fehl
Der Gradle Sync kann aus verschiedenen Gründen fehlschlagen. Falls Du einen Hinweis bekommst, dass der Gradle Sync fehlgeschlagen ist ("Gradle Sync failed"), öffne den "Build" Reiter (1) im unteren Bereich von Android Studio und überprüfe welche Fehlermeldung (2) du angezeigt bekommst.

  ![Gradle Failed](../images/studioTroubleshooting/07_GradleSyncFailed2.png)

Das sind die üblichen Gradle Sync Fehler:
* [Uncommitted changes](#uncommitted-changes)
* [No cached version of ... available](#could-not-resolveno-cached-version)
* [Incompatible Gradle JVM](#incompatible-gradle-jvm)
* [Incompatible version of the Android Gradle plugin](#incompatible-version-of-android-gradle-plugin)

*Important*: After you have followed the instructions for your specific problem, you need to trigger the [gradle sync](#gradle-resync) again.

(troubleshooting_androidstudio-uncommitted-changes)=
### Uncommitted changes

Falls Du eine Fehlermeldung bekommst, die so aussieht

![Gradle Uncommited Changes](../images/studioTroubleshooting/02_GradleUncommitedChanges.png)

#### Schritt 1 - Überprüfe deine Git Installation
  * Öffne den Terminal Reiter (1) im unteren Bereich von Android Studio und kopiere den folgenden Text, oder tippe ihn ins Terminal ein.
    ```
    git --version
    ```

    ![Gradle Git Version](../images/studioTroubleshooting/03_GitVersion.png)

    Hinweis: Es ist ein Leerzeichen und zwei Bindestriche zwischen git und version!

  * Im Terminal sollte ein Hinweis erscheinen, der übermittelt welche git Version installiert ist (siehe Screenshot oberhalb). In this case, go to [Step 2](#troubleshooting-android-studio-check-for-uncommitted-changes).

  * Falls du einen Hinweis wie diesen bekommst
    ```
    Git: command not found
    ```
    ist deine git Installation fehlerhaft.

  * [Prüfe die git Installation](#BuildingAaps-steps-for-installing-git)

  * Falls du mit Windows arbeitest und Git erst kurz zuvor installiert wurde, solltest du deinen Computer neu starten, um Git nach der Installation global verfügbar zu machen

  * Falls Git installiert ist, du deinen Computer neu gestartet hast (wenn du Windows benutzt), und Git immer noch nicht gefunden werden kann:

  * Suche auf deinem Computer nach einer Datei "git.exe".

    Notiere dir den Pfad, wo diese Datei auf dem Computer liegt.

  * Gehe zu den Umgebungsvariablen auf Windows, wähle die Variable "PATH" und klicke bearbeiten. Füge den zuvor notierten Pfad deiner Git Installation hinzu.

  * Speichern und schließen.

  * Starte Android Studio neu.

(troubleshooting-android-studio-check-for-uncommitted-changes)=
#### Schritt 2: Prüfe, ob es uncommitted changes gibt.

  * In Android Studio: öffne den "Commit" Tab (1) auf der linken Seite. ![Commit Tab: Uncommitted changes](../images/studioTroubleshooting/04_CommitTabWithChanges.png)
  * Dort siehst du entweder "Default changeset" (2) oder "Unversioned files" (3):

    * Bei "Default changeset", hast du wahrscheinlich Gradle upgedatet oder aus Versehen etwas an einer Datei geändert.

    * Mache einen Rechtsklick auf "Default Changeset" und wähle "Rollback"

      ![Commit Tab: Rollback changes](../images/studioTroubleshooting/05_CommitTabRollback.png)

    * Diese Dateien werden erneut vom Git Server gezogen. If there are no other changes in the commit tab, go to [Step 3](#gradle-resync).

  * Falls du "Unversioned Files" sehen kannst, hast du wahrscheinlich Dateien im Sourcecode Projekt abgelegt, die dort nicht hingehören (z.B: deine keystore Datei).

    * Benutze deinen Datei Explorer und verschiebe die Datei an einen Ort, außerhalb des Source Code Projekts.

    * Gehe zurück zu Android Studio und klicke den Refresh Button (4) im Commit Tab, um sicherzustellen, dass die Datei nicht mehr im AAPS-Ordner liegt.

      If there are no other changes in the commit tab, go to [Step 3](#gradle-resync).


(troubleshooting_androidstudio-step-3-gradle-resync)=

#### Schritt 3: Resync Gradle (erneut)

Follow the instructions at [Gradle Resync](#gradle-resync).

(troubleshooting_androidstudio-android-gradle-plugin-requires-java-11-to-run)=

(incompatible-gradle-jvm)=
### Incompatible Gradle JVM

![Incompatible Gradle JVM](../images/studioTroubleshooting/160_InkompatibelAndroidGradleJVM.png) If you experience the following error message, you need to download a correct JVM version before you can try again:
* Open the gradle view by clicking on the elephant (1) on the right side of Android Studio and open the settings (2) and select **Gradle Settings** (3):

![Open Gradle Settings](../images/studioTroubleshooting/161_GradleSettings.png)

* Open the **Gradle JDK** options, then select **Download JDK...**

![Select Download JDK](../images/studioTroubleshooting/162_DownloadJDK.png)

* At **Version** (1), you need to select **17**. Then select the **JetBrains Runtime** from the **Vendor** (2) options. Do not change the **Location** (3).

![Select JDK 17](../images/studioTroubleshooting/163_JDKSelection.png)

* Close the **Settings** dialog with **OK**.
* You now need to restart the Gradle Sync. Follow the instructions at [Gradle Resync](#gradle-resync).

(incompatible-version-of-android-gradle-plugin)=
### Inkompatibilität der Android Gradle Plugin Version

  Wenn Du die folgende Fehlermeldung erhältst,

  ![Inkompatibilität der Android Gradle Plugin Version](../images/studioTroubleshooting/15_InkompatibelAndroidGradlePlugin.png)

  nutzt Du eine veraltete Version des Android Studios. Gehe im Menü zu Help > Check for updates und installiere die neueste Version des Android Studios und deren Plugins.

(troubleshooting_androidstudio-could-not-resolve-no-cached-version)=
### Could not resolve/No cached version

  Wahrscheinlich siehst Du diese Fehlermeldung:

![Could not resolve... No cached version](../images/studioTroubleshooting/08_NoCachedVersion.png)

  * Öffne den Gradle Tab auf der rechten Seite (1).

    Stelle sicher, dass der Button der bei (2) zu sehen ist, *NICHT* selektiert ist.

    ![Gradle Offline Mode](../images/studioTroubleshooting/10_GradleOfflineMode.png)

  * Now you need to trigger a [Gradle Resync](#gradle-resync)

(troubleshooting_androidstudio-unable-to-start-daemon-process)=
### Unable to start daemon process

  Wenn Du eine Fehlermeldung wie die unten siehst, verwendest Du wahrscheinlich ein Windows 10 32-Bit-Betriebssystem. This is not supported by Android Studio 3.5.1 and above and unfortunately nothing the AAPS developer can do about!

  Es gibt im Internet eine Reihe von Anleitungen (wie z.B. [diese](https://support.microsoft.com/en-us/windows/32-bit-and-64-bit-windows-frequently-asked-questions-c6ca9541-8dce-4d48-0415-94a3faa2e13d)), die beschreiben, wie Du herausfindest, ob Du ein 32-Bit oder 64-Bit Betriebssystem hast.

  ![Screenshot konnte den Daemon-Prozess nicht starten](../images/AndroidStudioWin10_32bitError.png)

(gradle-resync)=
### Gradle Resync

  Falls Du immer noch den Hinweis sehen kannst, dass der Gradle sync fehlgeschlagen ist, wähle den Link "Try again".  ![Gradle Sync fehlgeschlagen Modus](../images/studioTroubleshooting/01_GradleSyncFailed.png)


  Falls Du den Hinweis nicht mehr siehst, kannst Du das auch manuell auswählen:

  * Öffne den Gradle Tab (1) am rechten Rand von Android Studio.

    ![Gradle Reload](../images/studioTroubleshooting/06_GradleResyncManually.png)

  * Rechtsklick auf AAPS (2)

  * Klicke auf "Reload Gradle Project" (3)

## Generate Signed APK generated successfully with 0 build variants

Wenn Du die Apk generierst, bekommst Du möglicherweise den Hinweis, dass das Generieren zwar erfolgreich war, aber, dass keine build variants generiert wurden:

![APK mit 0 Build-Varianten erstellt](../images/studioTroubleshooting/14_BuildWith0Variants.png)

Diese Warnung ist falsch. Check the directory your selected as "Destination folder" for generation (step [Generate Signed APK](#Building-APK-generate-signed-apk)) and you will find the generated apk there!


## App was created with compiler/kotlin warnings

Falls Dein Build erfolgreich durchgelaufen ist, Du aber Warnungen vom Compiler oder Kotlin bekommst (diese zeigen sich durch ein gelbes oder blaues Ausrufezeichen), kannst Du diese Warnungen einfach ignorieren.

 ![Gradle mit Warnungen beendet](../images/studioTroubleshooting/13_BuildWithWarnings.png)

Deine App wurde erfolgreich gebaut und kann aufs Smartphone übertragen werden!


## Key was created with errors

Beim Erstellen eines neuen Keystores zum Erstellen der signierten APK wird unter Windows möglicherweise die folgende Fehlermeldung angezeigt:

![Key was created with errors](../images/AndroidStudio35SigningKeys.png)

Dies scheint ein Fehler in Android Studio 3.5.1 und seiner Java-Umgebung in Windows zu sein. Der Schlüssel wird korrekt erstellt, aber eine Empfehlung wird fälschlicherweise als Fehler angezeigt. Dies kann momentan ignoriert werden.


## AAPS empfängt keine CGM-Daten

* Falls Du gepatchte Dexcom G6-App verwendest: Diese App ist veraltet. Use the [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) app instead.

* In case you are using xDrip+: Identify receiver as described on [xDrip+ settings page](#xdrip-identify-receiver).


## App not installed

![Smartphone Meldung App nicht installiert](../images/Update_AppNotInstalled.png)

* Stelle sicher, dass Du die “app-full-release.apk” auf Dein Smartphone übertragen hast.
* Falls "App not installed" auf dem Smartphone angezeigt wird, gehe wie folgt vor:

1. [Export settings](../Maintenance/ExportImportSettings.md) (in AAPS version already installed on your phone)
2. Deinstalliere AAPS auf Deinem Smartphone.
3. Aktiviere den Flugmodus & schalte Bluetooth aus.
4. Installiere die neue Version ("app-full-release.apk").
5. [Importiere die Einstellungen](../Maintenance/ExportImportSettings.md)
6. Aktiviere Bluetooth wieder und schalte den Flugmodus aus.

## App installiert, aber weiter die alte Version auf dem Smartphone

If you built the app successfully, transferred it to your phone and installed it successfully but the version number stays the same then you might have missed to [update your local copy](#Update-to-new-version-update-your-local-copy)

## Keiner der oben genannten Löungsvorschläge funktioniert

Falls die oben genannten Tipps Dich nicht weiter bringen, kannst Du überlegen, die App von Grund auf neu zu erstellen.

1. [Export settings](../Maintenance/ExportImportSettings.md) (in AAPS version already installed on your phone)

2. Halte Dein key Passwort und Dein key store Passwort bereit. Falls du Passwörter vergessen hast, kannst du versuchen sie in Projekt Dateien wiederzufinden [wie hier beschrieben](https://youtu.be/nS3wxnLgZOo).

    Oder verwende einfach einen neuen keystore.

3. Build app from scratch as described [here](#Building-APK-download-AAPS-code).

4. Nachdem Du die APK erfolgreich erstellt hast, kannst Du die App auf Deinem Smartphone deinstallieren. Übertrage dann die neue APK auf Dein Smartphone und installiere diese.
5. [Import settings](../Maintenance/ExportImportSettings.md) again to restore your objectives and settings.
6. Überprüfe deine Einstellungen und deaktiviere den Energiesparmodus erneut.

## Worst case scenario

Falls auch die Neuerstellung der App von Grund auf Dein Problem nicht löst, könntest Du versuchen, Android Studio komplett neu zu installieren. Einige Benutzer berichteten, dass dies ihr Problem gelöst hat.

**Stelle sicher, dass du alle Dateien, die in Verbindung mit Android Studio stehen, deinstallierst.** Falls du Android Studio nicht mit allen versteckten Dateien löscht, können beim Deinstallieren neue Probleme auftreten, anstatt dass Deine bestehenden Probleme gelöst werden. Anleitungen zur kompletten Deinstallation findest Du online z.B.

[https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10](https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10).

Install Android Studio from scratch as described [here](#Building-APK-install-android-studio).
