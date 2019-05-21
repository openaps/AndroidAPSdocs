Herzlich willkommen zur AndroidAPS-Dokumentation
==============================================

**Was ist AndroidAPS?**

AndroidAPS ist eine App, die als künstliche Bauchspeicheldrüse (artificial pancreas system - APS) auf einem Android-Smartphone arbeitet. Was ist eine künstliche Bauchspeicheldrüse? Es ist eine App, die darauf abzielt, das zu tun, was eine funktionierende Bauchspeicheldrüse tut: den Blutzuckerspiegel automatisch in gesunden Grenzen zu halten. Ein APS kann die Aufgabe nicht so gut erfüllen wie eine biologische Bauchspeicheldrüse, aber es kann die Behandlung von Typ-1-Diabetes mit handelsüblichen Geräten und einer einfachen und sicheren Software erleichtern.  Diese Geräte beinhalten einen kontinuierlichen Glukosemonitor (CGM), um AndroidAPS über Deinen Blutzuckerspiegel zu informieren, und eine Insulinpumpe, die von AndroidAPS gesteuert wird, um die passenden Insulindosen zu liefern.  Die App kommuniziert mit diesen Geräten über Bluetooth. Es führt seine Dosisberechnungen unter Verwendung eines Algorithmus oder eines Regelsatzes durch, der für eine andere künstliches Bauchspeicheldrüse, OpenAPS genannt, entwickelt wurde. OpenAPS hat Tausende von Nutzern, die Millionen von Nutzungsstunden gesammelt haben. 

Ein Hinweis zur Vorsicht: AndroidAPS wird nicht von einer medizinischen Aufsichtsbehörde reguliert. Die Verwendung von AndroidAPS ist im Wesentlichen die Durchführung eines medizinischen Experiments an sich selbst. Die Einrichtung des Systems erfordert Entschlossenheit und technisches Wissen. Wenn Dir zu Beginn das technische Know-how noch fehlt, wirst Du es am Ende haben. Alle Informationen, die Du benötigst, findest Du auf dieser und anderen Seiten im Internet. Oder Du kannst Deine Fragen in Facebook-Gruppen oder anderen Foren an erfahrene Nutzer stellen. Viele unterschiedliche Menschen mit Diabetes haben AndroidAPS erfolgreich erstellt und nutzen es nun ganz sicher. Es ist aber wichtig, dass jeder Benutzer

* das System selbst erstellt, damit er/sie vollständig versteht, wie es funktioniert.
* die Einstellungen an seine indiviudellen Bedürfnisse anpasst.
* das System pflegt, auf dem aktuellen Stand hält und es überwacht, um sicherzustellen, dass es ordnungsgemäß funktioniert.

Wenn Du bereit bist, diese Herausforderung anzunehmen, lies bitte weiter. 

**Die primären Ziele von AndroidAPS:**

