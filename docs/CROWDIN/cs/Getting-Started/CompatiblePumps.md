# Compatible Pumps

AAPS works with a number of insulin pumps. Následující seznam ukazuje nyní podporovaná zařízení. V závorce je uvedeno, zda AAPS komunikuje s pumpou přes vestavěný Bluetooth vašeho telefonu, nebo zda je potřeba zařízení kompatibilní s RileyLink.

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

- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) (Bluetooth; viz také [Tipy pro základní použití](#combov2-tips-for-basic-usage))
- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md) (Bluetooth)
- [CareLevo](../CompatiblePumps/CareLevo.md) (Bluetooth)
- [DanaR](../CompatiblePumps/DanaR-Insulin-Pump.md) (Bluetooth)
- [DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i2](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Diaconn G8](../CompatiblePumps/DiaconnG8.md) (Bluetooth)
- [EOPatch2](../CompatiblePumps/EOPatch2.md) (Bluetooth)
- [Equil 5.3](../CompatiblePumps/Equil5.3.md) (Bluetooth)
- Některé starší pumpy [Medtronic](../CompatiblePumps/MedtronicPump.md) (je potřeba [další komunikační zařízení](#CompatiblePumps-additional-communication-device))
- [Medtrum Nano 200U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Medtrum 300U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) (Bluetooth)
- [Omnipod Eros](../CompatiblePumps/OmnipodEros.md) (je potřeba [další komunikační zařízení](#CompatiblePumps-additional-communication-device))

## My pump is not listed

Informace o stavu dalších pump, které by mohly s AAPS fungovat, najdete na stránce [Budoucí (možné) pumpy](../CompatiblePumps/Future-possible-Pump-Drivers.md).

(CompatiblePumps-additional-communication-device)=
## Additional communication device

Pokud není uvedeno další komunikační zařízení, komunikace mezi inzulínovou pumpou a **AAPS** probíhá přes vestavěný Bluetooth v Androidu. Není potřeba žádné další zařízení, které by překládalo komunikační protokol.

Pro staré pumpy Medtronic a Omnipod Eros je potřeba další komunikační zařízení (kromě telefonu), které „překládá“ rádiový signál z pumpy na Bluetooth. Zařízení musí používat stejnou rádiovou frekvenci jako vaše pumpa:

- **Omnipod Eros**: 433 MHz.
- **Medtronic**: 916 MHz pro pumpy prodávané v USA a Kanadě, 868 MHz pro pumpy prodávané jinde. Viz [Jak zjistit, jakou frekvenci moje pumpa používá](#MedtronicPump-faq).

Dostupná komunikační zařízení:

- ![OrangeLink](../images/omnipod/OrangeLink.png)  [OrangeLink Website](https://getrileylink.org/product/orangelink)
- ![RileyLink](../images/omnipod/RileyLink.png) [433MHz RileyLink](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  [Emalink Website](https://github.com/sks01/EmaLink) - [Contact Info](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [Contact Info](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [LoopLink Website](https://www.getlooplink.org/) - [Contact Info](https://jameswedding.substack.com/) - Untested