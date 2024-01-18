# Настройки xDrip+

Если это еще не сделано, загрузите [xDrip+](https://jamorham.github.io/#xdrip-plus).

Отключите оптимизацию заряда батареи и разрешите фоновую активность приложению xDrip+.

Вы можете безопасно загрузить [ новую (стабильную) версию APK ](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk), если только вам не нужны новейшие функции или вы пользуетесь сенсорами, которые активно интегрируются (как G7). В этом случае следует загружать т. н. [Ночную сборку](https://github.com/NightscoutFoundation/xDrip/releases).

## Основные настройки для всех систем мониторинга

### Отключите выгрузку в Nightscout

Начиная с AAPS 3.2, не позволяйте никаким другим приложениям загружать данные (уровень глюкозы в крови и терапию) в Nightscout.

→ Сэндвич-меню (1) → Настройки (2) → Загрузка в облако(3) -> Синхронизация с Nightscout (REST-API)(4) → Передать данные в NS **** `Выключено` (5)

![основные настройки xDrip+ 1](../images/xDrip_Basic1.png)

#### Отключите автоматическую калибровку и терапию

Если вы используете более старую версию AAPS (до версии 3.2), обязательно отключите `автоматическую калибровку` (7) Если установлен флажок для `Автоматической калибровки`, активируйте `Загрузку терапии` (6) один раз, затем снимите флажок с `Автоматической калибровки` и снова деактивируйте `Загрузку терапии`.

![основные настройки xDrip+ 2](../images/xDrip_Basic2.png)

Если Нажать на `Дополнительные опции`)

:::Предупреждение безопасности: Следует деактивировать "Загружать лечение/назначения" с xDrip, иначе в AAPS эти величины удвоятся, что приведет к неверному количеству активных углеводов COB и активного инсулина IOB:::

Отключите `Загрузку терапии`(9) и убедитесь, что вы ** НЕ будете** пользоваться `Обратным заполнением данных` (11).

Option `Alert on failures` should also be deactivated (10). Otherwise you will get an alarm every 5 minutes in case Wi-Fi/mobile network issues or if the server is not available.

![основные настройки xDrip+ 3](../images/xDrip_Basic3.png)

### **Inter-app Settings** (Broadcast)

If you are going to use AAPS and the data should be forwarded to i.e. AAPS you have to activate broadcasting in xDrip+ in Inter-App settings.

→ Hamburger Menu (1) → Settings (2) → Inter-app settings (3) → Broadcast locally **ON** (4)

In order for the values to be identical in AAPS with respect to xDrip+, you should activate `Send the displayed glucose value` (5).

Enable Compatible Broadcast (6).

![xDrip+ Basic Settings 4](../images/xDrip_Basic4.png)

If you have also activated `Accept treatments` in xDrip+ and `Enable broadcasts to xDrip+` in AAPS xDrip+ plugin, then xDrip+ will receive insulin, carbs and basal rate information from AAPS.

If you enable `Accept Calibrations`, xDrip+ will use the calibrations from AAPS. Be careful when you use this feature with Dexcom sensors: read [this](https://navid200.github.io/xDrip/docs/Calibrate-G6.html) first.

Remember to disable Import Sounds to avoid xDrip+ making a ringtone every time AAPS sends a basal/profile change.

![xDrip+ Basic Settings 5](../images/xDrip_Basic5.png)

(xdrip-identify-receiver)=

#### Идентификатор ресивера

- If you discover problems with local broadcast (AAPS not receiving BG values from xDrip+) go to → Hamburger Menu (1) Settings (2) → Inter-app settings (3) → Identify receiver (7) and enter `info.nightscout.androidaps` for AAPS build (if you are using PumpControl build, please enter `info.nightscout.aapspumpcontrol` instead!!).
- Внимание: Автокоррекция, как правило, меняет i на прописную букву. **Используйте только строчные буквы** при вводе `info.nightscout.androidaps` (или `info.nightscout.aapspumpcontrol` для PumpControl). Прописная I не позволит AAPS получать данные ГК из xDrip+.
    
    ![xDrip+ Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

## Use AAPS to calibrate in xDrip+

- If you want to be able to use AAPS to calibrate then in xDrip+ go to Settings → Interapp Compatibility → Accept Calibrations and select ON. 
- You may also want to review the options in Settings → Less Common Settings → Advanced Calibration Settings.

## Dexcom G6

- Трансмиттер Dexcom G6 может одновременно подключаться к ресиверу Dexcom (или к помпе T:slim) и одному приложению на вашем телефоне.
- При использовании xDrip+ в качестве приемника сначала удалите приложение Dexcom. **Невозможно одновременно подключить к трансмиттеру приложения xDrip+ и Dexcom!**
- If you need Clarity and want to profit from xDrip+ features, use the [Build Your Own Dexcom App](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) with local broadcast to xDrip+, or use xDrip+ as a Companion app receiving notifications from the official Dexcom app.

### Версия xDrip+ в зависимости от серии трансмиттера G6.

- All G6 transmitters manufactured after fall/end 2018 are called "Firefly". They do not allow sensor restart without [removing the transmitter](https://navid200.github.io/xDrip/docs/Remove-transmitter.html), they do not send raw data. It is recommended to use the latest [Nightly Snapshot](https://github.com/NightscoutFoundation/xDrip/releases).
- Old rebatteried transmitters and modified trasmitters allow sensor life extension and restarts, they also send raw data. You can use the [latest APK (stable)](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk).

### Настройки для работы с Dexcom

- Follow [these instructions](https://navid200.github.io/xDrip/docs/G6-Recommended-Settings.html) to setup xDrip+.

### Упреждающие перезапуски не рекомендуются

**Only rebatteried or modified Dexcom transmitters. [Preemptive restarts](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) do not work with standard transmitters and will stop the sensor completely: you need to [remove the transmitter](https://navid200.github.io/xDrip/docs/Remove-transmitter.html) to restart the sensor.**

Автоматическое продление работы сенсоров Dexcom (`упреждающие перезапуски, preemtive restarts`) не рекомендуется, так как может привести к скачкам значений ГК на 9 день после перезапуска.

![скачок xDrip+ после упреждающего перезапуска](../images/xDrip_Dexcom_PreemptiveJump.png)

Для правильного применения необходимо иметь в виду следующие моменты:

- Если вы используете нативные данные с кодом калибровки в xDrip или Spike, в целях безопасности не следует разрешать упреждающий (preemptive) перезапуск датчика.
- Если все же упреждающие перезапуски необходимы, то убедитесь, что вы делаете это в то время, когда можете следить за изменениями и калибровать при потребности. 
- Если вы перезапускаете сенсор, делайте это либо без заводской калибровки для безопасных результатов в дни 11 и 12, либо будьте готовы калибровать и следить за изменениями.
- "Предварительное погружение" (установка сенсора намного раньше его старта в приложении) G6 с заводской калибровкой приведет к отклонениям в данных. Если вы все же делаете "предварительное погружение", то для получения лучших результатов вам, вероятно, придется калибровать сенсор.
- Если вы не планируете отслеживать все возможные изменения, то лучше вернуться к традиционному режиму калибровки и использовать систему, как G5.

Подробнее о деталях и причинах этих рекомендаций читайте [полную статью](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) Tim Street на [www.diabettech.com](https://www.diabettech.com).

(xdrip-connect-g6-transmitter-for-the-first-time)=

### Первое подключение трансмиттера G6

**Для второго и следующих трансмиттеров смотрите [Продление срока работы трансмиттера](xdrip-extend-transmitter-life) ниже.**

Follow [these instructions](https://navid200.github.io/xDrip/docs/Starting-G6.html).

(xdrip-transmitter-battery-status)=

### Состояние батареи трансмиттера

- Battery status can be controlled in system status  
    → Hamburger Menu (1) → System Status (2) → If you are on the Classic Status Page (3) swipe the screen (4) to reach → G5/G6/G7 Status screen.

![xDrip+ System status](../images/xDrip_Dexcom_Battery.png)

- See [here](https://navid200.github.io/xDrip/docs/Battery-condition.html) for more information.

(xdrip-extend-transmitter-life)=

### Увеличение срока работы трансмиттера

- [Lifetime](https://navid200.github.io/xDrip/docs/Transmitter-lifetime.html) cannot be extended for Firefly transmitters: only rebatteried or modified transmitters.
- Follow [these instructions](https://navid200.github.io/xDrip/docs/Hard-Reset.html) for non-Firefly transmitters.

(xdrip-replace-transmitter)=

### Замена трансмиттера

- Выключите оригинальный ресивер Dexcom (если используете).
- [Stop sensor](https://navid200.github.io/xDrip/docs/Dexcom/StartG6Sensor.html) (only if replacing sensor).

- Забудьте устройство в системном состоянии XDrip и в настройках BT смартфона (показывается как Dexcom?? где ?? are the last two digits of the transmitter serial no.)  
    → Hamburger Menu (1) → System Status (2) → If you are on the Classic Status Page (3) swipe the screen (4) to reach → G5/G6/G7 Status screen → Forget Device (5).

![xDrip+ System status](../images/xDrip_Dexcom_StopSensor.png)

- Remove transmitter (and sensor if replacing sensor). To remove transmitter without removing sensor see [this](https://navid200.github.io/xDrip/docs/Remove-transmitter.html), or this video <https://youtu.be/AAhBVsc6NZo>.
- Поместите старый трансмиттер подальше, чтобы предотвратить повторное соединение. A microwave is a perfect Faraday shield for this - but unplug power cord to be 100% sure no one is turning the microwave on.
- Follow [these instructions](https://navid200.github.io/xDrip/docs/Starting-G6.html).
- Не включайте оригинальный ресивер Dexcom (если им пользуетесь) до появления первых данных в xDrip+.

### Новый сенсор

- Выключите оригинальный ресивер Dexcom (если используете).
- Stop sensor following [these instructions](https://navid200.github.io/xDrip/docs/Dexcom/StartG6Sensor.html).

- Insert and then start a new sensor following [these instructions](https://navid200.github.io/xDrip/docs/Starting-G6.html).

(xdrip-retrieve-sensor-code)=

### Получение кода сенсора

→ Hamburger Menu (1) → System Status (2) → If you are on the Classic Status Page (3) swipe the screen (4) to reach → G5/G6/G7 Status screen → Calibration Code.

![xDrip+ Получение кода сенсора Dexcom 2](../images/xDrip_Dexcom_SensorCode2.png)

(xdrip-troubleshooting-dexcom-g5-g6-and-xdrip)=

### Устранение неполадок Dexcom G6 и xDrip+

#### Проблемы сопряжения с трансмиттером

Follow [these instructions](https://navid200.github.io/xDrip/docs/Connectivity-troubleshoot.html).

#### Проблемы при запуске нового сенсора

Follow [these instructions](https://navid200.github.io/xDrip/docs/Dexcom/SensorFailedStart.html).

## Libre 1

- Setup your NFC to Bluetooth bridge in xDrip+
    
    → Hamburger Menu (1) → Settings (2) → Less common settings (3) → Bluetooth Settings (4)

- In Bluetooth Settings set the checkboxes exactly as in the screenshots below (5)
    
    - Disable watchdogs as they will reset the phone Bluetooth and interrupt your pump connection.
    
    ![xDrip+ настройки Libre Bluetooth 1](../images/xDrip_Libre_BTSettings1.png)

- You can try to enable the following settings (7)
    
    - Использовать сканирование
    - Trust Auto-Connect
    - Use Background Scans

- If you easily lose connection to the bridge or have difficulties recovering connection, **DISABLE THEM** (8).
    
    ![xDrip+ настройки Libre Bluetooth 2](../images/xDrip_Libre_BTSettings2.png)

- Leave all other options disabled unless you know why you want to enable them.
    
    ![xDrip+ Libre Bluetooth Settings 3](../images/xDrip_Libre_BTSettings3.png)

### Уровень батареи Libre smart reader

- Battery level of bridges such as MiaoMiao and Bubble can be displayed in AAPS (not Blucon).
- Подробности можно найти на странице [снимков экрана](Screenshots-sensor-level-battery).

### Подключите трансмиттер Libre и запустите сенсор

- If your sensor requires it (Libre 2 EU and Libre 1 US) install the [latest out of process algorithm](https://drive.google.com/file/d/1f1VHW2I8w7Xe3kSQqdaY3kihPLs47ILS/view).

- Your sensor must be already started using the vendor app or the reader (xDrip+ cannot start or stop Libre sensors).

- Set the data source to Libre Bluetooth.
    
    → Hamburger Menu (1) → Settings (2) → Select Libre Bluetooth in Hardware Data source (3)
    
    ![xDrip+ запуск трансмиттера Libre & Сенсора 1](../images/xDrip_Libre_Transmitter01.png)

- Scan Bluetooth and connect the bridge.
    
    → Hamburger Menu (1) → Scan Bluetooth (2) → Less common settings (3) → Bluetooth Settings (4)
    
    - If xDrip+ can't find the bridge, make sure it's not connected to the vendor app. Put it in charge and reset it.
    
    ![xDrip+ запуск трансмиттера Libre & Сенсора 2](../images/xDrip_Libre_Transmitter02.png)

- Start the sensor in xDrip+.
    
    :::{admonition} Safety warning :class: warning Do not use sensor data before the one hour warm-up is over: the values can be extremely high and cause wrong decisions in AAPS.  
    :::
    
    → Hamburger Menu (1) → Start sensor (2) → Start sensor (3) → Set the exact time you started it with the reader or the vendor app. If you didn't start it today, answer "Not Today" (4).

![xDrip+ запуск трансмиттера Libre & Сенсора 3](../images/xDrip_Libre_Transmitter03.png)

## Libre 2 patched app

- Set the data source to Libre patched app.
    
    → Hamburger Menu (1) → Settings (2) → Select Libre (patched App) in Hardware Data source (3)
    
    ![xDrip+ Libre Patched app 1](../images/xDrip_Libre_Patched01.png)

- You can add `BgReading:d,xdrip libre_receiver:v` under Less Common Settings->Extra Logging Settings->Extra tags for logging. Это позволит записывать сообщения об ошибках для устранения неисправностей.

![xDrip+ LibreLink журналы](../images/Libre2_Tags.png)