# Berechnung der aktiven Kohlenhydrate (COB)

## Wie berechnet AAPS die aktiven Kohlenhydrate?

### Oref1

Nicht absorbierte Kohlenhydrate werden nach der eingestellten Zeit verworfen, werden also bei Berechnungen nicht mehr berücksichtigt

```{image} ../images/cob_oref0_orange_II.png
:alt: Oref1
```

### AAPS, WeightedAverage

absorption is calculated to have `COB == 0` after specified time

```{image} ../images/cob_aaps2_orange_II.png
:alt: AAPS, WeightedAverage
```

Falls die minimale Kohlenhydrat-Resorption (min_5m_carbimpact) statt einem aus den Entwicklungen des BZ berechneten Wert genutzt wird, wird in der COB-Kurve ein orangener Punkt angezeigt.

(COB-calculation-detection-of-wrong-cob-values)=
## Erkennung Fehlerhafter COB-Werte

AAPS warnt Dich, wenn Du mit aktiven Kohlenhydraten von einer vorherigen Mahlzeit bolen willst und der Algorithmus davon ausgeht, dass die aktuelle COB-Berechnung falsch sein könnte. In diesem Fall gibt es einen zusätzlichen Hinweis in der Bestätigungsanzeige nach der Nutzung des Bolus-Assistenten.

### Wie erkennt AndroidAPS falsche COB-Werte?

Normalerweise erkennt AAPS die Kohlenhydrat-Resorption auf Basis der Entwicklung der BZ-Werte. In case you entered carbs but AAPS cannot see their estimated absorption through BG deviations, it will use the [min_5m_carbimpact](../Configuration/Config-Builder.md?highlight=min_5m_carbimpact#absorption-settings) method to calculate the absorption instead (so called 'fallback'). Da diese Methode nur die minimale Kohlenhydrat-Resorption ohne Berücksichtigung von BZ-Änderungen berechnet, kann dies zu falschen COB-Werten führen.

```{image} ../images/Calculator_SlowCarbAbsorption.png
:alt: Hinweis fehlerhafte COB Werte
```

In der Abbildung oben wurde 41% der Kohlenhydrat-Resorption durch min_5m_carbimpact statt des Wertes, der bei Abweichungen festgestellt wurde, mathematisch berechnet.  Das bedeutet, dass evtl. weniger Kohlenhydrate noch im Körper aktiv sind als der Algorithmus berechnet hat.

### Wie kann man mit dieser Warnung umgehen?

- Consider to cancel the treatment - press Cancel instead of OK.
- Calculate your upcoming meal again with bolus wizard leaving COB unticked.
- In case you are sure you need a correction bolus, enter it manually.
- In any case be careful not to overdose!

### Warum erkennt der Algorithmus COB nicht richtig?

- Maybe you overestimated carbs when entering them.
- Activity / exercise after your previous meal
- I:C needs adjustment
- Value for min_5m_carbimpact is wrong (recommended is 8 with SMB, 3 with AMA)

## Manuelle Korrektur der eingegebenen Kohlenhydrate

If you over- or underestimated carbs you can correct this though treatments tab and actions tab / menu as described [here](Screenshots-carb-correction).
