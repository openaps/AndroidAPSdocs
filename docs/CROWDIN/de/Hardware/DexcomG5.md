# Dexcom G5

## Dexcom G5 mit xDrip+

-   Falls Du xDrip noch nicht eingerichtet hast, dann lade es Dir herunter [xdrip](https://github.com/NightscoutFoundation/xDrip) und richte es entsprechend der Dokumentation unter [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)  ein.
-   In xDrip+ gehe zu Einstellungen > Inter-App Einstellungen > Lokaler Broadcast und wähle AN.
-   In xDrip+ gehe zu Einstellungen > Inter-App Einstellungen > Behandlungen annehmen und wähle AUS.
-   Falls du mit AndroidAPS kalibrieren willst dann gehe in xDrip+ zu Einstellungen > Inter-App Einstellungen > Accept Calibrations und wähle AN. Du solltest auch die Optionen in Einstellungen > Erweiterte Einstellungen > Erweiterte Kalibrierung kontrollieren.
-   Select xdrip in ConfigBuilder (setting in AndroidAPS).
-   If AAPS does not receive BG values when phone is in airplane mode use 'Identify receiver' as describe on [xDrip+ settings page](../Configuration/xdrip.md) .

## G5 mit der gepatchten Dexcom App

-   Lade die APK von [hier](https://github.com/dexcomapp/dexcomapp) herunter und wähle die Version, die Du benötigst (entweder mg/dl oder mmol/l, G5 oder G6).

    -   Im Ordner 2.3 befinden sich die APK für AndroidAPS 2.3 Anwender, entsprechend im Ordner 2.4 die für AAPS 2.5.
    -   Öffne <https://play.google.com/store/search?q=dexcom%20g5> auf deinem Computer. Die Region wird in der URL angezeigt.

    ![Region in Dexcom G5 URL](../images/DexcomG5regionURL.PNG)

-   Stoppe den Sensor und deinstalliere die originale Dexcom App, falls du das noch nicht gemacht hast.

-   Installiere die heruntergeladene APK

-   Starte den Sensor

-   Wähle Dexcom-App (patched) im ConfigBuilder (Einstellung in AndroidAPS).

-   xDrip+ Alarme kannst Du über den lokalen Broadcast nutzen: In xDrip > Hamburger Menü > Einstellungen > Datenquelle > 640G / EverSense.
