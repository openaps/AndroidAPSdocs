Freestyle Libre 2
**************************************************

Система Freestyle Libre 2 может автоматически сообщать об опасных уровнях глюкозы в крови. Сенсор Libre2 каждую минуту отправляет текущие значения гликемии на принимающее устройство (ридер или смартфон). При необходимости приемник инициирует оповещение. С помощью модифицированного приложения LibreLink, вы можете непрерывно получать значения ГК на смартфон. Поскольку данные идут напрямую через Bluetooth на телефон, необходимость в покупке таких устройств как MiaoMiao или bluecon отпадает. 

Шаг 1: Создайте свое модифицированное приложение Librelink-App
==================================================

По юридическим причинам установка так называемого патча должна быть произведена самостоятельно. Используйте поисковые системы для поиска соответствующих ссылок.

Модифицированное приложение должно быть установлено вместо исходного. Следующий сенсор, запущенный с него, будет передавать данные ГК на смартфон.

Важно: первая установка и удаление исходного приложения должно производиться на смартфоне с поддержкой NFC. NFC должен быть включен. Это не требует дополнительной энергии. Затем установите модифицированное приложение. На установку модификации укажет уведомление об авторизации. 

.. изображение:: ../images/fsl2pic1.jpg
  :alt: LibreLink Служба переднего плана

Это значительно повышает стабильность соединения по сравнению с исходным приложением. Убедитесь, что NFC активирована, дайте новому приложению разрешения на память и геолокацию, включите автоматическое время и часовой пояс и задайте хотя бы одно оповещение. 

Теперь запустите датчик Libre2 при помощи модифицированного приложения, просто сканируя сенсор. Следуйте инструкциям. Сенсор запоминает устройство, с которого он был запущен. Только это устройство может получать оповещения в будущем.

Обязательные параметры для успешного запуска сенсора: 

* NFC включен/BT включен
* разрешение на доступ к памяти дано 
Определение местоположения включено
* автоматическое определение времени и часового пояса
* задать хотя бы одно оповещение в модифицированном приложении

.. изображение:: ../images/fsl2pic2.jpg
  :alt: LibrreLink-разрешение на доступ к памяти и расположению
  
.. изображение:: ../images/fsl2pic3.jpg
  :alt: Android Настройки местоположения
  
.. изображение:: ../images/fsl2pic4.jpg
  :alt: автоматическое время и часовой пояс
  
.. изображение:: ../images/fsl2pic4.jpg
  :alt: Параметры LibreLink
  
Первая установка соединения с сенсором имеет решающее значение. Приложение LibreLink пытается установить беспроводное соединение с сенсором каждые 30 секунд. Если один или несколько обязательных параметров отсутствуют, их надо скорректировать. У вас нет ограничений по времени для этого. Сенсор постоянно пытается установить соединение. Даже если это длится несколько часов. Будьте терпеливы и попробуйте разные настройки, прежде чем даже подумать о замене сенсора.

Пока вы видите красный восклицательный знак ("!") в левом верхнем углу стартового экрана LibreLink - соединения нет. Только когда восклицательный знак исчезнет, соединение установлено и значения гликемии отправляются на смартфон. Это должно произойти не более чем через 5 минут.

.. изображение:: ../images/fsl2pic5.jpg
  :alt: LibreLink нет соединения
  
Если восклицательный знак остается или вы получите сообщение об ошибке, это может иметь несколько причин:

- Служба определения местоположения Android не предоставлена - включите ее в системных настройках
- автоматическое время и часовой пояс не заданы - измените настройки
-активировать сигналы -по крайней мере однин из трех сигналов в LibreLink
- Bluetooth выключен - включите

Перезапуск телефона помогает, возможно, придется перезапустить несколько раз. Как только соединение будет установлено, красный восклицательный знак исчезнет и самый важный этап - сопряжение - пройден. Сенсор и телефон теперь сопряжены, каждую минуту передаются данные ГК.

.. изображение:: ../images/fsl2pic6.jpg
  :alt: Соединение LibreLink установлено
  
Теперь параметры смартфона могут быть изменены в случае необходимости, например, для экономии энергии. Служба определения местоположения может быть отключена, громкость установлена на ноль, сигналы снова отключены. Данные сахара крови в любом случае передаются.

Однако, при запуске следующего сенсора, все параметры должны быть установлены снова!

