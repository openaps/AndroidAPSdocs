Freestyle Libre 1
******************

To use your Libre as a CGM that is getting new BG values every 5 minutes you first need to buy a NFC to Bluetooth adapter like:

* MiaoMiao-Reader `https://www.miaomiao.cool/ <https://www.miaomiao.cool/>`_
* Blukon Nightrider `https://www.ambrosiasys.com/howit <https://www.ambrosiasys.com/howit>`_
* BlueReader `https://bluetoolz.de/blueorder/#home <https://bluetoolz.de/blueorder/#home>`_
* Sony Smartwatch 3 (SWR50) als Auslesetool `https://github.com/pimpimmi/LibreAlarm/wiki/ <https://github.com/pimpimmi/LibreAlarm/wiki/>`_

Until now, using Libre 1 as BG source you cannot activate ‘Enable SMB always’ and ‘Enable SMB after carbs’ within SMB algorithm. The BG values of Libre 1 are not smooth enough to use it safely. See `Smoothing blood glucose data <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_ for more details.

Se usa xdrip
===================
* If not already set up then download xdrip and follow instructions on `LimiTTEer <https://github.com/JoernL/LimiTTer>`_,  `Libre Alarm <https://github.com/pimpimmi/LibreAlarm/wiki>`_ or `BlueReader <https://unendlichkeit.net/wordpress/?p=680&lang=en>`_ (`Hardware <https://bluetoolz.de/wordpress/>`_).
* No xdrip ir a configurações > Interapp Compatibility > Broadcast Data Locally and select ON.
* No xdrip ir a configurações> Interapp Compatibility > Accept Treatments e seleccionar OFF.
* Se você quiser utilizar AndoidAPS para calibrar no xdrip seleccionar Settings > Interapp Compatibility > Accept Calibrations e seleccione ON.  Também poderá querer rever as opções em Settings > Less Common Settings > Advanced Calibration Settings.
* Seleccione xdrip no ConfigBuilder (configuração em AndroidAPS).
* For settings in xDrip+ with screenshots see `xDrip+ settings page <../Configuration/xdrip.html>`__. There is a part for basic xDrip+ settings and for Freestyle Libre xDrip+ settings.
* If AAPS does not receive BG values when phone is in airplane mode, use `Identify receiver` as describe on `xDrip+ settings page <../Configuration/xdrip.html>`_.

Se usa Glimp
==================
* If not already set up then download Glimp and follow instructions on `Nightscout <http://www.nightscout.info/wiki/welcome/nightscout-for-libre>`_.
* Seleccione Glimp no ConfigBuilder (configuração em AndroidAPS).
