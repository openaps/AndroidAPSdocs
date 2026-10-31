# CareSens

Hay varias formas de usar los datos de CareSens con **AAPS**:

- xDrip
- Juggluco

**Nota:** no necesitas la app de seguimiento Sens365 para conectarte con AAPS.

## 1. xDrip

1. Instala y configura la app oficial de CareSens.
2. En la app CareSens, ve a settings -> Manage Data and Connections -> activa el interruptor de xDrip. Si quieres, desactiva las conexiones de datos con CareLevo, DIA:CONN, CloudLoop, etc. en "others".

![Conexiones de datos de la app CareSens](../images/eversenseapp-dataconnections.png)


2. Instala xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip).
3. En xDrip, ve a settings -> hardware data source y selecciona `Companion App` como fuente de datos.
4. En **AAPS**, selecciona xDrip en [**Configuración → Fuente de glucosa**](#Config-Builder-bg-source).


## 2. Juggluco

1. Instala la app Juggluco.
2. En Juggluco, abre el menú de la izquierda y selecciona `Photo`
3. Escanea el código QR del envase del sensor.
4. En el menú de la izquierda -> settings -> exchange data, comprueba que xDrip broadcast está activado.
5. En **AAPS**, selecciona xDrip en [**Configuración → Fuente de glucosa**](#Config-Builder-bg-source).
