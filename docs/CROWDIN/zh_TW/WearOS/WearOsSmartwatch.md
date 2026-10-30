# Set up AAPS on your Wear OS watch

以下說明適用於您需要自行建置的 **AAPS Wear** APK。如果您尚未建置，請參閱 [此處](../WearOS/BuildingAapsWearOS.md)連結的指南在建置時，請確保使用與手機版 **AAPS** APK 相同的金鑰庫（keystore）檔案。

您也可以將其中部分資訊應用於 **AAPSClient** 與 **PumpControl** 的 **Wear** APK。每個 **Wear** 應用程式都會與其對應的手機應用程式進行通訊。例如：**AAPSClient Wear**應用可用於顯示**AAPSClient**資料，而不是**AAPS**資料。 When several client flavors (**AAPSClient**, **AAPSClient2**, **AAPSClient3**) are installed side by side, each one's tiles carry a small header in that flavor's accent colour so you can tell them apart while swiping.

## Wear OS 版本和相容性

(wearos-watchface-changes)=

### Wear OS watch face changes (impact on AAPS watchfaces)

```{admonition} Why newer Wear OS watches break AAPS watchfaces
:class: warning

In June 2025 Google [announced changes](https://android-developers.googleblog.com/2025/06/upcoming-changes-to-wear-os-watch-faces.html) that phase out the legacy watch face engine (the AndroidX / Wearable Support Library, or "WSL", engine) in favour of the newer declarative **Watch Face Format**. The **AAPS** custom watchfaces are built on the legacy engine, so the newer the Wear OS version, the more likely an AAPS watchface is to misbehave or stop working.

This affects the **watchfaces** specifically — AAPS **complications**, tiles and remote-control functions are not impacted. It is also why **a firmware/system update on a Wear OS watch can break AAPS watchfaces**, and a watch cannot be rolled back to an older Wear OS version afterwards. If your AAPS watchface currently works, **disable automatic watch updates**.
```

The table below summarises how Google's change affects the AAPS (legacy-engine) watchfaces by Wear OS version:

