# Wisselen van tijdzone en zomertijd

Als de tijdzone van je telefoon wijzigt, berekent **AAPS** ongeveer 10 seconden na de wijziging de **IOB**, basaal en gevoeligheid voor het verleden helemaal opnieuw. Tijdens deze berekening kan het even duren voordat de grafieken en waarden op het hoofdscherm worden bijgewerkt.

(timezone-traveling-with-pumps)=

## Wisselen van tijdzone bij Omnipod Dash

* Vernieuw de pompstatus in **Beheren → Pomp**
* Kies tijdelijk een ander **Profiel** en schakel daarna terug naar je oorspronkelijke of gewenste **Profiel**

## Wisselen van tijdzone bij DanaR, Koreaanse DanaR

Het wijzigen van de tijdzone in de telefoon is geen probleem omdat de pompgeschiedenis niet wordt gebruikt.

(timezone-traveling-danarv2-danars)=

## Wisselen van tijdzone bij DanaRv2, DanaRS, Dana-i

Deze pompen vragen extra aandacht, omdat **AAPS** de geschiedenis van de pomp gebruikt, maar de gegevens in de pomp geen tijdzone hebben. **Dit betekent: als je de tijdzone op je telefoon wijzigt, worden de gegevens met een andere tijdzone gelezen en worden ze dubbel opgeslagen.**

Om dit te voorkomen zijn er twee mogelijkheden:

### Optie 1: Houd de tijdzone van thuis en doe een tijdverschuiving van je profiel

* Schakel 'Automatische datum en tijd' uit in de instellingen van je telefoon (handmatig de tijdzone wijzigen).

* Je telefoon moet tijdens de hele reis de standaardtijd van thuis houden.

