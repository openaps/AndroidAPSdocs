# Налаштування xDrip

Якщо xDrip ще не налаштовано, завантажте та встановіть найновіший випуск xDrip зі [сторінки випусків xDrip](https://github.com/NightscoutFoundation/xDrip/releases).

Вимкніть оптимізацію батареї та дозвольте роботу у фоновому режимі для застосунку xDrip.

## Базові налаштування для всіх систем CGM і FGM

### Вимкніть вивантаження в Nightscout

Не дозволяйте жодному іншому застосунку вивантажувати дані (глюкозу крові та терапію) в Nightscout.

→ меню-гамбургер (1) → Settings (2) → Cloud Upload (3) -> Nightscout Sync (REST-API)(4) → вимкніть (**OFF**) `Enabled` (5)

![Базові налаштування xDrip 1](../images/xDrip_Basic1.png)

#### Вимкніть автоматичне калібрування та терапію

Переконайтеся, що `Automatic Calibration` (7) вимкнено. Якщо прапорець `Automatic Calibration` позначено, один раз увімкніть `Download treatments` (6), потім зніміть прапорець `Automatic Calibration` і знову вимкніть `Download treatments`.

![Базові налаштування xDrip 2](../images/xDrip_Basic2.png)

Натисніть `Extra Options`(8)

    {admonition} Попередження щодо безпеки
    :class: warning
    Ви повинні вимкнути «Upload treatments» в xDrip, інакше записи терапії в AAPS можуть подвоїтися, що дасть неправильні COB та IOB.

Вимкніть `Upload treatments`(9) і переконайтеся, що ви **НЕ** будете використовувати `Back-fill data` (11).

Параметр `Alert on failures` також слід вимкнути (10). Інакше ви отримуватимете сигнал тривоги кожні 5 хвилин у разі проблем із Wi-Fi/мобільною мережею або якщо сервер недоступний.

![Базові налаштування xDrip 3](../images/xDrip_Basic3.png)

### **Inter-app Settings** (Broadcast, трансляція)

Якщо ви використовуватимете AAPS і дані потрібно передавати, наприклад, в AAPS, увімкніть трансляцію в xDrip у налаштуваннях Inter-App settings.

→ меню-гамбургер (1) → Settings (2) → Inter-app settings (3) → Broadcast locally **ON** (4)

Щоб значення в AAPS були такими самими, як у xDrip, увімкніть `Send the displayed glucose value` (5).

Увімкніть Compatible Broadcast (6).

![Базові налаштування xDrip 4](../images/xDrip_Basic4.png)

Якщо ви також увімкнули `Accept treatments` в xDrip і `Увімкнути трансляцію в xDrip+.` у плагіні xDrip в AAPS, xDrip отримуватиме з AAPS інформацію про інсулін, вуглеводи та базальну швидкість.

Якщо ви увімкнете `Accept Calibrations`, xDrip використовуватиме калібрування з AAPS. Будьте обережні, коли використовуєте цю функцію із сенсорами Dexcom: спершу прочитайте [це](https://navid200.github.io/xDrip/docs/Calibrate-G6.html).

Не забудьте вимкнути Import Sounds, щоб xDrip не відтворював мелодію щоразу, коли AAPS надсилає зміну базалу/профілю.

![Базові налаштування xDrip 5](../images/xDrip_Basic5.png)

(xdrip-identify-receiver)=

#### Identify receiver (ідентифікація отримувача)

- Якщо є проблеми з локальною трансляцією (AAPS не отримує значення ГК з xDrip), перейдіть → меню-гамбургер (1) Settings (2) → Inter-app settings (3) → Identify receiver (7) і введіть `info.nightscout.androidaps` для збірки AAPS (якщо ви використовуєте збірку PumpControl, введіть натомість `info.nightscout.aapspumpcontrol`!!).
- Будьте уважні: автокорекція іноді змінює i на велику літеру. Вводячи `info.nightscout.androidaps` (або `info.nightscout.aapspumpcontrol` для PumpControl), ви **повинні використовувати лише малі літери**. Велика літера I не дасть застосунку отримувати значення ГК з xDrip.
    
    ![xDrip Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

## Калібрування xDrip через AAPS

- Якщо ви хочете калібрувати через AAPS, в xDrip перейдіть у Settings → Interapp Compatibility → Accept Calibrations і виберіть ON. 
- Також варто переглянути параметри в Settings → Less Common Settings → Advanced Calibration Settings.

## Dexcom sensors

Усе, що стосується самого сенсора і трансмітера Dexcom (запуск, зупинка, заміна, калібрування, усунення несправностей), описано та підтримується в актуальному стані в [документації xDrip для Dexcom](https://navid200.github.io/xDrip/docs/Dexcom_page.html). Для сенсора виконуйте ці інструкції; налаштування, що з'єднують xDrip з **AAPS** (описані вище на цій сторінці), — це єдина частина, специфічна для AAPS.

### Dexcom G6 і ONE

- Налаштуйте xDrip за [рекомендованими налаштуваннями](https://navid200.github.io/xDrip/docs/G6-Recommended-Settings.html).
- Трансмітери Dexcom G6 і ONE можуть одночасно бути підключені до приймача Dexcom (або до помпи t:slim) і до одного застосунку на вашому телефоні.
- Якщо ви використовуєте xDrip як приймач, спочатку видаліть застосунок Dexcom. **Не можна одночасно підключати до трансмітера xDrip і застосунок Dexcom!**
- Якщо вам потрібен Clarity і ви хочете користуватися функціями xDrip, використовуйте [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) з локальною трансляцією в xDrip або використовуйте xDrip як застосунок Companion, що отримує сповіщення з офіційного застосунку Dexcom (можливі затримки показників ГК).

#### Перезапуск сенсора

- З сучасними трансмітерами xDrip завжди використовує [власний алгоритм трансмітера](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) (native algorithm); вимикати його немає причин.
- [Превентивні перезапуски](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) працюють лише на старих трансмітерах (прошивка 1.6.5.25 або старіша), де вони потрібні, щоб сенсор не зупинявся через 10 днів. Новіші трансмітери (Firefly) їх ігнорують.
- Перезапуск сенсора на трансмітері Firefly потребує [зняття трансмітера](https://navid200.github.io/xDrip/docs/Remove-transmitter.html), а показники після перезапуску можуть бути дуже неточними, що небезпечно для роботи петлі: повністю прочитайте [Перезапуск сенсора](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html) і [калібруйте уважно](https://navid200.github.io/xDrip/docs/Calibrate-after-G6Restart.html).

(xdrip-connect-g6-transmitter-for-the-first-time)=

#### Запуск, зупинка та заміна сенсорів

Виконуйте інструкції:

- [Запуск трансмітера G6 або ONE](https://navid200.github.io/xDrip/docs/Starting-G6.html)
- [Зупинка і запуск сенсора G6 або ONE](https://navid200.github.io/xDrip/docs/Dexcom/StartG6Sensor.html)
- [Зняття трансмітера із сенсора](https://navid200.github.io/xDrip/docs/Remove-transmitter.html)
- [Термін роботи трансмітера](https://navid200.github.io/xDrip/docs/Transmitter-lifetime.html) можна продовжити ([апаратне скидання](https://navid200.github.io/xDrip/docs/Hard-Reset.html)) лише на трансмітерах із заміненою батареєю або модифікованих, але не на Firefly.

(xdrip-replace-transmitter)=

#### Заміна трансмітера

- Вимкніть оригінальний приймач Dexcom (якщо ви його використовуєте) і не вмикайте його знову, поки xDrip не почне показувати значення.
- Забудьте пристрій в xDrip (System Status → Forget Device) І в налаштуваннях Bluetooth смартфона (там він показаний як DexcomXX, де XX — останні дві цифри серійного номера трансмітера).
- Тримайте старий трансмітер поза зоною дії Bluetooth, щоб він не підключився знову.
- Потім виконайте [Запуск трансмітера G6 або ONE](https://navid200.github.io/xDrip/docs/Starting-G6.html).

### Dexcom G7, ONE+ і Stelo

- Виконуйте [інструкції для G7, ONE+ і Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7.html) (потрібен новий випуск xDrip — дивіться сторінку за посиланням).
- Також дивіться [сторінку Dexcom G7, ONE+ і Stelo](../CompatibleCgms/DexcomG7.md), де описано доступні варіанти налаштування з **AAPS**.

(xdrip-troubleshooting-dexcom-g5-g6-and-xdrip)=

### Усунення несправностей Dexcom і xDrip

- [Усунення проблем зі з'єднанням G6/ONE](https://navid200.github.io/xDrip/docs/Connectivity-troubleshoot.html)
- [Усунення несправностей G7/ONE+/Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7_Troubleshooting.html)
- [Проблема під час запуску нового сенсора](https://navid200.github.io/xDrip/docs/Dexcom/SensorFailedStart.html)
- Повний список: дивіться розділ **Troubleshooting** на [сторінці xDrip для Dexcom](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

## Libre 1

- Налаштуйте міст NFC–Bluetooth в xDrip
    
    → меню-гамбургер (1) → Settings (2) → Less common settings (3) → Bluetooth Settings (4)

- У Bluetooth Settings позначте прапорці точно так, як на знімках екрана нижче (5)
    
    - Вимкніть watchdogs (сторожові таймери), бо вони перезапускають Bluetooth телефону і переривають з'єднання з помпою.
    
    ![Налаштування Libre Bluetooth в xDrip 1](../images/xDrip_Libre_BTSettings1.png)

- Ви можете спробувати увімкнути такі параметри (7)
    
    - Використання сканування
    - Trust Auto-Connect
    - Use Background Scans

- Якщо з'єднання з мостом легко втрачається або його важко відновити, **ВИМКНІТЬ ЇХ** (8).
    
    ![Налаштування Libre Bluetooth в xDrip 2](../images/xDrip_Libre_BTSettings2.png)

- Решту параметрів залиште вимкненими, якщо ви не знаєте, навіщо їх вмикати.
    
    ![Налаштування Libre Bluetooth в xDrip 3](../images/xDrip_Libre_BTSettings3.png)

### Рівень заряду батареї Libre smart reader

- Рівень заряду батареї мостів, таких як MiaoMiao і Bubble, можна показувати в AAPS (але не Blucon).
- Подробиці дивіться на [сторінці зі знімками екрана](#screens-sensor-level-battery).

### Підключіть трансмітер Libre і запустіть сенсор

- Якщо цього потребує ваш сенсор (Libre 2 EU і Libre 1 US), встановіть найновіший out of process algorithm.

- Ваш сенсор уже має бути запущений застосунком виробника або рідером (xDrip не може запускати чи зупиняти сенсори Libre).

- Встановіть джерело даних Libre Bluetooth.
    
    → меню-гамбургер (1) → Settings (2) → виберіть Libre Bluetooth у Hardware Data source (3)
    
    ![xDrip: запуск трансмітера і сенсора Libre 1](../images/xDrip_Libre_Transmitter01.png)

- Проскануйте Bluetooth і підключіть міст.
    
    → меню-гамбургер (1) → Scan Bluetooth (2) → Scan (3)
    
    - Якщо xDrip не знаходить міст, переконайтеся, що він не підключений до застосунку виробника. Поставте його на заряджання і скиньте.
    
    ![xDrip: запуск трансмітера і сенсора Libre 2](../images/xDrip_Libre_Transmitter02.png)

- Запустіть сенсор в xDrip.
    
        {admonition} Попередження щодо безпеки
        :class: warning
        Не використовуйте дані сенсора, поки не закінчиться одногодинний період прогріву: значення можуть бути дуже високими і спричинити неправильні рішення AAPS.
    
    → меню-гамбургер (1) → Start sensor (2) → Start sensor (3) → вкажіть точний час, коли ви запустили сенсор рідером або застосунком виробника. Якщо ви запустили його не сьогодні, відповідайте «Not Today» (4).

![xDrip: запуск трансмітера Libre і сенсора 3](../images/xDrip_Libre_Transmitter03.png)

(xdrip-libre2-patched-app)=

## Пропатчений застосунок Libre 2

- Встановіть джерело даних «пропатчений застосунок Libre».
    
    → меню-гамбургер (1) → Settings (2) → виберіть Libre (patched App) у Hardware Data source (3)
    
    ![Пропатчений застосунок Libre в xDrip 1](../images/xDrip_Libre_Patched01.png)

- Ви можете додати `BgReading:d,xdrip libre_receiver:v` у Less Common Settings->Extra Logging Settings->Extra tags for logging. Це записуватиме в журнал додаткові повідомлення про помилки для пошуку несправностей.

![Журнал xDrip LibreLink](../images/Libre2_Tags.png)