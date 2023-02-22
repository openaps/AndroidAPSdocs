# Mit der Pumpe über Zeitzonen hinweg reisen

## DanaR, koreanische DanaR

Es gibt keine Probleme beim Zeitzonenwechsel im Smartphone, da die Pumpe keine Historie verwendet

(Timezone-traveling-danarv2-danars)=

## DanaRv2, DanaRS

These pumps need a special care because AndroidAPS is using history from the pump but the records in pump don't have timezone stamp. **That means if you simple change timezone in phone, records will be read with different timezone and will be doubled.**

To avoid this there are two possibilities:

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
* Probably not an option if using [patched LibreLink app](Libre2-time-zone-travelling) as automatic time zone must be set to start a new Libre 2 sensor.

### Option 2: Pumpenhistorie löschen

* Schalte die automatische Einstellung von Datum und Uhrzeit in Deinem Smartphone aus (manueller Zeitzonen-Wechsel)

When get out of plane:

* schalte die Pumpe aus
* ändere die Zeitzone auf dem Smartphone
* schalte das Smartphone aus, schalte die Pumpe an
* lösche die Historie der Pumpe
* ändere die Zeit in der Pumpe
* schalte das Smartphone an
* lasse das Smartphone mit der Pumpe verbinden und verfeinere die Zeiteinstellung

(Timezone-traveling-insight)=

## Insight

The driver automatically adjusts the time of the pump to the time of the phone.

The Insight also records the history entries in which moment time was changed and from which (old) time to which (new) time. So the correct time can be determined in AAPS despite the time change.

It may cause inaccuracies in the TDDs. But it shouldn't be a problem.

So the Insight user doesn't have to worry about timezone changes and time changes. There is one exception to this rule: The Insight pump has a small internal battery to power time etc. while you are changing the "real" battery. If changing battery takes to long this internal battery runs out of energy, the clock is reset and you are asked to enter time and date after inserting a new battery. In this case all entries prior to the battery change are skipped in calculation in AAPS as the correct time cannot be identified properly.

## Accu-Chek Combo

The [new Combo driver](../Configuration/Accu-Chek-Combo-Pump-v2.md) automatically adjusts the time of the pump to the time of the phone. The Combo cannot store timezones, only local time, which is precisely what the new driver programs into the pump. In addition, it stores the timezone in the local AndroidAPS preferences to be able to convert the pump's localtime to a full timestamp that has a timezone offset. The user does not have to do anything; if the time on the Combo deviates too much from the phone's current time, the pump's time is automatically adjusted.

Note that this takes some time, however, since it can only be done in the remote-terminal mode, which is generally slow. This is a Combo limitation that cannot be overcome.

The old, Ruffy-based driver does not adjust the time automatically. The user has to do that manually. See below for the steps necessary to do that safely in case the timezone / daylight savings is the reason for the change.

(Timezone-traveling-time-adjustment-daylight-savings-time-dst)=

# Zeitumstellung (Sommer-/Winterzeit)

Depending on pump and CGM setup, jumps in time can lead to problems. With the Combo e.g. the pump history gets read again and it would lead to duplicate entries. So please do the adjustment while awake and not during the night.

If you bolus with the calculator please don't use COB and IOB unless you made sure they are absolutely correct - better don't use them for a couple of hours after DST switch.

(Timezone-traveling-accu-chek-combo)=

## Accu-Chek Combo

**NOTE**: As mentioned above, this secton is only valid for the old, Ruffy-based driver. The new driver adjusts date and time and DST automatically.

AndroidAPS will issue an alarm if the time between pump and phone differs too much. In case of DST time adjustment, this would be in the middle of the night. To prevent this and enjoy your sleep instead, follow these steps so that you can force the time change at a time convenient to yourself:

### Vor der Zeitumstellung notwendige Maßnahmen

1. Schalten alle Einstellungen AUS, die die Zeitzone automatisch festlegen, so dass Du die Zeitumstellung durchführen kannst, wann Du es möchtest. Die Vorgehensweise hängt von Deinem Smartphone und der Android-Version ab.
   
   * Manche haben zwei Einstellungen, eine für die automatische Zeiteinstellung (die idealerweise AN bleiben sollte) und eine für den automatischen Zeitzonenwechsel (die Du AUSSCHALTEN musst).
   * Unglücklicherweise haben manche Android-Versionen nur eine Einstellmöglichkeit für beides zusammen. In diesem Fall musst Du eben beide ausschalten.

2. Suche Dir eine Zeitzone, die die selbe Uhrzeit wie Du hat, aber nicht zwischen Winter- und Sommerzeit wechselt.
   
   * Eine Liste dieser Länder findest Du z.B. auf [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/).
   * Für die Mitteleuropäische Zeit (MEZ) könnte dies z.B. "Brazzaville" (Kongo) sein. Stelle die Zeitzone deines Smartphones manuell auf Kongo.

3. Aktualisiere die Pumpe via AndroidAPS.

4. Prüfe den Tab "Behandlungen". Falls Du doppelte Einträge entdeckst:
   
   * Klicke NICHT auf "lösche alle Behandlungen in der Zukunft". 
   * Drücke "Löschen" bei allen künftigen und doppelten Behandlungen. Dadurch werden die Behandlungen außer Kraft gesetzt statt nur gelöscht und somit nicht mehr beim IOB berücksichtigt.

5. Wenn die Situation von COB und/oder IOB unklar ist, pausiere den Loop zu Deiner eigenen Sicherheit bitte mindestens für den Zeitraum des DIA oder die Max-Carb-Time - und wähle den größeren der beiden.

### Nach der Zeitumstellung notwendige Maßnahmen

A good time to make this switch would be with low IOB. E.g. an hour before a meal such as breakfast, (any recent boluses in the pump history will have been small SMB corrections. Your COB and IOB should both be close to zero.)

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

* Diese Funktion steht seit AndroidAPS Version 2.2 zur Verfügung.
* Um Schwierigkeiten zu vermeiden, wird der Loop für 3 Stunden nach der Zeitumstellung deaktiviert. Dies geschieht aus Sicherheitsgründen (IOB zu hoch aufgrund von doppeltem Boluseinträgen vor der Zeitumstellung).
* Du erhältst rechtzeitig vor der Zeitumstellung einen Hinweis auf dem Startbildschirm, dass der Loop vorübergehend pausiert wird. Diese Nachricht erscheint ohne Ton, Vibration oder anderes.