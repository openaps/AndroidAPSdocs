Preferencias
***********************************************************
* Open preferences by clicking three-dot-menu on top right side of home screen.

  .. image:: ../images/Pref2020_Open.png
    :alt: Open preferences

* You can jump directly to preferences for a certain tab (i.e. pump tab) by opening this tab and click Plugin preferences.

  .. image:: ../images/Pref2020_OpenPlugin.png
    :alt: Open plugin preferences
    
* Sub-menus can be opened by clicking the triangle below the sub-menu title.

  .. image:: ../images/Pref2020_Submenu.png
    :alt: Open submenu

General
===========================================================

**Units**

* Set units to mmol/l or mg/dl depending on your preferences.

**Language**

* New option to use phone's default language (recommended). 
* In case you want AAPS in different language than standard phone language you can choose from a broad variety.
* If you use different languages you might sometimes see a language mix. This is due to an android issue that overriding default android language sometimes doesn't work.

  .. image:: ../images/Pref2020_General.png
    :alt: Preferences > General

**Patient name**

* Can be used if you have to differentiate between multiple setups (i.e. two T1D kids in your family).

Protección
-----------------------------------------------------------
Contraseña maestra
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Necessary to be able to `export settings <../Usage/ExportImportSettings.html>`_ as they are encrypted as of version 2.7.

   **Biometric protection does not work on OnePlus phones. This is a know issue of OnePlus.**

* Open Preferences (three-dot-menu on top right of home screen)
* Click triangle below "General"
* Click "Master-Password"
* Enter password, confirm password and click ok.

  .. image:: ../images/MasterPW.png
    :alt: Set master password
  
Protección de ajustes
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Protect your settings with a password or phone's biometric authentication (i.e. `child is using AAPS <../Children/Children.html>`_).
* Custom password should be used if you want to use master password just for securing `exported settings <../Usage/ExportImportSettings.html>`_.
* If you are using a custom password click on line "Settings password" to set password as described `above <../Configuration/Preferences.html#master-password>`_.

  .. image:: ../images/Pref2020_Protection.png
    :alt: Protection

Protección de aplicación
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* If app is protected you must enter password or use phone's biometric authentication to open AAPS.
* App will shut down immediately if wrong password is entered - but still run in the background if it was previously opened successfully.

Protección de bolo
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Bolus protection might be useful if AAPS is used by a small child and you `bolus via SMS <../Children/SMS-Commands.html>`_.
* In the example below you see the prompt for biometric protection. If biometric authentication does not work, click in the space above the white prompt and enter master password.

  .. image:: ../images/Pref2020_PW.png
    :alt: Prompt biometric protection

Tema
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* You can choose from three types of skins:

  .. image:: ../images/Pref2020_Skin.png
    :alt: Select skin

* Difference depend of phone's display orientation

Portrait orientation
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
* **Original Skin** and **Buttons are always displayed on bottom of screen** are identical
* **Large Display** has an increased size of all graphs compare to other skins

Landscape orientation
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
* Using **Original Skin** and **Large Display**, you have to scroll down to see buttons at the bottom of the screen
* **Large Display** has an increased size of all graphs compare to other skins

  .. image:: ../images/Screenshots_Skins.png
    :alt: Skins depending on phone's display orientation

Inicio
===========================================================

* In overview section you can define preferences for home screen.

  .. image:: ../images/Pref2020_OverviewII.png
    :alt: Preferences > Overview

Mantener pantalla activa
-----------------------------------------------------------
* Useful while giving a presentation. 
* Va a consumir una gran cantidad de energía, por lo que es recomendable tener el teléfono conectado a un cargador.

Botones
-----------------------------------------------------------
* Define which buttons are visible on the bottom of your home screen.
* With the increment figure you can define amount for the three buttons in carb and insulin dialogue for easy entry.

  .. image:: ../images/Pref2020_OV_Buttons.png
    :alt: Preferences > Buttons

Quick Wizard
-----------------------------------------------------------
* If you have a frequent snack or meal, you can use the quick wizard button to easily enter amount of carbs and set calculation basics.
* In setup you define during which time period the button will be visible on your home screen - just one button per period.
* If you click the quick wizard button AAPS will calculate and propose a bolus for those carbs based on your current ratios (considering blood glucose value or insulin on board if set up). 
* The proposal has to be confirmed before insulin is delivered.

  .. image:: ../images/Pref2020_OV_QuickWizard.png
    :alt: Preferences > Quick Wizard Button
  
