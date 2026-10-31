# Nightscout

(Nightscout-security-considerations)=

## Вопросы безопасности

Nightscout is the reporting and monitoring server of **AAPS**: **AAPS** uploads your data to it, and you or your caregivers look at it on the Nightscout website or in follower apps. It holds your medical data, profiles and treatments, so it is worth thinking about securing your Nightscout website.

In **AAPS** 4, remote control does not go through the Nightscout website. While client control is on ([hardened mode](#client-master-control-hardened-mode)), treatments or targets typed directly into Nightscout are **not applied** by **AAPS**. Remote commands come from a paired **AAPSClient** instead — see [Master ↔ Client control](#client-master-control).

Exercise maximum caution if using Nightscout as your AAPS BG data source.

### Nightscout settings

Доступ посторонних к сайту Nightscout может быть запрещен при помощи [ролей верификации](https://nightscout.github.io/nightscout/security): делитесь своим URL-адресом с token (маркером) `для чтения`, но не `для администрирования`.

`API_SECRET `для Nightscout является главным паролем вашего сайта: не делитесь им публично.

(Nightscout-aaps-settings)=

### Настройки AAPS

Accepting data from Nightscout (profile changes, treatments, ...) is optional and turned off by default. The switches described below are hidden while client control is on (hardened mode) and in [simple mode](#preferences-simple-mode).

* Access the **Synchronization** settings of the NSClientV3 plugin with either 1) **Settings** (gear icon on the main screen) -> **NSClientV3** -> **Synchronization**, or 2) **Configuration** (☰ menu) -> **Communication** -> "**Settings**" under NSClientV3.
* Enable "Upload data to NS".
* "Upload BG data to NS" is in the settings of your BG source (**Configuration → BG Source → Settings**). Enable it, unless your AAPS BG data source is Nightscout: in that case **do not** enable it.
* Do not enable "Receive CGM data from NS" unless Nightscout is your BG data source.

#### Не синхронизировать с Nightscout

Keeping all the "Receive ... from NS" options disabled makes sure no Nightscout change will be used by AAPS:

![Только выгрузка в Nightscout](../images/preferences/settings_nsclient_sync.png)

#### Принимать изменения Nightscout

Enabling these options allows you to change AAPS settings through Nightscout, like profiles modifications and switch, temporary targets and adding carbs that will be taken into account by AAPS. They are only shown when client control and simple mode are off.  
Note that insulin treatments will only be used for calculations like "Do not bolus, record only".

![Nightscout receive options enabled](../images/NSsafety3.png)

### Дополнительные параметры защиты

Поддерживайте ПО телефона в актуальном состоянии как это описано в разделе [безопасность на первом месте](#preparing-safety-first).

(Nightscout-manual-nightscout-setup)=

## Установка Nightscout вручную

It is assumed you already have a Nightscout site, if not visit the [Nightscout](http://nightscout.github.io/nightscout/new_user/) page for full instructions on setup. The instructions below are then settings you will also need to add to your Nightscout site. Your Nightscout site needs to be at least version 15, so please check you are running the [latest version](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version) otherwise you will get an error message on your AAPS app.

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