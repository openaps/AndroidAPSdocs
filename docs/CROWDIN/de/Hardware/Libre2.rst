Freestyle Libre 2
*********************

Freestyle Libre 2 Sensoren können alle 5 Minuten BZ-Werte an AndroidAPS übermitteln. Da sie diese direkt per Bluetooth an Dein Telefon schicken, musst Du keinen Bluetooth-Adapter wie MiaoMiao mehr kaufen. Wenn Du den Libre 2 als BZ-Quelle nutzt, stehen die Funktionen 'Enable SMB always' und 'Enable SMB after carbs' nicht zur Verfügung. Die BZ-Werte des Libre 2 sind für einen sicheren Einsatz dieser Funktionen nicht glatt genug. Weitere Details findest Du unter `Glättung der Blut-Glukose-Daten <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_ .

Schritt 1: Erstelle Deine eigene gepatchtete Librelink-App
==============
* Erstelle Deine eigene gepatchtete Librelink-App nach `dieser Anleitung <https://github.com/user987654321resu/Libre2-patched-App>`_.
* Installiere sie auf Deinem Smartphone und starte einen neuen Sensor mit Deiner gepatchten App.

Schritt 2: Installieren und konfigurieren xDrip+ App
==============
* Falls noch nicht geschehen lade die xDrip App `hier <https://github.com/NightscoutFoundation/xDrip/releases>`_ herunter und installiere sie auf Deinem Smartphone.
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Lokaler Broadcast und wähle AN.
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Behandlungen annehmen und wähle AUS.
* Falls du mit AndroidAPS kalibrieren willst dann gehe in xdrip zu Einstellungen > Inter-App Einstellungen > Accept Calibrations und wähle AN.  Du solltest auch die Optionen in Einstellungen > Erweiterte Einstellungen > Erweiterte Kalibrierung kontrollieren.
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > xdrip.
* Passe die Einstellungen von xDrip+ entsprechend den Angaben auf der Seite `xDrip+ Einstellungen <../Configuration/xdrip.md>`__ an. Es gibt einen Teil für grundlegende xDrip+ Einstellungen und für Freestyle Libre xDrip+ Einstellungen.

Schritt 3: AndroidAPS konfigurieren
==============
* Wähle in AndroidAPS Konfiguration (Hamburger-Menü links oben auf dem Startbildschirm), wähle BZ-Quelle und dann xDrip. 
* Falls AAPS im Flugmodus keine BZ-Werte von xdrip+ bekommt, nutze `Identify receiver` wie auf der Seite `xDrip+ settings page <../Configuration/xdrip.html>`_ beschrieben.