Default temp targets
-----------------------------------------------------------
* `Temp targets (TT) <../Usage/temptarget.html#temp-targets>`_ allow you to define change your blood glucose target for a certain time period.
* With setting of default TT you can easily change your target for activity, eating soon etc.
* Press long on your target in the top right corner on the home screen or use the shortcuts in the orange “Carbs” button at the bottom.

  .. image:: ../images/Pref2020_OV_DefaultTT.png
    :alt: Preferences > Default temp targets
  
Llenar/Rellenar cantidad de insulina estándar
-----------------------------------------------------------
* If you want to fill tube or prime canula through AAPS you can do this through `actions tab <../Usage/CPbefore26.html#pump>`_.
* Pre-set values can be defined in this dialogue.

Range for visualization
-----------------------------------------------------------
* Define which part of the graph on the home screen shall be you target range and be filled with green background.

  .. image:: ../images/Pref2020_OV_Range2.png
    :alt: Preferences > Range for visualization

Título corto en pestaña
-----------------------------------------------------------
* See more tab titles on screen. 
* For example the 'OpenAPS AMA' tab becomes 'OAPS', 'OBJECTIVES' becomes 'OBJ' etc.

  .. image:: ../images/Pref2020_OV_Tabs.png
    :alt: Preferences > Tabs

Show notes field in treatments dialogs
-----------------------------------------------------------
* Gives you the option to add short text notes to your treatments (bolus wizard, carbs, insulin...) 

  .. image:: ../images/Pref2020_OV_Notes.png
    :alt: Preferences > Notes in treatment dialogs
  
Luces de estado
-----------------------------------------------------------
* Status lights give a visual warning for 
      
   * Cannula age
   * Insulin age (days reservoir is used)
   * Reservoir level (units)
   * Sensor age
   * Battery age
   * Battery level (%)

* If threshold warning is exceeded, values will be shown in yellow.
* If threshold critical is exceeded, values will be shown in red.
* In versions prior to AAPS 2.7 settings for status lights had to be made in Nightscout settings.

  .. image:: ../images/Pref2020_OV_StatusLights2.png
    :alt: Preferences > Status Lights

Advanced Settings (Overview)
-----------------------------------------------------------
Deliver this part of bolus wizard result
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Configuración general para entregar sólo parte del resultado del asistente de bolo. 
* Only the set percentage (must be between 10 and 100) of the calculated bolus is delivered when using bolus wizard. 
* El porcentaje se muestra en el asistente de bolos.

Superbolo
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Option to enable superbolus in bolus wizard.
* `Superbolus <https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/>`_ is a concept to "borrow" some insulin from basal rate in the next two hours to prevent spikes.

Treatment safety
===========================================================
Edad paciente
-----------------------------------------------------------
* Safety limits are set based on the age you select in this setting. 
* If you start hitting these hard limits (like max bolus) it's time to move one step up. 
* It's a bad idea to select higher then real age because it can lead to overdosing by entering the wrong value in insulin dialog (by skipping the decimal dot, for example). 
* If you want to know the actual numbers for these hard-coded safety limits, scroll to the algorithm feature you are using on `this page <../Usage/Open-APS-features.html>`_.

Max bolo permitido [U]
-----------------------------------------------------------
* Defines maximum amount of bolus insulin that AAPS is allowed to deliver at once. 
* Esta configuración existe como un límite de seguridad para evitar la administración de un bolo masivo debido a una entrada accidental o error del usuario. 
* Se recomienda establecer esto en una cantidad razonable que corresponda aproximadamente a la cantidad máxima de insulina en bolo que probablemente necesitará para una dosis de comida o corrección. 
* This restriction is also applied to the results of the bolus calculator.

Máx. carbohidratos permitidos [g]
-----------------------------------------------------------
* Defines the maximum amount of carbs that AAPS bolus calculator is allowed to dose for.
* Esta configuración existe como un límite de seguridad para evitar la administración de un bolo masivo debido a una entrada accidental o error del usuario. 
* Se recomienda establecer esto en una cantidad razonable que corresponda aproximadamente a la cantidad máxima de carbohidratos que probablemente necesite para una comida.

