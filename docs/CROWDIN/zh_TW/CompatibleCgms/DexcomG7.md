# Dexcom G7、ONE+ 和 Stelo


## 基本準備

值得注意的是，與 G6 相比，G7、ONE+ 和 Stelo 系統不會在應用程式或讀取器中平滑處理數值。更多詳細資訊請參閱 [這裡](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app)。

```{admonition} Smoothing method 
請閱讀 [平滑方法](../CompatibleCgms/SmoothingBloodGlucoseData.md) 建議，以用於 Dexcom G7/ONE+/Stelo
```

## 1. xDrip（直接連線至 G7、ONE+ 或 Stelo）

- xDrip 會直接連線至感測器：請解除安裝 Dexcom App，因為感測器一次只能連線至一個 App。若要繼續使用 Dexcom App，請改用 [xDrip Companion App](#DexcomG7-xdrip-companion-app)。
- 請依照[這裡的說明](https://navid200.github.io/xDrip/docs/Dexcom/G7.html)操作：[xDrip G7、ONE+ 和 Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7.html)。需使用近期版本的 xDrip — 最低版本需求請參閱連結頁面。
- 在 [**組態設定 → 血糖來源**](#Config-Builder-bg-source)中選擇 xDrip。

- 請參照 xDrip 設定頁面的說明調整 xDrip 設定：[xDrip 設定](../CompatibleCgms/xDrip.md)

## 2. 自行建置 Dexcom App（僅適用於 G7）

```{admonition} Old app version
:class: warning
Dexcom BYODA 現在是非常舊的應用程式版本，且無法更新。不適用於 ONE+ 或 Stelo。
```

-   [自行建置 Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750)（BYODA）支援透過本機廣播將資料傳送至 AAPS

-   此應用程式可讓你在任何 Android 智慧型手機上使用 Dexcom G7。
-   解除安裝原版 Dexcom 應用程式
-   安裝下載的 apk
-   在修改版應用程式中輸入傳感器代碼
-   短時間後 BYODA 應會接收到發射器訊號

(DexcomG7-xdrip-companion-app)=

## 3. xDrip Companion App（G7、ONE+ 和 Stelo）

官方 Dexcom App 會持續連線至感測器。 xDrip 會讀取 Dexcom App 通知中的血糖讀取值，並傳送至 **AAPS**。

```{admonition} Not a trusted data source
:class: note
**AAPS** 不會將 Companion App 模式下的 xDrip 視為[可信任的血糖資料來源](#GettingStarted-TrustedBGSource)：微量注射並非一直都能使用。
```

### 讀取 Dexcom App 通知

- 請保持安裝 Dexcom App，並讓它連線至感測器。通知必須保持顯示：請勿將通知設為靜音或隱藏。
- 下載並安裝 [xDrip](https://github.com/NightscoutFoundation/xDrip)。請在 xDrip 中使用與 Dexcom App 相同的血糖單位。
- 在 xDrip 中，前往 **設定** > **硬體資料來源**，並選擇 **Companion App**。

  ![xDrip 硬體資料來源：Companion App](../images/xDrip_Companion_DataSource.png)

- xDrip 會要求讀取通知的權限。點選 **確定**，接著在清單中選擇 **xDrip**，並開啟 **允許通知存取**。

  ![通知存取權清單](../images/xDrip_Companion_NotificationAccess1.png)

- 如果「**允許通知存取**」呈現灰色（*受限設定控管*），表示 Android 因為 xDrip 不是從 Play 商店安裝而封鎖了這項權限：

  ![通知存取權受限設定控管](../images/xDrip_Companion_Restricted.png)

  開啟 xDrip 的 App 資訊（長按 xDrip 圖示 > **App 資訊**），點選右上角的三點選單，然後選擇 **允許受限設定**。接著返回通知存取權畫面，並允許存取。

  ![App 資訊：允許受限設定](../images/xDrip_Companion_AllowRestricted.png)

  ![已允許 xDrip 存取通知](../images/xDrip_Companion_NotificationAccess2.png)

- Dexcom App 顯示新的血糖讀取值時，該讀取值就會出現在 xDrip 中。如果沒有任何資料顯示，您可能需要在 xDrip 中啟動感測器：這不會影響實際使用的感測器。在此模式下，Stelo 每 15 分鐘提供一次讀取值。

### Companion Bluetooth（G7）

Dexcom App 連線至 G7 感測器時，xDrip 也可以透過藍牙接收感測器傳送給 Dexcom App 的讀取值。 xDrip 不會與感測器配對，也不需要輸入感測器代碼：感測器仍由 Dexcom App 控制。

使用 **Companion Bluetooth** 時，xDrip 會取得感測器每次讀取值的確切時間和趨勢，而非通知顯示的時間；手機超出接收範圍時，也會補回遺漏的資料（回填）。

- 在 xDrip 中，前往 **設定** > **較少使用的設定** > **藍牙設定**，並啟用 **Companion Bluetooth**。

  ![xDrip 藍牙設定：Companion Bluetooth](../images/xDrip_Companion_Bluetooth.png)

- 此功能不適用於所有手機和 Android 版本。如果遇到問題，請停用此功能。
- 如果手機的藍牙清單中仍有舊的 Dexcom 感測器，xDrip 可能會連線至錯誤的感測器：請前往 Android **設定** > **已連線的裝置**，取消配對不再使用的感測器。
- Companion Bluetooth 是為 G7 設計的。使用 ONE+ 和 Stelo 時，請依靠通知。

### 在 AAPS 中進行配置

- 在 [**組態設定 → 血糖來源**](#Config-Builder-bg-source)中選擇 xDrip。
- 請參照 xDrip 設定頁面的說明調整 xDrip 設定：[xDrip 設定](../CompatibleCgms/xDrip.md)。

## 4. Juggluco（G7 和 ONE+）

需要版本 9.0 以上

- 停用之前連接到傳感器的應用程式：卸載應用程式或使用「強制停止」。在應用程式設定中停用「附近設備」權限。限制應用程式的電池使用。

- 在藍牙設定中忘記傳感器：在 Android 設定中，找到已配對設備中的傳感器並選擇「忘記」。 Dexcom G7 傳感器名稱以 DXCM 開頭。

- 避免其他傳感器造成的干擾：將舊的 Dexcom 傳感器保持在藍牙範圍之外。

- 將 G7 傳感器連接到 Juggluco：打開 Juggluco → 左側選單 → 照片。掃描 G7 傳感器應用裝置上的資料矩陣。等待最多 5 分鐘，讓 Juggluco 找到傳感器。

- 配對要求：同意將傳感器與 Juggluco 配對。確保配對期間螢幕未被鎖定。如果配對失敗，請等待 5 分鐘再試。

- 例外：Wear OS 手錶可以在不按同意按鈕的情況下配對。
