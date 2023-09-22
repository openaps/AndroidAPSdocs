# For Clinicians – A General Introduction and Guide to AAPS

This page is intended for clinicians who have expressed interest in open source artificial pancreas technology such as AAPS, or for patients who want to share such information with their clinicians.

This guide has some high-level information about DIY closed looping and specifically how AAPS works. For more details on all of these topics, please view the [comprehensive AAPS documentation online](../index.md). Если у вас есть вопросы, узнайте подробности у вашего пациента или обратитесь с вопросом к сообществу. (Если вы не в социальных сетях (например, [ Twitter ](https://twitter.com/kozakmilos) или Facebook), пишите разработчиками по электронной почте @AndroidAPS.org). [ Здесь также можно найти некоторые из последних исследований и связанных с ними данными ](https://openaps.org/outcomes/).

## Этапы самостоятельного построения системы замкнутого цикла:

To start using AAPS, the following steps should be taken:

* Найдите [ совместимую помпу ](../Hardware/pumps.md), [совместимое устройство Android ](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing), и [ совместимый непрерывный мониторинг ГК ](../Configuration/BG-Source.md).
* [Download the AAPS source code and build the software](../Installing-AndroidAPS/Building-APK.md).
* [ Сконфигурируйте программу для работы с устройствами, настройте и задайте параметры защиты ](index-configuration).

## Как работает замкнутый цикл

Без системы замкнутого цикла человек с диабетом собирает данные своей помпы и мониторинга ГК, решает, что делать, и принимает меры.

С помощью автоматизированной подачи инсулина система делает то же самое: собирает данные с помпы и мониторинга, передает их куда-либо (например, на Nightscout), использует эту информацию для расчетов и принятия решений о необходимом количестве инсулина, повышении или снижении базальной скорости использует временные изменения базы для внесения необходимых корректировок, чтобы в конечном итоге привести ГК в целевой диапазон.

If the device running AAPS breaks or goes out of range of the pump, once the latest temporary basal rate ends, the pump falls back to being a standard pump with the preprogrammed basals rates runnning.

## Как собираются данные:

With AAPS, an Android device runs a special app to do the math, the device communicates using Bluetooth with a supported pump. AAPS can communicate with other devices and to the cloud via wifi or mobile data to gather additional information, and to report to the patient, caregivers, and loved ones about what it’s doing and why.

Устройство Android должно:

* общаться с помпой и читать историю доставленного инсулина
* общаться с системой мониторинга (либо напрямую, либо через облако)- чтобы видеть, как ведет себя гликемия

Когда устройство собрало эти данные, алгоритм принимает решения на основе внесенных в программу параметров (ISF, CR, DIA, целевых значений ГК и т. д.). При необходимости он выдает команды помпе для изменения скорости доставки инсулина.

Она также соберет информацию о болюсах, потреблении углеводов и временных целевых корректировках от помпы или от Nightscout, чтобы использовать их в расчетах.

## Откуда он знает, что делать?

Программное обеспечение с открытым исходным кодом предназначено для того, чтобы устройство легко выполняло задания, которые выполнялись в ручном режиме для расчета того, как следует корректировать подачу инсулина. Сначала он собирает данные со всех вспомогательных устройств и из облака, подготавливает данные и выполняет вычисления, делает прогнозы разных сценариев ожидаемых уровней ГК и производит необходимые корректировки, чтобы сохранить или вернуть ГК в целевой диапазон. Затем он отправляет необходимые корректировки на помпу. Затем он снова считывает данные и снова повторяет алгоритм корректировки.

Поскольку наиболее важным исходным параметром является уровень глюкозы в крови, поступающий от системы мониторинга, важно иметь высококачественные данные CGM.

AAPS is designed to transparently track all input data it gathers, the resulting recommendation, and any action taken. Поэтому в любое время, просматривая журналы событий, легко ответить на вопрос, "почему он делает X?".

## Examples of AAPS algorithm decision making:

AAPS uses the same core algorithm and feature set as OpenAPS. Алгоритм выполняет несколько предсказаний (на основе параметров и ситуации), представляющих различные сценарии того, что может произойти в будущем. В Nightscout они отображаются в виде фиолетовых линий. AAPS uses different colors to separate these [prediction lines](Releasenotes-overview-tab). В журнале событий будет описано, какие из этих предсказаний и в какие временные рамки будут управлять необходимыми действиями.

### Ниже приведены примеры фиолетовых линий прогнозирования, а также то, как они могут различаться:

![Примеры фиолетовой линии прогнозирования](../images/Prediction_lines.jpg)

### Ниже приведены примеры различных временных рамок, влияющих на изменения в подаче инсулина:

### Сценарий 1- Нулевой ВБС для безопасности

В этом примере ГК увеличивается в краткосрочной перспективе, однако, как ожидается, она будет низкой в течение более длительного периода времени. По сути, ожидается, что она будет ниже целевого значения * и * порога безопасности. For safety to prevent the low, AAPS will issue a zero temp (temporary basal rate at 0%), until the eventualBG (in any time frame) is above threshold.

![Сценарий дозирования 1](../images/Dosing_scenario_1.jpg)

### Сценарий 2- Нулевая ВБС для безопасности

В этом примере ожидается, что ГК будет низкой в ближайшем будущем, но, в конечном счете, будет выше целевого значения. However, because the near-term low is actually below the safety threshold, AAPS will issue a zero temp, until there is no longer any point of the prediction line that is below threshold.

![Сценарий дозирования 2](../images/Dosing_scenario_2.jpg)

### Сценарий 3 - Требуется больше инсулина

В этом примере, краткосрочный прогноз показывает падение ниже целевого. Однако оно не ниже порога безопасности. Конечная ГК находится выше целевой. Therefore, AAPS will restrain from adding any insulin that would contribute to a near-term low (by adding insulin that would make the prediction go below threshold). Затем он оценит возможность добавление инсулина, который приведет самый низкий уровень предсказанной ГК к цели, как только это станет безопасно. * (В зависимости от настроек и потребностей, этот инсулин может быть подан через временные базалы или микроболюсы SMB) *

![Сценарий дозирования 3](../images/Dosing_scenario_3.jpg)

### Сценарий 4 - Пониженная ВБС для безопасности

In this example, AAPS sees that BG is spiking well above target. Однако из-за времени подачи инсулина, в организме его уже достаточно, чтобы в конечном итоге привести ГК в желаемый диапазон. По сути, ГК, как ожидается, в конечном счете будет ниже целевого показателя. Therefore, AAPS will not provide extra insulin so it will not contribute to a longer-timeframe low. Несмотря на то, что ГК высока/растет, здесь, скорее всего, будет задана низкая временная базальная скорость.

![Сценарий дозирования 4](../images/Dosing_scenario_4.jpg)

## Оптимизация параметров и внесение изменений

As a clinician who may not have experience with AAPS or DIY closed loops, you may find it challenging to help your patient optimize their settings or make changes to improve their outcomes. У нас много инструментов и [ инструкций](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/optimize-your-settings.html), которые помогают пациентам делать небольшие, проверенные корректировки для улучшения своих настроек.

Самое важное для пациентов-это делать одно изменение за раз, и наблюдать за результатом в течение 2-3 дней, прежде чем решать, изменять ли другой параметр (если только такое изменение явно не идет во вред, - в этом случае следует немедленно вернуться к предыдущему параметру). Человек склонен сразу крутить все настройки и менять все сразу; но если кто-то делает это, то такое поведение приведет к суб-оптимальным настройками и его трудно будет вернуть в известное хорошее состояние.

Один из самых мощных инструментов для изменения настроек-это автоматизированный инструмент вычислений базальной скорости, чувствительности ISF и соотношения инсулин-углеводы CR. Это называется “[Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html)”. Он предназначен для самостоятельного функционирования с целью определения дополнительных изменений в настройках. В сообществе принято запускать (или просматривать) отчеты Autotune, прежде чем пытаться вручную внести изменения в параметры. With AAPS, Autotune will be run as a "one-off", although there are ongoing efforts to incorporate it directly into AAPS as well. Поскольку эти параметры являются условием как стандартной помповой терапии, так и подачи инсулина в системах замкнутого цикла, обсуждение результатов автонастройки и применения этих параметров будет естественным для клинициста.

Кроме того, поведение человека (основанное на ручном режиме компенсации диабета) часто влияет на результаты даже и в замкнутом цикле. For example, if BG is predicted to go low and AAPS reduces insulin on the way down, only a small amount of carbs (e.g. 3-4g carbs) may be needed to bring BG up from 70 mg/dl (3.9 mmol). Однако во многих случаях кто-то может взять для корректировки гораздо больше углеводов (например, придерживаясь правила 15), что приведет к более быстрому скачку как из-за дополнительной глюкозы, так и из-за того, что подача инсулина была снижена в период, ведущий к низкому.

## OpenAPS

** Это руководство было принято на основе [ The clinician's guide to OpenAPS ](https://openaps.readthedocs.io/en/latest/docs/Resources/clinician-guide-to-OpenAPS.html). ** OpenAPS - это система, разработанная для микрокомпьютера (обычно именуемого "платформа"). AAPS uses many of the techniques implemented in OpenAPS, and shares much of the logic and algorithms, which is why this guide is very similar to the original guide. Much of the information about OpenAPS can be easily adapted to AAPS, with the main difference being the hardware platform where each peace of software is run.

## Вывод

This is meant to be a high-level overview of how AAPS works. For more details, ask your patient, reach out to the community, or read the full AAPS documentation available online.

Дополнительное рекомендуемое чтение:

* The [full AAPS documentation](../index)
* Справочник [ Эталонный дизайн Open](https://OpenAPS.org/reference-design/), в котором объясняются принципы работы и безопасности OpenAPS: https://openaps.org/reference-design/
* [Полная документация OpenAPS](https://openaps.readthedocs.io/en/latest/index.html) 
  * Подробнее [о расчетах в OpenAPS](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html#understanding-the-determine-basal-logic)