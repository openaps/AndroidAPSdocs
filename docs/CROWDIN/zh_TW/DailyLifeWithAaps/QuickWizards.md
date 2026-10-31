(quickwizards)=
# QuickWizards（單鍵注射）

**QuickWizard** 是一個已儲存的單鍵按鈕，適用於經常發生的用餐情況或其他情境。它會預先設定固定的**碳水化合物**份量（以及相應的注射方式），讓您只要點一下並確認，就能注射或只記錄碳水化合物，不必每次都開啟完整的注射計算機。

```{contents} Table of contents
:depth: 2
:local: true
```

---

## 開啟 QuickWizards

開啟**管理**畫面（底部導覽列），然後選擇**QuickWizard**（*「管理 QuickWizard 預設項目」*）。

---

## 管理快速嚮導

快速嚮導會以**可左右滑動的卡片輪播**顯示（每張卡片會顯示按鈕文字、碳水化合物和有效時間範圍）。下方的編輯器用來設定**目前選取的**快速嚮導；底部操作列包含**➕ 新增**、**⧉ 複製**、**🗑️ 刪除**，以及用來執行選取快速嚮導的**▶**按鈕。

![快速嚮導編輯器 — 模式、碳水化合物、碳水化合物時間和有效時間範圍](../images/v4/QuickWizard/quickwizard_editor.png)

編輯器的主要欄位如下：

- **按鈕文字** — 按鈕上顯示的標籤。
- **碳水化合物**和**碳水化合物時間** — 碳水化合物的份量及其時間偏移。
- **有效時間範圍** — 請參閱[有效時間](#quickwizard_validity)。
- **計算機選項**和**設備選擇** — 請參閱下方說明。

---

## 三種模式

編輯器頂端的選擇器 — **嚮導 / 胰島素 / 碳水化合物** — 可設定**按下按鈕時要執行的動作**：

- **嚮導** — 根據設定的碳水化合物，使用目前的**血糖、活性胰島素、活性碳水化合物和趨勢**執行完整的**注射計算機**（依據下方的*計算機選項*）。系統會注射*計算得出的*胰島素量，並記錄碳水化合物。這就是傳統的快速嚮導。
- **胰島素** — 注射你設定的**固定預設胰島素量**，不會進行計算。
- **碳水化合物** — **只**記錄設定的碳水化合物，**不注射胰島素**。

---

## 計算機選項（嚮導模式）

若按鈕設為**嚮導**模式，你可以選擇計算時使用哪些輸入資料：

- **使用血糖**、**使用活性碳水化合物**、**使用活性胰島素**（含*僅使用正值活性胰島素*）、**使用趨勢**（*全部 / 僅正值 / 僅負值*）、**使用臨時目標**、**使用警報**。
- **注射百分比** — 調整計算出的注射量。
- **新增延伸碳水化合物** — 同時安排延伸碳水化合物。

![計算機選項、注射百分比和設備選擇](../images/v4/QuickWizard/quickwizard_options.png)

---

## 有效時間 — 按鈕何時顯示

(quickwizard_validity)= **有效時間範圍**（*從 / 至*）會控制快速嚮導**何時**顯示及可供使用。例如，若將按鈕的時間設為**06:00–10:00**，它只會在早上顯示，這樣**早餐**快速嚮導就不會在晚餐時出現在螢幕上造成干擾，也不會被誤按。在設定的時間範圍之外，按鈕會從**治療**底部面板和[QuickLaunch 工具列](QuickLaunch.md)中隱藏。工具列上的按鈕不會被刪除；時間範圍再次開始時，按鈕就會重新顯示。

如果有效時間範圍少於 4 小時，使用按鈕後也會隱藏 30 分鐘，以免不小心重複輸入同一餐。

---

## 使用位置 — 在哪裡使用

**設備選擇**中的開關可決定各個快速嚮導的顯示位置：

- **在手機上顯示** — 快速嚮導會出現在**[治療](../Maintenance/V4Changes.md)底部面板**中（按鈕上會直接顯示計算出的劑量）。在手機上顯示的快速嚮導也可以**釘選為總覽畫面上的快速操作按鈕**：開啟*設定 QuickLaunch*（位於[QuickLaunch](QuickLaunch.md)工具列上的 ⚙），然後從**快速嚮導**類別中新增。
- **在手錶上顯示** — 快速嚮導會出現在**Wear OS 快速嚮導圖塊**中（在手錶的圖塊輪播中滑動到該圖塊，再點選按鈕執行，就像[場景圖塊](#scenes-from-watch)一樣）。

```{admonition} Don't see Device Selection?
:class: note
只有在啟用 **Wear** 外掛，且開啟 **Wear 控制**偏好設定時，編輯器中才會顯示 **設備選擇**區段。若未啟用，所有快速嚮導都只會顯示在手機上。
```

在手機上，快速嚮導會顯示於**治療**底部面板的頂端：

![治療底部面板開啟時，快速嚮導會顯示在頂端](../images/v4/QuickWizard/quickwizard_in_treatments.png)

……也會以快速操作按鈕的形式顯示在總覽畫面上：

![總覽畫面上的快速嚮導快速操作按鈕](../images/v4/QuickWizard/quickwizard_overview.png)

![Wear OS 手錶上的快速嚮導圖塊](../images/v4/QuickWizard/quickwizard_watch_tile.png)

配對的**用戶端**（**AAPSClient**）也可以觸發快速嚮導 — 由**主控端**進行計算並執行（請參閱[主控端 ↔ 用戶端控制](../RemoteFeatures/ClientMasterControl.md)）。

無論從哪裡觸發，點選快速嚮導後，一律會先顯示**確認畫面**（從用戶端或手錶觸發時，會顯示由主控端設定的確認畫面），之後才會執行任何操作。

如果快速嚮導的劑量超過最大注射量，或碳水化合物及延伸碳水化合物超過碳水化合物上限（例如你調低上限後），系統就會拒絕執行。如果碳水化合物超過上限，**治療**底部面板中的按鈕就會停用。請編輯快速嚮導或上限。

---

## 新增和移除

- **➕ 新增** — 建立新的快速嚮導。
- **⧉ 複製** — 複製現有項目作為起點。
- **🗑️ 刪除** — 移除快速嚮導。

若有兩個以上的快速嚮導，也可以調整它們在輪播中的順序：點選頂端列的**重新排序**圖示（⇅），使用**◀ / ▶ 移動按鈕**移動目前置中的卡片，然後按**✓**確認。（操作方式與[重新排序設定檔](ProfileSwitch-ProfilePercentage.md)相同。）

QuickWizards 屬於同步組態的一部分，因此會在您的主控端與配對用戶端之間共用。

---


<!-- =====================================================================
     Screenshots captured from a real master device:
       - quickwizard_editor.png   (Manage → QuickWizard: carousel, mode, carbs, carb time, valid time range)
       - quickwizard_options.png  (Calculator Options, Bolus percentage, Device Selection)
       - quickwizard_overview.png (the QuickWizard quick-action button on the overview)
       - quickwizard_watch_tile.png (the Wear OS QuickWizard tile)
     No QuickWizard was actually run (no bolus delivered).
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
