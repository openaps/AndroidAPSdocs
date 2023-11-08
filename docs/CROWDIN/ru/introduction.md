# Введение в APS и AAPS

## Что такое система искусственной поджелудочной железы”?

Человеческая поджелудочная железа делает много, помимо регулирования содержания сахара в крови. Однако, термин **«Система Искусственной Поджелудочной Железы» (APS)** обычно относится к системе, которая работает для автоматического поддержания уровня сахара в крови в здоровых пределах.

Основным способом поддерживать этот уровень является определение **уровней гликемии**, выполнение **расчетов** и подачи (прогнозируемого) корректного количества **инсулина** в организм. Система производит эти расчеты каждые несколько минут, 24/7. Она подает **звуковые сигналы** и **оповещения** для информирования пользователя о необходимости вмешательства или для привлечения его внимания. Эта система обычно состоит из **сенсора гликемии**, **инсулиновой помпы** и **приложения** на телефоне.

Больше о существующих в настоящее время системах искусственной поджелудочной железы и о разработках см. в этой статье 2022 года:

![Frontiers](./images/FRONTIERS_Logo_Grey_RGB.png) [Перспективы развития систем замкнутого цикла](https://www.frontiersin.org/articles/10.3389/fendo.2022.919942/full#:~:text=Fully%20closed%2Dloop%20systems%2C%20unlike,user%20input%20for%20mealtime%20boluses).

В недалеком будущем некоторые системы так называемого "двойного гормона" научатся вводить глюкагон наряду с инсулином, с целью предотвращения тяжелых гипогликемий и обеспечения более жесткого контроля глюкозы в крови.

An artificial pancreas can be thought of as an [“autopilot for your diabetes”](https://www.artificialpancreasbook.com/). What does that mean?

В самолете автопилот не выполняет всю работу за человека, пилот не может спать на протяжении всего полета. Автопилот помогает работе пилота. Он освобождает его от бремени постоянного наблюдения за самолетом, позволяя пилоту время от времени концентрироваться на более широком контроле. Автопилот получает сигналы от различных датчиков, компьютер оценивает их наряду со спецификациями пилота, а затем вносит необходимые корректировки, оповещая пилота о любых сложностях. Пилоту не нужно постоянно принимать решения.

![image](./images/autopilot.png)

## Что значит гибридный замкнутый цикл?

Лучшим решением для диабета первого типа было бы «функциональное лекарство» (возможно, имплант поджелудочных клеток, защищенных от иммунной системы). Пока мы ждем этого, искусственная поджелудочная железа, вероятно, является наилучшей альтернативой. Это технологическая система, которая не нуждается в усилиях пользователя (например для подачи болюсов на еду или предупреждение о физических упражнениях), с хорошей регуляцией уровней глюкозы в крови. В настоящее время нет широко доступных систем, которые представляли бы из себя "полный" замкнутый цикл, все они нуждаются в участии пользователя. Имеющиеся в настоящее время системы называются "гибридными" замкнутыми петлями, так как в них применяется сочетание автоматизированных технологий и вводные данные от пользователя.

## Как и почему появились системы ИПЖ?

Развитие коммерческих технологий для людей с диабетом первого типа движется очень медленно. В 2013 году люди, объединенные желанием помочь больным Сд 1 типа, основали движение #WeAreNotWaiting (Мы не ждем). Они сами разработали системы ИПЖ на основе существующих одобренных технологий (инсулиновых помп и систем мониторинга ГК) для улучшения контроля гликемии, безопасности и качества жизни. Эти системы известны как DIY (самостоятельно созданные, т. к. они официально не утверждены органами здравоохранения (FDA, NHS, Минздравом и т. д.). There are four main DIY systems available: [OpenAPS](https://openaps.org/what-is-openaps/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) and [iAPS](https://github.com/Artificial-Pancreas/iAPS?fbclid=IwAR2fA9Y9YqYzpKSrtEsotfXl5b67UclDkKgyrv52tQLzYbOoBeNGRmjlJJI).

Отличный способ понять основы таких систем - ознакомиться с книгой Даны Льюис «Автоматизированная подача инсулина». (Перевод книги на русский выполнили Александр Чекалин, Юлия Войнич и Владимир Бакуш, его можно найти здесь: https://docs. google. com/document/d/16HW88iKvNjuyMz0rvnTxUiupGBgSv5nHX1RA8Pq-3B0/edit?usp=sharing). You can access it [here](https://www.artificialpancreasbook.com/) for free (or buy a hardcopy of the book). If you want to understand more about [OpenAPS](https://openaps.org/what-is-openaps/), which **AAPS** has developed from, the [OpenAPS website](https://openaps.org/what-is-openaps/) is a great resource.

Several commercial hybrid closed loop systems have been launched, the most recent of which are [CamAPS FX](https://camdiab.com/) (UK and EU) and [Omnipod 5](https://www.omnipod.com/en-gb/what-is-omnipod/omnipod-5) (USA and EU). Они очень отличается от самостоятельно созданных систем DIY, главным образом потому, что включают в себя "обучающийся алгоритм", который корректирует потребности в инсулине на основе предыдущих дней. Многие люди среди энтузиастов самостоятельно созданных систем уже пробовали эти коммерческие системы и сравнивали их со своими. You can find out more about how the different systems compare by asking on the dedicated Facebook groups for these systems, on the [AAPS Facebook group](https://www.facebook.com/groups/AndroidAPSUsers/) or on [Discord](https://discord.com/invite/4fQUWHZ4Mw).

## Что такое Android APS (AAPS)?

![image](./images/basic-outline-of-AAPS.png)

**Рисунок 1**. Принципиальная схема Android APS (Artificial Pancreas System), AAPS.

Android APS (**AAPS**) is a hybrid closed loop system, or Artificial Pancreas System  (APS). It makes its insulin dosing calculations using established [OpenAPS](https://openaps.org/) algorithms (a set of rules) developed by the #WeAreNotWaiting type 1 diabetes community.

Since OpenAPS is only compatible with certain older insulin pumps, **AAPS** (which can be used with a wider range of insulin pumps) was developed in 2016 by Milos Kozak, for a family member with type 1 diabetes. С тех пор **AAPS** постоянно развивается и усовершенствуется командой добровольцев компьютерных разработчиков и других энтузиастов, которые имеют связь с миром сахарного диабета первого типа. Сегодня **AAPS** использует примерно 10 000 человек. Это настраиваемая универсальная система с открытым исходным кодом, Она легко совместима со многими другими программными продуктами и платформами для сахарного диабета. The fundamental components of the current **AAPS** system are outlined in **Figure 1** above.



## Основные компоненты AAPS

"Мозгом" AAPS является **приложение**, которое вы должны собрать сами. Для этого существует подробная пошаговая инструкция. You then install the **AAPS  app** on a [compatible](https://docs.google.com/spreadsheets/d/1zO-Vf3wv0jji5Gflk6pe48oi348ApF5RvMcI6NG5TnY/edit?pli=1#gid=2097219952) **Android smartphone** (**1**). Многие пользователи предпочитают иметь отдельный телефон для AAPS в дополнение к основному телефону. Таким образом, отдельный телефон на Android может предназначаться только для AAPS.

The **Android smartphone** will also need to have another app installed on it as well as **AAPS**. This is either a modified Dexcom app called build-your-own dexcom app [**BYODA**](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0) or [**Xdrip+**](https://xdrip.readthedocs.io/en/latest/install/usethedoc/). This additional app receives glucose data from a sensor (**2**) by bluetooth, and then sends the data internally on the phone to the **AAPS app**.

Приложение **AAPS** использует процесс принятия решений (**алгоритм**), созданный на базе OpenAPS. Новички начинают использовать базовый алгоритм **oref0**, но при работе с AAPS можно переключиться на более новый алгоритм **oref1**. Выбор алгоритма (ореф1 или ореф), зависит от того, что вам лучше подходит.  В обоих случаях алгоритм учитывает множество факторов и выполняет быстрые вычисления каждый раз, когда поступает новые данные с сенсора. The algorithm then sends instructions to the insulin pump (**3**) on how much insulin to deliver by bluetooth. All the information can be sent by mobile data or wifi to the internet (**4**). По желанию эти данные могут также передаваться наблюдателям(фоллоуерам) и/или собираться для анализа.

## Преимущества системы AAPS

Алгоритм OpenAPS, используемый **AAPS** контролирует уровни сахара в крови при отсутствии вводимых пользователем данных, в соответствии с заданными параметрами (наиболее важные из них базальная скорость, коэффициент чувствительности к инсулину ISF, углеводный коэффициент IC, продолжительность действия инсулина и т. д.), реагируя каждые 5 минут на новые данные от сенсора. Ко многим отмеченным пользователями преимуществам AAPS относятся множество тонких настроек, автоматизация и прозрачность системы для пациентов/опекунов. This can result in better control over your (or your dependant’s) diabetes, which in turn may give improved quality of life and increased peace of mind.

### **Specific advantages include:**

#### 1) Safety built-in
To read about the safety features of the algorithms, known as oref0 and oref1, [click here](https://openaps.org/reference-design/). The user is in control of their own safety constraints.

#### 1) **Hardware flexibility**

**AAPS** works with a wide range of insulin pumps and sensors. Например, если у вас аллергия на пластырь сенсора Dexcom, можно перейти на Libre. Это дает свободу при изменениях в жизни. You don't have to rebuild or reinstall the **AAPS** app, just tick a different box in the app to change your hardware. AAPS is independent of particular pump drivers and also contains a "virtual pump" so users can safely experiment before using it on themselves.

#### 2) **Highly customisable, with wide parameters**

Users can easily add or remove modules or functionality, and **AAPS** can be used in both open and closed loop mode. Here are some examples of the possibilities with the **AAPS** system:

 a) The ability to set a lower glucose target 30 min before eating; you can set the target as low as 72 mg/dL (4.0 mmol/L).

 b) If you are insulin-resistant resulting in high blood sugars, **AAPS** allows you to set an **automation** rule  to activate when BG rises above 8 mmol/L (144 mg/dL), switching to (for example) a 120% profile (resulting in an 20% increase in basal and strengthening of other factors too, compared to your normal **profile** setting). Автоматизация продлится согласно запланированному вами времени. Такая автоматизация может срабатывать в определенные дни недели, в определенное время суток, и даже в определенных местах.

 c) если Ваш ребенок неожиданно оказался на батуте, **AAPS** позволит приостановить подачу инсулина на заданный период времени непосредственно по телефону.

 d) After reconnecting a tubed pump which has been disconnected for  swimming, **AAPS** will calculate the basal insulin you have missed while disconnected and deliver it carefully, according to your current BG. Любой лишний инсулин может быть переопределен простой "отменой" пропущенной базы.

 e) **AAPS** has the facility for you to set different profiles for different situations and easily switch between them. For example, features which make the algorithm quicker to bring down elevated BG (like supermicro boluses (“**SMB**”), unannounced meals, (“**UAM**”) can be set to only work during the daytime, if you are worried about night-time hypos.

These are all examples, the full range of features gives huge flexibility for daily life including sport, illness, hormone cycles _etc_. В конечном счете, пользователь сам должен решить, как использовать эти возможности, универсальной автоматизации для всех не существует.

#### 3) **Remote monitoring**
There are multiple possible monitoring channels (Sugarmate, Dexcom Follow, Xdrip+, Android Auto _etc._) which are useful for parents/carers and adults in certain scenarios (sleeping/driving) who need customisable alerts. В некоторых приложениях (Xdrip+) есть возможность полностью отключить звуковые оповещения, что отлично, если у вас есть новый датчик на «прогреве» или вы еще не готовы полностью запустить систему.

#### 4) **Remote control**
A significant advantage of **AAPS** over commercial systems is that it is possible for followers, using authenticated text (SMS) commands or via an app ([Nightscout](https://nightscout.github.io/) or AAPSClient) to send a wide range of commands back to the **AAPS** system. Это широко используют родители детей с диабетом 1 типа, применяющих AAPS. It is very useful: for example, in the playground, if you want to pre-bolus for a snack from your own phone, and your child is busy playing. It is possible to monitor the system (_e.g._ Fitbit), send basic commands (_e.g._ Samsung Galaxy watch 4), or even run the entire AAPS system from a high-spec smartwatch (**5**) (_e.g._ LEMFO LEM14). В этом последнем варианте для запуска AAPS вообще не требуется телефон. As battery life on watches improves and technology becomes more stable, this last option is likely to become increasingly attractive.

#### 5) **No commercial constraints, due to open application interfaces**
Beyond the use of an open-source approach, which allows the source code of **AAPS** to be viewed at any time, the general principle of providing open programming interfaces gives other developers the opportunity to contribute new ideas too. **AAPS** is closely integrated with Nightscout. This accelerates development and allows users to add on features to make life with diabetes even more convenient. Good examples for such integrations are [NightScout](https://nightscout.github.io/), [Nightscout Reporter](https://nightscout-reporter.zreptil.de/), [Xdrip+](https://xdrip.readthedocs.io/en/latest/install/usethedoc/), [M5 stack](https://github.com/mlukasek/M5_NightscoutMon/wiki?fbclid=IwAR1pupoCy-2GuXLS7tIO8HRkOC_536YqSxTK7eF0UrKkM1PuucFYRyPFvd0) etc. There is ongoing dialogue between open-source developers and those developing commercial systems. Many of the DIY innovations are gradually adopted by commercial systems, where developments are understandably slower, partly because interfaces between systems from different companies (pumps, apps, sensors _etc_) need to be carefully negotiated and licenced. This can also slow innovations which are convenient for the patient (or a small sub-population of patients, who have a very specific requirement) but do not generate any sizable profit.

#### 6) **Detailed app interface**
With **AAPS** it is easy to keep track of things like: pump insulin levels, cannula age, sensor age, pump battery age, insulin-on-board _etc_. Many actions can be done through the **AAPS** app (priming the pump, disconnecting the pump _etc_.), instead of on the pump itself, which means the pump can stay in your (or your dependant's) pocket or belt.

#### 7) **Accessibility and affordability**
**AAPS** gives people who currently can’t afford to self-fund, or don’t have funding/insurance, access to a world-class hybrid closed looping system which is conceptually years ahead, in terms of development, of the commercial systems. You currently need to have a Nightscout account to set up **AAPS**, although the Nightscout account is not required for day-to-day running of the **AAPS** loop. Many people continue to use Nightscout for collecting their data, and for remote control. Although **AAPS** itself is free, setting up Nightscout through one of the various platforms may incur a fee (€0 - €12), depending on what level of support you want (see comparison table) and whether you want to keep using Nightscout after setup or not. **AAPS** works with a wide range of affordable (starting from approx €150) Android phones. Different versions are available for specific locations and languages, and AAPS can also be used by people who are [blind](Safety-first-aaps-can-also-be-used-by-blind-people).

#### 8) **Support**
No automated insulin delivery system is perfect. Коммерческие системы и системы с открытым исходным кодом имеют много общих недоработок как в коммуникациях, так и в оборудовании. There is support available from community of AAPS users on Facebook, Discord and Github who designed, developed and are currently using **AAPS**, all over the world. There are also Facebook support groups and help from clinic/commercial companies for the commercial APS systems -  it is worth speaking to the users, or former users of these systems to get feedback on the common glitches, the quality of the education programme and the level of ongoing support provided.

#### 9) **Predictability, transparency and safety**
**AAPS** is totally transparent, logical and predictable, which may make it easier to know when a setting is wrong, and to adjust it accordingly. Вы всегда точно видите, что делает система, почему она это делает, задаете свои ограничения, которые оставляют контроль (и ответственность) в ваших руках. А это, в свою очередь, обеспечивает уверенность и здоровый сон пользователя.

#### 10) **Access to advanced features through development (dev) modes including full closed loop**
This **AAPS** documentation focuses on the mainstream **“master”** branch of **AAPS**. However, research and development is going on all the time. More experienced users may wish to explore the experimental features in the **development** branch. This includes integration of Dexcom G7, and automatically adjusting insulin delivery according to short-term sensitivity changes (DYNISF). The development innovations focus on strategies for full closed looping (not having to bolus for meals _etc._), and generally trying to make life with type 1 diabetes as convenient as possible.

#### 11) **Ability to contribute yourself to further improvements**
Type 1 diabetes can be highly frustrating and isolating. Контролируя собственные технологии преодоления диабета, имея возможность внести свой вклад в эти усилия, вы почувствуете удовлетворение от пользы, которую приносите другим. You can educate yourself, discover the roadblocks and look for, and even contribute, to new developments and the documentation. There will be others in the community with the same quest that you can bounce ideas off and work with. Смысл движения #WeAreNotWaiting именно в этом.

## Как выглядит AAPS в сопоставлении с традиционными инъекциями и открытым циклом?

Multiple daily injections (MDI, (a) in **Figure 2** below) usually involve giving an injection of a long-lasting insulin (_e.g._ Tresiba) once a day, with injections of faster-acting insulin (_e.g._ Novorapid, Fiasp) at mealtimes, or for corrections. Контроль диабета при помощи помпы в открытом цикле (b) состоит из применения помпы для создания базового уровня инсулина при запрограмированной скорости подачи быстродействующего инсулина, а также введения инсулина помпой в виде болюсов на еду или на коррекцию. The basics of a looping system are that the looping app uses the sensor glucose data to instruct the pump to stop insulin delivery when it predicts you are heading for a low, and to give you extra insulin if your glucose levels are rising and predicted to go too high (c). Although this figure is oversimplified compared to real-life, it aims to demonstrate the key differences of the approaches. It is possible to achieve exceptionally good glucose control with any of these three approaches.

![21-06-23 AAPS glucose MDI etc](./images/basic-overview-mdi-open-and-closed-loop.png)


**Рисунок 2**. Basic overview of (a) MDI, (b) open-loop pumping and (c) hybrid closed loop pumping.

## Сравнение AAPS с другими системами ИПЖ

As of June 25 2023, there are four major open source closed loop systems available: [OpenAPS](https://openaps.readthedocs.io/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) and [iAPS](https://github.com/Artificial-Pancreas/iAPS?fbclid=IwAR2fA9Y9YqYzpKSrtEsotfXl5b67UclDkKgyrv52tQLzYbOoBeNGRmjlJJI), (formerly FreeAPS X). Характеристики различных систем приведены в таблице:

Характеристики различных систем приведены в таблице:



| Devicestype | Имя                                                              | [AAPS / ИПЖ](https://wiki.aaps.app)      | [Замкнутый цикл](https://loopkit.github.io/loopdocs/) | [Open APS](https://openaps.readthedocs.io/en/latest/) | [iAPS](https://iaps.readthedocs.io/en/latest/) |
| ----------- | ---------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------- |
| Phone       | Android                                                          | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)       |
| Phone       | iPhone                                                           | ![unavailable](./images/unavailable.png) | ![available](./images/available.png)                  | ![unavailable](./images/unavailable.png)              | ![available](./images/available.png)           |
| Rig         | tiny computer (1)                                                | ![unavailable](./images/unavailable.png) | ![unavailable](./images/unavailable.png)              | ![available](./images/available.png)                  | ![unavailable](./images/unavailable.png)       |
| ПОМПА       | [Dana I](../Configuration/DanaRS-Insulin-Pump.md)                | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)       |
| ПОМПА       | [Dana RS](../Configuration/DanaRS-Insulin-Pump.md)               | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)       |
| ПОМПА       | [Dana R](../Configuration/DanaR-Insulin-Pump.md)                 | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)       |
| ПОМПА       | [Omnipod (Dash)](../Configuration/OmnipodDASH.md) (2)            | ![available](./images/available.png)     | ![available](./images/available.png)                  | ![unavailable](./images/unavailable.png)              | ![available](./images/available.png)           |
| ПОМПА       | [Omnipod (Eros)](../Configuration/OmnipodEros.md)                | ![available](./images/available.png)     | ![available](./images/available.png)                  | ![unavailable](./images/unavailable.png)              | ![available](./images/available.png)           |
| ПОМПА       | [Diaconn G8](../Configuration/DiaconnG8.md)                      | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)       |
| ПОМПА       | [EOPatch 2](../Configuration/EOPatch2.md)                        | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)       |
| ПОМПА       | [Medtrum TouchCare Nano](../Configuration/MedtrumNano.md)        | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)       |
| ПОМПА       | [Medtrum TouchCare 300U](../Configuration/MedtrumNano.md)        | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)       |
| ПОМПА       | [Roche Combo](../Configuration/Accu-Chek-Combo-Pump.md)          | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)       |
| ПОМПА       | [Roche Insight](../Configuration/Accu-Chek-Insight-Pump.md)      | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)       |
| ПОМПА       | [Старые Medtronic](../Configuration/MedtronicPump.md)            | ![available](./images/available.png)     | ![available](./images/available.png)                  | ![available](./images/available.png)                  | ![available](./images/available.png)           |
| CGM /  НМГ  | [Dexcom G7](../Hardware/DexcomG7.md)                             | ![available](./images/available.png)     | ![available](./images/available.png)                  | ![unavailable](./images/unavailable.png)              | ![available](./images/available.png)           |
| CGM /  НМГ  | [Dexcom One](../Hardware/DexcomG6.md)                            | ![available](./images/available.png)     | ![available](./images/available.png)                  | ![unavailable](./images/unavailable.png)              | ![available](./images/available.png)           |
| CGM /  НМГ  | [Dexcom G6](../Hardware/DexcomG6.md)                             | ![available](./images/available.png)     | ![available](./images/available.png)                  | ![available](./images/available.png)                  | ![available](./images/available.png)           |
| CGM /  НМГ  | [Dexcom G5](../Hardware/DexcomG5.md)                             | ![available](./images/available.png)     | ![available](./images/available.png)                  | ![available](./images/available.png)                  | ![available](./images/available.png)           |
| CGM /  НМГ  | [Dexcom G4](../Hardware/DexcomG4.md)                             | ![available](./images/available.png)     | ![available](./images/available.png)                  | ![available](./images/available.png)                  | ![available](./images/available.png)           |
| CGM /  НМГ  | [Libre 3](../Hardware/Libre3.md)                                 | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)       |
| CGM /  НМГ  | [Libre 2](../Hardware/Libre2.md)                                 | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)              | ![available](./images/available.png)           |
| CGM /  НМГ  | [Libre 1](../Hardware/Libre1.md)                                 | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)              | ![available](./images/available.png)           |
| CGM /  НМГ  | [Eversense](../Hardware/Eversense.md)                            | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)              | ![available](./images/available.png)           |
| CGM /  НМГ  | [MM640g/MM630g](../Hardware/MM640g.md)                           | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)              | ![available](./images/available.png)           |
| CGM /  НМГ  | [Poctech](../Hardware/PocTech.md)                                | ![available](./images/available.png)     | ![unavailable](./images/unavailable.png)              | ![unavailable](./images/unavailable.png)              | ![available](./images/available.png)           |
| CGM /  НМГ  | [Nightscout как источник ГК](../Hardware/CgmNightscoutUpload.md) | ![available](./images/available.png)     | ![available](./images/available.png)                  | ![available](./images/available.png)                  | ![available](./images/available.png)           |

