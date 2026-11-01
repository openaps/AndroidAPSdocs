# 建立和恢復備份

當你在手機上安裝 AAPS 時，它將成為你每日依賴的「醫療設備」。強烈建議針對手機故障、被盜或遺失時有一個緊急備份計畫。因此，事先做好準備非常重要，請先問問自己：「如果發生了某種狀況，該怎麼辦？」

要將你的 AAPS 設定恢復到現有或新手機，重要的是將以下項目保存在安全的地方（也就是說：不能放在你的手機上）。最佳做法是保留至少兩份獨立備份：一份在本機硬碟、USB 隨身碟，並且（建議）再放一份在雲端儲存空間，例如 Google Drive 或 Microsoft 365 OneDrive。將備份存放在雲端後，你就能隨時隨地從手機讀取所有所需資訊，以便在任何地點、任何時間還原你的設定。

考慮獲得一部備用手機並練習恢復 AAPS，以確保備用手機正常運作。此步驟能讓你更有信心你的緊急應變計畫有效，並且在主要手機無法使用時，仍能繼續使用 AAPS。

```{admonition} Android backups and phone-transfer tools do not carry your AAPS settings
:class: warning
Since **AAPS** 4.0 the settings are kept in an encrypted store on the phone, and they are left out of the Google backup and of the phone-to-phone transfer of a new phone. A settings export, as described on this page, is the only way to carry them over.
```

為了能夠恢復，準備以下項目是很重要的：

- 你的 **Android Studio 憑證檔案** 和相關的 **密碼**：用於（重新）建立 AAPS .APK 安裝檔。
- 最近的 **AAPS 安裝檔 .APK** 副本
- 最近的 **設定匯出** 檔案：用於恢復重要的設定（包括你的目標！）。
- 你的 **AAPS 主密碼**
- 其他工具的備份：例如 BYODA 和／或 xDrip。
- 針對你設定的個人筆記。

以下是建議的備份項目。

## 建立備份

