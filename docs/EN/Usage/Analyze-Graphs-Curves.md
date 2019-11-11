# Analyze graphs and curves

You will find in this page some tick an trips to begin the analysis of the different curves and graphs.

Always keep in mind that everyone is different. This page presents examples of curves and their interpretation to help you in the beginning, but you must make your own experience and learn to analyze your own curves according to your situation and what you did (meals, sports, stress ...) 


## Prediction curves

### Example of a standard meal with OpenAPS SMB

You'll see in the pictures below the evolution of the prediction curves during the 4 hours after a meal

![](..\images\4h_Meal_EN.jpg)

COB prediction curve (orange): For a meal, if you have correctly estimated the carbohydrate, the main curve to be analyzed is the COB curve. But it takes about 1 hour in this example before having prediction close to reality! And after one hour, it's the only curve that remains very stable...

UAM prediction curve (yellow): the first hour, the UAM curve is far below COB curve but it raise slowly and after one hour, it's very close to COB curve. That means that estimated carbs entered for the meal was quite good... If the UAM curve had quickly raised far above the COB curve, it would probably indicate an underestimated amount of carbs (or may be a IC too high). If the UAM curve had remained far below the COB curve, even after 1 hour, it would probably indicate an over-estimated amount of carbs (or may be a too low IC).

IOB prediction curve (dark blue): Because this curve does not take into account carbs, it is of interest only if you have a high BG before the meal and you do a pre-bolus. It allows to see how the BG will evolve and when it will be necessary to start the meal not to risk making a hypo.

ZT prediction curve (light blue): when this curve is below IOB curve, you can forget it...



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

