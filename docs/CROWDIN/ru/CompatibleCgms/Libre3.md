# **Freestyle Libre 3** и 3+

Libre 3 Freestyle (FSL3) требует уникальной настройки для получения ГК в AAPS. Есть два возможных способа получения ГК с Freestyle Libre 3 (FSL3) в AAPS.

![FL3](../images/d912c1d3-06d2-4b58-ad7c-025ca1980fae.jpeg)

Ниже приведены способы достижения этой цели с при помощи приложения Juggluco. It uses Juggluco to receive raw, 1-minute interval data from the sensor which is then passed to xDrip or AAPS. Новые сенсоры можно запустить с помощью приложения Libre 3 или непосредственно в Juggluco. В инструкции ниже показан процесс запуска сенсора в приложении Juggluco. Если сенсор был запущен в системе с учетной записи Libreview, то также можно переключаться между приложениями Juggluco и Libre 3 в качестве приемника.

При запуске сенсора в приложении Libre 3 Juggluco также может передавать данные LibreView для обмена с медицинскими учреждениями.

Within xDrip the sensor can be calibrated in the range of -40 mg/dL to +20 mg/dL (-2.2 mmol/L to +1.1 mmol/L) to compensate for differences between a manual meter reading and the sensor readings.

## Способ 1: использовать ежеминутные показания напрямую
**AAPS** is tailored for 5-minute readings. Поэтому использование ежеминутных показаний имеет определенные ограничения.

Подробности [здесь](#juggluco-to-aaps).


## Способ 2: привести ежеминутные показания к 5-минутным через xDrip+
This method uses Juggluco to receive raw, 1-minute interval data from the sensor which is then passed to xDrip to be smoothed into 5-minute interval data to be passed to AAPS.

### Шаг 1: Настройка Juggluco
Скачайте и установите приложение Juggluco [отсюда](https://www.juggluco.nl/Juggluco/download.html). Следуйте [этой](https://www.juggluco.nl/Juggluco/libre3/) инструкции

Make sure you send the glucose values to xDrip: In Juggluco's settings you can configure Juggluco to send its glucose value to other apps. Juggluco can send three types of such broadcasts: The **Patched Libre broadcast** was originally used by the patched Librelink app and can be used to send glucose values to xDrip.

### Шаг 2: Настройка xDrip

The blood glucose values are received by the xDrip app on the smartphone.

- If not already set up then download [xDrip](https://github.com/NightscoutFoundation/xDrip) and follow the instructions on [xDrip settings page](../CompatibleCgms/xDrip.md).
- In xDrip select "Libre2 (patched app)" as data source.
- При необходимости введите "BgReading:d, xdrip libr_receiver:v" в разделе Менее распространенные настройки -Дополнительные настройки журналирования- Дополнительные теги для добавления в журнал. Это позволит записывать дополнительные сообщения об ошибках для устранения неисправностей.

![xDrip LibreLink logging](../images/Libre2_Tags.png)

- Technically, the current blood sugar value is transmitted to xDrip every minute. По умолчанию фильтр средневзвешенного значения вычисляет сглаженное значение за последние 25 минут. Этот период можно изменить в меню функций сканирования NFC.

  → Сэндвич-меню → Настройки →Функция сканирования NFC→ Сглаживать данные libre 3 при использовании метода xxx

  ![xDrip advanced settings Libre 2 & raw values](../images/xDrip_Libre3_Smooth.png)



### Шаг 3: Запуск сенсора в xDrip

In xDrip start the sensor with "Start Sensor" and "not today". Нет необходимости прикладывать мобильный телефон к сенсору. На самом деле "Запуск сенсора" физически не запускает сенсор Libre3 и не начинает взаимодействие с ним. This is simply to indicate xDrip that a new sensor is delivering blood sugar levels. If available, enter two blood-measured values for the initial calibration. Now the blood glucose values should be displayed in xDrip every 5 minutes. Пропущенные данные, например из-за того, что вы были далеко от телефона, не будут восстановлены.

Подождите не менее 15-20 минут, если данных нет.

After a sensor change xDrip will automatically detect the new sensor and will delete all calibration data. You may check your blood glucose after activation and make a new initial calibration.

### Step 4: Configure AAPS

- Изучите [это](#juggluco-to-xdrip) и возвращайтесь.

- If **AAPS** does not receive BG values when phone is in airplane mode, use "Identify receiver"
- Turn off Smoothing (done in xDrip already)

## Последующие замены сенсора

1. Откройте Juggluco и посмотрите серийный номер текущего сенсора

![Серийный номер Libre](../images/libre3/step_13.jpg)

2. Теперь просто сканируйте новый сенсор с помощью NFC телефона. Juggluco покажет уведомление, если процесс запущен успешно.
3. Когда вы готовы деактивировать старый сенсор, откройте меню Juggluco, щелкнув в любом месте в левом верхнем углу экрана.
4. Выберите закончившийся датчик и нажмите "Прервать".

![Завершить работу сенсора](../images/libre3/step_14.jpg)

Note: When two sensors are active Juggluco will send the most recent value from either sensor to xDrip. If the sensors are not calibrated to read BG similarly, this may result in jumpy BG values being reported to xDrip. Если вы остановите неправильный сенсор, то сможете снова активировать его, просто просканировав сенсор.

## Переключение сенсора между Libre 3 и Juggluco

Если сенсор был запущен в системе с учетной записи Libreview, то также можно переключаться между приложениями Juggluco и Libre 3 в качестве приемника. Для этого требуются следующие шаги:

1. Установите приложение Libre 3 из Google Play
2. Настройте приложение Libre 3 с помощью учетной записи Libreview, которой активирован сенсор.
3. В настройках Android принудительно остановите Juggluco.
4. В меню Libre 3 нажмите кнопку "Запустить сенсор", выберите "Да", "Далее" и отсканируйте сенсор.
5. Через несколько минут данные ГК должны быть видны в приложении Libre 3.

Чтобы перейти с приложения Libre 3 на Juggluco, нужно принудительно остановить Libre 3 через настройки Android и перейти к Шагу 1 & 2.

(libre3-experiences-and-troubling)=
## Опыт и устранение неполадок

### Устранение неполадок Libre3 -> Подключение Juggluco

- Убедитесь, что используете текущую версию приложения Juggluco
- Проверьте настройки в соответствии с этой инструкцией
- Иногда вам придется принудительно остановить приложение Libre 3 и/или Juggluco и перезапустить его/их.
- Отключите Bluetooth, подождите 10 секунд и снова включите его
- Подождите некоторое время или попробуйте закрыть Juggluco
- Более старые версии Juggluco (ниже 2.9.6) не посылают последующие данные с сенсора Libre3 на подключенные устройства (например, Juggluco на WearOS). Может потребоваться нажать кнопку «Повторно отправить данные» в модифицированном приложении Libre3 (из меню Juggluco).

### Дальнейшая помощь

Оригинальная инструкция: [jkaltes website](https://www.juggluco.nl/Juggluco/libre3/)

Additional GitHub repo: [GitHub link](https://github.com/maheini/FreeStyle-Libre-3-patch)
