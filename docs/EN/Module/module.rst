Component Overview 
==============================================
AAPS is not just a (self-build) application, it is just one of serveral modules of your closed loop system. Before deciding for one, it would be a good idea to have a look at the 'component setup <https://androidaps.readthedocs.io/en/dev/EN/index.html#component-setup>`_, too.
   
.. image:: ../images/modules.png
  :alt: Compontents overview

.. note:: 
   **IMPORTANT SAFETY NOTICE**

   The foundation of AndroidAPS safety features discussed in this documentation is built on the safety features of the hardware used to build your system. It is critically important that you only use a tested, fully functioning FDA or CE approved insulin pump and CGM for closing an automated insulin dosing loop. Hardware or software modifications to these components can cause unexpected insulin dosing, causing significant risk to the user. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AndroidAPS system.

   Additionally, it is equally important to only use original supplies such as inserters, cannulas and insulin containers approved by the manufacturer for use with your pump or CGM. Using untested or modified supplies can cause CGM inaccuracy and insulin dosing errors. Insulin is highly dangerous when misdosed - please do not play with your life by hacking with your supplies.

Necessary Modules
=====================
Good Diabetes Settings
------------------
Even though this is not something to create or buy, this is the "module" which is probably underestimated the most but very essential. When you let an algorithm help manage your diabetes, it needs to know the right settings to not make severe mistakes.
Even if your are still missing other modules, you can already verify and adapt your "profile". This profile includes

* BR (Basal rates)
* ISF (insulin sensitivity factor) in your blood glucose unit per one unit insulin
* CR (carb ratio) in gramm carbohydrate per one unit insulin
* DIA (Duration of Insulin Acting).
Your ISF, CR and DIA should be circadian, which it should be adapted during the day.
If your CR is to i.e. to low (which means, that you actually need less insulin for your carbs or you need more carbs for the same amount of insulin), you will still have a low glucose, even with 0% temporary basal rate.  


Phones
-------
Users are creating a `list of tested phones and watches <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_

To record a phone or watch that isn't already listed in the spreadsheet then please fill in the `form <https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform>`_.

Any problems with the spreadsheet please email `hardware@androidaps.org <mailto:hardware@androidaps.org>`_, any donations of phone/watch models that still need testing please email `donations@androidaps.org <mailto:hardware@androidaps.org>`_.

Insulin Pump
------------
Please update for Medtronic und Insight Pump (more comparison).

AndroidAPS currently works with 

- 'Accu-Chek Combo <../Configuration/DanaR-Insulin-Pump.html>`_ (additional needed: Ruffy, LineageOS or Android 8.1 on your phone)
- 'Accu-Chek Insight <../Configuration/DanaRS-Insulin-Pump.html>`_ 
- 'DanaR <../Configuration/Accu-Chek-Combo-Pump.html>`_ 
- 'DanaRS  <../Configuration/Accu-Chek-Insight-Pump.html.html>`_  
- 'some old Medtronic Pumps <../Configuration/MedtronicPump.html>`_ (additional needed: RileyLink/Gnarl, Android Phone with BLE)

pumps. Details of the status of other pumps that may have the potential to work with AndroidAPS are listed on the `Future (possible) Pumps <Future-possible-Pump-Drivers.html>`_ page.

If you need to choose a pump to upgrade to or buy then people often ask which to choose. Details of the various distributors is in `this spreadsheet <https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0>`_, please share the details of yours if not already listed.

The Combo and the Insight are solid pumps, and loopable. 

The advantages of the DanaR/RS and the Akku Check Combo as the pump of choice however are:

* The Dana*R/RS connects to almost any phone with Android >= 5.1 without the need to flash lineage. If your phone breaks you usually can find easily any phone that works with the Dana*R/RS pumps as quick replacement... not so easy with the Combo. (This might change in the future when Android 8.1 gets more popular)

* Initial pairing is simpler with the Dana* RS. But you usually only do this once so it only impacts if you want to test a new feature with different pumps.

* So far the Combo works with screen parsing. In general that works great but it is slow. For looping this does not matter much as everything works in the background. Still there is much more time you need to be connected so more time where the BT connection might break, which isn't so easy if you walk away from your phone whilst bolusing & cooking. 

