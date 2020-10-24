# Mit der Pumpe über Zeitzonen hinweg reisen

## DanaR, koreanische DanaR

Es gibt keine Probleme beim Zeitzonenwechsel im Smartphone, da die Pumpe keine Historie verwendet

## DanaRv2, DanaRS

Diese Pumpen benötigen besondere Aufmerksamkeit, weil AndroidAPS die Historie der Pumpe verwendet, die Einträge in der Pumpe aber keine Zeitangaben beinhalten. **Das bedeutet, dass ein einfacher Zeitzonenwechsel im Smartphone dazu führt, dass Einträge mit verschiedenen Zeitzonen ausgelesen und doppelt angezeigt werden.**

Um dies zu vermeiden, gibt es zwei Möglichkeiten:

### Option 1: Heimatzeit beibehalten und Time Shift des Profils

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

### Option 2: Pumpenhistorie löschen

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

AndroidAPS wird Dich alarmieren, wenn die Zeit zwischen Pumpe und Smartphone zu sehr abweicht. Bei der Zeitumstellung wäre dies unerfreulicher Weise mitten in der Nacht. Um dies zu verhindern und stattdessen den Schlaf zu genießen, folge diesen Schritten, so dass Du die Zeitumstellung zu einer Zeit erzwingen kannst, die Dir passt.

### Vor der Zeitumstellung notwendige Maßnahmen

1. Schalten alle Einstellungen AUS, die die Zeitzone automatisch festlegen, so dass Du die Zeitumstellung durchführen kannst, wann Du es möchtest. Die Vorgehensweise hängt von Deinem Smartphone und der Android-Version ab.
   
   * Manche haben zwei Einstellungen, eine für die automatische Zeiteinstellung (die idealerweise AN bleiben sollte) und eine für den automatischen Zeitzonenwechsel (die Du AUSSCHALTEN musst).
   * Unglücklicherweise haben manche Android-Versionen nur eine Einstellmöglichkeit für beides zusammen. In diesem Fall musst Du eben beide ausschalten.

2. Suche Dir eine Zeitzone, die die selbe Uhrzeit wie Du hat, aber nicht zwischen Winter- und Sommerzeit wechselt.
   
   * Eine Liste dieser Länder findest Du z.B. auf [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/).
   * Für die Mitteleuropäische Zeit (MEZ) könnte dies z.B. "Brazzaville" (Kongo) sein. Stelle die Zeitzone deines Smartphones manuell auf Kongo.

3. Aktualisiere die Pumpe via AndroidAPS.

4. Prüfe den Tab "Behandlungen". Falls Du doppelte Einträge entdecken solltest:
   
   * Klicke NICHT auf "lösche alle Behandlungen in der Zukunft". 
   * Drücke "Löschen" bei allen künftigen und doppelten Behandlungen. Dadurch werden die Behandlungen außer Kraft gesetzt statt nur gelöscht und somit nicht mehr beim IOB berücksichtigt.

5. Wenn die Situation von COB und/oder IOB unklar ist, pausiere den Loop zu Deiner eigenen Sicherheit bitte mindestens für den Zeitraum des DIA oder die Max-Carb-Time - und wähle den größeren der beiden.

### Nach der Zeitumstellung notwendige Maßnahmen

Ein guter Zeitpunkt für diese Umstellung ist bei niedrigem IOB Z.B. eine Stunde vor einer Mahlzeit wie dem Frühstück, denn dann werden alle kürzlich abgegebenen Boli in Deiner Pumpenhistorie kleine SMB Korrekturen sein. Dein COB und IOB sollten beide nahe null sein.

1. Wechsle die Zeitzone in Deinem Smartphone zurück auf Deine eigene Zeitzone und aktiviere die oben deaktivierte Automatik zur Zeitzoneneinstellung wieder.
2. AndroidAPS wird Dich kurz danach alarmieren, dass die Uhrzeit in der Combo nicht passt. Passe die Uhrzeit manuell auf der Pumpe an.
3. Klicke im Combo Tab von AndroidAPS auf 'Aktualisieren'. 
4. Prüfe dann auf dem Behandlungs-Tab, ob es Ereignisse in der Zukunft gibt. Es sollte eigentlich keine geben. Falls doch:
   
   * Klicke NICHT auf "lösche alle Behandlungen in der Zukunft". 
   * Drücke "Löschen" bei allen künftigen und doppelten Behandlungen. Dadurch werden die Behandlungen außer Kraft gesetzt statt nur gelöscht und somit nicht mehr beim IOB berücksichtigt.

5. Wenn die Situation von COB und/oder IOB unklar ist, pausiere den Loop zu Deiner eigenen Sicherheit bitte mindestens für den Zeitraum des DIA oder die Max-Carb-Time - und wähle den größeren der beiden.

6. Mache weiter wie gewohnt.

## Accu-Chek Insight

* Zeitumstellung erfolgt automatisch. Keine Maßnahme erforderlich.

## Other pumps

* This feature is available since AndroidAPS version 2.2.
* To prevent difficulties the Loop will be deactivated for 3 hours AFTER the DST switch. This is done for safety reasons (IOB too high due to duplicated bolus prior to DST change).
* You will receive a notification on the main screen prior to DST change that loop will be disabled temporarily. This message will appear without beep, vibration or anything.