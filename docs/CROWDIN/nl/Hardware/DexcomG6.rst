Dexcom G6
**************************************************
Algemeen
==================================================

* Follow general CGM hygiene and setting sensor recommendation `here <../Hardware/GeneralCGMRecommendation.html>`__.
* Voor G6 zenders die na het najaar van 2018 zijn geproduceerd, zorg ervoor dat je een van de `nieuwste xDrip+ 'Nightly Build' versies <https://github.com/NightscoutFoundation/xDrip/releases>`_ gebruikt. Deze zenders hebben een nieuwe firmware en de nieuwste stabiele versie van xDrip+ (2019/01/10) werkt daar niet mee.

Algemene tips voor loopen met G6
==================================================

Het gebruik van de is G6 misschien wat complexer dan het op het eerste gezicht lijkt. Om de G6 veilig te gebruiken, moet je rekening houden met het volgende: 

* Wanneer je het "Native" algoritme gebruikt in combinatie met de kalibratiecode in xDrip of Spike, is het veiligste om de optie "Pre-emptive restart" (voortijdige herstart) niet te gebruiken.
Als je er wel voor kiest om Pre-emptive restarts te gebruiken, zorg dan dat je de sensor start op een moment van de dag dat je tijd kunt vrijmaken om te zien wat er gebeurt tijdens de herstart. Zodat je kunt kalibreren als je ziet dat dat nodig is (je ziet een 'sprong' in je glucosegrafiek). 
* Als je jouw sensoren herstart, dan zul je dat moeten doen A) zonder gebruik te maken van de kalibratiecode voor de veiligste resultaten op dagen 11 en 12, of B) ervoor te zorgen dat je jouw sensorgrafiek in de gaten kunt houden en bereid bent om te kalibreren.
* Het zogenaamde "Pre-soaking" (de sensor alvast inbrengen, waarna je nog wacht met starten) van de G6 met kalibratiecode zal hoogstwaarschijnlijk leiden tot onnauwkeurigheden in je glucosewaardes na starten. Omdat het algoritme van de G6 rekent op weefselbeschadiging na inbrengen, terwijl je met Pre-soaken niet dezelfde mate van weefselbeschadiging zult hebben op het moment dat je de sensor start. Wanneer je Pre-soakt is het waarschijnlijk het beste om de sensor te kalibreren.
* Als je om welke reden ook niet in staat bent om op te letten wat er gebeurt tijdens een herstart / na een Pre-soak, dan kun je beter de kalibratiecode niet gebruiken, en jouw sensor gebruiken met kalibraties, net als bij de G5.

Lees het `volledige artikel (Engelstalig) <http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/>`_ van Tim Street voor meer achtergrondinformatie en de redenen achter deze aanbevelingen.

Dexcom G6 met xDrip+
==================================================
* De Dexcom G6 zender kan gelijktijdig worden gekoppeld aan de Dexcom ontvanger (of als alternatief de t:slim pomp) en een app op je telefoon.
Als je jouw Dexcom wilt koppelen aan de xDrip+ app dan zul je dus eerst de Dexcom app moeten verwijderen (of: pas het zender-nummer in de Dexcom app aan naar een onzingetal zodat Dexcom niet probeert aan de zender te koppelen). **Je kunt de xDrip+ app en de Dexcom app niet gelijktijdig koppelen aan een zender.**
* Als je Clarity wilt gebruiken maar je wilt ook de uitgebreidere alarm-opties van xDrip+ gebruiken, dan kun je de `Aangepaste Dexcom app </Hardware/DexcomG6.html#g6-met-aangepaste-dexcom-app>`_ op je telefoon zetten (en die verbinden met de zender) en ook de xDrip+ app op je telefoon zetten (kies als hardware data source voor 640G/Eversense). Op deze manier stuurt de aangepaste Dexcom app jouw waardes lokaal door "local broadcast" naar xDrip+.
* Als dat nog niet is ingesteld, download dan `xDrip+ <https://github.com/NightscoutFoundation/xDrip>`_ en volg de instructies voor Nightscout `G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>`_.
* Selecteer xdrip in Configurator (instellingen in AndroidAPS).
* Instellingen in xDrip + aanpassen volgens `xDrip+ instellingen pagina <../Configuration/xdrip.html>`_
* If AAPS does not receive BG values when phone is in airplane mode use 'Identify receiver' as describe on `xDrip+ settings page <../Configuration/xdrip.html>`_.

G6 met aangepaste Dexcom app
==================================================
* Download de apk van `https://github.com/dexcomapp/dexcomapp <https://github.com/dexcomapp/dexcomapp>`_, en kies de versie die je nodig hebt (mg/dl of mmol/l versie, voor G6).

  * Voor de huidige versie van AndroidAPS heb je de aangepaste Dexcom app uit de map 2.4 nodig. De app uit de map 2.3 moet je niet hebben, die was nog van (inmiddels verouderde) AndroidAPS 2.3.
  * Open https://play.google.com/store/search?q=dexcom%20g6 op jouw computer. 
  * Klik op de link naar de app Dexcom G6 op de pagina met zoekresultaten die wordt afgebeeld.
  * Regio wordt weergegeven in URL.

   .. image:: ../images/DexcomG6regionURL.PNG
     :alt: Regio in Dexcom G6 URL

