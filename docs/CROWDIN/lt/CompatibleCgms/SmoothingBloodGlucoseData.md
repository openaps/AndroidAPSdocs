- - -
orphan: true
- - -

# Gliukozės kraujyje duomenų išlyginimas

If **BG** data is jumpy/noisy, **AAPS** may dose insulin incorrectly resulting in highs or lows. If you observe errors in your CGM data it is important to disable the loop until the problem is resolved. Depending on your CGM, such issues may be due to the CGM configuration in **AAPS** (as explained further below); or a CGM sensor site issue (which may require replacing the CGM sensor).

Some CGM systems have internal algorithms to detect the noise level in the readings, and **AAPS** can use this information to avoid giving SMBs if the BG data is too unreliable. However, some CGMs do not transmit this data and for these BG sources 'Enable SMB always' and 'Enable SMB after carbs' are disabled for safety reasons.

## Smoothing data within AAPS

As of **AAPS** version 3.2, **AAPS** offers the option to smooth the data within **AAPS** rather than within the CGM app. There are three options available in the [Config Builder](../SettingUpAaps/ConfigBuilder.md).

![Smoothing](../images/ConfBuild_Smoothing.png)

### Exponential smoothing

This is the recommended option to start with, as it is most aggressive in resolving noise and rewrites the most recent value.

### Average smoothing

This option works similar to back smoothing that was previously implemented on certain CGM platforms. It is more reactive to recent changes in BG value and therefore more prone to responding incorrectly to noisy CGM data.

### No Smoothing

Use this option only if your CGM data is being properly smoothed by your collector app before being transmitted to **AAPS**.

## Suggestions to use smoothing

|                           | Exponential |  Average  |    None     |
| ------------------------- |:-----------:|:---------:|:-----------:|
| G5 and G6                 |  If noisy   |           | Recommended |
| G7                        |  If noisy   | If stable |             |
| Libre 1 or Juggluco       | Recommended |           |             |
| Libre 2 and 3 from xDrip+ |             |           | Recommended |

### Dexcom sensors

#### Build Your Own Dexcom App
When using [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app), your BG data is smooth and consistent. Furthermore, you can take advantage of Dexcom back-smoothing. There are no restrictions in using SMBs, because the noise-level data is shared with AAPS.

(smoothing-xdrip-dexcom-g6)=
#### xDrip+ with Dexcom G6 or Dexcom ONE
Noise-level data and smooth BG readings are only shared with AAPS if you use xDrip+ [native mode](https://navid200.github.io/xDrip/docs/Native-Algorithm). Using native mode, there are no restrictions in using SMBs.

#### Dexcom G6 or Dexcom ONE with xDrip+ Companion Mode
The noise-level data is not shared with AAPS using this method. Therefore, 'Enable SMB always' and 'Enable SMB after carbs' are disabled.

### Freestyle Libre sensors

#### xDrip+ with FreeStyle Libre
None of the FreeStyle Libre systems (FSL1, FSL2, or FSL3) broadcast any information about the level of noise detected in the readings, and therefore 'Enable SMB always' and 'Enable SMB after carbs' are disabled for all setups using the FreeStyle Libre. In addition, many people have reported the FreeStyle Libre often produces noisy data.
