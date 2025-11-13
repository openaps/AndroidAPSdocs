(возможности_Open-APS-DynamicISF)=
# Динамическое изменение коэффициента чувствительности к инсулину (DynISF)

До недавнего времени, фактор чувствительности к инсулину **ISF** в алгоритмах **AMA** и **SMB**, задавался в ** профиле** и был статичным для каждого конкретного времени суток. На самом деле, **ISF** человека не статичен и варьируется в зависимости от уровня **ГК**: на высоких сахарах пользователю понадобится больше инсулина, чтобы опустить **ГК** на 50мг/дл / 3ммоль/л по сравнению с тем, когда у него низкая **ГК**. Первый алгоритм, который попытался устранить эту сложность был [Autosens](#Open-APS-features-autosens) который корректировал **ISF** вне времени приема пищи.

Алгоритм **Динамической чувствительности к инсулину** (также сокращенно именуемый **DynISF**) служит этой же цели, но более совершенен, т. к. работает в любое время. It is recommended only for advanced users that have a good handle on their **AAPS**’ controls and monitoring. Ознакомьтесь с документом [ Что следует учитывать при работе с динамическим ISF](#dyn-isf-things-to-consider-when-activating-dynamicisf), приводимом ниже, прежде чем начать пользоваться этим алгоритмом.

```{admonition} CAUTION - Automations or Profile Percentage change
:класс: предупреждение

**Средства автоматизации** всегда следует использовать с осторожностью. Особенно это касается **Динамического ISF**.

При использовании **Динамической ISF** отключите любое временное изменение профиля, поскольку это может привести к чрезмерной агрессивности алгоритма** Динамической ISF** при коррекции болюса и привести к гипогликемии. Именно в этом заключается назначение динамической ISF, и поэтому нет необходимости сообщать AAPS о необходимости введения дополнительного инсулина с помощью автоматизации в случае высокой гликемии. This is particularly so with **Dynamic ISF**.

При использовании **Динамической ISF** отключите временное изменение профиля в настройках автоматизации, поскольку это может привести к чрезмерной агрессивности ** Динамической ISF** и гипогликемии. Именно в этом заключается назначение динамической ISF, и поэтому нет необходимости сообщать AAPS о необходимости введения дополнительного инсулина с помощью автоматизации в случае высокого уровня BGS.

```

Для работы **динамического ISF**, база данных **AAPS** должна иметь пользовательские данные минимум за 7 дней.

## Как работает Динамический ISF ?

**Динамический ISF** оперативно адаптирует коэффициент чувствительности к инсулину (**ISF**) в зависимости от потребностей пользователя:

- Суммарной суточной дозы инсулина (**TDD**) и
- текущего и прогнозируемого значения ГК.

При использовании **динамического ISF** значения **ISF**, введенные в **Профиле**, больше не используются, за исключением тех случаев, когда в **AAPS** недостаточно данных в базе TDD (*, напр.* при  новой переустановке приложения).

Алгоритмы **SMB/AMA** - пример ** профиля ** со статическим **ISF**, заданным пользователем.

![Static ISF](../images/DynamicISF/DynISF1.png)

Алгоритм **Динамического ISF** - пример **ISF**, который меняется в зависимости от работы этого алгоритма.

![Dyn ISF](../images/DynamicISF/DynISF2.png)

Участок, обведенный красным кружком, показывает: `ISF профиля` -> `ISF, рассчитанный с помощью DynISF`. <br/> При нажатии на этот участок отображается диалоговое окно с дополнительной информацией, такой как **ISF **для калькулятоа болюса и усвоения углеводов (см [ Другие варианты использования ISF](#dynisf-other-usages-of-isf) ниже).

Значение **DynISF** может быть показано на дополнительном графике, при активации «Переменной чувствительности». Она показана в виде белой линии (см. красную стрелку на изображении выше).

## Как рассчитывается динамическая чувствительность ISF?

**Dynamic ISF, Динамический ISF** использует модель Криса Уилсона для определения коэффициента чувствительности **ISF** вместо статического **ISF,** задаваемого пользователями в **Профиле**. Подробное объяснение можно найти здесь: [Крис Уилсон о чувствительности к инсулину (Коэффициент коррекции) в замкнутом цикле, 2/6/2022](https://www.youtube.com/watch?v=oL49FhOts3c).

Здесь применяется уравнение **динамического ISF**, которое выглядит следующим образом: `ISF = 1800 / ((TDD * коэффициент коррекции DynISF) * Ln ((текущая ГК /инсулин) + 1 ))`

Переменные, используемые в этом уравнении, приведены ниже.<br/> Примечание : `Ln` означает натуральный логарифм, математическую функцию.

Приведенное выше уравнение применяется для расчета текущего **ISF** и прогнозов oref1 [ относительно активного инсулина **IOB**, **ZT** (нулевого временного базала) и **непредвиденного приема пищи UAM**](#aaps-screens-prediction-lines). Оно используется и для расчета активных улеводов **COB**, а также в калькуляторе болюса (см. [Другие применения ISF](#dynisf-other-usages-of-isf) ниже).

### TDD (Общая суточная доза)
TDD использует комбинацию следующих значений:
1.  среднее значение **TDD** за 7 дней;
2.  **TDD **предыдущего дня; и
3.  средневзвешенное значение за последние восемь (8) часов применения инсулина, экстраполированное на 24 часа.

В приведенном уравнении значение **TDD**, взвешено на одну треть от каждого из приведенных выше значений.

### Настройка Коэффициента динамического диапазона чувствительности ISF

Он устанавливается в **настройках **для того, чтобы сделать **Динамический ISF** более или менее агрессивным. См. раздел [Настройки](#dyn-isf-preferences) ниже.

### Величина делителя Инсулина
Величина делителя инсулина зависит от пика используемого инсулина и обратно пропорциональна времени до пика. Для Люмжева его значение 75, для Фиаспа 65 и для обычных быстрых инсулинов 55.

### Коэффициент чувствительности инсулина ISF, основанный на прогнозируемой гликемии при принятии решений о дозировке

Динамическая чувствительность вычисляется с использованием текущего значения ** ГК** и отображается как текущий коэффициент чувствительности ISF в **AAPS**. Но при вычислении дозировок вместо этого алгоритм oref1 использует параметр **Future ISF**.

Это делается для того, чтобы предотвратить избыточные дозировки, когда **ГК** низка или прогнозируется низкой.

**Future ISF** использует ту же формулу, что и описанная выше, за исключением того, что в ней применяется **минимальная прогнозируемая гликемия** вместо **текущей ГК**. **Минимальная прогнозируемая ГК**, [рассчитанная в oref1](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html), - это минимальное значение, которое, по прогнозам, достигнет гликемия в течение всего периода прогнозирования.

* Если текущее значение **ГК** превышает целевое значение <br/> ** и ** если уровни **ГК** не меняются в пределах +/-3 мг/дл: <br/>ГК в формуле имеет следующий вид: `среднее значение (минимальное прогнозируемое значение ГК, текущее значение ГК)`.
* Если конечный **уровень сахара в крови** превышает целевой, а уровень глюкозы повышается,<br/>  
  **или** возможная конечная **ГК** выше текущей **ГК**:<br/>то ГК используется в формуле следующим образом: `текущая ГК`.
* В иных случаях: <br/>ГК используется в формуле следующим образом: `минимальная прогнозируемая ГК`.

For a simplified explanation, refer to the screenshot below, which illustrates the above situation. Orange dots use **predicted BG**, purple dots use **average(predicted BG, current BG)**, and blue dots use **current BG**.

![DynISF_BGValue.png](../images/DynamicISF/DynISF_BGValue.png)

(dynisf-other-usages-of-isf)=
## Other usages of ISF

### ISF and COB absorption

As described in the [COB Calculation](../DailyLifeWithAaps/CobCalculation.md) page, usually, the absorption of COB is calculated with this formula :   
`absorbed_carbs = deviation * ic / isf`  
When using **Dynamic ISF**, the **ISF** used here is the average of past 24h Dynamic ISF values.

### ISF in Bolus Wizard

When using the [Bolus wizard](#aaps-screens-bolus-wizard), **ISF** is used if **BG** is above target to add a correction.

When using **Dynamic ISF**, the **ISF** used here is the average of past 24h Dynamic ISF values.

(dyn-isf-preferences)=
## Настройки

Check **Enable dynamic sensitivity** in [Preferences > OpenAPS SMB](#Preferences-openaps-smb-settings) to activate. New settings become available once selected.

![Dynamic ISF settings](../images/Pref2020_DynISF.png)

(dyn-isf-adjustment-factor)=
### Настройка Коэффициента динамического диапазона чувствительности ISF
**Dynamic ISF** works based on a single rule which is supposed to apply to everyone, implying that people having the same **TDD** would have the same sensitivity. As each user has their own personal sensitivity, the **Adjustment Factor** allows the user to define whether they are more or less sensitive to insulin than the "standard" person.

The **Adjustment Factor** is a value between 1% and 300%. This acts as a multiplier on the **TDD** value.

* Increasing this value above 100 % makes **DynISF** more aggressive: the **ISF** values become *smaller* (_i.e._ more insulin required to decrease **BG** levels a small amount)
* Lowering this value under 100% makes **DynISF** less aggressive: the **ISF** values become larger (_i.e._ less insulin required to decrease **BG** levels a small amount).

The **Adjustment Factor** is also altered when activating a [**Profile Switch** with percentage](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md). A lower **Profile Percentage** will lower the **Adjustment Factor**, and vice versa in respect of higher **Profile Percentage**.

For example, if your **Adjustment Factor** is 80%, and **Profile Switch** to 80% is actioned , the resulting **Adjustment Factor** will be `0.8*0.8=0.64`.

This means that, when using **DynISF**, you can use **Profile Percentage** to temporarily fine tune your sensitivity manually. This can be useful for physical activity (lower percentage), illness (higher percentage), etc.

### BG level below which low glucose suspend occurs

**BG** value below which insulin is suspended. Default value uses the standard target model. A user can set this value between 60mg/dl (3.3mmol/l) and 100mg/dl(5.5mmol/l). Values below 65/3.6 result in use of the default model.

### Enable TDD based sensitivity ratio for basal and glucose target modification

This setting replaces Autosens, and uses the last 24h **TDD**/7D **TDD** as the basis for increasing and decreasing basal rate, in the same way that standard Autosens does. Эта вычисляемая величина также применяется для подстройки цели, если включены опции подстройки целей в зависимости от чувствительности. Unlike Autosens, this option does not adjust **ISF** values.

(dyn-isf-things-to-consider-when-activating-dynamicisf)=
## Things to consider when activating Dynamic ISF

* **Dynamic ISF** is recommended only for advanced users that have a good handle on their **AAPS'** controls and monitoring. Users should ideally have attained good control with **SMB** before moving onto **Dynamic ISF**.
* As mentioned above, turn off all [**Automations**](../DailyLifeWithAaps/Automations.md) which activate a **Profile Percentage** in relation to **BG** because it will be too aggressive and may over deliver in insulin! This is already part of the **Dynamic ISF** algorithm.
* [Profile Percentage](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) is taken into account for the Dynamic ISF calculation (see [Dynamic ISF Adjustment Factor](#dyn-isf-adjustment-factor) above). It is bad practice to use a **Profile Percentage** other than 100% for a long time. If you determine that your **Profile** has changed, create a new **Profile** with your revised values in order to replicate the **Profile** with a specific percentage.
* **Dynamic ISF** may not work for everyone. Specifically, you may see unexpected results if one of these situations apply to you:
  * Variable lifestyle (inconsistent eating or physical activity patterns)
  * Inconsistent TDD or sensitivity from day to day.
* There is no precise guide to set the initial value of the **Adjustment Factor**. However, as a starting point: assuming your **Profile** values are correct, when you are in range and **BG** levels are flat, the **DynISF** value should be about the same as the one you had in your **Profile** before.<br/>If you see that **Dynamic ISF** is too aggressive, lower the **Adjustment Factor**, and vice-versa.
* Even though **DynISF** does not use **Profile ISF** at all, if you notice that your sensitivity is very different from what was previously stored in your **Profile**, you should consider keeping it up-to-date. This may be useful in case you loose your **AAPS** data (_i.e._ new phone, new **AAPS** version…), as your **Profile ISF** will be used as fallback for the next 7 days.