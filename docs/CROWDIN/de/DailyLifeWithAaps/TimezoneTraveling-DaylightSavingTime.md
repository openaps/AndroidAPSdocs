# Timezone Change and Daylight Saving

## Mit der Pumpe über Zeitzonen hinweg reisen

## Timezone change for Omnipod Dash

* Refresh the Dash tab
* Temporarily select a different **Profile** and then switch back to your original or desired **Profile**

## Timezone change for DanaR, Korean DanaR

Es gibt keine Probleme beim Zeitzonenwechsel im Smartphone, da die Pumpe keine Historie verwendet

## Timezone change for DanaRv2, DanaRS

These pumps require special care because **AAPS** uses history from the pump but the records in pump do not have timezone stamp. **This means that if you change time zone in your phone, records will be read with different time zone and will be doubled.**

Um dies zu vermeiden, gibt es zwei Möglichkeiten:

### Option 1: Heimatzeit beibehalten und Time Shift des Profils

* Turn off 'Automatic date and time' in your phone's settings (manual time zone change).

* Your phone must keep your standard time as at home for the whole travel period.

* Time-shift your **Profile** according to time difference between home time and destination time.
   
   * Long-press **Profile** name (middle of top section on homescreen)
   * Select '**Profile Switch**'
   * Stelle die 'Zeitverschiebung' entsprechend Deines Zielortes ein.
   
   ![Profilwechsel mit Zeitverschiebung](../images/ProfileSwitchTimeShift2.png)
   
   * i.e. Vienna -> New York: **Profile Switch** +6 hours
   * i.e. Vienna -> Sydney: **Profile Switch** -8 hours

### Option 2: Pumpenhistorie löschen

* Schalte die automatische Einstellung von Datum und Uhrzeit in Deinem Smartphone aus (manueller Zeitzonen-Wechsel)

Wenn Du aus dem Flugzeug steigst:

* schalte die Pumpe aus
* ändere die Zeitzone auf dem Smartphone
* schalte das Smartphone aus, schalte die Pumpe an
* lösche die Historie der Pumpe
* ändere die Zeit in der Pumpe
* schalte das Smartphone an
* lasse das Smartphone mit der Pumpe verbinden und verfeinere die Zeiteinstellung

## Timezone Change for Insight

Der Treiber passt die Uhrzeit in der Pumpe automatisch an die Zeit im Smartphone an.

Die Insight dokumentiert auch die historischen Einträge, in denen die Zeit geändert wurde und von welcher (alten) Zeit zu welcher (neuen) Zeit. So the correct time can be determined in **AAPS** despite the time change.

It may cause inaccuracies in the **TDDs**. Aber es sollte kein Problem sein.

Der Insight-Nutzer muss sich also nicht um Zeitumstellung oder den Wechsel von Zeitzonen kümmern. Es gibt eine Ausnahme zu dieser Regel: Die Insight Pumpe hat eine kleine interne Batterie, um die Zeit immer aktuell zu halten etc. während Du die "normale" Batterie wechselst. Wenn der Batteriewechsel zu lange dauert, kann diese interne Batterie leer werden, die Uhr wird zurückgesetzt und Du wirst gebeten, Zeit und Datum nach dem Einlegen der neuen Batterie neu einzugeben. In diesem Fall werden alle Einträge vor dem Batteriewechsel in der Berechnung in AAPS übersprungen, da die richtige Zeit nicht korrekt erkannt werden kann.

## Timezone Change for Accu-Chek Combo

Die neue [Combo-Unterstützung](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) (eng. driver) passt die Pumpenzeit automatisch an die Zeit des Smartphones an. Die Combo selbst speichert keine Zeitzonen, sondern lediglich die lokale Zeit. Der neue Treiber setzt genau diese lokale Zeit. Zusätzlich wird die Zeitzone in den lokalen AAPS-Einstellungen hinterlegt, um die lokale Pumpenzeit in einen vollständigen Zeitstempel, der die entsprechende Zeitverschiebung enthält, umzurechnen. Du musst hier also nichts tun. Sollten die Abweichungen zwischen Combo und Smartphone zu groß werden, wird die Pumpenzeit automatisch korrigiert.

