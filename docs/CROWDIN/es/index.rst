Bienvenido a la documentación AndroidAPS
==============================================

**Qué es AndroidAPS?**

AndroidAPS is a app that acts as an artificial pancreas system (APS) on an Android smartphone. What is an artificial pancreas system? It is a software program that aims to do what a living pancreas does: keep blood sugar levels within healthy limits automatically. An APS can't do the job as well as a biological pancreas does, but it can make type 1 diabetes easier to manage using devices that are commercially available and software that is simple and safe. Those devices include a continuous glucose monitor (CGM) to tell AndroidAPS about your blood sugar levels and an insulin pump which AndroidAPS controls to deliver appropriate doses of insulin. The app communicates with those devices via bluetooth. It makes its dosing calculations using an algorithm, or set of rules, developed for another artificial pancreas system, called OpenAPS, which has thousands of users and has accumulated millions of hours of use. 

A note of caution: AndroidAPS is not regulated by any medical authority in any country. Using AndroidAPS is essentially carrying out a medical experiment on yourself. Setting up the system requires determination and technical knowledge. If you don't have the technical know-how at the beginning, you will by the end. All the information you need can be found in these documents, elsewhere online, or from others who have already done it -- you can ask them in Facebook groups or other forums. Many people have successfully built AndroidAPS and are now using it entirely safely, but it is essential that every user:

* Builds the system themselves so that they thoroughly understand how it works
* Adjusts the settings to suit their own diabetes
* Maintains and monitors the system to ensure it is working properly

If you're ready for the challenge, please read on. 

**Objetivos principales**

