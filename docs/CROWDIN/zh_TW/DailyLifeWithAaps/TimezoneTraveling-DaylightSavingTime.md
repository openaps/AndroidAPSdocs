# Timezone Change and Daylight Saving

## 與幫浦跨時區旅行

## Timezone change for Omnipod Dash

* Refresh the Dash tab
* Temporarily select a different **Profile** and then switch back to your original or desired **Profile**

## Timezone change for DanaR, Korean DanaR

更改手機時區沒有問題，因為幫浦不使用歷史紀錄。

## Timezone change for DanaRv2, DanaRS

These pumps require special care because **AAPS** uses history from the pump but the records in pump do not have timezone stamp. **This means that if you change time zone in your phone, records will be read with different time zone and will be doubled.**

為避免這種情況，有兩種可能的解決方法：

### 方案1：保持家庭時間並時間調整設定

* Turn off 'Automatic date and time' in your phone's settings (manual time zone change).

* Your phone must keep your standard time as at home for the whole travel period.

* Time-shift your **Profile** according to time difference between home time and destination time.
   
   * Long-press **Profile** name (middle of top section on homescreen)
   * Select '**Profile Switch**'
   * 根據你的目的地設置「時間調整」。
   
   ![設定切換與時間調整](../images/ProfileSwitchTimeShift2.png)
   
   * i.e. Vienna -> New York: **Profile Switch** +6 hours
   * i.e. Vienna -> Sydney: **Profile Switch** -8 hours

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

## Timezone Change for Insight

驅動程式會自動將幫浦的時間調整為手機的時間。

Insight 也會紀錄更改時間的歷史項目，紀錄時間從哪個（舊）時間更改為哪個（新）時間。 So the correct time can be determined in **AAPS** despite the time change.

It may cause inaccuracies in the **TDDs**. 但這不應該成為問題。

因此 Insight 使用者不需要擔心時區變更和時間更改。 此規則有一個例外：Insight 幫浦內部有一個小型電池來供電時間等。 當你更換「主」電池時保持時間運作。 如果更換電池的時間過長，這個內部電池會耗盡電力，時鐘將被重置，並在插入新電池後要求輸入時間和日期。 在這種情況下，更換電池之前的所有項目將在 AAPS 的計算中被跳過，因為無法正確識別正確的時間。

## Timezone Change for Accu-Chek Combo

新的[Combo 驅動程式](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)會自動將幫浦的時間調整為手機的時間。 Combo 幫浦無法儲存時區，只能記錄本地時間，而新驅動正是將本地時間寫入幫浦中。 此外，他會將時區儲存在本地 AAPS 偏好設定中，以便將幫浦的本地時間轉換為具有時區偏移的完整時間戳記。 使用者不需要做任何操作；如果 Combo 的時間與手機的目前時間相差太大，幫浦的時間會自動調整。

請注意，這需要一些時間，因為只能在遠端終端模式下完成，而該模式通常較慢。 這是 Combo 無法克服的限制。

舊的基於 Ruffy 的驅動程式無法自動調整時間。 使用者必須手動進行調整。 如果是因為時區或夏令時間變更，請參閱下方的安全操作步驟。

## Timezone Change for Medtrum

驅動程式會自動將幫浦的時間調整為手機的時間。

Time zone changes keep the history intact, only TDD may be affected. Manually changing the time on the phone can cause problems with the history and **IOB**. If you change time manually double check the **IOB**.

When the time zone or time changes running **TBR's** are stopped.

## DAYLIGHT SAVING (DST)

Time adjustment daylight savings time

Depending on your pump and CGM setup, jumps in time can lead to problems with **AAPS** to function correctlyy. For instance with the Combo pump, the pump history is read twice leading to duplicate entries. For some pumps it is better to make time zone adjustments while awake and not during the night.

### DST automatic adjustment for most pumps

* This adjustment feature is available for **AAPS** version 2.2 onwards.
* Howeever, the fully closed Loop will be deactivated for 3 hours AFTER the DST switch (usually 1am onwards) has taken place and **AAPS** will default to background basal as selected in your **Profile**. This is done for safety reasons - **IOB** may be too high due to duplicated bolus prior to DST change.
* After DST has taken place, select **Profile Switch** to user's desired **Profile** to enable fully closed Loop.
* You will also receive a notification on **AAPS** main screen prior to DST change that the Fully Closed Loop has been disabled temporarily. This message will appear without beep, vibration or anything.**

If you bolus with **AAPS'** calculator please do not use **COB** and **IOB** data unless you are sure this data is absolutely correct. Take caution and do not use this feature for a couple of hours after DST switch has taken place.

### DST for Accu-Chek Insight

* DST 變更會自動完成。 無需進行任何操作。

### DST for Medtrum

