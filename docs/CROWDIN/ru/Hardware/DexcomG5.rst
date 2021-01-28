Dexcom G5
**************************************************
При использовании G5 с xdrip+
==================================================
* Если это еще не сделано, скачайте <https://github.com/NightscoutFoundation/xDrip>_и следуйте инструкциям на Nightscout (G5<http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>_.
* In xdrip go to Settings > Inter-app settings > Broadcast Data Locally and select ON.
* In xdrip go to Settings > Inter-app settings > Accept Treatments and select OFF.
Если хотите, чтобы AndroidAPS мог калибровать показания гликемии, в xdrip + перейдите в настройки > совместимость приложений > принимать калибровки (Accept calibrations) и выберите ВКЛ (ON).  Возможно вы также захотите рассмотреть варианты калибровки в настройках > менее распространенные параметры > дополнительные параметры калибровки.
В конфигуратоге (настройки AndroidAPS) выберите xdrip.
* If AAPS does not receive BG values when phone is in airplane mode use 'Identify receiver' as describe on `xDrip+ settings page <../Configuration/xdrip.md>`_ .

При пользовании G5 с помощью модифицированного приложения Dexcom
==================================================
* Скачайте приложение из `https://github.com/dexcomapp/dexcomapp <https://github.com/dexcomapp/dexcomapp>`_, и выберите версию по вашим потребностям (mg/dl или mmol/l, G5).

  * Папка 2.3 предназначена для пользователей AndroidAPS 2.3, папка 2.4 для пользователей AAPS 2.5.
  * Откройте https://play.google.com/store/search?q=dexcom%20g5 на вашем компьютере. Регион будет виден в URL.

   .. изображение:../images/DexcomG5regionURL.PNG
     :alt: Регион в URL Dexcom G5

* Oстановите сенсор и удалите оригинальное приложение Dexcom.
* Установите загруженное приложение
* Запустите сенсор
* В конфигуратоге (настройки AndroidAPS) выберите Dexcom G App (модифицированное).
* Если хотите использовать xDrip-оповещения через локальную трансляцию: в сэндвич-меню xDrip > settings > hardware data source > 640G /EverSense.
