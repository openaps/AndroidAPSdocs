Dexcom G6
************
Сначала основное
===============

* Следуйте общим рекомендациям по гигиене и настройкам мониторинга `здесь <../Hardware/GeneralCGMRecommendation.html>`_.
* Для Трансмиттеров G6, изготовленных после осени/конца 2018 года выберите одну из `последних ночных сборок xDrip+ <https://github.com/NightscoutFoundation/xDrip/releases>`_. У этих трансмиттеров новая прошивка и стабильная версия xDrip+ (2019/01/10) с ней не работает.

Общие рекомендации по использованию G6 с системами ИПЖ
================================

Применение G6 немного сложнее, чем казалось раньше. Для правильного применения необходимо иметь в виду следующие моменты: 

* Если вы используете нативные данные с кодом калибровки в xDrip или Spike, в целях безопасности не следует разрешать упреждающий (preemptive) перезапуск датчика.
* Если все же упреждающие перезапуски необходимы, то устанавливайте сенсор в то время, когда есть возможность следить за изменениями и при необходимости калибровать. 
* Если вы перезапускаете сенсор, в целях безопасности делайте это либо без заводской калибровки в дни 11 и 12, либо будьте готовы калибровать и следить за изменениями.
"Предварительное замачивание" (установка сенсора намного раньше его старта в приложении) G6 с заводской калибровкой приведет к отклонениям в данных. Если вы все же делаете "предварительное погружение", то для получения лучших результатов вам, вероятно, придется калибровать сенсор.
* Если вы не планируете отслеживать все возможные отклонения, то лучше вернуться к традиционному режиму калибровки и использовать систему как G5.

Подробнее о деталях и причинах этих рекомендаций читайте полную статью <http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/>_опубликованную в Tim Street на`www.diabettech.com <http://www.diabettech.com>_.

При использовании G6 с xdrip+
===============================

* If not already set up then download `xdrip <https://github.com/NightscoutFoundation/xDrip>`_ and follow instructions on nightscout (`G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>`_).
В конфигуратоге (настройки AndroidAPS) выберите xdrip.
* Adjust settings in xDrip+ according to `xDrip+ settings page <../Configuration/xdrip.html>`_
* If AAPS does not receive BG values when phone is in airplane mode use `Identify receiver` as describe on `xDrip+ settings page <../Configuration/xdrip.html>`_.

If using G6 with patched Dexcom app
=========================================================
* Download the apk from `https://github.com/dexcomapp/dexcomapp <https://github.com/dexcomapp/dexcomapp>`_, and choose the version that fits your needs (mg/dl or mmol/l version, G6).
* Oстановите сенсор и удалите оригинальное приложение Dexcom.
* Установите загруженное приложение
* Запустите сенсор
* В конфигуратоге (настройки AndroidAPS) выберите Dexcom G5 App (модифицированное).

Troubleshooting G6
====================

General Troubleshoothing for CGMs can be found `here <./GeneralCGMRecommendation.html#Troubleshooting>`_.

Установка нового трансмиттера на работающий сенсор
--------------------------------------
Если вы меняете трансмиттер во время работы сенсора, вы можете попробовать снять его, не повредив платформу сенсора. A video can be found at `https://youtu.be/AAhBVsc6NZo <https://youtu.be/AAhBVsc6NZo>`_.


