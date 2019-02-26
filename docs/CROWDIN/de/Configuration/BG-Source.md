# BZ-Quelle

## For users of Dexcom  


### If using G5 or G6 with xdrip+  


* Lade [xdrip](https://github.com/NightscoutFoundation/xDrip) herunter und folge der Anleitung auf Nightscout ([G4 ohne share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Lokaler Broadcast und wähle AN.
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Behandlungen annehmen und wähle AUS.
* Falls du mit AndroidAPS kalibrieren willst dann gehe in xdrip zu Einstellungen > Inter-App Einstellungen > Accept Calibrations und wähle AN. Du solltest auch die Optionen in Einstellungen > Erweiterte Einstellungen > Erweiterte Kalibrierung kontrollieren.
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > xdrip.

### If using G5 or G6 with patched Dexcom app  


* Lade die APK von [hier](https://github.com/dexcomapp/dexcomapp) herunter und wähle die Version, die Du benötigst (entweder mg/dl oder mmol/l, G5 oder G6).
* Stoppe den Sensor und deinstalliere die originale Dexcom App, falls du das noch nicht gemacht hast.
* Installiere die heruntergeladene apk
* Starte den Sensor
* Wähle Dexcom G5 (patched) im Konfigurations-Generator (Einstellung in AndroidAPS).

### If using G4 with OTG cable ('traditional' Nightscout)…  


* Downloade die Nightscout Uploader app vom Play Store und folge den Einstellungen auf Nightscout [hier](http://www.nightscout.info/wiki/welcome/basic-requirements).
* Gib in den AndroidAPS Einstellungen > Nightscout-Client deine Nightscout URL und dein Nightscout API-Key ein.
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > Nightscout-Client BZ.

## For users of Libre with Bluetooth cap  


To use your Libre as a CGM that is getting new BG values every 5 minutes you first need to buy a NFC to Bluetooth adapter like:

* MiaoMiao-Reader <https://www.miaomiao.cool/>
* Blukon Nightrider <https://www.ambrosiasys.com/howit>
* BlueReader <https://bluetoolz.de/blueorder/#home>
* Sony Smartwatch 3 (SWR50) als Auslesetool <https://github.com/pimpimmi/LibreAlarm/wiki/>

### If using xdrip...  


* Lade xDrip+ herunter und folge den Anleitungen von [LimiTTEer](https://github.com/JoernL/LimiTTer), [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki) oder [BlueReader](https://unendlichkeit.net/wordpress/?p=680&lang=en)([Hardware](https://bluetoolz.de/wordpress/)).
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Lokaler Broadcast und wähle AN.
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Behandlungen annehmen und wähle AUS.
* Falls du mit AndroidAPS kalibrieren willst dann gehe in xdrip zu Einstellungen > Inter-App Einstellungen > Accept Calibrations und wähle AN. Du solltest auch die Optionen in Einstellungen > Erweiterte Einstellungen > Erweiterte Kalibrierung kontrollieren.
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > xdrip.
* Beim G5 native mode in xdrip gehe zu Einstellungen > Cloud-Upload > API Upload (REST) > Extra Options und hake "Append source info to device" an.

### If using Glimp...  


* Downloade über das Google Play Store die App Glimp und folge der Anleitung auf [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
* Wähle Glimp im Konfigurations-Generator (Einstellung in AndroidAPS).

## For users of Eversense  


The easiest way to use Eversense with AndroidAPS is to install the modified [Eversense app](https://github.com/BernhardRo/Esel/blob/master/apk/mod_com.senseonics.gen12androidapp-release.apk) (and unistall the original one first).

**Warning: by uninstalling the old app, your local historical data older than one week will be lost!**

To finally get your data to AndroidAPS, you need to install [ESEL](https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk) and enable "Send to AAPS and xDrip" in ESEL and "MM640g" as BG source in the [Configuration Builder](../Configuration/Config-Builder.md) in AndroidAPS. As the BG data from Eversense can be noisy sometimes, it is good to enable "Smooth Data" in ESEL, which is better than enabling "Always use short average delta instead of simple data".

You can find another instruction for using xDrip with an Eversense [here](https://github.com/BernhardRo/Esel/tree/master/apk).

## For users of MM640g or MM630g  


* Lade [600SeriesAndroidUploader](http://pazaan.github.io/600SeriesAndroidUploader/) herunter und folge den Anleitungen auf [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g).
* Im 600 Series Uploader gehe zu Settings > Send to xdrip+ und wähle ON (ankreuzen).
* Wähle MM640g im Konfigurations-Generator (Einstellung in AndroidAPS).

## For users of PocTech CT-100  


* Installiere die PocTech App
* Wähle PocTech App im Konfigurations-Generator (Einstellung in AndroidAPS).

**For users of other CGM uploaded to nightscout:**  
If you have any other CGM set up that sends your data to [Nightscout](http://www.nightscout.info) then  


* Gib in den AndroidAPS Einstellungen > Nightscout-Client deine Nightscout URL und dein Nightscout API-Key ein.
* Wähle NSClient im Konfigurations-Generator (Einstellung in AndroidAPS).