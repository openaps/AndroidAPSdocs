- - -
orphan: true
- - -

# Glättung der Blut-Glukose-Daten

If **BG** data is jumpy/noisy, **AAPS** may dose insulin incorrectly resulting in highs or lows. Wenn Du Fehler in den CGM-Daten erkennst ist es wichtig, bis das Problem behoben ist, den Loop auszuschalten. Depending on your CGM, such issues may be due to the CGM configuration in **AAPS** (as explained further below); or a CGM sensor site issue (which may require replacing the CGM sensor).

Some CGM systems have internal algorithms to detect the noise level in the readings, and **AAPS** can use this information to avoid giving SMBs if the BG data is too unreliable. Für die CGMs, die diese Informationen nicht übermitteln, werden die Funktionen 'Aktiviere SMB immer' und 'Aktiviere SMB nach Mahlzeiten' aus Sicherheitsgründen deaktiviert.

## Smoothing data within AAPS

As of **AAPS** version 3.2, **AAPS** offers the option to smooth the data within **AAPS** rather than within the CGM app. There are three options available in the [Config Builder](../SettingUpAaps/ConfigBuilder.md).

![Smoothing](../images/ConfBuild_Smoothing.png)

### Exponentielle Glättung

Diese Methode ist die aggressivste und gleichzeitig empfohlene Methode, um das Rauschen zu beheben. Sie schreibt den aktuellen (letzten) Glukosewert erneut.

### Durchschnittliche Glättung

Diese Option funktioniert ähnlich wie die Rückwärtsglättung, wie sie auf einigen CGM-Plattformen zuletzt eingesetzt wurde. Es berücksichtigt und reagiert die jüngsten Glukosewerte stärker und ist daher für verrauschte Werte anfälliger.

### Ohne Glättung

Use this option only if your CGM data is being properly smoothed by your collector app before being transmitted to **AAPS**.

## Vorschläge zur Verwendung des Glättens

|                          |  Exponentiell   | Durchschnitt |   Keine   |
| ------------------------ |:---------------:|:------------:|:---------:|
| G5 und G6                | Wenn verrauscht |              | Empfohlen |
| G7                       | Wenn verrauscht |  If stable   |           |
| Libre 1 oder Juggluco    |    Empfohlen    |              |           |
| Libre 2 und 3 von xDrip+ |                 |              | Empfohlen |

### Dexcom sensors

#### Build Your Own Dexcom App
When using [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app), your BG data is smooth and consistent. Furthermore, you can take advantage of Dexcom back-smoothing. There are no restrictions in using SMBs, because the noise-level data is shared with AAPS.

(smoothing-xdrip-dexcom-g6)=
#### xDrip+ with Dexcom G6 or Dexcom ONE
Noise-level data and smooth BG readings are only shared with AAPS if you use xDrip+ [native mode](https://navid200.github.io/xDrip/docs/Native-Algorithm). Using native mode, there are no restrictions in using SMBs.

#### Dexcom G6 or Dexcom ONE with xDrip+ Companion Mode
The noise-level data is not shared with AAPS using this method. Therefore, 'Enable SMB always' and 'Enable SMB after carbs' are disabled.

### Freestyle Libre sensors

#### xDrip+ with FreeStyle Libre
None of the FreeStyle Libre systems (FSL1, FSL2, or FSL3) broadcast any information about the level of noise detected in the readings, and therefore 'Enable SMB always' and 'Enable SMB after carbs' are disabled for all setups using the FreeStyle Libre. In addition, many people have reported the FreeStyle Libre often produces noisy data.
