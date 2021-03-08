# Определение чувствительности

## Алгоритм чувствительности

В настоящее время есть 3 модели определения чувствительности:

* Чувствительность AAPS
* Средневзвешенная чувствительность
* Чувствительность Oref1

### Чувствительность AAPS

Чувствительность вычисляется таким же образом, как Oref1, но можно указать время начала отсчета. Минимальное усвоение углеводов рассчитывается из максимального времени поглощения углеводов в настройках

### Средневзвешенная чувствительность

Чувствительность рассчитывается как средневзвешанная от отклонений. Можно указать время в прошлом. Новые отклонения имеют большее значение. Минимальное усвоение углеводов рассчитывается из максимального времени поглощения углеводов в настройках. Этот алгоритм является самым быстрым при отслеживании изменений чувствительности.

### Чувствительность Oref1

Чувствительность рассчитывается на основе данных за прошедшие 8 часов или с последней смены катетера, если это меньше 8 часов назад. Углеводы (не усвоенные) не учитываются по прошествии времени, указанного в настройках. Только алгоритм Oref1 поддерживает непредвиденный прием пищи (UAM). Это означает, что время с распознанным непредвиденным приемом пищи UAM исключено из расчета чувствительности. Поэтому если вы используете супермикроболюс SMB с непредвиденным приемом пищи UAM, вам необходимо выбрать алгоритм Oref1 для правильной работы. For more information read [OpenAPS Oref1 documentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html).

## Одновременный учет углеводов

There is significant difference while using AAPS, WeightedAverage vs Oref1. Oref plugins expects only one meal decaying at time. It means 2nd meal starts decaying after 1st meal is completely decayed. AAPS+Weighted average starts decaying immediately when you enter the carbs. If there is more than one meal on board, the minimum carb decay will adjust according to meal size and max absorption time. The minimum absorption accordingly will be higher in comparation to Oref plugins.