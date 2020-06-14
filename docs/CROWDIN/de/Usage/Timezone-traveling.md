# Mit der Pumpe über Zeitzonen hinweg reisen

## DanaR, koreanische DanaR

Es gibt keine Probleme beim Zeitzonenwechsel im Smartphone, da die Pumpe keine Historie verwendet

## DanaRv2, DanaRS

Diese Pumpen benötigen besondere Aufmerksamkeit, weil AndroidAPS die Historie der Pumpe verwendet, die Einträge in der Pumpe aber keine Zeitangaben beinhalten. **Das bedeutet, dass ein einfacher Zeitzonenwechsel im Smartphone dazu führt, dass Einträge mit verschiedenen Zeitzonen ausgelesen und doppelt angezeigt werden.**

Um dies zu vermeiden, gibt es zwei Möglichkeiten:

### Option 1: Heimazteit beibehalten und Time Shift des Profils

* Schalte die automatische Einstellung von Datum und Uhrzeit in Deinem Smartphone aus (manueller Zeitzonen-Wechsel).
* Dein Smartphone muss für die gesamte Reise auf Datum und Zeit Deines Heimatortes eingestellt bleiben.
* Führe einen Profilwechsel mit Zeitverschiebung entsprechend dem Zeitunterschied Deines Heimatortes zum Zielort durch.
   
   * Drücke lang auf den Profilnamen (oben in der Mitte auf dem Startbildschirm).
   * Wähle 'Profilwechsel'.
   * Stelle die 'Zeitverschiebung' entsprechend Deines Zielortes ein.
   
   ![Profilwechsel mit Zeitverschiebung](../images/ProfileSwitchTimeShift2.png)
   
   * z.B. Wien -> New York: Profilwechsel +6 Stunden
   * z.B. Wien -> Sydney: Profilwechsel -8 Stunden
* Wahrscheinlich keine Option, wenn Du die [gepatchte LibreLink-App](../Hardware/Libre2#reisen-uber-zeitzonen-hinweg) nutzt. Dort muss der automatische Zeitzonenwechsel eingestellt werden, um einen neuen Libre 2 Sensor starten zu können.

### Option : Pumpenhistorie löschen

* Schalte die automatische Einstellung von Datum und Uhrzeit in Deinem Smartphone aus (manueller Zeitzonen-Wechsel)

Wenn du aus dem Flugzeug steigst:

* schalte die Pumpe aus
* ändere die Zeitzone auf dem Smartphone
* schalte das Smartphone aus, schalte die Pumpe an
* lösche die Historie der Pumpe
* ändere die Zeit in der Pumpe
* schalte das Smartphone an
* lasse das Smartphone mit der Pumpe verbinden und verfeinere die Zeiteinstellung

## Insight

Der Treiber passt die Uhrzeit in der Pumpe automatisch an die Zeit im Smartphone an.

Die Insight dokumentiert auch die historischen Einträge, in denen die Zeit geändert wurde und von welcher (alten) Zeit zu welcher (neuen) Zeit. So kann die richtige Zeit in AAPS trotz der Zeitänderung bestimmt werden.

Es kann zu Ungenauigkeiten in den TDDs führen. Aber es sollte kein Problem sein.

Der Insight-Nutzer muss sich also nicht um Zeitumstellung oder den Wechsel von Zeitzonen kümmern. Es gibt eine Ausnahme zu dieser Regel: Die Insight Pumpe hat eine kleine interne Batterie, um die Zeit immer aktuell zu halten etc. während Du die "normale" Batterie wechselst. Wenn der Batteriewechsel zu lange dauert, kann diese interne Batterie leer werden, die Uhr wird zurückgesetzt und Du wirst gebeten, Zeit und Datum nach dem Einlegen der neuen Batterie neu einzugeben. In diesem Fall werden alle Einträge vor dem Batteriewechsel in der Berechnung in AAPS übersprungen, da die richtige Zeit nicht korrekt erkannt werden kann.

# Zeitumstellung (Sommer-/Winterzeit)

Je nach Pumpe und CGM können Zeitsprünge zu Problemen führen. Bei der Combo wird z.B. die Pumpenhistorie neu gelesen und doppelte Einträge werden erstellt. Nimm daher bitte die folgenden Anpassungen tagsüber vor.

Nutze den Bolus-Kalkulator erst dann wieder, wenn Du sicher bist, dass COB und IOB absolut korrekt sind. Wahrscheinlich ist es besser, diese für ein paar Stunden nach der Zeitumstellung nicht zu nutzen.

## Accu-Chek Combo

AndroidAPS wird Dich alarmieren, wenn die Zeit zwischen Pumpe und Smartphone zu sehr abweicht. Bei der Zeitumstellung wäre dies unerfreulicherweise mitten in der Nacht. Um diese nächtliche Alarmierung zu vermeiden und statt dessen durchzuschlafen, solltest Du wie folgt vorgehen:

1. Schalte den automatischen Wechsel der Zeitzone in deinem Smartphone aus. 2) Wähle eine Zeitzone mit der gewünschten Zeit aber ohne Zeitumstellung. Für die Mitteleuropäische Zeit (MEZ) könnte dies z.B. "Brazzaville" (Kongo) sein. Stelle die Zeitzone deines Smartphones manuell auf Kongo. 3. Aktuallisiere die Pumpe via AndroidAPS. 4. Prüfe den Behandlungs Tab (BEH)... Falls Du doppelte Einträge entdeckst:

* KEINESFALLS auf "Lösche Behandlungen in der Zukunft" klicken!
* Drücke "Löschen" bei allen künftigen und doppelten Behandlungen. Dadurch werden die Behandlungen außer Kraft gesetzt statt nur gelöscht und somit nicht mehr beim IOB berücksichtigt. 5. Falls der Status unklar sein sollte: Pausiere den Loop für mindestens eine DIA (Insulin-Wirkdauer) oder Max-Carb-Time - je nach dem welche Zeitdauer größer ist.

Ein guter Zeitpunkt für diese Umstellung ist bei niedrigem IOB (z.B. eine Stunde vor dem Essen).

## Accu-Chek Insight

* Zeitumstellung erfolgt automatisch. Keine Maßnahme erforderlich.

## Andere Pumpen - neu ab AAPS Version 2.2

**Du musst AAPS auf Version 2.2 (oder höher) updaten, um diese Funktion nutzen zu können!**

* Um Schwierigkeiten zu vermeiden, wird der Loop für 3 Stunden nach der Zeitumstellung deaktiviert. Dies geschieht aus Sicherheitsgründen (IOB zu hoch aufgrund von doppeltem Boluseinträgen vor der Zeitumstellung).
* Du erhälst 24 Stunden vor der Zeitumstellung einen Hinweis auf dem Startbildschirm, dass der Loop vorübergehend pausiert wird. Diese Nachricht erscheint ohne Ton, Vibration oder anderes.