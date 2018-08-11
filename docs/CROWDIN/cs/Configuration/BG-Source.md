# Zdroj glykémie

**Pro uživatele Dexcomu:**   
_Pokud používáte xDrip..._  


* Není-li xDrip již nastaven, pak stáhněte [xdrip](https://github.com/NightscoutFoundation/xDrip) a postupujte podle pokynů na Nightscoutu ([G4 bez share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 s share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* V Xdripu vyberte nastavení -> Inter-app settings - > Lokální odesílání dat a vyberte zapnout.
* V Xdripu vyberte nastavení -> Inter-app settings - > Accept Treatments a vyberte vypnout.
* Pokud chcete aby AndroidAPS bylo schopné kalibrovat, tak v xdrip vyberte nastavení -> Inter-app settings -> Accept Calibrations a vyberte zapnout. Můžete také zkontrolovat v Xdrip nastavení položku -> méně časté nastavení -> Advanced Calibration.
* Vyberte xdrip v ConfigBuilder (nastavení v AndroidAPS).

_If using Dexcom G5 App..._  


* Just dev.
* Download the apk from [here](https://github.com/dexcomapp/dexcomapp), just this versions works whether mg/dl or mmol/l.
* Deinstall original Dexcom app, if not allready done.
* Select Dexcom G5 App in ConfigBuilder

_If using OTG cable ('traditional' Nightscout)…_  


* If not already set up then download Nightscout Uploader app from the Play Store and follow instructions on [Nightscout](http://www.nightscout.info/wiki/welcome/basic-requirements).
* In AndroidAPS Preferences enter your nightscout website and API secret.
* Select NSClient in ConfigBuilder (setting in AndroidAPS).

**For users of Libre:**  


_If using xdrip..._  


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
* Select NSClient in ConfigBuilder (setting in AndroidAPS).