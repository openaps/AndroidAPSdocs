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

Эта цель обучения нужна, чтобы показать, как часто **AAPS** будет оценивать влияние базальной дозы на уровень гликемии и как часто он рекомендует изменить базальную скорость. В рамках этой цели обучения вы впервые активируете открытый цикл, и вручную смените скорость временного базала до 20 раз. Кроме того, вы увидите влияние временных целей и Временных Целей По Умолчанию (например, при физической нагрузке или гипотерапии). Если вы еще не знакомы со сменой временной базальной скорости в **AAPS**, обратитесь к [вкладке ДЕЙСТВИЯ](Screenshots#Screenshots-action-tab).

Расчетное время для прохождения этой цели: **7 дней**. Это обязательное время ожидания. Вы не сможете перейти к следующей цели раньше, даже если выполнили все изменения базальной скорости.

- Выберите «ОТКРЫТЫЙ ЦИКЛ» либо в меню «Настройки», либо нажав и удерживая значок «Цикл» в левой верхней части экрана НАЧАЛО.
- Просмотрите [Настройки](../Configuration/Preferences.md), чтобы настроить его для себя (прокрутите вниз до «Режим APS» и выберите «ОТКРЫТЫЙ ЦИКЛ».
- Вручную активируйте по крайней мере 20 предложений временного базала на протяжении 7 дней, введите их в помпу (физическую) и подтвердите в AAPS что вы их приняли. Убедитесь, что эти изменения базальной дозы отображаются в AAPS и Nightscout.
- При необходимости включите [временные Цели](../Usage/temptarget.md). После купирования гипогликемии используйте Временную Цель Гипо, чтобы предотвратить чрезмерную коррекцию системы при откате (при постгипогликемической гипергликемии).

### Сократите количество уведомлений

- Чтобы уменьшить количество предлагаемых изменений базальной скорости в режиме открытого цикла, установите более широкий целевой диапазон, например 90–150 мг/дл или 5,0–8,5 ммоль/л.
- Вы можете увеличить верхнюю границу диапазона на ночь (или вовсе отключить открытый цикл на это время).
- Вы можете установить минимальный процент предлагаемых изменений базальной скорости, чтобы повлиять на количество уведомлений.

  ```{image} ../images/OpenLoop_MinimalRequestChange2.png
  :alt: изменение минимального запроса на незамкнутом цикле
  ```

:::{admonition} Нет необходимости применять каждую рекомендацию системы!
:class: Note
:::

(Objectives-objective-5-Understanding-your-open-loop-including-its-temp-basal-recommendations)=

## Цель 5: Глубже понимаем работу системы в режиме незамкнутого цикла, включая ее рекомендации по временным базалам

В **Цели 5** вы начнете понимать, как формируются рекомендации по временному базальному инсулину. Сюда входит [определение логики базальной скорости](https\://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal. tml), анализ влияния с помощью наблюдения [линий прогноза в AAPS OVERVIEW](Screenshots-prediction-lines)/Nightscout и детальных расчетов, показанных на вкладке OPENAPS.

Расчетное время для прохождения этой цели: 7 дней.

Эта цель требует, чтобы вы определили и установили "максимально возможную для установки величину временного базала" (макс базал) согласно описанию в [OpenAPS-features](Open-APS-features#Open-APS-features-max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal). Это значение может быть установлено в Настройках > OpenAPS.
Убедитесь, что эта настройка безопасности установлена как в **AAPS**, так и в помпе.

Целевые значения гликемии следует несколько завысить до тех пор, пока вы не убедитесь в правильности всех вычислений и настроек.

**AAPS** допускает:

- установить нижнюю границу целевого значения ГК в диапазоне между 4 ммоль/л (72 мг/дл) и 10 ммоль/л (180 мг/дл)
- установить верхнюю границу целевого значения ГК в диапазоне между 5 ммоль/л (90 мг/дл) и 15 ммоль/л (225 мг/дл)
- временная цель может иметь любое значение от 4 до 15ммоль (72 мг/дл до 225 мг/дл)

Ваша цель является основным значением. Все расчеты основаны на нем. Оно отличается от целевого диапазона, в котором вы обычно стремитесь поддерживать значения уровня глюкозы в крови. Если целевой диапазон широк (скажем, 3 или более ммоль/л [50 мг/дл или более]), реакция **AAPS** незначительна. Это связано с тем, что, по прогнозам уровня глюкозы он всё ещё находится где-то в этом широком диапазоне, и поэтому, временные изменения базальной скорости предлагаются редко.

Можно поэкспериментировать и задать более близкие значения (например, чтобы их разность не превышала 1 ммоль) и наблюдать, как в результате изменится поведение системы.

Вы можете скорректировать (расширить или сузить) зеленую область графика, представляющую ваш целевой диапазон, введя значения в [Настройки](../Configuration/Preferences.md) > Диапазон для визуализации.

```{image} ../images/sign_stop.png
:alt: знак "Стоп"
```

:::{admonition} Если до этого вы использовали виртуальную помпу, переключитесь на настоящую инсулиновую помпу прямо сейчас!

Если вы используете открытый цикл с виртуальной помпой, остановитесь на этой цели. Нажмите «Подтвердить» в конце этой цели только после того, как перейдете на использование «настоящей» физической помпы.
:::

```{image} ../images/blank.png
:alt: пусто
```

(Objectives-objective-6-starting-to-close-the-loop-with-low-glucose-suspend)=

## Цель 6: Начинаем замыкать цикл с Low Glucose Suspend (прекращением подачи инсулина на низких сахарах)

```{image} ../images/sign_warning.png
:alt: предупреждающий знак
```

:::{admonition}  Замкнутый цикл не будет корректировать высокие значения ГК в цели 6, поскольку он ограничен только приостановкой на низком уровне глюкозы!
:class: Примечание
Вам придётся корректировать высокие значения ГК самостоятельно (вручную с помощью помпы или ручки)!
:::

В рамках **Цели 6** вы замкнёте цикл и активируете режим приостановки помпы на низкой ГК (LGS), пока значение [max IOB](Open-APS-features-maximum-total-iob-openaps-cant-go-over- openaps-max-iob) установлено на ноль. Для достижения этой цели вы должны оставаться в режиме LGS в течение 5 дней. Следует использовать это время, чтобы убедиться в правильности настроек профиля и что события по приостановке помпы на низкой ГК не запускаются слишком часто.

Расчетное время для прохождения этой цели: 5 дней.

Крайне важно, чтобы текущие параметры профиля (базал, ISF, IC) были тщательно протестированы, прежде чем вы закроете цикл в режиме приостановки помпы на низком ГК. Неправильные настройки профиля могут привести к гипогликемиям, которые придется купировать вручную. Точные настройки профиля помогут избежать необходимости в купировании гипогликемии в течение 5-дневного периода.

**Если эпизоды низкой гликемии все же сохраняются, поправьте параметры DIA (продолжительность действия инсулина), скорость базала, ISF (фактор чувствительности к инсулину) и пропорции инсулин-углеводы.**

Во время выполнения цели 6 **AAPS** обнуляет maxIOB. **Это переопределение будет отменено при переходе к цели 7.**

Это означает, что при выполнении цели 6, если уровень глюкозы падает, **AAPS** снизит количество базального инсулина. If sensor glucose levels are rising, **AAPS** will only increase the basal rate above your profile value if basal IOB is negative as a result of from a previous Low Glucose Suspend. Otherwise, **AAPS** will not increase basal above your current profile value, even if glucose levels are rising. This caution is to avoid hypos as you are learning to use **AAPS**.

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

Расчетное время для прохождения этой цели: 7 дней.

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
