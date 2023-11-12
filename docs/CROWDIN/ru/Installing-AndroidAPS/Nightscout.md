# Nightscout

(Nightscout-security-considerations)=

## Вопросы безопасности

Помимо отчетов Nightscout можно также использовать для управления AAPS. Например, вы можете задать временные цели или добавить будущие углеводы. Эта информация будет подхвачена в AAPS, которая будет выполнять соответствующие действия. Поэтому стоит задуматься над тем, как обеспечить безопасность веб-сайта Nightcut.

### Настройки Nightscout

Можно запретить общий доступ к сайту Nightscout с помощью [ идентификационных ролей ](https://nightscout.github.io/nightscout/security).

### AAPS settings

В параметрах AAPS есть функция только загрузки NS (без синхронизации). При этом AAPS не отбирает изменения, внесенные в Nightscout, такие как временные цели или будущие углеводы.

* Коснитесь 3-точечного меню в правом верхнем углу на домашней странице AAPS.
* Выберите "Параметры".
* Прокрутите страницу вниз и выберите "Дополнительные параметры".
* Активируйте "только загрузку NS"

![Только выгрузка в Nightscout](../images/NSsafety.png)

### Дополнительные параметры защиты

Регулярно обновляйте программное обеспечение телефона, как описано в разделе [ безопасность прежде всего](../Getting-Started/Safety-first.md).

(Nightscout-manual-nightscout-setup)=

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

## Nightscout as a paid SaaS (Software as a Service)

While Nightscout is an free open source software which you can download yourself free of charge you need

1. a cloud service provider to host your own Nightscout instance

2. invest time to setup your Nightscout instance and MongoDB and

3. operate your Nightscout instance which can be as easy as updating from time to time the Nightscout instance or much more complex if errors occur.

An alternative can be to pay for these SaaS services and get rid of these tasks.

Here you find a randomly ordered list of possible service providers. We will not recommend any of them but we want to give new users a place to jump to their web site and inform themself!

[![ns.10be.de](../images/ns.10be.de-logo_halb_klein.jpg)](https://ns.10be.de/en/index.html)

[![T1Pal](../images/t1_pal_bear_bw.png)](https://t1pal.com/)