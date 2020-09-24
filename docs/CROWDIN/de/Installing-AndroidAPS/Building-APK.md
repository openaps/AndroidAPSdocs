# AndroidAPS installieren - App erstellen

## Kein Download möglich - APK muss selbst erstellt werden

**Aufgrund der gesetzlichen Regelungen für Medizinprodukte ist AndroidAPS nicht als Download verfügbar. Du kannst die App legal für Dich selbst erstellen, darfst aber keine Kopie an andere weitergeben! Weitere Informationen findest Du auf der [FAQ Seite](../Getting-Started/FAQ.md).**

## Wichtige Hinweise

* Nutze bitte **[Android Studio Version 3.6.1](https://developer.android.com/studio/)** oder neuer, um die APK-Datei zu erstellen.
* [Windows 10 32-bit Systeme](../Installing-AndroidAPS/troubleshooting_androidstudio#unable-to-start-daemon-process) werden bei Android Studio 3.6.1 nicht unterstützt.

** Konfiguration auf Abruf ** (Configuration on demand) wird von der aktuellen Version des Android-Gradle-Plugins nicht unterstützt!

Wenn der Build-Prozess mit einem Fehler zu "on demand configuration" fehlschlägt, dann kannst du folgendes tun:

* Das Einstellungen-Fenster öffnen, indem du auf Datei > Einstellungen (auf dem Mac: Android Studio > Preferences) klickst.
* Klicke im linken Fensterbereich auf Build, Execution, Deployment > Compiler.
* Deaktiviere die "Configure on demand" Checkbox.
* Klicke Apply oder OK.

* * *

### Dieser Artikel ist in zwei Teile geteilt.

* Im Überblick werden die wichtigsten Schritte kurz zusammengefasst die allgemein nötig sind, um die APK Datei zu erstellen.
* In der “Schritt für Schritt Anleitung” wird detailliert auf die einzelnen Punkte mithilfe von Screenshots eingegangen. Da die Versionen von Android Studio - der Software, die wir zum Bau der APK verwenden werden - sich schnell weiterentwickeln werden diese nicht mit deiner Installation übereinstimmen, aber sie geben einen guten ersten Eindruck. Android Studio läuft sowohl auf Windows, als auch auf Mac OS X und Linux. Es kann sein, dass es bei jedem Betriebssystem einige kleinere Unterschiede gibt. Bei größeren Veränderungen oder fehlenden bzw. falschen Informationen wäre es hilfreich, dies den Entwicklern in der Facebookgruppe "Android APS" oder in den Gitter Chats [Android APS](https://gitter.im/MilosKozak/AndroidAPS) oder [AndroidAPS wiki](https://gitter.im/AndroidAPSwiki/Lobby) mitzuteilen, so dass wir einen Blick darauf werfen können.

## Übersicht

Kurzfassung der wichtigsten Schritte zum Erstellen der APK Datei:

1. [Git installieren](../Installing-AndroidAPS/git-install.rst)
2. [Android Studio installieren](../Installing-AndroidAPS/Building-APK#android-tudio-installieren)
3. [Pfad zu git-exe in den Einstellungen von Android Studio festlegen](../Installing-AndroidAPS/Building-APK#git-pfad-in-android-studio-eintragen)
4. [AndroidAPS-Code herunterladen](../Installing-AndroidAPS/Building-APK#androidaps-code-herunterladen)
5. [Download Android SDK](../Installing-AndroidAPS/Building-APK#download-android-sdk)
6. [App erstellen](../Installing-AndroidAPS/Building-APK#signierte-apk-erstellen-generate-signed-apk) (generate signed apk)
7. [APK-Datei auf das Smartphone übertragen](../Installing-AndroidAPS/Building-APK#ubertrage-die-apk-datei-auf-das-smartphone)
8. [Identifiziere den Empfänger falls Du xDrip verwendest+](../Installing-AndroidAPS/Building-APK#identifiziere-den-empfanger-falls-du-xDrip-verwendest)

## Schritt für Schritt Anleitung

Detaillierte Beschreibung der notwendigen Schritte.

## Installiere git (falls du es noch nicht hast)

Die Schritt-für-Schritt-Anleitung findest Du auf der Seite zur [git Installation](../Installing-AndroidAPS/git-install.rst).

## Android Studio installieren

Die folgenden Screenshots stammen aus Android Studio Version 3.6.1. Je nach verwendeter Android Studio-Version kann Dein Bildschirm etwas anders aussehen. Aber Du solltest Dich dennoch zurechtfinden. Bei Fragen gibt es [Hilfe in der Community](../Where-To-Go-For-Help/Connect-with-other-users.md).

Einer der wichtigsten Punkte bei der Installation von Android Studio ist: **Sei geduldig!** Während der Installation und Einrichtung lädt Android Studio sehr viele Daten nach und das braucht seine Zeit.

Installiere [Android Studio](https://developer.android.com/studio/install.html) und richte es während des ersten Starts ein.

Wähle “Do not import settings”, da bisher keine Einstellungen vorgenommen wurden.

![Einstellungen nicht importieren](../images/AndroidStudio361_01.png)

Entscheide, ob Du Daten mit Google teilen möchten oder nicht.

![Daten mit Google teilen](../images/AndroidStudio361_02.png)

Klicke auf dem nächsten Bildschirm den Button "Next".

![Willkommensbildschirm](../images/AndroidStudio361_03.png)

Wähle “Standard” Installation und klicke auf “Next”.

![Standardinstallation](../images/AndroidStudio361_04.png)

Wähle das Design für die Benutzeroberfläche, das Dir am besten gefällt. (In dieser Anleitung verwenden wir "Light".) Dann klicke auf "Next". Das ist nur das Farbschema. Du kannst auswählen, was Du möchtest (z.B. "Darcula" für den dunklen Modus). Diese Auswahl hat keinen Einfluss auf die Erstellung der APK.

![Farbschema](../images/AndroidStudio361_05.png)

Klicke auf “Finish” im Fenster “Verify Settings”.

![Einstellungen überprüfen](../images/AndroidStudio361_06.png)

Warte während Android Studio zusätzliche Komponenten herunterlädt und bleibe geduldig. Sobald alles heruntergeladen ist, wird der Button "Finish" blau dargestellt. Klicke diesen dann an.

![Komponenten herunterladen](../images/AndroidStudio361_07.png)

## Git-Pfad in Android Studio eintragen

Stelle sicher, dass [git auf Deinem Computer installiert ist](../Installing-AndroidAPS/git-install.rst).

Klicke auf dem Android Studio Willkommensbildschirm auf das kleine Dreieck (1. im folgenden Screenshot) und wähle "Settings" (2.).

![Einstellungen für Android Studio vom Willkommensbildschirm aus](../images/AndroidStudio361_08.png)

### Windows

* Klicke auf das kleine Dreieck neben Version Control (1.), um das Untermenü zu öffnen.
* Git (2.) anklicken.
* Stelle sicher, dass die update method "Merge" (3.) ausgewählt ist.
* Check if Android Studio can locate path to git.exe automatically by clicking the button "Test" (4.)
    
    ![Android Studio settings](../images/AndroidStudio361_09.png)

* If automatic setting is successful git version will be displayed.

* Click "OK" in the dialog box (1.) and "OK" in the settings window (2.).
    
    ![Automatic git installation succeeded](../images/AndroidStudio361_10.png)

* In case file git.exe cannot be found click "OK" in the dialog box (1.) and then the button with the three dots (2.).

* Use [search function](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html) in windows explorer to find "git.exe" if you are unsure where it can be found. Du brauchst die git.exe, die im Ordner \bin\ gespeichert ist.
* Select path to git.exe and make sure you selected the one in ** \bin\ ** folder (3.) and click "OK" (4.).
* Close settings window by clicking "OK" button (5.).
    
    ![Automatic git installation failed](../images/AndroidStudio361_11.png)

* **Reboot your computer to update system environment.**

### Mac

* Any git version should work. For example <https://git-scm.com/download/mac>.
* Use homebrew to install git: ```$ brew install git```.
* For details on installing git see the [official git documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
* If you install git via homebrew there is no need to change any preferences. Im Fall der Fälle findest Du diese unter Android Studio - Preferences.

## AndroidAPS-Code herunterladen

* **If you haven't already rebooted your computer after setting git path in preferences do it now. System environment must be updated.**

* There are two options to start a new project:
    
    * On the Android Studio welcome screen click "Get from version control"
        
        ![Check out project from version control from welcome screen](../images/AndroidStudio_GetFromVersionControl.PNG)
    
    * If you already opened Android Studio and do not see the welcome screen anymore select File (1.) > New (2.) > Project from Version Control... (3.)
        
        ![Check out project from version control within Android Studio](../images/AndroidStudio_FileNew.PNG)

* Fill in the URL to the main AndroidAPS repository (https://github.com/nightscout/AndroidAPS) (1.).

* Choose the directory where you want to save the cloned code. (2.)
* Click button "Clone" (3.).
    
    ![Clone repository](../images/AndroidStudio_NewURL.PNG)

* Do not click "Background" while repository is cloned!
    
    ![No background action](../images/AndroidStudio_NoBackground.png)

* After repository is cloned successfully open your local copy by clicking "Yes".
    
    ![Open repository](../images/AndroidStudio361_16.png)

* In the lower right corner you will see the information that Android Studio is running background tasks.
    
    ![Background tasks](../images/AndroidStudio361_17.png)

* Grant access if your firewall is asking for permission.
    
    ![Firewall permission java](../images/AndroidStudio361_18.png)

* Once the background tasks are finished you will probably see the following error message:
    
    ![SDK licence](../images/AndroidStudio361_19.png)

## Download Android SDK

* Click File > Settings.
    
    ![Open settings](../images/AndroidStudio361_20.png)

* Click the small triangle next to Appearance & Behaviour (1.).

* Click the small triangle next to System Settings (2.) and select Android SDK (3.)
* Check the box left of "Android 9.0 (Pie)" (4.) (API Level 28).
    
    ![SDK settings](../images/AndroidStudio361_21.png)

* Confirm changes by clicking OK.
    
    ![Confirm SDK changes](../images/AndroidStudio361_22.png)

* Accept licence agreement (1.) and click "Next" (2.).
    
    ![Accept SDK licence](../images/AndroidStudio361_23.png)

* Wait until installation is finished.
    
    ![Wait during SDK installation](../images/AndroidStudio361_24.png)

* When SDK installation is completed the "Finish" button will turn blue. Click this button.
    
    ![Finish SDK installation](../images/AndroidStudio361_25.png)

* Android Studio might recommend to update the gradle system. **Never update gradle!** This might lead to difficulties!

* If you see an information on the lower right side of your Android Studio window that Android Gradle Plugin is ready to update click on the text "update" (1.) and in the dialog box on "Don't remind me again for this project" (2.).
    
    ![No cradle update](../images/AndroidStudio361_26.png)

## Signierte APK erstellen (Generate signed APK)

Signing means that you indicate your app to be your own creation but in a digital way as a kind of digital fingerprint within the app itself. That is necessary because Android has a rule that it only accepts signed code to run for security reasons. For more information on this topic, follow [this link](https://developer.android.com/studio/publish/app-signing.html#generate-key).

* Klicke in der Menüzeile auf "Build" und wähle "Generate Signed Bundle / APK...".
    
    ![Apk erstellen](../images/AndroidStudio361_27.png)

* Wähle "APK" (1.) statt "Android App Bundle" aus und klicke auf "Next" (2.).
    
    ![APK statt Bundle](../images/AndroidStudio361_28.png)

* Make sure that module is set to "app" (1.).

* Click "Create new..." (2.) to start creating your key store.
    
    A key store in this case is nothing more than a file in which the information for signing is stored. It is encrypted and the information is secured with passwords.
    
    ![Create key store](../images/AndroidStudio361_29.png)

* Click the folder symbol (1.) to select your key store path.

* Select the path where your key store shall be saved (2.). **Do not save in same folder as project. You must use a different directory!** One option might be your home folder.
* Type a file name for your key store (3.).
* Click "OK" (4.).
* Passwords for key store and key do not have to be very sophisticated. Make sure to remember those or make a note in a safe place. In case you will not remember your passwords in the future you see [troubleshooting for lost key store](../Installing-AndroidAPS/troubleshooting_androidstudio#lost-keystore).
* Enter (5.) and confirm (6.) the password for your key store.
* Do the same for your key (7. + 8.).
* Validity (9.) is 25 years by default. You do not have to change the default value.
* First and last name must be entered (10.). All other information is optional.
* Click "OK" (11.) when you are done.
    
    ![Key store path](../images/AndroidStudio361_30.png)

* Make sure the box to remember passwords is checked (1.). So you don't have to enter them again next time you build the apk (i.e. when updating to a new AndroidAPS version).

* Click "Next" (2.).
    
    ![Remember passwords](../images/AndroidStudio361_31.png)

* Wählen Sie die Build-Variante "fullRelease" (1.) aus.

* Klicke die Checkboxen V1 und V2 für signature versions an (2.).
* Klicke auf "Finish". (3.)
    
    ![Build beenden](../images/AndroidStudio361_32.png)

* Android Studio wird die Information "APK(s) generated successfully..." anzeigen, sobald die APK-Datei vollständig erstellt wurde.

* Falls beim Erstellen Fehler auftreten, findest Du Lösungsansätze auf den Seiten zur [Fehlerbehebung](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).
* Der einfachste Weg, die fertige APK-Datei zu finden, ist ein Klick auf "Event log".
    
    ![Build erfolgreich - Ereignisprotokoll](../images/AndroidStudio361_33.png)

* Klicke im Event Log auf "locate".
    
    ![Ereignisprotokoll-apk suchen](../images/AndroidStudio361_34.png)

* app-full-release.apk ist die von Dir gesuchte Datei.
    
    ![Datei-Speicherort apk](../images/AndroidStudio361_35.png)

## Übertrage die APK-Datei auf das Smartphone

Der einfachste Weg, die Datei app-full-release.apk auf Dein Smartphone zu übertragen ist mittels [USB-Kabel oder Google Drive](https://support.google.com/android/answer/9064445?hl=de). Bitte beachte, dass die Übertragung per Mail zu Schwierigkeiten führen kann und daher nicht empfohlen wird.

Auf dem Smartphone musst Du die Installation aus unbekannten Quellen zulassen. Anleitungen dazu findest Du im Internet (z.B. [hier](https://mobilsicher.de/ratgeber/apps-aus-apk-datei-installieren-mit-android-8) oder [hier](https://www.tutonaut.de/anleitung-android-apps-unbekannten-quellen-installieren/)).

## Identifiziere den Empfänger falls Du xDrip+ verwendest

[See xDrip+ page](../Configuration/xdrip#identify-receiver)

## Problembehandlung

Siehe die separate Seite zur [Problembehandlung bei Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).