# Dexcom G7


## Commençons par des fondamentaux

Au printemps 2022, le Dexcom G7 a reçu son certificat CE et a été vendu fin octobre 2022.

Il est à noter que le système G7, par rapport au G6, ne lisse pas les valeurs, ni dans l'application, ni dans le lecteur. Plus de détails disponibles [ici](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

![G7 english](../images/6fe30b84-227a-4bae-a9a5-527cee341dbf.png)

:::{admonition} [Smoothing method](../Usage/Smoothing-Blood-Glucose-Data)
:class: warning **Exponential Smoothing** **MUST** be enabled for meaningful use of the G7 values.  
:::

## 1.  Patched Dexcom G7 App (DiAKEM)

**Note: AAPS 3.2.0.0 or higher is required!**

### Installez la nouvelle application G7 patchée et démarrez le capteur

A patched Dexcom G7 app (DiAKEM) gives access to the Dexcom G7 data. This is not the BYODA app as this app can not receive G7 data at the moment.

Uninstall the original Dexcom app if you used it before (A running sensor session can be continued - note the sensor code before removal of the app!)

Download and install the patched.apk [here](https://github.com/authorgambel/g7/releases).

Enter sensor code in the patched app.

Follow the general recommendations for CGM hygiene and sensor placement found [here](../Hardware/GeneralCGMRecommendation.md).

After the warm-up phase, the values are displayed as usual in the G7 app.

### Configuration in AAPS

For the configuration in AAPS
- Select 'BYODA' in in [ConfigBuilder, BG Source](../Configuration/Config-Builder.md#bg-source) - even if it is not the BYODA app!

- If AAPS does not receive any values, switch to another BG source and then back to 'BYODA' to invoke the query for approving data exchange between AAPS and BYODA.

## 2. xDrip+ (direct connection to G7)

- Follow the instructions here: [Xdrip+ G7](https://navid200.github.io/xDrip/docs/Dexcom/G7.html)
- Select  xDrip+ in [ConfigBuilder, BG Source](../Configuration/Config-Builder.md#bg-source).

- Adjust the xDrip+ settings according to the explanations on the xDrip+ settings page  [xDrip+ settings](../Configuration/xdrip.md)

## 3. xDrip+ (companion mode)

-   Download and install xDrip+: [xDrip](https://github.com/NightscoutFoundation/xDrip)
- As data source in xDrip+ "Companion App" must be selected and under Advanced Settings > Bluetooth Settings > "Companion Bluetooth" must be enabled.
-   Select  xDrip+ in in [ConfigBuilder, BG Source](../Configuration/Config-Builder.md#bg-source).

-   Adjust the xDrip+ settings according to the explanations on the xDrip+ settings page  [xDrip+ settings](../Configuration/xdrip.md) 
