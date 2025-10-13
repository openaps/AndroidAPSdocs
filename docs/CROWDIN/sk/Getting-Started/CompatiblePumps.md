# Kompatibilné pumpy

AAPS funguje s viacerými inzulínovými pumpami.  Nasledujúci zoznam zobrazuje aktuálne podporované zariadenia a v zátvorkách uvádza, či systém AAPS komunikuje s pumpou pomocou natívnej funkcie Bluetooth alebo či vyžaduje zariadenie kompatibilné s Rileylink.

- <0>Accu-Chek Combo</0> (Bluetooth; pozrite si tiež aj <1>Tipy pre základné používanie Accu-Chek Combo</1>)
- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md) (Bluetooth)
- [DanaR](../CompatiblePumps/DanaR-Insulin-Pump.md) (Bluetooth)
- [DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Diaconn G8 ](../CompatiblePumps/DiaconnG8.md)  (Bluetooth)
- [EOPatch2](../CompatiblePumps/EOPatch2.md) (Bluetooth)
- [Omnipod Eros](../CompatiblePumps/OmnipodEros.md)  ([additional communication device](#CompatiblePumps-additional-communication-device) needed)
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md)  (Bluetooth)
- [Medtrum Nano](../CompatiblePumps/MedtrumNano.md)  (Bluetooth)
- [Medtrum 300U](../CompatiblePumps/MedtrumNano.md)  (Bluetooth)
- [Equil 5.3](../CompatiblePumps/Equil5.3.md) (Bluetooth)
- Niektoré staršie zariadenia [Medtronic](../CompatiblePumps/MedtronicPump.md) (vyžaduje sa [ďalšie komunikačné zariadenie](#CompatiblePumps-additional-communication-device))

## Moja pumpa nie je v zozname

Podrobnosti o stave ďalších púmp, ktoré by mohli byť v budúcnosti kompatibilné s AAPS, sú uvedené na stránke [Future (possible) Pumps](../CompatiblePumps/Future-possible-Pump-Drivers.md).

(CompatiblePumps-additional-communication-device)=
## Prídavné komunikačné zariadenie

Ak nie je uvedené žiadne ďalšie komunikačné zariadenie, komunikácia medzi inzulínovou pumpou a systémom **AAPS** je založená na integrovanom rozhraní Bluetooth systému Android bez potreby ďalšieho komunikačného zariadenia na preklad komunikačného protokolu.

Pri starých pumpách Medtronic a Omnipod Eros je potrebné ďalšie komunikačné zariadenie (okrem telefónu) na „preklad“ signálu z pumpy do rozhrania Bluetooth. Uistite sa, že ste si vybrali správnu verziu v závislosti od vašej pumpy.

- ![OrangeLink](../images/omnipod/OrangeLink.png)  [OrangeLink Website](https://getrileylink.org/product/orangelink)
- ![RileyLink](../images/omnipod/RileyLink.png) [433MHz RileyLink](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  [Emalink Website](https://github.com/sks01/EmaLink) - [Contact Info](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [Contact Info](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [LoopLink Website](https://www.getlooplink.org/) - [Contact Info](https://jameswedding.substack.com/) - Untested