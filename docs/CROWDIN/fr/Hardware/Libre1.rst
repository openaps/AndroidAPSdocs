Freestyle Libre 1
**************************************************

Pour utiliser votre Freestyle Libre comme MGC et obtenir des valeurs de Gly toutes les 5 minutes, vous devez d'abord acheter un adaptateur NFC vers Bluetooth comme :

* transmetteur MiaoMiao 1 ou MiaoMiao 2 `https://www.miaomiao.cool/ <https://www.miaomiao.cool/>`_
* Blukon Nightrider `https://www.ambrosiasys.com/howit <https://www.ambrosiasys.com/howit>`_
* BlueReader `https://bluetoolz.de/blueorder/#home <https://bluetoolz.de/blueorder/#home>`_
* Sony Smartwatch 3 (SWR50) comme outil de lecture <https://github.com/pimpimmi/LibreAlarm/wiki/>https://github.com/pimpimmi/LibreAlarm/wiki`_

Jusqu'à présent, en utilisant le Freestyle Libre 1 comme source Gly, vous ne pouvez pas activer les fonctions 'Activer SMB toujours' et 'Activer SMB après les glucides' dans l'algorithme SMB. Les valeurs de Gly du Freestyle Libre 1 ne sont pas assez lisses pour l'utiliser en toute sécurité. See `Smoothing blood glucose data <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_ for more details.

Si vous utilisez xDrip
==================================================
* Si vous ne l'avez pas déjà configuré, téléchargez xDrip+ et suivez les instructions sur  `LimiTTEer <https://github.com/JoernL/LimiTTer>`_,  `Libre Alarm <https://github.com/pimpimmi/LibreAlarm/wiki>`_ ou `BlueReader <https://unendlichkeit.net/wordpress/?p=680&lang=en>`_ (`Hardware <https://bluetoolz.de/wordpress/>`_).
* In xdrip go to Settings > Interapp Compatibility > Broadcast Data Locally and select ON.
* In xdrip go to Settings > Interapp Compatibility > Accept Treatments and select OFF.
* If you want to be able to use AndroidAPS to calibrate then in xdrip go to Settings > Interapp Compatibility > Accept Calibrations and select ON.  You may also want to review the options in Settings > Less Common Settings > Advanced Calibration Settings.
* Select xdrip in ConfigBuilder (setting in AndroidAPS).
* For settings in xDrip+ with screenshots see `xDrip+ settings page <../Configuration/xdrip.html>`__. There is a part for basic xDrip+ settings and for Freestyle Libre xDrip+ settings.
* If AAPS does not receive BG values when phone is in airplane mode, use `Identify receiver` as describe on `xDrip+ settings page <../Configuration/xdrip.html>`_.

Si vous utilisez Glimp
==================================================
* If not already set up then download Glimp and follow instructions on `Nightscout <http://www.nightscout.info/wiki/welcome/nightscout-for-libre>`_.
* Sélectionnez Glimp dans ConfigBuilder (Menu Paramètres dans AndroidAPS).
