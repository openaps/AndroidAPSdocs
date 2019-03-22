# Sensitivity detection

## Sensitvity algorithm

Currently we have 4 sensitivity detection models:

* Sensitivity Oref0
* Sensitivity AAPS
* Sensitivity WeightedAverage
* Sensitivity Oref1

### Sensitivity Oref0

Basically sensitivity is calculated from 24h data in the past and carbs (if not absorbed) are cut off after time specified in preferences. The algorithm is similiar to OpenAPS Oref0, described in [OpenAPS Oref0 documentation](https://openaps.readthedocs.io/en/2017-05-21/docs/walkthrough/phase-4/advanced-features.html).

### Sensitivity AAPS

Sensitivity is calculated the same way like Oref0 but you can specify time to the past. Minimal carbs absorption is calculated from max carbs absorption time from preferences

### Sensitivity WeightedAverage

Sensitivity is calculated as a weighted average from deviations. Newer deviations have higher weight. Minimal carbs absorption is calculated from max carbs absorption time from preferences. This algorithm is fastest in following sensitivity changes.

### Sensitivity Oref1

Sensitivity is calculated from 8h data in the past or from last site change, if it is less than 8h ago. Carbs (if not absorbed) are cut after time specified in preferences. Only the Oref1 algorithm supports un-announced meals (UAM). This means that times with detected UAM are excluded from sensitivity calculation. So if you are using SMB with UAM, you have to choose Oref1 algorithm to work properly. For more information read [OpenAPS Oref1 documentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

## Simultaneous carbs

There is significant difference while using AAPS, WeightedAverage vs Oref0, Oref1. Oref plugins expects only one meal decaying at time. It means 2nd meal starts decaying after 1st meal is completely decayed. AAPS+Weighted average starts decaying immediately when you enter the carbs. If there is more than one meal on board, the minimum carb decay will adjust according to meal size and max absorption time. The minimum absorption accordingly will be higher in comparation to Oref plugins.

## COB Examples

Oref0 / Oref1 - unabsorbed carbs are cut off after specified time

![COB from oref0](../images/cob_oref0.png)

AAPS, WeightedAverage - absorption is calculated to have `COB == 0` after specified time

![COB from AAPS](../images/cob_aaps.png)

If minimal carbs absorption is used instead of value calculated from deviations, a green dot appears on COB graph