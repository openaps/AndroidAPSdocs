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
- You can also use xDrip as a companion app of the official Dexcom app, but you might experience delays in BG readings.
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
-   短时间内BYODA应能接收到发射器信号。

### AAPS 设置

-   Select **BYODA** in [**Configuration → BG Source**](#Config-Builder-bg-source).

-   If you don't receive any values select any other data source, then re-select **BYODA** to trigger the demand for permissions to establish the connection between AAPS and BYODA-broadcast.

### Settings for xDrip

-   选择“640G/Eversense”作为数据源。
-   Command 'start sensor' must be performed in xDrip in order to receive values. 此操作不会影响您当前由自建Dexcom应用控制的传感器。


(DexcomG6-troubleshooting-g6)=
## G6 和 ONE 故障排除

### Dexcom G6/ONE 特定故障排除

-   向下滚动到[此处](https://navid200.github.io/xDrip/docs/Dexcom_page.html)的 **故障排除**。

### 一般故障排除

CGM通用故障排除指南可[在此](#general-cgm-troubleshooting)查阅。

### 运行中的传感器搭配新发射器

如果在传感器运行期间更换发射器，可尝试在不损坏传感器底座的情况下移除发射器。可以在[此处](https://navid200.github.io/xDrip/docs/Remove-transmitter.html)找到视频。若选择采用[此替代方案](https://youtu.be/tx-kTsrkNUM)，则须谨慎操作，避免用撬片[损坏传感器触点](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html)。