_Table notes:_
1. A **rig** is a small computer which you carry around with you, without a monitor. One supported device type is Intel Edison + Explorer Board and the other Raspberry Pi + Explorer HAT or Adafruit RFM69HCW Bonnet. The first APS were based on this setup, as mobile phones were not capable of running the required algorithms. Use of these systems has declined, as the setup on mobile phones has become easier, and phones have a display included. Intel has also stopped selling the Intel Edison. The excellent OpenAPS algorithms **oref0** and **oref1** are now incorporated in AAPS and iAPS.
2. Omnipod Dash is the successor of Omnipod Eros. It supports bluetooth communication and does not need a rig gateway to communicate between the Omnipod and mobile phone. If you have a choice, we recommend use of the Dash instead of Eros.


An international peer-reviewed consensus statement containing practical guidance on open source looping was written by and for health-care professionals, and published in a leading medical journal in 2022: [_Lancet Diabetes Endocrinol_, 2022; 10: 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_). It is well worth a read (including for your diabetes clinic) and summarises the main technical differences between the different open-source hybrid closed loop systems.

Трудно "почувствовать" любую систему, не используя ее, или не поговорив с другими пользователями, поэтому обращайтесь с ними на Facebook/Discord и задавайте интересующие вас вопросы. Most people find that **AAPS** is incredibly sophisticated in comparison to other hybrid closed loop systems (particularly the commercial systems), with a huge number of potentially customisable settings and features,  discussed above. Некоторые могут счесть такое мнение обескураживающим, но нет никакой спешки для изучения всех возможностей системы, вы можете двигаться с той скоростью, с которой захотите, и на каждом этапе вы сможете получить помощь.


