Herzlich willkommen zur AndroidAPS-Dokumentation
==============================================

**Was ist AndroidAPS?**

AndroidAPS ist eine App, die mit Bluetooth-fähigen Insulinpumpen kommunizieren kann und die OpenAPS "oref0" und "oref1" Algorithmen ausführt.

**Die primären Ziele von AndroidAPS:**

* App auf „modularer Basis“. Es soll leicht sein, neue Module hinzuzufügen ohne den Rest des Quellcodes anzutasten
* App, die in viele Sprachen übersetzt werden kann
* App, bei der vor dem Kompilieren leicht ausgewählt werden kann, was in der Programm-Datei (apk) enthalten sein soll
* Eine App, die es ermöglicht, einen Open- oder Closed-Loop-Modus zu wählen
* Eine App, die die Funktionen eines APS (Artificial Pancreas System) visualisiert (Parameter, Ergebnis und Umsetzung)
* Die Möglichkeit, andere Algorithmen hinzuzufügen und den Nutzer entscheiden zu lassen, welchen davon er verwenden will
* Eine „Virtuelle Pumpe“, mit der man alles ausprobieren kann, bevor man startet
* Eine App mit enger Nightscout-Integration
* Die Möglichkeit zum Hinzufügen/Entfernen von Beschränkungen zur Sicherheit der Nutzer
* Eine App, die alles enthält, um mit einer künstlichen Bauchspeicheldrüse (APS) und Nightscout den Typ 1 Diabetes zu managen

**Was man benötigt:**

* Ein Android-Smartphone mit Android 5.0 oder höher. Siehe `diese Tabelle <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_ über Erfahrungen, wie gut bestimmte Smartphones mit AndroidAPS funktionieren.
* App zum Empfang von CGM Daten, z.B. `xDrip <http://stephenblackwasalreadytaken.github.io/xDrip/>`_/ `xDrip+ <https://jamorham.github.io/#xdrip-plus>`_, `Glimp <https://play.google.com/store/apps/details?id=it.ct.glicemia>`_ , `G5 patched app <https://github.com/dexcomapp/dexcomapp>`_, `PochTech app <https://play.google.com/store/apps/details?id=jp.co.unitec.concretemanagement&hl=gsw>`_ or `600SeriesAndroidUploader <http://pazaan.github.io/600SeriesAndroidUploader/>`_
* `AndroidAPS <https://github.com/MilosKozak/AndroidAPS>`_ selbst
* `Nightscout cgm-remote-monitor <http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku>`_ 0.10.2 oder neuer
* Eine unterstützte Insulinpumpe: Dana-R oder Dana-RS oder Accu-Chek Combo (es sei denn, du programmierst deine eigenen Treiber für andere Insulinpumpe)
* kontinuierliches Glukose-Messsystem (CGM) als Datenquelle, z. B. Dexcom G4/G5/G6, Freestyle Libre mit Bluetooth-Aufsatz, Eversense, Medtronic Guardian, PocTech


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
   Konfigurationsbeispiel: Samsung S7, DanaR, Dexcom G5 und Sony Smartwatch <./Getting-Started/Sample-Setup.md>
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
   DanaR Pumpe <./Configuration/DanaR-Insulin-Pump.md>
   DanaRS Pumpe <./Configuration/DanaR-Insulin-Pump.md>
   Accu Chek Combo Pumpe <./Configuration/Accu-Chek-Combo-Pump.md>
   Accu Chek Insight pump <./Configuration/Accu-Chek-Insight-Pump.md>
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
   Temporäre Ziele <./Usage/temptarget.md>
   SMS-Befehle <./Usage/SMS-Commands.md>
   Verzögerte Kohlenhydrate (eCarbs) <./Usage/Extended-Carbs.md>
   Zeitzonenwechsel auf Reisen <./Usage/Timezone-traveling.md>
   Logfiles erhalten <./Usage/Accessing-logfiles.md>
   Glättung der Blut-Glukose-Daten <./Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md>
   Accu Chek Combo - Tipps <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>
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
   App übersetzen <./translations.md>
   Am Wiki mitschreiben <./make-a-PR>
   Übersetzungs-Richtlinien <https://androidaps.readthedocs.io/en/l10n_master/DE/mithelfen/uebersetzungs-richtlinien.html>
