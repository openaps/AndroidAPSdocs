(troubleshooting_androidstudio-troubleshooting-android-studio)=
# Fehlerbehebung für Android Studio

(troubleshooting_androidstudio-lost-keystore)=
## Verlorener Keystore
Wenn Du beim Update von AndroidAPS den selben Keystore verwendest, musst Du die Vorgängerversion von AAPS auf Deinem Smartphone nicht deinstallieren. Daher wird empfohlen, den Keystore an einem sicheren Platz zu speichern.

Wenn Du versuchst das apk zu installieren und es mit einem anderen keystore signiert wurde als zuvor, bekommst Du einen Fehler, dass die Installation fehlgeschlagen ist!

Falls Du deinen alten keystore oder das dazugehörige Passwort nicht mehr wiederfindest, kannst Du wie folgt vorgehen:

1. [Einstellungen exportieren](ExportImportSettings-export-settings) auf deinem Smartphone.
2. Kopiere die Datei mit den Einstellungen von deinem Smartphone auf ein externes Gerät (d.h. dein Computer, externe Festplatte) oder lade sie in deinen Cloudspeicher hoch.
4. Erstelle ein signiertes Apk für die neue Version, wie es im [Update Guide](../Installing-AndroidAPS/Update-to-new-version.md) beschrieben ist und übertrage es auf dein Smartphone.
5. Deinstallieren die Vorgängerversion von AAPS auf Deinem Smartphone.
6. Installiere die neue AAPS-Version auf Deinem Smartphone.
7. [Einstellungen importieren](ExportImportSettings-import-settings), um Zielsetzungen und Konfiguration wiederherzustellen.
8. Prüfe deine Einstellungen und deaktiviere den Energiesparmodus.

   Falls du die Einstellungen nicht findest, kopiere sie von deinem externen Speicher auf dein Smartphone.
8. Loope weiter!

## Gradle Sync schlägt fehl
Der Gradle Sync kann aus verschiedenen Gründen fehlschlagen. Falls Du einen Hinweis bekommst, dass der Gradle Sync fehlgeschlagen ist ("Gradle Sync failed"), öffne den "Build" Reiter (1) im unteren Bereich von Android Studio und überprüfe welche Fehlermeldung (2) du angezeigt bekommst.

  ![Gradle Failed](../images/studioTroubleshooting/07_GradleSyncFailed2.png)

Das sind die üblichen Gradle Sync Fehler:
* [Uncommitted changes](troubleshooting_androidstudio-uncommitted-changes)
* [No cached version of ... available](troubleshooting_androidstudio-could-not-resolve-no-cached-version)
* [Android Gradle requires Java 11 to run](troubleshooting_androidstudio-android-gradle-plugin-requires-java-11-to-run)

*Wichtig*: Nachdem Du die Anleitung zum Beheben deines Problems befolgt hast, ist es notwendig den [Gradle Sync](troubleshooting_androidstudio-gradle-resync) erneut anzustoßen.

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

  * Im Terminal sollte ein Hinweis erscheinen, der übermittelt welche git Version installiert ist (siehe Screenshot oberhalb). In diesem Fall gehe zu [Schritt 2](troubleshooting_androidstudio-step-2-check-for-uncommitted-changes).

  * Falls du einen Hinweis wie diesen bekommst
    ```
    Git: command not found
    ```
    ist deine git Installation fehlerhaft.

  * [Prüfe die git Installation](git-install-check-git-settings-in-android-studio)

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

    * Diese Dateien werden erneut vom Git Server gezogen. Falls keine weiteren Änderungen im Commit Tab zu sehen sind, gehe zu [Schritt 3](troubleshooting_androidstudio-step-3-gradle-resync).

  * Falls du "Unversioned Files" sehen kannst, hast du wahrscheinlich Dateien im Sourcecode Projekt abgelegt, die dort nicht hingehören (z.B: deine keystore Datei).

    * Benutze deinen Datei Explorer und verschiebe die Datei an einen Ort, außerhalb des Source Code Projekts.

    * Gehe zurück zu Android Studio und klicke den Refresh Button (4) im Commit Tab, um sicherzustellen, dass die Datei nicht mehr im AndroidAPS Projekt liegt.

      Falls keine weiteren Änderungen im Commit Tab zu sehen sind, gehe zu [Schritt 3](troubleshooting_androidstudio-step-3-gradle-resync).


(troubleshooting_androidstudio-step-3-gradle-resync)=

#### Schritt 3: Resync Gradle (erneut)

Folge der Anleitung bei [Gradle Resync](troubleshooting_androidstudio-step-3-gradle-resync).

