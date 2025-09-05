# Para los usuarios de Eversense

There are three different methods to access the readings from Eversense:

- ESEL companion mode
- ESEL patched mode
- xDrip+ companion app

## ESEL

Get and install the [ESEL app](https://github.com/BernhardRo/Esel/tree/master/apk), following these [instructions](https://github.com/BernhardRo/Esel?tab=readme-ov-file#esel).

- Enable "Send to AAPS and xDrip"
- **Disable** "Send to Nightscout"
- As the BG data from Eversense can be noisy, it is recommended to enable "Smooth Data" in ESEL.

![ESEL Broadcast](../images/ESEL.png)

### Companion Mode

Reads the data from the Eversense app notifications (works with the standard Eversense App, available since ESEL version 3.0.1).

1. Use the official Eversense App from the Google Play Store
   - Optional, but required for backfilling: Login to your Eversense account
   - In Sync, enable Auto synchronization
2. Configuration of ESEL:
   - Disable the setting "Get data from patched Eversense App"
   - For backfilling: Enable "Fill missing data from eversensedms.com"
   - Provide as Email address and password your Eversense login data
3. Set "MM640g" as BG source in in [ConfigBuilder, BG Source](#Config-Builder-bg-source).

### Patched Eversense App

 Requires a patched version of the Eversense App (works completely offline, including backfilling).

1. Uninstall the Eversense App (Warning: your local historical data (older than 1 week) will be lost!)

2. Install the [patched Eversense app](https://cr4ck3d3v3r53n53.club) and use it as described by the vendor

   - Start the Eversense App, login, connect to your transmitter and use it just like the normal app.

3. Configuration of ESEL:

   - Enable the setting "Get data from patched Eversense App"



![ESEL Broadcast](../images/ESELpatch.png)

​       If you run ESEL with a fresh installation of Eversense for the first time, it can take up to 15min until your first values appear in xDrip!

4. Set "MM640g" as BG source in in [ConfigBuilder, BG Source](#Config-Builder-bg-source).

## xDrip+

xDrip+ can read notifications from the vendor app, like ESEL does. No backfilling available.

- Download and install xDrip+: [xDrip](https://github.com/NightscoutFoundation/xDrip)
- As data source in xDrip+ “Companion App” must be selected.
- Select xDrip+ in in [ConfigBuilder, BG Source](#Config-Builder-bg-source).
- Adjust the xDrip+ settings according to the explanations on the xDrip+ settings page [xDrip+ settings](../CompatibleCgms/xDrip.md).
- Enable [Exponential Smoothing](../CompatibleCgms/SmoothingBloodGlucoseData.md) in AAPS.

```{warning}
BG values reading frequency is not always 5 minutes and duplicates can occur.
```