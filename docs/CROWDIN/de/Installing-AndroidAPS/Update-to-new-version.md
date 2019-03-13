# Update auf eine neue Version oder branch

## Master branch

**Installiere git (falls du es noch nicht hast)**

* Jede git Version sollte funktionieren. Beispiel: <https://git-scm.com/download/win>
* Wähle den Ordner, in dem sich git.exe befinde: File - Settings - Version Control - Git ![](../images/git.png)

**Führe ein Update deiner lokalen Version durch**

* Klicke: VCS->Git->Fetch

**Wähle branch**

* Falls du “branch” wechseln willst, wähle eine andere “branch” vom Reiter: master (aktuellste, getestete Version), oder andere (siehe weiter unten).

![](../images/branchintray.png)

und anschließend "checkout". Verwende 'Checkout as New Branch' falls 'Checkout' nicht angezeigt wird.

![](../images/checkout.png)

**Branch-Update von Github**

* Drücke Strg+T, wähle Merge method und drücke OK

![](../images/merge.png)

Auf dem Reiter siehst du eine grüne Nachricht “updated project”.

**Upload auf das Smartphone**

Erstelle die signierte APK wie unter [AndroidAPS installieren - App erstellen (Generate signed APK)](Building-APK.html#generate-signed-apk) beschrieben.

## Entwickler-Version (dev branch)

**Achtung:** Die Entwicklungsversion (Dev Branch) von AndroidAPS ist für Entwickler sowie Tester bestimmt, die mit Stacktraces, Log-Dateien und dem Debugger umgehen können, um Fehlerberichte erstellen zu können, die Entwicklern beim Beheben der Fehler helfen (kurzum: Personen, die wissen, was sie tun und selbstständig arbeiten können). Aus diesem Grunde sind unfertige Features deaktiviert. Diese Features sind nur im **Engineering Mode** aktiviert. Dieser kann eingeschaltet werden, wenn eine Datei mit dem Namen `engineering_mode` im gleichen Verzeichnis, in dem sich die Log-Dateien befinden, angelegt wird. Das Aktivieren dieser Features kann dazu führen, dass der Loop überhaupt nicht mehr funktioniert.

Die stabilste AndroidAPS Version ist im [Master branch](https://github.com/MilosKozak/AndroidAPS/tree/master). Es wird empfohlen diese, vor allem anfangs, zu verwenden.

Im [Dev branch](https://github.com/MilosKozak/AndroidAPS/tree/dev) sieht man, welche Funktionen gerade getestet werden. Damit können Fehler ausgebügelt und Feedback darüber gegeben werden, wie die neuen Funktionen in der Praxis funktionieren. Meist wird die Entwickler-Version auf einem alten Telefon mit einer separaten Pumpe getestet bis es stabil läuft. Jede Benutzung des dev branch erfolgt auf eigene Gefahr! Wenn Du neue Funktionen ausprobierst mache Dir immer bewusst, dass Du Funktionen verwendest, die sich noch in Entwicklung befinden und nicht final freigegeben sind. Tue dies auf eigene Gefahr und mit der gebotenen Sorgfalt, um Deine eigene Sicherheit zu gewährleisten.

Wenn du einen Fehler gefunden hast oder glaubst, dass etwas falsch berechnet wurde, dann sehe im [issues tab](https://github.com/MilosKozak/AndroidAPS/issues) nach, um zu sehen, ob schon jemand diesen Fehler bemerkt hat, falls nicht, kannst du einen neuen Issue öffnen. Je mehr Informationen du dabei bereitstellst, desto besser/schneller kann der Fehler reproduziert und behoben werden. Vergiss nicht, die [Log Dateien](../Usage/Accessing-logfiles.md) anzufügen. Neue Funktion können auch im [gitter room](https://gitter.im/MilosKozak/AndroidAPS) besprochen werden. <br />  
Wenn du mit dem dev branch up to date bleiben willst, kannst du Updates wie oben beschrieben durchführen. Du musst nur in Android Studio auf den entsprechenden dev branch wechseln.