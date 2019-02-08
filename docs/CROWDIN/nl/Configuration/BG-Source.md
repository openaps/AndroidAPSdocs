# BG bron

**For users of Dexcom:**  
_If using G5 or G6 with xdrip+_  


* Als het nog niet ingesteld is, download dan [xdrip](https://github.com/NightscoutFoundation/xDrip) en volg de instructies voor nightscout ([G4 zonder 'share'](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 met 'share'](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* In xdrip ga naar Settings > Interapp Compatibility > Broadcast Data Locally en selecteer ON.
* In xdrip ga naar Instellingen > Interapp settings > Accepteer Lokaal uitgezonden en selecteer UIT.
* Als je AndroidAPS wilt gebruiken om te kalibreren ga dan in xdrip naar Instellingen > Interapp settings > Accept Calibrations en selecteer OP. Je kunt ook de opties bekijken in Instellingen > Minder vaak voorkomende instellingen > Advanced Calibration Settings.
* Selecteer xdrip in ConfigBuilder (instellingen in AndroidAPS).

_If using G5 or G6 with patched Dexcom app_  


* Download the apk from <https://github.com/dexcomapp/dexcomapp>, and choose the version that fits your needs (mg/dl or mmol/l version, G5 or G6).
* Stop sensor en verwijder de originele Dexcom app, als dat nog niet gedaan is.
* Installeer de gedownloade apk
* Start sensor
* Selecteer Dexcom G5 App (patched) in ConfigBuilder (instelling in AndroidAPS).

_Als G4 met OTG kabel gebruikt wordt ('traditionele' Nightscout)... _  


* Als dit nog niet is ingesteld download dan Nightscout Uploader app vanuit de Play Store en volg de instructies op [Nightscout](http://www.nightscout.info/wiki/welcome/basic-requirements).
* In AndroidAPS Preferences geef je Nighscout website en API code.
* Selecteer NSClient in ConfigBuilder (setting in AndroidAPS).

**Voor het gebruik van de Libre met Bluetooth cap:**  
Voor het gebruik van de Libre als CGM dan zijn nieuwe BG waardes van elke 5 minuten noodzakelijk. Je zult eerst een NFC Bluetooth adapter moeten kopen zoals:

* MiaoMiao-Reader <https://www.miaomiao.cool/>
* Blukon Nightrider <https://www.ambrosiasys.com/howit>
* BlueReader <https://bluetoolz.de/blueorder/#home>
* Sony Smartwatch 3 (SWR50) als Auslesetool <https://github.com/pimpimmi/LibreAlarm/wiki/>

_Als xdrip gebruikt wordt..._  


* Als nog niet is ingesteld dan download xdrip en volg de instructies op: [LimiTTEer](https://github.com/JoernL/LimiTTer), [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki) or [BlueReader](https://unendlichkeit.net/wordpress/?p=680&lang=en)([Hardware](https://bluetoolz.de/wordpress/)).
* In xdrip ga naar Settings > Interapp Compatibility > Broadcast Data Locally en selecteer ON.
* In xdrip ga naar Instellingen > Interapp settings > Accepteer Lokaal uitgezonden en selecteer UIT.
* Als je AndroidAPS wilt gebruiken om te kalibreren ga dan in xdrip naar Instellingen > Interapp settings > Accept Calibrations en selecteer OP. Je kunt ook de opties bekijken in Instellingen > Minder vaak voorkomende instellingen > Advanced Calibration Settings.
* Selecteer xdrip in ConfigBuilder (instellingen in AndroidAPS).
* Voor G5 native-mode in xDrip, ga naar Instellingen > Cloud Upload >> REST API > Extra options > Append source info to device en selecteer ON.

_Als xdrip gebruikt wordt..._  


* Als nog niet is ingesteld dan download Glimp en volg de instructies voor [nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
* Selecteer Glimp in ConfigBuilder (instellingen in AndroidAPS).

**Voor gebruikers van de MM640g of MM630g:**  


* Als nog niet is ingesteld dan download [600SeriesAndroidUploaer](http://pazaan.github.io/600SeriesAndroidUploader/) en volg de instructies voor [nightscout](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g).
* In 600 Series Uploader ga naar Instellingen > Send to xdrip+ en selecteer ON (vinkje).
* Selecteer MM640g in ConfigBuilder (Instelling AndroidAPS).

**Voor de gebruikers van PocTech CT-100:**  


* Installeer PocTech App
* Selecteer PocTech App in ConfigBuilder (instelling in AndroidAPS).

**Voor gebruikers van andere CGM, die naar Nightscout wordt opgeladen:**  
Als je een andere CGM hebt die de data naar [Nightscout](http://www.nightscout.info) stuurt;  


* In AndroidAPS Preferences geef je Nighscout website en API code.
* Selecteer NSClient in ConfigBuilder (setting in AndroidAPS).