# 相容幫浦

AAPS 支援多種胰島素幫浦。以下清單列出目前支援的裝置。括號內會標示 AAPS 是透過手機內建的藍牙功能與幫浦通訊，或是需要使用相容於 RileyLink 的裝置。

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

- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)（藍牙；另請參閱[基本使用技巧](#combov2-tips-for-basic-usage)）
- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md) (藍牙)
- [CareLevo](../CompatiblePumps/CareLevo.md)（藍牙）
- [DanaR](../CompatiblePumps/DanaR-Insulin-Pump.md) (藍牙)
- [DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md) (藍牙)
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) (藍牙)
- [Dana-i2](../CompatiblePumps/DanaRS-Insulin-Pump.md)（藍牙）
- [Diaconn G8](../CompatiblePumps/DiaconnG8.md)（藍牙）
- [EOPatch2](../CompatiblePumps/EOPatch2.md) (藍牙)
- [Equil 5.3](../CompatiblePumps/Equil5.3.md)（藍牙）
- 某些舊款[Medtronic](../CompatiblePumps/MedtronicPump.md) ([需要額外通訊設備](#CompatiblePumps-additional-communication-device))
- [Medtrum Nano 200U](../CompatiblePumps/MedtrumNano.md)（藍牙）
- [Medtrum 300U](../CompatiblePumps/MedtrumNano.md)（藍牙）
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md)（藍牙）
- [Omnipod Eros](../CompatiblePumps/OmnipodEros.md)（需要[額外的通訊裝置](#CompatiblePumps-additional-communication-device)）

## 我的幫浦不在列表中

可與AAPS配合使用的其他幫浦的狀態詳細資訊列在[未來（可能）幫浦](../CompatiblePumps/Future-possible-Pump-Drivers.md)頁面上。

(CompatiblePumps-additional-communication-device)=
## 附加通訊設備

若未提及需要額外的通訊裝置，胰島素幫浦與 **AAPS** 之間的通訊會使用 Android 內建的藍牙堆疊，不需要額外的通訊裝置來轉譯通訊協定。

舊款 Medtronic 幫浦和 Omnipod Eros 需要額外的通訊裝置（手機以外的裝置），才能將幫浦的無線電訊號「轉譯」成藍牙訊號。裝置必須使用與幫浦相同的無線電頻率：

- **Omnipod Eros**：433 MHz。
- **Medtronic**：在美國和加拿大販售的幫浦使用 916 MHz，其他地區販售的幫浦使用 868 MHz。請參閱[如何確認我的幫浦使用的頻率](#MedtronicPump-faq)。

可用的通訊裝置：

- ![OrangeLink](../images/omnipod/OrangeLink.png)  [OrangeLink 官網](https://getrileylink.org/product/orangelink)
- ![RileyLink](../images/omnipod/RileyLink.png) [433MHz RileyLink](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  [Emalink 官網](https://github.com/sks01/EmaLink) - [聯絡資訊](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [聯絡資訊](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [LoopLink 官網](https://www.getlooplink.org/) - [聯絡資訊](https://jameswedding.substack.com/) - 尚未測試