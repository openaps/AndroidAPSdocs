# Добро пожаловать в документацию AAPS

![изображение](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

31 октября 2026 года: вышла версия 4.0.0. Прочитайте [Примечания к изменениям в версиях](#latestrelease), чтобы узнать, что нового, и для обновления следуйте [инструкции по обновлению](./Maintenance/UpdateToNewVersion.md).

```

Android APS (**AAPS**) является приложением с открытым исходным кодом для людей, страдающих инсулинозависимым диабетом. Это система искусственной поджелудочной железы (APS), которая работает на смартфонах Android. **AAPS** использует алгоритм OpenAPS и стремится делать то же, что и настоящая поджелудочная железа: удерживать уровень ГК в здоровых пределах с помощью автоматической подачи инсулина. Для работы с **AAPS** нужны **три** совместимых устройства: **(1)** телефон Android, **(2)** система непрерывного мониторинга глюкозы (CGM) и **(3)** инсулиновая помпа, одобренная FDA/CE. Также можно добавить **(4)** облачные сервисы для удаленного управления **AAPS**, обмена данными и их хранения на сервере отчетности и **(5)** смарт-часы.

В этой документации описано, как настроить **AAPS** и как им пользоваться. По документации **AAPS** можно перемещаться через меню слева (и удобную функцию **Поиск в документации**) или с помощью [оглавления](#index-aaps-documentation-index) внизу этой страницы.

## Обзор документации AAPS

Section **1) Getting Started**, the [Introduction](Getting-Started/Introduction.md) explains the general concept of what an artificial pancreas system (APS) is designed to do. В нем описывается история замкнутых циклов в целом, почему был разработан **AAPS**, его сравнение с другими подобными системами и описание безопасности применения **AAPS**. Оно дает советы о том, как говорить с вашей врачебной командой об **AAPS**, рассказывает, почему вы должны собирать **AAPS** самостоятельно вместо простого скачивания сборки, показывает типичное подключение системы **AAPS**. Так же оно затрагивает доступность, и кому, вероятнее всего, полезнее использовать **AAPS**.

[Подготовка к работе с AAPS](./Getting-Started/PreparingForAaps.md) дает более подробную информацию о безопасности, а также о телефонах, CGM (системах непрерывного мониторинга глюкозы) и инсулиновых помпах, которые совместимы с **AAPS**. Она дает общую картину того, через что вам предстоит пройти, так же показывает примерную таблицу сроков получения полной функциональности **AAPS**. Эта секция позволяет технически подготовиться к сборке вашей конфигурации **AAPS** как можно более эффективно и быстро. В подразделе [Совместимые CGM](./Getting-Started/CompatiblesCgms.md) описано, как оптимизировать настройку CGM и какие варианты сглаживания лучше всего.

Теперь, когда у вас есть четкое понимание всего процесса, вы можете начать собирать свой цикл (петлю) на базе **AAPS**.

Раздел **2) Сборка приложения** объясняет, почему нужно собрать приложение **AAPS** самостоятельно, а не просто скачать его, и шаг за шагом проводит вас через [сборку](./SettingUpAaps/BuildingAaps.md) (в браузере, в Android Studio или из командной строки), а затем через перенос и установку приложения на телефон. Он начинается с необязательного шага: создания [специальной учетной записи Google](./UsefulLinks/DedicatedGoogleAccountForAaps.md) для хранения ваших сборок и резервных копий. В нем также описана [проверка разработчиков Android](#android-developer-verification) – изменение, которое Google вводит с сентября 2026 года и которое влияет на установку самостоятельно собранных приложений.

Раздел **3) Настройка сервера отчетности** описывает выбор и [настройку сервера отчетности](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout или Tidepool), чтобы вы могли просматривать свои данные и делиться ими.

Раздел **4) [Настройка AAPS](./SettingUpAaps/SetupWizard.md)** описывает настройку приложения **AAPS** с помощью мастера установки, его связь с приложением CGM и с реальной или виртуальной инсулиновой помпой, а также связь **AAPS** с сервером отчетности. Затем вы знакомитесь со всеми возможностями **AAPS** в ходе безопасного, тщательно выверенного пошагового процесса. Так вы (или ваш ребенок) хорошо освоитесь со всеми уровнями и настройками меню, прежде чем перейти к следующему этапу, который обычно называют следующей «целью». Вы продвигаетесь так, пока у вас не будет достаточно опыта, чтобы начать пользоваться расширенными возможностями приложения. Данные цели специально разработаны таким образом, чтобы вы постепенно открывали все больше и больше возможностей **AAPS** и переключились с открытого цикла на замкнутый.

Раздел **5) [Повседневная жизнь с AAPS](./DailyLifeWithAaps/AapsScreens.md)** описывает основные функции **AAPS**, чтобы помочь вам пользоваться **AAPS** (и настраивать его под себя). Сюда входят экраны приложения, активные углеводы (COB), чувствительность, динамический ISF, переключение профиля, временные цели, растянутые углеводы (eCarbs), автоматизация и [анализ ваших данных](./Maintenance/Reviewing.md) в просмотре журнала и статистике. Также здесь описаны частые темы: как поступать с разными видами приема пищи, как проводить смену катетера и сенсора, обновления смартфона, переход на летнее время, [путешествия с AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) и спорт. Частые вопросы и ответы на них находятся в секции "Решение проблем".

Раздел **6) [Удаленные функции AAPS](./RemoteFeatures/RemoteControl.md)** показывает одну из сильных сторон **AAPS**. Имеется множество различных возможностей для удаленного управления или мониторинга **AAPS**. Данная секция одинаково полезна как для тех, кто заботится о детях с диабетом при помощи **AAPS**, так и для взрослых, которые хотят следить за своими показателями удобнее, чем на телефоне (на часах, в машине, _т. д._), или для тех, кто хочет дать важным для них людям так же следить за показателями. Также в этом разделе описана настройка Android Auto для просмотра уровня ГК в машине.

Раздел **7) [Смарт-часы Wear OS](./WearOS/BuildingAapsWearOS.md)** содержит информацию и инструкции по использованию смарт-часов Android **Wear OS** со специальными циферблатами **AAPS** или собственными циферблатами – как пульта удаленного управления телефоном или просто как дисплея.


Раздел **8) [Обслуживание AAPS](./Maintenance/ExportImportSettings.md)** описывает, как экспортировать настройки и сделать их резервную копию (это очень важно на случай, если вы потеряете или сломаете телефон), содержит примечания к последней версии, подробно объясняет, как обновить **AAPS**, и что происходит, когда поддержка версии заканчивается. Рассчитывайте на одну новую версию и 2-3 обязательных обновления в год. Следует своевременно устанавливать обновления, так как в **AAPS** как и в любом ПО, постоянно исправляются мелкие ошибки и появляются новые улучшения. Есть отдельный пункт "Обновление" в секции решения проблем с распространенными вопросами.

Раздел **9) [Помощь и устранение неполадок](GettingHelp/WhereCanIGetHelp.md)** подскажет, где лучше всего искать общую помощь по **AAPS**. Это единое место, куда нужно идти, если что-то не работает: в разделе [Устранение неполадок](GettingHelp/GeneralTroubleshooting.md) собраны по темам решения самых частых проблем, а в разделе [Часто задаваемые вопросы](UsefulLinks/FAQ.md) есть ответы на частые вопросы. Он позволит быстро связаться с другими пользователями, уточнить вопросы и разобраться с частыми ошибками новичков. Множество людей уже успешно применяют **AAPS**, но у всех однажды появляются вопросы, в которых трудно разобраться самостоятельно. Из-за большого числа пользователей, время ответа на вопросы как правило, лишь несколько часов. Не стоит волноваться по поводу просьбы о помощи, ведь глупых вопросов не бывает! Призываем пользователей любого уровня задавать столько вопросов, сколько необходимо для безопасной работы. Этот раздел включает в себя основные решения проблем с **AAPS** и **AAPSClient** (приложение-компаньон для удаленного мониторинга), а также отправить данные **AAPS** (журналы отладки) разработчикам при технической проблеме с **AAPS**.

Раздел **10)** описывает **[расширенные возможности AAPS](./AdvancedOptions/FullClosedLoop.md)**: например, как перейти от гибридного замкнутого цикла с **AAPS** (болюсы на еду _и т. д._) к автономному замкнутому циклу (без болюсов), как [настроить профиль](./GettingHelp/ProfileTuning.md) и пользоваться Autotune, а также подробно описывает версию разработчиков и режим отладки. Большинство пользователей устроит основная ("master") ветка **AAPS** без рассмотрения выше названных опций, этот раздел предназначен для тех, кто уже хорошо владеет замкнутым циклом и хочет улучшить свои показатели.

В разделе **11) [Как поддержать AAPS](SupportingAaps/HowCanIHelp.md)** мы рассказываем, как вы можете поддержать этот проект. Вы можете пожертвовать как денежные средства, так и оборудование или ваши навыки. Вы можете сами предлагать и вносить изменения в документацию, помогать с [переводом документации](SupportingAaps/Translations.md) и делиться своими данными через проект Open Humans.

Section **12) Resources**, contains archived or additional documentation, including a subsection for [clinicians](UsefulLinks/ClinicianGuideToAaps.md) who have expressed interest in open source artificial pancreas technology such as **AAPS**, or for patients who want to share such information with their clinicians, this topic is also addressed in the introduction. Больше информации про диабет и использование замкнутого цикла можно так же найти в этом разделе. Он включает [Глоссарий](./UsefulLinks/Glossary.md) – список сокращений (или кратких названий), которые используются в **AAPS**. Именно здесь вы узнаете, что обозначают термины по типу, например, ISF или TT.


 ### Захотели начать работу с **AAPS**? Узнайте больше об **AAPS** во [введении](Getting-Started/Introduction.md).

```{admonition} SAFETY NOTICE
:class: danger
Безопасность **AAPS** зависит от функций безопасности ваших устройств (телефона, помпы, сенсора НМГ). Используйте только полностью работоспособную, одобренную FDA/CE инсулиновую помпу и систему НМГ. Не используйте сломанные, модифицированные или самодельные инсулиновые помпы или трансмиттеры НМГ. Используйте только оригинальные расходные материалы (устройства для установки, катетеры и инсулиновые резервуары), одобренные производителем для использования с вашей помпой и CGM. Использование непроверенных или модифицированных расходников может привести к неточностям и ошибкам дозирования инсулина, что создаст значительный риск для пользователя. 

Не пользуйтесь **AAPS**, если вы принимаете ингибиторы SGLT-2 (глифлозины), поскольку они снижают уровень ГК. Вы повышаете риск диабетического кетоацидоза (ДКА) из-за уменьшенной подачи инсулина и риск гипогликемии из-за снижения уровня ГК. 
```

```{admonition} Disclaimer
:class: note

- Вся информация и исходный код, описанные здесь, предназначены только лишь для ознакомительных и образовательных целей. Используйте [Nightscout](https://nightscout.github.io/) и **AAPS** на свой страх и риск, не используйте данную тут информацию или исходный код для принятия медицинских решений. Nightscout в настоящее время не обеспечивает соблюдение политик конфиденциальности HIPAA (Health Insurance Portability and Accountability Act — Акт о мобильности и подотчётности медицинского страхования). 
- Использование исходного кода с github.com не дает никакой гарантии и какой-либо официальной поддержки. Пожалуйста, ознакомьтесь с файлом LICENSE внутри репозитория.
- Все наименования продуктов и компаний, товарные знаки, услуги по обслуживанию, зарегистрированные товарные знаки и зарегистрированные службы являются собственностью соответствующих владельцев. Они используются в информационных целях и не подразумевается какой-либо принадлежности к ним или их одобрения.

**AAPS** не связан со следующими компаниями и не одобрен ими: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/), [Medtronic](https://www.medtronic.com/), [Diaconn](https://www.diaconn.com/en/index.html), [EOFlow](http://www.eoflow.com/), [MicroTech Medical (Equil)](https://www.microtechmd.com/), [Medtrum](https://www.medtrum.com/), [Senseonics (Eversense)](https://www.senseonics.com/), [i-SENS (CareSens)](https://i-sens.com/), [POCTech](https://poctechcorp.com/en/), [Ottai](https://ottai.com/) и [Syai](https://www.syai.com/).

```

(index-aaps-documentation-index)=

## Оглавление документации AAPS

```{toctree}
:caption: Как пользоваться документацией
:titlesonly:

Смена языка и версии <./NavigateDoc/ChangeLanguageVersion.md>
Поиск по документации <./NavigateDoc/SearchDoc.md>
Обновления и изменения в документации <./Maintenance/DocumentationUpdate.md>
```
```{toctree}
:caption: 1) Начало работы

Введение в APS и AAPS <./Getting-Started/Introduction.md>
Подготовка к работе с AAPS <./Getting-Started/PreparingForAaps.md>
Обзор компонентов <./Getting-Started/ComponentOverview.md>
- Совместимые помпы <./Getting-Started/CompatiblePumps.md>
- Совместимые CGM <./Getting-Started/CompatiblesCgms.md>
- Телефоны  <./Getting-Started/Phones.md>
- Смарт-часы и AAPS  <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 2) Сборка приложения

Специальная учетная запись Google для AAPS (необязательно) <./UsefulLinks/DedicatedGoogleAccountForAaps.md>
Сборка AAPS <./SettingUpAaps/BuildingAaps.md>
- Сборка через браузер <./SettingUpAaps/BrowserBuild.md>
- Сборка в Android Studio <./SettingUpAaps/ComputerBuild.md>
- Инструкция по сборке из командной строки <./SettingUpAaps/CLIBuild.md>
Перенос и установка AAPS на смартфон <./SettingUpAaps/TransferringAndInstallingAaps.md>
```
```{toctree}
:caption: 3) Настройка сервера отчетности

