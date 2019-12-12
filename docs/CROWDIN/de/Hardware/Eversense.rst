Für Eversense Nutzer
**************************************************
Am einfachsten kann man Eversense mit AndroidAPS nutzen, indem man die modifizierte `Eversense App <https://github.com/BernhardRo/Esel/blob/master/apk/eversense_cgm_v1.0.409_com.senseonics.gen12androidapp-patched.apk>`_ installiert (zunächst muss die Original-App deinstalliert werden).

**Warnung: Durch die Deinstallation der alten App, werden Deine lokalen historischen Daten (älter als eine Woche) verloren gehen!**

Um die Eversense-Daten in AndroidAPS nutzen zu können, musst Du die App `ESEL <https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk>`_ installieren und "Send to AAPS and xDrip" in ESEL und "MM640g" als BZ-Quelle im `Konfigurations-Generator <../Configuration/Config-Builder.html>`_ von AndroidAPS auswählen. Da die Glukose-Daten von Eversense manchmal schwankend ("noisy") sein können, sollte in ESEL "Smooth Data" aktiviert werden. Das ist besser als die Option  "Always use short average delta instead of simple delta" zu wählen.

Weitere Hinweise zur Nutzung von xDrip mit Eversense findest Du `hier <https://github.com/BernhardRo/Esel/tree/master/apk>`_.
