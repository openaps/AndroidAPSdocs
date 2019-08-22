# FAQ für Looper

Gewusst wie: Um die FAQ zu ergänzen, folge diesen [Anweisungen](../make-a-PR.md)

## Allgemein

### Kann ich die AndroidAPS Installationsdatei einfach herunterladen?

Leider nein. Es gibt keine apk-Datei für AndroidAPS, die einfach heruntergeladen werden kann. Du musst sie selbst [erstellen](../Installing-AndroidAPS/Building-APK.md). Das hat einen einfachen Grund:

Mit AndroidAPS steuerst Du Deine Pumpe und diese gibt Induslin ab. Nach den aktuellen EU-Regeln erfordern alle Medizinprodukte der Klassen IIa oder IIb eine Zulassung (CE Kennzeichnung), die wiederrum verschiedene Studien und abschließende Freigaben erfordern. Der Vertrieb eines nicht zertifizierten Geräts ist illegal. Ähnliche Regelungen existieren in anderen Teilen der Welt.

Diese Regeln beschränken sich nicht auf den Verkauf (also den Austausch Geld gegen Ware), sondern schließen alle möglichen Vertriebswege (auch die kostenfreie Weitergabe) ein. Nur wenn Du ein Medizinprodukt nur für Dich selbst erstellst, finden diese Regeln keine Anwendung.

Deshalb sind APKs nicht verfügbar.

### Wie soll man beginnen?

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

### Auswirkungen der verschiedenen Einstellungen