* Eine App mit eingebauter Sicherheit. Um mehr über die Sicherheitsfunktionen der Algorithmen, die als oref0 und oref1 bekannt sind, zu lesen, klicke hier (https://openaps.org/reference-design/)
* Eine All-in-one-App für das Management Deines Typ1-Diabetes mit einer künstlichen Bauchspeicheldrüse und Nightscout.
* Eine App, zu der Benutzer bei Bedarf Module einfach hinzufügen oder entfernen können.
* Eine App mit Versionen für verschiedenen Standorte und Sprachen.
* Eine App, die im Open- und Closed-Loop-Modus verwendet werden kann.
* Eine App, die vollkommen transparent ist: Benutzer können Parameter eingeben, Ergebnisse sehen und die endgültige Entscheidung treffen.
* Eine App, die unabhängig von bestimmten Pumpen-Treibern ist und eine "virtuelle Pumpe" enthält, damit Benutzer sicher experimentieren können, bevor sie diese zusammen mit ihrer Insulinpumpe verwenden. 
* Eine App, die eng mit Nightscout verbunden ist.
* Eine App, in der der Benutzer die Kontrolle über die Sicherheitseinschränkungen hat. 

**Was man benötigt:**

* Ein Android-Smartphone mit Android 5.0 oder höher. In `dieser Tabelle <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_ findest Du Informationen, welche Smartphones am Besten mit AndroidAPS funktionieren.
* Ein kontinuierliches Glukose-Messsystem (CGM/FGM), z. B. Dexcom G4/G5/G6, Freestyle Libre mit Bluetooth-Aufsatz, Eversense, Medtronic Guardian oder PocTech
* App zum Empfang von CGM Daten, z.B. `xDrip <http://stephenblackwasalreadytaken.github.io/xDrip/>`_/ `xDrip+ <https://jamorham.github.io/#xdrip-plus>`_, `Glimp <https://play.google.com/store/apps/details?id=it.ct.glicemia>`_ , `G5 patched app <https://github.com/dexcomapp/dexcomapp>`_, `PochTech app <https://play.google.com/store/apps/details?id=jp.co.unitec.concretemanagement&hl=gsw>`_ or `600SeriesAndroidUploader <http://pazaan.github.io/600SeriesAndroidUploader/>`_
* `AndroidAPS <https://github.com/MilosKozak/AndroidAPS>`_ selbst (auf Deinem Smartphone installiert)
* `Nightscout cgm-remote-monitor <http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku>`_ 0.10.2 oder neuer
* Eine unterstützte Insulinpumpe: Dana-R oder Dana-RS von Sooil oder Accu-Chek Combo oder Insight vn Roche (es sei denn, Du programmierst Deinen eigenen Treiber für eine andere Insulinpumpe).


.. note:: 
	**Disclaimer und Warnung**

	* Sämtliche Informationen, Gedanken und der Quellcode sind nur für informatorische und wissenschaftliche Zwecke. Nightscout erfüllt keinerlei Anforderungen des Datenschutzes im Gesundheitswesen. Verwenden Sie Nightscout und AndroidAPS auf eigenes Risiko und setzen Sie es nicht ein, um Behandlungsentscheidungen zu treffen.

	* Bei Nutzung des Quellcodes von github.com bestehen keinerlei Gewährleistungs- und Garantieansprüche. Es gibt keinen Support. Im Übrigen wird auf die Lizenz verwiesen, die im Repository abgerufen werden kann.

	* Sämtliche Produkt- und Herstellernamen, Handelsmarken, Dienstleistungsmarken, Warenzeichen und eingetragene Dienstleistungsmarken sind Eigentum ihrer jeweiligen Inhaber und werden nur zu Informationszwecken genutzt und nicht für Werbung oder Marketing. Ihre Verwendung dient nur zur Information und bedeutet weder, dass AAPS zu ihnen gehört, noch dass sie unterstützt werden.

	Bitte beachten: Dieses Projekt steht in keinerlei Verbindung mit `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <http://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>`_.

.. note:: 
   **DANGER! IMPORTANT SAFETY NOTICE**

   The foundation of AndroidAPS safety features discussed in this documentation is built on the safety features of the hardware used to build your system. It is critically important that you only use a tested, fully functioning FDA or CE approved insulin pump and CGM for closing an automated insulin dosing loop. Hardware or software modifications to these components can cause unexpected insulin dosing, causing significant risk to the user. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AndroidAPS system.

   Additionally, it is equally important to only use original supplies such as inserters, cannulas and insulin containers approved by the manufacturer for use with your pump or CGM. Using untested or modified supplies can cause CGM inaccuracy and insulin dosing errors. Insulin is highly dangerous when misdosed - please do not play with your life by hacking with your supplies.

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
   Dev branch (nur für Entwickler) <./Installing-AndroidAPS/Dev_branch.md>
   Nightscout Installation <./Installing-AndroidAPS/Nightscout.md>
   
AndroidAPS einrichten 
---------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Konfigurations-Generator <./Configuration/Config-Builder.md>
   BZ-Quelle <./Configuration/BG-Source.md>
   Dexcom G6 Tipps <./Configuration/Dexcom.md>
   Dana-R Pumpe <./Configuration/DanaR-Insulin-Pump.md>
   Dana-RS Pumpe <./Configuration/DanaRS-Insulin-Pump.md>
   Accu-Chek Combo Pumpe <./Configuration/Accu-Chek-Combo-Pump.md>
   Accu-Chek Insight Pumpe <./Configuration/Accu-Chek-Insight-Pump.md>
   Smartwatch-Integration <./Configuration/Watchfaces.md>
   Einstellungen im Drei-Punkte-Menü <./Configuration/Preferences.md>
   Empfindlichkeitserkennung und COB <./Configuration/Sensitivity-detection-and-COB.md>
   xDrip+ Einstellungen <./Configuration/xdrip.md>
   
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
   Jelly Pro - Optimierung der Batterielaufzeit <./Usage/jelly.md>
   Automatisierung <./Usage/automation.md>

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
