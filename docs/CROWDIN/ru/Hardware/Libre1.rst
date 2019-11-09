Freestyle Libre 1
******************

Чтобы использовать Libre в качестве постоянного мониторинга, который получает новые значения гликемии каждые 5 минут, нужно сначала приобрести один из адаптеров NFC - Bluetooth:

* MiaoMiao-Reader <https://www.miaomiao.cool/>https://www.miaomiao.cool`_
* Blukon Nightrider <https://www.ambrosiasys.com/howit>https://www.ambrosiasys.com/howit`_
* BlueReader <https://bluetoolz.de/blueorder/#home>https://bluetoolz.de/blueorder/#home`_
* Sony Smartwatch 3 (SWR50) <https://github.com/pimpimmi/LibreAlarm/wiki/>https://github.com/pimpimmi/LibreAlarm/wiki`_

До настоящего времени, используя Libre 1 в качестве источника данных ГК, невозможно активировать «Включить SMB всегда» и «Включить SMB после углеводов» в алгоритме SMB. Значения BG Libre 1 недостаточно ровные, чтобы использовать их безопасно. Подробнее см. в `Выравнивание данных мониторинга <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md>`.

При использовании xdrip
===================
* Если это еще не сделано, скачайте xdrip+ и следуйте инструкциям`LimiTTEer <https://github.com/JoernL/LimiTTer>`_,  `Libre Alarm <https://github.com/pimpimmi/LibreAlarm/wiki>`_ or `BlueReader <https://unendlichkeit.net/wordpress/?p=680&lang=en>`_ (`Hardware <https://bluetoolz.de/wordpress/>`_).
В xdrip перейдите в настройки > совместимость программ >локальная трансляция данных и выберите Включить (ON).
В xdrip+ перейдите в настройки > совместимость программ > принимать назначения (Accept treatments) и выберите ВЫКЛ (OFF).
Если хотите, чтобы AndroidAPS мог калибровать показания гликемии, в xdrip + перейдите в настройки > совместимость приложений > принимать калибровки (Accept calibrations) и выберите ВКЛ (ON).  Возможно вы также захотите рассмотреть варианты калибровки в настройках > менее распространенные параметры > дополнительные параметры калибровки.
В конфигуратоге (настройки AndroidAPS) выберите xdrip.
* Настройте параметры в xDrip+ в соответствии со страницей настроек `xDrip+ со снимками экрана <../Configuration/xdrip.html>`__. Существует раздел базовых настроек xDrip+ и для параметров Freestyle Libre xDrip+.
Если AAPS не получает значения ГК, когда телефон находится в режиме авиаперелета пользуйтесь функцией Идентифицировать приемник в соответствии с описанием на странице настроек `xDrip+ settings page <../Configuration/xdrip.html>`_.

При использовании Glimp
====================
* Если это еще не сделано, скачайте Glimp и следуйте инструкциям на <http://www.nightscout.info/wiki/welcome/nightscout-for-libre>nightscout`_.
В конфигураторе (настройки AndroidAPS) выберите Glimp.
