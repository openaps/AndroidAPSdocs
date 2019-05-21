Welkom bij de Android APS documentatie
==============================================

** Wat is AndroidAPS? **

AndroidAPS is een app die wordt gebruikt als 'kunstmatige alvleesklier' systeem (Artificial Pancreas System of kortweg APS in het Engels). Deze app draait op een Android smartphone   en heeft hetzelfde doel als een menselijke alvleesklier: de bloedglucosewaardes automatisch binnen gezonde grenzen houden. AndroidAPS kan dit nooit zo perfect als een echte alvleesklier, maar kan het leven met type 1 diabetes wel makkelijker maken. Door apparaten die commercieel beschikbaar zijn, te koppelen aan software die simpel en veilig is. Deze apparaten zijn een glucosesensor (Continue Glucose Monitor, CGM) en een insulinepomp. De app communiceert met de glucosesensor en insulinepomp via bluetooth. AndroidAPS gebruikt een algoritme (een set rekenregels) dat al eerder is ontwikkeld voor een ander 'kunstmatige alvleesklier' systeem: OpenAPS. Wereldwijd heeft OpenAPS duizenden gebruikers en al die mensen samen hebben inmiddels miljoenen uren ervaring met dat systeem. 

Opmerking: AndroidAPS wordt in geen enkel land door regelgevers voor medische hulpmiddelen gereguleerd. Wie AndroidAPS gebruikt, voert eigenlijk een medisch experiment uit op zichzelf. Het bouwen en instellen van het systeem vereist doorzettingsvermogen en technische kennis. Je hoeft deze technische kennis aan het begin nog niet te hebben, je zult die gaandeweg krijgen. Alle informatie die je nodig hebt kun je online vinden: hier in de wiki, op andere websites of van mensen de jou zijn voorgegaan -- je kunt ze vinden in Facebook groepen en andere online platforms. Veel mensen hebben AndroidAPS succesvol gebouwd en gebruiken het nu volledig veilig, maar het is essentieel dat elke gebruiker:

* Het systeem zelf bouwt zodat ze goed begrijpen hoe het werkt
* De instellingen aanpast om het systeem op hun eigen diabetes af te stemmen
* Controleert wat het systeem doet en het zo nodig updatet om ervoor te zorgen dat het goed blijft werken

Als je klaar bent voor deze uitdaging, lees dan verder. 

**Belangrijkste doelen van AndroidAPS: **

