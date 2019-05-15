# Update auf eine neue Version oder branch

<font color="#FF0000"><b>Wichtiger Hinweis: Ab Version 2.3 muss für das Update git genutzt werden. Ein Update mittels ZIP-File ist nicht mehr möglich.</font></b>

## Installiere git (falls du es noch nicht hast)

### Windows

* Jede git Version sollte funktionieren. Beispiel: <https://git-scm.com/download/win>
* Notiere Dir den Installationspfad. Du brauchst diesen im nächsten Schritt.
  
  ![Git Installationspfad](../images/Update_GitPath.png)

* In Android Studio musst Du den Pfad zu git.exe hinterlegen: File - Settings
  
  ![Android Studio - Einstellungen öffnen](../images/Update_GitSettings1.png)

* Im nächsten Fenster: Version Control - Git

* Choose correct path: .../Git<font color="#FF0000"><b>/bin</b></font>

* Make sure update method "Merge" is selected.
  
  ![Android Studio - GIT path](../images/Update_GitSettings2a.png)

### Mac

* Jede git Version sollte funktionieren. For example <https://git-scm.com/download/mac>
* Use homebrew to install git: ```$ brew install git```.
* For details on installing git see the [official git documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
* If you install git via homebrew there is no need to change any preferences. Just in case: They can be found here: Android Studio - Preferences.

## Führe ein Update deiner lokalen Version durch

* Click: VCS->Git->Fetch
  
  ![Android Studio - GIT - Fetch](../images/Update_Fetch.png)

## Branch auswählen

* If you want to change branch select another branch from tray: master (latest release) or another version (please see below)
  
  ![](../images/UpdateAAPS1.png)

und anschließend "checkout". Verwende 'Checkout as New Branch' falls 'Checkout' nicht angezeigt wird.

     ![](../images/UpdateAAPS2.png)
    

## Branch-Update von Github

* Press Ctrl+T, select Merge method and press OK
  
  ![](../images/merge.png)

On the tray you'll see green message about updated project

## Siginierte APK erstellen (Generate signed APK)

<!--- Text is maintained in page building-apk.md ---> Wähle im Menü "Build" und dann "Generate Signed Bundle / APK...". (Das Menü in Android Studio wurde im September 2018 geändert. Falls Du eine ältere Version benutzt, wähle im Menü “Build” und dann “Generate Signed APK...”.)

  
Signieren bedeutet, dass du deine generierte Anwendung unterschreibst, aber digital als eine Art digitaler Fingerabdruck in der Anwendung selbst. Es ist notwendig, die App digital zu signieren, da Android aus Sicherheitsgründen nur signierten Code akzeptiert. Falls dich das Thema interessiert, findest du [hier](https://developer.android.com/studio/publish/app-signing.html#generate-key) mehr. Sicherheit ist ein großes und komplexes Thema, um das du dich zur Zeit noch nicht kümmern musst.

![Screenshot 39a](../images/Installation_Screenshot_39a.PNG)

Wähle in der folgenden Dialogbox "APK" statt "Android App Bundle" und klicke auf den Button "Next".

![Screenshot 39b](../images/Installation_Screenshot_39b.PNG)

Wähle “App” aus und klicke auf “Next”.

![Screenshot 40](../images/Installation_Screenshot_40.png)

Enter your key store path, enter key store password, select key alias and enter key password.

Select 'Remember passwords'.

Then click next.

![Key store path](../images/KeystorePathUpdate.PNG)

Wähle “full” in dem “Flavors” Menü aus, um die vollständige AndroidAPS App zu erstellen und klicke auf V1 “Jar Signature” (V2 ist optional) und klicke auf “Finish”. Folgende Informationen könnten später für dich nützlich sein:

* “Release” solltest du immer lassen, “Debug” ist nur für Programmierer, um Fehler zu finden.
* Wähle den “build type”, den du kompilieren möchtest: 
  * full (d.h. automatische Pumpensteuerung im Closed Loop)
  * openloop (d.h. gibt temporäre Basalraten-Vorschläge, die manuell auszuführen sind)
  * pumpcontrol (d.h. nur Fernbedienung für die Pumpe, kein Loopen)
  * nsclient (d.h. es werden z.B. die Daten eines anderen Nutzers dargestellt und Careportal-Einträge können hinzugefügt werden)

![Screenshot 44](../images/Installation_Screenshot_44.png)

Im event log sollte jetzt angezeigt werden, dass die signierte APK erfolgreich generiert wurde.

![Screenshot 45](../images/Installation_Screenshot_45.png)

Klicke auf “locate” im “event log”.

![Screenshot 46](../images/Installation_Screenshot_46.png)

## Übertrage die APK-Datei auf das Smartphone

<!--- Text is maintained in page building-apk.md ---> Es sollte sich ein Datei Manager öffnen. Das könnte bei dir anders aussehen (dieser Screenshot wurde auf einem Linux PC erstellt). In Windows wird sich der “Explorer” öffnen, in Mac OS X der “Finder”. Dort solltest du jetzt das Verzeichnis mit der APK-Datei sehen. Es ist aber unglücklicherweise nicht die, die wir suchen, sondern nur die “wear-release.apk”.

![Screenshot 47](../images/Installation_Screenshot_47.png)

Um zu der gesuchten APK zu gelangen, musst du zu dem Ordner AndroidAPS/app/full/release gehen und nach der “app-full-release.apk” Datei Ausschau halten. Übertrage die Datei auf dein Smartphone. Sie können es auf Ihre bevorzugte Weise tun, z.B. Bluetooth, Cloud Upload, Computer und Telefon per Kabel verbinden oder E-Mail verwenden. In diesem Beispiel verwende ich Gmail, da dies für mich ziemlich einfach ist. Ich erwähne das deshalb, weil wir Android erlauben müssen, auf unserem Smartphone diese Installation auszuführen, auch wenn diese Datei via Google Mail empfangen wurde, was normalerweise verboten ist. Wenn Du einen anderen Übertragungsweg nutzt, setze die entsprechenden Rechte analog zum Vorgehen bei Gmail.

![Screenshot 48](../images/Installation_Screenshot_48.png)

In den Einstellungen deines Smartphones gibt es den Bereich "Unbekannte Quellen". Dort musst du Gmail das Recht geben, APK Dateien zu installieren, die du per Gmail erhalten hast.

Klicke dort auf “aus dieser Quelle zulassen”. Nach der Installation ist es empfehlenswert dies aus Sicherheitsgründen wieder rückgängig zu machen.

![Installation von Apps aus unbekannten Quellen zulassen](../images/Installation_Screenshot_49-50.png)

Der letzte Schritt ist es, auf die APK Datei zu klicken und die App zu installieren. Sollte es nicht funktionieren, kann es sein, dass sich eine ältere Version mit einem anderen “Key”/einer anderen Signatur auf dem Handy befindet. Exportiere deine Einstellungen aus der älteren Version und deinstalliere diese erst danach.

Herzlichen Glückwunsch, du hast es geschafft! Nun kannst du AndroidAPS starten und einrichten.

## Check AAPS version on phone

You can check the AAPS version on your phone by clicking the three dots menu on the top right and then about.

![AAPS version installed](../images/Update_VersionCheck.png)

# Problembehandlung

## Kotlin compiler warning

If build completed successfully but you get Kotlin compiler warnings then just ignore these warnings.

App was build successfully and can be transferred to phone.

![ignore Kotline compiler warning](../images/GIT_WarningIgnore.PNG)

## Could not download… / Offline Work

If you get a failure message like this

![Warning could not download](../images/GIT_Offline1.jpg)

make sure that ‘Offline work’ is disabled.

File -> Settings

![Settings offline work](../images/GIT_Offline2.jpg)

## Uncommitted changes

If you receive failure message like

![Failure uncommitted changes](../images/GIT_TerminalCheckOut0.PNG)

### Option 1

* In Android APS select VCS -> GIT -> Reset HEAD ![Reset HEAD](../images/GIT_TerminalCheckOut3.PNG)

### Option 2

* Copy ‘git checkout --’ to clipboard (without quote signs)
* Switch to Terminal in Android Studio (lower left side of Android Studio window) ![Android Studio Terminal](../images/GIT_TerminalCheckOut1.PNG)

* Paste copied text and press return ![GIT checkout success](../images/GIT_TerminalCheckOut2.jpg)

## App not installed

![phone app note installed](../images/Update_AppNotInstalled.png)

* Make sure you have transferred the “app-full-release.apk” file to your phone.
* If "App not installed" is displayed on your phone follow these steps: 
  1. [Exportiere die Einstellungen](../Usage/Objectives#export-import-settings) (in der AAPS Version, die bereits auf Deinem Smartphone installiert ist)
  2. Uninstall AAPS on your phone.
  3. Enable airplane mode & turn off bluetooth.
  4. Install new version (“app-full-release.apk”)
  5. [Importiere die Einstellungen](../Usage/Objectives#export-import-settings)
  6. Turn bluetooth back on and disable airplane mode

## App installed but old version

If you build the app successfully, transferred it to your phone and installed it successfully but the version number stays the same then you might have missed the merging step in the [update manual](…/Installing-AndroidAPS/Update-to-new-version.html#updating-branch-from-github).

## None of the above worked

If non of the above tips helped you might consider building the app from scratch:

1. [Exportiere die Einstellungen](../Usage/Objectives#export-import-settings) (in der AAPS Version, die bereits auf Deinem Smartphone installiert ist)
2. Have your key password and key store password ready In case you have forgotten passwords you can try to find them in project files as described [here](https://youtu.be/nS3wxnLgZOo).
3.     Note down the path to your key store
      In Android Studio Build -> Generate Signed APK
      ![Key store path](../images/KeystorePath.PNG)
      
  
  4. Erstelle die App von Grund auf neu wie [hier](…/Installing-AndroidAPS/Building-APK.html#download-code-and-additional-components) beschrieben. Verwende dabei den bestehenden key und key store.
4. Nachdem Du die APK erfolgreich erstellt hast, kannst Du die App auf Deinem Smartphone deinstallieren. Übertrage dann die neue APK auf Dein Smartphone und installiere diese.
5. [Importiere die Einstellungen](../Usage/Objectives#export-import-settings)

## Worst case scenario

In case even building the app from scratch does not solve your problem you might want to try to uninstall Android Studio completely. Some Users reported that this solved their problem.

Make sure to uninstall all files associated with Android Studio. Manuals can be found online i.e. <https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10>.

Install Android Studio from scratch as described [here](/Installing-AndroidAPS/Building-APK#install-android-studio).