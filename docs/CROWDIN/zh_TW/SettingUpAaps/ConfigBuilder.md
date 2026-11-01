# 組態（組態建置工具）

```{admonition} 您是從 AAPS v3 升級而來嗎？ :class: note 現在的**組態建置工具**已更名為**組態**，並移至**選單**（☰）中。請參閱[AAPS v4 有哪些變更](#v4-changes)。

    <br />**組態**可讓您選擇要啟用哪些外掛（CGM、幫浦、APS 演算法、敏感度、同步等），並開啟各個外掛及其設定。下方提供[操作說明](#configuration-v4)；本頁其餘部分會詳細說明各個區段。
    
    (configuration-v4)=
    ## AAPS v4 的組態
    
    在 **AAPS** v4 中，請點選主畫面左上角的**選單**（☰），然後選擇**組態**（*「設定組態（CGM、幫浦等）並啟用功能」*）。
    
    ![左上角選單中的「組態」項目](../images/v4/Configuration/configuration_menu.png)
    
    外掛會依**類別**分組，例如*平滑處理*、*校正*、*敏感度偵測*、*APS*、*通訊*和*一般*。每個項目都會顯示類別名稱及**目前啟用**的外掛（例如 *APS → OpenAPS SMB*）。點選項目即可開啟該類別。
    
    ![列出外掛類別的「組態」畫面](../images/v4/Configuration/configuration_plugins.png)
    
    進入類別後，您會看到該類別可使用的外掛。在單選類別中，您可以選擇要啟用的項目；有些類別則允許複選（*「選擇所有適用項目」*）。每個外掛都提供兩個操作：
    
    - **開啟外掛** — 開啟外掛自己的畫面。
    - **設定** — 開啟外掛的設定（設定可能分組在可展開的區段中）。
    
    ![顯示外掛及「開啟外掛」和「設定」選項的類別](../images/v4/Configuration/configuration_open_plugin.png)
    
    (configuration_sync_icon)=
    ### 手機圖示 —「已從主控端同步」
    
    類別或設定旁的小型**手機圖示**表示該項目是**由主控端同步而來** — 其數值或選取項目會透過 NSClientV3（Nightscout）通道傳送到這台裝置。
    
    在**用戶端**（**AAPSClient**）上，這些項目會與主控端**保持同步**。此圖示只會顯示在用戶端上，因此上方截圖中的主程式 **AAPS** 不會出現此圖示。在用戶端上，圖示通常會出現在*平滑處理*、*校正*、*敏感度偵測*和*APS*項目旁。主控端與用戶端如何保持同步，以及您可以從哪一端變更哪些設定，請參閱[主控端 ↔ 用戶端控制](#client-master-config-prefs)。
    
    相同的圖示也會出現在設定畫面中，顯示於個別同步設定旁。以下範例中的*吸收截止值*旁有此圖示；沒有圖示的設定則是各裝置個別設定：
    
    ![外掛設定 — 手機圖示標示已同步的設定](../images/v4/ClientMaster/preferences_synced_icon.png)
    
    **沒有**圖示的項目會**依裝置個別設定**。最重要的例子是 **NSClientV3（通訊）**連線本身 — **Nightscout URL**、**存取權杖**和 **WebSocket** 都是在各支手機上分別設定，因此旁邊**不會**顯示手機圖示。
    
    ---
    
    (Config-Builder-tab-or-hamburger-menu)=
    ## 開啟外掛畫面
    
    您可以透過以下任一方式開啟外掛畫面（**AAPS** v3 的分頁和眼睛核取方塊已移除，請參閱 [AAPS v4 有哪些變更](#v4-changes)）：
    
    - **組態** → 外掛所屬類別 → **開啟外掛**，
    - 從底部導覽列開啟**管理**面板，再選擇您最常使用的畫面（設定檔、胰島素設定、幫浦、自動化、食物等），
    - 使用您自行新增的 [QuickLaunch](../DailyLifeWithAaps/QuickLaunch.md) 按鈕，
    - 使用主畫面上的**搜尋列**。
    
    ```{contents}
    :backlinks: entry
    :depth: 2
    

(ConfigBuilder_Profile)=

## 設定檔

