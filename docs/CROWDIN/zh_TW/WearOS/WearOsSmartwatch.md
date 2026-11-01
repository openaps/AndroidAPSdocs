# 在 Wear OS 手錶上設定 AAPS

以下說明適用於您需要自行建置的 **AAPS Wear** APK。如果您尚未建置，請參閱 [此處](../WearOS/BuildingAapsWearOS.md)連結的指南在建置時，請確保使用與手機版 **AAPS** APK 相同的金鑰庫（keystore）檔案。

您也可以將其中部分資訊應用於 **AAPSClient** 與 **PumpControl** 的 **Wear** APK。每個**Wear**應用都將與其一致的手機應用進行通信。例如：**AAPSClient Wear**應用可用於顯示**AAPSClient**資料，而不是**AAPS**資料。如果同時安裝了多個用戶端版本（**AAPSClient**、**AAPSClient2**、**AAPSClient3**），每個版本的資訊方塊上方都會以該版本的強調色顯示小標題，方便您滑動瀏覽時辨別。

## Wear OS 版本和相容性

(wearos-watchface-changes)=

### Wear OS 錶盤變更（對 AAPS 錶盤的影響）

```{admonition} Why newer Wear OS watches break AAPS watchfaces
:class: warning

Google 於 2025 年 6 月[宣布變更](https://android-developers.googleblog.com/2025/06/upcoming-changes-to-wear-os-watch-faces.html)，將逐步淘汰舊版錶盤引擎（AndroidX／Wearable Support Library，或稱「WSL」引擎），改採較新的宣告式 **Watch Face Format**。 **AAPS** 自訂錶盤是以舊版引擎建置，因此 Wear OS 版本越新，AAPS 錶盤越可能發生異常或停止運作。

此變更只會影響**錶盤**，不會影響 AAPS 的**複雜功能**、資訊方塊和遠端控制功能。這也是為什麼 **Wear OS 手錶的韌體／系統更新可能會導致 AAPS 錶盤無法運作**；而且更新後，手錶無法降回較舊的 Wear OS 版本。如果您的 AAPS 錶盤目前運作正常，請**停用手錶自動更新**。
```

下表摘要說明 Google 的變更對不同 Wear OS 版本上的 AAPS（舊版引擎）錶盤造成的影響：

