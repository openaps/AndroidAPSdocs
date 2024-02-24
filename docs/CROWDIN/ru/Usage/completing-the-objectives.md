# Прохождение целей

**AAPS** имеет ряд **целей**, которые необходимо выполнить, чтобы перейти от базового открытого цикла к гибридному закрытому циклу и полной функциональности **AAPS**. Выполнение **целей** удостоверяет:

- Что вы всё правильно настроили в **AAPS**
- Вы изучили основной функционал **AAPS**
- У вас есть базовое понимание того, что делает ваша система, и, следовательно, почему вы можете ей доверять.

:::{admonition} Примечание

Регулярно делайте экспорт настроек **AAPS** после выполнения каждой **цели**!
:::

Настоятельно рекомендуем [экспортировать настройки](../Usage/ExportImportSettings.md) после завершения каждой **цели**. В процессе экспорта создается файл **настроек** (.json), резервную копию которого следует сохранить в одном или нескольких безопасных местах (_например, Google Drive, жёсткий диск, вложение к электронной почте _и т. д._). Это гарантирует сохранение прогресса в достижении **целей**, возможность легко восстановить его в случае случайного удаления, при помощи импорта последнего файла настроек. Наличие резервной копии файла **настроек** также пригодится, если вы хотите сменить смартфон **AAPS** по какой-либо причине (обновление/потеря/сломанный телефон _и т. д._)

В файле **settings** будет сохраняться не только ваш прогресс в выполнении целей обучения, но и ваши собственные настройки **AAPS**, такие как **максимальный болюс** _и т. д._

Если у вас не будет резервной копии **настроек**, и если что-нибудь случится со смартфоном **AAPS**, вам придется проходить **цели обучения** с самого начала.

В целом, выполнение **целей обучения** занимает около 6 недель (подробнее см. [сколько времени это может занять?](preparing-how-long-will-it-take?)) от настройки **AAPS** на смартфоне до "базового" гибридного замкнутого цикла (от цели 1 до цели 8), поэтому, хотя к **цели 5** и можно перейти, используя **виртуальную помпу** (при этом вводя инсулин каким-то другим методом), никому не хочется заново проходить все **цели** из-за потери или поломки телефона.

Помимо прохождения **целей обучения**, свое продвижение можно удалить и [вернуться к предыдущей цели](Objectives-go-back-in-objectives).

## Цель 1: Настройка визуализации и мониторинга, анализ базальной скорости и коэффициентов

- **AAPS** проверяет, работает ли ваши базовые настройки.

В противном случае вам придется перенастраивать до тех пор, пока базовая настройка не будет работать корректно для **AAPS**.

- Выберите правильный источник данных ГК CGMS/FGMS в [Конфигураторе](../Configuration/Config-Builder.md).  См. [источник СК](../Configuration/BG-Source.md) для дополнительной информации.
- Выберите помпу в [Конфигураторе](../Configuration/Config-Builder.md) и обеспечьте связь помпы с AAPS. Выберите **виртуальную помпу**, если используете помпу, работа которой не поддерживается в **AAPS** или если хотите пройти **цели обучения** заранее, пока используете другую систему введения инсулина. Дополнительную информацию см. в разделе [инсулиновая помпа](../Getting-Started/Pump-Choices.md).
- Следуйте инструкциям на странице [Nightscout](../Installing-AndroidAPS/Nightscout.md), чтобы убедиться, что **Nightscout** может получать и отображать данные.
- Note that URL in **NSClient** must be **_without_ "/api/v1/"** at the end - see [NSClient settings in Preferences](Preferences-nsclient).

Возможно, потребуется дождаться следующего значения ГК, прежде чем AAPS распознает его и примет в обработку.\*

## Цель 2: Научитесь контролировать AAPS

- Выполните следующие шаги в **AAPS**, как описано в этой **цели**.
- Нажмите на оранжевый текст «Не завершено» для доступа к каждому заданию.
- Если вы еще не знаете как выполнить действие, вам будут предоставлены ссылки на инструкции.

  ```{image} ../images/Objective2_V2_5.png
  :alt: снимок экрана Цель 2
  ```
