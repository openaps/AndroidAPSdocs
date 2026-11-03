# Freestyle Libre 1

To use your Libre as a CGM that is getting new BG values every 5 minutes without having to scan the sensor, you need to buy an NFC to Bluetooth bridge (commercially available devices, based on the obsolete [LimiTTer](https://github.com/JoernL/LimiTTer) project).

```{admonition} Libre 2, Libre 1 US and Libre Pro
:class: warning
Verify the bridge and the app you want to use are compatible with your sensor.  
```

Some bridges are still available on the market:

-   [MiaoMiao Reader](https://www.miaomiao.cool/) (versione 1, 2 o 3), disponibile anche su AliExpress.
-   [Bubble / Mini / Nano](https://www.bubblesmartreader.com/) from European vendors ([BubbleShop](https://bubbleshop.eu/)) or for Russian users [here](https://vk.com/saharmonitor/). Disponibile anche su AliExpress.
-   Atom per gli utenti russi.

## 1. Usare xDrip

-   xDrip supporta Miaomiao, Bubble, Blucon, Atom e LibreAlarm.
-   Puoi scaricare senza problemi l'[ultimo APK (stabile)](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk), a meno che ti servano funzioni recenti: in quel caso usa l'ultimo [Nightly Snapshot](https://github.com/NightscoutFoundation/xDrip/releases).
-   Follow setup instructions on [xDrip settings page](../CompatibleCgms/xDrip.md).
-    You also need OOP2 for Libre 1 US (and Libre 2 EU).
-   Seleziona xDrip in [**Configurazione → Sorgente Glicemia**](#Config-Builder-bg-source).

## 2. Usare Diabox

- Diabox is the vendor app for Bubble.
- Installa [Diabox](https://t.me/s/DiaboxApp). In Settings, Integration, attiva Share data with other apps.

![Diabox](../images/Diabox.png)

- Seleziona xDrip in [**Configurazione → Sorgente Glicemia**](#Config-Builder-bg-source).
