# Update auf eine neue Version oder branch

## Kein Download möglich - APK muss selbst erstellt werden

**Aufgrund der gesetzlichen Regelungen für Medizinprodukte ist AndroidAPS nicht als Download verfügbar. Du kannst die App legal für Dich selbst erstellen, darfst aber keine Kopie an andere weitergeben! Weitere Informationen findest Du auf der [FAQ Seite](../Getting-Started/FAQ.md).**

## Wichtige Hinweise

* Ab Version 2.3 muss für das Update git genutzt werden. Ein Update mittels ZIP-File ist nicht mehr möglich.
* Nutze bitte [Android Studio Version 3.5.1](https://developer.android.com/studio/) oder neuer, um die APK-Datei zu erstellen.
* [Windows 10 32-bit Systeme](../Installing-AndroidAPS/troubleshooting_androidstudio#unable-to-start-daemon-process) werden bei Android Studio 3.5.1 nicht unterstützt.
* If you are using xDrip make sure to [identify the receiver](../Configuration/xdrip#identify-receiver).
* If you are using Dexcom G6 with the [patched Dexcom app](../Hardware/DexcomG6#if-using-g6-with-patched-dexcom-app) you will need the version from the [2.4 folder](https://github.com/dexcomapp/dexcomapp/tree/master/2.4).

## Kurzanleitung für erfahrene Anwender

Bitte überspringe diesen Absatz, wenn Du zum ersten Mal aktualisierst. Die Kurzanleitung ist für erfahrene Anwender. Dein nächster Schritt ist, [git zu installieren](../Installing-AndroidAPS/git-install.rst) wenn das Programm bisher nicht auf Deinem Computer installiert ist.

If you already updated AAPS in previous versions and use a Windows PC you can update in three simple steps:

1. [Aktualisiere Deine lokale Kopie](../Installing-AndroidAPS/Update-to-new-version#update-your-local-copy) (VCS->Git->Pull)
2. [Erstelle die signierte APK-Datei](../Installing-AndroidAPS/Update-to-new-version#generate-signed-apk) (Generate signed APK - Wähle dabei 'app' statt 'wear' im Dialogfeld!)
3. Depending on your [BG source](../Configuration/BG-Source.rst) make sure to [identify receiver](../Configuration/xdrip#identify-receiver) in xDrip or use the patched Dexcom app from the [2.4 folder](https://github.com/dexcomapp/dexcomapp/tree/master/2.4).

## Installiere git (falls du es noch nicht hast)

Die Schritt-für-Schritt-Anleitung findest Du auf der Seite zur [git Installation](../Installing-AndroidAPS/git-install.rst).

## Führe ein Update deiner lokalen Version durch

* Klicke: VCS -> Git -> Pull
  
  ![Android Studio - GIT - Pull](../images/Update_Pull.png)

* Klicke auf Pull (keine Änderungen im Dialogfeld erforderlich)
  
  ![Android Studio - GIT - Pull 2](../images/Update_Pull2.png)

## Signierte APK erstellen (Generate signed APK)

<!--- Text is maintained in page building-apk.md ---> Wähle im Menü "Build" und dann "Generate Signed Bundle / APK...". (Das Menü in Android Studio wurde im September 2018 geändert. Falls Du eine ältere Version benutzt, wähle im Menü “Build” und dann “Generate Signed APK...”.)

  
Signieren bedeutet, dass du deine generierte Anwendung unterschreibst, aber digital als eine Art digitaler Fingerabdruck in der Anwendung selbst. Es ist notwendig, die App digital zu signieren, da Android aus Sicherheitsgründen nur signierten Code akzeptiert. Falls dich das Thema interessiert, findest du [hier](https://developer.android.com/studio/publish/app-signing.html#generate-key) mehr. Sicherheit ist ein großes und komplexes Thema, um das du dich zur Zeit noch nicht kümmern musst.

![Screenshot 39a](../images/Installation_Screenshot_39a.PNG)

Wähle in der folgenden Dialogbox "APK" statt "Android App Bundle" und klicke auf den Button "Next".

![Screenshot 39b](../images/Installation_Screenshot_39b.PNG)

Wähle “App” aus und klicke auf “Next”.

![Screenshot 40](../images/Installation_Screenshot_40.png)

Gib den Pfad zu Deinem key store und Dein key store Passwort ein. Wähle anschließend key alias und gib Dein key Passwort ein.

Klicke 'Remember passwords' an.

Klicke danach auf “Next”.

![Key store path](../images/KeystorePathUpdate.PNG)

Wähle “full” (oder "fullRelease") in dem “Flavors” Menü aus, um die vollständige AndroidAPS App zu erstellen und klicke auf V1 “Jar Signature” (V2 ist optional) und klicke auf “Finish”. Folgende Informationen könnten später für dich nützlich sein:

* “Release” solltest du immer lassen, “Debug” ist nur für Programmierer, um Fehler zu finden.
* Wähle den “build type”, den du kompilieren möchtest: 
  * full / fullRelease (d.h. automatische Pumpensteuerung im Closed Loop)
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

Um zu der gesuchten APK zu gelangen, musst du zu dem Ordner AndroidAPS/app/full/release gehen und nach der “app-full-release.apk” Datei Ausschau halten. Übertrage die Datei auf dein Smartphone. Wähle Deinen bevorzugten Weg:

* Bluetooth
* Upload in die Cloud (Google Drive oder vergleichbare Dienste)
* Computer und Smartphone per Kabel verbinden 
* per E-Mail (Beachte, dass einige Mail-Apps keine APK-Anhänge zulassen, verwende in diesem Fall eine andere Übertragungsmethode.)

In diesem Beispiel wird Gmail verwendet, da es ziemlich einfach ist. Du musst Android erlauben, auf Deinem Smartphone diese Installation auszuführen, auch wenn diese Datei via Google Mail empfangen wurde, was normalerweise verboten ist. Wenn Du einen anderen Übertragungsweg nutzt, setze die entsprechenden Rechte analog zum Vorgehen bei Gmail.

![Screenshot 48](../images/Installation_Screenshot_48.png)

In den Einstellungen deines Smartphones gibt es den Bereich "Unbekannte Quellen". Dort musst du Gmail das Recht geben, APK Dateien zu installieren, die du per Gmail erhalten hast.

Klicke dort auf “aus dieser Quelle zulassen”. Nach der Installation ist es empfehlenswert dies aus Sicherheitsgründen wieder rückgängig zu machen.

![Installation von Apps aus unbekannten Quellen zulassen](../images/Installation_Screenshot_49-50.png)

Der letzte Schritt ist es, auf die APK Datei zu klicken und die App zu installieren. Sollte es nicht funktionieren, kann es sein, dass sich eine ältere Version mit einem anderen “Key”/einer anderen Signatur auf dem Handy befindet. Exportiere deine Einstellungen aus der älteren Version und deinstalliere diese erst danach.

Herzlichen Glückwunsch, du hast es geschafft! Nun kannst du AndroidAPS starten und einrichten.

## AAPS-Version auf dem Smartphone überprüfen

Klicke oben rechts auf das Drei-Punkte-Menü und dann den Menüpunkt Über, um auf Deinem Smartphone die installierte AAPS-Version anzuzeigen.

![Installierte AAPS version](../images/Update_VersionCheck.png)

## Problembehandlung

Siehe die separate Seite zur [Problembehandlung bei Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).