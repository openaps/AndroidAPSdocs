# Die AndroidAPS Bildschirme

## Die Startseite 

![homescreen](https://img1.picload.org/image/dgdgcorw/aaps-overview-small.jpg.png)  

Wenn du AndroidAPS öffnest, ist dies der erste Bildschirm. Er enthält die meisten der Informationen, die du tagtäglich benötigst. 

Abschnitt A: ermöglicht dir die Navigation zwischen den verschiedenen AndroidAPS Modulen, indem du nach links oder rechts blättern kannst.  

Abschnitt B: Hier siehst du den Status des Loops (Open Loop, Closed Loop, Unterbrechung des Loops usw.), dein aktuelles Profil und deinen Zielbereich. Um eines davon zu verändern, drücke länger auf das entsprechende Feld.  

Abschnitt C: Hier wird die letzte Glukosemessung deines CGMs angezeigt und wie lange diese her ist, außerdem die Veränderung der Werte in den vergangenen 15 und 40 Minuten, deine aktuelle Basalrate - einschließlich der vom System gesetzten temporären Basalrate (TBR), das noch wirkende Insulin (IOB, Insulin on board) und noch wirkende Kohlenhydrate (COB, carbs on board).  
Das Insulin on Board wäre Null, wenn nur deine Standardbasalrate liefe und kein Insulin aus einem früheren Bolus mehr wirkt. Die Zahlen in Klammern zeigen, wie viel Insulin aus einem früheren Bolus (oder mehreren) noch wirkt bzw. wie viel Insulin noch vorhanden ist oder fehlt aus von AndroidAPS programmierten TBR. Diese zweite Komponente ist negativ, wenn es in letzter Zeit Perioden mit reduzierter Basalrate gegeben hat.  

Abschnitt D: Hier kannst du auswählen, welche Informationen in den folgenden Diagrammen angezeigt werden. Bei manchen Smartphones fehlt diese Zeile, man kann die auszuwählenden Diagrammpunkte aber mit einem kleinen Pfeil an der rechten Seite aufrufen.  

Abschnitt E: Dies ist die Grafik, die den Glukosewert (BG) anzeigt, wie er von deinem Messsystem (CGM) abgelesen wird. Sie zeigt auch Nightscout-Benachrichtigungen wie Kalibrierungen mit einem Blutzuckermessgerät (Finger) und Kohlenhydrateingaben an. Die violette Linie zeigt den vorhergesagten Glukosetrend - wenn du das entsprechend ausgewählt hast.  
Die blaue Linie zeigt das von der Pumpe abgegebene Basalinsulin an. Die gestrichelte blaue Linie ist die Basalrate ohne temporäre Basalanpassungen (ohne TBR) und die durchgezogene blaue Linie ist die tatsächliche Basalabgabe über den angezeigten Zeitraum (mit TBR). Wenn du den angezeigten Zeitraum verändern möchtest, drücke lange auf die Grafik. Du kannst zwischen 6, 8, 12, 18 oder 24 Stunden wählen.  

Abschnitt F: Die Anzeige ist ebenfalls über die Optionen in Abschnitt D konfigurierbar. In diesem Beispiel zeigen wir das IOB (Insulin on board) - wenn es keine TBR und keinen noch wirkenden Bolus gäbe, wäre dies Null. Außerdem zeigen wir hier die Insulinempfindlichkeit und die Abweichung der Werte. GRAUE Balken zeigen eine Abweichung aufgrund von Kohlenhydraten, GRÜN, dass der Glukosewert höher ist als vom Algorithmus erwartet und ROT, dass er niedriger ist als vom Algorithmus erwartet.  

Abschnitt G: ermöglicht es dir, einen Bolus zu verabreichen (normalerweise würdest du dazu die Schaltfläche "Calculator" verwenden) und eine CGM-Kalibrierung mit einer Blutzuckermessung (Finger) hinzuzufügen.  

[translate from EN]








* **Dev**: Deviation (= Abweichung). Zeigt an, um wie viele Einheiten sich die tatsächliche Veränderung des Glukosewertes vom vorhergesagten Wert (durch OpenAPS und eingegebener Daten) unterscheidet.
* **Profilwechsel**: AAPS kann immer noch nach der alten Funktion funktionieren, bis du ein "Profile switch" mit einer Dauer von null (später erklärt) einstellst. Wenn man das macht, beginnt AAPS die Historie der Profile zu verfolgen, und jede neue Profiländerung benötigt ein neues "Profile switch" Event, auch wenn du das Profil in Nightscout änderst. Das geupdatete Profil wird sofort an AAPS gesendet, aber du musst ein "Profile switch" Event eingeben um die Änderungen verwenden zu können.
Internaly AAPS creates snapshot of profile with start date and duration and is using it within selected period. Duration of zero means infinite. Such profile is valid until new "Profile switch". Falls du einen "Profile switch" mit einer Dauer einstellst, wird nach Ablauf auf das letzte Profil zurück gegriffen.
* [Temporary Targets/temporäre Ziele (Eating Soon and Activity Mode)](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#eating-soon-and-activity-mode-temporary-targets) temporäre Ziele (Temp Targets) sind ideal wenn du möchtest, dass der Loop auf einen anderen BZ Wert korrigiert, z.B. beim Sport (höheres Ziel), oder wenn du essen willst (niedrigeres Ziel -> BZ steigt nach dem Essen nicht so stark). Man kann die Temp Targets entweder über die Uhr, im Actions Reiter, oder indem man im Overview Reiter auf das aktuelle Ziel länger drückt. Im Overview Reiter wird das Standard Ziel blau dargestellt, und das temporäre grün.
* BZ-Vorhersage: 
    * Orange: COB
    * Dunkelblau: IOB
    * Hellblau: zero-temp
    * Dunkelgelb: UAM
