# 組件總覽

AAPS 不僅僅是一個（自建的）應用程式，他只是你的閉環系統中的幾個模組之一。 在決定使用哪些組件之前，最好先查看[組件設定](index-component-setup)。

![組件總覽](../images/modules.png)

```{note}
**重要的安全提醒**

本文件中討論的 AAPS 安全功能基礎是建立在你用來建置系統的硬體安全功能上。 使用經過測試且完全運作的 FDA 或 CE 認證的胰島素幫浦和 CGM 來進行自動胰島素劑量控制是至關重要的。 對這些組件進行硬體或軟體修改可能會導致胰島素劑量異常，對使用者造成重大風險。 如果你發現或被提供了損壞、修改或自製的胰島素幫浦或 CGM 接收器，*請勿使用*他們來建立 AAPS 系統。

此外，僅使用製造商批准的原裝耗材，例如插入器、套管和胰島素容器，也同樣重要。 使用未經測試或修改的耗材可能會導致 CGM 不準確和胰島素劑量錯誤。 胰島素在劑量錯誤時極具危險 - 請勿透過修改耗材來冒生命危險。

最後，你不能使用 SGLT-2 抑制劑（格列佛新類），因為他們會無法預測地降低血糖水平。  這種藥物與一個降低基礎速率以增加血糖的系統結合使用時尤其危險，因為由於格列佛新的影響，血糖可能不會上升，可能導致缺乏胰島素的危險情況發生。
```

## 必要模組

### 適合你的糖尿病治療的個性化劑量演算法

雖然這不是可以製作或購買的東西，但這是最容易被低估但卻至關重要的「模組」。 當你讓一個演算法幫助管理你的糖尿病時，他需要正確的設定才能避免嚴重錯誤。 即使你仍然缺少其他模組，你也可以與你的糖尿病醫療團隊一起驗證和調整你的「設定檔」。 大多數使用閉環系統的人會使用日夜節律的 BR、ISF 和 CR，這些數值會根據一天中激素影響調整胰島素敏感性。

設定檔包括

- BR（基礎速率）
- ISF（胰島素敏感因子）是每單位胰島素降低的血糖單位數
- CR（碳水化合物比例）是每單位胰島素對應的碳水化合物克數
- DIA（胰島素作用時間）。

(module-no-use-of-sglt-2-inhibitors)=
### 禁止使用 SGLT-2 抑制劑

SGLT-2 抑制劑，又稱格列佛新類，會抑制腎臟對葡萄糖的再吸收。 由於他們會無法預測地降低血糖水平，你**不能**在使用 AAPS 這樣的閉環系統時服用這些藥物！ 這樣會有極大的酮酸中毒或低血糖風險！ 這種藥物與一個降低基礎速率以增加血糖的系統結合使用時尤其危險，因為由於格列佛新的影響，血糖可能不會上升，可能導致缺乏胰島素的危險情況發生。

(module-phone)=
### 手機

