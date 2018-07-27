# Update

## Stabile Version (master branch)

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

## Entwicklungs-Version (dev branch)
**Achtung:** Die Entwicklungsversion (Dev Branch) von AndroidAPS ist für Entwickler sowie Tester bestimmt, die mit Stacktraces, Log-Dateien und dem Debugger umgehen können, um Fehlerberichte erstellen zu können, die Entwicklern beim Beheben der Fehler helfen (kurzum: Personen, die wissen, was sie tun und selbstständig arbeiten können). Aus diesem Grunde sind unfertige Features deaktiviert. Diese Features sind nur im **Engineering Mode** aktiviert. Dieser kann eingeschaltet werden, wenn eine Datei mit dem Namen `engineering_mode` im gleichen Verzeichnis, in dem sich die Log-Dateien befinden, angelegt wird. Das Aktivieren dieser Features kann dazu führen, dass der Loop überhaupt nicht mehr funktioniert.

Die stabilste AndroidAPS Version ist im [Master branch](https://github.com/MilosKozak/AndroidAPS/tree/master). Es wird empfohlen diese, vor allem Anfangs, zu verwenden.

Im [Dev branch](https://github.com/MilosKozak/AndroidAPS/tree/dev) sieht man, welche Funktionen gerade getestet werden. Um die Entwickler beim Finden von Fehlern zu unterstützen, kannst du dir diese Version erstellen. Vorausgesetzt, du hast schon Erfahrungen beim Loopen gesammelt und hast ein Backup, falls die Version noch nicht stabil ist. Wenn du dich für den Dev Branch entscheidest, musst du dir bewusst sein, dass es unter anderem zu groben Fehlern kommen kann, somit (wie eigentlich bei dem ganzen Programm, hier noch mal ausdrücklich) BENUTZUNG AUF EIGENE GEFAHR.  

Wenn du einen Fehler gefunden hast oder glaubst, dass etwas falsch berechnet wurde, dann sehe [hier](https://github.com/MilosKozak/AndroidAPS/issues) nach, um zu sehen, ob schon jemand diesen Fehler bemerkt hat, falls nicht, kannst du einen neuen Issue öffnen. Umso mehr Informationen du dabei bereitstellst, desto besser/schneller kann der Fehler reproduziert und behoben werden, vergesse nicht die [log files](https://androidaps.readthedocs.io/en/latest/DE/benutzung/logfiles.html) anzufügen. Neue Funktion können auch im [Gitter Channel](https://gitter.im/MilosKozak/AndroidAPS) besprochen werden.