Loop
===========================================================
APS mode
-----------------------------------------------------------
* Toggle between open and closed looping as well as low glucose suspend (LGS)
* **Open looping** means TBR suggestions are made based on your data and appear as a notification. After manual confirmation the command to dose insulin will be transferred to pump.. Only if you use virtual pump you have to enter it manually.
* **Closed looping** means TBR suggestions are automatically sent to your pump without confirmation or input from you.  
* **Low glucose suspend** gives you the possibility to enter into Low Glucose Suspend without the need for the reverting an objective.

Valor mínimo de cambio [%]
-----------------------------------------------------------
* Cuando se utiliza en lazo abierto recibirás notificaciones cada vez que AAPS recomienda ajustar basal. 
* To reduce number of notifications you can either use a wider BG target range or increase percentage of the minimal request rate.
* Esto define el cambio relativo necesario para lanzar una notificación.

Advanced Meal Assist (AMA) or Super Micro Bolus (SMB)
===========================================================
Depending on your settings in `config builder <../Configuration/Config-Builder.html>`_ you can choose between two algorithms:

* `Advanced meal assist (OpenAPS AMA) <../Usage/Open-APS-features.html#advanced-meal-assist-ama>`_ - state of the algorithm in 2017
* `Super Micro Bolus (OpenAPS SMB) <../Usage/Open-APS-features.html#super-micro-bolus-smb>`_ - most recent algorithm for advanced users

OpenAPS AMA settings
-----------------------------------------------------------
* Allows the system to high-temp more quickly after a meal bolus IF you enter carbs reliably. 
* More details about the settings and Autosens can be found in the `OpenAPS docs <http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html>`_.

Max U/h para la basal temporal
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Exists as a safety limit to prevent AAPS from ever being capable of giving a dangerously high basal rate. 
* The value is measured in units per hour (U/h). 
* Se aconseja establecer esto en algo sensato. A good recommendation is to take the **highest basal rate** in your profile and **multiply it by 4**. 
* For example, if the highest basal rate in your profile was 0.5 U/h you could multiply that by 4 to get a value of 2 U/h.
* See also `detailed feature description <../Usage/Open-APS-features.html#max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal>`_.

Max IOB que OpenAPS puede proporcionar [U]
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Cantidad de insulina basal adicional (en unidades) que se acumula en el cuerpo, además de su perfil basal normal. 
* Una vez que se alcanza este valor, AAPS dejará de administrar insulina basal adicional hasta que la insulina a bordo (IOB) basal vuelva a estar dentro de este rango. 
* This value **does not consider bolus IOB**, only basal.
* Este valor se calcula y se vigila independientemente de su tasa basal normal. Solo se considera la insulina basal adicional por encima de la tasa normal.

When you begin looping, **it is advised to set Max Basal IOB to 0** for a period of time, while you are getting used to the system. Esto evita que AAPS administre insulina basal adicional. Durante este tiempo, AAPS aún podrá limitar o cortar su insulina basal para ayudar a prevenir la hipoglucemia. Este es un paso importante para:

* Disponer de un período de tiempo para acostumbrarse de manera segura al sistema AAPS y vigilar cómo funciona.
* Aproveche la oportunidad para perfeccionar su perfil basal y el factor de sensibilidad a la insulina (FSI).
* Vea cómo AAPS limita su insulina basal para prevenir la hipoglucemia.

Cuando se sienta cómodo, puede permitir que el sistema comience a administrarle insulina basal adicional, aumentando el valor de IOB basal máxima. The recommended guideline for this is to take the **highest basal rate** in your profile and **multiply it by 3**. For example, if the highest basal rate in your profile was 0.5 U/h you could multiply that by 3 to get a value of 1.5 U/h.

* Puede comenzar de manera reservada con este valor y aumentarlo lentamente con el tiempo. 
* Estas son solo pautas; el cuerpo de cada uno es diferente. Puede encontrar que necesita más o menos de lo que se recomienda aquí, pero siempre comience de manera reservada y ajuste lentamente.

**Nota: Como medida de seguridad, Max Basal IOB está limitada a 7.**

Autosens
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* `Autosens <../Usage/Open-APS-features.html#autosens>`_ looks at blood glucose deviations (positive/negative/neutral).
* It will try and figure out how sensitive/resistant you are based on these deviations and adjust basal rate and ISF based on these deviations.
* If you select "Autosens adjust target, too" the algorithm will also modify your glucose target.

Advanced settings (OpenAPS AMA)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Normally you do not have to change the settings in this dialogue!
* If you want to change them anyway make sure to read about details in `OpenAPS docs <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#>`_ and to understand what you are doing.

