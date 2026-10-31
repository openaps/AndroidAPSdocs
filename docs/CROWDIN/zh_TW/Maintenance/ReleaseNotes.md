
# 版本更新說明

```{toctree}
:hidden:

Update2_7.md
Update3_0.md
UpdateAaps3204.md
```

請依照 [更新手冊](UpdateToNewVersion.md) 中的指示，更新至新版本。問題排除部分也更新手冊頁面上說明了，包含升級**AAPS**時最常遇到的問題。

```{admonition} Upgrading from AAPS v3?
:class: tip
如需了解重要的行為變更（包括功能移動、重新命名或移除），請參閱 [AAPS v4 的變更內容](V4Changes.md)。
```

當有可用的更新時，你會收到如下的通知：

![更新資訊](../images/AAPS_LoopDisable90days.png)

如果你未在到期日之前更新，**AAPS** 將切換至開環模式。

請參閱 [End of life](EndOfLife.md) 以了解 AAPS 版本的支援終止日期。

**請勿忽略該通知。** **AAPS** 的新版本提供重要的安全性修正。因此，每位 **AAPS** 使用者都必須盡快更新到最新版本。這項工作旨在提升每位 **AAPS** 使用者和 DIY 社群的安全性。感謝你的諒解。

(maintenance-android-version-aaps-version)=

## Android 版本與 AAPS 版本

如果你的智慧型手機使用的 Android 版本低於 Android 12，將無法使用 AAPS v3.4 及更新版本，因為至少需要 Android 12。

為了允許使用舊版 Android 的用戶繼續使用舊版 AAPS，我們發佈了一些僅更改版本驗證的版本。這些版本不包含其他改進。

請在下表中找出您的 Android 版本，並使用相應的 **AAPS** 版本。程式碼是從 <https://github.com/nightscout/AndroidAPS> 下載，請使用表格中列出的分支。