Настройка сервера отчетности <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
```
```{toctree}
:caption: 4) Настройка AAPS

Мастер установки AAPS <./SettingUpAaps/SetupWizard.md>
Ваш профиль AAPS <./SettingUpAaps/YourAapsProfile.md>
Изменение конфигурации AAPS <./SettingUpAaps/ChangeAapsConfiguration.md>
- Конфигурация (Конфигуратор) <./SettingUpAaps/ConfigBuilder.md>
- Настройки <./SettingUpAaps/Preferences.md>
Прохождение целей <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 5) Повседневная жизнь с AAPS

Экраны AAPS <./DailyLifeWithAaps/AapsScreens.md>
Основные функции AAPS <./DailyLifeWithAaps/KeyAapsFeatures.md>
Подсчет активных углеводов COB <./DailyLifeWithAaps/CobCalculation.md>
Определение чувствительности <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
Динамический ISF (DynISF) <./DailyLifeWithAaps/DynamicISF.md>
Переключение профиля и процент профиля <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Временные цели <./DailyLifeWithAaps/TempTargets.md>
Растянутые углеводы (eCarbs) <./DailyLifeWithAaps/ExtendedCarbs.md>
Мастер быстрых настроек (болюс одним нажатием) <./DailyLifeWithAaps/QuickWizards.md>
Сценарии (предустановки для разных ситуаций) <./DailyLifeWithAaps/Scenes.md>
Автоматизация <./DailyLifeWithAaps/Automations.md>
Быстрый запуск (панель быстрых действий на главном экране) <./DailyLifeWithAaps/QuickLaunch.md>
Виджеты на главном экране телефона <./DailyLifeWithAaps/Widgets.md>
Продукты (ваша база продуктов) <./DailyLifeWithAaps/Food.md>
Глобальный поиск <./DailyLifeWithAaps/GlobalSearch.md>
Анализ ваших данных <./Maintenance/Reviewing.md>
AAPS для детей <./DailyLifeWithAaps/AapsForChildren.md>
Помпы и катетеры <./DailyLifeWithAaps/PumpsAndCannulas.md>
Смена часового пояса и переход на летнее время <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 6) Удаленные функции AAPS

