Herzlich willkommen zur AndroidAPS-Dokumentation
==============================================

**Was ist AndroidAPS?**

AndroidAPS is a app that acts as an artificial pancreas system (APS) on an Android smartphone. What is an artificial pancreas system? It is a software program that aims to do what a living pancreas does: keep blood sugar levels within healthy limits automatically. An APS can't do the job as well as a biological pancreas does, but it can make type 1 diabetes easier to manage using devices that are commercially available and software that is simple and safe. Those devices include a continuous glucose monitor (CGM) to tell AndroidAPS about your blood sugar levels and an insulin pump which AndroidAPS controls to deliver appropriate doses of insulin. The app communicates with those devices via bluetooth. It makes its dosing calculations using an algorithm, or set of rules, developed for another artificial pancreas system, called OpenAPS, which has thousands of users and has accumulated millions of hours of use. 

A note of caution: AndroidAPS is not regulated by any medical authority in any country. Using AndroidAPS is essentially carrying out a medical experiment on yourself. Setting up the system requires determination and technical knowledge. If you don't have the technical know-how at the beginning, you will by the end. All the information you need can be found in these documents, elsewhere online, or from others who have already done it -- you can ask them in Facebook groups or other forums. Many people have successfully built AndroidAPS and are now using it entirely safely, but it is essential that every user:
* Builds the system themselves so that they thoroughly understand how it works
* Adjusts the settings to suit their own diabetes
* Maintains and monitors the system to ensure it is working properly
If you're ready for the challenge, please read on. 

**Die primären Ziele von AndroidAPS:**

