# 詞彙表

**AAPS** = AndroidAPS 是 Android 應用程式的名稱。

**AAPSClient**（或 **NSClient**）= 一個遠端控制功能，可供照護者透過手機來追蹤用戶的 **AAPS**，藉由連線到用戶的 **Nightscout** 網站來實現。 進一步資訊 → Wiki - 「NS Client」。 在 **AAPS** 中的目標學習程式提供逐步指導。 進一步資訊 → Wiki - 「objectives」。

**APS** = 人工胰臟系統。

**AMA** = 進階餐食輔助。 一種演算法，允許 **AAPS** 在餐後注射胰島素後更積極地增加用戶的基礎胰島素。 進一步資訊 → Wiki - 「AMA」。

**調整因子** = 在**動態ISF**中使用，是用戶**偏好設定**中設定的值，範圍是1%到300%。 這作為**TDD**值的乘數。

- 將**調整因子**的值提高到100%以上會使得**動態ISF**變得更積極：**ISF**值變得更小（即需要更多的胰島素來使**血糖**值下降少量）。
- 將**調整因子**的值降低到100%以下會使得**動態ISF**變得不那麼具積極：**ISF**值變得更大（即需要更少的胰島素來使**血糖**值下降少量）。

**Android Auto** = 一個系統，用於在車輛顯示螢幕中託管 Android 智慧型手機的某些功能，包括 **AAPS**。 進一步資訊 → Wiki - 「android auto」。

**APK** = Android 應用程式包。是一個軟體安裝文件。 一個軟體安裝檔案。 進一步資訊 → Wiki - 「Building APK」。

**Autosens** = 在24小時和8小時的時間範圍內計算胰島素敏感性的變化。 進一步資訊 → DIABETTECH - **Autosens**。

**Azure** = 雲端計算平台，用於託管 **Nightscout** 網頁應用程式。Azure → 另見 **Nightscout**。

**BAT** = 在 **AAPS** 主螢幕上的狀態指示燈，表示電池電量低。**偏好設定**, 截圖 → 另見 **CAN** / **RES** / **SEN**。

**BG** = 血糖。

**BGI** = 血糖影響。 根據胰島素活動，**血糖** 理應上升或下降的程度。

**BG source** = 用戶的血糖數值來源，從 **CGM** 或 **FGM** 透過系統整合軟體（如 **BYODA**、**xDrip+** 等）獲取。 進一步資訊 → Wiki - 「BG source」。

**Bridge** = 一種將 **FGM** 轉換為 **CGM** 的附加設備。

**BR** = 基礎速率。 在特定時間段內維持 **血糖 ** 穩定所需的胰島素量。 → 另見 **IC** / **ISF**.

**BYODA** = 自製 Dexcom 應用程式。一種用戶自行生成 Dexcom 應用程式以讀取 Dexcom G6 傳感器資料的方法。

**CAGE** = 導管使用時間。 **CAGE** = 導管使用年限。顯示在 **AAPS** 主螢幕和 Nightscout 上，提供用戶在動作標籤 / 選單中輸入的資訊 → 另見 **Nightscout</0>。</p> 

**CAN** = 在 **AAPS** 主螢幕上的狀態指示燈，表示導管更換逾期。**偏好設定** → 另見 **BAT** / **RES** / **SEN**。

**CGM** = 連續血糖監測儀 → 另見 **FGM**。

**Closed Loop** = 一種閉環系統，根據 **AAPS** 的演算法和用戶的 **Profile** 設定，自動調整用戶的基礎胰島素輸送，無需用戶批准。 進一步資訊 → Wiki - 「closed loop」。

**COB** = 活性碳水化合物。 這是目前可供用戶消化的碳水化合物量 → 另見 IOB。

**CSF** = 碳水化合物敏感性因子。 即用戶的 **血糖** 因吸收 1 克碳水化合物而上升的程度。

**DIA** = 胰島素作用時間。 進一步資訊 → Wiki - 「insulin types」及另見 → DIABETTECH - 「DIA」。

**DST** = 夏令時間 Wiki DST。

