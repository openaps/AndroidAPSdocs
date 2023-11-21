# Автоматизация

## Что такое автоматизация

Для одинаковых частых событий приходится изменять одни и те же параметры. Чтобы избежать лишней работы, можно автоматизировать событие, если вы можете описать его достаточно точно и позволить ему делать это автоматически.

Например, при низкой ГК, вы можете решить, что должна автоматически установиться высокая временная цель. Или если вы находитесь в фитнес-центре, вы автоматически получаете временную цель.

Перед использованием автоматизации следует уверенно овладеть ручным управлением [временными целями](./temptarget.html) или переключением профиля.

Убедитесь, что вы понимаете, как работает автоматизация перед настройкой первого простого правила. **Вместо действий разрешите AAPS только показывать уведомления.**Если вы уверены, что автоматизация инициируется в нужное время, замените уведомление реальным действием.

```{image} ../images/Automation_ConditionAction_RC3.png
:alt: условие автоматизации + действие
```

## Как пользоваться

Чтобы настроить автоматизацию, нужно дать ей заголовок, выбрать хотя бы одно условие и одно действие.

(Automation-important-note)=
### Важное примечание

**Автоматизация по-прежнему активна при отключении цикла!**

Поэтому при необходимости деактивируйте правила автоматизации на это время. Это можно сделать, сняв галочку в поле слева от названия правила автоматизации.

```{image} ../images/Automation_ActivateDeactivate.png
:alt: Активировать и деактивировать правило автоматизации
```

### Где найти Автоматизацию

Depending on your [settings in config builder](Config-Builder-tab-or-hamburger-menu) you will either find [Automation](Config-Builder#automation) in hamburger menu or as a tab.

### Общие настройки

Есть некоторые ограничения:

- Значение ГК должно составлять от 72 до 270 мг/дл или от 4 до 15 ммоль/л.
- Процент профиля должен составлять от 70% до 130%.
- Существует 5-минутный промежуток времени между выполнениями (и первым выполнением).

**Пожалуйста, будьте внимательны:**

- **менее -2 означает: -3 и ниже (-4, -10 и т. д.)**
- **более -2 означает: -1 и выше (-1, 0, +10 и т.д)**

### Условие

Вы можете выбрать между несколькими условиями. Некоторые моменты здесь объясняются, но основное легко понять и оно не все здесь описано:

- connect conditions: you can have several conditions and can link them with

  - "И"
  - "Или"
  - * "Исключительно или" (что означает, что если применяется одно - и только одно из этих условий, то действие (действия) произойдет

- Время и время повторения

  - время = одно событие времени
  - recurring time = something that happens regularly (i.e. once a week, every working day etc.)

- расположение: в конфигураторе (автоматизация), можете выбрать местоположение сервиса, который хотите использовать:

  - Использовать пассивное расположение: AAPS принимает локацию только в том случае, если другие приложения ее запрашивали
  - Использовать расположение сети: расположение вашего Wifi
  - Используйте локатор GPS (Внимание! Может привести к чрезмерной разрядке аккумулятора!)

### Действие

Можно выбрать одно или несколько действий:

- start temp target

  - должно быть между 72 мг/дл и 270 мг/дл (4 ммоль/л и 15 ммоль/л)
  - работает только в том случае, если нет предыдущей временной цели

- остановить врем цель

- уведомление

- процент профиля

  - должно быть от 70% до 130%
  - works only if the previous percentage is 100%

After adding your action, **don't forget to change the default values** to what you need by clicking in the default values.

```{image} ../images/Automation_Default_V2_5.png
:alt: Automation default vs. set values
```

(Automation-sort-automation-rules)=
### Выбор правил автоматизации

Для отбора правил автоматизации нажмите и удерживайте кнопку с четырьмя строками в правой части экрана и двигайтесь вверх или вниз.

```{image} ../images/Automation_Sort.png
:alt: Выбор правил автоматизации
```

### Удаление правил автоматизации

Для удаления правила автоматизации нажмите на значок корзины.

```{image} ../images/Automation_Delete.png
:alt: Выбор правила автоматизации
```

(Automation-good-practice-caveats)=
## Good practice & caveats

- When you start using automation or create a new rule, first add a notification only until you are sure the rule is working well.

- Watch the rule results.

- Don't try to make conditions too easy (i.e.: IF bg > 80 mg/dl AND bg \< 180 mg/dl)

  **Doubly important if action is a profile switch!**

- Try to use Temp Targets instead of Profile Switches. Temp Targets do not reset [Autosens](Open-APS-features-autosens) back to 0.

- Make sure Profile switches are made sparingly and preferably at a last resort.

  - Profile switching renders [Autosens](Open-APS-features-autosens) useless for a min of 6 hours.

- Profile switching will not reset the profile back to your base profile

  - You have to make another rule to set this back or do it manually!
  - Increased risk of hypoglycemia if profile switch does not expire or reset back to base profile.

## Примеры

Это просто примеры вариантов настройки, не советы. Не воспроизводите их, не зная, что вы делаете или зачем вам это нужно.

- Switching profiles for your daily activities (like school, gym, weekend, workday...) using geolocation, wifi, time etc.
- Setting temp target for activities based on time, location, connection to a bluetooth device...
- Setting eating soon temp targets based on time, location...

### Временная Цель Низкая ГК

```{image} ../images/Automation2.png
:alt: Автоматизация2
```

Эта автоматизация для тех, кто хочет автоматически активировать временную цель ГИПО при низкой ГК.

### Временная Цель Время Обеда

```{image} ../images/Automation3.png
:alt: Автоматизация3
```

Эта автоматизация для тех, кто обедает на работе в одно и то же время каждую неделю. Если он/она в определенное время (перед обедом) находится в определенном месте, автоматизация задает более низкую временную цель (ожидаемый прием пищи). Из-за союза "И" это происходит только в определенное время в определенном месте. Поэтому эта автоматизация не работает в любое другое время на этом месте или в это же время, но когда человек находится дома.

### Неправильное использование автоматизации

Опасайтесь неправильно использовать автоматизацию. Это может привести к трудностям и даже опасности для здоровья. Примеры неправильного применения:

- Trying to override algorithm at all instead of help only (i.e. by changing profile instead of tunning basal, IC etc.)
- Setting profile to compensate food
- Setting profile without duration
- Creating one way rules (i.e. do something but don't undo it by another rule)
- Creating long term rules

## Альтернативы

Для опытных пользователей есть и другие возможности для автоматизации задач с помощью IFTTT или приложения других разработчиков Android под названием Automate. Some examples can be found [here](./automationwithapp.html).
