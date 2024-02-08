# Полный замкнутый цикл

## Полный замкнутый цикл против гибридного (FCL vs HCL)

### Определения

В **гибридном замкнутом цикле** вы получали, по крайней мере, один болюс перед едой. Часто это переводило петлю в режим приостановки (с нулевой ВБС) и в основном, только в режиме совместного управления, пока болюс на еду оставался активным.

Кроме того, перед каждым приёмом пищи вы вводили данные о количестве углеводов, жира и белка. А также меняли углеводные коэффициенты (обычно в настройках, на ежедневный завтрак, обед и ужин).

AAPS также имеет режим **полного замкнутого цикла без подачи пользователем каких-либо болюсов** и без ввода углеводов в режиме, называемом UAM = необъявленный приём пищи (UAM).

- Обратите внимание, что **UAM** также можно включить в гибридном замкнутом цикле, и в этом случае алгоритм лучше справляется с неправильно указанным количеством углеводов.

- Обсуждается вопрос о том, что для еды с особенно высоким содержанием углеводов или для людей с определенными привычками в еде или перепадами чувствительности режим с небольшими болюсами на еду может быть предпочтительнее или нужнее. По сути, это будет гибридный замкнутый цикл без информации об углеводах и, следовательно, один из вариантов использования гибридного замкнутого цикла (HCL). Мы рассматриваем полный замкнутый цикл как режим **без болюсов**, и как только вы настроите этот режим, вы даже сможете убрать все «бесполезные» кнопки в нижней части главного экрана AAPS.

### Чего ожидать?

В 2022/23 году было проведено и опубликовано первое медицинское исследование, которое показало, что пациенты могут достичь сравнительно хороших результатов с помощью AAPS в режиме полностью замкнутого цикла:

> 16 подростков с СД1 (диапазон HbA1 43-75) и продолжительностью заболевания 9-15 лет прошли три отдельных 3-дневных периода проживания в лагере, используя модифицированную и заблокированную на изменение настроек версию AndroidAPS 3.1.03. **Результат:** Гликемия контролировалась системой в течение 95% времени исследования, а доля времени ниже 3,9 ммоль/л не превышала 1% за весь период исследования (0,72%). Сценарий гибридного зц HCL дал значительно более высокий процент времени ниже 3 ммоль/л (HCL 1,05% против MA 0,0% против полностью замкнутого цикла FCL 0,0%; Р = 0,05) по сравнению с другими сценариями. **Между сценариями в процентах времени между 3,9 и 10 ммоль/л** (HCL 83,3% против МА 79,85% против **FCL 81,03%**, Р = 0,58), не наблюдалось различий, что соответствует средней гликемии (HCL 6,65 ммоль/л против МА 7,34 ммоль/л против FCL 7,05 ммоль/л, Р = 0,28). В средней дневной дозе инсулина или в ежедневном потреблении углеводов различий не наблюдалось. За период исследования никаких серьезных неблагоприятных событий не происходило. **Выводы:** Наше пилотное исследование показало, что **полный замкнутый цикл FCL может быть реалистичным способом лечения** для людей с диабетом 1го типа.

Источник:

