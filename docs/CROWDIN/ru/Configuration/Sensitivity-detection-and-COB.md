(Sensitivity-detection-and-COB-sensitivity-detection)=

# Определение чувствительности

## Алгоритм чувствительности

Currently we have 3 sensitivity detection models:

* Чувствительность AAPS
* Средневзвешенная чувствительность
* Чувствительность Oref1

### Чувствительность AAPS

Sensitivity is calculated the same way like Oref1 but you can specify time to the past. Minimal carbs absorption is calculated from max carbs absorption time from preferences

### Средневзвешенная чувствительность

Sensitivity is calculated as a weighted average from deviations. You can specify time to the past. Newer deviations have higher weight. Minimal carbs absorption is calculated from max carbs absorption time from preferences. This algorithm is fastest in following sensitivity changes.

### Чувствительность Oref1

Sensitivity is calculated from 8h data in the past or from last site change, if it is less than 8h ago. Carbs (if not absorbed) are cut after time specified in preferences. Only the Oref1 algorithm supports un-announced meals (UAM). This means that times with detected UAM are excluded from sensitivity calculation. So if you are using SMB with UAM, you have to choose Oref1 algorithm to work properly. For more information read [OpenAPS Oref1 documentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html).

## Одновременный учет углеводов

There is significant difference while using AAPS, WeightedAverage vs Oref1. Oref plugins expects only one meal decaying at time. It means 2nd meal starts decaying after 1st meal is completely decayed. AAPS+Weighted average starts decaying immediately when you enter the carbs. If there is more than one meal on board, the minimum carb decay will adjust according to meal size and max absorption time. The minimum absorption accordingly will be higher in comparison to Oref plugins.