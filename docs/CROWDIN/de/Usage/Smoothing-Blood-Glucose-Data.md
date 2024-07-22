(Smoothing-Blood-Glucose-Data)=

# Glättung der Blut-Glukose-Daten

Wenn die **Glukosewerte** Sprünge haben oder verrauscht sind, kann es dazu kommen, dass **AAPS** das Insulin falsch dosiert. Das kann zu Unter- und Überzuckerungen führen. Wenn Du Fehler in den CGM-Daten erkennst ist es wichtig, bis das Problem behoben ist, den Loop auszuschalten. Abhängig vom verwendeten Sensor können die Probleme in der CGM-Konfiguration in **AAPS** (wie unten beschrieben) liegen oder auf ein Problem mit der Sensorsetzstelle (so dass er eventuell ersetzt werden muss) hindeuten.

Einige CGM-Systeme haben interne Algorithmen, um die Qualität der Messwerte zu erkennen. **AAPS** kann diese Informationen nutzen und (bei unzuverlässigen Werten) SMBs aussetzen. Für die CGMs, die diese Informationen nicht übermitteln, werden die Funktionen 'Aktiviere SMB immer' und 'Aktiviere SMB nach Mahlzeiten' aus Sicherheitsgründen deaktiviert.

Zusätzlich gibt es ab der **AAPS** Version 3.2 die Möglichkeit, die Daten innerhalb von **AAPS** zu glätten (anstatt innerhalb der CGM-App). Es gibt drei Optionen in der [KONFIGURATION](../Configuration/Config-Builder.md).

![Glättung](../images/ConfBuild_Smoothing.png)

## Exponentielle Glättung

Diese Methode ist die aggressivste und gleichzeitig empfohlene Methode, um das Rauschen zu beheben. Sie schreibt den aktuellen (letzten) Glukosewert erneut.

## Durchschnittliche Glättung

Diese Option funktioniert ähnlich wie die Rückwärtsglättung, wie sie auf einigen CGM-Plattformen zuletzt eingesetzt wurde. Es berücksichtigt und reagiert die jüngsten Glukosewerte stärker und ist daher für verrauschte Werte anfälliger.

## Ohne Glättung

Verwende diese Option nur dann, wenn Deine CGM-Daten bereits (in einer Collector-App) geglättet werden, bevor sie an **AAPS** übertragen werden.

## Vorschläge zur Verwendung des Glättens

|                          | Exponentiell |   Durchschnitt  |   Keine   |
| ------------------------ | :----------: | :-------------: | :-------: |
| G5 und G6                |              | Wenn verrauscht | Empfohlen |
| G7                       |   Empfohlen  |                 |           |
| Libre 1 oder Juggluco    |   Empfohlen  |                 |           |
| Libre 2 und 3 von xDrip+ |              |                 | Empfohlen |
