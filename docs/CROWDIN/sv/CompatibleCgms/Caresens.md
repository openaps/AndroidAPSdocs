# CareSens

Det finns olika sätt att använda CareSens-data med **AAPS**:

- xDrip
- Juggluco

**Obs!** Du behöver inte följarappen Sens365 för att ansluta till AAPS.

## 1. xDrip

1. Installera och ställ in den officiella CareSens-appen.
2. I CareSens-appen går du till settings -> Manage Data and Connections -> slå på reglaget xDrip. Om du vill kan du stänga av dataanslutningarna till CareLevo, DIA:CONN, CloudLoop osv. under "others".

![Dataanslutningar i CareSens-appen](../images/eversenseapp-dataconnections.png)


2. Installera xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip).
3. I xDrip går du till settings -> hardware data source och väljer `Companion App` som datakälla.
4. I **AAPS** väljer du xDrip i [**Konfiguration → BG-källa**](#Config-Builder-bg-source).


## 2. Juggluco

1. Installera appen Juggluco.
2. Öppna vänstermenyn i Juggluco och välj `Photo`
3. Skanna QR-koden på sensorns förpackning.
4. I vänstermenyn -> settings -> exchange data: se till att xDrip broadcast är påslaget.
5. I **AAPS** väljer du xDrip i [**Konfiguration → BG-källa**](#Config-Builder-bg-source).
