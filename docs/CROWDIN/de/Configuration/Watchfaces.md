# AAPS auf einer Smartwatch mit Wear OS

Du kannst AndroidAPS auf Deiner Smartwatch mit **Wear OS** installieren. Mit der Watch-Version von AAPS kannst Du:

* **Daten auf Deiner Uhr anzeigen**: nutze dafür ein [Custom Watchface](#aaps-watchfaces) oder stattdessen ein Standard-Watchface mit [Komplikationen](#komplikationen).
* **AAPS steuern**: Bolus abgeben, temporäres Ziel setzen, etc. 

### Bevor Du Dir eine Uhr kaufst...

* Manche Funktionen wie *Komplikationen* erfordern Wear OS Version 2.0 oder höher.
* Google hat *Android Wear 1.x* ab Version 2.0 in *Wear OS* umbenannt. Wenn die Uhr also mit *Android Wear* angepriesen wird, kann das auf eine ältere Version 1.x hinweisen.
* Wenn die Smartwatch nur als mit *Android* und *iOS* kompatibel beschrieben wird, **bedeutet dies nicht**, dass sie *Wear OS* nutzt. Es kann sich auch um ein herstellerspezifisches Betriebssystem handeln, das **nicht mit AAPS Wear kompatibel ist!**
* Prüfe die [Liste der getesteten Smartphones und Smartwatches](../Getting-Started/Phones#liste-der-getesteten-smartphones) und [frage in der Community](../Where-To-Go-For-Help/Connect-with-other-users.md), falls Du Zweifel hast, ob die von Dir gewünschte Uhr unterstützt wird.

### Wear OS Version von AAPS erstellen

Wähle beim [Erstellen von AAPS](../Installing-AndroidAPS/Building-APK.md) build variant "fullRelease" (oder "pumpRelease" falls Du die Pumpe nur steuern, aber keinen Closed Loop betreiben willst).

Stelle sicher, dass sowohl beide Versionen von AAPS (Smartphone und Smartwatch) mit den gleichen Keys signiert sind!

Um die APK auf einer Android Wear Smartwatch zu installieren, folge den folgenden Schritten:

1. Aktiviere den Entwicklermodus auf der Uhr. Drücke einen Button der Uhr und klicke `Einstellungen (settings)`, dann `System`, dann `Über (about)` und klicke mind. 7 Mal auf die `build number` bis Du die Bestätigung erhältst, dass Du Entwickler bist.
2. Aktiviere ADB auf der Uhr. Drücke einen Button der Uhr und klicke `Einstellungen (settings)`, dann `Entwickler-Optionen (developer options)`, dann `adb debugging` und `debug over wifi`. Notiere Dir die IP-Adresse, die Dir angezeigt wird. Es handelt sich um die klassische Form einer IP-Adresse gefolgt von :5555.
3. Notiere Dir am PC den Speicherort der `wear-full-release.apk` (befindet sich im gleichen Ordner wie die `app-full-release.apk`, die Du auf Deinem Smartphone installiert hast).
4. Öffne am PC die Eingabeaufforderung (tippe `command` in das Suchfeld). 
5. Gib in der Eingabeaufforderung folgendes ein: `cd c:\Program Files (x86)\Android\android-sdk\platform-tools`.
6. Gib in der Eingabeaufforderung folgendes ein: `adb connect [Gib hier die IP-Adresse aus Schritt 2 mit :5555 ein.]`.
7. Gib in der Eingabeaufforderung folgendes ein: `adb install -r [Gib hier den Pfad aus Schritt 3 ein.]\wear-full-release.apk`.
8. Dadurch wird AAPS auf der Uhr installiert und das AAPS Watchface kann ausgewählt werden.

Wenn Du AAPS auf der Smartwatch verwendest, müssen die AAPS Versionen auf Uhr und Smartphone die gleichen sein. Führe ein Update immer auf beiden gleichzeitig aus. Dazu musst Du die Schritte oben nochmals durchführen, musst aber den Entwicklermodus nicht nochmals aktivieren.

### Einrichten auf dem Smartphone

In AndroidAPS auf Deinem Smartphone musst Du im Konfigurations-Generator das [Wear Plugin](../Configuration/Config-Builder#wear) aktivieren.

## AAPS von der Uhr aus steuern

AndroidAPS kann mit einer Android Wear Smartwatch *gesteuert* werden. Wenn Du Deinen Loop von der Uhr aus steuern willst (z.B. Bolus abgeben), aktiviere "Steuerung durch die Uhr".

Die nachfolgenden Funktionen kannst Du von der Uhr aus starten:

* temporäres Ziel setzen
* Bolusrechner verwenden (Welche Variablen bei der Berechnung berücksichtigt werden, lässt sich in den [Einstellungen](../Configuration/Config-Builder#wear) auf dem Smartphone festlegen.)
* eCarbs eintragen
* Bolus (Insulin + Kohlenhydrate) abgeben
* Uhreinstellungen
* status 
    * pumpenstatus überprüfen
    * Pumpenstatus überprüfen
    * Profil prüfen und ändern, CPP (Circadian Percentage Profile = Zeitverschiebung + Prozentsatz)
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

## Komplikationen

*Komplikation* ist ein Begriff aus der traditionellen Uhrmacherei und beschreibt Zusätze zur eigentlichen Zeitanzeige - als ein weiteres kleines Fenster o.ä. um Datum, Wochentag, Mondphase, etc. anzuzeigen. Mit Wear OS 2.0 können solche Zusatzinformationen (Wetter, Benachrichtigungen, Fitness Tracker etc.) zu jedem Watchface hinzugefügt werden, das Komplikationen unterstützt.

Die AndroidAPS Wear OS App unterstützt Komplikationen ab Build `2.6` und erlaubt damit jedem beliebigen Watchface, das Komplikationen unterstützt, die Anzeige von AAPS Daten wie BZ mit Trendpfeil, IOB, COB etc.

Dabei können die Komplikationen auch als **Shortcut** zu AAPS Funktionen genutzt werden. Durch antippen der AAPS-Komplikation kannst Du - abhängig vom Komplikations-Typ und den Einstellungen - AAPS-spezifische Menüs und Dialoge aufrufen.

![Komplikation im Watchface](../images/Watchface_Complications_On_Watchfaces.png)

### Komplikationstypen

Die AAPS Wear OS App liefert nur Rohdaten in entsprechend vordefinierten Formaten. Die Drittanbietern der Watchfaces legen fest, wo und wie Komplikationen - einschließlich des Layouts, Rahmen, Farben und Schriftarten - wiedergegeben werden sollen. Von den vielen zur Verfügung stehenden Wear-OS-Komplikations-Typen verwendet AAPS:

* `SHORT TEXT` - Enthält zwei Textzeilen mit jeweils 7 Zeichen, die manchmal als Wert und Beschriftung bezeichnet werden. Diese werden in der Regel in einem Kreis oder einer "Pill" unter- oder nebeneinander angezeigt. Es handelt sich um eine Komplikation mit sehr begrenztem Platz. AAPS versucht, unnötige Zeichen zu entfernen und rundet Werte, entfernt führende oder abschließende Nullen etc.
* `LONG TEXT` - Enthält zwei Textzeilen, jeweils ca. 20 Zeichen. Normalerweise werden diese in einem Rechteck oder einer "long pill" untereinander dargestellt. Er wird für weitere Details und den Statusangaben in Textform verwendet.
* `RANGED VALUE` - für Werte aus einem vordefinierten Bereich, z.B. Prozentsätze. Beinhaltet ein Icon, eine Beschriftung und wird meist als Kreis-Fortschritts-Diagramm angezeigt.
* `LARGE IMAGE` - Benutzerdefiniertes Hintergrundbild, das verwendet werden kann, wenn es vom Watchface unterstützt wird.

### Konfiguration der Komplikation

Um eine Komplikation zu einem Watchface hinzuzufügen, konfiguriere es durch langes Drücken auf die Komplikation und anschließendem Klicken auf das Zahnrad-Symbol. Je nach dem wie das einzelne Watchface die Komplikationen behandelt musst Du entweder auf die Platzhalter klicken oder das Setup für Komplikationen des Watchfaces aufrufen. AAPS-Komplikationen werden unter dem AAPS-Menü-Eintrag gruppiert.

Bei der Konfiguration von Komplikationen passt Wear OS die Auswahl an und führt nur die Komplikationen auf, die an der gewünschten Stelle angezeigt werden können. Wenn Du also eine bestimmte Komplikation nicht in der Liste findest, passt sie wahrscheinlich nicht an den gewünschten Platz innerhalb des Watchfaces.

### AAPS-Komplikationen

AndroidAPS stellt folgende Komplikationen zur Verfügung:

![AAPS_Complications_List](../images/Watchface_Complications_List.png)

* **BR, CoB & IoB** (`SHORT TEXT`, öffnet das *Menü*): Zeigt die *Basalrate* in der ersten Zeile sowie *Carbs on Board* und *Insulin on Board* in der zweiten Zeile.
* **Blood Glucose** (`SHORT TEXT`, öffnet das *Menü*): Zeigt den *BZ-Wert* und *Trendpfeil * in der ersten Zeile und *das Alter des Werts* sowie das *BZ Delta* in der zweiten Zeile.
* **CoB & IoB** (`SHORT TEXT`, öffnet das *Menü*): Zeigt *Carbs on Board* in der ersten Zeile und *Insulin on Board* in der zweiten Zeile an.
* **COB Detailed** (`SHORT TEXT`, öffnet den *Bolusassistenten*): Zeigt die aktuell aktiven *Carbs on Board* in der ersten und geplante eCarbs in der zweiten Zeile an.
* **CoB Icon** (`SHORT TEXT`, öffnet den *Bolus-Assistenten*): Zeigt *Carbs on Board* mit einem statischen Icon an.
* **Full Status** (`LONG TEXT`, öffnet das *Menü*): Zeigt den Großteil der Daten auf einmal an: *BZ-Wert* und *Trendpfeil*, *BZ Delta* und *Alter des Werts* in der ersten Zeile. In der zweiten Zeile: *Carbs on Board*, *Insulin on Board* und die *Basalrate*.
* **Full Status (flipped)** (`LONG TEXT`, öffnet das *Menü*): Die gleichen Daten wie beim Standard *Full Status*, aber die Zeilen sind vertauscht. Kann z.B. in Watchfaces verwendet werden, die eine der beiden Zeilen in `LONG TEXT` ignorieren.
* **IoB Detailed** (`SHORT TEXT`, öffnet *Bolus*): Zeigt das gesamte *Insulin on Board* in der ersten Zeile und in der zweiten Zeile aufgeteilt nach *Bolus* und *Basal*.
* **IoB Icon** (`SHORT TEXT`, öffnet *Bolus*): Zeigt *Insulin on Board* mit einem statischen Icon.
* **Uploader/Phone Battery** (`RANGED VALUE`, öffnet den *Status*): Zeigt den Akkuladestand des AAPS Smartphones (uploader). Wird als prozentualer Wert mit einem Akkusymbol angezeigt, das den gemeldeten Wert widerspiegelt. Wird ggf. nicht sofort aktualisiert, aber spätestens wenn sich andere wichtige AAPS-Daten ändern (normalerweise alle ~5 Minuten mit neuen *CGM-Daten*).

Darüber hinaus gibt es drei Komplikationen vom Typ `LARGE IMAGE` Art: **Dark Wallpaper**, **Gray Wallpaper** und **Light Wallpaper**, mit statischem AAPS Hintergrundbild.

### Einstellungen zu den Komplikationen

* **Complication Tap Action** (Standard-Einstellung: `Default`): Legt fest, welcher Dialog nach Tippen der Komplikation geöffnet wird: 
    * *Default*: Abhängig vom Komplikations-Typ *(siehe Liste oben)*
    * *Menu*: AAPS Hauptmenü
    * *Wizard*: Bolus Assistent
    * *Bolus*: direkte Boluseingabe
    * *eCarb*: eCarb Dialog
    * *Status*: Status-Menü
    * *None*: Deaktiviert den Menüaufruf bei Tippen der Komplikation
* **Unicode in Complications** (Standard: `On`): Wenn `On` gewählt ist, nutzt die Komplikation Unicode Zeichen für Symbole wie `Δ` Delta, `⁞` vertikaler Punkttrenner oder `⎍` Basalraten-Symbol. Die Anzeige hängt von der Schriftart ab und kann sich je nach Watchface unterscheiden. Mit dieser Option können die Unicode-Zeichen bei Bedarf ausgeschaltet werden (`Off`), wenn der Font des Watchfaces diese Zeichen nicht unterstützt. Anzeigefehler können so vermieden werden.

## Tipps zur Performance und zur Akku-Laufzeit

Wear OS Uhren sind in der Leistung deutlich eingeschränkt. Durch die Größe des Uhrengehäuses wird die Kapazität des enthaltenen Akkus begrenzt. Trotz der neuesten Entwicklungen sowohl auf der Hardware- als auch auf der Software-Seite, müssen Wear OS Uhren immer noch tägliche geladen werden.

Falls die Akkulaufzeit unter einen Tag (vom Aufstehen bis zur Nachtruhe) sinkt, kannst Du folgende Tipps ausprobieren, um das Problem zu beseitigen.

Der Akku wird vor allem durch diese Komponenten belastet:

* Aktives Display mit aktivierter Hintergrundbeleuchtung (für LED) oder im Vollintensitätsmodus (für OLED)
* Wiedergabe / Darstellung auf dem Display der Uhr
* Bluetooth-Kommunikation

Da wir bei der Kommunikation keine Kompromisse eingehen können (wir brauchen aktuelle Daten) und die aktuellsten Daten dargestellt werden sollen, bietet die *Anzeigedauer* die meisten Optimierungspotentiale:

* Watchfaces des Herstellers sind meist deutlich besser optimiert als custom watchfaces.
* Es ist besser, Watchfaces zu nutzen, die die Menge der angezeigten Daten im gedimmten / inaktiven Modus reduzieren.
* Sei vorsichtig, wenn Du zusätzlich weitere Komplikationen, die externe Daten nutzen (z.B. Wetterdaten), verwendest.
* Beginne mit einem einfachen Watchface. Füge immer nur eine Komplikation hinzu und beobachte, wie sich diese auf die Akku-Laufzeit auswirkt.
* Nutze das **Dark Theme** des AAPS Watchfaces und den [**Matching divider**](#watchface-einstellungen). Auf OLED-Geräten wird die Anzahl der Pixel, die beleuchtet werden, begrenzt und der Burnout begrenzt.
* Prüfe, was auf Deiner Uhr besser funktioniert: Das Standard AAPS Watchface oder ein anderes Watchface mit Komplikationen.
* Beobachte über mehrere Tage mit verschiedenen Aktivitätsprofilen. Die meisten Uhren aktivieren die Anzeige beim Draufschauen, bei Bewegung und anderen nutzungsbezogenen Auslösern.
* Überprüfe die globalen Systemeinstellungen, die sich auf die Leistung auswirken: Benachrichtigungen, das Zeitlimit für eine Hintergrundanzeige oder das aktive Anzeigezeitlimit, wenn Ortungsdienste aktiviert sind.
* Prüfe die [Liste der getesteten Smartphones und Smartwacthes](../Getting-Started/Phones#liste-der-getesteten-smartphones) und [frage in der Community](../Where-To-Go-For-Help/Connect-with-other-users.md) nach den Erfahrungen und Akku-Laufzeiten anderer Nutzer.
* **Es kann nicht garantiert werden, dass die auf dem Watchface angezeigten Daten aktuell sind!** Am Ende entscheidet Wear OS, wann ein Watchface oder eine Komplikation neue Daten erhält. Selbst wenn die AAPS-App die Aktualisierung anstößt, kann das System die Aktualisierung verschieben oder ignorieren, um die Akku-Laufzeit zu erhöhen. Im Zweifel und vor allem bei niedrigem Akku-Ladestand der Uhr solltest Du die Werte immer mit einem Blick auf AAPS auf Deinem Smartphone gegenprüfen.

## Fehlerbehebung der Smartwatch App:

* In Android Wear 2.0 installiert sich das Watchface nicht von alleine. Du musst in den Playstore der Uhr (unterscheidet sich vom Playstore des Smartphones!) gehen und unter der Kategorie “installierte Apps auf dem Handy” AAPS aktivieren. Aktiviere ebenfalls Auto Update. 
* Manchmal hilft es, Apps erneut mit der Uhr zu synchronisieren, da es manchmal ein bisschen langsam sein kann, bis der Sync automatisch erfolgt: Wear Os > Zahnrad-Symbol (ganz unten) > Name deiner Uhr > Apps erneut synchronisieren.
* Schalte ADB Debuggen in den Entwickleroptionen der Uhr ein, verbinde die Uhr via USB mit dem PC und starte die Wear App einmal in Android Studio.
* Wenn die Daten in Komplikationen nicht aktualisiert werden, prüfe zuerst, ob AAPS-Watchfaces überhaupt funktionieren.

### Sony Smartwatch 3

* Die Sony Smartwach 3 ist eine der beliebtesten Uhren zu Verwendung mit AAPS. 
* Leider hat Google die Unterstützung für Wear OS 1.5 Geräte im Herbst 2020 eingestellt. Dies führt zu Problemen bei der Verwendung von Sony SW3 mit AndroidAPS 2.7 und höher.
* Einen Workaround findest Du auf der Seite zur [Problembehandlung](../Usage/SonySW3.rst).

## Nightscout Daten anzeigen

Falls du ein anderes System zum loopen verwendest und deine Daten oder die deines Kindes/Verwandten auf der Uhr *sehen* möchtest, kannst du auch einfach nur die Watch APK kompilieren. Wähle dazu in Android Studio die Build Variante “nsclient”. Gehe wie unter [AndroidAPS installieren - App erstellen](../Installing-AndroidAPS/Building-APK.md) beschrieben vor und wähle die Build Variante "NSClientRelease". Es gibt mehrere Ziffernblätter zur Auswahl, die das durchschnittliche Delta, IOB, die derzeit aktive TBR und Basalraten sowie die Kurve der CGM-Werte anzeigen können.

# Pebble

Pebble Nutzer können das [Urchin watchface](https://github.com/mddub/urchin-cgm) nutzen um ihre Loop-Daten zu *sehen*. Mit dieser Methode ist es aber nicht möglich, die Pumpe und AndroidAPS zu steuern. Du kannst Felder wählen, um z. B. IOB, aktiver temp. Basalrate und Vorhersage anzeigen zu lassen. Falls du open loopst, kannst du [IFTTT](https://ifttt.com/) benutzen, um ein kleines Programm zu erstellen, welches (wenn eine Benachrichtigung von AndroidAPS kommt) eine SMS oder Benachrichtigung anzeigt.