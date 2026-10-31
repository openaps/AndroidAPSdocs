# xDrip settings

If not already set up, download and install the latest xDrip release from the [xDrip releases page](https://github.com/NightscoutFoundation/xDrip/releases).

Disable battery optimization and allow background activity for the xDrip app.

## 所有CGM和FGM系统的基础设置

### 禁用Nightscout上传功能

You shouldn't let any other app upload data (blood glucose and treatments) to Nightscout.

→ 汉堡菜单 (1) → 设置 (2) → 云端上传 (3) → Nightscout同步(REST-API)(4) → 将**OFF** `启用`开关关闭 (5)

![xDrip Basic Settings 1](../images/xDrip_Basic1.png)

#### 禁用自动校准和治疗功能

Make sure `Automatic Calibration` (7) is deactivated. If the checkbox for `Automatic Calibration` is checked, activate `Download treatments` (6) once, then remove the checkbox for `Automatic Calibration` and deactivate `Download treatments` again.

![xDrip Basic Settings 2](../images/xDrip_Basic2.png)

Tap `Extra Options`(8)

    {admonition} Safety warning
    :class: warning
    You must deactivate "Upload treatments" from xDrip, otherwise treatments can be doubled in AAPS leading to false COB and IOB.

Deactivate `Upload treatments`(9) and make sure you will **NOT** use `Back-fill data` (11).

Option `Alert on failures` should also be deactivated (10). Otherwise you will get an alarm every 5 minutes in case Wi-Fi/mobile network issues or if the server is not available.

![xDrip Basic Settings 3](../images/xDrip_Basic3.png)

### **应用间设置**（广播）

If you are going to use AAPS and the data should be forwarded to i.e. AAPS you have to activate broadcasting in xDrip in Inter-App settings.

→ Hamburger Menu (1) → Settings (2) → Inter-app settings (3) → Broadcast locally **ON** (4)

In order for the values to be identical in AAPS with respect to xDrip, you should activate `Send the displayed glucose value` (5).

Enable Compatible Broadcast (6).

![xDrip Basic Settings 4](../images/xDrip_Basic4.png)

If you have also activated `Accept treatments` in xDrip and `Enable broadcasts to xDrip` in AAPS xDrip plugin, then xDrip will receive insulin, carbs and basal rate information from AAPS.

If you enable `Accept Calibrations`, xDrip will use the calibrations from AAPS. Be careful when you use this feature with Dexcom sensors: read [this](https://navid200.github.io/xDrip/docs/Calibrate-G6.html) first.

Remember to disable Import Sounds to avoid xDrip making a ringtone every time AAPS sends a basal/profile change.

![xDrip Basic Settings 5](../images/xDrip_Basic5.png)

(xdrip-identify-receiver)=

#### 识别接收器

- If you discover problems with local broadcast (AAPS not receiving BG values from xDrip) go to → Hamburger Menu (1) Settings (2) → Inter-app settings (3) → Identify receiver (7) and enter `info.nightscout.androidaps` for AAPS build (if you are using PumpControl build, please enter `info.nightscout.aapspumpcontrol` instead!!).
- 注意：自动校正功能有时会将字母i改为大写。输入`info.nightscout.androidaps`（或PumpControl版输入`info.nightscout.aapspumpcontrol`）时，**必须全部使用小写字母**。 Capital I would prevent the App from receiving BG values from xDrip.
    
    ![xDrip Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

## Use AAPS to calibrate in xDrip

- If you want to be able to use AAPS to calibrate then in xDrip go to Settings → Interapp Compatibility → Accept Calibrations and select ON. 
- 您可能还需要查看设置→较少使用设置→高级校准设置中的选项。

## Dexcom传感器

Everything related to the Dexcom sensor and transmitter themselves (starting, stopping, replacing, calibrating, troubleshooting) is documented and kept up to date in the [xDrip Dexcom documentation](https://navid200.github.io/xDrip/docs/Dexcom_page.html). Follow those instructions for the sensor; the settings connecting xDrip to **AAPS** (described above on this page) are the only AAPS-specific part.

### Dexcom G6 和 ONE

- Set up xDrip following the [recommended settings](https://navid200.github.io/xDrip/docs/G6-Recommended-Settings.html).
- Dexcom G6和ONE发射器可同时连接至Dexcom接收器（或替代使用的t:slim泵）及手机上的一个应用程序。
- When using xDrip as receiver uninstall the Dexcom app first. **You cannot connect xDrip and the Dexcom app with the transmitter at the same time!**
- If you need Clarity and want to profit from xDrip features, use the [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) with local broadcast to xDrip, or use xDrip as a Companion app receiving notifications from the official Dexcom app (with possible delays in BG readings).

#### Sensor restarts

- xDrip always uses the transmitter's [native algorithm](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) with current transmitters; there is no reason to disable it.
- [Preemptive restarts](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) only function on old transmitters (firmware 1.6.5.25 or earlier), where they are needed to prevent the sensor stopping after 10 days. Recent (Firefly) transmitters ignore them.
- Restarting a sensor on a Firefly transmitter requires [removing the transmitter](https://navid200.github.io/xDrip/docs/Remove-transmitter.html) and readings can be significantly in error after the restart, which is dangerous when looping: read [Restart a sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html) in full and [calibrate carefully](https://navid200.github.io/xDrip/docs/Calibrate-after-G6Restart.html).

(xdrip-connect-g6-transmitter-for-the-first-time)=

#### Start, stop and replace sensors

Follow the instructions:

- [Start a G6 or ONE transmitter](https://navid200.github.io/xDrip/docs/Starting-G6.html)
- [Stop and start a G6 or ONE sensor](https://navid200.github.io/xDrip/docs/Dexcom/StartG6Sensor.html)
- [Remove the transmitter from a sensor](https://navid200.github.io/xDrip/docs/Remove-transmitter.html)
- [Transmitter lifetime](https://navid200.github.io/xDrip/docs/Transmitter-lifetime.html) can only be extended ([hard reset](https://navid200.github.io/xDrip/docs/Hard-Reset.html)) on rebatteried or modified transmitters, not on Firefly.

(xdrip-replace-transmitter)=

#### Replace a transmitter

- Turn the original Dexcom receiver off (if used) and do not turn it back on before xDrip shows readings.
- Forget the device in xDrip (System Status → Forget Device) AND in the smartphone's Bluetooth settings (shown as DexcomXX where XX are the last two digits of the transmitter serial number).
- Keep the old transmitter out of Bluetooth range to prevent reconnection.
- Then follow [Start a G6 or ONE transmitter](https://navid200.github.io/xDrip/docs/Starting-G6.html).

### Dexcom G7, ONE+ and Stelo

- Follow the [G7, ONE+ and Stelo instructions](https://navid200.github.io/xDrip/docs/Dexcom/G7.html) (a recent xDrip release is required — see the linked page).
- See also the [Dexcom G7, ONE+ and Stelo page](../CompatibleCgms/DexcomG7.md) for the available setups with **AAPS**.

(xdrip-troubleshooting-dexcom-g5-g6-and-xdrip)=

### Troubleshooting Dexcom and xDrip

- [G6/ONE connectivity troubleshooting](https://navid200.github.io/xDrip/docs/Connectivity-troubleshoot.html)
- [G7/ONE+/Stelo troubleshooting](https://navid200.github.io/xDrip/docs/Dexcom/G7_Troubleshooting.html)
- [Problem when starting a new sensor](https://navid200.github.io/xDrip/docs/Dexcom/SensorFailedStart.html)
- Full list: see **Troubleshooting** on the [xDrip Dexcom page](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

## Libre 1

- Setup your NFC to Bluetooth bridge in xDrip
    
    → 汉堡菜单 (1) → 设置 (2) → 较不常见的设置 (3) → 蓝牙设置 (4)

- 在蓝牙设置中，完全按照以下屏幕截图中的方式设置复选框 (5)
    
    - 禁用看门狗功能，因为它们会重置手机蓝牙并中断您的泵连接。
    
    ![xDrip Libre Bluetooth Settings 1](../images/xDrip_Libre_BTSettings1.png)

- 您可以尝试启用以下设置（7）
    
    - 使用扫描
    - 信任自动连接
    - 使用后台扫描

- 若您频繁断开网桥连接或难以恢复连接，**请禁用这些设置**（8）。
    
    ![xDrip Libre Bluetooth Settings 2](../images/xDrip_Libre_BTSettings2.png)

- 除非您明确知道启用原因，否则请保持其他所有选项处于禁用状态。
    
    ![xDrip Libre Bluetooth Settings 3](../images/xDrip_Libre_BTSettings3.png)

### Libre智能读卡器电池电量

- MiaoMiao和Bubble等网桥设备的电池电量可在AAPS中显示（Blucon除外）。
- 详情请参阅[截图页面](#screens-sensor-level-battery)。

### 连接Libre发射器并启动传感器

- If your sensor requires it (Libre 2 EU and Libre 1 US) install the latest out of process algorithm.

- Your sensor must be already started using the vendor app or the reader (xDrip cannot start or stop Libre sensors).

- 将数据源设置为Libre蓝牙。
    
    → 汉堡菜单 (1) → 设置 (2) → 在硬件数据源中选择 Libre 蓝牙 (3)
    
    ![xDrip Start Libre Transmitter & Sensor 1](../images/xDrip_Libre_Transmitter01.png)

- 扫描蓝牙并连接桥接器。
    
    → 汉堡菜单 (1) → 扫描蓝牙 (2) → 扫描 (3)
    
    - If xDrip can't find the bridge, make sure it's not connected to the vendor app. Put it in charge and reset it.
    
    ![xDrip Start Libre Transmitter & Sensor 2](../images/xDrip_Libre_Transmitter02.png)

- Start the sensor in xDrip.
    
        {admonition} 安全警告
        :class: warning
        传感器预热一小时结束前请勿使用其数据：此时数值可能极高，会导致AAPS做出错误决策。
    
    → 点击汉堡菜单(1) → 选择"启动传感器"(2) → 点击"启动传感器"(3) → 设置您使用读卡器或厂商应用启动传感器的准确时间。若非今日启动，请选择"不是今天"(4)。

![xDrip Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)

(xdrip-libre2-patched-app)=

## Libre 2 修补版应用程序

- 将数据源设置为 Libre 修补版应用程序。
    
    → 汉堡菜单 (1) → 设置 (2) → 在硬件数据源中选择 Libre（修补版应用程序）(3)
    
    ![xDrip Libre Patched app 1](../images/xDrip_Libre_Patched01.png)

- 您可以在"较少使用的设置"→"额外日志设置"→"日志记录附加标签"下添加`BgReading:d,xdrip libre_receiver:v`。这将记录额外的错误信息以便故障排除。

![xDrip LibreLink logging](../images/Libre2_Tags.png)