1) ![NationalLibraryOfMedicine](../images/Logo_of_U.S._National_Library_of_Medicine.png) ![PubMed](../images/US-NLM-PubMed-Logo.png) National Library of Medicine, PubMed [First Use of Open-Source Automated Insulin Delivery AndroidAPS in Full Closed-Loop Scenario: Pancreas4ALL Randomized Pilot Study](https://pubmed.ncbi.nlm.nih.gov/36826996/);

2) ![NationalLibraryOfMedicine](../images/Logo_of_U.S._National_Library_of_Medicine.png) ClinicalTrials.gov National Library of Medicine, Clinical Trial [Feasibility and Safety Study of the Automated Insulin Delivery Closed Loop System Pancreas4ALL (ASAP)](https://www.clinicaltrials.gov/study/NCT04835350?term=Feasibility%20and%20Safety%20Study%20of%20the%20Automated%20Insulin%20Delivery%20Closed%20Loop%20System%20Pancreas4ALL%20(ASAP)&rank=1)

Чтобы получить ожидаемое снижение ручного контроля, для начала необходимо:

- соответствовать всем предварительным требованиям для полного замкнутого цикла FCL
- настроить несколько вариантов правил в меню Автоматизация
- пройти этапы обучения и конфигурирования, научиться управлять настройками, особенно в меню Автоматизация. Приведенные ниже рекомендации помогут вам в этом процессе.

### Общие соображения, почему стоит (или не стоит) переходить от гибридного к полному замкнутому циклу

Полный замкнутый цикл подходит **не ** **всем**:

- Некоторые пользователи полного замкнутого цикла, применяющие Автоматизацию, достигают около 90% времени в целевом диапазоне TIR (70-180 / 3,8-10) и HbA1c ниже 6%, но, возможно вы предпочитаете более тонкий контроль. Примечательно, что **снижение показателей, превышающих 140 мг/дл (7,7 ммоль/л) при приёме быстрых углеводов **, вероятно, требует предварительного введения болюса.
- Вы готовы к сознательной персонализированной настройке системы? Персонализация настроек может оказаться сложной задачей. Это определенно не для вас, если вы уже утомлены настройкой базальной дозы и ISF. Но соотнесите это с тем, что вы можете избавиться от ежедневного подсчёта углеводов. В результате внимательного изучения настроек своей петли вы получите более глубокие знания.
- В то время как управление приемом пищи становится очень простым, управление при **физических нагрузках** сложнее, особенно если учесть, что многие ограничивают перекусы при занятии спортом в целях контроля веса.
- К сожалению, существуют дополнительные трудности при использовании полного замкнутого цикла для **детей** (см. следующий раздел, требования для полного замкнутого цикла)

## Требования к полному замкнутому циклу

Главной привлекательностью полностью замкнутого цикла будет то, что вы сможете приблизиться к мечте об искусственной поджелудочной железе. Действительно, режим обещает очень простое повседневное использование. **“Просто ешь!”**

### Правильно настроенный гибридный замкнутый цикл

Прежде чем рассматривать переход на полностью замкнутый цикл, желательно сначала иметь хорошо настроенную систему с гибридным циклом. Для этого есть две важных причины:

- Полный замкнутый цикл с необъявленным приёмом пищи UAM требует тщательного подбора индивидуальных настроек, так что петля будет подавать инсулин, подражая ВАШЕМУ уже хорошо отлаженному гибридному режиму.
- Полностью замкнутый контур UAM поставляется с новыми параметрами (в меню Автоматизация), которые необходимо устанавливать и подстраивать. Было бы **проблематично установить и настроить эти дополнительные параметры до того, как основные параметры будут настроены «правильно»**. Ошибочные настройки могут легко компенсироваться ошибками настроек других параметров. Это работает в отдельных сценариях, но создаст крайне нестабильную систему, которую впоследствии будет трудно откалибровать. Кроме того, как заметили первые пользователи тестовых версий, а также согласно приведенному выше исследованию, вы должны ожидать сопоставимого %TIR в режиме *замкнутого цикла*, который вы видите сегодня в своём *гибридном цикле*. В переходе на закрытый цикл речь идет не о производительности, а об удобстве, — после небольшого упорства в настройке: **Ключевое в закрытом цикле — это самостоятельная настройка автоматизации, которую вы должны выполнить самостоятельно, анализируя *ваши данные*, как из *вашего* успешного гибридного цикла, так и из из вашего первоначального опыта с замкнутым циклом при настройке параметров.** Это не самонастраивающийся готовый чудо-продукт! Программисты AndroidAPS и авторы этой документации не берут на себя ответственности. Вы должны сами понять, хотите ли вы пользоваться этими инструментами и изучить способы их применения.

### Инсулины короткого действия (Lyumjev, Fiasp)

Если пользователь не вводит болюс во время еды, очевидно, что необходим инсулин очень короткого действия, чтобы после обнаружения повышения уровня глюкозы при приёме пищи, петля имела шансы поддерживать уровень глюкозы в допустимых пределах (по общему определению, (ниже 180 мг/дл или 10 ммоль/л).

Моделирующее исследование (подробности см по ссылке Full Loop V2/Март 2023; там же раздел 2.2) показывает, что *инсулины короткого действия*

Источник:

1) ![IEEEControlSystemsMagazine](../images/IEEE_Control_Systems_Society_Logo_RGB.jpg) ![ResearchGate](../images/researchgate-logo-white.svg) Журнал IEEE Control Systems, ResearchGate [ Искусственная поджелудочная железа и контроль приема пищи: Обзор постпрандиальной регуляции уровня глюкозы при сахарном диабете 1 типа](https://www.researchgate.net/publication/322866519_The_Artificial_Pancreas_and_Meal_Control_An_Overview_of_Postprandial_Glucose_Regulation_in_Type_1_Diabetes);

- дают значительно **более низкие** **пики** глюкозы, по сравнению с медленными инсулинами
- **легко переносят** **задержку болюса на пару минут ** при первом приеме пищи, не допуская при этом неприемлемых пиков
- **минимизируют влияние** на пик глюкозы **от различных** углеводных нагрузок (**объемов приема пищи**).

В заключении, если только вы не находитесь на очень умеренной низкоуглеводной диете, не пытайтесь применять режим закрытого цикла с иными инсулинами кроме Lyumjev или Fiasp,.

Многие пользователи Fiasp или Lyumjev наблюдают частые **закупорки** даже после смены длины иглы или параметра SMB. Похоже, что очень важно следить за временем использования **канюли (или подов)** (многие считают **48 часов** **пределом**), и за моментами, когда происходит труднообъяснимое повышение уровня глюкозы, сказывающееся на постоянно увеличивающемся уровне «ложного» активного инсулина Iob.

Отчет о частоте инцидентов (LINK, раздел 2.2.) иллюстрирует эту проблему и показывает, что за *одну* закупорку вы легко теряете 25% времени в целевом диапазоне TIR в день или 5% TIR в неделю, или же 1% TIR в течение месяца.

### Качественный непрерывный мониторинг глюкозы

Вы больше не вводите болюс, связанный с количеством еды; ВСЮ работу по инсулинотерапии проделывает алгоритм! Поскольку уровень глюкозы является основой расчётов для алгоритма, **изучите**  1) работу **своей системы мониторинга** 2) вариабельность уровня глюкозы у приложений-посредников при передаче показаний в зависимости от срока работы сенсора 3) в частности, как выполняется сглаживание показаний, как оно влияет на настройки, в особенности, на определение дельты, сигнализирующей о начале приема пищи.