Es kann etwas dauern bis die Synchronisierung abgeschlossen ist, da die Anpassung nur mit einem langsamen Kommunikations-Protokoll (remote-terminal mode) gemacht werden kann. Das ist eine Combo-Beschränkung, die nicht umgangen werden kann.

Der alte, auf Ruffy basierende, Treiber passt die Zeit nicht automatisch ein. In diesem Setup muss die Anpassung von Hand erfolgen. Unten findest Du die nötigen Schritte, um die Anpassungen wegen eines Zeitzonenenwechsels oder wegen der Zeitumstellung sicher durchzuführen.

## Timezone Change for Medtrum

Der Treiber passt die Uhrzeit in der Pumpe automatisch an die Zeit im Smartphone an.

Time zone changes keep the history intact, only TDD may be affected. Manually changing the time on the phone can cause problems with the history and **IOB**. If you change time manually double check the **IOB**.

When the time zone or time changes running **TBR's** are stopped.

## DAYLIGHT SAVING (DST)

Time adjustment daylight savings time

Depending on your pump and CGM setup, jumps in time can lead to problems with **AAPS** to function correctlyy. For instance with the Combo pump, the pump history is read twice leading to duplicate entries. For some pumps it is better to make time zone adjustments while awake and not during the night.

### DST automatic adjustment for most pumps

* This adjustment feature is available for **AAPS** version 2.2 onwards.
* Howeever, the fully closed Loop will be deactivated for 3 hours AFTER the DST switch (usually 1am onwards) has taken place and **AAPS** will default to background basal as selected in your **Profile**. This is done for safety reasons - **IOB** may be too high due to duplicated bolus prior to DST change.
* After DST has taken place, select **Profile Switch** to user's desired **Profile** to enable fully closed Loop.
* You will also receive a notification on **AAPS** main screen prior to DST change that the Fully Closed Loop has been disabled temporarily. This message will appear without beep, vibration or anything.**

If you bolus with **AAPS'** calculator please do not use **COB** and **IOB** data unless you are sure this data is absolutely correct. Take caution and do not use this feature for a couple of hours after DST switch has taken place.

### DST for Accu-Chek Insight

* Zeitumstellung erfolgt automatisch. Keine Maßnahme erforderlich.

### DST for Medtrum

* Zeitumstellung erfolgt automatisch. Keine Maßnahme erforderlich.

### DST for Omnipod Dash

* Either allow **AAPS** to temporarily default background basal after DST has taken place as explained above.
* Otherwise, if you do not want **AAPS** to temporarily default to background basal overnight, you can change the time zone the day prior DST is due to take place to avoid overnight disruption. NOTE THIS OPTION MAY CAUSE YOUR POD TO PREMATURELY EXPIRE. PLEASE HAVE SUPPLIES WITH YOU IF OPTING FOR THE FEATURE BELOW.

#### Vor der Zeitumstellung notwendige Maßnahmen

1. Switch OFF any Phone's settings that automatically sets the Phone's time zone, so the user can change to a time zone that does not use DST. How to enable this will depend on your smartphone and Android version.
   
   * Some phones have two settings, one for automatic setting of the time (which ideally should remain on) and one for automatic setting of the time zone (which you must turn OFF).
   * Unfortunately, some Android versions have a single switch to enable automatic setting of both the time and the timezone. In diesem Fall musst Du eben beide ausschalten.

<img width="576" height="1289" alt="Screenshot_20260329-110315 (1)" src="https://github.com/user-attachments/assets/ca40c1c6-1697-4832-ae10-5cf6a1dc0bce" />

2. Find a timezone that has the same time as your current location but doesn't use DST.
   
   * Eine Liste dieser Länder findest Du z.B. auf [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/).
   * Für die Mitteleuropäische Zeit (MEZ) könnte dies z.B. "Brazzaville" (Kongo) sein. Stelle die Zeitzone deines Smartphones manuell auf Kongo.

<img width="576" height="1289" alt="Screenshot_20260329-111830" src="https://github.com/user-attachments/assets/b7b7f738-f91e-40df-ad79-f404fbfb9ae6" />

3. **AAPS** refresh your pump and switch to your desired **Profile**.

