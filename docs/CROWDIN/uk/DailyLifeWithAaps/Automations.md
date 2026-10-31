# Automation

```{contents} In this page
:backlinks: entry
:depth: 2
```

## Що таке автоматизація?

«**Автоматизація**» - це функція, яка може автоматично виконувати завдання в AAPS.

Автоматизація виконує певні дії на основі однієї або кількох умов чи тригерів. Тригерами можуть бути нерегулярні події, наприклад низький або високий рівень глюкози крові (ГК) або певна кількість від'ємного активного інсуліну (IOB). Автоматизація може також обробляти повторювані події, наприклад їжу або тренування в певний час доби, або спрацьовувати, коли користувач перебуває на певній відстані від GPS-розташування чи в зоні мережі Wi-Fi з певним SSID. Автоматизація може робити резервні копії налаштувань AAPS за розкладом або під час кожної заміни Pod.

Правила автоматизації створюються і змінюються на екрані **Автоматизація** (**Керувати → Автоматизація**). Кожне правило має дві властивості:

- Одна або кілька умов або «тригерів», які запускають дію.

    Наприклад, певний розклад часу, подія або значення параметра в AAPS

- Одна або кілька дій, які потрібно виконати.

    Наприклад, тривога, встановлення відсотка профілю або експорт налаштувань AAPS під час заміни Pod.