Между приёмами пищи, необходима стабильная связь Bluetooth, чтобы сенсор, приложения и помпа могли выполнять свою работу без потери времени на принятие решения.

Еще более важно, чтобы в любое время дня и ночи, сенсор мониторинга глюкозы не выдавал никаких шумов (неравномерных значений), которые могли бы быть **неверно интерпретированы** алгоритмом, как признак начала приема пищи. Обратите внимание, что калибровки также могут давать неожиданные скачки значений.

​ На данный момент лучшим вариантом является использование сенсоров Dexcom G5 или **G6** и совместное считывание значений **с перекрытием** при использовании сенсоров на правой и левой руке, что обеспечивает хорошее качество данных для петли. Возможны и другие способы, но они сопровождаются большими усилиями по мониторингу (с использованием часов) и случайными перерывами для петли.

### Ограничения, относящиеся к приему пищи

Setting up a full closed loop is relatively easy for people whose diet does not consist **mainly** of components with **rapid high effect on blood glucose**, and whose meal patterns do not wildly vary day-to-day. Пища не обязательно должна быть низкоуглеводной.

Богатый белком и жирами рацион или методы, замедляющие пищеварение, скорее помогают режиму замкнутого цикла, потому что медленно поступающие углеводы прекрасно компенсируют неизбежные "хвосты" от запоздалых болюсов, необходимых для пикового времени.

![Glycemic index and effect on blood glucose](../images/fullClosedLoop01.png)

Самыми сложными являются блюда с исключительно высоким и высоким гликемическим индексом EBG (см. красный цвет на рисунке): они не только быстро повышают уровень глюкозы, но и не имеют достаточно жиров, белков и клетчатки, чтобы сбалансировать неизбежный «хвост» активности инсулина, который мог возникнуть при попытках контролировать высокий уровень глюкозы ранее.

Проблемой также является **беспорядочное употребление снеков и сладких напитков**, содержащих быстро усваивающиеся углеводы.


### Ограничения, относящиеся к образу жизни

#### Technically stable system

Полный замкнутый цикл требует технически стабильной системы 24/7, особенно в отношении надежных сигналов **НМГ**, но также и стабильность **Bluetooth-соединения** с помпой ****, и предотвращения (или по крайней мере раннего распознавания) закупорки. Это может потребовать внимания, например, к поддержанию хорошо заряженных компонентов и нахождению в непосредственной близости от них; частой замене канюли (или пода), чтобы уменьшить риск закупорки; и всегда иметь необходимые расходники. **В зависимости от опыта работы с системой вашего образа жизни, эти моменты могут в большей или меньшей степени вас ограничивать.**

