# Добро пожаловать в Документацию по AndroidAPS (AAPS)

![изображение](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

14/08/2025 : Version 3.3.2.1 is out. Check the [Release Notes](#latestrelease) to see what's new and get update instructions.

```

Android APS (**AAPS**) является приложением с открытым исходным кодом для людей, страдающих инсулинозависимым диабетом. Это система искусственной поджелудочной железы (APS), которая работает на смартфонах Android. **AAPS** использует алгоритм OpenAPS и нацелен на воплощение функциональности реальной поджелудочной железы - содержание СК (сахара, глюкозы в крови) в здоровых пределах при помощи автоматизированной подачи инсулина. Для использования **AAPS** вам понадобятся **три** совместимых с ним устройства: **(1)** Android телефон, **(2)** система непрерывного мониторинга за глюкозой (НМГ, англ: CGM) и **(3)** одобренная FDA/CE инсулиновая помпа. По желанию вам могут пригодиться облачные сервисы **(4)** для удаленного управления **AAPS**, передачи и сохранения ваших данных на сервере отчетов, так же будут полезными **(5)** умные часы.

Данная документация описывает процесс установки и использования **AAPS**. Вы можете перемещаться по документации **AAPS** либо при помощи левого меню (и полезной функции "**Поиска в документации**"), либо через [оглавление](#index-aaps-documentation-index) внизу этой страницы.

## Обзор документации AAPS

В разделе **2) Начало работы**, [введение](Getting-Started/Introduction.md) описывает основную концепцию работы искусственной поджелудочной железы (ИПЖ, англ: APS). В нем описывается история замкнутых циклов в целом, почему был разработан **AAPS**, его сравнение с другими подобными системами и описание безопасности применения **AAPS**. Оно дает советы о том, как говорить с вашей врачебной командой об **AAPS**, рассказывает, почему вы должны собирать **AAPS** самостоятельно вместо простого скачивания сборки, показывает типичное подключение системы **AAPS**. Так же оно затрагивает доступность, и кому, вероятнее всего, полезнее использовать **AAPS**.

[Подготовка к AAPS](./Getting-Started/PreparingForAaps.md) дает более детальную информацию о безопасности системы, рассказывает, какие телефоны, НМГ и инсулиновые помпы совместимы с **AAPS**. Она дает общую картину того, через что вам предстоит пройти, так же показывает примерную таблицу сроков получения полной функциональности **AAPS**. Эта секция позволяет технически подготовиться к сборке вашей конфигурации **AAPS** как можно более эффективно и быстро. Подраздел [Настройка НМГ](./Getting-Started/CompatiblesCgms.md) объясняет, как улучшить настройку НМГ, и какие опции сглаживания будут для вас наилучшими.

Теперь, когда у вас есть четкое понимание всего процесса, вы можете начать собирать свой цикл (петлю) на базе **AAPS**.

Раздел **3) Настройка AAPS** содержит пошаговые инструкции того, как это можно сделать. It covers choosing and [setting up your reporting server](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout or Tidepool) so you can review and share your data, getting ready for building the AAPS app, building the AAPS app and transferring the AAPS app to your phone. Так же он покрывает настройку приложения **AAPS** с помощью мастера установки, его связку с приложением вашего НМГ и либо реальной, либо виртуальной инсулиновой помпой, так же подключение **AAPS** к вашему серверу отчетов. Далее вам медленно будет представлена полная функциональность **AAPS** с помощью безопасного и хорошо отлаженного пошагового процесса, разработанного с целью убедиться в том, что вы или ваш ребенок хорошо ориентируетесь и разбираетесь во всех различных уровнях меню и настройках перед переходом к следующему этапу, часто именуемому следующей "Целью", вплоть до того момента, как у вас наберется достаточно опыта для использования более продвинутых настроек, доступных в программе. Данные цели специально разработаны таким образом, чтобы вы постепенно открывали все больше и больше возможностей **AAPS** и переключились с открытого цикла на замкнутый.

Раздел **4) Жизнь с AAPS** покрывает основные возможности **AAPS**, помогая с использованием (и настройкой) **AAPS**. В том числе понимание всех экранов, активных углеводов (англ: COB, carbs on board), чувствительности, смены профилей, временных целей, растянутых углеводов (англ: eCarbs), автоматизаций и DynamicISF (динамического фактора чувствительности к инсулину). Так же он отвечает на часто задаваемые вопросы по типу того, что делать с различными типами еды, как отрабатывать смену канюли или сенсора НМГ, что делать с обновлениями ПО на смартфоне, переходом на летнее время, как путешествовать и заниматься спортом с [AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md). Частые вопросы и ответы на них находятся в секции "Решение проблем".

Раздел **5) [Удаленный контроль за AAPS](./RemoteFeatures/RemoteControl.md)** подчеркивает реальную силу **AAPS**. Имеется множество различных возможностей для удаленного управления или мониторинга **AAPS**. Данная секция одинаково полезна как для тех, кто заботится о детях с диабетом при помощи **AAPS**, так и для взрослых, которые хотят следить за своими показателями удобнее, чем на телефоне (на часах, в машине, _т. д._), или для тех, кто хочет дать важным для них людям так же следить за показателями. Так же данный раздел описывает процесс настройки Android Auto для просмотра уровня СК в машине.

Раздел **6) Часы на Wear OS** дает информацию и инструкции к умным часам на **Wear OS** с циферблатами **AAPS** или иными и как их использовать в функции пульта или просто дисплея AAPS.


Раздел **7) Обслуживание AAPS** рассказывает, как экспортировать настройки и делать их резервную копию (что важно в случае потери/поломки телефона), описывает изменения последних версий и процесс обновления **AAPS**. Рассчитывайте на одну новую версию и 2-3 обязательных обновления в год. Следует своевременно устанавливать обновления, так как в **AAPS** как и в любом ПО, постоянно исправляются мелкие ошибки и появляются новые улучшения. Есть отдельный пункт "Обновление" в секции решения проблем с распространенными вопросами.

Раздел **8) [Помощь](GettingHelp/WhereCanIGetHelp.md)** направляет к источникам получения помощи по **AAPS**. Он позволит быстро связаться с другими пользователями, уточнить вопросы и разобраться с частыми ошибками новичков. Множество людей уже успешно применяют **AAPS**, но у всех однажды появляются вопросы, в которых трудно разобраться самостоятельно. Из-за большого числа пользователей, время ответа на вопросы как правило, лишь несколько часов. Не стоит волноваться по поводу просьбы о помощи, ведь глупых вопросов не бывает! Призываем пользователей любого уровня задавать столько вопросов, сколько необходимо для безопасной работы. Этот раздел включает в себя основные решения проблем с **AAPS** и **AAPSClient** (приложение-компаньон для удаленного мониторинга), а также отправить данные **AAPS** (журналы отладки) разработчикам при технической проблеме с **AAPS**.

Раздел **9) **Дополнительные возможности AAPS</strong> описывает такие темы, как переход от гибридного замкнутого цикла (использование болюсов на еду _и т. п._) к автономному закрытому (без болюсов), опциям для разработчиков **AAPS** и инженерный режим. Большинство пользователей устроит основная ("master") ветка **AAPS** без рассмотрения выше названных опций, этот раздел предназначен для тех, кто уже хорошо владеет замкнутым циклом и хочет улучшить свои показатели.

В разделе **10) [Как поддержать AAPS](SupportingAaps/HowToEditTheDocs.md)** мы рассказываем о способах поддержки проекта. Вы можете пожертвовать как денежные средства, так и оборудование или ваши навыки. Можно предлагать/вносить изменения в документацию самостоятельно, помогать с [переводом документации](SupportingAaps/Translations) и делиться своими показателями через проект Open Humans с научными сотрудниками.

Раздел **11) Ресурсы** содержит устаревшую или дополнительную информацию, включая подраздел для [медицинских работников](UsefulLinks/ClinicianGuideToAaps.md), проявляющих интерес к такой технологии искусственной поджелудочной железы с открытым исходным кодом, как **AAPS**, или же для пациентов, кто хочет поделиться этой информацией с их лечащими врачами, эта тема так же раскрывается во введении. Больше информации про диабет и использование замкнутого цикла можно так же найти в этом разделе. Он включает [глоссарий](./UsefulLinks/Glossary.md) - список терминов и сокращений, использующихся в **AAPS**. Именно здесь вы узнаете, что обозначают термины по типу, например, ISF или TT.


 ### Захотели начать работу с **AAPS**? Узнайте больше об **AAPS** во [введении](Getting-Started/Introduction.md).

```{admonition} SAFETY NOTICE
:class: danger
Безопасность **AAPS** зависит от функций безопасности ваших устройств (телефона, помпы, сенсора НМГ). Используйте только полностью работоспособную, одобренную FDA/CE инсулиновую помпу и систему НМГ. Не используйте сломанные, модифицированные или самодельные инсулиновые помпы или трансмиттеры НМГ. Используйте только оригинальные расходники (сертеры, канюли и инсулиновые резервуары), одобренные производителем к использованию с вашей помпой или НМГ. Использование непроверенных или модифицированных расходников может привести к неточностям и ошибкам дозирования инсулина, что создаст значительный риск для пользователя. 

Не пользуйтесь **AAPS**, если вы принимаете ингибиторы SGLT-2 (глифлозины), поскольку они снижают уровень СК. Этим вы увеличиваете риск диабетического кетоацидоза (DKA) из-за сниженной подачи инсулина и гипогликемии из-за пониженного уровня СК. 
```

```{admonition} Disclaimer
:class: note

- Вся информация и исходный код, описанные здесь, предназначены только лишь для ознакомительных и образовательных целей. Используйте [Nightscout](https://nightscout.github.io/) и **AAPS** на свой страх и риск, не используйте данную тут информацию или исходный код для принятия медицинских решений. Nightscout в настоящее время не обеспечивает соблюдение политик конфиденциальности HIPAA (Health Insurance Portability and Accountability Act — Акт о мобильности и подотчётности медицинского страхования). 
- Использование исходного кода с github.com не дает никакой гарантии и какой-либо официальной поддержки. Пожалуйста, ознакомьтесь с файлом LICENSE внутри репозитория.
- Все наименования продуктов и компаний, товарные знаки, услуги по обслуживанию, зарегистрированные товарные знаки и зарегистрированные службы являются собственностью соответствующих владельцев. Они используются в информационных целях и не подразумевается какой-либо принадлежности к ним или их одобрения.

**AAPS** не связан с данными организациями и не признан ими: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) или [Medtronic](https://www.medtronic.com/).

```

(index-aaps-documentation-index)=

## Оглавление документации AAPS

```{toctree}
:caption: 1) Change language

Change language <./NavigateDoc/ChangeLanguage.md>
Change version <./NavigateDoc/ChangeVersion.md>
```
```{toctree}
:caption: 2) Начало работы

Введение в AAPS <./Getting-Started/Introduction.md>
Подготовка к AAPS <./Getting-Started/PreparingForAaps.md>
Обзор компонентов <./Getting-Started/ComponentOverview.md>
- Совместимые помпы <./Getting-Started/CompatiblePumps.md>
- Совместимые НМГ <./Getting-Started/CompatiblesCgms.md>
- Совместимые телефоны <./Getting-Started/Phones.md>
- Совместимые умные часы <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 3) Setting up AAPS

