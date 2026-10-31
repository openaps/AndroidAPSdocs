# Hoe gebruik je de Autotune plugin

De Autotune plugin is een implementatie van het OpenAPS autotune algoritme binnen AAPS. Het bekijkt je recente AAPS geschiedenis en stelt aanpassingen voor van je basaalstanden, ISF en koolhydraatratio (IC).

De Autotune plugin zit in AAPS sinds versie [3.4](#version3400), maar is standaard verborgen.

(autotune-how-autotune-calculates-adjustments)=
## Hoe Autotune aanpassingen berekent

Autotune kijkt terug naar je recente AAPS geschiedenis (CGM-waarden, bolussen, koolhydraten en tijdelijke basaalstanden) en berekent waar je **Profiel** (basaalstanden, ISF, koolhydraatratio) niet goed past bij wat er echt met je BG gebeurde.

Voor elk gegevenspunt van 5 minuten vergelijkt het de **echte verandering van je BG** met de verandering die je profiel voorspelde. De afwijking die daaruit komt, deelt het in bij een van drie groepen:

* afwijkingen zonder actieve koolhydraten en zonder insulinewerking (gebruikt om de **basaalstanden** per uur af te stemmen),
* afwijkingen na een bolus/correctie zonder koolhydraten (gebruikt om de **ISF** af te stemmen), of
* afwijkingen terwijl koolhydraten werden opgenomen (gebruikt om de **koolhydraatratio** af te stemmen).

Daarna kijkt het naar het patroon van afwijkingen in elke groep (met percentielen in plaats van een gewoon gemiddelde, zodat een paar onrustige gegevenspunten het resultaat niet scheeftrekken) en stelt een nieuwe waarde voor dat uur/die parameter voor.

Om te voorkomen dat één berekening te veel corrigeert, verschuift elke Autotune berekening een waarde maar een deel van de weg naar wat de gegevens aangeven: tot 10% voor ISF en koolhydraatratio, en tot 20% voor elk basaaldeel. De totale verschuiving wordt ook begrensd door de instellingen **Max autosens ratio** / **Min autosens ratio** (zie [Andere instellingen](#autotune-other-settings) hieronder): dezelfde grenzen die ook Autosens begrenzen. Daarom is Autotune bedoeld om steeds opnieuw te draaien (dag na dag, of elke nacht) en niet om na één berekening te vertrouwen: de resultaten moeten langzaam naar elkaar toe komen. Een grote sprong bij één berekening is een teken om je gegevens nog eens te controleren (vergeten koolhydraten, een slechte sensordag, _enz._) en niet om er blind op te vertrouwen.

Autotune kan op drie manieren draaien: handmatig, eenmalig vanuit de plugin (zoals hieronder beschreven), automatisch elke nacht via een [automatiseringsregel](#autotune-run-autotune-with-an-automation-rule), of helemaal buiten AAPS als losse opdrachtregeltool met geëxporteerde gegevens. Zo beschrijven sommige community-handleidingen het gebruik zonder telefoon waarop AAPS draait.

*Voor het onderliggende oref0 algoritme met alle wiskundige details, zie [de Autotune documentatie van OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html).*

## De Autotune plugin tonen

Maak een leeg bestand met de naam `enable_autotune` in de submap `extra` van de [AAPS map](#preferences-maintenance-settings) op je telefoon.

***LET OP: controleer in de AAPS instellingen waar je AAPS map is, en of je het bestand in de juiste map hebt gezet. Meerdere gebruikers hebben het bestand in de verkeerde map gezet.***

![Autotune inschakelen](../images/Autotune/Autotune_0.png)

Start **AAPS** opnieuw. Open daarna het **menu** (☰), kies **Configuratie**, dan de categorie **Algemeen**, en vink **Autotune** aan. De kaart toont dan **Instellingen** en **Plug-in openen**:

![Autotune aangevinkt in Configuratie > Algemeen](../images/v4/Configuration/configuration_general_autotune.png)

## Autotune gebruikersinterface

Tik op **Plug-in openen** op de kaart **Autotune** om het Autotune scherm te openen:

![Autotune scherm met het profiel, het aantal dagen data en een waarschuwing over het gekozen profiel](../images/Autotune/Autotune_1b.png)

- In het keuzemenu Profiel kun je het invoerprofiel kiezen dat je wilt afstemmen (standaard is je huidige actieve profiel gekozen)
  - Let op: elke keer dat je een nieuw profiel kiest, worden de vorige resultaten verwijderd en wordt **Aantal dagen data** op de standaardwaarde gezet
- Met **Aantal dagen data** (in oudere versies **Tune days**) kies je het aantal dagen dat in de berekening wordt gebruikt om je profiel af te stemmen. De minimumwaarde is 1 dag en het maximum is 30 dagen. Dit getal mag niet te klein zijn om correcte iteratieve en afgevlakte resultaten te krijgen (boven de 7 dagen bij elke berekening)
  - Let op: elke keer dat je het **Aantal dagen data** wijzigt, worden de vorige resultaten verwijderd
- Laatst uitgevoerd is een link die je laatste geldige berekening terughaalt. Heb je Autotune vandaag niet gestart, of zijn de vorige resultaten verwijderd doordat je een berekeningsparameter hierboven hebt gewijzigd, dan kun je de parameters en resultaten van de laatste geslaagde berekening terughalen.
- De waarschuwing toont je bijvoorbeeld informatie over het gekozen profiel (als je meerdere IC-waarden of meerdere ISF-waarden hebt)
  - Let op: de Autotune berekening werkt met maar één IC-waarde en één ISF-waarde. Er is nu geen Autotune algoritme dat een circadiaan IC- of ISF-profiel kan afstemmen. Als je invoerprofiel meerdere waarden heeft, zie je in het waarschuwingsdeel de gemiddelde waarde die wordt gebruikt om je profiel af te stemmen.
- De knop Controleer invoerprofiel opent de profielweergave, zodat je je profiel snel kunt controleren (eenheden, IC, ISF, basaal en streefwaarde)
  - Let op: Autotune stemt alleen je IC (één waarde), ISF (één waarde) en basaal (met verschillen over de dag) af. Eenheden en streefwaarde blijven in het uitvoerprofiel hetzelfde.

- "Autotune uitvoeren" start de Autotune berekening met het gekozen profiel en het gekozen aantal dagen data
  - Let op: de Autotune berekening kan lang duren. Als de berekening is gestart, kun je naar een ander scherm gaan (home, ...) en later terugkomen in de Autotune plugin om de resultaten te zien

  ![Autotune berekening starten](../images/Autotune/Autotune_2b.png)

- Tijdens de berekening zie je hieronder tussenresultaten

  - Let op: tijdens de berekening zijn de instellingen vergrendeld. Je kunt dan het gekozen invoerprofiel of het aantal dagen niet meer wijzigen. Wil je een nieuwe berekening starten met andere parameters, dan moet je wachten tot de huidige berekening klaar is.

  ![Autotune tijdens de berekening](../images/Autotune/Autotune_3b.png)

- Als de Autotune berekening klaar is, zie je het resultaat (afgestemd profiel) en daaronder vier knoppen.

  ![Autotune resultaat](../images/Autotune/Autotune_4b.png)

- Vergelijk altijd het invoerprofiel (kolom "Profile"), het uitvoerprofiel (kolom "Tuned") en het percentage verschil voor elke waarde (kolom "%").

- Voor de basaalstanden zie je ook het aantal "ontbrekende dagen". Je hebt ontbrekende dagen als Autotune niet genoeg gegevens heeft die als "basaal" zijn ingedeeld om de basaalstand voor die periode af te stemmen (bijvoorbeeld na elke maaltijd, als er koolhydraten worden opgenomen). Dit getal moet zo laag mogelijk zijn, vooral als basaal belangrijk is (bijvoorbeeld 's nachts of aan het eind van de middag)

- De knop "Vergelijk profielen" opent het scherm om profielen te vergelijken. Het invoerprofiel is blauw, en het uitvoerprofiel ("Tuned") is rood.

  - Let op: in het voorbeeld hieronder heeft het invoerprofiel verschillende IC- en ISF-waarden over de dag, maar het berekende uitvoerprofiel heeft één waarde. Is een circadiaan uitvoerprofiel belangrijk voor je, zie dan [Circadiaan IC- of ISF-profiel](#autotune-circadian-ic-or-isf-profile) hieronder.

  ![Autotune Vergelijk profielen](../images/Autotune/Autotune_5.png)

- Vertrouw je de resultaten (klein percentage verschil tussen invoerprofiel en uitvoerprofiel), dan kun je op de knop "Activeer profiel" klikken en daarna op OK klikken om te bevestigen.

  - Het activeren van het afgestemde profiel maakt automatisch een nieuw profiel "Tuned" in je profielenlijst (**Beheren → Profiel**).
  - Heb je al een profiel met de naam "Tuned" in **Beheren → Profiel**, dan wordt dat profiel vóór het activeren bijgewerkt met het berekende Autotune profiel

  ![Autotune Activeer profiel](../images/Autotune/Autotune_6.png)

- Vind je dat het afgestemde profiel moet worden aangepast (bijvoorbeeld omdat sommige verschillen te groot zijn), dan kun je op de knop "Kopiëren naar lokaal profiel" klikken

  - Er wordt een nieuw profiel gemaakt in **Beheren → Profiel**, met het voorvoegsel "Tuned" en de datum en tijd van de berekening

  ![Autotune Kopiëren naar lokaal profiel](../images/Autotune/Autotune_7.png)

- Daarna kun je het afgestemde profiel bewerken: open **Beheren** > **Profiel**, veeg naar de kaart met de naam "Tuned" en de datum en tijd van de berekening, en tik op de knop **Bewerk** (potlood)

  - de waarden in het profiel worden in het scherm afgerond op wat je pomp kan

  ![Autotune lokaal profiel bijwerken](../images/Autotune/Autotune_8.png)

- Wil je je invoerprofiel vervangen door het Autotune resultaat, klik dan op de knop "Invoerprofiel bijwerken" en bevestig het venster met OK

  - Let op: als je op "Activeer profiel" klikt na "Invoerprofiel bijwerken", activeer je je bijgewerkte profiel en niet het standaardprofiel "Tuned".

  ![Autotune Invoerprofiel bijwerken](../images/Autotune/Autotune_9.png)

- Als je je invoerprofiel hebt bijgewerkt, wordt de knop "Invoerprofiel bijwerken" vervangen door de knop "Invoerprofiel ongedaan maken" (zie schermafbeelding hieronder). Zo zie je meteen of je huidige invoerprofiel in **Beheren → Profiel** het resultaat van de laatste berekening al bevat of niet. Met deze knop kun je ook je invoerprofiel zonder Autotune resultaat terughalen

  ![Autotune Invoerprofiel bijwerken](../images/Autotune/Autotune_10.png)



## Autotune instellingen

(autotune-plugin-settings)=

### Autotune plugin instellingen

  ![Autotune instellingen in AAPS 4](../images/preferences/settings_autotune.png)

```{admonition} Only DEV
:class: note
De functie **Automatisch wisselen van profiel** is alleen beschikbaar in Dev/Engineering-modus.
```

- **Automatisch wisselen van profiel** (standaard Uit): zie [Autotune uitvoeren met een automatiseringsregel](#autotune-run-autotune-with-an-automation-rule) hieronder. Als je deze instelling op Aan zet, wordt het invoerprofiel automatisch bijgewerkt met het afgestemde profiel ("Tuned"), en wordt het geactiveerd.
  - **Wees voorzichtig: na het bijwerken en activeren van het afgestemde profiel zonder wijzigingen moet je de volgende dagen controleren dat het je loop echt verbetert, voordat je erop vertrouwt**

- **UAM als basaal aanmerken** (standaard Uit): deze instelling is voor gebruikers die AndroidAPS gebruiken zonder koolhydraten in te voeren (volledig UAM). Als deze instelling Uit staat, wordt UAM niet als basaal ingedeeld.
  - Let op: als er op een dag minstens één uur opname van koolhydraten is gemeten, worden alle gegevens die als "UAM" zijn ingedeeld als basaal ingedeeld, wat deze instelling ook is (Aan of Uit)
- **Standaardperiode** (standaard 5): met deze instelling bepaal je de standaardwaarde. Elke keer dat je een nieuw profiel kiest in de Autotune plugin, wordt het **Aantal dagen data** vervangen door deze standaardwaarde
- **Circadiane IC/ISF gebruiken** (standaard Uit): zie [Circadiaan IC- of ISF-profiel](#autotune-circadian-ic-or-isf-profile) hieronder.

(autotune-other-settings)=
### Overige instellingen

- Autotune gebruikt ook Max autosens ratio en Min autosens ratio om de verschillen te begrenzen. Je kunt deze waarden bekijken en aanpassen in [**Instellingen** > **Opname instellingen** > **Geavanceerde instellingen**](../SettingUpAaps/Preferences.md) (**Autosens max** en **Autosens min**).

  ![Autosens max en Autosens min in de geavanceerde opname instellingen](../images/preferences/settings_absorption_advanced.png)



## Geavanceerde functie

(autotune-circadian-ic-or-isf-profile)=

### Circadiaan IC- of ISF-profiel

- Heb je grote verschillen in IC en/of ISF in je profiel over de dag, en vertrouw je volledig op je tijden en verschillen over de dag, dan kun je **Circadiane IC/ISF gebruiken** inschakelen (in oudere versies "Apply average result in circadian IC/ISF")

  - Let op: de Autotune berekening wordt altijd gedaan met één waarde. Verschillen over de dag worden niet door Autotune afgestemd. Deze instelling past alleen het gemiddelde verschil dat voor IC en/of ISF is berekend toe op je waarden over de dag

- Zie de schermafbeelding hieronder: afgestemd profiel met "Apply average variation" Uit (links) en Aan (rechts)

  ![Autotune standaardscherm](../images/Autotune/Autotune_13.png)



### Bepaalde dagen van de week afstemmen

- Als je op het **oog**-icoon rechts van het veld **Aantal dagen data** tikt, zie je de keuze van de dagen. Je kunt kiezen welke dagen van de week in de Autotune berekening worden meegenomen (in de schermafbeelding hieronder zie je een voorbeeld voor "werkdagen", waarbij zaterdag en zondag uit de Autotune berekening zijn gehaald)
  - Als het aantal dagen in de Autotune berekening lager is dan het **Aantal dagen data**, zie je rechts van de dagenkeuze hoeveel dagen worden meegenomen (10 dagen in het voorbeeld hieronder)
  - Deze instelling geeft alleen goede resultaten als het aantal overgebleven dagen niet te klein is (bijvoorbeeld als je een profiel afstemt voor weekenddagen met alleen zaterdag en zondag gekozen, zet dan **Aantal dagen data** op minstens 21 of 28, zodat er 6 of 8 dagen in de Autotune berekening zitten)

  ![Autotune standaardscherm](../images/Autotune/Autotune_14b.png)

- Tijdens de Autotune berekening zie je de voortgang van de berekeningen ("Gedeeltelijk resultaat dag 1 / 4 afgestemd" in het voorbeeld hieronder, met zaterdag en zondag uitgesloten)

  ![Autotune standaardscherm](../images/Autotune/Autotune_15b.png)



(autotune-run-autotune-with-an-automation-rule)=

## Autotune uitvoeren met een automatiseringsregel

```{admonition} Only DEV
:class: note
De functie **Automatisch wisselen van profiel** is alleen beschikbaar in Dev/Engineering-modus.
```

De eerste stap is de juiste trigger kiezen voor een automatiseringsregel met Autotune:

Let op: zie [hier](../DailyLifeWithAaps/Automations.md) voor meer informatie over het maken van een automatiseringsregel.

- Kies de trigger Herhaal tijd: voer Autotune maar één keer per dag uit. Autotune is gemaakt om elke dag te draaien (bij elke nieuwe berekening schuif je één dag op, en al snel moeten de profielwijzigingen heel klein zijn)

  ![Autotune standaardscherm](../images/Autotune/Autotune_16.png)

- In het begin is het beter om Autotune overdag uit te voeren, zodat je de resultaten kunt controleren. Wil je Autotune 's nachts uitvoeren, dan moet je in de trigger 4:00 uur of later kiezen, zodat de huidige dag in de volgende Autotune berekening zit.

  ![Autotune standaardscherm](../images/Autotune/Autotune_17.png)

- Daarna kun je de actie **Autotune profiel** kiezen (in de groep **Loop & insuline**)

  ![Autotune standaardscherm](../images/Autotune/Autotune_18.png)

- Daarna kun je de parameters van de actie voor je berekening instellen. In een nieuwe actie toont **Selecteer profiel om aan te passen** het eerste profiel van je lokale profielenlijst, het veld **Afstemmen dagen** is leeg en alle dagen zijn gekozen. Kies het profiel om af te stemmen en vul het aantal **Afstemmen dagen** in (1 tot 30).

  ![Autotune standaardscherm](../images/Autotune/Autotune_19b.png)

- Vertrouw je na een paar dagen de Autotune resultaten volledig en is het percentage verandering klein, dan kun je in de [Autotune instellingen](#autotune-plugin-settings) "**Automatisch wisselen van profiel**" inschakelen. Dan wordt het afgestemde profiel na de berekening automatisch bijgewerkt en geactiveerd.

Let op: wil je automatisch profielen afstemmen voor bepaalde dagen van de week (bijvoorbeeld een profiel voor "weekenddagen" en een ander voor "werkdagen"), maak dan één regel per profiel. Kies dezelfde dagen in de trigger en in de Autotune actie. Het aantal afstemdagen moet hoog genoeg zijn, zodat de afstemming wordt gedaan met minstens 6 of 8 dagen. En vergeet niet in de trigger een tijd na 4:00 uur te kiezen...

- Hieronder zie je een voorbeeld van een regel die elke werkdag (maandag tot vrijdag) om 04:00 draait en het profiel "Normal" afstemt met 14 **Afstemmen dagen**, alleen werkdagen (dus worden maar 10 dagen in de Autotune berekening meegenomen).

  ![Autotune standaardscherm](../images/Autotune/Autotune_20b.png)



## Tips en trucs

Autotune werkt met de gegevens in je database. Heb je AAPS net op een nieuwe telefoon geïnstalleerd, dan moet je een aantal dagen wachten voordat je Autotune kunt starten met genoeg dagen voor bruikbare resultaten.

Autotune is alleen een hulpmiddel. Controleer regelmatig of je het eens bent met het berekende profiel. Twijfel je, verander dan de Autotune instellingen (bijvoorbeeld het aantal dagen), of kopieer de resultaten naar een lokaal profiel en pas het profiel aan voordat je het gebruikt.

Gebruik Autotune altijd eerst een aantal dagen handmatig om de resultaten te controleren voordat je ze toepast. Gebruik de automatisering pas als je de Autotune resultaten volledig vertrouwt en het verschil tussen het vorige profiel en het berekende profiel heel klein is geworden (nooit eerder)

- Autotune kan voor sommige gebruikers heel goed werken en voor anderen niet. Dus: **vertrouw je het Autotune resultaat niet, gebruik het dan niet**

Het is ook belangrijk om de Autotune resultaten te analyseren, om te begrijpen (of te proberen te begrijpen) waarom Autotune deze wijzigingen voorstelt

- je profiel kan in zijn geheel sterker of zwakker worden (bijvoorbeeld meer totale basaal samen met lagere ISF- en IC-waarden). dit kan samengaan met een aantal opeenvolgende dagen met een Autosens-correctie boven 100% (er is meer insuline nodig) of onder 100% (je bent gevoeliger)
- Soms stelt Autotune een andere verdeling voor tussen basaalstanden en IC/ISF (bijvoorbeeld lagere basaal en sterkere IC/ISF)

We raden aan om Autotune in de volgende gevallen niet te gebruiken:

- Je voert niet al je koolhydraten in
  - Voer je geen koolhydraten in om een hypo te corrigeren, dan ziet Autotune een onverwachte stijging van je BG waarde en verhoogt het je basaalstanden 4 uur eerder. Dat kan het tegenovergestelde zijn van wat je nodig hebt om een hypo te voorkomen, vooral midden in de nacht. Daarom is het belangrijk om alle koolhydraten in te voeren, vooral die om een hypo te corrigeren.
- Je hebt overdag veel periodes waarin UAM wordt gedetecteerd.
  - Heb je al je koolhydraten ingevoerd en je koolhydraten goed geschat?
  - Alle UAM-periodes (behalve als je op een dag geen koolhydraten invoert en "UAM als basaal indelen" uit staat): al je UAM-periodes worden als basaal ingedeeld. Dit kan je basaal sterk verhogen (veel meer dan nodig)

- Je koolhydraten worden heel langzaam opgenomen: als het grootste deel van je koolhydraatopname wordt berekend met de parameter min_5m_carbimpact (je ziet deze periodes aan een kleine oranje stip boven in de COB-curve), kan de berekening van COB fout zijn. Dat leidt tot foute resultaten.
  - Als je sport, ben je meestal gevoeliger en stijgt je BG niet veel. Daarom zie je tijdens of na het sporten vaak periodes met langzame koolhydraten. Maar heb je te vaak onverwacht langzame koolhydraatopname, dan heb je misschien een aanpassing van je profiel nodig (hogere IC-waarde) of is min_5m_carbimpact iets te hoog.
- Je hebt "heel slechte dagen", bijvoorbeeld uren vastzitten in een hyperglykemie, met heel veel insuline om weer binnen het bereik te komen, of na een sensorwissel lange periodes met foute BG waarden. Heb je de afgelopen weken maar één of twee "slechte dagen", dan kun je die dagen handmatig uitschakelen in de Autotune berekening om ze niet mee te tellen. En nogmaals: **controleer zorgvuldig of je de resultaten kunt vertrouwen**
- Als het percentage verandering te groot is
  - Je kunt proberen het aantal dagen te verhogen om gelijkmatigere resultaten te krijgen
