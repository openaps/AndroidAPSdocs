# Doelen

AndroidAPS heeft een reeks leerdoelen die je moet doorlopen, zodat je alle opties en instellingen leert kennen om veilig te kunnen loopen. De leerdoelen zorgen ervoor dat je alles goed hebt ingesteld, en dat je snapt wat het systeem doet en waarom. Zodat je erop kunt vertrouwen dat het de juiste keuzes maakt.

Als je **een andere telefoon** gaat gebruiken, dan kun je [jouw instellingen exporteren](../Usage/Objectives#export-import-settings) om je voortgang door de doelstellingen te behouden. Ook jouw veiligheidsinstellingen zoals max. bolus etc. worden hierbij opgeslagen. Wanneer je je instellingen niet exporteert en importeert op je nieuwe telefoon, dan zul je weer helemaal opnieuw moeten beginnen met de leerdoelen. Het is een goed idee om regelmatig een back-up van je instellingen te maken, voor het geval dat er iets met je telefoon gebeurt. Zie onderaan de pagina voor details.  

### Doel 1: Instellen van visualisatie en monitoring en analyseren van basaal en ratio's

* Selecteer de bloedglucose bron die jij gebruikt. Zie [BG bron](../Configuration/BG-Source.md) voor meer informatie.
* Selecteer de juiste pomp in ConfigBuilder (Selecteer 'virtuele pomp' als je een pomp gebruikt waar geen AndroidAPS driver voor bestaat) om ervoor te zorgen dat jouw pomp kan communiceren met AndroidAPS. Als je de DanaR pomp gebruikt, volg dan de [DanaR insulinepomp](../Configuration/DanaR-Insulin-Pump.md) instructies om de pomp te koppelen aan AndroidAPS.
* Volg de instructies van de [Nightscout](../Installing-AndroidAPS/Nightscout.md) pagina om ervoor te zorgen dat Nightscout gegevens kan ontvangen en weergeven.

*Het kan zijn dat je even moet wachten tot de volgende bloedglucose-waarde binnenkomt voordat AndroidAPS de wijzigingen opmerkt.*

### Doel 2: Beginnen met een open loop

* Selecteer Open-Loop vanuit het Instellingen-menu of door de Loop-knop linksbovenin het Overzicht-scherm ingedrukt te houden.
* Stel alle [Instellingen](../Configuration/Preferences.md) in.
* Voer minstens 20 tijdelijke basaalstanden in over een periode van 7 dagen; voer ze handmatig in op jouw pomp en bevestig in AndroidAPS dat je ze hebt geaccepteerd. Controleer dat deze gegevens zichtbaar zijn in AndroidAPS en Nightscout.
* Stel een [Tijdelijk Streefdoel](../Usage/temptarget.md) in indien nodig. Gebruik bijvoorbeeld een tijdelijk hypo streefdoel om te voorkomen dat het systeem te sterk corrigeert voor een stijgende bloedsuiker na een hypo. 

### Doel 3: De Open Loop begrijpen, inclusief de voorgestelde tijdelijke basaalstanden

* Leer de reden achter een suggestie voor tijdelijke basaalstand kennen. Kijk naar de [Basaalstanden begrijpen](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html) en naar de voorspelling in de glucosegrafiek van het AndroidAPS Overzichts-scherm of Nightscout, en naar de berekening in je OpenAPS tab.

*Je wilt beginnen met een streefdoel dat hoger is dan normaal, totdat je vertrouwen in de berekeningen en de instellingen hebt gekregen. Het systeem staat een laag streefdoel toe van minimaal van 4 en maximaal 10 mmol/l, en een hoog streefdoel van minimaal 5 en maximaal 15 mmol/l. Een tijdelijk streefdoel bestaat uit één waarde, die waarde moet liggen tussen de 4 tot en met 15 mmol/l. Het streefdoel is de waarde waar de berekeningen op zijn gebaseerd, en is niet hetzelfde als waar je jouw bloedglucose waarden binnen wilt houden. Wanneer jouw lage en hoge streefdoel ver uit elkaar liggen (bijvoorbeeld 3 mmol/l verschil), dan zal het systeem vaak voorspellen dat je toekomstige bloedglucose binnen jouw streefdoelen gaat uitkomen, en je zult niet vaak een suggestie voor een tijdelijke basaalstand krijgen van het systeem. Dat is aan de ene kant 'lekker rustig': je hoeft weinig tijdelijke basaalstanden in te voeren. Aan de andere kant zorgt het wel voor veel schommelingen in je glucosewaardes omdat het systeem pas laat ingrijpt! Je kunt experimenteren met je lage en hoge streefdoel, voor stabielere waardes moet je een nauwer bereik instellen (bijvoorbeeld 1 mmol/l verschil, of zelfs hetzelfde getal voor laag+hoog doel), en observeren hoe het systeem daardoor zijn gedrag aanpast. Je zult merken dat je meer tijdelijke basaalstanden moet invoeren, maar je glucosewaardes worden dus wel stabieler. Deze tijdelijke streefdoelen zijn iets anders dan het 'groene gebied' dat je in je grafiek ziet. Je kunt waarden voor het groene gebied invoeren via 3 stipjes in rechterbovenhoek > Instellingen > Bereik voor Visualisatie.*

**Stop hier als je een virtuele pomp gebruikt en in Open Loop wilt blijven - klik NIET op Verificatie aan het einde van dit doel.**

### Doel 4: Starten in Closed Loop met bescherming tegen lage BG

**De closed loop zal hoge glucosewaarden in doel 4 niet naar beneden kunnen brengen, omdat in dit doel alleen nog de 'pompstop voor laag' functie geactiveerd is.**

**Om hoge glucosewaarden naar beneden te krijgen, moet je zelf nog handmatig ingrijpen!**

* Selecteer Closed-Loop vanuit het Instellingen-menu of door de Open Loop / Closed Loop -knop linksbovenin het Overzicht-scherm ingedrukt te houden.
* Stel je lage en hoge streefdoel iets hoger in dan je normaal zou doen, voor de zekerheid.
* Kijk hoe tijdelijke basaastanden worden ingesteld door te kijken naar de blauwe tekst in het Overzicht-scherm, of door het blauwe deel van de grafiek op het Overzicht-scherm te bekijken.
* Zorg dat jouw instellingen zo zijn, dat AndroidAPS in 5 dagen tijd niet heeft hoeven ingrijpen om een lage glucosewaarde te voorkomen. Mocht je op dit moment nog veelvuldige of heftige lage glucosewaardes hebben, dan moet je waarschijnlijk nog iets verbeteren aan jouw instellingen van DIA, basaal, ISF of KH ratio (in die volgorde).

*Het systeem zal gedurende dit doel de door jou ingestelde waarde van maxIOB negeren, en een waarde van 0 aanhouden. Dit betekent dat bij een dalende glucosewaarde de basaalstand naar beneden wordt aangepast, maar bij een stijgende glucosewaarde er alleen maar een hogere basaalstand wordt ingesteld wanneer de IOB negatief is (IOB kan negatief zijn, als hij eerder al een lagere basaalstand heeft ingesteld ivm lage glucosewaarde). Zolang de IOB positief is zal het systeem de normale basaalstand aanhouden, zoals ingesteld in jouw profiel. Het kan daardoor voorkomen dat je na een hypo een piek krijgt in je glucosewaarde, omdat het systeem op dat moment geen hogere basaalstand zal instellen._*

### Doel 5: Inregelen van de closed loop, verhoog de max IOB boven 0 en laat geleidelijk de streef BG dalen

* Raise your 'Maximum total IOB OpenAPS can’t go over' (in OpenAPS called 'max-iob') above 0 over a period of 1 day, the default recommendation is "average mealbolus + 3x max daily basal"(for SMB algorithm) or "3x max daily basal" (for older AMA algorithm) but you should slowly work up to this until you know your settings work for you (max daily basal = the maximum hourly value in any time segment of the day).
  
  ![max daily basal](../images/MaxDailyBasal.png)

* Once confident on how much IOB suits your looping patterns then reduce your targets to your desired level.

### Doel 6: Pas basaalstanden en de ratio's aan indien nodig, activeer hierna de Autosens optie

* You can use [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) as a one off to check your basals remain accurate, or do a traditional basal test.
* Enable [autosens](../Usage/Open-APS-features.md) over a period of 7 days and watch the white line on the homescreen graph show how your sensitivity to insulin may be rising or falling as a result of exercise or hormones etc, and keep an eye in the OpenAPS report tab how AndroidAPS is adjusting the basals and/or targets accordingly.

*Don’t forget to record your looping in [this form](http://bit.ly/nowlooping) logging AndroidAPS as your type of DIY loop software, if you have not already done so.*

### Doel 7: Activeren van extra functies overdag zoals AMA (geavanceerde maaltijdhulp, Advanced Meal Assist)

* Now you should feel confident with how AndroidAPS works and what settings reflect your diabetes best
* Then over a period of 28 days you can try additional features that automate even more of the work for you such as the [advanced meal assist](../Usage/Open-APS-features#advanced-meal-assist-ama)

### Doel 8: Activeren van extra functies overdag zoals SMB (Super Micro Bolus)

* You must read the [SMB chapter in this wiki](../Usage/Open-APS-features#super-micro-bolus-smb) and [chapter oref1 in openAPSdocs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) to understand how SMB works, especially what's the idea behind zero-temping.
* Then you ought to [rise maxIOB](../Usage/Open-APS-features#maximum-total-iob-openaps-cant-go-over-openaps-max-iob) to get SMBs working fine. maxIOB now includes all IOB, not just added basal. That is, if given a bolus of 8 U for a meal and maxIOB is 7 U, no SMBs will be delivered until IOB drops below 7 U. A good start is maxIOB = average mealbolus + 3x max daily basal (max daily basal = the maximum hourly value in any time segment of the day - see [objective 5](../Usage/Objectives#objective-5-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets) for an illustration)
* min_5m_carbimpact default in absorption settings has changed from 3 to 8 going from AMA to SMB. Je moet dit handmatig doen wanneer je van AMA naar SMB wisselt.

## Instellingen exporteren & importeren

* **Exporteer instellingen** op je oude telefoon
  
  * Hamburgermenu (3 horizontale strepen in linkerbovenhoek)
  * Onderhoud
  * Exporteer instellingen
  * File location will be shown
    
    ![Exporteer AAPS instellingen](../images/AAPS_ExportSettings.png)

* **Transfer** settings from old to new phone using the file location shown during export

* **Installeer AndroidAPS** op je nieuwe telefoon.
* **Importeer instellingen** op je nieuwe telefoon 
  * Hamburgermenu (3 horizontale strepen in linkerbovenhoek)
  * Onderhoud
  * Importeer instellingen
* **Note for Dana RS users:** 
  * Omdat ook de instellingen voor het verbinden met je pomp zijn mee-geïmporteerd, zal jouw nieuwe telefoon denken dat hij de pomp al "kent" en dus geen Bluetooth verbindingsverzoek doen. Please pair new phone and pump manually.