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

### Release notes

#### Version 2.0

Erscheinungsdatum: xx.xx.2018

##### Neue Funktionen

* oref1/SMB wird unterstützt ([Oref1-Dokumentation](http://androidaps.readthedocs.io/en/latest/DE/konfigurations-generator.html#sensitivitat-oref1), [SMB-Dokumentation](http://androidaps.readthedocs.io/en/latest/DE/konfigurations-generator.html#smb)). Bitte lies zuerst die Dokumentation, damit du weißt was du davon erwarten kannst, wie es funktioniert, was der SMB erreichen kann und wie er zu benutzen ist, damit er gut arbeitet.
* Accu-Chek Combo Insulinpumpe wird unterstützt ([Einrichtungs-Anleitung](http://androidaps.readthedocs.io/en/latest/DE/einstellungen.html#akku-chek-combo))
* Setup Wizard: der neue Assistent führt dich durch die Einrichtung von AndroidAPS 

##### Einstellungen, die bei Umstellung von AMA zu SMB erforderlich sind

* **Objective 8** muss gestartet sein, dass die SMB-Funktion zur Verfügung steht (der SMB-Reiter zeigt dir, welche Beschräkungen bestehen)
* Der Wert **maxIOB** enthält jetzt _das gesamte_ IOB, nicht nur das hinzugefügte Basalinsulin. Das bedeutet: Wenn du einen Bolus von 8 IE gegeben hast und maxIOB ist 7, dann wird kein SMB ausgelöst, solange das Gesamt-IOB nicht wieder auf unter 7 IE abgefallen ist.
* Der Standardwert von **min_5m_carbimpact** erhöht sich von 3 bei AMA auf 8 beim SMB. Wenn du also von AMA auf SMB umstellst, dann musst du den Wert manuell auf 8 erhöhen.

##### Übersicht / Home-Screen

* Im oberen Menüband kannst du durch langen Fingerdruck den Loop pausieren oder deaktivieren, die Pumpe trennen, das aktuelle Profil anzeigen und einen Profilwechsel machen, temporäre Ziele (temp targets - TT) einstellen. Die temporären Ziele verwenden Standardwerte, die du in den Einstellungen festlegen kannst. Das neue Standard-Ziel "HypoTT" löst ein temporäres Ziel im höheren BZ-Bereich aus, damit der Loop nicht überreagiert nachdem du Korrektur-Kohlenhydrate gegessen hast.
* Neue Behandlungs-Schaltfläche: die alte Behandlungs-Schaltfläche ist weiterhin verfügbar, aber standardmäßig deaktiviert. Du kannst jetzt selbst einstellen, welche Schaltflächen du auf dem Home-Screen haben willst. Es gibt neue Schaltflächen für: Insulin, Kohlenhydrate (einschließlich [eCarbs/extended carbs](http://androidaps.readthedocs.io/en/latest/EN/Usage/Extended-Carbs.html))
* Farbige Vorhersage-Linien:
  * Orange: COB
  * Dunkelblau: IOB
  * Hellblau: zero-temp
  * Dunkelgelb: UAM
* Die Dialoge für Insulin, Kohlenhydrate, Rechner und Füllen/Vorfüllen haben jetzt ein Feld für Bemerkungen, das auch zu Nightscout hochgeladen wird
* Überarbeiteter Füllen/Vorfüllen-Dialog. Möglichkeit, gleichzeitig Careportal-Einträge für Katheter- und Reservoirwechsel zu erstellen

##### Watch

* Auf die separate Build Variante "wearcontrol" wird verzichtet, die Smartwatch-Steuerung ist jetzt in der full build Variante enthalten. Um die Bolus-Steuerung auf der Smartwatch zu verwenden, musst du dies in AAPS auf dem Smartphone aktivieren
* Der Rechner wird nur noch nach Kohlenhydraten (und, falls aktiviert, nach einem Prozentsatz) fragen. Du kannst in den Einstellungen auf dem Smartphone festlegen, welche Parameter bei einem Uhrenbolus in die Berechnung einbezogen werden sollen.
* Bestätigungen und Info-Dialoge funktionieren jetzt auch auf Android Wear 2.0 gut
* eCarbs Menüeintrag hinzugefügt

##### Neue plugins

* PocTech App als BZ-Quelle
* Dexcom App (patched) als BZ-Quelle
* oref1 Empfindlichkeitserkennung

##### Sonstiges

* Die App verwendet jetzt "drawer", um alle Plugins zu zeigen; alle Plugins, die im Konfigurations-Generator als sichtbar markiert sind, werden als Reiter im oberen Bereich angezeigt (Favoriten)
* Überarbeitung des Konfigurations-Generators und des Objectives-Reiters, Beschreibungen hinzugefügt
* Neues App-Icon
* Viele weitere Verbesserungen und Fehlerbehebungen
* Nightscout-unabhängige Alarme, falls die Pumpe für längere Zeit nicht erreichbar ist (z.B. leere Pumpenbatterie) und veraltete BZ-Werte (siehe _Lokale Alarme_ in den Einstellungen)
* Option, den Bildschrim immer an zu lassen
* Option, die Hinweise als Systemmeldungen anzuzeigen
* Advanced filtering (das erlaubt die Nutzung von "SMB immer an" und "6 Stunden nach dem Essen") wird unterstützt mit der gepatchten Dexcom App (nicht mit der originalen Dexcom App!) oder xDrip mit dem  G5 native mode als BZ-Quelle.

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
