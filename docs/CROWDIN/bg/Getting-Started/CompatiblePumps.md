# Съвместими помпи

AAPS работи с редица инсулинови помпи. Следващият списък показва устройствата, които се поддържат в момента. В скоби е посочено дали AAPS комуникира с помпата чрез вградената Bluetooth функция на телефона ви, или е нужно устройство, съвместимо с RileyLink.

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

- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) (Bluetooth; вижте също [Съвети за основно използване](#combov2-tips-for-basic-usage))
- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md) (Bluetooth)
- [CareLevo](../CompatiblePumps/CareLevo.md) (Bluetooth)
- [DanaR](../CompatiblePumps/DanaR-Insulin-Pump.md) (Bluetooth)
- [DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i2](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Diaconn G8](../CompatiblePumps/DiaconnG8.md) (Bluetooth)
- [EOPatch2](../CompatiblePumps/EOPatch2.md) (Bluetooth)
- [Equil 5.3](../CompatiblePumps/Equil5.3.md) (Bluetooth)
- Някои по-стари помпи [Medtronic](../CompatiblePumps/MedtronicPump.md) (нужно е [допълнително комуникационно устройство](#CompatiblePumps-additional-communication-device))
- [Medtrum Nano 200U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Medtrum 300U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) (Bluetooth)
- [Omnipod Eros](../CompatiblePumps/OmnipodEros.md) (нужно е [допълнително комуникационно устройство](#CompatiblePumps-additional-communication-device))

## Моята помпа не е в списъка

Подробности за състоянието на други помпи, които може да работят с AAPS, ще намерите на страницата [Бъдещи (възможни) драйвери за помпи](../CompatiblePumps/Future-possible-Pump-Drivers.md).

(CompatiblePumps-additional-communication-device)=
## Допълнително комуникационно устройство

Ако не е посочено допълнително комуникационно устройство, комуникацията между инсулиновата помпа и **AAPS** става чрез вградения в Android Bluetooth стек, без нужда от допълнително устройство, което да превежда комуникационния протокол.

За старите помпи Medtronic и за Omnipod Eros е нужно допълнително комуникационно устройство (освен телефона), което да „превежда“ радиосигнала от помпата към Bluetooth. Устройството трябва да използва същата радиочестота като помпата ви:

- **Omnipod Eros**: 433 MHz.
- **Medtronic**: 916 MHz за помпите, продавани в САЩ и Канада, и 868 MHz за помпите, продавани другаде. Вижте [Как да разбера каква честота използва моята помпа](#MedtronicPump-faq).

Налични комуникационни устройства:

- ![OrangeLink](../images/omnipod/OrangeLink.png)  [Уебсайт на OrangeLink](https://getrileylink.org/product/orangelink)
- ![RileyLink](../images/omnipod/RileyLink.png) [RileyLink 433MHz](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  [Уебсайт на Emalink](https://github.com/sks01/EmaLink) - [Контакт](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [Контакт](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [Уебсайт на LoopLink](https://www.getlooplink.org/) - [Контакт](https://jameswedding.substack.com/) - Не е тестван