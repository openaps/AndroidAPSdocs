- - -
orphan: true
- - -

# Lissage des données de glycémie

If **BG** data is jumpy/noisy, **AAPS** may dose insulin incorrectly resulting in highs or lows. If you observe errors in your CGM data it is important to disable the loop until the problem is resolved. Depending on your CGM, such issues may be due to the CGM configuration in **AAPS** (as explained further below); or a CGM sensor site issue (which may require replacing the CGM sensor).

## Smoothing data within AAPS

As of **AAPS** version 3.2, **AAPS** offers the option to smooth the data within **AAPS** rather than within the CGM app. There are three options available in [Config Builder > Smoothing](../SettingUpAaps/ConfigBuilder.md).

![Smoothing](../images/ConfBuild_Smoothing.png)

### Exponential smoothing

In general, this is the recommended option to start with, as it is most aggressive in resolving noise and rewrites the most recent value. However, see the table below for other specific recommendations.

### Average smoothing

This option works similar to back smoothing that was previously implemented on certain CGM platforms. It is more reactive to recent changes in BG value and therefore more prone to responding incorrectly to noisy CGM data.

### No Smoothing

Use this option only if your CGM data is being properly smoothed by your collector app before being transmitted to **AAPS**.

(smoothing-xdrip-dexcom-g6)=

## Suggestions to use smoothing

|               | Exponential |  Average  |    None     |
| ------------- |:-----------:|:---------:|:-----------:|
| G5/G6/ONE     |  If noisy   |           | Recommended |
| G7/ONE+/Stelo |  If noisy   | If stable |             |

Libre sensors are noisy and can require smoothing. When using xDrip+ direct connection, or the patched app data source (receiving from another app, Juggluco included), [smoothing is already done inside the app](#libre2-value-smoothing-raw-values).

| Sensor / Data source | Juggluco | xDrip+ direct | xDrip+ bridge | xDrip+ patched app |
| -------------------- |:--------:|:-------------:|:-------------:|:------------------:|
| Libre 1/14 days/Pro  |   N.A.   |     N.A.      |    Average    |        N.A.        |
| Libre 2/2+ (EU)      | Average  |     None      |    Average    |        None        |
| Libre 2/2+/3/3+      | Average  |     N.A.      |     N.A.      |        None        |
