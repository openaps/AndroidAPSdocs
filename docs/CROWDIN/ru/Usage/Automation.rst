Automation
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

   * "And"
   * "Or"
   * "Исключающее или" (что означает, что если одно (и только одно из) условий применимо, то действие (действия) произойдет)
   
* Время vs. recurring time

   * time =  single time event
   * recurring time = something that happens regulalrly (i.e. once a week, every working day etc.)
   
* location: in the config builder (Automation), you can select which location service you want to use:

  * Use passive location: AAPS only takes locations if other apps are requesting it
  * Use network location: Location of your Wifi
  * Use GPS location
  
Action
------
You can choose one or more actions: 

* start temp target 

   * must be between 72 mg/dl and 270 mg/dl (4 mmol/l and 15 mmol/l)
   * works only if there is no previous temp target
   
* stop temp target
* notification
* profile percentage

   * must be between 70% and 130% 
   * works only if the previous percentage is 100%

After adding your action, **don't forget to change the default values** to what you need by clicking in the default values.
 
.. image:: ../images/Automation_Default.png
  :alt: Automation default vs. set values

Examples
==========
These are just set up examples, no advises. Don't reproduce it without being aware what you are actually doing or why you need these.

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


Alternatives
============

For advanced users there are other posibilities to automate tasks using IFTTT or a third party Android app called Automate. Some examples can be found `here <./automationwithapp.html>`_.
