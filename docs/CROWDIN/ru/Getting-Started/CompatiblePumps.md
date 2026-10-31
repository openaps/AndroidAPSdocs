# Compatible Pumps

AAPS работает с целым рядом инсулиновых помп. The following list shows the currently supported devices. It indicates, in brackets, whether AAPS communicates with the pump using your phone's native Bluetooth function or whether it requires a RileyLink compatible device.

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

- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) (Bluetooth; see also [Tips for basic usage](#combov2-tips-for-basic-usage))
- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md) (Bluetooth)
- [CareLevo](../CompatiblePumps/CareLevo.md) (Bluetooth)
- [DanaR](../CompatiblePumps/DanaR-Insulin-Pump.md) (Bluetooth)
- [DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i2](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Diaconn G8](../CompatiblePumps/DiaconnG8.md) (Bluetooth)
- [EOPatch2](../CompatiblePumps/EOPatch2.md) (Bluetooth)
- [Equil 5.3](../CompatiblePumps/Equil5.3.md) (Bluetooth)
- Certain older [Medtronic](../CompatiblePumps/MedtronicPump.md) ([additional communication device](#CompatiblePumps-additional-communication-device) needed)
- [Medtrum Nano 200U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Medtrum 300U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) (Bluetooth)
- [Omnipod Eros](../CompatiblePumps/OmnipodEros.md) ([additional communication device](#CompatiblePumps-additional-communication-device) needed)

## My pump is not listed

Подробнее о состоянии поддержки других помп, потенциально способных работать с AAPS можно прочитать на странице [Будущие (возможные) помпы](../CompatiblePumps/Future-possible-Pump-Drivers.md).

(CompatiblePumps-additional-communication-device)=
## Additional communication device

If no additional communication device is mentioned, the communication between the insulin pump and **AAPS** is based on the integrated Bluetooth stack of Android, without the need for an additional communication device to translate the communication protocol.

For old Medtronic pumps and Omnipod Eros, an additional communication device (besides your phone) is needed to "translate" the radio signal from the pump to Bluetooth. The device must use the same radio frequency as your pump:

- **Omnipod Eros**: 433 MHz.
- **Medtronic**: 916 MHz for pumps sold in the US and Canada, 868 MHz for pumps sold elsewhere. See [How to determine what frequency my pump uses](#MedtronicPump-faq).

Available communication devices:

- ![OrangeLink](../images/omnipod/OrangeLink.png)  Сайт [OrangeLink ](https://getrileylink.org/product/orangelink)
- ![RileyLink / РайлиЛинк](../images/omnipod/RileyLink.png) [433MHz RileyLink](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  Сайт [Emalink](https://github.com/sks01/EmaLink) - [Контактная информация](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [Контактная информация](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [LoopLink сайт](https://www.getlooplink.org/) - [Контактная информация](https://jameswedding.substack.com/) - Непроверено