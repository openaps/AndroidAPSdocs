# AccuChek Combo Tips voor eenvoudig gebruik

## Hoe zorgen voor een soepele werking

* Altijd **je smartphone bij je dragen**, laat hem s'nachts naast je bed liggen.
* Zorg er voor dat de pompbatterij altijd zo vol als mogelijk is. Zie de batterij sectie voor tips met betrekking tot de batterij.
* Het is het beste om **de app-ruffy** niet te gebruiken terwijl het systeem in gebruik is. Als de app opnieuw wordt gestart, kan de verbinding met de pomp worden verbroken. Zodra de pomp is aangesloten op ruffy, is er geen noodzaak om opnieuw te verbinden. Zelfs na een herstart van de telefoon wordt de verbinding automatisch opnieuw tot stand gebracht. Verplaats de app indien mogelijk naar een ongebruikt scherm of in een map van de smartphone zodat je deze niet per ongeluk opent.
* Als je de app ruffy tijdens het loopen onbedoeld opent, dan is het het beste om de smartphone direct opnieuw te starten.
* Waar mogelijk moet de pomp alleen via de AndroidAPS-app worden gebruikt worden Om dit te vergemakkelijken, activeer het sleutelvergrendeling op de pomp: **PUMP SETTINGS / KEY LOCK / ON**. Alleen bij het vervangen van de batterij of reservoir, is nodig om de pomp toetsen te gebruiken. ![Keylock](../images/combo/combo-tips-keylock.png)

## Pomp niet bereikbaar. Wat te doen?

### Activeer pomp niet bereikbaar alarm

* In AndroidAPS, go to **Settings / Local Alarms** and activate **alarm when pump is unreachable** and set **pump not reachable limit [Min]** to **31** minutes. 
* Dit geeft u voldoende tijd om het alarm niet af te laten gaan wanneer u de kamer verlaat terwijl uw telefoon op het bureau ligt, maar informeert u als de pomp niet kan worden bereikt gedurende een tijd die de duur van een tijdelijke basaalsnelheid overschrijdt.

### Herstel de bereikbaarheid van de pomp

* Wanneer AndroidAPS een **pomp onbereikbaar** alarm meldt, laat dan eerst de toetsvergrendeling los en **druk op een willekeurige toets op de pomp** (bijv. "omlaag" knop). Zodra het pompdisplay is uitgeschakeld, drukt u op **UPDATE** op de **Combo Tab** in AndroidAPS. Meestal werkt de communicatie dan weer.
* Als dat niet helpt, start u uw smartphone opnieuw op. Na de herstart worden AndroidAPS en ruffy opnieuw geactiveerd en wordt er een nieuwe verbinding met de pomp tot stand gebracht.
* De tests met verschillende smartphones hebben aangetoond dat bepaalde smartphones vaker de "pomp onbereikbaar"-fout veroorzaken dan andere. [AAPS Phones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) geeft een overzicht van succesvol geteste smartphones.

### Oorzaken en gevolgen van frequente communicatiefouten

* Op telefoons met **weinig geheugen** (of **agressieve energiebesparende** instellingen) wordt AndroidAPS vaak afgesloten. U kunt dit zien aan het feit dat de Bolus- en Calculator-knoppen op het startscherm niet worden weergegeven bij het openen van AAPS omdat het systeem wordt geïnitialiseerd. Dit kan bij het opstarten "pomp onbereikbare alarmen" activeren. In het veld **Laatste verbinding** van het tabblad Combo kunt u controleren wanneer AndroidAPS voor het laatst met de pomp heeft gecommuniceerd.

![Pomp niet beschikbaar](../images/combo/combo-tips-pump-unreachable.png) ![Geen verbinding met pomp](../images/combo/combo-tips-no-connection-to-pump.png)

* Deze fout kan de batterij van de pomp sneller leegmaken omdat het basaalprofiel van de pomp wordt gelezen wanneer de app opnieuw wordt gestart.
* Het vergroot ook de kans op het veroorzaken van de fout die ervoor zorgt dat de pomp alle inkomende verbindingen verwerpt totdat een knop op de pomp wordt ingedrukt.

## Annulering van tijdelijke basaalsnelheid mislukt

* Af en toe kan AndroidAPS een **TBR GEANNULEERD**-waarschuwing niet automatisch annuleren. Vervolgens moet u ofwel op **UPDATE** drukken in de AndroidAPS **Combo-tab** of het alarm op de pomp wordt bevestigd.

## Overwegingen voor pompbatterij

### De batterij vervangen

* Na een alarm **batterij bijna leeg** moet de batterij zo snel mogelijk worden vervangen om altijd voldoende energie te hebben voor een betrouwbare Bluetooth-communicatie met de smartphone, zelfs als de telefoon zich binnen een grotere afstand van de pomp bevindt.
* Zelfs na een alarm **batterij bijna leeg**, kan de batterij gedurende een aanzienlijke tijd worden gebruikt. Het is echter aan te raden om altijd een verse batterij bij je te hebben nadat het alarm "batterij bijna leeg" is afgegaan.
* Om dit te doen, drukt u lang op **Closed Loop** op het hoofdscherm en selecteert u **Lossing loop for 1h**.
* Wacht tot de pomp communiceert met de telefoon en het Bluetooth-logo op de pomp vervaagd is.

![Bluetooth ingeschakeld](../images/combo/combo-tips-compo.png)