Setting up the reporting server <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
Building AAPS <./SettingUpAaps/BuildingAaps.md>
- Browser Build <./SettingUpAaps/BrowserBuild.md>
- Computer Build <./SettingUpAaps/ComputerBuild.md>
Transferring and Installing AAPS <./SettingUpAaps/TransferringAndInstallingAaps.md>
Setup Wizard <./SettingUpAaps/SetupWizard.md>
Your AAPS Profile <./SettingUpAaps/YourAapsProfile.md>
Change AAPS configuration <./SettingUpAaps/ChangeAapsConfiguration.md>
- Config Builder <./SettingUpAaps/ConfigBuilder.md>
- Preferences <./SettingUpAaps/Preferences.md>
Completing the objectives <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 4) Жизнь с AAPS

Экраны AAPS <./DailyLifeWithAaps/AapsScreens.md>
Основные функции AAPS <./DailyLifeWithAaps/KeyAapsFeatures.md>
Расчет COB <./DailyLifeWithAaps/CobCalculation.md>
Определение чувствительности <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
Смена профиля & процент профиля <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Временные цели <./DailyLifeWithAaps/TempTargets.md>
Растянутые углеводы <./DailyLifeWithAaps/ExtendedCarbs.md>
Автоматизации <./DailyLifeWithAaps/Automations.md>
Динамический ISF <./DailyLifeWithAaps/DynamicISF.md>
AAPS для детей <./DailyLifeWithAaps/AapsForChildren.md>
Помпы и канюли <./DailyLifeWithAaps/PumpsAndCannulas.md>
Путешествия между часовыми поясами & летнее время <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 5) Удаленный контроль за AAPS

