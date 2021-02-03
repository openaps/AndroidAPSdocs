Добро пожаловать в документацию по AndroidAPS
==================================================

AndroidAPS-приложение с открытым исходным кодом для людей с инсулинозависимым диабетом, которое функционирует как система искусственной поджелудочной железы (APS) на смартфонах Google Android. Основными компонентами являются программные алгоритмы openAPS, которые выполняют функцию поджелудочной железы: держат уровень сахара в крови в заданных пределах с помощью автоматизированного дозирования инсулина (AID). Кроме того, необходима одобренная FDA/CE инсулиновая помпа и непрерывный мониторинг глюкозы. 

Приложение НЕ использует самообучающий искусственный интеллект. Вместо этого расчеты AndroidAPS основаны на индивидуальном алгоритме дозирования и поглощения углеводов, который пользователь самостоятельно вводит в профиль лечения, но они проверяются системой на предмет безопасности. 

Приложение нельзя найти в Google Play - вы должны самостоятельно собрать его из исходного кода по юридическим причинам.

Основными компонентами являются:

.. изображение:../images/modules-female.png
  :alt: Компоненты

Более подробную информацию смотрите здесь.

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Change language
   Change language <changelanguage.rst>
   
.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Getting started

   Главное- безопасность <./Getting-Started/Safety-first.rst>
   What is a closed loop system <./Getting-Started/ClosedLoop.rst>
   What is a closed loop system with AndroidAPS <./Getting-Started/WhatisAndroidAPS.rst>  
   Обновления и изменения документации <./Getting-Started/WikiUpdate.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: What do I need? 

   Модуль <./Module/module.rst>
   Пример системы <../Getting-Started/Sample-Setup.html>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: How to Install AndroidAPS

   Построение APK <./Instaling-AndroidAPS/Building-APK.md>
   Обновление до новой версии или ветви <./Instaling-AndroidAPS/Update-to-new-version.md>
   Checks after update to AAPS 2.7 <./Installing-AndroidAPS/update2_7.rst>
   Установка git <./Instaling-AndroidAPS/git-install.rst>
   Устранение неполадок Android Studio <./Installing-AndroidAPS/troubleshooting_androidstudio.rst>
   Примечания к выпуску <./Installing-AndroidAPS/Releasenotes.rst>
   Ветка разработчика <./Instaling-AndroidAPS/Dev_branch.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Component Setup

   CGM/FGM <./Configuration/BG-Source.rst>
   параметры xDrip <./Configuration/xdrip.md>
   Помпы <./Hardware/pumps.rst>
   Телефоны <./Hardware/Phoneconfig.rst>
   Настройка Nightscout <./Instaling-AndroidAPS/Nightscout.md>
   Смарт-часы <./Hardware/Smartwatch.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Configuration

   Конфигуратор <../Configuration/Config-Builder.html>`_ настройки>
   Preferences <./Configuration/Preferences.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: AndroidAPS Usage

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
   Open Humans Uploader <./Configuration/OpenHumans.rst>
   Автоматизация с приложениями сторонних организаций <./Usage/automationwithapp.md>
   Android auto <./Usage/Android-auto.md>  

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: General Hints 

   Пересечение часовых поясов с помпами <./Usage/Timezon-traveling.md>
   Доступ к файлам журнала <./Usage/Accessing-logfiles.md>
   Accu-Chek Combo советы для простого использования <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md> 
   Параметры экспорта/импорта <./Usage/ExportImportSettings.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: AndroidAPS for children

   Удаленный мониторинг <../Children/Children.html>
   Команды SMS <./Children/SMS-Commands.rst>
   Profile helper <./Configuration/profilehelper.rst>
   
.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Troubleshooting

   Устранение неполадок <./Usage/troubleshooting.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: FAQ

   Часто задаваемые вопросы <./Getting-started/FAQ.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Glossary

   Глоссарий <./Getting-Started/Glossary.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Where to go for help 

   Полезные ресурсы для чтения перед запуском <./Where-To-Go-For-Help/Background-reading.md>
   Куда обратиться за справкой <./Where-To-Go-For-Help/Connect-wit-other-users.md>
   Обновления и изменения документации <./Getting-Started/WikiUpdate.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: For Clinicians

   Для клиницистов <./Resources/clinician-guide-to-AndroidAPS>


.. toctree::
   :maxdepth: 1
   :glob:
   :caption: How to help

   Как помочь <./Getting-Started/How-can-I-help.md>
   Как перевести приложение и документы <./translations.md>
   Как редактировать документы <./сделать-это-пиар>


.. примечание:: 
	**Отказ от ответственности и предупреждение**

	* Вся информация, идеи, и описанный здесь код предназначен только для ознакомительных и образовательных целей. Nightscout в настоящее время не пытается соответствовать принципам конфиденциальности HIPAA. Вы применяете Nightscout и AndroidAPS на свой собственный риск и пожалуйста не используйте информацию или код для принятия медицинских решений.

	*Вы пользуетесь кодом github.com без гарантии и какой-либо официальной поддержки. Пожалуйста, ознакомьтесь с ЛИЦЕНЗИЕЙ этого репозитория.

	* Все наименования продуктов и компаний, товарные знаки, услуги по обслуживанию, зарегистрированные товарные знаки и зарегистрированные службы являются собственностью соответствующих владельцев. Их использование - в информационных целях и не подразумевает какой-либо принадлежности к ним или их одобрения.

	Обратите внимание, что этот проект не имеет связи с и одобрения от: ` SOOIL <http://www.sooil.com/eng/>` _, ` Dexcom <http://www.dexcom.com/>` _, ` Accu-Chek, Roche Diabet Care <http://www.accu-chek.com/>` _ или ` Medtronic <http://www.medtronic.com/>` _
