# Dexcom G6 and ONE

## Сначала основное

-   Follow general CGM hygiene and setting sensor recommendation [here](../CompatibleCgms/GeneralCGMRecommendation.md).

## General hints for looping with G6 and ONE

- Новые передатчики называются Firefly (светлячок). Сенсоры не могут быть перезапущены без снятия передатчика, данные которого не могут быть сброшены, сенсоры также не генерируют необработанные данные.

- Если вы перезапускаете сенсоры, будьте готовы калибровать и следить за вариацией.

- Pre-soaking of the G6/ONE with factory calibration is likely to give variation in results. Если вы все же делаете "предварительное погружение", то для получения лучших результатов вам, вероятно, придется калибровать сенсор.

Подробнее в [статье](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) опубликованной Tim Street на сайте [www.diabettech.com](https://www.diabettech.com).

## If using G6 or ONE with xDrip+

- Если у вас трансмиттер Firefly, то упреждающие перезапуски **игнорируются**.
- При использовании перезаряженного рансмиттера упреждающий перезапуск **не требуется**.
-   Если вы используете старый трансмиттер с замененными батареями, самое безопасное - **отключить** [упреждающий перезапуск](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html). Хотя, в этом случае придется использовать G6 не в-[нативном режиме](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) (что нежелательно, так как отключает заводскую калибровку и не фильтрует зашумленные данные), в ином случае сенсор остановится через 10 дней.
-   The Dexcom G6 and ONE transmitters can simultaneously be connected to the Dexcom receiver (or alternatively the t:slim pump) and one app on your phone.
-   При использовании xDrip+ в качестве считывателя сначала удалите приложение Dexcom. **Невозможно одновременно подключить к трансмиттеру приложения xDrip+ и Dexcom!**
-   If you need Clarity and want to profit from xDrip+ alarms use the [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (only G6) with local broadcast to xDrip+.
-   You can also use xDrip+ as a companion app of the official Dexcom app, but you might experience delays in BG readings.
-   If not already set up, download [xDrip+](https://github.com/NightscoutFoundation/xDrip) and follow the instructions on [xDrip+ settings page](../CompatibleCgms/xDrip.md).
-   Select xDrip+ in in [ConfigBuilder, BG Source](#Config-Builder-bg-source).

- Adjust settings in xDrip+ according to [xDrip+ settings page](../CompatibleCgms/xDrip.md)

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## При использовании G6 с созданием собственного Dexcom приложения

-   [Самостоятельно собранное приложение Dexcom](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) также поддерживает локальную трансляцию в AAPS и/или xDrip+ (кроме сенсоров G5/ONE/G7)

![Настройки трансляции от самостоятельно собранного приложения BYODA](../images/BYODA.png)

-   Это приложение позволяет использовать Dexcom G6 с любым смартфоном Android.
-   Удалите оригинальное приложение Dexcom или модифицированное приложение Dexcom, если пользовались ими ранее (**не останавливайте** уже работающий сенсор)
-   Установите загруженное приложение
-   * Введите код сенсора и серийный номер трансмиттера в модифицированном приложении.
-   В настройках телефона перейдите к приложению > Dexcom G6> > разрешения >> дополнительные разрешения и нажмите 'Получать доступ к приложению Dexcom'.
-   Через некоторое время приложение должно подхватить сигнал трансмиттера.

### Настройки для AAPS

-   Select 'Dexcom App (patched)' in in [ConfigBuilder, BG Source](#Config-Builder-bg-source).

-   Если данные не поступают, выберите любой другой источник данных, а затем снова выберите 'приложение Dexcom (модифицированное)', чтобы запустить запросы разрешений на установление соединения между AAPS и самостоятельно собранным приложением Dexcom.

### Настройки для xDrip+

-   Выберите '640G/Eversense' в качестве источника данных.
-   Для получения данных необходимо выполнить команду 'эапустить сенсор' в xDrip+. Это не повлияет на сенсор контролируемый самостоятельно собранным приложением Dexcom.


(DexcomG6-troubleshooting-g6)=
## Troubleshooting G6 and ONE

### Dexcom G6/ONE specific troubleshooting

-   Прокрутите до **Устранения неполадок** [сюда](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Устранение неполадок - общее

General Troubleshooting for CGMs can be found [here](#general-cgm-troubleshooting).

### Установка нового трансмиттера на работающий сенсор

Если вы меняете трансмиттер во время работы сенсора, вы можете попробовать снять его, не повредив платформу сенсора. [Здесь](https://navid200.github.io/xDrip/docs/Remove-transmitter.html) можно просмотреть видео. Если вы выберете [данное решение](https://youtu.be/tx-kTsrkNUM) не допустите [повреждения контактов сенсора полоской](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html).
