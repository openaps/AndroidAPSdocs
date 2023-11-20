# Подготовка к пользованию AAPS

## А. Обзор документации ААПС

Добро пожаловать. Эта документация проведет пользователей по всем аспектам самостоятельно собранной системы искусственной поджелудочной железы Android Artificial Pancreas System (**AAPS**), которую также иногда называют "петля".

[Здесь](index.md) можно найти расширенный указатель документации, оглавление слева поможет найти нужный раздел. [Глоссарий](Getting-Started/Glossary.md) объясняет незнакомые термины.

(подготовка-безопасность-приоритет) =

## Безопасность прежде всего
“С большими возможностями приходит большая ответственность…"

### Техническая безопасность
**AAPS** имеет широкий набор функций безопасности. Они накладывают ограничения, которые поэтапно устраняются прохождением [Целей](Usage/Objectives.md), включающих тестирование определенных параметров и ответы на вопросы с несколькими вариантами ответов. Важные функции системы **AAPS** становятся доступны после успешного завершения Целей. This process allows the user to migrate safely in stages from Open Loop to Closed Loop, while learning about the different features of **AAPS**.

[Цели](Usage/Objectives.md) были разработаны для максимально полного знакомства с системой **AAPS**, с учетом типичных ошибок и общих тенденций, которые разработчики **AAPS** наблюдали у новых пользователей. Ошибки возникают из-за неопытности новичков и их желания начать работу с **AAPS** как можно быстрее, без изучения необходимых материалов. [Цели](Usage/Objectives.md) должны минимизировать эти ошибки.

### Медицинская безопасность
:::{admonition}{предостережение} Избегайте необратимого нарушения зрительной и неврологической функции
:class::класс: опасность Рекомендуется соблюдать осторожность при быстром улучшения контроля глюкозы в крови и снижения уровня HbA1c
:::

Важным фактором безопасности является то, что **быстрое снижение уровня HbA1c и улучшение контроля глюкозы у людей с привычным повышением ГК, могут привести к необратимым нарушениям**. Многие люди с диабетом не знают об этом, и не все медработники информируют своих пациентов об этой проблеме.

Нарушения могут включать **потерю зрения и необратимую нейропатию**. Этого можно избежать, снижая средний уровень глюкозы постепенно. Если в настоящее время у вас повышенный уровень HbA1c и вы переходите на **AAPS** (или любую другую замкнутую систему), _обсудите_ потенциальные риски с эндокринологом и согласуйте с ним график безопасного снижения целевых показателей гликемии. Вы можете изначально задать более высокие цели в **AAPS** (в настоящее время наиболее высокая цель 10 ммоль/л.) но можно также применять более слабый профиль, а затем постепенно, в течение месяцев, понижать цель.

#### Как быстро можно понижать HbA1c без риска необратимых последствий?

