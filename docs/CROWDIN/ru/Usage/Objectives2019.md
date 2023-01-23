# Цели

AndroidAPS ставит ряд Целей, которые необходимо выполнить, чтобы подготовиться к свойствам и параметрам настроек для безопасной работы алгоритма ИПЖ.  Цели позволяют удостовериться, что все сконфигурировано правильно, что мы понимаем, что, как и почему делает система и что мы можем доверять ей.

If you are **upgrading phones** then you can [export your settings](../Usage/ExportImportSettings.md) to keep your progress through the objectives. Ваш прогресс будет сохранен не только в прохождении целей, но и в настройках безопасности, таких как максимальный болюс и т. д.  Если настройки не переносить, то движение к целям придется начинать заново.  It is a good idea to [backup your settings](../Usage/ExportImportSettings.html) frequently just in case.

## Цель 1: Настройка визуализации и мониторинга, анализ базальной скорости и коэффициентов

- Select the right blood glucose source for your setup.  See [BG Source](../Configuration/BG-Source.md) for more information.
- Select the right Pump in ConfigBuilder (select Virtual Pump if you are using a pump model with no AndroidAPS driver for looping) to ensure your pump status can communicate with AndroidAPS.
- If using DanaR pump then ensure you have followed [DanaR Insulin Pump](../Configuration/DanaR-Insulin-Pump.md) instructions to ensure the link between pump and AndroidAPS.
- Follow instructions in [Nightscout](../Installing-AndroidAPS/Nightscout.md) page to ensure Nightscout can receive and display this data.
- Note that URL in NSClient must be **WITHOUT /api/v1/** at the end - see [NSClient settings in Preferences](../Configuration/Preferences#ns-client).

*You may need to wait for the next blood glucose reading to arrive before AndroidAPS will recognise it.*

## Objective 2: Learn how to control AndroidAPS

- Perform several actions in AndroidAPS as described in this objective.

- Click on the orange text "Not completed yet" to access the to-dos.

- Links will be provided to guide you in case you are not familiar with a specific action yet.

  > ```{image} ../images/Objective2_V2_5.png
  > :alt: Screenshot objective 2
  > ```

## Objective 3: Prove your knowledge

- Pass a multiple-choice exam testing your AndroidAPS knowledge.

- Click on the orange text "Not completed yet" to access the page with the question and answering optons.

- Links will be provided to guide you in case you are unsure abouit the correct answers yet.

  > ```{image} ../images/Objective3_V2_5.png
  > :alt: Screenshot objective 3
  > ```

## Objective 4: Starting on an open loop

- Select Open Loop either from Preferences, or by pressing and holding the Loop button in top left of the home screen.
- Work through the [Preferences](../Configuration/Preferences.md) to set up for you.
- Manually enact at least 20 of the temporary basal rate suggestions over a period of 7 days; input them to your pump and confirm in AndroidAPS that you have accepted them.  Убедитесь, что эти данные представлены в AndroidAPS и Nightscout.
- Enable [temp targets](../Usage/temptarget.md) if necessary. Используйте врем. цели для купирования гипогликемии чтобы предотвратить слишком сильные коррекции после гипо.

## Objective 5: Understanding your open loop, including its temp basal recommendations

- Start to understand the thinking behind the temp basal recommendations by looking at the [determine basal logic](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html) and both the [forecast line in AndroidAPS homescreen](../Getting-Started/Screenshots#section-e)/Nightscout and the summary of outputs from the calculations in your OpenAPS tab.

До тех пор, пока мы не убедимся в правильности вычислений и настроек, целевые значения гликемии следует несколько завысить.  System allows

- a low target to be a minimum of 4 mmol (72 mg/dl) or maximum of 10 mmol (180 mg/dl)
- a high target to be a minimum of 5 mmol (90 mg/dl) and maximum of 15 mmol (225 mg/dl)
- a temporary target as a single value can be anywhere in the range of 4 mmol to 15 mmol (72 mg/dl to 225 mg/dl)

Целевое значение - это значение, на котором основываются расчеты, а не то же самое, что долгосрочные целевые значения вашей ГК.  If your target is very wide (say, 3 or more mmol \[50 mg/dl or more\] wide), you will often find little AAPS action. This is because blood glucose is eventually predicted to be somewhere in that wide range and therefore not many fluctuating temporary basal rates are suggested.

You may want to experiment with adjusting your targets to be a closer together range (say, 1 or less mmol \[20 mg/dl or less\] wide), and observe how the behavior of your system changes as a result.

You can view a wider range (green lines) on the graph for the values you aim to keep your blood glucose within by entering different values in [Preferences](../Configuration/Preferences.md) > Range for Visualisation.

```{image} ../images/sign_stop.png
:alt: Stop sign
```

### Остановитесь здесь, если пользуетесь незамкнутым циклом с виртуальной помпой - не нажимайте на кнопку «Верифицировать» в конце цели.

```{image} ../images/blank.png
:alt: blank
```

## Objective 6: Starting to close the loop with Low Glucose Suspend

```{image} ../images/sign_warning.png
:alt: Warning sign
```

### Closed loop will not correct high bg values in objective 6 as it is limited to low glucose suspend. Вы сами вручную должны корректировать высокие значения ГК!

- Select Closed Loop either from [Preferences](../Configuration/Preferences.md) or by pressing and holding the Open Loop button in the top left of the home screen.
- Set your target range slightly higher than you usually aim for, just to be safe.
- Watch  how temporary basals are active by viewing the blue basal text on the homescreen or the blue basal render on the homescreen graph.
- Ensure your settings have supported AndroidAPS to avoid having to treat a low glucose over a period of 5 days.  Если эпизоды низкой гликемии все же сохраняются, поправьте параметры DIA (продолжительность действия инсулина), скорость базала, ISF (фактор чувствительности к инсулину) и пропорции инсулин-углеводы.

*The system will override your maxIOB settings to zero, which means if blood glucose is dropping it can reduce basal for you, but if blood glucose is rising then it will only increase basal if the IOB is negative (from a previous Low Glucose Suspend), otherwise basal rates will remain the same as your selected profile.  You may temporarily experience spikes following treated hypos without the ability to increase basal on the rebound.*

## Objective 7: Tuning the closed loop, raising max IOB above 0 and gradually lowering BG targets

- Raise your 'Maximum total IOB OpenAPS can’t go over' (in OpenAPS called 'max-iob') above 0 over a period of 1 day, the default recommendation is "average mealbolus + 3x max daily basal"(for SMB algorithm) or "3x max daily basal" (for older AMA algorithm) but you should slowly work up to this until you know your settings work for you (max daily basal = the maximum hourly value in any time segment of the day).

  Эта рекомендация должна рассматриваться как отправная точка. Если вы установили троекратную величину и видите признаки того, что для вас это слишком жестко, понизьте ее. Если у вас высокая резистентность повышайте эту величину постепенно.

  > ```{image} ../images/MaxDailyBasal2.png
  > :alt: max daily basal
  > ```

- Once confident on how much IOB suits your looping patterns then reduce your targets to your desired level.

## Objective 8: Adjust basals and ratios if needed, and then enable autosens

- You can use [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) as a one off to check your basals remain accurate, or do a traditional basal test.
- Enable [autosens](../Usage/Open-APS-features.md) over a period of 7 days and watch the white line on the homescreen graph show how your sensitivity to insulin may be rising or falling as a result of exercise or hormones etc, and keep an eye in the OpenAPS report tab how AndroidAPS is adjusting the basals and/or targets accordingly.

*Don’t forget to record your looping in \`this form \<http://bit.ly/nowlooping>\`\_ logging AndroidAPS as your type of DIY loop software, if you have not already done so.*

## Objective 9: Enabling additional oref0 features for daytime use, such as advanced meal assist (AMA)

- Now you should feel confident with how AndroidAPS works and what settings reflect your diabetes best
- Then over a period of 28 days you can try additional features that automate even more of the work for you such as the [advanced meal assist](../Usage/Open-APS-features#advanced-meal-assist-ama)

## Objective 10: Enabling additional oref1 features for daytime use, such as super micro bolus (SMB)

- You must read the [SMB chapter in this wiki](../Usage/Open-APS-features#super-micro-bolus-smb) and [chapter oref1 in openAPSdocs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) to understand how SMB works, especially what's the idea behind zero-temping.
- Then you ought to [rise maxIOB](../Usage/Open-APS-features#maximum-total-iob-openaps-cant-go-over-openaps-max-iob) to get SMBs working fine. maxIOB теперь включает весь активный инсулин IOB, а не только добавленный базал. That is, if given a bolus of 8 U for a meal and maxIOB is 7 U, no SMBs will be delivered until IOB drops below 7 U. A good start is maxIOB = average mealbolus + 3x max daily basal (max daily basal = the maximum hourly value in any time segment of the day - see [objective 7](../Usage/Objectives2019.md#objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets) for an illustration)
- min_5m_carbimpact default in absorption settings has changed from 3 to 8 going from AMA to SMB. Если вы переходите с AMA на SMB, то вам нужно изменить его вручную