Diese Tabelle kann helfen, die Einstellungen zu optimieren. Am einfachsten ist es, oben in der Tabelle zu beginnen und sich dann nach unten durchzuarbeiten. Stelle sicher, dass die Einstellung wirklich richtig ist, bevor Du die jeweils nächste in Angriff nimmst. Taste dich in kleinen Schritten voran, statt zu viele Änderungen auf einmal vorzunehmen. Du kannst [Autotune](https://autotuneweb.azurewebsites.net/) zwar als Ausgangspunkt für Deine Überlegungen verwenden, solltest ihm aber nicht blind vertrauen: Es funktioniert unter Berücksichtigung aller individuellen Einflüsse möglicherweise bei Dir nicht gut genug. Beachte, dass die einzelnen Einstellungen voneinander abhängen. Sonst kann es passieren, dass Du 'falsche Einstellungen' verwendest, die in bestimmten Situationen gut funktionieren (z. B. wenn eine zu hohe Basalrate mit einem zu hohen Kohlenhydrat-Faktor zusammenfällt), während sie in anderen Situationen nicht funktionieren. Das bedeutet, dass Du alle Einstellungen als Ganzes betrachten und überprüfen musst, ob sie unter verschiedenen Bedingungen gut funktionieren.<table class="tg" border=1> 

<th class="tg-0pky">
  Einstellung
</th>

<th class="tg-0pky">
  Beschreibung & Test
</th>

<th class="tg-0pky">
  Auswirkung
</th>

<td class="tg-0pky">
  Insulinwirkdauer (DIA)
</td>

<td class="tg-0pky">
  Dauer, bis das Insulin vollständig abgebaut ist.<br /><br />Sie wird oft zu kurz angesezt. Bei den meisten Menschen werden mindestens 5 Stunden benötigt, teilweise auch 6 oder 7 Stunden.
</td>

<td class="tg-0pky">
  Ein zu kurzer DIA kann niedrige Glukose-Werte verursachen. Und umgekehrt.<br /><br />Wenn die Insulinwirkdauer zu kurz eingestellt ist, geht AAPS zu früh davon aus, dass der vorangegangene Bolus komplett 'aufgebraucht' ist und wird bei steigenden Glukosewerten zusätzliches Insulin abgeben. (Tatsächlich wartet AAPS nicht die volle Insulinwirkdauer ab, sondern sagt die Entwicklung der Glukosewerte vorher und gibt entsprechend Insulin ab oder nicht). Dies führt im Wesentlichen zu einem 'Insulin-Stau', von dem AAPS nichts weiß.<br /><br />Ein typisches Beispiel für eine zu kurze Insulinwirkdauer ist, wenn nach einem hohen BZ-Wert AAPS zu stark korrigiert und es dadurch zu niedrigen BZ-Werten oder gar einer Hypo kommt.
</td>

<td class="tg-0pky">
  Basalraten (IE pro Stunde)
</td>

<td class="tg-0pky">
  Die Insulinmenge, die notwendig ist, um die BZ-Werte in einem bestimmten Zeitraum stabil zu halten.<br /><br />Pausiere den Loop beim Basalratentest, faste, warte ca. 5 Stunden nach der letzten Mahlzeit und beobachte, wie sich die BZ-Werte entwickeln. Wiederhole den Test einige Male.<br /><br />Wenn die BZ-Werte zu sehr fallen, dann ist die Basalrate zu hoch. Und umgekehrt.
</td>

<td class="tg-0pky">
  Eine zu hohe Basalrate kann zu zu niedrigen BZ-Werten führen. Und umgekehrt.<br /><br />Die Standard-Basalrate ist der Referenzwert für AAPS. Wenn die Basalrate zu hoch ist, führt ein 'zero temp' (temporäres Abschalten der Basalrate durch AAPS) zu einem höheren negativen IOB (insulin on board - im Körper aktives Insulin) als es sollte. Dies führt dazu, dass AAPS in der Folge mehr Korrekturinsulin abgibt als es sollte, um das IOB schlussendlich wieder auf Null zu bringen.<br /><br />Somit führt eine zu hohe Basalrate sowohl durch die zu hohe Basalrate selbst zu zu niedrigen BZ-Werten, aber auch einige Stunden später, wenn AAPS wie oben beschrieben 'zu viel' korrigiert.<br /><br />Umgekehrt kann eine zu niedrige Baslarate nicht nur zu überhöhten BZ-Werten führen, sondern verhindert auch das Erreichen des Zielwertes aufgrund zu geringer Korrekturinsulingaben.
</td>

<td class="tg-0pky">
  Korrekturfaktor (ISF - mg/dl / IE oder mmol/l / IE)
</td>

<td class="tg-0pky">
  Die erwartete Senkung des BZ-Wertes durch eine Einheit (1 IE) Insulin.<br /><br />Unter der Voraussetzung, dass Deine Basalrate stimmt, kannst Du dies testen indem Du den Loop pausierst, sicherstellst das IOB bei 0 ist und dann etwas Traubenzucker einnimmst, um einen stabilen 'hohen BZ-Wert' zu erreichen.<br /><br />Dann gib Korrekturinsulin ab und orientiere Dich dabei an Deinem bisherigen Korrekturfaktor. <br /><br />Sei aber vorsichtig, denn er ist oftmals zu niedrig. D.h. eine Einheit Insulin senkt den BZ stärker als Du denkst.
</td>

<td class="tg-0pky">
  Kleinerer ISF = geringere Absenkung des BZ-Werts pro Insulin-Einheit. (Kann auch als 'aggressiver' oder 'stärker' bezeichnet werden.). Wenn der ISF zu niedrig ist, kann dies zu Unterzuckerungen führen.<br /><br />Größerer ISF = ein größerer Rückgang des BZ-Werts pro Insulin-Einheit. (Kann auch als 'schwächer' bezeichnet werden.). Wenn der ISF zu hoch ist, kann dies zu überhöhten BZ-Werten führen.<br /><br />Ein zu niedriger ISF (dies kommt gar nicht so selten vor) kann zu 'Überkorrekturen' führen, da AAPS annimmt, mehr Insulin zur Korrektur eines hohen BZ-Wertes zu benötigen als dies tatsächlich der Fall ist. Dies kann zu einer Achterbahnfahrt der BZ-Werte führen (gerade wenn man fastet). In diesem Fall musst Du Deinen ISF erhöhen. Das bedeutet, dass AAPS kleinere Korrekturdosen abgibt und dadurch zu niedrige BZ-Werte, die durch eine 'Überkorrektur' eines zu hohen BZ-Werts entstehen, vermeidet.<br /><br />Umgekehrt kann ein zu hoher ISF dazu führen, dass zu wenig Korrekturinsulin abgegeben wird und Dein BZ-Wert dadurch oberhalb Deines Zielwerts verbleibt. Dies ist gerade nachts zu beobachten.
</td>

<td class="tg-0pky">
  KH-Faktor [Carbohydrate to insulin ratio (CR)] (g/IE)
</td>

<td class="tg-0pky">
  Menge an Kohlenhydraten in Gramm, die durch eine Einheit Insulin abgedeckt wird.<br /><br />Unter der Voraussetzung, dass Deine Basalrate stimmt, kannst Du dies testen wenn Dein IOB = 0 ist und sich Dein BZ-Wert im Zielbereich befindet. Iss eine genau bekannte Menge an Kohlenhydraten und gib die dazu passende Menge an Insulin ab, wie sie sich aus Deinem aktuellen KH-Faktor ergibt. Am besten isst Du Nahrungsmittel, die Du zu dieser Tageszeit üblicherweise isst und bestimmst deren Kohlenhydratmenge präzise.
</td>

<td class="tg-0pky">
  Niedrigerer CR = weniger Kohlenhydrate pro Insulin-Einheit. D.h. es wird mehr Insulin für eine feste Menge Kohlenhydrate abgegeben. Kann auch als 'aggressiver' bezeichnet werden.<br /><br />Höhere CR = mehr Kohlenhydrate pro Insulin-Einheit. D.h. es wird weniger Insulin für eine feste Menge Kohlenhydrate abgegeben. Kann auch als'schwächer' bezeichnet werden.<br /><br />Wenn nach einer Mahlzeit die Kohlenhydrate komplett abgebaut sind, das IOB wieder bei Null liegt und Dein BZ-Wert höher als vor der Mahlzeit ist, dann ist Dein CR wahrscheinlich zu groß. Umgekehrt ist die CR zu niedrig, wenn Dein BZ-Wert zu diesem Zeitpunkt niedriger ist als vor dem Essen.
</td></table> 

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

Looping kann die Batterien schneller entladen als gewohnt, weil das System viel öfter mit der Pumpe agiert als ein Benutzer es tun würde. Es wird deshalb empfohlen, die Batterie spätestens bei 25% Ladung zu wechseln, weil dabei die Datenübertragung schon schwieriger werden kann. Du kannst einen Batterieladungsalarm in Nightscout erstellen, indem du die Variable PUMP_WARN_BATT_P verwendest. Tipps um die Batteriedauer zu erhöhen:

* verringere die Zeit, bis der Bildschirm der Pumpe sich abschaltet (im Pumpenmenü)
* Reduziere die Dauer der Displaybeleuchtung bei der Pumpe.
* Stelle die Pumpenbenachrichtigung auf Töne statt Vibrieren.
* benutze die Knöpfe auf der Pumpe nur zum Befüllen, alle weiteren Informationen wie Prüfen, Batteriestand und Reservoir-Füllstand solltest du über AndroidAPS checken.
* Die App AndroidAPS kann öfter vom Android-Betriebssystem des Smartphones “abgeschossen” werden, um Energie zu sparen oder Speicher freizugeben. Wenn AndroidAPS bei jedem Aufruf neu gestartet wird, dann baut es jedes Mal eine Bluetooth-Verbindung zur Pumpe auf, dabei wird die aktuelle Basalrate und das Bolus-Protokoll erneut eingelesen. Das verbraucht viel Energie. Um zu prüfen, ob dies häufiger auftritt, kann man im AndroudAPS Menü “Logge App-Start in NS” aktivieren. Dann erscheinen Neustarts in der Blutzucker-Kurve auf dem Hauptbildschirm und in Nigthscout. Sollte die App häufig neu gestartet werden, versuche sie auf der Whiteliste der Prozesse zu setzen, die nicht automatisch beendet werden und im Hintergrund weiterlaufen dürfen.
* reinige die Batteriepole mit Alkohol um sicherzustellen, dass keine herstellungsbedingten Wachs- oder Fettreste mehr vorhanden sind.
* bei der DanaR/RS Pumpe wird während der Startprozedur kurzzeitig mit Hilfe einer hohen Stromstärke versucht, die Schutzfilme auf den Batterie-Kontakten zu entfernen (die einen Energieverlust bei Lagerung verhindern sollen), aber das funktioniert nicht immer zu 100%. Dann kannst du entweder versuchen, die Batterie 2-3 Mal herauszunehmen und wieder einzusetzen, bis die Pumpe einen Batteriestand von 100 % anzeigt oder du schließt die Batterie schon vor dem Einsetzen dadurch kurz, dass du beide Batteriepole für den Bruchteil einer Sekunde mit einem metallischen Gegenstand überbrückst.
* Beachte auch die [weiteren spezifischen Batterie-Tipps](../Usage/Accu-Chek-Combo-Tips-for-Basic-usage#battery-type-and-causes-of-short-battery-life).

### Insulin-Reservoir und Katheter wechseln

Der Wechsel des Insulin-Reservoirs kann nicht über AndroidAAPS erfolgen, sondern muss ganz normal direkt über die Pumpe durchgeführt werden.

* Dazu durch langes Drucken auf Closed Loop auf dem Home-Bildschirm von AndroidAAPS Pausiere Loop für 1h auswählen
* Nun Pumpe vom Körper trennen und wie bisher das Insulin-Reservoir gemäß der Pumpen-Bedienungsanleitung wechseln.
* Anschließend durch langes Drücken auf Pausiert wieder Forsetzen wählen.

Im Gegensatz zum “klassischen” Vorgehen nutzt AndroidAAPS nicht die “Katheter füllen” Funktion der Pumpe, sondern befüllt den Katheter mit Hilfe eines normalen Bolus, der nicht in der Historie auftaucht. Das hat den Vorteil, dass dadurch keine aktuell laufende temporäre Basalrate unterbrochen wird. Auf dem Tab AKTIONEN in AndoidAPS über den Knopf Vorfüllen/Füllen die Menge an Insulin einstellen, die zum Befüllen nötig ist und den Füllvorgang starten. Sollte die Menge nicht reichen, den Vorgang ggf. wiederholen. Du kannst im Drei-Punkte-Menü unter "Einstellungen > Andere > Füll-/Vorfüll-Standardmengen" Standardmengen festlegen. Schaue bitte im Beipackzettel deines Katheters nach, wie viele Ie du je nach Schlauch- und Nadellänge zum Befüllen verwenden solltest.

## Hygiene

### Was mache ich, wenn ich duschen oder ein Bad nehmen möchte?

Du kannst die Pumpe zum Duschen oder Baden ablegen. Für so kurze Zeiträume brauchst du die Pumpe meistens nicht. Aber du solltest es in AAPS eingeben, damit die IOB-Berechnung korrekt bleibt. Drücke auf das hellblaue "Open Loop / Closed Loop" Feld oben links auf dem Startbildschirm von AAPS. Wähle **"Pumpe trennen für XY Minuten"**, je nachdem, wie lange du brauchst. Wenn du die Pumpe nach der Dusche wieder anschließt musst du in dem selben Feld “Pumpe erneut verbinden” auswählen oder du wartest einfach, bis die angegebene Zeitdauer abgelaufen ist. Der Loop wird automatisch fortgesetzt.

## Arbeit

Je nachdem, welche Art von Arbeit du hast, kann es sein, dass du an Arbeitstagen unterschiedliche Behandlungs-Faktoren verwendest. Als Looper solltest du über einen Profilwechsel für die Dauer deines Arbeitstages nachdenken (z.B. mehr als 100% für 8 Stunden, wenn du herumsitzt oder weniger als 100%, wenn du aktiv bist), ein hohes oder niedriges temporäres Ziel setzen oder eine Zeitverschiebung deines Profils einstellen, wenn du viel früher oder später aufstehst als sonst. Wenn du Nightscout Profile verwendest, dann kannst du dort auch ein zweites Profil erstellen (z.B. "Daheim" und "Arbeit") und täglich einen Profilwechsel zu dem gerade benötigten Profil machen.

## Freizeitaktivitäten

## Sport

## Sex

Du kannst die Pumpe entfernen, um "frei" zu sein, aber du solltest es in AAPS eingeben, damit die IOB Berechnungen stimmen. Drücke auf das hellblaue "Open Loop / Closed Loop" Feld oben links auf dem Startbildschirm von AAPS. Wähle **"Pumpe trennen für XY Minuten"**, je nachdem, wie lange du brauchst. Nachdem du die Pumpe wieder angeschlossen hast, musst du in dem selben Feld “Pumpe erneut verbinden” auswählen oder du wartest einfach, bis die angegebene Zeitdauer abgelaufen ist. Der Loop wird automatisch fortgesetzt.

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