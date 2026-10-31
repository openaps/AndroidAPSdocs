# Freestyle Libre 1

За да използвате вашия Libre като CGM, който получава нови стойности на КЗ на всеки 5 минути, без да сканирате сензора, трябва да купите мост от NFC към Bluetooth (устройства, които се продават и са базирани на остарелия проект [LimiTTer](https://github.com/JoernL/LimiTTer)).

```{admonition} Libre 2, Libre 1 US and Libre Pro
:class: warning
Проверете дали мостът и приложението, които искате да използвате, са съвместими с вашия сензор.  
```

Някои мостове все още се продават:

-   [MiaoMiao Reader](https://www.miaomiao.cool/) (версия 1, 2 или 3), наличен и в AliExpress.
-   [Bubble / Mini / Nano](https://www.bubblesmartreader.com/) от европейски търговци ([BubbleShop](https://bubbleshop.eu/)) или за потребители от Русия [тук](https://vk.com/saharmonitor/). Наличен и в AliExpress.
-   Atom за потребители от Русия.

## 1. Използване на xDrip

-   xDrip поддържа Miaomiao, Bubble, Blucon, Atom и LibreAlarm.
-   Можете спокойно да изтеглите [последния APK (stable)](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk), освен ако не ви трябват най-новите функции. В такъв случай използвайте последния [Nightly Snapshot](https://github.com/NightscoutFoundation/xDrip/releases).
-   Следвайте инструкциите за настройка на [страницата с настройки на xDrip](../CompatibleCgms/xDrip.md).
-    Нужен ви е и OOP2 за Libre 1 US (и Libre 2 EU).
-   Изберете xDrip в [**Конфигурация → Източник на КЗ**](#Config-Builder-bg-source).

## 2. Използване на Diabox

- Diabox е приложението на производителя на Bubble.
- Инсталирайте [Diabox](https://t.me/s/DiaboxApp). В Settings, Integration включете Share data with other apps.

![Diabox](../images/Diabox.png)

- Изберете xDrip в [**Конфигурация → Източник на КЗ**](#Config-Builder-bg-source).