Удаленный мониторинг <./RemoteFeatures/RemoteMonitoring.md>
Удаленное управление <./RemoteFeatures/RemoteControl.md>
SMS команды <./RemoteFeatures/SMSCommands.md>
Только лишь мониторинг <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>

```
```{toctree}
:caption: 6) Часы на Wear OS

AAPS для Wear OS <./WearOS/BuildingAapsWearOS.md>
Использование умных часов <./WearOS/WearOsSmartwatch.md>
Удаленное управление <./RemoteFeatures/RemoteControlWearOS.md>
Пользовательские циферблаты <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Обмен пользовательскими циферблатами <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 7) Maintenance of AAPS

Export/Import Settings <./Maintenance/ExportImportSettings.md>
Reviewing your data <./Maintenance/Reviewing.md>
AAPS Release Notes <./Maintenance/ReleaseNotes.md>
Documentation updates <./Maintenance/DocumentationUpdate.md>
Updating to a new version of AAPS <./Maintenance/UpdateToNewVersion.md>
- Browser Update <./Maintenance/UpdateBrowserBuild.md>
- Computer Update <./Maintenance/UpdateComputerBuild.md>

```

```{toctree}
:caption: 8) Помощь

Где мне могут помочь <./GettingHelp/WhereCanIGetHelp.md>
Решение основных проблем <./GettingHelp/GeneralTroubleshooting.md>
Решение проблем с Android Studio <./GettingHelp/TroubleshootingAndroidStudio.md>
Получение журналов отладки <./GettingHelp/AccessingLogFiles.md>
```

```{toctree}
:caption: 9) Продвинутые опции AAPS

Автономный замкнутый цикл <./AdvancedOptions/FullClosedLoop.md>
Ветка dev <./AdvancedOptions/DevBranch.md>
Автотюн <./AdvancedOptions/Autotune.md>

```
```{toctree}
:caption: 10) Как поддержать AAPS

Чем я могу помочь <./SupportingAaps/HowCanIHelp.md>
Редактирование документации <./SupportingAaps/HowToEditTheDocs.md>
Перевод приложения и документации <./SupportingAaps/Translations.md>
Состояние переводов <./SupportingAaps/StateOfTranslations.md>
Выгрузка в Open Humans <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 11) Ресурсы

Глоссарий <./UsefulLinks/Glossary.md>
Часто задаваемые вопросы <./UsefulLinks/FAQ.md>
Основные ресурсы по диабету и ИПЖ <./UsefulLinks/BackgroundReading.md>
Отдельный аккаунт Google для AAPS (по желанию)<./UsefulLinks/DedicatedGoogleAccountForAaps.md>
Медицинским работникам (устарело) <./UsefulLinks/ClinicianGuideToAaps.md>
```