# FAQ für Looper

Gewusst wie: Um die FAQ zu ergänzen, folge diesen [Anweisungen](../make-a-PR.md)

# Allgemein

## Kann ich die AAPS Installationsdatei (apk) einfach herunterladen?

Leider nein. Es gibt keine apk-Datei für AAPS, die einfach heruntergeladen werden kann. Du musst sie selbst [erstellen](../Installing-AndroidAPS/Building-APK.md). Das hat einen einfachen Grund:

Mit AAPS steuerst Du Deine Pumpe und deren Insulinabgabe. Nach den aktuellen EU-Regeln erfordern alle Medizinprodukte der Klassen IIa oder IIb eine Zulassung (CE Kennzeichnung), die wiederrum verschiedene Studien und abschließende Freigaben erfordern. Der Vertrieb eines nicht zertifizierten Geräts ist illegal. Ähnliche Regelungen existieren in anderen Teilen der Welt.

Diese Regeln beschränken sich nicht auf den Verkauf (also den Austausch Geld gegen Ware), sondern schließen alle möglichen Vertriebswege (auch die kostenfreie Weitergabe) ein. Nur wenn Du ein Medizinprodukt nur für Dich selbst erstellst, finden diese Regeln keine Anwendung.

Deshalb sind APKs nicht verfügbar.

(FAQ-how-to-begin)=

## Wo anfangen?

Zunächst einmal musst du dir **loopbare Hardware-Komponenten** besorgen:

