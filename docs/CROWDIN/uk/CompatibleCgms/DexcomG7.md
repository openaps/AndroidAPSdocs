# Dexcom G7, ONE+ і Stelo


## Спочатку основи

Важливо: системи G7, ONE+ і Stelo, на відміну від G6, не згладжують значення ні в застосунку, ні в приймачі. Докладніше про це [тут](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

```{admonition} Smoothing method 
Прочитайте рекомендації щодо [методу згладжування](../CompatibleCgms/SmoothingBloodGlucoseData.md) для Dexcom G7/ONE+/Stelo
```

## 1. xDrip (пряме підключення до G7, ONE+ або Stelo)

- xDrip сам підключається до сенсора: видаліть застосунок Dexcom, бо до сенсора може підключитися лише один застосунок. Щоб залишити застосунок Dexcom, використовуйте натомість [xDrip як супутній застосунок (Companion App)](#DexcomG7-xdrip-companion-app).
- Дотримуйтеся інструкцій тут: [xDrip G7, ONE+ і Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7.html). Потрібна нова версія xDrip — мінімальну версію дивіться на сторінці за посиланням.
- Виберіть xDrip у [**Конфігурація → Джерело ГК**](#Config-Builder-bg-source).

- Змініть налаштування xDrip згідно з поясненнями на сторінці [налаштувань xDrip](../CompatibleCgms/xDrip.md).

## 2. Build Your Own Dexcom App (лише G7)

```{admonition} Old app version
:class: warning
Dexcom BYODA — це вже дуже стара версія застосунку, її не можна оновити. Недоступно для ONE+ і Stelo.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) підтримує локальну трансляцію (local broadcast) в AAPS

-   Цей застосунок дозволяє використовувати ваш Dexcom G7 з будь-яким смартфоном Android.
-   Видаліть оригінальний застосунок Dexcom
-   Установіть завантажений apk
-   Введіть код сенсора в зміненому (patched) застосунку
-   After a short time BYODA should pick up the sensor signal.

(DexcomG7-xdrip-companion-app)=

## 3. xDrip як супутній застосунок (Companion App) (G7, ONE+ і Stelo)

Офіційний застосунок Dexcom залишається підключеним до сенсора. xDrip зчитує значення глюкози зі сповіщень застосунку Dexcom і надсилає їх в **AAPS**.

```{admonition} Not a trusted data source
:class: note
**AAPS** не вважає xDrip у режимі Companion App [надійним джерелом даних ГК](#GettingStarted-TrustedBGSource): SMB дозволені не весь час.
```

### Зчитування сповіщень застосунку Dexcom

- Залиште застосунок Dexcom встановленим і підключеним до сенсора. Його сповіщення мають залишатися видимими: не вимикайте їх звук і не приховуйте їх.
- Завантажте та встановіть [xDrip](https://github.com/NightscoutFoundation/xDrip). Використовуйте в xDrip ті самі одиниці глюкози, що й у застосунку Dexcom.
- У xDrip перейдіть у **Settings** > **Hardware Data Source** і виберіть **Companion App**.

  ![xDrip Hardware Data Source: Companion App](../images/xDrip_Companion_DataSource.png)

- xDrip запитує дозвіл на читання сповіщень. Натисніть **OK**, потім виберіть у списку **xDrip** і увімкніть **Allow notification access** (дозволити доступ до сповіщень).

  ![Список доступу до сповіщень](../images/xDrip_Companion_NotificationAccess1.png)

- Якщо **Allow notification access** неактивний (*Controlled by Restricted Setting*), Android блокує його, бо xDrip встановлено не з Play Store:

  ![Доступ до сповіщень обмежено налаштуванням з обмеженнями](../images/xDrip_Companion_Restricted.png)

  Відкрийте інформацію про застосунок xDrip (довго натисніть на значок xDrip > **App info**), натисніть меню з трьома крапками вгорі праворуч і виберіть **Allow restricted settings** (дозволити налаштування з обмеженнями). Потім поверніться на екран доступу до сповіщень і дозвольте його.

  ![Інформація про застосунок: дозволити налаштування з обмеженнями](../images/xDrip_Companion_AllowRestricted.png)

  ![Доступ до сповіщень для xDrip дозволено](../images/xDrip_Companion_NotificationAccess2.png)

- Значення з'являються в xDrip, коли застосунок Dexcom показує нове значення. Якщо нічого не з'являється, можливо, потрібно запустити сенсор у xDrip: це ніяк не впливає на справжній сенсор. У цьому режимі Stelo дає значення кожні 15 хвилин.

### Companion Bluetooth (G7)

Коли застосунок Dexcom підключений до сенсора G7, xDrip також може слухати значення, які сенсор надсилає застосунку Dexcom через Bluetooth. xDrip не спарюється з сенсором, і вам не потрібно вводити код сенсора: керує й надалі застосунок Dexcom.

З **Companion Bluetooth** xDrip отримує від сенсора точний час і тренд кожного значення, а не час появи сповіщення, і заповнює пропуски, коли телефон був поза зоною досяжності (backfill).

- У xDrip перейдіть у **Settings** > **Less common settings** > **Bluetooth Settings** і увімкніть **Companion Bluetooth**.

  ![Налаштування Bluetooth у xDrip: Companion Bluetooth](../images/xDrip_Companion_Bluetooth.png)

- Це працює не на всіх телефонах і версіях Android. Якщо бачите проблеми, вимкніть це.
- Якщо старий сенсор Dexcom досі є у списку Bluetooth телефону, xDrip може слухати не той сенсор: в Android перейдіть у **Налаштування** > **Підключені пристрої** і видаліть («Забути») сенсори, які ви більше не використовуєте.
- Companion Bluetooth створено для G7. З ONE+ і Stelo покладайтеся на сповіщення.

### Налаштування в AAPS

- Виберіть xDrip у [**Конфігурація → Джерело ГК**](#Config-Builder-bg-source).
- Змініть налаштування xDrip згідно з поясненнями на сторінці [налаштувань xDrip](../CompatibleCgms/xDrip.md).

## 4. Juggluco (G7 і ONE+)

Потрібна версія 9.0 або новіша

- Вимкніть застосунок, який раніше був підключений до сенсора: видаліть застосунок або використайте «Примусово зупинити» (Force Stop). Вимкніть дозвіл «Пристрої поблизу» (Nearby Devices) у налаштуваннях застосунку. Обмежте використання батареї цим застосунком.

- Видаліть сенсор у налаштуваннях Bluetooth: у налаштуваннях Android знайдіть сенсор серед спарених пристроїв і виберіть «Забути» (Forget). Назви сенсорів Dexcom G7 починаються з DXCM.

- Уникайте перешкод від інших сенсорів: тримайте старі сенсори Dexcom поза зоною дії Bluetooth.

- Підключіть сенсор G7 до Juggluco: відкрийте Juggluco → ліве меню → Photo. Відскануйте код Data Matrix на аплікаторі сенсора G7. Зачекайте до 5 хвилин, поки Juggluco знайде сенсор.

- Умови спарювання: погодьтеся спарувати сенсор з Juggluco. Під час спарювання екран не повинен бути заблокований. Якщо спарювання не вдалося, зачекайте 5 хвилин, перш ніж пробувати знову.

- Виняток: годинники з Wear OS можуть спаруватися без натискання кнопки згоди.
