# Timezone Change and Daylight Saving

## Wisselen van tijdzone

## Timezone change for Omnipod Dash

* Refresh the Dash tab
* Temporarily select a different **Profile** and then switch back to your original or desired **Profile**

## Timezone change for DanaR, Korean DanaR

Het wijzigen van de tijdzone in de telefoon is geen probleem omdat de pompgeschiedenis niet wordt gebruikt.

## Timezone change for DanaRv2, DanaRS

These pumps require special care because **AAPS** uses history from the pump but the records in pump do not have timezone stamp. **This means that if you change time zone in your phone, records will be read with different time zone and will be doubled.**

To avoid this there are two possibilities:

### Optie 1: Houd de tijdzone van thuis en doe een tijdverschuiving van je profiel

* Turn off 'Automatic date and time' in your phone's settings (manual time zone change).

* Your phone must keep your standard time as at home for the whole travel period.

* Time-shift your **Profile** according to time difference between home time and destination time.
   
   * Long-press **Profile** name (middle of top section on homescreen)
   * Select '**Profile Switch**'
   * Stel 'Tijdverschuiving' in die hoort bij jouw reisbestemming.
   
   ![Profiel wissel met tijdverschuiving](../images/ProfileSwitchTimeShift2.png)
   
   * i.e. Vienna -> New York: **Profile Switch** +6 hours
   * i.e. Vienna -> Sydney: **Profile Switch** -8 hours

### Optie 2: pomphistorie wissen

* Schakel 'Automatische datum en tijd' uit in je telefooninstellingen (handmatige tijdzonewijziging)

When get out of plane:

* zet pomp uit
* wijzig tijdzone op je telefoon
* telefoon uitschakelen, pomp aanzetten
* geschiedenis wissen in pomp
* verander tijd in pomp
* telefoon aanzetten
* laat telefoon verbinding maken met de pomp en de tijd fine-tunen

## Timezone Change for Insight

The driver automatically adjusts the time of the pump to the time of the phone.

The Insight also records the history entries in which moment time was changed and from which (old) time to which (new) time. So the correct time can be determined in **AAPS** despite the time change.

It may cause inaccuracies in the **TDDs**. But it shouldn't be a problem.

So the Insight user doesn't have to worry about timezone changes and time changes. There is one exception to this rule: The Insight pump has a small internal battery to power time etc. while you are changing the "real" battery. If changing battery takes to long this internal battery runs out of energy, the clock is reset and you are asked to enter time and date after inserting a new battery. In this case all entries prior to the battery change are skipped in calculation in AAPS as the correct time cannot be identified properly.

## Timezone Change for Accu-Chek Combo

The [new Combo driver](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) automatically adjusts the time of the pump to the time of the phone. The Combo cannot store timezones, only local time, which is precisely what the new driver programs into the pump. In addition, it stores the timezone in the local AAPS preferences to be able to convert the pump's localtime to a full timestamp that has a timezone offset. The user does not have to do anything; if the time on the Combo deviates too much from the phone's current time, the pump's time is automatically adjusted.

Note that this takes some time, however, since it can only be done in the remote-terminal mode, which is generally slow. This is a Combo limitation that cannot be overcome.

The old, Ruffy-based driver does not adjust the time automatically. The user has to do that manually. See below for the steps necessary to do that safely in case the timezone / daylight savings is the reason for the change.

## Timezone Change for Medtrum

The driver automatically adjusts the time of the pump to the time of the phone.

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

* Wisselingen tussen zomer/wintertijd worden automatisch gedaan. Geen actie vereist.

### DST for Medtrum

* Wisselingen tussen zomer/wintertijd worden automatisch gedaan. Geen actie vereist.

### DST for Omnipod Dash

* Either allow **AAPS** to temporarily default background basal after DST has taken place as explained above.
* Otherwise, if you do not want **AAPS** to temporarily default to background basal overnight, you can change the time zone the day prior DST is due to take place to avoid overnight disruption. NOTE THIS OPTION MAY CAUSE YOUR POD TO PREMATURELY EXPIRE. PLEASE HAVE SUPPLIES WITH YOU IF OPTING FOR THE FEATURE BELOW.

#### Acties voorafgaand aan tijdswissel

1. Switch OFF any Phone's settings that automatically sets the Phone's time zone, so the user can change to a time zone that does not use DST. How to enable this will depend on your smartphone and Android version.
   
   * Some phones have two settings, one for automatic setting of the time (which ideally should remain on) and one for automatic setting of the time zone (which you must turn OFF).
   * Unfortunately, some Android versions have a single switch to enable automatic setting of both the time and the timezone. Zet dan die instelling UIT.

