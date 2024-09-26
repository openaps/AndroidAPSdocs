# Подготовка к работе с AAPS

Добро пожаловать. This documentation aims to guide users who are preparing to setup and start using the Android Artificial Pancreas System (**AAPS**).

## Finding your way around the documentation

An **index** and explanation of the documentation structure can be found [here](index.md), you can also reach it by clicking on the **AAPS** symbol at the top left of the documentation. There you will find an overview of the purpose of the different documentation sections. You can also use the headings to the left of this page to navigate through the documentation. Finally, there is a handy search function, directly below the **AAPS** symbol.

Мы стремимся упростить определение как возможностей, так и ограничений **AAPS**. It can be disappointing to discover after investing time in reading the documentation that you might not have a compatible insulin pump or CGM, or that **AAPS** offers different functionality than hoped for.

Многие детали, связанные с опытом, в документации **APPS**становятся понятнее, когда вы на самом деле работаете с **APPS** в режиме реального времени. Точно так же, как трудно освоить вид спорта, только читая правила, необходимо изучать правила безопасной эксплуатации **AAPS**, и применять эти правила, начав использовать **AAPS**.

(подготовка-безопасность-приоритет) =

## Безопасность прежде всего
“С большими возможностями приходит большая ответственность…"

### Техническая безопасность
**AAPS** имеет широкий набор функций безопасности. Они накладывают ограничения, которые поэтапно устраняются прохождением [Целей](Usage/Objectives.md), включающих тестирование определенных параметров и ответы на вопросы с несколькими вариантами ответов. Важные функции системы **AAPS** становятся доступны после успешного завершения Целей. Этот процесс позволяет пользователю изучать возможности **AAPS**. и безопасно перемещаться с незамкнутого на замкнутый цикл системы.

[Цели](Usage/Objectives.md) были разработаны для максимально полного знакомства с системой **AAPS**, с учетом типичных ошибок и общих тенденций, которые разработчики **AAPS** наблюдали у новых пользователей. Ошибки возникают из-за неопытности новичков и их желания начать работу с **AAPS** как можно быстрее, без изучения необходимых материалов. [Цели](Usage/Objectives.md) должны минимизировать эти ошибки.

### Медицинская безопасность
```{admonition} Avoid permanent and painful damage to your eyes and nerves
:class: danger
Caution is advised concerning rapid improvements in blood glucose control and lowering of HbA1c 
```

An important safety consideration is that a **rapid reduction in HbA1c and improved blood glucose control in those who have had elevated glucose levels for some time can cause permanent damage**. Many people with diabetes are unaware of this, and not all clinicans make their patients aware of this issue.

This damage can include **sight loss, and permanent neuropathy (pain)**. It is possible to avoid this damage occuring, by reducing average glucose levels more slowly. If you currently have an elevated HbA1c and are moving to **AAPS** (or any other closed loop system), _please_ discuss this potential risk with your clinical team before starting, and agree a timescale with gradually decreasing safe glucose targets with them. You can easily set higher glucose targets in **AAPS** initially (currently, the highest target you can select is 10.6 mmol/L but you can also maintain a purposefully weak profile if needed), and then reduce the target as the months pass.

#### Как быстро можно понижать HbA1c без риска необратимых последствий?

