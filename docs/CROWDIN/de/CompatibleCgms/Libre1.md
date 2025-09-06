# Freestyle Libre 1

To use your Libre as a CGM that is getting new BG values every 5 minutes without having to scan the sensor, you need to buy an NFC to Bluetooth bridge (commercially available devices, based on the obsolete [LimiTTer](https://github.com/JoernL/LimiTTer) project).

```{admonition} Libre 2, Libre 1 US and Libre Pro
:class: warning
Prüfe im Vorfeld, ob die App und die Bridge mit Deinem Sensor kompatibel sind.  
```

Auf dem Markt sind mehrere Transmitter erhältlich:

-   [MiaoMiao Reader](https://www.miaomiao.cool/) (Version 1, 2 oder 3) auch auf AliExpress verfügbar.
-   [Blucon Nightrider](https://www.ambrosiasys.com/our-products/blucon/) (beachte, dass möglicherweise nicht alle Apps mit den neuesten Firmware-Versionen kompatibel sind; die Vendoren-App überträgt keine Daten an AAPS)
-   [Bubble (oder Bubble Mini)](https://www.bubblesmartreader.com/) von europäischen Herstellern ([Bubblan](https://www.bubblan.org/), [BubbleShop](https://bubbleshop.eu/)) oder für russische Benutzende [hier](https://vk.com/saharmonitor/). Auch auf AliExpress verfügbar.
-   Atom für russische Nutzer.

Aus den frühen Anfängen heraus, ist es auch möglich eine ganz spezielle Smartwatch (Sony Smartwatch 3 SWR50)), die einen NFC Chip eingebaut hat und der aktiviert werden kann, zum Auslesen der Werte zu verwenden. Die oben aufgeführten NFC zu Bluetooth-Adapter bieten aber eine weniger komplexe Lösung und dürften daher für die meisten Nutzendne, die ihren Libre 1 (non-US) als CGM verwenden wollen, die erste Wahl sein.

-   Sony Smartwatch 3 (SWR50) <https://github.com/pimpimmi/LibreAlarm/wiki/>

Wenn Du den Libre 1 als BZ-Quelle nutzt, können aus Sicherheitsgründen die Funktionen *Enable SMB always* und *Enable SMB after carbs* für den SMB Algorithmus leider nicht zur Verfügung gestellt werden. Die BZ-Werte des Libre 1 sind für einen sicheren Einsatz dieser Funktionen nicht glatt genug. In [Glättung der Blut-Glukose-Daten](../CompatibleCgms/SmoothingBloodGlucoseData.md) findest Du weitergehende Informationen.

## 1. xDrip+ verwenden

-   xDrip+ unterstützt Miaomiao, Bubble, Blucon, Atom und LibreAlarm.
-   Du kannst die [latest APK (stable)](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk) einfach herunterladen, es sei denn, Du benötigst aktuelle Funktionen, in diesem Fall solltest Du den neuesten [Nightly Snapshot](https://github.com/NightscoutFoundation/xDrip/releases) verwenden.
-   Folge den Anweisungen zum Einrichten auf der [xDrip+-Einstellungen Seite](../CompatibleCgms/xDrip.md).
-    You also need OOP2 for Libre 1 US (and Libre 2 EU).
-   Wähle xDrip+ unter [KONFIGURATION, BZ-Quelle](#Config-Builder-bg-source) aus.

(libre1-using-glimp)=
## 2. Libre mit Glimp

-   Glimp unterstützt Miaomiao, Blucon und Bubble für Libre 1 und Libre 2 EU.
-   Du benötigst Glimp Version 4.15.57 oder neuer. Ältere Versionen werden nicht unterstützt.
-   Installiere [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia).
-   Wähle Glimp in der [KONFIGURATION, BZ-Quelle](#Config-Builder-bg-source) aus

(libre1-using-tomato)=
## 3. Tomato verwenden

- Tomato ist die Hersteller-App für den Miaomiao.
- Installiere [Tomato](http://tomato.cool/#download_page) und befolge die [Herstelleranweisungen](http://tomato.cool/how-to-broadcast-data-to-android-aps/tips/).
- Wähle Tomato in der [KONFIGURATION, BZ-Quelle](#Config-Builder-bg-source) aus.

## 4. Diabox verwenden

- Diabox ist die Herteller-App für den Bubble.
- Installiere [Diabox](https://t.me/s/DiaboxApp). In den Einstellungen, Integration, aktiviere Sie Datenfreigabe für andere Apps.

![Diabox](../images/Diabox.png)

- Wähle xDrip+ unter [KONFIGURATION, BZ-Quelle](#Config-Builder-bg-source) aus.
