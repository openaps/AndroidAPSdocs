Welkom bij de Android APS documentatie
==============================================

** Wat is AndroidAPS? **

AndroidAPS is een app die kan communiceren met bluetooth-aangestuurde insuline pompen, en gebruikt een eigen versie van de OpenAPS "oref0" en "oref1" algoritmes.

**Belangrijkste doelen van AndroidAPS: **

* modulaire app waaraan nieuwe modules eenvoudig kunnen worden toegevoegd, zonder de rest van de code te hoeven aanpassen
* app die in verschillende talen beschikbaar is
* in de app kan gemakkelijk worden gekozen welke onderdelen er in de uiteindelijke apk terechtkomen
* je kunt kiezen om de app te gebruiken in open loop of in closed loop
* in de app kun je zien hoe APS (Artificieel Pancreas System) werkt: input parameters, resultaten en eindbeslissing zijn zichtbaar
* mogelijkheid om meer APS algoritmes toe te voegen, en de gebruiker kan kiezen welke hij wil gebruiken
* app die een "Virtuele pomp" modus heeft zodat gebruikers alles eerst veilig kunnen uitproberen
* app die naadloos samenwerkt met Nightscout
* app waar je gemakkelijk beperkingen kunt toevoegen/weghalen voor de veiligheid van de gebruiker
* alles-in-één app voor het onder controle houden van type 1 diabetes met APS en Nightscout

**Wat heb je nodig om te starten:**

* Een Android smartphone met Android 5.0 of hoger. Zie `dit werkblad <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_ voor ervaringen van anderen hoe goed een telefoon met AndroidAPS werkt.
* App die de gegevens van jouw glucosesensor doorgeeft, bijvoorbeeld `xDrip <http://stephenblackwasalreadytaken.github.io/xDrip/>`_/ `xDrip+ <https://jamorham.github.io/#xdrip-plus>`_, `Glimp <https://play.google.com/store/apps/details?id=it.ct.glicemia>`_ , `G5 patched app <https://github.com/dexcomapp/dexcomapp>`_, `PochTech app <https://play.google.com/store/apps/details?id=jp.co.unitec.concretemanagement&hl=gsw>`_ of `600SeriesAndroidUploader <http://pazaan.github.io/600SeriesAndroidUploader/>`_
* `AndroidAPS <https://github.com/MilosKozak/AndroidAPS>`_ zelf
* `Nightscout cgm-remote-monitor <http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku>`_ 0.10.2 of nieuwer
* Een geschikte insulinepomp: Dana-R, Dana-RS of Accu-Chek Combo (tenzij je je eigen stuurprogramma schrijft voor een andere insulinepomp)
* een Continue Glucose Monitor (CGM): Dexcom G4/G5/G6, Eversense, Medtronic Guardian, PocTech of een Freestyle Libre met bluetooth-zender,


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
   Mogelijk toekomstige insulinepompen <./Getting-Started/Future-possible-Pump-Drivers.md>
   Gebruiksvoorbeeld: Samsung S7, DanaR, Dexcom G5 en Sony Smartwatch <./Getting-Started/Sample-Setup.md>
   Veelgestelde vragen
   Veelgebruikte woordenlijst
  
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
   
   Configuratiescherm <./Configuration/Config-Builder.md>
   BG bron <./Configuration/BG-Source.md>
   DanaR pomp <./Configuration/DanaR-Insulin-Pump.md>
   DanaRS pomp <./Configuration/DanaR-Insulin-Pump.md>
   Accu Chek Combo pomp <./Configuration/Accu-Chek-Combo-Pump.md>
   Smartwatch instellingen <./Configuration/Watchfaces.md>
   Voorkeuren <./Configuration/Preferences.md>
   Gevoeligheidsdetectie en COB <./Configuration/Sensitivity-detection-and-COB.md>
   
Gebruik
------------
.. toctree::
   :maxdepth: 1
   :glob:
    
   Doelen <./Usage/Objectives.md>
   OpenAPS functies <./Usage/Open-APS-features.md>
   Profiel wissel <./Usage/Profiles.md>
   Tijdelijk streefdoel <./Usage/temptarget.md>
   SMS Comando's <./Usage/SMS-Commands.md>
   Vertraagde koolhydraten (eCarbs) <./Usage/Extended-Carbs.md>
   Wisselen van tijdzone <./Usage/Timezone-traveling.md>
   Toegang tot logbestanden <./Usage/Accessing-logfiles.md>
   Filteren van glucosewaardes <./Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md>
   Accu Chek Combo - tips <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>
   Problemen met NSClient oplossen <./Usage/Troubleshooting-NSClient.md>
   Android auto <./Usage/Android-auto.md>
   Huawei phones special configuration <./Usage/huawei.md>

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
   Voor behandelaars/zorgverleners <./Resources/clinician-guide-to-AndroidAPS>

Hoe je zelf kunt helpen
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Hoe kan je helpen <./Getting-Started/How-can-I-help.md>
   De app vertalen <./translations.md>
   De wiki verbeteren <./make-a-PR>
