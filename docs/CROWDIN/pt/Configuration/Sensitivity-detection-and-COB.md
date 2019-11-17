# Detecção sensibilidade

## Algoritmo de Sensibilidade 

Currently we have 4 sensitivity detection models:

* Sensibilidade Oref0
* Sensibilidade AAPS
* Sensibilidade WeightedAverage
* Sensibilidade Oref1

### Sensibilidade Oref0

Basically sensitivity is calculated from 24h data in the past and carbs (if not absorbed) are cut off after time specified in preferences. The algorithm is similiar to OpenAPS Oref0, described in [OpenAPS Oref0 documentation](https://openaps.readthedocs.io/en/2017-05-21/docs/walkthrough/phase-4/advanced-features.html).

### Sensibilidade AAPS

Sensitivity is calculated the same way like Oref0 but you can specify time to the past. Minimal carbs absorption is calculated from max carbs absorption time from preferences

### Sensitivity WeightedAverage

Sensitivity is calculated as a weighted average from deviations. You can specify time to the past. Newer deviations have higher weight. Minimal carbs absorption is calculated from max carbs absorption time from preferences. This algorithm is fastest in following sensitivity changes.

### Sensibilidade Oref1

Sensitivity is calculated from 8h data in the past or from last site change, if it is less than 8h ago. Carbs (if not absorbed) are cut after time specified in preferences. Only the Oref1 algorithm supports un-announced meals (UAM). This means that times with detected UAM are excluded from sensitivity calculation. So if you are using SMB with UAM, you have to choose Oref1 algorithm to work properly. For more information read [OpenAPS Oref1 documentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

## Hidratos simultâneos

There is significant difference while using AAPS, WeightedAverage vs Oref0, Oref1. Oref plugins expects only one meal decaying at time. It means 2nd meal starts decaying after 1st meal is completely decayed. AAPS+Weighted average starts decaying immediately when you enter the carbs. If there is more than one meal on board, the minimum carb decay will adjust according to meal size and max absorption time. The minimum absorption accordingly will be higher in comparation to Oref plugins.