* Laat de toetsvergrendeling op de pomp los, zet de pomp in de stopmodus, bevestig een eventueel geannuleerde tijdelijke basaalsnelheid en vervang de batterij.
* Zet de pomp vervolgens weer in de bedrijfsmodus, selecteer **Resume** door lang op **Suspended** op het hoofdscherm te drukken.
* AndroidAPS stelt een noodzakelijke tijdelijke basaalsnelheid opnieuw in bij de komst van de volgende bloedsuikerwaarde.

### Batterijtype en oorzaken van een korte levensduur van de batterij

* Aangezien intensieve Bluetooth-communicatie veel energie verbruikt, gebruik dan alleen **hoogwaardige batterijen** zoals Energizer Ultimate Lithium, de "power one"s uit het "grote" Accu-Chek servicepack, of als u voor een oplaadbare batterij, gebruik dan Eneloop-batterijen.

![Energizer](../images/combo/combo-tips-energyr.jpg) ![OnePower](../images/combo/combo-tips-power-one.png)

De bereiken voor de typische levensduur van de verschillende batterijtypes zijn als volgt:

* **Energizer Ultimate Lithium**: 4 tot 7 weken
* **Power One Alkaline** (Varta) uit het servicepakket: 2 tot 4 weken
* **Eneloop oplaadbare** batterijen (BK-3MCCE): 1 tot 3 weken

Als de levensduur van uw batterij aanzienlijk korter is dan het hierboven vermelde bereik, controleer dan de volgende mogelijke oorzaken:

* De nieuwste versie (maart 2018) van de [ruffy App](https://github.com/MilosKozak/ruffy) heeft de levensduur van de pompbatterij aanzienlijk verbeterd. Zorg ervoor dat u die versie gebruikt als u problemen ondervindt met een korte levensduur van de batterij.
* Er zijn enkele varianten van de opschroefbare batterijdop van de Combo-pomp, die de batterijen gedeeltelijk kortsluiten en snel leegmaken. De doppen zonder dit probleem zijn te herkennen aan de gouden metalen contacten.
* Als de pompklok een korte batterijwissel niet "overleeft", is het waarschijnlijk dat de condensator kapot is, waardoor de klok blijft lopen tijdens een korte stroomstoring. In dit geval zal alleen een vervanging van de pomp door Roche helpen, wat geen probleem is tijdens de garantieperiode.
* De hardware en software van de smartphone (Android-besturingssysteem en bluetooth-stack) hebben ook invloed op de levensduur van de batterij van de pomp, hoewel de exacte factoren nog niet volledig bekend zijn. Als je de mogelijkheid hebt probeer een andere smartphone en vergelijk de levensduur van de batterij.

## Wijziging zomertijd

* Momenteel ondersteunt de combo-driver geen automatische aanpassing van de pomptijd.
* Tijdens de nacht van een zomertijdwijziging wordt de tijd van de smartphone bijgewerkt, maar de tijd van de pomp blijft ongewijzigd. Dit leidt tot een alarm vanwege afwijkende tijden tussen de systemen om 3 uur 's nachts.
* Als u 's nachts niet gewekt wilt worden, **schakel de automatische zomertijdomschakeling op de mobiele telefoon** 's avonds voor de tijdomschakeling uit en pas de volgende ochtend de tijden handmatig aan.

## Verlengde bolus, multiwave bolus

Het OpenAPS-algoritme ondersteunt geen parallelle verlengde bolus of multiwave-bolus. Maar een vergelijkbare behandeling kan worden bereikt door het volgende alternatief:

* Voer de koolhydraten in, maar doe er geen bolus voor. Het loop-algoritme zal agressiever reageren. Gebruik indien nodig **eCarbs** (verlengde koolhydraten).

* Als u in de verleiding komt om de verlengde of meervoudige bolus direct op de pomp te gebruiken, zal AndroidAPS u bestraffen door de gesloten lus de komende zes uur uit te schakelen om ervoor te zorgen dat er geen overmatige insulinedosering wordt berekend.

![Uitgeschakelde lus na multiwave-bolus](../images/combo/combo-tips-multiwave-bolus.png)

## Alarmen bij bolustoediening

* Als AndroidAPS detecteert dat een identieke bolus met succes op dezelfde minuut is toegediend, wordt de bolustoediening voorkomen met een identiek aantal insuline-eenheden. Als u dezelfde insuline echt twee keer kort achter elkaar wilt bolussen, wacht dan nog twee minuten en geef de bolus dan opnieuw. Als de eerste bolus is onderbroken of om andere redenen niet is toegediend, kunt u de bolus sinds AAPS 2.0 onmiddellijk opnieuw indienen.
* Achtergrond is een veiligheidsmechanisme dat de bolusgeschiedenis van de pomp leest voordat een nieuwe bolus wordt ingediend om insuline aan boord (IOB) correct te berekenen, zelfs wanneer een bolus rechtstreeks door de pomp wordt toegediend. Hier moeten niet te onderscheiden vermeldingen worden voorkomen.

![Dubbele bolus](../images/combo/combo-tips-doppelbolus.png)

* Dit mechanisme is ook verantwoordelijk voor een tweede oorzaak van de fout: als tijdens het gebruik van de boluscalculator een andere bolus via de pomp wordt toegediend en daardoor de bolusgeschiedenis verandert, is de basis van de bolusberekening verkeerd en wordt de bolus afgebroken.

![Geannuleerde bolus](../images/combo/combo-tips-history-changed.png) 

