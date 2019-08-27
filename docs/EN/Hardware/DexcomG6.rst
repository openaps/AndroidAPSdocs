Dexcom G6
************
Basics first
===============

* Follow `general CGM hygiene recommendations <../Configuration/BG-Source#cgm-hygiene>`_
*For G6 transmitters manufactured after fall/end of 2018 please make sure to use one of the `latest nightly built xDrip+ versions <https://github.com/NightscoutFoundation/xDrip/releases>`_. Those transmitters have a new firmware and latest stable version of xDrip+ (2019/01/10) cannot deal with it.


Setting sensor
==============

When setting sensor, it is recommended not to press the inserter too firmly in order to avoid bleeding. The sensor thread should not come into contact with blood.

After setting the sensor, the transmitter can be clicked into the sensor holder. Caution! First click in the square side and then press down the round side.


General hints for looping with G6
================================

See `Dexcom G6 page <../Configuration/Dexcom.md>`_ for details on setting Dexcom G6 sensor and solutions for common difficulties with Dexcom G6.

What’s clear is that using the G6 is perhaps a little more complex than it as first suggests. To use it safely, there are a few points to be aware of: 

* If you are using the native data with the calibration code in xDrip or Spike, the safest thing to do is not allow preemptive restarts of the sensor.
* If you must use preemptive restarts, then make sure you insert at a time of day where you can observe the change and calibrate if necessary. 
* If you are restarting sensors, either do it without the factory calibration for safest results on days 11 and 12, or ensure you are ready to calibrate and keep an eye on variation.
* Pre-soaking of the G6 with factory calibration is likely to give variation in results. If you do pre-soak, then to get best results, you will probably need to calibrate the sensor.
* If you aren’t being observant about the changes that may be taking place, it may be better to revert to non-factory-calibrated mode and use the system like a G5.

To learn more about the details and reasons for these recommendations read the `complete article <http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/>`_ published by Tim Street at `www.diabettech.com <http://www.diabettech.com>`_.

If using G6 with xdrip+
===============================

* If not already set up then download `xdrip <https://github.com/NightscoutFoundation/xDrip>`_ and follow instructions on nightscout (`G4 without share <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge>`_, `G4 share <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless>`_, `G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>`_).
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

Troubleshooting
================

Connection problems
--------------------

Bluetooth connection may be disturbed by other nearby Bluetooth devices such as blood glucose meters, headsets, tablets or kitchen devices such as microwave ovens or ceramic hobs. In this case xdrip does not display any BG values. When bluetooth connection is reestablished the data is backfilled.

Sensor Errors
----------------
If recurring sensor errors occur try selecting a different body site to set your sensor. The sensor thread should not come into contact with blood. 

Often a "Sensor Error" can be corrected by immediate drinking and massage around the sensor!

Jumpy values
---------------
You might try to change settings for noise blocking in xdrip (Settings - Inter-App Settings - Noise Blocking) i.e. "Block Very High noise and worse".  See also `Smoothing BG data <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md>`_.

New transmitter with running sensor
--------------------------------------
If you happen to change transmitter during a running sensor session you might try to remove the transmitter without damaging the sensor mount. A video can be found at `https://youtu.be/AAhBVsc6NZo <https://youtu.be/AAhBVsc6NZo>`_.


