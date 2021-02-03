Berechnung der aktiven Kohlenhydrate (COB)
**************************************************

Wie berechnet AAPS die aktiven Kohlenhydrate?
==================================================

Oref1
--------------------------------------------------

Nicht absorbierte Kohlenhydrate werden nach der eingestellten Zeit verworfen, werden also bei Berechnungen nicht mehr berücksichtigt

.. image:: ../images/cob_oref0_orange_II.png
  :alt: Oref1

AAPS, WeightedAverage
--------------------------------------------------

Die Kohlenhydratresorption wird auf Basis der angegebenen Zeit berechnet, so dass nach deren Ablauf  `COB = 0` gilt.

.. image:: ../images/cob_aaps2_orange_II.png
  :alt: AAPS, WeightedAverage

Falls die minimale Kohlenhydrat-Resorption (min_5m_carbimpact) statt einem aus den Entwicklungen des BZ berechneten Wert genutzt wird, wird in der COB-Kurve ein orangener Punkt angezeigt.

Erkennung Fehlerhafter COB-Werte
==================================================

AAPS warnt Dich, wenn Du mit aktiven Kohlenhydraten von einer vorherigen Mahlzeit bolen willst und der Algorithmus davon ausgeht, dass die aktuelle COB-Berechnung falsch sein könnte. In diesem Fall gibt es einen zusätzlichen Hinweis in der Bestätigungsanzeige nach der Nutzung des Bolus-Assistenten. 

Wie erkennt AndroidAPS falsche COB-Werte? 
--------------------------------------------------

Normalerweise erkennt AAPS die Kohlenhydrat-Resorption auf Basis der Entwicklung der BZ-Werte. Für den Fall, dass Du Kohlenhydrate eingegeben hast, aber AAPS deren erwartete Absorption nicht durch BZ-Veränderungen erkennen kann, wird die Methode ` min_5m_carbimpact <../Configuration/Config-Builder.html?highlight=min_5m_carbimpact#resorptions-einstellungen> ` _ verwendet, um die Absorption zu berechnen (so genanntes 'Fallback '). Da diese Methode nur die minimale Kohlenhydrat-Resorption ohne Berücksichtigung von BZ-Änderungen berechnet, kann dies zu falschen COB-Werten führen.

.. image:: ../images/Calculator_SlowCarbAbsorbtion.png
  :alt: Hinweis fehlerhafte COB Werte

In der Abbildung oben wurde 41% der 1Kohlenhydrat-Resorption durch min_5m_carbimpact statt des Wertes, der bei Abweichungen festgestellt wurde, mathematisch berechnet.  Das bedeutet, dass evtl. weniger Kohlenhydrate noch im Körper aktiv sind als der Algorithmus berechnet hat. 

Wie kann man mit dieser Warnung umgehen? 
--------------------------------------------------

- Erwäge, die Insulinabgabe abzubrechen - drücke Abbrechen statt OK.
- Berechne die Mahlzeit erneut mit dem Bolus-Assistenten, entferne aber den Haken bei COB.
- Falls Du Dir sicher bist, einen Korrekturbolus zu benötigen, gib ihn manuell ein.
- Sei in jedem Fall vorsichtig, um nicht zu viel Insulin abzugeben!

Warum erkennt der Algorithmus COB nicht richtig? 
--------------------------------------------------

- Vielleicht hast Du die Kohlenhydrate der vorangegangenen Mahlzeit überschätzt.  
- Sportliche Aktivität oder Bewegung nach der vorangegangenen Mahlzeit.
- Deine I:C-Einstellung ("BE-Faktor") sollte angepasst werden.
- Dein Wert für min_5m_carbimpact ist falsch (für SMB wird 8 empfohlen, 3 für AMA).

Manuelle Korrektur der eingegebenen Kohlenhydrate
==================================================
Wenn Du die Menge der Kohlenhydrate über- oder unterschätzt hast, kannst Du diese über den Aktionen-Tab / Menü wie `hier beschrieben <../Getting-Started/Screenshots.html#kohlenhydrat-korrektur>`_korrigieren.
