# Freestyle Libre 1

För att använda din Libre som en CGM som får nya BG-värden var 5:e minut utan att du behöver skanna sensorn, behöver du köpa en brygga från NFC till Bluetooth (kommersiellt tillgängliga enheter, baserade på det föråldrade projektet [LimiTTer](https://github.com/JoernL/LimiTTer)).

```{admonition} Libre 2, Libre 1 US and Libre Pro
:class: warning
Kontrollera att bryggan och appen du vill använda fungerar med din sensor.  
```

Några bryggor finns fortfarande att köpa:

-   [MiaoMiao Reader](https://www.miaomiao.cool/) (version 1, 2 eller 3) finns också på AliExpress.
-   [Bubble / Mini / Nano](https://www.bubblesmartreader.com/) från europeiska återförsäljare ([BubbleShop](https://bubbleshop.eu/)) eller för ryska användare [här](https://vk.com/saharmonitor/). Finns också på AliExpress.
-   Atom för ryska användare.

## 1. Använda xDrip

-   xDrip stöder Miaomiao, Bubble, Blucon, Atom och LibreAlarm.
-   Du kan tryggt ladda ned [senaste APK (stable)](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk). Om du behöver nya funktioner ska du i stället använda senaste [Nightly Snapshot](https://github.com/NightscoutFoundation/xDrip/releases).
-   Följ instruktionerna på [sidan om xDrip-inställningar](../CompatibleCgms/xDrip.md).
-    Du behöver också OOP2 för Libre 1 US (och Libre 2 EU).
-   Välj xDrip i [**Konfiguration → BG-källa**](#Config-Builder-bg-source).

## 2. Använda Diabox

- Diabox är tillverkarens app för Bubble.
- Installera [Diabox](https://t.me/s/DiaboxApp). Gå till Settings, Integration och slå på Share data with other apps.

![Diabox](../images/Diabox.png)

- Välj xDrip i [**Konfiguration → BG-källa**](#Config-Builder-bg-source).