| 您的 Android 版本  | 適用的 AAPS 版本 | 要下載的分支                                                           |
| -------------- | ----------- | ---------------------------------------------------------------- |
| Android 12 及以上 | 最新版本        | [master](https://github.com/nightscout/AndroidAPS)（預設）           |
| Android 11     | **3.3.2.1** | [3.3.2.1](https://github.com/nightscout/AndroidAPS/tree/3.3.2.1) |
| Android 9、10   | **3.2.0.4** | [3.2.0.4](https://github.com/nightscout/AndroidAPS/tree/3.2.0.4) |
| Android 8      | **2.8.2.1** | [2.8.2.1](https://github.com/nightscout/AndroidAPS/tree/2.8.2.1) |
| Android 7      | **2.6.2**   | [2.6.2](https://github.com/nightscout/AndroidAPS/tree/2.6.2)     |

## WearOS 版本

- AAPS 需要 Wear OS 3.0、3.2 或 3.5（Android 11、API level 30）或更新版本。不支援 Wear OS 2 手錶。

```{tip}
WearOS 5, API 等級 34 (Android 14) 有[限制](#BuildingAapsWearOs-WearOS5)。
```

(latestrelease)=

(version400)=

## 版本 4.0.0

發布日期：2106-02-31

### 新功能
- 全新使用者介面：使用 Jetpack Compose 重新打造手機 App @MilosKozak
- [全域搜尋](../DailyLifeWithAaps/GlobalSearch.md) @MilosKozak
- 遷移至 Kotlin Multiplatform，並推出適用於 Windows、Mac、Linux 桌面版和 iOS 的用戶端 @MilosKozak
- [場景](../DailyLifeWithAaps/Scenes.md)：儲存一組操作，並一次執行 @MilosKozak
- [主控端 ↔ 用戶端控制](../RemoteFeatures/ClientMasterControl.md)：從用戶端手機傳送指令給主控端 @MilosKozak
  - [用戶端角色](#client-master-control-roles)：可為各個用戶端設定唯讀、餐點、照護者或管理員角色 @MilosKozak
  - [強化模式](#client-master-control-hardened-mode)：啟用用戶端控制後，主控端只會接受已配對用戶端所做的變更 @MilosKozak
  - 可透過 QR Code 配對，同時在用戶端設定 Nightscout；也可使用 PIN 碼配對。配對密鑰會在配對完成後立即更換 @MilosKozak
  - 為每個用戶端設定專屬的 [Nightscout 權杖](#client-master-control-own-token)，並只授予用戶端所需的權限 @MilosKozak
- 支援各種幫浦、嚮導和設定檔的[胰島素濃度](../AdvancedOptions/InsulinConcentration.md)（U200、U500）@Philoul @MilosKozak
- 胰島素管理：胰島素目錄、暱稱，以及在設定檔和嚮導中選擇胰島素 @Philoul
- 校正外掛 @MilosKozak
- [平滑處理](../CompatibleCgms/SmoothingBloodGlucoseData.md)：無跡卡爾曼濾波器（UKF）@piecycle
- [注射部位輪替](#Aapsscreens-site-rotation)：追蹤並輪替輸注部位 @Philoul @MilosKozak
- [Autotune](../AdvancedOptions/Autotune.md) 改版 @Philoul
- 新增[小工具](../DailyLifeWithAaps/Widgets.md) @MilosKozak @t1dude
- 無障礙功能：手機 App 可搭配螢幕閱讀器使用，提供控制項名稱、語音狀態提示、圖表說明及便於快速瀏覽的標題 @MilosKozak
- [匯入設定](../Maintenance/ExportImportSettings.md)時可保留幫浦設定 @MilosKozak
- 持續通知採用 Android 即時更新功能，支援 Samsung Now Bar 和 delta @premnirmal
- 血糖圖表：在總覽的每張圖表上[按住](#aaps-screens-graph-press-and-hold)，即可查看讀取值 @t1dude @olorinmaia
- 效能改進 @MilosKozak
- 注射嚮導中新增自動 e-carb 功能 @MilosKozak

### 新裝置
- **CareLevo**：新增[幫浦驅動程式](../CompatiblePumps/CareLevo.md) @Kisu-Choi @MilosKozak
- **Dana-i2**：新增支援 @MilosKozak
- **Instara**：新增 CGM 資料來源 @leohunt

### 幫浦驅動程式改進
- 重新設計 Insight、Medtronic、Medtrum、Omnipod、Dana、Diaconn 和 Equil 的幫浦總覽畫面 @MilosKozak
- **Omnipod Dash**：PDM 樣式的參考代碼和易讀的故障說明、始終啟用漂移補償，以及更完善的注射類型回報 @nl-ruud
- **Omnipod**：Dash 和 Eros 的強制到期日 @mcnelson
- **DanaR、RS**：新增幫浦模擬器供測試使用 @MilosKozak
- **Equil**：新增幫浦模擬器供測試使用 @MilosKozak
- 修正多項幫浦和循環功能問題 @MilosKozak 等人

### Wear OS
- [手錶 App](../WearOS/WearOsSmartwatch.md)以 Compose 重新打造，新增錶面資訊方塊和錶面功能，並可在 Wear OS 6 以上版本自動安裝錶面（Watch Face Push）@olorinmaia @Philoul
- CustomWatchface 支援 Wear OS 6.0（GW7、GW8、GW9 等），並提供專用的 WFF 錶面 @Philoul @olorinmaia
- CustomWatchface 現在可加入 5 個可自訂的錶面功能欄位（這項新功能僅適用於較舊款手錶）@Philoul
- 新增[以 AAPS 錶面功能為基礎的 WFF 錶面](#wearos-complications-watchface-setup) @olorinmaia
- 修正注射嚮導和快速嚮導的結果 @olorinmaia
- 主選單新增血糖圖表和「運動模式」活動 @olorinmaia
- 注射嚮導：新增[餐點類型](#WearOsSmartwatch-wizard-meal-type)頁面，可像手機版嚮導一樣拆分碳水化合物；並新增[碳水化合物時間](#WearOsSmartwatch-wizard-carb-time)功能，可在手錶上提醒*用餐時間* @olorinmaia
- [在手錶上顯示手機鬧鐘](#WearOsSmartwatch-phone-alarms)：手錶會顯示鬧鐘，並提供靜音和靜音 5 分鐘的選項 @olorinmaia

### 建置
- CI 工作流程支援標籤／分支建置，並加入 JDK 版本對應 @Angus-repo

### 貢獻者
@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

完整變更記錄：<https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

(version3426)=

## 版本 3.4.2.6

- Equil： 提升穩定性 @MilosKozak

(version3425)=

## 版本 3.4.2.5

- Equil 修正競態條件 @MilosKozak

(version3424)=

## 版本 3.4.2.4

- Equil 多項修正 @MilosKozak
- NS 設定檔同步修正 @MilosKozak

(version3423)=

## 版本 3.4.2.3
- Dash：解決漂移問題 @nl-ruud
- NSClientV3：修正重新連線後的資料缺口 @MilosKozak
- Automation：修正反序列化問題 @MilosKozak
- Equil：修正電池報告 @MilosKozak
- 清理工作流程 @vanelsberg
- Equil：改善錯誤復原 @MilosKozak
- DanaRS：修正國內版幫浦通訊 @MilosKozak
- Insight：修正臨時基礎率同步 @MilosKozak
- Dash：修正註冊錯誤 @nl-ruud

(version3422)=

## 版本 3.4.2.2

- 修正 Equil 與 Medtronic 的問題
- 提升 Medtrum 的安全性

(version3421)=

## 版本 3.4.2.1

- Equil：修正配對與進度對話視窗 @MilosKozak

(version3420)=

## 版本 3.4.2.0

發布日期：2026-02-04

- Equil：針對不同機型修正電阻設定 @hhfcvmars
- Tidepool：修正工作階段 @MilosKozak
- Medtrum：修正註冊流程，避免重複填充 @MilosKozak
- COB：修正 COB 計算（涵蓋危險的邊界案例）@MilosKozak

(version3410)=

## 版本 3.4.1.0

發布日期：2026-08-03

### 核心功能
- 修正 DST 處理 @MilosKozak
- 改進並統一一般目標辨識（mg/dL > 99，mmol/L > 5.5）@MilosKozak
- 簡訊：以 PIN 保護 RESTART @MilosKozak
- 維護：若選取錯誤目錄則警示 @MilosKozak

### 幫浦驅動程式改進
- **Omnipod Dash**：重構 BLE 驅動程式的程式碼到 omnipod/common 模組 @jwoglom
- **Omnipod Dash**：嘗試修正連線狀態 @MilosKozak
- **Omnipod**：在 Pod 註冊前驗證設定檔，以避免浪費 Pod（#4534）@brianV
- **Medtronic**：修正設定對話框中顯示相同的編碼類型 @mifi100
- **Medtronic**：準備幫浦通用類別（Tandem 準備）@andy-rozman
- **RileyLink**：編碼修正（#4519）@mifi100
- **Equil**：依序號前綴擴充胰島素幫浦相容性（#4510）@hhfcvmars
- **Equil**：新增日誌 @MilosKozak
- **Diaconn G8**：修正日誌同步錯誤並新增韌體 3.58+ 支援 @miyeongkim
- **Diaconn**：修正臨時基礎率持續時間單位換算 @miyeongkim
- **Diaconn**：使用 commandQueue.loadEvents() 進行歷史同步 @miyeongkim
- 允許在循環暫停但幫浦可用時進行胰島素輸注 @cschuijt

### 雲端 / 備份
- 新增備份至 Google Drive @Angus-repo
- 於雲端儲存錯誤狀態變更時通知 UI @Angus-repo
- 允許同時使用本機與雲端儲存 @Angus-repo

### Tidepool
- 改進 Tidepool OAuth2 移轉 @MilosKozak
- 修正 Tidepool 無限期的 BLOCKED 狀態，並修正拒絕空白 SSID 的問題 @michaeln-synapse

### NSClient
- NSCv3：改善重新連線 @MilosKozak

### Wear OS
- 若計算中使用 IOB，則在嚮導結果中顯示新的活性胰島素（IOB）@olorinmaia
- 修正 Wear 上的注射進度（BolusProgress）與總量顯示 @Philoul

### 使用者介面
- 改進 Site Rotation 的 ic_none 圖示 @Philoul
- 修正針位輪替的幫浦管理設定未被使用的問題 @samfundev

### 貢獻者
@MilosKozak @Philoul @olorinmaia @jwoglom @mifi100 @andy-rozman @Angus-repo @brianV @cschuijt @hhfcvmars @miyeongkim @samfundev @michaeln-synapse

(version3400)=

## 版本 3.4.0.0

發布日期：2025-12-31

### 在升級之前：
* 此版本需要 Google Android 12.0 或以上。在嘗試更新之前請檢查你的手機版本。
* 更新至最新的 Android Studio，或使用瀏覽器建置以獲得更好的設定流程。

### 新功能
* 執行模式 @MilosKozak
  * 在治療分頁顯示 [循環狀態歷史](#AapsScreens-running-mode)
  * 顯示並允許從 [AAPSClient](#RemoteControl_aapsclient) 變更循環狀態。<br>注意：需要在 [NSClient > Synchronization > 接收執行模式事件](#Preferences-nsclient-synchronization) 啟用設定。
* [新款 CGM](../Getting-Started/CompatiblesCgms.md)：Glunovo、Intelligo、Sinocare
* [部位輪替](#Aapsscreens-site-rotation) 支援 @Philoul
* 新的 [自動化動作](#automations-automation-action)：啟用或停用 SMB 微量注射 @MilosKozak
* Syai CGM 為 [可信來源](#GettingStarted-TrustedBGSource)，並支援進階過濾 @MilosKozak

### Wear OS 改進
* 大幅降低電量消耗 @MilosKozak
* 介面改進與修正 @olorinmaia
* 幾乎完全重寫程式碼以符合目前函式庫層級（先前為 Wear OS 2）@MilosKozak
* 2 個新的複雜功能，用於擴充資料 @Philoul
* 使用 DataStore 遷移至現代複雜功能提供程式 @MilosKozak

### 記憶體洩漏修正
* 修正程式碼中的記憶體洩漏 @MilosKozak
* 新增 LeakCanary 記憶體洩漏回報至 Firebase Crashlytics @MilosKozak

### 幫浦驅動程式改進
* **DanaI**: 修正中斷連線問題 @MilosKozak
* **RileyLink**: 透過最小化延遲加速通訊 @mifi100
* **Medtrum**: 新增貼片註冊時間與使用時長顯示 @vanelsberg，密碼大寫修正 @MilosKozak
* **Combo**: 修正測試中的競態條件 @MilosKozak @dv1
* **Equil**: 最佳化連線，降低電量消耗 @MilosKozak

### Nightscout 同步
* 改進 Nightscout 異常時的重複資料過濾 @MilosKozak

### UI/UX 改進
* 多項改進 @MilosKozak @Philoul @olorinmaia

### 自動化
* 新的微量注射控制動作 - 透過自動化啟用/停用微量注射 @MilosKozak

### 測試
* 新增針對 Equil、Eopatch、Dana 與 Medtronic 幫浦的完整單元測試 @MilosKozak
* 提升多個模組的測試穩定性與涵蓋率 @MilosKozak

### Tidepool
* Tidepool OAUTH2（支援新的 Tidepool 驗證）@MilosKozak

(version3321)=

## 版本 3.3.2.1

發布日期：2025-08-13

- 修正 Omnipod 在 Android 16 的藍牙連線問題
- CI 流程 (瀏覽器版)
- 修正 mmol-mgdl 轉換問題
- 修正某些時區對話框中的錯誤時間選擇
- 修正簡單模式下的金鑰讀取問題
- 修正穿戴設備上的預測遺漏問題
- 改善 ConfigBuilder
- 改善 NSCv3 完全同步

(version3300)=

## 版本 3.3.2.0

發布日期：2025-03-27

### 如何升級

* [需要 Android Studio 版本為 "Meerkat" 或以上版本才能建置此版本。](#Building-APK-recommended-specification-of-computer-for-building-apk-file)如果你已經建置了 3.3.x 版本，你需要再次升級 Android Studio。

(version-enforcement)=

### 從此版本開始，通知和版本強制執行機制已簡化並放寬，運作方式如下：
*  當設備離線時不會過期（如果沒有網路連線）。這意味著不再有 60 天和 90 天的寬限期。
*  過期後將強制進入 LGS 模式
*  你將會收到警告/通知的頻率會降低：
   - 剩餘 28+ 天：每 7 天一次
   - 剩餘 27-14 天：每 3 天一次
   - 然後每天一次
   - 通知將在中午後產生，以免在晚上打擾你
* 只有 2 種通知類型
   - 新版本可用（對 AAPS 沒有影響）
   - 應用程式在未來的某個日期到期（對 AAPS 仍然沒有影響）/ 已經過期（AAPS 會轉為 LGS 模式）

### 新功能

* SMS RESTART 命令 @MilosKozak
* 手錶個人設置切換參數 @olorinmaia
* AAPS V2 手錶面板的暗色模式 @olorinmaia
* G7 資料交換的改善 @olorinmaia
* 小工具配置 @MilosKozak
* 單選按鈕 UI 改進 @olorinmaia
* 自動化：從地圖選擇位置 @MilosKozak
* 主畫面上可見版本 @MilosKozak
* 必須使用現有的 Git 系統進行編譯（不提供 ZIP 下載）
* 在主畫面上顯示版本 @MilosKozak
* Tidepool 上傳改善 @ConstantinMatheis

### 錯誤修正

* Dash 解除綁定修正 @Andreas
* Garmin 修正 @robertbuessow @suside
* 修正對話框中的 IOB 顯示 @olorinmaia
* 目標拼寫與驗證改善 @MilosKozak
* 修正模擬 TBR 的顯示問題 @MilosKozak
* 修正繞過安全性 @tdrkDev

## 版本 3.3.1.3

發布日期：2025-01-21

### 錯誤修正

* Dash: 連線是可選的（預設為關閉） @MilosKozak
* Equil：修正 10 U 以上的注射問題，並改進鬧鐘 @EquilHack
* Garmin：手錶改進 @swissalpine
* 手錶改進 @olorinmaia
* 從手錶控制循環狀態 @tdrkDev
* 穩定度改善

*  **可能需要新的[認證器設置](#sms-commands-authenticator-setup)。**

## 版本 3.3.1.2

發布日期：2025-01-15

### 如何升級

* [需要Android Studio版本叫「Ladybug功能更新」](#Building-APK-recommended-specification-of-computer-for-building-apk-file)或更高版本來建立這個版本。**這與一般的「Ladybug」不同。**如果你已經建立了3.3.x版本，你需要再次升級Android Studio。

### 錯誤修正

* Dash：在Android 15+上使用綁定。
* 恢復首頁總覽中的Dexcom按鈕。
* Equil：允許移除無效的幫浦。
* 當 DynISF 調整因子為零時發出警告
* NSCv3：解決在時間略有不同的手機上的WebSocket通訊問題。
* SMS命令：修正一次性密碼。**可能需要新的[身份驗證器設置](#sms-commands-authenticator-setup)。**
* 修復某些偏好設定無法再編輯的問題。
* 修復虛擬幫浦的主密碼重設問題。
* 修復大型設置備份文件的匯入問題。

## 版本 3.3.1.0

發布日期：2025-01-06

### 用戶介面變更

* [新增顏色以區別AAPSClient和AAPSClient2](#RemoteControl_aapsclient) @MilosKozak
* 改善用戶操作的佈局和圖示

### 其他功能

* 新增自動化觸發器：[步數計數](#screen-heart-rate-steps) @Roman Rihter
* 允許在NSCv3完全同步時接收所有內容（包括以前未同步的資料，如TBR） @MilosKozak
* NSClient v3：讓公告功能正常運作（_例如_從AAPSClient到AAPS） @MilosKozak

### 技術變更與錯誤修正

* 修復Insight崩潰的問題 @philoul
* 修正Nightscout中設備狀態條目的過多創建 @MilosKozak
* 修正碳水化合物吸收處理 @MilosKozak
* 修正單選按鈕和核取方塊的顏色 @MilosKozak
* 修正DynISF百分比遷移中的錯誤 @MilosKozak
* 解決DynISF通知位置錯誤的問題 @MilosKozak
* 修正錶盤中的錯誤 @philoul

## 版本 3.3.0.0

發布日期：2024-12-29

### 主要功能

* **[動態 ISF](../DailyLifeWithAaps/DynamicISF.md)**不再是獨立的外掛，現在已整合為 [OpenAPS SMB](#Config-Builder-aps) 外掛中的選項，並調整了部分運作方式：
  * 在動態敏感度強度方面，**動態 ISF** 現在會考慮 **設定檔切換** 和 **設定檔百分比** 的影響。
  * 將使用過去 24 小時的平均 **ISF** 計算，該數值將用於注射嚮導和 **COB** 的計算。**設定檔中的 ISF** 值完全不會被使用（僅在歷史資料無法使用時作為備用）
  * DynamicISF 文件頁面已重新編寫。請閱讀重要部分 [啟動 Dynamic ISF 時需考慮的事項](#dyn-isf-things-to-consider-when-activating-dynamicisf)。
* 為使用 FreeStyle Libre 2 和 Libre 3 的用戶[啟用「始終啟用 SMB」與「碳水後啟用 SMB」](#Open-APS-features-enable-smb-always)
  * 注意：需要最新版本的 xDrip+ 或 Juggluco。
* 新增的 **自動化**觸發條件
* 無人操作的設定匯出

### 如何升級

* 在升級之前：
  * **<span style="color:red">此版本需要 Google Android 11.0 或更高版本</span>**。在嘗試更新之前請檢查你的手機版本。
  * 如果你使用配合ruffy設備的“舊”Combo驅動程式，請在更新之前移轉至[原生Combo驅動程式](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)
  * 在升級過程中，你將失去[主畫面上的附加圖表](#AapsScreens-section-g-additional-graphs)：如有需要，請手動記錄當前配置，以便在升級後重新創建。
  * 針對某些人在 Android 15 上遇到的 [藍牙連線問題](../Getting-Started/Phones.md)，本版本並未解決（這是 Android 的問題，而非 **AAPS** 的問題）。在3.3.1.2中有修正可用。
  * 由於 Android 的限制，主畫面上的 BYODA 按鈕已不再提供。這在3.3.1.2中已修正。
* 更新指示：遵循[更新到新版本](../Maintenance/UpdateToNewVersion.md)的指南。
  * [需要稱為"Ladybug"的Android Studio版本](#Building-APK-recommended-specification-of-computer-for-building-apk-file)或更高來建立此版本。如果你已安裝舊版Android Studio，可能需要<span style="color:red">將JVM版本配置為21</span>。請參閱[Android Studio問題排除 > 非相容的Gradle JVM](#incompatible-gradle-jvm)。
  * 提示 - 如果你不想失去**AAPS**的歷史紀錄，請務必進行更新，不要用卸載後重新安裝。作為預防措施，備份你目前的**AAPS**設定和舊的APK，以防在出現問題時可以恢復到舊版本。
* 升級後：
  * 在維護標籤中設置新的[“AAPS目錄”設定](#preferences-maintenance-logdirectory)。

### 詳細變更

#### CGM和幫浦

* [為FreeStyle Libre 2和Libre 3用戶啟用“SMB始終啟用”和“餐後SMB”](#Open-APS-features-enable-smb-always) @MilosKozak
* [Medtrum驅動程式](../CompatiblePumps/MedtrumNano.md)改進 @jbr77rr
  * 通訊改進，包括新的設定以解決某些智慧型手機的問題
  * 在啟動時顯示儲水器的水位
  * 修正啟動返回起始位置且用戶無法完成啟動的錯誤
  * 同步狀態和其他說明的反饋
* 新增支援的幫浦：[Equil 5.3](../CompatiblePumps/Equil5.3.md) @EquilHack
* 新增支援的CGM：[Ottai](../CompatibleCgms/OttaiM8.md) @ottai-developer 和 [Syai Tag](../CompatibleCgms/SyaiTagX1.md) @syai-dev
* Insight驅動程式重寫為kotlin @Philoul
* 移除舊的 ruffy 依賴的 Combo 驅動程式

#### 用戶介面變更

* [簡易模式](#preferences-simple-mode) 在全新安裝時預設啟用 @MilosKozak
* 新的[快速嚮導](#Preferences-quick-wizard)選項 @radicalb
  * 快速嚮導現在使用與計算機相同的邏輯來進行注射計算和顯示。你現在可以在快速嚮導中的“碳水化合物時間”欄位預先注射。
* 新的[圖表比例選單](#aaps-screens-main-graph)；[附加圖表選單](#AapsScreens-activate-optional-information)用戶介面改善 @Philoul
* [ConfigBuilder佈局改善](../SettingUpAaps/ConfigBuilder.md) @MilosKozak
  * 各區域現在預設為摺疊狀態。使用箭頭展開。
* 變數敏感度在 AAPSClient 中顯示
* BolusWizard 使用者介面改善 @kenzo44
* 修正使用淺色主題時幫浦標籤中的文字顯示 @jbr77rr

#### 其他功能

* [自動設定匯出](#ExportImportSettings-Automating-Settings-Export) @vanelsberg
* 新增[自動化觸發](#automations-automation-triggers) @vanelsberg
  * Pod 註冊（僅限貼片幫浦）
* 新增[自動化觸發](#automations-automation-triggers) @jbr77rr
  * 插管時間、胰島素時間、電池時間、傳感器時間、儲備液位、幫浦電池電量
* 允許輸入負碳水化合物 @MilosKozak
* 新增參數[“AAPS 目錄”](#preferences-maintenance-settings)以選擇與預設不同的儲存目錄。
* 允許[在幫浦暫停時記錄胰島素](#aaps-screens-buttons-insulin) @jbr77rr
* 更新[目標 2](#objectives-objective2) @MilosKozak
  * 檢查主密碼是否已設定且已知
* 測試模式下的隨機碳水化合物 @MilosKozak
* 修正 TDD 計算中的錯誤 @MilosKozak
* 簡訊指令：允許[**不**發送來自 NS 的簡訊以更改設定檔](#sms-commands-too-many-messages) @MilosKozak

#### 智慧型手錶

* 穿戴裝置和錶盤的改善 @Philoul @MilosKozak @olorinmaia
* 從自動化操作中檢視功能塊 @Philoul
* 結合來自 AAPS、AAPSClient 和 AAPSClient2 的手錶錶盤，以監控更多患者 @Philoul @MilosKozak
* 額外：僅在手錶上顯示_用戶_操作 @MilosKozak

#### 技術變更

* [日誌文件位置變更](#Accessing-logfiles-accessing-logfiles)
* 新的內部模組結構 @MilosKozak
* 將持久性層與主程式碼分離 @MilosKozak
* 建置檔案重新編寫為 kts @MilosKozak
* 算法重新編寫為 kotlin 以改善效能 @MilosKozak
* 大量新的單元測試 @MilosKozak 和其他人
* 更多的程式碼轉換為 kotlin @MilosKozak
* 新的偏好設定管理，xml -> kotlin @MilosKozak
* 新的 CI 配置，在自己的伺服器上運行 CI @MilosKozak
* 函式庫更新至最新版本，toml @MilosKozak
* 移轉至 kotlin 2.0，java 21 @MilosKozak

(version3204)=

## [版本 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)

發布日期：2024-02-27

此版本為最後一個支援 Android 10 的版本。如果您無法升級到 Android 11，[請將 AAPS 更新至 3.2.0.4](#update-aaps-3204)。

### 變更

- xDrip G7 支援
- Medtrum 修復
- 自動化圖示修復
- 目標 1 傳遞修復

(version3200)=

## 3.2.0.0 版本獻給 @Philoul

發布日期：2023-10-23

### 重要提示

- 需要 NS 15 版本
- 在使用 NS v3 外掛時，透過 NS UI 輸入的治療（+ 按鈕）和使用 v1 API 的其他應用程式不會發送到 AAPS。這將在未來的 NS 版本中修復。在 AAPS 和 AAPSClient 中，始終使用相同的客戶端（v1 或 v3），直到 NS 完全切換到 v3 為止。對於 AAPS 和 AAPSClient 本身也是如此。
- v3 插件中的 Websockets 像 v1 插件一樣運作。停用 websockets 後，AAPS 會定期下載 NS 的資料，這應該會降低電量消耗，因為 NS 不會長時間保持連線。相反地，這意味著數據交換有延遲。在你使用之前，請先閱讀[這裡](#Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS)的開發團隊重要意見！
- 如果你使用 xdrip 作為 CGM 資料來源，則需要在更新後重新選擇他，因為內部已進行了更改。
- Tidepool 可作為 NS 的替代品，以透過第一個目標。
- 如果你選擇發送到 xDrip+，則必須配置 xDrip 同步外掛。為了從 AAPS 接收血糖資料，必須將 “xDrip+ Sync Follower” 選為資料來源。
- 如果你希望切換到 ComboV2 驅動，必須卸載 Ruffy 並重新與 AAPS 配對幫浦。
- 要使用 DynISF 外掛，你必須開始目標 11（所有先前目標必須處於完成狀態才能開始第 11 個目標）。


### 變更

- EOPatch2 / GlucomenDay 幫浦驅動 @jungsomyeonggithub @MilosKozak
- ComboV2 幫浦驅動（不需要 Ruffy）@dv1
- Medtrum Nano 驅動 @jbr7rr
- 韓國 DanaI 支援 @MilosKozak
- Glunovo CGM 支援 @christinadamianou
- G7 支援 @MilosKozak @rICTx-T1D @khskekec
- NSClient v3 外掛 @MilosKozak
- Tidepool 支援 @MilosKozak
- 平滑外掛 @MilosKozak, @justmara, 指數平滑 @nichi (Tsunami), 平均平滑 @jbr7rr
- DynamicISF 外掛 @Chris Wilson, @tim2000s
- Garmin 手錶錶面及心率支援 @buessow
- 新標誌 @thiagomsoares
- 新錶面 @Philoul
- 修復了 3.1 版本的許多問題
- 允許在更多地方添加筆記 @Sergey Zorchenko
- UI 修復 @MilosKozak @osodebailar @Andries-Smit @yodax @Philoul @dv1 @paravoid
- 新的 SMS 指令 LOOP LGS/CLOSED @pzadroga
- WearOS 翻譯 @Andries-Smit
- xDrip 通訊移至獨立模組 @MilosKozak
- 內部變更：更新的庫版本，rx3 遷移，新模組結構 @MilosKozak
- Diaconn 驅動修復 @miyeongkim
- 更多資料庫維護選項 @MilosKozak
- AAPSClient 提供主要手機是否已接入電源的訊息 @MilosKozak
- BolusWizard 的更改。如果 CGM 不可用，則忽略百分比（即使用 100%）
- 遷移到 kts 建置系統 @MilosKozak
- 改進的 CI 集成 @MilosKozak @buessow
- 測試清理 @ryanhaining @MilosKozak
- 新增 110,000 行程式碼，修改 240,000 程式碼，修改 6,884 份文件

(Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS)=
### 使用 v3 與 v1 API 進行 Nightscout 和 AAPS 資料交換的重要說明

v1 是用於在 NS 網站和 NS 伺服器之間交換資料的舊協議。他有許多限制
- v1 僅發送 2 天的資料
- 每次重新連線時，v1 都會發送所有 2 天的資料
- 必須使用 WebSocket，也就是必須保持連線，耗電量會增加
- 在頻繁中斷連線時，NS 連線會暫停 15 分鐘，以防止高資料使用量

v3 是新的協議。更加安全和高效
- 使用令牌可以更好地定義查看權限
- 協議在 AAPS 和 NS 兩端都更高效
- 他可以從 NS 讀取長達 3 個月的資料
- 可為每部裝置選擇是否使用 WebSocket（使用時更新速度較快；不使用時耗電量較低，但更新速度較慢，例如可能需要數分鐘）
- NSClient 在中斷連線時不會暫停

限制
- NS 15 必須與 AAPS 3.2 一起使用
- v3 不會看到由 v1 協議完成的更新（可能會在未來的 NS 版本中解決）
- 相反地，由於舊有的變更追蹤方法效率不佳，v1 可以看到 v3 所做的變更
- 請記住，NS 迄今仍然在內部使用 v1，因此如果您使用 v3，則無法通過 NS 網頁 UI 輸入資料。若要遠端輸入資料，必須使用 AAPSClient 或 SMS

推薦設置
- 基於以上所有原因，你應選擇一種方法並在所有設備上使用他（記住，撰寫本文時，所有其他上傳器都在使用 v1）。如果你決定使用 v3，請在 AAPS 和所有 AAPSClients 中選擇 v3
- v3 更受推崇，因為效率更高。
- 使用或不使用 v3 中的 websockets 取決於你的偏好
- 強烈建議讓 AAPS 收集所有資料，然後將其作為單一上傳器上傳到 NS。所有其他設備/應用程式應僅從 NS 讀取資料。這樣可以防止衝突和同步錯誤。這對於使用 Dexcom Share 連線器等將血糖資料上傳到 NS 也適用。

(version3100)=

## 版本 3.1.0

發布日期：2022-07-19

[版本更新說明](https://github.com/nightscout/AndroidAPS/releases/tag/3.1.0)

## 版本 3.0.0

發布日期：2022-01-31

[版本更新說明](https://github.com/nightscout/AndroidAPS/releases/tag/3.0.0)

## 版本 2.8.2

發布日期：2021-01-23

[版本更新說明](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

(version-2811)= (important-hints-2-8-1-1)=

## 版本 2.8.1.1

發布日期：2021-01-12

[版本更新說明](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.1.1)

(Releasenotes-version-2-8-0)=

## 版本 2.8.0

發布日期：2021-01-01

[版本更新說明](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.0)

(Releasenotes-version-2-7-0)=

## 版本 2.7.0

發布日期：2020-09-24

[版本更新說明](https://github.com/nightscout/AndroidAPS/releases/tag/2.7.0)

(Releasenotes-version-2-6-1-4)=

## 版本 2.6.1.4

發布日期：2020-05-04

[版本更新說明](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2614)

## 版本 2.6.1.3

發布日期：2020-05-03

[版本更新說明](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2613)

## 版本 2.6.1.2

發布日期：2020-04-19

[版本更新說明](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2612)

## 版本 2.6.1.1

發布日期：2020-04-06

[版本更新說明](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2611)

## 版本 2.6.1

發布日期：2020-03-21

[版本更新說明](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-261)

(Releasenotes-version-2-6-0)=

## 版本 2.6.0

發布日期：2020-02-29

[版本更新說明](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-260)

## 版本 2.5.1

發布日期：2019-10-31

[版本更新說明](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-251)

(Releasenotes-version-2-5-0)=

## 版本 2.5.0

發布日期：2019-10-26

[版本更新說明](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-250)

## 版本 2.3

發布日期：2019-04-25

[版本更新說明](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-23)

## 版本 2.2.2

發布日期：2019-04-07

[版本更新說明](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-222)

## 版本 2.2

發布日期：2019-03-29

[版本更新說明](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-22)

## 版本 2.1

發布日期：2019-03-03

[版本更新說明](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-21)

## 版本 2.0

發布日期：2018-11-03

[版本更新說明](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-20)

## 版本 1.0

```{admonition} First version of **AAPS**
:class: note

第一個測試版本始於 2015 年，第一個正式釋出於 2016 年。

目前無法提供這些版本的精確時間順序，但由於這個問題被多次提出，我們在此加以記錄。

```
![AAPS 1.0](../images/update/AAPS1.0.png)
