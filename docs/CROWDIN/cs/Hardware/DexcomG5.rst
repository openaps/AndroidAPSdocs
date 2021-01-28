Dexcom G5
**************************************************
Používáte-li G5 s xDrip+
==================================================
* Pokud jste tak dosud neučinili, tak stáhněte `xdrip <https://github.com/NightscoutFoundation/xDrip>`_ a postupujte podle instrukcí na Nightscout (`G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>`_.
* In xdrip go to Settings > Inter-app settings > Broadcast Data Locally and select ON.
* In xdrip go to Settings > Inter-app settings > Accept Treatments and select OFF.
* Chcete-li, aby bylo možné přes AndroidAPS kalibrovat senzor, jděte v xDripu do Nastavení > Komunikace mezi aplikacemi > Accept Calibrations a vyberte zapnout.  Můžete také zkontrolovat v xDripu nastavení v částí Nastavení > Méně častá nastavení > Rozšířené kalibrace.
* Na kartě Konfigurace (v AndroidAPS) vyberte xDrip.
* If AAPS does not receive BG values when phone is in airplane mode use 'Identify receiver' as describe on `xDrip+ settings page <../Configuration/xdrip.md>`_ .

Používáte-li G5 s upravenou Dexcom aplikací
==================================================
* Stáhněte si apk z 
`https://github.com/dexcomapp/dexcomapp <https://github.com/dexcomapp/dexcomapp>`_, 
kde si podle používaných jednotek glykémie vyberte odpovídající G5 verzi (mg/dl nebo mmol/l).

  * Složka 2.3 je pro uživatele AndroidAPS 2.3, složka 2.4 pro uživatele AAPS 2.5.
  * Otevřete https://play.google.com/store/search?q=dexcom%20g5 na svém počítači. Region bude viditelný v adrese URL.

   .. image:: ../images/DexcomG5regionURL.PNG
     :alt: Region v URL adrese Dexcom G5

* Zastavte senzor a odinstalujte původní aplikaci Dexcom, pokud jste tak ještě neučinili.
* Nainstalujte stažený apk
* Spusťte senzor
* Na kartě Konfigurace (nastavení v AndroidAPS) vyberte Dexcom aplikace (upravená).
* Pokud chcete použít xDrip alarmy přes místní vysílání: v xDrip hamburger menu > nastavení > hardwarový zdroj dat > 640G /EverSense.
