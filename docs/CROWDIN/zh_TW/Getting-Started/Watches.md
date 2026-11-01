# 智慧型手錶與 AAPS

各種智慧型手錶可以用來顯示 **AAPS** 中可用的一些資訊或執行遠端操作。

讓智慧型手錶直接控制 **AAPS**（幫浦和傳感器）需要使用完整的 Android 手錶（被視為小型 [智慧型手機](./Phones.md)）。

某些智慧型手錶可以讓你輸入治療方案或更多，但手機本身仍然管理 **AAPS**。

智慧型手錶越來越多地與 **AAPS** 結合使用，_無論是_ 對於患有糖尿病的成年人還是兒童的照護者/父母。

## 使用智慧型手錶搭配 **AAPS** 的一般優勢


根據不同的型號，智慧型手錶可以以多種不同的方式與 **AAPS** 結合使用。他們可以用來完全或部分控制 **AAPS**，或者只是遠端查看血糖值、胰島素剩餘量（IOB）及其他參數。

在很多情況下，將智慧型手錶與 **AAPS** 整合非常有用，包括開車或騎車時，以及進行運動時。有些人覺得，在會議、派對或餐桌上看手錶，比看手機更不引人注意。從安全角度來看，外出時使用智慧型手錶也有好處：使用者可以將 **AAPS** 手機收在不顯眼的地方（例如包包裡），同時使用智慧型手錶進行遠端控制。

## 父母/照護者使用 **AAPS** 的具體優勢

For a child - if their **AAPS** phone is nearby - a caregiver can use a smartwatch to monitor or make modifications without needing to use the **AAPS** phone. 例如，當 **AAPS** 手機藏在幫浦腰帶中時，這會很有用。

智慧型手錶可以作為[僅關注](../RemoteFeatures/FollowingOnly.md)的選擇，或作為{em x-id="4">額外</em>的手機遠端控制選項。

此外，與依賴移動網路或 Wi-Fi 連線的父母/照顧者追蹤手機不同，藍牙連接的智慧型手錶在遠端地點（如洞穴、船上或山腰）也可以非常有用。如果兩台裝置（**AAPS** 手機和智慧型手錶）連上同一個 Wi-Fi 網路，也可以使用 Wi-Fi。

## 不同類型的智慧型手錶與 AAPS 的互動方式

目前有五種主要方式可將智慧型手錶與 **AAPS** 結合使用。這些方式在下表中顯示： 

| 手錶設定   | 功能                    | 需求                                                                                                                                                                                                                                             |
| ------ | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 獨立運作   | 無需手機的 AAPS            | 完整 Android 智慧型手錶（檢查最小 Android 版本）</br>運行 **app-fullRelease**                                                                                                                                                                                   |
| 完全遠端控制 | 大部分 AAPS 功能           | Android **Wear OS** 手錶（檢查 Android /API）</br>運行 **wear-fullRelease**                                                                                                                                                                            |
| 遠端控制   | AAPSClient 功能         | Android **Wear OS** 手錶（檢查 Android/API）</br>運行 **[wear-aapsclientRelease](https://github.com/nightscout/AndroidAPS/releases)**                                                                                                                  |
| 遠端控制   | 部分 AAPSClient 功能      | Garmin 手錶</br>（僅適用於較舊的 Samsung Tizen 和 Fitbit 設定，不建議使用）</br>請參閱下文。                                                                                                                                                                             |
| 顯示     | 血糖、趨勢、IOB、COB、循環和幫浦狀態 | 許多智慧型手錶可透過安裝在 **AAPS** 手機上的配套應用程式，接收由[外部配套應用程式](#watches-external-companion-apps)廣播的資料：[WatchDrip+](https://bigdigital.home.blog/)（Xiaomi、Amazfit）、[GlucoDataHandler](https://github.com/pachi81/GlucoDataHandler)（Wear OS）、G-Watch</br>請參閱下文。 |

## 在購買智慧型手錶之前……

你購買的智慧型手錶具體型號取決於你所需的功能。您可以在[手機頁面](#Phones-list-of-tested-phones)找到實用資訊，包括經測試的手機清單，其中也包含部分智慧型手錶。

常見的手錶品牌包括 Samsung Galaxy、Garmin、Fossil 和 Mi band。上面表格中不同選項的摘要將在下面詳細說明，幫助你決定哪款智慧型手錶最適合你的情況。

如果你打算將智慧型手錶與**AAPS** 手機結合使用並遠端操作**AAPS**，你還需要考慮這兩個設備是否相容，尤其是如果你的手機較舊或比較特殊。

一般來說，如果你只想要追蹤血糖資料而不與**AAPS** 進行互動，有更多價格實惠且簡單的手錶可供選擇。

選擇智慧型手錶的最佳方式是搜尋 Discord 或 Facebook**AAPS** 群組中的“手錶”相關帖子。請參考其他人的使用經驗；如果較舊的貼文沒有解答您的問題，也歡迎提出具體問題。

## 完整簽章

這聽起來像是一個很有吸引力的選項，對嗎？ However, at present, only a few enthusiasts are experimenting with **AAPS** on a stand-alone watch. 只有少數智慧型手錶具備合適的介面，且能與獨立使用的 **AAPS** 和 CGM 應用程式良好搭配。常見機型包括 LEMFO LEM 15 Pro 和 16。你需要在手錶上載入 **AAPS** 的“完整” apk（通常安裝在智慧型手機上的 apk），而不是 **AAPS** 的“wear” apk。

雖然目前沒有明確的規範告訴你哪款手錶適合獨立使用 **AAPS**，但以下參數會有所幫助：

1)  Android 12 或更新版本。 2)  能夠將錶盤從“方形”模式移除，以使文本更大、更易讀。 3)  非常好的電池續航能力。 4) 良好的藍牙範圍。