<img width="576" height="1289" alt="Screenshot_20260329-110315 (1)" src="https://github.com/user-attachments/assets/ca40c1c6-1697-4832-ae10-5cf6a1dc0bce" />

2. Find a timezone that has the same time as your current location but doesn't use DST.
   
   * Een lijst van deze landen is beschikbaar op [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * Voor Nederland/België zou je "Brazzaville" (Congo) kunnen kiezen op de avond voordat de zomertijd ingaat, en "Amman" (Jordanië) op de avond voordat de wintertijd ingaat. Verander de tijdzone van jouw telefoon naar Congo/Jordanië.

<img width="576" height="1289" alt="Screenshot_20260329-111830" src="https://github.com/user-attachments/assets/b7b7f738-f91e-40df-ad79-f404fbfb9ae6" />

3. **AAPS** refresh your pump and switch to your desired **Profile**.

4. Check **AAPS's** **IOB** and **COB** and if this is inaccurate disable the Fully Closed Loop for at least one DIA and Max-Carb-Time - whatever is bigger.

5. Actions to take after the clock change. A good time to make revert to local time zone is with low **IOB**. E.g. an hour before a meal such as breakfast. Ideally your **COB** and **IOB** should both be close to zero.

### DST for Accu-Chek Combo

This section is only valid for the old, Ruffy-based driver. The new driver adjusts date and time and DST automatically.

**AAPS** will issue an alarm if the time between pump and phone differs too much. In case of DST time adjustment, this would be in the middle of the night. To prevent this and enjoy your sleep instead, follow these steps so that you can force the time change at a time convenient to yourself:

#### Acties voorafgaand aan tijdswissel

1. Schakel automatische tijdzone UIT in jouw telefooninstellingen, zodat het niet automatisch (en dus 's nachts) gebeurt. Hoe je dit precies moet doen hangt af van je smartphone en Android versie. Meestal te vinden onder Instellingen > Datum en tijd oid.
   
   * Sommige telefoons hebben twee instellingen: één voor automatische instelling van de tijd (die gewoon aan kan blijven) en één voor automatische instelling van de tijdzone (die moet je UIT zetten).
   * Sommige Android-versies hebben één enkele instelling voor automatische instelling van zowel de tijd als tijdzone. Zet dan die instelling UIT.
   
   Screenshot_20260329-110315 (1)

2. Find a timezone that has the same time as your current location but doesn't use DST.
   
   * Een lijst van deze landen is beschikbaar op [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * Voor Nederland/België zou je "Brazzaville" (Congo) kunnen kiezen op de avond voordat de zomertijd ingaat, en "Amman" (Jordanië) op de avond voordat de wintertijd ingaat. Verander de tijdzone van jouw telefoon naar Congo/Jordanië.

3. In **AAPS** refresh your pump.

4. Ga naar het tabblad Behandelingen... Als je dubbele behandelingen ziet:
   
   * Druk NIET (!) op "verwijder behandelingen in de toekomst"
   * Klik één voor één op "verwijder" voor alle dubbele en toekomstige behandelingen. Dit zou de behandelingen ongeldig moeten maken in plaats van ze te verwijderen, zodat ze niet meer voor IOB / COB worden meegenomen.

5. Als de je niet goed weet of jouw huidige IOB/COB correct is - schakel voor jouw eigen veiligheid de loop voor ten minste één DIA of Max-Carb-time uit - welk van de twee het grootste is.

#### Acties na afloop van tijdswissel

A good time to make this switch would be with low **IOB**. E.g. an hour before a meal such as breakfast, (any recent boluses in the pump history will have been small SMB corrections. Your **COB** and **IOB** should both be close to zero.)

1. Verander de Android tijdzone terug naar je huidige locatie en schakel de automatische tijdzone opnieuw in.
2. **AAPS** will soon start alerting you that the Combo’s clock doesn’t match. Dus werk de klok van de pomp handmatig bij via de knoppen van de pomp.
3. On the **AAPS** “Combo” screen, press Refresh.
4. Ga dan naar tabblad Behandelingen en kijk of daar behandelingen in de toekomst tussen staan. Er zouden er niet veel moeten zijn.
   
   * Druk NIET (!) op "verwijder behandelingen in de toekomst"
   * Klik één voor één op "verwijder" voor alle dubbele en toekomstige behandelingen. Dit zou de behandelingen ongeldig moeten maken in plaats van ze te verwijderen, zodat ze niet meer voor IOB / COB worden meegenomen.

5. Als de je niet goed weet of jouw huidige IOB/COB correct is - schakel voor jouw eigen veiligheid de loop voor ten minste één DIA of Max-Carb-time uit - welk van de twee het grootste is.

6. Je bent klaar.