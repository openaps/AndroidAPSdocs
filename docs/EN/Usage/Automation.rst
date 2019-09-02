Automation
***************
What is Automation
===================
For the same frequent events, you might always have to change the same settings. To avoid the extra work, you can just try to automate the event if you can specify it well enough and let it do it for you automatically. I.e. when your BG is too low, you can decide to have automatically a high temp target. Or if you are at your fitness center, you get automatically a temp target.


How to use it
================

General
--------
There are some limits. The glucose value has to be between 72 mg/dl and 270 mg/dl. The lowest profile switch is between 70 % and 130%.

**Please be careful:**

* **less than -2 means: -3 and lower (-4-,-10, etc)**
* **more than -2 means: -1 and higher (-1, 0, +10, etc)**


Condition:
------------
* connect conditions: you can have several conditions and can connect them with "And", "Or" or "Exclusive or", which means that if one (and only one of the) conditions applies, the action(s) will happen. 
* Time vs.recurring time: With time you select just a single time event, with a recurring time, you select something that happens once a week.
* location: in the config builder (Automation), you can select which location service you want to use:

  * Use passive location
  * Use network location: Location of your Wifi
  * Use GPS location
  
Action
------
Preconditions: For some actions, there are automatically preconditions. I.e. if you want to get a temp target, the precondition is no existing temp target or if you want to make a automated profile switch, the precondition is that the profile has to 100%.
You choose between for actions

* start temp target (has to be between 72 mg/dl and 270 mg/dl and only works if there is no previous temp target )
* stop temp target
* notification
* profile switch (has to be between 70% and 130% and only works if there is no previous profile switch)




Examples
==========
