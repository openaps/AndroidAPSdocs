# CareSens

Є різні способи використовувати дані CareSens з **AAPS**:

- xDrip
- Juggluco

**Примітка:** для підключення до AAPS вам не потрібен застосунок для стеження Sens365.

## 1. xDrip

1. Установіть і налаштуйте офіційний застосунок CareSens.
2. У застосунку CareSens перейдіть у settings -> Manage Data and Connections -> увімкніть перемикач xDrip. За бажанням вимкніть підключення даних до CareLevo, DIA:CONN, CloudLoop тощо в розділі «others».

![Підключення даних у застосунку CareSens](../images/eversenseapp-dataconnections.png)


2. Установіть xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip).
3. У xDrip перейдіть у settings -> hardware data source, виберіть `Companion App` як джерело даних.
4. В **AAPS** виберіть xDrip у [**Конфігурація → Джерело ГК**](#Config-Builder-bg-source).


## 2. Juggluco

1. Установіть застосунок Juggluco.
2. У Juggluco відкрийте ліве меню та виберіть `Photo`
3. Відскануйте QR-код на упаковці сенсора.
4. У лівому меню -> settings -> exchange data переконайтеся, що xDrip broadcast увімкнено.
5. В **AAPS** виберіть xDrip у [**Конфігурація → Джерело ГК**](#Config-Builder-bg-source).
