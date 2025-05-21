# 更新到新版本或分支

## 自行构建而非下载

由于医疗设备相关的法规，**AAPS**无法下载。 构建该应用供自己使用是合法的，但不得将副本提供给他人 详情请参阅[常见问题页面](../UsefulLinks/FAQ.md)。

## 重要说明

* 当有新版本发布时，请尽快更新至最新版本的 **AAPS**。
* 当有新版本可用时，**AAPS** 应用内会显示新版本的信息横幅。
* 新版本发布时也会在 Facebook 上同步公告。
* 更新前请仔细阅读 [版本说明](ReleaseNotes.md)，并通过 Facebook 或 Discord 与社区确认所有疑问。
    
    ```{note}
    如果您想在新电脑上构建 **AAPS**：请将备份的密钥库文件复制到新电脑。 然后按照 [首次构建 **AAPS** 流程](../SettingUpAaps/BuildingAaps.md) 操作，而非本指南。 唯一区别在于您可以选择已复制的密钥库文件而无需新建。
    ```

## 更新至新版本 AAPS 的概览

```{contents} 更新至新版本 AAPS 的步骤 :depth: 1 :local: true

    <br />如果遇到问题，请参阅[Android Studio故障排除]的单独页面(../GettingHelp/TroubleshootingAndroidStudio).
    
    ###导出您的设置
    
    从手机上的现有 **AAPS** 版本导出您的设置。 您可能用不到它，但以防万一最好保存。
    
    如果您不记得如何操作，请参阅[导出和导入设置](ExportImportSettings.md) 页面。
    
    ###检查您的Android Studio版本
    
    最低版本要求请参阅  [构建说明](#Building-APK-recommended-specification-of-computer-for-building-apk-file). 如果您的版本较旧，请先 [更新Android Studio](#Building-APK-install-android-studio)!
    
    (Update-to-new-version-update-your-local-copy)=
    ###更新您的本地副本
    ```{admonition}警告
    :class: 警告
    如果您从2.8.x之前的版本更新，请按照[新克隆](../SettingUpAaps/BuildingAaps.md)的说明进行操作，因为本指南不适用于您！
    

* 在 Android Studio 中打开现有的 AAPS 项目。 可能需要选择您的项目。 （双击）AAPS项目。
    
    ![Android Studio - 选择项目](../images/update/01_ProjectSelection.png)

* 在 Android Studio 菜单栏选择 Git -> Fetch
    
    ![Android Studio 菜单 - Git - Fetch](../images/update/02_GitFetch.png)

* 右下角会显示 Fetch 成功的消息。
    
    ![Android Studio 菜单 - Git - Fetch 成功](../images/update/03_GitFetchSuccessful.png)

* 在菜单栏选择 Git -> Pull
    
    ![Android Studio 菜单 - Git - Pull](../images/update/04_GitPull.png)

* 保持所有选项默认（origin/master）并点击 Pull
    
    ![Android Studio - Git - Pull 对话框](../images/update/05_GitPullOptions.png)

* 等待下载完成，底部状态栏会显示进度。 完成后，会显示成功消息。
    
    ```{note}
    更新的文件可能不同！ 这并不意味着有问题。
    ```
    
    ![Android Studio - Pull 成功](../images/update/06_GitPullSuccess.png)

* Gradle Sync 会自动运行以下载依赖项。 请等待它完成。
    
    ![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

### 检查 JVM 版本

若您曾在同一台电脑上构建过旧版 **AAPS**，此步骤尤为重要。

在 [构建说明](#Building-APK-recommended-specification-of-computer-for-building-apk-file) 中核对当前构建的 **AAPS** 版本所需的 JVM 版本。 然后按照[不兼容的 Gradle JVM](#incompatible-gradle-jvm)中的步骤确保当前使用正确版本。

(Update-to-new-version-build-the-signed-apk)=

### 构建签名 APK

您的源代码现在是当前发布的版本，并且已检查所有前提条件。 请按 [构建签名 APK 章节](#Building-APK-generate-signed-apk) 的描述构建签名 APK。

(Update-to-new-version-transfer-and-install)=

### 传输并安装 APK

需将 APK 传输至手机后进行安装。

```{note}
若您使用 Android Studio 中已有的密钥库完成构建，则无需删除手机上的现有应用。 安装APK时，按照提示安装更新。
对于其他场景，例如在Android Studio中为您的签名APK建立新的密钥库，您需要在安装APK之前删除旧的应用程序。 **确保导出您的设置！**
```

具体操作请参考 [传输与安装 AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md) 说明。

(Update-to-new-version-check-aaps-version-on-phone)=

### 检查手机上的 AAPS 版本

安装新的APK后，您可以通过点击右上角的三个点菜单，然后点击“关于”来检查手机上的AAPS版本。 您应该看到当前版本。

![已安装的 AAPS 版本](../images/Update_VersionCheck.png)

请查阅 [版本说明](../Maintenance/ReleaseNotes.md) 确认是否有更新后的特别注意事项。

## 故障排除

如果出现问题，请不要惊慌。

深呼吸！

若您的问题已有记录，请参考 [Android Studio 故障排除](../GettingHelp/TroubleshootingAndroidStudio) 页面！

如需更多帮助，请通过 [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) 或 [Discord](https://discord.gg/4fQUWHZ4Mw) 联系其他 **AAPS** 用户。