# 幫浦選擇

## Compatible Pumps

AAPS 支援多種胰島素幫浦。  The following list shows the currently supported devices and indicates if AAPS communicates with the pump using your phone's native Bluetooth function or if it requires a Rileylink Compatible device in brackets.

- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump.md) （藍牙；舊版驅動程式，使用額外的 Ruffy 應用程式 - 另見 [Accu-Chek Combo 基本使用提示](../CompatiblePumps/Accu-Chek-Combo-Tips-for-Basic-usage.md)）
- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) (Bluetooth; new driver, available starting with [AndroidAPS v.3.2](../Maintenance/ReleaseNotes.md#version-3200-dedicated-to-philoul) - see also [Accu-Chek Combo Tips for Basic usage](../CompatiblePumps/Accu-Chek-Combo-Tips-for-Basic-usage.md))
- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md) （藍牙）
- [DanaR](../CompatiblePumps/DanaR-Insulin-Pump.md) （藍牙）
- [DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md) （藍牙）
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) （藍牙）
- [Diaconn G8 ](../CompatiblePumps/DiaconnG8.md) （藍牙）
- [EOPatch2](../CompatiblePumps/EOPatch2.md) （藍牙）
- [Omnipod Eros](../CompatiblePumps/OmnipodEros.md)  ([additional communication device](#additional-communication-device) needed)
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) （藍牙）
- [Medtrum Nano](../CompatiblePumps/MedtrumNano.md) （藍牙）
- [Medtrum 300U](../CompatiblePumps/MedtrumNano.md) （藍牙）
- Certain older [Medtronic](../CompatiblePumps/MedtronicPump.md) ([additional communication device](#additional-communication-device) needed)

## My pump is not listed

可能與 AAPS 相容其他幫浦狀態的詳細信息列在 [未來（可能）幫浦](../CompatiblePumps/Future-possible-Pump-Drivers.md) 頁面。

## Additional communication device

If no additional communication device is mentioned, the communication between insulin pump and **AAPS** is based on the integrated bluetooth stack of Android, without the need of an additional communication device to translate the communication protocol.

For old Medtronic pumps and Omnipod Eros, an additional communication device (besides your phone) is needed to "translate" the radio signal from pump to bluetooth. Make sure to choose the correct version depending on your pump.

- ![OrangeLink](../images/omnipod/OrangeLink.png)  [OrangeLink Website](https://getrileylink.org/product/orangelink)
- ![RileyLink](../images/omnipod/RileyLink.png) [433MHz RileyLink](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  [Emalink Website](https://github.com/sks01/EmaLink) - [Contact Info](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [Contact Info](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [LoopLink Website](https://www.getlooplink.org/) - [Contact Info](https://jameswedding.substack.com/) - Untested
