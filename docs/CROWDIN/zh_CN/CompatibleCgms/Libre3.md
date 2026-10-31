# **Freestyle Libre 3** 和 3+

Freestyle Libre 3 (FSL3) 需要特殊设置才能将血糖值传输至AAPS系统。获取Freestyle Libre 3 (FSL3)数值至AAPS系统存在两种可行方案。

![FL3](../images/d912c1d3-06d2-4b58-ad7c-025ca1980fae.jpeg)

以下实现方法需配合使用独立应用程序Juggluco。 It uses Juggluco to receive raw, 1-minute interval data from the sensor which is then passed to xDrip or AAPS. 新传感器既可通过Libre 3应用程序启动，也可直接在Juggluco中激活。以下指南说明了使用Juggluco应用程序启动传感器的流程。若传感器启动时已登录Libreview账户，接收端可在Juggluco和Libre 3应用之间切换使用。

当传感器通过Libre 3应用启动时，Juggluco也可将数据传输至LibreView平台，以便与医疗保健提供者共享。

Within xDrip the sensor can be calibrated in the range of -40 mg/dL to +20 mg/dL (-2.2 mmol/L to +1.1 mmol/L) to compensate for differences between a manual meter reading and the sensor readings.

## Method 1: use 1-minute readings directly
**AAPS** is tailored for 5-minute readings. Therefore processing 1-minute values has occasional limitations.

See [here](#juggluco-to-aaps).


## Method 2: convert 1-minute readings into 5-minute values via xDrip
This method uses Juggluco to receive raw, 1-minute interval data from the sensor which is then passed to xDrip to be smoothed into 5-minute interval data to be passed to AAPS.

### 步骤 1：设置 Juggluco
从[此处](https://www.juggluco.nl/Juggluco/download.html)下载并安装 Juggluco 应用程序。按照[此处](https://www.juggluco.nl/Juggluco/libre3/)的说明进行操作

Make sure you send the glucose values to xDrip: In Juggluco's settings you can configure Juggluco to send its glucose value to other apps. Juggluco can send three types of such broadcasts: The **Patched Libre broadcast** was originally used by the patched Librelink app and can be used to send glucose values to xDrip

### 步骤 2：设置 xDrip

The blood glucose values are received by the xDrip app on the smartphone.

- If not already set up then download [xDrip](https://github.com/NightscoutFoundation/xDrip) and follow the instructions on [xDrip settings page](../CompatibleCgms/xDrip.md).
- In xDrip select "Libre2 (patched app)" as data source.
- 如有需要，请在"较少使用的设置→额外日志设置→日志记录额外标签"下输入"BgReading:d,xdrip libre_receiver:v"。这将记录额外的错误信息以便故障排除。

![xDrip LibreLink logging](../images/Libre2_Tags.png)

- Technically, the current blood sugar value is transmitted to xDrip every minute. 默认情况下，加权平均滤波器会基于过去25分钟的数据计算平滑值。您可通过NFC扫描功能菜单调整该时段参数。

  → 汉堡菜单 → 设置 → NFC 扫描功能 → 使用 xxx 方法时平滑 libre 3 数据

  ![xDrip advanced settings Libre 2 & raw values](../images/xDrip_Libre3_Smooth.png)



### 步骤3：在xDrip中启动传感器

In xDrip start the sensor with "Start Sensor" and "not today". 无需将手机紧贴传感器。实际上，"启动传感器"功能并不会真正启动任何Libre 3传感器，也不会与其产生任何物理交互。 This is simply to indicate xDrip that a new sensor is delivering blood sugar levels. If available, enter two blood-measured values for the initial calibration. Now the blood glucose values should be displayed in xDrip every 5 minutes. 若因手机距离过远导致数值遗漏，系统将不会进行数据回填。

如果仍然没有数据，请至少等待15-20分钟。

After a sensor change xDrip will automatically detect the new sensor and will delete all calibration data. You may check your blood glucose after activation and make a new initial calibration.

### Step 4: Configure AAPS

- See [here](#juggluco-to-xdrip) and come back.

- If **AAPS** does not receive BG values when phone is in airplane mode, use "Identify receiver"
- Turn off Smoothing (done in xDrip already)

## 后续传感器更换

1. 打开Juggluco并记录现有传感器的序列号。

![Libre serial number](../images/libre3/step_13.jpg)

2. 现在只需用手机的NFC功能扫描新传感器即可。 Juggluco会显示启动是否成功的提示。
3. 当您准备停用旧传感器时，请点击屏幕左上角空白区域的任意位置以打开Juggluco菜单。
4. 选择已过期的传感器并点击"终止"

![Terminate sensor](../images/libre3/step_14.jpg)

Note: When two sensors are active Juggluco will send the most recent value from either sensor to xDrip. If the sensors are not calibrated and reading BG similarly, this may result in jumpy BG values being reported to xDrip. 如果不慎终止了错误的传感器，只需重新扫描该传感器即可重新激活。

## 在Libre 3和Juggluco应用之间切换传感器

若传感器启动时已登录Libreview账户，接收端可在Juggluco和Libre 3应用之间切换使用。这需要以下步骤：

1. 请从Google Play商店安装Libre 3应用程序。
2. 请使用激活传感器时所用的Libreview账户设置Libre 3应用程序。
3. 在安卓设置中强制停止Juggluco应用。
4. 在Libre 3菜单中点击"启动传感器"，依次选择"是"、"下一步"，然后扫描您的传感器。
5. 几分钟后，血糖值应会在Libre 3应用程序中显示。

要从Libre 3应用切换回Juggluco，需通过安卓设置强制停止Libre 3应用，然后执行步骤1和步骤2。

(libre3-experiences-and-troubleshooting)=
## 经验和故障排除

### 排查Libre3与Juggluco连接问题

- 请确保您使用的是最新版Juggluco应用
- 请按照本指南检查您的设置
- 有时您可能需要强制停止Libre3应用和Juggluco并重新启动它们。
- 请关闭蓝牙后重新开启
- 请稍等片刻或尝试关闭Juggluco
- 旧版Juggluco(2.9.6以下版本)不会将Libre3传感器的后续数据发送至已连接设备(如WearOS上的Juggluco)。您可能需要在修改版Libre3应用（Juggluco菜单）中点击"重新发送数据"。

### 更多帮助

原始说明：[jkaltes 网站](https://www.juggluco.nl/Juggluco/libre3/)

其他 Github 仓库：[Github 链接](https://github.com/maheini/FreeStyle-Libre-3-patch)
