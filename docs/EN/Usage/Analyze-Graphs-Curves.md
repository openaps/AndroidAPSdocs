# Analyze graphs and curves

You will find in this page some tick an trips to begin the analysis of the different curves and graphs.

Always keep in mind that everyone is different. This page presents examples of curves and their interpretation to help you in the beginning, but you must make your own experience and learn to analyze your own curves according to your situation and what you did (meals, sports, stress ...) 


## Prediction curves

### Example of a standard meal with OpenAPS SMB

You'll see in the pictures below the evolution of the prediction curves during the 4 hours after a meal

![](..\images\4h_Meal_EN.jpg)

**COB prediction curve (orange):** For a meal, if you have correctly estimated the carbohydrate, the main curve to be analyzed is the COB curve. But it takes about 1 hour in this example before having prediction close to reality! And after one hour, it's the only curve that remains very stable...

**UAM prediction curve (yellow):** The UAM curve represents and extrapolates the deviation of the observed and expected CGM values. With prebolus a typical observation could be that the first hour, the UAM curve is far below COB curve but will rise slowly and be very close to the COB curve. Usually this means "everything is going according to plan"; carb amount has been estimated well.
With a larger pre-bolus time and a very flat postprandial BG curve the UAM curve might be below COB for a much longer period of time.
If the UAM curves deviates heavily from the COB curve:
If the UAM curve raises quickly above COB this might mean that carbs have been underestimated (i.e. 60g carbs eaten but only 30g or 40g estimated in AAPS calculator) or insulin underestimated (IC factor). Be careful when setting an action here. The algorithm most likely will have increased insulin already.
If the UAM curve had remained far below the COB curve, it could indicate an overestimated amount of carbs (or wrong IC). It may also mean that carbs don't materialize due to more physical activity, a stomach bug, ... the algorithm will reduce insulin but it is good to still have an eye open for hypoglycemia.

**IOB prediction curve (dark blue):** Because this curve does not take into account carbs, it is of interest only if you have a high BG before the meal and you do a pre-bolus. It allows to see how the BG will evolve and when it will be necessary to start the meal not to risk making a hypo.

**ZT prediction curve (light blue):** *mostly for internal calculation. Maximum impact a zero-temp can have on an IOB-only curve*



### Example of a meal with OpenAPS AMA

With OpenAPS AMA, you only have 3 prediction curves:

aCOB prediction curve: to be detailed...

COB prediction curve: see above

IOB prediction curve: see above





### Example when you have no COB (3 or 4 hours after last meal)

IOB

ZT

UAM



### Example of slow carbs





### Example of noisy sensor

You can have "noisy periods" with some sensors (eg Freestyle Libre) (see below)

![](..\images\Noisy_Sensor_EN.jpg)

As the prediction curve takes into account the 5 minutes of the delta, they are completely false when the sensor is in a noisy period. Always check that you are back in a "stable" period (without abrupt variation), before looking at the prediction curves again.
Noisy periods can last from a few minutes to several tens of minutes.



## Deviations bar

