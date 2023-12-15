(Open-APS-features-DynamicISF)=
## DynamicISF (DynISF)- Динамическое изменение коэффициента чувствительности к инсулину
DynamicISF was added in AAPS version 3.2 and requires you to start Objective 11 to use. Select DynamicISF in the config builder > APS to activate. Этот режим рекомендуется только опытным пользователям, которые научились хорошо управлять и следить за работой AAPS.

Обратите внимание, что для эффективной работы динамического ISF, база данных AndroidAPS должна содержать не менее пяти дней данных.

DynamicISF подстраивает фактор чувствительности инсулина на основе общей суточной дозе инсулина (TDD) и величин текущего и прогнозируемого содержания глюкозы в крови.

Динамический ISF использует модель Криса Уилсона (Chris Wilson) для определения ISF вместо статических настроек профиля.

Применяется уравнение: ISF = 1800 / (TDD * Ln (( глюкоза / инсулин дивизор) +1))

Реализация использует уравнение для расчета нынешний фактор ISF и прогнозы активного инсулина, нулевого временного базала и непредвиденного приема пищи. Активные углеводы COB не участвуют в модели.

### TDD / общая суточная доза инсулина
Эта величина содержит комбинацию 7-дневной суммарной суточной дозы TDD, суммарной суточной дозы за предшествующий этим суткам день и средневзвешенное значение последних восьми часов использования инсулина, экстраполированное на 24 часа. Общая суточная доза используемая в уравнении берет по одной трети средневзвзвешенной величины каждого из трех вышеперечисленных значений.

### Insulin Divisor
Инсулин дивизор зависит от пика используемого инсулина и обратно пропорциональен времени до пика. Для Люмжева его значение 75, для Фиаспа 65 и для обычных быстрых инсулинов 55.

### Коэффициент регулировки динамического диапазона чувствительности ISF
Корректирующий коэффициент позволяет пользователю указать значение от 1% до 300%. Он выступает как множитель суммарной суточной дозы TDD и приводит к тому, что ISF становится меньше (то есть, при этом требуется больше инсулина, чтобы сдвинуть уровень ГК на небольшую величину), если его значение идет вверх от 100%, и, наоборот, увеличивает ISF (то есть требует меньше инсулина для изменения ГК), когда его величина понижается от 100% вниз.

### Future ISF

Future ISF is used in the dosing decisions that oref1 makes. Future ISF uses the same TDD value as generated above, taking the adjustment factor into account. It then uses different glucose values dependent on the case:

* If levels are flat, within +/- 3 mg/dl, and predicted BG is above target, a combination of 50% minimum predicted BG and 50% current BG is used.

* If eventual BG is above target and glucose levels are increasing, or eventual BG is above current BG, current BG is used.

Otherwise, minimum predicted BG is used.

### Enable TDD based sensitivity ratio for basal and glucose target modification

This setting replaces Autosens, and uses the last 24h TDD/7D TDD as the basis for increasing and decreasing basal rate, in the same way that standard Autosens does. This calculated value is also used to adjust target, if the options to adjust target with sensitivity are enabled. Unlike Autosens, this option does not adjust ISF values. 
