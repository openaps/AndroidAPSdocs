# Nightscout

## Вопросы безопасности

Помимо отчетов Nightscout можно также использовать для управления AAPS. Например, вы можете задать временные цели или добавить будущие углеводы. Эта информация будет подхвачена в AAPS, которая будет выполнять соответствующие действия. Поэтому стоит задуматься над тем, как обеспечить безопасность веб-сайта Nightcut.

### Настройки Nightscout

Можно запретить общий доступ к сайту Nightscout с помощью [ идентификационных ролей ](http://www.nightscout.info/wiki/welcome/website-features/0-9-features/authentication-roles).

### Настройки системы AndroidAPS

В параметрах AAPS есть функция только загрузки NS (без синхронизации). При этом AAPS не отбирает изменения, внесенные в Nightscout, такие как временные цели или будущие углеводы. Если вы используете [ профиль NS ](../Configuration/Config-Builder#ns-profile), то профили будут синхронизировано между AAPS и Nightscout, несмотря на настройку "только загрузка".

* Коснитесь 3-точечного меню в правом верхнем углу на домашней странице AAPS.
* Выберите "Параметры".
* Прокрутите страницу вниз и выберите "Дополнительные параметры".
* Активируйте "только загрузку NS"

![Nightscout upload only](../images/NSsafety.png)

### Дополнительные параметры защиты

Регулярно обновляйте программное обеспечение телефона, как описано в разделе [ безопасность прежде всего](../Getting-Started/Safety-first.rst).

## Установка Nightscout вручную

Предполагается, что у вас уже есть сайт Nightscout, если не посетить страницу [ Nightscout ](http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku) для получения полных инструкций по настройке, приведенные ниже инструкции являются параметрами, которые вам также потребуется добавить на сайт Nightscout. Сайт Nightscut должен быть по крайней мере версии 10 (отображается как 0.10...), поэтому убедитесь, что вы запускаете [ последнюю версию ](http://www.nightscout.info/wiki/welcome/how-to-update-to-latest-cgm-remote-monitor-aka-cookie); в противном случае появится сообщение об ошибке в приложении AAPS. Некоторые люди находят, что алгоритмы ИПЖ требуют больше трафика, чем квоты Azure, поэтому Heroku предпочтительнее.

* Перейдите на https://herokuapp.com/

* Нажмите на имя службы приложения.

* Щелкните по параметрам приложения (azure) или Settings > " Reveal Config Variables (heroku)

* Добавьте или измените переменные следующим образом:
  
  * ` ENABLE ` = ` careportal boluscalc food bwp cage sage iob cob basal ar2 rawbg pushover bgi pump openaps `
  * ` DEVICESTATUS_ADVANCED ` = ` true `
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Various alarms can be set for [monitoring the pump](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring), battery % in particular is encouraged: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 
  * Optional: The following 'timers' can be set for the coloring in the AAPS careportal: 
    * `BAGE_WARN` = `480` (Warning after x hours since last Battery Changed Event in Careportal)
  * `BAGE_URGENT` = `504` (Urgent warning after x hours since last Battery Changed Event in Careportal)
  * `CAGE_WARN` = `40` (Warning after x hours since last Cannula Changed Event in Careportal)
  * `CAGE_URGENT` = `48` (Urgent warning after x hours since last Cannula Changed Event in Careportal)
  * `IAGE_WARN` = `144` (Warning after x hours since last Insulin Cartridge Changed Event in Careportal)
  * `IAGE_URGENT` = `192` (Warning after x hours since last Insulin Cartridge Changed Event in Careportal)
  * ` SAGE_WARN ` = ` 160 ` (Предупреждение после x часов с момента последнего изменения статуса установки сенсора в Careportal)
  * `SAGE_URGENT` = `168` (Urgent Warning after x hours since the last CGM Sensor Insert Event in Careportal)

![Azure](../../images/nightscout1.png)

* Click "Save" at the top of the panel.

## Semi-automated Nightscout setup

This service is offered by fellow looper Martin Schiftan free of charge at the moment. If you like the service you can consider sending him a small donation (link in the navigation on the left side).

**Benefits**

* You can install Nightscout with a few clicks and use it directly. 
* Reduction of manual work as Martin tries to automate the administration.
* All settings can be made via a user-friendly web interface. 
* The service includes an automated basal rate check using Autotune. 
* The server is located in Germany.

<http://ns.10be.de/en/index.html>