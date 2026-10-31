# CareSens

Data CareSens můžete s **AAPS** používat několika způsoby:

- xDrip
- Juggluco

**Poznámka:** Pro připojení k AAPS nepotřebujete aplikaci pro sledující Sens365.

## 1. xDrip

1. Nainstalujte a nastavte oficiální aplikaci CareSens.
2. V aplikaci CareSens jděte do settings -> Manage Data and Connections -> zapněte přepínač xDrip. If preferred, turn off the data connections to CareLevo, DIA:CONN, CloudLoop, etc. in "others".

![Datová připojení v aplikaci CareSens](../images/eversenseapp-dataconnections.png)


2. Nainstalujte xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip).
3. V xDrip jděte do settings -> hardware data source a jako zdroj dat vyberte `Companion App`.
4. V **AAPS** vyberte xDrip v [**Konfigurace → Zdroj glykémie**](#Config-Builder-bg-source).


## 2. Juggluco

1. Nainstalujte aplikaci Juggluco.
2. V Juggluco otevřete levou nabídku a vyberte `Photo`
3. Naskenujte QR kód na balení senzoru.
4. V levé nabídce -> settings -> exchange data se ujistěte, že je zapnutý xDrip broadcast.
5. V **AAPS** vyberte xDrip v [**Konfigurace → Zdroj glykémie**](#Config-Builder-bg-source).
