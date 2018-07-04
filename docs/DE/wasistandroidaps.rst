Was ist AndroidAPS?
============


Ziele
---------------

Die Ziele, die zur Entstehung führten:

- App mit „modularer Basis“, es soll leicht sein, neue Module hinzuzufügen
- Eine App, bei der es bei der Erstellung möglich ist zu entscheiden, welche Funktionen die App später hat (Wear Control, NsClient)
- Eine App, die es ermöglicht, einen Open- oder Closed-Loop-Modus zu wählen
- Eine App, die die Funktionen eines APS visualisiert (Parameter, Ergebnis und Umsetzung)
- Die Möglichkeit, andere Algorithmen zu verwenden
- Eine „Virtuelle Pumpe“, mit der man „herumspielen“ kann, bevor man startet
- Eine App mit enger Nightscout-Integration
- Die Möglichkeit zum Hinzufügen/Entfernen von Beschränkungen
- Eine App, die alles enthält, um mit dem Diabetes klar zu kommen (APS+Nightscout)

Was man benötigt
------------

- Android Smartphone (5.0 oder neuer)
- xDrip/xDrip+, oder Glimp, oder 600SeriesAndroidUploader
- AndroidAPS
- Nightscout 0.10.0, oder aktueller
- DanaR / DanaRS / Akku Chek Combo Insulinpumpe (in Zukunft auch die Insight)
- Ein CGM (Dexcom G4/G5/G6, Freestyle Libre, Eversense oder Medtronic Guardian)

Glossar
------------
Für das meiste "Looper Vokabular" gehe zu: https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html

Einige AndroidAPS-spezifische Bezeichnungen:

* Circadian Percentage Profil: ändert dein Basisprofil anhand der eingestellten Zeit oder prozentual.
* Dev (im Homescreen): Deviation (= Abweichung), zeigt an um wie viele Einheiten sich der tatsächliche Anstieg/Senkung des BZ, gegenüber des vorhergesagten Wertes (durch OpenAPS und eingegebener Daten) unterscheidet.

Screenshots
-------------
Bitte übersetzen von https://androidaps.readthedocs.io/en/latest/Getting-Started/Screenshots.html


Sicherheitshinweise
-------------
* AndroidAPS ist nur ein Programm zur Unterstützung deiner Diabetestherapie, nicht um den Diabetes zu vergessen!
* Vertraue niemals blind auf ein Gerät bei der Anpassung der Dosierung. Kontrolliere die Ergebnisse und verstehe, wie der Algorithmus auf diese kommt.
* Dein Smartphone, welches die Pumpe kontrolliert, sollte ausschließlich für diese Aufgabe verwendet werden, installiere keine Apps, um die Gefahr von Trojanern zu minimieren.
* Installiere regelmäßig alle Sicherheitsupdates, damit du vor Angriffen bestmöglich geschützt bist!

SMS-Steuerung:

* Wenn du diese Option verwendest, behalte im Hinterkopf, was passieren könnte, falls das Handy, welches zur Fernsteuerung verwendet wird, gestohlen wird. Schütze dieses mit einem sicheren Code.
* Seit AndroidAPS 1.1 wirst du über wichtige ferngesteuerte Aktionen (z.B. Bolus, Profiländerung) eine SMS erhalten. Deswegen solltest du mindestens 2 Telefonnummern hinzufügen (für den Fall, dass ein Handy gestohlen wird).
