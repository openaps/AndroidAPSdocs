Herzlich willkommen zur AndroidAPS-Dokumentation
==============================================

**Was ist AndroidAPS?**

AndroidAPS ist eine App, die mit Bluetooth-fähigen Insulinpumpen kommunizieren kann und eine Version des OpenAPS "oref0"-Algorithmus ausführt.

**Die primären Ziele von AndroidAPS:**

* App mit „modularer Basis“. Es soll leicht sein, neue Module hinzuzufügen
* App, die in viele Sprachen übersetzt werden kann
* App, bei der vor dem Kompilieren leicht ausgewählt werden kann, was in der Programm-Datei (apk) enthalten sein soll
* Eine App, die es ermöglicht, einen Open- oder Closed-Loop-Modus zu wählen
* Eine App, die die Funktionen eines APS (Artificial Pancreas System) visualisiert (Parameter, Ergebnis und Umsetzung)
* Die Möglichkeit, andere Algorithmen zu verwenden
* Eine „Virtuelle Pumpe“, mit der man alles ausprobieren kann, bevor man startet
* Eine App mit enger Nightscout-Integration
* Die Möglichkeit zum Hinzufügen/Entfernen von Beschränkungen
* Eine App, die alles enthält, um mit dem Diabetes zurechtzukommen (APS+Nightscout)

**Was man benötigt:**

* Ein Android-Smartphone mit Android 5.0 oder höher. Siehe `diese Tabelle <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_ über Erfahrungen, wie gut bestimmte Smartphones mit AndroidAPS funktionieren.
* App zur Weitergabe der Glukosewerte des CGM/FGM-Systems an AndroidAPS, z.B. `xDrip <http://stephenblackwasalreadytaken.github.io/xDrip/>`_/ `xDrip+ <https://github.com/jamorham/xDrip-plus>`_, `Glimp <http://www.nightscout.info/wiki/welcome/nightscout-for-libre>`_ , `G5 patched app <https://github.com/dexcomapp/dexcomapp>`_ or `600SeriesAndroidUploader <https://github.com/pazaan/600SeriesAndroidUploader>`_
* `AndroidAPS <https://github.com/MilosKozak/AndroidAPS>`_ selbst
* `Nightscout <https://github.com/nightscout/cgm-remote-monitor>`_ 0.10.2 oder neuere Version
* Eine unterstützte Insulinpumpe: Dana-R oder Dana-RS (es sei denn, du programmierst deine eigenen Treiber für andere Insulinpumpe oder Accu-Chek Combo (wird derzeit noch getestet)
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
   Logfiles erhalten <./Usage/Accessing-logfiles.md>
   Glukosedaten in xDrip glätten <./Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md>
   Accu Chek Combo - Tipps <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>

Hilfe durch die Community 
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Hintergrundinfos & interessante Artikel <./Where-To-Go-For-Help/Background-reading.md>
   Wohin wenden? <DE/hilfe/community.md>

Mithelfen in der Community
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Wie kann ich helfen? <./Getting-Started/How-can-I-help.md>
   App übersetzen <./translations.md>
   Am Wiki mitschreiben <./make-a-PR>
* `Übersetzungs-Richtlinien <https://androidaps.readthedocs.io/en/l10n_master/DE/mithelfen/uebersetzungs-richtlinien.html>`_ (nur deutsch)