- Задачи для выполнения **Цели 2**:
  - Установите свой профиль в 90% на 10 минут (_Подсказка_: нажмите и удерживайте на имени своего профиля на экране НАЧАЛО) (_Примечание_: AAPS не принимает базальные дозы ниже 0,05 ЕД/ч. Если ваш профиль содержит базальные дозы 0,06 ЕД/ч или ниже, вам потребуется создать новый профиль с более высокими базальными дозами, прежде чем выполнять эту задачу. Вернитесь к своему обычному профилю после выполнения этого задания.)
  - Симитируйте «принятие душа», отключив помпу в **AAPS** на 1 час (_Подсказка_: нажмите значок петли на экране НАЧАЛО, чтобы открыть диалоговое окно «Цикл»)
  - Завершите приём душа, повторно подключив помпу (_Подсказка_: нажмите на значок «Разъединено», чтобы открыть диалоговое окно цикла)
  - Создайте временную цель c продолжительностью 10 минут (_Подсказка_: нажмите на панель цели в экране НАЧАЛО, чтобы открыть диалоговое окно временной цели)
  - Активируйте плагин **ДЕЙСТВИЯ** в **Конфигураторе**, чтобы он появился в верхней строке прокручиваемого меню (_Подсказка_: перейдите в **Конфигуратор** и прокрутите вниз до пункта «Общее»)
  - Отобразите содержимое плагина Замкнутый Цикл
  - Масштабируйте диаграмму ГК, переключаясь между 6 часами, 12 часами, 18 часами и 24 часами данных за прошедшее время (_Подсказка_: короткое касание графика)

(Objectives-objective-3-prove-your-knowledge)=

## Цель 3: Подтвердите ваши знания

- Пройдите тест с выбором варианта ответа для проверки на знание AndroidAPS.

Некоторые пользователи считают **Цель 3** самой трудной. Прочитайте документацию **AAPS** вместе с вопросами. Если вы надолго застряли на цели после изучения документации **AAPS**, можете выполнить поиск в группе Facebook по запросу «Цель 3» (вполне вероятно, что ваш вопрос уже задавался и на него уже был дан ответ). Если вы все ещё застряли, спросите в группе Facebook или Discord. Эти группы могут дать подсказки или перенаправить вас на соответствующую часть документации AAPS.

Чтобы приступить к реализации цели 3, нажмите на оранжевый текст «Не завершено», чтобы получить доступ к соответствующему вопросу. Прочтите внимательно все вопросы и выберите ответ(ы).

- Чтобы уменьшить количество предлагаемых изменений базальной скорости в режиме открытого цикла, установите более широкий целевой диапазон, например 90–150 мг/дл или 5,0–8,5 ммоль/л.

- Вы можете увеличить верхнюю границу диапазона на ночь или вовсе отключить цикл на это время.

Для каждого вопроса правильным может быть больше одного ответа! Если выбран неверный ответ, вопрос будет заблокирован на определенное время (60 минут), прежде чем вы сможете вернуться и ответить на вопрос. Имейте в виду, что порядок ответов может измениться при следующей попытке ответа,, чтобы убедиться, что вы внимательно прочитали их и действительно понимали правильность (или нет) каждого ответа.

Когда **AAPS** устанавливается в первый раз, необходимо полностью пройти **цель 3** для того, чтобы перейти к **цели 4**. Каждая цель должна быть выполнена в последовательном порядке. Постепенно, по мере преодоления целей, будут открываться новые возможности приложения.

:::{admonition}  **Что произойдет, если к Цели добавятся новые вопросы при обновлении до более новой версии APPS?**
:class: Note
Время от времени в **AAPS** добавляется новая функциональность, что может потребовать добавления нового вопроса к Целям обучения, особенно к Цели 3. В результате любой новый вопрос, добавленный к **Цели 3**, будет помечен как «незавершённый», поскольку **AAPS** потребует от вас выполнить это действие. Не волнуйтесь, поскольку каждая **Цель** независима, вы **не потеряете существующую функциональность AAPS**, при условии, что другие Цели останутся выполненными.
:::

## Цель 4: Начните с открытого цикла

The purpose of this objective is to recognise how often **AAPS** will evaluate the basal rate's impact on glucose levels, and recommend temporary basal rate adjustments. As part of this objective, you will activate open looping for the first time, and will perform 20 proposed temporary basal rate changes manually on your pump. Furthermore, you will observe temporary and default temporary targets' impact (_e.g._ for activity or hypo treatments). If you are not familiar with setting a temporay basal rate change in **AAPS** yet, please refer to the [ACTIONS tab](Screenshots#Screenshots-action-tab).

Estimated time to complete this objective: **7 days**. This is a mandatory wait time. You can't proceed to the next Objective, even if you enacted all basal rate changes already.

- Select Open Loop either from the "Preferences" menu or by presssing and holding the Loop icon on the top left of the OVERVIEW screen.
- Walk through the [Preferences](../Configuration/Preferences.md) to set it up for you (scroll down to "Loop/APS Mode" and select "Open Loop".
- Manually enact at least 20 of the temporary basal rate suggestions over a period of 7 days; key them into your (physical) pump and confirm in AAPS that you have accepted them. Ensure these basal rate adjustments show up in AAPS and Nightscout.
- Enable [temp targets](../Usage/temptarget.md) if necessary. After treating a hypo use hypo temp targets to prevent the system from overcorrecting upon the bounce back.

### Сократите количество уведомлений

- To reduce the number of proposed basal rate changes while in Open Loop set a wider target range like 90-150 mg/dl or 5.0-8.5 mmol/l.
- You might even consider to raise your upper limit (or disable Open Loop) at night.
- You can set a minimum percentage for recommended basal rate changes to change the number of triggered notifications.

  ```{image} ../images/OpenLoop_MinimalRequestChange2.png
  :alt: изменение минимального запроса на незамкнутом цикле
  ```

:::{admonition} You don't need to action each and every system recommendation!
:class: Note
:::

(Objectives-objective-5-Understanding-your-open-loop-including-its-temp-basal-recommendations)=

## Цель 5: Глубже понимаем работу системы в режиме незамкнутого цикла, включая ее рекомендации по временным базалам

As part of **Objective 5** you will start to understand how temporary basal recommendations are derived. This includes the [determination of basal logic](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html), analyzing the impact by observing [prediction lines in AAPS OVERVIEW](Screenshots-prediction-lines)/Nightscout and looking at detailed calculations shown on your OPENAPS tab.

Estimated time to complete this objective: 7 days.

This Objective requires you to determine and set your “Max U/h a temp basal can be set to” (max-basal) value as described in [OpenAPS-features](Open-APS-features#Open-APS-features-max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal). This value can be set in Preferences > OpenAPS.
Make sure this safety setting is set in both **AAPS** and your insulin pump.

You might want to set your target higher than usual until you are comfortable with the calculations and settings.

**AAPS** allows:

- a low target to be a minimum of 4 mmol/l (72 mg/dl) or maximum of 10 mmol/l (180 mg/dl)
- a high target to be a minimum of 5 mmol/l (90 mg/dl) and maximum of 15 mmol/l (225 mg/dl)
- a temporary target as a single value can be anywhere in the range of 4 mmol/l to 15 mmol/l (72 mg/dl to 225 mg/dl)

Your target is a core value. All calculations are based on it. It is different from a target range which you usually aim to keep your blood glucose values in. If your target is very wide (say, 3 or more mmol/l [50 mg/dl or more] wide), you will often find little **AAPS** action. This is because sensor glucose is predicted to be somewhere in that wide range, and thus temporary basal rate changes are rarely suggested.

You may want to experiment with adjusting your targets being in a tighter range (say, 1 or less mmol/l [20 mg/dl or less] wide) and observe a resulting system behaviour.

You can adjust (widen or tighten) the graph’s green area, representing your target range, by entering different values in [Preferences](../Configuration/Preferences.md) > Range for Visualisation.

```{image} ../images/sign_stop.png
:alt: знак "Стоп"
```

:::{admonition} If you have been using a virtual pump, change to a real insulin pump now!

If you are open looping with a virtual pump stop here. Only click verify at the end of this Objective once you have changed to using a "real" physical pump.
:::

```{image} ../images/blank.png
:alt: пусто
```

(Objectives-objective-6-starting-to-close-the-loop-with-low-glucose-suspend)=

## Цель 6: Начинаем замыкать цикл с Low Glucose Suspend (прекращением подачи инсулина на низких сахарах)

```{image} ../images/sign_warning.png
:alt: предупреждающий знак
```

:::{admonition}  Closed loop will not correct high BG values in objective 6 as it is limited to low glucose suspend only!
:class: Note
You will still need to correct high BG values by yourself (manually with corrections by pump or pen)!
:::

As part of **Objective 6** you will close the loop and activate its Low Glucose Suspend (LGS) mode while [max IOB](Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob) is set to zero. You have to remain in LGS mode for 5 days to complete this objective. You should use this time to check if your profile settings are accurate and don't trigger LGS events too often.

Estimated time to complete this objective: 5 days.

It's crucial that your current profile (basal, ISF, IC) is well tested before you close your loop in Low Glucose Suspend mode. Incorrect profile settings might force you into hypo situations which have be  treated manually. An accurate profile will help to avoid needing low glucose treatments during the 5 days period.

**If you still observe frequent or severe low glucose episodes consider refining your DIA, basal, ISF and carb ratios.**

During objective 6, **AAPS** will take care of setting maxIOB to zero. **This override will be reversed when moving to objective 7.**

This means that when you are on Objective 6, if sensor glucose levels are dropping, **AAPS** will reduce basal insulin delivery for you. If sensor glucose levels are rising, **AAPS** will only increase the basal rate above your profile value if basal IOB is negative as a result of from a previous Low Glucose Suspend. Otherwise, **AAPS** will not increase basal above your current profile value, even if glucose levels are rising. This caution is to avoid hypos as you are learning to use **AAPS**.

**As a consequence, you have to handle high glucose values with manual insulin bolus corrections.**

- If your basal IOB is negative (see screenshot below) a temporary basal rate (TBR) > 100% can be triggered in objective 6.

```{image} ../images/Objective6_negIOB.png
:alt: Пример отрицательного IOB
```

- Set your target range slightly higher than you usually would aim at, just to be safe and to add a safety buffer.
- Enable 'Low Glucose Suspend' mode by pressing and holding the Loop icon at the top right corner of the OVERVIEW screen and selecting the Loop - LGS mode icon.
- Watch active temporary basals by looking at the turquoise basal text on the OVERVIEW screen or the turquoise basal render as part of the OVERVIEW graph.
- You may temporarily experience spikes following treated hypos without being able to increase basals on the rebound.

(Objectives-objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets)=

## Цель 7: Настройка замкнутого цикла с поднятием макс величины IOB выше 0 и постепенным понижением целевой ГК

To complete **Objective 7** you have to close your loop and raise your [maxIOB](Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob). maxIOB was zeroed out automatically in **objective 6**. This is now reverted. **AAPS** will start to use your defined maxIOB value to correct high glucose values.

Estimated time to complete this objective: 1 day.

- Select 'Closed Loop' either from [Preferences](../Configuration/Preferences.md) or by pressing and holding the Loop icon at the top right corner of the OVERVIEW screen, over a period of 1 day.

- Поднимите значение "Максимальный суммарный активный инсулин которое не может превысить алгоритм OpenAPS " (в OpenAPS называется "max-iob") выше 0. The default recommendation is "average mealbolus + 3x max daily basal" (for the SMB algorithm) or "3x max daily basal" (for the AMA algorithm) but you should slowly work up to this maximum until you know your settings work for you (max daily basal = the maximum hourly value in any time segment of the day).

Эта рекомендация должна рассматриваться как отправная точка. If you set it to the 3x and you are seeing AAPS giving too much insulin as glucose levels rise, then lower the "Maximum total IOB OpenAPS can’t go over" value. Alternatively, if you are very resistant, raise it very cautiously.

```{image} ../images/MaxDailyBasal2.png
:alt: максимальный суточный базал
```

- Once confident on how much IOB suits your looping patterns, reduce your targets to your desired level.

(Objectives-objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens)=

## Цель 8: Настраиваем базал и коэффициенты с последующей активацией autosens

As part of this objective you will revist your profile's performance and will use autosens functionality as an indicator for wrong settings.

Estimated time to complete this objective: 7 days.

- You can use [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) as a one off to check your basals remain accurate or do a traditional basal test.
- Enable [autosens](../Usage/Open-APS-features.md) over a period of 7 days and watch OVERVIEW's graph white line showing your insulin sensitivity rising or falling due to exercise or hormones etc. and keep an eye on the OpenAPS report tab which shows **AAPS** adjusting the basals and/or targets accordingly.

(Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)=

## Цель 9: Активация таких дополнительных функций для дневного времени как супер микро болюс SMB

In this objective you will tackle and use "Super Micro Bolus (SMB)" as one core functionality. After working through the mandatory readings you will have a good understanding of what SMBs are, how these work, reasonable starting point with SMBs and why basal is set to zero temporarily after SMBs are given (zero-temping). Estimated time to complete this objective: 28 days.

- The [SMB section in this documentation](Open-APS-features-super-micro-bolus-smb) and [oref1 coverage in the openAPSdocs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) are must-reads to understand SMB and the concept of zero-temping.
- Once done, you [raise maxIOB](Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob) to get SMBs working well. maxIOB now includes all IOB, not just accumulated basal. This threshold pauses SMBs until IOB drops below this value (_e.g._ maxIOB is set to 7 U and a bolus of 8 U is given to cover a meal: SMBs will be paused and not given unless IOB drops below 7 U). A good start is setting maxIOB = average mealbolus + 3x max daily basal (max daily basal = the maximum hourly value in any time segment of the day - see [objective 7](Objectives-objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets) as reference)
- Change "min_5m_carbimpact"-parameter (Preferences > Absorbtion settings > min_5m_carbimpact) to 8 as you move from an OpenAPS AMA algorithm to OpenAPS SMB. For AMAs the default value is 3. Read more about this setting [here](../Configuration/Preferences.html#min-5m-carbimpact)

(Objectives-objective-10-automation)=

## Цель 10: Автоматизация

You have to start **Objective 10** to be able to use Automations.

1. Read the documentation page  [Automation](../Usage/Automation.md) first.
2. Set-up the most basic automation rule;
   for example trigger an Android notification in few minutes:

- Select the notification tab
- From the top right 3 dots menu, select add rule
- Give a task name "My first automation notification"
- "edit"  "condition"
  - click the "+" symbol to add the first trigger
  - select "Time"  & "OK", it will create a default entry AT TODAY HOUR:MINUTE
  - click the MINUTE portion to edit the time such that it triggers in a few minutes. Then click ok to close
  - click "ok"  to close the Triggers screen
- "ADD" an "Action"
  - select "Notification", "OK"
  - click "Notification" to edit the message(Msg), enter something like "Ny first automation"
- wait until the time triggers the notification (note that depanding on your phone, it can be a few minutes late)

4. Experiment with setting up a more useful automation.

- The documentation page gives a few examples, and you can search for "automation" screenshots on the Facebook group. Since most people eat the same thing for breakfast at the same time every morning before school/work, a fairly common use-case can be to set a "before-breakfast-target" to set a slightly lower temporary target 30 minutes before having breakfast. In such case, your condition is likely to include "recurring time" which consists of selecting specific days of the week (Monday, Tuesday, Wednesday, Thursday, Friday) and a specific time (06:30 am). The action will consists of  "Start temp target" with a target value and a 30 minutes duration.

## Objective 11: Enabling additional features for daytime use, such as Dynamic Senstivity plugin (DynISF).

- Ensure that SMB is functioning properly
- Read the documentation concerning Dynamic ISF [here](../Usage/DynamicISF.md)
- Search the Facbook and Discord groups for discussions around Dynamic ISF and read about other users experiences and recommendations.
- Enable the **DynamicISF plugin** and identify the appropriate calibration for your body's uniqueness. It is advisable to begin with a value lower than 100% for safety reasons.

(Objectives-go-back-in-objectives)=

## Возможность возврата к предыдущим целям

If you want to go back in **objectives** progress for whatever reason you can do so by clicking at "clear finished".

```{image} ../images/Objective_ClearFinished.png
:alt: Вернуться в цели
```

## Цели в Android APS до версии 3.0

One objective was removed when **AAPS** version 3.0 was released.  Users of Android APS version 2.8.2.1 who are on older Android software (_i.e._ earlier than version 9) will be using an older set of Objectives which can be found [here](../Usage/Objectives_old.md).
