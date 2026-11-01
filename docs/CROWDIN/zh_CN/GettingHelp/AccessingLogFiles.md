(Accessing-logfiles-accessing-logfiles)=

# 访问日志文件

* 将手机以文件传输模式连接至电脑
* 在AAPS数据目录中定位日志文件，路径为 `Android\data\info.nightscout.androidaps\files`。  
    根存储文件夹的命名可能因手机型号略有不同
* 对于 [AAPSClient](#RemoteControl_aapsclient)，路径为 `Android\data\info.nightscout.aapsclient\files`
* Note: log location has changed in **AAPS 3.3**. 如需旧版信息请查阅先前版本的文档

![日志](../images/aapslog.png)

* The current log is a .log file which can be viewed in a number of ways such as [LogCat](https://developer.android.com/studio/debug/am-logcat.html) within Android Studio, any log viewer Android app, or simply as plain text. 
* 历史日志文件会按日期/时间排序压缩存储在文件夹中 
* 如果您要在[Discord](https://discord.gg/4fQUWHZ4Mw)上分享日志文件以讨论潜在的bug，请解压并上传错误发生之前的文件。