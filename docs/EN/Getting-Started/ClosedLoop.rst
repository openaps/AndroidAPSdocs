What is a Closed Loop System
**************************************

.. image:: ../images/autopilot.png
  :alt: AAPS is like an autopilot

A closed loop system combines different components in order to make diabetes management easier for you. Let’s take a commonly known example for better understanding:

The autopilot in the aircraft facilitates the work of the pilots. It relieves them of the burden of permanently monitoring the aircraft and the flight attitude. This allows the pilot to concentrate on monitoring the airspace and controlling the autopilot's functions.

The autopilot receives signals from various sensors, a computer evaluates them together with the pilot's specifications and then makes the necessary adjustments. The pilot no longer has to worry about the constant adjustments.

The same applies to a closed loop system. It combines the sensor data from a CGM/FGM with your diabetes management specifications such as basal rate, correction and BE factors. From this it calculates treatment suggestions and implements these permanent small adjustments in order to keep your diabetes within the target range and to relieve you. This leaves more time for your life "next to" diabetes.

Just as you don't want to get on a plane where only the autopilot flies without human supervision, a closed loop system helps you with your diabetes management, but always needs your support! **Even with a closed loop you can't just forget your diabetes!**

Just as the autopilot depends on the sensor values as well as the pilot's specifications, a closed loop system needs appropriate input such as basal rates, ISF and carb ratio to support you successfully.


Open Source Closed Loop Systems
===============================
At present there are three major Open Source Closed Loop Systems available:
AndroidAPS (AAPS)
-----------------
AndroidAPS is described in detail in `this documentation <..\Getting-Started/WhatisAndroidAPS.html>`_. It uses an Android Smartphone for calculation and control of your insulin pump. It is in strong connection with OpenAPS (i.e. they share algorithms).

Compatible `pumps <..\Hardware\pumps.html>`_ are:

* DanaR / DanaRS
* Accu-Chek Combo
* Accu-Chek Insight
* old Medtronic pumps (as of version 2.4)

OpenAPS
-------
`OpenAPS <https://openaps.readthedocs.io>`_ was the first Open Source Closed Loop System. It uses as small computer such as Raspery Pi or Intel Edison.

Compatible pumps are:

* old Medtronic pumps

Loop for iOS
------------
`Loop for iOS <https://loopkit.github.io/loopdocs/>`_ is the Open Source Closed Loop System to be used with Apple iPhones.

Compatible pumps are:

* old Medtronic pumps
* Omnipod
