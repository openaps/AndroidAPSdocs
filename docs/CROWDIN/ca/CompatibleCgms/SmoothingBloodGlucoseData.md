# Suavitzat de les dades de glucèmia

Si les dades de **glucèmia** salten o són sorolloses, **AAPS** pot dosificar la insulina malament i provocar hiperglucèmies o hipoglucèmies. If you observe errors or experience jumpy data with your CGM it is important to disable the loop until the problem is resolved. Segons el vostre CGM, aquests problemes poden venir de la configuració del CGM a **AAPS** (com s'explica més avall) o d'un problema al punt del sensor del CGM (que pot obligar a canviar el sensor).

## Suavitzat de les dades a AAPS

**AAPS** offers the option to smooth the data within **AAPS** rather than within the CGM app. Open the **menu** (☰), select [**Configuration**](../SettingUpAaps/ConfigBuilder.md), then **Smoothing**. There are four options, and only one can be active at a time: **No smoothing**, **Exponential smoothing**, **Average smoothing** and **Unscented Kalman Filter**.

![Configuration > Smoothing](../images/v4/Configuration/configuration_smoothing.png)

### Suavitzat exponencial

En general, aquesta és l'opció recomanada per començar, perquè és la més agressiva per eliminar el soroll i reescriu el valor més recent. Però vegeu la taula de sota per a altres recomanacions concretes.

### Suavitzat per mitjana

Aquesta opció funciona de manera semblant al suavitzat cap enrere («back smoothing») que tenien abans algunes plataformes de CGM. Reacciona més als canvis recents de la glucèmia i, per tant, és més fàcil que respongui malament a dades sorolloses del CGM.

### Sense suavitzat

Feu servir aquesta opció només si la vostra aplicació col·lectora ja suavitza bé les dades del CGM abans d'enviar-les a **AAPS**.

### Unscented Kalman Filter (UKF)

This option uses a statistical model to continuously estimate your true glucose value and its rate of change from the incoming (possibly noisy) readings, automatically adapting to how noisy your sensor currently is. It also detects and rejects sudden outlier readings. It is a more advanced alternative to Exponential and Average smoothing, useful if you want the smoothing to adjust itself to your sensor's changing noise level rather than using a fixed method.

(smoothing-xdrip-dexcom-g6)=

## Recomanacions per fer servir el suavitzat

You can also change the smoothing method automatically, for example depending on the sensor age, with the **Change smoothing** [Automation action](#automations-automation-action).

|               |   Exponencial   |  Per mitjana  | Sense suavitzat |
| ------------- |:---------------:|:-------------:|:---------------:|
| G5/G6/ONE     | Si hi ha soroll |               |    Recomanat    |
| G7/ONE+/Stelo | Si hi ha soroll | Si és estable |                 |

Els sensors Libre són sorollosos i poden necessitar suavitzat. When using xDrip direct connection, or the patched app data source (receiving from another app, Juggluco included), [smoothing is already done inside the app](#libre2-value-smoothing-raw-values).

| Sensor / Origen de les dades |  Juggluco   | xDrip direct | xDrip bridge | xDrip patched app |
| ---------------------------- |:-----------:|:------------:|:------------:|:-----------------:|
| Libre 1/14 dies/Pro          |     N/D     |     N/D      | Per mitjana  |        N/D        |
| Libre 2/2+ (UE)              | Per mitjana |     Cap      | Per mitjana  |        Cap        |
| Libre 2/2+/3/3+              | Per mitjana |     N/D      |     N/D      |        Cap        |
