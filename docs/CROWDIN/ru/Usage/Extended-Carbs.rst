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

.. изображение:: ../images/eCarbs_Treatment.png
  :alt: eCarbs в будущем на вкладке лечения


-----

Способ компенсации жира и белка с этой функцией описан здесь: ` https: //adriansloop.blogspot.co. at/2018/04/page-margin-0.html <https://adriansloop.blogspot.co.at/2018/04/page-margin-0.html>` _

-----

Рекомендуется использовать модуль OpenAPS SMB APS, с поддержкой SMB, а также включить параметр _Enable SMB с COB_.

Сценарий, например, на пиццу может быть такой: дать (частично) болюс заранее через калькулятор болюса а затем через 1 или 2 часа нажать кнопку углеводы чтобы ввести оставшиеся углеводы на последующие 4-6 часов. Нужно приспособиться, чтобы понять какие конкретные величины подходят для вас. Можно также подстроить параметр _max minutes of basal для ограничения SMB чтобы сделать алгоритм более или менее агрессивным.
При низком содержании углеводов, высоким содержании жиров и белков, eCarbs может быть достаточен, чтобы обойтись без дополнительного контроля болюсов (см. пост блога выше).

При создании eCarbs в портале терапии создается также запись для документирования, упрощающая итерацию и ввод данных.

Пролонгированный болюс
==================================================
Как упоминалось выше, пролонгированные или многоволновые болизы не работают в замкнутом цикле. ` Подробнее см. ниже <../Usage/Extended-Carbs.html#why-Extended-boluses-wont-work-in-a-closed-loop-environment> ` _

Пролонгированный болюс и переход на открытый цикл
--------------------------------------------------
Некоторые пользователи просили предусмотреть пролонгированные болюсы в ААПС, так как хотели бы компенсировать специфические продукты питания привычным для себя образом. 

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