В одном ретроспективном [исследовании](https://pubmed.ncbi.nlm.nih.gov/1464975/) с участием 76 пациентов сообщалось, что риск прогрессирования ретинопатии увеличивался в 1,6 раза, 2,4 раза и 3,8 раза, если уровень Hba1C снижался на 1%, 2% или 3% соответственно в течение 6 месяцев. Было высказано предположение, что **" чтобы предотвратить развитие ретинопатии, снижение HbA1c в течение любого 6-месячного периода не должно превышать 2%,... Слишком быстрое снижение может вызвать тяжелое или преходящее ухудшение ретинопатии."**

N.B. Если вы привыкли к другим единицам HbA1c (ммоль/л вместо %), нажмите [здесь](https://www.diabetes.co.uk/hba1c-units-converter.html) для вызова калькулятора HbA1c.

В другом ретроспективном [обследовании](https://academic.oup.com/brain/article/138/1/43/337923) 954 пациентов исследователи отмечали:

**При снижении HbA1c на 2–3% в течение 3 мес существовал 20% риск развития нейропатии, при снижении HbA1c на > 4% в течение 3 мес риск развития диабетической нейропатии превысил 80%»**

В [комментарии](https://academic.oup.com/brain/article/138/1/2/340563) к этой работе говорилось, что во избежание осложнений **целью должно стать снижения гликированного гемоглобина на <2% за 3 месяца**. Другие обзоры на эту тему можно найти [здесь](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6587545/pdf/DOM-21-454.pdf) и [здесь](https://www.mdpi.com/1999-4923/15/7/1791).

Общепризнанно, что _недавно_ диагностированные больные диабетом 1 типа (у которых очень часто высокий HbA1c при диагнозе, до начала инсулиновой терапии), как представляется, могут быстро снизить свой HbA1c сразу же после диагностики, не столкнувшись с рисками, потому что у них не было длительного превышения нормы гликемии. Тем не менее, этот вопрос следует обсудить с врачом.

### Не использовать SGLT-2 ингибиторы

{admonition}(предостережение) НЕ ПОЛЬЗУЙТЕСЬ ингибиторами SGLT-2  
:class:опасность ингибиторы SGLT-2, также называемые глифлозинами, подавляют реабсорбцию глюкозы в почке. Глифлозины непредсказуемо снижают уровень сахара в крови, поэтому их НЕЛЬЗЯ принимать на фоне работы систем замкнутого цикла, таких как AAPS! Существует существенный риск возникновения кетоацидоза и/или гипогликемии! Сочетание этого препарата с системой, которая снижает скорость базала для увеличения ГК является особенно опасным.

В общем виде:
- **Пример 1: риск Гипо**
> Во время обеда применяется **AAPS** для болюса на основе 45г (в оригинале "глюкозы", наверное, имелись в виду углеводы - прим. перев.). Проблема заключается в том, что AAPS не оповещен о работе ингибиторов, которые поглощают некоторое количество углеводов, что в свою очередь приводит к повышенному уровню инсулина в организме по сравнению с потребностью, в результате вызывая гипогликемию.

- **Пример 2: риск Кетоацидоза**
> Ингибиторы поглощают часть углеводов в фоновом режиме, приводя к понижению уровня ГК. **AAPS** автоматически инструктирует помпу понизить подачу инсулина, включая базальный. Со временем это может привести к тому, что ГК будет оставаться ниже целевого значения до того момента, когда в организме не окажется  достаточно фонового инсулина, чтобы поглощать  углеводы, что, в свою очередь, приведет к Кетоацидозу. Обычно, Кетоацидоз может возникнуть у пациентов с диабетом 1 типа из-за поломки помпы, которая могла бы вызвать звуковое оповещение на телефоне из-за высокой ГК. Однако, при приеме глифлозинов опасность заключается в том, что не будет никаких оповещений ААПС, поскольку помпа продолжает работать и ГК потенциально остается в целевом диапазоне.

Распространенные названия ингибиторов SGLT-2 включают: Invokana, Farxiga, Jardiance, Glyxambi, Synjardy, Steglatro, и Xigduo XR и др.
:::


### Главные принципы работы системы ИПЖ на базе AAPS

The key principles and concepts of looping must be understood before using **AAPS**. Это достигается чтением документации **AAPS** и прохождением целей, которые направлены на безопасную и эффективную работу **AAPS**. Объем документации **AAPS** может вначале ошеломить, но терпение и правильный подход приведут вас к цели!

Скорость прогресса зависит от индивидуума, но имейте в виду, что выполнение всех задач обычно занимает от 6 до 9 недель. Многие начинают создавать, устанавливать и настраивать **AAPS** задолго до начала пользования. Для содействия этому система имеет "виртуальную помпу", которая может помочь при прохождении начальных целей **AAPS** без реальной подачи инсулина. Ниже приводится временная шкала знакомства с системой, имейте в виду, что к цели 8 **AAPS** вы начнете работать в замкнутом цикле; последующие цели добавляют дополнительные функции, такие как команды **SMS** и автоматизацию ****, но не обязательны для главных задач **AAPS**.

**AAPS** требует упреждающего подхода, готовности гибко корректировать его работу. Невозможно научиться играть в спортивные игры, только изучая правила, То же самое можно сказать и о **AAPS**.

#### Планируйте задержки и незначительные затруднения при настройке и запуске AAPS

На предварительных стадиях работы с **AAPS**, есть вероятность столкнуться с трудностями при настройке всех компонентов цикла, а также при отладке настроек. Некоторые шероховатости не могут быть устранены до повседневного использования **AAPS**, но помощь всегда доступна в группе Facebook и на Discord. Планируйте грамотно и выбирайте "хорошее" время, как например тихие утренние часы в выходные (т.е. не поздно ночью или когда вы устали, или перед большим совещанием или командировкой) для исправления неполадок.

#### Совместимость с технологиями

**AAPS** совместим только с определенными типами инсулиновых помп, систем мониторинга и телефонов; некоторые технологии могут быть недоступными в каких-то странах. Чтобы избежать огорчений, прочтите разделы [мониторинг (CGM)](Configuration/BG-Source.md), [помпа](Getting-Started/Pump-Choices.md) и [телефон](Hardware/Phoneconfig.md).

#### Время сборки приложения и переход к полному циклу

Время создания **AAPS**зависит от опыта и технических способностей. Обычно у неопытных пользователей сборка **AAPS** может занять до полудня, а иногда и целый день (при поддержке от сообщества). Этот процесс значительно ускорится при сборке новых версий **AAPS**, когда появится больше опыта.

Для помощи при сборке существуют специальные разделы:

- Вопросы и ответы при часто возникающих ошибках (в [разделе ](Getting-Started/FAQ.md)K);

- “[How to install AAPS](Installing-AndroidAPS/Building-APK.md)? (Section D) which includes [Troubleshooting](Usage/troubleshooting.md) Subsection.

Время, потраченное на переход к работе в замкнутом цикле, зависит от индивидуальности, но примерную разбивку по времени перехода на AAPS можно найти ([здесь](how-long-will-it-take))


#### Хранилище ключей &  файл экспорта настроек конфигурации

«Хранилище ключей» (файл с расширением.jks) - это защищенный паролем файл, уникальный для вашей копии **AAPS**. Телефон использует его, чтобы не дать посторонним без ключа обновить ваш экземпляр программы. Короче говоря, в рамках сборки **AAPS** вам следует:

1.  Save the your keystore file (.jks file used to sign your app) in a safe place;

2.  Keep a note of your password for your keystore file.

Это гарантирует, что каждый раз при создании новой версии **AAPS** можно использовать один и тот же файл ключей. В среднем каждый год будет требоваться 2 обновления AAPS.

Кроме того, **AAPS** дает возможность [экспортировать все настройки конфигурации](Usage/ExportImportSettings.md). Это гарантирует, что вы можете безопасно восстановить вашу систему при смене телефонов, обновлении/переустановке приложения с минимальными затратами времени. 

#### Устранение неполадок

Не стесняйтесь связаться с сообществом AAPS, даже если уверены в том, что у вас глупый вопрос! Всем пользователям с опытом разного уровня рекомендуется при необходимости задавать вопросы. Вследствие большого числа пользователей **AAPS**, ответы обычно даются быстро, как правило, в течение нескольких часов.

##### [ask our facebook group](https://www.facebook.com/groups/AndroidAPSUsers/)

##### [ask our discord channel](https://discord.com/channels/629952586895851530/629954570394533889)

### Обзор раздела

Документация ААПС состоит из следующих разделов:

#### [What do I need?](Module/module.md)

This explains AAPS’ compatibility with CGMs (Continuous Glucose Monitors) and insulin pumps. It also provides a guide on the correct assembly of an AAPS system to ensure that it functions correctly in everyday life.

#### [Как собрать и установить AAPS](Installing-AndroidAPS/Building-APK.md)

This section is the manual for building the AAPS. Для успешной сборки **AAPS** требуется строгое соблюдение пошаговых инструкций.  Please take your time.

#### [Настройка компонентов]

Здесь объясняется, как правильно интегрировать каждый из компонентов **AAPS**, а также настроить их на совместную работу. Все компоненты перечислены в соответствующих разделах, в том числе: [Мониторинг (CGM/FGM)](Configuration/BG-Source.md), [Помпы](Getting-Started/Pump-Choices.md) и [Телефоны](Hardware/Phoneconfig.md)

#### [Configuration](Configuration/Config-Builder.md)

This explains how to set and configure your ‘Profile’, ‘Insulin’, ‘BG Source’, ‘Pump’, ‘Sensitivity Detection’, ‘APS’, ‘Loop’, ‘Treatments’.

#### [Использование AAPS](Getting-Started/Screenshots.md)

В этом разделе представлена разбивка функций AAPS со снимками экранов.

#### [General Hints](Usage/Timezone-traveling.md)

Полезные приемы при решении проблем, такие как смена часовых поясов и перехода на сезонное время (_т. е._ Вперед/ - Назад).

#### [AAPS для детей](Children/Children.md)

Раздел предназначен для родителей или попечителей, желающих создать AAPS для своего ребенка, или взрослым, рассчитывающим на подстраховку. Здесь также описываются дополнительные функции, необходимые для удаленного и безопасного управления AAPS.

#### [Устранение неполадок](Usage/troubleshooting.md)

Этот раздел содержит ссылки для решения проблем при создании или использовании **AAPS**.

#### [Часто задаваемые вопросы (FAQ)](Getting-Started/FAQ.md)

В этом разделе рассматриваются конкретные вопросы, которые обычно возникают при создании или использовании **AAPS**.

#### [Глоссарий](Getting-Started/Glossary.md)

This contains a list of the acronyms (or short-term names) or defined terms developed specifically for AAP (for instance, the terms ‘ISF’ or ‘TT’ have special meanings in AAPS).

#### [Куда обращаться за помощью](Where-To-Go-For-Help/Background-reading.md)?

This section is aimed to provide new users with links on resources in order to get help including accessing community support made up of both new and experienced users who can clarify questions, and resolve the usual pitfalls that come with AAPS.

#### [Раздел для медицинских работников](Resources/clinician-guide-to-AndroidAPS.md)

Этот раздел создан [специально для медработников](Resources/clinician-guide-to-AndroidAPS.md) которые хотят подробнее познакомиться с AAPS и технологией ИПЖ с открытым кодом. Также в предисловии имеются директивы [как разговаривать с эндокринологом](introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team).

## Что мы будем собирать и устанавливать?

### Приложение для телефонов Android: **AAPS**

**AAPS** - приложение, работающее на смартфонах Android & устройствах. Вы самостоятельно создадите приложение **AAPS** (файл. apk), используя пошаговое руководство, загрузив исходный код **AAPS** из Github и попутно установив необходимые программы (Android Studio, GitHub desktop), результатом чего станет собственная копия **AAPS**. После чего приложение **AAPS** будет перенесено на смартфон (по электронной почте, USB кабелю _и т. д._) и установлено.

### Сервер отчетности: NightScout (Tidepool*)

Чтобы в полной мере воспользоваться функционалом **AAPS**, необходимо настроить сервер Nightscout. Его можно создать самостоятельно или же оплатив небольшую комиссию за установку (например здесь https://t.me/nightscoutRU). Nightscout используется для сбора данных от **AAPS** и может генерировать подробные отчеты по мониторингу ГК и инсулинотерапии за выбранные периоды времени. Кроме того, опекунам предоставляется возможность работать с Nightscout на удаленной связи с приложением **AAPS** для контроля за диабетом их ребенка. Такие функции удаленной связи включают в себя мониторинг уровня ГК и инсулина, удаленную подачу болюсов (с помощью смс) и информирование о приемах пищи. Анализ эффективности компенсации диабета только на основе мониторинга CGM отдельно от данных помпы – подобно вождению машины, где водитель слепой а пассажир описывает дорогу. (*) (начиная с 26 июня-2023 в качестве альтернативы Nightscout для **AAPS**версии 3.2 и далее будет доступен ресурс Tidepool.



### Обслуживание системы **AAPS**

И **Nightscout** и **AAPS** должны обновляться примерно один раз в год по мере выхода улучшенных версий. Вы получите пошаговые инструкции о том, как это сделать на предварительно сконфигурированном компьютере. In some cases, the update can be delayed, in others it is strongly recommended or considered essential for safety. Уведомления об этих обновлениях будут предоставляться в группах Facebook и на серверах Discord. В примечаниях к выпуску будет разъясняться что нового в версии. Вероятно, многие люди будут задавать схожие вопросы во время обновления, но у всех будет поддержка.


## Сколько времени это займет?

Как уже упоминалось ранее, работа с **AAPS** похожа на «путешествие», требующее вложений в виде вашего личного времени. It is not a one-time setup. Текущие оценки построения **AAPS**, установки и настройки программ **AAPS**, мониторинга **CGM** и перехода от незамкнутого цикла к гибридному замкнутому циклу на **AAPS** занимает в целом от 2 до 3 месяцев. Вот как это выглядит:

| Задачи                                                                                                           | Примерное время |
| ---------------------------------------------------------------------------------------------------------------- |:---------------:|
| ознакомительное чтение документации:                                                                             |    1-2 days     |
| настройка компьютера для начала сборки:                                                                          |    2-8 hours    |
| создание сервера Nightscout:                                                                                     |     1 hour      |
| установка приложений для мониторинга (xdrip, самостоятельно собранное приложение Dexcom BYODA или …)             |     1 hour      |
| первоначальная настройка мониторинга->xdrip->AAPS:                                                               |     1 hour      |
| Первоначальная настройка AAPS->помпа:                                                                            |     1 hour      |
| Настройка AAPS->NightScout (только для отчетов):                                                                 |     1 hour      |
| optional (for Parents) - configuring NightScout <-> **AAPS** & NSFollowers:                                      |     1 hour      |
| Цель 1: Настройка визуализации и мониторинга, анализ базальной скорости и коэффициентов                          |     1 hour      |
| Objective 2: Learn how to control AAPS                                                                           |     2 часа      |
| Цель 3: Подтвердите ваши знания                                                                                  |   До 14 дней    |
| Цель 4: Начните с открытого цикла                                                                                |     7 дней      |
| Цель 5: Глубже понимаем работу системы в режиме незамкнутого цикла, включая ее рекомендации по временным базалам |     7 дней      |
| Цель 6: Начинаем замыкать цикл с Low Glucose Suspend (прекращением подачи инсулина на низких сахарах)            |  До 5-14 дней   |
| Цель 7: Настройка замкнутого цикла с постепенным поднятием макс величины IOB и понижением целевой ГК             |    До 7 дней    |
| Цель 8: Настраиваем базал и коэффициенты с последующей активацией auto-sens                                      |  До 7-14 дней   |
| Цель 9: Активация таких дополнительных функций oref1 как супер микро болюс (SMB)                                 |   До 14 дней    |
| Цель 10: Автоматизация                                                                                           |     1 день      |


Once you are fully operational on **AAPS**, you will need to fine tune your setting parameters in order to improve your overall diabetic management.

## Что потребуется:

### Медицинские соображения

Помимо медицинских предостережений в разделе [безопасность](preparing-safety-frist) имеются параметры, зависящие от типа инсулина в помпе.

#### Выбор инсулина

Расчеты **AAPS** основаны на концентрации инсулина 100 ед./мл (как и стандарт для помп). Поддерживаются следующие предустановленные профили инсулинов:

- Быстродействующий Oref: Humalog/NovoRapid/NovoLog
- Ultra-Rapid ORef:  Fiasp
- Lyumjev:

Только для экспериментов/опытных пользователей:
- Свободный от пиков Oref: позволяет самостоятельно определить пик активности инсулина


### Технические вопросы

Цель документации - максимально сократить требуемые технические знания и опыт. Вам понадобится компьютер для создания приложения **AAPS** в Android Studio (пошаговые инструкции). Вам также понадобится настроить сервер в облаке Интернет, несколько приложений для телефонов Android и готовность получить опыт управления диабетом. Этого можно достичь, двигаясь шаг за шагом, проявляя терпение и получая помощь от сообщества **AAPS**. Если вы уже умеете работать в интернете, управлять почтой Gmail, поддерживать компьютер в актуальном состоянии, то создание **AAPS** - вполне посильная задача. Просто не торопитесь.

### Персональные моменты
Understanging and using **AAPS** requires a steep learning curve. Он потребует времени, терпения и значительных усилий, однако в итоге окажется весьма полезным, как это уже доказали 10 000 активных пользователей **AAPS**.

### Смартфоны

#### AAPS и версии Android
Актуальная версия **AAPS**(3.2.0.2) требует телефона на Android с Google Android 9.0 или выше. Если вы рассматриваете покупку нового телефона (по состоянию на июль 2023), предпочтительнее Android 13. Пользователям настоятельно рекомендуется обновлять свою сборку **AAPS** по соображениям безопасности, однако для тех, кому недоступно устройство на Android 9.0 или новее, имеются более ранние версии **AAPS**. Они остаются доступными в нашем [старом репозитории](https://github.com/miloskozak/AAPS) (см. примечания к выпуску устаревших версий).

#### Выбор модели смартфона
Модель, которую вы покупаете, зависит от желаемых функций. Существует две таблицы, в которых приводятся модели совместимых: [смартфонов](https://docs.google.com/spreadsheets/d/1zO-Vf3wv0jji5Gflk6pe48oi348ApF5RvMcI6NG5TnY/edit#gid=2097219952) и [смартфонов и часов](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). Мы приглашаем пользователей обобщать свой опыт работы с устройствами [здесь](https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform).

Сообщить о проблемах с таблицей можно по адресу [hardware@androidaps.org](mailto:hardware@androidaps.org)

Пожертвовать смартфон для тестирования можно, отправив письмо по адресу [donations@androidaps.org](mailto:donations@androidaps.org).

- [Список проверенных телефонов](../Getting-Started/Phones.md)
- [Настройки Jelly Pro](../Usage/jelly.md)
- [Настройки Huawei](../Usage/huawei.md)

Пользователям рекомендуется регулярно обновлять версию Android, включая параметры безопасности. Однако если вы новичок в AAPS или не являетесь техническим экспертом, вы можете отложить обновление телефона до тех пор, пока другие не сделали это, и не подтвердили, что это безопасно, на наших различных форумах.

:::{admonition} (предупреждение) отсрочка обновления телефонов Samsung
:class: (класс) предупреждение У телефонов Samsung есть плохой опыт принудительного обновления, приводящий к проблемам с подключением Bluetooth. Для отключения принудительных обновлений необходимо перевести телефон в "режим разработчика": перейдите в настройки - о телефоне - сведения о ПО - нажимайте на номер сборки 7 раз, пока не разблокируете режим разработчика. Вернитесь в главное меню настроек, и вы увидите новый пункт меню настроек разработчика. Откройте опции разработчика и прокрутите окно, чтобы найти автоматическое обновление системы и выключить его
:::

:::{admonition}(предупреждение) Потенциальная проблема защиты Google Play
:class:(класс): предупреждение Имеется несколько сообщений о принудительном (каждое утро) выключении **AAPS** со стороны Google Play Protect. Если это произойдет, следует перейти в настройки Google Play и отключить “Google Play Protect”. Это касается не всех моделей и не всех версий Android..
:::

## Введение в профиль AAPS

### **Что такое профиль AAPS?**

Профиль AAPS представляет собой набор из пяти ключевых параметров, которые определяют, как AAPS подает инсулин на основе данных с сенсора. AAPS имеет несколько _дополнительных_ изменяемых параметров (например, настройки SMB), но их правильное использование зависит от профиля AAPS. Профиль ААПС включает в себя: продолжительность действия инсулина (DIA), целевые показатели ГК, скорость базального инсулина, (BR), коэффициент чувствительности к инсулину (ISF) и углеводный коэффициент (IC или ICR). Снимки экрана AAPS с _примером_ профиля показаны внизу. Пожалуйста, обратите внимание, этот профиль имеет большое количество точек времени. Когда вы начинаете AAPS, профиль будет намного проще. Профили значительно различаются от человека к человеку. Примеры профилей AAPS для маленьких детей, подростков и взрослых см. в следующем разделе, посвященном оптимизации [профиля](link).

#### **Время действия инсулина (DIA)**
The duration of insulin action is set to a single value in AAPS, because your pump will continually infuse the same type of insulin. Остальные четыре параметра могут иметь разные значения, при необходимости изменяться в течение 24 часов.

#### **Целевая гликемия**
Цели ГК устанавливаются в соответствии с личными предпочтениями. Например, если вас беспокоят ночные гипо, с 19: 00 до 7: 00 можно установить цель чуть выше - на 6,5 ммоль/л. Если вы хотите убедиться, что у вас достаточно активного инсулина (IOB) утром перед болюсом на завтрак, можно установить нижнюю цель в 4. ммоль/л с 7 до 8 утра. Цель гликемии, особенно если она краткосрочна (менее 4 часов), не должна быть *фактическим значением*, которого вы добиваетесь. Скорее, это хороший способ сообщить алгоритму AAPS быть более или менее агрессивным, при этом сохраняя уровни глюкозы в целевом диапазоне. На рисунке **ниже** показан пример того как в профиле AAPS можно установить продолжительность действия инсулина DIA и целевые значения гликемии.

![24-07-23, profile basics - DIA and target](./images/f3904cc3-3d9e-497e-a3b6-3a49650053e6.png)


For the final three parameters, basal rates (BR), insulin sensitivity factors (ISF) and insulin-to-carb ratios (IC or ICR), the absolute values and trends in your insulin requirements vary significantly from person to person, depending on your biology, gender, age, fitness level etc. as well as shorter term factors like illness and recent exercise. For more guidance on this, the book [“Brights Spots and Landmines”](https://brightspotsandlandmines.org/Bright_Spots_and_Landmines_by_Adam_Brown.pdf) by Adam Brown is an excellent book to read.

#### **Basal rates**

Your basal rate of insulin (Units/hour) provides background insulin, keeping your glucose levels stable in the absence of food or exercise.

Accurate basal rates enable you to wake up in range, and to skip meals - or eat - earlier or later in the day, without going high or low. The insulin pump delivers small amounts of rapid acting insulin every few minutes, to keep the liver from releasing too much glucose, and to move glucose into body cells. Basal insulin usually makes up between 40 - 50% of your total daily dose (TDD), depending on your diet, and typically follows a circadian rhythm, with one peak and one valley in insulin requirements over 24 hours. For more information, chapter 23 of [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) by Gary Scheiner is very useful.

Most type 1 diabetes educators (and people with type 1 diabetes!) agree that you should work on getting your basal rates correct, before attempting to optimise your ISF and ICR.

#### **Insulin sensitivity factor (ISF)**

The insulin sensitivity factor (sometimes called correction factor) is a measure of how much your blood glucose level will be reduced by 1 unit of insulin.

**In mg/dL units:** If you have an ISF of 40, each unit of insulin will reduce your blood glucose by approx. 40 mg/dL (for example, your blood glucose will fall from 140 mg/dL to 100 mg/dL).

**In mmol/L units:** If you have an ISF of 1.5, each unit of insulin will reduce your blood glucose by approx. 1.5 mmol/L (for example from 8 mmol/L to 6.5 mmol/L).

From these examples you can see that the _smaller_ the ISF value, the less sensitive you are to insulin. So if you reduce your ISF from 40 to 35 (mg/dl) or 1.5 to 1.3 (mmol/L) this is often called strengthening your ISF. Conversely, increasing the ISF value from 40 to 45 (mg/dl) or 1.5 to 1.8 mmol/L) is weakening your ISF.

If your ISF is too strong (small value) it will result in hypos, and if it is too weak (large value), it will result in hyperglycemia.

A basic starting point for determining your daytime ISF is to base it on your total daily dose (TDD) using the 1,700 (94) rule. More detail is given in Chapter 7 of [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) by Gary Scheiner.

1700 (if measuring in mg/dl) or 94 (mmol/L)/ TDD = approx ISF.

Example: TDD = 40 U Approx ISF (mg/dl) = 1700/40 = 43 Approx ISF (mmol/L) = 94/40 = 2.4

See the **figure below** for an example of how the basal rates and ISF values could be set in an AAPS profile.

![24-07-23, profile basics - basal and ISF](./images/55c8ed24-e24e-4caa-9c17-294fa93cb84a.png)

#### **Insulin to Carb ratio (ICR)**

The ICR is a measure of how many grams of carbohydrate are covered by one unit of insulin.

Some people also use I:C as an abbreviation instead of ICR, or talk about carb ratio (CR).

It is common to have different ICR at different times of day due to hormone levels and physical activity. Many people find they have their lowest ICR around breakfast time. So, for example, your ICR could be 1:8 for breakfast, 1:10 for lunch and 1:10 for dinner, but these patterns are not universal, and some people are more insulin resistant at dinner time, and require a stronger/smaller ICR then.

For example, a 1-to-10 (1:10) insulin-to-carb ratio means that you take 1U of insulin for every 10 grams of carbs eaten. A meal of 25g carbs would need 2.5U of insulin.

If your ICR is weaker, perhaps 1:20, you would only need 0.5U of insulin to cover 10 g of carbs. A meal of 25g of carbs would need 25/20 = 1.25U of insulin.

As shown in the **figure below**, when entering these values into an AAPS profile, we just enter the final part of the ratio, so an insulin-to-carb ratio of 1:3.5 is entered simply as “3.5”.

![24-07-23, profile basics - ICR](./images/7741eefb-cae5-45c5-a9e5-8eae5ead3f48.png)


#### **Why should I try to get my profile settings right? Can’t the loop just take care of it?**

A hybrid closed loop _can_ attempt to make insulin delivery adjustments to minimise poor glycemic control that results from having incorrect profile values. It can do this, for example, by withholding insulin delivery if you are hypo. However, you can achieve much better glycemic control if your profile settings are already as close as possible to what your body needs. This is one of the reasons that AAPS uses staged objectives to move from open loop pumping towards hybrid closed loop. In addition, there will be times when you need to open the loop (sensor warmups, sensor failure _etc._), sometimes in the middle of the night, and you will want to have your settings right for these situations.

If you are starting with AAPS after using a different open or closed-loop pumping system, you will already have a reasonable idea of what values to use for basal rates (BR), insulin sensitivity factors (ISF) and insulin-to-carb ratios (IC or ICR).

If you are moving from injections (MDI) to AAPS, then it is a good idea to read up on how to make the transfer from MDI to pump first, and plan and make the move carefully in consultation with your diabetes team. ["Pumping insulin"](https://amzn.eu/d/iaCsFa2) by John Walsh & Ruth Roberts and [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) by Gary Scheiner are very useful.

In the \[later section\](operating - optimising - your profile link) we present example profiles, dscuss how to set and optimise the parameters which form your AAPS profile(s), and provide guidance on additional resources such as **Autotune** which aim to automate optimisation of your profile.
