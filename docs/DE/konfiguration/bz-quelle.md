# BZ-Quelle (CGM/FGM)
-----------
AndroidAPS benötigt alle 5 Minuten einen aktuellen BZ-Wert. Dieser kann vom Mess-System (ggf. über zusätzliche Apps wie xDrip+ oder LibreReader) entweder direkt an AndroidAPS geliefert werden (Offline-Loop) oder zunächst zur Nightscout-Website hochgeladen werden, damit AndroidAPS sich die Werte von dort wieder zieht (Online-Loop). Es empfiehlt sich wegen der Instabilität mobiler Internetverbindungen grundsätzlich, einen Offline-Loop zu bevorzugen.

## Dexcom

### G5 mit xdrip+:

* Downloade `xDrip+ für das G5 <https://jamorham.github.io/#xdrip-plus>`_ und installiere es auf dem Smartphone
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Lokaler Broadcast und wähle AN.
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Behandlungen annehmen und wähle AUS.
* Falls du mit AndroidAPS kalibrieren willst dann gehe in xdrip zu Einstellungen > Inter-App Einstellungen > Accept Calibrations und wähle AN. Du solltest auch die Optionen in Einstellungen > Erweiterte Einstellungen > Erweiterte Kalibrierung kontrollieren.
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > xdrip.

### G5 mit der modifizierten Dexcom G5-App:

* Deinstalliere die originale Dexcom App, falls du sie noch hast.
* Downloade die modifizierte Dexcom App von `hier <https://github.com/dexcomapp/dexcomapp/>`_ (Es geht NUR mit dieser Datei und NICHT mit der Original-App von Dexcom oder anderen modifizierten Versionen!).
* Installiere die modifizierte Dexcom App auf Deinem Smartphone
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > DexcomG5 app (patched).

### G4 mit OTG cable ('traditional' Nightscout):

* Downloade die Nightscout Uploader app vom Play Store und folge den Einstellungen auf Nightscout `hier <http://www.nightscout.info/wiki/welcome/basic-requirements/>`_.
* Gib in den AndroidAPS Einstellungen > Nightscout-Client deine Nightscout URL und dein Nightscout API-Key ein.
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > Nightscout-Client BZ.

## FreeStyle Libre mit Bluetooth-Aufsatz
Um vom Freestyle Libre Messgerät automatsich (ohne "Drüberziehen" des Handys) alle 5 Minuten Werten zu bekommen, musst du dir einen kleinen Aufsatz kaufen, der die Werte über Bluetooth ans Smartphone weitergibt. Es gibt hier mehrere Lösungen:

* `MiaoMiao-Reader <https://www.miaomiao.cool/>`_
* `Blukon Nightrider <https://www.ambrosiasys.com/howit>`_
* `BlueReader <https://bluetoolz.de/blueorder/#home>`_ 
* `Sony Smartwatch 3 (SWR50) als Auslesetool <https://github.com/pimpimmi/LibreAlarm/wiki/>`_

Auf dem Smartphone muss eine der folgenden Apps installiert werden, die mit dem Bluetooth-Aufsatz kommuniziert:

### Mit xdrip:

* Downloade `xDrip+ <https://jamorham.github.io/#xdrip-plus>`_ und installiere es auf dem Smartphone
* In xDrip+ gehe zu Einstellungen > Inter-App Einstellungen > Lokaler Broadcast und wähle AN.
* In xDrip+ gehe zu Einstellungen > Inter-App Einstellungen > Behandlungen annehmen und wähle AUS.
* Falls du mit AndroidAPS kalibrieren willst dann gehe in xDrip+ zu Einstellungen > Inter-App Einstellungen > Accept Calibrations und wähle AN. Du solltest auch die Optionen in Einstellungen > Erweiterte Einstellungen > Erweiterte Kalibrierung kontrollieren.
* Wähle in AndroidAPS > Konfigurations-Generator > xDrip+.

### Mit Glimp:

* Downloade über das Google Play Store die App Glimp und folge der Anleitung auf `Nightscout <http://www.nightscout.info/wiki/welcome/nightscout-for-libre/>`_. 
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > Glimp.

## MM640g oder MM630g

* Downloade `600SeriesAndroidUploader <http://pazaan.github.io/600SeriesAndroidUploader/>`_ und folge der Anleitung auf  `Nightscout <http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g/>`_.
* Im 600 Series Uploader gehe zu Settings > Send to xdrip+ und wähle ON (ankreuzen).
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > MM640g.

## PoctechApp
...

## Andere CGM-Systeme

Falls du ein anderes CGM System verwendest, das die Werte zu `Nightscout <http://www.nightscout.info/>`_ sendet, dann

* Gib in den AndroidAPS Einstellungen > Nightscout-Client deine Nightscout Website und API key ein.
* Wähle den AndroidAPS > Konfigurations-Generator > BZ-Quelle > Nightscout-Client BZ.
