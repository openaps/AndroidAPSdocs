# Пример настройки: Samsung S7, DanaR, Dexcom G5 и Sony Smartwatch

![Пример настройки](../images/SampleSetup.png)

## Описание

В этой комбинации смартфон Samsung Galaxy S7 используется в качестве центра управления циклом. Слегка модифицированное приложение Dexcom считывает значения ГК из CGM Dexcom G5. AndroidAPS управляет помпой Dana R корейского производителя SOOIL через Bluetooth. Дополнительные устройства не требуются.

Поскольку приложение Dexcom предлагает ограниченные параметры оповещений, приложение с открытым исходным кодом xDrip+ настраивается не только на высокие и низкие значения но и на другие оповещения под индивидуальные потребности.

По желанию можно использовать смарт-часы Android (в этой выборке применяется Sony Smartwatch 3 (SWR50)) для отображения значений глюкозы и параметров AndroidAPS на вашей руке. Часы могут даже применяться для контроля AndroidAPS (напр. для дискретной подачи болюса на еду).

Система работает в автономном режиме. Это означает, что для работы нет необходимости подключения смартфона к Интернету.

Тем не менее, данные автоматически загружаются в Nightscout "в облаке", когда соединение с интернетом присутствует. Эта опция позволяет предоставить полную картину ГК для врача или для членов семьи практически в любое время. Также можно отправлять данные в Nightscout только с (вами определенным) Wi-Fi соединением для создания различных отчетов.

## Обязательные компоненты

1. Samsung Galaxy S7
    
    * Альтернативы: см. [список проверенных телефонов и часов](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435) для AndroidAPS

