Dexcom G6
**************************************************
Algemeen
==================================================

* Volg de algemene CGM tips en sensor plaatsings aanbevelingen `hier <../Hardware/GeneralCGMRecommendation.html>`__.
* Voor G6 zenders die na het najaar van 2018 zijn geproduceerd, zorg ervoor dat je een van de `nieuwste xDrip+ 'Nightly Build' versies <https://github.com/NightscoutFoundation/xDrip/releases>`_ gebruikt. Deze zenders hebben een nieuwe firmware en de nieuwste stabiele versie van xDrip+ (2019/01/10) werkt daar niet mee.

Algemene tips voor loopen met G6
==================================================

Het gebruik van de is G6 misschien wat complexer dan het op het eerste gezicht lijkt. Om de G6 veilig te gebruiken, moet je rekening houden met het volgende: 

* Wanneer je het "Native" algoritme gebruikt in combinatie met de kalibratiecode in xDrip of Spike, is het veiligste om de optie "Pre-emptive restart" (voortijdige herstart) niet te gebruiken.
Als je er wel voor kiest om Pre-emptive restarts te gebruiken, zorg dan dat je de sensor start op een moment van de dag dat je tijd kunt vrijmaken om te zien wat er gebeurt tijdens de herstart. Zodat je kunt kalibreren als je ziet dat dat nodig is (je ziet een 'sprong' in je glucosegrafiek). 
* Als je jouw sensoren herstart, dan zul je dat moeten doen A) zonder gebruik te maken van de kalibratiecode voor de veiligste resultaten op dagen 11 en 12, of B) ervoor te zorgen dat je jouw sensorgrafiek in de gaten kunt houden en bereid bent om te kalibreren.
* Het zogenaamde "Pre-soaking" (de sensor alvast inbrengen, waarna je nog wacht met starten) van de G6 met kalibratiecode zal hoogstwaarschijnlijk leiden tot onnauwkeurigheden in je glucosewaardes na starten. Omdat het algoritme van de G6 rekent op weefselbeschadiging na inbrengen, terwijl je met Pre-soaken niet dezelfde mate van weefselbeschadiging zult hebben op het moment dat je de sensor start. Wanneer je Pre-soakt is het waarschijnlijk het beste om de sensor te kalibreren.
* Als je om welke reden ook niet in staat bent om op te letten wat er gebeurt tijdens een herstart / na een Pre-soak, dan kun je beter de kalibratiecode niet gebruiken, en jouw sensor gebruiken met kalibraties, net als bij de G5.

Lees het `volledige artikel (Engelstalig) <https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/>`_ van Tim Street voor meer achtergrondinformatie en de redenen achter deze aanbevelingen.

Dexcom G6 met xDrip+
==================================================
* De Dexcom G6 zender kan gelijktijdig worden gekoppeld aan de Dexcom ontvanger (of als alternatief de t:slim pomp) en een app op je telefoon.
Als je jouw Dexcom wilt koppelen aan de xDrip+ app dan zul je dus eerst de Dexcom app moeten verwijderen (of: pas het zender-nummer in de Dexcom app aan naar een onzingetal zodat Dexcom niet probeert aan de zender te koppelen). **Je kunt de xDrip+ app en de Dexcom app niet gelijktijdig koppelen aan een zender.**
* If you need Clarity and want to profit from xDrip+ alarms use the `BYODA <../Hardware/DexcomG6.html#if-using-g6-with-build-your-own-dexcom-app>`_ with local broadcast to xDrip+.
* If not already set up then download `xDrip+ <https://github.com/NightscoutFoundation/xDrip>`_ and follow instructions on `xDrip+ settings page <../Configuration/xdrip.html>`_.
* Selecteer xdrip in Configurator (instellingen in AndroidAPS).
* Instellingen in xDrip + aanpassen volgens `xDrip+ instellingen pagina <../Configuration/xdrip.html>`__
* Als AAPS geen BG-waarden ontvangt wanneer de telefoon in vliegtuigmodus staat, gebruik dan 'Identify receiver' (Identificeer ontvanger) zoals beschreven op de `xDrip+ instellingen pagina <../Configuration/xdrip.html>`__.

Wanneer je de G6 gebruikt met de Bouw Je Eigen Dexcom App
==================================================
* As of December 2020 `Build Your Own Dexcom App <https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0>`_ (BYODA) also supports local broadcast to AAPS and/or xDrip+ (not for G5 sensors!)
* Met deze app kun je jouw Dexcom G6 gebruiken met elke Android smartphone.
* Als je eerder de originele Dexcom app of de aangepaste Dexcom app hebt gebruikt, moet je die eerst van je telefoon verwijderen voordat je de Bouw Je Eigen Dexcom App erop zet.
* Installeer de gedownloade apk
* Voer de sensorcode en het serienummer van de zender in in de aangepaste app.
* Ga in de telefoon instellingen naar apps > Dexcom G6 > machtigingen > extra rechten en druk op 'Toegang tot Dexcom app'.
* After short time BYODA should pick-up transmitter signal. (Zo niet, dan moet je de sensor stoppen en een nieuwe starten.)

Instellingen voor AndroidAPS
--------------------------------------------------
* Selecteer 'Dexcom App (aangepast)' in de configurator.
* If you don't receive any values select any other data source, then re-select 'Dexcom App (patched)' to trigger the demand for permissions to establish the connection between AAPS and BYODA-broadcast.

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

General troubleshooting
--------------------------------------------------
Voor het oplossen van problemen met jouw CGM klik `hier <./GeneralCGMRecommendation.html#problemen-oplossen>`__.

Nieuwe zender met lopende sensor
--------------------------------------------------
Als je toevallig de zender wilt veranderen tijdens een lopende sensor sessie, dan kun je proberen de zender te verwijderen terwijl je de sensor gewoon laat zitten. A video can be found at `https://youtu.be/tx-kTsrkNUM <https://youtu.be/tx-kTsrkNUM>`_.
