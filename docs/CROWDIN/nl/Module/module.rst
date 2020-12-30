De verschillende onderdelen 
**************************************************
AndroidAPS is meer dan de (zelfgebouwde) app alleen, er zijn ook andere onderdelen nodig om jouw closed loop systeem aan de praat te krijgen. Voordat je kiest welke onderdelen je wilt gebruiken, is het goed om eens te kijken naar de `Wat heb ik nodig <https://androidaps.readthedocs.io/en/latest/CROWDIN/nl/index.html#wat-heb-ik-nodig>`_ sectie.
   
.. image:: ../images/modules.png
  :alt: Wat heb ik nodig

.. opmerking:: 
   **VOOR JE EIGEN VEILIGHEID**

   De veiligheidsfuncties die in AndroidAPS zitten, maken gebruik van ingebouwde veiligheidsmaatregelen van de hardware componenten waaruit jouw systeem bestaat. Het is daarom van cruciaal belang dat je alleen een volledig functionerende FDA of CE goedgekeurde insulinepomp en CGM gebruikt voor het bouwen van jouw eigen closed loop. Gebruik alleen insulinepompen en CGMs die in deze handleiding beschreven staan, waarvoor de AndroidAPS software is geschreven en getest. Hardware of software wijzigingen aan deze componenten kunnen voor onverwachte uitkomsten zorgen (denk aan het ongewenst afgeven van insuline), waardoor de gebruiker een aanzienlijk risico loopt. Als je een insulinepomp of CGM-ontvanger vindt/koopt/krijgt die een defect heeft, zelfgemaakt is, of op welke manier dan ook veranderd is, GEBRUIK DEZE NIET voor het maken van een AndroidAPS-systeem.

   Daarnaast is het belangrijk om alleen originele verbruiksartikelen te gebruiken, zoals infuussets, inschiethulpen en reservoirs die door de fabrikant zijn goedgekeurd voor gebruik met jouw pomp of CGM. Door het gebruik van niet-originele, niet-geteste verbruiksmaterialen kunnen CGM metingen onnauwkeurig worden en/of fouten optreden in de insulinedosering. Insuline is zeer gevaarlijk wanneer het verkeerd wordt gedoseerd - speel alstublieft niet met je leven door jouw hulpmiddelen aan te passen.
   
   Tensotte een belangrijke opmerking: je mag géén SGLT-2 inhibitors (glifozines) gebruiken wanneer je loopt. Omdat deze medicatie ook de bloedsuiker verlaagt.  Deze medicatie in combinatie met een systeem dat de basale insuline verlaagt om BG te verhogen is bijzonder gevaarlijk, omdat deze stijging in BG mogelijk niet zal gebeuren en daardoor een gevaarlijk gebrek aan insuline kan ontstaan.

Benodigde onderdelen
==================================================
Correcte insulineprofiel instellingen voor jouw diabetesbehandeling
--------------------------------------------------
Dit is misschien niet het eerste waar je aan denkt bij een 'onderdeel'. Toch is het waarschijnlijk het meest belangrijke onderdeel van jouw closed loop. Wanneer je de behandeling van jouw diabetes overlaat aan een algoritme, dan is het cruciaal dat je dit algoritme de juiste instellingen geeft. Anders kunnen er grote fouten optreden in de beslissingen die het algoritme neemt.
Wanneer je de andere onderdelen van jouw closed loop nog niet bij elkaar hebt, dan kun je de tussenliggende tijd benutten om, samen met jouw behandelaars, jouw instellingen te perfectioneren. 
De meeste loopers maken gebruik van basaalstanden, ISF en KH ratios die zijn aangepast aan een variërende insulinegevoeligheid gedurende de dag (zgn. circadiaans ritme).

Het profiel bevat

* Basaalstanden
* ISF (Insuline Sensitivity Factor). De insuline gevoeligheidsfactor is hoeveel jouw bloedglucosespiegel daalt per eenheid insuline
* KH ratio (koolhydraatratio). Hoeveel gram koolhydraten kun je eten per eenheid insuline
* DIA (Duur van Insuline Activiteit)

