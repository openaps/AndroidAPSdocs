# AndroidAPS installieren - App erstellen

## Kein Download möglich - APK muss selbst erstellt werden

**Aufgrund der gesetzlichen Regelungen für Medizinprodukte ist AndroidAPS nicht als Download verfügbar. Es ist zulässig, die App für den eigenen Gebrauch zu erstellen, aber du darfst keine Kopie an andere weitergeben! Weitere Informationen findest Du auf der [FAQ Seite](../Getting-Started/FAQ.md).**

## Wichtige Hinweise

* Nutze bitte **[Android Studio Version 2020.3.1](https://developer.android.com/studio/)** oder neuer, um die APK-Datei zu erstellen.
* [Windows 10 32-bit systems](../Installing-AndroidAPS/troubleshooting_androidstudio.md#unable-to-start-daemon-process) are not supported by Android Studio 2020.3.1

(recommended-specification-of-computer-for-building-apk-file)=

## Empfohlene Spezifikation des Computers zum Erstellen der Apk-Datei

<table class="tg">
  
<thead>
  <tr>
    <th class="tg-baqh">Betriebssystem (nur 64 Bit)</th>
    <th class="tg-baqh">Windows 8 oder höher</th>
    <th class="tg-baqh">Mac OS 10.14 oder höher</th>
    <th class="tg-baqh">Jedes Linux unterstützt Gnome, KDE oder Unity DE;&nbsp;&nbsp;GNU C Library 2.31 oder höher</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-baqh"><p align="center">CPU (nur 64 Bit)</td>
    <td class="tg-baqh">x86_64 CPU-Architektur; Intel Core oder neuere Generation oder AMD CPU mit Unterstützung für einen <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-windows" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Windows Hypervisor</span></a></td>
    <td class="tg-baqh">ARM-based Chips oder Intel Core der zweiten Generation oder neuer mit Unterstützung für <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-mac" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Hypervisor.Framework</span></a></td>
    <td class="tg-baqh">x86_64 CPU Architektur; Intel Core der zweiten Generation oder neuer, alternativ AMD Prozessor mit Unterstützung für AMD Virtualization (AMD-V) und SSSE3</td>
  </tr>
  <tr>
    <td class="tg-baqh"><p align="center">RAM</td>
    <td class="tg-baqh" colspan="3"><p align="center">8GB oder mehr</td>
  </tr>
  <tr>
    <td class="tg-baqh"><p align="center">Festplatte</td>
    <td class="tg-baqh" colspan="3"><p align="center">Mind. 30 GB freier Speicherplatz. SSD wird empfohlen.</td>
  </tr>
  <tr>
    <td class="tg-baqh"><p align="center">Bildschirmauflösung</td>
    <td class="tg-baqh" colspan="3"><p align="center">min. 1280 x 800<br></td>
  </tr>
  <tr>
    <td class="tg-baqh"><p align="center">Internet</td>
    <td class="tg-baqh" colspan="3"><p align="center">Breitband</td>
  </tr>
</tbody>
</table>

Please be in mind that both **64 bit CPU and 64 bit OS are mandatory condition.** If your system DOES NOT meet this condition, you have to change affected hardware or software or the whole system. **It is strongly recommended to use SSD (Solid State Disk) instead of HDD (Hard Disk Drive) because it will take less time when you are building the APS installation apk file.** Recommended is just recommended and it is not a mandatory. However, you may still use a HDD when you are building apk file but note that the building process can take a long time to complete, although once started, you can leave it running unattended.

* * *

### Dieser Artikel ist in zwei Teile geteilt.

* Im Überblick werden die wichtigsten Schritte kurz zusammengefasst die allgemein nötig sind, um die APK Datei zu erstellen.
* In der “Schritt für Schritt Anleitung” wird detailliert auf die einzelnen Punkte mithilfe von Screenshots eingegangen. Da die Versionen von Android Studio - der Software, die wir zum Bau der APK verwenden werden - sich schnell weiterentwickeln werden diese nicht mit deiner Installation übereinstimmen, aber sie geben einen guten ersten Eindruck. Android Studio läuft sowohl auf Windows als auch auf Mac OS X und Linux. Es kann sein, dass es bei jedem Betriebssystem einige kleinere Unterschiede gibt. Falls Du feststellst, dass etwas wichtiges falsch ist oder fehlt, informiere bitte die Facebook Gruppe "AndroidAPS users" oder im Discord chat [Android APS](https://discord.gg/4fQUWHZ4Mw), damit wir uns das anschauen können.

## Übersicht

In general, the steps necessary to build the APK file:

1. [Git installieren](../Installing-AndroidAPS/git-install.md)
2. [Android Studio installieren](../Installing-AndroidAPS/Building-APK.md#install-android-studio)
3. [Pfad zu git.exe in den Einstellungen von Android Studio festlegen](../Installing-AndroidAPS/Building-APK.md#set-git-path-in-preferences)
4. [AndroidAPS-Code herunterladen](../Installing-AndroidAPS/Building-APK.md#download-androidaps-code)
5. [Download Android SDK](../Installing-AndroidAPS/Building-APK.md#download-android-sdk)
6. [Build the app](../Installing-AndroidAPS/Building-APK.md#generate-signed-apk) (generate signed apk)
7. [APK-Datei auf das Smartphone übertragen](../Installing-AndroidAPS/Building-APK.md#transfer-apk-to-smartphone)
8. [Identifiziere den Empfänger falls Du xDrip verwendest+](..//Configuration/xdrip.md#identify-receiver)

## Schritt für Schritt Anleitung

Detailed description of the steps necessary to build the APK file.

## Installiere git (falls du es noch nicht hast)

Follow the manual on the [git installation page](../Installing-AndroidAPS/git-install.md).

(install-android-studio)=

## Android Studio installieren

The following screenshots have been taken from Android Studio Version Arctic Fox | 2020.3.1. Screens can change in future versions of Android Studio. But you should be able to find your way through. [Help from the community](../Where-To-Go-For-Help/Connect-with-other-users.md) is provided.

One of the most important things when installing Android Studio: **Be patient!** During installation and setup Android Studio is downloading a lot of stuff which will take its time.

Download [Android Studio from here](https://developer.android.com/studio/install.html) and install it on your computer.

On first start you will find the setup wizard:

Select "Do not import settings" as you have not used it before.

![Do not import settings](../images/studioSetup/01_ImportSettings.png)

Decide whether you want to share data with Google or not.

![Share data with Google](../images/studioSetup/02_DataSharing.png)

On the following screen click "Next".

![Welcome screen](../images/studioSetup/03_Welcome.png)

Select "Standard" installation and click "Next".

![Standard installation](../images/studioSetup/04_InstallType.png)

Select the theme for the user interface you like. (In this manual we used "Light".) Then click "Next".

> ***Hinweis:*** Das ist nur das Farbschema. Du kannst auswählen, was Du möchtest (z.B. "Darcula" für den dunklen Modus). Diese Auswahl hat keinen Einfluss auf das Erstellen der APK, aber die folgenden Screenshots könnten anders aussehen.

![UI color scheme](../images/studioSetup/05_UITheme.png)

Click "Finish" on the "Verify Settings" dialog.

![Verify settings](../images/studioSetup/06_Verify.png)

Wait while Android Studio downloads additional components and be patient. Once everything is downloaded button "Finish" turns blue. Click the button now.

![Downloading components](../images/studioSetup/07_Downloading.png)

(set-git-path-in-preferences)=

## Git-Pfad in Android Studio eintragen

Make sure [git is installed](../Installing-AndroidAPS/git-install.md) on your computer and you have restarted your computer after installing.

On the Android Studio welcome screen click "Customize" (1) on the left and then select the link "All settings..." (2):

![Android Studio settings from welcome screen](../images/studioSetup/10_WizardSettings.png)

### Windows

* As windows user, make sure you have restarted your computer after [installing Git](../Installing-AndroidAPS/git-install.md).

* Doppelklicke auf "Version Control" (1), um das Untermenü zu öffnen.

* Git (2) anklicken.
* Stelle sicher, dass die update method "Merge" (3) ausgewählt ist.
* Prüfe durch klicken des Buttons "Test" (4), ob Android Studio den Pfad zu git.exe automatisch ermitteln kann.
    
    ![Einstellungen für Android Studio](../images/studioSetup/11_GitPath.png)

* Wenn die automatische Einstellung möglich ist, wird die Git-Version hinter dem Pfad angezeigt.
    
    ![Anzeige git Version](../images/studioSetup/12_GitVersion.png)

* Eventuell kann git.exe nicht automatisch gefunden werden oder der Test führt zu einem Fehler (1):
    
    ![Git wurde nicht gefunden](../images/studioSetup/13_GitVersionError.png)
    
    Klicke in diesem Fall auf das Ordner-Symbol (2).

* Verwende die [Suchfunktion](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html) im Windows Explorer um "git.exe" zu finden, falls Du Dir nicht sicher bist, in welchem Ordner "git.exe" installiert wurde. Du suchst eine Datei namens "git.exe", diese befindet sich im **\bin** Ordner.

* Wähle den Pfad zu git.exe aus, stelle sicher, dass Du den Ordner ** \bin\ ** ausgewählt hast (3), und klicke auf "OK" (4).
    
    ![Git manuell auswählen](../images/studioSetup/14_GitManualSelection.png)

* Überprüfe den gewählten Git-Pfad erneut mit der Schaltfläche "Test" wie oben beschrieben.

* Wenn die git Version hinter dem Pfad angezeigt wird (siehe Screenshot oben), kannst Du das Einstellungsfenster mit Klick auf "OK" (5) schließen.

### Mac

* Jede git Version sollte funktionieren. Zum Beispiel <https://git-scm.com/download/mac>.
* Benutze Homebrew um git zu installieren: ```$ brew install git```.
* Details zur Installation von git findest Du in der [offiziellen git Dokumentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
* Wenn Du git über homebrew installierst, musst Du keine Einstellungen ändern. Im Fall der Fälle findest Du diese unter Android Studio - Preferences.

(download-androidaps-code)=

## AndroidAPS-Code herunterladen

* Wähle auf dem Android Studio Willkommensbildschirm "Projects" auf der linken Seite (1) und dann "Get from VCS" (2).
    
    ![Android Studio wizard](../images/studioSetup/20_ProjectVCS.png)
    
    * Wenn Du Android Studio bereits geöffnet hast und den Willkommensbildschirm nicht mehr siehst, klicke auf File (1) > New (2) > Project from Version Control... (3)
        
        ![Check out project from version control innerhalb von Android Studio](../images/AndroidStudio_FileNew.PNG)
    
    * Wir werden Android Studio nun sagen, wo es den Code herunterladen soll:
    
    * Stelle sicher, dass Du "Repository-URL" auf der linken Seite ausgewählt hast (1).
    
    * Überprüfe, ob "Git" als Versionskontrolle (2) ausgewählt ist.
    * Kopiere nachfolgende URL ```https://github.com/nightscout/AndroidAPS``` und füge sie in Android Studio in die URL Textbox (3) ein.
    * Wähle das Verzeichnis, in dem die Kopie des Codes gespeichert werden soll (4.).
        
        ![Clone Git](../images/studioSetup/21_CloneURL.png)

* Klicke auf "Clone" (5).
    
    ![Repository klonen](../images/studioSetup/22_Cloning.png)

* Klicke nicht auf "Background", während das Repository geklont wird!

* Nachdem das Projektarchiv erfolgreich geklont wurde, wird Android Studio das geklonte Projekt öffnen.

* Du wirst gefragt, ob Du dem Projekt vertrauen willst. Klicke auf "Trust project"!
    
    ![Projekt vertrauen](../images/studioSetup/23_TrustProject.png)

* In der Statusleiste im unteren Teil des Fensters siehst Du die Information, dass Android Studio Hintergrundaufgaben ausführt.
    
    ![Hintergrundprozesse](../images/studioSetup/24_GradleSyncRunning.png)

* Gewähre Zugriff, falls Dich Deine Firewall dazu auffordert.
    
    ![Java-Firewall-Berechtigung](../images/AndroidStudio361_18.png)

* Sobald die Hintergrund-Aufgaben beendet sind, wirst Du wahrscheinlich eine Fehlermeldung sehen, die besagt, dass Fehler aufgetreten sind (1) oder (2) oder (3).
    
    ![SDK-Lizenz](../images/studioSetup/25_SyncFailed.png)
    
    Keine Sorge, das wird bald gelöst!

(download-android-sdk)=

## Download Android SDK

* Gehe im Menü zu File (1) > Settings (2).
    
    ![Einstellungen öffnen](../images/studioSetup/30_Settings.png)

* Doppelklicke auf Appearance & Behaviour, um das Untermenü zu öffnen (1).

* Doppelklicke auf System Settings (2) und wähle Android SDK (3).
* Markiere die Box links neben "Android 9.0 (Pie)" (4) (API Level 28).
    
    ![SDK-Einstellungen](../images/studioSetup/31_AndroidSDK.png)

* Bestätige die Änderungen durch Klick auf OK.
    
    ![SDK-Änderungen bestätigen](../images/studioSetup/32_ConfirmSDK.png)

* Akzeptiere die Lizenzvereinbarung (1) und klicke auf "Next" (2).
    
    ![SDK-Lizenz akzeptieren](../images/studioSetup/33_ConfirmLicense.png)

* Warte, bis der SDK-Download und die Installation abgeschlossen sind.
    
    ![Während der SDK-Installation warten](../images/studioSetup/34_DownloadSDK.png)

* Wenn die SDK-Installation abgeschlossen ist, wird der Button "Finish" blau angezeigt. Klicke dann darauf.
    
    ![SDK-Installation abschließen](../images/studioSetup/35_DownloadSDKfinished.png)

* Android Studio empfiehlt eventuell, das Gradle-System zu aktualisieren. **Führe niemals ein Gradle-Update durch!** Dies wird zu Problemen führen!

* Wenn Du auf der unteren rechten Seite des Android Studio Fensters die Information siehst, dass das Android Gradle Plugin zur Aktualisierung bereit ist, klicke auf den Text "Update" (1).
    
    ![Kein Gradle Update](../images/studioSetup/36_GradleUpdateRequest.png)

* Wähle in der folgenden Dialogbox "Don't remind me again for this project" (2).
    
    ![Kein Gradle Update](../images/studioSetup/37_GradleUpdateDeny.png)

* Starte Android Studio neu, bevor Du fortfährst.

(generate-signed-apk)=

## Signierte APK erstellen (Generate signed APK)

Signing means that you indicate your app to be your own creation but in a digital way as a kind of digital fingerprint within the app itself. That is necessary because Android has a rule that it only accepts signed code to run for security reasons. For more information on this topic, follow [this link](https://developer.android.com/studio/publish/app-signing.html#generate-key).

* Nachdem Android Studio gestartet wurde, musst Du warten, bis alle Hintergrundaufgaben abgeschlossen sind.
    
    ![Auf Hintergrundaufgaben warten](../images/studioSetup/40_BackgroundTasks.png)
    
    * ***Warnung:*** Fahre mit den folgenden Schritten nicht fort, wenn Fehler auftreten. \ Schaue auf der [Seite zur Problembehebung in Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio) nach bekannten Problemen!
    
    ![Gradle Sync Fehler](../images/studioSetup/41_GradleSyncError.png)

* Klicke in der Menüzeile auf "Build" (1) und wähle "Generate Signed Bundle / APK..." (2).
    
    ![Apk erstellen](../images/studioSetup/42_MenuBuild.png)

* Wähle "APK" (1) statt "Android App Bundle" aus und klicke auf "Next" (2).
    
    ![APK statt Bundle](../images/studioSetup/43_Apk.png)

* Stelle sicher, dass als Modul "AndroidAPS.app" (1) ausgewählt ist.

* Klicke auf “Create new...” (2), um Deinen key store zu erstellen.
    
    ***Hinweis:*** Ein key store ist in diesem Fall nichts anderes als eine Datei, in der die Signierdaten gespeichert werden. Sie ist verschlüsselt und passwortgeschützt.
    
    ![Key Store erstellen](../images/studioSetup/44_KeystoreNew.png)

* Klicke das Ordner-Symbol, um den Pfad zu wählen, unter dem Dein key store auf Deinem PC gespeichert werden soll.
    
    ![Key Store erstellen](../images/studioSetup/45_KeystoreDialog.png)

* Wähle den Pfad, in dem Dein key store gespeichert werden soll (1).
    
    ![Key Store erstellen](../images/studioSetup/46_KeystorePath.png)
    
    ***Speichere ihn nicht im gleichen Ordner wie Dein Projekt. Du musst ein anderes Verzeichnis verwenden!*** Dein Benutzerordner wäre ein guter Speicherort.

* Gib einen Dateinamen für Deinen key store ein (2) und bestätige mit "OK" (3).

* Gib das Passwort für Deinen key store ein (2) und bestätige es (3).![Key store Pfad wählen](../images/studioSetup/47_KeystoreDialog.png)
    
    ***Hinweis:*** Passwörter für key store und key müssen nicht sehr anspruchsvoll sein. Merke sie Dir gut oder notiere sie an einem sicheren Ort. In case you will not remember your passwords in the future, see [troubleshooting for lost key store](../Installing-AndroidAPS/troubleshooting_androidstudio.md#lost-keystore).

* Gib einen Alias für Deinen key ein (4). Wähle eine beliebige Bezeichnung.

* Gib das Passwort für Deinen key ein (5) und bestätige es (6).

* Als Validity (Gültigkeit) (7) ist standardmäßig 25 Jahre voreingestellt. Das musst Du nicht verändern.

* Ein Vor- und Nachname müssen eingegeben werden (8). Alle anderen Informationen sind optional.

* Klicke auf "OK" (9), wenn Du fertig bist.

* Achte darauf, dass die Checkbox "remember passwords" ausgewählt ist (1). Dann musst Du sie bei der nächsten App-Erstellung (z.B. beim Update auf eine neue AndroidAPS Version) nicht erneut eingeben.

* Klicke auf "Next" (2).
    
    ![Passwörter speichern](../images/studioSetup/48_KeystoreSave.png)

* Wähle die Build-Variante "fullRelease" (1) und drücke "Finish".
    
    ![Build-Variante auswählen](../images/studioSetup/49_BuildVariant.png)

* Android Studio zeigt im unteren Teil des Fensters "Gradle Build running" an. Dies dauert eine Weile je nach Computer und Internetverbindung. **Sei geduldig!**
    
    ![Gradle läuft](../images/studioSetup/50_GradleRunning.png)

* Android Studio zeigt "Generate Signed APK" an, so bald die Erstellung der APK-Datei abgeschlossen ist.
    
    ![Build abgeschlossen](../images/studioSetup/51_BuildFinished.png)

* Falls beim Erstellen Fehler auftreten, findest Du Lösungsansätze auf den Seiten zur [Fehlerbehebung](../Installing-AndroidAPS/troubleshooting_androidstudio).

* Klicke auf die Benachrichtigung, um sie zu vergrößern.

* Klicke auf den link "locate".
    
    ![Build finden](../images/studioSetup/52_BuildLocate.png)
    
    * Falls die Benrachrichtigung automatisch geschlossen wurde, kannst Du immer den "Event log" öffen und dort den Link auswählen.![Build erfolgreich - Ereignisprotokoll](../images/studioSetup/53_EventLog.png)

* Dein Dateimanager (z.B. Windows Explorer) wird geöffnet. Navigiere zum Verzeichnis "full" (1) > "release" (2).
    
    ![Datei-Speicherort apk](../images/studioSetup/54_APKlocation.png)

* "app-full-release.apk" (3) ist die von Dir gesuchte Datei!

(transfer-apk-to-smartphone)=

## Übertrage die APK-Datei auf das Smartphone

Easiest way to transfer app-full-release.apk to your phone is via [USB cable or Google Drive](https://support.google.com/android/answer/9064445?hl=en). Please note that transfer by mail might cause difficulties and is not the preferred way.

On your phone you have to allow installation from unknown sources. Manuals how to do this can be found on the internet (i.e. [here](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) or [here](https://www.androidcentral.com/unknown-sources)).

## Problembehandlung

See separate page [troubleshooting Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio).