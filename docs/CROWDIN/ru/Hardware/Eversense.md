# Для пользователей Eversense

The easiest way to use Eversense with AndroidAPS is to install the EU or US modified [Eversense app](https://cr4ck3d3v3r53n53.club/) (and uninstall the original one first).

**Warning: by uninstalling the old app, your local historical data older than one week will be lost!**

To finally get your data to AndroidAPS, you need to install [ESEL](https://github.com/BernhardRo/Esel/releases) and enable "Send to AAPS and xDrip" in ESEL and "MM640g" as BG source in the [Configuration Builder](../Configuration/Config-Builder.md) in AndroidAPS. Поскольку данные СК от Eversense могут быть зашумленными, рекомендуется включить "Smooth Data" (сглаживать данные), а не "Всегда использовать усредненную короткую дельту вместо простых данных".

You can find the instruction for using xDrip with an Eversense [here](https://github.com/BernhardRo/Esel/tree/master/apk).