4. Check **AAPS's** **IOB** and **COB** and if this is inaccurate disable the Fully Closed Loop for at least one DIA and Max-Carb-Time - whatever is bigger.

5. Actions to take after the clock change. A good time to make revert to local time zone is with low **IOB**. E.g. an hour before a meal such as breakfast. Ideally your **COB** and **IOB** should both be close to zero.

### DST for Accu-Chek Combo

This section is only valid for the old, Ruffy-based driver. Der neue Treiber passt Datum und Uhrzeit und Sommer-/Winterzeit automatisch an.

**AAPS** will issue an alarm if the time between pump and phone differs too much. Bei der Zeitumstellung wäre dies unerfreulicherweise mitten in der Nacht. Um dies zu verhindern und stattdessen den Schlaf zu genießen, folge diesen Schritten, so dass Du die Zeitumstellung zu einer Zeit erzwingen kannst, die Dir passt.

#### Vor der Zeitumstellung notwendige Maßnahmen

1. Schalten alle Einstellungen AUS, die die Zeitzone automatisch festlegen, so dass Du die Zeitumstellung durchführen kannst, wann Du es möchtest. Die Vorgehensweise hängt von Deinem Smartphone und der Android-Version ab.
   
   * Manche haben zwei Einstellungen, eine für die automatische Zeiteinstellung (die idealerweise AN bleiben sollte) und eine für den automatischen Zeitzonenwechsel (die Du AUSSCHALTEN musst).
   * Unglücklicherweise haben manche Android-Versionen nur eine Einstellmöglichkeit für beides zusammen. In diesem Fall musst Du eben beide ausschalten.
   
   Screenshot_20260329-110315 (1)

2. Find a timezone that has the same time as your current location but doesn't use DST.
   
   * Eine Liste dieser Länder findest Du z.B. auf [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/).
   * Für die Mitteleuropäische Zeit (MEZ) könnte dies z.B. "Brazzaville" (Kongo) sein. Stelle die Zeitzone deines Smartphones manuell auf Kongo.

3. In **AAPS** refresh your pump.

4. Prüfe den Tab "Behandlungen". Falls Du doppelte Einträge entdeckst:
   
   * Klicke NICHT auf "lösche alle Behandlungen in der Zukunft". 
   * Drücke "Löschen" bei allen künftigen und doppelten Behandlungen. Dadurch werden die Behandlungen außer Kraft gesetzt statt nur gelöscht und somit nicht mehr beim IOB berücksichtigt.

5. Wenn die Situation von COB und/oder IOB unklar ist, pausiere den Loop zu Deiner eigenen Sicherheit bitte mindestens für den Zeitraum des DIA oder die Max-Carb-Time - und wähle den größeren der beiden.

#### Nach der Zeitumstellung notwendige Maßnahmen

A good time to make this switch would be with low **IOB**. Z.B. eine Stunde vor einer Mahlzeit wie dem Frühstück, denn dann werden alle kürzlich abgegebenen Boli in Deiner Pumpenhistorie kleine SMB Korrekturen sein. Your **COB** and **IOB** should both be close to zero.)

1. Wechsle die Zeitzone in Deinem Smartphone zurück auf Deine eigene Zeitzone und aktiviere die oben deaktivierte Automatik zur Zeitzoneneinstellung wieder.
2. **AAPS** will soon start alerting you that the Combo’s clock doesn’t match. Passe die Uhrzeit manuell auf der Pumpe an.
3. On the **AAPS** “Combo” screen, press Refresh.
4. Prüfe dann auf dem Behandlungs-Tab, ob es Ereignisse in der Zukunft gibt. Es sollte eigentlich keine geben. Falls doch:
   
   * Klicke NICHT auf "lösche alle Behandlungen in der Zukunft". 
   * Drücke "Löschen" bei allen künftigen und doppelten Behandlungen. Dadurch werden die Behandlungen außer Kraft gesetzt statt nur gelöscht und somit nicht mehr beim IOB berücksichtigt.

5. Wenn die Situation von COB und/oder IOB unklar ist, pausiere den Loop zu Deiner eigenen Sicherheit bitte mindestens für den Zeitraum des DIA oder die Max-Carb-Time - und wähle den größeren der beiden.

6. Mache weiter wie gewohnt.