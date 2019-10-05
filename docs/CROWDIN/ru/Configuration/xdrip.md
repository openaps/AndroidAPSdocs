# Настройки xDrip+

Если это еще не сделано, скачайте [xDrip+](https://github.com/NightscoutFoundation/xDrip)

Для передатчиков G6, изготовленных после осени/конца 2018 года (серийный номер которых начинается с 80 или 81), убедитесь, что вы используете версией не ранее чем [мастер от 2019/05/18](https://jamorham.github.io/#xdrip-plus).

Если серийный номер трансмиттера Dexcom G6 начинается с 8G... пользуйтесь [ночной сборкой от 2019/07/28 или позже](https://github.com/NightscoutFoundation/xDrip/releases).

## Основные настройки для всех систем мониторинга

* Правильно вводите адрес локатора вашего сайта (URL) включая **S** в конце http**s**:// (не http://)
   
   напр. https://API_SECRET@imyavashegosaita.herokuapp.com/api/v1/
   
   -> Сэндвич-меню (левый верхний угол домашнего экрана) -> Настройки-> Загрузка в облако-> Синхронизация с Nightscout (REST-API) -> Базовый URL

* Отключите `Автоматическую Калибровку` Если отмечено поле `Автоматическая Калибровка`, одноразово активируйте `Данные загрузки`, а затем удалите флажок для `Автоматической Калибровки` и снова отключите `Скачать данные`, иначе ваши назначения (инсулин & углеводы) будут дважды добавлены в Nightscout.

* Нажмите на `Дополнительные опции`
* Отключите `Загружать назначения` и `Восполнять пропущенные данные`
* Опция `Оповещение о сбоях` также должна быть отключена. Иначе вы будете получать сигнал каждые 5 минут если wifi/мобильная сеть слабые или сервер недоступен.
   
   ![основные настройки xDrip+ 1](../images/xDrip_Basic1.png)
   
   ![основные настройки xDrip+ 2](../images/xDrip_Basic2.png)

* **Взаимодействие с приложениями (Inter-app settings)** (Трансляция) Для пользования AndroidAPS данные должны перенаправляться; вам следует активировать трансляцию xDrip+ в настройках Inter-App.

* Для того чтобы не было расхождений между приложениями, необходимо активировать `Отправлять отображаемое значение Гк`.
* Если вы также активировали `Принимать назначения (Accept treatments)` и трансляцию в AndroidAPS, то xDrip+ получит информацию об инсулине, углеводах и базальной скорости от AndroidAPS и сможет прогнозировать гипогликемию и т. д. более точно.
   
   ![основные настройки xDrip+ 3](../images/xDrip_Basic3.png)

### Identify receiver

* У некоторых пользователей обнаружились проблемы с локальной трансляцией (AAPS не получает данные от xDrip+) в режиме авиаперелета. Перейдите в Настройки xdrip+ > Inter-app settings > Identify receiver и введите `info.nightscout.androidaps`.
   
   ![xDrip+ Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

## xDrip+ & Dexcom G6

### Версия xDrip+ в зависимости от серии трансмиттера G6.

Для трансмиттеров G6, изготовленных после осени/конца 2018 года (серийный номер которых начинается с 80 или 81), убедитесь, что вы используете версией не ранее чем [мастер от 2019/05/18](https://jamorham.github.io/#xdrip-plus).

Если серийный номер трансмиттера Dexcom G6 начинается с 8G... пользуйтесь [ночной сборкой от 2019/07/28 или позже](https://github.com/NightscoutFoundation/xDrip/releases).

### Настройки для работы с Dexcom

* Open G5/G6 Debug Settings -> Hamburger Menu (top left of homescreen) -> Settings -> G5/G6 Debug Settings ![Open xDrip+ Settings](../images/xDrip_Dexcom_SettingsCall.png)

* Enable the following settings
   
   * `Use the OB1 Collector`
   * `Native Algorithm` (important if you want to use SMB)
   * `G6 support`
   * `Allow OB1 unbonding`
   * `Allow OB1 initiate bonding`
* All other options should be disabled
* Adjust battery warning level to 280 (bottom of G5/G6 Debug Settings)
   
   ![xDrip+ G5/G6 Debug Settings](../images/xDrip_Dexcom_DebugSettings.png)

### Preemptive restarts not recommended

**В трансмиттерах Dexcom с серийным номером начинающимся с 8G упреждающий перезапуск не работает и может повредить сенсор!**

Автоматическое продление работы сенсоров Dexcom (`упреждающие перезапуски, preemtive restarts`) не рекомендуется, так как может привести к скачкам значений ГК на 9 день после перезапуска.

![xDrip+ после упреждающего перезапуска](../images/xDrip_Dexcom_PreemptiveJump.png)

Применение G6 немного сложнее, чем казалось раньше. Для правильного применения необходимо иметь в виду следующие моменты:

* If you are using the native data with the calibration code in xDrip+ or Spike, the safest thing to do is not allow preemptive restarts of the sensor.
* If you must use preemptive restarts, then make sure you insert at a time of day where you can observe the change and calibrate if necessary. 
* If you are restarting sensors, either do it without the factory calibration for safest results on days 11 and 12, or ensure you are ready to calibrate and keep an eye on variation.
* Pre-soaking of the G6 with factory calibration is likely to give variation in results. Если вы все же делаете "предварительное погружение", то для получения лучших результатов вам, вероятно, придется калибровать сенсор.
* If you aren’t being observant about the changes that may be taking place, it may be better to revert to non-factory-calibrated mode and use the system like a G5.

Подробнее о деталях и причинах этих рекомендаций читайте [полную статью](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) Tim Street на [www.diabettech.com](http://www.diabettech.com).

### Connect G6 transmitter for the first time

**Для второго и следующих трансмиттеров смотрите [Продление срока работы трансмиттера](../Configuration/xdrip#extend-transmitter-life) ниже.**

Для передатчиков G6, изготовленных после осени/конца 2018 года (серийный номер которых начинается с 80 или 81), убедитесь, что вы используете версией не ранее чем [мастер от 2019/05/18](https://jamorham.github.io/#xdrip-plus).

Если серийный номер трансмиттера Dexcom G6 начинается с 8G... пользуйтесь [ночной сборкой от 2019/07/28 или позже](https://github.com/NightscoutFoundation/xDrip/releases).

* Выключите оригинальный ресивер Dexcom (если используете).
* Long press the red xDrip+ blood drop icon on the main screen to enable the `Source Wizard Button`.
* Use the Source Wizard Button which ensures default settings including OB1 & Native Mode 
   * This guides you through the initial set up.
   * you will need your transmitter serial number if this is the first time you've used it.

* Put in serial number of new transmitter (on the transmitter packaging or on the back of the transmitter). Be careful not to confuse 0 (zero) and O (capital letter o).
   
   ![xDrip+ Dexcom Transmitter Serial No](../images/xDrip_Dexcom_TransmitterSN.png)

* Insert new sensor (only if replacing)

* Put transmitter into sensor
* **Wait 15 minutes** before starting sensor so xDrip can initialize communication with the new transmitter
* Start sensor (only if replacing)
   
   -> Near the bottom of the screen `Warm Up x,x hours left` must be displayed after a few minutes.

-> Если серийный номер трансмиттера не начинается с 8G и в течение нескольких минут не появляется никаких указаний о времени прогрева сенсора остановите и перезапустите сенсор.

* Restart collector (system status - if not replacing sensor}
* Do not turn original Dexcom receiver (if used) back on before xDrip+ shows first readings.
* Long press the red xDrip+ blood drop icon on the main screen to disable the `Source Wizard Button`.
   
   ![xDrip+ Dexcom Transmitter 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom Transmitter 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom Transmitter 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom Transmitter 4](../images/xDrip_Dexcom_Transmitter04.png)

### Transmitter battery status

* Battery status can be controlled in system status (Hamburger menu top left on homescreen)
* Swipe left once to see second screen. ![xDrip+ First Transmitter 4](../images/xDrip_Dexcom_Battery.png)

* The exact values when the transmitter “dies” due to empty battery are not known. The following information was posted online after the transmitter “died”: Transmitter days: 151 Voltage A: 297 Voltage B: 260 Resistance: 2391

### Extend transmitter life

* So far life cannot be extended for transmitters whos serial no. starts with 8G.
* To prevent difficulties starting sensors it is highly recommended to extend transmitter life before day 100 of first usage.
* Running sensor session will be stopped when extending transmitter life. So extend before sensor change or be aware that there will be a new 2 h warm-up phase.
* Switch to the `engineering mode`: 
   * tap on the character on the right of the xDrip+ start screen that represents a syringe
   * then tap on the microphone icon in the lower right corner
   * In the text box that opens type "enable engineering mode" 
   * click "Done"
   * If Google Speak engine is enabled, you can also speak the voice command: "enable engineering mode". 
* Go to the G5 debug settings and check `OB1 collector`.
* Use the voice command: “hard reset transmitter”
* The voice command will be executed with the next data receipt of the transmitter
* Look at the system status (Hamburger menu -> system status) and see what happens
* If you see a message "Phone Service State: Hard Reset maybe failed" on second system status screen just start the sensor and this message should go away.
   
   ![xDrip+ Hard Reset maybe failed](../images/xDrip_HardResetMaybeFailed.png)

* Transmitter days will be set to 0 after successful extension and start of sensor.

### Replace transmitter

Для передатчиков G6, изготовленных после осени/конца 2018 года (серийный номер которых начинается с 80 или 81), убедитесь, что вы используете версией не ранее чем [мастер от 2019/05/18](https://jamorham.github.io/#xdrip-plus).

Если серийный номер трансмиттера Dexcom G6 начинается с 8G... пользуйтесь [ночной сборкой от 2019/07/28 или позже](https://github.com/NightscoutFoundation/xDrip/releases).

* Выключите оригинальный ресивер Dexcom (если используете).
* Stop sensor (only if replacing sensor)
   
   Убедитесь, что он действительно остановлен:
   
   На следующем экране "G5/G6 Status" найдите `Queue Items` (`Элементы в очереди`) на полпути вниз - там появится что-то вроде "Остановить Сенсор"
   
   Подождите, пока это происходит - обычно в течение нескольких минут.
   
   -> To remove transmitter without stopping sensor see this video <https://youtu.be/AAhBVsc6NZo>.
   
   ![xDrip+ Stop Dexcom Sensor 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Stop Dexcom Sensor 2](../images/xDrip_Dexcom_StopSensor2.png)

* Forget device (in system status)
   
   ![xDrip+ Forget Device](../images/xDrip_Dexcom_ForgetDevice.png)

* Forget device in smartphone’s BT settings (Will be shown as Dexcom?? whereas ?? are the last two digits of the transmitter serial no.)

* Remove transmitter (and sensor if replacing sensor)
* Long press the red xDrip+ blood drop icon on the main screen to enable the `Source Wizard Button`.
* Use the Source Wizard Button which ensures default settings including OB1 & Native Mode 
   * This guides you through the initial set up.
   * You will need your transmitter serial number if this is the first time you've used it.
* Put in serial number of new transmitter. Be careful not to confuse 0 (zero) and O (capital letter o).
* Insert new sensor (only if replacing).
* Put transmitter into sensor
* Start sensor (only if replacing)
   
   **It is recommended to wait approx. 15 minutes between stopping and starting the new sensor (until `Sensor Status: Stopped` is shown on second system status screen).**

* Restart collector (system status - if not replacing sensor}

* Do not turn original Dexcom receiver (if used) back on before xDrip+ shows first readings.
* Long press the red xDrip+ blood drop icon on the main screen to disable the `Source Wizard Button`.
   
   ![xDrip+ Dexcom Transmitter 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom Transmitter 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom Transmitter 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom Transmitter 4](../images/xDrip_Dexcom_Transmitter04.png)

### New Sensor

* Выключите оригинальный ресивер Dexcom (если используете).
* Stop sensor if necessary
   
   Убедитесь, что он действительно остановлен:
   
   На следующем экране "G5/G6 Status" найдите `Queue Items` (`Элементы в очереди`) на полпути вниз - там появится что-то вроде "Остановить Сенсор"
   
   Подождите, пока это происходит - обычно в течение нескольких минут.
   
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

* In master dated 2019/05/18 and the latest nightly builds the sensor code is shown in system status (Hamburger menu top left on homescreen).
* Swipe left once to see second screen.
   
   ![xDrip+ Retrieve Dexcom Sensor Code2](../images/xDrip_Dexcom_SensorCode2.png)

* Dexcom sensor code can also be found in xDrip+ logs.

* Tap 3 dot menu (top right side on homescreen)
* Select `View Event Logs` and search for "code"
   
   ![xDrip+ Retrieve Dexcom Sensor Code](../images/xDrip_Dexcom_SensorCode.png)

## Устранение неполадок Dexcom G6 и xDrip+

### Problem connecting transmitter

* Transmitter must be shown in your smartphone's bluetooth settings.
* Transmitter will be shown as Dexcom?? whereas ?? represent the last two digits of your transmitter serial no. (i.e. DexcomHY).
* Open system status in xDrip+ (hamburger menue on top left side of home screen).
* Check if your transmitter is shown on first status page ('classic status page').
* If not: Delete device from your smartphone's bluetooth settings and restart collector.
* Wait about 5 min. until Dexcom transmitter reconnects automatically.

### Problem when starting new sensor

* Native sensor is marked as "FAILED: Sensor Failed Start"
* Остановить сенсор
* Restart your phone
* Start sensor with code 0000 (four times zero)
* Wait 15 minutes
* Остановить сенсор
* Start sensor with "real" code (printed on the adhesive protector)

Проверьте журнал xDrip+, начинает ли xDrip+ отсчет "Продолжительность:: 1 минута" (и так далее). Только в журналах xdrip+ вы можете обнаружить на раннем этапе, остановлен ли сенсор. Более поздний статус не всегда отображается правильно внизу главного экрана.

## xDrip+ & Libre Freestyle

### Libre specific settings

* Open Bluetooth Settings -> Hamburger Menu (top left of homescreen) -> Settings -> scroll down -> Less common settings -> Bluetooth Settings
   
   ![xDrip+ Libre Bluetooth Settings 1](../images/xDrip_Libre_BTSettings1.png)

* Enable the following settings
   
   * `Turn Bluetooth on` 
   * `Use scanning`
   * `Always discover services`

* All other options should be disabled
   
   ![xDrip+ Libre Bluetooth Settings 2](../images/xDrip_Libre_BTSettings2.png)

### Connect Libre Transmitter & start sensor

![xDrip+ запуск трансмиттера Libre & Сенсор 1](../images/xDrip_Libre_Transmitter01.png)

![xDrip+ запуск трансмиттера Libre & Сенсор 2](../images/xDrip_Libre_Transmitter02.png)

![xDrip+ запуск трансмиттера Libre & Сенсор 3](../images/xDrip_Libre_Transmitter03.png)