# 詞彙表

**AAPS** = AndroidAPS 是 Android 應用程式的名稱。

**AAPSClient** = 供照護者使用的追蹤 App。追蹤者的手機會透過使用者的 **Nightscout** 網站追蹤使用者的 **AAPS**；與 **AAPS** 手機配對後，還能遠端控制該手機。請勿與 **NSClient** 混淆。更多資訊 → [Wiki－「AAPSClient App」](../RemoteFeatures/AapsClient.md)和[主控端 ↔ 用戶端控制](#client-master-control)。

**Activity（作用）** = 胰島素作用，代表體內胰島素（IOB）衰減的速度。請參閱[Wiki－「DIA」](#Config-Builder-insulin-dia)及相關的 **BGI**。

**AID** = 自動胰島素輸注。這個詞通常用於臨床實務和研究，指的是利用 **CGM** 資料自動調整胰島素輸注量的系統。 **APS** 和 **閉環** 的意思相同 → 另請參閱 **OS-AID**。

**APS** = 人工胰臟系統 → 另請參閱 **AID**。

**AMA** = 進階餐食輔助。一種演算法，允許 **AAPS** 在餐後注射胰島素後更積極地增加用戶的基礎胰島素。更多資訊 → [Wiki－「進階餐點輔助（AMA）」](#Open-APS-features-advanced-meal-assist-ama)。

**Adjustment Factor（調整係數）** = 用於 **DynamicISF**，是在使用者的 **設定** 中設定的數值，範圍介於 1% 至 300%。這作為**TDD**值的乘數。請參閱[Wiki－DynamicISF 調整係數](#dyn-isf-adjustment-factor)

**Android Auto** = 一個系統，用於在車輛顯示螢幕中託管 Android 智慧型手機的某些功能，包括 **AAPS**。更多資訊 → [Wiki－「android auto」](../RemoteFeatures/AndroidAuto.md)。

**APK** = Android 應用程式包。是一個軟體安裝文件。一個軟體安裝檔案。更多資訊 → [Wiki－「建置 APK」](../SettingUpAaps/BuildingAaps.md)。

**Autosens** = calculation of sensitivity to insulin over a 24-hour and an 8-hour window etc. 更多資訊 → [DIABETTECH－**自動敏感度調整**](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/)。

**Azure** = 用來代管 **Nightscout** 網頁 App 的雲端運算平台 → 另請參閱 **Nightscout**。

**BAT** = 幫浦電池電量不足的狀態燈，顯示在 **AAPS** 主畫面的狀態列 → 另請參閱 **CAN**／**RES**／**SEN**。

**BG** = 血糖。

**BGI** = 血糖影響。根據胰島素活動，**血糖** 理應上升或下降的程度。

**血糖來源** = AAPS 中用來設定血糖資料來源的選項。請參閱 [Wiki－血糖來源](#Config-Builder-bg-source)

**Bridge** = 一種將 **FGM** 轉換為 **CGM** 的附加設備。

**BR** = 基礎速率。在特定時間段內維持 **血糖 ** 穩定所需的胰島素量。 → 另見 **IC** / **ISF**.

**BYODA** = 自製 Dexcom 應用程式。一種用戶自行生成 Dexcom 應用程式以讀取 Dexcom G6 傳感器資料的方法。

**CAGE** = 導管使用時間。根據使用者在照護入口中輸入的 **預充／填充** 紀錄，顯示於 **AAPS** 主畫面和 Nightscout → 另請參閱 **Nightscout**。

**CAN** = 導管更換逾期的狀態燈，顯示在 **AAPS** 主畫面的狀態列 → 另請參閱 **BAT**／**RES**／**SEN**。

**CGM** = 連續血糖監測儀 → 另見 **FGM**。

**Closed Loop** = a closed loop system which makes automatic adjustments to the user’s basal delivery based on an **AAPS’s** algorithm and the user’s **Profile** settings without requiring the user’s approval. Further info → [Wiki - 'closed loop'](#KeyAapsFeatures-ClosedLoop) and see also **HCL** / **FCL**.

**COB** = 活性碳水化合物。這是目前可供用戶消化的碳水化合物量 → 另見 IOB。

**CSF** = 碳水化合物敏感性因子。即用戶的 **血糖** 因吸收 1 克碳水化合物而上升的程度。

**DIA** = 胰島素作用時間。更多資訊 → [Wiki -「DIA」](#Config-Builder-insulin-dia)，另請參閱 → [DIABETTECH -「DIA」](https://www.diabettech.com/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)。

**DST** = Daylight Saving Time. 請參閱 [Wiki - 時區變更與日光節約時間](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md)。

**Dynamic ISF（或 DynISF）** = **AAPS** 的一項功能，會根據使用者的 **TDD** 和 **血糖**，動態調整胰島素敏感係數（**ISF**）。

**eCarbs** = 延長碳水化合物。將碳水化合物分散在數小時內攝取（例如用來涵蓋脂肪／蛋白質的影響），讓 **AAPS** 能像延長注射一樣分配胰島素。更多資訊 → [Wiki -「延長碳水化合物」](../DailyLifeWithAaps/ExtendedCarbs.md)

**FCL** = 全閉環。這種循環系統不需要使用者在用餐時輸入資料：不必計算碳水化合物，也不必進行餐前注射。 Further info → [Wiki - 'full closed loop'](../AdvancedOptions/FullClosedLoop.md) and see also **HCL**.

**FGM** = 閃光式血糖監測器，例如 Abbott Freestyle Libre。 Further info → [Wiki - 'BG source'](#Config-Builder-bg-source) and see also 'CGM'.

**git** = a tool used to store and download the **AAPS’** source code.

**GitHub** = 一種網頁服務，用來託管 **AAPS** 原始碼並進行版本控制（追蹤檔案變更並協調相關工作，尤其適用於團隊），也能用來建置應用程式。 更新 **APK** 也需要使用這項服務。 Further info → [Wiki - 'update APK'](../Maintenance/UpdateToNewVersion.md).

**Glimp** = 用來收集 Freestyle Libre 讀取值的應用程式。

**HCL（或 Hybrid Closed Loop）** = 一種可自動調節兩餐之間胰島素輸注的循環系統，但使用者仍須自行進行餐前注射。幾乎所有日常使用的系統，包括 **AAPS**，都是混合式閉環 → 另請參閱 **FCL**／**Closed Loop**。

**IC（I:C、ICR、CR、碳水化合物比值）** = 胰島素與碳水化合物的比值。請注意，這個比值慣例上以 g/U 表示，儘管其縮寫看起來像是倒數。

**IOB** = 活性胰島素。在用戶體內仍然啟動的胰島素。請參閱 [Wiki - 胰島素作用中](#aaps-screens-iob)

**ISF** = 胰島素敏感性因子。注射一單位胰島素，預計血糖會下降的幅度。單位為 mg/dL/U 或 mmol/L/U。若未進行換算，這些單位並不相等！

**Keystore（或 JKS）** = Java 金鑰儲存庫，是一種加密檔案，用來儲存個人開發者憑證和金鑰；建置（及重新建置）**AAPS** 時會需要這些資料。

**LGS** = 低血糖暫停功能。請參閱 [Wiki - 低血糖暫停](#KeyAapsFeatures-LGS)

**LineageOS** = 用於智慧型手機等設備的開放原始碼作業系統。使用 Accu-Chek Combo 時，請參閱 [Wiki - Combo 幫浦](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)。

**Log files** = **AAPS** 紀錄用戶操作的日誌文件（有助於問題排除和調試）。更多資訊 → [Wiki -「記錄檔」](../GettingHelp/AccessingLogFiles.md)。

**maxIOB** = 最大活性胰島素。這是一項安全措施，可防止 `**AAPS**` 提供超過用戶設定的胰島素量。更多資訊 → [Wiki -「OpenAPS 的總胰島素作用中量上限」](#Open-APS-features-maximum-total-iob-openaps-cant-go-over)。

**min_5m_carbimpact** = 一種安全功能，用於計算當無法根據用戶血液反應確定碳水化合物吸收時，預設的碳水化合物衰減。 Further info → [Wiki - 'min_5m_carbimpact'](#Preferences-min_5m_carbimpact).

**Nightscout** = 一個開放原始碼的項目，用於存取和報告 **CGM** 資料。這是使用者 **AAPS** 資料的中央資料中心，可產生報告，供使用者查看歷史 **Nightscout** 資料，例如預估 HbA1c、目標範圍內時間，或透過百分位數圖表等方式搜尋資料中的模式。

**Nightscout** → 另見 **Nightscout Reporter**。這對於追蹤孩子糖尿病管理的家長特別有用。

**Nightscout Reporter Tool** = 一個工具，用於從 Nightscout 網頁應用程式資料生成 PDF 報告。請參閱「Nightscout Reporter」、「NS Reporter」@ Facebook。

**NSClient**（**NSClientV3**）= 用來與 **Nightscout** 同步資料的 **AAPS** 外掛（**組態設定** → **通訊**）。這和作為追蹤者應用程式的 **AAPSClient** 不同。更多資訊 → [Wiki -「NSClient」](#Preferences-nsclient)。

**OpenAPS** = 開放式人工胰臟系統，是 **AAPS** 的前身計畫，也是其基礎。

**Open Loop system** = **AAPS** 的一項功能，將建議調整，必須由用戶在 **AAPS** 上手動執行。更多資訊 → [Wiki -「開環」](#KeyAapsFeatures-OpenLoop)。

**Oref0 / Oref1** = 敏感性偵測和 "參考設計實現版本 0/1"。 It is the key algorithm behind OpenAPS. Further info → [Wiki - 'sensitivity detection'](../DailyLifeWithAaps/SensitivityDetectionAndCob.md).

**OS-AID** = 開放原始碼自動胰島素輸注。使用開放原始碼軟體打造的 **AID** 系統，例如 **AAPS**、**OpenAPS**、Loop 或 Trio。這些系統未經衛生主管機關（FDA、NHS 等）正式核准 → 另請參閱 **AID**。

`**Peak time**` = 胰島素發揮最大效果的時間。更多資訊 → [Wiki -「胰島素作用時間（DIA）與峰值」](#Config-Builder-insulin-dia)。

`**PH**` = 胰島素幫浦歷史紀錄。您可以在 **AAPS** 的治療紀錄中查看此項目：點選主畫面左上角的**選單**（☰），然後選擇**治療**。

**Predictions** = 基於不同計算方法對血糖的趨勢預測。更多資訊 → [Wiki -「預測線」](#aaps-screens-prediction-lines)。

**Profile** = 使用者的基本治療設定（基礎率、**DIA**、**IC**、**ISF**、**BG** 目標） **AAPS** 只會使用在 **AAPS** 中建立的設定檔（**管理** → **設定檔**），但可以將 **Nightscout** 的**設定檔**複製（同步）到 **AAPS**。更多資訊 → [Wiki -「您的 AAPS 設定檔」](../SettingUpAaps/YourAapsProfile.md)。

**設定檔切換** = 將使用者的**設定檔**暫時切換為 **AAPS** 中儲存的另一個**設定檔**。

**設定檔百分比** = 在指定期間內，暫時調高或調低使用者**設定檔**的百分比。

**RES** = 儲藥槽更換逾期的狀態燈，會顯示在 **AAPS** 主畫面的狀態列 → 另請參閱 **BAT**／**CAN**／**SEN**。

**RileyLink** = 開放原始碼硬體裝置，可將低功耗藍牙（BLE）橋接至 916 MHz（用於舊款 Medtronic 幫浦）或 433 MHz（用於 Omnipod Eros 幫浦）的無線通訊。

**SAGE** = 傳感器時間。此資訊會根據使用者在照護入口中記錄的**感測器植入**資料，顯示於 **AAPS** 主畫面和 **Nightscout** 中 → 另請參閱 **Nightscout**。

**SEN** = 感測器更換逾期的狀態燈，會顯示在 **AAPS** 主畫面的狀態列 → 另請參閱 **BAT**／**CAN**／**RES**。

**敏感度偵測** = 計算運動、荷爾蒙等因素造成的胰島素敏感度變化。另請參閱 → [DIABETTECH -「Autosens」](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/)。

**Sensor noise** = 用於描述不穩定的 **CGM** 量測結果，導致血糖值“跳動”的術語。更多資訊 → [Wiki -「平滑處理血糖資料」](../CompatibleCgms/SmoothingBloodGlucoseData.md)。

**SMB** = 超微量注射(Super Micro Bolus)。 **AAPS** 的一項功能，用於更快地注射胰島素，以調整血糖。更多資訊 → [Wiki -「**SMB**」](#Open-APS-features-super-micro-bolus-smb)，另請參閱 **UAM**。

**Super bolus** = 將基礎胰島素轉為注射胰島素，以更快地調整血糖。

**TBB** = 總基礎胰島素(total base basal)（24小時內的基礎速率總和）→ 另見 **TBR** / **TDD**。

**TBR** = temporary basal rate → see also **TBB** / **TDD**.

**TDD** = 每日總劑量 (total daily dose)（每日的注射+基礎胰島素）→ 另見 **TBB** / **TBR**。

**TT** = temporary target: temporary increase/decrease of the user’s **BG** target (range) e.g. for eating or sport activities. 更多資訊 → [Wiki -「臨時目標」](../DailyLifeWithAaps/TempTargets.md)。

**UAM** = 未事先報備的用餐(unannounced meals)。偵測因餐飲、腎上腺素或其他因素引起的**血糖**水平顯著上升並嘗試進行調整。更多資訊 → [Wiki -「UAM」](#enable-uam)，另請參閱 **SMB**。

**Virtual pump** = an **AAPS** feature which allows the user to try **AAPS’** functions, or lets PWD whose pump model has no **AAPS** driver use **AAPS** as an open loop → see also **Open Loop**.

**Wallpaper** = **AAPS** 的背景圖像。參見手機頁面。

**xDrip** = 用來讀取 **CGM** 系統的開放原始碼軟體。

**Zero-temp** = 臨時基礎速率(temporary basal rate) 設為 0%（無基礎胰島素輸送）。

→ 另見 [the OpenAPS documentation](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)