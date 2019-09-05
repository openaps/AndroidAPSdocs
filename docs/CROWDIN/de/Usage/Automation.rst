Automatisierung
***************
Diese Funktion wird mit der nächsten AndroidAPS Version (2.4) verfügbar sein. 

Was ist Automatisierung
================
For the same frequent events, you might always have to change the same settings. Um zusätzliche Arbeit zu vermeiden, kann man versuchen das ganze zu automatisieren (sofern man es genau genug spezifizieren kann). Zum Beispiel kann man ein automatisiertes Hypo-Temp-Target erstellen, das bei einem niedrigen Blutzucker automatisch aktiviert wird. Oder wenn man sich in seinem Sportstudio befindet, könnte automatisch ein temporäres Ziel aktiviert werden. Bevor Du Automatisierung nutzt, solltest Du Dich mit `Temporären Zielen <./temptarget.html>`_ und/oder `Profil Wechsel <./Profiles.html>`_ auseinander gesetzt haben. 

.. image:: ../images/Automation1.png
  :alt: Automation1

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

* verknüpfte Bedingungen: man kann mehrer Bedingungen haben und diese mit "Und", "Oder" oder "Entweder Oder", was bedeutet das falls eine, (aber wirklich nur eine, nicht wenn beide) Bedingung eintritt, die Aktion erfolgt. 
* Zeit vs. Wiederholungszeit: Mit Zeit bestimmt man genau einen nicht wiederholenden Zeitpunkt; mit Wiederholungszeit bestimmt man etwas, das sich wöchentlich wiederholt.
* Standort: in "Konfiguration" (Automation) kan man auswählen, welchen Standort Service man möchte:

  * Passiver Standort: AAPS nutzt nur die Standort, die von andere Apps angefordert werden.
  * Netzwerkstandort: Bestimmung des Standorts mithilfe der Infrastruktur Deines Mobilfunkanbieters (teilweise recht ungenau)
  * GPS Position
  
Aktion
------
Du kannst eine oder mehrere Aktionen wählen: 

* Temporäres Ziel (TT) starten (muss zwischen 72 mg/dl und 270 mg/dl sein und funktioniert nur falls noch kein vorheriges Ziel aktiviert ist)
* Temporäres Ziel (TT) stoppen
* Benachrichtigung/Notiz
* Wechsel des Prozentsatz des Profils (muss zwischen 70% und 130% sein und funktioniert nur falls der vorherige Prozentsatz bei 100% liegt)

Nachdem du deine Aktionen hinzugefügt hast, **vergesse nicht die Standard-Werte zu ändern** indem du auf die Standard-Werte klickst.
 


Beispiele
==========
Dies sind nur Beispiele, keine Ratschäge. Du sollte diese nicht einfach kopieren ohne sicher zu sein, was Du wirklich tust und ohne zu wissen, warum man diese braucht.

Temporäres Ziel bei niedrigem Blutzucker
------------------------------------
.. image:: ../images/Automation2.png
  :alt: Automation2

This is made by a person that wants to get an automatically hypo temp target when having a hypo.

Lunch Time Temp Target
------------------------
.. image:: ../images/Automation3.png
  :alt: Automation3
  
These example is made by a person, that has lunch at the same time during the week. If it is at a certain time at its lunch location, it gets a lower temp target (eating soon) while waiting for the lunch. Because of the "And" connection, it only happens during the certain time and the  location. So it does not work at any other time at this location or at this time when the persons stays home or works longer. 



