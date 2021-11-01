Dexcom G6
**************************************************
Základní nastavení
==================================================

* Postupujte podle obecných opatření při používání CGM a doporučení pro nastavení senzoru `zde <../Hardware/GeneralCGMRecommendation.html>`__.
* U G6 vysílačů vyrobených na/po konci roku 2018 se ujistěte, že používáte jednu z,nejnovějších verzí z xDrip+ (tzn. night build) <https://github.com/NightscoutFoundation/xDrip/releases>`_. Tyto vysílače mají nový firmware, a poslední stabilní verze xDrip+ (2019/01/10) si s ním neporadí.

Obecné tipy pro použití smyčky s G6
==================================================

Použití G6 může být o něco složitější, než se na první pohled zdá. Abyste ho mohli používat bezpečně, je třeba vědět o několika skutečnostech: 

* Pokud používáte nativní data s kalibračním algoritmem aplikace xDrip+ nebo Spike, nejbezpečnější postup je zakázat preemptivní restartování senzoru.
* Pokud musíte preemptivní restarty používat, pak se ujistěte, že senzor zavádíte v takovou denní dobu, kdy můžete sledovat změny a v případě potřeby provést kalibraci. 
* Jestliže senzory restartujete, udělejte to bez tovární kalibrace, aby byly výsledky 11 a 12 den co nejbezpečnější, nebo buďte připraveni provést kalibrace a sledujte odchylku.
* Nastřelení senzoru G6 předem v kombinaci s tovární kalibrací pravděpodobně povede k odchylkám ve výsledcích měření. Jestliže nastřelujete senzor s předstihem, pak jej pravděpodobně v zájmu co nejlepších výsledků bude nutné zkalibrovat.
* Jestliže nechcete sledovat změny, ke kterým může docházet, možná bude lepší přepnout na režim bez továrních kalibrací a používat systém jako G5.

Chcete-li se dozvědět další informace o podrobnostech a důvodech pro tato doporučení, přečtěte si `kompletní článek <https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/>`_ který sepsal Tim Street na adrese `www.diabettech.com <https://www.diabettech.com>`_.

Používáte-li G6 s aplikací xDrip+
==================================================
* Vysílač Dexcom G6 může být připojen současně k přijímači Dexcom (nebo pumpě t:slim) a zároveň k vašemu telefonu.
* Pokud používáte xDrip+ jako přijímač, nejprve odinstalujte aplikaci Dexcom. **K vysílači se nelze připojit prostřednictvím obou aplikací xDrip+ a Dexcom současně!**
* Jestliže potřebujete službu Clarity, a zároveň chcete využívat výhod výstrah xDripu+, použijte `upravenou aplikaci Dexcom </Hardware/DexcomG6.html#if-using-g6-with-patched-dexcom-app>`_ a funkci místního odesílání do xDripu+.
* Pokud jste ještě nic nenastavovali, tak stáhněte `xdrip <https://github.com/NightscoutFoundation/xDrip>`_ a postupujte podle instrukcí na Nightscout (`G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>`_).
* Select xDrip+ in ConfigBuilder (setting in AndroidAPS).
* Nastavte xDrip+ podle popisu konfigurace na stránce <../Configuration/xdrip.html>`__
* Pokud AAPS nedostává hodnoty glykémie, když je telefon v režimu letadlo, použijte 'Identify receiver' tak, jak je popsáno v `popisu nastavení xDrip+ <../Configuration/xdrip.html>`_.

Používáte-li G6 s upravenou Dexcom aplikací
==================================================
* Stáhněte si apk z `https://github.com/dexcomapp/dexcomapp <https://github.com/dexcomapp/dexcomapp>`_, 
kde si podle používaných jednotek glykémie vyberte odpovídající G6 verzi (mg/dl nebo mmol/l).

  * Složka 2.4 pro uživatele aktuální verze, složka 2.3 je pouze pro zastaralý AndroidAPS 2.3.
  * Otevřete https://play.google.com/store/search?q=dexcom%20g6 na svém počítači. 
  * Klikněte na odkaz na aplikaci Dexcom G6 na zobrazené stránce výsledků vyhledávání.
  * Region bude viditelný v adrese URL.

  .. image:: ../images/DexcomG6regionURL.PNG
    :alt: Region v URL adrese Dexcom G6

