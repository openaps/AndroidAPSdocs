# Introductie tot APS en AAPS

```{contents} In this page
:backlinks: entry
:depth: 2
```

## Wat is een “kunstmatig alvleeskliersysteem”?

Een menselijke alvleesklier doet veel meer dan alleen de bloedsuiker regelen. Toch verwijst de term **“kunstmatig alvleeskliersysteem” (Artificial Pancreas System, APS)** meestal naar een systeem dat de bloedsuikerspiegel automatisch binnen gezonde grenzen houdt.

De eenvoudigste manier om dit te doen is de **glucosewaarden** te meten, met deze waarden **berekeningen** te maken en dan de (voorspelde) juiste hoeveelheid **insuline** aan het lichaam te geven. De berekeningen worden 24/7, elke paar minuten herhaald. **Alarmen** en **waarschuwingen** worden gebruikt om de gebruiker te informeren als er ingegrepen moet worden of aandacht nodig is. Zo'n systeem bestaat meestal uit een **glucosesensor**, een **insulinepomp** en een **controller** die de berekeningen uitvoert. In **AAPS** en andere open-source systemen is de controller een app op een telefoon. In de meeste commerciële systemen is het software die in de pomp zelf zit, met een telefoon-app die vooral dient om gegevens te tonen en de pomp te bedienen.

Wil je meer achtergrond over hoe systemen met gesloten loop zijn ontstaan en hoe ze werken, dan is dit overzichtsartikel uit 2022 een goed begin. Let op: het is ouder dan de meeste systemen die nu beschikbaar zijn, dus het is geen gids voor wat er nu op de markt is:

![Frontiers](../images/FRONTIERS_Logo_Grey_RGB.png) [Closed-Loop Insulin Delivery Systems: Past, Present, and Future Directions](https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2022.919942/full) (Templer, _Frontiers in Endocrinology_, 2022).

Zogenaamde “dual-hormone”-systemen (met twee hormonen) geven naast insuline ook glucagon, om ernstige hypo's te voorkomen en een nog strakkere bloedglucoseregeling mogelijk te maken. Een eerste systeem van dit type is in Europa goedgekeurd, maar het is alleen via studies en projecten beschikbaar. Andere systemen zijn nog in ontwikkeling. Geen van deze systemen is al gewoon te koop.

