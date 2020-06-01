Verzögerte Kohlenhydrate / "eCarbs"
**************************************************
Im Rahmen einer normalen Pumpen-Therapie sind verzögerte Boli ein guter Weg, um mit fettigen oder sonstigen langsam absorbierenden Mahlzeiten zurecht zu kommen, die die Glukosewerte im Blut länger erhöhen als das Insulin wirkt. Im Zusammenhang mit dem Loopen sind jedoch verzögerte Boli wenig sinnvoll (und werfen technische Schwierigkeiten auf), da sie im Grunde eine feste hohe temporäre Basalrate darstellen, was der normalen Funktionsweise des Loops - der die Basalraten dynamisch anpasst - widerspricht. Weitere Details dazu unten auf dieser Seite im Bereich `Verzögerter Bolus <../Usage/Extended-Carbs.html#verzogerter-bolus>`_.

Es gibt aber trotzdem das Bedürfnis, mit solchen Mahlzeiten umzugehen. Deshalb unterstützt AndroidAPS ab der Version 2.0 so genannte erweiterte Kohlenhydrate oder eCarbs.

eCarbs sind Kohlenhydrate, die sich über mehrere Stunden verteilen. Bei einer Standardmahlzeit, die mehr Kohlenhydrate enthält als Fett/Eiweiß, ist die Eingabe der Kohlenhydrate vor dem Verzehr (ggf. unter Reduzierung des Mahlzeiten-Bolus) normalerweise ausreichend, um eine zu frühe Insulinabgabe zu verhindern.  Aber bei langsamer absorbierenden Mahlzeiten, bei denen eine auf einmal eingegebene Kohlenhydratmenge dazu führen würde, dass der SMB zu viel IOB aufbaut, können eCarbs verwendet werden, um besser zu simulieren, wie die Kohlenhydrate (und alle anderen blutzuckersteigernden Faktoren) wirklich absorbiert werden und sich auf den Blutzuckerspiegel auswirken. Mit diesen Informationen kann der Loop den SMB zur Bewältigung dieser Kohlenhydrate besser einsetzen, was als eine Art dynamischer verzögerter Bolus zu sehen ist (dies sollte auch ohne SMB funktionieren, ist dann aber wahrscheinlich nicht so effektiv).

eCarbs beschränken sich nicht auf fett-/eiweißlastige Mahlzeiten: sie können auch eingesetzt werden, um in anderen Situationen zu helfen, in denen es blutzuckererhöhende Einflüsse gibt, z.B. andere Medikamente wie Kortison.

Um eCarbs einzugeben, musst du auf dem Homescreen im Dialogfeld "Kohlenhydrate" die Dauer, die Kohlenhydratmenge und optional eine Zeitverschiebung festlegen:

.. image:: ../images/eCarbs_Dialog.png
  :alt: Eingabe Kohlenhydrate

Die eCarbs auf dem Homescreen, beachte die Kohlenhydrate in Klammern im COB-Feld, was die für die Zukunft verbliebenen Kohlenhydrate zeigt:

.. image:: ../images/eCarbs_Graph.png
  :alt: eCarbs im Diagramm

Kohlenhydrat-Einträge, die in der Zukunft liegen, sind auf dem Behandlungen-Reiter dunkelorange:

.. image:: ../images/eCarbs_Treatment.png
  :alt: eCarbs in der Zukunft im Reiter Behandlungen


-----

Ein konkretes Beispiel zum Umgang mit Fett und Eiweiß im Rahmen dieser Funktion wird hier beschrieben: `https://adriansloop.blogspot.co.at/2018/04/page-margin-0.html <https://adriansloop.blogspot.co.at/2018/04/page-margin-0.html>`_

-----

Es wird empfohlen, das APS-Plugin "OpenAPS SMB" zu nutzen, SMB zu aktivieren und die Einstellung _Aktiviere SMB während aktiver Kohlenhydrate_ zu aktivieren.

