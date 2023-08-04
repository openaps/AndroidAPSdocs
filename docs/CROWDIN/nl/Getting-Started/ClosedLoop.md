# Wat is een closed loop systeem?

```{image} ../images/autopilot.png
:alt: AAPS is als een automatische piloot
```

Een closed loop systeem combineert verschillende onderdelen om zo de zorg voor jouw diabetes makkelijker te maken. In haar boek [Automated Insulin Delivery](https://www.artificialpancreasbook.com/) noemt Dana M. Lewis, een van de grondleggers van de open-source-beweging, een ["automatische piloot voor je diabetes"](https://www.artificialpancreasbook.com/3.-getting-started-with-your-aps). Maar wat betekent dat?

**De automatische piloot in een vliegtuig**

De automatische piloot doet niet al het werk, hij zorgt er niet voor dat een piloot de gehele vlucht kan gaan zitten slapen. Het vergemakkelijkt wel het werk van de piloten. Het neemt hen de taak van het voortdurend besturen van het vliegtuig, uit handen. Hierdoor kan de piloot zijn aandacht richten op het in de gaten houden van het luchtruim en het aansturen van de automatische piloot.

De automatische piloot ontvangt signalen van verschillende sensoren, een computer vergelijkt die signalen met de instructies van de piloot en maakt dan de noodzakelijke aanpassingen. De piloot hoeft zich geen zorgen meer te maken over voortdurende kleine aanpassingen.

**Closed Loop Systeem**

Hetzelfde geldt voor een closed loop systeem. Het doet niet al het werk, je moet nog steeds aandacht aan je diabetes geven. Een closed loop systeem combineert de sensorgegevens van een CGM/FGM met jouw instellingen voor diabetesregulatie, zoals basaal, insulinegevoeligheidsfactor en koolhydraat ratio. Hieruit berekent het systeem behandelsuggesties en voert het voortdurende kleine aanpassingen uit om jouw bloedsuikers binnen jouw streefwaardes te houden en jou op die manier te ontzorgen. Hierdoor hou je tijd en energie over voor je leven 'naast' diabetes.

Net zoals je niet wilt vliegen in een vliegtuig waar alleen de automatische piloot vliegt zonder menselijk toezicht, helpt een closed loop systeem je met diabetes management, maar heeft het altijd jouw input nodig! ** Zelfs met een closed loop systeem kun je je diabetes niet gewoon 'vergeten'! **

Net zoals de automatische piloot afhankelijk is van de sensorwaarden en de aansturing van de piloot, heeft een closed loop goede invoer nodig, zoals CGM/FGM waardes, basaalwaardes, ISF en koolhydraat ratio om jou succesvol te ondersteunen.

## Open Source Closed Loop Systemen

Op dit moment zijn er drie grote open-source closed loop systemen beschikbaar:

### AndroidAPS (AAPS)

AndroidAPS wordt gedetailleerd beschreven in [deze documentatie](./WhatisAndroidAPS.html). Alle berekeningen en bediening gaan via een Android smartphone. Ook ontvangt de smartphone jouw sensorgegevens en stuurt deze jouw insulinepomp aan. Er is een sterke samenhang en samenwerking met OpenAPS (dezelfde algoritmes voor berekeningen worden gebruikt).

Compatibele [pompen](../Hardware/pumps.md) zijn:

- [DanaR](../Configuration/DanaR-Insulin-Pump.md) / [DanaRS & Dana-i](../Configuration/DanaRS-Insulin-Pump.html)
- [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
- [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
- [Diaconn G8](../Configuration/DiaconnG8.md)
- [Omnipod DASH](../Configuration/OmnipodDASH.md)
- [Omnipod Eros](../Configuration/OmnipodEros.md)
- bepaalde oudere modellen [Medtronic pompen](../Configuration/MedtronicPump.md)

### OpenAPS

[OpenAPS](https://openaps.readthedocs.io) was het eerste Open Source Closed Loop systeem. Het maakt gebruik van een kleine computer zoals Raspberry Pi of Intel Edison.

Te gebruiken pompen zijn:

- bepaalde oudere modellen Medtronic pompen

### Loop voor iOS

[Loop voor iOS ](https://loopkit.github.io/loopdocs/) is het Open Source Closed Loop Systeem dat te gebruiken is met Apple iPhones.

Te gebruiken pompen zijn:

- Omnipod DASH
- Omnipod Eros
- bepaalde oudere modellen Medtronic pompen
