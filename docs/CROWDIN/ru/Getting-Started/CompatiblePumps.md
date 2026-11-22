# Совместимые помпы

AAPS работает с целым рядом инсулиновых помп. В списке ниже указаны устройства, которые поддерживаются сейчас. В скобках указано, общается ли AAPS с помпой через встроенный Bluetooth вашего телефона или нужно устройство, совместимое с RileyLink.

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

- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) (Bluetooth; см. также [Советы по основному использованию](#combov2-tips-for-basic-usage))
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
- [Omnipod Eros](../CompatiblePumps/OmnipodEros.md) (необходимо [дополнительное устройство для связи](#CompatiblePumps-additional-communication-device))

## Моей помпы нет в списке

Подробнее о состоянии поддержки других помп, потенциально способных работать с AAPS можно прочитать на странице [Будущие (возможные) помпы](../CompatiblePumps/Future-possible-Pump-Drivers.md).

(CompatiblePumps-additional-communication-device)=
## Дополнительное устройство для связи

Если дополнительное устройство для связи не указано, помпа общается с **AAPS** через встроенный стек Bluetooth Android, и дополнительное устройство для перевода протокола связи не нужно.

Для старых помп Medtronic и Omnipod Eros нужно дополнительное устройство для связи (кроме вашего телефона), которое «переводит» радиосигнал помпы в Bluetooth. Устройство должно использовать ту же радиочастоту, что и ваша помпа:

- **Omnipod Eros**: 433 МГц.
- **Medtronic**: 916 МГц для помп, проданных в США и Канаде, 868 МГц для помп, проданных в других странах. См. [Как определить, какую частоту использует моя помпа](#MedtronicPump-faq).

Доступные устройства для связи:

- ![OrangeLink](../images/omnipod/OrangeLink.png)  Сайт [OrangeLink ](https://getrileylink.org/product/orangelink)
- ![RileyLink / РайлиЛинк](../images/omnipod/RileyLink.png) [433MHz RileyLink](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  Сайт [Emalink](https://github.com/sks01/EmaLink) - [Контактная информация](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [Контактная информация](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [LoopLink сайт](https://www.getlooplink.org/) - [Контактная информация](https://jameswedding.substack.com/) - Непроверено