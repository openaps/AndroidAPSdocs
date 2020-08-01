Was ist ein Closed Loop-System?
**************************************************

.. image:: ../images/autopilot.png
  :alt: AAPS ist wie ein Autopilot

Ein Closed Loop System für eine künstliche Bauchspeicheldrüse kombiniert verschiedene Komponenten, um Dein Diabetes Management zu vereinfachen. 
In ihrem großartigen Buch `Automated Insulin Delivery <https://www.artificialpancreasbook.com/>`_ bezeichnet Dana M. Lewis, eine der Gründerinnen der Open Source Closed Loop Bewegung, es als `"Autopilot für Deinen Diabetes" <https://www.artificialpancreasbook.com/3.-getting-started-with-your-aps>`_. Aber was bedeutet das?

**Autopilot in einem Flugzeug**

Der Autopilot erledigt nicht den kompletten Job und gibt dem Piloten daher nicht die Möglichkeit, während des gesamten Fluges zu schlafen. Er erleichtert die Arbeit der Piloten. Er entlastet sie von der permanenten Überwachung des Flugzeugs und der Fluglage. Dadurch kann sich der Pilot auf die Überwachung des Luftraums und die Kontrolle der Funktionen des Autopiloten konzentrieren.

Der Autopilot empfängt Signale von verschiedenen Sensoren, ein Computer wertet diese zusammen mit den Vorgaben der Piloten aus und nimmt dann die notwendigen Anpassungen vor. Der Pilot muss sich nicht mehr um die dauernden Justierungen kümmern.

**Closed Loop System**

Gleiches gilt für ein Closed Loop System für eine künstliche Bauchspeicheldrüse. Es macht nicht den kompletten Job für Dich, Du musst Dich weiter um Deinen Diabetes kümmern. Ein Closed Loop System kombiniert die Sensordaten aus einem CGM/FGM mit Deinen Vorgaben zum Diabetes Management wie Basalrate, Korrektur- und BE-Faktoren. Daraus errechnet es Behandlungsvorschläge und setzt diese permanenten kleinen Anpassungen um, um Deinen Diabetes im Zielbereich zu halten und Dich zu entlasten. So bleibt mehr Zeit für das Leben "neben" dem Diabetes.

Genauso wenig wie Du in ein Flugzeug steigen willst, in dem nur noch der Autopilot ohne menschliche Überwachung fliegt, hilft Dir ein Closed Loop System bei Deinem Diabetes Management, benötigt aber immer Deine Unterstützung! **Auch mit einem Closed Loop kannst Du Deinen Diabetes nicht einfach vergessen!**

So wie der Autopilot neben den Sensorwerten auf die Vorgaben der Piloten angewiesen ist, so braucht ein Closed Loop System passende Basalraten, Korrektur- und BE-Faktoren, um Dich erfolgreich unterstützen zu können.


Open Source Closed Loop System für eine künstliche Bauchspeicheldrüse
==================================================
Aktuell sind drei große Open Source Closed Loop Systeme verfügbar:

AndroidAPS (AAPS)
--------------------------------------------------
AndroidAPS wird in `dieser Dokumentation <./WhatisAndroidAPS.html>`_ ausführlich beschrieben. AAPS verwendet ein Android Smartphone für die Berechnungen und die Steuerung Deiner Insulinpumpe. AAPS steht in enger Verbindung mit OpenAPS, sie nutzen beide z.B.  die gleichen Algorithmen.

Kompatible `Insulinpumpen <../Hardware/pumps.html>`_ sind:

* DanaR / DanaRS
* Accu-Chek Combo
* Accu-Chek Insight
* einige alte Medtronic Pumpen (ab AAPS-Version 2.4)

OpenAPS
--------------------------------------------------
`OpenAPS <https://openaps.readthedocs.io>`_ war das erste Open Source Closed Loop System. OpenAPS verwendet einen kleinen Computer wie Raspberry Pi oder Intel Edison.

Kompatible Insulinpumpen sind:

* einige alte Medtronic Pumpen

Loop für iOS
--------------------------------------------------
`Loop for iOS <https://loopkit.github.io/loopdocs/>`_ ist ein Open Source Closed Loop System für iPhones von Apple.

Kompatible Insulinpumpen sind:

* Omnipod Eros
* einige alte Medtronic Pumpen
