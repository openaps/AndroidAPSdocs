AndroidAPS-App erstellen
==============

Voll getestete Version (master branch)
-----------

* Downloade das [AndroidAPS repository](https://github.com/MilosKozak/AndroidAPS) und extrahiere den Ordner.

* Öffne Android Studio und wähle 'Open an existing Android Studio project', dazu wähle den Speicherort des Repository's.

* Klicke auf BuildVariants unten links in Android Studio, hier gibt es verschiedene Arten (Build types) zum auswählen.


![example](https://github.com/gempickfordwaugh/AndroidAPS/raw/b09d7dc444f59b799888bcd596e36e1d562a9674/fullwearcontrolrelease.png)

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

![signed](https://github.com/gempickfordwaugh/AndroidAPS/raw/b09d7dc444f59b799888bcd596e36e1d562a9674/generate%20signed%20APK.png)

*   Wähle den gleichen Build Typ wie vorher, wähle mind. V1 (Jar Signature) und drücke Finish. 

![build type]([https://github.com/gempickfordwaugh/AndroidAPS/raw/b09d7dc444f59b799888bcd596e36e1d562a9674/generate%20signed%20APK%20select%20buildtype%20v1.png)

* Bitte warte eine Weile bis die APK fertig gestellt ist. Du bekommst eine Benachrichtigung.

![AS3](https://github.com/MilosKozak/AndroidAPS/wiki/images/androidstudio3.png)

* Klicke auf 'Show in Explorer'. Hier findest du die APK, manchmal kann es ein bisschen dauern bis sie angezeigt wird.

* Kopiere die APK mit dem selben Namen, wie den des Build Types auf dein Handy und installiere sie. Falls AndroidAPS sich nicht installieren lässt und du eine ältere Version installiert hast, die mit einem anderen Schlüssel signiert wurde, solltest du diese zuerst (**DAVOR EINSTELLUNGEN UNBEDINGT SICHERN -> export settings**) deinstallieren.

Entwicklerversion (dev branch)
----------

**Achtung:** Die Entwicklungsversion (Dev Branch) von AndroidAPS ist für Entwickler sowie Tester bestimmt, die mit Stacktraces, Log-Dateien und dem Debugger umgehen können, um Fehlerberichte erstellen zu können, die Entwicklern beim Beheben der Fehler helfen (kurzum: Personen, die wissen, was sie tun und selbstständig arbeiten können). Aus diesem Grunde sind unfertige Features deaktiviert. Diese Features sind nur im **Engineering Mode** aktiviert. Dieser kann eingeschaltet werden, wenn eine Datei mit dem Namen `engineering_mode` im gleichen Verzeichnis, in dem sich die Log-Dateien befinden, angelegt wird. Das Aktivieren dieser Features kann dazu führen, dass der Loop überhaupt nicht mehr funktioniert.
***

Die stabilste AndroidAPS Version ist im [Master branch](https://github.com/MilosKozak/AndroidAPS/tree/master). Es wird empfohlen diese, vor allem Anfangs, zu verwenden.

Im [Dev branch](https://github.com/MilosKozak/AndroidAPS/tree/dev) sieht man, welche Funktionen gerade getestet werden. Um die Entwickler beim Finden von Fehlern zu unterstützen, kannst du dir diese Version erstellen. Vorausgesetzt, du hast schon Erfahrungen beim Loopen gesammelt und hast ein Backup, falls die Version noch nicht stabil ist. Wenn du dich für den Dev Branch entscheidest, musst du dir bewusst sein, dass es unter anderem zu groben Fehlern kommen kann, somit (wie eigentlich bei dem ganzen Programm, hier noch mal ausdrücklich) BENUTZUNG AUF EIGENE GEFAHR.  

Eine kurze Zusammenfassung der aktuellen Änderungen findest du hier.

**Super Micro Bolus (SMB)**<br>
Genauere Infos gibt es hier [Super Micro Boluses (SMB) on OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-smb).<br><br>
Beachte, dass du dich dazu entscheidest, eine Funktion zu testen, welche noch in der Entwicklung ist.<br><br>
Um SMB verwenden zu können, musst du zuerst 28 Tage den Closed Loop verwendet haben, und darauf achten, dass dein APS ausfallen könnte.<br><br>
Um SMB effektiv arbeiten zu lasssen, musst du deine Einstellungen anpassen. Da mit SMB der maxIOB nicht mehr durch die vom APS gegebenen Dosen berechnet wird, sondern alles IOB (auch deinen selbst gegebenen Essensbolus), ist der Wert für maxIOB höher, als das, was du von MA und AMA gewohnt bist. Ein guter Wert für den Anfang ist: 1 normaler Essensbolus + 3x höchste tägl. Basalrate. Jedoch sei dabei vorsichtig und adjustiere deine Einstellungen in kleinen Schritten.

<br><br><br>
Wie bei allen Updates, wurde der vorherige Code bereinigt, verbessert, und Fehler behoben.
<br><br>
Wenn du einen Fehler gefunden hast oder glaubst, dass etwas falsch berechnet wurde, dann sehe [hier](https://github.com/MilosKozak/AndroidAPS/issues) nach, um zu sehen, ob schon jemand diesen Fehler bemerkt hat, falls nicht, kannst du einen neuen Issue öffnen. Umso mehr Informationen du dabei bereitstellst, desto besser/schneller kann der Fehler reproduziert und behoben werden, vergesse nicht die [log files](https://github.com/MilosKozak/AndroidAPS/wiki/Logfiles-erhalten_de) anzufügen. Neue Funktion können auch im [Gitter Channel](https://gitter.im/MilosKozak/AndroidAPS) besprochen werden.

