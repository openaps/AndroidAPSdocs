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
   **IMPORTANT SAFETY NOTICE**

   The foundation of AndroidAPS safety features discussed in this documentation is built on the safety features of the hardware used to build your system. It is critically important that you only use a tested, fully functioning FDA or CE approved insulin pump and CGM for closing an automated insulin dosing loop. Hardware or software modifications to these components can cause unexpected insulin dosing, causing significant risk to the user. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AndroidAPS system.

   Additionally, it is equally important to only use original supplies such as inserters, cannulas and insulin containers approved by the manufacturer for use with your pump or CGM. Using untested or modified supplies can cause CGM inaccuracy and insulin dosing errors. Insulin is highly dangerous when misdosed - please do not play with your life by hacking with your supplies.
