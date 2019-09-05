Dexcom G5
**********
При использовании G5 с xdrip+
===========================
* Если это еще не сделано, скачайте <https://github.com/NightscoutFoundation/xDrip>_и следуйте инструкциям на Nightscout (G5<http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>_.
В xdrip перейдите в настройки > совместимость программ >локальная трансляция данных и выберите Включить (ON).
В xdrip+ перейдите в настройки > совместимость программ > принимать назначения (Accept treatments) и выберите ВЫКЛ (OFF).
Если хотите, чтобы AndroidAPS мог калибровать показания гликемии, в xdrip + перейдите в настройки > совместимость приложений > принимать калибровки (Accept calibrations) и выберите ВКЛ (ON).  Возможно вы также захотите рассмотреть варианты калибровки в настройках > менее распространенные параметры > дополнительные параметры калибровки.
В конфигуратоге (настройки AndroidAPS) выберите xdrip.
Если AAPS не получает значения ГК, когда телефон находится в режиме авиаперелета пользуйтесь функцией Идентифицировать приемник в соответствии с описанием на странице настроек xDrip+ [xDrip+ settings page](../Configuration/xdrip.md).

При пользовании G5 с помощью модифицированного приложения Dexcom
=========================================================
* Скачайте приложение из `https://github.com/dexcomapp/dexcomapp <https://github.com/dexcomapp/dexcomapp>`_, и выберите версию по вашим потребностям (mg/dl или mmol/l, G5).

   * Folder 2.3 is for users of AndroidAPS 2.3, folder 2.4 for users of AAPS 2.4.
   * Open https://play.google.com/store/search?q=dexcom%20g5 on your computer. Region will be visible in URL.
   
   .. image:: ../images/DexcomG5regionURL.PNG
     :alt: Region in Dexcom G5 URL

* Oстановите сенсор и удалите оригинальное приложение Dexcom.
* Установите загруженное приложение
* Запустите сенсор
* В конфигуратоге (настройки AndroidAPS) выберите Dexcom G5 App (модифицированное).
