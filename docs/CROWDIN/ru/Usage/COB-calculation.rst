Вычисление активных углеводов COB
**************************************************

Как AndroidAPS вычисляет значение COB?
==================================================

Oref0 / Oref1
--------------------------------------------------

Непоглощенные углеводы отбрасываются после указанного времени

.. изображение:: ../images/cob_oref0_orange_II.png
  :alt: Oref0/Oref1

AAPS, Средневзвешенное значение
--------------------------------------------------

усвоение рассчитывается как "COB == 0" после определенного времени

.. изображение:: ../images/cob_aaps2_orange_II.png
  :alt: AAPS, средневзвешенное значение

Если вместо значения, вычисленного из отклонений ГК, используется минимальное поглощение углеводов (min_5m_arbarimpact), на графике активных углеводов COB появится оранжевая точка.

Обнаружение неправильного значения COB
==================================================

Начиная с версии 2.4, AAPS предупреждает вас о том, что вы собираетесь подавать болюс при активных углеводах COB, оставшихся от предыдущего приема пищи, и алгоритм считает, что текущий расчет COB может быть неправильным. В этом случае он даст дополнительный подсказку на экране подтверждения калькулятора болюса. 

Как AndroidAPS обнаруживает неправильные значения COB? 
--------------------------------------------------

Обычно AAPS обнаруживает усвоение углеводов через отклонения ГК. В случае, если вы ввели углеводы, но AAPS не сможет оценить их усвоение с помощью отклонений ГК, для вычисления поглощения система будет использовать метод ` min_5m_arbimpact <../Configuration/Config-Builder.html?highlight=min_5m_arbarimpact#absorption-settings> ` _ (так называемый 'запасной вариант'). Поскольку этот метод вычисляет только минимальное поглощение углеводов без учета отклонений гК, это может привести к неправильным значениям COB.

.. изображение:: ../images/Calculator_SlowCarbAbsorbtion.png
  :alt: Подсказка о неверном значении COB

In the screenshot above, 41% of1 time the carb absorption was mathematically calculated by the min_5m_carbimpact instead of the value  detected from deviations.  This means that maybe you are having less carbs on board than calculated by the algorithm. 

How to deal with this warning? 
--------------------------------------------------

- Consider to cancel the treatment - press Cancel instead of OK.
- Calculate your upcoming meal again with bolus wizard leaving COB unticked.
- In case you are sure you need a correction bolus, enter it manually.
- In any case be careful not to overdose!

Why does the algorithm not detect COB correctly? 
--------------------------------------------------

- Maybe you overestimated carbs when entering them.  
- Activity / exercise after your previous meal
- I:C needs adjustment
- Value for min_5m_carbimpact is wrong (recommended is 8 with SMB, 3 with AMA)

Manual correction of carbs entered
==================================================
If you over- or underestimated carbs you can correct this though treatments tab and care portal as described `here <../Getting-Started/Screenshots.html#carb-correction>`_.