2. Инсулиновая помпа [DanaR](http://www.sooil.com/eng/product/) или Dana RS
    
    * Альтернативы: 
    * [Помпа Accu Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
    * Другие помпы могут быть доступны в будущем, см. [возможные будущие драйверы помп](Future-possible-Pump-Drivers.md) для подробной информации.

3. [Dexcom G5](https://dexcom.com)
    
    * Альтернативы: см. список возможных [ источников ГК](../Configuration/BG-Source.md)

4. Дополнительно: Sony Smartwatch 3 (SWR50)
    
    * Альтернативы: см. [список проверенных телефонов и часов](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435) для AndroidAPS (ОС должна быть Android Wear)

## Настройки Nightscout

Подробнее см. [Настройка Nightscout](../Installing-AndroidAPS/Nightscout.md)

## Настройка компьютера

Чтобы создать приложение на Android из свободно распространяемого кода AAPS, вам нужно установить Android Studio на компьютере или ноутбуке (Windows, Mac, Linux). Подробная инструкция находится на [создание APK](../Installing-AndroidAPS/Building-APK.md).

Пожалуйста, будьте терпеливы при установке Android Studio так как программа загружает много дополнительных компонентов на вашем компьютере.

## Настройка смартфона

![Смартфон](../images/SampleSetupSmartphone.png)

### Проверьте прошивку смартфона

* Меню > Настройки > Настройки > Информация о телефоне > Информация о Программном обеспечении: не ниже "Android-Version 7.0" (успешно протестирована до версии 8.0.0 Oreo - Samsung Experience Version 9.0) 
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

Оригинальное приложение Dexcom из Google Play Store не будет работать, так как оно не передает данные другим приложениям. Поэтому требуется немного модифицированная версия от нашего сообщества. Только это измененное приложение Dexcom может общаться с AAPS. Кроме того, модифицированное приложение Dexcom может работать со всеми смартфонами Android, а не только находящимися в списке совместимости [Dexcom](https://www.dexcom.com/dexcom-international-compatibility). Версия mmol/l и версия mg/dl измененного приложения Dexcom доступны на https://github.com/dexcomapp/dexcomapp?files=1.

Для этого выполните следующие шаги на вашем смартфоне:

1. Если оригинальное приложение Dexcom уже установлено: 
    * Остановить сенсор
    * Удалить приложения через меню > Настройки > Приложения > Dexcom G5 Mobile > Удалить
2. Загрузить модифицированное приложение Dexcom (проверьте единицы измерения mg/dl или mmol/l в соответствии с потребностями): <https://github.com/dexcomapp/dexcomapp?files=1>
3. Установить измененное приложение Dexcom на смартфоне (= выберите загруженный файл APK)
4. Запустите модифицированное приложение Dexcom, активируйте/закалибруйте сенсор в соответствии с инструкциями и подождите, пока завершится процесс разогрева.
5. После того как первые два калибровки введены успешно и измененное приложение Dexcom показывает текущие значения глюкозы, настройте оповещения (сэндвич-меню на левой стороне экрана) следующим образом: 
    * Чрезвычайно низкий `55mg/dl` / `3.1mmol/l` (не может быть отключен)
    * Низкий `ВЫКЛ`
    * Высокий `ВЫКЛ`
    * Скорость подъема `ВЫКЛ`
    * Скорость понижения `ВЫКЛ`
    * Потеря сигнала `ВЫКЛ`

## Установите AndroidAPS

1. Следуйте инструкциям по [сборке APK](../Installing-AndroidAPS/Building-APK#generate-signed-apk)
2. [Переместите](../Installing-AndroidAPS/Building-APK#transfer-apk-to-smartphone) созданное приложение (APK) на ваш телефон
3. [Сконфигурируйте AndroidAPS](../Configuration/Config-Builder.md) в соответствии с Вашими потребностями, используя мастер настройки или вручную
4. В этом примере мы использовали (среди прочего)

* Источник BG: `Dexcom G5 App (patched)` -- нажмите на значок шестеренки и активируйте `Загружать данные ГК на NS` и `Отправлять данные ГК на xDrip+` (см. [источник ГК](../Configuration/BG-Source.md))

![Настройки G5](../images/SampleSetupG5Settings.png)

* NS клиент активирован (см. [Клиент NS](../Configuration/Config-Builder#ns-profile) и [Настройки Nightscout](../Installing-AndroidAPS/Nightscout.md))

## Установите xDrip+

xDrip+ это великолепное приложение с открытым исходным кодом, предлагающее бесчисленные возможности. В этой настройке, вопреки тому, для чего разработчики xDrip+ написали приложение, оно не используется для получения данных ГК из Dexcom G5, а только для вывода оповещений и для отображения текущего значения ГК, включая кривую в виджете на домашнем экране Android. С xDrip+ оповещения могут быть настроены гораздо более индивидуально, чем с программным обеспечением Dexcom, AAPS или Nightscout (без ограничений в выборе звуков, сигналов для дня/ночи и т. д.).

1. Скачайте последнюю стабильную версию APK xDrip+ с помощью смартфона <https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk> - а не версию из Google Play Store!
2. Установите xDrip+ при помощи выбора загруженного файла APK.
3. Запустите xDrip+ и произведите следующие настройки (сэндвич-меню слева сверху) 
    * Настройки > Будильники и оповещения > Список оповещений об уровне ГК > Создание оповещений (высокое и низкое) в соответствии с Вашими потребностями. 
    * Существующие оповещения могут быть изменены длинным нажатием на значок сигнала.
    * Настройки > Будильники и оповещения > Оповещения о калибровке: отключены (напоминание через измененное приложение Dexcom)
    * Настройки > Источник аппаратных данных > 640G/EverSense
    * Настройки > Настройки Inter-app > Принимать Калибровки > `включено`
    * Меню > Запуск сенсора (только "pro forma", не имеет ничего общего с работающим датчиком G5.). Необходимо включить иначе будет регулярно появляться сообщение об ошибке.) 

For more information about xDrip+, see here [BG source page](../Configuration/BG-Source.md).

### Пример установки оповещения

The "Urgent low alarm" (below 55 mg/dl resp. 3,1 mmol) is a standard alarm from the modified Dexcom app that cannot be disabled.

![xDrip alarms](../images/SampleSetupxDripWarning.png)

Tip for meetings / church visits / cinema etc..:

If "Do not disturb" mode is activated in the Samsung Galaxy S7 (Menu > Settings > Sounds and vibration > Do not disturb: slider to right side (= active)), the phone only vibrates during urgent low alarm and does not issue an acoustic warning. For the other alarms set up via xDrip+ you can select whether the silent mode should be ignored (acoustic sound played) or not.

## Отключите энергосбережение

On your Samsung Galaxy S7 go to Menu > Settings > Device Maintenance > Battery > Unmonitored Apps > + Add apps: Select the apps AndroidAPS, Dexcom G5 Mobile, xDrip+ and Android Wear (if smartwatch is used) one after the other

## Дополнительно: настройте Sony Smartwatch 3 (SWR50)

With an Android Wear smartwatch life with diabetes can be made even more inconspicuous. The watch can be used to display the current glucose level, the status of the loop etc. on the wrist. Часы могут даже применяться для контроля AndroidAPS (напр. для дискретной подачи болюса на еду). To do this, double tap the CGM value of the AAPSv2 watchface. The SWR50 usually runs for a full day until the battery needs to be recharged (same charger as the Samsung Galaxy S7: microUSB).

![Смарт часы](../images/SampleSetupSmartwatch.png)

Details about the information displayed on the watchface can be found [here](../Configuration/Watchfaces.md).

* Установите приложение "Android Wear" на вашем смартфоне через Google Play Store и подключите смартфон в соответствии с инструкциями.
* В AAPS выберите сэндвич-меню (в верхнем левом углу) > Конфигуратор > Общее (в нижней части списка) > Wear > активировать, на левой стороне нажмите на шестеренку > Настройки Wear и активируйте `Управление c часов`
* На вашем смартфоне: Удерживайте дисплей для изменения циферблата и выберите `AAPSv2`
* При необходимости однократно перезапустите оба устройства.

## Настройки помпы

see [DanaR pump](../Configuration/DanaR-Insulin-Pump.md)