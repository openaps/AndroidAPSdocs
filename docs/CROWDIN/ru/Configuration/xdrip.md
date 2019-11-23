# Настройки xDrip+

Если это еще не сделано, скачайте [xDrip+](https://github.com/NightscoutFoundation/xDrip)

Для передатчиков G6, изготовленных после осени/конца 2018 года (серийный номер которых начинается с 80 или 81), убедитесь, что вы используете версией не ранее чем [мастер от 2019/05/18](https://jamorham.github.io/#xdrip-plus).

Если серийный номер трансмиттера Dexcom G6 начинается с 8G... или 8H... используйте одну из новейших [ночных сборок](https://github.com/NightscoutFoundation/xDrip/releases).

## Основные настройки для всех систем мониторинга

* Правильно вводите адрес локатора вашего сайта (URL) включая **S** в конце http**s**:// (не http://)
   
   напр. https://API_SECRET@imyavashegosaita.herokuapp.com/api/v1/
   
   -> Сэндвич-меню (левый верхний угол домашнего экрана) -> Настройки-> Загрузка в облако-> Синхронизация с Nightscout (REST-API) -> Базовый URL

* Отключите `Автоматическую Калибровку` Если отмечено поле `Автоматическая Калибровка`, одноразово активируйте `Данные загрузки`, а затем удалите флажок для `Автоматической Калибровки` и снова отключите `Скачать данные`, иначе ваши назначения (инсулин & углеводы) будут дважды добавлены в Nightscout.

* Нажмите на `Дополнительные опции`

* Отключите `Загружать назначения` и `Восполнять пропущенные данные`.
   
   **Предупреждение безопасности: Следует деактивировать "Загружать лечение/назначения" с xDrip, иначе в AAPS эти величины удвоятся, что приведет к неверному количеству активных углеводов COB и активного инсулина IOB.**

* Опция `Оповещение о сбоях` также должна быть отключена. Иначе вы будете получать сигнал каждые 5 минут если wifi/мобильная сеть слабые или сервер недоступен.
   
   ![основные настройки xDrip+ 1](../images/xDrip_Basic1.png)
   
   ![основные настройки xDrip+ 2](../images/xDrip_Basic2.png)

* **Взаимодействие с приложениями (Inter-app settings)** (Трансляция) Для пользования AndroidAPS данные должны перенаправляться; вам следует активировать трансляцию xDrip+ в настройках Inter-App.

* Для того чтобы не было расхождений между приложениями, необходимо активировать `Отправлять отображаемое значение ГК`.

* Если вы также активировали `Принимать назначения (Accept treatments)` и трансляцию в AndroidAPS, то xDrip+ получит информацию об инсулине, углеводах и базальной скорости от AndroidAPS и сможет прогнозировать гипогликемию и т. д. более точно.
   
   ![основные настройки xDrip+ 3](../images/xDrip_Basic3.png)

### Идентификатор ресивера

* У некоторых пользователей обнаружились проблемы с локальной трансляцией (AAPS не получает данные от xDrip+) в режиме авиаперелета. Перейдите в Настройки xdrip+ > Inter-app settings > Identify receiver и введите `info.nightscout.androidaps`.
* Внимание: Автокоррекция, как правило, меняет i на прописную букву. **Необходимо использовать только строчные буквы ** при вводе ` info.nightscout.androidaps `. Прописная I не позволит AAPS получать данные ГК из xDrip.
   
   ![xDrip+ Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

## xDrip+ & Dexcom G6

* Трансмиттер Dexcom G6 может одновременно подключаться к ресиверу Dexcom (или к помпе T:slim) и одному приложению на вашем телефоне.
* При использовании xDrip+ в качестве приемника сначала удалите приложение Dexcom. **Невозможно одновременно подключить к трансмиттеру приложения xDrip+ и Dexcom!**
* Если вам нужен функционал оригинального приложения Clarity и оповещения от xDrip +, пользуйтесь [модифицированным приложением Dexcom ](../Hardware/DexcomG6#if-using-g6-with-patched-dexcom-app) с локальной передачей данных в xDrip +.

### Версия xDrip+ в зависимости от серии трансмиттера G6.

* Для передатчиков G6, изготовленных после осени/конца 2018 года (серийный номер которых начинается с 80 или 81), убедитесь, что вы используете версией не ранее чем [мастер от 2019/05/18](https://jamorham.github.io/#xdrip-plus). 
* Если серийный номер трансмиттера Dexcom G6 начиная с 8G и 8Н попробуйте [ночные сборки от 2019/07/28 или позднее](https://github.com/NightscoutFoundation/xDrip/releases).

### Настройки для работы с Dexcom

* Откройте настройки отладки G5/G6 -> Сэндвич-Меню (сверху слева на домашнем экране) -> Настройки -> Настройки отладки G5/G6 ![Откройте настройки xDrip+](../images/xDrip_Dexcom_SettingsCall.png)

* Активируйте следующие параметры
   
   * `Использовать коллектор OB1`
   * `Нативный Алгоритм` (важно, если вы хотите использовать супер микроболюс SMB)
   * `Поддержка G6`
   * `Разрешить разъединение OB1`
   * `Разрешить OB1 инициировать сопряжение`
* Все другие опции должны быть отключены
* Настройте уровень предупреждения о низком заряде батареи на 280 (внизу настроек отладки G5/G6)
   
   ![настройки отладки xDrip+ G5/G6](../images/xDrip_Dexcom_DebugSettings.png)

### Упреждающие перезапуски не рекомендуются

**В трансмиттерах Dexcom с серийным номером начинается с 8G или 8H, упреждающие перезапуски не работают и могут полностью убить сенсор!**

Автоматическое продление работы сенсоров Dexcom (`упреждающие перезапуски, preemtive restarts`) не рекомендуется, так как может привести к скачкам значений ГК на 9 день после перезапуска.

![xDrip+ после превентивного перезапуска](../images/xDrip_Dexcom_PreemptiveJump.png)

Применение G6 немного сложнее, чем казалось раньше. Для правильного применения необходимо иметь в виду следующие моменты:

* Если вы используете нативные данные с кодом калибровки в xDrip или Spike, в целях безопасности не следует разрешать упреждающий (preemptive) перезапуск датчика.
* Если все же упреждающие перезапуски необходимы, то убедитесь, что вы делаете это в то время, когда можете следить за изменениями и калибровать при потребности. 
* Если вы перезапускаете сенсор, делайте это либо без заводской калибровки для безопасных результатов в дни 11 и 12, либо будьте готовы калибровать и следить за изменениями.
* "Предварительное погружение" (установка сенсора намного раньше его старта в приложении) G6 с заводской калибровкой приведет к отклонениям в данных. Если вы все же делаете "предварительное погружение", то для получения лучших результатов вам, вероятно, придется калибровать сенсор.
* Если вы не планируете отслеживать все возможные изменения, то лучше вернуться к традиционному режиму калибровки и использовать систему, как G5.

Подробнее о деталях и причинах этих рекомендаций читайте [полную статью](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) опубликованную в Tim Street на [www.diabettech.com](http://www.diabettech.com).

### Первое подключение трансмиттера G6

**Для второго и следующего трансмиттера смотрите [Продление срока работы трансмиттера](../Configuration/xdrip#extend-transmitter-life) ниже.**

Для передатчиков G6, изготовленных после осени/конца 2018 года (серийный номер которых начинается с 80 или 81), убедитесь, что вы используете версией не ранее чем [мастер от 2019/05/18](https://jamorham.github.io/#xdrip-plus).

Если серийный номер трансмиттера Dexcom G6 начиная с 8G и 8Н попробуйте [ночные сборки от 2019/07/28 или позднее](https://github.com/NightscoutFoundation/xDrip/releases).

* Выключите оригинальный ресивер Dexcom (если используете).
* Удерживайте на главном экране xDrip+ иконку капли крови для активации кнопки `Мастер выбора источника ГК`.
* Использование Мастера выбора источника ГК обеспечивает настройки по умолчанию, включая OB1 & нативный режим 
   * Мастер позволит провести начальную настройку.
   * Вам понадобится серийный номер трансмиттера, если вы пользуетесь им впервые.

* Введите серийный номер нового трансмиттера (на упаковке трансмиттера или на его обратной стороне). Будьте внимательны и не перепутайте 0 (ноль) и O (заглавная буква o).
   
   ![серийный № трансмиттера Dexcom](../images/xDrip_Dexcom_TransmitterSN.png)

* Вставьте новый сенсор (только при замене)

* Поместите трансмиттер в платформу сенсора
* Не запускайте новый сенсор прежде чем на классической странице состояния не появится следующая информация Страница-> Состояние G5/G6-> PhoneServiceState:
   
   * С трансмиттерами, серийный номер которых начинается с 80 или 81: "Got data hh:mm" (напр. "Got data 19:04 ")
   * С трансмиттерами, серийный номер которых начинается с 8G или 8H: "Got glucose hh:mm" (напр. "Got glucose 19:04 ") или "Got no raw hh:mm" (i.e. "Got no raw 19:04")
   
   ![xDrip PhoneServiceState](../images/xDrip_Dexcom_PhoneServiceState.png)

* Нажмите старт сенсора (только при смене сенсора)
   
   -> В нижней части экрана через несколько минут появится предупреждение о прогреве сенсора `Осталось x,x часов`.

-> Если серийный номер трансмиттера не начинается с 8G и в течение нескольких минут не появляется никаких указаний о времени прогрева сенсора остановите и перезапустите сенсор.

* Перезапустите коллектор (состояние системы - если не заменяете сенсор}
* Не включайте оригинальный ресивер Dexcom (если им пользуетесь) до появления первых данных в xDrip+.
* Удерживайте на главном экране xDrip+ иконку капли крови для активации кнопки `Мастер выбора источника ГК`.
   
   ![xDrip+ трансмиттер Dexcom 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ трансмиттер Dexcom 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ трансмиттер Dexcom 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ трансмиттер Dexcom 4](../images/xDrip_Dexcom_Transmitter04.png)

### Состояние батареи трансмиттера

* Статус батареи может быть виден в окне состояния системы (сэндвич-меню вверху слева на главном экране)
* Swipe left once to see second screen. ![xDrip+ первый трансмиттер 4](../images/xDrip_Dexcom_Battery.png)

* The exact values when the transmitter “dies” due to empty battery are not known. The following information was posted online after the transmitter “died”:
   
   * Posting 1: Transmitter days: 151 / Voltage A: 297 / Voltage B: 260 / Resistance: 2391
   * Posting 2: Transmitter days: 249 / Voltage A: 275 (at time of failure)

### Увеличение срока работы трансмиттера

* So far life cannot be extended for transmitters whos serial no. starts with 8G or 8H.
* To prevent difficulties starting sensors it is highly recommended to extend transmitter life before day 100 of first usage.
* Running sensor session will be stopped when extending transmitter life. So, extend before sensor change or be aware that there will be a new 2 h warm-up phase.
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
   
   ![xDrip+ Hard Reset maybe failed](../images/xDrip_HardResetMabeFailed.png)

* Transmitter days will be set to 0 after successful extension and start of sensor.

### Замена трансмиттера

Для передатчиков G6, изготовленных после осени/конца 2018 года (серийный номер которых начинается с 80 или 81), убедитесь, что вы используете версией не ранее чем [мастер от 2019/05/18](https://jamorham.github.io/#xdrip-plus).

Если серийный номер трансмиттера Dexcom G6 is starting with 8G or 8H use one of the [latest nightly builds](https://github.com/NightscoutFoundation/xDrip/releases).

* Выключите оригинальный ресивер Dexcom (если используете).
* Stop sensor (only if replacing sensor)
   
   Ensure it really is stopped:
   
   On the second "G5/G6 Status" screen look at `Queue Items` about halfway down - It may say something like `(1) Stop Sensor`
   
   Wait until this goes - usually within a few minutes. Sensor Status must be "Stopped" (see screenshot).
   
   -> To remove transmitter without stopping sensor see this video <https://youtu.be/AAhBVsc6NZo>.
   
   ![xDrip+ Stop Dexcom Sensor 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Stop Dexcom Sensor 2](../images/xDrip_Dexcom_StopSensor2.png)

* Forget device in xDrip system status AND in smartphone’s BT settings (Will be shown as Dexcom?? whereas ?? are the last two digits of the transmitter serial no.)
   
   ![xDrip+ Forget Device](../images/xDrip_Dexcom_ForgetDevice.png)

* Remove transmitter (and sensor if replacing sensor)

* Put the old transmitter far away to prevent reconnection. A microwave is a perfect Faraday shield for this - but unplug power cord to be 100% no one is turning the microwave on.
* Удерживайте на главном экране xDrip+ иконку капли крови для активации кнопки `Мастер выбора источника ГК`.
* Использование Мастера выбора источника ГК обеспечивает настройки по умолчанию, включая OB1 & нативный режим 
   * Мастер позволит провести начальную настройку.
   * You will need your transmitter serial number if this is the first time you've used it.
* Put in serial number of new transmitter. Будьте внимательны и не перепутайте 0 (ноль) и O (заглавная буква o).
* Insert new sensor (only if replacing).
* Put transmitter into sensor - **Do not start sensor immediately!**
* New "Firefly Transmitters" (serial no. starting with 8G or 8H) can only be used in native mode.
* The following options must not be activated for new "Firefly Transmitters" (serial no. starting with 8G or 8H):
   
   * Preemptive Restart (disable!)
   * Restart sensor (disable!)
   * Fallback to xDrip (disable!)
   
   ![Параметры для трансмиттеров "Firefly"](../images/xDrip_Dexcom_FireflySettings.png)

* Check in Classic Status Page -> G5/G6 status -> PhoneServiceState if one of the following informations is displayed:
   
   * С трансмиттерами, серийный номер которых начинается с 80 или 81: "Got data hh:mm" (напр. "Got data 19:04 ")
   * С трансмиттерами, серийный номер которых начинается с 8G или 8H: "Got glucose hh:mm" (напр. "Got glucose 19:04 ") или "Got no raw hh:mm" (i.e. "Got no raw 19:04")
   
   ![xDrip PhoneServiceState](../images/xDrip_Dexcom_PhoneServiceState.png)

* Wait 15 minutes as the transmitter should communicate several times with xDrip before new sensor is started. Battery data will be shown below Firmware information.
   
   ![Firefly transmitter battery data](../images/xDrip_Dexcom_Battery.png)

* Start sensor and DO NOT BACKDATE! Always select "Yes, today"!

* Restart collector (system status - if not replacing sensor)
* Не включайте оригинальный ресивер Dexcom (если им пользуетесь) до появления первых данных в xDrip+.
* Удерживайте на главном экране xDrip+ иконку капли крови для активации кнопки `Мастер выбора источника ГК`.
   
   ![xDrip+ трансмиттер Dexcom 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ трансмиттер Dexcom 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ трансмиттер Dexcom 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ трансмиттер Dexcom 4](../images/xDrip_Dexcom_Transmitter04.png)

### Новый сенсор

* Выключите оригинальный ресивер Dexcom (если используете).
* Stop sensor if necessary
   
   Ensure it really is stopped:
   
   On the second "G5/G6 Status" screen look at `Queue Items` about halfway down - It may say something like `(1) Stop Sensor`
   
   Wait until this goes - usually within a few minutes.
   
   ![xDrip+ Stop Dexcom Sensor 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Stop Dexcom Sensor 2](../images/xDrip_Dexcom_StopSensor2.png)

* Clean contacts (transmitter backside) with alcohol and let air-dry.

* In case you use this function disable `Restart Sensor` and `Preemptive restarts` (Hamburger menu -> Settings -> G5/G6 Debug Settings). If you miss this step and have these functions enabled the new sensor will not start properly.
   
   ![xDrip+ Preemptive Restart](../images/xDrip_Dexcom_Restart.png)

* Start Sensor
   
   **For new Firefly transmitters** (serial no. starting with 8G or 8H) **it is mandatory, for all other transmitters it is recommended to wait approx. 15 minutes between stopping and starting the new sensor (until `Sensor Status: Stopped` is shown on second system status screen). DO NOT BACKDATE!**

* Set time inserted
   
   * To use G6 Native mode you must wait for the 2 hour warm up (i.e insertion time is now).
   * If you are using the xDrip+ algorithm then you can set a time more than 2 hours ago to avoid warm up. Readings may be very erratic. Therefore, this is not recommended.
* Enter Sensor code (on the peel-off foil of the sensor) 
   * Keep code for further reference (i.e. new start after transmitter had to be removed)
   * Code can also be found in [xDrip+ logs](../Configuration/xdrip#retrieve-sensor-code): Click 3-dots-menu on xDrip+ homescreen and choose `View Event Logs`.
* No calibration is needed if you use G6 in "native mode". xDrip+ will show readings automatically after 2 hour warm-up.
* Do not turn original Dexcom Receiver (if used) back on before xDrip+ shows first readings.
   
   ![xDrip+ Start Dexcom Sensor 1](../images/xDrip_Dexcom_SensorStart01.png)
   
   ![xDrip+ Start Dexcom Sensor 2](../images/xDrip_Dexcom_SensorStart02.png)

### Получение кода сенсора

* In master dated 2019/05/18 and the latest nightly builds the sensor code is shown in system status (Hamburger menu top left on homescreen).
* Swipe left once to see second screen.
   
   ![xDrip+ Retrieve Dexcom Sensor Code2](../images/xDrip_Dexcom_SensorCode2.png)

* Dexcom sensor code can also be found in xDrip+ logs.

* Tap 3 dot menu (top right side on homescreen)
* Select `View Event Logs` and search for "code"
   
   ![xDrip+ Retrieve Dexcom Sensor Code](../images/xDrip_Dexcom_SensorCode.png)

## Устранение неполадок Dexcom G6 и xDrip+

### Проблемы сопряжения с трансмиттером

* Transmitter must be shown in your smartphone's bluetooth settings.
* Transmitter will be shown as Dexcom?? whereas ?? represent the last two digits of your transmitter serial no. (i.e. DexcomHY).
* Open system status in xDrip+ (hamburger menu on top left side of home screen).
* Check if your transmitter is shown on first status page ('classic status page').
* If not: Delete device from your smartphone's bluetooth settings and restart collector.
* Wait about 5 min. until Dexcom transmitter reconnects automatically.

### Проблемы при запуске нового сенсора

Please note that the following method might likely not work if your Dexcom G6 transmitter's serial no. is starting with 8G or 8H.

* Native sensor is marked as "FAILED: Sensor Failed Start"
* Остановить сенсор
* Restart your phone
* Start sensor with code 0000 (four times zero)
* Wait 15 minutes
* Остановить сенсор
* Start sensor with "real" code (printed on the adhesive protector)

Check in xDrip+ logs if xDrip+ starts counting "Duration: 1 minute" (and so on). Only in the xdrip+ logs you can detect at an early stage whether xdrip+ has stopped a sensor. Latest status is not always shown correctly on bottom of startscreen.

## xDrip+ & Libre Freestyle

### Специфические настройки Libre

* Open Bluetooth Settings -> Hamburger Menu (top left of homescreen) -> Settings -> scroll down -> Less common settings -> Bluetooth Settings
   
   ![xDrip+ Libre Bluetooth Settings 1](../images/xDrip_Libre_BTSettings1.png)

* Активируйте следующие параметры
   
   * `Turn Bluetooth on` 
   * `Use scanning`
   * `Always discover services`

* Все другие опции должны быть отключены
   
   ![xDrip+ Libre Bluetooth Settings 2](../images/xDrip_Libre_BTSettings2.png)

### Подключите трансмиттер Libre и запустите сенсор

![xDrip+ Start Libre Transmitter & Sensor 1](../images/xDrip_Libre_Transmitter01.png)

![xDrip+ Start Libre Transmitter & Sensor 2](../images/xDrip_Libre_Transmitter02.png)

![xDrip+ Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)