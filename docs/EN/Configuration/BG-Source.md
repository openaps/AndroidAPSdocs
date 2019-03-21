# BG source

## For users of Dexcom<Br>
### If using G5 or G6 with xdrip+<br>
* If not already set up then download [xdrip](https://github.com/NightscoutFoundation/xDrip) and follow instructions on nightscout ([G4 without share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* In xdrip go to Settings > Interapp Compatibility > Broadcast Data Locally and select ON.
* In xdrip go to Settings > Interapp Compatibility > Accept Treatments and select OFF.
* If you want to be able to use AndroidAPS to calibrate then in xdrip go to Settings > Interapp Compatibility > Accept Calibrations and select ON.  You may also want to review the options in Settings > Less Common Settings > Advanced Calibration Settings.
* Select xdrip in ConfigBuilder (setting in AndroidAPS).

### If using G5 or G6 with patched Dexcom app<Br>
* Download the apk from [https://github.com/dexcomapp/dexcomapp](https://github.com/dexcomapp/dexcomapp), and choose the version that fits your needs (mg/dl or mmol/l version, G5 or G6).
* Stop sensor and uninstall the original Dexcom app, if not already done.
* Install downloaded apk
* Start sensor
* Select DexcomG5 App (patched) in ConfigBuilder (setting in AndroidAPS).

### If using G4 with OTG cable ('traditional' Nightscout)…<br>
* If not already set up then download Nightscout Uploader app from the Play Store and follow instructions on [Nightscout](http://www.nightscout.info/wiki/welcome/basic-requirements).
* In AndroidAPS Preferences enter your Nightscout website and API secret.
* Select NSClient in ConfigBuilder (setting in AndroidAPS).

## For users of Libre with Bluetooth cap<br>
To use your Libre as a CGM that is getting new BG values every 5 minutes you first need to buy a NFC to Bluetooth adapter like:

* MiaoMiao-Reader [https://www.miaomiao.cool/](https://www.miaomiao.cool/)
* Blukon Nightrider [https://www.ambrosiasys.com/howit](https://www.ambrosiasys.com/howit)
* BlueReader [https://bluetoolz.de/blueorder/#home](https://bluetoolz.de/blueorder/#home)
* Sony Smartwatch 3 (SWR50) als Auslesetool [https://github.com/pimpimmi/LibreAlarm/wiki/](https://github.com/pimpimmi/LibreAlarm/wiki/)

### If using xdrip...<br>
* If not already set up then download xdrip and follow instructions on [LimiTTEer](https://github.com/JoernL/LimiTTer),  [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki) or [BlueReader](https://unendlichkeit.net/wordpress/?p=680&lang=en)([Hardware](https://bluetoolz.de/wordpress/)).
* In xdrip go to Settings > Interapp Compatibility > Broadcast Data Locally and select ON.
* In xdrip go to Settings > Interapp Compatibility > Accept Treatments and select OFF.
* If you want to be able to use AndroidAPS to calibrate then in xdrip go to Settings > Interapp Compatibility > Accept Calibrations and select ON.  You may also want to review the options in Settings > Less Common Settings > Advanced Calibration Settings.
* Select xdrip in ConfigBuilder (setting in AndroidAPS).
* For G5 native mode in xdrip go to Settings > Cloud upload > REST API > Extra options > Append source info to device and select ON.

### If using Glimp...<br>
* If not already set up then download Glimp and follow instructions on [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
* Select Glimp in ConfigBuilder (setting in AndroidAPS).

## For users of Eversense<br>
The easiest way to use Eversense with AndroidAPS is to install the modified [Eversense app](https://github.com/BernhardRo/Esel/blob/master/apk/mod_com.senseonics.gen12androidapp-release.apk) (and unistall the original one first). 

**Warning: by uninstalling the old app, your local historical data older than one week will be lost!**

To finally get your data to AndroidAPS, you need to install [ESEL](https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk) and enable "Send to AAPS and xDrip" in ESEL and "MM640g" as BG source in the [Configuration Builder](../Configuration/Config-Builder.md) in AndroidAPS. As the BG data from Eversense can be noisy sometimes, it is good to enable "Smooth Data" in ESEL, which is better than enabling "Always use short average delta instead of simple delta" in AAPS.

You can find another instruction for using xDrip with an Eversense [here](https://github.com/BernhardRo/Esel/tree/master/apk).

## For users of MM640g or MM630g<br>
* If not already set up then download [600SeriesAndroidUploaer](http://pazaan.github.io/600SeriesAndroidUploader/) and follow instructions on [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g).
* In 600 Series Uploader go to Settings > Send to xdrip+ and select ON (tick).
* Select MM640g in ConfigBuilder (setting in AndroidAPS).

## For users of PocTech CT-100<br>
* Install PocTech App
* Select PocTech App in ConfigBuilder (setting in AndroidAPS).

## For users of other CGM uploaded to Nightscout<br>
If you have any other CGM set up that sends your data to [Nightscout](http://www.nightscout.info) then<br>
* In AndroidAPS Preferences enter your Nightscout website and API secret.
* Select NSClient in ConfigBuilder (setting in AndroidAPS).
