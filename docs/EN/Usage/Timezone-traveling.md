# Timezone traveling with pumps

## DanaR, Korean DanaR

There is no issue with changing timezone in phone because pump doesn't use history

## DanaRv2, DanaRS

These pumps need a special care because AndoridAPS is using history from the pump but the records in pump don't have timezone stamp. 
That means if you simple change timezone in phone, records will be read with different timezone and will be doubled. 
To avoid this do the following steps on every timezone change:

* switch phone for manual time zone change before travel

When get out of plane:

* turn off pump
* change timezone on phone
* turn off phone, turn on pump
* clear history in pump
* change time in pump
* turn on phone
* let phone connect to the pump and fine-tune time

## Combo

## Insight

The driver automatically adjusts the time of the pump to the time of the phone.

The Insight also records the history entries in which moment time was changed and from which (old) time to which (new) time. So the correct time can be determined in AAPS despite the time change. 

It may cause inaccuracies in the TDDs. But it shouldn't be a problem.

So the Insight user doesn't have to worry about timezone changes and time changes. There is one exception to this rule: The Insight pump has a small internal battery to power time etc. while you are changing the "real" battery. If changing battery takes to long this internal battery runs out of energy, the clock is reset and you are asked to enter time and date after inserting a new battery. In this case all entries prior to the battery change are skiped in calculation in AAPS as the correct time cannot be identified properly.


# Time adjustment daylight savings time (DST)

Depending on pump and CGM setup, jumps in time can lead to problems. With the Combo e.g. the pump history gets read again and it would lead to duplicate entries. So please do the adjustment while awake and not during the night.

If you bolus with the calculator please don't use COB and IOB unless you made sure they are absolutely correct - better don't use them for a couple of hours after DST switch.

## Accu-Chek Combo

1) Switch off automatic time zone in your phone.
2) Find a time zone that has the target time but doesn't use DST. For Central European Time (CET) this could be "Brazzaville" (Kongo). Change your phone's timezone to Kongo.
3) In AndroidAPS refresh you pump.
4) Check the Treatments tab... If you see duplicate treatments:
* DON'T press "delete future treatments"
* Hit "remove" on all future treatments and duplicate ones. This should invalidate the treatments rather than removing them so they will not be considered for IOB anymore.
5) If the state is unclear - please disable the loop for at least one DIA and Max-Carb-Time - whatever is bigger.

A good time to make this switch would be with low IOB. E.g. an hour before a meal.

## Accu-Chek Insight

* Change to DST is done automatically. No action required.

### Other pumps - new as of AAPS version 2.2 

<b><font color="#FF0000">You have to update AAPS to use this feature!</font></b>

* To prevent difficulties the Loop will be deactivated for 3 hours AFTER the DST switch. This is done for safety reasons (IOB too high due to duplicated bolus prior to DST change).
* You will receive a noticfication on the main screen 24 hours prior to DST change that loop will be disabled temporarily. This message will appear without beep, vibration or anything.
