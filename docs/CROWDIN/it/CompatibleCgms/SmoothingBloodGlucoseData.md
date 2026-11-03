# Smoothing dei dati glicemici

If **BG** data is jumpy/noisy, **AAPS** may dose insulin incorrectly resulting in highs or lows. If you observe errors or experience jumpy data with your CGM it is important to disable the loop until the problem is resolved. Depending on your CGM, such issues may be due to the CGM configuration in **AAPS** (as explained further below); or a CGM sensor site issue (which may require replacing the CGM sensor).

## Smoothing dei dati in AAPS

**AAPS** offers the option to smooth the data within **AAPS** rather than within the CGM app. Apri il **menu** (☰), seleziona [**Configurazione**](../SettingUpAaps/ConfigBuilder.md), poi **Smoothing**. There are four options, and only one can be active at a time: **No smoothing**, **Exponential smoothing**, **Average smoothing** and **Unscented Kalman Filter**.

![Configurazione > Smoothing](../images/v4/Configuration/configuration_smoothing.png)

### Smoothing esponenziale

In general, this is the recommended option to start with, as it is most aggressive in resolving noise and rewrites the most recent value. However, see the table below for other specific recommendations.

### Smoothing medio

Questa opzione funziona in modo simile al back smoothing che in passato era presente su alcune piattaforme CGM. Reagisce di più alle variazioni recenti della glicemia e quindi è più facile che risponda in modo sbagliato a dati CGM disturbati.

### Nessuno smoothing

Use this option only if your CGM data is being properly smoothed by your collector app before being transmitted to **AAPS**.

### Unscented Kalman Filter (UKF)

This option uses a statistical model to continuously estimate your true glucose value and its rate of change from the incoming (possibly noisy) readings, automatically adapting to how noisy your sensor currently is. It also detects and rejects sudden outlier readings. It is a more advanced alternative to Exponential and Average smoothing, useful if you want the smoothing to adjust itself to your sensor's changing noise level rather than using a fixed method.

(smoothing-xdrip-dexcom-g6)=

## Suggerimenti per l'uso dello smoothing

You can also change the smoothing method automatically, for example depending on the sensor age, with the **Change smoothing** [Automation action](#automations-automation-action).

|               | Esponenziale  |   Medio    | Nessuno smoothing |
| ------------- |:-------------:|:----------:|:-----------------:|
| G5/G6/ONE     | Se disturbato |            |    Consigliato    |
| G7/ONE+/Stelo | Se disturbato | Se stabile |                   |

Libre sensors are noisy and can require smoothing. When using xDrip direct connection, or the patched app data source (receiving from another app, Juggluco included), [smoothing is already done inside the app](#libre2-value-smoothing-raw-values).

| Sensor / Data source  | Juggluco | xDrip direct | xDrip bridge | xDrip patched app |
| --------------------- |:--------:|:------------:|:------------:|:-----------------:|
| Libre 1/14 giorni/Pro |   N.D.   |     N.D.     |    Medio     |       N.D.        |
| Libre 2/2+ (EU)       |  Medio   |   Nessuno    |    Medio     |      Nessuno      |
| Libre 2/2+/3/3+       |  Medio   |     N.D.     |     N.D.     |      Nessuno      |
