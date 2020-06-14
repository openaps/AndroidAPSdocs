Freestyle Libre 2
**************************************************

Система Freestyle Libre 2 может автоматически сообщать об опасных уровнях глюкозы в крови. Сенсор Libre2 каждую минуту отправляет текущие значения гликемии на принимающее устройство (ридер или смартфон). При необходимости приемник инициирует оповещение. With a self-modified LibreLink app and the xDrip+ app, you can continuously receive and display your blood sugar level on your smartphone. 

The sensor can be calibrated in the range of -40 mg/dl to +20 mg/dl (-2,2 mmol/l to +1,1 mmol/l) to adjust differences between finger prick measurements and sensor readings.

BG readings can also be done using a BT transmitter like with the Libre1.

Step 1: Build your own patched LibreLink-App
==================================================

По юридическим причинам установка так называемого патча должна быть произведена самостоятельно. Используйте поисковые системы для поиска соответствующих ссылок. There are mainly two variants: The recommended original patched app blocks any internet traffic to avoid tracking. The other variant supports LibreView which may be needed by your doctor.

The patched app has to be installed instead of the original app. The next sensor started with it will transmit the current BG values to the xDrip+ app running on your smartphone via Bluetooth.

Important: To avoid possible problems it may help to first install and uninstall the original app on an NFC capable smartphone. NFC должен быть включен. Это не требует дополнительной энергии. Then install the patched app. 

The patched app can be identified by the foreground authorization notification. The foreground authorization service improves the connection stability compared to the original app which do not use this service.

.. image:: ../images/Libre2_ForegroundServiceNotification.png
  :alt: LibreLink Служба переднего плана

Other indications could be the Linux penguin logo three dot menu -> Info or the font of the patched app. These criteria are optional depending on the app source you choose.

.. изображение:: ../images/LibreLinkPatchedCheck.
  :alt: LibreLink Font Check

Ensure that NFC is activated, enable the memory and location permission for the patched app, enable automatic time and time zone and set at least one alarm in the patched app. 

Теперь запустите датчик Libre2 при помощи модифицированного приложения, просто сканируя сенсор. Ensure to have set all settings done.

Обязательные параметры для успешного запуска сенсора: 

* NFC включен/BT включен
* memory and location permission enabled 
* location service enabled
* automatic time and time zone setting
* задать хотя бы одно оповещение в модифицированном приложении

Please note that the location service is a central setting. This is not the app location permission which has to be set also!

.. image:: ../images/Libre2_AppPermissionsAndLocation.png
  :alt: LibrreLink-разрешение на доступ к памяти и расположению
  
  
.. image:: ../images/Libre2_DateTimeAlarms.png
  :alt: automatic time and time zone + alarm settings  

The sensor remembers the device it was started from. Только это устройство может получать оповещения в будущем.

Первая установка соединения с сенсором имеет решающее значение. Приложение LibreLink пытается установить беспроводное соединение с сенсором каждые 30 секунд. Если один или несколько обязательных параметров отсутствуют, их надо скорректировать. У вас нет ограничений по времени для этого. Сенсор постоянно пытается установить соединение. Даже если это длится несколько часов. Be patient and try different settings before even think of changing the sensor.

As long as you see a red exclamation mark ("!") on the upper left corner of the LibreLink's start screen there is no connection or some other setting blocks LibreLink to signal alarms. Please check if the sound is enabled and all sorts of blocking app notifications are disabled. When the exclamation mark is gone, the connection should be established and blood sugar values are sent to the smartphone. Это должно произойти не более чем через 5 минут.

.. image:: ../images/Libre2_ExclamationMark.png
  :alt: LibreLink нет соединения
  
Если восклицательный знак остается или вы получите сообщение об ошибке, это может иметь несколько причин:

- Служба определения местоположения Android не предоставлена - включите ее в системных настройках
- automatic time and time zone not set - please change the settings accordingly
-активировать сигналы -по крайней мере однин из трех сигналов в LibreLink
- Bluetooth выключен - включите
- sound is blocked
- app notifications are blocked
- idle screen notifications are blocked 
- you have a faulty Libre 2 sensor from a production LOT number with a 'K' followed by 8 digits. You find this printed on the yellow package. These sensors have to be replaced as they don't function on bluetooth.

