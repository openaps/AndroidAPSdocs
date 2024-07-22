# Berechnung der aktiven Kohlenhydrate (COB)

## Wie berechnet AAPS die aktiven Kohlenhydrate?

Wenn Kohlenhydrate als Teil einer Mahlzeit oder einer Korrektur eingegeben werden, fügt AAPS sie den aktiven Kohlenhydraten (Carbs on Bord - COB) hinzu. AAPS absorbiert (reduziert) dann Kohlenhydrate basierend auf beobachteten Abweichungen zu den Glukosewerten. Die Absorptionsrate hängt vom Kohlenhydratempfindlichkeitsfaktor (carb sensitivity) ab. Dies ist kein Profilwert, sondern wird als ISF/IC berechnet und gibt an, wieviel Dein Glukosewert (in mg/dl) durch 1g Kohlenhydrate erhöht.

Die Formel lautet: `absorbed_carbs = Abweichung * ic / isf` Das bedeutet:
* Eine Erhöhung des IC (Mahlzeitenfaktors) wird die in 5 Minuten verstoffwechselte Kohlenhydratmenge erhöhen und am Ende zu einer Verkürzung der Zeit führen, die benötigt wird, um die Kohlenhydrate vollständig aufzunehmen
* Eine Erhöhung des ISF (Insulin-Empfindlichkeit) wird die in 5 Minuten verstoffwechselte Kohlenhydratmenge reduzieren und am Ende zu einer Verlängerung Absorbitionszeit führen
* Eine prozentuale Änderung des Profils erhöht/senkt beide Werte, und hat daher keinen Einfluss auf die Kohlenhydrat-Absorbitionszeit

Beispiel: Wenn der ISF 100 in Deinem Profil von Dir hinterlegt worden ist und der IC 5 ist, ergibt sich ein KH-Sensitivitäts-Faktor (CSF) von 20. Für jeden Glukosewert-Anstieg um 20 mg/dl, reduziert AAPS die Kohlenhydrate um 1g. Positives IOB (aktives Insulin) fließt ebenfalls in die Berechnung ein. Wenn AAPS damit rechnet, dass dein Glukosewert wegen aktiven Insulins um 20 mg/dl sinken wird und der Wert stattdessen unverändert bleibt, würden 1g Kohlenhydrate absorbiert.

Über die unten beschriebenen Verfahren werden ebenfalls Kohlenhydrate, je nach gewähltem Sensitvitäts-Algorithmus, reduziert .

### Oref1

Nicht absorbierte Kohlenhydrate werden nach der eingestellten Zeit verworfen, werden also bei Berechnungen nicht mehr berücksichtigt

![Oref1](../images/cob_oref0_orange_II.png)

### AAPS, WeightedAverage

Die Kohlenhydratresorption wird auf Basis der angegebenen Zeit berechnet, so dass nach deren Ablauf  `COB == 0` gilt.

![AAPS, WheitedAverage](../images/cob_aaps2_orange_II.png)

Falls die minimale Kohlenhydrat-Resorption (min_5m_carbimpact) statt einem aus den Entwicklungen des BZ berechneten Wert genutzt wird, wird in der COB-Kurve ein orangener Punkt angezeigt.

(COB-calculation-detection-of-wrong-cob-values)=

## Erkennung Fehlerhafter COB-Werte

AAPS warnt Dich, wenn Du mit aktiven Kohlenhydraten von einer vorherigen Mahlzeit bolen willst und der Algorithmus davon ausgeht, dass die aktuelle COB-Berechnung falsch sein könnte. In diesem Fall gibt es einen zusätzlichen Hinweis in der Bestätigungsanzeige nach der Nutzung des Bolus-Assistenten.

### Wie erkennt AAPS falsche COB-Werte?

Normalerweise erkennt AAPS die Kohlenhydrat-Resorption auf Basis der Entwicklung der BZ-Werte. Für den Fall, dass Du Kohlenhydrate eingegeben hast, aber AAPS deren erwartete Absorption nicht durch BZ-Veränderungen erkennen kann, wird die Methode \` min_5m_carbimpact \<../Configuration/Config-Builder.md?highlight=min_5m_carbimpact#resorptions-einstellungen> \` _ verwendet, um die Absorption zu berechnen (so genanntes 'Fallback '). Da diese Methode nur die minimale Kohlenhydrat-Resorption ohne Berücksichtigung von BZ-Änderungen berechnet, kann dies zu falschen COB-Werten führen.

![Hinweis fehlerhafte COB Werte](../images/Calculator_SlowCarbAbsorption.png)

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
