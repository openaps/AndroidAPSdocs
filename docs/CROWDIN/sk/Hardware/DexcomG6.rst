Dexcom G6
**************************************************
Basics first
==================================================

* Follow general CGM hygiene and setting sensor recommendation `here <../Hardware/GeneralCGMRecommendation.html>`__.
* For G6 transmitters manufactured after fall/end of 2018 please make sure to use one of the `latest nightly built xDrip+ versions <https://github.com/NightscoutFoundation/xDrip/releases>`_. Those transmitters have a new firmware and latest stable version of xDrip+ (2019/01/10) cannot deal with it.

General hints for looping with G6
==================================================

What’s clear is that using the G6 is perhaps a little more complex than it as first suggests. To use it safely, there are a few points to be aware of: 

* If you are using the native data with the calibration code in xDrip+ or Spike, the safest thing to do is not allow preemptive restarts of the sensor.
* If you must use preemptive restarts, then make sure you insert at a time of day where you can observe the change and calibrate if necessary. 
* If you are restarting sensors, either do it without the factory calibration for safest results on days 11 and 12, or ensure you are ready to calibrate and keep an eye on variation.
* Pre-soaking of the G6 with factory calibration is likely to give variation in results. If you do pre-soak, then to get best results, you will probably need to calibrate the sensor.
* If you aren’t being observant about the changes that may be taking place, it may be better to revert to non-factory-calibrated mode and use the system like a G5.

To learn more about the details and reasons for these recommendations read the `complete article <http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/>`_ published by Tim Street at `www.diabettech.com <http://www.diabettech.com>`_.

If using G6 with xDrip+
==================================================
* The Dexcom G6 transmitter can simultaneously be connected to the Dexcom receiver (or alternatively the t:slim pump) and one app on your phone.
* When using xDrip+ as receiver uninstall Dexcom app first. **You cannot connect xDrip+ and Dexcom app with the transmitter at the same time!**
* If you need Clarity and want to profit from xDrip+ alarms use the `patched Dexcom app <../Hardware/DexcomG6.html#if-using-g6-with-patched-dexcom-app>`_ with local broadcast to xDrip+.
* If not already set up then download `xdrip <https://github.com/NightscoutFoundation/xDrip>`_ and follow instructions on nightscout (`G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>`_).
* Select xDrip+ in ConfigBuilder (setting in AndroidAPS).
* Adjust settings in xDrip+ according to `xDrip+ settings page <../Configuration/xdrip.html>`_
* If AAPS does not receive BG values when phone is in airplane mode use 'Identify receiver' as describe on `xDrip+ settings page <../Configuration/xdrip.html>`_.

If using G6 with patched Dexcom app
==================================================
* Download the apk from `https://github.com/dexcomapp/dexcomapp <https://github.com/dexcomapp/dexcomapp>`_, and choose the version that fits your needs (mg/dl or mmol/l version, G6).

  * Folder 2.4 for users of the current version, folder 2.3 is only for the outdated AndroidAPS 2.3.
  * Open https://play.google.com/store/search?q=dexcom%20g6 on your computer. 
  * Click the link to the Dexcom G6 app on the search results page that is displayed.
  * Region will be visible in URL.

   .. image:: ../images/DexcomG6regionURL.PNG
     :alt: Region in Dexcom G6 URL

* Uninstall the original Dexcom app.
* Install downloaded apk
* Enter sensor code and transmitter serial no. in patched app.
* After short time patched app should pick-up transmitter signal. (If not you will have to stop sensor and start new one.)
* Select Dexcom App (patched) in ConfigBuilder (setting in AndroidAPS).
* If you want to use xDrip+ alarms via local broadcast: in xDrip+ hamburger menu > settings > hardware data source > 640G /EverSense.
* There is no local broadcast from patched Dexcom app directly to xDrip+. Broadcast has to go through AAPS as described above.

If using G6 with Build Your Own Dexcom App
==================================================
* As of December 2020 `Build Your Own Dexcom App <https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0>`_ (BYODA)also supports local broadcast to AAPS and/or xDrip+ (not for G5 sensors!)
* This app lets you use your Dexcom G6 with any Android smartphone.
* Uninstall the original Dexcom app or patched Dexcom app if you used one of those previously.
* Install downloaded apk
* Enter sensor code and transmitter serial no. in patched app.
* In phone settings go to apps > Dexcom G6 > permissions > additional permissions and press 'Access Dexcom app'.
* After short time patched app should pick-up transmitter signal. (If not you will have to stop sensor and start new one.)

Settings for AndroidAPS
--------------------------------------------------
* Select 'Dexcom App (patched)' in config builder.
* If you don't recieve any values select any other data source, then re-select 'Dexcom App (patched)' to trigger the demand for permissions to establish the connection between AAPS and BYODA-broadcast.

Settings for xDrip+
--------------------------------------------------
* Select '640G/Eversense' as data source.
* Command 'start sensor' must be performed in xDrip+ in order to receive values. This will not affect your current sensor controlled by Build Your Own Dexcom App.
   
Troubleshooting G6
==================================================
Dexcom G6 specific troubleshooting
--------------------------------------------------
* Transmitters with serial no. starting with 80 or 81 need at least last stable xDrip+ version from May 2019 or a newer nightly build.
* Transmitters with serial no. starting with 8G need at least nightly build from July 25th, 2019 or newer.
* xDrip+ and Dexcom app cannot be connected with the transmitter at the same time.
* Wait at least 15 min. between stopping and starting a sensor.
* Do not rewind back time of insertion. Answer question "Did you insert it today?" always with "Yes, today".
* Do not enable "restart sensors" while setting a new sensor
* Do not start new sensor before the following information is shown in Classic Status Page -> G5/G6 status -> PhoneServiceState:

  * Transmitter serial starting with 80 or 81: "Got data hh:mm" (i.e. "Got data 19:04")
  * Transmitter serial starting with 8G or 8H: "Got glucose hh:mm" (i.e. "Got glucose 19:04") or "Got no raw hh:mm" (i.e. "Got now raw 19:04")

.. image:: ../images/xDrip_Dexcom_PhoneServiceState.png
  :alt: xDrip+ PhoneServiceState

General troubleshoothing
--------------------------------------------------
General Troubleshoothing for CGMs can be found `here <./GeneralCGMRecommendation.html#troubleshooting>`__.

New transmitter with running sensor
--------------------------------------------------
If you happen to change transmitter during a running sensor session you might try to remove the transmitter without damaging the sensor mount. A video can be found at `https://youtu.be/AAhBVsc6NZo <https://youtu.be/AAhBVsc6NZo>`_.
