Welkom bij de Android APS documentatie
==============================================

** Wat is AndroidAPS? **

AndroidAPS is a app that acts as an artificial pancreas system (APS) on an Android smartphone. What is an artificial pancreas system? It is a software program that aims to do what a living pancreas does: keep blood sugar levels within healthy limits automatically. An APS can't do the job as well as a biological pancreas does, but it can make type 1 diabetes easier to manage using devices that are commercially available and software that is simple and safe. Those devices include a continuous glucose monitor (CGM) to tell AndroidAPS about your blood sugar levels and an insulin pump which AndroidAPS controls to deliver appropriate doses of insulin. The app communicates with those devices via bluetooth. It makes its dosing calculations using an algorithm, or set of rules, developed for another artificial pancreas system, called OpenAPS, which has thousands of users and has accumulated millions of hours of use. 

A note of caution: AndroidAPS is not regulated by any medical authority in any country. Using AndroidAPS is essentially carrying out a medical experiment on yourself. Setting up the system requires determination and technical knowledge. If you don't have the technical know-how at the beginning, you will by the end. All the information you need can be found in these documents, elsewhere online, or from others who have already done it -- you can ask them in Facebook groups or other forums. Many people have successfully built AndroidAPS and are now using it entirely safely, but it is essential that every user:
* Builds the system themselves so that they thoroughly understand how it works
* Adjusts the settings to suit their own diabetes
* Maintains and monitors the system to ensure it is working properly
If you're ready for the challenge, please read on. 

**Belangrijkste doelen van AndroidAPS: **

