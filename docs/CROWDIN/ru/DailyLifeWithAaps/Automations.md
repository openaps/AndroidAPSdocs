# Автоматизация

## Что такое автоматизация?

"**Automation**" is a feature within **AAPS** which can simplify a user’s diabetes management by making automatic changes to insulin delivery in order to fit within the individual's lifestyle needs.

An **Automation** instructs **AAPS** to carry out a specific action 'automatically' as a result of one or more conditions or triggers. This can be for irregular episodic events, like low or high **BG**, a set amount of negative **IOB**. It can also be for reoccurring events, for example a meal or exercise at a certain time of day, or when the user is located within a certain distance of GPS location or WIFI SSID area.

There are a wide range of **Automation** options, and users are encouraged to study these within the **AAPS** app, in the **Automation** section. You can also search the **AAPS** user groups on **Facebook** and **Discord** for **Automation** examples from other users.

## Как может помочь автоматизация

1. **Decreasing decision fatigue:** The primary benefit of **Automations** is to relieve the user from the burden of having to make manual interventions in **AAPS**. [Исследования](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6286423/#ref4) показывают, что людям с сахарным диабетом 1 типа, приходится принимать в среднем 180 дополнительных решений в день. **Автоматизация** может уменьшить эту нагрузку, высвобождая умственную энергию пользователя для других аспектов жизни.

1. **Potentially improving glycemic control:** for example, **Automations** can help ensure **Temp Targets** are always set when needed, even during busy schedules or periods of forgetfulness. For example, if a child with diabetes has sports scheduled at school on Tuesdays at 10am and Thursdays at 2pm and requires a high Temp Target ('TT') actioned 30 minutes before the sports activity, the **Temp Target** can be enabled by way of an **Automation**.

1. **Enabling AAPS to be highly customised** to be more or less aggressive in specific situations, according to a user's preference. For example, triggering a temporary reduced **Profile** % for a set period of time if negative **IOB** develops in the middle of the night, indicating that the existing **Profile** may be too strong.

Приводимый ниже пример показывает, как **Автоматизация** может активировать шаги для устранения забот. The user has set an **Automation** to trigger a 5am ‘Temp Target Exercise’ to ensure their **BG** and **IOB** are optimal, in preparation for their 6 am exercise:

![Альтернативный текст (alt text)](../images/automation_2024-02-12_20-54-49.png)

## Основные соображения перед началом применения автоматизации

1. Before setting up an **Automation**, you should have reasonable **BG** control with **AAPS**. **Automations** should not be used to compensate for sub-optimal basal, **ISF** or **CR** settings (discussed further below). Avoid setting an automated **Profile switch** to compensate for **BG** rises due to _e.g._ food, these are better dealt with via other strategies (SMBs etc).

1. As with any technology, **CGMs**, **Pumps** and phones can malfunction: Technical issues or sensor errors can disrupt the **Automation** actions, and manual intervention may be needed.

1. **Requirements for **Automations** are likely to change as routines change**. When changing between work/school/holiday periods, set a reminder in your calendar to review which **Automations** are currently active (they are easy to activate and de-activate). For example, if you go on holiday, and no longer need a Automation set up for school sports or daily exercise, or need to adjust the timings.

1. **Automations** may conflict with each other, and it is good to review any new **Automation(s)** setting carefully in a safe environment, and understand why an **Automation** may or may not have triggered in the way you expect.

1. If using Autosens, try to use **Temp Targets** instead of **Profile Switches**. **Временные цели TT** не сбрасывают Autosens на 0. **Переключатели профиля** сбрасывают Autosens.

1. Most **Automations** should only be set for a **limited time duration**, after which **AAPS** can re-evaluate and repeat the **Automation**, if necessary, and if the condition is still met. For example, "start temp target of 7.0 mmol/l for 30 min" or "start **Profile** 110% for 10 min" _and_ "start temp target of 5.0 mmol/l for 10 min". Using **Automations** to create permanent changes (e.g. to stronger %profile) risks hypoglycemia.

## Когда начать применять Автоматизацию?

**Automations** can be started in **objective 10**.

## Где находятся настройки автоматизации в AAPS?

Depending on your [config builder](../SettingUpAaps/ConfigBuilder.md) settings, **Automation** is located either in the ‘hamburger’ menu or as a tab with **AAPS**.

## Как настроить автоматизацию?

Чтобы настроить **Automation** создайте правило **AAPS** следующим образом:

* give your ‘rule’ a title;
* select at least one ‘Condition’; and
* select one ‘Action’;
* check the right box to the **Automation** event is ‘ticked’ to activate the **Automation**:

![Автоматизация](../images/automation_2024-10-26_17-48-05.png)



Чтобы отключить правило **Automation**, снимите галочку с поля слева от названия правила **Automation**. The example below shows an **Automation** entitled ‘Low Glucose TT’ as either activated (‘ticked') or deactivated (‘unticked’).

![Альтернативный текст (alt text)](../images/automation_2024-02-12_20-56-08.png)


When setting up an **Automation**, you can first test it by activating the ‘notification’ option under "Actions". Это заставляет**AAPS** сначала вывести уведомление, а не автоматизировать действие. Когда вы убедитесь, что уведомление запущено в правильное время/ при правильных условиях, правило **Автоматизации** может быть обновлено, с заменой "Уведомления" на ‘Действие’.

![Альтернативный текст (alt text)](../images/automation_2024-02-12_20-55-05.png)

```{admonition} Important note
:class: note

**Automations** are still active when the Loop is disabled!
```


## Ограничения безопасности

Для **Автоматизации** установлены ограничения безопасности:

* Значение ГК должно составлять от 72 до 270 мг/дл или от 4 до 15 ммоль/л).
* The **Profile Percentage** has to be between 70% and 130%.
* Существует 5-минутный промежуток времени между выполнениями **Автоматизации** (и ее первым выполнением).

## Правильное использование отрицательных значений

```{admonition} Warning
:class: warning

Please be careful when selecting a negative value in **Automation**
```

Необходимо соблюдать осторожность при выборе «отрицательного значения» в «Условиях», как например «менее чем» в **Automations**. Например:

![Альтернативный текст (alt text)](../images/automation_2024-02-12_20-56-25.png-500x.png)

**Пример 1:** Создание условия **"меньше, чем"** "-0,1" приведет к:

Запустит **Automation** для любого числа, которое **строго** меньше, чем** -0,1. Сюда войдут такие числа как -0.2, -0.3, -0.4 и так далее. Помните, что -0,1 само **не** включен в это условие. (условие "меньше или равно -0,1" _включало бы_ -0,1).

**Пример 2:** Создание условия "больше, чем" -0,1 приведет к:

Запустит **Автоматизацию** для любого числа, которое **строго** больше, чем** -0,1. Сюда входят такие числа как 0, 0,2, 0,4 и любые другие положительные числа.

Важно тщательно учитывать точное назначение **автоматизации** при выборе этих условий и значений.

## Условия Автоматизации

Существуют различные «Условия», которые могут быть выбраны пользователем. Приводимый ниже перечень не исчерпывающий:

**Условие** связка условий

**Варианты:**

Несколько условий могут быть связаны при помощи
* “И”
* “Или”
* * "Исключительно либо" (что означает, что если применяется одно - и только одно из этих условий, то действие (действия) произойдет

**Условие:** время и время повторения

**Варианты:**

* время = одно событие времени
* периодическое время = то, что происходит регулярно (т.е. раз в неделю, каждый рабочий день и т. д.)

**Условие:** место

**Варианты:**

* в **конфигураторе** (Автоматизация) пользователь может выбрать необходимую ему службу определения местоположения.

**Условие:** служба определения местоположения

**Варианты:**

* Использовать пассивное расположение: **AAPS** принимает локацию только в том случае, если ее запрашивают другие приложения.
* Use network location: Location of your Wi-Fi.
* Используйте локатор GPS (Внимание! Может привести к чрезмерной разрядке аккумулятора!)

## Действие

**Действия:** начать **Временную цель**

**Варианты:**

* **ГК** должна быть между 72 мг/дл и 270 мг/дл (4 ммоль/л и 15 ммоль/л)
* **ВЦ** работает только в том случае, если нет предыдущей временной цели

**Действия:** остановить **временную цель**

**Варианты:**

отсутствуют

**Actions:** **Profile Percentage**

**Варианты:**

* **Профиль** должен быть между 70% и 130%
* works only if the previous Percentage is 100%

После добавления «Действия» значения по умолчанию должны быть изменены на желаемую величину путем нажатия и изменения значения по умолчанию.

![Альтернативный текст (alt text)](../images/automation_2024-02-12_20-57-07.png)

![Альтернативный текст (alt text)](../images/automation_2024-02-12_20-57-29.png)

(Automations-the-order-of-the-automations-in-the-list-matters)=
## The order of the **Automations** in the list matters
 <**AAPS** автоматизирует правила в порядке предпочтения, начиная с верхней части списка **Автоматизация**. Например, если **Автоматизация** ‘низкая гипогликемия’ является наиболее важной **автоматизацией**, превышающей все остальные правила, то эта **Автоматизация** должна отображаться в начале списка созданных пользователем **Автоматизаций **, как показано ниже:


![Альтернативный текст (alt text)](../images/automation_2024-02-12_20-57-48.png-500x.png)

To reprioritize the **Automation** rules, click and hold the four-lines-button on the right side of the screen. Меняйте порядок  **Автоматизаций**, перемещая правила вверх или вниз.

![Альтернативный текст (alt text)](../images/automation_2024-02-12_20-58-00.png-500x.png)

## Как удалить правила автоматизации

Для удаления правила **автоматизации** нажмите на значок корзины.

![Альтернативный текст (alt text)](../images/automation_2024-02-12_20-58-26.png-500x.png)

## Примеры Автоматизации

Ниже приведены примеры **Автоматизаций**. Обсуждение **Автоматизаций** и того, как пользователи индивидуализировали свою  **Automation** можно найти в группах Facebook или в Discord. Приведенные ниже примеры не следует воспроизводить без хорошего понимания пользователем того, как будет работать **Автоматизация**.

### Временная Цель Низкая ГК

Эта **Автоматизация** запускает автоматическую  "Временную Цель Гипо", когда низкая **ГК** находится на определенном пороговом уровне.

![Альтернативный текст (alt text)](../images/automation_2024-02-12_21-04-01.png-500x.png)

### Временная цель Обеденный перерыв (с "Локацией")

![Альтернативный текст (alt text)](../images/automation_2024-02-12_21-04-25.png-500x.png)

Эта **Автоматизация** была создана для пользователя, который обедает на работе примерно в одно и то же время каждый будний день, но запускается только в том случае, если пользователь находится в пределах заданного ‘местоположения’.  So if the user is not at work one day, this **Automation** will be activated.

This **Automation** will set a low **Temp Target** (Eating Soon) at 13:00 to drive ‘BG, to 90mg (or 5 mmol/l) in preparation for lunch.

"Инициирующее" местоположение устанавливается путем ввода GPS-координат широты и долготы, как показано ниже:

![Альтернативный текст (alt text)](../images/automation_2024-02-12_21-04-40.png-500x.png)

Из-за союза "И" **Автоматизация** происходит только в "выбранное" время при нахождении пользователя на предопределенном месте.

**Автоматизация ** не будет активирована ни в какое другое время в этом месте или в это время за пределами 100 метров от установленных GPS-координат.

### Автоматизация по локации SSID WIFI

Использование SSID WI-Fi - хороший вариант для запуска **автоматизации** по нахождению в зоне действия определенной сети Wi-Fi (по сравнению с GPS), он достаточно точен, потребляет меньше заряда батареи и работает в закрытых помещениях, где GPS и другие службы определения местоположения могут быть недоступны.

Еще один пример установки **Временной Цели** на рабочие дни только перед завтраком (1).


Автоматизация **** запустится в 05:30am только в понедельник-пятницу (2)  
и при подключении к домашней сети wifi (3).


It will then set a **Temp Target**  of 75mg/dl for 30 minutes (4). Одно из преимуществ включения местоположения заключается в том, что правило не будет срабатывать, если пользователь путешествует в отпуске, например.

![Альтернативный текст (alt text)](../images/automation_2024-02-12_21-05-02.png-500x.png)

Here is the screenshot detailing the **Automation** triggers:

1) Under the main “AND” (both conditions need to be met to trigger) 1) Recurring time = M,T,W,T,F At 5:30am  
1) WIFI SSID = My_Home_WiFi_Name