- Eine [unterstützte Insulinpumpe](./Pump-Choices.md), 
- ein [Android-Smartphone](Phones.md) (Apple iOS wird von AAPS nicht unterstützt - als iOS-Alternative gibt es den [iOS Loop](https://loopkit.github.io/loopdocs/)) und
- einem [kontinuierliches Glukose-Mess-System](../Configuration/BG-Source.md). 

Zweitens musst du deine **Hardware einrichten**. Siehe [Beispiel-Setup mit Schritt für Schritt Tutorial](Sample-Setup.md).

Als Drittes musst Du die **Software-Komponenten einrichten**: AAPS und eine CGM/FGM-Quelle.

Viertens musst du **das OpenAPS Referenz-Design lernen und verstehen, um deine Behandlungs-Faktoren zu überprüfen**. Grundvoraussetzung des Loop ist, dass die Basalraten und Kohlenhydratfaktoren stimmen. Alle Empfehlungen gehen davon aus, dass der Basalbedarf durch das Basalschema gedeckt ist und auftauchende Blutzuckerschwankungen andere Gründe haben (Bewegung, Stress etc.), für die einmalige Anpassungen erforderlich sind. Die Anpassungen, die der Closed Loop autmatisch vornehmen darf, sind aus Sicherheitsgründen begrenzt (siehe maximale erlaubte temporäre Basalrate [OpenAPS-Referenz-Design](https://openaps.org/reference-design/)). Das bedeutet, dass Du nicht den Loop dafür verwenden solltest, ein falsches Basalratenprofil zu korrigieren. Wenn Du zum Beispiel häufig vor einer Mahlzeit niedrige Werte hast, dann muss wahrscheinlich die Basalrate angepasst werden. Mit [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) kannst du anhand der zahlreichen vorhandenen Therapiedaten überprüfen, ob und wie Basalraten, IC und ISF angepasst werden müssen. Oder Du machst einen [altmodischen Basalratentest](https://integrateddiabetes.com/basal-testing/).

## Was ist beim Loopen zweckmäßig?

### Passwort-Schutz

Wenn Du willst, dass Deine Einstellungen nicht einfach verändert werden können, dann kannst Du das Einstellungsmenü mit einem Passwort schützen. Dazu im Einstellungesmenü die Option "Passwort für Einstellungen" aktivieren und das gewünschte Passwort eingeben, Wenn Du das nächste Mal zu den Einstellungen gehst, musst Du das Passwort eingeben um Änderungen vorzunehmen. Wenn Du später das Passwort wieder deaktivieren möchstest, gehe zu "Passwort für Einstellungen" und lösche den Text aus dem Feld.

### Android Wear Smartwatches

Planst Du über die Android Wear App einen Bolus abgeben zu wollen oder Einstellungen anzupassen, muss AAPS die Berechtigung bekommen, Benachrichtigungen zu senden. Die Bestätigung von Eingaben, die von der Smartwatch stammen, wird nämlich über Benachrichtigungen ausgeführt.

(FAQ-disconnect-pump)=

### Pumpe trennen

Wenn Du Deine Pumpe zum Duschen, Baden und Schwimmen, Sport oder anderen Aktivitäten abnimmst, musst Du AAPS wissen lassen, dass kein Insulin geliefert wird. Nur so kann die IOB-Berechnung korrekt erfolgen.

Die Pumpe kann mit dem Loop-Status-Symbol auf dem [AAPS-Startbildschirm](Screenshots-loop-status) getrennt werden.

### Empfehlungen basieren nicht auf einzelnem CGM-Wert

Zur Sicherheit macht AAPS die Vorschläge auf Basis des aktuellen Glukose-Durschnittswertes (Delta) anstatt eines einzelnen Wertes. Wenn Dein CGM nicht kontinuierlich Glukosewerte sendet, kann es deswegen etwas dauern bis AAPS Änderungen empfiehlt.

### Weiterführende Literatur

Hier sind einige Blogs mit guten Tipps, um den Alltag mit deinem Loop zu meistern (in Englisch):

- [Fine-tuning Settings](https://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM
- [Why DIA matters](https://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM
- [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
- [Hormones and autosens](https://seemycgm.com/2017/06/06/hormones-2/) See my CGM

## Was sollte ich für den Notfall immer dabei haben?

Zunächst musst du natürlich dieselbe Notfall-Ausrüstung mitnehmen wie jeder andere Typ1-Diabetiker mit Insulinpumpentherapie. Beim Loopen mit AAPS wird dringend empfohlen, das folgende zusätzliche Notfall-Equipment jederzeit dabei oder in der Nähe zu haben:

- Powerbar und Kabel, um bei Bedarf Dein Smartphone, Deine Uhr und ggf. Dein Bluetooth Reader laden zu können.
- Pumpenbatterien
- Eine aktuelle [apk](../Installing-AndroidAPS/Building-APK.md) und die exportierten [Einstellungs-Dateien](../Usage/ExportImportSettings.md) für AAPS und die übrigen Apps, die Du nutzt (z.B. xDrip+, BYODA) sowohl lokal als auch in der Cloud (Dropbox, Google Drive).

## Wie kann ich den CGM/FGM sicher und zuverlässig befestigen?

Du kannst es mit Tape fixieren. Es gibt mehrere vorperforierte 'Overpatches' für gängige CGM Systeme (Suche bei Google, eBay oder Amazon). Einige Looper verwenden auch günstigere Standard Kinesiotapes oder Rocktape.

Du kannst es fixieren. Sie können auch Oberarm - Armbänder kaufen, die das CGM/FGM mit einer Band fixieren (Suche bei Google, eBay oder Amazon).

# AAPS-Einstellungen

Diese Aufzählung kann helfen, die Einstellungen zu optimieren. Am einfachsten ist es, oben in der Tabelle zu beginnen und sich dann nach unten durchzuarbeiten. Stelle sicher, dass die Einstellung wirklich richtig ist, bevor Du die jeweils nächste in Angriff nimmst. Taste dich in kleinen Schritten voran, statt zu viele Änderungen auf einmal vorzunehmen. Du kannst [Autotune](https://autotuneweb.azurewebsites.net/) zwar als Ausgangspunkt für Deine Überlegungen verwenden, solltest ihm aber nicht blind vertrauen: Es funktioniert unter Berücksichtigung aller individuellen Einflüsse möglicherweise bei Dir nicht gut genug. Beachte, dass die einzelnen Einstellungen voneinander abhängen. Sonst kann es passieren, dass Du 'falsche Einstellungen' verwendest, die in bestimmten Situationen gut funktionieren (z. B. wenn eine zu hohe Basalrate mit einem zu hohen Kohlenhydrat-Faktor zusammenfällt), während sie in anderen Situationen nicht funktionieren. Das bedeutet, dass Du alle Einstellungen als Ganzes betrachten und überprüfen musst, ob sie unter verschiedenen Bedingungen gut funktionieren.

## Insulinwirkdauer (DIA)

### Beschreibung & Test

Die Zeitdauer, bis das Insulin vollständig abgebaut ist.

Sie wird oft zu kurz angesetzt. Bei den meisten Menschen werden mindestens 5 Stunden benötigt, teilweise auch 6 oder 7 Stunden.

(FAQ-impact)=

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

**Niedrigerer ISF** (z.B. 40 statt 50) bedeutet, dass Dein Blutzucker pro Einheit Insulin weniger sinkt. Dies führt zu einer aggressiveren / stärkeren Korrektur mit **mehr Insulin**. Wenn der ISF zu niedrig ist, kann dies zu niedrigen BZ-Werten führen.

**Höherer ISF** (z.B. 45 statt 35) bedeutet, dass eine Einheit Insulin den Blutzucker stärker senkt. Dies führt zu einer schwächeren Korrektur mit **weniger Insulin**. Wenn der ISF zu hoch ist, kann dies zu hohen BZ-Werten führen.

**Beispiel:**

- Der BZ-Wert ist 190 mg/dl (10,5 mmol) und der Zielwert 100 mg/dl (5,6 mmol). 
- Die notwendige Korrektur ist also 90 mg/dl (= 190 - 100).
- ISF = 30 -> 90 / 30 = 3 Insulin Einheiten
- ISF = 45 -> 90 / 45 = 2 Insulin Einheiten

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

Im AMA bedeutet "dia" nicht "Insulinwirkungsdauer". Vielmehr ist "dia" ein Parameter, welcher mit DIA in Zusammenhang steht Es bedeutet wann die Korrekturdosis aufhören soll zu wirken. Und hat nichts mit mit der Berrechnung vom IOB zu tun. Im OpenAPS SMB wird dieser Parameter nicht mehr verwendet.

## Profile

### Warum verwendet man eine minimale DIA (Insulinwirkdauer) von 5 Stunden statt 2 oder 3 Stunden?

Dies wird in [diesem Artikel](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/) gut erklärt. Vergiss nicht, dein `PROFIL ZU AKTIVIEREN`, nachdem du deinen DIA verändert hast.

### Was führt dazu, dass der Loop ohne COB wiederholt zu niedrige Werte verursacht?

Zuerst solltest du deine Basalrate prüfen und einen Basalratentest ohne Kohlenhydrate machen. Wenn sie korrekt ist, dann wird dieses Verhalten typischerweise von einem zu niedrigen ISF verursacht. Ein zu niedriger ISF sieht normalerweise so aus:

![ISF (Korrekturfaktor) zu niedrig](../images/isf.jpg)

### Was sind die Ursachen hoher postprandialen Peaks im Closed Loop?

Zuerst solltest du deine Basalrate prüfen und einen Basalratentest ohne Kohlenhydrate machen. Wenn Deine Basalrate korrekt ist und Dein Glukosewert nach voller KH-Absorption auch wieder bis zu deinem Zielwert fällt, versuche einmal das temporäre Ziel "Bald Essen" einige Zeit vor der Mahlzeit zu setzen oder überlege zusammen mit Deinem Diabetologen oder Deiner Diabetologin, welcher Spritz-Ess-Abstand (SEA) geeignet wäre. Wenn deine BZ-Werte nach dem Essen und zusätzlich auch noch nach vollständiger KH-Absorption zu hoch sind, überlege zusammen mit deinem Diabetologen, ob deine IC-Werte verringert werden sollten. Wenn deine BZ-Werte bei aktiven KH zu hoch und nach voller KH-Absorption zu niedrig sind, überlege zusammen mit deinem Diabetologen, ob deine IC-Faktoren erhöht und ein geeigneter SEA eingehalten werden sollten.

# Andere Einstellungen

## Nightscout Einstellungen

### AAPS NSClient sagt 'nicht erlaubt' bzw. 'nicht zugelassen' und lädt keine Daten hoch. Was kann ich tun?

Überprüfe im Nightscout Client die "Verbindungs-Einstellungen". Vielleicht bist Du gerade nicht in einem erlaubten WLAN oder Du hast "Nur während des Ladens" aktiviert und dein Ladekabel ist nicht angeschlossen.

## CGM Einstellungen

### Warum meldet AAPS "BG source doesn't support advanced filtering / Datenquelle unterstützt keine erweiterte Filterung"?

Wenn Du ein anderes CGM/FGM als den Dexcom G5 oder G6 im 'xDrip native mode' verwendest, wirst Du diesen Hinweis im AAPS OpenAPS-Tab bekommen. Näheres hierzu findest Du unter [Glättung der Blut-Glukose-Daten](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

## Pumpe

### Wo soll ich die Pumpe tragen?

Es gibt unzählige Möglichkeiten, die Pumpe zu platzieren. Es spielt keine Rolle, ob Du loopst oder nicht.

### Batterien

Beim Loopen kann die Batterien schneller entladen als gewohnt, weil das System viel öfter mit der Pumpe agiert als ein Benutzer es tun würde. Es wird deshalb empfohlen, die Batterie spätestens bei 25% Ladung zu wechseln, weil dabei die Datenübertragung schon schwieriger werden kann. Du kannst einen Batterieladungsalarm in Nightscout erstellen, indem Du die Variable PUMP_WARN_BATT_P verwendest. Tipps um die Batteriedauer zu erhöhen:

- verringere die Zeit, bis der Bildschirm der Pumpe sich abschaltet (im Pumpenmenü)
- Reduziere die Dauer der Displaybeleuchtung bei der Pumpe.
- Stelle die Pumpenbenachrichtigung auf Töne statt Vibrieren.
- benutze die Knöpfe auf der Pumpe nur zum Befüllen, alle weiteren Informationen wie Pumpenhistorie, Batteriestand und Reservoir-Füllstand solltest Du über AAPS checken.
- Das Android-Betriebssystem Deines Smartphones kann öfter das Schließen der AAPS-App erzwingen, um Energie zu sparen oder Speicher freizugeben. Mit jedem Neustart von AAPS, wird auch eine neue Bluetooth-Verbindung zur Pumpe aufgebaut und dabei auch die aktuelle Basalrate und das Bolus-Protokoll neu eingelesen. Das verbraucht viel Energie. Um zu prüfen, ob dies häufiger auftritt, kann man im AndroudAPS Menü “Logge App-Start in NS” aktivieren. Dann erscheinen diese Neustarts als Information im Glukoseverlauf auf dem AAPS Startbildschirm und auch in Deiner Nightscout-Seite. Sollte die App häufig neu gestartet werden, versuche sie auf die Whiteliste der Prozesse zu setzen, die nicht automatisch beendet werden und im Hintergrund weiterlaufen dürfen.
    
    Beispiel: Vorgehensweise "Whitelisting" auf einem Samsung Smartphone mit Android Pie (Android 9):
    
    - Gehe zu Einstellungen -> Gerätewartung -> Akku 
    - Scrolle bis Du AAPS findest und wähle es aus
    - Deaktiviere "App beim Datensparen zulassen"
    - Gehe ZUSÄTZLICH zu Einstellungen -> Apps -> (Symbol mit den drei Kreisen oben rechts) und wähle "special access" -> "Optimize battery usage"
    - Scrolle bis Du AAPS findest und stelle sicher, dass es nicht ausgewählt ist.

- reinige die Batteriepole mit Alkohol um sicherzustellen, dass keine herstellungsbedingten Wachs- oder Fettreste mehr vorhanden sind.

- bei der [DanaR/RS Pumpe](../Configuration/DanaRS-Insulin-Pump.md) wird während der Startprozedur kurzzeitig mit Hilfe einer hohen Stromstärke versucht, die Schutzfilme auf den Batterie-Kontakten zu entfernen (die einen Energieverlust bei Lagerung verhindern sollen), aber das funktioniert nicht immer zu 100%. Dann kannst du entweder versuchen, die Batterie 2-3 Mal herauszunehmen und wieder einzusetzen, bis die Pumpe einen Batteriestand von 100 % anzeigt oder du schließt die Batterie schon vor dem Einsetzen dadurch kurz, dass du beide Batteriepole für den Bruchteil einer Sekunde mit einem metallischen Gegenstand überbrückst.
- Beachte auch die [weiteren spezifischen Batterie-Tipps](Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life).

### Insulin-Reservoir und Katheter wechseln

Der Wechsel des Insulin-Reservoirs kann nicht über AAPS erfolgen, sondern muss ganz normal direkt über die Pumpe durchgeführt werden.

- Dazu durch langes Drücken auf das Closed-Loop-Symbol auf dem ÜBERSICHT-Tab von AAPS 'Pausiere Loop für 1h' auswählen
- Koppele nun die Pumpe ab und wechsel das Reservoir wie es im Pumpenhandbuch beschrieben ist.
- Auch das Füllen des Schlauchs und der Kanüle kann direkt an der Pumpe erfolgen. Verwende in diesem Fall den [Button KATHETERWECHSEL](CPbefore26-pump) im Reiter AKTIONEN zur Dokumentation.
- Anschließend durch langes Drücken auf Pausiert wieder Forsetzen wählen.

Im Gegensatz zum “klassischen” Vorgehen nutzt AndroidAAPS nicht die “Katheter füllen” Funktion der Pumpe, sondern befüllt den Katheter mit Hilfe eines normalen Bolus, der nicht in der Historie auftaucht. Das hat den Vorteil, dass dadurch keine aktuell laufende temporäre Basalrate unterbrochen wird. Um die benötigte Insulinmenge für das Füllen festzulegen und den Füllvorgang zu starten, nutze den [Button KATHETERWECHSEL](CPbefore26-pump) auf dem Reiter AKTIONEN. Sollte die Menge nicht reichen, den Vorgang ggf. wiederholen. Du kannst im Drei-Punkte-Menü unter "Einstellungen > Andere > Füll-/Vorfüll-Standardmengen" Standardmengen festlegen. Schaue bitte im Beipackzettel deines Katheters nach, wie viele Einheiten du je nach Nadel- und Schlauchlänge zur Befüllung verwendet sollst.

## Smartphone-Hintergrundbild

Das AAPS Hintergrundbild für Dein Smartphone findest Du auf der [Seite Smartphones](Phones-phone-background).

## Alltagsgebrauch

### Hygiene

#### Was mache ich, wenn ich duschen oder ein Bad nehmen möchte?

Du kannst die Pumpe zum Duschen oder Baden ablegen. Für diesen kurzen Zeitraum benötigest Du sie möglicherweise nicht aber Du solltest AAPS sagen, dass Du die Verbindung getrennt hast, damit die IOB-Berechnungen korrekt sind. Siehe [ Beschreibung oben ](FAQ-disconnect-pump).

### Arbeit

Je nach Job können Sie verschiedene Behandlungsfaktoren an Werktagen anwenden. Als Looper solltest Du einen [-Profil-Wechsel](../Usage/Profiles.md) für Ihren typischen Arbeitstag in Betracht ziehen. Zum Beispiel könntest Du zu einem Profil über 100% wechseln, wenn Du einen weniger anspruchsvollen Job hast (z. B. an einem Schreibtisch) oder weniger als 100%, wenn Du kontinuierlich körperlich während der Arbeit aktiv bist. Du kannst Dir auch überlegen ein höheres oder niedrigeres temporäres Ziel oder eine [Zeit-Verschiebung des Profils](Profiles-time-shift) zu wählen, wenn Du viel früher oder später als üblich arbeitest oder Schichtdienst hast. Du kannst auch ein zweites Profil erstellen (z.B. 'zu Hause' und 'Werktag') und einen täglichen Profilwechsel machen, auf das Profil, das du gerade brauchst.

## Freizeitaktivitäten

(FAQ-sports)=

### Sport

Du musst Deine alten Gewohnheiten zum Thema Sport aus Vor-Loop-Zeiten über Bord werfen und neue entwickeln. Wenn Du einfach eine oder mehrere Sport-BE zu Dir nimmst, wird Dein Closed Loop System diese erkennen und entsprechend einen Korrekturbolus abgeben.

Dann hast Du zwar mehr Kohlenhydrate gegessen, gleichzeitig steuert der Loop aber gegen und gibt mehr Insulin ab.

Beim Loopen solltest Du diese drei Schritte ausprobieren:

- Mache einen [Profilwechsel](../Usage/Profiles.md) kleiner 100%.
- Setze ein [temporäres Ziel für die Aktivität](temptarget-activity-temp-target), das höher als Dein Standardziel ist.
- Wenn Du SMBs nutzt, deaktiviere ["Aktiviere SMB bei temporären Zielen oberhalb des regulären Ziels"](Open-APS-features-enable-smb-with-high-temp-targets) und deaktiviere ["SMB immer aktivieren"](Open-APS-features#enable-smb-always).

Für diese Einstellungen ist ein Vor- und Nachlauf wichtig. Nimm die Änderungen rechtzeitig vor Deinen sportlichen Aktivitäten vor und bedenke den Muskelauffülleffekt im Nachgang.

Wenn Du regelmäßig zur gleichen Zeit Sport machst (z.B. ein Kurs in Deinem Fitnessstudio) könntest Du [Automation](../Usage/Automation.md) für den Profilwechsel und das TT nutzen. Auch standortbasierte Automation-Regeln kommen in Frage, allerdings musst Du Dir hier überlegen, wie Du den Vorlauf am besten realisieren kannst.

Der Prozentsatz des Profilwechsels, der Wert für das temporäre Ziel und die beste Zeit für die Änderungen, sind individuell. Taste Dich vorsichtig heran und baue ausreichend Sicherheit ein (starte mit einem niedrigeren Prozentsatz und einem höheren TT).

### Sex

Du kannst die Pumpe ablegen, um "frei" zu sein, aber Du solltest das Trennen in AAPS eingeben, damit die IOB-Berechnungen korrekt erfolgen können. Siehe [ Beschreibung oben ](FAQ-disconnect-pump).

### Alkoholkonsum

Alkoholkonsum ist im Closed Loop riskant, weil der Algorithmus einen von Alkohol beeinflussten BZ nicht richtig vorhersagen kann. Du musst Deinen eigenen Weg finden damit umzugehen, kannst aber folgende AAPS-Funktionen nutzen:

- Deaktivierung des Closed Loop Modus und manuelle Behandlung des Diabetes oder
- hohe temporäre Ziele setzen und UAM deaktivieren, um zu vermeiden, dass der Loop das IOB erhöht, weil er eine nicht eingegebene Mahlzeit vermutet
- einen Profilwechsel auf deutlich weniger als 100% machen 

Wenn du Alkohol trinkst, musst du immer Dein CGM im Blick haben, um eine Hypoglykämie im Zweifel durch das Essen von Kohlenhydraten zu verhindern.

### Schlafen

#### Wie kann ich nachts loopen, ohne Handy- und WLAN-Strahlung ausgesetzt zu sein?

Viele Nutzer stellen nachts im Handy den Flugzeugmodus ein. Wenn Dich der Loop trotzdem, während des Schlafs unterstützen soll, führe die drei folgenden Schritte nacheinander aus. Wichtig: Dies funktioniert nur, wenn Du eine lokale BZ-Quelle wie xDrip+ oder ['Build your own Dexcom App'](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) nutzt. Bekommt AAPS die BZ-Werte über Nighscout wird das NICHT funktionieren:

1. Aktiviere im Handy den Flugzeugmodus.
2. Warte, bis der Flugzeugmodus aktiv ist.
3. Schalte Bluetooth ein.

Du empfängst jetzt weder Anrufe, noch bist du mit dem Internet verbunden. Aber der Loop funktioniert.

Bei einigen Anwendern kam es zu Problemen im Flugmodus. AAPS empfing keine BZ-Werte von xDrip+. Gehe zu Einstellungen > Inter-App Einstellungen > Identifiziere Empfänger und gebe `info.nightscout.androidaps` ein.

![xDrip+ Basic Inter-App Einstellungen Identifiziere Empfänger](../images/xDrip_InterApp_NS.png)

### Reisen

#### Wie gehe ich mit einem Zeitzonenwechsel um?

Mit der DanaR und der DanaR Korean musst du nichts tun. Details zu weiteren Pumpen kannst Du auf der Seite [Zeitzonenwechsel auf Reisen](../Usage/Timezone-traveling.md) finden.

## Medizinische Themen

### Krankenhausaufenthalt

Wenn Du dem Klinikpersonal einige Informationen über AAPS und DIY Looping geben willst, kannst Du [eine allgemeine Einführung und Anleitung zu AAPS für medizinisches Personal](../Resources/clinician-guide-to-AndroidAPS.md) ausdrucken.

### Termin mit deinem betreuenden Arzt (Internisten)

#### Auswertung

Du kannst entweder Deine Nightscout Berichte zeigen (https://DEINE-NS-SITE.com/report) oder den [Nightscout Reporter](https://nightscout-reporter.zreptil.de/) verwenden.

# Häufige Fragen auf Discord und ihre Antworten...

## Mein Problem ist hier nicht aufgeführt.

[Informationen um Hilfe zu erhalten.](Connect-with-other-users-i-m-getting-stuck-what-do-i-do-who-can-i-ask)

## Mein Problem ist hier nicht aufgeführt, aber ich habe die Lösung gefunden

[Informationen um Hilfe zu erhalten.](Connect-with-other-users-i-m-getting-stuck-what-do-i-do-who-can-i-ask)

**Erinnere uns daran, Deine Lösung zu dieser Liste hinzuzufügen!**

## AAPS stoppt jeden Tag ungefähr zur gleichen Zeit.

Google Play Protect anhalten. Schaue, ob Du "Cleaner" oder "Reinigungs" Apps hast und deinstalliere diese. In AAPS gehe auf das 3-Punkte-Menü / Über / "Don't Kill My App?".

## Wie kann ich meine Backups organisieren?

Einstellungen regelmäßig exportieren: Nach jedem Podwechsel, nach der Änderung deines Profils, wenn Du ein Ziel validiert hast, wenn Du eine neue Pumpe hast… Auch wenn sich nichts ändert, exportiere einmal im Monat. Behalte mehrere alte Exportdateien.

Kopiere auf ein Cloud-Drive (Dropbox, Google etc.): Alle APK's die Du benutzt hast, um Apps auf deinem Handy zu installieren (AAPS, xDrip, BYODA, gepatchte LibreLink App…) sowie die exportierten Einstellungsdateien aus allen verwendeten Apps.

## Ich habe Probleme und/oder Fehler beim Erstellen der App.

Bitte

- Überprüfe [Fehlerbehebung für Android Studio](troubleshooting_androidstudio-troubleshooting-android-studio) auf typische Fehler und
- die Tipps in dieser [Schritt für Schritt Anleitung](https://docs.google.com/document/d/1oc7aG0qrIMvK57unMqPEOoLt-J8UT1mxTKdTAxm8-po).

## Ich stecke bei einem Ziel fest und brauche Hilfe.

Mache ein Bildschirmfoto der Frage und der Antworten. Poste es auf dem AAPS Discord Kanal. Vergiss nicht zu sagen, welche Optionen du wählst (oder nicht) und warum. Du erhältst Tipps und Hilfe, aber Du musst die Antworten selber finden.

## Wie kann ich das Passwort in AAPS v2.8.x zurücksetzen?

Öffne das Hamburger Menü, starte den Konfigurationsassistenten und gebe ein neues Passwort ein, wenn danach gefragt wird. Du kannst den Assistenten nach der Passwortphase verlassen.

## Wie kann ich das Passwort in AAPS v3.x zurücksetzen?

Die Dokumentation findest Du [hier](update3_0-reset-master-password).

## Mein Link/Pumpe/Pod reagiert nicht (RL/OL/EmaLink…)

Bei manchen Smartphones treten Bluetooth-Verbindungsprobleme mit den Kommunikationsgeräten (RL/OL/EmaLink...) auf.

Einige haben auch nicht reagierende Verbindugnen zu Ihren Geräten (AAPS sagt, dass sie verbunden sind, aber die Geräte können die Pumpe nicht erreichen oder Kommandos senden.)

Der einfachste Lösungsweg ist: 1/ Lösche das Gerät aus AAPS 2/ Schalte das Gerät (RileyLink etc.) aus 3/ Schließe AAPS über das 3-Punkte-Menü oben rechts 4/ Drücke lange auf das AAPS Icon, öffne die Info zur App, Wähle 'Stopp erzwingen' , wähle 'Speicher' und dann 'Cache leeren' (nicht: 'Daten löschen' wählen!) 4+/ In selten Fällen muss das Smartphonen nun neugestartet werden. Du kannst es ohne Neustart versuchen. 5/ Schalte den Link ein 6/ Starte AAPS 7/ Gehe auf den Reiter POD, 3-Punkt-Menü, Suche und Verbindung Link

## Fehler beim App erstellen: Dateiname zu lang

Während des Erstellens bekomme ich einen Fehler, dass der Dateiname zu lang ist. Mögliche Lösungen: Verschiebe die Quelldateien ein Verzeichnis näher an das Stammverzeichnis des Speichers (z.B. "C:\src\AndroidAPS-EROS").

Von Android Studio: Stelle sicher, dass "Gradle" nach dem Öffnen des Projekts und dem Download von GitHub synchronisiert und indiziert ist. Führe Build -> Clean Project und danach Build -> Rebuild Project durch. Führe File -> Invalidate Caches... durch und starte Android Studio neu.

## Alarm: Entwickler-Version. Closed Loop ist nicht verfügbar.

AAPS läuft nicht im "Entwicklermodus". AAPS zeigt die folgende Meldung: "Entwickler-Version. Closed Loop ist nicht verfügbar".

Stelle sicher, dass der "Entwicklermodus" in AAPS aktiviert ist: Speichere eine leere Datei mitr dem Namen "engineering_mode" im Verzeichnis "AAPS/extra". Jede Datei funktioniert so lange wie sie korrekt benannt ist. Starte AAPS neu, damit die Datei erkannt werden kann und der "Entwicklermodus" damit aktiviert wird.

Tipp: Mache eine Kopie einer existierenden Logdatei und benenne sie in "engineering_mode" um (Aufpassen: keine Dateiendung!).

## Wo finde ich die Einstellungsdateien?

Einstellungsdateien werden auf dem internen Speicher Ihres Telefons im Verzeichnis "/AAPS/preferences" gespeichert. WARNUNG: Stelle sicher, dass Du Dein Passwort nicht verlierst, da Du ohne Passwort keine verschlüsselte Einstellungsdatei importieren kannst!

## Wie konfiguriere ich die Akkuoptimierung?

Das richtige Konfigurieren der Energiespareinstellungen ist wichtig, um zu verhindern, dass das Betriebssystem des Smartphones AAPS und die anderen wichtigen Apps und Dienste aussetzt, wenn Du Dein Telefon nicht benutzt. Das Ergebnis ist, dass AAPS nicht arbeiten kann und/oder Bluetooth-Verbindungen für Sensor und Rileylink (RL) getrennt werden, was "Pumpe getrennt" Alarme und Kommunikationsfehler verursacht. Auf dem Smartphone gehe zu Einstellungen > Apps und deaktiviere die Akkuoptimierung ('nicht eingeschränkt') für: AAPS, xDrip+ oder die BYODA/Dexcom-App und die Bluetooth-System-App (Du musst eventuell zuerst die System-Apps einblenden). Alternativ kannst Du die Akkuoptimierung auf dem Smartphone komplett deaktivieren. Das führt dazu, dass der Akku schneller verbraucht wird, aber es ist ein guter Weg, um herauszufinden, ob die Akkuoptimierung das Problem verursacht. Die Akkuoptimierungseinstellungen können, je nach Telefonhersteller und/oder Betriebsystemversion, stark abweichen bzw. anders aussehen. Aus diesem Grund ist es nahezu unmöglich, Anweisungen zur korrekten Einstellung der Akkuoptimierung für Dein Setup zu geben. Experimentiere, welche Einstellungen am besten funktionieren. Für weitere Informationen siehe auch "Dont kill my app"

## Alarm Pumpe nicht erreichbar mehrmals am Tag oder in der Nacht.

Das Telefon kann AAPS-Dienste oder sogar Bluetooth unterbrechen, wodurch die Verbindung zu RL verloren geht (siehe Akkuoptimierung). Ziehe in Erwägung, den Grenzwert Pumpe nicht erreichbar auf 120min zu setzen, indem Du rechts oben zum Drei-Punkt-Menü gehst, wähle Einstellungen -> Lokale Alarme -> Grenzwert Pumpe ist nicht erreichbar [min].

## Wo kann ich Behandlungen in AAPS v3 löschen?

3-Punkte-Menü, wähle Behandlungen, dann hast Du verschiedene Optionen zur Verfügung.

## NSClient App konfigurieren und nutzen

AAPS kann mit der NSClient remote app (und optional auch mit der zugehörigen Wear app auf einer Android Wear Uhr) aus der Ferne kontrolliert und bedient werden. Zur Klärung und weil es leicht zu Verwechselungen kommen kann: Die NSClient remote app ist nicht die NSClient Konfiguration in AAPS, und die NSClient remote Wear app ist nicht zu verwechseln mit der AAPS Wear app. Wir verwenden im Folgenden für Apps zur Steuerung aus der Ferne die Namen 'NSClient remote' und 'NSClient remote Wear'.

Um die NSClient remote Funktion nutzen zu können musst Du: 1) Die NSClient remote app installieren (die Version sollte zur verwendeten AAPS Version passen) 2) Die NSClient remote app starten und den Einrichtungsassistenten durchlaufen, um die notwendigen Berechtigungen richtig zu setzen und den Zugriff auf Deine Nightsout-Webseite einzurichten. 3) An dieser Stelle kannst Du einige der Alarm-Optionen und/oder der erweiterten Einstellungen ausschalten, die den Start der 'NSClient remote'-App auf Deiner Nightscout-Webseite protokolliert. Sobald das erledigt ist, wird der 'NSClient remote' die aktuellen Profilinformationen von Deiner Nightscout-Webseite herunterladen. Der Startbildschirm wird Deine CGM-Werte und einige AAPS-Daten anzeigen. Es werden noch nicht alle Graphen angezeigt werden und es wird ein Hinweis erscheinen, dass das Profile noch nicht gesetzt wurde. 4) Um das Profil nun zu setzen:

- Aktiviere 'Gespeicherte Profile abrufen' in AAPS (Einstellungen > Nightscout-Client-Einstellungen > Synchronisierung)
- Setze/Aktiviere das Profil, in dem Du in der 'NSClient remote'-App auf das Profil drückst und mit OK bestätigst. Danach wird das Profil gesetzt und alle Werte aus AAPS sollten in der 'NS Client remote'-App vollständig angezeigt werden. Tipp: Sollte der Graph weiterhin nicht gezeigt werden, ändere die Graphen-Einstellung (langes Drücken auf den Graphen), um so eine Aktualisierung zu erzwingen. Um AAPS über die 'NSClient remote'-App steuern zu können, aktiviere die Funktionen, die aus der Ferne steuerbar sein sollen (z.B. Temporäre Ziele abrufen, Insulin abrufen etc.). Die Einstellungen findest Du in AAPS unter: Einstellungen > Nightscout-Client-Einstellungen > Synchronisierung. Sobald Du die beschriebenen Einstellungen gemacht hast, kannst Du AAPS aus der Ferne (remote) entweder über die Nightscout-Webseite oder die 'NSClient remote'-App steuern.

Wenn Du AAPS mit der 'NSClient remote Wear'-App folgen/steuern möchtest, müssen sowohl die 'NSClient remote'-App und auch die zugehörige Wear-App installiert werden. Um die 'NSClient remote Wear'-App zu erstellen (kompilieren), nutze die Standardanleitung bis zu dem Punkt an dem kompiliert werden soll. Wähle hier die Variante 'NSClient' für das Kompilieren.

## Ich sehe ein rotes Dreieck / AAPS schließt den Loop nicht / Loop bleibt in LGS / Ich sehe ein gelbes Dreieck

Rote und gelbe Dreiecke sind Sicherheitsfunktionen in AAPS v3.

Ein rotes Dreieck zeigt, dass es doppelte Glukosewerte gibt und AAPS die Änderungen der Glukosewerte (Delta) nicht sicher berechnen kann. In dieser Situation kann der Loop nicht geschlossen werden. Um das rote Dreieck verschwinden zu lassen, musst Du jeweils einen der doppelten Glukosewerte löschen. Gehe auf den BYODA oder xDrip+ Reiter, wähle oben rechts das Löschen-Icon aus, markiere jeweils einen der doppelten Einträge und drücke erneut das Löschen-Icon. Bestätige das Löschen mit OK. (Das Löschen funktioniert in alten AAPS Versionen ggf. anders). Wenn es zu viele doppelte Glukosewerte geben sollte, muss eventuell die AAPS-Datenbank zurückgesetzt werden. Beim Zurücksetzen verlierst Du auch die bisherigen Statistiken, IOB, COB und das gewählte Profil.

Mögliche Ursache des Problems: xDrip und/oder NS, die nachträglich Glukosewerte eingetragen haben ('backfilling').

Das gelbe Dreieck zeigt eine verzögerte Übermittlung der Glukosewerte an. Es werden nicht alle 5 Minuten Glukosewerte empfangen (unregelmäßige oder fehlende Werte). Häufig ist das ein Problem von Libre-Sensoren. Das Problem tritt auch beim Wechsel des G6-Transmitters auf. Wenn das gelbe Dreieck durch den G6-Transmitter verursacht wird, verschwindet es nach einigen Stunden (rund 24h) automatisch. Bei Libre-Sensoren wird das gelbe Dreickeck permanent zu sehen sein. Der Loop kann trotzdem geschlossen werden und wird einwandfrei funktionieren.

## Kann ich einen laufenden DASH Pod auf eine andere Hardware umziehen?

Ja, das ist möglich. Beachte bitte, dass das Umziehen der Hardware als Funktionalität "nicht unterstützt" und "nicht getestet" ist. Es hat also ein Restrisiko. Am besten probierst Du das Vorgehen dann aus, wenn Dein Pod kurz vor dem Ablauf ist, sodass im Fehlerfall nicht viel schiefgehen kann und kein neuer Pod verloren geht.

Entscheidend ist, dass der Pumpen-Status ('state'), der die MAC-Adresse enthält, in AAPS und DASH beim erneuten Verbindungsaufbau übereinstimmen.

## Schritte, die ich hierbei mache:

1) Trenne (suspend) den DASH. Damit wird sichergestellt, dass der DASH bei einem Verbindungsverlust DASH keine Befehle mehr ausführt. 2) Bringe Dein Smartphone in den Flugmodus, um 'BT', 'WLAN' und 'Mobile Daten' zu deaktivieren. So kann AAPS garantiert nicht mehr mit dem DASH kommunizieren. 3) Export settings (which includes the DASH state) 4) Copy the settings file just exported from the phone (as it is in airplane mode and we do not want to change that, easiest way is using USB cable) 5) Copy the settings file to the alternate phone. 6) Importiere die Einstellungen auf dem neuen Smartphone in AAPS. 7) Überprüfe, ob der Pod auf dem DASH Tab angezeigt wird. 8) Hebe den 'Suspend'-Status des Pod wieder auf. 9) Prüfe auf dem DASH Tab, dass er mit dem Pod kommuniziert (tippe auf 'Aktualisieren')

