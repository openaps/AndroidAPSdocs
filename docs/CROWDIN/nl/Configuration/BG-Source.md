**General CGM recommendations**

**CGM hygiene**

Whichever CGM system you are using, if you are going to use blood based calibration, then there are some very clear rules you should apply, whether or not you are using DIY CGM software or the official apps.

* Zorg dat je handen (wassen met water en zeep) en je meetbenodigdheden schoon en droog zijn.
* Kalibreer alleen wanneer jouw CGM een reeks metingen met een platte pijl geeft (15-30 minuten is meestal genoeg)
* Doe geen kalibraties wanneer je glucosewaardes stijgen of dalen. 
* Kalibreer ‘voldoende’– de officiële apps vragen één of twee kalibraties per dag. Apps uit de doe-het-zelf community vragen misschien niet (altijd) naar kalibraties, wees terughoudend in het door laten lopen van CGM metingen zonder kalibraties.
* Kalibreer als het enigszins kan zowel met glucosewaardes in een lager bereik (4-5mmol/l of 72-90mg/dl) als met waardes in een hoger bereik (7-9mmol/l of 126-160mg/dl) omdat dit een betrouwbaardere ijklijn geeft.

# BG bron

## Smoothing blood glucose

AAPS werkt het beste wanneer de bloedglucose-gegevens vloeiend en consistent zijn. Afhankelijk van de BG bron die je gebruikt, wordt 'ruis' uit de ruwe waardes gefilterd. Met 'ruis' wordt bedoeld dat jouw glucosegrafiek eruit ziet als een schot hagel. Jouw glucosewaardes zijn dan niet betrouwbaar genoeg om bepaalde AAPS functies te gebruiken. Deze functies, zoals 'Activeer SMB altijd' en 'Gebruik SMB met koolhydraten' kunnen alleen worden gebruikt wanneer je een goed gefilterde BG bron hebt.

### Aangepaste Dexcom G5/G6 app

De Aangepaste Dexcom G5 of G6 app levert vloeiende en consistente BG gegevens. Er zijn geen beperkingen in het gebruik van SMB.

### xDrip+ app met Dexcom G5/G6

Wanneer je in xDrip+ de optie 'OB1 collector in native mode' hebt aangevinkt dan zijn jouw gegevens vloeiend en consistent genoeg. Met deze optie zijn er geen beperkingen in het gebruik van SMB. De reden hierachter is dat in de 'Native mode' xDrip+ het algoritme van de Dexcom zender gebruikt. Hierbij stuurt de zender ook informatie over 'ruis' mee, en heb je dus dezelfde waardes als wanneer je de Aangepaste Dexcom app zou gebruiken. Wanneer je de optie 'OB1 collector in native mode' niet hebt aangevinkt, dan gebruikt xDrip+ een eigen xDrip algoritme, waarbij je beperkt bent in het gebruik van SMB.

### xDrip+ app met Freestyle Libre

Wanneer je de xDrip+ app met de Freestyle Libre gebruikt dan kun je 'Activeer SMB altijd' en 'Gebruik SMB na koolhydraten' niet gebruiken, omdat hiermee je BG-waarden niet vloeiend en consistent genoeg zijn. Afgezien daarvan kun je een paar dingen doen om ruis in je gegevens te verminderen.

**Smooth Sensor Noise (ruisonderdrukking).** In xDrip+ kun je deze optie aanzetten via Instellingen > xDrip+ Display Settings > Smooth sensor noise. Hiermee worden gegevens met veel ruis, wat vloeiender gemaakt.

**Smooth Sensor Noise (Ultrasensitive) (ultragevoelige ruisonderdrukking).** Als je na het inschakelen van bovenstaande optie nog steeds veel ruis in jouw gegevens ziet, dan kun je de ruisonderdrukking wat agressiever zetten met behulp van de Smooth Sensor Noise (Ultrasensitive) optie. Hiermee zullen gegevens vloeiender worden gemaakt wanneer zeer lage niveaus van ruis worden gedetecteerd. Om dit te doen, moet je eerst [engineering mode inschakelen in xDrip+](../Enabling-Engineering-Mode-in-xDrip.md). Daarna kun je de ultragevoelige ruisonderdrukking inschakelen via Instellingen > xDrip+ Display Settings > Smooth Sensor Noise (Ultrasensitive).

## Voor Dexcom gebruikers

### Dexcom G6: General hints for looping

