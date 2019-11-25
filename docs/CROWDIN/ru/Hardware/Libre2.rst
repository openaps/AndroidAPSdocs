Freestyle Libre 2
**********************

Система Freestyle Libre 2 может автоматически сообщать об опасных уровнях глюкозы в крови. Сенсор Libre2 каждую минуту отправляет текущие значения гликемии на принимающее устройство (ридер или смартфон). При необходимости приемник инициирует оповещение. С помощью модифицированного приложения LibreLink, вы можете непрерывно получать значения ГК на смартфон. Поскольку данные идут напрямую через Bluetooth на телефон, необходимость в покупке таких устройств как MiaoMiao или bluecon отпадает. 

Шаг 1: Создайте свое модифицированное приложение Librelink-App
==============

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
  :alt: automatic time and timezone
  
.. изображение:: ../images/fsl2pic4.jpg
  :alt: Параметры LibreLink
  
Первая установка соединения с сенсором имеет решающее значение. Приложение LibreLink пытается установить беспроводное соединение с сенсором каждые 30 секунд. Если один или несколько обязательных параметров отсутствуют, их надо скорректировать. У вас нет ограничений по времени для этого. The sensor is constantly trying to setup the connection. Even if is last some hours. Be patient and try different seetings before even think of changing the sensor.

As long as you see a red exclamation mark ("!") on the upper left corner of the LibreLinks start screen there is no connection. Only when the exclamation mark is gone, the connection is established and blood sugar values are sent to the smartphone. This should happen after a maximum of 5 minutes.

.. изображение:: ../images/fsl2pic5.jpg
  :alt: LibreLink no connection
  
If the exclamation mark remains or you get an error message, this can have several reasons:

- Android location service is not granted - please enable it in the system settings
- automatic time and time zone is not set - please change the settings accordingly
- activate alarms - at least one of the three alarms must be activated in LibreLink
- Bluetooth is switched off - please switch on

Restarting the phone can help, you may have to do it several times. As soon as the connection is established, the red exclamation mark disappears and the most important step is taken. Sensor and phone are now connected, every minute a blood sugar value is transmitted.

.. изображение:: ../images/fsl2pic6.jpg
  :alt: LibreLink connection established
  
Now the smartphone settings can be changed again if necessary, e.g. if you want to save power. Location service can be switched off, volume can be set to zero or alarms can be switched off again. The bloodsugar levels are transferred anyway.

When starting the next sensor, however, all settings must be set again!

Можно использовать второй смартфон с NFC и оригинальным приложением LibreLink для сканирования через NFC. Ридер после этого нельзя использовать, он не может быть сопряжен параллельно! Второй телефон может передавать значения сахара крови в Abbott Cloud (LibreView). LibreView может генерировать отчеты для DiaDoc. Есть много родителей, которым это необходимо. 

Remark: The patched app does not have any connection to the Internet.

Шаг 2: Установите и настройте приложение xDrip+
==============

The blood sugar values are received on the smartphone by the xDrip+ App. 

* Если это еще не сделано, загрузите xdrip и установите одну из последних ночных сборок от `здесь <https://github.com/NightscoutFoundation/xDrip/releases>`_.
* In xDrip+ select "Libre2 (patched App)" as data source
* If necessary, enter "BgReading:d,xdrip libre_receiver:v" under Less Common Settings->Extra Logging Settings->Extra tags for logging. This will log additional error messages for trouble shooting.
В xdrip перейдите в настройки > совместимость программ >локальная трансляция данных и выберите Включить (ON).
В xdrip+ перейдите в настройки > совместимость программ > принимать назначения (Accept treatments) и выберите ВЫКЛ (OFF).
* to enable AAPS to receive blood sugar levels (version 2.5.x and later) from xdrip please set `Settings > Interapp Settings > Identify Receiver "info.nightscout.androidaps" <https://androidaps.readthedocs.io/en/latest/EN/Configuration/xdrip.html#identify-receiver>`_
Если хотите, чтобы AndroidAPS мог калибровать показания гликемии, в xdrip + перейдите в настройки > совместимость приложений > принимать калибровки (Accept calibrations) и выберите ВКЛ (ON).  Возможно вы также захотите рассмотреть варианты калибровки в настройках > менее распространенные параметры > дополнительные параметры калибровки.

