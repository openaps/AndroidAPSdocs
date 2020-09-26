# Empfindlichkeitserkennung

## Sensitivitäts-Algorithmus

Aktuell gibt es 3 Modelle zur Empfindlichkeitserkennung:

* Sensitivität AAPS
* Durchschnittliche Sensitivität
* Sensitivität Oref1

### Sensitivität AAPS

Sensitivity is calculated the same way like Oref1 but you can specify time to the past. Die minimale Kohlenhydrat-Absorption wird ausgehend von der maximalen Kohlenhydrat-Absorption, die in den Vorgaben festgelegt werden kann, berechnet.

### Durchschnittliche Sensitivität

Die Empfindlichkeit wird als gewichtetes Mittel der Schwankungen berechnet. Du kannst angeben, wie lange rückwirkend betrachtet wird. Neuere Schwankungen haben ein größeres Gewicht. Die minimale Kohlenhydrat-Absorption wird ausgehend von der maximalen Kohlenhydrat-Absorption, die in den Vorgaben festgelegt werden kann, berechnet. Dieser Algorithmus folgt Änderungen der Empfindlichkeit am schnellsten.

### Sensitivität Oref1

Die Sensitivität wird auf Basis der Daten der vergangenen 8 Stunden oder seit dem letzten Katheterwechsel berechnet, falls er weniger als 8 Stunden her ist Kohlenhydrate (falls noch nicht absorbiert) werden nach der in den Einstellungen festgelegten Zeit abgeschnitten. Nur der Oref1 Algorithmus unterstützt un-announced Meals (UAM). Das heißt, Zeiten mit erkannten UAM werden bei der Sensitivitätsberechnung nicht berücksichtigt. Wenn du also SMB mit UAM verwendest, dann musst du den Oref1 Algorithmus auswählen, damit es gut läuft. Für weitere Informationen lies die [OpenAPS Oref1 Dokumentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html).

## Mehrere Mahlzeiten gleichzeitig

There is significant difference while using AAPS, WeightedAverage vs Oref1. Die Oref Plugins gehen davon aus, dass nur die Kohlenhydrate einer einzigen Mahlzeit abgebaut werden. Das bedeutet, dass der Abbau einer zweiten Mahlzeit erst dann beginnt, wenn die erste Mahlzeit vollständig abgebaut ist. AAPS mit durchschnittlicher Sensitivität beginnt direkt nach Eingabe der Kohlenhydrate mit deren Abbau. Falls mehr als eine Mahlzeit zu berücksichtigen ist, wird der minimale KH-Abbau entsprechend der Größe der Mahlzeit und der maximalen Absorption angepasst. Die minimale Absorption wird entsprechend höher im Vergleich zu den Oref Plugins.