# Изглаждане на данните за кръвна захар

Ако данните за **КЗ** са скокообразни/шумни, **AAPS** може да дозира инсулина неправилно, което да доведе до високи или ниски стойности. If you observe errors or experience jumpy data with your CGM it is important to disable the loop until the problem is resolved. В зависимост от вашия CGM, такива проблеми могат да се дължат на конфигурацията на CGM в **AAPS** (обяснено по-долу); или на проблем с мястото на поставяне на сензора на CGM (което може да изисква смяна на сензора на CGM).

## Smoothing data within AAPS

**AAPS** offers the option to smooth the data within **AAPS** rather than within the CGM app. Open the **menu** (☰), select [**Configuration**](../SettingUpAaps/ConfigBuilder.md), then **Smoothing**. There are four options, and only one can be active at a time: **No smoothing**, **Exponential smoothing**, **Average smoothing** and **Unscented Kalman Filter**.

![Configuration > Smoothing](../images/v4/Configuration/configuration_smoothing.png)

### Експоненциално изглаждане

Като цяло това е препоръчителната опция, с която да започнете, тъй като е най-агресивна при отстраняването на шум и пренаписва най-скорошната стойност. Въпреки това, вижте таблицата по-долу за други конкретни препоръки.

### Average smoothing

This option works similar to back smoothing that was previously implemented on certain CGM platforms. It is more reactive to recent changes in BG value and therefore more prone to responding incorrectly to noisy CGM data.

### No Smoothing

Използвайте тази опция само ако вашите CGM данни се изглаждат правилно от приложението-колектор, преди да бъдат предадени към **AAPS**.

### Unscented Kalman Filter (UKF)

This option uses a statistical model to continuously estimate your true glucose value and its rate of change from the incoming (possibly noisy) readings, automatically adapting to how noisy your sensor currently is. It also detects and rejects sudden outlier readings. It is a more advanced alternative to Exponential and Average smoothing, useful if you want the smoothing to adjust itself to your sensor's changing noise level rather than using a fixed method.

(smoothing-xdrip-dexcom-g6)=

## Suggestions to use smoothing

You can also change the smoothing method automatically, for example depending on the sensor age, with the **Change smoothing** [Automation action](#automations-automation-action).

|               | Exponential |    Average     | No Smoothing |
| ------------- |:-----------:|:--------------:|:------------:|
| G5/G6/ONE     |  If noisy   |                | Recommended  |
| G7/ONE+/Stelo |  If noisy   | Ако е стабилен |              |

Сензорите Libre са шумни и могат да изискват изглаждане. When using xDrip direct connection, or the patched app data source (receiving from another app, Juggluco included), [smoothing is already done inside the app](#libre2-value-smoothing-raw-values).

| Сензор / Източник на данни | Juggluco | xDrip direct | xDrip bridge | xDrip patched app |
| -------------------------- |:--------:|:------------:|:------------:|:-----------------:|
| Libre 1/14 дни /Pro        |   N.A.   |     N.A.     |   Average    |       N.A.        |
| Libre 2/2+ (EU)            | Average  |     None     |   Average    |       None        |
| Libre 2/2+/3/3+            | Average  |     N.A.     |     N.A.     |       None        |
