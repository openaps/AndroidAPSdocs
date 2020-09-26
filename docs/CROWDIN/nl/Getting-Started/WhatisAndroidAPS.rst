Wat is een closed loop systeem met AndroidAPS?
**************************************************

AndroidAPS is an app that acts as an artificial pancreas system (APS) on an Android smartphone.   en heeft hetzelfde doel als een menselijke alvleesklier: de bloedglucosewaardes automatisch binnen gezonde grenzen houden. 

AndroidAPS kan dit nooit zo perfect als een echte alvleesklier, maar kan het leven met type 1 diabetes wel makkelijker maken. Door apparaten die commercieel beschikbaar zijn, te koppelen aan software die simpel en veilig is. Deze apparaten zijn een glucosesensor (Continue Glucose Monitor, CGM) en een insulinepomp. De app communiceert met de glucosesensor en insulinepomp via bluetooth. AndroidAPS gebruikt een algoritme (een set rekenregels) dat al eerder is ontwikkeld voor een ander 'kunstmatige alvleesklier' systeem: OpenAPS. Wereldwijd heeft OpenAPS duizenden gebruikers en al die mensen samen hebben inmiddels miljoenen uren ervaring met dat systeem. 

Opmerking: AndroidAPS wordt in geen enkel land door regelgevers voor medische hulpmiddelen gereguleerd. Wie AndroidAPS gebruikt, voert eigenlijk een medisch experiment uit op zichzelf. Het bouwen en instellen van het systeem vereist doorzettingsvermogen en technische kennis. Je hoeft deze technische kennis aan het begin nog niet te hebben, je zult die gaandeweg krijgen. Alle informatie die je nodig hebt kun je online vinden: hier in de wiki, op andere websites of van mensen de jou zijn voorgegaan -- je kunt ze vinden in Facebook groepen en andere online platforms. Veel mensen hebben AndroidAPS succesvol gebouwd en gebruiken het nu volledig veilig, maar het is essentieel dat elke gebruiker:

* Het systeem zelf bouwt zodat je goed begrijpt hoe het werkt.
* Het doserings algoritme instelt. Vooral jouw individuele insulinebehoefte moet nagenoeg perfect zijn, om het systeem goed te laten werken. Werk samen met jouw behandelaars om jouw insulinebehoefte te bepalen.
* Controleert wat het systeem doet en het zo nodig updatet om ervoor te zorgen dat het goed blijft werken.

.. opmerking:: 
	**Disclaimer and Warning**

	* Alle informatie, gedachten, en de code die hier beschreven staan zijn alleen voor informatieve en educatieve doeleinden. Nightscout probeert zich op geen enkele wijze te houden aan gegevensbewaking van medische gegevens. Gebruik van Nightscout en AndroidAPS is op eigen risico, en gebruik de informatie of code niet om behandelbeslissingen te nemen.

	* Het gebruik van code van github.com is zonder enige garantie of formele ondersteuning. Verdere details zijn te vinden in de licentie, die te vinden is in de Repository op github.

	* Alle product-en bedrijfsnamen, handelsmerken, servicemerken, geregistreerde handelsmerken en geregistreerde dienstmerken zijn eigendom van hun respectievelijke houders. Hun gebruik is voor informatieve doeleinden en impliceert op geen enkele wijze een samenwerking met of goedkeuring van hen.

	NB: - dit project is niet gekoppeld aan en wordt niet ondersteund door: `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <http://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>`_ of `Medtronic <http://www.medtronic.com/>`_.
	
Als je klaar bent voor deze uitdaging, lees dan verder. 

** Belangrijkste doelen van AndroidAPS: **
==================================================

* Een app waarbij de veiligheid ingebouwd zit. Om meer te lezen over de veiligheids-functies van de oref0 en oref1 algoritmen, klik hier (https://openaps.org/reference-design/)
* Een alles-in-één app voor het beheer van type 1 diabetes
* Een app waaraan gebruikers gemakkelijk modules kunnen toevoegen of verwijderen indien nodig
* Een app met verschillende versies voor specifieke locaties en talen.
* Een app die gebruikt kan worden in open- en closed-loop modus
* Een app die volledig transparant is: gebruikers kunnen parameters invoeren, resultaten zien en de eindbeslissing nemen
* Een app die onafhankelijk is van bepaalde pomp-stuurprogramma software. De app bevat een "virtuele pomp" optie, zodat gebruikers veilig kunnen experimenteren voordat ze het zelf gebruiken 
* Een app die geïntegreerd is met Nightscout
* Een app waarvan de gebruiker de veiligheidsbeperkingen zelf instelt 

Hoe te beginnen
==================================================
Natuurlijk is alles wat hier beschreven staat belangrijk, maar de grote hoeveelheid nieuwe informatie kan in het begin behoorlijk verwarrend zijn.
Een goede oriëntatie wordt gegeven door het `Module Overzicht <../Module/module.html>`_ en de `Doelen <../Usage/Objectives.html>`_. Of bekijk het `Gebruiksvoorbeeld <../Getting-Started/Sample-Setup.html>`_ met Dana pomp, Dexcom sensor en Sony Smartwatch.
 
