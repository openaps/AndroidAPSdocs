# Dexcom G7

```{admonition} Only available in dev branch
:class: note

This feature is only available in the in dev branch and not in master.

Please be aware of the warnings and follow the instructions in [building a dev version](../Installing-AndroidAPS/Dev_branch.md)).

```

##   Fundamental in advance

In spring 2022, the Dexcom G7 received its CE certificate and was sold at the end of October '22.

Noteworthy is the fact that the G7 system, compared to the G6, does not smooth the values, neither in the app, nor in the reader. More details about this [here](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app). Consequently, the values have to be smoothed to be able to use them sensibly in AAPS. 

There are **two** possibilities (as of 02/'23).

![DexcomG7.md](../images/DexcomG7.png)

## 1.  Patched Dexcom G7 App

### Install a new patched (!) G7 app and start the sensor

A patched Dexcom G7 app gives acess to the Dexcom G7 data. This is not the BYODA app as this app can not receive G7 data at the moment.

Uninstall the original Dexcom app if you used it before.

Download and install the patched.apk [here](https://github.com/authorgambel/g7/blob/main/dexcom.g7.compatibility.errorcodes.aaps.v1.3.3.3527.apk).

Enter sensor code and serial number of the transmitter in the patched app.

Follow the general recommendations for CGM hygiene and sensor placement found [here](../Hardware/GeneralCGMRecommendation.md).

After the warm-up phase, the values are displayed as usual in the G7 app.

### build a new signed APK from the dev branch

To be able to receive the values from the G7 App in AAPS and to smooth the received values, a change in AndroidAPS is necessary.

Therefore build a new signed APK from the official dev branch and install it on your mobile.

For the configuration in AndroidAPS
- Select 'BYODA' in the configuration generator - even if it is not the BYODA app!
- If AAPS does not receive any values, switch to another BG source and then back to 'BYODA' to invoke the query for approving data exchange between AAPS and BYODA.

The smoothing of glucose values can be activated and deactivated via Settings > Overview settings at 'Smoothing of incoming glucose values'.

Smoothing **MUST** be enabled for meaningful use of the G7 values.

## 2. Xdrip+ (companion mode) 

-   Download and install Xdrip+: [xdrip](https://github.com/NightscoutFoundation/xDrip) 
- As data source in Xdrip "Companion App" must be selected and under Advanced Settings > Bluetooth Settings > "Companion Bluetooth" must be enabled.
- In AndroidAPS select  > Configuration > BG source > xDrip+.
Adjust the xDrip+ settings according to the explanations on the xDrip+ settings page  [xDrip+ settings](../Configuration/xdrip.md) 
