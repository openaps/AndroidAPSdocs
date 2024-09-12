# 設置報告伺服器

目前有兩個報告伺服器可供 **AAPS** 使用：

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![報告伺服器](../images/Building-the-App/ReportingServer.png)

我們推薦使用Nightscout。

## Nightscout

Nightscout是一個強大的平台，多年來已經整合進了 **AAPS**。 它使用戶和照護者能夠近乎實時地追蹤病患的糖尿病資料（如果所有相關組件之間有足夠的網際網路連線，資料接收和提供之間只會有幾分鐘的延遲）。 它還允許照護者向 **AAPS** 發送遠端命令。

Nightscout是一個開源軟體。 任何人都可以使用免費或付費服務建立和運行一個Nightscout伺服器。

### 選項1 - 自行設置您的Nightscout伺服器

建立您的Nightscout報告伺服器可能需要一個或多個基於網路的應用程式，這些應用程式需要維護。 為了獲得完全免費的服務，當提供商移除免費方案時，您可能需要遷移您的Nightscout網站和資料。

有關如何設置Nightscout及各種操作選項的優缺點的描述，包括成本估算，可以在[這裡](https://nightscout.github.io/nightscout/new_user/#free-diy)找到。

### 選項2 - 付費使用託管Nightscout服務

也有不同服務提供商提供的託管Nightscout選項，按月收費。 成本是可負擔的，託管選項的好處是您無需具備IT知識或任何操作基礎設施。

現有的Nightscout用戶可以不時重新考慮Nightscout伺服器的託管方式，並根據需要切換到更合適的選項。

一些託管Nightscout服務列在[這裡](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table)。

## Tidepool

Tidepool自 **AAPS** 3.2版本（2023年末釋出）以來才可用。

:::{admonition} Tidepool與 **AAPS** 僅用於報告
:class: danger\
由於使用 **AAPS** 時資料接收和報告之間有三小時的延遲，Tidepool不適合與照護者共享實時資訊。\
另一方面，如果Nightscout不是可接受的解決方案，Tidepool可以是一個與病患內分泌科醫師共享報告的好方案。\
:::

Tidepool是一個[開源](https://github.com/tidepool-org)專案。 它提供在Tidepool伺服器上免費運行帳號的選項。

您可以在[這裡](https://app.tidepool.org/signup)建立Tidepool帳號。

:::{admonition} **AAPS** 已經集成了Tidepool上傳器
:class: note
您**不**需要使用Tidepool的單獨上傳應用程式：**AAPS** 會為您上傳血糖、治療和基礎率資料。 您只需要擁有Tidepool的個人帳號。 請勿使用單獨的Tidepool上傳工具上傳資料，這會導致資料重複。\
:::

一旦您設置了報告伺服器，您現在可以設置[專用的AAPS Google帳號](Dedicated-Google-account-for-AAPS.md)，或者直接進入[構建AAPS應用程式](building-AAPS.md)。