Варіантів автоматизації дуже багато, і користувачам варто вивчити їх у застосунку AAPS, у розділі «Автоматизація». Приклади автоматизації від інших користувачів можна також знайти в групах користувачів AAPS у [**Facebook**](https://www.facebook.com/groups/AndroidAPSUsers) та [**Discord**](https://discord.gg/4fQUWHZ4Mw).

## Чим може допомогти автоматизація

1. **Автоматизація повторюваних завдань:** Запрограмовані дії виконуються автоматично, без участі користувача.

1. **Менше втоми від рішень:** Головна користь **автоматизації** в тому, що користувачу не потрібно вручну втручатися в роботу **AAPS**. За даними [дослідження](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6286423/#ref4), люди з діабетом 1 типу щодня мають приймати в середньому 180 додаткових рішень. **Автоматизація** може зменшити розумове навантаження, і користувач матиме більше сил для інших сторін життя.

1. **Можливо, кращий контроль глікемії:** наприклад, **автоматизація** допомагає завжди встановлювати **тимчасові цілі**, коли вони потрібні, навіть у дуже зайняті дні або коли ви щось забуваєте. Наприклад, якщо в дитини з діабетом у школі заняття спортом у вівторок о 10:00 і в четвер о 14:00, і за 30 хвилин до заняття потрібна висока тимчасова ціль («ТЦ»), то **тимчасову ціль** можна вмикати за допомогою **автоматизації**.

1. **AAPS можна дуже гнучко налаштувати**, щоб він був більш або менш агресивним у певних ситуаціях, як хоче користувач. Наприклад, тимчасово зменшити % **профілю** на заданий час, якщо посеред ночі з'являється від'ємний **IOB**. Це ознака того, що поточний **профіль** може бути занадто сильним.

Приклад нижче показує, як **автоматизація** може прибрати зайві кроки.

Користувач займається спортом щоранку о 6:00: він має не забути вручну встановити в AAPS «Тимчасову ціль - Активність» о 5:00, перед тренуванням.

![Альтернативний текст](../images/Automations/automation_concept_manual.png)

Користувач налаштував **автоматизацію**, яка о 5:00 запускає «Тимчасову ціль - Активність», щоб його **ГК** та **IOB** були оптимальними для тренування о 6:00:

![Альтернативний текст](../images/Automations/automation_concept_automated.png)

## Що важливо врахувати перед початком роботи з автоматизацією

1. Перш ніж налаштовувати деякі правила автоматизації, ви повинні мати достатньо добрий контроль **ГК** з **AAPS**. Автоматизацію не слід використовувати для компенсації неоптимальних налаштувань базалу, **ISF** або **CR** (докладніше нижче). Не налаштовуйте автоматичне **перемикання профілю** для компенсації підйомів **ГК** через, _наприклад_, їжу. З ними краще впоратися іншими способами (SMB тощо).

1. Як і будь-яка техніка, **CGM**, **помпи** і телефони можуть працювати несправно: технічні проблеми або помилки сенсора можуть порушити дії **автоматизації**, і може знадобитися ручне втручання.

1. **Requirements for Automations are likely to change as routines change**. Коли змінюються періоди роботи / навчання / відпустки, поставте собі нагадування в календарі, щоб перевірити, які правила **автоматизації** зараз активні (їх легко вмикати та вимикати). Наприклад, якщо ви їдете у відпустку і вам більше не потрібна автоматизація для шкільного спорту чи щоденних тренувань, або потрібно змінити час.

1. Правила **автоматизації** можуть конфліктувати між собою. Добре уважно перевіряти будь-які нові налаштування **автоматизації** в безпечних умовах і розуміти, чому **автоматизація** спрацювала або не спрацювала так, як ви очікували.

1. Якщо ви використовуєте Autosens, намагайтеся використовувати **тимчасові цілі** замість **перемикання профілю**. **Тимчасові цілі** не скидають Autosens до 0. **Перемикання профілю** скидає Autosens.

1. Більшість правил **автоматизації** слід налаштовувати лише на **обмежений час**. Після цього **AAPS** може знову оцінити ситуацію і, якщо потрібно і умова все ще виконується, повторити **автоматизацію**. Наприклад, «запустити тимчасову ціль 7,0 ммоль/л на 30 хв» або «запустити **профіль** 110 % на 10 хв» _та_ «запустити тимчасову ціль 5,0 ммоль/л на 10 хв». Якщо за допомогою **автоматизації** робити постійні зміни (наприклад, сильніший % профілю), є ризик гіпоглікемії.

## Коли можна почати використовувати автоматизацію?

**Автоматизацію** можна почати використовувати в **завданні 10**.

## Де в AAPS знаходиться автоматизація?

Відкрийте **Керувати** на нижній панелі навігації головного екрана і виберіть **Автоматизація**.

## Як налаштувати автоматизацію?

Щоб налаштувати **автоматизацію**, натисніть кнопку **+** на екрані «Автоматизація» і створіть «правило»:

![Створення автоматизації](../images/Automations/automation_create.png)

* дайте «правилу» назву (Назва завдання);
* натисніть «**РЕД**» під **Умова**. На екрані **Умова** виберіть, як поєднуються тригери (**Та**, **Або**, **Виключне або**), і натисніть «**Додати тригер**»:

![Умова автоматизації](../images/Automations/automation_trigger_editor.png)

* додайте щонайменше один тригер:

![Тригери автоматизації](../images/Automations/automation_triggers.png)

* натисніть «**ДОД**» під **Дія** і виберіть одну дію:

![Дії автоматизації](../images/Automations/automation_actions.png)

* збережіть правило кнопкою **Зберегти** і переконайтеся, що позначку ліворуч від назви правила «поставлено», щоб увімкнути **автоматизацію**:

![Автоматизацію увімкнено](../images/Automations/automation_rule_activated.png)

Щоб вимкнути правило **автоматизації**, зніміть позначку ліворуч від назви **автоматизації**. Приклад нижче показує **автоматизацію** увімкнену («з позначкою») або вимкнену («без позначки»):

![Альтернативний текст](../images/Automations/automation_rule_activated_deactivated.png)


Під час налаштування **автоматизації** її можна спочатку перевірити: увімкніть варіант «сповіщення» в розділі «Дії». Тоді **AAPS** спочатку показує сповіщення замість того, щоб справді автоматично виконувати дію. Коли ви переконаєтеся, що сповіщення з'являється в правильний час / за правильних умов, можна змінити правило **автоматизації** і замінити «Сповіщення» на «Дію».

![Альтернативний текст](../images/Automations/automation_alert_actions.png)

```{admonition} Important note
:class: note

**Автоматизація** працює навіть тоді, коли петлю вимкнено!
```


## Коли перевіряються правила

**AAPS** перевіряє всі правила **автоматизації** щоразу після обробки нового значення глюкози, тому правила оцінюються з тією ж частотою, що й ваш CGM, також коли екран телефону вимкнено. Правила також перевіряються, коли телефон починає заряджатися, коли змінюється мережа або розташування і коли підключається пристрій Bluetooth. Одночасно виконується лише одна перевірка, тому правило, дії якого тривають довше (наприклад, команда помпі), не може виконатися двічі.

## Обмеження безпеки

Для **автоматизації** встановлено обмеження безпеки:

* **Тимчасова ціль**, яку встановлює **автоматизація**, має бути від 72 до 180 мг/дл (або від 4 до 10 ммоль/л).
* **Відсоток профілю** має бути від 50 % до 130 %.
* Між виконаннями **автоматизації** (і до першого виконання) діє обмеження в 5 хвилин.

## Правильне використання від'ємних значень

```{admonition} Warning
:class: warning

Будьте обережні, коли вибираєте від'ємне значення в **автоматизації**
```

Будьте обережні, коли вибираєте «від'ємне значення» в «Умові», наприклад «менше ніж», в **автоматизації**. For example:

![Альтернативний текст](../images/Automations/automation_comparison_operators.png)

**Приклад 1:** Якщо створити умову **«менше ніж»** «-0,1 ммоль/л» (або «-2 мг/дл»), то вона:

Запускає **автоматизацію** для будь-якого числа, яке **строго менше** ніж -0,1 (-2). Це числа -0,2, -0,3, -0,4 (-4, -6, -8) і так далі. Пам'ятайте, що саме число -0,1 (-2) **не входить** у цю умову. (Умова «дорівнює або менше ніж -0,1 ммоль/л (-2 мг/дл)» _включала б_ -0,1 ммоль/л або -2 мг/дл).

**Приклад 2:** Якщо створити умову «більше ніж» -0,1 ммоль/л (-2 мг/дл), то вона:

Запускає **автоматизацію** для будь-якого числа, яке **більше ніж** -0,1 ммоль/л (-2 мг/дл). Це числа 0, 0,2, 0,4 ммоль/л (0, 4, 8 мг/дл) і будь-яке інше додатне число.

Обираючи ці умови та значення, важливо уважно продумати, що саме має робити ваша **автоматизація**.

(automations-automation-triggers)=
## Тригери автоматизації

![Тригери автоматизації](../images/Automations/automation_triggers.png)

Scroll down to see the rest of the list:

![Тригери автоматизації, продовження](../images/Automations/automation_trigger_picker_2.png)

Користувач може вибрати різні «тригери». Тригери - це умови, які мають виконуватися, щоб автоматизація спрацювала. Цей список неповний:

**Тригер:** поєднання умов

**Варіанти:**

Кілька умов можна поєднати за допомогою
* «Та»
* «Або»
* «Виключне або» (це означає, що дія (дії) відбудеться, якщо виконується одна - і лише одна - з умов)

**Тригер:** час або повторюваний час

**Варіанти:**

* час = одноразова подія в певний час
* повторюваний час = те, що відбувається регулярно (наприклад, раз на тиждень, кожного робочого дня тощо)

**Тригер:** розташування

**Варіанти:**

* у [Налаштування > Автоматизація](#preferences-maintenance-settings) користувач може вибрати потрібну службу розташування.

**Тригер:** служба розташування

**Варіанти:**

* Використовувати пасивне розташування: **AAPS** отримує розташування лише тоді, коли його запитують інші застосунки.
* Використовувати мережеве розташування: розташування вашої мережі Wi-Fi.
* Use GPS location (Attention! Це може дуже швидко розряджати батарею!)

**Тригери**: дані помпи та сенсора

* Тригер «Вік канюлі»: доступний для всіх помп
* Тригер «Вік інсуліну»: доступний для помп, які це підтримують
* Тригер «Вік батареї помпи»: доступний для помп, які це підтримують
* Тригер «Вік сенсора»: доступний завжди
* Тригер «Активація Pod»: доступний для патч-помп

Зверніть увагу: для всіх тригерів віку порівняння «дорівнює» навряд чи спрацює, тому в такому разі для створення діапазону потрібні два тригери

* Тригер «Рівень резервуара»: доступний для всіх помп. Порівняння "NOT\_AVAILABLE" для цього тригера не працює, бо в **AAPS** це значення завжди заповнене
* Тригер «Рівень батареї помпи»: доступний для помп, які це підтримують. Порівняння "NOT\_AVAILABLE" для цього тригера не працює, бо в **AAPS** це значення завжди заповнене

(automations-automation-action)=
## Дія

![Дії автоматизації](../images/Automations/automation_actions.png)

Scroll down to see the rest of the list:

![Дії автоматизації, продовження](../images/Automations/automation_action_picker_2.png)

**Дії:** запустити **тимчасову ціль**

**Варіанти:**

* **ГК** має бути від 72 мг/дл до 180 мг/дл (від 4 ммоль/л до 10 ммоль/л)
* **ТЦ** працює, лише якщо немає попередньої тимчасової цілі — **AAPS** автоматично додає до правила рядок «**Передумови: Тимчасова ціль відсутня**»

**Дії:** скасувати **тимчасову ціль**

**Варіанти:**

немає

**Дії:** **Відсоток профілю**

**Варіанти:**

* **Профіль** має бути від 50 % до 130 %
* працює, лише якщо попередній відсоток 100 %

**Дії:** **Змінити згладжування**

**Варіанти:**

* виберіть [метод згладжування](../CompatibleCgms/SmoothingBloodGlucoseData.md), на який потрібно перемкнутися
* виконується, лише якщо цей метод згладжування ще не активний — **AAPS** автоматично додає до правила рядок «**Передумови: Згладжування … не активне**». Якщо вибране згладжування вже активне, правило мовчки пропускається.
* Приклад: разом з тригером **Вік сенсора** перемикайтеся на **Згладжування середнім** у перший день нового сенсора, а потім назад на **Без згладжування**.

**Дії:** **Примітка** (у групі **Сповіщення** у списку)

**Варіанти:**

* select the event to record: **Note**, **Exercise**, **Question**, **Announcement** or **Pump Site Change**, and an optional note. The name of the action changes to the event you select.
* **Duration**: used for **Note**, **Exercise** and **Pump Site Change**. **Question** and **Announcement** have no duration: they record your current BG instead.
* **Pump Site Change** resets the cannula age, as if you had recorded a site change by hand. Example: some pumps (like the Combo) record a reservoir change by themselves, but not the site change. If you always change both together, a rule with **Insulin age** less than 1 hour and **Cannula age** more than 24 hours can record the site change for you.

![The events of the Note action](../images/Automations/automation_action_careportal_events.png) ![The Note action set to Pump Site Change](../images/Automations/automation_action_careportal_site_change.png)

**Actions:** **Send SMS** (in the **Alerts** group)

**Варіанти:**

* enter the text of the message. It is sent to all the phone numbers allowed in the [SMS Communicator](../RemoteFeatures/SMSCommands.md) settings. The SMS Communicator plugin must be enabled.

**Actions:** **Change profile to** (in the **Profile** group)

**Варіанти:**

* select the **Profile** to activate. It is activated at 100%, without timeshift. If this profile is already active, the action does nothing.

**Actions:** **Enable/disable SMB** (in the **Loop & insulin** group)

**Варіанти:**

* choose **On** or **Off**. This changes the **Enable SMB** setting of OpenAPS SMB, exactly as if you had changed it in **Settings**, and stays until you or another rule change it back.

**Actions:** **Autotune profile** (in the **Loop & insulin** group)

**Варіанти:**

* select the profile to tune and the number of days: see [Run Autotune with an automation rule](#autotune-run-autotune-with-an-automation-rule).

**Actions:** **Stop processing** (in the **Loop & insulin** group)

**Варіанти:**

* none. When a rule with this action runs, **AAPS** does not check the rules below it in the list during that run. Add it to a rule that must take priority over the rules below it (see [the order of the Automations](#Automations-the-order-of-the-automations-in-the-list-matters)).

**Actions:** **Run scene**, **Enable scene**, **Disable scene** (in the **Scenes** group)

**Варіанти:**

* select the [scene](Scenes.md) to run, enable or disable.

Після додавання «Дії» потрібно змінити значення за замовчуванням на потрібне число: натисніть на значення і змініть його.

![Альтернативний текст](../images/Automations/automation_action_temp_target_values.png)

(Automations-the-order-of-the-automations-in-the-list-matters)=
## Порядок правил **автоматизації** у списку має значення
 **AAPS** виконує створені правила в порядку пріоритету, починаючи згори списку **автоматизації**. Наприклад, якщо **автоматизація** «Низька» - найважливіша **автоматизація** і має перевагу над усіма іншими правилами, ця **автоматизація** має бути на початку списку **автоматизації** користувача, як показано нижче:


![Альтернативний текст](../images/Automations/automation_rule_list.png)

To reprioritize the **Automation** rules, touch and hold the **=** handle on the right side of the rule. Змінюйте порядок **автоматизації**, переміщуючи правила вгору або вниз.

![Альтернативний текст](../images/Automations/automation_rule_reorder.png)

## Як видалити правила автоматизації

Щоб видалити правило **автоматизації**, натисніть на значок кошика.

![Альтернативний текст](../images/Automations/automation_rule_delete.png)

## Приклади автоматизації

Нижче наведено приклади **автоматизації**. Більше обговорень **автоматизації** і того, як користувачі налаштовують свою **автоматизацію**, можна знайти в групах обговорень у Facebook або в Discord. Не повторюйте наведені нижче приклади, якщо добре не розумієте, як працюватиме **автоматизація**.

(automations-low-glucose-temp-target)=
### Тимчасова ціль при низькій глюкозі

This **Automation** triggers an automatic **Temp Target** when **BG** falls below a certain threshold — here, when glucose is lesser than 70 mg/dL, a target of 110 mg/dL is started for 30 minutes:

![Альтернативний текст](../images/Automations/automation_example_low_glucose_rule.png)

### Тимчасова ціль на обід (з «Розташуванням»)

![Альтернативний текст](../images/Automations/automation_example_lunch_rule.png)

Цю **автоматизацію** створено для користувача, який обідає на роботі приблизно в той самий час кожного робочого дня. Вона спрацьовує лише тоді, коли користувач перебуває в заданому «розташуванні».  So if the user is not at work one day, this **Automation** will not activate.

This **Automation** will set a low **Temp Target** (Eating Soon) at 13:00 to drive BG to 90 mg/dL (or 5 mmol/L) in preparation for lunch.

The ‘Trigger’ location has a name, a position (tap **Pick from map**, or use your current location) and a radius in metres, and fires when you are inside (or outside) the area:

![Альтернативний текст](../images/Automations/automation_example_lunch_location_condition.png)

Через поєднання «Та» **автоматизація** спрацьовує лише у «вибраний час» і лише тоді, коли користувач перебуває у вибраному розташуванні.

The **Automation** will not be triggered on any other time at this location or at this time outside the 50-metre radius around the chosen position.

### Wi-Fi SSID Location Automation

Using a Wi-Fi SSID is a good option to trigger an **Automation** while within range of a specific Wi-Fi network (compared with GPS): it is fairly precise, uses less battery, and works in enclosed spaces where GPS and other location services might not be available.

Ось ще один приклад налаштування **тимчасової цілі** лише в робочі дні перед сніданком (1).


The **Automation** will trigger at 05:30am only on Monday-Friday(2)  
and while being connected to a home Wi-Fi network (3).


It will then set a **Temp Target** of 75 mg/dL for 30 minutes (4). One of the advantages of including the location is that it will not trigger if the user is traveling on vacation, for instance.

![Wi-Fi rule: task name (1), weekday time condition (2) and Wi-Fi SSID condition (3)](../images/Automations/automation_example_wifi_rule.png)

Scroll down to see the action: a **Temp Target** of 75 mg/dL for 30 minutes (4).

![Wi-Fi rule action: Start temp target of 75 mg/dL for 30 minutes (4)](../images/Automations/automation_example_wifi_action.png)

Ось знімок екрана з тригерами **автоматизації**:

1) Under the main “AND” (both conditions need to be met to trigger) 1) Recurring time = M,T,W,T,F At 5:30am  
1) Wi-Fi SSID = My_Home_WiFi_Name

![Альтернативний текст](../images/Automations/automation_example_wifi_condition.png)

(automating-preference-settings-export)=

## Автоматизація експорту налаштувань

### Фоновий експорт: за розкладом (щодня)

Знімки екрана з тригерами автоматизації:

1) Умова: Повторюваний час = Пн,Вт,Ср,Чт,Пт о 8:00 1) Дія: Експорт налаштувань (у полі «Текст у терапії» введіть «Щодня»)

![Експорт за розкладом](../images/Automations/automation_settings_export_daily.png)

Примітка: виконання експорту записується в Careportal

### Фоновий експорт: активація Pod (лише для патч-помп)

Знімки екрана з тригерами автоматизації:

1) Умова: Активація Pod 1) Дія: Експорт налаштувань (у полі «Текст у терапії» введіть «Активація Pod: експорт налаштувань»)

