Примечания к изменениям в версиях
**************************************************
Пожалуйста, следуйте инструкциям по обновлению <../Installing-AndroidAPS/Update-to-new-version.html>`_. На ее страницах решаются наиболее распространенные проблемы связанные с обновлениями.

Как только будет доступно новое обновление вы получите следующую информацию:

.. изображение: ../images/AAPS_LoopDisable90days.png
  :alt: Информация об обновлении

У вас есть 60 дней для обновления. Если вы не обновитесь в течение 60 дней AAPS войдет в режим LGS (приостановка на низких ГК - см.`glossary <../Getting-Started/Glossary.html>`_) as in `objective 6 <../Usage/Objectives.html>`_.
ContextEdit.

Если вы не обновитесь еще 30 дней (90 дней с новой даты выпуска) AAPS переключится в режим открытого цикла.

Имейте в виду, что это изменение не предназначено для того, чтобы действовать вам на нервы, а существует по соображениям безопасности. Новые версии AndroidAPS не только обеспечивают новые возможности, но и содержат исправления безопасности. Поэтому необходимо, чтобы каждый пользователь обновлял приложение как можно чаще. К сожалению, все еще поступают сообщения об ошибках из очень старых версий, поэтому это попытка повысить безопасность каждого пользователя и всего сообщества. Благодарим за понимание!

Версия 2.6.1
==============
Дата выпуска: 21-03-2020

Используйте ` Android Studio 3.6.1 <https://developer.android.com/studio/>` _ или новее, чтобы построить apk.

Новые возможности
-----
* Позволяет вводить только HTTPS:// в настройках NSClient
* Исправлено ` BGI <../Getting-Started/Glossary.html> ` _ отображение ошибок в часах
* Исправлены мелкие ошибки интерфейса
* Исправлены сбои Insight
* Исправлены углеводы в будущем с помпой Combo
* Исправленo LocalProfile -> NS sync <../Configuration/Config-Builder.html#upload-local-profiles-to-nightscout>`_
* Улучшения оповещений Insight
* Улучшено обнаружение болюсов в истории помпы
* Исправлены параметры соединения NSClient (wifi, зарядка)
* Исправлена отправка калибровок в xDrip

Version 2.6.0
==============
Release date: 29-02-2020

Используйте ` Android Studio 3.6.1 <https://developer.android.com/studio/>` _ или новее, чтобы построить apk.

Новые возможности
-----
* Небольшие изменения дизайна (стартовая страница...)
* Удалена закладка / меню Careportal - подробнее `здесь <../Usage/CPbefore26.html>`_
* Новый плагин `Local Profile <../Configuration/Config-Builder.html#local-profile-recommended>`_

  * Локальный профиль может иметь более 1 профиля
  * Профили можно копировать и редактировать
  * Возможность загружать профили на NS
  * Старые переключатели профиля можно клонировать на новый в LocalProfile (применяется сдвиг по времени и процент)
  * Vertical NumberPicker для целей
* SimpleProfile удален
* `Пролонгированный болюс <../Usage/Extended-Carbs.html > ` _ функция - замкнутый цикл будет отключена
* Плагин MDT: Исправлена ошибка с дублирующимися записями
* Единицы не указаны в профиле, но это глобальные параметры
* Добавлены новые параметры для мастера установки
* Измененный пользовательский интерфейс и внутренние улучшения
* `Усложнения Wear <../Configuration/watchfaces.html>`_
* Новые `SMS команды <../Children/SMS-Commands.html>`_ BOLUS-MEAL, SMS, CARBS, TARGET, HELP
* Исправлена поддержка языков
* Цели: позволяют вернуться <../использования/цели.диалоговое окно HTML#идем-назад-в-задачах>`_,выбор времени
* Автоматизация: ` позволяет сортировку <../Usage/Automation.html#sort-automation-rules> ` _
* Автоматизация: исправляется ошибка, когда автоматизация выполнялась с отключенным циклом
* Новая строка состояния для Combo
* Улучшенное состояние ГК
* Исправлена синхронизация врем целей с NS
* Новая статистика
* Разрешен пролонгированный болюс в режиме открытого цикла
* Поддержка оповещений Android 10
* Тонны новых переводов

Версия 2.5.1
==================================================
Дата выпуска: 31-10-2019