OpenAPS SMB settings
-----------------------------------------------------------
* In contrast to AMA, `SMB <../Usage/Open-APS-features.html#super-micro-bolus-smb>`_ does not use temporary basal rates to control glucose levels, but mainly small super micro boluses.
* You must have started `objective 10 <../Usage/Objectives.html#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb>`_ to use SMB.
* The first three settings are explained `above <./Configuration/Preferences.html#max-u-h-a-temp-basal-can-be-set-to>`_.
* Details on the different enable options are described in `OpenAPS feature section <../Usage/Open-APS-features.html#enable-smb>`_.
* *How frequently SMBs will be given in min* is a restriction for SMB to be delivered only every 4 min by default. This value prevents the system from issuing SMB too often (for example in case of a temp target being set). You should not change this setting unless you know exactly about consequences. 
* If 'Sensitivity raises target' or 'Resistance lowers target' is enabled `Autosens <../Usage/Open-APS-features.html#autosens>`_ will modify your glucose target according to your blood glucose deviations.
* If target is modified it will be displayed with a green background on your home screen.

  .. image:: ../images/Home2020_DynamicTargetAdjustment.png
    :alt: Target modified by autosens
  
Carb required notification
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* This feature is only available if SMB algorithm is selected.
* Eating of additional carbs will be suggested when the reference design detects that it requires carbs.
* In this case you will receive a notification which can be snoozed for 5, 15 or 30 minutes.
* Additionally the required carbs will be displayed in the COB section on your home screen.
* A threshold can  be defined - minimum amount of carbs needed to trigger notification. 
* Carb required notifications can be pushed to Nightscout if wished, in which case an announcement will be shown and broadcast.

  .. image:: ../images/Pref2020_CarbsRequired.png
    :alt: Display carbs required on home screen
  
Advanced settings (OpenAPS SMB)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Normally you do not have to change the settings in this dialogue!
* If you want to change them anyway make sure to read about details in `OpenAPS docs <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#>`_ and to understand what you are doing.

Ajustes absorción
===========================================================

  .. image:: ../images/Pref2020_Absorption.png
    :alt: Absorption settings

min_5m_carbimpact
-----------------------------------------------------------
* The algorithm uses BGI (blood glucose impact) to determine when carbs are absorbed. 
* The value is only used during gaps in CGM readings or when physical activity “uses up” all the blood glucose rise that would otherwise cause AAPS to decay COB. 
* At times when carb absorption can’t be dynamically worked out based on your bloods reactions it inserts a default decay to your carbs. Básicamente, es un seguro contra fallos.
* To put it simply: The algorithm "knows" how your BGs *should* behave when affected by the current dose of insulin etc. 
* Whenever there is a positive deviation from the expected behaviour, some carbs are absorbed/decayed. Big change=many carbs etc. 
* The min_5m_carbimpact does define the default carb absorption impact per 5 minutes. For more details see `OpenAPS docs <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html?highlight=carbimpact#min-5m-carbimpact>`_.
* Standard value for AMA is 5, for SMB it's 8.
* The COB graph on the home screen indicates when min_5m_impact is being used by putting an orange circle at the top.

  .. image:: ../images/Pref2020_min_5m_carbimpact.png
    :alt: COB graph
  
Maximum meal absorption time
-----------------------------------------------------------
* Si come comidas con alto contenido de grasas o proteínas, necesitará aumentar el tiempo de absorción de las comidas.

Advanced settings - autosens ratio
-----------------------------------------------------------
* Define min. and max. `autosens <../Usage/Open-APS-features.html#autosens>`_ ratio.
* Normally standard values (max. 1.2 and min. 0.7) should not be changed.

Configuración de la bomba
===========================================================
The options here will vary depending on which pump driver you have selected in `Config Builder <../Configuration/Config-Builder.html#pump>`_.  Empareje y configure su bomba de según las instrucciones relacionadas con la misma:

* `DanaR Insulin Pump <../Configuration/DanaR-Insulin-Pump.html>`_ 
* `DanaRS Insulin Pump <../Configuration/DanaRS-Insulin-Pump.html>`_
* `Accu Chek Combo Pump <../Configuration/Accu-Chek-Combo-Pump.html>`_
* `Accu Chek Insight Pump <../Configuration/Accu-Chek-Insight-Pump.html>`_ 
* `Medtronic Pump <../Configuration/MedtronicPump.html>`_

