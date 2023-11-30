# AndroidAPS installieren - App erstellen

## Kein Download möglich - APK muss selbst erstellt werden

**Aufgrund der gesetzlichen Regelungen für Medizinprodukte ist AndroidAPS nicht als Download verfügbar. Es ist zulässig, die App für den eigenen Gebrauch zu erstellen, aber du darfst keine Kopie an andere weitergeben! Weitere Informationen findest Du auf der [FAQ Seite](../Getting-Started/FAQ.md).**

## Wichtige Hinweise

* Please use **[Android Studio Giraffe" (2022.3.1)](https://developer.android.com/studio/)** or newer to build the apk.
* [Windows 32-bit systems](troubleshooting_androidstudio-unable-to-start-daemon-process) are not supported by Android Studio

(Building-APK-recommended-specification-of-computer-for-building-apk-file)=

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

Please keep in mind that both **64 bit CPU and 64 bit OS are mandatory condition.** If your system DOES NOT meet this condition, you have to change affected hardware or software or the whole system. **Es wird dringend empfohlen, SSD (Solid State Disk) anstelle von HDD (Hard Disk Drive) zu verwenden, da dies dies die Zeit zur Erstellung der APS-Installationsdatei reduziert.** Dies wird nur eine Empfohlung und ist nicht zwingend erforderlich. Du kannst auch eine normale Festplatte verwenden. Beachte aber, dass der Prozess zur Erstellung der APK-Datei dann länger dauert. Du kannst den Prozess aber unbeaufsichtigt laufen lassen, nachdem Du ihn gestartet hast.

* * *

### Dieser Artikel ist in zwei Teile geteilt.

* Im Überblick werden die wichtigsten Schritte kurz zusammengefasst die allgemein nötig sind, um die APK Datei zu erstellen.
* In der “Schritt für Schritt Anleitung” wird detailliert auf die einzelnen Punkte mithilfe von Screenshots eingegangen. Da die Versionen von Android Studio - der Software, die wir zum Bau der APK verwenden werden - sich schnell weiterentwickeln werden diese nicht mit deiner Installation übereinstimmen, aber sie geben einen guten ersten Eindruck. Android Studio läuft sowohl auf Windows als auch auf Mac OS X und Linux. Es kann sein, dass es bei jedem Betriebssystem einige kleinere Unterschiede gibt. Falls Du feststellst, dass etwas wichtiges falsch ist oder fehlt, informiere bitte die Facebook Gruppe "AndroidAPS users" oder im Discord chat [Android APS](https://discord.gg/4fQUWHZ4Mw), damit wir uns das anschauen können.

## Übersicht

Kurzfassung der wichtigsten Schritte zum Erstellen der APK Datei:

1. [Git installieren](../Installing-AndroidAPS/git-install.md)
2. [Android Studio installieren](Building-APK-install-android-studio)
3. [Pfad zu git.exe in den Einstellungen von Android Studio festlegen](Building-APK-set-git-path-in-preferences)
4. [Download AAPS-Code](Building-APK-download-AAPS-code)
5. [Download Android SDK](Building-APK-download-android-sdk)
6. [App erstellen](Building-APK-generate-signed-apk) (generate signed apk)
7. [APK-Datei auf das Smartphone übertragen](Building-APK-transfer-apk-to-smartphone)
8. [Identifiziere den Empfänger falls Du xDrip verwendest+](xdrip-identify-receiver)

## Schritt für Schritt Anleitung

Detaillierte Beschreibung der notwendigen Schritte.

## Installiere git (falls du es noch nicht hast)

Die Schritt-für-Schritt-Anleitung findest Du auf der Seite zur [git Installation](../Installing-AndroidAPS/git-install.md).

(Building-APK-install-android-studio)=

## Android Studio installieren

Die folgenden Screenshots stammen von Android Studio Version Arctic Fox | 2020.3.1. Die Bildschirme können bei zukünftigen Versionen von Android Studio leicht anders aussehen. Aber Du solltest Dich dennoch zurechtfinden. Bei Fragen gibt es [Hilfe in der Community](../Where-To-Go-For-Help/Connect-with-other-users.md).

Einer der wichtigsten Punkte bei der Installation von Android Studio ist: **Sei geduldig!** Während der Installation und Einrichtung lädt Android Studio sehr viele Daten nach und das braucht seine Zeit.

Lade [Android Studio von dieser Seite](https://developer.android.com/studio/install.html) herunter und installiere es auf Deinem Computer.

Beim ersten Start öffnet sich der Setup Wizard:

Wähle “Do not import settings”, da bisher keine Einstellungen vorgenommen wurden.

![Einstellungen nicht importieren](../images/studioSetup/01_ImportSettings.png)

Entscheide, ob Du Daten mit Google teilen möchtest oder nicht.

![Daten mit Google teilen](../images/studioSetup/02_DataSharing.png)

Klicke auf dem nächsten Bildschirm den Button "Next".

![Willkommensbildschirm](../images/studioSetup/03_Welcome.png)

Wähle “Standard” Installation und klicke auf “Next”.

![Standardinstallation](../images/studioSetup/04_InstallType.png)

Wähle das Design für die Benutzeroberfläche, welches Dir am besten gefällt. (In dieser Anleitung verwenden wir "Light".) Dann klicke auf "Next".

> ***Hinweis:*** Das ist nur das Farbschema. Du kannst auswählen, was Du möchtest (z.B. "Darcula" für den dunklen Modus). Diese Auswahl hat keinen Einfluss auf das Erstellen der APK, aber die folgenden Screenshots könnten anders aussehen.

![Farbschema](../images/studioSetup/05_UITheme.png)

Click "Next" on the "Verify Settings" dialog.

![Einstellungen überprüfen](../images/studioSetup/06_Overview.png)

Click on all three license agreement parts and select "Agree". When you have agreed to all, the "Finish" button will be enabled and you can "Finish".

    ![Agree license agreements](../images/studioSetup/07_LicenseAgreement.png)
    

Wait while Android Studio downloads additional components and be patient. Once everything is downloaded button "Finish" turns blue. Click the button now.

![Downloading components](../images/studioSetup/08_Downloading.png)

(Building-APK-download-AAPS-code)=

## Download AAPS-Code

* On the Android Studio welcome screen select "Projects" (1) on the left and then "Get from VCS" (2).
    
    ![Android Studio wizard](../images/studioSetup/20_ProjectVCS.png)
    
    * If you already opened Android Studio and do not see the welcome screen anymore select File (1) > New (2) > Project from Version Control... (3)
        
        ![Check out project from version control within Android Studio](../images/AndroidStudio_FileNew.PNG)
    
    * We will now tell Android Studio were to get the code from:
    
    * Make sure you have selected "Repository URL" on the left (1).
    
    * Check if "Git" is selected as version control (2).
    * Copy and paste the URL ```https://github.com/nightscout/AndroidAPS``` to the main AAPS repository into the URL textbox (3).
    * Choose the directory where you want to save the cloned code (4).
        
        ![Clone Git](../images/studioSetup/21_CloneURL.png)

* Click button "Clone" (5).
    
    ![Clone repository](../images/studioSetup/22_Cloning.png)

* Do not click "Background" while repository is cloned!

* After the repository is cloned successfully, Android Studio will open the cloned project.

* You will be asked whether you want to trust the project. Click on "Trust project"!
    
    ![Trust project](../images/studioSetup/23_TrustProject.png)

* In the status bar at the bottom you will see the information that Android Studio is running background tasks.
    
    ![Background tasks](../images/studioSetup/24_GradleSyncRunning.png)

* Windows only: Grant access if your firewall is asking for permission.
    
    ![Firewall permission java](../images/AndroidStudio361_18.png)

* Once the background tasks are finished you will probably see an error saying that errors occurred (1) or (2) or (3).
    
    ![SDK licence](../images/studioSetup/25_SyncFailed.png)
    
    Don't worry, this will be solved soon!

(Building-APK-set-git-path-in-preferences)=

## Set git path in preferences

Make sure [git is installed](../Installing-AndroidAPS/git-install.md) on your computer and you have restarted your computer since installing.

On the Android Studio welcome screen click "Customize" (1) on the left and then select the link "All settings..." (2):

![Android Studio settings from welcome screen](../images/studioSetup/10_WizardSettings.png)

### Windows

* As windows user, make sure you have restarted your computer after [installing Git](../Installing-AndroidAPS/git-install.md).

* Gehe im Menü auf Datei (1) > Einstellungen (2) (oder Android Studio > Einstellungen auf dem Mac).
    
    ![Einstellungen öffnen](../images/studioSetup/30_Settings.png)

* Double-click "Version Control" (1) to open the sub-menu.

* Click Git (2).
* Make sure update method "Merge" (3) is selected.
* Check if Android Studio can locate path to git.exe automatically by clicking the button "Test" (4).
    
    ![Android Studio settings](../images/studioSetup/11_GitPath.png)

* If automatic setting is successful git version will be displayed next to the path.
    
    ![Git version displayed](../images/studioSetup/12_GitVersion.png)

* Eventually git.exe cannot be found automatically or the Test will result in an error (1):
    
    ![Git not found](../images/studioSetup/13_GitVersionError.png)
    
    In this case click on the folder icon (2).

* Use [search function](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html) in windows explorer to find "git.exe" if you are unsure where git has been installed. You are looking for a file named "git.exe", located in **\bin** folder.

* Select path to git.exe and make sure you selected the one in ** \bin\ ** folder (3) and click "OK" (4).
    
    ![Select git manually](../images/studioSetup/14_GitManualSelection.png)

* Check your selected git path again with the "Test" button as described above.

* When the git version is displayed next to the path (see screenshot above), close settings window by clicking "OK" button (5).

### Mac

* Any git version should work. For example <https://git-scm.com/download/mac>.
* Use homebrew to install git: ```$ brew install git```.
* For details on installing git see the [official git documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
* If you install git via homebrew there is no need to change any preferences. Just in case: They can be found here: Android Studio - Preferences.

(Building-APK-download-android-sdk)=

## Download Android SDK

* Gehe im Menü auf Datei (1) > Einstellungen (2) (oder Android Studio > Einstellungen auf dem Mac).
    
    ![Einstellungen öffnen](../images/studioSetup/30_Settings.png)

* Double-click on Languages & Frameworks to open its submenu (1).

* Select Android SDK (2).
* Tick the box left of "Android 9.0 (Pie)" (3) (API Level 28).
    
    ![SDK-Einstellungen](../images/studioSetup/31_AndroidSDK.png)

* Bestätige die Änderungen durch Klick auf OK.
    
    ![SDK-Änderungen bestätigen](../images/studioSetup/32_ConfirmSDK.png)

* Wait until the SDK download and installation is finished.
    
    ![Wait during SDK installation](../images/studioSetup/34_DownloadSDK.png)

* When SDK installation is completed the "Finish" button will turn blue. Click this button.
    
    ![Finish SDK installation](../images/studioSetup/35_DownloadSDKfinished.png)

* Android Studio might recommend to update the gradle system. **Never update gradle!** This will lead to difficulties!

* If you see an information on the lower right side of your Android Studio window that Android Gradle Plugin is ready to update click on the text "upgrade" (1).
    
    ![Kein Gradle Update](../images/studioSetup/36_GradleUpdateRequest.png)

* In the dialog box the select "Don't remind me again for this project" (2).
    
    ![Kein Gradle Update](../images/studioSetup/37_GradleUpdateDeny.png)

* Restart Android Studio before you continue.

(Building-APK-generate-signed-apk)=

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

* Make sure that module is set to "AndroidAPS.app" (1).

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
    
    ***Hinweis:*** Passwörter für key store und key müssen nicht sehr anspruchsvoll sein. Merke sie Dir gut oder notiere sie an einem sicheren Ort. Falls Du künftig einmal keinen Zugriff auf die Passwörter haben solltest, findest Du einen Lösungsvorschlag unter [Fehlerbehebung verlorener key store](troubleshooting_androidstudio-lost-keystore).

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

(Building-APK-transfer-apk-to-smartphone)=

## Übertrage die APK-Datei auf das Smartphone

Easiest way to transfer app-full-release.apk to your phone is via [USB cable or Google Drive](https://support.google.com/android/answer/9064445?hl=en). Please note that transfer by mail might cause difficulties and is not the preferred way.

On your phone you have to allow installation from unknown sources. Manuals how to do this can be found on the internet (i.e. [here](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) or [here](https://www.androidcentral.com/unknown-sources)).

## Problembehandlung

See separate page [troubleshooting Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio).