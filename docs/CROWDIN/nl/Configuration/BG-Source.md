# Algemene CGM aanbevelingen

## Kalibraties

Los van het CGM systeem dat je gebruikt, gelden een aantal hele heldere regels voor het gebruiken van een vingerprik om mee te kalibreren. Die regels gelden zowel bij het gebruik van officiële CGM software van de fabrikant, als bij software uit de doe-het-zelf community.

* Zorg dat je handen (wassen met water en zeep) en je meetbenodigdheden schoon en droog zijn.
* Kalibreer alleen wanneer jouw CGM een reeks metingen met een platte pijl geeft (15-30 minuten is meestal genoeg)
* Doe geen kalibraties wanneer je glucosewaardes stijgen of dalen. 
* Kalibreer ‘voldoende’– de officiële apps vragen één of twee kalibraties per dag. Apps uit de doe-het-zelf community vragen misschien niet (altijd) naar kalibraties, wees terughoudend in het door laten lopen van CGM metingen zonder kalibraties.
* Kalibreer als het enigszins kan zowel met glucosewaardes in een lager bereik (4-5mmol/l of 72-90mg/dl) als met waardes in een hoger bereik (7-9mmol/l of 126-160mg/dl) omdat dit een betrouwbaardere ijklijn geeft.

# BG bron

## Voor Dexcom gebruikers

### Dexcom G6: Algemene tips voor looping

Zie [Dexcom G6 pagina](../Configuration/Dexcom.md) voor instellingen en veelvoorkomende problemen met de Dexcom G6.

Het gebruik van de is G6 misschien wat complexer dan het op het eerste gezicht lijkt. Om de G6 veilig te gebruiken, moet je rekening houden met het volgende:

* Wanneer je het "Native" algoritme gebruikt in combinatie met de kalibratiecode in xDrip of Spike, is het veiligste om de optie "Pre-emptive restart" (voortijdige herstart) niet te gebruiken.
* Als je er wel voor kiest om Pre-emptive restarts te gebruiken, zorg dan dat je de sensor start op een moment van de dag dat je tijd kunt vrijmaken om te zien wat er gebeurt tijdens de herstart. Zodat je kunt kalibreren als je ziet dat dat nodig is (je ziet een 'sprong' in je glucosegrafiek). 
* Als je jouw sensoren herstart, dan zul je dat moeten doen A) zonder gebruik te maken van de kalibratiecode voor de veiligste resultaten op dagen 11 en 12, of B) ervoor te zorgen dat je jouw sensorgrafiek in de gaten kunt houden en bereid bent om te kalibreren.
* Het zogenaamde "Pre-soaking" (de sensor alvast inbrengen, waarna je nog wacht met starten) van de G6 met kalibratiecode zal hoogstwaarschijnlijk leiden tot onnauwkeurigheden in je glucosewaardes na starten. Omdat het algoritme van de G6 rekent op weefselbeschadiging na inbrengen, terwijl je met Pre-soaken niet dezelfde mate van weefselbeschadiging zult hebben op het moment dat je de sensor start. Wanneer je Pre-soakt is het waarschijnlijk het beste om de sensor te kalibreren.
* Als je om welke reden ook niet in staat bent om op te letten wat er gebeurt tijdens een herstart / na een Pre-soak, dan kun je beter de kalibratiecode niet gebruiken, en jouw sensor gebruiken met kalibraties, net als bij de G5.

Lees het [volledige artikel](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) (Engelstalig) van Tim Street voor meer achtergrondinformatie en de redenen achter deze aanbevelingen.

### Dexcom G6 met xDrip+

