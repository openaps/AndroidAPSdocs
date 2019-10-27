Automation
***************

What is Automation
===================
For the same frequent events, you might always have to change the same settings. To avoid the extra work, you can just try to automate the event if you can specify it well enough and let it do it for you automatically. I.e. when your BG is too low, you can decide to have automatically a high temp target. Or if you are at your fitness center, you get automatically a temp target. Before using Automation, you should be confident with manual `temp targets <./temptarget.html>`_ or profile switches. 

.. image:: ../images/Automation_ConditionAction_RC3.png
  :alt: Automation condition + action

How to use it
================
To set up an automation, you have to give it a title, select at least one condition and one action. 

General
--------
There are some limits:

* The glucose value has to be between 72 and 270 mg/dl or 4 and 15 mmol/l.
* The profile percentage has to be between 70 % and 130%.
* There is a 5 min. time limit between executions (and first execution).

**Please be careful:**

* **less than -2 means: -3 and lower (-4,-10, etc)**
* **more than -2 means: -1 and higher (-1, 0, +10, etc)**


Condition
------------
You can choose between several conditions. Here are some things explained, but most of it should be easy to understand and is not all described here:

* connect conditions: you can have several conditions and can connect them with 

   * "And"
   * "Or"
   * "Exclusive or" (which means that if one (and only one of the) conditions applies, the action(s) will happen)
   
* Time vs. recurring time

   * time =  single time event
   * recurring time = something that happens regulalrly (i.e. once a week, every working day etc.)
   
* location: in the config builder (Automation), you can select which location service you want to use:

  * Use passive location: AAPS only takes locations if other apps are requesting it
  * Use network location: Location of your Wifi
  * Use GPS location
  
Action
------
You can choose one or more actions: 

* start temp target 

   * must be between 72 mg/dl and 270 mg/dl (4 mmol/l and 15 mmol/l)
   * works only if there is no previous temp target
   
* stop temp target
* notification
* profile percentage

   * must be between 70% and 130% 
   * works only if the previous percentage is 100%

After adding your action, **don't forget to change the default values** to what you need by clicking in the default values.
 
.. image:: ../images/Automation_Default.png
  :alt: Automation default vs. set values

Examples
==========
These are just set up examples, no advises. Don't reproduce it without being aware what you are actually doing or why you need these.

Low Glucose Temp Target
------------------------------------
.. image:: ../images/Automation2.png
  :alt: Automation2

This is made by a person that wants to get an automatically hypo temp target when having a hypo.

Lunch Time Temp Target
------------------------
.. image:: ../images/Automation3.png
  :alt: Automation3
  
These example is made by a person, that has lunch at the same time during the week. If it is at a certain time at its lunch location, it gets a lower temp target (eating soon) while waiting for the lunch. Because of the "And" connection, it only happens during the certain time and the  location. So it does not work at any other time at this location or at this time when the persons stays home or works longer. 


Alternatives
============

For advanced users there are other posibilities to automate tasks using IFTTT or a third party Android app called Automate. Some examples can be found `here <./automationwithapp.html>`_.
