Automation
***************
What is Automation
===================
For the same frequent events, you might always have to change the same settings. To avoid the extra work, you can just try to automate the event if you can specify it well enough and let it do it for you automatically. I.e. when your BG is too low, you can decide to have automatically a high temp target. Or if you are at your fitness center, you get automatically a temp target.


How to use it
================
To set up an automation, you have to give it a title, select at least one condition and one action. 

General
--------
There are some limits. The glucose value has to be between 72 mg/dl and 270 mg/dl. The lowest profile switch is between 70 % and 130%.

**Please be careful:**

* **less than -2 means: -3 and lower (-4-,-10, etc)**
* **more than -2 means: -1 and higher (-1, 0, +10, etc)**


Condition:
------------
You can choose between several conditions. Here are some things explained, but most of it should be easy to understand and is not all described here:

* connect conditions: you can have several conditions and can connect them with "And", "Or" or "Exclusive or", which means that if one (and only one of the) conditions applies, the action(s) will happen. 
* Time vs. recurring time: With time you select just a single time event, with a recurring time, you select something that happens once a week.
* location: in the config builder (Automation), you can select which location service you want to use:

  * Use passive location
  * Use network location: Location of your Wifi
  * Use GPS location
  
Action
------
You can choose one or more actions: 

* start temp target (has to be between 72 mg/dl and 270 mg/dl and only works if there is no previous temp target)
* stop temp target
* notification
* profile switch (has to be between 70% and 130% and only works if there is no previous profile switch)

After adding your action, don't forget to change the default values to what you need by clicking in the default values.




Examples
==========
These example is for a person, that has lunch at the same time during the week and if it is at a certain time at her lunch location, it gets a lower temp target (eating soon) while waiting for the lunch. Because of the "And" connection, it only happens during the certain time and the  location. So it does not work at any other time at this location or at this time when the persons stays home or works longer. 
