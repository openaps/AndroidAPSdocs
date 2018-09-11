# AndroidAPS installieren - App erstellen

Dieser Artikel ist in zwei Teile geteilt.

* Im Überblick werden die wichtigsten Schritte kurz zusammengefasst die allgemein nötig sind, um die APK Datei zu erstellen.
* In der “Schritt für Schritt Anleitung” wird detailliert auf die einzelnen Punkte mithilfe von Screenshots eingegangen. Da die Versionen von Android Studio - der Software, die wir zum Bau der APK verwenden werden - sich schnell weiterentwickeln werden diese nicht mit deiner Installation übereinstimmen, aber sie geben einen guten ersten Eindruck. Android Studio läuft sowohl auf Windows, als auch auf Mac OS X und Linux. Es kann sein, dass es bei jedem Betriebssystem einige kleinere Unterschiede gibt. Bei grösseren Veränderungen oder fehlenden bzw. falschen Informationen wäre es hilfreich, dies den Entwicklern in der Facebookgruppe "Android APS" oder in den Gitter Chats [Android APS](https://gitter.im/MilosKozak/AndroidAPS) oder [AndroidAPSwiki](https://gitter.im/AndroidAPSwiki/Lobby) mitzuteilen, so dass wir einen Blick darauf werfen können.

## Überblick

Kurzfassung der wichtigsten Schritte zum Erstellen der APK Datei:

* Git installieren
* Installiere und konfiguriere Android Studio.
* Nutze git clone, um den Quellcode von AndroidAPS auf Github zu downloaden.
* Öffne das heruntergeladene Projekt in Android Studio.
* Erstelle die signierte APK.
* Übertrage die erstellte APK auf dein Smartphone.

## Schritt für Schritt Anleitung

Detaillierte Beschreibung der notwendigen Schritte.

* Installiere git 
  * [Windows](https://gitforwindows.org/)
  * [Mac OS X](http://sourceforge.net/projects/git-osx-installer/)
  * Linux - installiere einfach ein ‘Package Git’ über einen ‘Package Manager’ deiner Linux-Distribution
* Installiere [Android Studio](https://developer.android.com/studio/install.html).
* Konfiguriere Android Studio gleich beim ersten Öffnen des Programms.

Wähle “Do not import settings”, da bisher keine Einstellungen vorgenommen wurden.

![Screenshot 1](../images/Installation_Screenshot_01.png)

Klicke auf “Next”.

![Screenshot 2](../images/Installation_Screenshot_02.png)

Wähle “Standard” Installation und klicke auf “Next”.

![Screenshot 3](../images/Installation_Screenshot_03.png)

Wähle “Intellij” als “UI theme” (Benutzeroberfläche) und klicke auf “Next”.

![Screenshot 4](../images/Installation_Screenshot_04.png)

Klicke auf “Next” in dem Fenster “Verify Settings”.

![Screenshot 5](../images/Installation_Screenshot_05.png)

Der Android Emulator (um ein Smartphone auf Deinem PC oder Mac zu simulieren) wird zum Bau der APK nicht benutzt. Du kannst auf ‘Finish’ klicken, um die Installation zu beenden und die vorgeschlagene Dokumentation bei Bedarf später lesen.

![Screenshot 6](../images/Installation_Screenshot_06.png)

Android Studio lädt viele benötigte Software-Komponenten herunter. Du kannst auf ‘Show Details’ klicken um zu sehen was passiert, aber das ist nicht relevant für den weiteren Verlauf.

![Screenshot 7](../images/Installation_Screenshot_07.png)

![Screenshot 8](../images/Installation_Screenshot_08.png)

Wenn der Download beendet ist, klicke auf “Finish”.

![Screenshot 9](../images/Installation_Screenshot_09.png)

* Herzlichen Glückwunsch, jetzt hast du die Android Studio soweit fertig installiert und kannst mit dem “Cloning” des Quellcodes beginnen. Hier ist allerdings auch ein guter Zeitpunkt, um eine Pause einzulegen.

* Nutze “git clone” in Android Studio wie in dem folgendem Screenshot angegeben. Wähle “Check out project from Version Control” und “Git” aus.

![Screenshot 10](../images/Installation_Screenshot_10.png) ![Version_Control_Git](../images/Version_Control_Git.png)

Gib die URL der Hauptseite des AndroidAPS Repositorys (“https://github.com/MilosKozak/AndroidAPS”) an und klicke auf “Clone”.

![Screenshot 13](../images/Installation_Screenshot_13.png)

Android Studio fängt an das Projekt zu ”clonen” (kopieren). Klicke nicht auf “Background”, es geht schnell und macht es derzeit nur komplizierter.

![Screenshot 14](../images/Installation_Screenshot_14.png)

Beende “checkout from version control”, indem du auf “Yes” klickst und das Projekt öffnest.

![Screenshot 15](../images/Installation_Screenshot_15.png)

Nutze den Standard “default gradle wrapper” und klicke auf “OK”.

![Screenshot 16](../images/Installation_Screenshot_16.png)

Lies und schließe den “Tip of the Day” von Android Studio, indem du auf “close” klickst.

![Screenshot 17](../images/Installation_Screenshot_17.png)

* Perfekt, du hast jetzt deine eigene Kopie des Quellcodes erstellt und kannst mit dem Kompilieren beginnen.
* Als nächstes erwartet uns die erste Fehlermeldung. Glücklicherweise schlägt Android Studio gleich die Lösung vor.

Klicke auf “Install missing platform(s) and sync project”, da Android Studios noch einige Komponenten installieren muss.

![Screenshot 18](../images/Installation_Screenshot_18.png)

Akzeptiere die Lizenzvereinbarung, indem du auf “Accept” und “Next” klickst.

![Screenshot 19](../images/Installation_Screenshot_19.png)

Wie beschrieben, einfach warten, bis die Installation abgeschlossen ist.

![Screenshot 20](../images/Installation_Screenshot_20.png)

Ist diese abgeschlossen, dann klicke wieder auf “Finish”. 

![Screenshot 21](../images/Installation_Screenshot_21.png)

Und dann wird wohl wieder der nächste Fehler auf dich zukommen... Aber auch hier schlägt Android Studio einen ähnlichen Lösungsweg vor. Klicke auf “Install Build Tools and sync project” um die fehlenden “Tools” zu installieren.

![Screenshot 22](../images/Installation_Screenshot_22.png)

Wie beschrieben, einfach warten, bis die Installation abgeschlossen ist.

![Screenshot 23](../images/Installation_Screenshot_23.png)

Ist diese abgeschlossen, dann klicke wieder auf “Finish”. 

![Screenshot 24](../images/Installation_Screenshot_24.png)

Und der nächste Fehler tritt auf. Klicke einfach wieder auf “Install missing platform(s) and sync project”.

![Screenshot 25](../images/Installation_Screenshot_25.png)

Wie beschrieben, einfach warten, bis die Installation abgeschlossen ist.

![Screenshot 26](../images/Installation_Screenshot_26.png)

Ist diese abgeschlossen, dann klicke wieder auf “Finish”. 

![Screenshot 27](../images/Installation_Screenshot_27.png)

Klicke auf “Install Build Tools and sync project” um die fehlenden “Tools” zu installieren.

![Screenshot 28](../images/Installation_Screenshot_28.png)

Wie beschrieben, einfach warten, bis die Installation abgeschlossen ist.

![Screenshot 29](../images/Installation_Screenshot_29.png)

Ist diese abgeschlossen, dann klicke wieder auf “Finish”. 

![Screenshot 30](../images/Installation_Screenshot_30.png)

Sieht so aus, als ob wir die Fehlermeldungen hinter uns haben :). Maybe it's time to drink some water?

![Screenshot 31](../images/Installation_Screenshot_31.png)

Android Studio recommends we now update the gradle system to version 4.4. If you made this build for an AndroidAPS version before the release of at least a release candidate(RC) of version 2.0 do not follow this recommendation. Otherwise, the build will fail. “Gradle” ist nur dafür da, den “Build Process” zu kontrollieren. For AndroidAPS there is no disadvantage to using the old gradle version. Die APK-Datei unterscheidet sich nicht. Wenn du eine Version von AndroidAPS 2.0 oder größer bauen willst, könntest du dennoch auf Version 4.4 aktualisieren.

![Screenshot 32](../images/Installation_Screenshot_32.png)

Der Prozess läuft weiter...

![Screenshot 33](../images/Installation_Screenshot_33.png)

Perfekt, der erste “Build Prozess” ist erfolgreich abgeschlossen, aber wir sind noch nicht fertig.

![Screenshot 34](../images/Installation_Screenshot_34.png)

Als nächstes, gehe zum “Build” Menü und “Generate Signed APK”. Signing means that you sign your generated app but in a digital way as a kind of digital fingerprint in the app itself. That is necessary because Android has a rule that it only accepts signed code to run for security reasons. For more information on this topic, follow the link [here](https://developer.android.com/studio/publish/app-signing.html#generate-key) Security is a deep and complex topic and you don't need this now.

![Screenshot 39](../images/Installation_Screenshot_39.png)

Wähle “App” aus und klicke auf “Next”.

![Screenshot 40](../images/Installation_Screenshot_40.png)

Click "Create new..." to start creating your keystore. A keystore in this case is nothing more than a file in which the information for signing is stored. It is encrypted and the information is secured with passwords. We suggest storing it in your home folder and remember the passwords but if you lose this information it's not a big issue because then you just have to create a new one. Best practice is to store this information carefully.

![Screenshot 41](../images/Installation_Screenshot_41.png)

* Fülle die Informationen in den nächsten Textfeldern aus. 
  * “Key store path”: Der Ort, an dem der Keystore gespeichert wird.
  * The password fields below are for the keystore to double check for typing errors.
  * “Alias”: ist der Name für die Verschlüsselung. You can leave the default or give it a fancy name you want.
  * The password fields below the key are for the key itself. As always to double check for typing errors.
  * “Validity”: Übersetzt bedeutet das “Gültigkeit”. Du kannst die “25 years” so stehen lassen.
  * You only have to fill out firstname and lastname but feel free to complete the rest of information. Klicke danach auf “OK”.

![Screenshot 42](../images/Installation_Screenshot_42.png)

Fülle die Informationen von dem Keystore, den du gerade erstellt hast, aus und klicke auf “Next”.

![Screenshot 43](../images/Installation_Screenshot_43.png)

Wähle “full” in dem “Flavors” Menü aus, um die vollständige AndroidAPS App zu erstellen und klicke auf V1 “Jar Signature” (V2 ist optional) und klicke auf “Finish”. Folgende Informationen könnten später für dich nützlich sein:

* “Release” solltest du immer lassen, “Debug” ist nur für Programmierer, um Fehler zu finden.
* Wähle den “Flavour”, den du kompilieren möchtest: 
  * full: Gesamte App (inkl. open loop, closed loop, Smartwatch-Steuerung)
  * openloop (dieser gibt nur temporäre Basalraten-Vorschläge, die nur manuell auszuführen sind)
  * pumpcontrol (kein Loop, mit dieser kann man die Pumpe über die App bedienen)
  * nsclient (hier werden z.B. die Daten eines anderen Nutzers dargestellt und Careportal-Einträge können hinzugefügt werden)

![Screenshot 44](../images/Installation_Screenshot_44.png)

Im event log sollte jetzt angezeigt werden, dass die signierte APK erfolgreich generiert wurde.

![Screenshot 45](../images/Installation_Screenshot_45.png)

Klicke auf “locate” im “event log”.

![Screenshot 46](../images/Installation_Screenshot_46.png)

Es sollte sich ein Datei Manager öffnen. It might look a bit different on your system as I am using Linux. In Windows wird sich der “Explorer” öffnen, in Mac OS X der “Finder”. There you should see the directory with the generated APK file. Unfortunately this is the wrong place as "wear-release.apk" is not the signed "app" APK we are searching for.

![Screenshot 47](../images/Installation_Screenshot_47.png)

Please change to the directory AndroidAPS/app/full/release to find the "app-full-release.apk" file. Übertrage die Datei auf dein Smartphone. You can do it on your preferred way, i.e. Bluetooth, cloud upload or email. In diesem Beispiel verwende ich Gmail, da dies für mich ziemlich einfach ist. I mention this because to install the self-signed app we need to allow Android on our smartphone to do this installation even if this file is received via Gmail which is normally forbidden. Wenn Du einen anderen Übertragungsweg nutzt, setze die entsprechenden Rechte analog zum Vorgehen bei Gmail.

![Screenshot 48](../images/Installation_Screenshot_48.png)

In the settings of your smartphone there is an area "unknown apps install" where I have to give Gmail the right to install APK files which I get via Gmail.

![Screenshot 49](../images/Installation_Screenshot_49.png)

Klicke dort auf “aus dieser Quelle zulassen”. Nach der Installation ist es empfehlenswert dies aus Sicherheitsgründen wieder rückgängig zu machen.

![Screenshot 50](../images/Installation_Screenshot_50.png)

Der letzte Schritt ist es, auf die APK Datei zu klicken und die App zu installieren. Sollte es nicht funktionieren, kann es sein, dass sich eine ältere Version mit einem anderen “Key”/einer anderen Signatur auf dem Handy befindet. Exportiere deine Einstellungen aus der älteren Version und deinstalliere diese erst danach.

Herzlichen Glückwunsch, du hast es geschafft! Nun kannst du AndroidAPS starten und einrichten.