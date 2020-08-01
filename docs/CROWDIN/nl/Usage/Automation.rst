Automatisering
**************************************************

Wat is automatisering
==================================================
Voor bepaalde veelvoorkomende gebeurtenissen moet je wellicht altijd dezelfde instellingen wijzigen. Om extra werk te voorkomen, kun je proberen om dit te automatiseren, en het dus automatisch voor je te laten doen. 

Bijv. wanneer jouw BG te laag is, kun je besluiten om automatisch een hoger tijdelijk streefdoel in te stellen. Of als je in het sportcentrum bent, wordt er automatisch een tijdelijk streefdoel voor je ingesteld. 

Voordat je automatisering gebruikt, moet je ruime ervaring hebben met de handmatige 'tijdelijke streefdoelen <./temptarget.html>`_ of handmatige profiel wissels die je toepast. 

Zorg ervoor dat je goed begrijpt hoe automatisering werkt voordat je jouw eerste eenvoudige regel aanmaakt. **In plaats van de regel een actie te laten uitvoeren, laat hem alleen een notificatie tonen.** Pas als je zeker weet dat de automatisering op het juiste moment wordt geactiveerd, vervang je de melding door een echte actie.

.. image:: ../images/Automation_ConditionAction_RC3.png
  :alt: Automatiseringsvoorwaarde + actie

Zo stel je het in
==================================================
Als je een automatisering wilt instellen, moet je deze een titel geven, en ten minste één voorwaarde en één actie selecteren. 

Belangrijke opmerking
--------------------------------------------------
**Automatisering is nog steeds actief wanneer je de loop uitschakelt!**

Dus zorg ervoor dat je de Automation-regels deactiveert indien nodig. Je kunt dit doen door het vinkje in het vakje bij de naam van jouw automatiseringsregel weg te halen.

.. image:: ../images/Automation_ActivateDeactivate.png
  :alt: Automatiseringsregel activeren en deactiveren

Algemeen
--------------------------------------------------
Er zijn een aantal beperkingen:

* De glucosewaarde moet tussen 72 en 270 mg/dl of 4 en 15 mmol/l liggen.
* Het profiel percentage moet liggen tussen 70% en 130%.
* Er is een 5 min. tijdslimiet tussen het opnieuw uitvoeren van een regel (t.o.v. de eerste uitvoering).

**Let op:**

* **minder dan -2 betekent: -3 en lager (-4, -10, etc)**
* **meer dan -2 betekent: -1 en hoger (-1, 0, +10, etc.)**


Voorwaarde
--------------------------------------------------
Je kunt kiezen tussen verschillende voorwaarden. Hieronder worden enkele voorbeelden uitwerkt, maar de meeste voorwaarden zijn gemakkelijk te begrijpen en daarom wordt niet alles hier beschreven:

* voorwaarden combineren: je kunt verschillende voorwaarden selecteren en je kunt ze aan elkaar verbinden dmv: 

   * "En"
   * "Of"
   * "Exclusive of" (wat betekent dat als er één (en slechts één) van de voorwaarden van toepassing is, de actie zal plaatsvinden)
   
* Tijd vs. herhaal tijd

   * tijd = eenmalige gebeurtenis
   * herhaal tijd = iets dat met regelmaat gebeurt (dat wil zeggen één keer per week, elke werkdag etc.)
   
* locatie: in de configurator (Automation) kun je opgeven welke locatieservice je wilt gebruiken:

  * Gebruik passieve locatie: AAPS neemt alleen locaties als andere apps erom vragen
  * Gebruik netwerk locatie: Locatie van jouw Wifi
  * Gebruik GPS-locatie (Let op! Dit kan veel batterijverbruik geven!)
  
Actie
--------------------------------------------------
Je kunt één of meer acties kiezen: 

* start tijdelijk doel 

   * moet tussen 72 mg/dl en 270 mg/dl (4 mmol/l en 15 mmol/l) zijn
   * werkt alleen als er geen vorig tijdelijk doel actief is
   
* stop tijdelijk doel
* notificatie
* profiel percentage

   * moet tussen 70% en 130% liggen 
   * werkt alleen als het vorige percentage 100% is

Na het toevoegen van jouw actie, **vergeet niet om de standaardwaarden** te veranderen naar de waarde die jij nodig hebt door op de standaardwaarden te tikken of de + - knoppen te gebruiken.
 
.. image:: ../images/Automation_Default_V2_5.png
  :alt: Automatisering standaard vs. ingestelde waardes

Automatiseringsregels sorteren
-----
Om jouw automatiseringsregels te sorteren, houd je de vier-streepjes-knop aan de rechterkant van het scherm ingedrukt en sleep je de regel omhoog of omlaag.

