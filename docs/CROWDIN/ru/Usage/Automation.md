# Автоматизация

## Что такое автоматизация?

"**Automation**" является функцией **AAPS**, которая позволяет упростить управление диабетом пользователя путем автоматических изменений в подачу инсулина. **Автоматизации** позволяют пользователям **AAPS<** подстраивать его работу под свои индивидуальные потребности.

Каждый конкретный скрипт Автоматизации **** инструктирует **AAPS** выполнять определенное действие в результате одного или нескольких условий, или триггеров. Такими активаторами могут быть назначены нерегулярные эпизодические событий вроде низкого или высого сахара крови, или некоторая заданная величина отрицательного активного инсулина IOB в организме. Ими также могут стать периодические мероприятия, например, прием пищи или физ нагрузки в определенное время суток, или когда пользователь находится в пределах определенного местоположения GPS или зоны WIFI SSID.

Существует большой выбор опций автоматизации, и пользователям рекомендуется изучать их в приложении **AAPS** в разделе автоматизации. Можно также найти группы пользователей **AAPS** на **Facebook**, **Discord**, Telegram и т. п. для обмена примерами автоматизации с другими пользователями.

## Как может помочь автоматизация

1. **Уменьшение забот, связанных с принятием решений:** Основное преимущество **автоматизации** заключается в освобождении пользователя от бремени ручного вмешательства в работу **AAPS**. [Исследования](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6286423/#ref4) показывают, что людям с сахарным диабетом 1 типа, приходится принимать в среднем 180 дополнительных решений в день. **Автоматизация** может уменьшить эту нагрузку, высвобождая умственную энергию пользователя для других аспектов жизни.

1. **Потенциально улучшит гликемический контроль: ** например, **автоматизация** может обеспечить, чтобы ** Временные целевые показатели** устанавливались по мере необходимости, даже во время напряженного графика или периодов забывчивости. Например, если у ребенка с сахарным диабетом запланированы занятия спортом в школе по вторникам в 10 утра и четвергам в 14: 00, и ему всегда нужно, чтобы за 30 минут до этих занятий включалась временная высокая цель, это может быть обеспечено автоматизацией.

1. <**Позволяет тщательно настраивать AAPS**, чтобы быть более или менее агрессивными в конкретных ситуациях, в зависимости от предпочтений пользователя. Например, срабатывание временного пониженного % профиля на заданный период времени, если активный инсулин **IOB** стал отрицательным посреди ночи, что указывает на чрезмерную агрессивность профиля действующего.

Приводимый ниже пример показывает, как **Автоматизация** может активировать шаги для устранения забот. Пользователь настроил **Автоматизацию** на запуск "Временной цели Нагрузка" в 5 утра, чтобы обеспечить себе оптимальную гликемию **ГК** и **активный инсулин IOB** для зарядки в 6 утра:

![Alt text](../images/automation_2024-02-12_20-54-49.png)

## Основные соображения перед началом применения автоматизации

1. Перед настройкой **Автоматизации**необходимо иметь надлежащий контроль ГК с помощью **AAPS**. <**Автоматизация** не должна применяться для компенсации неоптимизированной базы, коэффициента чувствительности ISF или углеводного коэффициента IC (обсуждается ниже). Избегайте установки автоматизации на **переключение профиля** для компенсации повышения ГК _например_, вследствие приема пищи, с этим лучше справляться с помощью других стратегий (микроболюсов и т.п.).

1. Как любые другие технологии, <мониторинги ГК</strong>, **помпы** и **телефоны** могут работать со сбоями: технические проблемы или ошибки сенсоров могут нарушить работу **автоматизации** и потребовать ручного вмешательства.

1. **Требования к автоматизации могут меняться при изменении хода событий**. При смене между периодами работы/школы/отпуска, установите в календаре напоминание о том, какие автоматизации активны (их легко активировать и деактивировать). Например, если вы едете в отпуск, то больше не нуждаетесь в автоматизации для занятий физподготовкой или занятий в зале, или же требуется корректировать время.

1. Режимы автоматизации могут конфликтовать друг с другом, поэтому рекомендуется тщательно просмотреть любые новые настройки автоматизации в безопасной среде и понять, почему автоматизация может сработать, а может и не сработать в соответствии с ожиданиями.

1. При использовании Autosense попробуйте использовать **Временные цели** вместо **Переключателя профилей**. **Временные цели TT** не сбрасывают Autosens на 0. **Переключатели профиля** сбрасывают Autosens.

1. Большинство автоматизаций следует устанавливать на **ограниченный промежуток времени**, после чего **AAPS** при необходимости повторно оценит и повторит автоматизацию. Например, "начать временную цель 7,0 ммоль/л продолжительностью 30 мин" или "начать профиль 110% продолжительностью 10 мин" _ и_ "начать временную цель 5,0 ммоль/л продолжительностью 10 мин". Использование автоматизации для внесения постоянных изменений (например, для повышения %p профиля) может привести к гипогликемии.

## Когда начать применять Автоматизацию?

При запуске Цели 10.

## Где находятся настройки автоматизации в AAPS?

В зависимости от настроек [конфигуратора](../Installing-AndroidAPS/change-configuration.md#config-builder) **Automation** находится либо в выпадающем сэндвич-меню, либо в виде вкладки с **AAPS**.

## Как настроить автоматизацию?

Чтобы настроить **Automation** создайте правило **AAPS** следующим образом:

* Дайте название вашему "правилу";
* Select at least one ‘Condition’; and
* Выберите одно «действие»;
* Установите правый флажок события **Automation** для активации автоматизации:

![Alt text](../images/automation_2024-02-12_20-55-35.png)


To deactivate an **Automation** rule, untick the box left of the name of the **Automation**. В приведенном ниже примере показаны **Automation**  под названием «Low Glucose TT» как активированный («помеченный) или деактивированный («unticked»).

![Alt text](../images/automation_2024-02-12_20-56-08.png)


При настройке автоматизации сначала можно проверить ее, включив опцию «notification (уведомление)» в разделе «Действия». Это заставляет**AAPS** сначала вывести уведомление, а не автоматизировать действие. Когда вы убедитесь, что уведомление запущено в правильное время/ при правильных условиях, правило **Автоматизации** может быть обновлено, с заменой "Уведомления" на ‘Действие’.

![Alt text](../images/automation_2024-02-12_20-55-05.png)

:::{admonition} Important note
:class: note

Automations are still active when the Loop is disabled!
:::


## Safety limits

There are safety limits set for **Automations**:

* The **glucose** value has to be between 72 and 270 mg/dl (or 4 and 15 mmol/l).
* The **Profile** percentage has to be between 70% and 130%.
* There is a 5 minute time limit between executions of  **Automation** (and first execution).

## Correct use of negative values

:::{admonition} Warning
:class: warning

Please be careful when selecting a negative value in Automation
:::

Caution must be taken when selecting a ‘negative value’ within the ‘Condition’ like "less than" in **Automations**. Например:

![Alt text](../images/automation_2024-02-12_20-56-25.png-500x.png)

**Example 1:** Creating a Condition **"is lesser than"** "-0.1" will:

Trigger an **Automation** for any number which is **strictly** less than** -0.1. This includes numbers like -0.2, -0.3, -0.4 and so on. Remember that -0.1 itself **is not** included in this condition. (The condition "is equal or lesser than -0.1" _would_ include -0.1).

**Example 2:** Creating a Condition "is greater than" -0.1 will:

Trigger an **Automation** for any number which is **greater than** -0.1. This includes numbers like 0, 0.2, 0.4, and any other positive number.

It is important to carefully consider the exact intention of your **Automation** when choosing these conditions and values.

## Automation Conditions

There are various ‘Conditions’ that can be selected by the user. The list below is non-exhaustive:

**Condition:** connect conditions

**Options:**

Several conditions can be linked with
* “And”
* “Or”
* “Exclusive or” (which means that if one - and only one of the - conditions applies, the action(s) will happen)

**Condition:** time vs. recurring time

**Options:**

* time = single time event
* периодическое время = то, что происходит регулярно (т.е. раз в неделю, каждый рабочий день и т. д.)

**Condition:** location

**Options:**

* in the **config builder** (Automation), the user can select their required location service.

**Condition:** location service

**Options:**

* Use passive location: **AAPS** only takes locations when other apps are requesting it.
* Use network location: Location of your Wifi.
* Используйте локатор GPS (Внимание! This can cause excessive battery drain!)

## Действие

**Actions:** start **Temp Target**

**Options:**

* **BG** must be between 72 mg/dl and 270 mg/dl (4 mmol/l and 15 mmol/l)
* **TT** works only if there is no previous Temp Target

**Actions:** stop **Temp Target**

**Options:**

none

**Actions:** **Profile** percentage

**Options:**

* **Profile** must be between 70% and 130%
* работает только в том случае, если предыдущий процент составляет 100%

Once the ‘Action’ is added,  the default values must be changed to the desired number by clicking and adjusting the default values.

![Alt text](../images/automation_2024-02-12_20-57-07.png)

![Alt text](../images/automation_2024-02-12_20-57-29.png)

## The order of the automations in the list matters
 **AAPS** will automate the rules created in the order of preference, starting from the top of the **Automation** list. For example, if the ‘low hypoglycemia’  **Automation** is the most important **Automation**, above all other rules, then this  **Automation** should appear at the top of the user’s **Automation** list as demonstrated below:


![Alt text](../images/automation_2024-02-12_20-57-48.png-500x.png)

To reprioritise the **Automation** rules, click and hold the four-lines-button on the right side of the screen. Reorder the  **Automations** by moving the rules up or down.

![Alt text](../images/automation_2024-02-12_20-58-00.png-500x.png)

## How to delete Automation rules

To delete an **Automation** rule click on the trash icon.

![Alt text](../images/automation_2024-02-12_20-58-26.png-500x.png)

## Examples of Automations

Below are examples of **Automations**. Further discussion on **Automations** and how users have individualised their  **Automation** can be found in Facebook discussions groups or on Discord. The examples below should not be replicated without the user having a good understanding of how the **Automation** will work.

### Временная Цель Низкая ГК

This **Automation**  triggers an automatic ‘Temp Target Hypo’ when low **BG** is at a certain threshold.

![Alt text](../images/automation_2024-02-12_21-04-01.png-500x.png)

### Lunch Time Temp Target (with ‘Location’)

![Alt text](../images/automation_2024-02-12_21-04-25.png-500x.png)

This **Automation** has been created for a user who eats their lunch at work around the same time every weekday but triggered only if the user is situated within a set ‘location’.  So if the user is not at work one day, this Automation will be activated.

This **Automation** will set a low Temp Target (Eating Soon) at 13:00 to drive ‘BG, to 90mg (or 5 mmol/l) in preparation for lunch.

The ‘Trigger’ location is set by inputting the latitude and longitude GPS coordinates as below:

![Alt text](../images/automation_2024-02-12_21-04-40.png-500x.png)

Because of the ‘And’ connection, the **Automation** only happens during the ‘chosen time’ and if the user is at the selected location.

The **Automation** will not be triggered on any other time at this location or on this time outside of 100 metres set GPS coordinates.

### WIFI SSID Location Automation

Using WIFI SSID is a good option to trigger an **Automation** while within range of a specific wifi network (than compared with GPS), it is fairly precise, uses less battery and works in enclosed spaces where GPS and other location services might not be available.

Here is another example of setting up a **Temp Target** for work days only before breakfast(1).


The **Automation** will trigger at 05:30am only on Monday-Friday(2)  
and while being connected to a home wifi network (3).


It will then set a**Temp Target**  of 75mg/dl for 30 minutes (4). One of the advantages of including the location is that it will not trigger if the user is travelling on vacation for instance.

![Alt text](../images/automation_2024-02-12_21-05-02.png-500x.png)

Here is the screenshot detailing the **Automation**  triggers:

1) Under the main “AND” (both conditions need to be met to trigger) 1) Recurring time = M,T,W,T,F At 5:30am  
1) WIFI SSID = My_Home_Wifi_Name

