(食物)=
# 食物（你的食物資料庫）

**食物**資料庫是你個人儲存的食物清單。每筆項目都會記錄食物的**碳水化合物**含量（也可選擇記錄脂肪、蛋白質、熱量及分類），讓你能將常吃的食物集中管理，並直接使用已儲存食物中的碳水化合物含量開始注射。

```{contents} Table of contents
:depth: 2
:local: true
```

---

## 開啟食物資料庫

開啟**管理**畫面（底部導覽列），然後選取**食物**（*「管理食物資料庫項目」*）。在 **AAPS** v4 中，食物功能**已不再是外掛**，因此不需要啟用；這是獨立的畫面，可從[管理面板](#v4changes-manage)開啟。

---

## 食物清單

你的食物會以可捲動的清單顯示。每列會顯示食物的**名稱**、**份量／單位／分類**及**碳水化合物**含量：

![食物資料庫清單，包含搜尋功能和新增按鈕](../images/v4/Food/food_list.png)

- **🔍 搜尋**（上方）— 依**名稱**篩選清單（不區分大小寫）。
- **分類篩選器**— 點選分類標籤即可縮小清單範圍；選取分類後，會顯示該分類的**子分類**標籤。（再次點選已選取的標籤即可清除篩選。）
- **➕**（右下角）— 新增食物（請參閱下方說明）。
- 點選某一列即可**編輯**該食物。

如果清單（或目前的篩選結果）沒有項目，畫面會顯示**沒有資料**。

---

## 新增及編輯食物

點選**➕**即可新增食物，或點選現有項目進行編輯。編輯器會以底部面板開啟（**新增食物**／**編輯食物**）：

![食物編輯器 — 名稱、分類、份量、碳水化合物及營養素](../images/v4/Food/food_editor.png)

欄位如下：

- **名稱**— 必填（未填寫就無法儲存）。
- **分類**和**子分類**— 選填，用來將食物分組或篩選。
- **份量**和**單位**— 一般食用份量；**單位**預設為 **g**。
- **碳水化合物（g）**— 食物所含的碳水化合物量。
- **脂肪（g）**、**蛋白質（g）**、**熱量（kJ）**— 選填的營養資訊。

點選**儲存**以儲存資料，或點選**取消**以放棄變更。編輯現有食物時，編輯器也會顯示**刪除**按鈕。

```{admonition} Deleting is undoable
:class: note
刪除食物後會顯示 **「食物已刪除」** 訊息，並提供 **復原** 選項，方便你還原不小心刪除的食物。
```

---

## 使用食物進行注射

每筆食物項目旁都有**計算機**按鈕。點選後會開啟**注射嚮導**，並預先填入該食物的**碳水化合物**含量，也會將食物**名稱**加入治療備註，讓你確認後即可執行注射，不必重新輸入碳水化合物含量。

```{admonition} The carbs value is used as-is
:class: note
食物中儲存的<strong>碳水化合物</strong>數值會直接傳入嚮導 — <strong>AAPS</strong> 不會依照份量或實際食用量換算。如果實際食用量不同，請在確認前於嚮導中調整碳水化合物含量。（注射嚮導或碳水化合物對話方塊中沒有食物選擇器；你必須從這裡的食物項目開始操作。）
```

---

## 食物的來源（Nightscout 同步）

食物資料庫透過 **Nightscout** 共用，但**資料只會單向傳輸**：

- **下載：****AAPS** 會從你的 Nightscout 網站**讀取****食物資料庫**中的食物，並讓本機清單與其保持同步。這項作業會在 NSClient 同步時一併執行，因此配對的**用戶端／追蹤者**也會取得相同的食物清單。
- **上傳：****AAPS****不會**將食物**上傳至**Nightscout — NSClient 不支援上傳食物項目。因此，你在**AAPS 中**建立或編輯的食物只會**保留在該裝置**上，不會同步到 Nightscout 或你的其他裝置。

```{admonition} Maintain your shared list in Nightscout
:class: important
由於食物資料<strong>只能下載</strong>，若要讓手機、追蹤者／[用戶端](../RemoteFeatures/ClientMasterControl.md)及其他裝置共用同一份食物清單，請在<strong>Nightscout</strong>（內建的食物編輯器）中管理清單。 <strong>AAPS</strong> 會下載這些項目。只在 <strong>AAPS</strong> 中新增的食物只會保留在該裝置上。下載資料時會依照 Nightscout ID 比對 Nightscout 項目，因此只會新增或更新這些項目，不會覆寫或移除你在本機建立的食物（只有在 Nightscout 中刪除該食物的 Nightscout 版本時，才會移除該食物）。

請注意，食物資料庫也<strong>不會</strong>透過主控端 ↔ 用戶端的簽章控制通道傳輸，而是僅以 Nightscout 資料的形式傳輸。
```

---

## 手錶上無法使用

食物資料庫是**手機**上的功能；**Wear OS 手錶**上沒有食物瀏覽器、圖塊或選單。

---


<!-- =====================================================================
     Screenshots captured from a real master device:
       - food_list.png    (Manage → Food: list row, search, add button)
       - food_editor.png  ("Add Food" editor: name/category/subcategory/portion/unit/carbs/fat/protein/energy)
     No food was created or deleted (the editor was cancelled).
     Sync facts code-verified: download via LoadFoodsWorker.getFoods(); upload disabled
     (DataSyncSelectorV3 processChangedFoods() commented out — "NSCv3 doesn't support food update").
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
