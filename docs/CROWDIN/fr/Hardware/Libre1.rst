Freestyle Libre 1
**************************************************

Pour utiliser votre Freestyle Libre comme MGC et obtenir des valeurs de Gly toutes les 5 minutes, vous devez d'abord acheter un adaptateur NFC vers Bluetooth comme :

* transmetteur MiaoMiao 1 ou MiaoMiao 2 `https://www.miaomiao.cool/ <https://www.miaomiao.cool/>`_
* Blukon Nightrider `https://www.ambrosiasys.com/howit <https://www.ambrosiasys.com/howit>`_
* BlueReader `https://bluetoolz.de/blueorder/#home <https://bluetoolz.de/blueorder/#home>`_
* Sony Smartwatch 3 (SWR50) comme outil de lecture <https://github.com/pimpimmi/LibreAlarm/wiki/>https://github.com/pimpimmi/LibreAlarm/wiki`_

Jusqu'à présent, en utilisant le Freestyle Libre 1 comme source Gly, vous ne pouvez pas activer les fonctions 'Activer SMB toujours' et 'Activer SMB après les glucides' dans l'algorithme SMB. Les valeurs de Gly du Freestyle Libre 1 ne sont pas assez lisses pour l'utiliser en toute sécurité. Voir `Lissage des données de glycémie <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_ pour plus de détails.

If using xDrip+
==================================================
* If not already set up then download xDrip+ and follow instructions on `LimiTTEer <https://github.com/JoernL/LimiTTer>`_,  `Libre Alarm <https://github.com/pimpimmi/LibreAlarm/wiki>`_ or `BlueReader <https://unendlichkeit.net/wordpress/?p=680&lang=en>`_ (`Hardware <https://bluetoolz.de/wordpress/>`_).
* In xDrip+ go to Settings > Interapp Compatibility > Broadcast Data Locally and select ON.
* In xDrip+ go to Settings > Interapp Compatibility > Accept Treatments and select OFF.
* If you want to be able to use AndroidAPS to calibrate then in xDrip+ go to Settings > Interapp Compatibility > Accept Calibrations and select ON.  Vous pouvez également consulter les options dans Paramètres > Paramètres moins courants > Paramètres Avancés de Calibration.
* Select xDrip+ in ConfigBuilder (setting in AndroidAPS).
* Pour paramétrer xDrip+ voir la page `Paramètres xDrip+ <../Configuration/xdrip.html>`_ avec les copies d'écrans. Il y a une partie pour les paramètres de base xDrip+ et une pour les paramètres spécifiques au Freestyle Libre.
* Si AAPS ne reçoit pas de Glycémie lorsque le téléphone est en mode avion, utilisez `Identify receiver` comme c'est décrit dans la page `Paramètres xDrip+ <../Configuration/xdrip.html>`_.

Si vous utilisez Glimp
==================================================
* You will need Glimp version 4.15.57 or newer. Older versions are not supported.
* Si vous ne l'avez pas déjà configuré, téléchargez Glimp et suivez les instructions sur `Nightscout <http://www.nightscout.info/wiki/welcome/nightscout-for-libre>Nightscout`_.
* Sélectionnez Glimp dans ConfigBuilder (Menu Paramètres dans AndroidAPS).
