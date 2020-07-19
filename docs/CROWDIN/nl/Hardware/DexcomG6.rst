Dexcom G6
**************************************************
Algemeen
==================================================

* Volg de algemene CGM tips en sensor plaatsings aanbevelingen `hier <../Hardware/GeneralCGMRecommendation.html>`_.
* Voor G6 zenders die na het najaar van 2018 zijn geproduceerd, zorg ervoor dat je een van de `nieuwste xDrip+ 'Nightly Build' versies <https://github.com/NightscoutFoundation/xDrip/releases>`_ gebruikt. Deze zenders hebben een nieuwe firmware en de nieuwste stabiele versie van xDrip+ (2019/01/10) werkt daar niet mee.
* Als je problemen ondervindt met het doorgeven van klachten/sensorfouten bij de leverancier, dan kan het handig zijn om ook een Dexcom ontvanger te bezitten. Wanneer de leverancier aangeeft dat hij jouw klacht/foutmelding niet in behandeling neemt omdat je een niet-goedgekeurde telefoon gebruikt, of omdat je een niet-officiële app gebruikt, dan kun je de ontvanger erbij pakken en de foutmelding uit de ontvanger doorgeven aan de leverancier. Lang niet alle leveranciers doen hier moeilijk over trouwens, heb je geen problemen dan heb je de ontvanger ook niet nodig. Je kunt de ontvanger gewoon naast je telefoon gebruiken; de zender kun je gelijktijdig aan 1 telefoon en aan 1 ontvanger gekoppeld hebben.

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
* If not already set up then download `xdrip <https://github.com/NightscoutFoundation/xDrip>`_ and follow instructions on Nightscout (`G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>`_).
* Selecteer xdrip in Configurator (instellingen in AndroidAPS).
* Instellingen in xDrip + aanpassen volgens `xDrip+ instellingen pagina <../Configuration/xdrip.html>`_
* Als AAPS geen BG-waarden ontvangt wanneer de telefoon in vliegtuigmodus staat, gebruik dan 'Identify receiver' (Identificeer ontvanger) zoals beschreven op de `xDrip+ instellingen pagina <../Configuration/xdrip.html>`_.

G6 met aangepaste Dexcom app
==================================================
* Download de apk van `https://github.com/dexcomapp/dexcomapp <https://github.com/dexcomapp/dexcomapp>`_, en kies de versie die je nodig hebt (mg/dl of mmol/l versie, voor G6).

   * Voor de huidige versie van AndroidAPS heb je de aangepaste Dexcom app uit de map 2.4 nodig. De app uit de map 2.3 moet je niet hebben, die was nog van (inmiddels verouderde) AndroidAPS 2.3.
   * Open https://play.google.com/store/search?q=dexcom%20g6 op jouw computer. Regio wordt weergegeven in URL.
   
   .. image:: ../images/DexcomG6regionURL.PNG
     :alt: Regio in Dexcom G6 URL

* Stop sensor en verwijder de originele Dexcom app, als dat nog niet gedaan is.
* Installeer de gedownloade apk
* Start sensor
* Selecteer Dexcom App (aangepast) in ConfigBuilder (instelling in AndroidAPS).
* If you want to use xDrip+ alarms via local broadcast: in xDrip+ hamburger menu > settings > hardware data source > 640G /EverSense.
* There is no local broadcast from patched Dexcom app directly to xDrip+. Broadcast has to go through AAPS as described above.

Problemen oplossen
==================================================
Dexcom G6 specifieke probleemoplossing
--------------------------------------------------
* Zenders met serienummer starting with 80 or 81 need at least last stable xDrip+ version from May 2019 or a newer nightly build.
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
General Troubleshooting for CGMs can be found `here <./GeneralCGMRecommendation.html#Troubleshooting>`_.

Nieuwe zender met lopende sensor
--------------------------------------------------
Als je toevallig de zender wilt veranderen tijdens een lopende sensor sessie, dan kun je proberen de zender te verwijderen terwijl je de sensor gewoon laat zitten. Zie deze video `https://youtu.be/AAhBVsc6NZo <https://youtu.be/AAhBVsc6NZo>`_.


