Vítejte v dokumentaci k AndroidAPS
==============================================

**Co je AndroidAPS?**

AndroidAPS is a app that acts as an artificial pancreas system (APS) on an Android smartphone. What is an artificial pancreas system? It is a software program that aims to do what a living pancreas does: keep blood sugar levels within healthy limits automatically. An APS can't do the job as well as a biological pancreas does, but it can make type 1 diabetes easier to manage using devices that are commercially available and software that is simple and safe. Those devices include a continuous glucose monitor (CGM) to tell AndroidAPS about your blood sugar levels and an insulin pump which AndroidAPS controls to deliver appropriate doses of insulin. The app communicates with those devices via bluetooth. It makes its dosing calculations using an algorithm, or set of rules, developed for another artificial pancreas system, called OpenAPS, which has thousands of users and has accumulated millions of hours of use. 

A note of caution: AndroidAPS is not regulated by any medical authority in any country. Using AndroidAPS is essentially carrying out a medical experiment on yourself. Setting up the system requires determination and technical knowledge. If you don't have the technical know-how at the beginning, you will by the end. All the information you need can be found in these documents, elsewhere online, or from others who have already done it -- you can ask them in Facebook groups or other forums. Many people have successfully built AndroidAPS and are now using it entirely safely, but it is essential that every user:
* Builds the system themselves so that they thoroughly understand how it works
* Adjusts the settings to suit their own diabetes
* Maintains and monitors the system to ensure it is working properly
If you're ready for the challenge, please read on. 

**Primární cíle AndroidAPS:**

