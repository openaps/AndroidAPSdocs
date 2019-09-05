Dexcom G5
**********
При использовании G5 с xdrip+
===========================
* Если это еще не сделано, скачайте <https://github.com/NightscoutFoundation/xDrip>_и следуйте инструкциям на Nightscout (G5<http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>_.
В xdrip перейдите в настройки > совместимость программ >локальная трансляция данных и выберите Включить (ON).
В xdrip+ перейдите в настройки > совместимость программ > принимать назначения (Accept treatments) и выберите ВЫКЛ (OFF).
Если хотите, чтобы AndroidAPS мог калибровать показания гликемии, в xdrip + перейдите в настройки > совместимость приложений > принимать калибровки (Accept calibrations) и выберите ВКЛ (ON).  Возможно вы также захотите рассмотреть варианты калибровки в настройках > менее распространенные параметры > дополнительные параметры калибровки.
В конфигуратоге (настройки AndroidAPS) выберите xdrip.
* If AAPS does not receive BG values when phone is in airplane mode use `Identify receiver` as describe on [xDrip+ settings page](../Configuration/xdrip.md).

If using G5 with patched Dexcom app
=========================================================
* Download the apk from `https://github.com/dexcomapp/dexcomapp <https://github.com/dexcomapp/dexcomapp>`_, and choose the version that fits your needs (mg/dl or mmol/l version, G5).
* Stop sensor and uninstall the original Dexcom app, if not already done.
* Install downloaded apk
* Start sensor
* Select DexcomG5 App (patched) in ConfigBuilder (setting in AndroidAPS).
