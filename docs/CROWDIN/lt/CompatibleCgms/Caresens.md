# CareSens

There are different ways to use CareSens data with **AAPS**:

- xDrip
- Juggluco

**Note:** You do not need the Sens365 follower app to connect to AAPS.

## 1. xDrip

1. Install and set up the official CareSens app.
2. In CareSens app, go to settings -> Manage Data and Connections -> turn on xDrip switch. Jei norite, skiltyje „others“ išjunkite duomenų ryšius su CareLevo, DIA:CONN, CloudLoop ir kt.

![CareSens App Data Connections](../images/eversenseapp-dataconnections.png)


2. Įdiekite xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip).
3. xDrip programėlėje atverkite settings -> hardware data source ir kaip duomenų šaltinį pasirinkite `Companion App`.
4. **AAPS** skiltyje [**Konfigūracija → Glikemijos šaltinis**](#Config-Builder-bg-source) pasirinkite xDrip.


## 2. Juggluco

1. Install the Juggluco app.
2. In Juggluco, open the left menu and select `Photo`
3. Nuskaitykite ant jutiklio pakuotės esantį QR kodą.
4. In left menu -> settings -> exchange data make sure xDrip broadcast is turned on.
5. **AAPS** skiltyje [**Konfigūracija → Glikemijos šaltinis**](#Config-Builder-bg-source) pasirinkite xDrip.
