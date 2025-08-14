# Подготовка к работе с AAPS

Добро пожаловать. This documentation aims to guide users who are preparing to setup and start using the Android Artificial Pancreas System (**AAPS**).

## Finding your way around the documentation

An **index** and explanation of the documentation structure can be found [here](../index.md), you can also reach it by clicking on the **AAPS** symbol at the top left of the documentation. There you will find an overview of the purpose of the different documentation sections. You can also use the headings to the left of this page to navigate through the documentation. Finally, there is a handy search function, directly below the **AAPS** symbol.

Мы стремимся упростить определение как возможностей, так и ограничений **AAPS**. It can be disappointing to discover after investing time in reading the documentation that you might not have a compatible insulin pump or CGM, or that **AAPS** offers different functionality than hoped for.

Многие детали, связанные с опытом, в документации **APPS**становятся понятнее, когда вы на самом деле работаете с **APPS** в режиме реального времени. Точно так же, как трудно освоить вид спорта, только читая правила, необходимо изучать правила безопасной эксплуатации **AAPS**, и применять эти правила, начав использовать **AAPS**.

(подготовка-безопасность-приоритет) =

## Безопасность прежде всего
“С большими возможностями приходит большая ответственность…"

### Техническая безопасность
**AAPS** имеет широкий набор функций безопасности. These impose constraints which are gradually removed through staged completion of a series of [Objectives](../SettingUpAaps/CompletingTheObjectives.md) which involve testing specific parameters and answering multiple choice questions. Важные функции системы **AAPS** становятся доступны после успешного завершения Целей. Этот процесс позволяет пользователю изучать возможности **AAPS**. и безопасно перемещаться с незамкнутого на замкнутый цикл системы.

The [Objectives](../SettingUpAaps/CompletingTheObjectives.md) have been designed to achieve the best possible introduction to **AAPS**, taking into consideration the typical errors and general trends **AAPS** developers have observed with new users. Ошибки возникают из-за неопытности новичков и их желания начать работу с **AAPS** как можно быстрее, без изучения необходимых материалов. The [Objectives](../SettingUpAaps/CompletingTheObjectives.md) aim to minimise these issues.

### Медицинская безопасность
```{admonition} Avoid permanent and painful damage to your eyes and nerves
:class: danger
Caution is advised concerning rapid improvements in blood glucose control and lowering of HbA1c 
```

An important safety consideration is that a **rapid reduction in HbA1c and improved blood glucose control in those who have had elevated glucose levels for some time can cause permanent damage**. Many people with diabetes are unaware of this, and not all clinicans make their patients aware of this issue.

This damage can include **sight loss, and permanent neuropathy (pain)**. It is possible to avoid this damage occurring, by reducing average glucose levels more slowly. If you currently have an elevated HbA1c and are moving to **AAPS** (or any other closed loop system), _please_ discuss this potential risk with your clinical team before starting, and agree a timescale with gradually decreasing safe glucose targets with them. You can easily set higher glucose targets in **AAPS** initially (currently, the highest target you can select is 10.6 mmol/L but you can also maintain a purposefully weak profile if needed), and then reduce the target as the months pass.

#### Как быстро можно понижать HbA1c без риска необратимых последствий?