* The Combo vibrates on the end of TBRs, the Dana* R vibrates (or beeps) on SMB. At night time you are likely to be using TBRs more than SMB.  The Dana* RS is configurable that it does neither beeps or vibrates.

* Reading the history on the RS in a few seconds with carbs makes it possible to switch phones easily while offline and continue looping as soon a soon as some CGM values are in.

* All pumps AndroidAPS can talk with are waterproof on delivery. Only the Dana pumps are also "waterproof by warranty" due to the sealed battery compartment and reservoir filling system. 

The Combo of course is a very good pump, and loopable. It also has the advantage of many more infusion set types to choose from as it has a standard luer lock. And the battery is a default one you can buy at any gas station, 24 hour convenience store and if you really need one, you can steal/borrow it from the remote control in the hotel room ;-).


BG Source
------------
This is just a short overview of all compatible CGMs/FGM with AndroidAPS. For further details, look `here <../Configuration/BG-Source.html>`_. Just a short hint: if you can display your glucose data in xDrip+ or Nightscout, you can always have xDrip+ (or Nightscout with Internet connection) as BG Source in AAPS.

* Dexcom G4: These sensors are quite old, but you can find instructions on how to use it with xDrip+
* Dexcom G5: It works with xDrip+ or patched Dexcom App
* Dexcom G6: It works with xDrip+ or patched Dexcom App
* Libre 1: You need a transmitter for it (built or buy it yourself) and xDrip+
* Libre 2: There are instructions in the Internet on how to use it with xDrip+ (and no transmitter)
* Eversense: It works so far only together with ESEL and a patched Eversense-App (works not with Dana RS and LineageOS together, but Dana RS and Android or Combo and Lineage OS works fine)
* Enlite: quite complicated with a lot of extra stuff


Nightscout
------------
Nightscout is a open source web application that can log and display your CGM Data and AndroidAPS Data and creates reports. You can find more informations on the `Nightscout website <http://www.nightscout.info/>`_. You can create your own Nightscout website `using Heroko <http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku`_, use the semi-automated Nightscout setup by 'zehn.be <https://ns.10be.de/en/index.html>`_ or host it on your own server (this is more for IT experts).

Nightscout is independent of the other modules. You will need it to fulfill Objective 1.

More information on how to configure Nightscout for use with AndroidAPS `here <../Installing-AndroidAPS/Nightscout.html>`_.

AAPS-.apk file
---------------
The basic component of the system. Before installing the app, you have to build the apk-file (which is the filename extension for an Android App) first. Instructions are  `here <../../Installing-AndroidAPS/Building-APK.html>`_. 
   
   
 

Optional Modules
==================
Smartwatch
---------------
Users are creating a [list of tested phones and watches](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing). There are different watchfaces for use with AAPS, which you can find `here <../Configuration/Watchfaces>`_.

To record a phone or watch that isn't already listed in the spreadsheet then please fill in the `form <https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform>`_.

Any problems with the spreadsheet please email `hardware@androidaps.org <mailto:hardware@androidaps.org>`_, any donations of phone/watch models that still need testing please email `donations@androidaps.org <mailto:hardware@androidaps.org>`_.
  
Sample Setup
============
If you want to get a better impression, you might want to look at a sample setup. The first sample setup is quite old, but should be still up-to-date.

.. toctree::
   :maxdepth: 1
   :glob:
   
   Sample Setup 1 <../Getting-Started/Sample-Setup.md>
 
  
What to do while waiting for modules
============================================
It sometimes takes a while until all modules are together. But no worries, there are a lot of things you can do while waiting. It is NECESSARY to check and where approporiate adapt basal rates (BR), insulin-carbration (IC), insulin-sensitivity-factores (ISF), etc. And if already possible, open loop is a good way to test the system, you don't have to wait for it i.e. until you have a loopable pump. 

You can keep on reading through the docs here, get in touch with other loopers online or offline, read what other loopers write (even if you have to be careful, not everything is correct or good for you to reproduce.

**Done?**
If you have your AAPS components all together (congrats!) or at least enough to start with an open loop, you should first read through the `Objectiv description <../Usage/Objectives.html>`_ (Overview Part 2) before each new Objectiv and setup up your `hardware <../index.html#component-setup>`_.



