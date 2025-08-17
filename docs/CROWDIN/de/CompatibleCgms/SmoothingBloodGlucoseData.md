- - -
orphan: true
- - -

# Glättung der Blut-Glukose-Daten

Wenn die **Glukosewerte** Sprünge haben oder verrauscht sind, kann es dazu kommen, dass **AAPS** das Insulin falsch dosiert. Das kann zu Unter- und Überzuckerungen führen. Wenn Du Fehler in den CGM-Daten erkennst ist es wichtig, bis das Problem behoben ist, den Loop auszuschalten. Abhängig vom verwendeten Sensor können die Probleme in der CGM-Konfiguration in **AAPS** (wie unten beschrieben) liegen oder auf ein Problem mit der Sensorsetzstelle (so dass er eventuell ersetzt werden muss) hindeuten.

## Daten innerhalb AAPS glätten

Seit **AAPS**-Version 3.2 gibt es die Möglichkeit, die Daten anstatt in der CGM-App von **AAPS** zu glätten. In [Konfiguration > Glättung](../SettingUpAaps/ConfigBuilder.md) gibt es drei Optionen.

![Glättung](../images/ConfBuild_Smoothing.png)

### Exponentielle Glättung

Diese Methode ist die aggressivste und gleichzeitig die zunächst empfohlene Methode, um das Rauschen zu beheben. Sie schreibt den aktuellen (letzten) Glukosewert noch einmal. In der unten dargestellten Tabelle finden sich auch andere spezifische Empfehlungen.

### Durchschnittliche Glättung

Diese Option funktioniert ähnlich wie die Rückwärtsglättung, wie sie auf einigen CGM-Plattformen zuletzt eingesetzt wurde. Es berücksichtigt und reagiert die jüngsten Glukosewerte stärker und ist daher für verrauschte Werte anfälliger.

### Ohne Glättung

Verwende diese Option nur dann, wenn Deine CGM-Daten bereits (in einer Collector-App) geglättet werden, bevor sie an **AAPS** übertragen werden.

(smoothing-xdrip-dexcom-g6)=

## Vorschläge zur Verwendung des Glättens

|               |  Exponentiell   | Durchschnitt |   Keine   |
| ------------- |:---------------:|:------------:|:---------:|
| G5/G6/ONE     | Wenn verrauscht |              | Empfohlen |
| G7/ONE+/Stelo | Wenn verrauscht | Falls stabil |           |

Die Werte der Libre Sensoren sind verrauscht und müssen geglättet werden. When using xDrip+ direct connection, or the patched app data source (receiving from another app, Juggluco included), [smoothing is already done inside the app](#libre2-value-smoothing-raw-values).

| Sensor / Datenquelle |   Juggluco   | xDrip+ Direkt | xDrip+ Bridge | xDrip+ gepatchte App |
| -------------------- |:------------:|:-------------:|:-------------:|:--------------------:|
| Libre 1/14 Tage/Pro  |     N.A.     |     N.A.      | Durchschnitt  |         N.A.         |
| Libre 2/2+ (EU)      | Durchschnitt |     Keine     | Durchschnitt  |        Keine         |
| Libre 2/2+/3/3+      | Durchschnitt |     N.A.      |     N.A.      |        Keine         |
