Пролонгированные (расширенные) углеводы / "eCarbs"
**************************************************
При обычной помповой терапии пролонгированные болюcы-хороший способ справиться с жирной или медленно усваиваемой пищей, которая увеличивает уровень глюкозы в крови дольше, чем работает инсулин. Однако в контексте алгоритма ИПЖ пролонгированные болюсы не имеют большого смысла (и создают технические трудности), поскольку они представляют собой по сути, фиксированную высокую временную базальную скорость, которая идет вразрез с тем, как работает цикл ИПЖ, который должен динамически корректировать базальную скорость. Дополнительные сведения см. в разделе " Пролонгированный болюс <../Usage/Extended-Carbs.html#extended-bolus> ` _ ниже.

Однако необходимость работать с такой едой все же существует. Именно поэтому AndroidAPS начиная с версии 2.0 поддерживает так называемые расширенные углеводы или eCarbs.

eCarbs-это углеводы, которые растягиваются на несколько часов. Для стандартного питания с бОльшим содержанием углеводов, чем жира/белка, введение углеводов заранее (и при необходимости уменьшение начального болюса), как правило, достаточно для предотвращения преждевременной подачи инсулина.  Но для медленно поглощающейся еды, при которой предварительное введение углеводов приводит к слишком большой величине активного инсулина IOB из-за микроболюсов SMB, eCarbs могут применяться для более точного моделирования того, как усваиваются углеводы и влияют на уровень глюкозы в крови. С помощью этой информации алгоритм может управлять микроболюсами SMB которые выступают как пролонгированный болюс на такие углеводы ( должно работать и без SMB, но, возможно, менее эффективно).

eCarbs не ограничивается тяжелой пищей богатой жирами/белками: они могут быть также использованы для оказания помощи в других случаях, когда увеличивается уровень сахара в крови, например, прием лекарств, таких как кортикостероиды.

Чтобы ввести eCarbs, задайте длительность в диалоговом окне _Carbs_ на вкладке обзора, общее количество углеводов и (необязательно) сдвиг по времени:

.. изображение:: ../images/eCarbs_Dialog.png
  :alt: Введение углеводов

ECarbs на вкладке обзора, обратите внимание на углеводы в скобках в поле COB, в котором показаны углеводы в будущем:

.. изображение:: ../images/eCarbs_Graph.png
  :alt: eCarbs на графике

Углеводы в будущем окрашены в темно-оранжевый цвет на вкладке Терапии:

.. image:: ../images/eCarbs_Treatment.png
  :alt: eCarbs in future in treatment tab


-----

A way to handle fat and protein with that feature is described here: `https://adriansloop.blogspot.co.at/2018/04/page-margin-0.html <https://adriansloop.blogspot.co.at/2018/04/page-margin-0.html>`_

-----

The recommended setup is to use the OpenAPS SMB APS plugin, with SMBs enabled as well as the _Enable SMB with COB_ preference being enabled.

A scenario e.g. for a Pizza might be to give a (partial) bolus up front via the _calculator_ and then use the _carbs_ button to enter the remaining carbs for a duration of 4-6 hours, starting after 1 or 2 hours. You'll need to try out and see which concrete values work for you of course. You might also carefully adjust the setting _max minutes of basal to limit SMB to_ to make the algorithm more or less aggressive.
With low carb, high fat/protein meals it may be enough to only use eCarbs without manual boluses (see the blog post above).

When eCarbs are generated, a Careportal note is also created to document all inputs, to make it easier to iterate and improve inputs.

Пролонгированный болюс
==================================================
As mentioned above extended or multiwave boluses do not really work in a closed loop environment. `See below <../Usage/Extended-Carbs.html#why-extended-boluses-wont-work-in-a-closed-loop-environment>`_ for details

Extended bolus and switch to open loop
--------------------------------------------------
Some people were asking for an option to use extended bolus in AAPS anyway as they wanted to treat special foods the way they are used to. 

That's why as of version 2.6 there is an option for an extended bolus. But closed loop will automatically be stopped and switched to open loop mode for the time running extended bolus. Bolus units, remaining and total time will be shown on homescreen.

.. image:: ../images/ExtendedBolus2_6.png
  :alt: Extended bolus in AAPS 2.6

Why extended boluses won't work in a closed loop environment
----------------------------------------------------------------------------------------------------
1. The loop determines that now 1.55U/h is to be delivered. Whether this is delivered as an extended bolus or TBR does not matter to the algorithm. In fact, some of the pumps use the extended bolus. What should happen then? Most pump drivers then stop the extended bolus -> You didn't even need to start it.
2. If you had the extended bolus as input, what should happen in the model?

   1. Should it be considered neutral together with the BR and looped on it? Then the loop should also be able to reduce the bolus if, for example, you get too low and all the "neutral" insulin is taken away?
   2. Should the extended bolus simply be added? So the loop should simply be allowed to continue? Even in the worst hypo? I don't think this is so good: A hypo is foreseen but it must not be prevented?
   
3. The IOB that the extended bolus builds up materializes after 5 minutes at the next run. Accordingly, the loop would give less basal. So not much changes... except that the possibility of hypo avoidance is taken.
