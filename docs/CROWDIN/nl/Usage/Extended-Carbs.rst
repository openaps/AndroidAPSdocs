Vertraagde koolhydraten / "eCarbs"
**************************************************
Bij reguliere pomptherapie zijn vertraagde bolussen / multiwave bolussen handig voor vette maaltijden (pizza, pasta, pannenkoeken etc) die je bloedglucose lange tijd laten stijgen, langer dan de insuline bij een normale bolus werkzaam zou zijn. In een closed loop is dat echter niet zo zinvol (en geeft het technische problemen) omdat vertraagde/multiwave bolussen door de pomp worden uitgevoerd als een langdurige en vooraf gedefinieerde hoge basaal. Dat conflicteert met de loop, die de basaalstanden juist dynamisch aanpast. Voor meer informatie, zie `vertraagde bolus <../Usage/Extended-Carbs.html#vertraagde-bolus>`_ hieronder.

En dus moet de loop op een andere manier omgaan met dit soort maaltijden. Daarom is in AndroidAPS vanaf versie 2.0 een optie ingebouwd die "eCarbs" heet. Dat staat voor extended Carbs (vertraagde koolhydraten).

eCarbs zijn koolhydraten die over meerdere uren worden uitgespreid. Voor standaard maaltijden met meer koolhydraten dan vet/eiwit, is het gebruik van eCarbs niet persé nodig. Daarbij is het voldoende om een deel van de koolhydraten in te voeren via de bolus calculator (daarvoor wordt dan meteen gebolust), en het resterende deel van de koolhydraten in te voeren via de Koolhydraten knop (daarvoor geeft de loop gedurende een langere periode SMB's af, gebaseerd op de BG stijging die hij ziet). Dit voorkomt een al te snelle insulineafgifte en dus een hypo na de maaltijd. <br>  Maar voor langzamer absorberende maaltijden kunnen beter wel eCarbs worden gebruikt. Anders zou (zeker bij gebruik van SMB) de IOB veel te snel oplopen terwijl de maaltijd je BG slechts langzaam laat stijgen, met een hypo als resultaat. Dankzij eCarbs wordt veel beter gesimuleerd hoe de koolhydraten (en evt. ook alle koolhydraat-equivalenten die je invoert voor vetten/eiwitten) worden geabsorbeerd en hoe die invloed hebben op je BG. Met deze informatie kan de loop geleidelijk aan SMB's afgeven om die koolhydraten aan te pakken. Deze methode zou je als een dynamische vorm van een vertraagde/multiwave bolus kunnen zien. (Opmerking: we gaan er hierbij vanuit dat je SMB's gebruikt, dit zou ook moeten werken zonder SMB's, maar is waarschijnlijk minder effectief).

Het nut van eCarbs is niet beperkt tot vette / eiwitrijke maaltijden. Ze zijn ook handig als door andere invloeden de bloedglucose gedurende meerdere uren flink stijgt, bijvoorbeeld bij medicijnen zoals corticosteroïden.

Voor het invoeren van eCarbs gebruik je de knop Koolhydraten op het Overzicht-scherm. Vul de duur in, het aantal koolhydraten en desgewenst een timeshift. In dit voorbeeld zie je dat iemand 25 gram koolhydraten wil 'uitsmeren' tussen 15:43 en 17:43 (het screenshot is om 14:43 gemaakt):

.. image:: ../images/eCarbs_Dialog.png
  :alt: Koolhydraten invoeren

Je ziet de eCarbs in de grafiek terug als kleine beetjes van 3 gram in de toekomst. En je ziet de 25 gram koolhydraten bij COB staan, tussen haakjes omdat het toekomstige koolhydraten zijn:

.. image:: ../images/eCarbs_Graph.png
  :alt: eCarbs in grafiek

Op de Behandelingen tab zie je koolhydraten staan, ze zijn donker oranje omdat ze in de toekomst zijn:

.. image:: ../images/eCarbs_Treatment.png
  :alt: vertraagde koolhydraten in de Behandelingen tab


-----

Hoe je vertraagde koolhydraten gebruikt voor een maaltijd met vet en eiwit wordt hier beschreven: `https://adriansloop.blogspot.co.at/2018/04/page-margin-0.html <https://adriansloop.blogspot.co.at/2018/04/page-margin-0.html>`_

-----

Voor onderstaand voorbeeld wordt aangeraden om OpenAPS SMB APS te gebruiken, met SMB ingeschakeld en de instelling SMB met koolhydraten ingeschakeld te hebben.

Neem nou bijvoorbeeld een pizza, daarbij kun je een gedeeltelijke bolus voor de maaltijd via de bolus calculator geven en via de knop koolhydraten de resterende koolhydraten gedurende 4 a 6 uur, te laten beginnen na 1 of 2 uur. Je zult natuurlijk moeten uitproberen welke precieze waarden voor jou werken. Hierbij kun je ook (in kleine, verstandige stapjes) variëren met de instelling 'max aantal minuten basaal om de SMB te limiteren tot' om het algoritme agressiever/minder agressief te laten zijn.
Voor maaltijden met nauwelijks koolhydraten en een hoog vet/eiwitgehalte kan het genoeg zijn om alleen eCarbs te gebruiken en geen bolus (zie de blogpost hierboven).

Iedere keer dat je eCarbs invoert, wordt er in jouw Careportal automatisch een opmerking toegevoegd. Hierdoor kun je de eerdere keren gemakkelijk terugvinden, zodat je jouw aanpak kunt evalueren en verbeteren voor de volgende keer. Of gewoon herhalen wat je eerder deed, als dat voor jou goed werkte.

Vertraagde bolus
==================================================
Zoals hierboven vermeld, werken vertraagde of multiwave bolussen niet echt in een closed loop. `See below <../Usage/Extended-Carbs.html#why-extended-boluses-wont-work-in-a-closed-loop-environment>`_ for details

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
