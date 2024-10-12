# Wisselen van tijdzone

## DanaR, Koreaanse DanaR

Het wijzigen van de tijdzone in de telefoon is geen probleem omdat de pompgeschiedenis niet wordt gebruikt.

(Timezone-traveling-danarv2-danars)=

## DanaRv2, DanaRS

These pumps need a special care because AAPS is using history from the pump but the records in pump don't have timezone stamp. **That means if you simple change timezone in phone, records will be read with different timezone and will be doubled.**

To avoid this there are two possibilities:

### Optie 1: Houd de tijdzone van thuis en doe een tijdverschuiving van je profiel

* Schakel 'Automatische datum en tijd' uit in je telefooninstellingen (handmatige tijdzonewijziging).
* Jouw telefoon moet op de standaard tijd van jouw thuisland blijven staan gedurende de hele reisperiode.
* Doe een tijdverschuiving van jouw profiel op basis van het tijdverschil tussen je thuisland en je reisbestemming.
   
   * Houd jouw profiel naam (bovenaan in het midden van jouw Overzicht-scherm) lang ingedrukt
   * Kies 'Profiel Wissel'
   * Stel 'Tijdverschuiving' in die hoort bij jouw reisbestemming.
   
   ![Profiel wissel met tijdverschuiving](../images/ProfileSwitchTimeShift2.png)
   
   * Bijvoorbeeld Wenen-> New York: profiel wissel + 6 uur
   * Bijvoorbeeld Wenen-> Sydney: profiel wissel - 8 uur
* Probably not an option if using [patched LibreLink app](Libre2-time-zone-travelling) as automatic time zone must be set to start a new Libre 2 sensor.

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

(Timezone-traveling-insight)=

## Insight

The driver automatically adjusts the time of the pump to the time of the phone.

The Insight also records the history entries in which moment time was changed and from which (old) time to which (new) time. So the correct time can be determined in AAPS despite the time change.

It may cause inaccuracies in the TDDs. But it shouldn't be a problem.

So the Insight user doesn't have to worry about timezone changes and time changes. There is one exception to this rule: The Insight pump has a small internal battery to power time etc. while you are changing the "real" battery. If changing battery takes to long this internal battery runs out of energy, the clock is reset and you are asked to enter time and date after inserting a new battery. In this case all entries prior to the battery change are skipped in calculation in AAPS as the correct time cannot be identified properly.

## Accu-Chek Combo

The [new Combo driver](../Configuration/Accu-Chek-Combo-Pump-v2.md) automatically adjusts the time of the pump to the time of the phone. The Combo cannot store timezones, only local time, which is precisely what the new driver programs into the pump. In addition, it stores the timezone in the local AAPS preferences to be able to convert the pump's localtime to a full timestamp that has a timezone offset. The user does not have to do anything; if the time on the Combo deviates too much from the phone's current time, the pump's time is automatically adjusted.

Note that this takes some time, however, since it can only be done in the remote-terminal mode, which is generally slow. This is a Combo limitation that cannot be overcome.

The old, Ruffy-based driver does not adjust the time automatically. The user has to do that manually. See below for the steps necessary to do that safely in case the timezone / daylight savings is the reason for the change.

(Timezone-traveling-time-adjustment-daylight-savings-time-dst)=

## Medtrum

The driver automatically adjusts the time of the pump to the time of the phone.

Timezone changes keep the history in tact, only TDD may be affected. Manually changing the time on the phone can cause problems with the history and IOB. If you change time manually double check the IOB.

When the timezone or time changes running TBR's are stopped.

# Wisselen tussen zomer- en wintertijd

Depending on pump and CGM setup, jumps in time can lead to problems. With the Combo e.g. the pump history gets read again and it would lead to duplicate entries. So please do the adjustment while awake and not during the night.

If you bolus with the calculator please don't use COB and IOB unless you made sure they are absolutely correct - better don't use them for a couple of hours after DST switch.

(Timezone-traveling-accu-chek-combo)=

## Accu-Chek Combo

