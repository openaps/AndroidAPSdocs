# Remote monitoring

![监控儿童](../images/KidsMonitoring.png)

AAPS为儿童提供多种远程监控选项，并且还可以发送远程指令。 当然，您也可以使用远程监控来跟踪您的伴侣或朋友。

## 功能

- 孩子的泵可通过孩子的手机使用AAPS进行控制。
- 父母可以使用手机上的**AAPSClient应用程序**远程查看所有相关数据，如血糖水平、活性碳水、活性胰岛素量等。 AAPS和AAPSClient应用程序中的设置必须相同。
- 父母可以通过在手机上使用**xDrip+应用程序的跟随者模式**接收警报。
- 使用受双重身份验证保护的[短信指令](../RemoteFeatures/SMSCommands.md)进行AAPS的远程控制。
- 如果同步运行良好（即，您没有看到不需要的数据更改，如临时目标（TT）、临时基础率（TBR）等的自我修改），则建议使用AAPSClient应用程序进行远程控制。 有关更多详细信息，请参阅[2.8.1.1版发行说明](#important-hints-2-8-1-1)。

## 远程监控的工具和应用程序

- 在网页浏览器中使用[Nightscout](https://nightscout.github.io/)（主要用于数据显示）
- AAPSClient应用程序是AAPS的精简版，能够跟踪他人、切换配置、设置临时目标和输入碳水化合物。 有两个应用程序可供[下载](https://github.com/nightscout/AndroidAPS/releases/)：AAPSClient和AAPSClient2。 唯一的区别是应用程序名称。 这样，您可以在同一部手机上安装该应用程序两次，以便能够用它跟踪两个不同的个人/Nightscout。
- 如果使用的是Dexcom原版应用程序，则可以使用Dexcom跟踪（仅血糖值）
- 在跟随者模式下使用[xDrip+](../CompatibleCgms/xDrip.md)（主要是血糖值和**警报**）
- 在iOS上使用[Sugarmate](https://sugarmate.io/)或[Spike](https://spike-app.com/)（主要是血糖值和**警报**）
- 一些用户发现，像[TeamViewer](https://www.teamviewer.com/)这样的完全远程访问工具对于高级远程故障排除很有帮助

## 智能手表选项

智能手表在帮助儿童管理AAPS方面是一个非常有用的工具。 可以实现几种不同的配置：

- 如果在父母的手机上安装了AAPSClient，则可以在与父母的手机连接的兼容智能手表上安装[AAPSClient WearOS应用程序](https://github.com/nightscout/AndroidAPS/releases/)。 这将显示当前的血糖值、Loop（闭环系统）状态和允许碳水化合物输入、临时目标设定以及配置更改。 但它不允许通过WearOS应用进行大剂量胰岛素注射。
- 或者，可以在与孩子的手机连接但由父母佩戴的兼容智能手表上构建并安装[AAPS WearOS应用程序](../WearOS/WearOsSmartwatch.md)。 这包括上面列出的所有功能，以及大剂量注射胰岛素的能力。 这样，父母就可以在不需要从孩子身上取下手机的情况下为孩子注射胰岛素。

## 需要考虑的事项

- AAPS和AAPSClient应用程序中的设置必须相同。
- 考虑到上传和下载所需的时间，以及AAPS主手机仅在循环运行后才会上传数据，因此主设备和跟随者设备之间会存在时间差。
- 如果远程控制不起作用（_即_，出现网络问题或蓝牙连接丢失）时，您的应急计划是什么？  始终考虑如果您突然无法发送新指令，**AAPS**会发生什么。 **AAPS**会用当前配置值覆盖泵的基础率、胰岛素敏感因子（ISF）和碳水化合物比率（ICR）。 如果切换到更强的胰岛素配置，则只使用临时配置切换（_即_，设置持续时间），以防远程连接中断。 然后，当时间到期时，泵将恢复为原始配置。