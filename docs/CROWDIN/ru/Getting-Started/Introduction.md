# Введение в APS и AAPS

```{contents} In this page
:backlinks: entry
:depth: 2
```

## Что такое система искусственной поджелудочной железы”?

Человеческая поджелудочная железа делает много, помимо регулирования содержания сахара в крови. Однако, термин **«Система Искусственной Поджелудочной Железы» (APS)** обычно относится к системе, которая работает для автоматического поддержания уровня сахара в крови в здоровых пределах.

Основным способом поддерживать этот уровень является определение **уровней гликемии**, выполнение **расчетов** и подачи (прогнозируемого) корректного количества **инсулина** в организм. Система производит эти расчеты каждые несколько минут, 24/7. Она подает **звуковые сигналы** и **оповещения** для информирования пользователя о необходимости вмешательства или для привлечения его внимания. This system is typically made up of a **glucose sensor**, an **insulin pump** and a **controller** which runs the calculations. In **AAPS** and other open-source systems the controller is an app on a phone. In most commercial systems it is software built into the pump itself, with a phone app used mainly for display and control.

For background on how closed-loop systems developed and how they work, this 2022 review article is a good starting point. Bear in mind it predates most of the systems available today, so it is not a guide to what is currently on the market:

![Граница](../images/FRONTIERS_Logo_Grey_RGB.png) [Closed-Loop Insulin Delivery Systems: Past, Present, and Future Directions](https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2022.919942/full) (Templer, _Frontiers in Endocrinology_, 2022).

So-called “dual-hormone” systems infuse glucagon alongside insulin, with the aim of preventing severe hypos and allowing even tighter blood glucose control. A first system of this kind has been approved in Europe, but it is supplied only through studies and projects, and others are still in development. None is on general sale yet.