## Использует ли AAPS искусственный интеллект или какой-либо обучающий алгоритм?

The current master version of **AAPS** (3.1.0.3) does not have any machine learning algorithms, multiple-parameter insulin response models, or artificial intelligence. Сама по себе система открыта и прозрачна в своей работе, и может быть понятной не только специалистам, но и медработникам широкого профиля и пациентам. It also means that if you have a sharply varying schedule (maybe switching from a stressful week at work to a relaxing holiday) and are likely to need a significantly different amount of insulin, you can immediately switch **AAPS** to run a weaker/stronger customised profile. Система сделает эту настройку для Вас автоматически, но скорее всего потребуется какое-то время на подстройку подачи инсулина.

## Which system is right for me or my dependant?

На практике выбор системы часто ограничивается тем, какая у вас имеется помпа, или какую помпу вам может предоставить ваша медицинская организация, а также тем, каким телефоном вы пользуетесь (Apple или Android). Если у вас еще нет помпы, у вас самый большой выбор систем. Технология постоянно развивается, помпы снимаются с производства, выпускаются новые помпы и сенсоры. Большинство систем с открытым исходным кодом работают с наиболее распространенными сенсорами (Libre и Dexcom) или быстро адаптируются к работе с новыми сенсорами в течение года или после их выпуска (с небольшой задержкой времени для проверки безопасности и стабильности).

