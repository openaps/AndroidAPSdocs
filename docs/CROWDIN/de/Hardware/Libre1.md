# Freestyle Libre 1

Um dein Libre als CGM zu verwenden, das alle 5 Minuten Glukosewerte empfängt, musst du zuerst einen NFC-zu-Bluetooth Adapter kaufen, z.B.:

-   MiaoMiao Reader (Version 1 oder 2) <https://www.miaomiao.cool/>
-   Blucon Nightrider <https://www.ambrosiasys.com/our-products/blucon/>
-   Bubble <https://bubbleshop.eu/> oder für russische Benutzer <https://vk.com/saharmonitor/>

Außerdem kann die Sony Smartwatch 3, die einen NFC Chip eingebaut hat, zum Auslesen verwendet werden. Die oben aufgeführten NFC zu Bluetooth-Adapter bieten aber eine weniger komplexe Lösung und dürften daher für die meisten Nutzer, die ihr Libre 1 als CGM verwenden wollen, die erste Wahl sein.

-   Sony Smartwatch 3 (SWR50) <https://github.com/pimpimmi/LibreAlarm/wiki/>

Wenn Du den Libre 1 als BZ-Quelle nutzt, können aus Sicherheitsgründen die Funktionen *Enable SMB always* und *Enable SMB after carbs* für den SMB Algorithmus leider nicht zur Verfügung gestellt werden. Die BZ-Werte des Libre 1 sind für einen sicheren Einsatz dieser Funktionen nicht glatt genug. Näheres hierzu findest du unter [Glättung der Blut-Glukose-Daten](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

## Libre mit xDrip+

-   Falls noch nicht eingerichtet, dann laden Sie xDrip+ herunter und folgen Sie den Anweisungen auf [LimiTTEer](https://github.com/JoernL/LimiTTer) oder [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki).
-   In xDrip+ gehe zu Einstellungen > Inter-App Einstellungen > Lokaler Broadcast und wähle AN.
-   In xDrip+ gehe zu Einstellungen > Inter-App Einstellungen > Behandlungen annehmen und wähle AUS.
-   Falls du mit AndroidAPS kalibrieren willst, dann gehe in xDrip+ zu Einstellungen > Inter-App Einstellungen > Accept Calibrations und wähle AN. Du solltest auch die Optionen in Einstellungen > Erweiterte Einstellungen > Erweiterte Kalibrierung kontrollieren.
-   Wähle in AndroidAPS > Konfiguration > BZ-Quelle > xDrip+.
-   Passe die Einstellungen xDrip+ entsprechend den Erläuterungen auf der [Seite xDrip+ Einstellungen](../Configuration/xdrip.md) an. Es gibt einen Teil für grundlegende xDrip+ Einstellungen und für Freestyle Libre xDrip+ Einstellungen.
-   Falls AAPS im Flugmodus keine BZ-Werte von xdrip+ bekommt, nutze "Identify receiver" wie auf der [Seite xDrip+ Einstellungen](../Configuration/xdrip.md) beschrieben.

## Libre mit Glimp

-   Du benötigst Glimp Version 4.15.57 oder neuer. Ältere Versionen werden nicht unterstützt.
-   Falls noch nicht eingerichtet, dann laden Sie Glimp herunter und folgen Sie den Anweisungen auf [Nightscout](https://nightscout.github.io/uploader/setup/#glimp).
-   Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > Glimp.
