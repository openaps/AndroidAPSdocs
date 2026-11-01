# Open Humans 数据上传器

## 为科研捐献您的数据

您可通过向研究项目捐献数据来助力科研社区！ This helps scientists to pay it forward, develop new scientific ideas and make open source closed loop systems better known. AAPS已支持与[Open Humans](https://www.openhumans.org)平台同步数据，该平台允许您上传、关联并存储个人数据（包括基因、活动及健康数据等）。

您始终拥有数据的完全控制权，可自主决定支持哪些研究项目并授予其数据访问权限。根据您参与的具体项目，数据会以不同方式和程度被分析使用。

以下数据将被上传至您的Open Humans账户：

- 血糖值
- Careportal事件（除备注外）
- 扩展大剂量(方波)
- 配置文件切换
- 每日总剂量
- 临时基础率
- 临时目标
- 偏好设置
- 应用版本
- 设备型号
- 屏幕尺寸

秘密或私人信息（如 Nightscout URL 或 API 密钥）不会被上传。

## 设置

1. 如果尚未注册，请先在 [Open Humans](https://www.openhumans.org) 创建账户。您可以选择复用现有的 Google 或 Facebook 账户。
2. Enable the **Open Humans** plugin in [**Configuration** > **Communication**](../SettingUpAaps/ConfigBuilder.md).

![Open Humans enabled in Configuration > Communication](../images/OHUploader1.png)

3. Tap **Settings** on the **Open Humans** card. You can restrict uploads to times when the phone uses Wi-Fi (**WiFi only**) and/or is charging (**Charging only**).

![Open Humans settings with WiFi only and Charging only](../images/OHUploader_settings.png)

4. Tap **Open plugin** on the **Open Humans** card, then tap **Setup**.

![Open Humans plugin screen with the Setup button](../images/OHUploader_setup.png)

5. On the **Welcome to Open Humans** screen, tap **Next**. Read the **Consent** screen carefully: it shows the terms of use and which data is uploaded and not uploaded.
6. Switch on **I understand and agree.** (1) and tap **Login to Open Humans** (2).

![Open Humans Welcome and Consent screens in AAPS](../images/OHUploader2.png)

7. 将打开 Open Humans 网站。使用您的账户凭证登录。
8. Decide whether you want to hide your AAPS Uploader membership in your public Open Humans profile (1).
9. Click **Authorize project** (2).

![Login and project authorization on the Open Humans website](../images/OHUploader_web.png)

```{admonition} Older screenshot
:class: note
The screenshots above show an earlier version of the Open Humans website and still use the old project name **AndroidAPS Uploader**. The steps are the same.
```

10. Back in **AAPS**, the **Final touches** screen asks whether you want to proceed. Tap **Proceed**.
11. Wait until **We're done!** appears, then tap **Close**. From now on, your phone uploads data in the background from time to time.
12. The **Open Humans** plugin screen now shows your **Project Member ID**. Tap **Upload now** if you want to start an upload right away.
13. Tap **Logout** if you want to stop uploading data to Open Humans.
14. Android 通知将提示上传运行状态。

![Open Humans finish setup](../images/OHUploader3.png)

```{admonition} Older screenshot
:class: note
The screenshot above is from an earlier **AAPS** version. In **AAPS** 4 the confirmation screens are **Final touches** and **We're done!**, there is no queue size, and the buttons are **Upload now** and **Logout**.
```

15. 您可以通过登录 [Open Humans 网站](https://www.openhumans.org) 管理数据。

![Open Humans manage data](../images/OHWeb.png)

## 分享机会

### ["OPEN" 项目](https://www.open-diabetes.eu/)

"OPEN" 项目汇集了患者创新者、临床医生、社会科学家、计算机科学家和患者倡导组织的国际跨部门联盟，旨在研究越来越多糖尿病患者使用的 DIY 人工胰腺系统（DIY APS）的各个方面。详情请见其[网站](https://www.open-diabetes.eu/)。

In September 2020 the 'OPEN' project launched a [survey](https://survey.open-diabetes.eu/) including the option to donate data you uploaded to Open Humans. 其网站和调查内提供了如何向"OPEN" 项目捐赠数据的[教程](https://open-diabetes.eu/en/open-survey/survey-tutorials/)。

### [OpenAPS 数据共享库](https://www.openhumans.org/activity/openaps-data-commons/)

OpenAPS 数据共享库旨在为 DIYAPS 社区提供简便的数据共享方式用于研究。数据既可与创建传统研究项目的传统研究人员共享，也可与希望审查数据用于自身研究项目的社区团体或个人共享。该库使用 "Open Humans" 平台来支持用户轻松上传和共享来自 AAPS、Loop 和 OpenAPS 等 DIYAPS 系统的数据。

您可通过三种方式将数据导入 Open Humans：

1. 使用AAPS数据上传器功能将您的数据导入Open Humans平台
2. 使用Nightscout数据传输功能将您的数据导入Open Humans平台
3. 手动将数据文件上传至Open Humans平台

创建账户并完成数据导入Open Humans后，请务必加入OpenAPS数据共享计划，以便在您同意的情况下捐献数据供研究使用。

## 使用条款

这是一个将您的数据复制到 [Open Humans](https://www.openhumans.org) 的开源工具。我们无权在未经您明确授权的情况下与第三方共享数据。项目和应用通过随机用户 ID 识别数据，仅在您授权后安全传输至 Open Humans 账户。您可随时通过 [www.openhumans.org](https://www.openhumans.org) 停止上传并删除数据。请注意某些接收数据的项目可能不支持此操作。

另见 [Open Humans 使用条款](https://www.openhumans.org/terms/)。

## 数据隐私

Open Humans 通过为每个项目分配数字 ID 来保护隐私。 This allows projects to recognize but not identify you. AAPS 上传的应用 ID 类似，仅用于数据管理。更多信息请参考：

- [Open Humans 数据使用政策](https://www.openhumans.org/data-use/)
- [Open Humans GDPR](https://www.openhumans.org/gdpr/)