Most **AAPS** users report more time in range, HbA1c reductions, as well as quality of life improvements from having a system that can auto-adjust basal rates overnight during sleep, and this is true for most hybrid closed loop systems. Некоторые предпочитают простые системы, в которых минимум настроек (и останавливают выбор на коммерческих системах), другие считают нехватку настраиваемых элементов весьма серьезным недостатком (и тогда выбирают систему с открытым исходным кодом). If you (or your dependant) are newly diagnosed, a common route is to get used to using MDI plus a glucose sensor first, then progress to a pump which has the potential for looping, then progress to **AAPS**, but some people (especially small kids) may go straight to a pump.

Важно отметить, что для устранения неполадок пользователь **AAPS** должен сам проявлять инициативу в устранении проблем, а также обращаться за помощью к сообществу пользователей и разработчиков. Такой подход радикально отличается от пользования коммерческими системами. С **AAPS** пользователь имеет больше контроля, но и больше ответственности и должен быть готов к этому.

## Безопасно ли пользование системами с открытым исходным кодом, такими как AAPS?

### Safety of the AAPS system
A more accurate question is probably “is it safe **compared** with my current insulin delivery system?” since no method of insulin delivery is without risk. Система **AAPS** имеет множество сдержек и противовесов для достижения максимальной безопасности. A recent [paper](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375) looked at the use of **AAPS** in a computer simulated set-up, which was an effective way to unobjectively trial how safe and effective the system is. More generally, it is estimated that over 10,000 individuals worldwide are using open-source automated-insulin delivery systems, and uptake continues to increase globally.

