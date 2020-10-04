# FAQ für Looper

Gewusst wie: Um die FAQ zu ergänzen, folge diesen [Anweisungen](../make-a-PR.md)

# Allgemein

## Kann ich die AndroidAPS Installationsdatei einfach herunterladen?

Leider nein. Es gibt keine apk-Datei für AndroidAPS, die einfach heruntergeladen werden kann. Du musst sie selbst [erstellen](../Installing-AndroidAPS/Building-APK.md). Das hat einen einfachen Grund:

Mit AndroidAPS steuerst Du Deine Pumpe und diese gibt Insulin ab. Nach den aktuellen EU-Regeln erfordern alle Medizinprodukte der Klassen IIa oder IIb eine Zulassung (CE Kennzeichnung), die wiederrum verschiedene Studien und abschließende Freigaben erfordern. Der Vertrieb eines nicht zertifizierten Geräts ist illegal. Ähnliche Regelungen existieren in anderen Teilen der Welt.

Diese Regeln beschränken sich nicht auf den Verkauf (also den Austausch Geld gegen Ware), sondern schließen alle möglichen Vertriebswege (auch die kostenfreie Weitergabe) ein. Nur wenn Du ein Medizinprodukt nur für Dich selbst erstellst, finden diese Regeln keine Anwendung.

Deshalb sind APKs nicht verfügbar.

## Wo anfangen?

Zunächst einmal musst du dir **loopbare Hardware-Komponenten** besorgen:

