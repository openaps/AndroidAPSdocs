COB berekening
**************************************************

Hoe berekent AndroidAPS de COB-waarde?
==================================================

Oref1
--------------------------------------------------

Niet-opgenomen koolhydraten worden afgekapt (naar nul) na bepaalde tijd.

.. image:: ../images/cob_oref0_orange_II.png
  :alt: Oref1

AAPS, Gewogen gemiddelde
--------------------------------------------------

de absorptie wordt berekend met 'COB == 0' na de opgegeven tijd

.. image:: ../images/cob_aaps2_orange_II.png
  :alt: AAPS, Gewogen gemiddelde

Als de door jou ingestelde minimale koolhydraten absorptie (min_5min_carbimpact) wordt gebruikt in plaats van de waarde berekend op basis van afwijkingen, verschijnt een oranje stip op jouw COB grafiek.

Detectie van verkeerde COB-waarden
==================================================

AAPS warns you if you are about to bolus with COB from a previous meal and the algorithm thinks that current COB calculation could be wrong. In dat geval zie je een extra hint op het bevestigingsscherm nadat je op OK hebt gedrukt in de bolus wizard. 

Hoe detecteert AndroidAPS verkeerde COB waarden? 
--------------------------------------------------

Normaalgesproken detecteert AAPS carb absorptie dmv BG afwijkingen. In het geval je koolhydraten hebt ingevoerd maar AAPS ziet niet de verwachte BG stijging, dan zal hij gebruik maken van de `min_5m_carbimpact <.. Configuratie/Config-Builder.html?highlight=min_5m_carbimpact#opname-instellingen>`_ methode om de absorptie te berekenen (als een soort ' vangnet' of ' fallback' in het Engels). Aangezien deze methode slechts de minimale koolhydraten absorptie berekent zonder rekening te houden met BG afwijkingen, kan dit leiden tot onjuiste COB waarden.

.. image:: ../images/Calculator_SlowCarbAbsorbtion.png
  :alt: Detectie van verkeerde COB waarden

In de bovenstaand screenshot werd de koolhydraat absorptie 41% van de tijd op wijze berekend op basis van de min_5m_carbimpact, in plaats van de waarde die is gedetecteerd dmv afwijkingen.  Dit betekent dat je misschien minder koolhydraten aan boord hebt dan berekend door het algoritme. 

Hoe om te gaan met deze waarschuwing? 
--------------------------------------------------

- Overwegen om de behandeling te annuleren - druk op Annuleer in plaats van OK.
- Gebruik de boluscalculator opnieuw maar haal het vinkje bij COB weg.
- Als je denkt dat je een correctie bolus nodig hebt, voer hem handmatig in.
- Pas in ieder geval op dat je geen overdosis geeft!

Waarom detect het algoritme COB niet goed? 
--------------------------------------------------

- Misschien heb je de hoeveelheid koolhydraten overschat bij het invoeren.  
- Activiteit / sport na je de vorige maaltijd
- KH ratio moet worden aangepast
- Waarde voor min_5m_carbimpact is verkeerd (aanbevolen is 8 met SMB, 3 met AMA)

Handmatige correctie van ingevoerde koolhydraten
==================================================
If you over- or underestimated carbs you can correct this though treatments tab and actions tab / menu as described `here <../Getting-Started/Screenshots.html#carb-correction>`_.
