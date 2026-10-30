# 建立和恢復備份

當你在手機上安裝 AAPS 時，它將成為你每日依賴的「醫療設備」。強烈建議針對手機故障、被盜或遺失時有一個緊急備份計畫。因此，事先準備是必要的，問自己：「如果...怎麼辦？」

要將你的 AAPS 設定恢復到現有或新手機，重要的是將以下項目保存在安全的地方（也就是說：不能放在你的手機上）。最佳做法是保留至少兩份獨立備份：一份在本機硬碟、USB 隨身碟，並且（建議）再放一份在雲端儲存空間，例如 Google Drive 或 Microsoft 365 OneDrive。將備份存放在雲端後，你就能隨時隨地從手機讀取所有所需資訊，以便在任何地點、任何時間還原你的設定。

考慮獲得一部備用手機並練習恢復 AAPS，以確保備用手機正常運作。此步驟能讓你更有信心你的緊急應變計畫有效，並且在主要手機無法使用時，仍能繼續使用 AAPS。

為了能夠恢復，準備以下項目是很重要的：

- 你的 **Android Studio 憑證檔案** 和相關的 **密碼**：用於（重新）建立 AAPS .APK 安裝檔。
- 最近的 **AAPS 安裝檔 .APK** 副本
- 最近的 **設定匯出** 檔案：用於恢復重要的設定（包括你的目標！）。
- 你的 **AAPS 主密碼**
- Backups of additional utilities: Such as BYODA and/or xDrip.
- 針對你設定的個人筆記。

以下是建議的備份項目。

## 建立備份

