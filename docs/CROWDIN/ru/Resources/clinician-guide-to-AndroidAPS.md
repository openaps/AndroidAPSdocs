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

Поскольку наиболее важным исходным параметром является уровень глюкозы в крови, поступающий от системы мониторинга, важно иметь высококачественные данные CGM.

AndroidAPS предназначен для прозрачного отслеживания всех входных данных, а также выдаваемых рекомендаций и действий. Поэтому в любое время, просматривая журналы событий, легко ответить на вопрос, "почему он делает X?".

### Примеры принятия решений алгоритмом AndroidAPS:

AndroidAPS основывается на том же основном алгоритме и наборе функций, что и OpenAPS. Алгоритм выполняет несколько предсказаний (на основе параметров и ситуации), представляющих различные сценарии того, что может произойти в будущем. В Nightscout они отображаются в виде фиолетовых линий. Для распознавания этих [линий прогнозирования](../Installing-AndroidAPS/Releasenotes#overview-tab) AndroidAPS использует различные цвета. В журнале событий будет описано, какие из этих предсказаний и в какие временные рамки будут управлять необходимыми действиями.

#### Ниже приведены примеры фиолетовых линий прогнозирования, а также то, как они могут различаться:

![Purple prediction line examples](../images/Prediction_lines.jpg)

#### Вот примеры различных временных рамок, влияющих на необходимые коррективы в подаче инсулина:

#### Сценарий 1- Временный нулевой базал для безопасности

В этом примере ГК увеличивается в краткосрочной перспективе, однако, как ожидается, она будет низкой в течение более длительного периода времени. По сути, ожидается, что она будет ниже целевого значения * и * порога безопасности. Для безопасности с целью предотвращения низкой ГК Андроид выдаст нулевую временную базальную скорость до тех пор пока конечная ГК (в любых временных рамках) не окажется выше порогового значения.

![Dosing scenario 1](../images/Dosing_scenario_1.jpg)

#### Сценарий 2- Временный нулевой базал для безопасности

В этом примере ожидается, что ГК будет низкой в ближайшем будущем, но, в конечном счете, будет выше целевого значения. Тем не менее, поскольку краткосрочная ГК фактически ниже порога безопасности, AndroidAPS будет выдавать нулевой базал до тех пор, пока не останется никакой предсказуемой точки, находящейся ниже порогового значения.

![Dosing scenario 2](../images/Dosing_scenario_2.jpg)

#### Сценарий 3 - Требуется больше инсулина

В этом примере, краткосрочный прогноз показывает падение ниже целевого. Однако оно не ниже порога безопасности. Конечная ГК находится выше целевой. Поэтому AndroidAPS будет сдерживать добавление инсулина, который будет приводить к ближайшему низкому значению ГК (того, который опустит прогнозируемую ГК ниже порога). Затем он оценит возможность добавление инсулина, который приведет самый низкий уровень предсказанной ГК к цели, как только это станет безопасно. * (В зависимости от настроек и потребностей, этот инсулин может быть подан через временные базалы или микроболюсы SMB) *

![Dosing scenario 3](../images/Dosing_scenario_3.jpg)

#### Сценарий 4- Временный нулевой базал для безопасности

В этом примере AndroidAPS видит, что ГК поднимается намного выше цели. Однако из-за времени подачи инсулина, в организме его уже достаточно, чтобы в конечном итоге привести ГК в желаемый диапазон. По сути, ГК, как ожидается, в конечном счете будет ниже целевого показателя. Поэтому AndroidAPS не будет подавать дополнительный инсулин, чтобы не способствовать более низкой ГК на широком временном отрезке. Несмотря на то, что ГК высока/растет, здесь, скорее всего, будет задана низкая временная базальная скорость.

![Dosing scenario 4](../images/Dosing_scenario_4.jpg)

### Оптимизация параметров и внесение изменений

Как клиницист, который не имеет опыта с AndroidAPS или подобными системами, вам может показаться сложным помочь своему пациенту оптимизировать настройки или внести изменения, улучшающие результаты. У нас в сообществе есть несколько инструментов и [ инструкций](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/optimize-your-settings.html), которые помогают пациентам делать небольшие, проверенные корректировки для улучшения своих настроек.

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