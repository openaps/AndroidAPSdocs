# Freestyle Libre 1

Щоб використовувати ваш Libre як CGM, який отримує нові значення ГК кожні 5 хвилин без сканування сенсора, вам потрібно купити міст NFC – Bluetooth (готові пристрої в продажу, засновані на застарілому проєкті [LimiTTer](https://github.com/JoernL/LimiTTer)).

```{admonition} Libre 2, Libre 1 US and Libre Pro
:class: warning
Перевірте, що міст і застосунок, який ви хочете використовувати, сумісні з вашим сенсором.  
```

Деякі мости ще можна купити:

-   [MiaoMiao Reader](https://www.miaomiao.cool/) (версія 1, 2 або 3), також є на AliExpress.
-   [Bubble / Mini / Nano](https://www.bubblesmartreader.com/) у європейських продавців ([BubbleShop](https://bubbleshop.eu/)) або для користувачів із Росії [тут](https://vk.com/saharmonitor/). Також є на AliExpress.
-   Atom для користувачів із Росії.

## 1. Використання xDrip

-   xDrip підтримує Miaomiao, Bubble, Blucon, Atom і LibreAlarm.
-   Ви можете спокійно завантажити [останній APK (стабільний)](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk). Якщо вам потрібні нові функції, використовуйте останню версію [Nightly Snapshot](https://github.com/NightscoutFoundation/xDrip/releases).
-   Виконайте інструкції з налаштування на [сторінці налаштувань xDrip](../CompatibleCgms/xDrip.md).
-    Для Libre 1 US (і Libre 2 EU) вам також потрібен OOP2.
-   Виберіть xDrip у [**Конфігурація → Джерело ГК**](#Config-Builder-bg-source).

## 2. Використання Diabox

- Diabox – це застосунок виробника для Bubble.
- Встановіть [Diabox](https://t.me/s/DiaboxApp). У Diabox відкрийте Settings (Налаштування) → Integration та увімкніть Share data with other apps (Ділитися даними з іншими застосунками).

![Diabox](../images/Diabox.png)

- Виберіть xDrip у [**Конфігурація → Джерело ГК**](#Config-Builder-bg-source).
