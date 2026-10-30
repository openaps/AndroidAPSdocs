# 詞彙表

**AAPS** = AndroidAPS 是 Android 應用程式的名稱。

**AAPSClient** = the follower app for caregivers. On a follower phone it follows a user’s **AAPS** through the user’s **Nightscout** site and, once paired with the **AAPS** phone, controls it remotely. Not to be confused with **NSClient**. Further info → [Wiki - 'The AAPSClient app'](../RemoteFeatures/AapsClient.md) and [Master ↔ Client control](#client-master-control).

**Activity** = Insulin activity, representing the speed of decay of IOB. See [Wiki - 'DIA'](#Config-Builder-insulin-dia) and the related **BGI**.

**AID** = Automated Insulin Delivery. The term generally used in clinical practice and research for a system which automatically adjusts insulin delivery using **CGM** data. **APS** and **closed loop** mean the same thing → see also **OS-AID**.

**APS** = Artificial Pancreas System → see also **AID**.

**AMA** = 進階餐食輔助。一種演算法，允許 **AAPS** 在餐後注射胰島素後更積極地增加用戶的基礎胰島素。 Further info → [Wiki - 'Advanced Meal Assist (AMA)'](#Open-APS-features-advanced-meal-assist-ama).

**Adjustment Factor** = used within **DynamicISF** and is a value set within a user's **Settings** between 1% and 300%. 這作為**TDD**值的乘數。 See [Wiki - DynamicISF adjustment factor](#dyn-isf-adjustment-factor)

**Android Auto** = 一個系統，用於在車輛顯示螢幕中託管 Android 智慧型手機的某些功能，包括 **AAPS**。 Further info → [Wiki - 'android auto'](../RemoteFeatures/AndroidAuto.md).

**APK** = Android 應用程式包。是一個軟體安裝文件。一個軟體安裝檔案。 Further info → [Wiki - 'Building APK'](../SettingUpAaps/BuildingAaps.md).

**Autosens** = 在24小時和8小時的時間範圍內計算胰島素敏感性的變化。 Further info → [DIABETTECH - **Autosens**](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Azure** = 雲端計算平台，用於託管 **Nightscout** 網頁應用程式。Azure → 另見 **Nightscout**。

**BAT** = status light for low pump battery, shown in the status row of **AAPS'** main screen → see also **CAN** / **RES** / **SEN**.

**BG** = 血糖。

**BGI** = 血糖影響。根據胰島素活動，**血糖** 理應上升或下降的程度。

**BG source** = An AAPS setting for configuring the source for blood glucose data. See [Wiki - BG Source](#Config-Builder-bg-source)

**Bridge** = 一種將 **FGM** 轉換為 **CGM** 的附加設備。

**BR** = 基礎速率。在特定時間段內維持 **血糖 ** 穩定所需的胰島素量。 → 另見 **IC** / **ISF**.

**BYODA** = 自製 Dexcom 應用程式。一種用戶自行生成 Dexcom 應用程式以讀取 Dexcom G6 傳感器資料的方法。

**CAGE** = 導管使用時間。 Displayed on **AAPS'** main screen and in Nightscout, based on the user's **Prime/Fill** careportal entries → see also **Nightscout**.

**CAN** = status light for overdue cannula change, shown in the status row of **AAPS'** main screen → see also **BAT** / **RES** / **SEN**.

**CGM** = 連續血糖監測儀 → 另見 **FGM**。

**Closed Loop** = 一種閉環系統，根據 **AAPS** 的演算法和用戶的 **Profile** 設定，自動調整用戶的基礎胰島素輸送，無需用戶批准。 Further info → Wiki - 'closed loop' and see also **HCL** / **FCL**.

**COB** = 活性碳水化合物。這是目前可供用戶消化的碳水化合物量 → 另見 IOB。

**CSF** = 碳水化合物敏感性因子。即用戶的 **血糖** 因吸收 1 克碳水化合物而上升的程度。

**DIA** = 胰島素作用時間。 Further info → [Wiki - 'DIA'](#Config-Builder-insulin-dia) and see also → [DIABETTECH - 'DIA'](https://www.diabettech.com/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/).

**DST** = Daylight Savings Time. See [Wiki - Timezone Change and Daylight Saving](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

**Dynamic ISF (or DynISF)** = a feature within **AAPS** that adapts the insulin sensitivity factor (**ISF**) dynamically based on the user’s **TDD** and **BG**.

**eCarbs** = 延長碳水化合物。碳水化合物分散在數小時內以適應蛋白質，並允許 **AAPS** 提供延長的胰島素注射。 Further info → [Wiki - 'Extended Carbs'](../DailyLifeWithAaps/ExtendedCarbs.md)

**FCL** = Full Closed Loop. A loop which needs no mealtime input from the user: no carb counting and no meal bolus. Further info → Wiki - 'full closed loop' and see also **HCL**.

**FGM** = 由 Freestyle Libre 製造的即時血糖監測儀。進一步資訊 → Wiki - 「BG source」，另見「CGM」。

**git** = 一種版本管理工具，用於儲存和下載 **AAPS** 的程式碼。

**GitHub** = 一個基於網頁的託管服務和平臺，用於 **AAPS** 的軟體版本控制系統，用來追蹤檔案的變更並協調團隊工作。這對於更新 **APK** 也是必要的。進一步資訊 → Wiki - 「update APK」。

**Glimp** = 一個應用程式，用於收集 Freestyle Libre 的數值。

**HCL (or Hybrid Closed Loop)** = a loop which automates insulin delivery between meals, but still requires the user to bolus for meals. Nearly every system in everyday use, including **AAPS**, is a hybrid closed loop → see also **FCL** / **Closed Loop**.

**IC (I:C, ICR, CR, carb ratio)** = Insulin to Carb ratio. Note that this is conventionally g/U despite the acronym suggesting inverse.

**IOB** = 活性胰島素。在用戶體內仍然啟動的胰島素。 See [Wiki - Insulin on Board](#aaps-screens-iob)

**ISF** = 胰島素敏感性因子。注射一單位胰島素，預計血糖會下降的幅度。 Unit is either mg/dL/U or mmol/L/U. These are not equivalent without a conversion!

**金鑰庫 (或 JKS)** = 一個 Java 金鑰庫，這是一個加密檔案，存放您的個人開發者證書和密鑰，這些都是您在建立 (和重新建立) **AAPS'** 時所需的。

**LGS** = 低血糖暫停功能。 See [Wiki - Low Glucose Suspend](#KeyAapsFeatures-LGS)

**LineageOS** = 用於智慧型手機等設備的開放原始碼作業系統。 When using Accu-Chek Combo see [Wiki - Combo pump](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md).

**Log files** = **AAPS** 紀錄用戶操作的日誌文件（有助於問題排除和調試）。 Further info → [Wiki - 'log files'](../GettingHelp/AccessingLogFiles.md).

**maxIOB** = 最大活性胰島素。這是一項安全措施，可防止 `**AAPS**` 提供超過用戶設定的胰島素量。 Further info → [Wiki - 'Maximum total IOB OpenAPS can’t go over'](#Open-APS-features-maximum-total-iob-openaps-cant-go-over).

**min_5m_carbimpact** = 一種安全功能，用於計算當無法根據用戶血液反應確定碳水化合物吸收時，預設的碳水化合物衰減。 Further info → [Wiki - 'Preferences'](#Preferences-min_5m_carbimpact).

**Nightscout** = 一個開放原始碼的項目，用於存取和報告 **CGM** 資料。 The central data hub for the user’ **AAPS** data and can generate reports to view the user’s historical **Nightscout** data expected HbA1c, time in range or search for patterns in the data via percentile chart etc.

**Nightscout** → 另見 **Nightscout Reporter**。這對於追蹤孩子糖尿病管理的家長特別有用。

**Nightscout Reporter Tool** = 一個工具，用於從 Nightscout 網頁應用程式資料生成 PDF 報告。請參閱「Nightscout Reporter」、「NS Reporter」@ Facebook。

**NSClient** (**NSClientV3**) = the **AAPS** plugin that synchronizes data with **Nightscout** (**Configuration** → **Communication**). It is not the same as **AAPSClient**, the follower app. Further info → [Wiki - 'NSClient'](#Preferences-nsclient).

**OpenAPS** = Open Artificial Pancreas System, the predecessor project and basis of AAPS.

**Open Loop system** = **AAPS** 的一項功能，將建議調整，必須由用戶在 **AAPS** 上手動執行。 Further info → [Wiki - 'Open Loop'](#KeyAapsFeatures-OpenLoop).

**Oref0 / Oref1** = 敏感性偵測和 "參考設計實現版本 0/1"。這是 OpenAPS 背後的關鍵演算法。Wiki - 敏感性偵測。

**OS-AID** = Open-Source Automated Insulin Delivery. An **AID** system built from open-source software, such as **AAPS**, **OpenAPS**, Loop or Trio. These systems are not formally approved by health bodies (FDA, NHS etc.) → see also **AID**.

`**Peak time**` = 胰島素發揮最大效果的時間。 Further info → [Wiki - 'Duration of insulin action (DIA) and peak'](#Config-Builder-insulin-dia).

`**PH**` = 胰島素幫浦歷史紀錄。 This can be accessed in **AAPS’** treatments history: open the **menu** (☰) at the top left of the main screen and select **Treatments**.

**Predictions** = 基於不同計算方法對血糖的趨勢預測。 Further info → [Wiki - 'prediction lines'](#aaps-screens-prediction-lines).

**Profile** = 使用者的基本治療設定（基礎率、**DIA**、**IC**、**ISF**、**BG** 目標） **AAPS** only uses profiles created within **AAPS** (**Manage** → **Profile**), but **Nightscout** **Profiles** can be copied (synchronised) to **AAPS**. Further info → [Wiki - 'Your AAPS profile'](../SettingUpAaps/YourAapsProfile.md).

**Profile switch** = （臨時）將用戶的 **Profile** 切換到 **AAPS** 中儲存的另一個 **Profile**。

**Profile Percentage** = 一個（臨時）百分比增加或減少應用於用戶的 **Profile**，適用於選定的時間段。

**RES** = status light for overdue reservoir change, shown in the status row of **AAPS'** main screen → see also **BAT** / **CAN** / **SEN**.

**RileyLink** = 一種開放原始碼硬體設備，用於將藍牙低功耗（BLE）橋接到 916MHz（用於舊的美敦力幫浦）或 433MHz（用於 Omnipod Eros 幫浦）無線通訊。RileyLink。

**SAGE** = 傳感器時間。 This is displayed on the main screen of **AAPS** and in **Nightscout**, based on the user's **Sensor Insert** careportal entries → see also **Nightscout**.

**SEN** = status light for overdue sensor change, shown in the status row of **AAPS'** main screen → see also **BAT** / **CAN** / **RES**.

**Sensivity detection** = 根據運動、荷爾蒙等因素計算胰島素敏感性。 see also → [DIABETTECH - 'Autosens'](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Sensor noise** = 用於描述不穩定的 **CGM** 量測結果，導致血糖值“跳動”的術語。 Further info → [Wiki - 'Smoothing blood glucose data'](../CompatibleCgms/SmoothingBloodGlucoseData.md).

**SMB** = 超微量注射(Super Micro Bolus)。 **AAPS** 的一項功能，用於更快地注射胰島素，以調整血糖。 Further info → [Wiki - '**SMB**'](#Open-APS-features-super-micro-bolus-smb) and see also **UAM**.

**Super bolus** = 將基礎胰島素轉為注射胰島素，以更快地調整血糖。

**TBB** = 總基礎胰島素(total base basal)（24小時內的基礎速率總和）→ 另見 **TBR** / **TDD**。

**TBR** = 臨時基礎速率(temporary basal rate)→ 另見 **TBB** / **TDD**。

**TDD** = 每日總劑量 (total daily dose)（每日的注射+基礎胰島素）→ 另見 **TBB** / **TBR**。

**TT** = 臨時目標(temporary target)。用戶血糖目標（範圍）的臨時增加/減少，例如用於用餐或運動活動。 Further info → [Wiki - 'temp targets'](../DailyLifeWithAaps/TempTargets.md).

**UAM** = 未事先報備的用餐(unannounced meals)。偵測因餐飲、腎上腺素或其他因素引起的**血糖**水平顯著上升並嘗試進行調整。 Further info → [Wiki - 'UAM'](#enable-uam) and see also **SMB**.

**虛擬幫浦(Virtual pump)** = **AAPS** 的一項功能，允許用戶嘗試 **AAPS** 的功能，或供使用沒有 **AAPS** 驅動程式的幫浦型號進行閉環使用的糖尿病患者使用。→ 另見 **Open Loop**。

**Wallpaper** = **AAPS** 的背景圖像。參見手機頁面。

**xDrip** = open source software to read **CGM** systems.

**Zero-temp** = 臨時基礎速率(temporary basal rate) 設為 0%（無基礎胰島素輸送）。

→ 另見 [the OpenAPS documentation](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)