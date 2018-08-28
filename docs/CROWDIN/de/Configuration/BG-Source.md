# BZ-Quelle (CGM/FGM)

**Für Dexcom Nutzer:**  
_G5 mit xdrip+:_  


* Lade [xdrip](https://github.com/NightscoutFoundation/xDrip) herunter und folge der Anleitung auf Nightscout ([G4 ohne share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Lokaler Broadcast und wähle AN.
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Behandlungen annehmen und wähle AUS.
* Falls du mit AndroidAPS kalibrieren willst dann gehe in xdrip zu Einstellungen > Inter-App Einstellungen > Accept Calibrations und wähle AN. Du solltest auch die Optionen in Einstellungen > Erweiterte Einstellungen > Erweiterte Kalibrierung kontrollieren.
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > xdrip.

_G5 mit der modifizierten Dexcom G5-App:_  


* Funktioniert aktuell nur mit der Entwickler-Version (Dev).
* Lade die apk von [hier](https://github.com/dexcomapp/dexcomapp), und wähle entweder die mg/dl- oder mmol/l-Version aus.
* Deinstalliere die originale Dexcom App, falls du sie noch hast.
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > DexcomG5 app (patched).

_G4 mit OTG cable (‘traditionelles’ Nightscout):_  


* Downloade die Nightscout Uploader app vom Play Store und folge den Einstellungen auf Nightscout [hier](http://www.nightscout.info/wiki/welcome/basic-requirements).
* Gib in den AndroidAPS Einstellungen > Nightscout-Client deine Nightscout URL und dein Nightscout API-Key ein.
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > Nightscout-Client BZ.

**FreeStyle Libre mit Bluetooth-Aufsatz**  


_Mit xdrip+_  


* Lade xDrip+ herunter und folge den Anleitungen von [LimiTTEer](https://github.com/JoernL/LimiTTer), [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki) oder [BlueReader](https://unendlichkeit.net/wordpress/?p=680&lang=en)([Hardware](https://bluetoolz.de/wordpress/)).
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Lokaler Broadcast und wähle AN.
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Behandlungen annehmen und wähle AUS.
* Falls du mit AndroidAPS kalibrieren willst dann gehe in xdrip zu Einstellungen > Inter-App Einstellungen > Accept Calibrations und wähle AN. Du solltest auch die Optionen in Einstellungen > Erweiterte Einstellungen > Erweiterte Kalibrierung kontrollieren.
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > xdrip.

_Mit Glimp:_  


* Downloade über das Google Play Store die App Glimp und folge der Anleitung auf [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > Glimp.

**Minimed 640G oder Minimed 630G**  


* Lade [600SeriesAndroidUploaer](http://pazaan.github.io/600SeriesAndroidUploader/) herunter und folge den Anleitungen auf [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g).
* Im 600 Series Uploader gehe zu Settings > Send to xdrip+ und wähle ON (ankreuzen).
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > MM640g.

**Für die Nutzer anderer CGM-Systeme mit Upload zu Nightscout:**  
Wenn du ein anderes CGM-System nutzt mit dem du Daten zu [Nightscout](http://www.nightscout.info) hochladen kannst, dann...  


* Gib in den AndroidAPS Einstellungen > Nightscout-Client deine Nightscout URL und dein Nightscout API-Key ein.
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > Nightscout-Client BZ.