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
* If you need Clarity and want to profit from xDrip+ alarms use the `BYODA <../Hardware/DexcomG6.html#if-using-g6-with-build-your-own-dexcom-app>`_ with local broadcast to xDrip+.
* If not already set up then download `xDrip+ <https://github.com/NightscoutFoundation/xDrip>`_ and follow instructions on `xDrip+ settings page <../Configuration/xdrip.html>`_.
* Select xDrip+ in ConfigBuilder (setting in AndroidAPS).
* Nastavte xDrip+ podle popisu konfigurace na stránce <../Configuration/xdrip.html>`__
* Pokud AAPS nedostává hodnoty glykémie, když je telefon v režimu letadlo, použijte 'Identify receiver' tak, jak je popsáno v `popisu nastavení xDrip+ <../Configuration/xdrip.html>`_.

Pokud chcete použít G6 s vlastní vytvořenou upravenou Dexcom aplikací
==================================================
* As of December 2020 `Build Your Own Dexcom App <https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0>`_ (BYODA) also supports local broadcast to AAPS and/or xDrip+ (not for G5 sensors!)
* Tato aplikace vám umožní používat vysílač Dexcom G6 s libovolným telefonem s Androidem.
* Odinstalujte originální Dexcom aplikaci nebo upravenou Dexcom aplikaci, pokud jste již dříve používali kteroukoli z nich.
* Nainstalujte stažený apk
Vložte kód senzoru a sériové číslo vysílače do upravené aplikace Dexcom.
* V nastavení telefonu přejděte do aplikací > Dexcom G6 > oprávnění > další oprávnění a klepněte na 'Přístup k aplikaci Dexcom'.
* After short time BYODA should pick-up transmitter signal. (Jestli ne, budete muset zastavit senzor a znovu ho spustit.)

Nastavení pro AndroidAPS
--------------------------------------------------
* V konfiguraci vyberte 'Dexcom aplikace (upravená)'.
* Pokud neobdržíte žádné hodnoty, vyberte jiný zdroj dat, následně opět vyberte 'Dexcom aplikace (upravená)', abyste spustili proces získání oprávnění pro navázání lokálního spojení mezi AAPS a upravenou Dexcom aplikací.

Nastavení pro xDrip+
--------------------------------------------------
* Jako zdroj dat vyberte '640G/Eversense'.
V xDripu+ musí být proveden příkaz 'Spustit senzor', aby bylo možno získávat hodnoty. Toto neovlivní aktuální senzor ovládaný vaší upravenou Dexcom aplikací.
   
Poradce při potížích s G6
==================================================
Dexcom G6 konkrétní řešení problémů
--------------------------------------------------
* Vysílače se sériovým číslem začínající na 80 nebo 81 potřebují minimálně poslední stabilní verzi xDripu+ z května 2019 nebo novější noční sestavení.
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

Obecné řešení problémů
--------------------------------------------------
Obecné řešení problémů ohledně CGM můžete najít `zde <./GeneralCGMRecommendation.html#troubleshooting>`__.

Nový vysílač se spuštěným senzorem
--------------------------------------------------
Pokud se stane, že budete měnit vysílač na spuštěném senzoru, pokuste se odejmout vysílač, aniž byste poškodili samotný senzor. A video can be found at `https://youtu.be/tx-kTsrkNUM <https://youtu.be/tx-kTsrkNUM>`_.
