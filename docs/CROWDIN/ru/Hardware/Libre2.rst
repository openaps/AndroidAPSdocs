Freestyle Libre 2
**************************************************

Система Freestyle Libre 2 может автоматически сообщать об опасных уровнях глюкозы в крови. Сенсор Libre2 каждую минуту отправляет текущие значения гликемии на принимающее устройство (ридер или смартфон). При необходимости приемник инициирует оповещение. With a self-modified LibreLink app and the xDrip+ app, you can continuously receive and display your blood sugar level on your smartphone. 

The sensor can be calibrated to adjust differences between finger prick mesurements and sensor readings.

BG readings can also be done using a BT transmitter like with the Libre1.

Шаг 1: Создайте свое модифицированное приложение Librelink-App
==================================================

По юридическим причинам установка так называемого патча должна быть произведена самостоятельно. Используйте поисковые системы для поиска соответствующих ссылок. There are mainly two variants: The recommended original patched app blocks any internet traffic to avoid tracking. The other variant supports LibreView which may be needed by your doctor.

The patched app has to be installed instead of the original app. The next sensor started with it will transmit the current BG values to the xDrip+ app running on your smartphone via bluetooth.

Important: To avoid possible problems it may help to first install and uninstall the original app on an NFC capable smartphone. NFC должен быть включен. Это не требует дополнительной энергии. Then install the patched app. 

The patched app can be identified by the foreground authorization notification. The foreground authorization service improves the connection stability compared to the original app which do not use this service.

.. изображение:: ../images/fsl2pic1.jpg
  :alt: LibreLink Служба переднего плана

Other indications could be the Linux penguin logo three dot menue -> Info or the font of the pachted app. These criterias are optional depending on the app source you choose.

.. изображение:: ../images/LibreLinkPatchedCheck.
  :alt: LibreLink Служба переднего плана

Ensure that NFC is activated, enable the memory and location permission for the patched app, enable automatic time and timezone and set at least one alarm in the patched app. 

Теперь запустите датчик Libre2 при помощи модифицированного приложения, просто сканируя сенсор. Ensure to have set all settings done.

Обязательные параметры для успешного запуска сенсора: 

* NFC включен/BT включен
* memory and location permission enabled 
* location service enabled
* автоматическое определение времени и часового пояса
* задать хотя бы одно оповещение в модифицированном приложении

Please note that the location service is a central setting. this is not the app permission which has to be set also!

.. изображение:: ../images/fsl2pic2.jpg
  :alt: LibrreLink-разрешение на доступ к памяти и расположению
  
.. изображение:: ../images/fsl2pic3.jpg
  :alt: Android Настройки местоположения
  
.. изображение:: ../images/fsl2pic4.jpg
  :alt: автоматическое время и часовой пояс
  
.. изображение:: ../images/fsl2pic4.jpg
  :alt: Параметры LibreLink
  

Сенсор запоминает устройство, с которого он был запущен. Только это устройство может получать оповещения в будущем.

Первая установка соединения с сенсором имеет решающее значение. Приложение LibreLink пытается установить беспроводное соединение с сенсором каждые 30 секунд. Если один или несколько обязательных параметров отсутствуют, их надо скорректировать. У вас нет ограничений по времени для этого. Сенсор постоянно пытается установить соединение. Даже если это длится несколько часов. Будьте терпеливы и попробуйте разные настройки, прежде чем даже подумать о замене сенсора.

As long as you see a red exclamation mark ("!") on the upper left corner of the LibreLinks start screen there is no connection or some other setting blocks LibreLink to signal alarms. Please check if the sound is enabled and all sorts of blocking app notifications are disabled. When the exclamation mark is gone, the connection should be established and blood sugar values are sent to the smartphone. Это должно произойти не более чем через 5 минут.

.. изображение:: ../images/fsl2pic5.jpg
  :alt: LibreLink нет соединения
  
Если восклицательный знак остается или вы получите сообщение об ошибке, это может иметь несколько причин:

- Служба определения местоположения Android не предоставлена - включите ее в системных настройках
- автоматическое время и часовой пояс не заданы - измените настройки
-активировать сигналы -по крайней мере однин из трех сигналов в LibreLink
- Bluetooth выключен - включите
- sound is blocked
- app notifications are blocked
- idle screen notifications are blocked 
- you have a faulty Libre 2 sensor from a production LOT number with a 'K' followed by 8 digits. You find this printed on the yellow package. That sensors has to be replace as they dont function on bluetooth.

Перезапуск телефона помогает, возможно, придется перезапустить несколько раз. Как только соединение будет установлено, красный восклицательный знак исчезнет и самый важный этап - сопряжение - пройден. It may happen that depending on system settings the exclamation mark remain but you still get readings. In both cases you are fine. Сенсор и телефон теперь сопряжены, каждую минуту передаются данные ГК.

