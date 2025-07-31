(Sensitivity-detection-and-COB-sensitivity-detection)=

# Empfindlichkeitserkennung

## Sensitivitäts-Algorithmus

Aktuell gibt es 3 Modelle zur Empfindlichkeitserkennung:

* Sensitivität AAPS
* Durchschnittliche Sensitivität
* Sensitivität Oref1

### Sensitivität AAPS

Die Empfindlichkeit wird wie bei Oref1 berechnet, aber Du kannst einstellen wie weit der Algorithmus in die Vergangenheit "schaut". Die minimale Kohlenhydrat-Absorption wird ausgehend von der maximalen Kohlenhydrat-Absorption berechnet, die in den Einstellungen festgelegt werden kann

### Durchschnittliche Sensitivität

Die Empfindlichkeit wird als gewichtetes Mittel der Schwankungen berechnet. Du kannst angeben, wie lange rückwirkend betrachtet wird. Neuere Schwankungen haben ein größeres Gewicht. Die minimale Kohlenhydrat-Absorption wird ausgehend von der maximalen Kohlenhydrat-Absorption berechnet, die in den Einstellungen festgelegt werden kann. Dieser Algorithmus berücksichtigt Empfindlichkeitsveränderungen am schnellsten.

(SensitivityDetectionAndCob-sensitivity-oref1)=

### Sensitivität Oref1

Die Sensitivität wird auf Basis der Daten der vergangenen 8 Stunden oder seit dem letzten Katheterwechsel berechnet, falls er weniger als 8 Stunden her ist Kohlenhydrate (falls noch nicht absorbiert) werden nach der in den Einstellungen festgelegten Zeit abgeschnitten. Nur der Oref1 Algorithmus unterstützt unannounced Meals (UAM). Das heißt, Zeiten mit erkannten UAM werden bei der Sensitivitätsberechnung nicht berücksichtigt. Wenn du also SMB mit UAM verwendest, dann musst du den Oref1 Algorithmus auswählen, damit es gut läuft. Für weitere Informationen lies die [OpenAPS Oref1 Dokumentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html).

Die empfohlene Option ist „Oref1“: Sie ist die einzige, die UAM erkennen und mit [OpenAps SMB](#Open-APS-features-super-micro-bolus-smb) (dem neuesten Algorithmus) funktioniert.

## Mehrere Mahlzeiten gleichzeitig

Es macht einen großen Unterschied, ob du AAPS/Durchschnittliche Sensititvität oder Oref1 verwendest. Die Oref Plugins gehen davon aus, dass nur die Kohlenhydrate einer einzigen Mahlzeit abgebaut werden. Das bedeutet, dass der Abbau einer zweiten Mahlzeit erst dann beginnt, wenn die erste Mahlzeit vollständig abgebaut ist. AAPS mit durchschnittlicher Sensitivität beginnt direkt nach Eingabe der Kohlenhydrate mit deren Abbau. Falls mehr als eine Mahlzeit zu berücksichtigen ist, wird der minimale KH-Abbau entsprechend der Größe der Mahlzeit und der maximalen Absorption angepasst. Die minimale Absorption wird entsprechend höher im Vergleich zu den Oref Plugins.