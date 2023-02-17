(Smoothing-Blood-Glucose-Data-in-xDrip-smoothing-blood-glucose-data)=

# Kan şekeri verilerini yumuşatma

KŞ verileri atlamalı/gürültülü ise, AAPS insülini yanlış dozlayarak yüksek veya düşük KŞ'ne sebep olabilir. Bu nedenle, sorun çözülene kadar döngüyü devre dışı bırakmak önemlidir. CGM'nize bağlı olarak, bu tür sorunlar CGM'in yapılandırmasından veya sensör/set sorunlarından kaynaklanabilir. Bunu çözmek için CGM sensörünüzü değiştirmeniz gerekebilir.

Some CGM systems have internal algorithms to detect the noise level in the readings and AndroidAPS can use this information to avoid giving SMBs if the BG data is too unreliable. However, some CGMs do not transmit this data and for these BG sources 'Enable SMB always' and 'Enable SMB after carbs' are disabled for safety reasons.

## Dexcom sensörleri

### Kendi Dexcom Uygulamanızı Oluşturun (BYODA)

When using [BYODA](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) your BG data is smooth and consistent. Furthermore you can take advantage of Dexcom back-smoothing. There are no restrictions in using SMBs, because the noise-level data is shared with AAPS.

### xDrip+ with Dexcom G6 or Dexcom ONE

Noise-level data and smooth BG readings are only shared with AAPS if you use xDrip+ [native mode](https://navid200.github.io/xDrip/docs/Native-Algorithm). Using native mode, there are no restrictions in using SMBs.

### Dexcom G6 or Dexcom ONE with xDrip+ Companion Mode

The noise-level data is not shared with AAPS using this method. Therefore 'Enable SMB always' and 'Enable SMB after carbs' are disabled.

## Freestyle Libre sensörleri

### xDrip+ with FreeStyle Libre

None of the FreeStyle Libre systems (FSL1, FSL2, or FSL3) broadcast any information about the level of noise detected in the readings, and therefore 'Enable SMB always' and 'Enable SMB after carbs' are disabled for all setups using the FreeStyle Libre.

In addition, many people have reported the FreeStyle Libre often produces noisy data. In xDrip+ there are a few options to help with this:

**Smooth Sensor Noise.** In xDrip+ Settings > xDrip+ Display Settings ensure that Smooth Sensor Noise is turned on. This attempts to apply smoothing to noisy data.

**Smooth Sensor Noise (Ultrasensitive).** If you are still seeing noisy data in xDrip+ you can apply more aggressive smoothing using the Smooth Sensor Noise (Ultrasensitive) setting. This will attempt to apply smoothing even on very low levels of detected noise. To do this, first enable [engineering mode](Enabling-Engineering-Mode-in-xDrip.md) in xDrip+. Then navigate to Settings > xDrip+ Display Settings and turn on Smooth Sensor Noise (Ultrasensitive).