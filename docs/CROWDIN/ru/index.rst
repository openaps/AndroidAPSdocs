Добро пожаловать в документацию Android APS
==============================================

**Что такое AndroidAPS?**

AndroidAPS это приложение, которое может связываться с инсулиновой помпой через Bluetooth и выполнять одну из версий алгоритмов OpenAPS "oref0" или "oref1".

**Главные цели проекта AndroidAPS:**

* модульное приложение с возможностью легко добавлять новые модули без изменения остальной части кода
* приложение с интерфейсом на разных языках
* приложение, в котором легко выбрать то что будет включено в финальный apk-файл, легко изменять и компилировать
* приложение, которое поддерживает режим открытой и закрытой петли ИПЖ (Искусственной Поджелудочной Железы)
* приложение, в котором вы можете видеть как работает ИПЖ: входные данные, результат вычислений и финальное решение
* возможность добавлять больше алгоритмов ИПЖ и позволить пользователю выбрать что использовать
* приложение, которое независимо от драйвера помпы и содержит виртуальную помпу для безопасной симуляции ИПЖ
* приложение с тесной интеграцией с Nightscout
* приложение, в котором легко добавлять/удалять ограничения для безопасности пользователя
* приложение "все в одном" для управления ИЗД (диабет 1-типа) с ИПЖ и Nightscout

**Что нужно чтобы начать пользоваться:**

* Android смартфон с версией Android 5.0 или новее. Смотрите `эту таблицу <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_ с отчетами о том как хорошо работают определенные телефоны с AndroidAPS.
* Приложение для получения данных от CGM (системы постоянного контроля глюкозы): `xDrip <http://stephenblackwasalreadytaken.github.io/xDrip/>`_/ `xDrip+ <https://jamorham.github.io/#xdrip-plus>`_, `Glimp <https://play.google.com/store/apps/details?id=it.ct.glicemia>`_ , `G5 patched app <https://github.com/dexcomapp/dexcomapp>`_, `PochTech app <https://play.google.com/store/apps/details?id=jp.co.unitec.concretemanagement&hl=gsw>`_ или `600SeriesAndroidUploader <http://pazaan.github.io/600SeriesAndroidUploader/>`_
* само приложение `AndroidAPS <https://github.com/MilosKozak/AndroidAPS>`_
* `Nightscout cgm-remote-monitor <http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku>`_ 0.10.2 или новее
* Поддерживаемая помпа: Dana-R или Dana-RS Insulin Pump или Accu-Chek Combo (или вы можете сделать свой собственный драйвер для другой инсулиновой помпы)
* Система постоянного контроля глюкозы (CGM): Dexcom G4/G5/G6, Freestyle Libre, Eversense, Medtronic Guardian, PocTech


.. note:: 
	**Предупреждения и оговорки**

	* Вся информация, мысли, и код, описанные здесь, предназначены только для информационных и образовательных целей. Используйте Nightscout и AndroidAPS на свой страх и риск, и не используйте информацию или код для принятия медицинских решений.

	* Использование кода полученного с github.com осуществляется без гарантий и формальной поддержки в любом виде. Пожалуйста ознакомьтесь с лицензией этого репозитория для получения подробностей.

	* Все продукты и имена компаний, торговые марки и т.п., являются собственностью их владельцев. Их использование осуществляется для информационных целей и не вызвано аффилированностью с ними или поддержкой с их стороны.

	Пожалуйста обратите внимание - этот проект не имеет никакую связь с или поддержку со стороны компаний `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <http://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>`_.

Начало работы с AndroidAPS
----------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Безопасность прежде всего <./Getting-Started/Safety-first.md>
   Скриншоты <./Getting-Started/Screenshots.md>
   Телефоны <./Getting-Started/Phones.md>
   Выбор помпы <./Getting-Started/Pump-Choices.md>
   Возможные будущие драйверы помп  <./Getting-Started/Future-possible-Pump-Drivers.md>
   Пример установки: Samsung S7, DanaR, Dexcom G5 и Sony Smartwatch <./Getting-Started/Sample-Setup.md>
   ЧАВО для пользователей <./Getting-Started/FAQ.md>
   Глоссарий <./Getting-Started/Glossary.md>
  
Как установить AndroidAPS
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Сборка APK <./Installing-AndroidAPS/Building-APK.md>
   Обновление на новую версию или ветку <./Installing-AndroidAPS/Update-to-new-version.md>
   Замечания к релизц <./Installing-AndroidAPS/Releasenotes.md>
   Ветка для разработчиков <./Installing-AndroidAPS/Dev-branch.md>
   Установка Nightscout <./Installing-AndroidAPS/Nightscout.md>
   
Настройка
---------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Мастер настройки <./Configuration/Config-Builder.md>
   Источник показаний уровня глюкозы <./Configuration/BG-Source.md>
   Помпа DanaR <./Configuration/DanaR-Insulin-Pump.md>
   Помпа DanaRS <./Configuration/DanaRS-Insulin-Pump.md>
   Помпа Accu Chek Combo <./Configuration/Accu-Chek-Combo-Pump.md>
   Скины (Watchfaces) <./Configuration/Watchfaces.md>
   Настройка <./Configuration/Preferences.md>
   Определение чувствительности и COB <./Configuration/Sensitivity-detection-and-COB.md>
   
Использование
------------
.. toctree::
   :maxdepth: 1
   :glob:
    
   Этапы <./Usage/Objectives.md>
   Возможности OpenAPS <./Usage/Open-APS-features.md>
   Переключение профилей <./Usage/Profiles.md>
   Временные цели <./Usage/temptarget.md>
   SMS команды <./Usage/SMS-Commands.md>
   Длинные углеводы <./Usage/Extended-Carbs.md>
   Смена часовых поясов с помпой <./Usage/Timezone-traveling.md>
   Доступ к файлам журналов <./Usage/Accessing-logfiles.md>
   Сглаживание данных об уровне глюкозы <./Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md>
   Советы для AccuChek Combo <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>
   Решение проблем NSClient <./Usage/Troubleshooting-NSClient.md>
   Android auto <./Usage/Android-auto.md>

Куда обратиться за помощью
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Полезные ресурсы для изучения прежде чем вы начнете <./Where-To-Go-For-Help/Background-reading.md>
   Куда обратиться за помощью <./Where-To-Go-For-Help/Connect-with-other-users.md>

Как помочь
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Как помочь <./Getting-Started/How-can-I-help.md>
   Как переводить приложение <./translations.md>
   Как редактировать wiki <./make-a-PR>
