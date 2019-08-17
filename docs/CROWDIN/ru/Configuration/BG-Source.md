# Общие рекомендации по мониторингу

## Гигиена мониторинга

Вне зависимости от того, какой у вас мониторинг ГК - официальная система или самодельная, при калибровках следует соблюдать определенные правила.

* Убедитесь, что руки и комплект чисты.
* Старайтесь калибровать на ровных значениях ГК (обычно достаточно 15-30 минут с плоской шкалой)
* Избегайте калибровки при повышении или понижении уровня глюкозы. 
* По возможности проводите «достаточно» калибровок – на официальных приложениях раз или два раза за сутки появляется предложение откалибровать систему. В самодельных системах таких напоминаний не бывает, поэтому будьте осторожны если давно не делали калибровки.
* По возможности калибруйте, имея показания в нижнем диапазоне (4-5 ммоль/л или 72-90мг/дл.) а также в среднем (7-9 ммоль/л или 126-160мг/дл.), поскольку это обеспечивает более широкий охват диапазона калибровок.

# Источник данных ГК

## Для пользователей Dexcom

### Dexcom G6: Общие рекомендации по работе в замкнутом цикле

Подробности о настройке датчика Dexcom G6 и решении общих проблем с Dexcom G6 см. на стр. [Dexcom G6](../Configuration/Dexcom.md).

Применение G6 немного сложнее, чем казалось раньше. Для правильного применения необходимо иметь в виду следующие моменты:

* Если вы используете нативные данные с кодом калибровки в xDrip или Spike, в целях безопасности не следует разрешать упреждающий (preemptive) перезапуск датчика.
* Если все же упреждающие перезапуски необходимы, то они должны происходить в то время, когда есть возможность следить за изменениями и при необходимости калибровать. 
* Если вы перезапускаете сенсор, делайте это либо без заводской калибровки для безопасных результатов в дни 11 и 12, либо будьте готовы калибровать и следить за изменениями.
* "Предварительное погружение" (установка сенсора намного раньше его старта в приложении) G6 с заводской калибровкой приведет к отклонениям в данных. Если вы все же делаете "предварительное погружение", то для получения лучших результатов вам, вероятно, придется калибровать сенсор.
* Если вы не планируете отслеживать все возможные отклонения, то лучше вернуться к традиционному режиму калибровки и использовать систему как G5.