Можно использовать второй смартфон с NFC и оригинальным приложением LibreLink для сканирования через NFC. Ридер после этого нельзя использовать, он не может быть сопряжен параллельно! Второй телефон может передавать значения сахара крови в Abbott Cloud (LibreView). LibreView может генерировать отчеты для DiaDoc. Есть много родителей, которым это необходимо. 

Примечание: модифицированное приложение не имеет соединения с Интернетом.

Шаг 2: Установите и настройте приложение xDrip+
==================================================

Значения гликемии передаются на смартфон приложением xDrip+. 

* Если это еще не сделано, загрузите xdrip и установите одну из последних ночных сборок отсюда `<https://github.com/NightscoutFoundation/xDrip/releases>`_.
* В xDrip+ выберите "Libre2 (пропатченное приложение)" в качестве источника данных
* При необходимости введите "BgReading:d, xdrip libr_receiver:v" в разделе Менее распространенные настройки -> Extra Logging Settings-> Extra tags for logging. Это позволит записывать сообщения об ошибках для устранения неисправностей.
В xdrip перейдите в настройки > совместимость программ >локальная трансляция данных и выберите Включить (ON).
В xdrip+ перейдите в настройки > совместимость программ > принимать назначения (Accept treatments) и выберите ВЫКЛ (OFF).
* для включения AAPS для получения уровня сахара в крови (версия 2.5.x и выше) от xdrip пожалуйста установите ` Settings > Interapp Settings > Identify Receiver "info.nightscout.androidaps" <https://androidaps.readthedocs.io/en/latest/EN/Configuration/xdrip.html#identify-receiver>` _
Если хотите, чтобы AndroidAPS мог калибровать показания гликемии, в xdrip + перейдите в настройки > совместимость приложений > принимать калибровки (Accept calibrations) и выберите ВКЛ (ON).  Возможно вы также захотите рассмотреть варианты калибровки в настройках > менее распространенные параметры > дополнительные параметры калибровки.

.. изображение:: ../images/fsl2pic7.jpg
  :alt: xDrip+ LibreLink журналы
  
.. изображение:: ../images/fsl2pic7.jpg
  :alt: xDrip+ журнал
  #
Шаг 3: Запустить сенсор
==================================================

В xDrip+ запустите датчик с помощью "Start Sensor" и "not today". 

На самом деле это не запустит датчик Libre2 и не начнет взаимодействовие с ним. Это просто для того, чтобы указать xDrip+, что новый сенсор начал передавать уровень ГК. Если доступно, введите два замера крови для начальной калибровки. Теперь значения глюкозы крови должны отображаться в xDrip+ каждые 5 минут. Пропущенные значения, например из-за того, что вы были слишком далеко от вашего телефона, не будут восстановлены.

Шаг 4: Настройка AndroidAPS
==================================================
* В AndroidAPS перейдите в Config Builder > BG Source и проверьте 'xDrip+' 
Если AAPS не получает значения ГК, когда телефон находится в режиме авиаперелета пользуйтесь функцией Идентифицировать приемник в соответствии с описанием на странице настроек `xDrip+ settings page <../Configuration/xdrip.html#identifiziere-empfanger>`_.

До настоящего времени, используя Libre 2 в качестве источника данных ГК, невозможно активировать «Включить SMB всегда» и «Включить SMB после углеводов» в алгоритме SMB. Значения BG Libre 2 недостаточно ровные, чтобы использовать их безопасно. Подробнее см. в `Выравнивание данных мониторинга <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md>`.

Опыт и устранение неполадок
==================================================

Способность к сопряжению исключительная. За исключением мобильных телефонов Huawei, все современные смартфоны, по-видимому, работают хорошо. Повторное подключение в случае потери соединения проходит феноменально. Связь может прерваться, если мобильный телефон находится в кармане напротив сенсора или на улице. Когда я работаю в саду, я ношу телефон на одной стороне тела с датчиком. В комнатах, где Bluettooth распространяется с отражениями, нет никаких проблем. Если возникают проблемы с подключением, проверьте другой телефон.

Технически, текущее значение сахара в крови передается на xDrip + каждую минуту. Фильтруется средневзвешенное сглаженное значение за последние 25 минут. Это обязательно для цикла. Кривые выглядят гладкими, и результаты работы цикла великолепны. Необработаные значения, на которых основаны оповещения, имеют несколько больший разборос, но в конечном счете соответствуют показателям ридера. Кроме того, необработанные значения могут отображаться на графике xDrip+ для того, чтобы имелась возможность своевременно реагировать на быстрые изменения. Переключитесь на Менее распространенные Настройки > Расширенные настройки для Libre2 > "показывать необработанные значения" и "показывать Информацию с сенсора". После этого "необработанные" значения будут дополнительно отображается в виде небольших белых точек и в меню системы будет доступна дополнительная информация о сенсоре.

