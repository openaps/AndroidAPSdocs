Dexcom G6
************
Algemeen
===============

* Follow general CGM hygiene and setting sensor recommendation `here <../Hardware/GeneralCGMRecommendation>`_.
* For G6 transmitters manufactured after fall/end of 2018 please make sure to use one of the `latest nightly built xDrip+ versions <https://github.com/NightscoutFoundation/xDrip/releases>`_. Deze zenders hebben een nieuwe firmware en de nieuwste stabiele versie van xDrip+ (2019/01/10) werkt daar niet mee.

General hints for looping with G6
================================

Het gebruik van de is G6 misschien wat complexer dan het op het eerste gezicht lijkt. Om de G6 veilig te gebruiken, moet je rekening houden met het volgende: 

* If you are using the native data with the calibration code in xDrip or Spike, the safest thing to do is not allow preemptive restarts of the sensor.
* If you must use preemptive restarts, then make sure you insert at a time of day where you can observe the change and calibrate if necessary. 
* If you are restarting sensors, either do it without the factory calibration for safest results on days 11 and 12, or ensure you are ready to calibrate and keep an eye on variation.
* Pre-soaking of the G6 with factory calibration is likely to give variation in results. Wanneer je Pre-soakt is het waarschijnlijk het beste om de sensor te kalibreren.
* If you aren’t being observant about the changes that may be taking place, it may be better to revert to non-factory-calibrated mode and use the system like a G5.

To learn more about the details and reasons for these recommendations read the `complete article <http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/>`_ published by Tim Street at `www.diabettech.com <http://www.diabettech.com>`_.

If using G6 with xdrip+
===============================

* If not already set up then download `xdrip <https://github.com/NightscoutFoundation/xDrip>`_ and follow instructions on nightscout (`G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>`_).
* Select xdrip in ConfigBuilder (setting in AndroidAPS).
* Adjust settings in xDrip+ according to `xDrip+ settings page <../Configuration/xdrip.md>`_
* If AAPS does not receive BG values when phone is in airplane mode use `Identify receiver` as describe on `xDrip+ settings page <../Configuration/xdrip.md>`_.

If using G6 with patched Dexcom app
=========================================================
* Download the apk from `https://github.com/dexcomapp/dexcomapp <https://github.com/dexcomapp/dexcomapp>`_, and choose the version that fits your needs (mg/dl or mmol/l version, G6).
* Stop sensor and uninstall the original Dexcom app, if not already done.
* Install downloaded apk
* Start sensor
* Select DexcomG5 App (patched) in ConfigBuilder (setting in AndroidAPS).

Troubleshooting G6
====================

General Troubleshoothing for CGMs can be found `here <./GeneralCGMRecommendation#Troubleshooting>`_.

Nieuwe zender met lopende sensor
--------------------------------------
Als je toevallig de zender wilt veranderen tijdens een lopende sensor sessie, dan kun je proberen de zender te verwijderen terwijl je de sensor gewoon laat zitten. A video can be found at `https://youtu.be/AAhBVsc6NZo <https://youtu.be/AAhBVsc6NZo>`_.


