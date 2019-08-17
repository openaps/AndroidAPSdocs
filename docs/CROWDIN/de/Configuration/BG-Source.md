# Allgemeine CGM-Empfehlungen

## CGM "Hygiene"

Unabhängig davon, welches CGM-System Du nutzt und egal, ob Du die offizielle App oder eine DIY-App verwendest, solltest Du die folgenden Regeln beachten:

* Hände und Geräte müssen sauber sein.
* Kalibriere immer dann, wenn Du stabile Werte hast (Messwerte auf einem Niveau und waagerechter Pfeil). In der Regel reicht ein Zeitraum von 15 - 30 Minuten aus.
* Vermeide die Kalibrierung, wenn der Glukoselevel steigt oder fällt. 
* Kalibriere "ausreichend" oft. Die offiziellen Apps fordern Dich ein oder zwei Mal pro Tag zum blutigen Test auf. Bei DIY Systemen ist das evtl. nicht der Fall und Du solltest vorsichtig sein, ohne die empfohlenen Kalibrierungen zu arbeiten.
* Falls möglich, kalibriere mal mit Werten im niedrigen Bereich (72 - 90 mg/dl bzw. 4 - 5 mmol) und mal im erhöhten Bereich (126 - 160 mg/dl bzw. 7 - 9 mmol). Dies führt zu besseren Ergebnissen, da sich die Kalibrierungsgerade leichter durch zwei entferntere Punkte legen lässt.

# BZ-Quelle

## Für Dexcom Nutzer

### Dexcom G6: Allgemeine Hinweise zum Loopen

Auf der [Dexcom G6 Seite](../Configuration/Dexcom.md) findest Du detaillierte Hinweise zum Setzen des Dexcom G6 Sensors und Löungsmöglichkeiten für häufige Schwierigkeiten beim Umgang mit dem Dexcom G6.

Die Nutzung des G6 kann vielleicht etwas komplexer sein, als zunächst vermutet. Mache Dir die folgenden Punkte bewusst, um das System sicher zu nutzen:

* Wenn Du mit nativen Daten und dem Kalibrierungscode in xDrip+ oder Spike arbeitest, ist es am sichersten, auf den "preemptive" Neustart des Sensors zu verzichten.
* Falls Du den "preemptive restart" verwendest, stelle sicher, dass dieser zu einer Tageszeit erfolgt, zu der Du die Änderungen verfolgen und ggf. durch eine Kalibrierung eingreifen kannst. 
* Falls Du Sensoren verlängerst, verzichte aus Sicherheitsgründen entweder auf die Werkskalibrierung an Tag 11 und 12 oder stelle sicher, dass Du die Abweichungen im Auge hast und evtl. durch Kalibrierung korrigieren kannst.
* Das sogenannte "Pre-soaking" (Sensor früher ohne Transmitter setzen, damit er sich an die Gewebsflüssigkeit "gewöhnt") mit Werkskalibrierung führt wahrscheinlich zu Abweichungen in den Glukosewerten. Falls Du mit "pre-soaking" arbeitest, wirst Du wahrscheinlich besser Ergebnisse erzielen, wenn Du den Sensor kalibrierst.
* Wenn Du nicht auf die Abweichungen, die stattfinden können, achten willst, wäre es evtl. besser bei der Verlängerung auf die Werkskalibrierung zu verzichten und das System wie den G5 (mit "Pflichtkalibrierung") zu nutzen.

