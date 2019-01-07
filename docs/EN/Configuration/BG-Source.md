# BG source

**For users of Dexcom:**<Br>
_If using G5 or G6 with xdrip+_<br>
* If not already set up then download [xdrip](https://github.com/NightscoutFoundation/xDrip) and follow instructions on nightscout and xdrip FB group ([G4 without share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support), [G6](https://www.facebook.com/groups/xDripG5/permalink/2380684062005075/)).
* In xdrip go to Settings > Interapp Compatibility > Broadcast Data Locally and select ON.
* In xdrip go to Settings > Interapp Compatibility > Accept Treatments and select ON.
* In xdrip go to Settings > Cloud Upload > Nightscout Sync (REST API) and select ON.
* In xdrip go to Settings > Cloud Upload > Nightscout Sync (REST API) > Base URL and enter your Nightscout address in following format https://Your_API_Secret@Your_Nightscout_URL_Adress.
* In xdrip go to Settings > Cloud Upload > Nightscout Sync (REST API) > Send Display Glucose and select ON
* In xdrip go to Settings > Cloud Upload > Nightscout Sync (REST API) >  Extra Options > Upload treatments and untick the checkbox .
* In xdrip go to Settings > Less common settings > Extra Status Line > External Status and tick the checkbox.
* In xdrip go to Settings > xdrip+ Display Settings > Graph Settings > Show Basal TBR and tick the checkbox.
* In xdrip go to Settings > xdrip+ Display Settings > Graph Settings > Show micro bolus icons and untick the checkbox.
* If you want to be able to use AndroidAPS to calibrate then in xdrip go to Settings > Interapp Compatibility > Accept Calibrations and select ON.  You may also want to review the options in Settings > Less Common Settings > Advanced Calibration Settings.
* Select xdrip in ConfigBuilder (setting in AndroidAPS).
* Select xDrip Statusline (watch) in ConfigBuilder, next click on the gear wheel and make sure that Show detailed IOB and Show BGI are ON.

_If using G5 with patched Dexcom G5 app_<Br>
* Download the apk from [https://github.com/dexcomapp/dexcomapp](https://github.com/dexcomapp/dexcomapp), and choose either the mg/dl or mmol/l version.
* Stop sensor and uninstall the original Dexcom app, if not already done.
* Install downloaded apk
* Start sensor
* Select DexcomG5 App (patched) in ConfigBuilder (setting in AndroidAPS).

_If using G4 with OTG cable ('traditional' Nightscout)…_<br>
* If not already set up then download Nightscout Uploader app from the Play Store and follow instructions on [Nightscout](http://www.nightscout.info/wiki/welcome/basic-requirements).
* In AndroidAPS Preferences enter your nightscout website and API secret.
* Select NSClient in ConfigBuilder (setting in AndroidAPS).

**For users of Libre with Bluetooth cap:**<br>
To use your Libre as a CGM that is getting new BG values every 5 minutes you first need to buy a NFC to Bluetooth adapter like:

* MiaoMiao-Reader [https://www.miaomiao.cool/](https://www.miaomiao.cool/)
* Blukon Nightrider [https://www.ambrosiasys.com/howit](https://www.ambrosiasys.com/howit)
* BlueReader [https://bluetoolz.de/blueorder/#home](https://bluetoolz.de/blueorder/#home)
* Sony Smartwatch 3 (SWR50) als Auslesetool [https://github.com/pimpimmi/LibreAlarm/wiki/](https://github.com/pimpimmi/LibreAlarm/wiki/)

_If using xdrip..._<br>
* If not already set up then download xdrip and follow instructions on [LimiTTEer](https://github.com/JoernL/LimiTTer),  [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki) or [BlueReader](https://unendlichkeit.net/wordpress/?p=680&lang=en)([Hardware](https://bluetoolz.de/wordpress/)).
* In xdrip go to Settings > Interapp Compatibility > Broadcast Data Locally and select ON.
* In xdrip go to Settings > Interapp Compatibility > Accept Treatments and select OFF.
* If you want to be able to use AndroidAPS to calibrate then in xdrip go to Settings > Interapp Compatibility > Accept Calibrations and select ON.  You may also want to review the options in Settings > Less Common Settings > Advanced Calibration Settings.
* Select xdrip in ConfigBuilder (setting in AndroidAPS).
* For G5 native mode in xdrip go to Settings > Cloud upload > REST API > Extra options > Append source info to device and select ON.

_If using Glimp..._<br>
* If not already set up then download Glimp and follow instructions on [nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
* Select Glimp in ConfigBuilder (setting in AndroidAPS).

**For users of MM640g or MM630g:**<br>
* If not already set up then download [600SeriesAndroidUploaer](http://pazaan.github.io/600SeriesAndroidUploader/) and follow instructions on [nightscout](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g).
* In 600 Series Uploader go to Settings > Send to xdrip+ and select ON (tick).
* Select MM640g in ConfigBuilder (setting in AndroidAPS).

**For users of PocTech CT-100:**<br>
* Install PocTech App
* Select PocTech App in ConfigBuilder (setting in AndroidAPS).

**For users of other CGM uploaded to nightscout:**<br>
If you have any other CGM set up that sends your data to [Nightscout](http://www.nightscout.info) then<br>
* In AndroidAPS Preferences enter your nightscout website and API secret.
* Select NSClient in ConfigBuilder (setting in AndroidAPS).
