Экспорт/импорт настроек
**************************************************

Когда следует экспортировать настройки?
==================================================
Будьте готовы к непредвиденным ситуациям. Вы можете случайно изменить важные параметры и иметь проблемы с отменой. Телефон может сломаться или быть украден. Чтобы легко вернуться к состоянию, в котором вы были, регулярно экспортируйте параметры.

Лучше всего экспортировать после изменения настроек или прохождения цели. 

Экспортированные настройки должны быть скопированы в облачное хранилище или на компьютер, лучше в два разных места. Так вы будете готовы к утрате или повреждению телефона с AAPS и вам не придется начинать с нуля.

На компьютере с Windows 10 это выглядит так:
  
.. изображение:: ../images/AAPS_ExportSettings.png
  :alt: AndroidAPS настройки телефона, подключенного к компьютеру

Экспортированные данные
==================================================
Среди прочего следующая информация является частью экспорта настроек:

* ` Автоматизация <../Usage/Automation.html> ` _события
* `Конфигуратор <../Configuration/Config-Builder.html>`_ настройки
* `Локальный профиль <../Configuration/Config-Builder.html#local-profile-recommended>`_ настройки
* `Цели <../Usage/Objectives.html>`_ статус включая `результаты экзамена <../Usage/Objectives.html#objective-3-prove-your-knowledge>`_
* `Настройки <../Configuration/Preferences.html>`__ включая `Настройки клиента NS <../Configuration/Preferences.html#nsclient>`_

Зашифрованный файл резервной копии
==================================================
Резервная копия настроек зашифрована мастер-паролем, который может быть задан в `Preferences <../Configuration/Preferences.html#master-password>`__ .


Экспорт настроек
==================================================
* Сэндвич-меню (в верхнем левом углу экрана)
* Обслуживание
* Экспортировать настройки

.. изображение:: ../images/AAPS_ExportSettings1.png
  :alt: настройки экспорта AndroidAPS 1

* Дата и время экспорта будут добавлены в имя файла автоматически и добавлены в путь к файлу.
* Нажмите "OK'.
* Введите `главный пароль <../Configuration/Preferences.html#master-password>`__ и нажмите 'OK'.
* Успешный экспорт будет отражен в нижней части экрана.

.. изображение:: ../images/AAPS_ExportSettings2.png
  :alt: настройки экспорта AndroidAPS 2
  
Выполните импорт настроек
==================================================
**Не импортируйте настройки во время активной сессии Pod** - подробнее см. стр. `Omnipod <../Configuration/OmnipodEros.html#import-settings-from-previous-aaps>`_.

* Сэндвич-меню (в верхнем левом углу экрана)
* Обслуживание
* Выполните импорт настроек

.. image:: ../images/AAPS_ImportSettings1.png
  :alt: AndroidAPS import settings 1

* All files from folder AAPS/preferences/ on your phone will be shown in the list.
* Select file.
* Confirm import by clicking 'OK'.
* Введите `главный пароль <../Configuration/Preferences.html#master-password>`__ и нажмите 'OK'.

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
