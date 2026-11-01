# Timezone Change and Daylight Saving

When the time zone of your phone changes, **AAPS** calculates **IOB**, basal and sensitivity for the past again from scratch, about 10 seconds after the change. While this runs, the graphs and values on the main screen may take a moment to update.

(timezone-traveling-with-pumps)=

## Timezone change for Omnipod Dash

* Refresh the pump status in **Manage → Pump**
* Temporarily select a different **Profile** and then switch back to your original or desired **Profile**

## Timezone change for DanaR, Korean DanaR

手机更改时区没有问题，因为泵不使用历史记录。

(timezone-traveling-danarv2-danars)=

## Timezone change for DanaRv2, DanaRS, Dana-i

These pumps require special care because **AAPS** uses history from the pump but the records in pump do not have timezone stamp. **This means that if you change time zone in your phone, records will be read with different time zone and will be doubled.**

为避免这种情况，有两种可能的方法：

### 选项1：保持家乡时间并使用时间偏移配置文件

* Turn off 'Automatic date and time' in your phone's settings (manual time zone change).

* Your phone must keep your standard time as at home for the whole travel period.

* Time-shift your **Profile** according to time difference between home time and destination time.
   
   * Tap the **Profile** name on the main screen to open the [Profile screen](#ProfileSwitch-manage-v4)
   * Select your **Profile** and tap **▶ Activate**
   * Set '**Time shift**' according to your destination and tap **Activate**.
   
   ![带时间偏移的配置文件切换](../images/ProfileSwitchTimeShift2.png)
   
   * e.g. Vienna -> New York: **Profile Switch** +6 hours
   * e.g. Vienna -> Sydney: **Profile Switch** -8 hours

### 选项2：删除泵的历史记录

* 在手机设置中关闭“自动日期和时间”（手动更改时区）。

When you get off the plane:

* 关闭泵。
* 更改手机时区。
* 关闭手机，打开泵。
* 清除泵中的历史记录。
* 更改泵的时间。
* 打开手机。
* 让手机连接到泵并微调时间。

(timezone-traveling-insight)=

## Timezone Change for Insight

驱动程序会自动将泵的时间调整为手机的时间。

Insight还会记录历史条目，记录时间更改的时刻以及从（旧）时间到（新）时间的更改。 So the correct time can be determined in **AAPS** despite the time change.

It may cause inaccuracies in the **TDDs**. 但这应该不成问题。 

因此，Insight用户无需担心时区变化和时间变化。但这一规则有一个例外：Insight泵配有一个小型的内部电池，用于在更换“真实”电池时供电以保持时间等设置。 If changing battery takes too long this internal battery runs out of energy, the clock is reset and you are asked to enter time and date after inserting a new battery. 在这种情况下，由于无法正确识别正确的时间，AAPS（先进自动泵送系统）在计算时会跳过电池更换之前的所有记录。

## Timezone Change for Accu-Chek Combo

The [Combo driver](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) automatically adjusts the time of the pump to the time of the phone. The Combo cannot store timezones, only local time, which is precisely what the driver programs into the pump. 此外，它还在AAPS的本地偏好设置中存储时区，以便能够将泵的本地时间转换为具有时区偏移的完整时间戳。用户无需执行任何操作；如果Combo的时间与手机的当前时间相差太大，泵的时间会自动调整。

请注意，这需要一些时间，因为它只能在远程终端模式下进行，而该模式通常较慢。这是Combo（组合设备）的一个限制，无法克服。

## Timezone Change for Medtrum

驱动程序会自动将泵的时间调整为手机的时间。

Time zone changes keep the history intact, only TDD may be affected. Manually changing the time on the phone can cause problems with the history and **IOB**. If you change time manually double check the **IOB**.

When the time zone or time changes running **TBRs** are stopped.

(time-adjustment-daylight-savings-time-dst)=

## DAYLIGHT SAVING (DST)

Time adjustment for daylight savings time.

Depending on your pump and CGM setup, jumps in time can lead to problems with **AAPS** to function correctly. For some pumps it is better to make time zone adjustments while awake before DST takes place and not during the night.

### DST automatic adjustment for most pumps

* However, the **Loop** will be deactivated for 3 hours AFTER the DST switch (usually 1am onwards) has taken place and **AAPS** will default to background basal as selected in your **Profile**. This is done for safety reasons - **IOB** may be too high due to duplicated bolus prior to DST change.
* After DST has taken place, make a **Profile Switch** to the desired **Profile** to enable the **Loop**: tap the profile name on the main screen, then the round **▶** button (see [Activating a profile](#ProfileSwitch-manage-v4)).
* You will also receive a notification on **AAPS** main screen prior to DST change that the **Loop** has been disabled temporarily. This message will appear without beep, vibration or similar sound.

If you bolus with **AAPS'** calculator please do not use **COB** and **IOB** data unless you are sure this data is absolutely correct. Take caution and do not use this feature for a couple of hours after DST switch has taken place.

### DST for Accu-Chek Insight

* 夏令时的更改会自动进行。无需任何操作。

### DST for Accu-Chek Combo

* 夏令时的更改会自动进行。无需任何操作。

### DST for Medtrum

* 夏令时的更改会自动进行。无需任何操作。

### DST for Omnipod Dash

* Either allow **AAPS** to temporarily default to background basal after DST has taken place as explained above.
* Otherwise, if you do not want **AAPS** to temporarily default to background basal overnight, you can change the time zone the day before DST is due to take place to avoid overnight disruption. NOTE THIS OPTION MAY CAUSE YOUR POD TO PREMATURELY EXPIRE. PLEASE HAVE SUPPLIES WITH YOU IF OPTING FOR THE FEATURE BELOW.

#### 夏令时更改前的操作

1. Switch OFF any Phone's settings that automatically sets the Phone's time zone, so the user can change to a desired time zone that does not use DST. How to enable this will depend on your smartphone and Android version.
   
   * Some phones have two settings, one for automatic setting of the time (which ideally should remain on) and one for automatic setting of the time zone (which you must turn OFF: **Set automatically** under **Time zone** in the screenshot below).
   * Unfortunately, some Android versions have a single switch to enable automatic setting of both the time and the timezone. 现在你必须将其关闭。

![Screenshot_20260329-110315 (1)](../images/570963727-ca40c1c6-1697-4832-ae10-5cf6a1dc0bce.png)

2. Find a timezone that has the same time as your current location but doesn't use DST.
   
   * 可以在[https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)找到这些国家的列表。
   * For Central European Time (CET) this could be "Brazzaville" (Congo). Change your phone's timezone to Congo.

![Screenshot_20260329-111830](../images/570966323-b7b7f738-f91e-40df-ad79-f404fbfb9ae6.png)

3. In **AAPS** refresh your pump and switch to your desired **Profile**.

4. Check **AAPS's** **IOB** and **COB** and if this is inaccurate disable the **Loop** for at least one DIA or the maximum carb absorption time (**Absorption max time**), whichever is longer.

5. Actions to take after the clock change. A good time to make revert to local time zone is with low **IOB**. E.g. an hour before a meal such as breakfast. Ideally your **COB** and **IOB** should both be close to zero.