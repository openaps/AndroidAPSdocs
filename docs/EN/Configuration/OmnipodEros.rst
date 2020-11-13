Omnipod Eros
***********************************************************

At present two different Omnipod models are available:

a. `Omnipod Eros <https://www.omnipod.com/en-gb/about/how-to-use>`_ - launched in 2013 - called "omnipod system" by manufacturer
b. `Omnipod Dash <https://www.omnipod.com/en-gb/about-dash>`_ - launched in 2019 - PDM looks like a phone-type device

**Only Omnipod Eros can be used with AndroidAPS!**

Hardware and Software Requirements
===========================================================
* Insulin Delivery Device: a fresh Omnipod (`Eros <https://www.omnipod.com/en-gb/about/how-to-use>`_ generation - NOT DASH) pod
* `Mobile Phone Device <..\Module\module.html#phone>`_: Supported Omnipod driver Android phone with a version of AAPS 2.7.1 (or newer) and related components setup
* Pod Communication Device: a 433MHz RileyLink from `getrileylink.org <getrileylink.org>`_, which is the bridge to communicate with Eros generation pods.

   Other hardware options are available.
   
   * RileyLink with modified Balun Antenna - Untested
   * Emalink - Untested
   * LoopLink - Untested
   
These instructions will assume that you are **starting a new pod session**. If this is not the case, please be patient and attempt to begin this process on your next pod change. 

Enabling the Omnipod Driver in AAPS
===========================================================
* You can enable the Omnipod driver in AAPS via two mechanisms:

  * by going to the AAPS Setup Wizard located at the top right-hand corner three-dot menu and selecting Omnipod on the Pump screen.

    OR

  * via the top left-hand corner hamburger menu under Config Builder -> Pump -> Omnipod
  
* You can configure all Omnipod driver settings from the top left-hand corner hamburger menu under Config Builder -> Pump -> Omnipod -> Cog wheel (Settings)
* After enabling the driver, you must identify your RileyLink by going to the top-right hamburger menu and selecting Config Builder -> Pump -> Omnipod -> (Settings) -> RileyLink Configuration -> Scan. 
* Make sure you have a charged RileyLink near your phone for AAPS to identify it via its MAC address.
* Once selected, you can proceed to activate your first pod session. 

Verification of Omnipod Driver Activation
---------------------------------------------------------
You can verify that you have enabled the Omnipod driver in AAPS by swiping to the left from the Overview tab, where you will now see an Omnipod or POD tab. 
