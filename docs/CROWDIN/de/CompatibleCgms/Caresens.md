# CareSens

Es gibt verschiedene Möglichkeiten, die CareSens Daten mit **AAPS** zu nutzen:

- xDrip+
- Juggluco

**Note:** You do not need the Sens365 follower app to connect to AAPS.

## 1. xDrip+

1. Installiere und richte die offizielle CareSens-App ein.
2. Gehe in der CareSens-App zu den Einstellungen -> Verwalten von Daten und Verbindungen -> und aktiviere den xDrip+-Schalter. Du kannst, wenn Du willst, die Datenverbindungen zu CareLevo, DIA:CONN, CloudLoop, etc. unter „Andere“ deaktivieren.

![CareSens App Data Connections](../images/eversenseapp-dataconnections.png)


2. Installiere xDrip+: [xDrip](https://github.com/NightscoutFoundation/xDrip).
3. In xDrip+, go to settings -> hardware data source, select `Companion App` as data source.
4. In **AAPS**, select xDrip+ in [ConfigBuilder, BG Source](#Config-Builder-bg-source).


## 2. Juggluco

1. Install the Juggluco app.
2. In Juggluco, open the left menu and select `Photo`
3. Scan the QR code on the package of the sensor.
4. In left menu -> settings -> exchange data make sure xDrip broadcast is turned on.
5. In **AAPS**, select xDrip+ in [ConfigBuilder, BG Source](#Config-Builder-bg-source).
