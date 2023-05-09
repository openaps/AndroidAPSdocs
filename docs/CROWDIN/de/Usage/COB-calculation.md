# Berechnung der aktiven Kohlenhydrate (COB)

## How does AAPS calculate the COB value?

When carbs are entered as part of a meal or correction, AAPS adds them to the current carbs on board (COB). AAPS then absorbs (removes) carbs based on observed deviations to BG values. The rate of absorption depends on the carb sensitivity factor. This is not a profile value but is calculated as ISF/IC and is how many mg/dl 1g of carbs will raise your BG.

For example, if your profile ISF is 100 and your IC is 5, your CSF would be 20. For every 20 mg/dl your BG goes up, 1g of carbs are absorbed by AAPS. Positive IOB also effects this calculation. So, if AAPS expected your BG to go down by 20 mg/dl because of IOB and it instead stayed flat, it would also absorb 1g of carbs.

Carbs will also be absorbed via the methods described below based on what sensitivity algorithm is used.

### Oref1

Nicht absorbierte Kohlenhydrate werden nach der eingestellten Zeit verworfen, werden also bei Berechnungen nicht mehr berücksichtigt

```{image} ../images/cob_oref0_orange_II.png
:alt: Oref1
```

### AAPS, WeightedAverage

Die Kohlenhydratresorption wird auf Basis der angegebenen Zeit berechnet, so dass nach deren Ablauf  `COB == 0` gilt.

```{image} ../images/cob_aaps2_orange_II.png
:alt: AAPS, WeightedAverage
```

Falls die minimale Kohlenhydrat-Resorption (min_5m_carbimpact) statt einem aus den Entwicklungen des BZ berechneten Wert genutzt wird, wird in der COB-Kurve ein orangener Punkt angezeigt.

(COB-calculation-detection-of-wrong-cob-values)=
## Erkennung Fehlerhafter COB-Werte

AAPS warnt Dich, wenn Du mit aktiven Kohlenhydraten von einer vorherigen Mahlzeit bolen willst und der Algorithmus davon ausgeht, dass die aktuelle COB-Berechnung falsch sein könnte. In diesem Fall gibt es einen zusätzlichen Hinweis in der Bestätigungsanzeige nach der Nutzung des Bolus-Assistenten.

### How does AAPS detect wrong COB values?

Normalerweise erkennt AAPS die Kohlenhydrat-Resorption auf Basis der Entwicklung der BZ-Werte. Für den Fall, dass Du Kohlenhydrate eingegeben hast, aber AAPS deren erwartete Absorption nicht durch BZ-Veränderungen erkennen kann, wird die Methode \` min_5m_carbimpact \<../Configuration/Config-Builder.md?highlight=min_5m_carbimpact#resorptions-einstellungen> \` _ verwendet, um die Absorption zu berechnen (so genanntes 'Fallback '). Da diese Methode nur die minimale Kohlenhydrat-Resorption ohne Berücksichtigung von BZ-Änderungen berechnet, kann dies zu falschen COB-Werten führen.

```{image} ../images/Calculator_SlowCarbAbsorption.png
:alt: Hinweis fehlerhafte COB Werte
```

In der Abbildung oben wurde 41% der Kohlenhydrat-Resorption durch min_5m_carbimpact statt des Wertes, der bei Abweichungen festgestellt wurde, mathematisch berechnet.  Das bedeutet, dass evtl. weniger Kohlenhydrate noch im Körper aktiv sind als der Algorithmus berechnet hat.

### Wie kann man mit dieser Warnung umgehen?

- Erwäge, die Insulinabgabe abzubrechen - drücke Abbrechen statt OK.
- Berechne die Mahlzeit erneut mit dem Bolus-Assistenten, entferne aber den Haken bei COB.
- Falls Du Dir sicher bist, einen Korrekturbolus zu benötigen, gib ihn manuell ein.
- Sei in jedem Fall vorsichtig, um nicht zu viel Insulin abzugeben!

### Warum erkennt der Algorithmus COB nicht richtig?

- Vielleicht hast Du die Kohlenhydrate der vorangegangenen Mahlzeit überschätzt.
- Sportliche Aktivität oder Bewegung nach der vorangegangenen Mahlzeit.
- - Deine I:C-Einstellung ('KH-Faktor') sollte angepasst werden.
- Dein Wert für min_5m_carbimpact ist falsch (für SMB wird 8 empfohlen, 3 für AMA).

## Manuelle Korrektur der eingegebenen Kohlenhydrate

Wenn Du die Kohlenhydratmenge falsch eingeschätzt hast, kannst Du diese über den AKTIONEN-Tab bzw. das Menü wie [hier](Screenshots-carb-correction) beschrieben korrigieren.