See [Dexcom G6 page](../Configuration/Dexcom.md) for details on setting Dexcom G6 sensor and solutions for common difficulties with Dexcom G6.

Het gebruik van de is G6 misschien wat complexer dan het op het eerste gezicht lijkt. Om de G6 veilig te gebruiken, moet je rekening houden met het volgende:

* Wanneer je het "Native" algoritme gebruikt in combinatie met de kalibratiecode in xDrip of Spike, is het veiligste om de optie "Pre-emptive restart" (voortijdige herstart) niet te gebruiken.
* Als je er wel voor kiest om Pre-emptive restarts te gebruiken, zorg dan dat je de sensor start op een moment van de dag dat je tijd kunt vrijmaken om te zien wat er gebeurt tijdens de herstart. Zodat je kunt kalibreren als je ziet dat dat nodig is (je ziet een 'sprong' in je glucosegrafiek). 
* Als je jouw sensoren herstart, dan zul je dat moeten doen A) zonder gebruik te maken van de kalibratiecode voor de veiligste resultaten op dagen 11 en 12, of B) ervoor te zorgen dat je jouw sensorgrafiek in de gaten kunt houden en bereid bent om te kalibreren.
* Het zogenaamde "Pre-soaking" (de sensor alvast inbrengen, waarna je nog wacht met starten) van de G6 met kalibratiecode zal hoogstwaarschijnlijk leiden tot onnauwkeurigheden in je glucosewaardes na starten. Omdat het algoritme van de G6 rekent op weefselbeschadiging na inbrengen, terwijl je met Pre-soaken niet dezelfde mate van weefselbeschadiging zult hebben op het moment dat je de sensor start. Wanneer je Pre-soakt is het waarschijnlijk het beste om de sensor te kalibreren.
* Als je om welke reden ook niet in staat bent om op te letten wat er gebeurt tijdens een herstart / na een Pre-soak, dan kun je beter de kalibratiecode niet gebruiken, en jouw sensor gebruiken met kalibraties, net als bij de G5.

Lees het [volledige artikel](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) (Engelstalig) van Tim Street voor meer achtergrondinformatie en de redenen achter deze aanbevelingen.

### If using G6 with xdrip+

