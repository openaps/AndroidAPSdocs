# Dexcom G6 和 ONE

## 先掌握基础

-   遵循[此处](../CompatibleCgms/GeneralCGMRecommendation.md)的一般CGM卫生和传感器设置建议。

## 使用G6和ONE闭环系统的一般提示

- 最近的发射器被称为"萤火虫"。传感器必须在移除发射器后才能重启（发射器本身不可重置），且这些传感器不会生成原始数据。

- 如需重启传感器，请确保已准备好校准并密切监测数值波动。

- 对出厂校准的G6/ONE传感器进行预热可能导致检测结果出现波动。若进行预热操作，为获得最佳效果，您很可能需要对传感器进行校准。

更多详情请阅读Tim Street发表在[http://www.diabettech.com](https://www.diabettech.com)上的[文章](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/)。

## If using G6 or ONE with xDrip

- If not already set up, download [xDrip](https://github.com/NightscoutFoundation/xDrip) and adjust its settings following the [xDrip settings page](../CompatibleCgms/xDrip.md).
- Select xDrip in [**Configuration → BG Source**](#Config-Builder-bg-source).
- Dexcom G6和ONE发射器可同时连接至Dexcom接收器（或替代使用的t:slim泵）及手机上的一个应用程序。
- When using xDrip as receiver uninstall the Dexcom app first. **You cannot connect xDrip and Dexcom app with the transmitter at the same time!**
- If you need Clarity and want to profit from xDrip alarms use the [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (only G6) with local broadcast to xDrip.
- You can also use xDrip as a companion app of the official Dexcom app, but you might experience delays in BG readings. To read the Dexcom app notifications without xDrip, as a trusted data source, use the [Notification Reader](#DexcomG6-notification-reader).
- xDrip always uses the transmitter's [native algorithm](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) with current transmitters; there is no reason to disable it. [Preemptive restarts](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) only function on old transmitters (firmware 1.6.5.25 or earlier), where they are needed to prevent the sensor stopping after 10 days; recent (Firefly) transmitters ignore them. See [Restart a sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html) before attempting any restart.
- Everything related to the sensor and transmitter themselves is documented on the [xDrip Dexcom page](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## 如使用G6搭配自建Dexcom应用（BYODA）

```{admonition} Old app version
:class: warning
Dexcom BYODA is now a very old version of the app and cannot be updated.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) supports local broadcast to AAPS and/or xDrip

-   此应用可让您在任意安卓智能手机上使用Dexcom G6。
-   若您先前使用过原版Dexcom应用或修改版Dexcom应用，请将其卸载（**切勿终止**当前正在运行的传感器）。
-   安装下载的 apk
-   在修改版应用中输入传感器代码和发射器序列号。
-   在手机设置中依次进入：应用 > Dexcom G6 > 权限 > 其他权限，然后点击"访问Dexcom应用"。
-   After a short time BYODA should pick up the transmitter signal.

### AAPS 设置

-   Select **BYODA** in [**Configuration → BG Source**](#Config-Builder-bg-source).

-   If you don't receive any values select any other data source, then re-select **BYODA** to trigger the demand for permissions to establish the connection between AAPS and BYODA-broadcast.

### Settings for xDrip

-   选择“640G/Eversense”作为数据源。
-   Command 'start sensor' must be performed in xDrip in order to receive values. 此操作不会影响您当前由自建Dexcom应用控制的传感器。

(DexcomG6-notification-reader)=
## If using G6 or ONE with the Notification Reader

The official Dexcom G6 or ONE app stays connected to the transmitter. **AAPS** reads the glucose value directly from the notification of the Dexcom app, without any other app in between.

```{admonition} Trusted data source
:class: note
Readings from the Dexcom G6 and ONE apps are a [trusted BG data source](#GettingStarted-TrustedBGSource): SMBs can be allowed all the time.
```

Compared to BYODA or xDrip, the Notification Reader has limits:

- **No trend arrow** and **no backfill**: readings missed while the phone was off or out of range are lost.
- Each reading gets the time the notification appeared, not the exact time of the sensor reading.
- Only values between 40 and 405 mg/dL (2.2 and 22.5 mmol/L) are read. "LOW" and "HIGH" are not read.

### Set up the Dexcom app

-   Keep the Dexcom app installed and connected to the transmitter.
-   Make sure the Dexcom app shows the current glucose value in its notification. Its notifications must stay visible: do not silence or hide them.
-   Use the same glucose units (mg/dL or mmol/L) in the Dexcom app as in **AAPS**. Otherwise **AAPS** cannot read the value.

### AAPS 中的配置

-   Select **Notification Reader** in [**Configuration → BG Source**](#Config-Builder-bg-source) and confirm the switch.

    ![BG Source: Notification Reader selected](../images/NotificationReader_BgSource.png)

-   Back on the main screen, **AAPS** shows **Permissions Required**. Next to **Notification Access**, tap **Grant**.

    ![Permissions Required: Notification Access](../images/NotificationReader_Permissions.png)

-   Android opens its notification access list (its name depends on your Android version, for example *Notification read, reply & control*). Select **AAPS**, turn on **Allow notification access** and confirm with **Allow**.

    ![Android asks to allow notification access for AAPS](../images/NotificationReader_AllowDialog.png)

    Android warns that **AAPS** could read all your notifications. **AAPS** only reads the notifications of supported CGM apps and ignores all others.

    ![Notification access allowed for AAPS](../images/NotificationReader_AccessOn.png)

-   If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because **AAPS** was not installed from the Play Store. Open the **AAPS** app info (long press the **AAPS** icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. Then go back to the notification access screen and allow it.
-   Readings appear in **AAPS** when the Dexcom app shows a new value.

```{warning}
If the Dexcom app notification shows more than one glucose number, or none, **AAPS** skips that notification.
```


(DexcomG6-troubleshooting-g6)=
## G6 和 ONE 故障排除

### Dexcom G6/ONE 特定故障排除

-   向下滚动到[此处](https://navid200.github.io/xDrip/docs/Dexcom_page.html)的 **故障排除**。

### 一般故障排除

CGM通用故障排除指南可[在此](#general-cgm-troubleshooting)查阅。

### 运行中的传感器搭配新发射器

如果在传感器运行期间更换发射器，可尝试在不损坏传感器底座的情况下移除发射器。可以在[此处](https://navid200.github.io/xDrip/docs/Remove-transmitter.html)找到视频。若选择采用[此替代方案](https://youtu.be/tx-kTsrkNUM)，则须谨慎操作，避免用撬片[损坏传感器触点](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html)。
