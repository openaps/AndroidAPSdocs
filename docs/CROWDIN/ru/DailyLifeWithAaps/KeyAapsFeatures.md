# Основной функционал AAPS

## Loop mode

The loop status is shown on the main screen with one of the icons below.

**AAPS** offers several loop modes, such as Closed Loop (1), Low Glucose Suspend (LGS - 2) and Open Loop (3).

See [AAPS screens > The main screen > Loop status](#AapsScreens-loop-status) for information on how to select the loop mode and on the other icons in the picture (4 to 6).

![Статус контура](../images/Home2020_LoopStatus.png)

(KeyAapsFeatures-OpenLoop)=

### Open Loop

**AAPS** continuously evaluates all available data (IOB, COB, BG...) and makes treatment suggestions (temporary basal rates) on how to adjust your therapy if necessary.

The suggestions will not be executed automatically (as in closed loop). The suggestions have to be enacted by the user manually into the pump (if using virtual pump) or by using a button if **AAPS** is connected to a real pump.

When **AAPS** has a suggestion, a **Loop** entry with a badge appears in the bottom navigation of the main screen. Press it to read the suggestion ("Accept new temp basal") with its rate, duration and reason, then press **Perform** to carry it out:

![Open loop suggestion with the Perform button](../images/screens/loop_tab.png)

A suggestion is only valid for a few minutes. If it is older than about 9 minutes, or if the loop has been suspended or the pump disconnected in the meantime, **AAPS** refuses it and nothing is sent to the pump (*"This suggestion is too old. Nothing was sent to the pump. Wait for the next one."*). Wait for the next suggestion.

This option is for getting to know how **AAPS** works or if you are using an unsupported pump. You will be in Open Loop, no matter what choice you make here, until the end of **[Objective 5](#objectives-objective5)**.

(KeyAapsFeatures-LGS)=

### Low Glucose Suspend (LGS)

In this mode, [maxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over) is set to zero.

This means that if blood glucose is dropping, **AAPS** can reduce the basal for you. But if blood glucose is rising, no automatic correction will be made. Your basal rates will remain the same as defined in your current **Profile**. Only if IOB is negative (from a previous Low Glucose Suspend) additional insulin will be given to lower **BG**.

This mode is available starting at **[Objective 6](#objectives-objective6)**.

Besides selecting it yourself, **AAPS** can also switch to this mode on its own: while you are working on **[Objective 6](#objectives-objective6)**, and whenever it detects duplicate BG readings (see [BG warning sign](#aaps-screens-bg-warning-sign)).

(KeyAapsFeatures-ClosedLoop)=

### Closed Loop

**AAPS** continuously evaluates all available data (IOB, COB, BG...) and automatically adjusts the treatment if necessary (*i.e.* without further intervention by you) to reach the set [target range or value](#profile-glucose-targets) (bolus delivery, temporary basal rate, insulin switch-off to avoid hypo etc.).

The Closed Loop works within numerous safety limits, which can be set individually.

Closed Loop is only possible if you are in **[Objective 7](#objectives-objective7)** or higher and use a supported pump.

(autosens)= (Open-APS-features-autosens)=

## Autosens

- Autosens-это алгоритм, который отслеживает отклонения ГК (позитивное/отрицательное/нейтральное).
- На основе этих отклонений он определяет чувствительность/резистентность пользователя.
- Реализация алгоритма oref в ** OpenAPS ** выполняется на основе комбинации данных за 24 и 8 часов. Алгоритм применяет наиболее чувствительный из них.
- Если пользователи перешли с алгоритма oref1, они, вероятно, заметят, что система менее динамично реагирует на изменения из-за различий в чувствительности за 24 или 8 часов.
- Замена канюли или изменение профиля сбросит Autosens назад на 100% (переключение профиля по процентам с установкой продолжительности не сбрасывает Autosens).
- Autosens настраивает базал и ISF ( примерно так же как изменение профиля в процентах).
- Если пользователь потребляет углеводы, не внося данные в систему в течение длительного периода, autosens будет менее эффективен в этот период, так как углеводы исключены из расчетов изменяемого диапазона **ГК**.
- The deviations are converted into a **sensitivity ratio** (a percentage): a ratio below 100% means AAPS thinks you're more sensitive to insulin than your **Profile** assumes (so it lowers effective basal and raises the ISF value), while a ratio above 100% means you're more resistant (so it raises basal and lowers the ISF value).
- By default this ratio is kept between 0.7 (70%, more sensitive) and 1.2 (120%, more resistant), so a run of unusual data can't push your dosing too far from your **Profile**. These bounds can be adjusted in Sensitivity Detection's advanced settings.
- Autosens and [Autotune](../AdvancedOptions/Autotune.md) address the same underlying problem on different timescales: Autosens nudges your *live* dosing minute-to-minute based on the last 8-24h, while Autotune slowly rewrites your *Profile* itself based on weeks of history. Running both is normal and expected — they complement rather than duplicate each other.

*For the full technical treatment of the autosens algorithm, see [OpenAPS's Autosens documentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).*

(Open-APS-features-super-micro-bolus-smb)=

## Super Micro Bolus (SMB)

**SMB**, сокращение от **Super micro bolus**— это функция OpenAPS, вошедшая в алгоритм Oref1 с 2018 года. В отличие от помощника болюса **AMA**, для контроля уровня глюкозы алгоритм **SMB** использует небольшие **микроболюсы**, а не временную базальную скорость. Там, где алгоритм мастера болюса **AMA** добавит 1,0 ед. инсулина при помощи временной базальной скорости, **SMB** подает несколько супер микроболюсов маленькими шажками с **пятиминутным** интервалом, например 0,4; 0,3; 0,2; и 0,1 ед. Одновременно (по соображениям безопасности и чтобы предотвратить передозировку), на определенный период фактический базал устанавливается на 0 ед/ч, (т. н. **"нулевой базал"**). Это позволяет системе регулировать гликемию быстрее, чем временным повышением скорости базала в **AMA**.

Благодаря микроболюсам SMB при компенсации блюд, содержащих только "медленные" углеводы, системе достаточно сообщить только о запланированном количестве углеводов, в остальном положившись на **AAPS**. Однако это может дать более высокие постпрандиальные (после приема пищи) пики, поскольку преболюс не вводился. Или, при необходимости, можно предварительно ввести **преболюс**, который ** только частично** покрывает углеводы (например, 2/3 от предполагаемого количества), и позволить алгоритму **SMB** ввести оставшуюся часть инсулина.

![SMB на основном графике](../images/SMBs.png)

SMBs are shown on the [IOB graph](#aaps-screens-iob) with blue triangles. [Press and hold](#aaps-screens-graph-press-and-hold) the graph at a triangle to see how much insulin was delivered, or use the [Treatments history](#aaps-screens-treatments).

Алгоритм **SMB** имеет встроенные механизмы безопасности:

1. **Самая большая отдельная доза SMB**  
  самая большая разовая доза SMB имеет наименьшее значение из:
  
        * value corresponding to the current basal rate (as adjusted by autosens) for the duration set in "Max minutes of basal to limit SMB to", e.g. basal quantity for the next 30 minutes, or
        * half the amount of insulin currently required, or
        * the remaining portion of your maxIOB value in the settings.
      

2. **Низкая скорость временной базы**  
  Низкая скорость временного базала (называемая "низким временным базалом") или временная базальная скорость равная 0 Ед/ч (называемая "нулевым временным базалом") преимущественно активируются в режиме алгоритма **супермикроболюс SMB**. Это конструктивно сделано по соображениям безопасности и, если профиль **** установлен правильно, не имеет негативных последствий. На основном графике кривая активного инсулина IOB (желтая тонкая линия) имеет большее значение, чем динамика временных скоростей базала.

3. **Непредвиденный прием пищи**  
  Дополнительные расчеты для прогнозирования уровня ГК, например, по **UAM** (непредвиденные приемы пищи). Даже без ручного ввода углеводов пользователем **UAM** может автоматически обнаружить значительное повышение гликемии из-за приема пищи, выброса адреналина или других факторов и попытаться скорректировать это при помощи **микроболюсов SMB**. Для безопасности, эта функция работает и в обратном направлении и может остановить подачу супер микроболюса при неожиданном понижении ГК. Поэтому функция UAM должна всегда быть активирована в режиме алгоритма SMB.

SMB doesn't decide on its own that insulin is needed — it draws on the same blended BG predictions (eventual BG, zero-temp, COB, UAM) described in [how AAPS turns predictions into a dosing decision](#aaps-screens-how-predictions-become-a-dosing-decision). SMB and zero-temping are simply the two tools AAPS uses to act on that decision.

**Для работы алгоритма должна быть начата [цель 9](#objectives-objective9).**

See also [OpenAPS's oref1/SMB documentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb) for the full technical treatment, or [Tim's info on SMB](https://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/) for a community write-up.

Ниже описаны настройки алгоритма SMB из OpenAPS.

(Open-APS-features-max-u-h-a-temp-basal-can-be-set-to)=

### Maximum basal rate

Эта настройка безопасности определяет максимальную скорость временного базала помпы. Она также известна как **max-basal**.

Значение задается в единицах в час (ед./ч). Рекомендуется установить какое-то разумное значение. Рекомендуемое значение для этого параметра:

**MAX-BASAL = НАИВЫСШАЯ БАЗАЛЬНАЯ СКОРОСТЬ x 4**

Например, если максимальная скорость базала в профиле была 0,5 ед./ч, то, умножив ее на 4, получаем 2 ед./ч.

**AAPS** limits this value as a 'hard limit' according to [Settings > Safety > Patient age](#preferences-patient-type). Ниже приводятся жесткие пределы:

- Ребенок: 2
- Подросток: 5
- Взрослый: 10
- Инсулинорезистентный взрослый: 12
- Беременная: 25

*См. также [обзор программно закодированных жестких пределов](#Open-APS-features-overview-of-hard-coded-limits).*

(Open-APS-features-maximum-total-iob-openaps-cant-go-over)=

### Maximum total IOB OpenAPS can’t go over

Это значение определяет максимальное количество **активного инсулина IOB (базального и болюсного), при котором **AAPS** будет работать в режиме замкнутого цикла. Оно также именуется **maxIOB**.</p> 

Если текущий активный инсулин IOB (например, после болюса на еду) превышает определенную величину, то алгоритм останавливает подачу инсулина до тех пор, пока предел IOB не будет ниже заданного значения.

Для начала рекомендуется задать эту величину как:

      maxIOB = средний болюс на еду + троекратный максимальный базал
    

Будьте внимательны и осторожны при настройке **max-IOB**. Эта величина для каждого своя, а также зависит от средней общей суточной дозы (TDD).

**AAPS** limits this value as a 'hard limit' according to [Settings > Safety > Patient age](#preferences-patient-type). Ниже приводятся жесткие пределы:

- Child: 7
- Teenager: 13
- Adult: 22
- Insulin resistant adult: 30
- Pregnant: 70

*См. также [обзор программно закодированных жестких пределов](#Open-APS-features-overview-of-hard-coded-limits).*

Примечание : При использовании **SMB** **max-IOB** рассчитывается иначе, чем алгоритмом помощника болюса AMA. В алгоритме помощника болюса **AMA** maxIOB является параметром безопасности для активного базального инсулина **IOB**, а в SMB-режиме, он, помимо этого, включает в себя активный болюсный инсулин.

### Use dynamic sensitivity

Эта функция называется [DynamicISF](../DailyLifeWithAaps/DynamicISF.md). При ее включении становятся доступными новые настройки. Эти настройки подробно описаны на странице [DynamicISF](#dyn-isf-preferences).

### Use Autosens

Это функция [Autosens](#Open-APS-features-autosens). When using DynamicISF, Autosens cannot be used, since they are two different algorithms altering the same variable (sensitivity).

Autosens отслеживает отклонения гликемии в крови (положительные / отрицательные / нейтральные). На основе отклонений он пытается выяснить, насколько вы чувствительны/резистентны к инсулину и корректирует базальную скорость и коэффициент чувствительности к инсулину ISF.

При ее включении становятся доступными новые настройки.

#### Sensitivity raises target

Если эта опция включена, функция определения чувствительности (autosens) может поднять цель при обнаружении чувствительности ниже 100%. В этом случае цель будет увеличена на процент обнаруженной чувствительности.

If the target is modified due to sensitivity detection, it will be displayed with a green background on your main screen.

![цель изменена автоматически](../images/Home2020_DynamicTargetAdjustment.png)

This setting is available when one of "Use dynamic sensitivity" or "Use Autosens" are enabled.

#### Resistance lowers target

Если включена эта опция, функция определения чувствительности (autosens) может снизить целевое значение при обнаружении резистентности (выше 100%). В этом случае цель будет снижена на процент обнаруженной резистентности.

This setting is available when one of "Use dynamic sensitivity" or "Use Autosens" are enabled.

### Enable SMB

Включите, чтобы использовать функционал SMB. Если этот параметр отключен, то микроболюсы **SMBS** не подаются.

При ее включении становятся доступными новые настройки.

(Open-APS-features-enable-smb-with-high-temp-targets)=

#### Enable SMB with high temp target

If this setting is enabled, **SMBs** will still be delivered even if the user has selected a high **Temp Target** (defined as 100 mg/dL or 5.6 mmol/L and above, regardless of **Profile** target). Use caution when enabling it: **SMBs** can become overly aggressive if your settings are not well tuned or if your **Profile** is subject to frequent variation (for example, with children).

When this setting is disabled, a high **Temp Target** turns **SMBs** off. For example, if this option is disabled, **SMBs** can be disabled by setting a **Temp Target** of 100 mg/dL or 5.6 mmol/L and above. This option will also disable **SMBs** regardless of what other condition is trying to enable SMB — apart from a low **Temp Target** such as **Eating Soon** (or any **Temp Target** of 98 mg/dL or 5.4 mmol/L and below), which may still deliver **SMBs** to drive **BG** towards the target.

This setting does not turn **SMB** on by itself. With a high temp target, **SMB** is only given if one of the other settings below (for example **Enable SMB always** or **Enable SMB with COB**) also allows it.

(Open-APS-функции-включать-микроболюсы-всегда)=

#### Enable SMB always

If this setting is enabled, SMB is always enabled (independent of COB, temp targets or boluses). Если этот параметр включен, остальные параметры включения не будут иметь эффекта. Однако, если отключена настройка **Включить SMB с высокими временными целями** и задается высокая временная цель, SMB будут отключены.

Эта настройка доступна только в том случае, если **AAPS** определяет, что вы используете [ надежный источник ГК](#GettingStarted-TrustedBGSource) с хорошей фильтрацией. FreeStyle Libre 1 не считается надежным источником из-за риска бесконечно повторяющихся старых данных ГК в случае сбоя датчика.

Зашумленные данные могут привести к тому, что **AAPS** поверит, что ГК растет очень быстро, что в свою очередь приведет к подаче ненужных микроболюсов. Для получения дополнительной информации о шуме и сглаживании данных смотрите [ здесь](../CompatibleCgms/SmoothingBloodGlucoseData.md).

#### Enable SMB with COB

Если этот параметр включен, SMB включаются при активных углеводах COB больше 0.

Этот параметр не отображается, если включена функция "Разрешить SMB всегда".

#### Enable SMB with low temp target

If this setting is enabled, SMB is enabled when a temp target is set (eating soon, activity, hypo, custom). If this setting is enabled but **Enable SMB with high temp target** is disabled, SMB will be enabled when a low temp target is set (98 mg/dL or 5.4 mmol/L and below) but disabled when a high temp target is set.

Этот параметр не отображается, если включена функция "Разрешить SMB всегда".

#### Enable SMB after carbs

Если включена эта настройка, то микроболюсы SMB работают в течение 6 часов после внесения углеводов, даже если значение COB достигло 0.

По соображениям безопасности эта настройка доступна только в том случае, если **AAPS** обнаруживает, что используется надежный источник ГК. Настройка не видна, если включена функция "Разрешить SMB всегда".

Эта настройка доступна только в том случае, если **AAPS** определяет, что вы используете [ надежный источник ГК](#GettingStarted-TrustedBGSource) с хорошей фильтрацией. FreeStyle Libre 1 не считается надежным источником из-за риска бесконечно повторяющихся старых данных ГК в случае сбоя датчика.

Зашумленные данные могут привести к тому, что **AAPS** поверит, что ГК растет очень быстро, что в свою очередь приведет к подаче ненужных микроболюсов. Дополнительная информация о шуме и сглаживании данных находится [здесь](../CompatibleCgms/SmoothingBloodGlucoseData.md).  
Эта настройка не отображается, если включен параметр "Всегда включать SMB".

#### SMB interval

Этот параметр ограничивает частоту микроболюсов. Его значение определяет минимальное время между микроболюсами. Напоминаем, что цикл запускается каждый раз, когда алгоритм получает данные гликемии (обычно каждые 5 минут). Отсюда отнимите 2 минуты для выполнения цикла. То есть, если требуется чтобы SMB работали при каждом запуске цикла, установите это значение на 3 минуты.

Значение по умолчанию: 3 мин.

(Open-APS-функции-макс-минут-базала-для-ограничения)=

#### Max minutes of basal to limit SMB

Это важный элемент в настройках безопасности. На основе количества базального инсулина в данный отрезок времени эта величина определяет объем микроболюсов SMB при наличии активных углеводов COB.

Его увеличение позволяет микроболюсам SMB вести себя более агрессивно. Начать следует со значения по умолчанию в 30 минут. Набравшись опыта, увеличивайте это значение приращениями по 15 минут и наблюдайте результат при многократном приеме пищи.

Рекомендуется не задавать это значение выше 90 минут, так как существует вероятность достижения точки, после которой алгоритм не сможет контролировать снижающуюся гликемию при нулевом временном базале 0 ед/ч ('zero-temp'). Следует также установить оповещения о низкой ГК, особенно если вы только тестируете новые настройки.

Значение по умолчанию: 30 мин.

#### UAM max minutes of basal to limit SMB

This setting allows you to adjust the strength of SMB during UAM, when there are no more carbs.

Default value : the same as **Max minutes of basal to limit SMB**.

Этот параметр виден только если включены опции "Включить SMB" и "Включить UAM".

(enable-uam)=

### Enable UAM

При включении этой опции алгоритм SMB может распознать непредвиденный прием пищи. Этот параметр полезен, если вы забыли ввести в **AAPS** потребляемые углеводы или неправильно рассчитали количество углеводов, или если пища с большим количеством жира и белка усваивается дольше, чем ожидалось. Без ввода углеводов UAM может распознать быстрое повышение уровня глюкозы, вызванное углеводами, адреналином и т. д., и пытается скорректировать его с помощью SMB. И наоборот: если гликемия падает быстро, то настройка поможет досрочно прекратить SMB.

**Поэтому при использовании микроболюсов SMB всегда следует активировать непредвиденный прием пищи UAM.**

(key-aaps-features-minimal-carbs-required-for-suggestion)=

### Carbs required threshold

Минимальное количество граммов углеводов для отображения предупреждения о рекомендуемых углеводах. Если алгоритм обнаруживает, что организму требуются дополнительные углеводы, об этом появится сообщение. Вы получите уведомление, которое можно отложить на 5, 15 или 30 минут.

При желании уведомления об углеводах могут быть переданы в Nightscout. В этом случае сработают стандартные настройки оповещения NS. 

In any case, the required carbs will be displayed in the COB section on your main screen.

![Display carbs required on main screen](../images/main/main_screen_carbs_required.png)

### Advanced Settings

For the full parameter reference (including settings not covered here), see [OpenAPS's preferences and safety settings documentation](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Всегда использовать укороченное среднее приращение вместо простого ** Если включить эту функцию, **AAPS** использует среднюю дельту/приращение ГК за последние 15 минут, которая обычно представляет собой среднее из трех последних значений. This helps **AAPS** to be steadier with noisy data sources like xDrip and Libre.

**Максимальный ежедневный множитель безопасности** Это важный ограничитель безопасности. Настройка по умолчанию (которая вряд ли потребует корректировки) равна 3. Это означает, что **AAPS** никогда сможет устанавливать временную базальную скорость, которая более чем в 3 раза превышает максимальный часовой базал, запрограммированный в помпе и/или профиле пользователя. Пример: если ваша максимальная базальная скорость составляет 1,0 Ед/ч, а максимальный коэффициент суточной безопасности равен 3, то **AAPS** может установить максимальную временную базальную скорость в 3,0 Ед/ч (= 3 х 1,0 Ед/ч).

Значение по умолчанию: 3 (не следует изменять, если нет настоящей потребности и вы не уверены в том, что делаете)

**Текущий множитель безопасности базала** Это важный ограничитель безопасности. Настройка по умолчанию (которая вряд ли потребует корректировки) равна 4. Это означает, что **AAPS** никогда сможет устанавливать временную базальную скорость, которая более чем в 3 раза превышает максимальный часовой базал, запрограммированный в помпе и/или профиле пользователя.

Значение по умолчанию: 4 (не следует изменять, если нет настоящей потребности и вы не понимаете, что делаете)

* * *

(Open-APS-features-auto-isf)=

## Auto ISF

**Auto ISF** is an **experimental** algorithm for advanced users. It is built on OpenAPS SMB and adds rules that make the insulin sensitivity factor (ISF) stronger or weaker depending on how your glucose behaves.

It is a development feature: it can only be switched on in a [dev build](../AdvancedOptions/DevBranch.md) with **Engineering Mode** enabled. In a regular release build it stays forced off and is therefore not shown in **Configuration → APS**. Completing the [Objectives](../SettingUpAaps/CompletingTheObjectives.md) does not unlock it.

After selecting it, its **Settings** contain the OpenAPS SMB settings plus an **AutoISF settings** group:

- **Enable AutoISF**: turns the ISF adjustments on. Without it, the algorithm behaves like OpenAPS SMB.
- **AutoISF min** and **AutoISF max**: how weak and how strong the ISF is allowed to become, in the same way as the Autosens limits. With the default value 1.0 the effect is switched off.
- **Weights**: each one drives one rule, and the default value 0.0 switches the rule off. 
  - while glucose **accelerates**, ISF is strengthened (more insulin);
  - while glucose **decelerates**, ISF is weakened (less insulin);
  - while glucose is **below target**, ISF is weakened;
  - while glucose is **above target**, ISF is strengthened;
  - a **post-prandial** weight and a **duration** weight act after meals and when glucose stays high for a long time.
- **SMB delivery ratio** (with a minimum, a maximum and a BG range): what share of the insulin required can be delivered as SMB.
- **SMB max range extension**: by what factor the usual SMB size limit ([max minutes of basal](#Open-APS-features-max-minutes-of-basal-to-limit-smb-to), normally 120 minutes) may be exceeded. The default value 1 changes nothing; up to 5 is possible. Increase this experimental value slowly and with caution.
- **IOB threshold percent**: the percentage of max IOB above which SMBs are disabled.

    {admonition} Only for experienced users
    :class: danger
    With its default values Auto ISF changes nothing. Every value you raise makes **AAPS** more aggressive. Change one value at a time, in small steps, and watch the result for several days. Be extremely careful with an **AutoISF max** above 2.5.

(Open-APS-функции-расширенный-помощник-болюса-ama)=

## Advanced Meal Assist (AMA)

AMA, сокращение от "advanced meal assist", усовершенствованный помощник болюса, включен в функционал OpenAPS с 2017 года (oref0). Помощник болюса OpenAPS Advanced Meal Assist (AMA) позволяет системе быстрее установить высокое временное целевое значение после болюса на еду, ЕСЛИ вы правильно ввели углеводы.

Подробнее см в [ Документации OpenAPS](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### Maximum basal rate (OpenAPS "max-basal")

Эта настройка безопасности помогает **AAPS** никогда не задавать опасно высокую базальную скорость и ограничивает временный базал до x ед./ч. Рекомендуется установить какое-то разумное значение. Хороший совет – умножить наивысшую скорость базала в вашем профиле на 4 или по меньшей мере на 3. Например, если максимальная скорость базала в вашем профиле установлена на 1 ед./ч, то, умножив ее на 4, вы получите значение 4 ед./ч. и зададите эту величину в качестве параметра безопасности.

Здесь нельзя просто задать любое значение: по причине безопасности есть "жесткий предел", который зависит от возраста пациента. "Жесткий предел" максимального активного инсулина maxIOB в алгоритме помощника болюса AMA ниже, чем в алгоритме SMB. Для детей эта величина самая низкая, а для инсулинарезистентных взрослых - самая большая.

Жестко заданными параметрами в **AAPS** являются:

- Ребенок: 2
- Подросток: 5
- Взрослый: 10
- Инсулинорезистентный взрослый: 12
- Беременная: 25

*См. также [обзор программно закодированных жестких пределов](#Open-APS-features-overview-of-hard-coded-limits).*

### Maximum basal IOB OpenAPS can deliver \[U\] (OpenAPS "max-iob")

Этот параметр ограничивает максимальную величину активного базального инсулина IOB, при которой работает алгоритм **AAPS**. Если активный инсулин IOB выше, то алгоритм AAPS перестает подавать дополнительный базальный инсулин до тех пор, пока базальный IOB не окажется в заданных пределах.

Значение по умолчанию 2, но можно постепенно поднять этот параметр, чтобы посмотреть, как он влияет на вас и какое значение лучше. Эта величина для каждого своя, а также зависит от средней общей суточной дозы (TDD). По соображениям безопасности, существует предел, который зависит от возраста пациента . "Жесткий предел" максимального активного инсулина maxIOB в алгоритме помощника болюса AMA ниже, чем в алгоритме SMB.

- Ребенок: 3
- Подросток: 5
- Взрослый: 7
- Инсулинорезистентный взрослый: 12
- Беременная: 25

*См. также [обзор программно закодированных жестких пределов](#Open-APS-features-overview-of-hard-coded-limits).*

### Use Autosens (AMA)

Здесь можно выбрать, использовать функцию [автоматического определения чувствительности ](../DailyLifeWithAaps/SensitivityDetectionAndCob.md) или нет.

### Autosens adjust targets

Если эта опция включена, Autosens может скорректировать цели (наряду с базой и ISF). Это позволяет **AAPS** работать более или менее "агрессивно". При этом фактическая цель может быть достигнута быстрее.

### Advanced Settings

- Normally you do not have to change the settings in this dialog!
- If you want to change them anyway, make sure you understand what you are doing — see the full parameter reference in [OpenAPS's preferences and safety settings documentation](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Всегда использовать укороченное среднее приращение вместо простого ** Если включить эту функцию, **AAPS** использует среднюю дельту/приращение ГК за последние 15 минут, которая обычно представляет собой среднее из трех последних значений. This helps **AAPS** to work more steady with noisy data sources like xDrip and Libre.

**Максимальный ежедневный множитель безопасности** Это важный ограничитель безопасности. Настройка по умолчанию (которая вряд ли потребует корректировки) равна 3. Это означает, что алгоритму **AAPS** ни при каких условиях не будет разрешено устанавливать временный базал, который более чем в 3 раза выше самого высокого почасового базала, запрограммированного в помпе. Пример: если ваша максимальная базальная скорость составляет 1,0 Ед/ч, а максимальный коэффициент суточной безопасности равен 3, то **AAPS** может установить максимальную временную базальную скорость в 3,0 Ед/ч (= 3 х 1,0 Ед/ч).

Значение по умолчанию: 3 (не следует изменять, если нет настоящей потребности и вы не уверены в том, что делаете)

**Текущий множитель безопасности базала** Это важный ограничитель безопасности. Настройка по умолчанию (которая вряд ли потребует корректировки) равна 4. Это означает, что алгоритму **AAPS** ни при каких условиях не будет разрешено устанавливать временный базал, который более чем в 4 раза выше текущего почасового базала, запрограммированного в помпе.

Значение по умолчанию: 4 (не следует изменять, если нет настоящей потребности и вы не понимаете, что делаете)

**Делитель приостановки болюса** Функция «приостановка болюса» работает после болюса на еду. **ААPS** не задает временный базал на низкой цели после еды на время действия инсулина DIA, поделенное на «делитель приостановки болюса». Значение по умолчанию 2. Это означает, что при продолжительности действия инсулина DIA 5 часов "приостановка болюса" продлится 5ч. : 2 = 2,5 часа.

Значение по умолчанию: 2

* * *

(Функции-Open-APS-обзор-жестких-ограничений)=

## Overview of hard-coded limits

|            | ребенок | Подросток | взрослый | Инсулинорезистентный взрослый | Беременная |
| ---------- | ------- | --------- | -------- | ----------------------------- | ---------- |
| MAXBOLUS   | 5       | 10        | 17       | 25                            | 60         |
| MINDIA     | 5       | 5         | 5        | 5                             | 5          |
| MAXDIA     | 9       | 9         | 9        | 9                             | 10         |
| MINIC      | 2       | 2         | 2        | 2                             | 0.3        |
| MAXIC      | 100     | 100       | 100      | 100                           | 100        |
| MAXIOB_AMA | 3       | 5         | 7        | 12                            | 25         |
| MAXIOB_SMB | 7       | 13        | 22       | 30                            | 70         |
| MAXBASAL   | 2       | 5         | 10       | 12                            | 25         |