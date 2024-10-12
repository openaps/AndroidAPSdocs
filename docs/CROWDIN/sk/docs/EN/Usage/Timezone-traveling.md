# Timezone traveling with pumps

## DanaR, Korean DanaR

There is no issue with changing timezone in phone because pump doesn't use history

(Timezone-traveling-danarv2-danars)=

## DanaRv2, DanaRS

These pumps need a special care because AAPS is using history from the pump but the records in pump don't have timezone stamp. **That means if you simple change timezone in phone, records will be read with different timezone and will be doubled.**

To avoid this there are two possibilities:

### Option 1: Keep home time and timeshift profile

* Turn off 'Automatic date and time' in your phone settings (manual time zone change).
* Phone must keep your standard time as at home for the whole travel period.
* Time-shift your profile according to time difference between home time and destination time.
   
   * Long-press profile name (middle of top section on homescreen)
   * Select 'Profile Switch'
   * Set 'Time shift' according to your destination.
   
   ![Profile switch with time shift](../images/ProfileSwitchTimeShift2.png)
   
   * i.e. Vienna -> New York: profile switch +6 hours
   * i.e. Vienna -> Sydney: profile switch -8 hours
* Probably not an option if using [patched LibreLink app](Libre2-time-zone-travelling) as automatic time zone must be set to start a new Libre 2 sensor.

### Option 2: Delete pump history

* Turn off 'Automatic date and time' in your phone settings (manual time zone change)

When get out of plane:

* turn off pump
* change timezone on phone
* turn off phone, turn on pump
* clear history in pump
* change time in pump
* turn on phone
* let phone connect to the pump and fine-tune time

(Timezone-traveling-insight)=

## Insight

The driver automatically adjusts the time of the pump to the time of the phone.

The Insight also records the history entries in which moment time was changed and from which (old) time to which (new) time. So the correct time can be determined in AAPS despite the time change.

It may cause inaccuracies in the TDDs. But it shouldn't be a problem.

So the Insight user doesn't have to worry about timezone changes and time changes. There is one exception to this rule: The Insight pump has a small internal battery to power time etc. while you are changing the "real" battery. If changing battery takes to long this internal battery runs out of energy, the clock is reset and you are asked to enter time and date after inserting a new battery. In this case all entries prior to the battery change are skipped in calculation in AAPS as the correct time cannot be identified properly.

## Accu-Chek Combo

The [new Combo driver](../Configuration/Accu-Chek-Combo-Pump-v2.md) automatically adjusts the time of the pump to the time of the phone. The Combo cannot store timezones, only local time, which is precisely what the new driver programs into the pump. In addition, it stores the timezone in the local AAPS preferences to be able to convert the pump's localtime to a full timestamp that has a timezone offset. The user does not have to do anything; if the time on the Combo deviates too much from the phone's current time, the pump's time is automatically adjusted.

Note that this takes some time, however, since it can only be done in the remote-terminal mode, which is generally slow. This is a Combo limitation that cannot be overcome.

The old, Ruffy-based driver does not adjust the time automatically. The user has to do that manually. See below for the steps necessary to do that safely in case the timezone / daylight savings is the reason for the change.

(Timezone-traveling-time-adjustment-daylight-savings-time-dst)=

## Medtrum

The driver automatically adjusts the time of the pump to the time of the phone.

Timezone changes keep the history in tact, only TDD may be affected. Manually changing the time on the phone can cause problems with the history and IOB. If you change time manually double check the IOB.

When the timezone or time changes running TBR's are stopped.

# Time adjustment daylight savings time (DST)

Depending on pump and CGM setup, jumps in time can lead to problems. With the Combo e.g. the pump history gets read again and it would lead to duplicate entries. So please do the adjustment while awake and not during the night.

If you bolus with the calculator please don't use COB and IOB unless you made sure they are absolutely correct - better don't use them for a couple of hours after DST switch.

(Timezone-traveling-accu-chek-combo)=

## Accu-Chek Combo

**NOTE**: As mentioned above, this secton is only valid for the old, Ruffy-based driver. The new driver adjusts date and time and DST automatically.

AAPS will issue an alarm if the time between pump and phone differs too much. In case of DST time adjustment, this would be in the middle of the night. To prevent this and enjoy your sleep instead, follow these steps so that you can force the time change at a time convenient to yourself:

### Actions to take before the clock change

1. Switch OFF any setting that automatically sets the timezone, so you can force the time change when you want to. How you can do this will depend on your smartphone and Android version.
   
   * Some have two settings, one for automatic setting of the time (which ideally should remain on) and one for automatic setting of the timezone (which you must turn OFF).
   * Unfortunately some Android versions have a single switch to enable automatic setting of both the time and the timezone. You’ll have to turn this off for now.

2. Find a time zone that has the same time as your current location but doesn't use DST.
   
   * A list of these countries is available [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * For Central European Time (CET) this could be "Brazzaville" (Kongo). Change your phone's timezone to Kongo.

3. In AAPS refresh your pump.

4. Check the Treatments tab... If you see any duplicate treatments:
   
   * DON'T press "delete treatments in the future"
   * Hit "remove" on all future treatments and duplicate ones. This should invalidate the treatments rather than removing them so they will not be considered for IOB anymore.

5. If the situation on how much IOB/COB is unclear - for safety please disable the loop for at least one DIA and Max-Carb-Time - whatever is bigger.*

### Actions to take after the clock change

A good time to make this switch would be with low IOB. E.g. an hour before a meal such as breakfast, (any recent boluses in the pump history will have been small SMB corrections. Your COB and IOB should both be close to zero.)

1. Change the Android timezone back to your current location and re-enable automatic timezone.
2. AAPS will soon start alerting you that the Combo’s clock doesn’t match. So update the pump’s clock manually via the pump’s screen and buttons.
3. On the AAPS “Combo” screen, press Refresh.
4. Then go to the Treatments screen, and look for any events in the future. There shouldn’t be many.
   
   * DON'T press "delete treatments in the future"
   * Hit "remove" on all future treatments and duplicate ones. This should invalidate the treatments rather than removing them so they will not be considered for IOB anymore.

5. If the situation on how much IOB/COB is unclear - for safety please disable the loop for at least one DIA and Max-Carb-Time - whatever is bigger.*

6. Continue as normal.

## Accu-Chek Insight

* Change to DST is done automatically. No action required.

## Medtrum

* Change to DST is done automatically. No action required.

## Other pumps

* This feature is available since AAPS version 2.2.
* To prevent difficulties the Loop will be deactivated for 3 hours AFTER the DST switch. This is done for safety reasons (IOB too high due to duplicated bolus prior to DST change).
* You will receive a notification on the main screen prior to DST change that loop will be disabled temporarily. This message will appear without beep, vibration or anything.