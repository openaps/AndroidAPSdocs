# Источник данных гликемии

## Для пользователей Dexcom  


### При использовании G5 или G6 с xdrip+  


* Если еще не настроили, скачайте [xdrip](https://github.com/NightscoutFoundation/xDrip) и следуйте инструкциям на nightscout ([G4 без share ](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [с share G4](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* В xdrip, перейдите в настройки > совместимости программ > трансляция данных локально и выберите Включить (ON).
* В xdrip+ перейдите в настройки > совместимости программ > принимать назначения и выберите ВЫКЛ (OFF).
* Если вы хотите, чтобы AndroidAPS мог калибровать показания гликемии, в xdrip + перейдите в настройки > совместимость приложений > принять калибровки и выберите ВКЛ (ON). Возможно вы также захотите рассмотреть варианты в настройках > менее распространенные параметры > дополнительные параметры калибровки.
* В конфигуратоге (настройки AndroidAPS) выберите xdrip.

### При использовании G5 или G6 с помощью патч-приложения Dexcom  


* Скачайте приложение из <https://github.com/dexcomapp/dexcomapp>, и выберите версию по вашим потребностям (mg/dl или mmol/l, G5 или G6).
* Если это еще не сделано, остановите сенсор и удалите оригинальное приложение Dexcom.
* Установите загруженное приложение
* Запустите сенсор
* В конфигуратоге (настройки AndroidAPS) выберите Dexcom G5 App (patched).

### При использовании G4 с кабелем OTG («традиционный» Nightscout)…  


* Если это еще не сделано, скачайте загрузчик Nightscout из Play Store и следуйте инструкциям на [Nightscout](http://www.nightscout.info/wiki/welcome/basic-requirements).
* В настройках AndroidAPS введите адрес вашего веб-сайта Nightscout и пароль API secret.
* В конфигураторе (настройки AndroidAPS) выберите NSClient.

## Для пользователей Libre с адаптером Bluetooth  


Чтобы использовать Libre как CGM, которая получает новые значения гликемии каждые 5 минут, нужно сначала приобрести один из адаптеров NFC - Bluetooth:

* MiaoMiao-Reader <https://www.miaomiao.cool/>
* Blukon Nightrider <https://www.ambrosiasys.com/howit>
* BlueReader <https://bluetoolz.de/blueorder/#home>
* Sony Smartwatch 3 (SWR50) <https://github.com/pimpimmi/LibreAlarm/wiki/>

### При использовании xdrip...  


* Если это еще не сделано, скачайте xdrip+ и следуйте инструкциям на [LimiTTEer](https://github.com/JoernL/LimiTTer), [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki) или [BlueReader](https://unendlichkeit.net/wordpress/?p=680&lang=en) ([Оборудование](https://bluetoolz.de/wordpress/)).
* В xdrip, перейдите в настройки > совместимости программ > трансляция данных локально и выберите Включить (ON).
* В xdrip, перейдите в настройки > совместимость программ > принимать назначения и выберите ВЫКЛЮЧИТЬ (OFF).
* Если вы хотите, чтобы AndroidAPS мог калибровать показания гликемии, в xdrip + перейдите в настройки > совместимость приложений > принять калибровки и выберите ВКЛ (ON). Возможно вы также захотите рассмотреть варианты в настройках > менее распространенные параметры > дополнительные параметры калибровки.
* В конфигуратоге (настройки AndroidAPS) выберите xdrip.
* Для основного режима G5 в xdrip+ перейдите в настройки > загрузка из облака > REST API > дополнительные настройки > Добавить источник информации в устройство и выберите ВКЛ (ON).

### При использовании Glimp...  


* Если это еще не сделано, скачайте Glimp и следуйте инструкциям на [nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
* В конфигураторе (настройки AndroidAPS) выберите Glimp.

## Для пользователей Eversense  


Самым простым способом использования Eversense с AndroidAPS является установка модифицированного приложения [Eversense](https://github.com/BernhardRo/Esel/blob/master/apk/mod_com.senseonics.gen12androidapp-release.apk) (с предварительным удалением оригинального приложения).

**Предупреждение: после удаления старого приложения, ваши локальные данные старше одной недели будут утрачены!**

Чтобы получить данные в AndroidAPS, необходимо установить [ESEL](https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk) и включить "Отправить в AAPS и xDrip" в ESEL и выбрать "MM640g" как источник СК в [Конфигураторе](../Configuration/Config-Builder.md) AndroidAPS. Поскольку данные СК от Eversense могут быть зашумленными, предпочтительнее включить "Smooth Data" (выправить данные) в ESEL, а не "Всегда использовать усредненную короткую дельту вместо простых данных".

Вы можете найти другую инструкцию для использования xDrip с Eversense [здесь](https://github.com/BernhardRo/Esel/tree/master/apk).

## Для пользователей MM640g или MM630g  


* Если это еще не сделано, скачайте [600SeriesAndroidUploader](http://pazaan.github.io/600SeriesAndroidUploader/) и следуйте инструкциям на [Тightscout](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g).
* В Загрузчике Серии 600, перейдите в настройки > отправить на xdrip + и выберите ВКЛ (ON).
* В конфигуратоге (настройки AndroidAPS) выберите MM640g.

## Для пользователей PocTech CT-100  


* Установите приложение PocTech
* В конфигуратоге (настройки AndroidAPS) выберите PocTech.

## Для пользователей других систем мониторинга, передающих данные в Nightscout  


Если у вас есть другая система мониторинга отправляющая даннные в [Nightscout](http://www.nightscout.info) тогда  


* В настройках AndroidAPS введите адрес вашего веб-сайта Nightscout и пароль API secret.
* В конфигуратоге (настройки AndroidAPS) выберите NSClient.

# Общие рекомендации по мониторингу

## Гигиена мониторинга

Вне зависимости от того, какой у вас мониторинг - официальная система или самодельная, следует соблюдать определенные правила.

* Убедитесь, что руки и комплект чисты.
* Старайтесь калибровать на ровных ГК (обычно 15-30 минут с плоской шкалой достаточно)
* Avoid calibrating when glucose levels are moving up or down. 
* Do “enough” calibrations – on official apps, you will be prompted for once or twice per day checks. On DIY systems you may not be, and should be careful about continuing without calibrations.
* If it all possible, calibrate with some of your readings in a lower range (4-5mmol/l or 72-90mg/dl) and some at a slightly higher level (7-9mmol/l or 126-160mg/dl) as this provides a better range for the point/slope calibration.

## Dexcom G6 & DIY systems

What’s clear is that using the G6 is perhaps a little more complex than it as first suggests. To use it safely, there are a few points to be aware of:

* If you are using the native data with the calibration code in xDrip or Spike, the safest thing to do is not allow preemptive restarts of the sensor.
* If you must use preemptive restarts, then make sure you insert at a time of day where you can observe the change and calibrate if necessary. 
* If you are restarting sensors, either do it without the factory calibration for safest results on days 11 and 12, or ensure you are ready to calibrate and keep an eye on variation.
* Pre-soaking of the G6 with factory calibration is likely to give variation in results. If you do pre-soak, then to get best results, you will probably need to calibrate the sensor.
* If you aren’t being observant about the changes that may be taking place, it may be better to revert to non-factory-calibrated mode and use the system like a G5.

To learn more about the details and reasons for these recommendations read the [complete article](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) published by Tim Street at [www.diabettech.com](http://www.diabettech.com).