Удаленный мониторинг <./RemoteFeatures/RemoteMonitoring.md>
Слежение за работой AAPS (без взаимодействия с системой) <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>
Удаленное управление AAPS <./RemoteFeatures/RemoteControl.md>
Приложение AAPSClient <./RemoteFeatures/AapsClient.md>
Управление «основной телефон ↔ клиент» (подписанное удаленное управление) <./RemoteFeatures/ClientMasterControl.md>
SMS команды <./RemoteFeatures/SMSCommands.md>

```
```{toctree}
:caption: 7) Смарт-часы Wear OS

Сборка приложения AAPS для Wear <./WearOS/BuildingAapsWearOS.md>
Настройка AAPS на часах Wear OS <./WearOS/WearOsSmartwatch.md>
Работа AAPS с помощью смарт-часов на базе Wear OS <./RemoteFeatures/RemoteControlWearOS.md>
Справочник по собственным циферблатам <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Сайт для обмена самостоятельно собранными циферблатами <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 8) Обслуживание AAPS

Создание и восстановление резервных копий <./Maintenance/ExportImportSettings.md>
Примечания к изменениям в версиях <./Maintenance/ReleaseNotes.md>
Что изменилось в AAPS v4 <./Maintenance/V4Changes.md>
Обновление до новой версии или ветки <./Maintenance/UpdateToNewVersion.md>
- Обновление через браузер (fork) <./Maintenance/UpdateBrowserBuild.md>
- Обновление через Android Studio <./Maintenance/UpdateComputerBuild.md>
Окончание поддержки <./Maintenance/EndOfLife.md>