Любое устройство, использующее радиосвязь, может быть взломано, и это относится и к обычным инсулиновым помпам. Currently, we are not aware of anyone attempting to harm individuals by hacking their diabetes-related medical equipment. Однако существует множество способов защититься от таких рисков:

1.  In the pump settings, limit both the max bolus allowed and max temporary basal settings to amounts that you believe are safest. These are hard limits that we do not believe any malicious hacker could circumvent.

2.  Установите сигналы оповещения вашего мониторинга для высоких и низких уровней ГК.

3.  Отслеживайте подачу инсулина через интернет. Пользователи Nightscout могут установить дополнительные сигналы тревоги для различных ситуаций, включая условия, которые имеют гораздо больше вероятности, чем атаки злоумышленника. Помимо высоких и низких сахаров, Nightscout отображает диагностические данные, полезные для проверки работы помпы, включая активный инсулин IOB, историю болюсов и временной базальной скорости помпы. Он также может быть настроен на оповещение о нежелательных условиях, таких как прогнозируемые высокие и низкие уровни гликемии, запасах инсулина в резервуаре и низкий заряд батареи в помпе.

Если на вашу инсулиновую помпу будет произведена атака злоумышленника, выше приведенные стратегии значительно снизят риски. Каждый потенциальный пользователь **AAPS** должен взвесить риски, связанные с использованием **AAPS**, по сравнению с рисками использования другой системы.

