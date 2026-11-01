# 遠端監控

![監控兒童](../images/KidsMonitoring.png)

__AAPS__ 提供多項功能，可遠端監測第 1 型糖尿病兒童的狀況，也能傳送遠端指令給__AAPS__。同樣地，__AAPSClient__ 也可用於遠端監控，追蹤你伴侶或朋友的 __AAPS__。

## 功能

- 孩子的幫浦由孩子的手機透過 __AAPS__ 控制。
- 照護者可以在 Android 手機上使用 **AAPSClient APK**，遠端查看血糖值、活性碳水化合物、活性胰島素等相關資料（**AAPSClient** 的 iPhone 版本正在開發中，請參閱 [AAPSClient](AapsClient.md)）。在 __AAPS__ 中變更的設定會與 __AAPSClient__ 同步，反之亦然。
- 如果已設定 xDrip 夥伴模式，照護者也可以在 Android 手機上使用**xDrip 應用程式的追蹤者模式**接收警示。
- 使用 [簡訊指令](../RemoteFeatures/SMSCommands.md) 遠端控制 __AAPS__，會以兩步驟驗證來保護安全。
- 透過 __AAPSClient__ 進行遠端控制時，會使用 **AAPS** 4 新增的簽章指令通道：用戶端必須先與主控端**配對**（使用 QR Code 或 PIN 碼），每項指令都會由主控端確認並執行。每位照護者的手機都可以設定自己的[角色](#client-master-control-roles)，範圍從唯讀到完整控制皆可；請參閱[主控端 ↔ 用戶端控制](#client-master-control)。

## 遠端監控的工具和應用程式

- 使用網頁瀏覽器開啟 [Nightscout](https://nightscout.github.io/)（主要用於顯示資料）。
- [__AAPSClient__](AapsClient.md) 是精簡版的 __AAPS__，可追蹤主控端 __AAPS__ 的狀態。與主控端**配對**後，還能傳送遠端指令，包括碳水化合物、__臨時目標__、__設定檔切換</strong)，甚至注射（請參閱[主控端 ↔ 用戶端控制](#client-master-control)）。共有 3 個應用程式可供下載：[AAPSClient、AAPSClient2 和 AAPSClient3](https://github.com/nightscout/AndroidAPS/releases/)。因此，照護者可以在同一支手機上追蹤最多 3 位不同對象（例如，照護兩位各自患有第 1 型糖尿病的孩子，且每位孩子都有自己的 Nightscout 帳號和主控端 __AAPS__）。</li>
- 如果您使用原版 Dexcom 應用程式，可以使用 Dexcom Follow（僅顯示血糖值）。
- 使用追蹤者模式的 [xDrip](../CompatibleCgms/xDrip.md)（主要顯示血糖值和**警示**）。
- 在 iOS 上使用 [Sugarmate](https://sugarmate.io/) 或 [Spike](https://spike-app.com/)（主要顯示血糖值和**警示**）。
- 一些用戶發現像[TeamViewer](https://www.teamviewer.com/)這樣的完整遠端桌面工具對於進行進階的遠端問題排除非常有幫助。</ul>

## 智慧型手錶選項

智慧型手錶在協助以 __AAPS__ 管理第一型糖尿病孩童時，非常有幫助。有幾種不同的選項可供選擇：

- 選項 1 - 若照護者的手機已安裝 __AAPSClient__，即可在與照護者手機連線的相容智慧型手錶上安裝 [AAPSClient WearOS 應用程式](https://github.com/nightscout/AndroidAPS/releases/)。此功能會顯示目前的__血糖__、循環狀態和注射記錄，也允許輸入碳水化合物、變更__臨時目標__和__設定檔__。如果用戶端已與主控端**配對**，也可以透過手錶開始**注射**：指令會經由用戶端傳送至主控端，由主控端確認並執行（請參閱[主控端 ↔ 用戶端控制](#client-master-control)）。
- 選項 2 — 也可以建置 [AAPS WearOS 應用程式](../WearOS/WearOsSmartwatch.md)，並安裝在相容的智慧型手錶上。手錶可連線至孩子的手機，但由照護者配戴。除了上述所有功能外，這也能直接注射胰島素，不必拿走孩子隨身攜帶的手機。
- 選項 3 — 僅顯示：對於 **AAPS** 無法直接支援的手錶（例如 Xiaomi、Amazfit，或透過 Wear OS 手錶的錶盤複雜功能顯示資訊），可使用 WatchDrip+ 或 GlucoDataHandler 等搭配應用程式，顯示血糖、活性胰島素、活性碳水化合物和循環狀態。這些資料由手錶連線的 **AAPS** 或 **AAPSClient** 手機上的**外部搭配應用程式**外掛提供。請參閱[外部搭配應用程式](#watches-external-companion-apps)。

## 需考慮的事項

- 請留意主控端與追蹤端之間可能會有時間差，因為資料上傳和下載需要時間，而且__AAPS__ 主控端手機只會在循環執行後上傳資料。
- 如果遠端控制無法使用，您的緊急應變計畫是什麼？（_例如_網路問題或藍牙連線中斷）始終考慮當你突然無法發送新指令時，**AAPS** 會發生什麼情況。 **AAPS** 會使用目前設定覆蓋幫浦的基礎率、ISF 和 ICR。如果切換到更強的胰島素設定，請只使用臨時設定切換（_例如_設置特定的持續時間），以防止遠端連線中斷。當時間到期時，幫浦將恢復到原始設定。