.. изображение:: ../images/fsl2pic7.jpg
  :alt: xDrip+ LibreLink logging
  
.. image:: ../images/fsl2pic7a.jpg
  :alt: xDrip+ log
  #
Step 3: Start sensor
===============

In xDrip+ start the sensor with "Start Sensor" and "not today". 

In fact this will not start any Libre2 sensor or interact with them in any case. This is simply to indicate xDrip+ that a new sensor is delivering blood sugar levels. If available, enter two bloody measured values for the initial calibration. Now the blood glucose values should be displayed in xDrip+ every 5 minutes. Skipped values, e.g. because you were too far away from your phone, will not be backfilled.

Шаг 4: Настройка AndroidAPS
==============
* В AndroidAPS перейдите в Config Builder > BG Source и проверьте 'xDrip+' 
* If AndroidAPS does not receive BG values when phone is in airplane mode, use `Identify receiver` as describe on `xDrip+ settings page <../Configuration/xdrip.html#identifiziere-empfanger>`_.

До настоящего времени, используя Libre 2 в качестве источника данных ГК, невозможно активировать «Включить SMB всегда» и «Включить SMB после углеводов» в алгоритме SMB. Значения BG Libre 2 недостаточно ровные, чтобы использовать их безопасно. Подробнее см. в `Выравнивание данных мониторинга <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md>`.

Experiences and Troubleshooting
===================

The connectivity is extraordinary good. With the exception of Huawei mobile phones, all current smartphones seems to work well. The reconnect in case of connection loss is phenomenal. The connection can break off if the mobile phone is in the pocket opposite the sensor or if you are outdoors. When I am gardening, I use to wear my phone on the sensor side of my body. In rooms, where Bluettooth spreads over refections, no problems should occur. If you have connectivity problems please test another phone.

Technically, the current blood sugar value is transmitted to xDrip+ every minute. A weighted average filter calculates a smoothed value over the last 25 minutes. This is mandatory for looping. The curves look smooth and the loop results are great. The raw values on which the alarms are based jitter a little more, but correspond to the values that the reader also displays. In addition, the raw values can be displayed in the xDrip+ graph in order to be able to react in time to rapid changes. Please switch on Less Common Settings > Advanced Settings for Libre2 > "show Raw values" and "show Sensors Infos". Then the raw values are additionally displayed as small white dots and additional sensor infos are available in the System menu.

.. изображение:: ../images/fsl2pic8.jpg
  :alt: xDrip+ advanced settings Libre 2
  
.. изображение:: ../images/fsl2pic9.jpg
  :alt: xDrip+ homescreen with raw data
  
The sensor runtime is fixed to 14 days. The 12 extra hours of Libre1 no longer exist. xDrip+ shows additional sensor information after enabling Avanced Settings for Libre2 > "show Sensors Infos" in the system menu like the starting time. The remaining sensor time can also be seen in the patched LibreLink app. Either in the main screen as remaining days display or as the sensor start time in the three-point menu->Help->Event log under "New sensor found".

.. изображение:: ../images/fsl2pic10.jpg
  :alt: Libre 2 start time
  
Altogether it is one of the smallest CGM systems on the market. Small, no transmitter necessary and mostly very accurate values without fluctuations. After approx. 12 hours running-in phase with deviations of up to 30 mg/dL the deviations are typical smaller than 10 md/dL. Best results at the rear orbital arm, other setting points with caution! No need to set a new sensor one day ahead for soaking. That would disturbe the internal leveling mechanism.

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