(troubleshooting_androidstudio-android-gradle-plugin-requires-java-11-to-run)=

### Das Android Gradle Plugin benötigt Java 11

  Wahrscheinlich bekommst du diese Fehlermeldung:

  ![Das Android Gradle Plugin benötigt Java 11](../images/studioTroubleshooting/11_GradleJDK.png)

  Klicke auf "Gradle Settings" (1), um die Gradle Einstellungen zu öffnen.

  Falls du den Link zu den "Gradle Settings" nicht hast, öffne die Gradle Settings manuell, indem du den Gradle Tab am rechten Rand von Android Studio auswählst (1). Wähle dann das Werkzeug Icon (2) und dort das Element "Gradle Settings" (3).

  ![Gradle Settings](../images/studioTroubleshooting/09_GradleSettings.png)

  Wenn Du die Gradle Einstellungen geöffnet hast, öffne das Dropdown (1) bei "Gradle JDK" und wähle "Embedded JDK Version" (2).

  ![Gradle Settings](../images/studioTroubleshooting/12_GradleSettingsJDK.png)

  Klicke "OK" um die Einstellungen zu speichern und schließen.

  *Wichtig*: Falls Du die Einstellung "Gradle JDK" nicht siehst, hast Du Android Studio wahrscheinlich nicht upgedatet. Stelle sicher, dass Du Android Studio 2021.1.1 Bumblebee) oder eine neuere Version benutzt.

  Jetzt ist es notwendig einen [Gradle Resync](troubleshooting_androidstudio-step-3-gradle-resync) auszulösen

(troubleshooting_androidstudio-could-not-resolve-no-cached-version)=

### Could not resolve/No cached version

  Wahrscheinlich siehst Du diese Fehlermeldung:

    ![Could not resolve... No cached version](../images/studioTroubleshooting/08_NoCachedVersion.png)

  * Öffne den Gradle Tab auf der rechten Seite (1).

    Stelle sicher, dass der Button der bei (2) zu sehen ist, *NICHT* selektiert ist.

    ![Gradle Offline Mode](../images/studioTroubleshooting/10_GradleOfflineMode.png)

  * Jetzt ist es notwendig einen [Gradle Resync](troubleshooting_androidstudio-step-3-gradle-resync) auszulösen