* Een app waarbij de veiligheid ingebouwd zit. Om meer te lezen over de veiligheids-functies van de oref0 en oref1 algoritmen, klik hier (https://openaps.org/referece-design/)
* Een alles-in-één app voor het beheer van type 1 diabetes
* Een app waaraan gebruikers gemakkelijk modules kunnen toevoegen of verwijderen indien nodig
* Een app met verschillende versies voor specifieke locaties en talen.
* Een app die gebruikt kan worden in open- en closed-loop modus
* Een app die volledig transparant is: gebruikers kunnen parameters invoeren, resultaten zien en de eindbeslissing nemen
* Een app die onafhankelijk is van bepaalde pomp-stuurprogramma software. De app bevat een "virtuele pomp" optie, zodat gebruikers veilig kunnen experimenteren voordat ze het zelf gebruiken 
* Een app die geïntegreerd is met Nightscout
* Een app waarvan de gebruiker de veiligheidsbeperkingen zelf instelt 

**Wat heb je nodig om te starten:**

* Een Android smartphone met Android 5.0 of hoger. Zie `dit werkblad <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_ voor ervaringen van anderen hoe goed een telefoon met AndroidAPS werkt.
* een Continue Glucose Monitor (CGM): Dexcom G4/G5/G6, Eversense, Medtronic Guardian, PocTech of een Freestyle Libre met bluetooth-zender
* App die de gegevens van jouw glucosesensor doorgeeft, bijvoorbeeld `xDrip <http://stephenblackwasalreadytaken.github.io/xDrip/>`_/ `xDrip+ <https://jamorham.github.io/#xdrip-plus>`_, `Glimp <https://play.google.com/store/apps/details?id=it.ct.glicemia>`_ , `G5 patched app <https://github.com/dexcomapp/dexcomapp>`_, `PochTech app <https://play.google.com/store/apps/details?id=jp.co.unitec.concretemanagement&hl=gsw>`_ of `600SeriesAndroidUploader <http://pazaan.github.io/600SeriesAndroidUploader/>`_
* `AndroidAPS zelf <https://github.com/MilosKozak/AndroidAPS>`
* `Nightscout cgm-remote-monitor <http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku>`_ 0.10.2 of nieuwer
* Een geschikte insulinepomp: Dana-R, Dana-RS of Accu-Chek Combo, Accu-Check Insight (tenzij je je eigen stuurprogramma schrijft voor een andere insulinepomp)


.. opmerking:: 
	**Disclaimer en waarschuwing**

	* Alle informatie, gedachten, en de code die hier beschreven staan zijn alleen voor informatieve en educatieve doeleinden. Nightscout probeert zich op geen enkele wijze te houden aan gegevensbewaking van medische gegevens. Gebruik van Nightscout en AndroidAPS is op eigen risico, en gebruik de informatie of code niet om behandelbeslissingen te nemen.

	* Het gebruik van code van github.com is zonder enige garantie of formele ondersteuning. Verdere details zijn te vinden in de licentie, die te vinden is in de Repository op github.

	* Alle product-en bedrijfsnamen, handelsmerken, servicemerken, geregistreerde handelsmerken en geregistreerde dienstmerken zijn eigendom van hun respectievelijke houders. Hun gebruik is voor informatieve doeleinden en impliceert op geen enkele wijze een samenwerking met of goedkeuring van hen.

	NB: - dit project is niet gekoppeld aan en wordt niet ondersteund door: ' SOOIL <http://www.sooil.com/eng/>' _ ' Dexcom <http://www.dexcom.com/>' _, ' Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>' _.

.. opmerking:: 
   **DANGER! IMPORTANT SAFETY NOTICE**

   The foundation of AndroidAPS safety features discussed in this documentation is built on the safety features of the hardware used to build your system. It is critically important that you only use a tested, fully functioning FDA or CE approved insulin pump and CGM for closing an automated insulin dosing loop. Hardware or software modifications to these components can cause unexpected insulin dosing, causing significant risk to the user. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AndroidAPS system.

   Additionally, it is equally important to only use original supplies such as inserters, cannulas and insulin containers approved by the manufacturer for use with your pump or CGM. Using untested or modified supplies can cause CGM inaccuracy and insulin dosing errors. Insulin is highly dangerous when misdosed - please do not play with your life by hacking with your supplies.

Aan de slag met AndroidAPS
----------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Allereerst de veiligheid <./Getting-Started/Safety-first>
   Screenshots <./Getting-Started/Screenshots.md>
   Telefoons <./Getting-Started/Phones.md>
   Insulinepompen <./Getting-Started/Pump-Choices.md>
   Mogelijk toekomstige insulinepompen <./Getting-Started/Future-possible-Pump-Drivers.md>
   Gebruiksvoorbeeld: Samsung S7, DanaR, Dexcom G5 en Sony Smartwatch <./Getting-Started/Sample-Setup.md>
   Veelgestelde vragen <./Getting-Started/FAQ.md>
   Veelgebruikte woordenlijst <./Getting-Started/Glossary.md>
  
AndroidAPS installeren
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Bouwen van de app <./Installing-AndroidAPS/Building-APK.md>
   Bijwerken naar een nieuwe versie of branch <./Installing-AndroidAPS/Update-to-new-version.md>
   Release notes <./Installing-AndroidAPS/Releasenotes.md>
   Dev branch (voor ontwikkelaars) <./Installing-AndroidAPS/Dev-branch.md>
   Nightscout instellen <./Installing-AndroidAPS/Nightscout.md>
   
AndroidAPS instellingen 
---------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Configurator <./Configuration/Config-Builder.md>
   BG bron <./Configuration/BG-Source.md>
   Dexcom G6 hints <./Configuration/Dexcom.md>
   DanaR pomp <./Configuration/DanaR-Insulin-Pump.md>
   DanaRS pomp <./Configuration/DanaRS-Insulin-Pump.md>
   AccuChek Combo pomp <./Configuration/Accu-Chek-Combo-Pump.md>
   AccuChek Insight pomp <./Configuration/Accu-Chek-Insight-Pump.md>
   Smartwatch instellingen <./Configuration/Watchfaces.md>
   Instellingen <./Configuration/Preferences.md>
   Gevoeligheidsdetectie en COB <./Configuration/Sensitivity-detection-and-COB.md>
   xDrip+ settings <./Configuration/xdrip.md>
   
Gebruik
------------
.. toctree::
   :maxdepth: 1
   :glob:
    
   Doelen <./Usage/Objectives.md>
   OpenAPS functies <./Usage/Open-APS-features.md>
   Profiel wissel <./Usage/Profiles.md>
   Tijdelijk streefdoel <./Usage/temptarget.md>
   SMS Comando's <./Usage/SMS-Commands.md>
   Vertraagde koolhydraten (eCarbs) <./Usage/Extended-Carbs.md>
   Wisselen van tijdzone <./Usage/Timezone-traveling.md>
   Toegang tot logbestanden <./Usage/Accessing-logfiles.md>
   Filteren van glucosewaardes <./Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md>
   AccuChek Combo - tips <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>
   Problemen met NSClient oplossen <./Usage/Troubleshooting-NSClient.md>
   Android auto <./Usage/Android-auto.md>
   Huawei telefooninstellingen <./Usage/huawei.md>
   Jelly Pro - batterijduur <./Usage/jelly.md>
   Automatisering <./Usage/automation.md>

Waar je hulp kunt vinden 
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Leestips voordat je begint <./Where-To-Go-For-Help/Background-reading.md>
   Contact met anderen <./Where-To-Go-For-Help/Connect-with-other-users.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Resources/Reference
            
   Achtergrondinformatie <./Resources/index>
   Voor zorgprofessionals <./Resources/clinician-guide-to-AndroidAPS>

Hoe je zelf kunt helpen
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Hoe kan je helpen <./Getting-Started/How-can-I-help.md>
   De app of wiki vertalen <./translations.md>
   De wiki verbeteren <./make-a-PR>
