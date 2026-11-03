# Pompele compatibile

AAPS funcționează cu mai multe tipuri de pompe de insulină. The following list shows the currently supported devices. It indicates, in brackets, whether AAPS communicates with the pump using your phone's native Bluetooth function or whether it requires a RileyLink compatible device.

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

- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) (Bluetooth; vedeți și [Sfaturi pentru utilizarea de bază](#combov2-tips-for-basic-usage))
- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md) (Bluetooth)
- [CareLevo](../CompatiblePumps/CareLevo.md) (Bluetooth)
- [DanaR](../CompatiblePumps/DanaR-Insulin-Pump.md) (Bluetooth)
- [DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i2](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Diaconn G8](../CompatiblePumps/DiaconnG8.md) (Bluetooth)
- [EOPatch2](../CompatiblePumps/EOPatch2.md) (Bluetooth)
- [Equil 5.3](../CompatiblePumps/Equil5.3.md) (Bluetooth)
- Anumite pompe [Medtronic](../CompatiblePumps/MedtronicPump.md) mai vechi (este nevoie de un [dispozitiv suplimentar de comunicare](#CompatiblePumps-additional-communication-device))
- [Medtrum Nano 200U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Medtrum 300U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) (Bluetooth)
- [Omnipod Eros](../CompatiblePumps/OmnipodEros.md) (este nevoie de un [dispozitiv suplimentar de comunicare](#CompatiblePumps-additional-communication-device))

## Pompa mea nu este afișată

Detaliile despre stadiul altor pompe care ar putea funcționa cu AAPS se găsesc pe pagina [Controlere de pompe (posibile) viitoare](../CompatiblePumps/Future-possible-Pump-Drivers.md).

(CompatiblePumps-additional-communication-device)=
## Dispozitiv suplimentar de comunicare

If no additional communication device is mentioned, the communication between the insulin pump and **AAPS** is based on the integrated Bluetooth stack of Android, without the need for an additional communication device to translate the communication protocol.

For old Medtronic pumps and Omnipod Eros, an additional communication device (besides your phone) is needed to "translate" the radio signal from the pump to Bluetooth. Dispozitivul trebuie să folosească aceeași frecvență radio ca pompa dumneavoastră:

- **Omnipod Eros**: 433 MHz.
- **Medtronic**: 916 MHz for pumps sold in the US and Canada, 868 MHz for pumps sold elsewhere. Vedeți [Cum aflu ce frecvență folosește pompa mea](#MedtronicPump-faq).

Dispozitive de comunicare disponibile:

- ![OrangeLink](../images/omnipod/OrangeLink.png)  [Website OrangeLink](https://getrileylink.org/product/orangelink)
- ![RileyLink](../images/omnipod/RileyLink.png) [433MHz RileyLink](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  [Site Emalink](https://github.com/sks01/EmaLink) - [Informații de contact](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [Informații de contact](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [SiteLoopLink](https://www.getlooplink.org/) - [Informații de contact](https://jameswedding.substack.com/) - Netestat