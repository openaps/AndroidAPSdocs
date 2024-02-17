# Временные цели

## Что такое временные цели, где их можно задать и сконфигурировать?

**Временная Цель** (или сокращенно **ВЦ**) - это функция ** AAPS**, которая позволяет изменять целевой диапазон **ГК** в зависимости от вида активности в течение дня (приём пищи, физ нагрузка). Это достигается за счет того, что **AAPS** вносит корректировки в расходование инсулина пользователем.

**AAPS** предусматривает три варианта ** временных целей **, подходящих для физических упражнений (**Временная цель- Нагрузка**), приема пищи (**Временная цель- Ожидаемый прием пищи**) и прогнозируемой гипогликемии (**Временная цель-Гипо**). **Временные цели** находятся на вкладке **Действия**.

Пользователи должны иметь реалистичные ожидания при выборе **Временной цели** в **AAPS**. Успех достижения желаемого целевого показателя **ГК** будет зависеть от множества факторов: точности настроек **AAPS**, общего контроля уровня **ГК**, **количества активного инсулиноа IOB**, параметра чувствительности к инсулину, резистентности к инсулину, интенсивности нагрузок и т. д.

Для достижения желаемого значения **ГК** может потребоваться около 30 минут или больше с момента активации **Временной Цели**. **AAPS** не в состоянии достичь целевой **ГК** немедленно, и пользователи должны помнить об этом при использовании **Врем-Цели**.

В таблице ниже приведены особенности **Врем-Цель-Нагрузка**, **Врем-цель-Ожидаемый приём пищи** и **Врем-Цель-Гипо**.