Een kunstmatige alvleesklier kan worden gezien als een ["autopiloot voor je diabetes"](https://www.artificialpancreasbook.com/). Wat betekent dat?

In een vliegtuig doet de automatische piloot niet al het werk van de menselijke piloot; de piloot kan niet de hele vlucht slapen. De autopiloot ondersteunt het werk van de piloot. De automatische piloot neemt de piloot de last af om het vliegtuig steeds zelf te besturen, zodat de piloot zich kan richten op het grotere geheel. De automatische piloot krijgt signalen van verschillende sensoren. Een computer beoordeelt de gegevens samen met de instellingen van de piloot, voert dan de nodige aanpassingen uit en waarschuwt de piloot als er iets mis is. De piloot hoeft niet meer steeds zelf beslissingen te nemen, en deze vergelijking kun je ook toepassen op **AAPS**.

![Afbeelding](../images/autopilot.png)

(Introduction-what-does-hybrid-closed-loop-mean)=
## Wat betekent hybride gesloten loop?

De beste oplossing voor type 1-diabetes zou een “functionele genezing” zijn (waarschijnlijk een implantaat van alvleeskliercellen die beschermd worden tegen het immuunsysteem). Zolang de type 1-diabetesgemeenschap (T1D) daarop wacht, is een kunstmatige alvleesklier met “volledig gesloten loop” waarschijnlijk het beste alternatief. Dit is een technisch systeem dat geen gebruikersinvoer nodig heeft (zoals het toedienen van insuline voor maaltijden of het aankondigen van lichaamsbeweging), met een goede regulering van de bloedsuikerspiegel. Bijna elk systeem dat dagelijks wordt gebruikt is een “hybride” gesloten loop, omdat het een combinatie gebruikt van geautomatiseerde technologie en invoer van de gebruiker. De eerste systemen met volledig gesloten loop zijn in 2026 in Europa goedgekeurd, maar geen ervan is al op grote schaal beschikbaar.

## Hoe en waarom is loopen begonnen?

De ontwikkeling van commerciële technologie voor mensen met type 1-diabetes (T1D) verloopt zeer traag. In 2013 stichtte de T1D-gemeenschap de #WeAreNotWaiting beweging. Zij hebben zelf systemen ontwikkeld met behulp van bestaande goedgekeurde technologie (insulinepompen en sensoren) om de controle over de bloedglucose, de veiligheid en de levenskwaliteit te verbeteren. Deze systemen heten OS-AID-systemen (Open-Source Automated Insulin Delivery, open-source geautomatiseerde insulinetoediening), vroeger DIY-systemen, omdat ze niet officieel zijn goedgekeurd door gezondheidsinstanties (FDA, NHS enz.). Er zijn vier belangrijke OS-AID-systemen beschikbaar: [OpenAPS](https://openaps.org/what-is-openaps/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) en [Trio](https://triodocs.org).

Een goede manier om de basis van loopen met OS-AID te begrijpen, is het boek “Automated Insulin Delivery” van Dana Lewis te lezen. Je kunt het [hier](https://www.artificialpancreasbook.com/) gratis openen (of een kopie van het boek kopen). Als je meer wil weten over [OpenAPS](https://openaps.org/what-is-openaps/), waaruit **AAPS** is ontwikkeld, dan is de [OpenAPS-website](https://openaps.org/what-is-openaps/) een geweldige bron.

Er zijn ook verschillende commerciële systemen met hybride gesloten loop op de markt gekomen. Deze verschillen sterk van OS-AID-systemen, vooral omdat veel ervan een “lerend algoritme” hebben, dat de hoeveelheid insuline aanpast aan je insulinebehoefte van de vorige dagen. Veel mensen in de OS-AID-gemeenschap hebben commerciële systemen al uitgeprobeerd en vergeleken met hun OS-AID-systeem. Je kunt meer te weten komen over hoe de systemen zich tot elkaar verhouden door het te vragen in de Facebookgroepen voor die systemen, in de [AAPS Facebookgroep](https://www.facebook.com/groups/AndroidAPSUsers/) of op [Discord](https://discord.com/invite/4fQUWHZ4Mw).

## Wat is Android APS (AAPS)?

![Afbeelding](../images/basic-outline-of-AAPS.png)

**Figuur 1**. Basisoverzicht van Android APS (kunstmatig alvleeskliersysteem), AAPS.

Android APS (**AAPS**) is a hybrid closed loop system, or Artificial Pancreas System (APS). Het berekent de insulinedoses met bewezen [OpenAPS](https://openaps.org/)-algoritmes (een set regels), ontwikkeld door de #WeAreNotWaiting T1D-gemeenschap.

Omdat OpenAPS alleen werkt met bepaalde oudere insulinepompen, werd **AAPS** (dat met veel meer insulinepompen werkt) in 2016 voor het eerst ontwikkeld voor een familielid met type 1-diabetes. Sinds die begindagen is **AAPS** voortdurend ontwikkeld en verfijnd door een team vrijwillige computerontwikkelaars en andere enthousiastelingen die verbinding hebben met de type 1 diabetes wereld. Vandaag wordt **AAPS** wereldwijd door vele duizenden mensen gebruikt. Het is een zeer aanpasbaar en veelzijdig systeem, en omdat het open-source is, is het ook eenvoudig compatibel met veel andere open-source diabetessoftware en -platforms. De fundamentele onderdelen van het huidige **AAPS**-systeem worden uiteengezet in **Figuur 1** hierboven.



## Wat zijn de basiscomponenten van AAPS?

Het “brein” van AAPS is een **app** die je zelf bouwt. Hiervoor zijn gedetailleerde stap-voor-stap instructies. Vervolgens installeer je de **AAPS-app** op een [compatibele](../Getting-Started/Phones.md) **Android-smartphone** (**1**). Sommige gebruikers hebben hun loop liever op een aparte telefoon, en niet op hun gewone telefoon. Je hoeft dus niet per se een Android-telefoon te gebruiken voor al het andere in je leven, alleen voor het draaien van je AAPS-loop.

Op de **Android-smartphone** moet naast **AAPS** ook nog een andere app geïnstalleerd zijn. Deze [extra app](../Getting-Started/CompatiblesCgms.md) ontvangt via Bluetooth glucosegegevens van een sensor (**2**) en stuurt de gegevens dan binnen de telefoon door naar de **AAPS-app**.

De **AAPS-app** gebruikt een besluitvormingsproces (**algoritme**) van OpenAPS. Beginners start out using the basic **oref0** algorithm, but it is possible to switch to using the newer **oref1** algorithm as you progress with AAPS. Welk algoritme je gebruikt (oref0 of oref1), is afhankelijk van welk algoritme het beste bij je specifieke situatie past.  In beide gevallen houdt het algoritme rekening met meerdere factoren en voert het snelle berekeningen uit telkens wanneer een nieuwe meting van de sensor komt. Het algoritme stuurt dan via Bluetooth instructies naar de insulinepomp (**3**) over hoeveel insuline die moet geven. Alle informatie kan via mobiele data of wifi naar het internet worden gestuurd (**4**). Deze gegevens kunnen ook met volgers worden gedeeld, indien gewenst, en/of verzameld voor analyse. Je kunt ook een [smartwatch](../Getting-Started/Watches.md) (**5**) met de telefoon koppelen om je gegevens in één oogopslag te zien en, met sommige horloges, eenvoudige opdrachten naar **AAPS** te sturen.

## Wat zijn de voordelen van het AAPS systeem?

Het OpenAPS-algoritme dat **AAPS** gebruikt, regelt de bloedsuikerspiegel zonder invoer van de gebruiker, volgens de parameters die de gebruiker heeft ingesteld (belangrijk zijn onder andere basaalstanden, insulinegevoeligheid (ISF), koolhydraatratio (IC), werkingsduur van insuline enz.), en reageert elke 5 minuten op de nieuwe sensorgegevens.

Enkele genoemde voordelen van **AAPS** zijn de vele opties om alles fijn af te stemmen, **Automatisering** en meer transparantie van het systeem voor de patiënt of verzorger. Dit kan leiden tot een betere regeling van je diabetes (of die van iemand voor wie je zorgt), wat weer een betere kwaliteit van leven en meer gemoedsrust kan geven.

Door tijd te investeren kan **AAPS** mogelijk leiden tot:

- het verlichten van de stress en last van het omgaan met diabetes type 1;

- het verminderen van de vele alledaagse beslissingen die voortvloeien uit diabetes type 1;

- het bieden van gepersonaliseerde en dynamische insulinedosering op basis van realtimegegevens, waarmee de noodzaak voor de behandeling van hypo's kan worden verminderd en episodes van hyperglykemie kunnen worden teruggebracht;

- meer kennis over insuline en meer vertrouwen om je instellingen beter af te stemmen;

- de mogelijkheid om automatische instellingen (**automatiseringen**) te maken die passen bij je levensstijl;

- een betere slaapkwaliteit en in het algemeen minder vaak 's nachts hoeven ingrijpen;

- volgen op afstand en toedienen van insuline op afstand voor verzorgers van mensen met diabetes type 1; en

- het stroomlijnen van al je draagbare diabetesapparatuur (ontvanger voor de continue glucosemeter en apparaten voor insulinetoediening) door een Android-telefoon te gebruiken die door **AAPS** wordt aangestuurd.


Uiteindelijk kan **AAPS** individuen in staat stellen hun diabetes beter te beheersen, wat leidt tot stabiele bloedsuikerspiegels en betere gezondheidsresultaten op de lange termijn.

### Specifieke voordelen zijn:

#### 1) Ingebouwde veiligheid
Voor meer informatie over de veiligheidsfuncties van de algoritmes, bekend als oref0 en oref1, [klik hier](https://openaps.org/reference-design/). De gebruiker heeft de controle over zijn eigen veiligheidsbeperkingen.

#### 2) Flexibel in hardware

**AAPS** werkt met veel verschillende insulinepompen en sensoren en blijft flexibel als je leven verandert. Als je bijvoorbeeld een allergie voor Dexcom sensor lijm ontwikkelt, kun je overschakelen naar het gebruik van een Libre sensor. Je hoeft de **AAPS**-app niet opnieuw te bouwen of te installeren; kies gewoon een andere pomp of BG bron in **Configuratie** om van hardware te wisselen. **AAPS** is niet afhankelijk van bepaalde pompdrivers en heeft ook een "virtuele pomp", zodat gebruikers veilig kunnen experimenteren voordat ze het op zichzelf gebruiken.

#### 3) Uitgebreid aanpasbaar, met ruime parameters

Gebruikers kunnen makkelijk modules of functies toevoegen of verwijderen, en **AAPS** kan zowel met een open loop als met een gesloten loop worden gebruikt. Hier zijn enkele voorbeelden van de mogelijkheden met het **AAPS** systeem:

 a) Je kunt 30 min voor het eten een lagere **BG**-streefwaarde instellen; de streefwaarde kan zo laag zijn als 72 mg/dl (4,0 mmol/l).

 b) If you are insulin-resistant resulting in high blood sugars, **AAPS** allows you to set an **automation** rule to activate when BG rises above 8 mmol/L (144 mg/dL), switching to (for example) a 120% profile (resulting in a 20% increase in basal and strengthening of other factors too, compared to your normal **profile** setting). De automatisering werkt volgens de ingestelde tijdsperiode. Een dergelijke automatisering zou alleen actief kunnen zijn op bepaalde dagen van de week, op bepaalde momenten van de dag en zelfs op bepaalde plaatsen.

 c) If your child is on a trampoline with no advance notice, **AAPS** allows insulin suspension for a set time period, directly via the phone.

 d) After reconnecting a tubed pump which has been disconnected for swimming, **AAPS** will calculate the basal insulin you have missed while disconnected and deliver it carefully, according to your current BG. Eventuele insuline die niet nodig is, kan worden overschreven door simpelweg de gemiste basaalsnelheid te ‘annuleren’.

 e) **AAPS** biedt de mogelijkheid om verschillende profielen voor uiteenlopende situaties in te stellen en eenvoudig daartussen te wisselen. For example, features which make the algorithm quicker to bring down elevated BG (like supermicro boluses (“**SMB**”) and unannounced meals (“**UAM**”)) can be set to only work during the daytime, if you are worried about night-time hypos.

Dit zijn slechts voorbeelden; alle functies samen geven enorm veel flexibiliteit voor het dagelijks leven, zoals sport, ziekte, hormonale cycli _enz._ Uiteindelijk is het aan de gebruiker om te bepalen hoe deze flexibiliteit wordt benut, en bestaat er geen universele automatiseringsoplossing hiervoor.

#### 4) Volgen op afstand
Er zijn veel manieren om op afstand te volgen (Sugarmate, Dexcom Follow, xDrip, Android Auto _enz._). Die zijn handig voor ouders/verzorgers en voor volwassenen in bepaalde situaties (slapen/autorijden) die alarmen nodig hebben die ze zelf kunnen instellen. In sommige apps (xDrip) kun je de alarmen ook helemaal uitzetten. Dat is handig als je een nieuwe sensor hebt die nog moet “inwerken” of stabiel moet worden en waarmee je nog niet wilt loopen.

