# Примечания к изменениям в версиях

Следуйте инструкциям [ в руководстве по обновлению](../Installing-AndroidAPS/Update-to-new-version.md). На ее страницах решаются наиболее распространенные проблемы связанные с обновлениями.

Начиная с версии 2.3 установлена новая процедура обновления. Как только будет доступно новое обновление вы получите следующую информацию:

![Update info](../images/AAPS_LoopDisable90days.png)

У вас есть 60 дней для обновления. Если вы не обновитесь в течение 60 дней AAPS войдет в режим LGS (приостановка на низких ГК - см. [глоссарий](../Getting-Started/Glossary.md)), [цель 4](../Usage/Objectives.md).

Если вы не обновитесь еще 30 дней (90 дней с новой даты выпуска) AAPS переключится в режим открытого цикла.

Имейте в виду, что это изменение не предназначено для того, чтобы действовать вам на нервы, а существует по соображениям безопасности. Новые версии AndroidAPS не только обеспечивают новые возможности, но и содержат исправления безопасности. Поэтому необходимо, чтобы каждый пользователь обновлял приложение как можно чаще. К сожалению, все еще поступают сообщения об ошибках из очень старых версий, поэтому это попытка повысить безопасность каждого пользователя и всего сообщества. Благодарим за понимание!

## Версия 2.3

Дата выпуска: 25-04-2019

### Новые возможности

* Важное решение безопасности для Insight (очень важно, если вы используете Insight!)
* Исправлен браузер истории
* Исправление расчетов дельты
* Обновление переводов
* Проверка GIT и предостережение об обновлении gradle
* Больше автоматического тестирования
* Исправление потенциального сбоя в службе AlarmSound (спасибо @lee-b !)
* Исправлена передача данных ГК (теперь работает независимо от разрешения SMS!)
* Новый модуль проверки версий

## Версия 2.2.2

Дата выпуска: 07-04-2019

### Новые возможности

* Исправление Autosens: деактивировать значение временная цель ТТ повышает/понижает целевое значение
* Новые переводы
* Исправления драйверов Insight
* Исправление расширения SMS

## Версия 2.2

Дата выпуска: 29-03-2019

### Новые возможности

* [Исправление перехода на летнее время](../Usage/Timezone-traveling#time-adjustment-daylight-savings-time-dst)
* Обновление Wear
* [Обновление расширения SMS](../Usage/SMS-Commands.md)
* Возможность возврата к предыдущим целям.
* Остановка цикла, если память телефона заполнена

## Версия 2.1

Дата выпуска: 03-03-2019

### Новые возможности

* Поддержка Аccu-Chek [Insight](../Configuration/Accu-Chek-Insight-Pump.md) (от Tebbe Ubben и JamOrHam)
* Индикаторы состояния на главном экране (Nico Schmitz)
* Помощник перехода на летнее время (Румен Георгиев)
* Исправлеие обработки имен профилей, поступивших от NS (Johannes Mockenhaupt)
* Исправление блокировки интерфейса (Johannes Mockenhaupt)
* Поддержка обновленного приложения G5 (Tebbe Ubben и Milos Kozak)
* Поддержка G6, Poctech, Tomato, Eversense BG (Tebbe Ubben и Milos Kozak)
* Исправлено отключение SMB в настройках (Johannes Mockenhaupt)

### Остальное

* Если вы задавали собственное значение `smbmaxminutes` нужно заново его настроить

## Версия 2.0

Дата выпуска: 03-11-2018

### Новые возможности

* Поддержка oref1/SMB ([документация oref1](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)). Обязательно прочтите документацию, чтобы знать, чего ожидать от SMB, как он себя поведет, чего может достичь и как добиться его ровной работы.
* Поддержка помпы Accu-check Combo ([инструкции по установке](../Configuration/Accu-Chek-Combo-Pump.md))
* Мастер установки: направляет вас через процесс настройки AndroidAPS

### Настройки при переключении с AMA на SMB

* Для включения SMB необходимо начать выполнение цели 8 (вкладка SMB обычно показывает какие применяются ограничения)
* maxIOB теперь включает *все* активные инсулины IOB, а не только добавленный basal. То есть, если дан болюс 8 ед. на еду a максимальный IOB ограничен 7 ед., то SMB не будет подан до тех пор, пока активный инсулин IOB не опустится ниже 7 ед.
* при переходе с AMA на SMB минимальное действие углеводов min_5m_carbimpact по умолчанию изменилось с 3 до 8. Если вы переходите с AMA на SMB, то вам нужно изменить его вручную
* Обратите внимание при создании приложения AndroidAPS 2.0: Выборочная Конфигурация не поддерживается текущей версией плагина Android Gradle! Если сборка выполнена с ошибкой, относящейся к "выборочной конфигурации", можно сделать следующее:
  
  * Open the Preferences window by clicking File > Settings (on Mac, Android Studio > Preferences).
  * In the left pane, click Build, Execution, Deployment > Compiler.
  * Uncheck the Configure on demand checkbox.
  * Click Apply or OK.

### Overview tab

* Top ribbon gives access to suspend/disable loop, view/adjust profile and to start/stop temporary targets (TTs). TTs use defaults set in preferences. The new Hypo TT option is a high temp TT to prevent the loop from too aggressively overcorrection rescue carbs.
* Treatment buttons: old treatment button still available, but hidden by default. Visibility of buttons can now be configured. New insulin button, new carbs button (including [eCarbs/extended carbs](../Usage/Extended-Carbs.md))
* Colored prediction lines: 
  * Orange: COB (colour is used generally to represent COB and carbs)
  * Dark blue: IOB (colour is used generally to represent IOB and insulin)
  * Light blue: zero-temp
  * Dark yellow: UAM
* Option to show a notes field in insulin/carbs/calculator/prime+fill dialogs, which are uploaded to NS
* Updated prime/fill dialog allows priming and creating careportal entries for site change and cartridge change

### Watch

* Separate build variant dropped, included in regular full build now. To use bolus controls from watch, enable this setting on the phone
* Wizard now only asks for carbs (and percentage if enabled in watch settings). Which parameters are included in the calculation can be configured in the settings on the phone
* confirmations and info dialogs now work on wear 2.0 as well
* Added eCarbs menu entry

### New plugins

* PocTech app as BG source
* Dexcom patched app as BG source
* oref1 sensitivity plugin

### Остальное

* App now uses drawer to show all plugins; plugins selected as visible in config builder are shown as tabs on top (favourites)
* Overhaul for config builder and objectives tabs, adding descriptions
* New app icon
* Lots of improvements and bugfixes
* Nightscout-independant alerts if pump is unreachable for a longer time (e.g. depleted pump battery) and missed BG readings (see *Local alerts* in settings)
* Option to keep screen on
* Option to show notification as Android notification
* Advanced filtering (allowing to always enable SMB and 6h after meals) supported with patched Dexcom app or xDrip with G5 native mode as BG source.