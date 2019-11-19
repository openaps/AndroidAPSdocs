# Smartwatch-Integration

AndroidAPS kann mit einer Android Wear Smartwatch *gesteuert* werden. Wenn du Boli etc. von der Smartwatch aus abgeben willst, aktiviere "Steuerung durch die Uhr".

Die nachfolgenden Funktionen kannst Du von der Uhr aus starten:

* temporäres Ziel setzen
* Bolus abgeben
* administer eCarbs
* use the bolus calculator (calculation variables can be defined in [settings](../Configuration/Config-Builder#wear) on the phone)
* check the status of loop and pump
* show TDD (Total daily dose = bolus + basal per day)

Dafür musst du beim [Erstellen der APK](../Installing-AndroidAPS/Building-APK.md) die Build Variante "fullRelease" auswählen (alternativ erlaubt "pumpRelease" die Fernsteuerung der Pumpe ohne loopen). Im Konfigurations-Generator von AAPS musst du [Wear erlauben](../Configuration/Config-Builder#wear).

Es gibt mehrere Ziffernblätter zur Auswahl, die das durchschnittliche Delta, IOB, die derzeit aktive TBR und Basalraten sowie die Kurve der CGM-Werte anzeigen können.

![AndroidAPSv2 watchface](../images/AAPSv2_Watchface.png)

Stelle sicher, dass AndroidAPS die Erlaubnis hat, Benachrichtigungen auf der Uhr anzuzeigen. Die Eingaben werden aktiviert, indem man die Benachrichtigung auf der Uhr öffnet, einmal wischt und bestätigt.

Um schneller zu AndroidAPS zu kommen, kannst du den angezeigten CGM-Wert auf der Uhr doppelt anklicken. Klicke doppelt auf die BZ-Kurve um den Zeitraum zu ändern.

## Fehlerbehebung der Smartwatch App:

* In Android Wear 2.0 installiert sich das Watchface nicht von alleine. Du musst in den Playstore der Uhr (unterscheidet sich vom Playstore des Smartphones!) gehen und unter der Kategorie “installierte Apps auf dem Handy” AAPS aktivieren. Aktiviere ebenalls Auto Update. 
* Manchmal hilft es, Apps erneut mit der Uhr zu synchronisieren, da es manchmal ein bisschen langsam sein kann, bis der Sync automatisch erfolgt: Wear Os > Zahnrad-Symbol (ganz unten) > Name deiner Uhr > Apps erneut synchronisieren.
* Schalte ADB Debuggen in den Entwickleroptionen der Uhr ein, verbinde die Uhr via USB mit dem PC und starte die Wear App einmal in Android Studio.

## Legende AndroidAPSv2 watchface

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

## Einstellungen

There are different settings to modify and to choose from while using AndroidAPS on your smartwatch:

* Vibrate on Bolus (on | off)
* Units for Actions (mg/dl | mmol/l)
* Show Date (on | off)
* Show IOB (on | off)
* Show COB (on | off)
* Show Delta (on | off)
* Show AvgDelta (on | off)
* Show Phone Battery (on | off)
* Show Rig Battery (on | off)
* Show Basal Rate (on | off)
* Show Loop Status (on | off)
* Show BG (on | off)
* Show Direction Arrow (on | off)
* Show Ago (on | off)
* Dark (on | off)
* Highlight Basals (on | off)
* Chart Timeframe (1 | 2 | 3 | 4 | 5 hours)
* Input Design (Default | Quick righty | Quick lefty | Modern Sparse)
* Delta Granularity (Steampunk) (Low | Medium | High)
* Big Numbers (on | off)
* Ring History (on | off)
* Light Ring History (on | off)
* Animations (on | off)
* Wizard in Menu (on | off)
* Prime in Menu (on | off)
* Single Target (on | off)
* Wizard Percentage (on | off)

## View Nightscout data

If you are using another looping system and want to *view* your looping detail on an Android Wear watch, or want to watch your child's looping, then you can build/download just the NSClient APK. To do this follow the [build APK instructions](../Installing-AndroidAPS/Building-APK.md) selecting the build variant "NSClientRelease". Es gibt mehrere Ziffernblätter zur Auswahl, die das durchschnittliche Delta, IOB, die derzeit aktive TBR und Basalraten sowie die Kurve der CGM-Werte anzeigen können.

## Pebble

Pebble users can use the [Urchin watchface](https://github.com/mddub/urchin-cgm) to *view* looping data (if uploaded to nightscout), but you will not be able to interact with AndroidAPS through the watch. You can choose fields to display such as IOB and currently active temp basal rate and predictions. If open looping you can use [IFTTT](https://ifttt.com/) to create an applet that says if Notification received from AndroidAPS then send either SMS or pushover notification.