Перезапуск телефона помогает, возможно, придется перезапустить несколько раз. Как только соединение будет установлено, красный восклицательный знак исчезнет и самый важный этап - сопряжение - пройден. It may happen that depending on system settings the exclamation mark remain but you still get readings. In both cases you are fine. Сенсор и телефон теперь сопряжены, каждую минуту передаются данные ГК.

.. image:: ../images/Libre2_Connected.png
  :alt: Соединение LibreLink установлено
  
In rare case it could help to empty the bluetooth cache and/or reset all network connections via the system menu. This removes all connected bluetooth devices which may help to setup a proper bluetooth connection. That procedure is save as the started sensor is remembered by the patched LibreLink app. Nothing additional has to be done here. Simply wait for the patched app to connect to the sensor.

After a successful connection the smartphone settings can be changed if necessary. This is not recommended but you may want to save power. Служба определения местоположения может быть отключена, громкость установлена на ноль, сигналы снова отключены. The blood sugar levels are transferred anyway.

Однако, при запуске следующего сенсора, все параметры должны быть установлены снова!

Remark: The patched app need the mandatory settings set in that hour after warmup to enable a connection. For the 14 days operation time they are not needed. In most cases when you have problems with starting a sensor the location service was switched off. For Android it is needed for proper bluetooth operation(!) to connect. Please refer to Google's Android documentation.

During the 14 days you can use in parallel one or more NFC capable smartphones (not the reader device!) running the original LibreLink app for scanning via NFC. There is no time limitation to start that. You could use a parallel phone for example on day 5 or so. The parallel phones(s) could upload the blood sugar values into the Abbott Cloud (LibreView). LibreView can generate reports for your diabetes team. Есть много родителей, которым это необходимо. 

Please note that the original patched app **does not have any connection to the internet** to avoid tracking.

However there is a variant of the patched app supporting LibreView with enabled internet access. Please be aware that your data is transferred to the cloud then. But your diadoc tool- and reporting chain is fully supported then. With that variant it is also possible to move the alarms of a running sensor to a different device which not has started the sensor. Please google in diabetes related German forums how this could be done.


Шаг 2: Установите и настройте приложение xDrip+
==================================================

Значения гликемии передаются на смартфон приложением xDrip+. 

* If not already set up then download xDrip+ app and install one of the latest nightly builds from `here <https://github.com/NightscoutFoundation/xDrip/releases>`_.
* В xDrip+ выберите "Libre2 (пропатченное приложение)" в качестве источника данных
* При необходимости введите "BgReading:d, xdrip libr_receiver:v" в разделе Менее распространенные настройки -> Extra Logging Settings-> Extra tags for logging. Это позволит записывать сообщения об ошибках для устранения неисправностей.
В xdrip перейдите в настройки > совместимость программ >локальная трансляция данных и выберите Включить (ON).
В xdrip+ перейдите в настройки > совместимость программ > принимать назначения (Accept treatments) и выберите ВЫКЛ (OFF).
* to enable AAPS to receive blood sugar levels (version 2.5.x and later) from xDrip+ please set `Settings > Interapp Settings > Identify Receiver "info.nightscout.androidaps" <https://androidaps.readthedocs.io/en/latest/EN/Configuration/xdrip.html#identify-receiver>`_
Если хотите, чтобы AndroidAPS мог калибровать показания гликемии, в xdrip + перейдите в настройки > совместимость приложений > принимать калибровки (Accept calibrations) и выберите ВКЛ (ON).  Возможно вы также захотите рассмотреть варианты калибровки в настройках > менее распространенные параметры > дополнительные параметры калибровки.

.. image:: ../images/Libre2_Tags.png
  :alt: xDrip+ LibreLink журналы

Шаг 3: Запустить сенсор
==================================================

В xDrip+ запустите датчик с помощью "Start Sensor" и "not today". 

In fact this will not physically start any Libre2 sensor or interact with them in any case. Это просто для того, чтобы указать xDrip+, что новый сенсор начал передавать уровень ГК. Если доступно, введите два замера крови для начальной калибровки. Теперь значения глюкозы крови должны отображаться в xDrip+ каждые 5 минут. Пропущенные значения, например из-за того, что вы были слишком далеко от вашего телефона, не будут восстановлены.

