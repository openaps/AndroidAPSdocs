# Nightscout

## Вопросы безопасности

Помимо отчетов Nightscout можно также использовать для управления AAPS. Например, вы можете задать временные цели или добавить будущие углеводы. Эта информация будет подхвачена в AAPS, которая будет выполнять соответствующие действия. Поэтому стоит задуматься над тем, как обеспечить безопасность веб-сайта Nightcut.

### Настройки Nightscout

Можно запретить общий доступ к сайту Nightscout с помощью [ идентификационных ролей ](https://nightscout.github.io/nightscout/security).

### Настройки системы AndroidAPS

В параметрах AAPS есть функция только загрузки NS (без синхронизации). При этом AAPS не отбирает изменения, внесенные в Nightscout, такие как временные цели или будущие углеводы. Если вы используете [ профиль NS ](../Configuration/Config-Builder#ns-profile), то профили будут синхронизировано между AAPS и Nightscout, несмотря на настройку "только загрузка".

* Коснитесь 3-точечного меню в правом верхнем углу на домашней странице AAPS.
* Выберите "Параметры".
* Прокрутите страницу вниз и выберите "Дополнительные параметры".
* Активируйте "только загрузку NS"

![Только выгрузка в Nightscout](../images/NSsafety.png)

### Дополнительные параметры защиты

Регулярно обновляйте программное обеспечение телефона, как описано в разделе [ безопасность прежде всего](../Getting-Started/Safety-first.rst).

## Установка Nightscout вручную

Предполагается, что у вас уже есть сайт Nightscout, если же нет - зайдите на страницу [ Nightscout ](http://nightscout.github.io/nightscout/new_user/) для получения полных инструкций по настройке; приведенные ниже инструкции описывают параметры, которые также потребуется добавить на сайт Nightscout. Сайт Nightscut должен быть по крайней мере версии 10 (отображается как 0.10...), поэтому убедитесь, что вы запускаете [ последнюю версию ](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version); в противном случае появится сообщение об ошибке в приложении AAPS. Некоторые люди находят, что алгоритмы ИПЖ требуют больше трафика, чем квоты Azure, поэтому Heroku предпочтительнее.

* Перейдите на https://herokuapp.com/

* Нажмите на имя службы приложения.

* Щелкните по параметрам приложения (azure) или Settings > " Reveal Config Variables (heroku)

* Добавьте или измените переменные следующим образом:
  
  * ` ENABLE ` = ` careportal boluscalc food bwp cage sage iob cob basal ar2 rawbg pushover bgi pump openaps `
  * ` DEVICESTATUS_ADVANCED ` = ` true `
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Для [ мониторинга помпы ](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring) можно задать различные оповещения, в частности, рекомендуется % заряда батареи: 
    * ` PUMP_WARN_BATT_P ` = ` 51 `
    * ` PUMP_URGENT_BATT_P ` = ` 26 ` 

![Azure](../images/nightscout1.png)

* Нажмите кнопку "Сохранить" в верхней части панели.

## Полуавтоматизированная установка Nightscout

Fellow looper Martin Schiftan offered a semi-automated Nightscout setup for many years free of charge. As number of users increased so did cost and therefore he had to start asking a small fee starting October 2021 - starting at €4,17 per month.

**Преимущества**

* Можно установить Nightscout в несколько щелчков и сразу же начать им пользоваться. 
* Сокращение ручной работы поскольку Martin пытается автоматизировать администрирование.
* Все настройки можно задать с помощью удобного для пользователя веб-интерфейса. 
* Услуга включает автоматическую проверку базальной скорости с помощью автонастройки. 
* The servers are located in Germany and Finland.

<https://ns.10be.de/en/index.html>

An alternative would be <https://t1pal.com/> - starting at $11,99 per month.