# Цели - начиная с Android APS 2.8.2.1

Это не новейшая версия целей Android APS.  На этой странице описываются Цели, которые существовали до версии 3.0.  Anyone using an older version of Android (i.e. prior to Android 9) and Android APS version 2.8.2.1 should refer to this page.

Please see [this page](../Usage/Objectives.md) for the current set of Objectives.

AndroidAPS ставит ряд Целей, которые необходимо выполнить, чтобы подготовиться к свойствам и параметрам настроек для безопасной работы алгоритма ИПЖ.  Цели позволяют удостовериться, что все сконфигурировано правильно, что мы понимаем, что, как и почему делает система и что мы можем доверять ей.

If you are **upgrading phones** then you can [export your settings](../Usage/ExportImportSettings.md) to keep your progress through the objectives. Not only will your progress through the objectives be saved, but also your safety settings such as max bolus etc.  If you do not export and import your settings then you will need to start the objectives from the beginning again.  It is a good idea to [backup your settings](../Usage/ExportImportSettings.html) frequently just in case.

If you want to go back in objectives see [explanation below](../Usage/Objectives.md#go-back-in-objectives).

## Цель 1: Настройка визуализации и мониторинга, анализ базальной скорости и коэффициентов

- Select the right blood glucose source for your setup.  See [BG Source](../Configuration/BG-Source.md) for more information.
- Select the right Pump in ConfigBuilder (select Virtual Pump if you are using a pump model with no AndroidAPS driver for looping) to ensure your pump status can communicate with AndroidAPS.
- If using DanaR pump then ensure you have followed [DanaR Insulin Pump](../Configuration/DanaR-Insulin-Pump.md) instructions to ensure the link between pump and AndroidAPS.
- Follow instructions in [Nightscout](../Installing-AndroidAPS/Nightscout.md) page to ensure Nightscout can receive and display this data.
- Note that URL in NSClient must be **WITHOUT /api/v1/** at the end - see [NSClient settings in Preferences](../Configuration/Preferences.md#nsclient).

*You may need to wait for the next blood glucose reading to arrive before AndroidAPS will recognise it.*

## Цель 2: научиться контролировать AndroidAPS

- Perform several actions in AndroidAPS as described in this objective.

- Click on the orange text "Not completed yet" to access the to-dos.

- Links will be provided to guide you in case you are not familiar with a specific action yet.

  ```{image} ../images/Objective2_V2_5.png
  :alt: снимок экрана Цель 2
  ```

## Цель 3: доказательство знаний

- Pass a multiple-choice exam testing your AndroidAPS knowledge.

- Click on the orange text "Not completed yet" to access the page with the question and answering options.

  ```{image} ../images/Objective3_V2_5.png
  :alt: снимок экрана Цель 3
  ```

- Links will be provided to guide you in case you are unsure about the correct answers yet.

- The questions for objective 3 have been completely rewritten by native speakers as of AAPS 2.8. Новые темы охватывают те же основные вопросы плюс несколько новых.

- These new questions will lead to some not answered questions even though you have successfully completed objective 3 in previous versions.

- Unanswered questions will affect you only if you start a new objective. Другими словами, если вы уже достигли всех целей, вы можете подождать и отвечать на новые вопросы позже, не теряя функционал AAPS.

## Цель 4: Начало на незамкнутом цикле

- Select Open Loop either from Preferences, or by pressing and holding the Loop button in top left of the home screen.
- Work through the [Preferences](../Configuration/Preferences.md) to set up for you.
- Manually enact at least 20 of the temporary basal rate suggestions over a period of 7 days; input them to your pump and confirm in AndroidAPS that you have accepted them.  Убедитесь, что эти данные представлены в AndroidAPS и Nightscout.
- Enable [temp targets](../Usage/temptarget.md) if necessary. Используйте врем. цели для купирования гипогликемии чтобы предотвратить слишком сильные коррекции после гипо.

### Сократите количество уведомлений

- To reduce the Number of decisions to be made while in Open Loop set wide target range like 90 - 150 mg/dl or 5,0 - 8,5 mmol/l.

- You might even want to wider upper limit (or disable Open Loop) at night.

- In Preferences you can set a minimum percentage for suggestion of basal rate change.

  ```{image} ../images/OpenLoop_MinimalRequestChange2.png
  :alt: изменение минимального запроса на незамкнутом цикле
  ```

- Also, you do not need to act every 5 minutes on all suggestions...

## Глубже понимаем незамкнутую систему Open Loop, включая ее рекомендации по временным базалам

- Start to understand the thinking behind the temp basal recommendations by looking at the [determine basal logic](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html) and both the [forecast line in AndroidAPS homescreen](../Getting-Started/Screenshots.md#prediction-lines)/Nightscout and the summary of outputs from the calculations in your OpenAPS tab.

До тех пор, пока мы не убедимся в правильности вычислений и настроек, целевые значения гликемии следует несколько завышать.  Система позволяет

- a low target to be a minimum of 4 mmol (72 mg/dl) or maximum of 10 mmol (180 mg/dl)
- a high target to be a minimum of 5 mmol (90 mg/dl) and maximum of 15 mmol (225 mg/dl)
- a temporary target as a single value can be anywhere in the range of 4 mmol to 15 mmol (72 mg/dl to 225 mg/dl)

Целевое значение - это значение, на котором основываются расчеты, а не то же самое, что долгосрочные целевые значения вашей ГК.  If your target is very wide (say, 3 or more mmol \[50 mg/dl or more\] wide), you will often find little AAPS action. Это связано с тем, что конечные значения ГК предполагаются где-то в этом широком диапазоне и, следовательно, не происходит много изменений базальной скорости.

You may want to experiment with adjusting your targets to be a closer together range (say, 1 or less mmol \[20 mg/dl or less\] wide) and observe how the behavior of your system changes as a result.

You can view a wider range (green lines) on the graph for the values you aim to keep your blood glucose within by entering different values in [Preferences](../Configuration/Preferences.md) > Range for Visualisation.

```{image} ../images/sign_stop.png
:alt: знак "Стоп"
```

### Остановитесь здесь, если пользуетесь незамкнутым циклом с виртуальной помпой - не нажимайте на кнопку «Верифицировать» в конце цели.

```{image} ../images/blank.png
:alt: пусто
```

## Цель 6: Начинаем замыкать цикл с Low Glucose Suspend (прекращением подачи инсулина на низких сахарах)

```{image} ../images/sign_warning.png
:alt: предупреждающий знак
```

### Замкнутый цикл не будет исправлять значения высокой ГК в цели 6, поскольку он ограничен приостановкой подачи инсулина на низких сахарах. Вы сами вручную должны корректировать высокие значения ГК!

- Select Closed Loop either from [Preferences](../Configuration/Preferences.md) or by pressing and holding the Open Loop button in the top left of the home screen.

- Set your target range slightly higher than you usually aim for, just to be safe.

- Watch  how temporary basals are active by viewing the blue basal text on the homescreen or the blue basal render on the homescreen graph.

- Ensure your settings have supported AndroidAPS to avoid having to treat a low glucose over a period of 5 days.  Если эпизоды низкой гликемии все же сохраняются, поправьте параметры DIA (продолжительность действия инсулина), скорость базала, ISF (фактор чувствительности к инсулину) и пропорции инсулин-углеводы.

- You don't have to change your settings. В процессе выполнения цели 6 maxIOB автоматически устанавливается на ноль. Это переопределение будет отменено при переходе к цели 7.

- The system will override your maxIOB settings to zero, which means if blood glucose is dropping it can reduce basal for you, but if blood glucose is rising then it will only increase basal if the basal IOB is negative (from a previous Low Glucose Suspend), otherwise basal rates will remain the same as your selected profile.

  ```{image} ../images/Objective6_negIOB.png
  :alt: Пример отрицательного IOB
  ```

- If your basal IOB is negative (see screenshot above) a TBR > 100% can be issued also in objective 6.

- Возможны временные пики вслед за мерами против гипогликемии без возможности увеличить базу на откате._

## Цель 7: настройка замкнутого цикла с поднятием макс величины активного инсулина IOB выше 0 и постепенным понижением целевых значений ГК

- Raise your 'Maximum total IOB OpenAPS can’t go over' (in OpenAPS called 'max-iob') above 0 over a period of 1 day, the default recommendation is "average mealbolus + 3x max daily basal"(for SMB algorithm) or "3x max daily basal" (for older AMA algorithm) but you should slowly work up to this until you know your settings work for you (max daily basal = the maximum hourly value in any time segment of the day).

  Эта рекомендация должна рассматриваться как отправная точка. Если вы установили троекратную величину и видите признаки того, что для вас это слишком жестко, понизьте ее. Если у вас высокая резистентность повышайте эту величину постепенно.

  ```{image} ../images/MaxDailyBasal2.png
  :alt: максимальный суточный базал
  ```

- Once confident on how much IOB suits your looping patterns then reduce your targets to your desired level.

## Цель 8: При необходимости скорректируйте базал и коэффициенты и затем активируйте авто-чувствительность autosens

- You can use [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) as a one off to check your basals remain accurate or do a traditional basal test.
- Enable [autosens](../Usage/Open-APS-features.md) over a period of 7 days and watch the white line on the homescreen graph show how your sensitivity to insulin may be rising or falling as a result of exercise or hormones etc. and keep an eye in the OpenAPS report tab how AndroidAPS is adjusting the basals and/or targets accordingly.

*Don’t forget to record your looping in* [this form](https://bit.ly/nowlooping) *logging AndroidAPS as your type of DIY loop software, if you have not already done so.*

## Цель 9: Пробуйте дополнительные функции для дневного времени и убедитесь в надежности закрытой системы

- Before AAPS version 2.7 meal assist (MA) was the basic algorithm for AAPS and completing objective 8 was necessary to activate [advanced meal assist (AMA)](../Usage/Open-APS-features.md#advanced-meal-assist-ama).
- As [advanced meal assist (AMA)](../Usage/Open-APS-features.md#advanced-meal-assist-ama) is the standard algorithm from AAPS version 2.7 onwards use the following 28 days to try features you haven't used yet and get more confident with you closed loop system.

## Цель 10: Активация таких дополнительных функций алгоритма oref1 для работы в дневное время, как супер микроболюс SMB

- You must read the [SMB chapter in this wiki](../Usage/Open-APS-features.md#super-micro-bolus-smb) and [chapter oref1 in openAPSdocs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) to understand how SMB works, especially what's the idea behind zero-temping.
- Then you ought to [rise maxIOB](../Usage/Open-APS-features.md#maximum-total-iob-openaps-cant-go-over-openaps-max-iob) to get SMBs working fine. maxIOB теперь включает весь активный инсулин IOB, а не только добавленный базал. That is, if given a bolus of 8 U for a meal and maxIOB is 7 U, no SMBs will be delivered until IOB drops below 7 U. A good start is maxIOB = average mealbolus + 3x max daily basal (max daily basal = the maximum hourly value in any time segment of the day - see [objective 7](../Usage/Objectives#objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets) for an illustration)
- min_5m_carbimpact default in absorption settings has changed from 3 to 8 going from AMA to SMB. Если вы переходите с AMA к SMB, то вам нужно изменить его вручную.

## Цель 11: Автоматизация

- You have to start objective 11 to be able to use [Automation](../Usage/Automation.md).
- Make sure you have completed all objectives including exam [../Usage/Objectives.md#objective-3-prove-your-knowledge](../Usage/Objectives#objective-3-prove-your-knowledge).
- Completing previous objectives will not effect other objectives you have already finished. You will keep all finished objectives!

## Возможность возврата к предыдущим целям

Если вы хотите вернуться к целям по какой-либо причине, вы можете сделать это, нажав на "очистить завершенное".

```{image} ../images/Objective_ClearFinished.png
:alt: Вернуться в цели
```