* Eine [unterstützte Insulinpumpe](Pump-Choices.md), 
* ein [Android-Smartphone](Phones.md) (Apple iOS wird von AndroidAPS nicht unterstützt - du kannst dir einmal [iOS Loop](https://loopkit.github.io/loopdocs/) anschauen) und 
* einem [kontinuierliches Glukose-Mess-System](../Configuration/BG-Source.rst). 

Zweitens musst du deine **Hardware einrichten**. Siehe [Beispiel-Setup mit Schritt für Schritt Tutorial](Sample-Setup.md).

Drittens musst du die **Software-Komponenten einrichten**: AndroidAPS und eine CGM/FGM-Quelle.

Viertens musst du **das OpenAPS Referenz-Design lernen und verstehen, um deine Behandlungs-Faktoren zu überprüfen**. Grundvoraussetzung des Loop ist, dass die Basalraten und Kohlenhydratfaktoren stimmen. Alle Empfehlungen gehen davon aus, dass der Basalbedarf durch das Basalschema gedeckt ist und auftauchende Blutzuckerschwankungen andere Gründe haben (Bewegung, Stress etc.), für die einmalige Anpassungen erforderlich sind. Die Anpassungen, die der Closed Loop automatisch vornehmen darf, sind aus Sicherheitsgründen begrenzt (siehe maximale erlaubte temporäre Basalrate [OpenAPS-Referenz-Design](https://openaps.org/reference-design/)). Das bedeutet, dass du nicht den Loop dafür verwenden solltest, ein falsches Basalratenprofil zu korrigieren. Wenn du zum Beispiel häufig vor einer Mahlzeit niedrige Werte hast, dann muss wahrscheinlich die Basalrate angepasst werden. Mit [Autotune](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) kannst du anhand der zahlreichen vorhandenen Therapiedaten überprüfen, ob und wie Basalraten, IC und ISF angepasst werden müssen. Oder du machst einen [altmodischen Basalratentest](http://integrateddiabetes.com/basal-testing/).

## Was ist beim Loopen zweckmäßig?

### Passwort-Schutz

Wenn du willst, dass deine Einstellungen nicht einfach verändert werden können, dann kannst du das Einstellungsmenü mit einem Passwort schützen. Dazu im Einstellungsmenü die Option "Passwort für Einstellungen" aktivieren und das gewünschte Passwort eingeben. Wenn du das nächste Mal zu den Einstellungen gehst, musst du das Passwort eingeben um Änderungen vorzunehmen. Wenn du später das Passwort wieder deaktivieren möchtest, gehe zu "Passwort für Einstellungen" und lösche den Text aus dem Feld.

### Android Wear Smartwatches

Wenn du vorhast die Android Wear App zu benutzen, um einen Bolus zu verabreichen oder Einstellungen zu verändern, musst du sicherstellen, dass Benachrichtigungen von AndroidAPS nicht blockiert sind. Die Bestätigung von Eingaben, die von der Smartwatch stammen, wird nämlich über Benachrichtigungen ausgeführt.

### Pumpe trennen

Wenn Du die Pumpe für Dusche/Bad/Schwimmen/Sport etc. abnimmst, musst Du AndroidAPS darüber informieren, dass kein Insulin abgegeben wird, um IOB nicht zu verfälschen.

* Drücke lange auf den Button 'Closed Loop' (dort steht 'Open Loop', wenn Du mit dem Closed Loop noch nicht begonnen hast) am oberen Bildschirmrand der Startseite. 
* Wähle **"Trenne Pumpe für X min."**
* Damit wird die aktuelle Basalrate für diesen Zeitraum auf 0 gesetzt.
* Die Pumpe bestimmt mit ihrer minimalen Dauer für eine temporäre Basalrate, wie kurz die Unterbrechung sein kann. Wenn Du die Pumpe also für einen kürzeren Zeitraum trennen möchtest, als dies die Pumpensteuerung erlaubt, musst Du die kürzest mögliche Unterbrechung wählen und vorzeitig die Pumpe manuell wieder verbinden.
* Der Button 'Closed Loop' (bzw. 'Open Loop') wird rot und es erscheint dort der Text 'Getrennt (x min.)' mit Angabe der verbleibenden Zeit der Trennung.
* AAPS wird die Pumpe nach der gewählten Zeit automatisch wieder verbinden und der Closed Loop nimmt die Arbeit wieder auf.
    
    ![Pumpe trennen](../images/PumpDisconnect.png)

* Wenn die gewählte Zeit zu lang war, kannst Du die Verbindung manuell wiederherstellen.

* Drücke lange auf den roten Button 'Getrennt (x min.)'.
* Wähle 'Pumpe erneut verbinden'.
    
    ![Pumpe erneut verbinden](../images/PumpReconnect.png)

### Empfehlungen basieren nicht auf einzelnem CGM-Wert

Zur Sicherheit macht AAPS die Vorschläge auf Basis des aktuellen Glukose-Durchschnittswertes (Delta) anstatt eines einzelnen Wertes. Aus diesem Grund kann es etwas dauern bis AAPS Änderungen empfiehlt, wenn das CGM nicht kontinuierlich Werte übermittelt.

### Weiterführende Literatur

Hier sind einige Blogs mit guten Tipps, um den Alltag mit deinem Loop zu meistern (in Englisch):

* [Fine-tuning Settings](http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM
* [Why DIA matters](http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM
* [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
* [Hormones and autosens](http://seemycgm.com/2017/06/06/hormones-2/) See my CGM

## Was sollte ich für den Notfall immer dabei haben?

Zunächst musst du natürlich dieselbe Notfall-Ausrüstung mitnehmen wie jeder andere Typ1-Diabetiker mit Insulinpumpentherapie. Beim Loopen mit AndroidAPS wird dringend empfohlen, das folgende zusätzliche Notfall-Equipment jederzeit dabei oder in der Nähe zu haben:

* Akku-Pack zur Stromversorgung deines Smartphones, deiner Smartwatch und (ggf.) deines BT Readers
* Backup in der Cloud (Dropbox, Google Drive...) von den Apps, die du zum Loopen verwendest: deine letzte AndroidAPS-APK und dein Key Store Passwort, Datensicherung deiner AndroidAPS Einstellungen, Datensicherung deiner xDrip Einstellungen, modifizierte Dexcom App, ...
* Pumpenbatterien

## Wie kann das CGM/FGM sicher befestigt werden?

Du kannst es festkleben: Für die gängigen CGM Systeme werden vorperforierte "Overpatches" verkauft (frag Google oder eBay). Einige Looper verwenden auch günstigere Standard Kinesiotapes oder Rocktape.

Du kannst es fixieren: Es werden Oberarm-Bänder verkauft, die das CGM/FGM mit einem Gummiband fixieren (frag Google oder eBay).

# AndroidAPS Einstellungen

Diese Aufzählung kann helfen, die Einstellungen zu optimieren. Am einfachsten ist es, oben in der Tabelle zu beginnen und sich dann nach unten durchzuarbeiten. Stelle sicher, dass die Einstellung wirklich richtig ist, bevor Du die jeweils nächste in Angriff nimmst. Taste dich in kleinen Schritten voran, statt zu viele Änderungen auf einmal vorzunehmen. Du kannst [Autotune](https://autotuneweb.azurewebsites.net/) zwar als Ausgangspunkt für Deine Überlegungen verwenden, solltest ihm aber nicht blind vertrauen: Es funktioniert unter Berücksichtigung aller individuellen Einflüsse möglicherweise bei Dir nicht gut genug. Beachte, dass die einzelnen Einstellungen voneinander abhängen. Sonst kann es passieren, dass Du 'falsche Einstellungen' verwendest, die in bestimmten Situationen gut funktionieren (z. B. wenn eine zu hohe Basalrate mit einem zu hohen Kohlenhydrat-Faktor zusammenfällt), während sie in anderen Situationen nicht funktionieren. Das bedeutet, dass Du alle Einstellungen als Ganzes betrachten und überprüfen musst, ob sie unter verschiedenen Bedingungen gut funktionieren.

## Insulinwirkdauer (DIA)

### Beschreibung & Test

Die Zeitdauer, bis das Insulin vollständig abgebaut ist.

Sie wird oft zu kurz angesetzt. Bei den meisten Menschen werden mindestens 5 Stunden benötigt, teilweise auch 6 oder 7 Stunden.

### Auswirkung

Ein zu kurzer DIA kann niedrige Glukose-Werte verursachen. Und umgekehrt.

Wenn die Insulinwirkdauer zu kurz eingestellt ist, geht AAPS zu früh davon aus, dass der vorangegangene Bolus komplett "aufgebraucht" ist und wird bei steigenden Glukosewerten zusätzliches Insulin abgeben. (Tatsächlich wartet AAPS nicht die volle Insulinwirkdauer ab, sondern sagt die Entwicklung der Glukosewerte vorher und gibt entsprechend Insulin ab oder nicht). Dies führt im Wesentlichen zu einem "Insulin-Stau", von dem AAPS nichts weiß.

Ein Beispiel für eine zu kurze Insulinwirkdauer ist ein hoher BZ-Wert, gefolgt von einer AAPS Überkorrektur und einem daraufhin niedrigen BZ-Wert.

## Basalraten (IE pro Stunde)

### Beschreibung & Test

Die Menge an Insulin, die in einem bestimmten Stundenblock abgegeben wird, um die Glukosewerte auf einem stabilen Niveau zu halten.

Testen Deine Basalrate indem Du den Loop deaktivierst, fastest, etwa fünf Stunden nach Essen abwartest und die Entwicklung der Glukosewerte prüfst. Wiederhole das ein paar Mal.

Wenn die Glukosewerte sinken, ist die Basalrate zu hoch. Und umgekehrt.

### Auswirkung

Eine zu hohe Basalrate kann zu zu niedrigen BZ-Werten führen. Und umgekehrt.

Die Standard-Basalrate ist der Referenzwert für AAPS. Wenn die Basalrate zu hoch ist, führt ein 'zero temp' (temporäres Abschalten der Basalrate durch AAPS) zu einem höheren negativen IOB (insulin on board - im Körper aktives Insulin) als es sollte. Dies wird dazu führen, dass AAPS mehr Nachkorrekturen gibt, als tatsächlich notwendig wären, um am Ende IOB auf Null zu bringen.

Eine zu hohe Basalrate führt also zu niedrigen Glukosewerten sowohl durch die Standardbasalrate als auch später durch die Korrekturen von AAPS.

Umgekehrt kann eine zu niedrige Basalrate zu zu hohen Glukosewerten führen und AAPS daran hindern, diese wieder in den Zielbereich zu bringen.

## Korrekturfaktor (ISF - mg/dl / IE oder mmol/l / IE)

### Beschreibung & Test

Senkung des Glukosewertes durch eine Einheit Insulin (IE).

Angenommen Deine Basalrate ist korrekt kannst Du das wie folgt testen: sicherstellen, dass IOB null ist, Loop deaktivieren und etwas Traubenzucker zu Dir nehmen, um einen stabilen hohen BZ-Level zu erreichen.

Gebe dann die Deinem Korrekturfaktor entsprechende Menge Insulin ab, um wieder zu Deinem Zielwert zu gelangen.

Sei vorsichtig, da die Korrektur oftmals zu aggressiv eingestellt ist. D.h. eine Einheit Insulin senkt den BZ stärker als Du denkst.

### Auswirkung

**Niedrigerer ISF** (z.B. 40 statt 50) = aggressiver / stärker -> führt zu stärkerem Absinken des BZ pro Einheit Insulin. Ein zu niedriger ISF kann zu niedrige Glukose-Werte verursachen.

**Höherer ISF** (z.B. 45 statt 35) = weniger aggressiv / schwächer -> führt zu geringerem Absinken des BZ pro Einheit Insulin. Ein zu hoher ISF kann zu hohe BZ-Werte zur Folge haben.

**Beispiel:**

* Der BZ-Wert ist 190 mg/dl (10,5 mmol) und der Zielwert 100 mg/dl (5,6 mmol). 
* Die notwendige Korrektur ist also 90 mg/dl (= 190 - 100).
* ISF = 30 -> 90 / 30 = 3 Insulin Einheiten
* ISF = 45 -> 90 / 45 = 2 Insulin Einheiten

Ein zu niedriger ISF (dies kommt gar nicht so selten vor) kann zu 'Überkorrekturen' führen, da AAPS annimmt, mehr Insulin zur Korrektur eines hohen BZ-Wertes zu benötigen als dies tatsächlich der Fall ist. Dies kann zu einer Achterbahnfahrt der BZ-Werte führen (gerade wenn man fastet ). In diesem Fall musst Du Deinen ISF erhöhen. Dies bedeutet, dass AAPS geringere Korrekturdosen abgibt und dass dies Überkorrekturen eines hohen BZ-Werts, die zu niedrigen BZ-Werten führen können, verhindert werden.

Umgekehrt kann ein zu hoher ISF zu "Unter-Korrekturen" führen. Dies bedeutet, dass Deine BZ-Werte oberhalb Deines Zielwertes bleiben - gerade in der Nacht.

## Insulin-Kohlenhydrat-Verhältnis (Insulin to carb ratio - IC) (g/U)

### Beschreibung & Test

Menge an Kohlenhydraten in Gramm, die durch eine Einheit Insulin abgedeckt werden können.

Teilweise wird auch I:C statt IC als Abkürzung verwendet oder von Kohlenhydratverhältnis (carb ratio - CR) gesprochen.

Vorausgesetzt Deine Basalrate stimmt, kannst Du ausgehend von Deinen aktuellen Einstellungen testen wenn Dein IOB = 0 ist und sich Dein BZ-Wert im Zielbereich befindet. Iss eine genau bekannte Menge an Kohlenhydraten und gib die dazu passende Menge an Insulin ab, wie sie sich aus Deinem aktuellen BE-Faktor ergibt. Am besten isst Du Nahrungsmittel, die Du zu dieser Tageszeit üblicherweise isst und bestimmst deren Kohlenhydratmenge präzise.

> **HINWEIS:**
> 
> In manchen Europäischen Ländern wurden sog. Broteinheiten (BE) genutzt um festzulegen, wie viel Insulin für Lebensmittel benötigt wird. Zu Beginn entsprach eine BE 12g Kohlenhydraten, später haben manche dies auf 10g Kohlenhydrate geändert.
> 
> Bei diesem Modell war die Menge der Kohlenhydrate fix während die Insulinmenge variierte. ("Wie viel Insulin benötige ich für eine BE?")
> 
> Beim IC hingegen ist die Insulinmenge fix und die Menge der Kohlenhydrate variiert. ("Wie viele Gramm Kohlenhydrate können mit einer Einheit Insulin abgedeckt werden?")
> 
> Beispiel:
> 
> BE-Faktor (BE = 12g KH): 2,4 IE/BE -> Du benötigst 2,4 Einheiten Insulin, wenn Du eine BE isst.
> 
> Dazu passender IC: 12g / 2,4 IE = 5,0 g/IE -> Du kannst 5,0g Kohlenhydrate essen, wenn Du eine Einheit Insulin spritzt.
> 
> BE-Faktor 2,4 IE / 12 g ===> IC = 12g / 2,4 IE = 5,0 g/IE
> 
> Umrechnungstabellen finden sich online z.B. [hier](https://www.mylife-diabetescare.com/files/media/03_Documents/11_Software/FAS/SOF_FAS_App_KI-Verha%CC%88ltnis_MSTR-DE-AT-CH.pdf).

### Auswirkung

**Niedriger IC** = weniger Kohlenhydrate pro Insulin-Einheit. D.h. es wird mehr Insulin für eine feste Menge Kohlenhydrate abgegeben. Man kann dies auch als "aggressiver" bezeichnen.

**Höherer IC** = mehr Kohlenhydrate pro Insulineinheit, d.h. Du bekommst für eine gleichbleibende Menge an Kohlenhydraten weniger Insulin. Man kann dies auch als "schwächer" oder "weniger aggressiv" bezeichnen.

Wenn nach einer Mahlzeit die Kohlenhydrate komplett abgebaut sind, das IOB wieder bei Null liegt und Dein BZ-Wert höher als vor der Mahlzeit ist, dann ist Dein IC wahrscheinlich zu groß. Umgekehrt ist die IC zu niedrig, wenn Dein BZ-Wert zu diesem Zeitpunkt niedriger ist als vor dem Essen.

# Der APS Algorithmus

## Warum wird mir "dia:3" im "OPENAPS AMA"- Reiter angezeigt obwohl ich einen anderen DIA in meinem Profil angegeben habe?

![AMA 3h](../images/Screenshot_AMA3h.png)

Im AMA bedeutet "dia" nicht "Insulinwirkungsdauer". Vielmehr ist "dia" ein Parameter, welcher mit DIA in Zusammenhang steht Es bedeutet wann die Korrekturdosis aufhören soll zu wirken. Und hat nichts mit der Berechnung vom IOB zu tun. Im OpenAPS SMB wird dieser Parameter nicht mehr verwendet.

## Profile

### Warum verwendet man eine minimale DIA (Insulinwirkdauer) von 5 Stunden statt 2 oder 3 Stunden?

Dies wird in [diesem Artikel](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/) gut erklärt. Vergiss nicht, dein ` PROFIL ZU AKTIVIEREN`, nachdem du deinen DIA verändert hast.

### Was führt dazu, dass der Loop ohne COB wiederholt zu niedrige Werte verursacht?

Zuerst solltest du deine Basalrate prüfen und einen Basalratentest ohne Kohlenhydrate machen. Wenn sie korrekt ist, dann wird dieses Verhalten typischerweise von einem zu niedrigen ISF verursacht. Ein zu niedriger ISF sieht normalerweise so aus:

![ISF zu niedrig](../images/isf.jpg)

### Was sind die Ursachen hoher postprandialen Peaks im Closed Loop?

Zuerst solltest du deine Basalrate prüfen und einen Basalratentest ohne Kohlenhydrate machen. Wenn sie korrekt ist und dein BZ nach voller KH-Absorption auch wieder bis zu deinem Zielwert fällt, versuche einmal das temporäre Ziel "Bald Essen" einige Zeit vor der Mahlzeit zu setzen oder überlege zusammen mit deinem Diabetologen, welcher Spritz-Ess-Abstand (SEA) geeignet wäre. Wenn deine BZ-Werte nach dem Essen und zusätzlich auch noch nach vollständiger KH-Absorption zu hoch sind, überlege zusammen mit deinem Diabetologen, ob deine IC-Werte verringert werden sollten. Wenn deine BZ-Werte bei aktiven KH zu hoch und nach voller KH-Absorption zu niedrig sind, überlege zusammen mit deinem Diabetologen, ob deine IC-Faktoren erhöht und ein geeigneter SEA eingehalten werden sollten.

# Andere Einstellungen

## Nightscout Einstellungen

### AndroidAPS Nightscout Client meldet "not allowed" und lädt keine Daten hoch. Was kann ich tun?

Überprüfe im Nightscout Client die "Verbindungs-Einstellungen". Vielleicht bist du gerade nicht in einem erlaubten WLAN oder du hast "Nur während des Ladens" aktiviert und dein Ladekabel ist nicht angeschlossen.

## CGM Einstellungen

### Warum meldet AndroidAPS "BG source doesn't support advanced filtering / BZ Quelle unterstützt keine erweiterte Filterung"?

Wenn du ein anderes CGM/FGM als Dexcom G5 oder G6 im xDrip native mode verwendest, dann wirst du diesen Hinweis im AndroidAPS OpenAPS-Tab bekommen. Näheres hierzu findest du unter [Glättung der Blut-Glukose-Daten](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

## Pumpe

### Wo soll ich die Pumpe tragen?

Es gibt unzählige Möglichkeiten, die Pumpe zu platzieren. Es spielt keine Rolle, ob du loopst oder nicht.

### Batterien

Looping kann die Batterien schneller entladen als gewohnt, weil das System viel öfter mit der Pumpe agiert als ein Benutzer es tun würde. Es wird deshalb empfohlen, die Batterie spätestens bei 25% Ladung zu wechseln, weil dabei die Datenübertragung schon schwieriger werden kann. Du kannst einen Batterieladungsalarm in Nightscout erstellen, indem du die Variable PUMP_WARN_BATT_P verwendest. 

Tipps um die Batteriedauer zu erhöhen:

* verringere die Zeit, bis der Bildschirm der Pumpe sich abschaltet (im Pumpenmenü)
* Reduziere die Dauer der Displaybeleuchtung bei der Pumpe.
* Stelle die Pumpenbenachrichtigung auf Töne statt Vibrieren.
* benutze die Knöpfe auf der Pumpe nur zum Befüllen, alle weiteren Informationen wie Prüfen, Batteriestand und Reservoir-Füllstand solltest du über AndroidAPS checken.
* Die App AndroidAPS kann öfter vom Android-Betriebssystem des Smartphones “abgeschossen” werden, um Energie zu sparen oder Speicher freizugeben. Wenn AndroidAPS bei jedem Aufruf neu gestartet wird, dann baut es jedes Mal eine Bluetooth-Verbindung zur Pumpe auf, dabei wird die aktuelle Basalrate und das Bolus-Protokoll erneut eingelesen. Das verbraucht viel Energie. Um zu prüfen, ob dies häufiger auftritt, kann man im AndroidAPS Menü “Logge App-Start in NS” aktivieren. Dann erscheinen Neustarts in der Blutzucker-Kurve auf dem Hauptbildschirm und in Nightscout. Sollte die App häufig neu gestartet werden, versuche sie auf der Whiteliste der Prozesse zu setzen, die nicht automatisch beendet werden und im Hintergrund weiterlaufen dürfen.
    
    Beispiel: Vorgehensweise "Whitelisting" auf einem Samsung Smartphone mit Android Pie (Android 9):
    
    * Gehe zu Einstellungen -> Gerätewartung -> Akku 
    * Scrolle bis Du AndroidAPS findest und wähle es aus 
    * Deaktiviere "App beim Datensparen zulassen"
    * Gehe ZUSÄTZLICH zu Einstellungen -> Apps -> (Symbol mit den drei Kreisen oben rechts) und wähle "special access" -> "Optimize battery usage"
    * Scrolle bis Du AndroidAPS findest und stelle sicher, dass es nicht ausgewählt ist.

* reinige die Batteriepole mit Alkohol um sicherzustellen, dass keine herstellungsbedingten Wachs- oder Fettreste mehr vorhanden sind.

* bei der [DanaR/RS Pumpe](../Configuration/DanaRS-Insulin-Pump.md) wird während der Startprozedur kurzzeitig mit Hilfe einer hohen Stromstärke versucht, die Schutzfilme auf den Batterie-Kontakten zu entfernen (die einen Energieverlust bei Lagerung verhindern sollen), aber das funktioniert nicht immer zu 100%. Dann kannst du entweder versuchen, die Batterie 2-3 Mal herauszunehmen und wieder einzusetzen, bis die Pumpe einen Batteriestand von 100 % anzeigt oder du schließt die Batterie schon vor dem Einsetzen dadurch kurz, dass du beide Batteriepole für den Bruchteil einer Sekunde mit einem metallischen Gegenstand überbrückst.
* Beachte auch die [weiteren spezifischen Batterie-Tipps](../Usage/Accu-Chek-Combo-Tips-for-Basic-usage#battery-type-and-causes-of-short-battery-life).

### Insulin-Reservoir und Katheter wechseln

Der Wechsel des Insulin-Reservoirs kann nicht über AndroidAPS erfolgen, sondern muss ganz normal direkt über die Pumpe durchgeführt werden.

* Dazu durch langes Drucken auf Closed Loop auf dem Home-Bildschirm von AndroidAPS Pausiere Loop für 1h auswählen
* Nun Pumpe vom Körper trennen und wie bisher das Insulin-Reservoir gemäß der Pumpen-Bedienungsanleitung wechseln.
* Auch das Füllen des Schlauchs und der Kanüle kann direkt an der Pumpe erfolgen. Verwende in diesem Fall den [Button KATHETERWECHSEL](../Usage/CPbefore26#pumpe) im Tab / Menü Aktionen nur zum Dokumentation.
* Anschließend durch langes Drücken auf Pausiert wieder Fortsetzen wählen.

Im Gegensatz zum “klassischen” Vorgehen nutzt AndroidAPS nicht die “Katheter füllen” Funktion der Pumpe, sondern befüllt den Katheter mit Hilfe eines normalen Bolus, der nicht in der Historie auftaucht. Das hat den Vorteil, dass dadurch keine aktuell laufende temporäre Basalrate unterbrochen wird. Auf dem Tab / im Menü AKTIONEN in AndroidAPS über den a href="../Usage/CPbefore26#pumpe">Button KATHETERWECHSEL</a> die Menge an Insulin einstellen, die zum Befüllen nötig ist und den Füllvorgang starten. Sollte die Menge nicht reichen, den Vorgang ggf. wiederholen. Du kannst im Drei-Punkte-Menü unter "Einstellungen > Andere > Füll-/Vorfüll-Standardmengen" Standardmengen festlegen. Schaue bitte im Beipackzettel deines Katheters nach, wie viele Einheiten Du je nach Schlauch- und Nadellänge zum Befüllen verwenden solltest.

## Smartphone-Hintergrundbild

Das AndroidAPS Hintergrundbild für Dein Smartphone findest Du auf der [Seite Smartphones](../Getting-Started/Phones#handy-hintergrundbild).

## Alltagsgebrauch

### Hygiene

#### Was mache ich, wenn ich duschen oder ein Bad nehmen möchte?

Du kannst die Pumpe zum Duschen oder Baden ablegen. Für so kurze Zeiträume brauchst du die Pumpe meistens nicht. Aber du solltest es in AAPS eingeben, damit die IOB-Berechnung korrekt bleibt.

Siehe [ Beschreibung oben ](../Getting-Started/FAQ#disconnect-pump).

### Arbeit

Je nachdem, welche Art von Arbeit du hast, kann es sein, dass du an Arbeitstagen unterschiedliche Behandlungs-Faktoren verwendest. Als Looper solltest du über einen [Profilwechsel](../Usage/Profiles.md) für die Dauer deines Arbeitstages nachdenken (z.B. mehr als 100% für 8 Stunden, wenn du herumsitzt oder weniger als 100%, wenn du aktiv bist), ein hohes oder niedriges temporäres Ziel setzen oder eine [Zeitverschiebung](../Usage/Profiles#zeitverschiebung) deines Profils einstellen, wenn du viel früher oder später aufstehst als sonst. Wenn du [Nightscout Profile](../Configuration/Config-Builder#nightscout-profil) verwendest, dann kannst du dort auch ein zweites Profil erstellen (z.B. "Daheim" und "Arbeit") und täglich einen Profilwechsel zu dem gerade benötigten Profil machen.

## Freizeitaktivitäten

### Sport

Du musst Deine alten Gewohnheiten zum Thema Sport aus Vor-Loop-Zeiten über Bord werfen und neue entwickeln. Wenn Du einfach eine oder mehrere Sport-BE zu Dir nimmst, wird Dein Closed Loop System diese erkennen und entsprechend einen Korrekturbolus abgeben.

Dann hast Du zwar mehr Kohlenhydrate gegessen, gleichzeitig steuert der Loop aber gegen und gibt mehr Insulin ab.

Beim Loopen solltest Du diese drei Schritte ausprobieren:

* Mache einen [Profilwechsel](../Usage/Profiles.md) kleiner 100%.
* Setze ein [temporäres Ziel für Aktivität](../Usage/temptarget#aktivitaten-temp-target) oberhalb Deines Standardzielwertes.
* Wenn Du SMB nutzt, stelle sicher dass ["Aktiviere SMB bei temporären Zielen oberhalb des regulären Ziels"](../Usage/Open-APS-features#aktiviere-smb-wahrend-hohen-temporaren-zielen) and ["SMB immer aktivieren"](../Usage/Open-APS-features#aktiviere-smb-immer) ausgeschaltet sind.

Für diese Einstellungen ist ein Vor- und Nachlauf wichtig. Nimm die Änderungen rechtzeitig vor Deinen sportlichen Aktivitäten vor und bedenke den Muskelauffülleffekt im Nachgang.

Wenn Du regelmäßig zur gleichen Zeit Sport machst (z.B. ein Kurs in Deinem Fitnessstudio) könntest Du [Automation](../Usage/Automation.rst) für den Profilwechsel und das TT nutzen. Auch standortbasierte Automation-Regeln kommen in Frage, allerdings musst Du Dir hier überlegen, wie Du den Vorlauf am besten realisieren kannst.

Der Prozentsatz des Profilwechsels, der Wert für das temporäre Ziel und die beste Zeit für die Änderungen, sind individuell. Taste Dich vorsichtig heran und baue ausreichend Sicherheit ein (starte mit einem niedrigeren Prozentsatz und einem höheren TT).

### Sex

Du kannst die Pumpe entfernen, um "frei" zu sein, aber du solltest es in AAPS eingeben, damit die IOB Berechnungen stimmen.

Siehe [ Beschreibung oben ](../Getting-Started/FAQ#disconnect-pump).

### Alkoholkonsum

Alkoholkonsum ist im Closed Loop riskant, weil der Algorithmus einen von Alkohol beeinflussten BZ nicht richtig vorhersagen kann. Du musst deine eigene Methode finden, um das zu behandeln, kannst aber folgende AndroidAPS-Funktionen nutzen:

* Deaktivierung des Closed Loop Modus und manuelle Behandlung des Diabetes oder
* hohe temporäre Ziele setzen und UAM deaktivieren, um zu vermeiden, dass der Loop das IOB erhöht, weil er eine nicht eingegebene Mahlzeit vermutet
* einen Profilwechsel auf deutlich weniger als 100% machen 

Wenn du Alkohol trinkst musst du immer dein CGM im Blick haben, um eine Hypoglykämie im Zweifel durch das Essen von Kohlenhydraten zu verhindern.

### Schlafen

#### Wie kann ich nachts loopen, ohne Handy- und WLAN-Strahlung ausgesetzt zu sein?

Viele Nutzer stellen nachts im Handy den Flugzeugmodus ein. Wenn du willst, dass der Loop dich auch im Schlaf unterstützt, dann gehe wie folgt vor (dies wird aber nur funktionieren, wenn du eine lokale BZ-Quelle wie xDrip+ oder die modifizierte Dexcom App verwendest, es geht NICHT wenn du die Glukose-Werte über Nightscout erhältst):

1. Aktiviere im Handy den Flugzeugmodus.
2. Warte, bis der Flugzeugmodus aktiv ist.
3. Schalte Bluetooth ein.

Du empfängst jetzt weder Anrufe, noch bist du mit dem Internet verbunden. Aber der Loop funktioniert.

Bei einigen Anwendern kam es zu Problemen im Flugmodus. AAPS empfing keine BZ-Werte von xDrip+. Gehe zu Einstellungen > Inter-App Einstellungen > Identifiziere Empfänger und gebe `info.nightscout.androidaps` ein.

![xDrip+ Basic Inter-App Einstellungen Identifiziere Empfänger](../images/xDrip_InterApp_NS.png)

### Reisen

#### Wie gehe ich mit einem Zeitzonenwechsel um?

Mit der DanaR und der DanaR Korean musst du nichts tun. Details zu weiteren Pumpen kannst du auf der Seite [Zeitzonenwechsel auf Reisen](../Usage/Timezone-traveling.md) finden.

## Medizinische Themen

### Krankenhausaufenthalt

Wenn du dem Klinikpersonal einige Informationen über AndroidAPS und DIY Looping geben willst, dann kannst du [eine allgemeine Einführung und Anleitung zu AndroidAPS für medizinisches Personal](../Resources/clinician-guide-to-AndroidAPS.md) ausdrucken.

### Termin mit deinem betreuenden Arzt (Internisten)

#### Auswertung

Du kannst entweder deine Nightscout Berichte zeigen (https://DEINE-NS-SITE.com/report) oder den [Nightscout Reporter](https://nightscout-reporter.zreptil.de/) verwenden.