目前的 AAPS 版本需要一台運作 Android 9.0 或以上版本的智慧型手機。 因此，如果你正在考慮購買新手機，建議至少選擇 Android 9，但最優選擇是 Android 10 或 12。 對於舊版 Android，可以使用舊版 AAPS，詳見：[版本說明](../Maintenance/ReleaseNotes.md#android-version-and-aaps-version)

用戶正在建立一個[已測試的手機和手錶清單](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing)

如果要記錄不在電子表格中的手機或手錶，請填寫這個[表單](https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform)。

如果對電子表格有任何問題，請發送電子郵件至[hardware@androidaps.org](mailto:hardware@androidaps.org)，如果有手機/手錶型號捐贈，請發送電子郵件至[donations@androidaps.org](mailto:hardware@androidaps.org)。

### 胰島素幫浦

AAPS **目前**適用於以下幫浦：

- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump.md) (使用額外 Ruffy 應用的舊驅動程序)
- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) (新驅動程序，自 AndroidAPS v.3.2 開始提供)
- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)
- [DanaR](../CompatiblePumps/DanaR-Insulin-Pump.md)
- [DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md)
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md)
- [Diaconn G8 ](../CompatiblePumps/DiaconnG8.md)
- [EOPatch2](../CompatiblePumps/EOPatch2.md)
- [Omnipod Eros](../CompatiblePumps/OmnipodEros.md)  ([需要額外通訊設備](#additional-communication-device))
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md)
- [Medtrum Nano](../CompatiblePumps/MedtrumNano.md)
- [Medtrum 300U](../CompatiblePumps/MedtrumNano.md)
- 某些舊款[Medtronic](../CompatiblePumps/MedtronicPump.md) ([需要額外通訊設備](#additional-communication-device))

如果未提到額外的通訊設備，那麼胰島素幫浦與 AAPS 之間的通訊是基於 Android 的內建藍牙堆疊，不需要額外的通訊設備來轉換通訊協議。

**其他幫浦** 有潛力與 AAPS 一同使用，列在[未來可能的幫浦](../CompatiblePumps/Future-possible-Pump-Drivers.md)頁面中。

(module-additional-communication-device)=
#### 額外的通訊設備

對於舊型美敦力幫浦，除了手機外，還需要額外的通訊設備來將幫浦的無線電信號「轉換」為藍牙信號。 請確保根據你的幫浦選擇正確的版本。

- ![OrangeLink](../images/omnipod/OrangeLink.png)  [OrangeLink 官網](https://getrileylink.org/product/orangelink)
- ![RileyLink](../images/omnipod/RileyLink.png) [433MHz RileyLink](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  [Emalink 官網](https://github.com/sks01/EmaLink) - [聯絡資訊](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [聯絡資訊](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [LoopLink 官網](https://www.getlooplink.org/) - [聯絡資訊](https://jameswedding.substack.com/) - 尚未測試

**那麼，哪款幫浦最適合與 AAPS 進行閉環系統？**

Combo、Insight 和舊型美敦力幫浦都是穩定且可用於閉環系統的幫浦。 Combo 的優勢是可以選擇更多類型的輸注組，因為他使用標準的 luer 鎖。 而且他使用的是標準電池，你可以在任何加油站、24 小時便利店買到，如果真的需要，也可以從飯店房間的遙控器裡「借用」一顆 ;-)

然而，DanaR/RS 和 Dana-i 相對於 Combo 作為首選幫浦的優勢在於：

- Dana 幫浦可以與幾乎任何運作 Android 5.1 或更高版本的手機連線，而無需刷入 Lineage。 如果你的手機壞了，通常可以輕鬆找到與 Dana 幫浦相容的手機作為快速替代品......這對於 Combo 來說並不容易。 （隨著 Android 8.1 越來越普及，這種情況可能會改變）
- Dana-i/RS 的初始配對比較簡單。 但通常這只需要做一次，所以他僅在你想使用不同幫浦測試新功能時才有影響。
- 目前，Combo 使用螢幕解析進行工作。 總的來說，這效果不錯，但速度較慢。 對於閉環系統來說，這並不太重要，因為所有操作都在背景中進行。 然而，你需要更多的時間來保持連線，這就意味著更多的時間內藍牙連線可能會中斷，這在你走開並同時進行注射和做飯時可能會發生。
- Combo 在暫時性基礎率（TBR）結束時會震動，DanaR 在 SMB 時會震動（或發出嗶聲）。 在夜間，你可能會更頻繁地使用 TBR 而不是 SMB。  Dana-i/RS 可以配置為既不發出嗶聲也不震動。
- 幾秒鐘內讀取 Dana-i/RS 的歷史紀錄及碳水化合物資料，使你可以在離線狀態下輕鬆切換手機，並在獲得一些 CGM 資料後立即繼續閉環操作。
- 所有與 AAPS 相容的幫浦在交付時都是防水的。 只有 Dana 幫浦因其密封的電池艙和儲液槽填充系統在保固範圍內也具備防水性能。

### 血糖來源

這只是與 AAPS 相容的所有 CGM/FGM 的簡短概述。 有關更多詳情，請參閱[這裡](CompatiblesCgms.md)。 簡單提示：如果你能在 xDrip+ 應用程式或 Nightscout 網站上顯示你的血糖資料，則可以在 AAPS 中選擇 xDrip+（或使用網路連線的 Nightscout）作為血糖來源。

- [Dexcom G7](../CompatibleCgms/DexcomG7.md): 與 xDrip+ 或已修補的應用程式配合使用
- [Dexcom G6](../CompatibleCgms/DexcomG6.md): 從版本 3.0 開始建議使用 BOYDA (詳情請參見[發行說明](../Maintenance/ReleaseNotes.md#version-300))。 xDrip+ 至少需要 2022.01.14 版本或更高版本
- [Dexcom G5](../CompatibleCgms/DexcomG5.md): 與 xDrip+ 應用程式或已修補的 Dexcom 應用程式配合使用
- [Libre 3](../CompatibleCgms/Libre3.md): 與 xDrip+ 一起使用 (不需要發射器)
- [Libre 2](../CompatibleCgms/Libre2.md): 與 xDrip+ 一起使用 (不需要發射器)
- [Libre 1](../CompatibleCgms/Libre1.md): 您需要一個像 Bluecon 或 MiaoMiao 的發射器 (自行組裝或購買) 並與 xDrip+ 應用一起使用
- [Eversense](../CompatibleCgms/Eversense.md)：目前僅能與 ESEL 應用程式和修補版 Eversense 應用程式結合使用（不適用於 Dana RS 和 LineageOS，但 DanaRS 和 Android 或 Combo 和 Lineage OS 配合使用效果良好）
- [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md): 介面相當複雜，包含許多額外項目
- [PocTech](../CompatibleCgms/PocTech.md)

### Nightscout

Nightscout 是一個開源網頁應用程式，可以記錄並顯示你的 CGM 資料和 AAPS 資料，並生成報告。 你可以在[Nightscout 項目網站](http://nightscout.github.io/)上找到更多資訊。 你可以建立自己的[Nightscout 網站](https://nightscout.github.io/nightscout/new_user/)，使用[zehn.be](https://ns.10be.de/en/index.html)上的半自動 Nightscout 設置，或在自己的伺服器上託管（這適合 IT 專家）。

Nightscout 與其他模組獨立運作。 要完成目標 1，你將需要他。

有關如何配置 Nightscout 以與 AAPS 一起使用的更多訊息，請參閱[這裡](../SettingUpAaps/Nightscout.md)。

### AAPS-.apk 檔案

系統的基本組件。 在安裝應用程式之前，你需要先生成 apk 檔案（這是 Android 應用程式的檔案擴展名）。 說明位於[這裡](../SettingUpAaps/BuildingAaps.md)。

## 可選模組

### 智慧型手錶

你可以選擇任何 Android Wear 1.x 及以上版本的智慧型手錶。 大多數使用閉環系統的人佩戴 Sony Smartwatch 3（SWR50），因為他是唯一一款在手機不在範圍內時仍能從 Dexcom G6/G5 獲取讀取值的手錶。 某些其他手錶也可以透過修補來作為獨立接收器使用（更多詳情請參閱[這份文檔](https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5)）。

用戶正在建立一個[已測試的手機和手錶清單](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing)。 有不同的 AAPS 使用手錶錶盤，你可以在[這裡](../UsefulLinks/WearOsSmartwatch.md)找到。

如果要記錄不在電子表格中的手機或手錶，請填寫這個[表單](https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform)。

如果對電子表格有任何問題，請發送電子郵件至[hardware@androidaps.org](mailto:hardware@androidaps.org)，如果有手機/手錶型號捐贈，請發送電子郵件至[donations@androidaps.org](mailto:hardware@androidaps.org)。

### xDrip+

即使你不需要將 xDrip+ 應用程式作為血糖來源，你仍然可以使用他來設置警報或顯示血糖資料。 你可以設置任意多的警報，指定警報應該啟動的時間，是否可以覆蓋靜音模式等。 有關一些 xDrip+ 資訊，請參閱[這裡](../CompatibleCgms/xDrip.md)。 請注意，這款應用程式的文檔並非總是最新的，因為其進展相當快速。

## 等待模組期間該做什麼

有時，獲取所有閉環模組需要一些時間。 但不用擔心，還有很多事情可以在等待期間進行。 檢查並（在適當的情況下）調整基礎速率（BR）、胰島素碳水比例（IC）、胰島素敏感因子（ISF）等是**必要**的。 此外，開環模式可能是測試系統並熟悉 AAPS 的好方法。 使用這種模式，AAPS 會提供治療建議，你可以手動執行。

你可以繼續閱讀這裡的文檔，與其他閉環系統用戶線上或離線交流，或[閱讀](../Where-To-Go-For-Help/Background-reading.md)文檔或其他用戶撰寫的內容（即使需要小心，不是所有內容都正確或適合你複製）。

**完成了嗎？** 如果你已經將所有 AAPS 組件組裝好（恭喜！）或至少有足夠的組件來開始使用開環模式，那麼在每個新目標之前，你應該先閱讀[目標描述](../SettingUpAaps/CompletingTheObjectives.md)，然後設置你的[硬體](index-component-setup)。