Geen gebruik van SGLT-2-remmers
--------------------------------------------------
SGLT-2 remmers, ook wel glifozines genoemd, remmen de herabsorptie van glucose in de nieren. Omdat ze de bloedsuikerspiegel verlagen met een voor het algoritme niet-berekenbare hoeveelheid, mag je ze ABSOLUUT NIET gebruiken wanneer je een closed loop systeem zoals AndroidAPS gebruikt! Dit vanwege het zeer grote risico op ketoacidose en/of ernstige hypo's. Deze medicatie in combinatie met een systeem dat de basale insuline verlaagt om BG te verhogen is bijzonder gevaarlijk, omdat er een gevaarlijk gebrek aan insuline kan ontstaan.

Telefoon
--------------------------------------------------
You need an Android smartphone with Google Android 7.0 or above. Dus als je denkt over een nieuwe telefoon, dan raden we aan om op zijn minst voor Android 8.1 te gaan maar liever Android 9 of 10.

Gebruikers houden een `lijst van geteste telefoons en smartwatches <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_ bij.

Om een telefoon of horloge toe te voegen aan de lijst kun je dit `formulier <https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform>`_ invullen.

Bij eventuele problemen met de spreadsheet stuur een e-mail naar `hardware@androidaps.org <mailto:hardware@androidaps.org>`_, voor eventuele donaties van telefoon/smartwatch modellen die nog getest moeten worden kun je een e-mail sturen naar `donations@androidaps.org <mailto:hardware@androidaps.org>`_.

Insulinepomp
--------------------------------------------------
AndroidAPS werkt momenteel met 

- `Accu-Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_ (extra nodig: Ruffy app, minimaal Android 8.1 of anders LineageOS op jouw telefoon)
- `Accu-Chek Insight <../Configuration/Accu-Chek-Insight-Pump.html>`_ 
- `DanaR <../Configuration/DanaR-Insulin-Pump.html>`_ 
- `DanaRS <../Configuration/DanaRS-Insulin-Pump.html>`_
- `bepaalde oudere Medtronic modellen <../Configuration/MedtronicPump.html>`_ (extra nodig: RileyLink/Gnarl hardware, Android telefoon met Bluetooth Low Energy / BLE-chipset)

**Andere pompen** die mogelijk in de toekomst geschikt zullen zijn vind je op de `Mogelijk toekomstige insulinepompen <../Getting-Started/Future-possible-Pump-Drivers.html>`_ pagina.

Als je een pomp **particulier wilt kopen** dan is hier een overzicht van verschillende distributeurs in `deze spreadsheet <https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0>`_, eventuele aanvullingen op deze lijst zijn welkom.

**Dus wat is de beste pomp om te loopen met AndroidAPS?**

De Combo, de Insight en de oudere Medtronics zijn goede pompen en loopbaar. De Combo heeft ook als voordeel dat er veel meer keuze is in infuussets, aangezien hij een standaard luer-lock aansluiting heeft. Er gaat een normale batterij in, die je bij een tankstation of supermarkt kunt kopen en mocht het echt nodig zijn, kunt je hem altijd nog stelen/lenen van de afstandsbediening in een hotelkamer ;-).

De voordelen van de DanaR/RS vs. de Combo zijn echter:

