# AAPS auf einer Smartwatch mit Wear OS

Du kannst AndroidAPS auf Deiner Smartwatch mit **Wear OS** installieren. Mit der Watch-Version von AAPS kannst Du:

* **Daten auf Deiner Uhr anzeigen**: nutze dafür ein [Custom Watchface](../Configuration/Watchfaces#aaps-watchfaces) oder stattdessen ein Standard-Watchface mit Komplikationen.
* **AAPS steuern**: Bolus abgeben, temporäres Ziel setzen, etc. 

### Bevor Du Dir eine Uhr kaufst...

* Manche Funktionen wie *Komplikationen* erfordern Wear OS Version 2.0 oder höher.
* Google hat *Android Wear 1.x* ab Version 2.0 in *Wear OS* umbenannt. Wenn die Uhr also mit *Android Wear* angepriesen wird, kann das auf eine ältere Version 1.x hinweisen.
* Wenn die Smartwatch nur als mit *Android* und *iOS* kompatibel beschrieben wird, **bedeutet dies nicht**, dass sie *Wear OS* nutzt. Es kann sich auch um ein herstellerspezifisches Betriebssystem handeln, das **nicht mit AAPS wear kompatibel ist!**
* Prüfe die [Liste der getesteten Smartphones und Smartwatches](../Getting-Started/Phones#liste-der-getesteten-smartphones) und [frage in der Community](../Where-To-Go-For-Help/Connect-with-other-users.md), falls Du Zweifel hast, ob die von Dir gewünschte Uhr unterstützt wird.

### Wear OS Version von AAPS erstellen

Wähle beim [Erstellen von AAPS](../Installing-AndroidAPS/Building-APK.md) build variant "fullRelease" (oder "pumpRelease" falls Du die Pumpe nur steuern, aber keinen Closed Loop betreiben willst).

Stelle sicher, dass sowohl beide Versionen von AAPS (Smartphone und Smartwatch) mit den gleichen Keys signiert sind!

Die Installation der Wear-Version der APK auf Deiner Smartwatch unterscheidet sich nicht von der Installation auf Deinem Smartphone. Evtl. musst Du den *Entwicklermodus* auf der Smartwacht aktivieren und die APK mit `adb install wear-full-release.apk` auf hochladen und installieren.

Wenn Du AAPS auf der Smartwatch verwendest, müssen die AAPS Versionen auf Uhr und Smartphone die gleichen sein. Führe ein Update immer auf beiden gleichzeitig aus.

### Einrichten auf dem Smartphone

In AndroidAPS auf Deinem Smartphone musst Du im Konfigurations-Generator das [Wear Plugin](../Configuration/Config-Builder#wear) aktivieren.

## AAPS von der Uhr aus steuern

AndroidAPS kann mit einer Android Wear Smartwatch *gesteuert* werden. Wenn Du Deinen Loop von der Uhr aus steuern willst (z.B. Bolus abgeben), aktiviere "Steuerung durch die Uhr".

Die nachfolgenden Funktionen kannst Du von der Uhr aus starten:

* temporäres Ziel setzen
* Bolus abgeben
* eCarbs eintragen
* Bolusrechner verwenden (Welche Variablen bei der Berechnung berücksichtigt werden, lässt sich in den [Einstellungen](../Configuration/Config-Builder#wear) auf dem Smartphone festlegen.)
* Loop- und Pumpenstatus prüfen
* TDD (Total daily dose = Bolus + Basal pro Tag) anzeigen

## AAPS Watchfaces

Es gibt mehrere Ziffernblätter zur Auswahl, die das durchschnittliche Delta, IOB, die derzeit aktive TBR und Basalraten sowie die Kurve der CGM-Werte anzeigen können.

Stelle sicher, dass AndroidAPS die Erlaubnis hat, Benachrichtigungen auf der Uhr anzuzeigen. Die Eingaben werden aktiviert, indem man die Benachrichtigung auf der Uhr öffnet, einmal wischt und bestätigt.

Um schneller zu AndroidAPS zu kommen, kannst du den angezeigten CGM-Wert auf der Uhr doppelt anklicken. Klicke doppelt auf die BZ-Kurve um den Zeitraum zu ändern.

## Verfügbare Watchfaces

![Verfügbare Watchfaces](../images/Watchface_Types.png)

## AAPSv2 Watchface - Legende

![Legende AndroidAPSv2 watchface](../images/Watchface_Legend.png)

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

## Zugriff auf das Hauptmenü von AAPS

Um auf das Hauptmenü von AAPS zuzugreifen, kannst Du eine der folgenden Möglichkeiten verwenden:

* Doppeltippen auf Deinen BZ-Wert
* AAPS Icon im App-Menü der Uhr auswählen
* Tipp auf die AAPS Komplikation (falls entsprechend konfiguriert)

## Einstellungen (in der Watch-App)

Um auf die Watchface-Einstellungen zuzugreifen, gehe ins AAPS-Hauptmenü, wische nach oben und wähle "Einstellungen" aus.

Ein gefüllter Stern (**Ein**) zeigt an, dass die Option ausgewählt wurde und ein leerer Stern (**Aus**), dass die Option deaktiviert ist:

![Einstellungen ein/aus](../images/Watchface_Settings_On_Off.png)

### AAPS Companion Parameters

* **Vibrieren beim Bolus** (Standard: `Ein`):
* **Einheiten** (Standard: `mg/dl`): Falls auf **Ein** gestellt, werden `mg/dl` verwendet, bei **Aus** `mmol/l`. Wird beim Setzen eines temporären Ziels von der Uhr aus verwendet.

### Watchface-Einstellungen

* **Show Date** (Standard: `Off`): Anzeige Datum, nicht auf allen Watchfaces verfügbar
* **Show IOB** (Standard: `On`): Anzeige aktives Insulin (Details werden in den Wear-Einstellungen in AAPS vorgenommen)
* **Show COB** (Standard: `On`): Anzeige aktive Kohlenhydrate
* **Show Delta** (Standard: `On`): Anzeige BZ-Änderung der letzten fünf Minuten
* **Show AvgDelta** (Standard: `On`): Anzeige der BZ-Änderung der letzten 15 Minuten
* **Show Phone Battery** (Standard: `On`): Anzeige Akkuladestand Smartphone in % Rot, wenn unter 30%.
* **Show Rig Battery** (Standard: `Off`): Anzeige niedrigster Wert der Ladestände von Smartphone, Pumpe und Transmitter
* **Show Basal Rate** (Standard: `On`): Anzeige der aktuellen Basalrate (in IE/Std. oder in % bei temporärer Basalrate)
* **Show Loop Status** (Standard: `On`): Anzeige der Minuten seit letzter Loop-Aktion (Pfeile um den Wert werden rot, wenn dieser über 15 Minuten liegt.)
* **Show BG** (Standard: `On`): Anzeige des letzten CGM-Werts
* **Show Direction Arrow** (Standard: `On`): Anzeige Trendpfeil
* **Show Ago** (Standard: `On`): Anzeige Minuten seit letztem CGM-Wert
* **Dark** (Standard: `On`): Wechsel zwischen schwarzem und weißem Hintergrund (außer Cockpit und Steampunk Watchface)
* **Highlight Basals** (Standard: `Off`): verbesserte Sichtbarkeit der Basalrate und von temporären Basalraten
* **Matching divider** (Standard: `Off`): nur für die AAPS, AAPSv2 und AAPS(Large) Watchfaces: kontrastreiche Anzeige des Querbalkens (**Off**) oder Anzeige in Hintergrundfarbe (**On**)
* **Chart Timeframe** (Standard: `3 Std.`): Anzeigezeitraum des Diagramms zwischen einer und fünf Stunden

### Einstellungen für die Benutzeroberfläche

* **Input Design**: Position der Schaltflächen "+" und "-" für Kommandos an AAPS (TT, Insulin, Kohlenhydrate ...)

![Input design options](../images/Watchface_InputDesign.png)

### Watchface-spezifische Parameter

#### Steampunk Watchface

* **Delta Granularity** (Standard: `Medium`): Genauigkeit der Anzeige der CGM-Werte (siehe Screenshot)

![Steampunk_gauge](../images/Watchface_Steampunk_Gauge.png)

#### Circle Watchface

* **Big Numbers** (Standard: `Off`): größere Schrift
* **Ring History** (Standard: `Off`): Graphische Darstellung der BZ-Historie mit grauen Ringen innerhalb des grünen "Stundenrings"
* **Light Ring History** (Standard: `On`): Ring history dezenter mit dunklerem Grau
* **Animations** (Standard: `On`): Animation des Kreises im Watchface - Voraussetzung: Funktion wird von der Uhr unterstützt und diese ist nicht im Energiesparmodus

### Kommando-Einstellungen

* **Wizard in Menu** (Standard: `On`): Bolus Assistent im Hauptmenü, um direkt an der Uhr Boli und Kohlenhydrate zu erfassen.
* **Prime in Menu** (Standard: `Off`): Katheter- und Kanülenbefüllung über die Uhr
* **Single Target** (Standard: `On`):
  
  * `On`: Zielwert für temporäre Ziele (TT)
  * `Off`: Zielbereich für temporäre Ziele (TT)

* **Wizard Percentage** (Standard: `Off`): Boluskorrektur über den Assistenten (Wert wird in Prozent eingegeben, bevor die Insulinabgabe bestätigt wird)

## Fehlerbehebung der Smartwatch App:

* In Android Wear 2.0 installiert sich das Watchface nicht von alleine. Du musst in den Playstore der Uhr (unterscheidet sich vom Playstore des Smartphones!) gehen und unter der Kategorie “installierte Apps auf dem Handy” AAPS aktivieren. Aktiviere ebenfalls Auto Update. 
* Manchmal hilft es, Apps erneut mit der Uhr zu synchronisieren, da es manchmal ein bisschen langsam sein kann, bis der Sync automatisch erfolgt: Wear Os > Zahnrad-Symbol (ganz unten) > Name deiner Uhr > Apps erneut synchronisieren.
* Schalte ADB Debuggen in den Entwickleroptionen der Uhr ein, verbinde die Uhr via USB mit dem PC und starte die Wear App einmal in Android Studio.

## Nightscout Daten anzeigen

Falls du ein anderes System zum loopen verwendest und deine Daten oder die deines Kindes/Verwandten auf der Uhr *sehen* möchtest, kannst du auch einfach nur die Watch APK kompilieren. Wähle dazu in Android Studio die Build Variante “nsclient”. Gehe wie unter [AndroidAPS installieren - App erstellen](../Installing-AndroidAPS/Building-APK.md) beschrieben vor und wähle die Build Variante "NSClientRelease". Es gibt mehrere Ziffernblätter zur Auswahl, die das durchschnittliche Delta, IOB, die derzeit aktive TBR und Basalraten sowie die Kurve der CGM-Werte anzeigen können.

# Pebble

Pebble Nutzer können das [Urchin watchface](https://github.com/mddub/urchin-cgm) nutzen um ihre Loop-Daten zu *sehen*. Mit dieser Methode ist es aber nicht möglich, die Pumpe und AndroidAPS zu steuern. Du kannst Felder wählen, um z. B. IOB, aktiver temp. Basalrate und Vorhersage anzeigen zu lassen. Falls du open loopst, kannst du [IFTTT](https://ifttt.com/) benutzen, um ein kleines Programm zu erstellen, welches (wenn eine Benachrichtigung von AndroidAPS kommt) eine SMS oder Benachrichtigung anzeigt.