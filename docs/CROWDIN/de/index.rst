Herzlich willkommen zur AndroidAPS-Dokumentation
==============================================

**Was ist AndroidAPS?**

AndroidAPS is an app that can communicate with bluetooth-enabled insulin pumps, and runs a version of the OpenAPS "oref0" algorithm.

**Die primären Ziele von AndroidAPS:**

* modular app where it is possible and easy to add new modules without touching the rest of the code
* app that allows localization
* app where it is easy to select what will be included in final apk with an easy change and compilation
* app which supports open and closed APS mode
* Eine App, die die Funktionen eines APS (Artificial Pancreas System) visualisiert (Parameter, Ergebnis und Umsetzung)
* ability to add more APS algorithms and let the user decide what to use
* app which is independent from a pump driver and contains a "Virtual pump" to allow users to safely play with APS
* Eine App mit enger Nightscout-Integration
* app where is easy to add/remove constraints for user safety
* all-in-one app for managing T1D with APS and Nightscout

**Was man benötigt:**

* Ein Android-Smartphone mit Android 5.0 oder höher. Siehe `diese Tabelle <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_ über Erfahrungen, wie gut bestimmte Smartphones mit AndroidAPS funktionieren.
* App zur Weitergabe der Glukosewerte des CGM/FGM-Systems an AndroidAPS, z.B. `xDrip <http://stephenblackwasalreadytaken.github.io/xDrip/>`_/ `xDrip+ <https://github.com/jamorham/xDrip-plus>`_, `Glimp <http://www.nightscout.info/wiki/welcome/nightscout-for-libre>`_ , `G5 patched app <https://github.com/dexcomapp/dexcomapp>`_ or `600SeriesAndroidUploader <https://github.com/pazaan/600SeriesAndroidUploader>`_
* `AndroidAPS <https://github.com/MilosKozak/AndroidAPS>`_ selbst
* `Nightscout <https://github.com/nightscout/cgm-remote-monitor>`_ 0.10.2 oder neuere Version
* A supported pump: Dana-R or Dana-RS Insulin Pump (unless you build your own driver for another insulin pump) or Accu-Chek Combo (currently in wider testing)
* kontinuierliches Glukose-Messsystem (CGM/FGM), z. B. Dexcom G4/G5/G6, Freestyle Libre mit Bluetooth-Aufsatz, Eversense oder Medtronic Guardian


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
   Zukünftig ggf. loopbare Pumpen <./Getting-Started/Future-possible-Pump-Drivers.md>
   FAQ für Looper <./Getting-Started/FAQ.md>
   Glossar <./Getting-Started/Glossary.md>
  
AndroidAPS installieren
------------
.. toctree::
   :maxdepth: 1
   :glob:

   App aus Quellcode erstellen <./Installing-AndroidAPS/Building-APK.md>
   Update <./Installing-AndroidAPS/Update-to-new-version.md>
   Release Notes <./Installing-AndroidAPS/Releasenotes.md>
   Dev Branch <./Installing-AndroidAPS/Dev-branch.md>
   Nightscout <./Installing-AndroidAPS/Nightscout.md>
   
AndroidAPS einrichten 
---------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Konfigurations-Generator <./Configuration/Config-Builder.md>
   BZ-Quelle <./Configuration/BG-Source.md>
   DanaR <./Configuration/DanaR-Insulin-Pump.md>
   DanaRS <./Configuration/DanaRS-Insulin-Pump.md>
   Accu Chek Combo <./Configuration/Accu-Chek-Combo-Pump.md>
   Smartwatch-Integration <./Configuration/Watchfaces.md>
   Einstellungen im Drei-Punkte-Menü <./Configuration/Preferences.md>
   Empfindlichkeitserkennung und COB <./Configuration/Sensitivity-detection-and-COB.md>
   
AndroidAPS nutzen
------------
.. toctree::
   :maxdepth: 1
   :glob:
    
   Beschränkungen (objectives) <./Usage/Objectives.md>
   OpenAPS-Funktionen <./Usage/Open-APS-features.md>
   Profile <./Usage/Profiles.md>
   SMS-Befehle <./Usage/SMS-Commands.md
   Verzögerte Kohlenhydrate (eCarbs) <./Usage/Extended-Carbs.md>
   Zeitzonenwechsel auf Reisen <./Usage/Timezone-traveling.md>
   Logfiles erhalten <./Usage/Accessing-logfiles.md>
   Glukosedaten in xDrip glätten <./Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md>
   Accu Chek Combo - Tipps <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>
   NSClient-Problembehebung <./Usage/Troubleshooting-NSClient.md>

Hilfe durch die Community 
------------
.. toctree::
   :maxdepth: 1
    

   Hintergrundinfos & interessante Artikel <./Where-To-Go-For-Help/Background-reading.md>
   Wohin wenden? <http://androidaps.readthedocs.io/en/latest/DE/hilfe/community.html>

Mithelfen in der Community
------------
.. toctree::
   :maxdepth: 1
       

   Wie kann ich helfen? <./Getting-Started/How-can-I-help.md>
   App übersetzen <./translations.md>
   Am Wiki mitschreiben <./make-a-PR>
   Übersetzungs-Richtlinien <https://androidaps.readthedocs.io/en/l10n_master/DE/mithelfen/uebersetzungs-richtlinien.html>