![Альтернативный текст (alt text)](../images/automation_2024-02-12_21-05-16.png-500x.png)

## Журналы автоматизации

В <**AAPS** ведется журнал недавно сработавших **автоматизаций** в нижней части экрана на вкладке **Автоматизация**.

В приведенном ниже примере журнал показывает:

(1) в 01:58 ночи активируется правило “Низкий ГК запускает временный профиль Гипо”
* уровень ГК менее 75 мг/дл;
* дельта отрицательна (т. е. ГК снижается);
* время в пределах 01:00 и 06:00 утра.

**Автоматизация**:
* установит **временную цель** 110mg/dl на 40 минут;
* запустит временный 50% **профиль** продолжительностью 40 минут.

(2) в 03:38 утра срабатывает правило "Много углеводов после низкой ГК ночью"
* время в пределах 01:05 и 06:00 утра;
* уровень ГК выше 110мг/дл.

**Автоматизация**:
* изменит **профиль** на LocalProfile1 (т. е. отменит временный профиль, если таковой имеется)
* остановит **Врем Цель Temp Target** (если есть)

![Альтернативный текст (alt text)](../images/automation_2024-02-12_21-05-56.png-500x.png)

## Troubleshooting

* Проблема: __Мои автоматизации не запускаются в AAPS__

Check the box to the right of **Automation** event is ‘ticked’ to ensure the rule is activated.

## Troubleshooting

![Альтернативный текст (alt text)](../images/automation_2024-02-12_21-06-12.png-500x.png)

* Проблема: __ Мои автоматизации запускаются в неправильном порядке.__

Проверьте порядок расстановки приоритетов правил, как описано ранее.

## Alternatives to Automations

Для опытных пользователей есть и другие возможности автоматизации задач с помощью IFTTT или приложения других разработчиков Android под названием Automate. 