* An app with safety built in. To read about the safety features of the algorithms, known as oref0 and oref1, click here (https://openaps.org/reference-design/)
* An all-in-one app for managing type 1 diabetes with an artificial pancreas and Nightscout
* An app to which users can easily add or remove modules as needed
* An app with different versions for specific locations and languages.
* An app which can be used in open- and closed-loop mode
* An app that is totally transparent: users can input parameters, see results, and make the final decision
* An app which is independent of particular pump drivers and contains a "virtual pump" so users can safely experiment before using it on themselves 
* An app closely integrated with Nightscout
* An app in which the user is in control of safety constraints 

**Co potřebuji, abych mohl začít:**

* An Android smartphone with Android 5.0 or later. See `this spreadsheet <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_ to learn which phones work best with AndroidAPS.
* A continuous clucose monitor (CGM): Dexcom G4/G5/G6, Freestyle Libre, Eversense, Medtronic Guardian, or PocTech
* An app on the phone to receive CGM data: `xDrip <http://stephenblackwasalreadytaken.github.io/xDrip/>`_/ `xDrip+ <https://jamorham.github.io/#xdrip-plus>`_, `Glimp <https://play.google.com/store/apps/details?id=it.ct.glicemia>`_ , `G5 patched app <https://github.com/dexcomapp/dexcomapp>`_, `PochTech app <https://play.google.com/store/apps/details?id=jp.co.unitec.concretemanagement&hl=gsw>`_ or `600SeriesAndroidUploader <http://pazaan.github.io/600SeriesAndroidUploader/>`_
* `AndroidAPS <https://github.com/MilosKozak/AndroidAPS>`_ itself installed on the phone
* `Nightscout cgm-remote-monitor <http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku>`_ 0.10.2 nebo novější
* A supported pump: Dana-R or Dana-RS from Sooil, or Accu-Chek Combo or Insight from Roche (unless you are able to build your own driver for another insulin pump)


.. poznámka:: 
	** Upozornění a varování **

	* Všechny informace, myšlenky a kód zde popsané slouží pouze pro informační a vzdělávací účely. Nightscout se nesnaží v současné době dodržovat zákon HIPAA. Používejte Nightscout a AndroidAPS na vaše vlastní riziko a nepoužívejte informace nebo kód k provádění lékařských rozhodnutí.

	* Použití kódu z github.com je bez záruky nebo formální podpory jakéhokoliv druhu. Přečtěte licenci z této repozitoře pro další podrobnosti.

	* Všechny názvy společností a produktů, ochranné známky, servisní známky, registrované ochranné známky a registrované servisní známky jsou vlastnictvím jejich příslušných držitelů. Jejich použití je pro informační účely a neznamená žádné spojení.

	Vezměte prosím na vědomí - tento projekt nemá žádnou spojitost s a není žádným způsobem schválený: `SOOIL <http://www.sooil.com/eng/>` _, `Dexcom <http://www.dexcom.com/>'`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>` _.

Začínáme s AndroidAPS
----------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Bezpečnost především <./Getting-Started/Safety-first>
   Snímky obrazovky <./Getting-Started/Screenshots.md>
   Telefony <./Getting-Started/Phones.md>
   Možné pumpy <./Getting-Started/Pump-Choices.md>
   Possible future pump drivers  <./Getting-Started/Future-possible-Pump-Drivers.md>
   Sample Setup: Samsung S7, Dana-R, Dexcom G5 and Sony Smartwatch <./Getting-Started/Sample-Setup.md>
   Otázky a odpovědi <./Getting-Started/FAQ.md>
   Glosář <./Getting-Started/Glossary.md>
  
Jak nainstalovat AndroidAPS
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Vytvoření APK<./Installing-AndroidAPS/Building-APK.md>
   Jak aktualizovat na novou verzi <./Installing-AndroidAPS/Update-to-new-version.md>
   Poznámky k verzi <./Installing-AndroidAPS/Releasenotes.md>
   Dev branch <./Installing-AndroidAPS/Dev_branch.md>
   Nightscout <./Installing-AndroidAPS/Nightscout.md>
   
Konfigurace 
---------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Konfigurace <./Configuration/Config-Builder.md>
   Zdroj glykémií <./Configuration/BG-Source.md>
   Dana-R pump <./Configuration/DanaR-Insulin-Pump.md>
   Dana-RS pump <./Configuration/DanaRS-Insulin-Pump.md>
   Accu-Chek Combo pump <./Configuration/Accu-Chek-Combo-Pump.md>
   Accu-Chek Insight pump <./Configuration/Accu-Chek-Insight-Pump.md>
   Hodinky <./Configuration/Watchfaces.md>
   Nastavení <./Configuration/Preferences.md>
   Detekce senzitivity a COB <./Configuration/Sensitivity-detection-and-COB.md>
   
Použití
------------
.. toctree::
   :maxdepth: 1
   :glob:
    
   Cíle <./Usage/Objectives.md>
   Možnosti OpenAPS <./Usage/Open-APS-features.md>
   Profily <./Usage/Profiles.md>
   Temp-targets <./Usage/temptarget.md>
   SMS commands <./Usage/SMS-Commands.md>
   Prodloužené sacharidy (eCarbs) <./Usage/Extended-Carbs.md>
   Crossing timezones with pumps <./Usage/Timezone-traveling.md>
   Přístup k log souborům <./Usage/Accessing-logfiles.md>
   Smoothing blood glucose data <./Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md>
   Accu-Chek Combo tips for basic usage <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>
   Odstraňování potíží s NSClientem <./Usage/Troubleshooting-NSClient.md>
   Android auto <./Usage/Android-auto.md>
   Huawei phones special configuration <./Usage/huawei.md>
   Jelly Pro - battery life optimization <./Usage/jelly.md>
   Automation <./Usage/automation.md>

Kam pro pomoc 
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Užitečné zdroje informací než začnete <./Where-To-Go-For-Help/Background-reading.md>
   Kam jít pro pomoc <./Where-To-Go-For-Help/Connect-with-other-users.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Resources/Reference
            
   Resources <./Resources/index>
   For Clinicians <./Resources/clinician-guide-to-AndroidAPS>

Jak pomoci
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Jak mohu pomoci <./Getting-Started/How-can-I-help.md>
   How to translate the app <./translations.md>
   Jak editovat wiki <./make-a-PR>