Обратите внимание на " важные примечания <../Instaling-AndroidAPS/Releasenotes.html#important-notes> ` _ и ` ограничения <../Instaling-AndroidAPS/Releasenotes.html#is-this-update-for-me-is-not-supported> ` _ для ` версии 2.5.0 <../Instaling-AndroidAPS/Releasenotes.html#version-2-5-0 > ` _. 
* Исправлена ошибка в сетевом состоянии, которые приводят к ошибкам (не критично, но будет тратить много энергии на пересчет).
* Новая иерархия версий, позволяющая выполнять незначительные обновления без уведомлений об обновлении.

Версия 2.5.0
==================================================
Дата выпуска: 26-10-2019

Важные замечания
--------------------------------------------------
* Пожалуйста, используйте `Android Studio версии 3.5.1 <https://developer.android.com/studio/>`_ или новее, чтобы `собрать apk <../Installing-AndroidAPS/Building-APK.html>`_ или `update <../Installing-AndroidAPS/Update-to-new-version.html>`_.
* Если вы используете xDrip, должен быть отмечен `identify receiver <../Configuration/xdrip.html#identify-receiver>`_.
* Если вы используете Dexcom G6 с ` модифицированным приложением Dexcom app <../Hardware/DexcomG6.html#if-using-g6-with-patched-dexcom-app> ` _, вам понадобится версия из папки ` 2.4 <https://github.com/dexcomapp/dexcomapp/tree/master/2.4>` _.
* Поддержка Glimp версии 4.15.57 и новее.

Это обновление для меня? В настоящее время НЕ поддерживается
--------------------------------------------------
* Android 5 и ниже
* Poctech
* 600SeriesUploader
* Модифицированное приложение Dexcom из каталога 2.3

