# Understanding the AndroidAPS screens

# The Homescreen

![Homescreen](https://github.com/roppenheimer/AndroidAPSdocs/blob/patch-3/docs/images/Home_screen.png)

This is the first screen you will come across when you open AndroidAPS and it contains most of the information that you will need day to day.

Section A: allows you to navigate between the various AndroidAPS modules by swiping left or right.

Section B: Allows you to change the loop status (open loop, closed loop, suspend loop etc), see your current profile, to see your current target blood glucose level and to set a temporary target. Long press on any of the buttons to alter the setting.

Section C: The latest blood glucose reading from your CGM, how long ago it was read, changes in the last 15 and 40 minutes, your current basal rate - including any temporary basal rate (TBR) programmed by the system, your insulin on board and carbs on board.

The insulin on board figure would be zero if just your standard basal was running and there was no insulin remaining from previous boluses. The figures in brackets show how much consists of insulin remaining from previous boluses and how much is a basal variation due to previous TBRs programmed by AAPS. This second component may be negative if there have recently been periods of reduced basal.

Section D: Is where you can select which information is displayed on the charts below.

Section E: Is the graph showing your blood glucose (BG) as read from your glucose monotor (CGM) it also shows Nightscout notifications such as fingerstick calibrations, and carbs entries. The purple line shows the predicted BG trend - if you have it selected.

The blue line shows the basal delivery of your pump. The dotted blue line is what the basal rate would be if there wre no temporaty basal adjustments (TBRs) and the solid blue line is the actual delivery over time. Long press on the graph to change the time scale. You can choose 6, 8, 12, 18 or 24 hours.

Section F: is also configurable using the options in section D. In this example we are showing the IoB (Insulin on Board) - if there were no TBRs and no remaining boluses this would be zero, the sensitivity, and the deviation. GREY bars show a deviation due to carbs, GREEN that BG is higher than the algorithm expected it to be and RED that it is lower than the algorithm expected.

Section F: enables you to administer a bolus (normally you would use the Calculator button to do this) and to add a fingerstick CGM calibration.

# The Calculator

![Calculator](https://github.com/roppenheimer/AndroidAPSdocs/blob/master/docs/images/Bolus_calculator.png)


When you want to make a meal bolus this is where you will normally make it from. 

Section A: contains is where you input the information about the bolus that you want. The BG field is normally already populated with the latest reading from your CGM. If you don't have a working CGM then it will be blank. In the CARBS field you add your estimate of the amount of carbs - or equivalent - that you want to bolus for. The CORR field is if you want to modify the end dosage for some reason, and the CARB TIME field is for pre-bolusing so you can tell the system that there will be a delay before the carbs are to be expected and the bolus will be delayed. You can put a negative number in this field if you are bolusing for past carbs.

SUPER BOLUS is where the basal insulin for the next two hours is added to the immediate bolus and a zero TBR is issued for the following two hours to take back the extra insulin. The idea is to deliver the insulin sooner and hopefully reduce spikes.

Section B: shows the calculated bolus. If the amount of insulin on boead already exceeds the calculated bolus then it will just display the amount of carbs still required.

Section C: shows the various elements that have been used to calculate the bolus. You can deselect any that you do not want to include but you normally wouldn't want to.
