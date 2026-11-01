# Freestyle Libre 1

For å bruke Libre som en CGM som får nye BS-verdier hvert 5. minutt uten at du må skanne sensoren, må du kjøpe en NFC-til-Bluetooth-sender (enheter som selges i handelen, basert på det nedlagte [LimiTTer](https://github.com/JoernL/LimiTTer)-prosjektet).

```{admonition} Libre 2, Libre 1 US and Libre Pro
:class: warning
Kontroller at senderen og appen du vil bruke, er kompatible med sensoren din.  
```

Noen sendere er fortsatt tilgjengelige på markedet:

-   [MiaoMiao Reader](https://www.miaomiao.cool/) (versjon 1, 2 eller 3), også tilgjengelig på AliExpress.
-   [Bubble / Mini / Nano](https://www.bubblesmartreader.com/) fra europeiske forhandlere ([BubbleShop](https://bubbleshop.eu/)), eller for russiske brukere [her](https://vk.com/saharmonitor/). Også tilgjengelig på AliExpress.
-   Atom for russiske brukere.

## 1. Bruke xDrip

-   xDrip støtter Miaomiao, Bubble, Blucon, Atom og LibreAlarm.
-   Du kan trygt laste ned [den nyeste APK-filen (stabil)](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk), med mindre du trenger nye funksjoner. Da bør du bruke det nyeste [Nightly Snapshot](https://github.com/NightscoutFoundation/xDrip/releases).
-   Følg oppsettinstruksjonene på [siden om xDrip-innstillinger](../CompatibleCgms/xDrip.md).
-    Du trenger også OOP2 for Libre 1 US (og Libre 2 EU).
-   Velg xDrip i [**Konfigurasjon → BS-kilde**](#Config-Builder-bg-source).

## 2. Bruke Diabox

- Diabox er produsentens app for Bubble.
- Installer [Diabox](https://t.me/s/DiaboxApp). Under Settings, Integration aktiverer du Share data with other apps.

![Diabox](../images/Diabox.png)

- Velg xDrip i [**Konfigurasjon → BS-kilde**](#Config-Builder-bg-source).