.. image:: ../images/Automation_Sort.png
  :alt: Automatiseringsregels sorteren
  
Automatiseringsregels verwijderen
-----
Om een automatiseringsregel te verwijderen houd je de regel ingedrukt en veeg je hem simpelweg naar links of naar rechts.

.. image:: ../images/Automation_Delete.png
  :alt: Automatiseringsregels verwijderen

Tips & valkuilen
==================================================
* Wanneer je begint met het gebruik van Automatisering of wanneer je een nieuwe regel toevoegt, laat de regel dan een notificatie weergeven totdat je zeker weet dat de regel op het juiste moment geactiveerd wordt. Vervang daarna pas de notificatie voor een echte actie.
* Houd in de gaten wat er gebeurt als de regel actief is.
* Probeer de omstandigheden niet te gemakkelijk te maken (d.w.z.: ALS bg > 80 mg/dl en bg < 180 mg/dl)

    **Extra belangrijk wanneer de actie een profiel wissel is!**
 
* Probeer tijdelijke streefdoelen te gebruiken in plaats van profiel wissels. Tijdelijke streefdoelen resetten `Autosens <../Usage/Open-APS-features.html#autosens>`_ niet. Profiel wissels doen dat wel, en veelvuldige profielwissels maken het Autosens daardoor onmogelijk om goed te functioneren.
* Gebruik profielwissels daarom spaarzaam en zet ze bij voorkeur pas in als laatste redmiddel.

    * Elke profielwissel maakt `Autosens <../Usage/Open-APS-features.html#autosens>`_ nutteloos voor minimaal 6 uur.

* Een profielwissel zal het profiel NIET automatisch terugzetten naar jouw basisprofiel wanneer de condities van jouw regel niet meer van toepassing zijn.

    * Je moet dus zelf een andere regel aanmaken om jouw profiel terug te zetten naar normaal, of dit handmatig doen!
    * Je loopt een verhoogd risico op hypo's / hypers als je nalaat om jouw profielwissel weer terug te (laten) zetten naar normaal.

Voorbeelden
==================================================
Dit zijn slechts voorbeelden, geen advies. Doe het niet blind na zonder je bewust te zijn van wat je eigenlijk doet of waarom je deze regels nodig zou hebben. Zie hieronder twee voorbeelden met screenshots.

* Profielwissels voor jouw dagelijkse activiteiten (zoals school, fitnesscentrum, weekend, werkdag...) met behulp van gps-locatie, wifi, tijd etc.
* Instellen van tijdelijk streefdoel voor activiteiten op basis van tijd, locatie...
* Het instellen van een "eet binnenkort" tijdelijk doel op basis van tijd, locatie...

Lage glucose tijdelijk doel
--------------------------------------------------
.. image:: ../images/Automation2.png
  :alt: Automation2

Deze regel is gemaakt door iemand die een automatisch hypo-tijdelijk doel wil krijgen bij het hebben van een hypo.

Lunchtijd tijdelijk doel
--------------------------------------------------
.. image:: ../images/Automation3.png
  :alt: Automation3
  
Deze regel is gemaakt door iemand, die doordeweeks luncht op hetzelfde tijdstip. Als deze persoon op een bepaald tijdstip op de lunchlocatie is, dan wordt er een lager tijdelijk doel (eet binnenkort) ingesteld terwijl h/zij wacht op de lunch. Door de "en" combinatie wordt de regel alleen uitgevoerd als diegene op dat tijdstip op die locatie is. De regel wordt dus niet actief wanneer diegene op een ander tijdstip op deze locatie is, en ook niet wanneer het wel dat tijdstip is maar diegene thuis is gebleven of langer op de werkplek is gebleven. 

Onjuist gebruik van automatisering
--------------------------------------------------
Zoals elk systeem kan Automatisering ook onjuist worden gebruikt. Dit kan leiden tot problemen en zelfs gevaar voor jouw gezondheid. Voorbeelden van onjuist gebruik zijn bijvoorbeeld:

* Het AAPS algoritme proberen te overschrijven in plaats van alleen te helpen (d.w.z. door een profielwissel in te stellen in plaats van jouw basaal, ISF etc. goed in te stellen)
* Instellen van profielwissel om voor voedsel te compenseren
* Instellen van een profielwissel zonder duur
* Het maken van een regel die maar één kant op gaat (d.w.z. je maakt een regel om iets aan te zetten, zonder ook een regel te hebben om het weer uit te zetten)
* Het maken van regels met een hele lange duur

Alternatieven
==================================================

Voor gevorderde gebruikers zijn er andere mogelijkheden om taken te automatiseren met behulp van IFTTT of een Android app genaamd Automate. Enkele voorbeelden zijn `hier <./automationwithapp.html>`_ te vinden.
