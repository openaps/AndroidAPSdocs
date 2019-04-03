# Wisselen van tijdzone

## DanaR, Koreaanse DanaR

Het wijzigen van de tijdzone in de telefoon is geen probleem omdat de pompgeschiedenis niet wordt gebruikt.

## DanaRv2, DanaRS

Deze pompen hebben een speciale behandeling nodig omdat AndroidAPS geschiedenis uit de pomp gebruikt, maar de opgeslagen informatie in de pomp heeft geen tijdszone-notering. Dat betekent dat als je simpelweg de tijdzone wijzigt in je telefoon, de pompgeschiedenis zal worden uitgelezen met een andere tijdzone en daardoor behandelingen dubbel in AndroidAPS terechtkomen. Om dit te voorkomen, volg je de volgende stappen bij een tijdzone wijziging:

* zet je telefoon op handmatige tijdzone voordat je gaat reizen

Wanneer je uit het vliegtuig komt:

* zet pomp uit
* wijzig tijdzone op je telefoon
* telefoon uitschakelen, pomp aanzetten
* geschiedenis wissen in pomp
* verander tijd in pomp
* telefoon aanzetten
* laat telefoon verbinding maken met de pomp en de tijd fine-tunen

## Combo

## Insight

Het stuurprogramma van de pomp past automatisch de tijd van de pomp aan op de tijd van de telefoon.

Het Insight slaat ook in de pompgeschiedenis op wanneer de tijd is veranderd en ook van welke (oude) tijd naar welke (nieuwe) tijd. Dus kan de juiste tijd worden bepaald in AAPS, ondanks de tijdsaanpassing.

Het kan wel tot onnauwkeurigheden leiden in de TDD (totale dagelijkse dosis). Maar dat zou geen probleem moeten zijn.

Gebruikers van de Insight hebben het dus makkelijk bij tijdzone aanpassingen, omdat het pompgeheugen rekening houdt met tijdswisselingen. Wel heeft dit een ander nadeel: de pomp heeft een kleine interne batterij die o.a. de tijd bijhoudt terwijl jij de "gewone" batterij verwisselt. Als het wisselen van de batterij te lang duurt, kan deze interne batterij leegraken. Dan wordt de interne klok gereset en wordt je gevraagd een nieuwe tijd en datum in te voeren nadat je een nieuwe batterij in de pomp hebt gedaan. In dit geval negeert AAPS alle informatie in het pompgeheugen voorafgaand aan de batterijwissel voor zijn berekeningen, omdat de juiste tijd niet goed kan worden bepaald.

# Wisselen tussen zomer- en wintertijd

Afhankelijk van pomp en CGM setup, kunnen tijdsverschuivingen problemen geven. Met de Combo bijv. wordt de pompgeschiedenis opnieuw uitgelezen en dat kan leiden tot dubbele invoer. Zorg dus dat je deze wissel uitvoert wanneer je wakker bent, laat het niet automatisch gebeuren gedurende de nacht. Hiermee voorkom je probemen.

If you bolus with the calculator please don't use COB and IOB unless you made sure they are absolutely correct - better don't use them for a couple of hours after DST switch.

## Accu-Chek Combo

AndroidAPS will issue an alarm if time between pump and phone differs to much. In case of DST time adjustment this would be in the middle of the night. To prevent this and enjoy your sleep instead follow these steps:

1) Switch off automatic time zone in your phone. 2) Find a time zone that has the target time but doesn't use DST. For Central European Time (CET) this could be "Brazzaville" (Kongo). Change your phone's timezone to Kongo. 3) In AndroidAPS refresh you pump. 4) Check the Treatments tab... If you see duplicate treatments:

* Druk NIET (!) op "verwijder behandelingen in de toekomst"
* Klik één voor één op "verwijder" voor alle dubbele en toekomstige behandelingen. Dit zou de behandelingen ongeldig moeten maken in plaats van ze te verwijderen, zodat ze niet meer voor IOB / COB worden meegenomen. 5) Als de status onduidelijk is - schakel de loop voor ten minste één DIA en Max-Carb-time uit - welk van de twee het grootste is.

A good time to make this switch would be with low IOB. E.g. an hour before a meal.

## Accu-Chek Insight

* Change to DST is done automatically. No action required.

## Other pumps - new as of AAPS version 2.2

<b><font color="#FF0000">You have to update AAPS to use this feature!</font></b>

* To prevent difficulties the Loop will be deactivated for 3 hours AFTER the DST switch. This is done for safety reasons (IOB too high due to duplicated bolus prior to DST change).
* You will receive a notification on the main screen 24 hours prior to DST change that loop will be disabled temporarily. This message will appear without beep, vibration or anything.