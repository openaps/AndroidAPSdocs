**General CGM recommendations**

**CGM hygiene**

Whichever CGM system you are using, if you are going to use blood based calibration, then there are some very clear rules you should apply, whether or not you are using DIY CGM software or the official apps.

* Make sure hands and kit are clean.
* Try to calibrate when you have a series of dots with a flat arrow (15-30 minutes is usually enough)
* Avoid calibrating when glucose levels are moving up or down. 
* Do “enough” calibrations – on official apps, you will be prompted for once or twice per day checks. On DIY systems you may not be, and should be careful about continuing without calibrations.
* If it all possible, calibrate with some of your readings in a lower range (4-5mmol/l or 72-90mg/dl) and some at a slightly higher level (7-9mmol/l or 126-160mg/dl) as this provides a better range for the point/slope calibration.

# 혈당 소스

## Smoothing blood glucose

수신된 혈당데이터가 부드럽고 평활할 때 AndroidAPS가 가장 잘 작동합니다. '항상 SMB를 사용합니다'나 '탄수화물 이후 SMB를 사용합니다'와 같은 기능은 잘 필터링된 혈당데이터로만 사용할 수 있습니다.

### DexcomG5 앱(패치버전)

DexcomG5 앱(패치버전)을 사용할 경우, 혈당데이터는 부드럽고 평활하게 수신됩니다. SMB를 사용함에 있어서 제약은 없습니다.

### xDrip+와 덱스콤 G5 사용시

xDrip G5 'OB1 collector in native mode' 사용시에만 충분히 평활화된 데이터가 전송됩니다.

### xDrip+와 프리스타일 리브레 사용시

xDrip+를 프리스타일 리브레의 데이터 소스로 사용한다면 혈당 데이터가 충분히 평활화되지 않기때문에 SMB의 '항상 SMB를 사용합니다'나 '탄수화물 이후 SMB를 사용합니다' 기능을 활성화 하면 안됩니다. 이를 제외하고는, 데이터의 노이즈를 줄이기 위해 취할 수 있는 몇가지 방법이 있습니다.

**Smooth Sensor Noise.** xDrip+에서 세팅 > xDrip+ 디스플레이 세팅에 가서 'Smooth Sensor Noise'를 활성화 하세요. 이것은 노이즈가 있는 데이터를 평활하게 해줍니다.

**Smooth Sensor Noise (Ultrasensitive).** xDrip+에서 여전히 노이즈가 있는 데이터가 보여진다면, Smooth Sensor Noise (Ultrasensitive) setting에서 보다 적극적으로 평활하게 할 수 있습니다. 이것은 매우 낮은 노이즈 레벨을 감지하더라도 평활화 시킵니다. To do this, first [enable engineering mode in xDrip+](../Enabling-Engineering-Mode-in-xDrip.md). 이 후, 세팅 > xDrip+ 디스플레이 세팅에서 Smooth Sensor Noise (Ultrasensitive) 를 활성화 시키세요.

## For users of Dexcom

### Dexcom G6: General hints for looping

See [Dexcom G6 page](../Configuration/Dexcom.md) for details on setting Dexcom G6 sensor and solutions for common difficulties with Dexcom G6.

What’s clear is that using the G6 is perhaps a little more complex than it as first suggests. To use it safely, there are a few points to be aware of:

* If you are using the native data with the calibration code in xDrip or Spike, the safest thing to do is not allow preemptive restarts of the sensor.
* If you must use preemptive restarts, then make sure you insert at a time of day where you can observe the change and calibrate if necessary. 
* If you are restarting sensors, either do it without the factory calibration for safest results on days 11 and 12, or ensure you are ready to calibrate and keep an eye on variation.
* Pre-soaking of the G6 with factory calibration is likely to give variation in results. If you do pre-soak, then to get best results, you will probably need to calibrate the sensor.
* If you aren’t being observant about the changes that may be taking place, it may be better to revert to non-factory-calibrated mode and use the system like a G5.

