# Добро пожаловать в Документацию по AndroidAPS (AAPS)

![изображение](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

 xx xxxx 202x : Version {{ aaps_version }}.x.x is out. Прочитайте [Release Notes](#latestrelease), чтобы узнать, что изменилось, для обновления воспользуйтесь [инструкцией](./Maintenance/UpdateToNewVersion.md).

```

Android APS (**AAPS**) является приложением с открытым исходным кодом для людей, страдающих инсулинозависимым диабетом. Это система искусственной поджелудочной железы (APS), которая работает на смартфонах Android. **AAPS** использует алгоритм OpenAPS и нацелен на воплощение функциональности реальной поджелудочной железы - содержание СК (сахара, глюкозы в крови) в здоровых пределах при помощи автоматизированной подачи инсулина. To use **AAPS** you need **three** compatible devices: **(1)** an Android phone, **(2)** a continuous glucose monitor (CGM), and **(3)** an FDA/CE approved insulin pump. You can also add **(4)** cloud services to remotely control **AAPS**, share your data, and store it on a reporting server, and **(5)** a smartwatch.

This documentation explains how to set up and use **AAPS**. You can navigate through the **AAPS** documentation either through the menu on the left (and the handy **Search docs** function), or by using the [index](#index-aaps-documentation-index) at the bottom of this page.

## Обзор документации AAPS

Section **1) Getting Started**, the [Introduction](Getting-Started/Introduction.md) explains the general concept of what an artificial pancreas system (APS) is designed to do. В нем описывается история замкнутых циклов в целом, почему был разработан **AAPS**, его сравнение с другими подобными системами и описание безопасности применения **AAPS**. Оно дает советы о том, как говорить с вашей врачебной командой об **AAPS**, рассказывает, почему вы должны собирать **AAPS** самостоятельно вместо простого скачивания сборки, показывает типичное подключение системы **AAPS**. Так же оно затрагивает доступность, и кому, вероятнее всего, полезнее использовать **AAPS**.

[Подготовка к AAPS](./Getting-Started/PreparingForAaps.md) дает более детальную информацию о безопасности системы, рассказывает, какие телефоны, НМГ и инсулиновые помпы совместимы с **AAPS**. Она дает общую картину того, через что вам предстоит пройти, так же показывает примерную таблицу сроков получения полной функциональности **AAPS**. Эта секция позволяет технически подготовиться к сборке вашей конфигурации **AAPS** как можно более эффективно и быстро. The subsection [CGM Configuration](./Getting-Started/CompatiblesCgms.md) explains how to optimize your CGM setup and which smoothing options are best.

Теперь, когда у вас есть четкое понимание всего процесса, вы можете начать собирать свой цикл (петлю) на базе **AAPS**.

Section **2) Build the app** explains why you need to build the **AAPS** app yourself rather than just downloading it, and takes you step-by-step through [building it](./SettingUpAaps/BuildingAaps.md) (using a browser, Android Studio, or the command line) and then transferring and installing it on your phone. It starts with an optional step, setting up a [dedicated Google account](./UsefulLinks/DedicatedGoogleAccountForAaps.md) to hold your builds and backups. It also explains [Android developer verification](#android-developer-verification), a change Google is rolling out from September 2026 that affects how self-built apps are installed.

Section **3) Setting up the reporting server** covers choosing and [setting up your reporting server](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout or Tidepool) so you can review and share your data.

Section **4) [Configure AAPS](./SettingUpAaps/SetupWizard.md)** covers setting up the **AAPS** app using the setup Wizard, linking it with your CGM app and either a real or virtual insulin pump, as well as linking **AAPS** to your reporting server. You are then introduced to everything **AAPS** can do, through a safe, carefully paced, step-by-step process. This makes sure that you (or your child) are thoroughly familiar and comfortable navigating all the different levels and menu configurations before moving on to the next phase, commonly called the next "Objective". You keep progressing this way until you have enough experience to begin using the more advanced options in the app. Данные цели специально разработаны таким образом, чтобы вы постепенно открывали все больше и больше возможностей **AAPS** и переключились с открытого цикла на замкнутый.

Section **5) [Daily life with AAPS](./DailyLifeWithAaps/AapsScreens.md)** covers key **AAPS** features, to help you use (and customize) **AAPS**. This includes understanding the screens, carbs-on-board, sensitivity, DynamicISF, profile switching, temp targets, extended carbs (or eCarbs), automations, and [reviewing your data](./Maintenance/Reviewing.md) in the history browser and statistics. It also covers frequent topics like how to manage different types of meals, how to deal with cannula and sensor changes, smartphone updates, daylight saving changes, [traveling with AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md), and sports. Частые вопросы и ответы на них находятся в секции "Решение проблем".

Section **6) [Remote AAPS features](./RemoteFeatures/RemoteControl.md)** highlights a real strength of **AAPS**. Имеется множество различных возможностей для удаленного управления или мониторинга **AAPS**. Данная секция одинаково полезна как для тех, кто заботится о детях с диабетом при помощи **AAPS**, так и для взрослых, которые хотят следить за своими показателями удобнее, чем на телефоне (на часах, в машине, _т. д._), или для тех, кто хочет дать важным для них людям так же следить за показателями. Так же данный раздел описывает процесс настройки Android Auto для просмотра уровня СК в машине.

Section **7) [Wear OS smartwatches](./WearOS/BuildingAapsWearOS.md)** gives information and procedures to use an Android **Wear OS** smartwatch with the dedicated **AAPS** watchfaces or custom watchfaces, either as a remote control of your phone or just a display indicator.


Section **8) [Maintenance of AAPS](./Maintenance/ExportImportSettings.md)** covers how to export and back up your settings (which is very important in case you lose/break your phone), gives the latest version notes, details how to update **AAPS** and explains what happens when a version reaches its end of life. Рассчитывайте на одну новую версию и 2-3 обязательных обновления в год. Следует своевременно устанавливать обновления, так как в **AAPS** как и в любом ПО, постоянно исправляются мелкие ошибки и появляются новые улучшения. Есть отдельный пункт "Обновление" в секции решения проблем с распространенными вопросами.

Section **9) [Help & Troubleshooting](GettingHelp/WhereCanIGetHelp.md)** should help direct you to the best places to go to find general help with **AAPS**. It is the single place to go when something is not working: the [Troubleshooting](GettingHelp/GeneralTroubleshooting.md) hub collects, by topic, the solutions to the most common problems, and the [FAQ](UsefulLinks/FAQ.md) answers frequent questions. Он позволит быстро связаться с другими пользователями, уточнить вопросы и разобраться с частыми ошибками новичков. Множество людей уже успешно применяют **AAPS**, но у всех однажды появляются вопросы, в которых трудно разобраться самостоятельно. Из-за большого числа пользователей, время ответа на вопросы как правило, лишь несколько часов. Не стоит волноваться по поводу просьбы о помощи, ведь глупых вопросов не бывает! Призываем пользователей любого уровня задавать столько вопросов, сколько необходимо для безопасной работы. Этот раздел включает в себя основные решения проблем с **AAPS** и **AAPSClient** (приложение-компаньон для удаленного мониторинга), а также отправить данные **AAPS** (журналы отладки) разработчикам при технической проблеме с **AAPS**.

Section **10)** covers **[Advanced AAPS options](./AdvancedOptions/FullClosedLoop.md)** such as how to progress from using **AAPS** for hybrid-closed looping (bolusing for meals _etc._) to full closed looping (no bolusing), how to [tune your profile](./GettingHelp/ProfileTuning.md) and use Autotune, and details development and engineering modes. Большинство пользователей устроит основная ("master") ветка **AAPS** без рассмотрения выше названных опций, этот раздел предназначен для тех, кто уже хорошо владеет замкнутым циклом и хочет улучшить свои показатели.

In section **11) [How to support AAPS](SupportingAaps/HowToEditTheDocs.md)** we provide information so that you can support this project. Вы можете пожертвовать как денежные средства, так и оборудование или ваши навыки. Можно предлагать/вносить изменения в документацию самостоятельно, помогать с [переводом документации](SupportingAaps/Translations) и делиться своими показателями через проект Open Humans с научными сотрудниками.

Section **12) Resources**, contains archived or additional documentation, including a subsection for [clinicians](UsefulLinks/ClinicianGuideToAaps.md) who have expressed interest in open source artificial pancreas technology such as **AAPS**, or for patients who want to share such information with their clinicians, this topic is also addressed in the introduction. Больше информации про диабет и использование замкнутого цикла можно так же найти в этом разделе. It includes the [Glossary](./UsefulLinks/Glossary.md), a list of the acronyms (or short-term names) used throughout **AAPS**. Именно здесь вы узнаете, что обозначают термины по типу, например, ISF или TT.


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

**AAPS** has no association with, and is not endorsed by: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/), [Medtronic](https://www.medtronic.com/), [Diaconn](https://www.diaconn.com/en/index.html), [EOFlow](http://www.eoflow.com/), [MicroTech Medical (Equil)](https://www.microtechmd.com/), [Medtrum](https://www.medtrum.com/), [Senseonics (Eversense)](https://www.senseonics.com/), [i-SENS (CareSens)](https://i-sens.com/), [POCTech](https://poctechcorp.com/en/), [Ottai](https://ottai.com/) or [Syai](https://www.syai.com/).

```

(index-aaps-documentation-index)=

## Оглавление документации AAPS

```{toctree}
:caption: Using this documentation

Change language and version <./NavigateDoc/ChangeLanguageVersion.md>
Search the documentation <./NavigateDoc/SearchDoc.md>
Documentation updates <./Maintenance/DocumentationUpdate.md>
```
```{toctree}
:caption: 1) Getting started

Introduction to AAPS <./Getting-Started/Introduction.md>
Preparing for AAPS <./Getting-Started/PreparingForAaps.md>
Component Overview <./Getting-Started/ComponentOverview.md>
- Compatible pumps <./Getting-Started/CompatiblePumps.md>
- Compatible CGMs <./Getting-Started/CompatiblesCgms.md>
- Compatible phones  <./Getting-Started/Phones.md>
- Compatible watches  <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 2) Build the app

Dedicated Google account for AAPS (optional) <./UsefulLinks/DedicatedGoogleAccountForAaps.md>
Building AAPS <./SettingUpAaps/BuildingAaps.md>
- Browser Build <./SettingUpAaps/BrowserBuild.md>
- Android Studio Build <./SettingUpAaps/ComputerBuild.md>
- CLI Build <./SettingUpAaps/CLIBuild.md>
Transferring and Installing AAPS <./SettingUpAaps/TransferringAndInstallingAaps.md>
```
```{toctree}
:caption: 3) Setting up the reporting server

Setting up the reporting server <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
```
```{toctree}
:caption: 4) Configure AAPS

Setup Wizard <./SettingUpAaps/SetupWizard.md>
Your AAPS Profile <./SettingUpAaps/YourAapsProfile.md>
Change AAPS configuration <./SettingUpAaps/ChangeAapsConfiguration.md>
- Configuration (Config Builder) <./SettingUpAaps/ConfigBuilder.md>
- Preferences <./SettingUpAaps/Preferences.md>
Completing the objectives <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 5) Daily Life with AAPS

AAPS Screens <./DailyLifeWithAaps/AapsScreens.md>
Key AAPS Features <./DailyLifeWithAaps/KeyAapsFeatures.md>
COB calculation <./DailyLifeWithAaps/CobCalculation.md>
Sensitivity detection <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
Dynamic ISF <./DailyLifeWithAaps/DynamicISF.md>
Profile Switch & Profile Percentage <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Temp-Targets <./DailyLifeWithAaps/TempTargets.md>
Extended carbs <./DailyLifeWithAaps/ExtendedCarbs.md>
QuickWizards <./DailyLifeWithAaps/QuickWizards.md>
Scenes <./DailyLifeWithAaps/Scenes.md>
Automations <./DailyLifeWithAaps/Automations.md>
QuickLaunch toolbar <./DailyLifeWithAaps/QuickLaunch.md>
Home screen widgets <./DailyLifeWithAaps/Widgets.md>
Food database <./DailyLifeWithAaps/Food.md>
Global search <./DailyLifeWithAaps/GlobalSearch.md>
Reviewing your data <./Maintenance/Reviewing.md>
AAPS for children <./DailyLifeWithAaps/AapsForChildren.md>
Pumps and cannulas <./DailyLifeWithAaps/PumpsAndCannulas.md>
Timezone traveling & Daylight Saving Time <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 6) Remote AAPS features

Remote monitoring <./RemoteFeatures/RemoteMonitoring.md>
Following Only <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>
Remote control <./RemoteFeatures/RemoteControl.md>
The AAPSClient app <./RemoteFeatures/AapsClient.md>
Master ↔ Client control <./RemoteFeatures/ClientMasterControl.md>
SMS Commands <./RemoteFeatures/SMSCommands.md>

```
```{toctree}
:caption: 7) Wear OS Smartwatches

AAPS for Wear OS <./WearOS/BuildingAapsWearOS.md>
Use the smartwatch <./WearOS/WearOsSmartwatch.md>
Remote control <./RemoteFeatures/RemoteControlWearOS.md>
Custom watchfaces reference <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Exchange site custom watchfaces <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 8) Maintenance of AAPS

Export/Import Settings <./Maintenance/ExportImportSettings.md>
AAPS Release Notes <./Maintenance/ReleaseNotes.md>
What changed in AAPS v4 <./Maintenance/V4Changes.md>
Updating to a new version of AAPS <./Maintenance/UpdateToNewVersion.md>
- Browser Update (fork) <./Maintenance/UpdateBrowserBuild.md>
- Android Studio Update <./Maintenance/UpdateComputerBuild.md>
End of life <./Maintenance/EndOfLife.md>

```

```{toctree}
:caption: 9) Help & Troubleshooting

Where can I get help with AAPS <./GettingHelp/WhereCanIGetHelp.md>
Troubleshooting (start here) <./GettingHelp/GeneralTroubleshooting.md>
- Bluetooth troubleshooting <./GettingHelp/BluetoothTroubleshooting.md>
- Troubleshooting NSClient <./GettingHelp/TroubleshootingNsClient.md>
- Troubleshooting Android Studio <./GettingHelp/TroubleshootingAndroidStudio.md>
- Browser build troubleshooting <./GettingHelp/BrowserBuildTroubleshooting.md>
- Reinstalling AAPS (new keystore) <./GettingHelp/ReinstallAaps.md>
- Accessing logfiles <./GettingHelp/AccessingLogFiles.md>
FAQ <./UsefulLinks/FAQ.md>
```

```{toctree}
:caption: 10) Advanced AAPS options

Full Closed Loop <./AdvancedOptions/FullClosedLoop.md>
Profile Tuning Guide <./GettingHelp/ProfileTuning.md>
Autotune <./AdvancedOptions/Autotune.md>
Insulin concentration <./AdvancedOptions/InsulinConcentration.md>
Dev branch <./AdvancedOptions/DevBranch.md>
Browser build: cherry-pick a commit <./AdvancedOptions/BrowserBuildCherryPick.md>

```
```{toctree}
:caption: 11) How to support AAPS

How to help <./SupportingAaps/HowCanIHelp.md>
Editing the docs <./SupportingAaps/HowToEditTheDocs.md>
Translating the app and docs <./SupportingAaps/Translations.md>
State of translations <./SupportingAaps/StateOfTranslations.md>
Open Humans Uploader <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 12) Resources

Glossary <./UsefulLinks/Glossary.md>
General diabetes and looping resources <./UsefulLinks/BackgroundReading.md>
For Clinicians <./UsefulLinks/ClinicianGuideToAaps.md>
```
