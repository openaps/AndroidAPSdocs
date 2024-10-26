# 幫浦選擇

## 相容幫浦

AAPS 支援多種胰島素幫浦。  以下列表顯示目前支援的設備，並指示**AAPS**是使用你的手機的本地藍牙功能與幫浦通訊，還是需要括號中的Rileylink相容設備。

- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump.md) （藍牙；舊版驅動程式，使用額外的 Ruffy 應用程式 - 另見 [Accu-Chek Combo 基本使用提示](../CompatiblePumps/Accu-Chek-Combo-Tips-for-Basic-usage.md)）
- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)（藍牙；新驅動程式，在[AndroidAPS v.3.2](../Maintenance/ReleaseNotes.md#version-3200-dedicated-to-philoul)開始提供——另見[Accu-Chek Combo基本使用小技巧](../CompatiblePumps/Accu-Chek-Combo-Tips-for-Basic-usage.md)）
- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md) （藍牙）
- [DanaR](../CompatiblePumps/DanaR-Insulin-Pump.md) （藍牙）
- [DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md) （藍牙）
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) （藍牙）
- [Diaconn G8 ](../CompatiblePumps/DiaconnG8.md) （藍牙）
- [EOPatch2](../CompatiblePumps/EOPatch2.md) （藍牙）
- [Omnipod Eros](../CompatiblePumps/OmnipodEros.md)（需要[附加通訊設備](#additional-communication-device)）
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) （藍牙）
- [Medtrum Nano](../CompatiblePumps/MedtrumNano.md) （藍牙）
- [Medtrum 300U](../CompatiblePumps/MedtrumNano.md) （藍牙）
- 某些舊型[美敦力](../CompatiblePumps/MedtronicPump.md)（需要[附加通訊設備](#additional-communication-device)）

## 我的幫浦不在列表中

可能與 AAPS 相容其他幫浦狀態的詳細信息列在 [未來（可能）幫浦](../CompatiblePumps/Future-possible-Pump-Drivers.md) 頁面。

## 附加通訊設備

如果沒有提到附加通訊設備，則胰島素幫浦與**AAPS**之間的通訊是基於Android的內建藍牙堆棧，不需要額外的通訊設備來翻譯通訊協議。

對於舊型的美敦力幫浦和Omnipod Eros，需要額外的通訊設備（除了你的手機）來「翻譯」幫浦至藍牙的無線信號。 請確保根據你的幫浦選擇正確的版本。

- ![OrangeLink](../images/omnipod/OrangeLink.png) [OrangeLink網站](https://getrileylink.org/product/orangelink)
- ![RileyLink](../images/omnipod/RileyLink.png) [433MHz RileyLink](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png) [Emalink網站](https://github.com/sks01/EmaLink) - [聯絡資訊](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png) DiaLink - [聯絡資訊](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png) [LoopLink網站](https://www.getlooplink.org/) - [聯絡資訊](https://jameswedding.substack.com/) - 尚未測試
