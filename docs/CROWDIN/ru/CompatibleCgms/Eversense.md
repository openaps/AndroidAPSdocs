- - -
orphan: true
- - -

# Для пользователей Eversense

Существует три различных способа получения данных от Eversense:

- Режим спутника ESEL
- Режим модифицированного приложения ESEL
- Приложение спутника xDrip+

## ESEL

Скачайте и установите приложение [ESEL app](https://github.com/BernhardRo/Esel/tree/master/apk), следуя этим [инструкциям](https://github.com/BernhardRo/Esel?tab=readme-ov-file#esel).

- Включите "Транслировать в AAPS и xDrip"
- **Отключите** "Отправлять в Nightscout"
- Поскольку данные ГК из Eversense могут быть зашумленными, рекомендуется включить "Сглаживать данные" в ESEL.

![трансляция ESEL](../images/ESEL.png)

### Режим спутника

Считывает данные из уведомлений Eversense (работает со стандартным приложением Eversense начиная с ESEL версии 3.0.1).

1. Используйте официальное приложение Eversense из Google Play Store
   - Необязательно, но желательно для обратного заполнения пропущенных данных: войти в учетную запись Eversense
   - В Синхронизации, включить автосинхронизацию
2. Конфигурация ESEL:
   - Отключить настройку «Получать данные из модифицированного приложения Eversense»
   - Для обратного заполнения: включите «Заполнять недостающие данные из eversensedms.com»
   - Provide as Email address and password your Eversense login data
3. Set "MM640g" as BG source in in [ConfigBuilder, BG Source](#Config-Builder-bg-source).

### Patched Eversense App

 Requires a patched version of the Eversense App (works completely offline, including backfilling).

1. Uninstall the Eversense App (Warning: your local historical data (older than 1 week) will be lost!)

2. Install the [patched Eversense app](https://cr4ck3d3v3r53n53.club) and use it as described by the vendor

   - Start the Eversense App, login, connect to your transmitter and use it just like the normal app.

3. Конфигурация ESEL:

   - Enable the setting "Get data from patched Eversense App"



![трансляция ESEL](../images/ESELpatch.png)

​       If you run ESEL with a fresh installation of Eversense for the first time, it can take up to 15min until your first values appear in xDrip!

4. Set "MM640g" as BG source in in [ConfigBuilder, BG Source](#Config-Builder-bg-source).

## xDrip +

xDrip+ can read notifications from the vendor app, like ESEL does. No backfilling available.

- Скачайте и установите xDrip+: [xDrip](https://github.com/NightscoutFoundation/xDrip)
- As data source in xDrip+ “Companion App” must be selected.
- В [Конфигураторе, Источник ГК](#Config-Builder-bg-source) выберите xDrip+.
- Adjust the xDrip+ settings according to the explanations on the xDrip+ settings page [xDrip+ settings](../CompatibleCgms/xDrip.md).
- Enable [Exponential Smoothing](../CompatibleCgms/SmoothingBloodGlucoseData.md) in AAPS.

```{warning}
BG values reading frequency is not always 5 minutes and duplicates can occur.
```