* DST 變更會自動完成。 無需進行任何操作。

### DST for Omnipod Dash

* Either allow **AAPS** to temporarily default background basal after DST has taken place as explained above.
* Otherwise, if you do not want **AAPS** to temporarily default to background basal overnight, you can change the time zone the day prior DST is due to take place to avoid overnight disruption. NOTE THIS OPTION MAY CAUSE YOUR POD TO PREMATURELY EXPIRE. PLEASE HAVE SUPPLIES WITH YOU IF OPTING FOR THE FEATURE BELOW.

#### 更改時鐘前的操作

1. Switch OFF any Phone's settings that automatically sets the Phone's time zone, so the user can change to a time zone that does not use DST. How to enable this will depend on your smartphone and Android version.
   
   * Some phones have two settings, one for automatic setting of the time (which ideally should remain on) and one for automatic setting of the time zone (which you must turn OFF).
   * Unfortunately, some Android versions have a single switch to enable automatic setting of both the time and the timezone. 你現在必須關閉這個開關。

<img width="576" height="1289" alt="Screenshot_20260329-110315 (1)" src="https://github.com/user-attachments/assets/ca40c1c6-1697-4832-ae10-5cf6a1dc0bce" />

2. Find a timezone that has the same time as your current location but doesn't use DST.
   
   * 可在此找到這些國家的列表 [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * 對於中歐時間（CET），這可能是「布拉柴維爾」（剛果）。 將你的手機時區更改為剛果。

<img width="576" height="1289" alt="Screenshot_20260329-111830" src="https://github.com/user-attachments/assets/b7b7f738-f91e-40df-ad79-f404fbfb9ae6" />

3. **AAPS** refresh your pump and switch to your desired **Profile**.

4. Check **AAPS's** **IOB** and **COB** and if this is inaccurate disable the Fully Closed Loop for at least one DIA and Max-Carb-Time - whatever is bigger.

5. Actions to take after the clock change. A good time to make revert to local time zone is with low **IOB**. E.g. an hour before a meal such as breakfast. Ideally your **COB** and **IOB** should both be close to zero.

### DST for Accu-Chek Combo

This section is only valid for the old, Ruffy-based driver. 新的驅動程式會自動調整日期和時間以及 DST。

**AAPS** will issue an alarm if the time between pump and phone differs too much. 在 DST 時間調整的情況下，這通常會發生在夜間。 為了避免這種情況，並讓你可以安穩睡覺，請遵循以下步驟，以便你能夠在方便的時間強制更改時間：

#### 更改時鐘前的操作

1. 關閉任何自動設置時區的設置，以便你可以在需要時強制更改時間。 如何操作將取決於你的智慧型手機和 Android 版本。
   
   * 某些設備有兩個設置，一個是自動設置時間（理想情況下應保持開啟），另一個是自動設置時區（必須關閉）。
   * 不幸的是，一些 Android 版本只有一個開關，可以自動設置時間和時區。 你現在必須關閉這個開關。
   
   Screenshot_20260329-110315 (1)

2. Find a timezone that has the same time as your current location but doesn't use DST.
   
   * 可在此找到這些國家的列表 [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * 對於中歐時間（CET），這可能是「布拉柴維爾」（剛果）。 將你的手機時區更改為剛果。

3. In **AAPS** refresh your pump.

4. 檢查治療標籤... 如果看到任何重複的治療：
   
   * 請勿按「刪除未來治療」
   * 請按「移除」所有未來的治療和重複的治療。 這樣可以使治療無效，而不是將其移除，因此他們將不再被計入 IOB。

5. 如果 IOB/COB 的情況不清楚——為了安全起見，請停用循環至少一個 DIA 和最大碳水化合物時間，以較大的為準。

#### 更改時鐘後的操作

A good time to make this switch would be with low **IOB**. 例如，在用餐前一小時，例如早餐，（幫浦歷史紀錄中的任何近期注射將是小的 SMB 校正）。 Your **COB** and **IOB** should both be close to zero.)

1. 將 Android 時區更改回你的目前位置，並重新啟用自動時區。
2. **AAPS** will soon start alerting you that the Combo’s clock doesn’t match. 因此，請透過幫浦螢幕和按鈕手動更新幫浦的時鐘。
3. On the **AAPS** “Combo” screen, press Refresh.
4. 然後轉到治療畫面，查看是否有任何未來事件。 應該不會有太多。
   
   * 請勿按「刪除未來治療」
   * 請按「移除」所有未來的治療和重複的治療。 這樣可以使治療無效，而不是將其移除，因此他們將不再被計入 IOB。

5. 如果 IOB/COB 的情況不清楚——為了安全起見，請停用循環至少一個 DIA 和最大碳水化合物時間，以較大的為準。

6. 正常繼續。