大多數在獨立手錶上運作 **AAPS** 的挫折來自於與小螢幕的互動，並且目前 **AAPS** 完整應用程式的界面並非為手錶設計。 You may prefer to use a stylus to edit **AAPS** settings on the watch, due to the restricted screen size, and some AAPS buttons may not be visible on the watch screen.

額外的挑戰包括很難獲得足夠的電池續航能力，並且擁有足夠電池容量的手錶通常體積龐大且厚重。用戶反映，他們在使用手錶時遇到以下問題：需要花很多功夫調整作業系統和省電設定、啟動傳感器困難、藍牙範圍不足（難以同時維持與傳感器及幫浦的連線），以及防水性能令人存疑。示例顯示在下面的照片中。

![圖像](../images/6d787373-bc0c-404d-89aa-54d3127c4a6f.png)

If you are interested in setting up a standalone watch, read the posts and comments on the **AAPS** Facebook group (good search options are “standalone” and “Lemfo”) and Discord for more information.

## Wear OS

**AAPS** 程式碼包含一個應用外掛，可安裝在[**Wear OS** 智慧型手錶](https://wearos.google.com/#oem-carousel)上。

![已在「組態 > 與 Wear 通訊」中啟用](../images/v4/Configuration/configuration_communication_wear.png)

驗證你的智慧型手錶是否滿足 **AAPS** [前置條件](#maintenance-android-version-aaps-version)。

### 什麼是 _Wear OS_？

前三個智慧型手錶選項要求智慧型手錶安裝 **Wear OS**。

**Wear OS** 是運作在部分現代 Android 智慧型手錶上的作業系統。如果智慧型手錶的描述僅指示與 Android 和 iOS 相容，則並不意味著他運作的是 **Wear OS**。他可能運作的是其他供應商專用的作業系統，這些系統不與 **AAPS** 相容。若要安裝並使用任何版本的 **AAPS** 或 **AAPSClient**，智慧型手錶必須執行 **Wear OS 3.0、3.2 或 3.5**（Android 11、API 等級 30）**或更新版本**。每個 Wear OS 版本都會依據其所採用的 Android 版本命名：**Wear OS 3** 是 Android 11（API 等級 30），**Wear OS 4** 是 Android 13（API 等級 33），**Wear OS 5** 是 Android 14（API 等級 34），而 **Wear OS 6** 是 Android 16（API 等級 36）。執行 Wear OS 2 的手錶無法使用 **AAPS**。

如果你在 **Wear OS** 手錶上安裝 **AAPS** wear.apk，將可以選擇不同的自訂 **AAPS** 錶盤。或者，你可以使用標準的智慧型手機錶盤，並在錶盤上包含稱為“小工具”的小方塊，顯示你的 **AAPS** 資訊。複雜功能是指除了時間之外，顯示在錶盤上的任何功能。

```{note}
近期 **Wear OS** 的變更逐漸影響自訂的 **AAPS** 錶盤（Wear OS 版本越高，影響越嚴重），但**錶面功能**仍可正常運作。購買或更新手錶前，請先閱讀[Wear OS 錶盤變更](#wearos-watchface-changes)。
```


### 我的智慧型手錶會長什麼樣子？

在 [安裝 **AAPS** 到你的手錶後](../WearOS/WearOsSmartwatch.md)，你將自動能選擇你喜歡的錶盤，這些都是專為 **AAPS** 設計的錶盤。在大多數手錶上，你只需長按主畫面，直到畫面縮小，然後向右滑動以選擇另一個畫面：

![圖像](../images/67fd75f3-721c-438d-be01-1a8e03532290.png)

這些是嵌入在 **AAPS** 中的基本畫面，還有[更多的錶盤](#WearOS_changing-to-AAPS-watchface)，並且你也可以使用[複雜功能](#Watchfaces-complications)。

### 如何在日常操作中使用 Wear OS 手錶？

有關錶盤的更多細節和日常使用，包括如何製作（和分享）自己的自訂錶盤，請參閱[在智慧型手錶上操作 Wear AAPS](../WearOS/WearOsSmartwatch.md)的部分。

(Watchfaces-tizen)= (watches-external-companion-apps)=

## 外部輔助 App

**AAPS** 可以將狀態廣播給安裝在同一支手機上的其他應用程式：血糖和趨勢、IOB、COB、基礎率和臨時基礎率、設定檔名稱、循環狀態、手機和幫浦電量、藥量以及注射進度。有幾款手錶配套應用程式會讀取這些廣播，並在 **AAPS** 未直接支援的手錶上顯示資料。若要傳送資料，請在**組態** > **通訊**中啟用**外部配套應用程式**（請參閱組態頁面中的[外部配套應用程式](#external-companion-apps)）。每次有新的讀取值時都會傳送廣播，且無法手動要求傳送：配套應用程式中的重新整理按鈕不會影響 **AAPS**。

![組態 > 通訊：外部配套應用程式卡片](../images/v4/Configuration/configuration_external_companion_apps.png)

已知會使用此廣播的配套應用程式：

- [WatchDrip+](https://bigdigital.home.blog/) 適用於 Xiaomi 和 Amazfit 手錶，請參閱下方的[Xiaomi 和 Amazfit 手錶](#watches-xiaomi-amazfit)。
- [GlucoDataHandler](https://github.com/pachi81/GlucoDataHandler) 適用於 Wear OS 手錶，可作為錶面功能或小工具使用。在 **AAPS** 錶盤不穩定的 Wear OS 版本中，這是很實用的替代方案。請參閱[在 Wear OS 手錶上設定 AAPS](../WearOS/WearOsSmartwatch.md)。其配套應用程式 GlucoDataAuto 也能透過 Android Auto 在車內顯示相同資料。
- [G-Watch app](https://play.google.com/store/apps/details?id=sk.trupici.g_watch) 適用於 Samsung Tizen 手錶，之後也推出了 Wear OS 版本。在較早期的 **AAPS** 版本中，此外掛以此應用程式命名為 **Samsung Tizen**。

```{warning}
**G-Watch app** 及其 **Wear OS** 版本已停止維護，而 Samsung 也已將智慧型手錶平台從 Tizen 改為 Wear OS。 G-Watch 僅適用於現有的舊版設定，不建議在新安裝時使用。請查看專屬的 [Facebook 社團](https://www.facebook.com/groups/gwatchapp)，取得最新消息。
```

(Watchfaces-garmin)=

## Garmin

Garmin ConnectIQ 商店中有一些可與 [AAPS](https://apps.garmin.com/search?keywords=androidaps) 整合的 Garmin 錶盤。

![組態 > 通訊：Garmin 卡片](../images/v4/Configuration/configuration_garmin.png)

[AAPS Glucose Watch](https://apps.garmin.com/apps/3d163641-8b13-456e-84c3-470ecd781fb1) 直接與 **AAPS** 整合。它除了顯示血糖數值外，還顯示循環狀態資料（體內胰島素、臨時基礎）並將心率數值傳送至 **AAPS**。您可以在 ConnectIQ 商店找到此錶盤；請在**組態 → 通訊**中啟用 **Garmin** 外掛。 ![含有編號欄位的 AAPS Glucose Watch 錶盤](../images/Garmin_WF-annotated.png)

1. 圖表上的最高與最低血糖值
2. 每分鐘血糖變化量
3. 活性胰島素（IOB）
4. 距離上次讀取血糖值的時間（分：秒）
5. 臨時基礎率，為設定檔基礎率的百分比
6. 過去 2 小時的血糖圖表
7. 目前血糖值



## Fitbit

```{warning}
Google 正將 Fitbit 整合至 Google Health，並將從歐盟地區的 Fitbit 手錶移除第三方應用程式和錶盤。因此，Fitbit 錶盤<strong x-id="1">已不再是推薦選項</strong>，也不建議為了搭配<strong x-id="1">AAPS</strong>而購買 Fitbit。
```

現有 Fitbit 手錶的使用者，可參閱[Nightscout 網頁](https://nightscout.github.io/nightscout/wearable/#fitbit)，了解一些僅供監測的選項，例如 [Glance](https://glancewatchface.com/)。這些也都是第三方錶盤，因此同樣受到歐盟限制。

## 僅跟隨

這些智慧型手錶會顯示一些**AAPS** 的資訊，其中一些需要其他應用程式。

還有各種經濟實惠的智慧型手錶可供顯示資料使用。如果你使用 Nightscout，那麼這裡有關所有選項的一個不錯的總覽 [這裡](https://nightscout.github.io/nightscout/wearable/#)

以下是一些受到 **AAPS** 用戶喜愛的僅跟隨手錶選項：

(watches-xiaomi-amazfit)=
### 小米和 Amazfit 手錶

**WatchDrip+** 是由社群開發的伴隨應用程式，可在多款智慧型手錶上顯示血糖與循環資料，支援的品牌以小米（_例如_ Mi Band）和 Amazfit 為主：

![圖像](../images/4dba454b-f808-4e9e-bfc6-aba698e006f8.png)

從 0.5 版開始，**WatchDrip+** 會直接從 **AAPS** 讀取資料，不再透過 xDrip+ 中繼。在 **AAPS** 手機上：

1. 在**組態設定工具** > **通訊**中啟用**外部伴隨應用程式**，請參閱[上方說明](#watches-external-companion-apps)。它會提供目前的血糖值、變化量、趨勢箭頭、活性胰島素（IOB）和幫浦狀態。
2. 在**組態設定工具** > **通訊**中啟用 **xDrip** 外掛，並在其設定中開啟**傳送狀態至 xDrip+**。它會提供活性胰島素／活性碳水化合物狀態列；讀取幾筆血糖值後，手錶上就會顯示血糖圖表。
3. 如果手機已安裝 xDrip+，請停用其中的**廣播服務 API**（xDrip+ > 設定 > 應用程式間設定），避免手錶重複收到資料。如果 xDrip+ 只用來將資料中繼至手錶，您可以將它解除安裝。

WatchDrip+ 的重新整理按鈕對 **AAPS** 沒有作用：每次讀取到新的血糖值時，資料就會自動傳送。


如需進一步了解，包括如何設定，請參閱 [WatchDrip+ 網站](https://bigdigital.home.blog/)。這些手錶的優勢在於它們小巧且相對實惠。他們是兒童和手腕較小的人們一個不錯的選擇。

### Pebble 手錶

![圖像](../images/52032f3b-c871-4342-b8e7-659c285a39c8.png)

![圖像](../images/935d28bb-a909-4ca8-850d-6a765bd4fcde.png)


Pebble 手錶（[現已停產](https://en.wikipedia.org/wiki/Pebble_(watch))）從 2013 年到 2016 年一般出售，可能仍有二手產品可供購買。 Fitbit 接管了 Pebble 的資產。 Pebble 用戶可以使用 Urchin 表盤查看 Nightscout 資料。顯示的資料選項包括 IOB、目前的臨時基礎速率和預測值。 If open looping you can use IFTTT to create an applet that says if a Notification has been received from **AAPS** then send either an SMS or pushover notification.

### [Bluejay 手錶](https://bluejay.website/)


![BlueJay U3 手錶](../images/watches/bluejay_u3.png)


這些是獨特的技術產品，可以直接從 Dexcom 發射器接收血糖資料。許多人可能不知道，Dexcom G6/G7 發射器其實會透過_兩_個不同的頻道，傳送目前的血糖資料：手機頻道和醫療頻道。 Bluejay 手錶可以設定為透過任一頻道接收血糖資料。因此，如果 **AAPS** 使用手機頻道，Bluejay 手錶就可以使用醫療頻道。

主要優點是手錶不依賴手機或循環系統。所以，例如，如果您在海灘或主題公園中斷掉幫浦和 **AAPS** 手機的連線，並且超出了 **AAPS** 手機的範圍，您仍然可以直接從您的 Dexcom 獲取讀數到 Bluejay 手錶。

原版 **Bluejay GTS** 已停產，且無法讀取 Dexcom G7。後續機型（U1，以及目前的 **U3**；本文撰寫時以搶先體驗形式販售）是搭載完整 Android 系統並執行 xDrip 的手錶，可直接從 Dexcom G6 和 G7 接收資料。廠商將這款手錶定位為研究工具，不適用於醫療用途。使用者回報的缺點包括：手錶不一定每 5 分鐘都能讀取到血糖值，而且電池需要經常充電。請查看 [Bluejay 網站](https://bluejay.website/)，了解目前的機型和供應情況。

### Apple 手錶

查看[手錶上的 Nightscout](https://nightscout.github.io/nightscout/wearable/#)。

Apple 手錶現在支援 G7 直接連接，並且可以和 **AAPS** 同時使用。

