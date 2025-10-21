(Troubleshooting-NSClient-troubleshooting-nsclient)=

# NSClient故障排除

NSClient依赖与Nightscout的稳定通信。 不稳定的连接会导致同步错误和高数据使用量。

如果没有人通过Nightscout关注你，可以选择暂停NSClient以节省电量，或设置NSClient仅在Wi-Fi连接和/或充电时连接。

* 如何检测连接不稳定？

进入AAPS的NSClient选项卡并查看日志。 预期行为是每约30秒收到一次PING且几乎没有重连消息。 如果看到多次重连，则存在问题。

自AAPS 2.0版本起，当检测到此行为时，NSClient会暂停15分钟，并在主界面显示"NSClient故障"消息。

* 重新启动

第一步应尝试重启：先重启Nightscout，再重启手机以确认问题是否持续

如果Nightscout托管在Heroku上，可通过以下方式重启：登录Heroku，点击你的nightscout应用名称，点击"More"菜单，选择"Restart all dynos"。

其他主机请遵循对应服务商的操作指南。

* 手机问题

Android可能会将手机置于睡眠模式。 检查你的手机电源选项中是否有针对AAPS的例外，以允许它始终在后台运行。

在强网络信号区域再次检查NSClient。

尝试更换其他手机。

* Nightscout设置

如果使用Azure托管站点，许多用户发现迁移到Heroku后连接问题有所改善。

针对Azure连接问题的临时解决方案：在应用设置中将HTTP协议设为2.0，并启用Websockets

* Nightscout中无血糖读数

如果AAPS已正确连接Nightscout但血糖显示为N/A， 请进入NSClient选项卡，点击右上角三点菜单，选择"NSClient首选项"→"同步"，启用"接收/回填CGM数据"。

* 如果仍然出现错误...

检查MongoDB数据库大小（或通过Nightscout的数据库大小插件）。 如果使用MongoDB免费版，496MB表示数据库已满需要清理。 [遵循Nightscout说明检查数据库大小并清理数据](https://nightscout.github.io/troubleshoot/troublehoot/#database-full)。

清理数据库前，如果尚未配置，建议将AAPS数据捐赠给Open Humans项目（用于研究）。 配置说明参见[OpenHumans配置页面](../SupportingAaps/OpenHumans.md)。