After a sensor change xDrip+ will automatically detect the new sensor and will delete all calibration data. You may check you bloody BG after activation and make a new initial calibration.

Step 4: Configure AndroidAPS (for looping only)
==================================================
* В AndroidAPS перейдите в Config Builder > BG Source и проверьте 'xDrip+' 
* If AndroidAPS does not receive BG values when phone is in airplane mode, use `Identify receiver` as describe on `xDrip+ settings page <../Configuration/xdrip.html#identify-receiver>`_.

До настоящего времени, используя Libre 2 в качестве источника данных ГК, невозможно активировать «Включить SMB всегда» и «Включить SMB после углеводов» в алгоритме SMB. Значения BG Libre 2 недостаточно ровные, чтобы использовать их безопасно. Подробнее см. в `Выравнивание данных мониторинга <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md>`.

Опыт и устранение неполадок
==================================================

Connectivity
--------------------------------------------------
The connectivity is extraordinarily good. With the exception of Huawei mobile phones, all current smartphones seams to work well. The reconnect rate in case of connection loss is phenomenal. Связь может прерваться, если мобильный телефон находится в кармане напротив сенсора или на улице. Когда я работаю в саду, я ношу телефон на одной стороне тела с датчиком. In rooms, where Bluetooth spreads over reflections, no problems should occur. Если возникают проблемы с подключением, проверьте другой телефон. It may also help to set the sensor with the internal BT antenna pointing down. The slit on the applicator must be pointing down when setting the sensor.

Value smoothing & raw values
--------------------------------------------------
Технически, текущее значение сахара в крови передается на xDrip + каждую минуту. Фильтруется средневзвешенное сглаженное значение за последние 25 минут. Это обязательно для цикла. Кривые выглядят гладкими, и результаты работы цикла великолепны. Необработаные значения, на которых основаны оповещения, имеют несколько больший разборос, но в конечном счете соответствуют показателям ридера. Кроме того, необработанные значения могут отображаться на графике xDrip+ для того, чтобы имелась возможность своевременно реагировать на быстрые изменения. Переключитесь на Менее распространенные Настройки > Расширенные настройки для Libre2 > "показывать необработанные значения" и "показывать Информацию с сенсора". Then the raw values are additionally displayed as small white dots and additional sensor info is available in the system menu.

The raw values are very helpful when the blood sugar is moving fast. Even if the dots are more jumpy you would detect the tendency much better as using the smoothed line to make proper therapy decisions.

.. image:: ../images/Libre2_RawValues.png
  :alt: xDrip+ advanced settings Libre 2 & raw values

Sensor runtime
--------------------------------------------------
Рабочее время сенсора фиксируется на 14 дней. 12 дополнительных часов Либре1 больше не существует. xDrip+ shows additional sensor information after enabling Advanced Settings for Libre2 > "show Sensors Infos" in the system menu like the starting time. Оставшееся время работы сенсора можно также увидеть в модифицированном приложении LibreLink. Либо в главном окне в виде оставшихся дней работы, либо в виде времени начала работы датчика в трехточечных меню-> Справка-> Протокол событий в разделе "Новый датчик найден".

.. image:: ../images/Libre2_Starttime.png
  :alt: Libre 2 время запуска

New sensor
--------------------------------------------------
Замена сенсора происходит на лету: установите новый сенсор незадолго до активации. Как только xDrip + перестает получать больше данных от старого сенсора, запустите новый при помощи модифицированного приложения. Через час новые значения должны автоматически отображаться в xDrip+. 

В противном случае проверьте настройки телефона и перейдите к первоначальному запуску. У вас нет ограничения по времени. Try to find the correct settings. Нет необходимости сразу же менять сенсор пока не перепробованы разные комбинации. Датчики надежны, постарайтесь установить надежное соединение. Не торопитесь. In most cases you accidentally changed one setting which causes now problems. 

При успехе выберите "стоп сенсор" и "только удалить калибровки" в xDrip. xDrip + сможет понять, что новый сенсор получает данные об уровне сахара в крови, а старые калибровки больше не действительны и поэтому должны быть удалены. Никакого реального взаимодействия с сенсором Libre2 при этом не происходит!  You do not need to start the sensor in xDrip+.