此模組是 **AAPS** 的核心部分，無法停用。

請參閱[你的 AAPS 個人設定](../SettingUpAaps/YourAapsProfile.md)以基本了解你的**個人設定**中包含的內容。

(insulin)= (Config-Builder-insulin)=

## 胰島素

![胰島素設定](../images/manage/insulin_settings.png)

在 **AAPS** 4 中，胰島素已不再是從**組態**中選取的外掛。請開啟**管理 → 胰島素設定**，設定您使用的胰島素。

胰島素編輯器可讓您進行以下設定：

* 為設定檔設定容易辨識的**胰島素暱稱**，
* 設定**峰值**（胰島素活性達到最高點所需的時間，單位為分鐘）和 **DIA**（胰島素作用時間，單位為小時）；您可以輸入數值，或使用**–**／**+**按鈕調整，
* 點選**從預設值載入峰值**按鈕，選擇 **Novorapid**（75 分鐘）、**Fiasp**（55 分鐘）或 **Lyumjev**（45 分鐘），即可一次填入該胰島素的標準峰值時間。

無論使用哪種胰島素，允許的數值範圍都相同：

* **DIA**：5 至 9 小時（若患者類型設為**懷孕**，則為 5 至 10 小時）。如何選擇數值，請參閱[胰島素作用時間（DIA）與峰值](#Config-Builder-insulin-dia)。
* **峰值**：35 至 120 分鐘。

您變更數值時，編輯器底部顯示的 **IOB**（活性胰島素）和**活性**曲線也會隨之更新，讓您立即了解設定如何影響胰島素作用。

有關如何理解**AAPS**中顯示的胰島素個人設定的更多資訊，請[查看這裡](#AapsScreens-insulin-profile)。

(Config-Builder-insulin-change-active)=

### 變更目前使用的胰島素（DIA 或峰值）

標示為**啟用中**的胰島素，就是目前執行中的設定檔所使用的胰島素。該胰島素的欄位會呈現灰色，無法編輯或刪除。如此一來，目前使用中的設定檔所顯示的胰島素名稱，就會與實際使用的設定相符。

若要變更目前使用的 DIA 或峰值：

1. 開啟**管理 → 胰島素設定**。如果畫面以唯讀模式開啟（上方工具列有**✏️ 鉛筆**圖示），請點選鉛筆圖示並解鎖設定。
2. 點選 **+**（*新增胰島素*）。 **AAPS** 會複製畫面上顯示的胰島素。
3. 設定新胰島素的**峰值**和／或 **DIA**，然後點選儲存圖示（右上角）。
4. 點選 **▶**（*註冊胰島素*），然後確認。新的胰島素會變成**啟用中**。

```{admonition} 名稱會包含峰值和 DIA :class: note **AAPS** 會自動將峰值、DIA 和濃度加到胰島素名稱中（例如 *Fiasp 55m 8h U100*），讓您一眼就能分辨不同的組態。

    <br />舊的胰島素不再啟用後，即可將它刪除。
    
    ###「從以下項目載入峰值」預設值
    
    在 **AAPS** 4 中，沒有可供選擇的胰島素類型清單。所有胰島素都使用相同的指數活性曲線，差別只在於<strong>峰值</strong>和 <strong>DIA</strong>。胰島素編輯器中的<strong>從以下項目載入峰值</strong>預設值，只要點選一次，就能填入最常見胰島素的建議峰值（點選<strong>從以下項目載入峰值</strong>旁的小型 ⓘ，即可查看胰島素清單及其峰值）。之後仍可調整<strong>峰值</strong>和 <strong>DIA</strong>。
    
    只有在了解調整峰值的影響時，才將峰值改成建議值以外的數值。[胰島素曲線圖](#AapsScreens-insulin-profile)可協助您了解這些曲線。
    
    #### Novorapid
    
    ![Novorapid 峰值的胰島素曲線](../images/Profile/ConfBuild_Insulin_RAO.png)
    
    * 建議用於 Humalog、Novolog 和 Novorapid（在 **AAPS** v3 中稱為 *Rapid-Acting Oref*）
    * 峰值 = 注射後 75 分鐘
    
    #### Fiasp
    
    ![Fiasp 峰值的胰島素曲線](../images/Profile/ConfBuild_Insulin_URO.png)
    
    * 建議用於 Fiasp（在 **AAPS** v3 中稱為 *Ultra-Rapid Oref*）
    * 峰值 = 注射後 55 分鐘
    
    (Config-Builder-lyumjev)=
    #### Lyumjev
    
    ![Lyumjev 峰值的胰島素曲線](../images/Profile/ConfBuild_Insulin_L.png)
    
    * 建議用於 Lyumjev
    * 峰值 = 注射後 45 分鐘
    
    #### 自訂峰值
    
    * **AAPS** 4 中沒有獨立的「Free-Peak Oref」胰島素類型：您可以直接在[胰島素編輯器](#Config-Builder-insulin)中輸入任意<strong>峰值</strong>（35 至 120 分鐘），不必使用預設值。
    * 如果您使用的胰島素不在清單中，或使用多種胰島素的混合物，自訂峰值就很有用。
    
    (Config-Builder-insulin-dia)=
    ### 胰島素作用時間（DIA）和峰值
    
    ```{warning}
    使用循環時，降低 DIA 或峰值一定會增加胰島素注射量。 AAPS 中的 DIA 運作方式與商用 AID 系統不同。若不謹慎調整這些設定，胰島素劑量的變化可能會遠大於或遠小於預期。
    

AAPS 會使用數學公式來模擬胰島素作用的時間軸，並以**DIA**和密切相關的**峰值**設定進行調整。 DIA 是理論上 IOB 降至零所需的時間；峰值則是胰島素作用最強的時間點。這會產生 IOB 曲線和活性曲線；活性曲線代表 IOB 的**變化率**。

請注意，AAPS 執行循環時，出現[零基礎率](#Open-APS-features-super-micro-bolus-smb)時段是正常的。這些未輸注的基礎胰島素會從 IOB 中全數扣除，因此實際上 IOB 會比設定的 DIA 早好幾個小時降至零。您可以在主畫面中分別查看[注射 IOB 和基礎 IOB](#aaps-screens-iob-cob-basal-sens)。

若要設定 DIA 和峰值，請在主畫面點選**管理**，然後點選**胰島素設定**。 AAPS 會如下方所示，顯示目前使用中的胰島素組態：

![胰島素組態範例](../images/manage/insulin_profile.png)

此範例中的峰值設定為 55 分鐘，DIA 為 8 小時，而[胰島素濃度](#Insulin-Concentration)為標準的 100 IU/mL。

由於上述零基礎率的影響，以及 AAPS 使用的 IOB 衰減公式，大多數使用者設定的 DIA 都明顯長於商用系統中的設定。一般來說，許多人發現將 **DIA** 設為 9 小時很適合自己。在更熟悉 AAPS 並將個人設定檔調整妥當後，您可以參考以下資訊，找出適合自己的 DIA 和峰值設定。

````{admonition} DIA 和峰值設定的影響詳解 :class: dropdown

由於基礎率會間接影響 AAPS 中 IOB 的衰減，因此過高的基礎率可能會掩蓋過長的 DIA，反之亦然。建議先謹慎調整基礎率，再調整 DIA 和峰值。此外，請注意 DIA 和峰值設定會互相影響：DIA 的效果取決於峰值，反之亦然。

以下圖表顯示在允許的數值範圍內，調整 DIA 和峰值對 IOB 曲線造成的確切影響。

調整 DIA：

```{image} ../images/iob_remaining_static_peak.png :width: 400px

    <br />調整峰值：
    
    ```{image} ../images/iob_remaining_static_dia.png
    :width: 400px
    

最後，以下比較同時調整 DIA 和峰值的情況。這裡的原理是兩個數值都按相同的相對比例調整，因此 `49/35 ~ 7/5`。同理，`120/93 ~ 9/7`。只要兩者的相對變化相同，無論基準 DIA 或峰值為何，調整後的間隔都會一致。

```{image} ../images/iob_remaining_uniform.png :width: 400px

    <br />請注意，以這種方式調整 DIA 和峰值時，曲線上的每個點都會按相同的相對比例移動。
    
    ````
    
    #### DIA 和峰值設定的延伸閱讀
    
    * [AAPS 前身 OpenAPS 的技術詳解與歷史背景](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)。
    * [為什麼我們常常會錯估胰島素作用時間（DIA），以及這為什麼重要……](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)（Diabettech）。
    * [指數型胰島素曲線 + Fiasp](https://web.archive.org/web/20220630154425/http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)（See My CGM 封存頁面）。
    * [閉環系統中的 Humalog 修訂模型](https://bionicwookiee.com/2022/04/13/revised-humalog-model-in-a-closed-loop/)及 Bionic Wookie 上的其他文章，建議 Lyumjev、Fiasp、NovoRapid 和 Humalog 的 DIA 設為 9 小時。
    
    (Config-Builder-bg-source)=
    ## 血糖來源
    選取您使用的血糖來源。請參閱 [血糖來源](../Getting-Started/CompatiblesCgms.md) 頁面，了解更多設定資訊。
    
    ![設定 > 血糖來源](../images/v4/Configuration/configuration_bg_source.png)
    
    向下捲動即可查看其他來源：
    
    ![設定 > 血糖來源（續）](../images/v4/Configuration/configuration_bg_source_2.png)
    
    ![設定 > 血糖來源（清單結尾）](../images/v4/Configuration/configuration_bg_source_3.png)
    
    * [xDrip+ 血糖](../CompatibleCgms/xDrip.md)－也適用於 [Juggluco](../CompatibleCgms/Juggluco.md) 等相容的應用程式
    * [NSClient 血糖](../CompatibleCgms/CgmNightscoutUpload.md)－僅限了解相關操作的人使用，請參閱[血糖來源](../Getting-Started/CompatiblesCgms.md)。
    * [MM640g](../CompatibleCgms/MM640g.md)
    * Glimp－僅支援 4.15.57 以上版本
    * [BYODA（Build Your Own Dexcom App）](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)。
    * MicroTech CGM App－適用於 Aidex／LinX CGM
    * [Poctech](../CompatibleCgms/PocTech.md)
    * Tomato（MiaoMiao）－適用於 MiaoMiao 裝置的 Tomato App
    * [Glunovo](https://infinovo.com/)－適用於 Glunovo CGM 系統的 Glunovo App
    * Intelligo－Intelligo App
    * Syai／Ottai－適用於 Syai 和 Ottai 應用程式（請參閱 [Syai Tag](../CompatibleCgms/SyaiTagX1.md) 和 [Ottai](../CompatibleCgms/OttaiM8.md)）
    * SI App－已修補的 SI App 或 Sibionics App，適用於 Sibionics CGM
    * Sino App－已修補的應用程式，適用於 Sinocare CGM
    * Notification Reader－讀取官方 CGM 應用程式（Dexcom、Medtronic、Eversense 等）通知中顯示的血糖值
    * Instara－Instara App
    * 隨機血糖－產生隨機血糖資料以供測試。只有在使用 **Virtual Pump** 的工程（開發者）版本中才能啟用，因此無法在一般的 **AAPS** 安裝中使用。
    
    ## 平滑處理
    
    ![設定 > 平滑處理](../images/v4/Configuration/configuration_smoothing.png)
    
    請參閱[平滑處理血糖資料](../CompatibleCgms/SmoothingBloodGlucoseData.md)。
    
    ## 校正
    
    選擇 **AAPS** 如何處理從傳感器接收到的數值：
    
    - **不校正**：直接使用傳感器的數值。傳感器已在出廠時完成校正，且數值準確時，請使用此選項。此為預設選項。
    - **線性校正**：**AAPS** 會根據指尖採血紀錄計算斜率和偏移量，並用來修正感測器數值。
    
    **線性校正**的運作方式：
    
    - 必須記錄一次**更換感測器**，讓系統知道感測器使用期間何時開始。每次使用感測器的前 2 小時會略過，作為暖機時間。
    - 至少需要 **2 筆指尖採血紀錄**。較近期的紀錄會比舊紀錄有更大的影響。
    - 只有在結果落於安全範圍內時，才會套用修正。如果輸入紀錄的時間間隔太短，系統只會修正偏移量。
    - **開啟外掛**可查看校正狀態、目前使用的斜率和修正值，以及指尖採血紀錄清單。您可以使用 **新增校正**新增紀錄，也可以移除錯誤的紀錄。
    
    ```{admonition} 請謹慎校正
    :class: warning
    錯誤的指尖採血血糖值會導致血糖數值錯誤，進而造成胰島素劑量錯誤。測量前請先洗手，血糖快速變化時請勿進行校正。
    

![設定 &gt; 校正](../images/v4/Configuration/configuration_calibration.png)

(Config-Builder-pump)=

## 幫浦

選擇你正在使用的幫浦。請參閱[相容的幫浦](../Getting-Started/CompatiblePumps.md)頁面以獲取更多設置資訊。

![設定 &gt; 幫浦](../images/v4/Configuration/configuration_pump_list_1.png)

向下捲動即可查看所有幫浦驅動程式：

![設定 &gt; 幫浦（續）](../images/v4/Configuration/configuration_pump_list_2.png)

![設定 &gt; 幫浦（續）](../images/v4/Configuration/configuration_pump_list_3.png)

![設定 &gt; 幫浦（清單結尾）](../images/v4/Configuration/configuration_pump_list_4.png)

選擇其他幫浦時，**AAPS** 會要求您確認變更：

![切換外掛確認訊息](../images/v4/Pumps/switch_plugin_dialog.png)

* [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)
* Dana R Korean（適用於國內 DanaR 幫浦）
* Dana Rv2（升級了非官方韌體的 DanaR 幫浦）
* [Dana-i/RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)
* [Accu Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)
* [Accu Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)
* Omnipod 用於[Omnipod Eros](../CompatiblePumps/OmnipodEros.md)
* Dash 用於[Omnipod DASH](../CompatiblePumps/OmnipodDASH.md)
* [Medtronic](../CompatiblePumps/MedtronicPump.md)
* [Diaconn G8](../CompatiblePumps/DiaconnG8.md)
* [EOPatch2](../CompatiblePumps/EOPatch2.md)
* [Medtrum](../CompatiblePumps/MedtrumNano.md)
* [Equil 5.3](../CompatiblePumps/Equil5.3.md)
* [Carelevo](../CompatiblePumps/CareLevo.md)
* 虛擬幫浦：開放循環 - 僅限**AAPS**建議 
  * 當你開始使用**AAPS**時，在首次[完成目標](../SettingUpAaps/CompletingTheObjectives.md)的過程中
  * 針對尚未擁有驅動程式的幫浦

(config-builder-wrong-pump-data)=

### 訊息：「資料來自不同的幫浦」

**AAPS** 會記住目前連線的幫浦（幫浦類型和序號）。如果收到來自其他幫浦的資料，例如原本的幫浦更換成同型號的新幫浦後，系統會顯示此訊息，並忽略該幫浦傳來的資料：

![資料來自不同的幫浦](../images/Screen_DifferentPump.png)

若要使用新幫浦，請變更幫浦驅動程式：選擇 **Virtual pump** 並確認，然後再次選擇您的幫浦。接著，**AAPS** 會記錄目前連線的幫浦。

(Config-Builder-sensitivity-detection)=

## 敏感性偵測

![設定 &gt; 敏感度偵測](../images/v4/Configuration/configuration_sensitivity_detection.png)

選擇你正在使用的敏感性偵測類型。欲了解不同設計的更多詳細資訊，請[在這裡閱讀](../DailyLifeWithAaps/SensitivityDetectionAndCob.md)。此功能會即時分析歷史資料，並在你對胰島素的反應比平常更敏感（或相反，更具抗性）時進行調整。如需了解敏感度比率的計算方式，請參閱 [AAPS 主要功能 &gt; 自動敏感度調整](#Open-APS-features-autosens)。

您可以在主畫面的[額外圖表](#AapsScreens-section-g-additional-graphs)中查看敏感度：選取 SEN 並查看白色線條。請注意，你需要在[目標 8](#objectives-objective8)中，以便讓敏感度檢測/[自動敏感調整](#Open-APS-features-autosens)所提供的胰島素量。在達到該目標之前，Autosens 的百分比/圖表中的線僅供參考。

### 吸收設定

如果你使用 Oref1 與**SMB**，你必須將**min_5m_carbimpact**改成 8。該值僅在**CGM**讀數缺口期間或當身體活動“消耗”所有本應導致**AAPS**降解 COB 的血糖上升時使用。在無法根據你的血液反應動態計算[碳水化合物吸收](../DailyLifeWithAaps/CobCalculation.md)的情況下，系統會插入碳水化合物的預設衰減。基本上，這是一個安全保護機制。

(Config-Builder-aps)=

## APS

![設定 &gt; APS](../images/v4/Configuration/configuration_aps.png)

選擇用於治療調整的 APS 演算法。使用**開啟外掛**即可查看所選演算法目前運作狀態的詳細資訊。

* OpenAPS AMA 
  * 進階餐點輔助：不再建議使用的舊演算法。
  * 簡單來說，這些好處是在你提供餐前注射後，系統可以更快進行高溫调节，前提是你可靠地輸入碳水化合物。
* [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb) 
  * 超微量注射：建議所有用戶使用的最新演算法。
  * 與 AMA 不同，SMB 不使用臨時基礎率來控制血糖水平，而主要使用小型**超微量注射**。
  * 注意：建議你從一開始就使用這個演算法，儘管你實際上直到[目標 9](#objectives-objective9)才會收到 SMB。
* [自動ISF](#Open-APS-features-auto-isf) 
  * 供進階使用者使用的實驗性演算法。完成各項目標後，此演算法才會出現在清單中。

若要從 AMA 切換至 SMB 演算法，必須在 [設定 → 吸收設定](#Preferences-min_5m_carbimpact)中，手動將 *min_5m_carbimpact* 改為 **8**（SMB 的預設值）。

## 循環

此模組是 **AAPS** 的核心部分，無法停用。

![設定 &gt; 循環](../images/v4/Configuration/configuration_loop.png)

## 約束條件

![設定 &gt; 限制](../images/v4/Configuration/configuration_constraints.png)

### 目標

**AAPS**有一個學習計畫（一系列目標），你需要逐步完成。這將引導你安全地設置閉合循環系統。

請參閱[目標](../SettingUpAaps/CompletingTheObjectives.md)頁面以獲取更多資訊。

## 通訊

在此類別中（**AAPS** v3 稱為**同步**），您可以選擇是否要將資料傳送至其他位置，以及要傳送至何處。

![設定 &gt; 通訊](../images/v4/Configuration/configuration_communication.png)

向下捲動即可查看清單中的其他項目：

![設定 &gt; 通訊（續）](../images/v4/Configuration/configuration_communication_2.png)

### NSClientV3

可用作[報告伺服器](../SettingUpAaps/SettingUpTheReportingServer.md)以及/或[遠端監控](../RemoteFeatures/RemoteMonitoring.md)、[遠端控制](../RemoteFeatures/RemoteControl.md)。

請參閱[與報告伺服器同步](#SetupWizard-synchronization-with-the-reporting-server-and-more)，設定 NSClientV3 同步。

### Tidepool

可用作[報告伺服器](../SettingUpAaps/SettingUpTheReportingServer.md)。

請參閱[Tidepool](../SettingUpAaps/Tidepool.md)。

### xDrip

用於將血糖值和治療等資料**傳送**至同一支手機上的 xDrip+。其設定也包含 **將狀態傳送至 xDrip+**，這是一行包含 IOB 和 COB 的狀態資訊，xDrip+ 和部分智慧型手錶的配套 App 會顯示這些資訊。

### Open Humans

請參閱[Open Humans](../SupportingAaps/OpenHumans.md)。

(Config-Builder-wear)=

### Wear

透過 Wear OS 手錶監控及控制 **AAPS**。手錶的設定方式請參閱 [Wear OS 智慧型手錶](../WearOS/WearOsSmartwatch.md)。啟用外掛後，請在 [設定 > 手錶](#preferences-wear) 中選擇相關選項。手錶的使用方式請參閱 [透過 Wear OS 智慧型手錶操作 AAPS](../RemoteFeatures/RemoteControlWearOS.md)。

(external-companion-apps)=

### 外部輔助 App

在手機上廣播 **AAPS** 的狀態資料，讓手機上安裝的其他 App 能夠顯示這些資訊，例如智慧型手錶或小工具的配套 App。廣播的內容包括血糖和趨勢、IOB、COB、基礎率和臨時基礎率、設定檔名稱、循環狀態、手機和幫浦電量、藥量，以及注射進度。只有在你使用的配套 App 要求提供這些資料時，才啟用此功能。

已知會讀取此廣播資料的 App 包括 [WatchDrip+](https://bigdigital.home.blog/)（適用於 Xiaomi 和 Amazfit 手錶）、[GlucoDataHandler](https://github.com/pachi81/GlucoDataHandler)（適用於 Wear OS 複雜功能和小工具，也可透過 GlucoDataAuto 用於 Android Auto），以及 G-Watch App。這些 App 的設定方式請參閱 [智慧型手錶與 AAPS](#watches-external-companion-apps)。部分 App 也會使用上方 **xDrip** 外掛中的 **將狀態傳送至 xDrip+**，以顯示包含 IOB 和 COB 的狀態資訊。

在較早的版本中，此外掛稱為 **Samsung Tizen**，名稱取自最初為其開發的 [Samsung Tizen 手錶專用 G-Watch App](#Watchfaces-tizen)。

### Garmin

連接到 Garmin 設備（Fenix、Edge...）

## 治療

開啟**選單**（☰），然後選擇 [處置紀錄](#aaps-screens-treatments)，即可查看已記錄的處置。如果你想編輯或刪除某筆紀錄（例如，你實際攝取的碳水化合物比預期少），請選擇「移除」，然後在底部導覽列中前往**處置 → 碳水化合物**，輸入新的數值（必要時也可以變更時間）（請參閱 [碳水化合物](#screens-bolus-carbs)）。

## 一般問題

在 **AAPS** 4 中，**組態設定工具**的**一般**類別只列出 **Autotune**。以下說明的其他功能一律可用，不再需要在此啟用；各段落會說明如何找到這些功能。

![組態設定工具 > 一般](../images/v4/Configuration/configuration_general.png)

### 首頁總覽

**AAPS** 的[主畫面](#AapsScreens-the-homescreen)現在已不再是外掛，因此在**組態設定工具**中沒有自己的設定。過去在此處的選項現在位於**設定**（齒輪圖示）：[在對話方塊中顯示備註](#Preferences-show-notes-field-in-treatments-dialogs)、[狀態指示燈](#Preferences-status-lights)，以及注射嚮導使用的[注射比例](#Preferences-deliver-this-part-of-bolus-wizard-result)。 **AAPS** 3.x 的超級注射選項，在 **AAPS** 4 中[已無法作為設定使用](#Preferences-advanced-settings-overview)。

(Config-Builder-actions)=

### 操作

**AAPS** 3.x 的「動作」分頁已不再提供。其中的按鈕現在位於**管理**面板中，請參閱 [「動作」分頁到哪裡去了？](#screens-action-tab)。

### 自動化

**管理 → 自動化**可讓你管理[自動化](../DailyLifeWithAaps/Automations.md)功能，從[目標 10](#objectives-objective10)開始使用。

(Config-Builder-sms-communicator)=

### SMS(簡訊) 通訊器

允許遠端照護人員透過簡訊控制某些**AAPS**功能，請參閱[簡訊指令](../RemoteFeatures/SMSCommands.md)以獲取更多設置資訊。

### 食物

**管理 → 食物**會顯示 Nightscout 食物資料庫中設定的食物預設值。如需更多設定資訊，請參閱 [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods)。

注意：項目無法在**AAPS**計算機中使用。（僅供檢視）

(Config-Builder-autotune)=

### 自動調整

您可以啟用 Autotune，請參閱 [這裡](../AdvancedOptions/Autotune.md)。

### 維護

開啟**選單**（☰），然後選擇**維護**，即可匯出／匯入設定及管理記錄檔。

![維護畫面：記錄檔](../images/screens/maintenance.png)

![維護畫面：檔案管理](../images/screens/maintenance_2.png)

![維護畫面：資料庫管理](../images/screens/maintenance_3.png)

### 組態建置工具

現在稱為**組態設定工具**：也就是目前所在的頁面。