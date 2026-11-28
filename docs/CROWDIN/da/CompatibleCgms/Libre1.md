# Freestyle Libre 1

Hvis du vil bruge din Libre som en CGM, der får nye BS-værdier hvert 5. minut uden at du skal scanne sensoren, skal du købe en bro fra NFC til Bluetooth (enheder, der kan købes, og som bygger på det forældede projekt [LimiTTer](https://github.com/JoernL/LimiTTer)).

```{admonition} Libre 2, Libre 1 US and Libre Pro
:class: warning
Kontroller, at broen og den app, som du vil bruge, virker med din sensor.  
```

Nogle broer kan stadig købes:

-   [MiaoMiao Reader](https://www.miaomiao.cool/) (version 1, 2 eller 3) kan også købes på AliExpress.
-   Bubble / Mini / Nano from European vendors ([BubbleShop](https://bubbleshop.eu/)) or for Russian users [here](https://vk.com/saharmonitor/). Kan også købes på AliExpress.
-   Atom til russiske brugere.

## 1. Brug af xDrip

-   xDrip supports Miaomiao, Blucon, Atom and LibreAlarm.
-   Du kan trygt downloade den [nyeste APK (stabil)](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk), medmindre du har brug for nye funktioner. I så fald skal du bruge den nyeste [Nightly Snapshot](https://github.com/NightscoutFoundation/xDrip/releases).
-   Følg opsætningsvejledningen på [xDrip-indstillinger](../CompatibleCgms/xDrip.md).
-    Du skal også bruge OOP2 til Libre 1 US (og Libre 2 EU).
-   Vælg xDrip i [**Konfiguration → BS-kilde**](#Config-Builder-bg-source).

(libre1-diabox)=
## 2. Brug af Diabox

- Diabox er producentens app til Bubble.
- Installer [Diabox](https://t.me/s/DiaboxApp). Gå til Settings, Integration, og aktiver Share data with other apps.

![Diabox](../images/Diabox.png)

- Vælg xDrip i [**Konfiguration → BS-kilde**](#Config-Builder-bg-source).
