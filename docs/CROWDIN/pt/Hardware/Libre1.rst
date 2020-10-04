Freestyle Libre 1
**************************************************

To use your Libre as a CGM that is getting new BG values every 5 minutes you first need to buy a NFC to Bluetooth adapter like:

* MiaoMiao Reader (version 1 or 2) `https://www.miaomiao.cool/ <https://www.miaomiao.cool/>`_
* Blucon Nightrider `https://www.ambrosiasys.com/our-products/blucon/ <https://www.ambrosiasys.com/our-products/blucon/>`_
* Bubble `https://bubbleshop.eu/ <https://bubbleshop.eu/>`_

Additionally it is possible to use a specific watch, the Sony Smartwatch 3 which has an NFC chip which can be enabled and can be used as a NFC collector. However the custom NFC to Bluetooth adapters listed above offer a less complex solution and would be used by the majority of those wanting to use their Libre 1 as a CGM.
* Sony Smartwatch 3 (SWR50) `https://github.com/pimpimmi/LibreAlarm/wiki/ <https://github.com/pimpimmi/LibreAlarm/wiki/>`_

As it currently stands, if using Libre 1 as BG source you cannot activate ‘Enable SMB always’ and ‘Enable SMB after carbs’ within the SMB algorithm. The BG values of Libre 1 are not smooth enough to use it safely. See `Smoothing blood glucose data <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_ for more details.

If using xDrip+
==================================================
* If not already set up then download xDrip+ and follow instructions on `LimiTTEer <https://github.com/JoernL/LimiTTer>`_ or  `Libre Alarm <https://github.com/pimpimmi/LibreAlarm/wiki>`_.
* In xDrip+ go to Settings > Interapp Compatibility > Broadcast Data Locally and select ON.
* In xDrip+ go to Settings > Interapp Compatibility > Accept Treatments and select OFF.
* If you want to be able to use AndroidAPS to calibrate then in xDrip+ go to Settings > Interapp Compatibility > Accept Calibrations and select ON.  Também poderá querer rever as opções em Settings > Less Common Settings > Advanced Calibration Settings.
* Select xDrip+ in ConfigBuilder (setting in AndroidAPS).
* For settings in xDrip+ with screenshots see `xDrip+ settings page <../Configuration/xdrip.html>`__. There is a part for basic xDrip+ settings and for Freestyle Libre xDrip+ settings.
* If AAPS does not receive BG values when phone is in airplane mode, use `Identify receiver` as describe on `xDrip+ settings page <../Configuration/xdrip.html>`_.

Se usa Glimp
==================================================
* You will need Glimp version 4.15.57 or newer. Older versions are not supported.
* If not already set up then download Glimp and follow instructions on `Nightscout <http://www.nightscout.info/wiki/welcome/nightscout-for-libre>`_.
* Seleccione Glimp no ConfigBuilder (configuração em AndroidAPS).
