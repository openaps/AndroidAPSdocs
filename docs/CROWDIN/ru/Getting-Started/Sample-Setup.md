# Пример настройки: Samsung S7, DanaR, Dexcom G6 и Sony Smartwatch

![Пример настройки](../images/SampleSetup.png)

## Описание

В этой комбинации смартфон Samsung Galaxy S7 используется в качестве центра управления циклом. Слегка модифицированное приложение Dexcom считывает значения ГК из CGM Dexcom G6. AndroidAPS управляет помпой Dana R корейского производителя SOOIL через Bluetooth. Дополнительные устройства не требуются.

Поскольку приложение Dexcom предлагает ограниченные параметры оповещений, приложение с открытым исходным кодом xDrip+ настраивается не только на высокие и низкие значения но и на другие оповещения под индивидуальные потребности.

По желанию можно использовать смарт-часы Android (в этой выборке применяется Sony Smartwatch 3 (SWR50)) для отображения значений глюкозы и параметров AndroidAPS на вашей руке. Часы могут даже применяться для контроля AndroidAPS (напр. для дискретной подачи болюса на еду).

Система работает в автономном режиме. Это означает, что для работы нет необходимости подключения смартфона к Интернету.

Тем не менее, данные автоматически загружаются в Nightscout "в облаке", когда соединение с интернетом присутствует. Эта опция позволяет предоставить полную картину ГК для врача или для членов семьи практически в любое время. Также можно отправлять данные в Nightscout только с (вами определенным) Wi-Fi соединением для создания различных отчетов.

## Обязательные компоненты

1. Samsung Galaxy S7
    
    * Альтернативы: см. [список проверенных телефонов и часов](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) для AndroidAPS

