Component Overview 
==============================================
AndroidAPS is not just a (self-built) application, it is just one of serveral modules of your closed loop system. Before deciding for components, it would be a good idea to have a look at the `component setup <https://androidaps.readthedocs.io/en/dev/EN/index.html#component-setup>`_, too.
   
.. image:: ../images/modules.png
  :alt: Compontents overview

.. note:: 
   **IMPORTANT SAFETY NOTICE**

   The foundation of AndroidAPS safety features discussed in this documentation is built on the safety features of the hardware used to build your system. It is critically important that you only use a tested, fully functioning FDA or CE approved insulin pump and CGM for closing an automated insulin dosing loop. Hardware or software modifications to these components can cause unexpected insulin dosing, causing significant risk to the user. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AndroidAPS system.

   Additionally, it is equally important to only use original supplies such as inserters, cannulas and insulin containers approved by the manufacturer for use with your pump or CGM. Using untested or modified supplies can cause CGM inaccuracy and insulin dosing errors. Insulin is highly dangerous when misdosed - please do not play with your life by hacking with your supplies.

Necessary Modules
=====================
Good individual dosage algorithm for your diabetes therapy
------------------
Even though this is not something to create or buy, this is the 'module' which is probably underestimated the most but essential. When you let an algorithm help manage your diabetes, it needs to know the right settings to not make severe mistakes.
Even if you are still missing other modules, you can already verify and adapt your 'profile' in collaboration with your diabetes team. 
Most loopers use circadian BR, ISF and CR, which adapt hormonal insulin sensitivity during the day.

The profile includes

* BR (Basal rates)
* ISF (insulin sensitivity factor) is your blood glucose unit per one unit insulin
* CR (carb ratio) is gramms carbohydrate per one unit insulin
* DIA (duration of insulin acting).

