# Dexcom G6

## Basics first

* Follow [general CGM hygiene recommendations](../Configuration/BG-Source#cgm-hygiene)
* [Special recommendations for Dexcom G6 and DIY systems](../Configuration/BG-Source#dexcom-g6-diy-systems) *For G6 transmitters manufactured after fall/end of 2018 please make sure to use one of the [latest nightly built xDrip+ versions](https://github.com/NightscoutFoundation/xDrip/releases). Those transmitters have a new firmware and latest stable version of xDrip+ (2019/01/10) cannot deal with it.

## Setting sensor

When setting sensor, it is recommended not to press the inserter too firmly in order to avoid bleeding. The sensor thread should not come into contact with blood.

After setting the sensor, the transmitter can be clicked into the sensor holder. Caution! First click in the square side and then press down the round side.

## Troubleshooting

### Connection problems

Bluetooth connection may be disturbed by other nearby Bluetooth devices such as blood glucose meters, headsets, tablets or kitchen devices such as microwave ovens or ceramic hobs. In this case xdrip does not display any BG values. When bluetooth connection is reestablished the data is backfilled.

### Sensor Errors

If recurring sensor errors occur try selecting a different body site to set your sensor. The sensor thread should not come into contact with blood.

Often a "Sensor Error" can be corrected by immediate drinking and massage around the sensor!

### Jumpy values

You might try to change settings for noise blocking in xdrip (Settings - Inter-App Settings - Noise Blocking) i.e. "Block Very High noise and worse". See also [Smoothing BG data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### New transmitter with running sensor

If you happen to change transmitter during a running sensor session you might try to remove the transmitter without damaging the sensor mount. A video can be found at <https://youtu.be/AAhBVsc6NZo>.