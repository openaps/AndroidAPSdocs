Freestyle Libre 1
******************

To use your Libre as a CGM that is getting new BG values every 5 minutes you first need to buy a NFC to Bluetooth adapter like:

* MiaoMiao-Reader `https://www.miaomiao.cool/ <https://www.miaomiao.cool/>`_
* Blukon Nightrider `https://www.ambrosiasys.com/howit <https://www.ambrosiasys.com/howit>`_
* BlueReader `https://bluetoolz.de/blueorder/#home <https://bluetoolz.de/blueorder/#home>`_
* Sony Smartwatch 3 (SWR50) als Auslesetool `https://github.com/pimpimmi/LibreAlarm/wiki/ <https://github.com/pimpimmi/LibreAlarm/wiki/>`_

If using xdrip
===================
* If not already set up then download xdrip and follow instructions on `LimiTTEer <https://github.com/JoernL/LimiTTer>`_,  `Libre Alarm <https://github.com/pimpimmi/LibreAlarm/wiki>`_ or `BlueReader <https://unendlichkeit.net/wordpress/?p=680&lang=en>`_ (`Hardware <https://bluetoolz.de/wordpress/>`_).
* In xdrip go to Settings > Interapp Compatibility > Broadcast Data Locally and select ON.
* In xdrip go to Settings > Interapp Compatibility > Accept Treatments and select OFF.
* If you want to be able to use AndroidAPS to calibrate then in xdrip go to Settings > Interapp Compatibility > Accept Calibrations and select ON.  You may also want to review the options in Settings > Less Common Settings > Advanced Calibration Settings.
* Select xdrip in ConfigBuilder (setting in AndroidAPS).
* For settings in xDrip+ with screenshots see 'xDrip+ settings page <../Configuration/xdrip#xdrip-freestyle-libre>`_
* If AAPS does not receive BG values when phone is in airplane mode use `Identify receiver` as describe on `xDrip+ settings page <../Configuration/xdrip.md>`_.

If using Glimp
==================
* If not already set up then download Glimp and follow instructions on `Nightscout <http://www.nightscout.info/wiki/welcome/nightscout-for-libre>`_.
* Select Glimp in ConfigBuilder (setting in AndroidAPS).
