# Конфигуратор

Depending on your settings you can open Config Builder through a tab at the top of **AAPS**' screen or through the hamburger menu.

![Открыть компоновщик конфигурации](../images/ConfBuild_Open_AAPS30.png)

The **Config Builder** is the tab where you turn the modular features on and off. In the picture below, the boxes on the left-hand side (A) allow you to select which modules you want activated, the boxes on the right-hand side (C) allow you to view these as a tab (E) in **AAPS**. In case the right box is not activated, you can reach the function by using the hamburger menu (D) on the top left of the screen. See [Tab or hamburger menu](#tab-or-hamburger-menu) below.

When there are additional settings available within the module, you can click on the cog wheel (B) which will take you to the specific settings within preferences.

![Опции конфигуратора и шестеренка настроек](../images/ConfBuild_ConfigBuilder_AAPS30.png)

(Config-Builder-tab-or-hamburger-menu)=

## Вкладка или сэндвич-меню

С помощью переключателя под значком глаза вы можете решить, как открыть соответствующий раздел программы.

![Вкладка или сэндвич-меню](../images/ConfBuild_TabOrHH_AAPS30.png)

```{contents}
:backlinks: entry
:depth: 2
```

## Profile

This module can not be disabled as it is a core part of **AAPS**.

* See [Your AAPS Profile](../SettingUpAaps/YourAapsProfile.md) for a basic understanding of what goes inside your **Profile**.
* See [AAPS Screens > Profile](#aaps-screens-profile) for more information about managing your **Profiles**.

(Config-Builder-insulin)=

## Инсулин

![Тип инсулина](../images/ConfBuild_Insulin_AAPS30.png)

Select the type of insulin you are using.

More information to understand the Insulin Profile as shown in **AAPS** [here](#AapsScreens-insulin-profile).

### Различия типов инсулина

* Варианты 'Быстро действующий Oref', Сверхбыстрый Oref' и 'Безпиковый Oref' имеют вид экспоненты.
* Для 'Коротких', 'Ультракоротких' и 'Lyumjev' инсулинов время действия DIA - единственный параметр, который можно изменить, время пика фиксировано. 
* Безпиковый позволяет настроить как DIA, так и время пика, эта опция для опытных пользователей, которые знают последствия этих настроек. 
* The [insulin curve graph](#AapsScreens-insulin-profile) helps you to understand the different curves.

#### Быстро действующий Oref

![Тип инсулина: быстродействующий Oref](../images/ConfBuild_Insulin_RAO.png)

* рекомендуется для Humalog, Novolog и Novorapid
* DIA (длительность действия инсулина) = по крайней мере 5.0 часов
* Макс. пик = 75 мин после инъекции (фиксированный, не регулируется)

#### Сверхбыстрый Oref

![Тип инсулина: сверхбыстрый Oref](../images/ConfBuild_Insulin_URO.png)

* рекомендуется для FIASP
* DIA (длительность действия инсулина) = по крайней мере 5.0 часов
* Макс. пик = 55 мин после инъекции (фиксированный, не регулируется)

(Config-Builder-lyumjev)=

#### Lyumjev

![Тип инсулина: Lyumjev](../images/ConfBuild_Insulin_L.png)

* Специальный профиль для инсулина Lyumjev
* DIA (длительность действия инсулина) = по крайней мере 5.0 часов
* Макс. пик = 45 мин после инъекции (фиксированный, не регулируется)

#### Безпиковый Oref

![Тип инсулина: Oref со свободными пиками](../images/ConfBuild_Insulin_FPO.png)

* Для профиля 'Безпиковый 0ref' можно самостоятельно ввести время пика. Для перехода к расширенным настройкам нажмите на значок шестеренки.
* Если в профиле не определено более высокое значение, DIA автоматически устанавливается на 5 часов.
* Этот инсулиновый профиль рекомендуется если используется неподдерживаемый тип инсулина или смесь различных инсулинов.

(Config-Builder-bg-source)=

## Источник данных гликемии

Select the blood glucose source you are using. See [BG Source](../Getting-Started/CompatiblesCgms.md) page for more setup information.

![Источник ГК в конфигураторе](../images/ConfBuild_BG.png)

* [xDrip +](../CompatibleCgms/xDrip.md)
* [NSClient BG](../CompatibleCgms/CgmNightscoutUpload.md) - only if you know what you are doing, see [BG Source](../Getting-Started/CompatiblesCgms.md).
* [MM640g](../CompatibleCgms/MM640g.md)
* [Glimp](#libre1-using-glimp) - only version 4.15.57 and newer are supported
* [Build Your Own Dexcom App (BYODA)](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app).
* [Poctech](../CompatibleCgms/PocTech.md)
* [Tomato App](#libre1-using-tomato) for MiaoMiao device
* [Glunovo App](https://infinovo.com/) для системы Glunovo CGM
* Генерировать случайные данные ГК (только демо-режим)

## Smoothing

![Smoothing](../images/ConfBuild_Smoothing.png)

See [Smoothing blood glucose data](../CompatibleCgms/SmoothingBloodGlucoseData.md).

(Config-Builder-pump)=

## Pump

Выберите помпу, которой пользуетесь. See [Compatible pumps](../Getting-Started/CompatiblePumps.md) page for more setup information.

![Выбор помпы в Конфигураторе](../images/ConfBuild_Pump_AAPS32.png)

* [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)
* DanaR Корея (DanaR для корейского рынка)
* Dana Rv2 (помпа DanaR с неофициальным обновлением прошивки)
* [Dana-i/RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)
* [Accu Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)
* Accu Chek Combo 
  * [Driver using Ruffy](../CompatiblePumps/Accu-Chek-Combo-Pump.md) (requires ruffy installation)
  * [Driver with no additional requirement](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md), added in [AAPS v.3.2](#version3200)
* Omnipod for [Omnipod Eros](../CompatiblePumps/OmnipodEros.md)
* Dash for [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md)
* [Medtronic](../CompatiblePumps/MedtronicPump.md)
* [Diaconn G8](../CompatiblePumps/DiaconnG8.md)
* [EOPatch2](../CompatiblePumps/EOPatch2.md)
* [Medtrum](../CompatiblePumps/MedtrumNano.md)
* Virtual pump: open loop - **AAPS** suggestions only 
  * as you make you first steps with **AAPS**, during the first [objectives](../SettingUpAaps/CompletingTheObjectives.md)
  * for pump which doesn't have any driver yet

## Определение чувствительности

Выберите тип анализа чувствительности. For more details of different designs please [read on here](../DailyLifeWithAaps/SensitivityDetectionAndCob.md). Алгоритм будет сразу же анализировать историю данных и вносить коррективы, если признает, что вы реагируете более чутко (или, наоборот, более резистентно) на инсулин, чем обычно. Подробнее об алгоритме чувствительности можно прочитать в [документации OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

You can view your sensitivity on the homescreen in an [additional graph](#AapsScreens-section-g-additional-graphs). Вы можете вывести график чувствительности на экран, отметив галочкой соответствующий пункт из выпадающего меню графиков. Он изображается в виде белой линии. Note, you need to be in [Objective 8](#objectives-objective8) in order to let Sensitivity Detection/[Autosens](#Open-APS-features-autosens) automatically adjust the amount of insulin delivered. До достижения этой цели процент / линия Autosens на диаграмме отображается только для информации.

### Настройки усваиваемости

If you use Oref1 with **SMB** you must change **min_5m_carbimpact** to 8. The value is only used during gaps in **CGM** readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause **AAPS** to decay COB. At times when [carb absorption](../DailyLifeWithAaps/CobCalculation.md) can't be dynamically worked out based on your blood's reactions it inserts a default decay to your carbs. Этот параметр не приводит к отказам.

(Config-Builder-aps)=

## Система ИПЖ

Выберите нужный алгоритм APS для ведения терапии. Подробности выбранного алгоритма можно просмотреть на вкладке OpenAPS(OAPS).

* OpenAPS AMA 
  * Advanced Meal Assist: older algorithm not recommended anymore.
  * In simple terms, the benefits are after you give yourself a meal bolus, the system can high-temp more quickly IF you enter carbs reliably.
* [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb) 
  * Super Micro Bolus: most recent algorithm recommended for all users.
  * In contrast to AMA, SMB does not use temporary basal rates to control glucose levels, but mainly small **Super Micro Boluses**.
  * Note : It is recommended to use this algorithm from the beginning, even though you will not actually get SMBs delivered until [Objective 9](#objectives-objective9).

If switching from AMA to SMB algorithm, *min_5m_carbimpact* must be changed manually to **8** (default value for SMB) in [Preferences > Sensitivity detection > Sensitivity Oref1 settings](../SettingUpAaps/Preferences.md).

## Замкнутый цикл

This module should not be disabled as it is a core part of **AAPS**.

## Constraints

### Objectives

**AAPS** has a learning program (a series of objectives) that you have to fulfill step by step. Подобная организация алгоритма безопасно проведет вас к созданию замкнутой системы. Она гарантирует, что вы все правильно наладили и понимаете, что именно делает система. Это единственный способ понять, что вы можете доверять системе.

See [Objectives](../SettingUpAaps/CompletingTheObjectives.md) page for more information.

## Синхронизация

In this section, you can choose if/where you want **AAPS** to send your data to.

### NSClient or NSClientV3

Can be used as a [reporting server](../SettingUpAaps/SettingUpTheReportingServer.md) and/or for [remote monitoring](../RemoteFeatures/RemoteMonitoring.md), [remote control](../RemoteFeatures/RemoteControl.md).

See [Synchronization with the reporting server](#SetupWizard-synchronization-with-the-reporting-server-and-more) to help you choose between NSClient (v1) and NSClientV3.

### Tidepool

Can be used as a [reporting server](../SettingUpAaps/SettingUpTheReportingServer.md).

See [Tidepool](../SettingUpAaps/Tidepool.md).

### xDrip

Used to **send** data such as treatments to xDrip+.

### Проект Open Humans

See [Open Humans](../SupportingAaps/OpenHumans.md).

### Смарт-часы Wear

Monitor and control **AAPS** using your Android WearOS watch (see [page Watchfaces](../WearOS/WearOsSmartwatch.md)).

### Samsung Tizen

Broadcast data to Samsung's G-Watch Wear App (Tizen OS).

### Garmin

Connection to Garmin device (Fenix, Edge...)

## Терапия

На вкладке Терапия отражены назначения, загруженные из nightscout. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the [carbs button on the home screen](#screens-bolus-carbs).

## General

### Общие замечания

This is the [main screen](#AapsScreens-the-homescreen) of **AAPS** and can not be disabled.

#### Показать поле примечаний в диалогах терапии

Укажите, хотите ли, чтобы при вводе команд отображалось поле для заметок.

#### Индикаторы состояния

Choose if you want to have [status lights](#Preferences-status-lights) on overview for cannula age, insulin age, sensor age, battery age, reservoir level or battery level. При достижении уровня предупреждения цвет светового сигнала состояния переключится на желтый. Критические сроки будут показаны красным цветом.

#### Расширенные настройки

**Подать часть инсулина, предложенного мастером болюса**: При пользовании алгоритмом микроболюсов SMB многие не колют все 100% сразу, а дают, например, 75% и позволяют алгоритму SMB самостоятельно справляться с остальным. In this setting, you can choose a default value for the percentage the bolus wizard should calculate with. Если этот параметр составляет 75%, а требуемое конечное количество инсулина 10 ед., то мастер болюса предложит только 7,5 единиц.

**Включить функции суперболюса в калькуляторе болюса** (Суперболюс отличается от *супер микро болюсов SMB *!): Применяйте с осторожностью и не включайте, пока не узнаете, в чем принцип его работы. В общем виде база следующих двух часов добавляется к болюсу и при этом активируется нулевой временный базал. **Другие функции алгоритма AAPS будут отключены - поэтому применяйте с осторожностью! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](#Open-APS-features-max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

(Config-Builder-actions)=

### Действия

A tab offering multiple buttons to take [actions](#screens-action-tab) in **AAPS**.

### Автоматизация

A tab for managing your [Automations](../DailyLifeWithAaps/Automations.md), starting at [Objective 10](#objectives-objective10).

(Config-Builder-sms-communicator)=

### СМС-коммуникатор

Allows remote caregivers to control some **AAPS** features via SMS, see [SMS Commands](../RemoteFeatures/SMSCommands.md) for more setup information.

### Еда

Отображает предустановленные характеристики еды, определенные в базе данных Nightscout, см [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) для получения дополнительной информации по параметрам.

Note: Entries cannot be used in the **AAPS** calculator. (Только просмотр)

(Config-Builder-wear)=

### Смарт-часы Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../WearOS/WearOsSmartwatch.md)). Настройте параметры (шестеренка) для определения переменных, которые следует учитывать при расчете болюсов (напр. 15-минутный тренд, активные углеводы COB и т.п....).

Если вы хотите подавать болюс и т. д. с часов, тогда в настройках часов Wear следует включить «Управление с часов».

![настройки смарт-часов Wear](../images/ConfBuild_Wear.png)

При помощи вкладки Wear или многослойного сэндвич-меню (в левой верхней части экрана, если вкладка не отображается) вы можете

* Повторить отправку всех данных. Может быть полезно, если некоторое время часы не были подключены и вы хотите передать на них данные.
* Открыть настройки на часах прямо с телефона.

### Обслуживание

Access this tab to export / import settings.

### Конфигуратор

This current tab.