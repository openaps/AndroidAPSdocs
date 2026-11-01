(v4-changes)=
# AAPS v4 有哪些變更

本頁整理了 **AAPS** v3 與 v4 之間值得注意的**行為變更**：包括功能運作方式不同、位置變更或已移除的項目，讓現有使用者在更新前了解預期的變化。另請參閱[版本說明](ReleaseNotes.md)和[更新手冊](UpdateToNewVersion.md)。

```{contents} Table of contents
:depth: 2
:local: true
```

---

## 已移除 NSClient v1

**AAPS** v3 提供**兩個** Nightscout 同步外掛：

- **NSClient** — 舊版用戶端（舊版 Nightscout REST／socket.io API，也稱為 *「v1」*），以及
- **NSClientV3** — 用於新版 Nightscout **API v3** 的用戶端。

在 **AAPS** v4 中，舊版 **NSClient (v1)** 外掛已**移除**。現在只保留 **NSClientV3**，用於與 Nightscout 同步。

```{admonition} What you need to do
:class: important
如果你（或追蹤你的 **AAPSClient** 使用者）仍使用舊版 **NSClient (v1)** 外掛同步，請在更新前或更新後切換至 **NSClientV3**：

- 開啟 **[組態設定工具](../SettingUpAaps/ConfigBuilder.md) → 通訊 → NSClientV3**。
- 輸入你的 **Nightscout 網址**和**存取權杖**（NSClientV3 使用存取權杖，*而非*舊版 API 密鑰；請參閱[建立權杖](https://nightscout.github.io/nightscout/security/#create-a-token)）。你的 Nightscout 網站必須支援 **API v3**（Nightscout 15 或更新版本）。如果你使用 **websocket**，請在主機和追蹤端上**同時**啟用或停用，切勿只在其中一端設定。
```

這只會影響應用程式與 Nightscout 的通訊方式，不會變更 Nightscout 上的資料。

---

## 底部導覽列：治療、情境和管理

在 **AAPS** v3 中，你可以透過一列**分頁**切換應用程式畫面（總覽、動作、治療等），也有一些功能是需要在組態建置工具中啟用的**外掛**（**動作**、**自動化**、**食物**等）。

在 **AAPS** v4 中，分頁已移除，組態建置工具中用來將外掛顯示為分頁的眼睛核取方塊也一併移除。主畫面是**總覽**，底部則設有**底部導覽列**，可開啟三個面板。**動作、自動化和食物不再是外掛**——你不需要在[組態設定工具](../SettingUpAaps/ConfigBuilder.md)（原組態建置工具）中啟用這些功能；現在可以在對應的面板中使用。

(v4changes-treatments)=
### 治療 — 輸入並執行

**治療**面板可用來記錄或執行治療：**注射嚮導**、**胰島素**（手動注射）、**碳水化合物**、**治療**（同時輸入胰島素和碳水化合物）、**校正**、**CGM**（設定 CGM 應用程式時，可在此開啟），以及你的**[快速嚮導](../DailyLifeWithAaps/QuickWizards.md)**。

![治療底部面板](../images/v4/BehavioralChanges/treatments_sheet.png)

使用 **Wear OS 手錶**時，也可以從手錶的 **AAPS 選單**輸入相同的治療項目（注射嚮導／計算機、eCarbs、治療等）：

![手錶 AAPS 選單中的治療操作](../images/v4/BehavioralChanges/treatments_watch.png)

### 情境

你的情境預設值 — 請參閱[情境](../DailyLifeWithAaps/Scenes.md)。

(v4changes-manage)=
### 管理 — 管理及啟用

**管理**面板可用來管理及啟用其他項目：**[設定檔](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)**、**胰島素設定**（你的胰島素組態）、**[臨時目標](../DailyLifeWithAaps/TempTargets.md)**、**[快速嚮導](../DailyLifeWithAaps/QuickWizards.md)**預設值、**[情境](../DailyLifeWithAaps/Scenes.md)**、**自動化**、**食物**、**注射部位輪替**、**幫浦**、**[已授權的用戶端](../RemoteFeatures/ClientMasterControl.md)**，以及過去位於*動作*分頁的幫浦操作（**延長注射**、**取消臨時基礎率**、**預充／填充**、**插入傳感器**、**更換幫浦電池**）。

