Dexcom G5
**********
Používáte-li G5 s xDrip+
===========================
* Pokud jste tak dosud neučinili, tak stáhněte `xdrip <https://github.com/NightscoutFoundation/xDrip>`_ a postupujte podle instrukcí na Nightscout (`G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>`_.
* V xDrip vyberte Nastavení -> Komunikace mezi aplikacemi - > Lokální odesílání dat a vyberte zapnout.
* V xDrip vyberte Nastavení -> Komunikace mezi aplikacemi - > Přijímat ošetření a vyberte vypnout.
* Chcete-li, aby bylo možné přes AndroidAPS kalibrovat senzor, jděte v xDripu do Nastavení > Komunikace mezi aplikacemi > Accept Calibrations a vyberte zapnout.  Můžete také zkontrolovat v xDripu nastavení v částí Nastavení > Méně častá nastavení > Rozšířené kalibrace.
* Na kartě Konfigurace (v AndroidAPS) vyberte xDrip.
Pokud AndroidAPS nepřijímá v režimu letadlo hodnoty glykémie, musíte nastavit `Identify receiver` tak, jak je popsáno v [nastavení xDrip+](../Configuration/xdrip.md).

Používáte-li G5 s upravenou Dexcom aplikací
=========================================================
* Stáhněte si apk z 
`https://github.com/dexcomapp/dexcomapp <https://github.com/dexcomapp/dexcomapp>`_, 
kde si podle používaných jednotek glykémie vyberte odpovídající G5 verzi (mg/dl nebo mmol/l).

   * Folder 2.3 is for users of AndroidAPS 2.3, folder 2.4 for users of AAPS 2.4.
   * Open https://play.google.com/store/search?q=dexcom%20g5 on your computer. Region will be visible in URL.
   
   .. image:: ../images/DexcomG5regionURL.PNG
     :alt: Region in Dexcom G5 URL

* Zastavte senzor a odinstalujte původní aplikaci Dexcom, pokud jste tak ještě neučinili.
* Nainstalujte stažený apk
* Spusťte senzor
* Na kartě Konfigurace (nastavení v AndroidAPS) vyberte DexcomG5 aplikace (upravená).
