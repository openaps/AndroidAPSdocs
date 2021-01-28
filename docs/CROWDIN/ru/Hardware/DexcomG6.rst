Dexcom G6
**************************************************
Сначала основное
==================================================

* Следуйте общим рекомендациям по гигиене и настройкам мониторинга `здесь <../Hardware/GeneralCGMRecommendation.html>`_.
* Для Трансмиттеров G6, изготовленных после осени/конца 2018 года выберите одну из `последних ночных сборок xDrip+ <https://github.com/NightscoutFoundation/xDrip/releases>`_. У этих трансмиттеров новая прошивка и стабильная версия xDrip+ (2019/01/10) с ней не работает.

Общие рекомендации по использованию G6 с системами ИПЖ
==================================================

Применение G6 немного сложнее, чем казалось раньше. Для правильного применения необходимо иметь в виду следующие моменты: 

* Если активирован прием в нативном режиме с кодом калибровки в xDrip+ или Spike, в целях безопасности не следует разрешать упреждающий (preemptive) перезапуск датчика.
* Если все же упреждающие перезапуски необходимы, то устанавливайте сенсор в то время, когда есть возможность следить за изменениями и при необходимости калибровать. 
* Если вы перезапускаете сенсор, в целях безопасности делайте это либо без заводской калибровки в дни 11 и 12, либо будьте готовы калибровать и следить за изменениями.
"Предварительное замачивание" (установка сенсора намного раньше его старта в приложении) G6 с заводской калибровкой приведет к отклонениям в данных. Если вы все же делаете "предварительное погружение", то для получения лучших результатов вам, вероятно, придется калибровать сенсор.
* Если вы не планируете отслеживать все возможные отклонения, то лучше вернуться к традиционному режиму калибровки и использовать систему как G5.

Подробнее о деталях и причинах этих рекомендаций читайте `полную статью <http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/>`_опубликованную в Tim Street на`www.diabettech.com <http://www.diabettech.com>`_.

При использовании G6 с xdrip+
==================================================
* Трансмиттер Dexcom G6 может одновременно подключаться к ресиверу Dexcom (или к помпе T:slim) и одному приложению на вашем телефоне.
* При использовании xDrip+ в качестве ресивера сначала удалите приложение Dexcom. **Невозможно одновременно подключить к трансмиттеру приложения xDrip+ и Dexcom!**
* If you need Clarity and want to profit from xDrip+ alarms use the `patched Dexcom app <../Hardware/DexcomG6.html#if-using-g6-with-patched-dexcom-app>`_ with local broadcast to xDrip+.
* If not already set up then download `xdrip <https://github.com/NightscoutFoundation/xDrip>`_ and follow instructions on nightscout (`G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>`_).
В конфигуратоге (настройки AndroidAPS) выберите xdrip+.
* Настройте параметры в xDrip+ в соответствии со страницей настроек `xDrip+ <../Configuration/xdrip.html>`_
Если AAPS не получает значения ГК, когда телефон находится в режиме авиаперелета пользуйтесь функцией Идентифицировать приемник в соответствии с описанием на странице настроек `xDrip+ settings page <../Configuration/xdrip.html>`_.

При пользовании G6 с помощью модифицированного приложения Dexcom
==================================================
* Скачайте приложение из `https://github.com/dexcomapp/dexcomapp <https://github.com/dexcomapp/dexcomapp>`_, и выберите версию в соответствии с предпочтениями (mg/dl или mmol/l, G6).

   * Папка 2.4 для пользователей текущей версии, папка 2.3-только для устаревших AndroidAPS 2.3.
   * Откройте https://play.google.com/store/search?q=dexcom%20g6 на вашем компьютере. 
   * Click the link to the Dexcom G6 app on the search results page that is displayed.
   * Region will be visible in URL.
   
   .. image:: ../images/DexcomG6regionURL.PNG
     :alt: Регион в URL Dexcom G6

* Uninstall the original Dexcom app.
* Установите загруженное приложение
* Enter sensor code and transmitter serial no. in patched app.
* After short time patched app should pick-up transmitter signal. (If not you will have to stop sensor and start new one.)
* В конфигуратоге (настройки AndroidAPS) выберите Dexcom G App (модифицированное).
* Если хотите использовать xDrip-оповещения через локальную трансляцию: в сэндвич-меню xDrip > настройки > источник данных глюкозы > 640G /EverSense.
* Из модифицированного приложения Dexcom нет локальной трансляции непосредственно в xDrip +. Трансляция должна пройти через ААПС, как описано выше.

If using G6 with Build Your Own Dexcom App
==================================================
* As of December 2020 `Build Your Own Dexcom App <https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0>`_ (BYODA)also supports local broadcast to AAPS and/or xDrip+ (not for G5 sensors!)
* This app lets you use your Dexcom G6 with any Android smartphone.
* Uninstall the original Dexcom app or patched Dexcom app if you used one of those previously.
* Установите загруженное приложение
* Enter sensor code and transmitter serial no. in patched app.
* In phone settings go to apps > Dexcom G6 > permissions > additional permissions and press 'Access Dexcom app'.
* After short time patched app should pick-up transmitter signal. (If not you will have to stop sensor and start new one.)

Settings for AndroidAPS
--------------------------------------------------
* Select 'Dexcom App (patched)' in config builder.
* If you don't recieve any values select any other data source, then re-select 'Dexcom App (patched)' to trigger the demand for permissions to establish the connection between AAPS and BYODA-broadcast.

Settings for xDrip+
--------------------------------------------------
* Select '640G/Eversense' as data source.
* Command 'start sensor' must be performed in xDrip+ in order to receive values. This will not affect your current sensor controlled by Build Your Own Dexcom App.
   
Устранение неполадок с G6
==================================================
Устранение неполадок, связанных с dexcom G6
--------------------------------------------------
* Трансмиттеры с серийным номером начинающиеся с 80 или 81, требуют, по крайней мере, последнюю стабильную версию xDrip мая 2019 года или более позднюю ночную сборку.
* Трансмиттеры с серийным номером начиная с 8G, требуют по крайней мере ночную сборку 25 июля 2019 года или новее
* Приложения xDrip + и Dexcom не могут быть одновременно подключены к трансмиттеру.
* Подождите не менее 15 минут. между остановкой и запуском сенсора
* Не отматывайте обратно время установки Отвечайте на вопрос "сенсор установлен сегодня?" всегда "Да, сегодня".
* Не активируйте "перезапускать сенсор" при установке нового сенсора
* Не запускайте новый сенсор прежде чем на классической странице состояния не появится следующая информация Страница-> Состояние G5/G6-> PhoneServiceState:

  * Серийный номер передатчика начинается с 80 или 81: "Got data hh:mm" (напр. "Got data 19:04")
  * Серийный номер трансмиттера, который начинается с 8G: "Got glucose hh:mm" (напр. "Got glucose 19:04") или "Got no raw hh:mm" (напр. "Got now raw 19:04")

.. image:: ../images/xDrip_Dexcom_PhoneServiceState.png
  :alt: xDrip PhoneServiceState

General troubleshoothing
--------------------------------------------------
General Troubleshoothing for CGMs can be found `here <./GeneralCGMRecommendation.html#troubleshooting>`_.

Установка нового трансмиттера на работающий сенсор
--------------------------------------------------
Если вы меняете трансмиттер во время работы сенсора, вы можете попробовать снять его, не повредив платформу сенсора. См. видео `https://youtu.be/AAhBVsc6NZo <https://youtu.be/AAhBVsc6NZo>`_.
