# AAPS 螢幕畫面

```{contents}
:backlinks: entry
:depth: 2
```

(the-homescreen)= (AapsScreens-the-homescreen)=

## 主畫面

![主畫面](../images/Home_Homescreen.png)

這是你打開**AAPS**後會看到的第一個螢幕，裡面包含了你每天所需的大部分資訊。

### 區塊 A－頂端列

* 點選左側的**選單**（☰），即可開啟導覽抽屜，查看**治療紀錄**、**歷史紀錄瀏覽器**、**統計資料**、**設定檔輔助工具**、**維護**、**設定嚮導**、**組態設定**等項目。
* **搜尋列**可搜尋設定、對話方塊及說明文件，只要開始輸入即可（請參閱[全域搜尋](../DailyLifeWithAaps/GlobalSearch.md)）。
* 點選右側的**設定**（齒輪）圖示，即可開啟所有[設定](../SettingUpAaps/Preferences.md)。

(aaps-screens-profile--target)=

### 區塊 B－狀態區

#### 目前血糖值

左側的大圓圈會顯示 CGM 最近一次的血糖讀取值，以及與前一次讀取值的差異（變化量）和讀取值的時間。

血糖值的顏色反映了對定義的[範圍](#Preferences-range-for-visualization)的狀態。

* 綠色 = 在範圍內
* 紅色 = 低於範圍
* 黃色 = 高於範圍

![血糖圓圈顯示在目標範圍內，呈綠色](../images/Home_Delta.png) ![血糖圓圈顯示高於目標範圍，呈黃色](../images/Home_Delta_high.png) ![血糖圓圈顯示低於目標範圍，呈紅色](../images/Home_Delta_low.png)

(loop-status)= (AapsScreens-loop-status)=

#### 循環狀態

![循環狀態](../images/Home2020_LoopStatus.png)

血糖圓圈旁的圖示會顯示循環的運作模式（由上至下，如圖所示）：

1. 綠色圓圈 = [封閉循環](#KeyAapsFeatures-ClosedLoop)，循環執行中
2. 紫色虛線圓圈 = [低血糖暫停（LGS）](#KeyAapsFeatures-LGS)
3. 藍色虛線圓圈 = [開放循環](#KeyAapsFeatures-OpenLoop)
4. 紅色圓圈內有叉號＝循環已停用（持續無法運作）
5. 紅色暫停圖示＝循環已暫停（暫時停止，但仍會注射基礎胰島素）；圖示旁會顯示剩餘時間
6. 灰色圓圈內有插頭＝幫浦已中斷連線（暫時完全不注射胰島素）；圖示旁會顯示剩餘時間

點選圖示即可開啟循環對話方塊。對話方塊的內容會依目前狀態而有所不同：

* 循環**運作中**（閉合、開放或 LGS）時，您可以切換運作模式（閉合循環、低血糖暫停、開放循環或停用循環）、**暫停**循環，或讓幫浦**中斷連線**一段指定時間。
* 循環**已停用**時，您可以選擇運作模式重新啟用循環，或讓幫浦中斷連線。
* 循環**已暫停**時，您可以**恢復**循環、讓幫浦中斷連線，或在**暫停循環**下選擇新的時間，以延長暫停時間。
* 幫浦**已中斷連線**時，您可以讓幫浦**重新連線**，或在**中斷幫浦連線**下選擇新的時間，以延長中斷連線時間。

延長暫停或中斷連線時間時，新設定的時間會**從現在開始計算**：它會取代剩餘時間，而非加在剩餘時間上。您不需要先恢復循環或重新連線。

循環在閉合循環模式下運作時的對話方塊：

![閉合循環模式的循環對話方塊](../images/loop/loop_dialog_closed_loop.png)

循環暫停時的對話方塊，包含**恢復**選項及可延長暫停時間的選項：

![循環暫停時的循環對話方塊](../images/loop/loop_dialog_suspended.png)

幫浦中斷連線時的對話方塊，包含**重新連線幫浦**選項及可延長中斷連線時間的選項：

![幫浦中斷連線時的循環對話方塊](../images/loop/loop_dialog_disconnected.png)

低血糖暫停、開放循環及循環停用時的對話方塊，差別只在於提供的運作模式不同：

![低血糖暫停模式的循環對話方塊](../images/loop/loop_dialog_lgs.png)

![開放循環模式的循環對話方塊](../images/loop/loop_dialog_open_loop.png)

![循環停用時的循環對話方塊](../images/loop/loop_dialog_disabled.png)

以下是主畫面在各種模式下的顯示樣式。切換模式時，圖表頂端的色帶也會隨之改變。

低血糖暫停:

![低血糖暫停模式的主畫面](../images/main/main_screen_loop_lgs.png)

開環:

![開放循環模式的主畫面](../images/main/main_screen_loop_open.png)

循環已停用:

![循環停用時的主畫面](../images/main/main_screen_loop_disabled.png)

循環已暫停－圖示旁會顯示剩餘時間：

![循環暫停時的主畫面](../images/main/main_screen_loop_suspended.png)

幫浦已中斷連線－圖示旁會顯示剩餘時間。治療按鈕仍會顯示在快速啟動工具列中，因此您仍可記錄使用注射筆注射的胰島素或攝取的碳水化合物：

![幫浦中斷連線時的主畫面](../images/main/main_screen_pump_disconnected.png)

每次選擇後都必須進行確認。

```{admonition} 警示：幫浦未接受零臨時基礎率 :class: warning 幫浦中斷連線時，**AAPS** 會在幫浦上維持零臨時基礎率；如果設定遺失，也會重新設定。如果 10 分鐘後仍無法成功，**AAPS** 會發出緊急警示：*「幫浦未接受零臨時基礎率。幫浦可能仍在輸注基礎胰島素。請檢查幫浦。」*警示會每 15 分鐘重複一次，直到設定好零臨時基礎率或結束中斷連線為止。如果看到這則警示，請檢查幫浦：即使 **AAPS** 顯示已中斷連線，幫浦仍可能正在輸注基礎胰島素。

    <br />請注意：可使用的模式取決於您在 [目標](../SettingUpAaps/CompletingTheObjectives.md) 中的進度；完成相關目標後，才會開放循環和 LGS 模式。
    
    (aaps-screens-bg-warning-sign)=
    #### 血糖警示圖示
    
    如果 **AAPS** 偵測到收到的血糖讀取值有問題，主畫面底部列會出現通往血糖來源的捷徑（名稱會顯示該來源，例如 **xDrip+ 血糖**），並附有紅色警示標記。點選此捷徑即可開啟[血糖來源畫面](#aaps-screens-bg-source)。
    
    ##### 重複的血糖資料
    
    紅色警示圖示表示您必須立即採取行動：您收到**重複的血糖資料**，導致循環無法正常運作。 **AAPS** 無法根據重複的讀取值可靠地計算血糖趨勢，因此會停止修正。
    
    如果循環原本處於閉合狀態，**AAPS** 會切換至[低血糖暫停（LGS）](#KeyAapsFeatures-LGS)模式：循環圖示會變成紫色。
    
      ![重複的血糖資料：LGS 循環圖示，以及帶有紅色警示標記的血糖來源捷徑](../images/bg_warn_red.png)
    
    按下循環圖示：頂端的**限制條件**卡片會說明原因：「BgQualityCheck：血糖來源的數值重複，因此使用 LGS 模式」。
    
      ![執行模式對話方塊：因數值重複而使用 LGS](../images/main/bg_doubled_constraint.png)
    
    ```{admonition} 您的循環目前以低血糖暫停模式執行
    :class: note
    循環仍會繼續運作，但只會保護您避免血糖過低：**AAPS** 仍可降低或暫停基礎胰島素，但在您解決此問題之前，不會注射任何修正胰島素！
    

你需要找出為什麼會收到重複的血糖資料：

* 你的 Nightscout 網站上是否啟用了 Dexcom 橋接？通過進入 Nightscout 實例的管理面板，編輯 "enable" 變數並刪除其中的 "bridge" 來停用橋接。 (For Heroku [details can be found here](https://nightscout.github.io/troubleshoot/troubleshoot/#heroku).)
* 是否有多個來源將你的血糖上傳到 Nightscout？如果您使用 BYODA App，請在 **AAPS** 中啟用上傳功能；如果您也有使用 xDrip，請勿在 xDrip 中啟用此功能。
* 你是否有任何會接收你的血糖，並再次上傳到你的 Nightscout 網站的追蹤者？
* 最後手段：前往 [NSClient 設定](#Preferences-nsclient)，選取同步設定，並停用「從 NS 接收 CGM 資料」選項。

若要立即移除警示並讓循環恢復修正功能，請從血糖來源畫面刪除重複項目：點選底部列中的捷徑。重複的讀取值會以紅色標示。長按讀取值即可開始選取，勾選重複項目後，點選右上角的垃圾桶圖示。

![血糖來源畫面：已選取要刪除的重複項目](../images/main/bg_source_delete_duplicates.png)

然而，當有很多重複項目時，下面的作法也許更容易排除警告

* [備份你的設定](../Maintenance/ExportImportSettings.md)，
* 在維護選單中重置你的資料庫，然後
* [再次匯入你的設定](../Maintenance/ExportImportSettings.md)

    {admonition} 請自行切回閉合循環
    :class: important
    重複項目移除後，**AAPS** 不會自行切回**閉合循環**。按下主畫面上的循環圖示，再次選取**閉合循環**。

##### 血糖資料無變化

使用某些血糖來源（Libre 1、AiDEX、Glutec、Medtronic，以及未回報感測器類型的來源）時，**AAPS** 也會檢查讀取值是否沒有變化：如果血糖在 45 分鐘內變化不到 2 mg/dL（0.1 mmol/L），就會將資料判定為錯誤。此時，血糖來源捷徑會顯示紅色的趨勢停滯標記；循環會停止任何較高的臨時基礎率，並且在讀取值再次變化之前，不會注射修正胰島素。請檢查感測器，以及傳送讀取值的 App。

##### 血糖資料不規則

讀取值以不規則的間隔傳入或有部分讀取值遺失時，**AAPS** 會根據現有讀取值重新計算每 5 分鐘的數值。例如，更換感測器後可能會發生這種情況；Libre 感測器也可能每隔幾小時就會有一兩分鐘的時間偏移。循環會繼續運作，您不需要採取任何行動。 **AAPS** 4 不再針對此情況顯示黃色警示圖示。

#### 目前的設定檔

目前使用的設定檔會顯示在星形圖示旁邊。

點選設定檔名稱即可開啟[設定檔畫面](#aaps-screens-profile)，查看設定檔詳細資訊，並[切換不同的設定檔](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)。

若要**變更設定檔百分比**（以及持續時間），請點選設定檔名稱，再點選設定檔畫面右下角的圓形 **▶**（啟動）按鈕。在 **AAPS** 3.x 中，長按設定檔名稱會開啟此畫面；在 **AAPS** 4 中，長按則不會有任何作用。操作步驟：[變更設定檔百分比](#ProfileSwitch-change-percentage)。

![目前有設定檔切換正在執行的設定檔](../images/Home2020_ProfileSwitch.png)

1. 平時顯示已啟用的標準設定檔。
2. 設定檔切換：指定百分比為 90%，剩餘時間為 9 分鐘。臨時設定檔切換執行期間，設定檔名稱會變成黃色。
3. 設定檔切換：時間偏移 1 小時，剩餘時間為 9 分鐘。

#### 目標

![臨時目標剩餘時間](../images/Home2020_TT.png)

目前的目標血糖值會顯示在設定檔名稱下方。

短按目標值即可開啟**[臨時目標](../DailyLifeWithAaps/TempTargets.md)**畫面。

1. 一般顯示：設定檔中定義的目標範圍。
2. 設定臨時目標後，目標值會變成黃色或橘色，並顯示所用預設值的圖示；括號內則會顯示剩餘分鐘數。

(AapsScreens-visualization-of-dynamic-target-adjustment)=

#### 動態目標調整的可視化

當使用[SMB 演算法](#Config-Builder-aps)和[自動感應](#Open-APS-features-autosens)功能時，**AAPS**可以根據敏感度動態調整你的目標。

請在 [OpenAPS SMB 設定](#Preferences-openaps-smb-settings)中啟用以下一個或兩個選項：

* "敏感度提高目標"
* "抗性出現時降低目標血糖"

如果 **AAPS** 偵測到胰島素阻抗或敏感度變化，目標值會與設定檔中的設定不同，並以不同顏色顯示調整後的目標值。

(aaps-screens-iob-cob-basal-sens)=

#### IOB、COB、基礎胰島素與敏感度

![IOB、COB、基礎胰島素與敏感度](../images/Home2020_TBR.png)

1. **注射器**：體內胰島素（IOB）－體內仍有作用的胰島素量  
    如果只有標準基礎胰島素持續輸注，且之前的注射沒有剩餘胰島素，體內胰島素數值就會是零。 
    * 如果最近有減少的基礎率，IOB 可能為負值。
    * 按下此標籤即可查看注射胰島素與基礎胰島素的細分數值（圖片中的第一個對話方塊；此處顯示基礎胰島素減少一段時間後的負 IOB）。
2. **穀物**：[體內碳水化合物（COB）](../DailyLifeWithAaps/CobCalculation.md)－先前用餐後尚未吸收的碳水化合物
3. 右側的青綠色按鈕會顯示**目前的基礎胰島素輸注狀態**：執行設定檔的基礎率時會顯示平直線條；啟用臨時基礎率時，圖示則會改變
4. **百分比列**會顯示目前的敏感度（[自動敏感度調整](#Open-APS-features-autosens) / [DynamicISF](../DailyLifeWithAaps/DynamicISF.md)）。當循環調整 ISF 時，這一列也會顯示設定檔的 ISF、箭頭，以及循環目前使用的 ISF，例如「80% 2.0 ↗ 2.5」。按下按鈕即可查看自動敏感度調整的數值和有效 ISF（圖片中的第二個對話方塊）。如果循環使用的數值與最近一次自動敏感度調整結果不同（例如臨時目標改變了你的敏感度），對話方塊也會顯示該數值，標示為**演算法中的自動敏感度調整**。關閉自動敏感度調整時，循環會沿用設定檔的 ISF，且不會顯示有效 ISF。

按下 IOB 標籤後開啟的 IOB 對話方塊：

![顯示注射 IOB 和基礎胰島素 IOB 的 IOB 對話方塊](../images/main/main_chip_iob.png)

按下青綠色按鈕，即可查看目前執行中的臨時基礎率、開始時間，以及已執行多久：

![臨時基礎率對話方塊](../images/main/main_chip_temp_basal.png)

(aaps-screens-carbs-required)=

#### 需要碳水化合物

![COB 標籤中顯示的所需碳水化合物量](../images/main/main_screen_carbs_required.png)

當系統偵測到需要碳水化合物時，會提供碳水化合物建議。

當 oref 演算法認為無法透過零基礎補救時，你需要碳水化合物來修正。

碳水化合物的通知會比注射計算機的通知更為精準。你可能會看到碳水化合物建議，但注射計算機卻沒有顯示缺少碳水化合物。

如果有需要，碳水化合物需求通知可以推送到 Nightscout，屆時會顯示並廣播公告。

### 區段 C - 狀態列

![狀態列](../images/Home2020_StatusLights.png)

狀態列會以視覺提示警示以下項目：

* 針頭的使用時間
* 胰島素使用時間（藥匣已使用天數）和藥匣剩餘量（單位）
* 傳感器使用時間
* 幫浦電池使用時間和電量（%）

如果超過警告門檻值，數值將顯示為黃色。

如果超過危急門檻值警告，數值將顯示為紅色。

The age is always shown in its short form, whatever the screen size: *4h* on the first day, *3d4h* later.

狀態列**展開**時，點按右側顯示的小型**設定**圖示即可調整門檻值（請參閱[狀態燈號](#Preferences-status-lights)）。

展開的狀態面板中，部分列的末端也有按鈕可記錄更換項目，並重設相應的使用時間：按下**感測器**列中的**新增**，即可記錄感測器裝設時間。如果你的幫浦支援，**導管**（或**貼片式幫浦**）和**胰島素**列會顯示**預充／填充**按鈕，而**幫浦電池**列則會顯示**新增**按鈕。

![展開的狀態面板：導管和胰島素列顯示「預充／填充」，感測器和幫浦電池列顯示「新增」](../images/main/main_status_row_expanded.png)

根據你使用的幫浦，你可能不會擁有所有這些圖示。

(screens-sensor-level-battery)=

#### 傳感器電量（電池）

適用於具有額外發射器的 CGM，例如 MiaoMiao 2。（嚴格來說，感測器必須將電池電量資訊傳送至 xDrip。）

你可以在[狀態燈號](#Preferences-status-lights)中設定門檻值。

(aaps-screens-main-graph)=

### 區段 D - 主圖表

![主圖表](../images/main/main_graph.png)

圖表顯示你的血糖 (BG)，從你的血糖傳感器 (CGM) 讀取。

在圖表上使用捲動和捏合縮放手勢，即可變更顯示的時間範圍。

綠色區域反應你的目標範圍。

此資訊也會顯示在此圖表上：

* 手動注射：藍色三角形，位於血糖曲線上方並向下指向該時間點的讀取值，旁邊標示胰島素量
* 碳水化合物紀錄：橘色三角形，位於血糖曲線下方並向上指向該時間點的讀取值，旁邊標示碳水化合物量。若餐點和注射一併輸入，會顯示為一個標記，並由讀取值分隔。
* 三角形分為小、中、大三種尺寸，依照當天輸入量相較於最大值的大小顯示。如果該時間沒有血糖讀取值（感測器資料中斷），三角形會顯示在圖表底部。
* 血糖檢查和校正：依照實際測量值繪製，方便你與感測器曲線比較
* 目標（依設定檔定義，或被臨時目標調整）：綠色線
* 設定檔切換：以星形圖示顯示在圖表頂端
* 循環狀態：當[執行模式](#AapsScreens-loop-status)不是閉環時，圖表頂端會顯示色帶：藍色 = 開環、紫色 = LGS、紅色 = 循環停用、黃色 = 循環暫停、灰色 = 幫浦中斷連線、橘色 = 超級注射（截圖中依序為紫色、黃色）。這些狀態變更的紀錄列在[執行模式](#AapsScreens-running-mode)中。
* [微量注射](#Open-APS-features-super-micro-bolus-smb)不會顯示在血糖圖表上（否則每隔幾分鐘就會出現一個），而是顯示在[IOB 圖表](#aaps-screens-iob)中。

點按圖表中的**血糖檢查**，即可查看讀取值和你輸入的備註。

(aaps-screens-graph-press-and-hold)=

#### 查看特定時間的數值

**長按**血糖圖表片刻，即可查看某個讀取值的相關數值。圓點會標示最近的讀取值；所有圖表都會在該時間點顯示一條虛線，圖表頂端的彈出視窗則會顯示：

* 時間和血糖值
* 該時間點的 IOB、COB（僅在大於 0 g 時顯示）和基礎率；基礎胰島素圖示會像主畫面一樣，顯示當時是否正在執行臨時基礎率
* 該時間點的注射、微量注射或碳水化合物，並使用與圖表相同的三角形標記

手指持續按住螢幕，左右移動即可切換不同的讀取值。每切換到一個讀取值時，你會感覺到輕微的震動；操作期間圖表不會捲動。放開手指後，彈出視窗會保留 2 秒。

血糖圖表下方的[其他圖表](#aaps-screens-additional-graphs)（IOB、COB 等）也能以相同方式操作：長按任一圖表即可。

![長按血糖圖表：彈出視窗會顯示時間、血糖、IOB 和基礎率](../images/main/graph_press_and_hold.png)

(aaps-screens-graph-clock-change)=

#### Clock changes

When the clock of the phone jumped, at a daylight saving change or in a new time zone, a dashed vertical line marks that moment in the BG graph, with a small clock icon at its foot. The same dashed line runs through the [additional graphs](#aaps-screens-additional-graphs) below.

![The clock-change marker: a dashed line with a clock icon, next to the now line](../images/main/graph_clock_change.png)

(AapsScreens-activate-optional-information)=

#### 啟用可選資訊

按下圖表右上角的**鉛筆**圖示，即可開啟圖表設定：

![主圖表設置](../images/Home2020_MainGraphSetting.png)

* **圖表高度**會調整圖表繪製的高度。
* **ACT**會疊加胰島素作用曲線：一條實線黃綠色曲線 <span style="background:#141218;color:#D3F166;padding:0 0.3em;border:1px solid #141218;border-radius:4px">━━━━</span>（請勿與黃色虛線 UAM 預測混淆）
* **PRED**會疊加[預測線](#aaps-screens-prediction-lines)（請見下方）

(aaps-screens-prediction-lines)=

#### 預測線

開啟 **PRED** 後，AAPS 會在「現在」時間線右側，以**虛線**繪製預測結果。每條預測線都有自己的顏色。深色主題會使用相同顏色的較淺色調，而位於綠色目標範圍內的線條看起來可能會稍微偏綠。

| 線條            | 淺色主題                                                                                                                              | 深色主題                                                                                                                               | 預測內容           |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| **IOB**（藍色）   | <span style="background:#FFFFFF;color:#1E88E5;padding:0 0.3em;border:1px solid #CCCCCC;border-radius:4px">●●●●</span>             | <span style="background:#141218;color:#64B5F6;padding:0 0.3em;border:1px solid #141218;border-radius:4px">●●●●</span>              | 僅胰島素           |
| **COB**（橘色）   | <span style="background:#FFFFFF;color:#FB8C00;padding:0 0.3em;border:1px solid #CCCCCC;border-radius:4px">●●●●</span>             | <span style="background:#141218;color:#FFB74D;padding:0 0.3em;border:1px solid #141218;border-radius:4px">●●●●</span>              | 體內碳水           |
| **UAM**（黃色）   | <span style="background:#FFFFFF;color:#C9BD60;padding:0 0.3em;border:1px solid #CCCCCC;border-radius:4px">●●●●</span>             | <span style="background:#141218;color:#E6D39A;padding:0 0.3em;border:1px solid #141218;border-radius:4px">●●●●</span>              | 未計劃用餐          |
| **ZT**（青色）    | <span style="background:#FFFFFF;color:#00D2D2;padding:0 0.3em;border:1px solid #CCCCCC;border-radius:4px">●●●●</span>             | <span style="background:#141218;color:#4DD4D4;padding:0 0.3em;border:1px solid #141218;border-radius:4px">●●●●</span>              | 零基礎率（停止注射胰島素）  |
| **aCOB**（淡橘色） | <span style="background:#FFFFFF;color:rgba(251,140,0,0.5);padding:0 0.3em;border:1px solid #CCCCCC;border-radius:4px">●●●●</span> | <span style="background:#141218;color:rgba(255,183,77,0.5);padding:0 0.3em;border:1px solid #141218;border-radius:4px">●●●●</span> | 僅適用於舊版 AMA 演算法 |

當兩條預測線的數值相同時，點會重疊，因此只能看到其中一種顏色（例如，血糖平穩時，UAM 會疊在 IOB 上）。

* **COB** line (orange): [carbs on board](CobCalculation.md) (orange is used throughout AAPS for COB and carbs)
    
    此預測線顯示了在目前**設定檔**下，假設碳水吸收的偏差保持不變，你的血糖（而非碳水本身）將會走向的趨勢。此線僅在有輸入 COB 時才會顯示。

* **IOB** 線（藍色）：體內胰島素（AAPS 全程以藍色表示 IOB 和胰島素）
    
    此預測線顯示在僅受胰島素影響下會發生什麼。例如，如果你調整了一些胰島素，然後沒有吃任何碳水化合物。

* **ZT** 線（青色）：零基礎率（如果將臨時基礎率設為 0%，預測的血糖值）
    
    此預測線顯示如果幫浦停止所有胰島素輸送（0% TBR），血糖軌跡線將如何改變。當這條線升至高於目標值時，線條就會停止。
    
    *這條線僅在使用[SMB](#Config-Builder-aps)算法時顯示。*

* **UAM** 線（黃色）：[未計劃用餐](#SensitivityDetectionAndCob-sensitivity-oref1)
    
    未輸入的餐點(UAM)表示偵測到由於用餐、腎上腺素或其他影響導致的血糖顯著上升。預測線類似於**橘色的 COB 線**，但它假設偏差會以恆定速率減少（延長當前減少的速率）。
    
    *只有在使用 [SMB](#Config-Builder-aps) 演算法、OpenAPS SMB 設定中已開啟 **啟用 UAM**，且血糖上升幅度超出單靠胰島素作用所能解釋的範圍時，才會顯示這條線。*

* **aCOB** 線（淡色半透明橘色）：加速碳水吸收
    
    Similar to COB, but assuming a static 10 mg/dL/5m (0.555 mmol/L/5m) carb absorption rate. 因實用性有限，所以已棄用。
    
    *這條線僅在使用較舊的[AMA](#Config-Builder-aps)算法時顯示。*

通常你的實際血糖曲線會落在這些線的中間，或者接近某一條最符合你目前狀況的線

(aaps-screens-how-predictions-become-a-dosing-decision)=

#### AAPS 如何根據預測結果決定胰島素劑量

AAPS 不會只根據目前的血糖值決定胰島素劑量；每次循環（約每 5 分鐘一次）時，都會綜合查看上述所有預測線，並判斷最安全的做法。

核心原則是**安全第一**：只要任何時間範圍內的**任一**預測線低於低血糖安全閾值，AAPS 就會設定零基礎率（臨時基礎率設為 0%），並暫停追加胰島素，即使目前血糖偏高也一樣。只有在所有預測線都維持高於該閾值時，AAPS 才會考慮增加胰島素。

確認可以安全增加胰島素後，AAPS 會根據綜合預測結果，查看血糖最終預計到達的數值（**預期血糖**），並計算需要多少校正量，才能讓預期血糖回到目標範圍內。校正量會透過提高臨時基礎率給予；如果啟用了 oref1/[SMB](#Open-APS-features-super-micro-bolus-smb) 演算法，也可以透過立即注射少量胰島素給予。如果目前血糖偏高，但預測顯示血糖已自行下降，AAPS 會暫緩追加胰島素，甚至可能降低基礎率，以免追加胰島素讓稍後的低血糖更嚴重。

如需查看以實際螢幕截圖說明這套決策邏輯的範例，請參閱[臨床人員指南中的劑量情境](#clinicianguide-dosing-scenarios)。這些內容原本是為臨床人員撰寫，但所有 AAPS 使用者都適用。

*如需完整了解這些預測及其後續劑量決策的計算方式，請參閱 [OpenAPS 的 determine-basal 說明文件](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html)。*

#### 基礎率

一條**實心藍色**線顯示你的幫浦基礎胰島素輸送，並反應實際的輸送時間。

一條**虛線藍色**線顯示如果沒有暫時的基礎率調整（TBR），基礎率會是什麼。

當提供標準基礎率時，曲線下方的區域以深藍色顯示。當基礎率臨時調整（增加或減少）時，曲線下方的區域會以淺藍色顯示。

#### 活動

一條**細黃色**線顯示胰島素的活動。

這是基於你體內胰島素預期降低血糖的效果，假設沒有其他因素（如碳水化合物）影響。

(AapsScreens-section-g-additional-graphs)= (aaps-screens-additional-graphs)=

### E 區段－其他圖表

您可以在主圖表下方啟用其他圖表。使用[簡易模式](#preferences-simple-mode)時，其他圖表會使用預設設定，且無法變更。如果要設定自己的額外圖表組態，請關閉 **簡單模式**。

其他圖表會與主圖表同步：捲動或縮放血糖圖表時，其他圖表也會跟著移動。在其他圖表上向側邊拖曳，也會捲動所有圖表。其他圖表沒有自己的時間標籤，請查看血糖圖表上的時間。

如要設定其他圖表，請按一下圖表右上角的**鉛筆**圖示：

![其他圖表設置](../images/Home2020_AdditionalGraphSetting.png)

選取要在圖表中顯示的資料項目；按一下**移除**按鈕即可刪除圖表。

如要再新增一張圖表，請按一下最後一張圖表下方的**新增圖表**，再以相同方式選取要顯示的資料項目：

![新增圖表](../images/main/graph_add.png)

新圖表會新增在其他圖表下方。此處新增的第二張圖表顯示**SENS%** 和 **DEV**：

![包含第二張其他圖表的主畫面](../images/main/main_screen_additional_graph.png)

大多數使用者發現以下附加圖表配置足夠：

* 圖表 1 包含 IOB、COB、敏感度變更
* 圖表 2 包含偏差和 BGI。

#### 絕對胰島素（ABS）

活動中的胰島素，包括注射**和基礎率**。

(aaps-screens-iob)=

#### 活性胰島素（IOB）

顯示你體內的胰島素（= 體內的活動胰島素）。包括注射胰島素和臨時的基礎率（**但不包括你設定檔中的基礎率**）。

如果在DIA期間沒有任何[SMB](#Open-APS-features-super-micro-bolus-smb)、沒有額外注射並且沒有臨時基礎率(TBR)的情況下，這個值會為零。

SMB 會以藍色三角形顯示在此圖表上，並依照與當天最大 SMB 相比的劑量，分為三種大小。

如果沒有剩餘的劑量，且長時間處於零或低臨時基礎速率，則體內胰島素活性（IOB）可能會變為負值

衰減速度取決於您的[DIA 和胰島素類型設定](#Config-Builder-insulin-dia)。

#### 體內碳水化合物（COB）

顯示你體內的碳水化合物（= 活動中的，但尚未衰減的碳水化合物）。

衰減取決於 [演算法檢測的偏差](../DailyLifeWithAaps/CobCalculation.md)。

如果他偵測到碳水化合物吸收率高於預期，將注射胰島素，這將增加 IOB（多或少，取決於你的安全設置）。

#### 敏感度變化（SENS%）

顯示[自動敏感度調整](#Open-APS-features-autosens)檢測到的敏感度。

敏感度是運動、荷爾蒙等導致的對胰島素的敏感度計算結果。

請注意，你需要在[目標 8](#objectives-objective8)中，以便讓敏感度檢測/[自動敏感調整](#Open-APS-features-autosens)所提供的胰島素量。在達到該目標之前，你的圖表中的線條僅顯示為資訊。

### 可變敏感度（VSENS）

顯示由 [DynamicISF](../DailyLifeWithAaps/DynamicISF.md) 計算出的敏感度。僅在你使用此功能時填入。

(screen-heart-rate-steps)=

#### 心率（HR）與步數

當使用 [Wear 智慧型手錶](../WearOS/WearOsSmartwatch.md) 時，這些資料可能會可以顯示。可在**AAPS** Wear 應用程式中啟用它們並授權健康資料。

Steps are drawn as columns, and the heart rate as a curved line that breaks where the watch sent no data.

#### 偏差（DEV）

* **灰色**條顯示因碳水化合物引起的偏差。
* **綠色**條顯示血糖高於演算法預期的範圍。綠色條用來增加[自動敏感度調整](#Open-APS-features-autosens)的抵抗力。
* **紅色**條顯示血糖低於演算法預期的範圍。紅色條用來增加[自動敏感度調整](#Open-APS-features-autosens)的敏感度。
* **黃色**條顯示因用餐而引起的偏差。
* **黑色**條顯示未考慮敏感度的小偏差

#### 血糖影響（-BGI）

這條線顯示基於胰島素活動，血糖應該上升或下降的程度。

![偏差與 BGI](../images/main/graph_dev_bgi.png)

將此線與偏差條一起顯示是個不錯的組合。 They share the same scale, but it is a different one than the other optional data, so it is a good idea to display them on a separate graph, as shown above. 比較血糖影響(BGI)線和偏差條是另一種暸解**血糖(BG)**波動的方式。在標記為 **1** 的時間點，偏差長條遠高於 BGI 線：血糖上升幅度超出單靠胰島素作用所能解釋的範圍（例如用餐後）。在標記為 **2** 的時間點，偏差長條低於零（紅色）：血糖比演算法預期的還低。

### F 節 — 快速啟動工具列

![快速啟動工具列](../images/Home2020_Buttons.png)

螢幕底部的浮動工具列可讓您使用**[快速啟動](../DailyLifeWithAaps/QuickLaunch.md)**操作。小型**齒輪**圖示會開啟快速啟動設定，讓您選擇要顯示哪些按鈕（治療、照護入口項目、CGM 操作、**管理**工作表中的畫面、[快速嚮導](../DailyLifeWithAaps/QuickWizards.md)按鈕、[情境](../DailyLifeWithAaps/Scenes.md)等）。

上方顯示了一種常見設定：**胰島素**、**碳水化合物**和**注射嚮導**。

幫浦**中斷連線**時，治療按鈕仍會留在工具列中，例如可用來記錄使用胰島素筆注射的胰島素（請參閱下方的[胰島素](#aaps-screens-buttons-insulin)）。底部導覽列的[治療](#aaps-screens-treatments-sheet)工作表中也能使用相同的操作。

(aaps-screens-buttons-insulin)=

#### 胰島素

![胰島素對話方塊](../images/Home2020_ButtonInsulin.png)

要在不使用[注射計算器](#aaps-screens-bolus-wizard)的情況下給予特定的胰島素量。

啟用**開始用餐前臨時目標**後，系統會自動啟動您的[用餐前臨時目標](#TempTargets-eating-soon-temp-target)。

If you do not want to bolus through the pump but record an insulin amount (i.e. insulin given by pen) enable "**Bolus will be recorded only (not delivered by pump)**". 新增的**時間**列預設為**現在**，可讓您記錄先前注射的胰島素：使用**-**／**+**調整時間，或點選箭頭來輸入分鐘數或選擇日期與時間。

![收合的時間列](../images/v4/Screens/insulin_dialog_record_only_time.png) ![點選箭頭後展開的時間列](../images/v4/Screens/insulin_dialog_time_open.png)

您可以使用**+0.5／+1.0／+2.0**按鈕，快速增加胰島素劑量。您可以在[注射嚮導設定](#Preferences-deliver-this-part-of-bolus-wizard-result)中變更增加的劑量。

幫浦暫停或中斷連線時，也可以使用胰島素對話方塊，例如記錄使用胰島素筆注射的胰島素。 In this case, "**Bolus will be recorded only (not delivered by pump)**" is forced on (shown in red) and additional fields appear to select the insulin type and a **Time** offset for an injection made in the past:

![幫浦中斷連線時的胰島素對話方塊](../images/main/insulin_dialog_pump_disconnected.png)

#### 碳水化合物

![碳水化合物對話方塊](../images/Home2020_ButtonCarbs.png)

紀錄碳水化合物而不進行注射。

您可以直接使用上方的切換開關，啟動特定的[預設臨時目標](#TempTargets-hypo-temp-target)（低血糖、即將用餐、活動）。

**碳水化合物時間**：您將在何時／已於何時攝取碳水化合物。

**Duration**: To be used for ["extended carbs"](ExtendedCarbs.md). 此列預設為收合狀態，避免您誤將克數輸入其中：使用**-**／**+**調整時間，或點選箭頭展開後輸入數值。

您可以使用**+5／+10／+20**按鈕，快速增加碳水化合物的量。

#### 快速嚮導

只要按一下預先設定的按鈕，就能輕鬆輸入碳水化合物的量並設定計算所需的基本資料。

請在[快速嚮導](../DailyLifeWithAaps/QuickWizards.md)中設定詳細資料。

(aaps-screens-treatments-sheet)=

### G 節 — 底部導覽列

底部導覽列可讓您前往：

* **治療** — 顯示治療操作的快速操作工作表：
    
    ![治療工作表](../images/v4/Screens/treatments_sheet.png)

* **情境** — 只有在您至少有一個[情境](../DailyLifeWithAaps/Scenes.md)，或有一條標記為**使用者操作**的**自動化**規則時，才會顯示。點選後會開啟工作表，讓您啟動情境或規則；徽章會顯示目前可啟動的項目數量。工作表頂端的**鉛筆**圖示會開啟**管理 → 情境**。

* **管理** — 集中管理**AAPS**各項設定的入口：設定檔、胰島素設定、臨時目標、快速嚮導、情境、自動化、食物、注射部位輪替、幫浦及已授權用戶端。下方還有裝置與基礎率相關操作，例如感測器安裝和臨時基礎率。部分項目只會在適用於您的設定時顯示，例如灌注／填充和更換電池會依幫浦而異；在[簡易模式](#preferences-simple-mode)中，臨時基礎率、延長注射和照護入口項目則會隱藏：
    
    ![管理工作表](../images/v4/Screens/manage_sheet.png)

* **目標** — 查看您完成[目標](../SettingUpAaps/CompletingTheObjectives.md)的進度；徽章會顯示已完成的目標數量。所有目標完成後，此項目就會消失，而且不會顯示在 **AAPSClient** 上。

(aaps-screens-notifications)=

#### 通知

底部列上方的右側可能會出現**通知泡泡**。泡泡會彙整 **AAPS** 中啟動中的通知；旁邊的小數字表示通知數量。泡泡的顏色會依最重要的通知而定：緊急訊息顯示紅色，一般資訊則顯示綠色。

![顯示通知泡泡的主畫面](../images/main/main_screen_notification_bubble.png)

點選泡泡即可開啟**通知**面板。每則訊息都會顯示發出時間。按下訊息下方的**關閉**即可移除該訊息；有些訊息會顯示其他按鈕，按下後會帶您前往需要處理的設定。

![顯示一則訊息及其「關閉」按鈕的通知面板](../images/main/notification_panel.png)

![通知面板](../images/main/main_notification_panel.png)

(bolus-wizard)= (aaps-screens-bolus-wizard)=

## 注射嚮導

![注射嚮導](../images/Home2020_BolusWizard_v2.png)

當你想要進行餐前注射時，通常會從此處發起。

### I 區

**計算**標題會顯示計算出的注射量。如果活性胰島素（IOB）的量已超過計算出的注射劑量，那麼他只會顯示仍然需要的碳水化合物數量。

無論目前的**血糖**為何，都可以使用注射計算機，包括血糖過高或過低時。如果**血糖**高於目標值，餐前注射量會加上校正劑量。如果**血糖**低於目標值，注射量會減少；若體內已有的胰島素多於所需，計算機會告訴您還需要攝取多少碳水化合物，而不會建議注射胰島素。

標題下方的圖示列會顯示哪些輸入項目會納入計算（血糖、趨勢、活性胰島素、臨時目標、活性碳水化合物）。點選圖示即可將該項目設為納入或不納入計算；**(i)** 圖示會顯示計算所依據的詳細數值。

#### COB 和 IOB 的組合及其含義

* 基於安全考量，啟用活性碳水化合物時，無法停用活性胰島素輸入項目，否則可能會有胰島素過量的風險，因為 **AAPS** 不會計入已注射的胰島素。
* 如果同時啟用活性碳水化合物和活性胰島素，尚未吸收且尚未由胰島素涵蓋的碳水化合物，以及透過臨時基礎率或微量注射所注射的所有胰島素，都會納入計算。
* 如果只啟用活性胰島素，**AAPS** 會計入已注射的胰島素，但不會將其與尚未吸收的碳水化合物相抵。這會導致出現“缺少碳水化合物”的提示。
* 如果在餐前注射後不久又要為**額外食物**注射（例如額外吃了甜點），停用**所有輸入項目**可能會有所幫助。這樣只會加入新增的碳水化合物，因為主餐不一定會立刻被吸收，所以餐後追加的 IOB 和 COB 可能會對應不太起來。
* 基於安全考量，只有在手動啟用臨時目標輸入項目後，臨時目標才會納入計算。

(AapsScreens-section-j)=

### J 節－輸入欄位

在**碳水化合物**欄位中，輸入您打算注射的碳水化合物估算量，**單位為公克**；欄位下方的 **+** 按鈕可快速增加碳水化合物的量。 **AAPS** 僅使用公克為單位：如果您使用麵包單位或交換份數計算（*例如* DAFNE 的「CHO」交換份數），請先換算成公克再輸入。請參閱設定檔頁面中[關於麵包單位的說明](#your-aaps-profile-insulin-to-carbs-ratio)。

#### 碳水化合物類型：麵包、蛋糕或披薩

**碳水化合物**欄位下方的**麵包**、**蛋糕**和**披薩**按鈕，可讓 **AAPS** 判斷餐點吸收的速度。選擇**蛋糕**或**披薩**時，注射量只會先涵蓋部分碳水化合物，其餘部分會稍後以 eCarbs 加入。百分比和時間設定請參閱延後碳水化合物頁面中的[碳水化合物類型：麵包、蛋糕或披薩](#AapsScreens-carbs-type)。

**校正**列可讓您在有需要時調整最終劑量。

只有**碳水化合物**欄位會一直展開。其他列（**校正**、**碳水化合物時間**、**血糖**和**使用百分比**）預設會收合：列中會顯示目前數值及 **-**／**+** 按鈕，方便您逐步調整。點選箭頭即可展開該列並輸入數值，再次點選即可收合。這樣可避免您不小心在**校正**欄位中輸入公克數。

![注射嚮導中收合的欄位](../images/v4/Screens/bolus_wizard_bottom.png)

點選**設定檔**列的任意位置即可開啟設定檔清單，再點選名稱即可在此次計算中使用該設定檔。

![注射嚮導中的設定檔清單](../images/v4/Screens/bolus_wizard_profile_list.png)

**碳水化合物時間**欄位用於預先注射，讓系統知道在預期碳水化合物之前會有延遲。如果你是為之前的碳水化合物進行注射，你可以在此欄位中輸入負數。

**設定鬧鐘**（用餐提醒）：輸入未來的碳水化合物時間後，畫面會出現「**設定鬧鐘**」開關，提醒您在指定時間食用輸入至 **AAPS** 的碳水化合物：

![為未來的碳水化合物設定鬧鐘](../images/Home2021_BolusWizard_EatingReminder.png)

The reminder starts when the bolus has been delivered. While it runs, a **Time to eat** bar on the main screen counts down, with **Stop** and **+5 min**. **+5 min** moves the end of the wait five minutes later, and the bar shows the total wait. When the time has come, the reminder rings with its own sound, a soft kitchen timer. Besides **Silence alarm** (the screen stays open) and **Silence and close**, the alarm screen offers **+5 min**, which starts a new five-minute wait. Once it has rung, the bar reads *The time is up* with **+5 min** and **Dismiss**; **Silence and close** removes the bar too. The bar and the alarm are also shown on **AAPSClient**, and on the [watch](#WearOsSmartwatch-wizard-carb-time). The reminder does not create a timer in your phone's clock app. If Android does not let **AAPS** set alarms, the wizard asks you to allow *Alarms and reminders* for **AAPS** in the Android settings. The bell is not offered for a carb time in the past.

![The Time to eat bar on the main screen, with +5 min and Stop](../images/main/main_eat_reminder_bar.png)

![The Time to eat alarm screen: +5 min, Silence alarm, Silence and close](../images/main/eat_reminder_alarm.png)

**血糖**欄位通常已填入 CGM 的最新讀取值。如果你沒有使用中的 CGM，則該欄位顯示空白。如果讀取值是近期取得的，**血糖**列會保持收合。 The field follows new readings while the wizard is open, until you change it yourself.

底部的結果按鈕會顯示建議的注射量；點選後會先要求您確認，才會注射胰島素。 While the confirmation is waiting, the loop gives no SMB, so the bolus you confirm is still right. If an SMB is being delivered at that moment, **OK** waits until it has finished.

請注意：

* 如果計算出的注射量超過您的**[最大注射量](#Preferences-maximum-bolus)**，系統會將注射量調降至上限，並在確認畫面中顯示警告「已套用注射量限制」。系統則會拒絕[快速嚮導](../DailyLifeWithAaps/QuickWizards.md)。
* When the bolus is only recorded (for example while the pump is disconnected), the "**Bolus will be recorded only (not delivered by pump)**" warning stays at the top of the dialog, also when you scroll.
* 您手動注射的胰島素優先於等待注射的[微量注射](#Open-APS-features-super-micro-bolus-smb)：系統會取消該次微量注射，並重新計算循環。如果目前正在進行 SMB 注射，系統會拒絕您的注射，並顯示訊息：「目前正在進行 SMB 注射。請等注射完成後再試一次。」系統不會注射任何胰島素，也不會儲存這次注射輸入的碳水化合物：請稍候片刻，再重新輸入。

(AapsScreens-wrong-cob-detection)=

#### 錯誤的 COB 偵測

![碳水化合物吸收緩慢](../images/Calculator_SlowCarbAbsorption.png)

如果你在使用注射嚮導後看到上述警告，**AAPS** 已檢測到計算的 COB 值可能是錯誤的。因此，如果你想在之前的進食後再次注射 COB，你應該小心注射過量！

有關詳細訊息，請參見[COB計算頁面](#CobCalculation-detection-of-wrong-cob-values)上的提示。

正在尋找 **AAPS** 3.x 的 **Actions** 分頁嗎？相關功能已移至主畫面、**Manage** 面板和 QuickLaunch 工具列：請參閱 [Actions 分頁去哪裡了？](#screens-action-tab)。

(aaps-screens-careportal)=

## 照護入口紀錄

[狀態列](#screens-sensor-level-battery)中顯示的使用時間與數值（感測器、胰島素、導管、幫浦電池），是根據照護入口紀錄計算而來：**灌注／填充**（記錄幫浦注射部位和胰島素藥匣的更換）、**插入感測器**和**更換幫浦電池**。

您可以在主畫面展開的狀態面板、**Manage** 面板，或使用 [QuickLaunch](../DailyLifeWithAaps/QuickLaunch.md) 按鈕記錄這些項目。

**灌注／填充**會記錄幫浦注射部位和／或胰島素藥匣的更換，也可以注射灌注用量：

![灌注／填充對話方塊](../images/dialogs/prime_fill.png)

**插入感測器**和**更換幫浦電池**只會要求輸入事件時間：

![插入感測器對話方塊](../images/dialogs/sensor_insert.png)

![更換幫浦電池對話方塊](../images/dialogs/pump_battery_change.png) 運動、公告、問題和備註紀錄會反映 Nightscout 照護入口的內容，屬於特殊形式的備註。

在 **Manage** 面板中向下捲動，然後按下 **Careportal**，即可查看以下紀錄：**血糖檢查**、**備註**、**運動**、**問題**和**公告**。

![Manage 面板中的 Careportal 區塊](../images/v4/Screens/manage_sheet_careportal.png)

**血糖檢查**、**問題**和**公告**可讓您輸入血糖值（來自血糖機、感測器或其他來源）、備註和事件時間。在**問題**和**公告**中，血糖欄位會收合，並在數值旁顯示血糖機類型：如果您變更數值，類型就會從**感測器**變成**血糖機**。

![血糖欄位收合時的問題畫面](../images/dialogs/careportal_question.png)

![血糖檢查對話方塊](../images/dialogs/careportal_bg_check.png)

**備註**和**運動**可讓您輸入持續時間（欄位預設為收合狀態：使用 **-**／**+** 調整，或點選箭頭後輸入），以及備註和事件時間：

![運動對話方塊](../images/dialogs/careportal_exercise.png)

在所有這些對話方塊中（**灌注／填充**、**插入感測器**、**更換幫浦電池**和照護入口紀錄），事件時間都使用與[胰島素對話方塊](#aaps-screens-buttons-insulin)及注射嚮導相同的**時間**欄位：使用 **-**／**+** 以 5 分鐘為單位調整時間（最早可回溯一週，最晚可設定為 12 小時後），或點選箭頭選擇任意日期和時間。

## 部位輪替

**Manage → 注射部位輪替**會記錄每次導管和感測器在身體圖上的放置位置，方便您輪替注射部位：請參閱「幫浦和導管」頁面中的 [注射部位輪替](#Aapsscreens-site-rotation)。

**TDD**（每日總劑量）以及基礎胰島素與注射劑量的比例原則，請參閱[統計資料中的胰島素分頁](#reviewing-tdd)。

(AapsScreens-insulin-profile)=

## 胰島素

![胰島素畫面](../images/manage/insulin_profile.png)

**Manage → 胰島素設定**可查看及管理您的胰島素組態。每個組態都會以卡片呈現，並顯示其**作用高峰時間**和**[胰島素作用時間](#Config-Builder-insulin-dia)**；目前使用中的組態會標示為**使用中**。卡片下方會顯示作用曲線。您可以編輯任何非使用中組態的暱稱、作用高峰時間和胰島素作用時間：若要變更目前使用的胰島素，請[新增組態並啟用](#Config-Builder-insulin-change-active)。

如需進一步了解胰島素作用時間及其設定方式，請參閱[胰島素作用時間](#Config-Builder-insulin-dia)。

## 幫浦狀態

![虛擬幫浦狀態畫面](../images/v4/Pumps/virtual_pump_screen.png)

**Manage → 幫浦**（或 **Configuration → Pump → Open plugin**）會顯示幫浦狀態：上次連線時間、基礎率、電池、藥量……

* 顯示的資訊取決於你的幫浦型號。
* 詳情請參見[幫浦頁面](../Getting-Started/CompatiblePumps.md)。

## 閉環、AMA / SMB

**Configuration → Loop → Open plugin**（以及 **Configuration → APS → Open plugin**）會顯示演算法的計算細節，以及 **AAPS** 採取目前動作的原因：上次執行時間、產生的建議，以及限制條件。 **Loop** 畫面只會列出實際限制臨時基礎率或 SMB 的條件（以及未允許閉環模式的原因，如有此情況）；**APS** 畫面則會列出所有納入計算的限制條件。

每次系統從 CGM 獲取新讀取值時，計算都會運行。

如需更多詳細資訊，請參閱[組態設定頁面的 APS 區段](#Config-Builder-aps)。

(aaps-screens-profile)=

## 設定檔

![設定檔](../images/Screenshots_Profile.png)

**Manage → 設定檔**（或點選主畫面上的設定檔名稱）會開啟設定檔畫面：您的設定檔會以可滑動切換的卡片輪播方式呈現，並提供新增、編輯、複製、刪除及**啟用**設定檔的按鈕。

設定檔包含你個別糖尿病設定的資訊，請參閱詳細的**[設定檔](../SettingUpAaps/YourAapsProfile.md)**頁面以獲取更多資訊。

## 自動化

![自動化](../images/v4/Screens/automation_overview.png)

**Manage → 自動化**會列出您的自動化規則。請參閱專門的頁面 [這裡](../DailyLifeWithAaps/Automations.md)。

## NSClient

![NSClient](../images/Screenshots_NSClient.png)

**Configuration → Communication → NSClientV3 → Open plugin**會顯示與 Nightscout 網站的連線狀態：網址、WebSocket 狀態、佇列，以及同步活動記錄。

您可以在 [NSClient 設定](#Preferences-nsclient)中變更設定。

如遇故障，請參閱此[頁面](../GettingHelp/TroubleshootingNsClient.md)。

(aaps-screens-bg-source)=

## 血糖來源 - xDrip、BYODA……

![血糖來源畫面](../images/Screenshots_BGSource.png)

**Configuration → BG Source → Open plugin**會顯示 CGM 讀取值的歷史紀錄，並可在讀取值異常（例如壓迫性低血糖）或重複時將其移除。

## 治療紀錄

開啟**選單**（☰），然後選取**治療紀錄**，即可查看、檢查並修正 **AAPS** 記錄的所有內容：碳水化合物和注射、臨時基礎率、臨時目標、設定檔切換、照護入口紀錄、循環模式變更及使用者輸入的紀錄。請參閱「檢視資料」頁面中的[治療紀錄](#aaps-screens-treatments)。

## 歷史瀏覽器

![歷史瀏覽](../images/v4/Screens/history_browser.png)

開啟**選單**（☰），然後選取**歷史紀錄瀏覽器**。

允許你查詢在 **AAPS** 中的歷史紀錄。請參閱專門頁面 [檢視你的資料 > 歷史瀏覽器](../Maintenance/Reviewing.md)。

(aaps-screens-statistics)=

## 統計資料

![統計資料](../images/v4/Screens/statistics.png)

開啟**選單**（☰），然後選取**統計資料**。

這裡會透過四個分頁，顯示每日總劑量、目標範圍內時間、一天中的血糖概況（AGP），以及胰島素週期模式等統計資料。請參閱專門頁面 [檢視你的資料 > 統計資料](#reviewing-statistics)。

(aaps-screens-profile-helper)=

## 設定檔助手

開啟**選單**（☰），然後選取**設定檔輔助工具**。

![設定檔輔助工具](../images/screens/profile_helper.png)

設定檔輔助工具可讓您比較設定檔，並為兒童產生初始設定檔。請參閱 [您的 AAPS 設定檔](../SettingUpAaps/YourAapsProfile.md)，其中的「[從頭為孩子建立設定檔](#your-aaps-profile-profile-from-scratch-for-a-kid)」和「[比較兩個設定檔](#your-aaps-profile-compare-profiles)」章節。

(aaps-screens-widgets)=

## 主畫面小工具

**AAPS** 提供五種小工具，您可以新增至手機主畫面，無須開啟應用程式即可查看資料。請參閱專頁 [主畫面小工具](../DailyLifeWithAaps/Widgets.md)。

![主畫面上的 AAPS 小工具](../images/widgets/home_widgets_full_circle_small.png)