(troubleshooting_androidstudio-unable-to-start-daemon-process)=
### Unable to start daemon process

  Wenn Du eine Fehlermeldung wie die unten siehst, verwendest Du wahrscheinlich ein Windows 10 32-Bit-Betriebssystem. Dies wird von Android Studio Version 3.5.1 und höher nicht unterstützt und daran können die AAPS Entwickler leider nichts ändern.

  Falls du Windows 10 verwendest, brauchst du ein 64-bit Betriebssystem.

  Es gibt viele Anleitungen im Internet, um herauszufinden, ob du ein 32-bit oder 64-bit Betriebssystem hast - z. B.: [diese hier](https://www.howtogeek.com/howto/21726/how-do-i-know-if-im-running-32-bit-or-64-bit-windows-answers/).

  ![Screenshot konnte den Daemon-Prozess nicht starten](../images/AndroidStudioWin10_32bitError.png)

### Gradle Resync

  Falls Du immer noch den Hinweis sehen kannst, dass der Gradle sync fehlgeschlagen ist, wähle den Link "Try again".  ![Gradle Sync fehlgeschlagen Modus](../images/studioTroubleshooting/01_GradleSyncFailed.png)


  Falls Du den Hinweis nicht mehr siehst, kannst Du das auch manuell auswählen:

  * Öffne den Gradle Tab (1) am rechten Rand von Android Studio.

    ![Gradle Reload](../images/studioTroubleshooting/06_GradleResyncManually.png)

  * Rechtsklick auf AndroidAPS (2)

  * Klicke auf "Reload Gradle Project" (3)

## Generate Signed APK generated successfully with 0 build variants

Wenn Du die Apk generierst, bekommst Du möglicherweise den Hinweis, dass das Generieren zwar erfolgreich war, aber, dass keine build variants generiert wurden:

![APK mit 0 Build-Varianten erstellt](../images/studioTroubleshooting/14_BuildWith0Variants.png)

Diese Warnung ist falsch. Prüfe den Pfad den Du als "Destination Folder" (Ziel Speicherort) für die Erstellung angegeben hast (Schritt [Generate Signed APK](Building-APK-generate-signed-apk)) und Du wirst die signierte APK dort finden!


## App was created with compiler/kotlin warnings

Falls Dein Build erfolgreich durchgelaufen ist, Du aber Warnungen vom Compiler oder Kotlin bekommst (diese zeigen sich durch ein gelbes oder blaues Ausrufezeichen), kannst Du diese Warnungen einfach ignorieren.

 ![Gradle mit Warnungen beendet](../images/studioTroubleshooting/13_BuildWithWarnings.png)

Deine App wurde erfolgreich gebaut und kann aufs Smartphone übertragen werden!


## Key was created with errors

Beim Erstellen eines neuen Keystores zum Erstellen der signierten APK wird unter Windows möglicherweise die folgende Fehlermeldung angezeigt:

![Key was created with errors](../images/AndroidStudio35SigningKeys.png)

Dies scheint ein Fehler in Android Studio 3.5.1 und seiner Java-Umgebung in Windows zu sein. Der Schlüssel wird korrekt erstellt, aber eine Empfehlung wird fälschlicherweise als Fehler angezeigt. Dies kann momentan ignoriert werden.


## No CGM data is received by AndroidAPS

* Falls Du gepatchte Dexcom G6-App verwendest: Diese App ist veraltet. Verwende stattdessen die [BYODA](DexcomG6-if-using-g6-with-build-your-own-dexcom-app)  App.

* Falls Du xDrip+ verwendest: Identifiziere den Empfänger wie in den [xDrip+ Einstellungen](xdrip-identify-receiver) beschrieben.


## App not installed

![Smartphone Meldung App nicht installiert](../images/Update_AppNotInstalled.png)

* Stelle sicher, dass Du die “app-full-release.apk” auf Dein Smartphone übertragen hast.
* Falls "App not installed" auf dem Smartphone angezeigt wird, gehe wie folgt vor:

1. [Exportiere die Einstellungen](../Usage/ExportImportSettings) (in der AAPS Version, die bereits auf Deinem Smartphone installiert ist)
2. Deinstalliere AAPS auf Deinem Smartphone.
3. Aktiviere den Flugmodus & schalte Bluetooth aus.
4. Installiere die neue Version ("app-full-release.apk").
5. [Importiere die Einstellungen](../Usage/ExportImportSettings)
6. Aktiviere Bluetooth wieder und schalte den Flugmodus aus.

## App installiert, aber weiter die alte Version auf dem Smartphone

Wenn Du die App erfolgreich erstellt, sie auf Dein Smartphone übertragen und dort erfolgreich installiert hast, jedoch weiter die alte Versionsnummer angezeigt wird, so hast Du wahrscheinlich versäumt, Deine [lokale Kopie zu aktualisieren](Update-to-new-version-update-your-local-copy).

## Keiner der oben genannten Löungsvorschläge funktioniert

Falls die oben genannten Tipps Dich nicht weiter bringen, kannst Du überlegen, die App von Grund auf neu zu erstellen.

1. [Exportiere die Einstellungen](../Usage/ExportImportSettings) (in der AAPS Version, die bereits auf Deinem Smartphone installiert ist)

2. Halte Dein key Passwort und Dein key store Passwort bereit. Falls du Passwörter vergessen hast, kannst du versuchen sie in Projekt Dateien wiederzufinden [wie hier beschrieben](https://youtu.be/nS3wxnLgZOo).

    Oder verwende einfach einen neuen keystore.

3. Erstelle die App von Grund auf neu wie [hier](Building-APK-download-androidaps-code) beschrieben.

4. Nachdem Du die APK erfolgreich erstellt hast, kannst Du die App auf Deinem Smartphone deinstallieren. Übertrage dann die neue APK auf Dein Smartphone und installiere diese.
5. [Importiere Einstellungen](../Usage/ExportImportSettings) erneut, um deine Zielsetzungen und Einstellungen wiederherzustellen.
6. Überprüfe deine Einstellungen und deaktiviere den Energiesparmodus erneut.

## Worst case scenario

Falls auch die Neuerstellung der App von Grund auf Dein Problem nicht löst, könntest Du versuchen, Android Studio komplett neu zu installieren. Einige Benutzer berichteten, dass dies ihr Problem gelöst hat.

**Stelle sicher, dass du alle Dateien, die in Verbindung mit Android Studio stehen, deinstallierst.** Falls du Android Studio nicht mit allen versteckten Dateien löscht, können beim Deinstallieren neue Probleme auftreten, anstatt dass Deine bestehenden Probleme gelöst werden. Anleitungen zur kompletten Deinstallation findest Du online z.B.

[https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10](https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10).

Installiere Android Studio von Grund auf wie [hier](Building-APK-install-android-studio) beschrieben.
