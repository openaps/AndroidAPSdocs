# Freestyle Libre 1

Чтобы использовать Libre в качестве постоянного мониторинга, который получает новые значения гликемии каждые 5 минут, нужно сначала приобрести адаптер NFC - Bluetooth:

-   MiaoMiao-Reader <https://www.miaomiao.cool/>
-   Blukon Nightrider [https://www.ambrosiasys.com/our-products/blucon](https://www.ambrosiasys.com/our-products/blucon/)
-   Bubble `https://bubbleshop.eu/ <https://bubbleshop.eu/>`_  или для русских пользователей  `https://vk.com/saharmonitor/ <https://vk.com/saharmonitor/>

Additionally it is possible to use a specific watch, the Sony Smartwatch 3 which has an NFC chip which can be enabled and can be used as a NFC collector. However the custom NFC to Bluetooth adapters listed above offer a less complex solution and would be used by the majority of those wanting to use their Libre 1 as a CGM.

-   Sony Smartwatch 3 (SWR50) <https://github.com/pimpimmi/LibreAlarm/wiki/>

As it currently stands, if using Libre 1 as BG source you cannot activate ‘Enable SMB always’ and ‘Enable SMB after carbs’ within the SMB algorithm. The BG values of Libre 1 are not smooth enough to use it safely. See [Smoothing blood glucose data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) for more details.

## При использовании xdrip+

-   If not already set up then download xDrip+ and follow instructions on [LimiTTEer](https://github.com/JoernL/LimiTTer) or [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki).
-   In xDrip+ go to Settings > Interapp Compatibility > Broadcast Data Locally and select ON.
-   In xDrip+ go to Settings > Interapp Compatibility > Accept Treatments and select OFF.
-   If you want to be able to use AAPS to calibrate then in xDrip+ go to Settings > Interapp Compatibility > Accept Calibrations and select ON. You may also want to review the options in Settings > Less Common Settings > Advanced Calibration Settings.
-   В конфигуратоге (настройки AndroidAPS) выберите xdrip.
-   For settings in xDrip+ with screenshots see [xDrip+ settings page](../Configuration/xdrip.md). There is a part for basic xDrip+ settings and for Freestyle Libre xDrip+ settings.
-   If AAPS does not receive BG values when phone is in airplane mode, use 'Identify receiver' as describe on [xDrip+ settings page](../Configuration/xdrip.md).

## При использовании Glimp

-   You will need Glimp version 4.15.57 or newer. Older versions are not supported.
-   If not already set up then download Glimp and follow instructions on [Nightscout](https://nightscout.github.io/uploader/setup/#glimp).
-   Select Glimp in ConfigBuilder (setting in AAPS).