![管理底部面板](../images/v4/BehavioralChanges/manage_sheet.png)

所有現有的自動化規則和食物項目都會保留；變更的只有前往這些功能的方式。

(screens-action-tab)=
#### 動作分頁移到哪裡了？

**AAPS** 3.x 有「動作」分頁。在 **AAPS** 4 中，這些功能已移至其他位置：

* **切換設定檔**和**設定檔百分比**：點選主畫面上的[設定檔名稱](#aaps-screens-profile--target)，或前往**管理 → 設定檔**。請參閱[變更設定檔百分比](#ProfileSwitch-change-percentage)。
* **臨時目標**：點選主畫面上的[目標](#aaps-screens-profile--target)，或前往**管理 → 臨時目標**。
* **預充／填充**、**插入傳感器**、**血糖檢查**和其他照護入口項目：可在展開的[狀態面板](#aaps-screens-careportal)、**管理**中，或透過[快速啟動](../DailyLifeWithAaps/QuickLaunch.md)按鈕使用。
* **歷史記錄瀏覽器**、**統計資料**（TDD）：位於**選單**（☰）中。

```{admonition} Profile switch and profile percentage
:class: note
在 **AAPS** v3 中，長按設定檔名稱會開啟設定檔切換對話方塊（百分比、持續時間、活動臨時目標）。在 **AAPS** v4 中，**點選**設定檔名稱（或前往 **管理 → 設定檔**），再點選右下角的圓形 **▶** 按鈕，即可開啟相同的設定。請參閱[變更設定檔百分比](#ProfileSwitch-change-percentage)。
```

---

(v4changes-read-only-management)=
## 設定保護現在也會鎖定管理畫面

在 **AAPS** v3 中，只有在開啟[設定保護](#Preferences-settings-protection)時，才會要求輸入密碼。即使沒有輸入密碼，你仍可在**本機設定檔**分頁新增或編輯設定檔。

在 **AAPS** v4 中，設定保護也會限制你在管理畫面中編輯內容：包括**設定檔**、**胰島素設定**、**臨時目標**和**快速嚮導**。如果設定已鎖定，這些畫面會以**唯讀**模式開啟：

- 你可以瀏覽項目，並點選**▶ 啟用**或使用這些項目。
- **新增／編輯／複製／刪除**按鈕會**隱藏**。只有頂端列中的 **✏️ 鉛筆**圖示會顯示您可以解鎖編輯功能。

![唯讀的設定檔畫面 — 底部只有「註冊」按鈕，頂端列有鉛筆圖示](../images/v4/Profiles/profile_manage_readonly.png)

```{admonition} What you need to do
:class: important
若要新增、編輯、複製或刪除項目，請點選頂端列中的 **✏️ 鉛筆**圖示，並輸入設定密碼（或使用生物辨識）。按鈕隨即顯示。

如果您不需要保護設定，可以在 **設定 → 保護**中關閉設定保護。
```

---

(v4changes-active-insulin)=
## 使用中的胰島素無法編輯

在 **AAPS** v3 中，您隨時都可以變更目前使用胰島素的 DIA。

在 **AAPS** v4 中，**管理 → 胰島素設定**中標示為 **啟用中**的胰島素會呈現灰色，無法編輯或刪除。

升級時，**AAPS** 會保留 v3 個人設定檔切換中已儲存的胰島素和 DIA。如果系統找到較舊的紀錄，其中已知胰島素種類，但沒有 DIA，便會為這些紀錄套用預設 DIA，並顯示一次訊息，例如：*較舊的紀錄未提供胰島素作用時間，因此 Lyumjev 使用了 9.0 小時。請檢查胰島素設定 — 已轉移的紀錄之後不會再更新。*看到這則訊息時，請檢查您的胰島素設定。

```{admonition} What you need to do
:class: important
若要變更 DIA 或峰值，請按 **+** 新增胰島素、調整設定、儲存，然後按 **▶ 註冊**。請參閱[變更使用中的胰島素](#Config-Builder-insulin-change-active)。
```

---

(v4changes-remote-control)=
## AAPSClient 遠端控制需要配對

在 **AAPS** v3 中，**AAPSClient** 會將照護入口的治療資料寫入 Nightscout，以此控制 **AAPS**，但無法注射胰島素。

在 **AAPS** v4 中，Client 和主手機只需**配對**一次，之後每個指令都會經過簽章。主手機會檢查並確認每個指令，Client 現在也可以注射胰島素。

- 每個 Client 都有一個**[角色](#client-master-control-roles)**，用來限制它可以執行的操作。
- 啟用 Client 控制時，主手機會進入**[強化模式](#client-master-control-hardened-mode)**：直接輸入 Nightscout（網站或其他 App）的治療資料和變更將不再套用。
- 每個 Client 都會取得一組**[專屬的 Nightscout 權杖](#client-master-control-own-token)**，且僅具備所需的權限。

```{admonition} What you need to do
:class: important
請將每部 **AAPSClient** 與主手機配對：請參閱[主控端 ↔ 用戶端控制](#client-master-control)。主手機使用管理員權杖時，會顯示 QR Code；掃描一次即可設定並配對 Client。如果您過去會在 Nightscout 網站輸入治療資料，請改用已配對的 Client 輸入。
```

---

## 血糖資料重複時，循環現在會切換至低血糖暫停模式

當 **AAPS** 收到兩筆相同的血糖讀取值時（底部列的血糖來源捷徑上會出現紅色警告徽章），系統便無法可靠地計算趨勢，因此會停止注射校正胰島素。

在 **AAPS** v3 中，這個情況會在背景中悄悄發生：即使循環已無法進行校正，仍會顯示為**閉環**。

在 **AAPS** v4 中，這項變化會清楚顯示。閉環會切換至**低血糖暫停**模式，循環對話框也會說明原因：*「血糖來源有重複讀取值，因此進入 LGS 模式」*。 **AAPS** 仍可降低或暫停基礎胰島素，以避免您發生低血糖。

```{admonition} What you need to do
:class: important
請找出並移除重複的讀取值 — 請參閱[血糖警告標記](#aaps-screens-bg-warning-sign)。

重複資料移除後，**AAPS** 仍會維持在**低血糖暫停**模式。系統不會自行切回**閉環**：請長按循環圖示，然後再次選取**閉環**。
```

---

(v4changes-tidepool)=
## Tidepool：資料現在會顯示在裝置名稱 AAPS 下

在 **AAPS** v3 中，上傳至 [Tidepool](../SettingUpAaps/Tidepool.md) 的資料會以另一個裝置名稱顯示。

在 **AAPS** v4 中，資料會顯示在裝置名稱 **AAPS** 下。更新後，**AAPS** 會在 Tidepool 中建立新的資料集。舊資料仍會以舊的裝置名稱保留在 Tidepool 中。

```{admonition} What you need to do
:class: important
通常不需要採取任何動作：新資料只會顯示在 **AAPS** 下。

舊資料仍在 Tidepool 中時，請**不要**執行「**完整同步**」：否則同一筆資料會出現兩次。如果您希望所有資料都顯示在新名稱下，請先按一下 [Tidepool 畫面](#tidepool-menu)上的「**清除所有資料**」按鈕（這也會刪除 **AAPS** 上傳的舊資料），然後再執行「**完整同步**」。只有仍儲存在手機 **AAPS** 中的資料才能再次上傳。
```

---


<!-- =====================================================================
     This page is a growing list of v4 behavioral changes.
     Add new changes as their own "## " section, newest grouping as agreed.
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
