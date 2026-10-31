# Обзор компонентов

**AAPS** is not just a (self-built) application; it is one of several modules of your closed loop system. Before deciding on components, it is a good idea to look at the component documentation.

![Components overview](../images/modules.png)

```{admonition} IMPORTANT SAFETY NOTICE
:class: important

Основа функций безопасности **AAPS**, описанных в данной документации, построена на базе функций безопасности ваших устройств, использованных для сборки системы. Для закрытия автоматизированного цикла подачи инсулина чрезвычайно важно использовать только протестированные, полностью рабочие и одобренные медицинскими регуляторами вашей страны системы НМГ и инсулиновые помпы. Внесение аппаратных или программных технических изменений в это оборудование может стать причиной неконтролируемого введения инсулина, что может повлечь опасные последствия для пациента. Если вы найдете или вам предложат сломанные, модифицированные или самодельные инсулиновые помпы или трансмиттеры НМГ, **не используйте их** для создания системы на базе **AAPS**.

Допустимо использовать только оригинальные, сертифицированные производителем расходные материалы, такие как инсулиновые картриджи, инфузионные наборы, пристреливатели к ним и т. п. Использование непроверенных или модифицированных материалов может вызвать неточность мониторинга и ошибки дозировки инсулина. Инсулин опасен при неверной дозировке - не рискуйте жизнью, пользуясь неумело переделанными компонентами.

Наконец, что не менее важно, запрещается принимать SGLT-2 ингибиторы (глифлозины), поскольку они непредсказуемо снижают уровень СК. Сочетание с системой, которая снижает базальную скорость для повышения ГК является особенно опасным, поскольку из-за глифлозинов этот подъем ГК может не произойти и возникнет нехватка инсулина. [Подробнее](#PreparingForAaps-no-sglt-2-inhibitors).
```

## Необходимые модули

### Хорошо подобранные дозы и коэффициенты для компенсации

Even though this is not something to create or buy, it is probably the most underestimated 'module' — but it is essential. When you let an algorithm help manage your diabetes, it needs to know the right settings so it does not make severe mistakes. Даже если у вас все еще нет других модулей, можно проверить и отредактировать свой **профиль** вместе с эндокринологом.

**Профиль** включает в себя:

- BR (уровни базала): обеспечивают фоновый (базальный) инсулин;
- ISF (рус: ФЧИ, фактор чувствительности к инсулину): насколько ваш уровень ГК понижается от 1 единицы инсулина;
- CR (carb ratio): how many grams of carbohydrate are covered by one unit of insulin.

Большинство пользователей систем ИПЖ используют циклические суточные величины скорости базала (BR), гормональную чувствительность к инсулину ISF и углеводный коэффициент CR.

Alongside your **Profile**, you also need to configure your **insulin** in **Manage → Insulin settings**, including its DIA (duration of insulin action) — see [Insulin settings](#Config-Builder-insulin-dia).

More information about your **Profile** [on the dedicated page](../SettingUpAaps/YourAapsProfile.md).

### Телефон

See the dedicated page [Phones](../Getting-Started/Phones.md).

### Инсулиновая помпа

See the dedicated page [Compatible Pumps](../Getting-Started/CompatiblePumps.md).

**Advantages and disadvantages of some pump models**

The Combo, the Insight and the older Medtronic are solid pumps, and loopable. The Combo has the advantage of many more infusion set types to choose from as it has a standard Luer-Lock. And the battery is a default one you can buy at any gas station, 24-hour convenience store and if you really need one, you can steal/borrow it from the remote control in the hotel room ;-).

The advantages of the DanaR/RS and Dana-i vs. the Combo as the pump of choice however are:

- Первоначальное сопряжение проходит проще с Dana-i/RS. Но обычно это делается только один раз, так что это свойство важно, если хотите проверить новую функцию на других помпах.
- На данный момент Combo работает с экранным анализом (для обратного инжиниринга). В целом, это неплохо, но этот процесс идет медленно. Для цикла ИПЖ это не имеет значения, так как он работает в фоновом режиме. Still there is much more time you need to be connected so more time when the BT connection might break, which isn't so easy if you walk away from your phone whilst bolusing & cooking.
- Combo вибрирует по завершении временных базалов TBR, Dana вибрирует (или пищит) на микроболюсах SMB. At nighttime, you are likely to be using TBRs more than SMB.  The Dana-i/RS is configurable so that it does neither beep nor vibrate.
- Reading the history on the Dana-i/RS in a few seconds with carbs makes it possible to switch phones easily while offline and continue looping as soon as some CGM values are in.
- All pumps **AAPS** can talk with are waterproof on delivery. Но только помпы Dana также "гарантированно водонепроницаемы" благодаря изолированным отсекам батареи и системы наполнения резервуара.

### Источник данных гликемии

See the dedicated page [Compatible CGMs](../Getting-Started/CompatiblesCgms.md).

### **AAPS**-.apk file

The main component of the system. In order to install the app, you have to build the apk-file yourself first. Instructions are [here](../SettingUpAaps/BuildingAaps.md).

### Reporting server

A reporting server displays your glucose and treatment data, and creates reports for detailed analysis. There are currently two reporting servers available for use with AAPS: [Nightscout](#SettingUpTheReportingServer-nightscout) and [Tidepool](#SettingUpTheReportingServer-tidepool). They both provide ways to visualize your diabetes data over time, provide statistics about the **time in range** (TIR) and other measures.

The Reporting server is independent of the other modules. If you don’t want to use a reporting server, you should know that it is not mandatory for running **AAPS** in the long term. But you still need to set one up, as it is required to fulfill [**Objective 1**](#objectives-objective1).

Additional information on how to set up your reporting server can be found [here](../SettingUpAaps/SettingUpTheReportingServer.md).

## Дополнительные модули

### Смарт часы

You can choose any smartwatch running **Wear OS 3** or newer. See [Watches](../Getting-Started/Watches.md) for details.

Users are creating a [list of tested phones and watches](#Phones-list-of-tested-phones). There are different watchfaces for use with **AAPS**, which you can find [here](../WearOS/WearOsSmartwatch.md).

### xDrip

Even if you don't need the xDrip app as your **BG Source**, you can still use it, for example for alarms or a different blood glucose display. You can have as many alarms as you want, specify the time when an alarm should be active, choose whether it can override silent mode, etc. Some xDrip information can be found [here](../CompatibleCgms/xDrip.md). Please be aware that the documentation for this app is not always up to date, as it changes quickly.

## Что делать во время ожидания модулей

It sometimes takes a while to get all the modules for closing the loop. But no worries, there are a lot of things you can do while waiting. It is **necessary** to check and (where appropriate) adapt basal rates (BR), insulin-carbratio (IC), insulin-sensitivity-factors (ISF) etc. And maybe open loop can be a good way to test the system and get familiar with **AAPS**. Using this mode, **AAPS** gives treatment recommendations you can manually execute.

You can keep on reading through the docs here, get in touch with other loopers online or offline, [read](../UsefulLinks/BackgroundReading.md) documentations or what other loopers write (even if you have to be careful, not everything is correct or good for you to reproduce).

**Done?** If you have your **AAPS** components all together (congrats!) or at least enough to start in open loop mode, you should first read through the [Objective description](../SettingUpAaps/CompletingTheObjectives.md) before each new Objective, and set up your hardware.
