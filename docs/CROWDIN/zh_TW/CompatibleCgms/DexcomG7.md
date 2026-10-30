# Dexcom G7, ONE+ and Stelo


## 基本準備

Noteworthy is the fact that the G7, ONE+ and Stelo systems, compared to the G6, do not smooth the values, neither in the app, nor in the reader. 更多詳細資訊請參閱 [這裡](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app)。

```{admonition} Smoothing method 
請閱讀 [平滑方法](../CompatibleCgms/SmoothingBloodGlucoseData.md) 建議，以用於 Dexcom G7/ONE+/Stelo
```

## 1. xDrip (direct connection to G7, ONE+ or Stelo)

- xDrip connects to the sensor itself: uninstall the Dexcom app, as only one app can connect to the sensor. To keep the Dexcom app, use [xDrip Companion App](#DexcomG7-xdrip-companion-app) instead.
- Follow the instructions here: [xDrip G7, ONE+ and Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7.html). A recent xDrip release is required — see the linked page for the minimum version.
- Select  xDrip in [**Configuration → BG Source**](#Config-Builder-bg-source).

- Adjust the xDrip settings according to the explanations on the xDrip settings page  [xDrip settings](../CompatibleCgms/xDrip.md)

## 2. Build Your Own Dexcom App (G7 only)

```{admonition} Old app version
:class: warning
Dexcom BYODA 現在是非常舊的應用程式版本，且無法更新。 Not available for ONE+ or Stelo.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) supports local broadcast to AAPS

-   此應用程式可讓你在任何 Android 智慧型手機上使用 Dexcom G7。
-   解除安裝原版 Dexcom 應用程式
-   安裝下載的 apk
-   在修改版應用程式中輸入感測器代碼
-   短時間後 BYODA 應會接收到發射器訊號

(DexcomG7-xdrip-companion-app)=

## 3. xDrip Companion App (G7, ONE+ and Stelo)

The official Dexcom app stays connected to the sensor. xDrip reads the glucose values from the notifications of the Dexcom app and sends them to **AAPS**.

```{admonition} Not a trusted data source
:class: note
**AAPS** does not consider xDrip in Companion App mode a [trusted BG data source](#GettingStarted-TrustedBGSource): SMBs are not allowed all the time.
```

### Read the Dexcom app notifications

- Keep the Dexcom app installed and connected to the sensor. Its notifications must stay visible: do not silence or hide them.
- Download and install [xDrip](https://github.com/NightscoutFoundation/xDrip). Use the same glucose units in xDrip as in the Dexcom app.
- In xDrip, go to **Settings** > **Hardware Data Source** and select **Companion App**.

  ![xDrip Hardware Data Source: Companion App](../images/xDrip_Companion_DataSource.png)

- xDrip asks for permission to read notifications. Tap **OK**, then select **xDrip** in the list and turn on **Allow notification access**.

  ![Notification access list](../images/xDrip_Companion_NotificationAccess1.png)

- If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because xDrip was not installed from the Play Store:

  ![Notification access controlled by restricted setting](../images/xDrip_Companion_Restricted.png)

  Open the xDrip app info (long press the xDrip icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. Then go back to the notification access screen and allow it.

  ![App info: Allow restricted settings](../images/xDrip_Companion_AllowRestricted.png)

  ![Notification access allowed for xDrip](../images/xDrip_Companion_NotificationAccess2.png)

- Readings appear in xDrip when the Dexcom app shows a new value. If nothing appears, you may need to start a sensor in xDrip: this has no effect on the real sensor. Stelo gives a reading every 15 minutes in this mode.

### Companion Bluetooth (G7)

When the Dexcom app is connected to a G7 sensor, xDrip can also listen to the readings the sensor sends to the Dexcom app over Bluetooth. xDrip does not pair with the sensor and you do not need to enter the sensor code: the Dexcom app stays in control.

With **Companion Bluetooth**, xDrip gets the exact time and trend of each reading from the sensor, instead of the time the notification appeared, and fills gaps when the phone was out of range (backfill).

- In xDrip, go to **Settings** > **Less common settings** > **Bluetooth Settings** and enable **Companion Bluetooth**.

  ![xDrip Bluetooth Settings: Companion Bluetooth](../images/xDrip_Companion_Bluetooth.png)

- This does not work on all phones and Android versions. Disable it if you see problems.
- If an old Dexcom sensor is still in the phone's Bluetooth list, xDrip might listen to the wrong one: in Android **Settings** > **Connected devices**, forget sensors you no longer use.
- Companion Bluetooth is made for the G7. With ONE+ and Stelo, rely on notifications.

### 在 AAPS 中進行配置

- Select xDrip in [**Configuration → BG Source**](#Config-Builder-bg-source).
- Adjust the xDrip settings according to the explanations on the xDrip settings page [xDrip settings](../CompatibleCgms/xDrip.md).

## 4. Juggluco (G7 and ONE+)

需要版本 9.0 以上

- 停用之前連接到傳感器的應用程式：卸載應用程式或使用「強制停止」。在應用程式設定中停用「附近設備」權限。限制應用程式的電池使用。

- 在藍牙設定中忘記傳感器：在 Android 設定中，找到已配對設備中的傳感器並選擇「忘記」。 Dexcom G7 傳感器名稱以 DXCM 開頭。

- 避免其他傳感器造成的干擾：將舊的 Dexcom 傳感器保持在藍牙範圍之外。

- 將 G7 傳感器連接到 Juggluco：打開 Juggluco → 左側選單 → 照片。掃描 G7 傳感器應用裝置上的資料矩陣。等待最多 5 分鐘，讓 Juggluco 找到傳感器。

- 配對要求：同意將傳感器與 Juggluco 配對。確保配對期間螢幕未被鎖定。如果配對失敗，請等待 5 分鐘再試。

- 例外：Wear OS 手錶可以在不按同意按鈕的情況下配對。