Mehr zu den Details und Gründen für diese Empfehlungen findest Du im [kompletten Artikel](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) (englisch) von Tim Street auf seiner Seite [www.diabettech.com](http://www.diabettech.com).

### Dexcom G6 mit xdrip+

* Lade [xdrip](https://github.com/NightscoutFoundation/xDrip) herunter und folge der Anleitung auf Nightscout ([G4 ohne share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > xdrip.
* Passe die Einstellungen xDrip+ entsprechend den Erläuterungen auf der [Seite xDrip+ Einstellungen](../Configuration/xdrip.md) an.
* If AAPS does not receive BG values when phone is in airplane mode use `Identify receiver` as describe on [xDrip+ settings page](../Configuration/xdrip.md).

### Dexcom G5 mit xdrip+

* Lade [xdrip](https://github.com/NightscoutFoundation/xDrip) herunter und folge der Anleitung auf Nightscout ([G4 ohne share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Lokaler Broadcast und wähle AN.
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Behandlungen annehmen und wähle AUS.
* Falls du mit AndroidAPS kalibrieren willst dann gehe in xdrip zu Einstellungen > Inter-App Einstellungen > Accept Calibrations und wähle AN. Du solltest auch die Optionen in Einstellungen > Erweiterte Einstellungen > Erweiterte Kalibrierung kontrollieren.
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > xdrip.
* Falls AAPS im Flugmodus keine BZ-Werte von xdrip+ bekommt, nutze `Identify receiver` wie auf der [Seite xDrip+ Einstellungen](../Configuration/xdrip.md) beschrieben.

### Dexcom G5 / G6 mit gepatchter Dexcom App

* Lade die APK von [hier](https://github.com/dexcomapp/dexcomapp) herunter und wähle die Version, die Du benötigst (entweder mg/dl oder mmol/l, G5 oder G6).
* Stoppe den Sensor und deinstalliere die originale Dexcom App, falls du das noch nicht gemacht hast.
* Installiere die heruntergeladene apk
* Starte den Sensor
* Wähle Dexcom G5 (patched) im Konfigurations-Generator (Einstellung in AndroidAPS).

### Dexcom G4 mit OTG Kabel ("traditionelles Nightscout")  


* Downloade die Nightscout Uploader app vom Play Store und folge den Einstellungen auf Nightscout [hier](http://www.nightscout.info/wiki/welcome/basic-requirements).
* Gib in den AndroidAPS Einstellungen deine Nightscout URL und dein Nightscout API-Key ein.
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
* Eine bebilderte Anleitung zu den Einstellungen findest Du auf der [Seite xDrip+ Einstellungen](../Configuration/xdrip.md).

### Libre mit Glimp  


* Lade über den Google Play Store die App Glimp herunter und folge der Anleitung auf [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > Glimp.

## Für Eversense Nutzer  


Am einfachsten kann man Eversense mit AndroidAPS nutzen, indem man die modifizierte [Eversense App](https://github.com/BernhardRo/Esel/blob/master/apk/eversense_cgm_v1.0.409_com.senseonics.gen12androidapp-patched.apk) installiert (zunächst muss die Original-App deinstalliert werden).

**Warnung: Durch die Deinstallation der alten App, werden Deine lokalen historischen Daten (älter als eine Woche) verloren gehen!**

Um die Eversense-Daten in AndroidAPS nutzen zu können, musst Du die App [ESEL](https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk) installieren und dort "Send to AAPS and xDrip" aktivieren. Im [Konfigurations-Generator](../Configuration/Config-Builder.md) in AndroidAPS wählst Du "MM640g" als BZ-Quelle. Da die Glukose-Daten von Eversense manchmal schwankend ("noisy") sein können, sollte in ESEL "Smooth Data" aktiviert werden. Das ist besser als die Option "Always use short average delta instead of simple delta" zu wählen.

Weitere Hinweise zur Nutzung von xDrip mit Eversense findest Du [hier](https://github.com/BernhardRo/Esel/tree/master/apk).

## Für Minimed 640G / 630G Nutzer  


* Lade [600SeriesAndroidUploaer](http://pazaan.github.io/600SeriesAndroidUploader/) herunter und folge den Anleitungen auf [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g).
* Im 600 Series Uploader gehe zu Settings > Send to xdrip+ und wähle ON (ankreuzen).
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > MM640g.

## Für PocTech CT-100 Nutzer  


* Installiere die PocTech App
* Wähle PocTech App im Konfigurations-Generator (Einstellung in AndroidAPS).

## Für Benutzer anderer CGM-Systeme, deren Daten zu Nightscout hochgeladen werden  


Wenn Du ein anderes CGM-System nutzt und dessen Daten an [Nightscout](http://www.nightscout.info) sendest  


* Gib in den AndroidAPS Einstellungen deine Nightscout URL und dein Nightscout API-Key ein.
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > Nightscout-Client BZ.