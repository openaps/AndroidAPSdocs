# AndroidAPS installieren - App erstellen

* * *

**Wichtiger Hinweis:** AndroidAPS Version 2.3 kann nicht mit der neuesten Android Studio Version erstellt werden. Verwende bitte Android Studio 3.4. Diese kannst Du [hier](https://developer.android.com/studio/archive?) herunterladen.

**Bitte beachte** beim Erstellen einer AndroidAPS 2.0 apk: **Configuration on demand** wird in der aktuellen Version des Android Gradle Plugins nicht unterstützt!

Wenn der Build-Prozess mit einem Fehler zu "on demand configuration" fehlschlägt, dann kannst du folgendes tun:

* Das Einstellungen-Fenster öffnen, indem du auf Datei > Einstellungen (auf dem Mac: Android Studio > Preferences) klickst.
* Klicke im linken Fensterbereich auf Build, Execution, Deployment > Compiler.
* Deaktiviere die "Configure on demand" Checkbox.
* Klicke Apply oder OK.

* * *

### Dieser Artikel ist in zwei Teile geteilt.

* Im Überblick werden die wichtigsten Schritte kurz zusammengefasst die allgemein nötig sind, um die APK Datei zu erstellen.
* In der “Schritt für Schritt Anleitung” wird detailliert auf die einzelnen Punkte mithilfe von Screenshots eingegangen. Da die Versionen von Android Studio - der Software, die wir zum Bau der APK verwenden werden - sich schnell weiterentwickeln werden diese nicht mit deiner Installation übereinstimmen, aber sie geben einen guten ersten Eindruck. Android Studio läuft sowohl auf Windows, als auch auf Mac OS X und Linux. Es kann sein, dass es bei jedem Betriebssystem einige kleinere Unterschiede gibt. Bei grösseren Veränderungen oder fehlenden bzw. falschen Informationen wäre es hilfreich, dies den Entwicklern in der Facebookgruppe "Android APS" oder in den Gitter Chats [Android APS](https://gitter.im/MilosKozak/AndroidAPS) oder [AndroidAPSwiki](https://gitter.im/AndroidAPSwiki/Lobby) mitzuteilen, so dass wir einen Blick darauf werfen können.

## Übersicht

Kurzfassung der wichtigsten Schritte zum Erstellen der APK Datei:

* Installiere git
* Installiere und konfiguriere Android Studio.
* Nutze git clone, um den Quellcode von AndroidAPS auf Github zu downloaden.
* Öffne das heruntergeladene Projekt in Android Studio.
* Erstelle die signierte APK.
* Übertrage die erstellte APK auf dein Smartphone.

## Schritt für Schritt Anleitung

Detaillierte Beschreibung der notwendigen Schritte.

## Installiere git (falls du es noch nicht hast)

### Windows

* Jede git Version sollte funktionieren. Beispiel: <https://git-scm.com/download/win>
* Notiere Dir den Installationspfad. You will need it later after you installed Android Studio.
  
  ![Git Installationspfad](../images/Update_GitPath.png)

### Mac

* Jede git Version sollte funktionieren. Zum Beispiel <https://git-scm.com/download/mac>
* Benutze Homebrew um git zu installieren: ```$ brew install git```.
* Details zur Installation von git findest Du in der [offiziellen git Dokumentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

## Install Android Studio

Install [Android Studio](https://developer.android.com/studio/install.html) and setup during first start.

Select "Do not import settings" as you have not used it before.

![Screenshot 1](../images/Installation_Screenshot_01.png)

Click "Next".

![Screenshot 2](../images/Installation_Screenshot_02.png)

Select "Standard" installation and click "Next".

![Screenshot 3](../images/Installation_Screenshot_03.png)

Select the theme for the user interface you like. (In this manual we used "Intellij". Then click "Next". This is just the color scheme. You can select any you like (i.e. "Darcula" for dark mode). This selection has no influence on building the APK.

![Screenshot 4](../images/Installation_Screenshot_04.png)

Click "Next" on the "Verify Settings" dialog.

![Screenshot 5](../images/Installation_Screenshot_05.png)

The Android emulator (to emulate the smartphone on your PC or Mac) is not used to build the APK. You can click "Finish" to finish the installation and read the documentation later on demand.

![Screenshot 6](../images/Installation_Screenshot_06.png)

Android Studio is downloading a lot of software components it uses. You can click on the "Show Details" button to the what happens but that's not important at all.

![Screenshot 7](../images/Installation_Screenshot_07.png)

![Screenshot 8](../images/Installation_Screenshot_08.png)

After the downloads are completed click the "Finish" button.

![Screenshot 9](../images/Installation_Screenshot_09.png)

* Applause, applause you have now finished the Android Studio installation and can start cloning the source code. Maybe it's time for a short break?

## Set git path in preferences

### Windows

* In Android Studio musst Du den Pfad zu git.exe hinterlegen: File - Settings
  
  ![Android Studio - Einstellungen öffnen](../images/Update_GitSettings1.png)

* Im nächsten Fenster: Version Control - Git

* Wähle den richtigen Pfad: .../Git<font color="#FF0000"><b>/bin</b></font>

* Stelle sicher, dass die update method "Merge" ausgewählt ist.
  
  ![Android Studio - Pfad zu GIT](../images/Update_GitSettings2a.png)

### Mac

* Wenn Du git über homebrew installierst, musst Du keine Einstellungen ändern. Im Fall der Fälle findest Du diese unter Android Studio - Preferences.

## Download code and additional components

* Use git clone in Android Studio as shown in screenshots below. Select "Check out project from Version Control" with "Git" as concrete version control system.

![Screenshot 10](../images/Installation_Screenshot_10.png)

![Version_Control_Git](../images/Version_Control_Git.png)

Fill in the URL to the main AndroidAPS repository ("https://github.com/MilosKozak/AndroidAPS") and click "clone".

![Screenshot 13](../images/Installation_Screenshot_13.png)

Android Studio will start cloning. Don't click "Background" as it goes fast and makes things more complicated at the moment.

![Screenshot 14](../images/Installation_Screenshot_14.png)

Finish the checkout from version control with opening the project by clicking "Yes".

![Screenshot 15](../images/Installation_Screenshot_15.png)

Use the standard "default gradle wrapper" and click "OK".

![Screenshot 16](../images/Installation_Screenshot_16.png)

Read and close the "Tip of Day" screen of Android Studio by pressing "Close".

![Screenshot 17](../images/Installation_Screenshot_17.png)

* Excellent, you have your own copy of the source code and are ready to start the build.
* Now we are approaching our first error message. Fortunately, Android Studio will directly give us the solution for this.

Click "Install missing platform(s) and sync project" as Android Studio needs to install a missing platform.

![Screenshot 18](../images/Installation_Screenshot_18.png)

Accept the license agreement by selecting "Accept" and clicking "Next".

![Screenshot 19](../images/Installation_Screenshot_19.png)

As it is said in the dialog please wait until the download is finished.

![Screenshot 20](../images/Installation_Screenshot_20.png)

Now it's finished. Please click "Finish".

![Screenshot 21](../images/Installation_Screenshot_21.png)

Aaaahhh, next error. But Android Studio suggests a similar solution. Click "Install Build Tools and sync project" as Android Studio needs to download missing Tools.

![Screenshot 22](../images/Installation_Screenshot_22.png)

As it is said in the dialog please wait until the download is finished.

![Screenshot 23](../images/Installation_Screenshot_23.png)

Now it's finished. Please click "Finish".

![Screenshot 24](../images/Installation_Screenshot_24.png)

And another error to handle as Android Studio needs to download again a missing platform. Click "Install missing platform(s) and sync project".

![Screenshot 25](../images/Installation_Screenshot_25.png)

As it is said in the dialog please wait until the download is finished.

![Screenshot 26](../images/Installation_Screenshot_26.png)

Now it's finished. Please click "Finish".

![Screenshot 27](../images/Installation_Screenshot_27.png)

Click "Install Build Tools and sync project" as Android Studio needs to download missing Tools.

![Screenshot 28](../images/Installation_Screenshot_28.png)

As it is said in the dialog please wait until the download is finished.

![Screenshot 29](../images/Installation_Screenshot_29.png)

Now it's finished. Please click "Finish".

![Screenshot 30](../images/Installation_Screenshot_30.png)

Yeah, the error messages are gone and the first gradle build is runing. Maybe it's time to drink some water?

![Screenshot 31](../images/Installation_Screenshot_31.png)

Android Studio recommends to update the gradle system. **Never update gradle!** This might lead to difficulties!

Please click "Don't remind me again for this project".

![Screenshot 32](../images/AS_NoGradleUpdate.png)

The build is running again.

![Screenshot 33](../images/Installation_Screenshot_33.png)

Yeah, the first build is successful but we are not finished.

![Screenshot 34](../images/Installation_Screenshot_34.png)

## Siginierte APK erstellen (Generate signed APK)

Wähle im Menü "Build" und dann "Generate Signed Bundle / APK...". (Das Menü in Android Studio wurde im September 2018 geändert. In older versions select in the menu “Build” and then “Generate Signed APK...”.)

Signing means that you sign your generated app but in a digital way as a kind of digital fingerprint in the app itself. Es ist notwendig, die App digital zu signieren, da Android aus Sicherheitsgründen nur signierten Code akzeptiert. Falls dich das Thema interessiert, findest du [hier](https://developer.android.com/studio/publish/app-signing.html#generate-key) mehr. Sicherheit ist ein großes und komplexes Thema, um das du dich zur Zeit noch nicht kümmern musst.

![Screenshot 39a](../images/Installation_Screenshot_39a.PNG)

Wähle in der folgenden Dialogbox "APK" statt "Android App Bundle" und klicke auf den Button "Next".

![Screenshot 39b](../images/Installation_Screenshot_39b.PNG)

Wähle “App” aus und klicke auf “Next”.

![Screenshot 40](../images/Installation_Screenshot_40.png)

Click "Create new..." to start creating your keystore. A keystore in this case is nothing more than a file in which the information for signing is stored. It is encrypted and the information is secured with passwords. We suggest storing it in your home folder and remember the passwords but if you lose this information it's not a big issue because then you just have to create a new one. Best practice is to store this information carefully.

![Screenshot 41](../images/Installation_Screenshot_41.png)

* Fill in the information for the next dialog. 
  * Key store path: is the path to the keystore file
  * The password fields below are for the keystore to double check for typing errors.
  * Alias is a name for the key you need. You can leave the default or give it a fancy name you want.
  * The password fields below the key are for the key itself. As always to double check for typing errors.
  * You can let the validity at the default of 25 years.
  * You only have to fill out first name and last name but feel free to complete the rest of information. Then click "OK".

![Screenshot 42](../images/Installation_Screenshot_42.png)

Fill in the information of the last dialog in this dialog and click "Next".

![Screenshot 43](../images/Installation_Screenshot_43.png)

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

Es sollte sich ein Datei Manager öffnen. Das könnte bei dir anders aussehen (dieser Screenshot wurde auf einem Linux PC erstellt). In Windows wird sich der “Explorer” öffnen, in Mac OS X der “Finder”. Dort solltest du jetzt das Verzeichnis mit der APK-Datei sehen. Es ist aber unglücklicherweise nicht die, die wir suchen, sondern nur die “wear-release.apk”.

![Screenshot 47](../images/Installation_Screenshot_47.png)

Um zu der gesuchten APK zu gelangen, musst du zu dem Ordner AndroidAPS/app/full/release gehen und nach der “app-full-release.apk” Datei Ausschau halten. Übertrage die Datei auf dein Smartphone. Sie können es auf Ihre bevorzugte Weise tun, z.B. Bluetooth, Cloud Upload, Computer und Telefon per Kabel verbinden oder E-Mail verwenden. In diesem Beispiel verwende ich Gmail, da dies für mich ziemlich einfach ist. Ich erwähne das deshalb, weil wir Android erlauben müssen, auf unserem Smartphone diese Installation auszuführen, auch wenn diese Datei via Google Mail empfangen wurde, was normalerweise verboten ist. Wenn Du einen anderen Übertragungsweg nutzt, setze die entsprechenden Rechte analog zum Vorgehen bei Gmail.

![Screenshot 48](../images/Installation_Screenshot_48.png)

In den Einstellungen deines Smartphones gibt es den Bereich "Unbekannte Quellen". Dort musst du Gmail das Recht geben, APK Dateien zu installieren, die du per Gmail erhalten hast.

Klicke dort auf “aus dieser Quelle zulassen”. Nach der Installation ist es empfehlenswert dies aus Sicherheitsgründen wieder rückgängig zu machen.

![Installation von Apps aus unbekannten Quellen zulassen](../images/Installation_Screenshot_49-50.png)

Der letzte Schritt ist es, auf die APK Datei zu klicken und die App zu installieren. Sollte es nicht funktionieren, kann es sein, dass sich eine ältere Version mit einem anderen “Key”/einer anderen Signatur auf dem Handy befindet. Exportiere deine Einstellungen aus der älteren Version und deinstalliere diese erst danach.

Herzlichen Glückwunsch, du hast es geschafft! Nun kannst du AndroidAPS starten und einrichten.