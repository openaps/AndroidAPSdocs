# Timezone traveling with pumps

## DanaR, Korean DanaR

There is no issue with changing timezone in phone because pump doesn't use history

## DanaRv2, DanaRS

These pumps need a special care because AndoridAPS is using history from the pump but the records in pump don't have timezone stamp. That means if you simple change timezone in phone, records will be read with different timezone and will be doubled. To avoid this do the following steps on every timezone change:

* switch phone for manual time zone change before travel

When get out of plane:

* turn off pump
* change timezone on phone
* turn off phone, turn on pump
* clear history in pump
* change time in pump
* turn on phone
* let phone connect to the pump and fine-tune time

## Combo

## Insight

The driver automatically adjusts the time of the pump to the time of the phone.

The Insight also records the history entries in which moment time was changed and from which (old) time to which (new) time. So the correct time can be determined in AAPS despite the time change.

It may cause inaccuracies in the TDDs. But it shouldn't be a problem.

So the Insight user doesn't have to worry about timezone changes and time changes. There is one exception to this rule: The Insight pump has a small internal battery to power time etc. while you are changing the "real" battery. If changing battery takes to long this internal battery runs out of energy, the clock is reset and you are asked to enter time and date after inserting a new battery. In this case all entries prior to the battery change are skiped in calculation in AAPS as the correct time cannot be identified properly.

# Wisselen tussen zomer- en wintertijd

Afhankelijk van pomp en CGM setup, kunnen tijdsverschuivingen problemen geven. Met de Combo bijv. wordt de pompgeschiedenis opnieuw uitgelezen en dat kan leiden tot dubbele invoer. Zorg dus dat je deze wissel uitvoert wanneer je wakker bent, laat het niet automatisch gebeuren gedurende de nacht. Hiermee voorkom je probemen.

1) Schakel automatische tijdzone uit in jouw telefooninstellingen. 2) Vind een tijdzone die de doeltijd heeft maar die geen zomer/wintertijd wissel heeft. Voor Midden-Europese tijd (CET) zou dit "Brazzaville" (Kongo) kunnen zijn. Verander de tijdzone van jouw telefoon naar Kongo. 3) In AndroidAPS ga je naar het pomp-tabblad en vernieuw de status. (tik op het bluetooth symbool voor Dana pompen; "vernieuw" voor de Combo). 4) Ga naar het tabblad Behandelingen... Als je dubbele behandelingen ziet:

* Druk NIET (!) op "verwijder behandelingen in de toekomst"
* Klik één voor één op "verwijder" voor alle dubbele en toekomstige behandelingen. Dit zou de behandelingen ongeldig moeten maken in plaats van ze te verwijderen, zodat ze niet meer voor IOB / COB worden meegenomen. 5) Als de status onduidelijk is - schakel de loop voor ten minste één DIA en Max-Carb-time uit - welk van de twee het grootste is.

Een goed moment om deze omschakeling te maken zou zijn wanneer jouw IOB laag is. Bijvoorbeeld een uur voor een maaltijd.

Dit is zeker van invloed op de Combo, misschien de Dana Rv2 en RS - en waarschijnlijk niet de Dana R en Insight. Maar aangezien het niet getest is, wees voorzichtig. Het is doe-het-zelf!