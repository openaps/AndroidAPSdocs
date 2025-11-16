# Подсчет активных углеводов COB

## Как AAPS вычисляет значение COB?

Когда пользователь вводит углеводы во время приема пищи или при коррекции, **AAPS** добавляет это значение к текущему количеству активных углеводов (**COB**). После этого **AAPS** рассчитывает усвоение углеводов на основе наблюдаемых отклонений от значений **ГК пользователя**. Скорость усвоения зависит от коэффициента чувствительности к углеводам (**CSF**). Эта функция не указана в **Профиле**, она рассчитывается алгоритмом **AAPS** в соответствии с настройками **ISF/I:C** и зависит от того, насколько 1 грамм углеводов потребляемой пищи увеличит гликемию **ГК** пользователя.

## Фактор чувствительности к углеводам

Подсчет в **AAPS** ведется по следующей формуле:

- усвоенные углеводы = отклонение * углеводный коэффициент ic / фактор чувствительности к инсулину isf.

При этом на ** Профиль ** пользователя происходит следующее воздействие:

- _повышение _ **IC ** -увеличение усваивамых каждые 5 минут углеводов тем самым уменьшает общее время усвоения;

- _повышение _ **ISF**- уменьшение усваиваемых каждые 5 минут углеводов тем самым продлевает общее время усвоения

- _изменение_ ** процента Профиля** - увеличение/уменьшение обеих величин таким образом не влияет на время усвоения углеводов.

Например, если в **Профиле** пользователя **ISF** равен 100, а углеводный коэффициент **I:C** равен 5, Rоэффициент чувствительности пользователя к углеводам будет равен 20. При каждом увеличении **гликемии** пользоателя на 20 мг/дл (1,1 ммоль/л) **AAPS** считает, что организм поглотил 1 г углеводов. Положительное значение активного инсулина **IOB** также влияет на расчет **COB**. Таким образом, если **AAPS** предсказывает, что **ГК пользователя** снизится на 20 мг/дл  (1,1 ммоль/л) из-за действия активного инсулина **IOB**, а гликемия вместо этого остается неизменной, то  алгоритм **AAPS** будет считать, что усвоен 1 г углеводов.

Усвоение углеводов также будет рассчитываться с помощью методов, описанных ниже, в зависимости от выбора алгоритма чувствительности в настройках **AAPS**.

## Чувствительность к углеводам - Oref1

Непоглощенные углеводы отбрасываются после указанного времени:

![Oref1](../images/cob_oref0_orange_II.png)

![Screenshot 2024-10-05 161009](../images/cob_oref0_orange_I.png)


## Чувствительность к углеводам - средневзвешенная

Усвоение принимается из рассчета, что активные углеводы COB = 0 по истечении указанного времени:

![AAPS, WheitedAverage](../images/cob_aaps2_orange_II.png)

Если вместо значения, рассчитанного на основе отклонений **ГК**, используется минимальное поглощение углеводов (min_5m_carbimpact), на графике **COB** появится оранжевая точка.

(CobCalculation-detection-of-wrong-cob-values)=
## Обнаружение неправильного значения COB

**AAPS** предупредит пользователя о неверном подсчете углеводов **COB** перед подачей болюса, если  от предыдущего приема пищи остаются активные углеводы **COB**,. В этом случае пользователь получит дополнительную подсказку на экране подтверждения калькулятора болюса.

### Как AndroidAPS обнаруживает неправильные значения активных углеводов COB?

Ordinarily __AAPS__ detects carb absorption through **BG** deviations. In case the user has entered carbs but **AAPS** cannot detect their estimated absorption through **BG** deviations, it will use the [min_5m_carbimpact](#Preferences-min_5m_carbimpact) method to calculate the absorption instead (so called ‘fallback’). As this method calculates only the minimal carb absorption without considering **BG** deviations, it might lead to incorrect COB values.

![Hint on wrong COB value](../images/Calculator_SlowCarbAbsorption.png)

In the screenshot above, 58% of time the carb absorption was calculated by the min_5m_carbimpact instead of the value detected from deviations. This indicates that the user may have had less **COB** than calculated by the algorithm.

### Как относиться к этому предупреждению?

- Consider cancelling the treatment - press ‘Cancel’ instead of OK.
- Calculate your upcoming meal again with bolus wizard leaving **COB** unticked.
- If you need a correction bolus, enter it manually.
- Be careful not to overdose or insulin stacking!


### Почему алгоритм неправильно распознает активные углеводы COB?

This could be because:
- Potentially the user overestimated carbs when entering them.
- Activity / exercise after your previous meal.
- I:C needs adjustment.
- Value for min_5m_carbimpact is wrong (recommended is 8 with SMB, 3 with AMA).


## Ручная коррекция введенных углеводов

If carbs are over or underestimated carbs this can be corrected through the Treatments tab and actions tab / menu as described [here](#screens-bolus-carbs).


## Carb correction - how to delete a Carb entry from Treatments


The ‘Treatments’ tab can be used to correct a faulty carb entry by deleting the entry in Treatments. This may be because the user over or underestimated the carb entry:

![COB_Screenshot 2024-10-05 170124](../images/e123d85d-907e-4545-bf1b-09fee4d42555.png)

1. Check and remember actual **COB** and **IOB** on the **AAPS'** homescreen.
2. Depending on the pump, the carbs in the Treatments tab might show together with insulin in one line or as a separate entry (i.e. with Dana RS).
3. Remove the entry by firstly 'ticking' the waste bin on the top right corner (see above photo, step 1). Then 'tick' the faulty carb amount (see above photo, step 2). Then 'tick' the ‘waste bin’ on the top right corner (step 1 again).
4. Make sure carbs are removed successfully by checking **COB** on **AAPS’** homescreen again.
5. Do the same for **IOB** if there is just one line in the Treatment tab including carbs and insulin.
6. If carbs are not removed as intended and additional carbs are added as explained in this section, the **COB** entry will be too high and this could lead to **AAPS** delivering too much insulin.
7. Enter correct carbs amount through carbs button on **AAPS’** homescreen and set the correct event time.
8. If there is just one line in Treatment tab including carbs and insulin the user should add also the amount of insulin. Make sure to set the correct event time and check **IOB** on homescreen after confirming the new entry.