Считается, что искусственная поджелудочная железа может быть представлена в виде [«автопилота для вашего диабета»](https://www.artificialpancreasbook.com/). Что это означает?

В самолете автопилот не выполняет всю работу за человека, пилот не может спать на протяжении всего полета. Автопилот помогает работе пилота. It relieves them of the burden of constantly having to manage the aircraft, allowing the pilot to concentrate on wider monitoring. The autopilot receives signals from various sensors, a computer evaluates the data together with the pilot’s specifications and then makes the necessary adjustments, alerting the pilot to any concerns. The pilot no longer has to worry about continually making decisions and this analogy can be applied to **AAPS**.

![изображение](../images/autopilot.png)

(Introduction-what-does-hybrid-closed-loop-mean)=
## Что значит гибридный замкнутый цикл?

Лучшим решением для диабета первого типа было бы «функциональное лекарство» (возможно, имплант поджелудочных клеток, защищенных от иммунной системы). While the type 1 diabetic (T1D) community waits for that, a “full closed loop” artificial pancreas is probably the next best thing. Это технологическая система, которая не нуждается в усилиях пользователя (например для подачи болюсов на еду или предупреждение о физических упражнениях), с хорошей регуляцией уровней глюкозы в крови. Nearly every system in everyday use is a “hybrid” closed loop, because it uses a combination of automated technology and user input. The first full closed loop systems were approved in Europe in 2026, but none is widely available yet.

## Как и почему появились системы ИПЖ?

Развитие коммерческих технологий для людей с диабетом первого типа движется очень медленно. В 2013 году люди, объединенные желанием помочь больным Сд 1 типа, основали движение #WeAreNotWaiting (Мы не ждем). Они сами разработали системы ИПЖ на основе существующих одобренных технологий (инсулиновых помп и систем мониторинга ГК) для улучшения контроля гликемии, безопасности и качества жизни. These are known as OS-AID (Open-Source Automated Insulin Delivery) systems (formerly DIY systems), because they are not formally approved by health bodies (FDA, NHS etc). There are four main OS-AID systems available: [OpenAPS](https://openaps.org/what-is-openaps/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) and [Trio](https://triodocs.org).

A great way to understand the fundamentals of OS-AID looping is to read Dana Lewis’s book “Automated Insulin Delivery”. Ее оригинал [здесь](https://www.artificialpancreasbook.com/) бесплатно (или купить бумажную версию). Перевод на русский язык: https://docs. google. com/document/d/16HW88iKvNjuyMz0rvnTxUiupGBgSv5nHX1RA8Pq-3B0/edit Перевели Александр Чекалин, Юлия Войнич и Владимир Бакуш. Если хотите узнать больше об [OpenAPS](https://openaps.org/what-is-openaps/), который был источником **AAPS** - переходите на сайт [OpenAPS](https://openaps.org/what-is-openaps/).

Several commercial hybrid closed loop systems have also been launched. These are very different to OS-AID systems, mainly because many of them include a “learning algorithm” which adjusts how much insulin is delivered according to your insulin needs from previous days. Many people in the OS-AID community have already tried out commercial systems and compared them with their OS-AID system. You can find out more about how the different systems compare by asking on the dedicated Facebook groups for those systems, on the [AAPS Facebook group](https://www.facebook.com/groups/AndroidAPSUsers/) or on [Discord](https://discord.com/invite/4fQUWHZ4Mw).

## Что такое Android APS (AAPS)?

![изображение](../images/basic-outline-of-AAPS.png)

**Рисунок 1**. Принципиальная схема Android APS (Artificial Pancreas System), AAPS.

Android APS (AAPS) — это гибридная система замкнутого цикла или система искусственной поджелудочной железы (APS). It makes its insulin dosing calculations using established [OpenAPS](https://openaps.org/) algorithms (a set of rules) developed by the #WeAreNotWaiting T1D community.

Since OpenAPS is only compatible with certain older insulin pumps, **AAPS** (which can be used with a wider range of insulin pumps) was first developed in 2016 for a family member with type 1 diabetes. С тех пор **AAPS** постоянно развивается и усовершенствуется командой добровольцев компьютерных разработчиков и других энтузиастов, которые имеют связь с миром сахарного диабета первого типа. Today, **AAPS** is used by many thousands of people worldwide. It is a highly customisable and versatile system, and because it is open-source, it is also readily compatible with many other open-source diabetes software and platforms. Основные компоненты нынешней системы **AAPS** представлены на **рисунке 1** выше.



## Основные компоненты AAPS

"Мозгом" AAPS является **приложение**, которое вы должны собрать сами. Для этого существует подробная пошаговая инструкция. Затем **AAPS ** устанавливается на [совместимый](../Getting-Started/Phones.md) **телефон на ОС Android** (**1**). Многие пользователи предпочитают иметь отдельный телефон для AAPS в дополнение к основному телефону. Таким образом, отдельный телефон на Android может предназначаться только для AAPS.

0>Телефон на Android</strong> должен иметь еще одно приложение наряду с **AAPS**. This [additional app](../Getting-Started/CompatiblesCgms.md) receives glucose data from a sensor (**2**) by Bluetooth, and then sends the data internally on the phone to the **AAPS app**.

Приложение **AAPS** использует процесс принятия решений (**алгоритм**), созданный на базе OpenAPS. Новички начинают использовать базовый алгоритм **oref0**, но при работе с AAPS можно переключиться на более новый алгоритм **oref1**. Выбор алгоритма (ореф1 или ореф), зависит от того, что вам лучше подходит.  В обоих случаях алгоритм учитывает множество факторов и выполняет быстрые вычисления каждый раз, когда поступает новые данные с сенсора. The algorithm then sends instructions to the insulin pump (**3**) on how much insulin to deliver by Bluetooth. All the information can be sent by mobile data or Wi-Fi to the internet (**4**). По желанию эти данные могут также передаваться наблюдателям(фоллоуерам) и/или собираться для анализа. Optionally, you can also pair a [smartwatch](../Getting-Started/Watches.md) (**5**) with the phone to see your data at a glance and, with some watches, send basic commands to **AAPS**.

## Преимущества системы AAPS

Алгоритм OpenAPS, используемый **AAPS** контролирует уровни сахара в крови при отсутствии вводимых пользователем данных, в соответствии с заданными параметрами (наиболее важные из них базальная скорость, коэффициент чувствительности к инсулину ISF, углеводный коэффициент IC, продолжительность действия инсулина и т. д.), реагируя каждые 5 минут на новые данные от сенсора.

Some of the reported advantages of using **AAPS** are extensive fine-tunable options, **Automations** and increased transparency of the system for the patient/caregiver. This can result in better control over your diabetes (or that of someone you are caring for), which in turn may give improved quality of life and increased peace of mind.

Если вы готовы потратить свое время, **AAPS** поможет вам:

- • смягчить стресс и бремя диабета;

- • сократить количество решений, вытекающих из диабета;

- получить персонализированные динамические дозировки инсулина на основе данных, получаемых в режиме реального времени, которые могут сократить потребность в купировании эпизодов гипо- и гипергликемии;

- повысить знания об управлении инсулинотерапией и уверенность в настройке ваших параметров;

- научиться создавать сценарии **автоматизации**, подходящие вашему стилю жизни;

- - улучшить качество сна и сократить частоту пробуждений в ночное время;

- осуществлять дистанционный мониторинг и подачу инсулинов при уходе за лицами с диабетом; и

- рационализировать свое переносное диабетическое оборудование путем замены его на телефон с системой **AAPS**.


В конечном счете,**AAPS** поможет пользователям лучше управлять диабетом, что приведет к стабильному сахару крови и благоприятным перспективам для здоровья.

### К практическим преимуществам относятся:

#### 1) Встроенная безопасность
Для того чтобы ознакомиться с защитными функциями алгоритмов, известных как oref0 и oref1, [нажмите здесь ](https://openaps.org/reference-design/). Пользователь контролирует свои собственные ограничения безопасности.

#### 2) Hardware flexibility

**AAPS** works with a wide range of insulin pumps and sensors and offers flexibility as life changes. Например, если у вас аллергия на пластырь сенсора Dexcom, можно перейти на Libre. Users don't have to rebuild or reinstall the **AAPS** app, just select a different pump or BG source in **Configuration** to change your hardware. **AAPS** is independent of particular pump drivers and also contains a "virtual pump" so users can safely experiment before using it on themselves.

#### 3) Highly customisable, with wide parameters

Пользователи могут легко добавлять/удалять модули и функциональность, а **AAPS** может работать как в режиме открытого, так и закрытого цикла. Вот примеры возможностей с системой **AAPS**:

 a) The ability to set a lower **BG** target 30 min before eating; you can set the target as low as 72 mg/dL (4.0 mmol/L).

 b) если у вас резистентность к инсулину, приводящая к высоким сахарам, **AAPS** позволяет установить правило **автоматизации**: если ГК поднимается выше 8 ммоль/л (144 мг/дл), происходит переход на 120% профиля (что приводит к увеличению базала на 20% и других параметров, в сравнении с обычной настройкой **профиля**). Автоматизация продлится согласно запланированному вами времени. Такая автоматизация может срабатывать в определенные дни недели, в определенное время суток, и даже в определенных местах.

 c) если Ваш ребенок неожиданно оказался на батуте, **AAPS** позволит приостановить подачу инсулина на заданный период времени непосредственно по телефону.

 d) после повторного подключения помпы которая была отключена перед купанием, AAPS будет рассчитывать базальный инсулин, который вы пропустили при отключении и осторожно введет его, согласно вашей текущей ГК. Любой лишний инсулин может быть переопределен простой "отменой" пропущенной базы.

 f) **AAPS** дает возможность настраивать различные профили для различных ситуаций и легко переключаться между ними. Функции, которые делают алгоритм более быстрым для снижения высокой ГК (например, супермикроболюсы («SMB»), неожиданный прием пищи, (“**UAM**”) могут быть настроены на работу только в дневное время, если вы боитесь ночных гипогликемий.

Это все лишь примеры, полный спектр характеристик дает большую гибкость в повседневной жизни, включая спорт, болезнь, гормональные циклы и т. д. В конечном счете, пользователь сам должен решить, как использовать эти возможности, универсальной автоматизации для всех не существует.

#### 4) Remote monitoring
There are multiple possible monitoring channels (Sugarmate, Dexcom Follow, xDrip, Android Auto _etc._) which are useful for parents/carers and adults in certain scenarios (sleeping/driving) who need customisable alerts. In some apps (xDrip) you can also turn alarms off totally, which is great if you have a new sensor “soaking” or settling down that you don’t want to loop with yet.

#### 5) Remote control
A significant advantage of **AAPS** over commercial systems is that it is possible for followers, using authenticated text (SMS) commands or a paired **AAPSClient** app to send a wide range of commands back to the **AAPS** system. This feature is used extensively by parents of kids with type 1 diabetes who use **AAPS**.

The remote control features can be very useful: for example, in the playground, if you want to pre-bolus for a snack from your own phone, and your child is busy playing. It is also possible to monitor the system from a smartwatch (_e.g._ Garmin) or send basic commands from it (_e.g._ a Wear OS watch such as the Samsung Galaxy Watch).

#### 6) No commercial constraints, due to open application interfaces
Отсутствие коммерческих ограничений из-за открытого интерфейса приложений: помимо возможности в любое время просматривать исходный код **AAPS**, принцип открытого интерфейса программирования дает другим разработчикам возможность вносить новые идеи. **AAPS** тесно интегрирован с Nightscout. Это ускоряет разработку и позволяет добавлять новые функции, упрощающие жизнь с диабетом. Good examples for such integrations are [Nightscout](https://nightscout.github.io/), [Nightscout Reporter](https://nightscout-reporter.zreptil.de/), xDrip, [M5 stack](https://github.com/mlukasek/M5_NightscoutMon/wiki) etc. Идет обмен мнениями между разработчиками с открытым исходным кодом и разработчиками коммерческих систем. Many of the OS-AID innovations are gradually adopted by commercial systems, where developments are understandably slower, partly because interfaces between systems from different companies (pumps, apps, sensors _etc_) need to be carefully negotiated and licenced. Это обстоятельство также замедляет внедрение инноваций, удобных для пациента (или небольшой группы пациентов, которые имеют очень специфические потребности, но не генерируют существенной прибыли.

#### 7) Detailed app interface
При помощи **AAPS** легко контролировать такие вещи как: уровень инсулина в помпе, время работы катетера, сенсора, количество активного инсулина в организме _и т. д._. Many actions can be done through the **AAPS** app (priming the pump, disconnecting the pump _etc_.), instead of on the pump itself, which means the pump can stay in your pocket or belt (or that of someone you are caring for).

#### 8) Accessibility and affordability
**AAPS** gives people who currently can’t afford to self-fund, or don’t have funding/insurance, access to a hybrid closed looping system which is conceptually years ahead, in terms of development, of the commercial systems. You currently need a reporting server (Nightscout or Tidepool) to set up **AAPS**, although it is not required for day-to-day running of the **AAPS** loop. Many people continue to use Nightscout for collecting their data, and for remote monitoring. Таким образом, хотя **AAPS** сам по себе бесплатен, создание Nightscout может повлечь за собой периодические платежи (0 - 12 евро), в зависимости от уровня поддержки (см. таблицу). **AAPS** works with a wide range of affordable (starting from approx €150) [Android phones](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true). Для разных языков и локаций доступны разные версии, системой AAPS также могут пользоваться [незрячие](#accessibility-for-users-aaps-who-are-partially-or-completely-blind).

#### 9) Support
Ни одна из автоматизированных систем введения инсулина не является совершенной. Коммерческие системы и системы с открытым исходным кодом имеют много общих недоработок как в коммуникациях, так и в оборудовании. Существует сообщество пользователей AAPS на Facebook, на Discord и на Github, которые создали, доработали и в настоящее время используют **AAPS** по всему миру. Существуют также группы поддержки Facebook и помощь от коммерческих компаний для коммерческих систем APS - можно общаться с пользователями или бывшими пользователями этих систем на темы общих неполадок, качестве обучающих программ и уровня поддержки.

#### 10) Predictability, transparency and safety
**AAPS** is transparent, logical and predictable, which may make it easier to know when a setting is wrong, and to adjust it accordingly. Вы всегда точно видите, что делает система, почему она это делает, задаете свои ограничения, которые оставляют контроль (и ответственность) в ваших руках. А это, в свою очередь, обеспечивает уверенность и здоровый сон пользователя.

#### 11) Access to advanced features through development (dev) modes including full closed loop
Эта документация **AAPS** фокусируется на основной ветке **“master”** **AAPS**. Однако научные исследования и разработки продолжаются все время. Более опытные пользователи могут захотеть изучить экспериментальные функции ветки **разработчиков**. Инновации в области развития сосредоточены на стратегиях полного замкнутого цикла (без подколок на еду _и т. д._), и, как правило, стремятся сделать качество жизни с диабетом 1 типа как можно выше.

#### 12) Ability to contribute yourself to further improvements
Диабет 1 типа может создавать чувство незащищенности и одиночества. Контролируя собственные технологии преодоления диабета, имея возможность внести свой вклад в эти усилия, вы почувствуете удовлетворение от пользы, которую приносите другим. Вы можете получать новые знания, преодолевать трудности и вносить вклад в новые разработки и документацию. Идущие по этому пути будут обмениваться с вами идеями и совместно преодолевать трудности. Смысл движения #WeAreNotWaiting именно в этом.

## Как выглядит AAPS в сопоставлении с традиционными инъекциями и открытым циклом?

Контроль диабета при помощи множественных инъекций (MDI), a) **на рисунке 2** ниже обычно состоит из сочетания уколов инсулина длительного действия (_напр._ Тресиба) один раз в сутки, с инъекциями более быстрого инсулина (_например_, Новорапид, Фиасп) при питании или для коррекции. Контроль диабета при помощи помпы в открытом цикле (b) состоит из применения помпы для создания базового уровня инсулина при запрограмированной скорости подачи быстродействующего инсулина, а также введения инсулина помпой в виде болюсов на еду или на коррекцию. Основа циклической системы состоит в том, что приложение использует данные о гликемии, чтобы дать помпе команду прекратить подачу инсулина, когда расчеты предполагают приближение к низкому уровню, и дать дополнительный инсулин, если уровень глюкозы повышается и прогнозируется как слишком высокий (с). Хотя эта схема чрезмерно упрощена по сравнению с реальной жизнью, она направлен на то, чтобы продемонстрировать основные различия в подходах. С помощью любого из этих трех подходов можно добиться исключительно хорошего контроля над гликемией.

![21-06-23 AAPS glucose MDI etc](../images/basic-overview-mdi-open-and-closed-loop.png)


**Рисунок 2**. Сравнение компенсации за счет (а) одноразовых инъекций, (b) систем открытого цикла, (с) гибридных систем замкнутого цикла.

## Сравнение AAPS с другими системами ИПЖ

As of June 25 2023, there are four major open source closed loop systems available: [OpenAPS](https://openaps.readthedocs.io/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) and [Trio](https://triodocs.org), (formerly FreeAPS X). Характеристики различных систем приведены в таблице:


| Device type | Имя                                                                    | [AAPS / ИПЖ](https://wiki.aaps.app)       | [Замкнутый цикл](https://loopkit.github.io/loopdocs/) | [ИПЖ с открытым кодом](https://openaps.readthedocs.io/en/latest/) | [Trio](https://triodocs.org)              |
| ----------- | ---------------------------------------------------------------------- | ----------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------- |
| Телефон     | Android                                                                | ![доступный](../images/available.png)     | ![недоступный](../images/unavailable.png)             | ![недоступный](../images/unavailable.png)                         | ![недоступный](../images/unavailable.png) |
| Телефон     | iPhone                                                                 | ![недоступный](../images/unavailable.png) | ![доступный](../images/available.png)                 | ![недоступный](../images/unavailable.png)                         | ![доступный](../images/available.png)     |
| Платформа   | микрокомпьютер (1)                                                     | ![недоступный](../images/unavailable.png) | ![недоступный](../images/unavailable.png)             | ![доступный](../images/available.png)                             | ![недоступный](../images/unavailable.png) |
| ПОМПА       | [Dana I](../CompatiblePumps/DanaRS-Insulin-Pump.md)                    | ![доступный](../images/available.png)     | ![доступный](../images/available.png)                 | ![недоступный](../images/unavailable.png)                         | ![доступный](../images/available.png)     |
| ПОМПА       | [Dana RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)                   | ![доступный](../images/available.png)     | ![доступный](../images/available.png)                 | ![недоступный](../images/unavailable.png)                         | ![доступный](../images/available.png)     |
| ПОМПА       | [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)                     | ![доступный](../images/available.png)     | ![недоступный](../images/unavailable.png)             | ![недоступный](../images/unavailable.png)                         | ![недоступный](../images/unavailable.png) |
| ПОМПА       | [Omnipod (Dash)](../CompatiblePumps/OmnipodDASH.md)                    | ![доступный](../images/available.png)     | ![доступный](../images/available.png)                 | ![недоступный](../images/unavailable.png)                         | ![доступный](../images/available.png)     |
| ПОМПА       | [Omnompod (Eros)](../CompatiblePumps/OmnipodEros.md)                   | ![доступный](../images/available.png)     | ![доступный](../images/available.png)                 | ![недоступный](../images/unavailable.png)                         | ![доступный](../images/available.png)     |
| ПОМПА       | [Diaconn G8](../CompatiblePumps/DiaconnG8.md)                          | ![доступный](../images/available.png)     | ![недоступный](../images/unavailable.png)             | ![недоступный](../images/unavailable.png)                         | ![недоступный](../images/unavailable.png) |
| ПОМПА       | [EOPatch 2](../CompatiblePumps/EOPatch2.md)                            | ![доступный](../images/available.png)     | ![недоступный](../images/unavailable.png)             | ![недоступный](../images/unavailable.png)                         | ![недоступный](../images/unavailable.png) |
| ПОМПА       | [Medtrum TouchCare Nano 200U](../CompatiblePumps/MedtrumNano.md)       | ![доступный](../images/available.png)     | ![доступный](../images/available.png)                 | ![недоступный](../images/unavailable.png)                         | ![доступный](../images/available.png)     |
| ПОМПА       | [Medtrum TouchCare 300U](../CompatiblePumps/MedtrumNano.md)            | ![доступный](../images/available.png)     | ![доступный](../images/available.png)                 | ![недоступный](../images/unavailable.png)                         | ![доступный](../images/available.png)     |
| ПОМПА       | [Roche Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)           | ![доступный](../images/available.png)     | ![недоступный](../images/unavailable.png)             | ![недоступный](../images/unavailable.png)                         | ![недоступный](../images/unavailable.png) |
| ПОМПА       | [Roche Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)          | ![доступный](../images/available.png)     | ![недоступный](../images/unavailable.png)             | ![недоступный](../images/unavailable.png)                         | ![недоступный](../images/unavailable.png) |
| ПОМПА       | [Старые Medtronic](../CompatiblePumps/MedtronicPump.md)                | ![доступный](../images/available.png)     | ![доступный](../images/available.png)                 | ![доступный](../images/available.png)                             | ![доступный](../images/available.png)     |
| ПОМПА       | [Equil 5.3](../CompatiblePumps/Equil5.3.md)                            | ![доступный](../images/available.png)     | ![недоступный](../images/unavailable.png)             | ![недоступный](../images/unavailable.png)                         | ![недоступный](../images/unavailable.png) |
| ПОМПА       | [CareLevo](../CompatiblePumps/CareLevo.md)                             | ![доступный](../images/available.png)     | ![недоступный](../images/unavailable.png)             | ![недоступный](../images/unavailable.png)                         | ![недоступный](../images/unavailable.png) |
| CGM /  НМГ  | [Dexcom G7/One+/Stelo](../CompatibleCgms/DexcomG7.md)                  | ![доступный](../images/available.png)     | ![доступный](../images/available.png)                 | ![недоступный](../images/unavailable.png)                         | ![доступный](../images/available.png)     |
| CGM /  НМГ  | [Dexcom One](../CompatibleCgms/DexcomG6.md)                            | ![доступный](../images/available.png)     | ![доступный](../images/available.png)                 | ![недоступный](../images/unavailable.png)                         | ![доступный](../images/available.png)     |
| CGM /  НМГ  | [Dexcom G6](../CompatibleCgms/DexcomG6.md)                             | ![доступный](../images/available.png)     | ![доступный](../images/available.png)                 | ![доступный](../images/available.png)                             | ![доступный](../images/available.png)     |
| CGM /  НМГ  | [Libre 3/3+](../CompatibleCgms/Libre3.md)                              | ![доступный](../images/available.png)     | ![доступный](../images/available.png)                 | ![недоступный](../images/unavailable.png)                         | ![доступный](../images/available.png)     |
| CGM /  НМГ  | [Libre 2/2+](../CompatibleCgms/Libre2.md)                              | ![доступный](../images/available.png)     | ![доступный](../images/available.png)                 | ![недоступный](../images/unavailable.png)                         | ![доступный](../images/available.png)     |
| CGM /  НМГ  | [Libre 1](../CompatibleCgms/Libre1.md)                                 | ![доступный](../images/available.png)     | ![доступный](../images/available.png)                 | ![недоступный](../images/unavailable.png)                         | ![доступный](../images/available.png)     |
| CGM /  НМГ  | [Eversense](../CompatibleCgms/Eversense.md)                            | ![доступный](../images/available.png)     | ![доступный](../images/available.png)                 | ![недоступный](../images/unavailable.png)                         | ![доступный](../images/available.png)     |
| CGM /  НМГ  | [MM640g/MM630g](../CompatibleCgms/MM640g.md)                           | ![доступный](../images/available.png)     | ![недоступный](../images/unavailable.png)             | ![недоступный](../images/unavailable.png)                         | ![недоступный](../images/unavailable.png) |
| CGM /  НМГ  | [Poctech](../CompatibleCgms/PocTech.md)                                | ![доступный](../images/available.png)     | ![недоступный](../images/unavailable.png)             | ![недоступный](../images/unavailable.png)                         | ![недоступный](../images/unavailable.png) |
| CGM /  НМГ  | [Ottai](../CompatibleCgms/OttaiM8.md)                                  | ![доступный](../images/available.png)     | ![недоступный](../images/unavailable.png)             | ![недоступный](../images/unavailable.png)                         | ![недоступный](../images/unavailable.png) |
| CGM /  НМГ  | [Syai Tag](../CompatibleCgms/SyaiTagX1.md)                             | ![доступный](../images/available.png)     | ![недоступный](../images/unavailable.png)             | ![недоступный](../images/unavailable.png)                         | ![недоступный](../images/unavailable.png) |
| CGM /  НМГ  | [Nightscout как источник ГК](../CompatibleCgms/CgmNightscoutUpload.md) | ![доступный](../images/available.png)     | ![доступный](../images/available.png)                 | ![доступный](../images/available.png)                             | ![доступный](../images/available.png)     |

_Примечания к таблице:_
1. **платформа** - это небольшой компьютер, который вы носите с собой, без монитора. Один из поддерживаемых типов устройств - Intel Edison + Explorer Board а также Raspberry Pi + Explorer HAT или Adafruit RFM69HCW Bonnet. The first APS systems were based on this setup, as mobile phones were not capable of running the required algorithms. Использование этих систем снизилось, поскольку настройка на мобильных телефонах стала проще, к тому же на телефонах есть дисплей. Intel также перестал продавать Intel Edison. The excellent OpenAPS algorithms **oref0** and **oref1** are now incorporated in AAPS and Trio.


Заявление экспертов, содержащее практические рекомендации по системам с открытыми исходными кодами, было подготовлено медицинскими работниками и специалистами по вопросам здравоохранения, и опубликован в ведущем журнале медицины в 2022: [_Lancet Diabetes Endocrinol_, 2022; 10: 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_). It is well worth a read (including for your diabetes clinic) and summarizes the main technical differences between the different open-source hybrid closed loop systems.

Трудно "почувствовать" любую систему, не используя ее, или не поговорив с другими пользователями, поэтому обращайтесь с ними на Facebook/Discord и задавайте интересующие вас вопросы. Most people find that **AAPS** is incredibly sophisticated in comparison to other hybrid closed loop systems (particularly the commercial systems), with a huge number of potentially customizable settings and features, discussed above. Some people can find this a little overwhelming at the beginning, but there is no rush to investigate all the possibilities at once. You can progress as slowly or as fast as you would like, and there is help available at every step of the way.


## Использует ли AAPS искусственный интеллект или какой-либо обучающий алгоритм?

The current version of **AAPS** (4.0) does not have any machine learning algorithms, multiple-parameter insulin response models, or artificial intelligence. Сама по себе система открыта и прозрачна в своей работе, и может быть понятной не только специалистам, но и медработникам широкого профиля и пациентам. It also means that if you have a sharply varying schedule (maybe switching from a stressful week at work to a relaxing holiday) and are likely to need a significantly different amount of insulin, you can immediately switch **AAPS** to run a weaker/stronger customized profile. Система сделает эту настройку для Вас автоматически, но скорее всего потребуется какое-то время на подстройку подачи инсулина.

(which-system-is-right-for-me-or-my-dependent)=
## Which system is right for me or someone I am caring for?

На практике выбор системы часто ограничивается тем, какая у вас имеется помпа, или какую помпу вам может предоставить ваша медицинская организация, а также тем, каким телефоном вы пользуетесь (Apple или Android). Если у вас еще нет помпы, у вас самый большой выбор систем. Технология постоянно развивается, помпы снимаются с производства, выпускаются новые помпы и сенсоры. Большинство систем с открытым исходным кодом работают с наиболее распространенными сенсорами (Libre и Dexcom) или быстро адаптируются к работе с новыми сенсорами в течение года или после их выпуска (с небольшой задержкой времени для проверки безопасности и стабильности).

Большинство пользователей **AAPS** сообщают об увеличении времени в целевом диапазоне, уменьшении HbA1c, а также улучшении качества жизни благодаря наличию системы, которая может автоматически регулировать базал во время сна, и это верно для всех гибридных систем ИПЖ замкнутого цикла. Some people have a preference for a very simple system which is not very customizable (which means you may prefer a commercial system), and others find this lack of control very frustrating (you may prefer an open-source system). If you (or someone you are caring for) are newly diagnosed, a common route is to get used to using MDI plus a glucose sensor first, then progress to a pump which has the potential for looping, then progress to **AAPS**, but some people (especially small kids) may go straight to a pump.

Важно отметить, что для устранения неполадок пользователь **AAPS** должен сам проявлять инициативу в устранении проблем, а также обращаться за помощью к сообществу пользователей и разработчиков. Такой подход радикально отличается от пользования коммерческими системами. С **AAPS** пользователь имеет больше контроля, но и больше ответственности и должен быть готов к этому.

## Безопасно ли пользование системами с открытым исходным кодом, такими как AAPS?

### Безопасность системы AAPS
Более точно вопрос, вероятно, должен выглядеть так «безопасно ли это по сравнению с моей нынешней системой введения инсулина? Поскольку любой метод подачи инсулина сопряжен с риском. Система **AAPS** имеет множество сдержек и противовесов для достижения максимальной безопасности. A recent [paper](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375) looked at the use of **AAPS** in a computer-simulated setup, which was an effective way to objectively trial how safe and effective the system is. More generally, many thousands of individuals worldwide are using open-source automated-insulin delivery systems, and uptake continues to increase globally.

Любое устройство, использующее радиосвязь, может быть взломано, и это относится и к обычным инсулиновым помпам. В настоящее время нам неизвестны случаи взлома медицинского оборудования, связанного с диабетом, с целью причинения вреда. Однако существует множество способов защититься от таких рисков:

1.  В настройках помпы ограничивайте как максимально допустимые, так и временные скорости базала до тех количеств, которые, по вашему мнению, являются безопасными. Это — жесткие ограничения, которые, по нашему мнению, не сможет обойти какой-нибудь хакер-злоумышленник.

2.  Установите сигналы оповещения вашего мониторинга для высоких и низких уровней ГК.

3.  Отслеживайте подачу инсулина через интернет. Пользователи Nightscout могут установить дополнительные сигналы тревоги для различных ситуаций, включая условия, которые имеют гораздо больше вероятности, чем атаки злоумышленника. Помимо высоких и низких сахаров, Nightscout отображает диагностические данные, полезные для проверки работы помпы, включая активный инсулин IOB, историю болюсов и временной базальной скорости помпы. Он также может быть настроен на оповещение о нежелательных условиях, таких как прогнозируемые высокие и низкие уровни гликемии, запасах инсулина в резервуаре и низкий заряд батареи в помпе.

Если на вашу инсулиновую помпу будет произведена атака злоумышленника, выше приведенные стратегии значительно снизят риски. Каждый потенциальный пользователь **AAPS** должен взвесить риски, связанные с использованием **AAPS**, по сравнению с рисками использования другой системы.

#### Соображения о безопасности слишком быстрого улучшения контроля гликемии крови

Быстрое снижение HbA1c и улучшение контроля глюкозы в крови кажется привлекательным. Однако _слишком быстрое_ снижение среднего уровня глюкозы в крови путем запуска любой системы с замкнутым контуром может привести к необратимым нарушениям, включая повреждение глаз, и болезненную непроходящую нейропатию. Этого можно избежать просто путем более медленного снижения уровней ГК. If you currently have an elevated HbA1c and are moving to AAPS (or any other closed loop system), please discuss this potential risk with your clinical team before starting, and agree a time plan with them. More general information on how to reduce your glucose levels safely, including links to medical literature is given in the safety section [here](#preparing-safety-first).

#### Безопасность устройств, расходных материалов и других медицинских средств

Для системы ИПЖ Используйте испытанные, полностью рабочие, официально одобренные инсулиновую помпу и монитринг ГК. Внесение аппаратных или программных технических изменений в это оборудование может стать причиной неконтролируемого введения инсулина, что может повлечь опасные последствия для пациента. Не пользуйтесь переделанными, самодельными или сломанными инсулиновыми помпами и/или устройствами мониторинга для создания системы AAPS.

Пользуйтесь оригинальными поставками манипуляторов, катетеров и резервуаров, допущенных производителем помпы и системы мониторинга. Использование непроверенных или модифицированных материалов может вызвать неточность мониторинга и ошибки дозировки инсулина. Инсулин опасен при неверной дозировке - не рискуйте жизнью, пользуясь неумело переделанными компонентами.

Не принимайте ингибиторы SGLT-2 (глифлозины) при использовании **AAPS**, поскольку они непредсказуемо снижают уровни сахара в крови. Сочетание этого эффекта с системой, которая снижает базальные дозы с целью повышения ГК, опасно, более подробно об этом можно прочитать в основном разделе [безопасность](#preparing-safety-first).

(введение-how-can-i-approach-discussing-aaps-s-s-my-clinical-team)=
## Как мне подойти к обсуждению AAPS с врачами?

Пользователям рекомендуется говорить со своими эндокринологами о намерении использовать **AAPS**. Please do not be afraid to have an honest conversation with your diabetes team if you intend to use **AAPS** (or any other OS-AID loop, for that matter). Прозрачность и доверие между пациентом и врачом имеют первостепенное значение.

### Предлагаемый подход:
Начните разговор с врачом, чтобы определить его знакомство и отношение к таким технологии диабета как мониторинг, помповая терапия, гибридные и коммерческие системы замкнутого цикла. Ваш врач/эндокринолог должен знать о базовых технологиях и быть готовым обсудить с Вами достижения в области коммерческих систем замкнутого цикла в регионе.

#### Местные прецеденты

Obtain your clinicians/endocrinologists’ views on OS-AID loop _vs_ commercial looping, and gauge their knowledge in this area. Are they familiar with **AAPS** and can they share with you any helpful experience of working with patients with OS-AID looping?

Ask if your team has any patients under their care who already use OS-AID looping. В связи с конфиденциальностью врачи не могут передать данные другим пациентам без их на то согласия. However, if you want to, you **can** ask them to pass **your** contact details to an existing OS-AID looping patient if there is one the clinician feels you might "click” with, suggesting that you would be happy for the patient to contact you to discuss OS-AID looping. Медицинские работники не обязаны, но некоторые будут рады, так как осознают важность поддержки равноправия пациентов в управлении диабетом 1 типа. You may also find it useful to meet local friendly OS-AID loopers. Это, конечно, целиком на ваше усмотрение.

#### Национальные и международные прецеденты

Если вы чувствуете, что ваш эндокринолог не поддерживает применение **AAPS**, может помочь следующая аргументация:

a) Система **AAPS** разработана ПАЦИЕНТАМИ и их опекунами. Она разработана в конечном счете для обеспечения безопасности, но также и опираясь на глубокое изучение опыта пациента. There are many thousands of **AAPS** users worldwide. There is therefore likely to be other patients using OS-AID looping in your clinic's patient population (whether they know about it or not).

b) Recent peer-reviewed published guidance in the internationally leading medical journal [The Lancet](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/pdf/nihms-1765784.pdf)(_1_) has confirmed that OS-AID loops are **safe** and **effective at improving diabetic control**, including time in range. There are regular articles in leading journals like [Nature](https://doi.org/10.1038/d41586-023-02648-9)(_3_) which highlight the progress of the OS-AID looping community.

c) Начало работы с **AAPS** предполагает _постепенный_ переход с “открытых” систем с приостановкой подачи инсулина на низких сахарах к гибридному циклу путем выполнения ряда целей. Таким образом, существует структурированная программа, требующая от пользователей демонстрации уровня компетентности на каждом этапе и доработки основных настроек (база, чувствительность ISF и углеводный коэффициент ICR), прежде чем они смогут замкнуть цикл.

d) Technical support is available to you from the OS-AID community through GitHub, Discord and Facebook closed groups.

e) Вы сможете предоставлять **информацию о мониторинге CGM и петле/помпе** в виде объединенных отчетов на совещаниях в клинике (через Nightscout или Tidepool), либо в распечатанном виде, либо на экране (если принесете с собой ноутбук/ планшет). Рационализация данных мониторинга CGM и инсулиновой помпы позволит более эффективно использовать время врача для проверки ваших отчетов и оценки хода терапии.

f) Если у эндокринологов есть возражения, раздайте им распечатки справочных статей, ссылки на которые приведены здесь в тексте, и дайте им ссылку на раздел **AAPS** для врачей: [Для врачей – общее введение и руководство по **AAPS.**](../UsefulLinks/ClinicianGuideToAaps.md)

#### Support for OS-AID looping by other clinicians

The paper published in the [Lancet Diabetes Endocrinology](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_) (co-led by King’s and Guy’s and St Thomas’ NHS Foundation Trust, and co-led by Dr Sufyan Hussain, a consultant diabetologist and honorary senior lecturer from King’s in London) provides:

a) **Assurance** for professionals that OS-AID artificial pancreas systems/ open source as a “safe and effective treatment” option for type 1 diabetes and provides guidance on recommendations, discussions, supports, documentation;

