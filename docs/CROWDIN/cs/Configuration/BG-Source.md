# Zdroj glykémie

**Pro uživatele Dexcomu:**   
_Pokud používáte xDrip..._  


* Není-li xDrip již nastaven, pak stáhněte [xdrip](https://github.com/NightscoutFoundation/xDrip) a postupujte podle pokynů na Nightscoutu ([G4 bez share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 s share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* V Xdripu vyberte nastavení -> Inter-app settings - > Lokální odesílání dat a vyberte zapnout.
* V Xdripu vyberte nastavení -> Inter-app settings - > Accept Treatments a vyberte vypnout.
* Pokud chcete aby AndroidAPS bylo schopné kalibrovat, tak v xdrip vyberte nastavení -> Inter-app settings -> Accept Calibrations a vyberte zapnout. Můžete také zkontrolovat v Xdrip nastavení položku -> méně časté nastavení -> Advanced Calibration.
* Vyberte xdrip v ConfigBuilder (nastavení v AndroidAPS).

_Pokud používáte Dexcom G5 aplikaci..._  


* Jen dev.
* Stáhněte si apk z [zde](https://github.com/dexcomapp/dexcomapp), právě tato verze funguje buď v mg/dl nebo v mmol/l.
* Odinstalujte původní verzi Dexcom aplikace, pokud jste to ještě neudělali.
* Vyberte Dexcom G5 aplikace v Konfiguraci

_pokud používáte OTG kabel ("tradiční" Nightscout) _  


* Pokud jste ještě nenastavili, tak stáhněte Nightscout Uploader aplikaci z obchodu Play a postupujte podle pokynů na [Nightscout](http://www.nightscout.info/wiki/welcome/basic-requirements).
* V nastavení AndroidAPS zadejte svojí Nightscout adresu a API secret.
* Vyberte NSClient v Konfiguraci AndroidAPS.

**Pro uživatele Libre:**  


_pokud používáte xDrip..._  


* If not already set up then download xdrip and follow instructions on [LimiTTEer](https://github.com/JoernL/LimiTTer), [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki) or [BlueReader](https://unendlichkeit.net/wordpress/?p=680&lang=en)([Hardware](https://bluetoolz.de/wordpress/)).
* V Xdripu vyberte nastavení -> Inter-app settings - > Lokální odesílání dat a vyberte zapnout.
* V Xdripu vyberte nastavení -> Inter-app settings - > Accept Treatments a vyberte vypnout.
* Pokud chcete aby AndroidAPS bylo schopné kalibrovat, tak v xdrip vyberte nastavení -> Inter-app settings -> Accept Calibrations a vyberte zapnout. Můžete také zkontrolovat v Xdrip nastavení položku -> méně časté nastavení -> Advanced Calibration.
* Vyberte xdrip v ConfigBuilder (nastavení v AndroidAPS).

_If using Glimp..._  


* If not already set up then download Glimp and follow instructions on [nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
* Select Glimp in ConfigBuilder (setting in AndroidAPS).

**For users of MM640g or MM630g:**  


* If not already set up then download [600SeriesAndroidUploaer](http://pazaan.github.io/600SeriesAndroidUploader/) and follow instructions on [nightscout](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g).
* In 600 Series Uploader go to Settings > Send to xdrip+ and select ON (tick).
* Select MM640g in ConfigBuilder (setting in AndroidAPS).

**For users of other CGM uploaded to nightscout:**  
If you have any other CGM set up that sends your data to [Nightscout](http://www.nightscout.info) then  


* In AndroidAPS Preferences enter your nightscout website and API secret.
* Vyberte NSClient v Konfiguraci AndroidAPS.