**動態ISF** = 在**AAPS**中的一個功能，根據用戶的：

- 每日胰島素總量（**TDD**）；以及
- 當前和預測的**血糖**值動態調整胰島素敏感度因子（**ISF**）。

**eCarbs** = 延長碳水化合物。 碳水化合物分散在數小時內以適應蛋白質，並允許 **AAPS** 提供延長的胰島素注射。 進一步資訊 → Wiki - 「eCarbs」、「eCarbs use」。

**FGM** = 由 Freestyle Libre 製造的即時血糖監測儀。 進一步資訊 → Wiki - 「BG source」，另見「CGM」。

**git** = 一種版本管理工具，用於儲存和下載 **AAPS** 的程式碼。

**GitHub** = 一個基於網頁的託管服務和平臺，用於 **AAPS** 的軟體版本控制系統，用來追蹤檔案的變更並協調團隊工作。 這對於更新 **APK** 也是必要的。 進一步資訊 → Wiki - 「update APK」。

**Glimp** = 一個應用程式，用於收集 Freestyle Libre 的數值。

**IC (or I:C)** = 胰島素與碳水化合物比率。 （即一單位胰島素能對應多少碳水化合物？）。

**IOB** = 活性胰島素。 在用戶體內仍然啟動的胰島素。

**ISF** = 胰島素敏感性因子。 注射一單位胰島素，預計血糖會下降的幅度。

**金鑰庫 (或 JKS)** = 一個 Java 金鑰庫，這是一個加密檔案，存放您的個人開發者證書和密鑰，這些都是您在建立 (和重新建立) **AAPS'** 時所需的。

**LGS** = 低血糖暫停功能。 `**AAPS**` 會在 `**血糖**` 下降時減少基礎胰島素，若 `**血糖**` 上升，則只有在 `**IOB**` 為負值（來自之前的 `**LGS**`）時才會增加基礎胰島素，否則基礎速率將保持與用戶選擇的 `**Profile**` 相同。 用戶在處理低血糖後可能會暫時經歷血糖飆升，但無法在反彈期間增加基礎胰島素。 → 另見objective 6。

**LineageOS** = 用於智慧型手機等設備的開放原始碼作業系統。 （當使用 Accu-Chek Combo 時，請參閱 Wiki - Combo pump）。

**Log files** = **AAPS** 紀錄用戶操作的日誌文件（有助於問題排除和調試）。 進一步資訊 → Wiki - 「log files」。

**maxIOB** = 最大活性胰島素。 這是一項安全措施，可防止 `**AAPS**` 提供超過用戶設定的胰島素量。 進一步資訊 → Wiki - 「SMB」。

**min_5m_carbimpact** = 一種安全功能，用於計算當無法根據用戶血液反應確定碳水化合物吸收時，預設的碳水化合物衰減。 這是一項安全措施。 進一步資訊 → Wiki - 「組態建置工具」。

**Nightscout** = 一個開放原始碼的項目，用於存取和報告 **CGM** 資料。 這是用戶 `**AAPS**` 資料的中央資料中心，並可以生成報告以查看用戶的歷史 `**Nightscout**` 資料（預計 HbA1c、範圍內的時間）或透過百分比圖表等搜尋資料模式。

**Nightscout** → 另見 **Nightscout Reporter**。 這對於追蹤孩子糖尿病管理的家長特別有用。

**Nightscout Reporter Tool** = 一個工具，用於從 Nightscout 網頁應用程式資料生成 PDF 報告。 請參閱「Nightscout Reporter」、「NS Reporter」@ Facebook。

**NSClient**（或 **‘AAPSClient’**）= 請參閱 **AAPSClient**。

**OpenAPS** = 開放式人工胰臟系統。

**Open Loop system** = **AAPS** 的一項功能，將建議調整，必須由用戶在 **AAPS** 上手動執行。 進一步資訊 → Wiki - 「組態建置工具」。

**Oref0 / Oref1** = 敏感性偵測和 "參考設計實現版本 0/1"。 這是 OpenAPS 背後的關鍵演算法。Wiki - 敏感性偵測。

