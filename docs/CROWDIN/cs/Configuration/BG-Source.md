# Zdroj glykémie

## Pro uživatele Dexcom  


### Pokud používáte G5 nebo G6 s aplikací xdrip+  


* Není-li xDrip již nastaven, pak stáhněte [xdrip](https://github.com/NightscoutFoundation/xDrip) a postupujte podle pokynů na Nightscoutu ([G4 bez share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 s share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* V Xdripu vyberte nastavení -> Inter-app settings - > Lokální odesílání dat a vyberte zapnout.
* V Xdripu vyberte nastavení -> Inter-app settings - > Accept Treatments a vyberte vypnout.
* Pokud chcete aby AndroidAPS bylo schopné kalibrovat, tak v xdrip vyberte nastavení -> Inter-app settings -> Accept Calibrations a vyberte zapnout. Můžete také zkontrolovat v Xdrip nastavení položku -> méně časté nastavení -> Advanced Calibration.
* Vyberte xdrip v ConfigBuilder (nastavení v AndroidAPS).

### Pokud používáte G5 nebo G6 s upravenou aplikací Dexcom  


* Stáhněte si apk z <https://github.com/dexcomapp/dexcomapp>, kde si vyberete verzi dle potřeby (mg/dl nebo mmol/l, G5 nebo G6).
* Zastavte senzor a odinstalujte původní aplikaci Dexcom, pokud jste tak ještě neučinili.
* Nainstalujte stažený apk
* Spusťte senzor
* Vyberte aplikaci DexcomG5 (upravenou) v Konfiguraci.

### Pokud používáte G4 pomocí OTG kabelu ('tradiční' Nightscout)  


* Pokud jste ještě nenastavili, tak stáhněte Nightscout Uploader aplikaci z obchodu Play a postupujte podle pokynů na [Nightscout](http://www.nightscout.info/wiki/welcome/basic-requirements).
* V nastavení AndroidAPS zadejte Nightscout adresu a API secret.
* Vyberte NSClient v Konfiguraci AndroidAPS.

## For users of Libre with Bluetooth cap  


To use your Libre as a CGM that is getting new BG values every 5 minutes you first need to buy a NFC to Bluetooth adapter like:

* MiaoMiao-Reader <https://www.miaomiao.cool/>
* Blukon Nightrider <https://www.ambrosiasys.com/howit>
* BlueReader <https://bluetoolz.de/blueorder/#home>
* Sony Smartwatch 3 (SWR50) als Auslesetool <https://github.com/pimpimmi/LibreAlarm/wiki/>

### If using xdrip...  


* Pokud jste jej dosud nenastavili, stáhněte si aplikaci xDrip a postupujte podle pokynů na [LimiTTEer](https://github.com/JoernL/LimiTTer), [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki) nebo [BlueReader](https://unendlichkeit.net/wordpress/?p=680&lang=en) ([Hardware](https://bluetoolz.de/wordpress/)).
* V xDripu vyberte nastavení -> Komunikace mezi aplikacemi - > Lokální odesílání dat a vyberte zapnout.
* V xDripu vyberte nastavení -> Komunikace mezi aplikacemi - > Přijímat ošetření a vyberte vypnout.
* Pokud chcete, aby bylo možné přes AndroidAPS kalibrovat senzor, tak v xDripu vyberte nastavení -> Komunikace mezi aplikacemi -> Accept Calibrations a vyberte zapnout. Můžete také zkontrolovat v xDripu nastavení v částí Nastavení -> Méně častá nastavení -> Rozšířené kalibrace.
* Na kartě Konfigurace (nastavení v AndroidAPS) vyberte xdrip.
* Pro nativní režim G5 v xDripu vyberte Nastavení > Nahrávání do cloudu > Nahrávání před API (REST) > Extra options > Append source info to device a vyberte zapnout.

### If using Glimp...  


* If not already set up then download Glimp and follow instructions on [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
* Na kartě Konfigurace (nastavení v AndroidAPS) vyberte Glimp.

## For users of Eversense  


The easiest way to use Eversense with AndroidAPS is to install the modified [Eversense app](https://github.com/BernhardRo/Esel/blob/master/apk/mod_com.senseonics.gen12androidapp-release.apk) (and unistall the original one first).

**Warning: by uninstalling the old app, your local historical data older than one week will be lost!**

To finally get your data to AndroidAPS, you need to install [ESEL](https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk) and enable "Send to AAPS and xDrip" in ESEL and "MM640g" as BG source in the [Configuration Builder](../Configuration/Config-Builder.md) in AndroidAPS. As the BG data from Eversense can be noisy sometimes, it is good to enable "Smooth Data" in ESEL, which is better than enabling "Always use short average delta instead of simple delta" in AAPS.

You can find another instruction for using xDrip with an Eversense [here](https://github.com/BernhardRo/Esel/tree/master/apk).

## Pro uživatele MM640g nebo MM630g  


* If not already set up then download [600SeriesAndroidUploaer](http://pazaan.github.io/600SeriesAndroidUploader/) and follow instructions on [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g).
* V aplikaci 600 Series Uploader přejděte na Nastavení > Odesílat do xdrip+ a zvolte ON (zaškrtněte).
* Na kartě Konfigurace (nastavení AndroidAPS) vyberte MM640g.

## Pro uživatele PocTech CT-100  


* Nainstalujte aplikaci PocTech
* Na kartě Konfigurace (nastavení v AndroidAPS) vyberte aplikaci PocTech.

## Pro uživatele ostatních CGM nahrávaných do Nightscoutu  


Pokud máte nějaké jiné CGM, které odesílá data do [Nightscoutu](http://www.nightscout.info), pak  


* V nastavení AndroidAPS zadejte Nightscout adresu a API secret.
* Vyberte NSClient v Konfiguraci AndroidAPS.

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