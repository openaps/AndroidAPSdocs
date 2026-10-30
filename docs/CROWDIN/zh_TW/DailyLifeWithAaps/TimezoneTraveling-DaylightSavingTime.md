# 時區變更與夏令時間

When the time zone of your phone changes, **AAPS** calculates **IOB**, basal and sensitivity for the past again from scratch, about 10 seconds after the change. While this runs, the graphs and values on the main screen may take a moment to update.

(timezone-traveling-with-pumps)=

## Omnipod Dash 的時區變更

* Refresh the pump status in **Manage → Pump**
* 先暫時選擇不同的 **設定檔**，然後再切換回原本或想要的 **設定檔**

## DanaR、Korean DanaR 的時區變更

更改手機時區沒有問題，因為幫浦不使用歷史紀錄。

(timezone-traveling-danarv2-danars)=

## DanaRv2、DanaRS、Dana-i 的時區變更

這些幫浦需要特別注意，因為 **AAPS** 會使用幫浦的歷史紀錄，但幫浦中的紀錄沒有時區標記。**這代表如果你在手機更改時區，紀錄會以不同時區被讀取，並可能出現成雙倍紀錄。**

為避免這種情況，有兩種可能的解決方法：

### 方案1：保持家庭時間並時間調整設定

* 在手機的設定中關閉「自動日期與時間」（改用手動調整時區）。

* 整個旅行期間，手機必須一直維持你在家所在的標準時間。

