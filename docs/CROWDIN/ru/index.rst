Добро пожаловать в документацию по AndroidAPS
==================================================

AndroidAPS-приложение с открытым исходным кодом для людей с инсулинозависимым диабетом, которое функционирует как система искусственной поджелудочной железы (APS) на смартфонах Google Android. Основными компонентами являются программные алгоритмы openAPS, которые выполняют функцию поджелудочной железы: держать уровень сахара в крови в здоровых пределах с помощью автоматизированного дозирования инсулина (AID). Кроме того, необходима одобренная FDA/CE инсулиновая помпа и непрерывный мониторинг глюкозы. 

Приложение НЕ использует самообучающий искусственный интеллект. Вместо этого расчеты AndroidAPS основаны на индивидуальном алгоритме дозирования и поглощения углеводов, который пользователь самостоятельно вводит в профиль лечения, но они проверяются системой с точки зрения безопасности. 

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
   Dev branch <./Installing-AndroidAPS/Dev_branch.md>
   
   
Component Setup
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   CGM/FGM <./Configuration/BG-Source.rst>
   xDrip Settings <./Configuration/xdrip.md>
   Pumps <./Hardware/pumps.rst>
   Phones <./Hardware/Phoneconfig.rst>
   Nightscout setup <./Installing-AndroidAPS/Nightscout.md>
   Smartwatch  <./Hardware/Smartwatch.rst>
   

Конфигурация 
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Config builder <./Configuration/Config-Builder.md>
   Preferences <./Configuration/Preferences.md>
   
   
AndroidAPS Usage
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
    
   AndroidAPS screens <./Getting-Started/Screenshots.md>
   Objectives <./Usage/Objectives.rst>
   OpenAPS features <./Usage/Open-APS-features.md>   
   COB calculation <./Usage/COB-calculation.rst>
   Sensitivity detection <./Configuration/Sensitivity-detection-and-COB.md>
   Profile switch <./Usage/Profiles.md>
   Temp-targets <./Usage/temptarget.md>   
   Extended carbs <./Usage/Extended-Carbs.rst>
   Automation <./Usage/Automation.rst>
   Careportal (discontinued) <./Usage/CPbefore26.rst>
   Automation with 3rd party apps <./Usage/automationwithapp.md>
   Android auto <./Usage/Android-auto.md>  
 
General Hints 
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Crossing timezones with pumps <./Usage/Timezone-traveling.md>
   Accessing logfiles <./Usage/Accessing-logfiles.md>
   Accu-Chek Combo tips for basic usage <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md> 
   Export/Import Settings <./Usage/ExportImportSettings.rst>
   

AndroidAPS for children
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Remote monitoring <./Children/Children.rst>
   SMS commands <./Children/SMS-Commands.rst>
   

Устранение неполадок
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   Troubleshooting <./Usage/troubleshooting.rst>
   

Часто задаваемые вопросы 
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   FAQ <./Getting-Started/FAQ.md>

   
Глоссарий
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   Glossary <./Getting-Started/Glossary.md>
  

Where to go for help 
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:

   Useful resources to read before you start <./Where-To-Go-For-Help/Background-reading.md>
   Where to go for help <./Where-To-Go-For-Help/Connect-with-other-users.md>
   Обновления и изменения документации <./Getting-Started/WikiUpdate.rst>

For Clinicians
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
            
   For Clinicians <./Resources/clinician-guide-to-AndroidAPS>


How to help
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:

   How to help <./Getting-Started/How-can-I-help.md>
   How to translate the app and docs <./translations.md>
   How to edit the docs <./make-a-PR>


.. примечание:: 
	**Отказ от ответственности и предупреждение**

	* Вся информация, идеи, и описанный здесь код предназначен только для ознакомительных и образовательных целей. Nightscout в настоящее время не пытается соответствовать принципам конфиденциальности HIPAA. Вы применяете Nightscout и AndroidAPS на свой собственный риск и пожалуйста не используйте информацию или код для принятия медицинских решений.

	*Вы пользуетесь кодом github.com без гарантии и какой-либо официальной поддержки. Пожалуйста, ознакомьтесь с ЛИЦЕНЗИЕЙ этого репозитория.

	* Все наименования продуктов и компаний, товарные знаки, услуги по обслуживанию, зарегистрированные товарные знаки и зарегистрированные службы являются собственностью соответствующих владельцев. Их использование - в информационных целях и не подразумевает какой-либо принадлежности к ним или их одобрения.

	Please note - this project has no association with and is not endorsed by: `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <http://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>`_ or `Medtronic <http://www.medtronic.com/>`_
