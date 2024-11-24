# 建立和恢復備份

保持下列項目的備份非常重要。 最佳做法是將備份儲存在本地硬碟以及雲端位置（例如 Google Drive、box 等）。 以下是建議保留備份的項目。

## 建立備份

### Keystore file from the computer you used to build the APK
金鑰庫允許你在現有應用程式上安裝更新的 APK。 保留金鑰庫將大大降低未來更新 APK 的複雜性，特別是在你需要從新電腦建置應用程式的情況下。 See the [Updating AAPS](../Maintenance/UpdateToNewVersion.md) section for details on using the keystore when building a new APK.

**When to back-up:** the keystore should be backed up after you first build the **AAPS** apk.

**如何進行備份：**找到你的金鑰庫路徑。 If you don’t remember it you can find it in Android Studio by selecting **Build > APK > Next**. 路徑將列在「金鑰庫路徑」中。 Using your file explorer, navigate to this path and make a copy of your keystore file (ending in file extension `.jks`). 將他儲存到一個安全的雲端位置，以防你的電腦無法使用。 確保也紀錄下你的金鑰庫密碼、金鑰別名和金鑰密碼。

### Copies of the most recent APK
If your main **AAPS** phone is lost or damaged, having a copy of the APK available will allow you to quickly resume using **AAPS** with a new phone (note: you also need your preferences backed up as noted below).

**When to back-up:** you should maintain a back-up of the most recent APK that you installed on your main **AAPS** phone. You may want to also maintain one earlier version in case you need to roll back to that for any reason.

**如何進行備份：**Android Studio 用來建置 APK 的電腦將保留一個副本。 此外，如果你使用雲端平台將 APK 複製到手機，該平台也會在雲端保留副本。 確保你知道如何在需要時找到這兩個位置。 考慮在電腦和雲端平台上設置專用資料夾來儲存這些備份。

### AAPS preferences
**Preferences** are what tailors the stock **AAPS** application to how you have it setup. **Preferences** include details on your config builder settings, status of objectives, third-party communication settings (Nightscout, Tidepool...), automations and profiles. With a copy of the APK (see above) and **Preferences** you can be up and running on a new phone quickly.

**何時進行備份：**
* as **Preferences** store your progress towards completing the objectives, you should back up your **Preferences** each time you complete an objective so that you do not lose your progress. _Without a copy of your **Preferences** you will have to complete all objectives again in the event you need to replace your phone._
* any time you plan to make significant changes to your configuration (change SMB settings, change insulin types, change pump, make changes to automations) you should back up your **Preferences** before and after making the changes. This way you have your most recent settings as well as a copy of what they were before the changes in case you need to revert back to them.
* Tubeless pumps (Omnipod and Medtrum) users only : the **Preferences** file contains connection details on your current pod and can be used to restore connection to that pod with a new phone. If you do not have a copy of your preferences exported after you started your current pod you will need to start a new pod in the event you need to replace your current phone.

**How to back-up:**

1. If this your first time importing or exporting **Preferences** you will need to set a master password in [Preferences > General > Protection](#Preferences-master-password). 設置密碼並將其紀錄在安全的地方。 _You will be unable to access your **Preferences** back-ups without this password._

2. From the **AAPS** home screen, select the three line (hamburger) menu in the top left > Maintenance > Export settings > type in Master password set above > Ok

![AAPS 匯出設定 1](../images/Maintenance/AAPS_ExportSettings1.png) ![AAPS 匯出設定 2](../images/Maintenance/AAPS_ExportSettings2.png)

3. Using the file explorer on your phone (commonly called “Files” or “My Files”) navigate to Internal Storage > AAPS > preferences. 在這裡你可以看到所有匯出的偏好設定檔案副本。 The file name should be `YYYY-MM-DD_Time_appname.json`. 將此檔案上傳到你選擇的雲端平台。 然後從雲端平台下載一份副本到你的本地電腦。

(ExportImportSettings-restoring-from-your-backups-on-a-new-phone-or-fresh-installation-of-aaps)=
## 從備份中恢復至新手機或重新安裝 AAPS
Use these instructions if you have a back-up of your APK and **Preferences** that you want to load on to a new phone or if you needed to delete and reinstall the APK on your existing phone for any reason.

_If you are updating **AAPS** using an APK built with the same keystore you should not need to follow this process. 不過，仍建議在更新前建立備份。_

If you are updating **AAPS** after you lost or replaced your original keystore (i.e. using a new build computer without transferring the keystore), ensure that you back up all settings per the above and then uninstall the existing version of **AAPS** on your phone.

If needed, [set up your CGM/BG source receiver](../Getting-Started/CompatiblesCgms.md) prior to the steps listed below

```{admonition} Tubeless pumps (Omnipod and Medtrum) users
:class: warning
Importing a **Preferences** file will deactivate your current pod if those **Preferences** were exported during a different active pod session. 
```

1. Using the back-up copy of your APK from above, follow the instructions for a [new installation](../SettingUpAaps/TransferringAndInstallingAaps.md)

2. Launch **AAPS** and allow any requested permissions

3. Exit the Setup Wizard. We will be importing all the necessary settings from the back-up copy of **Preferences**

4. From the **AAPS** home screen select Request and allow on all permissions listed in red on the top

5. From the **AAPS** home screen, set the master password in [Preferences > General > Protection](#Preferences-master-password) to the same password as you used with your back-ups.

6. From the **AAPS** home screen, select the three line (hamburger) menu in the top left > Maintenance > Export settings > type in Master password set above > Ok. 這將在手機上建立偏好設定資料夾（如果尚未存在）。

7. Download the back-up of your **Preferences** file from your cloud platform.

8. Use your file explorer (commonly called “Files” or “My Files”) to move the file from your downloads to `/internal storage/AAPS/preferences`

9. From the **AAPS** home screen, select the three line (hamburger) menu in the top left > Maintenance > Import settings > select the preferences file you want to back-up from > Ok > type in Master password set above > Ok. 確保選擇正確的偏好設定檔案，所有來自偏好設定資料夾的 .json 檔案將顯示。

![AAPS 匯入設定 1](../images/Maintenance/AAPS_ImportSettings1.png) ![AAPS 匯入設定 2](../images/Maintenance/AAPS_ImportSettings2.png)

10. **AAPS** will automatically restart and should then have all of your preferences imported.

11. Tubeless pumps (Omnipod and Medtrum) users only - if your **Preferences** were not backed up from the same pod you are currently using, you will need to start a new pod to begin insulin delivery.

**Troubleshooting:** if you are unable to get an active profile set from the **AAPS** home screen, select the three line (hamburger) menu in the top left > config builder > Pump > switch to Virtual Pump > then switch back to your pump type

### Dana RS 使用者注意事項

- As pump connection settings are also imported **AAPS** on your new phone will already "know" the pump and therefore not start a bluetooth scan.
- 請手動配對新手機與幫浦。