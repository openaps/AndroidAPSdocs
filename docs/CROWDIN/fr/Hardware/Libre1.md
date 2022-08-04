# Freestyle Libre 1

Pour utiliser votre Libre comme CGM et obtenir des valeurs BG toutes les 5 minutes, vous devez d'abord acheter un adaptateur NFC vers Bluetooth comme :

-   MiaoMiao-Reader (version 1 ou 2) <https://www.miaomiao.cool/>
-   Blukon Nightrider <https://www.ambrosiasys.com/our-products/blucon/>
-   Bubble  <https://bubbleshop.eu/> ou pour les utilisateurs Russes <https://vk.com/saharmonitor/>

En complément, il est possible d'utiliser une montre spécifique, la Sony Smartwatch 3 qui dispose d'une puce NFC qui peut être activée et peut être utilisée comme lecteur NFC. Toutefois, les transmetteur NFC vers Bluetooth dédiés sités ci-dessus offrent une solution moins complexe et seront utilisés par la majorité de ceux qui souhaitent utiliser leur Libre 1 en tant que MGC.

-   Sony Smartwatch 3 (SWR50) <https://github.com/pimpimmi/LibreAlarm/wiki/>

Jusqu'à présent, en utilisant le Freestyle Libre 1 comme source Gly, vous ne pouvez pas activer les fonctions 'Activer SMB toujours' et 'Activer SMB après les glucides' dans l'algorithme SMB. Les valeurs de Gly du Freestyle Libre 1 ne sont pas assez lisses pour l'utiliser en toute sécurité. Voir [Lissage des données de glycémie](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) pour plus de détails.

## Si vous utilisez xDrip+

-   Si vous ne l'avez pas déjà configuré, téléchargez xDrip+ et suivez les instructions sur [LimiTTEer](https://github.com/JoernL/LimiTTer) ou [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki).
-   Dans xDrip allez dans Paramètres > Inter-app settings > Diffusion Locale et sélectionnez ON.
-   Dans xDrip allez dans Paramètres > Inter-app settings > Accept Treatments et sélectionnez OFF.
-   Si vous voulez pouvoir utiliser AndroidAPS pour calibrer, alors dans xDrip, allez dans Paramètres > Inter-app settings > Accept Calibrations et sélectionnez ON. Vous pouvez également consulter les options dans Paramètres > Paramètres moins courants > Paramètres Avancés de Calibration.
-   Sélectionnez xDrip dans la Configuration (dans AndroidAPS).
-   Pour les paramètres dans xDrip+ voir les copies d'écrans dans [la page de configuration xDrip+](../Configuration/xdrip.md). Il y a une partie pour les paramètres de base xDrip+ et une pour les paramètres spécifiques au Freestyle Libre.
-   Si AAPS ne reçoit pas de valeurs de glycémie lorsque le téléphone est en mode avion utilisez 'Identifier le récepteur' comme décrit dans [la page de configuration xDrip+](../Configuration/xdrip.md).

## Si vous utilisez Glimp

-   Vous aurez besoin de Glimp version 4.15.57 ou plus récente. Les versions plus anciennes ne sont pas prises en charge.
-   Si vous ne l'avez pas déjà configuré, téléchargez Glimp et suivez les instructions sur [Nightscout](https://nightscout.github.io/uploader/setup/#glimp).
-   Sélectionnez Glimp dans la Configuration (Menu hamburger dans AndroidAPS).