- De DanaR/RS is te gebruiken met vrijwel elke telefoon met Android versie 5.1 of hoger. Er hoeft dus geen Lineage besturingssysteem te worden geïnstalleerd. Mocht je telefoon stuk gaan of kwijtraken, dan is een vervangende telefoon die werkt met de DanaR/RS, snel gevonden. Met de Combo is dat minder makkelijk. (Dit kan veranderen in de toekomst, als Android 8.1 populairder wordt)
- Initiële koppeling tussen telefoon en pomp is makkelijker met de DanaR/RS. Maar dit doe je meestal eenmalig.
- Tot nu toe werkt de Combo door 'screen parsing': doorsturen wat er op het scherm staat. In het algemeen werkt dit prima, maar het is traag. Bij het loopen merk je dit vaak niet eens omdat alles op de achtergrond werkt. Wel kost het meer tijd, dus je moet langer een Bluetooth verbinding houden tussen telefoon en pomp. Dat kan lastig zijn, bijvoorbeeld wanneer je alvast bolust tijdens het koken, en je al wegloopt terwijl de bolus nog wordt gegeven. 
- De Combo trilt aan het einde van TBRs, de DanaR trilt (of piept) bij een SMB. Waarschijnlijk gebruikt de loop 's nachts vaker een TBR dan SMB.  De DanaRS kun je zo instellen dat de pomp niet piept of trilt wanneer een TBR of SMB wordt gegeven.
- Bij de DanaRS wordt de pompgeschiedenis in een paar seconden uitgelezen met COB. Daardoor is het makkelijk om even offline te wisselen van telefoon. Zodra er een paar CGM waardes binnenkomen, werkt de loop weer.
- Alle pompen waar AndroidAPS op werkt, zijn waterdicht wanneer ze nieuw zijn. Alleen de Dana pompen zijn ook gegarandeerd waterdicht tijdens gebruik, doordat de ruimtes voor batterij en reservoir volledig afgesealed zijn. 

BG bron
--------------------------------------------------
Dit is slechts een kort overzicht van alle compatibele CGMs/FGM met AndroidAPS. Zie meer informatie `hier <../Configuration/BG-Source.html>`_. Even kort samengevat: als je jouw glucosewaardes kunt laten weergeven in de xDrip+ app of op jouw Nightscout site, dan kun je in AAPS als "BG bron" kiezen voor xDrip+ (of voor Nightscout, maar dan heb je wel continu een internetverbinding nodig).

* `Dexcom G6 <../Hardware/DexcomG6.html>`_: Werkt met xDrip+ app of aangepaste Dexcom app
* `Dexcom G5 <../Hardware/DexcomG5.html>`_: Werkt met xDrip+ app of aangepaste Dexcom app
* `Dexcom G4 <../Hardware/DexcomG4.html>`_: Deze sensors zijn vrij oud, maar er zijn instructies te vinden om hem met de xDrip+ app te gebruiken
* `Libre 2 <../Hardware/Libre2.html>`_: Werkt met xDrip+ (geen zender nodig), maar je moet je eigen gepatchte app bouwen.
* `Libre 1 <../Hardware/Libre1.html>`_: Je hebt een zender nodig, zoals Bubble, Bluecon of MiaoMiao en de xDrip+ app.
* `Eversense <../Hardware/Eversense.html>`_: Werkt tot nu toe alleen in combinatie met ESEL app en een gepatchte Eversense-App (werkt niet met Dana RS en LineageOS, maar DanaRS en Android of Combo en Lineage werken prima)
* `Enlite <../Hardware/MM640g.html>`_: Vrij ingewikkeld met extra dingen om rond te zeulen


Nightscout
--------------------------------------------------
Nightscout is een open source web-applicatie die jouw CGM-gegevens en AndroidAPS gegevens kan opslaan, weergeven en rapporten kan maken. Meer informatie vind je op de `website van het Nightscout project <http://www.nightscout.info/>`_. You can create your own `Nightscout website <https://nightscout.github.io/nightscout/new_user/>`_, use the semi-automated Nightscout setup on `zehn.be <https://ns.10be.de/en/index.html>`_ or host it on your own server (this is for IT experts).

Nightscout werkt onafhankelijk van de andere onderdelen. Je hebt het nodig om voorbij Doel 1 te komen.

Meer informatie over het instellen van Nightscout voor gebruik met AndroidAPS vind je `hier <../Installing-AndroidAPS/Nightscout.html>`_.

AAPS-.apk-bestand
--------------------------------------------------
De basiscomponent van het systeem. Voordat je de app installeert, moet je eerst het apk-bestand (dat is de bestandsnaam extensie voor een Android app) maken. Instructies staan `hier <../Installing-AndroidAPS/Building-APK.html>`_.  

