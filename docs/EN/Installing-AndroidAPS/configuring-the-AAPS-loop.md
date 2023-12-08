# configuring the AAPS loop

When you first start AAPS you are guided through the setup wizward to setup the basic configuration.

It's not mandatory to get all things configured in the first run as
- you can always go back to the setup wizard or
- change only relevant part of the configuration in a direct approach the relevant part.

Though please relax if your are setting up AAPS the first time and expect that you might ask the community for help to answer some of your questions.

Even writers of the documentation themselves had to setup AAPS and decided to joint the documentation team to bring their experiences back to improve the documenation for other new starters.

## setup wizard

Please follow the documentation for the setup wizard [here](./setup-wizard).

(Smoothing-Blood-Glucose-Data-in-xDrip-smoothing-blood-glucose-data)=
## Smoothing blood glucose data

If BG data is jumpy/noisy, AAPS may dose insulin incorrectly resulting in high or low BG. For this reason it’s important to disable the loop until the problem is resolved. Depending on your CGM such issues may be due to the CGM’s configuration or sensor problems/site issues. You may need to replace your CGM sensor to resolve this.

Some CGM systems have internal algorithms to detect the noise level in the readings and AAPS can use this information to avoid giving SMBs if the BG data is too unreliable. However, some CGMs do not transmit this data and for these BG sources 'Enable SMB always' and 'Enable SMB after carbs' are disabled for safety reasons.

### Dexcom sensors

#### Build Your Own Dexcom App
When using [BYODA](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) your BG data is smooth and consistent. Furthermore you can take advantage of Dexcom back-smoothing. There are no restrictions in using SMBs, because the noise-level data is shared with AAPS.

#### xDrip+ with Dexcom G6 or Dexcom ONE
Noise-level data and smooth BG readings are only shared with AAPS if you use xDrip+ [native mode](https://navid200.github.io/xDrip/docs/Native-Algorithm). Using native mode, there are no restrictions in using SMBs.

#### Dexcom G6 or Dexcom ONE with xDrip+ Companion Mode
The noise-level data is not shared with AAPS using this method. Therefore 'Enable SMB always' and 'Enable SMB after carbs' are disabled.

### Freestyle Libre sensors

#### xDrip+ with FreeStyle Libre
None of the FreeStyle Libre systems (FSL1, FSL2, or FSL3) broadcast any information about the level of noise detected in the readings, and therefore 'Enable SMB always' and 'Enable SMB after carbs' are disabled for all setups using the FreeStyle Libre.

In addition, many people have reported the FreeStyle Libre often produces noisy data. In xDrip+ there are a few options to help with this:

**Smooth Sensor Noise.** In xDrip+ Settings > xDrip+ Display Settings ensure that Smooth Sensor Noise is turned on. This attempts to apply smoothing to noisy data.

**Smooth Sensor Noise (Ultrasensitive).** If you are still seeing noisy data in xDrip+ you can apply more aggressive smoothing using the Smooth Sensor Noise (Ultrasensitive) setting. This will attempt to apply smoothing even on very low levels of detected noise. To do this, first enable [engineering mode](Enabling-Engineering-Mode-in-xDrip.md) in xDrip+. Then navigate to Settings > xDrip+ Display Settings and turn on Smooth Sensor Noise (Ultrasensitive).
