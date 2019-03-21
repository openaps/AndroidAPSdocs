# Doelen

AndroidAPS heeft een reeks leerdoelen die je moet doorlopen, zodat je alle opties en instellingen leert kennen om veilig te kunnen loopen. De leerdoelen zorgen ervoor dat je alles goed hebt ingesteld, en dat je snapt wat het systeem doet en waarom. Zodat je erop kunt vertrouwen dat het de juiste keuzes maakt.

Als je **een andere telefoon** gaat gebruiken, dan kun je [jouw instellingen exporteren](../Usage/Objectives.md#export-import-settings) om je voortgang door de doelstellingen te behouden. Ook jouw veiligheidsinstellingen zoals max. bolus etc. worden hierbij opgeslagen. Wanneer je je instellingen niet exporteert en importeert op je nieuwe telefoon, dan zul je weer helemaal opnieuw moeten beginnen met de leerdoelen. Het is een goed idee om regelmatig een back-up van je instellingen te maken, voor het geval dat er iets met je telefoon gebeurt. Zie onderaan de pagina voor details.  

* **Doel 1:** Instellen van visualisatie en monitoring en analyseren van basaal en ratio's 
  * Selecteer de bloedglucose bron die jij gebruikt. Zie [BG bron](../Configuration/BG-Source.md) voor meer informatie.
  * Selecteer de juiste pomp in ConfigBuilder (Selecteer 'virtuele pomp' als je een pomp gebruikt waar geen AndroidAPS driver voor bestaat) om ervoor te zorgen dat jouw pomp kan communiceren met AndroidAPS. Als je de DanaR pomp gebruikt, volg dan de [DanaR insulinepomp](../Configuration/DanaR-Insulin-Pump.md) instructies om de pomp te koppelen aan AndroidAPS.
  * Volg de instructies van de [Nightscout](../Installing-AndroidAPS/Nightscout.md) pagina om ervoor te zorgen dat Nightscout gegevens kan ontvangen en weergeven. <br />&nbsp;  
    _Het kan zijn dat je moet wachten totdat er een glucosewaarde wordt afgegeven door jouw sensor, voordat AndroidAPS deze nieuwe instellingen zal herkennen._ <br />&nbsp;  
     
* **Doel 2:** Starten in de Open Loop modus 
  * Selecteer Open-Loop vanuit het Instellingen-menu of door de Loop-knop linksbovenin het Overzicht-scherm ingedrukt te houden.
  * Stel alle [Instellingen](../Configuration/Preferences.md) in.
  * Voer minstens 20 tijdelijke basaalstanden in over een periode van 7 dagen; voer ze handmatig in op jouw pomp en bevestig in AndroidAPS dat je ze hebt geaccepteerd. Controleer dat deze gegevens zichtbaar zijn in AndroidAPS en Nightscout.
  * Enable [temp targets](../Usage/temptarget.md) if necessary. Gebruik bijvoorbeeld een tijdelijk hypo streefdoel om te voorkomen dat het systeem te sterk corrigeert voor een stijgende bloedsuiker na een hypo. <br />&nbsp;  
     
* **Doel 3:** De Open Loop begrijpen, inclusief de voorgestelde tijdelijke basaalstanden 
  * Leer de reden achter een suggestie voor tijdelijke basaalstand kennen. Kijk naar de [Basaalstanden begrijpen](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html) en naar de voorspelling in de glucosegrafiek van het AndroidAPS Overzichts-scherm of Nightscout, en naar de berekening in je OpenAPS tab.   
    &nbsp;  
    _Je wilt beginnen met een streefdoel dat hoger is dan normaal, totdat je vertrouwen in de berekeningen en de instellingen hebt gekregen. Het systeem staat een laag streefdoel toe van minimaal van 4 en maximaal 10 mmol/l, en een hoog streefdoel van minimaal 5 en maximaal 15 mmol/l. Een tijdelijk streefdoel bestaat uit één waarde, die waarde moet liggen tussen de 4 tot en met 15 mmol/l. Het streefdoel is de waarde waar de berekeningen op zijn gebaseerd, en is niet hetzelfde als waar je jouw bloedglucose waarden binnen wilt houden. Wanneer jouw lage en hoge streefdoel ver uit elkaar liggen (bijvoorbeeld 3 mmol/l verschil), dan zal het systeem vaak voorspellen dat je toekomstige bloedglucose binnen jouw streefdoelen gaat uitkomen, en je zult niet vaak een suggestie voor een tijdelijke basaalstand krijgen van het systeem. Je kunt experimenteren met je lage en hoge streefdoel en een nauwer bereik instellen (bijvoorbeeld 1 of minder mmol/l verschil), en observeren hoe het systeem daardoor zijn gedrag aanpast. Let op: het lage en hoge streefdoel is iets anders dan het groen gearceerde gebied in de grafiek op het Overzicht-scherm. Welk gebied jij groen gearceerd wilt hebben, kun je kiezen in Instellingen > Bereik voor visualisatie._   
    &nbsp;  
    _Stop hier als je de open loop modus wilt blijven gebruiken met een virtuele pomp - klik NIET op bevestigen wanneer je klaar bent met dit doel._ <br />&nbsp;  
    
* **Doel 4:** Starten in closed loop modus met bescherming tegen lage BG 
  * Selecteer Closed-Loop vanuit het Instellingen-menu of door de Loop-knop linksbovenin het Overzicht-scherm ingedrukt te houden.
  * Stel je lage en hoge streefdoel iets hoger in dan je normaal zou doen, voor de zekerheid.
  * Kijk hoe tijdelijke basaastanden worden ingesteld door te kijken naar de blauwe tekst in het Overzicht-scherm, of door het blauwe deel van de grafiek op het Overzicht-scherm te bekijken.
  * Zorg dat jouw instellingen zo zijn, dat AndroidAPS in 5 dagen tijd niet heeft hoeven ingrijpen om een lage glucosewaarde te voorkomen. Mocht je op dit moment nog veelvuldige of heftige lage glucosewaardes hebben, dan moet je waarschijnlijk nog iets verbeteren aan jouw instellingen van DIA, KH ratio, basaal of ISF. <br />&nbsp;  
    _Het systeem zal gedurende dit Doel de door jou ingestelde waarde van maxIOB negeren, en een waarde van 0 aanhouden. Dit betekent dat bij een dalende glucosewaarde de basaalstand naar beneden wordt aangepast, maar bij een stijgende glucosewaarde er alleen maar een hogere basaalstand wordt ingesteld wanneer de IOB negatief is (IOB kan negatief zijn, als hij eerder al een lagere basaalstand heeft ingesteld ivm lage glucosewaarde). Zolang de IOB positief is zal het systeem de normale basaalstand aanhouden, zoals ingesteld in jouw profiel. Het kan daardoor voorkomen dat je na een hypo een piek krijgt in je glucosewaarde, omdat het systeem op dat moment geen hogere basaalstand zal instellen._ <br />&nbsp;  
    
* **Doel 5:** Inregelen van de closed loop, verhoog de max IOB boven 0 en laat geleidelijk jouw streef BG dalen 
  * Verhoog nu jouw instelling voor 'Maximum totaal IOB dat OpenAPS niet kan overschrijden' boven de 0, gedurende 1 dag. De aanbevolen waarde is 2, maar je moet geleidelijk aan verhogen totdat je weet welke instelling voor jou goed werkt.
  * Nadat je weet welke IOB instelling goed bij jou past, kun je ook je BG streefdoel instellingen gaan verlagen. <br />&nbsp;  
     
* **Doel 6:** Pas basaalstanden en de ratio's aan indien nodig, activeer hierna de auto-sens optie 
  * Je kunt [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) gebruiken om eenmalig te laten berekenen of jouw basaalstanden goed zijn ingesteld, of een traditionele basaaltest doen.
  * Schakel [autosens](../Usage/Open-APS-features.md) in gedurende een periode van 7 dagen en bekijk de witte lijn in de grafiek op het Overzichts-scherm. Die lijn geeft weer hoe jouw gevoeligheid voor insuline kan verhogen of verminderen als gevolg van beweging, hormonen etc. Bekijk ook af en toe de OpenAPS tab om te zien hoe AndroidAPS je basaalstanden en/of BG streefdoelen aanpast adhv jouw gevoeligheid op dat moment. <br />&nbsp;  
    _Vergeet niet om op [dit formulier](http://bit.ly/nowlooping) aan te geven dat jij aan het loopen bent, als je dat nog niet had gedaan. Geef aan dat jij AndroidAPS gebruikt als software._ <br />&nbsp;  
    
* **Doel 7:** Activeren van extra functies overdag zoals AMA (geavanceerde maaltijdhulp, Advanced Meal Assist) 
  * Nu zou je je vertrouwd moeten voelen met de werking van AndroidAPS, en weten welke instellingen het beste bij jouw diabetes passen
  * Gedurende een periode van 28 dagen kun je extra functies uitproberen die nog meer rekenwerk voor jou uit handen nemen, zoals de [geavanceerde maaltijdhulp (AMA)](../Usage/Open-APS-features.html#advanced-meal-assist-ama) <br />&nbsp;  
    
* **Doel 8:** Extra oref1 functies inschakelen voor gebruik overdag, zoals super micro bolus (SMB) 
  * Je moet het [SMB hoofdstuk in deze wiki](../Usage/Open-APS-features.html#super-micro-bolus-smb) en het [hoofdstuk oref1 in openAPSdocs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html&quot;) lezen om te begrijpen hoe SMB werkt, met name het idee achter de tijdelijke basaalstanden van nul (zero-temp).
  * Daarna kun je [maxIOB verhogen](../Usage/Open-APS-features.html#maximum-total-iob-openaps-cant-go-over-openaps-max-iob) zodat SMB goed kan functioneren. maxIOB bevat nu alle IOB, niet alleen de toegediende basale insuline. Dat betekent, wanneer je een bolus van 8 E voor een maaltijd hebt gegeven en jouw maxIOB is 7 E, dat er dan geen SMBs worden afgegeven totdat jouw IOB is gedaald tot onder de 7 E. Een goed beginpunt is maxIOB = gemiddelde maaltijdbolus + 3x jouw hoogste basaalstand.
  * Wanneer je van AMA naar SMB wisselt, dan moet je jouw instelling voor min_5m_carbimpact in de Opname instellingen veranderen van 3 naar 8. Je moet dit handmatig doen wanneer je van AMA naar SMB wisselt.

## Instellingen exporteren & importeren

* **Exporteer instellingen** op je oude telefoon
  
  * Hamburgermenu (3 horizontale strepen in linkerbovenhoek)
  * Onderhoud
  * Exporteer instellingen
  * Je ziet nu de locatie waar jouw instellingenbestand zal worden opgeslagen
    
    ![Exporteer AAPS instellingen](../images/AAPS_ExportSettings.png)

* **Instellingen overdragen** van je oude naar je nieuwe telefoon doe je door de bestandslocatie op je oude telefoon op te zoeken, en het instellingenbestand te kopiëren naar jouw nieuwe telefoon. Bijvoorbeeld via Bluetooth, email, of met een usb-kabeltje via je computer.

* **Installeer AndroidAPS** op je nieuwe telefoon.
* **Instellingen importeren** op je nieuwe telefoon 
  * Hamburgermenu (3 horizontale strepen in linkerbovenhoek)
  * Onderhoud
  * Importeer instellingen
* **Tip voor Dana RS gebruikers:** 
  * Omdat ook de instellingen voor het verbinden met je pomp zijn mee-geïmporteerd, zal jouw nieuwe telefoon denken dat hij de pomp al "kent" en dus geen Bluetooth verbindingsverzoek doen. Daarom moet je handmatig een Bluetooth verbinding maken tussen jouw nieuwe telefoon en je pomp.