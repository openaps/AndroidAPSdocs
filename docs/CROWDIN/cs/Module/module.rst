Přehled komponent 
==============================================
AndroidAPS není jen (uživatelem sestavená) aplikace, je to jeden z několika modulů vašeho systému uzavřené smyčky. Dříve než se rozhodnete pro konkrétní komponenty, bylo by dobré podívat se také na `nastavení komponent <https://androidaps.readthedocs.io/en/dev/EN/index.html#component-setup>`_,.
   
.. obrázek:: ../images/modules.png
  :alt: Přehled komponent

.. poznámka:: 
   **DŮLEŽITÉ BEZPEČNOSTNÍ UPOZORNĚNÍ**

   Základy bezpečnosti AndroidAPS zmíněné v této dokumentaci jsou postaveny na bezpečnostních vlastnostech hardwaru používaného k vybudování vašeho systému. Je zásadně důležité, abyste používali pouze testované, plně funkční a pro uzavřenou smyčku schválené inzulinové pumpy a CGM. Hardwarové nebo softwarové úpravy těchto komponent mohou způsobit neočekávané dávkování inzulínu, což může znamenat pro uživatele významné riziko. Pokud najdete nebo získáte rozbité, upravené nebo doma vyrobené inzulínové pumpy nebo CGM, NEPOUŽÍVEJTE JE pro vytvoření systému AndroidAPS.

   Kromě toho je stejně důležité používat pouze originální spotřební materiál, jako jsou sety a zásobníky, schválené výrobcem pro použití s vaší pumpou nebo CGM. Použití nevyzkoušeného nebo upraveného spotřebního materiálu může způsobit nepřesnosti a chyby při dodávce inzulínu. Inzulín je velmi nebezpečný, když není dávkovaný správně – prosím, nehazardujte se svým životem tím, že budete upravovat spotřební materiál.

Nezbytné moduly
=====================
Správný individuální algoritmus dávkování pro léčbu vašeho diabetu
------------------
I když to není něco, co by bylo možné vytvořit nebo koupit, je to "modul", který je pravděpodobně nejvíce podceňován, je však nejdůležitější. Když necháte algoritmus zasahovat do léčby vašeho diabetu, musí znát správná nastavení, aby nedělal vážné chyby.
I když vám stále chybí další moduly, již nyní můžete ve spolupráci se svým diabetologem ověřit a upravit svůj 'profil'. 
Většina uživatelů uzavřené smyčky používá cirkadiánní bazální dávkování, citlivost a sacharidový poměr, které se přizpůsobují hormonální aktivitě inzulinu v průběhu dne.

Součástí profilu je

* BR (bazální dávky)
* ISF (citlivost na inzulin) - hodnota, o kolik klesne glykémie po podání jedné jednotky inuzlinu)
* CR (sacharidový poměr) - množství sacharidů v gamech na jednu jednotku inzulinu
* DIA (doba působnosti inzulinu).

Telefon
-------
Potřebujete telefon s Androidem s operačním systémem Google Android 6.0 a novějším. Uživatelé průběžné doplňují `seznam otestovaných telefonů a hodinek <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_

Pro zápis telefonu nebo hodinek, které ještě nejsou uvedeny v tabulce, vyplňte prosím `formulář <https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform>`_.

V případě jakýchkoli problémů s tabulkou napište prosím na e-mail`hardware@androidaps.org <mailto:hardware@androidaps.org>`_, pokud chcete darovat telefon/hodinky potřebné pro testování, napište na e-mail `donations@androidaps.org <mailto:hardware@androidaps.org>`_.

Inzulinová pumpa
--------
AndroidAPS **v současné době** funguje s 

- `Accu-Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_ (additionally needed: Ruffy app, LineageOS or Android 8.1 on your phone)
- `Accu-Chek Insight <../Configuration/Accu-Chek-Insight-Pump.html>`_ 
- `DanaR <../Configuration/DanaR-Insulin-Pump.html>`_ 
- `DanaRS <../Configuration/DanaRS-Insulin-Pump.html>`_  
- `některé staré pumpy Medtronic <../Configuration/MedtronicPump.html>`_ od připravované verze 2.4 (vyžaduje navíc: hardware RileyLink/Gnarl, telefon s Androidem s čipovou sadou s BLE)

**Other pumps** that may have the potential to work with AndroidAPS are listed on the `Future (possible) Pumps <../Getting-Started/Future-possible-Pump-Drivers.html>`_ page.

Pokud je nutné, abyste si pumpu zakoupili **na vlastní náklady**, seznam různých distributorů najdete v `této tabulce <https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0>`_. Prosím uveďte podrobnosti o svém distributorovi, není-li v tabulce uveden.

**Která pumpa je pro provozování uzavřené smyčky s AndroidAPS nejlepší?**

The Combo, the Insight and the older Medtronics are solid pumps, and loopable. The Combo has the advantage of many more infusion set types to choose from as it has a standard luer lock. And the battery is a default one you can buy at any gas station, 24 hour convenience store and if you really need one, you can steal/borrow it from the remote control in the hotel room ;-).

The advantages of the DanaR/RS vs. the Combo as the pump of choice however are:

- The Dana*R/RS connects to almost any phone with Android >= 5.1 without the need to flash lineage. If your phone breaks you usually can find easily any phone that works with the Dana*R/RS pumps as quick replacement... což není tak snadné v případě Comba. (To se může v budoucnu změnit, až bude Android 8.1 více rozšířený)
- Initial pairing is simpler with the Dana* RS. Ale to obvykle děláte pouze jednou, takže to ovlivňuje pouze situace, kdy chcete testovat nové funkce s různými pumpami.
- So far the Combo works with screen parsing. Obecně to funguje skvěle, ale je to pomalé. Pro smyčku to tolik nevadí, vše pracuje na pozadí. Still there is much more time you need to be connected so more time where the BT connection might break, which isn't so easy if you walk away from your phone whilst bolusing & cooking. 
- The Combo vibrates on the end of TBRs, the Dana* R vibrates (or beeps) on SMB. V noci pravděpodobně používáte více dočasné bazální dávky než SMB.  U Dany* RS je možné nastavit, aby ani nepípala, ani nevibrovala.
- Reading the history on the RS in a few seconds with carbs makes it possible to switch phones easily while offline and continue looping as soon a soon as some CGM values are in.
- All pumps AndroidAPS can talk with are waterproof on delivery. Pouze pumpy Dana mají také „záruku na vodotěsnost“ díky uzavřenému prostoru pro baterii a prostoru pro plnicí zásobník. 

Zdroj glykémií
------------
This is just a short overview of all compatible CGMs/FGM with AndroidAPS. For further details, look `here <../Configuration/BG-Source.html>`_. Just a short hint: if you can display your glucose data in xDrip+ app or Nightscout website, you can choose xDrip+ (or Nightscout with web connection) as BG source in AAPS.

* Dexcom G4: These sensors are quite old, but you can find instructions on how to use them with xDrip+ app
* Dexcom G5: It works with xDrip+ app or patched Dexcom app
* Dexcom G6: It works with xDrip+ app or patched Dexcom app
* Libre 1: You need a transmitter like Bluecon or MiaoMiao for it (build or buy) and xDrip+ app
* Libre 2: It works with xDrip+ (no transmitter needed), but you have to build your own patched app (see `these instructions <https://github.com/user987654321resu/Libre2-patched-App>`_ for more details)
* Eversense: It works so far only in combination with ESEL app and a patched Eversense-App (works not with Dana RS and LineageOS, but DanaRS and Android or Combo and Lineage OS work fine)
* Enlite: quite complicated with a lot of extra stuff


Nightscout
------------
Nightscout is a open source web application that can log and display your CGM data and AndroidAPS data and creates reports. You can find more information on the `website of the Nightscout project <http://www.nightscout.info/>`_. You can create your own Nightscout website `using Heroko <http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku>`_, use the semi-automated Nightscout setup on `zehn.be <https://ns.10be.de/en/index.html>`_ or host it on your own server (this is for IT experts).

Nightscout is independent of the other modules. You will need it to fulfill Objective 1.

Additional information on how to configure Nightscout for use with AndroidAPS can be found `here <../Installing-AndroidAPS/Nightscout.html>`_.

AAPS-.apk file
---------------
The basic component of the system. Before installing the app, you have to build the apk-file (which is the filename extension for an Android App) first. Instructions are  `here <../Installing-AndroidAPS/Building-APK.html>`_.  

Optional Modules
==================
Chytré hodinky
---------------
You can choose any smartwatch with Android Wear 1.x and above. Most loopers wear a Sony Smartwatch 3 (SWR50) as it is the only watch that can get readings from Dexcom G5/G5 when phone is out of range. Some other watches can be patched to work as a standalone receiver as well (see `this documentation <https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5>`_ for more details).

Users are creating a `list of tested phones and watches <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_. There are different watchfaces for use with AndroidAPS, which you can find `here <../Configuration/Watchfaces.html>`_.

Pro zápis telefonu nebo hodinek, které ještě nejsou uvedeny v tabulce, vyplňte prosím `formulář <https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform>`_.

V případě jakýchkoli problémů s tabulkou napište prosím na e-mail`hardware@androidaps.org <mailto:hardware@androidaps.org>`_, pokud chcete darovat telefon/hodinky potřebné pro testování, napište na e-mail `donations@androidaps.org <mailto:hardware@androidaps.org>`_.

xDrip+
-------
Even if you don't need to have the xDrip+ App as BG Source, you can still use it for i.e. alarms or a good blood glucose display. You can have as many as alarms as you want, specify the time when the alarm should be active, if it can override silent mode, etc. Some xDrip+ information can be found `here <../Configuration/xdrip.html>`_. Please be aware that the documentations to this app are not always up to date as its progress is quite fast.

Ukázková instalace
============
If you want to get a step by step example, you might want to look at a sample setup. The first sample setup is quite old, but should be still up-to-date.

.. toctree::
   :maxdepth: 1
   :glob:
   
   Sample Setup <../Getting-Started/Sample-Setup.html>
 
  
What to do while waiting for modules
============================================
It sometimes takes a while to get all modules for closing the loop. But no worries, there are a lot of things you can do while waiting. It is NECESSARY to check and (where approporiate) adapt basal rates (BR), insulin-carbration (IC), insulin-sensitivity-factors (ISF) etc. And maybe open loop can be a good way to test the system and get familiar with AndroidAPS. Using this mode, AndroidAPS gives treatment advices you can manually execute.

You can keep on reading through the docs here, get in touch with other loopers online or offline, `read <https://androidaps.readthedocs.io/en/dev/EN/Where-To-Go-For-Help/Background-reading.html>`_ documentations or what other loopers write (even if you have to be careful, not everything is correct or good for you to reproduce).

**Done?**
If you have your AAPS components all together (congrats!) or at least enough to start in open loop mode, you should first read through the `Objective description <../Usage/Objectives.html>`_ before each new Objective and setup up your `hardware <../index.html#component-setup>`_.