One retrospective [study](https://pubmed.ncbi.nlm.nih.gov/1464975/) of 76 patients reported that the risk of progression of retinopathy increased by 1.6 times, 2.4 times and 3.8 times if the Hba1C dropped 1%, 2% or 3% respectively over a 6 month period. They suggested that the **"decrease in HbA1c value during any 6-month period should be limited to less than 2% in order to prevent the progression of retinopathy....Too rapid a decrease at the initiation of glycemic control could cause severe or transient exacerbation of the progression of retinopathy."**

N.B. If you use different HbA1c units (mmol/mol rather than %), click [here](https://www.diabetes.co.uk/hba1c-units-converter.html) for a HbA1c calculator tool.

In another retrospective [evaluation](https://academic.oup.com/brain/article/138/1/43/337923) of 954 patients, researchers noted that:

**"With a decrease in HbA1c of 2–3% points over 3 months there was a 20% absolute risk of developing treatment-induced neuropathy in diabetes, with a decrease in HbA1c of >4% points over 3 months the absolute risk of developing treatment-induced neuropathy in diabetes exceeded 80%."**

A [commentary](https://academic.oup.com/brain/article/138/1/2/340563) on this work agreed that to avoid complications **the goal should be to reduce A1c by <2% over 3 months.** You can read other reviews on the topic [here](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6587545/pdf/DOM-21-454.pdf) and [here](https://www.mdpi.com/1999-4923/15/7/1791).

It is generally recognised that _newly_ diagnosed type 1 diabetics (who often have very high HbA1c at diagnosis, before starting insulin therapy) appear to be able to rapidly reduce their HbA1c immediately after diagnosis without encountering these risks to the same extent, because they have not had elevated blood glucose levels for such a sustained period. However, it is still a consideration which you should discuss with your clinician.

### Не использовать SGLT-2 ингибиторы

```{admonition} NO SGLT-2 inhibitors
:class: danger
SGLT-2 inhibitors, also called gliflozins, inhibit reabsorption of glucose in the kidney. Gliflozins incalculably lower blood sugar levels, and so you MUST NOT take them while using a closed loop system like AAPS! There would be a significant risk of ketoacidosis and/or hypoglycemia! The combination of this medication with a system that lowers basal rates in order to increase BG is especially dangerous. 

In a nutshell:
- **Example 1: risk of Hypo**
>During lunch, you use **AAPS** to bolus based on consuming 45g of glucose. Проблема заключается в том, что AAPS не оповещен о работе ингибиторов, которые поглощают некоторое количество углеводов, что в свою очередь приводит к повышенному уровню инсулина в организме по сравнению с потребностью, в результате вызывая гипогликемию.

- **Example 2: risk of Ketoacidosis**
>The inhibitors eliminate some of the carbs in the background causing a reduction in your BG. **AAPS** will automatically instruct the pump to decrease insulin intake  including basal. Со временем это может привести к тому, что ГК будет оставаться ниже целевого значения до того момента, когда в организме не окажется  достаточно фонового инсулина, чтобы поглощать  углеводы, что, в свою очередь, приведет к Кетоацидозу. Обычно, Кетоацидоз может возникнуть у пациентов с диабетом 1 типа из-за поломки помпы, которая могла бы вызвать звуковое оповещение на телефоне из-за высокой ГК. Однако, при приеме глифлозинов опасность заключается в том, что не будет никаких оповещений ААПС, поскольку помпа продолжает работать и ГК потенциально остается в целевом диапазоне.  

Распространенные названия ингибиторов SGLT-2 включают: Invokana, Farxiga, Jardiance, Glyxambi, Synjardy, Steglatro, и Xigduo XR и др.
```


### Главные принципы работы системы ИПЖ на базе AAPS

Основные принципы и концепции должны быть поняты пользователем до начала работы с системой **AAPS**. Это достигается чтением документации **AAPS** и прохождением целей, которые направлены на безопасную и эффективную работу **AAPS**. Объем документации **AAPS** может вначале ошеломить, но терпение и правильный подход приведут вас к цели!

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

- [Как установить AAPS](Installing-AndroidAPS/Building-APK.md)? (Раздел D) который включает секцию [Устранение неполадок](Usage/troubleshooting.md).

How long it takes to get to closed looping depends on the individual, but an approximate timescale for getting to full looping with AAPS can be found ([here](#how-long-will-it-take-to-set-everything-up))


#### Хранилище ключей &  файл экспорта настроек конфигурации

«Хранилище ключей» (файл с расширением.jks) - это защищенный паролем файл, уникальный для вашей копии **AAPS**. Телефон использует его, чтобы не дать посторонним без ключа обновить ваш экземпляр программы. Короче говоря, в рамках сборки **AAPS** вам следует:

1.  Сохранить файл хранилища ключей (файл с расширением .jks, используемый для подписания приложения) в надежном месте;

2.  Запишите пароль для файла хранилища ключей.


Это гарантирует, что каждый раз при создании новой версии **AAPS** можно использовать один и тот же файл ключей. В среднем каждый год будет требоваться 2 обновления AAPS.

Кроме того, **AAPS** дает возможность [экспортировать все настройки конфигурации](Usage/ExportImportSettings.md). Это гарантирует, что вы можете безопасно восстановить вашу систему при смене телефонов, обновлении/переустановке приложения с минимальными затратами времени. 

#### Устранение неполадок

Не стесняйтесь связаться с сообществом AAPS, даже если уверены в том, что у вас глупый вопрос! Всем пользователям с опытом разного уровня рекомендуется при необходимости задавать вопросы. Вследствие большого числа пользователей **AAPS**, ответы обычно даются быстро, как правило, в течение нескольких часов.

##### [ask on the AAPS Facebook group](https://www.facebook.com/groups/AndroidAPSUsers/)

##### [ask on the AAPS Discord channel](https://discord.gg/4fQUWHZ4Mw)





#### [Куда обращаться за помощью](Where-To-Go-For-Help/Background-reading.md)?

Целью этого раздела является предоставление новым пользователям ссылок на ресурсы помощи, включая доступ к поддержке сообщества, состоящего как из новых, так и из опытных пользователей, которые могут ответить на вопросы и устранить ошибки, при работе с AAPS.

#### [Раздел для медицинских работников](Resources/clinician-guide-to-AndroidAPS.md)

Этот раздел создан [специально для медработников](Resources/clinician-guide-to-AndroidAPS.md) которые хотят подробнее познакомиться с AAPS и технологией ИПЖ с открытым кодом. Также в предисловии имеются директивы [как разговаривать с эндокринологом](introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team).

## Что мы будем собирать и устанавливать?

This diagram provides an overview of the key components (both hardware and software) of the **AAPS** system:

![preparing_overview](./images/preparing_images/AAPS_preparing_overview_01.png)


In addition to the three basic hardware components (phone, pump, glucose sensor), we also need: 1) The **AAPS** app 2) A reporting server and 3) A continuous glucose monitor (CGM) app

### 1) An Android Phone Application: **AAPS**

**AAPS** is an app that runs on android smartphones & devices. Вы самостоятельно создадите приложение **AAPS** (файл. apk), используя пошаговое руководство, загрузив исходный код **AAPS** из Github и попутно установив необходимые программы (Android Studio, GitHub desktop), результатом чего станет собственная копия **AAPS**. После чего приложение **AAPS** будет перенесено на смартфон (по электронной почте, USB кабелю _и т. д._) и установлено.

### 2) A reporting server: NightScout (Tidepool*)

Чтобы в полной мере воспользоваться функционалом **AAPS**, необходимо настроить сервер Nightscout. Его можно создать самостоятельно или же оплатив небольшую комиссию за установку (например здесь https://t.me/nightscoutRU). Nightscout используется для сбора данных от **AAPS** и может генерировать подробные отчеты по мониторингу ГК и инсулинотерапии за выбранные периоды времени. Кроме того, опекунам предоставляется возможность работать с Nightscout на удаленной связи с приложением **AAPS** для контроля за диабетом их ребенка. Такие функции удаленной связи включают в себя мониторинг уровня ГК и инсулина, удаленную подачу болюсов (с помощью смс) и информирование о приемах пищи. Анализ эффективности компенсации диабета только на основе мониторинга CGM отдельно от данных помпы – подобно вождению машины, где водитель слепой а пассажир описывает дорогу.  Tidepool is also available as an alternative to Nightscout, for AAPS versions 3.2 and later.

### 3) CGM sensor app

Depending on your glucose sensor/CGM, you will need a compatible app for receiving glucose readings and sending them to **AAPS**. The different options are shown below and more information is given in the [compatible CGMs section](./Configuration/BG-Source.md):

![dexcom_options](./images/preparing_images/AAPS_connectivity_Dex_02.png) ![libre_options](./images/preparing_images/AAPSconnectivity_libre.png) ![eversense_options](./images/preparing_images/AAPS_connectivity_eversense.png)

### Обслуживание системы **AAPS**

И **Nightscout** и **AAPS** должны обновляться примерно один раз в год по мере выхода улучшенных версий. В одних случаях обновление может задержаться, в других - настоятельно рекомендуется т. к. имеет важное значение для безопасности. Уведомления об этих обновлениях будут предоставляться в группах Facebook и на серверах Discord. В примечаниях к выпуску будет разъясняться что нового в версии. Вероятно, многие люди будут задавать схожие вопросы во время обновления, но у всех будет поддержка.

(подготовка-сколько-времениl-займет?)=
## How long will it take to set everything up?

Как уже упоминалось ранее, работа с **AAPS** похожа на «путешествие», требующее вложений в виде вашего личного времени. Это не одноразовая установка. Текущие оценки построения **AAPS**, установки и настройки программ **AAPS**, мониторинга **CGM** и перехода от незамкнутого цикла к гибридному замкнутому циклу на **AAPS** занимает в целом от 2 до 3 месяцев. It is therefore suggested that you prioritise building the **AAPS** app and working through the early objectives as soon as possible, even if you are still using a different insulin delivery system (you can use a virtual pump up to objective 5). Here is an approximate timeframe:

| Задачи                                                                                                           | Примерное время |
| ---------------------------------------------------------------------------------------------------------------- |:---------------:|
| ознакомительное чтение документации:                                                                             |     1-2 дня     |
| настройка компьютера для начала сборки:                                                                          |    2-8 часов    |
| создание сервера Nightscout:                                                                                     |     1 hour      |
| installing CGM app (xdrip or BYODA or …)                                                                         |     1 hour      |
| первоначальная настройка мониторинга->xdrip->AAPS:                                                               |     1 hour      |
| Первоначальная настройка AAPS->помпа:                                                                            |     1 hour      |
| Настройка AAPS->NightScout (только для отчетов):                                                                 |     1 hour      |
| необязательный (для родителей) - настройка NightScout <-> **AAPS** & фоллоуэр (ведомый) NS:                      |     1 hour      |
| Цель 1: Настройка визуализации и мониторинга, анализ базальной скорости и коэффициентов                          |     1 hour      |
| Цель 2: Научитесь контролировать AAPS                                                                            |     2 часа      |
| Цель 3: Подтвердите ваши знания                                                                                  |   До 14 дней    |
| Цель 4: Начните с открытого цикла                                                                                |     7 дней      |
| Цель 5: Глубже понимаем работу системы в режиме незамкнутого цикла, включая ее рекомендации по временным базалам |     7 дней      |
| Цель 6: Начинаем замыкать цикл с Low Glucose Suspend (прекращением подачи инсулина на низких сахарах)            |  До 5-14 дней   |
| Цель 7: Настройка замкнутого цикла с постепенным поднятием макс величины IOB и понижением целевой ГК             |    До 7 дней    |
| Цель 8: Настраиваем базал и коэффициенты с последующей активацией autosens                                       |  До 7-14 дней   |
| Цель 9: Активация таких дополнительных функций oref1 как супер микро болюс (SMB)                                 |   До 14 дней    |
| Цель 10: Автоматизация                                                                                           |     1 день      |


Как только выначнете полностью работать на **AAPS**, для улучшения общей компенсации диабета, понадобится уточнить параметры настроек.

## Что потребуется:

### Медицинские соображения

Помимо медицинских предостережений в разделе [безопасность](preparing-safety-frist) имеются параметры, зависящие от типа инсулина в помпе.

#### Выбор инсулина

Расчеты **AAPS** основаны на концентрации инсулина 100 ед./мл (как и стандарт для помп). Поддерживаются следующие предустановленные профили инсулинов:

- Быстродействующий Oref: Humalog/NovoRapid/NovoLog
- Сверхбыстрый ORef:  Fiasp
- Lyumjev:

Только для экспериментов/опытных пользователей:
- Свободный от пиков Oref: позволяет самостоятельно определить пик активности инсулина


### Технические вопросы

Цель документации - максимально сократить требуемые технические знания и опыт. Вам понадобится компьютер для создания приложения **AAPS** в Android Studio (пошаговые инструкции). Вам также понадобится настроить сервер в облаке Интернет, несколько приложений для телефонов Android и готовность получить опыт управления диабетом. Этого можно достичь, двигаясь шаг за шагом, проявляя терпение и получая помощь от сообщества **AAPS**. Если вы уже умеете работать в интернете, управлять почтой Gmail, поддерживать компьютер в актуальном состоянии, то создание **AAPS** - вполне посильная задача. Просто не торопитесь.

### Смартфоны

#### AAPS и версии Android
The current version of **AAPS** (3.2) requires an Android smartphone with Google **Android 9.0 or above**. If you are considering buying a new phone, (as of July 2024), Android 13 is preferred. Users are strongly encouraged to keep their build of **AAPS** up to date for safety reasons, however for users unable to use a device with Android 9.0 or newer, earlier versions of  **AAPS** compatible for older Android versions like [Android 8](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2.1) and [Android 7](https://github.com/nightscout/AndroidAPS/releases/tag/2.6.2), remain available from previous releases (check the release notes for legacy versions).

#### Выбор модели смартфона
Модель, которую вы покупаете, зависит от желаемых функций. There are two archived spreadsheets of compatible [smartphones](https://docs.google.com/spreadsheets/d/1zO-Vf3wv0jji5Gflk6pe48oi348ApF5RvMcI6NG5TnY/edit#gid=2097219952) and [smartphones and watches](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). The spreadsheets are no longer updated because there are so many possible models, therefore we now suggest searching the support groups (Facebook or Discord) for "phone", or the specific model you are thinking of getting. Create a new post to ask questions about it if you still need more information.

Пожертвовать смартфон для тестирования можно, отправив письмо по адресу [donations@androidaps.org](mailto:donations@androidaps.org).

- [Список проверенных телефонов](../Getting-Started/Phones.md)
- [Jelly Settings](../Usage/jelly.md)
- [Настройки Huawei](../Usage/huawei.md)

Users are encouraged to keep their phone Android version up-to-date, including with security parameters. However, if you are new with **AAPS** or are not a technical expert you might want to delay updating your phone until others have done so and confirmed it is safe to do so, on our various forums.

```{admonition} delaying Samsung phones updates
:class: warning
Samsung has an unfortunate track record of forcing updates of their phones which cause bluetooth connectivity issues. Для отключения принудительных обновлений необходимо перевести телефон в "режим разработчика":
 перейдите в настройки - о телефоне - сведения о ПО - нажимайте на номер сборки 7 раз, пока не разблокируете режим разработчика. Вернитесь в главное меню настроек, и вы увидите новый пункт меню настроек разработчика. Open developer options and scroll to find auto system update and turn it off
```

```{admonition} Google Play Protect potential Issue
:class: warning
There have been several reports of **AAPS** being shut down arbitrarily by Google Play Protect every morning. Если это произойдет, следует перейти в настройки Google Play и отключить “Google Play Protect”. Это касается не всех моделей и не всех версий Android..
```

