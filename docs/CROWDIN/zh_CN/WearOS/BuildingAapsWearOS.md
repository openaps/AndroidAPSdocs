# 构建AAPS Wear OS应用

**AAPS**所需的Wear OS应用（即“Wear OS apk”）已从适用于Android手机的“完整”AAPS构建中分离出来。 因此，您需要生成第二个安装文件（或apk），以便将**AAPS** Wear安装到手表上（这是通过手机侧载完成的）。 强烈建议立即在首次为手机构建完整的**AAPS** apk之后构建**AAPS** Wear apk文件。 这不仅在您[首次构建**AAPS**](../SettingUpAaps/BuildingAaps.md)时非常快速，而且在尝试设置手表与手机通信时还可以避免任何潜在的兼容性问题。 如果手表上的**AAPS** Wear apk与手机上的**AAPS** apk版本不同，或者自初始**AAPS**构建以来已经过去了数月，则它们可能不兼容。

如果您已经在手机上使用了**AAPS**，并且没有同时构建手机和手表（Wear）的**AAPS** apk文件，为确保成功，最好同时重新构建这两个apk文件。 使用相同的**keystore文件**同时构建AAPS手机和手表apk。

## 支持的Wear OS版本

AAPS至少需要Wear OS API级别28（Android 9）。

```{warning}
AAPS表盘适用于API级别28至33的Wear OS智能手表。 <br>
Wear OS 5有[限制](BuildingAapsWearOs-WearOS5)。
```

## 构建**AAPS** Wear apk文件

Wear apk的构建过程与“完整”手机apk的构建过程相似。

- 按照[构建AAPS](../SettingUpAaps/BuildingAaps.md)的说明操作。
- 当您到达“构建AAPS签名apk”中的[模块选择](#Building-APK-wearapk)时，请确保选择**`AndroidAPS.wear`**。

![Wear module](../images/Building-the-App/wear_build1.png)

选择“**fullRelease**”以生成**AAPS** Wear apk文件。

![Wear module](../images/Building-the-App/wear_build2.png)

如果你愿意，你可以从下拉菜单中选择构建**“pumpcontrolRelease”**，这样你就可以远程控制胰岛素泵，但没法闭环。

## 故障排除

在构建3.2版完整的**AAPS**应用（以及任何签名应用）时，Android Studio会在同一文件夹中生成一个.json文件。 然后，当您尝试构建下一个签名应用（如**AAPS** Wear应用）时，这会导致[未提交的更改](#troubleshooting_androidstudio-uncommitted-changes)错误。 解决这个问题的最快方法是导航到已构建完整AAPS应用程序的文件夹，您的文件夹可能类似于：

`C:\Users\Your Name\AndroidStudioProjects\AndroidAPS\app\aapsclient\release.`

将不需要的.json文件从文件夹中删除或移出。 然后再次尝试构建**AAPS** Wear应用。 如果这不起作用，更详细的[故障排除指南](../GettingHelp/TroubleshootingAndroidStudio.md)将帮助您确定导致问题的具体文件，这也可能是您的keystore文件。 