.. изображение:: ../images/fsl2pic8.jpg
  :alt: xDrip + дополнительные параметры Libre 2
  
.. изображение:: ../images/fsl2pic9.jpg
  :alt: xDrip+ главный экран с необработанными данными
  
Рабочее время сенсора фиксируется на 14 дней. 12 дополнительных часов Либре1 больше не существует. xDrip + показывает дополнительную информацию о сенсоре после включения дополнительных параметров для Libre2 > "show Sensors Infos" в системном меню, такую например, как время запуска сенсора. Оставшееся время работы сенсора можно также увидеть в модифицированном приложении LibreLink. Либо в главном окне в виде оставшихся дней работы, либо в виде времени начала работы датчика в трехточечных меню-> Справка-> Протокол событий в разделе "Новый датчик найден".

.. изображение:: ../images/fsl2pic10.jpg
  :alt: Libre 2 время запуска
  
В целом это одна из самых маленьких систем мониторинга ГК на рынке. Маленькая, не нуждается в трансмиттере, выдает очень точные значения без колебаний. После приблизительно 12 часов работы в фазе подстройки с отклонениями до 30 мг/дл, далее отклонения не превышают 10 мд/дл. Best results at the rear orbital arm, other setting points with caution! No need to set a new sensor one day ahead for soaking. That would disturbe the internal leveling mechanism.

There seem to be bad sensors from time to time, which are far away from the blood values. It stays that way. These should be immediately replaced.

If the sensor moved a little bit on the skin or is lifted somehow this can cause bad results. The filament which sits in the tissue is a little bit pulled out of the tissue and will measure different results then. Mostly probabaly you will see jumping values in xDrip+. Or the difference to the bloody values change. Please replace the sensor immediately! The results are inaccurate now.

A sensor exchange takes place on-the-fly: Set new sensor shortly before activation. As soon as xDrip+ receives no more data from the old sensor, start the new sensor with the patched app. After one hour new values should appear automatically in xDrip+. 

If not, please check the phone settings and proceed as with the first start. You have no time limit. Try to find the correct seetings. No need to immediately replace the sensor before you tried different combinations. The sensors are robust and try permanently to establish a connection. Please take your time. In most cases you accidentially changed one setting which causes now problems. 

Once successful please select "Sensor Stop" and "Delete calibration only" in xDrip. This indicates for xDrip+ that a new sensor is releasing blood sugar levels and the old calibrations are no longer valid and therefore have to be deleted. No real interaction is done with the Libre2 sensor here! You do not need to start the sensor in xDrip.

.. изображение:: ../images/fsl2pic11.jpg
  :alt: xDrip+ missing data when changing Libre 2 sensor
  
You can calibrate the Libre2 with an offset of plus/minus 20 mg/dL (intercept), but no slope. To be on the safe side, calibrate every 24 - 48 hours. The values are accurate up to the end of the sensor and do not jitter as with the Libre1. However, if the sensor is completely off, this will not change. The sensor should then be replaced immediately.

The Libre2 sensors contain plausibility checks to detect bad sensor values. As soon as the sensor moves on the arm or is lifted slightly, the values may start to fluctuate. The Libre2 sensor will then shut down for safety reasons. Unfortunately, when scanning with the App, additional checks are made. The app can deactivate the sensor even though the sensor is OK. Currently the internal test are too strict. I have completely stopped scanning and haven't had a failure since then.

In other `time zones <../Usage/Timezone-traveling.html>`_ there are two strategies for looping: Either 

1. leave the smartphone time unchanged and shift the basal profile (smartphone in flight mode) or 
2. delete the pump history and change the smartphone time to local time. 

Method 1. is great as long as you don't have to set a new Libre2 sensor on-site. If in doubt, choose method 2., especially if the trip takes longer. If you set a new sensor, the automatic time zone must be set, so method 1. would be disturbed. Please check before, if you are somewhere else, you can run otherwise fast into problems.

Besides the patched app the new Droplet transmitter or (soon available) the new OOP algorithm of xDrip+ can be used to receive blood sugar values. MM2 and blucon do NOT work so far.
