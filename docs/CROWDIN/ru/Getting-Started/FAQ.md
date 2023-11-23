# Часто задаваемые вопросы по работе ИПЖ

Хотите добавить вопросы в ЧаВо? Читайте [инструкции](../make-a-PR.md)

# Общие настройки

## Можно ли скачать установочный файл AAPS?

Нет. Для AndroidAPS не предоставляется загружаемый файл apk. Его надо [скомпилировать](../Installing-AndroidAPS/Building-APK.md) самостоятельно. Причина вот в чем:

AndroidAPS создан для управления помпой и подачи инсулина. В соответствии с действующим Европейским законодательством, все системы, классифицируемые как IIa или IIb, являются медицинскими устройствами, подлежащими обязательной сертификации (получение знака CE), что в свою очередь требует соответствующих исследований и одобрений. Распространение несертифицированных устройств незаконно. Аналогичные законы существуют и в других частях мира.

Это положение не ограничивается торговлей, но относится к любому виду распространения (даже безвозмездному). Создание медицинского устройства для себя является единственным вариантом, не затрагиваемым этими правилами.

Именно поэтому распространение в виде готовых приложений (apk) недоступно.

(FAQ-how-to-begin)=

## С чего начать?

First of all, you have to **get loopable hardware components**:

- [Совместимая с AAPS(ИПЖ) инсулиновая помпа](./Pump-Choices.md) 
- an [Android smartphone](Phones.md) (Apple iOS is not supported by AAPS - you can check [iOS Loop](https://loopkit.github.io/loopdocs/)) and
- a [continuous glucose monitoring system](../Configuration/BG-Source.md). 

Во-вторых, нужно **настроить оборудование**. Смотрите [пример установки с пошаговым руководством](Sample-Setup.md).

В-третьих, нужно **настроить компоненты программного обеспечения**: AAPS и источники мониторинга.

В-четвертых, нужно изучить и **понять исходный дизайн OpenAPS для проверки параметров лечения**. Фундаментальный принцип замкнутой петли: скорость подачи базала и соотношение инсулин/углеводы должны быть точно выверены. Все рекомендации, выдаваемые ИПЖ предполагают, что ваши базовые потребности в инсулине удовлетворены и любые пики и провалы характеристики ГК - следствие других факторов, требующих дополнительных настроек ( нагрузка, стресс и пр.). В настройках ИПЖ введены ограничения безопасности (см. максимально допустимый базальный уровень в [Архитектуре OpenAPS](https://openaps.org/reference-design/)), которые означают, что вам не придется тратить допустимые дозировки на исправление неправильной базы. Например, если перед едой вы часто ставите временную цель на пониженный уровень ГК, вам, скорее всего, требуется настройка базы. Вы можете использовать [автонастройку](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) для обработки массива ваших данных и определения необходимости коррекции базальной скорости, фактора чувствительности к инсулину ISF и углеводного коэффициента CR. Либо протестировать и определить скорость базала [старым способом](https://integrateddiabetes.com/basal-testing/).

## Важные практические аспекты

### Защита паролем

If you don't want your preferences to be easily changed then you can password protect the preferences menu by selecting in the preferences menu "password for settings" and type the password you choose. The next time you go into preferences menu it will ask for that password before going any further. If you later want to remove the password option then go into "password for settings" and delete the text.

### Смарт-часы Android Wear

If you plan to use the android wear app to bolus or change settings then you need to ensure notifications from AAPS are not blocked. Подтверждение действий происходит через уведомление.

(FAQ-disconnect-pump)=

### Отключение помпы

Если вы снимаете помпу на время душа, купания, занятия спортом или других действий, то, чтобы активный инсулин IOB правильно отражался в системе, следует проинформировать AAPS, что инсулин не вводится,.

Помпу можно отключить с помощью нажатия на символ цикла на [главном экране AAPS](Screenshots-loop-status).

### Рекомендации основаны не на одном показании мониторинга

For safety, recommendations made are based on not one CGM reading but the average delta. Поэтому, если пропущено несколько показаний, понадобится время на то, чтобы AAPS снова начал компенсацию ГК в режиме замкнутого цикла.

### Дополнительные ресурсы

There are several blogs with good tips to help you understand the practicalities of looping:

- [Подробные Настройки ](https://seemycgm.com/2017/10/29/fine-tuning-settings/) (см.мой мониторинг)
- [Почему так важна длительность работы инсулина DIA](https://seemycgm.com/2017/08/09/why-dia-matters/) (см. мой мониторинг)
- [Как ограничить пики после питания](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
- [Гормоны и autosens](https://seemycgm.com/2017/06/06/hormones-2/) (см.мой мониторинг)

## Какое запасное оборудование рекомендуется брать с собой?

You have to have the same emergency equipment with you like every other T1D with insulin pump therapy. When looping with AAPS it is strongly recommended to have the following additional equipment with or near to you:

- Банк батарей и кабель для зарядки смартфона, часов и (если это необходимо) BT reader или Link device
- Pump batteries
- Действующие дистрибутивы [apk](../Installing-AndroidAPS/Building-APK.md) и [файлы настроек](../Usage/ExportImportSettings.md) для AAPS и других приложений, (напр. xDrip+, BYO Dexcom) как локально, так и в облаке (Dropbox, Google Drive).

## Как надежно и безопасно закрепить сенсор для мониторинга?

Его можно закрепить лейкопластырем. Существует несколько предварительно перфорированных 'накладок' для распространенных систем мониторинга (искать в Google, eBay. Amazon. Озон, Wildberries и т. п.). Некоторые пользователи ИПЖ применяют более дешевые стандартные кинезезиотейпы или лейкопластыри.

Его можно закрепить держателем. В продаже есть держатели CGM/FGM с повязками (поиск Google, eBay Amazon, Озон, Wildberries).

# Настройки AAPS

The following list aims to help you optimize settings. It may be best to start at the top and work to the bottom. Aim to get one setting right before changing another. Work in small steps rather than making large changes at once. You can use [Autotune](https://autotuneweb.azurewebsites.net/) to guide your thinking, although it should not be followed blindly: it may not work well for you or in all circumstances. Note that settings interact with one another - you can have 'wrong' settings that work well together in some circumstances (e.g. if a too-high basal happens to be at the same time as a too-high CR) but do not in others. This means that you need to consider all the settings and check they work together in a variety of circumstances.

## Продолжительность активности инсулина DIA

### Описание & тестирование

The length of time that insulin decays to zero.

This is quite often set too short. Most people will want at least 5 hours, potentially 6 or 7.

(FAQ-impact)=

### Результат

Too short DIA can lead to low BGs. And vice-versa.

If DIA is too short, AAPS thinks too early that your previous bolus is all consumed, and, at still elevated glucose, will give you more. (Actually, it does not wait that long, but predicts what would happen, and keeps adding insulin). This essentially creates ‘insulin stacking’ that AAPS is unaware of.

Example of a too-short DIA is a high BG followed by AAPS over-correcting and giving a low BG.

## График базала (ед/ч)

### Описание & тестирование

The amount of insulin in a given hour time block to maintain BG at a stable level.

Test your basal rates by suspending loop, fasting, waiting for say 5 hours after food, and seeing how BG changes. Repeat a few times.

If BG is dropping, basal rate is too high. And vice-versa.

### Результат

Too high basal rate can lead to low BGs. And vice-versa.

AAPS ‘baselines’ against the default basal rate. If basal rate is too high, a ‘zero temp’ will count as a bigger negative IOB than it should. This will lead to AAPS giving more subsequent corrections than it should to bring IOB ultimately to zero.

So, a basal rate too high will create low BGs both with the default rate, but also some hours hence as AAPS corrects to target.

Conversely a basal rate too low can lead to high BGs, and a failure to bring levels down to target.

## Фактор чувствительности к инсулину (ISF) (ммоль/л/ед или мг/дл/ед)

### Описание & тестирование

The drop in BG expected from dosing 1U of insulin.

Assuming correct basal, you can test this by suspending loop, checking IOB is zero, and taking a few glucose tablets to get to a stable ‘high’ level.

Then take an estimated amount of insulin (as per current 1/ISF) to get to your target BG.

Be careful as this is quite often set too low. Too low means 1 U will drop BG faster than expected.

### Результат

**Lower ISF** (i.e. 40 instead of 50) meaning insulin drops your BG less per unit. This leads to a more aggressive / stronger correction from the loop with **more insulin**. If the ISF is too low, this can lead to low BGs.

**Higher ISF** (i.e. 45 instead of 35) meaning insulin drops your BG more per unit. This leads to a less aggressive / weaker correction from the loop with **less insulin**. If the ISF is too high, this can lead to high BGs.

**Example:**

- BG is 190 mg/dl (10,5 mmol) and target is 100 mg/dl (5,6 mmol). 
- So, you want correction of 90 mg/dl (= 190 - 110).
- ISF = 30 -> 90 / 30 = 3 units of insulin
- ISF = 45 -> 90 / 45 = 2 units of insulin

An ISF that is too low (not uncommon) can result in ‘over corrections’, because AAPS thinks it needs more insulin to correct a high BG than it actually does. This can lead to ‘roller coaster’ BGs (esp. when fasting). In this circumstance you need to increase your ISF. This will mean AAPS gives smaller correction doses, and this will avoid over-correcting a high BG resulting in a low BG.

Conversely, an ISF set too high can result in under-corrections, meaning your BG remains above target – particularly noticeable overnight.

## Углеводный коэффициент (IC) (г/ед)

### Описание & тестирование

The grams of carbohydrate for each unit of insulin.

Some people also use I:C as abbreviation instead of IC or talk about carb ratio (CR).

Assuming correct basal, you can test by checking IOB is zero and that you are in-range, eating exactly known carbs, and take an estimated amount of insulin based on current insulin to carb ratio. Best is to eat food your normally eat at that time of day and count its carbs precisely.

> **ПРИМЕЧАНИЕ:**
> 
> В некоторых европейских странах для определения количества инсулина, необходимого для компенсации пищи, использовались т. н. хлебные единицы. В начале 1 хлебная единица равнялась 12г углеводов, позже некоторые стали считать ее как 10 г.
> 
> В такой модели подсчетов количество углеводов было фиксированной величиной, а количество инсулина-переменной. ("Сколько инсулина нужно для того, чтобы компенсировать одну хлебную единицу?")
> 
> При использовании коэффициента инсулин-углеводы IC количество инсулина фиксируется, а количество углеводов становится величиной переменной. ("Сколько грамм углеводов может компенсироваться одной единицей инсулина?")
> 
> Example:
> 
> Множитель хлебной единицы (ХЕ = 12г. углеводов): 2,4 ед./ХЕ -> Требуется 2,4 ед. инсулина для компенсации одной ХЕ.
> 
> Соответствующее соотношение инсулин-углеводы IC: 12г /2,4 ед -> 5,0 г. углеводов можно компенсировать одной единицей инсулина.
> 
> Множитель ХЕ 2,4 ед/12g ===> IC = 12 г/2,4 ед = 5,0 г/ед
> 
> Таблицы преобразования доступны в Интернете: [ здесь ](https://www.mylife-diabetescare.com/files/media/03_Documents/11_Software/FAS/SOF_FAS_App_KI-Verha%CC%88ltnis_MSTR-DE-AT-CH.pdf).

### Результат

**Lower IC** = less food per unit, i.e. you are getting more insulin for a fixed amount of carbs. Can also be called ‘more aggressive’.

**Higher IC** = more food per unit, i.e. you are getting less insulin for a fixed amount of carbs. Can also be called ‘less aggressive’.

If after meal has digested and IOB has returned to zero, your BG remains higher than before food, chances are IC is too large. Conversely if your BG is lower than before food, IC is too small.

# Алгоритм APS

## Почему на вкладке "помощник болюса OPENAPS AMA" время действия инсулина DIA показано как 3, хотя у меня в профиле другая величина?

![AMA 3h](../images/Screenshot_AMA3h.png)

In AMA, DIA actually doesn't mean the 'duration of insulin acting'. It is a parameter, which used to be connected to the DIA. Now, it means, 'in which time should the correction be finished'. It has nothing to do with the calculation of the IOB. In OpenAPS SMB, there is no need for this parameter any longer.

## Профиль

### Почему следует устанавливать минимум продолжительности действия инсулина DIA на 5 часов вместо 2-3 часов?

Well explained in [this article](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/). Don't forget to `ACTIVATE PROFILE` after changing your DIA.

### Что заставляет алгоритм цикла часто понижать мою ГК до гипогликемических значений в отсутствии углеводов COB в организме?

First of all, check your basal rate and make a no-carb basal rate test. If it is correct, this behavior is typically caused by a too low ISF. A too low ISF looks typically like this:

![ISF too low](../images/isf.jpg)

### Что вызывает высокие постпрандиальные пики в замкнутом цикле?

First of all, check your basal rate and make a no-carb basal rate test. Если все правильно, и гликемия падает до целевого значения после полного усвоения углеводов, попробуйте за некоторое время до еды установить временную цель "ожидаемый прием пищи" в AAPS или продумайте подходящее время преболюса с эндокринологом. If your BG is too high after the meal and still too high after carbs are fully absorbed, think about decreasing your IC with your endocrinologist. Если гликемия слишком высока во время усвоении углеводов COB и слишком низка после их полного усвоения, подумайте об увеличении углеводного коэффициента IC и о надлежащем времени преболюса с эндокринологом.

# Другие настройки

## Настройки Nightscout

### Клиент NScout AndroidAPS выдает ошибку 'не разрешено' и не передает данные. Что делать?

In AAPSClient check 'Connection settings'. Возможно, вы в закрытой для вас зоне WLAN или активировали опцию "подключаться только при зарядке", а ваш кабель зарядки не подключен.

## Настройки мониторинга

### Почему AAPS выдает сообщение: 'Источник ГК не поддерживает расширенную фильтрацию'?

Если у вас иной источник данных ГК чем Dexcom G5 или G6 в нативном режиме xDrip, вы получите это уведомление на вкладке OpenAPS. Для более подробной информации см [Сглаживание данных ГК](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

## Помпа

### Где поместить помпу?

There are innumerable possibilities to place the pump. It does not matter if you are looping or not.

### Батареи

Looping can reduce the pump battery faster than normal use because the system interacts through bluetooth far more than a manual user does. It is best to change battery at 25% as communication becomes challenging then. You can set warning alarms for pump battery by using the PUMP_WARN_BATT_P variable in your Nightscout site. Tricks to increase battery life include:

- reduce the length of time the LCD stays on (within pump settings menu)
- reduce the length of time the backlight stays on (within pump settings menu)
- select notification settings to a beep rather than vibrate (within pump settings menu)
- Нажимать кнопки помпы только для перезагрузки; для просмотра журналов, уровня батареи и объема резервуара помпы пользоваться смартфоном с AAPS.
- На некоторых телефонах AAPS периодически закрывается для экономии энергии или высвобождения оперативной памяти. Когда AAPS вновь инициализируется, то при каждом старте устанавливает соединение Bluetooth с помпой и перечитывает текущую базальную скорость и журнал болюсов. This consumes battery. To see if this is happening, go to Preferences > NSClient and enable 'Log app start to NS'. Nightscout будет получать данные о событии при каждом перезапуске AAPS, что облегчит отслеживание проблемы. Чтобы уменьшить расход батареи при таких событиях, включите AAPS в список разрешенных приложений в настройках батареи телефона и тогда монитор расхода энергии перестанет выключать AAPS.
    
    For example, to whitelist on a Samsung phone running Android Pie:
    
    - Go to Settings -> Device Care -> Battery 
    - Scroll until you find AAPS and select it
    - De-select "Put app to sleep"
    - ALSO go to Settings -> Apps -> (Three circle symbol in the top-right of the screen) select "special access" -> Optimize battery usage
    - Scroll to AAPS and make sure it is de-selected.

- clean battery terminals with alcohol wipe to ensure no manufacturing wax/grease remains.

- for [Dana R/RS pumps](../Configuration/DanaRS-Insulin-Pump.md) the startup procedure draws a high current across the battery to purposefully break the passivation film (prevents loss of energy whilst in storage) but it doesn't always work to break it 100%. Either remove and reinsert battery 2-3 times until it does show 100% on screen, or use battery key to briefly short circuit battery before insertion by applying to both terminals for a split second.
- see also more tips for [particular types of battery](Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)

### Замена картриджей и катетеров

Замена картриджей не может осуществляться через AAPS, ее следует как и раньше, делать непосредственно на помпе.

- Нажмите и удерживайте кнопку "Открытый цикл"/"Замкнутый цикл" на вкладке "Главный экран" AAAPS и выберите "Приостановка цикла на 1ч.'
- Отключите помпу и замените резервуар в соответствии с инструкцией помпы.
- Заполнить инфузионный набор можно и непосредственно с помпы. В этом случае пользуйтесь кнопкой [первичное заполнение инфузионного набора](CPbefore26-pump) во вкладке "Действия" только для внесения записи изменений.
- После переподключения помпы запустите цикл долгим нажатием на 'Приостановлено (X мин.)'.

Однако замена катетера происходит не через функцию "первичного заполнения инфузионного набора" на помпе, но заполняет катетер с помощью болюса, который не отражается в истории болюса. Это означает, что текущая временная скорость базала не прерывается. На вкладке Действия при помощи кнопки [ЗАПОЛНИТЬ](CPbefore26-pump) задайте то количество инсулина, которое необходимого для заполнения инфузионного набора и начните первичное заполнение. Если этого количества недостаточно, повторите заполнение. Вы можете установить кнопки по умолчанию в Настройках > Другое > Заполнить/Инициировать стандартные количества инсулина. В инструкции к инфузионному набору вы найдете объемы единиц для первичного заполнения в зависимости от длины иглы и длины трубки.

## Фоновый рисунок

Обои AAPS можно найти для телефона на странице [ Телефоны ](Phones-phone-background).

## Повседневное применение

### Гигиена

#### Что делать при приеме душа или ванной?

You can remove the pump while taking a shower or bath. За этот короткий промежуток времени вам может не понадобиться, но вы должны сообщить AAPS о том, что отключились для того, чтобы вычисления IOB были правильными. См. [ описание выше ](FAQ-disconnect-pump).

### На работе

В зависимости от вида работы, возможно, вы используете иные методы терапии в рабочие дни. В этом случае есть смысл рассмотреть переключение [профиля](../Usage/Profiles.md) на типичный рабочий день. Например, профиль больше 100% можно установить, если работа не очень тяжелая (напр. сидя за столом), или меньше 100%, если вы активны и на ногах весь день. Также можно рассмотреть возможность установки высокой или низкой временной цели или [смены профиля](Profiles-time-shift), если начинаете намного раньше или позже обычного, или в разные смены. Также можно создать второй профиль (например, дом' и 'работа') и при необходимости переключаться с профиля на профиль.

## Отдых

(FAQ-sports)=

### Спорт

You have to rework your old sports habits from pre-loop times. If you simply consume one or more sports carbs as before, the closed loop system will recognize them and correct them accordingly.

So, you would have more carbohydrates on board, but at the same time the loop would counteract and release insulin.

When looping you should try these steps:

- Make a [profile switch](../Usage/Profiles.md) < 100%.
- Set an [activity temp target](temptarget-activity-temp-target) above your standard target.
- If you are using SMB make sure ["Enable SMB with high temp targets"](Open-APS-features-enable-smb-with-high-temp-targets) and ["Enable SMB always"](Open-APS-features#enable-smb-always) are disabled.

Pre- and post-processing of these settings is important. Make the changes in time before sport and consider the effect of muscle filling.

If you do sports regularly at the same time (i.e. sports class in your gym) you can consider using [automation](../Usage/Automation.md) for profile switch and TT. Location based automation might also be an idea but makes preprocessing more difficult.

The percentage of the profile switch, the value for your activity temp target and best time for the changes are individual. Start on the safe side if you are looking for the right value for you (start with lower percentage and higher TT).

### Секс

Можете снять помпу для "свободы" но следует проинформировать об этом AAPS, чтобы расчеты активного инсулина IOB были правильными. См. [ описание выше ](FAQ-disconnect-pump).

### Употребление алкоголя

Drinking alcohol is risky in closed loop mode as the algorithm cannot predict the alcohol influenced BG correctly. You have to check out your own method for treating this using the following functions in AAPS:

- Deactivating closed loop mode and treating the diabetes manually or
- setting high temp targets and deactivating UAM to avoid the loop increasing IOB due to an unattended meal or
- do a profile switch to noticeably less than 100% 

When drinking alcohol, you always have to have an eye on your CGM to manually avoid a hypoglycemia by eating carbs.

### Сон

#### Как обеспечить работу цикла ночью без воздействия мобильного и WIFI излучения?

Many users turn the phone into airplane mode at night. If you want the loop to support you when you are sleeping, proceed as follows (this will only work with a local BG-source such as xDrip+ or ['Build your own Dexcom App'](DexcomG6-if-using-g6-with-build-your-own-dexcom-app), it will NOT work if you get the BG-readings via Nightscout):

1. Включите режим авиаперелета на вашем мобильном устройстве.
2. Подождите, пока режим авиаперелета не будет активирован.
3. Включите Блутус.

You are not receiving calls now, nor are you connected to the internet. But the loop is still running.

Some people have discovered problems with local broadcast (AAPS not receiving BG values from xDrip+) when phone is in airplane mode. Go to Settings > Inter-app settings > Identify receiver and enter `info.nightscout.androidaps`.

![xDrip+ Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

### При переездах

#### Как справляться с изменениями часового пояса?

With Dana R and Dana R Korean you don't have to do anything. For other pumps see [time zone travelling](../Usage/Timezone-traveling.md) page for more details.

## Медицинские аспекты

### Госпитализация

If you want to share some information about AAPS and DIY looping with your clinicians, you can print out the [guide to AAPS for clinicians](../Resources/clinician-guide-to-AndroidAPS.md).

### На приеме у эндокринолога

#### Отчетность

You can either show your Nightscout reports (https://YOUR-NS-SITE.com/report) or check [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).

# Частые вопросы из Discord и ответы на них...

## Моя проблема здесь не указана.

[Информация о получении помощи.](Connect-with-other-users-i-m-getting-stuck-what-do-i-do-who-can-i-ask)

## My problem is not listed here but I found the solution

[Информация о получении помощи.](Connect-with-other-users-i-m-getting-stuck-what-do-i-do-who-can-i-ask)

**Remind us to add your solution to this list!**

## AAPS stops everyday around the same time.

Остановите защиту Google Play Protect. Check for "cleaning" apps (ie CCleaner etc) and uninstall them. AAPS / 3 dots menu / About / follow the link "Keep app running in the background" to stop all battery optimizations.

## Как организовать резервные копии ?

Регулярно экспортируйте настройки: после замены каждого пода, после изменения профиля, когда подтверждено прохождение цели, если заменили помпу… Даже если ничего не изменится, экспортируйте настройки раз в месяц. Сохраняйте несколько старых файлов экспорта.

Скопируйте на интернет-диске (Dropbox, Google etc) : все приложения, которые использовали для установки приложений на телефон (AAPS, xDrip, BYODA, Patched LibreLink…), а также экспортированные настройки из всех этих приложений.

## Проблемы, ошибки при создании приложения.

Пожалуйста,

- проверьте [Устранение неполадок Android Studio](troubleshooting_androidstudio-troubleshooting-android-studio) на наличие типичных ошибок и
- [пошаговые инструкции](https://docs.google.com/document/d/1oc7aG0qrIMvK57unMqPEOoLt-J8UT1mxTKdTAxm8-po).

## Я застрял на цели и нуждаюсь в помощи.

Сохраните экран вопросов и ответов. Отправьте сообщение на канал Discord AAPS. Don't forget to tell which options you choose (or not) and why. Вы получите подсказки и помощь, но ответы надо найти самостоятельно.

## Как сбросить пароль в AAPS v2.8.x ?

Откройте меню hamburger, запустите мастер настройки и введите новый пароль по запросу. Вы можете выйти из мастера после установки нового пароля.

## How to reset the password in AAPS v3.x

You find the documentation [here](update3_0-reset-master-password).

## Мой Link/помпа/pod не отвечает (RL/OL/EmaLink…)

На некоторых телефонах Bluetooth разъединяется с Link (RL/OL/EmaL...).

Some also have non responsive Links (AAPS says that they are connected but the Links can't reach or command the pump.)

Самый простой способ заставить эти части работать - : 1/ Стереть Link из AAPS 2 / Отключить питание Link 3/выйти из AAPS через 3-точечное меню программы 4/ Долгое нажатие на значок AAPS, меню Android, информация о приложении AAPS, Принудительно остановить AAPS и затем очистить память кэша (Не удаляйте основную память !) 4bis/ Некоторым телефонам после этого может понадобиться перезагрузка здесь. Можно попробовать без перезагрузки. 5/ Включить Link 6/Запустить AAPS 7/Вкладка Pod, меню 3 точки, поиск и подключение (Riley)Link

## Ошибка сборки: слишком длинное имя файла

Во время сборки программы получаю ошибку, что имя файла слишком длинное. Возможные решения: Переместите источники в директорию ближе к корневой директории диска (например "c:\src\AndroidAPS-EROS").

Из Android Studio: Убедитесь, что "Gradle" завершил синхронизацию и индексирование после открытия проекта с GitHub. Execute a Build->Clean Project before doing a Rebuild Project. Выполните команду File>Инвалидация кэша и перезагрузите Android Studio.

## Внимание: Выполняется версия разработчика (dev). Замкнутый цикл отключен

AAPS не работает в "режиме разработчика". AAPS показывает сообщение: "запуск dev версии. Замкнутый цикл отключен".

Убедитесь, что AAPS запущен в "режиме разработчика": Поместите файл с именем "engineering_mode" в папку "AAPS/extra". Любой файл подойдет если он назван правильно. Обязательно перезапустите AAPS, чтобы найти файл и перейти в "режим разработчика".

Совет: сделайте копию существующего лог-файла и переименуйте его в "engineering_mode" (примечание: без расширения!).

## Где найти файлы настроек?

Файлы настроек будут храниться во внутреннем хранилище телефона в каталоге "/AAPS/preferences". ВНИМАНИЕ: Убедитесь что помните пароль, без него вы не сможете импортировать зашифрованный файл настроек!

## Как настроить экономию батареи?

Правильная настройка управления питанием важна для предотвращения остановки AAPS и связанных с ним приложений и служб, когда телефон не используется. Если не сделать этого, AAPS не сможет выполнить соединения по Bluetooth с сенсором и Rileylink (RL) может быть выключен, что приведет к "отключению "помпы" оповещений "помпа недоступна" и ошибкам связи. На телефоне перейдите в Настройки->Приложения и отключите экономию заряда батареи для AAPS xDrip или самостоятельно собранное приложение BYODA/Dexcom Системное приложение Bluetooth (возможно, необходимо сначала выбрать системные приложения) Или полностью отключить все энергосбережения на телефоне. В результате батарея может разряжаться быстрее, но вы смжете выяснить, не вызывается ли проблема экономией заряда аккумулятора. Способ экономии аккумулятора в значительной степени зависит от марки телефона, модели и/или версии операционной системы. Из-за этого почти невозможно дать инструкции по правильной настройке экономии заряда аккумулятора. Экспериментируйте, чтобы выяснить, какие настройки лучше для вас. Дополнительную информацию см. также в "Не закрывать приложение"

## Оповещения о недоступности помпы появляются несколько раз в день или ночью.

Ваш телефон может останавливать службы AAPS или даже Bluetooth, что приведет к потере соединения с RL (см. экономия батареи) Настройте оповещения о недоступносте на 120 минут, перейдя в верхнее правое меню, выберите Настройки->Локальные оповещения>Порог недоступности помпы[min].

## Где можно удалить записи терапии в AAPS v3 ?

3 точки меню, выберите терапия, затем меню настроек, и получите различные возможные варианты.

## Настройка приложения AAPSClient remote (для дистанционного управления)

AAPS можно удаленно контролировать через приложение AAPSClient и, при необходимости, через связанное с ним приложение Wear, работающее на часах Android Wear. Note that the AAPSClient (remote) app is distinct from the NSClient configuration in AAPS, and the AAPSClient (remote) Wear app is distinct from the AAPS Wear app--for clarity the remote apps will be referred to as 'AAPSClient remote' and 'AAPS remote Wear' apps.

Чтобы включить дистанционный функционал на AAPSClient дистанционном надо: 1) Установите приложение AAPSClient дистанционный (версия должна совпадать с используемой версией AAPS) 2) Запустите приложение AAPSClient и в мастере настройкипредоставить необходимые разрешения и настройки доступа к вашему сайту Nightscout. 3) На данном этапе вы можете отключить некоторые оповещения, и/или дополнительные настройки, которые регистрируют запуск дистанционного приложения AAPSClient на вашем сайте Nightscout. После этого, дистанционный AAPSClient загрузит данные профиля с сайта Nightscout, на вкладке «Обзор» будут отображаться данные CGM и некоторые данные AAPS, но может не отображать графические данные и указывать, что профиль еще не установлен. 4) Для активизации профиля:

- Enable remote profile synchronization in AAPS > NSClient > Options
- Activate the profile in NSClient remote > Profile After doing so, the profile will be set, and AAPSClient remote should display all data from AAPS. Hint: If the graph is still missing, try changing the graph settings to trigger an update. 5) Для включения дистанционного управления AAPSClient, выборочно включите настройки AAPS (изменения профиля, Временные Цели, Углеводы и т. д. которыми хотите дистанционно управлять с помощью AAPS > NSClient > Опции . После внесения этих изменений вы сможете дистанционно управлять AAPS с помощью Nightscout или AAPSClient дистанционного.

If you'd like to monitor/control AAPS via the AAPSClient remote Wear App, you'll need both AAPSClient remote and the associated Wear app to be installed. Чтобы скомпилировать дистанционное приложение AAPSClient Wear, следуйте стандартным инструкциям по установке/настройке приложения AAPS wear, но при компиляции, выберите вариант AAPSClient.

## У меня горит красный треугольник / AAPS не включает замкнутый цикл/ цикл остановился на низких (LGS) / у меня горит желтый треугольник

Красный и желтый треугольники являются функцией безопасности в AAPS v3.

Красный треугольник означает, что у вас есть дубликаты данных ГК, и AAPS не может точно рассчитать приращение (дельту). При этом невозможно замкнуть цикл. Чтобы очистить красный треугольник, нужно удалить каждое дублируемое значение ГК. Перейдите на вкладку BYODA или xDRIP, долгое нажатие на одну линию, которую вы хотите удалить, пометьте одну из строк, которые задвоены (или через 3 точки меню и Delete, в зависимости от вашей версии AAPS). Если слишком много двойных ГК потребуется сбросить базы данных AAPS,. При этом вы также потеряете статистику, IOB, COB, выбранный профиль.

Возможные причины проблемы: xDrip и/или NS достраивают пропущенные ГК.

Желтый треугольник означает нестабильную задержку между показаниями ГК. You don't receive BGs every 5 min regularly or missing BGs. It is often a Libre problem. It also happens when you change G6 transmitter. If the yellow triangle is related to the G6 tansmitter change, it will go away by itself after several hours (around 24h). In case of Libre, the yellow triangle will stay. The loop can be closed and works correctly.

## Can I move an active DASH Pod to other hardware?

This is possible. Note that as moving is "unsupported" and "untested" there is some risk involved. Best to try the procedure when your Pod is about to expire so when things go wrong not much is lost.

Critical is that pump "state" (which includes it's MAC address) in AAPS and DASH match on reconnecting

## Procedure I follow in this:

1) Suspend the DASH pump. This makes sure there are no running or queued commands active when DASH loses connection 2) Put the phone into airplane mode to disable BT (as well as WiFi and Mobile data). This way it is guaranteed AAPS and DASH can not communicate. 3) Export settings (which includes the DASH state) 4) Copy the settings file just exported from the phone (as it is in airplane mode and we do not want to change that, easiest way is using USB cable) 5) Copy the settings file to the alternate phone. 6) Import settings on the alternate phones AAPS. 7) Check the DASH tab to verify it is seeing the Pod. 8) Un-suspend the Pod. 9) Check the DASH tab and confirm it is communicating with the Pod (use the refresh button)

Congratulations: you did it!

*Wait!* You still have the main phone thinking it can reconnect to the same DASH:

1) On the main phone choose "deactivate". This is safe because the phone has no way of communicating with DASH to actually deactivated the Pod (it is still in airplane mode) 2) Deactivation will result in a communications error - this is expected. 3) Just hit "retry" a couple of times until AAPS offers the option to "Discard" the Pod.

When Discarded, verify AAPS is reporting "No Active Pod". You can now safely disable airplane mode again.

## How do I import settings from earlier versions of AAPS into AAPS v3 ?

You can only import settings (in AAPS v3) that were exported using AAPS v2.8x or v3.x. If you were using a version of AAPS older than v2.8x or you need to use setting exports older than v2.8x, then you need to install AAPS v2.8 first. Import the older settings of v2.x in v2.8. After checking that all is OK, you can export settings from v2.8. Install AAPS v3 and import v2.8 settings in v3.

If you use the same key to build v2.8 and v3, you won't even have to import settings. You can install v3 over v2.8.

There were some new objectives added. You'll need to validate them.