#### Safety considerations around improving blood glucose control too fast

A rapid reduction in HbA1c and improved blood glucose control sounds appealing. However, reducing average blood glucose levels _too fast_ by starting any closed loop system can cause permanent damage, including to the eyes, and painful neuropathy that never goes away. This damage can be avoided simply by reducing levels more slowly. If you currently have an elevated HbA1c and are moving to AAPS (or any other closed loop system), please discuss this potential risk with your clinical team before starting, and agree a timeplan with them. More general information on how to reduce your glucose levels safely, including links to medical literature is given in the [safety section [here](preparing-safety-first).

#### Medical safety around devices, consumable supplies and other medications

Use a tested, fully functioning FDA or CE approved insulin pump and CGM for an artificial pancreas loop. Внесение аппаратных или программных технических изменений в это оборудование может стать причиной неконтролируемого введения инсулина, что может повлечь опасные последствия для пациента. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, do not use these for creating an AAPS system.

Use original supplies such as inserters, cannulas and insulin containers approved by the manufacturer of your pump and CGM. Использование непроверенных или модифицированных материалов может вызвать неточность мониторинга и ошибки дозировки инсулина. Insulin is highly dangerous when misdosed - please do not play with your life by hacking your supplies.

Do not take SGLT-2 inhibitors (gliflozins) when using **AAPS** as they incalculably lower blood sugar levels. Combining this effect with a system that lowers basal rates in order to increase BG is dangerous, there is more detail about this in the main [safety section](preparing-safety-first).

(introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team)=
## Как мне подойти к обсуждению AAPS с врачами?

Users are encouraged to speak with their clinicians about their intention to use **AAPS**. Please do not be afraid to have an honest conversation with your diabetes team if you intend to use **AAPS** (or any other DIY loop, for that matter). Transparency and trust between patient and doctor is paramount.

### Suggested approach:
Start a conversation with your clinician to determine their familiarity and attitude towards diabetic technology such as CGMs,  pumps, hybrid loops and commercial looping. Your clinician/endocrinologist should be aware of the basic technology and be willing to discuss with you recent advancements with commercial loop products available within their regions.

#### Local precedent

Obtain your clinicians/endocrinologists’ views on DIY loop _vs_ commercial looping, and gauge their knowledge in this area. Are they familiar with **AAPS** and can they share with you any helpful experience of working with patients with DIY looping?

Ask if your team has any patients under their care who already use DIY looping. Due to patient confidentiality, doctors cannot pass other patient’s details to you without obtaining the individual’s consent. However, if you want to, you **can** ask them to pass **your** contact details to an existing DIY looping patient if there is one the clinician feels you might "click” with, suggesting that you would be happy for the patient to contact you to discuss DIY looping. Clinicians are not obliged to do this, but some are happy to, since they realise the importance of peer-to-peer support in type 1 diabetes management. You may also find it useful to meet local friendly DIY loopers. This is of course up to you, and not entirely necessary.

#### National and International Precedent

If you feel unsupported by your team to loop with **AAPS**, the following discussion points may help:

a) The **AAPS** system has been designed BY patients and their caregivers. It has been designed ultimately for safety, but also drawing on in-depth patient experience. There are currently around **10,000** AAPS users worldwide. There is therefore likely to be other patients using DIY looping in your clinic's patient population (whether they know about it or not).

b) Recent peer-reviewed published guidance in the internationally leading medical journal [The Lancet](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/pdf/nihms-1765784.pdf)_(1)_ has confirmed that DIY loops are **safe** and **effective at improving diabetic control**, including time in range. There are regular articles in leading journals like [Nature](https://doi.org/10.1038/d41586-023-02648-9)_(3)_ which highlight the progress of the DIY looping commmunity.

c) Starting with **AAPS** involves a _gradual_ migration from “open” loop pumping, through low-glucose suspend, through to hybrid “closed” looping, by completing a number of objectives. There is therefore a structured programme, requiring the user to demonstrate a level of competence at each stage and fine-tuning their basic settings (basal, ISF and ICR) before they can close the loop.

d) Technical support is available to you from the DIY community through Github, Discord and Facebook closed groups.

