# Sensitivity Detection and COB options

* Currently we have 3 sensitivity detection models
  * Sensitivity Oref0
  * Sensitivity AAPS
  * Sensitivity WeightedAverage

### Sensitivity Oref0

Similiar to Oref0 described in [Oref0 documentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#auto-sensitivity-mode-autosens). Basically sensitivity is calculated from 24h data in the past and carbs (if not absorbed) are cutted after time specified in preferences

### Sensitivity AAPS

Sensitivity is calculated the same way like Oref0 but you can specify time to the past. Minimal carbs absorption is calculated from max carbs absorption time from preferences

### Sensitivity WeightedAverage

Sensitivity is calculated as a weighted average from deviations. Deviations are calculated from the difference between the actual BG and that predicted by the algorithm. You can read a fuller description here: [OpenAPS decision inputs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html#openaps-decision-inputs) Newer deviations have higher weight. Minimal carbs absorption is calculated from max carbs absorption time from preferences. This algorithm is fastest in following sensitivity changes.

### COB Examples

Oref0 - unabsorbed carbs are cutted after specified time

![COB from oref0](../../images/cob_oref0.png)

AAPS, WeightedAverage - absorption is calculated to have `COB == 0` after specified time

![COB from AAPS](../../images/cob_aaps.png)

If minimal carbs absorption is used instead of value calculated from deviations, a green dot appears on COB graph
