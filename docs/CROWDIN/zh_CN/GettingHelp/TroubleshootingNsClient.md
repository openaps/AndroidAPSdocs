(Troubleshooting-NSClient-troubleshooting-nsclient)=

# NSClient故障排除

NSClient依赖与Nightscout的稳定通信。不稳定的连接会导致同步错误和高数据使用量。

如果没有人通过Nightscout关注你，可以选择暂停NSClient以节省电量，或设置NSClient仅在Wi-Fi连接和/或充电时连接。

* 如何检测连接不稳定？

Open the NSClient screen (**Configuration** > **Communication** > **NSClientV3** > **Open plugin**) and watch the **Status** and the log. With websockets enabled, the status should stay "connected", with almost no reconnection messages in the log. 如果看到多次重连，则存在问题。

* 重新启动

As a first step, restart Nightscout and then your phone to see if the issue is permanent.

如果Nightscout托管在Heroku上，可通过以下方式重启：登录Heroku，点击你的nightscout应用名称，点击"More"菜单，选择"Restart all dynos"。

其他主机请遵循对应服务商的操作指南。

* 手机问题

Android可能会将手机置于睡眠模式。检查你的手机电源选项中是否有针对AAPS的例外，以允许它始终在后台运行。

在强网络信号区域再次检查NSClient。

尝试更换其他手机。

* Nightscout设置

如果使用Azure托管站点，许多用户发现迁移到Heroku后连接问题有所改善。

针对Azure连接问题的临时解决方案：在应用设置中将HTTP协议设为2.0，并启用Websockets

* Nightscout中无血糖读数

If **AAPS** connects to Nightscout correctly but BG displays as N/A: in the [NSClientV3 settings](#Preferences-nsclient), open **Synchronization** and turn on **Receive CGM data from NS**. This option is hidden while client control is on ([hardened mode](#client-master-control-hardened-mode)); in that case check that **NSClient BG** is selected in **Configuration** → **BG Source**.

* 如果仍然出现错误...

检查MongoDB数据库大小（或通过Nightscout的数据库大小插件）。如果使用MongoDB免费版，496MB表示数据库已满需要清理。[遵循Nightscout说明检查数据库大小并清理数据](https://nightscout.github.io/troubleshoot/troublehoot/#database-full)。

清理数据库前，如果尚未配置，建议将AAPS数据捐赠给Open Humans项目（用于研究）。配置说明参见[OpenHumans配置页面](../SupportingAaps/OpenHumans.md)。