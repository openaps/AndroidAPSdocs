Dexcom G5
**************************************************
Dexcom G5 mit xdrip+
==================================================
* Lade `xdrip <https://github.com/NightscoutFoundation/xDrip>`_ herunter und folge den Anleitungen auf Nightscout (`G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>`_.
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Lokaler Broadcast und wähle AN.
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Behandlungen annehmen und wähle AUS.
* Falls du mit AndroidAPS kalibrieren willst dann gehe in xdrip zu Einstellungen > Inter-App Einstellungen > Accept Calibrations und wähle AN.  Du solltest auch die Optionen in Einstellungen > Erweiterte Einstellungen > Erweiterte Kalibrierung kontrollieren.
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > xdrip.
* Falls AAPS im Flugmodus keine BZ-Werte von xdrip+ bekommt, nutze `Identify receiver` wie auf der Seite [xDrip+ settings page](../Configuration/xdrip.md) beschrieben.

G5 mit der gepatchten Dexcom App
==================================================
* Lade die APK von `https://github.com/dexcomapp/dexcomapp <https://github.com/dexcomapp/dexcomapp>`_ herunter  und wähle die Version, die Du benötigst (mg/dl oder mmol/l version, G5).

   * Im Ordner 2.3 befinden sich die APK für AndroidAPS 2.3 Anwender, entsprechend im Ordner 2.4 die für AAPS 2.5.
   *  Öffne https://play.google.com/store/search?q=dexcom%20g5 auf Deinem Computer. Die Region wird in der URL angezeigt.
   
   .. image:: ../images/DexcomG5regionURL.PNG
     :alt: Region in Dexcom G5 URL

* Stoppe den Sensor und deinstalliere die originale Dexcom App, falls du das noch nicht gemacht hast.
* Installiere die heruntergeladene apk
* Starte den Sensor
* Wähle gepatchte Dexcom App im Konfigurations-Generator (Konfiguration in AndroidAPS).
* xDrip Alarme kannst Du über den lokalen Broadcast nutzen: In xDrip > Hamburger Menü > Einstellungen > Datenquelle > 640G / EverSense.