2. [DanaRS](http://www.sooil.com/eng/product/)
    
    * Альтернативы: 
    * [Помпа Accu Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
    * [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
    * [DanaR](../Configuration/DanaR-Insulin-Pump.md)
    * [Некоторые старые помпы Medtronic (дополнительно требуются аппаратная часть: RileyLink/Gnarl, телефон Android с чипом bluetooth low Energy/BLE-chipset)](../Configuration/MedtronicPump.md)
    * В будущем возможны другие помпы, см. подробнее в [возможные будущие драйверы помп](Future-possible-Pump-Drivers.md).

3. [Dexcom G6](https://dexcom.com)
    
    * Альтернативы: см. список возможных [ источников ГК](../Configuration/BG-Source.rst)

4. Дополнительно: Sony Smartwatch 3 (SWR50)
    
    * Альтернативы: Все [ часы с Google Wear OS ](https://wearos.google.com/intl/de_de/#find-your-watch) должны работать, см. [ список проверенных телефонов и часов ](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) для AndroidAPS (OS должна быть Android Wear)

## Настройки Nightscout

Подробнее см. [Настройка Nightscout](../Installing-AndroidAPS/Nightscout.md)

## Настройка компьютера

Чтобы создать приложение на Android из свободно распространяемого кода AAPS, вам нужно установить Android Studio на компьютере или ноутбуке (Windows, Mac, Linux). Подробная инструкция находится на [создание APK](../Installing-AndroidAPS/Building-APK.md).

Пожалуйста, будьте терпеливы при установке Android Studio так как программа загружает много дополнительных компонентов на вашем компьютере.

## Настройка смартфона

![Смартфон](../images/SampleSetupSmartphone.png)

### Проверьте прошивку смартфона

* Меню > Настройки > Настройки > Информация о телефоне > Информация о Программном обеспечении: не ниже "Android-Version 8.0" (успешно протестирована до версии 8.0.0 Oreo - Samsung Experience Version 9.0) 
* Для обновления прошивки: меню > Настройки > Обновление программы

### Разрешите установку приложений из неизвестных источников

Меню > Настройки > Безопасность устройства > Неизвестные источники > ползунок справа (= active)

По соображениям безопасности эта настройка должна быть возвращена в неактивный режим по завершении установки всех описанных здесь приложений.

### Включите Bluetooth

1. Меню > Настройки > Подключения > Bluetooth > ползунок справа (= active)
2. Меню > Настройки > Подключения > Местоположение > ползунок справа (= active)

Службы местоположения ("GPS") должны быть активированы для корректной работы Bluetooth.

### Установить приложение Dexcom (модифицированная версия)

![Приложение Dexcom G (модифицированное)](../images/SampleSetupDexApp.png)

Оригинальное приложение Dexcom из Google Play Store не будет работать, так как оно не передает данные другим приложениям. Поэтому требуется немного модифицированная версия от нашего сообщества. Только это измененное приложение Dexcom может общаться с AAPS. Кроме того, модифицированное приложение Dexcom может работать со всеми смартфонами Android, а не только находящимися в списке совместимости [Dexcom](https://www.dexcom.com/dexcom-international-compatibility).

To do this perform the following steps on your smartphone:

1. Если оригинальное приложение Dexcom уже установлено: 
    * Остановить сенсор
    * Удалить приложения через меню > Настройки > Приложения > Dexcom G6 Mobile > Удалить
2. Download and install the [BYODA Dexcom ap](../Hardware/DexcomG6#if-using-g6-with-build-your-own-dexcom-app)
3. Start modified Dexcom G6 app, activate/calibrate the sensor according to the given instructions and wait until the warm-up phase is finished.
4. Once the modified Dexcom app shows actual glucose value, setup the warnings (hamburger menu on top left side of the screen) as follows: 
    * Urgent low `55mg/dl` / `3.1mmol/l` (cannot be disabled)
    * Low `OFF`
    * High `OFF`
    * Rise rate `OFF`
    * Fall rate `OFF`
    * Signal loss `OFF`

## Установите AndroidAPS

1. Следуйте инструкциям по [сборке APK](../Installing-AndroidAPS/Building-APK#generate-signed-apk)
2. [Переместите](../Installing-AndroidAPS/Building-APK#transfer-apk-to-smartphone) созданное приложение (APK) на ваш телефон
3. [Сконфигурируйте AndroidAPS](../Configuration/Config-Builder.md) в соответствии с Вашими потребностями, используя мастер настройки или вручную
4. В этом примере мы использовали (среди прочего)

* BG source: `Dexcom G6 App (patched)` -- click cock-wheel and activate `Upload BG data to NS` and `Send BG data to xDrip+` (see [BG source](../Configuration/BG-Source.rst))

![G5 Settings](../images/SampleSetupG5Settings.png)

* NS Client activated (see [Nightscout setup](../Installing-AndroidAPS/Nightscout.md))

## Установите xDrip+

xDrip+ is another mature open source app that offers countless possibilities. In this setup, contrary to what the developers first wrote the app for, xDrip+ is not used to collect glucose data from the Dexcom G6, but only to output alarms and to display the current glucose value including the curve on the Android home screen in the widget. With xDrip+ the alarms can be set much more individually than with the Dexcom software, AAPS or Nightscout (no limitation in the selection of sounds, different alarms depending on day/night time etc.).

1. Скачайте последнюю стабильную версию APK xDrip+ с помощью смартфона <https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk> - а не версию из Google Play Store!
2. Установите xDrip+ при помощи выбора загруженного файла APK.
3. Запустите xDrip+ и произведите следующие настройки (сэндвич-меню слева сверху) 
    * Настройки > Будильники и оповещения > Список оповещений об уровне ГК > Создание оповещений (высокое и низкое) в соответствии с Вашими потребностями.
    * Существующие оповещения могут быть изменены длинным нажатием на значок сигнала.
    * Настройки > Будильники и оповещения > Оповещения о калибровке: отключены (напоминание через измененное приложение Dexcom)
    * Настройки > Источник аппаратных данных > 640G/EverSense
    * Настройки > Настройки Inter-app > Принимать Калибровки > `включено`
    * Меню > Запуск сенсора (только "pro forma", не имеет ничего общего с работающим датчиком G6.). Необходимо включить иначе будет регулярно появляться сообщение об ошибке.) 

For more information about xDrip+, see here [BG source page](../Configuration/BG-Source.rst).

### Пример настройки оповещения

The "Urgent low alarm" (below 55 mg/dl resp. 3,1 mmol) is a standard alarm from the modified Dexcom app that cannot be disabled.

![xDrip alarms](../images/SampleSetupxDripWarning.png)

Tip for meetings / church visits / cinema etc..:

If "Do not disturb" mode is activated in the Samsung Galaxy S7 (Menu > Settings > Sounds and vibration > Do not disturb: slider to right side (= active)), the phone only vibrates during urgent low alarm and does not issue an acoustic warning. For the other alarms set up via xDrip+ you can select whether the silent mode should be ignored (acoustic sound played) or not.

## Отключите энергосбережение

On your Samsung Galaxy S7 go to Menu > Settings > Device Maintenance > Battery > Unmonitored Apps > + Add apps: Select the apps AndroidAPS, Dexcom G6 Mobile, xDrip+ and Android Wear (if smartwatch is used) one after the other

## Дополнительно: настройте Sony Smartwatch 3 (SWR50)

With an Android Wear smartwatch life with diabetes can be made even more inconspicuous. The watch can be used to display the current glucose level, the status of the loop etc. on the wrist. Часы могут даже применяться для контроля AndroidAPS (напр. для дискретной подачи болюса на еду). To do this, double tap the CGM value of the AAPSv2 watchface. The SWR50 usually runs for a full day until the battery needs to be recharged (same charger as the Samsung Galaxy S7: microUSB).

![Смарт часы](../images/SampleSetupSmartwatch.png)

Details about the information displayed on the watchface can be found [here](../Configuration/Watchfaces.md).

* Установите приложение "Android Wear" на вашем смартфоне через Google Play Store и подключите смартфон в соответствии с инструкциями.
* В AAPS выберите сэндвич-меню (в верхнем левом углу) > Конфигуратор > Общее (в нижней части списка) > Wear > активировать, на левой стороне нажмите на шестеренку > Настройки Wear и активируйте `Управление c часов`
* На вашем смартфоне: Удерживайте дисплей для изменения циферблата и выберите `AAPSv2`
* При необходимости однократно перезапустите оба устройства.

## Настройки помпы

see [Dana RS pump](../Configuration/DanaRS-Insulin-Pump.md)