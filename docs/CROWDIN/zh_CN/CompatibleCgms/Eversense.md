- - -
orphan: true
- - -

# Eversense 用户须知

获取Eversense读数有以下三种方法：

- ESEL 伴侣模式
- ESEL 修补模式
- xDrip+ 伴侣应用程序

## ESEL

请按照[说明](https://github.com/BernhardRo/Esel?tab=readme-ov-file#esel)获取并安装[ESEL应用](https://github.com/BernhardRo/Esel/tree/master/apk)。

- 启用“发送到 AAPS 和 xDrip”
- **禁用**“发送到 Nightscout”
- 由于来自 Eversense 的血糖数据可能存在噪点，建议在 ESEL 中启用“平滑数据”。

![ESEL Broadcast](../images/ESEL.png)

### 伴侣模式

从 Eversense 应用程序通知中读取数据（适用于自 ESEL 3.0.1 版本起提供的标准 Eversense 应用程序）。

1. 使用来自 Google Play 商店的官方 Eversense 应用程序
   - Optional, but required for backfilling: Login to your Eversense account
   - In Sync, enable Auto synchronization
2. Configuration of ESEL:
   - Disable the setting "Get data from patched Eversense App"
   - For backfilling: Enable "Fill missing data from eversensedms.com"
   - Provide as Email address and password your Eversense login data
3. Set "MM640g" as BG source in in [ConfigBuilder, BG Source](#Config-Builder-bg-source).

### Patched Eversense App

 Requires a patched version of the Eversense App (works completely offline, including backfilling).

1. Uninstall the Eversense App (Warning: your local historical data (older than 1 week) will be lost!)

2. Install the [patched Eversense app](https://cr4ck3d3v3r53n53.club) and use it as described by the vendor

   - Start the Eversense App, login, connect to your transmitter and use it just like the normal app.

3. Configuration of ESEL:

   - Enable the setting "Get data from patched Eversense App"



![ESEL Broadcast](../images/ESELpatch.png)

​       If you run ESEL with a fresh installation of Eversense for the first time, it can take up to 15min until your first values appear in xDrip!

4. Set "MM640g" as BG source in in [ConfigBuilder, BG Source](#Config-Builder-bg-source).

## xDrip+

xDrip+ can read notifications from the vendor app, like ESEL does. No backfilling available.

- 下载并安装 xDrip+：[xDrip](https://github.com/NightscoutFoundation/xDrip)
- As data source in xDrip+ “Companion App” must be selected.
- 在[ConfigBuilder的BG数据源](#Config-Builder-bg-source)中选择xDrip+。
- Adjust the xDrip+ settings according to the explanations on the xDrip+ settings page [xDrip+ settings](../CompatibleCgms/xDrip.md).
- Enable [Exponential Smoothing](../CompatibleCgms/SmoothingBloodGlucoseData.md) in AAPS.

```{warning}
BG values reading frequency is not always 5 minutes and duplicates can occur.
```