b) **Признание** того, что системы автоматической подачи инсулина с открытым исходным кодом («AID») могут увеличить время в диапазоне (TIR), одновременно уменьшая вариабельность концентраций глюкозы в крови и количества эпизодов гипо- и гипергликемии в различных возрастных, гендерных группах и сообществах;

c) **Рекомендацию** работникам здравоохранения **поддерживать** пациентов с диабетом 1 типа или лиц, осуществляющих уход за ними, которые решили управлять своим диабетом с помощью систем AID (см. выше) с открытым исходным кодом;

d) Рекомендацию о том, чтобы медицинские работники старались узнать обо всех возможностях лечения, которые могут принести пользу пациентам, включая доступные системы AID с открытым исходным кодом.  Если у медицинских работников нет ресурсов для самостоятельного обучения или у них есть обеспокоенность, связанная с юридическими или нормативными вопросами, им следует рассмотреть возможность **сотрудничества или объединения с другими медицинскими работниками**, у которых такие возможности есть;

e) Заявление, что все пользователи систем мониторинга CGM должны в любое время иметь открытый доступ к ** данным о состоянии своего здоровья**

f) заявление, что системы с открытыми исходными кодами не прошли те же нормативные оценки, что и коммерчески доступные медицинские технологии, и не имеют коммерческой технической поддержки. Следует заметить при этом, что имеется **широкая поддержка от пользователей**; а также

