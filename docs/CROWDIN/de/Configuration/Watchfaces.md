# Smartwatch-Integration

AndroidAPS kann mit einer Android Wear Smartwatch *gesteuert* werden. Wenn du Boli etc. von der Smartwatch aus abgeben willst, aktiviere "Steuerung durch die Uhr".

Die nachfolgenden Funktionen kannst Du von der Uhr aus starten:

* temporäres Ziel setzen
* Bolus abgeben
* eCarbs eintragen
* Bolusrechner verwenden (Welche Variablen bei der Berechnung berücksichtigt werden, lässt sich in den [Einstellungen](../Configuration/Config-Builder#wear) auf dem Smartphone festlegen.)
* Loop- und Pumpenstatus prüfen
* TDD (Total daily dose = Bolus + Basal pro Tag) anzeigen

Dafür musst du beim [Erstellen der APK](../Installing-AndroidAPS/Building-APK.md) die Build Variante "fullRelease" auswählen (alternativ erlaubt "pumpRelease" die Fernsteuerung der Pumpe ohne loopen). Im Konfigurations-Generator von AAPS musst du [Wear erlauben](../Configuration/Config-Builder#wear).

Es gibt mehrere Ziffernblätter zur Auswahl, die das durchschnittliche Delta, IOB, die derzeit aktive TBR und Basalraten sowie die Kurve der CGM-Werte anzeigen können.

![AndroidAPSv2 watchface](../images/AAPSv2_Watchface.png)

Stelle sicher, dass AndroidAPS die Erlaubnis hat, Benachrichtigungen auf der Uhr anzuzeigen. Die Eingaben werden aktiviert, indem man die Benachrichtigung auf der Uhr öffnet, einmal wischt und bestätigt.

Um schneller zu AndroidAPS zu kommen, kannst du den angezeigten CGM-Wert auf der Uhr doppelt anklicken. Klicke doppelt auf die BZ-Kurve um den Zeitraum zu ändern.

## Verfügbare Watchfaces

![smartwatch-Integration](../images/watchfaces.jpg)

## Legende AAPSv2 Watchface

![Legende AndroidAPSv2 watchface](../images/AAPSv2_Watchface_legend.png)

A - Zeit seit der letzten Loop-Aktivität

B - CGM Wert

C - Minuten seit dem letzten CGM-Wert

D - Veränderung zwischen letztem und vorletztem CGM-Wert (in mmol oder mg/dl)

E - Durchschnittliche Änderung der CGM-Werte in den letzten 15 Minuten

F - Batteriestatus des Smartphones

G - Basalrate (Anzeige in IE/Std. bei Standard-BR und in % während einer TBR)

H - BGI (blood glucose interaction) -> erwartete BZ-Änderung allein auf Basis des aktiven Insulins.

I - Kohlenhydrate (carbs on board | e-carbs in der Zukunft)

J - Insulin on board (aus Boli | aus Basal)

## Einstellungen (in der Watch-App)

Um auf die Watchface-Einstellungen zuzugreifen, tippe doppelt auf den BZW-Wert, wische nach oben und wähle "Einstellungen" aus.

![settings_on_off](../images/settings_on_off.jpg)

### AAPS Companion Parameters

Vibrieren bei Bolus (Standard: ein)

Maßeinheit (Standard: mg/dl): "ein" = mg/dl - "aus" = mmol/l Wird beim Setzen eines temporären Ziels von der Uhr aus verwendet.

### Watchface-Einstellungen

* Show Date (Standard: aus): Datums, nicht auf allen Watchfaces verfügbar
* Show IOB (Standard: ein): aktives Insulins (Detaileinstellungen findest Du in den AAPS Wear Einstellungen)
* Show COB (Standard: ein): aktive Kohlenhydrate
* Show Delta (Standard: ein): BZ-Änderung der letzten 5 Minuten
* Show AvgDelta (Standard: ein): durchschnittliche BZ-Änderung der letzten 15 Minuten
* Show Phone Battery (Standard: ein): Smartphone-Akku Ladestand in % Rot, wenn unter 30%.
* Show Rig Battery (Standard: aus): niedrigster Wert der Ladestände von Smartphone, Pumpe und Transmitter
* Show Basal Rate (Standard: ein): aktuelle Basalrate (in IE/Std. bzw. % während einer temporären Basalrate)
* Show Loop Status (Standard: ein): Minuten seit letzter Loop-Aktivität (Pfeile um den Wert werden rot, wenn vor mehr als 15 Minuten).
* Show BG (Standard: ein): letzter BZ-Wert
* Show Direction Arrow (Standard: ein): Trendpfeil 
* Show Ago (Standard: ein): Minuten seit letztem CGM-Wert
* Dark (Standard: ein): Wechsel zwischen weißem und schwarzem Hintergrund (außer für Cockpit und Steampunk Watchface)
* Highlight Basals (Standard: aus): Verbesserung der Sichtbarkeit von Basalrate und temporärer Basalratenanpassungen
* Chart Timeframe (Standard: 3 Std.): Anzeigezeitraum des Diagramms zwischen einer und fünf Stunden

### Einstellungen für die Benutzeroberfläche

Input design: Position der Schaltflächen "+" und "-" für Kommandos an AAPS (TT, Insulin, Kohlenhydrate ...)

![Input design options](../images/InputDesign.jpg)

### Watchface-spezifische Parameter

#### Steampunk Watchface

Schrittgröße (Standard: Medium)

![Steampunk_gauge](../images/steampunk_gauge.jpg)

#### Circle Watchface

Big Numbers: größerer Text, um die Sichtbarkeit zu verbessern

Ring History: Grafische Anzeige der BZ-Historie mit grauen Ringen innerhalb des grünen Rings

Light Ring History: diskretere Ring history mit dunklerem Grau

Animations:

### Kommando-Einstellungen

Wizard in Menu (Standard: ein): Bolusassistent auf der Uhr zur Eingabe von Kohlenhydraten und zur Bolusabgabe

Prime in Menu (Standard: aus): Schlauch-/Kanülenfüllen über die Uhr

Single Target (Standard: ein):

* On: Einzelwert für temporäre Ziele
* Off: Hoch- und Tiefwert für temporäre Ziele

Wizard Percentage (Standard: aus): Boluskorrektur über den Assistenten (Wert wird in Prozent eingegeben, bevor die Insulinabgabe bestätigt wird)

## Fehlerbehebung der Smartwatch App:

* In Android Wear 2.0 installiert sich das Watchface nicht von alleine. Du musst in den Playstore der Uhr (unterscheidet sich vom Playstore des Smartphones!) gehen und unter der Kategorie “installierte Apps auf dem Handy” AAPS aktivieren. Aktiviere ebenfalls Auto Update. 
* Manchmal hilft es, Apps erneut mit der Uhr zu synchronisieren, da es manchmal ein bisschen langsam sein kann, bis der Sync automatisch erfolgt: Wear Os > Zahnrad-Symbol (ganz unten) > Name deiner Uhr > Apps erneut synchronisieren.
* Schalte ADB Debuggen in den Entwickleroptionen der Uhr ein, verbinde die Uhr via USB mit dem PC und starte die Wear App einmal in Android Studio.

## Nightscout Daten anzeigen

Falls du ein anderes System zum loopen verwendest und deine Daten oder die deines Kindes/Verwandten auf der Uhr *sehen* möchtest, kannst du auch einfach nur die Watch APK kompilieren. Wähle dazu in Android Studio die Build Variante “nsclient”. Gehe wie unter [AndroidAPS installieren - App erstellen](../Installing-AndroidAPS/Building-APK.md) beschrieben vor und wähle die Build Variante "NSClientRelease". Es gibt mehrere Ziffernblätter zur Auswahl, die das durchschnittliche Delta, IOB, die derzeit aktive TBR und Basalraten sowie die Kurve der CGM-Werte anzeigen können.

## Pebble

Pebble Nutzer können das [Urchin watchface](https://github.com/mddub/urchin-cgm) nutzen um ihre Loop-Daten zu *sehen*. Mit dieser Methode ist es aber nicht möglich, die Pumpe und AndroidAPS zu steuern. Du kannst Felder wählen, um z. B. IOB, aktiver temp. Basalrate und Vorhersage anzeigen zu lassen. Falls du open loopst, kannst du [IFTTT](https://ifttt.com/) benutzen, um ein kleines Programm zu erstellen, welches (wenn eine Benachrichtigung von AndroidAPS kommt) eine SMS oder Benachrichtigung anzeigt.