* Als het nog niet ingesteld is, download dan [xdrip](https://github.com/NightscoutFoundation/xDrip) en volg de instructies voor nightscout ([G4 zonder 'share'](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 met 'share'](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* Selecteer xdrip in Configurator (instellingen in AndroidAPS).
* Stel xDrip+ in zoals beschreven op de [xDrip+ instellingen pagina](../Configuration/xdrip.md)
* If AAPS does not receive BG values when phone is in airplane mode use `Identify receiver` as describe on [xDrip+ settings page](../Configuration/xdrip.md).

### If using G5 with xdrip+

* Als het nog niet ingesteld is, download dan [xdrip](https://github.com/NightscoutFoundation/xDrip) en volg de instructies voor nightscout ([G4 zonder 'share'](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 met 'share'](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* In xdrip ga naar Settings > Interapp Compatibility > Broadcast Data Locally en selecteer ON. Deze instelling zorgt ervoor dat de xDrip app op jouw telefoon jouw waardes direct naar de AndroidAPS app (ook op jouw telefoon) doorstuurt en je dus geen internetverbinding nodig hebt.
* In xdrip ga naar Instellingen > Interapp Settings > Accept Treatments selecteer OFF.
* Als je AndroidAPS wilt gebruiken om te kalibreren ga dan in xdrip naar Instellingen > Interapp settings > Accept Calibrations en selecteer ON. Je kunt ook de opties aanpassen aan jouw behoefte in Instellingen > Minder vaak voorkomende instellingen > Advanced Calibration Settings.
* Selecteer xdrip in Configurator (instellingen in AndroidAPS).
* If AAPS does not receive BG values when phone is in airplane mode use `Identify receiver` as describe on [xDrip+ settings page](../Configuration/xdrip.md).

### If using G5 or G6 with patched Dexcom app

* Download de apk van <https://github.com/dexcomapp/dexcomapp>, en kies de versie die je nodig hebt (mg/dl of mmol/l versie, voor G5 of G6).
* Stop sensor en verwijder de originele Dexcom app, als je dat nog niet gedaan had.
* Installeer de gedownloade apk
* Start sensor
* Selecteer Dexcom G5/G6 App (aangepast) in Configurator (instelling in AndroidAPS).

### If using G4 with OTG cable ('traditional' Nightscout)…  


* Als dit nog niet is ingesteld download dan Nightscout Uploader app vanuit de Play Store en volg de instructies op [Nightscout](http://www.nightscout.info/wiki/welcome/basic-requirements).
* Ga naar de AndroidAPS Instellingen en vul jouw Nightscout website en API geheim in als BG bron.
* Selecteer NSClient in Configurator (instelling in AndroidAPS).

## Libre met Bluetooth-adapter  


To use your Libre as a CGM that is getting new BG values every 5 minutes you first need to buy a NFC to Bluetooth adapter like:

* MiaoMiao-Reader <https://www.miaomiao.cool/>
* Blukon Nightrider <https://www.ambrosiasys.com/howit>
* BlueReader <https://bluetoolz.de/blueorder/#home>
* Sony Smartwatch 3 (SWR50) als ontvanger <https://github.com/pimpimmi/LibreAlarm/wiki/>

### If using xdrip...  


* Als nog niet is ingesteld dan download xdrip en volg de instructies op: [LimiTTEer](https://github.com/JoernL/LimiTTer), [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki) of [BlueReader](https://unendlichkeit.net/wordpress/?p=680&lang=en)([Hardware](https://bluetoolz.de/wordpress/)).
* In xdrip ga naar Settings > Interapp Compatibility > Broadcast Data Locally en selecteer ON. Deze instelling zorgt ervoor dat de xDrip app op jouw telefoon jouw waardes direct naar de AndroidAPS app (ook op jouw telefoon) doorstuurt en je dus geen internetverbinding nodig hebt.
* In xdrip ga naar Instellingen > Interapp Settings > Accept Treatments selecteer OFF.
* Als je AndroidAPS wilt gebruiken om te kalibreren ga dan in xdrip naar Instellingen > Interapp settings > Accept Calibrations en selecteer ON. Je kunt ook de opties aanpassen aan jouw behoefte in Instellingen > Minder vaak voorkomende instellingen > Advanced Calibration Settings.
* Selecteer xdrip in Configurator (instellingen in AndroidAPS).
* Stel xDrip+ in zoals beschreven op de [xDrip+ instellingen pagina](../Configuration/xdrip.md)
* If AAPS does not receive BG values when phone is in airplane mode use `Identify receiver` as describe on [xDrip+ settings page](../Configuration/xdrip.md).

### If using Glimp...  


* Als het niet al is ingesteld, download Glimp en volg de instructies van [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
* Selecteer Glimp in ConfigBuilder (instellingen in AndroidAPS).

## Eversense  


The easiest way to use Eversense with AndroidAPS is to install the modified [Eversense app](https://github.com/BernhardRo/Esel/blob/master/apk/eversense_cgm_v1.0.409_com.senseonics.gen12androidapp-patched.apk) (and unistall the original one first).

**Warning: by uninstalling the old app, your local historical data older than one week will be lost!**

To finally get your data to AndroidAPS, you need to install [ESEL](https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk) and enable "Send to AAPS and xDrip" in ESEL and "MM640g" as BG source in the [Configuration Builder](../Configuration/Config-Builder.md) in AndroidAPS. As the BG data from Eversense can be noisy sometimes, it is good to enable "Smooth Data" in ESEL, which is better than enabling "Always use short average delta instead of simple delta" in AAPS.

You can find another instruction for using xDrip with an Eversense [here](https://github.com/BernhardRo/Esel/tree/master/apk).

## Medtronic 640g of 630g  


* Als dat nog niet is ingesteld, download dan [600SeriesAndroidUploader](http://pazaan.github.io/600SeriesAndroidUploader/) en volg de instructies voor [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g).
* In 600 Series Uploader ga naar Instellingen > Send to xdrip+ en selecteer ON (vinkje).
* Selecteer MM640g in Configurator (Instelling AndroidAPS).

## PocTech CT-100  


* Installeer PocTech App
* Selecteer PocTech App in Configurator (instelling in AndroidAPS).

## Andere CGMs die uploaden naar Nightscout  


If you have any other CGM set up that sends your data to [Nightscout](http://www.nightscout.info) then  


* Ga naar de AndroidAPS Instellingen en vul jouw Nightscout website en API geheim in als BG bron.
* Selecteer NSClient in Configurator (instelling in AndroidAPS).