* Als het nog niet ingesteld is, download dan [xdrip](https://github.com/NightscoutFoundation/xDrip) en volg de instructies voor nightscout ([G4 zonder 'share'](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 met 'share'](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* Selecteer xdrip in Configurator (instellingen in AndroidAPS).
* Stel xDrip+ in zoals beschreven op de [xDrip+ instellingen pagina](../Configuration/xdrip.md)

### Dexcom G5 met xDrip+

* Als het nog niet ingesteld is, download dan [xdrip](https://github.com/NightscoutFoundation/xDrip) en volg de instructies voor nightscout ([G4 zonder 'share'](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 met 'share'](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* In xdrip ga naar Settings > Interapp Compatibility > Broadcast Data Locally en selecteer ON. Deze instelling zorgt ervoor dat de xDrip app op jouw telefoon jouw waardes direct naar de AndroidAPS app (ook op jouw telefoon) doorstuurt en je dus geen internetverbinding nodig hebt.
* In xdrip ga naar Instellingen > Interapp Settings > Accept Treatments selecteer OFF.
* Als je AndroidAPS wilt gebruiken om te kalibreren ga dan in xdrip naar Instellingen > Interapp settings > Accept Calibrations en selecteer ON. Je kunt ook de opties aanpassen aan jouw behoefte in Instellingen > Minder vaak voorkomende instellingen > Advanced Calibration Settings.
* Selecteer xdrip in Configurator (instellingen in AndroidAPS).

### Dexcom G5 of G6 met de aangepaste Dexcom app  


* Download de apk van <https://github.com/dexcomapp/dexcomapp>, en kies de versie die je nodig hebt (mg/dl of mmol/l versie, voor G5 of G6).
* Stop sensor en verwijder de originele Dexcom app, als je dat nog niet gedaan had.
* Installeer de gedownloade apk
* Start sensor
* Selecteer Dexcom G5/G6 App (aangepast) in Configurator (instelling in AndroidAPS).

### Dexcom G4 met OTG kabel ('traditionele' Nightscout)  


* Als dit nog niet is ingesteld download dan Nightscout Uploader app vanuit de Play Store en volg de instructies op [Nightscout](http://www.nightscout.info/wiki/welcome/basic-requirements).
* Ga naar de AndroidAPS Instellingen en vul jouw Nightscout website en API geheim in als BG bron.
* Selecteer NSClient in Configurator (instelling in AndroidAPS).

## Libre met Bluetooth-adapter  


Om je Libre te gebruiken als een CGM die elke 5 minuten nieuwe BG waarden krijgt, moet je eerst een NFC naar Bluetooth adapter kopen, zoals:

* MiaoMiao-Reader <https://www.miaomiao.cool/>
* Blukon Nightrider <https://www.ambrosiasys.com/howit>
* BlueReader <https://bluetoolz.de/blueorder/#home>
* Sony Smartwatch 3 (SWR50) als ontvanger <https://github.com/pimpimmi/LibreAlarm/wiki/>

### Libre met xDrip+  


* Als nog niet is ingesteld dan download xdrip en volg de instructies op: [LimiTTEer](https://github.com/JoernL/LimiTTer), [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki) of [BlueReader](https://unendlichkeit.net/wordpress/?p=680&lang=en)([Hardware](https://bluetoolz.de/wordpress/)).
* In xdrip ga naar Settings > Interapp Compatibility > Broadcast Data Locally en selecteer ON. Deze instelling zorgt ervoor dat de xDrip app op jouw telefoon jouw waardes direct naar de AndroidAPS app (ook op jouw telefoon) doorstuurt en je dus geen internetverbinding nodig hebt.
* In xdrip ga naar Instellingen > Interapp Settings > Accept Treatments selecteer OFF.
* Als je AndroidAPS wilt gebruiken om te kalibreren ga dan in xdrip naar Instellingen > Interapp settings > Accept Calibrations en selecteer ON. Je kunt ook de opties aanpassen aan jouw behoefte in Instellingen > Minder vaak voorkomende instellingen > Advanced Calibration Settings.
* Selecteer xdrip in Configurator (instellingen in AndroidAPS).
* Stel xDrip+ in zoals beschreven op de [xDrip+ instellingen pagina](../Configuration/xdrip.md)

### Libre met Glimp  


* Als het niet al is ingesteld, download Glimp en volg de instructies van [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
* Selecteer Glimp in ConfigBuilder (instellingen in AndroidAPS).

## Eversense  


The easiest way to use Eversense with AndroidAPS is to install the modified [Eversense app](https://github.com/BernhardRo/Esel/blob/master/apk/eversense_cgm_v1.0.409_com.senseonics.gen12androidapp-patched.apk) (and unistall the original one first).

**Waarschuwing: door de oude app te verwijderen zullen jouw lokaal opgeslagen (glucose)gegevens ouder dan een week, ook worden verwijderd!**

Om jouw gegevens vervolgens in AndroidAPS te krijgen, moet je [ESEL installeren](https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk) en "Send to AAPS and xDrip" (Stuur naar AAPS en xDrip) in ESEL aanzetten. Ook moet je "MM640g" kiezen als BG bron in de [Configuratie Builder](../Configuration/Config-Builder.md) in AndroidAPS. Aangezien de BG-gegevens van Eversense soms veel 'ruis' kunnen hebben, is het goed om "Smooth Data" (gegevens vloeiend maken) in ESEL in te schakelen. Dit heeft de voorkeur boven "Gebruik altijd korte gemiddeld verschil ipv gewone verschil" inschakelen in AAPS.

Een andere instructie voor het gebruik van xDrip+ met Eversense vind je [hier](https://github.com/BernhardRo/Esel/tree/master/apk).

## Medtronic 640g of 630g  


* Als dat nog niet is ingesteld, download dan [600SeriesAndroidUploader](http://pazaan.github.io/600SeriesAndroidUploader/) en volg de instructies voor [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g).
* In 600 Series Uploader ga naar Instellingen > Send to xdrip+ en selecteer ON (vinkje).
* Selecteer MM640g in Configurator (Instelling AndroidAPS).

## PocTech CT-100  


* Installeer PocTech App
* Selecteer PocTech App in Configurator (instelling in AndroidAPS).

## Andere CGMs die uploaden naar Nightscout  


Als je een andere CGM gebruikt die jouw gegevens doorstuurt naar [Nightscout](http://www.nightscout.info)  


* Ga naar de AndroidAPS Instellingen en vul jouw Nightscout website en API geheim in als BG bron.
* Selecteer NSClient in Configurator (instelling in AndroidAPS).