# Dexcom G5

## Dexcom G5 mit xDrip+

-   Falls Du xDrip noch nicht eingerichtet hast, dann lade es Dir herunter [xdrip](https://github.com/NightscoutFoundation/xDrip) und richte es entsprechend der Dokumentation unter [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)  ein.
-   In xDrip+ gehe zu Einstellungen > Inter-App Einstellungen > Lokaler Broadcast und wähle AN.
-   In xDrip+ gehe zu Einstellungen > Inter-App Einstellungen > Behandlungen annehmen und wähle AUS.
-   If you want to be able to use AAPS to calibrate then in xdrip go to Settings > Interapp Compatibility > Accept Calibrations and select ON. Du solltest auch die Optionen in Einstellungen > Erweiterte Einstellungen > Erweiterte Kalibrierung kontrollieren.
-   Select xdrip in ConfigBuilder (setting in AAPS).
-   Falls AAPS im Flugmodus keine BZ-Werte von xdrip+ bekommt, nutze "Identify receiver" wie auf der [Seite xDrip+ Einstellungen](../Configuration/xdrip.md) beschrieben.

## G5 mit der gepatchten Dexcom App

-   Lade die APK von [hier](https://github.com/dexcomapp/dexcomapp) herunter und wähle die Version, die Du benötigst (entweder mg/dl oder mmol/l, G5 oder G6).

    -   Folder 2.3 is for users of AAPS 2.3, folder 2.4 for users of AAPS 2.5.
    -   Öffne <https://play.google.com/store/search?q=dexcom%20g5> auf deinem Computer. Die Region wird in der URL angezeigt.

    ![Region in Dexcom G5 URL](../images/DexcomG5regionURL.PNG)

-   Stoppe den Sensor und deinstalliere die originale Dexcom App, falls du das noch nicht gemacht hast.

-   Installiere die heruntergeladene APK

-   Starte den Sensor

-   Select Dexcom App (patched) in ConfigBuilder (setting in AAPS).

-   xDrip+ Alarme kannst Du über den lokalen Broadcast nutzen: In xDrip > Hamburger Menü > Einstellungen > Datenquelle > 640G / EverSense.
