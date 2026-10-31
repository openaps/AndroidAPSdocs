# Налаштування AAPS на годиннику з Wear OS

Інструкції нижче стосуються apk **AAPS Wear**, який вам потрібно зібрати. Якщо ви його ще не зібрали, дивіться посібник [тут](../WearOS/BuildingAapsWearOS.md). Під час збірки обов'язково використовуйте той самий файл keystore, що і для apk **AAPS** на телефоні.

Частину цієї інформації можна використати і для apk **AAPSClient** і **PumpControl** **Wear**. Each **Wear** app will communicate with its matching phone app. Наприклад, застосунок **AAPSClient Wear** можна використовувати, щоб показувати дані **AAPSClient**, а не дані **AAPS**. Якщо поруч встановлено кілька варіантів клієнта (**AAPSClient**, **AAPSClient2**, **AAPSClient3**), плитки кожного з них мають невеликий заголовок у кольорі цього варіанта, щоб їх можна було розрізнити під час гортання.

## Версії Wear OS і сумісність

(wearos-watchface-changes)=

### Зміни циферблатів у Wear OS (вплив на циферблати AAPS)

```{admonition} Why newer Wear OS watches break AAPS watchfaces
:class: warning

У червні 2025 року Google [оголосила про зміни](https://android-developers.googleblog.com/2025/06/upcoming-changes-to-wear-os-watch-faces.html), які поступово прибирають старий рушій циферблатів (рушій AndroidX / Wearable Support Library, або "WSL") на користь нового декларативного **Watch Face Format**. Власні циферблати **AAPS** створені на старому рушії, тому чим новіша версія Wear OS, тим імовірніше, що циферблат AAPS працюватиме неправильно або перестане працювати.

Це стосується саме **циферблатів** — **віджетів** AAPS, плиток і функцій віддаленого керування це не стосується. Тому ж **оновлення прошивки/системи на годиннику з Wear OS може зламати циферблати AAPS**, а повернути годинник до старішої версії Wear OS потім не можна. Якщо ваш циферблат AAPS зараз працює, **вимкніть автоматичні оновлення годинника**.
```

У таблиці нижче показано, як зміни Google впливають на циферблати AAPS (на старому рушії) залежно від версії Wear OS:

| Версія Wear OS          | Базова версія Android | Рівень API | Вплив на циферблати AAPS (старі)                                                                                                                                                                |
| ----------------------- | --------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wear OS 6               | Android 16            | 36         | **Старі циферблати більше не доступні** — AAPS натомість встановлює [циферблат у форматі Watch Face Format](#wearos-aaps-v4-watchface): ваш власний циферблат або циферблат з віджетами AAPS V4 |
| Wear OS 5               | Android 14            | 34         | **Сильний** — активний (інтерактивний) режим часто не працює, віджети зависають, анімації зупиняються                                                                                           |
| Wear OS 4               | Android 13            | 33         | **Помірний** — обмеження частоти оновлень, пропущені оновлення, часткові збої                                                                                                                   |
| Wear OS 3.0 / 3.2 / 3.5 | Android 11            | 30         | **Низький** — старий рушій ще підтримується                                                                                                                                                     |

Якщо на вашому годиннику версія, де циферблати AAPS працюють ненадійно, ви можете натомість показувати дані AAPS через **віджети** на сумісному циферблаті або використати [GlucoDataHandler](https://play.google.com/store/apps/details?id=de.michelinside.glucodatahandler) з віджетом, який отримує дані від плагіна [Зовнішні супутні застосунки](#external-companion-apps) в **AAPS**. На **Wear OS 6 і новіших** AAPS встановлює циферблат на заміну, створений у новому форматі — див. нижче.

(wearos-aaps-v4-watchface)=

### Wear OS 6 і новіші — циферблат, який встановлює AAPS

Годинники з **Wear OS 6 або новішою** не можуть використовувати класичні циферблати AAPS як циферблати. Для цих годинників застосунок AAPS для годинника містить два циферблати в новому форматі Google **Watch Face Format**. Wear OS дозволяє застосунку встановити лише **один** циферблат, тому ви вибираєте, який з двох буде на годиннику:

- **Власний циферблат** (за замовчуванням): показує власний циферблат, який ви завантажили з телефона кнопкою **Завантажити циферблат** (див. [Перехід на циферблат AAPS](#WearOS_changing-to-AAPS-watchface)). Годинник малює ваш дизайн як зображення, тому працює кожен наявний власний циферблат. Місця для віджетів, які може мати власний циферблат, на цьому зображенні **недоступні**, бо Wear OS передає дані віджетів лише справжньому циферблату. Натисніть і утримуйте циферблат, щоб відкрити його єдине налаштування: що показує режим «завжди на екрані» — простий годинник чи ваш власний дизайн, затемнений.
- **Циферблат з віджетами** (циферблат **AAPS V4**): його **сім місць для віджетів** вже **налаштовані з даними AAPS**: BG значення, IOB, COB, [віджет «Графік ГК»](#Watchfaces-complications), базальна швидкість / тимчасова ціль і значок **Робочий режим** у верхньому лівому місці (торкніться його, щоб змінити режим петлі з годинника). Торкніться часу вгорі, щоб відкрити застосунок будильника на годиннику. Що показує кожне місце, можна змінити в редакторі циферблата.

Вибір робиться на телефоні: відкрийте плагін **Wear** і в розділі **Циферблат, встановлений на годиннику** виберіть один з двох. Ця картка показується лише тоді, коли підключено годинник з Wear OS 6 або новішою. **AAPS** просить підтвердити вибір, бо годинник одразу замінює циферблат. Якщо ви переходите з **Циферблата з віджетами** на інший, віджети, які ви змінили в редакторі циферблата, також повертаються до стандартних, і підтвердження про це попереджає. Поки вибрано **Циферблат з віджетами**, кнопки власного циферблата приховані, а замість них показано попередній перегляд циферблата. Якщо ви завантажуєте власний циферблат, коли вибрано **Циферблат з віджетами**, **AAPS** нагадує перемкнутися на **Власний циферблат**, щоб побачити його на годиннику.

- Вибраний циферблат **встановлюється і активується автоматично**, коли застосунок AAPS для годинника вперше запускається на такому годиннику, і **оновлюється автоматично** разом із застосунком для годинника.
- Якщо ви видалили циферблат, внизу **головного меню** AAPS на годиннику з'явиться пункт **Встановити циферблат** — торкніться його, щоб встановити циферблат знову.

Поки підключено годинник з Wear OS 5 або старішою, картка **Циферблат, встановлений на годиннику** взагалі не показується (механізм, на якому вона працює, потребує Wear OS 6); класичні циферблати там працюють, як і раніше.

(wearos-complications-watchface-setup)=

### Циферблат з віджетами — рекомендоване налаштування

**Циферблат з віджетами** має сім місць для віджетів. Натисніть і утримуйте циферблат, торкніться **Customize** (Налаштувати) і виберіть джерело даних для кожного місця. Місця пронумеровані як у редакторі циферблата: **1** ліворуч, **2** по центру, **3** праворуч, **4** графік, **5** внизу, **6** вгорі ліворуч і **7** вгорі праворуч.

| Стандартне налаштування                                                                                 | Альтернативне налаштування                                                                                     |
| ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| ![Циферблат з віджетами, стандартне налаштування](../images/wearos/complications_watchface_default.png) | ![Циферблат з віджетами, альтернативне налаштування](../images/wearos/complications_watchface_alternative.png) |

| Місце | Положення      | Стандартно                                                                   | Альтернативно                                  |
| ----- | -------------- | ---------------------------------------------------------------------------- | ---------------------------------------------- |
| 1     | Ліворуч        | Іконка IoB                                                                   | CoB & IoB                                      |
| 2     | По центру      | Глюкоза крові                                                                | Глюкоза крові                                  |
| 3     | Праворуч       | Іконка CoB                                                                   | BR & ціль                                      |
| 4     | Графік         | Графік ГК                                                                    | Графік ГК                                      |
| 5     | Внизу          | BR & ціль                                                                    | Батарея Uploader/телефона                      |
| 6     | Вгорі ліворуч  | Робочий режим                                                                | Робочий режим                                  |
| 7     | Вгорі праворуч | Батарея Uploader/телефона або ярлик застосунку **AAPS Відкласти сповіщення** | Ярлик застосунку **AAPS Відкласти сповіщення** |

Ярлик **AAPS Відкласти сповіщення** вибирають серед власних віджетів годинника **App shortcut** (Ярлик застосунку). Якщо торкнутися його, сигнал, який звучить на телефоні, буде відкладено.

```{tip}
Увімкніть на годиннику **Always-on display** (Завжди на екрані) (**Settings** (Налаштування) > **Display** (Екран)). Тоді циферблат і далі показує вашу глюкозу, коли рука опущена, а не порожній екран чи простий годинник.
```

```{admonition} No complication data while the watch is locked
:class: note
If a **Lock type** is set under **Settings** > **Security and privacy**, the watch hides complication data while it is locked, and the watchface shows empty slots until you unlock it. To keep the data visible, turn off **Hide information** in the same menu.
```

### Wear OS 3

Встановіть apk **AAPS Wear** за допомогою [Wear Installer 2](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV), Easy Fire Tools (описано нижче) або ADB.  
Робота **AAPS Wear** без обмежень.

(BuildingAapsWearOs-WearOS5)=

### Wear OS 4 and Wear OS 5

Example: Galaxy Watch 4, 5, 6, 7 and Ultra or Pixel Watch that have **not** been updated to Wear OS 6 yet. Check the version under **Settings** > **About watch** > **Software**.

Install the **AAPS Wear** apk using [Wear Installer 2](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV) (for Wear OS 5 follow [this video](https://www.youtube.com/watch?v=yef_qGvcCnk)). All **AAPS Wear** functions work, but the classic **AAPS** watchfaces are limited as described in the table above: throttled on Wear OS 4, often failing on Wear OS 5.

```{admonition} Wear OS 5
:class: warning
On Wear OS 5 the AAPS watchface has to be selected with Wear Installer 2 right after installing the Wear app: the installer offers the **AAPS (Custom)** watchface at the end of the installation. If you accidentally switch to another watchface, repeat the installation. Changing the watchface settings (Dark, Watchdivider, etc.) may not be possible.

If the classic watchface currently works for you, **disable automatic watch updates**: the next firmware update is likely to break it. If you update to Wear OS 6 anyway, read the section above: **AAPS** then installs its own watchface in the new format.
```

If the watchface is too unreliable, consider [GlucoDataHandler](https://play.google.com/store/apps/details?id=de.michelinside.glucodatahandler) with a complication instead. It needs the [External Companion Apps](#external-companion-apps) plugin enabled in **AAPS**.

### Wear OS 6 and newer

Example: Galaxy Watch 4 and newer with One UI 8 Watch, Pixel Watch after the 2025 update. Most Galaxy and Pixel watches have received this update.

Install the **AAPS Wear** apk using [Wear Installer 2](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV). The classic watchfaces are not available; **AAPS** installs the watchface selected on the phone automatically, see [the watchface AAPS installs](#wearos-aaps-v4-watchface). No limitation in **AAPS Wear** operations.

## How to set up a Samsung Galaxy Watch 4 smartwatch with **AAPS**

Цей розділ для тих, хто ще зовсім не знайомий з розумними годинниками. Він коротко знайомить з популярним годинником **Galaxy Watch 4**, а потім крок за кроком пояснює, як налаштувати **AAPS** на годиннику.

_This guide was written for a Galaxy Watch running Wear OS 3._ On Wear OS 4 and later the watch asks for a **pairing code** when a phone or computer connects over ADB. Wear Installer 2 and the terminal procedure [below](#BuildingAapsWearOs-WearOS5-TShoot) both support it.

Ось основні посібники з налаштування для [Galaxy Watch 5](https://www.youtube.com/watch?v=Y5upzOIxwTU) і [Galaxy Watch 6](https://www.youtube.com/watch?v=D6bq20KzPW0)

## Знайомство з розумним годинником

Після основного налаштування годинника за відео вище відкрийте на телефоні Play Маркет і завантажте такі застосунки: "Galaxy Wearable", “Samsung” і “Easy Fire tools” або "Wear Installer 2".

Є багато відео на YouTube від інших авторів, які допоможуть вам познайомитися з новим розумним годинником, наприклад:

[https://www.youtube.com/watch?v=tSVkqWNmO2c](https://www.youtube.com/watch?v=tSVkqWNmO2c)

У застосунку “Galaxy Wearable” також є розділ з інструкцією. Відкрийте Galaxy Wearable на телефоні, знайдіть годинник і спробуйте спарувати годинник з телефоном. Залежно від версії, вас можуть попросити встановити з Play Маркету ще один застосунок “galaxy watch 4 plugin” (завантаження триває деякий час). Встановіть його на телефон, а потім знову спробуйте спарувати годинник і телефон у застосунку Wearable. Пройдіть кілька меню і позначте потрібні налаштування.

## Налаштування облікового запису Samsung

Переконайтеся, що в обліковому записі електронної пошти, який ви використовуєте для облікового запису Samsung, вказана така дата народження, що користувачеві 13 років або більше. Інакше дозволи Samsung дуже важко підтвердити. Якщо ви створили для дитини до 13 років обліковий запис Gmail і використовуєте цю адресу, ви не можете просто змінити його на обліковий запис дорослого. One way around this is to modify the current date-of-birth to make the current age 12 years and 364 days old. Наступного дня обліковий запис стане обліковим записом дорослого, і ви зможете продовжити налаштування облікового запису Samsung.

(remote-control-transferring-the-aaps-wear-app-onto-your-aaps-phone)=

## Перенесення застосунку **AAPS** Wear на телефон з **AAPS**

Перенести Wear.apk з Android Studio на телефон можна так:

а) за допомогою USB-кабелю скопіюйте apk-файл **AAPS** wear на телефон, а потім встановіть його на годинник вручну («side-load»). Перенесіть Wear.apk на телефон через USB у папку завантажень; або

б) скопіюйте Wear.apk з Android Studio на ваш Google Drive.


Щоб встановити AAPS на годинник вручну (side-load), можна використати: 1) Wear Installer 2 2) Easy Fire tools 3) Android Debug Bridge (ADB) Ми рекомендуємо Wear Installer 2, бо інструкції і процес у відео дуже зрозумілі і добре пояснені. If Wear Installer 2 does not work for you, try Easy Fire Tools or ADB, both described below.

### Встановлення **AAPS** Wear з телефона на годинник за допомогою Wear Installer 2

 ![Wear Installer 2 app icon](../images/wearos/wear_installer2_icon.png)

Wear Installer 2, розроблений [Malcolm Bryant](https://www.youtube.com/@Freepoc), можна завантажити з Google Play на телефон і використати, щоб встановити застосунок AAPS wear на годинник вручну (side-load). У застосунку є зручне [відео](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV) «як встановити вручну».

```{tip}
Для годинників з Wear OS 5 дивіться [це відео](https://www.youtube.com/watch?v=yef_qGvcCnk).
Поради з усунення проблем дивіться [нижче](#BuildingAapsWearOs-WearOS5-TShoot).
```

This provides all the necessary detail (best to open the video on a separate device so you can watch it while setting up the phone).

Як сказано у відео, після завершення вимкніть налагодження ADB на годиннику, щоб не розряджати батарею годинника.

Інакше (але не для Wear OS 5) ви можете:

### Встановлення **AAPS** wear на годинник за допомогою Easy Fire tools

1)   Завантажте _[Easy Fire Tools](https://play.google.com/store/apps/details?id=de.agondev.easyfiretools&hl=en)_ з Play Маркету на телефон

![image](../images/wearos/easyfire01.png)

2)  Увімкніть на годиннику режим розробника (після налаштування і підключення до телефона):

Go to **Settings** > **System** > **About** > **Versions** (the menu names vary between watch brands — on some watches it is **About watch** > **Software info** > **Software version**).

![image](../images/wearos/easyfire02.png)

Rapidly tap on **Build number** (or **Software version**) several times until a message tells you that you are now a developer.

![image](../images/wearos/easyfire03.png)

Go back to **Settings** > **System**: a new **Developer options** menu is now shown.

In **Developer options**, turn on **ADB debugging** and **Wireless debugging**, and confirm the prompts. Wireless debugging then shows the watch's **IP address & Port**, something like: **192.168.1.214** : 5555. You only need the IP address (here **192.168.1.214**), not the port number after the colon. Note that the IP address can change, for example every time you change to a new phone handset for AAPS.

![image](../images/wearos/easyfire04.png)

КРОК 3)     Введіть IP-адресу, _наприклад_ **192.168.1.214**, в Easy Fire tools на телефоні (відкрийте меню ліворуч, налаштування і введіть IP-адресу).

![image](../images/wearos/easyfire05.png)

Потім натисніть значок розетки вгорі праворуч. Після підключення він стане зеленим.

![image](../images/wearos/easyfire06.png)


КРОК 4) Виконайте інструкції [тут](https://wearablestouse.com/blog/2022/01/04/install-apps-apk-samsung-galaxy-watch-4/?utm_content=cmp-true), щоб встановити вручну (тобто перенести) aaps-wear.apk на розумний годинник за допомогою Easy Fire tools


![image](../images/wearos/easyfire07.png)


(BuildingAapsWearOs-WearOS5-TShoot)=

### Через термінал
Підключіть розумний годинник і комп'ютер до однієї мережі Wi-Fi.

- Щоб встановити ADB, завантажте його звідси: https://developer.android.com/tools/releases/platform-tools
- Відкрийте термінал.
- У Windows створіть нову папку з назвою `adb` на диску `C:`. Відкрийте файл `platform-tools-latest-windows.zip`, який ви завантажили вище. Скопіюйте всі файли з `platform-tools` у `C:\adb` і відкрийте цю папку в командному рядку (клацніть правою кнопкою миші і виберіть Open in Terminal (Відкрити в терміналі)). Введіть команду нижче, щоб додати до шляху папку, де лежить ADB: `setx PATH "%PATH%;C:\adb"`
- На Mac замість ручного встановлення можна використати homebrew: `brew install android-platform-tools`

На годиннику:
- Перейдіть у Settings (Налаштування) → About watch (Про годинник) → **Software Information** (Інформація про ПЗ)
- Торкніться Software version (Версія ПЗ) 7 разів, поки не побачите, що режим розробника ввімкнено.
- Перейдіть у Settings (Налаштування) → Developer options (Параметри розробника). Увімкніть **ADB debugging** (налагодження ADB)
- Перейдіть у Settings (Налаштування) → Developer options (Параметри розробника) → Wireless debugging (Бездротове налагодження) → **Pair new device** (Спарувати новий пристрій)

You will see a Wi-Fi pairing code and IP address and port appearing:

![Watch screen showing the Wi-Fi pairing code and IP address and port](../images/wearos/ADB03.png)

- У терміналі: `adb pair ipaddress:port` Наприклад: `adb pair 10.10.1.125:36299`
- Вас попросять ввести код спарювання. Введіть його.
- Ви побачите відповідь:<br> `Successfully paired to 10.10.1.125:36299 [guid=adb-RXXXW20LMKJY-eh5zBj]`<br>
- У терміналі введіть: <br>`adb devices`.<br> Ви маєте побачити приблизно таке:<br> `List of devices attached`<br> `10.10.1.125:36299  offline`<br> `adb-RFAW20LMKJY-eh5zBj._adb-tls-connect._tcp   device`<br>

- Now go to the folder on your computer where the Wear apk is and type<br> `adb install wear-full.apk` <br>with wear-full.apk replaced by the name of your apk file.
- Ви побачите:<br> `Performing Streamed Install`<br> `Success`


(wear-os-5-troubleshooting)=

### Загальні рекомендації з усунення проблем для Wear OS 5

- Не використовуйте Wi-Fi-модем (точку доступу на телефоні). Це не спрацює.
- Вмикати налагодження adb на телефоні не потрібно (лише на годиннику). Вимкніть налагодження adb на телефоні.
- Переконайтеся, що ви підключаєтеся до своєї локальної мережі, де телефон і годинник бачать один одного (не використовуйте гостьову мережу Wi-Fi).
- Переконайтеся, що годинник і телефон в одній мережі і підключені до одного пристрою Wi-Fi. Особливо проблеми можуть створювати повторювачі Wi-Fi або точки доступу.
- Будьте поруч з основним роутером, потім перезапустіть і телефон, і годинник.

**Спарювання:**

- Годинник: Wireless Debugging (бездротове налагодження): запишіть IP-адресу.
- Wear Installer: Enter the IP in the Wear Installer app.
- Виберіть Pair new (спарувати новий), запишіть показаний код спарювання і номер порту.
- Wear Installer: enter the pairing code + space + port number.
- Wear installer має повідомити, що спарювання успішне. Якщо ні, вийдіть з Wear Installer і спробуйте ще раз.

Після спарювання ви зможете встановити apk AAPS wear:

- Вийдіть/закрийте, потім знову запустіть Wear Installer.
- У бездротовому налагодженні запишіть IP і номер порту і обов'язково перевірте/введіть IP і номер порту в Wear Installer.
- Примітка: цей номер порту відрізняється від того, що використовувався для спарювання!

## Налаштування з'єднання між годинником і телефоном з **AAPS**

Останній крок — налаштувати **AAPS** на телефоні для роботи з **Wear.apk** на годиннику. To do this, enable the Wear plugin:

* Відкрийте застосунок **AAPS** на телефоні

* Open the **menu** (☰) in the top-left corner and go to **Configuration** > **Communication**

* Tick the **Wear** box

![Конфігурація > Звʼязок з увімкненим Wear](../images/v4/Configuration/configuration_communication_wear.png)

To bolus or take other actions from the watch, also turn on **Wear control** in [Settings > Wear](#preferences-wear).

Щоб вибрати інший циферблат **AAPS**, натисніть і утримуйте головний екран годинника, і з'явиться “customise” (налаштувати). Потім гортайте праворуч, поки не побачите всі циферблати **AAPS**.

Якщо **AAPS** Wear.apk успішно встановлено на розумний годинник, це виглядатиме так:


![Wear plugin showing the connected Galaxy Watch, and the AAPS app on the watch](../images/wearos/wear_apk_installed.png)


For certain smart watches, like the Samsung Galaxy, 'Remote Connection' under Samsung Galaxy's Advanced Features must be switched **on** to use **Wear.apk** & **AAPS** remotely via Wi-Fi.

![Galaxy Wearable, Advanced features, Remote connection switched on](../images/wearos/galaxy_wearable_remote_connection.png)

(wear-os-watch-phone-communication)=

### Усунення проблем зі зв'язком між годинником з **AAPS** і телефоном з **AAPS**

1.  Якщо EasyFire tools не підключається або ви бачите ‘authorisation failed’ (помилка авторизації) > перевірте, чи правильно введено IP-адресу.
2.  Перевірте, чи розумний годинник підключений до інтернету (а не лише до телефона через Bluetooth).
3.  Перевірте, чи телефон з **AAPS** і розумний годинник спарені або пов'язані в застосунку Samsung.
4.  Також може допомогти повний перезапуск телефона і розумного годинника (тобто вимкнути і знову ввімкнути телефон)
5.  Assuming you have managed to download the Wear.apk onto your phone but you are not receiving any BG data, _check_ that you have side-loaded the correct **AAPS** Wear apk onto the watch: the watch app of a browser build is the `aaps-wear-….apk` file, see [Building the Wear app](../WearOS/BuildingAapsWearOS.md). If the file you installed is any of the following: a) an **AAPSClient** Wear apk (while the phone runs **AAPS**); b) a `.aab` file; or c) a file with the word ‘debug’ in its name, you have not selected the correct Wear OS apk during the build.
6.  Перевірте, чи ваш роутер не ізолює пристрої один від одного.

Більше порад з усунення проблем можна знайти [тут](https://freepoc.org/wear-installer-help-page/#:~:text=If%20you%20are%20having%20problems,your%20phone%20and%20your%20watch.)

(WearOS_changing-to-AAPS-watchface)=

## Перехід на циферблат AAPS на годиннику з WearOS

У стандартній збірці AAPS Wear OS APK є кілька циферблатів. Після встановлення AAPS Wear APK на годинник вони стануть доступними. Ось як вибрати один з них:

1. На годиннику (якщо це WearOS) натисніть і утримуйте поточний циферблат, щоб відкрити екран вибору циферблатів. Прокрутіть до кінця праворуч, поки не побачите кнопку "Add Watch Face" (Додати циферблат), і виберіть її

![Watchface selector with the Add watch face button](../images/wearos/watchface_add.png)

2. Scroll through the list until you find "AAPS (Custom)" (depending on the watch, the watch faces of installed apps are listed under a "Downloaded" section or grouped by app) and click the middle of the image to add it to your shortlist of current watchfaces. Не зважайте на поточний вигляд циферблата "AAPS (Персональний)": ви виберете потрібний вигляд на наступному кроці.

![List of AAPS watchfaces, with AAPS (Custom)](../images/wearos/watchface_list_aaps.png)

3. Now open AAPS on your phone and open the Wear plugin: **Configuration** > **Communication** > **Wear** > **Open plugin** (tick **Wear** first if it is not enabled).

![Wear plugin with the Custom Watchface card](../images/wearos/wear_plugin_custom_watchface.png)

4. Натисніть кнопку "Завантажити циферблат" і виберіть циферблат, який вам подобається

![Select Custom Watchface list](../images/wearos/select_custom_watchface.png)

5. Перевірте годинник: циферблат "AAPS (Персональний)" тепер має показувати вибраний вами вигляд. Зачекайте кілька секунд, поки він оновиться. The **Wear** screen on the phone now shows the name of the loaded watchface and a preview of it. **Infos Watchface** lists its details and the fields it contains, and **More watchfaces** opens the [exchange site](../ExchangeSiteCustomWatchfaces/index.md) where you can download other custom watchfaces. Тепер ви можете налаштувати віджети тощо: натисніть і утримуйте циферблат, а потім натисніть кнопку "Customize" (Налаштувати) на зображенні циферблата.

```{admonition} Complications on a custom watchface
:class: note
Custom watchfaces made with version 3.0 or newer of the custom watchface format can contain up to five complication slots, with their position and size defined by the watchface (**Complication layout**). On the watch, long-press the watchface, tap **Customize** and tap **Complication 1** to **Complication 5** to choose the data source shown in each slot. The same rows are listed in the watch's AAPS app under **Settings** > **AAPS(Custom)**; tapping one there opens the same picker. **Complication type priority** decides whether a slot prefers a value or gauge, text, or an icon when the data source offers several. A changed priority only applies the next time you pick a data source for that slot.

These slots only work on watches running **Wear OS 5 or older**, where the custom watchface runs as a real watchface. On **Wear OS 6 and newer**, the custom watchface is shown as a picture without its complication slots, and steps 1 and 2 above are not needed: make sure **Custom watchface** is selected under **Watchface installed on watch** in the phone's **Wear** plugin (see [the watchface AAPS installs](#wearos-aaps-v4-watchface)).
```

## Циферблат AAPSv2 – легенда

![Легенда циферблата AAPSv2](../images/Watchface_Legend.png)

A – час від останнього запуску петлі

B – показник CGM

C – хвилини від останнього показника CGM

D - change compared to last CGM reading (in mmol or mg/dL)

E – середня зміна показника CGM за останні 15 хвилин

F – батарея телефона

G – базальна швидкість (в Од/год при стандартній швидкості і в % під час TBR)

H – BGI (blood glucose interaction, вплив на глюкозу крові) -> наскільки BG «мала б» зростати або знижуватися лише через дію інсуліну.

I – вуглеводи (активні вуглеводи | e-carbs у майбутньому)

J – активний інсулін (від болюсу | від базалу)