e) You will be able to provide **both CGM and insulin looping/pumping information** as combined reports at clinic meetings (through Nightscout or Tidepool), either printed out or on-screen (if you bring a laptop/tablet). The streamlining of both CGM and insulin data will allow more effective use of your clinician’s time to review your reports and aid their discussions in assessing your progress.

f) If there is still strong objection from your team, hand your clinician printouts of the reference articles linked here in the text, and give them the link to the **AAPS** clinicians section: [For Clinicians – A General Introduction and Guide to **AAPS**](Resources/clinician-guide-to-AndroidAPS.md)

#### Support for DIY looping by other clinicians

The paper published in the [Lancet Diabetes Endocrinology](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_)[ (co led by Kings’ and Guy’s and St Thomas’ NHS Foundation Trust, and co lead by Dr Sufyan Hussain, a consultant diabetologist and honorary senior lecturer from King’s in London) provides:

a) **Assurance** for professionals that DIY artificial pancreas systems/ open source as a “safe and effective treatment” option for type 1 diabetes and provides guidance on recommendations, discussions, supports, documentation;

b) **Recognition** that open-source automated insulin delivery (“AID”) systems can increase time in range (TIR) while reducing variability in blood glucose concentrations and the amount of hypo and hyperglycaemic episodes in various age groups, genders and communities;

c) **Recommendation** that healthcare workers should **support** type 1 patients or their caregivers who choose to manage their diabetes with an open source AID system;

d) Recommendation that healthcare workers should attempt to learn about all treatment options that might benefit patients including available open-source AID systems.  If health care professionals do not have resources to educate themselves, or have legal or regulatory concerns, they should consider **cooperating, or teaming up with other healthcare professionals** who do;

e) Emphasis that all users of CGMs should have real-time and open-access to **their own health data** at all times

f) Emphasis that these open source systems have not undergone the same regulatory evaluations as commercially available medical technologies, and there is no commercial technical support. However, **extensive community support is available**; and

g) A recommendation that **regulation and legal frameworks** should be updated to ensure clarity on permitting ethical and effective treatment of such open source systems.

Another paper in [Medical Law International, 2021](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)(_4_) also highlights the UK General Medical Council’s ‘consent guidance’ places a strong emphasis on doctor and patients making decisions together. The doctor should explain the potential benefits, risks, burdens and side-effects on DIY APS and may recommend a particular option without pressuring the patient.

Ultimately it is up to the patient to weigh up these factors, along with any non-clinical issues relevant to them and decide which treatment option, if any, to accept.

If a doctor discovers in a clinic that their patient is looping with a DIY system, they are not exempted from their obligations to monitor the patient, simply because they did not prescribe the particular piece of technology the patient is using; clinicians must continue to monitor patients.

Doctors (at least in the UK) are not prohibited from prescribing unlicensed medicines and can use their clinical discretion. They should therefore use their clinical judgement to decide if a DIY APS is suitable for a specific patient, and discuss what they consider to be the pros and cons with the patient.

#### The articles referenced above, and other useful links and position statements are listed below:

