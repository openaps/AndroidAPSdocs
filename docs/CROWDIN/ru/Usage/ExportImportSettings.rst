Экспорт/импорт настроек
**************************************************

Когда следует экспортировать настройки?
==================================================
Будьте готовы к непредвиденным ситуациям. Вы можете случайно изменить важные параметры и иметь проблемы с отменой. Телефон может сломаться или быть украден. Чтобы легко вернуться к состоянию, в котором вы были, регулярно экспортируйте параметры.

Лучше всего экспортировать после изменения настроек или прохождения цели. 

Экспортированные параметры следует скопировать в облачное хранилище или на компьютер. Так вы будете готовы к утрате или повреждению телефона с AAPS и вам не придется начинать с нуля.

На компьютере с Windows 10 это выглядит так:
  
.. image:: ../images/AAPS_ExImportSettingsWin.png
  :alt: AndroidAPS настройки телефона, подключенного к компьютеру

Экспортированные данные
==================================================
Среди прочего следующая информация является частью экспорта настроек:

* ` Автоматизация <../Usage/Automation.html> ` _события
* `Конфигуратор <../Configuration/Config-Builder.html>`_ настройки
* `Локальный профиль <../Configuration/Config-Builder.html#local-profile-recommended>`_ настройки
* `Цели <../Usage/Objectives.html>`_ статус включая `результаты экзамена <../Usage/Objectives.html#objective-3-proof-your-knowledge>`_
* ` Параметры конфигурации <../Configuration/Preferences.html> ` _ включая ` Параметры клиента NS <../Configuration/Preferences.html#ns-client> ` _

Encrypted backup format
==================================================
Settings backup is encrypted by a master password that can be set in `Preferences <../Configuration/Preferences.html#master-password>`_ .


Экспорт настроек
==================================================
* Сэндвич-меню (в верхнем левом углу экрана)
* Обслуживание
* Экспортировать настройки

.. image:: ../images/AAPS_ExportSettings1.png
  :alt: AndroidAPS export settings 1

* Date and time of export will be added to the file name automatically and displayed together with the path.
* Click 'OK'.
* Enter `master password <../Configuration/Preferences.html#master-password>`_ and click 'OK'.
* Successful export will be prompted at bottom of the screen.

.. image:: ../images/AAPS_ExportSettings2.png
  :alt: AndroidAPS export settings 2
  
Выполните импорт настроек
==================================================
* Сэндвич-меню (в верхнем левом углу экрана)
* Обслуживание
* Выполните импорт настроек

.. image:: ../images/AAPS_ImportSettings1.png
  :alt: AndroidAPS import settings 1

* All files from folder AAPS/preferences/ on your phone will be shown in the list.
* Select file.
* Confirm import by clicking 'OK'.
* Enter `master password <../Configuration/Preferences.html#master-password>`_ and click 'OK'.

.. image:: ../images/AAPS_ImportSettings2.png
  :alt: AndroidAPS import settings 2

* Details on the preference file will be shown.
* Last option to cancel import.
* Click 'Import'.
* Confirm message by clicking 'OK'.
* AAPS will be restarted in order to activate imported preferences.

Note for Dana RS users
------------------------------------------------------------
* Поскольку настройки подключения помпы также переносятся на новый телефон, AAPS на новом телефоне уже будет "знать" помпу и не запустит сканирование bluetooth. 
* Please pair new phone and pump manually.

Import settings from previous versions (before AAPS 2.7)
------------------------------------------------------------
* The "old" settings file (called 'AndroidAPSPreferences' - without file extension) must be in root folder of your smartphone (/storage/emulated/0).
* Do not put the "old" file in the same folder as the new exported settings (AAPS/preferences).
* You will find the "old" file on the bottom of the list in the import dialogue.

Transfer settings file
==================================================
* Best way to transfer settings file to a new phone is via USB cable or cloud service (i.e. Google Drive).
* Manuals can be found on the web, i.e. `Android help pages <https://support.google.com/android/answer/9064445?hl=en>`_.
* If you experience problems with the transferred file try another way to transfer file.
