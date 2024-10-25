# Glättung der Blut-Glukose-Daten

Wenn die **Glukosewerte** Sprünge haben oder verrauscht sind, kann es dazu kommen, dass **AAPS** das Insulin falsch dosiert. Das kann zu Unter- und Überzuckerungen führen. Wenn Du Fehler in den CGM-Daten erkennst ist es wichtig, bis das Problem behoben ist, den Loop auszuschalten. Abhängig vom verwendeten Sensor können die Probleme in der CGM-Konfiguration in **AAPS** (wie unten beschrieben) liegen oder auf ein Problem mit der Sensorsetzstelle (so dass er eventuell ersetzt werden muss) hindeuten.

Einige CGM-Systeme haben interne Algorithmen, um die Qualität der Messwerte zu erkennen. **AAPS** kann diese Informationen nutzen und (bei unzuverlässigen Werten) SMBs aussetzen. Für die CGMs, die diese Informationen nicht übermitteln, werden die Funktionen 'Aktiviere SMB immer' und 'Aktiviere SMB nach Mahlzeiten' aus Sicherheitsgründen deaktiviert.

## Smoothing data within AAPS

As of **AAPS** version 3.2, **AAPS** offers the option to smooth the data within **AAPS** rather than within the CGM app. There are three options available in the [Config Builder](../SettingUpAaps/ConfigBuilder.md).

![Glättung](../images/ConfBuild_Smoothing.png)

### Exponentielle Glättung

Diese Methode ist die aggressivste und gleichzeitig empfohlene Methode, um das Rauschen zu beheben. Sie schreibt den aktuellen (letzten) Glukosewert erneut.

### Durchschnittliche Glättung

Diese Option funktioniert ähnlich wie die Rückwärtsglättung, wie sie auf einigen CGM-Plattformen zuletzt eingesetzt wurde. Es berücksichtigt und reagiert die jüngsten Glukosewerte stärker und ist daher für verrauschte Werte anfälliger.

### Ohne Glättung

Verwende diese Option nur dann, wenn Deine CGM-Daten bereits (in einer Collector-App) geglättet werden, bevor sie an **AAPS** übertragen werden.

## Vorschläge zur Verwendung des Glättens

|                          | Exponentiell |   Durchschnitt  |   Keine   |
| ------------------------ | :----------: | :-------------: | :-------: |
| G5 und G6                |              | Wenn verrauscht | Empfohlen |
| G7                       |   Empfohlen  |                 |           |
| Libre 1 oder Juggluco    |   Empfohlen  |                 |           |
| Libre 2 und 3 von xDrip+ |              |                 | Empfohlen |

### Dexcom sensors

#### Build Your Own Dexcom App

When using [BYODA](../CompatibleCgms/DexcomG6.md#if-using-g6-with-build-your-own-dexcom-app), your BG data is smooth and consistent. Furthermore, you can take advantage of Dexcom back-smoothing. There are no restrictions in using SMBs, because the noise-level data is shared with AAPS.

#### xDrip+ with Dexcom G6 or Dexcom ONE

Noise-level data and smooth BG readings are only shared with AAPS if you use xDrip+ [native mode](https://navid200.github.io/xDrip/docs/Native-Algorithm). Using native mode, there are no restrictions in using SMBs.

#### Dexcom G6 or Dexcom ONE with xDrip+ Companion Mode

The noise-level data is not shared with AAPS using this method. Therefore, 'Enable SMB always' and 'Enable SMB after carbs' are disabled.

### Freestyle Libre sensors

#### xDrip+ with FreeStyle Libre

None of the FreeStyle Libre systems (FSL1, FSL2, or FSL3) broadcast any information about the level of noise detected in the readings, and therefore 'Enable SMB always' and 'Enable SMB after carbs' are disabled for all setups using the FreeStyle Libre.
In addition, many people have reported the FreeStyle Libre often produces noisy data.