g) рекомендацию обновить **нормативно-правовую базу** для обеспечения ясности в отношении таких систем с открытым исходным кодом.

В другой статье, опубликованной в [Medical Law International, 2021](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)(_4_), подчеркивается, что Генеральный медицинский совет Великобритании в документе "руководство по согласованию" уделяет большое внимание совместному принятию решений врачом и пациентом. The doctor should explain the potential benefits, risks, burdens and side-effects on OS-AID APS and may recommend a particular option without pressuring the patient.

В конечном итоге именно пациент должен взвешивать эти факторы, наряду с любыми сопутствующими неклиническими проблемами и решить, какой вариант лечения выбрать.

If a doctor discovers in a clinic that their patient is looping with an OS-AID system, they are not exempted from their obligations to monitor the patient, simply because they did not prescribe the particular piece of technology the patient is using; clinicians must continue to monitor patients.

Врачи (по крайней мере в Великобритании) не запрещают давать нелицензированные лекарства и могут использовать их на свое усмотрение. They should therefore use their clinical judgement to decide if an OS-AID APS is suitable for a specific patient, and discuss what they consider to be the pros and cons with the patient.

#### Ниже приводятся упомянутые выше статьи и другие полезные ссылки и заявления:

1. Автоматизированная подача инсулина с открытым исходным кодом: заявление о международном консенсусе и практическое руководство для медицинских работников [_Lancet Diabetes Endocrinol_, (2022) _10_, 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)
2. [In Silico Trials Искусственная поджелудочная железа с открытым исходным кодом на базе Android: новая парадигма для проверки безопасности и эффективности самодельных систем, 2020 г](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375)
3. «Бионическая поджелудочная железа», сделанная своими руками, меняет подход к лечению диабета — что дальше? [_Nature_ (2023), _620_, 940-941](https://doi.org/10.1038/d41586-023-02648-9)
4. Назначают несертифицированные медицинские устройства? Рассмотрение дела о системе искусственной поджелудочной железы [_Medical law internationa_, (2021), _21_, 42-68](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)
5. [Берлинский институт здравоохранения -заявление о позиции, 2022год](https://www.bihealth.org/en/notices/do-it-yourself-solutions-for-people-with-diabetes-are-safe-and-recommended)
6. Автоматизированная подача инсулина своими руками: Руководство для практикующего врача (положение и руководство Diabetes Canada) [_Canadian Journal of Diabetes_, (2023)_47_, E8, 389-397](https://www.canadianjournalofdiabetes.com/article/S1499-2671(23)00138-7/fulltext)
7.  Нидерланды (EN/NL) - для медработников [как помочь людям с автоматизированной системой подачи инсулина](https://www.diabetotech.com/blog/how-to-help-people-on-open-source-automated-insulin-delivery-systems)
8. Первое использование автоматизированной подачи инсулина с открытым исходным кодом AndroidAPS в сценарии полного замкнутого цикла: рандомизированное пилотное исследование Pancreas4ALL [_Diabetes Technol. Ther._, 25, _5_, 2023](https://www.liebertpub.com/doi/pdf/10.1089/dia.2022.0562?casa_token=D13eFx5vCwwAAAAA:MYvO8hChbViXVJFgov1T11RXBPx2N_wOMThLHwl3TVUxbCuANegPrIFRC5R5VXx_S71FoQYW-qg)
9. Дети дошкольного и школьного возраста получают пользу от перехода от помпы с сенсорным управлением к гибридной замкнутой системе AndroidAPS: ретроспективный анализ [_Pediatr. Diabetes_ 2021, _22_, 594-604. 2021](https://onlinelibrary.wiley.com/doi/epdf/10.1111/pedi.13190)
10. Результаты ОТКРЫТОГО проекта, финансируемого ЕС по исследованиям пациентов с использованием новой технологии искусственной поджелудочной железы «Сделай сам» (https://www.open-diabetes.eu/publications)



## В: Почему нельзя просто скачать AAPS и не начать им сразу же пользоваться?

Приложение нельзя найти в Google Play - его следует самостоятельно собрать из исходного кода по юридическим причинам. **AAPS** не имеет лицензии, то есть не имеет одобрения ни от одного регулирующего органа ни в одной стране. **AAPS** рассматривается как проведение медицинского эксперимента на себе, на свой страх и риск.

Создание системы требует терпения, нацеленности на результат и постепенного развития технических знаний. Вся информация и поддержка находится в этой документации или в группах поддержки в интернете. Many thousands of people have successfully built and are currently using **AAPS** worldwide.

Разработчики **AAPS** серьезно относятся к безопасности и хотят, чтобы новые пользователи имели положительное впечатление от **AAPS**. Поэтому важно, чтобы каждый пользователь (или опекун, если пользователь является ребенком):

- самостоятельно построил систему AAPS и прошел все **цели** чтобы к началу работы «замкнутого цикла» иметь хорошие персонализированные настройки и понимание основы того, как работает **AAPS**;

- backs up their system by exporting and saving important files (like keystore and settings .json file) somewhere safe, so you can set up again quickly if needed;

- устанавливал обновления версий master по мере их доступности; и

- обслуживал систему и следил за ней, чтобы она работала правильно.

## В: Какова структура системы AAPS?

**Figure 3 (below)** shows one example of the **AAPS** system for a user who does not require any followers interacting with the system. Также могут быть интегрированы дополнительное программное обеспечение с открытым исходным кодом и не показанные здесь платформы.

![21-06-23 AAPS подключения без фоллоуэров](../images/AAPS-connectivity-no-followers.png)


**Figure 4 (below)** shows the full potential of the **AAPS** system for a user who has followers and needs to monitor and adjust the system remotely (like a child with type 1 diabetes). Также могут быть интегрированы дополнительное программное обеспечение с открытым исходным кодом и не показанные здесь платформы.

![21-06-23 AAPS обзор с фоллоуэрами](../images/AAPS-overview-with-followers.png)

## В: Каким образом развивается и совершенствуется AAPS?

Большинство пользователей **AAPS** работает с полностью протестированной и обкатанной **master** версиюей AAPS. Параллельно с этим разработчики исследуют и тестируют новые улучшения в ветке "разработчиков" (**dev**) **AAPS**, наряду с теми пользователями, которые готовы проверять нововведения и сообщать о замеченных недостатках. Если улучшения работают нормально, они будут выпущены в качестве новой "master" версии **AAPS**. Каждая новая мастер-версия анонсируется в группе Facebook и основные пользователи **AAPS **получают об этом своевременную информацию.

Некоторые опытные и уверенные пользователи **AAPS** проводят эксперименты с новейшими технологиями и версиями приложения **AAPS**, о чем сообщают менее предприимчивым пользователям, которым не приходится проверять все самостоятельно! Сообщения об этих экспериментах можно найти в группе Facebook.

Подробнее о некоторых из этих экспериментов и обсуждение новых технологий можно прочитать здесь:

Tim Street [https://www.diabettech.com/](https://www.diabettech.com/)

David Burren [https://bionicwookie.com/](https://bionicwookie.com/)

## Кто может получить пользу от применения AAPS?

| Тип пользователя                                        |
| ------------------------------------------------------- |
| ✔️ люди с диабетом первого типа                         |
| ✔️ опекуны и/или родители детей с диабетом первого типа |
| ✔️ слепые пользователи с диабетом первого типа          |
| ✔️ *clinicians and healthcare professionals             |

The above table assumes that the user has access to both a continuous glucose monitor and an insulin pump.

*Все данные **AAPS** могут быть предоставлены медицинским специалистам через платформы обмена данными, включая NightScout, который обеспечивает журналирование и мониторинг CGM в реальном времени, включая введение инсулина, потребление углеводов, прогнозы и настройки. Nightscout records include daily and weekly reports which can aid healthcare professionals' discussions with type 1 patients with more accurate data on glycemic control and any behavioral considerations.

(accessibility-for-users-aaps-who-are-partially-or-completely-blind)=

### Accessibility for AAPS users who are partially or completely blind

#### Повседневное использование AAPS:
AndroidAPS может использоваться незрячими. На устройствах Android в операционной системе есть программа TalkBack. Она позволяет ориентироваться в экране через голосовой вывод в составе операционной системы. Используя TalkBack, вы можете управлять как смартфоном, так и AAPS без необходимости видеть его.

#### Создание приложения AAPS:
Как пользователь вы выполните сборку приложения AAPS в Android Studio. Many people use Microsoft Windows for this purpose, where there is the screen reader analogous to TalkBack. Так как Android Studio является приложением Java, в Панели Управления должен быть включен компонент "Java Access Bridge". В противном случае, считыватель экрана на ПК не сможет говорить в Android Studio.

Как вы это делаете, зависит от вашей операционной системы, ниже описаны два метода:

1) В меню Windows Start введите «Панель управления» в поле поиска, откройте, нажав на Enter. Откроются: «Все элементы панели управления».

Откройте "Специальные возможности".

Затем откройте "Использовать компьютер без дисплея", нажмите Enter.

Under **Hear text read aloud**, select **turn on narrator** and **turn on audio display**, then click **apply**.

или:

2) В меню Windows Start введите «Панель управления» в поле поиска, откройте, нажав на Enter. Откроются: «Все элементы панели управления».

Нажмите на букву C, чтобы добраться до «Специальных возможностей», которые откроете нажав Enter.

Затем откройте "Использовать компьютер без дисплея", нажмите Enter.

В нижней части вы увидите флажок “Включить Java Access Bridge”, выберите его.

Готово, теперь закрывайте окно! Считыватель с экрана теперь должен работать.



Хотите узнать, как начать работу с AAPS? Ознакомьтесь с разделом [подготовка](../Getting-Started/PreparingForAaps.md).