#### 5) Bediening op afstand
Een groot voordeel van **AAPS** ten opzichte van commerciële systemen is dat volgers met beveiligde sms-opdrachten of een gekoppelde **AAPSClient**-app veel verschillende opdrachten terug kunnen sturen naar het **AAPS**-systeem. Deze functie wordt veel gebruikt door ouders van kinderen met type 1-diabetes die **AAPS** gebruiken.

De functies voor bediening op afstand kunnen erg handig zijn: bijvoorbeeld op de speelplaats, als je vanaf je eigen telefoon vooraf een bolus wilt geven voor een tussendoortje terwijl je kind druk aan het spelen is. Je kunt het systeem ook volgen op een smartwatch (_bijv._ Garmin) of er eenvoudige opdrachten mee geven (_bijv._ met een Wear OS-horloge zoals de Samsung Galaxy Watch).

#### 6) Geen commerciële beperkingen dankzij open applicatie-interfaces
Naast het gebruik van een open-source benadering, waardoor de broncode van **AAPS** op elk moment kan worden ingezien, biedt het algemene principe van open programmeerinterfaces ook andere ontwikkelaars de mogelijkheid om nieuwe ideeën aan te dragen. **AAPS** is nauw geïntegreerd met Nightscout. Dit versnelt de ontwikkeling en stelt gebruikers in staat functies toe te voegen die het leven met diabetes nog gemakkelijker maken. Goede voorbeelden van zulke integraties zijn [Nightscout](https://nightscout.github.io/), [Nightscout Reporter](https://nightscout-reporter.zreptil.de/), xDrip, [M5 stack](https://github.com/mlukasek/M5_NightscoutMon/wiki) enz. Er is een voortdurende dialoog tussen open-sourceontwikkelaars en ontwikkelaars van commerciële systemen. Veel OS-AID-vernieuwingen worden geleidelijk overgenomen door commerciële systemen. Daar gaat de ontwikkeling begrijpelijk trager, onder andere omdat er over de koppelingen tussen systemen van verschillende bedrijven (pompen, apps, sensoren _enz._) zorgvuldig onderhandeld moet worden en er licenties voor nodig zijn. Dit kan ook innovaties vertragen die gunstig zijn voor de patiënt (of voor een kleine subpopulatie van patiënten met zeer specifieke behoeften), maar geen aanzienlijke winst opleveren.

#### 7) Gedetailleerde app-interface
Met **AAPS** is het eenvoudig om zaken bij te houden zoals: insulineniveaus in de pomp, leeftijd van de canule, leeftijd van de sensor, leeftijd van de pompbatterij, aanwezige insuline _enz._ Veel handelingen kun je in de **AAPS**-app doen (de pomp vullen, de pomp loskoppelen _enz._) in plaats van op de pomp zelf. Zo kan de pomp in je zak of aan je riem blijven (of in die van iemand voor wie je zorgt).

#### 8) Toegankelijkheid en betaalbaarheid
**AAPS** geeft mensen die nu niet zelf kunnen betalen of geen vergoeding/verzekering hebben, toegang tot een systeem met hybride gesloten loop dat in ontwikkeling jaren voorloopt op de commerciële systemen. Je hebt op dit moment een rapportageserver (Nightscout of Tidepool) nodig om **AAPS** in te stellen, maar die is niet nodig voor het dagelijks gebruik van de **AAPS**-loop. Veel mensen blijven Nightscout gebruiken om hun gegevens te verzamelen en om op afstand te volgen. Hoewel **AAPS** zelf gratis is, kunnen er kosten (€ 0 – € 12) verbonden zijn aan het opzetten van Nightscout via een van de verschillende platforms; dit hangt af van het gewenste ondersteuningsniveau (zie de vergelijkingstabel) en of je Nightscout na de installatie wilt blijven gebruiken. **AAPS** werkt met veel betaalbare [Android-telefoons](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true) (vanaf ongeveer € 150). Er zijn verschillende versies beschikbaar voor specifieke locaties en talen, en AAPS kan ook worden gebruikt door mensen die [blind](#accessibility-for-users-aaps-who-are-partially-or-completely-blind) zijn.

#### 9) Ondersteuning
Geen enkel geautomatiseerd insulinetoedieningssysteem is perfect. Commerciële en open-sourcesystemen vertonen veel dezelfde problemen, zowel op het gebied van communicatie als bij tijdelijke hardwarestoringen. Er is ondersteuning beschikbaar vanuit de gemeenschap van AAPS-gebruikers op Facebook, Discord en GitHub – mensen van over de hele wereld die AAPS hebben ontworpen en ontwikkeld, en het momenteel gebruiken. Er zijn ook Facebook-ondersteuningsgroepen en er is hulp beschikbaar vanuit klinieken of commerciële bedrijven voor de commerciële APS-systemen; het is de moeite waard om te spreken met gebruikers of voormalige gebruikers van deze systemen om feedback te krijgen over veelvoorkomende problemen, de kwaliteit van het educatieve programma en het niveau van de doorlopende ondersteuning.

#### 10) Voorspelbaarheid, transparantie en veiligheid
**AAPS** is transparant, logisch en voorspelbaar. Daardoor merk je misschien sneller wanneer een instelling niet goed is, en kun je die dan aanpassen. Je kunt precies zien wat het systeem doet en waarom, en je kunt de grenzen instellen waarbinnen het werkt; zo liggen de controle (en de verantwoordelijkheid) in jouw handen. Dit kan de gebruiker vertrouwen en een betere nachtrust bieden.

#### 11) Toegang tot geavanceerde functies via ontwikkelversies (dev), waaronder volledig gesloten loop
Deze **AAPS**-documentatie richt zich op de reguliere **“master”**-branch van **AAPS**. Er vindt echter voortdurend onderzoek en ontwikkeling plaats. Meer ervaren gebruikers willen wellicht de experimentele functies in de **development**-branch verkennen. De ontwikkelingen richten zich op strategieën voor een volledig gesloten loop (geen bolus meer nodig voor maaltijden _enz._) en in het algemeen op het zo makkelijk mogelijk maken van het leven met type 1-diabetes.

#### 12) Zelf bijdragen aan verdere verbeteringen
Type 1-diabetes kan zeer frustrerend en isolerend zijn. Controle hebben over je eigen diabetestechnologie – en de mogelijkheid om anderen op hun eigen weg te helpen zodra je zelf vooruitgang boekt – kan enorm veel voldoening geven. Je kunt jezelf bijscholen, knelpunten ontdekken en op zoek gaan naar – of zelfs bijdragen aan – nieuwe ontwikkelingen en de documentatie. Er zullen anderen in de gemeenschap zijn met hetzelfde doel, met wie je kunt sparren en kunt samenwerken. Dit is de essentie van #WeAreNotWaiting.

## Hoe verhoudt AAPS zich tot MDI en een open loop?

Bij meerdere injecties per dag (MDI, (a) in **Figuur 2** hieronder) wordt doorgaans één keer per dag een langwerkende insuline (_bijv._ Tresiba) geïnjecteerd, gecombineerd met injecties van sneller werkende insuline (_bijv._ Novorapid, Fiasp) tijdens de maaltijden of voor correcties. Bij 'open pumping' (b) wordt een pomp gebruikt om de basale insulinebehoefte te dekken met vooraf geprogrammeerde hoeveelheden snelwerkende insuline, en worden daarnaast bolussen via de pomp toegediend tijdens de maaltijden of voor correcties. De basis van een looping-systeem is dat de looping-app de glucosegegevens van de sensor gebruikt om de pomp opdracht te geven de insulinetoediening te stoppen wanneer wordt voorspeld dat je op een te lage bloedglucosewaarde afstevent, en om extra insuline toe te dienen als je glucosewaarden stijgen en naar verwachting te hoog zullen worden (c). Hoewel deze voorstelling in vergelijking met de werkelijkheid sterk vereenvoudigd is, beoogt ze de belangrijkste verschillen tussen de benaderingen te illustreren. Met elk van deze drie benaderingen is het mogelijk om een uitzonderlijk goede glucoseregeling te bereiken.

![21-06-23 AAPS glucose MDI enz](../images/basic-overview-mdi-open-and-closed-loop.png)


**Figuur 2**. Basisoverzicht van (a) MDI, (b) pomp met open loop en (c) pomp met hybride gesloten loop.

## Hoe verhoudt AAPS zich tot andere looping-systemen?

Op 25 juni 2023 zijn er vier grote open-source systemen met gesloten loop beschikbaar: [OpenAPS](https://openaps.readthedocs.io/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) en [Trio](https://triodocs.org) (voorheen FreeAPS X). De kenmerken van de verschillende systemen worden in de onderstaande tabel weergegeven:


| Type apparaat | Naam                                                               | [AAPS](https://wiki.aaps.app)                  | [Loop](https://loopkit.github.io/loopdocs/)    | [Open APS](https://openaps.readthedocs.io/en/latest/) | [Trio](https://triodocs.org)                   |
| ------------- | ------------------------------------------------------------------ | ---------------------------------------------- | ---------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------- |
| Telefoon      | Android                                                            | ![beschikbaar](../images/available.png)        | ![niet beschikbaar](../images/unavailable.png) | ![niet beschikbaar](../images/unavailable.png)        | ![niet beschikbaar](../images/unavailable.png) |
| Telefoon      | iPhone                                                             | ![niet beschikbaar](../images/unavailable.png) | ![beschikbaar](../images/available.png)        | ![niet beschikbaar](../images/unavailable.png)        | ![beschikbaar](../images/available.png)        |
| Rig           | kleine computer (1)                                                | ![niet beschikbaar](../images/unavailable.png) | ![niet beschikbaar](../images/unavailable.png) | ![beschikbaar](../images/available.png)               | ![niet beschikbaar](../images/unavailable.png) |
| POMP          | [Dana I](../CompatiblePumps/DanaRS-Insulin-Pump.md)                | ![beschikbaar](../images/available.png)        | ![beschikbaar](../images/available.png)        | ![niet beschikbaar](../images/unavailable.png)        | ![beschikbaar](../images/available.png)        |
| POMP          | [Dana RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)               | ![beschikbaar](../images/available.png)        | ![beschikbaar](../images/available.png)        | ![niet beschikbaar](../images/unavailable.png)        | ![beschikbaar](../images/available.png)        |
| POMP          | [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)                 | ![beschikbaar](../images/available.png)        | ![niet beschikbaar](../images/unavailable.png) | ![niet beschikbaar](../images/unavailable.png)        | ![niet beschikbaar](../images/unavailable.png) |
| POMP          | [Omnipod (Dash)](../CompatiblePumps/OmnipodDASH.md)                | ![beschikbaar](../images/available.png)        | ![beschikbaar](../images/available.png)        | ![niet beschikbaar](../images/unavailable.png)        | ![beschikbaar](../images/available.png)        |
| POMP          | [Omnipod (Eros)](../CompatiblePumps/OmnipodEros.md)                | ![beschikbaar](../images/available.png)        | ![beschikbaar](../images/available.png)        | ![niet beschikbaar](../images/unavailable.png)        | ![beschikbaar](../images/available.png)        |
| POMP          | [Diaconn G8](../CompatiblePumps/DiaconnG8.md)                      | ![beschikbaar](../images/available.png)        | ![niet beschikbaar](../images/unavailable.png) | ![niet beschikbaar](../images/unavailable.png)        | ![niet beschikbaar](../images/unavailable.png) |
| POMP          | [EOPatch 2](../CompatiblePumps/EOPatch2.md)                        | ![beschikbaar](../images/available.png)        | ![niet beschikbaar](../images/unavailable.png) | ![niet beschikbaar](../images/unavailable.png)        | ![niet beschikbaar](../images/unavailable.png) |
| POMP          | [Medtrum TouchCare Nano 200U](../CompatiblePumps/MedtrumNano.md)   | ![beschikbaar](../images/available.png)        | ![beschikbaar](../images/available.png)        | ![niet beschikbaar](../images/unavailable.png)        | ![beschikbaar](../images/available.png)        |
| POMP          | [Medtrum TouchCare 300U](../CompatiblePumps/MedtrumNano.md)        | ![beschikbaar](../images/available.png)        | ![beschikbaar](../images/available.png)        | ![niet beschikbaar](../images/unavailable.png)        | ![beschikbaar](../images/available.png)        |
| POMP          | [Roche Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)       | ![beschikbaar](../images/available.png)        | ![niet beschikbaar](../images/unavailable.png) | ![niet beschikbaar](../images/unavailable.png)        | ![niet beschikbaar](../images/unavailable.png) |
| POMP          | [Roche Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)      | ![beschikbaar](../images/available.png)        | ![niet beschikbaar](../images/unavailable.png) | ![niet beschikbaar](../images/unavailable.png)        | ![niet beschikbaar](../images/unavailable.png) |
| POMP          | [Oudere Medtronic](../CompatiblePumps/MedtronicPump.md)            | ![beschikbaar](../images/available.png)        | ![beschikbaar](../images/available.png)        | ![beschikbaar](../images/available.png)               | ![beschikbaar](../images/available.png)        |
| POMP          | [Equil 5.3](../CompatiblePumps/Equil5.3.md)                        | ![beschikbaar](../images/available.png)        | ![niet beschikbaar](../images/unavailable.png) | ![niet beschikbaar](../images/unavailable.png)        | ![niet beschikbaar](../images/unavailable.png) |
| POMP          | [CareLevo](../CompatiblePumps/CareLevo.md)                         | ![beschikbaar](../images/available.png)        | ![niet beschikbaar](../images/unavailable.png) | ![niet beschikbaar](../images/unavailable.png)        | ![niet beschikbaar](../images/unavailable.png) |
| CGM           | [Dexcom G7/One+/Stelo](../CompatibleCgms/DexcomG7.md)              | ![beschikbaar](../images/available.png)        | ![beschikbaar](../images/available.png)        | ![niet beschikbaar](../images/unavailable.png)        | ![beschikbaar](../images/available.png)        |
| CGM           | [Dexcom One](../CompatibleCgms/DexcomG6.md)                        | ![beschikbaar](../images/available.png)        | ![beschikbaar](../images/available.png)        | ![niet beschikbaar](../images/unavailable.png)        | ![beschikbaar](../images/available.png)        |
| CGM           | [Dexcom G6](../CompatibleCgms/DexcomG6.md)                         | ![beschikbaar](../images/available.png)        | ![beschikbaar](../images/available.png)        | ![beschikbaar](../images/available.png)               | ![beschikbaar](../images/available.png)        |
| CGM           | [Libre 3/3+](../CompatibleCgms/Libre3.md)                          | ![beschikbaar](../images/available.png)        | ![beschikbaar](../images/available.png)        | ![niet beschikbaar](../images/unavailable.png)        | ![beschikbaar](../images/available.png)        |
| CGM           | [Libre 2/2+](../CompatibleCgms/Libre2.md)                          | ![beschikbaar](../images/available.png)        | ![beschikbaar](../images/available.png)        | ![niet beschikbaar](../images/unavailable.png)        | ![beschikbaar](../images/available.png)        |
| CGM           | [Libre 1](../CompatibleCgms/Libre1.md)                             | ![beschikbaar](../images/available.png)        | ![beschikbaar](../images/available.png)        | ![niet beschikbaar](../images/unavailable.png)        | ![beschikbaar](../images/available.png)        |
| CGM           | [Eversense](../CompatibleCgms/Eversense.md)                        | ![beschikbaar](../images/available.png)        | ![beschikbaar](../images/available.png)        | ![niet beschikbaar](../images/unavailable.png)        | ![beschikbaar](../images/available.png)        |
| CGM           | [MM640g/MM630g](../CompatibleCgms/MM640g.md)                       | ![beschikbaar](../images/available.png)        | ![niet beschikbaar](../images/unavailable.png) | ![niet beschikbaar](../images/unavailable.png)        | ![niet beschikbaar](../images/unavailable.png) |
| CGM           | [PocTech](../CompatibleCgms/PocTech.md)                            | ![beschikbaar](../images/available.png)        | ![niet beschikbaar](../images/unavailable.png) | ![niet beschikbaar](../images/unavailable.png)        | ![niet beschikbaar](../images/unavailable.png) |
| CGM           | [Ottai](../CompatibleCgms/OttaiM8.md)                              | ![beschikbaar](../images/available.png)        | ![niet beschikbaar](../images/unavailable.png) | ![niet beschikbaar](../images/unavailable.png)        | ![niet beschikbaar](../images/unavailable.png) |
| CGM           | [Syai Tag](../CompatibleCgms/SyaiTagX1.md)                         | ![beschikbaar](../images/available.png)        | ![niet beschikbaar](../images/unavailable.png) | ![niet beschikbaar](../images/unavailable.png)        | ![niet beschikbaar](../images/unavailable.png) |
| CGM           | [Nightscout als BG bron](../CompatibleCgms/CgmNightscoutUpload.md) | ![beschikbaar](../images/available.png)        | ![beschikbaar](../images/available.png)        | ![beschikbaar](../images/available.png)               | ![beschikbaar](../images/available.png)        |

_Opmerkingen bij de tabel:_
1. Een **rig** is een kleine computer die je bij je draagt, zonder beeldscherm. Een ondersteund apparaattype is de Intel Edison met Explorer Board, en het andere is de Raspberry Pi met Explorer HAT of Adafruit RFM69HCW Bonnet. De eerste APS-systemen werkten op deze manier, omdat mobiele telefoons de benodigde algoritmes toen nog niet konden uitvoeren. Het gebruik van deze systemen is afgenomen, aangezien de installatie op mobiele telefoons eenvoudiger is geworden en telefoons over een ingebouwd scherm beschikken. Intel is ook gestopt met de verkoop van de Intel Edison. De uitstekende OpenAPS-algoritmen **oref0** en **oref1** zijn nu opgenomen in AAPS en Trio.


Een internationale, door vakgenoten beoordeelde consensusverklaring met praktische richtlijnen voor open-source looping werd opgesteld door en voor zorgprofessionals en in 2022 gepubliceerd in een toonaangevend medisch tijdschrift: [_Lancet Diabetes Endocrinol_, 2022; 10: 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_). Het is zeker de moeite waard om het te lezen (ook voor je diabeteskliniek), en het geeft een overzicht van de belangrijkste technische verschillen tussen de verschillende open-source systemen met hybride gesloten loop.

Het is moeilijk om een goed “gevoel” bij een systeem te krijgen zonder het zelf te gebruiken of te praten met mensen die het gebruiken. Neem dus gerust contact op met anderen via Facebook of Discord en stel je vragen. De meeste mensen vinden **AAPS** veel uitgebreider dan andere systemen met hybride gesloten loop (vooral de commerciële systemen), met heel veel instellingen en functies die je kunt aanpassen, zoals hierboven besproken. Sommige mensen vinden dit in het begin wat veel, maar je hoeft niet alle mogelijkheden tegelijk te onderzoeken. Je kunt zo langzaam of zo snel gaan als je wilt, en bij elke stap is er hulp beschikbaar.


## Gebruikt AAPS kunstmatige intelligentie of een lerend algoritme?

De huidige versie van **AAPS** (4.0) heeft geen algoritmes voor machine learning, geen modellen voor de insulinereactie met meerdere parameters en geen kunstmatige intelligentie. Het systeem is dan ook open en transparant wat betreft de werking, en is niet alleen voor experts, maar ook voor clinici en patiënten begrijpelijk. Het betekent ook dat als je een sterk wisselend schema hebt (bijvoorbeeld van een stressvolle werkweek naar een ontspannen vakantie) en waarschijnlijk duidelijk meer of minder insuline nodig hebt, je **AAPS** direct een zwakker of sterker aangepast profiel kunt laten gebruiken. Een ‘lerend systeem’ doet deze aanpassing automatisch voor je, maar doet er waarschijnlijk langer over om de insulinetoediening aan te passen.

(which-system-is-right-for-me-or-my-dependent)=
## Welk systeem past bij mij of bij iemand voor wie ik zorg?

In de praktijk wordt je keuze voor een systeem vaak beperkt door de pomp die je al hebt of via je zorgverlener kunt krijgen, en door je keuze voor een telefoon (Apple of Android). Als je nog geen pomp hebt, heb je de grootste keuze aan systemen. De technologie ontwikkelt zich voortdurend; de productie van bepaalde pompen wordt stopgezet en er worden nieuwe pompen en sensoren op de markt gebracht. De meeste open-sourcesystemen werken met de gangbare sensoren (Libre en Dexcom) of worden snel aangepast om met nieuwe sensoren te werken, ongeveer een jaar na de marktintroductie (waarbij enige vertraging optreedt vanwege veiligheids- en stabiliteitstests).

De meeste **AAPS**-gebruikers melden meer tijd binnen bereik, een lager HbA1c en een betere kwaliteit van leven, omdat het systeem de basaalstanden 's nachts tijdens de slaap automatisch kan aanpassen. Dit geldt voor de meeste systemen met hybride gesloten loop. Sommige mensen hebben liever een heel eenvoudig systeem dat je weinig kunt aanpassen (dan past een commercieel systeem misschien beter bij je), en anderen vinden dit gebrek aan controle erg frustrerend (dan past een open-source systeem misschien beter). Als bij jou (of bij iemand voor wie je zorgt) net diabetes is vastgesteld, is een gebruikelijke route om eerst te wennen aan MDI met een glucosesensor, daarna over te stappen op een pomp die geschikt is voor loopen, en daarna op **AAPS**. Sommige mensen (vooral kleine kinderen) gaan echter direct naar een pomp.

Het is belangrijk op te merken dat de **AAPS**-gebruiker proactief moet zijn om zelf problemen op te sporen en op te lossen, met hulp van de community. Dit vereist een heel andere instelling dan het gebruik van een commercieel systeem. Met **AAPS** heeft een gebruiker meer controle, maar ook de verantwoordelijkheid, en moet zich daar prettig bij voelen.

## Is het veilig om open-sourcesystemen zoals AAPS te gebruiken?

### Veiligheid van het AAPS-systeem
Een nauwkeurigere vraag is waarschijnlijk: "Is het veilig **vergeleken** met mijn huidige insulinetoedieningssysteem?", aangezien geen enkele methode van insulinetoediening zonder risico is. Er zijn bij **AAPS** tal van controles en veiligheden ingebouwd. Een recent [artikel](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375) onderzocht het gebruik van **AAPS** in een computersimulatie. Dat was een effectieve manier om objectief te testen hoe veilig en effectief het systeem is. Meer in het algemeen gebruiken vele duizenden mensen wereldwijd open-source systemen voor geautomatiseerde insulinetoediening, en dat aantal blijft wereldwijd groeien.

Elk apparaat dat radiocommunicatie gebruikt, kan worden gehackt, en dat geldt ook voor een insulinepomp die niet in een loop wordt gebruikt. Op dit moment zijn wij niet op de hoogte van pogingen om personen schade toe te brengen door hun medische apparatuur voor diabetes te hacken. Er zijn echter verschillende manieren om zich tegen dergelijke risico's te beschermen:

1.  Beperk in de pompinstellingen zowel de maximale bolus als het maximale tijdelijke basaal tot hoeveelheden die jij het veiligst vindt. Dit zijn harde limieten waarvan wij niet geloven dat een kwaadwillende hacker ze kan omzeilen.

2.  Zet de alarmen van je CGM aan voor zowel hoge als lage waarden.

3.  Volg je insulinetoediening online. Nightscout-gebruikers kunnen extra alarmen instellen om gewaarschuwd te worden bij uiteenlopende situaties, waaronder situaties die veel waarschijnlijker zijn dan een kwaadaardige aanval. Naast hoge en lage waarden kan Nightscout diagnostische gegevens weergeven die nuttig zijn om te controleren of de pomp naar behoren functioneert, waaronder de actuele IOB (insuline aan boord) en de geschiedenis van tijdelijke basale doseringen en bolussen van de pomp. Het kan ook zo worden geconfigureerd dat gebruikers proactief worden gewaarschuwd voor ongewenste situaties, zoals voorspelde hoge en lage waarden, een bijna leeg insulinereservoir en een bijna lege batterij van de pomp.

Als er een kwaadaardige aanval op je insulinepomp zou plaatsvinden, zouden deze maatregelen het risico sterk beperken. Elke potentiële **AAPS**-gebruiker moet de risico's van het gebruik van **AAPS** afwegen tegen de risico's van het gebruik van een ander systeem.

#### Veiligheidsoverwegingen bij het te snel verbeteren van de bloedglucoseregulatie

Een snelle verlaging van het HbA1c-gehalte en een verbeterde bloedglucoseregulatie klinken aantrekkelijk. Maar als je de gemiddelde bloedglucose _te snel_ verlaagt door met een systeem met gesloten loop te beginnen, kan dat blijvende schade veroorzaken, onder andere aan de ogen, en pijnlijke neuropathie die nooit meer overgaat. Deze schade kan eenvoudig worden voorkomen door de niveaus langzamer te verlagen. Als je nu een verhoogd HbA1c hebt en overstapt op AAPS (of een ander systeem met gesloten loop), bespreek dit mogelijke risico dan met je behandelteam voordat je begint, en spreek samen een tijdsplanning af. Meer algemene informatie over hoe je je glucosewaarden veilig verlaagt, met links naar medische literatuur, vind je [hier](#preparing-safety-first) in het deel over veiligheid.

#### Medische veiligheid met betrekking tot hulpmiddelen, verbruiksartikelen en andere geneesmiddelen

Gebruik voor een loop met kunstmatige alvleesklier een geteste, volledig werkende insulinepomp en CGM die zijn goedgekeurd door de FDA of met CE-markering. Hardware of software wijzigingen aan deze componenten kunnen voor onverwachte uitkomsten zorgen (denk aan het ongewenst afgeven van insuline), waardoor de gebruiker een aanzienlijk risico loopt. Als je kapotte, aangepaste of zelfgemaakte insulinepompen of CGM-ontvangers vindt of aangeboden krijgt, gebruik ze dan niet voor een AAPS-systeem.

Gebruik originele hulpmiddelen, zoals inbrenghulpmiddelen, canules en insulinereservoirs, die zijn goedgekeurd door de fabrikant van je pomp en CGM. Door het gebruik van niet-originele, niet-geteste verbruiksmaterialen kunnen CGM metingen onnauwkeurig worden en/of fouten optreden in de insulinedosering. Insuline is zeer gevaarlijk als de dosis verkeerd is. Speel dus niet met je leven door je hulpmiddelen aan te passen.

Gebruik geen SGLT-2-remmers (gliflozines) als je **AAPS** gebruikt, omdat deze de bloedsuikerspiegel onvoorspelbaar verlagen. Het combineren van dit effect met een systeem dat de basale dosering verlaagt om de bloedglucosewaarde te verhogen, is gevaarlijk; meer informatie hierover is te vinden in het belangrijkste [veiligheidsgedeelte](#preparing-safety-first).

(introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team)=
## Hoe kan ik het gesprek over AAPS met mijn behandelteam aanpakken?

Gebruikers worden aangemoedigd om met hun behandelaars te bespreken dat ze van plan zijn **AAPS** te gebruiken. Wees niet bang om een eerlijk gesprek met je diabetesteam te voeren als je van plan bent **AAPS** te gebruiken (of een andere OS-AID-loop). Transparantie en vertrouwen tussen patiënt en arts zijn van het grootste belang.

### Voorgestelde aanpak:
Ga in gesprek met je zorgverlener om te weten te komen hoe goed die diabetestechnologie kent, zoals CGM's, pompen, hybride loops en commerciële loops, en hoe die daartegenover staat. Je behandelaar of endocrinoloog hoort de basistechnologie te kennen en bereid te zijn om met je te praten over de nieuwste ontwikkelingen in commerciële loopsystemen die in jouw regio beschikbaar zijn.

#### Lokale voorbeelden

Vraag wat je behandelaar of endocrinoloog vindt van een OS-AID-loop _vs_ een commerciële loop, en schat in hoeveel kennis die hierover heeft. Kennen ze **AAPS**, en kunnen ze nuttige ervaringen met je delen van patiënten die met OS-AID loopen?

Vraag of je team patiënten heeft die al met OS-AID loopen. Vanwege de privacy van patiënten mogen artsen je geen gegevens van andere patiënten geven zonder toestemming van die persoon. Maar als je wilt, **kun** je hen vragen om **jouw** contactgegevens door te geven aan een patiënt die al met OS-AID loopt, als de behandelaar denkt dat het tussen jullie zou kunnen "klikken". Laat dan weten dat je het fijn vindt als die patiënt contact met je opneemt om over loopen met OS-AID te praten. Behandelaars zijn hier niet toe verplicht, maar sommigen doen dit graag, omdat ze het belang inzien van steun van lotgenoten bij de behandeling van diabetes type 1. Het kan ook nuttig zijn om vriendelijke OS-AID-loopers bij jou in de buurt te ontmoeten. Dit is uiteraard aan jou, en niet strikt noodzakelijk.

#### Nationale en internationale voorbeelden

Als je je door je team niet gesteund voelt om met **AAPS** te werken, kunnen de volgende gesprekspunten helpen:

a) Het **AAPS**-systeem is ontworpen DOOR patiënten en hun verzorgers. Het is in de eerste plaats ontworpen met het oog op veiligheid, maar ook gebaseerd op diepgaande ervaringen van patiënten. Er zijn wereldwijd vele duizenden **AAPS**-gebruikers. Daarom zijn er waarschijnlijk ook andere patiënten in je kliniek die met OS-AID loopen (of de kliniek dat nu weet of niet).

b) Recente, door vakgenoten beoordeelde richtlijnen in het internationaal toonaangevende medische tijdschrift [The Lancet](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/pdf/nihms-1765784.pdf)(_1_) bevestigen dat OS-AID-loops **veilig** en **effectief zijn om de diabetesregeling te verbeteren**, ook voor de tijd binnen bereik. In toonaangevende tijdschriften zoals [Nature](https://doi.org/10.1038/d41586-023-02648-9)(_3_) verschijnen regelmatig artikelen over de vooruitgang van de OS-AID-loopgemeenschap.

c) Beginnen met **AAPS** betekent een _geleidelijke_ overgang van pompen met een “open” loop, via stoppen bij lage glucose, naar een hybride “gesloten” loop, door een aantal doelen te voltooien. Er is dus een gestructureerd programma: de gebruiker moet in elke fase laten zien dat hij het systeem goed beheerst en zijn basisinstellingen (basaal, ISF en ICR) verfijnen, voordat hij de loop kan sluiten.

d) Technische ondersteuning krijg je van de OS-AID-gemeenschap via GitHub, Discord en besloten Facebookgroepen.

e) Je kunt bij afspraken in de kliniek **informatie over zowel CGM als insuline uit de loop/pomp** laten zien als gecombineerde rapporten (via Nightscout of Tidepool), op papier of op een scherm (als je een laptop of tablet meeneemt). Doordat CGM- en insulinegegevens samen beschikbaar zijn, kan je behandelaar zijn tijd beter gebruiken om je rapporten te bekijken, en helpt het bij het bespreken van je voortgang.

f) Als je team nog steeds sterke bezwaren heeft, geef je behandelaar dan afdrukken van de artikelen waarnaar in deze tekst wordt verwezen, en geef de link naar het deel van **AAPS** voor behandelaars: [Voor zorgverleners – Een algemene introductie en handleiding voor **AAPS**](../UsefulLinks/ClinicianGuideToAaps.md)

#### Steun voor loopen met OS-AID door andere behandelaars

Het artikel in [Lancet Diabetes Endocrinology](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_) (mede geleid door King’s en Guy’s and St Thomas’ NHS Foundation Trust, en mede geleid door Dr. Sufyan Hussain, consultant diabetoloog en honorair senior docent van King’s in Londen) biedt:

a) **Zekerheid** voor professionals dat OS-AID-systemen voor een kunstmatige alvleesklier / open source een “veilige en effectieve behandeloptie” zijn voor type 1-diabetes, met richtlijnen voor aanbevelingen, gesprekken, ondersteuning en documentatie;