Si usa AndroidAPS en lazo abierto, asegúrese de haber seleccionado bomba virtual en config builder.

NSClient
===========================================================

  .. image:: ../images/Pref2020_NSClient.png
    :alt: NSClient

* Set your *Nightscout URL* (i.e. https://yourwebsitename.herokuapp.com) and the *API secret* (a 12 character password recorded in your Heroku variables).
* This enables data to be read and written between both the Nightscout website and AndroidAPS.  
* Verifique si hay errores tipográficos aquí sí está atrapado en el Objetivo 1.
* **Make sure that the URL is WITHOUT /api/v1/ at the end.**
* *Log app start to NS* will record a note in your Nightscout careportal entries every time the app is started.  The app should not be needing to start more than once a day; more frequently than this suggests a problem (i.e. battery optimization not disabled for AAPS). 
* If activated changes in `local profile <../Configuration/Config-Builder.html#local-profile-recommended>`_ are uploaded to your Nightscout site.

Ajustes conexión
-----------------------------------------------------------

  .. image:: ../images/ConfBuild_ConnectionSettings.png
    :alt: NSClient connection settings  
  
* Restrict Nightscout upload to Wi-Fi only or even to certain Wi-Fi SSIDs.
* If you want to use only a specific WiFi network you can enter its WiFi SSID. 
* Multiple SSIDs can be separated by semicolon. 
* Para borrar todos los SSID, introduzca un espacio en blanco en el campo.

Opciones de alarma
-----------------------------------------------------------
* Alarm options allows you to select which default Nightscout alarms to use through the app.  
* For the alarms to sound you need to set the Urgent High, High, Low and Urgent Low alarm values in your `Heroku variables <http://www.nightscout.info/wiki/welcome/website-features#customalarms>`_. 
* They will only work whilst you have a connection to Nightscout and are intended for parent/carers. 
* If you have the CGM source on your phone (i.e. xDrip+ or Dexcom patched app) then use those alarms instead.

Advanced settings (NSClient)
-----------------------------------------------------------

  .. image:: ../images/Pref2020_NSClientAdv.png
    :alt: NS Client advanced settings

* Most options in advanced settings are self-explanatory.
* *Enable local broadcasts* will share your data to other apps on the phone such as xDrip+. 

  * Dexcom patched app does not broadcast directly to xDrip+. 
  * You need to `go through AAPS <../Configuration/Config-Builder.html#bg-source>`_ and enable local broadcast in AAPS to use xDrip+ alarms.
  
* *Always use basal absolute values* must be activated if you want to use Autotune properly. See `OpenAPS documentation <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/understanding-autotune.html>`_ for more details on Autotune.

Comunicaciones SMS
===========================================================
* Options will only be displayed if SMS communicator is selected in `Config Builder <../Configuration/Config-Builder.html#sms-communicator>`_.
* This setting allows remote control of the app by texting instructions to the patient's phone which the app will follow such as suspending loop, or bolusing.  
* Further information is described in `SMS Commands <../Children/SMS-Commands.html>`_.
* Additional safety is obtained through use of an authenticator app and additional PIN at token end.

Automatización
===========================================================
Select which location service shall be used:

* Usar ubicación pasiva: AAPS sólo toma ubicaciones si otras aplicaciones lo están solicitando
* Use network location: Location of your Wi-Fi
* Usar localización GPS (Atención! ¡ Puede provocar una descarga excesiva de la batería!)

Alarma local
===========================================================

  .. image:: ../images/Pref2020_LocalAlerts.png
    :alt: Local alerts

* Settings should be self-explanatory.

Data choices
===========================================================

  .. image:: ../images/Pref2020_DataChoice.png
    :alt: Data choices

* You can help develop AAPS further by sending crash reports to the developers.

Maintenance settings
===========================================================

  .. image:: ../images/Pref2020_Maintenance.png
    :alt: Maintenance settings

* Standard recipient of logs is logs@androidaps.org.
* If you select *Encrypt exported settings* these are encrypted with your `master password <../Configuration/Preferences.html#master-password>`_. In this case master password has to be entered each time settings are exported or imported.

Open Humans
===========================================================
* You can help the community by donating your data to research projects! Details are described on the `Open Humans page <../Configuration/OpenHumans.html>`_.
* In Preferences you can define when data shall be uploaded

   * only if connected to WiFi
   * only if charging
