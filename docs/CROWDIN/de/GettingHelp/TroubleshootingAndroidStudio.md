(troubleshooting_androidstudio-troubleshooting-android-studio)=

# Fehlerbehebung für Android Studio

```{contents} List of common issues
:depth: 2
:local: true
```

(troubleshooting_androidstudio-lost-keystore)=
## Verlorener Keystore
Wenn Du beim Update von **AAPS** denselben „Keystore“ verwendest, musst Du die Vorgängerversion von AAPS auf Deinem Smartphone nicht deinstallieren. Daher wird empfohlen, den Keystore an einem sicheren Platz zu speichern.

Wenn Du versuchst die APK zu installieren und sie mit einem anderen Keystore signiert wurde als bei der Vorgängerversion, wirst Du die Fehlermeldung bekommen, dass die Installation fehlgeschlagen ist!

Falls Du Deinen alten Keystore oder das dazugehörige Passwort nicht mehr wiederfindest, kannst Du wie folgt vorgehen:

1. [Exportiere die Einstellungen](../Maintenance/ExportImportSettings.md) von Deinem Smartphone.
2. Kopiere die Datei mit den Einstellungen von deinem Smartphone auf ein externes Gerät (d.h. dein Computer, externe Festplatte) oder lade sie in deinen Cloudspeicher hoch.
4. Erstelle, so wie es in der [Update-Anleitung](../Maintenance/UpdateToNewVersion) beschrieben ist, eine neue Version der signierten APK und transferiere diese auf Dein Smartphone.
5. Deinstallieren die **AAPS**-Vorgängerversion von Deinem Smartphone.
6. Installiere die neue **AAPS-Version** auf Deinem Smartphone.
7. [Importiere die Einstellungen](#ExportImportSettings-restoring-from-your-backups-on-a-new-phone-or-fresh-installation-of-aaps), um sowohl Deinen Fortschritt bei den Zielen (Objectives), als auch Deine Konfiguration wieder herzustellen.

   Falls Du die Einstellungen nicht findest, kopiere sie von Deinem externen Speicher auf Dein Smartphone.

8. Prüfe deine Einstellungen und deaktiviere den Energiesparmodus.
9. Loope weiter!

## Gradle Sync schlägt fehl
Der Gradle Sync kann aus verschiedenen Gründen fehlschlagen. Falls Du einen Hinweis bekommst, dass der Gradle Sync fehlgeschlagen ist („gradle sync failed“), öffne den „Build“-Reiter (1) im unteren Bereich des Android Studios und überprüfe welche Fehlermeldung (2) Du angezeigt bekommst.

![Gradle Failed](../images/studioTroubleshooting/07_GradleSyncFailed2.png)

```{contents} Likely reasons for gradle sync failures are:
:depth: 1
:local: true
```

*Wichtig*: Nachdem Du die Anleitung zum Beheben Deines Problems befolgt hast, ist es notwendig den [Gradle Sync](#gradle-resync) erneut anzustoßen.

(troubleshooting_androidstudio-uncommitted-changes)=
### Uncommitted changes

Falls Du eine Fehlermeldung bekommst, die so aussieht:

![Gradle Uncommitted Changes](../images/studioTroubleshooting/02_GradleUncommitedChanges.png)

```
Build file 'C:\Data\50-Android\AndroidAPS\app\build.gradle.kts' line: 243

There are uncommitted changes.
Klone den Quellcode noch einmal so wie es in der Dokumentation beschrieben ist und und mache dabei keinen Gradle Update
```

#### Schritt 1 - Überprüfe Deine Git Installation
  * Öffne den Terminal Reiter (1) im unteren Bereich von Android Studio und kopiere den folgenden Text, oder tippe ihn ins Terminal ein.
    ```
    git --version
    ```

    ![Gradle Git Version](../images/studioTroubleshooting/03_GitVersion.png)

    Hinweis: Es ist ein Leerzeichen und zwei Bindestriche zwischen git und version!

  * Im Terminal sollte ein Hinweis erscheinen, der zeigt welche Git-Version installiert ist (siehe Screenshot oben). In diesem Fall, mache mit [Schritt 2](#troubleshooting-android-studio-check-for-uncommitted-changes) weiter.

  * Falls du einen Hinweis wie diesen bekommst
    ```
    Git: command not found
    ```
    ist deine git Installation fehlerhaft.

  * [Prüfe die Git-Installation](#BuildingAaps-steps-for-installing-git)

  * Falls Du mit Windows arbeitest und Git erst kurz zuvor installiert wurde, solltest Du Deinen Computer neu starten, um Git nach der Installation global verfügbar zu machen

  * Falls Git installiert ist, Du (als Windows-Nutzender) Deinen Computer neu gestartet hast und Git immer noch nicht gefunden werden kann:

  * Suche auf deinem Computer nach einer Datei "git.exe".

    Notiere Dir, in welchem Verzeichnis es gespeichert ist.

  * Gehe zu den Umgebungsvariablen auf Windows, wähle die Variable "PATH" und klicke bearbeiten. Füge den zuvor notierten Pfad deiner Git-Installation hinzu.

  * Speichern und schließen.

  * Starte Android Studio neu.

(troubleshooting-android-studio-check-for-uncommitted-changes)=
#### Schritt 2: Prüfe, ob es uncommitted changes gibt.

  * In Android Studio: Öffne den „Commit“-Tab (1) auf der linken Seite. ![Commit Tab: Uncommitted changes](../images/studioTroubleshooting/04_CommitTabWithChanges.png)
  * Dort siehst du entweder "Default changeset" (2) oder "Unversioned files" (3):

    * Bei „Default changeset“, hast Du wahrscheinlich „Gradle“ upgedatet oder aus Versehen etwas an einer Datei geändert.

    * Mache einen Rechtsklick auf "Default Changeset" und wähle "Rollback"

      ![Commit Tab: Rollback changes](../images/studioTroubleshooting/05_CommitTabRollback.png)

    * Diese Dateien werden erneut vom Git Server gezogen. Wenn es keine weiteren Änderungen im Commit-Tab gibt, mache mit [Schritt 3](#gradle-resync) weiter.

  * Wenn Du die Meldung „Unversioned Files“ bekommen solltest, hast Du vermutlich versehentlich Dateien in Deinem Quellcode-Verzeichnis gespeichert. Vielleicht sind es wichtige Dateien, wie z. B. Deine Keystore-Datei, die an eine andere Stelle verschoben werden sollte. Wenn Du die Dateien nicht kennst und auch nicht selbst erstellt hast, kannst Du sie löschen.

    * Benutze Deinen Datei-Explorer und verschiebe die Datei an einen Ort, außerhalb des Source Code Projekts.

    * Gehe zurück zu Android Studio und klicke den „Refresh“-Button (4) im „Commit“-Tab, um sicherzustellen, dass die Datei nicht mehr im **AAPS**-Ordner liegt.

      Wenn es keine weiteren Änderungen im „Commit“-Tab gibt, mache mit [Schritt 3](#gradle-resync) weiter.


#### Schritt 3: Resync Gradle (erneut)

Folge der Anleitung unter [Gradle Resync](#gradle-resync).

### Git Pull Failed - Please tell me who you are

Wenn Du diese Mitteilung erhälst, möchte Git, dass Du Dich identifizierst.

![Git identification](../images/studioTroubleshooting/164_Git_Identify.png)

Öffne das Terminal und gib die folgenden zwei Befehle nacheinander ein.

```
git config --global user.name "Deine Name hier"
git config --global user.email deine.email@hier.com
```

Dein Name muss zwischen die Anführungszeichen geschrieben werden.

![Git identification fix](../images/studioTroubleshooting/164_Git_Identify2.png)

(troubleshooting_androidstudio-android-gradle-plugin-requires-java-11-to-run)=

(incompatible-gradle-jvm)=
### Incompatible Gradle JVM

![Incompatible Gradle JVM](../images/studioTroubleshooting/160_InkompatibelAndroidGradleJVM.png)

```
Your build is currently configured to use incompatible Java 21.0.3 and Gradle 8.2.
Cannot sync the project.

We recommend upgrading to Gradle version 8.9.

The minimum compatible Gradle version is 8.5.

The maximum compatible Gradle JVM version is 19.
```

Oder:

```
Cause: error: invalid source release: 21
```

Wenn Du die folgende Fehlermeldung erhältst, musst Du, bevor Du es noch einmal probieren kannst, eine korrekte JVM-Version herunterladen:

1.  Prüfe in der [Anforderungstabelle](#Building-APK-recommended-specification-of-computer-for-building-apk-file), welche JVM-Version Du für die **AAPS** Version, die Du erstellen möchtest, benötigst und notiere sie.

2. Öffne die Gradle-Ansicht, in dem Du auf der rechten Seite im Android Studio auf den Elefanten (1) klickst, und öffne dann die Einstellungen (2) und wähle dort die **Gradle Settings** (3) aus:

![Open Gradle Settings](../images/studioTroubleshooting/161_GradleSettings.png)

3.  Prüfe im **Gradle JDK**-Feld, ob die richtige Version ausgewählt ist (1). Wenn nicht, klicke auf das Feld und schaue, ob es schon in der Liste zu sehen ist. Im Beispiel unten ist JVM 21 als „jbr-21“ benannt. Wenn Du es findest, wähle es einfach aus und Du bist damit fertig. Falls es nicht verfügbar ist, wähle „Download JDK“ aus.


![Select Download JDK](../images/studioTroubleshooting/162_DownloadJDK.png)

4. In Version (1), wähle das JDK aus, das zur **AAPS**-Version passt (das ist die von Dir notierte Version aus der Anforderungstabelle). In Vendor (2) wähle einen beliebigen Anbieter aus. Location (3): Ändere nichts.

![Select JDK 17](../images/studioTroubleshooting/163_JDKSelection.png)

5.  Schließe die **Settings** (dt. Einstellungen) mit **OK**.
6. Jetzt musst Du den Gradle Sync neu starten. Folge der Anleitung unter [Gradle Resync](#gradle-resync).

(incompatible-version-of-android-gradle-plugin)=
### Inkompatibilität der Android Gradle Plugin Version

  Wenn Du die folgende Fehlermeldung erhältst,

`The project is using an incompatible version (AGP x.x.x) of the Android Gradle plugin. Latest supported version is AGP x.x.x`

  ![Inkompatibilität der Android Gradle Plugin Version](../images/studioTroubleshooting/15_InkompatibelAndroidGradlePlugin.png)

  nutzt Du eine veraltete Version des Android Studios. Gehe im Menü zu Help > Check for updates und installiere die neueste Version des Android Studios und deren Plugins.

(troubleshooting_androidstudio-could-not-resolve-no-cached-version)=
### Could not resolve/No cached version

  Wahrscheinlich siehst Du diese Fehlermeldung:

![Could not resolve... No cached version](../images/studioTroubleshooting/08_NoCachedVersion.png)

  * Öffne den Gradle Tab auf der rechten Seite (1).

    Stelle sicher, dass der Button der bei (2) zu sehen ist, *NICHT* selektiert ist.

    ![Gradle Offline Mode](../images/studioTroubleshooting/10_GradleOfflineMode.png)

  * Starte jetzt einen [Gradle Resync](#gradle-resync)

(troubleshooting_androidstudio-unable-to-start-daemon-process)=
### Unable to start daemon process

  Wenn Du eine Fehlermeldung wie die unten siehst, verwendest Du wahrscheinlich ein Windows 10 32-Bit-Betriebssystem. Dies wird seit Android Studio 3.5.1 und höher nicht unterstützt und es gibt leider nichts, was die **AAPS**-Entwickelnden dagegen tun können!

  Es gibt im Internet eine Reihe von Anleitungen (wie z. B. [diese](https://support.microsoft.com/en-us/windows/32-bit-and-64-bit-windows-frequently-asked-questions-c6ca9541-8dce-4d48-0415-94a3faa2e13d)), die beschreiben, wie Du herausfindest, ob Du ein 32-Bit oder 64-Bit Betriebssystem hast.

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

Wenn Du die APK erstellst, bekommst Du möglicherweise den Hinweis, dass das Generieren zwar erfolgreich war, aber, dass keine „build variants“ erzeugt wurden:

![APK mit 0 Build-Varianten erstellt](../images/studioTroubleshooting/14_BuildWith0Variants.png)

Diese Warnung ist falsch. Prüfe das Verzeichnis, dass Du als „Destination Folder“ für die Erstellung angegeben hast (Schritt [Signierte AAPS APK erstellen](#Building-APK-generate-signed-apk)). Dort wirst Du die signierte APK finden!


## App was created with compiler/kotlin warnings

Falls Dein Build erfolgreich durchgelaufen ist, Du aber Warnungen vom Compiler oder Kotlin bekommst (diese zeigen sich durch ein gelbes oder blaues Ausrufezeichen), kannst Du diese Warnungen einfach ignorieren.

 ![Gradle mit Warnungen beendet](../images/studioTroubleshooting/13_BuildWithWarnings.png)

Deine App wurde erfolgreich gebaut und kann auf das Smartphone übertragen werden!


## AAPS empfängt keine CGM-Daten

* Falls Du die gepatchte Dexcom G6-App verwendest: Diese App ist veraltet. Nutze an deren Stelle die [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)-App instead.

* Falls Du xDrip+ verwendest: Identifiziere den Empfänger (engl. identify receiver) wie in den [xDrip+ Einstellungen](#xdrip-identify-receiver) beschrieben.


## APK not installed / Installation fehlgeschlagen

![Smartphone Meldung App nicht installiert](../images/Update_AppNotInstalled.png)

* Stelle sicher, dass Du die “app-full-release.apk” auf Dein Smartphone übertragen hast.
* Falls "App not installed" auf dem Smartphone angezeigt wird, gehe wie folgt vor:

1. [Exportiere die Einstellungen](../Maintenance/ExportImportSettings.md), der AAPS-Version, die bereits auf Deinem Smartphone installiert ist.
2. Deinstalliere **AAPS** von Deinem Telefon.
3. Aktiviere den Flugmodus & schalte Bluetooth aus.
4. Installiere die neue Version ("app-full-release.apk").
5. [Importiere die Einstellungen](../Maintenance/ExportImportSettings.md)
6. Aktiviere Bluetooth wieder und schalte den Flugmodus aus.

## APK installiert, aber weiter die alte Version auf dem Smartphone

Wenn Du die App erfolgreich erstellt, sie auf Dein Smartphone übertragen und dort erfolgreich installiert hast, jedoch weiter die alte Versionsnummer angezeigt wird, hast Du wahrscheinlich versäumt, Deine [lokale Kopie zu aktualisieren](#Update-to-new-version-update-your-local-copy).

## Keiner der oben genannten Löungsvorschläge funktioniert

Falls die oben genannten Tipps Dich nicht weiter bringen, kannst Du überlegen, die APK von Grund auf neu zu erstellen:

1. [Exportiere die Einstellungen](../Maintenance/ExportImportSettings.md), der AAPS-Version, die bereits auf Deinem Smartphone installiert ist.

2. Halte Dein Key-Passwort und Dein Keystore-Passwort bereit. Falls du Passwörter vergessen hast, kannst du versuchen sie in Projekt Dateien wiederzufinden [wie hier beschrieben](https://youtu.be/nS3wxnLgZOo).

    Oder verwende einfach einen neuen keystore.

3. Erstelle die APK komplett von vorne, so wie es [hier](#Building-APK-download-AAPS-code) beschrieben ist.

4. Nachdem Du die APK erfolgreich erstellt hast, kannst Du die App auf Deinem Smartphone deinstallieren. Übertrage dann die neue APK auf Dein Smartphone und installiere diese.
5. [Importiere die Einstellungen](../Maintenance/ExportImportSettings.md) noch einmal, damit die Ziele und Einstellungen wieder hergestellt werden.
6. Überprüfe deine Einstellungen und deaktiviere den Energiesparmodus erneut.

## Worst case scenario

Wenn alles, was oben beschrieben ist, das Problem nicht löst, solltest Du Android Studio komplett deinstallieren und von Grund auf neu beginnen.  Einige konnten so deren Probleme im Erstellprozess lösen.  Bei der Deinstallation des Android Studios behalte die „User Settings“. **Stelle sicher, dass Du alle übrigen Android Studio Dateien deinstallierst.** Falls Du Android Studio nicht mit allen versteckten Dateien löscht, können beim Deinstallieren neue Probleme auftreten, anstatt dass Deine bestehenden Probleme gelöst werden. Anleitungen zur kompletten Deinstallation findest Du online z. B.

[https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10](https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10).

Installiere Android Studio von Grund auf neu (Neuinstallation), wie es [hier](#Building-APK-install-android-studio) beschrieben ist.
