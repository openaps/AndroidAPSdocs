# BG bron

## Voor Dexcom gebruikers  


### Dexcom G5 of G6 met xDrip+  


* Als het nog niet ingesteld is, download dan [xdrip](https://github.com/NightscoutFoundation/xDrip) en volg de instructies voor nightscout ([G4 zonder 'share'](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 met 'share'](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* In xdrip ga naar Settings > Interapp Compatibility > Broadcast Data Locally en selecteer ON.
* In xdrip ga naar Instellingen > Interapp settings > Accepteer Lokaal uitgezonden en selecteer UIT.
* Als je AndroidAPS wilt gebruiken om te kalibreren ga dan in xdrip naar Instellingen > Interapp settings > Accept Calibrations en selecteer OP. Je kunt ook de opties bekijken in Instellingen > Minder vaak voorkomende instellingen > Advanced Calibration Settings.
* Selecteer xdrip in ConfigBuilder (instellingen in AndroidAPS).

### Dexcom G5 of G6 met de aangepaste Dexcom app  


* Download de apk van <https://github.com/dexcomapp/dexcomapp>, en kies de versie die je nodig hebt (mg/dl of mmol/l versie, voor G5 of G6).
* Stop sensor en verwijder de originele Dexcom app, als dat nog niet gedaan is.
* Installeer de gedownloade apk
* Start sensor
* Selecteer Dexcom G5 App (patched) in ConfigBuilder (instelling in AndroidAPS).

### Dexcom G4 met OTG kabel ('traditionele' Nightscout)  


* Als dit nog niet is ingesteld download dan Nightscout Uploader app vanuit de Play Store en volg de instructies op [Nightscout](http://www.nightscout.info/wiki/welcome/basic-requirements).
* Ga naar de AndroidAPS Instellingen en vul jouw Nightscout website en API geheim in als BG bron.
* Selecteer NSClient in ConfigBuilder (setting in AndroidAPS).

## Voor Libre gebruikers met Bluetooth-adapter  


Om je Libre te gebruiken als een CGM die elke 5 minuten nieuwe BG waarden krijgt, moet je eerst een NFC naar Bluetooth adapter kopen, zoals:

* MiaoMiao-Reader <https://www.miaomiao.cool/>
* Blukon Nightrider <https://www.ambrosiasys.com/howit>
* BlueReader <https://bluetoolz.de/blueorder/#home>
* Sony Smartwatch 3 (SWR50) als Auslesetool <https://github.com/pimpimmi/LibreAlarm/wiki/>

### Libre met xDrip+  


* Als nog niet is ingesteld dan download xdrip en volg de instructies op: [LimiTTEer](https://github.com/JoernL/LimiTTer), [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki) or [BlueReader](https://unendlichkeit.net/wordpress/?p=680&lang=en)([Hardware](https://bluetoolz.de/wordpress/)).
* In xdrip ga naar Settings > Interapp Compatibility > Broadcast Data Locally en selecteer ON.
* In xdrip ga naar Instellingen > Interapp settings > Accepteer Lokaal uitgezonden en selecteer UIT.
* Als je AndroidAPS wilt gebruiken om te kalibreren ga dan in xdrip naar Instellingen > Interapp settings > Accept Calibrations en selecteer OP. Je kunt ook de opties bekijken in Instellingen > Minder vaak voorkomende instellingen > Advanced Calibration Settings.
* Selecteer xdrip in ConfigBuilder (instellingen in AndroidAPS).
* Voor G5 native-mode in xDrip, ga naar Instellingen > Cloud Upload >> REST API > Extra options > Append source info to device en selecteer ON.

### Libre met Glimp  


* Als het niet al is ingesteld, download Glimp en volg de instructies van [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
* Selecteer Glimp in ConfigBuilder (instellingen in AndroidAPS).

## Voor Eversense gebruikers  


De makkelijkste manier om de Eversense te gebruiken met AndroidAPS is om de aangepaste [Eversense app](https://github.com/BernhardRo/Esel/blob/master/apk/mod_com.senseonics.gen12androidapp-release.apk) te installeren (en de originele app eerst te verwijderen).

**Waarschuwing: door de oude app te verwijderen zullen jouw lokaal opgeslagen (glucose)gegevens ouder dan een week, ook worden verwijderd!**

Om jouw gegevens vervolgens in AndroidAPS te krijgen, moet je [ESEL installeren](https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk) en "Send to AAPS and xDrip" (Stuur naar AAPS en xDrip) in ESEL aanzetten. Ook moet je "MM640g" kiezen als BG bron in de [Configuratie Builder](../Configuration/Config-Builder.md) in AndroidAPS. Aangezien de BG-gegevens van Eversense soms veel 'ruis' kunnen hebben, is het goed om "Smooth Data" (gegevens vloeiend maken) in ESEL in te schakelen. Dit heeft de voorkeur boven "Gebruik altijd korte gemiddeld verschil ipv gewone verschil" inschakelen in AAPS.

Een andere instructie voor het gebruik van xDrip+ met Eversense vind je [hier](https://github.com/BernhardRo/Esel/tree/master/apk).

## Voor MM640g of MM630g gebruikers  


* Als dat nog niet is ingesteld, download dan [600SeriesAndroidUploader](http://pazaan.github.io/600SeriesAndroidUploader/) en volg de instructies voor [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g).
* In 600 Series Uploader ga naar Instellingen > Send to xdrip+ en selecteer ON (vinkje).
* Selecteer MM640g in ConfigBuilder (Instelling AndroidAPS).

## Voor PocTech CT-100 gebruikers  


* Installeer PocTech App
* Selecteer PocTech App in ConfigBuilder (instelling in AndroidAPS).

## Voor gebruikers van andere CGM geüpload naar Nightscout  


Als je een andere CGM gebruikt die jouw gegevens doorstuurt naar [Nightscout](http://www.nightscout.info)  


* Ga naar de AndroidAPS Instellingen en vul jouw Nightscout website en API geheim in als BG bron.
* Selecteer NSClient in ConfigBuilder (setting in AndroidAPS).

# General CGM recommendations

## CGM hygiene

Whichever CGM system you are using, if you are going to use blood based calibration, then there are some very clear rules you should apply, whether or not you are using DIY CGM software or the official apps.

* Make sure hands and kit are clean.
* Try to calibrate when you have a series of dots with a flat arrow (15-30 minutes is usually enough)
* Avoid calibrating when glucose levels are moving up or down. 
* Do “enough” calibrations – on official apps, you will be prompted for once or twice per day checks. On DIY systems you may not be, and should be careful about continuing without calibrations.
* If it all possible, calibrate with some of your readings in a lower range (4-5mmol/l or 72-90mg/dl) and some at a slightly higher level (7-9mmol/l or 126-160mg/dl) as this provides a better range for the point/slope calibration.

## Dexcom G6 & DIY systems

What’s clear is that using the G6 is perhaps a little more complex than it as first suggests. To use it safely, there are a few points to be aware of:

* If you are using the native data with the calibration code in xDrip or Spike, the safest thing to do is not allow preemptive restarts of the sensor.
* If you must use preemptive restarts, then make sure you insert at a time of day where you can observe the change and calibrate if necessary. 
* If you are restarting sensors, either do it without the factory calibration for safest results on days 11 and 12, or ensure you are ready to calibrate and keep an eye on variation.
* Pre-soaking of the G6 with factory calibration is likely to give variation in results. If you do pre-soak, then to get best results, you will probably need to calibrate the sensor.
* If you aren’t being observant about the changes that may be taking place, it may be better to revert to non-factory-calibrated mode and use the system like a G5.

To learn more about the details and reasons for these recommendations read the [complete article](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) published by Tim Street at [www.diabettech.com](http://www.diabettech.com).