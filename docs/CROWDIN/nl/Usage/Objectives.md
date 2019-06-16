# Doelen

AndroidAPS heeft een reeks leerdoelen die je moet doorlopen, zodat je alle opties en instellingen leert kennen om veilig te kunnen loopen. De leerdoelen zorgen ervoor dat je alles goed hebt ingesteld, en dat je snapt wat het systeem doet en waarom. Zodat je erop kunt vertrouwen dat het de juiste keuzes maakt.

Als je **een andere telefoon** gaat gebruiken, dan kun je [jouw instellingen exporteren](../Usage/Objectives#export-import-settings) om je voortgang door de doelstellingen te behouden. Ook jouw veiligheidsinstellingen zoals max. bolus etc. worden hierbij opgeslagen. Wanneer je je instellingen niet exporteert en importeert op je nieuwe telefoon, dan zul je weer helemaal opnieuw moeten beginnen met de leerdoelen. Het is een goed idee om regelmatig een back-up van je instellingen te maken, voor het geval dat er iets met je telefoon gebeurt. Zie onderaan de pagina voor details.  

### Doel 1: Instellen van visualisatie en monitoring en analyseren van basaal en ratio's

    * Selecteer de bloedglucose bron die jij gebruikt.  Zie [BG Source](../Configuratie/BG-Source.md) voor meer informatie.
    * Selecteer de juiste pomp in Configurator (Selecteer 'virtuele pomp' als je een pomp gebruikt waar geen AndroidAPS driver voor bestaat) om ervoor te zorgen dat jouw pomp kan communiceren met AndroidAPS.  Als je de DanaR pomp gebruikt, volg dan de [DanaR](../Configuration/DanaR-Insulin-Pump.md) instructies om de pomp te koppelen aan AndroidAPS.
    * Volg de instructies van de [Nightscout](../Installing-AndroidAPS/Nightscout.md) pagina om ervoor te zorgen dat Nightscout gegevens kan ontvangen en weergeven.
    

*Het kan zijn dat je even moet wachten tot de volgende bloedglucose-waarde binnenkomt voordat AndroidAPS de wijzigingen opmerkt.*

### Doel 2: Beginnen met een open loop

    * Selecteer Open-Loop vanuit het Instellingen-menu of door de Open Loop / Closed Loop -knop linksbovenin het Overzicht-scherm ingedrukt te houden.
    * Werk door de [Instellingen](../Configuratie/Voorkeuren.md) heen om de loop in te stellen.
    * Voer minstens 20 tijdelijke basaalstanden in over een periode van 7 dagen; voer ze in op jouw pomp en bevestig in AndroidAPS dat je ze hebt geaccepteerd.  Controleer dat deze gegevens zichtbaar zijn in AndroidAPS en Nightscout.
    * Stel [tijdelijke streefdoelen](../Usage/temptarget.md) in indien nodig. Gebruik bijvoorbeeld een tijdelijk hypo streefdoel om te voorkomen dat het systeem te sterk corrigeert voor een stijgende bloedsuiker na een hypo. 
    

### Doel 3: De Open Loop begrijpen, inclusief de voorgestelde tijdelijke basaalstanden

    * Leer de reden achter een suggestie voor tijdelijke basaalstand kennen. Kijk naar de [determine basal logic](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html) en naar de voorspelling in de glucosegrafiek van het AndroidAPS Overzichts-scherm of Nightscout, en naar de berekening in je OpenAPS tab.
    

*Je wilt beginnen met een streefdoel dat hoger is dan normaal, totdat je vertrouwen in de berekeningen en de instellingen hebt gekregen. Het systeem staat een laag streefdoel toe van minimaal van 4 en maximaal 10 mmol/l, en een hoog streefdoel van minimaal 5 en maximaal 15 mmol/l. Een tijdelijk streefdoel bestaat uit één waarde, die waarde moet liggen tussen de 4 tot en met 15 mmol/l. Het streefdoel is de waarde waar de berekeningen op zijn gebaseerd, en is niet hetzelfde als waar je jouw bloedglucose waarden binnen wilt houden. Wanneer jouw lage en hoge streefdoel ver uit elkaar liggen (bijvoorbeeld 3 mmol/l verschil), dan zal het systeem vaak voorspellen dat je toekomstige bloedglucose binnen jouw streefdoelen gaat uitkomen, en je zult niet vaak een suggestie voor een tijdelijke basaalstand krijgen van het systeem. Dat is aan de ene kant 'lekker rustig': je hoeft weinig tijdelijke basaalstanden in te voeren. Aan de andere kant zorgt het wel voor veel schommelingen in je glucosewaardes omdat het systeem pas laat ingrijpt! Je kunt experimenteren met je lage en hoge streefdoel, voor stabielere waardes moet je een nauwer bereik instellen (bijvoorbeeld 1 mmol/l verschil, of zelfs hetzelfde getal voor laag+hoog doel), en observeren hoe het systeem daardoor zijn gedrag aanpast. Je zult merken dat je meer tijdelijke basaalstanden moet invoeren, maar je glucosewaardes worden dus wel stabieler. Deze tijdelijke streefdoelen zijn iets anders dan het 'groene gebied' dat je in je grafiek ziet. Je kunt waarden voor het groene gebied invoeren via 3 stipjes in rechterbovenhoek > Instellingen > Bereik voor Visualisatie.*

**Stop hier als je een virtuele pomp gebruikt en in Open Loop wilt blijven - klik NIET op Verificatie aan het einde van dit doel.**

### Doel 4: Starten in Closed Loop met bescherming tegen lage BG

    * Selecteer Closed-Loop vanuit het Instellingen-menu of door de Open Loop / Closed Loop -knop linksbovenin het Overzicht-scherm ingedrukt te houden.
    * Stel je lage en hoge streefdoel iets hoger in dan je normaal zou doen, voor de zekerheid.
    * Kijk hoe tijdelijke basaastanden worden ingesteld door te kijken naar de blauwe tekst in het Overzicht-scherm, of door het blauwe deel van de grafiek op het Overzicht-scherm te bekijken.
    * Zorg dat jouw instellingen zo zijn, dat AndroidAPS in 5 dagen tijd niet heeft hoeven ingrijpen om een lage glucosewaarde te voorkomen.  Mocht je op dit moment nog veelvuldige of heftige lage glucosewaardes hebben, dan moet je waarschijnlijk nog iets verbeteren aan jouw instellingen van DIA, basaal, ISF of KH ratio (in die volgorde).
    

*Het systeem zal gedurende dit doel de door jou ingestelde waarde van maxIOB negeren, en een waarde van 0 aanhouden. Dit betekent dat bij een dalende glucosewaarde de basaalstand naar beneden wordt aangepast, maar bij een stijgende glucosewaarde er alleen maar een hogere basaalstand wordt ingesteld wanneer de IOB negatief is (IOB kan negatief zijn, als hij eerder al een lagere basaalstand heeft ingesteld ivm lage glucosewaarde). Zolang de IOB positief is zal het systeem de normale basaalstand aanhouden, zoals ingesteld in jouw profiel. Het kan daardoor voorkomen dat je na een hypo een piek krijgt in je glucosewaarde, omdat het systeem op dat moment geen hogere basaalstand zal instellen.*

### Doel 5: Inregelen van de closed loop, verhoog de max IOB boven 0 en laat geleidelijk de streef BG dalen

    * Raise your 'Maximum total IOB OpenAPS can’t go over' (in OpenAPS called 'max-iob') above 0 over a period of 1 day, the default recommendation is "average mealbolus + 3x max daily basal"(for SMB algorithm) or "3x max daily basal" (for older AMA algorithm) but you should slowly work up to this until you know your settings work for you.
    * Nadat je weet welke IOB instelling goed bij jou past, kun je ook je BG streefdoel instellingen gaan verlagen.
    

### Doel 6: Pas basaalstanden en de ratio's aan indien nodig, activeer hierna de Autosens optie

    * Je kunt [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) gebruiken om eenmalig te laten berekenen of jouw basaalstanden goed zijn ingesteld, of een traditionele basaaltest doen. Zie ook de "Veelgestelde vragen" sectie van deze wiki.
    * Schakel [Autosens](../Usage/Open-APS-features.md) in gedurende een periode van 7 dagen en bekijk de witte lijn in de grafiek op het Overzichts-scherm. Die lijn geeft weer hoe jouw gevoeligheid voor insuline kan verhogen of verminderen als gevolg van beweging, hormonen etc. Bekijk ook af en toe de OpenAPS tab om te zien hoe AndroidAPS je basaalstanden en/of BG streefdoelen aanpast adhv jouw gevoeligheid op dat moment.
    

*Vergeet niet om jezelf als nieuwe looper aan te melden via [dit formulier](http://bit.ly/nowlooping) en AndroidAPS als type loop-software te kiezen, als je dat nog niet gedaan hebt.*

### Doel 7: Activeren van extra functies overdag zoals AMA (geavanceerde maaltijdhulp, Advanced Meal Assist)

    * Nu zou je je inmiddels vertrouwd moeten voelen met hoe AndroidAPS werkt, en welke instellingen het beste bij jou passen
    * Daarna kun je gedurende een periode van 28 dagen extra functies gaan gebruiken die alles nog meer automatiseren, zoals de <a href="../Usage/Open-APS-features.html#advanced-meal-assist-ama">geavanceerde maaltijd hulp</a>
    

### Doel 8: Activeren van extra functies overdag zoals SMB (Super Micro Bolus)

    Je moet het <a href="../Usage/Open-APS-features.html#super-micro-bolus-smb">SMB hoofdstuk in deze wiki</a> en het [hoofdstuk oref1 in openAPSdocs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) lezen om te begrijpen hoe SMB werkt, met name het idee achter de tijdelijke basaalstanden van nul (zero-temp).
    * Daarna kun je <a href="../Usage/Open-APS-features.html#maximum-total-iob-openaps-cant-go-over-openaps-max-iob">maxIOB verhogen</a> zodat SMB goed kan functioneren. Opmerking: maxIOB bevat nu alle IOB, niet alleen de toegediende basale insuline. Dat betekent dat na een bolus van 8E voor een maaltijd en maxIOB van 7E, er geen SMBs zullen worden afgegeven totdat IOB onder de 7E komt. Een goede start is maxIOB = gemiddelde maaltijdbolus + 3x max dagelijkse basaal
    * De instelling voor min_5m_carbimpact moet veranderen van de standaardwaarde 3 (zoals bij AMA) naar 8 (zoals bij SMB). Je moet dit zelf handmatig doen in de instellingen. Vergeet dit niet te doen!
    

## Instellingen exporteren & importeren

* **Exporteer instellingen** op je oude telefoon
  
  * Hamburgermenu (3 horizontale strepen in linkerbovenhoek)
  * Onderhoud
  * Exporteer instellingen
  * Je ziet nu de locatie waar jouw instellingenbestand zal worden opgeslagen
    
    ![Exporteer AAPS instellingen](../images/AAPS_ExportSettings.png)

* **Instellingen overdragen** van je oude naar je nieuwe telefoon doe je door de bestandslocatie op je oude telefoon op te zoeken, en het instellingenbestand te kopiëren naar jouw nieuwe telefoon. Bijvoorbeeld via Bluetooth, email, of met een usb-kabeltje via je computer.

* **Installeer AndroidAPS** op je nieuwe telefoon.
* **Importeer instellingen** op je nieuwe telefoon 
  * Hamburgermenu (3 horizontale strepen in linkerbovenhoek)
  * Onderhoud
  * Importeer instellingen
* **Tip voor Dana RS gebruikers:** 
  * Omdat ook de instellingen voor het verbinden met je pomp zijn mee-geïmporteerd, zal jouw nieuwe telefoon denken dat hij de pomp al "kent" en dus geen Bluetooth verbindingsverzoek doen. Daarom moet je handmatig een Bluetooth verbinding maken tussen jouw nieuwe telefoon en je pomp. Dit doe je via het Bluetooth-menu van jouw telefooninstellingen.