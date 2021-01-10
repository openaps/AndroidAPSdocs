Wat is een closed loop systeem?
**************************************************

.. image:: ../images/autopilot.png
  :alt: AAPS is als een automatische piloot

Een closed loop systeem combineert verschillende onderdelen om zo de zorg voor jouw diabetes makkelijker te maken. 
In haar boek `Automated Insulin Delivery <https://www.artificialpancreasbook.com/>`_ noemt Dana M. Lewis, een van de oprichters van de open source closed loop beweging, het een `"automatische piloot voor jouw diabetes" <https://www.artificialpancreasbook.com/3.-getting-started-with-your-aps>`_. Maar wat betekent dat?

**De automatische piloot in een vliegtuig**

De automatische piloot doet niet al het werk, hij zorgt er niet voor dat een piloot de gehele vlucht kan gaan zitten slapen. Het vergemakkelijkt wel het werk van de piloten. Het neemt hen de taak van het voortdurend besturen van het vliegtuig, uit handen. Hierdoor kan de piloot zijn aandacht richten op het in de gaten houden van het luchtruim en het aansturen van de automatische piloot.

De automatische piloot ontvangt signalen van verschillende sensoren, een computer vergelijkt die signalen met de instructies van de piloot en maakt dan de noodzakelijke aanpassingen. De piloot hoeft zich geen zorgen meer te maken over voortdurende kleine aanpassingen.

**Closed Loop Systeem**

Hetzelfde geldt voor een closed loop systeem. Het doet niet al het werk, je moet nog steeds aandacht aan je diabetes geven. Een closed loop systeem combineert de sensorgegevens van een CGM/FGM met jouw instellingen voor diabetesregulatie, zoals basaal, insulinegevoeligheidsfactor en koolhydraat ratio. Hieruit berekent het systeem behandelsuggesties en voert het voortdurende kleine aanpassingen uit om jouw bloedsuikers binnen jouw streefwaardes te houden en jou op die manier te ontzorgen. Hierdoor hou je tijd en energie over voor je leven 'naast' diabetes.

Net zoals je niet wilt vliegen in een vliegtuig waar alleen de automatische piloot vliegt zonder menselijk toezicht, helpt een closed loop systeem je met diabetes management, maar heeft het altijd jouw input nodig! **Zelfs met een closed loop kun je niet zomaar je diabetes vergeten.**

Net zoals de automatische piloot afhankelijk is van de sensorwaarden en de aansturing van de piloot, heeft een closed loop goede invoer nodig, zoals CGM/FGM waardes, basaalwaardes, ISF en koolhydraat ratio om jou succesvol te ondersteunen.


Open Source Closed Loop Systemen
==================================================
Op dit moment zijn er drie grote open-source closed loop systemen beschikbaar:

AndroidAPS (AAPS)
--------------------------------------------------
AndroidAPS wordt in detail beschreven in `deze documentatie <./WhatisAndroidAPS.html>`_. Alle berekeningen en bediening gaat via een Android smartphone. Ook ontvangt de smartphone jouw sensorgegevens en stuurt jouw insulinepomp aan. Het is gebaseerd op OpenAPS (ze they share algorithms).

Te gebruiken `pompen <../Hardware/pumps.html>`_ zijn:

* `DanaR <../Configuration/DanaR-Insulin-Pump.html>`_ / `DanaRS <../Configuration/DanaRS-Insulin-Pump.html>`_
* `Accu-Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_
* `Accu-Chek Insight <../Configuration/Accu-Chek-Insight-Pump.html>`_
* `Omnipod Eros <../Configuration/OmnipodEros.html>`_
* some old `Medtronic pumps <../Configuration/MedtronicPump.html>`_

OpenAPS
--------------------------------------------------
`OpenAPS <https://openaps.readthedocs.io>`_ was het eerste Open Source Closed Loop Systeem. Het maakt gebruik van een kleine computer zoals Raspberry Pi of Intel Edison.

Te gebruiken pompen zijn:

* some old Medtronic pumps

Loop voor iOS
--------------------------------------------------
`Loop voor iOS <https://loopkit.github.io/loopdocs/>`_ is het Open Source Closed Loop Systeem te gebruiken met Apple iPhones.

Te gebruiken pompen zijn:

* Omnipod Eros
* some old Medtronic pumps
