Freestyle Libre 1
**************************************************

Pour utiliser votre Freestyle Libre comme MGC et obtenir des valeurs de Gly toutes les 5 minutes, vous devez d'abord acheter un adaptateur NFC vers Bluetooth comme :

* MiaoMiao Reader (version 1 or 2) `https://www.miaomiao.cool/ <https://www.miaomiao.cool/>`_
* Blucon Nightrider `https://www.ambrosiasys.com/our-products/blucon/ <https://www.ambrosiasys.com/our-products/blucon/>`_
* Bubble `https://bubbleshop.eu/ <https://bubbleshop.eu/>`_

Additionally it is possible to use a specific watch, the Sony Smartwatch 3 which has an NFC chip which can be enabled and can be used as a NFC collector. However the custom NFC to Bluetooth adapters listed above offer a less complex solution and would be used by the majority of those wanting to use their Libre 1 as a CGM.
* Sony Smartwatch 3 (SWR50) `https://github.com/pimpimmi/LibreAlarm/wiki/ <https://github.com/pimpimmi/LibreAlarm/wiki/>`_

As it currently stands, if using Libre 1 as BG source you cannot activate ‘Enable SMB always’ and ‘Enable SMB after carbs’ within the SMB algorithm. Les valeurs de Gly du Freestyle Libre 1 ne sont pas assez lisses pour l'utiliser en toute sécurité. Voir `Lissage des données de glycémie <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_ pour plus de détails.

Si vous utilisez xDrip+
==================================================
* Si vous ne l'avez pas déjà configuré, téléchargez xDrip+ et suivez les instructions sur `LimiTTEer <https://github.com/JoernL/LimiTTer>`_,  `Libre Alarm <https://github.com/pimpimmi/LibreAlarm/wiki>`_ ou `BlueReader <https://unendlichkeit.net/wordpress/?p=680&lang=en>`_ (`Hardware <https://bluetoolz.de/wordpress/>`_).
* Dans xDrip allez dans Paramètres > Inter-app settings > Diffusion Locale et sélectionnez ON.
* Dans xDrip allez dans Paramètres > Inter-app settings > Accept Treatments et sélectionnez OFF.
* Si vous voulez pouvoir utiliser AndroidAPS pour calibrer, alors dans xDrip, allez dans Paramètres > Inter-app settings > Accept Calibrations et sélectionnez ON.  Vous pouvez également consulter les options dans Paramètres > Paramètres moins courants > Paramètres Avancés de Calibration.
* Sélectionnez xDrip dans le Générateur de configuration (dans AndroidAPS).
* Pour paramétrer xDrip+ voir la page `Paramètres xDrip+ <../Configuration/xdrip.html>`_ avec les copies d'écrans. Il y a une partie pour les paramètres de base xDrip+ et une pour les paramètres spécifiques au Freestyle Libre.
* Si AAPS ne reçoit pas de Glycémie lorsque le téléphone est en mode avion, utilisez `Identify receiver` comme c'est décrit dans la page `Paramètres xDrip+ <../Configuration/xdrip.html>`_.

Si vous utilisez Glimp
==================================================
* Vous aurez besoin de Glimp version 4.15.57 ou plus récente. Les versions plus anciennes ne sont pas prises en charge.
* Si vous ne l'avez pas déjà configuré, téléchargez Glimp et suivez les instructions sur `Nightscout <http://www.nightscout.info/wiki/welcome/nightscout-for-libre>Nightscout`_.
* Sélectionnez Glimp dans ConfigBuilder (Menu Paramètres dans AndroidAPS).