| Wear OS 版本              | 基礎 Android 版本 | API 層級 | 對 AAPS（舊版）錶盤的影響                                                                                     |
| ----------------------- | ------------- | ------ | --------------------------------------------------------------------------------------------------- |
| Wear OS 6               | Android 16    | 36     | **舊版錶盤已無法使用** — AAPS 會改為安裝[Watch Face Format 錶盤](#wearos-aaps-v4-watchface)：您自訂的錶盤，或 AAPS V4 複雜功能錶盤 |
| Wear OS 5               | Android 14    | 34     | **嚴重** — 互動模式經常無法運作、複雜功能凍結、動畫停止                                                                     |
| Wear OS 4               | Android 13    | 33     | **中度** — 更新頻率受限、漏掉更新、部分功能失效                                                                         |
| Wear OS 3.0 / 3.2 / 3.5 | Android 11    | 30     | **輕微** — 仍支援舊版引擎                                                                                    |

如果您的手錶使用的版本會導致 AAPS 錶盤運作不穩定，您可以改用相容的錶盤，透過**複雜功能**顯示 AAPS 資料；也可以使用 [GlucoDataHandler](https://play.google.com/store/apps/details?id=de.michelinside.glucodatahandler) 的複雜功能，資料由 **AAPS** 的[外部輔助應用程式](#external-companion-apps)外掛提供。在 **Wear OS 6 及更新版本**中，AAPS 會安裝以新格式製作的替代錶盤，請參閱下方說明。

(wearos-aaps-v4-watchface)=

### Wear OS 6 及更新版本 — AAPS 安裝的錶盤

搭載 **Wear OS 6 或更新版本**的手錶無法將傳統 AAPS 錶盤做為錶盤使用。這類手錶上的 AAPS 手錶應用程式內建了兩款使用 Google 全新 **Watch Face Format** 格式的錶盤。 Wear OS 只允許應用程式安裝**一款**錶盤，因此您可以選擇要在手錶上使用哪一款：

- **自訂錶盤**（預設）：顯示您從手機使用 **載入錶盤**功能載入的自訂錶盤（請參閱[切換至 AAPS 錶盤](#WearOS_changing-to-AAPS-watchface)）。手錶會將您的設計顯示為圖片，因此所有現有的自訂錶盤都能使用。自訂錶盤可能會提供資訊欄位，但這些欄位在圖片中**無法使用**，因為 Wear OS 只會將資訊欄位資料提供給真正的錶盤。長按錶盤即可進入唯一的設定：選擇螢幕恆亮時要顯示一般時鐘，還是調暗後的自訂設計。
- **資訊欄位錶盤**（**AAPS V4** 錶盤）：內含**七個資訊欄位**，並**預先設定為顯示 AAPS 資料**：血糖值、IOB、COB、[血糖圖表資訊欄位](#Watchfaces-complications)、基礎率／臨時目標，以及左上方資訊欄位中的**執行模式**圖示（輕觸即可從手錶變更循環模式）。輕觸上方的時間即可開啟手錶的鬧鐘應用程式。您可以在錶盤編輯器中變更各個資訊欄位的顯示內容。

請在手機上選擇：開啟 **Wear** 外掛，然後在**手錶上安裝的錶盤**下方選擇其中一款。只有在連線至 Wear OS 6 或更新版本的手錶時，才會顯示此卡片。 **AAPS** 會要求您確認，因為手錶會立即替換目前的錶盤。切換離開**資訊欄位錶盤**時，您在錶盤編輯器中變更的資訊欄位也會重設為預設值，確認訊息中會說明這一點。選取**資訊欄位錶盤**時，自訂錶盤按鈕會隱藏，並改為顯示錶盤預覽。選取**資訊欄位錶盤**時載入自訂錶盤，**AAPS** 會提醒您切換至**自訂錶盤**，才能在手錶上看到該錶盤。

- AAPS 手錶應用程式首次在這類手錶上執行時，所選錶盤會**自動安裝並啟用**，之後也會隨著手錶應用程式**自動更新**。
- 如果您移除了錶盤，手錶 AAPS**主選單**底部會出現**安裝錶盤**項目，輕觸即可重新安裝。

連線至搭載 Wear OS 5 或更舊版本的手錶時，不會顯示**手錶上安裝的錶盤**卡片（此功能所需的機制必須使用 Wear OS 6）；傳統錶盤在這類手錶上仍可照常使用。

(wearos-complications-watchface-setup)=

### 資訊欄位錶盤 — 建議設定

**資訊欄位錶盤**有七個資訊欄位。長按錶盤，輕觸**自訂**，再為各個資訊欄位選擇資料來源。資訊欄位的編號與錶盤編輯器相同：**1** 左側、**2** 中央、**3** 右側、**4** 圖表、**5** 底部、**6** 左上方，以及 **7** 右上方。

| 預設設定                                                                 | 替代設定                                                                     |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| ![資訊欄位錶盤，預設設定](../images/wearos/complications_watchface_default.png) | ![資訊欄位錶盤，替代設定](../images/wearos/complications_watchface_alternative.png) |

| 欄位 | 位置  | 預設                                 | 替代項目                     |
| -- | --- | ---------------------------------- | ------------------------ |
| 1  | 左   | IoB圖示                              | BR、CoB及IoB               |
| 2  | 中央  | 血糖                                 | 血糖                       |
| 3  | 右   | CoB圖示                              | 基礎率與目標                   |
| 4  | 圖表  | 血糖圖表                               | 血糖圖表                     |
| 5  | 底部  | 基礎率與目標                             | Uploader/顯示手機電池          |
| 6  | 左上方 | 運行模式                               | 運行模式                     |
| 7  | 右上方 | 上傳器／手機電池，或可開啟 **AAPS 延後警示**的應用程式捷徑 | 可開啟 **AAPS 延後警示**的應用程式捷徑 |

請從手錶內建的**應用程式捷徑**資訊欄位中，選擇 **AAPS 延後警示**捷徑。輕觸後即可延後手機上正在響起的鬧鐘。

```{tip}
在手錶上開啟<strong>螢幕恆亮</strong>（<strong>設定</strong> > <strong>螢幕</strong>）。這樣手腕垂下時，錶盤仍會顯示您的血糖，而不是空白畫面或一般時鐘。
```

```{admonition} No complication data while the watch is locked
:class: note
如果您在<strong>設定</strong> > <strong>安全性與隱私權</strong>中設定了<strong>螢幕鎖定類型</strong>，手錶在鎖定時會隱藏資訊欄位資料，因此錶盤上的資訊欄位會保持空白，直到您解鎖為止。若要讓資料持續顯示，請在相同選單中關閉<strong>隱藏資訊</strong>。
```

### Wear OS 3

使用[Wear Installer 2](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV)、Easy Fire Tools（稍後說明）或 ADB 安裝**AAPS Wear** apk。  
在**AAPS Wear**操作上沒有限制。

(BuildingAapsWearOs-WearOS5)=

### Wear OS 4 和 Wear OS 5

例如：尚**未**更新至 Wear OS 6 的 Galaxy Watch 4、5、6、7 和 Ultra，或 Pixel Watch。請在**設定** > **關於手錶** > **軟體**中查看版本。

請使用 [Wear Installer 2](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV) 安裝 **AAPS Wear** APK（Wear OS 5 請參閱[這部影片](https://www.youtube.com/watch?v=yef_qGvcCnk)）。所有 **AAPS Wear** 功能都可正常使用，但傳統 **AAPS** 錶盤有上述表格所述的限制：在 Wear OS 4 上更新頻率受限，在 Wear OS 5 上則常常無法正常運作。

```{admonition} Wear OS 5
:class: warning
在 Wear OS 5 上，安裝 Wear app 後，必須立即使用 Wear Installer 2 選取 AAPS 錶盤：安裝程式會在安裝程序結束時提供 **AAPS (Custom)** 錶盤。如果不小心切換到其他錶盤，請重新安裝。 Changing the watchface settings (Dark, Matching divider, etc.) may not be possible.

如果目前使用的經典錶盤運作正常，請**停用自動更新手錶**：下一次韌體更新很可能會導致錶盤無法使用。如果仍要更新至 Wear OS 6，請參閱上方的說明：**AAPS** 會以新格式安裝自己的錶盤。
```

如果錶盤不太穩定，可以考慮改用 [GlucoDataHandler](https://play.google.com/store/apps/details?id=de.michelinside.glucodatahandler)，並搭配複雜功能使用。您必須在 **AAPS** 中啟用 [外部輔助 app](#external-companion-apps) 外掛。

### Wear OS 6 及更新版本

範例：搭載 One UI 8 Watch 的 Galaxy Watch 4 及更新機型、2025 年更新後的 Pixel Watch。大多數 Galaxy 和 Pixel 手錶都已收到這項更新。

使用 [Wear Installer 2](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV) 安裝 **AAPS Wear** APK。無法使用經典錶盤；**AAPS** 會自動安裝手機上選取的錶盤，請參閱[AAPS 安裝的錶盤](#wearos-aaps-v4-watchface)。 **AAPS Wear** 的操作不受限制。

## 如何使用 **AAPS** 設定 Samsung Galaxy Watch 4 智慧型手錶

本節假設你對智慧型手錶完全陌生，將向你介紹一款流行手錶（**Galaxy Watch 4**）的基本操作，隨後是逐步設置 **AAPS** 在手錶上運作的指南。

_本指南適用於搭載 Wear OS 3 的 Galaxy Watch。_在 Wear OS 4 及更新版本上，手機或電腦透過 ADB 連線時，手錶會要求輸入**配對碼**。 Wear Installer 2 和下方的終端機操作步驟[都](#BuildingAapsWearOs-WearOS5-TShoot)支援此功能。

這裡有關於 [Galaxy Watch 5](https://www.youtube.com/watch?v=Y5upzOIxwTU) 和 [Galaxy Watch 6](https://www.youtube.com/watch?v=D6bq20KzPW0) 的基本設置指南

## 智慧型手錶的基本熟悉指南

After basic setup of your watch according to the video above, go to the playstore on the phone and download the following apps: "Galaxy Wearable", “Samsung” and either “Easy Fire tools” or "Wear Installer 2".

有許多第三方 YouTube 影片可幫助你熟悉新手錶，例如：

[https://www.youtube.com/watch?v=tSVkqWNmO2c](https://www.youtube.com/watch?v=tSVkqWNmO2c)

“Galaxy Wearable”應用程式內也有一個使用手冊部分。在手機上打開 Galaxy Wearable，搜尋手錶，嘗試將手錶與手機配對。 Depending on your version, this may prompt you to install one more app, “galaxy watch 4 plugin”, from the playstore (takes a while to download). 在手機上安裝此應用程式，然後再次在 Galaxy Wearable 應用程式中嘗試將手錶與手機配對。透過一系列選單並勾選各種偏好設定。

## 設置 Samsung 帳號

你需要確保用來設置 Samsung 帳號的電子郵件帳戶的出生日期顯示用戶年齡 13 歲以上，否則 Samsung 的許可權批准將非常困難。如果你已為 13 歲以下的孩子建立了 Gmail 帳號並使用該電子郵件地址，你無法簡單地將其更改為成人帳戶。解決此問題的一種方法是將目前的出生日期修改為使目前年齡為 12 歲零 364 天。第二天，該帳戶將被轉換為成人帳戶，然後你可以繼續設置 Samsung 帳戶。

(remote-control-transferring-the-aaps-wear-app-onto-your-aaps-phone)=

## 將**AAPS** Wear應用傳輸到你的**AAPS**手機

從 Android Studio 將 Wear.apk 載入到你的手機，可以透過以下方式進行：

a) 使用 USB 傳輸線將 **AAPS** wear apk 檔案放入手機，然後將其“側載”到手錶上。透過 USB 將 Wear.apk 傳輸到手機的下載資料夾；或

b) 從 Android Studio 將 Wear.apk 剪切並粘貼到你的 Gdrive 中。


要將 AAPS 側載到智慧型手錶，你可以使用： 1) Wear Installer 2 2) Easy Fire Tools 3) Android 偵錯橋接（ADB） 我們建議使用 Wear Installer 2，因為影片中的說明與流程非常清楚、易於理解。如果 Wear Installer 2 無法使用，請試試下方介紹的 Easy Fire Tools 或 ADB。

### 使用 Wear Installer 2 將 **AAPS** Wear 從手機側載到手錶上

 ![Wear Installer 2 app 圖示](../images/wearos/wear_installer2_icon.png)

Wear Installer 2 由 [Malcolm Bryant](https://www.youtube.com/@Freepoc) 開發，你可以從 Google Play 將其下載到手機上，並用來將 AAPS wear 應用程式側載到手錶上。該應用程式包含一個便捷的“如何側載”[影片](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV)。

```{tip}
對於 Wear OS 5 智慧型手錶，請參閱[此影片](https://www.youtube.com/watch?v=yef_qGvcCnk)。參見故障排除提示[如下](#BuildingAapsWearOs-WearOS5-TShoot)。
```

這部影片提供所有必要的詳細資訊（建議在另一台裝置上開啟影片，設定手機時就能一邊觀看）。

如影片中所述，完成後，請關閉手錶上的 ADB 偵錯，以避免消耗智慧型手錶的電池。

或者，但不適用於 Wear OS 5，你可以：

### 使用 Easy Fire Tools 將 **AAPS** Wear 側載到手錶上

1）從 Play 商店在手機上下載 _[Easy Fire Tools](https://play.google.com/store/apps/details?id=de.agondev.easyfiretools&hl=en)_

![圖像](../images/wearos/easyfire01.png)

2) 將自己設為手錶的開發者（設置完成並連線到手機後）：

前往**設定** > **系統** > **關於** > **版本**（不同品牌手錶的選單名稱可能不同；有些手錶的路徑是**關於手錶** > **軟體資訊** > **軟體版本**）。

![圖像](../images/wearos/easyfire02.png)

快速連續點選**版本號碼**（或**軟體版本**）數次，直到出現訊息通知您已成為開發人員。

![圖像](../images/wearos/easyfire03.png)

返回**設定** > **系統**，此時會出現新的**開發人員選項**選單。

在**開發人員選項**中，開啟**ADB 偵錯**和**無線偵錯</strong)，並確認提示訊息。開啟無線偵錯後，畫面會顯示手錶的**IP 位址和連接埠**，例如：**192.168.1.214** : 5555。您只需要 IP 位址（此處為 **192.168.1.214**），不需要冒號後面的連接埠號碼。請注意，IP 位址可能會變更，例如每次您為 AAPS 換用新手機時。  </p>

![圖像](../images/wearos/easyfire04.png)

步驟 3) 將 IP 地址 _例如_ **192.168.1.214** 輸入手機上的 Easy Fire tools（進入左側的漢堡選單，設置並輸入 IP 地址）。

![圖像](../images/wearos/easyfire05.png)

然後點擊右上角的插頭圖示。連線後會變成綠色。

![圖像](../images/wearos/easyfire06.png)


步驟 4）依照 [這裡](https://wearablestouse.com/blog/2022/01/04/install-apps-apk-samsung-galaxy-watch-4/?utm_content=cmp-true) 的說明，使用 Easy Fire Tools 將 aaps-wear.apk 側載（亦即傳輸）到智慧型手錶上


![圖像](../images/wearos/easyfire07.png)


(BuildingAapsWearOs-WearOS5-TShoot)=

### 使用終端機
將你的智慧型手錶與電腦連接到同一個 Wi-Fi 網路。

- 若要安裝 ADB，請從以下位置下載： https://developer.android.com/tools/releases/platform-tools
- 開啟終端機。
- 在 Windows 中，於磁碟機 `C:` 底下建立名為 `adb` 的新資料夾。開啟你在上方下載的 `platform-tools-latest-windows.zip` 檔案。將 `platform-tools` 內的所有檔案複製到 `C:\adb`，並以命令提示字元開啟此資料夾（在資料夾按右鍵並選擇 Open in Terminal）。輸入下列指令，將路徑指向 ADB 所在的資料夾： `setx PATH "%PATH%;C:\adb"`
- 在 Mac 上，你可以改用 Homebrew，而非手動安裝： `brew install android-platform-tools`

在手錶上：
- 前往 設定 → 關於手錶 → **軟體資訊**
- 連點 軟體版本 7 次，直到看到已啟用開發人員模式。
- 前往 設定 → 開發人員選項。啟用 **ADB 偵錯**
- 前往 設定 → 開發人員選項 → 無線偵錯 → **配對新裝置**

畫面上會顯示 Wi-Fi 配對碼、IP 位址和連接埠：

![顯示 Wi-Fi 配對碼、IP 位址和連接埠的手錶畫面](../images/wearos/ADB03.png)

- 在終端機中： `adb pair ipaddress:port` 例如 `adb pair 10.10.1.125:36299`
- 系統會要求輸入配對代碼。輸入該代碼。
- 你會看到以下回應：<br> `Successfully paired to 10.10.1.125:36299 [guid=adb-RXXXW20LMKJY-eh5zBj]`<br>
- 在終端機中輸入： <br>`adb devices`。<br> 你應該會看到類似以下的內容：<br> `List of devices attached`<br> `10.10.1.125:36299  offline`<br> `adb-RFAW20LMKJY-eh5zBj._adb-tls-connect._tcp   device`<br>

- 現在前往你電腦中存放 Wear APK 的資料夾，然後輸入<br> `adb install wear-full.apk` <br>將其中的 wear-full.apk 替換為你的 APK 檔名。
- 你會看到：<br> `Performing Streamed Install`<br> `Success`


(wear-os-5-troubleshooting)=

### Wear OS 5的一般故障排除建議

- 請勿使用 Wi-Fi 分享。這樣做是行不通的。
- 不需要在手機上啟用 ADB 偵錯（僅在手錶上）。在手機上停用 ADB 偵錯。
- 確保你連接到手機和手錶可以彼此看到的本地網路（不要使用 Wi-Fi 客用網路連接）。
- 確保手錶和手機在同一網路和 Wi-Fi 設備上。特別是 Wi-Fi 重複器或接取點可能會產生問題。
- 確保靠近你的主要路由器，然後重啟手機和手錶。

**配對中 :**

- 手錶：無線偵錯：記下 IP 地址。
- Wear Installer：在 Wear Installer app 中輸入 IP 位址。
- 選擇配對新設備，記下顯示的配對碼和埠號。
- Wear Installer：輸入配對碼、空格和連接埠號碼。
- Wear Installer 應該報告配對成功。如果沒有，請退出 Wear Installer，然後重試。

一旦配對成功，你應該能安裝 AAPS Wear apk：

- 退出/關閉，然後重啟 Wear Installer。
- 在無線偵錯中，記下 IP 和埠號，並確保在 Wear Installer 中檢查/輸入 IP 和埠號。
- 注意：埠號與配對時使用的不同！

## 設置 **AAPS** 手機與手錶的連線

最後一步是在手機上設定 **AAPS**，使其能與手錶上的 **Wear.apk** 進行互動。若要執行此操作，請啟用 Wear 外掛：

* 前往手機上的 **AAPS** 應用程式

* 開啟左上角的**選單**（☰），前往**組態設定** > **通訊**

* 勾選**Wear**方塊

![已在「組態 > 與 Wear 通訊」中啟用](../images/v4/Configuration/configuration_communication_wear.png)

若要透過手錶注射或執行其他操作，請一併前往[設定 > Wear](#preferences-wear)，開啟**Wear 控制**。

To change to a different **AAPS**  watchface, long-press the watchface on the home screen of the watch and tap **Customize**. 然後向右滑動，直到看到所有 **AAPS** 錶盤。

如果 **AAPS** Wear.apk 已成功側載到智慧型手錶上，他將顯示如下：


![顯示已連線 Galaxy Watch 的 Wear 外掛，以及手錶上的 AAPS app](../images/wearos/wear_apk_installed.png)


部分智慧型手錶（例如 Samsung Galaxy）必須在 Samsung Galaxy 的「進階功能」中開啟「遠端連線」，才能透過 Wi-Fi 遠端使用 **Wear.apk** 和 **AAPS**。

![已開啟遠端連線的 Galaxy Wearable「進階功能」畫面](../images/wearos/galaxy_wearable_remote_connection.png)

(wear-os-watch-phone-communication)=

### 排除 **AAPS** 手錶與 **AAPS** 手機通訊的問題

1.  如果 EasyFire tools 無法連線，或者你收到“授權失敗”訊息 > 請檢查 IP 地址是否正確輸入。
2.  檢查智慧型手錶是否已連線到網際網路（而不僅僅是透過藍牙與手機連線）。
3.  檢查 **AAPS** 手機和智慧型手錶是否已在 Samsung 應用程式中配對或連線。
4.  也可能需要對手機和智慧型手錶進行硬重啟（即關閉並重新啟動手機）。
5.  假設您已成功將 Wear.apk 下載到手機，但沒有收到血糖資料，請_確認_手錶上側載的是正確的 **AAPS** Wear APK：瀏覽器版本的手錶 app 檔案名稱為 `aaps-wear-….apk`，請參閱[建置 Wear app](../WearOS/BuildingAapsWearOS.md)。如果您安裝的檔案屬於以下任一種： a) **AAPSClient** Wear APK（手機執行的是 **AAPS**）； b) `.aab` 檔案；或 c) 檔名中含有「debug」的檔案， 代表您在建置時選錯了 Wear OS APK。
6.  檢查路由器是否未將設備相互隔離。

更多問題排除提示請參閱[這裡](https://freepoc.org/wear-installer-help-page/#:~:text=If%20you%20are%20having%20problems,your%20phone%20and%20your%20watch.)

(WearOS_changing-to-AAPS-watchface)=

## 在 WearOS 手錶上切換到 AAPS 手錶外觀

AAPS Wear OS APK 的標準版本中提供了多種手錶外觀。當你在手錶上安裝 AAPS Wear APK 後，他們將可供使用。以下是選擇其中一個手錶外觀的步驟：

1. 在手錶上（假設使用 WearOS），長按目前手錶外觀以打開手錶外觀選擇畫面，然後向右捲動直到看到「新增手錶外觀」按鈕並選擇他

![含有「新增錶盤」按鈕的錶盤選擇畫面](../images/wearos/watchface_add.png)

2. 在清單中往下捲動，找到「AAPS (Custom)」（依手錶不同，已安裝 app 的錶盤可能會列在「已下載」區段，或依 app 分組），然後點選圖片中央，將它加入目前使用的錶盤清單。不用擔心目前「AAPS（自訂）」手錶外觀的外觀，我們將在下一步選擇你喜歡的外觀。

![AAPS 錶盤清單，包含 AAPS (Custom)](../images/wearos/watchface_list_aaps.png)

3. 現在在手機上開啟 AAPS，並前往 Wear 外掛：**組態設定** > **通訊** > **Wear** > **開啟外掛**（如果尚未啟用，請先勾選**Wear**）。

![顯示自訂錶盤卡片的 Wear 外掛](../images/wearos/wear_plugin_custom_watchface.png)

4. 點擊「載入手錶外觀」按鈕，並選擇你喜歡的手錶外觀。

![選取「自訂錶盤」清單](../images/wearos/select_custom_watchface.png)

5. 查看你的手錶，現在應該顯示你選擇的「AAPS（自訂）」手錶外觀。等待幾秒鐘讓他重新整理。手機上的**Wear**畫面現在會顯示已載入錶盤的名稱及預覽。**錶盤資訊**會列出錶盤的詳細資訊和所含欄位；**更多錶盤**則會開啟

錶盤交流網站</a)，您可以在此下載其他自訂錶盤。你現在可以透過長按錶面，然後在錶面圖像上按“自訂”按鈕來自訂錶面等項目。</li> </ol> 
   
   

```{admonition} Complications on a custom watchface
:class: note
使用 3.0 版或更新版本自訂錶盤格式製作的錶盤，最多可包含五個複雜功能欄位；欄位的位置和大小由錶盤定義（**複雜功能版面配置**）。在手錶上長按錶盤，點選 **自訂**，再點選 **複雜功能 1** 到 **複雜功能 5**，即可選擇要在各個欄位顯示的資料來源。手錶上的 AAPS App 也會在 **設定** > **AAPS（自訂）** 中列出相同的欄位；點選其中一個欄位，就會開啟相同的選擇器。**複雜功能類型優先順序**會決定當資料來源提供多種選項時，欄位要優先顯示數值或量表、文字，還是圖示。變更優先順序後，只有在下次為該欄位選擇資料來源時才會生效。

這些欄位僅適用於搭載 **Wear OS 5 或更舊版本**的手錶，因為在這些版本中，自訂錶盤會以真正的錶盤執行。在 **Wear OS 6 及更新版本**中，自訂錶盤會以圖片形式顯示，不會包含複雜功能欄位，因此不需要執行上方的步驟 1 和 2：請確認手機 **Wear** 外掛中 **安裝在手錶上的錶盤**已選取 **自訂錶盤**（請參閱[ AAPS 安裝的錶盤](#wearos-aaps-v4-watchface)）。
```




## AAPSv2 手錶外觀 - 圖例

![AAPSv2 手錶外觀圖例](../images/Watchface_Legend.png)

A - 從最後一次循環運作以來的時間

B - CGM 資料讀取值

C - 自最後一次 CGM 資料讀取以來的分鐘數

D - 與上次 CGM 讀取值相比的變化量（單位為 mmol 或 mg/dL）

E - 過去 15 分鐘的 CGM 讀取值平均變化

F - 手機電池

G - 基礎率（標準率顯示為U/h，臨時基礎率（TBR）顯示為百分比）

H - BGI (blood glucose impact) -> the degree to which BG “should” be rising or falling based on insulin activity alone.

H - BGI（血糖影響） -> 基於胰島素活性，血糖「應該」上升或下降的程度。

I - 碳水化合物（碳水化合物在體內的數量 | 未來的碳水化合物）
