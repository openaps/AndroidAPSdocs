Freestyle Libre 1
**************************************************

Pour utiliser votre Freestyle Libre comme MGC et obtenir des valeurs de Gly toutes les 5 minutes, vous devez d'abord acheter un adaptateur NFC vers Bluetooth comme :

* Transmetteur MiaoMiao (version 1 or 2) `https://www.miaomiao.cool/ <https://www.miaomiao.cool/>`_
* Transmetteur Blucon `https://www.ambrosiasys.com/our-products/blucon/ <https://www.ambrosiasys.com/our-products/blucon/>`_
* Bubble `https://bubbleshop.eu/ <https://bubbleshop.eu/>`_

En complément, il est possible d'utiliser une montre spécifique, la Sony Smartwatch 3 qui dispose d'une puce NFC qui peut être activée et peut être utilisée comme lecteur NFC. Toutefois, les transmetteur NFC vers Bluetooth dédiés sités ci-dessus offrent une solution moins complexe et seront utilisés par la majorité de ceux qui souhaitent utiliser leur Libre 1 en tant que MGC.
* Sony Smartwatch 3 (SWR50) `https://github.com/pimpimmi/LibreAlarm/wiki/ <https://github.com/pimpimmi/LibreAlarm/wiki/>`_

Jusqu'à présent, en utilisant le Freestyle Libre 1 comme source Gly, vous ne pouvez pas activer les fonctions 'Activer SMB toujours' et 'Activer SMB après les glucides' dans l'algorithme SMB. Les valeurs de Gly du Freestyle Libre 1 ne sont pas assez lisses pour l'utiliser en toute sécurité. Voir `Lissage des données de glycémie <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_ pour plus de détails.

Si vous utilisez xDrip+
==================================================
* If not already set up then download xDrip+ and follow instructions on `LimiTTEer <https://github.com/JoernL/LimiTTer>`_ or  `Libre Alarm <https://github.com/pimpimmi/LibreAlarm/wiki>`_.
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
