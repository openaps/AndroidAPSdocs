(Sensitivity-detection-and-COB-sensitivity-detection)=

# Empfindlichkeitserkennung

## Sensitivitäts-Algorithmus

**AAPS** bietet derzeit 3 Modelle zur Erkennung der Insulinempfindlichkeit:

* Sensitivität AAPS
* Durchschnittliche Sensitivität
* Sensitivität Oref1

### Sensitivität AAPS

Die Empfindlichkeit wird genauso berechnet wie bei Oref1, Du kannst aber den Zeitraum festlegen, der rückblickend betrachtet wird. Die minimale Kohlenhydrat-Absorption wird aus der in den Einstellungen festgelegten maximalen Absorptionszeit der Kohlenhydrate berechnet.

### Durchschnittliche Sensitivität

Die Empfindlichkeit wird als gewichteter Durchschnitt der Abweichungen berechnet. Du kannst den Zeitraum festlegen, der rückblickend betrachtet wird. Neuere Abweichungen werden stärker gewichtet. Die minimale Kohlenhydrat-Absorption wird aus der in den Einstellungen festgelegten maximalen Absorptionszeit der Kohlenhydrate berechnet. Dieser Algorithmus folgt Änderungen der Empfindlichkeit am schnellsten.

(SensitivityDetectionAndCob-sensitivity-oref1)=

### Sensitivität Oref1

Die Empfindlichkeit wird aus den Daten der letzten 8 Stunden berechnet oder ab dem letzten Katheterwechsel, wenn dieser weniger als 8 Stunden zurückliegt. Kohlenhydrate werden (falls nicht aufgenommen) nach der in den Einstellungen festgelegten Zeit abgeschnitten. Nur der Oref1 Algorithmus unterstützt unannounced Meals (UAM). Das bedeutet, dass Zeiten mit erkanntem UAM aus der Berechnung der Empfindlichkeit ausgeschlossen werden. Wenn Du also SMB mit UAM nutzt, musst Du den Algorithmus Oref1 wählen, damit es richtig funktioniert. Weitere Informationen zu UAM findest Du im Abschnitt [Super Micro Bolus (SMB)](#Open-APS-features-super-micro-bolus-smb).

Oref1 ist die empfohlene Option: Es ist die einzige, die UAM erkennen und mit [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb), dem neueren Algorithmus, zusammenarbeiten kann.

## Mehrere Mahlzeiten gleichzeitig

Wenn sich mehrere Mahlzeiten überschneiden, gibt es einen deutlichen Unterschied zwischen den Algorithmen Sensitivität AAPS und WeightedAverage auf der einen und Oref1 auf der anderen Seite.

* Oref1 geht davon aus, dass immer nur eine Mahlzeit gleichzeitig abgebaut wird: Die zweite Mahlzeit wird erst abgebaut, wenn die erste vollständig abgebaut ist.
* Sensitivität AAPS und WeightedAverage beginnen mit dem Abbau sofort, wenn Du die Kohlenhydrate eingibst. Ist mehr als eine Mahlzeit aktiv, passt sich der minimale Kohlenhydrat-Abbau an die Größe der Mahlzeit und die maximale Absorptionszeit an. Die minimale Absorption ist dadurch höher als bei Oref1.