Gratulation! Du hast es geschafft!

*Moment!* Das Smartphone denkt noch, dass es sich mit dem selben (alten) DASH verbinden kann:

1) Wähle 'deaktivieren' auf dem alten Smartphone. Es kann nicht passieren. Das Smartphone ist noch immer im Flugmodus und kann daher den Pod nicht tatsächlich deaktivieren. 2) Die Deaktivierung wird erwartungsgemäß einen Kommunikationsfehler hervorrufen. 3) Tippe einfach ein paar Mal auf "Wiederholen", bis AAPS die Option "Verwerfen" des Pods anbietet.

Überprüfe, ob AAPS "kein aktiver Pod" meldet. Du kannst den Flugmodus jetzt wieder sicher deaktivieren.

## Wie importiere ich Einstellungen aus früheren AAPS-Versionen in AAPS v3?

Du kannst nur Einstellungen (in AAPS v3) importieren, die zuvor mit AAPS v2.8.x oder v3.x exportiert wurden. Solltest Du eine Version älter als v2.8x nutzen oder Einstellungen aus älteren Version importieren wollen, musst Du, als Zwischenschritt, AAPS v2.8 installieren. Importiere die älteren Einstellungen in v2.8. Nachdem Du geprüft hast, das alles OK ist, kannst die Einstellungen aus v2.8 exportieren. Installiere AAPS v3 und importiere die gerade exportierten Einstellungen aus v2.8 in v3.

Wenn Du zum Erstellen der v2.8 und v3 den gleichen 'key' verwendest hast, wirst Du noch nicht einmal die Einstellungen importieren müssen. Du kannst dann v3 direkt auf v2.8 installieren.

Es wurden einige neue Ziele (Objectives) hinzugefügt. Du musst diese durchlaufen.