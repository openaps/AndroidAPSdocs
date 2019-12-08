# AAPS auf einer Smartwatch mit Wear OS

Du kannst AndroidAPS auf Deiner Smartwatch mit **Wear OS** installieren. Mit der Watch-Version von AAPS kannst Du:

* **Daten auf Deiner Uhr anzeigen**: nutze dafür ein [Custom Watchface](../Configuration/Watchfaces#aaps-watchfaces) oder stattdessen ein Standard-Watchface mit Komplikationen.
* **AAPS steuern**: Bolus abgeben, temporäres Ziel setzen, etc. 

### Bevor Du Dir eine Uhr kaufst...

* Manche Funktionen wie *Komplikationen* erfrodern Wear OS Version 2.0 oder höher.
* Google hat *Android Wear 1.x* ab Version 2.0 in *Wear OS* umbenannt. Wenn die Uhr also mit *Android Wear* angeprisen wird, kann das auf eine ältere Version 1.x hinweisen.
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

![Available watchfaces](../images/Watchface_Types.png)

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

* Doppeltipen auf Deinen BZ-Wert
* AAPS Icon im App-Menü der Uhr auswählen
* Tip auf die AAPS Komplikation (falls entsprechend konfiguriert)

## Einstellungen (in der Watch-App)

Um auf die Watchface-Einstellungen zuzugreifen, gehe ins AAPS-Hauptmenü, wische nach oben und wähle "Einstellungen" aus.

Ein gefüllter Stern (**Ein**) zeigt an, dass die Option ausgewählt wurde und ein leerer Stern (**Aus**), dass die Option deaktiviert ist:

![Settings on/off](../images/Watchface_Settings_On_Off.png)

### AAPS Companion Parameters

* **Vibrieren beim Bolus** (Standard: `Ein`):
* **Einheiten** (Standard: `mg/dl`): Falls auf **Ein** gestellt, werden `mg/dl` verwendet, bei **Aus** `mmol/l`. Wird beim Setzen eines temporären Ziels von der Uhr aus verwendet.

### Watchface-Einstellungen

* **Show Date** (default `Off`): note, date is not available on all watchfaces
* **Show IOB** (default `On`): Display or not IOB value (setting for detailed value is in AAPS wear parameters)
* **Show COB** (default `On`): Display or not COB value
* **Show Delta** (default `On`): Display or not the BG variation of the last 5 minutes
* **Show AvgDelta** (default `On`): Display or not the average BG variation of the last 15 minutes
* **Show Phone Battery** (default `On`): Phone battery in %. Rot, wenn unter 30%.
* **Show Rig Battery** (default `Off`): Rig battery is a synthesis of Phone battery, pump battery and sensor battery (generally the lowest of the 3 values)
* **Show Basal Rate** (default `On`): Display or not current basal rate (in U/h or in % if TBR)
* **Show Loop Status** (default `On`): show how many minutes since last loop run (arrows around value turn red if above 15').
* **Show BG** (default `On`): Display or not last BG value
* **Show Direction Arrow** (default `On`): Display or not BG trend arrow
* **Show Ago** (default `On`): show how many minutes since last reading.
* **Dark** (default `On`): You can switch from black background to white background (except for Cockpit and Steampunk watch face)
* **Highlight Basals** (default `Off`): Improve the visibility of basal rate and temp basals
* **Matching divider** (default `Off`): For AAPS, AAPSv2 and AAPS(Large) watchfaces, show contrast background for divider (**Off**) or match divider with the background color (**On**)
* **Chart Timeframe** (default `3 hours`): you can select in the sub menu the max time frame of your chart between 1 hour and 5 hours.

### Einstellungen für die Benutzeroberfläche

* **Input Design**: with this parameter, you can select the position of "+" and "-" buttons when you enter commands for AAPS (TT, Insulin, Carbs...)

![Input design options](../images/Watchface_InputDesign.png)

### Watchface-spezifische Parameter

#### Steampunk Watchface

* **Delta Granularity** (default `Medium`)

![Steampunk_gauge](../images/Watchface_Steampunk_Gauge.png)

#### Circle Watchface

* **Big Numbers** (default `Off`): Increase text size to improve visibility
* **Ring History** (default `Off`): View graphically BG history with gray rings inside the hour's green ring
* **Light Ring History** (default `On`): Ring history more discreet with a darker gray
* **Animations** (default `On`): When enabled, on supported by watch and not in power saving low-res mode, watchface circle will be animated

### Kommando-Einstellungen

* **Wizard in Menu** (default `On`): Allow wizard interface in main menu to input Carbs and set Bolus from watch
* **Prime in Menu** (default `Off`): Allow Prime / Fill action from watch
* **Single Target** (default `On`):
  
  * `On`: you set a single value for TT
  * `Off`: you set Low target and high target for TT

* **Wizard Percentage** (default `Off`): Allow bolus correction from wizard (value entered in percentage before confirmation notification)

## Fehlerbehebung der Smartwatch App:

* In Android Wear 2.0 installiert sich das Watchface nicht von alleine. Du musst in den Playstore der Uhr (unterscheidet sich vom Playstore des Smartphones!) gehen und unter der Kategorie “installierte Apps auf dem Handy” AAPS aktivieren. Aktiviere ebenfalls Auto Update. 
* Manchmal hilft es, Apps erneut mit der Uhr zu synchronisieren, da es manchmal ein bisschen langsam sein kann, bis der Sync automatisch erfolgt: Wear Os > Zahnrad-Symbol (ganz unten) > Name deiner Uhr > Apps erneut synchronisieren.
* Schalte ADB Debuggen in den Entwickleroptionen der Uhr ein, verbinde die Uhr via USB mit dem PC und starte die Wear App einmal in Android Studio.

## Nightscout Daten anzeigen

Falls du ein anderes System zum loopen verwendest und deine Daten oder die deines Kindes/Verwandten auf der Uhr *sehen* möchtest, kannst du auch einfach nur die Watch APK kompilieren. Wähle dazu in Android Studio die Build Variante “nsclient”. Gehe wie unter [AndroidAPS installieren - App erstellen](../Installing-AndroidAPS/Building-APK.md) beschrieben vor und wähle die Build Variante "NSClientRelease". Es gibt mehrere Ziffernblätter zur Auswahl, die das durchschnittliche Delta, IOB, die derzeit aktive TBR und Basalraten sowie die Kurve der CGM-Werte anzeigen können.

# Pebble

Pebble users can use the [Urchin watchface](https://github.com/mddub/urchin-cgm) to *view* looping data (if uploaded to Nightscout), but you will not be able to interact with AndroidAPS through the watch. Du kannst Felder wählen, um z. B. IOB, aktiver temp. Basalrate und Vorhersage anzeigen zu lassen. Falls du open loopst, kannst du [IFTTT](https://ifttt.com/) benutzen, um ein kleines Programm zu erstellen, welches (wenn eine Benachrichtigung von AndroidAPS kommt) eine SMS oder Benachrichtigung anzeigt.