* Odinstalujte originální aplikaci Dexcom.
* Nainstalujte stažený apk
Vložte kód senzoru a sériové číslo vysílače do upravené aplikace Dexcom.
* Po krátkém čase by aplikace měla zachytit signál vysílače. (Jestli ne, budete muset zastavit senzor a znovu ho spustit.)
* Na kartě Konfigurace (nastavení v AndroidAPS) vyberte DexcomG aplikace (upravená).
* Pokud chcete použít alarmy xDripu+ přes lokální předávání dat: v xDrip+ v hamburgerovém menu > Nastavení > Hardwarový zdroj dat > 640G /EverSense.
* Neexistuje žádný lokální přenos dat z upravené aplikace Dexcom přímo do xDripu+. Lokální vysílání musí jít přes AAPS, jak je popsáno výše.

Pokud chcete použít G6 s vlastní vytvořenou upravenou Dexcom aplikací
==================================================
* Od prosince 2020 `Build Your Own Dexcom App <https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0>`_ (BYODA - vytvoření vlastní upravené Dexcom aplikace) podporuje také místní přenos dat do AAPS a/nebo xDrip+ (ne pro senzory G5!)
* Tato aplikace vám umožní používat vysílač Dexcom G6 s libovolným telefonem s Androidem.
* Odinstalujte originální Dexcom aplikaci nebo upravenou Dexcom aplikaci, pokud jste již dříve používali kteroukoli z nich.
* Nainstalujte stažený apk
Vložte kód senzoru a sériové číslo vysílače do upravené aplikace Dexcom.
* In phone settings go to apps > Dexcom G6 > permissions > additional permissions and press 'Access Dexcom app'.
* Po krátkém čase by aplikace měla zachytit signál vysílače. (Jestli ne, budete muset zastavit senzor a znovu ho spustit.)

Settings for AndroidAPS
--------------------------------------------------
* Select 'Dexcom App (patched)' in config builder.
* If you don't receive any values select any other data source, then re-select 'Dexcom App (patched)' to trigger the demand for permissions to establish the connection between AAPS and BYODA-broadcast.

Settings for xDrip+
--------------------------------------------------
* Select '640G/Eversense' as data source.
* Command 'start sensor' must be performed in xDrip+ in order to receive values. This will not affect your current sensor controlled by Build Your Own Dexcom App.
   
Poradce při potížích s G6
==================================================
Dexcom G6 konkrétní řešení problémů
--------------------------------------------------
* Vysílače se sériovým číslem starting with 80 or 81 need at least last stable xDrip+ version from May 2019 or a newer nightly build.
* Vysílače se sériovým číslem začínajícím na 8G potřebuje minimálně noční sestavení z 25. července 2019 nebo novější.
* K vysílači nelze připojit aplikaci xDrip+ i Dexcom současně.
* Vyčkejte nejméně 15 minut. mezi zastavením a spuštěním senzoru.
* Nepoužívejte zadání dřívějšího času. Odpovězte na otázku "Byl senzor zaveden dnes?" vždy "Ano, dnes".
* Nepovolujte "restartování senzoru" při nastavení nového senzoru
* Nespuštějte nový senzor dokud nejsou zobrazeny následující informace ve Statusu -> G5/G6 status -> PhoneServiceState:

  * Sériové číslo vysílače začínající na 80 nebo 81: "Got data hh:mm" (tj. "Got data 19:04")
  * Sériové číslo vysílače začínající na 8G nebo 8H: "Got glucose hh:mm" (tj. "Got glucose 19:04") nebo "Got no raw hh:mm" (tj. "Got now raw 19:04")

.. image:: ../images/xDrip_Dexcom_PhoneServiceState.png
  :alt: xDrip+ PhoneServiceState

General troubleshooting
--------------------------------------------------
General Troubleshoothing for CGMs can be found `here <./GeneralCGMRecommendation.html#troubleshooting>`__.

Nový vysílač se spuštěným senzorem
--------------------------------------------------
Pokud se stane, že budete měnit vysílač na spuštěném senzoru, pokuste se odejmout vysílač, aniž byste poškodili samotný senzor. Postup můžete shlédnout na videu `https://youtu.be/AAhBVsc6NZo <https://youtu.be/AAhBVsc6NZo>`_.
