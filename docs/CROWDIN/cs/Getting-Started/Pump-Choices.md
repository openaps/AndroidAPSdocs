# Volba pumpy

AndroidAPS v současné době funguje s těmito pumpami:

* [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
* [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
* [DanaR](../Configuration/DanaR-Insulin-Pump.md)
* [DanaRS](../Configuration/DanaRS-Insulin-Pump.md)
* [Dana-i](../Configuration/DanaRS-Insulin-Pump.md)
* [Diaconn G8 ](../Configuration/DiaconnG8.rst)
* [Omnipod Eros](../Configuration/OmnipodEros.rst)
* [Omnipod DASH](../Configuration/OmnipodDASH.md)
* some old [Medtronic](../Configuration/MedtronicPump.md)

Details of the status of other pumps that may have the potential to work with AndroidAPS are listed on the [Future (possible) Pumps](Future-possible-Pump-Drivers.md) page.

Potřebujete-li vybrat, na kterou pumpu přejít nebo kterou koupit, často se ptáte, kterou zvolit. Podrobnosti různých distributorů jsou v této [tabulce](https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0), prosím podělte se o své detaily, pokud nejsou v seznamu uvedeny.

Combo a Insight jsou odolné pumpy, které lze používat se smyčkou. The advantages of the DanaR/RS/-i as the pump of choice however are:

* The Dana*R/RS/-i connects to almost any phone with Android >= 5.1 without the need to flash lineage. If your phone breaks you usually can find easily any phone that works with the Dana*R/RS/-i pumps as quick replacement... což není tak snadné v případě Comba. (To se může v budoucnu změnit, až bude Android 8.1 více rozšířený)

* Initial pairing is simpler with the DanaRS/-i. Ale to obvykle děláte pouze jednou, takže to ovlivňuje pouze situace, kdy chcete testovat nové funkce s různými pumpami.

* Combo zatím pracuje s převodem obrazu do strojově čitelné podoby. Obecně to funguje skvěle, ale je to pomalé. Pro smyčku to tolik nevadí, vše pracuje na pozadí. Stále je ale nutné, abyste byli mnohem více času ve spojení, takže může dojít k přerušení spojení, což se může snadno stát, pokud odejdete od telefonu, zatímco se vydává bolus.

* Combo vibruje na konci dočasného bazálu, Dana* R vibruje (nebo pípne) při SMB. V noci pravděpodobně používáte více dočasné bazální dávky než SMB. U Dany* RS je možné nastavit, aby ani nepípala, ani nevibrovala.

* Čtení historie na RS proběhne v několika sekundách včetně sacharidů, takže lze jednoduše vyměnit telefon, zatímco je pumpa offline, a pokračovat ve smyčce, jakmile budou dostupné nějaké hodnoty z CGM.

* Insulet Omnipod Eros requires a pod communication device such as RileyLink/Orangelink etc. The newer omnipod DASH does not since it communicates with your phone directly via Bluetooth.

* All pumps AndroidAPS can talk with are waterproof on delivery. Pouze pumpy Dana mají také „záruku na vodotěsnost“ díky uzavřenému prostoru pro baterii a prostoru pro plnicí zásobník.

Combo je samozřejmě velmi dobrá pumpa a lze ji používat ve smyčce. Má také výhodu v podobě mnohem většího počtu typů infuzních setů se standardním závitem luer lock. A používá obyčejnou baterii, kterou můžete koupit na každé benzínce nebo večerce. A pokud opravdu jednu potřebujete, můžete ji ukrást / půjčit si ji z dálkového ovladače v hotelovém pokoji ;)