| Wear OS version         | Base Android | API level | Impact on AAPS (legacy) watchfaces                                                                                                                                                          |
| ----------------------- | ------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wear OS 6               | Android 16   | 36        | **Legacy watchfaces no longer available** — AAPS installs a [Watch Face Format watchface](#wearos-aaps-v4-watchface) instead: your custom watchface, or the AAPS V4 complications watchface |
| Wear OS 5               | Android 14   | 34        | **Severe** — active (interactive) mode often fails, complications freeze, animations stop                                                                                                   |
| Wear OS 4               | Android 13   | 33        | **Moderate** — throttling, missed updates, partial failures                                                                                                                                 |
| Wear OS 3.0 / 3.2 / 3.5 | Android 11   | 30        | **Low** — legacy engine still supported                                                                                                                                                     |

If your watch runs a version where AAPS watchfaces are unreliable, you can instead display AAPS data through **complications** on a compatible watchface, or use [GlucoDataHandler](https://play.google.com/store/apps/details?id=de.michelinside.glucodatahandler) with a complication, fed by the [External Companion Apps](#external-companion-apps) plugin of **AAPS**. On **Wear OS 6 and newer**, AAPS installs a replacement watchface built in the new format — see below.

(wearos-aaps-v4-watchface)=

### Wear OS 6 and newer — the watchface AAPS installs

Watches running **Wear OS 6 or newer** cannot run the classic AAPS watchfaces as watchfaces. For these watches the AAPS watch app brings two watchfaces built in Google's new **Watch Face Format**. Wear OS lets an app install only **one** watchface, so you choose which of the two is on the watch:

- **Custom watchface** (default): shows the custom watchface you loaded from the phone with **Load Watchface** (see [Changing to an AAPS Watchface](#WearOS_changing-to-AAPS-watchface)). The watch draws your design as a picture, so every existing custom watchface works. The complication slots a custom watchface may define are **not available** in this picture, because Wear OS only delivers complication data to a real watchface. Long-press the face to reach its one setting: whether the always-on display shows a plain clock or your own design, dimmed.
- **Complications watchface** (the **AAPS V4** watchface): its **seven complication slots** come **preconfigured with AAPS data**: BG value, IOB, COB, the [BG Graph complication](#Watchfaces-complications), basal rate / temp target, and the **Running Mode** icon in the top-left slot (tap it to change the loop mode from the watch). Tap the time at the top to open the watch's alarm app. You can change what each slot shows in the watch face editor.

You choose on the phone: open the **Wear** plugin and, under **Watchface installed on watch**, select one of the two. This card is only shown while a Wear OS 6 or newer watch is connected. **AAPS** asks you to confirm, because the watch replaces its face immediately. Switching away from the **Complications watchface** also resets the complications you changed in the watch face editor back to the defaults, and the confirmation says so. While the **Complications watchface** is selected, the custom watchface buttons are hidden and a preview of the face is shown instead. If you load a custom watchface while the **Complications watchface** is selected, **AAPS** reminds you to switch to **Custom watchface** to see it on the watch.

- The selected watchface is **installed and activated automatically** the first time the AAPS watch app runs on such a watch, and it is **updated automatically** together with the watch app.
- If you removed the watchface, an **Install watchface** entry appears at the bottom of the watch's AAPS **main menu** — tap it to reinstall.

While a watch running Wear OS 5 or older is connected, the **Watchface installed on watch** card is not shown at all (the mechanism it relies on requires Wear OS 6); the classic watchfaces run there as before.

(wearos-complications-watchface-setup)=

### Complications watchface — recommended setup

The **Complications watchface** has seven complication slots. Long-press the watchface, tap **Customize**, and pick a data source for each slot. The slots are numbered as in the watch face editor: **1** left, **2** centre, **3** right, **4** the graph, **5** bottom, **6** top-left and **7** top-right.

| Default setup                                                                                   | Alternative setup                                                                                       |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| ![Complications watchface, default setup](../images/wearos/complications_watchface_default.png) | ![Complications watchface, alternative setup](../images/wearos/complications_watchface_alternative.png) |

| Slot | Position  | Default                                                             | Alternative                           |
| ---- | --------- | ------------------------------------------------------------------- | ------------------------------------- |
| 1    | Left      | IoB Icon                                                            | CoB & IoB                             |
| 2    | Centre    | Blood Glucose                                                       | Blood Glucose                         |
| 3    | Right     | CoB Icon                                                            | BR & Target                           |
| 4    | Graph     | BG Graph                                                            | BG Graph                              |
| 5    | Bottom    | BR & Target                                                         | Uploader/Phone Battery                |
| 6    | Top-left  | 運行模式                                                                | 運行模式                                  |
| 7    | Top-right | Uploader/Phone Battery, or an app shortcut to **AAPS Snooze Alert** | App shortcut to **AAPS Snooze Alert** |

The **AAPS Snooze Alert** shortcut is picked from the watch's own **App shortcut** complications. Tapping it snoozes the alarm that is sounding on the phone.

```{tip}
Turn on **Always-on display** on the watch (**Settings** > **Display**). The watchface then keeps showing your glucose when the wrist is down, instead of a blank or a plain clock.
```

```{admonition} No complication data while the watch is locked
:class: note
If a **Lock type** is set under **Settings** > **Security and privacy**, the watch hides complication data while it is locked, and the watchface shows empty slots until you unlock it. To keep the data visible, turn off **Hide information** in the same menu.
```

### Wear OS 3

使用[Wear Installer 2](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV)、Easy Fire Tools（稍後說明）或 ADB 安裝**AAPS Wear** apk。  
在**AAPS Wear**操作上沒有限制。

(BuildingAapsWearOs-WearOS5)=

### Wear OS 4 and Wear OS 5

Example: Galaxy Watch 4, 5, 6, 7 and Ultra or Pixel Watch that have **not** been updated to Wear OS 6 yet. Check the version under **Settings** > **About watch** > **Software**.

Install the **AAPS Wear** apk using [Wear Installer 2](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV) (for Wear OS 5 follow [this video](https://www.youtube.com/watch?v=yef_qGvcCnk)). All **AAPS Wear** functions work, but the classic **AAPS** watchfaces are limited as described in the table above: throttled on Wear OS 4, often failing on Wear OS 5.

```{admonition} Wear OS 5
:class: warning
On Wear OS 5 the AAPS watchface has to be selected with Wear Installer 2 right after installing the Wear app: the installer offers the **AAPS (Custom)** watchface at the end of the installation. If you accidentally switch to another watchface, repeat the installation. Changing the watchface settings (Dark, Watchdivider, etc.) may not be possible.

If the classic watchface currently works for you, **disable automatic watch updates**: the next firmware update is likely to break it. If you update to Wear OS 6 anyway, read the section above: **AAPS** then installs its own watchface in the new format.
```

If the watchface is too unreliable, consider [GlucoDataHandler](https://play.google.com/store/apps/details?id=de.michelinside.glucodatahandler) with a complication instead. It needs the [External Companion Apps](#external-companion-apps) plugin enabled in **AAPS**.

### Wear OS 6 and newer

Example: Galaxy Watch 4 and newer with One UI 8 Watch, Pixel Watch after the 2025 update. Most Galaxy and Pixel watches have received this update.

Install the **AAPS Wear** apk using [Wear Installer 2](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV). The classic watchfaces are not available; **AAPS** installs the watchface selected on the phone automatically, see [the watchface AAPS installs](#wearos-aaps-v4-watchface). No limitation in **AAPS Wear** operations.

## 如何設置 Samsung Galaxy 4 智慧型手錶與 **AAPS** 搭配使用

本節假設你對智慧型手錶完全陌生，將向你介紹一款流行手錶（**Galaxy Watch 4**）的基本操作，隨後是逐步設置 **AAPS** 在手錶上運作的指南。

_This guide was written for a Galaxy Watch running Wear OS 3._ On Wear OS 4 and later the watch asks for a **pairing code** when a phone or computer connects over ADB. Wear Installer 2 and the terminal procedure [below](#BuildingAapsWearOs-WearOS5-TShoot) both support it.

這裡有關於 [Galaxy Watch 5](https://www.youtube.com/watch?v=Y5upzOIxwTU) 和 [Galaxy Watch 6](https://www.youtube.com/watch?v=D6bq20KzPW0) 的基本設置指南

## 智慧型手錶的基本熟悉指南

根據上方影片進行手錶的基本設置後，前往手機上的 Play 商店並下載以下應用程式：“Galaxy Wearable”、“Samsung”和“Easy Fire tools”或“Wear Installer 2”。

有許多第三方 YouTube 影片可幫助你熟悉新手錶，例如：

[https://www.youtube.com/watch?v=tSVkqWNmO2c](https://www.youtube.com/watch?v=tSVkqWNmO2c)

“Galaxy Wearable”應用程式內也有一個使用手冊部分。在手機上打開 Galaxy Wearable，搜尋手錶，嘗試將手錶與手機配對。根據你的版本，這可能會提示你從 Play 商店安裝第三個應用程式“Galaxy Watch 4 外掛”（下載需要一些時間）。在手機上安裝此應用程式，然後再次在 Galaxy Wearable 應用程式中嘗試將手錶與手機配對。透過一系列選單並勾選各種偏好設定。

## 設置 Samsung 帳號

你需要確保用來設置 Samsung 帳號的電子郵件帳戶的出生日期顯示用戶年齡 13 歲以上，否則 Samsung 的許可權批准將非常困難。如果你已為 13 歲以下的孩子建立了 Gmail 帳號並使用該電子郵件地址，你無法簡單地將其更改為成人帳戶。解決此問題的一種方法是將目前的出生日期修改為使目前年齡為 12 歲零 363 天。第二天，該帳戶將被轉換為成人帳戶，然後你可以繼續設置 Samsung 帳戶。

(remote-control-transferring-the-aaps-wear-app-onto-your-aaps-phone)=

## 將**AAPS** Wear應用傳輸到你的**AAPS**手機

從 Android Studio 將 Wear.apk 載入到你的手機，可以透過以下方式進行：

a) 使用 USB 傳輸線將 **AAPS** wear apk 檔案放入手機，然後將其“側載”到手錶上。透過 USB 將 Wear.apk 傳輸到手機的下載資料夾；或

b) 從 Android Studio 將 Wear.apk 剪切並粘貼到你的 Gdrive 中。


要將 AAPS 側載到智慧型手錶，你可以使用： 1) Wear Installer 2 2) Easy Fire Tools 3) Android 偵錯橋接（ADB） 我們建議使用 Wear Installer 2，因為影片中的說明與流程非常清楚、易於理解。 If Wear Installer 2 does not work for you, try Easy Fire Tools or ADB, both described below.

### 使用 Wear Installer 2 將 **AAPS** Wear 從手機側載到手錶上

 ![Wear Installer 2 app icon](../images/wearos/wear_installer2_icon.png)

Wear Installer 2 由 [Malcolm Bryant](https://www.youtube.com/@Freepoc) 開發，你可以從 Google Play 將其下載到手機上，並用來將 AAPS wear 應用程式側載到手錶上。該應用程式包含一個便捷的“如何側載”[影片](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV)。

```{tip}
對於 Wear OS 5 智慧型手錶，請參閱[此影片](https://www.youtube.com/watch?v=yef_qGvcCnk)。參見故障排除提示[如下](#BuildingAapsWearOs-WearOS5-TShoot)。
```

This provides all the necessary detail (best to open the video on a separate device so you can watch it while setting up the phone).

如影片中所述，完成後，請關閉手錶上的 ADB 偵錯，以避免消耗智慧型手錶的電池。

或者，但不適用於 Wear OS 5，你可以：

### 使用 Easy Fire Tools 將 **AAPS** Wear 側載到手錶上

1）從 Play 商店在手機上下載 _[Easy Fire Tools](https://play.google.com/store/apps/details?id=de.agondev.easyfiretools&hl=en)_

![圖像](../images/wearos/easyfire01.png)

2) 將自己設為手錶的開發者（設置完成並連線到手機後）：

Go to **Settings** > **System** > **About** > **Versions** (the menu names vary between watch brands — on some watches it is **About watch** > **Software info** > **Software version**).

![圖像](../images/wearos/easyfire02.png)

Rapidly tap on **Build number** (or **Software version**) several times until a message tells you that you are now a developer.

![圖像](../images/wearos/easyfire03.png)

Go back to **Settings** > **System**: a new **Developer options** menu is now shown.

In **Developer options**, turn on **ADB debugging** and **Wireless debugging**, and confirm the prompts. Wireless debugging then shows the watch's **IP address & Port**, something like: **192.168.1.214** : 5555. You only need the IP address (here **192.168.1.214**), not the port number after the colon. Note that the IP address can change, for example every time you change to a new phone handset for AAPS.

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

You will see a Wi-Fi pairing code and IP address and port appearing:

![Watch screen showing the Wi-Fi pairing code and IP address and port](../images/wearos/ADB03.png)

- 在終端機中： `adb pair ipaddress:port` 例如 `adb pair 10.10.1.125:36299`
- 系統會要求輸入配對代碼。輸入該代碼。
- 你會看到以下回應：<br> `Successfully paired to 10.10.1.125:36299 [guid=adb-RXXXW20LMKJY-eh5zBj]`<br>
- 在終端機中輸入： <br>`adb devices`。<br> 你應該會看到類似以下的內容：<br> `List of devices attached`<br> `10.10.1.125:36299  offline`<br> `adb-RFAW20LMKJY-eh5zBj._adb-tls-connect._tcp   device`<br>

- 現在前往你電腦中存放 Wear APK 的資料夾，然後輸入<br> `adb install wear-full.apk` <br>將其中的 wear.apk 替換為你的 APK 檔名。
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
- Wear Installer：在 Wear Installer 應用程式中輸入 IP 地址。
- 選擇配對新設備，記下顯示的配對碼和埠號。
- Wear Installer: enter the pairing code + space + port number.
- Wear Installer 應該報告配對成功。如果沒有，請退出 Wear Installer，然後重試。

一旦配對成功，你應該能安裝 AAPS Wear apk：

- 退出/關閉，然後重啟 Wear Installer。
- 在無線偵錯中，記下 IP 和埠號，並確保在 Wear Installer 中檢查/輸入 IP 和埠號。
- 注意：埠號與配對時使用的不同！

## 設置 **AAPS** 手機與手錶的連線

最後一步是在手機上設定 **AAPS**，使其能與手錶上的 **Wear.apk** 進行互動。 To do this, enable the Wear plugin:

* 前往手機上的 **AAPS** 應用程式

* Open the **menu** (☰) in the top-left corner and go to **Configuration** > **Communication**

* Tick the **Wear** box

![Configuration > Communication with Wear enabled](../images/v4/Configuration/configuration_communication_wear.png)

To bolus or take other actions from the watch, also turn on **Wear control** in [Settings > Wear](#preferences-wear).

要更改 **AAPS** 手錶錶盤，請按下手錶的主畫面，他將進入“自訂”模式。然後向右滑動，直到看到所有 **AAPS** 錶盤。

如果 **AAPS** Wear.apk 已成功側載到智慧型手錶上，他將顯示如下：


![Wear plugin showing the connected Galaxy Watch, and the AAPS app on the watch](../images/wearos/wear_apk_installed.png)


For certain smart watches, like the Samsung Galaxy, 'Remote Connection' under Samsung Galaxy's Advanced Features must be switched **on** to use **Wear.apk** & **AAPS** remotely via Wi-Fi.

![Galaxy Wearable, Advanced features, Remote connection switched on](../images/wearos/galaxy_wearable_remote_connection.png)

(wear-os-watch-phone-communication)=

### 排除 **AAPS** 手錶與 **AAPS** 手機通訊的問題

1.  如果 EasyFire tools 無法連線，或者你收到“授權失敗”訊息 > 請檢查 IP 地址是否正確輸入。
2.  檢查智慧型手錶是否已連線到網際網路（而不僅僅是透過藍牙與手機連線）。
3.  檢查 **AAPS** 手機和智慧型手錶是否已在 Samsung 應用程式中配對或連線。
4.  也可能需要對手機和智慧型手錶進行硬重啟（即關閉並重新啟動手機）。
5.  Assuming you have managed to download the Wear.apk onto your phone but you are not receiving any BG data, _check_ that you have side-loaded the correct **AAPS** Wear apk onto the watch: the watch app of a browser build is the `aaps-wear-….apk` file, see [Building the Wear app](../WearOS/BuildingAapsWearOS.md). If the file you installed is any of the following: a) an **AAPSClient** Wear apk (while the phone runs **AAPS**); b) a `.aab` file; or c) a file with the word ‘debug’ in its name, you have not selected the correct Wear OS apk during the build.
6.  檢查路由器是否未將設備相互隔離。

更多問題排除提示請參閱[這裡](https://freepoc.org/wear-installer-help-page/#:~:text=If%20you%20are%20having%20problems,your%20phone%20and%20your%20watch.)

(WearOS_changing-to-AAPS-watchface)=

## 在 WearOS 手錶上切換到 AAPS 手錶外觀

AAPS Wear OS APK 的標準版本中提供了多種手錶外觀。當你在手錶上安裝 AAPS Wear APK 後，他們將可供使用。以下是選擇其中一個手錶外觀的步驟：

1. 在手錶上（假設使用 WearOS），長按目前手錶外觀以打開手錶外觀選擇畫面，然後向右捲動直到看到「新增手錶外觀」按鈕並選擇他

![Watchface selector with the Add watch face button](../images/wearos/watchface_add.png)

2. Scroll through the list until you find "AAPS (Custom)" (depending on the watch, the watch faces of installed apps are listed under a "Downloaded" section or grouped by app) and click the middle of the image to add it to your shortlist of current watchfaces. 不用擔心目前「AAPS（自訂）」手錶外觀的外觀，我們將在下一步選擇你喜歡的外觀。

![List of AAPS watchfaces, with AAPS (Custom)](../images/wearos/watchface_list_aaps.png)

3. Now open AAPS on your phone and open the Wear plugin: **Configuration** > **Communication** > **Wear** > **Open plugin** (tick **Wear** first if it is not enabled).

![Wear plugin with the Custom Watchface card](../images/wearos/wear_plugin_custom_watchface.png)

4. 點擊「載入手錶外觀」按鈕，並選擇你喜歡的手錶外觀。

![Select Custom Watchface list](../images/wearos/select_custom_watchface.png)

5. 查看你的手錶，現在應該顯示你選擇的「AAPS（自訂）」手錶外觀。等待幾秒鐘讓他重新整理。 The **Wear** screen on the phone now shows the name of the loaded watchface and a preview of it. **Infos Watchface** lists its details and the fields it contains, and **More watchfaces** opens the [exchange site](../ExchangeSiteCustomWatchfaces/index.md) where you can download other custom watchfaces. 你現在可以透過長按錶面，然後在錶面圖像上按“自訂”按鈕來自訂錶面等項目。

```{admonition} Complications on a custom watchface
:class: note
Custom watchfaces made with version 3.0 or newer of the custom watchface format can contain up to five complication slots, with their position and size defined by the watchface (**Complication layout**). On the watch, long-press the watchface, tap **Customize** and tap **Complication 1** to **Complication 5** to choose the data source shown in each slot. The same rows are listed in the watch's AAPS app under **Settings** > **AAPS(Custom)**; tapping one there opens the same picker. **Complication type priority** decides whether a slot prefers a value or gauge, text, or an icon when the data source offers several. A changed priority only applies the next time you pick a data source for that slot.

These slots only work on watches running **Wear OS 5 or older**, where the custom watchface runs as a real watchface. On **Wear OS 6 and newer**, the custom watchface is shown as a picture without its complication slots, and steps 1 and 2 above are not needed: make sure **Custom watchface** is selected under **Watchface installed on watch** in the phone's **Wear** plugin (see [the watchface AAPS installs](#wearos-aaps-v4-watchface)).
```

## AAPSv2 手錶外觀 - 圖例

![AAPSv2 手錶外觀圖例](../images/Watchface_Legend.png)

A - 從最後一次循環運作以來的時間

B - CGM 資料讀取值

C - 自最後一次 CGM 資料讀取以來的分鐘數

D - change compared to last CGM reading (in mmol or mg/dL)

E - 過去 15 分鐘的 CGM 讀取值平均變化

F - 手機電池

G - 基礎率（標準率顯示為U/h，臨時基礎率（TBR）顯示為百分比）

H - BGI（血糖互動） -> 基於胰島素活動時，血糖“應該”上升或下降的程度。

H - BGI（血糖影響） -> 基於胰島素活性，血糖「應該」上升或下降的程度。

I - 碳水化合物（碳水化合物在體內的數量 | 未來的碳水化合物）
