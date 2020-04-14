# Для клиницистов – Общие сведения и руководство по AndroidAPS

Эта страница предназначена для клиницистов, которые проявили интерес к технологии искусственной поджелудочной железы, такой как AndroidAPS, или для пациентов, которые хотят делиться такой информацией со своими лечащими врачами.

В этом руководстве содержится первоочередная информация о самодеятельных алгоритмах замкнутого цикла и, в частности, о том, как работает AndroidAPS. Более подробную информацию по всем этим темам можно найти во [ всеобъемлющей интернет-документации по AndroidAPS ](http://androidaps.readthedocs.io/en/latest/index.html). Если у вас есть вопросы, узнайте подробности у вашего пациента или обратитесь с вопросом к сообществу. (Если вы не в социальных сетях (например, [ Twitter ](https://twitter.com/kozakmilos) или Facebook), пишите разработчиками по электронной почте @AndroidAPS.org). [ Здесь также можно найти некоторые из последних исследований и связанных с ними данными ](https://openaps.org/outcomes/).

### Этапы самостоятельного построения системы замкнутого цикла:

Для начала работы с AndroidAPS необходимо выполнить следующие действия:

* Найдите [ совместимую помпу ](https://androidaps.readthedocs.io/en/latest/EN/Getting-Started/Pump-Choices.html), [совместимое устройство Android ](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing), и [ совместимый мониторинг ГК ](https://androidaps.readthedocs.io/en/latest/EN/index.html#getting-started-with-androidaps).
* [ Загрузите исходный код AndroidAPS и создайте программное обеспечение ](https://androidaps.readthedocs.io/en/latest/EN/Installing-AndroidAPS/Building-APK.html).
* [ Сконфигурируйте программу для работы с устройствами, настройте и задайте параметры защиты ](https://androidaps.readthedocs.io/en/latest/EN/index.html#configuration).

### Как работает замкнутый цикл

Без системы замкнутого цикла человек с диабетом собирает данные своей помпы и мониторинга ГК, решает, что делать, и принимает меры.

С помощью автоматизированной подачи инсулина система делает то же самое: собирает данные с помпы и мониторинга, передает их куда-либо (например, на Nightscout), использует эту информацию для расчетов и принятия решений о необходимом количестве инсулина, повышении или снижении базальной скорости использует временные изменения базы для внесения необходимых корректировок, чтобы в конечном итоге привести ГК в целевой диапазон.

Если устройство, работающая под управлением AndroidAPS, ломается или выходит из диапазона связи с помпой, то после окончания последнего временного базала помпа возвращается в стандартное состояние с предварительно запрограммироваными базалами.

### Как собираются данные:

С помощью AndroidAPS, телефон на Android запускает специальное приложение для выполнения математических операций, телефон общается с поддерживаемой помпой через Bluetooth. AndroidAPS может общаться с другими устройствами и обмениваться с облачными службами через wi-fi или передачу мобильных данных, а также сообщать пациенту, ухаживащим и близким о том, что он делает и почему.

Устройство Android должно:

* общаться с помпой и читать историю доставленного инсулина
* общаться с системой мониторинга (либо напрямую, либо через облако)- чтобы видеть, как ведет себя гликемия

Когда устройство собрало эти данные, алгоритм принимает решения на основе внесенных в программу параметров (ISF, CR, DIA, целевых значений ГК и т. д.). При необходимости он выдает команды помпе для изменения скорости доставки инсулина.

Она также соберет информацию о болюсах, потреблении углеводов и временных целевых корректировках от помпы или от Nightscout, чтобы использовать их в расчетах.

### Откуда он знает, что делать?

Программное обеспечение с открытым исходным кодом предназначено для того, чтобы устройство легко выполняло задания, которые выполнялись в ручном режиме для расчета того, как следует корректировать подачу инсулина. Сначала он собирает данные со всех вспомогательных устройств и из облака, подготавливает данные и выполняет вычисления, делает прогнозы разных сценариев ожидаемых уровней ГК и производит необходимые корректировки, чтобы сохранить или вернуть ГК в целевой диапазон. Затем он отправляет необходимые корректировки на помпу. Затем он снова считывает данные и снова повторяет алгоритм корректировки.

As the most important input parameter is the blood glucose level coming from the CGM, it is important to have high-quality CGM data.

AndroidAPS is designed to transparently track all input data it gathers, the resulting recommendation, and any action taken. It is therefore easy to answer the question at any time, “why is it doing X?” by reviewing the logs.

### Examples of AndroidAPS algorithm decision making:

AndroidAPS uses the same core algorithm and feature set as OpenAPS. The algorithm makes multiple predictions (based on settings, and the situation) representing different scenarios of what might happen in the future. In Nightscout, these are displayed as “purple lines”. AndroidAPS uses different colors to separate these [prediction lines](../Installing-AndroidAPS/Releasenotes#overview-tab). In the logs, it will describe which of these predictions and which time frame is driving the necessary actions.

#### Here are examples of the purple prediction lines, and how they might differ:

![Purple prediction line examples](../images/Prediction_lines.jpg)

#### Here are examples of different time frames that influence the needed adjustments to insulin delivery:

#### Scenario 1 - Zero Temp for safety

In this example, BG is rising in the near-term time frame; however, it is predicted to be low over a longer time frame. In fact, it is predicted to go below target *and* the safety threshold. For safety to prevent the low, AndroidAPS will issue a zero temp (temporary basal rate at 0%), until the eventualBG (in any time frame) is above threshold.

![Dosing scenario 1](../images/Dosing_scenario_1.jpg)

#### Scenario 2 - Zero temp for safety

In this example, BG is predicted to go low in the near-term, but is predicted to eventually be above target. However, because the near-term low is actually below the safety threshold, AndroidAPS will issue a zero temp, until there is no longer any point of the prediction line that is below threshold.

![Dosing scenario 2](../images/Dosing_scenario_2.jpg)

#### Scenario 3 - More insulin needed

In this example, a near-term prediction shows a dip below target. However, it is not predicted to be below the safety threshold. The eventual BG is above target. Therefore, AndroidAPS will restrain from adding any insulin that would contribute to a near-term low (by adding insulin that would make the prediction go below threshold). It will then assess adding insulin to bring the lowest level of the eventual predicted BG down to target, once it is safe to do so. *(Depending on settings and the amount and timing of insulin required, this insulin may be delivered via temp basals or SMB's (super micro boluses) ).*

![Dosing scenario 3](../images/Dosing_scenario_3.jpg)

#### Scenario 4 - Low temping for safety

In this example, AndroidAPS sees that BG is spiking well above target. However, due to the timing of insulin, there is already enough insulin in the body to bring BG into range eventually. In fact, BG is predicted to eventually be below target. Therefore, AndroidAPS will not provide extra insulin so it will not contribute to a longer-timeframe low. Although BG is high/rising, a low temporary basal rate is likely here.

![Dosing scenario 4](../images/Dosing_scenario_4.jpg)

### Optimizing settings and making changes

As a clinician who may not have experience with AndroidAPS or DIY closed loops, you may find it challenging to help your patient optimize their settings or make changes to improve their outcomes. We have multiple tools and [guides](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/optimize-your-settings.html) in the community that help patients make small, tested adjustments to improve their settings.

The most important thing for patients to do is make one change at a time, and observe the impact for 2-3 days before choosing to change or modify another setting (unless it’s obviously a bad change that makes things worse, in which case they should revert immediately to the previous setting). The human tendency is to turn all the knobs and change everything at once; but if someone does so, then they may end up with further sub-optimal settings for the future, and find it hard to get back to a known good state.

One of the most powerful tools for making settings changes is an automated calculation tool for basal rates, ISF, and carb ratio. This is called “[Autotune](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html)”. It is designed to be run independently/manually, and allow the data to guide you or your patient in making incremental changes to settings. It is best practice in the community to run (or review) Autotune reports first, prior to attempting to make manual adjustments to settings. With AndroidAPS, Autotune will be run as a "one-off", although there are ongoing efforts to incorporate it directly into AndroidAPS as well. As these parameters are a prerequesite both for standard pump insulin delivery and for closed loop insulin delivery, discussion of the autotune results and adustment of these parameters would be the natural link to the clinician.

Additionally, human behavior (learned from manual diabetes mode) often influences outcomes, even with a DIY closed loop. For example, if BG is predicted to go low and AndroidAPS reduces insulin on the way down, only a small amount of carbs (e.g. 3-4g carbs) may be needed to bring BG up from 70 mg/dl (3.9 mmol). However, in many cases, someone may choose to treat with many more carbs (e.g. sticking to the 15 rule), which will cause a resulting faster spike both from the extra glucose and because insulin had been reduced in the timeframe leading up to the low.

### OpenAPS

**This guide was adopted from [The clinician's guide to OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/clinician-guide-to-OpenAPS.html).** OpenAPS is a system developed to be run on a small portable computer (generally referred to as the "rig"). AndroidAPS uses many of the techniques implemented in OpenAPS, and shares much of the logic and algorithms, which is why this guide is very similar to the original guide. Much of the information about OpenAPS can be easily adapted to AndroidAPS, with the main difference being the hardware platform where each peace of software is run.

### Summary

This is meant to be a high-level overview of how AndroidAPS works. For more details, ask your patient, reach out to the community, or read the full AndroidAPS documentation available online.

Additional recommended reading:

* The [full AndroidAPS documentation](http://androidaps.readthedocs.io/en/latest/EN/index.html)
* The [OpenAPS Reference Design](https://OpenAPS.org/reference-design/), which explains how OpenAPS is designed for safety: https://openaps.org/reference-design/
* The [full OpenAPS documentation](http://openaps.readthedocs.io/en/latest/index.html) 
  * More [details on OpenAPS calculations](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html#understanding-the-determine-basal-logic)