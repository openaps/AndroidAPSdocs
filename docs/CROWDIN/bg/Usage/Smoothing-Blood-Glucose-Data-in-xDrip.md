AAPS works best when the blood glucose data it receives is smooth and consistent. When using xDrip+ as your data source there are a couple of things you can do to help reduce noise in the data.

Users of Abbot Freestyle Libre sensors collecting their blood glucose data via devices such as LimiTTers may find these settings help provide better results with AAPS.

**Smooth Sensor Noise.** In xDrip+ Settings > xDrip+ Display Settings ensure that Smooth Sensor Noise is turned on. This attempts to apply smoothing to noisy data.

**Smooth Sensor Noise (Ultrasensitive).** If you are still seeing noisy data in xDrip+ you can apply more aggressive smoothing using the Smooth Sensor Noise (Ultrasensitive) setting. This will attempt to apply smoothing even on very low levels of detected noise. To do this, first [enable engineering mode in xDrip+](https://github.com/MilosKozak/AndroidAPS/wiki/Enabling-Engineering-Mode-in-xDrip). Then navigate to Settings > xDrip+ Display Settings and turn on Smooth Sensor Noise (Ultrasensitive).