One retrospective [study](https://pubmed.ncbi.nlm.nih.gov/1464975/) of 76 patients reported that the risk of progression of retinopathy increased by 1.6 times, 2.4 times and 3.8 times if the Hba1C dropped 1%, 2% or 3% respectively over a 6 month period. They suggested that the **"decrease in HbA1c value during any 6-month period should be limited to less than 2% in order to prevent the progression of retinopathy....Too rapid a decrease at the initiation of glycemic control could cause severe or transient exacerbation of the progression of retinopathy."**

N.B. If you use different HbA1c units (mmol/mol rather than %), click [here](https://www.diabetes.co.uk/hba1c-units-converter.html) for a HbA1c calculator tool.

In another retrospective [evaluation](https://academic.oup.com/brain/article/138/1/43/337923) of 954 patients, researchers noted that:

**"With a decrease in HbA1c of 2–3% points over 3 months there was a 20% absolute risk of developing treatment-induced neuropathy in diabetes, with a decrease in HbA1c of >4% points over 3 months the absolute risk of developing treatment-induced neuropathy in diabetes exceeded 80%."**

A [commentary](https://academic.oup.com/brain/article/138/1/2/340563) on this work agreed that to avoid complications **the goal should be to reduce A1c by <2% over 3 months.** You can read other reviews on the topic [here](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6587545/pdf/DOM-21-454.pdf) and [here](https://www.mdpi.com/1999-4923/15/7/1791).

It is generally recognised that _newly_ diagnosed type 1 diabetics (who often have very high HbA1c at diagnosis, before starting insulin therapy) appear to be able to rapidly reduce their HbA1c immediately after diagnosis without encountering these risks to the same extent, because they have not had elevated blood glucose levels for such a sustained period. However, it is still a consideration which you should discuss with your clinician.

(PreparingForAaps-no-sglt-2-inhibitors)=
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

**AAPS** совместим только с определенными типами инсулиновых помп, систем мониторинга и телефонов; некоторые технологии могут быть недоступными в каких-то странах. In order to avoid any disappointment or frustrations, please read the [CGM](../Getting-Started/CompatiblesCgms.md), [pump](../Getting-Started/CompatiblePumps.md) and [phone](../Getting-Started/Phones.md) sections.

#### Время сборки приложения и переход к полному циклу

Время создания **AAPS**зависит от опыта и технических способностей. Обычно у неопытных пользователей сборка **AAPS** может занять до полудня, а иногда и целый день (при поддержке от сообщества). Этот процесс значительно ускорится при сборке новых версий **AAPS**, когда появится больше опыта.

Для помощи при сборке существуют специальные разделы:

- List of questions and answers for frequent errors that are likely to occur in [FAQs (Section](../UsefulLinks/FAQ.md) K);

- “[How to install AAPS](../SettingUpAaps/BuildingAaps.md)? (Section D) which includes [Troubleshooting](../GettingHelp/GeneralTroubleshooting.md) Subsection.

How long it takes to get to closed looping depends on the individual, but an approximate timescale for getting to full looping with AAPS can be found ([here](#how-long-will-it-take-to-set-everything-up))


#### Хранилище ключей &  файл экспорта настроек конфигурации

«Хранилище ключей» (файл с расширением.jks) - это защищенный паролем файл, уникальный для вашей копии **AAPS**. Телефон использует его, чтобы не дать посторонним без ключа обновить ваш экземпляр программы. Короче говоря, в рамках сборки **AAPS** вам следует:

1.  Сохранить файл хранилища ключей (файл с расширением .jks, используемый для подписания приложения) в надежном месте;

2.  Запишите пароль для файла хранилища ключей.


Это гарантирует, что каждый раз при создании новой версии **AAPS** можно использовать один и тот же файл ключей. В среднем каждый год будет требоваться 2 обновления AAPS.

In addition, **AAPS** provides the ability to [export all your configuration settings](../Maintenance/ExportImportSettings.md). Это гарантирует, что вы можете безопасно восстановить вашу систему при смене телефонов, обновлении/переустановке приложения с минимальными затратами времени. 

#### Устранение неполадок

Не стесняйтесь связаться с сообществом AAPS, даже если уверены в том, что у вас глупый вопрос! Всем пользователям с опытом разного уровня рекомендуется при необходимости задавать вопросы. Вследствие большого числа пользователей **AAPS**, ответы обычно даются быстро, как правило, в течение нескольких часов.

##### [ask on the AAPS Facebook group](https://www.facebook.com/groups/AndroidAPSUsers/)

##### [ask on the AAPS Discord channel](https://discord.gg/4fQUWHZ4Mw)





#### [Where to go for help](../UsefulLinks/BackgroundReading.md)?

Целью этого раздела является предоставление новым пользователям ссылок на ресурсы помощи, включая доступ к поддержке сообщества, состоящего как из новых, так и из опытных пользователей, которые могут ответить на вопросы и устранить ошибки, при работе с AAPS.

#### [Раздел для медицинских работников](../UsefulLinks/ClinicianGuideToAaps.md)

This is a [section specifically for clinicians](../UsefulLinks/ClinicianGuideToAaps.md) who want to know more about AAPS and open source artificial pancreas technology. There is also guidance on [how to talk to your clinical team](#introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team) in the Introduction.

## Что мы будем собирать и устанавливать?

This diagram provides an overview of the key components (both hardware and software) of the **AAPS** system:

![preparing_overview](../images/preparing_images/AAPS_preparing_overview_01.png)


In addition to the three basic hardware components (phone, pump, glucose sensor), we also need: 1) The **AAPS** app 2) A reporting server and 3) A continuous glucose monitor (CGM) app

### 1) An Android Phone Application: **AAPS**

**AAPS** is an app that runs on android smartphones & devices. You are going to build the **AAPS** app (an apk file) yourself, using a step-by-step guide, by downloading the **AAPS** source code from GitHub, installing the necessary programs (Android Studio, GitHub desktop) on your computer and building your own copy of **AAPS** app. После чего приложение **AAPS** будет перенесено на смартфон (по электронной почте, USB кабелю _и т. д._) и установлено.

### 2) A reporting server: NightScout (Tidepool*)

Чтобы в полной мере воспользоваться функционалом **AAPS**, необходимо настроить сервер Nightscout. You can [do this yourself](https://nightscout.github.io/nightscout/new_user/#free-diy) or alternatively, pay a small fee for a [managed Nightscout service](https://nightscout.github.io/#nightscout-as-a-service) to be set up for you. Nightscout используется для сбора данных от **AAPS** и может генерировать подробные отчеты по мониторингу ГК и инсулинотерапии за выбранные периоды времени. Кроме того, опекунам предоставляется возможность работать с Nightscout на удаленной связи с приложением **AAPS** для контроля за диабетом их ребенка. Такие функции удаленной связи включают в себя мониторинг уровня ГК и инсулина, удаленную подачу болюсов (с помощью смс) и информирование о приемах пищи. Анализ эффективности компенсации диабета только на основе мониторинга CGM отдельно от данных помпы – подобно вождению машины, где водитель слепой а пассажир описывает дорогу.  Tidepool is also available as an alternative to Nightscout, for AAPS versions 3.2 and later.

### 3) CGM sensor app

Depending on your glucose sensor/CGM, you will need a compatible app for receiving glucose readings and sending them to **AAPS**. The different options are shown below and more information is given in the [compatible CGMs section](../Getting-Started/CompatiblesCgms.md):

![dexcom_options](../images/preparing_images/AAPS_connectivity_Dex_02.png) ![libre_options](../images/preparing_images/AAPSconnectivity_libre.png) ![eversense_options](../images/preparing_images/AAPS_connectivity_eversense.png)

### Обслуживание системы **AAPS**

И **Nightscout** и **AAPS** должны обновляться примерно один раз в год по мере выхода улучшенных версий. В одних случаях обновление может задержаться, в других - настоятельно рекомендуется т. к. имеет важное значение для безопасности. Уведомления об этих обновлениях будут предоставляться в группах Facebook и на серверах Discord. В примечаниях к выпуску будет разъясняться что нового в версии. Вероятно, многие люди будут задавать схожие вопросы во время обновления, но у всех будет поддержка.

(preparing-how-long-will-it-take)=
## How long will it take to set everything up?

Как уже упоминалось ранее, работа с **AAPS** похожа на «путешествие», требующее вложений в виде вашего личного времени. Это не одноразовая установка. Current estimates for building **AAPS**, installing and configuring **AAPS** and **CGM** software and getting from open loop to hybrid closed looping with **AAPS** are about 4 to 6 months overall. It is therefore suggested that you prioritize building the **AAPS** app and working through the early objectives as soon as possible, even if you are still using a different insulin delivery system (you can use a virtual pump up to objective 5).

Some of the objectives require a given amount of days to pass to make sure you understand the new functionality. It is not possible to bypass this waiting time, these minimal timings have been set-up for your own safety.

Here is an approximate timeframe:

| Задачи                                                        |         Примерное время          |
| ------------------------------------------------------------- |:--------------------------------:|
| Initial reading of the documentation                          |             1-2 дня              |
| Installing/configuring PC to allow the build                  |            2-8 часов             |
| Setting up a reporting server                                 |              1 hour              |
| Installing a CGM app (xDrip+, BYODA, …)                       |              1 hour              |
| Configuring CGM → xDrip+ → APPS initially                     |              1 hour              |
| Configuring AAPS → pump initially                             |              1 hour              |
| Configuring AAPS → Nightscout/Tidepool (reporting only)       |              1 hour              |
| Optional : Configuring NightScout ↔ **AAPS** & NSFollowers    |              1 hour              |
| Objective 1: Setting up visualization and monitoring          |              1 hour              |
| Цель 2: Научитесь контролировать AAPS                         |              2 часа              |
| Цель 3: Подтвердите ваши знания                               |            До 14 дней            |
| Цель 4: Начните с открытого цикла                             |        Minimum of 7 days         |
| Objective 5: Understanding your open loop                     |              7 дней              |
| Objective 6: Starting to close the loop (Low Glucose Suspend) |   Minimum of 5, up to 14 days    |
| Objective 7: Tuning the closed loop                           |  Minimum of 1 day, up to 7 days  |
| Objective 8: Adjust basals and ratios, enable Autosens        | Minimum of 7 days, up to 14 days |
| Objective 9: Enabling Super Micro Bolus (SMB)                 |        Minimum of 28 days        |
| Цель 10: Автоматизация                                        |        Minimum of 28 days        |
| Objective 11: Dynamic ISF                                     |        Minimum of 28 days        |

Once you are fully operational on **AAPS**, you will still need to regularly fine tune your settings in order to improve your overall diabetic management.

## Что потребуется:

### Медицинские соображения

In addition to the medical warnings in the [safety section](#safety-first) there are also different parameters, depending on which insulin you are using in the pump.

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

The current version of **AAPS** (3.3) requires an Android smartphone with Google **Android 11.0 or above**. If you are considering buying a new phone, (as of December 2024), Android 14 is preferred.<br/> Users are strongly encouraged to keep their build of **AAPS** up to date for safety reasons. However, for users unable to use a device with Android 11.0 or newer, earlier versions of **AAPS** compatible for older Android versions, remain available, see: [Release notes](#maintenance-android-version-aaps-version).

#### Выбор модели смартфона
Модель, которую вы покупаете, зависит от желаемых функций. You can find on the [Phones page](../Getting-Started/Phones.md) recommendations and user feedback about working setups.

Users are encouraged to keep their phone Android version up-to-date, including with security parameters. However, if you are new with **AAPS** or are not a technical expert you might want to delay updating your phone until others have done so and confirmed it is safe to do so, on our various forums.

```{admonition} delaying Samsung phones updates
:class: warning
Samsung has an unfortunate track record of forcing updates of their phones which cause bluetooth connectivity issues. To disable these forced updates you need to switch the phone to "developer mode" by:
 go to settings and about then software information, then tap build number u til it confirms you have unlocked developer mode. Вернитесь в главное меню настроек, и вы увидите новый пункт меню настроек разработчика. Open developer options and scroll to find auto system update and turn it off
```

```{admonition} Google Play Protect potential Issue
:class: warning
There have been several reports of **AAPS** being shut down arbitrarily by Google Play Protect every morning. Если это произойдет, следует перейти в настройки Google Play и отключить “Google Play Protect”. Это касается не всех моделей и не всех версий Android..
```