.. изображение:: ../images/fsl2pic6.jpg
  :alt: Соединение LibreLink установлено
  
In rare case it could help to empty the bluetooth cache and/or reset all network connections via the system menu. This removes all connected bluetooth devices which may help to setup a proper bluetooth connection.

Now the smartphone settings can be changed again if necessary. This is not recommended but you may want to save power. Служба определения местоположения может быть отключена, громкость установлена на ноль, сигналы снова отключены. Данные сахара крови в любом случае передаются.

Однако, при запуске следующего сенсора, все параметры должны быть установлены снова!

Remark: The patched app need them in that hour after warmup to enable a connection. For the 14 days operation time they are not needed. 

You can use one or more NFC capable smartphones (not the reader device!) running the original LibreLink app for scanning via NFC. Второй телефон может передавать значения сахара крови в Abbott Cloud (LibreView). LibreView может генерировать отчеты для DiaDoc. Есть много родителей, которым это необходимо. Please note the the original patched app does not have any connection to the Internet.

There is a variant of the patched app supporting LibreView. Please be aware that your data are transfered to the cloud then. But your diadoc tool- and reportingchain is fully supported then. With that variant it is also possible to move the alarms to a different device which not has started the sensor. Please google to find the way how this could be done.


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

In fact this will not physically start any Libre2 sensor or interact with them in any case. Это просто для того, чтобы указать xDrip+, что новый сенсор начал передавать уровень ГК. Если доступно, введите два замера крови для начальной калибровки. Теперь значения глюкозы крови должны отображаться в xDrip+ каждые 5 минут. Пропущенные значения, например из-за того, что вы были слишком далеко от вашего телефона, не будут восстановлены.

After a sensor change xDrip+ will automatically detect the new sensor and will delete all calibration data. You may check you bloody BG after activation and make a new inital calibration.

Step 4: Configure AndroidAPS (for looping only)
==================================================
* В AndroidAPS перейдите в Config Builder > BG Source и проверьте 'xDrip+' 
Если AAPS не получает значения ГК, когда телефон находится в режиме авиаперелета пользуйтесь функцией Идентифицировать приемник в соответствии с описанием на странице настроек `xDrip+ settings page <../Configuration/xdrip.html#identifiziere-empfanger>`_.

До настоящего времени, используя Libre 2 в качестве источника данных ГК, невозможно активировать «Включить SMB всегда» и «Включить SMB после углеводов» в алгоритме SMB. Значения BG Libre 2 недостаточно ровные, чтобы использовать их безопасно. Подробнее см. в `Выравнивание данных мониторинга <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md>`.

Опыт и устранение неполадок
==================================================

Способность к сопряжению исключительная. За исключением мобильных телефонов Huawei, все современные смартфоны, по-видимому, работают хорошо. The reconnect rate in case of connection loss is phenomenal. Связь может прерваться, если мобильный телефон находится в кармане напротив сенсора или на улице. Когда я работаю в саду, я ношу телефон на одной стороне тела с датчиком. В комнатах, где Bluettooth распространяется с отражениями, нет никаких проблем. Если возникают проблемы с подключением, проверьте другой телефон. It may also help to set the sensor with the internal BT antenna pointing down. The slit on the applicator must be pointing down when setting the sensor.

Технически, текущее значение сахара в крови передается на xDrip + каждую минуту. Фильтруется средневзвешенное сглаженное значение за последние 25 минут. Это обязательно для цикла. Кривые выглядят гладкими, и результаты работы цикла великолепны. Необработаные значения, на которых основаны оповещения, имеют несколько больший разборос, но в конечном счете соответствуют показателям ридера. Кроме того, необработанные значения могут отображаться на графике xDrip+ для того, чтобы имелась возможность своевременно реагировать на быстрые изменения. Переключитесь на Менее распространенные Настройки > Расширенные настройки для Libre2 > "показывать необработанные значения" и "показывать Информацию с сенсора". После этого "необработанные" значения будут дополнительно отображается в виде небольших белых точек и в меню системы будет доступна дополнительная информация о сенсоре.

The raw values are very helpfull when the blood sugar is moving fast. Even if the dots are more jumpy you would detect the tendence much better as using the smoothed line to make proper therapy decisions.

.. изображение:: ../images/fsl2pic8.jpg
  :alt: xDrip + дополнительные параметры Libre 2
  
.. изображение:: ../images/fsl2pic9.jpg
  :alt: xDrip+ главный экран с необработанными данными
  
Рабочее время сенсора фиксируется на 14 дней. 12 дополнительных часов Либре1 больше не существует. xDrip + показывает дополнительную информацию о сенсоре после включения дополнительных параметров для Libre2 > "show Sensors Infos" в системном меню, такую например, как время запуска сенсора. Оставшееся время работы сенсора можно также увидеть в модифицированном приложении LibreLink. Либо в главном окне в виде оставшихся дней работы, либо в виде времени начала работы датчика в трехточечных меню-> Справка-> Протокол событий в разделе "Новый датчик найден".

