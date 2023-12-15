(Open-APS-features-DynamicISF)=
## DynamicISF (DynISF)- Динамическое изменение коэффициента чувствительности к инсулину
DynamicISF was added in AAPS version 3.2 and requires you to start Objective 11 to use. Select DynamicISF in the config builder > APS to activate. Этот режим рекомендуется только опытным пользователям, которые научились хорошо управлять и следить за работой AAPS.

Обратите внимание, что для эффективной работы динамического ISF, база данных AndroidAPS должна содержать не менее пяти дней данных.

DynamicISF подстраивает фактор чувствительности инсулина на основе общей суточной дозе инсулина (TDD) и величин текущего и прогнозируемого содержания глюкозы в крови.

Динамический ISF использует модель Криса Уилсона (Chris Wilson) для определения ISF вместо статических настроек профиля.

Применяется уравнение: ISF = 1800 / (TDD * Ln (( глюкоза / инсулин дивизор) +1))

Реализация использует уравнение для расчета нынешний фактор ISF и прогнозы активного инсулина, нулевого временного базала и непредвиденного приема пищи. Активные углеводы COB не участвуют в модели.

### TDD / общая суточная доза инсулина
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
