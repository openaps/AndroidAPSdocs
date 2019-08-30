Dexcom G6
************
Grundsätzliches vorab
===============

* Follow general CGM hygiene and setting sensor recommendation `here <../Hardware/GeneralCGMRecommendation.html>`_.
* Für G6 transmitter, die nach Herbst / Ende 2018 produziert wurden, musst Du eine der letzten `nightly built xDrip+ versions <https://github.com/NightscoutFoundation/xDrip/releases>`_ verwenden. Diese Transmitter haben eine neue Firmware und die letzte stabile Version von xDrip+ vom 10.01.2019 kann mit diesen noch nicht korrekt umgehen.

Allgemeine Hinweise zum Closed Loop mit dem Dexcom G6
================================

Die Nutzung des G6 kann vielleicht etwas komplexer sein, als zunächst vermutet. Mache Dir die folgenden Punkte bewusst, um das System sicher zu nutzen: 

* Wenn Du mit nativen Daten und dem Kalibrierungscode in xDrip+ oder Spike arbeitest, ist es am sichersten, auf den "preemptive" Neustart des Sensors zu verzichten.
* Falls Du den "preemptive restart" verwendest, stelle sicher, dass dieser zu einer Tageszeit erfolgt, zu der Du die Änderungen verfolgen und ggf. durch eine Kalibrierung eingreifen kannst. 
* Falls Du Sensoren verlängerst, verzichte aus Sicherheitsgründen entweder auf die Werkskalibrierung an Tag 11 und 12 oder stelle sicher, dass Du die Abweichungen im Auge hast und evtl. durch Kalibrierung korrigieren kannst.
* Das sogenannte "Pre-soaking" (Sensor früher ohne Transmitter setzen, damit er sich an die Gewebsflüssigkeit "gewöhnt") mit Werkskalibrierung führt wahrscheinlich zu Abweichungen in den Glukosewerten. Falls Du mit "pre-soaking" arbeitest, wirst Du wahrscheinlich besser Ergebnisse erzielen, wenn Du den Sensor kalibrierst.
* Wenn Du nicht auf die Abweichungen, die stattfinden können, achten willst, wäre es evtl. besser bei der Verlängerung auf die Werkskalibrierung zu verzichten und das System wie den G5 (mit "Pflichtkalibrierung") zu nutzen.

Mehr zu den Details und Gründen für diese Empfehlungen findest Du im `kompletten Artikel (englisch) <http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/>`_ von Tim Street auf seiner Seite `www.diabettech.com <http://www.diabettech.com>`_.

Dexcom G6 mit xdrip+
===============================

* Lade `xdrip <https://github.com/NightscoutFoundation/xDrip>`_ herunter und folge den Anleitungen auf Nightscout (`G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>`_).
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > xdrip.
* Adjust settings in xDrip+ according to `xDrip+ settings page <../Configuration/xdrip.html>`_
* If AAPS does not receive BG values when phone is in airplane mode use `Identify receiver` as describe on `xDrip+ settings page <../Configuration/xdrip.html>`_.

G6 mit der gepatchten Dexcom App
=========================================================
* Lade die APK von `https://github.com/dexcomapp/dexcomapp <https://github.com/dexcomapp/dexcomapp>`_ herunter und wähle die Version, die Du benötigst (mg/dl oder mmol/l Version, G6).
* Stoppe den Sensor und deinstalliere die originale Dexcom App, falls du das noch nicht gemacht hast.
* Installiere die heruntergeladene apk
* Starte den Sensor
* Wähle Dexcom G5 (patched) im Konfigurations-Generator (Einstellung in AndroidAPS).

Problembehandlung G6
====================

Allgemeine Vorschläge für die Problemlösung bei CGMs findest Du `hier <./GeneralCGMRecommendation#Troubleshooting>`_.

Neuer Transmitter bei laufendem Sensor
--------------------------------------
Falls Du einen Transmitter bei einer laufenden Sensorsitzung wechseln musst, kannst Du versuchen, den Transmitter zu tauschen, ohne die Transmitterhalterung zu beschädigen. Ein Video findest Du unter `https://youtu.be/AAhBVsc6NZo <https://youtu.be/AAhBVsc6NZo>`_.