Optionele onderdelen
==================================================
Smartwatch
--------------------------------------------------
Elke smartwatch met Android Wear 1.x en hoger is geschikt. Sommige loopers dragen een Sony Smartwatch 3 (SWR50) omdat het het enige horloge is dat elke 5 minuten een Dexcom G5/G6 ontvangt zonder de telefoon in de buurt te hebben. Dit wordt "stand alone" ontvanger genoemd. Sommige andere horloges kunnen worden gepatcht om te werken als een stand alone ontvanger (zie `deze documentatie <https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5>`_ voor meer details).

Gebruikers houden een `lijst van geteste telefoons en smartwatches <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_ bij. Er zijn verschillende watchfaces voor gebruik met AndroidAPS, deze vind je `hier <../Configuration/Watchfaces.html>`_.

Om een telefoon of horloge toe te voegen aan de lijst kun je dit `formulier <https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform>`_ invullen.

Bij eventuele problemen met de spreadsheet stuur een e-mail naar `hardware@androidaps.org <mailto:hardware@androidaps.org>`_, voor eventuele donaties van telefoon/smartwatch modellen die nog getest moeten worden kun je een e-mail sturen naar `donations@androidaps.org <mailto:hardware@androidaps.org>`_.

xDrip+
--------------------------------------------------
Zelfs als je de xDrip+ App niet als BG bron nodig hebt, kun je hem nog steeds gebruiken voor bijvoorbeeld alarmen of om jouw bloedglucose te laten weergeven op een smartwatch. Je kunt in xDrip+ zoveel alarmen aanmaken als je wilt, en zelf tijdvakken specificeren wanneer een alarm actief moet zijn, of het alarm toch moet afgaan wanneer de telefoon in 'stille modus' staat, etc. Meer informatie over xDrip+ vind je `hier <../Configuration/xdrip.html>`_. Houd er rekening mee dat de documentatie van deze app niet altijd up-to-date is, aangezien hij zeer regelmatig wordt geupdatet.

Gebruiksvoorbeeld
==================================================
Als je wilt weten hoe je stap voor stap een werkend systeem kunt maken, dan is hier een gebruiksvoorbeeld. Dit voorbeeld is al vrij oud, maar is als het goed is nog steeds up-to-date.

.. toctree::
   :maxdepth: 1
   :glob:
   
   Gebruiksvoorbeeld <../Getting-Started/Sample-Setup.rst>
 
  
Wat te doen tijdens het wachten op onderdelen
==================================================
Het duurt soms een tijdje voordat je alle onderdelen voor het maken van een closed loop bij elkaar hebt. Maar geen zorgen, er zijn een heleboel dingen die je kunt doen tijdens het wachten. Het is NOODZAKELIJK om jouw basaalstanden, koolhydraatratio (KH), insuline gevoeligheidsfactor (ISF) etc. te testen en (indien van toepassing) aan te passen. AndroidAPS gebruiken in open loop modus kan een goede manier zijn om jouw profielinstellingen te testen en vertrouwd te raken met het syteem. In de open loop modus geeft AndroidAPS behandelingsadviezen die je handmatig moet doorvoeren.

Verder kun je deze documentatie doorlezen, je kunt online of offline contact opnemen met andere loopers. Lees wat `achtergrondinformatie <https://androidaps.readthedocs.io/en/dev/EN/Where-To-Go-For-Help/Background-reading.html>`_ of bekijk welke vragen andere loopers stellen in de verschillende Facebook groepen (let hierbij wel op de kwaliteit van andermans suggesties, niet alles wat je leest is verstandig om blindelings na te doen).

** Klaar? **
Als je jouw AAPS onderdelen bij elkaar hebt (gefeliciteerd!) of ten minste genoeg om te beginnen in de open loop modus, lees dan eerst de `Doelen <../Usage/Objectives.html>`_ door en stel je `hardware <../index.html#component-setup>`_ in.