### 從構置 APK 時使用的電腦匯出的金鑰存儲檔案
當你從 Android Studio 構建 .APK 安裝檔時，會使用 **憑證檔案和密碼來簽署 .APK 安裝檔**。若要更新當前的 AAPS 安裝，必須用與首次安裝相同的憑證簽署更新的 .APK 安裝檔。在更新時，所有的設定和 AAPS 資料庫都將被保留。請注意，若沒有這項備份，您必須先解除安裝目前的應用程式，再[重新安裝](#reinstall-aaps)並重新設定 AAPS。

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
您可以在設定 [AAPS](#SetupWizard-StoragePermission) 時選擇的 **AAPS 資料夾**中找到設定。</br>
您也可以在<strong x-id="1">維護</strong>畫面（<strong x-id="1">選單</strong>（☰） > <strong x-id="1">維護</strong>）變更 **AAPS 資料夾**，請參閱[設定本機 AAPS 資料夾](#preferences-maintenance-logdirectory)。
```

擁有 APK 安裝檔的副本（見上文）和你的 **設定** 檔後，你可以迅速在現有或新手機上啟動。

**Settings** 檔案用於自訂 AAPS 應用程式，以符合你的特定設定。其中包含**組態**設定、目標狀態、第三方通訊設定（例如 Nightscout、Tidepool）、自動化項目和設定檔等資訊。

將 AAPS 設定匯出為檔案使你能夠將其配置恢復到特定的時間點。如前所述，除了所有組態設定外，匯出檔也包含你的目標狀態，當 **(re)installing** AAPS 時需要一併還原。否則你將必須從頭完成所有目標，才能啟用封閉循環。設定檔也能讓你還原「最後已知可用」的設定，以撤銷任何組態變更。

**何時備份 AAPS 設定：**
* 每次完成一個目標時，為了避免進度遺失。_若沒有 **Settings** 的備份，一旦你需要重新安裝 AAPS 或更換手機，你將必須再次完成所有目標。_

* 每當你計畫對你的設定進行重大更改（更改 SMB 設定、更改胰島素類型、更改幫浦、對自動化進行更改）時，應在進行更改之前和之後備份你的**設定**。這樣你就可以保留最新的設定副本以及變更前的設定副本，萬一需要回滾時可以使用。

* Tubeless pumps (Such as Omnipod and Medtrum) users only: the **Settings** file contains connection details on your current pod and can be used to restore connection to that pod with a new phone. 如果你在開始使用目前幫浦後未匯出偏好設定的副本，當需要更換手機時，將需要重新啟動一個新的幫浦。

**如何手動備份：**

1. If this is your first time importing or exporting **Settings** you will need to set a master password in [Settings > Protection](#Preferences-master-password). 設置密碼並將其紀錄在安全的地方。_若沒有此密碼，你將無法訪問你的**設定**備份。_

2. 在 **AAPS** 主畫面開啟**選單**（☰） > **維護**。在**匯出設定**旁點選**本機**和**雲端**選項，以選擇檔案的儲存位置（請參閱下方的**匯出或匯入設定**），然後點選**匯出設定**。 **AAPS** 會顯示檔案的儲存位置：選擇**本機**時會顯示檔名；選擇**雲端**時則會顯示 **Google 雲端硬碟**。點選**確定**。

   ![將設定匯出至本機檔案](../images/Maintenance/export_settings_confirm_local.png)

   ![將設定匯出至 Google 雲端硬碟](../images/Maintenance/export_settings_confirm_cloud.png)

   輸入上方設定的主密碼，然後點選**確定**。

   ![匯出用主密碼](../images/Maintenance/export_settings_password.png)

   出現**設定已匯出**（本機）或**雲端匯出成功**（雲端）的訊息，即表示匯出完成。

   ![「設定已匯出」訊息](../images/Maintenance/export_settings_done_local.png)

   ![「雲端匯出成功」訊息](../images/Maintenance/export_settings_done_cloud.png)

3. 使用你的手機檔案總管（通常稱為「檔案」或「我的檔案」），導航至內部儲存 > AAPS > 偏好設定。在這裡你可以看到所有匯出的偏好設定檔案副本。檔案名稱應為`YYYY-MM-DD_Time_appname.json`。將此檔案上傳到你選擇的雲端平台。然後從雲端平台下載一份副本到你的本地電腦。

(匯出匯入設定-設定-匯出)=

## 設定匯出

```{admonition} Where are preferences stored on my phone?
:class: tip
您可以在設定 [AAPS](#SetupWizard-StoragePermission) 時選擇的 **AAPS 資料夾**中找到設定。</br>
您也可以在<strong x-id="1">維護</strong>畫面（<strong x-id="1">選單</strong>（☰） > <strong x-id="1">維護</strong>）變更 **AAPS 資料夾**，請參閱[設定本機 AAPS 資料夾](#preferences-maintenance-logdirectory)。
```

建議定期執行設定匯出，特別是在進行設定更改之前和之後。你可以選擇**手動或（建議）透過自動化**來進行匯出。務必記下你的 AAPS 主密碼，並將設定檔從手機複製到例如雲端儲存空間等位置進行備份。

**注意**：_匯出的設定將使用你的 AAPS 主密碼進行加密：若沒有用於匯出的主密碼， 你將無法匯入設定檔！_

### 匯出或匯入設定
若要匯出或匯入設定，請開啟**選單**（☰），然後選擇**維護**。在**檔案管理**中，**匯出設定**和**匯入設定**旁的**本機**與**雲端**選項，可讓您選擇設定檔的儲存位置或讀取來源：**本機**是手機上的 AAPS 資料夾；設定好[雲端資料夾](#preferences-maintenance-cloud)後，即可使用**雲端**。點選選項即可開啟或關閉；至少會保留一個選項為選取狀態，而且兩列會共用相同的選擇。接著點選**匯出設定**或**匯入設定**按鈕即可開始。

![維護選單中的「匯出設定」和「匯入設定」列](../images/Maintenance/maintenance_export_import.png)

(ExportImportSettings-Automating-Settings-Export)=
### 自動設定匯出

To automate settings exports [(**see Automation**)](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export) open [**Settings** > **Maintenance**](#preferences-maintenance-settings), expand **Unattended Settings Export** and switch on **Enable automated settings export**.

你現在可以將[自動化](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export)配置為定期匯出設定（_例如_每週），或在pod變更後進行匯出。

_**注意：**匯入設定時，使用者一律需要輸入 AAPS 主密碼！_

![「設定 &gt; 維護 &gt; 無人值守設定匯出」畫面中的「啟用自動匯出設定」開關](../images/Maintenance/settings_unattended_export.png)

(ExportImportSettings-restoring-from-your-backups-on-a-new-phone-or-fresh-installation-of-aaps)=
## 從備份中恢復至新手機或重新安裝 AAPS

```{admonition} Where are preferences stored on my phone?
:class: tip
您可以在設定 [AAPS](#SetupWizard-StoragePermission) 時選擇的 **AAPS 資料夾**中找到設定。</br>
您也可以在<strong x-id="1">維護</strong>畫面（<strong x-id="1">選單</strong>（☰） > <strong x-id="1">維護</strong>）變更 **AAPS 資料夾**，請參閱[設定本機 AAPS 資料夾](#preferences-maintenance-logdirectory)。</br>
如果 **AAPS** 無法再存取該資料夾（可能發生在重新安裝應用程式或清除應用程式儲存空間後），畫面會顯示「已失去 AAPS 資料夾的存取權」通知，並停止將設定儲存至手機，直到您[重新選取資料夾](#preferences-maintenance-logdirectory)。
```

如果您有 APK 和**設定**的備份，並想將其載入新手機，或因任何原因需要在現有手機上刪除並重新安裝 APK，請依照以下說明操作。

_如果你在使用相同金鑰庫生成的APK更新**AAPS**，則無需遵循此過程。不過，仍建議在更新前建立備份。_

如果你在丟失或更換原始金鑰庫後更新**AAPS**（即：使用未轉移金鑰庫的新電腦），確保按照上文備份所有設定，然後在你的手機上卸載現有版本的**AAPS**。完整操作流程請參閱[使用新的金鑰庫重新安裝 AAPS](#reinstall-aaps)。

如有需要，[在下面步驟之前設置你的CGM/BG源接收器](../Getting-Started/CompatiblesCgms.md)

(ExportImportSettings-tubeless-pumps)=
```{admonition} Tubeless pumps (Omnipod and Medtrum) users
:class: warning
**偏好設定**檔案包含您匯出時正在使用的 Pod 或貼片工作階段。
- **每次啟動 Pod 或貼片後，請立即匯出**，並將檔案複製到手機以外的位置。
- **使用同一支手機，Pod 仍在運作：**不要勾選**同時取代幫浦設定**。這樣會保留目前的 Pod，只匯入其他設定。
- **在新手機上接手目前使用的 Pod：**勾選**同時取代幫浦設定**，而且只能使用您目前佩戴的 Pod 使用期間所匯出的檔案。如果使用較早之前的 Pod 所匯出的檔案，會取代目前的 Pod 工作階段，您必須啟動新的 Pod。
- **誤匯入舊的 Pod 工作階段：****AAPS** 會持續嘗試連線到該 Pod，導致您無法啟動新的 Pod。請先停用該 Pod；如果無法停用，請將其棄置（例如，Omnipod DASH 的相關說明請參閱[棄置 Pod](#omnipod-dash-discard-pod)）。
```

```{admonition} Pump settings are kept unless you say otherwise
:class: note
匯入時，預設不會變更幫浦設定：此手機在**組態設定**中選取的幫浦、配對資訊及其他設定都會維持原樣。只有在新手機要接手使用同一個幫浦時，才在匯入畫面勾選**同時取代幫浦設定**。匯入時，檔案中沒有的設定絕不會遭到刪除。
```

1. 使用上述 APK 的備份副本，按照[新安裝](../SettingUpAaps/TransferringAndInstallingAaps.md)的說明進行操作

2. 啟動**AAPS**並允許任何要求的權限

3. 退出安裝嚮導。我們將從**設定**備份檔案匯入所有必要的設定

4. 在**AAPS**主畫面點選**授予**，並允許頂端**所需權限**面板列出的所有權限

5. 在**AAPS**主畫面中，前往[設定 > 保護](#Preferences-master-password)，將主密碼設為與備份使用的密碼相同。

6. 如果尚未設定，請[設定**AAPS 目錄**](#preferences-maintenance-logdirectory)：在**AAPS**主畫面開啟**選單**（☰）> **維護** > **AAPS 目錄**。

7. 在**AAPS**主畫面開啟**選單**（☰）> **維護** > **匯出設定** > 輸入上方設定的主密碼 > **確定**。這將在手機上建立偏好設定資料夾（如果尚未存在）。

8. 從你的雲端平台下載**偏好設定**檔案的備份。

9. 使用你的檔案管理器（常見為「Files」或「My Files」），如果你的 **AAPS Directory** 設為 `/internal storage/AAPS`，請將檔案從下載資料夾移動到 `/internal storage/AAPS/preferences`

10. 在**AAPS**主畫面開啟**選單**（☰）> **維護**，然後點選**匯入設定**。選取要還原的偏好設定檔案（最新的檔案會顯示在最上方）。請確認選取正確的偏好設定檔案。偏好設定資料夾（或使用**雲端**時的雲端目錄）中的所有 .json 檔案都會顯示。

    ![要匯入的設定檔案清單](../images/Maintenance/import_settings_files.png)

    **AAPS**會顯示檔案詳細資訊。輸入上方設定的主密碼，然後點選**解密並檢視**。

11. 檔案解密後，請決定如何處理幫浦設定。如果要在新手機上接手使用同一個幫浦，請勾選**同時取代幫浦設定**，讓配對資訊和幫浦設定都從檔案中匯入。如果要保留此手機目前已配對的幫浦，請勿勾選此選項。接著點選**匯入**。

    ![已解密的設定檔案，其中顯示「同時取代幫浦設定」核取方塊和「匯入」按鈕](../images/Maintenance/import_settings_review.png)

12. **AAPS**會詢問**要套用匯入的設定嗎？**，並告知將變更多少項設定；如果您未勾選該選項，也會告知會保留多少項幫浦設定。目前尚未寫入任何設定，因此點選**取消**，手機就會維持原狀。點選**確定**以套用設定。

    ![Apply imported settings dialog](../images/Maintenance/import_settings_apply.png)

13. **AAPS**會立即套用匯入的設定，不需要重新啟動。只有設定已變更的外掛會重新啟動。執行期間，**AAPS**會顯示**正在套用設定…**；如果幫浦正在忙碌，則會顯示**正在等待幫浦…**，並在幫浦閒置後套用設定。如果幫浦忙碌超過一分鐘，**AAPS**會詢問您是否要重試。出現**設定已套用**訊息，即表示匯入的設定已開始使用。匯入期間排入佇列的任何治療項目都會被取消。**AAPS**會通知您該項目已取消，因此不會重複傳送到幫浦。

    ![「設定已套用」訊息](../images/Maintenance/import_settings_applied.png)

如果檔案中選取的幫浦不受此版本的**AAPS**支援，**AAPS**會改用**虛擬幫浦**，並通知您此變更。請在**組態設定**中重新選取您的幫浦，並檢查其設定。

14. 僅適用於無管幫浦（Omnipod 和 Medtrum）使用者：如果您勾選了**同時取代幫浦設定**，而**偏好設定**並非從您目前使用的同一個 Pod 備份而來，您必須啟動新的 Pod 才能開始輸注胰島素。

**疑難排解：**如果您無法在**AAPS**主畫面設定啟用中的設定檔，請開啟左上角的**選單**（☰）> **組態設定** > **幫浦** > 切換至**虛擬幫浦** > 再切換回您的幫浦類型

### Dana RS 使用者注意事項

- 如果您勾選了**同時取代幫浦設定**，也會一併匯入幫浦連線設定：新手機上的**AAPS**會「認得」該幫浦，因此不會開始掃描藍牙裝置。
- 請手動配對新手機與幫浦。