1. Open-source automated insulin delivery: international consensus statement and practical guidance for health-care professionals [_Lancet Diabetes Endocrinol_, (2022) _10_, 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)
2. [In Silico Trials of an Open-Source Android-Based Artificial Pancreas: A New Paradigm to Test Safety and Efficacy of Do-It-Yourself Systems, 2020](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375)
3. A DIY ‘bionic pancreas’ is changing diabetes care — what's next? [_Nature_ (2023), _620_, 940-941](https://doi.org/10.1038/d41586-023-02648-9)
4. Prescribing unapproved medical devices? The case of DIY artificial pancreas systems [_Medical law international_, (2021), _21_, 42-68](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)
5. [Berlin Institute of Health position statement, 2022](https://www.bihealth.org/en/notices/do-it-yourself-solutions-for-people-with-diabetes-are-safe-and-recommended)
6. Do-It-Yourself Automated Insulin Delivery: A Health-care Practitioner User’s Guide (Diabetes Canada position and guide) [_Canadian Journal of Diabetes_, (2023)_47_, E8, 389-397](https://www.canadianjournalofdiabetes.com/article/S1499-2671(23)00138-7/fulltext)
7.  Netherlands (EN/NL) - for clinicians - [how to help people on open source automated insulin delivery systems](https://www.diabetotech.com/blog/how-to-help-people-on-open-source-automated-insulin-delivery-systems)
8. First Use of Open-Source Automated Insulin Delivery AndroidAPS in Full Closed-Loop Scenario: Pancreas4ALLRandomized Pilot Study [_Diabetes Technol. Ther._, 25, _5_, 2023](https://www.liebertpub.com/doi/pdf/10.1089/dia.2022.0562?casa_token=D13eFx5vCwwAAAAA:MYvO8hChbViXVJFgov1T11RXBPx2N_wOMThLHwl3TVUxbCuANegPrIFRC5R5VXx_S71FoQYW-qg)
9. Pre-school and school-aged children benefit from the switch from a sensor-augmented pump to an AndroidAPS hybrid closed loop: A retrospective analysis [_Pediatr. Diabetes_ 2021, _22_, 594-604. 2021](https://onlinelibrary.wiley.com/doi/epdf/10.1111/pedi.13190)
10. Outcomes of the OPEN project, an EU-funded project into the Outcomes of Patient’s Evidence with Novel, Do-it-Yourself Artificial Pancreas Technology (https://www.open-diabetes.eu/publications)



## Why can’t I just download AAPS and use it straight away?

Приложение нельзя найти в Google Play - его следует самостоятельно собрать из исходного кода по юридическим причинам. **AAPS** не имеет лицензии, то есть не имеет одобрения ни от одного регулирующего органа ни в одной стране. **AAPS** is deemed to be carrying out a medical experiment on yourself, and is carried out at the user’s own risk.

Setting up the system requires patience, determination and the gradual development of technical knowledge. All the information and support can be found in these documents, elsewhere online, or from others who have already done it. Over 10,000 people have successfully built and are currently using **AAPS** worldwide.

The developers of **AAPS** take safety incredibly seriously, and want others to have a good experience of using **AAPS**. Поэтому важно, чтобы каждый пользователь (или опекун, если пользователь является ребенком):

- builds the AAPS system themself and works through the **objectives** so that they have reasonably good personalised settings and understand the basics of how **AAPS** works by the time they “close the loop”;

- периодически осуществлял резервное копирование системы, экспортируя и сохраняя важные файлы (например, keystore и settings.json) в безопасном месте, чтобы иметь возможность при необходимости снова быстро настроить систему;

- устанавливал обновления версий master по мере их доступности; и

- обслуживал систему и следил за ней, чтобы она работала правильно.

## What is the connectivity of the AAPS system?

**Figure 3 (below)** shows one example of the **AAPS** system for a user who do not require any followers interacting with the system. Additional open-source software and platforms which are not shown can also be integrated.

![21-06-23 AAPS connectivity no followers](./images/AAPS-connectivity-no-followers.png)


**Figure 4 (below)** shows the full potential of the **AAPS** system for a user who has followers and requires a monitor and send adjust the system remotely (like a child with type 1 diabetes). Additional open-source software and platforms which are not shown can also be integrated.

![21-06-23 AAPS overview with followers](./images/AAPS-overview-with-followers.png)

## How does AAPS get continually developed and improved?

Most **AAPS** users use the fully tested **master** version of AAPS, which has been tested for bugs and problems, before being released to the community. Behind the scenes, the developers try out new improvements, and test these out in “developer” (**dev**) versions of **AAPS** with a user community who are happy to do bug updates at short notice. If the improvements work well, they are then released as a new “master” version of **AAPS**. Any new master release is announced on the Facebook group, so that the mainstream **AAPS** users can read about and update to the new master version.

Some experienced and confident **AAPS** users conduct experiments with emerging technologies and with dev versions of the **AAPS** app, which can be interesting for the less adventurous users to read about, without having to do it themselves! People tend to share these experiments on the Facebook group too.

You can read more about some of these experiments and discussion on emerging tech here:

Tim Street [https://www.diabettech.com/](https://www.diabettech.com/)

David Burren [https://bionicwookie.com/](https://bionicwookie.com/)

## Who can benefit from AAPS?

| User Type                                   |
| ------------------------------------------- |
| ✔️ type 1 diabetic                          |
| ✔️ caregiver or parent of a type 1 diabetic |
| ✔️ blind users type 1 diabetic              |
| ✔️ *clincians and healthcare professionals  |

The above table assumes that the user has access to both continuous gluocse monitor and insulin pump.

*All data from **AAPS** can be made available to healthcare professionals via data sharing platforms, including Nightscout that provides logging and real time monitoring of CGM data, insulin delivery, carbohydrate entries, predictions and settings. Nightscout records include daily and weekly reports which can aid healthcare professionals' discussions with type 1 patients with more accurate data on glycemic control and any behavioural considerations.

### Accessibility for users AAPS who are partially or completely blind

#### Day to day AAPS use:
AAPS can be used by blind people. On Android devices, the operating system has a program called TalkBack. This allows screen orientation via voice output as part of the operating system. By using TalkBack you can operate both your smartphone and AAPS without needing to be able to see.

#### Building the AAPS app:
As a user you will build the AAPS app in Android Studio. Many people use Microsoft Windows for this purpose, where there is the Screenreader analogous to TalkBack. Since Android Studio is a Java application, the “Java Access Bridge” component must be enabled in the Control Panel. Otherwise, the screen reader of the PC will not speak in Android Studio.

How you do this depends on your operating system, two methods are outlined below:

1) In the Windows Start menu, enter “Control Panel” in the search field, open with Enter. It opens: “All Control Panel Items”.

Open the "Ease of Access Centre".

Then open “Use computer without a display” with Enter.

Under hear text read aloud select "turn on narrator" and "turn on audio display", and click "apply"

or:

2) Press Windows key and enter “Control Panel” in the search field, open with Enter. It opens: “All Control Panel Items”.

Press the letter C to get to “Center for Ease of Use”, open with Enter.

Then open “Use computer without a screen” with Enter.

There, at the bottom, you will find the checkbox “Enable Java Access Bridge”, select it.

Done, just close the window! The screen reader should work now.



## What benefits can I get from AAPS?

With investment of your time, **AAPS** can potentially lead to:

- alleviating the stress and burden of managing type 1 diabetes;

- reducing the multitude of mundane decisions that arise from type 1 diabetes;

- the provision of personalised and dynamic insulin dosing based on real-time data which can cut down the need for hypo treatments and reduce hyperglycemia episodes;

- an increased knowledge of insulin management and confidence to better fine tune your settings;

- the ability to create automatic settings (**automations**) that are tailored to fit in with your lifestyle;

- improved sleep quality and overall reduction in the frequency of nighttime interventions;

- remote monitoring and administration of insulin delivery for caregivers of type 1 diabetics; and

- streamlining of all your portable diabetic equipment (continuous glucose monitor receiver and insulin controlling devices) by using an Android phone controlled by **AAPS**.

Ultimately, **AAPS** can empower individuals to better manage their diabetes, resulting in stable blood sugars and improved long term health outcomes.

Interested in how to get started with setting up AAPS? Take a look at the [preparing](preparing.md) section.
