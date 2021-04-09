# Nightscout

## Вопросы безопасности

Помимо отчетов Nightscout можно также использовать для управления AAPS. Например, вы можете задать временные цели или добавить будущие углеводы. Эта информация будет подхвачена в AAPS, которая будет выполнять соответствующие действия. Поэтому стоит задуматься над тем, как обеспечить безопасность веб-сайта Nightcut.

### Настройки Nightscout

You can deny public access to your Nightscout site by using [authentication roles](https://nightscout.github.io/nightscout/security).

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

Предполагается, что у вас уже есть сайт Nightscout, если же нет - зайдите на страницу [ Nightscout ](http://nightscout.github.io/nightscout/new_user/) для получения полных инструкций по настройке; приведенные ниже инструкции описывают параметры, которые также потребуется добавить на сайт Nightscout. Your Nightscout site needs to be at least version 10 (displayed as 0.10...), so please check you are running the [latest version](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version) otherwise you will get an error message on your AAPS app. Some people find looping uses more than the azure free quota allowed, so heroku is the preferred choice.

* Перейдите на https://herokuapp.com/

* Нажмите на имя службы приложения.

* Щелкните по параметрам приложения (azure) или Settings > " Reveal Config Variables (heroku)

* Добавьте или измените переменные следующим образом:
  
  * ` ENABLE ` = ` careportal boluscalc food bwp cage sage iob cob basal ar2 rawbg pushover bgi pump openaps `
  * ` DEVICESTATUS_ADVANCED ` = ` true `
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Various alarms can be set for [monitoring the pump](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring), battery % in particular is encouraged: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

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

<https://ns.10be.de/en/index.html>