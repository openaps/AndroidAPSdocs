# Настройки xDrip+

Если это еще не сделано, скачайте [xDrip+](https://github.com/NightscoutFoundation/xDrip)

Для передатчиков G6, изготовленных после осени/конца 2018 года, используйте одну из [последних версий ночных сборок xDrip+ ](https://github.com/NightscoutFoundation/xDrip/releases). У этих трансмиттеров новая прошивка и последняя стабильная версия xDrip+ (2019/01/10) с ней не работает.

**На данный момент возникают проблемы с ночными сборками после 2019/05/21, требующими калибровки G6.**

## Основные настройки для всех систем мониторинга

* Правильно вводите адрес локатора вашего сайта (URL) включая **S** в конце http**s**:// (не http://)
   
   напр. https://API_SECRET@imyavashegosaita.herokuapp.com/api/v1/
   
   -> Сэндвич-меню (левый верхний угол домашнего экрана) -> Настройки-> Загрузка в облако-> Синхронизация с Nightscout (REST-API) -> Базовый URL

* Отключите `Автоматическую Калибровку` Если отмечено поле `Автоматическая Калибровка`, одноразово активируйте `Данные загрузки`, а затем удалите флажок для `Автоматической Калибровки` и снова отключите `Скачать данные`, иначе ваши назначения (инсулин & углеводы) будут дважды добавлены в Nightscout.

* Нажмите на `Дополнительные опции`
* Отключите `Загружать назначения` и `Восполнять пропущенные данные`
* Опция `Оповещение о сбоях` также должна быть отключена. Иначе вы будете получать сигнал каждые 5 минут если wifi/мобильная сеть слабые или сервер недоступен.
   
   ![xDrip+ Basic Settings 1](../images/xDrip_Basic1.png)
   
   ![xDrip+ Basic Settings 2](../images/xDrip_Basic2.png)

* **Взаимодействие с приложениями (Inter-app settings)** (Трансляция) Для пользования AndroidAPS данные должны перенаправляться; вам следует активировать трансляцию xDrip+ в настройках Inter-App.

* Для того чтобы не было расхождений между приложениями, необходимо активировать `Отправлять отображаемое значение Гк`.
* Если вы также активировали `Принимать назначения (Accept treatments)` и трансляцию в AndroidAPS, то xDrip+ получит информацию об инсулине, углеводах и базальной скорости от AndroidAPS и сможет прогнозировать гипогликемию и т. д. более точно.
   
   ![xDrip+ Basic Settings 3](../images/xDrip_Basic3.png)

## xDrip+ & Dexcom G6

### Настройки для работы с Dexcom

* Откройте настройки отладки G5/G6 -> Сэндвич-Меню (сверху слева на домашнем экране) -> Настройки -> Настройки отладки G5/G6 ![Open xDrip+ Settings](../images/xDrip_Dexcom_SettingsCall.png)

* Активируйте следующие параметры
   
   * `Использовать коллектор OB1`
   * `Native Algorithm` (important if you want to use SMB)
   * `Поддержка G6`
   * `Разрешить разъединение OB1`
   * `Разрешить OB1 инициировать сопряжение`
* Все другие опции должны быть отключены
* Настройте уровень предупреждения о низком заряде батареи на 280 (внизу настроек отладки G5/G6)
   
   ![xDrip+ G5/G6 Debug Settings](../images/xDrip_Dexcom_DebugSettings.png)

### Профилактические перезапуски не рекомендуются

Автоматическое продление работы сенсоров Dexcom (`упреждающие перезапуски, preemtive restarts`) не рекомендуется, так как может привести к скачкам значений ГК на 9 день после перезапуска.

![xDrip+ Jump after Preemptive Restart](../images/xDrip_Dexcom_PreemptiveJump.png)

Применение G6 немного сложнее, чем казалось раньше. Для правильного применения необходимо иметь в виду следующие моменты:

* Если вы используете нативные данные с кодом калибровки в xDrip или Spike, в целях безопасности не следует разрешать упреждающий (preemptive) перезапуск датчика.
* Если все же упреждающие перезапуски необходимы, то они должны происходить в то время, когда есть возможность следить за изменениями и при необходимости калибровать. 
* Если вы перезапускаете сенсор, делайте это либо без заводской калибровки для безопасных результатов в дни 11 и 12, либо будьте готовы калибровать и следить за изменениями.
* "Предварительное погружение" (установка сенсора намного раньше его старта в приложении) G6 с заводской калибровкой приведет к отклонениям в данных. Если вы все же делаете "предварительное погружение", то для получения лучших результатов вам, вероятно, придется калибровать сенсор.
* Если вы не планируете отслеживать все возможные отклонения, то лучше вернуться к традиционному режиму калибровки и использовать систему как G5.

Подробнее о деталях и причинах этих рекомендаций читайте [полную статью](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) опубликованную в Tim Street на [www.diabettech.com](http://www.diabettech.com).

### Первое подключение трансмиттера G6

**Для второго и следующего трансмиттера смотрите [Продление срока работы трансмиттера](../Configuration/xdrip#extend-transmitter-life) ниже.**

* Для передатчиков G6, изготовленных после осени/конца 2018 года, используйте одну из [последних версий ночных сборок xDrip+ ](https://github.com/NightscoutFoundation/xDrip/releases). У этих трансмиттеров новая прошивка и последняя стабильная версия xDrip+ (2019/01/10) с ней не работает.
* Выключите оригинальный ресивер Dexcom (если используете).
* Удерживайте на главном экране xDrip+ иконку капли крови для активации кнопки `Мастер выбора источника ГК`.
* Использование Мастера выбора источника ГК обеспечивает настройки по умолчанию, включая OB1 & нативный режим 
   * Мастер позволит провести начальную настройку.
   * Вам понадобится серийный номер трансмиттера, если вы пользуетесь им впервые.

* Введите серийный номер нового трансмиттера (на упаковке трансмиттера или на его обратной стороне)
   
   ![xDrip+ Dexcom Transmitter Serial No](../images/xDrip_Dexcom_TransmitterSN.png)

* Вставьте новый сенсор (только при замене)

* Поместите трансмиттер в платформу сенсора
* Выполните Старт сенсора (только при замене) -> В нижней части экрана через несколько минут появится предупреждение о прогреве сенсора `Осталось x,x часов`. -> Если сообщение об оставшемся времени не появляется через несколько минут выполните остановку и новый запуск сенсора.
* Перезапустите коллектор (состояние системы - если не заменяете сенсор}
* Не включайте оригинальный ресивер Dexcom (если им пользуетесь) до появления первых данных в xDrip+.
* Удерживайте на главном экране xDrip+ иконку капли крови для активации кнопки `Мастер выбора источника ГК`.
   
   ![xDrip+ Dexcom Transmitter 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom Transmitter 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom Transmitter 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom Transmitter 4](../images/xDrip_Dexcom_Transmitter04.png)

### Состояние батареи трансмиттера

* Статус батареи может быть виден в окне состояния системы (сэндвич-меню вверху слева на главном экране)
* Сделайте свайп влево, чтобы увидеть второй экран. ![xDrip+ First Transmitter 4](../images/xDrip_Dexcom_Battery.png)

* Точные величины, когда наступает "смерть" трансмиттера из-за низкого заряда батареи, неизвестны. Следующая информация была размещена в сети после "смерти" трансмиттера: дней передачи: 151 напряжение A: 297 напряжение B: 260 Сопротивление: 2391

### Увеличение срока работы трансмиттера

* Переключитесь в `инженерный режим`: 
   * нажмите на пиктограмму шприца на главном экране xDrip+ справа
   * затем нажмите на значок микрофона в нижнем правом углу
   * В открывшемся текстовом окне впечатайте "включить инженерный режим" 
   * нажмите "Готово"
   * If Google Speak engine is enabled, you can also speak the voice command: "enable engineering mode". 
* Go to the G5 debug settings and check `OB1 collector`.
* Use the voice command: “hard reset transmitter”
* The voice command will be executed with the next data receipt of the transmitter
* Look at the system status (Hamburger menu -> system status) and see what happens

### Replace transmitter

Для передатчиков G6, изготовленных после осени/конца 2018 года, используйте одну из [последних версий ночных сборок xDrip+ ](https://github.com/NightscoutFoundation/xDrip/releases). У этих трансмиттеров новая прошивка и последняя стабильная версия xDrip+ (2019/01/10) с ней не работает.

* Выключите оригинальный ресивер Dexcom (если используете).
* Stop sensor (only if replacing sensor)
   
   Ensure it really is stopped:
   
   On the second "G5/G6 Status" screen look at `Queue Items` about half way down - It may say something like `(1) Stop Sensor`
   
   Wait until this goes - usually within a few minutes.
   
   -> To remove transmitter without stopping sensor see this video <https://youtu.be/AAhBVsc6NZo>.
   
   ![xDrip+ Stop Dexcom Sensor 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Stop Dexcom Sensor 2](../images/xDrip_Dexcom_StopSensor2.png)

* Forget device (in system status)
   
   ![xDrip+ Forget Device](../images/xDrip_Dexcom_ForgetDevice.png)

* Forget device in smartphone’s BT settings (Will be shown as DexcomXX whereas XX are the last two digits of the transmitter serial no.)

* Remove transmitter (and sensor if replacing sensor)
* Удерживайте на главном экране xDrip+ иконку капли крови для активации кнопки `Мастер выбора источника ГК`.
* Использование Мастера выбора источника ГК обеспечивает настройки по умолчанию, включая OB1 & нативный режим 
   * Мастер позволит провести начальную настройку.
   * You will need your transmitter serial number if this is the first time you've used it.
* Put in serial number of new transmitter.
* Insert new sensor (only if replacing).
* Поместите трансмиттер в платформу сенсора
* Start sensor (only if replacing)
   
   **It is recommended to wait approx. 15 minutes between stopping and starting the new sensor (until `Sensor Status: Stopped` is shown on second system status screen).**

* Перезапустите коллектор (состояние системы - если не заменяете сенсор}

* Не включайте оригинальный ресивер Dexcom (если им пользуетесь) до появления первых данных в xDrip+.
* Удерживайте на главном экране xDrip+ иконку капли крови для активации кнопки `Мастер выбора источника ГК`.
   
   ![xDrip+ Dexcom Transmitter 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom Transmitter 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom Transmitter 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom Transmitter 4](../images/xDrip_Dexcom_Transmitter04.png)

### New Sensor

* Выключите оригинальный ресивер Dexcom (если используете).
* Stop sensor if necessary
   
   Ensure it really is stopped:
   
   On the second "G5/G6 Status" screen look at `Queue Items` about half way down - It may say something like `(1) Stop Sensor`
   
   Wait until this goes - usually within a few minutes.
   
   ![xDrip+ Stop Dexcom Sensor 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Stop Dexcom Sensor 2](../images/xDrip_Dexcom_StopSensor2.png)

* Clean contacts (transmitter backside) with alcohol and let air-dry.

* In case you use this function disable `Restart Sensor` and `Preemptive restarts` (Hamburger menu -> Settings -> G5/G6 Debug Settings). If you miss this step and have these functions enabled the new sensor will not start properly.
   
   ![xDrip+ Preemptive Restart](../images/xDrip_Dexcom_Restart.png)

* Start Sensor
   
   **It is recommended to wait approx. 15 minutes between stopping and starting the new sensor (until `Sensor Status: Stopped` is shown on second system status screen).**

* Set time inserted
   
   * To use G6 Native mode you must wait for the 2 hour warm up (i.e insertion time is now).
   * If you are using the xDrip+ algorithm then you can set a time more than 2 hours ago to avoid warm up. Readings may be very erratic. Therefore this is not recommended.
* Enter Sensor code (on the peel-off foil of the sensor) 
   * Keep code for further reference (i.e. new start after transmitter had to be removed)
   * Code can also be found in [xDrip+ logs](../Configuration/xdrip#retrieve-sensor-code): Click 3-dots-menu on xDrip+ homescreen and choose `View Event Logs`.
* No calibration is needed if you use G6 in "native mode". xDrip+ will show readings automatically after 2 hour warm-up.
* Do not turn original Dexcom Receiver (if used) back on before xDrip+ shows first readings.
   
   ![xDrip+ Start Dexcom Sensor 1](../images/xDrip_Dexcom_SensorStart01.png)
   
   ![xDrip+ Start Dexcom Sensor 2](../images/xDrip_Dexcom_SensorStart02.png)

### Retrieve sensor code

* In latest nightly builds the sensor code is shown in system status (Hamburger menu top left on homescreen).
* Swipe left once to see second screen.
   
   ![xDrip+ Retrieve Dexcom Sensor Code2](../images/xDrip_Dexcom_SensorCode2.png)

* Dexcom sensor code can also be found in xDrip+ logs.

* Tap 3 dot menu (top right side on homescreen)
* Select `View Event Logs` and search for "code"
   
   ![xDrip+ Retrieve Dexcom Sensor Code](../images/xDrip_Dexcom_SensorCode.png)

## xDrip+ & Freestyle Libre

### Libre specific settings

* Open Bluetooth Settings -> Hamburger Menu (top left of homescreen) -> Settings -> scroll down -> Less common settings -> Bluetooth Settings
   
   ![xDrip+ Libre Bluetooth Settings 1](../images/xDrip_Libre_BTSettings1.png)

* Активируйте следующие параметры
   
   * `Turn Bluetooth on` 
   * `Use scanning`
   * `Always discover services`

* Все другие опции должны быть отключены
   
   ![xDrip+ Libre Bluetooth Settings 2](../images/xDrip_Libre_BTSettings2.png)

### Connect Libre Transmitter & start sensor

![xDrip+ Start Libre Transmitter & Sensor 1](../images/xDrip_Libre_Transmitter01.png)

![xDrip+ Start Libre Transmitter & Sensor 2](../images/xDrip_Libre_Transmitter02.png)

![xDrip+ Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)