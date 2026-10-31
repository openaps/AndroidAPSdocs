# Timezone Change and Daylight Saving

When the time zone of your phone changes, **AAPS** calculates **IOB**, basal and sensitivity for the past again from scratch, about 10 seconds after the change. While this runs, the graphs and values on the main screen may take a moment to update.

(timezone-traveling-with-pumps)=

## Timezone change for Omnipod Dash

* Refresh the pump status in **Manage → Pump**
* Temporarily select a different **Profile** and then switch back to your original or desired **Profile**

## Timezone change for DanaR, Korean DanaR

Нет проблем с изменением часового пояса в телефоне, так как в помпе не отслеживается история

(timezone-traveling-danarv2-danars)=

## Timezone change for DanaRv2, DanaRS, Dana-i

These pumps require special care because **AAPS** uses history from the pump but the records in pump do not have timezone stamp. **This means that if you change time zone in your phone, records will be read with different time zone and will be doubled.**

Во избежание этого существует две возможности:

### Вариант 1: продолжать пользоваться домашним временем и специально созданным профилем сдвига по времени

* Turn off 'Automatic date and time' in your phone's settings (manual time zone change).

* Your phone must keep your standard time as at home for the whole travel period.

* Time-shift your **Profile** according to time difference between home time and destination time.
   
   * Tap the **Profile** name on the main screen to open the [Profile screen](#ProfileSwitch-manage-v4)
   * Select your **Profile** and tap **▶ Activate**
   * Set '**Time shift**' according to your destination and tap **Activate**.
   
   ![Смена профиля с временным сдвигом](../images/ProfileSwitchTimeShift2.png)
   
   * e.g. Vienna -> New York: **Profile Switch** +6 hours
   * e.g. Vienna -> Sydney: **Profile Switch** -8 hours

### Вариант 2: Удалить историю работы помпы

* В настройках телефона отключите 'Автоматический выбор даты и времени' (изменение часового пояса вручную)

When you get off the plane:

* выключите помпу
* измените часовой пояс на телефоне
* выключите телефон, включите помпу
* выполните очистку истории на помпе
* измените время на помпе
* включите телефон
* позвольте телефону подключиться к помпе и точно подстроить время

(timezone-traveling-insight)=

## Timezone Change for Insight

Драйвер автоматически синхрониззирует время на помпе и на телефоне.

Insight также регистрирует прошедшие записи и момент смены времени и продолжительность до текущего момента. So the correct time can be determined in **AAPS** despite the time change.

It may cause inaccuracies in the **TDDs**. Однако это не должно быть проблемой.

Поэтому пользователю Insight не нужно беспокоиться об изменениях часового пояса и изменении времени. Данное правило содержит один недостаток: у помпы Insight очень маленькая внутренняя батарея для хранения времени. во время замены "настоящей" батареи. If changing battery takes too long this internal battery runs out of energy, the clock is reset and you are asked to enter time and date after inserting a new battery. В этом случае все записи до замены батареи пропускаются в расчётах в AAPS, так как правильное время должным образом не может быть определено.

## Timezone Change for Accu-Chek Combo

The [Combo driver](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) automatically adjusts the time of the pump to the time of the phone. The Combo cannot store timezones, only local time, which is precisely what the driver programs into the pump. Кроме того, драйвер хранит часовой пояс в локальных настройках AAPS, чтобы иметь возможность преобразовать местное время помпы в текущее время при смещении часового пояса. Пользователю не надо ничего делать; если время в Combo слишком сильно отклоняется от текущего времени телефона, время помпы регулируется автоматически.

Заметьте, что это занимает некоторое время, так как происходит в режиме дистанционного терминала, который работает медленно. Это ограничение Combo не может быть преодолено.

## Timezone Change for Medtrum

Драйвер автоматически синхрониззирует время на помпе и на телефоне.

Time zone changes keep the history intact, only TDD may be affected. Manually changing the time on the phone can cause problems with the history and **IOB**. If you change time manually double check the **IOB**.

When the time zone or time changes running **TBR's** are stopped.

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

* Переключение на DST производится автоматически. Никаких действий не требуется.

### DST for Accu-Chek Combo

* Переключение на DST производится автоматически. Никаких действий не требуется.

### DST for Medtrum

* Переключение на DST производится автоматически. Никаких действий не требуется.

### DST for Omnipod Dash

* Either allow **AAPS** to temporarily default background basal after DST has taken place as explained above.
* Otherwise, if you do not want **AAPS** to temporarily default to background basal overnight, you can change the time zone the day prior DST is due to take place to avoid overnight disruption. NOTE THIS OPTION MAY CAUSE YOUR POD TO PREMATURELY EXPIRE. PLEASE HAVE SUPPLIES WITH YOU IF OPTING FOR THE FEATURE BELOW.

#### Действия перед переводом времени

1. Switch OFF any Phone's settings that automatically sets the Phone's time zone, so the user can change to a desired time zone that does not use DST. How to enable this will depend on your smartphone and Android version.
   
   * Some phones have two settings, one for automatic setting of the time (which ideally should remain on) and one for automatic setting of the time zone (which you must turn OFF: **Set automatically** under **Time zone** in the screenshot below).
   * Unfortunately, some Android versions have a single switch to enable automatic setting of both the time and the timezone. Его надо пока что отключить.

![Screenshot_20260329-110315 (1)](../images/570963727-ca40c1c6-1697-4832-ae10-5cf6a1dc0bce.png)

2. Find a timezone that has the same time as your current location but doesn't use DST.
   
   * Список таких стран здесь [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * For Central European Time (CET) this could be "Brazzaville" (Congo). Change your phone's timezone to Congo.

![Screenshot_20260329-111830](../images/570966323-b7b7f738-f91e-40df-ad79-f404fbfb9ae6.png)

3. In **AAPS** refresh your pump and switch to your desired **Profile**.

4. Check **AAPS's** **IOB** and **COB** and if this is inaccurate disable the **Loop** for at least one DIA and Max-Carb-Time - whatever is bigger.

5. Actions to take after the clock change. A good time to make revert to local time zone is with low **IOB**. E.g. an hour before a meal such as breakfast. Ideally your **COB** and **IOB** should both be close to zero.