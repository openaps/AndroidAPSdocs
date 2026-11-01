
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

**Release notes of the latest version of each major release**. For all other versions, see the [releases on GitHub](https://github.com/nightscout/AndroidAPS/releases).

(latestrelease)=

(version400)=

**版本 4.0.0**

發布日期：2106-02-31

**新功能**

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
- New [automation actions](#automations-automation-action): **Change smoothing** @olorinmaia, and **Run**, **Enable** or **Disable scene** @MilosKozak
- [注射部位輪替](#Aapsscreens-site-rotation)：追蹤並輪替輸注部位 @Philoul @MilosKozak
- [Autotune](../AdvancedOptions/Autotune.md) 改版 @Philoul
- 新增[小工具](../DailyLifeWithAaps/Widgets.md) @MilosKozak @t1dude
- 無障礙功能：手機 App 可搭配螢幕閱讀器使用，提供控制項名稱、語音狀態提示、圖表說明及便於快速瀏覽的標題 @MilosKozak
- [匯入設定](../Maintenance/ExportImportSettings.md)時可保留幫浦設定 @MilosKozak
- 持續通知採用 Android 即時更新功能，支援 Samsung Now Bar 和 delta @premnirmal
- 血糖圖表：在總覽的每張圖表上[按住](#aaps-screens-graph-press-and-hold)，即可查看讀取值 @t1dude @olorinmaia
- 效能改進 @MilosKozak
- 注射嚮導中新增自動 e-carb 功能 @MilosKozak

**新裝置**

- **CareLevo**：新增[幫浦驅動程式](../CompatiblePumps/CareLevo.md) @Kisu-Choi @MilosKozak
- **Dana-i2**：新增支援 @MilosKozak
- **Instara**：新增 CGM 資料來源 @leohunt

**幫浦驅動程式改進**

- 重新設計 Insight、Medtronic、Medtrum、Omnipod、Dana、Diaconn 和 Equil 的幫浦總覽畫面 @MilosKozak
- **Omnipod Dash**：PDM 樣式的參考代碼和易讀的故障說明、始終啟用漂移補償，以及更完善的注射類型回報 @nl-ruud
- **Omnipod**：Dash 和 Eros 的強制到期日 @mcnelson
- **DanaR、RS**：新增幫浦模擬器供測試使用 @MilosKozak
- **Equil**：新增幫浦模擬器供測試使用 @MilosKozak
- 修正多項幫浦和循環功能問題 @MilosKozak 等人

**Wear OS**

- [手錶 App](../WearOS/WearOsSmartwatch.md)以 Compose 重新打造，新增錶面資訊方塊和錶面功能，並可在 Wear OS 6 以上版本自動安裝錶面（Watch Face Push）@olorinmaia @Philoul
- CustomWatchface 支援 Wear OS 6.0（GW7、GW8、GW9 等），並提供專用的 WFF 錶面 @Philoul @olorinmaia
- CustomWatchface 現在可加入 5 個可自訂的錶面功能欄位（這項新功能僅適用於較舊款手錶）@Philoul
- 新增[以 AAPS 錶面功能為基礎的 WFF 錶面](#wearos-complications-watchface-setup) @olorinmaia
- 修正注射嚮導和快速嚮導的結果 @olorinmaia
- 主選單新增血糖圖表和「運動模式」活動 @olorinmaia
- 注射嚮導：新增[餐點類型](#WearOsSmartwatch-wizard-meal-type)頁面，可像手機版嚮導一樣拆分碳水化合物；並新增[碳水化合物時間](#WearOsSmartwatch-wizard-carb-time)功能，可在手錶上提醒*用餐時間* @olorinmaia
- [在手錶上顯示手機鬧鐘](#WearOsSmartwatch-phone-alarms)：手錶會顯示鬧鐘，並提供靜音和靜音 5 分鐘的選項 @olorinmaia

**建置**

- CI 工作流程支援標籤／分支建置，並加入 JDK 版本對應 @Angus-repo

**貢獻者**

@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

完整變更記錄：<https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

---

(version3426)=

**版本 3.4.2.6**

- Equil： 提升穩定性 @MilosKozak

---

(version3321)=

**版本 3.3.2.1**

發布日期：2025-08-13

- 修正 Omnipod 在 Android 16 的藍牙連線問題
- CI 流程 (瀏覽器版)
- 修正 mmol-mgdl 轉換問題
- 修正某些時區對話框中的錯誤時間選擇
- 修正簡單模式下的金鑰讀取問題
- 修正穿戴設備上的預測遺漏問題
- 改善 ConfigBuilder
- 改善 NSCv3 完全同步

---

(version3300)=

**版本 3.3.2.0**

發布日期：2025-03-27

**如何升級**

* [需要 Android Studio 版本為 "Meerkat" 或以上版本才能建置此版本。](#Building-APK-recommended-specification-of-computer-for-building-apk-file)如果你已經建置了 3.3.x 版本，你需要再次升級 Android Studio。

(version-enforcement)=

**從此版本開始，通知和版本強制執行機制已簡化並放寬，運作方式如下：**

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

Other changes: [release notes on GitHub](https://github.com/nightscout/AndroidAPS/releases/tag/3.3.2.0).

---

(version3204)=

**[版本 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)**

發布日期：2024-02-27

此版本為最後一個支援 Android 10 的版本。如果您無法升級到 Android 11，[請將 AAPS 更新至 3.2.0.4](#update-aaps-3204)。

**變更**

- xDrip G7 支援
- Medtrum 修復
- 自動化圖示修復
- 目標 1 傳遞修復

---

**版本 2.8.2**

發布日期：2021-01-23

[版本更新說明](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

---

**版本 1.0**

```{admonition} First version of **AAPS**
:class: note

第一個測試版本始於 2015 年，第一個正式釋出於 2016 年。

目前無法提供這些版本的精確時間順序，但由於這個問題被多次提出，我們在此加以記錄。

```
![AAPS 1.0](../images/update/AAPS1.0.png)
