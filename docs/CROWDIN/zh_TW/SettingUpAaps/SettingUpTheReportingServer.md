# 設置報告伺服器

目前有兩個可用於**AAPS**的報告伺服器：

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![報告伺服器](../images/Building-the-App/ReportingServer.png)

我們推薦使用Nightscout。

(SettingUpTheReportingServer-nightscout)=
## Nightscout

Nightscout 是一個網頁應用程式，可以記錄和顯示你的 CGM 資料以及**AAPS** 資料並生成報告。 這是一個強大的平台，已經與**AAPS** 整合多年。 它使使用者和照顧者能夠近乎實時地追蹤患者的糖尿病資料（如果所有相關組件之間有足夠的網路連線，資料接收與提供之間僅幾秒鐘的時間可能會過去）。 它也允許照護者向**AAPS** 發送遠端命令。

Nightscout是一個開源軟體。 任何人都可以使用免費或付費服務建立和運作一個Nightscout伺服器。

你可以在[Nightscout 專案網站](http://nightscout.github.io/)上找到更多資訊。

### 選項 1 - 自行設置您的 Nightscout 伺服器

建立你的Nightscout報告伺服器可能需要一個或多個基於網路的應用程式，這些應用程式需要維護。 為了獲得完全免費的服務，當提供商移除免費方案時，你可能需要遷移你的Nightscout網站和資料。

有關如何設置 Nightscout 以及各種操作選項的優缺點，包括成本估算的描述，可以在[這裡](https://nightscout.github.io/nightscout/new_user/#free-diy)找到。

### 選項 2 - 付費使用託管Nightscout服務

也有不同服務提供商提供的託管Nightscout選項，按月收費。 成本是可負擔的，託管選項的好處是你無需具備IT知識或任何操作基礎設施。


現有的Nightscout用戶可以不時重新考慮Nightscout伺服器的託管方式，並根據需要切換到更合適的選項。

一些 Nightscout 託管服務的列表可以在[這裡](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table)找到。

### 進一步配置 Nightscout

一旦你的 Nightscout 實例啟動並運行，請參見 [Nightscout 設定頁面](../SettingUpAaps/Nightscout.md) 以獲取額外的考量。

(SettingUpTheReportingServer-tidepool)=
## Tidepool

Tidepool 自**AAPS** 版本 3.2 開始提供，該版本於 2023 年底發布。

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger  
由於使用<strong>AAPS</strong>時資料收入和報告之間有三小時的延遲，Tidepool並不適合用於與照護者分享即時訊息。  
另一方面，如果 Nightscout 不是被接受的解決方案，Tidepool 可以成為與患者內分泌科醫生共享報告的理想解決方案。  
```

Tidepool 是一個[開源](https://github.com/tidepool-org)專案。 他提供在Tidepool伺服器上免費運作帳號的選項。

有關如何將 Tidepool 與 AAPS 設置的更多資訊，請[參考這裡](../SettingUpAaps/Tidepool.md)。

```{admonition} **AAPS** has a the uploader for Tidepool integrated
:class: note
你**不需要**使用上傳器應用程式來上傳到 Tidepool：**AAPS** 將為你上傳血糖、治療和基礎藥物。 你只需要擁有一個 Tidepool 的個人帳號。 請不要使用單獨的 Tidepool 上傳工具來上傳你的資料，因為這會導致資料重複。  
```

## 下一步

一旦你設置了報告伺服器，你現在可以選擇設置[專用的 Google 帳號以供 AAPS 使用](../UsefulLinks/DedicatedGoogleAccountForAaps.md)，或直接去[建立 AAPS 應用程式](../SettingUpAaps/BuildingAaps.md)。 