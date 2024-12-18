# Nightscout

(Nightscout-security-considerations)=

## Вопросы безопасности

Помимо отчетов Nightscout можно также использовать для управления AAPS. Например, вы можете задать временные цели или добавить будущие углеводы. Эта информация будет подхвачена в AAPS, которая будет выполнять соответствующие действия. Поэтому стоит задуматься над тем, как обеспечить безопасность веб-сайта Nightcut.

Будьте предельно осторожны при использовании Nightscout в качестве источника данных AAPS.

### Nightscout settings

Доступ посторонних к сайту Nightscout может быть запрещен при помощи [ролей верификации](https://nightscout.github.io/nightscout/security): делитесь своим URL-адресом с token (маркером) `для чтения`, но не `для администрирования`.

`API_SECRET `для Nightscout является главным паролем вашего сайта: не делитесь им публично.

(Nightscout-aaps-settings)=

### Настройки AAPS

AAPS можно настроить на принятие команд Nightscout (изменения профиля, терапии, ...) или полностью отключить его.

* Войдите в настройки модуля NSClient или NSClientV3 через 1) Главный вид -> Конфигуратор -> Синхронизация -> клиент NS / NSClientV3 - шестерёнка настроек 2) вкладку NSCLIENT -> Меню трех точек -> Настройки расширений
* Включите загрузку всех данных в Nightscout (3), так как это теперь стандартный метод, если только источник ГК не Nightscout.  
  Если источником данных гликемии AAPS является Nightscout **не** включайте выгрузку (передачу данных) ГК в Nightscout (3).
* Не включайте Получать/заполнять данные мониторинга CGM (4) если только Nightscout не является источником данных ГК.

![Только выгрузка в Nightscout](../images/NSsafety.png)

#### Не синхронизировать с Nightscout

Отключение этих опций гарантирует, что изменения Nightscout не будут использоваться в AAPS.

![Только выгрузка в Nightscout](../images/NSsafety2.png)

#### Принимать изменения Nightscout

Включение этих опций позволяет удаленно изменять настройки AAPS через Nightscout, Например, модификация и изменение профилей, временных целей, внесение записей об углеводах, которые будут учтены в AAPS.  
Обратите внимание, что записи об инсулине будут выполняться в виде "Не вводить болюс, только внести запись".

![Только выгрузка в Nightscout](../images/NSsafety3.png)

### Дополнительные параметры защиты

Поддерживайте ПО телефона в актуальном состоянии как это описано в разделе [безопасность на первом месте](#preparing-safety-first).

(Nightscout-manual-nightscout-setup)=

## Установка Nightscout вручную

Предполагается, что у вас уже есть сайт Nightscout, если же нет - зайдите на страницу [ Nightscout ](http://nightscout.github.io/nightscout/new_user/) для получения полных инструкций по настройке; приведенные ниже инструкции описывают параметры, которые также потребуется добавить на сайт Nightscout. Для AAPS 3.2 сайт Nightscout должен быть не ниже 15 версии, поэтому убедитесь, что у вас [новая версия](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version), иначе AAPS будет выдавать сообщение об ошибке.

* [Редактирование переменных](https://nightscout.github.io/nightscout/setup_variables/#nightscout-configuration)

* Добавьте или измените переменные следующим образом:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  * ` DEVICESTATUS_ADVANCED ` = ` true `
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Для [ мониторинга помпы ](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring) можно задать различные оповещения, в частности, рекомендуется % заряда батареи: 
    * ` PUMP_WARN_BATT_P ` = ` 51 `
    * ` PUMP_URGENT_BATT_P ` = ` 26 ` 

* Сохраните изменения. Ваш сайт Nightscout теперь должен разрешитьотображение таблеток. Можно принудительно отобразить их по умолчанию, добавив их в `SHOW_PLUGINS`.
  
  * `SHOW_PLUGINS` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  
  ![Таблетки Nightscout](../images/nightscout1.png)

## Nightscout как оплачиваемый SaaS (Software в качестве услуги)

Используйте веб-интерфейс поставщика сервиса для внесения переменных. При необходимости свяжитесь со службой поддержки поставщика.