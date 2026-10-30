# Dexcom G6 и ONE

## Основни неща най-напред

-   Следвайте общите препоръки за хигиена на CGM и поставяне на сензора [тук](../CompatibleCgms/GeneralCGMRecommendation.md).

## Общи съвети за затворена система с G6 и ONE

- Последните трансмитери G6, се наричат "Firefly". Те не позволяват рестартиране на сензора без премахване на предавателя, и не изпращат сурови (raw) данни.

- Ако рестартирате сензори, уверете се, че сте готови да калибрирате и следете за шум.

- Предварителното накисване (pre-soaking) на G6 с фабрично калибриране вероятно ще доведе до вариация в резултатите. Ако правите предварително накисване, за да получите най-добри резултати, вероятно ще трябва да калибрирате сензора.

Прочетете повече в [статията](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/), публикувана от Tim Street на [www.diabettech.com](https://www.diabettech.com).

## If using G6 or ONE with xDrip

- If not already set up, download [xDrip](https://github.com/NightscoutFoundation/xDrip) and adjust its settings following the [xDrip settings page](../CompatibleCgms/xDrip.md).
- Select xDrip in [**Configuration → BG Source**](#Config-Builder-bg-source).
- Трансмитерите на Dexcom G6 и ONE могат едновременно да бъдат свързани с приемника на Dexcom (или алтернативно с помпата t:slim) и едно приложение на телефона ви.
- When using xDrip as receiver uninstall the Dexcom app first. **You cannot connect xDrip and Dexcom app with the transmitter at the same time!**
- If you need Clarity and want to profit from xDrip alarms use the [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (only G6) with local broadcast to xDrip.
- You can also use xDrip as a companion app of the official Dexcom app, but you might experience delays in BG readings.
- xDrip always uses the transmitter's [native algorithm](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) with current transmitters; there is no reason to disable it. [Preemptive restarts](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) only function on old transmitters (firmware 1.6.5.25 or earlier), where they are needed to prevent the sensor stopping after 10 days; recent (Firefly) transmitters ignore them. See [Restart a sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html) before attempting any restart.
- Everything related to the sensor and transmitter themselves is documented on the [xDrip Dexcom page](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## Ако използвате G6 с Build Your Own Dexcom App

```{admonition} Old app version
:class: warning
Dexcom BYODA вече е много стара версия на приложението и не може да бъде обновявана.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) supports local broadcast to AAPS and/or xDrip

-   Това приложение ви позволява да използвате вашия Dexcom G6 с всеки Android смартфон.
-   Деинсталирайте оригиналното приложение Dexcom или пачнатото приложение Dexcom, ако сте използвали някое от тях преди (**не спирайте** текущо работещия сензор)
-   Инсталирайте изтегления apk
-   Въведете кода на сензора и серийния номер на трансмитера в пачнатото приложение.
-   В настройките на телефона отидете на apps > Dexcom G6 > permissions > additional permissions и натиснете 'Access Dexcom app'.
-   След кратко време BYODA трябва да улови сигнала на предавателя.

### Настройки за AAPS

-   Select **BYODA** in [**Configuration → BG Source**](#Config-Builder-bg-source).

-   If you don't receive any values select any other data source, then re-select **BYODA** to trigger the demand for permissions to establish the connection between AAPS and BYODA-broadcast.

### Settings for xDrip

-   Изберете '640G/Eversense' като източник на данни.
-   Command 'start sensor' must be performed in xDrip in order to receive values. Това няма да засегне текущия ви сензор, управляван от Build Your Own Dexcom App.


(DexcomG6-troubleshooting-g6)=
## Отстраняване на проблеми с G6 и ONE

### Отстраняване на проблеми, специфични за Dexcom G6/ONE

-   Превъртете надолу до **Troubleshooting** [тук](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Отстраняване на основни проблеми

За отстраняване на проблеми с повечето CGM устройства може да намерите инфо [тук](#general-cgm-troubleshooting).

### Нов трансмитер с работещ сензор

Ако се случи да смените трансмитер по време на текуща сесия на сензор, можете да опитате да премахнете трансмитеря, без да повредите основата на сензора. Видео можете да намерите [тук](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Ако вместо това изберете [това решение](https://youtu.be/tx-kTsrkNUM), трябва да внимавате да избегнете [повреждане на контактите на сензора](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html), с лентата.
