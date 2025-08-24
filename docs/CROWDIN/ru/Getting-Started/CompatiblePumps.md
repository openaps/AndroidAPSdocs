# Compatible Pumps

AAPS работает с целым рядом инсулиновых помп.  The following list shows the currently supported devices and indicates if AAPS communicates with the pump using your phone's native Bluetooth function or if it requires a Rileylink Compatible device in brackets.

- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) (Bluetooth; see also [Accu-Chek Combo Tips for Basic usage](../CompatiblePumps/Accu-Chek-Combo-Tips-for-Basic-usage.md))
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
- Certain older [Medtronic](../CompatiblePumps/MedtronicPump.md) ([additional communication device](#CompatiblePumps-additional-communication-device) needed)

## My pump is not listed

Подробнее о состоянии поддержки других помп, потенциально способных работать с AAPS можно прочитать на странице [Будущие (возможные) помпы](../CompatiblePumps/Future-possible-Pump-Drivers.md).

(CompatiblePumps-additional-communication-device)=
## Additional communication device

Если не указано дополнительное устройство, то связь между помпой и **AAPS** основывается на встроенном стеке Bluetooth ОС Android, не требуя дополнительных устройств для "перевода" протокола связи.

For old Medtronic pumps and Omnipod Eros, an additional communication device (besides your phone) is needed to "translate" the radio signal from pump to bluetooth. Make sure to choose the correct version depending on your pump.

- ![OrangeLink](../images/omnipod/OrangeLink.png)  Сайт [OrangeLink ](https://getrileylink.org/product/orangelink)
- ![RileyLink / РайлиЛинк](../images/omnipod/RileyLink.png) [433MHz RileyLink](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  Сайт [Emalink](https://github.com/sks01/EmaLink) - [Контактная информация](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [Контактная информация](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [LoopLink сайт](https://www.getlooplink.org/) - [Контактная информация](https://jameswedding.substack.com/) - Непроверено