- - -
orphan: true
- - -

# Glättung der Blut-Glukose-Daten

Wenn die **Glukosewerte** Sprünge haben oder verrauscht sind, kann es dazu kommen, dass **AAPS** das Insulin falsch dosiert. Das kann zu Unter- und Überzuckerungen führen. Wenn Du Fehler in den CGM-Daten erkennst ist es wichtig, bis das Problem behoben ist, den Loop auszuschalten. Abhängig vom verwendeten Sensor können die Probleme in der CGM-Konfiguration in **AAPS** (wie unten beschrieben) liegen oder auf ein Problem mit der Sensorsetzstelle (so dass er eventuell ersetzt werden muss) hindeuten.

Einige CGM-Systeme haben interne Algorithmen, um die Qualität der Messwerte zu erkennen. **AAPS** kann diese Informationen nutzen und (bei unzuverlässigen Werten) SMBs aussetzen. Für die CGMs, die diese Informationen nicht übermitteln, werden die Funktionen 'Aktiviere SMB immer' und 'Aktiviere SMB nach Mahlzeiten' aus Sicherheitsgründen deaktiviert.

## Daten innerhalb AAPS glätten

Seit **AAPS**-Version 3.2 gibt es die Möglichkeit, die Daten anstatt in der CGM-App von **AAPS** zu glätten. There are three options available in [Config Builder > Smoothing](../SettingUpAaps/ConfigBuilder.md).

![Glättung](../images/ConfBuild_Smoothing.png)

### Exponentielle Glättung

Diese Methode ist die aggressivste und gleichzeitig empfohlene Methode, um das Rauschen zu beheben. Sie schreibt den aktuellen (letzten) Glukosewert erneut.

### Durchschnittliche Glättung

Diese Option funktioniert ähnlich wie die Rückwärtsglättung, wie sie auf einigen CGM-Plattformen zuletzt eingesetzt wurde. Es berücksichtigt und reagiert die jüngsten Glukosewerte stärker und ist daher für verrauschte Werte anfälliger.

### Ohne Glättung

Verwende diese Option nur dann, wenn Deine CGM-Daten bereits (in einer Collector-App) geglättet werden, bevor sie an **AAPS** übertragen werden.

## Vorschläge zur Verwendung des Glättens

|                          |  Exponentiell   | Durchschnitt |   Keine   |
| ------------------------ |:---------------:|:------------:|:---------:|
| G5 und G6                | Wenn verrauscht |              | Empfohlen |
| G7                       | Wenn verrauscht | Falls stabil |           |
| Libre 1 oder Juggluco    |    Empfohlen    |              |           |
| Libre 2 und 3 von xDrip+ |                 |              | Empfohlen |

### Dexcom-Sensoren

#### Build your own Dexcom App
Wenn Du [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) nutzt, sind Deine Glukosedaten bereits geglättet und konsistent. Außerdem kannst Du die rückwirkende Glättung von Dexcom nutzen. Da die Qualität der Messwerte an AAPS übermittelt wird, können SMBs ohne Einschränkungen genutzt werden.

(smoothing-xdrip-dexcom-g6)=
#### xDrip+ mit Dexcom G6 oder Dexcom ONE
Die Qualität der Messwerte und die geglätteten Glukosewert-Daten werden nur mit AAPS ausgetauscht, wenn Du den [nativen Modus](https://navid200.github.io/xDrip/docs/Native-Algorithm) von xDrip+ nutzt. Im nativen Modus können SMBs ohne Einschränkungen genutzt werden.

#### Dexcom G6 oder Dexcom ONE mit xDrip+ Companion App
Die Qualität der Messwerte wird nicht an AAPS übermittelt. Deswegen sind die Funktionen „Aktiviere SMB immer“ und „Aktiviere SMB nach Mahlzeiten“ deaktiviert.

### Freestyle Libre Sensoren

#### xDrip+ with FreeStyle Libre1
The FreeStyle Libre 1 does not broadcast any information about the level of noise detected in the readings, and therefore 'Enable SMB always' and 'Enable SMB after carbs' are disabled when using this CGM. In addition, many people have reported the FreeStyle Libre 1 often produces noisy data.
