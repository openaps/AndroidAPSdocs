# Sample setup: Samsung S7, Dana RS, Dexcom G6 and Sony Smartwatch

![Konfigurationsbeispiel](../images/SampleSetup.png)

## Beschreibung

In dieser Variante ist das Smartphone Samsung Galaxy S7 die Schaltzentrale des Loop. The slightly modified Dexcom App reads glucose values from the Dexcom G6 CGM. AndroidAPS is used to control the Dana RS insulin pump from Korean manufacturer SOOIL via bluetooth. Weitere Geräte werden nicht benötigt.

Da die Dexcom App nur begrenzte Alarmoptionen zur Verfügung stellt, wird xDrip+ verwendet, um nicht nur Hoch- und Niedrigalarme sondern auch weitere Alarme nach individuellen Bedürfnissen auszugeben.

Falls gewünscht, können alle aktuellen Glukose- und Behandlungsdaten auf einer Android Wear Smartwatch (in diesem Beispiel die "Sony Smartwatch 3" (SWR50)) am Handgelenk angezeigt werden. Über die Smartwatch kann AndroidAPS auch bedient werden (z.B. Bolusgabe).

Das System funktioniert offline, also ohne dass zum Betrieb eine Datenverbindung des Smartphones zum Internet erforderlich ist.

Die Daten werden jedoch automatisch zu Nightscout (Open Source Cloud Service) hochgeladen, wenn eine Datenverbindung hergestellt wird. So können umfangreiche Auswertungen für den Arztbesuch erstellt oder jederzeit die aktuellen Werte mit Familienmitgliedern geteilt werden. Es ist auch möglich, die Daten nur über eine (ggf. zuvor definiertes) WLAN-Verbindung zu übertragen, um die Nightscout-Berichte nutzen zu können.

## Benötigte Komponenten

1. Samsung Galaxy S7
    
    * Alternativen: siehe [Liste der getesteten Smartphones und Smartwatches](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435) für AndroidAPS