Новые возможности
--------------------------------------------------
* Внутреннее изменение targetSDK на 28 (Android 9), поддержка jetpack
* Поддержка RxJava2, Okhttp3, Retrofit
*Поддержка старых помп `Medtronic <../Configuration/MedtronicPump.html>`_ поддержка (нужен RileyLink)
* Новый модуль `Автоматизация <../Usage/Automation.html>`_
* Позволяет подать `только часть болюса <../конфигурация/настройки.расчет мастер HTML#расширенные-настройки>`_ с калькулятора болюса
* Рендеринг активности инсулина
* Корректировка прогнозов IOB с помощью результата autosense
Новая поддержка модифицированных приложений Dexcom (<https://github.com/dexcomapp/dexcomapp/tree/master/2.4> папка 2.4)
* Верификатор подписи
* Возможность обойти цели пользователям OpenAPS
* Новые цели <../Usage/Objectives.html> ` _-экзамен, обработка приложений
   
   (Если вы начали хотя бы цель "открытый цикл" в предыдущих версиях экзамен не является обязательным.)
* Исправлена ошибка в драйверах Dana*, где сообщалось о ложной разнице во времени
* Исправлена ошибка в `SMS коммуникаторе <../Children/SMS-Commands.html>`_

Версия 2.3
==================================================
Дата выпуска: 25-04-2019

Новые возможности
--------------------------------------------------
* Важное исправление безопасности для Insight (очень важно, если вы используете Insight!)
* Исправлен браузер истории
* Исправление расчетов дельты
* Обновление переводов
* Проверка GIT и предостережение об обновлении gradle
* Больше автоматического тестирования
* Исправление потенциального сбоя в службе AlarmSound (спасибо @lee-b !)
* Исправлена передача данных ГК (теперь работает независимо от разрешения SMS!)
* Новый модуль проверки версий


Версия 2.2.2
==================================================
Дата выпуска: 07-04-2019

Новые возможности
--------------------------------------------------
* Исправление Autosens: деактивировать значение временная цель ТТ повышает/понижает целевое значение
* Новые переводы
* Исправления драйверов Insight
* исправление модуля SMS


Версия 2.2
==================================================
Дата выпуска: 29-03-2019

Новые возможности
--------------------------------------------------
* `Исправление ошибки летнего времени <../Usage/Timezone-traveling.html#time-adjustment-daylight-savings-time-dst>`_
ContextEdit
* Обновление Wear
* ` Модуль SMS <../Children/SMS-Commands.html> ` _ обновление
* Возможность возврата к предыдущим целям.
* Остановка цикла, если память телефона заполнена


Версия 2.1
==================================================
Дата выпуска: 03-03-2019

Новые возможности
--------------------------------------------------
* `Accu-Chek Insight <../Configuration/Accu-Chek-Insight-Pump.html>`_ support (by Tebbe Ubben and JamOrHam)
* Status lights on main screen (Nico Schmitz)
* Daylight saving time helper (Roumen Georgiev)
* Fix processing profile names comming from NS (Johannes Mockenhaupt)
* Fix UI blocking (Johannes Mockenhaupt)
* Support for updated G5 app (Tebbe Ubben and Milos Kozak)
* G6, Poctech, Tomato, Eversense BG source support (Tebbe Ubben and Milos Kozak)
* Fixed disabling SMB from preferences (Johannes Mockenhaupt)

Misc
--------------------------------------------------
* If you are using non default `smbmaxminutes` value you have to setup this value again


Version 2.0
==================================================
Release date: 03-11-2018

Новые возможности
--------------------------------------------------
* oref1/SMB support (`oref1 documentation <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html>`_) Be sure to read the documentation to know what to expect of SMB, how it will behave, what it can achive and how to use it so it can operate smoothly.
* `_Accu-Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_ pump support
* Setup wizard: guides you through the process of setting up AndroidAPS

Settings to adjust when switching from AMA to SMB
--------------------------------------------------
* Objective 10 must be started for SMBs to be enabled (SMB tab generally shows what restrictions apply)
* maxIOB now includes _all_ IOB, not just added basal. That is, if given a bolus of 8 U for a meal and maxIOB is 7 U, no SMBs will be delivered until IOB drops below 7 U.
* min_5m_carbimpact default has changed from 3 to 8 going from AMA to SMB. Если вы переходите с AMA на SMB, то вам нужно изменить его вручную
* Note when building AndroidAPS 2.0 apk: Configuration on demand is not supported by the current version of the Android Gradle plugin! Если сборка выполнена с ошибкой, относящейся к "выборочной конфигурации", можно сделать следующее:

   * Open the Preferences window by clicking File > Settings (on Mac, Android Studio > Preferences).
   * In the left pane, click Build, Execution, Deployment > Compiler.
   * Uncheck the Configure on demand checkbox.
   * Click Apply or OK.

Overview tab
--------------------------------------------------
* Top ribbon gives access to suspend/disable loop, view/adjust profile and to start/stop temporary targets (TTs). TTs use defaults set in preferences. The new Hypo TT option is a high temp TT to prevent the loop from too aggressively overcorrection rescue carbs.
* Treatment buttons: old treatment button still available, but hidden by default. Visibility of buttons can now be configured. New insulin button, new carbs button (including `eCarbs/extended carbs <../Usage/Extended-Carbs.html>`_)
* `Colored prediction lines <../Getting-Started/Screenshots.html#section-e>`_
* Option to show a notes field in insulin/carbs/calculator/prime+fill dialogs, which are uploaded to NS
* Updated prime/fill dialog allows priming and creating careportal entries for site change and cartridge change

Watch
--------------------------------------------------
* Separate build variant dropped, included in regular full build now. To use bolus controls from watch, enable this setting on the phone
* Wizard now only asks for carbs (and percentage if enabled in watch settings). Which parameters are included in the calculation can be configured in the settings on the phone
* confirmations and info dialogs now work on wear 2.0 as well
* Added eCarbs menu entry

New plugins
--------------------------------------------------
* PocTech app as BG source
* Dexcom patched app as BG source
* oref1 sensitivity plugin

Misc
--------------------------------------------------
* App now uses drawer to show all plugins; plugins selected as visible in config builder are shown as tabs on top (favourites)
* Overhaul for config builder and objectives tabs, adding descriptions
* New app icon
* Lots of improvements and bugfixes
* Nightscout-independant alerts if pump is unreachable for a longer time (e.g. depleted pump battery) and missed BG readings (see _Local alerts_ in settings)
* Option to keep screen on
* Option to show notification as Android notification
* Advanced filtering (allowing to always enable SMB and 6h after meals) supported with patched Dexcom app or xDrip with G5 native mode as BG source.
