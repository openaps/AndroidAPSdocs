Dexcom G6
************
Základní nastavení
===============

* Postupujte podle obecných opatření při používání CGM a doporučení pro nastavení senzoru `zde <../Hardware/GeneralCGMRecommendation.html>`_.
* U G6 vysílačů vyrobených na/po konci roku 2018 se ujistěte, že používáte jednu z,nejnovějších verzí z xDrip+ (tzn. night build) <https://github.com/NightscoutFoundation/xDrip/releases>`_. Tyto vysílače mají nový firmware, a poslední stabilní verze xDrip+ (2019/01/10) si s ním neporadí.

Obecné tipy pro použití smyčky s G6
================================

Použití G6 může být o něco složitější, než se na první pohled zdá. Abyste ho mohli používat bezpečně, je třeba vědět o několika skutečnostech: 

* Pokud používáte nativní data s kalibračním algoritmem aplikace xDrip nebo Spike, je nejbezpečnější zakázat preemptivní restartování senzoru.
* Pokud musíte preemptivní restarty používat, pak se ujistěte, že senzor zavádíte v takovou denní dobu, kdy můžete sledovat změny a v případě potřeby provést kalibraci. 
* Jestliže senzory restartujete, udělejte to bez tovární kalibrace, aby byly výsledky 11 a 12 den co nejbezpečnější, nebo buďte připraveni provést kalibrace a sledujte odchylku.
* Nastřelení senzoru G6 předem v kombinaci s tovární kalibrací pravděpodobně povede k odchylkám ve výsledcích měření. Jestliže nastřelujete senzor s předstihem, pak jej pravděpodobně v zájmu co nejlepších výsledků bude nutné zkalibrovat.
* Jestliže nechcete sledovat změny, ke kterým může docházet, možná bude lepší přepnout na režim bez továrních kalibrací a používat systém jako G5.

Chcete-li se dozvědět další informace o podrobnostech a důvodech pro tato doporučení, přečtěte si `kompletní článek <http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/>`_ který sepsal Tim Street na adrese `www.diabettech.com <http://www.diabettech.com>`_.

Používáte-li G6 s aplikací xDrip+
===============================

* Pokud jste ještě nic nenastavovali, tak stáhněte `xdrip <https://github.com/NightscoutFoundation/xDrip>`_ a postupujte podle instrukcí na Nightscout (`G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>`_).
* V průvodci nastavení (v AndroidAPS) vyberte xDrip.
* Nastavte xDrip+ podle popisu konfigurace na stránce <../Configuration/xdrip.html>`_
* Pokud AndroidAPS nepřijímá v režimu letadlo hodnoty glykémie, musíte nastavit `Identify receiver` tak, jak je popsáno v `nastavení xDrip+ <../Configuration/xdrip.html>`_.

Používáte-li G6 s upravenou Dexcom aplikací
=========================================================
* Stáhněte si apk z `https://github.com/dexcomapp/dexcomapp <https://github.com/dexcomapp/dexcomapp>`_, 
kde si podle používaných jednotek glykémie vyberte odpovídající G6 verzi (mg/dl nebo mmol/l).

   * Folder 2.3 is for users of AndroidAPS 2.3, folder 2.4 for users of AAPS 2.4.
   * Open https://play.google.com/store/search?q=dexcom%20g6 on your computer. Region will be visible in URL.
   
   .. image:: ../images/DexcomG6regionURL.PNG
     :alt: Region in Dexcom G6 URL

* Zastavte senzor a odinstalujte původní aplikaci Dexcom, pokud jste tak ještě neučinili.
* Nainstalujte stažený apk
* Spusťte senzor
* Na kartě Konfigurace (nastavení v AndroidAPS) vyberte DexcomG5 aplikace (upravená).

Poradce při potížích s G6
====================

Základní informace o řešení problémů s CGM najdete `zde <./GeneralCGMRecommendation.html#Troubleshooting>`_.

Nový vysílač se spuštěným senzorem
--------------------------------------
Pokud se stane, že budete měnit vysílač na spuštěném senzoru, pokuste se odejmout vysílač, aniž byste poškodili samotný senzor. Postup můžete shlédnout na videu `https://youtu.be/AAhBVsc6NZo <https://youtu.be/AAhBVsc6NZo>`_.