* An app with safety built in. To read about the safety features of the algorithms, known as oref0 and oref1, click here (https://openaps.org/reference-design/)
* An all-in-one app for managing type 1 diabetes with an artificial pancreas and Nightscout
* An app to which users can easily add or remove modules as needed
* An app with different versions for specific locations and languages.
* An app which can be used in open- and closed-loop mode
* An app that is totally transparent: users can input parameters, see results, and make the final decision
* An app which is independent of particular pump drivers and contains a "virtual pump" so users can safely experiment before using it on themselves 
* An app closely integrated with Nightscout
* An app in which the user is in control of safety constraints 

**Was man benötigt:**

* An Android smartphone with Android 5.0 or later. See `this spreadsheet <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_ to learn which phones work best with AndroidAPS.
* A continuous clucose monitor (CGM): Dexcom G4/G5/G6, Freestyle Libre, Eversense, Medtronic Guardian, or PocTech
* An app on the phone to receive CGM data: `xDrip <http://stephenblackwasalreadytaken.github.io/xDrip/>`_/ `xDrip+ <https://jamorham.github.io/#xdrip-plus>`_, `Glimp <https://play.google.com/store/apps/details?id=it.ct.glicemia>`_ , `G5 patched app <https://github.com/dexcomapp/dexcomapp>`_, `PochTech app <https://play.google.com/store/apps/details?id=jp.co.unitec.concretemanagement&hl=gsw>`_ or `600SeriesAndroidUploader <http://pazaan.github.io/600SeriesAndroidUploader/>`_
* `AndroidAPS <https://github.com/MilosKozak/AndroidAPS>`_ itself installed on the phone
* `Nightscout cgm-remote-monitor <http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku>`_ 0.10.2 oder neuer
* A supported pump: Dana-R or Dana-RS from Sooil, or Accu-Chek Combo or Insight from Roche (unless you are able to build your own driver for another insulin pump)


.. note:: 
	**Disclaimer und Warnung**

	* Sämtliche Informationen, Gedanken und der Quellcode sind nur für informatorische und wissenschaftliche Zwecke. Nightscout erfüllt keinerlei Anforderungen des Datenschutzes im Gesundheitswesen. Verwenden Sie Nightscout und AndroidAPS auf eigenes Risiko und setzen Sie es nicht ein, um Behandlungsentscheidungen zu treffen.

	* Bei Nutzung des Quellcodes von github.com bestehen keinerlei Gewährleistungs- und Garantieansprüche. Es gibt keinen Support. Im Übrigen wird auf die Lizenz verwiesen, die im Repository abgerufen werden kann.

	* Sämtliche Produkt- und Herstellernamen, Handelsmarken, Dienstleistungsmarken, Warenzeichen und eingetragene Dienstleistungsmarken sind Eigentum ihrer jeweiligen Inhaber und werden nur zu Informationszwecken genutzt und nicht für Werbung oder Marketing. Ihre Verwendung dient nur zur Information und bedeutet weder, dass AAPS zu ihnen gehört, noch dass sie unterstützt werden.

	Bitte beachten: Dieses Projekt steht in keinerlei Verbindung mit `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <http://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>`_.

Erste Schritte mit AndroidAPS
----------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Sicherheitshinweise <./Getting-Started/Safety-first>
   AndroidAPS-Bildschirme <./Getting-Started/Screenshots.md>
   Smartphones <./Getting-Started/Phones.md>
   Insulinpumpen <./Getting-Started/Pump-Choices.md>
   Possible future pump drivers  <./Getting-Started/Future-possible-Pump-Drivers.md>
   Sample Setup: Samsung S7, Dana-R, Dexcom G5 and Sony Smartwatch <./Getting-Started/Sample-Setup.md>
   FAQ für Looper <./Getting-Started/FAQ.md>
   Glossar <./Getting-Started/Glossary.md>
  
AndroidAPS installieren
------------
.. toctree::
   :maxdepth: 1
   :glob:

   App aus Quellcode erstellen <./Installing-AndroidAPS/Building-APK.md>
   Update auf neue Version oder Branch <./Installing-AndroidAPS/Update-to-new-version.md>
   Release Notes <./Installing-AndroidAPS/Releasenotes.md>
   Dev Branch <./Installing-AndroidAPS/Dev-branch.md>
   Nightscout Installation <./Installing-AndroidAPS/Nightscout.md>
   
AndroidAPS einrichten 
---------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Konfigurations-Generator <./Configuration/Config-Builder.md>
   BZ-Quelle <./Configuration/BG-Source.md>
   Dana-R pump <./Configuration/DanaR-Insulin-Pump.md>
   Dana-RS pump <./Configuration/DanaRS-Insulin-Pump.md>
   Accu-Chek Combo pump <./Configuration/Accu-Chek-Combo-Pump.md>
   Accu-Chek Insight pump <./Configuration/Accu-Chek-Insight-Pump.md>
   Smartwatch-Integration <./Configuration/Watchfaces.md>
   Einstellungen im Drei-Punkte-Menü <./Configuration/Preferences.md>
   Empfindlichkeitserkennung und COB <./Configuration/Sensitivity-detection-and-COB.md>
   
AndroidAPS nutzen
------------
.. toctree::
   :maxdepth: 1
   :glob:
    
   Objectives (Ziele) <./Usage/Objectives.md>
   OpenAPS-Funktionen <./Usage/Open-APS-features.md>
   Profil Wechsel <./Usage/Profiles.md>
   Temp-targets <./Usage/temptarget.md>
   SMS commands <./Usage/SMS-Commands.md>
   Verzögerte Kohlenhydrate (eCarbs) <./Usage/Extended-Carbs.md>
   Crossing timezones with pumps <./Usage/Timezone-traveling.md>
   Logfiles erhalten <./Usage/Accessing-logfiles.md>
   Smoothing blood glucose data <./Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md>
   Accu-Chek Combo tips for basic usage <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>
   NSClient-Problembehebung <./Usage/Troubleshooting-NSClient.md>
   Android Auto <./Usage/Android-auto.md>
   Huawei Smartphones - spezielle Konfigurationseinstellungen<./Usage/huawei.md>
   Automation <./Usage/Automation.md>

Hilfe durch die Community 
------------
.. toctree::
   :maxdepth: 1
    

   Nützliche Informationsquellen vor dem Start <./Where-To-Go-For-Help/Background-reading.md>
   Hilfe <./Where-To-Go-For-Help/Connect-with-other-users.md>

.. toctree::
   :maxdepth: 1
       
   :caption: Resourcen
            
   Informationsquellen <./Resources/index>
   Für Klinikpersonal <./Resources/clinician-guide-to-AndroidAPS>

Mithelfen in der Community
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Wie kann ich helfen? <./Getting-Started/How-can-I-help.md>
   How to translate the app <./translations.md>
   Am Wiki mitschreiben <./make-a-PR>
   Übersetzungs-Richtlinien <https://androidaps.readthedocs.io/en/l10n_master/DE/mithelfen/uebersetzungs-richtlinien.html>