Phone
-------
You need an Android smartphone with Google Android 6.0 or above. Users are creating a `list of tested phones and watches <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_

To record a phone or watch that isn't already listed in the spreadsheet then please fill in the `form <https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform>`_.

Any problems with the spreadsheet please send an email to `hardware@androidaps.org <mailto:hardware@androidaps.org>`_, any donations of phone/watch models that still need testing please send an email to `donations@androidaps.org <mailto:hardware@androidaps.org>`_.

Insulin pump
--------
AndroidAPS **currently** works with 

- `Accu-Chek Combo <../Configuration/DanaR-Insulin-Pump.html>`_ (additionally needed: Ruffy app, LineageOS or Android 8.1 on your phone)
- `Accu-Chek Insight <../Configuration/DanaRS-Insulin-Pump.html>`_ 
- `DanaR <../Configuration/Accu-Chek-Combo-Pump.html>`_ 
- `DanaRS  <../Configuration/Accu-Chek-Insight-Pump.html.html>`_  
- `einigen alten Medtronic Pumpen <../Configuration/MedtronicPump.html>`_ ab der neuen Version 2.4 (zusätzlich werden RileyLink/Gnarl Hardware und ein Android Smartphone mit Bluetooth Low Energy (BLE-Chipset) benötigt.)

**Andere Pumpen** die evtl. das Potential haben, küntig mit AndroidAPS zusammen zu arbeiten, sind auf der Seite `Zukünftig ggf. loopbare Pumpen <Future-possible-Pump-Drivers.html>`_ aufgeführt.

Falls Du eine Pumpe **auf eigene Kosten** erwerben willst, findest Du in `dieser Tabelle <https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0>`_ die Adressen der Anbieter in verschiedenen Ländern. Ergänze bitte die Angaben zu Deinem Händler, falls dieser dort noch nicht aufgeführt ist.

**Welche Pumpe ist am Besten für den Closed Loop mit AndroidAPS geeignet?**

Die Combo, die Insight und die älteren Medtronic Pumpen sind solide und "loopfähig". Die Combo hat wegen des Standard Luer-Lock-Anschlusses auch den Vorteil, dass die Auswahl an Kathetern groß ist. Und sie verwendet Standard-Batterien, die rund um die Uhr an jeder Tankstelle erhältlich sind. Im Notfall kannst du sie sogar aus der Fernbedienung in deinem Hotelzimmer "ausleihen" ;-)

Die Vorteile der Dana R/RS gegenüber  der Combo sind aber:

- Die DanaR/RS kann sich mit fast jedem Smartphone verbinden, auf dem das Betriebssystem Google Android >= 5.1 installiert ist. Ein Austausch der werksseitigen Smartphone-Software (z. B. durch das Lineage Betriebssystem) ist nicht nötig. Wenn dein Smartphone kaputt geht oder gestohlen wird, kannst du auf einem anderen / neuen Smartphone sehr schnell die Pumpe wieder steuern... Mit der Combo ist das nicht so einfach,  jedenfalls nicht solange Android 8.1 nur auf wenigen Smartphones installiert ist.
- Das erste Einrichten der Verbindung zwischen der DanaR/RS und dem Smartphone ist einfacher. Allerdings ist dieser Schritt normalerweise nur bei der Ersteinrichtung erforderlich.
- Bislang arbeitet die Combo mit screen parsing. Grundsätzlich funktioniert das gut, aber es ist leider langsam. Beim Loopen ist das nicht so schlimm, denn das läuft alles im Hintergrund ab. Das führt aber dazu, dass eine bestehende Bluetooth-Verbindung leichter abgebrochen wird. Das kann unpraktisch sein, wenn du dich während eines Bolus-Prozesses zu weit vom Smartphone entfernst (z. B. beim Kochen). 
- Die Combo virbiert am Ende jeder TBR, die DanaR vibriert (oder piept) bei Abgabe eines SMB. In der Nacht wird der Loop meistens eher TBR setzen statt SMB.  Die DanaRS kann so eingestellt werden, dass sie weder bei TBR, noch bei SMB vibriert oder piept.
- Die History kann auf der DanaRS in wenigen Sekunden mit COB ausgelesen werden. Deshalb können die Smartphones offline leicht ausgewechselt werden. Sobald einige CGM-Daten verfügbar sind, kann das Loopen fortgesetzt werden.
- Alle Pumpen, die AndroidAPS unterstützt, sind (jedenfalls bei Auslieferung) wasserdicht. Nur die DanaR/Rs garantiert auch während der Nutzung Wasserdichtigkeit durch das abgedichtete Batteriefach und das Reservoir-System. 

BZ-Quelle
------------
Dies ist nur eine knappe Übersicht über alle kompatiblen CGM/FGM mit AndroidAPS. Weitere Details findest Du `hier <../Configuration/BG-Source.html>`_. Nur ein kurzer Hinweis: Wenn Du Deine Glukose-Daten in der xDrip+ App oder Deiner Nightscout-Website anzeigen kannst, kannst Du xDrip+ (oder Nightscout mit Webverbindung) als BZ-Quelle in AAPS wählen.

* Dexcom G4: Diese Sensoren sind relativ alt, aber es gibt im Netz Anleitungen wie Du sie mit der xDrip+ App verwenden kannst.
* Dexcom G5 funktioniert mit der xDrip+ App oder der gepatchten Dexcom App.
* Dexcom G6 funktioniert mit der xDrip+ App oder der gepatchten Dexcom App.
* Libre 1: Du benötigst einen Sender wie Bluecon oder MiaoMiao, den Du selbst bauen oder einfach kaufen kannst, und die xDrip+ App.
* Libre 2 funktioniert direkt ohne weitere Hardware mit xDrip+ (no transmitter needed), aber Du musst Dir selbst die gepatche Libre 2 app erstellen. In dieser `Anleitung <https://github.com/user987654321resu/Libre2-patched-App>`_ findest Du weitere Details.
* Eversense funktioniert bisher nur in Kombination mit der ESEL-App und einer gepatchten Eversense-App (funktioniert nicht mit der Kombination Dana RS und LineageOS, jedoch gut mit DanaRS und Android oder Combo und Lineage OS).
* Enlite: ziemlich kompliziert mit vielen zusätzlichen Sachen


Nightscout
------------
Nightscout ist eine Open Source Web-Anwendung, die Deine CGM-Daten und AndroidAPS-Daten protokollieren und anzeigen kann und Berichte erstellt. Mehr Informationen findest Du auf der `Website des Nightscout-Projekts <http://www.nightscout.info/>`_. Du kannst deine eigene Nightscout-Website mit Hilfe von `Heroko <http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku>`_ erstellen, die halbautomatische Nightscout-Einrichtung auf `zehn.be <https://ns.10be.de/en/index.html>`_ oder auf deinem eigenen Server hosten (dies ist für IT-Experten).

Nightscout ist unabhängig von den anderen Modulen. Du brauchst aber auf jeden Fall eine Nightscout-Seite, um das Objetive (Ziel) 1 abzuschließen.

