# Empfindlichkeitserkennung und COB

* Aktuell gibt es drei Modelle zur Empfindlichkeitserkennung: 
  * Sensitivity Oref0
  * Sensitivity AAPS
  * Durchschnittliche Sensitivität

### Sensitivity Oref0

Ähnlich dem in der [Oref0 Dokumentation](https://openaps.readthedocs.io/en/2017-05-21/docs/walkthrough/phase-4/advanced-features.html) beschriebenen Oref0. Der Oref0-Algorythmus berechnet die Insulinempflindlichkeit auf Basis der vorangegangenen 24 Stunden. Kohlenhydrate (falls noch nicht absorbiert) werden nach einer bestimmten Zeit, die man einstellen kann, einfach abgeschnitten.

### Sensitivity AAPS

Die Empfindlichkeit wird wie bei Oref0 berechnet, aber du kannst einstellen wie weit der Algorithmus in die Vergangenheit "schaut". Die minimale Kohlenhydrat-Absorption wird ausgehend von der maximalen Kohlenhydrat-Absorption, die in den Vorgaben festgelegt werden kann, berechnet.

### Durchschnittliche Sensitivität

Die Empfindlichkeit wird als gewichtetes Mittel der Schwankungen berechnet. Neuere Schwankungen haben ein größeres Gewicht. Die minimale Kohlenhydrat-Absorption wird ausgehend von der maximalen Kohlenhydrat-Absorption, die in den Vorgaben festgelegt werden kann, berechnet. Dieser Algorithmus folgt Änderungen der Empfindlichkeit am schnellsten.

### COB Beispiele

Oref0 - nicht absorbierte Kohlenhydrate werden nach der eingestellten Zeit abgeschnitten

![COB nach oref0](../../images/cob_oref0.png)

AAPS, Durchschnittliche Sensitivität - Absorption wird so berechnet, dass nach der vorgegeben Zeit `COB == 0` gilt.

![COB nach AAPS](../../images/cob_aaps.png)

Falls die minimale Kohlenhydrat-Absorption statt einem aus den Schwankungen berechneten Wert genutzt wird, wird in der COB-Kurve ein grüner Punkt angezeigt.