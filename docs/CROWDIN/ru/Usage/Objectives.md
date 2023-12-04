# Цели

AAPS has a series of Objectives that need to be completed to walk you through the features and settings of safe looping.  Цели позволяют удостовериться, что все настроено правильно, что вы понимаете что, как и почему делает программа, и что ей можно доверять.

Если вы **обновляете телефон**, то можете [экспортировать настройки](../Usage/ExportImportSettings.md) чтобы сохранить прохождение целей. При этом будут сохранен не только ваш прогресс в прохождении целей, но и настройки безопасности, такие как максимальный болюс и т. п. Если вы не сделаете экспорт-импорт настроек - вам придется заново проходить все цели.  Рекомендуется периодически [делать бекап актуальных настроек](../Usage/ExportImportSettings.html),  на всякий случай.

Если вы захотите снова пройти цели - смотрите [объяснения ниже](Objectives-go-back-in-objectives).

## Цель 1: Настройка визуализации и мониторинга, анализ базальной скорости и коэффициентов

- Выберите свой источник данных ГК.  См. [Источники ГК](../Configuration/BG-Source.md) для дополнительной информации.
- Select the right Pump in ConfigBuilder (select Virtual Pump if you are using a pump model with no AAPS driver for looping) to ensure your pump status can communicate with AAPS.
- If using DanaR pump then ensure you have followed [DanaR Insulin Pump](../Configuration/DanaR-Insulin-Pump.md) instructions to ensure the link between pump and AAPS.
- You need to establish a data repository/reporting platform to complete this objective. That can be accomplished with either Nightscout or Tidepool (or both). Follow instructions at the [Nightscout](../Installing-AndroidAPS/Nightscout.md) or [Tidepool](../Installing-AndroidAPS/Tidepool.md) page for instructions.
- Обратите внимание: URL в Клиенте NS **не должен содержать строку /api/v1/** в конце - см. подробнее в [настройках Клиент NS](Preferences-nsclient).

*You may need to wait for the next blood glucose reading to arrive before AAPS will recognise it.*

## Objective 2: Learn how to control AAPS

- Perform several actions in AAPS as described in this objective.

- Нажмите на оранжевый текст «Не завершено» для доступа к каждому заданию.

- Если вы еще не знакомы с конкретным действием - вам будут предоставлены ссылки на инструкции из этой документации.

  ```{image} ../images/Objective2_V2_5.png
  :alt: снимок экрана Цель 2
  ```

(Objectives-objective-3-prove-your-knowledge)=
## Цель 3: Подтвердите ваши знания

- Pass a multiple-choice exam testing your AAPS knowledge.

- Чтобы открыть сам вопрос и варианты ответов на него - нажмите на оранжевый текст "Не завершено".

  ```{image} ../images/Objective3_V2_5.png
  :alt: снимок экрана Цель 3
  ```

- Если вам требуется помощь с поиском правильного ответа - воспользуйтесь приложенной к вопросу ссылкой на соответствующую статью из этой документации.

- Для версии 2.8 вопросы 3 цели были полностью переработаны носителями языка. Они охватывают как прежние базовые темы, так и несколько новых.

- Поэтому, если вы проходили 3 цель в предыдущих версиях программы - у вас появятся новые неотвеченные вопросы.

- Неотвеченные вопросы окажут влияние только в том случае, если вы еще не прошли все цели и приступаете к новой. Другими словами, если вы уже прошли все цели ранее - вы можете ответить на новые вопросы позднее, не теряя функционал AAPS.

## Цель 4: Начните с открытого цикла

- Выберите открытый цикл либо в настройках, либо нажав кнопку "Открытый цикл" в левом верхнем углу главного экрана.
- Зайдите в [Настройки](../Configuration/Preferences.md) и измените их исходя из своих потребностей.
- Manually enact at least 20 of the temporary basal rate suggestions over a period of 7 days; input them to your pump and confirm in AAPS that you have accepted them.  Ensure this data shows in AAPS and Nightscout.
- Применяйте [временные цели (ВЦ)](../Usage/temptarget.md) при необходимости. Используйте ВЦ Гипо для купирования гипогликемии, чтобы предотвратить слишком активное скалывание растущей после купирования гипо ГК.

### Сократите количество уведомлений

- Для сокращения количества предложений во время работы в режиме Открытого цикла установите широкий целевой диапазон, например, 90-150 мг/дл или 5,0-8,5 ммоль/л.

- Возможно, вы захотите увеличить верхнюю границу диапазона на ночь (или вовсе отключить цикл на это время).

- В Настройках можно указать процент изменения базала, "минимальный запрос на изменения", при превышении которого система предложит вам внести соответствующие изменения в помпе.

  ```{image} ../images/OpenLoop_MinimalRequestChange2.png
  :alt: изменение минимального запроса на незамкнутом цикле
  ```

- Необязательно принимать все-все предложения алгоритма каждые 5 минут...

## Цель 5: Глубже понимаем работу системы в режиме незамкнутого цикла, включая ее рекомендации по временным базалам

- Start to understand the thinking behind the temp basal recommendations by looking at the [determine basal logic](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html) and both the [forecast line in AAPS homescreen](Screenshots-prediction-lines)/Nightscout and the summary of outputs from the calculations in your OpenAPS tab.

Целевые значения гликемии следует несколько завысить до тех пор, пока вы не убедитесь в правильности всех вычислений и настроек.  Система позволяет

- установить нижнюю границу целевого значения ГК в диапазоне между 4 ммоль/л (72 мг/дл) и 10 ммоль/л (180 мг/дл)
- установить верхнюю границу целевого значения ГК в диапазоне между 5 ммоль/л (90 мг/дл) и 15 ммоль/л (225 мг/дл)
- a temporary target as a single value can be anywhere in the range of 4 mmol to 15 mmol (72 mg/dl to 225 mg/dl)

Целевое значение - это значение, на котором основываются расчеты, это не тот диапазон, в рамках которого вам надо стараться удерживать вашу ГК.  Если ваш целевой диапазон очень широк (скажем, 3 или более ммоль/л \[ 50 мг/дл или более\]), то AAPS будет редко запрашивать какие-либо изменения. Это связано с тем, что расчетные значения ГК будут располагаться где-то в этом широком диапазоне и, следовательно, изменения базальной скорости не потребуются.

Можете поэкспериментировать и задать более узкий диапазон значений (например, чтобы разность между нижней и верхней границами не превышала 1 ммоль/л) и понаблюдать, как при этом изменится поведение системы.

Для визуализации на графике того целевого диапазона, в котором надо удерживать ГК (зеленая область), установите границы этого диапазона в [Настройках](../Configuration/Preferences.md) > Начало > Диапазон для визуализации.

```{image} ../images/sign_stop.png
:alt: знак "Стоп"
```

### Остановитесь здесь, если пользуетесь открытым циклом с виртуальной помпой - не нажимайте на кнопку «Подтвердить» в конце цели.

```{image} ../images/blank.png
:alt: пусто
```

(Objectives-objective-6-starting-to-close-the-loop-with-low-glucose-suspend)=
## Цель 6: Начинаем замыкать цикл с Low Glucose Suspend (прекращением подачи инсулина на низких сахарах)

```{image} ../images/sign_warning.png
:alt: предупреждающий знак
```

### Closed loop will not correct high BG values in objective 6 as it is limited to low glucose suspend. High BG values have to be corrected manually by you!

- Prerequisite: You need a good profile (basal, ISF, IC) already working in AAPS to start with Loop in Low Glucose Suspend mode. Otherwise you can run in a hypo which you have to manually correct. This will help you a lot to avoid having to treat a low glucose over a period of 5 days. **If you are still having frequent or severe low glucose episodes then consider refining your DIA, basal, ISF and carb ratios and do NOT start objective 6 at this time.**
- You don't have to change your settings now. During objective 6, the maxIOB setting is internally set to zero automatically. **This override will be reversed when moving to objective 7.**
- The system will override your maxIOB settings to zero, which means if blood glucose is dropping it can reduce basal for you. If blood glucose is rising then it will only increase basal if the basal IOB is negative from a previous Low Glucose Suspend. Otherwise basal rates will remain the same as your selected profile. **That means that you have to manually handle high values with insulin corrections.**
- If your basal IOB is negative (see screenshot below) a TBR > 100% can be issued also in objective 6.

```{image} ../images/Objective6_negIOB.png
:alt: Пример отрицательного IOB
```

- Set your target range slightly higher than you usually aim for, just to be safe and have a bit more scurity buffer.
- Enable 'Low Glucose Suspend' mode either by by pressing and holding the Loop icon at the top right corner of the home screen and selecting the Loop - LGS mode icon.
- Watch how temporary basals are active by viewing the blue basal text on the homescreen or the blue basal render on the homescreen graph.
- Возможны временные пики вслед за мерами против гипогликемии без возможности увеличить базу на откате._

(Objectives-objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets)=
## Цель 7: Настройка замкнутого цикла с поднятием макс величины IOB выше 0 и постепенным понижением целевой ГК

- Select 'Closed Loop' either from [Preferences](../Configuration/Preferences.md) or by pressing and holding the Loop icon at the top right corner of the home screen, over a period of 1 day.

- Raise your 'Maximum total IOB OpenAPS can’t go over' (in OpenAPS called 'max-iob') above 0. The default recommendation is "average mealbolus + 3x max daily basal" (for the SMB algorithm) or "3x max daily basal" (for the older AMA algorithm) but you should slowly work up to this until you know your settings work for you (max daily basal = the maximum hourly value in any time segment of the day).

  Эта рекомендация должна рассматриваться как отправная точка. If you set to the 3x and you are seeing moves that push you too hard and fast then lower that number. If you are very resistant, raise it very little at a time.

  ```{image} ../images/MaxDailyBasal2.png
  :alt: максимальный суточный базал
  ```

- Once confident on how much IOB suits your looping patterns, then reduce your targets to your desired level.

(Objectives-objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens)=
## Цель 8: Настраиваем базал и коэффициенты с последующей активацией auto-sens

- You can use [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) as a one off to check your basals remain accurate or do a traditional basal test.
- Enable [autosens](../Usage/Open-APS-features.md) over a period of 7 days and watch the white line on the homescreen graph show how your sensitivity to insulin may be rising or falling as a result of exercise or hormones etc. and keep an eye in the OpenAPS report tab how AAPS is adjusting the basals and/or targets accordingly.

*Don’t forget to record your looping in* [this form](https://bit.ly/nowlooping) *logging AAPS as your type of DIY loop software, if you have not already done so.*

(Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)=
## Цель 9: Активация таких дополнительных функций для дневного времени как супер микро болюс SMB

- Следует прочитать [раздел СМБ в этой документации](Open-APS-features-super-micro-bolus-smb) и [главу oref1 в документации по openAPSdocs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) чтобы понять, как работает СМБ, и какая идея стоит за отключением базала при использовании этого алгоритма.
- Затем следует [поднять maxIOB](Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob), чтобы заставить СМБ работать должным образом. maxIOB теперь учитывает весь активный инсулин IOB, а не только дополнительный базал. То есть, если подан болюс 8 ед. на еду, а maxIOB равен 7 ед., то СМБ не будет подан до тех пор, пока активный инсулин IOB не упадет ниже 7 ед. Хорошим стартом является расчет maxIOB = средний подаваемый на еду болюс + 3 максимальных ежедневных базала (макс. ежедневный базал = максимальное значение базальной скорости в течении дня) - см. [Цель 7](Objectives-objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets)
- При переходе с алгоритма AMA на СМБ значение усвоения углеводов по умолчанию (min_5m_carbimpact) изменится с 3 до 8. Если вы переходите с AMA на СМБ - вам нужно изменить это значение самостоятельно.

(Objectives-objective-10-automation)=
## Цель 10: Автоматизация

- Вы должны начать цель 10 для использования [Автоматизации](../Usage/Automation.md).
- Убедитесь, что вы завершили все предыдущие цели, включая [Цель 3: Подтвердите ваши знания](Objectives#objective-3-prove-your-knowledge).
- Повторное прохождение более ранних целей не приведет к сбросу более поздних, если они уже были успешно завершены. У вас сохранятся все завершенные цели!

(Objectives-objective-11-DynamicISF)=
## Objective 11: Additional Features such as DynamicISF

- You have to start objective 11 to be able to use [DynamicISF](../Usage/Open-APS-features.md)

(Objectives-go-back-in-objectives)=
## Возможность возврата к предыдущим целям

Если вы хотите вернуться к целям по какой-либо причине, вы можете сделать это, нажав на "очистить завершенное".

```{image} ../images/Objective_ClearFinished.png
:alt: Вернуться в цели
```

## Цели в Android APS до версии 3.0

Одна из целей была удалена после выхода Android APS 3.0.  Для пользователей Android APS версии 2.8.2.1 на старых телефонах (версия ОС Android ниже 9) будет использован прежний набор целей, который можно найти [тут](../Usage/Objectives_old.md).