* 依照家中時間與目的地時間的時差，調整你的 **設定檔** 時間偏移。
   
   * Tap the **Profile** name on the main screen to open the [Profile screen](#ProfileSwitch-manage-v4)
   * Select your **Profile** and tap **▶ Activate**
   * Set '**Time shift**' according to your destination and tap **Activate**.
   
   ![設定切換與時間調整](../images/ProfileSwitchTimeShift2.png)
   
   * e.g. Vienna -> New York: **Profile Switch** +6 hours
   * e.g. Vienna -> Sydney: **Profile Switch** -8 hours

### 方案2：刪除幫浦歷史紀錄

* 在手機設定中關閉「自動日期和時間」（手動更改時區）。

當下飛機時：

* 關閉幫浦。
* 更改手機時區。
* 關閉手機，打開幫浦。
* 清除幫浦中的歷史紀錄。
* 更改幫浦中的時間。
* 打開手機。
* 讓手機連線到幫浦並微調時間。

(timezone-traveling-insight)=

## Insight 的時區變更

驅動程式會自動將幫浦的時間調整為手機的時間。

Insight 也會紀錄更改時間的歷史項目，紀錄時間從哪個（舊）時間更改為哪個（新）時間。如此一來，儘管時間已變更，**AAPS** 仍能判定正確的時間。

這可能導致 **TDD** 不精準。但這不應該成為問題。

因此 Insight 使用者不需要擔心時區變更和時間更改。此規則有一個例外：Insight 幫浦內部有一個小型電池來供電時間等。當你更換「主」電池時保持時間運作。如果更換電池的時間過長，這個內部電池會耗盡電力，時鐘將被重置，並在插入新電池後要求輸入時間和日期。在這種情況下，更換電池之前的所有項目將在 AAPS 的計算中被跳過，因為無法正確識別正確的時間。

## Accu-Chek Combo 的時區變更

The [Combo driver](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) automatically adjusts the time of the pump to the time of the phone. The Combo cannot store timezones, only local time, which is precisely what the driver programs into the pump. 此外，他會將時區儲存在本地 AAPS 偏好設定中，以便將幫浦的本地時間轉換為具有時區偏移的完整時間戳記。使用者不需要做任何操作；如果 Combo 的時間與手機的目前時間相差太大，幫浦的時間會自動調整。

請注意，這需要一些時間，因為只能在遠端終端模式下完成，而該模式通常較慢。這是 Combo 無法克服的限制。

## Medtrum 的時區變更

驅動程式會自動將幫浦的時間調整為手機的時間。

時區變更會保持歷史紀錄不變，只有 **TDD** 可能受影響。手動更改手機時間可能會導致歷史紀錄與 **IOB** 出現問題。如果你手動更改時間，請再次確認 **IOB**。

當時區或時間變更時，正在執行的 **臨時基礎率** 會被停止。

(time-adjustment-daylight-savings-time-dst)=

## 夏令時間（DST）

夏令時間調整。

視您的幫浦和 CGM 設定而定，時間跳動可能導致 **AAPS** 無法正常運作。對某些幫浦來說，最好在夏令時間調整前、清醒時調整時區，而不要在夜間進行。

### 多數幫浦的 DST 自動調整

* However, the **Loop** will be deactivated for 3 hours AFTER the DST switch (usually 1am onwards) has taken place and **AAPS** will default to background basal as selected in your **Profile**. 這是基於安全考量—在 DST 變更前重複注射可能導致 **IOB** 偏高。
* After DST has taken place, make a **Profile Switch** to the desired **Profile** to enable the **Loop**: tap the profile name on the main screen, then the round **▶** button (see [Activating a profile](#ProfileSwitch-manage-v4)).
* 夏令時間調整前，您也會在 **AAPS** 主畫面收到通知，告知**循環**已暫時停用。 This message will appear without beep, vibration or similar sound.

若你使用 **AAPS** 的計算機進行注射，除非你確定這些資料完全正確，否則請不要使用 **COB** 與 **IOB** 資料。請小心，且在 DST 切換完成後的數小時內不要使用此功能。

### Accu-Chek Insight 的 DST

* DST 變更會自動完成。無需進行任何操作。

### Accu-Chek Combo 的 DST

* DST 變更會自動完成。無需進行任何操作。

### DST for Medtrum

* DST 變更會自動完成。無需進行任何操作。

### DST for Omnipod Dash

* Either allow **AAPS** to temporarily default background basal after DST has taken place as explained above.
* Otherwise, if you do not want **AAPS** to temporarily default to background basal overnight, you can change the time zone the day prior DST is due to take place to avoid overnight disruption. NOTE THIS OPTION MAY CAUSE YOUR POD TO PREMATURELY EXPIRE. PLEASE HAVE SUPPLIES WITH YOU IF OPTING FOR THE FEATURE BELOW.

#### 更改時鐘前的操作

1. 關閉手機中會自動設定時區的設定，這樣使用者就能切換到不採用夏令時間的時區。如何操作取決於你的智慧型手機與 Android 版本。
   
   * Some phones have two settings, one for automatic setting of the time (which ideally should remain on) and one for automatic setting of the time zone (which you must turn OFF: **Set automatically** under **Time zone** in the screenshot below).
   * 不幸的是，有些 Android 版本只有一個開關，同時控制時間與時區的自動設定。你現在必須關閉這個開關。

![Screenshot_20260329-110315 (1)](../images/570963727-ca40c1c6-1697-4832-ae10-5cf6a1dc0bce.png)

2. 找到一個與你目前所在地時間相同、但不使用 DST 的時區。
   
   * 可在此找到這些國家的列表 [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * For Central European Time (CET) this could be "Brazzaville" (Congo). Change your phone's timezone to Congo.

![Screenshot_20260329-111830](../images/570966323-b7b7f738-f91e-40df-ad79-f404fbfb9ae6.png)

3. In **AAPS** refresh your pump and switch to your desired **Profile**.

4. 請檢查 **AAPS** 的 **IOB** 和 **COB**；如果數值不準確，請停用**循環**至少一個 DIA 和 Max-Carb-Time 的時間，以較長者為準。

5. 更改時鐘後的操作. 在 IOB 較低時，是切回當地時區的好時機。例如，在早餐等餐點前一小時。理想情況下，你的 **COB** 與 **IOB** 都應接近 0。