Weitere Informationen zur Konfiguration von Nightscout für die Verwendung mit AndroidAPS findest Du `hier <../Installing-AndroidAPS/Nightscout.html>`_.

AAPS-.apk Datei
---------------
Die grundlegende Komponente des Systems. Bevor Du die App installierst, musst Du zuerst die apk-Datei (das ist Dateinamenerweiterung für eine Android-App) erstellen. Die Anleitung dazu findest Du `hier <../../Installing-AndroidAPS/Building-APK.html>`_.  

Optionale Module
==================
Smartwatch
---------------
Jede Smartwatch mit Android 1.x oder höher funktioniert. Viele Looper verwenden eine Sony Smartwatch 3 (SWR50), da diese auch Werte vom Dexcom G5/G6 empfangen kann, wenn sich das Smartphone nicht in Reichweite befindet. Einige andere Smartwatches können so gepatched werden, dass sie als 'Standalone receiver' verwendet werden können (siehe `diese Dokumentation <https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5>`_ für weitere Details).

Es gibt eine von AAPS Anwendern erstellte `Liste mit getesteten Smartphones und Smartwatches: <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_. Es gibt verschiedene Watchfaces zur Nutzung mit AndroidAPS, weitere Informationen findest Du `hier <../Configuration/Watchfaces>`_.

To record a phone or watch that isn't already listed in the spreadsheet then please fill in the `form <https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform>`_.

Any problems with the spreadsheet please send an email to `hardware@androidaps.org <mailto:hardware@androidaps.org>`_, any donations of phone/watch models that still need testing please send an email to `donations@androidaps.org <mailto:hardware@androidaps.org>`_.

xDrip+
-------
Auch wenn Du die xDrip+ App nicht als BZ-Datenquelle benötigst, kannst Du sie dennoch für  Alarme oder eine gute Anzeige der Glukosewerte verwenden. Du kannst in xDrip+ beliebig viele Alarme einreichten, festlegen zu welchen Zeiten diese aktiv sein sollen, ob sie die Stummschaltung des Smartphones überschreiben können etc. Weitere Hinweise zu den xDrip+ Einstellungen findest Du `hier <../Configuration/xdrip.html>`_. Beachte bitte, dass die Entwicklung von xDrip+ sehr agil ist und die Dokumentation damit teilweise nicht Schritt halten und entsprechend nicht immer aktuell sein kann.

Konfigurationsbeispiel
============
Eine Schritt-für-Schritt-Anleitung findest Du im Sample Setup. Dieses ist schon etwas älter, die Vorgehensweise ist aber noch aktuell.

.. toctree::
   :maxdepth: 1
   :glob:
   
   Sample Setup 1 <../Getting-Started/Sample-Setup.md>
 
  
Wartezeit überbrücken
============================================
Manchmal dauert es eine Weile, um alle Module für den Closed Loop zusammen zu bekommen. Aber keine Sorge, es gibt viele Dinge, die Du in der Zwischenzeit machen kannst. Es ist ABSOLUT WICHTIG, Deine Basalrate (BR), die KH-Faktoren (IC), Korrekturfaktoren (ISF) etc. intensiv zu prüfen und ggf. anzupassen. Der Open Loop ist zudem eine sehr gute Möglichkeit, das System kennenzulernen und mit AndroidAPS vertraut zu werden. Im Open Loop gibt AndroidAPS Behandlungsempfehlungen, die Du manuell umsetzen musst.

Du kannst Dich weiter durch das Wiki arbeiten, online und offline mit anderen Loopern in Kontakt treten, weitere `Hintergrundinfos <https://androidaps.readthedocs.io/en/dev/EN/Where-To-Go-For-Help/Background-reading.html>`_ oder Berichte von anderen Loopern lesen. Sei aber vorsichtig, nicht alle Anwenderberichte müssen richtig oder für Deinen Fall zutreffend sein.

**Fertig?**
Wenn Du alle Komponenten für AAPS zusammen hast - oder zumindest genug, um mit dem Open Loop zu beginnen - solltest Du zuerst die Beschreibung der `Objectives (Ziele) <../Usage/Objectives.html>`_ lesen und Deine `Hardware <../index.html#component-setup>`_ einrichten. Lies Dir nach dem Erreichen eines Objectives (Ziel) auf jeden Fall nochmals durch, was im nächsten Schritt passiert.
