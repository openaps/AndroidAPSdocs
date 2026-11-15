# Dexcom G6 і ONE

## Спочатку основи

-   Дотримуйтеся загальних рекомендацій щодо гігієни CGM і встановлення сенсора [тут](../CompatibleCgms/GeneralCGMRecommendation.md).

## Загальні поради для петлі з G6 і ONE

- Нові трансмітери називаються Firefly. Сенсори не можна перезапустити без зняття трансмітера, а сам трансмітер не можна скинути. Також вони не створюють сирих (raw) даних.

- Якщо ви перезапускаєте сенсори, будьте готові калібрувати та стежте за відхиленнями.

- Попереднє замочування (pre-soak) G6/ONE із заводським калібруванням, імовірно, дасть відхилення в результатах. Якщо ви робите попереднє замочування (pre-soak), то для найкращих результатів вам, імовірно, доведеться калібрувати сенсор.

Докладніше читайте у [статті](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/), яку опублікував Tim Street на [www.diabettech.com](https://www.diabettech.com).

## Якщо ви використовуєте G6 або ONE з xDrip

- Якщо ще не налаштовано, завантажте [xDrip](https://github.com/NightscoutFoundation/xDrip) і змініть його налаштування згідно зі [сторінкою налаштувань xDrip](../CompatibleCgms/xDrip.md).
- Виберіть xDrip у [**Конфігурація → Джерело ГК**](#Config-Builder-bg-source).
- Трансмітери Dexcom G6 і ONE можуть одночасно бути підключені до приймача Dexcom (або до помпи t:slim) і до одного застосунку на вашому телефоні.
- Якщо ви використовуєте xDrip як приймач, спочатку видаліть застосунок Dexcom. **Не можна одночасно підключити xDrip і застосунок Dexcom до трансмітера!**
- Якщо вам потрібен Clarity і ви хочете користуватися сигналами тривоги xDrip, використовуйте [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (лише G6) з локальною трансляцією (local broadcast) в xDrip.
- You can also use xDrip as a companion app of the official Dexcom app, but you might experience delays in BG readings. To read the Dexcom app notifications without xDrip, as a trusted data source, use the [Notification Reader](#DexcomG6-notification-reader).
- З сучасними трансмітерами xDrip завжди використовує [власний алгоритм трансмітера](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) (native algorithm); вимикати його немає причин. [Превентивні перезапуски](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) (preemptive restarts) працюють лише на старих трансмітерах (прошивка 1.6.5.25 або старіша), де вони потрібні, щоб сенсор не зупинявся через 10 днів; нові трансмітери (Firefly) їх ігнорують. Перш ніж робити будь-який перезапуск, прочитайте [Restart a sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html).
- Усе, що стосується самого сенсора і трансмітера, описано на [сторінці xDrip про Dexcom](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## Якщо ви використовуєте G6 з Build Your Own Dexcom App

```{admonition} Old app version
:class: warning
Dexcom BYODA — це вже дуже стара версія застосунку, її не можна оновити.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) підтримує локальну трансляцію (local broadcast) в AAPS та/або xDrip

-   Цей застосунок дозволяє використовувати ваш Dexcom G6 з будь-яким смартфоном Android.
-   Видаліть оригінальний застосунок Dexcom або змінений (patched) застосунок Dexcom, якщо ви раніше використовували один з них (**не зупиняйте** поточний сенсор)
-   Установіть завантажений apk
-   Введіть код сенсора та серійний номер трансмітера в зміненому (patched) застосунку.
-   У налаштуваннях телефону перейдіть у apps > Dexcom G6 > permissions > additional permissions і натисніть 'Access Dexcom app'.
-   After a short time BYODA should pick up the transmitter signal.

### Налаштування для AAPS

-   Виберіть **BYODA** у [**Конфігурація → Джерело ГК**](#Config-Builder-bg-source).

-   Якщо ви не отримуєте значень, виберіть будь-яке інше джерело даних, а потім знову виберіть **BYODA**, щоб викликати запит дозволів для встановлення зʼєднання між AAPS і трансляцією BYODA.

### Налаштування для xDrip

-   Виберіть '640G/Eversense' як джерело даних.
-   Щоб отримувати значення, в xDrip потрібно виконати команду 'start sensor'. Це не вплине на ваш поточний сенсор, яким керує Build Your Own Dexcom App.

(DexcomG6-notification-reader)=
## If using G6 or ONE with the Notification Reader

The official Dexcom G6 or ONE app stays connected to the transmitter. **AAPS** reads the glucose value directly from the notification of the Dexcom app, without any other app in between.

```{admonition} Trusted data source
:class: note
Readings from the Dexcom G6 and ONE apps are a [trusted BG data source](#GettingStarted-TrustedBGSource): SMBs can be allowed all the time.
```

Compared to BYODA or xDrip, the Notification Reader has limits:

- **No trend arrow** and **no backfill**: readings missed while the phone was off or out of range are lost.
- Each reading gets the time the notification appeared, not the exact time of the sensor reading.
- Only values between 40 and 405 mg/dL (2.2 and 22.5 mmol/L) are read. "LOW" and "HIGH" are not read.

### Set up the Dexcom app

-   Keep the Dexcom app installed and connected to the transmitter.
-   Make sure the Dexcom app shows the current glucose value in its notification. Його сповіщення мають залишатися видимими: не вимикайте їх звук і не приховуйте їх.
-   Use the same glucose units (mg/dL or mmol/L) in the Dexcom app as in **AAPS**. Otherwise **AAPS** cannot read the value.

### Налаштування в AAPS

-   Select **Notification Reader** in [**Configuration → BG Source**](#Config-Builder-bg-source) and confirm the switch.

    ![BG Source: Notification Reader selected](../images/NotificationReader_BgSource.png)

-   Back on the main screen, **AAPS** shows **Permissions Required**. Next to **Notification Access**, tap **Grant**.

    ![Permissions Required: Notification Access](../images/NotificationReader_Permissions.png)

-   Android opens its notification access list (its name depends on your Android version, for example *Notification read, reply & control*). Select **AAPS**, turn on **Allow notification access** and confirm with **Allow**.

    ![Android asks to allow notification access for AAPS](../images/NotificationReader_AllowDialog.png)

    Android warns that **AAPS** could read all your notifications. **AAPS** only reads the notifications of supported CGM apps and ignores all others.

    ![Notification access allowed for AAPS](../images/NotificationReader_AccessOn.png)

-   If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because **AAPS** was not installed from the Play Store. Open the **AAPS** app info (long press the **AAPS** icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. Потім поверніться на екран доступу до сповіщень і дозвольте його.
-   Readings appear in **AAPS** when the Dexcom app shows a new value.

```{warning}
If the Dexcom app notification shows more than one glucose number, or none, **AAPS** skips that notification.
```


(DexcomG6-troubleshooting-g6)=
## Усунення проблем G6 і ONE

### Усунення проблем, специфічних для Dexcom G6/ONE

-   Прокрутіть вниз до розділу **Troubleshooting** [тут](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Загальне усунення проблем

Загальне усунення проблем для CGM можна знайти [тут](#general-cgm-troubleshooting).

### Новий трансмітер з працюючим сенсором

Якщо вам потрібно замінити трансмітер під час роботи сенсора, можна спробувати зняти трансмітер, не пошкодивши кріплення сенсора. Відео можна знайти [тут](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Якщо ви натомість виберете [цей спосіб](https://youtu.be/tx-kTsrkNUM), будьте обережні, щоб не [пошкодити контакти сенсора](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html) смужкою.