`**Peak time**` = 胰島素發揮最大效果的時間。 進一步資訊 → Wiki - 「組態建置工具」。

`**PH**` = 胰島素幫浦歷史紀錄。 **PH** = 胰島素幫浦歷史紀錄。這可以在 **AAPS** 的治療選單中查看，位於 **AAPS</0> 主螢幕右側的三點選單中。截圖。</p> 

**Predictions** = 基於不同計算方法對血糖的趨勢預測。 進一步資訊 → Wiki - 「prediction lines」。

**Profile** = 使用者的基本治療設定（基礎率、**DIA**、**IC**、**ISF**、**BG** 目標） AAPSv3 僅支援在 **AAPS** 中建立的本地設定檔，但 **Nightscout** 的設定檔可以同步到 **AAPS**。 進一步資訊 → Wiki- 「profile」。

**Profile switch** = （臨時）將用戶的 **Profile** 切換到 **AAPS** 中儲存的另一個 **Profile**。

**Profile Percentage** = 一個（臨時）百分比增加或減少應用於用戶的 **Profile**，適用於選定的時間段。

**RES** = 在 **AAPS** 主螢幕上的狀態指示燈，表示胰島素庫更換逾期。**偏好設定**, 截圖 → 另見 **BAT** / **CAN** / <0>SEN</0>。

**RileyLink** = 一種開放原始碼硬體設備，用於將藍牙低功耗（BLE）橋接到 916MHz（用於舊的美敦力幫浦）或 433MHz（用於 Omnipod Eros 幫浦）無線通訊。RileyLink。

**SAGE** = 傳感器時間。 這會顯示在 **AAPS** 的主畫面以及 **Nightscout** 中，如果在 Actions 標籤/選單中輸入了資訊 → 另見 **Nightscout**。

**SEN** = 主螢幕上的狀態指示燈，表示傳感器更換。**偏好設定**, 截圖 → 另見 **BAT** / **CAN** / <0>RES</0>。

**Sensivity detection** = 根據運動、荷爾蒙等因素計算胰島素敏感性。 另見 → DIABETTECH - 「Autosens」。

**Sensor noise** = 用於描述不穩定的 **CGM** 量測結果，導致血糖值“跳動”的術語。 進一步資訊 → Wiki - 「sensor noise」。

**SMB** = 超微量注射(Super Micro Bolus)。 **AAPS** 的一項功能，用於更快地注射胰島素，以調整血糖。 進一步資訊 → Wiki - '**SMB**' 另見 **UAM**.

**Super bolus** = 將基礎胰島素轉為注射胰島素，以更快地調整血糖。

**TBB** = 總基礎胰島素(total base basal)（24小時內的基礎速率總和）→ 另見 **TBR** / **TDD**。

**TBR** = 臨時基礎速率(temporary basal rate)→ 另見 **TBB** / **TDD**。

**TDD** = 每日總劑量 (total daily dose)（每日的注射+基礎胰島素）→ 另見 **TBB** / **TBR**。

**TT** = 臨時目標(temporary target)。用戶血糖目標（範圍）的臨時增加/減少，例如用於用餐或運動活動。 進一步資訊 → Wiki - 「temp targets」。

**UAM** = 未事先報備的用餐(unannounced meals)。 偵測因餐飲、腎上腺素或其他因素引起的**血糖**水平顯著上升並嘗試進行調整。 進一步資訊 → Wiki - 'UAM' 另見 **SMB**。

**虛擬幫浦(Virtual pump)** = **AAPS** 的一項功能，允許用戶嘗試 **AAPS** 的功能，或供使用沒有 **AAPS** 驅動程式的幫浦型號進行閉環使用的糖尿病患者使用。→ 另見 **Open Loop**。

**Wallpaper** = **AAPS** 的背景圖像。參見手機頁面。

**xDrip+** = 用於讀取 **CGM** 系統的開放原始碼軟體。xDrip+。

**Zero-temp** = 臨時基礎速率(temporary basal rate) 設為 0%（無基礎胰島素輸送）。

→ 另見 [the OpenAPS documentation](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)