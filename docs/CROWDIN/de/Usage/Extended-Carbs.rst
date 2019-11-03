Verzögerte Kohlenhydrate / "eCarbs"
=====
Im Rahmen einer normalen Pumpen-Therapie sind verzögerte Boli ein guter Weg, um mit fettigen oder sonstigen langsam absorbierenden Mahlzeiten zurecht zu kommen, die die Glukosewerte im Blut länger erhöhen als das Insulin wirkt. Im Zusammenhang mit dem Loopen sind jedoch verzögerte Boli wenig sinnvoll (und werfen technische Schwierigkeiten auf), da sie im Grunde eine feste hohe temporäre Basalrate darstellen, was der normalen Funktionsweise des Loops - der die Basalraten dynamisch anpasst - widerspricht. For details see `extended bolus <../Usage/Extended-Carbs.html#extended-bolus>`_ below.

Es gibt aber trotzdem das Bedürfnis, mit solchen Mahlzeiten umzugehen. Deshalb unterstützt AndroidAPS ab der Version 2.0 so genannte erweiterte Kohlenhydrate oder eCarbs.

eCarbs sind Kohlenhydrate, die sich über mehrere Stunden verteilen. Bei einer Standardmahlzeit, die mehr Kohlenhydrate enthält als Fett/Eiweiß, ist die Eingabe der Kohlenhydrate vor dem Verzehr (ggf. unter Reduzierung des Mahlzeiten-Bolus) normalerweise ausreichend, um eine zu frühe Insulinabgabe zu verhindern.  Aber bei langsamer absorbierenden Mahlzeiten, bei denen eine auf einmal eingegebene Kohlenhydratmenge dazu führen würde, dass der SMB zu viel IOB aufbaut, können eCarbs verwendet werden, um besser zu simulieren, wie die Kohlenhydrate (und alle anderen blutzuckersteigernden Faktoren) wirklich absorbiert werden und sich auf den Blutzuckerspiegel auswirken. Mit diesen Informationen kann der Loop den SMB zur Bewältigung dieser Kohlenhydrate besser einsetzen, was als eine Art dynamischer verzögerter Bolus zu sehen ist (dies sollte auch ohne SMB funktionieren, ist dann aber wahrscheinlich nicht so effektiv).

eCarbs aren't limited to fatty / protein heavy meals: they can be also be used to help in any situation where there are influences that increase the blood sugar, e.g. other medication like corticosteroids.

To enter eCarbs, set a duration in the _Carbs_ dialog on the overview tab, the total carbs and optionally a time shift:

.. image:: ../images/eCarbs_Dialog.png
  :alt: Enter carbs

Die eCarbs auf dem Homescreen, beachte die Kohlenhydrate in Klammern im COB-Feld, was die für die Zukunft verbliebenen Kohlenhydrate zeigt:

.. image:: ../images/eCarbs_Graph.png
  :alt: eCarbs in graph

Kohlenhydrat-Einträge, die in der Zukunft liegen, sind auf dem Behandlungen-Reiter dunkelorange:

.. image:: ../images/eCarbs_Treatment.png
  :alt: eCarbs in future in treatment tab


-----

A way to handle fat and protein with that feature is described here: `https://adriansloop.blogspot.co.at/2018/04/page-margin-0.html <https://adriansloop.blogspot.co.at/2018/04/page-margin-0.html>`_

-----

The recommended setup is to use the OpenAPS SMB APS plugin, with SMBs enabled as well as the _Enable SMB with COB_ preference being enabled.

A scenario e.g. for a Pizza might be to give a (partial) bolus up front via the _calculator_ and then use the _carbs_ button to enter the remaining carbs for a duration of 4-6 hours, starting after 1 or 2 hours. Du musst natürlich selbst ausprobieren, welche konkreten Werte bei dir am besten funktionieren. You might also carefully adjust the setting _max minutes of basal to limit SMB to_ to make the algorithm more or less aggressive.
Bei Low-Carb-Ernährung und fett-/eiweißreichen Mahlzeiten reicht es möglicherweise aus, nur eCarbs ohne manuellem Mahlzeitenbolus einzugeben (mehr dazu im Blogbeitrag oben).

Wenn eCarbs eingegeben werden, wird im Careportal automatisch eine Notiz angelegt, damit es einfacher ist, die Eingaben zu überprüfen und zu verbessern.

Verzögerter Bolus
=====
As mentioned above extended or multiwave boluses do not really work in a closed loop environment. Therefore there is no option to issue an extended bolus in AndroidAPS. Here's why:

1. The loop determines that now 1.55U/h is to be delivered. Whether this is delivered as an extended bolus or TBR does not matter to the algorithm. In fact, some of the pumps use the extended bolus. What should happen then? Most pump drivers then stop the extended bolus -> You didn't even need to start it.
2. If you had the extended bolus as input, what should happen in the model?

   1. Should it be considered neutral together with the BR and looped on it? Then the loop should also be able to reduce the bolus if, for example, you get too low and all the "neutral" insulin is taken away?
   2. Should the extended bolus simply be added? So the loop should simply be allowed to continue? Even in the worst hypo? I don't think this is so good: A hypo is foreseen but it must not be prevented?
   
3. The IOB that the extended bolus builds up materializes after 5 minutes at the next run. Accordingly, the loop would give less basal. So not much changes... except that the possibility of hypo avoidance is taken.
