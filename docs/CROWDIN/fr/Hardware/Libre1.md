# Freestyle Libre 1

To use your Libre as a CGM that is getting new BG values every 5 minutes you first need to buy a NFC to Bluetooth adapter like:

-   MiaoMiao Reader (version 1 or 2) <https://www.miaomiao.cool/>
-   Blucon Nightrider <https://www.ambrosiasys.com/our-products/blucon/>
-   Bubble <https://bubbleshop.eu/> or for Russian users <https://vk.com/saharmonitor/>

Additionally it is possible to use a specific watch, the Sony Smartwatch 3 which has an NFC chip which can be enabled and can be used as a NFC collector. However the custom NFC to Bluetooth adapters listed above offer a less complex solution and would be used by the majority of those wanting to use their Libre 1 as a CGM.

-   Sony Smartwatch 3 (SWR50) <https://github.com/pimpimmi/LibreAlarm/wiki/>

As it currently stands, if using Libre 1 as BG source you cannot activate ‘Enable SMB always’ and ‘Enable SMB after carbs’ within the SMB algorithm. The BG values of Libre 1 are not smooth enough to use it safely. See [Smoothing blood glucose data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) for more details.

## Si vous utilisez xDrip+

-   If not already set up then download xDrip+ and follow instructions on [LimiTTEer](https://github.com/JoernL/LimiTTer) or [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki).
-   Dans xDrip allez dans Paramètres > Inter-app settings > Diffusion Locale et sélectionnez ON.
-   Dans xDrip allez dans Paramètres > Inter-app settings > Accept Treatments et sélectionnez OFF.
-   Si vous voulez pouvoir utiliser AndroidAPS pour calibrer, alors dans xDrip, allez dans Paramètres > Inter-app settings > Accept Calibrations et sélectionnez ON. Vous pouvez également consulter les options dans Paramètres > Paramètres moins courants > Paramètres Avancés de Calibration.
-   Sélectionnez xDrip dans la Configuration (dans AndroidAPS).
-   For settings in xDrip+ with screenshots see [xDrip+ settings page](../Configuration/xdrip.md). There is a part for basic xDrip+ settings and for Freestyle Libre xDrip+ settings.
-   If AAPS does not receive BG values when phone is in airplane mode, use 'Identify receiver' as describe on [xDrip+ settings page](../Configuration/xdrip.md).

## Si vous utilisez Glimp

-   Vous aurez besoin de Glimp version 4.15.57 ou plus récente. Older versions are not supported.
-   If not already set up then download Glimp and follow instructions on [Nightscout](https://nightscout.github.io/uploader/setup/#glimp).
-   Sélectionnez Glimp dans la Configuration (Menu hamburger dans AndroidAPS).
