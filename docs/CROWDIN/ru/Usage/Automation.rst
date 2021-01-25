Автоматизация
**************************************************

Что такое автоматизация
==================================================
Для одинаковых частых событий приходится изменять одни и те же параметры. Чтобы избежать лишней работы, можно автоматизировать событие, если вы можете описать его достаточно точно и позволить ему делать это автоматически. 

Например, при низкой ГК, вы можете решить, что должна автоматически установиться высокая временная цель. Или если вы находитесь в фитнес-центре, вы автоматически получаете временную цель. 

Перед использованием автоматизации следует уверенно овладеть ручным управлением ` временными целями <./temptarget.html> ` _ или переключением профиля. 

Убедитесь, что вы понимаете, как работает автоматизация перед настройкой первого простого правила. **Instead of action, let AAPS first display only a notification.** When you are sure automation is triggered at the right time, replace notification by real action.

.. изображение:: ../images/Automation_ConditionAction_RC3.png
  :alt: условие автоматизации + действие

Как пользоваться
==================================================
Чтобы настроить автоматизацию, нужно дать ей заголовок, выбрать хотя бы одно условие и одно действие. 

Важное примечание
--------------------------------------------------
** Автоматизация по-прежнему активна при отключении цикла! **

So make sure to deactivate automation rules during these occasions if neccessary. You can do so by unticking the box left of the name of your automation rule.

.. изображение:: ../images/Automation_ActivateDeactivate.png
  :alt: Активировать и деактивировать правило автоматизации

Where to find Automation
--------------------------------------------------
Depending on your `settings in config builder <../Configuration/Config-Builder.html#tab-or-hamburger-menu>`_ you will either find `Automation <../Configuration/Config-Builder.html#automation>`_ in hamburger menu or as a tab.

Общие настройки
--------------------------------------------------
Есть некоторые ограничения:

* Значение ГК должно составлять от 72 до 270 мг/дл или от 4 до 15 ммоль/л.
* Процент профилирования должен составлять от 70% до 130%.
* Есть 5 минут ограничения по времени между выполнениями (и первым выполнением).

**Пожалуйста, будьте внимательны:**

* ** менее -2 означает: -3 и ниже (-4, -10 и т.д.) * *
* **более -2 означает: -1 и выше (-1, 0, +10 и т.д)**


Условие
--------------------------------------------------
Вы можете выбрать между несколькими условиями. Некоторые моменты здесь объясняются, но основное легко понять и оно не все здесь описано:

* connect conditions: you can have several conditions and can link them with 

  * "И"
  * "Или"
  * "Exclusive or" (which means that if one - and only one of the - conditions applies, the action(s) will happen)
   
* Время vs. время повторения

  * время = одно событие времени
  * повторяющееся время = то, что происходит регулярно (напр. раз в неделю, каждый рабочий день и т. д.)
   
* расположение: в конфигураторе (автоматизация), можете выбрать местоположение сервиса, который хотите использовать:

  * Use passive location: AAPS only takes locations when other apps are requesting it
  * Использовать расположение сети: расположение вашего Wifi
  * Используйте локатор GPS (Внимание! Может привести к чрезмерной разрядке аккумулятора!)
  
Действие
--------------------------------------------------
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
 
.. образ:: ../images/Automation_Default_V2_5.png
  :alt: автоматизация по умолчанию vs. задать значения

Выбор правил автоматизации
---------------------
Для отбора правил автоматизации нажмите и удерживайте кнопку с четырьмя строками в правой части экрана и двигайтесь вверх или вниз.

.. изображение:: ../images/Automation_Sort.png
  :alt: Выбор правил автоматизации
  
Удаление правил автоматизации
-----------------------
To delete an automation rule click on trash icon.

.. изображение:: ../images/Automation_Deletet.png
  :alt: Выбор правила автоматизации

Рекомендации и предостережения
==================================================
* When you start using automation or create a new rule, first add a notification only until you are sure the rule is working well.
* Наблюдайте за результатами работы правила.
* Don't try to make conditions too easy (i.e.: IF bg > 80 mg/dl AND bg < 180 mg/dl)

  **Вдвойне важно, если правило активирует переключатель профиля!**
 
* Try to use Temp Targets instead of Profile Switches. Temp Targets не сбрасывают ` Autosens <../Usage/Open-APS-features.html#autosens> ` _ на 0.
* Убедитесь, что переключатели профиля создаются с осторожностью и желательно как крайняя мера.

  * Переключение профилей делает `Autosens <../Usage/Open-APS-features.html#autosens>`_ бесполезным минимум на 6 часов.

* Переключение профилей не сбросит профиль назад на базовый профиль

  * Вы должны создать еще одно правило, чтобы вернуть профиль или сделать это вручную!
  * Increased risk of hypoglycemia if profile switch does not expire or reset back to base profile.

Примеры
==================================================
These are just setup examples, no advises. Don't reproduce them without being aware what you are actually doing or why you need them.

* Переключение профилей для вашей повседневной деятельности (например, школа, тренажерный зал, выходные, рабочий день...) с использованием геолокации, wifi, времени и т. д.
* Setting temp target for activities based on time, location, connection to a bluetooth device...
* Настройка временной цели ожидаемый прием пищи на основе времени, геолокации...

Временная Цель Низкая ГК
--------------------------------------------------
.. изображение:: ../images/Automation2.png
  :alt: Автоматизация2

This is made by someone who wants to get a hypo temp target automatically when having low glucose.

Временная Цель Время Обеда
--------------------------------------------------
.. изображение:: ../images/Automation3.png
  :alt: Автоматизация3
  
This example is made by someone who has lunch at work at the same time every day during the week. If he or she stays at a certain time in his or her lunch location, automation will set a low temp target (eating soon) while waiting for the lunch. Because of the "And" connection, it only happens during the chosen time and if he or she is at the chosen location. So it does not work on any other time at this location or on this time when the person stays at home. 

Incorrect use of automation
--------------------------------------------------
Please be aware to use automation incorrectly. Это может привести к трудностям и даже опасности для здоровья. Примеры неправильного применения:

* Попытка полного переопределения алгоритма вместо помощи (напр. замена профиля вместо тюнинга базала, соотношения инсулин-углеводы IC и т. д.)
* Установка профиля для компенсации приема пищи
* Установка профиля без определения продолжительности
* Создание правил в одну сторону (т.е. делать что-то, но не отменять это другим правилом)
* Создание долгосрочных правил

Альтернативы
==================================================

For advanced users, there are other posibilities to automate tasks using IFTTT or a third party Android app called Automate. Некоторые примеры можно найти ` здесь <./automationwithapp.html> ` _.
