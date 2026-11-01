# 创建和恢复备份

在手机上安装AAPS后，它就变成了你每天依赖的“医疗设备”。强烈建议为手机出现故障、被盗或丢失的情况制定紧急备份计划。 Therefore, it is essential to prepare by asking yourself: "What if?"

为了将你的AAPS设置恢复到现有手机或新手机上，重要的是要将以下项目保存在安全的位置（即：不要保存在手机上）。 Best practice is to keep at least two separate backups: on a local hard drive, USB stick and (preferred) on Cloud storage like Google Drive or Microsoft 365 OneDrive. By storing your backups in the cloud you'll always have everything needed accessible from your phone to restore your setup anywhere and anytime.

考虑购买一部备用手机，并练习恢复AAPS，以确保备用手机能按预期工作。 This step will give you confidence that your emergency plan is effective and that you can seamlessly continue using AAPS if your primary phone becomes unavailable.

```{admonition} Android backups and phone-transfer tools do not carry your AAPS settings
:class: warning
Since **AAPS** 4.0 the settings are kept in an encrypted store on the phone, and they are left out of the Google backup and of the phone-to-phone transfer of a new phone. A settings export, as described on this page, is the only way to carry them over.
```

为了能够恢复，手头备有以下项目是很重要的：

- 您的**Android Studio密钥库文件**和相关的**密码**：用于（重新）构建AAPS .APK安装程序文件。
- 最近的一份**AAPS安装程序.APK**副本。
- 最近的一份**设置导出**文件：用于恢复重要设置（包括您的目标！）。
- **如何备份**：您的<0>AAPS主密码</0>
- Backups of additional utilities: Such as BYODA and/or xDrip.
- 关于您设置的个人笔记。

以下是建议进行备份的项目。

## 创建备份

