# Voľba pumpy

AndroidAPS v súčasnosti funguje s týmito pumpami

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

Ľudia, ktorí sa rozhodujú pre novú pumpu, sa často pýtajú, na ktorú pumpu prejsť, alebo ktorú kúpiť. Detaily o rôznych distribútoroch sú uvedené v [tejto tabuľke](https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0). Prosíme uveďte detaily toho Vášho ak tam ešte nie je.

The Combo and the Insight are solid pumps, and loopable. The advantages of the DanaR/RS/-i as the pump of choice however are:

* The Dana*R/RS/-i connects to almost any phone with Android >= 5.1 without the need to flash lineage. If your phone breaks you usually can find easily any phone that works with the Dana*R/RS/-i pumps as quick replacement... čo sa o pumpe Combo povedať nedá. (Toto sa v budúcnosti môže zmeniť, keď bude Android 8.1 rozšírenejší)

* Initial pairing is simpler with the DanaRS/-i. Toto ale obvykle robíte len raz, takže to má vplyv iba ak plánujete testovanie nových funkcií s rôznymi pumpami.

* Zatiaľ Combo pracuje s analýzou obrazovky. Vo všeobecnosti to funguje dobre ale je to pomalé. Pre uzavretý okruh to nie je príliš dôležité, keďže všetko prebieha na pozadí. Stále je to však oveľa viac času kedy musíte byť pripojený, takže väčšia šanca na výpadok spojenie bluetooth. Nie je to také jednoduché, ak napríklad odídete od telefónu, zatiaľ čo si podávate bolus a varíte.

* Combo vibruje pri ukončení dočasného bazálu, Dana* R vibruje (alebo pípa) pri SMB. Počas noci budete pravdepodobne dočasný bazál využívať častejšie ako SMB. Dana* RS sa dá nastaviť tak aby nepípala ani nevibrovala.

* Načítanie histórie na RS za niekoľko sekúnd i s COB, umožňuje jednoducho vymeniť telefón a pokračovať v uzavretom okruhu, akonáhle sa načíta pár hodnôt z CGM systému.

* Insulet Omnipod Eros requires a pod communication device such as RileyLink/Orangelink etc. The newer omnipod DASH does not since it communicates with your phone directly via Bluetooth.

* All pumps AndroidAPS can talk with are waterproof on delivery. Iba pumpy Dana sú tiež "vodotesné so zárukou" v dôsledku utesneného priestoru pre batériu a plniaceho systému zásobníka.

Combo je samozrejme veľmi dobrá pumpa a použiteľná pre uzavretý okruh. Má výhodu vo veľkom množstve rôznych infúznych setov, ktoré sa s ňou dajú použiť keďže má štandardný luer zámok. Používa štandardné batérie, ktoré môžete kúpiť na hociktorej benzínovej pumpe a v každom obchode. Ak jednu naozaj súrne potrebujete, môžete si ju ukradnúť/požičať z diaľkového ovládania v hotelovej izbe ;-)