b) **Erkenning** dat open-source systemen voor geautomatiseerde insulinetoediening (“AID”) de tijd binnen bereik (TIR) kunnen vergroten en tegelijk de schommelingen in de bloedglucose en het aantal hypo's en hyperglykemieën kunnen verminderen, in verschillende leeftijdsgroepen, bij verschillende geslachten en in verschillende gemeenschappen;

c) **Aanbeveling** dat zorgverleners **steun** moeten bieden aan patiënten met diabetes type 1 of hun verzorgers die ervoor kiezen hun diabetes te beheren met een open-source AID-systeem;

d) Aanbeveling dat zorgverleners zich verdiepen in alle behandelopties waar patiënten baat bij kunnen hebben, waaronder beschikbare open-source AID-systemen.  Als zorgverleners niet over de middelen beschikken om zich bij te scholen, of als zij juridische of regelgevingsgerelateerde zorgen hebben, dienen zij te overwegen **samen te werken of de krachten te bundelen met andere zorgverleners** die hier wel over beschikken;

e) Benadrukken dat alle gebruikers van CGM-systemen te allen tijde realtime en open toegang moeten hebben tot **hun eigen gezondheidsgegevens**

f) Benadrukken dat deze open-sourcesystemen niet dezelfde wettelijke beoordelingen hebben ondergaan als commercieel verkrijgbare medische technologieën en dat er geen commerciële technische ondersteuning beschikbaar is. Er is echter **uitgebreide steun vanuit de gemeenschap beschikbaar**; en