* An app with safety built in. To read about the safety features of the algorithms, known as oref0 and oref1, click here (https://openaps.org/reference-design/)
* An all-in-one app for managing type 1 diabetes with an artificial pancreas and Nightscout
* An app to which users can easily add or remove modules as needed
* An app with different versions for specific locations and languages.
* An app which can be used in open- and closed-loop mode
* An app that is totally transparent: users can input parameters, see results, and make the final decision
* An app which is independent of particular pump drivers and contains a "virtual pump" so users can safely experiment before using it on themselves 
* An app closely integrated with Nightscout
* An app in which the user is in control of safety constraints 

**Wat heb je nodig om te starten:**

* An Android smartphone with Android 5.0 or later. See `this spreadsheet <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_ to learn which phones work best with AndroidAPS.
* A continuous clucose monitor (CGM): Dexcom G4/G5/G6, Freestyle Libre, Eversense, Medtronic Guardian, or PocTech
* An app on the phone to receive CGM data: `xDrip <http://stephenblackwasalreadytaken.github.io/xDrip/>`_/ `xDrip+ <https://jamorham.github.io/#xdrip-plus>`_, `Glimp <https://play.google.com/store/apps/details?id=it.ct.glicemia>`_ , `G5 patched app <https://github.com/dexcomapp/dexcomapp>`_, `PochTech app <https://play.google.com/store/apps/details?id=jp.co.unitec.concretemanagement&hl=gsw>`_ or `600SeriesAndroidUploader <http://pazaan.github.io/600SeriesAndroidUploader/>`_
* `AndroidAPS <https://github.com/MilosKozak/AndroidAPS>`_ itself installed on the phone
* `Nightscout cgm-remote-monitor <http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku>`_ 0.10.2 of nieuwer
* A supported pump: Dana-R or Dana-RS from Sooil, or Accu-Chek Combo or Insight from Roche (unless you are able to build your own driver for another insulin pump)


.. opmerking:: 
	**Disclaimer en waarschuwing**

	* Alle informatie, gedachten, en de code die hier beschreven staan zijn alleen voor informatieve en educatieve doeleinden. Nightscout probeert zich op geen enkele wijze te houden aan gegevensbewaking van medische gegevens. Gebruik van Nightscout en AndroidAPS is op eigen risico, en gebruik de informatie of code niet om behandelbeslissingen te nemen.

	* Het gebruik van code van github.com is zonder enige garantie of formele ondersteuning. Verdere details zijn te vinden in de licentie, die te vinden is in de Repository op github.

	* Alle product-en bedrijfsnamen, handelsmerken, servicemerken, geregistreerde handelsmerken en geregistreerde dienstmerken zijn eigendom van hun respectievelijke houders. Hun gebruik is voor informatieve doeleinden en impliceert op geen enkele wijze een samenwerking met of goedkeuring van hen.

	NB: - dit project is niet gekoppeld aan en wordt niet ondersteund door: ' SOOIL <http://www.sooil.com/eng/>' _ ' Dexcom <http://www.dexcom.com/>' _, ' Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>' _.

Aan de slag met AndroidAPS
----------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Allereerst de veiligheid <./Getting-Started/Safety-first>
   Screenshots <./Getting-Started/Screenshots.md>
   Telefoons <./Getting-Started/Phones.md>
   Insulinepompen <./Getting-Started/Pump-Choices.md>
   Possible future pump drivers  <./Getting-Started/Future-possible-Pump-Drivers.md>
   Sample Setup: Samsung S7, Dana-R, Dexcom G5 and Sony Smartwatch <./Getting-Started/Sample-Setup.md>
   Veelgestelde vragen <./Getting-Started/FAQ.md>
   Veelgebruikte woordenlijst <./Getting-Started/Glossary.md>
  
AndroidAPS installeren
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Bouwen van de app <./Installing-AndroidAPS/Building-APK.md>
   Bijwerken naar een nieuwe versie of branch <./Installing-AndroidAPS/Update-to-new-version.md>
   Release notes <./Installing-AndroidAPS/Releasenotes.md>
   Dev branch <./Installing-AndroidAPS/Dev-branch.md>
   Nightscout instellen <./Installing-AndroidAPS/Nightscout.md>
   
AndroidAPS instellingen 
---------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Configurator <./Configuration/Config-Builder.md>
   BG bron <./Configuration/BG-Source.md>
   Dana-R pump <./Configuration/DanaR-Insulin-Pump.md>
   Dana-RS pump <./Configuration/DanaRS-Insulin-Pump.md>
   Accu-Chek Combo pump <./Configuration/Accu-Chek-Combo-Pump.md>
   Accu-Chek Insight pump <./Configuration/Accu-Chek-Insight-Pump.md>
   Smartwatch instellingen <./Configuration/Watchfaces.md>
   Instellingen <./Configuration/Preferences.md>
   Gevoeligheidsdetectie en COB <./Configuration/Sensitivity-detection-and-COB.md>
   
Gebruik
------------
.. toctree::
   :maxdepth: 1
   :glob:
    
   Doelen <./Usage/Objectives.md>
   OpenAPS functies <./Usage/Open-APS-features.md>
   Profiel wissel <./Usage/Profiles.md>
   Temp-targets <./Usage/temptarget.md>
   SMS commands <./Usage/SMS-Commands.md>
   Vertraagde koolhydraten (eCarbs) <./Usage/Extended-Carbs.md>
   Crossing timezones with pumps <./Usage/Timezone-traveling.md>
   Toegang tot logbestanden <./Usage/Accessing-logfiles.md>
   Smoothing blood glucose data <./Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md>
   Accu-Chek Combo tips for basic usage <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>
   Problemen met NSClient oplossen <./Usage/Troubleshooting-NSClient.md>
   Android auto <./Usage/Android-auto.md>
   Huawei telefooninstellingen <./Usage/huawei.md>
   Automatisering <./Usage/Automation.md>

Waar je hulp kunt vinden 
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Leestips voordat je begint <./Where-To-Go-For-Help/Background-reading.md>
   Contact met anderen <./Where-To-Go-For-Help/Connect-with-other-users.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Resources/Reference
            
   Resources <./Resources/index>
   Voor behandelaars/zorgprofessionals <./Resources/clinician-guide-to-AndroidAPS>

Hoe je zelf kunt helpen
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Hoe kan je helpen <./Getting-Started/How-can-I-help.md>
   How to translate the app <./translations.md>
   De wiki verbeteren <./make-a-PR>
