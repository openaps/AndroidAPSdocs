# Glättung der Blut-Glukose-Daten

Wenn die **Glukosewerte** Sprünge haben oder verrauscht sind, kann es dazu kommen, dass **AAPS** das Insulin falsch dosiert. Das kann zu Unter- und Überzuckerungen führen. If you observe errors or experience jumpy data with your CGM it is important to disable the loop until the problem is resolved. Abhängig vom verwendeten Sensor können die Probleme in der CGM-Konfiguration in **AAPS** (wie unten beschrieben) liegen oder auf ein Problem mit der Sensorsetzstelle (so dass er eventuell ersetzt werden muss) hindeuten.

## Daten innerhalb AAPS glätten

**AAPS** offers the option to smooth the data within **AAPS** rather than within the CGM app. Open the **menu** (☰), select [**Configuration**](../SettingUpAaps/ConfigBuilder.md), then **Smoothing**. There are four options, and only one can be active at a time: **No smoothing**, **Exponential smoothing**, **Average smoothing** and **Unscented Kalman Filter**.

![Configuration > Smoothing](../images/v4/Configuration/configuration_smoothing.png)

### Exponentielle Glättung

Diese Methode ist die aggressivste und gleichzeitig die zunächst empfohlene Methode, um das Rauschen zu beheben. Sie schreibt den aktuellen (letzten) Glukosewert noch einmal. In der unten dargestellten Tabelle finden sich auch andere spezifische Empfehlungen.

### Durchschnittliche Glättung

Diese Option funktioniert ähnlich wie die Rückwärtsglättung, wie sie auf einigen CGM-Plattformen zuletzt eingesetzt wurde. Es berücksichtigt und reagiert die jüngsten Glukosewerte stärker und ist daher für verrauschte Werte anfälliger.

### Ohne Glättung

Verwende diese Option nur dann, wenn Deine CGM-Daten bereits (in einer Collector-App) geglättet werden, bevor sie an **AAPS** übertragen werden.

### Unscented Kalman Filter (UKF)

This option uses a statistical model to continuously estimate your true glucose value and its rate of change from the incoming (possibly noisy) readings, automatically adapting to how noisy your sensor currently is. It also detects and rejects sudden outlier readings. It is a more advanced alternative to Exponential and Average smoothing, useful if you want the smoothing to adjust itself to your sensor's changing noise level rather than using a fixed method.

(smoothing-xdrip-dexcom-g6)=

## Vorschläge zur Verwendung des Glättens

You can also change the smoothing method automatically, for example depending on the sensor age, with the **Change smoothing** [Automation action](#automations-automation-action).

|               |  Exponentiell   | Durchschnitt | Ohne Glättung |
| ------------- |:---------------:|:------------:|:-------------:|
| G5/G6/ONE     | Wenn verrauscht |              |   Empfohlen   |
| G7/ONE+/Stelo | Wenn verrauscht | Falls stabil |               |

Die Werte der Libre Sensoren sind verrauscht und müssen geglättet werden. When using xDrip direct connection, or the patched app data source (receiving from another app, Juggluco included), [smoothing is already done inside the app](#libre2-value-smoothing-raw-values).

| Sensor / Datenquelle |   Juggluco   | xDrip direct | xDrip bridge | xDrip patched app |
| -------------------- |:------------:|:------------:|:------------:|:-----------------:|
| Libre 1/14 Tage/Pro  |     N.A.     |     N.A.     | Durchschnitt |       N.A.        |
| Libre 2/2+ (EU)      | Durchschnitt |    Keine     | Durchschnitt |       Keine       |
| Libre 2/2+/3/3+      | Durchschnitt |     N.A.     |     N.A.     |       Keine       |
