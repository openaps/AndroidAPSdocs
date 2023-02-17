# Вычисление активных углеводов COB

## Как AndroidAPS вычисляет значение COB?

### Oref1

Непоглощенные углеводы отбрасываются после указанного времени

```{image} ../images/cob_oref0_orange_II.png
:alt: Oref1
```

### AAPS, Средневзвешенное значение

absorption is calculated to have `COB == 0` after specified time

```{image} ../images/cob_aaps2_orange_II.png
:alt: AAPS, средневзвешенное значение
```

Если вместо значения, вычисленного из отклонений ГК, используется минимальное поглощение углеводов (min_5m_arbarimpact), на графике активных углеводов COB появится оранжевая точка.

(COB-calculation-detection-of-wrong-cob-values)=
## Обнаружение неправильного значения COB

AAPS предупреждает о том, что вы собираетесь подавать болюс при активных углеводах COB, оставшихся от предыдущего приема пищи, и алгоритм считает, что текущий расчет COB может быть неправильным. В этом случае он даст дополнительный подсказку на экране подтверждения калькулятора болюса.

### Как AndroidAPS обнаруживает неправильные значения COB?

Обычно AAPS обнаруживает усвоение углеводов через отклонения ГК. In case you entered carbs but AAPS cannot see their estimated absorption through BG deviations, it will use the [min_5m_carbimpact](../Configuration/Config-Builder.md?highlight=min_5m_carbimpact#absorption-settings) method to calculate the absorption instead (so called 'fallback'). Поскольку этот метод вычисляет только минимальное поглощение углеводов без учета отклонений гК, это может привести к неправильным значениям COB.

```{image} ../images/Calculator_SlowCarbAbsorption.png
:alt: Подсказка о неверном значении COB
```

На этом снимке экрана 41% времени поглощения углеводов был вычислен математически методом min_5m_carbimpact вместо значения, основанного на отклонениях ГК.  Это означает, что в организме может быть меньше активных углеводов, чем вычисляется алгоритмом.

### Как относиться к этому предупреждению?

- Consider to cancel the treatment - press Cancel instead of OK.
- Calculate your upcoming meal again with bolus wizard leaving COB unticked.
- In case you are sure you need a correction bolus, enter it manually.
- In any case be careful not to overdose!

### Почему алгоритм неправильно распознает COB?

- Maybe you overestimated carbs when entering them.
- Activity / exercise after your previous meal
- I:C needs adjustment
- Value for min_5m_carbimpact is wrong (recommended is 8 with SMB, 3 with AMA)

## Ручная коррекция введенных углеводов

If you over- or underestimated carbs you can correct this though treatments tab and actions tab / menu as described [here](Screenshots-carb-correction).
