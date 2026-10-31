# CareSens

Има различни начини за използване на данните от CareSens с **AAPS**:

- xDrip
- Juggluco

**Забележка:** Не е необходимо приложението Sens365 follower, за да се свържете с AAPS.

## 1. xDrip

1. Инсталирайте и настройте официалното приложение CareSens.
2. В приложението CareSens отидете в настройки -> Manage Data and Connections -> включете превключвателя xDrip. If preferred, turn off the data connections to CareLevo, DIA:CONN, CloudLoop, etc. in "others".

![Връзки за данни на приложението CareSens](../images/eversenseapp-dataconnections.png)


2. Инсталирайте xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip).
3. В xDrip отидете в settings -> hardware data source и изберете `Companion App` като източник на данни.
4. В **AAPS** изберете xDrip в [**Конфигурация → Източник на КЗ**](#Config-Builder-bg-source).


## 2. Juggluco

1. Инсталирайте приложението Juggluco.
2. В Juggluco отворете лявото меню и изберете `Photo`
3. Сканирайте QR кода върху кутията на сензора.
4. В лявото меню -> settings -> exchange data проверете дали xDrip broadcast е включен.
5. В **AAPS** изберете xDrip в [**Конфигурация → Източник на КЗ**](#Config-Builder-bg-source).
