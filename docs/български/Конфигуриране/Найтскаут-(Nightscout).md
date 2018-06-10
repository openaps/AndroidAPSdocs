Предполага се, че вие вече имате Nightscout сайт, ако нямате посетете [Nightscout](http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku) за пълни инструкции относно създаването и, а настройките по-долу вие ще добавите към вашият Nightscout сайт.

* Отворете https://portal.azure.com/ или https://herokuapp.com/

* Изберете вашето App Service име.

* Щракнете върху Application settings (за azure) или Settings > "Reveal Config Variables (за heroku)

* Добавете или редактирайте променливите както е показано:
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal ar2 rawbg pushover bgi pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Можете да си добавите различни аларми за [наблюдение на помпата](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring), %  заряд на батерията е препоръчителен:
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26`

[[https://github.com/MilosKozak/AndroidAPS/wiki/images/nightscout1.png]]

* Натиснете "Save" в долния край на панела за да запазите направените промени.