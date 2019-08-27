**General CGM recommendations**

**CGM hygiene**

Whichever CGM system you are using, if you are going to use blood based calibration, then there are some very clear rules you should apply, whether or not you are using DIY CGM software or the official apps.

* Убедитесь, что руки и комплект чисты.
* Старайтесь калибровать на ровных значениях ГК (обычно достаточно 15-30 минут с плоской шкалой)
* Избегайте калибровки при повышении или понижении уровня глюкозы. 
* По возможности проводите «достаточно» калибровок – на официальных приложениях раз или два раза за сутки появляется предложение откалибровать систему. В самодельных системах таких напоминаний не бывает, поэтому будьте осторожны если давно не делали калибровки.
* По возможности калибруйте, имея показания в нижнем диапазоне (4-5 ммоль/л или 72-90мг/дл.) а также в среднем (7-9 ммоль/л или 126-160мг/дл.), поскольку это обеспечивает более широкий охват диапазона калибровок.

# BG source / Источник данных ГК

## Smoothing blood glucose

AAPS works best when the blood glucose data it receives is smooth and consistent. Some features like 'Enable SMB always' and 'Enable SMB after carbs' can only be used with a nice-filtering BG source.

### Dexcom G5 App (patched)

When using Dexcom G5 App (patched) your BG data is smooth and consistent. There are no restrictions in using SMB.

### xDrip+ with Dexcom G5

Smooth enough data is only delivered if you use xDrip G5 'OB1 collector in native mode'.

### xDrip+ with Freestyle Libre

When using xDrip+ as your data source for Freestyle Libre values until now you cannot activate 'Enable SMB always' and 'Enable SMB after carbs' within SMB because the BG values are not smooth enough. Except this, there are a couple of things you can do to help reduce noise in the data.

**Smooth Sensor Noise.** In xDrip+ Settings > xDrip+ Display Settings ensure that Smooth Sensor Noise is turned on. This attempts to apply smoothing to noisy data.

**Smooth Sensor Noise (Ultrasensitive).** If you are still seeing noisy data in xDrip+ you can apply more aggressive smoothing using the Smooth Sensor Noise (Ultrasensitive) setting. This will attempt to apply smoothing even on very low levels of detected noise. To do this, first [enable engineering mode in xDrip+](../Enabling-Engineering-Mode-in-xDrip.md). Then navigate to Settings > xDrip+ Display Settings and turn on Smooth Sensor Noise (Ultrasensitive).

## Для пользователей Dexcom

### Dexcom G6: General hints for looping

See [Dexcom G6 page](../Configuration/Dexcom.md) for details on setting Dexcom G6 sensor and solutions for common difficulties with Dexcom G6.

Применение G6 немного сложнее, чем казалось раньше. Для правильного применения необходимо иметь в виду следующие моменты:

* Если вы используете нативные данные с кодом калибровки в xDrip или Spike, в целях безопасности не следует разрешать упреждающий (preemptive) перезапуск датчика.
* Если все же упреждающие перезапуски необходимы, то они должны происходить в то время, когда есть возможность следить за изменениями и при необходимости калибровать. 
* Если вы перезапускаете сенсор, делайте это либо без заводской калибровки для безопасных результатов в дни 11 и 12, либо будьте готовы калибровать и следить за изменениями.
* "Предварительное погружение" (установка сенсора намного раньше его старта в приложении) G6 с заводской калибровкой приведет к отклонениям в данных. Если вы все же делаете "предварительное погружение", то для получения лучших результатов вам, вероятно, придется калибровать сенсор.
* Если вы не планируете отслеживать все возможные отклонения, то лучше вернуться к традиционному режиму калибровки и использовать систему как G5.