![Alt text](../images/automation_2024-02-12_21-05-16.png-500x.png)

## Automation Logs

**AAPS** has a log of the most recent **Automation** triggered at the bottom of the screen under the **Automation** tab.

In the example below the logs indicate:

(1) at 01:58 am, the “Low BG triggers temp hypo profile” is activated
* glucose value is less than 75mg/dl;
* delta is negative (ie: the BG is going down);
* time is within 01:00 am and 06:00 am.

The **Automation** will:
* set a **Temp Target** to 110mg/dl for 40 minutes;
* start a temporary **Profile** at 50% for 40 minutes.

(2) at 03:38 am,  the “High carb after low at night” is triggered
* time is between 01:05 am and 06:00 am;
* glucose value is greater than 110mg/dl.

The **Automation** will:
* change **Profile** to LocalProfile1 (ie: cancel the temporary profile if any)
* stop **Temp Target** (if any)

![Alt text](../images/automation_2024-02-12_21-05-56.png-500x.png)

## Устранение неполадок

* Problem: __My automations are not being triggered by AAPS?__

Check the box to the right of  **Automation** event is ‘ticked’ to ensure the rule is activated.

![Alt text](../images/automation_2024-02-12_21-06-12.png-500x.png)

* Problem: __My automations are being triggered in the wrong order.__

Check your rule prioritisation order as discussed above here.

## Alternatives to Automations

For advanced users, there are other possibilities to automate tasks using IFTTT or a third party Android app called Automate. 

