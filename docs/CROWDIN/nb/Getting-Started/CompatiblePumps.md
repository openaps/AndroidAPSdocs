# Compatible Pumps

AAPS works with a number of insulin pumps. Listen nedenfor viser enhetene som støttes nå. I parentes står det om AAPS kommuniserer med pumpen via telefonens innebygde Bluetooth, eller om det trengs en RileyLink-kompatibel enhet.

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

- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) (Bluetooth; se også [Tips for grunnleggende bruk](#combov2-tips-for-basic-usage))
- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md) (Bluetooth)
- [CareLevo](../CompatiblePumps/CareLevo.md) (Bluetooth)
- [DanaR](../CompatiblePumps/DanaR-Insulin-Pump.md) (Bluetooth)
- [DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i2](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Diaconn G8](../CompatiblePumps/DiaconnG8.md) (Bluetooth)
- [EOPatch2](../CompatiblePumps/EOPatch2.md) (Bluetooth)
- [Equil 5.3](../CompatiblePumps/Equil5.3.md) (Bluetooth)
- Enkelte eldre [Medtronic](../CompatiblePumps/MedtronicPump.md) ([ekstra kommunikasjonsenhet](#CompatiblePumps-additional-communication-device) trengs)
- [Medtrum Nano 200U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Medtrum 300U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) (Bluetooth)
- [Omnipod Eros](../CompatiblePumps/OmnipodEros.md) ([ekstra kommunikasjonsenhet](#CompatiblePumps-additional-communication-device) trengs)

## My pump is not listed

Detaljer om status for andre pumper som kanskje kan fungere med AAPS, finner du på siden [Framtidige (mulige) pumper](../CompatiblePumps/Future-possible-Pump-Drivers.md).

(CompatiblePumps-additional-communication-device)=
## Additional communication device

Hvis det ikke er nevnt noen ekstra kommunikasjonsenhet, går kommunikasjonen mellom insulinpumpen og **AAPS** via den innebygde Bluetooth-stakken i Android, uten at det trengs en ekstra enhet som oversetter kommunikasjonsprotokollen.

For gamle Medtronic-pumper og Omnipod Eros trengs det en ekstra kommunikasjonsenhet (i tillegg til telefonen) som «oversetter» radiosignalet fra pumpen til Bluetooth. Enheten må bruke samme radiofrekvens som pumpen din:

- **Omnipod Eros**: 433 MHz.
- **Medtronic**: 916 MHz for pumper solgt i USA og Canada, 868 MHz for pumper solgt andre steder. Se [Hvordan finne ut hvilken frekvens pumpen min bruker](#MedtronicPump-faq).

Tilgjengelige kommunikasjonsenheter:

- ![OrangeLink](../images/omnipod/OrangeLink.png)  [OrangeLink Website](https://getrileylink.org/product/orangelink)
- ![RileyLink](../images/omnipod/RileyLink.png) [433MHz RileyLink](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  [Emalink Website](https://github.com/sks01/EmaLink) - [Contact Info](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [Contact Info](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [LoopLink Website](https://www.getlooplink.org/) - [Contact Info](https://jameswedding.substack.com/) - Untested