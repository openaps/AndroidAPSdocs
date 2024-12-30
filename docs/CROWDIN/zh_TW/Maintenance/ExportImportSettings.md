# 建立和恢復備份

When installing AAPS on your phone it becomes a "medical device" you rely on daily. It is highly recommended to have an emergency backup plan for when your phone gets defective, stolen or lost. Therefore, it is essential to prepare by asking yourself, "What if?

To restore your AAPS setup to an existing or new phone, it's important to keep following items in a secure location (read: not on your phone). Best practice is to keep at least two separate backups: on a local hard drive, USB stick and (preferred) on Cloud storage like Google Drive or Microsoft 365 OneDrive. By storing your backups in the cloud you'll always have everything needed accessible from your phone to restore your setup anywhere and anytime.

Consider acquiring a secondary backup phone and practicing restoring AAPS to ensure the backup phone works as expected. This step will give you confidence that your emergency plan is effective and that you can seamlessly continue using AAPS if your primary phone becomes unavailable.

To be able to restore, having the following items at hand is important:

- Your **Android Studio keystore file** and associated **password**: Needed for (re)building the AAPS .APK installer file.
- A recent copy of the **AAPS installer .APK**
- A recent **settings export** file: For restoring important settings (which includes your objectives!).
- Your **AAPS master password**
- Backups of additional utilities: Such as BYODA and/or xDrip+.
- Personal notes on your setup.

Below are the items that are recommended for keeping back-ups.

## 建立備份

### 從構置 APK 時使用的電腦匯出的金鑰存儲檔案
When building your .APK installer file from Android Studio, it uses the **keystore file and password to sign the .APK installer file**. To update your current AAPS installation, it is required to sign the update .APK installer file with the same keystore used for the initial installation. When updating, all settings and the AAPS database will be kept. Note that without this, you are required to first uninstall the current application and then reinstall and reconfigure AAPS.

Maintaining the keystore and associated password will greatly reduce the complexity of updating the APK in the future, especially if you need to build the app from a new computer. 請參閱 [更新 AAPS](../Maintenance/UpdateToNewVersion.md) 部分，了解在構置新 APK 時如何使用金鑰存儲檔案的詳細資訊。

**When to back-up:** The keystore should be backed up after you first build the **AAPS** .APK installer file.

**How to back-up:** Locate your keystore path. 如果您不記得，可以在 Android Studio 中選擇 **建置 > APK > 下一步** 找到它。 路徑將列在「金鑰庫路徑」中。 使用您的檔案總管，導航至此路徑並複製您的金鑰庫檔案（以`.jks`為檔案副檔名結尾）。 將他儲存到一個安全的雲端位置，以防你的電腦無法使用。 確保也紀錄下你的金鑰庫密碼、金鑰別名和金鑰密碼。

### 最新的 APK 副本
In case your main **AAPS** phone is lost or damaged, having a copy of the APK available will allow you to quickly resume using **AAPS** with a new phone. Note: you will also need your preferences backed up as noted below.

**When to back-up:** You should maintain a back-up of the most recent APK that you installed on your main **AAPS** phone. 您可能還想保留一個舊版本，以防出於任何原因需要退回到該版本。

**How to back-up:** Maintain a copy on the computer used to build the APK with Android Studio. Additionally, it is recommended to use a cloud platform to store a copy of the installer APK. Make sure you know how to locate both backups when needed. Consider setting up dedicated folders to store these backups.

### AAPS settings file (also referred to as 'Preferences')
With a copy of the APK installer file (see above) and your **Settings** file, you can quickly get up and running on an existing or new phone.

The **Settings** file is used t customize the AAPS application to fit your specific setup. They encompass details such as your config builder settings, objective status, third-party communication settings (e.g., Nightscout, Tidepool), automations, and profiles.

Exporting the AAPS settings to file enables you to restore its configuration to a specific point in time. As mentioned, in addition to all configuration settings, the export file also contains the status of your objectives, which you need to restore when **(re)installing** AAPS. Without this you will be required to redo all objectives from start to enable closed loop. Settings files also enable you to restore "last known good" settings for undoing any configuration changes.

**When to back-up AAPS settings:**
* Each time you complete an objective to prevent losing your progress. _Without a copy of your **Settings** you will have to complete all objectives again in the event you need to re-install AAPS or replace your phone._

* Any time you plan to make significant changes to your configuration (change SMB settings, change insulin types, change pump, make changes to automations) you should back up your **Settings** before and after making the changes. 這樣你就可以保留最新的設定副本以及變更前的設定副本，萬一需要回滾時可以使用。

* Tubeless pumps (Such as Omnipod and Medtrum) users only : the **Settings** file contains connection details on your current pod and can be used to restore connection to that pod with a new phone. 如果你在開始使用目前幫浦後未匯出偏好設定的副本，當需要更換手機時，將需要重新啟動一個新的幫浦。

**How to back-up manually:**

