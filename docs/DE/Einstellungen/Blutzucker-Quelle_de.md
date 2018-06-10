**Für Dexcom Benutzer:**<Br>
_Mit xdrip…_<br>
* Falls noch nicht eingerichtet downloade [xdrip](https://github.com/NightscoutFoundation/xDrip) und folge den Anleitungen auf Nightscout ([G4 without share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* In xdrip gehe zu Settings > Interapp Compatibility > Broadcast Data Locally und wähle ON.
* In xdrip gehe zu Settings > Interapp Compatibility > Accept Treatments und wähle OFF.
* Falls du mit AndroidAPS kalibrieren willst dann gehe in xdrip zu Settings > Interapp Compatibility > Accept Calibrations und wähle ON. Du solltest auch die Optionen in Settings > Less Common Settings > Advanced Calibration Settings kontrollieren.
* Wähle in AndroidAPS > CONFIG BUILDER > xdrip.

_Mit der Dexcom G5 App..._<Br>
* Downloade die apk von [hier](https://github.com/dexcomapp/dexcomapp), es geht nur mit dieser.
* Deinstalliere die originale Dexcom App, falls du sie noch hast.
* Wähle im Config Builder Dexcom G5 App.

_Mit OTG cable ('traditional' Nightscout)…_<br>
* Falls noch nicht eingerichtet, dann downloade Nightscout Uploader app vom Play Store und folge den Einstellungen auf [Nightscout](http://www.nightscout.info/wiki/welcome/basic-requirements).
* Gib in den AndroidAPS Einstellungen > NSClient deine Nightscout URL und dein Nightscout API-Key ein.
* Wähle im CONFIG BUILDER > PROFIL > NS Profil (AndroidAPS).


**Für FreeStyle Libre Nutzer:**<br>

_Mit xdrip..._<br>
* Falls noch nicht eingerichtet, dann downloade xdrip und folge der Anleitung auf:<br> 
• [LimiTTEer](https://github.com/JoernL/LimiTTer)  
• [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki) <br> 
• [BlueReader](https://unendlichkeit.net/wordpress/?p=680&lang=en)([Hardware](https://bluetoolz.de/wordpress/)).
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Lokaler Broadcast und wähle AN.
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Behandlungen annehmen und wähle AUS.
* Falls du mit AndroidAPS kalibrieren willst dann gehe in xdrip zu Einstellungen > Inter-App Einstellungen > Accept Calibrations und wähle AN. Du solltest auch die Optionen in Einstellungen > Erweiterte Einstellungen > Erweiterte Kalibrierung kontrollieren.
* Wähle in AndroidAPS > CONFIG BUILDER > xdrip.

_Mit Glimp..._<br>
* Falls noch nicht eingerichtet, dann downloade Glimp und folge der Anleitung auf [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
* Wähle in AndroidAPS > CONFIG BUILDER > Glimp.

**Für Benutzer von MM640g oder MM630g:**<br>
* Falls noch nicht eingerichtet, dann downloade [600SeriesAndroidUploaer](http://pazaan.github.io/600SeriesAndroidUploader/) und folge der Anleitung auf [nightscout](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g).
* Im 600 Series Uploader gehe zu Settings > Send to xdrip+ und wähle ON (Ankreuzen).
* Wähle MM640g im ConfigBuilder (in AndroidAPS).


**Für Nutzer von anderen CGM Systemen mit Upload zu Nightscout:**<br>
Falls du ein anderes CGM System verwendest, das die Werte zu [Nightscout](http://www.nightscout.info) sendet, dann<br>
* Gib in AndroidAPS Preferences deine Nightscout Website und API secret ein.
* Wähle den NSClient im ConfigBuilder (in AndroidAPS).