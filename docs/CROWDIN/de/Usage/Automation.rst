Automatisierung
***************
Diese Funktion wird mit der nächsten AndroidAPS Version (2.4) verfügbar sein. 

Was ist Automatisierung
================
Für gleichbleibende, mehrfach auftretende Ereignisse, kann es sein, dass man immer dieselben Einstellungen ändern muss. Um zusätzliche Arbeit zu vermeiden, kann man versuchen das ganze zu automatisieren (sofern man es genau genug spezifizieren kann). Zum Beispiel kann man ein automatisiertes Hypo-Temp-Target erstellen, das bei einem niedrigen Blutzucker automatisch aktiviert wird. Oder wenn man sich in seinem Sportstudio befindet, könnte automatisch ein temporäres Ziel aktiviert werden. Bevor Du Automatisierung nutzt, solltest Du Dich mit `Temporären Zielen <./temptarget.html>`_ und/oder `Profil Wechsel <./Profiles.html>`_ auseinander gesetzt haben. 

.. image:: ../images/Automation_ConditionAction.png
  :alt: Automation condition + action

Wie erstellt man eine Automatisierung
================
Um eine Automatisierung zu erstellen, gibt man dieser einen Namen, mindestens eine Bedingung und mindestens eine auszuführende Aktion. 

Allgemein
--------
Es gibt ein paar Einschränkungen. Der Glukosewert muss zwischen 72 und 270 md/dl (2 und 15 mmol/l) liegen. Der Prozentsatz des Profils muss zwischen 70% und 130% liegen.

**Achtung:**

* **weniger als -2 bedeutet: -3 und geringer (-4, -10, etc)**
* **mehr als -2 bedeutet: -1 und größer (-1, 0, +10)**


Bedingung
------------
Man kann zwischen verschiedenen Bedingungen wählen. Hier sind nur ein paar erwähnt, aber die meisten sind selbsterklärend und werden daher hier nicht beschrieben:

* connect conditions: you can have several conditions and can connect them with 

   * "And"
   * "Or"
   * "Exclusive or" (which means that if one (and only one of the) conditions applies, the action(s) will happen)
   
* Zeit vs. recurring time

   * time =  single time event
   * recurring time = something that happens regulalrly (i.e. once a week, every working day etc.)
   
* Standort: in "Konfiguration" (Automation) kan man auswählen, welchen Standort Service man möchte:

  * Passiver Standort: AAPS nutzt nur die Standort, die von andere Apps angefordert werden.
  * Netzwerkstandort: Bestimmung des Standorts mithilfe der Infrastruktur Deines Mobilfunkanbieters (teilweise recht ungenau)
  * GPS Position
  
Aktion
------
Du kannst eine oder mehrere Aktionen wählen: 

* start temp target 

   * must be between 72 mg/dl and 270 mg/dl
   * works only if there is no previous temp target
   
* Temporäres Ziel (TT) stoppen
* Benachrichtigung/Notiz
* profile percentage

   * must be between 70% and 130% 
   * works only if the previous percentage is 100%

Nachdem du deine Aktionen hinzugefügt hast, **vergesse nicht die Standard-Werte zu ändern** indem du auf die Standard-Werte klickst.
 
.. image:: ../images/Automation_Default.png
  :alt: Automation default vs. set values

Beispiele
==========
Dies sind nur Beispiele, keine Ratschäge. Du sollte diese nicht einfach kopieren ohne sicher zu sein, was Du wirklich tust und ohne zu wissen, warum man diese braucht.

Temporäres Ziel bei niedrigem Blutzucker
------------------------------------
.. image:: ../images/Automation2.png
  :alt: Automation2

Dies ist von einer Person erstellt, die ein automatischen Hypo Temp Target möchte bei einem Unterzucker.

Mittagsessen Temporäres Ziel
------------------------
.. image:: ../images/Automation3.png
  :alt: Automation3
  
Dieses Beispiel ist von einer Person, die ihr Mittagessen zu der gleichen Zeit am gleichen Ort in der Woche hat. Falls sie zur einer bestimmten Zeit an einem bestimmten Ort ist, bekommt sie ein niedrigeres temporäres Ziel (eating soon) während sie auf ihr Mittagsessen wartet. Aufgrund der "Und"-Verknüpfung passiert dies eben nur zu einer bestimmten Zeit UND an einem bestimmten Ort. Es funktioniert also nicht zu einer anderen Zeit am selben Standort oder zu derselben Zeit an einem anderem Standort (z.B. falls die Persion zuhause bleibt oder länger am Arbeitsplatz bleibt). 
