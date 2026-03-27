# CareSens

There are different ways to use CareSens data with **AAPS**:

- xDrip+
- Juggluco

**Note:** You do not need the Sens365 follower app to connect to AAPS.

## 1. xDrip+

1. Install and set up the official CareSens app.
2. In CareSens app, go to settings -> Manage Data and Connections -> turn on xDrip switch. If prefered, turn off the data connections to CareLevo, DIA:CONN, CloudLoop, etc. in "others" .

![CareSens App Data Connections](../images/eversenseapp-dataconnections.png)


2. Install xDrip+: [xDrip](https://github.com/NightscoutFoundation/xDrip).
3. In xDrip+, go to settings -> hardware data source, select `Companion App` as data source.
4. In **AAPS**, select xDrip+ in [ConfigBuilder, BG Source](#Config-Builder-bg-source).


## 2. Juggluco

1. Install the Juggluco app.
2. In Juggluco, open the left menu and select `Photo`
3. Scan the QR code on the package of the sensor.
4. In left menu -> settings -> exchange data make sure xDrip broadcast is turned on.
5. In **AAPS**, select xDrip+ in [ConfigBuilder, BG Source](#Config-Builder-bg-source).
