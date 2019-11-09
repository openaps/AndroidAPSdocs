Freestyle Libre 1
******************

Um dein Libre als CGM zu verwenden, das alle 5 Minuten Glukosewerte empfängt, musst du zuerst einen NFC-zu-Bluetooth Adapter kaufen, z.B.:

* MiaoMiao-Reader `https://www.miaomiao.cool/ <https://www.miaomiao.cool/>`_
* Blukon Nightrider `https://www.ambrosiasys.com/howit <https://www.ambrosiasys.com/howit>`_
* BlueReader `https://bluetoolz.de/blueorder/#home <https://bluetoolz.de/blueorder/#home>`_
* Sony Smartwatch 3 (SWR50) als Auslesetool `https://github.com/pimpimmi/LibreAlarm/wiki/ <https://github.com/pimpimmi/LibreAlarm/wiki/>`_

Wenn Du den Libre 1 als BZ-Quelle nutzt, stehen die Funktionen 'Enable SMB always' und 'Enable SMB after carbs' nicht zur Verfügung. Die BZ-Werte des Libre 1 sind für einen sicheren Einsatz dieser Funktionen nicht glatt genug. Weitere Details findest Du unter `Glättung der Blut-Glukose-Daten <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_ .

Libre mit xdrip+
================
* Falls du es noch nicht eingerichtet hast, installiere xdrip und folge den Anweisung auf `LimiTTEer <https://github.com/JoernL/LimiTTer>`_,  `Libre Alarm <https://github.com/pimpimmi/LibreAlarm/wiki>`_ oder `BlueReader <https://unendlichkeit.net/wordpress/?p=680&lang=en>`_ (`Hardware <https://bluetoolz.de/wordpress/>`_).
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Lokaler Broadcast und wähle AN.
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Behandlungen annehmen und wähle AUS.
* Falls du mit AndroidAPS kalibrieren willst dann gehe in xdrip zu Einstellungen > Inter-App Einstellungen > Accept Calibrations und wähle AN.  Du solltest auch die Optionen in Einstellungen > Erweiterte Einstellungen > Erweiterte Kalibrierung kontrollieren.
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > xdrip.
* Passe die Einstellungen von xDrip+ entsprechend den Angaben auf der `Seite xDrip+ Einstellungen <../Configuration/xdrip.html>`_ an. Es gibt einen Teil für grundlegende xDrip+ Einstellungen und für Freestyle Libre xDrip+ Einstellungen.
* Falls AAPS im Flugmodus keine BZ-Werte von xdrip+ bekommt, nutze `Identify receiver` wie auf der Seite `xDrip+ Einstellungen <../Configuration/xdrip.html>`_ beschrieben.

Libre mit Glimp
==================
* Downloade über das Google Play Store die App Glimp und folge der Anleitung auf `Nightscout <http://www.nightscout.info/wiki/welcome/nightscout-for-libre>`_.
* Wähle Glimp im Konfigurations-Generator (Einstellung in AndroidAPS).
