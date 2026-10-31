# Eversense

There are four different methods to access the readings from Eversense:

- ESEL 伴侣模式
- ESEL 修补模式
- xDrip companion app
- Notification Reader (built into **AAPS**)

## ESEL

请按照[说明](https://github.com/BernhardRo/Esel?tab=readme-ov-file#esel)获取并安装[ESEL应用](https://github.com/BernhardRo/Esel/tree/master/apk)。

- In ESEL, open the three dots menu (⋮) at the top right and select **Settings** (also available from the ☰ menu). In the settings:
  - 启用“发送到 AAPS 和 xDrip”
  - **禁用**“发送到 Nightscout”
  - 由于来自 Eversense 的血糖数据可能存在噪点，建议在 ESEL 中启用“平滑数据”。

![ESEL Broadcast](../images/ESEL.png)

### 伴侣模式

从 Eversense 应用程序通知中读取数据（适用于自 ESEL 3.0.1 版本起提供的标准 Eversense 应用程序）。

1. 使用来自 Google Play 商店的官方 Eversense 应用程序
   - 可选，但回填需要：登录您的 Eversense 帐户
   - 在“同步”中，启用“自动同步”
2. ESEL 的配置：
   - 禁用设置“从修补的 Eversense 应用程序获取数据”
   - 如需数据回填：请启用"从eversensedms.com填充缺失数据"功能
   - 请输入您的Eversense登录邮箱地址和密码
3. Set "MM640g" as BG source in [**Configuration → BG Source**](#Config-Builder-bg-source).

### 已破解的Eversense应用

 需要使用已破解版的Eversense应用（可完全离线运行，包括数据回填功能）。

1. 卸载Eversense应用（警告：您本地的历史数据（超过1周）将会丢失！）

2. 安装[破解版Eversense应用](https://cr4ck3d3v3r53n53.club)并按照供应商说明使用

   - 启动Eversense应用，登录后连接您的发射器，其使用方式与原版应用完全相同。

3. ESEL 的配置：

   - 启用"从破解版Eversense应用获取数据"设置



![ESEL Broadcast](../images/ESELpatch.png)

If you run ESEL with a fresh installation of Eversense for the first time, it can take up to 15min until your first values appear in xDrip!

4. Set "MM640g" as BG source in [**Configuration → BG Source**](#Config-Builder-bg-source).

## xDrip

xDrip can read notifications from the vendor app, like ESEL does. 没有回填功能。

- Download and install xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip)
- As data source in xDrip “Companion App” must be selected.
- Select xDrip in [**Configuration → BG Source**](#Config-Builder-bg-source).
- Adjust the xDrip settings according to the explanations on the xDrip settings page [xDrip settings](../CompatibleCgms/xDrip.md).
- 在AAPS中启用[指数平滑功能](../CompatibleCgms/SmoothingBloodGlucoseData.md)。

## Notification Reader

**AAPS** can read the glucose values directly from the notifications posted by the official Eversense app, without any other app in between. 没有回填功能。

- Select **Notification Reader** in [**Configuration → BG Source**](#Config-Builder-bg-source) and grant **AAPS** access to notifications when asked.
- Make sure the Eversense app shows the current glucose value in its notification.

```{warning}
血糖值读取频率并非始终为5分钟，且可能出现重复数据。
```