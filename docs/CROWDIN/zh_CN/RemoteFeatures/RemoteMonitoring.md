# 远程监控

![监控儿童](../images/KidsMonitoring.png)

__AAPS__ offers several features for remote monitoring of type 1 diabetic children and also faciltates remote commands which sends instructions to the __AAPS__ remotely. Similarly, __AAPSClient__ can also be used for remote monitoring to follow your partner's or friend's __AAPS__.

## 功能

- Kid's pump is controlled by kid's phone using __AAPS__.
- Caregivers can remotely follow viewing all relevant data such as glucose levels, carbs on board, insulin on board etc. using **AAPSClient apk** on their phone which must be an Android phone. Settings amended in __AAPS__ will synchromise with __AAPSClient__ and vice versa.
- Caregivers can be alarmed by using **xDrip+ app in follower mode** on their Android phone if xdrip companion mode is set up.
- Remote control of __AAPS__ using [SMS Commands](../RemoteFeatures/SMSCommands.md) is secured by two-factor authentication.
- Remote control through __AAPSClient__ is only recommended if your synchronization is working well (ie. you don’t see unwanted data changes like self modification of TT, TBR etc) see [release notes for Version 2.8.1.1](#important-hints-2-8-1-1) for further details. However synchonization is less likely to an issue if the user if usiing the latest version of __AAPS__ and __AAPSClient with NSClientv3/Nightscout15.

## 远程监控的工具和应用程序

- 在网页浏览器中使用[Nightscout](https://nightscout.github.io/)（主要用于数据显示）
- __AAPSClient__ apk is a stripped down version of __AAPS__ capable of following somebody, making __Profile Switches__, setting __TTs__ and entering carbs. 有两个应用程序可供[下载](https://github.com/nightscout/AndroidAPS/releases/)：AAPSClient和AAPSClient2。 AAPSClient should be used is the caregivers wishes to install the apk twice on the same phone to follow 2 different persons (e.g two children with type 1 each with their own nightscout acccount).
- 如果使用的是Dexcom原版应用程序，则可以使用Dexcom跟踪（仅血糖值）
- 在跟随者模式下使用[xDrip+](../CompatibleCgms/xDrip.md)（主要是血糖值和**警报**）
- 在iOS上使用[Sugarmate](https://sugarmate.io/)或[Spike](https://spike-app.com/)（主要是血糖值和**警报**）
- 一些用户发现，像[TeamViewer](https://www.teamviewer.com/)这样的完全远程访问工具对于高级远程故障排除很有帮助

## 智能手表选项

A smartwatch can be a very useful tool in helping manage __AAPS__ with T1D kids. A couple of different options are possible:

- Option 1 - If __AAPSClient__ is installed on the caregiver's phone, the [AAPSClient WearOS app](https://github.com/nightscout/AndroidAPS/releases/) can be installed on a compatible smartwatch connected to the caregiver's phone. This will show current BG, loop status and allow carb entry, Temp Targets and Profile changes. 但它不允许通过WearOS应用进行大剂量胰岛素注射。
- Option 2 - Alternatively, the [AAPS WearOS app](../WearOS/WearOsSmartwatch.md) can be built and installed on a compatible smartwatch, connected to the kid's phone but worn by the parent. 这包括上面列出的所有功能，以及大剂量注射胰岛素的能力。 This allows the caregiver o administer insulin without needing to remove the kid's phone from however it is kept on them.

## 需要考虑的事项

- Consider time gap between master and follower due to time for up- and download as well as the fact that __AAPS__ master phone will only upload after loop run.
- 如果远程控制不起作用（_即_，出现网络问题或蓝牙连接丢失）时，您的应急计划是什么？  始终考虑如果您突然无法发送新指令，**AAPS**会发生什么。 **AAPS**会用当前配置值覆盖泵的基础率、胰岛素敏感因子（ISF）和碳水化合物比率（ICR）。 如果切换到更强的胰岛素配置，则只使用临时配置切换（_即_，设置持续时间），以防远程连接中断。 然后，当时间到期时，泵将恢复为原始配置。
