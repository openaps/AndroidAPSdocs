Freestyle Libre 1
**************************************************

Чтобы использовать Libre в качестве постоянного мониторинга, который получает новые значения гликемии каждые 5 минут, нужно сначала приобрести один из адаптеров NFC - Bluetooth:

* MiaoMiao Reader (version 1 or 2) `https://www.miaomiao.cool/ <https://www.miaomiao.cool/>`_
* Blucon Nightrider `https://www.ambrosiasys.com/our-products/blucon/ <https://www.ambrosiasys.com/our-products/blucon/>`_
* Bubble `https://bubbleshop.eu/ <https://bubbleshop.eu/>`_

Additionally it is possible to use a specific watch, the Sony Smartwatch 3 which has an NFC chip which can be enabled and can be used as a NFC collector. However the custom NFC to Bluetooth adapters listed above offer a less complex solution and would be used by the majority of those wanting to use their Libre 1 as a CGM.
* Sony Smartwatch 3 (SWR50) `https://github.com/pimpimmi/LibreAlarm/wiki/ <https://github.com/pimpimmi/LibreAlarm/wiki/>`_

As it currently stands, if using Libre 1 as BG source you cannot activate ‘Enable SMB always’ and ‘Enable SMB after carbs’ within the SMB algorithm. Значения BG Libre 1 недостаточно ровные, чтобы использовать их безопасно. Подробнее см. в `Выравнивание данных мониторинга <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md>`.

При использовании xdrip+
==================================================
* If not already set up then download xDrip+ and follow instructions on `LimiTTEer <https://github.com/JoernL/LimiTTer>`_ or  `Libre Alarm <https://github.com/pimpimmi/LibreAlarm/wiki>`_.
В xdrip перейдите в настройки > совместимость программ >локальная трансляция данных и выберите Включить (ON).
В xdrip+ перейдите в настройки > совместимость программ > принимать назначения (Accept treatments) и выберите ВЫКЛ (OFF).
Если хотите, чтобы AndroidAPS мог калибровать показания гликемии, в xdrip + перейдите в настройки > совместимость приложений > принимать калибровки (Accept calibrations) и выберите ВКЛ (ON).  Возможно вы также захотите рассмотреть варианты калибровки в настройках > менее распространенные параметры > дополнительные параметры калибровки.
В конфигуратоге (настройки AndroidAPS) выберите xdrip+.
* Настройте параметры в xDrip+ в соответствии со страницей настроек `xDrip+ со снимками экрана <../Configuration/xdrip.html>`__. Существует раздел базовых настроек xDrip+ и для параметров Freestyle Libre xDrip+.
Если AAPS не получает значения ГК, когда телефон находится в режиме авиаперелета пользуйтесь функцией Идентифицировать приемник в соответствии с описанием на странице настроек `xDrip+ settings page <../Configuration/xdrip.html>`_.

При использовании Glimp
==================================================
* Вам понадобится Glimp версии 4.15.57 или выше. Более старые версии не поддерживаются.
* Если это еще не сделано, скачайте Glimp и следуйте инструкциям на <http://www.nightscout.info/wiki/welcome/nightscout-for-libre>nightscout`_.
В конфигураторе (настройки AndroidAPS) выберите Glimp.
