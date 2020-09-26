Automatisering
**************************************************

Wat is automatisering
==================================================
Voor bepaalde veelvoorkomende gebeurtenissen moet je wellicht altijd dezelfde instellingen wijzigen. Om extra werk te voorkomen, kun je proberen om dit te automatiseren, en het dus automatisch voor je te laten doen. 

Bijv. wanneer jouw BG te laag is, kun je besluiten om automatisch een hoger tijdelijk streefdoel in te stellen. Of als je in het sportcentrum bent, wordt er automatisch een tijdelijk streefdoel voor je ingesteld. 

Voordat je automatisering gebruikt, moet je ruime ervaring hebben met de handmatige 'tijdelijke streefdoelen <./temptarget.html>`_ of handmatige profiel wissels die je toepast. 

Zorg ervoor dat je goed begrijpt hoe automatisering werkt voordat je jouw eerste eenvoudige regel aanmaakt. **Instead of action, let AAPS first display only a notification.** When you are sure automation is triggered at the right time, replace notification by real action.

.. image:: ../images/Automation_ConditionAction_RC3.png
  :alt: Automatiseringsvoorwaarde + actie

Zo stel je het in
==================================================
Als je een automatisering wilt instellen, moet je deze een titel geven, en ten minste één voorwaarde en één actie selecteren. 

Belangrijke opmerking
--------------------------------------------------
**Automatisering is nog steeds actief wanneer je de loop uitschakelt!**

So make sure to deactivate automation rules during these occasions if neccessary. You can do so by unticking the box left of the name of your automation rule.

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

* connect conditions: you can have several conditions and can link them with 

  * "En"
  * "Of"
  * "Exclusive or" (which means that if one - and only one of the - conditions applies, the action(s) will happen)
   
* Tijd vs. herhaal tijd

  * tijd = eenmalige gebeurtenis
  * herhaal tijd = iets dat met regelmaat gebeurt (dat wil zeggen één keer per week, elke werkdag etc.)
   
* locatie: in de configurator (Automation) kun je opgeven welke locatieservice je wilt gebruiken:

  * Use passive location: AAPS only takes locations when other apps are requesting it
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
* When you start using automation or create a new rule, first add a notification only until you are sure the rule is working well.
* Houd in de gaten wat er gebeurt als de regel actief is.
* Don't try to make conditions too easy (i.e.: IF bg > 80 mg/dl AND bg < 180 mg/dl)

  **Extra belangrijk wanneer de actie een profiel wissel is!**
 
* Try to use Temp Targets instead of Profile Switches. Tijdelijke streefdoelen resetten `Autosens <../Usage/Open-APS-features.html#autosens>`_ niet. Profiel wissels doen dat wel, en veelvuldige profielwissels maken het Autosens daardoor onmogelijk om goed te functioneren.
* Gebruik profielwissels daarom spaarzaam en zet ze bij voorkeur pas in als laatste redmiddel.

  * Elke profielwissel maakt `Autosens <../Usage/Open-APS-features.html#autosens>`_ nutteloos voor minimaal 6 uur.

* Een profielwissel zal het profiel NIET automatisch terugzetten naar jouw basisprofiel wanneer de condities van jouw regel niet meer van toepassing zijn.

  * Je moet dus zelf een andere regel aanmaken om jouw profiel terug te zetten naar normaal, of dit handmatig doen!
  * Increased risk of hypoglycemia if profile switch does not expire or reset back to base profile.

Voorbeelden
==================================================
These are just setup examples, no advises. Don't reproduce them without being aware what you are actually doing or why you need them.

* Profielwissels voor jouw dagelijkse activiteiten (zoals school, fitnesscentrum, weekend, werkdag...) met behulp van gps-locatie, wifi, tijd etc.
* Setting temp target for activities based on time, location, connection to a bluetooth device...
* Het instellen van een "eet binnenkort" tijdelijk doel op basis van tijd, locatie...

Lage glucose tijdelijk doel
--------------------------------------------------
.. image:: ../images/Automation2.png
  :alt: Automation2

This is made by someone who wants to get a hypo temp target automatically when having low glucose.

Lunchtijd tijdelijk doel
--------------------------------------------------
.. image:: ../images/Automation3.png
  :alt: Automation3
  
This example is made by someone who has lunch at work at the same time every day during the week. If he or she stays at a certain time in his or her lunch location, automation will set a low temp target (eating soon) while waiting for the lunch. Because of the "And" connection, it only happens during the chosen time and if he or she is at the chosen location. So it does not work on any other time at this location or on this time when the person stays at home. 

Incorrect use of automation
--------------------------------------------------
Please be aware to use automation incorrectly. Dit kan leiden tot problemen en zelfs gevaar voor jouw gezondheid. Voorbeelden van onjuist gebruik zijn bijvoorbeeld:

* Het AAPS algoritme proberen te overschrijven in plaats van alleen te helpen (d.w.z. door een profielwissel in te stellen in plaats van jouw basaal, ISF etc. goed in te stellen)
* Instellen van profielwissel om voor voedsel te compenseren
* Instellen van een profielwissel zonder duur
* Het maken van een regel die maar één kant op gaat (d.w.z. je maakt een regel om iets aan te zetten, zonder ook een regel te hebben om het weer uit te zetten)
* Het maken van regels met een hele lange duur

Alternatieven
==================================================

For advanced users, there are other posibilities to automate tasks using IFTTT or a third party Android app called Automate. Enkele voorbeelden zijn `hier <./automationwithapp.html>`_ te vinden.
