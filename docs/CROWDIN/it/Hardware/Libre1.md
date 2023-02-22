# Freestyle Libre 1

To use your Libre as a CGM that is getting new BG values every 5 minutes you first need to buy a NFC to Bluetooth adapter like:

- MiaoMiao-Reader [https://www.miaomiao.cool/](https://www.miaomiao.cool/)
- Blukon Nightrider [https://www.ambrosiasys.com/howit](https://www.ambrosiasys.com/howit)
- BlueReader [https://bluetoolz.de/blueorder/#home](https://bluetoolz.de/blueorder/#home)
- Sony Smartwatch 3 (SWR50) als Auslesetool [https://github.com/pimpimmi/LibreAlarm/wiki/](https://github.com/pimpimmi/LibreAlarm/wiki/)

Until now, using Libre 1 as BG source you cannot activate ‘Enable SMB always’ and ‘Enable SMB after carbs’ within SMB algorithm. The BG values of Libre 1 are not smooth enough to use it safely. See [Smoothing blood glucose data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) for more details.

## If using xDrip+

- If not already set up then download xDrip+ and follow instructions on [LimiTTEer](https://github.com/JoernL/LimiTTer),  [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki) or [BlueReader](https://unendlichkeit.net/wordpress/?p=680&lang=en) ([Hardware](https://bluetoolz.de/wordpress/)).
- In xDrip+ go to Settings > Interapp Compatibility > Broadcast Data Locally and select ON.
- In xDrip+ go to Settings > Interapp Compatibility > Accept Treatments and select OFF.
- If you want to be able to use AndroidAPS to calibrate then in xDrip+ go to Settings > Interapp Compatibility > Accept Calibrations and select ON.  You may also want to review the options in Settings > Less Common Settings > Advanced Calibration Settings.
- Select xDrip+ in ConfigBuilder (setting in AndroidAPS).
- For settings in xDrip+ with screenshots see [xDrip+ settings page](../Configuration/xdrip.md). There is a part for basic xDrip+ settings and for Freestyle Libre xDrip+ settings.
- If AAPS does not receive BG values when phone is in airplane mode, use 'Identify receiver' as describe on [xDrip+ settings page](../Configuration/xdrip.md).

## If using Glimp

- You will need Glimp version 4.15.57 or newer. Older versions are not supported.
- If not already set up then download Glimp and follow instructions on [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
- Select Glimp in ConfigBuilder (setting in AndroidAPS).