Eine Szenario z. B. für eine Pizza wäre, einen anfänglichen (Teil-)Bolus über den _Rechner_ zu geben und dann die Schaltfläche _“Kohlenhydrate”_ zu verwenden, um die restlichen Kohlenhydrate für eine Dauer von ca. 4-6 Stunden, beginnend nach 1 oder 2 Stunden, einzugeben.  Du musst natürlich selbst ausprobieren, welche konkreten Werte bei dir am besten funktionieren. Du könntest auch die Einstellung _SMB-Basal-Limit in Minuten_ vorsichtig anpassen, um den Algorithmus mehr oder weniger aggressiv zu einzustellen.
Bei Low-Carb-Ernährung und fett-/eiweißreichen Mahlzeiten reicht es möglicherweise aus, nur eCarbs ohne manuellem Mahlzeitenbolus einzugeben (mehr dazu im Blogbeitrag oben).

Wenn eCarbs eingegeben werden, wird im Careportal automatisch eine Notiz angelegt, damit es einfacher ist, die Eingaben zu überprüfen und zu verbessern.

Verzögerter Bolus
==================================================
Wie oben bereits erwähnt sind verzögerte oder sog. Multi-Wave-Boli beim Loopen nicht sinnvoll. `Weiter unten <../Usage/Extended-Carbs.html#why-extended-boluses-wont-work-in-a-closed-loop-environment>`_ wird beschrieben, warum.

Verzögerter Bolus und Wechsel zum Open Loop - nur für Dana- und Insight-Pumpe
-----------------------------------------------------------------------------
Es kam immer wieder der Wunsch auf, verzögerte Boli auch in AAPS zu nutzen, um spezielle Mahlzeiten wie gewohnt behandeln zu können. 

Daher gibt es ab Version 2.6 für Nutzer der Dana- und Insight-Pumpe eine Option für einen verzögerten Bolus.  

Der Closed Loop wird automatisch gestoppt und für die Laufzeit des verzögerten Bolus zum Open Loop gewechselt. 
* Die Einheiten des verzögerten Bolus, die verbleibende und die Gesamtzeit werden auf der Startseite angezeigt.
* Bei der Insight Pumpe steht der verzögerte Bolus *nicht zur Verfügung*, wenn `TBR emulation <../Configuration/Accu-Chek-Insight-Pump.html#einstellungen-in-androidaps>`_ verwendet wird. 

.. image:: ../images/ExtendedBolus2_6.png
  :alt: Verzögerter Bolus in AAPS 2.6

Warum ein verzögerter Bolus beim Loopen nicht funktioniert
----------------------------------------------------------------------------------------------------
1. Der Loop bestimmt, dass jetzt 1,55 IE/Std. abgegeben werden soll. Ob das als verzögerter Bolus oder TBR abgegeben wird, ist dem Algorithmus egal. In der Tat verwenden einige der Pumpen den verzögerten Bolus. Was soll dann geschehen? Die meisten Pumpentreiber stoppen dann den verzögerten Bolus -> Man brauchte ihn gar nicht erst starten.
2. Wenn man den verzögerten Bolus als Eingabe hätte, was soll dann damit im Modell geschehen?

   1. Soll er zusammen mit der BR als neutral angesehen werden und darauf geloopt werden? Dann müsste der Loop auch den Bolus verringern können, wenn man z.B. zu niedrig gerät und das gesamte "neutrale" Insulin weggenommen wird?
   2. Soll der verzögerte Bolus einfach dazugezählt werden? Dann soll der Loop in also einfach weiterlaufen lassen? Selbst in der ärgsten Hypo? Das halte ich für nicht so gut: Es wird eine Hypo vorhergesehen aber sie darf nicht verhindert werden?
   
3. Das IOB, dass der verzögerte Bolus aufbaut materialisiert sich beim nächsten Durchlauf nach 5 Minuten. Entsprechend würde der Loop weniger Basal geben. Es ändert sich also nicht viel... außer, dass die Möglichkeit der Hypo-Vermeidung genommen wird.
