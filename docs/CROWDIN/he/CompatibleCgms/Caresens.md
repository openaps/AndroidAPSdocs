# CareSens

There are different ways to use CareSens data with **AAPS**:

- xDrip
- Juggluco

**Note:** You do not need the Sens365 follower app to connect to AAPS.

## 1. xDrip

1. Install and set up the official CareSens app.
2. In CareSens app, go to settings -> Manage Data and Connections -> turn on xDrip switch. אם רוצים, אפשר לכבות את חיבורי הנתונים ל-CareLevo, DIA:CONN, CloudLoop וכו' תחת "others".

![CareSens App Data Connections](../images/eversenseapp-dataconnections.png)


2. התקינו את xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip).
3. ב-xDrip, עברו אל settings -> hardware data source, ובחרו `Companion App` כמקור הנתונים.
4. ב-**AAPS**, בחרו xDrip ב-[**הגדרות תצורה → מקור ערכי הסוכר**](#Config-Builder-bg-source).


## 2. Juggluco

1. Install the Juggluco app.
2. In Juggluco, open the left menu and select `Photo`
3. Scan the QR code on the package of the sensor.
4. In left menu -> settings -> exchange data make sure xDrip broadcast is turned on.
5. ב-**AAPS**, בחרו xDrip ב-[**הגדרות תצורה → מקור ערכי הסוכר**](#Config-Builder-bg-source).