* Verwijder de originele Dexcom app van je telefoon.
* Installeer de gedownloade apk
* Voer de sensorcode en het serienummer van de zender in in de aangepaste app.
* Na korte tijd zal de aangepaste app het signaal van de zender oppikken. (Zo niet, dan moet je de sensor stoppen en een nieuwe starten.)
* Selecteer Dexcom App (aangepast) in ConfigBuilder (instelling in AndroidAPS).
* Als je de Dexcom app wilt gebruiken om aan de zender te koppelen, maar ook gebruik wilt maken van xDrip alarmen zet dan óók de xDrip+ app op je telefoon en kies in xDrip hamburger menu > instellingen > hardware gegevensbron > 640G /EverSense.
De Dexcom app stuurt de waardes door dmv 'local broadcast' (lokaal uitzenden) naar AndroidAPS. AndroidAPS stuurt het dmv 'local broadcast' dan door naar xDrip+. De local broadcast vindt plaats tussen de apps op jouw telefoon, je hebt hierbij geen internet nodig.

Wanneer je de G6 gebruikt met de Bouw Je Eigen Dexcom App
==================================================
* Sinds december 2020 ondersteunt de `Bouw Je Eigen Dexcom App <https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0>`_ (Build Your Own Dexcom App, BYODA) ook het lokaal delen (local broadcast) van BG gegevens met AAPS en/of xDrip+ (Let op: niet voor G5 sensors!).
* Met deze app kun je jouw Dexcom G6 gebruiken met elke Android smartphone.
* Als je eerder de originele Dexcom app of de aangepaste Dexcom app hebt gebruikt, moet je die eerst van je telefoon verwijderen voordat je de Bouw Je Eigen Dexcom App erop zet.
* Installeer de gedownloade apk
* Voer de sensorcode en het serienummer van de zender in in de aangepaste app.
* Ga in de telefoon instellingen naar apps > Dexcom G6 > machtigingen > extra rechten en druk op 'Toegang tot Dexcom app'.
* Na korte tijd zal de aangepaste app het signaal van de zender oppikken. (Zo niet, dan moet je de sensor stoppen en een nieuwe starten.)

Instellingen voor AndroidAPS
--------------------------------------------------
* Selecteer 'Dexcom App (aangepast)' in de configurator.
* Als je geen waarden ontvangt, selecteer dan een andere gegevensbron, en selecteer daarna 'Dexcom App (aangepast) opnieuw om te zorgen dat de app opnieuw om een machtiging vraagt en daarmee de AAPS app de BG waardes zal ontvangen van de de Bouw Je Eigen Dexcom app.

Instellingen voor xDrip+
--------------------------------------------------
* Selecteer '640G/Eversense' als gegevensbron.
* Druk op 'start sensor' in xDrip+ om waarden te kunnen ontvangen. Dit zal geen invloed hebben op jouw lopende sensor sessie, aangezien die alleen gekoppeld is met de Bouw Je Eigen Dexcom App.
   
Problemen oplossen
==================================================
Dexcom G6 specifieke probleemoplossing
--------------------------------------------------
* Zenders met serienummer beginnend met 80 of 81 hebben ten minste de laatste stabiele versie van xDrip van mei 2019 of een nieuwere 'Nightly Build' versie nodig.
* Zenders met serienummer beginnend met 8G, 8H of 8J hebben ten minste een 'Nightly Build' versie vanaf 25 juli 2019 of nieuwer nodig.
* xDrip+ en Dexcom app kunnen niet tegelijkertijd met de zender worden verbonden.
* Wacht minstens 15 min. tussen het stoppen en starten van een sensor.
* Zet het tijdstip van inbrengen niet terug in de tijd. Bentwoord de vraag: "Did you insert it today?" altijd met "Yes, today".
* Schakel de optie "restart sensors" niet in tijdens het zetten van een nieuwe sensor
* Start geen nieuwe sensor voordat de volgende informatie wordt weergegeven in Classic Status Page-> G5/G6 status-> PhoneServiceState:

  * Zendernummer beginnend met 80 of 81: "Got data hh:mm" (bijvoorbeeld "Got data 19:04")
  * Transmitter serie vanaf 8G of 8H: "Got glucose hh:mm" (d.w.z. "Got glucose 19:04") of "Got no raw hh:mm" (d.w.z. "Got now raw 19:04")

.. image:: ../images/xDrip_Dexcom_PhoneServiceState.png
  :alt: xDrip+ PhoneServiceState

Algemene probleemoplossing
--------------------------------------------------
General Troubleshoothing for CGMs can be found `here <./GeneralCGMRecommendation.html#troubleshooting>`__.

Nieuwe zender met lopende sensor
--------------------------------------------------
Als je toevallig de zender wilt veranderen tijdens een lopende sensor sessie, dan kun je proberen de zender te verwijderen terwijl je de sensor gewoon laat zitten. Zie deze video `https://youtu.be/AAhBVsc6NZo <https://youtu.be/AAhBVsc6NZo>`_.
