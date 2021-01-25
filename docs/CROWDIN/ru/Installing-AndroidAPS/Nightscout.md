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

![Только выгрузка в Nightscout](../images/NSsafety.png)

### Дополнительные параметры защиты

Регулярно обновляйте программное обеспечение телефона, как описано в разделе [ безопасность прежде всего](../Getting-Started/Safety-first.rst).

## Установка Nightscout вручную

It is assumed you already have a Nightscout site, if not visit the [Nightscout](http://nightscout.github.io/nightscout/new_user/) page for full instructions on set up, the instructions below are then settings you will also need to add to your Nightscout site. Сайт Nightscut должен быть по крайней мере версии 10 (отображается как 0.10...), поэтому убедитесь, что вы запускаете [ последнюю версию ](http://www.nightscout.info/wiki/welcome/how-to-update-to-latest-cgm-remote-monitor-aka-cookie); в противном случае появится сообщение об ошибке в приложении AAPS. Некоторые люди находят, что алгоритмы ИПЖ требуют больше трафика, чем квоты Azure, поэтому Heroku предпочтительнее.

* Перейдите на https://herokuapp.com/

* Нажмите на имя службы приложения.

* Щелкните по параметрам приложения (azure) или Settings > " Reveal Config Variables (heroku)

* Добавьте или измените переменные следующим образом:
  
  * ` ENABLE ` = ` careportal boluscalc food bwp cage sage iob cob basal ar2 rawbg pushover bgi pump openaps `
  * ` DEVICESTATUS_ADVANCED ` = ` true `
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Для [ мониторинга помпы ](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring) можно задать различные оповещения, в частности, рекомендуется % заряда батареи: 
    * ` PUMP_WARN_BATT_P ` = ` 51 `
    * ` PUMP_URGENT_BATT_P ` = ` 26 ` 

![Azure](../images/nightscout1.png)

* Нажмите кнопку "Сохранить" в верхней части панели.

## Полуавтоматизированная установка Nightscout

На данный момент эту услугу бесплатно предлагает Martin Schiftan. Если вам понравилась услуга, вы можете отправить ему небольшое пожертвование (ссылка в навигации слева).

**Преимущества**

* Можно установить Nightscout в несколько щелчков и сразу же начать им пользоваться. 
* Сокращение ручной работы поскольку Martin пытается автоматизировать администрирование.
* Все настройки можно задать с помощью удобного для пользователя веб-интерфейса. 
* Услуга включает автоматическую проверку базальной скорости с помощью автонастройки. 
* Сервер расположен в Германии.

<http://ns.10be.de/en/index.html>