### 從構置 APK 時使用的電腦匯出的金鑰存儲檔案
當你從 Android Studio 構建 .APK 安裝檔時，會使用 **憑證檔案和密碼來簽署 .APK 安裝檔**。若要更新當前的 AAPS 安裝，必須用與首次安裝相同的憑證簽署更新的 .APK 安裝檔。在更新時，所有的設定和 AAPS 資料庫都將被保留。 Note that without this, you are required to first uninstall the current application and then [reinstall](#reinstall-aaps) and reconfigure AAPS.

維持憑證和相關密碼將大大減少未來更新 APK 的複雜性，特別是如果你需要從新電腦構建應用時。請參閱 [更新 AAPS](../Maintenance/UpdateToNewVersion.md) 部分，了解在構置新 APK 時如何使用金鑰存儲檔案的詳細資訊。

**何時備份：** 憑證應在你首次構建 **AAPS** .APK 安裝檔後進行備份。

**如何備份：** 找到你的憑證路徑。如果你不記得，可以在 Android Studio 中選擇 **建置 > APK > 下一步** 找到它。路徑將列在「金鑰庫路徑」中。使用你的檔案總管，導航至此路徑並複製你的金鑰庫檔案（以`.jks`為檔案副檔名結尾）。將他儲存到一個安全的雲端位置，以防你的電腦無法使用。確保也紀錄下你的金鑰庫密碼、金鑰別名和金鑰密碼。

### 最新的 APK 副本
若你的主要 **AAPS** 手機遺失或損壞，擁有一個 APK 副本將允許你迅速在新手機上恢復使用 **AAPS**。注意：你還需要如下所述的備份你的偏好設定。

**何時備份：** 你應保持最近安裝在主 **AAPS** 手機上的 APK 的備份。你可能還想保留一個舊版本，以防出於任何原因需要退回到該版本。

**如何備份：** 在用 Android Studio 構建 APK 的電腦上保持一份副本。此外，建議使用雲端平台儲存安裝檔 APK 的副本。確保你知道如何在需要時找到這兩個備份。考慮設置專用資料夾來存放這些備份。

### AAPS 設定檔案（也稱為「偏好設定」）

```{admonition} Where are preferences stored on my phone?
:class: tip
You will find your settings in the **AAPS Directory** you have selected during [AAPS setup](#SetupWizard-StoragePermission).</br>
You can also change the **AAPS directory** on the **Maintenance** screen (**menu** (☰) > **Maintenance**), see [Setting the local AAPS directory](#preferences-maintenance-logdirectory).
```

擁有 APK 安裝檔的副本（見上文）和你的 **設定** 檔後，你可以迅速在現有或新手機上啟動。

**Settings** 檔案用於自訂 AAPS 應用程式，以符合你的特定設定。 They encompass details such as your **Configuration** settings, objective status, third-party communication settings (e.g., Nightscout, Tidepool), automations, and profiles.

將 AAPS 設定匯出為檔案使你能夠將其配置恢復到特定的時間點。如前所述，除了所有組態設定外，匯出檔也包含你的目標狀態，當 **(re)installing** AAPS 時需要一併還原。否則你將必須從頭完成所有目標，才能啟用封閉循環。設定檔也能讓你還原「最後已知可用」的設定，以撤銷任何組態變更。

**何時備份 AAPS 設定：**
* 每次完成一個目標時，為了避免進度遺失。_若沒有 **Settings** 的備份，一旦你需要重新安裝 AAPS 或更換手機，你將必須再次完成所有目標。_

* 每當你計畫對你的設定進行重大更改（更改 SMB 設定、更改胰島素類型、更改幫浦、對自動化進行更改）時，應在進行更改之前和之後備份你的**設定**。這樣你就可以保留最新的設定副本以及變更前的設定副本，萬一需要回滾時可以使用。

* 無幫浦用戶（如 Omnipod 和 Medtrum）僅適用：**設定**檔案包含你當前 pod 的連線細節，可用於使用新手機恢復與該 pod 的連線。如果你在開始使用目前幫浦後未匯出偏好設定的副本，當需要更換手機時，將需要重新啟動一個新的幫浦。

**如何手動備份：**

1. If this your first time importing or exporting **Settings** you will need to set a master password in [Settings > Protection](#Preferences-master-password). 設置密碼並將其紀錄在安全的地方。_若沒有此密碼，你將無法訪問你的**設定**備份。_

2. From the **AAPS** main screen, open the **menu** (☰) > **Maintenance**. Choose where to save the file with the **Local** and **Cloud** chips next to **Export settings** (see **Exporting or Importing Settings** below), then tap **Export settings**. **AAPS** shows where the file will go: the file name for **Local**, **Google Drive** for **Cloud**. Tap **OK**.

   ![Export settings to a local file](../images/Maintenance/export_settings_confirm_local.png)

   ![Export settings to Google Drive](../images/Maintenance/export_settings_confirm_cloud.png)

   Type the master password set above and tap **OK**.

   ![Master password for the export](../images/Maintenance/export_settings_password.png)

   **Settings exported** (local) or **Cloud export successful** (cloud) confirms the export.

   ![Settings exported message](../images/Maintenance/export_settings_done_local.png)

   ![Cloud export successful message](../images/Maintenance/export_settings_done_cloud.png)

3. 使用你的手機檔案總管（通常稱為「檔案」或「我的檔案」），導航至內部儲存 > AAPS > 偏好設定。在這裡你可以看到所有匯出的偏好設定檔案副本。檔案名稱應為`YYYY-MM-DD_Time_appname.json`。將此檔案上傳到你選擇的雲端平台。然後從雲端平台下載一份副本到你的本地電腦。

(匯出匯入設定-設定-匯出)=

## 設定匯出

```{admonition} Where are preferences stored on my phone?
:class: tip
You will find your settings in the **AAPS Directory** you have selected during [AAPS setup](#SetupWizard-StoragePermission).</br>
You can also change the **AAPS directory** on the **Maintenance** screen (**menu** (☰) > **Maintenance**), see [Setting the local AAPS directory](#preferences-maintenance-logdirectory).
```

建議定期執行設定匯出，特別是在進行設定更改之前和之後。你可以選擇**手動或（建議）透過自動化**來進行匯出。務必記下你的 AAPS 主密碼，並將設定檔從手機複製到例如雲端儲存空間等位置進行備份。

**注意**：_匯出的設定將使用你的 AAPS 主密碼進行加密：若沒有用於匯出的主密碼， 你將無法匯入設定檔！_

### 匯出或匯入設定
To export or import settings, open the **menu** (☰) and select **Maintenance**. Under **File management**, the **Local** and **Cloud** chips next to **Export settings** and **Import settings** choose where the settings file is saved to or read from: **Local** is the AAPS directory on your phone, **Cloud** is available once a [Cloud Directory](#preferences-maintenance-cloud) is set up. Tapping a chip turns it on or off; at least one always stays selected, and both rows share the same choice. Then tap **Export settings** or **Import settings** itself to start.

![Maintenance menu with the Export settings and Import settings rows](../images/Maintenance/maintenance_export_import.png)

(ExportImportSettings-Automating-Settings-Export)=
### 自動設定匯出

For doing automating settings exports [(**see Automation**)](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export) open [**Settings** > **Maintenance**](#preferences-maintenance-settings), expand **Unattended Settings Export** and switch on **Enable automated settings export**.

你現在可以將[自動化](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export)配置為定期匯出設定（_例如_每週），或在pod變更後進行匯出。

_**注意：**在匯入設定時，用戶始終需要輸入 AAPS 密碼！_

![Settings > Maintenance > Unattended Settings Export with the Enable automated settings export switch](../images/Maintenance/settings_unattended_export.png)

(ExportImportSettings-restoring-from-your-backups-on-a-new-phone-or-fresh-installation-of-aaps)=
## 從備份中恢復至新手機或重新安裝 AAPS

```{admonition} Where are preferences stored on my phone?
:class: tip
You will find your settings in the **AAPS Directory** you have selected during [AAPS setup](#SetupWizard-StoragePermission).</br>
You can also change the **AAPS directory** on the **Maintenance** screen (**menu** (☰) > **Maintenance**), see [Setting the local AAPS directory](#preferences-maintenance-logdirectory).</br>
If **AAPS** loses access to that directory (this can happen after a reinstall or after clearing the app's storage), it shows an **Access to the AAPS directory was lost** notification and stops saving settings to the phone until you [select the directory again](#preferences-maintenance-logdirectory).
```

Use these instructions if you have a back-up of your APK and **Settings** that you want to load on to a new phone or if you needed to delete and reinstall the APK on your existing phone for any reason.

_如果你在使用相同金鑰庫生成的APK更新**AAPS**，則無需遵循此過程。不過，仍建議在更新前建立備份。_

如果你在丟失或更換原始金鑰庫後更新**AAPS**（即：使用未轉移金鑰庫的新電腦），確保按照上文備份所有設定，然後在你的手機上卸載現有版本的**AAPS**。 See [Reinstalling AAPS with a new keystore](#reinstall-aaps) for the full procedure.

如有需要，[在下面步驟之前設置你的CGM/BG源接收器](../Getting-Started/CompatiblesCgms.md)

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

1. 使用上述 APK 的備份副本，按照[新安裝](../SettingUpAaps/TransferringAndInstallingAaps.md)的說明進行操作

2. 啟動**AAPS**並允許任何要求的權限

3. 退出安裝嚮導。 We will be importing all the necessary settings from the back-up copy of **Settings**

4. From the **AAPS** main screen select Request and allow on all permissions listed in red on the top

5. From the **AAPS** main screen, set the master password in [Settings > Protection](#Preferences-master-password) to the same password as you used with your back-ups.

6. If you haven't done it yet, [set the **AAPS directory**](#preferences-maintenance-logdirectory): from the **AAPS** main screen, open the **menu** (☰) > **Maintenance** > **AAPS directory**.

7. From the **AAPS** main screen, open the **menu** (☰) > **Maintenance** > **Export settings** > type in the master password set above > **OK**. 這將在手機上建立偏好設定資料夾（如果尚未存在）。

8. 從你的雲端平台下載**偏好設定**檔案的備份。

9. 使用你的檔案管理器（常見為「Files」或「My Files」），如果你的 **AAPS Directory** 設為 `/internal storage/AAPS`，請將檔案從下載資料夾移動到 `/internal storage/AAPS/preferences`

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

### Dana RS 使用者注意事項

- If you ticked **Also replace pump settings**, the pump connection settings are imported too: **AAPS** on your new phone will already "know" the pump and therefore not start a Bluetooth scan.
- 請手動配對新手機與幫浦。