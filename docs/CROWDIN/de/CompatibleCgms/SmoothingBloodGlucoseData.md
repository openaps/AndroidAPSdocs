# Glukosewerte

Wenn die **Glukosewerte** Sprünge haben oder verrauscht sind, kann es dazu kommen, dass **AAPS** das Insulin falsch dosiert. Das kann zu Unter- und Überzuckerungen führen. Wenn Du Fehler oder sprunghafte/verrauschte Werte bei Deinem CGM feststellst, ist es wichtig, den Loop zu deaktivieren, bis das Problem behoben ist. Abhängig vom verwendeten Sensor können die Probleme in der CGM-Konfiguration in **AAPS** (wie unten beschrieben) liegen oder auf ein Problem mit der Sensorsetzstelle (so dass er eventuell ersetzt werden muss) hindeuten.

## Daten innerhalb AAPS glätten

**AAPS** bietet die Möglichkeit, die Daten in **AAPS** statt in der CGM-App zu glätten. Öffne das **Menü** (☰), wähle [**Konfiguration**](../SettingUpAaps/ConfigBuilder.md) und dann **Glättung**. Es gibt vier Optionen, von denen jeweils nur eine aktiv sein kann: **Ohne Glättung**, **Exponentielle Glättung**, **Durchschnittliche Glättung** und **Unscented Kalman Filter**.

![Configuration > Smoothing](../images/v4/Configuration/configuration_smoothing.png)

### Exponentielle Glättung

Diese Methode ist die aggressivste und gleichzeitig die zunächst empfohlene Methode, um das Rauschen zu beheben. Sie schreibt den aktuellen (letzten) Glukosewert noch einmal. In der unten dargestellten Tabelle finden sich auch andere spezifische Empfehlungen.

### Durchschnittliche Glättung

Diese Option funktioniert ähnlich wie die Rückwärtsglättung, wie sie auf einigen CGM-Plattformen zuletzt eingesetzt wurde. Es berücksichtigt und reagiert die jüngsten Glukosewerte stärker und ist daher für verrauschte Werte anfälliger.

### Ohne Glättung

Verwende diese Option nur dann, wenn Deine CGM-Daten bereits (in einer Collector-App) geglättet werden, bevor sie an **AAPS** übertragen werden.

### Unscented Kalman Filter (UKF)

Diese Option nutzt ein statistisches Modell, um aus den eingehenden (möglicherweise verrauschten) Messwerten fortlaufend Deinen tatsächlichen Glukosewert und dessen Änderungsrate zu schätzen. Dabei passt sie sich automatisch daran an, wie stark Dein Sensor gerade rauscht. Außerdem erkennt und verwirft sie plötzliche Ausreißer. Sie ist eine weiterentwickelte Alternative zur exponentiellen und durchschnittlichen Glättung und eignet sich, wenn sich die Glättung selbst an das wechselnde Rauschen Deines Sensors anpassen soll, statt eine feste Methode zu verwenden.

(smoothing-xdrip-dexcom-g6)=

## Vorschläge zur Verwendung des Glättens

Du kannst die Glättungsmethode auch automatisch ändern, zum Beispiel abhängig vom Sensoralter, mit der [Automatisierungsaktion](#automations-automation-action) **Glättung ändern**.

|               |  Exponentiell   | Durchschnitt | Ohne Glättung |
| ------------- |:---------------:|:------------:|:-------------:|
| G5/G6/ONE     | Wenn verrauscht |              |   Empfohlen   |
| G7/ONE+/Stelo | Wenn verrauscht | Falls stabil |               |

Die Werte der Libre Sensoren sind verrauscht und müssen geglättet werden. Wenn Du die xDrip-Direktverbindung oder die Datenquelle „gepatchte App“ (Empfang von einer anderen App, einschließlich Juggluco) nutzt, [erfolgt die Glättung bereits in der App](#libre2-value-smoothing-raw-values).

| Sensor / Datenquelle |   Juggluco   | xDrip direkt | xDrip Bridge | xDrip gepatchte App |
| -------------------- |:------------:|:------------:|:------------:|:-------------------:|
| Libre 1/14 Tage/Pro  |     N.A.     |     N.A.     | Durchschnitt |        N.A.         |
| Libre 2/2+ (EU)      | Durchschnitt |    Keine     | Durchschnitt |        Keine        |
| Libre 2/2+/3/3+      | Durchschnitt |     N.A.     |     N.A.     |        Keine        |
