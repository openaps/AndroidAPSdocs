# AndroidAPS installieren

## Android Studio installieren

Um die AndroidAPS-App aus dem Quellcode zu erstellen, benötigst du auf dem Computer zunächst die Software Android Studio:

https://developer.android.com/studio/install

## AndroidAPS-App erstellen

### Getestete Version (master branch)

1. Auf dem wie oben beschrieben vorbereiteten Computer/Notebook [https://github.com/MilosKozak/AndroidAPS](https://github.com/MilosKozak/AndroidAPS) aufrufen
2. Branch "master" Version 1.58 auswählen (mit älteren Versionen geht es nicht)
3. Schaltfläche "Clone or download" > Download ZIP auswählen
4. Heruntergeladene ZIP-Datei in einem neuen Ordner entpacken
5. Android Studio auf dem Computer/Laptop starten, "Open an existing Android Studio project" auswählen und den Pfad zum entpackten Ordner angeben, warten bis Android Studio nichts mehr nachlädt (kann einige Minuten dauern)
6. Gehe dann zum Build Menü und klicke auf "Generate Signed APK"
7. Wähle den build type, den du kompilieren möchtest:
![release full signatuer](https://user-images.githubusercontent.com/9692866/38299493-8838e38a-37fa-11e8-8c28-3fa6071e7a76.png)
    * **Release** - sollte man immer nehmen
    * **Debug** - nur für die Programmierer um Fehler zu finden
8. Wähle den Flavour, den du kompilieren möchtest:
    * **full** - Gesamte App (inkl. open loop, closed loop, Smartwatch-Steuerung)
    * **nsclient** - Zeigt nur die Behandlungen an, die in Nightscout eingetragen sind (z.B. für die elterliche Kontrolle ohne Steuerung)
    * **openloop** - nur der OpenAPS Teil der App (keine Pumpentreiber)
    * **pumpcontrol** - nur die Möglichkeit, die DanaR von der App aus zu bedienen (kein Loop, nur z.B. manuelle Bolusabgabe)
9. Wähle das Module "app"
10. Setze einen Key und ein Passwort, falls das dein erstes Mal ist, dann klicke auf Create new oder fülle die Angaben für deinen bestehenden Key aus.  Für mehr Informationen über den Key gehe bitte zu https://developer.android.com/studio/publish/app-signing.html#generate-key
11. Wähle den gleichen Build Typ wie vorher, wähle mind. V1 (Jar Signature) und drücke Finish. 
12. Bitte warte eine Weile, bis die APK fertiggestellt ist. Das kann mehrere Minuten dauern. Du bekommst eine Benachrichtigung.
![AS3](https://github.com/MilosKozak/AndroidAPS/wiki/images/androidstudio3.png)
13. Klicke auf 'Show in Explorer'. Hier findest du die APK, manchmal kann es ein bisschen dauern bis sie angezeigt wird.
14. Kopiere die APK mit dem selben Namen, wie den des Build Types auf dein Handy und installiere sie. Falls AndroidAPS sich nicht installieren lässt und du eine ältere Version installiert hast, die mit einem anderen Schlüssel signiert wurde, solltest du diese zuerst (**DAVOR EINSTELLUNGEN UNBEDINGT SICHERN -> export settings**) deinstallieren.

### Entwicklerversion (dev branch)

**Achtung:** Die Entwicklungsversion (Dev Branch) von AndroidAPS ist für Entwickler sowie Tester bestimmt, die mit Stacktraces, Log-Dateien und dem Debugger umgehen können, um Fehlerberichte erstellen zu können, die Entwicklern beim Beheben der Fehler helfen (kurzum: Personen, die wissen, was sie tun und selbstständig arbeiten können). Aus diesem Grunde sind unfertige Features deaktiviert. Diese Features sind nur im **Engineering Mode** aktiviert. Dieser kann eingeschaltet werden, wenn eine Datei mit dem Namen `engineering_mode` im gleichen Verzeichnis, in dem sich die Log-Dateien befinden, angelegt wird. Das Aktivieren dieser Features kann dazu führen, dass der Loop überhaupt nicht mehr funktioniert.
***

Die stabilste AndroidAPS Version ist im [Master branch](https://github.com/MilosKozak/AndroidAPS/tree/master). Es wird empfohlen diese, vor allem Anfangs, zu verwenden.

Im [Dev branch](https://github.com/MilosKozak/AndroidAPS/tree/dev) sieht man, welche Funktionen gerade getestet werden. Um die Entwickler beim Finden von Fehlern zu unterstützen, kannst du dir diese Version erstellen. Vorausgesetzt, du hast schon Erfahrungen beim Loopen gesammelt und hast ein Backup, falls die Version noch nicht stabil ist. Wenn du dich für den Dev Branch entscheidest, musst du dir bewusst sein, dass es unter anderem zu groben Fehlern kommen kann, somit (wie eigentlich bei dem ganzen Programm, hier noch mal ausdrücklich) BENUTZUNG AUF EIGENE GEFAHR.  

Wenn du einen Fehler gefunden hast oder glaubst, dass etwas falsch berechnet wurde, dann sehe [hier](https://github.com/MilosKozak/AndroidAPS/issues) nach, um zu sehen, ob schon jemand diesen Fehler bemerkt hat, falls nicht, kannst du einen neuen Issue öffnen. Umso mehr Informationen du dabei bereitstellst, desto besser/schneller kann der Fehler reproduziert und behoben werden, vergesse nicht die [log files](https://github.com/MilosKozak/AndroidAPS/wiki/Logfiles-erhalten_de) anzufügen. Neue Funktion können auch im [Gitter Channel](https://gitter.im/MilosKozak/AndroidAPS) besprochen werden.

## Update auf neue Version

**Installiere git**

* jede git Version sollte funktionieren. Zum Beispiel [https://git-scm.com/download/win](https://git-scm.com/download/win )
* Wähle den Ordner wo git.exe ist: File - Settings - Version Control - Git

**Wähle "branch"**

* Falls du "branch" wechseln willst, wähle eine andere "branch" vom Reiter: master (aktuellste, getestete Version), oder dev (Entwicklungsversion)
* dann checke aus

**Branchupdate von Github**

* Drücke Ctrl+T, wähle Merge method und drücke OK
* Auf dem Reiter siehst du eine grüne Nachricht "updated project"

**Upload auf das Handy**

* Verbinde das Handy
* Drücke den "Play" Knopf oben in der Leiste
* Wähle das verbundene Handy und drücke OK
