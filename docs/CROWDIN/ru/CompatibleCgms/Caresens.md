# CareSens

Есть разные способы использовать данные CareSens с **AAPS**:

- xDrip
- Juggluco

**Примечание:** для подключения к AAPS приложение для фолловеров Sens365 не нужно.

## 1. xDrip

1. Установите и настройте официальное приложение CareSens.
2. В приложении CareSens перейдите в settings -> Manage Data and Connections -> включите переключатель xDrip. If preferred, turn off the data connections to CareLevo, DIA:CONN, CloudLoop, etc. in "others".

![Подключения данных в приложении CareSens](../images/eversenseapp-dataconnections.png)


2. Install xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip).
3. In xDrip, go to settings -> hardware data source, select `Companion App` as data source.
4. In **AAPS**, select xDrip in [**Configuration → BG Source**](#Config-Builder-bg-source).


## 2. Juggluco

1. Установите приложение Juggluco.
2. В Juggluco откройте левое меню и выберите `Photo`
3. Отсканируйте QR-код на упаковке сенсора.
4. В левом меню -> settings -> exchange data проверьте, что xDrip broadcast включен.
5. In **AAPS**, select xDrip in [**Configuration → BG Source**](#Config-Builder-bg-source).