Full closed looping requires a 24/7 technically stable system, especially regarding reliable CGM signals, but also Bluetooth stability with the pump, and avoiding (or at least early recognition of) occlusion. Это может потребовать внимания, например, к поддержанию хорошо заряженных компонентов и нахождению в непосредственной близости от них; частой замене канюли (или пода), чтобы уменьшить риск закупорки; и всегда иметь необходимые расходники. В зависимости от применяемой системы, опыта ее использования и образа жизни, эти аспекты могут в большей или меньшей степени вас ограничивать.

#### Preparing for activity/sports

Чтобы подготовиться к активности / занятию спортом / упражнениям, стандартный протокол для помпы или петли с **гибридным** замкнутым циклом заключается в принятии мер по снижению уровня активного инсулина перед тренировкой.

Алгоритм **полного замкнутого цикла** настроен на обнаружение приема пищи и автоматическое введение инсулина для компенсации повышения уровня глюкозы. Установка высокой временной target and lower %profile right away (effective already around meal start) would be a problem.

Высокий уровень физической активности потребует ** предварительной подготовки** (особенно **если вы хотите не увеличивать потребность в перекусах во время занятий спортом**). Ночью после активного дня имеет смысл установить пониженный % профиля и устанавливать на несколько часов после полного усваивания ужина повышенный (> 100 мг/дл) целевой уровень глюкозы с отключенной опцией "включать SMB при высоких временных целях" в настройках алгоритма ИПЖ AAPS.

#### Hurdles for kids

Настройка и поддержание полностью замкнутого цикла для детей сопровождается дополнительными сложностями, если:

- Lyumjev is not available or well tolerated
- Часовая базальная доза очень низкая, что является плохой основой для SMB
- Диета богата сладкими продуктами. With the typical low blood volume of a small body, strong tendency towards very high bg spikes!
- Изменение чувствительности к инсулину, изменение циркадных ритмов затрудняют поддержание правильной настройки замкнутого цикла.

Имеется несколько родителей с детьми, которые ведут изучение этих вопросов. Данная работа заостряет внимание на соблюдении требований применения алгоритмов замкнутого цикла; и в конце концов сводится к сопоставлению результатов с тем, что имелось бы при обычном использовании гибридного замкнутого цикла.

#### Time required for setting-up

Наконец, прежде чем применять полный замкнутый цикл, следует иметь несколько недель свободного времени и «свободную голову» для настройки. Сможете ли вы получить желательный результат, за время, которое готовы потратить на настройку? В зависимости от привычек» и готовности к компромиссам (например, чаще менять катетер/POD, не начинать прием пищи при высокой гликемии … ) готовы ли вы (и можете ли придерживаться этого каждый день), во имя того, чтобы не приходилось считать углеводы и вводить болюс на компенсацию?

## Enabling boosted SMBs; safety

В гибридном замкнутом цикле применяются строгие ограничения безопасности в отношении размера болюсов, подаваемых автоматически.

Однако, при замкнутом цикле пользователи больше самостоятельно не подают предварительного болюса перед приёмом пищи. Поэтому, лимиты SMB должны быть увеличены, чтобы петля могла подавать достаточно большие микроболюсы на компенсацию приёма пищи.

Поскольку вы используете Master версию AAPS, вам рекомендуется установить в настройках AAPS максимально допустимый размер SMB, который может дать петля (maxUAMSMBBasalMinutes=120, т. е. 2 часа базальной дозы в дневное время).

> If your basal rate is very low, the resulting SMB limits might be too low to allow good-enough control of your post-prandial glucose rises. В этом случае решением может быть отказ от пищи с сильными пиками, а затем переключение на версию AAPS для разработчиков, который предлагает новый параметр в настройках доставки SMB: smb_max_range_extension. Он увеличивает стандартный максимум 2-часовой базальной дозы > чем в 1 раз. (Кроме того, 50%-ный коэффициент SMB, может быть повышен в dev-версиях для разработчиков).

Переход к максимальным лимитам SMB в AAPS в основной версии Master не сделает режим замкнутого цикла менее безопасным. Наоборот, вы замените свой болюс на еду несколькими болюсами поменьше, которые вы позволяете подавать вашей петле, даже с задержками во времени. Это практически исключает риск гипогликемии в первые 1-2 часа при любом приёме пищи. Через 3 часа и позднее большой разницы быть не должно, поскольку в случае с гибридным и закрытом циклами петля работает по одному и тому же алгоритму.