![TT1_Screenshot 2024-01-26 231223](https://github.com/openaps/AndroidAPSdocs/assets/137224335/73eeadf1-c17e-4955-afd8-f49c281331e3)

## Как выбрать временную цель?

1. перейдите во вкладку **Действия** главного экрана **AAPS**;
2. выберите иконку **Временная Цель**; и затем
3. настройте желаемые параметры **Врем-Цели**

![TT2_Screenshot 2024-01-26 194028](https://github.com/openaps/AndroidAPSdocs/assets/137224335/9b53d358-dc97-4dc5-9ffc-3d24bceea203)

Кроме этого, **Врем-Цель** можно активировать с помощью кнопки «Углеводы» (шаг 1), выбрав нужную **Врем-Цель** в иконках (шаг 2), как показано ниже:

![TT3_Screenshot 2024-01-26 194318](https://github.com/openaps/AndroidAPSdocs/assets/137224335/a0627667-fb73-4791-8a1a-328eaaf1af2a)

## Как изменить временную цель по умолчанию и переопределить её своими собственными значениями?

Чтобы изменить «целевой диапазон ГК» и «продолжительность», для настроек по умолчанию **Врем-Цель**, перейдите в меню **AAPS** в правом верхнем углу и

1. выберите **Настройки** 
2. прокрутите вниз до "Обзор" 
3. выберите 'Временные цели по умолчанию’
4. шаг 4 указывает (ниже), где изменить временной диапазон **ВЦ- Ожидаемый приём пищи**
5. шаг 5 указывает (ниже), где изменить **целевое значение ГК при ожидаемом приеме пищи eatingsoon** (и те же шаги можно повторить для **целевое значение ГК при физической нагрузке** и **целевое значение ГК при гипо**.

![TT7_Screenshot 2024-01-26 213136](https://github.com/openaps/AndroidAPSdocs/assets/137224335/82cc08af-82bf-49e2-9a66-178fc9f6aa56)

## Как отменить Врем-Цель?

Чтобы отменить запущенную **Врем-Цель**, нажмите кнопку “Отмена” в разделе **Временная Цель** во вкладке **Действия**, как показано ниже.

![TT5_Screenshot 2024-01-26 195309](https://github.com/openaps/AndroidAPSdocs/assets/137224335/a9299ec6-34ef-43da-a36c-4c06340878dc)

Or short-click on the ‘BG Target’ in the yellow/green box located in the top right corner of **AAPS**, and select ‘cancel’ as shown below:

![Задать врем цель](../images/TempTarget_Set2.png)

## Как выбрать "Временные цели по умолчанию"

Чтобы выбрать **Временные цели по умолчанию**, пользователь может кратковременно нажать по цели в правом верхнем углу вкладки "Начало", перейти в диалоговое окно **Временные Цели**, и нажать на кнопки «Ожидаемый приём пищи», «Активность», «Гипо» или воспользоваться ярлыками на оранжевой кнопке «Углеводы».

- Чтобы слегка изменить значения **Временных-Целей-по-умолчанию**t, *длительно нажмите* кнопку «Ожидаемый приём пищи», «Активность» или «Гипо», а затем отредактируйте значения в полях «Цель» или «Длительность».
- Если **Временная цель** запущена, в диалоговом окне отображается дополнительная кнопка «Отмена» для ее отмены.

## Временная цель Гипо 

**Временная-Цель Гипо** позволяет **AAPS** предотвратить снижение уровня сахара в крови пользователя за счет снижения потребления инсулина. Если пользователь прогнозирует, что его **ГК** снизится: обычно система **AAPS** должна самостоятельно справится с этим, но многое будет зависеть от правильности настроек пользователя **AAPS**. **Временная-Цель Гипо** позволяет **AAPS** снизить подачу инсулина до прогнозируемого минимума.

Sometimes when hypo-treated carbs are eaten, the user's **BG** can rapidly rise, and **AAPS** will correct against the fast rising **BG** by enabling **SMBs**.

Some users wish to avoid **SMBs** being given during **Temp-Target Hypo**. This is achieved by deactivating *'Enable SMB with high Temp-Target'* in **Preferences** (see further below):

- In (Advanced, objective 9): the user can enable *“High Temp-Targets raises sensitivity”* for **Temp-Targets** of 100mg/dl or 5.5mmol/l or higher in OpenAPS SMB, **AAPS** will be more sensitive.

- In (Advanced, objective 9): the user can deactivate *“SMB with high temp target”*, so that even if **AAPS** has COB > 0, “SMB with Temp-Target” or “SMB always” enabled and OpenAPS SMB active, **AAPS** will not give SMBs while high temp targets are active.

Note: if the user enters carbs with the carb button and your blood glucose is less than 72mg/dl or 4mmol/l, **Temp-Target Hypo** is automatically enabled by **AAPS**.

## Временная цель Нагрузка

Before and during exercise, the user may require a higher target to prevent hypoglycemia during the activity.

To simplify **Temp-Target Activity**, the user can configure a default **Temp-Target - Activity** to raise **BG** levels by reducing insulin usage in order to slow down **BG** fall and avoid hypoglycemia.

New users to **AAPS** may need to experiment and personalise their **Temp-Target Activity** default settings in order to optimise this feature to work best for them. Everyone is different when it comes to attaining stable BG control during exercise. See also the [sports section in FAQ](FAQ-sports). in FAQ.

Some users also prefer to activate a **Profile switch** (being a Profile decrease < 100% to reduced insulin delivery by **AAPS**) before and while **Temp-Target Activity** is on.

Advanced, objective 9: users can enable *'High Temp-Targets raises sensitivity'* for **Temp-Targets** higher or equal 100mg/dl or 5.5mmol/L in OpenAPS **SMB**. Then **AAPS** is more sensitive.

Additionally, if *'SMB with high Temp-Target'* is deactivated, **AAPS** will not deliver **SMBs**, even with COB > 0, *'SMB with Temp-Target-* or *'SMB always'* enabled and OpenAPS **SMB** active.

## Временная цель Ожидаемый прием пищи

**Temp-Target -Eating soon** can help accomplish a gentle drive down of **BG** and ensure there is ample **IOB** before eating.

This can be an important tool for those users who do not pre bolus, however the efficacy of **Temp-Target -Eating soon** will depend on a number of factors including: the user’s settings, if they eat a low carb diet and whether they are using a fast acting insulin (like Fiasp or Lyjumjev) in order to eliminate the need to pre bolus. Ordinarily, until users are experienced in **AAPS** they should expect to pre bolus when using **Temp-Target -Eating soon** and this is particularly so, if eating a high carb diet.

You can read more about the “Eating soon mode” in the article ['How to do “eating soon” mode'](https://diyps.org/2015/03/26/how-to-do-eating-soon-mode-diyps-lessons-learned/) or [here](https://diyps.org/tag/eating-soon-mode/).

Advanced, [objective 9](Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb): If you use OpenAPS SMB and have *'Low temp target lowers sensitivity'*, **AAPS** works a little bit more aggressively. For this option there is a requirement for **Temp-Target** to be less than 100mg/dl or 5.5mmol/l.

## How do I turn off SMB during Temp-Targets?

To action this select in **Preferences** > and deactivate *'Enable SMB with high Temp-Target'*.

![TT8_Screenshot 2024-01-26 230757](https://github.com/openaps/AndroidAPSdocs/assets/137224335/4471540e-fe2a-4ade-8f99-18ca0372da52)

This will ensure **AAPS** will not give **SMBs**, even with COB > 0, *'SMB with Temp-Target'* or *'SMB alway'* enabled and OpenAPS SMB active.

## Настраиваемая временная цель

If the user requires an manual adjustment to the **Temp-Target** *long press* the ‘Eating Soon’, ‘Activity’ or ‘Hypo’ button and then edit the values to the desired **BG** ‘target’ or ‘duration’ field.

![Установите временные цели через вкладку Действия](../images/TempTarget_ActionTab.png)