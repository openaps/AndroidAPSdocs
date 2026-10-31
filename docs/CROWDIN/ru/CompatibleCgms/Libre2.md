# Freestyle Libre 2 и 2+

Датчик Freestyle Libre 2 теперь является полноценным непрерывным мониторингом даже с официальным приложением. Тем не менее, LibreLink не в состоянии отправлять данные в AAPS. Для взаимодействия Libre 2 с AAPS существует несколько решений.

## 1. Использовать трансмиттер Bluetooth и алгоритм OOP

Bluetooth трансмиттеры могут быть использованы с датчиками Libre 2 (EU) и 2+ (EU) при использовании приложения с алгоритмом вне процесса (OOP). В этом случае Вы будете получать показания сахара крови каждые 5 минут, так же как с [Libre1](./Libre1.md).

Check the bridge and app you want to use are compatible with your sensor and xDrip.

Libre2 OOP (находится [здесь](#Libre2_OOP2)) создает те же значения ГК, что и оригинальный ридер или приложение. Во избежание скачков, AAPS с Libre2 производит сглаживание в пределах от 10 до 25 минут. См. ниже [Сглаживание показаний & необоаботанные данные](#libre2-value-smoothing-raw-values). Алгоритм программы генерирует данные каждые 5 минут со сглаживанием по среднему значению за последние 5 минут. Поэтому значения ГК не выглядят гладкими, а совпадают с показаниями оригинального устройства считывания и быстрее следуют "реальным". If you try to loop with OOP please enable all smoothing settings in xDrip.

Есть несколько веских причин пользоваться передатчиком Bluetooth:

-   You can choose various OOP2 calibration strategies (1): have the reader values using "no calibration", or calibrate the sensor like a Libre 1 using "calibrate based on raw" or ultimately calibrate the reader-like values with "calibrate based on glucose".  
  Make sure to leave OOP1 disabled (2).

    → Сэндвич-меню → Настройки →Менее распространенные настройки → Другие разные настройки. Варианты

![Калибровка OOP2](../images/Libre2_OOP2Calibration.png)

-   Libre2 может работать 14,5 дней как и Libre1
-   Полностью поддерживается восстановление данных за прошедшие 8 часов

Замечание: Трансмиттер можно использовать параллельно с приложением LibreLink.

### Запустите сенсор

- → Сэндвич-меню (1) → Запустить сенсор (2) → Запустить сенсор (3) → Ответ "Не сегодня" (4).

![xDrip Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)

На самом деле эта команда физически не запустит сенсор Libre2 и не начнет взаимодействие с ним. This is simply to indicate xDrip that a new sensor is delivering blood sugar levels. If available, enter two blood-measured values for the initial calibration. Now the blood glucose values should be displayed in xDrip every 5 minutes. Пропущенные данные, например из-за того, что вы были далеко от телефона, не будут восстановлены.

After a sensor change xDrip will automatically detect the new sensor and will delete all calibration data. You may check your blood glucose after activation and make a new initial calibration.

### Настройка AAPS (только для замкнутого цикла)

-   In **AAPS**, open the **menu** (☰) in the top-left corner, go to **Configuration** > **BG Source** and select **xDrip+**

![Configuration > BG Source with xDrip+ BG selected](../images/v4/Configuration/configuration_bg_source.png)

-   If AAPS does not receive BG values when phone is in airplane mode, use 'Identify receiver' as describe on [xDrip settings page](#xdrip-identify-receiver).

## 2. Use xDrip direct connection

```{admonition} Libre 2 EU only
:class: warning
xDrip doesn't support direct connection to Libre 2 US and AUS.
Только модели Libre 2 и 2+ **для рынка ЕС**.
```

- Follow [these instructions](./Libre2MinimalL00per.md) to setup xDrip as the original documentation links to an obsolete OOP2  version.
- Follow setup instructions on [xDrip settings page](../CompatibleCgms/xDrip.md).

-   Select xDrip+ in [Configuration > BG Source](#Config-Builder-bg-source).

(libre2-value-smoothing-raw-values)=

### Сглаживание данных & необработанные данные

Technically, the current blood sugar value is transmitted to xDrip every minute. По умолчанию фильтр средневзвешенного значения вычисляет сглаженное значение за последние 25 минут. Этот период можно изменить в меню функций сканирования NFC.

→ Сэндвич-меню → Настройки →Функция сканирования NFC→ Сглаживать данные libre 3 при использовании метода xxx

![xDrip advanced settings Libre 2 & raw values](../images/xDrip_Libre3_Smooth.png)

Это обязательно для цикла. Кривые выглядят гладкими, и результаты работы цикла великолепны. Необработаные значения, на которых основаны оповещения, имеют несколько больший разборос, но в конечном счете соответствуют показателям ридера. In addition, the raw values can be displayed in the xDrip graph in order to be able to react in time to rapid changes. Переключитесь на Менее распространенные Настройки\ > Расширенные настройки для Libre2 \>"показывать необработанные значения" и "показывать Информацию с сенсора". После этого "необработанные" значения будут дополнительно отображается в виде небольших белых точек, а в меню системы будет доступна дополнительная информация о сенсоре.

Необработанные данные очень полезны при быстрых изменениях ГК. Даже если точки идут вразброс, для принятия решений по терапии тенденция видна гораздо лучше, чем при сглаживании.

→ Сэндвич-меню → Настройки →Менее распространенные настройки → Advanced settings for Libre 2 (дополнительные настройки для Libre 2)

![xDrip advanced settings Libre 2 & raw values](../images/Libre2_RawValues.png)



#### Калибровка

You can calibrate the Libre2 **with an offset of -40 mg/dL to +20 mg/dL \[-2,2 mmol/L to +1,1 mmol/L\]** (intercept). Угловой коэффициент не изменяется. Проверьте глюкометром после установки нового сенсора, имея в виду, что в первые 12 часов после установки данные могут быть неточны. Поскольку показатели ГК могут сильно отличаться, проверяйте каждые 24 часа и при необходимости калибруйте. Если через несколько дней показания сенсора совершенно не совпадают с глюкометром, сенсор следует заменить.

## 3. Использовать Diabox

- Установите [Diabox](https://www.bubblesmartreader.com/_files/ugd/6afd37_f183eabd4fbd44fcac4b1926a79b094f.pdf). В Настройках, Интеграция, включите "Делиться данными с другими приложениями".

![Diabox](../images/Diabox.png)

- Select xDrip+ in [Configuration > BG Source](#Config-Builder-bg-source).

## 4. Использовать Juggluco

Смотри [здесь](./Juggluco.md).
