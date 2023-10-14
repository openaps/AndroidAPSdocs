# Dexcom G5

## Používáte-li G5 s xDrip+

-   If not already set up then download [xdrip](https://github.com/NightscoutFoundation/xDrip) and follow instructions on nightscout ([G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support).
-   V xDrip+ vyberte Nastavení -> Komunikace mezi aplikacemi - > Lokální odesílání dat a vyberte ZAPNOUT.
-   V xDrip vyberte Nastavení -> Komunikace mezi aplikacemi - > Přijímat ošetření a vyberte VYPNOUT.
-   If you want to be able to use AAPS to calibrate then in xdrip go to Settings > Interapp Compatibility > Accept Calibrations and select ON. You may also want to review the options in Settings > Less Common Settings > Advanced Calibration Settings.
-   Select xdrip in ConfigBuilder (setting in AAPS).
-   Pokud AAPS nedostává hodnoty glykémie, když je telefon v režimu letadlo, použijte 'Identify receiver' tak, jak je popsáno v [popisu nastavení xDrip+](../Configuration/xdrip.md) .

## Používáte-li G5 s upravenou Dexcom aplikací

-   Download the apk from <https://github.com/dexcomapp/dexcomapp>, and choose the version that fits your needs (mg/dl or mmol/l version, G5).

    -   Folder 2.3 is for users of AAPS 2.3, folder 2.4 for users of AAPS 2.5.
    -   Open <https://play.google.com/store/search?q=dexcom%20g5> on your computer. Region bude viditelný v adrese URL.

    ![Region v URL adrese Dexcom G5](../images/DexcomG5regionURL.PNG)

-   Stop sensor and uninstall the original Dexcom app, if not already done.

-   Nainstalujte stažený apk

-   Spusťte senzor

-   Select Dexcom App (patched) in ConfigBuilder (setting in AAPS).

-   If you want to use xDrip alarms via local broadcast: in xDrip hamburger menu > settings > hardware data source > 640G /EverSense.
