# Accu Chek Combo Pomp

**Deze software is onderdeel van een doe-het-zelf oplossing en is niet een product, maar vraagt JOU te lezen, leren en te begrijpen hoe het systeem werkt en hoe je het kunt gebruiken. Het neemt niet je gehele diabetes management van je over, maar stelt je wel in staat om je diabetes beter onder controle te krijgen en je kwaliteit van leven te verhogen, als je bereid bent de benodigde tijd erin te investeren. Haast je niet, maar geef jezelf de tijd om te leren. Jij alleen bent verantwoordelijk voor wat je ermee doet.**

## Hardware vereisten

- Een Roche Accu-Chek Combo pomp (elke firmware is geschikt).
- Een Smartpix of Realtyme apparaatje met bijbehorende 360 Configuratie software om de pomp te configureren. Op verzoek stuurt Roche de Smartpix met software gratis op aan haar klanten.
- Een geschikte telefoon: een Android telefoon met als Operating System LineageOS 14.1 (of hoger) - ook wel bekend als CyanogenMod - of met Android 8.1 (Oreo). De LineageOS 14.1 dient een recente versie te zijn, van minimaal Juni 2017, aangezien toen de functionaliteit beschikbaar is gekomen, die nodig is om de Combo pomp te kunnen verbinden met de telefoon. Een lijst met telefoons vind je in dit document: [AAPS Phones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). NB: deze lijst is niet compleet en bevat persoonlijke ervaringen. Je wordt gevraagd om jouw eigen ervaring hier ook aan toe te voegen en zodoende anderen te helpen (deze projecten draaien allemaal om #payitforward mentaliteit).

- Weet dat er nog steeds issues zijn met AAPS op Android 8.1, ook al kan deze wel communiceren met de Combo. Voor ervaren gebruikers is het mogelijk om de de Pairing op een geroote telefoon te doen en deze over te zetten naar een andere geroote telefoon met ruffy/AAPS. Hiermee wordt het mogelijk om het over te zetten naar telefoons met Android <8.1, maar dit is niet uitgebreid getest: https://github.com/gregorybel/combo-pairing/blob/master/README.md

## Beperkingen

- Extended bolus en multiwave bolus worden niet ondersteund (Zie [Extended Carbs](../Usage/Extended-Carbs.rst) voor een alternatief)
- Slechts één basaal profiel wordt ondersteund.
- Als je in de pomp meer dan één basaalprofiel instelt of wanneer je extended bolus of multiwave bolus geeft vanaf de pomp dan zal dit ingrijpen op de TBR en zal AAPS de loop dwingen tot een beperkte gebruiksmodus voor de duur van 6 uur, omdat de loop onder deze omstandigheden anders niet veilig kan blijven werken.
- Het is momenteel niet mogelijk om de tijd en datum automatisch in te stellen op de pomp, waardoor zomer- en wintertijd handmatig moeten worden ingesteld. Je kunt op de telefoon het automatische bijwerken van de zomer- en winter tijd uitzetten in de avond en in de ochtend weer aanzetten, tegelijk met het handmatig wijzigen van de tijd op de pomp. Zo voorkom je alarmen in de nacht.
- Op dit moment worden alleen basaal standen tussen de 0.05 en 10 E/uur ondersteund. Dit geldt ook voor profielwissels, bijvoorbeeld bij een verhoging tot 200% mag de hoogste basaalstand niet boven de 5 E/uur liggen omdat het nog wordt verdubbeld. Dit geldt ook voor de ondergrens: bij een verlaging tot 50% moet de laagste basaalstand minstens 0,10 E/uur zijn.
- Als de loop een actieve TBR (tijdelijke basaalstand) eigenlijk zou willen cancellen, dan zal de Combo een TBR instellen van 90% of 110% gedurende 15 minuten. Dit is omdat het annuleren van een TBR een trilalarm geeft op de pomp. Op deze manier worden veelvuldige trilalarmen vermeden.
- Zo nu en dan (ruwweg elke paar dagen) gebeurt het dat AAPS het TBR CANCELLED alarm niet automatisch kan onderdrukken. Dan moet jij zelf de Vernieuw-knop in AAPS gebruiken om de waarschuwing in AAPS te krijgen, of je moet het alarm wegdrukken via de knoppen op je pomp.
- De stabiliteit van de Bluetooth verbinding verschilt per telefoon, waardoor "pomp niet bereikbaar" foutmeldingen kunnen ontstaan indien er geen verbinding meer gemaakt kan worden met de pomp. Als deze foutmelding verschijnt, zorg ervoor dat Bluetooth is ingeschakeld, druk op de knop Vernieuwen in het tabblad Combo om te zien of dit is veroorzaakt door een tijdelijk probleem, en als er nog geen verbinding kan worden gemaakt herstart je de telefoon. Meestal is het probleem dan opgelost. Er is een ander probleem wanneer een herstart niet helpt, maar een knop op de pomp moet worden ingedrukt (hierdoor wordt de Bluetooth van de pomp gereset), voordat de pomp opnieuw verbindingen kan maken met de telefoon. Er is heel weinig dat kan worden gedaan om beide problemen op dit moment te verhelpen. Dus als je deze fouten vaak ziet, is je enige optie op dit moment om een andere telefoon te zoeken die goed werkt met AndroidAPS en de Combo (zie hierboven).
- Het toedienen van een bolus vanaf de pomp zal niet altijd optijd gedetecteerd worden (word gecontroleerd als AAPS met de pomp verbindt) dit kan in het ergste geval tot wel 20 minuten duren. Voordat AAPS een commando voor een bolus of hoge TBR geeft, zal hij altijd de bolusgeschiedenis in de pomp controleren. Wanneer hij dan de handmatige bolus opmerkt, zal AAPS geen Bolus/TBR commando geven omdat deze was berekend met verkeerde aannames. (-> Niet bolussen vanaf de pomp! Zie hoofdstuk *Gebruik*)
- Het instellen van een TBR op de pomp moet worden vermeden, aangezien AAPS de controle zou moeten houden over TBRs. Wanneer je dit wel zou doen, dan kan het tot 20 minuten duren voordat AAPS contact maakt met de pomp en de nieuwe TBR detecteert. De TBR zal alleen worden geregistreerd vanaf het moment dat hij wordt gedetecteerd, dus in het ergste geval zou er al twintig minuten lang een TBR zijn afgegeven die niet in de IOB wordt meegerekend. 

## Pomp koppelen

- Stel de pomp in met de 360 configuratie software. Als je de software niet hebt, neem dan contact op met de Accu-Chek klantenservice. Ze sturen meestal een CD met de "360° Pump ConfiguratieSoftware" en een SmartPix USB-infrarood verbindingsapparaat (het Realtyme apparaat werkt ook als je dat hebt). 
  - Vereist (groen gemarkeerd in schermafbeeldingen): 
    - Zorg dat de menu configuratie op "Standaard" staat, dit zal alleen de ondersteunde menu's/acties op de pomp weergeven en de niet-ondersteunde verbergen (zoals vertraagde/multiwave bolus, meerdere basaalstanden). Wanneer je de niet-ondersteunde opties toch gebruikt, dan zullen bepaalde loop functies worden beperkt omdat het niet mogelijk is om veilig te loopen met deze opties.
    - Controleer of de *Quick Info-Tekst* is ingesteld op "QUICK INFO" (zonder de aanhalingstekens, te vinden onder *Insuline Pomp Opties*).
    - TBR instellen *Maximale aanpassing * tot 500%
    - Uitschakelen *Einde van de tijdelijke Basaal instelling*
    - TBR instellen *tijdsverlenging* tot 15 min
    - Bluetooth inschakelen
  - Aanbevolen (blauw gemarkeerd in screenshots) 
    - Laag reservoir alarm naar wens instellen
    - Configureer een max. bolus geschikt voor jouw therapie om te beschermen tegen bugs in de software
    - Vergelijkbaar, stel de maximale TBR-duur in als beveiliging. Kies voor tenminste 3 uur, omdat de optie om de pomp te ontkoppelen gedurende 3 uur, een 0% gedurende 3 uur instelt.
    - Toetsblokkering van de pomp inschakelen om ongewenst bolusen vanaf de pomp te voorkomen, vooral wanneer de pomp eerder werd gebruikt en snel bolussen een gewoonte was.
    - Stel de scherm time-out en menu time-out in tot een minimum van 5,5 en 5 respectievelijk. Dit laat AAPS sneller herstellen van foutsituaties en vermindert de hoeveelheid trillingalarmen die je kunt hebben tijdens zulke fouten

![Schermafbeelding van instellingen voor het gebruikersmenu](../images/combo/combo-menu-settings.png)

![Schermafbeelding van TBR instellingen](../images/combo/combo-tbr-settings.png)

![Schermafbeelding van bolusinstellingen](../images/combo/combo-bolus-settings.png)

![Schermafbeelding van instellingen voor insuline reservoir](../images/combo/combo-insulin-settings.png)

- Installeer AndroidAPS zoals beschreven in de [AndroidAPS wiki](http://wiki.AndroidAPS.org).
- Zorg ervoor dat je de wiki goed doorleest en begrijpt hoe AndroidAPS ingesteld moet worden.
- Selecteer de MDI plugin in AndroidAPS, niet de Combo plugin op dit moment om te voorkomen dat de Combo plugin stoort met ruffy tijdens het koppelen.
- Volg de link <http://ruffy.AndroidAPS.org> en kloon ruffy via git.
- Installeer ruffy en gebruik het om de pomp te koppelen. Als het niet werkt na meerdere pogingen, schakel dan over naar de `koppelings`-versie, koppel de pomp en schakel naar de oorspronkelijke versie terug. Het koppelen van de pomp kan een moeizaam proces zijn (maar hoeft gelukkig slechts één keer gedaan te worden) en mogelijk heb je meerdere pogingen nodi. Zorg in ieder geval dat je de notificaties snel bevestigt en verwijder de pomp van tevoren uit de Bluetooth-instellingen. Een andere optie om te proberen is om naar het Bluetooth-menu te gaan nadat je het koppelingsproces hebt gestart (dit houdt de Bluetooth detectie van de telefoon aan zolang het menu wordt weergegeven). Schakel na het bevestigen van de koppeling op de pomp pas weer terug naar ruffy, wanneer de pomp de autorisatiecode toont. Als het koppelen van de pomp niet gelukt is (zeg na 10 pogingen), probeer tot 10 seconden te wachten voordat je de koppeling bevestigt (wanneer de naam van de telefoon op de pomp wordt weergegeven). Als je de menu time-out hierboven op 5 s hebt ingesteld, moet je deze opnieuw verhogen. Sommige gebruikers hebben gemeld dat ze dit nodig hadden. Tenslotte, overweeg naar een andere ruimte te gaan om atmosferische (radio) storingen uit te sluiten. Ten minste één gebruiker loste direct de koppelingsproblemen op door simpelweg naar een andere ruimte te gaan.
- Wanneer AAPS ruffy gebruikt kan de ruffy app niet gebruikt worden. De eenvoudigste manier is om de telefoon na het koppelingsproces te herstarten en AAPS ruffy op de achtergrond te laten starten.
- Als de pomp volledig nieuw is, moet je eerst een bolus op de pomp doen, zodat de pomp een eerste behandeling opslaat.
- Voordat u de Combo-plugin in AAPS inschakelt, zorg er dan voor dat jouw profiel correct is ingesteld en geactiveerd (!) en jouw basale profiel up-to-date is. Omdat AAPS het basale profiel zal synchroniseren met de pomp. Activeer vervolgens de Combo-plugin. Druk op de *Verversen* knop op het Combo tabblad om de pomp te initialiseren.
- Om de verbinding te controleren: zorg dat de pomp **niet verbonden is**, gebruik AAPS om een TBR van 500% gedurende 15 minuten in te stellen en een kleine bolus te geven. De pomp moet nu een actieve TBR hebben en een bolus in de geschiedenis. AAPS moet ook de actieve TBR en de geleverde bolus laten zien.

## Waarom werkt de koppeling met de pomp niet met de app "ruffy"?

Er zijn diverse mogelijke redenen. Probeer de volgende stappen:

1. Plaats een **verse of volle batterij** in de pomp. Kijk in de batterij sectie voor details. Zorg ervoor dat de pomp heel dicht bij de smartphone is.

![Combo moet naast de telefoon zijn](../images/Combo_next_to_Phone.png)

2. Schakel bluetooth apparaten uit of verwijder ze zodat ze geen verbinding met de telefoon kunnen maken tijdens het koppelen. Alle parallelle bluetooth-communicatie of prompt voor het tot stand brengen van verbindingen kan het koppelingsproces verstoren.

3.     Verwijder aangesloten apparaten in het Bluetooth-menu van de pomp: **BLUETOOTH SETTINGS / CONNECTION / REMOVE** todat
      **NO DEVICE** verschijnt.
      

4. Verwijder een pomp die reeds via Bluetooth met de telefoon gekoppeld is: onder Instellingen / Bluetooth koppeling ongedaan maken. "**SpiritCombo**"
5. Zorg ervoor dat AAPS niet op de achtergrond draait in loop. Schakel Loop uit in AAPS.
6. Start ruffy nu op de telefoon. Je kunt op Reset drukken! en verwijder oude koppeling. Klik daarna op Verbinden!.
7. In het Bluetooth menu van de pomp, ga naar **ADD DEVICE / ADD CONNECTION**. Druk op *CONNECT! ** * Stap 5 en 6 moeten snel worden volbracht.
8. Nu moet de pomp de BT naam van de telefoon weergeven om te kunnen koppelen. Het belangrijk om ten minste 5s te wachten voordat je op de "select" knop van de pomp drukt. Anders zal de pomp het koppelings verzoek met de telefoon niet naar behoren verzenden.

* Als Combo Pomp is ingesteld op 5s Screen timeout, dan kan je testen met 40 s (oorspronkelijke instelling). Uit ervaring blijkt dat de tijd wanneer de pomp op de telefoon wordt weergegeven na "select phone" ongeveer 5 tot 10 seconden bedraagt. In veel andere gevallen is de koppelingstijd verlopen zonder succesvolle koppeling. Later moet je de 5s herstellen, om aan de AAPS Combo instellingen te voldoen. * Als de pomp de telefoon niet laat zien als een koppelbaar apparaat zal de bluetooth stack van je telefoon waarschijnlijk niet compatibel zijn met de pomp. Verzeker jezelf van gebruik van de versie **LineageOS ≥ 14.1** of **Android ≥ 8.1 (Oreo)**. Probeer indien mogelijk, een andere smartphone. Hier vindt je een lijst van reeds succesvol gebruikte smartphones: [AAPS Phones] - (https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435).

9. Bij de volgende Pomp sessie moet een beveiligingscode van 10 cijfers verschijnen. En Ruffy een scherm om in te voeren. Invoeren in Ruffy en je zou klaar voor gebruik moeten zijn.
10. Start de telefoon opnieuw op.
11. Nu kan je de Aaps loop herstarten.

## Gebruik

- Houd er rekening mee dat dit geen product is, vooral in het begin moet de gebruiker het systeem monitoren en leren begrijpen, Wat de beperkingen zijn en wat er mis kan gaan. Het wordt sterk aangeraden om dit systeem NIET te gebruiken wanneer de persoon het systeem niet volledig kan begrijpen.
- Lees de OpenAPS documentatie https://openaps.org om te begrijpen waar het loop-algoritme van AndroidAPS op gebaseerd is.
- Lees de wiki voor meer informatie over en begrip van AndroidAPS http://wiki.AndroidAPS.org
- Deze integratie maakt gebruik van dezelfde functionaliteit als de meter die wordt geleverd bij de Combo. De meter maakt het mogelijk om het pompscherm te spiegelen en de vooruit knop te bedienen op de pomp. De verbinding met de pomp en doorsturen is wat de ruffy app doet. Het `scripter` component leest het scherm en automatiseert het invoeren van bolussen, TBRs etc. en zorgt ervoor dat de invoer correct wordt verwerkt. AAPS werkt vervolgens met de scripter om loop commando's toe te passen en bolussen toe te laten dienen. Deze modus heeft enkele beperkingen: hij is relatief langzaam (maar snel genoeg voor de toepassing waarvoor hij wordt gebruikt), en het instellen van een TBR of het geven van een bolus zorgt ervoor dat de pomp trilt.
- De integratie van de Combo in AndroidAPS is zo ontworpen dat aangenomen wordt dat alle aanpassingen via AndroidAPS gemaakt worden. Bolussen die direct in de pomp worden ingevoerd worden gedetecteerd door AAPS, echter het kan tot wel 20 minuten duren voordat AndroidAPS een dergelijke bolus verwerkt heeft. Het lezen van direct op de pomp gegeven bolussen is een veiligheidsfunctie en niet bedoeld voor regelmatig gebruik (de loop vereist informatie mbt. geadsorbeerde koolhydraten die niet via de pomp kunnen worden ingevoerd, wat een van de redenen is waarom alle invoer in AndroidAPS gedaan moet worden). 
- Gebruik nooit de knoppen op de pomp om een TBR in te stellen of te annuleren. De loop veronderstelt totale controle over TBR en kan anders niet betrouwbaar werken. Dit omdat het niet mogelijk is om de begintijd te bepalen van een TBR die door de gebruiker op de pomp is ingesteld.
- Het eerste basaal profiel van de pomp wordt gelezen bij het starten van de toepassing en wordt aangepast door AAPS. De basaalstand mag niet handmatig veranderd worden op de pomp, maar zal wel worden gedetecteerd en gecorrigeerd als een veiligheids maatregel (vertrouw niet standaard op veiligheidsmaatregelen, dit is alleen bedoeld om een onbedoelde verandering op de pomp te detecteren).
- Het wordt aangeraden om de vergrendeling van de pomp in te schakelen om te voorkomen dat onbedoeld bolussen vanaf de pomp worden uitgevoerd. als de pomp voorheen ook gebruikt werd en de "quick bolus" functie een gewoonte was. Met toetsvergrendeling ingeschakeld, zal de actieve communicatie tussen AAPS en pomp NIET onderbroken worden.
- Wanneer een BOLUS/TBR GEANNULEERD waarschuwing op de pomp start tijdens het instellen van een TBR of bolussen wordt dit veroorzaakt door een verbinding tussen pomp en telefoon, dit komt af en toe voor. AAPS zal proberen opnieuw verbinding te maken en het alarm te bevestigen en vervolgens de laatste actie proberen te herhalen. (bolussen worden NIET opnieuw uitgevoerd om veiligheidsredenen). Daarom mag een dergelijk alarm worden genegeerd, aangezien AAPS het automatisch zal bevestigen, meestal binnen 30 seconden. (annuleren is geen probleem maar zal leiden tot het uitstellen van de huidige actie en te wachten tot het scherm van de pomp wordt uitgeschakeld voordat er opnieuw verbinding met de pomp gemaakt kan worden). Als het alarm van de pomp aanhoudt is de automatische bevestiging mislukt, in dat geval moet de gebruiker het alarm handmatig bevestigen.
- Wanneer een laag reservoir of een laag batterijalarm wordt gegeven tijdens een bolus, worden deze bevestigd en weergegeven als een melding in AAPS. Als ze optreden terwijl er geen verbinding is met de pomp, Ga naar het Combo tabblad en druk op de knop verversen dat zal door het bevestigen deze meldingen overnemen en als een melding in AAPS weergeven.
- Indien AAPS er niet in slaagt om een TBR GEANNULEERD waarschuwing te bevestigen, of deze om een andere reden ontstaan is. Zal door het verversen van de Combo tab verbinding gemaakt worden, de waarschuwing bevestigd en een melding worden weergeven in AAPS. Dit kan veilig uitgevoerd worden, omdat deze waarschuwingen onschuldig zijn, een geschikte TBR zal worden ingesteld tijdens de volgende uitvoering van loop.
- Voor alle andere waarschuwingen die de pomp heeft gegeven zal de pomp het waarschuwingsbericht laten zien op het Combo tabblad, bijv. "State: E4: Occlusion" en nog een notificatie op het hoofdscherm. Een fout zal een urgente melding veroorzaken. AAPS bevestigt nooit ernstige fouten op de pomp maar laat de wel pomp trillen en geluid maken om ervoor te zorgen dat de gebruiker op de hoogte is van een kritieke situatie die actie vereist.
- Na het koppelen mag ruffy niet direct meer worden gebruikt (AAPS zal het starten op de achtergrond indien nodig), Omdat gelijktijdig gebruik van ruffy en AAPS niet wordt ondersteund.
- Als AAPS crasht (of is gestopt door de debugger) terwijl AAPS met de pomp communiceerde (via ruffy), dan kan het kan nodig zijn om ruffy geforceerd af te sluiten. Herstart van AAPS zal ruffy opnieuw starten. Indien je niet weet hoe je de app geforceerd sluit is het opnieuw opstarten van de telefoon een eenvoudige manier om hetzelfde te bereiken.
- Bedien geen knoppen op de pomp terwijl AAPS communiceert met de pomp (Bluetooth logo is weergegeven op de pomp).