# 設置報告伺服器

There are currently two reporting servers available for use with **AAPS**:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Reporting Servers](../images/Building-the-App/ReportingServer.png)

我們推薦使用Nightscout。

## Nightscout

Nightscout is a web application that can log and display your CGM data and **AAPS** data and creates reports. It is a powerful platform which has been integrated into **AAPS** for many years. 它使使用者和照顧者能夠近乎實時地追蹤患者的糖尿病資料（如果所有相關組件之間有足夠的網路連線，資料接收與提供之間僅幾秒鐘的時間可能會過去）。 It also allows caregivers to send remote commands to **AAPS**.

Nightscout是一個開源軟體。 任何人都可以使用免費或付費服務建立和運作一個Nightscout伺服器。

You can find more information on the [website of the Nightscout project](http://nightscout.github.io/).

### 選項 1 - 自行設置您的 Nightscout 伺服器

建立你的Nightscout報告伺服器可能需要一個或多個基於網路的應用程式，這些應用程式需要維護。 為了獲得完全免費的服務，當提供商移除免費方案時，你可能需要遷移你的Nightscout網站和資料。

A description of how you can set up Nightscout with the advantages and disadvantages of the various operating options, including an estimate of the costs, can be found [here](https://nightscout.github.io/nightscout/new_user/#free-diy).

### 選項2 - 付費使用託管Nightscout服務

也有不同服務提供商提供的託管Nightscout選項，按月收費。 成本是可負擔的，託管選項的好處是你無需具備IT知識或任何操作基礎設施。


現有的Nightscout用戶可以不時重新考慮Nightscout伺服器的託管方式，並根據需要切換到更合適的選項。

Some Nightscout hosted services are listed [here](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

### 進一步配置 Nightscout

One you have your Nightscout instance up and running, see [Nightscout configuration page](../SettingUpAaps/Nightscout.md) for additional considerations.

## Tidepool

Tidepool has only been available in **AAPS** since version 3.2 which was released in late 2023.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger  
As there is a delay of three hours between data income and data reporting when using **AAPS**, Tidepool it is not suitable for sharing real-time information with caregivers.  
On the other hand, Tidepool can be a great solution for sharing reports with a patient's endocrinologist if Nightscout is not an accepted solution.  
```

Tidepool is an [open source](https://github.com/tidepool-org) project. 他提供在Tidepool伺服器上免費運作帳號的選項。

More information about setting up Tidepool with AAPS [here](../SettingUpAaps/Tidepool.md).

```{admonition} **AAPS** has a the uploader for Tidepool integrated
:class: note
You do **not** need to use the uploader app to Tidepool: **AAPS** will upload blood glucose, treatments and basal for you. You only need a personal account with Tidepool. Do not upload your data with the separate Tidepool uploader tool as it will lead to duplicate values.  
```

## 下一步

Once you have set up your reporting server, you can now either set up a [dedicated Google account for AAPS use](../SettingUpAaps/DedicatedGoogleAccountForAaps.md), or go straight to [building the AAPS app](../SettingUpAaps/BuildingAaps.md). 