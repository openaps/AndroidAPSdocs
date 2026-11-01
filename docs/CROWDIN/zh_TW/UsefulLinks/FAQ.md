# 循環使用者常見問題解答 (FAQ)

如何在常見問題中新增問題：請依照這些指示</a)操作</p> 

## 一般問題

### 我可以直接下載 AAPS 的安裝檔嗎？

不行。 AAPS 沒有可下載的 apk 檔案。你必須[自己建立](../SettingUpAaps/BuildingAaps.md)它。原因如下：

AAPS 用來控制你的幫浦並提供胰島素。根據歐洲現行法規，所有歸類為 IIa 或 IIb 類的系統都是需要法規批准的醫療設備（需要 CE 標誌），這需要各種研究和簽字確認。分發未經批准的設備是非法的。在世界其他地區也有類似的法規。

該法規不僅限於銷售（即獲得金錢），還適用於任何形式的分發（即使是免費的）。自行建置醫療設備是符合這些法規的唯一方式。

這就是為什麼 apk 檔案無法提供下載的原因。

(FAQ-how-to-begin)=

### 如何開始？

請先從[開始使用 AAPS 前的準備](../Getting-Started/PreparingForAaps.md)著手：此頁面會更詳細地說明以下所有內容。

首先，你需要**獲取可循環的硬體元件**：

