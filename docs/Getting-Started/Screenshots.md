# Understanding the AndroidAPS screens

Homescreen

![Homescreen](https://github.com/roppenheimer/AndroidAPSdocs/blob/patch-3/docs/images/Home_screen.png)

This is the first screen you will come across when you open AndroidAPS and it contains most of the information that you will need day to day.

Section A: allows you to navigate between the various AndroidAPS modules by swiping left or right.

Section B: Allows you to change the loop status (open loop, closed loop, suspend loop etc), see your current profile, to see your current target blood glucose level and to set a temporary target. Long press on any of the buttons to alter the setting.

Section C: The latest blood glucose reading from your CGM, how long ago it was read, changes in the last 15 and 40 minutes, your current basal rate - including any temporary basal rate (TBR) programmed by the system, your insulin on board and carbs on board.

The insulin on board figure would be zero if just your standard basal was running and there was no insulin remaining from previous boluses. The figures in brackets show how much consists of insulin remaining from previous boluses and how much is a basal variation due to previous TBRs programmed by AAPS. This second component may be negative if there have recently been periods of reduced basal.

Section D: Is where you can select which information is displayed on the charts below.

Section E: Is the graph showing your blood glucose (BG) as read from your glucose monotor (CGM) it also shows Nightscout notifications such as fingerstick calibrations, and carbs entries. The purple line shows the predicted BG trend - if you have it selected.

The blue line shows the basal delivery of your pump. The dotted blue line is what the basal rate would be if there wre no temporaty basal adjustments (TBRs) and the solid blue line is the actual delivery over time. Long press on the graph to change the time scale. You can choose 6, 8, 12, 18 or 24 hours.

Section F: is also configurable using the options in section D. In this example we are showing the IoB (Insulin on Board) - if there were no TBRs and no remaining boluses this would be zero, the sensitivity, and the deviation (this is the difference between your actual BG and what the system expected it to be).

Section F: enables you to adminsiter a bolus (normally you would use the Calculator button to do this) and to add a fingerstick CGM calibration.