* An app with safety built in. To read about the safety features of the algorithms, known as oref0 and oref1, click here (https://openaps.org/reference-design/)
* An all-in-one app for managing type 1 diabetes with an artificial pancreas and Nightscout
* An app to which users can easily add or remove modules as needed
* An app with different versions for specific locations and languages.
* An app which can be used in open- and closed-loop mode
* An app that is totally transparent: users can input parameters, see results, and make the final decision
* An app which is independent of particular pump drivers and contains a "virtual pump" so users can safely experiment before using it on themselves 
* An app closely integrated with Nightscout
* An app in which the user is in control of safety constraints 

**Qué necesitas para empezar**

* An Android smartphone with Android 5.0 or later. See `this spreadsheet <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_ to learn which phones work best with AndroidAPS.
* A continuous clucose monitor (CGM): Dexcom G4/G5/G6, Freestyle Libre, Eversense, Medtronic Guardian, or PocTech
* An app on the phone to receive CGM data: `xDrip <http://stephenblackwasalreadytaken.github.io/xDrip/>`_/ `xDrip+ <https://jamorham.github.io/#xdrip-plus>`_, `Glimp <https://play.google.com/store/apps/details?id=it.ct.glicemia>`_ , `G5 patched app <https://github.com/dexcomapp/dexcomapp>`_, `PochTech app <https://play.google.com/store/apps/details?id=jp.co.unitec.concretemanagement&hl=gsw>`_ or `600SeriesAndroidUploader <http://pazaan.github.io/600SeriesAndroidUploader/>`_
* `AndroidAPS <https://github.com/MilosKozak/AndroidAPS>`_ itself installed on the phone
* `Nightscout cgm-remote-monitor <http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku>`_ 0.10.2 or later
* A supported pump: Dana-R or Dana-RS from Sooil, or Accu-Chek Combo or Insight from Roche (unless you are able to build your own driver for another insulin pump)


.. note:: 
	**Advertencia**

	* Toda la información y el código descrito aquí solo es de carácter informativo y de educación. Actualmente Nightscout no dispone de HIPAA privacy compliance. Use Nightscout y AndroidAPS bajo su responsabilidad, no use esta información para o código para tomar decisiones médicas.

	* El uso del código de github.com no tiene garantía o soporte formal de ningún tipo. Por favor revise el repositorio de Licencia para más detalles.

	* Todos los productos y nombres de compañias, marcas, servicios, marcas registradas y servicios registrados son propiedad de sus respectivos tenedores. Su uso aquí es informativo y no implica afiliación o pago por ello.

	NOTA- este proyecto no tiene asociación o contraprestación alguna por parte de: `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <http://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>`_.

.. note:: 
   **DANGER! IMPORTANT SAFETY NOTICE**

   The foundation of AndroidAPS safety features discussed in this documentation is built on the safety features of the hardware used to build your system. It is critically important that you only use a tested, fully functioning FDA or CE approved insulin pump and CGM for closing an automated insulin dosing loop. Hardware or software modifications to these components can cause unexpected insulin dosing, causing significant risk to the user. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AndroidAPS system.

   Additionally, it is equally important to only use original supplies such as inserters, cannulas and insulin containers approved by the manufacturer for use with your pump or CGM. Using untested or modified supplies can cause CGM inaccuracy and insulin dosing errors. Insulin is highly dangerous when misdosed - please do not play with your life by hacking with your supplies.

Inicio
----------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Safety First <./Getting-Started/Safety-first.md>
   Pantallazos <./Getting-Started/Screenshots.md>
   Phones <./Getting-Started/Phones.md>
   Opciones de Bombas de insulina <./Getting-Started/Pump-Choices.md>
   Possible future pump drivers  <./Getting-Started/Future-possible-Pump-Drivers.md>
   Sample Setup: Samsung S7, Dana-R, Dexcom G5 and Sony Smartwatch <./Getting-Started/Sample-Setup.md>
   FAQ para loopers <./Getting-Started/FAQ.md>
   Glosario <./Getting-Started/Glossary.md>
  
Instalando AndroidAPS
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Compilando la APK <./Installing-AndroidAPS/Building-APK.md>
   Update to a new version or branch <./Installing-AndroidAPS/Update-to-new-version.md>
   Release notes <./Installing-AndroidAPS/Releasenotes.md>
   Dev branch <./Installing-AndroidAPS/Dev_branch.md>
   Nightscout setup <./Installing-AndroidAPS/Nightscout.md>
   
Configuración 
---------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Config Builder <./Configuration/Config-Builder.md>
   BG Source <./Configuration/BG-Source.md>
   Dexcom G6 hints <./Configuration/Dexcom.md>
   Dana-R pump <./Configuration/DanaR-Insulin-Pump.md>
   Dana-RS pump <./Configuration/DanaRS-Insulin-Pump.md>
   Accu-Chek Combo pump <./Configuration/Accu-Chek-Combo-Pump.md>
   Accu-Chek Insight pump <./Configuration/Accu-Chek-Insight-Pump.md>
   Watchfaces <./Configuration/Watchfaces.md>
   Preferencias <./Configuration/Preferences.md>
   Detección de sensibilidad y COB <./Configuration/Sensitivity-detection-and-COB.md>
   xDrip+ settings <./Configuration/xdrip.md>
   
Uso
------------
.. toctree::
   :maxdepth: 1
   :glob:
    
   Objetivos <./Usage/Objectives.md>
   OpenAPS features <./Usage/Open-APS-features.md>
   Profile switch <./Usage/Profiles.md>
   Temp-targets <./Usage/temptarget.md>
   SMS commands <./Usage/SMS-Commands.md>
   Carbohidratos extendidos <./Usage/Extended-Carbs.md>
   Crossing timezones with pumps <./Usage/Timezone-traveling.md>
   Accessing logfiles <./Usage/Accessing-logfiles.md>
   Smoothing blood glucose data <./Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md>
   Accu-Chek Combo tips for basic usage <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>
   Troubleshooting NSClient <./Usage/Troubleshooting-NSClient.md>
   Android auto <./Usage/Android-auto.md>
   Huawei phones special configuration <./Usage/huawei.md>
   Jelly Pro - battery life optimization <./Usage/jelly.md>
   Automation <./Usage/automation.md>

Donde buscar ayuda 
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Useful resources to read before you start <./Where-To-Go-For-Help/Background-reading.md>
   Cómo puedo ayudar <./Where-To-Go-For-Help/Connect-with-other-users.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Resources/Reference
            
   Resources <./Resources/index>
   For Clinicians <./Resources/clinician-guide-to-AndroidAPS>

How to help
------------
.. toctree::
   :maxdepth: 1
   :glob:

   How to help <./Getting-Started/How-can-I-help.md>
   How to translate the app <./translations.md>
   How to edit the wiki <./make-a-PR>
