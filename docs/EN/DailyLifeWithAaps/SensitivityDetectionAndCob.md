(Sensitivity-detection-and-COB-sensitivity-detection)=
# Sensitivity detection

## Sensitivity algorithm
**AAPS** currently offers 3 sensitivity detection models:

* Sensitivity AAPS
* Sensitivity WeightedAverage
* Sensitivity Oref1

### Sensitivity AAPS
Sensitivity is calculated the same way as in Oref1, but you can specify the time range to look back on. The minimal carbs absorption is calculated from the max carbs absorption time set in the preferences.

### Sensitivity WeightedAverage
Sensitivity is calculated as a weighted average of the deviations. You can specify the time range to look back on. Newer deviations have a higher weight. The minimal carbs absorption is calculated from the max carbs absorption time set in the preferences. This algorithm is the fastest in following sensitivity changes.

(SensitivityDetectionAndCob-sensitivity-oref1)=
### Sensitivity Oref1
Sensitivity is calculated from the last 8 hours of data, or from the last site change if it is less than 8 hours ago. Carbs (if not absorbed) are cut after the time specified in the preferences. Only the Oref1 algorithm supports un-announced meals (UAM). This means that times with detected UAM are excluded from the sensitivity calculation. So if you are using SMB with UAM, you have to choose the Oref1 algorithm for it to work properly. For more information about UAM, see the [Super Micro Bolus (SMB)](#Open-APS-features-super-micro-bolus-smb) section.

Oref1 is the recommended option: it is the only one that can detect UAM and work with [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb), the more recent algorithm.

## Simultaneous carbs
There is a significant difference between the Sensitivity AAPS and WeightedAverage algorithms on one side, and Oref1 on the other, when several meals overlap.

* Oref1 expects only one meal decaying at a time: the second meal starts decaying after the first meal is completely decayed.
* Sensitivity AAPS and WeightedAverage start decaying immediately when you enter the carbs. If there is more than one meal on board, the minimum carb decay will adjust according to the meal size and the max absorption time. The minimum absorption will accordingly be higher in comparison to Oref1.
