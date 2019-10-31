Автоматизация
***************

Что такое автоматизация
===================
Для одинаковых частых событий приходится изменять одни и те же параметры. Чтобы избежать лишней работы, можно автоматизировать событие, если вы можете описать его достаточно точно и позволить ему делать это автоматически. Например, при низкой ГК, вы можете решить, что должна автоматически установиться высокая временная цель. Или если вы находитесь в фитнес-центре, вы автоматически получаете временную цель. Перед использованием автоматизации следует уверенно овладеть ручным управлением ` временными целями <./temptarget.html> ` _ или переключением профиля. 

.. изображение:: ../images/Automation_ConditionAction_RC3.png
  :alt: условие автоматизации + действие

How to use it
================
Чтобы настроить автоматизацию, нужно дать ей заголовок, выбрать хотя бы одно условие и одно действие. 

Общие настройки
--------
Есть некоторые ограничения:

* Значение ГК должно составлять от 72 до 270 мг/дл или от 4 до 15 ммоль/л.
* Процент профилирования должен составлять от 70% до 130%.
* Есть 5 минут ограничения по времени между выполнениями (и первым выполнением).

**Пожалуйста, будьте внимательны:**

* ** менее -2 означает: -3 и ниже (-4, -10 и т.д.) * *
* **более -2 означает: -1 и выше (-1, 0, +10 и т.д)**


Condition
------------
Вы можете выбрать между несколькими условиями. Некоторые моменты здесь объясняются, но основное легко понять и оно не все здесь описано:

* условия соединения: можно иметь несколько условий и подключить их с помощью 

   * "И"
   * "Или"
   * "Исключающее или" (что означает, что если одно (и только одно из) условий применимо, то действие (действия) произойдет)
   
* Время vs. время повторения

   * время = одно событие времени
   * повторяющееся время = то, что происходит регулярно (напр. раз в неделю, каждый рабочий день и т. д.)
   
* расположение: в конфигураторе (автоматизация), можете выбрать местоположение сервиса, который хотите использовать:

  * Использовать пассивное расположение: AAPS принимает положения только в том случае, если другие приложения запрашивали его
  * Использовать расположение сети: расположение вашего Wifi
  * Использовать геолокацию GPS
  
Действие
------
Можно выбрать одно или несколько действий: 

* начать врем цель 

   * должно быть между 72 мг/дл и 270 мг/дл (4 ммоль/л и 15 ммоль/л)
   * работает только в том случае, если нет предыдущей временной цели
   
* остановить врем цель
* уведомление
* процент профиля

   * должно быть от 70% до 130% 
   * работает только в том случае, если предыдущий процент составляет 100%

После добавления ваших действий, **не забудьте изменить значения по умолчанию** на те, которые требуются, нажав на значения по умолчанию.
 
.. image:: ../images/Automation_Default_V2_5.png
  :alt: автоматизация по умолчанию vs. задать значения

Эффективная практика
==========
* Когда вы начинаете пользоваться средствами автоматизации или создаете новое правило, добавьте уведомление об этом, пока не убедитесь, что правило хорошо работает.
* Наблюдайте за результатами работы правила.

Примеры
==========
These are just set up examples, no advises. Don't reproduce it without being aware what you are actually doing or why you need these. See below for two examples with screenshots.

* Switching profiles for your daily activities (like school, gym, weekend, workday...) using geolocation, wifi, time etc.
* Setting temp target for activities based on time, location...
* Setting eating soon temp targets based on time, location...

Low Glucose Temp Target
------------------------------------
.. image:: ../images/Automation2.png
  :alt: Automation2

This is made by a person that wants to get an automatically hypo temp target when having a hypo.

Lunch Time Temp Target
------------------------
.. image:: ../images/Automation3.png
  :alt: Automation3
  
These example is made by a person, that has lunch at the same time during the week. If it is at a certain time at its lunch location, it gets a lower temp target (eating soon) while waiting for the lunch. Because of the "And" connection, it only happens during the certain time and the  location. So it does not work at any other time at this location or at this time when the persons stays home or works longer. 

Incorrect use of Automation
------------------------------------
As every system Automation can be used incorrectly. This might lead to difficulties and even danger for your health. Examples for incorrect use are for instance:

* Trying to override algorithm at all instead of help only (i.e. by changing profile instead of tunning basal, IC etc.)
* Setting profile to compensate food
* Setting profile without duration
* Creating one way rules (i.e. do something but don't undo it by another rule)
* Creating long term rules

Alternatives
============

For advanced users there are other posibilities to automate tasks using IFTTT or a third party Android app called Automate. Some examples can be found `here <./automationwithapp.html>`_.
