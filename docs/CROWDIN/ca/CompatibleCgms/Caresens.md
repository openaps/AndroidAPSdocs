# CareSens

Hi ha diverses maneres de fer servir les dades de CareSens amb **AAPS**:

- xDrip
- Juggluco

**Nota:** No necessiteu l'aplicació de seguiment Sens365 per connectar-vos a AAPS.

## 1. xDrip

1. Instal·leu i configureu l'aplicació oficial de CareSens.
2. A l'aplicació CareSens, aneu a configuració -> Manage Data and Connections -> activeu l'interruptor xDrip. If preferred, turn off the data connections to CareLevo, DIA:CONN, CloudLoop, etc. in "others".

![Connexions de dades de l'aplicació CareSens](../images/eversenseapp-dataconnections.png)


2. Install xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip).
3. In xDrip, go to settings -> hardware data source, select `Companion App` as data source.
4. In **AAPS**, select xDrip in [**Configuration → BG Source**](#Config-Builder-bg-source).


## 2. Juggluco

1. Instal·leu l'aplicació Juggluco.
2. A Juggluco, obriu el menú de l'esquerra i seleccioneu `Photo`
3. Escanegeu el codi QR de l'embalatge del sensor.
4. Al menú de l'esquerra -> settings -> exchange data, assegureu-vos que xDrip broadcast està activat.
5. In **AAPS**, select xDrip in [**Configuration → BG Source**](#Config-Builder-bg-source).
