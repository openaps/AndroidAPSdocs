# BZ-Quelle

## Für Dexcom Nutzer  


### Dexcom G5 / G6 mit xdrip+  


* Lade [xdrip](https://github.com/NightscoutFoundation/xDrip) herunter und folge der Anleitung auf Nightscout ([G4 ohne share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Lokaler Broadcast und wähle AN.
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Behandlungen annehmen und wähle AUS.
* Falls du mit AndroidAPS kalibrieren willst dann gehe in xdrip zu Einstellungen > Inter-App Einstellungen > Accept Calibrations und wähle AN. Du solltest auch die Optionen in Einstellungen > Erweiterte Einstellungen > Erweiterte Kalibrierung kontrollieren.
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > xdrip.

### Dexcom G5 / G6 mit gepatchter Dexcom App  


* Lade die APK von [hier](https://github.com/dexcomapp/dexcomapp) herunter und wähle die Version, die Du benötigst (entweder mg/dl oder mmol/l, G5 oder G6).
* Stoppe den Sensor und deinstalliere die originale Dexcom App, falls du das noch nicht gemacht hast.
* Installiere die heruntergeladene apk
* Starte den Sensor
* Wähle Dexcom G5 (patched) im Konfigurations-Generator (Einstellung in AndroidAPS).

### Dexcom G4 mit OTG Kabel ("traditionelles Nightscout")  


* Downloade die Nightscout Uploader app vom Play Store und folge den Einstellungen auf Nightscout [hier](http://www.nightscout.info/wiki/welcome/basic-requirements).
* Gib in den AndroidAPS Einstellungen > Nightscout-Client deine Nightscout URL und dein Nightscout API-Key ein.
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > Nightscout-Client BZ.

## Für Libre Nutzer mit Bluetooth-Aufsatz  


Um dein Libre als CGM zu verwenden, das alle 5 Minuten Glukosewerte empfängt, musst du zuerst einen NFC-zu-Bluetooth Adapter kaufen, z.B.:

* MiaoMiao-Reader <https://www.miaomiao.cool/>
* Blukon Nightrider <https://www.ambrosiasys.com/howit>
* BlueReader <https://bluetoolz.de/blueorder/#home>
* Sony Smartwatch 3 (SWR50) als Auslesetool <https://github.com/pimpimmi/LibreAlarm/wiki/>

### Libre mit xdrip+  


* Lade xDrip+ herunter und folge den Anleitungen von [LimiTTEer](https://github.com/JoernL/LimiTTer), [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki) oder [BlueReader](https://unendlichkeit.net/wordpress/?p=680&lang=en)([Hardware](https://bluetoolz.de/wordpress/)).
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Lokaler Broadcast und wähle AN.
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Behandlungen annehmen und wähle AUS.
* Falls du mit AndroidAPS kalibrieren willst dann gehe in xdrip zu Einstellungen > Inter-App Einstellungen > Accept Calibrations und wähle AN. Du solltest auch die Optionen in Einstellungen > Erweiterte Einstellungen > Erweiterte Kalibrierung kontrollieren.
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > xdrip.
* Beim G5 native mode in xdrip gehe zu Einstellungen > Cloud-Upload > API Upload (REST) > Extra Options und hake "Append source info to device" an.

### Libre mit Glimp  


* Downloade über das Google Play Store die App Glimp und folge der Anleitung auf [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
* Wähle Glimp im Konfigurations-Generator (Einstellung in AndroidAPS).

## Für Eversense Nutzer  


Der einfachste Weg, um Eversense mit AndroidAPS zu nutzen, ist die modifizierte [Eversense app](https://github.com/BernhardRo/Esel/blob/master/apk/mod_com.senseonics.gen12androidapp-release.apk) zu installieren (und zuvor die Original-Eversense-App zu deinstallieren).

**Warnung: Durch die Deinstallation der alten App, werden Deine lokalen historischen Daten (älter als eine Woche) verloren gehen!**

Um die Eversense-Daten in AndroidAPS nutzen zu können, musst Du die App [ESEL](https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk) installieren und dort "Send to AAPS and xDrip" aktivieren. Im [Konfigurations-Generator](../Configuration/Config-Builder.md) in AndroidAPS wählst Du "MM640g" als BZ-Quelle. Da die Glukose-Daten von Eversense manchmal schwankend ("noisy") sein können, sollte in ESEL "Smooth Data" aktiviert werden. Das ist besser als die Option "Always use short average delta instead of simple data" zu wählen.

Weitere Hinweise zur Nutzung von xDrip mit Eversense findest Du [hier](https://github.com/BernhardRo/Esel/tree/master/apk).

## Für Minimed 640G / 630G Nutzer  


* Lade [600SeriesAndroidUploader](http://pazaan.github.io/600SeriesAndroidUploader/) herunter und folge den Anleitungen auf [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g).
* Im 600 Series Uploader gehe zu Settings > Send to xdrip+ und wähle ON (ankreuzen).
* Wähle MM640g im Konfigurations-Generator (Einstellung in AndroidAPS).

## Für PocTech CT-100 Nutzer  


* Installiere die PocTech App
* Wähle PocTech App im Konfigurations-Generator (Einstellung in AndroidAPS).

**Für die Nutzer anderer CGM-Systeme mit Upload zu Nightscout:**  
Wenn du ein anderes CGM-System nutzt mit dem du Daten zu [Nightscout](http://www.nightscout.info) hochladen kannst, dann...  


* Gib in den AndroidAPS Einstellungen > Nightscout-Client deine Nightscout URL und dein Nightscout API-Key ein.
* Wähle NSClient im Konfigurations-Generator (Einstellung in AndroidAPS).