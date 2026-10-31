# Medtronic Pompen

De driver werkt niet met nieuwere modellen, ook niet met alle modellen die eindigen op G (530G, 600-serie [630G, 640G, 670G], 700-serie [770G, 780G], enz.).

De volgende combinaties van model en firmware zijn compatibel:

- 512/712 (elke firmwareversie)
- 515/715 (elke firmwareversie)
- 522/722 (elke firmwareversie)
- 523/723 (firmware 2.4A of lager)
- 554/754 EU-versie (firmware 2.6A of lager)
- 554/754 Canadese versie (firmware 2.7A of lager)

Hoe je de firmware van de pomp controleert, lees je in de [OpenAPS-documentatie](https://openaps.readthedocs.io/en/latest/docs/Gear%20Up/pump.html#how-to-check-pump-firmware-check-for-absence-of-pc-connect) of in [LoopDocs](https://loopkit.github.io/loopdocs/build/step3/#medtronic-pump-firmware).

    {contents} Inhoudsopgave
    :depth: 1
    :local: true

## Mogelijkheden van de pomp met AAPS

* Vereist een RileyLink-compatibel apparaat om met **AAPS** te communiceren.
* Automatische afhandeling van zomertijd en tijdzones.

## Benodigde hardware en software

- **Telefoon:** De Medtronic-driver zou moeten werken met elke Android-telefoon die Bluetooth-verbindingen ondersteunt. **BELANGRIJK: Elke telefoonfabrikant gebruikt Bluetooth op een eigen manier, dus elk telefoonmodel kan zich anders gedragen. Sommige telefoons gaan bijvoorbeeld anders om met het aan- en uitzetten van Bluetooth. Dit kan merkbaar zijn wanneer AAPS opnieuw verbinding moet maken met je Rileylink-apparaat.**
- **RileyLink-compatibel apparaat:** Android-telefoons kunnen niet met Medtronic-pompen communiceren zonder een apart apparaat dat de communicatie regelt. Dit apparaat maakt via Bluetooth verbinding met je telefoon en via een compatibele radioverbinding met je pomp. Het eerste apparaat van dit type heette Rileylink, maar er zijn nu meer opties, die soms extra functies bieden.
    
    - Rileylink is verkrijgbaar via [getrileylink.org](https://getrileylink.org/product/rileylink916)
    - Orangelink is verkrijgbaar via [getrileylink.org](https://getrileylink.org/product/orangelink)
    - Emalink (meerdere modellen) is verkrijgbaar via [github.com](https://github.com/sks01/EmaLink)
    - Gnarl (vraagt wat extra doe-het-zelfwerk): details op [github.com](https://github.com/ecc1/gnarl)

Een vergelijkingstabel van de verschillende Rileylink-compatibele apparaten vind je op [getrileylink.org](https://getrileylink.org/rileylink-compatible-hardware-comparison-chart)

(MedtronicPump-configuration-of-the-pump)=

## Configuratie van de pomp

Stel de volgende instellingen in op de pomp, zodat AAPS op afstand commando's kan sturen. Bij elke instelling staan tussen haakjes de stappen voor een Medtronic 715. De precieze stappen kunnen verschillen per pomptype en/of firmwareversie.

- **Zet de remote-modus aan op de pomp** (druk op de pomp op Act en ga naar Utilities -> Remote Options, kies On, kies op het volgende scherm Add ID en voeg een willekeurige ID toe, zoals 111111). Er moet minstens één ID in de lijst Remote ID staan, anders verwacht de pomp geen communicatie op afstand.
- **Stel Max Basal in** (druk op de pomp op Act en ga naar Basal en kies daarna Max Basal Rate). Als je deze waarde bijvoorbeeld op vier keer je hoogste standaard basaalstand zet, is een tijdelijke basaalstand van 400% mogelijk. De hoogste waarde die de pomp toestaat is 34,9 eenheden per uur.
- **Stel Max Bolus in** (druk op de pomp op Act en ga naar Bolus en kies daarna Max Bolus). Dit is de grootste bolus die de pomp accepteert. De hoogste waarde die de pomp toestaat is 25.
- **Zet het profiel op Standard**. (druk op de pomp op Act en ga naar Basal en daarna Select Patterns) De pomp heeft maar één profiel nodig, omdat AAPS de verschillende profielen op je telefoon beheert. Andere patronen zijn niet nodig.
- **Stel het type tijdelijke basaalstand in** (druk op de pomp op Act en ga naar Basal en daarna Temp Basal Type). Kies Absolute (niet Percent).

## Medtronic-configuratie van telefoon/AAPS

- **Koppel het RileyLink-compatibele apparaat niet via het Bluetooth-menu van je telefoon.** Als je koppelt via het Bluetooth-menu van je telefoon, kan AAPS je Rileylink-compatibele apparaat niet meer zien wanneer je de instructies hieronder volgt.
- Zet automatisch draaien van het scherm uit op je telefoon. Op sommige toestellen zorgt automatisch draaien van het scherm ervoor dat Bluetooth-sessies opnieuw starten. Dat geeft problemen met je Medtronic-pomp. 
- Er zijn twee manieren om je Medtronic-pomp in AAPS in te stellen:

1. De Setup Wizard gebruiken bij een nieuwe installatie
2. In **Configuratie** > **Pomp**, door **Medtronic** te kiezen
    
    ![Configuratie > Pomp met de Medtronic-plugin](../images/v4/Configuration/configuration_pump_list_3.png)
    
    Als hij gekozen is, toont de kaart **Medtronic** twee knoppen, **Instellingen** en **Plug-in openen**:
    
    ![De Medtronic-plugin gekozen in Configuratie > Pomp](../images/v4/Pumps/medtronic_enabled.png)
    
    **Instellingen** opent de instellingen van de Medtronic-driver:
    
    ![Instellingen van de Medtronic-driver](../images/v4/Pumps/medtronic_settings.png)
    
    **Plug-in openen** (of **Beheren** > **Pomp**) opent het Medtronic-pompscherm. Voordat er een pomp gekoppeld is, ziet het er zo uit:
    
    ![Medtronic-pompscherm vóór het koppelen](../images/v4/Pumps/medtronic_pump_screen.png)

Wanneer je je Medtronic-pomp instelt met de Setup Wizard, kan het gebeuren dat je de installatie niet kunt afronden door Bluetooth-problemen (je krijgt bijvoorbeeld geen verbinding met de pomp). Kies in dat geval de optie virtuele pomp om de configuratie af te ronden. Daarna kun je het probleem verder oplossen met optie 2.

Om AAPS met je Medtronic-pomp te laten werken, stel je de volgende punten in bij **Instellingen** (zie de afbeelding van de instellingen hierboven):

- **Serienummer van de pomp**: Staat op de achterkant van je pomp en begint met SN. Voer alleen de 6 cijfers in, zonder letters (bijv. 123456).
- **Pomp Type**: Het model pomp dat je gebruikt (bijv. 522). 
- **Pomp Frequentie**: Er zijn twee opties, afhankelijk van waar je pomp oorspronkelijk is verkocht. Kijk bij de [Veelgestelde vragen](#MedtronicPump-faq) als je niet zeker weet welke optie je moet kiezen): 
    - voor VS & Canada is de gebruikte frequentie 916 MHz
    - voor Wereldwijd is de gebruikte frequentie 868 MHz
- **Max Basaal op Pomp (E/u)**: Dit moet gelijk zijn aan de instelling op je pomp (zie Configuratie van de pomp hierboven). Ook deze instelling moet je zorgvuldig kiezen, omdat ze bepaalt hoeveel AAPS via je basaalstand kan toedienen. Hiermee stel je in feite de maximale tijdelijke basaalstand in. Als je deze waarde bijvoorbeeld op vier keer je hoogste standaard basaalstand zet, is een tijdelijke basaalstand van 400% mogelijk. De hoogste waarde die de pomp toestaat is 34,9 eenheden per uur.
- **Max Bolus op Pomp (E)** (per uur): Dit moet gelijk zijn aan de instelling op je pomp (zie Configuratie van de pomp hierboven). Denk goed na over deze instelling, want ze bepaalt hoe groot een bolus van AAPS ooit kan zijn.
- **Vertraging voordat Bolus wordt gestart (s)**: Het aantal seconden tussen het geven van een bolus en het moment waarop het commando echt naar de pomp gaat. In deze tijd kun je de bolus annuleren als een bolus per ongeluk is verzonden. Het is niet mogelijk om een gestarte bolus via AAPS te annuleren. Een bolus die al gestart is, kun je alleen stoppen door de pomp handmatig te pauzeren (suspend) en daarna weer te hervatten.
- **Medtronic Codering**: Bepaalt of de Medtronic-codering wordt uitgevoerd. Kies bij voorkeur Hardware-codering (dus uitgevoerd door het Rileylink-compatibele apparaat), omdat er dan minder data wordt verzonden. Software-codering (dus uitgevoerd door AAPS) kan helpen als de verbinding vaak wegvalt. Deze instelling wordt genegeerd als je Rileylink-apparaat firmwareversie 0.x heeft.
- **Batterij type (batterij weergave)**: Om de resterende batterijlading goed te bepalen, moet je het type AAA-batterij kiezen dat je gebruikt. Als je iets anders kiest dan de eenvoudige weergave, toont AAPS het berekende resterende batterijpercentage en de spanning (volt). Je kunt kiezen uit:
    
    - Niet geselecteerd (Eenvoudige weergave)
    - Alkaline (uitgebreide weergave)
    - Lithium (uitgebreide weergave)
    - NiZn (uitgebreide weergave)
    - NiMH (Uitgebreide weergave)
- **Gebruik scannen**: Zet Bluetooth-scannen aan voordat er verbinding wordt gemaakt met je Rileylink-compatibele apparaten. Dit maakt de verbinding met het apparaat betrouwbaarder.

- **Toon batterijniveau van OrangeLink/EmaLink/DiaLink**: Deze functie werkt alleen met nieuwere link-apparaten, zoals de EmaLink of OrangeLink. De waarde wordt getoond als **Batterij van de rileylink** op het Medtronic-pompscherm.
- **Stel neutraal tijdelijk basaal in**: Standaard piepen Medtronic-pompen elk heel uur als er een tijdelijke basaalstand actief is. Deze optie kan het aantal piepjes verminderen: AAPS onderbreekt een tijdelijke basaalstand bij de wisseling van het uur, zodat de pomp niet piept.

(pairing-your-rileylink-compatible-device)=

### Je RileyLink-compatibele apparaat koppelen

Je koppelt je RileyLink-compatibele apparaat vanuit het Medtronic-pompscherm, niet vanuit het Bluetooth-menu van je telefoon:

- Open het pompscherm (**Beheren** > **Pomp**, of **Plug-in openen** op de Medtronic-kaart in **Configuratie** > **Pomp**).
- Tik op **Koppel RileyLink**. **AAPS** zoekt naar RileyLink-compatibele apparaten in de buurt.
- Tik op je apparaat in de lijst. Wanneer **RileyLink succesvol gekoppeld** verschijnt, tik je op **OK**.

## Medtronic-pompscherm

Ga naar **Beheren** > **Pomp** om het Medtronic-pompscherm te openen. Het pompscherm toont de huidige status van de pomp en een paar acties die alleen voor Medtronic zijn (zie de afbeelding van het pompscherm hierboven).

- **RileyLink Status**: De huidige status van de verbinding tussen je telefoon en het Rileylink-compatibele apparaat. Hier moet altijd Verbonden staan. Bij elke andere status moet je misschien zelf iets doen. 
- **Batterij van de rileylink**: Het huidige batterijniveau van je EmaLink- of OrangeLink-apparaat. Wordt alleen getoond als **Toon batterijniveau van OrangeLink/EmaLink/DiaLink** aan staat in de Medtronic-instellingen.
- **Pompstatus**: De huidige status van de verbinding met de pomp. De pomp is niet steeds verbonden, daarom zie je hier meestal het slaap-icoon. Er zijn nog meer mogelijke statussen, zoals "Actief worden" wanneer AAPS een commando probeert te sturen, of andere pompcommando's zoals "Tijd ophalen", "Instellen Tijdelijke Basaal", enz.
- **Batterij**: Toont de batterijstatus op basis van de waarde die je hebt gekozen bij **Batterij type (batterij weergave)** in de Medtronic-instellingen.
- **Laatste verbinding**: Hoe lang geleden de laatste geslaagde verbinding met de pomp was.
- **Laatste bolus**: Hoe lang geleden de laatste geslaagde bolus is gegeven.
- **Basis basaalstand**: De basis basaalstand die in dit uur op de pomp loopt volgens je actieve profiel.
- **Tijdelijk basaal**: De tijdelijke basaalstand die nu wordt toegediend. Dit kan ook 0 eenheden per uur zijn.
- **Reservoir**: Hoeveel insuline er in het reservoir zit (minstens elk uur bijgewerkt).
- **Foutmeldingen**: Een foutmelding als er een probleem is (meestal bij een fout in de configuratie).

Onderaan het scherm staan deze knoppen:

- **Vernieuwen** haalt de huidige status van de pomp opnieuw op. Gebruik dit alleen als de verbinding lange tijd weg was, want dan worden alle gegevens opnieuw opgehaald (historie ophalen, tijd ophalen/instellen, profiel ophalen, batterijstatus ophalen, enz.).
- **Koppel RileyLink**: Zoekt en koppelt je RileyLink-compatibele apparaat (zie [hierboven](#pairing-your-rileylink-compatible-device)).
- **Historiek**: Toont de pompgeschiedenis (zie [hieronder](#MedtronicPump-pump-history)).
- **RL Statistieken**: Toont de RL-statistieken (zie [hieronder](#MedtronicPump-rl-status-rileylink-status)).
- **Ontwaak en maak verbinding** en **Reset RileyLink**: Zie [Acties](#medtronic-actions) hieronder.
- **Bolus Blokkering wissen**: Wordt alleen kort na een bolus getoond, terwijl **AAPS** wacht tot de pomp klaar is met toedienen. Als je erop tikt, stopt dit wachten.

(MedtronicPump-pump-history)=

## Pompgeschiedenis

![Het scherm Historiek met de filterknoppen](../images/Medtronic03.png)

De pompgeschiedenis wordt elke 5 minuten opgehaald en lokaal opgeslagen. Alleen de geschiedenis van de laatste 24 uur wordt bewaard. Zo kun je makkelijk zien wat de pomp heeft gedaan, als dat nodig is. Alleen gegevens die voor AAPS belangrijk zijn worden opgeslagen. Configuratiefuncties zonder belang voor AAPS worden niet opgeslagen.

Tik op **Historiek** op het pompscherm om de geschiedenis te openen. Standaard is **Alle** gekozen. Tik bovenaan op een van de filterknoppen (bijvoorbeeld **Bolussen**, **Basaalstanden** of **Alarmen**) om maar één soort gegevens te tonen.

(MedtronicPump-rl-status-rileylink-status)=

## RL Status (RileyLink Status)

![RileyLink Status - Instellingen](../images/Medtronic04.png) ![RileyLink Status - Geschiedenis](../images/Medtronic05.png)

Het venster RL Status heeft twee tabbladen:

- **Instellingen**: Toont instellingen van het RileyLink-compatibele apparaat: ingesteld adres, verbonden apparaat, verbindingsstatus, verbindingsfout en de firmwareversies van de RileyLink. Apparaattype is altijd Medtronic Pomp, Model is jouw model, Serienummer is het ingestelde serienummer, Pompfrequentie toont welke frequentie je gebruikt, Laatst gebruikte frequentie is de frequentie die het laatst is gebruikt.
- **Geschiedenis**: Toont de communicatiegeschiedenis. Regels met RileyLink tonen statuswijzigingen van de RileyLink, regels met Medtronic tonen welke commando's naar de pomp zijn gestuurd.

(medtronic-actions)=

## Acties

Met de Medtronic-driver zijn er twee extra acties op het pompscherm (**Beheren** > **Pomp**):

- **Ontwaak en maak verbinding** - Als AAPS lange tijd geen verbinding heeft gemaakt met je pomp (dat zou elke 5 minuten moeten gebeuren), kun je een Tune Up afdwingen. AAPS probeert dan contact te maken met je pomp door alle radiofrequenties te doorzoeken die je pomp kan gebruiken. Als er een verbinding lukt, wordt de werkende frequentie als standaard ingesteld. Terwijl de Tune Up loopt, is dat te zien aan de RileyLink-status op het pompscherm. Als een Tune Up mislukt (bijvoorbeeld omdat de pomp buiten bereik was), probeert **AAPS** het zelf ongeveer elke 10 minuten opnieuw.
- **Reset RileyLink** - Als je je RileyLink-compatibele apparaat hebt gereset, moet je deze actie misschien gebruiken, zodat het apparaat opnieuw wordt ingesteld (frequentie, frequentietype en codering).

## Belangrijke opmerkingen

### Extra aandacht nodig bij de configuratie van NS

AAPS gebruikt het serienummer voor synchronisatie, en het serienummer is zichtbaar in NS. Met het serienummer van een oude Medtronic-pomp kan iemand de pomp op afstand bedienen. Beveilig je NS-site daarom extra goed, zodat het serienummer van je pomp niet uitlekt. Zie https://nightscout.github.io/nightscout/security/

### OpenAPS-gebruikers

OpenAPS-gebruikers moeten weten dat AAPS met Medtronic een heel andere aanpak gebruikt dan OpenAPS. Met AAPS bedien je de pomp vooral via je telefoon. Bij normaal gebruik heb je het pompmenu waarschijnlijk alleen nodig om het reservoir te wisselen. Dat is heel anders dan bij OpenAPS, waar ten minste een deel van een bolus meestal via de quick bolus-knoppen wordt gegeven. Als de pomp gebruikt wordt om handmatig een bolus te geven, kunnen er problemen ontstaan als AAPS op hetzelfde moment een bolus probeert te geven. Er zijn controles om problemen in zulke gevallen te voorkomen, maar vermijd dit toch zoveel mogelijk.

### Logbestanden

Wil je problemen met je Medtronic-pomp onderzoeken, kies dan het menu-icoon linksboven in het scherm, en daarna Onderhoud en Logboekinstellingen. Controleer bij het oplossen van Medtronic-problemen de logcategorieën Pump, PumpComm en PumpBTComm.

### Medtronic CGM

Medtronic CGM wordt op dit moment NIET ondersteund.

### Handmatig gebruik van de pomp

Geef geen handmatige bolussen en stel geen TBR's in op je pomp. Al zulke commando's moeten via AAPS worden gestuurd. Gebruik je toch handmatige commando's, laat er dan minstens 3 minuten tussen zitten om het risico op problemen te verkleinen.

### Wisselen van tijdzone en zomertijd (DST) of reizen met een Medtronic-pomp en AAPS

AAPS herkent automatisch een wisseling van tijdzone en past de tijd van de pomp aan wanneer je telefoon naar de nieuwe tijd gaat.

Reizen naar het oosten betekent dat er uren bij de huidige tijd komen (bijv. van GMT+0 naar GMT+2). Dat geeft geen problemen, want er is geen overlap (je kunt bijvoorbeeld niet twee keer hetzelfde uur hebben). Reizen naar het westen kan wel problemen geven, omdat je dan in feite terug in de tijd gaat. Dat kan leiden tot onjuiste IOB-gegevens.

De ontwikkelaars kennen de problemen bij reizen naar het westen en werken aan een mogelijke oplossing. Zie https://github.com/andyrozman/RileyLinkAAPS/issues/145 voor meer details. Wees je er voorlopig van bewust dat dit probleem kan optreden, en let goed op wanneer je van tijdzone wisselt.

### Is GNARL een volledig compatibel Rileylink-compatibel apparaat?

De GNARL-code ondersteunt alle functies die de Medtronic-driver in AAPS gebruikt. Hij is dus volledig compatibel. Let op: dit vraagt extra werk, want je moet zelf compatibele hardware regelen en daarna de GNARL-code op het apparaat zetten.

**Opmerking van de auteur:** De GNARL-software is nog experimenteel en weinig getest. Beschouw hem niet als even veilig als een RileyLink.

(MedtronicPump-faq)=

## Veelgestelde vragen

(MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)=

### Wat moet ik doen als ik de verbinding met de RileyLink en/of de pomp verlies?

Er zijn verschillende dingen die je kunt proberen om verbindingsproblemen op te lossen.

- Tik op **Ontwaak en maak verbinding** op het pompscherm (**Beheren** > **Pomp**), zoals hierboven beschreven.
- Zet Bluetooth op je telefoon uit, wacht 10 seconden en zet het weer aan. Zo moet het Rileylink-apparaat opnieuw verbinding maken met de telefoon.
- Reset het Rileylink-apparaat. Tik daarna op **Reset RileyLink** op het pompscherm (**Beheren** > **Pomp**).
- Andere gebruikers hebben gemerkt dat de volgende stappen de verbinding herstellen als andere methoden niet werken: 
    1. Start de telefoon opnieuw op
    2. Start het Rileylink-apparaat opnieuw op *terwijl* de telefoon opnieuw opstart
    3. Open AAPS en laat de verbinding herstellen

### Hoe weet ik welke frequentie mijn pomp gebruikt?

![Pompmodel](../images/Medtronic06.png)

Op de achterkant van de pomp staat een regel met je modelnummer en een speciale code van 3 letters. De eerste twee letters bepalen het frequentietype, de laatste letter de kleur. Mogelijke waarden voor de frequentie zijn:

- NA - Noord-Amerika (bij de frequentiekeuze moet je "VS & Canada (916 MHz)" kiezen)
- CA - Canada (bij de frequentiekeuze moet je "VS & Canada (916 MHz)" kiezen)
- WW - Wereldwijd (bij de frequentiekeuze moet je "Wereldwijd (868 Mhz)" kiezen)

(MedtronicPump-pump-unreachable)=

### De fout "pump unreachable" (pomp niet bereikbaar) oplossen

Sommige Medtronic-pompen melden na een update van **AAPS** de fout "pump unreachable" (pomp niet bereikbaar). Verander het type codering om dit op te lossen:

1. Ga naar **Configuratie** > **Pomp** en tik op **Instellingen** op de kaart **Medtronic**.
2. Zet **Medtronic Codering** op **Hardware 4b6b codering**.

## Waar je hulp kunt krijgen

De Medtronic-driver wordt door de community ontwikkeld, op **vrijwillige** basis. Doe het volgende voordat je om hulp vraagt:

1. **Lees** het betreffende deel van deze documentatie om te controleren hoe de functie hoort te werken.
2. **Vraag** het op het kanaal *#AAPS* op [Discord](https://discord.gg/4fQUWHZ4Mw), of in een van de andere [community kanalen](../GettingHelp/WhereCanIGetHelp.md).
3. **Meld een bug**: zoek eerst in de [bestaande issues](https://github.com/nightscout/AndroidAPS/issues). Staat jouw probleem er niet bij, open dan een [nieuwe issue](https://github.com/nightscout/AndroidAPS/issues) en voeg je [logbestanden](../GettingHelp/AccessingLogFiles.md) toe.

Beschrijf als je om hulp vraagt: merk en model van je telefoon, Android versie, **AAPS** versie, en een duidelijke beschrijving van het probleem in gewone taal (wat er is veranderd, wanneer het voor het laatst werkte).