g) Een aanbeveling om **regelgeving en juridische kaders** bij te werken, zodat duidelijk is dat een ethische en effectieve behandeling met zulke open-source systemen is toegestaan.

Een ander artikel in [Medical Law International, 2021](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)(_4_) laat ook zien dat de ‘consent guidance’ (richtlijn over toestemming) van de Britse General Medical Council sterk de nadruk legt op beslissingen die arts en patiënt samen nemen. De arts moet de mogelijke voordelen, risico's, lasten en bijwerkingen van een OS-AID APS uitleggen en mag een bepaalde optie aanbevelen zonder de patiënt onder druk te zetten.

Uiteindelijk is het aan de patiënt om deze factoren – evenals eventuele voor hem of haar relevante niet-klinische aspecten – tegen elkaar af te wegen en te beslissen welke behandeloptie (indien van toepassing) te aanvaarden.

Als een arts in de kliniek ontdekt dat een patiënt met een OS-AID-systeem loopt, is de arts niet vrijgesteld van de plicht om de patiënt te volgen, alleen omdat hij de technologie die de patiënt gebruikt niet heeft voorgeschreven; behandelaars moeten patiënten blijven volgen.

Het is artsen (althans in het Verenigd Koninkrijk) niet verboden om geneesmiddelen zonder vergunning voor te schrijven; zij kunnen hierbij hun klinisch oordeel laten gelden. Ze moeten daarom hun klinisch oordeel gebruiken om te beslissen of een OS-AID APS geschikt is voor een bepaalde patiënt, en met de patiënt bespreken wat zij als voor- en nadelen zien.

