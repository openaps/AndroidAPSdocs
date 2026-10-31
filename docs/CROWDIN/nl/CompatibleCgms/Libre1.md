# Freestyle Libre 1

Wil je je Libre gebruiken als CGM die elke 5 minuten nieuwe BG-waarden krijgt zonder dat je de sensor hoeft te scannen, dan moet je een NFC-naar-Bluetooth-bridge kopen (in de handel verkrijgbare apparaten, gebaseerd op het verouderde project [LimiTTer](https://github.com/JoernL/LimiTTer)).

```{admonition} Libre 2, Libre 1 US and Libre Pro
:class: warning
Controleer of de bridge en de app die je wilt gebruiken geschikt zijn voor jouw sensor.  
```

Er zijn nog enkele bridges te koop:

-   [MiaoMiao Reader](https://www.miaomiao.cool/) (versie 1, 2 of 3), ook verkrijgbaar op AliExpress.
-   [Bubble / Mini / Nano](https://www.bubblesmartreader.com/) van Europese verkopers ([BubbleShop](https://bubbleshop.eu/)) of voor Russische gebruikers [hier](https://vk.com/saharmonitor/). Ook verkrijgbaar op AliExpress.
-   Atom voor Russische gebruikers.

## 1. xDrip gebruiken

-   xDrip ondersteunt Miaomiao, Bubble, Blucon, Atom en LibreAlarm.
-   Je kunt zonder risico de [nieuwste APK (stabiel)](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk) downloaden. Heb je recente functies nodig, gebruik dan de nieuwste [Nightly Snapshot](https://github.com/NightscoutFoundation/xDrip/releases).
-   Volg de instructies op de [pagina met xDrip-instellingen](../CompatibleCgms/xDrip.md).
-    Voor de Libre 1 US (en de Libre 2 EU) heb je ook OOP2 nodig.
-   Selecteer xDrip in [**Configuratie → BG bron**](#Config-Builder-bg-source).

## 2. Diabox gebruiken

- Diabox is de app van de fabrikant voor de Bubble.
- Installeer [Diabox](https://t.me/s/DiaboxApp). Ga in Diabox naar Settings, Integration en zet Share data with other apps aan.

![Diabox](../images/Diabox.png)

- Selecteer xDrip in [**Configuratie → BG bron**](#Config-Builder-bg-source).