### 用于构建APK的计算机上的密钥库文件
当使用Android Studio构建.APK安装程序文件时，它会使用**密钥库文件和密码**对.APK安装程序文件进行签名。要更新您当前的AAPS安装，必须使用与初始安装相同的密钥库对更新后的.APK安装程序文件进行签名。在更新时，所有设置和AAPS数据库都将保留。 Note that without this, you are required to first uninstall the current application and then [reinstall](#reinstall-aaps) and reconfigure AAPS.

维护密钥库将大大降低将来更新APK的复杂性，特别是如果您需要从新计算机构建应用程序时。有关在使用密钥库构建新APK时的详细信息，请参阅[更新AAPS](../Maintenance/UpdateToNewVersion.md)部分。

**何时备份**：在首次构建**AAPS** APK后，应备份密钥库。

**如何备份**：找到您的密钥库路径。如果不记得，可以在Android Studio中选择**Build > APK > Next**来查找。路径将列在“Key store path”中。使用文件资源管理器导航到此路径，并复制您的密钥库文件（文件扩展名为`.jks`）。将其保存到安全的云位置，以防计算机无法使用。同时，务必记录下您的密钥库密码、密钥别名和密钥密码。

### 最新的APK副本
如果您的主**AAPS**手机丢失或损坏，拥有APK的副本将允许您快速使用新手机继续**AAPS**。注意：您还需要备份偏好设置，如下所述。

**何时备份**：您应该保留安装在**AAPS**主手机上的最新APK的备份。您可能还想保留一个更早的版本，以防出于某种原因需要回滚到该版本。

**如何备份**：使用Android Studio构建APK的计算机上会保留一份副本。此外，建议使用云平台存储一份安装程序APK的副本。确保您知道如何在需要时找到这两个位置。考虑在计算机和云平台上设置专用文件夹来存储这些备份。

### AAPS设置文件（又称“首选项”）

```{admonition} Where are preferences stored on my phone?
:class: tip
You will find your settings in the **AAPS Directory** you have selected during [AAPS setup](#SetupWizard-StoragePermission).</br>
You can also change the **AAPS directory** on the **Maintenance** screen (**menu** (☰) > **Maintenance**), see [Setting the local AAPS directory](#preferences-maintenance-logdirectory).
```

有了APK安装程序文件的副本（见上文）和您的**设置**文件，您就可以快速在现有手机或新手机上开始使用。

The **Settings** file is used to customize the AAPS application to fit your specific setup. They encompass details such as your **Configuration** settings, objective status, third-party communication settings (e.g., Nightscout, Tidepool), automations, and profiles.

将AAPS设置导出到文件，可以使您将配置恢复到特定的时间点。 As mentioned, in addition to all configuration settings, the export file also contains the status of your objectives, which you need to restore when **(re)installing** AAPS. Without this you will be required to redo all objectives from start to enable closed loop. Settings files also enable you to restore "last known good" settings for undoing any configuration changes.

**何时备份AAPS设置：**
* 每次完成一个目标时，以防止丢失进度。 _Without a copy of your **Settings** you will have to complete all objectives again in the event you need to re-install AAPS or replace your phone._

* 每当您计划对配置进行重大更改时（更改SMB设置、更改胰岛素类型、更换泵、更改自动化设置），应在更改前后备份您的**偏好设置**。这样，您既拥有最新的设置，也拥有更改前的副本，以防需要恢复。

* 仅适用于无管泵（Omnipod和Medtrum）用户：**偏好设置**文件包含当前药盒的连接详细信息，可用于在新手机上恢复与该pod的连接。如果您在开始使用当前pod后没有导出偏好设置的副本，那么在需要更换当前手机时，您将需要启动新pod。

**如何手动备份：**

1. If this your first time importing or exporting **Settings** you will need to set a master password in [Settings > Protection](#Preferences-master-password). 设置密码并记录在安全的地方。_没有此密码，您将无法访问您的**偏好设置**备份。 _

2. From the **AAPS** main screen, open the **menu** (☰) > **Maintenance**. Choose where to save the file with the **Local** and **Cloud** chips next to **Export settings** (see **Exporting or Importing Settings** below), then tap **Export settings**. **AAPS** shows where the file will go: the file name for **Local**, **Google Drive** for **Cloud**. Tap **OK**.

   ![Export settings to a local file](../images/Maintenance/export_settings_confirm_local.png)

   ![Export settings to Google Drive](../images/Maintenance/export_settings_confirm_cloud.png)

   Type the master password set above and tap **OK**.

   ![Master password for the export](../images/Maintenance/export_settings_password.png)

   **Settings exported** (local) or **Cloud export successful** (cloud) confirms the export.

   ![Settings exported message](../images/Maintenance/export_settings_done_local.png)

   ![Cloud export successful message](../images/Maintenance/export_settings_done_cloud.png)

3. 使用手机上的文件资源管理器（通常称为“Files”或“My Files”）导航至Internal Storage > AAPS > preferences。在这里，您将看到所有导出的偏好设置文件的副本。文件名应为`YYYY-MM-DD_Time_appname.json`。将此文件上传到您选择的云平台。然后，从云平台下载一份副本到您的本地计算机。

(ExportImportSettings-Settings-Export)=

## 设置导出

```{admonition} Where are preferences stored on my phone?
:class: tip
You will find your settings in the **AAPS Directory** you have selected during [AAPS setup](#SetupWizard-StoragePermission).</br>
You can also change the **AAPS directory** on the **Maintenance** screen (**menu** (☰) > **Maintenance**), see [Setting the local AAPS directory](#preferences-maintenance-logdirectory).
```

建议定期导出设置，尤其是在进行配置更改之前和之后。 You can choose to do exports **manually or (preferred) through automation**. Make sure to take a note of your AAPS master password and to backup your settings files by copying them off your phone to for instance a cloud storage location.

**注意**：_导出的设置将使用您的AAPS主密码进行加密：如果没有用于导出的主密码，您将无法导入设置文件！_

### 导入导出设置
To export or import settings, open the **menu** (☰) and select **Maintenance**. Under **File management**, the **Local** and **Cloud** chips next to **Export settings** and **Import settings** choose where the settings file is saved to or read from: **Local** is the AAPS directory on your phone, **Cloud** is available once a [Cloud Directory](#preferences-maintenance-cloud) is set up. Tapping a chip turns it on or off; at least one always stays selected, and both rows share the same choice. Then tap **Export settings** or **Import settings** itself to start.

![Maintenance menu with the Export settings and Import settings rows](../images/Maintenance/maintenance_export_import.png)

(ExportImportSettings-Automating-Settings-Export)=
### 自动化设置导出

For doing automating settings exports [(**see Automation**)](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export) open [**Settings** > **Maintenance**](#preferences-maintenance-settings), expand **Unattended Settings Export** and switch on **Enable automated settings export**.

此后可通过[自动化](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export)功能配置定期（_如_每周）或pod更换后的设置导出。

_**Note:** On importing settings, the user always needs to enter the AAPS master password!_

![Settings > Maintenance > Unattended Settings Export with the Enable automated settings export switch](../images/Maintenance/settings_unattended_export.png)

(ExportImportSettings-restoring-from-your-backups-on-a-new-phone-or-fresh-installation-of-aaps)=
## 在新手机或全新安装的AAPS上从备份中恢复

```{admonition} Where are preferences stored on my phone?
:class: tip
You will find your settings in the **AAPS Directory** you have selected during [AAPS setup](#SetupWizard-StoragePermission).</br>
You can also change the **AAPS directory** on the **Maintenance** screen (**menu** (☰) > **Maintenance**), see [Setting the local AAPS directory](#preferences-maintenance-logdirectory).</br>
If **AAPS** loses access to that directory (this can happen after a reinstall or after clearing the app's storage), it shows an **Access to the AAPS directory was lost** notification and stops saving settings to the phone until you [select the directory again](#preferences-maintenance-logdirectory).
```

Use these instructions if you have a back-up of your APK and **Settings** that you want to load on to a new phone or if you needed to delete and reinstall the APK on your existing phone for any reason.

_如果您使用相同密钥库构建的APK更新**AAPS**，则无需遵循此过程。但是，在应用更新之前，仍建议创建备份。_

如果您在丢失或替换了原始密钥库后更新**AAPS**（即使用没有转移密钥库的新构建计算机），请确保按照上述步骤备份所有设置，然后卸载手机上现有的**AAPS**版本。 See [Reinstalling AAPS with a new keystore](#reinstall-aaps) for the full procedure.

如有需要，在执行以下步骤之前，[设置您的CGM/BG源接收器](../Getting-Started/CompatiblesCgms.md)。

(ExportImportSettings-tubeless-pumps)=
```{admonition} Tubeless pumps (Omnipod and Medtrum) users
:class: warning
The **Preferences** file contains the session of the pod or patch that was active when you exported it.
- **Export right after every pod or patch activation** and copy the file off your phone.
- **Same phone, pod still running:** leave **Also replace pump settings** unticked. Your current pod is kept and only the other settings are imported.
- **New phone taking over the pod:** tick **Also replace pump settings**, and only use a file exported during the pod you are wearing now. A file from an earlier pod replaces your current pod session, and you will need to start a new pod.
- **An old pod session was imported by mistake:** **AAPS** keeps trying to reach that pod and you cannot activate a new one. Deactivate it; if that fails, discard it (see for example [Discarding a pod](#omnipod-dash-discard-pod) for Omnipod DASH).
```

```{admonition} Pump settings are kept unless you say otherwise
:class: note
By default, an import leaves your pump settings alone: the pump selected in **Configuration**, its pairing and all its other settings stay as they are on this phone. Tick **Also replace pump settings** on the import screen only when you restore onto a new phone that should take over the same pump. Settings that are not in the file are never deleted by an import.
```

1. 使用上述APK的备份副本，按照[新安装](../SettingUpAaps/TransferringAndInstallingAaps.md)的说明进行操作。

2. 启动**AAPS**并允许所有请求的权限。

3. 退出设置向导。 We will be importing all the necessary settings from the back-up copy of **Settings**

4. From the **AAPS** main screen press **Grant** and allow all permissions listed in the **Permissions Required** panel on the top

5. From the **AAPS** main screen, set the master password in [Settings > Protection](#Preferences-master-password) to the same password as you used with your back-ups.

6. If you haven't done it yet, [set the **AAPS directory**](#preferences-maintenance-logdirectory): from the **AAPS** main screen, open the **menu** (☰) > **Maintenance** > **AAPS directory**.

7. From the **AAPS** main screen, open the **menu** (☰) > **Maintenance** > **Export settings** > type in the master password set above > **OK**. 如果手机上尚不存在preferences文件夹，这将创建该文件夹。

8. 从云平台下载您的**偏好设置**文件备份。

9. Use your file explorer (commonly called “Files” or “My Files”) to move the file from your downloads to `/internal storage/AAPS/preferences` if your **AAPS Directory** has been set `/internal storage/AAPS`

10. From the **AAPS** main screen, open the **menu** (☰) > **Maintenance** and tap **Import settings**. Select the preferences file you want to restore from (the newest is at the top). Make sure you select the correct preferences file, all .json files from the preferences folder (or from the cloud directory, with **Cloud**) will be shown.

    ![List of settings files to import](../images/Maintenance/import_settings_files.png)

    **AAPS** shows the details of the file. Type the master password set above and tap **Decrypt & Review**.

11. Once the file is decrypted, decide what to do with the pump settings. On a new phone that takes over the same pump, tick **Also replace pump settings** so the pairing and the pump settings come from the file. Leave the box unticked to keep the pump this phone is already paired with. Then tap **Import**.

    ![Decrypted settings file with the Also replace pump settings box and the Import button](../images/Maintenance/import_settings_review.png)

12. **AAPS** asks **Apply imported settings?** and tells you how many settings will change and, if you left the box unticked, how many pump settings are kept. Nothing has been written yet, so **Cancel** leaves your phone exactly as it was. Tap **OK** to apply.

    ![Apply imported settings? dialog](../images/Maintenance/import_settings_apply.png)

13. **AAPS** applies the imported settings straight away, without restarting. Only the plugins whose settings changed are restarted. While this runs, **AAPS** shows **Applying settings…**; if the pump is busy, it shows **Waiting for pump…** and applies the settings once the pump is idle. If the pump is still busy after one minute, **AAPS** offers to try again. A **Settings applied** message confirms that the imported settings are in use. Any treatment you had queued while the import ran is dropped and **AAPS** tells you that it was cancelled, so nothing is sent to the pump twice.

    ![Settings applied message](../images/Maintenance/import_settings_applied.png)

If the file selected a pump that this version of **AAPS** does not have, **AAPS** falls back to the **Virtual Pump** and tells you so. Select your pump again in **Configuration** and check its settings.

14. Tubeless pumps (Omnipod and Medtrum) users only - if you ticked **Also replace pump settings** and your **Preferences** were not backed up from the same pod you are currently using, you will need to start a new pod to begin insulin delivery.

**Troubleshooting:** if you are unable to get an active profile set from the **AAPS** main screen, open the **menu** (☰) in the top left > **Configuration** > **Pump** > switch to **Virtual Pump** > then switch back to your pump type

### Dana RS用户注意事项

- If you ticked **Also replace pump settings**, the pump connection settings are imported too: **AAPS** on your new phone will already "know" the pump and therefore not start a Bluetooth scan.
- 请手动配对新手机和泵。