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

### При использовании G5 с xdrip+

* Если это еще не сделано, скачайте [xdrip](https://github.com/NightscoutFoundation/xDrip) и следуйте инструкциям на Nightscout ([G4 без share ](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 c share ](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* В xdrip перейдите в настройки > совместимость программ >локальная трансляция данных и выберите Включить (ON).
* В xdrip+ перейдите в настройки > совместимость программ > принимать назначения (Accept treatments) и выберите ВЫКЛ (OFF).
* Если вы хотите, чтобы AndroidAPS мог калибровать показания гликемии, в xdrip + перейдите в настройки > совместимость приложений > принимать калибровки (Accept calibrations) и выберите ВКЛ (ON). Возможно вы также захотите рассмотреть варианты калибровки в настройках > менее распространенные параметры > дополнительные параметры калибровки.
* В конфигуратоге (настройки AndroidAPS) выберите xdrip.

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


To use your Libre as a CGM that is getting new BG values every 5 minutes you first need to buy a NFC to Bluetooth adapter like:

* MiaoMiao-Reader <https://www.miaomiao.cool/>
* Blukon Nightrider <https://www.ambrosiasys.com/howit>
* BlueReader <https://bluetoolz.de/blueorder/#home>
* Sony Smartwatch 3 (SWR50) als Auslesetool <https://github.com/pimpimmi/LibreAlarm/wiki/>

### If using xdrip...  


* If not already set up then download xdrip and follow instructions on [LimiTTEer](https://github.com/JoernL/LimiTTer), [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki) or [BlueReader](https://unendlichkeit.net/wordpress/?p=680&lang=en)([Hardware](https://bluetoolz.de/wordpress/)).
* В xdrip перейдите в настройки > совместимость программ >локальная трансляция данных и выберите Включить (ON).
* В xdrip+ перейдите в настройки > совместимость программ > принимать назначения (Accept treatments) и выберите ВЫКЛ (OFF).
* Если вы хотите, чтобы AndroidAPS мог калибровать показания гликемии, в xdrip + перейдите в настройки > совместимость приложений > принимать калибровки (Accept calibrations) и выберите ВКЛ (ON). Возможно вы также захотите рассмотреть варианты калибровки в настройках > менее распространенные параметры > дополнительные параметры калибровки.
* В конфигуратоге (настройки AndroidAPS) выберите xdrip.
* For settings in xDrip+ with screenshots see [xDrip+ settings page](../Configuration/xdrip.md)

### If using Glimp...  


* If not already set up then download Glimp and follow instructions on [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
* Select Glimp in ConfigBuilder (setting in AndroidAPS).

## For users of Eversense  


The easiest way to use Eversense with AndroidAPS is to install the modified [Eversense app](https://github.com/BernhardRo/Esel/blob/master/apk/mod_com.senseonics.gen12androidapp-release.apk) (and unistall the original one first).

**Warning: by uninstalling the old app, your local historical data older than one week will be lost!**

To finally get your data to AndroidAPS, you need to install [ESEL](https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk) and enable "Send to AAPS and xDrip" in ESEL and "MM640g" as BG source in the [Configuration Builder](../Configuration/Config-Builder.md) in AndroidAPS. As the BG data from Eversense can be noisy sometimes, it is good to enable "Smooth Data" in ESEL, which is better than enabling "Always use short average delta instead of simple delta" in AAPS.

You can find another instruction for using xDrip with an Eversense [here](https://github.com/BernhardRo/Esel/tree/master/apk).

## For users of MM640g or MM630g  


* If not already set up then download [600SeriesAndroidUploaer](http://pazaan.github.io/600SeriesAndroidUploader/) and follow instructions on [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g).
* In 600 Series Uploader go to Settings > Send to xdrip+ and select ON (tick).
* Select MM640g in ConfigBuilder (setting in AndroidAPS).

## For users of PocTech CT-100  


* Install PocTech App
* Select PocTech App in ConfigBuilder (setting in AndroidAPS).

## For users of other CGM uploaded to Nightscout  


If you have any other CGM set up that sends your data to [Nightscout](http://www.nightscout.info) then  


* В настройках AndroidAPS введите адрес вашего веб-сайта Nightscout и пароль API secret.
* В конфигураторе (настройки AndroidAPS) выберите NSClient.