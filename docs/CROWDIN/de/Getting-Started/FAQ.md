# FAQ für Looper

Gewusst wie: Um die FAQ zu ergänzen, folge diesen [Anweisungen](../make-a-PR.md)

## Allgemein

### Wie beginnen?

Zunächst einmal musst du dir **loopbare Hardware-Komponenten** besorgen:

* Eine [unterstützte Insulinpumpe](Pump-Choices.md), 
* ein [Android-Smartphone](Phones.md) (Apple iOS wird von AndroidAPS nicht unterstützt - du kannst dir einmal [iOS Loop](https://loopkit.github.io/loopdocs/) anschauen) und 
* einem [kontinuierliches Glukose-Mess-System](../Configuration/BG-Source.md). 

Zweitens musst du deine **Hardware einrichten**. Siehe [Beispiel-Setup mit Schritt für Schritt Tutorial](Sample-Setup.md).

Drittens musst du die **Software-Komponenten einrichten**: AndroidAPS und eine CGM/FGM-Quelle.

Viertens musst du **das OpenAPS Referenz-Design lernen und verstehen, um deine Behandlungs-Faktoren zu überprüfen**. Grundvoraussetzung des Loop ist, dass die Basalraten und Kohlenhydratfaktoren stimmen. Alle Empfehlungen gehen davon aus, dass der Basalbedarf durch das Basalschema gedeckt ist und auftauchende Blutzuckerschwankungen andere Gründe haben (Bewegung, Stress etc.), für die einmalige Anpassungen erforderlich sind. Die Anpassungen, die der Closed Loop autmatisch vornehmen darf, sind aus Sicherheitsgründen begrenzt (siehe maximale erlaubte temporäre Basalrate [OpenAPS-Referenz-Design](https://openaps.org/reference-design/)). Das bedeutet, dass du nicht den Loop dafür verwenden solltest, ein falsches Basalratenprofil zu korrigieren. Wenn du zum Beispiel häufig vor einer Mahlzeit niedrige Werte hast, dann muss wahrscheinlich die Basalrate angepasst werden. Mit [Autotune](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) kannst du anhand der zahlreichen vorhandenen Therapiedaten überprüfen, ob und wie Basalraten, IC und ISF angepasst werden müssen. Oder du machst einen [altmodischen Basalratentest](http://integrateddiabetes.com/basal-testing/).

### Was ist beim Loopen zweckmäßig?

* Wenn du willst, dass deine Einstellungen nicht einfach verändert werden können, dann kannst du das Einstellungsmenü mit einem Passwort schützen. Dazu im Einstellungesmenü die Option "Passwort für Einstellungen" aktivieren und das gewünschte Passwort eingeben. Wenn du das nächste Mal zu den Einstellungen gehst, musst du das Passwort eingeben um Änderungen vorzunehmen. Wenn du später das Passwort wieder deaktivieren möchstest, gehe zu "Passwort für Einstellungen" und lösche den Text aus dem Feld.

* Wenn du vorhast die Android Wear App zu benutzen, um einen Bolus zu verabreichen oder Einstellungen zu verändern, musst du sicherstellen, dass Benachrichtigungen von AnroidAPS nicht blockiert sind. Die Bestätigung von Eingaben, die von der Smartwatch stammen, wird nämlich über Benachrichtigungen ausgeführt.

* Wenn du deine Pumpe zum Duschen/Baden/Schwimmen/Sporttreiben etc. abnimmst, dann halte den hellblauen Button mit "Open Loop / Closed Loop" gedrückt, der auf dem Startbildschirm oben links zu finden ist. Wähle dann "Trenne Pumpe für..." aus, je nachdem wie lange du die Pumpe ablegen willst. Damit wird die aktuelle Basalrate für diesen Zeitraum auf 0 gesetzt. Die minimale Zeitdauer für das Trennen hängt von der minimalen temporären Basalrate deiner Pumpe ab. Wenn du die Pumpe nach kürzerer Zeit wieder verwenden möchtest, musst du über den selben hellblauen Button den Loop "Fortsetzen". Auf diese Weise wird dein IOB korrekt berechnet.

* Zur Sicherheit macht AAPS die Vorschläge auf Basis des aktuellen Glukose-Durschnittswertes (Delta) anstatt eines einzelnen Wertes. Aus diesem Grund kann es etwas dauern bis Aaps Änderungen empfiehlt, wenn das Cgm nicht kontinuierlich Werte übermittelt.

* Hier sind einige Blogs mit guten Tipps, um den Alltag mit deinem Loop zu meistern (in Englisch):
  
  * [Fine-tuning Settings](http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM
  * [Why DIA matters](http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM
  * [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
  * [Hormones and autosens](http://seemycgm.com/2017/06/06/hormones-2/) See my CGM

### Was sollte ich für den Notfall immer dabei haben?

Zunächst musst du natürlich dieselbe Notfall-Ausrüstung mitnehmen wie jeder andere Typ1-Diabetiker mit Insulinpumpentherapie. Beim Loopen mit AndroidAPS wird dringend empfohlen, das folgende zusätzliche Notfall-Equipment jederzeit dabei oder in der Nähe zu haben:

* Akku-Pack zur Stromversorgung deines Smartphones, deiner Smartwatch und (ggf.) deines BT Readers
* Backup in der Cloud (Dropbox, Google Drive...) von den Apps, die du zum Loopen verwendest: deine letzte AndoidAPS-APK und dein Key Store Passwort, Datensicherung deiner AndroidAPS Einstellungen, Datensicherung deiner xDrip Einstellungen, modifizierte Dexcom App, ...
* Pumpenbatterien

### Wie kann das CGM/FGM sicher befestigt werden?

Du kannst es festkleben: Für die gängigen CGM Systeme werden vorperforierte "Overpatches" verkauft (frag Google oder eBay). Einige Looper verwenden auch günstigere Standard Kinesiotapes oder Rocktape.

Du kannst es fixieren: Es werden Oberarm-Bänder verkauft, die das CGM/FGM mit einem Gummiband fixieren (frag Google oder eBay).

## AndroidAPS Einstellungen

### Der APS Algorithmus

#### Warum wird mir "dia:3" im "OPENAPS AMA"- Reiter angezeigt obwohl ich einen anderen DIA in meinem Profil angegeben habe?

![AMA 3h](../../images/Screenshot_AMA3h.png) Im AMA bedeutet "dia" nicht "Insulinwirkungsdauer". Viel mehr ist "dia" ein Parameter welcher mit DIA in Zusammenhang steht Es bedeutet wann die Korrekturdosis aufhören soll zu wirken. Und hat nichts mit mit der Berrechnung vom IOB zu tun. Im OpenAPS SMB wird dieser Parameter nicht mehr verwendet.

### Profil

#### Warum verwendet man eine minimale DIA (Insulinwirkdauer) von 5 Stunden statt 2 oder 3 Stunden?

Dies wird in [diesem Artikel](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/) gut erklärt. Vergiss nicht, dein ` PROFIL ZU AKTIVIEREN`, nachdem du deinen DIA verändert hast.

#### Was führt dazu, dass der Loop ohne COB wiederholt zu niedrige Werte verursacht?

Zuerst solltest du deine Basalrate prüfen und einen Basalratentest ohne Kohlenhydrate machen. Wenn sie korrekt ist, dann wird dieses Verhalten typischerweise von einem zu niedrigen ISF verursacht. Ein zu niedriger ISF sieht normalerweise so aus:

![ISF zu niedrig](../images/isf.jpg)

#### Was sind die Ursachen hoher postprandialen Peaks im Closed Loop?

Zuerst solltest du deine Basalrate prüfen und einen Basalratentest ohne Kohlenhydrate machen. Wenn sie korrekt ist und dein BZ nach voller KH-Absorption auch wieder bis zu deinem Zielwert fällt, versuche einmal das temoräre Ziel "Bald Essen" einige Zeit vor der Mahlzeit zu setzen oder überlege zusammen mit deinem Diabetologen, welcher Spritz-Ess-Abstand (SEA) geeignet wäre. Wenn deine BZ-Werte nach dem Essen und zusätzlich auch noch nach vollständiger KH-Absorption zu hoch sind, überlege zusammen mit deinem Diabetologen, ob deine IC-Werte verringert werden sollten. Wenn deine BZ-Werte bei akiven KH zu hoch und nach voller KH-Absorption zu niedrig sind, überlege zusammen mit deinem Diabetologen, ob deine IC-Faktoren erhöht und ein geeigneter SEA eingehalten werden sollten.

## Andere Einstellungen

### Nightscout Einstellungen

#### AndroidAPS Nightscout Client meldet "not allowed" und lädt keine Daten hoch. Was kann ich tun?

Überprüfe im Nightscout Client die "Verbindungs-Einstellungen". Vielleicht bist du gerade nicht in einem erlaubten WLAN oder du hast "Nur während des Ladens" aktiviert und dein Ladekabel ist nicht angeschlossen.

### CGM Einstellungen

#### Warum meldet AndroidAPS "BG source doesn't support advanced filtering / BZ Quelle unterstützt keine erweiterte Filterung"?

Wenn du ein anderes CGM/FGM als Dexcom G5 oder G6 im xDrip native mode verwendest, dann wirst du diesen Hinweis im AndroidAPS openAPS-Tab bekommen. Näheres hierzu findest du unter [Glättung der Blut-Glukose-Daten](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

## Pumpe

### Wo soll ich die Pumpe tragen?

Es gibt unzählige Möglichkeiten, die Pumpe zu platzieren. Es spielt keine Rolle, ob du loopst oder nicht. Wenn du lieber eine schlauchlose Pumpe hättest und zum Loopen eine Dana verwendest, probiere einmal den 30cm Katheter in Verbindung mit dem original Bauchgurt aus.

### Batterien

Looping kann die Batterien schneller entladen als gewohnt, weil das System viel öfter mit der Pumpe agiert als ein Benutzer es tun würde. Es wird deshalb empfohlen, die Batterie spätestens bei 25% Ladung zu wechseln, weil dabei die Datenübertragung schon schwieriger werden kann. Du kannst einen Batterieladungsalarm in Nightscout erstellen, indem du die Variable PUMP_WARN_BATT_P verwendest. 

Tipps um die Batteriedauer zu erhöhen:

* verringere die Zeit, bis der Bildschirm der Pumpe sich abschaltet (im Pumpenmenü)
* Reduziere die Dauer der Displaybeleuchtung bei der Pumpe.
* Stelle die Pumpenbenachrichtigung auf Töne statt Vibrieren.
* benutze die Knöpfe auf der Pumpe nur zum Befüllen, alle weiteren Informationen wie Prüfen, Batteriestand und Reservoir-Füllstand solltest du über AndroidAPS checken.
* Die App AndroidAPS kann öfter vom Android-Betriebssystem des Smartphones “abgeschossen” werden, um Energie zu sparen oder Speicher freizugeben. Wenn AndroidAPS bei jedem Aufruf neu gestartet wird, dann baut es jedes Mal eine Bluetooth-Verbindung zur Pumpe auf, dabei wird die aktuelle Basalrate und das Bolus-Protokoll erneut eingelesen. Das verbraucht viel Energie. Um zu prüfen, ob dies häufiger auftritt, kann man im AndroudAPS Menü “Logge App-Start in NS” aktivieren. Dann erscheinen Neustarts in der Blutzucker-Kurve auf dem Hauptbildschirm und in Nigthscout. Sollte die App häufig neu gestartet werden, versuche sie auf der Whiteliste der Prozesse zu setzen, die nicht automatisch beendet werden und im Hintergrund weiterlaufen dürfen.
* reinige die Batteriepole mit Alkohol um sicherzustellen, dass keine herstellungsbedingten Wachs- oder Fettreste mehr vorhanden sind.
* bei der DanaR/RS Pumpe wird während der Startprozedur kurzzeitig mit Hilfe einer hohen Stromstärke versucht, die Schutzfilme auf den Batterie-Kontakten zu entfernen (die einen Energieverlust bei Lagerung verhindern sollen), aber das funktioniert nicht immer zu 100%. Dann kannst du entweder versuchen, die Batterie 2-3 Mal herauszunehmen und wieder einzusetzen, bis die Pumpe einen Batteriestand von 100 % anzeigt oder du schließt die Batterie schon vor dem Einsetzen dadurch kurz, dass du beide Batteriepole für den Bruchteil einer Sekunde mit einem metallischen Gegenstand überbrückst.
* siehe auch [einige weitere spezifische Batterie-Tipps](../Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md#battery-type-and-causes-of-short-battery-life) zur Accu-Chek Combo Pumpe

### Insulin-Reservoir und Katheter wechseln

Der Wechsel des Insulin-Reservoirs kann nicht über AndroidAAPS erfolgen, sondern muss ganz normal direkt über die Pumpe durchgeführt werden.

* Dazu durch langes Drucken auf Closed Loop auf dem Home-Bildschirm von AndroidAAPS Pausiere Loop für 1h auswählen
* Nun Pumpe vom Körper trennen und wie bisher das Insulin-Reservoir gemäß der Pumpen-Bedienungsanleitung wechseln.
* Anschließend durch langes Drücken auf Pausiert wieder Forsetzen wählen.

Im Gegensatz zum “klassischen” Vorgehen nutzt AndroidAAPS nicht die “Katheter füllen” Funktion der Pumpe, sondern befüllt den Katheter mit Hilfe eines normalen Bolus, der nicht in der Historie auftaucht. Das hat den Vorteil, dass dadurch keine aktuell laufende temporäre Basalrate unterbrochen wird. Auf dem Tab AKTIONEN in AndoidAPS über den Knopf Vorfüllen/Füllen die Menge an Insulin einstellen, die zum Befüllen nötig ist und den Füllvorgang starten. Sollte die Menge nicht reichen, den Vorgang ggf. wiederholen. Du kannst im Drei-Punkte-Menü unter "Einstellungen > Andere > Füll-/Vorfüll-Standardmengen" Standardmengen festlegen. Schaue bitte im Beipackzettel deines Katheters nach, wie viele Ie du je nach Schlauch- und Nadellänge zum Befüllen verwenden solltest.

## Hygiene

### Was mache ich, wenn ich duschen oder ein Bad nehmen möchte?

Du kannst die Pumpe zum Duschen oder Baden ablegen. Für so kurze Zeiträume brauchst du die Pumpe meistens nicht. Aber du solltest es in AAPS eingeben, damit die IOB-Berechnung korrekt bleibt. Drücke auf das hellblaue "Open Loop / Closed Loop" Feld oben links auf dem Startbildschirm von AAPS. Wähle **"Pumpe trennen für XY Minuten"**, je nachdem, wie lange du brauchst. Wenn du die Pumpe nach der Dusche wieder anschließt musst du in dem selben Feld “Fortsetzen” auswählen oder du wartest einfach, bis die angegebene Zeitdauer abgelaufen ist. Der Loop wird automatisch fortgesetzt.

## Arbeit

Je nachdem, welche Art von Arbeit du hast, kann es sein, dass du an Arbeitstagen unterschiedliche Behandlungs-Faktoren verwendest. Als Looper solltest du über einen Profilwechsel für die Dauer deines Arbeitstages nachdenken (z.B. mehr als 100% für 8 Stunden, wenn du herumsitzt oder weniger als 100%, wenn du aktiv bist), ein hohes oder niedriges temporäres Ziel setzen oder eine Zeitverschiebung deines Profils einstellen, wenn du viel früher oder später aufstehst als sonst. Wenn du Nightscout Profile verwendest, dann kannst du dort auch ein zweites Profil erstellen (z.B. "Daheim" und "Arbeit") und täglich einen Profilwechsel zu dem gerade benötigten Profil machen.

## Freizeitaktivitäten

## Sport

## Sex

Du kannst die Pumpe entfernen, um "frei" zu sein, aber du solltest es in AAPS eingeben, damit die IOB Berechnungen stimmen. Drücke auf das hellblaue "Open Loop / Closed Loop" Feld oben links auf dem Startbildschirm von AAPS. Wähle **"Pumpe trennen für XY Minuten"**, je nachdem, wie lange du brauchst. Wenn du die Pumpe wieder anschließt musst du in dem selben Feld “Fortsetzen” auswählen oder du wartest einfach, bis die angegebene Zeitdauer abgelaufen ist. Der Loop wird automatisch fortgesetzt.

## Alkoholkonsum

Alkoholkonsum ist im Closed Loop riskant, weil der Algorythmus einen von Alkohol beeinflussten BZ nicht richtig vorhersagen kann. Du musst deine eigene Methode finden, um das zu behandeln, kannst aber folgende AndroidAPS-Funktionen nutzen:

* Deaktivierung des Closed Loop Modus und manuelle Behandlung des Diabetes oder
* hohe temporäre Ziele setzen und UAM deaktivieren, um zu vermeiden, dass der Loop das IOB erhöht, weil er eine nicht eingegebene Mahlzeit vermutet
* einen Profilwechsel auf deutlich weniger als 100% machen 

Wenn du Alkohol trinkst musst du immer dein CGM im Blick haben, um eine Hypoglykämie im Zweifel durch das Essen von Kohlenhydraten zu verhindern.

## Schlafen

### Wie kann ich nachts loopen, ohne Handy- und WLAN-Strahlung ausgesetzt zu sein?

Viele Nutzer stellen nachts im Handy den Flugzeugmodus ein. Wenn du willst, dass der Loop dich auch im Schlaf unterstützt, dann gehe wie folgt vor (dies wird aber nur funktionieren, wenn du eine lokale BZ-Quelle wie xDrip+ oder die modifizierte Dexcom App verwendest, es geht NICHT wenn du die Glukose-Werte über Nightscout erhältst):

1. Aktiviere im Handy den Flugzeugmodus.
2. Warte, bis der Flugzeugmodus aktiv ist.
3. Schalte Bluetooth ein.

Du empfängst jetzt weder Anrufe, noch bist du mit dem Internet verbunden. Aber der Loop funktioniert.

## Reisen

### Wie gehe ich mit einem Zeitzonenwechsel um?

Mit der DanaR und der DanaR Korean musst du nichts tun. Details zu weiteren Pumpen kannst du auf der Seite [Zeitzonenwechsel auf Reisen](../Usage/Timezone-traveling.md) finden.

## Krankenhausaufenthalt

Wenn du dem Klinikpersonal einige Informationen über AndroidAPS und DIY Looping geben willst, dann kannst du [eine allgemeine Einführung und Anleitung zu AndroidAPS fpr Klinikpersonal](../Resources/clinician-guide-to-AndroidAPS.md) ausdrucken.

## Termin mit deinem betreuenden Arzt (Internisten)

### Auswertung

Du kannst entweder deine Nightscout Berichte zeigen (https://DEINE-NS-SITE.com/report) oder den [Nightscout Reporter](https://nightscout-reporter.zreptil.de/) verwenden