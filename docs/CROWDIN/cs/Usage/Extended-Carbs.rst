Rozložené sacharidy / "eCarbs"
**************************************************
S běžnou léčbou pomocí inzulínové pumpy je rozložený bolus dobrý způsob, jak řešit tučná nebo jinak pomalu stravovaná jídla, která zvyšují hladinu glukózy v krvi déle, než je působnost inzulínu. Nicméně v rámci smyčky nedávají rozložené bolusy moc smysl (a způsobují technické potíže), protože to jsou v podstatě fixní vysoké TBR, což je proti hlavnímu principu smyčky, která bazální dávky přizpůsobuje dynamicky. For details see `extended bolus <../Usage/Extended-Carbs.html#extended-bolus>`_ below.

Potřeba řešit taková jídla však stále zůstává. To je důvod, proč AndroidAPS od verze 2.0 podporuje takzvané rozložené sacharidy neboli eCarbs.

eSacharady jsou sacharidy, jejichž působení se rozlévá do několika hodin. Pro standardní jídla s více sacharidy než tuky/bílkovinami je zadávání sacharidů dopředu (a snížení počátečního bolusu v případě podle potřeby) obvykle dostatečné řešení, aby se tak zabránilo příliš brzkému podání inzulínu.  Ale pro pomaleji vstřebávaná jídla, kde zadání všech sacharidů předem způsobí příliš velké IOB z SMB, mohou být použity eSacharidy, aby se přesněji simulovalo vstřebávání sacharidů (a jakýchkoliv ekvivalentů, které zadáte pro ostatní makroživiny). Výsledkem je přesnější simulace průběhu glykémie v krvi. Pomocí těchto informací může smyčka podávat SMB k těmto sacharidům po částech, což lze považovat za dynamický rozložený bolus (mělo by to fungovat také bez SMB, ale bude to pravděpodobně méně účinné).

eCarbs aren't limited to fatty / protein heavy meals: they can be also be used to help in any situation where there are influences that increase the blood sugar, e.g. other medication like corticosteroids.

To enter eCarbs, set a duration in the _Carbs_ dialog on the overview tab, the total carbs and optionally a time shift:

.. image:: ../images/eCarbs_Dialog.png
  :alt: Enter carbs

eSacharidy na hlavní stránce. Všimněte si sacharidů v závorkách v poli COB, které představují sacharidy v budoucnosti:

.. image:: ../images/eCarbs_Graph.png
  :alt: eCarbs in graph

Sacharidové vstupy, které jsou plánované v budoucnosti, jsou zbarvené tmavě oranžovou barvou na záložce ošetření:

.. image:: ../images/eCarbs_Treatment.png
  :alt: eCarbs in future in treatment tab


-----

A way to handle fat and protein with that feature is described here: `https://adriansloop.blogspot.co.at/2018/04/page-margin-0.html <https://adriansloop.blogspot.co.at/2018/04/page-margin-0.html>`_

-----

The recommended setup is to use the OpenAPS SMB APS plugin, with SMBs enabled as well as the _Enable SMB with COB_ preference being enabled.

A scenario e.g. for a Pizza might be to give a (partial) bolus up front via the _calculator_ and then use the _carbs_ button to enter the remaining carbs for a duration of 4-6 hours, starting after 1 or 2 hours. Budete to muset samozřejmě vyzkoušet, jaké hodnoty sedí právě vám. You might also carefully adjust the setting _max minutes of basal to limit SMB to_ to make the algorithm more or less aggressive.
Pro jídla s nízkým obsahem sacharidů a s vysokým obsahem tuků/bílkovin může být dostačující použít jenom eSacharidy bez ručních bolusů (viz blogový příspěvek výše).

Když jsou eSacharidy generovány, je také založena poznámka do ošetření, aby byly všechny uživatelské zásahy zdokumentované, aby bylo snazší opakovat a vylepšovat své postupy.

Prodloužený bolus
==================================================
As mentioned above extended or multiwave boluses do not really work in a closed loop environment. `See below <../Usage/Extended-Carbs.html#why-extended-boluses-wont-work-in-a-closed-loop-environment>`_ for details

Extended bolus and switch to open loop - Dana and Insight pump only
-----------------------------------------------------------------------------
Some people were asking for an option to use extended bolus in AAPS anyway as they wanted to treat special foods the way they are used to. 

That's why as of version 2.6 there is an option for an extended bolus for users of Dana and Insight pumps. 

* Closed loop will automatically be stopped and switched to open loop mode for the time running extended bolus. 
* Bolus units, remaining and total time will be shown on homescreen.
* On Insight pump extended bolus is *not available* if `TBR emulation <../Configuration/Accu-Chek-Insight-Pump.html#settings-in-aaps>`_ is used. 

.. image:: ../images/ExtendedBolus2_6.png
  :alt: Extended bolus in AAPS 2.6

Why extended boluses won't work in a closed loop environment
----------------------------------------------------------------------------------------------------
1. The loop determines that now 1.55U/h is to be delivered. Whether this is delivered as an extended bolus or TBR does not matter to the algorithm. In fact, some of the pumps use the extended bolus. What should happen then? Most pump drivers then stop the extended bolus -> You didn't even need to start it.
2. If you had the extended bolus as input, what should happen in the model?

   1. Should it be considered neutral together with the BR and looped on it? Then the loop should also be able to reduce the bolus if, for example, you get too low and all the "neutral" insulin is taken away?
   2. Should the extended bolus simply be added? So the loop should simply be allowed to continue? Even in the worst hypo? I don't think this is so good: A hypo is foreseen but it must not be prevented?
   
3. The IOB that the extended bolus builds up materializes after 5 minutes at the next run. Accordingly, the loop would give less basal. So not much changes... except that the possibility of hypo avoidance is taken.
