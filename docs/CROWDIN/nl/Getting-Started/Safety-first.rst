Allereerst de veiligheid
===========

**When you decide to build your own artificial pancreas, it's always important to think about security and safety, and to understand the impact of all your actions**

Algemeen
------------

* AndroidAPS is a just a tool to help you manage diabetes, it is not a fully automated system you can install and forget!
* Do not assume that AndroidAPS will never make mistakes. Dit systeem krijgt uiteindelijk de controle over jouw insuline toediening: kijk ernaar, leer hoe het systeem werkt en 'denkt'. En zorg dat je begrijpt hoe je zijn keuzes moet interpreteren.
* Remember that, once paired, the phone can instruct the pump to do anything. Wanneer AndroidAPS door een kind wordt gebruikt, gebruik deze telefoon dan alleen voor AndroidAPS en om te communiceren met je kind. Installeer geen onnodige apps of spelletjes (!!!) die malware zouden kunnen bevatten zoals trojans, virussen of bots die je systeem zouden kunnen verstoren.
* Install all security updates provided by your phone manufacturer and Google.
* You might also need to change your diabetes habits as you change your therapy by using a closed loop system. I.e. some people report, they need less hypo treatments as AndroidAPS has already reduced insulin.  
   
SMS Communicator
-----------------

* AndroidAPS allows you to control a child's phone remotely via text message. Bedenk wel, dat de telefoon die is ingesteld om externe commando's te geven, kan worden gestolen. Beveilig die telefoon dus goed, met op z'n minst een pincode.
* AndroidAPS will also inform you by text message if your remote commands, such as a bolus or a profile change, have been carried out. Het wordt aangeraden om ten minste 2 telefoonnummers te koppelen in de SMS communicator instellingen. Mocht één van de gekoppelde telefoons worden gestolen, dan zul je deze bevestigings-SMS'jes evengoed nog op het tweede telefoonnummer binnenkrijgen.

.. note:: 
   **VOOR JE EIGEN VEILIGHEID**

   De veiligheidsfuncties die in AndroidAPS zitten, maken gebruik van ingebouwde veiligheidsmaatregelen van de hardware componenten waaruit jouw systeem bestaat. Het is daarom van cruciaal belang dat je alleen een volledig functionerende FDA of CE goedgekeurde insulinepomp en CGM gebruikt voor het bouwen van jouw eigen closed loop. Gebruik alleen insulinepompen en CGMs die in deze handleiding beschreven staan, waarvoor de AndroidAPS software is geschreven en getest. Hardware of software wijzigingen aan deze componenten kunnen voor onverwachte uitkomsten zorgen (denk aan het ongewenst afgeven van insuline), waardoor de gebruiker een aanzienlijk risico loopt. Als je een insulinepomp of CGM-ontvanger vindt/koopt/krijgt die een defect heeft, zelfgemaakt is, of op welke manier dan ook veranderd is, GEBRUIK DEZE NIET voor het maken van een AndroidAPS-systeem.

   Daarnaast is het belangrijk om alleen originele verbruiksartikelen te gebruiken, zoals infuussets, inschiethulpen en reservoirs die door de fabrikant zijn goedgekeurd voor gebruik met jouw pomp of CGM. Door het gebruik van niet-originele, niet-geteste verbruiksmaterialen kunnen CGM metingen onnauwkeurig worden en/of fouten optreden in de insulinedosering. Insuline is zeer gevaarlijk wanneer het verkeerd wordt gedoseerd - speel alstublieft niet met je leven door jouw hulpmiddelen aan te passen.

   Last not least, you must not take SGLT-2 inhibitors (gliflozins) as they incalculably lower blood sugar levels.  The combination with a system that lowers basal rates in order to increase BG is especially dangerous as due to the gliflozin this rise in BG might not happen and a dangerous state of lack of insulin can happen.