![Експорт під час активації Pod](../images/Automations/automation_settings_export_pod_activation.png)

Примітка: виконання експорту записується в Careportal. Примітка: автоматизація **взагалі** не спрацює, якщо ви раніше жодного разу не робили експорт налаштувань вручну. See [Settings → Maintenance](#preferences-maintenance-settings) for proper activation of unattended settings export.


## Журнал автоматизації

**AAPS** shows a log of the most recent **Automation** events at the bottom of the **Automation** screen, below the rules. Use it to verify that your rules triggered when you expected them to.

In the example below, the **Low glucose temp target** rule (1) (see [Low Glucose Temp Target](#automations-low-glucose-temp-target) above) is enabled. The log (2) shows that at 03:09 PM, glucose fell below 70 mg/dL and the rule triggered:
* the action was "Start temp target: 110mg/dL@30 min": a **Temp Target** of 110 mg/dL for 30 minutes;
* **OK** at the end means that the action was carried out successfully.

![Automation screen: an enabled rule (1) and its log entry (2)](../images/Automations/automation_example_log.png)

(automations-troubleshooting)=

## Усунення несправностей

* Проблема: __AAPS не запускає мої правила автоматизації?__

Check that the box left of the **Automation** name is ‘ticked’ to ensure the rule is activated:

![Альтернативний текст](../images/Automations/automation_rule_activated_deactivated.png)

* Проблема: __Мої правила автоматизації спрацьовують у неправильному порядку.__

Check your rule prioritization order as discussed above here.

* Problem: __A condition shows "Unknown trigger … - never true".__

The rule contains a trigger that this version of **AAPS** cannot read, for example after you went back to an older version or imported settings from a newer one. Such a trigger is never true, so the rule does not run. It is kept unchanged, so a newer version can still use it. Edit the rule and replace the trigger, or update **AAPS**.

## Альтернативи автоматизації

Досвідчені користувачі можуть автоматизувати завдання й іншими способами: за допомогою IFTTT або стороннього Android-застосунку Automate. 
