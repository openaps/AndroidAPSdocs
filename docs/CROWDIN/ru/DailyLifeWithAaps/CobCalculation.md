# Подсчет активных углеводов COB

## Как AAPS вычисляет значение COB?

Когда пользователь вводит углеводы во время приема пищи или при коррекции, **AAPS** добавляет это значение к текущему количеству активных углеводов (**COB**). После этого **AAPS** рассчитывает усвоение углеводов на основе наблюдаемых отклонений от значений **ГК пользователя**. The rate of absorption depends on the carb’s sensitivity factor (**CSF**). This is not a feature within the user’s **Profile** but is calculated by **AAPS** according to **ISF/I:C** setup, and is determined by how many mg/dL 1 g of carbs will raise the user’s **BG**.

## Фактор чувствительности к углеводам

Подсчет в **AAPS** ведется по следующей формуле:

- усвоенные углеводы = отклонение * углеводный коэффициент ic / фактор чувствительности к инсулину isf.

При этом на ** Профиль ** пользователя происходит следующее воздействие:

- _повышение _ **IC ** -увеличение усваивамых каждые 5 минут углеводов тем самым уменьшает общее время усвоения;

- _повышение _ **ISF**- уменьшение усваиваемых каждые 5 минут углеводов тем самым продлевает общее время усвоения

- _изменение_ ** процента Профиля** - увеличение/уменьшение обеих величин таким образом не влияет на время усвоения углеводов.

Например, если в **Профиле** пользователя **ISF** равен 100, а углеводный коэффициент **I:C** равен 5, Rоэффициент чувствительности пользователя к углеводам будет равен 20. For every 20 mg/dL the user’s **BG** goes up, 1 g of carbs will be calculated as absorbed by **AAPS**. Положительное значение активного инсулина **IOB** также влияет на расчет **COB**. So, if **AAPS** predicts the user’s **BG** to go down by 20 mg/dL because of **IOB** and it instead stayed flat, **AAPS** would also calculate 1 g of carbs as absorbed.

Усвоение углеводов также будет рассчитываться с помощью методов, описанных ниже, в зависимости от выбора алгоритма чувствительности в настройках **AAPS**.

## Чувствительность к углеводам - Oref1

Непоглощенные углеводы отбрасываются после указанного времени:

![Oref1](../images/cob_oref0_orange_II.png)

![COB graph with Oref1 cut-off](../images/cob_oref0_orange_I.png)

```{admonition} Older screenshot
:class: note
The screenshot above is from an earlier **AAPS** version — in **AAPS** 4 the graphs look slightly different, but the **COB** graph carries the same information.
```


## Чувствительность к углеводам - средневзвешенная

Усвоение принимается из рассчета, что активные углеводы COB = 0 по истечении указанного времени:

![AAPS, WeightedAverage](../images/cob_aaps2_orange_II.png)

Если вместо значения, рассчитанного на основе отклонений **ГК**, используется минимальное поглощение углеводов (min_5m_carbimpact), на графике **COB** появится оранжевая точка.

(CobCalculation-detection-of-wrong-cob-values)=
## Обнаружение неправильного значения COB

**AAPS** предупредит пользователя о неверном подсчете углеводов **COB** перед подачей болюса, если  от предыдущего приема пищи остаются активные углеводы **COB**,. В этом случае пользователь получит дополнительную подсказку на экране подтверждения калькулятора болюса.

### Как AndroidAPS обнаруживает неправильные значения активных углеводов COB?

В обычных расчетах __AAPS__ определяет усвоение углеводов по отклонениям **ГК**. В случае, если пользователь ввел углеводы, а **AAPS** не может рассчитать их предполагаемое усвоение по отклонениям **ГК**, то алгоритмом применяется метод [min_5m_carbimpact](#Preferences-min_5m_carbimpact) (так называемый "запасной вариант"). Поскольку этот метод вычисляет только минимальное усвоение углеводов, без учета отклонений **ГК**, то в этом случае возможны некорректные значения активных углеводов COB.

![Подсказка о неверном значении COB](../images/Calculator_SlowCarbAbsorption.png)

In the screenshot above, 66% of time the carb absorption was calculated by the min_5m_carbimpact instead of the value detected from deviations. Это означает, что на самом деле у пользователя может быть меньше активных углеводов **COB**, чем рассчитывает алгоритм.

### Как относиться к этому предупреждению?

- Подумайте об отмене терапевтического действия - нажмите «Отмена» вместо ОК.
- -Заново рассчитайте свой предстоящий прием пищи с помощью калькулятора болюса, сняв галочку с активных углеводов **COB**.
- Если требуется болюс на коррекцию, введите его вручную.
- Будьте осторожны, не допустиеь передозировки или переизбытка инсулина!


### Почему алгоритм неправильно распознает активные углеводы COB?

Это может быть вызвано тем, что:
- Пользователь мог переоценить количество углеводов при вводе записи.
- После предыдущего приема пищи происходила физическая активность или нагрузка.
- -Углеводный коэффициент I:C нуждается в корректировке.
- Значение для min_5m_carbimpact неверно (рекомендуется 8 для алгоритма SMB, 3 для OpenAPS AMA).


## Ручная коррекция введенных углеводов

If carbs are over or underestimated this can be corrected through the **Treatments history** screen as described [here](#screens-bolus-carbs).


## Коррекция количества углеводов - как удалить запись из Терапии


The **Treatments history** screen can be used to correct a faulty carb entry by deleting it. Это может произойти из-за того, что пользователь переоценил или недооценил количество вводимых углеводов:

![Deleting a carb entry from Treatments history](../images/e123d85d-907e-4545-bf1b-09fee4d42555.png)

1. Check and remember actual **COB** and **IOB** on the **AAPS** main screen.
2. Open **Treatments history** (drawer menu → *Treatments history*), tab **Carbs and bolus**. Depending on the pump, the carbs might show together with insulin in one line or as a separate entry (e.g. with Dana RS).
3. **Long-press** the faulty carb entry — the list switches to **selection mode** with a checkbox on every line, and the entry is ticked (marked **1** above). Tick any further entries you want to remove as well.
4. Tap the **🗑 Delete** icon in the top bar (marked **2**) and confirm — the confirmation dialog lists exactly what will be removed.
5. Make sure carbs are removed successfully by checking **COB** on the **AAPS** main screen again.
6. Do the same for **IOB** if there is just one line including carbs and insulin.
7. Если углеводы не удалены должным образом, значение **COB** будет слишком высоким, что может привести к введению слишком большого количества инсулина.
8. Enter the correct carbs amount through the **Carbs** dialog (**Treatments** → **Carbs**) and set the correct event time.
9. If there was just one line including carbs and insulin the user should also re-add the amount of insulin. Make sure to set the correct event time and check **IOB** on the main screen after confirming the new entry.