.. image:: ../images/Libre2_GapNewSensor.png
  :alt: xDrip + пропущенные данные при замене сенсора Libre 2

Калибровка
--------------------------------------------------
You can calibrate the Libre2 with an offset of -40 mg/dl to +20 mg/dL [-2,2 mmol/l to +1,1 mmol/l] (intercept). The slope isn't changeable as the Libre2 is much more accurate compared to the Libe1. Please check by fingerpricking early after setting a new sensor. It is know that there can arise big differences to the blood measurements. Для верности, калибруйте каждые 24-48 часов. Значения точны до конца срока работы сенсора и не имеют такого разброса как в Libre1. Однако, если сенсор и близко не показывает верные значения, это не изменится. В этом случае сенсор следует немедленно заменить.

Plausibility checks
--------------------------------------------------
Сенсоры Libre2 способны выполнять самопроверку для обнаружения неверных значений. Как только сенсор смещается на руке или слегка приподнимается, данные могут начать колебаться. После этого датчик Libre2 отключится по соображениям безопасности. К сожалению, при сканировании при помощи приложения, проводятся дополнительные проверки. Приложение может отключить сенсор, даже если он исправен. В настоящее время внутренние тесты слишком строги. Я полностью прекратил сканирование и с тех пор сбоев не было.

Time zone travelling
--------------------------------------------------
In other `time zones <../Usage/Timezone-traveling.html>`_ there are two strategies for looping: 

Either 

1. оставить время смартфона без изменений и сдвинуть базальный профиль (смартфон в режиме полета) или 
2. удалить историю помпы и изменить время смартфона на местное время. 

Метод 1. очень хорош, если вам не нужно тут же устанавливать новый датчик Libre2. При наличии сомнений выберите метод 2, особенно если поездка занимает больше времени. Если вы запускаете новый сенсор, часовой пояс должен быть установлен на автоматическую смену, поэтому метод 1. будет нарушен. Пожалуйста, проверьте это заранее, вы можете столкнуться с проблемами.

Experiences
--------------------------------------------------
В целом это одна из самых маленьких систем мониторинга ГК на рынке. Маленькая, не нуждается в трансмиттере, выдает очень точные значения без колебаний. After approx. 12 hours running-in phase with deviations of up to 30 mg/dl (1,7 mmol/l)the deviations are typical smaller than 10 mg/dl (0,6 mmol/l). Наилучшие результаты на внутренней части верха руки, другие места применяйте с осторожностью! Нет необходимости устанавливать новый сенсор заранее для привыкания. That would disturb the internal leveling mechanism.

В ремя от времени случаются плохие сенсоры, у которых имеются расхождения с показаниями ГК. Они не изменяются. Их следует немедленно заменить.

Если датчик сдвинется немного на коже или каким-то образом поднимется это может привести к плохим результатам. Если нить сенсора немного вышла из ткани, это приведет к неверным результатам. Mostly probably you will see jumping values in xDrip+. Или к изменению значений ГК. В этом случае немедленно замените сенсор! Т.к. результаты неточны.

Step 5: Using bluetooth transmitter and OOP
==================================================

Помимо модифицированного приложения можно использовать новый передатчик Dropplet или (вскоре будет доступен) новый алгоритм OOP xDrip для получения значений ГК. MM2 и blucon пока не работают.

Bluetooth transmitter can be used with the Libre2 with the latest xDrip+ nightlys. Please refer to the miaomiao website to find a description. This will also work with the Bubble devices and in the future with other transmitter devices.

The Droplet transmitter is working with Libre2 but uses a internet service. Please refer to FB or Google to get further information.

Even if the patched LibreLink app approach is smart there may be some reasons to use a bluetooth transmitter instead.

* the BG readings are identical to the reader results
* the Libre2 sensor can be used 14.5 days as with the Libre1 before 
* 8 hours Backfilling is fully supported.
* get BG readings during the 1 hour startup time of a new sensor

Remark: The transmitter can be used in parallel to the LibreLink app. It doesn't disturb the patched LibreLink app operation.
