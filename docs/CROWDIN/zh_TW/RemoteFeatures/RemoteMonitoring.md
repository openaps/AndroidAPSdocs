# 遠端監控

![監控兒童](../images/KidsMonitoring.png)

AAPS 提供多種遠端監控兒童的選項，並允許傳送遠端指令。 當然，你也可以使用遠端監控來追蹤你的夥伴或朋友。

## 功能

- 孩子的幫浦是由孩子的手機使用 AAPS 控制的。
- 父母可以透過他們的手機使用 **AAPSClient 應用程式** 遠端查看所有相關資料，如血糖值、活性碳水化合物、活性胰島素等。 AAPS 和 AAPSClient 應用程式中的設定必須相同。
- 父母可以使用手機上的 **xDrip+ 應用程式** 在追蹤者模式中接收警報。
- 透過[簡訊指令](../RemoteFeatures/SMSCommands.md)遠端控制 AAPS，由雙重身份驗證保護。
- 僅在同步運作正常時（例如你沒有看到不需要的資料更改如 TT、TBR 自動修改等情況）建議使用 AAPSClient 應用程式進行遠端控制，有關詳情請參閱 [2.8.1.1 版的發行說明](#important-hints-2-8-1-1)。

## 遠端監控的工具和應用程式

- 網頁瀏覽器中的 [Nightscout](https://nightscout.github.io/)（主要用於資料顯示）
- AAPSClient 應用程式是 AAPS 的精簡版本，能夠追蹤某人、更換設定檔、設定臨時目標並輸入碳水化合物。 你可以下載兩個應用程式：[AAPSClient 及 AAPSClient2](https://github.com/nightscout/AndroidAPS/releases/)。 這兩個應用程式唯一的區別是應用程式名稱。 這樣，你可以在同一部手機上安裝兩個應用程式，從而能夠追蹤兩個不同人的nightscouts。
- 如果你使用的是原版 Dexcom 應用程式，你可以使用 Dexcom 追蹤應用程式（僅顯示血糖值）。
- [xDrip+](../CompatibleCgms/xDrip.md) 在追蹤模式（主要是血糖值和**警報**）
- 在 iOS 上使用 [Sugarmate](https://sugarmate.io/) 或 [Spike](https://spike-app.com/)（主要顯示血糖值和 **警報**）。
- 一些使用者發現 [TeamViewer](https://www.teamviewer.com/) 這樣的全遠端存取工具對於進行高階遠端問題排除非常有幫助。

## 智慧型手錶選項

智慧型手錶在幫助管理 AAPS 和孩子的情況下可能是非常有用的工具。 可以進行幾種不同的配置：

- 如果父母的手機上安裝了 AAPSClient，則可以在與父母手機相連的相容智慧型手錶上安裝 [AAPSClient WearOS 應用程式](https://github.com/nightscout/AndroidAPS/releases/)。 這將顯示目前的血糖值、循環狀態，並允許輸入碳水化合物、設定臨時目標和更換設定檔。 無法從 WearOS 應用程式進行注射。
- 此外，可以在相容的智慧型手錶上構建並安裝[AAPS WearOS 應用程式](../WearOS/WearOsSmartwatch.md)，該手錶連接到孩子的手機，但由家長佩戴。 這包括上述所有功能，並具有注射胰島素的能力。 這允許父母在不需要取出孩子手機的情況下管理胰島素注射。

## 需考慮的事項

- AAPS 和 AAPSClient 應用程式中的設定必須相同。
- 考慮主裝置和追蹤者之間的時間差，因為上傳和下載需要時間，並且 AAPS 主手機只會在循環運作後上傳資料。
- 當遠端控制無法工作時，你的應急計劃是什麼（_例如_網絡問題或藍牙連線丟失）？  始終考慮當你突然無法發送新指令時，**AAPS** 會發生什麼情況。 **AAPS** 會使用目前設定覆蓋幫浦的基礎率、ISF 和 ICR。 如果切換到更強的胰島素設定，請只使用臨時設定切換（_例如_設置特定的持續時間），以防止遠端連線中斷。 當時間到期時，幫浦將恢復到原始設定。