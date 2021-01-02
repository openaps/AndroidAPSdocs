# Wisselen van tijdzone

## DanaR, Koreaanse DanaR

Het wijzigen van de tijdzone in de telefoon is geen probleem omdat de pompgeschiedenis niet wordt gebruikt.

## DanaRv2, DanaRS

Deze pompen hebben een speciale behandeling nodig omdat AndroidAPS geschiedenis uit de pomp gebruikt, maar de opgeslagen informatie in de pomp heeft geen tijdszone-notering. **Dat betekent dat als je simpelweg de tijdzone wijzigt in je telefoon, de pompgeschiedenis zal worden uitgelezen met een andere tijdzone en daardoor behandelingen dubbel in AndroidAPS terechtkomen.**

Om dit te voorkomen zijn er twee mogelijkheden:

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
* Let op: dit is waarschijnlijk niet mogelijk als je gebruik maakt van de [gepatchte LibreLink app](../Hardware/Libre2#time-zone-travelling) omdat je telefoon op 'automatische tijdzone' moet staan om een nieuwe Libre 2 sensor te starten.

### Optie 2: pomphistorie wissen

* Schakel 'Automatische datum en tijd' uit in je telefooninstellingen (handmatige tijdzonewijziging)

Wanneer je uit het vliegtuig komt:

* zet pomp uit
* wijzig tijdzone op je telefoon
* telefoon uitschakelen, pomp aanzetten
* geschiedenis wissen in pomp
* verander tijd in pomp
* telefoon aanzetten
* laat telefoon verbinding maken met de pomp en de tijd fine-tunen

## Insight

Het stuurprogramma van de pomp past automatisch de tijd van de pomp aan op de tijd van de telefoon.

Het Insight slaat ook in de pompgeschiedenis op wanneer de tijd is veranderd en ook van welke (oude) tijd naar welke (nieuwe) tijd. Dus kan de juiste tijd worden bepaald in AAPS, ondanks de tijdsaanpassing.

Het kan wel tot onnauwkeurigheden leiden in de TDD (totale dagelijkse dosis). Maar dat zou geen probleem moeten zijn.

Gebruikers van de Insight hebben het dus makkelijk bij tijdzone aanpassingen, omdat het pompgeheugen rekening houdt met tijdswisselingen. Wel heeft dit een ander nadeel: de pomp heeft een kleine interne batterij die o.a. de tijd bijhoudt terwijl jij de "gewone" batterij verwisselt. Als het wisselen van de batterij te lang duurt, kan deze interne batterij leegraken. Dan wordt de interne klok gereset en wordt je gevraagd een nieuwe tijd en datum in te voeren nadat je een nieuwe batterij in de pomp hebt gedaan. In dit geval negeert AAPS alle informatie in het pompgeheugen voorafgaand aan de batterijwissel voor zijn berekeningen, omdat de juiste tijd niet goed kan worden bepaald.

# Wisselen tussen zomer- en wintertijd

Afhankelijk van pomp en CGM setup, kunnen tijdsverschuivingen problemen geven. Met de Combo bijv. wordt de pompgeschiedenis opnieuw uitgelezen en dat kan leiden tot dubbele invoer. Zorg dus dat je deze wissel uitvoert wanneer je wakker bent, laat het niet automatisch gebeuren gedurende de nacht. Hiermee voorkom je probemen.

Als je de boluscalculator gebruikt, haal dan de vinkjes weg bij COB en IOB tenzij je ervoor zorgt dat ze absoluut correct zijn - gebruik ze beter niet gedurende de eerste paar uur na een tijdswissel.

## Accu-Chek Combo

AndroidAPS zal een alarm afgeven als de tijd tussen pomp en telefoon sterk verschilt. In het geval van zomer/wintertijd wisselingen zou dit midden in de nacht zijn. Om zo'n alarm te voorkomen en ongestoord door te kunnen slapen, staat hier uitgelegd wat je moet doen de dag/avond ervoor:

### Acties voorafgaand aan tijdswissel

1. Schakel automatische tijdzone UIT in jouw telefooninstellingen, zodat het niet automatisch (en dus 's nachts) gebeurt. Hoe je dit precies moet doen hangt af van je smartphone en Android versie. Meestal te vinden onder Instellingen > Datum en tijd oid.
   
   * Sommige telefoons hebben twee instellingen: één voor automatische instelling van de tijd (die gewoon aan kan blijven) en één voor automatische instelling van de tijdzone (die moet je UIT zetten).
   * Sommige Android-versies hebben één enkele instelling voor automatische instelling van zowel de tijd als tijdzone. Zet dan die instelling UIT.

2. Zoek een tijdzone die dezelfde tijd gebruikt als jouw huidige locatie, maar die geen zomer/wintertijd gebruikt.
   
   * Een lijst van deze landen is beschikbaar op [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * Voor Nederland/België zou je "Brazzaville" (Congo) kunnen kiezen op de avond voordat de zomertijd ingaat, en "Amman" (Jordanië) op de avond voordat de wintertijd ingaat. Verander de tijdzone van jouw telefoon naar Congo/Jordanië.

3. In AndroidAPS ga je naar het pomp-tabblad en vernieuw de status.

4. Ga naar het tabblad Behandelingen... Als je dubbele behandelingen ziet:
   
   * Druk NIET (!) op "verwijder behandelingen in de toekomst"
   * Klik één voor één op "verwijder" voor alle dubbele en toekomstige behandelingen. Dit zou de behandelingen ongeldig moeten maken in plaats van ze te verwijderen, zodat ze niet meer voor IOB / COB worden meegenomen.

5. Als de je niet goed weet of jouw huidige IOB/COB correct is - schakel voor jouw eigen veiligheid de loop voor ten minste één DIA of Max-Carb-time uit - welk van de twee het grootste is.

### Acties na afloop van tijdswissel

Een goed moment om deze omschakeling te maken zou zijn wanneer jouw IOB laag is. Bijv. een uur voor een maaltijd zoals ontbijt, (eventuele recente bolussen in de pompgeschiedenis zullen kleine SMB correcties zijn geweest. Je COB en IOB moeten beide dicht bij nul zijn.)

1. Verander de Android tijdzone terug naar je huidige locatie en schakel de automatische tijdzone opnieuw in.
2. AndroidAPS zal je snel beginnen te waarschuwen dat de tijdsinstelling van de Combo niet overeenkomt met jouw telefoon. Dus werk de klok van de pomp handmatig bij via de knoppen van de pomp.
3. Op het AndroidAPS "Combo" scherm, klik op Vernieuwen.
4. Ga dan naar tabblad Behandelingen en kijk of daar behandelingen in de toekomst tussen staan. Er zouden er niet veel moeten zijn.
   
   * Druk NIET (!) op "verwijder behandelingen in de toekomst"
   * Klik één voor één op "verwijder" voor alle dubbele en toekomstige behandelingen. Dit zou de behandelingen ongeldig moeten maken in plaats van ze te verwijderen, zodat ze niet meer voor IOB / COB worden meegenomen.

5. Als de je niet goed weet of jouw huidige IOB/COB correct is - schakel voor jouw eigen veiligheid de loop voor ten minste één DIA of Max-Carb-time uit - welk van de twee het grootste is.

6. Je bent klaar.

## Accu-Chek Insight

* Wisselingen tussen zomer/wintertijd worden automatisch gedaan. Geen actie vereist.

## Andere pompen

* Deze functie is beschikbaar sinds AndroidAPS versie 2.2.
* Gedurende de nacht wordt er automatisch omgeschakeld. Om problemen te voorkomen zal de loop worden gedeactiveerd gedurende 3 uur NA de zomer/wintertijd wissel. Dit gebeurt om veiligheidsredenen (te hoge IOB als gevolg van dubbele bolus-invoer vóór tijdswisseling).
* Je ontvangt een melding op het hoofdscherm voorafgaand aan de tijdswissel, dat de loop tijdelijk zal worden uitgeschakeld. Dit bericht zal verschijnen zonder geluid, trilling oid.