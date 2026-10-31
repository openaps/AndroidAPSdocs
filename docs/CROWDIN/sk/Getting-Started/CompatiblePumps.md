# Kompatibilné pumpy

AAPS funguje s viacerými inzulínovými pumpami. Nasledujúci zoznam ukazuje momentálne podporované zariadenia. V zátvorke je uvedené, či AAPS komunikuje s pumpou cez vstavaný Bluetooth vášho telefónu, alebo či potrebuje zariadenie kompatibilné s RileyLinkom.

<!-- List of hidden pages to avoid overcrowding the menu -->

```{toctree}
:hidden:

../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md
../CompatiblePumps/Accu-Chek-Insight-Pump.md
../CompatiblePumps/CareLevo.md
../CompatiblePumps/DanaR-Insulin-Pump.md
../CompatiblePumps/DanaRS-Insulin-Pump.md
../CompatiblePumps/DiaconnG8.md
../CompatiblePumps/EOPatch2.md
../CompatiblePumps/Equil5.3.md
../CompatiblePumps/MedtronicPump.md
../CompatiblePumps/MedtrumNano.md
../CompatiblePumps/OmnipodDASH.md
../CompatiblePumps/OmnipodEros.md
../CompatiblePumps/Future-possible-Pump-Drivers.md
```

- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) (Bluetooth; pozrite aj [Tipy na základné používanie](#combov2-tips-for-basic-usage))
- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md) (Bluetooth)
- [CareLevo](../CompatiblePumps/CareLevo.md) (Bluetooth)
- [DanaR](../CompatiblePumps/DanaR-Insulin-Pump.md) (Bluetooth)
- [DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i2](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Diaconn G8](../CompatiblePumps/DiaconnG8.md) (Bluetooth)
- [EOPatch2](../CompatiblePumps/EOPatch2.md) (Bluetooth)
- [Equil 5.3](../CompatiblePumps/Equil5.3.md) (Bluetooth)
- Niektoré staršie pumpy [Medtronic](../CompatiblePumps/MedtronicPump.md) (potrebné je [ďalšie komunikačné zariadenie](#CompatiblePumps-additional-communication-device))
- [Medtrum Nano 200U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Medtrum 300U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) (Bluetooth)
- [Omnipod Eros](../CompatiblePumps/OmnipodEros.md) (potrebné je [ďalšie komunikačné zariadenie](#CompatiblePumps-additional-communication-device))

## Moja pumpa nie je v zozname

Podrobnosti o stave ďalších púmp, ktoré by v budúcnosti mohli fungovať s AAPS, sú uvedené na stránke [Budúce (možné) ovládače púmp](../CompatiblePumps/Future-possible-Pump-Drivers.md).

(CompatiblePumps-additional-communication-device)=
## Prídavné komunikačné zariadenie

Ak nie je uvedené ďalšie komunikačné zariadenie, komunikácia medzi inzulínovou pumpou a **AAPS** funguje cez vstavaný Bluetooth v Androide. Ďalšie komunikačné zariadenie na preklad komunikačného protokolu nie je potrebné.

Pre staré pumpy Medtronic a Omnipod Eros je potrebné ďalšie komunikačné zariadenie (okrem telefónu), ktoré „prekladá“ rádiový signál z pumpy na Bluetooth. Zariadenie musí používať rovnakú rádiovú frekvenciu ako vaša pumpa:

- **Omnipod Eros**: 433 MHz.
- **Medtronic**: 916 MHz pre pumpy predávané v USA a Kanade, 868 MHz pre pumpy predávané inde. Pozrite [Ako zistiť, akú frekvenciu používa moja pumpa](#MedtronicPump-faq).

Dostupné komunikačné zariadenia:

- ![OrangeLink](../images/omnipod/OrangeLink.png)  [Webová stránka OrangeLink](https://getrileylink.org/product/orangelink)
- ![RileyLink](../images/omnipod/RileyLink.png) [433MHz RileyLink](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  [Webová stránka Emalink](https://github.com/sks01/EmaLink) - [Kontakt](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [Kontakt](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [Webová stránka LoopLink](https://www.getlooplink.org/) - [Kontakt](https://jameswedding.substack.com/) - Netestované