```

```{toctree}
:caption: 9) Помощь и устранение неполадок

Где получить помощь? <./GettingHelp/WhereCanIGetHelp.md>
Устранение неполадок <./GettingHelp/GeneralTroubleshooting.md>
- Проблемы с Bluetooth <./GettingHelp/BluetoothTroubleshooting.md>
- Устранение неполадок NSClient <./GettingHelp/TroubleshootingNsClient.md>
- Устранение неполадок Android Studio <./GettingHelp/TroubleshootingAndroidStudio.md>
- Сборка через браузер: устранение неполадок <./GettingHelp/BrowserBuildTroubleshooting.md>
- Переустановка AAPS с новым хранилищем ключей <./GettingHelp/ReinstallAaps.md>
- Чтение лог-файлов <./GettingHelp/AccessingLogFiles.md>
Часто задаваемые вопросы по работе ИПЖ <./UsefulLinks/FAQ.md>
```

```{toctree}
:caption: 10) Расширенные возможности AAPS

Автономный замкнутый цикл <./AdvancedOptions/FullClosedLoop.md>
Настройка профиля AAPS <./GettingHelp/ProfileTuning.md>
Как пользоваться модулем Autotune <./AdvancedOptions/Autotune.md>
Концентрация инсулина <./AdvancedOptions/InsulinConcentration.md>
Версия разработчиков <./AdvancedOptions/DevBranch.md>
Сборка через браузер: cherry-pick коммита <./AdvancedOptions/BrowserBuildCherryPick.md>

```
```{toctree}
:caption: 11) Как поддержать AAPS

Как помочь с AAPS <./SupportingAaps/HowCanIHelp.md>
Как редактировать документацию <./SupportingAaps/HowToEditTheDocs.md>
Как переводить строки приложения AAPS и документации <./SupportingAaps/Translations.md>
Состояние перевода приложения и документации <./SupportingAaps/StateOfTranslations.md>
Загрузчик Open Humans <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 12) Ресурсы

Глоссарий <./UsefulLinks/Glossary.md>
Полезные ресурсы для чтения прежде чем начать <./UsefulLinks/BackgroundReading.md>
Для врачей – общее введение и руководство по AAPS <./UsefulLinks/ClinicianGuideToAaps.md>
```