* Verschuif de tijd van je **Profiel** met het tijdverschil tussen de tijd thuis en de tijd op je bestemming.
   
   * Tik op de naam van het **Profiel** op het hoofdscherm om het [profielscherm](#ProfileSwitch-manage-v4) te openen
   * Kies je **Profiel** en tik op **▶ Activeer**
   * Stel '**Tijd verschuiving**' in volgens je bestemming en tik op **Activeer**.
   
   ![Profiel wissel met tijdverschuiving](../images/ProfileSwitchTimeShift2.png)
   
   * bijv. Wenen -> New York: **Profiel wissel** +6 uur
   * bijv. Wenen -> Sydney: **Profiel wissel** -8 uur

### Optie 2: pomphistorie wissen

* Schakel 'Automatische datum en tijd' uit in je telefooninstellingen (handmatige tijdzonewijziging)

Als je uit het vliegtuig stapt:

* zet pomp uit
* wijzig tijdzone op je telefoon
* telefoon uitschakelen, pomp aanzetten
* geschiedenis wissen in pomp
* verander tijd in pomp
* telefoon aanzetten
* laat de telefoon verbinding maken met de pomp en de tijd precies afstellen

(timezone-traveling-insight)=

## Wisselen van tijdzone bij Insight

Het stuurprogramma past de tijd van de pomp automatisch aan de tijd van de telefoon aan.

De Insight slaat ook in de geschiedenis op op welk moment de tijd is gewijzigd, en van welke (oude) tijd naar welke (nieuwe) tijd. Zo kan **AAPS** ondanks de tijdwijziging de juiste tijd bepalen.

Dit kan onnauwkeurigheden geven in de **TDD's**. Maar dat zou geen probleem moeten zijn.

Gebruikers van de Insight hoeven zich dus geen zorgen te maken over wijzigingen van tijdzone en tijd. Er is één uitzondering op deze regel: de Insight-pomp heeft een kleine interne batterij die onder andere de klok van stroom voorziet. terwijl je de "echte" batterij vervangt. Als het vervangen van de batterij te lang duurt, raakt deze interne batterij leeg. De klok wordt dan gereset en je moet tijd en datum invoeren nadat je een nieuwe batterij hebt geplaatst. In dat geval worden alle gegevens van vóór de batterijwissel overgeslagen in de berekeningen van AAPS, omdat de juiste tijd niet goed bepaald kan worden.

## Wisselen van tijdzone bij Accu-Chek Combo

De [Combo-driver](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) past de tijd van de pomp automatisch aan de tijd van de telefoon aan. De Combo kan geen tijdzones opslaan, alleen de lokale tijd. Dat is precies wat de driver in de pomp zet. Daarnaast slaat het de tijdzone op in de lokale instellingen van AAPS, zodat de lokale tijd van de pomp kan worden omgezet naar een volledige tijdstempel met tijdzoneverschil. De gebruiker hoeft niets te doen; als de tijd op de Combo te veel afwijkt van de huidige tijd van de telefoon, wordt de tijd van de pomp automatisch aangepast.

Let wel: dit duurt even, omdat het alleen in de remote-terminal-modus kan, en die is meestal traag. Dit is een beperking van de Combo die niet op te lossen is.

## Wisselen van tijdzone bij Medtrum

Het stuurprogramma past de tijd van de pomp automatisch aan de tijd van de telefoon aan.

Bij een wissel van tijdzone blijft de geschiedenis intact; alleen de TDD kan afwijken. Als je de tijd op de telefoon handmatig wijzigt, kan dat problemen geven met de geschiedenis en de **IOB**. Controleer de **IOB** goed als je de tijd handmatig wijzigt.

When the time zone or time changes running **TBRs** are stopped.

(time-adjustment-daylight-savings-time-dst)=

## ZOMERTIJD (DST)

Tijdaanpassing voor zomertijd.

Afhankelijk van je pomp en CGM kunnen sprongen in de tijd ervoor zorgen dat **AAPS** niet goed werkt. Bij sommige pompen kun je de tijdzone beter aanpassen terwijl je wakker bent, vóór de overgang naar zomertijd, en niet tijdens de nacht.

### Automatische aanpassing aan zomertijd voor de meeste pompen

* De **Loop** wordt echter 3 uur NA de overgang naar zomertijd (meestal vanaf 1 uur 's nachts) uitgeschakeld, en **AAPS** valt dan terug op de basale achtergrondstand uit je **Profiel**. Dit gebeurt om veiligheidsredenen: de **IOB** kan te hoog zijn door een dubbel getelde bolus van vóór de tijdwissel.
* Maak na de tijdwissel een **Profiel wissel** naar het gewenste **Profiel** om de **Loop** weer aan te zetten: tik op de profielnaam op het hoofdscherm en dan op de ronde knop **▶** (zie [Een profiel activeren](#ProfileSwitch-manage-v4)).
* Je krijgt vóór de tijdwissel ook een melding op het hoofdscherm van **AAPS** dat de **Loop** tijdelijk is uitgeschakeld. Deze melding verschijnt zonder pieptoon, trilling of ander geluid.

Als je een bolus geeft met de calculator van **AAPS**, gebruik dan geen **COB**- en **IOB**-gegevens, tenzij je zeker weet dat deze gegevens helemaal kloppen. Wees voorzichtig en gebruik deze functie een paar uur na de tijdwissel niet.

### Zomertijd bij Accu-Chek Insight

* Wisselingen tussen zomer/wintertijd worden automatisch gedaan. Geen actie vereist.

### Zomertijd bij Accu-Chek Combo

* Wisselingen tussen zomer/wintertijd worden automatisch gedaan. Geen actie vereist.

### Zomertijd bij Medtrum

* Wisselingen tussen zomer/wintertijd worden automatisch gedaan. Geen actie vereist.

### Zomertijd bij Omnipod Dash

* Either allow **AAPS** to temporarily default to background basal after DST has taken place as explained above.
* Otherwise, if you do not want **AAPS** to temporarily default to background basal overnight, you can change the time zone the day before DST is due to take place to avoid overnight disruption. LET OP: DEZE OPTIE KAN ERVOOR ZORGEN DAT JE POD TE VROEG VERLOOPT. NEEM ALTIJD RESERVEMATERIAAL MEE ALS JE VOOR DE FUNCTIE HIERONDER KIEST.

#### Acties voorafgaand aan tijdswissel

1. Zet alle instellingen van de telefoon UIT die de tijdzone automatisch instellen, zodat je zelf een gewenste tijdzone zonder zomertijd kunt kiezen. Hoe je dit aanzet, hangt af van je smartphone en je Android-versie.
   
   * Sommige telefoons hebben twee instellingen: één om de tijd automatisch in te stellen (die laat je het beste aan) en één om de tijdzone automatisch in te stellen (die moet je UIT zetten: **Set automatically** (Automatisch instellen) onder **Time zone** (Tijdzone) in de schermafbeelding hieronder).
   * Helaas hebben sommige Android-versies één schakelaar om zowel de tijd als de tijdzone automatisch in te stellen. Zet deze instelling voorlopig uit.

![Screenshot_20260329-110315 (1)](../images/570963727-ca40c1c6-1697-4832-ae10-5cf6a1dc0bce.png)

2. Zoek een tijdzone met dezelfde tijd als op je huidige locatie, maar zonder zomertijd.
   
   * Een lijst van deze landen is beschikbaar op [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * Voor Midden-Europese Tijd (CET) kan dit "Brazzaville" (Congo) zijn. Zet de tijdzone van je telefoon op Congo.

![Screenshot_20260329-111830](../images/570966323-b7b7f738-f91e-40df-ad79-f404fbfb9ae6.png)

3. Vernieuw in **AAPS** je pomp en schakel naar je gewenste **Profiel**.

4. Check **AAPS's** **IOB** and **COB** and if this is inaccurate disable the **Loop** for at least one DIA or the maximum carb absorption time (**Absorption max time**), whichever is longer.

5. Acties na de tijdwissel. Een goed moment om terug te gaan naar de lokale tijdzone is als de **IOB** laag is. Bijvoorbeeld een uur voor een maaltijd, zoals het ontbijt. Het beste is als je **COB** en **IOB** allebei bijna nul zijn.