* 一個[支援的胰島素幫浦](../Getting-Started/CompatiblePumps.md)， 
* 一部[Android 智慧型手機](../Getting-Started/Phones.md)（Apple iOS 未被 AAPS 支援 - 你可以查看[iOS Loop](https://loopkit.github.io/loopdocs/)）以及
* 一個[持續監測血糖系統](../Getting-Started/CompatiblesCgms.md)。 

接著，你需要**設置你的軟體組件**：[AAPS](../SettingUpAaps/BuildingAaps.md)、[CGM/FGM 資源](../Getting-Started/CompatiblesCgms.md)和[報告伺服器](../SettingUpAaps/SettingUpTheReportingServer.md)。

第三，你需要學習並**了解 OpenAPS 參考設計，以檢查你的治療因素**。閉環循環的基本原則是你的[基礎率和碳水化合物比例](../SettingUpAaps/YourAapsProfile.md)是正確的。所有建議都假設你的基礎需求已得到滿足，任何峰值或谷底的變化是由其他因素引起的，因此需要一些一次性的調整（如運動、壓力等）。閉環系統為安全所做的調整是有限的（請參閱[OpenAPS 參考設計](https://openaps.org/reference-design/)中的允許最大臨時基礎率），這意味著你不希望浪費這些劑量來修正錯誤的基礎率。例如，如果你經常在用餐前臨時降低基礎率，那麼很可能需要調整你的基礎率。你可以使用[自動調整](#autotune-how-autotune-calculates-adjustments)來考慮大量資料，以建議基礎率和/或 ISF 是否需要調整，以及碳水化合物比例是否需要改變。或者你可以以[傳統方式](https://integrateddiabetes.com/basal-testing/)測試並設置你的基礎率。

### 我有哪些實際的循環考量？

#### 密碼保護

如果您不希望設定輕易遭到更改，可以使用密碼、PIN 碼或手機的生物辨識驗證（指紋、臉部）來保護設定。開啟 **設定** > **保護** > **設定保護**，然後選擇保護方式。您也可以在同一處設定保護整個應用程式，或只保護注射功能。詳情請參閱[設定保護](#Preferences-settings-protection)。

#### Android Wear 智慧型手錶

如果您使用 AAPS 手錶應用程式進行注射或變更設定，每次操作都必須在手錶上確認：送出操作後，手錶會顯示摘要和 **確認**按鈕。請參閱[透過 Wear OS 手錶進行遠端控制](../RemoteFeatures/RemoteControlWearOS.md)。

(FAQ-disconnect-pump)=

#### 中斷幫浦連線

如果你因淋浴、沐浴、游泳、運動或其他活動而取下幫浦，你必須讓 AAPS 知道未輸送胰島素，以保持 IOB 的正確性。

您可以在 AAPS 主畫面按下[循環圖示](#AapsScreens-loop-status)來中斷幫浦連線，並選擇 **中斷幫浦連線**以及所需的持續時間。如果活動時間比預期長，再按一次圖示並選擇新的持續時間即可，不必先重新連線。如需了解如何避免長時間中斷連線期間胰島素不足，請參閱[淋浴或活動時中斷幫浦連線](#pumps-cannulas-disconnecting)。

#### 建議不是僅基於單一 CGM 讀取值

為了安全起見，建議是基於平均變化，而非單一 CGM 讀取值。因此，如果你錯過了一些讀取值，可能需要一段時間在恢復資料後，AAPS 才會重新啟動循環。

#### 進一步的讀取值

有幾篇部落格提供了實用建議，能幫助您了解實際使用循環功能時需要注意的事項。其中一些網站已無法使用：下方標示「封存副本」的連結會開啟 Internet Archive 上儲存的副本。

    * [微調設定](https://web.archive.org/web/20171029031305/http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM（封存副本）
    * [DIA 為何重要](https://web.archive.org/web/20231130035027/http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM（封存副本）
    * [減少餐後血糖飆升](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
    * [荷爾蒙與自動敏感度調整](https://web.archive.org/web/20170902081839/http://seemycgm.com/2017/06/06/hormones-2/) See my CGM（封存副本）
    

(what-emergency-equipment-is-recommended-to-take-with-me)= (FAQ-emergency-equipment)=

### 推薦隨身攜帶的應急設備有哪些？

你必須攜帶與其他使用胰島素幫浦療法的 1 型糖尿病患者相同的應急設備。當使用 AAPS 進行循環時，強烈建議隨身攜帶或將以下額外設備放在身邊：

* 用於為智慧型手機、手錶和（如有需要）BT 閱讀器或 Link 設備充電的行動電源和充電線
* 幫浦電池
* 請確保可以存取手機和雲端中的備份（例如 Google Drive、Dropbox），以便在另一支手機上重新設定 AAPS（請參閱[建立及還原備份](../Maintenance/ExportImportSettings.md)）： 
  * 目前版本的 AAPS apk</a)，以及您使用的其他應用程式（例如 xDrip、Juggluco、BYODA）的 apk。</li> 
    
    * 您的金鑰庫檔案（建立 apk 時產生）及其密碼，
    * 您最近從 AAPS 和其他應用程式匯出的設定檔，
    * 您的 **AAPS** 主密碼：沒有主密碼就無法匯入設定檔。</ul></li> </ul> 
    
    (FAQ-organize-backups)=
    
    #### 如何整理我的備份？
    
    請定期匯出設定：每次更換藥匣或儲液槽後、修改設定檔後、達成目標後，或更換幫浦時……即使沒有任何變更，也請每月匯出一次。保留幾個舊的匯出文件。
    
    **AAPS** 可以代勞：它能自動匯出設定（例如在每次更換藥匣後，透過[自動化](#ExportImportSettings-Automating-Settings-Export)匯出），並將匯出檔直接儲存到雲端資料夾（Google Drive）。請參閱[建立及還原備份](../Maintenance/ExportImportSettings.md)。
    
    ### 如何安全、牢固地安裝 CGM/FGM？
    
    你可以使用膠布固定。市面上有多種常見 CGM 系統的預穿孔“防護貼片”（可搜索 Google、eBay 或 Amazon）。一些循環使用者會使用更便宜的標準運動貼布或 Rocktape。
    
    你可以固定他。你還可以購買上臂護腕，用於透過帶子固定 CGM/FGM（可搜索 Google、eBay 或 Amazon）。
    
    ## APS 演算法
    
    ### 為什麼我的設定檔中 DIA 不同，OpenAPS AMA 卻顯示「dia: 3」？
    
    在**組態設定工具** > **APS** 中選取 **OpenAPS AMA** 後，按下**開啟外掛**即可查看傳送給演算法的資料。在**設定檔**區段中，`dia` 一律為 3.0 或更低：
    
    ![OpenAPS AMA 外掛畫面：設定檔資料中的 dia 為 3.0](../images/screens/openaps_ama_plugin.png)
    
    在 AMA 中，DIA 並不代表“胰島素作用的持續時間”。這是一個參數，曾經與 DIA 相關。現在，他的意思是“修正應在多長時間內完成”。他與 IOB 的計算無關。在 OpenAPS SMB 中，不再需要這個參數。
    
    ## 其他設置
    
    ### Nightscout 設置
    
    (FAQ-nsclient-blocked)=
    
    #### AAPSClient（或 AAPS）無法上傳資料：「遭到……封鎖」。我該怎麼做？
    
    NSClient 狀態會說明為何沒有傳送資料：
    
    * **遭連線選項封鎖**：連線設定不允許目前使用的連線方式。例如，您目前使用行動網路，但設定只允許 Wi-Fi；或您目前連線的 Wi-Fi 網路（SSID）不在允許清單中。
    * **遭充電選項封鎖**：連線設定只允許手機充電時（或只允許使用電池時）同步，但目前並非如此。
    * **沒有網路連線**：手機沒有網際網路連線。
    
    請檢查 [NSClient 連線設定](#Preferences-nsclient)：**使用行動網路**、**使用漫遊**、**使用 Wi-Fi**、**Wi-Fi SSID**、**使用電池時同步**及**充電時同步**。
    
    ### CGM 設置
    
    (FAQ-advanced-filtering)=
    
    #### 為什麼 AAPS 顯示「啟用 SMB 一律執行和餐後執行的選項已停用，因為目前使用的血糖資料來源不支援進階篩選」？
    
    **一律啟用 SMB**和**餐後啟用 SMB**只能搭配[受信任的血糖資料來源](#GettingStarted-TrustedBGSource)使用：感測器和 CGM App 必須能告知 **AAPS** 讀取值來自哪個感測器。使用其他血糖資料來源時，**AAPS** 會關閉這兩個選項，並顯示這則訊息。請查看受信任的資料來源清單；如果清單中有您的感測器，請確認使用的是該感測器對應的 CGM App。另請參閱[平滑血糖資料](../CompatibleCgms/SmoothingBloodGlucoseData.md)。
    
    ### 幫浦
    
    #### 電池
    
    循環模式可能會比一般使用更快耗盡幫浦電池，因為系統透過藍牙互動的頻率遠高於手動操作。最好在電池電量降至 25% 時更換，因為這時通訊變得困難。你可以使用 Nightscout 網站中的 PUMP_WARN_BATT_P 變數設置幫浦電池的警告提示。延長電池壽命的小技巧包括：
    
    * 減少 LCD 顯示時間（在幫浦設置選單中）
    * 減少背光時間（在幫浦設置選單中）
    * 將通知設置為嗶聲而非震動（在幫浦設置選單中）
    * 只按下幫浦按鈕重新載入，使用 AAPS 檢視所有歷史紀錄、電池電量和儲液罐容量。
    * 在某些手機上，AAPS 應用可能會經常被關閉以節省電力或釋放 RAM。每次啟動時，AAPS 都會重新建立與幫浦的藍牙連線，並重新讀取目前的基礎率和注射歷史紀錄。這會消耗電池。若要確認是否發生這種情況，請在 NSClient 的**進階設定**中啟用**記錄 App 啟動事件**：每次 AAPS 重新啟動時，Nightscout 都會收到一筆事件，方便您追蹤問題。若要避免此情況，請關閉 AAPS 的電池最佳化，讓手機不會將它關閉：請參閱下方的[節省電池用量](#FAQ-battery-savings)。
    * 使用酒精擦拭電池端子，確保沒有殘留的製造蠟/油脂。
    * 對於 [Dana R/RS 幫浦](../CompatiblePumps/DanaRS-Insulin-Pump.md)，啟動程序會讓電池通過較大的電流，以刻意破壞鈍化膜（此膜可避免電池在儲存期間耗損電量），但不一定每次都能完全破壞鈍化膜。你可以將電池取出並重新插入 2-3 次，直到螢幕上顯示 100% 為止，或者使用電池鑰匙短暫短路電池，將兩個端子接觸一瞬間。
    * 另見[特定類型電池的更多提示](#Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)
    
    #### 更換儲液罐和插管
    
    必須直接在幫浦上更換儲液槽，接著再於 **AAPS** 中記錄這項變更。請依照[更換幫浦儲液槽和導管的逐步指南](#pumps-cannulas-changing-reservoir-and-cannula)操作。
    
    ### 桌布
    
    你可以在 [手機頁面](#Phones-phone-wallpaper) 找到適合你手機的 AAPS 桌布。
    
    ### 日常使用
    
    下方許多情況都可以預先設定成[場景](#scenes)：只要輕點一下，即可切換設定檔、臨時目標及其他設定。 **AAPS** 提供現成的範本，例如*運動*、*睡眠*、*飲酒*或*洗澡*。
    
    #### 衛生
    
    (what-to-do-when-taking-a-shower-or-bath)=
    
    ##### 淋浴或洗澡時該怎麼做？
    
    淋浴或洗澡時，你可以取下幫浦。在這短時間內，你可能不需要幫浦，但你應該告訴 AAPS 你已經中斷了連線，以確保 IOB 計算正確。請參見[上方描述](#FAQ-disconnect-pump)。*洗澡*的[場景](#scenes)範本可以協助您完成這些設定。
    
    #### 工作
    
    根據你的工作，你可能會選擇在工作日使用不同的治療因素。作為循環使用者，你應該考慮在你的典型工作日進行[設定檔切換](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)。例如，如果你的工作要求較低（例如坐在辦公桌前），你可以切換到高於 100% 的設定檔；如果你一整天都在活動，可以切換到低於 100% 的設定檔。如果您比平常提早或延後許多時間工作，或是輪班工作，也可以考慮設定較高或較低的臨時目標，或[調整設定檔的時間](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile)。您也可以建立第二個設定檔（例如「在家」和「工作日」），每天切換至實際需要的設定檔，或將工作日的設定儲存為[場景](#scenes)。
    
    ### 休閒活動
    
    (FAQ-sports)=
    
    #### 運動
    
    你需要重新調整循環之前的運動習慣。如果你像以前一樣攝取運動碳水化合物，閉環系統會識別並相應地進行修正。
    
    這樣，你體內會有更多碳水化合物，但同時循環會應對並釋放胰島素。
    
    進行循環時，你應該嘗試以下步驟：
    
    * Make a [profile switch](#ProfileSwitch-change-percentage) below 100%: tap the profile name on the main screen, tap the round **▶** button, then set **Percentage** and **Duration**.
    * 設置一個[活動臨時目標](#TempTargets-activity-temp-target)高於你的標準目標。若百分比低於 100%，且設定了持續時間，同一個**啟動**畫面會顯示**臨時目標／活動**切換選項，可同時啟動兩者。
    * 如果你正在使用 SMB，請確保[“啟用高臨時目標的 SMB”](#Open-APS-features-enable-smb-with-high-temp-targets)和[“始終啟用 SMB”](#Open-APS-features-enable-smb-always)已停用。
    
    這些設置的預處理和後處理非常重要。在運動前及時進行更改，並考慮肌肉補充能量後的影響。
    
    *運動*和*運動後夜間*的[場景](#scenes)範本會整合這些設定，讓您只要輕點一下就能啟動。如果您經常在固定時間運動（例如參加健身房的運動課程），可以使用[自動化](../DailyLifeWithAaps/Automations.md)啟動設定檔切換和臨時目標，或啟動場景。基於位置的自動化也可能是一個不錯的做法，但會讓前置處理變得更複雜。
    
    設定檔切換的百分比、運動臨時目標的值以及最佳的更改時間都是個人化的。如果你正在尋找適合你的值，請從安全的一面開始（從較低的百分比和較高的臨時目標開始）。
    
    #### 性行為
    
    你可以取下幫浦以獲得“自由”，但你應該告訴 AAPS 這樣 IOB 計算才能正確。請參見[上方描述](#FAQ-disconnect-pump)。
    
    #### 飲酒
    
    在閉環模式下飲酒是有風險的，因為演算法無法正確預測受酒精影響的血糖。你需要檢查自己的方法，並使用 AAPS 中的以下功能來進行處理：
    
    * 停用閉環模式，並手動處理糖尿病或
    * setting high temp targets and deactivating UAM to avoid the loop increasing IOB due to an unannounced meal or
    * 將[設定檔切換](#ProfileSwitch-change-percentage)設為明顯低於 100%。 
    
    *飲酒*的[場景](#scenes)範本可作為起點，您可以依照自己的方式調整。
    
    飲酒時，你必須時刻關注你的 CGM，並手動透過攝取碳水化合物避免低血糖的發生。
    
    #### 睡眠
    
    ##### 如何在夜間使用循環模式，同時避免手機和 Wi-Fi 的輻射？
    
    許多使用者在夜間將手機切換到飛航模式。如果您希望循環模式在睡眠時繼續提供協助，請依照以下步驟操作（只有在 CGM App 與 AAPS 安裝於同一支手機時才可使用，例如 xDrip、Juggluco 或 BYODA；如果您是透過 Nightscout 接收血糖讀取值，則無法使用）：
    
    1. 打開手機的飛航模式。
    2. 等待飛航模式生效。
    3. 打開藍牙。
    
    現在你不會接聽電話，也無法連線網路。但循環仍在運作。
    
    有些人發現，手機處於飛航模式時，區域廣播可能會發生問題（AAPS 收不到 xDrip 傳送的血糖值）。在 xDrip 中，前往「設定」>「App 間設定」>「識別接收端」，並輸入 `info.nightscout.androidaps`。
    
    ![xDrip「App 間基本設定」中的「識別接收端」](../images/xDrip_InterApp_NS.png)
    
    如果您想在夜間使用不同的設定（例如較高的目標值），可以從*睡眠*的[場景](#scenes)範本開始設定。
    
    #### 旅行
    
    ##### 如何應對時區變更？
    
    使用 Dana R 和 Dana R Korean 時，你不需要做任何操作。其他幫浦的詳細資訊，請參閱[跨時區旅行](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md)頁面。
    
    ### 醫療話題
    
    #### 住院
    
    如果你想與臨床醫師分享一些有關 AAPS 和 DIY 循環的資訊，你可以列印[給臨床醫師的 AAPS 指南](../UsefulLinks/ClinicianGuideToAaps.md)。
    
    #### 與內分泌科醫生的醫療約診
    
    ##### 報告
    
    你可以展示你的 Nightscout 報告 (https://YOUR-NS-SITE.com/report) 或查看[Nightscout Reporter](https://nightscout-reporter.zreptil.de/)。
    
    ## Discord 上的常見問題及其解答...
    
    ### 我的問題不在這裡列出。
    
    請參閱[如何取得協助](../GettingHelp/WhereCanIGetHelp.md)。如果您自己找到了解決方法，**請提醒我們將它加入這份清單！**
    
    ### 建置與安裝
    
    (FAQ-build-errors)=
    
    #### 我在建置應用程式時遇到問題和錯誤。
    
    請參閱疑難排解頁面，了解如何建置 **AAPS**（請參閱 [建置 AAPS](../SettingUpAaps/BuildingAaps.md)）：
    
    * 使用瀏覽器建置：[瀏覽器建置：疑難排解](#aaps-ci-troubleshooting)，
    * 使用 Android Studio 建置：[Android Studio 疑難排解](../GettingHelp/TroubleshootingAndroidStudio.md)。
    
    (FAQ-build-error-file-name-too-long)=
    
    #### 建置錯誤：檔名過長
    
    使用 Android Studio 建置時可能會發生此錯誤：建置程序停止，並顯示檔案名稱太長的錯誤訊息。可能的解決方式： 將原始程式碼移至更靠近磁碟根目錄的位置（例如「C:\src\AndroidAPS」）。
    
    在 Android Studio 中：確保在開啟專案並從 GitHub 拉取後，"Gradle" 已經同步並完成索引。執行 Build->Clean Project 之前，請先進行 Rebuild Project。執行 File->Invalidate Caches 並重新啟動 Android Studio。
    
    (FAQ-running-dev-version)=
    
    #### 警告：運作開發版本。閉環模式已停用
    
    如果您在未啟用工程模式的情況下執行開發版（dev），**AAPS** 就會顯示此訊息：開發版只能在工程模式下使用閉迴路。
    
    開發版是供測試使用，而非實際執行循環：請先閱讀 [開發分支](../AdvancedOptions/DevBranch.md)，再繼續操作。
    
    若要啟用工程模式：
    
    1. 在 AAPS 資料夾中建立一個名為 `engineering_mode` 的檔案，並放入 `extra` 子資料夾（也就是您在設定嚮導中選擇的資料夾，通常為 `AAPS/extra`）。任何文件都可以，只要命名正確即可。
    2. 重新啟動 **AAPS**，讓程式讀取該檔案。
    
    提示：複製現有日誌文件並將其重命名為 "engineering_mode"（注意：無文件擴展名！）。
    
    ### 目標
    
    #### 我在目標上卡住了，需要幫助。
    
    請先閱讀 [完成目標](../SettingUpAaps/CompletingTheObjectives.md)。如果仍無法解決問題，請截取問題和答案的畫面，並發布到 Discord 的 AAPS 頻道。別忘了說明你選擇了哪些選項（或未選擇），以及為什麼。你會得到提示和幫助，但你需要找到答案。
    
    ### 設定、密碼與備份
    
    (FAQ-reset-master-password)=
    
    #### 如何重設主密碼？
    
    如果忘記主密碼，可以將其重設為幫浦序號：
    
    1. 在 AAPS 資料夾的 `extra` 子資料夾中建立一個名為 `PasswordReset` 的空白檔案（不含副檔名；通常是 `AAPS/extra`）。
    2. 重新啟動 **AAPS**。您的幫浦必須已連線：**AAPS** 會顯示「等待幫浦…」，並在 30 秒內讀取幫浦序號。
    3. **AAPS** 顯示「密碼已設定！」後，您的主密碼就會是**幫浦序號**。系統會自動刪除 `PasswordReset` 檔案。
    4. 開啟 **設定** > **保護** > **主密碼**，並設定新密碼。
    
    如果系統未能及時連線至幫浦，設定不會變更：請檢查幫浦連線，然後再試一次。
    
    這項操作只會重設主密碼。設定密碼、應用程式密碼、注射密碼或 PIN 碼都不會重設，但您隨時可以使用主密碼取代這些密碼。
    
        {admonition} 舊版設定檔
        :class: warning
        使用舊主密碼匯出的設定檔，只能使用該舊密碼匯入。
    
    (FAQ-where-are-settings-files)=
    
    #### 在哪裡可以找到設定文件？
    
    設定檔會儲存在您於[設定嚮導](#SetupWizard-StoragePermission)中選擇的 AAPS 資料夾內的 `preferences` 子資料夾（例如 `/internal storage/AAPS/preferences`）。如果您設定了雲端資料夾（Google Drive），也可以將匯出檔案儲存於該處。請參閱[建立及還原備份](../Maintenance/ExportImportSettings.md)。
    
    警告：確保不要遺失密碼，否則你將無法匯入加密的設定文件！
    
    (FAQ-import-settings-earlier-versions)=
    
    #### 如何將舊版 AAPS 的設定匯入 AAPS v3 或 v4？
    
    只有使用 AAPS v2.8x 或更新版本匯出的設定，才能匯入 AAPS v3 或 v4。如果您使用的 AAPS 版本早於 v2.8x，或需要使用 v2.8x 以前匯出的設定，請先安裝 AAPS v2.8。先在 v2.8 中匯入 v2.x 的舊版設定。確認一切正常後，從 v2.8 匯出設定。接著安裝目前版本的 AAPS，再將 v2.8 的設定匯入其中。
    
    如果舊版和新版使用相同的金鑰建置，就不需要匯入設定。您可以直接將新版安裝在舊版上。
    
    有一些新的目標加入。你需要驗證他們。
    
    (FAQ-delete-treatments)=
    
    #### 要在哪裡刪除治療記錄？
    
    開啟**選單**（☰），並選取**治療記錄**。長按一筆記錄以選取；如有需要，可再點選其他記錄，然後點選**垃圾桶**圖示並確認。請參閱[治療記錄](#aaps-screens-treatments)。
    
    ### 手機與連線問題
    
    (FAQ-aaps-stops)=
    
    #### AAPS 每天在同一時間停止運作。
    
    * 部分手機上的 Google Play 安全防護可能會在每天早上關閉 **AAPS**。如果發生這種情況，請前往 Google Play 設定，並停用 **Google Play 安全防護**。
    * 檢查是否有“清理”應用程式（如 CCleaner 等），並將其卸載。
    * 請關閉 **AAPS** 的所有電池最佳化設定（請參閱下方的[節省電池電量](#FAQ-battery-savings)）。
    
    (FAQ-battery-savings)=
    
    #### 如何配置省電設置？
    
    手機在閒置時，可能會暫停 **AAPS** 和相關應用程式（CGM 應用程式、藍牙）的運作。 **AAPS** 因此無法正常運作，而且手機可能會關閉與感測器和幫浦（或 RileyLink）的藍牙連線，導致出現「無法連線至幫浦」警示和通訊錯誤。
    
    請關閉 **AAPS**、CGM 應用程式（例如 xDrip）和藍牙系統應用程式的電池最佳化功能。設定方式會因手機品牌、型號和 Android 版本而異：
    
    * Pixel、Samsung 和 Huawei 手機請參閱[電池最佳化](#generaltroubleshooting-android-related-issues)，
    * 在 **AAPS** 中，開啟**選單**（☰）> **關於**，然後點選 **Don't kill my app?**；其他品牌請前往 [Don't kill my app](https://dontkillmyapp.com/)。
    
    如果不確定問題是否由省電功能造成，可以暫時關閉手機上的所有省電功能：電池電量會消耗得比較快，但能迅速確認問題是否因此消失。
    
    (FAQ-pump-unreachable-alerts)=
    
    #### 一天或夜間多次出現幫浦無法使用警報。
    
    手機可能會暫停 **AAPS** 甚至藍牙的運作，導致手機與幫浦或 RileyLink 中斷連線（請參閱上方的[省電功能](#FAQ-battery-savings)）。
    
    您也可以調整警示觸發的時間：點選主畫面右上角的**設定**（齒輪）圖示，然後選擇**本機警示** > **幫浦無法連線的時間門檻**（30 到 300 分鐘）。請查看幫浦的說明頁面：部分幫浦會建議設定值，例如 [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) 建議設為 120 分鐘。
    
    (FAQ-link-unresponsive)=
    
    #### 我的 Link/幫浦/Pod 沒有反應（RL/OL/EmaLink...）
    
    With some phones, there are Bluetooth disconnects from the Links (RL/OL/EmaLink).
    
    Some also have non responsive Links (AAPS says that they are connected but the Links can't reach or command the pump).
    
    請先嘗試在幫浦畫面點選**重設 RileyLink** 按鈕（請參閱幫浦的說明頁面：[Medtronic](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)、[Omnipod Eros](#OmnipodEros-reset-rileylink-config-notes)）。如果沒有幫助，讓這些裝置重新正常運作的最簡單方法如下：
    
    1. 關閉 Link 電源。
    2. 結束 **AAPS**（**選單**（☰）> **結束**）。
    3. 長按 **AAPS** 圖示，開啟 Android 的**應用程式資訊**，點選**強制停止**，再選擇**儲存空間** > **清除快取**（請勿清除儲存空間／資料！）。
    4. 少數情況下，手機可能需要在此時重新開機。你可以嘗試不重啟。
    5. 開啟 Link 電源。
    6. 啟動 **AAPS**。
    7. 在幫浦畫面點選**配對 RileyLink**，然後再次選取您的 Link。
    
    ### 遠端控制
    
    (FAQ-aapsclient)=
    
    #### 配置和使用 AAPSClient 遠端應用程式
    
    **AAPSClient** 是一款獨立的應用程式，讓照護者能遠端追蹤並控制 **AAPS**。從 **AAPS** v4 起，若要透過 AAPSClient 控制 **AAPS**，兩個應用程式必須先配對一次。請參閱：
    
    * [AAPSClient 應用程式](#aapsclient-app)：安裝、首次啟動和配對，
    * [主控端 ↔ 用戶端控制](#client-master-control)：可控制的項目和配對方式，
    * [智慧型手錶上的 AAPSClient](#remotecontrol-smartwatches)。
    
    (FAQ-hardened-mode)=
    
    #### 我在 Nightscout 網站輸入的治療項目沒有生效
    
    這是[強化模式](#client-master-control-hardened-mode)的設定所致。啟用用戶端控制時（簡易模式下永遠啟用），**AAPS** 只會接受已配對用戶端所做的變更，不會接受 Nightscout 網站或其他應用程式所做的變更。請改用已配對的 **AAPSClient** 輸入治療項目。
    
    ### 警示與警告
    
    #### 我看到紅色警告徽章（紅色三角形）／AAPS 無法啟用閉環模式／循環停留在 LGS／我看到黃色三角形
    
    血糖來源捷徑上的紅色警告徽章是 AAPS 的安全功能。完整說明請參閱[血糖警告標誌](#aaps-screens-bg-warning-sign)。
    
    底部列的血糖來源捷徑上出現紅色警告徽章（舊版中的紅色三角形），表示有重複的血糖資料，因此 AAPS 無法精確計算變化值。閉環模式會切換至**低血糖停用**模式：系統仍會降低或暫停基礎胰島素，以避免您血糖過低，但不會給予校正胰島素。請刪除每組重複血糖值中的其中一筆，才能清除警告。點選捷徑以開啟[血糖來源畫面](#aaps-screens-bg-source)：重複的資料會以紅色標示。長按要刪除的其中一列，勾選每組重複資料中的其中一筆，再點選垃圾桶圖示。如果重複的血糖資料過多，你可能需要重置 AAPS 資料庫。這種情況下，您也會失去統計資料、活性胰島素、活性碳水化合物和已選取的設定檔。
    
    警告消失後，AAPS 不會自動恢復**閉環模式**。按下主畫面上的循環圖示，然後再次選擇**閉環模式**。
    
    問題的可能來源：xDrip 和/或 Nightscout 回填血糖資料。
    
    舊版中的黃色三角形表示每筆血糖讀取值之間的延遲不穩定（血糖資料未能定期每 5 分鐘接收一次，或有資料遺失）；使用 Libre 或更換 G6 發射器後，常會發生這種情況。 **AAPS** 4 不再顯示此警告：系統會在背景重新計算數值，循環也能正常運作。
    
    ### Omnipod DASH
    
    (FAQ-move-dash-pod)=
    
    #### 我可以將啟用中的 DASH Pod 移至另一支手機嗎？
    
    Pod 狀態會包含在匯出的設定中，因此您可以在移轉前立即匯出設定，再將設定匯入另一支手機，將啟用中的 Pod 移至該手機。這並未獲得官方支援，而且有遺失 Pod 的風險；如果可以，請等到 Pod 即將到期時再嘗試。
    
    請先閱讀以下章節：
    
    * [Export and import settings](#omnipod-dash-export-import) on the Omnipod DASH page, and [Tubeless pumps](#ExportImportSettings-tubeless-pumps): on the new phone, tick **Also replace pump settings** and use a file exported while wearing your current Pod,
    * 之後請參閱[棄置 Pod](#omnipod-dash-discard-pod)，從舊手機移除 Pod。在棄置 Pod 之前，請讓舊手機保持飛航模式，避免兩支手機同時與 Pod 通訊。