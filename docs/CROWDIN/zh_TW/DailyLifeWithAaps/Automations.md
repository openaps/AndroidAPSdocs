# 自動化

```{contents} In this page
:backlinks: entry
:depth: 2
```

## 什麼是自動化？

「**自動化**」是 AAPS 中可自動執行工作的功能。

自動化會根據一個或多個條件或觸發條件，執行特定動作。觸發可以包括不規則事件，如低或高血糖 (BG) 水準，或設定的負胰島素量 (IOB)。自動化也可以處理重複發生的事件，例如在一天中的特定時間用餐或運動，或在使用者位於特定 GPS 位置附近或 Wi-Fi SSID 範圍內時執行。自動化可以根據時間表或每次 Pod 變更執行 AAPS 設定備份。

您可以在「**自動化**」畫面（**管理 → 自動化**）中建立及修改自動化規則。每個規則由兩個屬性定義：

- 一個或多個開始行動的條件或“觸發”。

    思考某個時間表、一個事件或 AAPS 中的屬性值

- 一個或多個要執行的動作。

    Such as an alarm or setting a profile percentage or exporting the AAPS settings on Pod change.


有各種各樣的自動化選項，鼓勵用戶在 AAPS 應用中的自動化進行研究。你也可以在 [**Facebook**](https://www.facebook.com/groups/AndroidAPSUsers) 與 [**Discord**](https://discord.gg/4fQUWHZ4Mw) 上的 AAPS 用戶社團搜尋其他使用者的自動化範例。

## 自動化如何幫助你

1. **自動執行重複工作：**無須使用者操作，即可自動執行預先設定的動作。

1. **減少決策疲勞：****自動化**的主要好處是使用戶免於在 **AAPS** 中進行手動干預的負擔。[研究](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6286423/#ref4)估計，1型糖尿病患者每天需要做出額外的180個決策。**自動化**可以減輕心理負擔，釋放使用者的精神能量來處理生活中的其他事務。

1. **潛在改善血糖控制：** 例如，即使在繁忙的行程或忘記時，**自動化**可以確保在需要時候設置 **臨時目標**。例如，如果一位糖尿病兒童在每週二上午 10 點和每週四下午 2 點有校內體育活動，需要在活動前 30 分鐘執行高**臨時目標**('TT')，則可以通過**自動化**來啟動**臨時目標</0>。 </p></li>

1

**讓 AAPS 能高度自訂**，依照使用者偏好，在特定情況下採取較積極或較保守的處理方式。例如，在半夜出現負 **IOB** 時觸發一個暫時降低的 **設定檔** %，表示現有的 **設定檔** 可能過強。 </ol>

以下範例說明了如何透過**自動化**來簡化步驟。

用戶每天早上六點鍛鍊：他需要在早上五點在 AAPS 中手動設置 “臨時目標-活動”。

![Manual actions without automation](../images/Automations/automation_concept_manual.png)

用戶已設置一個**自動化**，以在早上五點觸發“臨時目標-活動”，確保他們的**血糖**和**體內胰島素**處於最佳狀態，以備下午六點的鍛鍊：

![Actions done by an automation](../images/Automations/automation_concept_automated.png)

## 開始使用自動化前的關鍵考慮因素

1. 在設置某些自動化之前，你應該對**BG**擁有合理的控制。自動化不應用於彌補不理想的基礎胰島素量、**ISF** 或 **CR** 設置（稍後將進一步討論）。避免設置自動**設定檔切換**來補償， _例如_ 食物引起的**血糖**升高，這些應透過其他策略處理（如 SMBs 等）。

1. 與任何技術一樣，**CGM**'s、**幫浦** 和手機都可能故障：技術問題或傳感器錯誤可能會干擾 **自動化** 動作，並可能需要手動干預。

1. **隨著日常作息改變，自動化規則的需求也可能改變**。當在工作/學校/假期之間變換時，請在日曆中設置提醒，以便查看目前哪些**自動化**活動（這些活動易於啟用和停用）。例如，您去度假時，可能不再需要為學校運動課或日常運動設定自動化，或需要調整執行時間。

1. **自動化** 之間可能會互相衝突，建議在安全的環境中仔細檢查任何新的**自動化**設定，並瞭解為什麼某個**自動化**可能未如你預期的方式觸發。

1. 如果使用 Autosens，請嘗試使用 **臨時目標** 而不是 **設定檔切換**。**臨時目標**不會將 Autosens 重置為 0，而**設定檔切換**會重置 Autosens。

1. 大多數**自動化**應僅設置為**有限時間**，之後 **AAPS** 可以重新評估並在必要時重複 **自動化**，如果條件仍然滿足。例如，「開始設定 7.0 mmol/L、持續 30 分鐘的臨時目標」或「開始設定 110% 的**設定檔**，持續 10 分鐘」，_以及_「開始設定 5.0 mmol/L、持續 10 分鐘的臨時目標」。使用**自動化**來創造永久變更（例如強化的 % 設定檔）有導致低血糖的風險。

## 何時可以開始使用自動化？

通過**目標 10** 後，你將可以啟用**自動化**。

## AAPS 中的自動化在哪裡？

在主畫面底部的導覽列中開啟**管理**，然後選取**自動化**。

## 如何設置自動化？

若要設定**自動化**，請在「自動化」畫面按下**+**按鈕，建立一項「規則」：

![自動化建立](../images/Automations/automation_create.png)

* 為「規則」命名（工作名稱）；
* 在**條件**下方按下「**編輯**」。在**條件**畫面中，選擇觸發條件的組合方式（**且**、**或**、**互斥或**），然後按下「**新增觸發條件**」：

![自動化條件](../images/Automations/automation_trigger_editor.png)

* 至少新增一項觸發條件：

![自動化觸發條件](../images/Automations/automation_triggers.png)

* 在**動作**下方按下「**新增**」，並選取一項動作：

![自動化動作](../images/Automations/automation_actions.png)

* 按下**儲存**按鈕來儲存規則，並確認規則名稱左側的核取方塊已勾選，以啟用**自動化**：

![已啟用自動化](../images/Automations/automation_rule_activated.png)

要停用**自動化**規則，請取消勾選**自動化**名稱左側的框。以下範例顯示已啟用（「已勾選」）或已停用（「未勾選」）的**自動化**：

![Automation rules switched on and off](../images/Automations/automation_rule_activated_deactivated.png)


在設置 **自動化** 時，你可以先透過在「動作」裡的啟用「通知」選項進行測試。這會觸發**AAPS**顯示通知，而不是自動執行動作。當你確認通知在正確的時間/條件下觸發時，可以更新**自動化**規則，將「通知」替換為「動作」。

![Alert actions](../images/Automations/automation_alert_actions.png)

```{admonition} Important note
:class: note

**自動化**在循環關閉時仍然是有效的!
```


## 檢查規則的時機

每次處理新的血糖讀取值時，**AAPS** 都會檢查所有**自動化**規則。因此，規則會依照 CGM 的更新頻率進行評估，即使手機螢幕關閉也一樣。手機開始充電、網路或位置變更，以及藍牙裝置連線時，也會檢查規則。同一時間只會執行一次檢查，因此若某項規則的動作需要較長時間才能完成（例如幫浦指令），就不會重複執行。

## 安全限制

針對**自動化**設置了安全限制：

* 透過**自動化**設定的**臨時目標</strong)，必須介於 72 至 180 mg/dL（或 4 至 10 mmol/L）之間。</li>
* **設定檔百分比** 必須在 50% 和 130% 之間。
* There is a 5 minute time limit between executions of **Automation** (and first execution).</ul>

## 正確使用負值

```{admonition} Warning
:class: warning

在**自動化**中選擇負值時小心
```

在**自動化**中的「條件」選擇‘小於’這類負值時，請務必謹慎。例如：

![Comparison operators](../images/Automations/automation_comparison_operators.png)

**範例 1：**建立條件「**小於**」「-0.1 mmol/L」（或「-2 mg/dL」）會：

對於任何小於 -0.1（-2）的數字觸發**自動化**。這包括像 -0.2、-0.3、-0.4（-4、-6、-8）等數字。請記住，-0.1（-2）本身**並不**包含在此條件內。（條件「小於或等於 -0.1 mmol/L（-2 mg/dL）」_則會_包含 -0.1 mmol/L 或 -2 mg/dL。）

**範例 2：**建立條件「大於」-0.1 mmol/L（-2 mg/dL）會：

在任何數值**大於**-0.1 mmol/L（-2 mg/dL）時觸發**自動化**。這包括 0、0.2、0.4 mmol/L（0、4、8 mg/dL）等數值，以及任何其他正數。

在選擇這些條件和數值時，仔細考慮你的**自動化**的具體意圖非常重要。

(automations-automation-triggers)=
## 自動化觸發器

![自動化觸發器](../images/Automations/automation_triggers.png)

向下捲動即可查看清單中的其他項目：

![自動化觸發條件（續）](../images/Automations/automation_trigger_picker_2.png)

用戶可以選擇各種“觸發”。觸發是執行自動化所必須滿足的條件。以下列表並不完整：

**觸發：** 連接條件

**選項：**

多個條件可以透過以下方式鏈接：
* “和”
* “或”
* “互斥或”（這意味著如果只有一個條件成立，動作將會發生）

**觸發：** 時間 vs. 重複時間

**選項：**

* 時間 = 單次事件
* 循環時間 = 經常發生的事件（例如每週一次、每個工作日等）

**觸發：** 位置

**選項：**

* 在[設定 > 自動化](#preferences-maintenance-settings)中，使用者可以選擇所需的位置服務。

**觸發：** 位置服務

**選項：**

* 使用被動位置：**AAPS** 只會在其他應用程式請求位置時獲取位置。
* 使用網路位置：你的 Wi-Fi 位置。
* 使用 GPS 定位（注意！這可能會導致過多的電池消耗！

**觸發器：** 幫浦和傳感器資料

* 插管時間觸發：所有幫浦均可用
* 胰島素時間觸發：支援幫浦可用
* 電池時間觸發：支援幫浦可用
* 傳感器時間觸發：始終可用
* Pod 註冊觸發：僅限貼片幫浦可用

請注意，對於所有與時間相關的觸發，平等比較不太可能觸發，因此在這種情況下需要兩個觸發來創建範圍

* 儲備液位觸發：所有幫浦均可用，且比較 "NOT\_AVAILABLE" 不適用於此觸發，因為值始終填入**AAPS**
* 幫浦電池電量觸發：支援幫浦可用，且比較 "NOT\_AVAILABLE" 不適用於此觸發，因為值始終填入**AAPS**

(automations-automation-action)=
## 動作

![自動化動作](../images/Automations/automation_actions.png)

向下捲動即可查看清單中的其他項目：

![自動化動作（續）](../images/Automations/automation_action_picker_2.png)

**動作：**啟動**臨時目標**

**選項：**

* **血糖**必須介於 72 mg/dL 至 180 mg/dL（4 mmol/L 至 10 mmol/L）之間
* **臨時目標**僅在目前沒有其他臨時目標時才會生效；**AAPS** 會自動在規則中加入「**前提條件：臨時目標不存在**」這一行

**動作：**停止**臨時目標**

**選項：**

無

**操作:** **設定檔百分比**

**選項：**

* **檔案**必須在 50% 和 130% 之間
* 僅在目前設定檔百分比為100%時有效

**Actions:** **Change smoothing** (in the **Loop & insulin** group)

**選項：**

* select the [smoothing method](../CompatibleCgms/SmoothingBloodGlucoseData.md) to switch to. The list is the same as under **Configuration** > **Smoothing**, and the action does exactly what a change there does: the new method is saved, synced to paired clients, and the BG data is smoothed again right away.
* 只有在該平滑處理方式目前尚未啟用時才會執行；**AAPS** 會自動在規則中加入「**前提條件：平滑處理方式……尚未啟用**」這一行。選取的平滑處理方式啟用後，系統會略過此規則，不會顯示提示。
* Example: a new sensor is often noisy during its first day. Two rules with the **Sensor age** trigger give stronger filtering while the sensor settles, and lag-free smoothing after that:
  * **Sensor age** less than 24 h: **Change smoothing** to **Unscented Kalman Filter**
  * **Sensor age** more than 24 h: **Change smoothing** to **Average smoothing**

**動作：****備註**（位於清單的**警示**類別中）

**選項：**

* 選取要記錄的事件：**備註**、**運動**、**問題**、**公告**或**幫浦部位變更</strong)，並可選擇輸入備註。動作名稱會隨您選取的事件而變更。</li>
* **持續時間**：適用於**備註**、**運動**和**幫浦部位變更**。**問題**和**公告**沒有持續時間設定，而是記錄您目前的血糖值。
* **幫浦部位變更**會重設導管的使用時間，就像您手動記錄更換部位一樣。範例：有些幫浦（例如 Combo）會自行記錄更換藥槽，但不會記錄更換部位。如果您總是同時更換兩者，可以設定一條規則：當**胰島素使用時間**少於 1 小時，且**導管使用時間**超過 24 小時時，自動記錄部位更換。</ul>

![「記事」動作的事件](../images/Automations/automation_action_careportal_events.png) ![「記事」動作設定為「更換幫浦部位」](../images/Automations/automation_action_careportal_site_change.png)

**Actions:** **Send SMS to all numbers** (in the **Alerts** group)

**選項：**

* 輸入訊息內容。訊息會傳送給「SMS 通訊外掛」設定中允許的所有電話號碼。必須啟用「SMS 通訊外掛」。

**動作：****變更設定檔為**（位於**設定檔**群組）

**選項：**

* 選取要註冊的**設定檔**。此設定檔會以 100% 啟用，不進行時間位移。如果此設定檔已啟用，這個動作就不會執行任何操作。

**動作：****啟用／停用 SMB**（位於**循環與胰島素**群組）

**選項：**

* 選擇**開啟**或**關閉**。這會變更 OpenAPS SMB 的**啟用 SMB**設定，效果與您在**設定**中變更設定相同；在您或其他規則將設定改回之前，這項設定都會維持不變。

**Actions:** **Run Autotune** (in the **Loop & insulin** group)

**選項：**

* 選取要調整的設定檔和天數：請參閱[使用自動化規則執行自動調整](#autotune-run-autotune-with-an-automation-rule)。

**動作：****停止處理**（位於**循環與胰島素**群組）

**選項：**

* 無平滑處理. While the conditions of a rule with this action are true, **AAPS** does not check the rules below it in the list. As soon as its conditions are false again, the rules below are checked as usual. 將此動作加入必須優先於後續規則執行的規則中（請參閱[自動化規則的順序](#Automations-the-order-of-the-automations-in-the-list-matters)）。

**動作：****執行場景**、**啟用場景**、**停用場景**（位於**場景**群組）

**選項：**

* 選取要執行、啟用或停用的[場景](Scenes.md)。

添加了「動作」後，應透過點擊並調整預設值，將預設數值更改為所需的數字。

![Temp target action values](../images/Automations/automation_action_temp_target_values.png)

(Automations-the-order-of-the-automations-in-the-list-matters)=
## 列表中**自動化**的順序非常重要
 **AAPS**將根據偏好的順序，由**自動化**列表由上往下開始執行規則。 For example, if the ‘Low’ **Automation** is the most important **Automation**, above all other rules, then this **Automation** should appear at the top of the user’s **Automation** list as demonstrated below:


![List of automation rules](../images/Automations/automation_rule_list.png)

若要調整**自動化**規則的優先順序，請長按規則右側的**=**控制柄。 Reorder the **Automations** by moving the rules up or down.

![Reorder automation rules](../images/Automations/automation_rule_reorder.png)

## 如何刪除自動化規則

要刪除**自動化**規則，請點擊垃圾桶圖示。

![Delete automation rules](../images/Automations/automation_rule_delete.png)

## 自動化範例

以下是**自動化**範例。 Further discussion on **Automations** and how users have individualised their **Automation** can be found in Facebook discussions groups or on Discord. 以下範例不應被複製，除非使用者對**自動化**的運作方式有充分暸解。

(automations-low-glucose-temp-target)=
### 低血糖臨時目標

此**自動化**會在**臨時目標**低於特定門檻時自動啟動；例如，當血糖低於 70 mg/dL 時，啟動 110 mg/dL 的目標並持續 30 分鐘：

![Example: low glucose rule](../images/Automations/automation_example_low_glucose_rule.png)

### 午餐時間臨時目標（包含「位置」）

![Example: lunch rule](../images/Automations/automation_example_lunch_rule.png)

這個**自動化**是為一名每天在工作時於相同時間吃午餐的用戶設置的，僅僅在用戶位於設定的‘位置’時才觸發。因此，如果使用者某天沒有上班，此**自動化**就不會啟動。

此**自動化**會在 13:00 設定較低的**臨時目標**（即將用餐），將血糖控制在 90 mg/dL（或 5 mmol/L），為午餐做準備。

「觸發」位置包含名稱、位置（點選**從地圖選取**，或使用您目前的位置）和半徑（公尺）；當您進入（或離開）該範圍時，就會觸發：

![Example: lunch rule with location condition](../images/Automations/automation_example_lunch_location_condition.png)

由於‘和’連線，只有在‘選擇的時間’並且使用者位於設定位置時，**自動化**才會發生。

在此位置的其他時間，或在所選位置周圍 50 公尺半徑以外的此時間，此**自動化**都不會觸發。

### Wi-Fi SSID 位置自動化

使用 Wi-Fi SSID 是在特定 Wi-Fi 網路範圍內觸發**自動化**的好方法（相較於 GPS）：定位相當精確、較省電，而且在 GPS 和其他定位服務可能無法使用的室內空間也能運作。

Here is another example of setting up a **Temp Target** for work days only before breakfast (1).


The **Automation** will trigger at 05:30am only on Monday-Friday (2)  
and while being connected to a home Wi-Fi network (3).


接著會設定 75 mg/dL 的**臨時目標**，持續 30 分鐘 (4)。加入位置資訊的優點之一是，例如使用者外出度假時，就不會觸發此自動化。

![Wi-Fi 規則：任務名稱 (1)、星期與時間條件 (2)，以及 Wi-Fi SSID 條件 (3)](../images/Automations/automation_example_wifi_rule.png)

向下捲動即可查看動作：設定 75 mg/dL 的**臨時目標**，持續 30 分鐘 (4)。

![Wi-Fi 規則動作：啟動 75 mg/dL 的臨時目標，持續 30 分鐘 (4)](../images/Automations/automation_example_wifi_action.png)

以下是詳細說明**自動化**觸發條件的截圖：

1) 在主要的「AND」條件下（必須同時符合兩個條件才會觸發） 1) 重複時間 = 週一、週二、週三、週四、週五，上午 5:30  
1) Wi-Fi SSID = My_Home_WiFi_Name

