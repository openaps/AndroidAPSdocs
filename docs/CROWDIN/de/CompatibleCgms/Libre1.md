# Freestyle Libre 1

Um Deinen Libre als CGM zu verwenden, der ohne zu scannen alle 5 Minuten neue Glukosewerte erhält, musst Du einen „NFC auf Bluetooth“-Adapter (eine sog. „bridge“) kaufen (kommerziell verfügbare Geräte, basierend auf dem veralteten [LimiTTer](https://github.com/JoernL/LimiTTer) Projekt).

```{admonition} Libre 2, Libre 1 US and Libre Pro
:class: warning
Prüfe im Vorfeld, ob die App und die Bridge mit Deinem Sensor kompatibel sind.  
```

Some bridges are still available on the market:

-   [MiaoMiao Reader](https://www.miaomiao.cool/) (Version 1, 2 oder 3) auch auf AliExpress verfügbar.
-   [Bubble / Mini / Nano](https://www.bubblesmartreader.com/) from European vendors ([BubbleShop](https://bubbleshop.eu/)) or for Russian users [here](https://vk.com/saharmonitor/). Auch auf AliExpress verfügbar.
-   Atom für russische Nutzer.

## 1. xDrip+ verwenden

-   xDrip+ unterstützt Miaomiao, Bubble, Blucon, Atom und LibreAlarm.
-   Du kannst die [latest APK (stable)](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk) einfach herunterladen, es sei denn, Du benötigst aktuelle Funktionen, in diesem Fall solltest Du den neuesten [Nightly Snapshot](https://github.com/NightscoutFoundation/xDrip/releases) verwenden.
-   Folge den Anweisungen zum Einrichten auf der [xDrip+-Einstellungen Seite](../CompatibleCgms/xDrip.md).
-    You also need OOP2 for Libre 1 US (and Libre 2 EU).
-   Wähle xDrip+ unter [KONFIGURATION, BZ-Quelle](#Config-Builder-bg-source) aus.

## 2. Diabox verwenden

- Diabox ist die Herteller-App für den Bubble.
- Installiere [Diabox](https://t.me/s/DiaboxApp). In den Einstellungen, Integration, aktiviere Sie Datenfreigabe für andere Apps.

![Diabox](../images/Diabox.png)

- Wähle xDrip+ unter [KONFIGURATION, BZ-Quelle](#Config-Builder-bg-source) aus.
