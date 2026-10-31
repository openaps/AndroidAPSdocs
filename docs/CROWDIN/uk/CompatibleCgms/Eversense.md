# Eversense

Є чотири різні способи отримати значення з Eversense:

- ESEL у режимі companion
- ESEL у режимі patched
- xDrip як супутній застосунок (companion app)
- Читач сповіщень (вбудований в **AAPS**)

## ESEL

Завантажте та встановіть [застосунок ESEL](https://github.com/BernhardRo/Esel/tree/master/apk) згідно з цими [інструкціями](https://github.com/BernhardRo/Esel?tab=readme-ov-file#esel).

- В ESEL відкрийте меню з трьома крапками (⋮) вгорі праворуч і виберіть **Settings** (також доступно з меню ☰). У налаштуваннях:
  - Увімкніть "Send to AAPS and xDrip"
  - **Вимкніть** "Send to Nightscout"
  - Дані ГК з Eversense можуть бути зашумленими, тому рекомендовано увімкнути "Smooth Data" в ESEL.

![Трансляція ESEL (broadcast)](../images/ESEL.png)

### Режим Companion

Зчитує дані зі сповіщень застосунку Eversense (працює зі стандартним застосунком Eversense, доступно з версії ESEL 3.0.1).

1. Використовуйте офіційний застосунок Eversense з Google Play Store
   - Необов'язково, але потрібно для заповнення пропусків (backfill): увійдіть у свій обліковий запис Eversense
   - У розділі Sync увімкніть Auto synchronization
2. Налаштування ESEL:
   - Вимкніть налаштування "Get data from patched Eversense App"
   - Для заповнення пропусків (backfill): увімкніть "Fill missing data from eversensedms.com"
   - Як адресу Email і пароль укажіть дані для входу в Eversense
3. Виберіть "MM640g" як джерело ГК у [**Конфігурація → Джерело ГК**](#Config-Builder-bg-source).

### Змінений (patched) застосунок Eversense

 Потрібна змінена (patched) версія застосунку Eversense (працює повністю офлайн, включно із заповненням пропусків).

1. Видаліть застосунок Eversense (Увага: ваші локальні історичні дані (старші за 1 тиждень) буде втрачено!)

2. Установіть [змінений (patched) застосунок Eversense](https://cr4ck3d3v3r53n53.club) і використовуйте його так, як описав постачальник

   - Запустіть застосунок Eversense, увійдіть, підключіться до трансмітера та використовуйте його так само, як звичайний застосунок.

3. Налаштування ESEL:

   - Увімкніть налаштування "Get data from patched Eversense App"



![Трансляція ESEL (broadcast)](../images/ESELpatch.png)

Якщо ви вперше запускаєте ESEL з новим встановленням Eversense, перші значення можуть з'явитися в xDrip лише через 15 хв!

4. Виберіть "MM640g" як джерело ГК у [**Конфігурація → Джерело ГК**](#Config-Builder-bg-source).

## xDrip

xDrip може зчитувати сповіщення застосунку виробника, так само як ESEL. Заповнення пропусків (backfill) недоступне.

- Завантажте та встановіть xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip)
- Як джерело даних у xDrip потрібно вибрати “Companion App”.
- Виберіть xDrip у [**Конфігурація → Джерело ГК**](#Config-Builder-bg-source).
- Змініть налаштування xDrip згідно з поясненнями на сторінці [налаштувань xDrip](../CompatibleCgms/xDrip.md).
- Увімкніть [Експоненційне згладжування](../CompatibleCgms/SmoothingBloodGlucoseData.md) в AAPS.

## Notification Reader

**AAPS** може зчитувати значення глюкози прямо зі сповіщень офіційного застосунку Eversense, без жодного іншого застосунку між ними. Заповнення пропусків (backfill) недоступне.

- Виберіть **Читач сповіщень** у [**Конфігурація → Джерело ГК**](#Config-Builder-bg-source) і надайте **AAPS** доступ до сповіщень, коли з'явиться запит.
- Переконайтеся, що застосунок Eversense показує поточне значення глюкози у своєму сповіщенні.

```{warning}
Значення ГК не завжди надходять кожні 5 хвилин, можуть бути дублікати.
```