**NOTE**: As mentioned above, this secton is only valid for the old, Ruffy-based driver. The new driver adjusts date and time and DST automatically.

AAPS will issue an alarm if the time between pump and phone differs too much. In case of DST time adjustment, this would be in the middle of the night. To prevent this and enjoy your sleep instead, follow these steps so that you can force the time change at a time convenient to yourself:

### Acties voorafgaand aan tijdswissel

1. Schakel automatische tijdzone UIT in jouw telefooninstellingen, zodat het niet automatisch (en dus 's nachts) gebeurt. Hoe je dit precies moet doen hangt af van je smartphone en Android versie. Meestal te vinden onder Instellingen > Datum en tijd oid.
   
   * Sommige telefoons hebben twee instellingen: één voor automatische instelling van de tijd (die gewoon aan kan blijven) en één voor automatische instelling van de tijdzone (die moet je UIT zetten).
   * Sommige Android-versies hebben één enkele instelling voor automatische instelling van zowel de tijd als tijdzone. Zet dan die instelling UIT.

2. Zoek een tijdzone die dezelfde tijd gebruikt als jouw huidige locatie, maar die geen zomer/wintertijd gebruikt.
   
   * Een lijst van deze landen is beschikbaar op [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * Voor Nederland/België zou je "Brazzaville" (Congo) kunnen kiezen op de avond voordat de zomertijd ingaat, en "Amman" (Jordanië) op de avond voordat de wintertijd ingaat. Verander de tijdzone van jouw telefoon naar Congo/Jordanië.

3. In AAPS refresh your pump.

4. Ga naar het tabblad Behandelingen... Als je dubbele behandelingen ziet:
   
   * Druk NIET (!) op "verwijder behandelingen in de toekomst"
   * Klik één voor één op "verwijder" voor alle dubbele en toekomstige behandelingen. Dit zou de behandelingen ongeldig moeten maken in plaats van ze te verwijderen, zodat ze niet meer voor IOB / COB worden meegenomen.

5. Als de je niet goed weet of jouw huidige IOB/COB correct is - schakel voor jouw eigen veiligheid de loop voor ten minste één DIA of Max-Carb-time uit - welk van de twee het grootste is.

### Acties na afloop van tijdswissel

A good time to make this switch would be with low IOB. E.g. an hour before a meal such as breakfast, (any recent boluses in the pump history will have been small SMB corrections. Your COB and IOB should both be close to zero.)

1. Verander de Android tijdzone terug naar je huidige locatie en schakel de automatische tijdzone opnieuw in.
2. AAPS will soon start alerting you that the Combo’s clock doesn’t match. Dus werk de klok van de pomp handmatig bij via de knoppen van de pomp.
3. On the AAPS “Combo” screen, press Refresh.
4. Ga dan naar tabblad Behandelingen en kijk of daar behandelingen in de toekomst tussen staan. Er zouden er niet veel moeten zijn.
   
   * Druk NIET (!) op "verwijder behandelingen in de toekomst"
   * Klik één voor één op "verwijder" voor alle dubbele en toekomstige behandelingen. Dit zou de behandelingen ongeldig moeten maken in plaats van ze te verwijderen, zodat ze niet meer voor IOB / COB worden meegenomen.

5. Als de je niet goed weet of jouw huidige IOB/COB correct is - schakel voor jouw eigen veiligheid de loop voor ten minste één DIA of Max-Carb-time uit - welk van de twee het grootste is.

6. Je bent klaar.

## Accu-Chek Insight

* Wisselingen tussen zomer/wintertijd worden automatisch gedaan. Geen actie vereist.

## Medtrum

* Wisselingen tussen zomer/wintertijd worden automatisch gedaan. Geen actie vereist.

## Other pumps

* This feature is available since AAPS version 2.2.
* To prevent difficulties the Loop will be deactivated for 3 hours AFTER the DST switch. This is done for safety reasons (IOB too high due to duplicated bolus prior to DST change).
* You will receive a notification on the main screen prior to DST change that loop will be disabled temporarily. This message will appear without beep, vibration or anything.