**Следуйте инструкциям**, чтобы позволить AAPS, ** имитировать подачу инсулина через введение нескольких СуперМикроБолюсов (СМБ)**.

Время от времени проверяйте вкладку SMB, чтобы убедиться, что микроболюсы SMB достаточно велики и вводят требуемое количество инсулина insulinReq при приёме пищи в режиме полного замкнутого цикла.

Иначе, все ваши усилия по настройке параметров не приведут ни к чему!

:::{admonition} Повышение ISF может быть опасным
:class: danger

Carefully observe/analyze the SMB sizes that, briefly after meal start, result from your settings. Настраивайте пошагово и никогда не меняйте более 1 или 2 параметров одновременно.

Настройки следует отлаживать именно для вашего (!) типа питания.
:::

## Обнаружение приёма пищи/ваша Автоматизация для повышения эффективности

Для успешного замкнутого цикла фактор чувствительности к инсулину – ФЧИ (ISF) является ключевым параметром настройки. При использовании основной версии AAPS Master + настройки меню Автоматизация **> 100%-ное изменение профиля должно запускаться автоматически при распознавании приема пищи** (через параметр дельты) и обеспечивать более чёткий ISF.

AAPS Master позволяет повышать до 130% временный профиль в режиме гибридного замкнутого цикла. Повышение ISF осуществляется в три шага:

- Шаг 1 - посмотреть значение ISF, соответсвующего этому времени суток питания в профиле, и проверить, предлагает ли Autosens изменение, которое отслеживает текущий (за последние несколько часов) индекс чувствительности к инсулину.
- Шаг 2 - применяет коэффициент (1/% профиля, как установлено в вашей Автоматизации) для повышения ISF.
- Шаг 3 - проверка, что предлагаемый ISF попадает в установленные лимиты безопасности.

### Шаблоны Автоматизации для закрытого цикла

Отметьте галочки вверху: у вас есть несколько вариантов:

- В списке ваших Автоматизаций вы можете поставить галочку (слева от каждого поля) OFF => Это отключает Автоматизацию.  Например, вы можете применить это для всех Автоматизаций замкнутого цикла, связанных с завтраком, чтобы использовать гибридный замкнутый цикл только для завтрака(ов).
- В каждом шаблоне Автоматизации можно отметить галочкой **Действия пользователя** => Тогда, при наступлении Условий, определенные действия не будут выполняться автоматически. Вместо этого, на главном экране AAPS будет появляться предупреждение всякий раз, когда замкнутый цикл автоматически вводит микроболюс SMB. И у вас будет возможность подтверждения "да" или "нет". Это **особенно полезно на этапе отладки настроек**.                                                                                                                        
  Этот функционал будет полезен на каждый день. Как пример, вы можете наблюдать «утреннюю зарю» (растущий уровень глюкозы по утрам при пробуждении), но хотите предотвратить ложное определение начала приёма пищи системой.

The following section shows in detail how you can bundle a whole series of conditions to describe situations in which the AndroidAPS loop should increase (or decrease) insulin delivery.                                                                                                                                      As ISF cannot directly be tuned, raising profile% over 100% will do the same for our purposes.

### Automated big SMBs at bg rise

Key to success in full closed looping: **At the beginning of glucose increases from meals, very large automatic boli (SMBs) must be given by the loop as quickly as possible** “to catch up” with the evidently needed iob. (Compare with your administered bolus for similar meal in hybrid closed loop!)

First of all, **personal data** (from your time in hybrid closed loop) have to be researched to determine which **deltas** might be not meal –related, and which ones surely would be.

- As you can define the Automation to only work in a pre-defined time-window, you need only to analyse there.
- If you do very different kinds of meals (e.g. a rather high carb breakfast, but low carb lunch) you can choose to do two different (sets of) Automations for each of the time slots.
- Exclude the nights if you see occasional jumps from a compression lows
- Usually, just using the delta of the past 5 minutes suffices.
- But you can also make use one of the average deltas. By comparing the deltas in the conditions of your Automations you could even define actions of different aggressiveness depending on whether the glucose rises in an accelerated way or not.

> ( delta – short avg delta )>n   is a term that could be used for acceleration detection , to trigger first SMB at earliest sign of rising glucose. -                                                                             Caution: not possible to use with poor or highly smoothened CGM-values!

A CGM with lots of scatter will put you in a bad spot because, to be on the safe side,  you need to „sandbag“ your definition which delta is surely asign of a started meal. That means:

