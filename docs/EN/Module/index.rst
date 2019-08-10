Module Overview (Overview Part 1 - Modules)
==============================================
AAPS is not just a (self-built) application, the application is a just one of serveral modules.

Necessary Modules
=====================
Phones
-------
Users are creating a `list of tested phones and watches <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_

You can use filters to display particular pumps or phones but please set back to view all when you've finished looking, ready for the next person to view all.

To record a phone or watch that isn't already listed in the spreadsheet then please fill in the `form <https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform>`_

Any problems with the spreadsheet please email `hardware@androidaps.org <mailto:hardware@androidaps.org>`_, any donations of phone/watch models that still need testing please email `donations@androidaps.org <mailto:hardware@androidaps.org>`_.

## Phone Background

`phone background <../images/bg_phone_thump.jpg>`_ 
</br>
Design: Thiago :) 
</br>
If you want to decorate your phone with more AndroidAPS, you can download your background image `here <../images/bg_phone.jpg`_)

Insulin Pump
------------
* `Insulin pump choices <../Pump-Choices.html>`_
* `Possible future pump drivers  <../Future-possible-Pump-Drivers.html>`_

BG Source
------------
This is just a short overview of all compatible CGMs/FGM with AndroidAPS. For further details, look `here <../Configuration/BG-Source.html>`_. Just a short hint: if you an display your gluose data in xDrip+ or Nightscout, you can have xDrip+ has BG Source in AAPS.

* Dexcom G4: These sensors are quite old, but you can find instructions on how to use it with xDrip+
* Dexcom G5: It works with xDrip+ or patched Dexcom App
* Dexcom G6: It works with xDrip+ or patched Dexcom App
* Libre 1: You need a transmitter for it (built or buy it yourself) and xDrip+
* Libre 2: There are instructions in the Internet on how to use it with xDrip+ (and no transmitter)
* Eversense: It works so far only together with ESEL and a patched Eversense-App (works not with (and only with all three components): Dana RS, LineageOS)
* Enlite: quite complicated with a lot of extra stuff


Nightscout
------------
One senctence: what is `Nightscout <http://www.nightscout.info/>`_
Nightscout is independent of the other modules.
More information on how to configure Nightscout for use with AndroidAPS `here <../../Installing-AndroidAPS/Nightscout.html>`_

AAPS-.apk file
------
The basic component of the system. Before installing the app, you have to build the apk- file (the "app-file" first). Instructions are  `here <../../Installing-AndroidAPS/Building-APK.html>`_. 
   
   
 

Optional Modules
==================
Smartwatch
---------------
Users are creating a [list of tested phones and watches](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing). There are different watchfaces for use with AAPS, which you can find `here <../Configuration/Watchfaces>`_.

 
Sample Setup
============
You can find a Sample Setup here: `Sample Setup: Samsung S7, Dana-R, Dexcom G5 and Sony Smartwatch <../Getting-Started/Sample-Setup.html`_


   
It would be wonderful if anyone could add here a image with an overview of all different modules.

It sometimes takes a while until all module are together. But no worries, there are a lot of things you can do while waiting. It is NECESSARY to check and where approporiate adapt basal rates (BR), insulin-carbration (IC), insulin-sensitivity-factores (ISF), etc. And if already possible, open loop is a good way to test the system.

If you have your AAPS components all together (congrats!) or at least enough to start with an open loop, you should first read through the `Objectiv description <../../Usage/Objectives.html>`_ (Overview Part 2 )before each new Objectiv.