To learn more about the details and reasons for these recommendations read the [complete article](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) published by Tim Street at [www.diabettech.com](http://www.diabettech.com).

### If using G6 with xdrip+

* If not already set up then download [xdrip](https://github.com/NightscoutFoundation/xDrip) and follow instructions on nightscout ([G4 without share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* Select xdrip in ConfigBuilder (setting in AndroidAPS).
* Adjust settings in xDrip+ according to [xDrip+ settings page](../Configuration/xdrip.md)
* If AAPS does not receive BG values when phone is in airplane mode use `Identify receiver` as describe on [xDrip+ settings page](../Configuration/xdrip.md).

### If using G5 with xdrip+

* If not already set up then download [xdrip](https://github.com/NightscoutFoundation/xDrip) and follow instructions on nightscout ([G4 without share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* In xdrip go to Settings > Interapp Compatibility > Broadcast Data Locally and select ON.
* In xdrip go to Settings > Interapp Compatibility > Accept Treatments and select OFF.
* If you want to be able to use AndroidAPS to calibrate then in xdrip go to Settings > Interapp Compatibility > Accept Calibrations and select ON. You may also want to review the options in Settings > Less Common Settings > Advanced Calibration Settings.
* Select xdrip in ConfigBuilder (setting in AndroidAPS).
* If AAPS does not receive BG values when phone is in airplane mode use `Identify receiver` as describe on [xDrip+ settings page](../Configuration/xdrip.md).

### If using G5 or G6 with patched Dexcom app

* Download the apk from <https://github.com/dexcomapp/dexcomapp>, and choose the version that fits your needs (mg/dl or mmol/l version, G5 or G6).
* Stop sensor and uninstall the original Dexcom app, if not already done.
* Install downloaded apk
* Start sensor
* Select DexcomG5 App (patched) in ConfigBuilder (setting in AndroidAPS).

### If using G4 with OTG cable ('traditional' Nightscout)…  


* If not already set up then download Nightscout Uploader app from the Play Store and follow instructions on [Nightscout](http://www.nightscout.info/wiki/welcome/basic-requirements).
* In AndroidAPS Preferences enter your Nightscout website and API secret.
* Select NSClient in ConfigBuilder (setting in AndroidAPS).

## For users of Libre with Bluetooth cap  


To use your Libre as a CGM that is getting new BG values every 5 minutes you first need to buy a NFC to Bluetooth adapter like:

* MiaoMiao-Reader <https://www.miaomiao.cool/>
* Blukon Nightrider <https://www.ambrosiasys.com/howit>
* BlueReader <https://bluetoolz.de/blueorder/#home>
* Sony Smartwatch 3 (SWR50) als Auslesetool <https://github.com/pimpimmi/LibreAlarm/wiki/>

### If using xdrip...  


* If not already set up then download xdrip and follow instructions on [LimiTTEer](https://github.com/JoernL/LimiTTer), [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki) or [BlueReader](https://unendlichkeit.net/wordpress/?p=680&lang=en)([Hardware](https://bluetoolz.de/wordpress/)).
* In xdrip go to Settings > Interapp Compatibility > Broadcast Data Locally and select ON.
* In xdrip go to Settings > Interapp Compatibility > Accept Treatments and select OFF.
* If you want to be able to use AndroidAPS to calibrate then in xdrip go to Settings > Interapp Compatibility > Accept Calibrations and select ON. You may also want to review the options in Settings > Less Common Settings > Advanced Calibration Settings.
* Select xdrip in ConfigBuilder (setting in AndroidAPS).
* For settings in xDrip+ with screenshots see [xDrip+ settings page](../Configuration/xdrip.md)
* If AAPS does not receive BG values when phone is in airplane mode use `Identify receiver` as describe on [xDrip+ settings page](../Configuration/xdrip.md).

### If using Glimp...  


* If not already set up then download Glimp and follow instructions on [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
* Select Glimp in ConfigBuilder (setting in AndroidAPS).

## For users of Eversense  


The easiest way to use Eversense with AndroidAPS is to install the modified [Eversense app](https://github.com/BernhardRo/Esel/blob/master/apk/eversense_cgm_v1.0.409_com.senseonics.gen12androidapp-patched.apk) (and unistall the original one first).

**Warning: by uninstalling the old app, your local historical data older than one week will be lost!**

To finally get your data to AndroidAPS, you need to install [ESEL](https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk) and enable "Send to AAPS and xDrip" in ESEL and "MM640g" as BG source in the [Configuration Builder](../Configuration/Config-Builder.md) in AndroidAPS. As the BG data from Eversense can be noisy sometimes, it is good to enable "Smooth Data" in ESEL, which is better than enabling "Always use short average delta instead of simple delta" in AAPS.

You can find another instruction for using xDrip with an Eversense [here](https://github.com/BernhardRo/Esel/tree/master/apk).

## For users of MM640g or MM630g  


* If not already set up then download [600SeriesAndroidUploaer](http://pazaan.github.io/600SeriesAndroidUploader/) and follow instructions on [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g).
* In 600 Series Uploader go to Settings > Send to xdrip+ and select ON (tick).
* Select MM640g in ConfigBuilder (setting in AndroidAPS).

## For users of PocTech CT-100  


* Install PocTech App
* Select PocTech App in ConfigBuilder (setting in AndroidAPS).

## For users of other CGM uploaded to Nightscout  


If you have any other CGM set up that sends your data to [Nightscout](http://www.nightscout.info) then  


* In AndroidAPS Preferences enter your Nightscout website and API secret.
* Select NSClient in ConfigBuilder (setting in AndroidAPS).