![Example: WiFi condition](../images/Automations/automation_example_wifi_condition.png)

(automating-preference-settings-export)=

## 自動化偏好設定匯出

### 不需人員監控的匯出：排程（每日）

顯示自動化觸發條件的截圖：

1) 條件：重複時間 = 週一、週二、週三、週四、週五 上午 8:00 1) 操作：設定匯出（在「治療中的文字」中輸入「每日」）

![排程匯出](../images/Automations/automation_settings_export_daily.png)

注意：匯出執行將記錄在照護入口上

### 不需人員監控的匯出：Pod 註冊（僅限修補版幫浦）

顯示自動化觸發條件的截圖：

1) 條件：Pod 註冊 1) 操作：設定匯出（在「治療中的文字」中輸入「Pod 註冊：設定匯出」）

![在 Pod 註冊時匯出](../images/Automations/automation_settings_export_pod_activation.png)

注意：匯出執行將記錄在照護入口上. 注意：如果你在此之前未執行手動設定匯出，自動化將**完全不會**觸發。如需正確啟用無人值守的設定匯出功能，請參閱[設定 → 維護](#preferences-maintenance-settings)。


## 自動化日誌

**AAPS** 會在**自動化**畫面底部的規則下方，顯示最近的**自動化**事件記錄。您可以利用這些記錄，確認規則是否如預期觸發。

在下方範例中，「**低血糖臨時目標**」規則 (1)（請參閱上方的[低血糖臨時目標](#automations-low-glucose-temp-target)）已啟用。記錄 (2) 顯示，下午 03:09 時血糖低於 70 mg/dL，因此觸發了規則：
* 執行的動作是「啟動臨時目標：110 mg/dL，持續 30 分鐘」：設定 110 mg/dL 的**臨時目標**，持續 30 分鐘；
* 結尾的**OK**表示動作已成功執行。

![自動化畫面：已啟用的規則 (1) 及其記錄項目 (2)](../images/Automations/automation_example_log.png)

(automations-troubleshooting)=

## 問題排除

* 問題：__我的自動化沒有被 AAPS 觸發嗎？__

請確認**自動化**名稱左側的方框已勾選，確保規則已啟用：

![Automation rules switched on and off](../images/Automations/automation_rule_activated_deactivated.png)

* 問題：__我的自動化順序不正確的觸發。__

請依照上文說明，檢查規則的優先順序。

* 問題：__某個條件顯示「未知觸發條件…… - 永遠不成立」。__

此規則包含這個版本的 **AAPS** 無法讀取的觸發條件，例如您切換回較舊的版本，或匯入較新版本的設定後。這類觸發條件永遠不會成立，因此規則不會執行。此觸發條件會維持原樣，讓較新版本仍可使用。請編輯規則並替換觸發條件，或更新 **AAPS**。

## 自動化的替代方案

對於進階使用者，還有其他選擇，例如使用 IFTTT 或第三方 Android 應用程式 Automate 來自動化任務。 