#### De artikelen hierboven en andere nuttige links en standpunten staan hieronder:

1. Open-source automated insulin delivery: international consensus statement and practical guidance for health-care professionals [_Lancet Diabetes Endocrinol_, (2022) _10_, 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)
2. [In Silico Trials of an Open-Source Android-Based Artificial Pancreas: A New Paradigm to Test Safety and Efficacy of Do-It-Yourself Systems, 2020](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375)
3. A DIY ‘bionic pancreas’ is changing diabetes care — what's next? [_Nature_ (2023), _620_, 940-941](https://doi.org/10.1038/d41586-023-02648-9)
4. Prescribing unapproved medical devices? The case of DIY artificial pancreas systems [_Medical law international_, (2021), _21_, 42-68](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)
5. [Berlin Institute of Health position statement, 2022](https://www.bihealth.org/en/notices/do-it-yourself-solutions-for-people-with-diabetes-are-safe-and-recommended)
6. Do-It-Yourself Automated Insulin Delivery: A Health-care Practitioner User’s Guide (Diabetes Canada position and guide) [_Canadian Journal of Diabetes_ (2023), _47_, E8, 389-397](https://www.canadianjournalofdiabetes.com/article/S1499-2671(23)00138-7/fulltext)
7.  Nederland (EN/NL) – voor behandelaars – [how to help people on open source automated insulin delivery systems](https://www.diabetotech.com/blog/how-to-help-people-on-open-source-automated-insulin-delivery-systems)
8. First Use of Open-Source Automated Insulin Delivery AndroidAPS in Full Closed-Loop Scenario: Pancreas4ALL Randomized Pilot Study [_Diabetes Technol. Ther._, 25, _5_, 2023](https://www.liebertpub.com/doi/pdf/10.1089/dia.2022.0562?casa_token=D13eFx5vCwwAAAAA:MYvO8hChbViXVJFgov1T11RXBPx2N_wOMThLHwl3TVUxbCuANegPrIFRC5R5VXx_S71FoQYW-qg)
9. Pre-school and school-aged children benefit from the switch from a sensor-augmented pump to an AndroidAPS hybrid closed loop: A retrospective analysis [_Pediatr. Diabetes_ 2021, _22_, 594-604. 2021](https://onlinelibrary.wiley.com/doi/epdf/10.1111/pedi.13190)
10. Resultaten van het OPEN-project, een door de EU gefinancierd project over de Outcomes of Patient’s Evidence with Novel, Do-it-Yourself Artificial Pancreas Technology (https://www.open-diabetes.eu/publications)



## Waarom kan ik AAPS niet gewoon downloaden en meteen gebruiken?

De **AAPS**-app is niet beschikbaar in Google Play. Om juridische redenen moet je de app zelf bouwen vanuit de broncode. **AAPS** is niet gelicentieerd, wat betekent dat het geen goedkeuring heeft van een regelgevende instantie in welk land dan ook. Met **AAPS** voer je in feite een medisch experiment op jezelf uit, en dat gebeurt op eigen risico van de gebruiker.

Het opzetten van het systeem vereist geduld, vastberadenheid en de geleidelijke ontwikkeling van technische kennis. Alle informatie en ondersteuning zijn te vinden in deze documenten, ergens anders online of bij anderen die dit al hebben gedaan. Vele duizenden mensen wereldwijd hebben **AAPS** met succes gebouwd en gebruiken het nu.

De ontwikkelaars van **AAPS** nemen veiligheid uiterst serieus en willen dat anderen een goede ervaring hebben met het gebruik van **AAPS**. Daarom is het essentieel dat elke gebruiker (of verzorger, als de gebruiker een kind is):

- het AAPS-systeem zelf bouwt en de **Doelen** doorloopt, zodat hij redelijk goede persoonlijke instellingen heeft en de basis van de werking van **AAPS** begrijpt tegen de tijd dat hij “de loop sluit”;

- een back-up van zijn systeem maakt door belangrijke bestanden (zoals de keystore en het .json-bestand met instellingen) te exporteren en op een veilige plek te bewaren, zodat je zo nodig snel alles opnieuw kunt instellen;

- bijwerkt naar nieuwere masterversies zodra deze beschikbaar komen; en

- het systeem onderhoudt en in de gaten houdt, zodat het goed blijft werken.

## Wat zijn de connectiviteitsmogelijkheden van het AAPS-systeem?

**Figuur 3 (hieronder)** toont een voorbeeld van het **AAPS**-systeem voor een gebruiker die geen volgers nodig heeft die met het systeem werken. Ook aanvullende open-sourcesoftware en -platforms die niet worden weergegeven, kunnen worden geïntegreerd.

![21-06-23 AAPS connectivity no followers](../images/AAPS-connectivity-no-followers.png)


**Figuur 4 (hieronder)** toont alle mogelijkheden van het **AAPS**-systeem voor een gebruiker die volgers heeft en het systeem op afstand moet volgen en aanpassen (zoals bij een kind met type 1-diabetes). Ook aanvullende open-sourcesoftware en -platforms die niet worden weergegeven, kunnen worden geïntegreerd.

![21-06-23 AAPS overview with followers](../images/AAPS-overview-with-followers.png)

## Hoe wordt AAPS voortdurend doorontwikkeld en verbeterd?

De meeste **AAPS**-gebruikers gebruiken de volledig geteste **master**-versie van AAPS. Deze is getest op bugs en problemen voordat hij voor de gemeenschap werd vrijgegeven. Achter de schermen proberen de ontwikkelaars nieuwe verbeteringen uit. Ze testen die in “developer”-versies (**dev**) van **AAPS**, samen met een groep gebruikers die bereid is om op korte termijn updates met bugfixes te installeren. Als de verbeteringen goed werken, worden ze vervolgens uitgebracht als een nieuwe "master"-versie van **AAPS**. Elke nieuwe 'master release' wordt aangekondigd in de Facebook-groep, zodat de reguliere **AAPS**-gebruikers erover kunnen lezen en kunnen updaten naar de nieuwe masterversie.

Sommige ervaren en zelfverzekerde **AAPS**-gebruikers experimenteren met opkomende technologieën en met ontwikkelversies van de **AAPS**-app; voor minder avontuurlijke gebruikers is het interessant om daarover te lezen, zonder dat ze het zelf hoeven te doen! Mensen hebben de neiging om deze experimenten ook in de Facebook-groep te delen.

Hier kun je meer lezen over enkele van deze experimenten en de discussie over opkomende technologieën:

Tim Street [https://www.diabettech.com/](https://www.diabettech.com/)

David Burren [https://bionicwookie.com/](https://bionicwookie.com/)

## Wie kan er baat hebben bij AAPS?

| Gebruikerstype                                       |
| ---------------------------------------------------- |
| ✔️ mensen met diabetes type 1                        |
| ✔️ verzorger of ouder van iemand met diabetes type 1 |
| ✔️ blinde gebruikers met diabetes type 1             |
| ✔️ *behandelaars en zorgverleners                    |

De tabel hierboven gaat ervan uit dat de gebruiker zowel een continue glucosemeter (CGM) als een insulinepomp heeft.

*Alle gegevens van **AAPS** kunnen via platforms voor het delen van gegevens beschikbaar worden gemaakt voor zorgverleners, waaronder Nightscout. Nightscout zorgt voor registratie en realtime volgen van CGM-gegevens, insulinetoediening, ingevoerde koolhydraten, voorspellingen en instellingen. Nightscout-registraties omvatten dagelijkse en wekelijkse rapporten die zorgverleners kunnen ondersteunen bij gesprekken met patiënten met diabetes type 1, dankzij nauwkeurigere gegevens over de glycemische regulatie en eventuele gedragsaspecten.

(accessibility-for-users-aaps-who-are-partially-or-completely-blind)=

### Toegankelijkheid voor AAPS-gebruikers die slechtziend of volledig blind zijn

#### Dagelijks gebruik van AAPS:
AAPS kan door blinden worden gebruikt. Op Android-apparaten beschikt het besturingssysteem over een programma genaamd TalkBack. Hiermee kun je je als onderdeel van het besturingssysteem via spraak op het scherm oriënteren. Door TalkBack te gebruiken, kun je zowel je smartphone als AAPS bedienen zonder dat je hoeft te kunnen zien.

#### De AAPS-app bouwen:
Als gebruiker bouw je de AAPS-app in Android Studio. Veel mensen gebruiken hiervoor Microsoft Windows, dat beschikt over een schermlezer die vergelijkbaar is met TalkBack. Aangezien Android Studio een Java-applicatie is, moet de component "Java Access Bridge" in het Configuratiescherm worden ingeschakeld. Anders zal de schermlezer van de pc niet spreken in Android Studio.

Hoe je dit doet, hangt af van je besturingssysteem. Hieronder staan twee methoden:

1) Typ in het Windows-startmenu “Configuratiescherm” in het zoekveld en open het met Enter. Het venster “Alle Configuratiescherm-onderdelen” wordt geopend.

Open het “Toegankelijkheidscentrum”.

Open vervolgens "Computer zonder beeldscherm gebruiken" met Enter.

Kies onder **Tekst en beschrijvingen hardop laten voorlezen** de opties **Verteller inschakelen** en **Audiobeschrijving inschakelen**, en klik dan op **Toepassen**.

of:

2) Druk op de Windows-toets, typ "Configuratiescherm" in het zoekveld en open dit door op Enter te drukken. Het venster “Alle Configuratiescherm-onderdelen” wordt geopend.

Press the letter E to get to “Ease of Access Centre”, open with Enter.

Open vervolgens "Computer zonder beeldscherm gebruiken" met Enter.

Daar, onderaan, vind je het selectievakje "Java Access Bridge inschakelen"; vink dit aan.

Klaar, sluit gewoon het venster. De schermlezer zou nu moeten werken.



Ben je benieuwd hoe je aan de slag kunt gaan met het opzetten van AAPS? Bekijk het gedeelte over [voorbereiding](../Getting-Started/PreparingForAaps.md).