.. изображение:: ../images/fsl2pic10.jpg
  :alt: Libre 2 время запуска
  
В целом это одна из самых маленьких систем мониторинга ГК на рынке. Маленькая, не нуждается в трансмиттере, выдает очень точные значения без колебаний. После приблизительно 12 часов работы в фазе подстройки с отклонениями до 30 мг/дл, далее отклонения не превышают 10 мд/дл. Наилучшие результаты на внутренней части верха руки, другие места применяйте с осторожностью! Нет необходимости устанавливать новый сенсор заранее для привыкания. Это помешает внутреннему механизму выравнивания.

В ремя от времени случаются плохие сенсоры, у которых имеются расхождения с показаниями ГК. Они не изменяются. Их следует немедленно заменить.

Если датчик сдвинется немного на коже или каким-то образом поднимется это может привести к плохим результатам. Если нить сенсора немного вышла из ткани, это приведет к неверным результатам. Скорее всего вы увидите скачущие данные в xDrip +. Или к изменению значений ГК. В этом случае немедленно замените сенсор! Т.к. результаты неточны.

Замена сенсора происходит на лету: установите новый сенсор незадолго до активации. Как только xDrip + перестает получать больше данных от старого сенсора, запустите новый при помощи модифицированного приложения. Через час новые значения должны автоматически отображаться в xDrip+. 

В противном случае проверьте настройки телефона и перейдите к первоначальному запуску. У вас нет ограничения по времени. Постарайтесь найти правильные настройки. Нет необходимости сразу же менять сенсор пока не перепробованы разные комбинации. Датчики надежны, постарайтесь установить надежное соединение. Не торопитесь. В большинстве случаев вы можете случайно изменить один параметр, который вызывет новые проблемы. 

При успехе выберите "стоп сенсор" и "только удалить калибровки" в xDrip. xDrip + сможет понять, что новый сенсор получает данные об уровне сахара в крови, а старые калибровки больше не действительны и поэтому должны быть удалены. Никакого реального взаимодействия с сенсором Libre2 при этом не происходит!  Запускать сенсор в xDrip не требуется.

.. изображение:: ../images/fsl2pic11.jpg
  :alt: xDrip + пропущенные данные при замене сенсора Libre 2
  
You can calibrate the Libre2 with an offset of -40 - +20 mg/dL (intercept). The slope isnt changable as the Libre2 is much more accurate compared to the Libe1. Please check by fingerpricking early after setting a new sensor. It is know that there can arise big differences to the blood measurements. Для верности, калибруйте каждые 24-48 часов. Значения точны до конца срока работы сенсора и не имеют такого разброса как в Libre1. Однако, если сенсор и близко не показывает верные значения, это не изменится. В этом случае сенсор следует немедленно заменить.

Сенсоры Libre2 способны выполнять самопроверку для обнаружения неверных значений. Как только сенсор смещается на руке или слегка приподнимается, данные могут начать колебаться. После этого датчик Libre2 отключится по соображениям безопасности. К сожалению, при сканировании при помощи приложения, проводятся дополнительные проверки. Приложение может отключить сенсор, даже если он исправен. В настоящее время внутренние тесты слишком строги. Я полностью прекратил сканирование и с тех пор сбоев не было.

В других часовых поясах <../Usage/Timezone-traveling.html>`_ есть две стратегии для работы алгоритма: либо 

1. оставить время смартфона без изменений и сдвинуть базальный профиль (смартфон в режиме полета) или 
2. удалить историю помпы и изменить время смартфона на местное время. 

Метод 1. очень хорош, если вам не нужно тут же устанавливать новый датчик Libre2. При наличии сомнений выберите метод 2, особенно если поездка занимает больше времени. Если вы запускаете новый сенсор, часовой пояс должен быть установлен на автоматическую смену, поэтому метод 1. будет нарушен. Пожалуйста, проверьте это заранее, вы можете столкнуться с проблемами.

Помимо модифицированного приложения можно использовать новый передатчик Dropplet или (вскоре будет доступен) новый алгоритм OOP xDrip для получения значений ГК. MM2 и blucon пока не работают.

Step 5: Using bluetooth transmitter and OOP
==================================================

Bluetooth transmitter can be used with the Libre2. 

Please refer to the miaomiao website to find a description. This will also work with the Bubble devices.

Even if the patched LibreLink app approach is smart there may be some reasons to use a bluetooth tranmitter instead.

  - the BG readings are identical to the reader results
  - the Libre2 sensor can be used 14.5 days as with the Libre1 before 
  - 8 hours Backfilling is fully supported.

Remark: The transmitter can be used in parallel to the LibreLink app.
