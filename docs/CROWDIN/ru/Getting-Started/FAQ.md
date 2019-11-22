# Часто задаваемые вопросы по работе ИПЖ

Хотите добавить вопросы в ЧаВо? Читайте [инструкции](../make-a-PR.md)

# Общие настройки

## Можно ли скачать установочный файл AndroidAPS?

Нет. Для AndroidAPS не предоставляется загружаемый файл apk. Его надо [скомпилировать](../Installing-AndroidAPS/Building-APK.md) самостоятельно. Причина вот в чем:

AndroidAPS создан для управления помпой и подачи инсулина. В соответствии с действующим Европейским законодательством, все системы, классифицируемые как IIa или IIb, являются медицинскими устройствами, подлежащими обязательной сертификации (получение знака CE), что в свою очередь требует соответствующих исследований и одобрений. Распространение несертифицированных устройств незаконно. Аналогичные законы существуют и в других частях мира.

Это положение не ограничивается торговлей, но относится к любому виду распространения (даже безвозмездному). Создание медицинского устройства для себя является единственным вариантом, не затрагиваемым этими правилами.

Именно поэтому распространение в виде готовых приложений (apk) недоступно.

## С чего начать?

Прежде всего, нужно **подготовить компоненты, которые работают с ипж**:

* Совместимую с AAPS(ИПЖ) инсулиновую помпу 
* Смартфон с Андроидом (Apple iOS не поддерживается AndroidAPS - вместо этого изучите вариант [iOS Loop](https://loopkit.github.io/loopdocs/)) 
* [Система непрерывного мониторинга глюкозы крови (ГК)](../Configuration/BG-Source.rst). 

Во-вторых, вам нужно **настроить ваше оборудование**. Смотрите [пример установки с пошаговым руководством](Sample-Setup.md).

В-третьих, вам нужно **настроить компоненты программного обеспечения**: AndroidAPS и источники мониторинга.

В-четвертых, вам нужно изучить и **понять исходный дизайн OpenAPS для проверки параметров лечения**. Фундаментальный принцип замкнутой петли: скорость подачи вашего базала и соотношение инсулин/углеводы должны быть точно выверены. Все рекомендации, выдаваемые ИПЖ предполагают, что ваши базовые потребности в инсулине удовлетворены и любые пики и провалы характеристики ГК - следствие других факторов, требующих дополнительных настроек ( нагрузка, стресс и пр.). В настройках ИПЖ введены ограничения безопасности (см. максимально допустимый базальный уровень в [Архитектуре OpenAPS](https://openaps.org/reference-design/)), которые означают, что вам не придется тратить допустимые дозировки на исправление неправильной базы. Например, если перед едой вы часто ставите временную цель на пониженный уровень ГК, вам, скорее всего, требуется настройка базы. Вы можете использовать [автонастройку](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) для обработки массива ваших данных и определения необходимости коррекции базальной скорости, фактора чувствительности к инсулину ISF и углеводного коэффициента CR. Либо протестировать и определить скорость базала [старым способом](http://integrateddiabetes.com/basal-testing/).

## Важные практические аспекты

### Защита паролем

Если вы считаете необходимым исключить несанкционированное изменение настроек ИПЖ, вы можете закрыть паролем настройку, выбрав в меню "Пароль для настроек" и установив пароль на этот раздел. В следующий раз, когда вы войдете в это меню, система запросит пароль и не позволит поменять его без корректного ввода. Если в дальнейшем вы хотите удалить пароль, зайдите в это меню снова и удалите текст.

### Смарт-часы Android Wear

Если вы планируете использовать Android Wear для изменения болюса или настроек, нужно убедиться, что сообщения от AAPS не блокируются. Подтверждение действий происходит через уведомление.

### Отключение помпы

Если необходимо отключить помпу для душа/купания/плавания/спорта и т. д. вы должны дать AndroidAPS знать, что инсулин не подается, чтобы обеспечить корректное значение активного инсулина IOB.

* Нажмите и удерживайте кнопку "Замкнутый цикл" (до активации замкнутого цикла она называется "Открытый цикл") в верхней части главного экрана. 
* Выберите ** 'Отсоединить помпу на XY мин' **
* Это установит скорость подачи базала на "0".
* Минимальная продолжительность разъединения - это минимальная длина временных базалов TBR которые можно установить на помпе. Поэтому, если вы хотите отсоединиться на более короткий период, все равно выбирайте минимальное время отключения, доступное вашей помпы, и подсоединитесь вручную, как описано ниже.
* Кнопка 'замкнутый цикл' (или 'разомкнутый цикл') станет красной и будет нименоваться теперь 'отключено на (ХХ мин)', демонстрируя время, оставшееся до возобновления.
* AAPS автоматически восстановит соединение после выбранного времени, и замкенный цикл снова начнет работу.
    
    ![Отключение помпы](../images/PumpDisconnect.png)

* Если выбранное время было слишком долгим, можно переподключиться вручную.

* Нажмите и удерживайте красную кнопку 'Отключено (xx мин)'.
* Выберите 'Переподключить помпу'
    
    ![Возобновление соединения с помпой](../images/PumpReconnect.png)

### Рекомендации основаны не на одном показании мониторинга

Для безопасности, рекомендации системы делаются не на одном показании ГК, а на среднем из последних значений (с учетом скользящей дельты). Поэтому, если пропущено несколько показаний, понадобится время на то, чтобы AndroidAPS снова начал компенсацию ГК в режиме замкнутого цикла.

### Дополнительные ресурсы

Вот несколько блогов с полезными советами, которые помогут понять практику работы ИПЖ:

* [ Параметры тонкой настройки ](http://seemycgm.com/2017/10/29/fine-tuning-settings/) См. мой мониторинг
* [Почему длительность работы инсулина DIA имеет значение](http://seemycgm.com/2017/08/09/why-dia-matters/) (см. мой мониторинг)
* [Как ограничить пики после питания](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
* [Гормоны и autosens](http://seemycgm.com/2017/06/06/hormones-2/) (см. мой мониторинг)

## Какое запасное оборудование рекомендуется брать с собой?

Прежде всего, необходимо иметь стандартный набор для диабета 1го типа. При работе с AndroidAPS настоятельно рекомендуется также иметь:

* Запасной аккумулятор для подзарядки смартфона, смарт-часов и (если необходимо) считывателя BT
* Резервную копию используемых вами приложений: последний APK программного обеспечения AAPS, пароль на хранилище, файл настроек AAPS, файл настроек xDrip и т. д.. Целесообразно использовать для этого облако (DropBox, Yandex. Disk и пр.)...
* Батарейки для помпы

## Как безопасно закрепить трансмиттер ГК/сенсор ГК?

Его можно закрепить при помощи пластыря: В продаже можно найти предварительно прорезанные пластыри для распространенных систем мониторинга (выполните поиск Google или ebay). Некоторые пользователи ИПЖ применяют более дешевые стандартные кинезезиотейпы или лейкопластыри.

Можно его закрепить: В продаже есть готовые эластичные повязки, которыми можно фиксировать сенсор (поищите через Google или ebay).

# Настройки системы AndroidAPS

Этот список поможет оптимизировать настройки. Начните сверху и двигайтесь вниз. Старайтесь выверить одну настройку прежде чем переходить к другой. Двигайтесь небольшими шагами, не вносите большие изменения сразу. Можно использовать автонастройку [Autotune](https://autotuneweb.azurewebsites.net/) которая даст общее направление, но принимайте рекомендации не вслепую и не во всех ситуациях. Обратите внимание, что настройки дополняют друг друга - вы можете иметь "неправильные" настройки, которые в некоторых обстоятельствах работают хорошо (например, если слишком высокий базал установлен одновременно со слишком высоким углеводным коэффициентом CR), но в других не работают. Это означает, что нужно учитывать все настройки и убедиться, что они совместно работают в различных обстоятельствах.

## Продолжительность активности инсулина DIA

### Описание & тестирование

Длительность времени, которое инсулин падает до нуля.

Довольно часто задается слишком коротким. Правильная настройка для большинства - не менее 5 часов, иногда 6 или 7.

### Результат

Слишком малое значение продолжительности действия инсулина DIA может привести к низкой ГК. И наоборот.

Если DIA слишком короткий, AAPS слишком рано решит, что предыдущий болюс израсходован, и, при все еще высокой ГК, добавит инсулин. (Фактически, алгоритм не выжидает, а продолжает добавлять инсулин, предсказывая, что произойдет). Это, по сути, создает «затоваривание инсулина», о котором AAPS не знает.

Пример слишком короткого DIA - это высокая ГК, за которой следует избыточная коррекция и в результате - низкая ГК.

## График базала (ед/ч)

### Описание & тестирование

Количество инсулина в заданном часовом блоке для поддержания ГК на стабильном уровне.

Проверьте настройки базы, приостановив цикл и пропуская приемы пищи, чтобы контролировать изменения ГК в течение 5 часов после еды. Повторите несколько раз.

Если ГК падает, то уровень базы слишком велик. И наоборот.

### Результат

Повышенная скорость подачи базала может привести к низкому уровню ГК. И наоборот.

AAPS по умолчанию строит свой алгоритм отталкиваясь от скорости базала. Если базал слишком высокий, то «нулевая временная скорость» будет определяться при большем отрицательном значении активного инсулина IOB, чем нужно. Это приведет к тому, что АААПС будет давать больше коррекций, чем следует, чтобы привести активный инсулин IOB к нулю.

Таким образом, слишком высокая скорость подачи базала создаст низкую ГК как на стандартной базе, так и несколько часов спустя, так как AAPS еще корректирует к цели.

И наоборот, слишком низкая скорость базы может привести к высоким ГК, и невозможности снизить уровень до целевого.

## Фактор чувствительности к инсулину (ISF) (ммоль/л/ед или мг/дл/ед)

### Описание & тестирование

Ожидаемое снижение ГК после подачи 1ед. инсулина.

Если база рассчитана верно, вы можете определить ISF, приостановив цикл и убедившись что IOB равен нулю, принять несколько таблеток глюкозы, чтобы получить стабильно «высокую» гликемию.

Затем введите предполагаемое количество инсулина (по текущему соотношению 1/ISF), чтобы прийти к целевой ГК.

Будьте осторожны, так как довольно часто величина слишком занижена. Слишком низкая чувствительность означает, что 1 ед опустит ГК быстрее, чем ожидалось.

### Результат

**Более низкая чувствительность ISF** (например 40 мг/дл/ед вместо 50) = более агрессивный алгоритм, приводящий к большему падению ГК на каждую единицу инсулина. Если она слишком мала, можно получить низкий уровень ГК.

**Более высокая чувствительность ISF** (например 45 мг/дл/ед вместо 35) = менее агрессивный алгоритм, приводящий к меньшему падению ГК на каждую единицу инсулина. Если она слишком велика, можно получить высокий уровень ГК.

**Пример:**

* ГК - 190 мг/дл (10,5 ммол/л), а цель - 100 мг/дл (5,6 ммол/л). 
* Нужно скорректировать 90 мг/дл (= 190 - 100).
* Чувствитльность ISF = 30 -> 90 / 30 = 3 единицы инсулина
* Чувствитльность ISF = 45 -> 90 / 45 = 2 единицы инсулина

Слишком низкая заданная чувствительность (бывает нередко) может привести к "чрезмерной коррекции" ГК, поскольку AAPS будет считать, что ему нужно больше инсулина для корректировки высокой гликемии, чем на самом деле. Это может привести к «американским горкам» (особенно при голодании). В этом случае вам нужно увеличить ISF. Тогда ААПС уменьшит корректирующие дозы, что позволит избежать чрезмерной коррекции, которая приводит к низкой ГК.

В то же время, задание слишком высокой чувствительности ISF может привести к недостаточной коррекции, когда ГК останется выше цели, это особенно заметно за ночь.

## Соотношение инсулин-углеводы (IC) (г/ед)

### Описание & тестирование

Углеводы в граммах на каждую единицу инсулина.

Некоторые пользователи также используют I:C в качестве сокращения вместо IC или говорят о коэффициенте углеводов (carb ratio, CR).

Полагая, что база задана верно, можно проверить этот коэффициент, убедившись в отсутствии активного инсулина IOB при нормальной гликемии. Для этого надо съесть известную пищу с известным количеством углеводов и подав на нее расчетное количество инсулина, основываясь на текущем соотношении IC. Лучше всего есть пищу, которую вы обычно едите в это время дня и точно посчитать ее углеводы.

> **NOTE:**
> 
> In some European countries bread units were used for determination of how much insulin is needed for food. At the beginning 1 bread unit equaled 12g of carbs, later some changed to 10g of carbs.
> 
> In this model the amount of carbs was fixed and the amount of insulin was variable. ("How much insulin is needed to cover one bread unit?")
> 
> When using IC the amount of insulin is fixed and the amount of carbs is variable. ("How many g of carbs can be covered by one unit of insulin?")
> 
> Пример:
> 
> Bread unit facor (BU = 12g carbs): 2,4 -> You need 2,4 units of insulin when you eat one bread unit.
> 
> Corresponding IC: 12 / 2,4 = 5,2 -> 5,2g carbs can be covered with one unit of insulin.
> 
> Conversion tables are available online i.e. [here](https://www.mylife-diabetescare.com/files/media/03_Documents/11_Software/FAS/SOF_FAS_App_KI-Verha%CC%88ltnis_MSTR-DE-AT-CH.pdf).

### Результат

**Более низкий углеводный коэффициент IC** = меньше еды на единицу инсулина, то есть вы получаете больше инсулина на фиксированное количество углеводов. Может также назваться «более агрессивным».

**Более высокий углеводный коэффициент IC** = больше еды на единицу инсулина, то есть вы получаете меньше инсулина на фиксированное количество углеводов. Может также назваться «менее агрессивным».

Если после усваивания пищи и возвращения активного инсулина IOB к нулю, ГК остается выше чем до еды, высока вероятность того, что IC слишком велик. И наоборот, если ГК ниже, чем перед едой, IC слишком мал.

# Алгоритм APS

## Почему на вкладке "помощник болюса OPENAPS AMA" время действия инсулина DIA показано как 3, хотя у меня в профиле другая величина?

![AMA 3h](../images/Screenshot_AMA3h.png)

In AMA, DIA actually doesn't mean the 'duration of insulin acting'. It is a parameter, which used to be connected to the DIA. Now, it means, 'in which time should the correction be finished'. It has nothing to do with the calculation of the IOB. In OpenAPS SMB, there is no need for this parameter anymore.

## Профиль

### Почему следует устанавливать минимум продолжительности действия инсулина DIA на 5 часов вместо 2-3 часов?

Well explained in [this article](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/). Don't forget to `ACTIVATE PROFILE` after changing your DIA.

### Что заставляет алгоритм цикла часто понижать мою ГК до гипогликемических значений в отсутствии углеводов COB в организме?

First of all, check your basal rate and make a no-carb basal rate test. If it is correct, this behavior is typically caused by a too low ISF. A too low ISF looks typically like this:

![ISF too low](../images/isf.jpg)

### Что вызывает высокие постпрандиальные пики в замкнутом цикле?

First of all, check your basal rate and make a no-carb basal rate test. If it is correct and your BG is falling to your target after carbs are fully absorbed, try to set an 'eating soon' temp target in AndroidAPS some time before the meal or think about an appropriate prebolus time with your endocrinologist. If your BG is too high after the meal and still too high after carbs are fully absorbed, think about decreasing your IC with your endocrinologist. If your BG is too high while COB and too low after carbs are fully absorbed, think about increasing your IC and an appropriate prebolus time with your endocrinologist.

# Другие настройки

## Настройки Nightscout

### Клиент NScout AndroidAPS выдает ошибку 'не разрешено' и не передает данные. Что делать?

In NSClient check 'Connection settings'. Maybe you actually are not in an allowed WLAN or you have activated 'Only if charging' and your charging cable is not attached.

## Настройки мониторинга

### Почему AndroidAPS выдает сообщение: 'Источник ГК не поддерживает расширенную фильтрацию'?

If you do use another CGM/FGM than Dexcom G5 or G6 in xDrip native mode, you'll get this alert in AndroidAPS OpenAPS-tab. See [Smoothing blood glucose data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) for more details.

## Помпа

### Где поместить помпу?

There are innumerable possibilities to place the pump. It does not matter if you are looping or not. If you rather would have a tubeless insulin pump and have a Dana for looping, check the 30cm catheter with the original belly belt.

### Батареи

Looping can reduce the pump battery faster than normal use because the system interacts through bluetooth far more than a manual user does. It is best to change battery at 25% as communication becomes challenging then. You can set warning alarms for pump battery by using the PUMP_WARN_BATT_P variable in your Nightscout site. Tricks to increase battery life include:

* уменьшить длительность работы экрана LCD (в меню настроек помпы)
* уменьшить длительность работы подсветки (в меню настроек помпы)
* выберите уведомления в виде звукового сигнала а не вибрации (в меню настроек помпы)
* Нажимайте кнопки помпы только для перезагрузки; для просмотра журналов, уровня батареи и объема резервуара помпы пользуйтесь смартфоном с AndroidAPS.
* На некоторых телефонах AndroidAPS периодически закрывается для экономии энергии или высвобождения оперативной памяти. Когда AndroidAPS вновь инициализируется, то при каждом старте устанавливает соединение Bluetooth с помпой и перечитывает текущую базальную скорость и журнал болюсов. Это расходует батарею. Чтобы увидеть, происходит ли это, перейдите в Настройки > NSClient и включите 'Отправлять запуски приложения в NS'. Nightscout будет получать данные о событии при каждом перезапуске AndroidAPS, что облегчит отслеживание проблемы. Чтобы уменьшить расход батареи при таких событиях, в настройках батареи телефона включите AndroidAPS в список разрешенных приложений и тогда монитор расхода энергии перестанет закрывать AAPS.
    
    Например, внести в белый списокна смартфоне Samsung Android Pie:
    
    * Перейти к параметрам-> Уход за устройством-> Аккумулятор 
    * Прокрутите страницу до тех пор, пока не найдете AndroidAPS и выберите его 
    * Снимите флажок с "Переводить приложение в спящий режим
    * Также зайдите в Настройки -> Приложения -> (символ три круга в правой верхней части экрана) выбираем "особый доступ" -> оптимизировать использование батареи
    * Прокрутите страницу до AndroidAPS и убедитесь, что огалочка выбора снята.

* протирайте контакты батареи спиртовыми салфетками, чтобы на ней не оставались следы заводской смазки.

* в [помпах DanaR/RS ](../Configuration/DanaRS-Insulin-Pump.md)процедура запуска батареи подает импульс высокого напряжения для устранения заводской пленки (которая предотвращает потерю энергии при хранении), но это не всегда срабатывает на 100%. Либо удалите и заново вставьте батарею 2-3 раза до тех пор, пока на экране помпы заряд батареи не покажет 100%, либо замкните контакты батареи на долю секунды при помощи ключа батареи, чтобы удалить этот защитный слой.
* см. также советы для [конкретных типов батареи](../Usage/Accu-Chek-Combo-Tips-for-Basic-usage#battery-type-and-causes-of-short-battery-life)

### Замена картриджей и катетеров

The change of cartridge cannot be done via AndroidAPS but must be carried out as before directly via the pump.

* Нажмите и удерживайте кнопку "Открытый цикл"/"Замкнутый цикл" на вкладке "Главный экран" AndroidAAPS и выберите "Приостановка цикла на 1ч'
* Отключите помпу и замените резервуар в соответствии с инструкцией помпы.
* После переподключения помпы запустите цикл долгим нажатием на 'Приостановлено (X мин.)'.

The change of a canula however does not use the "prime infusion set" function of the pump, but fills the infusion set and/or canula using a bolus which does not appear in the bolus history. This means it does not interrupt a currently running temporary basal rate. On the Actions (Act) tab, use the PRIME/FILL button to set the amount of insulin needed to fill the infusion set and start the priming. If the amount is not enough, repeat filling. You can set default amount buttons in the Preferences > Other > Fill/Prime standard insulin amounts. See the instruction booklet in your canula box for how many units should be primed depending on needle length and tubing length.

## Фоновый рисунок

You can find the AndroidAPS wallpaper for your phone on the [phones page](../Getting-Started/Phones#phone-background).

## Повседневное применение

### Гигиена

#### Что делать при приеме душа или ванной?

You can remove the pump while taking a shower or bath. For this short period of time you'll usually won't need it. But you should tell it to AAPS so that the IOB calculations are right.

See [description above](../Getting-Started/FAQ#disconnect-pump).

### На работе

Depending on the kind of your job, maybe you use different treatment factors on workdays. As a looper you should think of a [profile switch](../Usage/Profiles.md) for your estimated working day (e.g. more than 100% for 8h when sitting around or less than 100% when you are active), a high or low temporary target or a [time shift of your profile](../Usage/Profiles#time-shift) when standing up much earlier or later than regular. If you are using [Nightscout profiles](../Configuration/Config-Builder#ns-profile), you can also create a second profile (e.g. 'home' and 'workday') and do a daily profile switch to the profile you actually need.

## Отдых

### Спорт

You have to rework your old sports habits from pre-loop times. If you simply consume one or more sports carbs as before, the closed loop system will recognize them and correct them accordingly.

So, you would have more carbohydrates on board, but at the same time the loop would counteract and release insulin.

When looping you should try these steps:

* Уменьшите [ профиль ](../Usage/Profiles.md) < 100%.
* Установите [временную цель нагрузка](../Usage/temptarget#activity-temp-target) выше стандартного целевого значения.
* Если вы пользуетесь микроболюсами SMB, убедитесь, что [ Включить SMB с высокими временными целями "](../Usage/Open-APS-features#enable-smb-with-high-temp-targets) и [" Включить SMB всегда " ](../Usage/Open-APS-features#enable-smb-always) неактивны.

Pre- and postprocessing of these settings is important. Make the changes in time before sport and consider the effect of muscle filling.

If you do sports regularly at the same time (i.e. sports class in your gym) you can consider using [automation](../Usage/Automation.rst) for profile switch and TT. Location based automation might also be an idea but makes preprocessing more difficult.

The percentage of the profile switch, the value for your activity temp target and best time for the changes are individual. Start on the safe side if you are looking for the right value for you (start with lower percentage and higher TT).

### Секс

You can remove the pump to be 'free', but you should tell it to AAPS so that the IOB calculations are right.

See [description above](../Getting-Started/FAQ#disconnect-pump).

### Употребление алкоголя

Drinking alcohol is risky in closed loop mode as the algorithm cannot predict the alcohol influenced BG correctly. You have to check out your own method for treating this using the following functions in AndroidAPS:

* Деактивировать режим замкнутого цикла и разбираться с диабетом вручную или
* устанавливать высокие временные цели и отключать незапланированный прием пищи UAM, чтобы избежать увеличения активного инсулина IOB из-за непредусмотренной еды или
* переключить профиль на величину, заметно менее 100% 

When drinking alcohol, you always have to have an eye on your CGM to manually avoid a hypoglycemia by eating carbs.

### Сон

#### Как обеспечить работу цикла ночью без воздействия мобильного и WIFI излучения?

Many users turn the phone into airplane mode at night. If you want the loop to support you when you are sleeping, proceed as follows (this will only work with a local BG-source such as xDrip+ or patched Dexcom app, it will NOT work if you get the BG-readings via Nightscout):

1. Включите режим авиаперелета на вашем мобильном устройстве.
2. Подождите, пока режим авиаперелета не будет активирован.
3. Включите Блутус.

You are not receiving calls now, nor are you connected to the internet. But the loop is still running.

У некоторых пользователей обнаружились проблемы с локальной трансляцией (AAPS не получает данные от xDrip+) в режиме авиаперелета. Перейдите в Настройки xdrip+ > Inter-app settings > Identify receiver и введите `info.nightscout.androidaps`.

![xDrip+ Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

### При переездах

#### Как справляться с изменениями часового пояса?

With Dana R and Dana R Korean you don't have to do anything. For other pumps see [time zone travelling](../Usage/Timezone-traveling.md) page for more details.

## Медицинские аспекты

### Госпитализация

If you want to share some information about AndroidAPS and DIY looping with your clinicians, you can print out the [guide to AndroidAPS for clinicians](../Resources/clinician-guide-to-AndroidAPS.md).

### На приеме у эндокринолога

#### Отчетность

You can either show your Nightscout reports (https://YOUR-NS-SITE.com/report) or check [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).