- your FCL loses additional time, resulting in higher glucose peaks and lower %TIR
- because you cannot use a earlier or smaller delta which could trigger, also without a meal, the SMBs that are supposed to make up for a user bolus in FCL.

Furthermore, first rises after a meal are characterized by **low iob** present. With that in mind, an Automation(#1) for a dinner might look like this:

![8mg jump 130% ioby4](../images/fullClosedLoop02.png)

Automation #1

If conditions apply, the loop would give 1 or 2 SMBs in the next 12 minutes, using a boosted ISF according to the set elevated profile%  (in the example, a 30% boost of insulinReq). As long as these conditions apply, the Automation rule extends by another 12 minutes. A low carb meal might have slower bg rise characteristics. It would benefit from another Automation (#2) that kicks in at lower delta, and gives a weaker insulin boost.

![>=5mg jump 115%, iob<5.5](../images/fullClosedLoop03.png)

The same Automation probably will kick in also in higher carb meals, once the steep rise as defined in Automation#1 is over.

You need to “stage” these two (+ maybe a third) Automations to fit with what you see in your meal (variety) => Setting appropriate jump sizes, iob citeria, and amplifications will be an iterative tuning process.  Also, if you include appropriate time slots in the Conditions, you can easy do different Automations for your different daily meals times (breakfast, lunch, dinner).

Note that, still in the rise phase (!), the "overflow" of  iob must be blocked so that the late effects of the **insulin** (the "**tail**" after 3-5 hours) will not exceed the braking capacity of the loop through zero-temping (“taking away” basal, to reduce hypo risk).

With large meals there is **sometimes a second increase**. By then, usually also the iob has dropped a bit, and the more aggressive Automations take effect again. (Check that your iob condition in Automation #2 is not set too low to for this to happen).

Soon after a few intial SMBs were given comes a **balanced phase** where moderate addition of insulin should cover the additional carbs absorbed. (Except in low carb meals, where the loop might see too weak of a bg rise, and go into zero-temping right away already now).

The AndroidAPS main screen (where you always see cob=0 in UAM full loop) might in this phase ask for more carbs required. In UAM mode that simply means, you could make a very rough plausibility check: Is that amount of carbs likely in your body, un-absorbed from your meal just about an hour ago (about which you gave your loop no info)?


### iob threshold

Often, Automations #1 and/or #2 make iob rise to heights that typically are enough for **your** meals. For personalized tuning, look in your hybrid closed loop data at the max iob values that occur with well-managed meals (often: your meal bolus), and above which magnitude a hypo (or requirement for extra carbs) occured at the end.

Sensible **iob thresholds** at which you should reduce aggressiveness of your loop, might not be the same for every meal. But especially in the first hour after the start of a meal, which is very crucial in the UAM mode, these data differ little for me: Just about 30g/hour get absorbed, and to define a meaningful iob independent of the exact meal can be possible.

For exceptional meals, or to lower it if sports follow, the iob threshold can rapidly be set differently in your Automation.

Automation(#3),”iobTH reached => SMBs off”, is defined to end (or pause, until another wave of carb-related rise hits) the aggressive SMB boosting.

![iob >5.5...111 TT = SMBs off 16m](../images/fullClosedLoop04.png)

Automation #3

It tells the loop that above your set **iob threshold** it's better not to use any more SMBs

- The given example does that by setting TT=111 (which is kind of arbitrary; pick a number>100 that you easy recognize as your automated SMB shut-off)
- In AndroidAPS Preferences/ SMB Settings generally do not allow SMB at elevated target).                                                                                                                   
  The insulinReq will then have to be delivered with much more caution through the bottleneck of TBRs

**Caution: Automation #3 only works when there is no active TT.** So, in case you worked with EatingSoonTT, it must be ended by that time, which usually should be 30-40 mnutes after meal start.

One idea how to do this automatically would be an Automation that ends an eventually running EatingSoonTT under the condition that iob >65% * iobTH.
> Ways to work with EatingSoonTT Some loopers set (by pressing the TT button, or automated via a lowered profile glucose target if eating time slots are fairly fixed) an EatingSoonTT roughly an hour or more before meal start, just to guarantee a low starting glucose and a bit of positive iob. But, assuming the FCL is anyways always en route towards target, this might not yield much and you might rather just define an Automation that sets an EatingSoonTT at recognition of meal start (glucose delta, or acceleration = delta > avg delta). A low TT is important in this stage because any SMB is calculated by your loop using (predicted glucose minus TT)/sens, so a small TT makes the resulting insulinReq. bigger.

After the first boosted SMBs were given, your set iobTH and Automation #3 should strike a good balance of limiting the glucose peak, but also not leading to a hypo after the meal.

In case for instance your breakfast totally deviates in carb content from your average dinner, you may benefit from defining Automations that apply in the respective times of day, and have different iobTH (possibly also different deltas, and different %profile set). Both, you with defining your meal spectrum and settings (notably, iobTH), and the loop managing the unfolding bg curve, must accept certain peak heights for reducing hypo danger towards the end of the DIAs from SMBs.

### Stagnation at high bg values

In case, after a “rich” meal, a long-lasting stagnation with **high glucose** value is seen, Automation #6 (below, left),"post-meal High”, helps deal with fatty acid resistance: After multi-course meals, large greasy pizza, raclette evening, the glucose curve can form two humps or, very often, an elongated high plateau.

![iob >5.5...111 TT = SMBs off 16m](../images/fullClosedLoop05.png)

Automation #4

![iob >5.5...111 TT = SMBs off 16m](../images/fullClosedLoop06.png)

Automation #5

Automation #5, “post-meal High”, is also suitable in hybrid closed loop.

In addition, a termination-Automation #5, “Stop pmH”, is needed, so that the aggressiveness of the insulin administration is reduced, as soon as the glucose value is falling. (However, often the loop will limit more insulin anyways for hypo prevention because predicted glucose runs low already).

### Hypo prevention

The core problem here is of course that the UAM full closed loop (without carb inputs) can have **no idea how many g of carbs are still available** for absorption, and might use up that “tail” insulin, without you going into a hypo from it.

Using boosted SMBs, the loop “caught up” with what we formerly did with a meal bolus. But, **at the “tail” end of insulin activity, hypo prevention can become a serious topic**.

In preparation for your full closed loop Automations, you therefore must take a closer look at the **time course of iob** for typical meals, and judge **when it becomes too much, and how you can catch that by tuning your Automations**. That is definitely possible, because we have several adjusting screws. However, it can get a bit tricky to get it “right”, so it reasonably works for your variety of meals.

Generally, it makes no sense to keep optimising settings for one kind of meal. Once you have a good-enough setting e.g. for one kind of lunch you frequently have, test how this works with other kinds, and how you would “compromise”.

In order to prevent hypo in post-meal hours 3 – 5, reduce the aggressiveness before too much iob comes together. Specific approaches:

- Become milder and milder with the ISF already during the glucose rise, as in Automation examples #1 and #2 given.
- Define the iob threshold, from which the loop is made significantly more cautious (Automation #3, above). Note this iob can be exceeded, by the last SMB before it went into effect; and then further by TBRs if the loop sees insulinReq. Carbs getting absorbed will provide a counter-movement towards lower iob.
- The iob threshold could be differentiated according to meals: By cloning the automations, you could easily differentiate for breakfast, lunch, and dinner time slots (or even for geo-locations, like company cafeteria, or at mother-in-law etc)  
  >You could differentiate within these time slots even further by setting different TTs for low carb vs. fast carb, etc., and thus be able to “code for” different meal classes that may occur at this time of day, and call them up with Automations specially tuned for them.(That is probably not not necessary, unless your diet habits do vary a lot.).

Before a special meal challenge, you can raise your iob threshold, or make another change in any of your Automations within under 5 seconds, right from your AndroidAPS main screen (burger top left; or Automations tab, depending how you configured your AAPS.).

The hypo danger some hours after the meal is essentially a question of whether your meal composition was such, that the **insulin tails from fighting the bulk of carbs** will be **consumed by “extended carbs”** (excessive/delayed carb absorption/protein/fat/fibre).

Over time you will learn patterns, tune your Automations – maybe even adjust your eating habits a bit, e.g. just enjoy the occasional late little(!) snack that may help maintain a good **balance of insulin activity and carb absorption** for the **entire** meal (digestion, absorption) time, and thus make life for your loop (and for yourself) easier.

### Order of prorgrammed Automations

Problems can arise with overlapping definitions in Automations. Example: The problem is that delta >8 is also delta >5, i.e. there may be two competing Automations. What does the loop do then? It always decides according to the sequence in which your Automations appear when looking into the burger menue / AndroidAPS main screen.  Example: The delta > +8 rule must come first (and launch the strongest boost if all conditions apply); then comes the check for delta >5 (and a milder response). If done the other way round, the delta>8 rule would never come into effect because the delta>5 already applies, case closed.
> Tip for "house cleaning" in your Automations: Order changes are very easy to make. If you press on a list entry in AAPS/Automations, you can move the Automation in question to another position. So you can quickly (re-)arrange.

Also it is very easy and quick to adjust any conditions or actions at any time, within seconds, just on your AndroidAPS smartphone; for instance if you head into a very special eating event. (But don’t forget to set it back to normal on/for the next day).

## Устранение неполадок

### How to get back into Hybrid Closed Loop

You can un-click the top boxes in the Automations related to your FCL, and go back to bolussing for meals and making carb inputs again.  You may have to go to AAPS Preferences/Overview/Buttons and get your Buttons “Insulin, Calculator…”  back for your AAPS HCL main screen. Be aware that now it is again up to you to bolus for meals

It can also be wise to do FCL only for meals (time slots) where Automations are fully defined and clicked on, and un-klick only those for the other meal times when you like to do hybrid looping (or have none defined yet, in your transition period).

For instance, it is perfectly possible, without any extra steps after Automations for dinner time slots are defined, to do FCL only for dinners, while breakfast and lunch are done in hybrid closed loop as you are used to.


### Are the pre-conditions for FCL still given?

- Is the basic profile still correct?
- Has the CGM quality deteriorated
- etc (see section pre-requisites)

### Glucose goes too high

- Meals are not recognized asap
    - Check regarding Bluetooth (in)stability
    - Check whether you could set smaller deltas to trigger first SMB
    - Experiment with an aperetif, soup acouple of minutes before meal start
- SMBs are too weak
    - Check order of Automations (e.g.: big delta before small delta)
    - Check (real-time) in SMB tab whether hourly profile basal and set minutes (max 120) limit allowed SMB size
    - Check (real-time) in SMB tab whether %profile must  be set bigger
- If all your settings are at the limit, you may have to live with the temporary high, or adjust your diet.
> If you are ready to use AAPS dev variants, you could also employ one that allows further expanded SMB sizes. Some users also resort to using a small pre-bolus in their “FCL”. However, this interferes with how glucose curve and hence detection of rises and triggered SMBs behave, and is therefore not easy to implement with convincing overall benefit.
- An important observation by pilot users was, that how your glucose and iob curves approach meal start matters a lot regarding how you peak from carbs: Going down (e.g. towards a set EatingSoonTT), building some iob, and curving already towards strong positive acceleration seems very helpful to keep peaks low.

### Glucose goes too low

- Meals are falsely recognized
    - Check whether you could set bigger deltas to trigger first SMB
    - Click “User action” in the related Automation, so in the futurte you can ad hoc decide to block execution of the Automatiojn if not meal-related
    - To prevent snacks from triggering SMBs as for a meal, set a TT>100 when snacking (as you would do in sports and for anti-hypo snacks, anyways)
- SMBs deliver overall too much insulin
    - Check (real-time) in SMB tab whether SMB range extention must be set smaller
    - Check (real-time) in SMB tab whether %profile must  be set smaller
    - SMB delivery ratio probably can be set smaller. Note in this case, it works across the bord for all SMBs (all time slots),
- Problems with insulin “tail” after meals
    - You may need to take a snack (seeing hypo prediction) or glucose tablets (if already in hypo zone). But note that the carbs required the loop might tell you at some point are very likely exaggerated as the loop has absolutely zero info on your carb intake (while you may be able to guess how mnuch more, incl. from fats and proteins) is still waiting to be absorbed.
    - A valueable information would be whether the problem originates mostly in the bg rise phase already. Then setting a lower iobTH might be an easy remedy.
    - If the need for additional carbs happens frequently, note down how many grams were needed (not counting what you eventually took too much and required extra insulin again).  Then use your profile IC value to estimate how much insulin less the SMBs should have delivered, and go with this info into your tuning (regarding the % profile in the Automations, or maybe also your set iobTH). This may relate to the SMBs given when glucose was high, or also extending regarding also the SMBs during the glucose rise.
    - It could well be that you simply have to accept higher glucose peaks for not going low. Or change diet to something with lower amounts of carbs, and higher amount of proteien and fats.


### More info

Make sure you stay in touch with other FCL users.

Discussion Full Closed Loop using Automations:

- English:   [Discord Channel](https://discord.gg/ChXj8BaKwA)

- German:  [German Looper Community](https://de.loopercommunity.org/t/ueber-die-kategorie-full-loop/10107)
