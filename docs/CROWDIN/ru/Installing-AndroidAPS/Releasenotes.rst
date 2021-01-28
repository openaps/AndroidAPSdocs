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

Version 2.8.2
================
Release date: 23-01-2021

* Please see also `important hints for version 2.8.1.1 <../Installing-AndroidAPS/Releasenotes.html#important-hints>`_ below.

Changes
----------------------
* stability improvements
* more tweaking for Android 8+
* improved icons
* watch improvements
* NSClient fixes
* Bolus advisor now works with Pumpcontrol and NSClient

Version 2.8.1.1
================
Release date: 12-01-2021

Important hints
----------------------
* Option **NS_UPLOAD_ONLY** has been forced ON for all 2.8.1 users. 
* If you use NSClient to enter TT, carbs or profile switches you must turn it off in AAPS but **only in case your synchronization is working well** (ie. you don't see unwanted data changes like self modification of TT, TBR etc). 
* ATTENTION: DO NOT do this if you have any other app handle treatments ( like xDrip broadcast/upload/sync...).
* NS_UPLOAD_ONLY can only be turned off if engineering mode is enabled.

Major changes
----------------------
* RileyLink, Omnipod and MDT pump improvements and fixes
* forced NS_UPLOAD_ONLY
* fix for SMB & Dexcom app
* watchface fixes
* crash reporting improved
* gradle reverted to allow direct watchface instalation
* automation fixes
* RS driver improvement
* various crashes fixed
* UI fixes and improvements
* new translations

Version 2.8.0
================
Release date: 01-01-2021

Important hints
----------------------
* **Minimum Android version is 8.0 now.** For older Android versions you can still use 2.6.1.4 from old repo. 
* `Objectives have changed. <../Usage/Objectives.html#objective-3-prove-your-knowledge>`_ **Finish not completed objectives before update.**
* Repository location still on https://github.com/nightscout/AndroidAPS . If you are not familiar with git the easiest way for update is remove directory with AndroidAPS and do a `new clone <../Installing-AndroidAPS/Building-APK.html>`_.
* Please use `Android Studio 4.1.1 <https://developer.android.com/studio/>`_ or newer to build the apk.

Новые возможности
----------------------
* `Omnipod Eros support <../Configuration/OmnipodEros.html>`_ @bartsopers @andyrozman @ktomy @samspycher @TeleRiddler @vanelsberg @eurenda and special thanks to @ps2 @itsmojo, everybody else involved in the Loop driver for Omnipod and @jlucasvt from GetRileyLink.org 
* `bolus advisor <../Configuration/Preferences.html#bolus-advisor>`_ & `eating reminder <../Getting-Started/Screenshots.html#eating-reminder>`_ @MilosKozak 
* `New watchface <../Configuration/Watchfaces.html#new-watchface-as-of-androidaps-2-8>`_ @rICTx-T1D
* Dana RS connection improvements @MilosKozak 
* Removed "Unchanged CGM values" behavior in SMB for Dexcom native app
* New `Low Ressolution Skin <../Configuration/Preferences.html#skin>`_
* New `"Pregnant" patient type <../Usage/Open-APS-features.html#overview-of-hard-coded-limits>`_ @Brian Quinion
* New NSClient tablet layout @MilosKozak 
* NSClient transfer insulin, senstivity and display settings directly from main AAPS @MilosKozak 
* `Preferences filter <../Configuration/Preferences.html>`_ @Brian Quinion
* New pump icons @Rig22 @@teleriddler @osodebailar
* New `insulin type Lyumjev <../Configuration/Config-Builder.html#lyumjev>`_
* SetupWizard improvements @MilosKozak 
* Security improvements @dlvoy 
* Various improvements and fixes @AdrianLxM @Philoul @swissalpine  @MilosKozak @Brian Quinion 

Version 2.7.0
================
Release date: 24-09-2020

**Make sure to check and adjust settings after updating to 2.7 as described** `here <../Installing-AndroidAPS/update2_7.html>`__.

You need at least start `objective 11 <../Usage/Objectives.html#objective-11-automation>`_ in order to continue using `Automation feature <../Usage/Automation.html>`_ (all previous objectives must be completed otherwise starting Objective 11 is not possible). If for example you did not finish the exam in `objective 3 <../Usage/Objectives.html#objective-3-prove-your-knowledge>`_ yet, you will have to complete the exam before you can start `objective 11 <../Usage/Objectives.html#objective-11-automation>`_. This will not effect other objectives you have already finished. You will keep all finished objectives!

Новые возможности
----------------------
* internal use of dependency injection, updates libraries, code rewritten to kotlin @MilosKozak @AdrianLxM
* using modules for Dana pumps @MilosKozak
* `new layout, layout selection <../Getting-Started/Screenshots.html>`_ @MilosKozak
* new `status lights layout <../Configuration/Preferences.html#status-lights>`_ @MilosKozak
* `multiple graphs support <../Getting-Started/Screenshots.html#section-f-main-graph>`_ @MilosKozak
* `Profile helper <../Configuration/profilehelper.html>`_ @MilosKozak
* visualization of `dynamic target adjustment <../Getting-Started/Screenshots.html#visualization-of-dynamic-target-adjustment>`_ @Tornado-Tim
* new `preferences layout <../Configuration/Preferences.html>`_ @MilosKozak
* SMB algorithm update @Tornado-Tim
* `Low glucose suspend mode <../Configuration/Preferences.html#aps-mode>`_ @Tornado-Tim
* `carbs required notifications <../Configuration/Preferences.html#carb-required-notification>`_ @twain47 @Tornado-Tim
* removed Careportal (moved to Actions) @MilosKozak
* `new encrypted backup format <../Usage/ExportImportSettings.html>`_ @dlvoy
* `new SMS TOTP authentication <../Children/SMS-Commands.html>`_ @dlvoy
* `new SMS PUMP CONNECT, DISCONNECT <../Children/SMS-Commands.html#commands>`_ commands @Lexsus
* better support for tiny basals on Dana pumps @Mackwe
* small Insight fixes @TebbeUbben @MilosKozak
* `"Default language" option <../Configuration/Preferences.html#general>`_ @MilosKozak
* vector icons @Philoul
* `set neutral temps for MDT pump <../Configuration/MedtronicPump.html#configuration-of-phone-androidaps>`_ @Tornado-Tim
* History browser improvements @MilosKozak
* removed OpenAPS MA algorithm @Tornado-Tim
* removed Oref0 sensitivity @Tornado-Tim
* `Biometric or password protection <../Configuration/Preferences.html#protection>`_ for settings, bolus @MilosKozak
* `new automation trigger <../Usage/Automation.html>`_ @PoweRGbg
* `Open Humans uploader <../Configuration/OpenHumans.html>`_ @TebbeUbben @AdrianLxM
* New documentation @Achim

Версия 2.6.1.4
================
Дата выпуска: 04-05-2020

Используйте ` Android Studio 3.6.1 <https://developer.android.com/studio/>` _ или новее, чтобы построить apk.

Новые возможности
----------------------
* Insight: Выключение вибрации при болюсах на версии прошивки 3-вторая попытка
* В остальном эквивалентна 2.6.1.3. Обновление не является обязательным. 

Версия 2.6.1.3
================
Дата выпуска: 03-05-2020

Используйте ` Android Studio 3.6.1 <https://developer.android.com/studio/>` _ или новее, чтобы построить apk.

Новые возможности
------------------
* Insight: Выключение вибрации при болюсах на версии прошивки 3
* В остальном эквивалентна 2.6.1.2. Обновление не является обязательным. 

Версия 2.6.1.2
================
Дата выпуска: 19-04-2020

Используйте ` Android Studio 3.6.1 <https://developer.android.com/studio/>` _ или новее, чтобы построить apk.

Новые возможности
------------------
* Исправлен сбой в службе Insight
* В остальном эквивалентна 2.6.1.1. Если эта ошибка не влияет на вас, обновление не требуется.

Версия 2.6.1.1
================
Дата выпуска: 06-04-2020

Используйте ` Android Studio 3.6.1 <https://developer.android.com/studio/>` _ или новее, чтобы построить apk.

Новые возможности
------------------
* Исправлена ошибка команды SMS CARBS при использовании помпы Combo
* В остальном эквивалентна 2.6.1. Если эта ошибка не влияет на вас, обновление не требуется.

Версия 2.6.1
==============
Дата выпуска: 21-03-2020

Используйте ` Android Studio 3.6.1 <https://developer.android.com/studio/>` _ или новее, чтобы построить apk.

Новые возможности
------------------
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

Версия 2.6.0
==============
Дата выпуска: 29-02-2020

Используйте ` Android Studio 3.6.1 <https://developer.android.com/studio/>` _ или новее, чтобы построить apk.

Новые возможности
------------------
* Небольшие изменения дизайна (стартовая страница...)
* Careportal tab / menu removed - more details `here <../Usage/CPbefore26.html>`__
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
* Allow to `bolus only part <../Configuration/Preferences.html#advanced-settings-overview>`_ from bolus wizard calculation
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
* `Поддержка Аccu-Chek Insight <../Configuration/Accu-Chek-Insight-Pump.html>'_(от Tebbe Ubben и JamOrHam)
* Индикаторы состояния на главном экране (Nico Schmitz)
* Помощник перехода на летнее время (Румен Георгиев)
* Исправлеие обработки имен профилей, поступивших от NS (Johannes Mockenhaupt)
* Исправление блокировки интерфейса (Johannes Mockenhaupt)
* Поддержка обновленного приложения G5 (Tebbe Ubben и Milos Kozak)
* Поддержка G6, Poctech, Tomato, Eversense BG (Tebbe Ubben и Milos Kozak)
* Исправлено отключение SMB в настройках (Johannes Mockenhaupt)

Разное
--------------------------------------------------
* Если вы задавали собственное значение smbmaxminutes нужно заново его настроить


Версия 2.0
==================================================
Дата выпуска: 03-11-2018

Новые возможности
--------------------------------------------------
* Поддержка oref1/SMB (<https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html>документация oref1). Обязательно прочтите документацию, чтобы знать, чего ожидать от SMB, как он себя поведет, чего может достичь и как добиться его ровной работы.
* ` _Accu-Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html> ` _ Поддержка помпы
* Мастер установки: направляет вас через процесс настройки AndroidAPS

Настройки при переключении с AMA на SMB
--------------------------------------------------
* Для включения SMB необходимо начать выполнение цели 10 (вкладка SMB обычно показывает какие применяются ограничения)
* maxIOB теперь включает весь IOB, а не только добавленный базал. То есть, если дан болюс 8 ед. на еду a максимальный IOB ограничен 7 ед., то SMB не будет подан до тех пор, пока активный инсулин IOB не опустится ниже 7 ед.
* минимальное воздействие углеводов min_5m_carbimpact по умолчанию изменилось с 3 до 8, при переходе с AMA на SMB. Если вы переходите с AMA на SMB, то вам нужно изменить его вручную
* Обратите внимание при создании приложения AndroidAPS 2.0: Выборочная Конфигурация не поддерживается текущей версией плагина Android Gradle! Если сборка выполнена с ошибкой, относящейся к "выборочной конфигурации", можно сделать следующее:

  * Откройте окно настроек, нажав Файл > Настройки (на Mac, Android Studio > Настройки).
  * В левой панели нажмите Сборка, Выполнение, Развертывание > Компилятор.
  Снимите флажок с ячейки "выборочная конфигурация".
  * Нажмите Применить или OK.

Вкладка обзора
--------------------------------------------------
* Верхняя полоса дает доступ к приостановке/отключению цикла, просмотру/настройке профиля и запуску/остановке временных целей (TT). Временные цели TT используют настройки по умолчанию. Новая опция Гипо TT является высокой временной целью TT для предотвращения слишком агрессивной реакции на корректирующие углеводы.
* Кнопки терапии: старая кнопка все еще доступна, но скрыта по умолчанию. Видимость кнопок теперь может быть сконфигурирована. Новая кнопка инсулина, новая кнопка (включая ` eCarbs/extended carbs <../Usage/Extended-Carbs.html> ` _)
* `Colored prediction lines <../Getting-Started/Screenshots.html#prediction-lines>`_
* Опция отображения поля заметок об инсулине/углеводах/калькуляторе/первичном заполнении которые передаются в NS
* Обновленное диалоговое окно «первичное/заполнение» позволяет заполнять инфузионный набор и вносить данные об изменении места установки и замене картриджа

Часы
--------------------------------------------------
* Отдельный вариант сборки изъят, теперь включен в регулярную полную сборку. Чтобы иметь управления болюсами с часов, включите этот параметр на телефоне
* Мастер теперь запрашивает только углеводы (и процент, если он включен в настройках часов). То, какие параметры входят в расчет можно задать в настройках телефона
* диалоги подтверждения и информирования теперь работают и на wear 2.0
* Добавлена запись меню eCarbs

Новые расширения
--------------------------------------------------
* Приложение PocTech в качестве источника данных ГК
* Измененное приложение Dexcom как источник ГК
* плагин чувствительности oref1

Разное
--------------------------------------------------
* Приложение теперь использует меню для отображения расширений; плагины, выбранные как видимые в конфигураторе, показаны как вкладки сверху (избранное)
* Переработан конфигуратор и вкладки целей, добавлены описания
* Новый значок приложения
* Много улучшений и исправлений
* независимые от Nightscout оповещения, если помпа недоступна длительное время (например, depleted pump battery) and missed BG readings (see *Local alerts* in settings)
* Возможность держать экран включенным
* Опция отображения уведомлений как уведомление Android
* Расширенная фильтрация (позволяющая всегда включать SMB и на 6час. после еды) поддерживаемая модифицированным приложением Dexcom или xDrip в нативном режиме G5 в качестве источника ГК.
