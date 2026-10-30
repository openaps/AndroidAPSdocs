# CareSens

Има различни начини за използване на данните от CareSens с **AAPS**:

- xDrip
- Juggluco

**Забележка:** Не е необходимо приложението Sens365 follower, за да се свържете с AAPS.

## 1. xDrip

1. Инсталирайте и настройте официалното приложение CareSens.
2. В приложението CareSens, отидете в настройки - > Manage Data and Connections -> включете xDrip switch. Ако желаете, изключете информационните връзки към CareLevo, DIA:CONN, CloudLoop и т.н. в „Others“.

![Връзки за данни на приложението CareSens](../images/eversenseapp-dataconnections.png)


2. Install xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip).
3. In xDrip, go to settings -> hardware data source, select `Companion App` as data source.
4. In **AAPS**, select xDrip in [**Configuration → BG Source**](#Config-Builder-bg-source).


## 2. Juggluco

1. Инсталирайте приложенето Jugglico.
2. В Juggluco, отворете менюто от ляво и изберете `Photo`
3. Сканирайте QR кода върху кутията на сензора.
4. В лявото меню -> настройки -> размяна на данни, проверете, че xDrip broadcast е включено.
5. In **AAPS**, select xDrip in [**Configuration → BG Source**](#Config-Builder-bg-source).
