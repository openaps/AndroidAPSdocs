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

Als je de boluscalculator gebruikt, haal dan de vinkjes weg bij COB en IOB tenzij je ervoor zorgt dat ze absoluut correct zijn - gebruik ze beter niet gedurende de eerste paar uur na een tijdswissel.

## Accu-Chek Combo

AndroidAPS zal een alarm afgeven als de tijd tussen pomp en telefoon sterk verschilt. In het geval van zomer/wintertijd wisselingen zou dit midden in de nacht zijn. Om dit te voorkomen en te genieten van een ongestoorde nachtrust volg je deze stappen:

1) Schakel automatische tijdzone uit in jouw telefooninstellingen. 2) Vind een tijdzone die de gewenste tijd heeft maar die geen zomer/wintertijd wissel heeft. Voor Midden-Europese tijd (CET) zou dit "Brazzaville" (Congo) kunnen zijn voor de omschakeling naar wintertijd, en "Caïro" (Egypte) voor de omschakeling naar zomertijd. Verander de tijdzone van jouw telefoon naar Congo/Egypte. 3) In AndroidAPS ga je naar het pomp-tabblad en vernieuw de status. 4) Ga naar het tabblad Behandelingen... Als je dubbele behandelingen ziet:

* Druk NIET (!) op "verwijder behandelingen in de toekomst"
* Klik één voor één op "verwijder" voor alle dubbele en toekomstige behandelingen. Dit zou de behandelingen ongeldig moeten maken in plaats van ze te verwijderen, zodat ze niet meer voor IOB / COB worden meegenomen. 5) Als de status onduidelijk is - schakel de loop voor ten minste één DIA en Max-Carb-time uit - welk van de twee het grootste is.

Een goed moment om deze omschakeling te maken zou zijn wanneer jouw IOB laag is. Bijvoorbeeld een uur voor een maaltijd.

## Accu-Chek Insight

* Wisselingen tussen zomer/wintertijd worden automatisch gedaan. Geen actie vereist.

## Andere pompen - voor AAPS versie 2.2 en hoger

<b><font color="#FF0000">Je moet AAPS bijgewerkt hebben naar versie 2.2 om deze functie te gebruiken.</font></b>

* Gedurende de nacht wordt er automatisch omgeschakeld. Om problemen te voorkomen zal de loop worden gedeactiveerd gedurende 3 uur NA de zomer/wintertijd wissel. Dit gebeurt om veiligheidsredenen (te hoge IOB als gevolg van dubbele bolus-invoer vóór tijdswisseling).
* Je ontvangt een melding op het hoofdscherm 24 uur voordat de tijdswissel plaatsvindt, dat de loop tijdelijk zal worden uitgeschakeld. Dit bericht zal verschijnen zonder geluid, trilling of zoiets.