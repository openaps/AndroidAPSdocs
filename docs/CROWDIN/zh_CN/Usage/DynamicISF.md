(Open-APS-features-DynamicISF)=
## DynamicISF (DynISF)
DynamicISF was added in AAPS version 3.2 and requires you to start Objective 11 to use. Select DynamicISF in the config builder > APS to activate. It is recommended only for advanced users that have a good handle on AAPS controls and monitoring.

Please note that to use Dynamic ISF effectively, the AndroidAPS database needs a minimum of five days of data.

DynamicISF adapts the insulin sensitivity factor dynamically based on total daily dose of insulin (TDD) and current and predicted blood glucose values.

Dynamic ISF uses Chris Wilson’s model to determine ISF instead of a static profile settings.

The equation implemented is: ISF = 1800 / (TDD * Ln (( glucose / insulin divisor) +1 ))

The implementation uses the equation to calculate current ISF and in the oref1 predictions for IOB, ZT and UAM. It is not used for COB.

### TDD
This uses a combination of the 7 day average TDD, the previous day’s TDD and a weighted average of the last eight hours of insulin use extrapolated out for 24 hours. The total daily dose used in the above equation is weighted one third to each of the above values.

### Insulin Divisor
The insulin divisor depends on the peak of the insulin used and is inversely proportional to the peak time. For Lyumjev this value is 75, for Fiasp, 65 and regular rapid insulin, 55.

### Dynamic ISF Adjustment Factor
The adjustment factor allows the user to specify a value between 1% and 300%. This acts as a multiplier on the TDD value and results in the ISF values becoming smaller (ie more insulin required to move glucose levels a small amount) as the value is increased above 100% and larger (i.e. less insulin required to move glucose levels a small amount) as the value is decreased below 100%.

### Future ISF

Future ISF is used in the dosing decisions that oref1 makes. Future ISF uses the same TDD value as generated above, taking the adjustment factor into account. It then uses different glucose values dependent on the case:

* If levels are flat, within +/- 3 mg/dl, and predicted BG is above target, a combination of 50% minimum predicted BG and 50% current BG is used.

* If eventual BG is above target and glucose levels are increasing, or eventual BG is above current BG, current BG is used.

Otherwise, minimum predicted BG is used.

### Enable TDD based sensitivity ratio for basal and glucose target modification

This setting replaces Autosens, and uses the last 24h TDD/7D TDD as the basis for increasing and decreasing basal rate, in the same way that standard Autosens does. This calculated value is also used to adjust target, if the options to adjust target with sensitivity are enabled. Unlike Autosens, this option does not adjust ISF values. 
