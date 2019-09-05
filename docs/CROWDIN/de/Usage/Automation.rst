Automatisierung
***************
Diese Funktion wird mit der nächsten AndroidAPS Version (2.4) verfügbar sein. 

Was ist Automatisierung
================
For the same frequent events, you might always have to change the same settings. Um zusätzliche Arbeit zu vermeiden, kann man versuchen das ganze zu automatisieren (sofern man es genau genug spezifizieren kann). Zum Beispiel kann man ein automatisiertes Hypo-Temp-Target erstellen, das bei einem niedrigen Blutzucker automatisch aktiviert wird. Oder wenn man sich in seinem Sportstudio befindet, könnte automatisch ein temporäres Ziel aktiviert werden. Bevor Du Automatisierung nutzt, solltest Du Dich mit `Temporären Zielen <./temptarget.html>`_ und/oder `Profil Wechsel <./Profiles.html>`_ auseinander gesetzt haben. 

.. image:: ../images/Automation1.png
  :alt: Automation1

How to use it
================
To set up an automation, you have to give it a title, select at least one condition and one action. 

General
--------
There are some limits. The glucose value has to be between 72 and 270 mg/dl or 2 and 15 mmol/l. The profile percentage has to be between 70 % and 130%.

**Please be careful:**

* **less than -2 means: -3 and lower (-4,-10, etc)**
* **more than -2 means: -1 and higher (-1, 0, +10, etc)**


Condition
------------
You can choose between several conditions. Here are some things explained, but most of it should be easy to understand and is not all described here:

* connect conditions: you can have several conditions and can connect them with "And", "Or" or "Exclusive or", which means that if one (and only one of the) conditions applies, the action(s) will happen. 
* Time vs. recurring time: With time you select just a single time event; with a recurring time, you select something that happens once a week.
* location: in the config builder (Automation), you can select which location service you want to use:

  * Use passive location: AAPS only takes locations if other apps are requesting it
  * Netzwerkstandort: Bestimmung des Standorts mithilfe der Infrastruktur Deines Mobilfunkanbieters (teilweise recht ungenau)
  * Use GPS location
  
Action
------
You can choose one or more actions: 

* start temp target (has to be between 72 mg/dl and 270 mg/dl and only works if there is no previous temp target)
* stop temp target
* notification
* profile percentage (has to be between 70% and 130% and only works if the previous percentage is 100%)

After adding your action, **don't forget to change the default values** to what you need by clicking in the default values.
 


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