Подробнее о деталях и причинах этих рекомендаций читайте [полную статью](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) опубликованную в Tim Street на [www.diabettech.com](http://www.diabettech.com).

### При использовании G6 с xdrip+

* Если это еще не сделано, скачайте [xdrip](https://github.com/NightscoutFoundation/xDrip) и следуйте инструкциям на Nightscout ([G4 без share ](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 c share ](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* В конфигуратоге (настройки AndroidAPS) выберите xdrip.
* Настройте параметры xDrip+ в соответствии со [ страницей настроек xDrip+](../Configuration/xdrip.md)
* If AAPS does not receive BG values when phone is in airplane mode use `Identify receiver` as describe on [xDrip+ settings page](../Configuration/xdrip.md).

### При использовании G5 с xdrip+

* Если это еще не сделано, скачайте [xdrip](https://github.com/NightscoutFoundation/xDrip) и следуйте инструкциям на Nightscout ([G4 без share ](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 c share ](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* В xdrip перейдите в настройки > совместимость программ >локальная трансляция данных и выберите Включить (ON).
* В xdrip+ перейдите в настройки > совместимость программ > принимать назначения (Accept treatments) и выберите ВЫКЛ (OFF).
* Если вы хотите, чтобы AndroidAPS мог калибровать показания гликемии, в xdrip + перейдите в настройки > совместимость приложений > принимать калибровки (Accept calibrations) и выберите ВКЛ (ON). Возможно вы также захотите рассмотреть варианты калибровки в настройках > менее распространенные параметры > дополнительные параметры калибровки.
* В конфигуратоге (настройки AndroidAPS) выберите xdrip.
* If AAPS does not receive BG values when phone is in airplane mode use `Identify receiver` as describe on [xDrip+ settings page](../Configuration/xdrip.md).

### При использовании G5 или G6 с помощью модифицированного приложения Dexcom

* Скачайте apk с <https://github.com/dexcomapp/dexcomapp>, и выберите версию, которая соответствует вашим потребностям (mg/dl или mmol/l, G5 или G6).
* Если это еще не сделано, остановите сенсор и удалите оригинальное приложение Dexcom.
* Установите загруженное приложение
* Запустите сенсор
* В конфигуратоге (настройки AndroidAPS) выберите приложение Dexcom G5 (пропатченное).

### При использовании G4 с кабелем OTG («традиционный» Nightscout)…  


* Если это еще не сделано, скачайте загрузчик Nightscout из Play Store и следуйте инструкциям на [Nightscout](http://www.nightscout.info/wiki/welcome/basic-requirements).
* В настройках AndroidAPS введите адрес вашего веб-сайта Nightscout и пароль API secret.
* В конфигураторе (настройки AndroidAPS) выберите NSClient.

## Для пользователей Libre с адаптером Bluetooth  


Чтобы использовать Libre в качестве мониторинга, который получает новые данные каждые 5 минут, нужно сначала приобрести один из адаптеров NFC - Bluetooth:

* МяоМяо <https://www.miaomiao.cool/>
* Blukon Nightrider <https://www.ambrosiasys.com/howit>
* BlueReader <https://bluetoolz.de/blueorder/#home>
* Sony Smartwatch 3 (SWR50) <https://github.com/pimpimmi/LibreAlarm/wiki/>

### При использовании xdrip...  


* Если это еще не сделано, скачайте xdrip+ и следуйте инструкциям на [LimiTTEer](https://github.com/JoernL/LimiTTer), [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki) или [BlueReader](https://unendlichkeit.net/wordpress/?p=680&lang=en) ([Оборудование](https://bluetoolz.de/wordpress/)).
* В xdrip перейдите в настройки > совместимость программ >локальная трансляция данных и выберите Включить (ON).
* В xdrip+ перейдите в настройки > совместимость программ > принимать назначения (Accept treatments) и выберите ВЫКЛ (OFF).
* Если вы хотите, чтобы AndroidAPS мог калибровать показания гликемии, в xdrip + перейдите в настройки > совместимость приложений > принимать калибровки (Accept calibrations) и выберите ВКЛ (ON). Возможно вы также захотите рассмотреть варианты калибровки в настройках > менее распространенные параметры > дополнительные параметры калибровки.
* В конфигуратоге (настройки AndroidAPS) выберите xdrip.
* Для настройки xDrip+ со снимками экрана перейдите на [страницу настроек xDrip+](../Configuration/xdrip.md)

### При использовании Glimp...  


* Если это еще не сделано, скачайте Glimp и следуйте инструкциям на [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
* В конфигураторе (настройки AndroidAPS) выберите Glimp.

## Для пользователей Eversense  


Самым простым способом использования Eversense с AndroidAPS является установка модифицированного приложения [Eversense](https://github.com/BernhardRo/Esel/blob/master/apk/eversense_cgm_v1.0.409_com.senseonics.gen12androidapp-patched.apk) (предварительно удалив оригинальное приложения).

**Предупреждение: после удаления старого приложения, ваши локальные данные старше одной недели будут утрачены!**

Чтобы получить данные в AndroidAPS, необходимо установить [ESEL](https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk), там включить"Отправлятьть на AAPS и xDrip" и выбрать "MM640g" в качестве источника ГК в [Конфигураторе](../Configuration/Config-Builder.md) AndroidAPS. Поскольку данные СК от Eversense могут быть зашумленными, предпочтительнее включить "Smooth Data" (выправить данные) в ESEL, а не "Всегда использовать усредненную короткую дельту вместо простых данных".

Вы можете найти другую инструкцию для использования xDrip с Eversense [здесь](https://github.com/BernhardRo/Esel/tree/master/apk).

## Для пользователей MM640g или MM630g  


* Если это еще не сделано, скачайте [600SeriesAndroidUploader](http://pazaan.github.io/600SeriesAndroidUploader/) и следуйте инструкциям на [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g).
* В Загрузчике Серии 600, перейдите в настройки > отправить на xdrip + и выберите ВКЛ (ON).
* В конфигуратоге (настройки AndroidAPS) выберите MM640g.

## Для пользователей PocTech CT-100  


* Установите приложение PocTech
* В конфигуратоге (настройки AndroidAPS) выберите PocTech.

## Для пользователей других систем мониторинга, передающих данные в Nightscout  


Если у вас есть другая система мониторинга отправляющая даннные в [Nightscout](http://www.nightscout.info) тогда  


* В настройках AndroidAPS введите адрес вашего веб-сайта Nightscout и пароль API secret.
* В конфигураторе (настройки AndroidAPS) выберите NSClient.