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

Omnipod Driver in AAPS
===========================================================

Enabling the Omnipod Driver in AAPS
---------------------------------------------------------
* You can enable the Omnipod driver in AAPS via two mechanisms:

**1. AAPS Setup Wizard**
* Open setup wizzard through  three-dot menu (top right-hand corner)
* Follow the wizard menus until you reach the Pump screen.
* Select Omnipod 
* Select Pump Setup to open the Omnipod Settings screen

.. image:: ../images/Omnipod_SetupWizard.png
  :alt: Omnipod in AAPS Setup Wizzard

**2. Config Builder** (for details see `config builder page <../Configuration/Config-Builder.html>`_)
* Open config builder via hamburger menu (top left corner)
* Scroll down to pump
* Select Omnipod
* With the checkbox on the right you can decide wether you want to use Omnipod `via tab or via hamburger menu <../Configuration/Config-Builder.html#tab-or-hamburger-menu>`_.
* Click cog wheel to enter Omnipod setup

.. image:: ../images/Omnipod_ConfigBuilder.png
  :alt: Omnipod in Config Builder

Identify Riley Link
---------------------------------------------------------
* Make sure you have a charged RileyLink near your phone for AAPS to identify it via its MAC address.
* After enabling the driver, you must identify your RileyLink.

   * Open config builder via hamburger menu (top left corner)
   * Scroll down to pump
   * Select Omnipod
   * Click cog wheel to enter Omnipod setup
   * Select RileyLink Configuration
   * Click Scan.

* Once selected, you can proceed to activate your first pod session. 

Verification of Omnipod Driver Activation
---------------------------------------------------------
Depending on your `settings <../Configuration/Config-Builder.html#tab-or-hamburger-menu>`_ you will either
* see an Omnipod or POD tab after swiping to the left from homescreen or
* can enter Omnipod page trough hamburger menu
