# Setting up the Reporting Server

目前有两种报告服务器可与**AAPS**一起使用：

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Reporting Servers](../images/Building-the-App/ReportingServer.png)

We recommend using Nightscout.

(SettingUpTheReportingServer-nightscout)=
## Nightscout

Nightscout是一个网络应用程序，可以记录和显示您的CGM数据和**AAPS**数据，并生成报告。 它是一个功能强大的平台，已经与**AAPS**集成多年。 It enables users and caregivers to track the patient's diabetes data in near real-time (only a few seconds may pass between data reception and data provision if there is a sufficient Internet connection between all components involved). 它还允许护理人员向**AAPS**发送远程命令。

Nightscout is provided as open-source software. Anyone can create and operate a Nightscout server, using either free or paid-for services.

您可以在[Nightscout项目网站](http://nightscout.github.io/)上找到更多信息。

### Option 1 - Set up your Nightscout server yourself

Creating your Nightscout reporting server can require one or more web-based applications that will require maintenance. In order to have a completely free service, you may need to migrate your Nightscout site and data, if and when providers remove the free tier.

有关如何设置Nightscout以及各种操作选项的优缺点（包括成本估算）的描述，可以在[此处](https://nightscout.github.io/nightscout/new_user/#free-diy)找到。

### Option 2 - Pay for a hosted Nightscout service

There are also options from different service providers who host Nightscout for you, with a monthly fee. The costs are manageable, and the advantage of a hosted option is that you do not need to be IT-literate, or have any operating infrastructure.


Existing Nightscout users can reconsider where and how their Nightscout server is hosted from time to time, and change to a different option if it becomes more suitable.

一些Nightscout托管服务可以在[此处](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table)找到。

### Further configuration of Nightscout

一旦您的Nightscout实例启动并运行，请参阅[Nightscout配置页面](../SettingUpAaps/Nightscout.md)以获取其他注意事项。

(SettingUpTheReportingServer-tidepool)=
## Tidepool

Tidepool自2023年末发布的3.2版本起才可在**AAPS**中使用。

```{admonition} Tidepool with **AAPS** is only for reporting
:class: 危险 
当使用**AAPS**时，数据接收和报告之间存在三个小时的延迟，因此Tidepool不适合与护理人员共享实时信息。  
另一方面，如果Nightscout不是一个被接受的解决方案，Tidepool可以是一个与患者内分泌科医生共享报告的好选择。  
```

Tidepool是一个[开源](https://github.com/tidepool-org)项目。 It offers to run an account free of charge on the Tidepool servers.

有关如何使用AAPS设置Tidepool的更多信息，请[见此](../SettingUpAaps/Tidepool.md)。

```{admonition} **AAPS** has a the uploader for Tidepool integrated
:class: 注意
您**不需要**使用Tidepool的上传器应用程序：**AAPS**将为您上传血糖、治疗和基础率。 您只需要一个Tidepool个人帐户。 不要使用单独的Tidepool上传器工具上传您的数据，因为这会导致数值重复。  
```

## Next step

设置好报告服务器后，您现在可以为AAPS设置一个[专用的Google帐户](../UsefulLinks/DedicatedGoogleAccountForAaps.md)，或者直接转到[构建AAPS应用程序](../SettingUpAaps/BuildingAaps.md)。 