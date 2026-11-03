(Sensitivity-detection-and-COB-sensitivity-detection)=

# Sensitivity detection

## Algoritmo di sensibilità

**AAPS** currently offers 3 sensitivity detection models:

* Sensibilità AAPS
* Sensibilità WeightedAverage
* Sensibilità Oref1

### Sensibilità AAPS

Sensitivity is calculated the same way as in Oref1, but you can specify the time range to look back on. L'assorbimento minimo dei carboidrati è calcolato dal tempo massimo di assorbimento dei carboidrati impostato nelle preferenze.

### Sensibilità WeightedAverage

La sensibilità è calcolata come media pesata delle deviazioni. Puoi indicare per quanto tempo guardare indietro. Le deviazioni più recenti hanno un peso maggiore. L'assorbimento minimo dei carboidrati è calcolato dal tempo massimo di assorbimento dei carboidrati impostato nelle preferenze. Questo algoritmo è il più veloce a seguire i cambi di sensibilità.

(SensitivityDetectionAndCob-sensitivity-oref1)=

### Sensibilità Oref1

Sensitivity is calculated from the last 8 hours of data, or from the last site change if it is less than 8 hours ago. I carboidrati (se non assorbiti) vengono tagliati dopo il tempo indicato nelle preferenze. Only the Oref1 algorithm supports un-announced meals (UAM). This means that times with detected UAM are excluded from the sensitivity calculation. Quindi, se usi SMB con UAM, devi scegliere l'algoritmo Oref1 perché funzioni bene. For more information about UAM, see the [Super Micro Bolus (SMB)](#Open-APS-features-super-micro-bolus-smb) section.

Oref1 is the recommended option: it is the only one that can detect UAM and work with [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb), the more recent algorithm.

## Simultaneous carbs

There is a significant difference between the Sensitivity AAPS and WeightedAverage algorithms on one side, and Oref1 on the other, when several meals overlap.

* Oref1 expects only one meal decaying at a time: the second meal starts decaying after the first meal is completely decayed.
* Sensitivity AAPS and WeightedAverage start decaying immediately when you enter the carbs. If there is more than one meal on board, the minimum carb decay will adjust according to the meal size and the max absorption time. The minimum absorption will accordingly be higher in comparison to Oref1.