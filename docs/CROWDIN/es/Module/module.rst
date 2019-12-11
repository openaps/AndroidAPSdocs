Descripción General De Los Componentes 
**************************************************
AndroidAPS no es sólo una aplicación (auto-construida), es sólo uno de los módulos de su sistema de lazo cerrado. Antes de tomar una decisión sobre los componentes, sería una buena idea echar un vistazo a "configuración de componentes <https://androidaps.readthedocs.io/en/dev/EN/index.html#component-setup>", también.
   
.. imagen:: ../images/modules.png
  :alt: Visión general de Compontes

.. note:: 
   **AVISO DE SEGURIDAD IMPORTANTE**

   La base de las características de seguridad de AndroidAPS discutidas en esta documentación se basan en las características de seguridad del hardware utilizado para construir su sistema. Es importante que sólo utilice una bomba de insulina y una bomba de insulina y MCG aprobados por la FDA o CE, para cerrar un lazo de dosificación de insulina automatizado. Las modificaciones de hardware o software a estos componentes pueden causar una dosificación inesperada de la insulina, causando un riesgo significativo para el usuario. Si encuentra o recibe una oferta rota, modificada o autofabricada de las bombas de insulina o de los receptores de MCG, * no las utilice * para crear un sistema AndroidAPS.

   Additionally, it is equally important to only use original supplies such as inserters, cannulas and insulin containers approved by the manufacturer for use with your pump or CGM. Using untested or modified supplies can cause CGM inaccuracy and insulin dosing errors. Insulin is highly dangerous when misdosed - please do not play with your life by hacking with your supplies.
   
   Por último pero no por ello menos importante, no hay que tomar inhibidores SGLT-2 (gliflozins) ya que reducen incalculablemente los niveles de azúcar en sangre.  La combinación con un sistema que reduce las tasas basales para aumentar la BG es especialmente peligrosa, ya que debido al gliflozin este aumento en BG podría no suceder y podría derivar en un peligroso estado de falta de insulina.

Módulos necesarios
==================================================
Algoritmo de dosificación individual bueno para su tratamiento con diabetes
--------------------------------------------------
A pesar de que esto no es algo para crear o comprar, este es el "módulo" que probablemente se subestime mas pero es esencial. Cuando dejas que un algoritmo ayude a manejar tu diabetes, necesita saber los ajustes correctos para no cometer errores severos.
Incluso si aún le faltan otros módulos, ya puede verificar y adaptar su 'perfil' en colaboración con su equipo de diabetes. 
La mayoría de los loopers utilizan el BR circadiano, ISF y CR, que adaptan la sensibilidad de la insulina hormonal durante el día.

El perfil incluye

* BR (Tasas basales)
* ISF (factor de sensibilidad a la insulina) es su unidad de glucosa en sangre por unidad de insulina
* CR (cociente de carbohidratos) en gramos de carbohidrato por cada unidad de insulina
* DIA (duración de la actuación de la insulina).

Sin uso de inhibidores de SGLT-2
--------------------------------------------------
SGLT-2 inhibitors, also called gliflozins, inhibit reabsorption of glucose in the kidney. As they incalculably lower blood sugar levels, you MUST NOT take them while using a closed loop system like AndroidAPS! There would be a huge risk of a ketoacidosis or a hypoglycemia! The combination of this medication with a system that lowers basal rates in order to increase BG is especially dangerous as due to the gliflozin this rise in BG might not happen and a dangerous state of lack of insulin can happen.

Teléfono
--------------------------------------------------
You need an Android smartphone with Google Android 6.0 or above. Users are creating a `list of tested phones and watches <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_

To record a phone or watch that isn't already listed in the spreadsheet then please fill in the `form <https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform>`_.

Any problems with the spreadsheet please send an email to `hardware@androidaps.org <mailto:hardware@androidaps.org>`_, any donations of phone/watch models that still need testing please send an email to `donations@androidaps.org <mailto:hardware@androidaps.org>`_.

Bomba de insulina
--------------------------------------------------
AndroidAPS **actualmente** funciona con 

-`Accu-Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_ (necesita adicionalmente: Ruffy app, LineageOS o Android 8.1 en su teléfono)
- `Bomba Accu-ChekInsight <../Configuration/Accu-Chek-Insight-Pump.md>`_ 
- `DanaR <../Configuration/DanaR-Insulin-Pump.html>`_ 
- `DanaRS <../Configuration/DanaRS-Insulin-Pump.html>`_  
- `some old Medtronic pumps <../Configuration/MedtronicPump.html>`_ from upcoming version 2.4 (additionally needed: RileyLink/Gnarl hardware, Android Phone with bluetooth low energy / BLE-chipset)

**Other pumps** that may have the potential to work with AndroidAPS are listed on the `Future (possible) Pumps <../Getting-Started/Future-possible-Pump-Drivers.html>`_ page.

If you need to **privately buy** a pump then you can find various distributors is in `this spreadsheet <https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0>`_, please share the details of yours if not already listed.

**So what's the best pump for looping with AndroidAPS?**

The Combo, the Insight and the older Medtronics are solid pumps, and loopable. The Combo has the advantage of many more infusion set types to choose from as it has a standard luer lock. And the battery is a default one you can buy at any gas station, 24 hour convenience store and if you really need one, you can steal/borrow it from the remote control in the hotel room ;-).

The advantages of the DanaR/RS vs. the Combo as the pump of choice however are:

- The Dana*R/RS connects to almost any phone with Android >= 5.1 without the need to flash lineage. If your phone breaks you usually can find easily any phone that works with the Dana*R/RS pumps as quick replacement... not so easy with the Combo. (This might change in the future when Android 8.1 gets more popular)
- Initial pairing is simpler with the Dana* RS. But you usually only do this once so it only impacts if you want to test a new feature with different pumps.
- So far the Combo works with screen parsing. In general that works great but it is slow. For looping this does not matter much as everything works in the background. Still there is much more time you need to be connected so more time where the BT connection might break, which isn't so easy if you walk away from your phone whilst bolusing & cooking. 
- The Combo vibrates on the end of TBRs, the Dana* R vibrates (or beeps) on SMB. At night time you are likely to be using TBRs more than SMB.  The Dana* RS is configurable that it does neither beeps or vibrates.
- Reading the history on the RS in a few seconds with carbs makes it possible to switch phones easily while offline and continue looping as soon a soon as some CGM values are in.
- All pumps AndroidAPS can talk with are waterproof on delivery. Only the Dana pumps are also "waterproof by warranty" due to the sealed battery compartment and reservoir filling system. 

Fuentes de datos de glucemia (BG)
--------------------------------------------------
This is just a short overview of all compatible CGMs/FGM with AndroidAPS. For further details, look `here <../Configuration/BG-Source.html>`_. Just a short hint: if you can display your glucose data in xDrip+ app or Nightscout website, you can choose xDrip+ (or Nightscout with web connection) as BG source in AAPS.

* `Dexcom G6 <../Hardware/DexcomG6.html>`_: It works with xDrip+ app or patched Dexcom app
* `Dexcom G5 <../Hardware/DexcomG5.html>`_: It works with xDrip+ app or patched Dexcom app
* `Dexcom G4 <../Hardware/DexcomG4.html>`_: These sensors are quite old, but you can find instructions on how to use them with xDrip+ app
* `Libre 2 <../Hardware/Libre2.html>`_: It works with xDrip+ (no transmitter needed), but you have to build your own patched app.
* `Libre 1 <../Hardware/Libre1.html>`_: You need a transmitter like Bluecon or MiaoMiao for it (build or buy) and xDrip+ app
* `Eversense <../Hardware/Eversense.html>`_: It works so far only in combination with ESEL app and a patched Eversense-App (works not with Dana RS and LineageOS, but DanaRS and Android or Combo and Lineage OS work fine)
* `Enlite <../Hardware/MM640g.html>`_: quite complicated with a lot of extra stuff


Nightscout
--------------------------------------------------
Nightscout is a open source web application that can log and display your CGM data and AndroidAPS data and creates reports. You can find more information on the `website of the Nightscout project <http://www.nightscout.info/>`_. You can create your own Nightscout website `using Heroko <http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku>`_, use the semi-automated Nightscout setup on `zehn.be <https://ns.10be.de/en/index.html>`_ or host it on your own server (this is for IT experts).

Nightscout is independent of the other modules. You will need it to fulfill Objective 1.

Additional information on how to configure Nightscout for use with AndroidAPS can be found `here <../Installing-AndroidAPS/Nightscout.html>`_.

AAPS-.apk file
--------------------------------------------------
The basic component of the system. Before installing the app, you have to build the apk-file (which is the filename extension for an Android App) first. Instructions are  `here <../Installing-AndroidAPS/Building-APK.html>`_.  

Optional Modules
==================================================
Smartwatch
--------------------------------------------------
You can choose any smartwatch with Android Wear 1.x and above. Most loopers wear a Sony Smartwatch 3 (SWR50) as it is the only watch that can get readings from Dexcom G5/G5 when phone is out of range. Some other watches can be patched to work as a standalone receiver as well (see `this documentation <https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5>`_ for more details).

Users are creating a `list of tested phones and watches <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_. There are different watchfaces for use with AndroidAPS, which you can find `here <../Configuration/Watchfaces.html>`_.

To record a phone or watch that isn't already listed in the spreadsheet then please fill in the `form <https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform>`_.

Any problems with the spreadsheet please send an email to `hardware@androidaps.org <mailto:hardware@androidaps.org>`_, any donations of phone/watch models that still need testing please send an email to `donations@androidaps.org <mailto:hardware@androidaps.org>`_.

xDrip+
--------------------------------------------------
Even if you don't need to have the xDrip+ App as BG Source, you can still use it for i.e. alarms or a good blood glucose display. You can have as many as alarms as you want, specify the time when the alarm should be active, if it can override silent mode, etc. Some xDrip+ information can be found `here <../Configuration/xdrip.html>`_. Please be aware that the documentations to this app are not always up to date as its progress is quite fast.

Configuración de ejemplo
==================================================
If you want to get a step by step example, you might want to look at a sample setup. The first sample setup is quite old, but should be still up-to-date.

.. toctree::
   :maxdepth: 1
   :glob:
   
   Sample Setup <../Getting-Started/Sample-Setup.rst>
 
  
What to do while waiting for modules
==================================================
It sometimes takes a while to get all modules for closing the loop. But no worries, there are a lot of things you can do while waiting. It is NECESSARY to check and (where approporiate) adapt basal rates (BR), insulin-carbration (IC), insulin-sensitivity-factors (ISF) etc. And maybe open loop can be a good way to test the system and get familiar with AndroidAPS. Using this mode, AndroidAPS gives treatment advices you can manually execute.

You can keep on reading through the docs here, get in touch with other loopers online or offline, `read <https://androidaps.readthedocs.io/en/dev/EN/Where-To-Go-For-Help/Background-reading.html>`_ documentations or what other loopers write (even if you have to be careful, not everything is correct or good for you to reproduce).

**Done?**
If you have your AAPS components all together (congrats!) or at least enough to start in open loop mode, you should first read through the `Objective description <../Usage/Objectives.html>`_ before each new Objective and setup up your `hardware <../index.html#component-setup>`_.
