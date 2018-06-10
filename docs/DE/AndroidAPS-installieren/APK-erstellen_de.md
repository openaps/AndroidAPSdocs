* Downloade das [AndroidAPS repository](https://github.com/MilosKozak/AndroidAPS) und extrahiere den Ordner.

* Öffne Android Studio und wähle 'Open an existing Android Studio project', dazu wähle den Speicherort des Repository's.

* Klicke auf BuildVariants unten links in Android Studio, hier gibt es verschiedene Arten (Build types) zum auswählen.


[[https://github.com/gempickfordwaugh/AndroidAPS/raw/b09d7dc444f59b799888bcd596e36e1d562a9674/fullwearcontrolrelease.png]] 

* Wähle den build type, den du kompilieren möchtest. Die verschiedenen Optionen sind hier unten beschrieben, wir empfehlen für die standard AndroidAPS App (**fullWearcontrolRelease**) oder für die elterliche Loop Kontrolle (**nsclientWearRelease**).
    * **full - full app**
    * **nsclient** - Downloadet die Behandlungen von NS und uploadet Careportal Eintragungen (keine Möglichkeit zum Loopen, nur für die Kontrolle von wo anders)_
    * openloop - nur der OpenAPS Teil der App (keine Pumpentreiber)
    * pumpcontrol - nur die Möglichkeit die Dana R von der App aus zu bedienen (kein Loop, nur für z.B. Bolus)<br><br>

    * Nowear - nur die App für das Handy, ohne App für die Smartwatch
    * _Wear - mit Android Wear Smartwatch App zum visualisieren auf der Smartwatch_
    * **Wearcontrol - mit Smartwatch App zum Kontrollieren der Pumpe (z.B. Bolus von der Uhr)**<br><br>

    * _**Release - sollte man immer nehmen**_
    * Debug - nur für die Programmierer um Fehler zu finden

* Gehe zum Build Menu und klicke auf Generate Signed APK

* Setze einen Key und ein Passwort, falls das dein Erstes mal ist, dann klicke auf Create new, oder fülle die Angaben für deinen Bestehenden Key aus.  Für mehr Informationen über den Key gehe bitte zu [https://developer.android.com/studio/publish/app-signing.html#generate-key](https://developer.android.com/studio/publish/app-signing.html#generate-key)

[[https://github.com/gempickfordwaugh/AndroidAPS/raw/b09d7dc444f59b799888bcd596e36e1d562a9674/generate%20signed%20APK.png]]

*   Wähle den gleichen Build Typ wie vorher, wähle mind. V1 (Jar Signature) und drücke Finish. 

[[https://github.com/gempickfordwaugh/AndroidAPS/raw/b09d7dc444f59b799888bcd596e36e1d562a9674/generate%20signed%20APK%20select%20buildtype%20v1.png]]

* Bitte warte eine Weile bis die APK fertig gestellt ist. Du bekommst eine Benachrichtigung.

[[https://github.com/MilosKozak/AndroidAPS/wiki/images/androidstudio3.png]]

* Klicke auf 'Show in Explorer'. Hier findest du die APK, manchmal kann es ein bisschen dauern bis sie angezeigt wird.

* Kopiere die APK mit dem selben Namen, wie den des Build Types auf dein Handy und installiere sie. Falls AndroidAPS sich nicht installieren lässt und du eine ältere Version installiert hast, die mit einem anderen Schlüssel signiert wurde, solltest du diese zuerst (**DAVOR EINSTELLUNGEN UNBEDINGT SICHERN -> export settings**) deinstallieren.