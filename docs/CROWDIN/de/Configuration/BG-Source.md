# BZ-Quelle

**Für Dexcom Nutzer:**  
_G5 oder G6 mit xdrip+:_  


* Lade [xdrip](https://github.com/NightscoutFoundation/xDrip) herunter und folge der Anleitung auf Nightscout ([G4 ohne share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Lokaler Broadcast und wähle AN.
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Behandlungen annehmen und wähle AUS.
* Falls du mit AndroidAPS kalibrieren willst dann gehe in xdrip zu Einstellungen > Inter-App Einstellungen > Accept Calibrations und wähle AN. Du solltest auch die Optionen in Einstellungen > Erweiterte Einstellungen > Erweiterte Kalibrierung kontrollieren.
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > xdrip.

_G5 oder G6 mit der gepatchten Dexcom App_  


* Download the apk from <https://github.com/dexcomapp/dexcomapp>, and choose the version that fits your needs (mg/dl or mmol/l version, G5 or G6).
* Stoppe den Sensor und deinstalliere die originale Dexcom App, falls du das noch nicht gemacht hast.
* Installiere die heruntergeladene apk
* Starte den Sensor
* Wähle Dexcom G5 (patched) im Konfigurations-Generator (Einstellung in AndroidAPS).

_G4 mit OTG Kabel ("traditionelles Nightscout")..._  


* Downloade die Nightscout Uploader app vom Play Store und folge den Einstellungen auf Nightscout [hier](http://www.nightscout.info/wiki/welcome/basic-requirements).
* Gib in den AndroidAPS Einstellungen > Nightscout-Client deine Nightscout URL und dein Nightscout API-Key ein.
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > Nightscout-Client BZ.

**Libre mit Bluetooth-Aufsatz:**  
Um dein Libre als CGM zu verwenden, das alle 5 Minuten Glukosewerte empfängt, musst du zuerst einen NFC-zu-Bluetooth Adapter kaufen, z.B.:

* MiaoMiao-Reader <https://www.miaomiao.cool/>
* Blukon Nightrider <https://www.ambrosiasys.com/howit>
* BlueReader <https://bluetoolz.de/blueorder/#home>
* Sony Smartwatch 3 (SWR50) als Auslesetool <https://github.com/pimpimmi/LibreAlarm/wiki/>

_Mit xdrip+_  


* Lade xDrip+ herunter und folge den Anleitungen von [LimiTTEer](https://github.com/JoernL/LimiTTer), [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki) oder [BlueReader](https://unendlichkeit.net/wordpress/?p=680&lang=en)([Hardware](https://bluetoolz.de/wordpress/)).
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Lokaler Broadcast und wähle AN.
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Behandlungen annehmen und wähle AUS.
* Falls du mit AndroidAPS kalibrieren willst dann gehe in xdrip zu Einstellungen > Inter-App Einstellungen > Accept Calibrations und wähle AN. Du solltest auch die Optionen in Einstellungen > Erweiterte Einstellungen > Erweiterte Kalibrierung kontrollieren.
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > xdrip.
* Beim G5 native mode in xdrip gehe zu Einstellungen > Cloud-Upload > API Upload (REST) > Extra Options und hake "Append source info to device" an.

_Mit Glimp:_  


* Downloade über das Google Play Store die App Glimp und folge der Anleitung auf [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
* Wähle Glimp im Konfigurations-Generator (Einstellung in AndroidAPS).

**Minimed 640G oder Minimed 630G**  


* Lade [600SeriesAndroidUploader](http://pazaan.github.io/600SeriesAndroidUploader/) herunter und folge den Anleitungen auf [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g).
* Im 600 Series Uploader gehe zu Settings > Send to xdrip+ und wähle ON (ankreuzen).
* Wähle MM640g im Konfigurations-Generator (Einstellung in AndroidAPS).

**PocTech CT-100:**  


* Installiere die PocTech App
* Wähle PocTech App im Konfigurations-Generator (Einstellung in AndroidAPS).

**Für die Nutzer anderer CGM-Systeme mit Upload zu Nightscout:**  
Wenn du ein anderes CGM-System nutzt mit dem du Daten zu [Nightscout](http://www.nightscout.info) hochladen kannst, dann  


* Gib in den AndroidAPS Einstellungen > Nightscout-Client deine Nightscout URL und dein Nightscout API-Key ein.
* Wähle NSClient im Konfigurations-Generator (Einstellung in AndroidAPS).