2. [DanaRS](http://www.sooil.com/eng/product/)
    
    * Alternativen: 
    * [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
    * [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
    * [DanaR](../Configuration/DanaR-Insulin-Pump.md)
    * [Some old Medtronic pumps (additionally needed: RileyLink/Gnarl hardware, Android Phone with bluetooth low energy / BLE-chipset)](../Configuration/MedtronicPump.md)
    * Other pumps might be available in the future, see [future possible pump drivers](Future-possible-Pump-Drivers.md) for details.

3. [Dexcom G6](https://dexcom.com)
    
    * Alternativen: siehe Liste der möglichen [BZ-Quellen](../Configuration/BG-Source.rst)

4. Optional: Sony Smartwatch 3 (SWR50)
    
    * Alternatives: All [watches with Google Wear OS](https://wearos.google.com/intl/de_de/#find-your-watch) should work fine, for details see [list of tested phones and watches](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435) for AndroidAPS (OS must be Android Wear)

## Nightscout Einrichtung

Detaillierte Anleitung siehe [Nightscout Setup](../Installing-AndroidAPS/Nightscout.md).

## Computer Einrichtung

Um aus dem frei verfügbaren OpenSource-Quellcode von AAPS eine Android-App selbst erstellen zu können, wird Android Studio auf dem Computer oder Notebook (Windows, Mac, Linux) benötigt. Eine detaillierte, bebilderte Installationsanleitung findet sich unter [App aus Quellcode erstellen](../Installing-AndroidAPS/Building-APK.md).

Bei der Erstinstallation von Android Studio ist einige Geduld erforderlich, da die Software nach der Installation auf dem Rechner einige weitere Komponenten nachlädt.

## Smartphone Einrichtung

![Smartphone](../images/SampleSetupSmartphone.png)

### Firmware des Smartphones prüfen

* Menü > Einstellungen > Telefoninfo > Softwareinfo: Hier sollte mindestens die Firmware-Version stehen: "Android-Version 7.0" (erfolgreich getestet bis Android-Version 8.0.0 Oreo - Samsung Experience Version 9.0) 
* Falls nicht: Menü > Einstellungen > Software-Update durchführen

### Installation von Apps aus unbekannten Quellen zulassen

Menü > Einstellungen > Gerätesicherheit > Unbekannte Quellen > Schieber nach rechts (= aktiv)

Diese Einstellung sollte aus Sicherheitsgründen wieder auf inaktiv gestellt werden, wenn die Installation aller hier beschriebenen Apps abgeschlossen ist.

### Bluetooth aktivieren

1. Menü > Einstellungen > Verbindungen > Bluetooth > Schieber nach rechts (= aktiv)
2. Menü > Einstellungen > Verbindungen > Standort > Schieber nach rechts (= aktiv)

Standortdienste ("GPS") müssen aktiviert sein, damit Bluetooth ordnungsgemäß funktioniert.

### Dexcom App (modifizierte Version) installieren

![gepatchte Dexcom App](../images/SampleSetupDexApp.png)

Die Original-App von Dexcom aus dem Google Play Store wird nicht funktionieren, weil sie die Werte nicht an andere Apps weitergibt. Darum ist eine von der Community leicht modifizierte Version erforderlich. Nur sie kann später mit AAPS kommunizieren. Außerdem kann die modifizierte Dexcom App mit allen Android Smartphones verwendet werden, nicht nur mit den in der [Dexcom Kompatibilitätsliste](https://www.dexcom.com/dexcom-international-compatibility) aufgeführten.

A mmol/l version and a mg/dl version of the modified Dexcom G6 app are available at <https://github.com/dexcomapp/dexcomapp/tree/master/2.4>. You have to choose G6 [app for your region](../Hardware/DexcomG6#if-using-g6-with-patched-dexcom-app).

To do this perform the following steps on your smartphone:

1. Falls die Original-Dexcom-App bereits installiert sein sollte: 
    * Sensor stoppen
    * Uninstall app via Menu > Settings > Apps > Dexcom G6 Mobile > Uninstall
2. Download modified Dexcom app (check unit mg/dl or mmol/l and [region](../Hardware/DexcomG6#if-using-g6-with-patched-dexcom-app) according to your needs): <https://github.com/dexcomapp/dexcomapp/tree/master/2.4>
3. Install modified Dexcom G6 app on your smartphone (= select the downloaded APK file)
4. Start modified Dexcom G6 app, activate/calibrate the sensor according to the given instructions and wait until the warm-up phase is finished.
5. Once the modified Dexcom app shows actual glucose value, setup the warnings (hamburger menu on top left side of the screen) as follows: 
    * Akut niedrig: `55mg/dl` / `3.1mmol/l` (kann nicht deaktiviert werden)
    * Niedrig `OFF`
    * Hoch `OFF`
    * Anstiegsrate `OFF`
    * Abfallrate `OFF`
    * Signalverlust `OFF`

## AndroidAPS installieren

1. AndroidAPS APK-Datei wie [hier](../Installing-AndroidAPS/Building-APK#generate-signed-apk) ausführlich und mit Screenshots beschrieben erstellen.
2. Die erstelle APK-Datei auf das Smartphone [übertragen](../Installing-AndroidAPS/Building-APK#transfer-apk-to-smartphone).
3. AndroidAPS entsprechend den eigenen Anforderungen mit Hilfe des Einrichtungsassistenten oder manuell [konfigurieren](../Configuration/Config-Builder.md).
4. In diesem Beispiel haben wir (unter anderem) folgende Einstellungen verwendet:

* BG source: `Dexcom G6 App (patched)` -- click cock-wheel and activate `Upload BG data to NS` and `Send BG data to xDrip+` (see [BG source](../Configuration/BG-Source.rst))

![G5 Settings](../images/SampleSetupG5Settings.png)

* Nightscout Client aktivieren (siehe [Nightscout-Client](../Configuration/Config-Builder#ns-profile) und [Nightscout Setup](../Installing-AndroidAPS/Nightscout.md))

## xDrip+ installieren

xDrip+ is another mature open source app that offers countless possibilities. In this setup, contrary to what the developers first wrote the app for, xDrip+ is not used to collect glucose data from the Dexcom G6, but only to output alarms and to display the current glucose value including the curve on the Android home screen in the widget. With xDrip+ the alarms can be set much more individually than with the Dexcom software, AAPS or Nightscout (no limitation in the selection of sounds, different alarms depending on day/night time etc.).

1. Letzte stabile APK-Version von xDrip+ mit dem Smartphone herunterladen unter <https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk> - nicht die Version aus dem GooglePlay-Store!
2. xDrip+ installieren, indem die heruntergeladene APK-Datei ausgewählt wird.
3. xDrip+ starten und im Hamburger-Menü (drei waagerechte Striche links oben) folgende Einstellungen vornehmen: 
    * Einstellungen > Warnungen > Glukose-Alarm-Liste > Warnungen (niedrig) und (hoch) je nach Bedarf erstellen. 
    * Die bestehenden Alarme können mit einem langen Fingerdruck geändert werden.
    * Einstellungen > Kalibrierungs-Erinnerungen: deaktiviert (wird über die Dexcom-App erinnert)
    * Einstellungen > Datenquelle > 640G/EverSense
    * Einstellungen > Inter-App-Einstellungen > Accept Calibrations > `AN`
    * Menu > Start sensor (is only "pro forma" and has nothing to do with the running G6 sensor. Dies ist nötig, da sonst regelmäßig eine Fehlermeldung kommt.) 

For more information about xDrip+, see here [BG source page](../Configuration/BG-Source.rst).

### Beispiel für ein Alarm-Setup:

The "Urgent low alarm" (below 55 mg/dl resp. 3,1 mmol) is a standard alarm from the modified Dexcom app that cannot be disabled.

![xDrip alarms](../images/SampleSetupxDripWarning.png)

Tip for meetings / church visits / cinema etc..:

If "Do not disturb" mode is activated in the Samsung Galaxy S7 (Menu > Settings > Sounds and vibration > Do not disturb: slider to right side (= active)), the phone only vibrates during urgent low alarm and does not issue an acoustic warning. For the other alarms set up via xDrip+ you can select whether the silent mode should be ignored (acoustic sound played) or not.

## Energiesparoptionen deaktivieren

On your Samsung Galaxy S7 go to Menu > Settings > Device Maintenance > Battery > Unmonitored Apps > + Add apps: Select the apps AndroidAPS, Dexcom G6 Mobile, xDrip+ and Android Wear (if smartwatch is used) one after the other

## Optional: Sony Smartwatch 3 (SWR50) einrichten

With an Android Wear smartwatch life with diabetes can be made even more inconspicuous. The watch can be used to display the current glucose level, the status of the loop etc. on the wrist. Über die Smartwatch kann AndroidAPS auch bedient werden (z.B. Bolusgabe). To do this, double tap the CGM value of the AAPSv2 watchface. The SWR50 usually runs for a full day until the battery needs to be recharged (same charger as the Samsung Galaxy S7: microUSB).

![Smartwatch](../images/SampleSetupSmartwatch.png)

Details about the information displayed on the watchface can be found [here](../Configuration/Watchfaces.md).

* Auf dem Smartphone über den Google-Play-Store die App "Android Wear" installieren und die SWR50 nach dortigen Anweisungen koppeln.
* In AAPS Hamburger Menü (oben links) > Konfiguration > Allgemein (ganz unten in der Liste) > Wear > links aktivieren, Zahnrad klicken > Wear-Einstellungen > `Steuerung durch die Uhr`
* Auf der Smartwatch: Lange auf das Display drücken, um das Watchface zu ändern, und dann `AAPSv2` auswählen.
* Ggf. beide Geräte einmal neu starten.

## Pumpe einrichten

see [Dana RS pump](../Configuration/DanaRS-Insulin-Pump.md)