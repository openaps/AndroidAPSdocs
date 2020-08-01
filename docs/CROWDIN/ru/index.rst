Добро пожаловать в документацию по AndroidAPS
==================================================

AndroidAPS-приложение с открытым исходным кодом для людей с инсулинозависимым диабетом, которое функционирует как система искусственной поджелудочной железы (APS) на смартфонах Google Android. Основными компонентами являются программные алгоритмы openAPS, которые выполняют функцию поджелудочной железы: держат уровень сахара в крови в заданных пределах с помощью автоматизированного дозирования инсулина (AID). Кроме того, необходима одобренная FDA/CE инсулиновая помпа и непрерывный мониторинг глюкозы. 

Приложение НЕ использует самообучающий искусственный интеллект. Вместо этого расчеты AndroidAPS основаны на индивидуальном алгоритме дозирования и поглощения углеводов, который пользователь самостоятельно вводит в профиль лечения, но они проверяются системой на предмет безопасности. 

Приложение нельзя найти в Google Play - вы должны самостоятельно собрать его из исходного кода по юридическим причинам.

Основными компонентами являются:

.. изображение:../images/modules-female.png
  :alt: Компоненты

Более подробную информацию смотрите здесь.

Начало работы
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Главное- безопасность <./Getting-Started/Safety-first.rst>
   Что такое система замкнутого цикла <./Getting-Started/ClosedLoop.rst>
   Что такое система замкнутого цикла с AndroidAPS <./Getting-Started/WhatisAndroidAPS.rst>  
   Обновления и изменения документации <./Getting-Started/WikiUpdate.rst>
   
   
Что необходимо 
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Модуль <./Module/module.rst>
   Пример системы <../Getting-Started/Sample-Setup.html>

   
Как установить AndroidAPS
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:

   Построение APK <./Instaling-AndroidAPS/Building-APK.md>
   Обновление до новой версии или ветви <./Instaling-AndroidAPS/Update-to-new-version.md>
   Установка git <./Instaling-AndroidAPS/git-install.rst>
   Устранение неполадок Android Studio <./Installing-AndroidAPS/troubleshooting_androidstudio.rst>
   Примечания к выпуску <./Installing-AndroidAPS/Releasenotes.rst>
   Ветка разработчика <./Instaling-AndroidAPS/Dev_branch.md>
   
   
Настройка компонентов
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   CGM/FGM <./Configuration/BG-Source.rst>
   параметры xDrip <./Configuration/xdrip.md>
   Помпы <./Hardware/pumps.rst>
   Телефоны <./Hardware/Phoneconfig.rst>
   Настройка Nightscout <./Instaling-AndroidAPS/Nightscout.md>
   Смарт-часы <./Hardware/Smartwatch.rst>
   

Конфигурация 
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Конфигуратор <../Configuration/Config-Builder.html>`_ настройки>
   Параметры <./Configuration/Preferences.md>
   
   
Использование androidAPS
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
    
   Экраны androidAPS <./Getting-Started/Screenshots.md>
   Цели <./Usage/Objectives.rst>
   Функции OpenAPS <./Usage/Open-APS-features.md>   
   Вычисление COB <./Usage/COB-calculation.rst>
   Обнаружение чувствительности <./Configuration/Sensitivity-detection-COB.md>
   Переключение профиля <./Usage/Profiles.md>
   Временные цели <./Usage/temptarget.md>   
   Пролонгированные углеводы <./Usage/Extended-Carbs.rst>
   Автоматизация <./Usage/Automation.rst>
   Careportal (более не поддерживается) <./Usage/CPbefore26.rst>
   Автоматизация с приложениями сторонних организаций <./Usage/automationwithapp.md>
   Android auto <./Usage/Android-auto.md>  
 
Общие советы 
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Пересечение часовых поясов с помпами <./Usage/Timezon-traveling.md>
   Доступ к файлам журнала <./Usage/Accessing-logfiles.md>
   Accu-Chek Combo советы для простого использования <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md> 
   Параметры экспорта/импорта <./Usage/ExportImportSettings.rst>
   

AndroidAPS для детей
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Удаленный мониторинг <../Children/Children.html>
   Команды SMS <./Children/SMS-Commands.rst>
   

Устранение неполадок
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   Устранение неполадок <./Usage/troubleshooting.rst>
   

Часто задаваемые вопросы 
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   Часто задаваемые вопросы <./Getting-started/FAQ.md>

   
Глоссарий
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   Глоссарий <./Getting-Started/Glossary.md>
  

Куда обращаться за помощью 
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:

   Полезные ресурсы для чтения перед запуском <./Where-To-Go-For-Help/Background-reading.md>
   Куда обратиться за справкой <./Where-To-Go-For-Help/Connect-wit-other-users.md>
   Обновления и изменения документации <./Getting-Started/WikiUpdate.rst>

Для клиницистов
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
            
   Для клиницистов <./Resources/clinician-guide-to-AndroidAPS>


Как помочь
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:

   Как помочь <./Getting-Started/How-can-I-help.md>
   Как перевести приложение и документы <./translations.md>
   Как редактировать документы <./сделать-это-пиар>


.. примечание:: 
	**Отказ от ответственности и предупреждение**

	* Вся информация, идеи, и описанный здесь код предназначен только для ознакомительных и образовательных целей. Nightscout в настоящее время не пытается соответствовать принципам конфиденциальности HIPAA. Вы применяете Nightscout и AndroidAPS на свой собственный риск и пожалуйста не используйте информацию или код для принятия медицинских решений.

	*Вы пользуетесь кодом github.com без гарантии и какой-либо официальной поддержки. Пожалуйста, ознакомьтесь с ЛИЦЕНЗИЕЙ этого репозитория.

	* Все наименования продуктов и компаний, товарные знаки, услуги по обслуживанию, зарегистрированные товарные знаки и зарегистрированные службы являются собственностью соответствующих владельцев. Их использование - в информационных целях и не подразумевает какой-либо принадлежности к ним или их одобрения.

	Обратите внимание, что этот проект не имеет связи с и одобрения от: ` SOOIL <http://www.sooil.com/eng/>` _, ` Dexcom <http://www.dexcom.com/>` _, ` Accu-Chek, Roche Diabet Care <http://www.accu-chek.com/>` _ или ` Medtronic <http://www.medtronic.com/>` _