1. If this your first time importing or exporting **Settings** you will need to set a master password in [Preferences > General > Protection](#Preferences-master-password). 設置密碼並將其紀錄在安全的地方。 _You will be unable to access your **Settings** back-ups without this password._

2. 在**AAPS**主畫面，選擇左上角的三條線（漢堡）選單 > 維護 > 匯出設定 > 輸入上述設定的主密碼 > 確定

![AAPS 匯出設定 1](../images/Maintenance/AAPS_ExportSettings1.png) ![AAPS 匯出設定 2](../images/Maintenance/AAPS_ExportSettings2.png)

3. 使用您的手機檔案總管（通常稱為「檔案」或「我的檔案」），導航至內部儲存 > AAPS > 偏好設定。 在這裡你可以看到所有匯出的偏好設定檔案副本。 檔案名稱應為`YYYY-MM-DD_Time_appname.json`。 將此檔案上傳到你選擇的雲端平台。 然後從雲端平台下載一份副本到你的本地電腦。

## Settings Export

It is recommended to do regular settings exports, especially before and after making configuration changes. You can choose to do exports **manually or (preferred) through automation**. Make sure to take a note of your AAPS master password and to backup your settings files by copying them off your phone to for instance a cloud storage location.

**Note**: _The exported settings will be encrypted with your AAPS master password: without the master password used for exporting you will be unable to import the settings file!_

### Exporting or Importing Settings:
To export or import settings, use the **import or export buttons** in the AAPS **maintenance menu**

![Maintenance menu export/import buttons](../images/Maintenance/maintenance_menu_import_export_400px.png)

### Automating Settings Export:
For doing automating settings exports [(**see Automation**)](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export) enable the option "**Unattended Settings Exports**" in the maintenance menu preferences.

By enabling this feature you allow AAPS to execute settings exports without user intervention. For this the master password is securely stored on your phone (only) at the next manually export. The stored password will be used for up to 4 weeks. After 4 weeks you will be notified the password is about to expire. During a grace period of 1 week, the password can then be refreshed by manually exporting settings from the maintenance menu.

After the grace period of 1 week has passed the stored password expires and any automated settings export will abort while notifying the user, asking to reenter the password.  [(**Automated settings exports**)](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export)  will be logged to the AAPS 'Careportal' and 'User entry' lists under Treatments.

_**Note:** On importing settings to user always needs to enter the AAPS password!_

![Maintenance menu unattended Settings Export](../images/Maintenance/maintenance_menu_preferences_400px.png)

(ExportImportSettings-restoring-from-your-backups-on-a-new-phone-or-fresh-installation-of-aaps)=
## 從備份中恢復至新手機或重新安裝 AAPS
如果您擁有APK和**偏好設定**的備份，並想將其載入新手機，或因任何原因需要刪除並重新安裝現有手機上的APK，請使用這些指示。

_如果您在使用相同金鑰庫生成的APK更新**AAPS**，則無需遵循此過程。 不過，仍建議在更新前建立備份。_

如果您在丟失或更換原始金鑰庫後更新**AAPS**（即：使用未轉移金鑰庫的新電腦），確保按照上文備份所有設定，然後在您的手機上卸載現有版本的**AAPS**。

如有需要，[在下面步驟之前設置您的CGM/BG源接收器](../Getting-Started/CompatiblesCgms.md)

```{admonition} Tubeless pumps (Omnipod and Medtrum) users
:class: warning
匯入**偏好設定**檔案將在不同的活躍pod會話中使您的當前pod停用。 
```

1. 使用上述 APK 的備份副本，按照[新安裝](../SettingUpAaps/TransferringAndInstallingAaps.md)的說明進行操作

2. 啟動**AAPS**並允許任何要求的權限

3. 退出安裝嚮導。 我們將從備份的**偏好設定**中匯入所有必要的設定

4. 在**AAPS**主畫面，選擇要求並允許所有列在上方紅色的權限

5. 在**AAPS**主畫面，將主密碼在[偏好設定 > 一般 > 保護](#Preferences-master-password)中設置為與備份相同的密碼。

6. 在**AAPS**主畫面，選擇左上角的三條線（漢堡）選單 > 維護 > 匯入設定 > 選擇您要備份的偏好設定檔案 > 確定 > 輸入上述設定的主密碼 > 確定。 這將在手機上建立偏好設定資料夾（如果尚未存在）。

7. 從您的雲端平台下載**偏好設定**檔案的備份。

8. 使用您的檔案總管（通常稱為「檔案」或「我的檔案」）將檔案從下載移動到`/internal storage/AAPS/preferences`

9. 在**AAPS**主畫面，選擇左上角的三條線（漢堡）選單 > 維護 > 匯入設定 > 選擇您要備份的偏好設定檔案 > 確定 > 輸入上述設定的主密碼 > 確定。 確保選擇正確的偏好設定檔案，所有來自偏好設定資料夾的 .json 檔案將顯示。

![AAPS 匯入設定 1](../images/Maintenance/AAPS_ImportSettings1.png) ![AAPS 匯入設定 2](../images/Maintenance/AAPS_ImportSettings2.png)

10. **AAPS**將自動重新啟動，應該會導入您的所有偏好設定。

11. 無幫浦使用者（Omnipod和Medtrum）僅限 - 如果您的**偏好設定**不是從您目前使用的pod備份的，您需要啟動一個新的pod以開始胰島素傳遞。

**故障排除：**如果無法從**AAPS**主畫面取得活動個人設置，選擇左上角的三條線（漢堡）選單 > 組態建置工具 > 幫浦 > 切換到虛擬幫浦 > 然後切換回您的幫浦類型

### Dana RS 使用者注意事項

- 由於幫浦連接設定也會被導入，**AAPS**在您的新手機上將已經「知道」幫浦，因此不會開始藍牙掃描。
- 請手動配對新手機與幫浦。