Подробнее о деталях и причинах этих рекомендаций читайте [полную статью](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) опубликованную в Tim Street на [www.diabettech.com](http://www.diabettech.com).

### If using G6 with xdrip+

* Если это еще не сделано, скачайте [xdrip](https://github.com/NightscoutFoundation/xDrip) и следуйте инструкциям на Nightscout ([G4 без share ](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 c share ](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* В конфигуратоге (настройки AndroidAPS) выберите xdrip.
* Настройте параметры xDrip+ в соответствии со [ страницей настроек xDrip+](../Configuration/xdrip.md)
* Если AAPS не получает значения ГК, когда телефон находится в режиме авиаперелета пользуйтесь функцией `Идентифицировать приемник` в соответствии с описанием на странице [настроек xDrip+](../Configuration/xdrip.md).

### If using G5 with xdrip+

* Если это еще не сделано, скачайте [xdrip](https://github.com/NightscoutFoundation/xDrip) и следуйте инструкциям на Nightscout ([G4 без share ](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 c share ](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* В xdrip перейдите в настройки > совместимость программ >локальная трансляция данных и выберите Включить (ON).
* В xdrip+ перейдите в настройки > совместимость программ > принимать назначения (Accept treatments) и выберите ВЫКЛ (OFF).
* Если вы хотите, чтобы AndroidAPS мог калибровать показания гликемии, в xdrip + перейдите в настройки > совместимость приложений > принимать калибровки (Accept calibrations) и выберите ВКЛ (ON). Возможно вы также захотите рассмотреть варианты калибровки в настройках > менее распространенные параметры > дополнительные параметры калибровки.
* В конфигуратоге (настройки AndroidAPS) выберите xdrip.
* Если AAPS не получает значения ГК, когда телефон находится в режиме авиаперелета пользуйтесь функцией `Идентифицировать приемник` в соответствии с описанием на странице [настроек xDrip+](../Configuration/xdrip.md).

### If using G5 or G6 with patched Dexcom app

* Скачайте apk с <https://github.com/dexcomapp/dexcomapp>, и выберите версию, которая соответствует вашим потребностям (mg/dl или mmol/l, G5 или G6).
* Если это еще не сделано, остановите сенсор и удалите оригинальное приложение Dexcom.
* Установите загруженное приложение
* Запустите сенсор
* В конфигуратоге (настройки AndroidAPS) выберите приложение Dexcom G5 (пропатченное).

### If using G4 with OTG cable ('traditional' Nightscout)…  


* Если это еще не сделано, скачайте загрузчик Nightscout из Play Store и следуйте инструкциям на [Nightscout](http://www.nightscout.info/wiki/welcome/basic-requirements).
* В настройках AndroidAPS введите адрес вашего веб-сайта Nightscout и пароль API secret.
* В конфигураторе (настройки AndroidAPS) выберите NSClient.

## Для пользователей Libre с адаптером Bluetooth  


To use your Libre as a CGM that is getting new BG values every 5 minutes you first need to buy a NFC to Bluetooth adapter like:

* МяоМяо <https://www.miaomiao.cool/>
* Blukon Nightrider <https://www.ambrosiasys.com/howit>
* BlueReader <https://bluetoolz.de/blueorder/#home>
* Sony Smartwatch 3 (SWR50) <https://github.com/pimpimmi/LibreAlarm/wiki/>

### If using xdrip...  


* Если это еще не сделано, скачайте xdrip+ и следуйте инструкциям на [LimiTTEer](https://github.com/JoernL/LimiTTer), [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki) или [BlueReader](https://unendlichkeit.net/wordpress/?p=680&lang=en) ([Оборудование](https://bluetoolz.de/wordpress/)).
* В xdrip перейдите в настройки > совместимость программ >локальная трансляция данных и выберите Включить (ON).
* В xdrip+ перейдите в настройки > совместимость программ > принимать назначения (Accept treatments) и выберите ВЫКЛ (OFF).
* Если вы хотите, чтобы AndroidAPS мог калибровать показания гликемии, в xdrip + перейдите в настройки > совместимость приложений > принимать калибровки (Accept calibrations) и выберите ВКЛ (ON). Возможно вы также захотите рассмотреть варианты калибровки в настройках > менее распространенные параметры > дополнительные параметры калибровки.
* В конфигуратоге (настройки AndroidAPS) выберите xdrip.
* Для настройки xDrip+ со снимками экрана перейдите на [страницу настроек xDrip+](../Configuration/xdrip.md)
* Если AAPS не получает значения ГК, когда телефон находится в режиме авиаперелета пользуйтесь функцией `Идентифицировать приемник` в соответствии с описанием на странице [настроек xDrip+](../Configuration/xdrip.md).

### If using Glimp...  


* Если это еще не сделано, скачайте Glimp и следуйте инструкциям на [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
* В конфигураторе (настройки AndroidAPS) выберите Glimp.

## Для пользователей Eversense  


The easiest way to use Eversense with AndroidAPS is to install the modified [Eversense app](https://github.com/BernhardRo/Esel/blob/master/apk/eversense_cgm_v1.0.409_com.senseonics.gen12androidapp-patched.apk) (and unistall the original one first).

**Warning: by uninstalling the old app, your local historical data older than one week will be lost!**

To finally get your data to AndroidAPS, you need to install [ESEL](https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk) and enable "Send to AAPS and xDrip" in ESEL and "MM640g" as BG source in the [Configuration Builder](../Configuration/Config-Builder.md) in AndroidAPS. As the BG data from Eversense can be noisy sometimes, it is good to enable "Smooth Data" in ESEL, which is better than enabling "Always use short average delta instead of simple delta" in AAPS.

You can find another instruction for using xDrip with an Eversense [here](https://github.com/BernhardRo/Esel/tree/master/apk).

## Для пользователей MM640g или MM630g  


* Если это еще не сделано, скачайте [600SeriesAndroidUploader](http://pazaan.github.io/600SeriesAndroidUploader/) и следуйте инструкциям на [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g).
* В Загрузчике Серии 600, перейдите в настройки > отправить на xdrip + и выберите ВКЛ (ON).
* В конфигуратоге (настройки AndroidAPS) выберите MM640g.

## Для пользователей PocTech CT-100  


* Установите приложение PocTech
* В конфигуратоге (настройки AndroidAPS) выберите PocTech.

## Для пользователей других систем мониторинга, передающих данные в Nightscout  


If you have any other CGM set up that sends your data to [Nightscout](http://www.nightscout.info) then  


* В настройках AndroidAPS введите адрес вашего веб-сайта Nightscout и пароль API secret.
* В конфигураторе (настройки AndroidAPS) выберите NSClient.