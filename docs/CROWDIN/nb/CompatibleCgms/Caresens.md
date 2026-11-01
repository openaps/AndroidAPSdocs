# CareSens

Det finnes flere måter å bruke CareSens-data med **AAPS** på:

- xDrip
- Juggluco

**Merk:** Du trenger ikke følgerappen Sens365 for å koble til AAPS.

## 1. xDrip

1. Installer og sett opp den offisielle CareSens-appen.
2. I CareSens-appen går du til settings (innstillinger) -> Manage Data and Connections (administrer data og tilkoblinger) -> slå på xDrip-bryteren. Hvis du vil, kan du slå av datatilkoblingene til CareLevo, DIA:CONN, CloudLoop osv. under «others» (andre).

![Datatilkoblinger i CareSens-appen](../images/eversenseapp-dataconnections.png)


2. Installer xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip).
3. I xDrip går du til settings -> hardware data source og velger `Companion App` som datakilde.
4. I **AAPS** velger du xDrip i [**Konfigurasjon → BS-kilde**](#Config-Builder-bg-source).


## 2. Juggluco

1. Installer Juggluco-appen.
2. I Juggluco åpner du venstremenyen og velger `Photo` (bilde)
3. Skann QR-koden på pakken til sensoren.
4. Under venstremenyen -> settings (innstillinger) -> exchange data (utveksle data) må du passe på at xDrip broadcast (xDrip-kringkasting) er slått på.
5. I **AAPS** velger du xDrip i [**Konfigurasjon → BS-kilde**](#Config-Builder-bg-source).
